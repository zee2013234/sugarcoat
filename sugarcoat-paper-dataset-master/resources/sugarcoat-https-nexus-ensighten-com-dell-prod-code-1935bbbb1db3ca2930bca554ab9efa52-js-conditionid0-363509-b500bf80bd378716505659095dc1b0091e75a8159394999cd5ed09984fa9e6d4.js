{
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
  (function () {
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.insertScript(
          'https://p.cdn.persaas.dell.com/app/ec951196-2be1-4539-9e8f-3fc9f59590a9/client.js'
        );
      },
      1013567,
      242440
    );
    Bootstrapper.bindImmediate(
      function () {
        const $___old_dc13d76f3c90671c = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_dc13d76f3c90671c)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___stub_cdc5a54489618108.cookie
            ));
          return function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            if (document.cookie.indexOf('s_dnb') === -1) {
              Bootstrapper.insertScript('//ecf.d41.co/sync/');
              Bootstrapper.insertScript('//cdn-0.d41.co/tags/dnb_coretag_v2.min.js');
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_dc13d76f3c90671c)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_dc13d76f3c90671c
            ));
        }
      },
      1923393,
      467647
    );
  })();
}
