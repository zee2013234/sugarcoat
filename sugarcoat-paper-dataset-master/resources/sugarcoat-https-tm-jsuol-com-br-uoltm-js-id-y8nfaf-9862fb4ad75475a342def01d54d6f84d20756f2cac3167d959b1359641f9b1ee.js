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
        if (window.UOLPD.TagManager['y8nfaf']) {
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
          const $___old_0ee06e314dd6ead2 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_0ee06e314dd6ead2)
              ({}.constructor.defineProperty(
                window,
                'localStorage',
                $___stub_a011c28886b08277.localStorage
              ));
            return function () {
              try {
                if (window.localStorage.getItem('trackManager') == 'true') {
                  return true;
                }
              } catch (e) {}
              if ($public.getRaffledRate() <= samplingRate) {
                return true;
              }
              return false;
            }.apply(this, arguments);
          } finally {
            if ($___old_0ee06e314dd6ead2)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_0ee06e314dd6ead2));
          }
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
          return 'y8nfaf';
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
        var IframeCreatorSchema = {
          properties: {
            container: 'isString',
            html: 'isString',
            css: 'isString',
            width: 'isNumericString',
            height: 'isNumericString',
            callback: 'isString',
            isIframe: 'isArray',
          },
          required: ['container', 'html', 'isIframe'],
        };
        function IframeCreator () {
          var $private = {};
          var $public = this;
          $public.logger = new Logs();
          $public.trackManager = new TrackManager();
          $private.schema = new Schema(IframeCreatorSchema);
          $private.typeValidator = new TypeValidator();
          $public.__constructor = (function () {
            $public.logger.setPrefix('UOLPD.TagManager.IframeCreator');
            $public.trackManager.setModuleName('iframe-creator');
          })();
          $public.init = function (config, namTag, namespace) {
            $private.configureLogger(namTag, namespace);
            if ($private.schema.isValid(config)) {
              $private.waitForContainer(config);
            } else {
              var invalidProperties = $private.schema.invalidProperties.join(', ');
              var errorMessage =
                'A configuração fornecida pelo Tag Manager está inválida, as seguintes propriedades: ' +
                invalidProperties +
                ' não existem ou são inválidas';
              $private.logErrorMessage(
                'invalid_config',
                errorMessage,
                'O objeto de configuração está inválido'
              );
            }
          };
          $private.configureLogger = function (namTag, namespace) {
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = Date.now();
            $public.trackManager.trackSuccess('Execucoes Iniciadas');
          };
          $private.waitForContainer = function (config, counter) {
            var container = document.querySelector(config.container);
            counter = counter || 0;
            if (container || counter > 5000) {
              $public.logger.debug(
                'Executando o callback depois de ' + counter + 'ms',
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $private.createElementInContainer(config, container);
              return;
            }
            window.setTimeout(function () {
              counter += 50;
              $private.waitForContainer(config, counter);
            }, 50);
          };
          $private.calculateTimeSpent = function (timeStampInit) {
            if (!$private.typeValidator.isDefined(timeStampInit)) {
              return Date.now() - $private.timeStampInit;
            }
            return Date.now() - timeStampInit;
          };
          $private.createElementInContainer = function (config, container) {
            if (!container) {
              var errorMessage =
                'O container com o querySelector "' +
                config.container +
                '" é inválido ou não existe';
              $private.logErrorMessage('missing_dom_element', errorMessage, 'container_notfound');
              return;
            }
            if (config.isIframe[0] === 'true') {
              $private.createIframe(config, container);
              return;
            }
            $private.createHtml(config, container);
          };
          $private.logErrorMessage = function (errorType, errorMessage, trackMessage) {
            var isValidErrorType = $private.typeValidator.isString(errorType),
              isValidErrorMessage = $private.typeValidator.isString(errorMessage);
            if (!isValidErrorType || !isValidErrorMessage) {
              return;
            }
            if (!$private.typeValidator.isString(trackMessage)) {
              trackMessage = errorMessage;
            }
            $public.logger.error(
              errorMessage,
              $private.namTag,
              $private.namespace,
              $private.calculateTimeSpent()
            );
            $public.trackManager.trackError(errorType, trackMessage);
          };
          $private.createIframe = function (config, container) {
            var iframe = $private.buildIframe(config.width, config.height);
            container.appendChild(iframe);
            if (config.callback) {
              $private.readyStateListener(iframe, config.callback);
            }
            $private.addIframeContent(iframe, config.html);
            $private.addIframeStyle(iframe, config.css);
            $private.addIframeTmScript(iframe);
            $public.logger.log(
              'O iframe foi criado com sucesso',
              $private.namTag,
              $private.namespace,
              $private.calculateTimeSpent()
            );
            $public.trackManager.trackSuccess('Execucoes Finalizadas');
          };
          $private.buildIframe = function (width, height) {
            var iframe = document.createElement('iframe');
            $private.addAttributesToElement(iframe, {
              class: 'uoltm-iframe',
              width: width || '100%',
              height: height,
              border: '0',
              frameBorder: '0',
              scrolling: 'no',
            });
            return iframe;
          };
          $private.addAttributesToElement = function (element, attributes) {
            if (!element || !attributes) {
              return;
            }
            for (var attribute in attributes) {
              if (!attributes[attribute]) {
                continue;
              }
              element.setAttribute(attribute, attributes[attribute]);
            }
            return element;
          };
          $private.readyStateListener = function (iframe, callback) {
            var hasEventListener = document.addEventListener !== undefined;
            var eventListener = hasEventListener ? 'addEventListener' : 'attachEvent';
            var listenerEvent = hasEventListener ? 'load' : 'onload';
            iframe[eventListener](listenerEvent, function (event) {
              $private.execJsCode(callback);
            });
          };
          $private.execJsCode = function (jsCode) {
            try {
              eval(jsCode);
            } catch (err) {
              var warnMessage =
                'O Tag Manager previniu um erro de execução de javascript. Favor verificar a implementação de sua tag';
              $public.logger.warn(
                warnMessage,
                $private.namTag,
                $private.namespace,
                $private.calculateTimeSpent()
              );
              $public.trackManager.trackError('invalid_js_execution', warnMessage);
            }
          };
          $private.addIframeContent = function (iframe, html) {
            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write(html);
            iframe.contentWindow.document.close();
          };
          $private.addIframeStyle = function (iframe, css) {
            var styleSheet = $private.createStyleSheet(css);
            if (styleSheet) {
              iframe.contentWindow.document.head.appendChild(styleSheet);
            }
          };
          $private.createStyleSheet = function (css) {
            if (!css) {
              return;
            }
            var styleSheet = document.createElement('style');
            $private.addAttributesToElement(styleSheet, {
              id: 'tmStyleSheet',
              rel: 'styleSheet',
              type: 'text/css',
            });
            styleSheet.innerHTML = css;
            return styleSheet;
          };
          $private.addIframeTmScript = function (iframe) {
            var tmScript = document.createElement('script');
            $private.addAttributesToElement(tmScript, {
              type: 'text/javascript',
              src: '//tm.jsuol.com.br/uoltm.js?id=y8nfaf',
            });
            iframe.contentWindow.document.head.appendChild(tmScript);
          };
          $private.createHtml = function (config, container) {
            container.innerHTML = config.html;
            var styleSheet = $private.createStyleSheet(config.css);
            if (styleSheet) {
              container.appendChild(styleSheet);
            }
            var innerScripts = $private.getInnerJsCode(container);
            if (innerScripts) {
              $private.execJsCode(innerScripts);
            }
            if (config.callback) {
              $private.execJsCode(config.callback);
            }
            $public.logger.log(
              'O HTML foi Injetado com sucesso',
              $private.namTag,
              $private.namespace,
              $private.calculateTimeSpent()
            );
            $public.trackManager.trackSuccess('Execucoes Finalizadas');
          };
          $private.getInnerJsCode = function (element) {
            var scripts = element.querySelectorAll('script'),
              scriptsContent = [];
            for (var i = 0; i < scripts.length; i++) {
              scriptsContent.push(scripts[i].innerHTML);
            }
            return scriptsContent.join(';');
          };
        }
        var __monitoracaoJsuol = 'tm.jsuol.com.br/modules/iframe-creator.js';
        var namespace = new NameSpace('IframeCreator');
        namespace.init = function (config, namTag) {
          return new IframeCreator().init(config, namTag, 'IframeCreator');
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
            $private.repoId = 'y8nfaf';
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
            const $___old_1cca0c898f855f89 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_1cca0c898f855f89)
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
              if ($___old_1cca0c898f855f89)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_1cca0c898f855f89));
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
        function Sesame () {
          var $private = {};
          var $public = this;
          $private.typeValidator = new TypeValidator();
          $private.trackManager = new TrackManager();
          $private.trackManager.setModuleName('Sesame');
          $public.logger = new Logs();
          $public.logger.setPrefix('UOLPD.TagManager.Sesame');
          $private.googleTopUrl = '//pagead2.googlesyndication.com/pagead/js/google_top.js';
          $private.presentElements = [
            'video',
            'object[value="mais.uol"]',
            'object[src="mais.uol.com.br"]',
            'object[data="mais.uol.com.br"]',
          ];
          $public.init = function (namTag, namespace) {
            $private.namTag = namTag;
            $private.namespace = namespace;
            $private.timeStampInit = new Date().getTime();
            $private.trackManager.trackSuccess('Execucoes Iniciadas');
            var interval = window.setInterval(function () {
              if (document.readyState && document.readyState == 'complete') {
                window.clearInterval(interval);
                $private.includeSesame();
              }
            }, 100);
          };
          $private.includeSesame = function () {
            if (!$private.hasVideoOrObject()) {
              $private.trackError(
                'invalid_element',
                'O elemento que utilizará o Sesame não é válido'
              );
              return;
            }
            if (!$private.hasElement('iframe[id=google_top]')) {
              $public.appendElement($public.createIframe());
            }
            if (!$private.hasElement('script[src*="' + $private.googleTopUrl + '"]')) {
              $public.appendElement($public.createTagScript());
            }
            $public.logger.log(
              'O plugin foi executado corretamente',
              $private.namTag,
              $private.namespace,
              new Date().getTime() - $private.timeStampInit
            );
            $private.trackManager.trackSuccess('Execucoes Finalizadas');
          };
          $private.hasVideoOrObject = function () {
            for (var i = 0; i < $private.presentElements.length; i++) {
              if ($private.hasElement($private.presentElements[i])) {
                return true;
              }
            }
            return false;
          };
          $private.hasElement = function (query) {
            var result = document.querySelectorAll(query);
            if (result.length === 1) {
              return true;
            }
            return false;
          };
          $public.appendElement = function (element) {
            if (!element) {
              $private.trackError(
                'invalid_element',
                'O elemento que utilizará o Sesame não foi encontrado'
              );
              return;
            }
            document.body.appendChild(element);
          };
          $public.createIframe = function () {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('data-video-ads', 'true');
            iframe.setAttribute('id', 'google_top');
            iframe.setAttribute('name', 'google_top');
            iframe.setAttribute('style', 'display:none;');
            return iframe;
          };
          $public.createTagScript = function () {
            var script = document.createElement('script');
            script.setAttribute('src', $private.googleTopUrl);
            return script;
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
        var __monitoracaoJsuol = 'tm.jsuol.com.br/modules/sesame.js';
        var namespace = new NameSpace('Sesame');
        namespace.init = function (config, namTag) {
          return new Sesame().init(namTag, 'Sesame');
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
            requestDelay: 'y8nfaf' == 'tuvy6z' ? 'isString' : 'isNumericString',
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
            var repoId = 'y8nfaf';
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
              $private.repoId = 'y8nfaf';
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
          $private.repoId = 'y8nfaf';
          $private.accountId = '552';
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
              if ('y8nfaf' == 'chygcf') {
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
            const $___old_dbf79119deef88d7 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_dbf79119deef88d7)
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
              if ($___old_dbf79119deef88d7)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_dbf79119deef88d7));
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
            $private.configureLogger(namTag, namespace);
            $public.trackManager.trackSuccess('Execucoes Iniciadas');
            $private.PREBID_TIMEOUT = config.prebidTimeout || 700;
            $private.appendScript();
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
            if ($public.adUnits.video.length && !window.UOLPD.TagManager.Prebid.videoRequested) {
              $private.addAttrAdUnits($public.adUnits.video);
              $private.requestVideos();
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
            var codRepo = 'y8nfaf';
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
                rpVisitor.appnexus.keywords[key] = rpVisitor.appnexus.keywords[key] || profiles;
              }
            }
            $private.setAppnexusUserParam(rpVisitor.appnexus, ttProfiles);
            return rpVisitor;
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
                      var codRepo = 'y8nfaf';
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
              var codRepo = 'y8nfaf';
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
            var codRepo = 'y8nfaf';
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
              "(function() {\n\tif ('y8nfaf' == 'a06jq7' || 'y8nfaf' == 'wapbwn') return;\n\tvar script = document.createElement('script');\n\tscript.setAttribute('src', '//tracker.bt.uol.com.br/partner?source=tagmanager');\n\tdocument.head.appendChild(script);\n})()",
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
          var __monitoracaoJsuol = 'tm.jsuol.com.br/y8/nf/y8nfaf.js';
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
          try {
            if (eval(rules.join(' || '))) {
              return true;
            }
          } catch (e) {
            return false;
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
          const $___old_872dece710164902 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'doNotTrack'
          );
          try {
            if ($___old_872dece710164902)
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
            if ($___old_872dece710164902)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'doNotTrack',
                $___old_872dece710164902
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
          $private.addUOLId();
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
        $private.addUOLId = function () {
          const $___old_a24f19da63d54e9b = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_a24f19da63d54e9b)
              ({}.constructor.defineProperty(
                window,
                'localStorage',
                $___stub_a011c28886b08277.localStorage
              ));
            return function () {
              try {
                window.UOLPD.dataLayer.UOLID = JSON.parse(
                  window.localStorage.getItem('uolDataLayer')
                )['UOLID'];
                $private.sendUOLIdToTail();
              } catch (e) {}
              $private.remoteStorage.get('uolDataLayer', function (key, value) {
                var dataLayer;
                try {
                  dataLayer = JSON.parse(value);
                } catch (e) {
                  dataLayer = {};
                }
                if (!$private.typeValidator.isObject(dataLayer)) {
                  dataLayer = {};
                }
                if (!dataLayer['UOLID']) {
                  dataLayer['UOLID'] = $private.UUID.generate();
                  try {
                    $private.remoteStorage.set(key, JSON.stringify(dataLayer), function () {});
                    window.localStorage.setItem(key, JSON.stringify(dataLayer));
                    window.UOLPD.dataLayer.UOLID = dataLayer['UOLID'];
                  } catch (err) {}
                } else {
                  window.UOLPD.dataLayer.UOLID = dataLayer['UOLID'];
                }
              });
            }.apply(this, arguments);
          } finally {
            if ($___old_a24f19da63d54e9b)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_a24f19da63d54e9b));
          }
        };
        $private.sendUOLIdToTail = function () {
          if (window.UOLPD.dataLayer.UOLID) {
            $private.sha256(window.UOLPD.dataLayer.UOLID, function (hashBuffer) {
              var hashArray = Array.from(new Uint8Array(hashBuffer));
              var hashHex = hashArray
                .map(function (b) {
                  return ('00' + b.toString(16)).slice(-2);
                })
                .join('');
              var trackImg = document.createElement('img');
              var trackURL = 'https://m.t.tailtarget.com/sync/TT-10162-1/' + hashHex;
              trackImg.setAttribute('src', trackURL);
            });
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
          const $___old_396bded34ae97a72 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_396bded34ae97a72)
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
            if ($___old_396bded34ae97a72)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_396bded34ae97a72));
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
          const $___old_243368c13df58c1b = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_243368c13df58c1b)
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
            if ($___old_243368c13df58c1b)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_243368c13df58c1b));
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
          var repositoryName = $private.createRepositoryName('Observatorios');
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
          var repAccount = '552';
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
      nameSpace['y8nfaf'] = nameSpace['y8nfaf'] || {};
      nameSpace['y8nfaf'].version = '182';
      var tagManager = new TagManager(nameSpace, 'y8nfaf', '182');
      nameSpace.trigger = tagManager.trigger;
      tagManager.init([
        {
          module: 'Prebid',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            bids:
              "[{\n    code: 'banner-300x250-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-300x250-2-area',\n   mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n   },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-300x250-3-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n         }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-300x250-4-area',\n   mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n   },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-300x250-5-area',\n   mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n   },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-300x250-6-area',\n    mediaTypes: {\n        banner: {sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-300x250-7-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-300x600-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 600]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-300x600-2-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 600]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-300x50-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 50],[320, 50]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-300x50-2-area',\n   mediaTypes: {\n        banner: {\n            sizes: [[300, 50],[320, 50]]\n        }\n   },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-728x90-area',\n   mediaTypes: {\n        banner: {\n            sizes: [[728, 90]]\n        }\n   },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-728x90-2-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[728, 90]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n    code: 'banner-970x250-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752372\n            }\n        }]\n},\n{\n            code: 'banner-native-lateral-1-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752983,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n        {\n            code: 'banner-native-lateral-2-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752983,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t        {\n            code: 'banner-native-rodape-1-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752983,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t        {\n            code: 'banner-native-rodape-2-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752983,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t        {\n            code: 'banner-native-rodape-3-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752983,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n        {\n            code: 'banner-native-home',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752983,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n        {\n            code: '400x100-top-box-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752983,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t{\n    code: 'in-article',\n    mediaTypes: {\n        video: {\n            playerSize: [640, 480],\n            context: 'instream'\n        }\n    },\n    bids: [{\n        bidder: 'appnexus',\n        params: {\n            placementId: 20046411,\n            video: {\n                skippable: false,\n                playback_method: ['auto_play_sound_off']\n            }\n        }\n    }]\n}]",
            prebidTimeout: '1500',
          },
          name: 'Prebid - Observatorio G',
        },
        {
          module: 'Prebid',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            bids:
              "[{\n    code: 'banner-300x250-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-300x250-2-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-300x250-3-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-300x250-4-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-300x250-5-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-300x250-6-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-300x250-7-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-300x600-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 600]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-300x600-2-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 600]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-300x50-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 50],[320, 50]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-300x50-2-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 50],[320, 50]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-728x90-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[728, 90]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-728x90-2-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[728, 90]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n    code: 'banner-970x250-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185980,\n            zoneId: 904474\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752359\n            }\n        }]\n},\n{\n            code: 'banner-native-lateral-1-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752969,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n        {\n            code: 'banner-native-lateral-2-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752969,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t        {\n            code: 'banner-native-rodape-1-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752969,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t        {\n            code: 'banner-native-rodape-2-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752969,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t        {\n            code: 'banner-native-rodape-3-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752969,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n        {\n            code: 'banner-native-home',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752969,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n        {\n            code: '400x100-top-box-1',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752969,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t{\n    code: 'in-article',\n    mediaTypes: {\n        video: {\n            playerSize: [640, 480],\n            context: 'instream'\n        }\n    },\n    bids: [{\n        bidder: 'appnexus',\n        params: {\n            placementId: 20046360,\n            video: {\n                skippable: false,\n                playback_method: ['auto_play_sound_off']\n            }\n        }\n    }]\n}]",
            prebidTimeout: '1500',
          },
          name: 'Prebid - Observatorio dos Famosos',
        },
        {
          module: 'Prebid',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            bids:
              "[{\n        code: 'banner-320x50-2-area',\n        mediaTypes: {\n            banner: {\n                sizes: [\n                    [320, 50]\n                ]\n            }\n        },\n        bids: [{\n\tbidder: 'rubicon',\n\tparams: {\n\t\taccountId: 11976,\n\t\tsiteId: 351150,\n\t\tzoneId: 1868258\n\t}\n},{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752335\n            }\n        }]\n    },\n\t{\n        code: 'banner-728x90-3-area',\n        mediaTypes: {\n            banner: {\n                sizes: [\n                    [728, 90]\n                ]\n            }\n        },\n        bids: [{\n\tbidder: 'rubicon',\n\tparams: {\n\t\taccountId: 11976,\n\t\tsiteId: 351150,\n\t\tzoneId: 1868258\n\t}\n},{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752335\n            }\n        }]\n    },\n\t{\n        code: 'banner-970x250-area',\n        mediaTypes: {\n            banner: {\n                sizes: [\n                    [970, 250]\n                ]\n            }\n        },\n        bids: [{\n\tbidder: 'rubicon',\n\tparams: {\n\t\taccountId: 11976,\n\t\tsiteId: 351150,\n\t\tzoneId: 1868258\n\t}\n},{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752335\n            }\n        }]\n    },\n\t{\n        code: 'banner-300x250-2-area',\n        mediaTypes: {\n            banner: {\n                sizes: [\n                    [300, 250]\n                ]\n            }\n        },\n        bids: [{\n\tbidder: 'rubicon',\n\tparams: {\n\t\taccountId: 11976,\n\t\tsiteId: 351150,\n\t\tzoneId: 1868258\n\t}\n},{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752335\n            }\n        }]\n    },\n\t{\n        code: 'banner-300x250-3-area',\n        mediaTypes: {\n            banner: {\n                sizes: [\n                    [300, 250]\n                ]\n            }\n        },\n        bids: [{\n\tbidder: 'rubicon',\n\tparams: {\n\t\taccountId: 11976,\n\t\tsiteId: 351150,\n\t\tzoneId: 1868258\n\t}\n},{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752335\n            }\n        }]\n    },\n\t{\n        code: 'banner-300x250-4-area',\n        mediaTypes: {\n            banner: {\n                sizes: [\n                    [300, 250]\n                ]\n            }\n        },\n        bids: [{\n\tbidder: 'rubicon',\n\tparams: {\n\t\taccountId: 11976,\n\t\tsiteId: 351150,\n\t\tzoneId: 1868258\n\t}\n},{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752335\n            }\n        }]\n    },\n\t{\n        code: 'banner-300x600-area',\n        mediaTypes: {\n            banner: {\n                sizes: [\n                    [300, 600]\n                ]\n            }\n        },\n        bids: [{\n\tbidder: 'rubicon',\n\tparams: {\n\t\taccountId: 11976,\n\t\tsiteId: 351150,\n\t\tzoneId: 1868258\n\t}\n},{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752335\n            }\n        }]\n    },\n\t{\n        code: 'banner-native-rodape-1-area',\n        sizes: [\n            [1, 1]\n        ],\n        mediaTypes: {\n            native: {\n                image: {\n                    required: true,\n                    sendId: true\n                },\n                title: {\n                    required: true,\n                    sendId: true\n                },\n                sponsoredBy: {\n                    required: false,\n                    sendId: true\n                },\n                clickUrl: {\n                    required: false,\n                    sendId: true\n                },\n                body: {\n                    required: false,\n                    sendId: true\n                },\n                icon: {\n                    required: false,\n                    sendId: true\n                },\n                cta: {\n                    required: false,\n                    sendId: true\n                }\n            }\n        },\n        bids: [{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752944,\n                allowSmallerSizes: true\n            }\n        }]\n    },\n    {\n        code: 'banner-native-rodape-2-area',\n        sizes: [\n            [1, 1]\n        ],\n        mediaTypes: {\n            native: {\n                image: {\n                    required: true,\n                    sendId: true\n                },\n                title: {\n                    required: true,\n                    sendId: true\n                },\n                sponsoredBy: {\n                    required: false,\n                    sendId: true\n                },\n                clickUrl: {\n                    required: false,\n                    sendId: true\n                },\n                body: {\n                    required: false,\n                    sendId: true\n                },\n                icon: {\n                    required: false,\n                    sendId: true\n                },\n                cta: {\n                    required: false,\n                    sendId: true\n                }\n            }\n        },\n        bids: [{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752944,\n                allowSmallerSizes: true\n            }\n        }]\n    },\n    {\n        code: 'banner-native-rodape-3-area',\n        sizes: [\n            [1, 1]\n        ],\n        mediaTypes: {\n            native: {\n                image: {\n                    required: true,\n                    sendId: true\n                },\n                title: {\n                    required: true,\n                    sendId: true\n                },\n                sponsoredBy: {\n                    required: false,\n                    sendId: true\n                },\n                clickUrl: {\n                    required: false,\n                    sendId: true\n                },\n                body: {\n                    required: false,\n                    sendId: true\n                },\n                icon: {\n                    required: false,\n                    sendId: true\n                },\n                cta: {\n                    required: false,\n                    sendId: true\n                }\n            }\n        },\n        bids: [{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752944,\n                allowSmallerSizes: true\n            }\n        }]\n    },\n    {\n        code: 'banner-native-rodape-4-area',\n        sizes: [\n            [1, 1]\n        ],\n        mediaTypes: {\n            native: {\n                image: {\n                    required: true,\n                    sendId: true\n                },\n                title: {\n                    required: true,\n                    sendId: true\n                },\n                sponsoredBy: {\n                    required: false,\n                    sendId: true\n                },\n                clickUrl: {\n                    required: false,\n                    sendId: true\n                },\n                body: {\n                    required: false,\n                    sendId: true\n                },\n                icon: {\n                    required: false,\n                    sendId: true\n                },\n                cta: {\n                    required: false,\n                    sendId: true\n                }\n            }\n        },\n        bids: [{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752944,\n                allowSmallerSizes: true\n            }\n        }]\n    }, {\n        code: 'banner-native-rodape-5-area',\n        sizes: [\n            [1, 1]\n        ],\n        mediaTypes: {\n            native: {\n                image: {\n                    required: true,\n                    sendId: true\n                },\n                title: {\n                    required: true,\n                    sendId: true\n                },\n                sponsoredBy: {\n                    required: false,\n                    sendId: true\n                },\n                clickUrl: {\n                    required: false,\n                    sendId: true\n                },\n                body: {\n                    required: false,\n                    sendId: true\n                },\n                icon: {\n                    required: false,\n                    sendId: true\n                },\n                cta: {\n                    required: false,\n                    sendId: true\n                }\n            }\n        },\n        bids: [{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752944,\n                allowSmallerSizes: true\n            }\n        }]\n    }, {\n        code: 'banner-native-rodape-6-area',\n        sizes: [\n            [1, 1]\n        ],\n        mediaTypes: {\n            native: {\n                image: {\n                    required: true,\n                    sendId: true\n                },\n                title: {\n                    required: true,\n                    sendId: true\n                },\n                sponsoredBy: {\n                    required: false,\n                    sendId: true\n                },\n                clickUrl: {\n                    required: false,\n                    sendId: true\n                },\n                body: {\n                    required: false,\n                    sendId: true\n                },\n                icon: {\n                    required: false,\n                    sendId: true\n                },\n                cta: {\n                    required: false,\n                    sendId: true\n                }\n            }\n        },\n        bids: [{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752944,\n                allowSmallerSizes: true\n            }\n        }]\n    },\n    {\n        code: 'banner-native-lateral-1-area',\n        sizes: [\n            [1, 1]\n        ],\n        mediaTypes: {\n            native: {\n                image: {\n                    required: true,\n                    sendId: true\n                },\n                title: {\n                    required: true,\n                    sendId: true\n                },\n                sponsoredBy: {\n                    required: false,\n                    sendId: true\n                },\n                clickUrl: {\n                    required: false,\n                    sendId: true\n                },\n                body: {\n                    required: false,\n                    sendId: true\n                },\n                icon: {\n                    required: false,\n                    sendId: true\n                },\n                cta: {\n                    required: false,\n                    sendId: true\n                }\n            }\n        },\n        bids: [{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752944,\n                allowSmallerSizes: true\n            }\n        }]\n    },\n    {\n        code: 'banner-native-lateral-2-area',\n        sizes: [\n            [1, 1]\n        ],\n        mediaTypes: {\n            native: {\n                image: {\n                    required: true,\n                    sendId: true\n                },\n                title: {\n                    required: true,\n                    sendId: true\n                },\n                sponsoredBy: {\n                    required: false,\n                    sendId: true\n                },\n                clickUrl: {\n                    required: false,\n                    sendId: true\n                },\n                body: {\n                    required: false,\n                    sendId: true\n                },\n                icon: {\n                    required: false,\n                    sendId: true\n                },\n                cta: {\n                    required: false,\n                    sendId: true\n                }\n            }\n        },\n        bids: [{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752944,\n                allowSmallerSizes: true\n            }\n        }]\n    },\n\t{\n    code: 'in-article',\n    mediaTypes: {\n        video: {\n            playerSize: [640, 480],\n            context: 'instream'\n        }\n    },\n    bids: [{\n        bidder: 'appnexus',\n        params: {\n            placementId: 15753376,\n            video: {\n                skippable: false,\n                playback_method: ['auto_play_sound_off']\n            }\n        }\n    }]\n}]",
            prebidTimeout: '4000',
          },
          name: 'Prebid - Observatorio do Cinema',
        },
        {
          module: 'Prebid',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            bids:
              "[{\n    code: 'banner-300x250-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-300x250-2-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-300x250-3-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-300x250-4-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-300x250-5-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-300x250-6-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-300x250-7-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-300x600-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 600]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-300x600-2-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 600]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-300x50-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 50],[320, 50]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-300x50-2-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[300, 50],[320, 50]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-728x90-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[728, 90]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-728x90-2-area',\n   mediaTypes: {\n        banner: {\n            sizes: [[728, 90]]\n        }\n   },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n{\n    code: 'banner-970x250-area',\n    mediaTypes: {\n        banner: {\n            sizes: [[970, 250]]\n        }\n    },\n    bids: [{\n        bidder: 'rubicon',\n        params:{\n            accountId: 11976,\n            siteId: 185982,\n            zoneId: 904478\n        }\n    },{\n            bidder: 'appnexus',\n            params: {\n                placementId: 15752343\n            }\n        }]\n},\n        {\n            code: 'banner-native-lateral-1-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752953,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n        {\n            code: 'banner-native-lateral-2-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752953,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t        {\n            code: 'banner-native-rodape-1-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752953,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t        {\n            code: 'banner-native-rodape-2-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752953,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n\t\t        {\n            code: 'banner-native-rodape-3-area',\n            sizes: [\n                [1, 1]\n            ],\n            mediaTypes: {\n                native: {\n                    image: {\n                        required: false,\n                        sendId: true\n                    },\n                    title: {\n                        required: true,\n                        sendId: true\n                    },\n                    sponsoredBy: {\n                        required: false,\n                        sendId: true\n                    },\n                    clickUrl: {\n                        required: false,\n                        sendId: true\n                    },\n                    body: {\n                        required: false,\n                        sendId: true\n                    },\n                    icon: {\n                        required: false,\n                        sendId: true\n                    },\n                    cta: {\n                        required: false,\n                        sendId: true\n                    }\n                }\n            },\n            bids: [{\n                bidder: 'appnexus',\n                params: {\n                    placementId: 15752953,\n                    allowSmallerSizes: true\n                }\n            }]\n        },\n     {\n    code: 'in-article',\n    mediaTypes: {\n        video: {\n            playerSize: [640, 480],\n            context: 'instream'\n        }\n    },\n    bids: [{\n        bidder: 'appnexus',\n        params: {\n            placementId: 15753349,\n            video: {\n                skippable: false,\n                playback_method: ['auto_play_sound_off']\n            }\n        }\n    }]\n}]",
            prebidTimeout: '1500',
          },
          name: 'Prebid - Observatorio da Televisão',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            isIframe: [],
            container: '#banner-native-lateral-area',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<div id="banner-native-lateral-1-area">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-lateral-1-area"});</script>\n</div>\n<div id="banner-native-lateral-2-area">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-lateral-2-area"});</script>\n</div>',
          },
          name: 'DFP - Observatorio G - Lateral Push',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            isIframe: [],
            container: '#bloco-native-rodape',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<ul class="uol-tm-row">\n\t<li class="tm-ads uol-tm-span" id="banner-native-rodape-1-area">\n\t\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-1-area" });</script>\n\t</li>\n\t<li class="tm-ads uol-tm-span" id="banner-native-rodape-2-area">\n\t\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-2-area" });</script>\n\t</li>\n\t<li class="tm-ads uol-tm-span" id="banner-native-rodape-3-area">\n\t\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-3-area" });</script>\n\t</li>\n</ul>\n<ul class="uol-tm-row">\n\t<li class="tm-ads uol-tm-span" id="banner-native-rodape-4-area">\n\t\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-4-area" });</script>\n\t</li>\n\t<li class="tm-ads uol-tm-span" id="banner-native-rodape-5-area">\n\t\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-5-area" });</script>\n\t</li>\n\t<li class="tm-ads uol-tm-span" id="banner-native-rodape-6-area">\n\t\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-6-area" });</script>\n\t</li>\n</ul>',
            css:
              '.td_block_related_posts .td-related-row {\n    border-bottom: 0!important;\n}\n\n.uol-tm-title-wrapper,\n\t\t.uol-tm-row * {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\t.uol-tm-title-wrapper {\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.uol-tm-title {\n\t\t\tcolor: #000;\n\t\t\ttext-transform: uppercase;\n\t\t\tfont: bold 18px/1.3em UOLText, sans-serif;\n\t\t\tmargin: 0 0 15px;\n\t\t}\n\n\t\t.uol-tm-offer {\n\t\t\tcolor: #999;\n\t\t\tfont: 400 10px/12px UOLText, sans-serif;\n\t\t\tposition: absolute;\n\t\t\ttop: 13px;\n\t\t\tright: 5px;\n\t\t}\n\n\t\t.uol-tm-offer span {\n\t\t\tfont: bold 12px/14px UOLText, sans-serif;\n\t\t}\n\n\t\t.uol-tm-row iframe {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.uol-tm-row {\n\t\t\toverflow: hidden;\n\t\t\twidth: 100%;\n\t\t\tmargin: 0 0 1em;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\t.uol-tm-row .uol-tm-span {\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t\tdisplay: block;\n\t\t\tfloat: left;\n\t\t}\n\n\t\t@media (max-device-width: 767px) {\n\t\t\t.uol-tm-row {\n\t\t\tmargin: 0;\n\t\t}\n\t\t\n\t\t.uol-tm-row .uol-tm-span {\n\t\t\t\twidth: 100%;\n\t\t\t\tmargin: 0 0 25px;\n\t\t\t}\n\t\t}\n\n\t\t@media (min-device-width: 767px) {\n\t\t\t.uol-tm-row .uol-tm-span {\n\t\t\t\twidth: 32%;\n\t\t\t}\n\t\t\t.uol-tm-row .uol-tm-span:nth-child(even) {\n\t\t\t\tmargin: 0 2%;\n\t\t\t}\n\t\t}',
          },
          name: 'DFP- Observatório do Cinema - Rodapé Push',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['onload'],
          config: {
            isIframe: [],
            container: '#banner-native-rodape-area',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<div class="uoltm-base-container">\n    <div id="banner-native-rodape-1-area" class="float-first">\n    \t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-1-area"});</script>\n    </div>\n    <div id="banner-native-rodape-2-area" class="float">\n    \t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-2-area"});</script>\n    </div>\n    <div id="banner-native-rodape-3-area" class="float">\n    \t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-3-area"});</script>\n    </div>\n</div>',
            css:
              '.uoltm-base-container {\n    float: left;\n    margin-bottom: 17px;\n}\n.float{\n    width:200px;\n    float:left;\n    margin-left:20px;\n}\n.float-first{\n    margin-left:0px;\n    width:200px;\n    float:left;\n}\n@media (max-width: 767px){\n    .float, .float-first{\n        width: 33.33%;\n        padding-left: 10px;\n        padding-bottom: 18px;\n    }\n    .float{ \n        margin-left: 0;\n    }\n    .uoltm-base-container {\n        float: none;\n        margin: 0 -10px;\n    }\n\n}',
          },
          name: 'DFP - Observatório dos Famosos - Rodapé Push',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            isIframe: [],
            container: '#bloco-native-home',
            html:
              '<div id="banner-native-home">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-home" });</script>\n</div>',
          },
          name: 'DFP - Observatório dos Famosos - Native Home - Push',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            isIframe: [],
            container: '#bloco-native-lateral',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<div id="banner-native-lateral-1-area">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-lateral-1-area"});</script>\n</div>',
          },
          name: 'DFP - Observatório dos Famosos - Lateral Push - Colunas - Solange Gomes',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            isIframe: [],
            container: '#bloco-native-lateral',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<div id="banner-native-lateral-1-area">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-lateral-1-area"});</script>\n</div>',
          },
          name: 'DFP - Observatório dos Famosos - Lateral Push - Colunas',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            isIframe: [],
            container: '#bloco-native-lateral',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<div id="banner-native-lateral-1-area">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-lateral-1-area"});</script>\n</div>',
          },
          name: 'DFP - Observatório dos Famosos - Lateral Push',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodoteatro((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['onload'],
          config: {
            isIframe: [],
            container: '#native-rodape',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<div id="banner-native-rodape-1-area" class="float-first">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-1-area"});</script>\n</div>\n<div id="banner-native-rodape-2-area" class="float">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-2-area"});</script>\n</div>\n<div id="banner-native-rodape-3-area" class="float">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-3-area"});</script>\n</div>',
            css:
              '.float{\n    width:218px;\n    float:left;\n    margin-left:20px;\n}\n.float-first{\n    margin-left:0px;\n    width:218px;\n    float:left;\n}\n@media(max-device-width:767px){\n    .float{\n        width: 360px;\n        margin-left:0px;\n    }\n    .float-first{\n        margin-left:0px;\n        width: 360px;\n    }\n}',
          },
          name: 'DFP - Observatorio do Teatro - Native Rodape - Push',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodeseries((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['onload'],
          config: {
            isIframe: [],
            container: '#native-rodape',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<div id="banner-native-rodape-1-area" class="float-first">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-1-area"});</script>\n</div>\n<div id="banner-native-rodape-2-area" class="float">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-2-area"});</script>\n</div>\n<div id="banner-native-rodape-3-area" class="float">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-3-area"});</script>\n</div>',
            css:
              '.float{\n    width:218px;\n    float:left;\n    margin-left:20px;\n}\n.float-first{\n    margin-left:0px;\n    width:218px;\n    float:left;\n}\n@media(max-device-width:767px){\n    .float{\n        width: 360px;\n        margin-left:0px;\n    }\n    .float-first{\n        margin-left:0px;\n        width: 360px;\n    }\n}',
          },
          name: 'DFP - Observatorio de Series - Native Rodape - Push',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodemusica((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['onload'],
          config: {
            isIframe: [],
            container: '#native-rodape',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<div id="banner-native-rodape-1-area" class="float-first">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-1-area"});</script>\n</div>\n<div id="banner-native-rodape-2-area" class="float">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-2-area"});</script>\n</div>\n<div id="banner-native-rodape-3-area" class="float">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-3-area"});</script>\n</div>',
            css:
              '.float{\n    width:218px;\n    float:left;\n    margin-left:20px;\n}\n.float-first{\n    margin-left:0px;\n    width:218px;\n    float:left;\n}\n@media(max-device-width:767px){\n    .float{\n        width: 360px;\n        margin-left:0px;\n    }\n    .float-first{\n        margin-left:0px;\n        width: 360px;\n    }\n}',
          },
          name: 'DFP - Observatorio de Musica - Native Rodape - Push',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodegames((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['onload'],
          config: {
            isIframe: [],
            container: '#native-rodape',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<div id="banner-native-rodape-1-area" class="float-first">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-1-area"});</script>\n</div>\n<div id="banner-native-rodape-2-area" class="float">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-2-area"});</script>\n</div>\n<div id="banner-native-rodape-3-area" class="float">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-3-area"});</script>\n</div>',
            css:
              '.float{\n    width:218px;\n    float:left;\n    margin-left:20px;\n}\n.float-first{\n    margin-left:0px;\n    width:218px;\n    float:left;\n}\n@media(max-device-width:767px){\n    .float{\n        width: 360px;\n        margin-left:0px;\n    }\n    .float-first{\n        margin-left:0px;\n        width: 360px;\n    }\n}',
          },
          name: 'DFP - Observatorio de Games - Native Rodape - Push',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            isIframe: [],
            container: '#banner-native-rodape-area',
            html:
              '<script>\n\twindow.uolads = window.uolads || [];\n</script>\n<div id="banner-native-rodape-1-area" class="float-first">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-1-area"});</script>\n</div>\n<div id="banner-native-rodape-2-area" class="float">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-2-area"});</script>\n</div>\n<div id="banner-native-rodape-3-area" class="float">\n\t<script>window.uolads && window.uolads.push({ id: "banner-native-rodape-3-area"});</script>\n</div>',
            css:
              '.float{\n    width:218px;\n    float:left;\n    margin-left:20px;\n}\n.float-first{\n    margin-left:0px;\n    width:218px;\n    float:left;\n}\n@media(max-device-width:767px){\n    .float{\n        width: 360px;\n        margin-left:0px;\n    }\n    .float-first{\n        margin-left:0px;\n        width: 360px;\n    }\n}',
          },
          name: 'DFP - Observatorio G - Rodape Push',
        },
        {
          module: 'IframeCreator',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            isIframe: [],
            container: '#bloco-native-home',
            html:
              '<script>window.uolads = window.uolads || [];</script>\n<div class="tm-ads uol-tm-span" id="banner-native-home">\n    <script>window.uolads && window.uolads.push({ id: "banner-native-home" });</script>\n</div>',
          },
          name: 'DFP - Observatorio G - Native Home Push',
        },
        {
          module: 'Sesame',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {},
          name: 'Sesame',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-home',
            deslabel: '1-native-home',
            frequencyControl: [],
          },
          name: 'DFP - Native - Observatório G - Home',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas/solange_gomes',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - Solange Gomes- 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas/solange_gomes',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'bottom',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-728x90-3-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - Solange Gomes 728x90 - 3',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas/solange_gomes',
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
            isIncremental: 'false',
            bannerId: 'banner-300x600-2-area',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - Solange Gomes - 300x600-2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/erlan\\-bastos(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas/erlan_bastos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'bottom',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-728x90-3-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - Erlan Bastos - 728x90 - 3',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/erlan\\-bastos(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas/erlan_bastos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - Erlan Bastos - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/erlan\\-bastos(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas/erlan_bastos',
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
            isIncremental: 'false',
            bannerId: 'banner-300x600-2-area',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - Erlan Bastos - 300x600-2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/erlan\\-bastos(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'bottom',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-728x90-3-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - 728x90 - 3',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            isIncremental: 'false',
            bannerId: 'banner-728x90-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/erlan\\-bastos(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/erlan\\-bastos(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
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
            isIncremental: 'false',
            bannerId: 'banner-300x600-2-area',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - 300x600-2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
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
            bannerId: 'banner-300x600-area',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [300, 50]; [320, 0], [[320,100],[320, 50],[300, 50]]',
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
            bannerId: 'banner-300x50-area',
            bannerHeight: '50',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório dos Famosos - colunas - 300x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-4',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-6-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - 300x250 - 6',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-3',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-5-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - 300x250 - 5',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-2',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-4-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - colunas - 300x250 - 4',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-rodape',
            deslabel: '1-native-rodape',
            frequencyControl: [],
          },
          name: 'DFP - Observatório dos Famosos - Rodape',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-home',
            deslabel: '1-native-home',
            frequencyControl: [],
          },
          name: 'DFP - Observatório dos Famosos - Native Home',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas/solange_gomes',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-lateral',
            deslabel: '1-native-lateral',
            frequencyControl: [],
          },
          name: 'DFP - Observatório dos Famosos - Lateral - Colunas - Solange Gomes',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-lateral',
            deslabel: '1-native-lateral',
            frequencyControl: [],
          },
          name: 'DFP - Observatório dos Famosos - Lateral - Colunas',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-lateral',
            deslabel: '1-native-lateral',
            frequencyControl: [],
          },
          name: 'DFP - Observatório dos Famosos - Lateral',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            isIncremental: 'false',
            bannerId: 'banner-728x90-2-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - Colunas - 728x90 -2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [300, 50]; [320, 0], [[320,100],[320, 50],[300, 50]]',
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
            isIncremental: 'false',
            bannerId: 'banner-300x50-2-area',
            bannerHeight: '50',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório dos Famosos - Colunas - 300x50- 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-5',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-7-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - Colunas - 300x250 - 7',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-3-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - Colunas - 300x250 - 3',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            isIncremental: 'false',
            bannerId: 'banner-300x250-2-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - Colunas - 300x250 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - Colunas - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'bottom',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-728x90-3-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 728x90 - 3',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            isIncremental: 'false',
            bannerId: 'banner-728x90-2-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 728x90 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            isIncremental: 'false',
            bannerId: 'banner-728x90-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
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
            isIncremental: 'false',
            bannerId: 'banner-300x600-2-area',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 300x600-2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
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
            bannerId: 'banner-300x600-area',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [300, 50]; [320, 0], [[320,100],[320, 50],[300, 50]]',
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
            isIncremental: 'false',
            bannerId: 'banner-300x50-2-area',
            bannerHeight: '50',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório dos Famosos - 300x50 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [300, 50]; [320, 0], [[320,100],[320, 50],[300, 50]]',
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
            bannerId: 'banner-300x50-area',
            bannerHeight: '50',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório dos Famosos - 300x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-5',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-7-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 300x250 - 7',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-4',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-6-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 300x250 - 6',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-3',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-5-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 300x250 - 5',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-3-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 300x250 - 3',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            isIncremental: 'false',
            bannerId: 'banner-300x250-2-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 300x250 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_dos_famosos',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório dos Famosos - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodoteatro((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_do_teatro',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Teatro - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodoteatro((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_do_teatro',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Teatro - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodoteatro((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_do_teatro',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Teatro - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodoteatro((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_do_teatro',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Teatro - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodoteatro((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_do_teatro',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Teatro - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_cinema',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-rodape',
            deslabel: '1-native-rodape',
            frequencyControl: [],
          },
          name: 'DFP - Observatório do Cinema - Native Rodape',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_cinema',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-lateral',
            deslabel: '1-native-lateral',
            frequencyControl: [],
          },
          name: 'DFP - Observatório do Cinema - Native Lateral',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_cinema',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Cinema - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_cinema',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Cinema - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_cinema',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Cinema - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_cinema',
            isCompanion: 'False',
            outOfPage: [],
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x600-2-area',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Cinema - 300x600-2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_cinema',
            isCompanion: 'False',
            outOfPage: [],
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
            bannerId: 'banner-300x600-area',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Cinema - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_cinema',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório do Cinema - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodeseries((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_series',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Series - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodeseries((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_series',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Series - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodeseries((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_series',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Series - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodeseries((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_series',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Series - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodeseries((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_series',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Series - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodemusica((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_musica',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Musica - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodemusica((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_musica',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Musica - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodemusica((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_musica',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Musica - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodemusica((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_musica',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Musica - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodemusica((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_musica',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Musica - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodegames((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_games',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Games - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodegames((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_games',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Games - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodegames((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_games',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Games - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodegames((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_games',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Games - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodegames((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_games',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório de Games - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/novelas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/novelas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Novelas - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/novelas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/novelas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Novelas - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/novelas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/novelas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Novelas - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/novelas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/novelas',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Novelas - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/novelas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/novelas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Novelas - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/noticias\\-da\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/noticias_da_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Noticias da TV - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/noticias\\-da\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/noticias_da_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Noticias da TV - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/noticias\\-da\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/noticias_da_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Noticias da TV - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/noticias\\-da\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/noticias_da_tv',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Noticias da TV - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/noticias\\-da\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/noticias_da_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Noticias da TV - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/home',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            bannerWidth: '1000',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-lateral',
            bannerHeight: '1000',
            deslabel: '1-native-rodape-home',
            frequencyControl: [],
          },
          name: 'DFP - Observatório da Televisão - Native Rodape - Home',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            bannerWidth: '1000',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-lateral',
            bannerHeight: '1000',
            deslabel: '1-native-rodape-internas',
            frequencyControl: [],
          },
          name: 'DFP - Observatório da Televisão - Native Lateral - Internas',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/home',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Home - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/home',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Home - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/home',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Home - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/home',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Home - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/home',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Home - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/entrevistas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/entrevistas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Entrevistas - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/entrevistas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/entrevistas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Entrevistas - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/entrevistas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/entrevistas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Entrevistas - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/entrevistas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/entrevistas',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Entrevistas - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/entrevistas(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/entrevistas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Entrevistas - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/de\\-ferias\\-com\\-o\\-ex(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/de_ferias_com_o_ex',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - De ferias com o ex - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/de\\-ferias\\-com\\-o\\-ex(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/de_ferias_com_o_ex',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - De ferias com o ex - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/de\\-ferias\\-com\\-o\\-ex(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/de_ferias_com_o_ex',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - De ferias com o ex - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/de\\-ferias\\-com\\-o\\-ex(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/de_ferias_com_o_ex',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - De ferias com o ex - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/de\\-ferias\\-com\\-o\\-ex(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/de_ferias_com_o_ex',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - De ferias com o ex - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/criticas\\-de\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/criticas_de_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Criticas de TV - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/criticas\\-de\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/criticas_de_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Criticas de TV - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/criticas\\-de\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/criticas_de_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Criticas de TV - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/criticas\\-de\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/criticas_de_tv',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Criticas de TV - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/criticas\\-de\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/criticas_de_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Criticas de TV - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/edianez\\-parente(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas/edianez_parente',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - Edianez Parente 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/edianez\\-parente(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas/edianez_parente',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - Edianez Parente - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/edianez\\-parente(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas/edianez_parente',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - Edianez Parente - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/edianez\\-parente(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas/edianez_parente',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - Edianez Parente - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas/christiano_blota',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - Christiano Blota - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas/christiano_blota',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - Christiano Blota - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas/christiano_blota',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - Christiano Blota - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas/christiano_blota',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - Christiano Blota - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas/christiano_blota',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - Christiano Blota - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/edianez\\-parente(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/edianez\\-parente(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/edianez\\-parente(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/edianez\\-parente(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/edianez\\-parente(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/edianez\\-parente(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/colunas/edianez_parente',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Colunas -  Edianez Parente - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/bbb(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/bbb',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - BBB - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/bbb(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/bbb',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - BBB - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/bbb(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/bbb',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - BBB - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/bbb(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/bbb',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - BBB - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/bbb(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/bbb',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - BBB - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/audiencias\\-da\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/audiencias_da_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Audiencias da TV - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/audiencias\\-da\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/audiencias_da_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Audiencias da TV - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/audiencias\\-da\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/audiencias_da_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Audiencias da TV - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/audiencias\\-da\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/audiencias_da_tv',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Audiencias da TV - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/audiencias\\-da\\-tv(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/audiencias_da_tv',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - Audiencias da TV - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/a\\-fazenda(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/a_fazenda',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - A Fazenda - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/a\\-fazenda(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/a_fazenda',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - A Fazenda - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/a\\-fazenda(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/a_fazenda',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - A Fazenda - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/a\\-fazenda(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/a_fazenda',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - A Fazenda - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/a\\-fazenda(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao/a_fazenda',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - A Fazenda - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/a\\-fazenda(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/audiencias\\-da\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/bbb(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/criticas\\-de\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/de\\-ferias\\-com\\-o\\-ex(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/entrevistas(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/noticias\\-da\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/novelas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/a\\-fazenda(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/audiencias\\-da\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/bbb(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/criticas\\-de\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/de\\-ferias\\-com\\-o\\-ex(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/entrevistas(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/noticias\\-da\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/novelas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
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
            bannerId: 'banner-728x90-',
            bannerHeight: '90',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/a\\-fazenda(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/audiencias\\-da\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/bbb(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/criticas\\-de\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/de\\-ferias\\-com\\-o\\-ex(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/entrevistas(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/noticias\\-da\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/novelas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/a\\-fazenda(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/audiencias\\-da\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/bbb(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/criticas\\-de\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/de\\-ferias\\-com\\-o\\-ex(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/entrevistas(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/noticias\\-da\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/novelas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao',
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
            bannerId: 'banner-300x600-',
            bannerHeight: '600',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/a\\-fazenda(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/audiencias\\-da\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/bbb(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/criticas\\-de\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/de\\-ferias\\-com\\-o\\-ex(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/entrevistas(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.(bol\\.)?uol(\\.com)?(\\.br)?(\\/)?(\\?.*)?$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/noticias\\-da\\-tv(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/novelas(.*)$/)',
            ],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_televisao',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-',
            bannerHeight: '250',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório da Televisão - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-rodape',
            deslabel: '1-native-rodape',
            frequencyControl: [],
          },
          name: 'DFP - Observatório G - Native Rodape',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-lateral',
            deslabel: '1-native-lateral',
            frequencyControl: [],
          },
          name: 'DFP - Observatório G - Lateral',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping:
              '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]; [970, 0], [[970, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '970',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-970x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 970x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'bottom',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-728x90-3-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 728x90 - 3',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-728x90-2-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 728x90 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]]; [728, 0], [[728, 90]]',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '728',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-728x90-area',
            bannerHeight: '90',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 728x90',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/homolog/)',
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 50], [320, 50]];',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '320',
            pos: 'top',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'true',
            bannerId: 'banner-320x50-',
            bannerHeight: '50',
            frequencyControl: [],
            group: '6',
          },
          name: 'DFP - Observatório G - 320x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x600-2-area',
            bannerHeight: '600',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x600-2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
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
            bannerId: 'banner-300x600-area',
            bannerHeight: '600',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x600',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [300, 50]; [320, 0], [[320,100],[320, 50],[300, 50]]',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'middle',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x50-2-area',
            bannerHeight: '50',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x50 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [300, 50]; [320, 0], [[320,100],[320, 50],[300, 50]]',
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
            bannerId: 'banner-300x50-area',
            bannerHeight: '50',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x50',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-5',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-7-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x250 - 7',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-4',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-6-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x250 - 6',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-3',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-5-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x250 - 5',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom-2',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-4-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x250 - 4',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
            isSingleRequest: 'False',
            forcePath: [],
            nativeType: '0',
            bannerWidth: '300',
            pos: 'bottom',
            expble: '1',
            campaignuol: '1',
            geolocation: 'True',
            hide: 'False',
            fluid: [],
            isIncremental: 'false',
            bannerId: 'banner-300x250-3-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x250 - 3',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            isIncremental: 'false',
            bannerId: 'banner-300x250-2-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x250 - 2',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_g',
            isCompanion: 'False',
            outOfPage: [],
            sizeMapping: '[0, 0], [[300, 250]]; [340, 0], [[336, 336],[336, 768],[300, 250]]',
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
            bannerId: 'banner-300x250-area',
            bannerHeight: '250',
            frequencyControl: [],
            group: '1',
          },
          name: 'DFP - Observatório G - 300x250',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodoteatro((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_do_teatro',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-rodape',
            deslabel: '1-native-rodape',
            frequencyControl: [],
          },
          name: 'DFP - Observatorio do Teatro - Native Rodape - Async',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodeseries((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_series',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-rodape',
            deslabel: '1-native-rodape',
            frequencyControl: [],
          },
          name: 'DFP - Observatorio de Series - Native Rodape - Async',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodemusica((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_musica',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-rodape',
            deslabel: '1-native-rodape',
            frequencyControl: [],
          },
          name: 'DFP - Observatorio de Musica - Native Rodape - Async',
        },
        {
          module: 'DfpAsync',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodegames((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            dfppath: '/8804/parceiros/observatorio_de_games',
            isCompanion: 'False',
            outOfPage: [],
            isSingleRequest: 'True',
            forcePath: [],
            nativeType: '1,2',
            pos: '1',
            expble: '0',
            campaignuol: '1',
            geolocation: 'True',
            fluid: ['true'],
            hide: 'False',
            isIncremental: 'true',
            bannerId: 'banner-native-rodape',
            deslabel: '1-native-rodape',
            frequencyControl: [],
          },
          name: 'DFP - Observatorio de Games - Native Rodape - Async',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              '(function(){\n\t\tsetTimeout(function(){\n\t\t\ttry{\n\t\t\t\tvar uol = document.querySelector(\'.td-block-span12 .td_module_10 #banner-native-lateral-1-area\');\n\t\t\t\tuol.style.marginBottom = "10px";\n\t\t\t}catch(e){\n\t\t\t\t\n\t\t\t}\n\t\t}, 3000);\n\t})();',
          },
          name: 'Ajuste da Margin Bottom do Native',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
              'document.location.href.match(/(cenas mais chocantes|eroticas|playboy|acidente|tesao|agressao|orgasmo|vibradores|penetracao|penis|ywefapoge|topless|UCwkva9wLNIbDuB17|axuluralolovoty|ring-girls|bumbum|sexuais|episiotomi|ujabezudunekufu|120220toboga|sexo|shit|namuxelohisu|transar|ebodirumuhejivodi|etijubiqyfemup|ysutohalo|nudez|pussy|pGtWa3iyvjs|briga|gay|trans|vuzusokehixolukugyt|hentaiinside|femen|violencia|SXI|liviaandradenuanasexy|peitos|ninfetassafadas|nua|bundao|superjogosdesexo|porno|boquetesex|novinhasflagras|gostosas|dead|cabeca|topless|baixar|sexy|erotico|perverso|peitao|mp3|sensual|erotico|vibrador|masturbador|sacanagem|mostraram demais)/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            codeInjector:
              "window.universal_variable = window.universal_variable || {};\nwindow.universal_variable.page = window.universal_variable.page || {};\nwindow.universal_variable.page.tags = window.universal_variable.page.tags || [];\nwindow.universal_variable.page.tags.push('notadx');",
            globalScope: [],
          },
          name: '_Policy AdX',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
          },
          events: ['onready'],
          config: {
            codeInjector:
              "(function() {\n var uidfpdtv = (window.location.href.indexOf('vf1') != -1) ? '/8804/teste/inread' : '/8804/parceiros/observatorio_dos_famosos/in-article';\n var urldfpdtv = encodeURIComponent(location.href);\n window.DYNAD_TV = {\n  'eventListener': function(eventName, eventData) {},\n  'config': {\n       'pathDFP': uidfpdtv,\n   'URL_VAST': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=' + uidfpdtv + '&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=keyword%3Dvideo%2Dauto%2Dplay&description_url=' + urldfpdtv + '&correlator=' + Math.random() * 100000000000000000,\n   'settings': [{\n    'key': 'initialAudioVolume',\n    'value': '50'\n   }],\n   'horizontalPosition': 'right',\n   'verticalPosition': 'bottom'\n  }\n };\n\n var t = document.createElement('script');\n t.type = 'text/javascript';\n t.async = true;\n /****\n //ROLLBACK PARA INARTICLE  \n t.src = '//t.dynad.net/script/?dc=5550001923;ord=0;click=';\n ****/\n t.src = '//t.dynad.net/script/?dc=5550009734;ord=0;click=';\n if (document.querySelector('.player_dynad_tv')) {\n  document.getElementsByTagName('head')[0].appendChild(t);\n } else {\n  var cntInterval = Date.now();\n  var idInterval = setInterval(function() {\n   var container;\n   try {\n    container = document.querySelector('.player_dynad_tv');\n   } catch (e) {}\n   if (container) {\n    clearInterval(idInterval);\n    document.getElementsByTagName('head')[0].appendChild(t);\n   } else {\n    if ((Date.now() - cntInterval) >= 10000) {\n     clearInterval(idInterval);\n     if (console && console.warn) console.warn('[dynad.tv] - could not locate container for dynad-tv');\n    }\n   }\n  }, 200);\n }\n\n})();",
            globalScope: [],
          },
          name: 'DFP - Observatório dos Famosos - Dynad TV - In-Article',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            codeInjector:
              "(function() {\n var uidfpdtv = (window.location.href.indexOf('vf1') != -1) ? '/8804/teste/inread' : '/8804/parceiros/observatorio_dos_famosos/colunas/solange_gomes/in-article';\n var urldfpdtv = encodeURIComponent(location.href);\n window.DYNAD_TV = {\n  'eventListener': function(eventName, eventData) {},\n  'config': {\n       'pathDFP': uidfpdtv,\n   'URL_VAST': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=' + uidfpdtv + '&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=keyword%3Dvideo%2Dauto%2Dplay&description_url=' + urldfpdtv + '&correlator=' + Math.random() * 100000000000000000,\n   'settings': [{\n    'key': 'initialAudioVolume',\n    'value': '50'\n   }],\n   'horizontalPosition': 'right',\n   'verticalPosition': 'bottom'\n  }\n };\n\n var t = document.createElement('script');\n t.type = 'text/javascript';\n t.async = true;\n /****\n //ROLLBACK PARA INARTICLE  \n t.src = '//t.dynad.net/script/?dc=5550001923;ord=0;click=';\n ****/\n t.src = '//t.dynad.net/script/?dc=5550009734;ord=0;click=';\n if (document.querySelector('.player_dynad_tv')) {\n  document.getElementsByTagName('head')[0].appendChild(t);\n } else {\n  var cntInterval = Date.now();\n  var idInterval = setInterval(function() {\n   var container;\n   try {\n    container = document.querySelector('.player_dynad_tv');\n   } catch (e) {}\n   if (container) {\n    clearInterval(idInterval);\n    document.getElementsByTagName('head')[0].appendChild(t);\n   } else {\n    if ((Date.now() - cntInterval) >= 10000) {\n     clearInterval(idInterval);\n     if (console && console.warn) console.warn('[dynad.tv] - could not locate container for dynad-tv');\n    }\n   }\n  }, 200);\n }\n\n})();",
            globalScope: [],
          },
          name: 'DFP - Observatório dos Famosos - Dynad TV - Colunas - Solange Gomes In-Article',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas(.*)$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/erlan\\-bastos(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/solange\\-gomes(.*)$/)',
            ],
          },
          events: ['onready'],
          config: {
            codeInjector:
              "(function() {\n var uidfpdtv = (window.location.href.indexOf('vf1') != -1) ? '/8804/teste/inread' : '/8804/parceiros/observatorio_dos_famosos/colunas/in-article';\n var urldfpdtv = encodeURIComponent(location.href);\n window.DYNAD_TV = {\n  'eventListener': function(eventName, eventData) {},\n  'config': {\n       'pathDFP': uidfpdtv,\n   'URL_VAST': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=' + uidfpdtv + '&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=keyword%3Dvideo%2Dauto%2Dplay&description_url=' + urldfpdtv + '&correlator=' + Math.random() * 100000000000000000,\n   'settings': [{\n    'key': 'initialAudioVolume',\n    'value': '50'\n   }],\n   'horizontalPosition': 'right',\n   'verticalPosition': 'bottom'\n  }\n };\n\n var t = document.createElement('script');\n t.type = 'text/javascript';\n t.async = true;\n /****\n //ROLLBACK PARA INARTICLE  \n t.src = '//t.dynad.net/script/?dc=5550001923;ord=0;click=';\n ****/\n t.src = '//t.dynad.net/script/?dc=5550009734;ord=0;click=';\n if (document.querySelector('.player_dynad_tv')) {\n  document.getElementsByTagName('head')[0].appendChild(t);\n } else {\n  var cntInterval = Date.now();\n  var idInterval = setInterval(function() {\n   var container;\n   try {\n    container = document.querySelector('.player_dynad_tv');\n   } catch (e) {}\n   if (container) {\n    clearInterval(idInterval);\n    document.getElementsByTagName('head')[0].appendChild(t);\n   } else {\n    if ((Date.now() - cntInterval) >= 10000) {\n     clearInterval(idInterval);\n     if (console && console.warn) console.warn('[dynad.tv] - could not locate container for dynad-tv');\n    }\n   }\n  }, 200);\n }\n\n})();",
            globalScope: [],
          },
          name: 'DFP - Observatório dos Famosos - Dynad TV - Colunas - In-Article',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodosfamosos((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/erlan\\-bastos(.*)$/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            codeInjector:
              "(function() {\n var uidfpdtv = (window.location.href.indexOf('vf1') != -1) ? '/8804/teste/inread' : '/8804/parceiros/observatorio_dos_famosos/colunas/erlan_bastos/in-article';\n var urldfpdtv = encodeURIComponent(location.href);\n window.DYNAD_TV = {\n  'eventListener': function(eventName, eventData) {},\n  'config': {\n       'pathDFP': uidfpdtv,\n   'URL_VAST': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=' + uidfpdtv + '&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=keyword%3Dvideo%2Dauto%2Dplay&description_url=' + urldfpdtv + '&correlator=' + Math.random() * 100000000000000000,\n   'settings': [{\n    'key': 'initialAudioVolume',\n    'value': '50'\n   }],\n   'horizontalPosition': 'right',\n   'verticalPosition': 'bottom'\n  }\n };\n\n var t = document.createElement('script');\n t.type = 'text/javascript';\n t.async = true;\n /****\n //ROLLBACK PARA INARTICLE  \n t.src = '//t.dynad.net/script/?dc=5550001923;ord=0;click=';\n ****/\n t.src = '//t.dynad.net/script/?dc=5550009734;ord=0;click=';\n if (document.querySelector('.player_dynad_tv')) {\n  document.getElementsByTagName('head')[0].appendChild(t);\n } else {\n  var cntInterval = Date.now();\n  var idInterval = setInterval(function() {\n   var container;\n   try {\n    container = document.querySelector('.player_dynad_tv');\n   } catch (e) {}\n   if (container) {\n    clearInterval(idInterval);\n    document.getElementsByTagName('head')[0].appendChild(t);\n   } else {\n    if ((Date.now() - cntInterval) >= 10000) {\n     clearInterval(idInterval);\n     if (console && console.warn) console.warn('[dynad.tv] - could not locate container for dynad-tv');\n    }\n   }\n  }, 200);\n }\n\n})();",
            globalScope: [],
          },
          name: 'DFP - Observatório dos Famosos - Dynad TV - Colunas - Erlan Bastos - In-Article',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            codeInjector:
              "(function() {\n var uidfpdtv = (window.location.href.indexOf('vf1') != -1) ? '/8804/teste/inread' : '/8804/parceiros/observatorio_cinema/in-article';\n var urldfpdtv = encodeURIComponent(location.href);\n window.DYNAD_TV = {\n  'eventListener': function(eventName, eventData) {},\n  'config': {\n       'pathDFP': uidfpdtv,\n   'URL_VAST': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=' + uidfpdtv + '&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=keyword%3Dvideo%2Dauto%2Dplay&description_url=' + urldfpdtv + '&correlator=' + Math.random() * 100000000000000000,\n   'settings': [{\n    'key': 'initialAudioVolume',\n    'value': '50'\n   }],\n   'horizontalPosition': 'right',\n   'verticalPosition': 'bottom'\n  }\n };\n\n var t = document.createElement('script');\n t.type = 'text/javascript';\n t.async = true;\n /****\n //ROLLBACK PARA INARTICLE  \n t.src = '//t.dynad.net/script/?dc=5550001923;ord=0;click=';\n ****/\n t.src = '//t.dynad.net/script/?dc=5550009734;ord=0;click=';\n if (document.querySelector('.player_dynad_tv')) {\n  document.getElementsByTagName('head')[0].appendChild(t);\n } else {\n  var cntInterval = Date.now();\n  var idInterval = setInterval(function() {\n   var container;\n   try {\n    container = document.querySelector('.player_dynad_tv');\n   } catch (e) {}\n   if (container) {\n    clearInterval(idInterval);\n    document.getElementsByTagName('head')[0].appendChild(t);\n   } else {\n    if ((Date.now() - cntInterval) >= 10000) {\n     clearInterval(idInterval);\n     if (console && console.warn) console.warn('[dynad.tv] - could not locate container for dynad-tv');\n    }\n   }\n  }, 200);\n }\n\n})();",
            globalScope: [],
          },
          name: 'DFP - Observatório do Cinema - Dynad TV - In-Article',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
            ],
          },
          events: ['onready'],
          config: {
            codeInjector:
              "(function() {\n var uidfpdtv = (window.location.href.indexOf('vf1') != -1) ? '/8804/teste/inread' : '/8804/parceiros/observatorio_televisao/in-article';\n var urldfpdtv = encodeURIComponent(location.href);\n window.DYNAD_TV = {\n  'eventListener': function(eventName, eventData) {},\n  'config': {\n       'pathDFP': uidfpdtv,\n   'URL_VAST': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=' + uidfpdtv + '&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=keyword%3Dvideo%2Dauto%2Dplay&description_url=' + urldfpdtv + '&correlator=' + Math.random() * 100000000000000000,\n   'settings': [{\n    'key': 'initialAudioVolume',\n    'value': '50'\n   }],\n   'horizontalPosition': 'right',\n   'verticalPosition': 'bottom'\n  }\n };\n\n var t = document.createElement('script');\n t.type = 'text/javascript';\n t.async = true;\n /****\n //ROLLBACK PARA INARTICLE  \n t.src = '//t.dynad.net/script/?dc=5550001923;ord=0;click=';\n ****/\n t.src = '//t.dynad.net/script/?dc=5550009734;ord=0;click=';\n if (document.querySelector('.player_dynad_tv')) {\n  document.getElementsByTagName('head')[0].appendChild(t);\n } else {\n  var cntInterval = Date.now();\n  var idInterval = setInterval(function() {\n   var container;\n   try {\n    container = document.querySelector('.player_dynad_tv');\n   } catch (e) {}\n   if (container) {\n    clearInterval(idInterval);\n    document.getElementsByTagName('head')[0].appendChild(t);\n   } else {\n    if ((Date.now() - cntInterval) >= 10000) {\n     clearInterval(idInterval);\n     if (console && console.warn) console.warn('[dynad.tv] - could not locate container for dynad-tv');\n    }\n   }\n  }, 200);\n }\n\n})();",
            globalScope: [],
          },
          name: 'DFP - Observatório da Televisão - Dynad TV - In-Article',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodatv((\\.bol)?\\.uol)?(\\.com)?(\\.br)?\\/colunas\\/christiano-blota(.*)$/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            codeInjector:
              "(function() {\n var uidfpdtv = (window.location.href.indexOf('vf1') != -1) ? '/8804/teste/inread' : '/8804/parceiros/observatorio_televisao/colunas/christiano_blota/in-article';\n var urldfpdtv = encodeURIComponent(location.href);\n window.DYNAD_TV = {\n  'eventListener': function(eventName, eventData) {},\n  'config': {\n       'pathDFP': uidfpdtv,\n   'URL_VAST': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=' + uidfpdtv + '&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=keyword%3Dvideo%2Dauto%2Dplay&description_url=' + urldfpdtv + '&correlator=' + Math.random() * 100000000000000000,\n   'settings': [{\n    'key': 'initialAudioVolume',\n    'value': '50'\n   }],\n   'horizontalPosition': 'right',\n   'verticalPosition': 'bottom'\n  }\n };\n\n var t = document.createElement('script');\n t.type = 'text/javascript';\n t.async = true;\n /****\n //ROLLBACK PARA INARTICLE  \n t.src = '//t.dynad.net/script/?dc=5550001923;ord=0;click=';\n ****/\n t.src = '//t.dynad.net/script/?dc=5550009734;ord=0;click=';\n if (document.querySelector('.player_dynad_tv')) {\n  document.getElementsByTagName('head')[0].appendChild(t);\n } else {\n  var cntInterval = Date.now();\n  var idInterval = setInterval(function() {\n   var container;\n   try {\n    container = document.querySelector('.player_dynad_tv');\n   } catch (e) {}\n   if (container) {\n    clearInterval(idInterval);\n    document.getElementsByTagName('head')[0].appendChild(t);\n   } else {\n    if ((Date.now() - cntInterval) >= 10000) {\n     clearInterval(idInterval);\n     if (console && console.warn) console.warn('[dynad.tv] - could not locate container for dynad-tv');\n    }\n   }\n  }, 200);\n }\n\n})();",
            globalScope: [],
          },
          name: 'DFP - Observatório da Televisão - Dynad TV - Christian Blota - In-Article',
        },
        {
          module: 'CodeInjector',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
            ],
            disable: [],
          },
          events: ['onready'],
          config: {
            codeInjector:
              "(function() {\n var uidfpdtv = (window.location.href.indexOf('vf1') != -1) ? '/8804/teste/inread' : '/8804/parceiros/observatorio_g/in-article';\n var urldfpdtv = encodeURIComponent(location.href);\n window.DYNAD_TV = {\n  'eventListener': function(eventName, eventData) {},\n  'config': {\n      'pathDFP': uidfpdtv,\n   'URL_VAST': 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=' + uidfpdtv + '&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=keyword%3Dvideo%2Dauto%2Dplay&description_url=' + urldfpdtv + '&correlator=' + Math.random() * 100000000000000000,\n   'settings': [{\n    'key': 'initialAudioVolume',\n    'value': '50'\n   }],\n   'horizontalPosition': 'right',\n   'verticalPosition': 'bottom'\n  }\n };\n\n var t = document.createElement('script');\n t.type = 'text/javascript';\n t.async = true;\n /****\n //ROLLBACK PARA INARTICLE  \n t.src = '//t.dynad.net/script/?dc=5550001923;ord=0;click=';\n ****/\n t.src = '//t.dynad.net/script/?dc=5550009734;ord=0;click=';\n if (document.querySelector('.player_dynad_tv')) {\n  document.getElementsByTagName('head')[0].appendChild(t);\n } else {\n  var cntInterval = Date.now();\n  var idInterval = setInterval(function() {\n   var container;\n   try {\n    container = document.querySelector('.player_dynad_tv');\n   } catch (e) {}\n   if (container) {\n    clearInterval(idInterval);\n    document.getElementsByTagName('head')[0].appendChild(t);\n   } else {\n    if ((Date.now() - cntInterval) >= 10000) {\n     clearInterval(idInterval);\n     if (console && console.warn) console.warn('[dynad.tv] - could not locate container for dynad-tv');\n    }\n   }\n  }, 200);\n }\n\n})();",
            globalScope: [],
          },
          name: 'DFP - Observatório G - Dynad TV - In-Article',
        },
        {
          module: 'TailtargetTrack',
          rules: {
            enable: [
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriog\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodegames((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodemusica((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodeseries((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodoteatro((\\.bol)?\\.uol)?(\\.com)?(\\.br)?(.*)$/)',
              'document.location.href.match(/^(http(s)?\\:\\/\\/)?(www\\.)?(hml)?observatoriodosfamosos\\.(uol\\.|bol\\.uol\\.)?(\\.com)?(\\.br)?(.*)?$/)',
              'document.location.href.match(/^http(s)?:\\/\\/(observatoriodatv|observatoriodatelevisao)?\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
              'document.location.href.match(/^http(s)?:\\/\\/observatoriodocinema\\.((bol\\.)?uol(\\.com)?(\\.br)?|elav\\.tmp\\.br)(.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {},
          name: 'Tailtarget',
        },
        {
          module: 'ModulesInjectorAsync',
          rules: {
            enable: [
              'document.location.href.match(/[^\\w](bol\\.)?uol\\.com\\.br(\\/.*|\\:.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: { src: 'https://tm.jsuol.com.br/modules/policy-banner.js', type: 'script' },
          name: 'Banner de consentimento de cookies',
        },
        {
          module: 'ModulesInjectorAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(\\w+\\.)?(\\w+\\.)bol.uol\\.com\\.br(\\/.*|\\:.*)?$/)',
            ],
            disable: [],
          },
          events: ['autostart'],
          config: {
            src: '//jsuol.com.br/barra/bol/barra-async.js?parceiro=observatorios',
            type: 'script',
          },
          name: 'Barra BOL - Topo',
        },
        {
          module: 'ModulesInjectorAsync',
          rules: {
            enable: [
              'document.location.href.match(/http(s)?:\\/\\/(\\w+\\.)?(\\w+\\.)?(\\w+\\.)uol\\.com\\.br(\\/.*|\\:.*)?$/)',
            ],
            disable: [
              'document.location.href.match(/http(s)?:\\/\\/(\\w+\\.)?(\\w+\\.)bol.uol\\.com\\.br(\\/.*|\\:.*)?$/)',
            ],
          },
          events: ['autostart'],
          config: {
            src: '//jsuol.com.br/barra/parceiro-async.js?parceiro=observatorios',
            type: 'script',
          },
          name: 'Barra UOL - Topo',
        },
        {
          module: 'ModulesInjectorAsync',
          rules: { enable: ['document.location.href.match(/.*/)'], disable: [] },
          events: ['autostart'],
          config: { src: '//me.jsuol.com.br/aud/grupoobservatorios.js', type: 'script' },
          name: 'Google Analytics - Script',
        },
        {
          module: 'ModulesInjectorAsync',
          rules: { enable: ['document.location.href.match(/.*/)'], disable: [] },
          events: ['autostart'],
          config: { src: '//tm.jsuol.com.br/modules/dmp-uol-sync-p.js', type: 'script' },
          name: 'Projeto - UOL DMP',
        },
      ]);
    })(window, document);
  })();
}
