{
  const $___stub_81d88a170ee553cd = {};
  (exports => {
    'use strict';
    const fetch = async (resource, init = null) => {
      throw new TypeError('Failed to fetch');
    };
    exports.fetch = { configurable: true, enumerable: true, value: fetch, writable: true };
  })($___stub_81d88a170ee553cd);
  const $___stub_5993255955fa0762 = {};
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
  })($___stub_5993255955fa0762);
  (function () {
    window.UOLPD = window.UOLPD || {};
    window.UOLPD.Logs = window.UOLPD.Logs || {};
    window.UOLPD.Logs.metrics = window.UOLPD.Logs.metrics || [];
    (function (w, d, s, id) {
      var sendMetric = function (status) {
        var domain = 'esporte.uol.com.br';
        w.UOLPD.Logs.metrics.push({
          trackerName: '413161',
          category: 'fbstatus',
          action: status,
          label: domain,
        });
      };
      var createPixel = function (url) {
        var pixel = d.createElement('img');
        pixel.setAttribute('src', url);
        pixel.setAttribute('width', '0');
        pixel.setAttribute('height', '0');
        pixel.style.display = 'none';
        if (d.body !== null) {
          d.body.appendChild(pixel);
        }
      };
      var verifyUserStatus = function () {
        const $___old_e904ceb49de08483 = {}.constructor.getOwnPropertyDescriptor(window, 'fetch'),
          $___old_94e54a9d14556cdf = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
        try {
          if ($___old_e904ceb49de08483)
            ({}.constructor.defineProperty(window, 'fetch', $___stub_81d88a170ee553cd.fetch));
          if ($___old_94e54a9d14556cdf)
            ({}.constructor.defineProperty(
              window,
              'localStorage',
              $___stub_5993255955fa0762.localStorage
            ));
          return function () {
            if (typeof w.fbAsyncInit === 'undefined' || typeof w.FB === 'undefined') {
              w.setTimeout(verifyUserStatus, 1000);
              return;
            }
            FB.getLoginStatus(function (response) {
              var status;
              if (response.status === 'connected') {
                status = 'autorizado';
              } else {
                if (response.status === 'not_authorized') {
                  status = 'logado';
                } else {
                  status = 'deslogado';
                }
              }
              sendMetric(status);
            });
          }.apply(this, arguments);
        } finally {
          if ($___old_e904ceb49de08483)
            ({}.constructor.defineProperty(window, 'fetch', $___old_e904ceb49de08483));
          if ($___old_94e54a9d14556cdf)
            ({}.constructor.defineProperty(window, 'localStorage', $___old_94e54a9d14556cdf));
        }
      };
      var createScript = function (id, src, async) {
        var script = d.createElement('script');
        script.src = src;
        script.id = id;
        if (async) {
          script.async = true;
        }
        return script;
      };
      var getCookieValue = function () {
        var value = '; ' + document.cookie;
        var parts = value.split('; BTCTL=');
        if (parts.length === 2) {
          return parseInt(parts.pop().split(';').shift(), 16);
        }
      };
      if (typeof w.fbAsyncInit === 'undefined') {
        w.fbAsyncInit = function () {
          FB.init({ appId: '190329594333794', xfbml: true, version: 'v2.8' });
        };
        if (typeof w.FB !== 'undefined') {
          try {
            w.fbAsyncInit();
          } catch (e) {}
        }
      }
      var fjs = d.getElementsByTagName(s)[0];
      if (typeof w.FB === 'undefined') {
        if (!d.getElementById(id)) {
          var js = createScript(id, '//connect.facebook.net/pt_BR/sdk.js');
          fjs.parentNode.insertBefore(js, fjs);
        }
      }
      var metricsURL = '//me.jsuol.com.br/aud/logs.js';
      if (d.querySelectorAll('script[src="' + metricsURL + '"]').length === 0) {
        var tm = createScript('tm-metrics', metricsURL, true);
        fjs.parentNode.insertBefore(tm, fjs);
      }
      verifyUserStatus();
    })(window, document, 'script', 'facebook-jssdk');
  })();
}
