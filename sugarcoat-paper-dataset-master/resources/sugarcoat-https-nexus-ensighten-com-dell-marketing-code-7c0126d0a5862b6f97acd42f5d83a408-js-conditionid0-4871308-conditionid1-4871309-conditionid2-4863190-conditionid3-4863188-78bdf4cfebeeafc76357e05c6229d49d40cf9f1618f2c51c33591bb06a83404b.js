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
    Marketing.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          var fire_pulse = function () {
            var pulsePixel = '//sst.dell.com/pc/dell/?';
            if (Object.keys(Dell.Metrics.sc).length > 0)
              datalayer = encodeURIComponent(JSON.stringify(Dell.Metrics.sc));
            if (Object.keys(Marketing.UDO).length > 0) {
              Marketing.UDO.location = window.location.href;
              udolayer = encodeURIComponent(JSON.stringify(Marketing.UDO));
            }
            pulsePixel =
              pulsePixel +
              'dl=' +
              datalayer +
              '&udo=' +
              udolayer +
              '&sstTest=true&space=sst-marketing';
            if (!window.__sst_ext_active) Marketing.imageRequest(pulsePixel);
          };
          if (Marketing.UDO.udoReady) fire_pulse();
          window.addEventListener('udoReady', function (e) {
            fire_pulse();
          });
        } catch (e) {
          dell_marketing.util.debug(e);
        }
      },
      3263229,
      [3315274],
      639891,
      [610323]
    );
    Marketing.bindDOMParsed(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          var marketingscDataObj = Marketing.scDataObj;
          var countriesDellTech = ['uk', 'de', 'fr', 'cn', 'in', 'jp', 'au', 'br', 'ca', 'us'];
          var countriesDellEmc = [
            'ca',
            'us',
            'br',
            'mx',
            'cl',
            'co',
            'ar',
            'pe',
            'gt',
            'pr',
            'cr',
            'pa',
            'fr',
            'de',
            'gb',
          ];
          window._6si = window._6si || [];
          window._6si.push(['enableEventTracking', true]);
          if (
            countriesDellTech.indexOf(marketingscDataObj.country) > -1 ||
            countriesDellEmc.indexOf(marketingscDataObj.country) > -1
          )
            window._6si.push(['setToken', '04bb2b85d3255af9adb19ed3a6063eda']);
          window._6si.push(['setEndpoint', 'b.6sc.co']);
          Marketing.insertScript('//j.6sc.co/6si.min.js');
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3231265,
      617004
    );
    Marketing.bindDOMParsed(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          var marketingscDataObj = Marketing.scDataObj;
          var countriesDellTech = ['uk', 'de', 'fr', 'cn', 'in', 'jp', 'au', 'br', 'ca', 'us'];
          var countriesDellEmc = [
            'ca',
            'us',
            'br',
            'mx',
            'cl',
            'co',
            'ar',
            'pe',
            'gt',
            'pr',
            'cr',
            'pa',
            'fr',
            'de',
            'gb',
          ];
          window._6si = window._6si || [];
          window._6si.push(['enableEventTracking', true]);
          if (
            countriesDellTech.indexOf(marketingscDataObj.country) > -1 ||
            countriesDellEmc.indexOf(marketingscDataObj.country) > -1
          )
            window._6si.push(['setToken', '04bb2b85d3255af9adb19ed3a6063eda']);
          window._6si.push(['setEndpoint', 'b.6sc.co']);
          Marketing.insertScript('//j.6sc.co/6si.min.js');
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3231265,
      617004
    );
    Marketing.bindDependencyImmediate(
      function () {
        const $___old_9c9b0f1f7ff65f4e = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_9c9b0f1f7ff65f4e)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___stub_cdc5a54489618108.cookie
            ));
          return function () {
            var Bootstrapper = window['Marketing'];
            var ensightenOptions = Marketing.ensightenOptions;
            try {
              if (Marketing.UDO.priorconsent) {
                Marketing.UDO.g_bc_50('DC-9632648/hvef70/brand002+standard', 'conversion');
                Marketing.UDO.g_bc_80('DC-9632648/hvef70/brand008+standard', 'conversion');
                Marketing.UDO.g_bc_end('DC-9632648/hvef70/brand003+standard', 'conversion');
                Marketing.UDO.g_bc_start('DC-9632648/hvef70/brand001+standard', 'conversion');
                Marketing.UDO.g_chat('DC-9632648/hvef70/brand005+standard', 'conversion');
                Marketing.UDO.g_contactus('DC-9632648/hvef70/brand004+standard', 'conversion');
                Marketing.UDO.g_download('DC-9632648/hvef70/brand0+standard', 'conversion');
                Marketing.UDO.g_mpv('DC-9632648/hvef70/brand000+standard', 'conversion');
                Marketing.UDO.g_podcast_listen(
                  'DC-9632648/hvef70/brand009+standard',
                  'conversion'
                );
                Marketing.UDO.g_share('DC-9632648/hvef70/brand00+standard', 'conversion');
                Marketing.UDO.g_rfq_submit('DC-9632648/hvef70/brand00a+standard', 'conversion');
                Marketing.UDO.g_ion_submit('DC-9632648/hvef70/brand00b+standard', 'conversion');
                Marketing.UDO.g_gated_submit('DC-9632648/hvef70/brand00c+standard', 'conversion');
                Marketing.UDO.g_bc_50('DC-9632645/hve4u0/csb_h002+standard', 'conversion');
                Marketing.UDO.g_bc_80('DC-9632645/hve4u0/csb_h003+standard', 'conversion');
                Marketing.UDO.g_bc_end('DC-9632645/hve4u0/csb_h004+standard', 'conversion');
                Marketing.UDO.g_bc_start('DC-9632645/hve4u0/csb_h001+standard', 'conversion');
                Marketing.UDO.g_chat('DC-9632645/hve4u0/csb_h006+standard', 'conversion');
                Marketing.UDO.g_contactus('DC-9632645/hve4u0/csb_h005+standard', 'conversion');
                Marketing.UDO.g_download('DC-9632645/hve4u0/csb_h0+standard', 'conversion');
                Marketing.UDO.g_mpv('DC-9632645/hve4u0/csb_h000+standard', 'conversion');
                Marketing.UDO.g_podcast_listen(
                  'DC-9632645/hve4u0/csb_h009+standard',
                  'conversion'
                );
                Marketing.UDO.g_share('DC-9632645/hve4u0/csb_h00+standard', 'conversion');
                Marketing.UDO.g_rfq_submit('DC-9632645/hve4u0/csb_h00a+standard', 'conversion');
                Marketing.UDO.g_ion_submit('DC-9632645/hve4u0/csb_h00b+standard', 'conversion');
                Marketing.UDO.g_gated_submit('DC-9632645/hve4u0/csb_h00c+standard', 'conversion');
                if (/delltech/i.test(location.hostname) && /1$/i.test(Marketing.UDO.promoid))
                  Marketing.gEvent('DC-9632648/homej0/dtc_h0+standard', 'conversion');
                if (
                  /(dellemc.com|delltechnologies.com)\/\S{2}-\S{2}\/products\/index/i.test(
                    location.href
                  )
                )
                  Marketing.gEvent('DC-9632648/categ0/dtc_c0+standard', 'conversion');
                if (/(dellemc|delltechnologies)/i.test(location.hostname)) {
                  Marketing.gEvent('DC-9632648/famil0/dtc_f0+standard', 'conversion');
                  Marketing.gEvent('DC-9632648/produ0/dtc_p0+standard', 'conversion');
                }
                if (
                  /(dellemc.com|delltechnologies.com)\/\S{2}-\S{2}\/solutions\/index.htm/i.test(
                    location.href
                  )
                )
                  Marketing.gEvent('DC-9632648/solut0/dtc_s0+standard', 'conversion');
              }
            } catch (e) {
              dell_marketing_util.debug(e);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_9c9b0f1f7ff65f4e)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_9c9b0f1f7ff65f4e
            ));
        }
      },
      3242479,
      [3329163, 3253918],
      621769,
      [619404, 620818]
    );
    Marketing.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          if (Marketing.UDO.priorconsent) {
            Marketing.UDO.g_bc_50('DC-9632648/hvef70/brand002+standard', 'conversion');
            Marketing.UDO.g_bc_80('DC-9632648/hvef70/brand008+standard', 'conversion');
            Marketing.UDO.g_bc_end('DC-9632648/hvef70/brand003+standard', 'conversion');
            Marketing.UDO.g_bc_start('DC-9632648/hvef70/brand001+standard', 'conversion');
            Marketing.UDO.g_chat('DC-9632648/hvef70/brand005+standard', 'conversion');
            Marketing.UDO.g_contactus('DC-9632648/hvef70/brand004+standard', 'conversion');
            Marketing.UDO.g_download('DC-9632648/hvef70/brand0+standard', 'conversion');
            Marketing.UDO.g_mpv('DC-9632648/hvef70/brand000+standard', 'conversion');
            Marketing.UDO.g_podcast_listen('DC-9632648/hvef70/brand009+standard', 'conversion');
            Marketing.UDO.g_share('DC-9632648/hvef70/brand00+standard', 'conversion');
            Marketing.UDO.g_rfq_submit('DC-9632648/hvef70/brand00a+standard', 'conversion');
            Marketing.UDO.g_ion_submit('DC-9632648/hvef70/brand00b+standard', 'conversion');
            Marketing.UDO.g_gated_submit('DC-9632648/hvef70/brand00c+standard', 'conversion');
            Marketing.UDO.g_bc_50('DC-9632645/hve4u0/csb_h002+standard', 'conversion');
            Marketing.UDO.g_bc_80('DC-9632645/hve4u0/csb_h003+standard', 'conversion');
            Marketing.UDO.g_bc_end('DC-9632645/hve4u0/csb_h004+standard', 'conversion');
            Marketing.UDO.g_bc_start('DC-9632645/hve4u0/csb_h001+standard', 'conversion');
            Marketing.UDO.g_chat('DC-9632645/hve4u0/csb_h006+standard', 'conversion');
            Marketing.UDO.g_contactus('DC-9632645/hve4u0/csb_h005+standard', 'conversion');
            Marketing.UDO.g_download('DC-9632645/hve4u0/csb_h0+standard', 'conversion');
            Marketing.UDO.g_mpv('DC-9632645/hve4u0/csb_h000+standard', 'conversion');
            Marketing.UDO.g_podcast_listen('DC-9632645/hve4u0/csb_h009+standard', 'conversion');
            Marketing.UDO.g_share('DC-9632645/hve4u0/csb_h00+standard', 'conversion');
            Marketing.UDO.g_rfq_submit('DC-9632645/hve4u0/csb_h00a+standard', 'conversion');
            Marketing.UDO.g_ion_submit('DC-9632645/hve4u0/csb_h00b+standard', 'conversion');
            Marketing.UDO.g_gated_submit('DC-9632645/hve4u0/csb_h00c+standard', 'conversion');
            if (/delltech/i.test(location.hostname) && /1$/i.test(Marketing.UDO.promoid))
              Marketing.gEvent('DC-9632648/homej0/dtc_h0+standard', 'conversion');
            if (
              /(dellemc.com|delltechnologies.com)\/\S{2}-\S{2}\/products\/index/i.test(
                location.href
              )
            )
              Marketing.gEvent('DC-9632648/categ0/dtc_c0+standard', 'conversion');
            if (/(dellemc|delltechnologies)/i.test(location.hostname)) {
              Marketing.gEvent('DC-9632648/famil0/dtc_f0+standard', 'conversion');
              Marketing.gEvent('DC-9632648/produ0/dtc_p0+standard', 'conversion');
            }
            if (
              /(dellemc.com|delltechnologies.com)\/\S{2}-\S{2}\/solutions\/index.htm/i.test(
                location.href
              )
            )
              Marketing.gEvent('DC-9632648/solut0/dtc_s0+standard', 'conversion');
          }
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3242479,
      [3329163, 3253918],
      621769,
      [619404, 620818]
    );
    Marketing.bindDependencyDOMParsed(
      function () {
        const $___old_3e441f48f2b3d972 = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_3e441f48f2b3d972)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___stub_cdc5a54489618108.cookie
            ));
          return function () {
            var Bootstrapper = window['Marketing'];
            var ensightenOptions = Marketing.ensightenOptions;
            try {
              if (Marketing.UDO.priorconsent) {
                var buildUrl = function (hveid, spotname) {
                  var ftRandom = Math.random() * 1000000;
                  return (
                    'https://servedby.flashtalking.com/container/4752;' +
                    hveid +
                    ';11221;iframe/?spotName=' +
                    spotname +
                    '&ftXCurrency=&ftXName=&ftXNumItems=&ftXRef=&ftXType=&ftXValue=&cachebuster=' +
                    ftRandom
                  );
                };
                var mpvUrl = buildUrl(108928, 'Dell_US_ISG_HVE_Multi_2_page_views');
                Marketing.UDO.hve_mpv(mpvUrl, 'iframe');
                if (Marketing.UDO.segment !== 'bsd') {
                  var socialUrl = buildUrl(108929, 'Dell_US_ISG_HVE_Social_shares');
                  Marketing.UDO.hve_social(socialUrl, 'iframe');
                  var downloadUrl = buildUrl(108930, 'Dell_US_ISG_HVE_Asset_downloads');
                  Marketing.UDO.hve_download(downloadUrl, 'iframe');
                  var videoUrl = buildUrl(108931, 'Dell_US_ISG_HVE_Video_play');
                  Marketing.UDO.hve_ytube(videoUrl, 'iframe');
                  Marketing.UDO.hve_bcove(videoUrl, 'iframe');
                  var podcastUrl = buildUrl(108932, 'Dell_US_ISG_HVE_Podcast_subscribe_listen');
                  Marketing.UDO.hve_podcasts(podcastUrl, 'iframe');
                  var chatUrl = buildUrl(108934, 'Dell_US_ISG_HVE_ChatNow_launch');
                  Marketing.UDO.hve_chat(chatUrl, 'iframe');
                  var contactUrl = buildUrl(108935, 'Dell_US_ISG_HVE_ContactUs_emailengagement');
                  Marketing.UDO.hve_contactUs(contactUrl, 'iframe');
                  var gatedSubmitUrl = buildUrl(117058, 'Dell_US_ISG_HVE_GatedformSubmit');
                  Marketing.UDO.hve_gated_submit(gatedSubmitUrl, 'iframe');
                  var ionSubmitUrl = buildUrl(117059, 'Dell_US_ISG_HVE_IONSubmit');
                  Marketing.UDO.hve_ion_submit(ionSubmitUrl, 'iframe');
                  var rfqSubmitUrl = buildUrl(117060, 'Dell_US_ISG_HVE_RFQSubmit');
                  Marketing.UDO.hve_rfq_submit(rfqSubmitUrl, 'iframe');
                }
              }
            } catch (e) {
              dell_marketing_util.debug(e);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_3e441f48f2b3d972)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_3e441f48f2b3d972
            ));
        }
      },
      3277850,
      [3315274],
      616465,
      [610323]
    );
    Marketing.bindDependencyDOMParsed(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          if (Marketing.UDO.priorconsent) {
            var buildUrl = function (hveid, spotname) {
              var ftRandom = Math.random() * 1000000;
              return (
                'https://servedby.flashtalking.com/container/4752;' +
                hveid +
                ';11221;iframe/?spotName=' +
                spotname +
                '&ftXCurrency=&ftXName=&ftXNumItems=&ftXRef=&ftXType=&ftXValue=&cachebuster=' +
                ftRandom
              );
            };
            var mpvUrl = buildUrl(108928, 'Dell_US_ISG_HVE_Multi_2_page_views');
            Marketing.UDO.hve_mpv(mpvUrl, 'iframe');
            if (Marketing.UDO.segment !== 'bsd') {
              var socialUrl = buildUrl(108929, 'Dell_US_ISG_HVE_Social_shares');
              Marketing.UDO.hve_social(socialUrl, 'iframe');
              var downloadUrl = buildUrl(108930, 'Dell_US_ISG_HVE_Asset_downloads');
              Marketing.UDO.hve_download(downloadUrl, 'iframe');
              var videoUrl = buildUrl(108931, 'Dell_US_ISG_HVE_Video_play');
              Marketing.UDO.hve_ytube(videoUrl, 'iframe');
              Marketing.UDO.hve_bcove(videoUrl, 'iframe');
              var podcastUrl = buildUrl(108932, 'Dell_US_ISG_HVE_Podcast_subscribe_listen');
              Marketing.UDO.hve_podcasts(podcastUrl, 'iframe');
              var chatUrl = buildUrl(108934, 'Dell_US_ISG_HVE_ChatNow_launch');
              Marketing.UDO.hve_chat(chatUrl, 'iframe');
              var contactUrl = buildUrl(108935, 'Dell_US_ISG_HVE_ContactUs_emailengagement');
              Marketing.UDO.hve_contactUs(contactUrl, 'iframe');
              var gatedSubmitUrl = buildUrl(117058, 'Dell_US_ISG_HVE_GatedformSubmit');
              Marketing.UDO.hve_gated_submit(gatedSubmitUrl, 'iframe');
              var ionSubmitUrl = buildUrl(117059, 'Dell_US_ISG_HVE_IONSubmit');
              Marketing.UDO.hve_ion_submit(ionSubmitUrl, 'iframe');
              var rfqSubmitUrl = buildUrl(117060, 'Dell_US_ISG_HVE_RFQSubmit');
              Marketing.UDO.hve_rfq_submit(rfqSubmitUrl, 'iframe');
            }
          }
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3277850,
      [3315274],
      616465,
      [610323]
    );
    Marketing.bindDependencyDOMParsed(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          gtag('config', 'AW-623480031');
          window.addEventListener('hve', function (e) {
            if (e.detail.type == 'contactus')
              gtag('event', 'conversion', { send_to: 'AW-623480031/0rGgCNiXudoBEN-ZpqkC' });
          });
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3377574,
      [3329163],
      661934,
      [619404]
    );
    Marketing.bindDependencyImmediate(
      function () {
        const $___old_ed74f54db7723beb = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_ed74f54db7723beb)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___stub_cdc5a54489618108.cookie
            ));
          return function () {
            var Bootstrapper = window['Marketing'];
            var ensightenOptions = Marketing.ensightenOptions;
            try {
              if (Marketing.UDO.priorconsent) {
                window.addEventListener('udoReady', function (e) {
                  if (
                    /thankyou/i.test(location.href) &&
                    /\/premier\//i.test(location.pathname) &&
                    Marketing.scDataObj.country == 'us'
                  )
                    Marketing.gEvent('DC-9632921/sales0/premi0+transactions', 'purchase');
                });
                Marketing.UDO.g_bc_50('DC-9632921/hve010/com_h002+standard', 'conversion');
                Marketing.UDO.g_bc_80('DC-9632921/hve010/com_h003+standard', 'conversion');
                Marketing.UDO.g_bc_end('DC-9632921/hve010/com_h004+standard', 'conversion');
                Marketing.UDO.g_bc_start('DC-9632921/hve010/com_h001+standard', 'conversion');
                Marketing.UDO.g_chat('DC-9632921/hve010/com_h006+standard', 'conversion');
                Marketing.UDO.g_contactus('DC-9632921/hve010/com_h005+standard', 'conversion');
                Marketing.UDO.g_download('DC-9632921/hve010/com_h0+standard', 'conversion');
                Marketing.UDO.g_mpv('DC-9632921/hve010/com_h000+standard', 'conversion');
                Marketing.UDO.g_podcast_listen(
                  'DC-9632921/hve010/com_h009+standard',
                  'conversion'
                );
                Marketing.UDO.g_share('DC-9632921/hve010/com_h00+standard', 'conversion');
                Marketing.UDO.g_rfq_submit('DC-9632921/hve010/com_h00a+standard', 'conversion');
                Marketing.UDO.g_ion_submit('DC-9632921/hve010/com_h00b+standard', 'conversion');
                Marketing.UDO.g_gated_submit('DC-9632921/hve010/com_h00c+standard', 'conversion');
                if (
                  /(0|1)$/i.test(Marketing.UDO.promoid) &&
                  Marketing.scDataObj.segment === 'corp'
                )
                  Marketing.gEvent('DC-9632921/homea0/mediu0+standard', 'conversion');
                if (/2/i.test(Marketing.UDO.promoid) && Marketing.scDataObj.segment === 'corp')
                  Marketing.gEvent('DC-9632921/famil0/mediu0+standard', 'conversion');
                if (/(delltech|dellemc)/i.test(Marketing.scDataObj.cms))
                  Marketing.gEvent('DC-9632921/famil0/isg_f0+standard', 'conversion');
                if (/eStore:productdetailspage/i.test(dell_marketing_util.getscMap('pagename')))
                  Marketing.gEvent('DC-9632921/confi0/isg_c0+standard', 'conversion');
                if (Marketing.scDataObj.cms === 'olr') {
                  if (Marketing.UDO.promoid === '1')
                    Marketing.gEvent('DC-9632921/homea0/premi0+standard', 'conversion');
                  if (/preconfigure/i.test(dell_marketing_util.getscMap('pagename')))
                    Marketing.gEvent('DC-9632921/famil0/premi0+standard', 'conversion');
                  if (
                    /\/premier/i.test(location.pathname) &&
                    /category/i.test(dell_marketing_util.getscMap('pagename'))
                  )
                    Marketing.gEvent('DC-9632921/categ0/premi0+standard', 'conversion');
                  if (/productdetails/i.test(dell_marketing_util.getscMap('pagename')))
                    Marketing.gEvent('DC-9632921/produ0/premi0+standard', 'conversion');
                  if (
                    /config/i.test(dell_marketing_util.getscMap('pagename')) &&
                    !/preconfig/i.test(dell_marketing_util.getscMap('pagename'))
                  )
                    Marketing.gEvent('DC-9632921/confi0/premi0+standard', 'conversion');
                  if (/deals/i.test(dell_marketing_util.getscMap('pagename')))
                    Marketing.gEvent('DC-9632921/deals0/premi0+standard', 'conversion');
                  if (Marketing.UDO.promoid === '9' && Marketing.scDataObj.cms === 'olr')
                    Marketing.gEvent('DC-9632921/baske0/premi0+standard', 'conversion');
                }
              }
            } catch (e) {
              dell_marketing_util.debug(e);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_ed74f54db7723beb)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_ed74f54db7723beb
            ));
        }
      },
      3242480,
      [3329163, 3253918],
      621645,
      [619404, 620818]
    );
    Marketing.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          if (Marketing.UDO.priorconsent) {
            window.addEventListener('udoReady', function (e) {
              if (
                /thankyou/i.test(location.href) &&
                /\/premier\//i.test(location.pathname) &&
                Marketing.scDataObj.country == 'us'
              )
                Marketing.gEvent('DC-9632921/sales0/premi0+transactions', 'purchase');
            });
            Marketing.UDO.g_bc_50('DC-9632921/hve010/com_h002+standard', 'conversion');
            Marketing.UDO.g_bc_80('DC-9632921/hve010/com_h003+standard', 'conversion');
            Marketing.UDO.g_bc_end('DC-9632921/hve010/com_h004+standard', 'conversion');
            Marketing.UDO.g_bc_start('DC-9632921/hve010/com_h001+standard', 'conversion');
            Marketing.UDO.g_chat('DC-9632921/hve010/com_h006+standard', 'conversion');
            Marketing.UDO.g_contactus('DC-9632921/hve010/com_h005+standard', 'conversion');
            Marketing.UDO.g_download('DC-9632921/hve010/com_h0+standard', 'conversion');
            Marketing.UDO.g_mpv('DC-9632921/hve010/com_h000+standard', 'conversion');
            Marketing.UDO.g_podcast_listen('DC-9632921/hve010/com_h009+standard', 'conversion');
            Marketing.UDO.g_share('DC-9632921/hve010/com_h00+standard', 'conversion');
            Marketing.UDO.g_rfq_submit('DC-9632921/hve010/com_h00a+standard', 'conversion');
            Marketing.UDO.g_ion_submit('DC-9632921/hve010/com_h00b+standard', 'conversion');
            Marketing.UDO.g_gated_submit('DC-9632921/hve010/com_h00c+standard', 'conversion');
            if (/(0|1)$/i.test(Marketing.UDO.promoid) && Marketing.scDataObj.segment === 'corp')
              Marketing.gEvent('DC-9632921/homea0/mediu0+standard', 'conversion');
            if (/2/i.test(Marketing.UDO.promoid) && Marketing.scDataObj.segment === 'corp')
              Marketing.gEvent('DC-9632921/famil0/mediu0+standard', 'conversion');
            if (/(delltech|dellemc)/i.test(Marketing.scDataObj.cms))
              Marketing.gEvent('DC-9632921/famil0/isg_f0+standard', 'conversion');
            if (/eStore:productdetailspage/i.test(dell_marketing_util.getscMap('pagename')))
              Marketing.gEvent('DC-9632921/confi0/isg_c0+standard', 'conversion');
            if (Marketing.scDataObj.cms === 'olr') {
              if (Marketing.UDO.promoid === '1')
                Marketing.gEvent('DC-9632921/homea0/premi0+standard', 'conversion');
              if (/preconfigure/i.test(dell_marketing_util.getscMap('pagename')))
                Marketing.gEvent('DC-9632921/famil0/premi0+standard', 'conversion');
              if (
                /\/premier/i.test(location.pathname) &&
                /category/i.test(dell_marketing_util.getscMap('pagename'))
              )
                Marketing.gEvent('DC-9632921/categ0/premi0+standard', 'conversion');
              if (/productdetails/i.test(dell_marketing_util.getscMap('pagename')))
                Marketing.gEvent('DC-9632921/produ0/premi0+standard', 'conversion');
              if (
                /config/i.test(dell_marketing_util.getscMap('pagename')) &&
                !/preconfig/i.test(dell_marketing_util.getscMap('pagename'))
              )
                Marketing.gEvent('DC-9632921/confi0/premi0+standard', 'conversion');
              if (/deals/i.test(dell_marketing_util.getscMap('pagename')))
                Marketing.gEvent('DC-9632921/deals0/premi0+standard', 'conversion');
              if (Marketing.UDO.promoid === '9' && Marketing.scDataObj.cms === 'olr')
                Marketing.gEvent('DC-9632921/baske0/premi0+standard', 'conversion');
            }
          }
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3242480,
      [3329163, 3253918],
      621645,
      [619404, 620818]
    );
    Marketing.bindDependencyDOMParsed(
      function () {
        const $___old_effefa83c3033e9f = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_effefa83c3033e9f)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___stub_cdc5a54489618108.cookie
            ));
          return function () {
            var Bootstrapper = window['Marketing'];
            var ensightenOptions = Marketing.ensightenOptions;
            try {
              var createImage = Marketing.imageRequest;
              var marketingUDO = Marketing.UDO;
              if (window.location.href.includes('cloud/dell-technologies-cloud.htm')) {
                createImage(
                  '//pixel.quantserve.com/pixel/p-03ceqXq6mSzQk.gif?labels=_fp.event.ISG Cloud Landing Page'
                );
                var pixel =
                  '//pixel.quantserve.com/pixel/p-03ceqXq6mSzQk.gif?labels=_fp.event.ISG Dell Technologies Cloud,_fp.pcat.' +
                  marketingUDO.prodcat +
                  '&orderid=' +
                  marketingUDO.ordercode +
                  '&revenue=' +
                  marketingUDO.revenue;
                marketingUDO.hve_bcove(pixel);
                marketingUDO.hve_chat(pixel);
                marketingUDO.hve_contactUs(pixel);
                marketingUDO.hve_download(pixel);
                marketingUDO.hve_mpv(pixel);
                marketingUDO.hve_podcasts(pixel);
                marketingUDO.hve_social(pixel);
                marketingUDO.hve_ytube(pixel);
              }
              marketingUDO.hve_chat(
                '//pixel.quantserve.com/pixel/p-03ceqXq6mSzQk.gif?labels=_fp.event.ISG Chat Now,_fp.pcat.' +
                  marketingUDO.prodcat +
                  ',_fp.customer.' +
                  marketingUDO.type +
                  '&orderid=' +
                  marketingUDO.ordercode +
                  '&revenue=' +
                  marketingUDO.revenue
              );
              marketingUDO.hve_contactUs(
                '//pixel.quantserve.com/pixel/p-03ceqXq6mSzQk.gif?labels=_fp.event.ISG Contact Us,_fp.pcat.' +
                  marketingUDO.prodcat +
                  ',_fp.customer.' +
                  marketingUDO.type +
                  '&orderid=' +
                  marketingUDO.ordercode +
                  '&revenue=' +
                  marketingUDO.revenue
              );
              marketingUDO.hve_download(
                '//pixel.quantserve.com/pixel/p-03ceqXq6mSzQk.gif?labels=_fp.event.ISG Download,_fp.pcat.' +
                  marketingUDO.prodcat +
                  ',_fp.customer.' +
                  marketingUDO.type +
                  '&orderid=' +
                  marketingUDO.ordercode +
                  '&revenue=' +
                  marketingUDO.revenue
              );
              marketingUDO.hve_mpv(
                '//pixel.quantserve.com/pixel/p-03ceqXq6mSzQk.gif?labels=_fp.event.ISG Multi Page View,_fp.pcat.' +
                  marketingUDO.prodcat +
                  ',_fp.customer.' +
                  marketingUDO.type +
                  '&orderid=' +
                  marketingUDO.ordercode +
                  '&revenue=' +
                  marketingUDO.revenue
              );
              marketingUDO.hve_gated_submit(
                '//pixel.quantserve.com/pixel/p-03ceqXq6mSzQk.gif?labels=_fp.event.ISG Gated Submit,_fp.pcat.' +
                  marketingUDO.prodcat +
                  ',_fp.customer.' +
                  marketingUDO.type +
                  '&orderid=' +
                  marketingUDO.ordercode +
                  '&revenue=' +
                  marketingUDO.revenue
              );
              marketingUDO.hve_ion_submit(
                '//pixel.quantserve.com/pixel/p-03ceqXq6mSzQk.gif?labels=_fp.event.ISG ION Submit,_fp.pcat.' +
                  marketingUDO.prodcat +
                  ',_fp.customer.' +
                  marketingUDO.type +
                  '&orderid=' +
                  marketingUDO.ordercode +
                  '&revenue=' +
                  marketingUDO.revenue
              );
            } catch (e) {
              dell_marketing_util.debug(e);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_effefa83c3033e9f)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_effefa83c3033e9f
            ));
        }
      },
      3396460,
      [3315274],
      620246,
      [610323]
    );
  })();
}
