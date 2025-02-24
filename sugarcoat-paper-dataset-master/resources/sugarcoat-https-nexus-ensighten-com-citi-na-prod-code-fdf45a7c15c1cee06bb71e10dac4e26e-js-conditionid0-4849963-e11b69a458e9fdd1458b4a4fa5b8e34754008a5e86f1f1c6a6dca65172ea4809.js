{
  const $___stub_ab116a01f765cef1 = {};
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
  })($___stub_ab116a01f765cef1);
  (function () {
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src =
          'https://resources.digital-cloud-citi.medallia.com/wdcusciti/50/onsite/embed.js';
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
        (function (w) {
          var getCookieByName = function (cookieName) {
            const $___old_f29af68513a8bb79 = {}.constructor.getOwnPropertyDescriptor(
              Document.prototype,
              'cookie'
            );
            try {
              if ($___old_f29af68513a8bb79)
                ({}.constructor.defineProperty(
                  Document.prototype,
                  'cookie',
                  $___stub_ab116a01f765cef1.cookie
                ));
              return function () {
                var pairs = document.cookie.split(';');
                for (var i = 0; i < pairs.length; i++)
                  if (pairs[i].indexOf(cookieName) > -1) {
                    var pair = pairs[i].split('=');
                    return pair[1];
                  }
                return undefined;
              }.apply(this, arguments);
            } finally {
              if ($___old_f29af68513a8bb79)
                ({}.constructor.defineProperty(
                  Document.prototype,
                  'cookie',
                  $___old_f29af68513a8bb79
                ));
            }
          };
          w.CCSID = getCookieByName('CCSID');
          w.citiLocale = getCookieByName('locale');
          w.citiNGA = !!getCookieByName('NGACoExistenceCookie');
          var getPageID = function () {
            if (
              typeof getAllAngularRootElements != 'undefined' &&
              getAllAngularRootElements()[0].attributes['ng-version']
            ) {
              var url = window.location.pathname;
              return url.split('ag').pop();
            } else return window.pageName;
          };
          w.pageID = getPageID();
        })(window);
      },
      2878472,
      569456
    );
  })();
}
