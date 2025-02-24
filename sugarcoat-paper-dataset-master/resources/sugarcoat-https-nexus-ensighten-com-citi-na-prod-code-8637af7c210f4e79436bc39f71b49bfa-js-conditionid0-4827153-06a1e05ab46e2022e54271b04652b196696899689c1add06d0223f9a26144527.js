{
  const $___stub_4011c24c598eb934 = {};
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
  })($___stub_4011c24c598eb934);
  (function () {
    Bootstrapper.bindDOMLoaded(
      function () {
        const $___old_9bd2e903b0ab36bb = {}.constructor.getOwnPropertyDescriptor(
          window,
          'sessionStorage'
        );
        try {
          if ($___old_9bd2e903b0ab36bb)
            ({}.constructor.defineProperty(
              window,
              'sessionStorage',
              $___stub_4011c24c598eb934.sessionStorage
            ));
          return function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window._pp = window._pp || [];
            var citiData = window.citiData || {};
            _pp.siteId = '1560';
            _pp.siteUId = citiData.CUUID || citiData.cuuid || '';
            _pp.orderValue = window.sessionStorage.cmv || '';
            _pp.orderId = window.citiData.appID || '';
            _pp.tags = '';
            if (document.cookie.includes('ECM')) _pp.tags = 'CUSTOMER';
            if (citiData.eventList)
              if (citiData.eventList.indexOf('App') > -1) {
                var prodId = citiData.prodID || citiData.bankProdSourceCode || 'na';
                _pp.endUrl = '/application/' + prodId;
                if (citiData.cardAppStatus) _pp.endUrl += '/' + citiData.cardAppStatus;
                else if (citiData.bankAppStatus) _pp.endUrl += '/' + citiData.bankAppStatus;
                _pp.endUrl = _pp.endUrl.toLowerCase() || '';
              }
            (function () {
              var ppjs = document.createElement('script');
              ppjs.type = 'text/javascript';
              ppjs.async = true;
              ppjs.src =
                ('https:' == document.location.protocol ? 'https:' : 'http:') +
                '//cdn.pbbl.co/r/' +
                _pp.siteId +
                '.js';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(ppjs, s);
            })();
          }.apply(this, arguments);
        } finally {
          if ($___old_9bd2e903b0ab36bb)
            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_9bd2e903b0ab36bb));
        }
      },
      2928848,
      565689
    );
  })();
}
