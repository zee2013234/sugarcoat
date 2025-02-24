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
  (function () {
    if (typeof phonographEvents === 'undefined') {
      var phonographEvents = [];
    }
    (function () {
      var phonograph = {
        needleUrl: '//phonograph2.voxmedia.com/needle',
        cookieDomain: 'voxmedia.com',
        uidCookieName: '_vm_uid',
        suidCookieName: '_vm_suid',
        thirdPartyPageHost: '//phonograph2.voxmedia.com',
        thirdPartyPagePath: '/third.html',
        uuid: null,
        suid: null,
        poller: null,
        captureGAId: true,
        gaid: null,
        vpSize: function () {
          var d = document,
            de = document.documentElement,
            b = document.body;
          if (b && b.clientWidth && b.clientHeight && !(d.compatMode === 'CSS1Compat')) {
            return [b.clientWidth, b.clientHeight].join('x');
          } else if (de.clientWidth && de.clientHeight) {
            return [de.clientWidth, de.clientHeight].join('x');
          }
          return '';
        },
        flash: function () {
          try {
            try {
              var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
              try {
                axo.AllowScriptAccess = 'always';
              } catch (e) {
                return '6,0,0';
              }
            } catch (e) {}
            return new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
              .GetVariable('$version')
              .replace(/\D+/g, ',')
              .match(/^,?(.+),?$/)[1];
          } catch (e) {
            try {
              if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                return (
                  navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']
                ).description
                  .replace(/\D+/g, ',')
                  .match(/^,?(.+),?$/)[1];
              }
            } catch (e) {}
          }
          return '0,0,0';
        },
        java: function () {
          var n = window.navigator;
          if (n && typeof n.javaEnabled === 'function' && n.javaEnabled()) return '1';
          else return '0';
        },
        generateUUID: function () {
          var cryptoRNG = window.crypto || window.msCrypto,
            bstring = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
            reg = new RegExp(/[xy]/g);
          if (typeof cryptoRNG != 'undefined' && typeof cryptoRNG.getRandomValues != 'undefined') {
            return bstring.replace(reg, function (c) {
              var r = cryptoRNG.getRandomValues(new Uint8Array(1))[0] % 16 | 0,
                v = c == 'x' ? r : (r & 3) | 8;
              return v.toString(16);
            });
          }
          return bstring.replace(reg, function (c) {
            var r = (Math.random() * 16) | 0,
              v = c == 'x' ? r : (r & 3) | 8;
            return v.toString(16);
          });
        },
        getCookie: function (cookieName) {
          var result = new RegExp('(?:^|; )' + encodeURIComponent(cookieName) + '=([^;]*)').exec(
            document.cookie
          );
          return result ? result[1] : null;
        },
        storage: function (name, value) {
          const $___old_9484dbce17371629 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_9484dbce17371629)
              ({}.constructor.defineProperty(
                window,
                'localStorage',
                $___stub_b317e19f866a2da7.localStorage
              ));
            return function () {
              try {
                if (value !== undefined) {
                  localStorage.setItem(name, value);
                  return true;
                } else {
                  return localStorage.getItem(name);
                }
              } catch (e) {
                return null;
              }
            }.apply(this, arguments);
          } finally {
            if ($___old_9484dbce17371629)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_9484dbce17371629));
          }
        },
        getUUIDCookie: function () {
          return this.getCookie(this.uidCookieName) || this.storage(this.uidCookieName);
        },
        setCookie: function (uuid, cookieName, domain) {
          var expirationDate = new Date();
          expirationDate.setFullYear(expirationDate.getFullYear() + 2);
          var uuidCookie =
            cookieName + '=' + uuid + '; expires=' + expirationDate.toGMTString() + '; path=/';
          if (domain !== undefined) {
            uuidCookie += '; domain=' + domain;
          }
          document.cookie = uuidCookie;
          return this.getCookie(cookieName);
        },
        loadUUIDFromCookie: function (domain) {
          var uuid = this.getUUIDCookie();
          if (uuid != null) return uuid;
          return this.setCookie(this.generateUUID(), this.uidCookieName, domain);
        },
        loadUUID: function () {
          this.uuid =
            this.getUUIDCookie() ||
            this.setCookie(this.generateUUID(), this.uidCookieName, this.cookieDomain) ||
            this.loadUUIDFromIframe();
        },
        loadUUIDFromIframe: function () {
          if (window.postMessage) {
            var body = document.getElementsByTagName('body')[0],
              iframe = null,
              _this = this;
            this.addEvent('message', function (event) {
              var ohost = event.origin.split('/').slice(-1)[0];
              if (_this.thirdPartyPageHost.indexOf(ohost) != -1 && 'uuid' in event.data) {
                _this.uuid = event.data.uuid;
                _this.setCookie(_this.uuid, _this.uidCookieName);
              }
            });
            iframe = document.createElement('iframe');
            iframe.style['display'] = 'none';
            iframe.setAttribute('src', this.thirdPartyPageHost + this.thirdPartyPagePath);
            body.appendChild(iframe);
            return this.uuid;
          }
          return null;
        },
        addEvent: function (type, fn) {
          if (window.addEventListener) {
            window.addEventListener(type, fn, false);
          } else {
            window.attachEvent('on' + type, fn);
          }
        },
        flatten: function (obj) {
          var result = {};
          for (var key in obj) {
            if (obj[key] === null) continue;
            if (typeof obj[key] == 'object') {
              var flatNestedObj = this.flatten(obj[key]);
              for (var nestedKey in flatNestedObj) {
                if (flatNestedObj.hasOwnProperty(nestedKey)) {
                  result[key + '.' + nestedKey] = flatNestedObj[nestedKey];
                }
              }
            } else {
              result[key] = obj[key];
            }
          }
          return result;
        },
        createIFrame: function (iframeName) {
          var iframe;
          try {
            iframe = document.createElement('<iframe name="' + iframeName + '">');
          } catch (ex) {
            iframe = document.createElement('iframe');
            iframe.setAttribute('name', iframeName);
          }
          iframe.style['display'] = 'none';
          return iframe;
        },
        getBody: function (doc) {
          return doc.body || doc.getElementsByTagName('body')[0];
        },
        createPostRequest: function (data, actionLocation, callback) {
          var body = this.getBody(document);
          var iframeName = 'phonograph-' + new Date().getTime();
          var iframe = this.createIFrame(iframeName);
          var form = document.createElement('form');
          form.style['display'] = 'none';
          form.setAttribute('method', 'POST');
          form.setAttribute('action', actionLocation);
          form.setAttribute('target', iframeName);
          for (var key in data) {
            var input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', key);
            input.setAttribute('value', data[key]);
            form.appendChild(input);
          }
          if (callback) {
            iframe.onload = callback;
          }
          body.appendChild(form);
          body.appendChild(iframe);
          form.submit();
          return iframeName;
        },
        getRequestURL: function (data) {
          var src = this.needleUrl + '?';
          for (name in data)
            src += encodeURIComponent(name) + '=' + encodeURIComponent(data[name]) + '&';
          return src;
        },
        sendGetRequest: function (src, callback) {
          var p = document.createElement('img');
          p.style.height = 1;
          p.style.width = 1;
          if (callback) {
            p.onload = callback;
          }
          p.src = src;
        },
        buildQuery: function (event) {
          var q = {};
          q['d'] = event.length > 1 ? JSON.stringify(event[1]) : '';
          q['e'] = event[0];
          q['uid'] = this.uuid;
          q['suid'] = this.suid;
          q['de'] = document.characterSet || document.charset;
          q['sr'] = window.screen.width + 'x' + window.screen.height;
          q['vp'] = this.vpSize();
          q['ul'] = (
            window.navigator.language ||
            window.navigator.browserLanguage ||
            ''
          ).toLowerCase();
          q['sd'] = ((window.screen && window.screen.colorDepth) || '') + '-bit';
          q['fl'] = this.flash();
          q['je'] = this.java();
          q['dl'] = document.location;
          q['dr'] = document.referrer;
          q['wh'] = window.location.hostname;
          q['z'] = Math.round(Math.random() * 2147483647);
          return q;
        },
        getGAClientId: function () {
          if (
            typeof ga !== 'undefined' &&
            typeof ga.getAll !== 'undefined' &&
            this.gaid === null
          ) {
            this.gaid = ga.getAll()[0].get('clientId');
          }
          return this.gaid;
        },
        insertGAClientId: function (event) {
          if (this.captureGAId) {
            if (event.length == 1) {
              event[1] = {};
            }
            event[1]['_ga_cid'] = this.getGAClientId();
          }
        },
        send: function (event) {
          var callback = event[1] && event[1].callback;
          if (typeof callback === 'function') {
            delete event[1].callback;
          } else {
            callback = null;
          }
          this.insertGAClientId(event);
          var qry = this.buildQuery(event);
          var src = this.getRequestURL(qry);
          if (src.length >= 2048) {
            return this.createPostRequest(qry, this.needleUrl, callback);
          } else {
            this.sendGetRequest(src, callback);
          }
          return src;
        },
        stop: function () {
          if (this.poller) {
            clearInterval(this.poller);
            this.poller = null;
          }
        },
        start: function () {
          var _this = this;
          this.stop();
          this.loadUUID();
          this.suid =
            this.getCookie(this.suidCookieName) ||
            this.setCookie(this.generateUUID(), this.suidCookieName);
          setTimeout(function () {
            if (!_this.uuid) _this.uuid = 'unknown';
            if (!_this.gaid) _this.gaid = 'unknown';
          }, 3000);
          this.poller = setInterval(function () {
            while (phonographEvents.length && _this.uuid !== null) {
              if (_this.captureGAId && !_this.getGAClientId()) {
                break;
              }
              _this.send(phonographEvents.shift());
            }
          }, 300);
        },
      };
      window._phonograph = phonograph;
      if (
        window.location
          .toString()
          .indexOf(phonograph.thirdPartyPageHost + phonograph.thirdPartyPagePath) === -1
      ) {
        phonograph.start();
      }
    })();
  })();
}
