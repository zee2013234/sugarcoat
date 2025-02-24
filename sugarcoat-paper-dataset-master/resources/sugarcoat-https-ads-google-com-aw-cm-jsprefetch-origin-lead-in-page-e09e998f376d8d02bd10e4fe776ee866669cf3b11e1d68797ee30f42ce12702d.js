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
    (function () {
      function webworkerPrefetch () {
        function prefetchFile (path) {
          var req = new XMLHttpRequest();
          req.open('GET', path);
          req.addEventListener('load', function () {
            self.postMessage({ src: path, origin: 'lead_in_page', timestamp: Date.now() });
          });
          req.send();
        }
        prefetchFile(
          'https://www.gstatic.com/awn/cm/brt/awn_cm_20201118_RC02/cm/cm_shell_main.dart.js'
        );
      }
      function prefetchJS () {
        var code = webworkerPrefetch.toString();
        code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
        var blob = new Blob([code], { type: 'application/javascript' });
        var worker = new Worker(URL.createObjectURL(blob));
        worker.addEventListener('message', function (e) {
          const $___old_21e9be84c4b4f1c0 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_21e9be84c4b4f1c0)
              ({}.constructor.defineProperty(
                window,
                'localStorage',
                $___stub_b317e19f866a2da7.localStorage
              ));
            return function () {
              var storageKey = 'acx_jsPrefetch_records';
              var records = JSON.parse(window.localStorage[storageKey] || '[]');
              records.push(e.data);
              if (records.length > 10) {
                records.shift();
              }
              window.localStorage[storageKey] = JSON.stringify(records);
            }.apply(this, arguments);
          } finally {
            if ($___old_21e9be84c4b4f1c0)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_21e9be84c4b4f1c0));
          }
        });
      }
      prefetchJS();
    })();
  })();
}
