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
    Marketing.bindDependencyDOMParsed(
      function () {
        const $___old_d49123ed873af6cc = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_d49123ed873af6cc)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___stub_cdc5a54489618108.cookie
            ));
          return function () {
            var Bootstrapper = window['Marketing'];
            var ensightenOptions = Marketing.ensightenOptions;
            try {
              var marketingscDataObj = Marketing.scDataObj,
                marketingUDO = Marketing.UDO,
                cachebuster = new Date().getTime(),
                pixelID = '',
                hvePixelID = '';
              var pixelFire = function (pixelid) {
                Marketing.imageRequest(
                  '//t.myvisualiq.net/activity_pixel?pt=i&et=a&r=' +
                    cachebuster +
                    '&ago=212&ao=871&px=' +
                    pixelid +
                    '&ord=' +
                    marketingUDO.ogid +
                    '&revenue=' +
                    marketingUDO.revenue
                );
              };
              Marketing.on('click', '.OoyalaVideo', function () {
                pixelid = '1001';
                pixelFire(pixelid);
                if (
                  marketingscDataObj.page.includes('alienware') ||
                  marketingscDataObj.categoryid.includes('alienware') ||
                  marketingUDO.category.includes('alienware') ||
                  marketingUDO.family.toLowerCase().includes('alienware')
                ) {
                  pixelid = '1002';
                  pixelFire(pixelid);
                }
                if (marketingUDO.segment == 'bsd') {
                  pixelid = '1003';
                  pixelFire(pixelid);
                }
                if (marketingUDO.segment == 'dhs') {
                  pixelid = '1004';
                  pixelFire(pixelid);
                }
                if (marketingUDO.segment == 'eep') {
                  pixelid = '1005';
                  pixelFire(pixelid);
                }
              });
              if (window.location.pathname == '/en/small-business-central') {
                pixelid = '1006';
                pixelFire(pixelid);
              }
              if (
                window.location.pathname.includes(
                  '/en/small-business-central/contact-dell/thank-you'
                )
              ) {
                pixelid = '1007';
                pixelFire(pixelid);
              }
              marketingUDO.hve_mpv(
                '//t.myvisualiq.net/activity_pixel?pt=i&et=a&r=' +
                  cachebuster +
                  '&ago=212&ao=871&px=878&ord=' +
                  marketingUDO.ogid +
                  '&revenue=' +
                  marketingUDO.revenue
              );
              if (marketingUDO.segment == 'bsd') hvePixelID = '880';
              if (marketingUDO.segment == 'dhs') hvePixelID = '881';
              if (marketingUDO.segment == 'eep') hvePixelID = '882';
              if (
                marketingscDataObj.page.includes('alienware') ||
                marketingscDataObj.categoryid.includes('alienware') ||
                marketingUDO.category.includes('alienware') ||
                marketingUDO.family.toLowerCase().includes('alienware')
              )
                hvePixelID = '879';
              if (hvePixelID !== '')
                marketingUDO.hve_mpv(
                  '//t.myvisualiq.net/activity_pixel?pt=i&et=a&r=' +
                    cachebuster +
                    '&ago=212&ao=871&px=' +
                    hvePixelID +
                    '&ord=' +
                    marketingUDO.ogid +
                    '&revenue=' +
                    marketingUDO.revenue
                );
            } catch (e) {
              dell_marketing_util.debug(e);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_d49123ed873af6cc)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_d49123ed873af6cc
            ));
        }
      },
      3206938,
      [3315274],
      638020,
      [610323]
    );
  })();
}
