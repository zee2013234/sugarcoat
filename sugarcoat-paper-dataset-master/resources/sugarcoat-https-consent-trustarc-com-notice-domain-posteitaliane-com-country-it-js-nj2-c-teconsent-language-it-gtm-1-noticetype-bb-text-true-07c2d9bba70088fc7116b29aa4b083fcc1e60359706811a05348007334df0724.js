{
  const $___stub_fd468a9a287c63aa = {};
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
  })($___stub_fd468a9a287c63aa);
  (function () {
    truste.bn.round = function (b, a) {
      return Number(Math.round(b + 'e' + a) + 'e-' + a);
    };
    truste.bn.getDefaultStyleProperty = function (a, b) {
      var c = document.createElement(b);
      document.body.appendChild(c);
      var d = window.getComputedStyle(c, null)[a];
      c.parentNode.removeChild(c);
      return d;
    };
    truste.bn.getDisplayProperty = function (b) {
      var a = window.getComputedStyle(b, null).display;
      return a == 'none' ? truste.bn.getDefaultStyleProperty('display', b.nodeName) : a;
    };
    truste.bn.show = function (c) {
      if (!c) {
        return;
      }
      var b = truste.bn.getDisplayProperty(c);
      if (typeof requestAnimationFrame !== 'undefined') {
        c.style.opacity = 0;
        c.style.display = b;
        (function a (d) {
          var e = truste.bn.round(parseFloat(d.style.opacity), 2);
          if ((e = e + 0.1) <= 1) {
            d.style.opacity = e;
            requestAnimationFrame(function () {
              a(d);
            });
          }
        })(c);
      } else {
        c.style.display = b;
      }
    };
    truste.bn.hide = function (b) {
      if (!b) {
        return;
      }
      if (typeof requestAnimationFrame !== 'undefined') {
        (function a (c) {
          var d = truste.bn.round(parseFloat(c.style.opacity || 1), 2);
          d = d - 0.1;
          c.style.opacity = d;
          if (d <= 0) {
            c.style.display = 'none';
          } else {
            requestAnimationFrame(function () {
              a(c);
            });
          }
        })(b);
      } else {
        b.style.display = 'none';
      }
    };
    truste.bn.isVisible = function (b) {
      var a = window.getComputedStyle(b);
      return a.display !== 'none' && a.opacity > 0 && a.visibility !== 'hidden';
    };
    truste.bn.removeEvent = function (c, b, a) {
      if (c && typeof b == 'string' && a instanceof Function) {
        if (c.removeEventListener) {
          c.removeEventListener(b, a, false);
        } else {
          if (c.detachEvent) {
            c.detachEvent('on' + b, a);
          }
        }
      }
    };
    truste.bn.addEvent = function (c, b, a) {
      if (c && typeof b == 'string' && a instanceof Function) {
        if (c.addEventListener) {
          c.addEventListener(b, a, false);
        } else {
          if (c.attachEvent) {
            c.attachEvent('on' + b, a);
          }
        }
      }
    };
    (function bannerMain () {
      var b = truste.eu.bindMap;
      b.bannerMsgURL = b.iconBaseUrl + 'bannermsg?';
      var d = b.params;
      var c = d.c || 'teconsent';
      var e = d.bb || 'consent_blackbar';
      if (!document.getElementById(e)) {
        if (typeof MutationObserver !== 'undefined') {
          var g = new MutationObserver(function f (j) {
            if (document.getElementById(e)) {
              g.disconnect();
              a(d, c, e);
            }
          });
          g.observe(
            document.body || document.getElementsByTagName('body')[0] || document.documentElement,
            { attributes: false, childList: true, characterData: false, subtree: true }
          );
          setTimeout(function () {
            g.disconnect();
          }, 60000);
        } else {
          var i = setInterval(function h () {
            if (document.getElementById(e)) {
              i = clearInterval(i);
              a(d, c, e);
            }
          }, 150);
          setTimeout(function () {
            clearInterval(i);
          }, 10000);
        }
      } else {
        a(d, c, e);
      }
      function a (J, j, B) {
        const $___old_d9d09ac408328bbd = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_d9d09ac408328bbd)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_fd468a9a287c63aa.userAgent
            ));
          return function () {
            var G = 3;
            G = G > 0 ? G : 3;
            var C = (function I (L) {
              var M = [];
              for (var K = 0; K < L; K++) {
                M.push(K);
              }
              return M.join(',');
            })(G);
            var u = 'truste-consent-track';
            var z = /MSEI|Trident/.test(navigator.userAgent);
            var v = /\bandroid (\d+(?:\.\d+)+);/gi.exec(navigator.userAgent);
            var E = v && v[1] <= '4.4';
            var t = document.getElementById(j);
            var n = document.getElementById(B);
            truste.bn.addEvent(window, 'message', p);
            var l = document.readyState;
            if (l && (l == 'complete' || l == 'interactive')) {
              D('loaded');
            } else {
              truste.bn.addEvent(document, 'DOMContentLoaded', function () {
                D('loaded');
              });
            }
            function D (L) {
              if (D[L]) {
                return;
              }
              D[L] = 1;
              switch (L) {
                case 'loaded':
                  if (n) {
                    w();
                    o();
                    s();
                    if (truste.bn.checkPreference()) {
                      F();
                    } else {
                      if (b.bnFlags.consentUnresolved) {
                        truste.bn.checkConsentUnresolved(F, A);
                      } else {
                        A();
                      }
                    }
                  }
                  break;
                case 'done':
                  truste.bn.removeEvent(document, 'click', q);
                  truste.bn.removeEvent(document, 'scroll', r);
                  truste.bn.show(t);
                  truste.bn.hide(document.getElementById(u));
                  break;
                case 'open':
                  try {
                    if (z || E) {
                      var K = document.createEvent('UIEvents');
                      K.initUIEvent('resize', true, false, window, 0);
                      window.dispatchEvent(K);
                    } else {
                      window.dispatchEvent(new Event('resize'));
                    }
                  } catch (M) {
                    console && console.log('Resize event not supported.');
                  }
              }
            }
            function o () {
              var K =
                '<style>@font-face{    font-family:"TextaLight";    src:url(https://consent.trustarc.com/get?name=Texta-Light.eot) format("embedded-opentype"),url(https://consent.trustarc.com/get?name=Texta-Light.woff) format("woff"),url(https://consent.trustarc.com/get?name=Texta-Light.ttf) format("truetype");}.trustarc-banner {      font-family: "TextaLight",Arial,sans-serif;      font-size: 12px;      background-color: #fff;      color: #222427;      padding: 0;      border-radius:0px;      margin-bottom:2px;}  .truste-consent-content{ overflow: hidden; max-height: 49px; min-width: 300px; width: 100%; max-width: 1320px; display: table; margin: 0 auto; }.truste-text{ width: auto; display: table-cell; vertical-align: middle; padding: 10px 10px 12px 15px; text-align: left;  }    .truste-text {      font-family: "TextaLight",Arial,sans-serif;    font-size: 15px;    color: #222427;    letter-spacing: 0;    line-height: 20px;}    .truste-buttontext {      font-family: "TextaLight",Arial,sans-serif;    font-size: 15px;    color: #222427;    border: none;    text-decoration: underline;    cursor: pointer;    letter-spacing: 0px;    line-height: 40px;    }.truste-buttontext:hover {  text-decoration: underline;    color: #222427;}      .truste-close {font-family: "TextaLight",Arial,sans-serif;    font-size: 12px;    color: #222427;    background: #eedc00;    border: none;    text-decoration: none;    cursor: pointer;    padding: 10px 15px;    border: 0px none;    text-transform: uppercase;    border-radius: 5px;    letter-spacing: .5px;    float: right;    margin: 50px 10px;    white-space: nowrap;}    .truste-close:hover {    background: #ffec00;    color: #222427;  }    .truste-cookie-link {      color: #222427;      text-decoration: underline;      text-decoration-color: #e10600!important;      line-height: 40px;    }    .truste-cookie-link:hover {        text-decoration: underline;    text-decoration-color: #e10600!important;    color: #222427;    }    .truste-title {      font-size:18px;       color:#222427;       font-family: "TextaLight",Arial,sans-serif;      letter-spacing:0;       line-height: 40px;}      /* MOBILE ONLY */      @media screen and (min-width: 450px) and (max-width: 740px) {       .truste-close {  margin-right: 5px;    margin-bottom: -2px;    text-align: center;      font-family: "TextaLight",Arial,sans-serif;    color: #222427;    background-color: #ffec00;    text-decoration: none;    cursor: pointer;    margin: 0px 0px 0px 15px;    float: none;    clear: both;    display: inline-block;    }      .truste-text    { width: auto; display: block; vertical-align: middle; text-align: left;}        .truste-consent-content    {text-align:left;}      .truste-responsive .truste-buttontext     { margin-right:0px; }  }@media screen and (max-width: 480px) {  .truste-text {      float: left;      width: auto;  }  .truste-close {      float: left;      margin: 0px 0px 0px 15px;      text-align: left;  }}</style><div id="truste-consent-track" class="trustarc-banner truste-responsive" style="display:none;">    <div class="truste-consent-content">    <div id="truste-consent-text" class="truste-text">    <span class="truste-title">Poste Italiane dà valore alla tua privacy</span><br>      Poste Italiane utilizza cookie, inclusi cookie di profilazione, eventualmente anche di terze parti, al fine di assicurarti una migliore esperienza sul sito e di effettuare comunicazioni ed interazioni in linea con le tue preferenze. Puoi accettare questi cookie cliccando su &#34;Accetto&#34; oppure puoi impostare le tue preferenze cliccando su &#34;Maggiori informazioni&#34;.<br><a id="truste-show-consent" class="truste-buttontext">Maggiori informazioni</a>    </div>    <div id="truste-consent-buttons">      <a id="truste-consent-button" class="truste-close" style="margin-right:15px; margin-bottom:15px">Accetto</a>      </div>    </div></div>';
              K = K.replace('&lt;i&gt;', '<i>')
                .replace('&lt;/i&gt;', '</i>')
                .replace('&lt;b&gt;', '<b>')
                .replace('&lt;/b&gt;', '</b>');
              if (!K || K.length < 15) {
                K =
                  '<div id="truste-consent-track" style="display:none; background-color:#000;"><div id="truste-consent-content" style="overflow: hidden; margin: 0 auto; max-width: 1000px"><div id="truste-consent-text" style="float:left; margin:15px 0 10px 10px; width:500px;"><h2 style="color: #fff; font-size: 16px; font-weight:bold; font-family:arial;">Some functionality on this site requires your consent for cookies to work properly.</h2><div id="truste-repop-msg" style="padding: 0px 0px 5px 0px;font-size: 12px;color: #F0C36D; display:none; font-family: arial,sans-serif;"></div></div><div id="truste-consent-buttons" style="float:right; margin:20px 10px 20px 0;"><button id="truste-consent-button" type=button style="padding:5px; margin-right:5px; font-size:12px;">I consent to cookies</button><button id="truste-show-consent" type=button style="padding:5px; margin-right:5px; font-size:12px;">I want more information</button></div></div></div>';
              }
              if (J.responsive === 'false') {
                K = K.replace(/(class=["'].*?)[\s]?truste-responsive(.*?["'])/g, '$1$2');
              }
              if (n.insertAdjacentHTML) {
                n.insertAdjacentHTML('afterbegin', K);
              } else {
                n.innerHTML = K;
              }
            }
            function x (M) {
              var L =
                  (truste.util && truste.util.getJSON) ||
                  (truste.cma && truste.cma.cheapJSON) ||
                  window.JSON.stringify,
                K = {
                  source: 'preference_manager',
                  message: M,
                  data: { useNonStandardStacks: false, consentScreen: 1 },
                };
              window.postMessage && window.postMessage(L(K), '*');
            }
            function H () {
              k(C);
              truste.eu.ccpa.dropCcpaCookie(false);
            }
            function y () {
              var K = truste.eu.bindMap;
              if (K && K.prefmgrUrl && J.gtm) {
                truste.bn.hide(document.getElementById(u));
                truste.util.callCMEndpoint(
                  '/defaultconsentmanager/getOptOutDomains?',
                  null,
                  function (M) {
                    var L = M.responseText;
                    if (L && truste.util.parseJSON(L)) {
                      truste.util.setStorage(truste.eu.COOKIE_CATEGORY_NAME, L, false);
                      k('0');
                    }
                  }
                );
              } else {
                if (truste.eu && truste.eu.clickListener) {
                  truste.eu.clickListener(3);
                }
              }
            }
            function k (K) {
              var O = truste.util.getLowestConsent(K);
              if (!isNaN((O = parseInt(O))) && truste.eu && truste.eu.actmessage) {
                var M =
                    (truste.util && truste.util.getJSON) ||
                    (truste.cma && truste.cma.cheapJSON) ||
                    window.JSON.stringify,
                  L = {
                    source: 'preference_manager',
                    message: 'submit_preferences',
                    data: { value: K },
                  };
                truste.eu.actmessage(L);
                if (window.PREF_MGR_API_DEBUG) {
                  PREF_MGR_API_DEBUG.authorities.push(window.location.hostname);
                }
                window.postMessage && window.postMessage(M(L), '*');
                var N = truste.eu.bindMap;
                if (N && N.prefmgrUrl && !N.feat.ccpaApplies) {
                  truste.util.callCMEndpoint(
                    '/defaultconsentmanager/optin?',
                    O,
                    function () {},
                    true
                  );
                }
                D('selection');
                if (typeof __cmp !== 'undefined' && K == C) {
                  __cmp('consentAll', null, function (P) {});
                }
              } else {
                D('done');
              }
            }
            function s () {
              var K = {
                consentButton: 'truste-consent-button',
                footerCallback: 'truste-show-consent',
                cookieButton: 'truste-cookie-button',
                privacyButton: 'truste-privacy-button',
                bannerHolder: u,
                closeBanner: 'truste-consent-close',
                repopDiv: 'truste-repop-msg',
                requiredButton: 'truste-consent-required',
                ccpaOptoutButton: 'truste-ccpa-optout',
                ccpaOptedIn: 'ccpa-opted-in',
                ccpaOptedOut: 'ccpa-opted-out',
                ccpaNoPreference: 'ccpa-no-preference',
                iabPartnersLink: 'iab-partners-link',
                secondIabPartnersLink: 'iab-second-partners-link',
              };
              var R = truste.eu.bindMap;
              if (R.feat.isReconsentEvent && R.popupMsg.length > 0) {
                var T = document.getElementById(K.repopDiv);
                if (T) {
                  T.innerHTML = R.popupMsg;
                  truste.bn.show(T);
                }
              }
              var Q = document.getElementById(K.consentButton);
              if (Q) {
                var M = new RegExp(C.replace(/,/g, '.'));
                if (!J.gtm && !R.feat.enableCCPA && R.feat.isRepopEvent && !M.test(R.prefCookie)) {
                  Q.style.display = 'none';
                } else {
                  Q.onclick = function () {
                    truste.bn.msglog('accepts', b.bannerMsgURL);
                    if (b.feat.iabBannerApplies) {
                      x('process_iab_accept_all');
                    }
                    if (
                      (R.feat.enableCCPA || R.feat.isReconsentEvent) &&
                      R.feat.enableTwoStepVerification &&
                      R.prefCookie &&
                      !R.prefCookie.includes('-1') &&
                      !M.test(R.prefCookie)
                    ) {
                      if (truste.eu && truste.eu.clickListener) {
                        truste.eu.clickListener(6);
                      }
                    } else {
                      H();
                    }
                  };
                }
              }
              Q = document.getElementById(K.footerCallback);
              if (Q) {
                Q.onclick = function () {
                  truste.bn.msglog('moreinfo', b.bannerMsgURL);
                  if (truste.eu && truste.eu.clickListener) {
                    if (b.feat.iabBannerApplies) {
                      truste.eu.clickListener(4);
                    } else {
                      truste.eu.clickListener(parseInt(J.pn) || 0);
                    }
                    R.returnFocusTo = K.footerCallback.replace('#', '');
                  }
                };
              }
              Q = document.getElementById(K.requiredButton);
              if (Q) {
                Q.onclick = function () {
                  truste.bn.msglog('requiredonly', b.bannerMsgURL);
                  if (b.feat.iabBannerApplies) {
                    x('process_iab_reject_all');
                  }
                  y();
                };
              }
              Q = document.getElementById(K.ccpaOptoutButton);
              if (Q) {
                Q.onclick = function () {
                  truste.bn.msglog('requiredonly', b.bannerMsgURL);
                  k('0');
                  truste.eu.ccpa.dropCcpaCookie(true);
                };
              }
              Q = document.getElementById(K.cookieButton);
              if (Q) {
                Q.onclick = function (U) {
                  truste.bn.msglog('cookiepolicy', b.bannerMsgURL);
                  if (J.cookieLink) {
                    U.preventDefault();
                    window.open(J.cookieLink);
                  }
                };
              }
              Q = document.getElementById(K.privacyButton);
              if (Q) {
                Q.onclick = function (U) {
                  if (J.privacypolicylink) {
                    U.preventDefault();
                    window.open(J.privacypolicylink);
                  }
                };
              }
              Q = document.getElementById(K.closeBanner);
              if (Q) {
                Q.onclick = function () {
                  D('done');
                };
              }
              Q = document.getElementById(K.iabPartnersLink);
              if (Q) {
                Q.onclick = function () {
                  truste.eu.clickListener(5);
                  R.returnFocusTo = K.iabPartnersLink.replace('#', '');
                };
                Q.onkeyup = function (U) {
                  if (U.keyCode == 13) {
                    truste.eu.clickListener(5);
                    R.returnFocusTo = K.iabPartnersLink.replace('#', '');
                  }
                };
              }
              Q = document.getElementById(K.secondIabPartnersLink);
              if (Q) {
                Q.onclick = function () {
                  truste.eu.clickListener(5);
                  R.returnFocusTo = K.secondIabPartnersLink.replace('#', '');
                };
                Q.onkeyup = function (U) {
                  if (U.keyCode == 13) {
                    truste.eu.clickListener(5);
                    R.returnFocusTo = K.secondIabPartnersLink.replace('#', '');
                  }
                };
              }
              if (R.feat.ccpaApplies) {
                var N = truste.eu.ccpa.getOptout();
                var S = document.getElementById(K.ccpaOptedOut);
                var P = document.getElementById(K.ccpaOptedIn);
                var L = document.getElementById(K.ccpaNoPreference);
                if (N && R.prefCookie) {
                  var O = /^[yY]$/;
                  if (O.test(N)) {
                    S && truste.bn.show(S);
                    P && truste.bn.hide(P);
                    L && truste.bn.hide(L);
                  } else {
                    S && truste.bn.hide(S);
                    P && truste.bn.show(P);
                    L && truste.bn.hide(L);
                  }
                } else {
                  S && truste.bn.hide(S);
                  P && truste.bn.hide(P);
                  L && truste.bn.show(L);
                }
              }
              parseInt(J.fade) &&
                setTimeout(function () {
                  k(J.sl);
                }, parseInt(J.fade));
              D('open');
            }
            function p (K) {
              var L;
              try {
                L = K && K.data && JSON && JSON.parse(K.data);
              } catch (M) {
                return null;
              }
              if (L && L.source == 'preference_manager' && L.message == 'submit_preferences') {
                D('done');
              }
            }
            function w () {
              if (J.oc) {
                truste.bn.addEvent(document, 'click', q);
              }
              if (J.px) {
                truste.bn.addEvent(document, 'scroll', r);
              }
            }
            function F () {
              truste.bn.show(document.getElementById(u));
              truste.bn.msglog('views', b.bannerMsgURL);
            }
            function A () {
              D('done');
              truste.bn.msglog('returns', b.bannerMsgURL);
            }
            function m (K) {
              return K && truste.bn.isVisible(K) && !document.getElementById(truste.eu.popdiv2);
            }
            function q (L) {
              var K = document.getElementById(u);
              if (m(K) && !K.contains(L.target) && L.target.id !== truste.eu.popclose) {
                k(C);
              }
            }
            function r (L) {
              var K = document.getElementById(u);
              if (
                m(K) &&
                (document.scrollingElement.scrollTop || document.documentElement.scrollTop) >= J.px
              ) {
                k(C);
              }
            }
            truste.bn.reopenBanner = function () {
              if (n) {
                D.done = 0;
                w();
                s();
                truste.bn.show(document.getElementById(u));
              }
            };
            truste.bn.twoStepConfirmed = function () {
              k(C);
              truste.eu.ccpa.dropCcpaCookie(false);
            };
            truste.bn.twoStepDeclined = function () {
              D('done');
            };
          }.apply(this, arguments);
        } finally {
          if ($___old_d9d09ac408328bbd)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_d9d09ac408328bbd
            ));
        }
      }
    })();
  })();
}
