{
  const $___stub_addd751f0eb655f8 = {};
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
  })($___stub_addd751f0eb655f8);
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
  const $___stub_9417959baab2caf0 = {};
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
  })($___stub_9417959baab2caf0);
  (function () {
    (function () {
      if (!Object.keys) {
        Object.keys = (function () {
          var aF = Object.prototype.hasOwnProperty,
            aE = !{ toString: null }.propertyIsEnumerable('toString'),
            aC = [
              'toString',
              'toLocaleString',
              'valueOf',
              'hasOwnProperty',
              'isPrototypeOf',
              'propertyIsEnumerable',
              'constructor',
            ],
            aD = aC.length;
          return function (aH) {
            if (typeof aH !== 'function' && (typeof aH !== 'object' || aH === null)) {
              throw new TypeError('Object.keys called on non-object');
            }
            var aJ = [],
              aI,
              aG;
            for (aI in aH) {
              if (aF.call(aH, aI)) {
                aJ.push(aI);
              }
            }
            if (aE) {
              for (aG = 0; aG < aD; aG++) {
                if (aF.call(aH, aC[aG])) {
                  aJ.push(aC[aG]);
                }
              }
            }
            return aJ;
          };
        })();
      }
      if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = (function (aF, aD, aE) {
          return function aC (aJ, aG) {
            if (this === null || this === undefined) {
              throw TypeError('Array.prototype.indexOf called on null or undefined');
            }
            var aK = aF(this),
              aI = aK.length >>> 0,
              aH = aE(aG | 0, aI);
            if (aH < 0) {
              aH = aD(0, aI + aH);
            } else {
              if (aH >= aI) {
                return -1;
              }
            }
            if (aJ === void 0) {
              for (; aH !== aI; ++aH) {
                if (aK[aH] === void 0 && aH in aK) {
                  return aH;
                }
              }
            } else {
              if (aJ !== aJ) {
                for (; aH !== aI; ++aH) {
                  if (aK[aH] !== aK[aH]) {
                    return aH;
                  }
                }
              } else {
                for (; aH !== aI; ++aH) {
                  if (aK[aH] === aJ) {
                    return aH;
                  }
                }
              }
            }
            return -1;
          };
        })(Object, Math.max, Math.min);
      }
      if (!Array.isArray) {
        Array.isArray = function (aC) {
          return Object.prototype.toString.call(aC) === '[object Array]';
        };
      }
      if (!Array.prototype.filter) {
        Array.prototype.filter = function (aD, aJ) {
          if (!((typeof aD === 'Function' || typeof aD === 'function') && this)) {
            throw new TypeError();
          }
          var aG = this.length >>> 0,
            aH = new Array(aG),
            aI = this,
            aC = 0,
            aE = -1;
          var aF;
          if (aJ === undefined) {
            while (++aE !== aG) {
              if (aE in this) {
                aF = aI[aE];
                if (aD(aI[aE], aE, aI)) {
                  aH[aC++] = aF;
                }
              }
            }
          } else {
            while (++aE !== aG) {
              if (aE in this) {
                aF = aI[aE];
                if (aD.call(aJ, aI[aE], aE, aI)) {
                  aH[aC++] = aF;
                }
              }
            }
          }
          aH.length = aC;
          return aH;
        };
      }
      if (!Object.isEmpty) {
        Object.isEmpty = function (aD) {
          if (!aD) {
            return true;
          } else {
            for (var aC in aD) {
              if (aD.hasOwnProperty(aC)) {
                return false;
              }
            }
            return true;
          }
        };
      }
      var v = '//c.evidon.com',
        ax = v + '/sitenotice/',
        y = ax + window.evidon.id,
        a = { LINK: 1, BUTTON: 2 },
        E = 1,
        C = 2,
        D = 3,
        at = { CCPA: 1, GDPR: 2 },
        aq = 1,
        ar = 2,
        S = 1,
        R = 2,
        T = 3,
        z = '_evidon_consent_cookie',
        A = '_evidon_consent_ls_',
        az = '_evidon_suppress_notification_cookie',
        am = '//l.evidon.com/site/v3/',
        aj = 'https://optoutapi.evidon.com/site/',
        W = 'https://l3.evidon.com/site/',
        H = 'https://l3.evidon.com/dataRequest/',
        aB = 'vendorlist.js',
        k = 'evidon-banner.js',
        l = 'evidon-barrier.js',
        Q = 'evidon-gdpr-overlay.js',
        an = 'evidon-preferences-dialog.js',
        x = { 1: 'evidon-cmp.js', 2: 'evidon-cmpv2.js' },
        w = 'https://iabmap.evidon.com/iabevidonmapping.js',
        s = 1,
        N = 2,
        K = 3,
        O = 4,
        ak = '_evidon-overlay',
        V = '_evidon-l3',
        av = 30,
        aA = 'evidonConsentGiven',
        q = '_evh-button',
        ac = '_evh-link',
        ai = '_evh-newvendor-indicator',
        u = '_evidon-button-text',
        af = '_evidon-link-text',
        ab = 'evidon-notice-link',
        ag = 800;
      var Y = 'evidon-consent-link',
        ae = 'evidon-consent-link-text',
        ad = 'evidon-consent-link-image',
        n = 'evidon-consent-button',
        t = 'evidon-consent-button-text',
        r = 'evidon-consent-button-image';
      var au = 1,
        ao = 17,
        aw = 20,
        al = 21,
        ah = 22,
        j = 26,
        U = 6,
        P = 7,
        F = 23;
      var aa = 2,
        p = 3,
        Z = 15,
        o = 16;
      var I = '{company}',
        B = '{consentToolUrl}',
        ap = '{privacyPolicy}',
        G = '{cookiePolicy}';
      var d = 'adobe-marketing-cloud-audience-manager',
        c = 'adobe-marketing-cloud-analytics',
        f = 'adobe-experience-platform',
        h = 'adobe-marketing-cloud-target',
        i = 'adobe-video-analytics',
        b = 'adobe-marketing-cloud-media-optimizer-formerly-adlens',
        g = 'livefyre',
        e = 'adobe-marketing-cloud-campaign';
      var M = {
        BANNER_SCRIPT: 'fallback-banner.js',
        BARRIER_SCRIPT: 'fallback-barrier.js',
        L2_SCRIPT: 'fallback-gdpr-overlay.js',
      };
      var L = [3247];
      var m = function () {
        var aE = null,
          aC = false,
          aF = false,
          aD = false,
          aI = this;
        function aG () {
          window.evidon.notice.dropPixel(o);
          window.evidon.notice.showOptions(null);
          if (aD) {
            window.evidon.notice._updateConsentedVendors();
            aI.hideNewVendorIndicator();
          }
        }
        function aH () {
          if (aC || !aE) {
            return;
          }
          var aK = document,
            aR = window.evidon.notice.isMobile(),
            aJ = aK.createElement('div');
          aJ.id = q;
          aJ.className = n;
          aJ.innerHTML =
            '<style> @media print {#_evh-ric,#_evh-link { display:none !important; } } </style>';
          aJ.tabIndex = 0;
          aJ.setAttribute('aria-label', 'Privacy options button');
          aJ.setAttribute('role', 'button');
          var aU = aR ? aE.mobileButtonStyle : aE.buttonStyle;
          var aS = aK.createElement('a');
          aS.id = ac;
          aS.style.cssText = aU;
          var aV = aR ? aE.mobileShowIcon : aE.showIcon;
          if (aV) {
            var aO = aK.createElement('img');
            aO.src = aE.buttonIcon;
            aO.className = r;
            aO.alt = 'AdChoices Icon';
            var aX = 'border:0;display:inline;vertical-align:middle;margin-right:10px;';
            var aM = window.evidon.notice._getStyleValue(aE.buttonStyle, 'height');
            if (aM) {
              var aL = parseFloat(aM);
              var a0 = aM.replace(aL, '');
              aL = parseInt(aL * 0.6, 10);
              aX += 'height:' + aL + a0 + ';';
            }
            aO.style.cssText = aX;
            aS.appendChild(aO);
          }
          var aW = aR ? aE.mobileShowText : aE.showText;
          if (aW) {
            var aY = aK.createElement('span');
            aY.id = u;
            aY.className = t;
            aY.style.cssText = 'vertical-align:middle !important;';
            aS.appendChild(aY);
          }
          aS.onclick = aG;
          aS.onkeyup = function (a2) {
            if (a2.keyCode === 13) {
              aS.onclick();
            }
          };
          aS.tabIndex = 0;
          var aT = window.evidon.notice._parseCss(aU);
          var aN = aT.left === undefined ? 'left' : 'right';
          var a1 = aT.top === undefined ? 'top' : 'bottom';
          var aQ =
            'display: none; position: absolute;' +
            aN +
            ':-10px;' +
            a1 +
            ':-10px;width: 23px; height: 23px;';
          var aP = document.createElement('img');
          aP.id = ai;
          aP.src = '//c.evidon.com/sitenotice/images/evidon-change-alert.png';
          aP.alt = 'New vendors have been added to this site';
          aP.style.cssText = aQ;
          aS.appendChild(aP);
          aJ.appendChild(aS);
          document.body.appendChild(aJ);
          var aZ = window.evidon.notice.getTranslations();
          if (aZ) {
            aI.setButtonText(aZ);
          }
          if (aR) {
            aI.scaleForMobile();
          }
          aC = true;
        }
        window.onbeforeprint = function () {
          var aJ = document.getElementById(q);
          if (aJ) {
            aJ.style.display = 'none';
          }
        };
        window.onafterprint = function () {
          var aJ = document.getElementById(q);
          if (aJ) {
            aJ.style.display = '';
          }
        };
        this.scaleForMobile = function () {
          if (window.innerHeight < ag && window.innerWidth < ag) {
            return;
          }
          var aJ = document.getElementById(q),
            aK = Math.max(window.innerWidth / screen.width, window.innerHeight / screen.height);
          if (aJ && aJ.style.zoom !== undefined) {
            aJ.style.cssText += 'zoom: ' + (aK <= 2 ? aK : 2) + '!important;';
          }
        };
        this.setButtonText = function (aN) {
          if (!aN) {
            return;
          }
          var aM = window.evidon.notice;
          aM.dropPixel(p);
          var aK = window.evidon.notice.isMobile();
          if (aC) {
            var aJ = document.getElementById(u);
            var aL = aM.isCCPA()
              ? aK
                ? aN.mobileDoNotSell
                : aN.doNotSell
              : aK
              ? aN.mobileButtonText
              : aN.buttonText;
            if (aJ) {
              aJ.innerHTML = aL;
              aF = true;
            }
          }
        };
        this.createButton = function (aJ) {
          if (!aJ) {
            aE = window.evidon.notice.getButtonStyle();
          } else {
            aE = aJ;
          }
          if (aE) {
            aH();
          }
        };
        this.showNewVendorIndicator = function () {
          var aJ = document.getElementById(ai);
          if (!aJ) {
            return;
          }
          aJ.style.display = '';
          aD = true;
        };
        this.hideNewVendorIndicator = function () {
          var aJ = document.getElementById(ai);
          if (!aJ) {
            return;
          }
          aJ.style.display = 'none';
          aD = false;
        };
      };
      var X = function () {
        var aD = null,
          aC = false,
          aG = this;
        function aE () {
          if (aC || !aD) {
            return;
          }
          var aJ = document,
            aM = window.evidon.notice.isMobile(),
            aN = aJ.createElement('a');
          aN.href = '#';
          aN.className = Y;
          aN.tabIndex = 0;
          var aO = aJ.createElement('span');
          aO.id = af;
          aO.className = ae;
          if (aM && aD.mobileShowIcon && aD.mobileLinkIcon) {
            var aL = aJ.createElement('img');
            aL.src = aD.mobileLinkIcon;
            aL.style.cssText = 'vertical-align:bottom;';
            aL.className = ad;
            aL.alt = 'AdChoices Icon';
            aN.appendChild(aL);
            aO.style.cssText = 'margin-left: 6px;';
          } else {
            if (!aM && aD.showIcon && aD.linkIcon) {
              var aL = aJ.createElement('img');
              aL.src = aD.linkIcon;
              aL.className = ad;
              aL.style.cssText = 'vertical-align:bottom;';
              aL.alt = 'AdChoices Icon';
              aN.appendChild(aL);
              aO.style.cssText = 'margin-left: 6px;';
            }
          }
          aN.appendChild(aO);
          if (aM) {
            aN.style.cssText = aD.mobileLinkStyle;
          } else {
            aN.style.cssText = aD.linkStyle;
          }
          var aI = [];
          if (aJ.getElementsByClassName !== undefined) {
            aI = aJ.getElementsByClassName(ab);
          } else {
            aI = aJ.querySelectorAll('.' + ab);
          }
          if (aI.length === 0) {
            console.log('Evidon -- ' + ab + ' not found on page, cant display the consent link.');
          }
          for (var aK = 0; aK < aI.length; aK++) {
            var aH = aN.cloneNode(true);
            aH.onclick = aF;
            aI[aK].appendChild(aH);
          }
          aC = true;
          var aP = window.evidon.notice.getTranslations();
          if (aP) {
            aG.setLinkText(aP);
          }
        }
        function aF (aH) {
          if (aH.stopPropagation) {
            aH.stopPropagation();
          }
          window.evidon.notice.dropPixel(Z);
          window.evidon.notice.showOptions(null);
        }
        this.setLinkText = function (aN) {
          if (!aC || !aN) {
            return;
          }
          var aM = window.evidon.notice;
          aM.dropPixel(aa);
          var aJ = window.evidon.notice.isMobile();
          var aK = null,
            aH = document,
            aL = aM.isCCPA()
              ? aJ
                ? aN.mobileDoNotSell
                : aN.doNotSell
              : aJ
              ? aN.mobileLinkText
              : aN.linkText;
          if (aH.getElementsByClassName !== undefined) {
            aK = aH.getElementsByClassName(ae);
          } else {
            aK = aH.querySelectorAll('.' + ae);
          }
          if (aL) {
            for (var aI = 0; aI < aK.length; aI++) {
              aK[aI].innerText = aL;
            }
          }
        };
        this.createLink = function (aH) {
          if (aH) {
            aD = aH;
          } else {
            aD = window.evidon.notice.getLinkStyle();
          }
          if (!aD) {
            return;
          }
          aE();
        };
      };
      var ay = function () {
        this.translations = {};
        this.country = null;
        this.themes = null;
        this.languageCode = null;
        this.languageRoot = null;
        this.companyId = window.evidon.id;
        this.activeTranslations = null;
        this.activeTranslationId = 0;
        this.settings = null;
        this.domain = null;
        this.path = null;
        (this.activeSettings = null),
          (this.regulationId = 0),
          (this.regulationConsentTypeId = 0),
          (this.consentTypeId = 0),
          (this.privacyAccessTypeId = 0),
          (this.consentRequired = false),
          (this.consentDuration = 13),
          (this.consentIsGiven = false),
          (this.L2Enabled = false),
          (this.gdprEnabled = false),
          (this.dataRightsType = 0),
          (this.rightsLink = ''),
          (this.closeConsentEnabled = false),
          (this.scrollConsentEnabled = false),
          (this.pageclickConsentEnabled = false),
          (this.navigationConsentEnabled = false);
        this.activeVendorId = -1;
        this.activeDomain = null;
        this.pixelsDropped = [];
        this.scriptsLoaded = [];
        this.tagManagerEventFired = false;
        this.consentCallbackExecuted = false;
        this.closeCallbackExecuted = false;
        this.declineCallbackExecuted = false;
        this.navigationStack = [];
        this.blockDomainCheck = false;
        this.shouldSupportAmp = false;
        this.customerUserId =
          typeof window.evidon.userid !== 'undefined' ? window.evidon.userid : null;
        this.vendorList = null;
        this.shouldCallCMP = true;
        this.optOutDetails = null;
        this.PREFDIAG_TABS = {
          IAB: 'iab',
          PURPOSES: 'purposes',
          VENDORS: 'vendors',
          DONOTSELL: 'do-not-sell',
        };
        var aG = this;
        this._getAttributeValue = function (aM, aO) {
          var aL = aM.attributes,
            aP = null;
          for (var aN = 0; aN < aL.length; aN++) {
            if (aL[aN].localName == aO) {
              aP = aL[aN].value;
              break;
            }
          }
          return aP;
        };
        this._trackScrolling = function () {
          if (!aG.scrollConsentEnabled) {
            return;
          } else {
            var aL =
              window.pageYOffset ||
              (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if (aL === 0 || aL > av) {
              aG.consentGiven(true);
              aG.dropPixel(aw);
            }
          }
        };
        this._trackClicking = function (aL) {
          if (!aG.pageclickConsentEnabled) {
            return;
          }
          if (!aL || !aL.target) {
            return;
          }
          if (!window.evidon.banner) {
            return;
          }
          if (window.evidon.banner.isOnBanner(aL.target)) {
            return;
          }
          if (window.evidon.gdprL2 && window.evidon.gdprL2.isOnBanner(aL.target)) {
            return;
          }
          aG.consentGiven(true);
          aG.dropPixel(al);
        };
        this._hookConsentEvents = function () {
          if (document.readyState == 'complete') {
            if (aG.regulationConsentTypeId === aq) {
              setTimeout(function () {
                if (window.addEventListener) {
                  window.addEventListener('scroll', aG._trackScrolling, false);
                  window.addEventListener('click', aG._trackClicking, false);
                } else {
                  window.attachEvent('onscroll', aG._trackScrolling);
                  window.attachEvent('onclick', aG._trackClicking);
                }
              }, 500);
            }
          } else {
            if (window.addEventListener) {
              window.addEventListener('load', aG._hookConsentEvents, false);
            } else {
              window.attachEvent('onload', aG._hookConsentEvents);
            }
          }
        };
        this._detachEventTracking = function () {
          aG.pageclickConsentEnabled = false;
          aG.scrollConsentEnabled = false;
          try {
            if (window.removeEventListener !== undefined) {
              window.removeEventListener('click', aG._trackClicking, false);
            } else {
              window.detachEvent('onclick', aG._trackClicking, false);
            }
            if (window.removeEventListener !== undefined) {
              window.removeEventListener('scroll', aG._trackScrolling, false);
            } else {
              window.detachEvent('onscroll', aG._trackScrolling, false);
            }
          } catch (aL) {}
        };
        if (window.addEventListener) {
          window.addEventListener('resize', function () {
            aG.showNotice();
          });
        } else {
          window.attachEvent('onresize', function () {
            aG.showNotice();
          });
        }
        this._isDomReady = function () {
          if (document.readyState == 'loading') {
            console.log('dom not ready, setting event');
            document.addEventListener(
              'DOMContentLoaded',
              function () {
                console.log('dom ready, triggering load');
                try {
                  document.removeEventListener('DOMContentLoaded');
                } catch (aL) {}
                aG.showNotice();
              },
              false
            );
            return false;
          } else {
            return true;
          }
        };
        var aJ = document.getElementById('evidon-notice');
        if (aJ) {
          var aK = aJ.src;
          var aI = aK.indexOf('.com');
          if (aI !== -1) {
            aK = aK.substr(0, aI + 4);
            v = aK;
            ax = v + '/sitenotice/';
            y = ax + window.evidon.id;
          }
          var aC = this._getAttributeValue(aJ, 'data-options');
          if (aC) {
            if (aC.indexOf('block-domain-check') > -1) {
              this.blockDomainCheck = true;
            }
            if (aC.indexOf('amp-support') > -1) {
              this.shouldSupportAmp = true;
            }
          }
        }
        var aF =
          window.navigator.languages && window.navigator.languages.length > 0
            ? window.navigator.languages[0]
            : window.navigator.userLanguage || window.navigator.language;
        if (aF) {
          this.activateTranslations(aF.toLowerCase());
        }
        if (!this.blockDomainCheck) {
          this.setDomain(null, true);
        }
        if (this._isConsentGiven() && this.activeSettings && this.vendorList) {
          if (!this.consentRequired) {
            this._runNoConsentFlow();
          } else {
            if (this.regulationConsentTypeId === aq) {
              this._runOptInFlow();
            } else {
              if (this.regulationConsentTypeId === ar) {
                this._runOptOutFlow();
              }
            }
          }
        }
        var aE = window.addEventListener ? 'addEventListener' : 'attachEvent';
        var aD = window[aE];
        var aH = aE == 'attachEvent' ? 'onmessage' : 'message';
        aD(
          aH,
          function (aM) {
            var aN = aM.message ? 'message' : 'data';
            var aL = aM[aN];
            if (aL == 'acceptclicked') {
              aG._closeL3();
            }
          },
          false
        );
      };
      ay.prototype._parseCss = function (aG) {
        var aE = aG.split(';');
        var aH = {};
        for (var aC = 0; aC < aE.length; aC++) {
          var aD = aE[aC].split(':');
          if (aD.length !== 2) {
            continue;
          }
          var aF = aD[0].trim();
          var aI = aD[1].trim();
          aH[aF] = aI;
        }
        return aH;
      };
      ay.prototype._joinCss = function (aE) {
        var aC = [];
        for (var aD in aE) {
          aC.push(aD + ':' + aE[aD]);
        }
        return aC.join(';') + ';';
      };
      ay.prototype._getStyleValue = function (aE, aC) {
        var aD = this._parseCss(aE);
        if (aD && aD.hasOwnProperty(aC)) {
          return aD[aC];
        }
        return null;
      };
      ay.prototype._fixurl = function (aC) {
        if (typeof aC === 'undefined' || !aC) {
          return aC;
        }
        if (aC.indexOf('http') === 0) {
          return aC;
        } else {
          if (aC.indexOf('//') === 0) {
            return aC;
          } else {
            return '//' + aC;
          }
        }
      };
      ay.prototype._isScriptLoaded = function (aD) {
        for (var aC = 0; aC < this.scriptsLoaded.length; aC++) {
          if (this.scriptsLoaded[aC] == aD) {
            return true;
          }
        }
        return false;
      };
      ay.prototype._getRootDomain = function (aC) {
        var aF = aC;
        var aE = aF.split('.');
        if (aE.length === 2) {
          aF = aE[0];
        } else {
          if (aE.length >= 3) {
            var aD = aE[aE.length - 2];
            if (this._isTwoPartTLD(aD)) {
              aF = aE[aE.length - 3];
            } else {
              aF = aD;
            }
          }
        }
        return aF;
      };
      ay.prototype._isConsentRequired = function (aC) {
        if (aC.hasOwnProperty('regulationConsentTypeId')) {
          return aC.regulationConsentTypeId !== 0;
        } else {
          if (aC.hasOwnProperty('consentRequired')) {
            return aC.consentRequired;
          } else {
            return aC.duration > 0;
          }
        }
      };
      ay.prototype._loadSettings = function (aE) {
        this.iabEnabled = typeof aE.iabEnabled === 'undefined' ? true : aE.iabEnabled;
        if (window.__cmp) {
          this.iabVersion = 1;
        } else {
          if (window.__tcfapi) {
            this.iabVersion = 2;
          } else {
            this.iabVersion = 2;
          }
        }
        this.consentTypeId = aE.consentid;
        this.privacyAccessTypeId = aE.accessid;
        this.consentRequired = this._isConsentRequired(aE);
        this.consentDuration = aE.duration;
        this.L2Enabled = typeof aE.l2enabled === 'undefined' ? false : aE.l2enabled;
        this.gdprEnabled = typeof aE.gdprEnabled === 'undefined' ? false : aE.gdprEnabled;
        this.displayDsarInFrame =
          typeof aE.displayDsarInFrame === 'undefined' ? false : aE.displayDsarInFrame;
        this.adChoicesEnabled =
          typeof aE.adChoicesEnabled === 'undefined' ? true : aE.adChoicesEnabled == 1;
        this.closeConsentEnabled =
          typeof aE.closeConsentEnabled === 'undefined' ? true : aE.closeConsentEnabled;
        this.regulationId =
          typeof aE.regulationId === 'undefined'
            ? this.gdprEnabled
              ? at.GDPR
              : 0
            : aE.regulationId;
        this.regulationConsentTypeId =
          typeof aE.regulationConsentTypeId === 'undefined' ? aq : aE.regulationConsentTypeId;
        this.scrollConsentEnabled = false;
        this.navigationConsentEnabled = false;
        this.pageclickConsentEnabled = false;
        var aC = typeof aE.consentactions === 'undefined' ? '' : aE.consentactions;
        if (aC && this.consentRequired) {
          this.scrollConsentEnabled = aC.indexOf('s') !== -1;
          this.navigationConsentEnabled = aC.indexOf('n') !== -1;
          this.pageclickConsentEnabled = aC.indexOf('p') !== -1;
        }
        var aD = typeof aE.consentDetailLevel === 'undefined' ? 'cv' : aE.consentDetailLevel;
        this.consentDetailCategories = aD.indexOf('c') > -1;
        this.consentDetailVendors = aD.indexOf('v') > -1;
        this.privacypolicylink = this.getPrivacyPolicyLink();
        this.privacyPolicyEnabled =
          typeof aE.privacyPolicyEnabled === 'undefined'
            ? this.privacypolicylink !== '#'
            : aE.privacyPolicyEnabled;
        this.venodrDisplayEnabled =
          typeof aE.vendorDisplayEnabled === 'undefined' ? true : aE.vendorDisplayEnabled;
        this.dnsEnabled = typeof aE.dnsEnabled === 'undefined' ? this.isCCPA() : aE.dnsEnabled;
        this.displayDnsInFrame =
          typeof aE.displayDnsInFrame === 'undefined' ? false : aE.displayDnsInFrame;
        this.enableAcceptButton =
          typeof aE.enableAcceptButton === 'undefined' ? null : aE.enableAcceptButton;
        this.enableDeclineButton =
          typeof aE.enableDeclineButton === 'undefined' ? null : aE.enableDeclineButton;
        this.enableOptionsButton =
          typeof aE.enableOptionsButton === 'undefined' ? null : aE.enableOptionsButton;
        this.cookiePolicyEnabled =
          typeof aE.cookiePolicyEnabled === 'undefined' ? false : aE.cookiePolicyEnabled;
        this.cookiepolicylink = this.getCookiePolicyLink();
      };
      ay.prototype._isTwoPartTLD = function (aE) {
        var aD = ['co', 'com', 'info', 'web', 'info', 'gov', 'edu', 'biz', 'net', 'org'];
        var aC = [
          'uk',
          'us',
          'fr',
          'es',
          'de',
          'at',
          'au',
          'ae',
          'be',
          'br',
          'ca',
          'ch',
          'cn',
          'co',
          'cz',
          'dk',
          'eg',
          'eu',
          'fi',
          'gb',
          'gr',
          'hk',
          'hr',
          'hu',
          'ie',
          'in',
          'jp',
          'mx',
          'nl',
          'no',
          'nz',
          'pl',
          'ro',
          'ru',
          'se',
        ];
        return aD.indexOf(aE) !== -1 || aC.indexOf(aE) !== -1;
      };
      ay.prototype._getTLD = function (aC) {
        var aE = aC.split('.'),
          aF = '';
        if (aE && aE.length > 1) {
          aF = aE[aE.length - 1];
          if (aE.length >= 3) {
            var aD = aE[aE.length - 2];
            if (this._isTwoPartTLD(aD)) {
              aF = aD + '.' + aF;
            }
          }
        }
        return aF;
      };
      ay.prototype._createCloseIcon = function (aS, aK, aE, aP, aQ) {
        var aF = null,
          aG = document;
        var aR = this._parseCss(aS),
          aD = [],
          aT = ['stroke', 'stroke-width'];
        if (!aR.hasOwnProperty('z-index')) {
          aR['z-index'] = 100;
        }
        for (var aL in aR) {
          if (aT.indexOf(aL) === -1) {
            aD.push(aL + ':' + aR[aL]);
          }
        }
        if (typeof aP === 'undefined') {
          aP = '#333333';
        }
        aP = aR.hasOwnProperty('stroke') ? aR.stroke : aP;
        if (typeof aQ === 'undefined') {
          aQ = 2;
        }
        aQ = aR.hasOwnProperty('stroke-width') ? aR['stroke-width'] : aQ;
        aD.push('border:0');
        aD.push('padding:0');
        aD.push('background:transparent');
        if (typeof SVGRect !== 'undefined') {
          var aM = 'http://www.w3.org/2000/svg';
          aF = aG.createElementNS(aM, 'svg');
          aF.setAttribute('viewBox', '0 0 14 12');
          aF.setAttribute('version', '1.1');
          aF.setAttribute('xmlns', aM);
          aF.setAttribute('class', aE);
          aF.setAttributeNS(
            'http://www.w3.org/2000/xmlns/',
            'xmlns:xlink',
            'http://www.w3.org/1999/xlink'
          );
          aF.setAttribute('style', 'position:absolute; top:0; left:0;');
          var aH = aG.createElementNS(aM, 'g');
          aH.id = '__ghostery-close-icon-svg';
          aH.setAttribute('stroke', 'none');
          aH.setAttribute('fill', 'none');
          aH.setAttribute('fill-rule', 'evenodd');
          aH.setAttribute('stroke-linecap', 'square');
          var aI = aG.createElementNS(aM, 'g');
          aI.setAttribute('transform', 'translate(-1410.000000, -643.000000)');
          aI.setAttribute('stroke', aP);
          aI.setAttribute('stroke-width', aQ);
          var aJ = aG.createElementNS(aM, 'g');
          aJ.setAttribute('transform', 'translate(1411.000000, 643.000000)');
          var aN = aG.createElementNS(aM, 'path');
          aN.setAttribute('d', 'M0.5,0.5 L11.5679722,11.5679722');
          aN.setAttribute('stroke', aP);
          var aO = aG.createElementNS(aM, 'path');
          aO.setAttribute('d', 'M0.5,0.5 L11.5679722,11.5679722');
          aO.setAttribute(
            'transform',
            'translate(6.000000, 6.000000) scale(-1, 1) translate(-6.000000, -6.000000) '
          );
          aO.setAttribute('stroke', aP);
          aJ.appendChild(aN);
          aJ.appendChild(aO);
          aI.appendChild(aJ);
          aH.appendChild(aI);
          aF.appendChild(aH);
        } else {
          aF = aG.createElement('img');
          aF.style.cssText = aS;
          aF.src = '//c.evidon.com/pub/ric-close.png';
          aF.alt = 'close';
          aF.tabIndex = 0;
        }
        var aC = aG.createElement('button');
        aC.id = aK;
        aC.style.cssText = aD.join(';');
        aC.appendChild(aF);
        aC.onmouseover = function () {
          this.style.border = '1px solid ' + aP;
        };
        aC.onmouseout = function () {
          this.style.border = 0;
        };
        return aC;
      };
      ay.prototype.appendScript = function (aJ, aC) {
        var aF,
          aI = document.createElement('script'),
          aH = aE();
        function aE () {
          return (
            document.getElementsByTagName('script')[0] || document.getElementsByTagName('head')[0]
          );
        }
        function aG () {
          aI.onload = aI.onreadystatechange = null;
          aC();
        }
        if (this._isScriptLoaded(aJ)) {
          if (aC) {
            aC();
          }
        } else {
          aI.async = true;
          aI.src = aJ;
          aI.charset = 'utf-8';
          if (aC) {
            aI.onreadystatechange = function () {
              if (!aF && (this.readyState == 'loaded' || this.readyState == 'complete')) {
                aF = true;
                aG();
              }
            };
            aI.onload = aG;
          }
          try {
            aH.parentElement.insertBefore(aI, aH);
            this.scriptsLoaded.push(aJ);
          } catch (aD) {
            console.log(aD);
          }
        }
      };
      ay.prototype._getSettings = function () {
        var aM = this;
        if (!this.domain) {
          return null;
        }
        function aE (aY, aZ) {
          if (!aY || !aZ) {
            return false;
          } else {
            return aY.substr(aY.length - aZ.length) === aZ;
          }
        }
        function aG (aY) {
          var a2 = [];
          for (var aZ in aM.settings) {
            aZ = aZ.toLowerCase();
            var a0 = aZ.split('|')[0];
            if (!aE(a0, '/')) {
              a0 += '/';
            }
            var a1 = aY.toLowerCase();
            if (!aE(a1, '/')) {
              a1 += '/';
            }
            if (a0.indexOf(a1) === 0) {
              a2.push(aZ);
            }
          }
          return a2;
        }
        var aK = aG(this.domain),
          aR = aM._getRootDomain(aM.domain),
          aX = aM._getTLD(this.domain);
        var aV = aM.domain.substr(0, aM.domain.indexOf(aR)) + aR + '.*';
        aK = aK.concat(aG(aV));
        aK = aK.concat(aG(aR + '.' + aX));
        aK = aK.concat(aG(aR + '.*'));
        if (aK.length === 1) {
          aM.activeDomain = aK[0].split('|')[0];
          return this.settings[aK[0]];
        } else {
          if (aK.length > 1) {
            aK.sort(function (aY, aZ) {
              return aZ.length - aY.length;
            });
            var aI = aM.domain + this.path,
              aT = aR + '.' + aX + this.path,
              aP = [];
            for (var aH = 0; aH < aK.length; aH++) {
              var aJ = aK[aH];
              if (aJ.indexOf('|') !== -1) {
                aJ = aJ.substr(0, aJ.indexOf('|'));
              }
              if (aJ.indexOf('*') !== -1) {
                aJ = aJ.replace('*', aX);
              }
              if (aI.indexOf(aJ) !== -1) {
                aP.push(aK[aH]);
              }
            }
            if (aP.length === 0) {
              return null;
            } else {
              if (aP.length === 1) {
                aM.activeDomain = aP[0].split('|')[0];
                return aM.settings[aP[0]];
              } else {
                var aC = aM.country.id,
                  aW = null;
                var aF = [],
                  aU = [],
                  aL = 0,
                  aS = 0;
                if (!aE(aI, '/')) {
                  aI += '/';
                }
                if (!aE(aT, '/')) {
                  aT += '/';
                }
                for (var aH = 0; aH < aP.length; aH++) {
                  var aN = aP[aH];
                  var aO = aN.split('|')[0];
                  if (aO.indexOf('*') !== -1) {
                    aO = aO.replace('*', aX);
                  }
                  if (!aE(aO, '/')) {
                    aO += '/';
                  }
                  if (aI.indexOf(aO) === 0 && aO.length >= aL) {
                    aF.push(aN);
                    if (aL === 0) {
                      aL = aO.length;
                    }
                  } else {
                    if (aT.indexOf(aO) !== -1 && aO.length >= aS) {
                      aU.push(aN);
                      aS = aO.length;
                    }
                  }
                }
                if (aF.length === 0 && aU.length >= 0) {
                  if (aU.length === 1) {
                    aW = aM.settings[aU[0]];
                    aM.activeDomain = aU[0].split('|')[0];
                  } else {
                    aP = aU;
                  }
                } else {
                  if (aF.length === 1) {
                    aW = aM.settings[aF[0]];
                    aM.activeDomain = aF[0].split('|')[0];
                  } else {
                    if (aF.length > 1) {
                      aP = aF;
                    }
                  }
                }
                if (!aW) {
                  for (var aH = 0; aH < aP.length; aH++) {
                    if (aM.settings[aP[aH]].countries.hasOwnProperty(aC)) {
                      aW = aM.settings[aP[aH]];
                      aM.activeDomain = aP[aH].split('|')[0];
                      break;
                    }
                  }
                }
                if (!aW) {
                  var aD = 0;
                  for (var aH = 0; aH < aP.length; aH++) {
                    var aQ = aM.settings[aP[aH]];
                    if (aQ.hasOwnProperty('defaultCountry')) {
                      if (aQ.defaultCountry != 0) {
                        aD = aQ.defaultCountry;
                        break;
                      }
                    }
                  }
                  if (aD !== 0) {
                    for (var aH = 0; aH < aP.length; aH++) {
                      var aQ = aM.settings[aP[aH]];
                      if (aQ.countries.hasOwnProperty(aD)) {
                        aW = aQ;
                        aM.activeDomain = aP[aH].split('|')[0];
                      }
                    }
                  }
                }
                if (!aW) {
                  aW = aM.settings[aP[0]];
                  aM.activeDomain = aP[0].split('|')[0];
                }
                return aW;
              }
            }
          }
        }
        return null;
      };
      ay.prototype._getDefaultConsentCookieData = function (aC, aJ, aF) {
        var aI = this.activeSettings,
          aD = {},
          aL = {},
          aE = {};
        if (aC) {
          aD[this.activeCountryId] = aC;
        } else {
          aD[this.activeCountryId] = true;
        }
        if (aJ === true) {
          var aK = this.getActiveVendors();
          var aH = {};
          for (var aG = 0; aG < aK.length; aG++) {
            aH[aK[aG]] = true;
          }
          aL[this.activeCountryId] = aH;
        } else {
          if (typeof aJ === 'object') {
            aL[this.activeCountryId] = aJ;
          }
        }
        if (aF) {
          aE[this.activeCountryId] = aF;
        } else {
          aE[this.activeCountryId] = true;
        }
        return {
          consent_date: new Date().toISOString(),
          categories: aD,
          vendors: aL,
          cookies: aE,
        };
      };
      ay.prototype._getConsentCookieExpDate = function (aD) {
        var aC = aD ? new Date(aD) : new Date();
        var aE = this.consentDuration > 0 ? this.consentDuration : 12;
        aC.setMonth(aC.getMonth() + aE);
        return aC;
      };
      ay.prototype._getConsentCookieDomainPath = function () {
        var aD = '/';
        var aF = this.activeSettings;
        var aC = aF.hasOwnProperty('includeSubdomains') ? aF.includeSubdomains : 0;
        if (aC === 2) {
          aD = this.activeDomain;
          if (!aD) {
            console.error('Attempted to set a cookie without a valid settings object');
            return;
          }
          var aE = aD.indexOf('/');
          if (aE !== -1) {
            aD = aD.substring(aE);
          }
          aD = window.location.pathname.substr(0, aD.length);
        }
        return aD;
      };
      ay.prototype._getConsentCookieDomain = function () {
        var aD = this.activeSettings;
        var aC = aD.hasOwnProperty('includeSubdomains') ? aD.includeSubdomains : 0;
        if (aC === 1) {
          return '.' + this._getRootDomain(this.domain) + '.' + this._getTLD(this.domain);
        }
        return null;
      };
      ay.prototype._isConsentGiven = function () {
        var aC = this._getConsentCookie();
        return null !== aC;
      };
      ay.prototype._deleteConsentCookie = function () {
        var aC = this._getConsentCookieDomain();
        var aE = this._getConsentCookieDomainPath();
        var aD = new Date(1970, 1, 1);
        this._removeLocalStorageItem(A + this.activeSettings.id);
        this._writeCookie(z, '', aD.toUTCString(), aE, aC);
      };
      ay.prototype.getConsentData = function () {
        var aC = this._getConsentLocalStorage();
        if (!aC) {
          aC = this._getConsentCookie();
        }
        if (!aC) {
          aC = { name: null, value: null };
        }
        return aC;
      };
      ay.prototype._getConsentLocalStorage = function () {
        var aE = A + this.activeSettings.id;
        var aC = this._readLocalStorage(aE);
        if (aC) {
          try {
            aC = JSON.parse(aC);
          } catch (aD) {}
          return { name: aE, value: aC };
        } else {
          return aC;
        }
      };
      ay.prototype._getConsentCookie = function () {
        return this._getCookie(z);
      };
      ay.prototype._setConsentCookie = function (aK, aC, aL, aH, aD) {
        if (typeof aD === 'undefined' || aD === null) {
          aD = this.regulationConsentTypeId;
        }
        if (aD === 0) {
          aD = aq;
        }
        var aE = aD === ar ? {} : this._getDefaultConsentCookieData(aC, aL, aH);
        var aG = this._getConsentCookieExpDate(aK);
        var aJ = this._getConsentCookieDomainPath();
        var aF = this._getConsentCookieDomain();
        if (aK) {
          aE.consent_date = aK.toISOString();
        }
        aE.consent_type = aD;
        if (!aE.hasOwnProperty('consent_date')) {
          aE.consent_date = new Date();
        }
        var aI = this.activeSettings.hasOwnProperty('includeSubdomains')
          ? this.activeSettings.includeSubdomains
          : 0;
        if (aI != 1) {
          if (this._writeLocalStorage(A + this.activeSettings.id, JSON.stringify(aE))) {
            delete aE.categories;
            delete aE.vendors;
            delete aE.cookies;
          }
        }
        if (this._getSuppressionCookie()) {
          this.dropSuppressionCookie(-1);
        }
        if (!this._writeCookie(z, JSON.stringify(aE), aG.toUTCString(), aJ, aF)) {
          return false;
        }
        return aE;
      };
      ay.prototype._updateConsentData = function (aK, aI) {
        var aE = this.getConsentData().value;
        var aC = aE && aE.consent_date ? new Date(aE.consent_date) : new Date();
        var aD = aE && aE.consent_type ? aE.consent_type : aq;
        var aG = this._getConsentCookieExpDate(aC);
        var aJ = this._getConsentCookieDomainPath();
        var aF = this._getConsentCookieDomain();
        if (!aE) {
          aE = {};
        }
        if (!aE.hasOwnProperty(aK)) {
          aE[aK] = {};
        }
        aE[aK][this.activeCountryId] = aI;
        if (!aE.hasOwnProperty('consent_date')) {
          aE.consent_date = aC;
        }
        if (!aE.hasOwnProperty('consent_type')) {
          aE.consent_type = aD;
        }
        var aH = this.activeSettings.hasOwnProperty('includeSubdomains')
          ? this.activeSettings.includeSubdomains
          : 0;
        if (aH != 1) {
          if (this._writeLocalStorage(A + this.activeSettings.id, JSON.stringify(aE))) {
            delete aE.categories;
            delete aE.vendors;
            delete aE.cookies;
          }
        }
        this._writeCookie(z, JSON.stringify(aE), aG.toUTCString(), aJ, aF);
      };
      ay.prototype._updateConsentedCategories = function (aC) {
        if (this.consentDetailCategories) {
          this._updateConsentData('categories', aC);
        }
      };
      ay.prototype._updateConsentedCookies = function (aC) {
        this._updateConsentData('cookies', aC);
      };
      ay.prototype._updateConsentedVendors = function (aG) {
        var aE = this.getConsentData().value;
        if (!aE.hasOwnProperty('vendors')) {
          aE.vendors = {};
        }
        var aC = aE.vendors[this.activeCountryId];
        if (!aG) {
          var aD = this.getActiveVendors();
          aG = this._getNewVendors(aD, aC);
        }
        var aH = {};
        if (Array.isArray(aC)) {
          for (var aF = 0; aF < aC.length; aF++) {
            aH[aC[aF]] = true;
          }
        } else {
          if (typeof aC === 'object') {
            for (var aI in aC) {
              aH[aI] = aC[aI];
            }
          }
        }
        if (Array.isArray(aG)) {
          for (var aF = 0; aF < aG.length; aF++) {
            aH[aG[aF]] = true;
          }
        } else {
          if (typeof aG === 'object') {
            for (var aI in aG) {
              aH[aI] = aG[aI];
            }
          }
        }
        this._updateConsentData('vendors', aH);
      };
      ay.prototype._getSuppressionCookie = function () {
        return this._getCookie(az);
      };
      ay.prototype._createListFromItem = function (aD) {
        var aF = [];
        try {
          for (var aE in aD) {
            if (aD[aE] === true) {
              aF.push(aE.toLowerCase());
            }
          }
        } catch (aC) {}
        return aF.join();
      };
      ay.prototype._runAdobeOptIn = function (aD, aG) {
        if (window.adobe && window.adobe.optIn) {
          if (aD && aD.hasOwnProperty('all')) {
            adobe.optIn.approveAll();
          } else {
            var aC = [],
              aE = [];
            for (var aF in aG) {
              switch (aF) {
                case b:
                  if (aG[aF] === true) {
                    aC.push(adobe.OptInCategories.ADCLOUD);
                  } else {
                    aE.push(adobe.OptInCategories.ADCLOUD);
                  }
                  break;
                case c:
                  if (aG[aF] === true) {
                    aC.push(adobe.OptInCategories.ANALYTICS);
                  } else {
                    aE.push(adobe.OptInCategories.ANALYTICS);
                  }
                  break;
                case d:
                  if (aG[aF] === true) {
                    aC.push(adobe.OptInCategories.AAM);
                  } else {
                    aE.push(adobe.OptInCategories.AAM);
                  }
                  break;
                case e:
                  if (aG[aF] === true) {
                    aC.push(adobe.OptInCategories.CAMPAIGN);
                  } else {
                    aE.push(adobe.OptInCategories.CAMPAIGN);
                  }
                  break;
                case f:
                  if (aG[aF] === true) {
                    aC.push(adobe.OptInCategories.ECID);
                  } else {
                    aE.push(adobe.OptInCategories.ECID);
                  }
                  break;
                case g:
                  if (aG[aF] === true) {
                    aC.push(adobe.OptInCategories.LIVEFYRE);
                  } else {
                    aE.push(adobe.OptInCategories.LIVEFYRE);
                  }
                  break;
                case h:
                  if (aG[aF] === true) {
                    aC.push(adobe.OptInCategories.TARGET);
                  } else {
                    aE.push(adobe.OptInCategories.TARGET);
                  }
                  break;
                case i:
                  if (aG[aF] === true) {
                    aC.push(adobe.OptInCategories.VIDEO_ANALYTICS);
                  } else {
                    aE.push(adobe.OptInCategories.VIDEO_ANALYTICS);
                  }
                  break;
              }
            }
            if (aC.length > 0) {
              adobe.optIn.approve(aC);
            }
            if (aE.length > 0) {
              adobe.optIn.deny(aE);
            }
          }
        }
      };
      ay.prototype._triggerTagManagerEvent = function (aC, aI, aE) {
        if (this.tagManagerEventFired) {
          return;
        }
        var aH = aI ? this._createListFromItem(aI) : '';
        var aD = aC ? this._createListFromItem(aC) : '';
        try {
          var aF = window.dataLayer || [];
          aF.push({ event: aA, consentCategories: aD, consentVendors: aH });
        } catch (aG) {}
        try {
          if (window.utag) {
            window.utag.link({ event_name: aA, consent_categories: aD, consent_vendors: aH });
          }
        } catch (aG) {}
        try {
          if (window.tC) {
            tC.event[aA](this, { consent_categories: aD, consent_vendors: aH });
          }
        } catch (aG) {}
        this.tagManagerEventFired = true;
      };
      ay.prototype._getCategoriesReturnObject = function (aC) {
        var aD = {};
        if (typeof aC === 'undefined') {
          aC = this._getConsentedCategories() || {};
        }
        if (!aC) {
          aC = {};
        }
        if (aC === true || this.consentDetailCategories === false) {
          aD = { all: true };
        } else {
          aD = aC;
        }
        return aD;
      };
      ay.prototype._getVendorsReturnObject = function (aE) {
        if (this.consentDetailVendors === false) {
          return { all: true };
        }
        if (typeof aE === 'undefined') {
          aE = this._getConsentedVendors() || {};
        }
        if (aE === true) {
          return { all: true };
        } else {
          var aF = {};
          if (Array.isArray(aE)) {
            for (var aC = 0; aC < aE.length; aC++) {
              var aD = aE[aC];
              if (this.vendorList.hasOwnProperty(aD) === false) {
                console.error('Vendor ' + aD + ' not found in vendorList');
                continue;
              }
              aF[this.vendorList[aD]] = true;
            }
          } else {
            if (typeof aE === 'object') {
              if (Object.isEmpty(aE)) {
                aF = { all: true };
              } else {
                if (aE.hasOwnProperty('all') && aE.all) {
                  aF = aE;
                } else {
                  for (var aD in aE) {
                    if (this.vendorList.hasOwnProperty(aD) === false) {
                      console.error('Vendor ' + aD + ' not found in vendorList');
                      continue;
                    }
                    aF[this.vendorList[aD]] = aE[aD];
                  }
                }
              }
            } else {
              console.error('vendors object not recognized', aE);
            }
          }
          return aF;
        }
      };
      ay.prototype._getCookiesReturnObject = function (aC) {
        var aD = {};
        if (typeof aC === 'undefined') {
          aC = this._getConsentedCookies() || {};
        }
        if (aC === true) {
          aD = { all: true };
        } else {
          if (aC && typeof aC === 'object') {
            if (Object.isEmpty(aC)) {
              aC.all = true;
            }
            aD = aC;
          }
        }
        return aD;
      };
      ay.prototype._runConsentCallback = function (aC, aE, aD) {
        this.consentIsGiven = true;
        if (this.consentCallbackExecuted && !this.shouldSupportAmp) {
          return;
        }
        aC = this._getCategoriesReturnObject(aC);
        if (Object.isEmpty(aC)) {
          aC.all = true;
        }
        aE = this._getVendorsReturnObject(aE);
        aD = this._getCookiesReturnObject(aD);
        if (window.evidon && window.evidon.priorConsentCallback) {
          window.evidon.priorConsentCallback(aC, aE, aD);
        }
        if (this.iabEnabled && this.shouldCallCMP) {
          if (this.iabVersion === 1 && window.__cmp) {
            __cmp('consentGiven');
            __cmp('saveConsent');
          } else {
            if (this.iabVersion === 2 && window.__tcfapi) {
              __tcfapi('consentGiven');
              __tcfapi('saveConsent');
            }
          }
        }
        this.consentCallbackExecuted = true;
        this._triggerTagManagerEvent(aC, aE, aD);
        this._runAdobeOptIn(aC, aE);
      };
      ay.prototype._runCloseCallback = function () {
        this.consentIsGiven = false;
        if (this.closeCallbackExecuted && !this.shouldSupportAmp) {
          return;
        }
        if (window.evidon && window.evidon.closeCallback) {
          window.evidon.closeCallback();
        }
        if (this.iabEnabled && this.iabVersion === 1 && window.evidon.cmp) {
          window.evidon.cmp.consentClosed();
        }
        if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
          window.evidon.cmpv2.consentClosed();
        }
        this.closeCallbackExecuted = true;
      };
      ay.prototype._runDeclineCallback = function () {
        this.consentIsGiven = false;
        if (this.declineCallbackExecuted && !this.shouldSupportAmp) {
          return;
        }
        if (this.regulationConsentTypeId === ar) {
          this.dropSuppressionCookie(365);
          this._showConsentAccess();
        }
        if (window.evidon && window.evidon.consentDeclinedCallback) {
          window.evidon.consentDeclinedCallback();
        }
        if (this.iabEnabled && this.iabVersion === 1 && window.evidon.cmp) {
          window.evidon.cmp.consentDeclined();
        }
        if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
          window.evidon.cmpv2.consentDeclined();
        }
        this.declineCallbackExecuted = true;
      };
      ay.prototype._getLegacyNoticeType = function () {
        if (this.consentTypeId == E) {
          if (this.privacyAccessTypeId == a.LINK) {
            return 0;
          } else {
            if (this.privacyAccessTypeId == a.BUTTON) {
              return s;
            }
          }
        } else {
          if (this.consentTypeId == C) {
            if (this.privacyAccessTypeId == a.LINK) {
              return O;
            } else {
              if (this.privacyAccessTypeId == a.BUTTON) {
                return N;
              }
            }
          } else {
            if (this.consentTypeId == D) {
              return K;
            }
          }
        }
        return 0;
      };
      ay.prototype._closeL3 = function () {
        var aC = document.getElementById(ak);
        var aD = document.getElementById(V);
        if (aC) {
          aC.style.display = 'none';
          aC.style.opacity = '0';
          setTimeout(function () {
            try {
              aC.parentElement.removeChild(aC);
            } catch (aE) {
              console.log(aE);
            }
          }, 200);
        }
        if (aD) {
          aD.style.display = 'none';
          aD.style.opacity = 0;
          setTimeout(function () {
            try {
              aD.parentElement.removeChild(aD);
            } catch (aE) {
              console.log(aE);
            }
          }, 200);
        }
      };
      ay.prototype._navigationConsentGiven = function () {
        if (!this.navigationConsentEnabled) {
          return false;
        }
        var aD = document.referrer;
        var aC = this.activeDomain;
        if (aC.substr(aC.length - 1) === '/') {
          aC = aC.substr(0, aC.length - 1);
        }
        if (aD && aD != document.URL && aD.indexOf(aC) > -1) {
          this.dropPixel(ah);
          return true;
        } else {
          return false;
        }
      };
      ay.prototype._setTranslationValues = function (aF, aG) {
        for (var aE in aF) {
          var aC = aF[aE];
          if (typeof aC === 'object') {
            var aD = aC.id;
            aF[aE] = aG[aD];
          }
        }
        return aF;
      };
      ay.prototype._setActiveTranslations = function () {
        if (!this.languageRoot || !this.translations) {
          return;
        }
        if (!this.activeSettings) {
          if (!this.translations.hasOwnProperty(this.languageRoot)) {
            this.activateTranslations(this.languageCode || this.languageRoot);
          }
        } else {
          var aF = this.activeSettings;
          if (aF.translations.hasOwnProperty(this.languageRoot)) {
            if (this.translations.hasOwnProperty(this.languageRoot)) {
              var aG = aF.translations[this.languageRoot];
              var aD = 0;
              if (aG.hasOwnProperty(this.languageCode)) {
                aD = aG[this.languageCode];
              } else {
                if (aG.hasOwnProperty(this.languageRoot)) {
                  aD = aG[this.languageRoot];
                } else {
                  if (this.languageRoot == 'en' && aG.hasOwnProperty('en-us')) {
                    aD = aG['en-us'];
                  } else {
                    function aC (aI) {
                      for (var aH in aI) {
                        return aH;
                      }
                    }
                    var aE = aC(aG);
                    if (aE) {
                      aD = aG[aE];
                    }
                  }
                }
              }
              if (aD) {
                this.activeTranslationId = aD;
                var aG = this.translations[this.languageRoot];
                if (aG.hasOwnProperty('items')) {
                  this.activeTranslations = this._setTranslationValues(aG[aD], aG.items);
                } else {
                  this.activeTranslations = aG[aD];
                }
              }
            } else {
              this.activateTranslations(this.languageCode || this.languageRoot);
            }
          } else {
            this.activateTranslations(aF.defaultTranslation.code);
          }
        }
      };
      ay.prototype._shouldShowConsentUI = function () {
        var aC = this._isConsentGiven();
        var aD = this._getSuppressionCookie();
        if (this.consentTypeId === E) {
          return false;
        } else {
          if (aD) {
            return false;
          } else {
            if (!this.consentRequired && !aC) {
              return true;
            } else {
              return !aC;
            }
          }
        }
      };
      ay.prototype._showConsentUI = function () {
        if (this.consentTypeId === E) {
          return;
        } else {
          if (this.consentTypeId === C) {
            if (L.indexOf(this.companyId) > -1) {
              this.appendScript(ax + M.BANNER_SCRIPT);
            } else {
              this.appendScript(ax + k);
            }
            if (this.activeTranslations && window.evidon.banner) {
              if (!document.getElementById('_evidon_banner')) {
                window.evidon.banner.createNotice();
              } else {
                window.evidon.banner.setTextValues(this.activeTranslations);
              }
            }
          } else {
            if (this.consentTypeId === D) {
              if (L.indexOf(this.companyId) > -1) {
                this.appendScript(ax + M.BARRIER_SCRIPT);
              } else {
                this.appendScript(ax + l);
              }
              if (this.activeTranslations && window.evidon.barrier) {
                if (!document.getElementById('_evidon-barrier-wrapper')) {
                  window.evidon.barrier.createBarrierNotice();
                } else {
                  window.evidon.barrier.setTextValues(this.activeTranslations);
                }
              }
            }
          }
        }
      };
      ay.prototype._showConsentAccess = function () {
        var aE = '';
        if (this.privacyAccessTypeId === a.LINK) {
          aE = this.getLinkStyle();
          if (aE && window.evidon.link) {
            window.evidon.link.createLink(aE);
            if (this.activeTranslations) {
              window.evidon.link.setLinkText(this.activeTranslations);
            }
          }
        } else {
          var aC = this.consentIsGiven;
          var aF = this._getSuppressionCookie();
          var aD = this.regulationConsentTypeId === 0 && this.privacyAccessTypeId === 2;
          if (aC || aF || aD) {
            aE = this.getButtonStyle();
            if (aE && window.evidon.button) {
              window.evidon.button.createButton(aE);
              if (this.activeTranslations) {
                window.evidon.button.setButtonText(this.activeTranslations);
              }
              this.checkConsentedVendors();
            }
          }
        }
      };
      ay.prototype._runNoConsentFlow = function () {
        if (this.consentRequired) {
          return;
        }
        this._runConsentCallback();
        if (!this._isConsentGiven()) {
          this._showConsentUI();
        }
        this._showConsentAccess();
      };
      ay.prototype._runOptInFlow = function () {
        var aC = this._getSuppressionCookie();
        if (!aC) {
          if (this._isConsentGiven()) {
            this._runConsentCallback();
          } else {
            if (this.consentTypeId === C) {
              this._hookConsentEvents();
            }
            this._showConsentUI();
          }
        }
        this._showConsentAccess();
      };
      ay.prototype._runOptOutFlow = function () {
        var aD = this._getSuppressionCookie();
        if (this._isConsentGiven()) {
          if (this.consentDetailCategories) {
            var aC = this._getConsentedCategories();
            if (aC && !aC.hasOwnProperty('all')) {
              this._runConsentCallback(aC, null, null);
            }
          } else {
            if (this.consentDetailVendors) {
              var aE = this._getConsentedVendors();
              if (aE) {
                this._runConsentCallback(null, aE, null);
              }
            }
          }
        } else {
          this._runConsentCallback();
          if (!aD) {
            this._showConsentUI();
          }
        }
        this._showConsentAccess();
      };
      ay.prototype._getActiveCountryObject = function () {
        if (this.country && this.activeSettings) {
          var aC = this.country.id;
          if (
            this.activeStateId &&
            this.activeSettings.hasOwnProperty('states') &&
            this.activeSettings.states.hasOwnProperty(this.activeStateId)
          ) {
            return this.activeSettings.states[this.activeStateId];
          } else {
            if (this.activeSettings.countries.hasOwnProperty(aC)) {
              this.activeCountryId = aC;
              return this.activeSettings.countries[aC];
            } else {
              this.activeCountryId = this.activeSettings.defaultCountry;
              return this.activeSettings.countries[this.activeSettings.defaultCountry];
            }
          }
        }
        return null;
      };
      ay.prototype.dropPixel = function (aC, aF) {
        var aE = window.evidon.id;
        var aH = this.activeSettings.id;
        var aD = this.activeCountryId;
        var aJ = am;
        if (aJ.substr(aJ.length - 1) !== '/') {
          aJ += '/';
        }
        aJ +=
          aE +
          '/' +
          aH +
          '/' +
          aD +
          '/' +
          aC +
          '/' +
          this.consentTypeId +
          '/' +
          this.privacyAccessTypeId;
        if (this.activeTranslationId != 0) {
          aJ += '/' + this.activeTranslationId;
        }
        if (this.pixelsDropped.indexOf(aJ) === -1 || aF) {
          this.pixelsDropped.push(aJ);
          var aI = [];
          aI.push('consent=' + (this.consentIsGiven ? '1' : '0'));
          if (this.customerUserId) {
            aI.push('u=' + encodeURI(this.customerUserId));
          }
          if (typeof this.regulationId !== 'undefined' && this.regulationId !== null) {
            aI.push('regulationid=' + this.regulationId);
          }
          if (
            typeof this.regulationConsentTypeId !== 'undefined' &&
            this.regulationConsentTypeId !== null
          ) {
            aI.push('regulationconsenttypeid=' + this.regulationConsentTypeId);
          }
          aJ += '?' + aI.join('&');
          var aG = new Image(0, 0);
          aG.style.display = 'none';
          aG.src = aJ;
        }
      };
      ay.prototype.consentGiven = function (aD, aC, aH, aG, aE) {
        var aF = false;
        if (typeof aE === 'undefined' || aE === null) {
          aE = aq;
        }
        if (!this._isConsentGiven() && !this.shouldSupportAmp) {
          aF = this._setConsentCookie(null, aC, aH, aG, aE);
        } else {
          aF = this._isConsentGiven();
        }
        this._runConsentCallback(aC, aH, aG);
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
          if (window.evidon.banner) {
            window.evidon.banner.destroyNotice();
          }
          if (window.evidon.barrier) {
            window.evidon.barrier.destroyNotice();
          }
        }
        if (aF) {
          if (typeof aD === 'undefined' || aD === false) {
            this.dropPixel(j);
          }
          this.navigationStack = [];
          this.showNotice();
        } else {
          if (this.shouldSupportAmp) {
          } else {
            console.error('Unable to set ConsentCookie');
          }
        }
      };
      ay.prototype.consentChanged = function (aC, aE, aD) {
        if (window.evidon.consentChangedCallback !== undefined) {
          window.evidon.consentChangedCallback(aC, aE, aD);
        }
        this.tagManagerEventFired = false;
        this._triggerTagManagerEvent(aC, aE, aD);
        this._runAdobeOptIn(aC, aE);
      };
      ay.prototype.closeGiven = function () {
        this._runCloseCallback();
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
          if (window.evidon.banner) {
            window.evidon.banner.destroyNotice();
          }
          if (window.evidon.barrier) {
            window.evidon.barrier.destroyNotice();
          }
        }
      };
      ay.prototype.declineGiven = function () {
        this._runDeclineCallback();
        this._detachEventTracking();
        if (!this.shouldSupportAmp) {
          if (window.evidon.banner) {
            window.evidon.banner.destroyNotice();
          }
          if (window.evidon.barrier) {
            window.evidon.barrier.destroyNotice();
          }
        }
        this._showConsentAccess();
      };
      ay.prototype.getConsentUrl = function () {
        var aC = window.evidon.id;
        var aF = this.activeSettings.id;
        var aD = this.activeCountryId;
        var aE = this.languageCode;
        return W + aC + '/' + aF + '/' + aD + '?lang=' + aE;
      };
      ay.prototype.getDataRequestUrl = function (aF) {
        var aC = window.evidon.id;
        var aG = this.activeSettings.id;
        var aD = this.activeCountryId;
        var aH = this.regulationId;
        var aE = aF ? 'embed=1' : '';
        return H + aC + '/' + aG + '/' + aD + '/' + aH + '?' + aE;
      };
      ay.prototype.getDoNotSellRequestUrl = function (aF) {
        var aC = window.evidon.id;
        var aG = this.activeSettings.id;
        var aD = this.activeCountryId;
        var aH = this.regulationId;
        var aE = aF ? 'embed=1' : '';
        return H + aC + '/' + aG + '/' + aD + '/' + aH + '?doNotSell=1&' + aE;
      };
      ay.prototype.getPrivacyPolicyLink = function () {
        if (!this.activeCountryId) {
          return '#';
        }
        var aD = this.activeSettings;
        var aC = this._getActiveCountryObject();
        if (aC && aD.privacyLinks && aD.privacyLinks.hasOwnProperty(aC.privacyLinkId)) {
          return this._fixurl(this.activeSettings.privacyLinks[aC.privacyLinkId]);
        }
        return '#';
      };
      ay.prototype.getCookiePolicyLink = function () {
        if (!this.activeCountryId) {
          return '#';
        }
        var aD = this.activeSettings;
        var aC = this._getActiveCountryObject();
        if (aC && aD.cookieLinks && aD.cookieLinks.hasOwnProperty(aC.cookieLinkId)) {
          return this._fixurl(this.activeSettings.cookieLinks[aC.cookieLinkId]);
        }
        return '#';
      };
      ay.prototype.showPreferencesDialog = function (aD, aE) {
        var aC = this;
        if (!window.evidon.preferencesDialog) {
          this.appendScript(ax + an, function () {
            aC.showPreferencesDialog(aD, aE);
          });
          window.evidon.events.subscribe(
            'l2closed',
            function () {
              aC._showConsentAccess();
            },
            1
          );
        } else {
          if (
            window.evidon.preferencesDialog.isDisplayed &&
            window.evidon.preferencesDialog.isDisplayed()
          ) {
            return;
          }
          if (aD === undefined) {
            if (this.isCCPA() && !this._isConsentGiven() && this.dataRightsType !== 0) {
              if (this.dnsEnabled) {
                aD = this.PREFDIAG_TABS.DONOTSELL;
              }
            }
            if (this.iabEnabled && this.iabVersion === 2 && window.evidon.cmpv2) {
              window.evidon.cmpv2.consentUIShown();
            }
          }
          if (aD) {
            window.evidon.preferencesDialog.TAB_ID = aD;
          }
          if (aE) {
            window.evidon.preferencesDialog.TAB_SECONDARY_ID = aE;
          }
          window.evidon.preferencesDialog.init();
          this.dropPixel(P);
        }
      };
      ay.prototype.showOptionPanel = function (aD) {
        var aC = this;
        if (!window.evidon.gdprL2) {
          if (L.indexOf(this.companyId) > -1) {
            this.appendScript(ax + M.L2_SCRIPT, function () {
              aC.showOptionPanel(aD);
            });
          } else {
            this.appendScript(ax + Q, function () {
              aC.showOptionPanel(aD);
            });
          }
          this.dropPixel(P);
        } else {
          window.evidon.gdprL2.showOverlay(aD);
        }
      };
      ay.prototype.showOptions = function (aC, aD, aE) {
        if (this.L2Enabled) {
          if (this.getPreferencesDialogV2Enabled()) {
            this.showPreferencesDialog(aD, aE);
          } else {
            this.showOptionPanel(aC);
          }
        } else {
          this.showConsentTool(aC);
        }
      };
      ay.prototype.showConsentTool = function (aH) {
        var aE =
          this.activeSettings.consentDisplayType === undefined
            ? 1
            : this.activeSettings.consentDisplayType || 1;
        var aI = aE == S || (aE == T && window.location.protocol.indexOf('https') === -1);
        if (aI) {
          var aC = document.createElement('div');
          aC.style.cssText =
            'background-color: #000000; opacity:.7; position:fixed;top:0;left:0;bottom:0;right:0; z-index:2147483640;';
          aC.id = ak;
          document.body.appendChild(aC);
          var aF = document.createElement('div');
          aF.id = V;
          if (this.isMobile()) {
            aF.style.cssText =
              'position:absolute; top:0;left:0; bottom:0; right:0;;z-index:2147483647; padding: 28px 0 0 0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-y:scroll;';
          } else {
            aF.style.cssText =
              'position:fixed; top: 10%;left:20%; width:60%;height:80%;z-index:2147483647; padding: 28px 0 0 0;';
          }
          var aD = document.createElement('button');
          aD.style.cssText =
            'position:absolute; top:4px;right:8px;color:white; background:transparent;font-size:12px;border:0; psdding:4px;cursor:pointer;padding:0;';
          aD.innerHTML = this.activeTranslations.gdprl2Close + '&nbsp; &#x2716;';
          aD.onclick = this._closeL3;
          aF.appendChild(aD);
          var aG = document.createElement('iframe');
          aG.id = '_evidon-consent-frame';
          aG.scrolling = 'yes';
          aG.seamless = 'seamless';
          aG.frameBorder = '0';
          aG.src = this.getConsentUrl();
          aG.style.cssText = 'width:100%; height:100%;';
          aG.onload = function () {
            document.getElementById(V).style.position = 'fixed';
          };
          aF.appendChild(aG);
          document.body.appendChild(aF);
        } else {
          window.open(this.getConsentUrl(), 'L3');
        }
        this.dropPixel(U);
      };
      ay.prototype.isMobile = function () {
        const $___old_c1d9e66b7ee23e0b = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_c1d9e66b7ee23e0b)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_addd751f0eb655f8.userAgent
            ));
          return function () {
            var aC = navigator.userAgent;
            return (
              /ip(hone|od)|(android).+mobile|opera m(ob|in)i/i.test(aC) ||
              /Android/.test(aC) ||
              /iPhone/.test(aC) ||
              /iPad/.test(aC)
            );
          }.apply(this, arguments);
        } finally {
          if ($___old_c1d9e66b7ee23e0b)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_c1d9e66b7ee23e0b
            ));
        }
      };
      ay.prototype.showNotice = function () {
        if (!this.settings) {
          if (window.evidon.settings !== undefined && window.evidon.settings) {
            this.settings = window.evidon.settings;
          } else {
            return;
          }
        }
        if (!this.country) {
          if (window.evidon.location) {
            this.country = window.evidon.location;
          }
        }
        if (!this.country) {
          return;
        }
        this.activeSettings = this._getSettings();
        if (!this.activeSettings) {
          return;
        }
        this.activeCountryId = this.country.id;
        this.activeStateId = this.country.hasOwnProperty('stateId') ? this.country.stateId : null;
        var aE = this._getActiveCountryObject();
        if (!aE) {
          console.log('No consent settings found for the country: ' + this.activeCountryId);
          return;
        }
        if (!this._isDomReady()) {
          return;
        }
        if (!this.themes) {
          this.themes = window.evidon.themes || null;
        }
        if (!this.themes) {
          return;
        }
        if (!this.vendorList) {
          if (this.activeSettings.vendorLinks) {
            this.vendorList = this.activeSettings.vendorLinks;
          } else {
            this.getVendorList();
            return;
          }
        }
        if (aE.hasOwnProperty('consentTemplate') && window.evidon.consentTemplates) {
          var aC = aE.consentTemplate;
          var aD = window.evidon.consentTemplates[aC];
          this._loadSettings(aD);
        } else {
          this._loadSettings(aE);
        }
        this.dataRightsType = aE.dataRightsType === undefined ? 0 : aE.dataRightsType;
        var aH = aE.rightslinkId === undefined ? 0 : aE.rightslinkId;
        if (aH === 0) {
          this.rightsLink = '';
        } else {
          if (this.activeSettings.hasOwnProperty('rightsLinks')) {
            if (this.activeSettings.rightsLinks.hasOwnProperty(aH)) {
              this.rightsLink = this._fixurl(this.activeSettings.rightsLinks[aH]);
            } else {
              this.rightsLink = '';
            }
          } else {
            this.rightsLink = '';
          }
        }
        this.dnsRightsType = aE.hasOwnProperty('dnsRightsType') ? aE.dnsRightsType : 1;
        if (this.dnsRightsType == 0) {
          var aF = aE.dnslinkId === undefined ? 0 : aE.dnslinkId;
          if (aF === 0) {
            this.dnsLink = '';
          } else {
            if (this.activeSettings.hasOwnProperty('dnsLinks')) {
              if (this.activeSettings.dnsLinks.hasOwnProperty(aF)) {
                this.dnsLink = this._fixurl(this.activeSettings.dnsLinks[aF]);
              } else {
                this.dnsLink = '';
              }
            } else {
              this.dnsLink = '';
            }
          }
        } else {
          this.dnsLink = '';
        }
        var aG = aE.pubvendorsLinkId === undefined ? 0 : aE.pubvendorsLinkId;
        if (aG === 0) {
          this.pubvendorsLink = null;
        } else {
          this.pubvendorsLink = this.activeSettings.pubvendorsLinks[aG];
        }
        this.activeVendorId = aE.vendor;
        this._setActiveTranslations();
        if (!this._isConsentGiven() && this._navigationConsentGiven()) {
          this.consentGiven(true);
        }
        if (!this.consentRequired) {
          this._runNoConsentFlow();
        } else {
          if (this.regulationConsentTypeId === aq) {
            this._runOptInFlow();
          } else {
            if (this.regulationConsentTypeId === ar) {
              this._runOptOutFlow();
            }
          }
        }
        this.dropPixel(au);
        if (this.iabEnabled) {
          if (this.iabVersion === 1) {
            this.appendScript(w);
          } else {
            if (this.iabVersion === 2) {
              this.appendScript('https://iabmap.evidon.com/tcfv2/iabevidonmapping.js');
              this.appendScript('https://c.evidon.com/iab/vendor-list-script.json');
            }
          }
          this.appendScript(ax + x[this.iabVersion]);
          var aI = this._getSuppressionCookie();
          switch (this.iabVersion) {
            case 1:
              if (window.__cmp) {
                window.__cmp('setSuppression', aI !== null);
              } else {
                console.error('unable to find __cmp stub');
              }
              break;
            case 2:
              if (window.__tcfapi) {
                window.__tcfapi('setSuppression', aI !== null);
              } else {
                console.error('unable to find __tcfapi stub');
              }
              break;
          }
        }
        window.evidon.events._fireEvent('loaded', null);
      };
      ay.prototype.checkConsentedVendors = function () {
        var aD = this.getActiveVendors();
        var aC = this._getConsentedVendors();
        if (aC && aC.hasOwnProperty('all')) {
          if (aC.all) {
            return;
          }
        }
        var aE = this._getNewVendors(aD, aC);
        if (aE.length > 0 && typeof this.newVendorCallback === 'function') {
          this.newVendorCallback(aE);
        }
      };
      ay.prototype.getActiveVendors = function () {
        if (!this.activeSettings || !this.activeSettings.hasOwnProperty('vendors')) {
          return;
        }
        var aC = this.activeVendorId;
        if (aC === -1 || !this.activeSettings.vendors.hasOwnProperty(aC)) {
          return null;
        }
        return this.activeSettings.vendors[aC];
      };
      ay.prototype._getConsentedCategories = function () {
        return this._getConsentDataSpecific('categories');
      };
      ay.prototype._getConsentedCookies = function () {
        return this._getConsentDataSpecific('cookies');
      };
      ay.prototype._getConsentedVendors = function () {
        return this._getConsentDataSpecific('vendors');
      };
      ay.prototype._getConsentDataSpecific = function (aD) {
        var aC = this._getConsentDataFromLocalStorage(aD);
        if (!aC) {
          aC = this._getConsentDataFromCookie(aD);
        }
        if (!aC && this.regulationConsentTypeId === ar && !this.isOptedOut()) {
          aC = { all: true };
        }
        return aC;
      };
      ay.prototype._getConsentDataFromLocalStorage = function (aD) {
        var aC = this._readLocalStorage(A + this.activeSettings.id);
        if (!aC) {
          return null;
        }
        aC = JSON.parse(aC);
        if (aC.hasOwnProperty(aD) && aC[aD].hasOwnProperty(this.activeCountryId)) {
          return aC[aD][this.activeCountryId];
        }
        return null;
      };
      ay.prototype._getConsentDataFromCookie = function (aG) {
        var aC = this._getConsentCookie();
        if (!aC || !aC.value) {
          return null;
        }
        var aF = aC.value;
        if (typeof aF === 'string') {
          var aD = new Date(unescape(aF));
          aF = this._setConsentCookie(aD);
        } else {
          if (typeof aF === 'object') {
            var aH = this.activeSettings.hasOwnProperty('includeSubdomains')
              ? this.activeSettings.includeSubdomains
              : 0;
            if (aF.hasOwnProperty(aG) && aH != 1) {
              var aE = aF.hasOwnProperty('consent_type') ? aF.consent_type : aq;
              this._setConsentCookie(new Date(aF.consent_date), null, null, null, aE);
            }
          }
        }
        if (aF.hasOwnProperty(aG) && aF[aG].hasOwnProperty(this.activeCountryId)) {
          return aF[aG][this.activeCountryId];
        }
        return null;
      };
      ay.prototype._getNewVendors = function (aE, aC) {
        if (!aE || !aC) {
          return [];
        }
        var aD = [];
        if (Array.isArray(aC)) {
          aD = aC;
        } else {
          for (var aH in aC) {
            aD.push(parseInt(aH));
          }
        }
        var aG = [];
        for (var aF = 0; aF < aE.length; aF++) {
          var aH = aE[aF];
          if (aD.indexOf(aH) === -1) {
            aG.push(aH);
          }
        }
        return aG;
      };
      ay.prototype.setLocation = function (aC) {
        this.country = aC;
        if (!this.langaugeRoot) {
          this.activateTranslations(aC.defaultLanguage);
        }
        this.showNotice();
      };
      ay.prototype.setThemes = function (aC) {
        this.themes = aC;
        this.showNotice();
      };
      ay.prototype.getVendorList = function () {
        this.appendScript(ax + aB);
      };
      ay.prototype.setVendorList = function (aC) {
        this.vendorList = aC;
        this.showNotice();
      };
      ay.prototype.activateTranslations = function (aC) {
        if (aC === undefined || !aC) {
          return;
        }
        this.languageCode = aC;
        this.languageRoot = aC;
        var aD = this.languageCode.indexOf('-');
        if (aD !== -1) {
          this.languageRoot = this.languageCode.substr(0, aD);
        }
        if (this.translations.hasOwnProperty(this.languageRoot)) {
          this._setActiveTranslations();
          this.showNotice();
        } else {
          var aE = y + '/translations/' + this.languageRoot + '.js';
          this.appendScript(aE);
          this.activeTranslations = null;
        }
      };
      ay.prototype.setDomain = function (aC, aG) {
        if (!aC) {
          this.domain = window.location.hostname.toLowerCase();
          this.path = window.location.pathname.toLowerCase();
          var aD = this.path.lastIndexOf('/');
          if (aD > -1) {
            var aE = this.path.indexOf('.', aD);
            if (aE > -1) {
              this.path = this.path.substr(0, aD);
            }
          }
        } else {
          aC = aC.toLowerCase();
          var aE = aC.indexOf('://');
          if (aE !== -1) {
            aC = aC.substr(aE + 3);
          }
          aE = aC.indexOf('/');
          if (aE === -1) {
            this.domain = aC;
            this.path = '/';
          } else {
            this.domain = aC.substr(0, aE);
            aC = aC.substr(aE);
            aE = aC.indexOf('?');
            if (aE !== -1) {
              aC = aC.substr(0, aE);
            }
            this.path = aC;
          }
        }
        if (aG === undefined || !aG) {
          var aF = this._getRootDomain(this.domain);
          aF = aF.replace('.', '');
          var aH = window.evidon.test !== undefined ? window.evidon.test : false;
          var aI = y + '/' + aF + (aH ? '/test' : '') + '/settings.js';
          this.appendScript(aI);
        }
        this.showNotice();
      };
      ay.prototype.addTranslation = function (aC, aD) {
        this.translations[aC] = aD;
        this.showNotice();
      };
      ay.prototype.loadSettings = function (aC) {
        this.settings = aC;
        this.showNotice();
      };
      ay.prototype.getBannerStyle = function () {
        if (this.consentTypeId !== C) {
          return null;
        }
        if (!this.themes) {
          this.themes = window.evidon.themes;
        }
        if (!this.themes) {
          return null;
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
          return this.themes[this.activeSettings.themeId].banner;
        } else {
          return null;
        }
      };
      ay.prototype.getConsentTypeStyle = function () {
        var aC = this.getBarrierStyle();
        if (!aC) {
          aC = this.getBannerStyle();
        }
        return aC;
      };
      ay.prototype.getBarrierStyle = function () {
        if (this.consentTypeId !== D) {
          return null;
        }
        if (!this.themes) {
          this.themes = window.evidon.themes;
        }
        if (!this.themes) {
          return null;
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
          return this.themes[this.activeSettings.themeId].barrier;
        } else {
          return null;
        }
      };
      ay.prototype.getButtonStyle = function () {
        if (this.privacyAccessTypeId !== a.BUTTON) {
          return null;
        }
        if (!this.themes) {
          this.themes = window.evidon.themes;
        }
        if (!this.themes) {
          return null;
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
          return this.themes[this.activeSettings.themeId].button;
        } else {
          return null;
        }
      };
      ay.prototype.getLinkStyle = function () {
        if (this.privacyAccessTypeId !== a.LINK) {
          return null;
        }
        if (!this.themes) {
          this.themes = window.evidon.themes;
        }
        if (!this.themes) {
          return null;
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
          return this.themes[this.activeSettings.themeId].link;
        } else {
          return null;
        }
      };
      ay.prototype.getL2Style = function () {
        if (!this.L2Enabled) {
          return;
        }
        if (!this.themes) {
          this.themes = window.evidon.themes;
        }
        if (!this.themes) {
          return null;
        }
        if (this.themes.hasOwnProperty(this.activeSettings.themeId)) {
          return this.themes[this.activeSettings.themeId].l2;
        } else {
          return null;
        }
      };
      ay.prototype.getPreferencesDialogV2Enabled = function () {
        var aC = this.getL2Style();
        if (!aC) {
          return false;
        }
        return this.isMobile() ? aC.mobileEnablePreferencesDialogV2 : aC.enablePreferencesDialogV2;
      };
      ay.prototype.isGDPR = function () {
        return this.gdprEnabled || this.regulationId === at.GDPR;
      };
      ay.prototype.isCCPA = function () {
        return this.regulationId === at.CCPA;
      };
      ay.prototype.isOptedOut = function () {
        var aC = this._getConsentCookie();
        if (!aC || !aC.value) {
          return false;
        }
        if (!aC.value.hasOwnProperty('consent_type')) {
          return false;
        }
        return aC.value.consent_type === ar;
      };
      ay.prototype.getTranslations = function () {
        return this.activeTranslations;
      };
      ay.prototype.formatTranslation = function (aJ) {
        var aH = new RegExp(I, 'g'),
          aF = new RegExp(B, 'g'),
          aI = new RegExp(ap, 'g'),
          aG = new RegExp(G, 'g'),
          aC = this.getConsentUrl(),
          aE = this.getPrivacyPolicyLink(),
          aD = this.activeSettings.division || '';
        if (aJ) {
          aJ = aJ.replace(aH, aD).replace(aF, aC).replace(aI, aE);
        }
        return aJ;
      };
      ay.prototype.dropSuppressionCookie = function (aF, aH) {
        var aC = { date: new Date() };
        var aE = new Date();
        aE.setDate(aE.getDate() + aF);
        var aG = this._getConsentCookieDomainPath();
        var aD = this._getConsentCookieDomain();
        this._writeCookie(az, JSON.stringify(aC), aE.toUTCString(), aG, aD);
        return aC;
      };
      ay.prototype._getCookie = function (aF) {
        var aD = this._readCookies();
        for (var aE = 0; aE < aD.length; aE++) {
          var aC = aD[aE];
          if (aC.name === aF) {
            return aC;
          }
        }
        return null;
      };
      ay.prototype._readCookies = function () {
        const $___old_c30931f4b4428eb4 = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_c30931f4b4428eb4)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___stub_cdc5a54489618108.cookie
            ));
          return function () {
            var aD = document.cookie.split(';');
            var aE = [];
            for (var aG = 0; aG < aD.length; aG++) {
              var aI = aD[aG];
              var aH = aI.slice(0, aI.indexOf('=')).replace(/^\s+|\s+$/g, '');
              var aJ = aI.slice(aI.indexOf('=') + 1);
              var aC = { name: aH };
              try {
                aC.value = JSON.parse(aJ);
              } catch (aF) {
                aC.value = aJ;
              }
              aE.push(aC);
            }
            return aE;
          }.apply(this, arguments);
        } finally {
          if ($___old_c30931f4b4428eb4)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_c30931f4b4428eb4
            ));
        }
      };
      ay.prototype._writeCookie = function (aG, aI, aF, aH, aE) {
        var aD = [aG + '=' + aI];
        if (typeof aF === 'string') {
          aD.push('expires=' + aF);
        }
        aD.push('path=' + aH);
        aD.push('SameSite=Lax');
        if (typeof aE === 'string') {
          aD.push('domain=' + aE);
        }
        var aC = aD.join('; ');
        document.cookie = aC;
        return document.cookie.indexOf(aG) > -1;
      };
      ay.prototype._readLocalStorage = function (aD) {
        const $___old_77ea6883530a033a = {}.constructor.getOwnPropertyDescriptor(
          window,
          'localStorage'
        );
        try {
          if ($___old_77ea6883530a033a)
            ({}.constructor.defineProperty(
              window,
              'localStorage',
              $___stub_9417959baab2caf0.localStorage
            ));
          return function () {
            try {
              if (!window.localStorage) {
                return false;
              }
            } catch (aC) {
              return false;
            }
            return window.localStorage.getItem(aD);
          }.apply(this, arguments);
        } finally {
          if ($___old_77ea6883530a033a)
            ({}.constructor.defineProperty(window, 'localStorage', $___old_77ea6883530a033a));
        }
      };
      ay.prototype._writeLocalStorage = function (aD, aE) {
        try {
          if (!window.localStorage) {
            return false;
          }
        } catch (aC) {
          return false;
        }
        window.localStorage.setItem(aD, aE);
        return window.localStorage.getItem(aD) !== null;
      };
      ay.prototype._removeLocalStorageItem = function (aC) {
        if (!window.localStorage) {
          return;
        }
        window.localStorage.removeItem(aC);
      };
      ay.prototype.withdrawConsent = function () {
        this._deleteConsentCookie();
        this.consentIsGiven = false;
        this.dropPixel(F);
        if (window.evidon.consentWithdrawnCallback) {
          window.evidon.consentWithdrawnCallback();
        }
      };
      ay.prototype.newVendorCallback = function (aC) {
        if (window.evidon.button) {
          window.evidon.button.showNewVendorIndicator();
        }
        if (window.evidon.cmp && window.evidon.cmp.consentString) {
          window.evidon.cmp.newVendorCallback(aC);
        }
        if (window.evidon.cmpv2 && window.evidon.cmpv2.consentString) {
          window.evidon.cmpv2.newVendorCallback(aC);
        }
      };
      ay.prototype._pullOptOutDetails = function (aD) {
        var aE = window.evidon.id,
          aG = this.activeSettings.id,
          aC = this.activeCountryId,
          aF = this;
        var aH = aj;
        if (aH.substr(aH.length - 1) !== '/') {
          aH += '/';
        }
        aH += 'vendor/' + aE + '/' + aG + '/' + aC + '?lang=' + this.languageCode;
        var aI = new XMLHttpRequest();
        aI.onerror = function () {
          Toast.show(
            TOAST_ERROR,
            getTranslation(
              _isMobile ? 'mobilesnL2L3FetchVendorsError' : 'snL2L3FetchVendorsError'
            ),
            7
          );
        };
        aI.onreadystatechange = function () {
          if (aI.readyState !== 4) {
            return;
          }
          if (aI.status === 200) {
            var aN = JSON.parse(aI.responseText);
            aF.optOutDetails = {};
            aF.optOutDetails.categories = {};
            aF.optOutDetails.cookies = {};
            var aO = aN.hasOwnProperty('thirdparty') ? aN.thirdparty : [];
            for (var aM = 0; aM < aO.length; aM++) {
              var aP = aO[aM];
              var aJ = aP.hasOwnProperty('CategoryBucketId')
                ? aP.CategoryBucketId.toLowerCase()
                : aP.CategoryBucket.toLowerCase();
              if (!aF.optOutDetails.categories.hasOwnProperty(aJ)) {
                aF.optOutDetails.categories[aJ] = {
                  id: aJ,
                  name: aP.CategoryBucket,
                  description: aP.CategoryDescription,
                  required: aP.CategoryRequired,
                  vendors: [],
                };
              }
              aF.optOutDetails.categories[aJ].vendors.push(aP);
            }
            var aL = aN.hasOwnProperty('firstparty') ? aN.firstparty : [];
            for (var aM = 0; aM < aL.length; aM++) {
              var aK = aL[aM];
              aF.optOutDetails.cookies[aK.CountryCookieId] = {
                id: aK.CountryCookieId,
                name: aK.Name,
                description: aK.Description,
                required: aK.Required,
              };
            }
            aD();
          } else {
            if (aI.status === 500) {
              aD({ message: 'Unable to load the opt-out vendor list' }, null);
            }
          }
        };
        aI.open('GET', aH, true);
        aI.send(null);
      };
      ay.prototype.getOptOutCategories = function (aC) {
        var aD = this;
        if (!this.optOutDetails) {
          this._pullOptOutDetails(function (aE) {
            if (aE) {
              aC(aE, null);
            } else {
              aC(null, aD.optOutDetails.categories);
            }
          });
        } else {
          aC(null, aD.optOutDetails.categories);
        }
      };
      ay.prototype.getOptOutCategory = function (aC) {
        if (this.optOutDetails) {
          if (this.optOutDetails.categories.hasOwnProperty(aC)) {
            return this.optOutDetails.categories[aC];
          }
        }
        return null;
      };
      ay.prototype.getOptOutCookies = function (aC) {
        var aD = this;
        if (!this.optOutDetails) {
          this._pullOptOutDetails(function (aE) {
            if (aE) {
              aC(aE, null);
            } else {
              aC(null, aD.optOutDetails.cookies);
            }
          });
        } else {
          aC(null, aD.optOutDetails.cookies);
        }
      };
      ay.prototype.pushNavigationScreen = function (aC) {
        this.navigationStack.push(aC);
      };
      ay.prototype.popNavigationScreen = function () {
        if (this.navigationStack.length < 1) {
          return null;
        }
        var aC = this.navigationStack.pop();
        return aC;
      };
      ay.prototype.getNavigationScreenStackCount = function () {
        return this.navigationStack.length;
      };
      ay.prototype.setUserIdentifier = function (aC) {
        this.customerUserId = aC;
      };
      ay.prototype.getOptOutApiUrl = function () {
        return aj;
      };
      var J = function () {
        this.subscriptions = {};
        this.subscribe = function (aD, aC, aE) {
          if (!this.subscriptions.hasOwnProperty(aD)) {
            this.subscriptions[aD] = [];
          }
          if (!aE) {
            aE = -1;
          }
          this.subscriptions[aD].push({ callback: aC, limit: aE });
        };
        this._fireEvent = function (aD, aC) {
          if (!this.subscriptions.hasOwnProperty(aD)) {
            return;
          }
          var aG = this.subscriptions[aD];
          for (var aE = 0; aE < aG.length; aE++) {
            var aF = aG[aE];
            if (aF.callback && typeof aF.callback === 'function') {
              aF.callback.call(null, aC);
              if (aF.limit === -1) {
                continue;
              }
              aF.limit--;
              if (aF.limit === 0) {
                aG.splice(aE, 1);
                aE--;
              }
            }
          }
        };
      };
      if (!window.evidon.events) {
        window.evidon.events = new J();
      }
      if (!window.evidon.notice) {
        window.evidon.notice = new ay();
      }
      if (!window.evidon.button) {
        window.evidon.button = new m();
      }
      if (!window.evidon.link) {
        window.evidon.link = new X();
      }
      window.evidon.events._fireEvent('apiReady', null);
    })();
  })();
}
