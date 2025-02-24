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
    Marketing.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          if (Marketing.getQueryParam('mdebug') == 'true') {
            dell_marketing_util.getDpid = function () {
              return new Date().getTime();
            };
            Marketing.gEvent('DC-9632645/sales0/csb_test+transactions', 'purchase');
            document.querySelectorAll('iframe').forEach(function (key) {
              if (key.src.includes('type=sales'))
                key.contentWindow.postMessage(JSON.stringify(Marketing), '*');
            });
          }
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3242482,
      [3329163],
      636142,
      [619404]
    );
    Marketing.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        Marketing.UDO.g_download = function (idString, eventType) {
          window.addEventListener('hve', function (e) {
            Marketing.UDO.hveoverlay = false;
            if (e.detail.type === 'download') Marketing.gEvent(idString, eventType);
          });
          if (Marketing.UDO.hveoverlay) Marketing.gEvent(idString, eventType);
        };
        Marketing.UDO.g_share = function (idString, eventType) {
          window.addEventListener('hve', function (e) {
            if (e.detail.type === 'share') Marketing.gEvent(idString, eventType);
          });
        };
        Marketing.UDO.g_mpv = function (idString, eventType) {
          const $___old_6177d22ee8eeb275 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'sessionStorage'
          );
          try {
            if ($___old_6177d22ee8eeb275)
              ({}.constructor.defineProperty(
                window,
                'sessionStorage',
                $___stub_b317e19f866a2da7.sessionStorage
              ));
            return function () {
              if (sessionStorage.enspagecountFLT == 3) Marketing.gEvent(idString, eventType);
            }.apply(this, arguments);
          } finally {
            if ($___old_6177d22ee8eeb275)
              ({}.constructor.defineProperty(window, 'sessionStorage', $___old_6177d22ee8eeb275));
          }
        };
        Marketing.UDO.g_bc_start = function (idString, eventType) {
          if (typeof videojs !== 'undefined' && videojs.players)
            for (var v in videojs.players)
              videojs.players[v].ready(function () {
                var myplayer = this,
                  userVideo = !myplayer.el_.hasAttribute('muted');
                if (userVideo)
                  myplayer.on('play', function () {
                    if (!myplayer.video_start) {
                      myplayer.video_50_percent = false;
                      myplayer.video_80_percent = false;
                      Marketing.gEvent(idString, eventType);
                    }
                  });
              });
          else
            window.addEventListener('hve', function _handler (e) {
              if (e.detail.type === 'brightcove') {
                Marketing.UDO.g_bc_start(idString, eventType);
                window.removeEventListener('hve', _handler);
              }
            });
        };
        Marketing.UDO.g_bc_50 = function (idString, eventType) {
          window.addEventListener('brightcove50', function (e) {
            Marketing.gEvent(idString, eventType);
          });
        };
        Marketing.UDO.g_bc_80 = function (idString, eventType) {
          window.addEventListener('brightcove80', function (e) {
            Marketing.gEvent(idString, eventType);
          });
        };
        Marketing.UDO.g_bc_end = function (idString, eventType) {
          if (typeof videojs !== 'undefined' && videojs.players)
            for (var v in videojs.players)
              videojs.players[v].ready(function () {
                var myplayer = this,
                  userVideo = !myplayer.el_.hasAttribute('muted');
                if (userVideo)
                  myplayer.on('ended', function () {
                    Marketing.gEvent(idString, eventType);
                    myplayer.video_start = false;
                  });
              });
          else
            window.addEventListener('hve', function _handler (e) {
              if (e.detail.type === 'brightcove') {
                Marketing.UDO.g_bc_end(idString, eventType);
                window.removeEventListener('hve', _handler);
              }
            });
        };
        Marketing.UDO.g_contactus = function (idString, eventType) {
          window.addEventListener('hve', function (e) {
            if (e.detail.type === 'contactus') Marketing.gEvent(idString, eventType);
          });
        };
        Marketing.UDO.g_chat = function (idString, eventType) {
          window.addEventListener('hve', function (e) {
            if (e.detail.type === 'chat') Marketing.gEvent(idString, eventType);
          });
        };
        Marketing.UDO.g_addtocart = function (idString, eventType) {
          if (
            dell_marketing_util.getscMap('wacontroller') === 'contents' ||
            dell_marketing_util.getscMap('workflowstep') === 'cart'
          )
            Marketing.gEvent(idString, eventType);
        };
        Marketing.UDO.g_checkout = function (idString, eventType) {
          if (dell_marketing_util.getscMap('wacontroller') === 'confirmation')
            Marketing.gEvent(idString, eventType);
        };
        Marketing.UDO.g_podcast_listen = function (idString, eventType) {
          window.addEventListener('hve', function (e) {
            if (e.detail.type === 'podcast_listen') Marketing.gEvent(idString, eventType);
          });
        };
        Marketing.UDO.g_podcast_subscribe = function (idString, eventType) {
          window.addEventListener('hve', function (e) {
            if (e.detail.type === 'podcast_subscribe') Marketing.gEvent(idString, eventType);
          });
        };
        Marketing.UDO.g_rfq_submit = function (idString, eventType) {
          window.addEventListener('hve', function (e) {
            if (e.detail.type === 'rfq_submit') Marketing.gEvent(idString, eventType);
          });
        };
        Marketing.UDO.g_ion_submit = function (idString, eventType) {
          if (/liveball.*completed/gi.test(dell_marketing_util.getscMap('pagename')))
            Marketing.gEvent(idString, eventType);
        };
        Marketing.UDO.g_gated_submit = function (idString, eventType) {
          window.addEventListener('hve', function (e) {
            if (e.detail.type === 'gated_submit') Marketing.gEvent(idString, eventType);
          });
        };
      },
      3253918,
      [3329163],
      620818,
      [619404]
    );
    Marketing.bindDOMParsed(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          if (Marketing.UDO.priorconsent)
            Marketing.imageRequest('https://px.ads.linkedin.com/collect/?pid=7513&fmt=gif');
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3229142,
      619089
    );
    Marketing.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        Marketing.UDO.fl_loaded = false;
        Marketing.loadScriptCallback(
          'https://www.googletagmanager.com/gtag/js?id=DC-9632645',
          function () {
            dell_marketing_util.custom_marketing_event('fl_loaded');
            Marketing.UDO.fl_loaded = true;
          }
        );
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
          dataLayer.push(arguments);
        };
        gtag('js', new Date());
        gtag('config', 'DC-9632645');
        gtag('config', 'DC-9632921');
        gtag('config', 'DC-9632648');
        var cflv_master_setup = function () {
          return {
            allow_custom_scripts: true,
            u1: Marketing.UDO.language,
            u10: Marketing.UDO.cseg,
            u11: Marketing.UDO.deals,
            u12: Marketing.UDO.device,
            u13: Marketing.UDO.discount,
            u14: Marketing.UDO.family,
            u15: Marketing.UDO.ogid,
            u16: Marketing.UDO.ordercode,
            u17: Marketing.UDO.platform,
            u18: Marketing.UDO.prodcat,
            u19: Marketing.UDO.product,
            u2: Marketing.UDO.segment,
            u20: Marketing.UDO.promoid,
            u21: Marketing.UDO.type,
            u22: dell_marketing_util.getParameterByName('dgc', location.toString().toLowerCase()),
            u23: Marketing.UDO.gacd,
            u24: dell_marketing_util.getParameterByName('lid', location.toString().toLowerCase()),
            u25: Marketing.UDO.ven1,
            u26: Marketing.UDO.ven2,
            u27: Marketing.UDO.ven3,
            u28: dell_marketing_util.getParameterByName(
              'tfcid',
              location.toString().toLowerCase()
            ),
            u29: Marketing.UDO.revenue,
            u3: Marketing.UDO.currency,
            u30: Marketing.UDO.usdrev,
            u35: Marketing.UDO.dpid,
            u36: Marketing.UDO.land,
            u37: Marketing.UDO.serialprodlist,
            u38: Marketing.UDO.cjevent,
            u4: Marketing.UDO.country,
            u5: Marketing.UDO.accountid,
            u6: Marketing.UDO.category,
            u7: Marketing.UDO.categorypath,
            u8: Marketing.UDO.cid,
            u9: Marketing.UDO.coupon,
          };
        };
        Marketing.UDO.readData();
        var cflv_master = cflv_master_setup();
        cflv_master['u31'] = '';
        var adobe_mcmid = dell_marketing_util.getCookie(
          'AMCV_4DD80861515CAB990A490D45%40AdobeOrg'
        );
        if (adobe_mcmid) cflv_master['u31'] = adobe_mcmid.split('MCMID|')[1].split('|')[0];
        Marketing.gEvent =
          Marketing.gEvent ||
          function (idString, eventType) {
            window.addEventListener('fl_loaded', function () {
              var cflv = cflv_master;
              if (eventType === 'purchase') {
                cflv['value'] = Marketing.UDO.usdrev || Marketing.UDO.revenue;
                cflv['transaction_id'] = dell_marketing_util.getDpid();
              }
              cflv['send_to'] = idString;
              gtag('event', eventType, cflv);
            });
            if (Marketing.UDO.fl_loaded) {
              cflv_master = cflv_master_setup();
              var cflv = cflv_master;
              if (eventType === 'purchase') {
                cflv['value'] = Marketing.UDO.usdrev || Marketing.UDO.revenue;
                cflv['transaction_id'] = dell_marketing_util.getDpid();
              }
              cflv['send_to'] = idString;
              gtag('event', eventType, cflv);
            }
          };
      },
      3329163,
      [3315274],
      619404,
      [610323]
    );
    Marketing.bindDependencyDOMParsed(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        var c = Marketing.scDataObj.country;
        try {
          if (Marketing.UDO.priorconsent) {
            if (c === 'us')
              Marketing.insertScript(
                '//vt.myvisualiq.net/2/TxUQNHSKvGWIiMj1Oh3tfw%3D%3D/vt-288.js'
              );
            if (c === 'ca')
              Marketing.insertScript(
                '//vt.myvisualiq.net/2/TxUQNHSKvGWIiMj1Oh3tfw%3D%3D/vt-289.js'
              );
            if (c === 'br')
              Marketing.insertScript(
                '//vt.myvisualiq.net/2/wQQtTiizl4SixrhITyTqbg%3D%3D/vt-286.js'
              );
            if (c === 'uk')
              Marketing.insertScript(
                '//vt.myvisualiq.net/2/ami7eWD7Ma9qku9HDG232w%3D%3D/vt-213.js'
              );
            if (c === 'jp')
              Marketing.insertScript(
                '//vt.myvisualiq.net/2/6%2BxT%2BO3z1zh14yulJBDN6g%3D%3D/vt-287.js'
              );
            if (c === 'au')
              Marketing.insertScript(
                '//vt.myvisualiq.net/2/ipeeyHht4npQEiziCWaYzw%3D%3D/vt-299.js'
              );
            if (c === 'nz')
              Marketing.insertScript(
                '//vt.myvisualiq.net/2/ipeeyHht4npQEiziCWaYzw%3D%3D/vt-301.js'
              );
            if (c === 'in')
              Marketing.insertScript(
                '//vt.myvisualiq.net/2/uBF%2BndJT7n0r9WysNI1Vww%3D%3D/vt-298.js'
              );
            if (c === 'fr')
              Marketing.insertScript(
                '//vt.myvisualiq.net/2/GXOdN%2BWugY3N3n4a5LAkNQ%3D%3D/vt-300.js'
              );
            if (c === 'de')
              Marketing.insertScript(
                '//vt.myvisualiq.net/2/v9BJOGcgl4wfjn7pXBhunA%3D%3D/vt-302.js'
              );
          }
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3229147,
      [3310052, 3315274],
      621919,
      [610310, 610323]
    );
  })();
}
