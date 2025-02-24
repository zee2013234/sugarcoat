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
    Marketing.bindDOMParsed(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          Marketing.imageRequest('//bttrack.com/Pixel/Conversion/14573/default?type=img');
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3202641,
      637981
    );
    Marketing.bindDOMParsed(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          var createImage = Marketing.imageRequest;
          if (
            window.location.href.includes('en-us/midmarket-solutions/hci.htm') ||
            window.location.href.includes('en-us/midmarket-solutions/data-protection.htm') ||
            window.location.href.includes('en-us/midmarket-solutions/servers.htm') ||
            window.location.href.includes('en-us/midmarket-solutions/storage.htm') ||
            window.location.href.includes('en-us/midmarket-solutions/index.htm')
          )
            createImage(
              '//r.turn.com/r/beacon?b2=JHhA6NIHhHb-QcTE89OdGwbawoaxpxAYtQk40Lyu692fnoOTocNvFwEE4YgHHkvbzAATFeax0uHXw8IjQiH_vw&cid='
            );
          if (window.location.href.includes('en-us/index.htm'))
            createImage(
              '//r.turn.com/r/beacon?b2=mWYWruNqVOJQ-HZSkxwG9GwBj35Xmja6USsSAAbNpY6fnoOTocNvFwEE4YgHHkvbvU4zZ4y2boy0alO5gsZhzQ&cid='
            );
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3139865,
      610241
    );
    Marketing.bindDOMParsed(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          Marketing.imageRequest(
            'https://p.tvpixel.com/i?aid=dell-js-70a9d003-5284-4b96-a209-251803cb019c&e=pv&p=web&tv=1x1&cb=' +
              Date.now()
          );
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3157019,
      630499
    );
    Marketing.bindDependencyDOMParsed(
      function () {
        const $___old_11b870825e50d82e = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_11b870825e50d82e)
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
              rand = Math.floor(Math.random() * 999999999);
              marketingUDO.hve_mpv(
                '//pixel.everesttech.net/px2/9116?px_evt=t&ev_Multi-Page-Views=1&ev_transid=' +
                  rand
              );
              marketingUDO.hve_mpv(
                '//pixel.everesttech.net/px2/9120?px_evt=t&ev_Multi-Page-Views=1&ev_transid=' +
                  rand
              );
              marketingUDO.hve_download(
                '//pixel.everesttech.net/px2/9116?px_evt=t&ev_Download=1&ev_transid=' + rand
              );
              marketingUDO.hve_download(
                '//pixel.everesttech.net/px2/9120?px_evt=t&ev_Download=1&ev_transid=' + rand
              );
              marketingUDO.hve_contactUs(
                '//pixel.everesttech.net/px2/9116?px_evt=t&ev_Contact_Us=1&ev_transid=' + rand
              );
              marketingUDO.hve_chat(
                '//pixel.everesttech.net/px2/9116?px_evt=t&ev_Chat_Now=1&ev_transid=' + rand
              );
              marketingUDO.hve_chat(
                '//pixel.everesttech.net/px2/9120?px_evt=t&ev_Chat_Now=1&ev_transid=' + rand
              );
              marketingUDO.hve_bcove(
                '//pixel.everesttech.net/px2/9116?px_evt=t&ev_Brightcove_Video_Start=1&ev_transid=' +
                  rand
              );
              marketingUDO.hve_bcove(
                '//pixel.everesttech.net/px2/9120?px_evt=t&ev_Brightcove_Video_Start=1&ev_transid=' +
                  rand
              );
              marketingUDO.hve_social(
                '//pixel.everesttech.net/px2/9116?px_evt=t&ev_Share=1&ev_transid=' + rand
              );
              marketingUDO.hve_social(
                '//pixel.everesttech.net/px2/9120?px_evt=t&ev_Share=1&ev_transid=' + rand
              );
            } catch (e) {
              dell_marketing_util.debug(e);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_11b870825e50d82e)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_11b870825e50d82e
            ));
        }
      },
      3229963,
      [3315274],
      631323,
      [610323]
    );
    Marketing.bindDependencyDOMParsed(
      function () {
        const $___old_867d6aa337e9d14c = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_867d6aa337e9d14c)
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
              rand = Math.floor(Math.random() * 999999999);
              marketingUDO.hve_mpv(
                '//pixel.everesttech.net/px2/5572?px_evt=t&ev_Multi-Page-Views=1&ev_transid=' +
                  rand
              );
              marketingUDO.hve_download(
                '//pixel.everesttech.net/px2/5572?px_evt=t&ev_Download=1&ev_transid=' + rand
              );
              marketingUDO.hve_contactUs(
                '//pixel.everesttech.net/px2/5572?px_evt=t&ev_Contact_Us=1&ev_transid=' + rand
              );
              marketingUDO.hve_chat(
                '//pixel.everesttech.net/px2/5572?px_evt=t&ev_Chat_Now=1&ev_transid=' + rand
              );
              marketingUDO.hve_bcove(
                '//pixel.everesttech.net/px2/5572?px_evt=t&ev_Brightcove_Video_Start=1&ev_transid=' +
                  rand
              );
              marketingUDO.hve_podcasts(
                '//pixel.everesttech.net/px2/5572?px_evt=t&ev_Listen=1&ev_transid=' + rand
              );
              marketingUDO.hve_social(
                '//pixel.everesttech.net/px2/5572?px_evt=t&ev_Share=1&ev_transid=' + rand
              );
            } catch (e) {
              dell_marketing_util.debug(e);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_867d6aa337e9d14c)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_867d6aa337e9d14c
            ));
        }
      },
      3229969,
      [3315274],
      631328,
      [610323]
    );
  })();
}
