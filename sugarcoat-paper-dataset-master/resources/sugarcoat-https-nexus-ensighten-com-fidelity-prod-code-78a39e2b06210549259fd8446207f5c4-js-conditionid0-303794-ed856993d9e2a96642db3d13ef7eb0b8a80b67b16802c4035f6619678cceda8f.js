{
  const $___stub_47c01efa79e9f191 = {};
  (exports => {
    'use strict';
    exports.appVersion = {
      configurable: true,
      enumerable: true,
      get () {
        return '5.0';
      },
    };
    exports.platform = {
      configurable: true,
      enumerable: true,
      get () {
        return '';
      },
    };
    exports.userAgent = {
      configurable: true,
      enumerable: true,
      get () {
        return 'Mozilla/5.0';
      },
    };
  })($___stub_47c01efa79e9f191);
  (function () {
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (location.pathname == '/retirement-ira/minimum-required-distribution-faq')
          Bootstrapper.dataManager.push({
            name: 'dartPageValues',
            id: 'dartPageValues',
            data: {
              type: {
                name: 'type',
                get: function () {
                  return 'fidel019';
                },
              },
              cat: {
                name: 'cat',
                get: function () {
                  return 'lpg_i860';
                },
              },
            },
          });
        Bootstrapper.bindDOMParsed(function () {
          if (location.pathname == '/retirement-ira/traditional-ira')
            if (typeof jQuery === 'function')
              jQuery('a[href*="/customeronly/contrib.shtml"]').click(function () {
                try {
                  Bootstrapper._createDARTTag('fidel019', 'cnt_f271');
                } catch (er) {
                  Bootstrapper.reportException(er);
                }
              });
        });
      },
      3339394,
      224110
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.trackerFramework.postSendData.add(function () {
          (function () {
            var BrowserMessaging = (window.BrowserMessaging = window.BrowserMessaging || {});
            BrowserMessaging.browserMessage = (function () {
              function getInternetExplorerVersion () {
                var rv = -1;
                if (navigator.appName == 'Microsoft Internet Explorer') {
                  var ua = navigator.userAgent;
                  var re = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
                  if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
                }
                return rv;
              }
              function getCompatibilityMode () {
                const $___old_478d7f137fb00a28 = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_478d7f137fb00a28)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_47c01efa79e9f191.userAgent
                    ));
                  return function () {
                    var agentStr = navigator.userAgent;
                    if (agentStr.indexOf('MSIE 7.0') > -1 && agentStr.indexOf('Trident') > -1)
                      return true;
                    else return false;
                  }.apply(this, arguments);
                } finally {
                  if ($___old_478d7f137fb00a28)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_478d7f137fb00a28
                    ));
                }
              }
              function checkVersion () {
                var ver = getInternetExplorerVersion();
                var compatibilityMode = getCompatibilityMode();
                if (ver > -1) if (ver === 7 && !compatibilityMode) return true;
                return false;
              }
              function hideBrowserMessage () {
                document.getElementById('browser-message').style.display = 'none';
              }
              function attachButtonEvents () {
                document.getElementById('viewSupportedBrowsers').onclick = function () {
                  document.location =
                    'https://www.fidelity.com/customer-service/faqs-technical-support';
                };
                document.getElementById('continueWithoutUpgrading').onclick = function () {
                  showHideModalLayer();
                };
              }
              function showHideModalLayer (show) {
                if (show) {
                  attachButtonEvents();
                  document.getElementById('browserMessage').style.display = 'block';
                  document.getElementById('browserMessageModalLayer').style.display = 'block';
                } else {
                  document.getElementById('browserMessage').style.display = 'none';
                  document.getElementById('browserMessageModalLayer').style.display = 'none';
                }
              }
              function displayBrowserMessageHTML () {
                var message =
                  '<div id="browserMessage" class="browserMessage"><h1 class="browserMessage--heading">Your browser is no longer supported.</h1>    <p class="browserMessage--text">Some of our site features may not work properly as a result. To ensure you proceed securely and have our best site experience, please upgrade to a fully supported browser.</p>    <button class="action-button--generic" id="viewSupportedBrowsers">View Supported Browsers</button>    <button class="action-button--secondary" id="continueWithoutUpgrading">Continue Without Upgrading</button></div><div id="browserMessageModalLayer"></div>';
                var rootDiv = document.createElement('div');
                rootDiv.innerHTML = message;
                document.getElementsByTagName('body')[0].appendChild(rootDiv);
              }
              function includeBrowserMessageCSS () {
                var browserMsgCSS = document.createElement('link');
                var browserMessageCss;
                var styleTag = document.createElement('style');
                styleTag.setAttribute('type', 'text/css');
                browserMessageCss =
                  '#browserMessage { display: none; position: absolute; left: 25%; top: 25%; border: 2px solid #000; background-color: #fff;   width: 570px; height: 180px; z-index: 100000000;}';
                browserMessageCss +=
                  ' #browserMessageModalLayer { display: none; position: absolute; left: 0; top: 0; background-color: #000; opacity: .7; filter: alpha(opacity=70); width: 100%; height: 100%; z-index: 99999999;}';
                browserMessageCss +=
                  ' .browserMessage { padding: 10.005px 10.005px 15px 15px; font-family: Cambria, Georgia, serif; margin-bottom: 18px; margin-bottom: 1.2rem; font-size: 15px; font-size: 1rem; line-height: 1.4; background-color: transparent;}';
                browserMessageCss +=
                  ' .browserMessage--text { padding: 20.005px 10.005px 0px px; font-family: Cambria, Georgia, serif; margin-bottom: 18px; margin-bottom: 1.2rem; font-size: 15px; font-size: 1rem; line-height: 1.4; background-color: transparent;}';
                browserMessageCss +=
                  ' .browserMessage--heading { margin: 0; border: none; padding: 0 0 0 0; font-family: Helvetica, Arial, sans-serif; font-size: 33px; font-size: 2.2rem; line-height: 1.09; font-weight: normal; color: #000;}';
                browserMessageCss +=
                  ' .action-button--generic { -ms-border-radius: 3px; border-radius: 3px; cursor: pointer; display: inline-block; font-family: Helvetica,Arial,sans-serif; font-weight: 600; height: 30px; margin: 0 12px 0 0; padding: 0 20px; text-decoration: none; vertical-align: middle; background-color: #0069b6; background-image: -ms-linear-gradient(top, #9bc7e6, #0069b6 50%); background-image: linear-gradient(top, #9bc7e6, #0069b6 50%); filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#9bc7e6, endColorstr=#0069b6); -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#9bc7e6, endColorstr=#0069b6)"; border: 1px solid #004988; box-shadow: 1px 1px 2px #cccccc; color: #ffffff; font-size: 106.7%; text-shadow: 1px 1px 4px #004988; width: 240px;}';
                browserMessageCss +=
                  ' .action-button--generic:hover, .action-button--generic:focus { background-color: #7ab3dc; background-image: -ms-linear-gradient(top, #7ab3dc, #0069b6 50%); background-image: linear-gradient(top, #7ab3dc, #0069b6 50%); filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#7ab3dc, endColorstr=#0069b6); -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#7ab3dc, endColorstr=#0069b6)"; text-decoration: none;}';
                browserMessageCss += ' .action-button--generic:visited { color: #ffffff;}';
                browserMessageCss +=
                  ' .action-button--secondary { -ms-border-radius: 3px; border-radius: 3px; cursor: pointer; display: inline-block; font-family: Helvetica,Arial,sans-serif; font-weight: 600; height: 30px; margin: 0; padding: 0 20px; text-decoration: none; vertical-align: middle; background-color: #e5e5e5; background-image: linear-gradient(top, #ffffff, #e5e5e5 50%); filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=white, endColorstr=#e5e5e5); -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=white, endColorstr=#e5e5e5)"; border: 1px solid #333333; box-shadow: 1px 1px 2px #cccccc; color: #333333; font-size: 106.7%; text-shadow: 1px 1px 4px #cccccc; width: 260px;}';
                browserMessageCss +=
                  ' .action-button--secondary:hover, .action-button--secondary:focus { background-color: #d8d8d8; background-image: linear-gradient(top, #f2f2f2, #d8d8d8 50%); filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#f2f2f2, endColorstr=#d8d8d8); -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#f2f2f2, endColorstr=#d8d8d8)"; text-decoration: none;}';
                browserMessageCss += ' .action-button--secondary:visited { color: #333333;}';
                if (styleTag.styleSheet) {
                  styleTag.styleSheet.cssText = browserMessageCss;
                  document.getElementsByTagName('head')[0].appendChild(styleTag);
                } else if (styleTag.style) styleTag.style.cssText = browserMessageCss;
                document.getElementsByTagName('head')[0].appendChild(styleTag);
              }
              function setupBrowserMessaging () {
                var debugFlag = false;
                if (Bootstrapper.getQueryParam('debugIE7Message') === 'true') debugFlag = true;
                if (checkVersion() || debugFlag)
                  if ((document.cookie !== '' && !tmsGetCookieValue('bm')) || debugFlag) {
                    includeBrowserMessageCSS();
                    displayBrowserMessageHTML();
                    showHideModalLayer(true);
                    if (!debugFlag) tmsSetCookieValue('bm', '1');
                    if (typeof window.tmsTrackGenericContentChangeAsPV === 'function')
                      window.tmsTrackGenericContentChangeAsPV('IE7 Message');
                  }
              }
              return {
                hideBrowserMessage: hideBrowserMessage,
                setupBrowserMessaging: setupBrowserMessaging,
              };
            })();
          })();
          BrowserMessaging.browserMessage.setupBrowserMessaging();
        });
      },
      384351,
      236227
    );
  })();
}
