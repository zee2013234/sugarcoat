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
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          var marketingUDO = Marketing.UDO,
            createImage = Marketing.imageRequest,
            marketingscDataObj = Marketing.scDataObj,
            siteURL = window.location.href;
          var firePixel = function (evVal, id) {
            if (marketingUDO.country == 'ca')
              createImage(
                'https://www.facebook.com/tr?id=' +
                  id +
                  '&ev=' +
                  evVal +
                  '&cd[value]=' +
                  marketingUDO.revenue +
                  '&cd[currency]=CAD&cd[content_ids]=' +
                  marketingUDO.ordercode +
                  '&cd[seg]=' +
                  marketingUDO.segment +
                  '&cd[family]=' +
                  marketingUDO.family +
                  '&cd[content_type]=product&noscript=1'
              );
            else if (marketingUDO.country == 'au' || marketingUDO.country == 'nz') {
              if (marketingUDO.promoid !== '100')
                createImage(
                  'https://www.facebook.com/tr?id=' +
                    id +
                    '&ev=' +
                    evVal +
                    '&cd[value]=' +
                    marketingUDO.revenue +
                    '&cd[content_ids]=' +
                    marketingUDO.ordercode +
                    '&cd[seg]=' +
                    marketingUDO.segment +
                    '&cd[family]=' +
                    marketingUDO.family +
                    '&cd[content_type]=product&noscript=1'
                );
            } else
              createImage(
                'https://www.facebook.com/tr?id=' +
                  id +
                  '&ev=' +
                  evVal +
                  '&cd[content_ids]=' +
                  marketingUDO.ordercode +
                  '&cd[seg]=' +
                  marketingUDO.segment +
                  '&cd[family]=' +
                  marketingUDO.family +
                  '&cd[content_type]=product&noscript=1'
              );
          };
          var generatePixel = function (id) {
            createImage('https://www.facebook.com/tr?id=' + id + '&ev=PageView&noscript=1');
          };
          var checkPageType = function (id) {
            if (marketingUDO.promoid !== '9' && marketingUDO.promoid !== '100')
              createImage('https://www.facebook.com/tr?id=' + id + '&ev=PageView&noscript=1');
            if (marketingUDO.promoid === '7') firePixel('ViewContent', id);
            if (marketingUDO.promoid === '10') firePixel('Customize', id);
            if (marketingUDO.promoid === '8') firePixel('Accessories', id);
            if (marketingUDO.promoid === '9') firePixel('AddToCart', id);
            if (marketingUDO.promoid === '100') firePixel('Purchase', id);
          };
          if (marketingscDataObj.cms == 'dellemc' || marketingscDataObj.cms == 'delltech') {
            if (marketingUDO.country == 'us') generatePixel('934342626586911');
            if (siteURL.includes('es-latam')) generatePixel('1955499317998466');
          } else {
            if (marketingUDO.country == 'au' || marketingUDO.country == 'nz')
              checkPageType('1825214271089724');
            if (marketingUDO.country == 'us')
              if (marketingscDataObj.cms == 'olr') checkPageType('934342626586911');
            if (marketingUDO.country == 'sg' || marketingUDO.country == 'my')
              checkPageType('273864383717197');
            if (
              (siteURL.includes('p/deals/laptop-deals') ||
                siteURL.includes('p/powervault-me4-series') ||
                siteURL.includes('p/enterprise-deals/dell-enterprise-deals')) &&
              marketingscDataObj.cms == 'nextgen'
            )
              generatePixel('1955499317998466');
          }
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3360789,
      [3315274],
      642270,
      [610323]
    );
    Marketing.bindDependencyDOMParsed(
      function () {
        const $___old_b122686968be046d = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_b122686968be046d)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___stub_cdc5a54489618108.cookie
            ));
          return function () {
            var Bootstrapper = window['Marketing'];
            var ensightenOptions = Marketing.ensightenOptions;
            try {
              var marketingUDO = Marketing.UDO;
              var createImage = Marketing.imageRequest;
              var siteURL = window.location.href;
              if (siteURL.includes('unified-workspace'))
                createImage('//acuityplatform.com/Adserver/pxl/7006883365337769543');
              marketingUDO.hve_mpv('//acuityplatform.com/Adserver/pxl/1056118201215233387');
              marketingUDO.hve_download('//acuityplatform.com/Adserver/pxl/5273563363340439956');
              marketingUDO.hve_bcove('//acuityplatform.com/Adserver/pxl/7581835882833425423');
              marketingUDO.hve_social('//acuityplatform.com/Adserver/pxl/3547308060379756945');
              marketingUDO.hve_contactUs('//acuityplatform.com/Adserver/pxl/7690731695996324588');
              marketingUDO.hve_chat('//acuityplatform.com/Adserver/pxl/1237948885406488631');
              marketingUDO.hve_rfq_submit('//acuityplatform.com/Adserver/pxl/8267255862460080728');
              marketingUDO.hve_gated_submit(
                '//acuityplatform.com/Adserver/pxl/2102151785706984013'
              );
              marketingUDO.hve_ion_submit('//acuityplatform.com/Adserver/pxl/2359344565341166490');
              if (siteURL.includes('work-at-full-speed'))
                createImage('//acuityplatform.com/Adserver/pxl/1957191945190210278');
              marketingUDO.hve_mpv('//acuityplatform.com/Adserver/pxl/3366534366686723137');
              marketingUDO.hve_download('//acuityplatform.com/Adserver/pxl/7402180440840309620');
              marketingUDO.hve_bcove('//acuityplatform.com/Adserver/pxl/6569299697824483537');
              marketingUDO.hve_social('//acuityplatform.com/Adserver/pxl/2827682213854567675');
              marketingUDO.hve_contactUs('//acuityplatform.com/Adserver/pxl/3979338408251103478');
              marketingUDO.hve_chat('//acuityplatform.com/Adserver/pxl/4659485239688585171');
              marketingUDO.hve_ion_submit('//acuityplatform.com/Adserver/pxl/912143330279963432');
              marketingUDO.hve_rfq_submit('//acuityplatform.com/Adserver/pxl/8880207334805940293');
              marketingUDO.hve_gated_submit(
                '//acuityplatform.com/Adserver/pxl/625812864760524700'
              );
              if (siteURL.includes('chromebookenterprise/index.htm'))
                createImage('//acuityplatform.com/Adserver/pxl/6674441245083931134');
              if (siteURL.includes('latitude'))
                createImage('//acuityplatform.com/Adserver/pxl/7723957815306259132');
              if (siteURL.includes('optiplex/index.htm'))
                createImage('//acuityplatform.com/Adserver/pxl/3797280820161207317');
              if (siteURL.includes('work-at-full-speed/optimizer.htm'))
                createImage('//acuityplatform.com/Adserver/pxl/8554522491874030988');
              if (siteURL.includes('/precision/index.htm'))
                createImage('//acuityplatform.com/Adserver/pxl/6092606574899093491');
            } catch (e) {
              dell_marketing_util.debug(e);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_b122686968be046d)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_b122686968be046d
            ));
        }
      },
      3312638,
      [3315274],
      640092,
      [610323]
    );
  })();
}
