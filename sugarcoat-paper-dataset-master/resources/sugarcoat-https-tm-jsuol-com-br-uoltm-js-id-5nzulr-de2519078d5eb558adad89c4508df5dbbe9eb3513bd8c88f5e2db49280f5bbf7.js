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
  const $___stub_5299202f9682c77d = {};
  (exports => {
    'use strict';
    exports.doNotTrack = {
      configurable: true,
      enumerable: true,
      get () {
        return '1';
      },
    };
    exports.productSub = {
      configurable: true,
      enumerable: true,
      get () {
        return 20030107;
      },
    };
    exports.vendor = {
      configurable: true,
      enumerable: true,
      get () {
        return '';
      },
    };
  })($___stub_5299202f9682c77d);
  (function () {
    (function (window, document, undefined) {
      try {
        if (window.UOLPD.TagManager['5nzulr']) {
          return;
        }
      } catch (err) {}
      var tmConsole;
      function ContentValidator () {
        var $public = this;
        var $private = {};
        $public.isFilledObject = function (entity) {
          if (!entity || entity.constructor !== Object) {
            return false;
          }
          for (var key in entity) {
            return true;
          }
          return false;
        };
        $public.stringIsNotEmpty = function (string) {
          if (typeof string !== 'string') {
            return false;
          }
          return $private.trimString(string).length > 0;
        };
        $private.trimString = function (string) {
          return string.replace(/^(\s+)|(\s+)$/gm, '').replace(/\s+/gm, ' ');
        };
        $public.stringMatches = function (string, regexp) {
          if (!$public.stringIsNotEmpty(string)) {
            return false;
          }
          return regexp.test(string);
        };
        return $public;
      }
      function CookieUtils () {
        var $public = this;
        var $private = {};
        $private.typeValidator = new TypeValidator();
        $public.getItem = function (name) {
          if (!$private.typeValidator.isString(name)) {
            return;
          }
          var cookie = document.cookie;
          var startIndex = cookie.indexOf(name + '=');
          if (startIndex === -1) {
            return;
          }
          var middleIndex = cookie.indexOf('=', startIndex) + 1;
          var endIndex = cookie.indexOf(';', middleIndex);
          if (endIndex === -1) {
            endIndex = cookie.length;
          }
          return unescape(cookie.substring(middleIndex, endIndex));
        };
        $public.setItem = function (name, value, domain, expireDays, expireHours, expireMinutes) {
          if (!$private.typeValidator.isString(name)) {
            return false;
          }
          if (!$private.typeValidator.isString(value)) {
            return false;
          }
          document.cookie = $private.createCookieString(
            name,
            value,
            domain,
            expireDays,
            expireHours,
            expireMinutes
          );
        };
        $private.createCookieString = function (
          name,
          value,
          domain,
          expireDays,
          expireHours,
          expireMinutes
        ) {
          var cookie = name + '=' + value;
          if ($private.hasExpirationTime(expireDays, expireHours, expireMinutes)) {
            cookie +=
              '; expires=' +
              $private.getExpirationDate(expireDays, expireHours, expireMinutes) +
              '; path=/;';
          }
          if ($private.typeValidator.isString(domain)) {
            if (cookie.substr(cookie.length - 1) !== ';') {
              cookie += ';';
            }
            cookie += ' domain=' + domain + ';';
          }
          return cookie;
        };
        $private.hasExpirationTime = function (days, hours, minutes) {
          if (
            $private.isValidNumber(days) ||
            $private.isValidNumber(hours) ||
            $private.isValidNumber(minutes)
          ) {
            return true;
          }
          return false;
        };
        $private.isValidNumber = function (number) {
          if (!isNaN(parseInt(number)) && parseInt(number) !== 0) {
            return true;
          }
          return false;
        };
        $private.getExpirationDate = function (days, hours, minutes) {
          var exdate = new Date();
          if ($private.isValidNumber(days)) {
            exdate.setDate(exdate.getDate() + days);
          }
          if ($private.isValidNumber(hours)) {
            exdate.setHours(exdate.getHours() + hours);
          }
          if ($private.isValidNumber(minutes)) {
            exdate.setMinutes(exdate.getMinutes() + minutes);
          }
          return exdate.toGMTString();
        };
        $private.setCookie = function (value) {
          document.cookie = value;
        };
        $public.removeItem = function (name, domain) {
          $private.setCookie($private.createCookieString(name, '', domain, -100));
        };
        $public.getCookies = function () {
          return document.cookie;
        };
      }
      function Logs () {
        var $private = {};
        var $public = this;
        $private.queryString = new QueryString();
        $private.typeValidator = new TypeValidator();
        $private.tmConsole = typeof tmConsole !== 'undefined' ? tmConsole : undefined;
        $private.history = { warn: [], error: [], info: [], debug: [], log: [] };
        $public.getPrefix = function (prefix) {
          return $private.prefix;
        };
        $public.setPrefix = function (prefix) {
          if ($private.typeValidator.isString(prefix)) {
            $private.prefix = '[' + prefix + '] ';
          }
        };
        $public.warn = function (message, namTag, namespace, executionTime) {
          if ($public.consoleValidator($private.tmConsole)) {
            $private.tmConsole.append(namTag, namespace, message, executionTime, 'warn');
          }
          return $private.print(message, 'warn');
        };
        $public.error = function (message, namTag, namespace, executionTime) {
          if ($public.consoleValidator($private.tmConsole)) {
            $private.tmConsole.append(namTag, namespace, message, executionTime, 'error');
          }
          return $private.print(message, 'error');
        };
        $public.info = function (message) {
          return $private.print(message, 'info');
        };
        $public.debug = function (message) {
          return $private.print(message, 'debug');
        };
        $public.log = function (message, namTag, namespace, executionTime) {
          if ($public.consoleValidator($private.tmConsole)) {
            $private.tmConsole.append(namTag, namespace, message, executionTime, 'success');
          }
          return $private.print(message, 'log');
        };
        $public.consoleValidator = function (tmConsole) {
          if (!tmConsole) {
            return false;
          }
          if (!$private.typeValidator.isFunction(tmConsole.append)) {
            return false;
          }
          return true;
        };
        $private.print = function (msg, fn) {
          if (!$private.prefix) {
            return;
          }
          if (!$private.typeValidator.isString(msg)) {
            return;
          }
          msg = $private.prefix + msg;
          $public.setHistory(fn, msg);
          if ($public.isActive() === false || !$private.hasConsole()) {
            return;
          }
          return $private.runLogMethod(fn, msg);
        };
        $public.isActive = function () {
          if ($private.queryString.getValue('tm') === 'debug') {
            return true;
          }
          return false;
        };
        $public.getHistory = function (methodName) {
          if ($private.typeValidator.isArray($private.history[methodName])) {
            return $private.history[methodName];
          }
          return;
        };
        $public.setHistory = function (fn, msg) {
          if (
            $private.typeValidator.isString(msg) &&
            $private.typeValidator.isArray($private.history[fn])
          ) {
            $private.history[fn].push(msg);
          }
        };
        $private.hasConsole = function () {
          if (!$private.typeValidator.isDefined($public.getConsole())) {
            return false;
          }
          if (!$private.typeValidator.isDefined($public.getConsoleLog())) {
            return false;
          }
          return true;
        };
        $public.getConsole = function () {
          return window.console;
        };
        $public.getConsoleLog = function () {
          return $public.getConsole().log;
        };
        $private.runLogMethod = function (fn, msg) {
          if ($private.typeValidator.isDefined($public.getConsole()[fn])) {
            $public.getConsole()[fn](msg);
            return fn;
          }
          window.console.log(msg);
          return 'log';
        };
      }
      function NameSpace (packageName) {
        var $private = {};
        var $public = this;
        $private.version = '${project.version}';
        $private.validator = new TypeValidator();
        $public.init = function (packageName) {
          if ($private.validator.isString(packageName)) {
            return $public.create(packageName);
          }
        };
        $public.create = function (packageName) {
          $private.createUOLPD();
          $private.createTagManager();
          return $private.createPackage(packageName);
        };
        $private.createUOLPD = function () {
          if (!$private.validator.isObject(window.UOLPD)) {
            window.UOLPD = {};
          }
        };
        $private.createTagManager = function () {
          if (
            !$private.validator.isObject(UOLPD.TagManager) &&
            !$private.validator.isFunction(UOLPD.TagManager) &&
            typeof UOLPD.TagManager !== 'object'
          ) {
            UOLPD.TagManager = {};
          }
        };
        $private.createPackage = function (packageName) {
          if (!$private.validator.isString(packageName)) {
            return UOLPD.TagManager;
          }
          if (!$private.validator.isObject(UOLPD.TagManager[packageName])) {
            UOLPD.TagManager[packageName] = {};
          }
          UOLPD.TagManager[packageName].version = $private.version;
          if (!$private.validator.isArray(UOLPD.TagManager[packageName].config)) {
            UOLPD.TagManager[packageName].config = [];
          }
          if (!$private.validator.isObject(UOLPD.TagManager[packageName].log)) {
            UOLPD.TagManager[packageName].log = new Logs();
            UOLPD.TagManager[packageName].log.setPrefix('UOLPD.TagManager.' + packageName);
          }
          return UOLPD.TagManager[packageName];
        };
        return $public.init(packageName);
      }
      function QueryString () {
        var $private = {};
        var $public = this;
        $private.typeValidator = new TypeValidator();
        $public.getValue = function (name) {
          if (!$private.queryStrings) {
            return;
          }
          return $private.queryStrings[name];
        };
        $public.getQueryStrings = function () {
          return $private.queryStrings;
        };
        $public.setValues = function () {
          if (!$private.typeValidator.isString($public.getSearch())) {
            return;
          }
          var substrings = $public.getSearch().substring(1).split('&');
          if (!$private.typeValidator.isArray(substrings)) {
            return;
          }
          if (substrings.length === 0) {
            return;
          }
          for (var i = 0, length = substrings.length; i < length; i++) {
            if ($private.typeValidator.isString(substrings[i])) {
              $private.addQueryString(substrings[i]);
            }
          }
        };
        $public.getSearch = function () {
          return window.location.search;
        };
        $private.addQueryString = function (substring) {
          var queryObject = $private.getQueryObject(substring);
          if (!queryObject) {
            return;
          }
          $private.queryStrings = $private.queryStrings || {};
          $private.queryStrings[queryObject.key] = queryObject.value;
        };
        $private.getQueryObject = function (substring) {
          var query = substring.split('=');
          if (!$private.typeValidator.isString(query[0])) {
            return;
          }
          var result = { key: query[0], value: 'true' };
          if ($private.typeValidator.isString(query[1])) {
            result.value = query[1];
          }
          return result;
        };
        $public.setValues();
      }
      function RemoteStorage () {
        var $private = {};
        var $public = this;
        $public.logs = new Logs();
        $public.logs.setPrefix('UOLPD.TagManager');
        $private.validator = new TypeValidator();
        $private.path = 'https://tm.uol.com.br/mercurio.html';
        $private.iframe = undefined;
        $private.iframeLoaded = false;
        $private.queue = [];
        $private.requests = {};
        $public.init = function () {
          $private.hasLoaded(function () {
            $private.iframe = $private.getIframe($private.path);
            if (!$private.iframe) {
              $private.setIframe();
            }
            if ($private.iframe.getAttribute('data-loaded') === 'true') {
              $private.iframeLoaded = true;
            }
            $private.setListener($private.iframe);
            return true;
          });
          return $public;
        };
        $private.getIframe = function (src) {
          return document.querySelector('iframe[src*="' + src + '"]');
        };
        $public.get = function (key, callback, dataType) {
          $private.communicator('get', key, undefined, callback, dataType);
        };
        $public.set = function (key, value, callback, dataType) {
          $private.communicator('set', key, value, callback, dataType);
        };
        $public.removeItem = function (key, callback, dataType) {
          callback = callback || function () {};
          $private.communicator('removeItem', key, undefined, callback, dataType);
        };
        $private.hasLoaded = function (fn, timeout) {
          timeout = timeout ? timeout + 10 : 10;
          if (typeof fn != 'function') {
            return false;
          }
          if (document.body !== null) {
            fn();
            return true;
          }
          window.setTimeout(function () {
            $private.hasLoaded(fn, timeout);
          }, timeout);
        };
        $private.setIframe = function () {
          $private.iframe = $private.buildIframe();
        };
        $private.buildIframe = function () {
          var iframe = document.createElement('iframe');
          iframe.setAttribute('src', $private.path);
          iframe.setAttribute('id', 'tm-remote-storage');
          iframe.setAttribute(
            'style',
            'position:absolute;width:1px;height:1px;left:-9999px;display:none;'
          );
          document.body.appendChild(iframe);
          return iframe;
        };
        $private.setListener = function (iframe) {
          var hasEventListener = window.addEventListener !== undefined;
          var method = hasEventListener ? 'addEventListener' : 'attachEvent';
          var message = hasEventListener ? 'message' : 'onmessage';
          var load = hasEventListener ? 'load' : 'onload';
          iframe[method](load, $private.iframeLoadHandler);
          window[method](message, $private.messageHandler);
          return iframe;
        };
        $private.iframeLoadHandler = function (event) {
          event.target.setAttribute('data-loaded', 'true');
          $private.iframeLoaded = true;
          if (!$private.queue.length) {
            return;
          }
          for (var i = 0, length = $private.queue.length; i < length; i++) {
            $private.sendMessageToIframe($private.queue[i]);
          }
          $private.queue = [];
        };
        $private.messageHandler = function (event) {
          try {
            var data = JSON.parse(event.data);
            $private.requests[data.id].callback(data.key, data.value);
            delete $private.requests[data.id];
          } catch (err) {}
        };
        $private.communicator = function (method, key, value, callback, dataType) {
          if (!$private.validator.isString(key)) {
            $public.logs.warn('Ocorreu um erro ao requisitar os dados');
            return;
          }
          if (method === 'set' && value === undefined) {
            $public.logs.warn('Ocorreu um erro ao requisitar os dados');
            return;
          }
          if (!$private.validator.isFunction(callback)) {
            $public.logs.warn('Ocorreu um erro ao requisitar os dados');
            return;
          }
          var request = {
            id: Math.round(Math.random() * 9000000),
            key: key,
            method: method,
            dataType: dataType,
          };
          if (value) {
            request.value = value;
          }
          var data = { request: request, callback: callback };
          if ($private.iframeLoaded) {
            $private.sendMessageToIframe(data);
          } else {
            $private.queue.push(data);
          }
          if (!$private.iframe) {
            $public.init();
          }
        };
        $private.sendMessageToIframe = function (data) {
          $private.requests[data.request.id] = data;
          data = JSON.stringify(data.request);
          if (!data) {
            return;
          }
          if ($private.iframe && $private.iframe.contentWindow) {
            $private.iframe.contentWindow.postMessage(data, $private.path);
          }
        };
        return $public.init();
      }
      function Schema (configSchema) {
        var $private = {};
        var $public = this;
        $private.typeValidator = new TypeValidator();
        $private.contentValidator = new ContentValidator();
        $public.__constructor = function (configSchema) {
          if (!$private.typeValidator.isObject(configSchema)) {
            return;
          }
          if (!$private.typeValidator.isObject(configSchema.properties)) {
            return;
          }
          if (!$private.isValidRequired(configSchema)) {
            return;
          }
          $private.configSchema = {};
          $private.configSchema.required = [];
          $private.setProperties(configSchema.properties);
          if (configSchema.required.length > 0) {
            $private.configSchema.required = configSchema.required;
          }
          return $public;
        };
        $public.isValid = function (config) {
          if (!$private.configSchema) {
            return false;
          }
          if (!$private.typeValidator.isObject(config)) {
            $public.invalidProperties = $private.configSchema.required;
            return false;
          }
          if (!$private.contentValidator.isFilledObject(config)) {
            $public.invalidProperties = $private.configSchema.required;
            return false;
          }
          return $private.areValidProperties(config);
        };
        $private.isValidRequired = function (configSchema) {
          if (!$private.typeValidator.isArray(configSchema.required)) {
            return false;
          }
          for (var i = 0, length = configSchema.required.length; i < length; i++) {
            var required = configSchema.required[i];
            if (!$private.typeValidator.isString(required)) {
              return false;
            }
            if (!configSchema.properties[required]) {
              return false;
            }
          }
          return true;
        };
        $private.setProperties = function (properties) {
          $private.configSchema.properties = $private.configSchema.properties || {};
          for (var key in properties) {
            var property = $private.getProperty(properties[key]);
            if (property) {
              $private.configSchema.properties[key] = property;
            }
          }
        };
        $private.getProperty = function (property) {
          var result = {};
          if ($private.typeValidator.isRegExp(property)) {
            return { validator: $private.contentValidator.stringMatches, modifier: property };
          }
          if (!$private.typeValidator.isString(property)) {
            return;
          }
          property = property.split(/\|(.+)?/, 2);
          var validator = $private.getValidator(property);
          if (!validator) {
            return;
          }
          result.validator = validator;
          if (property[1]) {
            result.modifier = $private.getModifier(property[1]);
          }
          return result;
        };
        $private.getValidator = function (property) {
          if (property.length === 1) {
            return $private.typeValidator[property[0]];
          }
          return $private.contentValidator[property[0]];
        };
        $private.getModifier = function (modifier) {
          if (!modifier) {
            return;
          }
          try {
            return eval(modifier);
          } catch (e) {}
        };
        $private.areValidProperties = function (config) {
          var isValid = true;
          var requiredProperties = 0;
          for (var property in config) {
            if (!$private.isValidProperty(property, config)) {
              isValid = false;
            }
            if ($private.isRequiredProperty(property)) {
              requiredProperties++;
            }
          }
          if (requiredProperties !== $private.configSchema.required.length) {
            $private.countRequiredProperties(config);
            return false;
          }
          return isValid;
        };
        $private.isValidProperty = function (property, config) {
          var propertyValidator = $private.configSchema.properties[property];
          if (!propertyValidator) {
            return false;
          }
          if (!propertyValidator.validator(config[property], propertyValidator.modifier)) {
            $private.addInvalidProperty(property);
            return false;
          }
          return true;
        };
        $private.getPropertyValidator = function (property) {
          var item = $private.configSchema.properties[property];
          if (!$private.typeValidator.isString(item)) {
            return;
          }
          item = item.split(/\|(.+)?/, 2);
          var validator = $private.typeValidator[item[0]];
          if (!validator) {
            return;
          }
          var contentValidator = $private.contentValidator[item[1]];
          if (!contentValidator) {
            return;
          }
          return { validator: validator, contentValidator: contentValidator };
        };
        $private.validateContent = function (property, contentValidator) {
          try {
            return contentValidator(property, eval(contentValidator));
          } catch (e) {}
        };
        $private.isRequiredProperty = function (property) {
          if ($private.configSchema.required.length === 0) {
            return false;
          }
          for (var i = 0, length = $private.configSchema.required.length; i < length; i++) {
            var required = $private.configSchema.required[i];
            if (required === property) {
              return true;
            }
          }
          return false;
        };
        $private.addInvalidProperty = function (property) {
          if (!$public.invalidProperties) {
            $public.invalidProperties = [];
          }
          if (!$private.arrayHasItem($public.invalidProperties, property)) {
            $public.invalidProperties.push(property);
          }
        };
        $private.arrayHasItem = function (array, item) {
          for (var i = 0, length = array.length; i < length; i++) {
            if (array[i] == item) {
              return true;
            }
          }
          return false;
        };
        $private.countRequiredProperties = function (config) {
          for (var i = 0, length = $private.configSchema.required.length; i < length; i++) {
            var required = $private.configSchema.required[i];
            if (!$private.typeValidator.isDefined(config[required])) {
              $private.addInvalidProperty(required);
            }
          }
        };
        return $public.__constructor(configSchema);
      }
      function ScriptUtils () {
        var $private = {};
        var $public = this;
        $private.typeValidator = new TypeValidator();
        $private.dataCalls = 'data-uoltm-calls';
        $public.hasTagScript = function (src) {
          if (!$private.typeValidator.isString(src)) {
            return false;
          }
          if (src.length === 0) {
            return false;
          }
          if ($public.findScript($private.removeProtocol(src))) {
            return true;
          }
          return false;
        };
        $private.removeProtocol = function (value) {
          return value.replace(/(^\/\/|^http:\/\/|^https:\/\/)/, '');
        };
        $public.findScript = function (src) {
          return document.querySelector('script[src*="' + src + '"]');
        };
        $private.isSrcEqual = function (src1, src2) {
          return src1.indexOf(src2) > -1;
        };
        $public.createScript = function (src) {
          if (!$private.typeValidator.isString(src)) {
            return;
          }
          var tag = document.createElement('script');
          tag.setAttribute('src', src);
          tag.async = true;
          return tag;
        };
        $public.appendTag = function (script) {
          if (!$private.typeValidator.isDefined(script)) {
            return;
          }
          if (script.constructor === HTMLScriptElement) {
            $private.lastScriptsParent().appendChild(script);
            return true;
          }
        };
        $private.lastScriptsParent = function () {
          return document.getElementsByTagName('script')[0].parentNode;
        };
        $public.createSyncScript = function (src) {
          if (!$private.typeValidator.isString(src)) {
            return;
          }
          document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
        };
      }
      function StringUtils () {
        var $private = {};
        var $public = this;
        $private.typeValidator = new TypeValidator();
        $public.trim = function (value) {
          if (!$private.typeValidator.isString(value)) {
            return;
          }
          if (value.length === 0) {
            return;
          }
          value = value.replace(/^(\s+)|(\s+)$/gm, '').replace(/\s+/gm, ' ');
          return value;
        };
        $public.getValueFromKeyInString = function (str, name, separator) {
          if (!$private.typeValidator.isString(name) || name.length === 0) {
            return;
          }
          if (!$private.typeValidator.isString(str) || str.length === 0) {
            return;
          }
          if (!$private.typeValidator.isString(separator) || separator.length === 0) {
            return;
          }
          if (str.substring(str.length - 1)) {
            str += separator;
          }
          name += '=';
          var startIndex = str.indexOf(name);
          if (startIndex === -1) {
            return '';
          }
          var middleIndex = str.indexOf('=', startIndex) + 1;
          var endIndex = str.indexOf(separator, middleIndex);
          if (endIndex === -1) {
            endIndex = str.length;
          }
          return unescape(str.substring(middleIndex, endIndex));
        };
        return $public;
      }
      function TrackManager () {
        var $private = {};
        var $public = this;
        $private.API_URL = '//logger.uol.com.br/v1/?prd=98&gps=true&disp=true&mm=true';
        $private.typeValidator = new TypeValidator();
        $private.scriptUtils = new ScriptUtils();
        $private.baseMetric = { groupingMap: {}, measureMap: {} };
        $private.raffledRate = Math.round(Math.random() * 100);
        $private.samplingRate = 0;
        $public.trackSuccess = function (msr, samplingRate) {
          var sampling = $private.generateSamplingRate(samplingRate);
          $public.addMetrics($private.getMeasures(msr), null, sampling);
        };
        $public.trackExecution = function () {
          var measures = $private.getMeasures('execution');
          if (!$private.isTrackEnabled(1)) {
            return;
          }
          var metric = $private.generateMetric(measures);
          if (!metric) {
            return;
          }
          $private.createNamespaceMetrics();
          window.UOLPD.TagManager.metrics.push(metric);
          $private.triggerMetrics();
        };
        $private.generateSamplingRate = function (samplingRate) {
          if ($private.typeValidator.isNumber(samplingRate)) {
            return samplingRate;
          }
          return $private.samplingRate;
        };
        $public.addMetrics = function (measures, groupings, samplingRate) {
          return;
          if (!$private.isTrackEnabled(samplingRate)) {
            return;
          }
          var metric = $private.generateMetric(measures, groupings);
          if (!metric) {
            return;
          }
          $private.createNamespaceMetrics();
          window.UOLPD.TagManager.metrics.push(metric);
          $private.triggerMetrics();
        };
        $private.isTrackEnabled = function (samplingRate) {
          try {
            if (window.localStorage.getItem('trackManager') == 'true') {
              return true;
            }
          } catch (e) {}
          if ($public.getRaffledRate() <= samplingRate) {
            return true;
          }
          return false;
        };
        $public.getRaffledRate = function () {
          return $private.raffledRate;
        };
        $private.generateMetric = function (measures, groupings) {
          var metric = JSON.parse(JSON.stringify($private.baseMetric));
          if ($private.typeValidator.isObject(measures)) {
            metric.measureMap = metric.measureMap || {};
            for (var msr in measures) {
              metric.measureMap[msr] = measures[msr];
            }
          }
          if ($private.typeValidator.isObject(groupings)) {
            metric.groupingMap = metric.groupingMap || {};
            for (var grp in groupings) {
              metric.groupingMap[grp] = groupings[grp];
            }
          }
          if (Object.keys(metric.measureMap).length < 1) {
            return;
          }
          return metric;
        };
        $private.createNamespaceMetrics = function () {
          window.UOLPD = window.UOLPD || {};
          window.UOLPD.TagManager = window.UOLPD.TagManager || {};
          window.UOLPD.TagManager.metrics = window.UOLPD.TagManager.metrics || [];
        };
        $private.triggerMetrics = function () {
          if (window.UOLPD.TagManager.trackTimeWindow) {
            return;
          }
          window.UOLPD.TagManager.trackTimeWindow = setTimeout(function () {
            window.UOLPD.TagManager.metrics = [];
            clearTimeout(window.UOLPD.TagManager.trackTimeWindow);
            window.UOLPD.TagManager.trackTimeWindow = undefined;
          }, 4000);
        };
        $private.getMeasures = function (msr, value, measure) {
          if (!$private.typeValidator.isString(msr)) {
            return measure;
          }
          if (!value) {
            value = '1';
          }
          if (
            $private.typeValidator.isNumericString(value) ||
            $private.typeValidator.isNumber(value)
          ) {
            measure = measure || {};
            measure[msr] = value;
          }
          return measure;
        };
        $public.getModuleName = function (moduleName) {
          return $private.moduleName;
        };
        $public.setModuleName = function (moduleName) {
          if ($private.typeValidator.isString(moduleName)) {
            $private.moduleName = 'TM-' + moduleName;
          }
          $private.baseMetric.groupingMap = $private.baseMetric.groupingMap || {};
          $private.baseMetric.groupingMap.tm_repo_id = $public.getRepoId();
          $private.baseMetric.groupingMap.Origem = $private.moduleName;
        };
        $public.getRepoId = function () {
          return '5nzulr';
        };
        $public.trackError = function (errorType, errorEffect) {
          var errorGroups = $private.getGroups('erro_tipo', errorType);
          if (!$private.typeValidator.isObject(errorGroups)) {
            return;
          }
          errorGroups = $private.getGroups('erro_efeito', errorEffect, errorGroups);
          if (!$private.typeValidator.isObject(errorGroups)) {
            return;
          }
          $public.addMetrics($private.getMeasures('Erros'), errorGroups);
        };
        $private.getGroups = function (grp, value, groups) {
          if (!$private.typeValidator.isString(grp)) {
            return;
          }
          if (!$private.typeValidator.isString(value) && !$private.typeValidator.isNumber(value)) {
            return;
          }
          groups = groups || {};
          groups[grp] = value;
          return groups;
        };
        $public.trackCustom = function (measure, trackType, trackValue, samplingRate) {
          var metricMeasures = $private.getMeasures(measure);
          var metricsGroups = $private.getGroups(trackType, trackValue);
          if (!metricMeasures || !metricsGroups) {
            return;
          }
          var sampling = $private.generateSamplingRate(samplingRate);
          $public.addMetrics(metricMeasures, metricsGroups, sampling);
        };
        $public.trackCustomObj = function (metrics, samplingRate) {
          if (
            !$private.typeValidator.isObject(metrics) ||
            !$private.typeValidator.isObject(metrics.measures)
          ) {
            return;
          }
          var measures, groups;
          measures = {};
          for (var msr in metrics.measures) {
            measures = $private.getMeasures(msr, metrics.measures[msr], measures);
          }
          if (!$private.isValidMeasures(measures)) {
            return;
          }
          if ($private.typeValidator.isObject(metrics.groups)) {
            groups = {};
            for (var grp in metrics.groups) {
              groups = $private.getGroups(grp, metrics.groups[grp], groups);
            }
          }
          var sampling = $private.generateSamplingRate(samplingRate);
          $public.addMetrics(measures, groups, sampling);
        };
        $private.isValidMeasures = function (measures) {
          if (Object.keys(measures).length < 1) {
            return false;
          }
          var isValid = false;
          for (var msr in measures) {
            if (measures[msr] == 1 || measures[msr] == '1') {
              isValid = true;
            }
          }
          return isValid;
        };
      }
      function TypeValidator () {
        var $public = this;
        var $private = {};
        $private.contentValidator = new ContentValidator();
        $public.isDefined = function (value) {
          return value !== undefined && value !== null;
        };
        $public.isString = function (value) {
          return $private.contentValidator.stringIsNotEmpty(value);
        };
        $public.isArray = function (value) {
          return value && value.constructor.toString() === Array.toString();
        };
        $public.isObject = function (entity) {
          return entity && entity.constructor.toString() === Object.toString();
        };
        $public.isFunction = function (value) {
          return value !== undefined && value.constructor.toString() === Function.toString();
        };
        $public.isNumber = function (value) {
          return Number(value) === value;
        };
        $public.isInt = function (value) {
          return $public.isNumber(value) && value % 1 === 0;
        };
        $public.isRegExp = function (value) {
          return value !== undefined && value.constructor.toString() === RegExp.toString();
        };
        $public.isNumericString = function (value) {
          return $public.isString(value) && !isNaN(value);
        };
        $public.isBoolean = function (value) {
          return value !== undefined && value.constructor.toString() == Boolean.toString();
        };
        return $public;
      }
      var uolpdCommons = new NameSpace('Commons');
      uolpdCommons.RemoteStorage = RemoteStorage;
      (function (window, document, undefined) {
        var CryptoJS =
          CryptoJS ||
          (function (s, p) {
            var m = {},
              l = (m.lib = {}),
              n = function () {},
              r = (l.Base = {
                extend: function (b) {
                  n.prototype = this;
                  var h = new n();
                  b && h.mixIn(b);
                  h.hasOwnProperty('init') ||
                    (h.init = function () {
                      h.$super.init.apply(this, arguments);
                    });
                  h.init.prototype = h;
                  h.$super = this;
                  return h;
                },
                create: function () {
                  var b = this.extend();
                  b.init.apply(b, arguments);
                  return b;
                },
                init: function () {},
                mixIn: function (b) {
                  for (var h in b) {
                    b.hasOwnProperty(h) && (this[h] = b[h]);
                  }
                  b.hasOwnProperty('toString') && (this.toString = b.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              }),
              q = (l.WordArray = r.extend({
                init: function (b, h) {
                  b = this.words = b || [];
                  this.sigBytes = h != p ? h : 4 * b.length;
                },
                toString: function (b) {
                  return (b || t).stringify(this);
                },
                concat: function (b) {
                  var h = this.words,
                    a = b.words,
                    j = this.sigBytes;
                  b = b.sigBytes;
                  this.clamp();
                  if (j % 4) {
                    for (var g = 0; g < b; g++) {
                      h[(j + g) >>> 2] |=
                        ((a[g >>> 2] >>> (24 - 8 * (g % 4))) & 255) << (24 - 8 * ((j + g) % 4));
                    }
                  } else {
                    if (65535 < a.length) {
                      for (g = 0; g < b; g += 4) {
                        h[(j + g) >>> 2] = a[g >>> 2];
                      }
                    } else {
                      h.push.apply(h, a);
                    }
                  }
                  this.sigBytes += b;
                  return this;
                },
                clamp: function () {
                  var b = this.words,
                    h = this.sigBytes;
                  b[h >>> 2] &= 4294967295 << (32 - 8 * (h % 4));
                  b.length = s.ceil(h / 4);
                },
                clone: function () {
                  var b = r.clone.call(this);
                  b.words = this.words.slice(0);
                  return b;
                },
                random: function (b) {
                  for (var h = [], a = 0; a < b; a += 4) {
                    h.push((4294967296 * s.random()) | 0);
                  }
                  return new q.init(h, b);
                },
              })),
              v = (m.enc = {}),
              t = (v.Hex = {
                stringify: function (b) {
                  var a = b.words;
                  b = b.sigBytes;
                  for (var g = [], j = 0; j < b; j++) {
                    var k = (a[j >>> 2] >>> (24 - 8 * (j % 4))) & 255;
                    g.push((k >>> 4).toString(16));
                    g.push((k & 15).toString(16));
                  }
                  return g.join('');
                },
                parse: function (b) {
                  for (var a = b.length, g = [], j = 0; j < a; j += 2) {
                    g[j >>> 3] |= parseInt(b.substr(j, 2), 16) << (24 - 4 * (j % 8));
                  }
                  return new q.init(g, a / 2);
                },
              }),
              a = (v.Latin1 = {
                stringify: function (b) {
                  var a = b.words;
                  b = b.sigBytes;
                  for (var g = [], j = 0; j < b; j++) {
                    g.push(String.fromCharCode((a[j >>> 2] >>> (24 - 8 * (j % 4))) & 255));
                  }
                  return g.join('');
                },
                parse: function (b) {
                  for (var a = b.length, g = [], j = 0; j < a; j++) {
                    g[j >>> 2] |= (b.charCodeAt(j) & 255) << (24 - 8 * (j % 4));
                  }
                  return new q.init(g, a);
                },
              }),
              u = (v.Utf8 = {
                stringify: function (b) {
                  try {
                    return decodeURIComponent(escape(a.stringify(b)));
                  } catch (g) {
                    throw Error('Malformed UTF-8 data');
                  }
                },
                parse: function (b) {
                  return a.parse(unescape(encodeURIComponent(b)));
                },
              }),
              g = (l.BufferedBlockAlgorithm = r.extend({
                reset: function () {
                  this._data = new q.init();
                  this._nDataBytes = 0;
                },
                _append: function (b) {
                  'string' == typeof b && (b = u.parse(b));
                  this._data.concat(b);
                  this._nDataBytes += b.sigBytes;
                },
                _process: function (b) {
                  var a = this._data,
                    g = a.words,
                    j = a.sigBytes,
                    k = this.blockSize,
                    m = j / (4 * k),
                    m = b ? s.ceil(m) : s.max((m | 0) - this._minBufferSize, 0);
                  b = m * k;
                  j = s.min(4 * b, j);
                  if (b) {
                    for (var l = 0; l < b; l += k) {
                      this._doProcessBlock(g, l);
                    }
                    l = g.splice(0, b);
                    a.sigBytes -= j;
                  }
                  return new q.init(l, j);
                },
                clone: function () {
                  var b = r.clone.call(this);
                  b._data = this._data.clone();
                  return b;
                },
                _minBufferSize: 0,
              }));
            l.Hasher = g.extend({
              cfg: r.extend(),
              init: function (b) {
                this.cfg = this.cfg.extend(b);
                this.reset();
              },
              reset: function () {
                g.reset.call(this);
                this._doReset();
              },
              update: function (b) {
                this._append(b);
                this._process();
                return this;
              },
              finalize: function (b) {
                b && this._append(b);
                return this._doFinalize();
              },
              blockSize: 16,
              _createHelper: function (b) {
                return function (a, g) {
                  return new b.init(g).finalize(a);
                };
              },
              _createHmacHelper: function (b) {
                return function (a, g) {
                  return new k.HMAC.init(b, g).finalize(a);
                };
              },
            });
            var k = (m.algo = {});
            return m;
          })(Math);
        (function (s) {
          function p (a, k, b, h, l, j, m) {
            a = a + ((k & b) | (~k & h)) + l + m;
            return ((a << j) | (a >>> (32 - j))) + k;
          }
          function m (a, k, b, h, l, j, m) {
            a = a + ((k & h) | (b & ~h)) + l + m;
            return ((a << j) | (a >>> (32 - j))) + k;
          }
          function l (a, k, b, h, l, j, m) {
            a = a + (k ^ b ^ h) + l + m;
            return ((a << j) | (a >>> (32 - j))) + k;
          }
          function n (a, k, b, h, l, j, m) {
            a = a + (b ^ (k | ~h)) + l + m;
            return ((a << j) | (a >>> (32 - j))) + k;
          }
          for (
            var r = CryptoJS, q = r.lib, v = q.WordArray, t = q.Hasher, q = r.algo, a = [], u = 0;
            64 > u;
            u++
          ) {
            a[u] = (4294967296 * s.abs(s.sin(u + 1))) | 0;
          }
          q = q.MD5 = t.extend({
            _doReset: function () {
              this._hash = new v.init([1732584193, 4023233417, 2562383102, 271733878]);
            },
            _doProcessBlock: function (g, k) {
              for (var b = 0; 16 > b; b++) {
                var h = k + b,
                  w = g[h];
                g[h] =
                  (((w << 8) | (w >>> 24)) & 16711935) | (((w << 24) | (w >>> 8)) & 4278255360);
              }
              var b = this._hash.words,
                h = g[k + 0],
                w = g[k + 1],
                j = g[k + 2],
                q = g[k + 3],
                r = g[k + 4],
                s = g[k + 5],
                t = g[k + 6],
                u = g[k + 7],
                v = g[k + 8],
                x = g[k + 9],
                y = g[k + 10],
                z = g[k + 11],
                A = g[k + 12],
                B = g[k + 13],
                C = g[k + 14],
                D = g[k + 15],
                c = b[0],
                d = b[1],
                e = b[2],
                f = b[3],
                c = p(c, d, e, f, h, 7, a[0]),
                f = p(f, c, d, e, w, 12, a[1]),
                e = p(e, f, c, d, j, 17, a[2]),
                d = p(d, e, f, c, q, 22, a[3]),
                c = p(c, d, e, f, r, 7, a[4]),
                f = p(f, c, d, e, s, 12, a[5]),
                e = p(e, f, c, d, t, 17, a[6]),
                d = p(d, e, f, c, u, 22, a[7]),
                c = p(c, d, e, f, v, 7, a[8]),
                f = p(f, c, d, e, x, 12, a[9]),
                e = p(e, f, c, d, y, 17, a[10]),
                d = p(d, e, f, c, z, 22, a[11]),
                c = p(c, d, e, f, A, 7, a[12]),
                f = p(f, c, d, e, B, 12, a[13]),
                e = p(e, f, c, d, C, 17, a[14]),
                d = p(d, e, f, c, D, 22, a[15]),
                c = m(c, d, e, f, w, 5, a[16]),
                f = m(f, c, d, e, t, 9, a[17]),
                e = m(e, f, c, d, z, 14, a[18]),
                d = m(d, e, f, c, h, 20, a[19]),
                c = m(c, d, e, f, s, 5, a[20]),
                f = m(f, c, d, e, y, 9, a[21]),
                e = m(e, f, c, d, D, 14, a[22]),
                d = m(d, e, f, c, r, 20, a[23]),
                c = m(c, d, e, f, x, 5, a[24]),
                f = m(f, c, d, e, C, 9, a[25]),
                e = m(e, f, c, d, q, 14, a[26]),
                d = m(d, e, f, c, v, 20, a[27]),
                c = m(c, d, e, f, B, 5, a[28]),
                f = m(f, c, d, e, j, 9, a[29]),
                e = m(e, f, c, d, u, 14, a[30]),
                d = m(d, e, f, c, A, 20, a[31]),
                c = l(c, d, e, f, s, 4, a[32]),
                f = l(f, c, d, e, v, 11, a[33]),
                e = l(e, f, c, d, z, 16, a[34]),
                d = l(d, e, f, c, C, 23, a[35]),
                c = l(c, d, e, f, w, 4, a[36]),
                f = l(f, c, d, e, r, 11, a[37]),
                e = l(e, f, c, d, u, 16, a[38]),
                d = l(d, e, f, c, y, 23, a[39]),
                c = l(c, d, e, f, B, 4, a[40]),
                f = l(f, c, d, e, h, 11, a[41]),
                e = l(e, f, c, d, q, 16, a[42]),
                d = l(d, e, f, c, t, 23, a[43]),
                c = l(c, d, e, f, x, 4, a[44]),
                f = l(f, c, d, e, A, 11, a[45]),
                e = l(e, f, c, d, D, 16, a[46]),
                d = l(d, e, f, c, j, 23, a[47]),
                c = n(c, d, e, f, h, 6, a[48]),
                f = n(f, c, d, e, u, 10, a[49]),
                e = n(e, f, c, d, C, 15, a[50]),
                d = n(d, e, f, c, s, 21, a[51]),
                c = n(c, d, e, f, A, 6, a[52]),
                f = n(f, c, d, e, q, 10, a[53]),
                e = n(e, f, c, d, y, 15, a[54]),
                d = n(d, e, f, c, w, 21, a[55]),
                c = n(c, d, e, f, v, 6, a[56]),
                f = n(f, c, d, e, D, 10, a[57]),
                e = n(e, f, c, d, t, 15, a[58]),
                d = n(d, e, f, c, B, 21, a[59]),
                c = n(c, d, e, f, r, 6, a[60]),
                f = n(f, c, d, e, z, 10, a[61]),
                e = n(e, f, c, d, j, 15, a[62]),
                d = n(d, e, f, c, x, 21, a[63]);
              b[0] = (b[0] + c) | 0;
              b[1] = (b[1] + d) | 0;
              b[2] = (b[2] + e) | 0;
              b[3] = (b[3] + f) | 0;
            },
            _doFinalize: function () {
              var a = this._data,
                k = a.words,
                b = 8 * this._nDataBytes,
                h = 8 * a.sigBytes;
              k[h >>> 5] |= 128 << (24 - (h % 32));
              var l = s.floor(b / 4294967296);
              k[(((h + 64) >>> 9) << 4) + 15] =
                (((l << 8) | (l >>> 24)) & 16711935) | (((l << 24) | (l >>> 8)) & 4278255360);
              k[(((h + 64) >>> 9) << 4) + 14] =
                (((b << 8) | (b >>> 24)) & 16711935) | (((b << 24) | (b >>> 8)) & 4278255360);
              a.sigBytes = 4 * (k.length + 1);
              this._process();
              a = this._hash;
              k = a.words;
              for (b = 0; 4 > b; b++) {
                (h = k[b]),
                  (k[b] =
                    (((h << 8) | (h >>> 24)) & 16711935) | (((h << 24) | (h >>> 8)) & 4278255360));
              }
              return a;
            },
            clone: function () {
              var a = t.clone.call(this);
              a._hash = this._hash.clone();
              return a;
            },
          });
          r.MD5 = t._createHelper(q);
          r.HmacMD5 = t._createHmacHelper(q);
        })(Math);
        function Format (namTag, namespace, timeStampInit) {
          var $public = this;
          var $private = {};
          $private.typeValidator = new TypeValidator();
          $private.trackManager = new TrackManager();
          $public.logger = new Logs();
          $private.hasCalledCallback = false;
          $private.flagBehaviour = '0';
          $private.src = window.location.protocol + '//js.siga.uol.com.br/uoljson.min.js';
          $private.__constructor = (function (namTag, namespace, timeStampInit) {
            $private.trackManager.setModuleName('native-ads');
            $public.logger.setPrefix('UOLPD.TagManager.NativeAds');
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = timeStampInit;
          })(namTag, namespace, timeStampInit);
          $public.loadScript = function () {
            if ($private.scriptHasLoaded()) {
              return;
            }
            var script = document.createElement('script');
            script.src = $private.src;
            script.async = true;
            document.head.appendChild(script);
          };
          $private.scriptHasLoaded = function () {
            if (document.querySelector('[src*="' + $private.src + '"]')) {
              $public.logger.debug('O script ' + $private.src + ' já existe na página');
              return true;
            }
            $public.logger.debug('Inserindo o script ' + $private.src + ' na página');
            return false;
          };
          $public.getCodDisplaySupplier = function (coddisplaysupplier) {
            return $private.coddisplaysupplier;
          };
          $public.setCodDisplaySupplier = function (coddisplaysupplier) {
            if ($private.typeValidator.isString(coddisplaysupplier)) {
              $private.coddisplaysupplier = coddisplaysupplier;
            }
          };
          $public.getNumAds = function (numAds) {
            return $private.numAds;
          };
          $public.setNumAds = function (numAds) {
            if ($private.typeValidator.isInt(Number(numAds))) {
              $private.numAds = numAds;
            }
          };
          $public.getDesLabel = function (desLabel) {
            return $private.desLabel;
          };
          $public.setDesLabel = function (desLabel) {
            if (!$private.typeValidator.isString(desLabel)) {
              $private.desLabel = 'native';
              return;
            }
            $private.desLabel = desLabel;
          };
          $public.getNative = function () {
            return $private.nativeFlag;
          };
          $public.setNative = function (nativeFlag) {
            if (isNaN(nativeFlag)) {
              return;
            }
            if (nativeFlag === '0' || nativeFlag === '1') {
              $private.nativeFlag = nativeFlag;
            }
          };
          $public.getUrlMobile = function () {
            return $private.urlMobile;
          };
          $public.setUrlMobile = function (urlMobile) {
            $private.urlMobile = window.location.href;
            if ($private.typeValidator.isArray(urlMobile) && urlMobile[0] === '1') {
              var formatedUrl = window.location.protocol + '//m.' + window.location.hostname;
              $private.urlMobile = formatedUrl;
            }
          };
          $public.getFlagBehaviour = function () {
            return $private.flagBehaviour;
          };
          $public.setFlagBehaviour = function (flagBehaviour) {
            if (flagBehaviour === '1') {
              $private.flagBehaviour = flagBehaviour;
            }
          };
          $public.getCallback = function (callback) {
            return $private.callback;
          };
          $public.setCallback = function (callback) {
            if (!$private.typeValidator.isFunction(callback)) {
              return;
            }
            $private.callback = function (ads) {
              $public.logger.debug('O Callback está sendo chamado pelo formato');
              $private.hasCalledCallback = true;
              if (!$private.typeValidator.isArray(ads)) {
                $private.logWarn('O serviço não retornou uma lista de anúncios');
                $private.trackManager.trackError('exibicao-vazia', 'parse-ads');
                return;
              }
              if (ads.length < $private.numAds) {
                $private.logWarn(
                  ads.length +
                    ' anúncios foram recebidos quando foram requisitados ' +
                    $private.numAds
                );
                $private.trackManager.trackError('exibicao-incompleta', 'missing-ads');
              }
              callback(ads);
            };
          };
          $private.logWarn = function (message) {
            $public.logger.warn(
              message,
              $private.namTag,
              $private.namespace,
              new Date().getTime() - $private.timeStampInit
            );
          };
          $public.display = function () {
            if ($public.hasFormatLoaded()) {
              if (
                !$private.coddisplaysupplier ||
                !$private.numAds ||
                !$private.callback ||
                !$private.typeValidator.isDefined($private.nativeFlag) ||
                !$private.typeValidator.isDefined($private.urlMobile)
              ) {
                return;
              }
              $public.logger.debug('O objeto do formato foi carregado e está sendo instanciado');
              setTimeout(function () {
                if (!$private.hasCalledCallback) {
                  $public.logger.debug('O callback ainda não foi chamado pelo formato');
                  $private.trackManager.trackError('exibicao-vazia', 'service-timeout');
                }
              }, 7000);
              var config = {
                coddisplaysupplier: $private.coddisplaysupplier,
                numads: $private.numAds,
                deslabel: $private.desLabel,
                native: $private.nativeFlag,
                urlReferer: $private.urlMobile,
                flagBehaviour: $private.flagBehaviour,
              };
              return UOLPD.Siga.sigaFormatJSON.getAds(config, $private.callback);
            }
            setTimeout($public.display, 100);
          };
          $public.hasFormatLoaded = function () {
            if (!$private.typeValidator.isObject(window.UOLPD)) {
              $private.logWarn('Objeto UOLPD ainda não existe');
              return false;
            }
            if (!$private.typeValidator.isObject(window.UOLPD.Siga)) {
              $private.logWarn('Objeto Siga ainda não existe');
              return false;
            }
            if (!$private.typeValidator.isDefined(window.UOLPD.Siga.sigaFormatJSON)) {
              $private.logWarn('Objeto Siga ainda não existe');
              return false;
            }
            if (!$private.typeValidator.isFunction(window.UOLPD.Siga.sigaFormatJSON.getAds)) {
              $private.logWarn('Objeto Siga ainda não existe');
              return false;
            }
            return true;
          };
        }
        function Ad (namTag, namespace, timeStampInit) {
          var $public = this;
          var $private = {};
          $private.typeValidator = new TypeValidator();
          $private.trackManager = new TrackManager();
          $public.logger = new Logs();
          $private.__constructor = (function (namTag, namespace, timeStampInit) {
            $private.trackManager.setModuleName('native-ads');
            $public.logger.setPrefix('UOLPD.TagManager.NativeAds');
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = timeStampInit;
          })(namTag, namespace, timeStampInit);
          $private.masks = {
            '%NATIVE_URL%': { required: 1, value: 'link' },
            '%NATIVE_IMG%': { required: 0, value: 'image' },
            '%NATIVE_FULL_DESCRIPTION%': { required: 0, value: 'fullText' },
            '%NATIVE_DESCRIPTION%': { required: 0, value: 'shortText' },
            '%NATIVE_TITLE%': { required: 0, value: 'title' },
            '%NATIVE_DESCRIPTION1%': { required: 0, value: 'description1' },
            '%NATIVE_DESCRIPTION2%': { required: 0, value: 'description2' },
            '%NATIVE_URL_DISPLAY%': { required: 0, value: 'urlDisplay' },
          };
          $public.getMarkup = function () {
            if (!$private.markup) {
              $private.trackError('invalid-markup', 'O markup não foi configurado');
              return;
            }
            return $private.markup;
          };
          $public.setMarkup = function (markup) {
            if (!$private.adData) {
              $private.trackError('invalid-adData', 'O anúncio não existe');
              return;
            }
            if ($private.isvalidMarkup(markup)) {
              $private.markup = $private.replaceMasks(markup);
            }
          };
          $public.getShortTextLimit = function (shortTextLimit) {
            return $private.shortTextLimit;
          };
          $public.setShortTextLimit = function (shortTextLimit) {
            shortTextLimit = Number(shortTextLimit);
            if ($private.typeValidator.isInt(shortTextLimit)) {
              $private.shortTextLimit = shortTextLimit;
            } else {
              $private.trackError('invalid-markup', 'O limitador de texto deve ser um número');
            }
          };
          $public.getAdData = function (adData) {
            return $private.adData;
          };
          $public.setAdData = function (adData) {
            if ($private.isValidAd(adData)) {
              $private.adData = $private.convertAdData(adData);
            }
          };
          $public.getCode = function (a) {
            var b = a.indexOf('msg') + 4;
            var c = a.substring(b);
            var d = c.indexOf('&');
            var e = c.substring(0, d);
            e = e.length;
            e = e.toString();
            return e;
          };
          $private.isvalidMarkup = function (markup) {
            if (!$private.typeValidator.isString(markup)) {
              $private.trackError('invalid-markup', 'O markup não é uma string');
              return false;
            }
            for (var key in $private.masks) {
              if ($private.masks[key].required === 0) {
                continue;
              }
              if (markup.indexOf(key) < 0) {
                $private.trackError('invalid-markup', 'O markup não tem a máscara ' + key);
                return false;
              }
            }
            return true;
          };
          $private.replaceMasks = function (markup) {
            for (var key in $private.masks) {
              var field = new RegExp(key, 'g');
              var value = $private.masks[key].value;
              markup = markup.replace(field, $private.adData[value]);
            }
            return markup;
          };
          $private.isValidAd = function (ad) {
            if (!$private.typeValidator.isObject(ad)) {
              $private.trackError('invalid-ad', 'O anúncio não é um objeto');
              return false;
            }
            if (!$private.typeValidator.isString(ad.description1)) {
              $private.trackError(
                'invalid-ad',
                'O atributo "description1" do anúncio não é do tipo "string"'
              );
              return false;
            }
            if (!$private.typeValidator.isString(ad.description2)) {
              $private.trackError(
                'invalid-ad',
                'O atributo "description2" do anúncio não é do tipo "string"'
              );
              return false;
            }
            if (!$private.typeValidator.isString(ad.title)) {
              $private.trackError(
                'invalid-ad',
                'O atributo "title" do anúncio não é do tipo "string"'
              );
              return false;
            }
            if (!$private.typeValidator.isString(ad.urlClick)) {
              $private.trackError(
                'invalid-ad',
                'O atributo "urlClick" do anúncio não é do tipo "string"'
              );
              return false;
            }
            if (!$private.typeValidator.isString(ad.urlImage)) {
              $private.trackError(
                'invalid-ad',
                'O atributo "urlImage" do anúncio não é do tipo "string"'
              );
              return false;
            }
            return true;
          };
          $private.convertAdData = function (ad) {
            var adData = {};
            adData.fullText = ad.title + ' ' + ad.description1 + ' ' + ad.description2;
            adData.link = $private.getLink(ad.urlClick);
            adData.image = ad.urlImage;
            adData.shortText = $private.getShortText(adData.fullText);
            adData.title = ad.title;
            adData.description1 = ad.description1;
            adData.description2 = ad.description2;
            adData.urlDisplay = ad.urlDisplay;
            return adData;
          };
          $private.getLink = function (link) {
            try {
              return link + '&fBhAsH=fbUOL' + CryptoJS.MD5($public.getCode(link));
            } catch (e) {
              $private.trackError(
                'invalid-ad',
                'Ocorreu um problema na hora de criptografar a url do anúncio'
              );
              return link;
            }
          };
          $private.getShortText = function (fullText) {
            if (!$private.shortTextLimit) {
              $public.logger.debug(
                'O limite de texto do anúncio não foi configurado e sua descrição será exibida na integra'
              );
              return fullText;
            }
            if (fullText.length <= $private.shortTextLimit) {
              $public.logger.debug(
                'A descrição é menor/igual ao limite de texto e será exibida na integra'
              );
              return fullText;
            }
            var shortText = fullText.substring(0, $private.shortTextLimit);
            var lastChar = shortText.charAt(shortText.length - 1);
            if (/[a-zA-Zà-úÀ-Ú0-9]/.test(lastChar)) {
              shortText = fullText.substring(0, $private.shortTextLimit - 1);
            }
            return shortText + '...';
          };
          $private.trackError = function (errorType, errorMessage) {
            if (!$private.typeValidator.isString(errorType)) {
              return;
            }
            if (!$private.typeValidator.isString(errorMessage)) {
              return;
            }
            $public.logger.warn(
              errorMessage,
              $private.namTag,
              $private.namespace,
              new Date().getTime() - $private.timeStampInit
            );
            $private.trackManager.trackError(errorType, 'fluxo_interrompido');
          };
        }
        function NativeAds (namTag, namespace, timeStampInit) {
          var $public = this;
          var $private = {};
          $private.typeValidator = new TypeValidator();
          $private.trackManager = new TrackManager();
          $public.logger = new Logs();
          $private.adsCount = 0;
          $private.__constructor = (function (namTag, namespace, timeStampInit) {
            $private.trackManager.setModuleName('native-ads');
            $public.logger.setPrefix('UOLPD.TagManager.NativeAds');
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = timeStampInit;
          })(namTag, namespace, timeStampInit);
          $public.setMarkup = function (markup) {
            if ($private.typeValidator.isString(markup)) {
              $private.markup = markup;
            }
          };
          $public.getMarkup = function () {
            return $private.markup;
          };
          $public.setContainer = function (container) {
            if ($private.typeValidator.isString(container)) {
              $private.container = container;
            }
          };
          $public.getContainer = function () {
            return $private.container;
          };
          $public.setBefore = function (before) {
            if ($private.typeValidator.isString(before)) {
              $private.before = before;
            }
          };
          $public.setReplacementElement = function (replacementElement) {
            if ($private.typeValidator.isString(replacementElement)) {
              $private.replacementElement = replacementElement.split(' %NEXT_ELEMENT% ');
            }
          };
          $public.getReplacementElement = function () {
            return $private.replacementElement;
          };
          $public.getShortTextLimit = function (shortTextLimit) {
            return $private.shortTextLimit;
          };
          $public.setShortTextLimit = function (shortTextLimit) {
            shortTextLimit = Number(shortTextLimit);
            if ($private.typeValidator.isInt(shortTextLimit)) {
              $private.shortTextLimit = shortTextLimit;
            }
          };
          $public.setStyleTag = function (styleTag) {
            if ($private.typeValidator.isString(styleTag)) {
              $private.styleTag = styleTag;
            }
          };
          $public.getStyleTag = function () {
            return $private.styleTag;
          };
          $public.display = function (ads) {
            $public.logger.debug('A função de exibição dos anúncios foi chamada');
            if (!$private.markup) {
              return;
            }
            if (!$private.typeValidator.isArray(ads)) {
              $private.logWarn('O serviço não retornou uma lista de anúncios');
              return;
            }
            if (ads.length === 0) {
              $private.logWarn('O serviço retornou uma lista de anúncios vazia');
              return;
            }
            return $private.showAds(ads, $public.getElements());
          };
          $private.showAds = function (ads, elements) {
            if (!elements.containerElement) {
              $private.logWarn('O elemento container ainda não foi carregado');
              window.setTimeout(function () {
                $public.display(ads);
              }, 100);
              return;
            }
            for (var i = 0, length = ads.length; i < length; i++) {
              if (
                $private.appendAd(
                  $private.getAd(ads[i]),
                  elements.containerElement,
                  elements.replacementElement[i],
                  elements.before,
                  i
                )
              ) {
                $public.logger.log(
                  'Exibindo o anúncio',
                  $private.namTag,
                  $private.namespace,
                  new Date().getTime() - $private.timeStampInit
                );
                $private.setAdsCount(1);
              }
            }
            if ($private.adsCount > 0) {
              $private.addStyleTag();
              $private.trackManager.trackSuccess('Execucoes Finalizadas');
            }
            return $private.adsCount;
          };
          $private.logWarn = function (message) {
            $public.logger.warn(
              message,
              $private.namTag,
              $private.namespace,
              new Date().getTime() - $private.timeStampInit
            );
          };
          $private.setAdsCount = function (count) {
            $private.adsCount = $private.adsCount + count;
          };
          $public.getAdsCount = function () {
            return $private.adsCount;
          };
          $private.getAd = function (adData) {
            var ad = new Ad($private.namTag, $private.namespace, $private.timeStampInit);
            ad.setShortTextLimit($private.shortTextLimit);
            ad.setAdData(adData);
            ad.setMarkup($private.markup);
            return ad.getMarkup();
          };
          $public.getElements = function () {
            try {
              return {
                containerElement: $private.getContainerElement($private.container),
                replacementElement: $private.getReplacementElements(),
                before: $private.getContainerElement($private.before),
              };
            } catch (e) {
              return {};
            }
          };
          $private.getReplacementElements = function () {
            var replacementElement = [];
            if (!$private.replacementElement) {
              return replacementElement;
            }
            for (var i = 0, length = $private.replacementElement.length; i < length; i++) {
              replacementElement.push(
                $private.getContainerElement($private.replacementElement[i])
              );
            }
            return replacementElement;
          };
          $private.getContainerElement = function (element) {
            if (!element) {
              return;
            }
            var querySelectors = element.split('%contentWindow%');
            if (querySelectors.length == 1) {
              return document.querySelector(querySelectors[0]);
            }
            return document
              .querySelector(querySelectors[0])
              .contentWindow.document.querySelector(querySelectors[1]);
          };
          $private.getContainerElements = function (element) {
            if (!element) {
              return;
            }
            var querySelectors = element.split('%contentWindow%');
            if (querySelectors.length == 1) {
              return document.querySelectorAll(querySelectors[0]);
            }
            return document
              .querySelector(querySelectors[0])
              .contentWindow.document.querySelectorAll(querySelectors[1]);
          };
          $private.appendAd = function (ad, containerElement, replacementElement, before, index) {
            if (!ad) {
              return false;
            }
            window.addEventListener('resize', $private.resizeSigaImg);
            if (replacementElement) {
              replacementElement.innerHTML = ad;
              $public.logger.debug('Substituindo o elemento pelo anúncio');
              $private.resizeSigaImg(index);
              return true;
            }
            if (!containerElement) {
              return false;
            }
            if (before) {
              containerElement.insertBefore($private.getMarkup(ad), before);
              $private.resizeSigaImg(index);
              $public.logger.debug('Inserindo o anúncio antes do elemento configurado');
              return true;
            }
            $private.appendMarkup(containerElement, ad);
            $private.resizeSigaImg(index);
            $public.logger.debug('Inserindo o anúncio após o elemento configurado');
            return true;
          };
          $private.resizeSigaImg = function (index) {
            if (!$private.container) {
              return;
            }
            var elementList = $private.getContainerElements($private.container + ' img');
            var sigaImgList = $private.getContainerElements(
              $private.container + ' img[src*="siga.imguol"]'
            );
            if (!elementList || !sigaImgList) {
              return;
            }
            var refereceImg = elementList[0];
            var sigaImg = sigaImgList[index];
            setTimeout(function () {
              if (!refereceImg || !sigaImg) {
                return;
              }
              if (refereceImg.getAttribute('src') === sigaImg.getAttribute('src')) {
                refereceImg = elementList[1] || elementList[0];
              }
            }, 500);
            var interval = window.setInterval(function () {
              $private.resizeInterval(refereceImg, sigaImg, interval);
            }, 250);
          };
          $private.resizeInterval = function (refereceImg, sigaImg, interval) {
            if (!refereceImg || !sigaImg) {
              window.clearInterval(interval);
              return;
            }
            if (refereceImg.clientHeight === 0 || refereceImg.clientWidth === 0) {
              return;
            }
            window.clearInterval(interval);
            var sigaImgParent = sigaImg.parentElement;
            if (!sigaImgParent) {
              return;
            }
            sigaImgParent.style.maxWidth = refereceImg.clientWidth + 'px';
            sigaImgParent.style.maxHeight = refereceImg.clientHeight + 'px';
            sigaImgParent.style.setProperty('display', 'block', 'important');
            sigaImgParent.style.overflow = 'hidden';
          };
          $private.appendMarkup = function (container, element) {
            container.appendChild($private.getMarkup(element));
          };
          $private.getMarkup = function (outer) {
            var div = document.createElement('div');
            div.innerHTML = outer;
            return div.children[0];
          };
          $private.addStyleTag = function () {
            if (!$private.typeValidator.isString($public.getStyleTag())) {
              return;
            }
            var style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            var tag = $public.getStyleTag();
            if (style.styleSheet) {
              style.styleSheet.cssText = tag;
            } else {
              style.appendChild(document.createTextNode(tag));
            }
            var head = document.head || document.getElementsByTagName('head')[0];
            head.appendChild(style);
          };
        }
        function Main () {
          var $public = this;
          var $private = {};
          $private.typeValidator = new TypeValidator();
          $private.trackManager = new TrackManager();
          $public.logger = new Logs();
          $private.__constructor = (function () {
            $private.trackManager.setModuleName('native-ads');
            $public.logger.setPrefix('UOLPD.TagManager.NativeAds');
          })();
          $public.init = function (config, namTag, namespace) {
            $private.trackManager.trackSuccess('Execucoes Iniciadas');
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = new Date().getTime();
            if (!$private.typeValidator.isObject(config)) {
              $public.logger.error(
                'O objeto de configuração está inválido',
                $private.namTag,
                $private.namespace,
                new Date().getTime() - $private.timeStampInit
              );
              $private.trackManager.trackError('config_invalido', 'fluxo_interrompido');
              return;
            }
            $private.format = new Format(
              $private.namTag,
              $private.namespace,
              $private.timeStampInit
            );
            $private.nativeAds = new NativeAds(
              $private.namTag,
              $private.namespace,
              $private.timeStampInit
            );
            $private.setNativeAds(config);
            $private.showFormat(config);
          };
          $private.setNativeAds = function (config) {
            $private.nativeAds.setMarkup(config.markup);
            $private.nativeAds.setContainer(config.container);
            $private.nativeAds.setBefore(config.before);
            $private.nativeAds.setReplacementElement(config.replacementElement);
            $private.nativeAds.setShortTextLimit(config.shortTextLimit);
            $private.nativeAds.setStyleTag(config.styleTag);
          };
          $private.showFormat = function (config) {
            if (!$private.nativeAds.getElements().containerElement) {
              window.setTimeout(function () {
                $private.showFormat(config);
              }, 100);
              return;
            }
            $private.format.loadScript();
            $private.format.setUrlMobile(config.urlMobile);
            $private.format.setFlagBehaviour(config.flagBehaviour);
            $private.format.setNative('1');
            $private.format.setCodDisplaySupplier(config.coddisplaysupplier);
            $private.format.setNumAds(config.numAds);
            $private.format.setDesLabel(config.desLabel);
            $private.format.setCallback($private.nativeAds.display);
            $private.format.display();
          };
        }
        var __monitoracaoJsuol = 'tm.jsuol.com.br/modules/native-ads.js';
        var nameSpace = new NameSpace('NativeAds');
        nameSpace.init = function (config, namTag) {
          return new Main().init(config, namTag, 'NativeAds');
        };
      })(window, document);
      (function (window, document, undefined) {
        var CafDataSchema = {
          properties: {
            caf: 'isString',
            idtUrl: 'isNumber',
            contentType: 'isString',
            categories: 'isString',
            label: 'isString',
            url: 'isString',
            domain: 'isString',
            timestamp: 'isNumber',
          },
          required: ['idtUrl', 'contentType', 'categories', 'label', 'domain'],
        };
        function Carroussel (block, adWidth, adHeight, numAds, changeCallback, arrowColor) {
          var $public = this,
            $private = {};
          $public.trackManager = new TrackManager();
          $public.trackManager.setModuleName('offers-block');
          $public.__constructor = function (
            block,
            adWidth,
            adHeight,
            numAds,
            changeCallback,
            arrowColor
          ) {
            $private.block = block;
            $private.slotsPerPage = 1;
            $private.adWidth = adWidth;
            $private.adHeight = adHeight;
            $private.numAds = numAds;
            $private.mask = $private.addMask($private.block);
            $private.slotsContainer = $private.addSlotsContainer($private.mask);
            $private.changeCallback = changeCallback;
            $private.arrowColor = arrowColor;
            $private.setResizeListener();
            window.setTimeout(function () {
              $private.addArrows();
              $private.updateAdsPerPage();
            }, 0);
            return $public;
          };
          $private.addMask = function () {
            $private.slotsPerPage = $private.getHowManySlots();
            if ($private.slotsPerPage > numAds) {
              $private.slotsPerPage = numAds;
            }
            var slotsMask = document.createElement('div');
            slotsMask.setAttribute('class', 'ad-slots-mask');
            var objSytles = {
              width: $private.calculateMaskWidth() + 'px',
              height: '100%',
              position: 'relative',
              display: 'inline-block',
              overflow: 'hidden',
            };
            $private.applyStyles(slotsMask, objSytles);
            $private.block.appendChild(slotsMask);
            return slotsMask;
          };
          $private.getHowManySlots = function () {
            var containerWidth = $private.block.offsetWidth;
            var slotsPerPage = 0;
            while ($private.adWidth * (slotsPerPage + 1) <= containerWidth) {
              slotsPerPage++;
            }
            return slotsPerPage;
          };
          $private.applyStyles = function (element, objSytles) {
            for (var style in objSytles) {
              if (!objSytles.hasOwnProperty(style)) {
                continue;
              }
              element.style[style] = objSytles[style];
            }
          };
          $private.calculateMaskWidth = function () {
            return $private.adWidth * $private.slotsPerPage;
          };
          $private.addSlotsContainer = function () {
            var slotsContainer = document.createElement('div');
            slotsContainer.setAttribute('class', 'ad-slots-container');
            var objSytles = {
              position: 'absolute',
              width: $private.adWidth * $private.numAds + 'px',
              height: '100%',
              left: '0px',
              transition: 'left .4s',
              textAlign: 'left',
            };
            $private.applyStyles(slotsContainer, objSytles);
            $private.mask.appendChild(slotsContainer);
            return slotsContainer;
          };
          $private.setResizeListener = function () {
            var hasEventListener = window.addEventListener !== undefined;
            var method = hasEventListener ? 'addEventListener' : 'attachEvent';
            var message = hasEventListener ? 'resize' : 'onresize';
            window[method](message, $private.updateAdsPerPage);
          };
          $private.addArrows = function () {
            $private.block.appendChild($private.createLeftArrow());
            $private.block.appendChild($private.createRightArrow());
          };
          $private.createLeftArrow = function () {
            var leftArrow = $private.createArrow($private.prev, '&#10094;');
            leftArrow.style.left = '16px';
            return leftArrow;
          };
          $private.createArrow = function (onClickCallback, innerHTML) {
            var arrow = document.createElement('span');
            arrow.setAttribute('class', 'offersBlockArrow');
            var objSytles = {
              cursor: 'pointer',
              position: 'absolute',
              top: '50%',
              marginTop: '-18px',
              fontSize: '30px',
              color: $private.arrowColor ? '#' + $private.arrowColor : '#000000',
              mozUserSelect: 'none',
              webkitUserSelect: 'none',
              msUserSelect: 'none',
              userSelect: 'none',
            };
            $private.applyStyles(arrow, objSytles);
            arrow.onclick = onClickCallback;
            arrow.innerHTML = innerHTML;
            return arrow;
          };
          $private.createRightArrow = function () {
            var rightArrow = $private.createArrow($private.next, '&#10095;');
            rightArrow.style.right = '18px';
            return rightArrow;
          };
          $private.next = function () {
            var container = $private.slotsContainer;
            var targetX =
              $private.pixelsToNumber(container.style.left) -
              $private.calculateMaskWidth() +
              container.offsetWidth;
            if (targetX > 0) {
              targetX = $private.calculateNextFold(container);
            } else {
              targetX = '0px';
            }
            container.style.left = targetX;
            $private.getVisibleAdSlots($private.pixelsToNumber(targetX));
            $public.trackManager.trackCustom('Arrow', 'interaction', '1', 100);
          };
          $private.calculateNextFold = function (container) {
            return $private.pixelsToNumber(container.style.left) - $private.adWidth + 'px';
          };
          $private.pixelsToNumber = function (text) {
            return Number(text.substring(0, text.indexOf('px')));
          };
          $private.prev = function () {
            var container = $private.slotsContainer;
            var targetX = $private.pixelsToNumber(container.style.left) + $private.adWidth;
            if (targetX > 0) {
              targetX = $private.calculateLastFold(container);
            } else {
              targetX = $private.calculatePreviousFold(container);
            }
            container.style.left = targetX;
            $private.getVisibleAdSlots($private.pixelsToNumber(targetX));
            $public.trackManager.trackCustom('Arrow', 'interaction', '1', 100);
          };
          $private.calculateLastFold = function (container) {
            return (container.offsetWidth - $private.calculateMaskWidth()) * -1 + 'px';
          };
          $private.calculatePreviousFold = function (container) {
            return $private.pixelsToNumber(container.style.left) + $private.adWidth + 'px';
          };
          $private.updateAdsPerPage = function () {
            $private.slotsPerPage = $private.getHowManySlots();
            if ($private.slotsPerPage < $private.numAds) {
              $private.showSlotsGallery();
            } else {
              $private.showSlots();
            }
          };
          $private.showSlotsGallery = function () {
            $private.showArrows();
            $private.mask.style.width = $private.calculateMaskWidth() + 'px';
            $private.slotsContainer.style.width = $private.adWidth * $private.numAds + 'px';
            $private.setSlotsMargin(0);
            if ($private.slotsFitInMask()) {
              $private.slotsContainer.style.left = $private.calculateSlotsContainerAlignment();
            }
            if ($private.slotsContainer.childNodes.length == $private.numAds) {
              $private.getVisibleAdSlots(
                $private.pixelsToNumber($private.slotsContainer.style.left)
              );
            }
          };
          $private.showSlots = function () {
            $private.hideArrows();
            $private.slotsPerPage = $private.numAds;
            $private.mask.style.width = '100%';
            var objSytles = { width: '100%', left: '0px' };
            $private.applyStyles($private.slotsContainer, objSytles);
            $private.setSlotsMargin($private.calculateSlotsMargin());
            if ($private.slotsContainer.childNodes.length == $private.numAds) {
              $private.getVisibleAdSlots(0);
            }
          };
          $private.getVisibleAdSlots = function (targetX) {
            var adSlots = $private.slotsContainer.childNodes;
            var rangeSlots = ($private.calculateMaskWidth() + targetX * -1) / $private.adWidth;
            rangeSlots = Math.floor(rangeSlots);
            var inicio = Math.floor((targetX * -1) / $private.adWidth);
            var visible = [];
            for (var i = inicio; i < rangeSlots; i++) {
              visible.push(adSlots[i]);
            }
            if ($private.changeCallback) {
              $private.changeCallback(visible);
            }
            return visible;
          };
          $private.showArrows = function () {
            var itens = $private.block.querySelectorAll('.offersBlockArrow');
            for (var i = 0, length = itens.length; i < length; i++) {
              itens[i].style.display = '';
            }
          };
          $private.setSlotsMargin = function (margin) {
            for (var i = 0, length = $private.slotsContainer.childNodes.length; i < length; i++) {
              var slot = $private.slotsContainer.childNodes[i];
              slot.style.marginLeft = margin + 'px';
            }
          };
          $private.slotsFitInMask = function () {
            var slotsWidth =
              $private.slotsContainer.offsetWidth +
              $private.pixelsToNumber($private.slotsContainer.style.left);
            return slotsWidth < $private.mask.offsetWidth;
          };
          $private.calculateSlotsContainerAlignment = function () {
            var margins = $private.adWidth * $private.slotsPerPage;
            var containerAlignment = ($private.slotsContainer.offsetWidth - margins) * -1;
            return containerAlignment + 'px';
          };
          $private.hideArrows = function () {
            var itens = $private.block.querySelectorAll('.offersBlockArrow');
            for (var i = 0, length = itens.length; i < length; i++) {
              itens[i].style.display = 'none';
            }
          };
          $private.calculateSlotsMargin = function () {
            return (
              ($private.mask.offsetWidth - $private.adWidth * $private.numAds) /
              ($private.numAds + 1)
            );
          };
          $public.addSlot = function (slot) {
            $private.slotsContainer.appendChild(slot);
            $private.updateAdsPerPage();
          };
          return $public.__constructor(
            block,
            adWidth,
            adHeight,
            numAds,
            changeCallback,
            arrowColor
          );
        }
        function Content (id) {
          var $public = this,
            $private = {};
          $public.logger = new Logs();
          $private.typeValidator = new TypeValidator();
          $public.trackManager = new TrackManager();
          $public.trackManager.setModuleName('offers-block');
          $public.adSlots = [];
          $private.container = undefined;
          $public.__constructor = function (id) {
            $public.logger.setPrefix('UOLPD.TagManager.OffersBlock');
            $private.container = $private.buildContainer(id);
            return $public;
          };
          $public.getContainer = function () {
            return $private.container;
          };
          $public.withContainerStyle = function (propName, propValue) {
            var isValidPropName = $private.typeValidator.isString(propName),
              isValidPropValue = $private.typeValidator.isString(propValue);
            if (!isValidPropName || !isValidPropValue) {
              $public.logger.warn(
                'Uma propriedade de estilo inválido "' +
                  propName +
                  '" não foi atribudo container "' +
                  $private.container.id +
                  '"'
              );
              $public.trackManager.trackError('invalid_css_property', 'Propreidade css inválida');
              return $public;
            }
            if ($private.container.style[propName] !== undefined) {
              $private.container.style[propName] = propValue;
            }
            return $public;
          };
          $public.withHeader = function (headerText, headerColor) {
            if (!document.querySelector('#css-fonts-offers-block')) {
              $private.addHeaderCss();
            }
            var headerContainer = document.createElement('div');
            headerContainer.setAttribute('class', 'ad-header');
            var objSytles = {
              fontFamily: 'UOLText, Arial, sans-serif',
              padding: '10px 20px 0 20px',
              fontSize: '28px',
              'min-height': '22px',
              'text-align': 'left',
              position: 'relative',
              color: headerColor,
            };
            $private.applyStyles(headerContainer, objSytles);
            if ($private.typeValidator.isString(headerText)) {
              headerContainer.innerHTML = headerText.substring(0, 30);
            }
            $private.addHeaderLink(headerContainer, headerColor);
            $private.container.insertBefore(headerContainer, $private.container.firstChild);
            window.setTimeout(function () {
              var header = $private.container.querySelector('.ad-header');
              if (header) {
                $private.container.style.height =
                  $private.container.offsetHeight + header.offsetHeight + 2 + 'px';
              }
            }, 0);
            return $public;
          };
          $private.addHeaderLink = function (header, headerColor) {
            var seletor = '#banner-native-oferta > div';
            var link = document.createElement('a');
            link.href = 'https://ads.uol.com.br/';
            link.target = '_blank';
            link.style =
              'float:right; font-size: 12px; line-height:1; text-decoration: none; color:' +
              headerColor +
              ';';
            link.innerText = ' Anuncie aqui';
            header.appendChild(link);
          };
          $private.applyStyles = function (element, objSytles) {
            for (var style in objSytles) {
              if (!objSytles.hasOwnProperty(style)) {
                continue;
              }
              element.style[style] = objSytles[style];
            }
          };
          $private.addHeaderCss = function () {
            var fontsCss = document.createElement('link');
            fontsCss.setAttribute('rel', 'stylesheet');
            fontsCss.setAttribute('type', 'text/css');
            fontsCss.setAttribute(
              'href',
              '//conteudo.jsuol.com.br/c/_template/v2/media.css?file=style.css&path=static/v2&tpl=bootstrap/webfonts'
            );
            fontsCss.setAttribute('id', 'css-fonts-offers-block');
            document.body.appendChild(fontsCss);
          };
          $public.withAdSlots = function (
            numAds,
            modelWidth,
            modelHeight,
            changeCallback,
            arrowColor
          ) {
            numAds = parseInt(numAds);
            if (isNaN(numAds) || numAds <= 0) {
              return $public;
            }
            var adWidth = parseInt(modelWidth);
            var adHeight = parseInt(modelHeight);
            var carroussel = new Carroussel(
              $private.container,
              adWidth,
              adHeight,
              numAds,
              changeCallback,
              arrowColor
            );
            for (var i = 0; i < numAds; i++) {
              var adSlot = document.createElement('div'),
                adSlotId = $private.container.id + '-ad-' + (i + 1);
              adSlot.setAttribute('id', adSlotId);
              var objSytles = {
                display: 'inline-block',
                float: 'left',
                width: adWidth + 'px',
                height: adHeight + 'px',
              };
              $private.applyStyles(adSlot, objSytles);
              adSlot.setAttribute('pos', i + 1);
              carroussel.addSlot(adSlot);
              $public.adSlots.push(adSlotId);
            }
            return $public;
          };
          $private.buildContainer = function (id) {
            var container = document.createElement('div');
            if (!$private.typeValidator.isString(id)) {
              id = 'offers-block-' + new Date().getTime();
              $public.logger.warn('Container gerado com "id" aleatório');
            }
            container.setAttribute('id', id);
            container.setAttribute('class', 'offersBlock');
            return container;
          };
          return $public.__constructor(id);
        }
        var OffersBlockSchema = {
          properties: {
            id: 'stringMatches|/^[^\\d].*/',
            coddisplaysupplier: 'isString',
            label: 'isString',
            numAds: 'isNumericString',
            format:
              'stringMatches|/^\\{\\s*(\\")\\width(\\")\\s*\\:\\s*(\\")(?!0)[\\d|null]+(px|%){0,1}(\\")\\s*,\\s*(\\")height(\\")\\s*\\:\\s*(\\")(?!0)[\\d|null]+(px|%){0,1}(\\")\\s*\\}$/',
            headerText: 'isString',
            descrColor: 'isString',
            titleColor: 'isString',
            arrowColor: 'isString',
            bgColor: 'isString',
            buttonColor: 'isString',
            buttonTextColor: 'isString',
            buttonBorderColor: 'isString',
            blockHeaderColor: 'isString',
            blockBorderColor: 'isString',
            model:
              'stringMatches|/^\\{\\s*\\"model\\"\\s*\\:\\s*\\"(?!0)\\w+\\"\\s*,\\s*\\"\\width\\"\\s*\\:\\s*\\"(?!0)[\\d|null]+\\"\\s*,\\s*\\"height\\"\\s*\\:\\s*\\"(?!0)[\\d|null]+\\"\\s*\\}$/',
          },
          required: ['id', 'coddisplaysupplier', 'numAds', 'format', 'model'],
        };
        function OffersBlock () {
          var $private = {};
          var $public = this;
          $public.logger = new Logs();
          $public.trackManager = new TrackManager();
          $private.typeValidator = new TypeValidator();
          $private.offersBlockSchema = new Schema(OffersBlockSchema);
          $private.cafDataSchema = new Schema(CafDataSchema);
          $private.cafs = {
            uol: '51eed576aff54be8b1311d90735f36a6',
            bol: '23a84821cc6e4a4eb37cd7ee556f43cf',
          };
          $public.__constructor = (function () {
            $public.logger.setPrefix('UOLPD.TagManager.OffersBlock');
            $public.trackManager.setModuleName('offers-block');
          })();
          $public.init = function (config, namTag, namespace) {
            $private.configureLogger(namTag, namespace);
            $public.trackManager.trackSuccess('Execucoes Iniciadas');
            $private.createOffersBlock();
            if (!$private.typeValidator.isNumber(window.currentBlock)) {
              window.currentBlock = 0;
            }
            window.currentBlock++;
            if ($private.typeValidator.isObject(config)) {
              $private.config = $private.removeNullAttributes(config);
            }
            $private.checkEnqueueOffersBlock();
          };
          $private.configureLogger = function (namTag, namespace) {
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = new Date().getTime();
          };
          $private.createOffersBlock = function () {
            window.offersBlock = window.offersBlock || [];
            window.offersBlock.push = $private.push;
          };
          $private.removeNullAttributes = function (config) {
            var attributes = ['format', 'model'];
            for (var i = 0, length = attributes.length; i < length; i++) {
              if (config[attributes[i]] && config[attributes[i]].indexOf('null') > -1) {
                delete config[attributes[i]];
              }
            }
            return config;
          };
          $private.checkEnqueueOffersBlock = function () {
            var offersBlock = window.offersBlock;
            if (!$private.typeValidator.isArray(offersBlock)) {
              $public.logger.error(
                'A variável "offersBlock" está inválida',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('invalid_offersBlock', 'fluxo_interrompido');
              return;
            }
            if (offersBlock.length === 0) {
              $private.checkConfigAttributes();
              return;
            }
            while (offersBlock.length) {
              $private.push(offersBlock.shift());
            }
          };
          $private.calculateTimeSpent = function (timeStampInit) {
            if (!$private.typeValidator.isDefined(timeStampInit)) {
              return new Date().getTime() - $private.timeStampInit;
            }
            return new Date().getTime() - timeStampInit;
          };
          $private.checkConfigAttributes = function () {
            if (!$private.offersBlockSchema.isValid($private.config)) {
              $public.logger.debug('Não há nenhum anúncio válido configurado para a exibição');
              return;
            }
            $private.config = $private.getModel($private.config);
            $private.buildUrlParameter($private.config);
          };
          $private.getModel = function (ad) {
            var modelAttributes = JSON.parse(ad.model);
            ad.modelFormatId = modelAttributes.model;
            ad.modelWidth = modelAttributes.width;
            ad.modelHeight = modelAttributes.height;
            return ad;
          };
          $private.buildUrlParameter = function (ad) {
            ad = $private.addDefaultAttributes(ad);
            $private.runWhenElementIsPresent(function () {
              var container = document.getElementById(ad.id);
              if (!container) {
                $public.logger.error('O elemento ' + ad.id + ' não existe');
                $public.trackManager.trackError('missing_dom_element', 'fluxo_interrompido');
                return;
              }
              if (
                $private.cafs.uol === ad.coddisplaysupplier ||
                $private.cafs.bol === ad.coddisplaysupplier
              ) {
                $private.buildOfferBlock(ad, container);
                return;
              }
              var cafData = $private.getCafLocalStorage(ad);
              if (!$private.cafDataSchema.isValid(cafData)) {
                $public.checkAdToPublisher(ad, container);
                return;
              }
              ad = $private.mergeAdData(ad, cafData);
              $private.buildOfferBlock(ad, container);
            }, ad.id);
          };
          $private.addDefaultAttributes = function (ad) {
            var defaultAttributes = {
              blockHeaderColor: '000000',
              blockBorderColor: 'F0F0F0',
              bgColor: 'FFFFFF',
              titleColor: 'BF0303',
              descrColor: '000000',
              buttonColor: 'BF0303',
              buttonTextColor: 'FFFFFF',
              buttonBorderColor: '9D0202',
            };
            for (var key in defaultAttributes) {
              if (!$private.typeValidator.isString(ad[key])) {
                ad[key] = defaultAttributes[key];
              }
            }
            return ad;
          };
          $private.runWhenElementIsPresent = function (callback, id) {
            var count = 10 * 20;
            var timeoutCallback = function () {
              if (document.getElementById(id) || count <= 0) {
                callback();
              } else {
                count--;
                window.setTimeout(timeoutCallback, 50);
              }
            };
            timeoutCallback();
          };
          $private.buildOfferBlock = function (ad, container) {
            var format = JSON.parse(ad.format);
            var block = new Content(
              ad.id + '-' + JSON.parse(ad.model).model + '-' + window.currentBlock
            )
              .withContainerStyle('boxSizing', 'border-box')
              .withContainerStyle('mozBoxSizing', 'border-box')
              .withContainerStyle('webkitBoxSizing', 'border-box')
              .withContainerStyle('border', '2px solid #' + ad.blockBorderColor)
              .withContainerStyle('maxWidth', format.width)
              .withContainerStyle('height', format.height)
              .withContainerStyle('overflow', 'hidden')
              .withContainerStyle('position', 'relative')
              .withContainerStyle('textAlign', 'center')
              .withAdSlots(
                ad.numAds,
                ad.modelWidth,
                ad.modelHeight,
                $private.getChangeCallback(ad),
                $private.config.arrowColor
              )
              .withHeader(ad.headerText, '#' + ad.blockHeaderColor);
            container.appendChild(block.getContainer());
            $public.logger.log(
              'Bloco de Ofertas adicionado com sucesso',
              $private.namTag,
              $private.namespace,
              new Date().getTime() - $private.timeStampInit
            );
            $public.trackManager.trackSuccess('Execucoes Finalizadas');
          };
          $private.getChangeCallback = function (ad) {
            return function (adSlots) {
              var length = adSlots.length,
                pushAds = [];
              for (var i = 0; i < length; i++) {
                if (adSlots[i].getAttribute('havead') === 'true') {
                  continue;
                }
                pushAds.push(adSlots[i]);
              }
              if (pushAds.length === 0) {
                return;
              }
              $private.pushToUolAds(pushAds, ad);
            };
          };
          $private.pushToUolAds = function (pushAds, ad) {
            window.uolads = window.uolads || [];
            var batchName = ad.id + '-' + Math.random().toString(36).substring(2, 10),
              length = pushAds.length;
            for (var i = 0; i < length; i++) {
              var adSlot = pushAds[i],
                currentPosition = parseInt(adSlot.getAttribute('pos'));
              window.uolads.push({
                adUnit: { chan: ad.chan || '', subchan: $private.getSubChan(ad.subchan) },
                id: adSlot.getAttribute('id'),
                pos: currentPosition,
                label: currentPosition + '-' + $private.getAdLabel(ad.label),
                campaignuol: $private.getCampaignUol(ad.contentType),
                group: ad.group || '',
                customTargetings: {
                  adblock: currentPosition.toString(),
                  cssBgColor: ad.bgColor,
                  cssTitleColor: ad.titleColor,
                  cssDescrColor: ad.descrColor,
                  cssButtonColor: ad.buttonColor,
                  cssButtonTextColor: ad.buttonTextColor,
                  cssBorderButtonColor: ad.buttonBorderColor,
                  modelo: ad.modelFormatId,
                },
                numAds: length,
                batch: batchName,
              });
              adSlot.setAttribute('havead', 'true');
            }
          };
          $private.getCafLocalStorage = function (ad) {
            var adKey = ad.coddisplaysupplier + '_' + ad.id;
            var cafData;
            try {
              cafData = JSON.parse(window.localStorage.getItem(adKey));
            } catch (err) {}
            if (!$private.cafDataSchema.isValid(cafData)) {
              return;
            }
            var cafDataOperation = new Date();
            cafDataOperation.setMinutes(cafDataOperation.getMinutes() - 15);
            if (Number(cafData.timestamp) < cafDataOperation.getTime()) {
              window.localStorage.removeItem(adKey);
              return;
            }
            return cafData;
          };
          $public.checkAdToPublisher = function (ad, container) {
            var url =
              '//publisher.cliques.uol.com.br/affiliatedData' +
              '?caf=' +
              ad.coddisplaysupplier +
              '&url=' +
              $private.getUrlReferer() +
              '&label=' +
              (ad.label || '');
            var publisher = new XMLHttpRequest();
            publisher.onreadystatechange = $private.displayFormatByPublisher(ad, container);
            publisher.open('GET', url, true);
            publisher.send();
          };
          $private.getUrlReferer = function () {
            if (window.top !== window.self) {
              return document.referrer.split('?')[0];
            }
            return window.location.href.split('?')[0];
          };
          $private.displayFormatByPublisher = function (ad, container) {
            return function (event) {
              if (event.target.readyState !== 4 || event.target.status !== 200) {
                return;
              }
              var cafData, adParameters;
              try {
                cafData = JSON.parse(event.target.responseText);
              } catch (err) {}
              if (!$private.cafDataSchema.isValid(cafData)) {
                $public.logger.error(
                  'CAF inválido',
                  $private.namTag,
                  $private.namespace,
                  $private.calculateTimeSpent()
                );
                $public.trackManager.trackError('invalid_publisherData', 'fluxo_interrompido');
                return;
              }
              $private.setCafLocalStorage(cafData, ad);
              ad = $private.mergeAdData(ad, cafData);
              $private.buildOfferBlock(ad, container);
            };
          };
          $private.setCafLocalStorage = function (cafData, ad) {
            cafData.timestamp = new Date().getTime();
            try {
              window.localStorage.setItem(cafData.caf + '_' + ad.id, JSON.stringify(cafData));
            } catch (e) {}
          };
          $private.mergeAdData = function (ad, cafData) {
            ad.campaignuol = cafData.contentType === 'CA' ? '3' : '1';
            ad.chan = cafData.domain;
            ad.subchan = cafData.idtUrl.toString();
            ad.group = cafData.categories;
            ad.label = cafData.label;
            return ad;
          };
          $private.push = function (ad) {
            ad = $private.mergeAdToConfig(ad);
            if ($private.offersBlockSchema.isValid(ad)) {
              ad = $private.getModel(ad);
              $private.buildUrlParameter(ad);
            } else {
              $public.logger.error(
                'As seguintes propriedades de configuração: ' +
                  $private.offersBlockSchema.invalidProperties.join(', ') +
                  ' estão inválidas',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('invalid_config', 'fluxo_interrompido');
            }
          };
          $private.mergeAdToConfig = function (ad) {
            if (!$private.typeValidator.isObject(ad)) {
              return {};
            }
            if (!$private.config) {
              return ad;
            }
            var mergedAd = JSON.parse(JSON.stringify($private.config));
            for (var key in ad) {
              if (!mergedAd[key]) {
                mergedAd[key] = ad[key];
              }
            }
            return mergedAd;
          };
          $private.getAdLabel = function (label) {
            if ($private.typeValidator.isString(label)) {
              return label;
            }
            return 'default@offerblock';
          };
          $private.getSubChan = function (idtUrl) {
            if (!idtUrl) {
              idtUrl = '';
            }
            return idtUrl.toString();
          };
          $private.getCampaignUol = function (contentType) {
            if (contentType === 'CA') {
              return 3;
            }
            return 1;
          };
        }
        var namespace = new NameSpace('OffersBlock');
        namespace.init = function (config, namTag) {
          return new OffersBlock().init(config, namTag, 'OffersBlock');
        };
      })(window, document);
      (function (window, document, undefined) {
        function DataLayerPersistence () {
          var $private = {};
          var $public = this;
          $private.typeValidator = new TypeValidator();
          $public.remoteStorage = new RemoteStorage();
          $public.logger = new Logs();
          $private.trackManager = new TrackManager();
          $public.__constructor = (function () {
            $public.logger.setPrefix('UOLPD.TagManager.TailtargetTrack');
            $private.trackManager.setModuleName('tailtarget-track');
            $private.tailtarget = {};
          })();
          $public.getNameSpace = function (nameSpace) {
            return $private.nameSpace;
          };
          $public.setNameSpace = function (nameSpace) {
            if ($private.typeValidator.isString(nameSpace)) {
              $private.nameSpace = nameSpace;
            }
          };
          $public.addAttribute = function (key, value) {
            if (!$private.typeValidator.isDefined($private.nameSpace)) {
              return false;
            }
            if (!$private.typeValidator.isString(key)) {
              return false;
            }
            value = $private.formatValue(value);
            if (!$private.typeValidator.isString(value)) {
              return false;
            }
            $private.storeKeyValue($private.formatKey(key), value);
            return true;
          };
          $private.formatValue = function (value) {
            if ($private.typeValidator.isArray(value)) {
              return value.join(',');
            }
            return value;
          };
          $private.storeKeyValue = function (key, value) {
            $private.tailtarget[$private.formatKey(key)] = value;
          };
          $private.formatKey = function (key) {
            if (key === 'getProfiles') {
              return 'tt_cluster';
            }
            return key.replace('get', 'tt_').toLowerCase();
          };
          $public.persist = function () {
            if ($private.hasAttributes($private.tailtarget)) {
              $public.remoteStorage.get('uolDataLayer', function (key, value) {
                var dataLayer;
                try {
                  dataLayer = JSON.parse(value);
                } catch (e) {
                  dataLayer = {};
                }
                if (!$private.typeValidator.isObject(dataLayer)) {
                  dataLayer = {};
                }
                dataLayer[$private.nameSpace] = $private.tailtarget;
                $public.remoteStorage.set(
                  key,
                  JSON.stringify(dataLayer),
                  $private.dataLayerCallback
                );
                try {
                  window.localStorage.setItem(key, JSON.stringify(dataLayer));
                } catch (err) {}
              });
            }
          };
          $private.hasAttributes = function (obj) {
            if (!$private.typeValidator.isObject(obj)) {
              return false;
            }
            for (var key in obj) {
              return true;
            }
            return false;
          };
          $private.dataLayerCallback = function () {
            $public.logger.debug('Persistindo os dados da TailTarget na dataLayer');
          };
          $public.clearData = function () {
            $public.remoteStorage.get('uolDataLayer', function (key, value) {
              var dataLayer;
              try {
                dataLayer = JSON.parse(value);
                delete dataLayer[$private.nameSpace];
              } catch (e) {}
              $public.remoteStorage.set(
                key,
                JSON.stringify(dataLayer),
                $private.dataLayerCallback
              );
            });
          };
        }
        function Identify () {
          var $private = {};
          var $public = this;
          $public.logger = new Logs();
          $public.trackManager = new TrackManager();
          $private.remoteStorage = new RemoteStorage();
          $private.typeValidator = new TypeValidator();
          $private.scriptUtils = new ScriptUtils();
          $public.dataLayerPersistence = new DataLayerPersistence();
          $public.scripts = [
            '//tm.jsuol.com.br/modules/external/tailtarget/profiles.js',
            '//tm.jsuol.com.br/modules/external/tailtarget/t3m/',
          ];
          $public.__constructor = (function () {
            $public.logger.setPrefix('UOLPD.TagManager.TailtargetTrack');
            $public.trackManager.setModuleName('tailtarget-track');
            $private.storageName = 'tailtarget';
            $public.dataLayerPersistence.setNameSpace('TailtargetTrack');
          })();
          $public.init = function (config, namTag, namespace) {
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = Date.now();
            $private.config = config || {};
            $public.trackManager.trackSuccess('Execucoes Iniciadas');
            $private.cookieUtils = new CookieUtils(
              $private.namTag,
              $private.namespace,
              $private.timeStampInit
            );
            if ($public.isOptOutEnabled()) {
              $public.dataLayerPersistence.clearData();
              $private.trackError(
                'opt-out-enabled',
                'O usuário ativou a funcionalidade de opt-out nas <a href="https://sac.uol.com.br/#/wrapper?url=https:%2F%2Fsac.uol.com.br%2Finfo%2Fprotecao_privacidade%2Fnormas_protecao_privacidade.jhtm">opções de publicidade</a>'
              );
              return;
            }
            if (window.top !== window.self && !window.KARMA_INTEGRATED_TEST) {
              $private.trackError(
                'plugin-on-iframe',
                'O plugin não irá inserir o script pois está em um iframe'
              );
            } else {
              $private.createScripts();
              $public.persistData();
            }
          };
          $public.isOptOutEnabled = function () {
            return $private.cookieUtils.getItem('BTOPTOUT') === '1';
          };
          $private.trackError = function (errorType, errorMessage) {
            var isValidErrorType = $private.typeValidator.isString(errorType);
            var isValidErrorMessage = $private.typeValidator.isString(errorMessage);
            if (!isValidErrorType || !isValidErrorMessage) {
              return;
            }
            $public.logger.warn(
              errorMessage,
              $private.namTag,
              $private.namespace,
              $private.calculateTimeSpent()
            );
            $public.trackManager.trackError(errorType, 'fluxo_interrompido');
          };
          $private.calculateTimeSpent = function (timeStampInit) {
            if (!$private.typeValidator.isDefined(timeStampInit)) {
              return Date.now() - $private.timeStampInit;
            }
            return Date.now() - timeStampInit;
          };
          $private.createScripts = function () {
            $private.repoId = '5nzulr';
            var isServiceEnabled = false;
            $private.loadingScripts = 0;
            if (!$private.typeValidator.isString($private.config.tailtargetId)) {
              $private.config.tailtargetId = 'TT-10162-1/CT-10';
            }
            if (
              $private.config.tailtargetId == 'TT-10162-1/CT-10' ||
              $private.config.tailtargetId == 'TT-12340-4/CT-929'
            ) {
              $public.scripts[1] += $private.config.tailtargetId + '.js';
            } else {
              $public.scripts[1] =
                '//tags.t.tailtarget.com/t3m.js?i=' + $private.config.tailtargetId;
            }
            for (var i = 0, length = $public.scripts.length; i < length; i++) {
              var url = $public.scripts[i];
              if ($private.scriptUtils.hasTagScript(url)) {
                if (url.indexOf('profiles') < 0) {
                  $private.enableServices();
                }
                continue;
              }
              if (!isServiceEnabled) {
                $private.enableServices();
                isServiceEnabled = true;
              }
              if ($private.repoId !== 'chygcf') {
                var script = $private.scriptUtils.createScript(url);
                script.addEventListener('load', $private.handleLoadingScripts);
                script.addEventListener('error', $private.handleLoadingScripts);
                $private.loadingScripts++;
                $private.scriptUtils.appendTag(script);
              }
            }
            $private.loadInit = Date.now();
            $private.executionTime = $private.calculateTimeSpent();
          };
          $private.handleLoadingScripts = function () {
            var thirdPartyOwner = this.src.indexOf('profiles') >= 0 ? 'Profiles' : 'T3m';
            $private['loadTime' + thirdPartyOwner] = $private.calculateTimeSpent(
              $private.loadInit
            );
            if (--$private.loadingScripts === 0) {
              $private.loadTime = $private['loadTime' + thirdPartyOwner];
              $private.thirdPartyInit = Date.now();
            }
          };
          $private.enableServices = function () {
            window._ttprofiles = window._ttprofiles || [];
            var profiles = [
              ['_setAccount', $private.config.tailtargetId.split('/')[0]],
              ['_sync', false],
              ['_enableServices'],
            ];
            for (var i = 0; i < profiles.length; i++) {
              try {
                window._ttprofiles.push(profiles[i]);
              } catch (e) {}
            }
          };
          $public.persistData = function () {
            const $___old_f97867d1dfca6872 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_f97867d1dfca6872)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_a011c28886b08277.localStorage
                ));
              return function () {
                try {
                  window.localStorage.removeItem('tailtarget');
                  window.localStorage.removeItem('tailtargettrack');
                  $private.remoteStorage.removeItem('tailTarget');
                } catch (e) {}
                var times = 0;
                var ttProfilesInterval = window.setInterval(function () {
                  times++;
                  var profiles = $private.getValidProfiles(window._ttprofiles);
                  if (
                    ($private.typeValidator.isDefined(profiles) &&
                      $private.typeValidator.isNumber($private.loadTime)) ||
                    times >= 210
                  ) {
                    $private.persistAttributes(profiles);
                    window.clearInterval(ttProfilesInterval);
                    $private.thirdPartyExecutionTime = $private.calculateTimeSpent(
                      $private.thirdPartyInit
                    );
                    $private.trackMetrics();
                  }
                }, 150);
                $public.logger.log(
                  'O plugin foi configurado corretamente e foi executado com sucesso',
                  $private.namTag,
                  $private.namespace,
                  new Date().getTime() - $private.timeStampInit
                );
                $public.trackManager.trackSuccess('Execucoes Finalizadas');
              }.apply(this, arguments);
            } finally {
              if ($___old_f97867d1dfca6872)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_f97867d1dfca6872));
            }
          };
          $private.getValidProfiles = function (ttprofiles) {
            var tailtarget = {};
            var length = 0;
            if (!ttprofiles) {
              return;
            }
            for (var key in ttprofiles) {
              if (!$private.isValidKey(key)) {
                continue;
              }
              if (!ttprofiles[key].length) {
                continue;
              }
              tailtarget[key] = ttprofiles[key];
              length++;
            }
            if (length === 0) {
              return;
            }
            return tailtarget;
          };
          $private.isValidKey = function (key) {
            var validKeys = [
              'getAge',
              'getGender',
              'getProfiles',
              'getSubjects',
              'getTeam',
              'getSocialClass',
              'getMicrosegments',
              'getLists',
              'getCustomAudience',
            ];
            for (var i = 0; i < validKeys.length; i++) {
              if (key == validKeys[i]) {
                return true;
              }
            }
            return false;
          };
          $private.persistAttributes = function (profiles) {
            for (var key in profiles) {
              $public.dataLayerPersistence.addAttribute(key, profiles[key]);
            }
            $public.dataLayerPersistence.persist();
          };
          $private.trackMetrics = function () {
            if (
              typeof $private.executionTime == 'number' &&
              typeof $private.loadTime == 'number' &&
              typeof $private.loadTimeProfiles == 'number' &&
              typeof $private.loadTimeT3m == 'number' &&
              typeof $private.thirdPartyExecutionTime == 'number'
            ) {
              $public.trackManager.trackCustomObj($private.getMetrics());
            }
          };
          $private.getMetrics = function () {
            var metrics = {};
            metrics.measures = {};
            metrics.groups = {};
            metrics.measures.executionTime = $private.executionTime;
            metrics.measures.LoadTime = $private.loadTime;
            metrics.measures.LoadTimeProfiles = $private.loadTimeProfiles;
            metrics.measures.LoadTimeT3m = $private.loadTimeT3m;
            metrics.measures.ThirdPartyExecutionTime = $private.thirdPartyExecutionTime;
            $private.addTime(metrics);
            return metrics;
          };
          $private.addTime = function (metrics) {
            if (
              $private.isOutsideTime(metrics.measures.executionTime, 1000) ||
              $private.isOutsideTime(metrics.measures.LoadTime, 21000) ||
              $private.isOutsideTime(metrics.measures.ThirdPartyExecutionTime, 21000)
            ) {
              metrics.measures.OutsideTime = 1;
              metrics.groups.groupType = 2;
            } else {
              metrics.measures.Execution = 1;
              metrics.groups.groupType = 1;
            }
          };
          $private.isOutsideTime = function (time, max) {
            if (time < 0) {
              return true;
            }
            if (time > max) {
              return true;
            }
            return false;
          };
        }
        var __monitoracaoJsuol = 'tm.jsuol.com.br/modules/tailtarget-track.js';
        var nameSpace = new NameSpace('TailtargetTrack');
        nameSpace.RemoteStorage = new RemoteStorage();
        nameSpace.init = function (config, namTag) {
          return new Identify().init(config, namTag, 'TailtargetTrack');
        };
      })(window, document);
      (function (window, document, undefined) {
        var CodeInjectorSchema = {
          properties: { codeInjector: 'isString', globalScope: 'isArray' },
          required: ['codeInjector'],
        };
        function Injector () {
          var $private = {};
          var $public = this;
          $private.schema = new Schema(CodeInjectorSchema);
          $public.logger = new Logs();
          $public.logger.setPrefix('UOLPD.TagManager.CodeInjector');
          $public.codes = [];
          $private.typeValidator = new TypeValidator();
          $public.init = function (config, namTag, namespace) {
            $private.configureLogger(namTag, namespace);
            if (!$private.schema.isValid(config)) {
              $public.logger.error(
                'A configuração fornecida pelo Tag Manager está inválida a seguinte propriedade de configuração: ' +
                  $private.schema.invalidProperties.join(', ') +
                  ' não existe ou está inválida',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              return;
            }
            var code = $private.trimScriptTag(config.codeInjector);
            $private.evalCode(code, config.globalScope);
          };
          $private.configureLogger = function (namTag, namespace) {
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = Date.now();
          };
          $private.trackError = function (errorType, errorMessage) {
            if (!$private.typeValidator.isString(errorType)) {
              return;
            }
            if (!$private.typeValidator.isString(errorMessage)) {
              return;
            }
            $public.logger.warn(
              errorMessage,
              $private.namTag,
              $private.namespace,
              $private.calculateTimeSpent()
            );
          };
          $private.calculateTimeSpent = function (timeStampInit) {
            if (!$private.typeValidator.isDefined(timeStampInit)) {
              return Date.now() - $private.timeStampInit;
            }
            return Date.now() - timeStampInit;
          };
          $private.trimScriptTag = function (code) {
            var replaceScriptRegex = /^(\s+)?<script>(\s+)?|(\s+)?<\/script>(\s+)?$/gm;
            code = code.replace(replaceScriptRegex, '');
            $public.codes.push(code);
            return code;
          };
          $private.evalCode = function (code, globalScope) {
            const $___old_a068ae8bf1b9f2f0 = {}.constructor.getOwnPropertyDescriptor(
              Navigator.prototype,
              'userAgent'
            );
            try {
              if ($___old_a068ae8bf1b9f2f0)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___stub_9d7b4eb662ee43f5.userAgent
                ));
              return function () {
                try {
                  if (globalScope && globalScope.length === 1) {
                    window.eval(code);
                  } else {
                    var dynMet = new Function(code);
                    dynMet();
                  }
                  $public.logger.log(
                    'Tag do CodeInjector executada com sucesso',
                    $private.namTag,
                    $private.namespace,
                    $private.calculateTimeSpent()
                  );
                } catch (err) {
                  $private.trackError(
                    'parse_error',
                    'O Tag Manager previniu um erro de execução de javascript. Favor verificar a implementação de sua tag'
                  );
                }
              }.apply(this, arguments);
            } finally {
              if ($___old_a068ae8bf1b9f2f0)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___old_a068ae8bf1b9f2f0
                ));
            }
          };
        }
        var nameSpace = new NameSpace('CodeInjector');
        nameSpace.init = function (config, namTag) {
          return new Injector().init(config, namTag, 'CodeInjector');
        };
      })(window, document);
      (function (window, document, undefined) {
        var DfpSchema = {
          properties: {
            bannerId: 'isString',
            fluid: 'isArray',
            bannerWidth: 'isNumericString',
            bannerHeight: 'isNumericString',
            dfppath: 'isString',
            forcePath: 'isArray',
            campaignuol: 'isString',
            sizeMapping: 'isString',
            pos: 'isString',
            expble: 'isNumericString',
            group: 'isString',
            keyword: 'isString',
            isCompanion: 'isString',
            outOfPage: 'isArray',
            rotative: 'isNumericString',
            hide: 'isString',
            isIncremental: 'isString',
            frequencyControl: 'isArray',
            deslabel: 'isString',
            nativeType: 'isString',
            requestDelay: '5nzulr' == 'tuvy6z' ? 'isString' : 'isNumericString',
            timeToRefresh: 'isNumericString',
            customTargetings: 'isString',
            geolocation: 'isString',
            isSingleRequest: 'isString',
          },
          required: [
            'bannerId',
            'fluid',
            'forcePath',
            'outOfPage',
            'hide',
            'frequencyControl',
            'isCompanion',
            'geolocation',
          ],
        };
        function TimeoutUtils (callback, delay) {
          var $private = {};
          var $public = this;
          $private.typeValidator = new TypeValidator();
          $private.remaining = delay;
          $private.isCalling = false;
          $public.getTimeout = function () {
            return $private.timeout;
          };
          $public.getRemaining = function () {
            return $private.remaining;
          };
          $public.getDelay = function () {
            return delay;
          };
          $public.getStartTime = function () {
            return $private.startTime;
          };
          $public.play = function () {
            if (!$private.isValidTimeout()) {
              return;
            }
            $private.startTime = Date.now();
            if (!$private.typeValidator.isNumber($private.remaining)) {
              $private.remaining = $private.delay;
            }
            if ($private.isCalling) {
              return;
            }
            if ($private.remaining < 1) {
              return;
            }
            $private.timeout = window.setTimeout($private.timeoutCallback, $private.remaining);
            $private.isCalling = true;
          };
          $private.timeoutCallback = function () {
            try {
              callback($public);
            } catch (e) {}
          };
          $private.isValidTimeout = function () {
            if (!$private.typeValidator.isFunction(callback)) {
              return false;
            }
            if (!$private.typeValidator.isNumber(delay)) {
              return false;
            }
            if (delay === 0) {
              return false;
            }
            return true;
          };
          $public.pause = function () {
            $private.clearTimeout();
            $private.remaining = $private.calculateTimeRemaining();
          };
          $private.clearTimeout = function () {
            if ($private.timeout) {
              window.clearTimeout($private.timeout);
              $private.timeout = undefined;
              $private.isCalling = false;
            }
          };
          $private.calculateTimeRemaining = function () {
            var timeSpent = Date.now() - $private.startTime;
            return Math.floor($private.remaining - timeSpent);
          };
          $public.updateDelay = function (newDelay) {
            $private.clearTimeout();
            var remaining = newDelay - $public.calculateTimeSpent();
            if (remaining > 0) {
              $private.remaining = delay = remaining;
              $public.play();
            } else {
              $public.stop();
              $private.timeoutCallback();
            }
          };
          $public.calculateTimeSpent = function () {
            return delay - $private.calculateTimeRemaining();
          };
          $public.stop = function () {
            $private.clearTimeout();
            $private.remaining = delay;
          };
        }
        function Visibility () {
          var $private = {};
          var $public = this;
          $private.typeValidator = new TypeValidator();
          $private.__constructor = (function () {
            $private.hasListener = false;
            $public.elements = {};
            $private.lastPos = window.scrollY;
            document.addEventListener('scroll', function () {
              window.checkVisibilityScroll = window.checkVisibilityScroll || 0;
              if (document.readyState === 'complete' && window.checkVisibilityScroll > 10) {
                $private.minuteLastScroll = new Date().getMinutes();
              }
              window.checkVisibilityScroll += 1;
            });
          })();
          $public.addElement = function (id, requestDelay, callbackVisible, callbackInvisible) {
            var element = document.getElementById(id);
            if (!element) {
              return;
            }
            if (!$private.typeValidator.isFunction(callbackVisible)) {
              return;
            }
            var visibilityItem = {
              element: element,
              callbackVisible: callbackVisible,
              focusInit: $public.hasFocus(),
              isVisible: false,
            };
            $public.elements[id] = visibilityItem;
            if ($private.typeValidator.isFunction(callbackInvisible)) {
              visibilityItem.callbackInvisible = callbackInvisible;
            }
            if ($private.typeValidator.isNumericString(requestDelay)) {
              visibilityItem.requestDelay = Number(requestDelay);
            }
            visibilityItem.visibilityInit = $public.isElementOnScreen(visibilityItem);
            $private.startListening();
            $public.checkVisibility();
          };
          $public.hasFocus = function () {
            return window.UOLPD.dataLayer.hasFocus === 'true';
          };
          $public.isElementOnScreen = function (item) {
            var repoId = '5nzulr';
            if (!$private.typeValidator.isObject(item)) {
              return false;
            }
            if (!$private.typeValidator.isDefined(item.element)) {
              return false;
            }
            if (
              repoId == 'yvtzf2' &&
              ($public.hasFocus() || window.UOLPD.dataLayer.hasMouseIn == 'true') &&
              $private.isElementVisible(item.element, item.requestDelay)
            ) {
              return true;
            }
            if (!$public.hasFocus() && !$private.pageActive()) {
              return false;
            }
            if (!$private.isElementVisible(item.element, item.requestDelay)) {
              return false;
            }
            return true;
          };
          $private.pageActive = function () {
            if (!$private.minuteLastScroll) {
              return false;
            }
            var actualMinute = new Date().getMinutes();
            if ($private.minuteLastScroll !== actualMinute) {
              return false;
            }
            return true;
          };
          $private.isElementVisible = function (element, requestDelay) {
            var position = element.getBoundingClientRect();
            var percentage = $private.getVisibilityPercentage(element);
            if (!$public.isElementVisibleOnDom(element)) {
              return false;
            }
            if ($private.isAboveVisibleArea(position, percentage, requestDelay)) {
              return false;
            }
            if ($private.isBelowVisibleArea(position, percentage, requestDelay)) {
              return false;
            }
            return true;
          };
          $public.isElementVisibleOnDom = function (element) {
            if (element) {
              return element.offsetParent !== null;
            } else {
              return false;
            }
          };
          $private.getVisibilityPercentage = function (element) {
            if ($private.calculateElementArea(element) > 242500) {
              return 100 / 30;
            }
            return 100 / 50;
          };
          $private.calculateElementArea = function (element) {
            var firstChild = element.firstChild;
            if (!$private.typeValidator.isDefined(firstChild)) {
              return 0;
            }
            return firstChild.offsetWidth * firstChild.offsetHeight;
          };
          $private.isAboveVisibleArea = function (position, percentage, requestDelay) {
            var distance = (position.height / percentage) * -1;
            return position.bottom < distance;
          };
          $private.isBelowVisibleArea = function (position, percentage, requestDelay) {
            var distance = position.height / percentage + window.innerHeight;
            if ($private.typeValidator.isInt(requestDelay)) {
              distance = $private.calculateDistance(requestDelay);
            }
            return position.bottom > distance;
          };
          $private.calculateDistance = function (requestDelay) {
            window.__averageSlotsLoadTime = window.__averageSlotsLoadTime || 0;
            var distance =
              window.innerHeight +
              $private.getDelta() +
              requestDelay +
              window.__averageSlotsLoadTime;
            distance = distance / 2;
            return distance;
          };
          $private.getDelta = function () {
            var delta = window.scrollY - $private.lastPos;
            $private.lastPos = window.scrollY;
            return delta;
          };
          $private.startListening = function () {
            if (!$private.hasListener) {
              $public.focusInterval = window.setInterval($public.checkVisibility, 50);
              $private.hasListener = true;
            }
          };
          $public.checkVisibility = function () {
            for (var id in $public.elements) {
              $private.handleCallback($public.elements[id]);
            }
          };
          $private.handleCallback = function (item) {
            var isVisible = $public.isElementOnScreen(item);
            if (isVisible) {
              item.callbackVisible();
            } else {
              if (item.callbackInvisible) {
                item.callbackInvisible();
              }
            }
            item.isVisible = isVisible;
          };
        }
        function ConfigConsolidator (namTag, namespace, timestampInit) {
          var $private = {};
          var $public = this;
          $private.namTag = namTag;
          $private.namespace = namespace;
          $private.timestampInit = timestampInit;
          $private.typeValidator = new TypeValidator();
          $public.logger = new Logs();
          $public.trackManager = new TrackManager();
          $public.logger.setPrefix('UOLPD.TagManager.DfpAsync');
          $public.trackManager.setModuleName('dfp-async');
          $public.consolidate = function (config, uoladsConfig) {
            if (
              config.forcePath[0] === 'forcePath' &&
              !$private.typeValidator.isString(config.dfppath)
            ) {
              $public.logger.warn(
                'O item de configuração "Forçar Path" só pode ser ativado caso o item "Path do DFP" esteja preenchido',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError(
                'invalid_dfppath',
                'O objeto de configuração está inválido'
              );
              return;
            }
            var finalConfig = $private.addUoladsItems(config, uoladsConfig);
            finalConfig.dfppath = $private.processAdUnit(
              finalConfig.forcePath[0],
              finalConfig.dfppath,
              uoladsConfig.adUnit
            );
            if (!finalConfig.dfppath) {
              $public.logger.warn(
                'Não foi encontrado o AdUnit da tag',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('invalid_dfppath', 'O AdUnit está inválido');
              return;
            }
            finalConfig.customTargetings = $private.mergeCustomTargetings(
              finalConfig.customTargetings,
              uoladsConfig.customTargetings
            );
            var keyword = $private.getKeywordValue(finalConfig.keyword);
            if ($private.typeValidator.isString(keyword)) {
              finalConfig.keyword = keyword;
            }
            return finalConfig;
          };
          $private.calculateTimeSpent = function () {
            return new Date().getTime() - $private.timestampInit;
          };
          $private.addUoladsItems = function (config, uoladsConfig) {
            var finalConfig, key;
            finalConfig = {};
            for (key in config) {
              finalConfig[key] = config[key];
            }
            for (key in uoladsConfig) {
              if (key === 'id' || key === 'customTargetings' || key === 'adUnit') {
                continue;
              }
              if ($private.typeValidator.isDefined(finalConfig[key])) {
                continue;
              }
              if (key === 'label') {
                key = 'deslabel';
                uoladsConfig.deslabel = uoladsConfig.label;
              }
              if ($private.typeValidator.isDefined(uoladsConfig[key])) {
                finalConfig[key] = uoladsConfig[key];
              }
            }
            finalConfig.bannerId = uoladsConfig.id;
            return finalConfig;
          };
          $private.processAdUnit = function (forcePath, configPath, uoladsAdUnit) {
            if (forcePath === 'forcePath') {
              return configPath;
            }
            var adUnit = $private.convertPathToAdUnit(configPath);
            adUnit = $private.overrideAdUnit(uoladsAdUnit, adUnit);
            if ($private.isValidUvar()) {
              adUnit = $private.overrideAdUnit(
                window.universal_variable.dfp.custom_params,
                adUnit
              );
            }
            if (!$private.typeValidator.isString(adUnit.network)) {
              $public.logger.warn(
                'O "Path do DFP" configurado para esta página está vazio',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              return;
            }
            if (!$private.typeValidator.isString(adUnit.site)) {
              return '/' + adUnit.network;
            }
            if (!$private.typeValidator.isString(adUnit.chan)) {
              return '/' + adUnit.network + '/' + adUnit.site;
            }
            if (!$private.typeValidator.isString(adUnit.subchan)) {
              return '/' + adUnit.network + '/' + adUnit.site + '/' + adUnit.chan;
            }
            return (
              '/' + adUnit.network + '/' + adUnit.site + '/' + adUnit.chan + '/' + adUnit.subchan
            );
          };
          $private.convertPathToAdUnit = function (path) {
            if (!$private.typeValidator.isString(path)) {
              return {};
            }
            var hierarchy = ['network', 'site', 'chan', 'subchan'];
            var length = hierarchy.length;
            var adUnit = {};
            path = path.split('/');
            if (!path) {
              return {};
            }
            if (!$private.typeValidator.isString(path[0])) {
              path.shift();
            }
            if (path.length > length) {
              path[3] = path[3] + '/' + path.splice(length).join('/');
            }
            for (var i = 0; i < length; i++) {
              if ($private.typeValidator.isString(path[i])) {
                adUnit[hierarchy[i]] = path[i];
              }
            }
            return adUnit;
          };
          $private.overrideAdUnit = function (attrAdUnit, finalAdUnit) {
            for (var key in attrAdUnit) {
              if ($private.typeValidator.isString(finalAdUnit[key])) {
                continue;
              }
              if (!$private.typeValidator.isString(attrAdUnit[key])) {
                continue;
              }
              finalAdUnit[key] = attrAdUnit[key];
            }
            return finalAdUnit;
          };
          $private.isValidUvar = function () {
            if (!$private.typeValidator.isObject(window.universal_variable)) {
              return false;
            }
            if (!$private.typeValidator.isObject(window.universal_variable.dfp)) {
              return false;
            }
            if (!$private.typeValidator.isObject(window.universal_variable.dfp.custom_params)) {
              return false;
            }
            return true;
          };
          $private.mergeCustomTargetings = function (configCustomTargetings, adCustomTargetings) {
            var finalCustomTargetings = {};
            if ($private.typeValidator.isString(configCustomTargetings)) {
              try {
                configCustomTargetings = JSON.parse(configCustomTargetings);
              } catch (e) {}
            }
            $private.defineCustomTargetings(configCustomTargetings, finalCustomTargetings);
            $private.defineCustomTargetings(adCustomTargetings, finalCustomTargetings);
            return finalCustomTargetings;
          };
          $private.defineCustomTargetings = function (customTargetings, finalCustomTargetings) {
            if (!$private.typeValidator.isObject(customTargetings)) {
              return;
            }
            for (var key in customTargetings) {
              if (finalCustomTargetings[key]) {
                continue;
              }
              if ($private.typeValidator.isString(customTargetings[key])) {
                finalCustomTargetings[key] = customTargetings[key];
              }
            }
          };
          $private.getKeywordValue = function (keyword) {
            if ($private.typeValidator.isString(keyword)) {
              return keyword;
            }
            if (!$private.isValidUvarKeyword()) {
              return;
            }
            return window.universal_variable.dfp.custom_params.keyword;
          };
          $private.isValidUvarKeyword = function () {
            if (!$private.isValidUvar()) {
              return false;
            }
            if (
              !$private.typeValidator.isString(window.universal_variable.dfp.custom_params.keyword)
            ) {
              return false;
            }
            return true;
          };
        }
        function Slot (namTag, namespace, timestampInit) {
          var $private = {};
          var $public = this;
          $private.namTag = namTag;
          $private.namespace = namespace;
          $private.timestampInit = timestampInit;
          $private.typeValidator = new TypeValidator();
          $private.contentValidator = new ContentValidator();
          $public.logger = new Logs();
          $public.trackManager = new TrackManager();
          $public.logger.setPrefix('UOLPD.TagManager.DfpAsync');
          $public.trackManager.setModuleName('dfp-async');
          $public.build = function (config) {
            if (!document.getElementById(config.bannerId)) {
              $public.logger.error(
                'O slot não foi criado pois o elemento de id "' +
                  config.bannerId +
                  '" não existe no DOM',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('missing_dom_element', 'fluxo_interrompido');
              return;
            }
            try {
              $private.repoId = '5nzulr';
              if (
                $private.repoId == 'chygcf' &&
                (window.location.href.match(/^https?:\/\/www\.uol\.com\.br\/?(\?.*)?$/) != null ||
                  window.location.href.match(
                    /^https?:\/\/www\.uol\.com\.br\/teste\/publicidade\/index.html?(\?.*)?$/
                  ) != null) &&
                window.location.href.indexOf('outstreamgoogle') != -1
              ) {
                if (!$private.slot && config.bannerWidth && config.bannerHeight) {
                  $private.slot = window.googletag
                    .defineSlot(
                      config.dfppath,
                      [parseInt(config.bannerWidth), parseInt(config.bannerHeight)],
                      config.bannerId
                    )
                    .addService(googletag.content());
                  if (config.bannerId == 'banner-1x1-hibrido-video-1-area') {
                    var contentUOLHome = document.querySelector('#floatingVideoCallbackContent')
                      .innerHTML;
                    if (contentUOLHome) {
                      googletag.content().setContent($private.slot, contentUOLHome);
                    }
                  }
                }
              }
            } catch (e) {}
            if (config.fluid[0] === 'true') {
              $private.slot = window.googletag.defineSlot(
                config.dfppath,
                'fluid',
                config.bannerId
              );
            }
            if (!$private.slot && config.outOfPage[0] === 'outOfPage') {
              $private.slot = window.googletag.defineOutOfPageSlot(
                config.dfppath,
                config.bannerId
              );
            }
            if (!$private.slot && config.bannerWidth && config.bannerHeight) {
              $private.slot = window.googletag.defineSlot(
                config.dfppath,
                [parseInt(config.bannerWidth), parseInt(config.bannerHeight)],
                config.bannerId
              );
            }
            if (!$private.slot) {
              $public.trackManager.trackError('invalid_slot', 'fluxo_interrompido');
              return;
            }
            if (config.isCompanion === 'true') {
              $private.slot.addService(window.googletag.companionAds());
            }
            $private.slot.addService(window.googletag.pubads());
            if (config.sizeMapping) {
              $private.defineSizeMapping(config.sizeMapping);
            }
            $private.setTargetings(config);
            return $private.slot;
          };
          $private.calculateTimeSpent = function () {
            return new Date().getTime() - $private.timestampInit;
          };
          $private.defineSizeMapping = function (sizeMapping) {
            var mapping = $private.buildMapping(sizeMapping);
            if (mapping) {
              $private.slot.defineSizeMapping(mapping);
            }
          };
          $private.buildMapping = function (sizeMappings) {
            var matchedMappings = sizeMappings.match(
              /((\[\d+\,\s?\d+\])|(\'fluid\'|\"fluid\"))+(\,\s?)((\[\d+\,\s?\d+\]|\[\])|(\'fluid\'|\"fluid\")|\[((\[\d+\,\s*\d+\]|(\'fluid\'|\"fluid\"))(\,\s*)*)+\])(\;?\s?)?/g
            );
            if (!matchedMappings) {
              $public.logger.warn(
                'Não foi possível gerar o sizeMapping no DFP, a configuração "' +
                  sizeMappings +
                  '" é inválida.',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('invalid_size_mapping', 'fluxo_interrompido');
              return;
            }
            var mapping = window.googletag.sizeMapping();
            for (var i = 0, length = matchedMappings.length; i < length; i++) {
              var sizeMapping = $private.convertSizeMappingItem(matchedMappings[i]);
              if (sizeMapping) {
                mapping = mapping.addSize(sizeMapping.viewportSize, sizeMapping.slotSize);
              }
            }
            return mapping.build();
          };
          $private.convertSizeMappingItem = function (sizeMapping) {
            try {
              var matches = sizeMapping.match(
                /(\[\d+\,\s?\d+\]|\[(\[\d+\,\s*\d+\](\,\s*)*)+\])(\,(\s)?((\[\d+\,\s?\d+\]|\[\])|(\'fluid\'|\"fluid\")|\[((\[\d+\,\s*\d+\]|(\'fluid\'|\"fluid\"))(\,\s*)*)+\]))+/
              );
              var sizes = {};
              sizes.viewportSize = JSON.parse(matches[1]);
              sizes.slotSize = $private.convertSlotSize(matches[6]);
              return sizes;
            } catch (e) {
              $public.logger.warn(
                'Não foi possível gerar o sizeMapping no DFP, a configuração "' +
                  sizeMapping +
                  '" é inválida.',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('invalid_size_mapping', 'fluxo_interrompido');
              return;
            }
          };
          $private.convertSlotSize = function (slotSize) {
            if (slotSize.indexOf('[') < 0) {
              return 'fluid';
            }
            return eval(slotSize);
          };
          $private.setTargetings = function (config) {
            if (
              $private.typeValidator.isString(config.campaignuol) ||
              $private.typeValidator.isNumber(config.campaignuol)
            ) {
              $private.slot.setTargeting('campaignuol', config.campaignuol);
            }
            if ($private.typeValidator.isString(config.group)) {
              $private.slot.setTargeting('group', config.group);
            }
            if ($private.typeValidator.isString(config.keyword)) {
              $private.slot.setTargeting('keyword', config.keyword);
            }
            if (
              $private.typeValidator.isString(config.pos) ||
              $private.typeValidator.isNumber(config.pos)
            ) {
              $private.slot.setTargeting('pos', config.pos);
            }
            if ($private.typeValidator.isString(config.deslabel)) {
              $private.slot.setTargeting('label', config.deslabel);
            }
            if (
              $private.typeValidator.isNumericString(config.nativeType) ||
              $private.typeValidator.isNumber(config.nativeType) ||
              $private.typeValidator.isArray(config.nativeType)
            ) {
              $private.slot.setTargeting('native', config.nativeType);
            }
            if (config.bannerWidth && config.bannerHeight) {
              var size = config.bannerWidth + 'x' + config.bannerHeight;
              $private.addAudienceScience(size);
            }
            if ($private.typeValidator.isObject(config.customTargetings)) {
              for (var key in config.customTargetings) {
                $private.slot.setTargeting(key, config.customTargetings[key]);
              }
            }
          };
          $private.addAudienceScience = function (size) {
            var dfpPlacements = window.adPlacements;
            var audienceSciencePlacements;
            if ($private.contentValidator.isFilledObject(dfpPlacements)) {
              audienceSciencePlacements = $private.formatPlacements(dfpPlacements, size);
            }
            if ($private.typeValidator.isString(audienceSciencePlacements)) {
              $private.slot.setTargeting('gwd', audienceSciencePlacements);
            }
          };
          $private.formatPlacements = function (dfpPlacements, size) {
            var placements = [];
            for (var placement in dfpPlacements) {
              if (dfpPlacements[placement] === size) {
                placements.push(placement);
              }
            }
            placements = placements.toString();
            if (!$private.typeValidator.isString(placements)) {
              return;
            }
            return placements;
          };
          $public.destroySlots = function (slot) {
            if ($private.typeValidator.isArray(slot)) {
              return window.googletag.destroySlots(slot);
            }
            return false;
          };
        }
        function Rotative (namTag, namespace, timestampInit) {
          var $private = {};
          var $public = this;
          $private.namTag = namTag;
          $private.namespace = namespace;
          $private.timestampInit = timestampInit;
          $private.typeValidator = new TypeValidator();
          $public.logger = new Logs();
          $public.trackManager = new TrackManager();
          $public.logger.setPrefix('UOLPD.TagManager.DfpAsync');
          $public.trackManager.setModuleName('dfp-async');
          $public.createDivs = function (adsLength, bannerId) {
            if (!$private.typeValidator.isNumber(adsLength)) {
              $public.logger.warn(
                'A quantidade de anúncios rotativos não foi informada corretamente',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('invalid_rotative_length', 'fluxo_interrompido');
              return;
            }
            if (!$private.typeValidator.isString(bannerId)) {
              $public.logger.warn(
                'O atributo bannerId do config não foi repassado para os anúncios rotativos',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('invalid_rotative_bannerid', 'fluxo_interrompido');
              return;
            }
            $private.divs = [];
            var content = document.getElementById(bannerId);
            content.style.overflow = 'hidden';
            for (var i = 1; i <= adsLength; i++) {
              var div = $private.createDiv(bannerId, i);
              content.appendChild(div);
              $private.divs.push(div);
            }
            return $private.divs;
          };
          $private.calculateTimeSpent = function () {
            return new Date().getTime() - $private.timestampInit;
          };
          $private.createDiv = function (bannerId, index) {
            var div = document.createElement('div');
            div.id = bannerId + '-rotative-' + index;
            if (index > 1) {
              div.style.display = 'none';
            } else {
              div.style.display = 'block';
            }
            return div;
          };
          $public.rotate = function () {
            if (!$private.typeValidator.isArray($private.divs)) {
              return false;
            }
            setInterval(function () {
              var index = $private.getVisibleDivIndex();
              for (var i = 0; i < $private.divs.length; i++) {
                $private.divs[i].style.display = 'none';
              }
              index++;
              if (index > $private.divs.length - 1) {
                index = 0;
              }
              $private.divs[index].style.display = 'block';
            }, 3000);
          };
          $private.getVisibleDivIndex = function () {
            for (var i = 0; i < $private.divs.length; i++) {
              if ($private.divs[i].style.display != 'none') {
                return i;
              }
            }
          };
        }
        function DfpAsync () {
          var $private = {};
          var $public = this;
          $private.scriptUtils = new ScriptUtils();
          $private.schema = new Schema(DfpSchema);
          $private.typeValidator = new TypeValidator();
          $private.contentValidator = new ContentValidator();
          $private.visibility = visibility;
          $private.cookieUtils = new CookieUtils();
          $public.trackManager = new TrackManager();
          $public.logger = new Logs();
          $private.__constructor = function () {
            $public.logger.setPrefix('UOLPD.TagManager.DfpAsync');
            $public.trackManager.setModuleName('dfp-async');
            $private.GPT_URL = '//www.googletagservices.com/tag/js/gpt.js';
            $private.GPT_URL_NEW = '//securepubads.g.doubleclick.net/tag/js/gpt.js';
          };
          $private.repoId = '5nzulr';
          $private.accountId = '26';
          $private.isValidRepo = (function () {
            var isTest = true;
            try {
              if ($private.repoId.indexOf('cod_re') > -1) {
                return false;
              }
            } catch (ex) {}
            return isTest;
          })();
          $private.getABScenario = function () {
            return window.location.href.match(/^https?:\/\/www\.uol\.com\.br\/?(\?.*)?$/)
              ? 'home'
              : 'all';
          };
          $private.getCookie = function (name) {
            return ('; ' + document.cookie)
              .split('; ' + name + '=')
              .pop()
              .split(';')
              .shift();
          };
          $public.init = function (config, namTag, namespace) {
            $private.configureLogger(namTag, namespace);
            $private.createUolads();
            if (!$private.schema.isValid(config)) {
              $public.logger.error(
                'A configuração fornecida pelo Tag Manager está inválida, as seguintes propriedades de configuração: ' +
                  $private.schema.invalidProperties.join(', ') +
                  ' não existem ou são inválidas',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError(
                'invalid_config',
                'O objeto de configuração está inválido'
              );
              return;
            }
            if ($private.repoId == 'yvtzf2') {
              document.addEventListener('mouseleave', function (event) {
                if (
                  event.clientY <= 0 ||
                  event.clientX <= 0 ||
                  event.clientX >= window.innerWidth ||
                  event.clientY >= window.innerHeight
                ) {
                  window.UOLPD.dataLayer.hasMouseIn = 'false';
                }
              });
              document.addEventListener('mouseover', function (event) {
                window.UOLPD.dataLayer.hasMouseIn = 'true';
              });
            }
            if (
              !$private.scriptUtils.hasTagScript($private.GPT_URL) &&
              !$private.scriptUtils.hasTagScript($private.GPT_URL_NEW)
            ) {
              $private.scriptUtils.appendTag(
                $private.scriptUtils.createScript($private.GPT_URL_NEW)
              );
            }
            if (!$private.defineGlobalDFPTags(config)) {
              return;
            }
            window.googletag = window.googletag || {};
            window.googletag.cmd = window.googletag.cmd || [];
            window.googletag.cmd.push($private.checkAsyncRendering);
            window.__configuredDFPTags[config.bannerId].timeStampInit = $private.timeStampInit;
            window.__configuredDFPTags[
              config.bannerId
            ].executionTime = $private.calculateTimeSpent();
            window.__dfpAsyncRenderingCallbacks = window.__dfpAsyncRenderingCallbacks || {};
            $private.checkEnqueue(config.isIncremental, config.bannerId);
          };
          $private.configureLogger = function (namTag, namespace) {
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = new Date().getTime();
            $public.trackManager.trackSuccess('Execucoes Iniciadas');
          };
          $private.calculateTimeSpent = function (timeStampInit) {
            if (!$private.typeValidator.isDefined(timeStampInit)) {
              return new Date().getTime() - $private.timeStampInit;
            }
            return new Date().getTime() - timeStampInit;
          };
          $private.createUolads = function () {
            window.uolads = window.uolads || [];
            window.uolads.push = $private.push;
          };
          $private.defineGlobalDFPTags = function (config) {
            if (!$private.typeValidator.isObject(window.__configuredDFPTags)) {
              window.__configuredDFPTags = {};
            }
            if (window.__configuredDFPTags[config.bannerId]) {
              $public.logger.warn(
                'Uma tag com o id "' +
                  config.bannerId +
                  '" já foi executada nesta página, verifique suas configurações.',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              return;
            }
            window.__configuredDFPTags[config.bannerId] = {};
            window.__configuredDFPTags[config.bannerId].namTag = $private.namTag;
            window.__configuredDFPTags[config.bannerId].timeStampInit = $private.timeStampInit;
            window.__configuredDFPTags[config.bannerId].config = config;
            window.__configuredDFPTags[config.bannerId].ads = {};
            return window.__configuredDFPTags;
          };
          $private.checkAsyncRendering = function () {
            var isAsyncRenderEnabled = window.googletag.pubads().enableAsyncRendering();
            if (!isAsyncRenderEnabled) {
              $public.logger.error(
                'A página está configurada para renderizar de forma síncrona, favor remover a chamada "window.googletag.pubads().enableSyncServices()"',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('mixed_sync_rendering', 'fluxo_interrompido');
              return;
            }
            $private.setPubadsTargetings();
          };
          $private.setPubadsTargetings = function () {
            var tagPages = $private.getTagPages();
            if (tagPages) {
              googletag.pubads().setTargeting('tags', tagPages);
              $public.logger.debug('Definindo o targeting "tags" no escopo da página.');
            }
            if (!$private.hasDataLayer()) {
              $public.logger.warn(
                'Os targetings da "dataLayer" do UOLPD não foram definidos pois a "dataLayer" não existe ou é um objeto inválido.',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              return;
            }
            for (var target in UOLPD.dataLayer) {
              var targetValue = UOLPD.dataLayer[target];
              if (!$private.typeValidator.isString(targetValue)) {
                $public.logger.debug(
                  'O targeting "' + target + '" não foi definido por ser inválido.'
                );
                continue;
              }
              if (target == 'referrer') {
                continue;
              }
              try {
                if (target.indexOf('nvg_') > -1) {
                  targetValue = UOLPD.dataLayer[target] = UOLPD.dataLayer[target].replace(
                    /\-/g,
                    ','
                  );
                }
              } catch (ex) {}
              googletag.pubads().setTargeting(target, targetValue);
              $public.logger.debug('Definindo o targeting "' + target + '" no escopo da página.');
            }
            try {
              if ('5nzulr' == 'chygcf') {
                var ckExpUOL = $private.getCookie('_uolabCTD006');
                if (ckExpUOL && ckExpUOL.match(/publico-(entretenimento|universa|noticias)$/)) {
                  googletag.pubads().setTargeting('_uolabCTD006', ckExpUOL);
                }
              }
            } catch (ex) {}
          };
          $private.getTagPages = function () {
            var uvar = window.universal_variable;
            if (!$private.isValidTagPages(uvar)) {
              $public.logger.debug(
                'Os targetings da "page.tags" da UVAR não foram definidos pois a "page.tags" não existe ou é um array inválido.'
              );
              return;
            }
            var pageTags = [];
            for (var i = 0, length = uvar.page.tags.length; i < length; i++) {
              var tag = uvar.page.tags[i];
              if ($private.typeValidator.isString(tag) || $private.typeValidator.isNumber(tag)) {
                pageTags.push(tag.toString());
              }
            }
            if (pageTags.length === 0) {
              $public.logger.debug(
                'Os targetings da "page.tags" da UVAR não foram definidos pois a "page.tags" não existe ou é um array inválido.'
              );
              return;
            }
            return pageTags;
          };
          $private.isValidTagPages = function (uvar) {
            if (!$private.typeValidator.isObject(uvar)) {
              return false;
            }
            if (!$private.typeValidator.isObject(uvar.page)) {
              return false;
            }
            if (!$private.typeValidator.isArray(uvar.page.tags)) {
              return false;
            }
            return true;
          };
          $private.hasDataLayer = function () {
            if (!$private.typeValidator.isObject(window.UOLPD)) {
              return false;
            }
            if (!$private.typeValidator.isObject(window.UOLPD.dataLayer)) {
              return false;
            }
            return true;
          };
          $private.checkEnqueue = function (incremental, id) {
            for (var i = 0; i < uolads.length; i++) {
              var data = uolads[i];
              if (!data) {
                break;
              }
              if ($private.checkIncremental(incremental, data, id)) {
                $private.push(data);
                i--;
              } else {
                if (data.id === id) {
                  $private.push(data);
                  break;
                }
              }
              if (i <= 0 && uolads.length === 0) {
                break;
              }
            }
          };
          $private.checkIncremental = function (incremental, data, id) {
            if (!$private.isIncremental(incremental)) {
              return false;
            }
            if (data.id.indexOf(id) == 0) {
              return true;
            }
            return false;
          };
          $private.isIncremental = function (isIncremental) {
            if (isIncremental === 'true') {
              return true;
            }
            if (isIncremental === 'updateCorrelator') {
              return true;
            }
            return false;
          };
          $private.push = function (ad) {
            var timeStampInit = new Date().getTime();
            if (!$private.isValidAd(ad)) {
              $public.logger.warn(
                'O parâmetro passado para o "push" é inválido.',
                'Tag inválida',
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('invalid_uolads_push', 'fluxo_interrompido');
              return;
            }
            $private.removeElementEnqueue(ad.id);
            var configuredTag = $private.getConfiguredTag(ad);
            if (!configuredTag) {
              Array.prototype.push.call(window.uolads, ad);
              return;
            }
            var tagAd = $private.getAdById(ad.id);
            if (tagAd) {
              tagAd.timeStampInit = timeStampInit;
              $public.refreshSlot(ad.id);
              return;
            }
            $private.configConsolidator = new ConfigConsolidator(
              configuredTag.namTag,
              $private.namespace,
              timeStampInit
            );
            var config = $private.configConsolidator.consolidate(configuredTag.config, ad);
            if (!config) {
              $public.logger.error(
                'O objeto de configuração do id: ' + ad.id + ' não está válido.',
                configuredTag.namTag,
                $private.namespace,
                $private.calculateTimeSpent(configuredTag.timeStampInit)
              );
              return;
            }
            if (!$private.isBannerEnable(config, configuredTag.namTag)) {
              return;
            }
            if (parseInt(config.rotative) > 1) {
              $private.buildRotativeAds(configuredTag, config, timeStampInit);
            } else {
              $private.buildAd(configuredTag, config, timeStampInit);
            }
          };
          $private.isValidAd = function (ad) {
            if (!$private.typeValidator.isObject(ad)) {
              return false;
            }
            if (!$private.typeValidator.isString(ad.id)) {
              return false;
            }
            return true;
          };
          $private.removeElementEnqueue = function (id) {
            var queue = window.uolads;
            if ($private.typeValidator.isArray(queue) && queue.length > 0) {
              window.uolads = $private.removeElementFromEnqueue(queue, id);
            }
          };
          $private.removeElementFromEnqueue = function (elements, id) {
            for (var i = 0; i < elements.length; i++) {
              var element = elements[i];
              if (!element.id) {
                continue;
              }
              if (element.id === id) {
                elements.splice(i, 1);
                i--;
              }
            }
            return elements;
          };
          $private.getConfiguredTag = function (ad) {
            for (var tag in window.__configuredDFPTags) {
              var isIncremental = $private.isIncremental(
                window.__configuredDFPTags[tag].config.isIncremental
              );
              if (ad.id === tag && !isIncremental) {
                return window.__configuredDFPTags[tag];
              }
              if (ad.id.indexOf(tag) === 0 && isIncremental) {
                return window.__configuredDFPTags[tag];
              }
            }
            return;
          };
          $private.getAdById = function (bannerId) {
            var configuredDfpTags = window.__configuredDFPTags;
            if (!$private.typeValidator.isObject(configuredDfpTags)) {
              return;
            }
            for (var key in configuredDfpTags) {
              var ads = configuredDfpTags[key].ads;
              if (!$private.typeValidator.isObject(ads)) {
                return;
              }
              for (var ad in ads) {
                if (ad == bannerId) {
                  return ads[bannerId];
                }
              }
            }
            return;
          };
          $public.refreshSlot = function (id) {
            var ad = $private.getAdById(id);
            if (!ad || !ad.slot) {
              $public.logger.debug('O slot "' + id + '" não foi configurado.');
              return;
            }
            if (!$private.visibility.isElementVisibleOnDom(document.getElementById(id))) {
              var configuredTag = $private.getConfiguredTag({ id: id });
              $public.logger.error(
                'Não foi possível efetuar o recarregamento pois elemento com id: ' +
                  id +
                  ' foi adicionado à fila e não está visível no DOM, favor validar o seu CSS.',
                configuredTag.namTag,
                $private.namespace,
                $private.calculateTimeSpent(configuredTag.timeStampInit)
              );
              $public.trackManager.trackError('refresh_element_hidden', 'fluxo_interrompido');
              return;
            }
            ad.timeStampInit = new Date().getTime();
            if ($private.typeValidator.isNumericString(ad.config.timeToRefresh)) {
              $private.setRefreshAtivo(ad.slot, ad.config.keyword);
            }
            $public.logger.log(
              'Recarregando o anúncio de id "' + ad.config.bannerId + '"',
              ad.namTag,
              $private.namespace,
              $private.calculateTimeSpent(ad.timeStampInit)
            );
            $private.updateFocusTargeting();
            if (!window.UOLPD.hasPrebid) {
              googletag.pubads().refresh([ad.slot]);
            } else {
              try {
                window.UOLPD.TagManager.Prebid.refresh(ad.config.bannerId, ad.slot);
              } catch (err) {
                googletag.pubads().refresh([ad.slot]);
              }
            }
          };
          $private.setRefreshAtivo = function (slot, keyword) {
            if ($private.typeValidator.isString(keyword)) {
              slot.setTargeting('keyword', keyword + ', ' + 'refreshativo');
            } else {
              slot.setTargeting('keyword', 'refreshativo');
            }
          };
          $private.isBannerEnable = function (config, namTag) {
            if (config.hide === 'True') {
              $private.hideSlot(config.bannerId);
              $public.logger.warn(
                'O anúncio com o id: "' +
                  config.bannerId +
                  '" está configurado para não ser exibido.',
                namTag,
                $private.namespace,
                $private.calculateTimeSpent(config.timeStampInit)
              );
              return false;
            }
            if (
              config.bannerWidth != '1' ||
              config.bannerHeight != '1' ||
              config.frequencyControl[0] != 'true'
            ) {
              return true;
            }
            var cookieName = $private.buildCookieName(config.dfppath, config.bannerId);
            if ($private.cookieUtils.getItem(cookieName)) {
              $public.logger.debug(
                'O anúncio com o id "' +
                  config.bannerId +
                  '" não será exibido pois é um DHTML e está com o "frequencyControl" habilitado.'
              );
              return false;
            }
            $private.cookieUtils.setItem(cookieName, '1; expires=0; path=/');
            $public.logger.debug(
              'Configurando o cookie "' +
                cookieName +
                '" do anúncio "' +
                config.bannerId +
                '" com o valor 1.'
            );
            return true;
          };
          $private.hideSlot = function (id) {
            var container = document.getElementById(id);
            if (!container) {
              return;
            }
            container.style.display = 'none';
            if (!container.parentNode) {
              return;
            }
            if (
              container.parentNode.className === 'publicidade' ||
              container.parentNode.className === 'pub'
            ) {
              container.parentNode.style.display = 'none';
            }
          };
          $private.buildCookieName = function (dfppath, bannerId) {
            var siteChanSubchan = dfppath.split('/');
            if (!$private.typeValidator.isString(siteChanSubchan[2])) {
              $public.logger.debug(
                'O cookie de sessão do DHTML "' +
                  bannerId +
                  '" não foi criado pois o path não possui o "site".'
              );
              return;
            }
            var cookieName = siteChanSubchan[2];
            if (siteChanSubchan[3]) {
              cookieName += '_' + siteChanSubchan[3];
            }
            if (siteChanSubchan[4]) {
              cookieName += '_' + siteChanSubchan[4];
            }
            return cookieName;
          };
          $private.buildRotativeAds = function (configuredTag, config, timeStampInit) {
            var rotative = new Rotative(configuredTag, $private.namespace, timeStampInit);
            var divs = rotative.createDivs(parseInt(config.rotative), config.bannerId);
            if (!divs) {
              $public.logger.error(
                'As divs para os anúncios rotativos não foram criadas',
                configuredTag.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('missing_element', 'fluxo_interrompido');
              return;
            }
            for (var i = 0; i < divs.length; i++) {
              var bannerId = divs[i].getAttribute('id');
              $private.buildAd(
                configuredTag,
                $private.cloneObject(config),
                timeStampInit,
                bannerId
              );
            }
            rotative.rotate();
          };
          $private.cloneObject = function (original) {
            return JSON.parse(JSON.stringify(original));
          };
          $private.isMobile = {
            Android: function () {
              return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
              return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
              return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
              return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
              return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
              return (
                $private.isMobile.Android() ||
                $private.isMobile.BlackBerry() ||
                $private.isMobile.iOS() ||
                $private.isMobile.Opera() ||
                $private.isMobile.Windows()
              );
            },
          };
          $private.buildAd = function (configuredTag, config, timeStampInit, overrideBannerId) {
            var bannerId = config.bannerId;
            if (overrideBannerId) {
              bannerId = overrideBannerId;
            }
            if ($private.shouldUpdateCorrelator(config.isIncremental, configuredTag.ads)) {
              window.googletag.cmd.push(function () {
                window.googletag.pubads().updateCorrelator();
              });
            }
            if ($private.accountId == '552' || $private.accountId == '670') {
              if (config.nativeType.indexOf(',') > -1) {
                config.nativeType = config.nativeType.split(',');
              } else {
                if (config.nativeType == '1') {
                  config.nativeType = ['1', '2'];
                }
              }
            }
            if (
              !config.timeToRefresh &&
              ($private.accountId == '26' ||
                $private.accountId == '570' ||
                $private.accountId == '790')
            ) {
              config.timeToRefresh = '45';
            }
            if ($private.repoId == '0gsi4n') {
              config.timeToRefresh = '30';
            }
            config.requestDelay = '0';
            var ad = {};
            ad.namTag = configuredTag.namTag;
            ad.timeStampInit = timeStampInit;
            ad.focusInit = $private.visibility.hasFocus();
            ad.config = config;
            ad.config.bannerId = bannerId;
            configuredTag.ads[bannerId] = ad;
            var element = { element: document.getElementById(ad.config.bannerId) };
            ad.visibilityInit = $private.visibility.isElementOnScreen(element);
            if ($private.shouldSetLocation(configuredTag, config.geolocation)) {
              $private.setLocation(configuredTag);
            }
            $private.display(configuredTag, configuredTag.ads[bannerId]);
            return;
          };
          $private.shouldUpdateCorrelator = function (isIncremental, ads) {
            if (isIncremental !== 'updateCorrelator') {
              return false;
            }
            if ($private.contentValidator.isFilledObject(ads)) {
              return true;
            }
            return false;
          };
          $private.shouldSetLocation = function (configuredTag, geolocation) {
            configuredTag.hasGeolocation = false;
            if (!$private.typeValidator.isString(geolocation)) {
              return false;
            }
            if ($public.getProtocol() !== 'https:') {
              return false;
            }
            if (geolocation.toLowerCase() !== 'true') {
              return false;
            }
            if ($private.isGeolocationAlreadySetted()) {
              configuredTag.hasGeolocation = true;
              return false;
            }
            return true;
          };
          $public.getProtocol = function () {
            return window.location.protocol;
          };
          $private.isGeolocationAlreadySetted = function () {
            var configuredDfpTags = window.__configuredDFPTags;
            for (var tag in configuredDfpTags) {
              if (tag.hasGeolocation === true) {
                return true;
              }
            }
            return false;
          };
          $private.setLocation = function (configuredTag) {
            var locationSuccessCallback = function (position) {
              var coordinates = position.coords;
              if ($private.isValidCoordinates(coordinates)) {
                configuredTag.hasGeolocation = true;
                googletag.cmd.push(function () {
                  googletag.pubads().setLocation(coordinates.latitude, coordinates.longitude);
                });
              }
            };
            var locationFailureCallback = function (err) {
              $public.logger.debug('O usuário não permitiu o uso da localização.');
            };
            try {
            } catch (e) {}
          };
          $private.isValidCoordinates = function (coordinates) {
            if (typeof coordinates !== 'object') {
              return false;
            }
            if (!$private.typeValidator.isNumber(coordinates.latitude)) {
              return false;
            }
            if (!$private.typeValidator.isNumber(coordinates.longitude)) {
              return false;
            }
            return true;
          };
          $private.display = function (configuredTag, ad) {
            if (!ad.slot) {
              $private.runWhenElementIsPresent(function () {
                window.googletag.cmd.push($private.configuredDfpSlots(configuredTag, ad));
              }, ad.config.bannerId);
            }
          };
          $private.runWhenElementIsPresent = function (callback, id) {
            if (document.getElementById(id)) {
              callback();
              return;
            }
            var count = 30 * 20;
            var intervalId = window.setInterval(function () {
              if (document.getElementById(id) || count <= 0) {
                clearInterval(intervalId);
                callback();
              }
              count--;
            }, 50);
          };
          $private.configuredDfpSlots = function (configuredTag, ad) {
            var slot = new Slot(configuredTag.namTag, $private.namespace, ad.timeStampInit);
            ad.executionTime = $private.calculateTimeSpent(ad.timeStampInit);
            return function () {
              if (ad.slot) {
                return;
              }
              var timeStamp = new Date().getTime();
              slot = slot.build(ad.config);
              if (!slot) {
                ad.executionTime = ad.executionTime + $private.calculateTimeSpent(timeStamp);
                $public.logger.error(
                  'Não foi possível configurar o slot com o id "' +
                    ad.config.bannerId +
                    '" no DFP.',
                  configuredTag.namTag,
                  $private.namespace,
                  ad.executionTime + configuredTag.executionTime
                );
                return;
              }
              if (!window.__servicesRequest) {
                $private.servicesRequest();
              } else {
                if (!window.gllConfigured) {
                  $private.configureLazyLoad();
                  window.gllConfigured = true;
                }
              }
              $private.addSlotInConfiguredTags(
                configuredTag.config.bannerId,
                ad.config.bannerId,
                slot
              );
              $public.trackManager.trackSuccess('Execucoes Finalizadas');
              $public.addPubadsEvent('slotRenderEnded', $private.renderingCallback);
              ad.executionTime = ad.executionTime + $private.calculateTimeSpent(timeStamp);
              if (
                !$private.visibility.isElementVisibleOnDom(
                  document.getElementById(ad.config.bannerId)
                ) &&
                !ad.config.rotative
              ) {
                $public.logger.warn(
                  'O elemento com id: ' +
                    ad.config.bannerId +
                    ' esta sendo usado para entregar o criativo mas a mesmo não está visível no DOM, favor verificar o seu CSS.',
                  configuredTag.namTag,
                  $private.namespace,
                  $private.calculateTimeSpent(configuredTag.timeStampInit)
                );
                $public.trackManager.trackError('element_hidden', 'fluxo_interrompido');
              } else {
                $public.logger.log(
                  'Exibindo o anúncio de id ' + ad.config.bannerId,
                  configuredTag.namTag,
                  $private.namespace,
                  ad.executionTime + configuredTag.executionTime
                );
              }
              $private.requestAd(ad);
            };
          };
          $private.calculateExecutionTime = function (tagExecutionTime, adExecutionTime) {
            return tagExecutionTime + $private.calculateTimeSpent(adExecutionTime);
          };
          $private.servicesRequest = function () {
            if (window.googletag.pubadsReady === true) {
              window.dontRefresh = true;
              return;
            }
            window.__servicesRequest = true;
            window.googletag.pubads().enableSingleRequest();
            window.googletag.pubads().disableInitialLoad();
            if (!window.gllConfigured) {
              $private.configureLazyLoad();
              window.gllConfigured = true;
            }
            window.googletag.enableServices();
          };
          $private.configureLazyLoad = function () {
            try {
              var config = { fetchMarginPercent: 300, renderMarginPercent: 50, mobileScaling: 1 };
              var testCaseLazyLoad = 'lazyload-a';
              if (window.location.href.indexOf('atarde.uol.com.br') > -1) {
                config.fetchMarginPercent = 150;
                config.renderMarginPercent = 30;
              }
              if ($private.repoId == 'chygcf') {
                if (Math.random() >= 0.5) {
                  config.fetchMarginPercent = 300;
                  config.renderMarginPercent = 50;
                  config.mobileScaling = 1;
                } else {
                  config.fetchMarginPercent = 200;
                  config.renderMarginPercent = 50;
                  config.mobileScaling = 1;
                  testCaseLazyLoad = 'lazyload-b';
                }
              }
              window.googletag = window.googletag || {};
              window.googletag.cmd = window.googletag.cmd || [];
              window.googletag.cmd.push(function () {
                window.googletag
                  .pubads()
                  .enableLazyLoad({
                    fetchMarginPercent: config.fetchMarginPercent,
                    renderMarginPercent: config.renderMarginPercent,
                    mobileScaling: config.mobileScaling,
                  });
              });
              window.googletag.pubads().setTargeting('testeab', testCaseLazyLoad);
              $private.logABMessage(
                'Configurado com fetch = ' +
                  config.fetchMarginPercent +
                  ', render = ' +
                  config.renderMarginPercent +
                  ' e scaling = ' +
                  config.mobileScaling
              );
            } catch (ex) {
              $private.logABMessage('Erro ao ativar lazy load ' + ex.toString());
            }
          };
          $private.logABMessage = function (msg) {
            if (window.location.href.indexOf('debugLazy') > -1) {
              console.log('UOLTM - Google Lazy Load - ' + msg);
            }
          };
          $private.addSlotInConfiguredTags = function (tagId, slotId, slot) {
            window.__configuredDFPTags[tagId].ads = window.__configuredDFPTags[tagId].ads || {};
            window.__configuredDFPTags[tagId].ads[slotId] =
              window.__configuredDFPTags[tagId].ads[slotId] || {};
            window.__configuredDFPTags[tagId].ads[slotId].slot = slot;
          };
          $public.addPubadsEvent = function (eventName, callback) {
            if (!$private.typeValidator.isString(eventName)) {
              $public.logger.debug(
                'Não foi possível criar um evento customizado pois o nome não é uma string válida.'
              );
              return;
            }
            if (!$private.typeValidator.isFunction(callback)) {
              $public.logger.debug(
                'Não foi possível criar um evento customizado pois o callback não é uma função válida.'
              );
              return;
            }
            window.__dfpEvent = window.__dfpEvent || [];
            if (window.__dfpEvent[eventName]) {
              return;
            }
            window.__dfpEvent[eventName] = true;
            googletag.pubads().addEventListener(eventName, function (eventObject) {
              var ad = $private.getAdBySlot(eventObject.slot);
              if (ad && ad.config) {
                callback(eventObject, ad.config.bannerId);
              }
            });
          };
          $private.getAdBySlot = function (slot) {
            var __configuredDFPTags = window.__configuredDFPTags;
            for (var key in __configuredDFPTags) {
              var configuredTag = __configuredDFPTags[key];
              for (var id in configuredTag.ads) {
                if (configuredTag.ads[id].slot === slot) {
                  return configuredTag.ads[id];
                }
              }
            }
            return;
          };
          $public.addRenderingCallback = function (bannerId, callback) {
            window.__dfpAsyncRenderingCallbacks[bannerId] = callback;
          };
          $private.renderingCallback = function (eventObject, bannerId) {
            if (!eventObject) {
              return;
            }
            var ad = $private.getAdBySlot(eventObject.slot);
            if ($private.typeValidator.isArray(eventObject.size)) {
              ad.size = $private.addSize(eventObject.size);
            }
            ad.loadTime = $private.calculateTimeSpent(ad.timeStampInit);
            ad.timeStampEnd = new Date().getTime();
            $private.calculateAverageSlotsLoadTime(ad.loadTime);
            var timeToRefresh = parseInt(ad.config.timeToRefresh);
            if (timeToRefresh > 0) {
              $private.enableAdRefresh(ad, timeToRefresh);
            }
            var callback = window.__dfpAsyncRenderingCallbacks[bannerId];
            if ($private.typeValidator.isFunction(callback)) {
              callback(eventObject, bannerId);
            }
          };
          $private.addSize = function (eventSize) {
            var size = {};
            if ($private.typeValidator.isNumber(eventSize[0])) {
              size.width = eventSize[0];
            }
            if ($private.typeValidator.isNumber(eventSize[1])) {
              size.height = eventSize[1];
            }
            return size;
          };
          $private.calculateAverageSlotsLoadTime = function (adLoadTime) {
            window.__countRenderedSlots = window.__countRenderedSlots || 0;
            window.__countRenderedSlots++;
            window.__slotsLoadTime = window.__slotsLoadTime || 0;
            window.__slotsLoadTime += adLoadTime;
            window.__averageSlotsLoadTime = window.__slotsLoadTime / window.__countRenderedSlots;
          };
          $private.enableAdRefresh = function (ad, refreshInterval) {
            if (ad.refreshTimer) {
              ad.refreshTimer.stop();
              ad.isRefreshing = false;
            } else {
              refreshInterval = refreshInterval * 1000;
              ad.refreshTimer = new TimeoutUtils(
                $private.refreshSlotCallback(ad.config.bannerId),
                refreshInterval
              );
              $private.visibility.addElement(
                ad.config.bannerId,
                false,
                $private.refreshPlayCallback(ad),
                $private.refreshPauseCallback(ad)
              );
            }
          };
          $private.refreshSlotCallback = function (id) {
            return function () {
              $public.refreshSlot(id);
            };
          };
          $public.getAdSize = function (bannerId) {
            if (!$private.typeValidator.isString(bannerId)) {
              $public.logger.debug('O ID passado para o método getAdSize não é uma string válida');
              return;
            }
            var ad = $private.getAdById(bannerId);
            if (!$private.isValidAdSize(ad)) {
              $public.logger.debug('Não foi retornado nenhum tamanho com esse ID');
              return;
            }
            return ad.size;
          };
          $private.isValidAdSize = function (ad) {
            if (!$private.typeValidator.isObject(ad)) {
              return false;
            }
            if (!$private.typeValidator.isObject(ad.size)) {
              return false;
            }
            if (!$private.typeValidator.isNumber(ad.size.width)) {
              return false;
            }
            if (!$private.typeValidator.isNumber(ad.size.height)) {
              return false;
            }
            return true;
          };
          $private.refreshPlayCallback = function (ad) {
            return function () {
              if (ad.isRefreshing || !ad.refreshTimer) {
                return;
              }
              ad.isRefreshing = true;
              ad.refreshTimer.play();
              $public.logger.debug(
                'O recarregamento ativado para o anúncio de id ' +
                  ad.config.bannerId +
                  ' será feito em ' +
                  ad.refreshTimer.getRemaining() +
                  'ms'
              );
            };
          };
          $private.refreshPauseCallback = function (ad) {
            return function () {
              if (!ad.isRefreshing || !ad.refreshTimer) {
                return;
              }
              ad.isRefreshing = false;
              if (ad.refreshTimer.getRemaining() < 1) {
                ad.refreshTimer.stop();
              } else {
                ad.refreshTimer.pause();
                $public.logger.debug(
                  'Pausando o timeout do recarregamento do anúncio de id ' +
                    ad.config.bannerId +
                    ' pois o anúncio não está visível, tempo restante:' +
                    ad.refreshTimer.getRemaining() +
                    'ms'
                );
              }
            };
          };
          $private.requestAd = function (ad) {
            window.__batchDfpRequest = window.__batchDfpRequest || [];
            window.__batchDfpRequest.push(ad.slot);
            if (ad.config.isSingleRequest === 'True' || window.__batchDfpSra) {
              if (window.__batchDfpSra) {
                return;
              }
              window.__batchDfpSra = true;
              window.setTimeout(function () {
                window.__batchDfpSra = false;
                $public.logger.debug(
                  '[SRA] Foram exibidos: ' + window.__batchDfpRequest.length + ' anúncios'
                );
                $private.showSingleRequestAds();
              }, 100);
            } else {
              $private.showSingleRequestAds();
            }
          };
          $private.showSingleRequestAds = function () {
            var slots = window.__batchDfpRequest;
            if (slots.length < 1) {
              return;
            }
            $private.updateFocusTargeting();
            if (!window.UOLPD.hasPrebid) {
              for (var index = 0; index < slots.length; index++) {
                window.googletag.display(slots[index].getSlotElementId());
              }
              if (!window.dontRefresh) {
                window.googletag.pubads().refresh(slots, { changeCorrelator: false });
              }
            } else {
              try {
                window.UOLPD.TagManager.Prebid.requestAds(slots);
              } catch (err) {
                for (var index = 0; index < slots.length; index++) {
                  window.googletag.display(slots[index].getSlotElementId());
                }
                if (!window.dontRefresh) {
                  window.googletag.pubads().refresh(slots, { changeCorrelator: false });
                }
              }
            }
            delete window.__batchDfpRequest;
          };
          $private.updateFocusTargeting = function () {
            window.UOLPD.dataLayer.hasMouseIn = window.UOLPD.dataLayer.hasMouseIn || 'false';
            window.googletag.cmd.push(function () {
              googletag.pubads().setTargeting('hasMouseIn', window.UOLPD.dataLayer.hasMouseIn);
              googletag.pubads().setTargeting('hasFocus', window.UOLPD.dataLayer.hasFocus);
            });
          };
          $public.handleRefresh = function (id, action) {
            if (!$private.typeValidator.isString(id)) {
              $public.logger.warn(
                'Um id deve ser do tipo "String"',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              return;
            }
            var ad = $private.getAdById(id);
            if (!ad) {
              return;
            }
            if (action == 'pause') {
              delete ad.refreshTimer;
              $public.logger.debug('Removendo o refresh do anúncio de id "' + id + '".');
              return;
            }
            var timeToRefresh = parseInt(ad.config.timeToRefresh);
            $private.enableAdRefresh(ad, timeToRefresh);
            $public.logger.debug(
              'Redefinindo o tempo de refresh do anúncio de id "' +
                id +
                '" para ' +
                ad.config.timeToRefresh +
                'ms'
            );
          };
          $public.removeAds = function (ids) {
            if ($private.typeValidator.isString(ids)) {
              ids = [ids];
            }
            if (!$private.typeValidator.isArray(ids)) {
              $public.logger.debug('O id deve ser do tipo "Array"');
              return;
            }
            for (var i = 0; i < ids.length; i++) {
              if (!$private.typeValidator.isString(ids[i])) {
                continue;
              }
              var ad = $private.getAdById(ids[i]),
                result;
              if (ad) {
                result = new Slot().destroySlots([ad.slot]);
                if (result) {
                  $private.removeAdConfigured(ids[i]);
                }
              }
            }
          };
          $private.removeAdConfigured = function (id) {
            var __configuredDFPTags = window.__configuredDFPTags;
            for (var key in __configuredDFPTags) {
              var configuredTag = __configuredDFPTags[key];
              for (var ad in configuredTag.ads) {
                if (ad === id) {
                  delete configuredTag.ads[id];
                }
              }
            }
          };
          return $private.__constructor();
        }
        var namespace = new NameSpace('DfpAsync');
        var visibility = new Visibility();
        namespace.init = function (config, namTag) {
          var dfpAsync = new DfpAsync();
          namespace.addPubadsEvent = dfpAsync.addPubadsEvent;
          namespace.refreshSlot = dfpAsync.refreshSlot;
          namespace.getAdSize = dfpAsync.getAdSize;
          namespace.handleRefresh = dfpAsync.handleRefresh;
          namespace.addRenderingCallback = dfpAsync.addRenderingCallback;
          namespace.removeAds = dfpAsync.removeAds;
          return dfpAsync.init(config, namTag, 'DfpAsync');
        };
      })(window, document);
      (function (window, document, undefined) {
        function UolDna () {
          var $private = {};
          var $public = this;
          $public.logger = new Logs();
          $public.logger.setPrefix('UOLPD.TagManager.DNA');
          $public.trackManager = new TrackManager();
          $public.trackManager.setModuleName('dna');
          $private.src =
            '//tm.uol.com.br/uoldna.html?referer=' +
            encodeURIComponent(window.location.host + window.location.pathname);
          $public.init = function (namTag, namespace) {
            $public.trackManager.trackSuccess('Execucoes Iniciadas');
            $private.configureLogger(namTag, namespace);
            if ($private.stopFlow()) {
              return;
            }
            $public.setIframe();
            $private.appendIframe();
          };
          $private.configureLogger = function (namTag, namespace) {
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = Date.now();
          };
          $private.stopFlow = function () {
            const $___old_3c53646ec3232a7a = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_3c53646ec3232a7a)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_a011c28886b08277.localStorage
                ));
              return function () {
                var tt_uid;
                try {
                  tt_uid = window.localStorage.getItem('tt_uid');
                } catch (err) {}
                if (tt_uid) {
                  $public.logger.log(
                    'O UOL DNA já foi realizado na página',
                    $private.namTag,
                    $private.namespace,
                    $private.calculateTimeSpent()
                  );
                  $public.trackManager.trackCustom('Execucoes Finalizadas', 'fluxo', '2');
                  return true;
                }
                if ($private.isIframeInPage()) {
                  $public.trackManager.trackError('duplicate-call', 'fluxo_interrompido');
                  $public.logger.warn(
                    'Já existe o iframe com o src do DNA na página',
                    $private.namTag,
                    $private.namespace,
                    $private.calculateTimeSpent()
                  );
                  return true;
                }
                return false;
              }.apply(this, arguments);
            } finally {
              if ($___old_3c53646ec3232a7a)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_3c53646ec3232a7a));
            }
          };
          $private.isIframeInPage = function () {
            if (document.querySelector('[src*="' + $private.src + '"]')) {
              return true;
            }
            return false;
          };
          $private.calculateTimeSpent = function () {
            return Date.now() - $private.timeStampInit;
          };
          $public.getIframe = function () {
            return $private.iframe;
          };
          $public.setIframe = function () {
            $private.iframe = document.createElement('iframe');
            $private.iframe.style.display = 'none';
            $private.iframe.setAttribute('src', 'https:' + $private.src);
          };
          $private.appendIframe = function () {
            if (!document.body) {
              setTimeout($private.appendIframe, 100);
            } else {
              document.body.appendChild($private.iframe);
              $private.loadTimeInit = Date.now();
              $private.executionTime = $private.calculateTimeSpent();
              $public.logger.log(
                'O iframe do UOL DNA foi incluído com sucesso',
                $private.namTag,
                $private.namespace,
                $private.executionTime
              );
              $public.trackManager.trackCustom('Execucoes Finalizadas', 'fluxo', '1');
            }
          };
        }
        var nameSpace = new NameSpace('DNA');
        nameSpace.init = function (config, namTag) {
          return new UolDna().init(namTag, 'DNA');
        };
      })(window, document);
      (function (window, document, undefined) {
        var PrebidSchema = {
          properties: { bids: 'isString', prebidTimeout: 'isNumericString' },
          required: ['bids'],
        };
        function Prebid () {
          var $private = {},
            $public = this;
          $private.typeValidator = new TypeValidator();
          $private.contentValidator = new ContentValidator();
          $private.schema = new Schema(PrebidSchema);
          $public.logger = new Logs();
          $public.logger.setPrefix('UOLPD.TagManager.Prebid');
          $public.trackManager = new TrackManager();
          $public.trackManager.setModuleName('prebid');
          $public.scriptUtils = new ScriptUtils();
          $public.SCRIPT_URL = '//tm.jsuol.com.br/modules/external/Prebid.js';
          $private.bids = 0;
          $private.bidders = {
            rubicon: ['accountId', 'siteId', 'zoneId'],
            appnexus: ['placementId'],
            f_xandr: ['placementId'],
            appnexusAst: ['placementId'],
            audienceNetwork: ['placementId'],
            criteo: ['zoneId'],
            aol: ['network', 'placement'],
            oneVideo: ['pubId'],
            rtbhouse: ['region', 'publisherId'],
            smartadserver: ['domain', 'siteId', 'pageId', 'formatId'],
            uol: ['placementId'],
          };
          $private.videoListeners = {};
          $public.init = function (config, namTag, namespace) {
            const $___old_d1d79949a12ed208 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'appVersion'
              ),
              $___old_ef8014a05a0fb486 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              );
            try {
              if ($___old_d1d79949a12ed208)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'appVersion',
                  $___stub_9d7b4eb662ee43f5.appVersion
                ));
              if ($___old_ef8014a05a0fb486)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___stub_9d7b4eb662ee43f5.userAgent
                ));
              return function () {
                $private.configureLogger(namTag, namespace);
                $public.trackManager.trackSuccess('Execucoes Iniciadas');
                $private.PREBID_TIMEOUT = config.prebidTimeout || 700;
                $private.appendScript();
                if (navigator.appVersion.indexOf('MSIE 10') !== -1) {
                  return;
                }
                if (!$private.schema.isValid(config)) {
                  $public.logger.error(
                    'A configuração fornecida pelo Tag Manager está inválida a seguinte propriedade de configuração: bids não existe ou está inválida',
                    $private.namTag,
                    $private.namespace,
                    $private.calculateTimeSpent()
                  );
                  return;
                }
                try {
                  $public.adUnits = $public.adUnits || { standard: [], video: [] };
                  var bids = eval(config.bids);
                  var groupedAdUnits = $private.groupAdUnits(bids);
                  $public.adUnits.standard = !$public.adUnits.standard.length
                    ? groupedAdUnits.standard
                    : $public.adUnits.standard;
                  $public.adUnits.video = !$public.adUnits.video.length
                    ? groupedAdUnits.video
                    : $public.adUnits.video;
                  if (
                    /\b(MSIE |Trident.*?rv:|Edge\/)/i.test(navigator.userAgent) &&
                    !UOLPD.TagManager.Prebid.standardEnabled
                  ) {
                    $private.removeNativeBids();
                  }
                } catch (err) {
                  $public.logger.error(
                    'Deve ser fornecida uma lista de adUnits na configuração do plugin',
                    $private.namTag,
                    $private.namespace,
                    $private.calculateTimeSpent()
                  );
                  return;
                }
                $private.configureAdUnits();
                if ($public.adUnits.standard.length || $public.adUnits.video.length) {
                  $private.addAttrAdUnits($public.adUnits.standard);
                  if (!window.UOLPD.hasPrebid) {
                    $private.initNativeMsgProtocol();
                  }
                  window.UOLPD.hasPrebid = true;
                  $private.callPrebid();
                }
                if (
                  $public.adUnits.video.length &&
                  !window.UOLPD.TagManager.Prebid.videoRequested
                ) {
                  $private.addAttrAdUnits($public.adUnits.video);
                  $private.requestVideos();
                }
              }.apply(this, arguments);
            } finally {
              if ($___old_d1d79949a12ed208)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'appVersion',
                  $___old_d1d79949a12ed208
                ));
              if ($___old_ef8014a05a0fb486)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___old_ef8014a05a0fb486
                ));
            }
          };
          $private.configureLogger = function (namTag, namespace) {
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = Date.now();
          };
          $private.calculateTimeSpent = function (timeStampInit) {
            if (!$private.typeValidator.isDefined(timeStampInit)) {
              return Date.now() - $private.timeStampInit;
            }
            return Date.now() - timeStampInit;
          };
          $private.appendScript = function () {
            if (!$public.scriptUtils.hasTagScript($public.SCRIPT_URL)) {
              $private.initialScriptLoadTime = Date.now();
              var script = $public.scriptUtils.createScript($public.SCRIPT_URL);
              script.onload = $private.calculateScriptLoadTimeOnload;
              script.onerror = $private.calculateScriptLoadTimeOnError;
              $public.scriptUtils.appendTag(script);
              $private.loadTimeInit = Date.now();
            }
          };
          $private.groupAdUnits = function (bids) {
            var groupedAdUnits = { standard: [], video: [] };
            if ($private.typeValidator.isArray(bids)) {
              for (var index = 0; index < bids.length; index++) {
                try {
                  if (bids[index].mediaTypes.video) {
                    groupedAdUnits.video.push(bids[index]);
                  } else {
                    groupedAdUnits.standard.push(bids[index]);
                  }
                } catch (ex) {
                  groupedAdUnits.standard.push(bids[index]);
                }
              }
            }
            return groupedAdUnits;
          };
          $private.removeNativeBids = function () {
            for (var index = $public.adUnits.standard.length - 1; index >= 0; index--) {
              if (
                $public.adUnits.standard[index].mediaTypes &&
                $public.adUnits.standard[index].mediaTypes['native']
              ) {
                $public.logger.warn(
                  'Configuração de native prebid ignorada no IE/Edge para adUnit ' +
                    $public.adUnits.standard[index].code,
                  $private.namTag,
                  $private.namespace,
                  $private.executionTime
                );
                if (Object.keys($public.adUnits.standard[index].mediaTypes).length == 1) {
                  $public.adUnits.standard.splice(index, 1);
                } else {
                  delete $public.adUnits.standard[index].mediaTypes['native'];
                }
              }
            }
          };
          $private.calculateScriptLoadTimeOnload = function () {
            $private.scriptLoadTime = Date.now() - $private.initialScriptLoadTime;
          };
          $private.calculateScriptLoadTimeOnError = function () {
            $private.scriptLoadTime = Date.now() - $private.initialScriptLoadTime;
            window.UOLPD.hasPrebid = false;
          };
          $private.configureAdUnits = function () {
            for (var i = 0; i < $public.adUnits.standard.length; i++) {
              var adUnit = $public.adUnits.standard[i];
              if (!$private.hasAdUnit(adUnit)) {
                $public.adUnits.standard.splice(i, 1);
                i--;
              }
            }
          };
          $private.hasAdUnit = function (adUnit) {
            if (!adUnit.code) {
              $public.logger.warn(
                'O atributo code deve ser repassado na configuração dos adUnits',
                $private.namTag,
                $private.namespace,
                $private.executionTime
              );
              return false;
            }
            if (!adUnit.bids) {
              return false;
            }
            for (var i = 0; i < adUnit.bids.length; i++) {
              if (!$private.isValidBidder(adUnit.bids[i])) {
                adUnit.bids.splice(i, 1);
                i--;
              }
            }
            if (adUnit.bids.length === 0) {
              return false;
            }
            return true;
          };
          $private.isValidBidder = function (bid) {
            var currentBid = $private.bidders[bid.bidder];
            if (!currentBid) {
              $public.logger.warn(
                'A rede "' +
                  bid.bidder +
                  '" configurada ainda não é suportada pelo Prebid via Tag Manager',
                $private.namTag,
                $private.namespace,
                $private.executionTime
              );
              return false;
            }
            if (!bid.params) {
              $public.logger.warn(
                'Não foram configurados os parâmetros do bidder ' +
                  bid.bidder +
                  ' pelo Prebid via Tag Manager',
                $private.namTag,
                $private.namespace,
                $private.executionTime
              );
              return false;
            }
            for (var i = 0; i < currentBid.length; i++) {
              if (!bid.params[currentBid[i]]) {
                if (bid.bidder == 'appnexus' && bid.params['invCode'] && bid.params['member']) {
                  return true;
                }
                $public.logger.warn(
                  'Campo ' + currentBid[i] + ' do bidder ' + bid.bidder + ' não foi preenchido',
                  $private.namTag,
                  $private.namespace,
                  $private.executionTime
                );
                return false;
              }
            }
            return true;
          };
          $private.addAttrAdUnits = function (adUnits) {
            var attrTail = $private.addAttrTail();
            var codRepo = '5nzulr';
            for (var i = 0; i < adUnits.length; i++) {
              var bids = adUnits[i].bids;
              if (!bids) {
                continue;
              }
              for (var j = 0; j < bids.length; j++) {
                if (codRepo == '7mdtkd' || codRepo == 'yvtzf2') {
                  if (bids[j].bidder === 'criteo') {
                    bids[j].params['networkId'] = bids[j].params['zoneId'];
                    delete bids[j].params['zoneId'];
                  }
                }
                if (!$private.contentValidator.isFilledObject(attrTail.rubicon)) {
                  continue;
                }
                if (bids[j].bidder === 'rubicon') {
                  bids[j].params['visitor'] = attrTail.rubicon;
                }
                if (bids[j].bidder === 'appnexus') {
                  for (var key in attrTail.appnexus) {
                    bids[j].params[key] = attrTail.appnexus[key];
                  }
                }
              }
            }
          };
          $private.addAttrTail = function () {
            const $___old_79c31f8a176ddcbe = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_79c31f8a176ddcbe)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_a011c28886b08277.localStorage
                ));
              return function () {
                var localStorageData,
                  ttProfiles,
                  rpVisitor = {},
                  data = {
                    tt_age: 'faixa_etaria',
                    tt_gender: 'genero',
                    tt_subjects: 'interesses',
                    tt_cluster: 'estilos_de_vida',
                    tt_team: 'times_de_futebol',
                    tt_socialclass: 'renda',
                    tt_microsegments: 'micro_segmentos',
                    tt_customaudience: 'clusters_uol',
                    tt_lists: 'segmentos_compartilhados',
                  };
                try {
                  localStorageData = JSON.parse(window.localStorage.getItem('uolDataLayer'));
                  ttProfiles = localStorageData['TailtargetTrack'] || {};
                } catch (e) {
                  ttProfiles = {};
                }
                if (!$private.typeValidator.isObject(ttProfiles)) {
                  return rpVisitor;
                }
                rpVisitor.rubicon = {};
                rpVisitor.appnexus = {};
                rpVisitor.appnexus.keywords = {};
                try {
                  if ($private.hasDataLayer()) {
                    rpVisitor.appnexus.keywords =
                      JSON.parse(JSON.stringify(window.UOLPD.dataLayer)) || {};
                    delete rpVisitor.appnexus.keywords.origin;
                    delete rpVisitor.appnexus.keywords.referrer;
                  }
                } catch (ex) {}
                for (var key in ttProfiles) {
                  var profiles = ttProfiles[key].split(',');
                  rpVisitor.rubicon[data[key]] = profiles;
                  if ($private.typeValidator.isObject(rpVisitor.appnexus.keywords)) {
                    rpVisitor.appnexus.keywords[key] =
                      rpVisitor.appnexus.keywords[key] || profiles;
                  }
                }
                $private.setAppnexusUserParam(rpVisitor.appnexus, ttProfiles);
                return rpVisitor;
              }.apply(this, arguments);
            } finally {
              if ($___old_79c31f8a176ddcbe)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_79c31f8a176ddcbe));
            }
          };
          $private.setAppnexusUserParam = function (bidderParams, tailData) {
            var randNum = Math.floor(Math.random() * 2);
            var ageMap = {
              '2': randNum == 0 ? 13 : 17,
              '3': randNum == 0 ? 18 : 34,
              '4': randNum == 0 ? 35 : 54,
              '5': randNum == 0 ? 55 : 65,
            };
            bidderParams.user = {};
            if (tailData['tt_age'] && tailData['tt_age'] != 'na' && tailData['tt_age'] != '1') {
              bidderParams.user.age = ageMap[tailData['tt_age']];
            }
            if (tailData['tt_gender']) {
              bidderParams.user.gender =
                tailData['tt_gender'] === 'na' ? 0 : parseInt(tailData['tt_gender']);
            }
          };
          $private.hasDataLayer = function () {
            if (!$private.typeValidator.isObject(window.UOLPD)) {
              return false;
            }
            if (!$private.typeValidator.isObject(window.UOLPD.dataLayer)) {
              return false;
            }
            return true;
          };
          $private.initNativeMsgProtocol = function () {
            window.addEventListener(
              'message',
              function (e) {
                var data = e.data;
                if (data.message == 'prebidNative' && data.slotId) {
                  var nativeData = window.UOLPD.TagManager.Prebid.nativeData;
                  if (nativeData && nativeData[data.slotId]) {
                    var destinationFrame = document.querySelector('#' + data.slotId + ' iframe');
                    if (destinationFrame && destinationFrame.contentWindow) {
                      destinationFrame.contentWindow.postMessage(
                        {
                          message: 'uoltmPrebidMessage',
                          nativeContent: nativeData[data.slotId],
                          slotId: data.slotId,
                        },
                        '*'
                      );
                    }
                  }
                }
              },
              false
            );
          };
          $private.callPrebid = function () {
            window.pbjs = window.pbjs || {};
            window.pbjs.que = window.pbjs.que || [];
            var customBidderSettings = {
              standard: {
                adserverTargeting: [
                  {
                    key: 'hb_pb',
                    val: function (bidResponse) {
                      var codRepo = '5nzulr';
                      if (codRepo === '1p0oxf' || codRepo === 'ncejjp') {
                        return bidResponse.pbHg;
                      } else {
                        return bidResponse.pbDg;
                      }
                    },
                  },
                  {
                    key: 'hb_bidder',
                    val: function (bidResponse) {
                      return bidResponse.bidderCode;
                    },
                  },
                  {
                    key: 'hb_format',
                    val: function (bidResponse) {
                      return bidResponse.mediaType;
                    },
                  },
                  {
                    key: 'hb_size',
                    val: function (bidResponse) {
                      return bidResponse.size;
                    },
                  },
                  {
                    key: 'hb_adid',
                    val: function (bidResponse) {
                      return bidResponse.adId;
                    },
                  },
                ],
              },
              rubicon: {
                bidCpmAdjustment: function (bidCpm) {
                  return bidCpm * 0.85;
                },
              },
              appnexus: {
                sendStandardTargeting: true,
                adserverTargeting: [
                  {
                    key: 'hb_buyer_member_id',
                    val: function (bidResponse) {
                      return bidResponse.appnexus.buyerMemberId;
                    },
                  },
                  {
                    key: 'hb_deal_appnexus',
                    val: function (bidResponse) {
                      return bidResponse.dealId;
                    },
                  },
                ],
              },
              aol: {
                bidCpmAdjustment: function (bidCpm) {
                  return bidCpm * 0.85;
                },
              },
              oneVideo: {
                bidCpmAdjustment: function (bidCpm) {
                  return bidCpm * 0.85;
                },
              },
              smartadserver: {
                bidCpmAdjustment: function (bidCpm) {
                  return bidCpm * 0.9;
                },
              },
              audienceNetwork: {
                adserverTargeting: [
                  {
                    key: 'fb_bidid',
                    val: function (bidResponse) {
                      return bidResponse.fb_bidid;
                    },
                  },
                ],
              },
            };
            window.pbjs.bidderSettings = window.pbjs.bidderSettings || customBidderSettings;
            $private.executionTime = $private.calculateTimeSpent();
            window.pbjs.que.push(function () {
              var codRepo = '5nzulr';
              if (!window.UOLPD.TagManager.Prebid.hasBeenConfigured) {
                var pbConfig = {
                  priceGranularity: 'dense',
                  enableSendAllBids: true,
                  useBidCache: true,
                  cache: { url: 'https://prebid.adnxs.com/pbc/v1/cache' },
                  rubicon: { singleRequest: true },
                };
                if (codRepo === '1p0oxf' || codRepo === 'ncejjp') {
                  pbConfig.priceGranularity = 'high';
                }
                var pageURL = window.location.href;
                if (pageURL.indexOf('pbjs_debug=true') > -1) {
                  $private.applyDebugConfig(pageURL, pbConfig);
                }
                window.pbjs.setConfig(pbConfig);
                window.UOLPD.TagManager.Prebid.hasBeenConfigured = true;
              }
              if (!UOLPD.TagManager.Prebid.standardEnabled && $public.adUnits.standard.length) {
                window.pbjs.addAdUnits($public.adUnits.standard);
                UOLPD.TagManager.Prebid.standardEnabled = true;
              }
              if (!UOLPD.TagManager.Prebid.videoEnabled && $public.adUnits.video.length) {
                window.pbjs.addAdUnits($public.adUnits.video);
                UOLPD.TagManager.Prebid.videoEnabled = true;
              }
              if (codRepo === '1p0oxf' || codRepo === 'ncejjp') {
                window.pbjs.aliasBidder('appnexus', 'f_xandr');
              }
              $public.metrics();
            });
            $public.logger.log(
              'Tag do plugin Prebid executada com sucesso',
              $private.namTag,
              $private.namespace,
              $private.executionTime
            );
            $public.trackManager.trackSuccess('Execucoes Finalizadas');
          };
          $private.applyDebugConfig = function (pageURL, baseConfig) {
            try {
              var cpm = pageURL.match(/pbjs_debug=true.*cpm=([\d.,]+)/);
              var bidders = pageURL.match(/pbjs_debug=true.*bidder=([\w,]+)&?/);
              baseConfig.debugging = { enabled: true };
              if (bidders && bidders.length) {
                bidders = bidders[1].split(',');
                baseConfig.debugging.bidders = bidders;
                if (cpm && cpm.length) {
                  baseConfig.debugging.bids = [];
                  cpm = cpm[1].split(',');
                  cpm[0] = parseFloat(cpm[0]);
                  for (var index = 0; index < bidders.length; index++) {
                    baseConfig.debugging.bids.push({
                      bidder: bidders[index],
                      cpm: parseFloat(cpm[index]) || cpm[0] || 15,
                    });
                  }
                }
              }
            } catch (ex) {
              return null;
            }
          };
          $private.unicodeURLEncode = function (text) {
            var output = '';
            try {
              output = encodeURIComponent(text).replace(/[!'()*]/g, function (c) {
                return '%' + c.charCodeAt(0).toString(16).toUpperCase();
              });
            } catch (ex) {
              output = text;
            }
            return output;
          };
          $public.metrics = function () {
            $private.loadTime = $private.calculateTimeSpent($private.loadTimeInit);
            $private.executionTimeFinal = Date.now();
            $public.trackManager.trackCustomObj($private.generateMetrics());
          };
          $private.generateMetrics = function () {
            var executionTimeFinal = $private.calculateTimeSpent($private.executionTimeFinal),
              metrics = {};
            metrics.groups = {};
            metrics.measures = {};
            metrics.measures.executionTime = $private.executionTime + executionTimeFinal;
            metrics.measures.LoadTime = $private.scriptLoadTime
              ? $private.scriptLoadTime + $private.loadTime
              : $private.loadTime;
            $private.addTime(metrics);
            return metrics;
          };
          $private.addTime = function (metrics) {
            if (
              $private.isOutsideTime(metrics.measures.LoadTime, 4000) ||
              $private.isOutsideTime(metrics.measures.executionTime, 1000)
            ) {
              metrics.measures.OutsideTime = 1;
              metrics.groups.groupType = 2;
            } else {
              metrics.measures.Execution = 1;
              metrics.groups.groupType = 1;
            }
          };
          $private.isOutsideTime = function (time, max) {
            if (time < 0 || time > max) {
              return true;
            }
            return false;
          };
          $private.requestVideos = function () {
            var videoIds = $private.getVideoIds();
            if (videoIds.length) {
              $private.videoBidTimestamp = new Date().getTime();
              window.pbjs.que.push(function () {
                window.pbjs.requestBids({
                  timeout: 60000,
                  adUnitCodes: videoIds,
                  bidsBackHandler: function (bids) {
                    if (bids) {
                      window.UOLPD.TagManager.Prebid.videoBids =
                        window.UOLPD.TagManager.Prebid.videoBids || [];
                      window.UOLPD.TagManager.Prebid.videoBidUrl =
                        window.UOLPD.TagManager.Prebid.videoBidUrl || [];
                      var videoBids = window.UOLPD.TagManager.Prebid.videoBids;
                      var videoBidUrl = window.UOLPD.TagManager.Prebid.videoBidUrl;
                      var bidKeys = Object.keys(bids);
                      try {
                        if (bids[bidKeys[0]].bids[0].vastUrl.indexOf('http') > -1) {
                          $private.sendVideoMetrics();
                          for (var index = 0; index < $public.adUnits.video.length; index++) {
                            var adUnit = $public.adUnits.video[index];
                            for (var subIndex = 0; subIndex < bidKeys.length; subIndex++) {
                              if (adUnit.code == bidKeys[subIndex]) {
                                videoBids.push(adUnit);
                                videoBidUrl.push(bids[bidKeys[0]].bids[0].vastUrl);
                                $private.notifyVideoListeners(adUnit);
                                break;
                              }
                            }
                          }
                        }
                      } catch (ex) {}
                    }
                  },
                });
              });
              window.UOLPD.TagManager.Prebid.videoRequested = true;
            }
          };
          $private.getVideoIds = function () {
            var ids = [];
            for (var index = 0; index < $public.adUnits.video.length; index++) {
              ids.push($public.adUnits.video[index].code);
            }
            return ids;
          };
          $private.isMobile = {
            Android: function () {
              return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
              return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
              return navigator.userAgent.match(/iPhone|iPad|iPod/i) != null;
            },
            Opera: function () {
              return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
              return (
                navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
              );
            },
            any: function () {
              return $private.isMobile.Android() ||
                $private.isMobile.BlackBerry() ||
                $private.isMobile.iOS() ||
                $private.isMobile.Opera() ||
                $private.isMobile.Windows()
                ? '1'
                : '0';
            },
          };
          $private.sendVideoMetrics = function () {
            var metricsId = $private.getVideoMetricsId();
            var dynadPixel = document.createElement('img');
            dynadPixel.setAttribute('src', '//t.dynad.net/pc/?dc=5550013657;ord=' + Date.now());
            dynadPixel.setAttribute(
              'style',
              'width: 0px; height: 0px; visibility: hidden; position: absolute; z-index: 0;'
            );
            document.body.appendChild(dynadPixel);
            if (metricsId == '1' || metricsId == '2') {
              var script = document.createElement('script');
              script.setAttribute('async', 'true');
              script.setAttribute('type', 'text/javascript');
              var elapsedTime = Math.round(
                (new Date().getTime() - $private.videoBidTimestamp) / 1000
              );
              var foreignKeys =
                $private.isMobile.any() +
                '_' +
                $private.getBrowser() +
                '_' +
                metricsId +
                '_' +
                elapsedTime;
              window['callback'] = function (result) {};
              script.setAttribute(
                'src',
                '//metrics.dynad.net/resources/counter/jsonp/incWithFk/dynadtv/prebid/timeout/' +
                  foreignKeys +
                  '?ord=' +
                  Date.now() +
                  '&callback=callback'
              );
              (
                document.head ||
                document.getElementsByTagName('head')[0] ||
                document.body ||
                document.documentElement ||
                document.getElementsByTagName('body')[0]
              ).appendChild(script);
            }
          };
          $private.getVideoMetricsId = function () {
            var codRepo = '5nzulr';
            if (codRepo === '7mdtkd') {
              return '1';
            } else {
              if (codRepo === 'oqpj13') {
                return '2';
              } else {
                return '0';
              }
            }
          };
          $private.getBrowser = function () {
            var browser = '9';
            if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
              browser = '0';
            } else {
              if (
                /MSIE (\d+\.\d+);/.test(navigator.userAgent) |
                /Trident\/.*rv:([0-9]{1,}[\\.0-9]{0,})/.test(navigator.userAgent)
              ) {
                browser = '1';
              } else {
                if (/Edge/.test(navigator.userAgent)) {
                  browser = '2';
                } else {
                  if (/Navigator[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
                    browser = '3';
                  } else {
                    if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
                      browser = '4';
                    } else {
                      if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
                        browser = '5';
                        /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent);
                      } else {
                        if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
                          browser = '6';
                        }
                      }
                    }
                  }
                }
              }
            }
            return browser;
          };
          $private.notifyVideoListeners = function (adUnit) {
            var listeners = Object.keys($private.videoListeners);
            for (var index = 0; index < listeners.length; index++) {
              $private.videoListeners[listeners[index]](adUnit);
            }
          };
          $public.attachVideoListener = function (id, cb) {
            if ($private.typeValidator.isFunction(cb)) {
              $private.videoListeners[id] = cb;
              var videoBids = window.UOLPD.TagManager.Prebid.videoBids || [];
              for (var index = 0; index < videoBids.length; index++) {
                cb(videoBids[index]);
              }
            }
          };
          $public.detachVideoListener = function (id) {
            delete $private.videoListeners[id];
          };
          $public.requestAds = function (slots) {
            if (!$private.typeValidator.isArray(slots)) {
              slots = [];
            }
            var groupedSlots = $private.groupSlotsByType(slots);
            if (groupedSlots.prebid.entries.length) {
              window.pbjs.que.push(function () {
                window.pbjs.requestBids({
                  timeout: $private.PREBID_TIMEOUT,
                  adUnitCodes: groupedSlots.prebid.ids,
                  bidsBackHandler: function () {
                    $public.singleRequestBids(
                      groupedSlots.prebid.ids,
                      groupedSlots.prebid.entries
                    );
                  },
                });
              });
            }
            if (groupedSlots.google.length) {
              window.googletag.cmd.push(function () {
                for (var index = 0; index < groupedSlots.google.length; index++) {
                  window.googletag.display(groupedSlots.google[index].getSlotElementId());
                }
                if (!window.dontRefresh) {
                  window.googletag
                    .pubads()
                    .refresh(groupedSlots.google, { changeCorrelator: false });
                }
              });
            }
          };
          $private.groupSlotsByType = function (slots) {
            var prebidSlots = { entries: [], ids: [] },
              gtagSlots = [];
            for (var index = 0; index < slots.length; index++) {
              var slotId = slots[index].getSlotElementId();
              var slotMatched = false;
              for (var subIndex = 0; subIndex < $public.adUnits.standard.length; subIndex++) {
                if ($public.adUnits.standard[subIndex].code == slotId) {
                  slotMatched = true;
                  prebidSlots.entries.push(slots[index]);
                  prebidSlots.ids.push(slotId);
                  break;
                }
              }
              if (!slotMatched) {
                gtagSlots.push(slots[index]);
              }
            }
            return { prebid: prebidSlots, google: gtagSlots };
          };
          $public.singleRequestBids = function (slotIds, slots) {
            $private.clearBidTargetings(slots);
            window.googletag.cmd.push(function () {
              window.pbjs.que.push(function () {
                window.pbjs.setTargetingForGPTAsync(slotIds);
                $private.removeSpareTags(slots);
                for (var index = 0; index < slots.length; index++) {
                  window.googletag.display(slots[index].getSlotElementId());
                }
                window.pbjs.setTargetingForGPTAsync(slotIds);
                if (!window.dontRefresh) {
                  window.googletag.pubads().refresh(slots);
                }
              });
            });
          };
          $private.clearBidTargetings = function (slots) {
            for (var index = 0; index < slots.length; index++) {
              var keys = slots[index].getTargetingKeys();
              for (var sIndex = 0; sIndex < keys.length; sIndex++) {
                if (keys[sIndex].indexOf('hb') > -1) {
                  slots[index].clearTargeting(keys[sIndex]);
                }
              }
            }
          };
          $private.removeSpareTags = function (slots) {
            window.UOLPD.TagManager.Prebid.nativeData =
              window.UOLPD.TagManager.Prebid.nativeData || {};
            var availableData = window.UOLPD.TagManager.Prebid.nativeData;
            var blackList = ['hb_bidder_', 'hb_format_', 'hb_size_', 'hb_cache_host'];
            for (var index = 0, slotLen = slots.length; index < slotLen; index++) {
              try {
                var slotKeys = slots[index].getTargetingKeys();
                if (
                  slotKeys.indexOf('native') > -1 &&
                  slots[index].getTargeting('hb_native_title').length &&
                  slots[index].getTargeting('hb_native_linkurl').length
                ) {
                  slotKeys = $private.removeNativeTags(availableData, slots[index]);
                }
                for (var kIndex = 0; kIndex < slotKeys.length; kIndex++) {
                  for (var bIndex = 0; bIndex < blackList.length; bIndex++) {
                    if (slotKeys[kIndex].indexOf(blackList[bIndex]) > -1) {
                      slots[index].clearTargeting(slotKeys[kIndex]);
                    }
                  }
                }
              } catch (ex) {
                continue;
              }
            }
          };
          $private.removeNativeTags = function (availableData, slot) {
            var elemId = slot.getSlotElementId();
            var winningBids = pbjs.getAllPrebidWinningBids();
            availableData[elemId] = {
              title: slot.getTargeting('hb_native_title').join(','),
              body: slot.getTargeting('hb_native_body').join(','),
              image: slot.getTargeting('hb_native_image')[0],
              brand: slot.getTargeting('hb_native_brand')[0],
              icon: slot.getTargeting('hb_native_icon')[0],
              cta: slot.getTargeting('hb_native_cta').join(','),
              link: slot.getTargeting('hb_native_linkurl')[0],
              prebidTrackers: { impression: [], click: [] },
            };
            try {
              for (var subIndex = 0; subIndex < winningBids.length; subIndex++) {
                if (
                  winningBids[subIndex].adUnitCode == elemId &&
                  winningBids[subIndex].bidder == 'appnexus'
                ) {
                  availableData[elemId]['prebidTrackers']['impression'] =
                    winningBids[subIndex]['native']['impressionTrackers'];
                  availableData[elemId]['prebidTrackers']['click'] =
                    winningBids[subIndex]['native']['clickTrackers'];
                }
              }
            } catch (ex) {}
            slot.setTargeting('hb_native_slot_id', elemId);
            slot.clearTargeting('hb_native_title');
            slot.clearTargeting('hb_native_body');
            slot.clearTargeting('hb_native_image');
            slot.clearTargeting('hb_native_brand');
            slot.clearTargeting('hb_native_icon');
            slot.clearTargeting('hb_native_cta');
            slot.clearTargeting('hb_native_linkurl');
            slot.clearTargeting('hb_native_title_appn');
            slot.clearTargeting('hb_native_body_appne');
            slot.clearTargeting('hb_native_image_appn');
            slot.clearTargeting('hb_native_brand_appn');
            slot.clearTargeting('hb_native_icon_appne');
            slot.clearTargeting('hb_native_cta_appnex');
            slot.clearTargeting('hb_native_linkurl_ap');
            return slot.getTargetingKeys();
          };
          $public.refresh = function (adUnitCode, slot) {
            if ($private.isValidSlot(slot)) {
              $private.clearBidTargetings([slot]);
              window.pbjs.que.push(function () {
                window.pbjs.requestBids({
                  timeout: $private.PREBID_TIMEOUT,
                  adUnitCodes: [adUnitCode],
                  bidsBackHandler: function () {
                    window.pbjs.setTargetingForGPTAsync([adUnitCode]);
                    $private.removeSpareTags([slot]);
                    window.googletag.pubads().refresh([slot]);
                  },
                });
              });
            } else {
              window.googletag.cmd.push(function () {
                window.googletag.pubads().refresh([slot]);
              });
            }
          };
          $private.isValidSlot = function (slot) {
            try {
              var slotId = slot.getSlotElementId();
              for (var index = 0; index < $public.adUnits.standard.length; index++) {
                if ($public.adUnits.standard[index].code == slotId) {
                  return true;
                }
              }
              return false;
            } catch (ex) {
              return false;
            }
          };
        }
        var nameSpace = new NameSpace('Prebid');
        var prebid = new Prebid();
        nameSpace.requestAds = prebid.requestAds;
        nameSpace.refresh = prebid.refresh;
        nameSpace.attachVideoListener = prebid.attachVideoListener;
        nameSpace.detachVideoListener = prebid.detachVideoListener;
        nameSpace.init = function (config, namTag) {
          return prebid.init(config, namTag, 'Prebid');
        };
      })(window, document);
      (function (window, document, undefined) {
        var ModuleSchema = {
          properties: {
            type: 'stringMatches|/(script|iframe|img)/',
            javascriptSource: 'isString',
            src: 'isString',
            container: 'isString',
            width: 'stringMatches|/^[\\d|null]+(px|%){0,1}$/',
            height: 'stringMatches|/^[\\d|null]+(px|%){0,1}$/',
          },
          required: ['type'],
        };
        function ModuleAsyncWriter () {
          var $private = {};
          var $public = this;
          $public.logger = new Logs();
          $public.trackManager = new TrackManager();
          $private.schema = new Schema(ModuleSchema);
          $private.typeValidator = new TypeValidator();
          $public.__constructor = (function () {
            $public.logger.setPrefix('UOLPD.TagManager.ModulesInjectorAsync');
            $public.trackManager.setModuleName('modules-injector-async');
          })();
          $public.init = function (config, namTag, namespace) {
            $private.configureLogger(namTag, namespace);
            $public.trackManager.trackSuccess('Execucoes Iniciadas');
            if ($private.schema.isValid(config)) {
              config = $private.fixConfig(config);
              if (!$private.isInvalidSrc(config)) {
                $private.createModule(config);
              }
            } else {
              $private.logInvalidConfig();
            }
          };
          $private.configureLogger = function (namTag, namespace) {
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = Date.now();
          };
          $private.fixConfig = function (config) {
            if (config.javascriptSource) {
              config.src = config.javascriptSource;
            }
            if (config.type == 'javascript') {
              config.type = 'script';
            }
            return config;
          };
          $private.isInvalidSrc = function (config) {
            if (
              !$private.typeValidator.isString(config.src) &&
              !$private.typeValidator.isString(config.javascriptSource)
            ) {
              return true;
            }
            return false;
          };
          $private.calculateTimeSpent = function (timeStampInit) {
            if (!$private.typeValidator.isDefined(timeStampInit)) {
              return Date.now() - $private.timeStampInit;
            }
            return Date.now() - timeStampInit;
          };
          $private.createModule = function (config) {
            if ($private.pageHasElement(config.type, config.src)) {
              $public.logger.warn(
                'Um ' +
                  config.type +
                  ' com src "' +
                  config.src +
                  '" já existe nesta página, verifique suas configurações.',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('repeated_element', 'fluxo_interrompido');
              return;
            }
            $public.element = $private.createElement(config);
            $private.appendElement($public.element, config.container);
            $private.executionTime = $private.calculateTimeSpent();
            $public.logger.log(
              'O ' + config.type + ' foi criado de forma assíncrona',
              $private.namTag,
              $private.namespace,
              $private.executionTime
            );
            $public.trackManager.trackSuccess('Execucoes Finalizadas');
          };
          $private.pageHasElement = function (elementType, src) {
            var selector = elementType + '[' + 'src*="' + $private.stripProtocol(src) + '"]';
            return document.querySelector(selector);
          };
          $private.stripProtocol = function (src) {
            return src.substring(src.indexOf('//'), src.length);
          };
          $private.createElement = function (config) {
            var element = document.createElement(config.type);
            element.src = $private.replaceMacros(config.src);
            element.async = 'true';
            if (config.type === 'img') {
              element = $private.addSize(element, config.width, config.height);
            }
            if (config.type === 'iframe') {
              element = $private.addAttrIframe(element, config.width, config.height);
            }
            element.onload = $private.addMetrics;
            element.onerror = $private.addMetrics;
            return element;
          };
          $private.replaceMacros = function (src) {
            src = src.replace(/%%CACHE_BUSTER%%/g, $private.timeStampInit);
            try {
              src = $private.replaceTailTargetData(src);
              return $private.replaceWithDataLayerItens(src);
            } catch (e) {
              return src;
            }
          };
          $private.replaceTailTargetData = function (src) {
            if (src.indexOf('%%TT-DATA%%') < 0) {
              return src;
            }
            return src.replace(/%%TT-DATA%%/gi, $private.getTailTargetData());
          };
          $private.getTailTargetData = function () {
            var url = [],
              dataLayer = window.UOLPD.dataLayer;
            for (var key in dataLayer) {
              if (/^tt\_\w+$/gi.test(key)) {
                var item = key.replace('_', '-');
                url.push(item + '=' + dataLayer[key]);
              }
            }
            return url.join(';');
          };
          $private.replaceWithDataLayerItens = function (src) {
            var pattern = /%%dataLayer_(\w+)%%/gi;
            var matches = pattern.exec(src);
            while (matches !== null) {
              var dataLayerValue = $private.getItemFromDataLayer(matches[1]);
              if (dataLayerValue) {
                src = src.replace(new RegExp(matches[0], 'g'), dataLayerValue);
              }
              matches = pattern.exec(src);
            }
            return src;
          };
          $private.getItemFromDataLayer = function (item) {
            if (!$private.typeValidator.isString(item)) {
              return;
            }
            var dataLayer = window.UOLPD.dataLayer;
            for (var key in dataLayer) {
              if (key.toLowerCase() === item.toLowerCase()) {
                return dataLayer[key];
              }
            }
            return;
          };
          $private.addSize = function (element, width, height) {
            if (width) {
              element.width = width.match(/^\d+/g);
            }
            if (height) {
              element.height = height.match(/^\d+/g);
            }
            return element;
          };
          $private.addAttrIframe = function (element, width, height) {
            if (height) {
              element.height = height;
            }
            element.width = width || '100%';
            element.scrolling = 'no';
            element.frameBorder = 0;
            return element;
          };
          $private.addMetrics = function () {
            $public.trackManager.trackCustomObj($private.getExecutionMetrics());
          };
          $private.getExecutionMetrics = function () {
            var metrics = {};
            metrics.groups = {};
            metrics.groups.namTag = $private.namTag;
            metrics.measures = {};
            var loadTime = $private.calculateTimeSpent($private.loadTimeInit);
            if (
              $private.isOutsideTime(loadTime, 21000) ||
              $private.isOutsideTime($private.executionTime, 1000)
            ) {
              metrics.groups.groupType = 2;
              metrics.measures.OutsideTime = 1;
            } else {
              metrics.groups.groupType = 1;
              metrics.measures.Execution = 1;
            }
            metrics.measures.executionTime = $private.executionTime;
            metrics.measures.LoadTime = loadTime;
            return metrics;
          };
          $private.isOutsideTime = function (time, maxTime) {
            if (isNaN(time) || time < 0 || time > maxTime) {
              return true;
            }
            return false;
          };
          $private.appendElement = function (element, selector, count) {
            count = count || 1;
            if (count >= 100 || !selector) {
              selector = 'body';
            }
            var container = document.querySelector(selector);
            if (container) {
              container.appendChild(element);
              $private.loadTimeInit = Date.now();
            } else {
              window.setTimeout(function () {
                count++;
                $private.appendElement(element, selector, count);
              }, 50);
            }
          };
          $private.logInvalidConfig = function () {
            var invalidProperties = $private.schema.invalidProperties.join(', ');
            var errorMessage =
              'A configuração fornecida pelo Tag Manager está inválida, as seguintes propriedades: ' +
              invalidProperties +
              ' não existem ou são inválidas';
            $public.logger.error(
              errorMessage,
              $private.namTag,
              $private.namespace,
              $private.calculateTimeSpent()
            );
            $public.trackManager.trackError(
              'invalid_config',
              'O objeto de configuração está inválido'
            );
          };
        }
        var __monitoracaoJsuol = 'tm.jsuol.com.br/modules/modules-injector-async.js';
        var namespace = new NameSpace('ModulesInjectorAsync');
        namespace.init = function (config, namTag) {
          return new ModuleAsyncWriter().init(config, namTag, 'ModulesInjectorAsync');
        };
      })(window, document);
      var defaultTags = [
        {
          name: 'UOL DNA',
          module: 'DNA',
          rules: { enable: ['/\\.uol\\.com\\.br/.test(window.location.href)'], disable: [] },
          events: ['onload'],
        },
        {
          name: 'Behavioural Targeting',
          module: 'CodeInjector',
          rules: { enable: ['document.location.href.match(/.*/)'], disable: [] },
          events: ['onload'],
          config: {
            codeInjector:
              "(function() {\n\tif ('5nzulr' == 'a06jq7' || '5nzulr' == 'wapbwn') return;\n\tvar script = document.createElement('script');\n\tscript.setAttribute('src', '//tracker.bt.uol.com.br/partner?source=tagmanager');\n\tdocument.head.appendChild(script);\n})()",
          },
        },
        {
          name: 'TailTarget Cookie Sync',
          module: 'CodeInjector',
          rules: { enable: ['document.location.href.match(/.*/)'], disable: [] },
          events: ['onload'],
          config: {
            codeInjector:
              "(function (RemoteStorage) {\n    function UserIdentifier () {\n        var $private = {};\n        var $public = this;\n\n        $private.remoteStorage = new RemoteStorage();\n        $private.ttSource = '//m.t.tailtarget.com/sync/TT-10162-1/';\n        $private.uid = {};\n        $private.dna = null;\n\n        $public.init = function () {\n            $private.remoteStorage.get('DNA', $private.requestDNA);\n        };\n\n        $private.requestDNA = function (key, dnaID) {\n            var DNA_UID = ('; ' + document.cookie).split('; DNA=').pop().split(';').shift();\n            if (!DNA_UID || DNA_UID === 'null') {\n               if (!dnaID) {\n                    return;\n                }\n                DNA_UID = dnaID;\n            }\n\n            if (DNA_UID.indexOf('{') >= 0) {\n                return;\n            }\n\n            $private.dna = DNA_UID.split(\"|\")[0];\n            $private.uid.dna = $private.dna;\n\n            $private.setHash();\n        };\n\n        $private.setHash = function () {\n            var ttSrcs = $private.getScriptTailBySrc($private.ttSource);\n            if (ttSrcs.length > 0) {\n                $private.uid.hash = [];\n            }\n            for (var i = 0; i < ttSrcs.length; i++) {\n                var ttSrc = ttSrcs[i];\n                var hash = ttSrc.getAttribute('src').match(/.*m\\.t.tailtarget\\.com\\/sync\\/TT-10162-1\\/([\\w]+)/)[1];\n\n                $private.uid.hash.push(hash);\n            }\n\n            $private.remoteStorage.set('UID', JSON.stringify($private.uid), function () {});\n        };\n\n        $private.getScriptTailBySrc = function (src) {\n            return document.querySelectorAll('[src*=\"'+ src +'\"]');\n        };\n    };\n\n    window.setTimeout(function () { (new UserIdentifier()).init(); }, 500);\n})(UOLPD.TagManager.Commons.RemoteStorage);",
          },
        },
        {
          name: 'Purga de clients de RT expirados',
          module: 'CodeInjector',
          rules: { enable: ['document.location.href.match(/.*/)'], disable: [] },
          events: ['onload'],
          config: {
            codeInjector:
              "(function () {\n    var createIframe = function (name, expname, expdomain) {\n        var iframe = document.createElement('iframe');\n        iframe.style.width = '0';\n        iframe.style.heigth = '0';\n        iframe.style.display = 'none';\n        iframe.style.opacity = '0';\n        iframe.style.border = '0';\n        iframe.setAttribute('src', 'https://tm.uol.com.br/purge-clients.html?name=' + name + '&expname=' + expname + '&expdomain=' + expdomain);\n        document.body.appendChild(iframe);\n    };\n    \n    createIframe('DEretargeting', 'DEretargetingExp', '1');\n    createIframe('dynad_rt', 'dynad_rt_exp', '1');\n})();",
          },
        },
      ];
      function VersionManager () {
        var $private = {};
        var $public = this;
        $public.logger = new Logs();
        $private.validator = new TypeValidator();
        $private.stringUtils = new StringUtils();
        $private.scriptUtils = new ScriptUtils();
        $private.tmVersionToken = 'uoltm_version';
        $public.setSpecificVersion = function () {
          if (!$public.specificVersionWasRequested()) {
            return;
          }
          $private.scriptUtils.createSyncScript($public.getSpecificVersionURL());
        };
        $public.specificVersionWasRequested = function () {
          var requestedVersion = $private.getRequestedVersion();
          var versionRegex = /^\d+$/gm;
          var isValidVersion = versionRegex.test(requestedVersion);
          if (!requestedVersion || !isValidVersion) {
            return false;
          }
          if ($private.hasVersionScriptInPage()) {
            return false;
          }
          return true;
        };
        $public.getSearch = function () {
          return window.location.search;
        };
        $public.getScriptUrl = function () {
          var __monitoracaoJsuol = 'tm.jsuol.com.br/5n/zu/5nzulr.js';
          return __monitoracaoJsuol;
        };
        $public.getSpecificVersionURL = function () {
          var codRepository = $private.getCodRepository();
          var versionURL = $private.buildVersionURL(codRepository);
          return versionURL;
        };
        $private.getRequestedVersion = function () {
          var requestedVersion = $private.stringUtils.getValueFromKeyInString(
            $public.getSearch(),
            $private.tmVersionToken,
            '&'
          );
          return requestedVersion;
        };
        $private.hasVersionScriptInPage = function () {
          var versionURL = $public.getSpecificVersionURL();
          var scripts = document.querySelectorAll('script[src*="' + versionURL + '"]');
          if (!scripts || !scripts.length) {
            return false;
          }
          return true;
        };
        $private.buildVersionURL = function (codRepository) {
          var mainPath = '//tm.jsuol.com.br/';
          var firstDirLevel = codRepository.substring(0, 2) + '/';
          var secondDirLevel = codRepository.substring(2, 4) + '/';
          var fullPath = mainPath + firstDirLevel + secondDirLevel + codRepository;
          var requestedVersion = $private.getRequestedVersion();
          if (requestedVersion != '0') {
            fullPath += '-' + $private.getRequestedVersion() + '.js';
          } else {
            fullPath += '.js';
          }
          return fullPath;
        };
        $private.getCodRepository = function () {
          var baseURLRegex = /[\w\d]{6}\.js$/gm;
          var codRepository = $public.getScriptUrl().match(baseURLRegex, '')[0];
          codRepository = codRepository.replace('.js', '');
          return codRepository;
        };
      }
      function TagController () {
        var $private = {};
        var $public = this;
        $private.typeValidator = new TypeValidator();
        $private.dataLayer = new DataLayer();
        $private.executedTags = [];
        $public.addEvents = function (tag) {
          if (!$private.isTagValid(tag)) {
            return;
          }
          for (var i = 0, length = tag.events.length; i < length; i++) {
            if ($private.typeValidator.isString(tag.events[i])) {
              $private.addEvent(tag.events[i], tag);
            }
          }
        };
        $private.isTagValid = function (tag) {
          if (!$private.typeValidator.isObject(tag)) {
            return false;
          }
          if (!$private.typeValidator.isString(tag.module)) {
            return false;
          }
          if (!$private.typeValidator.isObject(tag.rules)) {
            return false;
          }
          if (!$private.typeValidator.isArray(tag.rules.enable)) {
            return false;
          }
          if (!$private.typeValidator.isArray(tag.rules.disable)) {
            return false;
          }
          if (!$private.typeValidator.isArray(tag.events)) {
            return false;
          }
          if (tag.config && !$private.typeValidator.isObject(tag.config)) {
            return false;
          }
          return true;
        };
        $public.getEvents = function (eventName) {
          return $private.events;
        };
        $private.addEvent = function (eventName, tag) {
          if (eventName === 'autostart' || eventName === 'onload' || eventName === 'onready') {
            $private.eventsDefaul(eventName, tag);
            return;
          }
          window.UOLPD = window.UOLPD || {};
          window.UOLPD.eventsUOLTM = window.UOLPD.eventsUOLTM || {};
          var events = window.UOLPD.eventsUOLTM[eventName] || [];
          events.push($private.cloneTag(tag, eventName));
          window.UOLPD.eventsUOLTM[eventName] = events;
        };
        $private.eventsDefaul = function (eventName, tag) {
          $private.events = $private.events || {};
          var events = $private.events[eventName] || [];
          events.push($private.cloneTag(tag, eventName));
          $private.events[eventName] = events;
        };
        $private.cloneTag = function (tag, eventName) {
          var result = {};
          for (var key in tag) {
            result[key] = tag[key];
          }
          if ($private.typeValidator.isString(tag.module)) {
            result.moduleName = tag.module;
            result.module = $public.getModuleByName(tag.module);
            result.event = [eventName];
          }
          return result;
        };
        $public.getModuleByName = function (moduleName) {
          var module;
          if (!$private.typeValidator.isString(moduleName)) {
            return;
          }
          module = window.UOLPD.TagManager[moduleName];
          if (!$private.typeValidator.isDefined(module)) {
            return;
          }
          module.nameSpace = moduleName;
          if ($private.typeValidator.isFunction(module.init)) {
            return module;
          }
        };
        $public.triggerEvents = function (eventName) {
          var currentEvent = $public.getCurrentEvent(eventName);
          if (!currentEvent) {
            return;
          }
          for (var i = 0, length = currentEvent.length; i < length; i++) {
            try {
              $private.activateTag(currentEvent[i], eventName);
            } catch (e) {}
          }
        };
        $public.getCurrentEvent = function (eventName) {
          var currentEvent = $private.getTagsEvent(eventName);
          if ($private.typeValidator.isArray(currentEvent)) {
            return currentEvent;
          }
        };
        $private.getTagsEvent = function (eventName) {
          if (eventName !== 'autostart' && eventName !== 'onload' && eventName != 'onready') {
            window.UOLPD.eventsUOLTM = window.UOLPD.eventsUOLTM || {};
            return window.UOLPD.eventsUOLTM[eventName];
          }
          if (!$private.events) {
            return;
          }
          return $private.events[eventName];
        };
        $private.activateTag = function (tag, eventName) {
          if ($private.isTagEnabled(tag)) {
            tag.module.init(tag.config, tag.name);
            $private.executedTags.push(tag);
            $private.dataLayer.setDataLayer(tag.module.nameSpace);
          }
        };
        $private.isTagEnabled = function (tag) {
          if ($private.checkRules(tag.rules.disable)) {
            return false;
          }
          if ($private.checkRules(tag.rules.enable)) {
            return true;
          }
        };
        $private.checkRules = function (rules) {
          const $___old_3ac3f3bce67f4cb0 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_3ac3f3bce67f4cb0)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_9d7b4eb662ee43f5.userAgent
              ));
            return function () {
              try {
                if (eval(rules.join(' || '))) {
                  return true;
                }
              } catch (e) {
                return false;
              }
            }.apply(this, arguments);
          } finally {
            if ($___old_3ac3f3bce67f4cb0)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_3ac3f3bce67f4cb0
              ));
          }
        };
        $public.getExecutedTags = function () {
          return $private.executedTags;
        };
      }
      function BehaviouralTargeting () {
        var $private = {};
        var $public = this;
        $private.validator = new TypeValidator();
        $private.cookieUtils = new CookieUtils();
        $private.remoteStorage = new RemoteStorage();
        $public.getBTCookies = function () {
          var rtCodes = $private.getMergeCookies();
          var dntTrack = $public.getDoNotTrack();
          rtCodes.push(dntTrack);
          return rtCodes;
        };
        $private.getMergeCookies = function () {
          var BTCookie = $private.getClientsArray($private.cookieUtils.getItem('BT'));
          var DECookie = $private.getClientsArray($private.cookieUtils.getItem('DEretargeting'));
          return $private.mergeCookies(BTCookie, DECookie);
        };
        $private.getClientsArray = function (cookie) {
          if (!$private.validator.isString(cookie)) {
            return [];
          }
          if (cookie.length === 0) {
            return [];
          }
          var retargeting = cookie.split(';').sort();
          for (var i = 0; i < retargeting.length; i++) {
            var arr = retargeting[0];
            if (arr === '') {
              retargeting.splice(0, 1);
            }
          }
          return retargeting;
        };
        $private.mergeCookies = function (deRetar, bt) {
          var retargeting = deRetar.concat(bt).sort();
          for (var i = 0; i < retargeting.length; i++) {
            if (retargeting[i] === retargeting[i + 1]) {
              retargeting.splice(i, 1);
            }
          }
          return retargeting;
        };
        $public.getDoNotTrack = function () {
          const $___old_49abdf29fce6cc58 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'doNotTrack'
          );
          try {
            if ($___old_49abdf29fce6cc58)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'doNotTrack',
                $___stub_5299202f9682c77d.doNotTrack
              ));
            return function () {
              var dntCode = '9000';
              if (!navigator.doNotTrack && !window.doNotTrack && !navigator.MsDoNotTrack) {
                dntCode = '9000';
                return dntCode;
              }
              if (
                navigator.doNotTrack === '1' ||
                window.doNotTrack === '1' ||
                navigator.MsDoNotTrack === '1'
              ) {
                dntCode = '9001';
                return dntCode;
              }
              if (navigator.doNotTrack === 'yes') {
                dntCode = '9003';
                return dntCode;
              }
              return dntCode;
            }.apply(this, arguments);
          } finally {
            if ($___old_49abdf29fce6cc58)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'doNotTrack',
                $___old_49abdf29fce6cc58
              ));
          }
        };
      }
      function DataLayer () {
        var $private = {};
        var $public = this;
        $public.logs = new Logs();
        $public.logs.setPrefix('UOLPD.TagManager');
        $private.typeValidator = new TypeValidator();
        $private.remoteStorage = new RemoteStorage();
        $private.cookieUtils = new CookieUtils();
        $private.behaviouralTargeting = new BehaviouralTargeting();
        $public.__constructor = (function () {
          $private.remoteStorage.get('uolDataLayer', function (key, value) {
            try {
              window.localStorage.setItem('uolDataLayer', value);
            } catch (e) {}
          });
        })();
        $public.createDataLayer = function () {
          var namespace = window.UOLPD;
          if (!$private.typeValidator.isObject(namespace)) {
            window.UOLPD = {};
          }
          var dataLayer = window.UOLPD.dataLayer;
          if (!$private.typeValidator.isObject(dataLayer)) {
            window.UOLPD.dataLayer = {};
          }
          $private.addOrigin();
          $private.addFocusStatus();
          $private.addBT();
          $private.addUOLDNA();
        };
        $private.cleanSpecialChars = function (text) {
          return text
            .replace(/(^https?:\/\/|["'=!+#\*~;^\(\)<>\[\],&\\\/\.\:\-\_\?])+/gm, function (
              match,
              offset,
              string
            ) {
              var isProtocol = /https?:\/\//g.test(match);
              var isLastChar = offset === string.length - 1;
              return isProtocol || isLastChar ? '' : ' ';
            })
            .replace(/\s{2,}/g, ' ');
        };
        $private.addOrigin = function () {
          window.UOLPD.dataLayer.origin =
            window.UOLPD.dataLayer.origin || $private.cleanSpecialChars($public.getOrigin());
        };
        $public.getOrigin = function () {
          if (!$private.isOnMainPage()) {
            return document.referrer;
          }
          return window.location.href;
        };
        $private.isOnMainPage = function () {
          if (window.top != self) {
            return false;
          }
          return true;
        };
        $private.addFocusStatus = function () {
          $private.updateFocus();
          setInterval(function () {
            $private.updateFocus();
          }, 750);
        };
        $private.updateFocus = function () {
          try {
            window.UOLPD.dataLayer.hasFocus = window.parent.top.document.hasFocus().toString();
          } catch (err) {
            $public.logs.error(err.name + ': ' + err.message);
          }
        };
        $private.sha256 = function (message, callback) {
          var msgBuffer = new TextEncoder('utf-8').encode(message);
          crypto.subtle.digest('SHA-256', msgBuffer).then(callback);
        };
        $private.UUID = (function () {
          var self = {};
          var lut = [];
          for (var i = 0; i < 256; i++) {
            lut[i] = (i < 16 ? '0' : '') + i.toString(16);
          }
          self.generate = function () {
            var d0 = (Math.random() * 4294967295) | 0;
            var d1 = (Math.random() * 4294967295) | 0;
            var d2 = (Math.random() * 4294967295) | 0;
            var d3 = (Math.random() * 4294967295) | 0;
            return (
              lut[d0 & 255] +
              lut[(d0 >> 8) & 255] +
              lut[(d0 >> 16) & 255] +
              lut[(d0 >> 24) & 255] +
              '-' +
              lut[d1 & 255] +
              lut[(d1 >> 8) & 255] +
              '-' +
              lut[((d1 >> 16) & 15) | 64] +
              lut[(d1 >> 24) & 255] +
              '-' +
              lut[(d2 & 63) | 128] +
              lut[(d2 >> 8) & 255] +
              '-' +
              lut[(d2 >> 16) & 255] +
              lut[(d2 >> 24) & 255] +
              lut[d3 & 255] +
              lut[(d3 >> 8) & 255] +
              lut[(d3 >> 16) & 255] +
              lut[(d3 >> 24) & 255]
            );
          };
          return self;
        })();
        $private.addUOLDNA = function () {
          try {
            var dna = document.cookie.includes('DNA=')
              ? document.cookie.replace(/.*DNA=([^;|]+).*/, '$1')
              : null;
            window.UOLPD.dataLayer.UOLDNA = dna;
          } catch (e) {}
        };
        $private.addBT = function () {
          var values = [];
          if ($private.typeValidator.isString(window.UOLPD.dataLayer.bt)) {
            values = window.UOLPD.dataLayer.bt.split(',');
          }
          var cookieValues = $private.behaviouralTargeting.getBTCookies();
          if ($private.typeValidator.isArray(cookieValues)) {
            values = $private.mergeArrays(values, cookieValues);
          }
          if (values.length > 0) {
            window.UOLPD.dataLayer.bt = values.toString();
          }
        };
        $private.mergeArrays = function (dataLayerItems, cookieItems) {
          var finalArray = [];
          finalArray = $private.addValidItems(dataLayerItems, finalArray);
          finalArray = $private.addValidItems(cookieItems, finalArray);
          return finalArray;
        };
        $private.addValidItems = function (dataArray, targetArray) {
          if (!$private.typeValidator.isArray(dataArray)) {
            return targetArray;
          }
          for (var i = 0, length = dataArray.length; i < length; i++) {
            var item = dataArray[i];
            if (!$private.typeValidator.isString(item)) {
              continue;
            }
            if (targetArray.indexOf(item) < 0) {
              targetArray.push(item);
            }
          }
          return targetArray;
        };
        $public.setDataLayer = function (module) {
          var dataLayer = $private.hasModuleDataLayer(module);
          if (!$private.typeValidator.isObject(dataLayer)) {
            return;
          }
          for (var key in dataLayer) {
            window.UOLPD.dataLayer[key] = dataLayer[key];
            $public.logs.debug(
              'Foi adicionado "' +
                key +
                ' : ' +
                dataLayer[key] +
                '" à window.UOLPD.dataLayer pelo módulo: ' +
                module
            );
          }
          $private.addBT();
        };
        $private.hasModuleDataLayer = function (module) {
          const $___old_9f8a712f11523b05 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_9f8a712f11523b05)
              ({}.constructor.defineProperty(
                window,
                'localStorage',
                $___stub_a011c28886b08277.localStorage
              ));
            return function () {
              var data = {};
              try {
                data = JSON.parse(window.localStorage.getItem('uolDataLayer'));
              } catch (e) {}
              if (!$private.typeValidator.isObject(data)) {
                return;
              }
              if (!$private.typeValidator.isString(module)) {
                return;
              }
              var dataLayer = data[module];
              if (!$private.typeValidator.isObject(dataLayer)) {
                return;
              }
              return dataLayer;
            }.apply(this, arguments);
          } finally {
            if ($___old_9f8a712f11523b05)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_9f8a712f11523b05));
          }
        };
      }
      function UniqueId () {
        var $private = {};
        var $public = this;
        $private.typeValidator = new TypeValidator();
        $private.remoteStorage = new RemoteStorage();
        $private.trackManager = new TrackManager();
        $private.trackManager.setModuleName('core');
        $private.setUniqueId = function (value) {
          var uniqueId = [],
            indice = 1;
          if (
            !$private.typeValidator.isObject(value) ||
            !$private.typeValidator.isString(value.dna)
          ) {
            return;
          }
          uniqueId.push(indice + '|' + value.dna);
          indice = indice + 1;
          var hash = $private.setHash(indice, value.hash);
          if (hash) {
            uniqueId.push(hash);
          }
          if (uniqueId.length > 0) {
            window.localStorage.setItem('tt_uid', uniqueId.join(';'));
          }
          if (
            window.localStorage.getItem('tt_uid') &&
            window.localStorage.getItem('tt_uid').indexOf('{') !== -1
          ) {
            window.localStorage.removeItem('tt_uid');
          }
        };
        $private.setHash = function (indice, hash) {
          if ($private.typeValidator.isArray(hash)) {
            var data = [];
            for (var i = 0; i < hash.length; i++) {
              data.push(indice + '|' + hash[i]);
              indice = indice + 1;
            }
            return data.join(';');
          } else {
            if (
              window.localStorage.getItem('tt_uid') &&
              window.localStorage.getItem('tt_uid').split('2|').length > 1
            ) {
              var hash = window.localStorage.getItem('tt_uid').split('2|')[1];
              return '2|' + hash;
            }
          }
          return;
        };
        $private.trackUniqueId = function () {
          const $___old_f7abd33a27f8b139 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_f7abd33a27f8b139)
              ({}.constructor.defineProperty(
                window,
                'localStorage',
                $___stub_a011c28886b08277.localStorage
              ));
            return function () {
              $private.metrics = {
                groups: {
                  ttUid: 'none',
                  cookieDNA: 'none',
                  remoteDNA: 'none',
                  remoteDnaUid: 'none',
                },
                measures: { Execution: '1' },
              };
              var cookieDNA = ('; ' + document.cookie).split('; DNA=').pop().split(';').shift(),
                ttUid;
              try {
                ttUid = window.localStorage.getItem('tt_uid');
              } catch (err) {}
              if ($private.typeValidator.isString(ttUid)) {
                $private.metrics.groups.ttUid = ttUid;
              }
              if ($private.typeValidator.isString(cookieDNA)) {
                $private.metrics.groups.cookieDNA = cookieDNA;
              }
              $private.remoteStorage.get('DNA', $private.metricsDNA);
            }.apply(this, arguments);
          } finally {
            if ($___old_f7abd33a27f8b139)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_f7abd33a27f8b139));
          }
        };
        $private.metricsDNA = function (key, value) {
          var data;
          try {
            data = value || '';
          } catch (err) {
            data = '';
          }
          if (data) {
            $private.metrics.groups.remoteDNA = data;
          }
          $private.remoteStorage.get('DNA_UID', $private.metricsUniqueId);
        };
        $private.metricsUniqueId = function (key, value) {
          var data;
          try {
            data = value || '';
          } catch (err) {
            data = '';
          }
          if (data) {
            $private.metrics.groups.remoteDnaUid = data;
          }
          $private.trackManager.trackCustomObj($private.metrics);
        };
        $public.__constructor = (function () {
          $private.remoteStorage.get('UID', function (key, value) {
            try {
              $private.setUniqueId(JSON.parse(value));
            } catch (e) {}
          });
          $private.trackUniqueId();
        })();
      }
      function TMConsole (codRepository, version) {
        var $private = {};
        var $public = this;
        $public.logger = new Logs();
        $public.logger.setPrefix('UOLPD.TagManager');
        $private.typeValidator = new TypeValidator();
        $private.cookieUtils = new CookieUtils();
        $private.cookieName = 'uoltm_version';
        $public.__constructor = function (codRepository, version) {
          if (!$private.isValidConstructorArguments(codRepository, version)) {
            return;
          }
          if ($private.hasOtherRepositoryCookie(codRepository)) {
            return;
          }
          if (!$private.cookieUtils.getItem($private.cookieName)) {
            $private.cookieUtils.setItem($private.cookieName, codRepository, null, 0, 0, 15);
          }
          $private.appendOnDocComplete(codRepository, version);
          return $public;
        };
        $private.appendOnDocComplete = function (codRepository, version) {
          $private.container = $private.createMainContainer(codRepository, version);
          if (document.readyState === 'complete') {
            document.body.appendChild($private.container);
            return;
          }
          var method = document.addEventListener ? 'readystatechange' : 'onreadystatechange';
          var methodListener = document.addEventListener ? 'addEventListener' : 'attachEvent';
          document[methodListener](method, function () {
            if (document.readyState === 'complete') {
              document.body.appendChild($private.container);
            }
          });
        };
        $private.isValidConstructorArguments = function (codRepository, version) {
          if (!$private.typeValidator.isString(codRepository)) {
            $public.logger.error('O parâmetro fornecido como código do repositório é inválido');
            return false;
          }
          if (!$private.typeValidator.isNumericString(version)) {
            $public.logger.error('O parâmetro fornecido como versão do repositório é inválido');
            return false;
          }
          return true;
        };
        $private.hasOtherRepositoryCookie = function (codRepository) {
          var currentCookie = $private.cookieUtils.getItem($private.cookieName);
          if ($private.typeValidator.isString(currentCookie) && currentCookie !== codRepository) {
            return true;
          }
          return false;
        };
        $private.createMainContainer = function (codRepository, version) {
          var mainContainer = document.createElement('div');
          mainContainer.setAttribute('id', codRepository);
          mainContainer.style.backgroundColor = '#fafafa';
          mainContainer.style.bottom = 0;
          mainContainer.style.display = 'block';
          mainContainer.style.height = Math.round(window.innerHeight / 3) + 'px';
          mainContainer.style.position = 'fixed';
          mainContainer.style.width = '100%';
          mainContainer.style.fontFamily = 'Verdana, Sans-serif';
          mainContainer.style.zIndex = '99999999999';
          mainContainer.appendChild($private.createHeaderContainer(codRepository, version));
          mainContainer.appendChild($private.createLogContainer());
          return mainContainer;
        };
        $private.createHeaderContainer = function (codRepository, version) {
          var headerContainer = document.createElement('div');
          headerContainer.style.width = '100%';
          headerContainer.style.borderTop = 'solid 0.5px #aaaaaa';
          headerContainer.style.color = '#757575';
          headerContainer.style.position = 'relative';
          headerContainer.appendChild($private.createLogo());
          headerContainer.appendChild($private.createRepositoryInfo(codRepository, version));
          headerContainer.appendChild($private.createCloseButton(codRepository));
          headerContainer.appendChild($private.createControlButton(codRepository));
          return headerContainer;
        };
        $private.createLogo = function () {
          var logo = $private.createHeaderSubDivision();
          logo.appendChild($private.createLogoAnchor());
          return logo;
        };
        $private.createHeaderSubDivision = function () {
          var headerSubDivision = document.createElement('div');
          headerSubDivision.style.display = 'inline-block';
          headerSubDivision.style.padding = '5px';
          return headerSubDivision;
        };
        $private.createLogoAnchor = function () {
          var anchor = document.createElement('a');
          anchor.setAttribute('href', '//tagmanager.uol.com.br');
          anchor.style.backgroundImage = 'url(//imguol.com.br/tag-manager/icons-sprite.png)';
          anchor.style.backgroundPosition = '0 0';
          anchor.style.backgroundRepeat = 'no-repeat';
          anchor.style.width = '155px';
          anchor.style.height = '38px';
          anchor.style.display = 'block';
          anchor.style.textIndent = '100%';
          anchor.style.whiteSpace = 'nowrap';
          anchor.style.overflow = 'hidden';
          anchor.setAttribute('title', 'Logo do console do UOL Tag Manager');
          var h1 = document.createElement('h1');
          h1.innerHTML = 'UOL Tag Manager';
          anchor.appendChild(h1);
          return anchor;
        };
        $private.createRepositoryInfo = function (codRepository, version) {
          var repositoryInfo = $private.createHeaderSubDivision();
          var repositoryName = $private.createRepositoryName('Estilo VivaBem Universa');
          codRepository = $private.createHeaderSubText(codRepository);
          version = $private.createHeaderSubText('Versão ' + version);
          version.style.marginLeft = '28px';
          repositoryInfo.innerHTML =
            repositoryName.outerHTML + '-' + codRepository.outerHTML + version.outerHTML;
          repositoryInfo.style.position = 'absolute';
          repositoryInfo.style.left = Math.round(window.innerWidth / 3) + 'px';
          repositoryInfo.style.marginRight = '40px';
          return repositoryInfo;
        };
        $private.createRepositoryName = function (name) {
          var h2 = document.createElement('h2');
          h2.style.margin = '0px 5px 0px 0px';
          h2.style.padding = '0px';
          h2.style.fontWeight = 'lighter';
          h2.style.display = 'inline';
          h2.style.color = '#757575';
          h2.style.fontSize = '27px';
          h2.innerHTML = name;
          return h2;
        };
        $private.createHeaderSubText = function (innerText) {
          var h4 = document.createElement('h4');
          h4.style.margin = '0px 0px 0px 5px';
          h4.style.padding = '0px';
          h4.style.display = 'inline';
          h4.style.fontWeight = 'lighter';
          h4.style.color = '#757575';
          h4.style.fontSize = '17px';
          h4.innerHTML = innerText;
          return h4;
        };
        $private.createLogContainer = function () {
          var logContainer = document.createElement('div');
          logContainer.style.overflowX = 'hidden';
          logContainer.style.overflowY = 'auto';
          logContainer.style.height = Math.round(window.innerHeight / 3) - 49 + 'px';
          logContainer.setAttribute('class', 'logContainer');
          var table = document.createElement('table');
          table.style.width = '100%';
          table.style.textAlign = 'left';
          table.style.borderCollapse = 'collapse';
          table.style.marginTop = '15px';
          table.appendChild($private.createThead());
          table.appendChild($private.createTbody());
          logContainer.appendChild(table);
          return logContainer;
        };
        $private.createThead = function () {
          var thead = document.createElement('thead');
          thead.style.backgroundColor = '#FAFAFA';
          var headers = ['', 'Nome da Tag', 'Módulo', 'Mensagem', 'Tempo de execução'];
          for (var i = 0, length = headers.length; i < length; i++) {
            var th = document.createElement('th');
            th.style.fontWeight = 'lighter';
            th.style.color = '#757575';
            th.style.padding = '5px 0px';
            th.style.fontSize = '17px';
            th.innerHTML = headers[i];
            thead.appendChild(th);
          }
          return thead;
        };
        $private.createTbody = function () {
          var tbody = document.createElement('tbody');
          tbody.setAttribute('class', 'log-messages');
          return tbody;
        };
        $private.createCloseButton = function (codRepository) {
          var anchor = document.createElement('a');
          anchor.style.backgroundImage = "url('//imguol.com.br/tag-manager/icons-sprite.png')";
          anchor.style.backgroundPosition = '-102px -49px';
          anchor.style.backgroundRepeat = 'no-repeat';
          anchor.style.height = '15px';
          anchor.style.width = '15px';
          anchor.style.display = 'inline-block';
          anchor.style.position = 'absolute';
          anchor.style.right = '12px';
          anchor.style.marginTop = '14px';
          anchor.style.cursor = 'pointer';
          anchor.setAttribute('title', 'Fechar o console do UOL Tag Manager');
          $private.applyEventClosed(anchor, codRepository);
          return anchor;
        };
        $private.applyEventClosed = function (element, codRepository) {
          var methodListener = document.addEventListener ? 'addEventListener' : 'attachEvent';
          var nameEvent = document.addEventListener ? 'click' : 'onclick';
          element[methodListener](nameEvent, function (e) {
            e.preventDefault();
            e.stopPropagation();
            $private.close(codRepository);
          });
        };
        $private.createControlButton = function (codRepository) {
          var ctrlButton = document.createElement('a');
          ctrlButton.style.backgroundImage = 'url(//imguol.com.br/tag-manager/icons-sprite.png)';
          ctrlButton.style.backgroundPosition = '-122px -49px';
          ctrlButton.style.backgroundRepeat = 'no-repeat';
          ctrlButton.style.height = '25px';
          ctrlButton.style.width = '25px';
          ctrlButton.style.display = 'inline-block';
          ctrlButton.style.position = 'absolute';
          ctrlButton.style.right = '30px';
          ctrlButton.style.marginTop = '14px';
          ctrlButton.style.cursor = 'pointer';
          ctrlButton.className = 'maximized';
          ctrlButton.setAttribute('title', 'Minimizar o console do UOL Tag Manager');
          $private.applyEventControlButton(ctrlButton, codRepository);
          return ctrlButton;
        };
        $private.applyEventControlButton = function (element, codRepository) {
          var methodListener = document.addEventListener ? 'addEventListener' : 'attachEvent';
          var nameEvent = document.addEventListener ? 'click' : 'onclick';
          element[methodListener](nameEvent, function (event) {
            event.preventDefault();
            event.stopPropagation();
            $private.controlConsole(event.target, codRepository);
          });
        };
        $private.close = function (codRepository) {
          var mainContainer = document.getElementById(codRepository);
          if (mainContainer) {
            mainContainer.style.display = 'none';
          }
          document.cookie =
            $private.cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
        };
        $private.controlConsole = function (target, codRepository) {
          var className = target.className;
          var mainContainer = document.getElementById(codRepository);
          if (!mainContainer) {
            return false;
          }
          target.classList.remove(className);
          if (className === 'minimized') {
            mainContainer.style.height = Math.round(window.innerHeight / 3) + 'px';
            target.classList.add('maximized');
            target.style.backgroundPosition = '-122px -49px';
            target.setAttribute('title', 'Minimizar o console do UOL Tag Manager');
          } else {
            if (className === 'maximized') {
              mainContainer.style.height = '50px';
              target.classList.add('minimized');
              target.style.backgroundPosition = '-78px -49px';
              target.setAttribute('title', 'Maximizar o console do UOL Tag Manager');
            } else {
              return false;
            }
          }
        };
        $public.append = function (namTag, namespace, message, executionTime, messageType) {
          var logContainer = $private.getLogContainer();
          if (!logContainer) {
            return false;
          }
          if (!$private.isValidLog(namTag, namespace, message, executionTime, messageType)) {
            return false;
          }
          logContainer.appendChild(
            $private.createLogLine(namTag, namespace, message, executionTime, messageType)
          );
          return true;
        };
        $private.createLogLine = function (
          namTag,
          namespace,
          message,
          executionTime,
          messageType
        ) {
          var logLine = document.createElement('tr');
          logLine.style.border = 'solid 0.5px #AAAAAA';
          logLine.style.backgroundColor = '#FFFFFF';
          var statusIcon = $private.createLogTd($private.createStatusIcon(messageType));
          statusIcon.style.padding = '10px';
          logLine.appendChild(statusIcon);
          logLine.appendChild($private.createLogTd(namTag));
          logLine.appendChild($private.createLogTd(namespace));
          logLine.appendChild($private.createLogTd(message));
          logLine.appendChild($private.createLogTd(executionTime + ' ms'));
          return logLine;
        };
        $private.getLogContainer = function () {
          if (!$private.container) {
            return;
          }
          var container = $private.findChildByClass($private.container, 'logContainer');
          var tbody = $private.findChildByClass(container.firstChild, 'log-messages');
          if (!tbody) {
            return;
          }
          return tbody;
        };
        $private.findChildByClass = function (element, className) {
          if (!element) {
            return;
          }
          var childNodes = element.childNodes;
          for (var i = 0, length = childNodes.length; i < length; i++) {
            var classes = childNodes[i].getAttribute('class');
            if (classes && classes.indexOf(className) > -1) {
              return childNodes[i];
            }
          }
          return;
        };
        $private.isValidLog = function (namTag, namespace, message, executionTime, messageType) {
          if (!$private.typeValidator.isString(namTag)) {
            return false;
          }
          if (!$private.typeValidator.isString(namespace)) {
            return false;
          }
          if (!$private.typeValidator.isString(message)) {
            return false;
          }
          if (!$private.typeValidator.isNumber(executionTime)) {
            return false;
          }
          if (!$private.isValidMessageType(messageType)) {
            return false;
          }
          return true;
        };
        $private.isValidMessageType = function (messageType) {
          if (!$private.typeValidator.isString(messageType)) {
            return false;
          }
          messageType = messageType.toLocaleLowerCase();
          if (messageType === 'error') {
            return true;
          }
          if (messageType === 'warn') {
            return true;
          }
          if (messageType === 'success') {
            return true;
          }
          return false;
        };
        $private.createStatusIcon = function (messageType) {
          var i = document.createElement('i');
          i.style.backgroundImage = 'url(//imguol.com.br/tag-manager/icons-sprite.png)';
          i.style.backgroundPosition = $private.getStatusIconPosition(messageType);
          i.style.width = '20px';
          i.style.height = '20px';
          i.style.display = 'block';
          i.style.backgroundRepeat = 'no-repeat';
          return i.outerHTML;
        };
        $private.getStatusIconPosition = function (messageType) {
          messageType = messageType.toLocaleLowerCase();
          if (messageType == 'success') {
            return '-55px -49px';
          }
          if (messageType == 'warn') {
            return '-26px -49px';
          }
          if (messageType == 'error') {
            return '-1px -49px';
          }
        };
        $private.createLogTd = function (innerHTML) {
          var td = document.createElement('td');
          td.style.fontWeight = 'lighter';
          td.style.color = '#757575';
          td.style.fontSize = '17px';
          td.style.padding = '10px 0px';
          td.innerHTML = innerHTML;
          return td;
        };
        return $public.__constructor(codRepository, version);
      }
      function TagManager (nameSpace, codRepository, version) {
        var $private = {};
        var $public = this;
        $public.logs = new Logs();
        $public.logs.setPrefix('UOLPD.TagManager');
        $private.validator = new TypeValidator();
        $private.versionManager = new VersionManager();
        $public.trackManager = new TrackManager();
        $public.trackManager.setModuleName('core');
        $private.tagController = new TagController();
        $public.queryString = new QueryString();
        $private.cookieUtils = new CookieUtils();
        $private.dataLayer = new DataLayer();
        $private.uniqueId = new UniqueId();
        $private.version = '${parent.version}';
        $private.triggerQueue = [];
        $public.init = function (tags) {
          $private.timeStampInit = Date.now();
          $public.trackManager.trackSuccess('Execucoes Iniciadas');
          $private.trackExecution();
          $private.startTMConsole();
          $private.dataLayer.createDataLayer();
          if (!$private.validator.isArray(tags)) {
            return false;
          }
          if ($private.versionManager.specificVersionWasRequested()) {
            return $private.versionManager.setSpecificVersion();
          }
          tags = tags.concat(defaultTags);
          $private.cloneTriggerQueue();
          return $private.createModules(tags);
        };
        $private.trackExecution = function () {
          var trackAccounts = ['552', '553', '670', '1010'];
          var repAccount = '26';
          if (trackAccounts.indexOf(repAccount) >= 0) {
            $public.trackManager.trackExecution();
          }
        };
        $private.cloneTriggerQueue = function () {
          var triggerUOLTM = window.triggerUOLTM;
          if ($private.validator.isArray(triggerUOLTM)) {
            while (triggerUOLTM.length) {
              $private.triggerQueue.push(triggerUOLTM.shift());
            }
          }
          window.triggerUOLTM = $private.triggerUOLTM;
          window.triggerUOLTM.push = $private.pushTrigger;
        };
        $private.createModules = function (tags) {
          var result = true;
          if (tags.length === 0) {
            return false;
          }
          while (tags.length) {
            $private.tagController.addEvents(tags.shift());
          }
          $private.tagController.triggerEvents('autostart');
          $private.triggerOnDocEvents();
          $private.updateEvents();
          $public.trackManager.trackSuccess('Execucoes Finalizadas');
          var executionTime = $private.calculateTimeSpent();
          $public.logs.debug('Tempo de execuçao: ' + executionTime);
          $public.trackManager.trackCustomObj($private.getExecutionMetrics(executionTime));
          return result;
        };
        $private.calculateTimeSpent = function () {
          return Date.now() - $private.timeStampInit;
        };
        $private.getExecutionMetrics = function (executionTime) {
          var metrics = {};
          metrics.measures = {};
          metrics.groups = {};
          metrics.measures.executionTime = executionTime;
          $private.addTime(metrics);
          return metrics;
        };
        $private.addTime = function (metrics) {
          if (metrics.measures.executionTime < 0 || metrics.measures.executionTime > 1000) {
            metrics.measures.OutsideTime = 1;
            metrics.groups.groupType = 2;
          } else {
            metrics.measures.Execution = 1;
            metrics.groups.groupType = 1;
          }
        };
        $private.triggerOnDocEvents = function () {
          if (document.readyState !== 'loading' && !$private.readyTriggered) {
            $private.tagController.triggerEvents('onready');
            $private.readyTriggered = true;
          }
          if (document.readyState === 'complete') {
            $private.tagController.triggerEvents('onload');
            return;
          }
          document.addEventListener('readystatechange', function () {
            if (document.readyState === 'complete') {
              $private.tagController.triggerEvents('onload');
            }
            if (document.readyState !== 'loading' && !$private.readyTriggered) {
              $private.readyTriggered = true;
              $private.tagController.triggerEvents('onready');
            }
          });
        };
        $private.updateEvents = function () {
          while ($private.triggerQueue.length) {
            $private.pushTrigger($private.triggerQueue.shift());
          }
        };
        $private.pushTrigger = function (trigger) {
          if ($private.validator.isObject(trigger)) {
            $private.triggerUOLTM(trigger.eventName);
            return;
          }
          $private.triggerUOLTM(trigger);
        };
        $private.triggerUOLTM = function (eventType) {
          if (!$private.validator.isString(eventType)) {
            $public.logs.warn('O gatilho solicitado deve ser uma string');
            return;
          }
          if (eventType === 'onload') {
            $public.logs.warn('O gatilho solicitado não pode ser do tipo "onload"');
            return;
          }
          if (eventType === 'autostart') {
            $public.logs.warn('O gatilho solicitado não pode ser do tipo "autostart"');
            return;
          }
          if (eventType === 'onready') {
            $public.logs.warn('O gatilho solicitado não pode ser do tipo "onready"');
            return;
          }
          $private.tagController.triggerEvents(eventType);
        };
        $public.tagsHistory = function (tagName) {
          return $private.tagController.getTriggerHistory(tagName);
        };
        $private.startTMConsole = function () {
          var queryString = $public.queryString.getValue('uoltm_console');
          var repositoryCookie = $private.cookieUtils.getItem('uoltm_version');
          if (queryString === codRepository || repositoryCookie === codRepository) {
            tmConsole = new TMConsole(codRepository, version);
          }
        };
      }
      var nameSpace = new NameSpace().create();
      nameSpace['5nzulr'] = nameSpace['5nzulr'] || {};
      nameSpace['5nzulr'].version = '868';
      var tagManager = new TagManager(nameSpace, '5nzulr', '868');
      nameSpace.trigger = tagManager.trigger;
      tagManager.init([
        {
          module: 'Prebid',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              "(function (){ try {\t \tif (typeof window.Config === 'object' && typeof Config.plataforma === 'string') {return Config.plataforma;} \tif (typeof window.config === 'object' && typeof config.platform === 'string') {return config.platform;} \tif (!TM.Config) {return 'web';} \tif (typeof TM.Config === 'object' && typeof TM.Config.platform === 'string') {return TM.Config.platform;} \treturn 'web'; \t} \tcatch(err) {     return 'web'; \t}\t } )() != 'web'",
            ],
          },
          events: ['autostart'],
          config: {
            bids:
              "[{\n    code: 'banner-responsive-horizontal-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[728,90],[970, 90],[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-top-horizontal-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[728,90],[970, 90],[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-top-vertical-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[300,600],[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-vertical-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[300,600],[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-horizontal-2',\n    mediaTypes: {\n        banner: {\n            sizes: [[728,90],[970, 90],[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-vertical-2',\n    mediaTypes: {\n        banner: {\n            sizes: [[300,600],[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-horizontal-3',\n    mediaTypes: {\n        banner: {\n            sizes: [[728,90],[970, 90],[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-vertical-3',\n    mediaTypes: {\n        banner: {\n            sizes: [[300,600],[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-horizontal-4',\n    mediaTypes: {\n        banner: {\n            sizes: [[728,90],[970, 90],[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-vertical-4',\n    mediaTypes: {\n        banner: {\n            sizes: [[300,600],[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-horizontal-5',\n    mediaTypes: {\n        banner: {\n            sizes: [[728,90],[970, 90],[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n},\n{\n    code: 'banner-responsive-vertical-5',\n    mediaTypes: {\n        banner: {\n            sizes: [[300,600],[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params: {\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867825\n        }\n    }]\n}]\n",
            prebidTimeout: '1500',
          },
          name: 'Prebid - Estilo',
        },
        {
          module: 'Prebid',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/80735/)",
              "(function()  \t{     try {           \tvar isMobile = {              \tAndroid: function() \t{                 return navigator.userAgent.match(/Android/i);\t},              \tBlackBerry: function() {                 return navigator.userAgent.match(/BlackBerry/i);\t},              \tiOS: function() {                 return navigator.userAgent.match(/iPhone|iPad|iPod/i);             }, \tOpera: function() {                 return navigator.userAgent.match(/Opera Mini/i);             }, \tWindows: function() {                 return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);         \t},              \tany: function() {                 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());       }          \t};                   \tif( isMobile.any() )             return 'true';          \telse             return 'false';     } catch(e){         return 'false';     }  \t})() == 'false'",
              "(function (){ try {\t \tif (typeof window.Config === 'object' && typeof Config.plataforma === 'string') {return Config.plataforma;} \tif (typeof window.config === 'object' && typeof config.platform === 'string') {return config.platform;} \tif (!TM.Config) {return 'web';} \tif (typeof TM.Config === 'object' && typeof TM.Config.platform === 'string') {return TM.Config.platform;} \treturn 'web'; \t} \tcatch(err) {     return 'web'; \t}\t } )() == 'web'",
            ],
          },
          events: ['autostart'],
          config: {
            bids:
              "[{\n    code: 'banner-responsive-horizontal-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[300, 50]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867919\n            }\n        }\n    ]\n},\n{\n    code: 'banner-responsive-horizontal-2',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[300, 50],[320, 100],[300, 100]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867919\n            }\n        }\n    ]\n},\n{\n    code: 'banner-responsive-horizontal-3',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[300, 50],[320, 100],[300, 100]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867919\n            }\n        }\n    ]\n},\n{\n    code: 'banner-responsive-top-horizontal-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[300, 50]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867919\n            }\n        }\n    ]\n},\n{\n    code: 'banner-responsive-top-vertical-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867919\n            }\n        }\n    ]\n},\n{\n    code: 'banner-responsive-vertical-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867919\n            }\n        }\n    ]\n},\n/* {\n            code: 'banner-native-mais_noticias-home-area-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false\n                    },\n                    title: {\n                        required: true\n                    },\n                    sponsoredBy: {\n                        required: false\n                    },\n                    clickUrl: {\n                        required: true\n                    },\n                    body: {\n                        required: false\n                    },\n                    icon: {\n                        required: false\n                    },\n                    cta: {\n                        required: false\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-mais_lidas-internas-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false\n                    },\n                    title: {\n                        required: true\n                    },\n                    sponsoredBy: {\n                        required: false\n                    },\n                    clickUrl: {\n                        required: true\n                    },\n                    body: {\n                        required: false\n                    },\n                    icon: {\n                        required: false\n                    },\n                    cta: {\n                        required: false\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    }, */\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-2',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-3',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-4',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-2',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-3',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-4',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-5',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-6',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-7',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-8',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-9',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n{\n    code: 'in-article',\n    mediaTypes: {\n        video: {\n            playerSize: [480, 360],\n            context: 'instream'\n        }\n    },\n    bids: [{\n        bidder: 'appnexus',\n        params: {\n            placementId: 16556833,\n            video: {\n                skippable: false,\n                playback_method: ['auto_play_sound_off']\n            }\n        }\n    }]\n}]",
            prebidTimeout: '3000',
          },
          name: 'Prebid - Viva Bem - Mobile',
        },
        {
          module: 'Prebid',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/80735/)",
              "(function()  \t{     try {           \tvar isMobile = {              \tAndroid: function() \t{                 return navigator.userAgent.match(/Android/i);\t},              \tBlackBerry: function() {                 return navigator.userAgent.match(/BlackBerry/i);\t},              \tiOS: function() {                 return navigator.userAgent.match(/iPhone|iPad|iPod/i);             }, \tOpera: function() {                 return navigator.userAgent.match(/Opera Mini/i);             }, \tWindows: function() {                 return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);         \t},              \tany: function() {                 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());       }          \t};                   \tif( isMobile.any() )             return 'true';          \telse             return 'false';     } catch(e){         return 'false';     }  \t})() == 'true'",
              "(function (){ try {\t \tif (typeof window.Config === 'object' && typeof Config.plataforma === 'string') {return Config.plataforma;} \tif (typeof window.config === 'object' && typeof config.platform === 'string') {return config.platform;} \tif (!TM.Config) {return 'web';} \tif (typeof TM.Config === 'object' && typeof TM.Config.platform === 'string') {return TM.Config.platform;} \treturn 'web'; \t} \tcatch(err) {     return 'web'; \t}\t } )() != 'web'",
              'document.location.href.match(/rubicon_test/)',
            ],
          },
          events: ['autostart'],
          config: {
            bids:
              "[{\n    code: 'banner-responsive-horizontal-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[728, 90],[970, 90],[970, 250]]\n        },\n        native: {\n            image: {\n                sizes: [[728, 90],[970, 90],[970, 250]]\n            }\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867919\n        }\n    }]\n},\n{\n    code: 'banner-responsive-horizontal-2',\n    mediaTypes: {\n        banner: {\n            sizes: [[728, 90],[970, 90],[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867919\n        }\n    }]\n},\n{\n    code: 'banner-responsive-horizontal-3',\n    mediaTypes: {\n        banner: {\n            sizes: [[728, 90],[970, 90],[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867919\n        }\n    }]\n},\n{\n    code: 'banner-responsive-top-horizontal-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[728, 90],[970, 90],[970, 250]]\n        },\n        native: {\n            image: {\n                sizes: [[728, 90],[970, 90],[970, 250]]\n            }\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867919\n        }\n    }]\n},\n{\n    code: 'banner-responsive-top-vertical-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 600],[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867919\n        }\n    }]\n},\n{\n    code: 'banner-responsive-vertical-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 600],[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867919\n        }\n    }]\n},\n/* {\n            code: 'banner-native-mais_noticias-home-area-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false\n                    },\n                    title: {\n                        required: true\n                    },\n                    sponsoredBy: {\n                        required: false\n                    },\n                    clickUrl: {\n                        required: true\n                    },\n                    body: {\n                        required: false\n                    },\n                    icon: {\n                        required: false\n                    },\n                    cta: {\n                        required: false\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-mais_lidas-internas-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false\n                    },\n                    title: {\n                        required: true\n                    },\n                    sponsoredBy: {\n                        required: false\n                    },\n                    clickUrl: {\n                        required: true\n                    },\n                    body: {\n                        required: false\n                    },\n                    icon: {\n                        required: false\n                    },\n                    cta: {\n                        required: false\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    }, */\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-2',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-3',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-4',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-2',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-3',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-4',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-5',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-6',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-7',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-8',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-9',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077074,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n{\n    code: 'in-article',\n    mediaTypes: {\n        video: {\n            playerSize: [480, 360],\n            context: 'instream'\n        }\n    },\n    bids: [{\n        bidder: 'appnexus',\n        params: {\n            placementId: 16556833,\n            video: {\n                skippable: false,\n                playback_method: ['auto_play_sound_off']\n            }\n        }\n    }]\n}]",
            prebidTimeout: '3000',
          },
          name: 'Prebid - Viva Bem - Desktop',
        },
        {
          module: 'Prebid',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              "(function()  \t{     try {           \tvar isMobile = {              \tAndroid: function() \t{                 return navigator.userAgent.match(/Android/i);\t},              \tBlackBerry: function() {                 return navigator.userAgent.match(/BlackBerry/i);\t},              \tiOS: function() {                 return navigator.userAgent.match(/iPhone|iPad|iPod/i);             }, \tOpera: function() {                 return navigator.userAgent.match(/Opera Mini/i);             }, \tWindows: function() {                 return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);         \t},              \tany: function() {                 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());       }          \t};                   \tif( isMobile.any() )             return 'true';          \telse             return 'false';     } catch(e){         return 'false';     }  \t})() == 'false'",
              "(function (){ try {\t \tif (typeof window.Config === 'object' && typeof Config.plataforma === 'string') {return Config.plataforma;} \tif (typeof window.config === 'object' && typeof config.platform === 'string') {return config.platform;} \tif (!TM.Config) {return 'web';} \tif (typeof TM.Config === 'object' && typeof TM.Config.platform === 'string') {return TM.Config.platform;} \treturn 'web'; \t} \tcatch(err) {     return 'web'; \t}\t } )() == 'web'",
            ],
          },
          events: ['autostart'],
          config: {
            bids:
              "[{\n    code: 'banner-responsive-horizontal-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[300, 50]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867865\n            }\n        }\n    ]\n},\n{\n    code: 'banner-responsive-horizontal-2',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[300, 50]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867865\n            }\n        }\n    ]\n},\n{\n    code: 'banner-responsive-horizontal-3',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[300, 50]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867865\n            }\n        }\n    ]\n},\n{\n    code: 'banner-responsive-top-horizontal-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[300, 50]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867865\n            }\n        }\n    ]\n},\n{\n    code: 'banner-responsive-top-vertical-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867865\n            }\n        }\n    ]\n},\n{\n    code: 'banner-responsive-vertical-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [\n        {\n            bidder: 'rubicon',\n            params:{\n                accountId: 11976,\n                siteId: 42412,\n                zoneId: 180838\n            }\n        },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 12867865\n            }\n        }\n    ]\n},\n/* {\n            code: 'banner-native-mais_noticias-home-area-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false\n                    },\n                    title: {\n                        required: true\n                    },\n                    sponsoredBy: {\n                        required: false\n                    },\n                    clickUrl: {\n                        required: true\n                    },\n                    body: {\n                        required: false\n                    },\n                    icon: {\n                        required: false\n                    },\n                    cta: {\n                        required: false\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-mais_lidas-internas-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false\n                    },\n                    title: {\n                        required: true\n                    },\n                    sponsoredBy: {\n                        required: false\n                    },\n                    clickUrl: {\n                        required: true\n                    },\n                    body: {\n                        required: false\n                    },\n                    icon: {\n                        required: false\n                    },\n                    cta: {\n                        required: false\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    }, */\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-2',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-3',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-4',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-2',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-3',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-4',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-5',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-6',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-7',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-8',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-9',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n{\n    code: 'in-article',\n    mediaTypes: {\n        video: {\n            playerSize: [480, 360],\n            context: 'instream'\n        }\n    },\n    bids: [{\n        bidder: 'appnexus',\n        params: {\n            placementId: 16556783,\n            video: {\n                skippable: false,\n                playback_method: ['auto_play_sound_off']\n            }\n        }\n    }]\n}]",
            prebidTimeout: '3000',
          },
          name: 'Prebid - Universa - Mobile',
        },
        {
          module: 'Prebid',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              "(function()  \t{     try {           \tvar isMobile = {              \tAndroid: function() \t{                 return navigator.userAgent.match(/Android/i);\t},              \tBlackBerry: function() {                 return navigator.userAgent.match(/BlackBerry/i);\t},              \tiOS: function() {                 return navigator.userAgent.match(/iPhone|iPad|iPod/i);             }, \tOpera: function() {                 return navigator.userAgent.match(/Opera Mini/i);             }, \tWindows: function() {                 return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);         \t},              \tany: function() {                 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());       }          \t};                   \tif( isMobile.any() )             return 'true';          \telse             return 'false';     } catch(e){         return 'false';     }  \t})() == 'true'",
              "(function (){ try {\t \tif (typeof window.Config === 'object' && typeof Config.plataforma === 'string') {return Config.plataforma;} \tif (typeof window.config === 'object' && typeof config.platform === 'string') {return config.platform;} \tif (!TM.Config) {return 'web';} \tif (typeof TM.Config === 'object' && typeof TM.Config.platform === 'string') {return TM.Config.platform;} \treturn 'web'; \t} \tcatch(err) {     return 'web'; \t}\t } )() != 'web'",
            ],
          },
          events: ['autostart'],
          config: {
            bids:
              "[{\n    code: 'banner-responsive-horizontal-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[728, 90],[970, 90],[970, 250]]\n        },\n        native: {\n            image: {\n                sizes: [[320, 50],[728, 90],[970, 90],[970, 250]]\n            }\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867865\n        }\n    }]\n},\n{\n    code: 'banner-responsive-horizontal-2',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[728, 90],[970, 90],[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867865\n        }\n    }]\n},\n{\n    code: 'banner-responsive-horizontal-3',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[728, 90],[970, 90],[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867865\n        }\n    }]\n},\n{\n    code: 'banner-responsive-top-horizontal-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[320, 50],[728, 90],[970, 90],[970, 250]]\n        },\n        native: {\n            image: {\n                sizes: [[320, 50],[728, 90],[970, 90],[970, 250]]\n            }\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867865\n        }\n    }]\n},\n{\n    code: 'banner-responsive-top-vertical-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 600],[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867865\n        }\n    }]\n},\n{\n    code: 'banner-responsive-vertical-1',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 600],[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 42412,\n            zoneId: 180838\n        }\n    },{\n        bidder: 'appnexus',\n        params: {\n            placementId: 12867865\n        }\n    }]\n},\n/* {\n            code: 'banner-native-mais_noticias-home-area-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false\n                    },\n                    title: {\n                        required: true\n                    },\n                    sponsoredBy: {\n                        required: false\n                    },\n                    clickUrl: {\n                        required: true\n                    },\n                    body: {\n                        required: false\n                    },\n                    icon: {\n                        required: false\n                    },\n                    cta: {\n                        required: false\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-mais_lidas-internas-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false\n                    },\n                    title: {\n                        required: true\n                    },\n                    sponsoredBy: {\n                        required: false\n                    },\n                    clickUrl: {\n                        required: true\n                    },\n                    body: {\n                        required: false\n                    },\n                    icon: {\n                        required: false\n                    },\n                    cta: {\n                        required: false\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    }, */\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-2',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-3',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'responsive-vitrine-publicidade-vitrine-1-ad-4',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-2',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-3',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-4',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-5',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-6',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-7',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-8',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n    {\n            code: 'banner-native-tudosobre-9',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: true,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 14077060,\n                    allowSmallerSizes: true\n                }\n            }]\n    },\n{\n    code: 'in-article',\n    mediaTypes: {\n        video: {\n            playerSize: [480, 360],\n            context: 'instream'\n        }\n    },\n    bids: [{\n        bidder: 'appnexus',\n        params: {\n            placementId: 16556783,\n            video: {\n                skippable: false,\n                playback_method: ['auto_play_sound_off']\n            }\n        }\n    }]\n}]",
            prebidTimeout: '3000',
          },
          name: 'Prebid - Universa - Desktop',
        },
        {
          module: 'OffersBlock',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: ["(window.top!=self).toString() == 'true'"],
          },
          events: ['onload'],
          config: {
            bgColor: 'FFFFFF',
            id: 'responsive-vitrine-publicidade',
            model: '{"model": "vitrine", "width": "220", "height": "250"}',
            buttonBorderColor: 'aa183f',
            numAds: '4',
            coddisplaysupplier: '51eed576aff54be8b1311d90735f36a6',
            titleColor: 'dd1d50',
            blockHeaderColor: '000000',
            format: '{"width": "1170px", "height": "250px"}',
            descrColor: '333333',
            buttonColor: 'c81c4a',
            blockBorderColor: 'FFFFFF',
          },
          name: 'DFP - Estilo - Nova barra de ofertas',
        },
        {
          module: 'OffersBlock',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: ["(window.top!=self).toString() == 'true'"],
          },
          events: ['onload'],
          config: {
            bgColor: 'FFFFFF',
            id: 'responsive-vitrine-publicidade',
            model: '{"model": "vitrine", "width": "220", "height": "250"}',
            buttonBorderColor: '99ffe3',
            buttonTextColor: '000cff',
            numAds: '4',
            coddisplaysupplier: '51eed576aff54be8b1311d90735f36a6',
            titleColor: '000cff',
            blockHeaderColor: '000000',
            format: '{"width": "1170px", "height": "250px"}',
            descrColor: '333333',
            buttonColor: 'bf9',
          },
          name: 'Nova barra de ofertas - Viva Bem',
        },
        {
          module: 'OffersBlock',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: ["(window.top!=self).toString() == 'true'"],
          },
          events: ['onload'],
          config: {
            bgColor: 'FFFFFF',
            id: 'responsive-vitrine-publicidade',
            model: '{"model": "vitrine", "width": "220", "height": "250"}',
            buttonBorderColor: 'e30044',
            arrowColor: 'e30044',
            numAds: '4',
            coddisplaysupplier: '51eed576aff54be8b1311d90735f36a6',
            titleColor: 'e30044',
            blockHeaderColor: '000000',
            format: '{"width": "1170px", "height": "250px"}',
            descrColor: '333333',
            buttonColor: 'e30044',
            blockBorderColor: 'e8e5d7',
          },
          name: 'Nova barra de ofertas - Universa',
        },
        {
          module: 'NativeAds',
          rules: {
            enable: [
              "(function (){ try {\t \tif (typeof window.Config === 'object' && typeof Config.plataforma === 'string') {return Config.plataforma;} \tif (typeof window.config === 'object' && typeof config.platform === 'string') {return config.platform;} \tif (!TM.Config) {return 'web';} \tif (typeof TM.Config === 'object' && typeof TM.Config.platform === 'string') {return TM.Config.platform;} \treturn 'web'; \t} \tcatch(err) {     return 'web'; \t}\t } )() == 'web'",
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            desLabel: 'responsive-native-home',
            shortTextLimit: null,
            markup:
              '<a href="%NATIVE_URL%" class="thumbnail media AdBox" title="%NATIVE_DESCRIPTION%" target="_blank">\n  <div class="thumbnail-image media-default media-small">\n      <figure class="no-adapt crop-300x200 figure">\n          <div class="image ">\n              <div class="placeholder">\n                  <img src="%NATIVE_IMG%" data-src="%NATIVE_IMG%" alt="%NATIVE_DESCRIPTION%" data-crop="{"xs":"615x300", "sm":"300x200"}" width="300" height="200" data-crazyload="loaded" class="loaded AdImage"> \n                  <i class="placeholder-mask" style="padding-bottom: 66.66666666666666%"></i>\n              </div>\n          </div>\n      </figure>\n        <span class="native-ad-chapeu-a">Conteúdo Publicitário</span>\n        <span class="media-position">\n          <span class="icon-default"></span>\n        </span>\n    </div>\n  <div class="thumbnail-text italic">\n    <span class="native-ad-chapeu-b">Conteúdo Publicitário</span>\n    <h5 class="h-headline">%NATIVE_TITLE%\n<i class="icon-single-arrow-right"></i></h5>\n    <p class="p-headline thumbnail-caption">%NATIVE_DESCRIPTION%</p>\n  </div>\n</a>',
            flagBehaviour: '1',
            replacementElement: '.responsive-native-home',
            before: null,
            container: '.responsive-native-home',
            urlMobile: [],
            coddisplaysupplier: '51eed576aff54be8b1311d90735f36a6',
            numAds: '1',
            styleTag:
              '@media screen and (min-width: 320px){\n\t.native-ad-chapeu-a {\n\t\tdisplay: none !important;\n\t}\n\n\t.native-ad-chapeu-b {\n\t\tdisplay: block !important;\n\t\tbackground: #1a1a1a;\n\t\tfont-size: 11px;\n\t\tline-height: 18px;\n\t\tcolor: #fff;\n\t\ttext-align: center;\n\t\tborder-radius: 4px;\n\t\tpadding: 2px 0px;\n    \t        width: 128px;\n\t        margin: 5px 0px 5px 0px;\n\t        height: 20px;\n                font-style: normal !important;\n\t}\n}\n\n@media screen and (min-width: 768px){\n\t.responsive-native-timeline .placeholder {\n\t\tmax-width: 270px !important;\n\t\tmax-height: 180px !important;\n\t\tdisplay: block !important;\n\t\toverflow: hidden;\n\t}\n\t.native-ad-chapeu-a {\n  \t\tdisplay: block !important;\n  \t\tbackground: #1a1a1a !important;\n  \t\tfont-size: 11px !important;\n  \t\tline-height: 18px !important;\n  \t\tcolor: #fff !important;\n  \t\ttext-align: center !important;\n  \t\tposition: absolute !important;\n  \t\ttop: 3px !important;\n  \t\tleft: 3px !important;\n  \t\tborder-radius: 4px !important;\n  \t\tpadding:0 10px !important;\n\t}\n\n\t.native-ad-chapeu-b {\n\t\tdisplay: none !important;\n\t}\n}\n\n.native-ad-chapeu-a,  {\n  display: block;\n  background: #1a1a1a;\n  font-size: 11px;\n  line-height: 18px;\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 4px;\n  padding:0 10px;\n}\n\n.native-ad-chapeu-b {\n\tdisplay: none;\n}\n\n.italic {\n\tfont-style: italic;\n}\n\n\n.AdBox .AdText {\n  color: #4c4c4c;\n  font-style: italic;\n}\n',
          },
          name: 'NATIVE - Home',
        },
        {
          module: 'NativeAds',
          rules: {
            enable: [
              "(function (){ try {\t \tif (typeof window.Config === 'object' && typeof Config.plataforma === 'string') {return Config.plataforma;} \tif (typeof window.config === 'object' && typeof config.platform === 'string') {return config.platform;} \tif (!TM.Config) {return 'web';} \tif (typeof TM.Config === 'object' && typeof TM.Config.platform === 'string') {return TM.Config.platform;} \treturn 'web'; \t} \tcatch(err) {     return 'web'; \t}\t } )() == 'mobile'",
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            desLabel: 'responsive-native-timeline',
            shortTextLimit: null,
            markup:
              '<a href="%NATIVE_URL%" class="thumbnail media AdBox" title="%NATIVE_DESCRIPTION%" target="_blank">\n  <div class="thumbnail-image media-default media-small">\n      <figure class="no-adapt crop-300x200 figure">\n          <div class="image ">\n              <div class="placeholder">\n                  <img src="%NATIVE_IMG%" data-src="%NATIVE_IMG%" alt="%NATIVE_DESCRIPTION%" data-crop="{"xs":"615x300", "sm":"300x200"}" width="300" height="200" data-crazyload="loaded" class="loaded AdImage"> \n                  <i class="placeholder-mask" style="padding-bottom: 66.66666666666666%"></i>\n              </div>\n          </div>\n      </figure>\n        <span class="native-ad-chapeu-a">Conteúdo Publicitário</span>\n        <span class="media-position">\n          <span class="icon-default"></span>\n        </span>\n    </div>\n  <div class="thumbnail-text italic">\n    <span class="native-ad-chapeu-b">Conteúdo Publicitário</span>\n    <h5 class="h-headline">%NATIVE_TITLE%\n<i class="icon-single-arrow-right"></i></h5>\n    <p class="p-headline thumbnail-caption">%NATIVE_DESCRIPTION%</p>\n  </div>\n</a>',
            flagBehaviour: '1',
            replacementElement: '.responsive-native-timeline',
            before: null,
            container: '.responsive-native-timeline',
            urlMobile: ['1'],
            coddisplaysupplier: '51eed576aff54be8b1311d90735f36a6',
            numAds: '1',
            styleTag:
              '@media screen and (min-width: 320px){\n\t.native-ad-chapeu-a {\n\t\tdisplay: none !important;\n\t}\n\n\t.native-ad-chapeu-b {\n\t\tdisplay: block !important;\n\t\tbackground: #1a1a1a;\n\t\tfont-size: 11px;\n\t\tline-height: 18px;\n\t\tcolor: #fff;\n\t\ttext-align: center;\n\t\tborder-radius: 4px;\n\t\tpadding: 2px 0px;\n    \t        width: 128px;\n\t        margin: 5px 0px 5px 120px;\n\t        height: 20px;\n                font-style: normal !important;\n\t}\n}\n\n@media screen and (min-width: 768px){\n\t.responsive-native-timeline .placeholder {\n\t\tmax-width: 270px !important;\n\t\tmax-height: 180px !important;\n\t\tdisplay: block !important;\n\t\toverflow: hidden;\n\t}\n\t.native-ad-chapeu-a {\n  \t\tdisplay: block !important;\n  \t\tbackground: #1a1a1a !important;\n  \t\tfont-size: 11px !important;\n  \t\tline-height: 18px !important;\n  \t\tcolor: #fff !important;\n  \t\ttext-align: center !important;\n  \t\tposition: absolute !important;\n  \t\ttop: 3px !important;\n  \t\tleft: 3px !important;\n  \t\tborder-radius: 4px !important;\n  \t\tpadding:0 10px !important;\n\t}\n\n\t.native-ad-chapeu-b {\n\t\tdisplay: none !important;\n\t}\n}\n\n.native-ad-chapeu-a,  {\n  display: block;\n  background: #1a1a1a;\n  font-size: 11px;\n  line-height: 18px;\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 4px;\n  padding:0 10px;\n}\n\n.native-ad-chapeu-b {\n\tdisplay: none;\n}\n\n.italic {\n\tfont-style: italic;\n}\n\n.AdBox .AdText {\n  color: #4c4c4c;\n  font-style: italic;\n}\n',
          },
          name: 'NATIVE - Timeline - Mobile',
        },
        {
          module: 'NativeAds',
          rules: {
            enable: [
              "(function (){ try {\t \tif (typeof window.Config === 'object' && typeof Config.plataforma === 'string') {return Config.plataforma;} \tif (typeof window.config === 'object' && typeof config.platform === 'string') {return config.platform;} \tif (!TM.Config) {return 'web';} \tif (typeof TM.Config === 'object' && typeof TM.Config.platform === 'string') {return TM.Config.platform;} \treturn 'web'; \t} \tcatch(err) {     return 'web'; \t}\t } )() == 'web'",
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            desLabel: 'responsive-native-timeline',
            shortTextLimit: null,
            markup:
              '<a href="%NATIVE_URL%" class="thumbnail media AdBox" title="%NATIVE_DESCRIPTION%" target="_blank">\n  <div class="thumbnail-image media-default media-small">\n      <figure class="no-adapt crop-300x200 figure">\n          <div class="image ">\n              <div class="placeholder">\n                  <img src="%NATIVE_IMG%" data-src="%NATIVE_IMG%" alt="%NATIVE_DESCRIPTION%" data-crop="{"xs":"615x300", "sm":"300x200"}" width="300" height="200" data-crazyload="loaded" class="loaded AdImage"> \n                  <i class="placeholder-mask" style="padding-bottom: 66.66666666666666%"></i>\n              </div>\n          </div>\n      </figure>\n        <span class="native-ad-chapeu-a">Conteúdo Publicitário</span>\n        <span class="media-position">\n          <span class="icon-default"></span>\n        </span>\n    </div>\n  <div class="thumbnail-text italic">\n    <span class="native-ad-chapeu-b">Conteúdo Publicitário</span>\n    <h5 class="h-headline">%NATIVE_TITLE%\n<i class="icon-single-arrow-right"></i></h5>\n    <p class="p-headline thumbnail-caption">%NATIVE_DESCRIPTION%</p>\n  </div>\n</a>',
            flagBehaviour: '1',
            replacementElement: '.responsive-native-timeline',
            before: null,
            container: '.responsive-native-timeline',
            urlMobile: [],
            coddisplaysupplier: '51eed576aff54be8b1311d90735f36a6',
            numAds: '1',
            styleTag:
              '@media screen and (min-width: 320px){\n\t.native-ad-chapeu-a {\n\t\tdisplay: none !important;\n\t}\n\n\t.native-ad-chapeu-b {\n\t\tdisplay: block !important;\n\t\tbackground: #1a1a1a;\n\t\tfont-size: 11px;\n\t\tline-height: 18px;\n\t\tcolor: #fff;\n\t\ttext-align: center;\n\t\tborder-radius: 4px;\n\t\tpadding: 2px 0px;\n    \t        width: 128px;\n\t        margin: 5px 0px 5px 120px;\n\t        height: 20px;\n                font-style: normal !important;\n\t}\n}\n\n@media screen and (min-width: 768px){\n\t.responsive-native-timeline .placeholder {\n\t\tmax-width: 270px !important;\n\t\tmax-height: 180px !important;\n\t\tdisplay: block !important;\n\t\toverflow: hidden;\n\t}\n\t.native-ad-chapeu-a {\n  \t\tdisplay: block !important;\n  \t\tbackground: #1a1a1a !important;\n  \t\tfont-size: 11px !important;\n  \t\tline-height: 18px !important;\n  \t\tcolor: #fff !important;\n  \t\ttext-align: center !important;\n  \t\tposition: absolute !important;\n  \t\ttop: 3px !important;\n  \t\tleft: 3px !important;\n  \t\tborder-radius: 4px !important;\n  \t\tpadding:0 10px !important;\n\t}\n\n\t.native-ad-chapeu-b {\n\t\tdisplay: none !important;\n\t}\n}\n\n.native-ad-chapeu-a,  {\n  display: block;\n  background: #1a1a1a;\n  font-size: 11px;\n  line-height: 18px;\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 4px;\n  padding:0 10px;\n}\n\n.native-ad-chapeu-b {\n\tdisplay: none;\n}\n\n.italic {\n\tfont-style: italic;\n}\n\n.AdBox .AdText {\n  color: #4c4c4c;\n  font-style: italic;\n}\n',
          },
          name: 'NATIVE - Timeline',
        },
        {
          module: 'NativeAds',
          rules: {
            enable: [
              "(function (){ try {\t \tif (typeof window.Config === 'object' && typeof Config.plataforma === 'string') {return Config.plataforma;} \tif (typeof window.config === 'object' && typeof config.platform === 'string') {return config.platform;} \tif (!TM.Config) {return 'web';} \tif (typeof TM.Config === 'object' && typeof TM.Config.platform === 'string') {return TM.Config.platform;} \treturn 'web'; \t} \tcatch(err) {     return 'web'; \t}\t } )() == 'mobile'",
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            desLabel: 'responsive-native-home',
            shortTextLimit: null,
            markup:
              '<a href="%NATIVE_URL%" class="thumbnail media AdBox" title="%NATIVE_DESCRIPTION%" target="_blank">\n  <div class="thumbnail-image media-default media-small">\n      <figure class="no-adapt crop-300x200 figure">\n          <div class="image ">\n              <div class="placeholder">\n                  <img src="%NATIVE_IMG%" data-src="%NATIVE_IMG%" alt="%NATIVE_DESCRIPTION%" data-crop="{"xs":"615x300", "sm":"300x200"}" width="300" height="200" data-crazyload="loaded" class="loaded AdImage"> \n                  <i class="placeholder-mask" style="padding-bottom: 66.66666666666666%"></i>\n              </div>\n          </div>\n      </figure>\n        <span class="native-ad-chapeu-a">Conteúdo Publicitário</span>\n        <span class="media-position">\n          <span class="icon-default"></span>\n        </span>\n    </div>\n  <div class="thumbnail-text italic">\n    <span class="native-ad-chapeu-b">Conteúdo Publicitário</span>\n    <h5 class="h-headline">%NATIVE_TITLE%\n<i class="icon-single-arrow-right"></i></h5>\n    <p class="p-headline thumbnail-caption">%NATIVE_DESCRIPTION%</p>\n  </div>\n</a>',
            flagBehaviour: '1',
            replacementElement: '.responsive-native-home',
            before: null,
            container: '.responsive-native-home',
            urlMobile: ['1'],
            coddisplaysupplier: '51eed576aff54be8b1311d90735f36a6',
            numAds: '1',
            styleTag:
              '@media screen and (min-width: 320px){\n\t.native-ad-chapeu-a {\n\t\tdisplay: none !important;\n\t}\n\n\t.native-ad-chapeu-b {\n\t\tdisplay: block !important;\n\t\tbackground: #1a1a1a;\n\t\tfont-size: 11px;\n\t\tline-height: 18px;\n\t\tcolor: #fff;\n\t\ttext-align: center;\n\t\tborder-radius: 4px;\n\t\tpadding: 2px 0px;\n    \t        width: 128px;\n\t        margin: 5px 0px 5px 0px;\n\t        height: 20px;\n                font-style: normal !important;\n\t}\n}\n\n@media screen and (min-width: 768px){\n\t.responsive-native-timeline .placeholder {\n\t\tmax-width: 270px !important;\n\t\tmax-height: 180px !important;\n\t\tdisplay: block !important;\n\t\toverflow: hidden;\n\t}\n\t.native-ad-chapeu-a {\n  \t\tdisplay: block !important;\n  \t\tbackground: #1a1a1a !important;\n  \t\tfont-size: 11px !important;\n  \t\tline-height: 18px !important;\n  \t\tcolor: #fff !important;\n  \t\ttext-align: center !important;\n  \t\tposition: absolute !important;\n  \t\ttop: 3px !important;\n  \t\tleft: 3px !important;\n  \t\tborder-radius: 4px !important;\n  \t\tpadding:0 10px !important;\n\t}\n\n\t.native-ad-chapeu-b {\n\t\tdisplay: none !important;\n\t}\n}\n\n.native-ad-chapeu-a,  {\n  display: block;\n  background: #1a1a1a;\n  font-size: 11px;\n  line-height: 18px;\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 4px;\n  padding:0 10px;\n}\n\n.native-ad-chapeu-b {\n\tdisplay: none;\n}\n\n.italic {\n\tfont-style: italic;\n}\n\n\n.AdBox .AdText {\n  color: #4c4c4c;\n  font-style: italic;\n}\n',
          },
          name: 'NATIVE - Home - Mobile',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ['document.location.href.match(/natura-beleza-nao-tem-idade/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-1',
            bannerHeight: '35',
            frequencyControl: [],
          },
          name: 'Conteudo Publicitario - Beleza não tem idade - 120x35 - 1',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ['document.location.href.match(/teste_outstream_google/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: ['forcePath'],
            nativeType: '0',
            bannerWidth: '640',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'false',
            bannerId: 'banner-640x480-area',
            bannerHeight: '480',
            frequencyControl: [],
          },
          name: '___Injetor Async - Outstream - Google',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-ultima-noticias-area',
            frequencyControl: [],
            deslabel: '1-native-ultimas-noticias',
          },
          name: 'Native de Oferta - Viva Bem - Ultimas Noticias',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-ultima-noticias-area',
            frequencyControl: [],
            deslabel: '1-native-ultimas-noticias',
          },
          name: 'Native de Oferta - Universa - Ultimas Noticias',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/estilo\\.uol\\.com\\.br\\/ao-vivo\\/2017\\/10\\/18\\/21-forum-da-longevidade-bradesco-seguros.htm(.*)?$/)',
              "universal_variable.page.tags.join(',').match(/79544/)",
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/inread/viva_bem/outstream',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-outstream-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Vivabem - Outstream',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              "universal_variable.page.tags.join(',').match(/80416/)",
              "universal_variable.page.tags.join(',').match(/80417/)",
              "universal_variable.page.tags.join(',').match(/80413/)",
              "universal_variable.page.tags.join(',').match(/80414/)",
              "universal_variable.page.tags.join(',').match(/80415/)",
              "universal_variable.page.tags.join(',').match(/80418/)",
              "universal_variable.page.tags.join(',').match(/80417/)",
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - VivaBem - Conexão TAGS - Selo 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/dieta\\-vegan\\-ajuda\\-a\\-emagrecer/)',
              "universal_variable.page.tags.join(',').match(/80666/)",
              "universal_variable.page.tags.join(',').match(/80735/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/alimentacao.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/^http(s):\\/\\/www\\.uol\\.com\\.br\\/vivabem\\/conexao\\-vivabem(\\/)?$/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/movimento.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/saude.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/videos.*/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/dieta\\-vegan\\-ajuda\\-a\\-emagrecer/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/alimentacao.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/movimento.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/saude.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/videos.*/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/dieta\\-vegan\\-ajuda\\-a\\-emagrecer/)',
              "universal_variable.page.tags.join(',').match(/80666/)",
              "universal_variable.page.tags.join(',').match(/80735/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/alimentacao.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/^http(s):\\/\\/www\\.uol\\.com\\.br\\/vivabem\\/conexao\\-vivabem(\\/)?$/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/movimento.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/saude.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/videos.*/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [728,0], [[728, 90]]; [970, 0], [[728, 90],[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/dieta\\-vegan\\-ajuda\\-a\\-emagrecer/)',
              'document.location.href.match(/conteudo\\-de\\-marca\\/bb\\-seguros\\-nutricao\\-personalizada/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/alimentacao.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/movimento.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/saude.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/videos.*/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/videos.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/videos',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Videos - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/videos.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/videos',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Videos - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/videos.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/videos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [728,0], [[728, 90]]; [970, 0], [[728, 90],[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Videos - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/videos.*/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/videos',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Videos - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/ultimas',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Ultimas Noticias - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/ultimas',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Ultimas Noticias - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/ultimas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [728,0], [[728, 90]]; [970, 0], [[728, 90],[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Ultimas Noticias - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/ultimas',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Ultimas Noticias - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79428/)"],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
            requestDelay: '1500',
          },
          name: 'DFP - Viva Bem - SmartFit - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/saude.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/saude',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Saude - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/saude.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/saude',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Saude - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/saude.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/saude',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [728,0], [[728, 90]]; [970, 0], [[728, 90],[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Saude - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/saude.*/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/saude',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Saude - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/capa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1',
            pos: 'bottom',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-mais_noticias-home',
            deslabel: '1-native-maisnoticias-home',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Native de Conteúdo - Viva Bem - Mais Noticias - Home',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1',
            pos: 'bottom',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-mais_lidas-internas',
            deslabel: '1-native-maislidas-internas',
            frequencyControl: [],
          },
          name: 'DFP - Viva Bem - Native de Conteúdo - Mais Lidas',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              "universal_variable.page.tags.join(',').match(/80416/)",
              "universal_variable.page.tags.join(',').match(/80417/)",
              "universal_variable.page.tags.join(',').match(/80413/)",
              "universal_variable.page.tags.join(',').match(/80414/)",
              "universal_variable.page.tags.join(',').match(/80415/)",
              "universal_variable.page.tags.join(',').match(/80418/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'native-ilha-conexao',
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1',
            pos: 'native-ilha-conexao',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-ilha-1',
            deslabel: '1-native-maisnoticias-home-ilha',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Viva Bem - Native de Conteúdo - Home - Ilha - Conexão',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-tudosobre',
            frequencyControl: [],
            deslabel: '1-native-tudosobre',
          },
          name: 'DFP - Viva Bem - Native - Tudo Sobre',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/movimento.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/movimento',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Movimento - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/movimento.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/movimento',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Movimento - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/movimento.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/movimento',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [728,0], [[728, 90]]; [970, 0], [[728, 90],[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Movimento - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/movimento.*/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/movimento',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Movimento - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80735/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Merck - Tag 80735 _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80735/)"],
            disable: [
              "(function()  \t{     try {           \tvar isMobile = {              \tAndroid: function() \t{                 return navigator.userAgent.match(/Android/i);\t},              \tBlackBerry: function() {                 return navigator.userAgent.match(/BlackBerry/i);\t},              \tiOS: function() {                 return navigator.userAgent.match(/iPhone|iPad|iPod/i);             }, \tOpera: function() {                 return navigator.userAgent.match(/Opera Mini/i);             }, \tWindows: function() {                 return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);         \t},              \tany: function() {                 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());       }          \t};                   \tif( isMobile.any() )             return 'true';          \telse             return 'false';     } catch(e){         return 'false';     }  \t})() == 'true'",
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [728,0], [[728, 90]]; [970, 0], [[728, 90],[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Merck - Tag 80735 _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80666/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Merck - Tag 80666 _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80666/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [728,0], [[728, 90]]; [970, 0], [[728, 90],[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Merck - Tag 80666 _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80735/)"],
            disable: [
              "(function()  \t{     try {           \tvar isMobile = {              \tAndroid: function() \t{                 return navigator.userAgent.match(/Android/i);\t},              \tBlackBerry: function() {                 return navigator.userAgent.match(/BlackBerry/i);\t},              \tiOS: function() {                 return navigator.userAgent.match(/iPhone|iPad|iPod/i);             }, \tOpera: function() {                 return navigator.userAgent.match(/Opera Mini/i);             }, \tWindows: function() {                 return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);         \t},              \tany: function() {                 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());       }          \t};                   \tif( isMobile.any() )             return 'true';          \telse             return 'false';     } catch(e){         return 'false';     }  \t})() == 'false'",
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [728,0], [[728, 90]]; [970, 0], [[728, 90],[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Merck - Mobile - Tag 80735 _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/longevidade',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Longevidade - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/longevidade',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Longevidade - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/longevidade',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[970,250],[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Longevidade - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/longevidade',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Longevidade - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/longevidade/capa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Longevidade - Capa - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/longevidade/capa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Longevidade - Capa - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/longevidade/capa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[970,250],[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Longevidade - Capa - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/longevidade/capa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Longevidade - Capa - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/longevidade/capa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
            requestDelay: '1500',
          },
          name: 'DFP - Viva Bem - Longevidade - Capa - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/78684/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Longevidade - Bradesco - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/78684/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Longevidade - Bradesco - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/78684/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[970,250],[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Longevidade - Bradesco - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/78684/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Longevidade - Bradesco - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
            ],
            disable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/longevidade',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
            requestDelay: '1500',
          },
          name: 'DFP - Viva Bem - Longevidade - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/estilo\\.uol\\.com\\.br\\/ao-vivo\\/2017\\/10\\/18\\/21-forum-da-longevidade-bradesco-seguros.htm(.*)?$/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[250, 250],[300, 250],[320, 50],[300, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'middle-2-2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-middle-2-horizontal-area',
            bannerHeight: '50',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Viva Bem - GERAL - horizontal-middle 2 Mobile',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79421/)"],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
            requestDelay: '1500',
          },
          name: 'DFP - Viva Bem - Essilor - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/equilibrio',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Equilibrio - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/equilibrio',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Equilibrio - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/equilibrio',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [728,0], [[728, 90]]; [970, 0], [[728, 90],[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Equilibrio - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80648/)"],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/equilibrio',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Equilibrio - Libbs - TAG 80648 - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
            ],
            disable: ["universal_variable.page.tags.join(',').match(/80648/)"],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/equilibrio',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Equilibrio - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ['document.location.href.match(/dieta\\-vegan\\-ajuda\\-a\\-emagrecer/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Dieta - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ['document.location.href.match(/dieta\\-vegan\\-ajuda\\-a\\-emagrecer/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Dieta - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ['document.location.href.match(/dieta\\-vegan\\-ajuda\\-a\\-emagrecer/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[970,250],[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Dieta - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ['document.location.href.match(/dieta\\-vegan\\-ajuda\\-a\\-emagrecer/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Dieta - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80664/)"],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Conteudo Publicitario - Sanofi Asma Grave - 80664',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              "universal_variable.page.tags.join(',').match(/80666/)",
              "universal_variable.page.tags.join(',').match(/80735/)",
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Conteudo Publicitario - Merck - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80586/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Viva Bem - Conteudo Publicitario - Especial Saúde Mental - Libbs',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/conteudo\\-de\\-marca\\/bb\\-seguros\\-nutricao\\-personalizada/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Conteudo Publicitario - BB Seguros - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s):\\/\\/www\\.uol\\.com\\.br\\/vivabem\\/conexao\\-vivabem(\\/)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[970,250],[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Conexão Viva Bem - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s):\\/\\/www\\.uol\\.com\\.br\\/vivabem\\/conexao\\-vivabem(\\/)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Conexão Viva Bem - Inspira _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              "universal_variable.page.tags.join(',').match(/80416/)",
              "universal_variable.page.tags.join(',').match(/80417/)",
              "universal_variable.page.tags.join(',').match(/80413/)",
              "universal_variable.page.tags.join(',').match(/80414/)",
              "universal_variable.page.tags.join(',').match(/80415/)",
              "universal_variable.page.tags.join(',').match(/80418/)",
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-selo-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Conexão TAGS - Selo 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/capa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Capa - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/capa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Capa - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/capa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[970,250],[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Capa - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/capa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Capa - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/capa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
            requestDelay: '1500',
          },
          name: 'DFP - Viva Bem - Capa - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/blogs-e-colunas.*/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/blogs_e_colunas',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Blogs e Colunas - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/aovivo.*/)',
            ],
            disable: ["universal_variable.page.tags.join(',').match(/78684/)"],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/ao_vivo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [728, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[970,250],[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Ao Vivo -_horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: { enable: ['document.location.href.match(/teste_selo/)'], disable: [] },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
          },
          name: 'DFP - Viva Bem - Ao Vivo - Teste - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/alimentacao.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/alimentacao',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Alimentação _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/alimentacao.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/alimentacao',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Alimentação _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/alimentacao.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/alimentacao',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - Alimentação _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/alimentacao.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/alimentacao',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem - Alimentação _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79315/)"],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/alimentacao',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Alimentação - Conteúdo Almond Breeze - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/alimentacao.*/)',
            ],
            disable: ["universal_variable.page.tags.join(',').match(/79315/)"],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem/alimentacao',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - Alimentação - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250], [250,250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top-2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-11',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - 300x250 top-2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250], [250,250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top-1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-10',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - 300x250 top-1',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/app=uol/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/estilo\\.uol\\.com\\.br\\/ao-vivo\\/2017\\/10\\/18\\/21-forum-da-longevidade-bradesco-seguros.htm(.*)?$/)',
              "universal_variable.page.tags.join(',').match(/79544/)",
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-300x250-top-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - 300x250 - Top - Artigo',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'instant-article-vivabem',
            isSingleRequest: 'False',
            forcePath: ['forcePath'],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-instant-article',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Viva Bem - 300x250 - Instant Article',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/hipertensao\\-resistente\\-quais\\-riscos\\-da\\-pressao\\-nao\\-baixar\\-com\\-tratamento/)',
              "universal_variable.page.tags.join(',').match(/80664/)",
              "universal_variable.page.tags.join(',').match(/80416/)",
              "universal_variable.page.tags.join(',').match(/80417/)",
              "universal_variable.page.tags.join(',').match(/80413/)",
              "universal_variable.page.tags.join(',').match(/80414/)",
              "universal_variable.page.tags.join(',').match(/80415/)",
              "universal_variable.page.tags.join(',').match(/80418/)",
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/alimentacao.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/blogs-e-colunas.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
              "universal_variable.page.tags.join(',').match(/79421/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/movimento.*/)',
              "universal_variable.page.tags.join(',').match(/80417/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/saude.*/)',
              "universal_variable.page.tags.join(',').match(/79428/)",
              'document.location.href.match(/teste_selo/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/videos.*/)',
              "universal_variable.page.tags.join(',').match(/80586/)",
            ],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Viva Bem - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/videos.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/videos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem -  Videos - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/ultimas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem -  Ultimas Noticias - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/saude.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/saude',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem -  Saude - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/movimento.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/movimento',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem -  Movimento - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/equilibrio',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Viva Bem -  Equilibrio - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[250, 250],[300, 250],[320, 50],[300, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'middle-2-2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-middle-2-horizontal-area',
            bannerHeight: '50',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - horizontal-middle 2 Mobile',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80768/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - fbmicro - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80768/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - fbmicro - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)',
              "universal_variable.page.tags.join(',').match(/79270/)",
              'document.location.href.match(/o\\-boticario\\-tutorial\\-make\\-com\\-glitter\\-para\\-o\\-ano\\-todo/)',
              'document.location.href.match(/tresseme\\-tutorial\\-penteado\\-rapido\\-para\\-festa/)',
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/70-das-mulheres-negras-nao-estao-satisfeitas-com-makes-diz-pesquisa-avon/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
              "universal_variable.page.tags.join(',').match(/17546/)",
              "universal_variable.page.tags.join(',').match(/45028/)",
              "universal_variable.page.tags.join(',').match(/11804/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/pausa.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/transforma.*/)',
              "universal_variable.page.tags.join(',').match(/78838/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)',
              "universal_variable.page.tags.join(',').match(/79270/)",
              'document.location.href.match(/o\\-boticario\\-tutorial\\-make\\-com\\-glitter\\-para\\-o\\-ano\\-todo/)',
              'document.location.href.match(/tresseme\\-tutorial\\-penteado\\-rapido\\-para\\-festa/)',
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
              "universal_variable.page.tags.join(',').match(/17546/)",
              "universal_variable.page.tags.join(',').match(/45028/)",
              "universal_variable.page.tags.join(',').match(/11804/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/pausa.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/transforma.*/)',
              "universal_variable.page.tags.join(',').match(/78838/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)',
              "universal_variable.page.tags.join(',').match(/79270/)",
              'document.location.href.match(/(duo\\-anavitoria\\-aproveita\\-pausa\\-da\\-pandemia\\-para\\-se\\-dedicar\\-ao\\-autocuidado|2020\\/08\\/30\\/live\\-anavitoria)/)',
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
              'document.location.href.match(/camila-fremder-fala-de-queda-de-cabelo-no-pos-parto-e-ensina-meio-rabo/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/70-das-mulheres-negras-nao-estao-satisfeitas-com-makes-diz-pesquisa-avon/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
              "universal_variable.page.tags.join(',').match(/17546/)",
              "universal_variable.page.tags.join(',').match(/45028/)",
              "universal_variable.page.tags.join(',').match(/11804/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/pausa.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/transforma.*/)',
              "universal_variable.page.tags.join(',').match(/78838/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)',
              "universal_variable.page.tags.join(',').match(/79270/)",
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
              "universal_variable.page.tags.join(',').match(/17546/)",
              "universal_variable.page.tags.join(',').match(/45028/)",
              "universal_variable.page.tags.join(',').match(/11804/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/pausa.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/transforma.*/)',
              "universal_variable.page.tags.join(',').match(/78838/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              "universal_variable.page.tags.join(',').match(/79569/)",
              'document.location.href.match(/^http(s)?:\\/\\/universa\\.uol\\.com\\.br\\/universa-talks(.*)?$/)',
            ],
            disable: ["universal_variable.page.tags.join(',').match(/79569/)"],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Universa Talks - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/ultimas_noticias',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Ultimas Noticias _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/ultimas_noticias',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Ultimas Noticias _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/ultimas_noticias',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Ultimas Noticias _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/ultimas_noticias',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Ultimas Noticias _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/ultimas_noticias',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Ultimas Noticias - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/transforma.*/)',
            ],
            disable: ["universal_variable.page.tags.join(',').match(/78838/)"],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/transforma',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Transforma _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/transforma.*/)',
            ],
            disable: ["universal_variable.page.tags.join(',').match(/78838/)"],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/transforma',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Transforma _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/transforma.*/)',
            ],
            disable: ["universal_variable.page.tags.join(',').match(/78838/)"],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/transforma',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Transforma _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/transforma.*/)',
            ],
            disable: ["universal_variable.page.tags.join(',').match(/78838/)"],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/transforma',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Transforma _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/78838/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/transforma/politica',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Transforma - Politica _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/78838/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/transforma/politica',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Transforma - Politica _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/78838/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/transforma/politica',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Transforma - Politica _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/78838/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/transforma/politica',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Transforma - Politica _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/transforma.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/transforma',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Transforma - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              "universal_variable.page.tags.join(',').match(/79234/)",
              "universal_variable.page.tags.join(',').match(/79411/)",
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Salon Line - Tag 79234 e 79411 - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              "universal_variable.page.tags.join(',').match(/79234/)",
              "universal_variable.page.tags.join(',').match(/79411/)",
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Salon Line - Tag 79234 e 79411 - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79426/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Prefeitura SP - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79426/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Prefeitura SP - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/pausa.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/pausa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Pausa _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/pausa.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/pausa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Pausa _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/pausa.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/pausa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Pausa _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/pausa.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/pausa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Pausa _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/pausa.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/pausa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Pausa - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/(juntei\\-moda\\-e\\-biologia\\-para\\-criar\\-uma\\-marca\\-consumivel\\-por\\-sua\\-historia|eu\\-sou\\-bem\\-eco\\-chata\\-sem\\-medo\\-de\\-ser\\-feliz|ex\\-modelo\\-\\e\\-porta\\-voz\\-da\\-sustentabilidade\\-moda\\-tem\\-que\\-pensar\\-no\\-planeta|nao\\-vejo\\-problema\\-nenhum\\-em\\-repetir\\-roupa\\-nao\\-e\\-um\\-produto\\-descartavel|juju\\-salimeni\\-muitas\\-marcas\\-se\\-negam\\-a\\-me\\-vestir)/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Patrocinio Jeep - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/70-das-mulheres-negras-nao-estao-satisfeitas-com-makes-diz-pesquisa-avon/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/inread/universa/outstream',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-outstream-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Outstream',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79859/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Natura - Mulher Sem Vergonha - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79859/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Natura - Mulher Sem Vergonha - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1',
            pos: 'bottom',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-mais_noticias-home-area',
            deslabel: '1-native-maisnoticias-home',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Native de Conteúdo - Mais Noticias - Home',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: ["universal_variable.page.tags.join(',').match(/79859/)"],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1',
            pos: 'bottom',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-mais_lidas-internas',
            deslabel: '1-native-maislidas-internas',
            frequencyControl: [],
          },
          name: 'DFP - Universa - Native de Conteúdo - Mais Lidas',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: '79411',
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1',
            pos: 'native-ilha-inspira',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-ilha',
            deslabel: '1-native-maisnoticias-home-ilha',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Native de Conteúdo - Home - Ilha - Inspira',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-tudosobre',
            frequencyControl: [],
            deslabel: '1-native-tudosobre',
          },
          name: 'DFP - Universa - Native - Tudo Sobre',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/45028/)",
              "universal_variable.page.tags.join(',').match(/11804/)",
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Inspira _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/45028/)",
              "universal_variable.page.tags.join(',').match(/11804/)",
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Inspira _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/45028/)",
              "universal_variable.page.tags.join(',').match(/11804/)",
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Inspira _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/45028/)",
              "universal_variable.page.tags.join(',').match(/11804/)",
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Inspira _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/11804/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira/sexo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Inspira - Sexo _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/11804/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira/sexo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Inspira - Sexo _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/11804/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira/sexo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Inspira - Sexo _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/11804/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira/sexo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Inspira - Sexo _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79485/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Inspira - Meu Cabelo Tem História - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79485/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Inspira - Meu Cabelo Tem História - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/45028/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira/carreiras_e_financas',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Inspira - Carreiras e Finanças _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/45028/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira/carreiras_e_financas',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Inspira - Carreiras e Finanças _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/45028/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira/carreiras_e_financas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Inspira - Carreiras e Finanças _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/45028/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira/carreiras_e_financas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Inspira - Carreiras e Finanças _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/17546/)"],
            disable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Inspira - Beleza - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/17546/)"],
            disable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Inspira - Beleza - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
              "universal_variable.page.tags.join(',').match(/78754/)",
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/37146/)",
              "universal_variable.page.tags.join(',').match(/80661/)",
              "universal_variable.page.tags.join(',').match(/17546/)",
              "universal_variable.page.tags.join(',').match(/79485/)",
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Inspira - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
              "universal_variable.page.tags.join(',').match(/78754/)",
            ],
            disable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
              "universal_variable.page.tags.join(',').match(/80661/)",
              "universal_variable.page.tags.join(',').match(/17546/)",
              "universal_variable.page.tags.join(',').match(/79485/)",
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/inspira',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Inspira - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
              "universal_variable.page.tags.join(',').match(/78754/)",
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-selo-120x35-area-1',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Ilha - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/horoscopo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Horoscopo _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/horoscopo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Horoscopo _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/horoscopo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Horoscopo _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {},
          name: 'DFP - Universa - Horoscopo _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/horoscopo',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Horoscopo - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79270/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Conteudo Publicitario Ninho - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79270/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Conteudo Publicitario Ninho - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79270/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Conteudo Publicitario Ninho - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79270/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 250],[320, 50],[300, 50]]; [340, 0], [[336, 280],[300, 250],[320, 50],[300, 50]]; [468, 0], [[468, 60],[336, 280],[300, 250],[320, 50],[300, 50]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[1261, 325],[970, 250],[970, 90],[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Conteudo Publicitario Ninho - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/riachuelo\\-voce\\-conhece\\-a\\-historia\\-da\\-sua\\-mae/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Conteudo Publicitario - Riachuelo - Dia das Mãs - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/(duo\\-anavitoria\\-aproveita\\-pausa\\-da\\-pandemia\\-para\\-se\\-dedicar\\-ao\\-autocuidado|2020\\/08\\/30\\/live\\-anavitoria)/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [768, 0], [[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Conteudo Publicitario - Loreal - Ana vitoria - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/79569/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Conteudo Publicitario - Advil 79569 - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Conteudo Garnier - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Conteudo Garnier - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Conteudo Garnier - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Conteudo Garnier - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80661/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Conteudo Dia V - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80661/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Conteudo Dia V - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Conteudo - Garnier - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/70-das-mulheres-negras-nao-estao-satisfeitas-com-makes-diz-pesquisa-avon/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Conteudo - Avon - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/70-das-mulheres-negras-nao-estao-satisfeitas-com-makes-diz-pesquisa-avon/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Conteudo - Avon - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/70-das-mulheres-negras-nao-estao-satisfeitas-com-makes-diz-pesquisa-avon/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/inread/universa/outstream',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-outstream-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Conteudo - Avon - Outstream',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: ['document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)'],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/capa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Capa - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: ['document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)'],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/capa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Capa - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: ['document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)'],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/capa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Capa - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: ['document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)'],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/capa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '1500',
          },
          name: 'DFP - Universa - Capa - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: ['document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)'],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/capa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Capa - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/camila-fremder-fala-de-queda-de-cabelo-no-pos-parto-e-ensina-meio-rabo/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - Camila Fremder - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/aovivo.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/ao_vivo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Universa - Ao Vivo _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/aovivo.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/ao_vivo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [728, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[970,250],[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - Ao Vivo -_horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/aovivo.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa/ao_vivo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [728, 0], [[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '3',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Universa - Ao Vivo -_horizontal',
        },
        {
          module: 'DfpAsync',
          rules: { enable: ['document.location.href.match(/teste_selo/)'], disable: [] },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
          },
          name: 'DFP - Universa - Ao Vivo - Teste - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250], [250,250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top-2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-11',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - 300x250 top-2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250], [250,250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top-1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-10',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - 300x250 top-1',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/app=uol/)',
            ],
            disable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-300x250-top-area',
            bannerHeight: '250',
            frequencyControl: [],
          },
          name: 'DFP - Universa - 300x250 - Top - Artigo',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'instant-article-universa',
            isSingleRequest: 'False',
            forcePath: ['forcePath'],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-instant-article',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Universa - 300x250 - Instant Article',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/app=uol/)',
            ],
            disable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-300x250-top-area',
            bannerHeight: '250',
            frequencyControl: [],
          },
          name: 'DFP - Universa - 300x250 - Extra',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80693/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - 120x35 - Avon Outubro Rosa',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/79569/)",
              'document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)',
              'document.location.href.match(/riachuelo\\-voce\\-conhece\\-a\\-historia\\-da\\-sua\\-mae/)',
              "universal_variable.page.tags.join(',').match(/37146/)",
              "universal_variable.page.tags.join(',').match(/80768/)",
              "universal_variable.page.tags.join(',').match(/79569/)",
              'document.location.href.match(/^http(s)?:\\/\\/universa\\.uol\\.com\\.br\\/universa-talks(.*)?$/)',
              "universal_variable.page.tags.join(',').match(/80661/)",
              "universal_variable.page.tags.join(',').match(/80693/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
              "universal_variable.page.tags.join(',').match(/78754/)",
              'document.location.href.match(/(juntei\\-moda\\-e\\-biologia\\-para\\-criar\\-uma\\-marca\\-consumivel\\-por\\-sua\\-historia|eu\\-sou\\-bem\\-eco\\-chata\\-sem\\-medo\\-de\\-ser\\-feliz|ex\\-modelo\\-\\e\\-porta\\-voz\\-da\\-sustentabilidade\\-moda\\-tem\\-que\\-pensar\\-no\\-planeta|nao\\-vejo\\-problema\\-nenhum\\-em\\-repetir\\-roupa\\-nao\\-e\\-um\\-produto\\-descartavel|juju\\-salimeni\\-muitas\\-marcas\\-se\\-negam\\-a\\-me\\-vestir)/)',
              "universal_variable.page.tags.join(',').match(/79426/)",
              "universal_variable.page.tags.join(',').match(/79234/)",
              "universal_variable.page.tags.join(',').match(/79411/)",
              'document.location.href.match(/teste_selo/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - 120x35 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              "universal_variable.page.tags.join(',').match(/79569/)",
              'document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)',
              'document.location.href.match(/intimissimi\\-bruna\\-marquezine\\-e\\-a\\-nova\\-musa\\-da\\-intimissimi/)',
              'document.location.href.match(/riachuelo\\-voce\\-conhece\\-a\\-historia\\-da\\-sua\\-mae/)',
              'document.location.href.match(/5\\-formas\\-de\\-eliminar\\-as\\-pontas\\-duplas/)',
              "universal_variable.page.tags.join(',').match(/37146/)",
              "universal_variable.page.tags.join(',').match(/80768/)",
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              "universal_variable.page.tags.join(',').match(/80661/)",
              "universal_variable.page.tags.join(',').match(/80693/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/horoscopo.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/inspira.*/)',
              "universal_variable.page.tags.join(',').match(/79859/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/pausa.*/)',
              "universal_variable.page.tags.join(',').match(/79426/)",
              "universal_variable.page.tags.join(',').match(/79234/)",
              "universal_variable.page.tags.join(',').match(/79411/)",
              'document.location.href.match(/teste_selo/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/transforma.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?\\/ultimas.*/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Universa - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: "[0, 0], ['fluid',[220, 250]]",
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '2',
            bannerWidth: '220',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'responsive-vitrine-publicidade-vitrine-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Native de Oferta - Viva Bem - Modelo Vitrine - 220x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/viva_bem/capa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: "[0, 0], ['fluid',[220, 250]]",
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '2',
            bannerWidth: '220',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'responsive-vitrine-publicidade-vitrine-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '15',
          },
          name: 'DFP - Native de Oferta - Viva Bem - Capa - Modelo Vitrine - 220x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: "[0, 0], ['fluid',[220, 250]]",
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '2',
            bannerWidth: '220',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'responsive-vitrine-publicidade-vitrine-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Native de Oferta - Universa - Modelo Vitrine - 220x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: "[0, 0], ['fluid',[220, 250]]",
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '2',
            bannerWidth: '220',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'responsive-vitrine-publicidade-vitrine-',
            bannerHeight: '250',
            frequencyControl: [],
          },
          name: 'DFP - Native de Oferta - Estilo - Modelo Vitrine - 220x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1',
            pos: 'bottom',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-mais_noticias-internas-area-',
            deslabel: '1-native-internas',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Native de Conteúdo - Estilo - Mais Noticias - Internas',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1',
            pos: 'bottom',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-mais_noticias-home-area-',
            deslabel: '1-native-home',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Native de Conteúdo - Estilo - Mais Noticias - Home',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1',
            pos: 'bottom',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-mais_noticias-area-',
            deslabel: '1-native',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Native de Conteúdo - Estilo - Mais Noticias',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo/albuns',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90]]',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-album',
            bannerHeight: '90',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Estilo - _horizontal-top-album',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[320, 50],[300, 50]]; [468, 0], [[468, 60],[320, 50],[300, 50]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[970,250],[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-horizontal',
            bannerHeight: '90',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Estilo - _horizontal-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 100],[320, 100],[300, 250]]; [340, 0], [[336, 189],[336, 336],[336, 448],[336, 597],[336, 280],[300, 100],[320, 100],[300, 250]]; [468, 0], [[468, 60],[336, 336],[336, 768],[336, 280],[300, 100],[320, 100],[300, 250]]; [768, 0], [[728, 90],[678, 175]]; [970, 0], [[970, 90],[728, 90],[970, 250],[1261, 325]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Estilo - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/inread/estilo/outstream',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-outstream-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '3',
          },
          name: 'DFP - Estilo - Outstream',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250],[320, 50],[300, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'middle-2-2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-middle-2-horizontal-area',
            bannerHeight: '50',
            frequencyControl: [],
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Estilo - GERAL - horizontal-middle 2 Mobile',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top-2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'false',
            bannerId: 'banner-300x250-11',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Estilo - 300x250 top-2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top-1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'false',
            bannerId: 'banner-300x250-10',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Estilo - 300x250 top-1',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '2',
            bannerWidth: '300',
            pos: 'middle-2',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'false',
            bannerId: 'banner-300x250-13',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Estilo - 300x250 middle-2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle-1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'false',
            bannerId: 'banner-300x250-12',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Estilo - 300x250 middle-1',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'instant-article-estilo',
            isSingleRequest: 'False',
            forcePath: ['forcePath'],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-instant-article',
            bannerHeight: '250',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Estilo - 300x250 - Instant Article',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-300x250-top-area',
            bannerHeight: '250',
            frequencyControl: [],
          },
          name: 'DFP - Estilo - 300x250 - Extra',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35-area-',
            bannerHeight: '35',
            frequencyControl: [],
          },
          name: 'DFP - Estilo - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/tresseme\\-tutorial\\-penteado\\-rapido\\-para\\-festa/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Conteudo Publicitario - Tresseme - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/tresseme\\-tutorial\\-penteado\\-rapido\\-para\\-festa/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Conteudo Publicitario - Tresseme - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/hipertensao\\-resistente\\-quais\\-riscos\\-da\\-pressao\\-nao\\-baixar\\-com\\-tratamento/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            dfppath: '/8804/uol/viva_bem',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35',
            bannerHeight: '35',
            frequencyControl: [],
            group: '15',
            requestDelay: '1500',
          },
          name: 'DFP - Conteudo Publicitario - Qualy - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/o\\-boticario\\-tutorial\\-make\\-com\\-glitter\\-para\\-o\\-ano\\-todo/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
          },
          name: 'DFP - Conteudo Publicitario - O Boticario - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/o\\-boticario\\-tutorial\\-make\\-com\\-glitter\\-para\\-o\\-ano\\-todo/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'True',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-vertical-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '15',
            timeToRefresh: '30',
            requestDelay: '200',
          },
          name: 'DFP - Conteudo Publicitario - O Boticario - _vertical',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ['document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-top-vertical',
            bannerHeight: '600',
            frequencyControl: [],
            timeToRefresh: '30',
          },
          name: 'DFP - Conteudo Publicitario - Budweiser Lollapalooza anos 90 - _vertical-top',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ['document.location.href.match(/budweiser\\-lollapalooza\\-anos\\-90/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35',
            bannerHeight: '35',
            frequencyControl: [],
          },
          name: 'DFP - Conteudo Publicitario - Budweiser Lollapalooza anos 90 - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?uol\\/estilo\\/conteudo-publicitario\\/microsoft-maes-20\\.htm(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'microsoft-maes-20',
            sizeMapping: '[0, 0], [[320, 50],[300, 50]]; [728, 0], [[970, 90]]',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
          },
          name: 'Conteúdo Publicitário - Microsoft - Mães-20 - _horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/beleza-nao-tem-idade/)',
              'document.location.href.match(/natura-beleza-nao-tem-idade/)',
              'document.location.href.match(/natura-uma-solucao-para-cada-mulher-vaidosa/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [728, 0], [1190, 330]',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-responsive-horizontal-',
            bannerHeight: '90',
            frequencyControl: [],
          },
          name: 'Conteúdo Publicitário - Beleza não tem idade - Responsive - Horizontal',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/5\\-formas\\-de\\-eliminar\\-as\\-pontas\\-duplas/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35',
            bannerHeight: '35',
            frequencyControl: [],
            group: '3',
          },
          name: 'Conteudo Publicitario - Salon Line - 5 formas de eliminar pontas duplas - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/natura-todo-dia-mae-sa-filho-sao/)',
              'document.location.href.match(/salon-line-entenda-os-termos-mais-usados-no-universo-capilar/)',
              'document.location.href.match(/natura-todo-dia-onde-o-corpo-e-nosso-lar/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: [],
            hide: 'False',
            isIncremental: 'false',
            bannerId: 'banner-120x35-area',
            bannerHeight: '35',
            frequencyControl: [],
          },
          name: 'Conteudo Publicitario - Natura e Salon Line',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/37146/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35',
            bannerHeight: '35',
            frequencyControl: [],
          },
          name: 'Conteudo Publicitario - Loreal - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/intimissimi\\-bruna\\-marquezine\\-e\\-a\\-nova\\-musa\\-da\\-intimissimi/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/universa',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'top',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-120x35',
            bannerHeight: '35',
            frequencyControl: [],
          },
          name: 'Conteudo Publicitario - Intimissimi - 120x35',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: ['document.location.href.match(/natura-beleza-nao-tem-idade/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/uol/estilo',
            isCompanion: 'False',
            outOfPage: [],
            keyword: 'notadx',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '120',
            pos: 'middle',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-120x35-area-2',
            bannerHeight: '35',
            frequencyControl: [],
          },
          name: 'Conteudo Publicitario - Beleza não tem idade - 120x35 - 2',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['onload'],
          config: {
            codeInjector:
              'function getCookie(name) {\n    var value = "; " + document.cookie;\n    var parts = value.split("; " + name + "=");\n    if (parts.length == 2) return parts.pop().split(";").shift();\n}\n\nfunction getUolId() {\n    var uolId = \'\'\n    var uolDataLayerValue = localStorage["uolDataLayer"]\n    if (uolDataLayerValue) {\n        var uolDataLayer = JSON.parse(uolDataLayerValue)\n        if (uolDataLayer["UOLID"]) {\n            uolId = uolDataLayer["UOLID"]\n        }\n    }\n    return uolId\n}\n\nfunction buildUrl(url, params) {\n    var queryString = \'\';\n    for (name in params) {\n        if (params[name]) {\n            queryString += \'&\' + name + \'=\' + params[name];\n        }\n    }\n    if (queryString) {\n        url += \'?\' + queryString.substr(1);\n    }\n    return url;\n}\n\nfunction callUrlByImg(url, params) {\n    var img = document.createElement(\'img\');\n    img.src = buildUrl(url,params);\n    img.style.display = \'none\';\n    img.style.position = \'absolute\';\n    document.body.append(img);\n}\n\nvar userId = getCookie("_ga").replace(/^([^.]+\\.){2}/, "");\nvar pageId = window.universal_variable.aud.mediaId;\n\nif (userId && pageId) {\n    callUrlByImg("https://collect.recommendation.uol.com.br/event", {\n        "user": userId,\n        "pageid": pageId,\n        "tags": window.universal_variable.aud.tags.replace(/,/g,";"),\n        "centralEditorial": window.universal_variable.aud.central,\n        "uolid": getUolId(),\n    });\n}\n',
            globalScope: [],
          },
          name: 'Collect Recommendation',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/.*/)'],
            disable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'if (document.getElementsByClassName("uolplayer").length > 0) {\n    if (document.getElementsByClassName("uolplayer")[0].getAttribute("data-autoplay")) {\n        window.UOLPD = window.UOLPD || {};\n        if (window.UOLPD.dataLayer.keyword == undefined) {\n            window.UOLPD.dataLayer.keyword = "video-auto-play";\n        } else {\n            window.UOLPD.dataLayer.keyword = window.UOLPD.dataLayer.keyword + ",video-auto-play";\n        }\n    }\n}',
            globalScope: [],
          },
          name: 'verificação se video auto-play',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/equilibrio.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'window.universal_variable = window.universal_variable || {};\nwindow.universal_variable.page = window.universal_variable.page || {};\nwindow.universal_variable.page.tags = window.universal_variable.page.tags || [];\nwindow.universal_variable.page.tags.push(12397);',
            globalScope: [],
          },
          name: '_fix vivabem equilibrio',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/teste_outstream_google/)'],
            disable: [],
          },
          events: ['onload'],
          config: {
            codeInjector:
              "(function () {\n  var adDiv = document.createElement(\"div\");\n  adDiv.innerHTML = '<script>window.uolads && window.uolads.push({ id: \"banner-640x480-area\" });</script>';\n  adDiv.id = 'banner-640x480-area';\n\n  var container = document.querySelector('.text');\n  container.insertBefore(adDiv, container.children[2]);\n\n  window.uolads && window.uolads.push({ id: 'banner-640x480-area' });\n})();",
            globalScope: [],
          },
          name: '___Injetor DIV - Outstream - Google',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade(\\/)?(\\?.*)?$/)',
            ],
            disable: [
              "(function (){ try {\t \tif (typeof window.Config === 'object' && typeof Config.plataforma === 'string') {return Config.plataforma;} \tif (typeof window.config === 'object' && typeof config.platform === 'string') {return config.platform;} \tif (!TM.Config) {return 'web';} \tif (typeof TM.Config === 'object' && typeof TM.Config.platform === 'string') {return TM.Config.platform;} \treturn 'web'; \t} \tcatch(err) {     return 'web'; \t}\t } )() == 'web'",
            ],
          },
          events: ['onready'],
          config: {
            codeInjector:
              'document.querySelector(".bannersticky-top-container ").style.display = "none";',
            globalScope: [],
          },
          name: '__Display None - Bradesco - Longevidade',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/(cenas mais chocantes|eroticas|playboy|acidente|tesao|agressao|orgasmo|vibradores|penetracao|penis|ywefapoge|topless|UCwkva9wLNIbDuB17|axuluralolovoty|ring-girls|bumbum|sexuais|episiotomi|ujabezudunekufu|120220toboga|sexo|shit|namuxelohisu|transar|ebodirumuhejivodi|etijubiqyfemup|ysutohalo|nudez|pussy|pGtWa3iyvjs|briga|gay|trans|vuzusokehixolukugyt|hentaiinside|femen|violencia|SXI|liviaandradenuanasexy|peitos|ninfetassafadas|nua|bundao|superjogosdesexo|porno|boquetesex|novinhasflagras|gostosas|dead|cabeca|topless|baixar|sexy|erotico|perverso|peitao|mp3|sensual|erotico|vibrador|masturbador|sacanagem|mostraram demais)/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "window.universal_variable = window.universal_variable || {};\nwindow.universal_variable.page = window.universal_variable.page || {};\nwindow.universal_variable.page.tags = window.universal_variable.page.tags || [];\nwindow.universal_variable.page.tags.push('notadx');",
          },
          name: '_Policy AdX',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/.*/)'],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/estilo\\.uol\\.com\\.br\\/ao-vivo\\/2017\\/10\\/18\\/21-forum-da-longevidade-bradesco-seguros.htm(.*)?$/)',
              "universal_variable.page.tags.join(',').match(/80664/)",
              'document.location.href.match(/(duo\\-anavitoria\\-aproveita\\-pausa\\-da\\-pandemia\\-para\\-se\\-dedicar\\-ao\\-autocuidado|2020\\/08\\/30\\/live\\-anavitoria)/)',
              "universal_variable.page.tags.join(',').match(/80666/)",
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
              "(function () { var listSesame = ['modlistavideos', 'modflash', 'playlist-video', 'modhomevideo',  'uolplayer'];     try {         for (i=0, length = listSesame.length; i < length; i++) {             if (document.getElementsByClassName(listSesame[i]).length > 0) {                 return 'true';             }         }     } catch(e) {         return 'false';     }      return 'false'; })() == 'true'",
              "universal_variable.page.tags.join(',').match(/80416/)",
              "universal_variable.page.tags.join(',').match(/80417/)",
              "universal_variable.page.tags.join(',').match(/80413/)",
              "universal_variable.page.tags.join(',').match(/80414/)",
              "universal_variable.page.tags.join(',').match(/80415/)",
              "universal_variable.page.tags.join(',').match(/80418/)",
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/teste_outstream_google/)',
              'document.location.href.match(/70-das-mulheres-negras-nao-estao-satisfeitas-com-makes-diz-pesquisa-avon/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/testInterScroll/)',
            ],
          },
          events: ['onready'],
          config: {
            codeInjector:
              "(function () {\n    \nvar inTextIsMobile = false;\ntry { if( !inTextIsMobile ) inTextIsMobile = (TM.Config.platform == \"mobile\")?true:false;}catch(err) {}\ntry { if( !inTextIsMobile ) inTextIsMobile = (Config.plataforma == \"mobile\")?true:false;}catch(err) {}\ntry { if( !inTextIsMobile ) inTextIsMobile = (Config.platform == \"mobile\")?true:false;}catch(err) {}\n\n\nvar dispachDfpOutstreamPush = function () {\t\n\tvar outstreamRepository = document.getElementById('banner-300x250-outstream-area');\n    if( outstreamRepository && !outstreamRepository.hasAttribute('pushed-dfp') ) {\n        var styleElem = document.head.appendChild(document.createElement(\"style\"));\n        styleElem.innerHTML = \"div[id*=banner-300x250-outstream-area]:before {content: 'Publicidade';display: block;width: 100%;text-align: center;text-transform: uppercase;height: 11px;font-size: 10px;margin-bottom: 18px;letter-spacing: 1.53px;color: #000000;}\";\n        outstreamRepository.style.width = '300px';\n        outstreamRepository.setAttribute('pushed-dfp', 'true');\n        window.uolads&&window.uolads.push({id:'banner-300x250-outstream-area'});\n    }\n}\n\nvar dispatchDynADTvCall = function ( container ) { \n\tuidfpdtv = dfpFindUI();\n    urldfpdtv = encodeURIComponent(location.href);\n    window.DYNAD_TV = {\n      \t'eventListener' : function ( eventName ) {\n      \t    console.log('eventName', eventName);\n      \t    if( eventName == 'nodata' || eventName == 'closed' )\n      \t        dispachDfpOutstreamPush();\n            if(eventName == 'nodata'){\n                var styleElem = document.head.appendChild(document.createElement(\"style\"));\n                styleElem.innerHTML = \"#banner-300x250-outstream-area:before {content: 'Publicidade';display: block;width: 100%;text-align: center;text-transform: uppercase;height: 11px;font-size: 10px;margin-bottom: 18px;letter-spacing: 1.53px;color: #000000;}\";\n            }    \n      \t       \n\t\t},'config' : {\n\t\t    'pathDFP': uidfpdtv,\n             'URL_VAST' : 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu='+uidfpdtv+'&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=keyword%3Dvideo%2Dauto%2Dplay%2Cvideo-auto-play&description_url='+urldfpdtv+'&correlator=' + Math.random() * 100000000000000000,\n\t\t\t 'passback': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/8804/uol/in-article_adx&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=keyword%3Dvideo%2Dauto%2Dplay%2Cvideo-auto-play&description_url='+urldfpdtv+'&correlator=' + Math.random() * 100000000000000000,\n            'settings' : [\n              {'key': 'initialAudioVolume', 'value' : '60'},\n              {'key': 'enableLabel', 'value' : 'true'},\n              {'key': 'valueLabel', 'value' : '(<a href=\"http://publicidade.uol.com.br/adlab\" target=\"_blank\">In-Article</a>) uma tecnologia UOL.'},\n              {'key': 'enableReplay', 'value' : 'true'}\n              ]\n      \t}\n    };\n\n\tvar t = document.createElement('script'); t.type='text/javascript'; t.async=true;\n\tt.src = '//t.dynad.net/script/?dc=5550002193;ord=0;click=';\n\tcontainer.appendChild(t);\n\twindow['DynAd_tv_Container'] = container;\n\tif( console && console.log )\n\t\tconsole.log('[dynad-tv] - inject in-article at the following container.', container);\n}\n\nvar apppendTriggerHandler = function (container) {\n\t\n\tif( container.parentNode.getAttribute('class') == 'text' \n\t\t&& container.parentNode.parentNode.getAttribute('class') == 'image-content-pad'  ) {\n\n\t\tvar readMoreMainContainer = container.parentNode.parentNode.parentNode.parentNode;\n\t\tif( readMoreMainContainer.classList.contains(\"read-more\") && readMoreMainContainer.classList.contains(\"closed\") ) { \n\n\t\t\tvar readMoreElement = container.parentNode.parentNode.querySelector('.read-more-btn');\n\t\t\tif( readMoreElement ) {\n\t\t\t\tvar readMoreBotton = readMoreElement.querySelector('.btn-primary');\n\t\t\t\tif( readMoreBotton ) {\n\t\t\t\t\treadMoreBotton.addEventListener('click', function () {\n\t\t\t\t\t\tdispatchDynADTvCall(container);\n\t\t\t\t\t});\n\t\t\t\t\tif( console && console.log )\n\t\t\t\t\t\tconsole.log('detected read-more element, appending elements on trigger');\t\t\t\t\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t}\n\n\t\t}\n\n\t}\n\n\tdispatchDynADTvCall(container);\n}\nvar dfpLocation = document.location.href,\n  \tdfpUIinarticleMap = [\n\t    {'ui':'/8804/teste/inread','URL':'vf1'},\n\t\t{'ui':'/8804/uol/inread','URL':'//uol.com.br'}, // não alterar essa linha\n\t\t{'ui':'/8804/uol/inread/carnaval','URL':'//carnaval.uol'},\n\t\t{'ui':'/8804/uol/inread/carnaval','URL':'//www.uol.com.br/carnaval'},\n\t\t{'ui':'/8804/uol/inread/comidas_e_bebidas','URL':'//comidasebebidas.uol'},\n\t\t{'ui':'/8804/uol/inread/comidas_e_bebidas','URL':'//www.uol.com.br/comidasebebidas'},\n\t\t{'ui':'/8804/uol/inread/criancas','URL':'//criancas.uol'},\n\t\t{'ui':'/8804/uol/inread/cinema','URL':'//www.uol.com.br/cinema'},\n\t\t{'ui':'/8804/uol/inread/cinema','URL':'//cinema.uol'},\n\t\t{'ui':'/8804/uol/inread/criancas','URL':'//www.uol.com.br/criancas'},\n\t\t{'ui':'/8804/uol/inread/entretenimento','URL':'//entretenimento.uol'},\n\t\t{'ui':'/8804/uol/inread/entretenimento','URL':'//www.uol.com.br/entretenimento'},\n\t\t{'ui':'/8804/uol/inread/estilo','URL':'//estilo.uol'},\n\t\t{'ui':'/8804/uol/inread/estilo','URL':'//www.uol.com.br/estilo'},\n\t\t{'ui':'/8804/uol/inread/esporte','URL':'//esporte.uol'},\n\t\t{'ui':'/8804/uol/inread/esporte','URL':'//www.uol.com.br/esporte'},\n\t\t{'ui':'/8804/uol/inread/guia','URL':'//guia.uol'},\n\t\t{'ui':'/8804/uol/inread/guia','URL':'//www.uol.com.br/guia'},\n\t\t{'ui':'/8804/uol/inread/musica','URL':'//musica.uol'},\n\t\t{'ui':'/8804/uol/inread/musica','URL':'//www.uol.com.br/musica'},\n\t\t{'ui':'/8804/uol/inread/noticias','URL':'//noticias.uol'},\n\t\t{'ui':'/8804/uol/inread/noticias','URL':'//www.uol.com.br/noticias'},\n\t\t{'ui':'/8804/uol/inread/tv_e_famosos','URL':'//tvefamosos.uol'},\n\t\t{'ui':'/8804/uol/inread/tv_e_famosos','URL':'//www.uol.com.br/tvefamosos'},\n\t\t{'ui':'/8804/uol/inread/viagem','URL':'//viagem.uol'},\n\t\t{'ui':'/8804/uol/inread/viagem','URL':'//www.uol.com.br/viagem'},\n\t\t{'ui':'/8804/uol/inread/viva_bem','URL':'//vivabem.uol'},\n\t\t{'ui':'/8804/uol/inread/viva_bem','URL':'//www.uol.com.br/vivabem'},\n\t\t{'ui':'/8804/uol/inread/universa','URL':'//universa.uol'},\n\t\t{'ui':'/8804/uol/inread/universa','URL':'//www.uol.com.br/universa'}\n\t  ], \n\tdfpFindUI = function() {\n\t\tvar dfpUI = dfpUIinarticleMap[1].ui;\n        var dfpUIinarticleMapLength = dfpUIinarticleMap.length;\n        for(var i = 0; i < dfpUIinarticleMapLength; i++) {\n            var MAP = dfpUIinarticleMap[i];\n            if(dfpLocation.indexOf(MAP.URL) !== -1) {\n                dfpUI = MAP.ui;\n                return dfpUI;\n            }\n        }\n    \treturn dfpUI;\n  \t};\n\nvar timestampInterval = Date.now();\nvar idInterval = setInterval( function () {\n    \n    var _iOSDevice = !!navigator.platform.match(/iPhone|iPod|iPad/);\n\tif( (Date.now() - timestampInterval) > (1000 * 15) ) {\n\t\tif( console && console.log )\n\t\t\tconsole.log('[dynad-tv] - canceling inarticle due to timeout waiting article to load');\n\t\tclearInterval(idInterval);\n\t\tdispachDfpOutstreamPush();\n\t\treturn;\n\t}\n\n    if(_iOSDevice){\n        dispachDfpOutstreamPush();\n        return;\n    }\n    \n\tvar currentURL = document.URL ;\n\tif( currentURL.indexOf('http://') == 0 ) currentURL = currentURL.substr(7);\n\tif( currentURL.indexOf('https://') == 0 ) currentURL = currentURL.substr(8);\n\n\tvar elements = document.querySelectorAll('.collection-item');\n\tvar found = false;\n\tfor( var x = 0; x < elements.length; x++ ) {\n\t\tvar e = elements[x];\n\n\t\tvar dataURL = (e.hasAttribute('data-url') ? e.getAttribute('data-url') : \"\" );\n\t\tif( dataURL.indexOf('http://') == 0 ) dataURL = dataURL.substr(7);\n\t\tif( dataURL.indexOf('https://') == 0 ) dataURL = dataURL.substr(8);\n\n\t\tif( dataURL != \"\" && currentURL.indexOf( dataURL ) == 0 ) {\n\t\t\tif( e.getAttribute('data-loaded') == 'true' || e.getAttribute('data-loaded') == 'loaded' ) {\n\t\t\t    \n\t\t\t    if( inTextIsMobile ) {\n    \t\t\t    var outstreamRepository = e.querySelector('#banner-300x250-outstream-area');\n    \t\t\t    if( outstreamRepository ) {\n    \t\t\t        if( console && console.log )\n    \t\t\t            console.log('[dynad-tv] - detected outstream repository, changing inarticle container');\n    \t\t\t        outstreamRepository.style.width = '100%';\n    \t\t\t        dispatchDynADTvCall( outstreamRepository );\n    \t\t\t\t    clearInterval(idInterval);\n    \t\t\t    }\n    \t\t\t    \n\t\t\t\t    return;\n\t\t\t    }\n\t\t\t    \n\t\t\t\tvar slotComment = e.querySelector('.slot-c');\n\t\t\t\tif( slotComment ) { \n\t\t\t\t\tvar rootElement = slotComment.parentNode;\n\t\t\t\t\t\n\t\t\t\t\ttry {  \n\t\t\t\t\tvar txtEle = rootElement.querySelector('.text');\n\t\t\t\t\tvar chdEles = txtEle.childNodes;\n\t\t\t\t\tfor( var c = 0; c < chdEles.length; c++ ) {\n\t\t\t\t\t\tif( (chdEles[c].offsetTop - txtEle.offsetTop) >= 280 ) {\n\t\t\t\t\t\t\tvar w = rootElement.clientWidth;\n\t\t\t\t\t\t\tvar container = document.createElement('div');\n\t\t\t\t\t\t\tcontainer.setAttribute('id', 'playerInArticle');\n\t\t\t\t\t\t\tcontainer.setAttribute('style', 'width: '+w+'px; heigth: 0px; left: ' + w + 'px; margin-left: -' + (w/2) );\n\t\t\t\t\t\t\ttxtEle.insertBefore(container, chdEles[c]);\n\t\t\t\t\t\t\tapppendTriggerHandler( container );\n\t\t\t\t\t\t\tclearInterval(idInterval);\n\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\tif( console && console.error )\n\t\t\t\t\t\t\tconsole.error('[dynad-tv] - unable to ready page structure, appending player at default location.', e);\n\t\t\t\t\t}\n\n\t\t\t\t\tvar textElement = null;\n\t\t\t\t\ttry { \n\t\t\t\t\t\ttextElement = rootElement.querySelectorAll(':scope > .text > p');\n\t\t\t\t\t} catch (e){\n\t\t\t\t\t\ttextElement = rootElement.querySelectorAll('.text > p');\n\t\t\t\t\t}\t\n\n\t\t\t\t\tvar indexPos = 3;\n\t\t\t\t\tif( textElement && textElement.length >= indexPos ) {\n\t\t\t\t\t\tslotComment = textElement[indexPos - 1];\n\t\t\t\t\t\trootElement = slotComment.parentNode;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tvar w = rootElement.clientWidth;\n\t\t\t\t\tvar container = document.createElement('div');\n\t\t\t\t\tcontainer.setAttribute('id', 'playerInArticle');\n\t\t\t\t\tcontainer.setAttribute('style', 'width: '+w+'px; heigth: 0px; left: ' + w + 'px; margin-left: -' + (w/2) );\n\t\t\t\t\trootElement.insertBefore(container, slotComment);\n\t\t\t\t\tapppendTriggerHandler( container );\n\n\t\t\t\t\tclearInterval(idInterval);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n}, 150);\n})();",
            globalScope: [],
          },
          name: '_Dynad TV - In-Article',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/app=uol/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/estilo\\.uol\\.com\\.br\\/ao-vivo\\/2017\\/10\\/18\\/21-forum-da-longevidade-bradesco-seguros.htm(.*)?$/)',
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
              "universal_variable.page.tags.join(',').match(/79544/)",
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/70-das-mulheres-negras-nao-estao-satisfeitas-com-makes-diz-pesquisa-avon/)',
            ],
          },
          events: ['onload'],
          config: {
            codeInjector:
              'var headerHeight = 11;\nvar headerMarginBottom = 18;\n\nvar styleElem = document.head.appendChild(document.createElement("style"));\nstyleElem.innerHTML = "div[id*=banner-300x250-top-area]:before,div[id*=banner-300x250-outstream-area]:before {content: \'Publicidade\';display: block;width: 100%;text-align: center;text-transform: uppercase;height: " + headerHeight + "px;font-size: 10px;margin-bottom: " + headerMarginBottom + "px;letter-spacing: 1.53px;color: #000000;}";\nvar inTextIsMobile = false;\ntry { if( !inTextIsMobile ) inTextIsMobile = (TM.Config.platform == "mobile")?true:false;}catch(err) {}\ntry { if( !inTextIsMobile ) inTextIsMobile = (Config.plataforma == "mobile")?true:false;}catch(err) {}\ntry { if( !inTextIsMobile ) inTextIsMobile = (Config.platform == "mobile")?true:false;}catch(err) {}\n\nvar hasSesame = (function () { var listSesame = [\'modlistavideos\', \'modflash\', \'playlist-video\', \'modhomevideo\',  \'uolplayer\'];     try {         for (i=0, length = listSesame.length; i < length; i++) {             if (document.getElementsByClassName(listSesame[i]).length > 0) {                 return \'true\';             }         }     } catch(e) {         return \'false\';     }      return \'false\'; })();\n\ntry {\n  if(inTextIsMobile){\n    var wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\n    var txtEle = document.querySelector(\'.text\');\n    var chdEles = txtEle.childNodes;\n    var indexPos = 0, lastIndexPos = -1;\n    for( var c = 0; c < chdEles.length; c++ ) {\n\n      if( c > 0 && typeof chdEles[c-1].tagName !== \'undefined\' && ( chdEles[c-1].tagName.toLowerCase() == \'strong\' || chdEles[c-1].tagName.toLowerCase() == \'figure\' || chdEles[c-1].tagName.toLowerCase() == \'h3\' ) )\n\tcontinue;\n\n      var trashold = 280;\n      if( indexPos > 0 ) trashold = lastIndexPos + (wh * 1.5)  + 250;\n\n      if( (chdEles[c].offsetTop - txtEle.offsetTop) >= trashold ) {\n\tvar divBannerName = "banner-300x250-top-area-" + indexPos;\n\tif( indexPos == 0 ) divBannerName = "banner-300x250-outstream-area";\n\tvar BannMob300x250inText = document.createElement("DIV");\n\tBannMob300x250inText.setAttribute("ID", divBannerName);\n\tBannMob300x250inText.setAttribute("STYLE", "margin:10px;width:300px; margin-left:auto; height:" + (250 + headerHeight + headerMarginBottom) + "px; margin-right:auto;" + ( indexPos == 0 ? "background: url(\'https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKDrkayZdBABGAEoATIIt8ONWozEj6pAiLT80AU\') no-repeat center center;" : "" ) );\n\tBannMob300x250inText.setAttribute("class", "tm-ads");\n\ttxtEle.insertBefore(BannMob300x250inText, chdEles[c]);\n\tif( hasSesame == \'false\' && indexPos == 0 ) {\n\t  if( console && console.log )\n\t    console.log(\'[dynad-tv] - delegating push to inarticle.\');\n\t} else\n\t  window.uolads&&window.uolads.push({id:divBannerName});\n\tlastIndexPos = chdEles[c].offsetTop;\n\tindexPos++;\n      }\n    }\n  }\n}\ncatch(err) {}',
            globalScope: [],
          },
          name: '_Banner entre o texto 300x250 - APP UOL V2',
        },
        {
          module: 'CodeInjector',
          rules: { enable: ['document.location.href.match(/.*usaflex-loja-uol.*/)'], disable: [] },
          events: ['onload'],
          config: {
            codeInjector:
              'var resizeIframeHeight = function resizeIframeHeight(msg, iframe) {\n  var height = Number(msg.data.replace("dynad-showcase/", ""));\n  iframe.style.height = height + "px";\n};\n\nvar specialFooter = document.querySelector("body > section.special-footer");\n\nvar vitrine = document.createElement("div");\nvitrine.className = "vitrine-responsiva";\ndocument.body.insertBefore(vitrine, specialFooter);\nwindow.DYNAD_SELECTOR = vitrine;\n\nvar script = document.createElement("script");\nvar a = Math.random() * 10000000000000;\nscript.src = "//t.dynad.net/script/?dc=5550020096;ord=" + a + ";click=";\nvitrine.appendChild(script);\n\nwindow.addEventListener("message", function (msg) {\n  if (msg.data.indexOf("dynad-showcase" > -1)) {\n    var iframe = vitrine.querySelector("iframe");\n    resizeIframeHeight(msg, iframe);\n  }\n});',
            globalScope: [],
          },
          name: 'Vitrine - Usaflex',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/.*o-boticario-loja-uol.*/)'],
            disable: [],
          },
          events: ['onload'],
          config: {
            codeInjector:
              'var resizeIframeHeight = function resizeIframeHeight(msg, iframe) {\n  var height = Number(msg.data.replace("dynad-showcase/", ""));\n  iframe.style.height = height + "px";\n};\n\nvar specialFooter = document.querySelector("body > section.special-footer");\n\nvar vitrine = document.createElement("div");\nvitrine.className = "vitrine-responsiva";\ndocument.body.insertBefore(vitrine, specialFooter);\nwindow.DYNAD_SELECTOR = vitrine;\n\nvar script = document.createElement("script");\nvar a = Math.random() * 10000000000000;\nscript.src = "//t.dynad.net/script/?dc=5550020065;ord=" + a + ";click=";\nvitrine.appendChild(script);\n\nwindow.addEventListener("message", function (msg) {\n  if (msg.data.indexOf("dynad-showcase" > -1)) {\n    var iframe = vitrine.querySelector("iframe");\n    resizeIframeHeight(msg, iframe);\n  }\n});',
            globalScope: [],
          },
          name: 'Vitrine - O Boticário',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/tresemme-day-2.htm#transformando-um-coque-chato-em-um-cabelo-chique/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=28760611&PluID=0&ord=%n&rtu=-1";',
            globalScope: [],
          },
          name: 'Tresemme - transformando-um-coque-chato-em-um-cabelo-chique',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/tresemme-day-2.htm#livre-leve-e-solto/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=28760613&PluID=0&ord=%n&rtu=-1";',
            globalScope: [],
          },
          name: 'Tresemme - livre-leve-e-solto',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/tresemme-day-2.htm#adeus-rabo-de-cavalo-de-emergencia/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=28760612&PluID=0&ord=%n&rtu=-1";',
            globalScope: [],
          },
          name: 'Tresemme - adeus-rabo-de-cavalo-de-emergencia',
        },
        {
          module: 'CodeInjector',
          rules: { enable: ['document.location.href.match(/testInterScroll/)'], disable: [] },
          events: ['testInterScrollReady'],
          config: {
            codeInjector:
              "var dispatchDynADTvCall = function ( container ) { \n\tcontainer = document.querySelector(container);\n\tvar uidfpdtv = '/8804/teste/inread';\n\tvar urldfpdtv = encodeURIComponent(location.href);\n\twindow.DYNAD_TV = {\n\t\t'eventListener': function(eventName, eventData) {\n\t\t    document.querySelector('#banner-300x250-outstream-area').style.display = 'none';\n\t\t\tsetTimeout(function() {\n\t\t\t\tif (eventName == 'nodata' || eventName == 'closed') {\n\t\t\t\t\t//showCutting();\n\t\t\t\t}\n\t\t\t\tif (eventName == 'closed') {\n/* tempo */         setCookieDfpDhtml(\"VideoFloatingHM\", 1, 0.08);// 0.5\n\t\t\t\t} \n\t\t\t\t//console.log(\"---------------------> \" + eventName +\"=\"+eventData);\n\t\t\t}, 1000);\n\t\t},\n\t\t'config': {\n\t\t\t'pathDFP': uidfpdtv,\n\t\t\t'URL_VAST': 'https://pubads.g.doubleclick.net/gampad/ads?slotname=' + uidfpdtv + '&sz=640x480&ciu_szs=&url=' + urldfpdtv + '&unviewed_position_start=1&output=xml_vast3&impl=s&env=vp&gdfp_req=1&ad_rule=0&video_url_to_fetch=' + urldfpdtv + '&description_url=' + urldfpdtv + '&vad_type=linear&vpos=preroll&pod=1&min_ad_duration=0&max_ad_duration=999999000&ppos=1&lip=true&correlator=' +\n\t\t\t\tMath.random() * 100000000000000000,\n\t\t\t'container': {\n\t\t\t\t'obj': container, // container onde sera direcionado a tv\n\t\t\t\t'width': 680,//748,//680, // largura maxima (630px)\n\t\t\t\t'height': 382,//342,//382, // altura maxima (355px)\n\t\t\t\t'removeOnClose': false // flag para remover o container raiz apos a conclusao do video (ex: banner-1x1-11-Area)\n\t\t\t},\n\t\t\t'disabledViewport': true\n\t\t}\n\t};\n\tvar t = document.createElement('script');\n\tt.type = 'text/javascript';\n\tt.async = true;\n\tt.src = '//t.dynad.net/script/?dc=5550018117;ord=0;click=';\n\tdocument.getElementsByTagName('head')[0].appendChild(t);\n\t\n\tif( console && console.log )\n\t\tconsole.log('[dynad-core] - [', Date.now(), '] - TM Injected DynAd Tag.');\n}\n\ndispatchDynADTvCall('#testVideoTemplate');",
            globalScope: [],
          },
          name: 'Teste Video Script Interscroll',
        },
        {
          module: 'CodeInjector',
          rules: { enable: ['document.location.href.match(/testInterScroll/)'], disable: [] },
          events: ['onload'],
          config: {
            codeInjector:
              "var container = document.querySelector('.image-content-pad .text p');\nif(container){\n    var divinterScroll = document.createElement('div');\n    divinterScroll.id = \"testVideoTemplate\";\n    document.querySelector('.image-content-pad .text p').appendChild(divinterScroll);\n    window.triggerUOLTM('testInterScrollReady');\n}else{\n    var intervalcheckdiv = window.setInterval(function(){\n        if(container){\n            var divinterScroll = document.createElement('div');\n            divinterScroll.id = \"testVideoTemplate\";\n            document.querySelector('.image-content-pad .text p').appendChild(divinterScroll);\n            window.triggerUOLTM('testInterScrollReady');\n            window.clearInterval(intervalcheckdiv);\n        }\n    },500)\n}",
            globalScope: [],
          },
          name: 'Teste Interscroll Video div',
        },
        {
          module: 'CodeInjector',
          rules: { enable: ['document.location.href.match(/.*/)'], disable: [] },
          events: ['onload'],
          config: {
            codeInjector:
              "setTimeout(function(){\n    for (var i = 0; i < window.universal_variable.page.tags.length; i++) { \n        var custom = {\n                stage   :  'view',\n                i1      :  window.universal_variable.page.tags[i] //.toString()\n        };\n        window._ttconversion = window._ttconversion || [];\n        window._ttconversion.push(['_customEvent', custom]);\n    }\n},0);\n",
          },
          name: 'TailTarget - Repasse de Tags de Conteudo',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              "(function () { var listSesame = ['modlistavideos', 'modflash', 'playlist-video', 'modhomevideo',  'uolplayer'];     try {         for (i=0, length = listSesame.length; i < length; i++) {             if (document.getElementsByClassName(listSesame[i]).length > 0) {                 return 'true';             }         }     } catch(e) {         return 'false';     }      return 'false'; })() == 'true'",
            ],
            disable: [],
          },
          events: ['onload'],
          config: {
            codeInjector:
              "(function() {\n// Iframe Sesame\n\tvar ifrm = document.createElement('iframe');\n\tifrm.id = 'google_top';\n\tifrm.name = 'google_top';\n\tifrm.style.display = 'none';\n\tifrm.setAttribute('data-video-ads', 'true');\n\tdocument.body.appendChild(ifrm);\n// Script Sesame\n\tvar scr = document.createElement(\"script\");\n\tscr.async = true;\n\tscr.src = \"//pagead2.googlesyndication.com/pagead/js/google_top.js\";\n\tvar el = document.getElementsByTagName(\"script\")[0];\n\tel.parentNode.insertBefore(scr, el);\n})();",
          },
          name: 'Sesame',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              "universal_variable.page.tags.join(',').match(/78684/)",
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?\\/longevidade.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "(function() {\n    function dfpRtTrack() {\n        var urlPartner = 'https://tm.uol.com.br/setcookie.html?client=20181206';\n        var ifrm = document.createElement('iframe');\n            ifrm.setAttribute('src', urlPartner);\n            ifrm.style.width = '0px';\n            ifrm.style.height = '0px';\n            ifrm.style.border = '0px';\n            ifrm.style.display = 'none';\n            ifrm.setAttribute('width', '0');\n            ifrm.setAttribute('height', '0');\n            ifrm.setAttribute('margineidth', '0');\n            ifrm.setAttribute('marginheight', '0');\n            ifrm.setAttribute('frameborder', '0');\n            ifrm.setAttribute('scrolling', 'no');\n        if(document.body !== null) {\n            document.body.appendChild(ifrm);\n        }\n    }\n\n    function startAfterOnload() {\n        if(document.readyState && document.readyState == 'complete') {\n            dfpRtTrack();\n        } else {\n            setTimeout(startAfterOnload, 100);\n        }\n    }\n\n    startAfterOnload();\n})();",
            globalScope: [],
          },
          name: 'Retargeting Manual - Longevidade - Bradesco',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80735/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "(function() {\n    var a = String(Math.random()) * 10000000000000;\n    new Image().src = 'https://pubads.g.doubleclick.net/activity;dc_iu=/8804/DFPAudiencePixel;ord=' + a + ';dc_seg=6516244851?';\n  })();",
            globalScope: [],
          },
          name: 'Retargeting - Conteudo Publicitario - Viva Bem - Merck - 80735',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80666/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "(function() {\n    var a = String(Math.random()) * 10000000000000;\n    new Image().src = 'https://pubads.g.doubleclick.net/activity;dc_iu=/8804/DFPAudiencePixel;ord=' + a + ';dc_seg=6500838896?';\n  })();",
            globalScope: [],
          },
          name: 'Retargeting - Conteudo Publicitario - Viva Bem - Merck - 80666',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?estilo(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/app=uol/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/estilo\\.uol\\.com\\.br\\/ao-vivo\\/2017\\/10\\/18\\/21-forum-da-longevidade-bradesco-seguros.htm(.*)?$/)',
              "universal_variable.page.tags.join(',').match(/78684/)",
            ],
          },
          events: ['onload'],
          config: {
            codeInjector:
              '//insere container lateral\ntry {\n    var wrapperLateral = document.getElementsByClassName("mod composto")[document.getElementsByClassName("mod composto").length -1],\n        Bann300x250extraDireita = document.createElement("div");\n    Bann300x250extraDireita.setAttribute("id", "banner-300x250-extra-direita");\n    Bann300x250extraDireita.setAttribute("style", "width:300px; margin:10px auto 0 auto;");\n\n    wrapperLateral = wrapperLateral.parentElement;\n    wrapperLateral.appendChild(Bann300x250extraDireita);\t\t\n    window.uolads && uolads.push({id:"banner-300x250-extra-direita"});\n} catch(ex){}\n\n\n//insere containers rodape\ntry{\n    if (!navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|wpdesktop|opera mini/i)) {\n        var wrapperRodape = document.getElementById("conteudo-principal"),\n            Bann300x250extra = document.createElement("div");\n        Bann300x250extra.setAttribute("id", "banner-300x250-extra");\n        wrapperRodape.appendChild(Bann300x250extra);\n\n        var leftAd = document.createElement(\'div\'),\n            rightAd = document.createElement(\'div\');\n\n        leftAd.setAttribute(\'id\', \'banner-300x250-extra-1\');\n        rightAd.setAttribute(\'id\', \'banner-300x250-extra-2\');\n        leftAd.style.cssText = \'float:left\';\n        rightAd.style.cssText = \'float:left\';\n        Bann300x250extra.appendChild(leftAd);\n        Bann300x250extra.appendChild(rightAd);\n\n        window.uolads && uolads.push({id:"banner-300x250-extra-1"});\n        window.uolads && uolads.push({id:"banner-300x250-extra-2"});\n    }\n} catch(ex){}',
            globalScope: [],
          },
          name: 'Injeta 300x250 - Lateral e Rodapé - Internas',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "    (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:1864078,hjsv:6};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
            globalScope: [],
          },
          name: 'HotJar - Universa',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "    (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:1216465,hjsv:6};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n",
            globalScope: [],
          },
          name: 'HotJar',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/conteudo\\-de\\-marca\\/qualy\\-vita\\-omega\\-6/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window,document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '2285655021489680'); \nfbq('track', 'PageView');",
            globalScope: [],
          },
          name: 'Facebook - Viva Bem - Qualy - Vita Omega 6',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?universa(\\.uol)?(\\.com)?(\\.br)?.*/)',
              'document.location.href.match(/http(s)?:\\/\\/(www\\.)?(uol.(com)?\\.?(br)?.?)?vivabem(\\.uol)?(\\.com)?(\\.br)?.*/)',
            ],
            disable: [],
          },
          events: ['onload'],
          config: {
            codeInjector:
              "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\nn.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\ndocument,'script','https://connect.facebook.net/en_US/fbevents.js');\n\nfbq('init', '1425099884432564');\nfbq('track', \"PageView\");",
          },
          name: 'Facebook - Viva Bem',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/youse\\-unidas\\-pela\\-luta/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//pubads.g.doubleclick.net/activity;xsp=4405197;ord="+ a +"?";',
            globalScope: [],
          },
          name: 'DFP - Youse - Unidas pela luta - Visita',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/youse\\-unidas\\-pela\\-luta/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//pubads.g.doubleclick.net/activity;xsp=4405194;ord="+ a +"?";',
            globalScope: [],
          },
          name: 'DFP - Youse - Unidas pela luta - Pageview',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/youse\\-tres\\-vezes\\-mais\\-forte/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//pubads.g.doubleclick.net/activity;xsp=4405191;ord="+ a +"?";',
            globalScope: [],
          },
          name: 'DFP - Youse - Tres vezes mais forte - Visita',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/youse\\-tres\\-vezes\\-mais\\-forte/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//pubads.g.doubleclick.net/activity;xsp=4405188;ord="+ a +"?";',
            globalScope: [],
          },
          name: 'DFP - Youse - Tres vezes mais forte - Pageview',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/youse\\-outubro\\-rosa/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//pubads.g.doubleclick.net/activity;xsp=4405185;ord="+ a +"?";',
            globalScope: [],
          },
          name: 'DFP - Youse - Outubro Rosa - Visita',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/youse\\-outubro\\-rosa/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//pubads.g.doubleclick.net/activity;xsp=4405182;ord="+ a +"?";',
            globalScope: [],
          },
          name: 'DFP - Youse - Outubro Rosa - Pageview',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/youse\\-aprenda\\-a\\-se\\-cuidar/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//pubads.g.doubleclick.net/activity;xsp=4405437;ord="+ a +"?";',
            globalScope: [],
          },
          name: 'DFP - Youse - Aprenda a se cuidar - Pageview',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80735/)"],
            disable: [
              "(function()  \t{     try {           \tvar isMobile = {              \tAndroid: function() \t{                 return navigator.userAgent.match(/Android/i);\t},              \tBlackBerry: function() {                 return navigator.userAgent.match(/BlackBerry/i);\t},              \tiOS: function() {                 return navigator.userAgent.match(/iPhone|iPad|iPod/i);             }, \tOpera: function() {                 return navigator.userAgent.match(/Opera Mini/i);             }, \tWindows: function() {                 return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);         \t},              \tany: function() {                 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());       }          \t};                   \tif( isMobile.any() )             return 'true';          \telse             return 'false';     } catch(e){         return 'false';     }  \t})() == 'false'",
            ],
          },
          events: ['onready'],
          config: {
            codeInjector:
              'document.querySelector(".bannersticky-wrapper").style.display = "none";\ndocument.querySelector(".bannersticky-base").style.display = "none";',
            globalScope: [],
          },
          name: 'DFP - Viva Bem - Conteudo - Merck - tag 80735 - Hide Mobile',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^http(s):\\/\\/www\\.uol\\.com\\.br\\/vivabem\\/conexao\\-vivabem(\\/)?$/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            codeInjector:
              'document.querySelector(".bannersticky-wrapper").style.display = "none";\ndocument.querySelector(".bannersticky-base").style.display = "none";\ndocument.querySelector(".title-ads").style.display = "none";\ndocument.querySelector(".fixed-sidebar .ads-wrapper").style.display = "none";\n',
            globalScope: [],
          },
          name: 'DFP - Viva Bem - Conexão Viva Bem - Hide',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/garnier-anuncia-plano-de-zerar-plastico-e-ser-100-sustentavel-ate-2025/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            codeInjector:
              'document.querySelector(".bannersticky-wrapper").style.display = "none";\ndocument.querySelector(".bannersticky-base").style.display = "none";\ndocument.querySelector(".fixed-sidebar .ads-wrapper").style.display = "none";',
            globalScope: [],
          },
          name: 'DFP - Universa - Conteudo - Garnier - Hide',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/70-das-mulheres-negras-nao-estao-satisfeitas-com-makes-diz-pesquisa-avon/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            codeInjector:
              'document.querySelector(".bannersticky-wrapper").style.display = "none";\ndocument.querySelector(".bannersticky-base").style.display = "none";\ndocument.querySelector(".fixed-sidebar .ads-wrapper").style.display = "none";',
            globalScope: [],
          },
          name: 'DFP - Universa - Conteudo - Avon - Hide',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/camila-fremder-fala-de-queda-de-cabelo-no-pos-parto-e-ensina-meio-rabo/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            codeInjector:
              'document.querySelector(".bannersticky-wrapper").style.display = "none";\ndocument.querySelector(".bannersticky-base").style.display = "none";',
            globalScope: [],
          },
          name: 'DFP - Universa - Camia Frender - Hide',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80418/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "(function() {\n    function dfpRtTrack() {\n        var urlPartner = 'https://tm.uol.com.br/setcookie.html?client=1055092989';\n        var ifrm = document.createElement('iframe');\n            ifrm.setAttribute('src', urlPartner);\n            ifrm.style.width = '0px';\n            ifrm.style.height = '0px';\n            ifrm.style.border = '0px';\n            ifrm.style.display = 'none';\n            ifrm.setAttribute('width', '0');\n            ifrm.setAttribute('height', '0');\n            ifrm.setAttribute('margineidth', '0');\n            ifrm.setAttribute('marginheight', '0');\n            ifrm.setAttribute('frameborder', '0');\n            ifrm.setAttribute('scrolling', 'no');\n        if(document.body !== null) {\n            document.body.appendChild(ifrm);\n        }\n    }\n\n    function startAfterOnload() {\n        if(document.readyState && document.readyState == 'complete') {\n            dfpRtTrack();\n        } else {\n            setTimeout(startAfterOnload, 100);\n        }\n    }\n\n    startAfterOnload();\n})();",
            globalScope: [],
          },
          name: 'DFP - Retargeting Manual - VITASAY - TAG 80418',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80415/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "(function() {\n    function dfpRtTrack() {\n        var urlPartner = 'https://tm.uol.com.br/setcookie.html?client=1055943008';\n        var ifrm = document.createElement('iframe');\n            ifrm.setAttribute('src', urlPartner);\n            ifrm.style.width = '0px';\n            ifrm.style.height = '0px';\n            ifrm.style.border = '0px';\n            ifrm.style.display = 'none';\n            ifrm.setAttribute('width', '0');\n            ifrm.setAttribute('height', '0');\n            ifrm.setAttribute('margineidth', '0');\n            ifrm.setAttribute('marginheight', '0');\n            ifrm.setAttribute('frameborder', '0');\n            ifrm.setAttribute('scrolling', 'no');\n        if(document.body !== null) {\n            document.body.appendChild(ifrm);\n        }\n    }\n\n    function startAfterOnload() {\n        if(document.readyState && document.readyState == 'complete') {\n            dfpRtTrack();\n        } else {\n            setTimeout(startAfterOnload, 100);\n        }\n    }\n\n    startAfterOnload();\n})();",
            globalScope: [],
          },
          name: 'DFP - Retargeting Manual - TAMARINE 2020 - TAG 80415',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80414/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "(function() {\n    function dfpRtTrack() {\n        var urlPartner = 'https://tm.uol.com.br/setcookie.html?client=1055093001';\n        var ifrm = document.createElement('iframe');\n            ifrm.setAttribute('src', urlPartner);\n            ifrm.style.width = '0px';\n            ifrm.style.height = '0px';\n            ifrm.style.border = '0px';\n            ifrm.style.display = 'none';\n            ifrm.setAttribute('width', '0');\n            ifrm.setAttribute('height', '0');\n            ifrm.setAttribute('margineidth', '0');\n            ifrm.setAttribute('marginheight', '0');\n            ifrm.setAttribute('frameborder', '0');\n            ifrm.setAttribute('scrolling', 'no');\n        if(document.body !== null) {\n            document.body.appendChild(ifrm);\n        }\n    }\n\n    function startAfterOnload() {\n        if(document.readyState && document.readyState == 'complete') {\n            dfpRtTrack();\n        } else {\n            setTimeout(startAfterOnload, 100);\n        }\n    }\n\n    startAfterOnload();\n})();",
            globalScope: [],
          },
          name: 'DFP - Retargeting Manual - MIORRELAX 2020 - TAG 80414',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80417/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "(function() {\n    function dfpRtTrack() {\n        var urlPartner = 'https://tm.uol.com.br/setcookie.html?client=1055557088';\n        var ifrm = document.createElement('iframe');\n            ifrm.setAttribute('src', urlPartner);\n            ifrm.style.width = '0px';\n            ifrm.style.height = '0px';\n            ifrm.style.border = '0px';\n            ifrm.style.display = 'none';\n            ifrm.setAttribute('width', '0');\n            ifrm.setAttribute('height', '0');\n            ifrm.setAttribute('margineidth', '0');\n            ifrm.setAttribute('marginheight', '0');\n            ifrm.setAttribute('frameborder', '0');\n            ifrm.setAttribute('scrolling', 'no');\n        if(document.body !== null) {\n            document.body.appendChild(ifrm);\n        }\n    }\n\n    function startAfterOnload() {\n        if(document.readyState && document.readyState == 'complete') {\n            dfpRtTrack();\n        } else {\n            setTimeout(startAfterOnload, 100);\n        }\n    }\n\n    startAfterOnload();\n})();",
            globalScope: [],
          },
          name: 'DFP - Retargeting Manual - MARACUGINA 2020 - TAG 80417',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ["universal_variable.page.tags.join(',').match(/80416/)"],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "(function() {\n    function dfpRtTrack() {\n        var urlPartner = 'https://tm.uol.com.br/setcookie.html?client=1055093010';\n        var ifrm = document.createElement('iframe');\n            ifrm.setAttribute('src', urlPartner);\n            ifrm.style.width = '0px';\n            ifrm.style.height = '0px';\n            ifrm.style.border = '0px';\n            ifrm.style.display = 'none';\n            ifrm.setAttribute('width', '0');\n            ifrm.setAttribute('height', '0');\n            ifrm.setAttribute('margineidth', '0');\n            ifrm.setAttribute('marginheight', '0');\n            ifrm.setAttribute('frameborder', '0');\n            ifrm.setAttribute('scrolling', 'no');\n        if(document.body !== null) {\n            document.body.appendChild(ifrm);\n        }\n    }\n\n    function startAfterOnload() {\n        if(document.readyState && document.readyState == 'complete') {\n            dfpRtTrack();\n        } else {\n            setTimeout(startAfterOnload, 100);\n        }\n    }\n\n    startAfterOnload();\n})();",
            globalScope: [],
          },
          name: 'DFP - Retargeting Manual - FINN 2020 - TAG 80416',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: ['document.location.href.match(/tresemme\\-day\\-2\\.htm\\#embed\\-1/)'],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=28760602&PluID=0&ord=%n&rtu=-1";',
            globalScope: [],
          },
          name: 'Conteudo Publicitario - Tresemme - embed-1',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/dove\\-o\\-famoso\\-day\\-2\\.htm\\#o\\-dia\\-dos\\-fios\\-perfeitos/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=28737264&PluID=0&ord=%n&rtu=-1";',
            globalScope: [],
          },
          name: 'Conteudo Publicitario - Dove - O dia dos fios perfeitos',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/dove\\-o\\-famoso\\-day\\-2\\.htm\\#mix\\-de\\-desejos/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "//bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=28737265&PluID=0&ord=%n&rtu=-1";',
            globalScope: [],
          },
          name: 'Conteudo Publicitario - Dove - Mix de desejos',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/dove\\-o\\-famoso\\-day\\-2\\.htm\\#as\\-sobreviventes/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              'var axel = Math.random()+"";\nvar a = axel * 10000000000000;\nvar IntPix = new Image();\nIntPix.src= "bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=28737266&PluID=0&ord=%n&rtu=-1";',
            globalScope: [],
          },
          name: 'Conteudo Publicitario - Dove - As sobreviventes',
        },
        {
          module: 'CodeInjector',
          rules: { enable: ['document.location.href.match(/.*/)'], disable: [] },
          events: ['onload'],
          config: {
            codeInjector:
              '(function () {\n  "use strict";\n\n  var createPixel = function createPixel(type, src) {\n    return function (id) {\n      var pixel = document.createElement(type);\n      var axel = Math.random() + "";\n      var a = axel * 10000000000000;\n      pixel.src = src(a, id);\n      pixel.style.display = "none";\n      document.body.appendChild(pixel);\n    };\n  };\n\n  var pixelMap = {\n    0: "41111038",\n    1: "41111042",\n    2: "41111044",\n    3: "41111039",\n    4: "41111040",\n  };\n  var triggerPixel = createPixel("img", function (rand, id) {\n    return "//a2.adform.net/adfserve/?bn=" + pixelMap[id] + ";1x1inv=1;srctype=3;ord=" + rand;\n  });\n  var getPage = window.location.href;\n  if (getPage.match(/noticias\\/redacao\\/2020\\/10\\/09\\/7-coisas-que-seu-ginecologista-gostaria-que-voce-soubesse.htm/)) {\n    triggerPixel(0);\n  } else if (getPage.match(/reportagens-especiais\\/dia-v---menstruacao\\/index.htm/)) {\n    triggerPixel(1);\n  } else if (getPage.match(/faq\\/colica-menstrual-por-que-sentimos-dor-e-como-aliviar-incomodo.htm/)) {\n    triggerPixel(2);\n  } else if (getPage.match(/especiais\\/conteudo-de-marca\\/bayer-menstruacao.htm#cover/)) {\n    triggerPixel(3);\n  } else if (getPage.match(/especiais\\/conteudo-de-marca\\/bayer-menstruacao-intensa.htm\\?utm_source=uol&utm_medium=conteudodemarca#cover/)) {\n    triggerPixel(4);\n  }\n})();\n',
            globalScope: [],
          },
          name: 'Conteudo Publicitario - Bayer',
        },
        {
          module: 'TailtargetTrack',
          rules: { enable: ['document.location.href.match(/.*/)'], disable: [] },
          events: ['onready'],
          config: {},
          name: 'Tail Target',
        },
        {
          module: 'ModulesInjectorAsync',
          rules: { enable: ['document.location.href.match(/.*/)'], disable: [] },
          events: ['autostart'],
          config: { src: 'https://tm.jsuol.com.br/modules/policy-banner.js', type: 'script' },
          name: 'Banner de consentimento de cookies',
        },
        {
          module: 'ModulesInjectorAsync',
          rules: {
            enable: [
              'document.location.href.match(/(https:\\/\\/(www\\.)?)((uol\\.com\\.br\\/universa\\/colunas\\/)(luiza-sahd|matheus-pichonelli|soltos|mayumi-sato|brenda-fucuta))\\/(20)/)',
              'document.location.href.match(/(https:\\/\\/(www\\.)?)((uol\\.com\\.br\\/vivabem\\/colunas\\/)(paulo-chaccur|dante-senra|danta-senrra|cristiane-segatto|nuno-cobra-jr|jairo-bouer|mindfulness-para-o-dia-a-dia|guilherme-giorelli|chef-funcional|ageless|fernando-guerreiro|veronica-laino|dr-cristiano-nabuco|sophie-deram|rico-vasconcelos))\\/(20)/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: { src: '//tm.jsuol.com.br/modules/content-gate.js', type: 'script' },
          name: 'Paywall VIVABEM',
        },
        {
          module: 'ModulesInjectorAsync',
          rules: { enable: ['document.location.href.match(/.*/)'], disable: [] },
          events: ['autostart'],
          config: { src: '//tm.jsuol.com.br/modules/dmp-uol-sync.js', type: 'script' },
          name: 'Projeto - UOL DMP',
        },
      ]);
    })(window, document);
  })();
}
