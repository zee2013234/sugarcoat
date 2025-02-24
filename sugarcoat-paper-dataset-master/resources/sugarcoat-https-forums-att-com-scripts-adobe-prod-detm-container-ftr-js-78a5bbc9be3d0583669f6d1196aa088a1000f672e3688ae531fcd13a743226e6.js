var detmExecuteFooter;
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
  (function () {
    var $___var_f39df43ca4e9cf9a = function (instance) {
      const $___old_c00d3bb734a160c9 = {}.constructor.getOwnPropertyDescriptor(
          window,
          'sessionStorage'
        ),
        $___old_2b8eb768c005fe5d = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
      try {
        if ($___old_c00d3bb734a160c9)
          ({}.constructor.defineProperty(
            window,
            'sessionStorage',
            $___stub_3ac875f7196a9c3f.sessionStorage
          ));
        if ($___old_2b8eb768c005fe5d)
          ({}.constructor.defineProperty(
            window,
            'localStorage',
            $___stub_3ac875f7196a9c3f.localStorage
          ));
        return function () {
          ('undefined' != typeof ddo ||
            ('undefined' != typeof jQuery && !jQuery.isEmptyObject(ddo))) &&
            (ddo.pageLastLine(),
            0 == detmLoader.loadAsync &&
              void 0 !== window.chatAnalytics &&
              window.chatAnalytics.initialize(ddo)),
            void 0 !== document.dispatchEvent &&
              document.dispatchEvent(
                new CustomEvent('detmLegacyScriptsReady', { detail: { loader: instance } })
              );
        }.apply(this, arguments);
      } finally {
        if ($___old_c00d3bb734a160c9)
          ({}.constructor.defineProperty(window, 'sessionStorage', $___old_c00d3bb734a160c9));
        if ($___old_2b8eb768c005fe5d)
          ({}.constructor.defineProperty(window, 'localStorage', $___old_2b8eb768c005fe5d));
      }
    };
    detmExecuteFooter = $___var_f39df43ca4e9cf9a;
    'undefined' == typeof detmLoader || 0 == detmLoader.finished
      ? document.addEventListener('detmExecuteFooter', function (e) {
          detmExecuteFooter(e.detail.loader);
        })
      : detmExecuteFooter(detmLoader);
  })();
}
