var _satellite;
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
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-11-22T14:48:46Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          'dssDL.dssAccountId': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.dssAccountId' },
          },
          'dssDL.voucherCode': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.voucherCode' },
          },
          isSubscriptionYearly: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('dssDL.userProductName').toLowerCase().includes('yearly');
              },
            },
          },
          isPageNameUS: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return (
                  'Disney Plus D2C - Purchase Confirmed' == _satellite.getVar('dssDL.pageName')
                );
              },
            },
          },
          'dssDL.logInStatus': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.logInStatus' },
          },
          isUserActive: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'Is Active' == _satellite.getVar('dssDL.userSubscriptionState');
              },
            },
          },
          'dssDL.pageName': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.pageName' },
          },
          isCountryCA: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'ca' == _satellite.getVar('dssDL.countryCode');
              },
            },
          },
          isDisneyHomePage: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.pathname.includes('/home');
              },
            },
          },
          'dssDL.dssSessionId': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.dssSessionId' },
          },
          'dssDL.userVisitorState': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.userVisitorState' },
          },
          isUserRepeat: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'Repeat' == _satellite.getVar('dssDL.userVisitorState');
              },
            },
          },
          isRegionNorthAmerica: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'North America' == _satellite.getVar('dssDL.countrycodeRegion');
              },
            },
          },
          isDisneyPlusSite: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.hostname.includes('disneyplus.com');
              },
            },
          },
          isDisneyPlusBundleSite: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.pathname.includes('bundle');
              },
            },
          },
          isSubscriptionBundle: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite
                  .getVar('dssDL.userProductSku')
                  .toLowerCase()
                  .includes('1999199999999917051999000_disney');
              },
            },
          },
          isCountryGB: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'gb' == _satellite.getVar('dssDL.countryCode');
              },
            },
          },
          isWelcomePage: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.pathname.includes('/welcome');
              },
            },
          },
          isRegionAPAC: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'APAC' == _satellite.getVar('dssDL.countrycodeRegion');
              },
            },
          },
          isUserNotSubscribed: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'Not Subscribed' == _satellite.getVar('dssDL.userSubscriptionState');
              },
            },
          },
          isMulanPurchase: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('dssDL.userProductName').includes('Pitt');
              },
            },
          },
          isRegionLATAM: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'LATAM' == _satellite.getVar('dssDL.countrycodeRegion');
              },
            },
          },
          isCountryES: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'es' == _satellite.getVar('dssDL.countryCode');
              },
            },
          },
          isPasswordPage: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.pathname.includes('password');
              },
            },
          },
          isSubscriptionMonthly: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite
                  .getVar('dssDL.userProductName')
                  .toLowerCase()
                  .includes('monthly');
              },
            },
          },
          isPreviewPage: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.hostname.includes('preview.disneyplus.com');
              },
            },
          },
          isCountryNL: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'nl' == _satellite.getVar('dssDL.countryCode');
              },
            },
          },
          'dssDL.userProductSku': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.userProductSku' },
          },
          'dssDL.pageURL': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.pageURL' },
          },
          'dssDL.userSubscriptionState': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.userSubscriptionState' },
          },
          isDisneyPlusBundleSignupPage: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('dssDL.pageURL').includes('bundle');
              },
            },
          },
          'dssDL.deviceLanguage': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.deviceLanguage' },
          },
          isFTcampaignCode: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite
                  .getVar('dssDL.campaignCode')
                  .includes('DISNEY_AFFILIATE_FT_CMPGN');
              },
            },
          },
          isBillingPage: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('dssDL.pageURL').includes('/billing');
              },
            },
          },
          'dssDL.ex_cid': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.ex_cid' },
          },
          isFTvoucherCode: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite
                  .getVar('dssDL.voucherCode')
                  .includes('DISNEY_US_AFFILIATE_FT_VOCHR');
              },
            },
          },
          isCountryFR: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'fr' == _satellite.getVar('dssDL.countryCode');
              },
            },
          },
          'dssDL.purchaseCompleted': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.purchaseCompleted' },
          },
          isCountryPE: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'pe' == _satellite.getVar('dssDL.countryCode');
              },
            },
          },
          'isMovieDetailPage-Mulan': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.pathname.toLowerCase().includes('mulan');
              },
            },
          },
          'dssDL.dssDeviceId': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.dssDeviceId' },
          },
          isSignUpPage: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('dssDL.pageURL').includes('/sign-up');
              },
            },
          },
          'dssDL.cid': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.cid' },
          },
          'dssDL.countrycodeRegion': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.countrycodeRegion' },
          },
          'isMulanMLP- /welcome/new': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.pathname.includes('/welcome/new');
              },
            },
          },
          isRegionEMEA: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'EMEA' == _satellite.getVar('dssDL.countrycodeRegion');
              },
            },
          },
          isCountryGroupLATAM: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'LATAM' == _satellite.getVar('dssDL.countryGroup');
              },
            },
          },
          ismProductsku2: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return '2' == _satellite.getVar('dssDL.mProductSku');
              },
            },
          },
          'dssDL.userProductName': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.userProductName' },
          },
          isCountryAR: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'ar' == _satellite.getVar('dssDL.countryCode').toLowerCase();
              },
            },
          },
          isDisneyPlusBundleUpgradePage: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('dssDL.pageURL').includes('bundle-success');
              },
            },
          },
          'dssDL.campaignCode': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.campaignCode' },
          },
          'dssDL.countryCode': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.countryCode' },
          },
          isCountryIE: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'ie' == _satellite.getVar('dssDL.countryCode');
              },
            },
          },
          isCountryAT: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'at' == _satellite.getVar('dssDL.countryCode');
              },
            },
          },
          isCountryDE: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'de' == _satellite.getVar('dssDL.countryCode');
              },
            },
          },
          isCountryBR: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'br' == _satellite.getVar('dssDL.countryCode').toLowerCase();
              },
            },
          },
          'dssDL.countryGroup': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.countryGroup' },
          },
          'dssDL.mid': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.mid' },
          },
          isCountryIT: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'it' == _satellite.getVar('dssDL.countryCode');
              },
            },
          },
          'dssDL.mProductSku': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.mProductSku' },
          },
          'dssDL.redemptionCode': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.redemptionCode' },
          },
          isDataLayerPresent: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'undefined' != typeof dssDataLayer;
              },
            },
          },
          isInAppMulanPage: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return location.pathname.includes('/movies/content/');
              },
            },
          },
          shouldFirePixelsForCountry: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return !(
                  _satellite.getVar('dssDL.countryCode').toLowerCase() in countriesNoPixels
                );
              },
            },
          },
          'dssDL.partnerId': {
            defaultValue: '',
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
            settings: { path: 'dssDataLayer.partnerId' },
          },
          isCountryUS: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'us' == _satellite.getVar('dssDL.countryCode').toLowerCase();
              },
            },
          },
          isEplusBundleUpgradePartnerId: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'espnplus_18214990614' == _satellite.getVar('dssDL.partnerId');
              },
            },
          },
          isEx_cidESPN: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return _satellite.getVar('dssDL.ex_cid').includes('Affiliate');
              },
            },
          },
          isCountryGroupEMEA: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'EMEA' == _satellite.getVar('dssDL.countryGroup');
              },
            },
          },
          isSoulMoviePage: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return (
                  location.pathname.toLowerCase().includes('soul') &&
                  location.pathname.toLowerCase().includes('movies')
                );
              },
            },
          },
        },
        extensions: {
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/dataElements/javascriptVariable.js': {
                name: 'javascript-variable',
                displayName: 'JavaScript Variable',
                script: function (e, o, s) {
                  'use strict';
                  var t = s('../helpers/getObjectProperty.js');
                  e.exports = function (e) {
                    return t(window, e.path);
                  };
                },
              },
              'core/src/lib/dataElements/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e, o) {
                    return e.source(o);
                  };
                },
              },
              'core/src/lib/events/windowLoaded.js': {
                name: 'window-loaded',
                displayName: 'Window Loaded',
                script: function (e, o, s) {
                  'use strict';
                  var t = s('./helpers/pageLifecycleEvents');
                  e.exports = function (e, o) {
                    t.registerWindowLoadedTrigger(o);
                  };
                },
              },
              'core/src/lib/conditions/valueComparison.js': {
                name: 'value-comparison',
                displayName: 'Value Comparison',
                script: function (e) {
                  'use strict';
                  var t = function (e) {
                      return 'number' == typeof e && isFinite(e);
                    },
                    n = function (e) {
                      return 'string' == typeof e || e instanceof String;
                    },
                    r = function (e, o) {
                      return o && n(e) ? e.toLowerCase() : e;
                    },
                    i = function (e) {
                      return t(e) ? String(e) : e;
                    },
                    a = function (e) {
                      return n(e) ? Number(e) : e;
                    },
                    o = function (t) {
                      return function (e, o, s) {
                        return (e = i(e)), (o = i(o)), n(e) && n(o) && t(e, o, s);
                      };
                    },
                    s = function (s) {
                      return function (e, o) {
                        return (e = a(e)), (o = a(o)), t(e) && t(o) && s(e, o);
                      };
                    },
                    c = function (t) {
                      return function (e, o, s) {
                        return t(r(e, s), r(o, s));
                      };
                    },
                    l = {
                      equals: c(function (e, o) {
                        return e == o;
                      }),
                      doesNotEqual: function () {
                        return !l.equals.apply(null, arguments);
                      },
                      contains: o(
                        c(function (e, o) {
                          return -1 !== e.indexOf(o);
                        })
                      ),
                      doesNotContain: function () {
                        return !l.contains.apply(null, arguments);
                      },
                      startsWith: o(
                        c(function (e, o) {
                          return 0 === e.indexOf(o);
                        })
                      ),
                      doesNotStartWith: function () {
                        return !l.startsWith.apply(null, arguments);
                      },
                      endsWith: o(
                        c(function (e, o) {
                          return e.substring(e.length - o.length, e.length) === o;
                        })
                      ),
                      doesNotEndWith: function () {
                        return !l.endsWith.apply(null, arguments);
                      },
                      matchesRegex: o(function (e, o, s) {
                        return new RegExp(o, s ? 'i' : '').test(e);
                      }),
                      doesNotMatchRegex: function () {
                        return !l.matchesRegex.apply(null, arguments);
                      },
                      lessThan: s(function (e, o) {
                        return e < o;
                      }),
                      lessThanOrEqual: s(function (e, o) {
                        return e <= o;
                      }),
                      greaterThan: s(function (e, o) {
                        return o < e;
                      }),
                      greaterThanOrEqual: s(function (e, o) {
                        return o <= e;
                      }),
                      isTrue: function (e) {
                        return !0 === e;
                      },
                      isTruthy: function (e) {
                        return Boolean(e);
                      },
                      isFalse: function (e) {
                        return !1 === e;
                      },
                      isFalsy: function (e) {
                        return !e;
                      },
                    };
                  e.exports = function (e) {
                    return l[e.comparison.operator](
                      e.leftOperand,
                      e.rightOperand,
                      Boolean(e.comparison.caseInsensitive)
                    );
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, o, s, r) {
                  'use strict';
                  var i,
                    t,
                    n,
                    a,
                    c = s('@adobe/reactor-document'),
                    l = s('@adobe/reactor-promise'),
                    u = s('./helpers/decorateCode'),
                    d = s('./helpers/loadCodeSequentially'),
                    b = s('../../../node_modules/postscribe/dist/postscribe'),
                    m = s('./helpers/unescapeHtmlCode'),
                    p =
                      ((t = function (e) {
                        b(c.body, e, {
                          beforeWriteToken: function (o) {
                            var e = o.tagName && o.tagName.toLowerCase();
                            return (
                              i && 'script' === e && (o.attrs.nonce = i),
                              ('script' !== e && 'style' !== e) ||
                                (Object.keys(o.attrs || {}).forEach(function (e) {
                                  o.attrs[e] = m(o.attrs[e]);
                                }),
                                o.src && (o.src = m(o.src))),
                              o
                            );
                          },
                          error: function (e) {
                            r.logger.error(e.msg);
                          },
                        });
                      }),
                      (n = []),
                      (a = function () {
                        if (c.body) for (; n.length; ) t(n.shift());
                        else setTimeout(a, 20);
                      }),
                      function (e) {
                        n.push(e), a();
                      }),
                    g = (function () {
                      if (c.currentScript) return c.currentScript.async;
                      for (var e = c.querySelectorAll('script'), o = 0; o < e.length; o++) {
                        var s = e[o];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(s.src)) return s.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, o) {
                    var s;
                    i = r.getExtensionSettings().cspNonce;
                    var t = { settings: e, event: o },
                      n = t.settings.source;
                    if (n)
                      return t.settings.isExternal
                        ? d(n).then(function (e) {
                            return e ? ((s = u(t, e)), p(s.code), s.promise) : l.resolve();
                          })
                        : ((s = u(t, n)),
                          g || 'loading' !== c.readyState
                            ? p(s.code)
                            : c.write && !1 === r.propertySettings.ruleComponentSequencingEnabled
                            ? c.write(s.code)
                            : p(s.code),
                          s.promise);
                  };
                },
              },
              'core/src/lib/events/customEvent.js': {
                name: 'custom-event',
                displayName: 'Custom Event',
                script: function (e, o, s) {
                  'use strict';
                  var t = s('./helpers/createBubbly')(),
                    n = [];
                  e.exports = function (e, o) {
                    var s = e.type;
                    -1 === n.indexOf(s) &&
                      (n.push(s), window.addEventListener(s, t.evaluateEvent, !0)),
                      t.addListener(e, function (e) {
                        e.nativeEvent.type === s && ((e.detail = e.nativeEvent.detail), o(e));
                      });
                  };
                },
              },
              'core/src/lib/conditions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e, o) {
                    return e.source.call(o.element, o, o.target);
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (e, o, s) {
                  'use strict';
                  var t = s('./helpers/pageLifecycleEvents');
                  e.exports = function (e, o) {
                    t.registerLibraryLoadedTrigger(o);
                  };
                },
              },
              'core/src/lib/helpers/getObjectProperty.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, o) {
                    for (var s = o.split('.'), t = e, n = 0, r = s.length; n < r; n++) {
                      if (null == t) return undefined;
                      t = t[s[n]];
                    }
                    return t;
                  };
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, o, s) {
                  const $___old_37146a12270f3b11 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_37146a12270f3b11)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_addd751f0eb655f8.appVersion
                      ));
                    return function () {
                      'use strict';
                      var t = s('@adobe/reactor-window'),
                        n = s('@adobe/reactor-document'),
                        r = -1 !== t.navigator.appVersion.indexOf('MSIE 10'),
                        i = 'WINDOW_LOADED',
                        a = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        l = [c, a, i],
                        u = function (e, o) {
                          return { element: e, target: e, nativeEvent: o };
                        },
                        d = {};
                      l.forEach(function (e) {
                        d[e] = [];
                      });
                      var b = function (e, o) {
                          l.slice(0, p(e) + 1).forEach(function (e) {
                            g(o, e);
                          });
                        },
                        m = function () {
                          return 'complete' === n.readyState
                            ? i
                            : 'interactive' === n.readyState
                            ? r
                              ? null
                              : a
                            : void 0;
                        },
                        p = function (e) {
                          return l.indexOf(e);
                        },
                        g = function (o, e) {
                          d[e].forEach(function (e) {
                            f(o, e);
                          }),
                            (d[e] = []);
                        },
                        f = function (e, o) {
                          var s = o.trigger,
                            t = o.syntheticEventFn;
                          s(t ? t(e) : null);
                        };
                      (t._satellite = t._satellite || {}),
                        (t._satellite.pageBottom = b.bind(null, c)),
                        n.addEventListener('DOMContentLoaded', b.bind(null, a), !0),
                        t.addEventListener('load', b.bind(null, i), !0),
                        t.setTimeout(function () {
                          var e = m();
                          e && b(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            d[c].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            d[a].push({ trigger: e, syntheticEventFn: u.bind(null, n) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[i].push({ trigger: e, syntheticEventFn: u.bind(null, t) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_37146a12270f3b11)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_37146a12270f3b11
                      ));
                  }
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, o, s) {
                  'use strict';
                  var t = s('./decorators/decorateGlobalJavaScriptCode'),
                    n = s('./decorators/decorateNonGlobalJavaScriptCode'),
                    r = {
                      javascript: function (e, o) {
                        return e.settings.global ? t(e, o) : n(e, o);
                      },
                      html: s('./decorators/decorateHtmlCode'),
                    };
                  e.exports = function (e, o) {
                    return r[e.settings.language](e, o);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, o, s) {
                  'use strict';
                  var t = s('@adobe/reactor-promise'),
                    n = s('./getSourceByUrl'),
                    r = t.resolve();
                  e.exports = function (o) {
                    var e = new t(function (s) {
                      var e = n(o);
                      t.all([e, r]).then(function (e) {
                        var o = e[0];
                        s(o);
                      });
                    });
                    return (r = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (s, t) {
                  !(function n (e, o) {
                    'object' == typeof t && 'object' == typeof s
                      ? (s.exports = o())
                      : 'function' == typeof define && define.amd
                      ? define([], o)
                      : 'object' == typeof t
                      ? (t.postscribe = o())
                      : (e.postscribe = o());
                  })(this, function () {
                    return (function (s) {
                      function t (e) {
                        if (n[e]) return n[e].exports;
                        var o = (n[e] = { exports: {}, id: e, loaded: !1 });
                        return s[e].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports;
                      }
                      var n = {};
                      return (t.m = s), (t.c = n), (t.p = ''), t(0);
                    })([
                      function (e, o, s) {
                        'use strict';
                        function t (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var n = t(s(1));
                        e.exports = n['default'];
                      },
                      function (e, o, s) {
                        'use strict';
                        function t (e) {
                          if (e && e.__esModule) return e;
                          var o = {};
                          if (null != e)
                            for (var s in e)
                              Object.prototype.hasOwnProperty.call(e, s) && (o[s] = e[s]);
                          return (o['default'] = e), o;
                        }
                        function n (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function l () {}
                        function u () {
                          var e = c.shift();
                          if (e) {
                            var o = i.last(e);
                            o.afterDequeue(),
                              (e.stream = r.apply(undefined, e)),
                              o.afterStreamStart();
                          }
                        }
                        function r (e, o, t) {
                          function n (e) {
                            (e = t.beforeWrite(e)), g.write(e), t.afterWrite(e);
                          }
                          ((g = new m['default'](e, t)).id = p++),
                            (g.name = t.name || g.id),
                            (d.streams[g.name] = g);
                          var s = e.ownerDocument,
                            r = {
                              close: s.close,
                              open: s.open,
                              write: s.write,
                              writeln: s.writeln,
                            };
                          b(s, {
                            close: l,
                            open: l,
                            write: function a () {
                              for (var e = arguments.length, o = Array(e), s = 0; s < e; s++)
                                o[s] = arguments[s];
                              return n(o.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, o = Array(e), s = 0; s < e; s++)
                                o[s] = arguments[s];
                              return n(o.join('') + '\n');
                            },
                          });
                          var i = g.win.onerror || l;
                          return (
                            (g.win.onerror = function (e, o, s) {
                              t.error({ msg: e + ' - ' + o + ': ' + s }),
                                i.apply(g.win, [e, o, s]);
                            }),
                            g.write(o, function () {
                              b(s, r), (g.win.onerror = i), t.done(), (g = null), u();
                            }),
                            g
                          );
                        }
                        function d (e, o, s) {
                          if (i.isFunction(s)) s = { done: s };
                          else if ('clear' === s) return (c = []), (g = null), void (p = 0);
                          s = i.defaults(s, a);
                          var t = [
                            (e = /^#/.test(e)
                              ? window.document.getElementById(e.substr(1))
                              : e.jquery
                              ? e[0]
                              : e),
                            o,
                            s,
                          ];
                          return (
                            (e.postscribe = {
                              cancel: function n () {
                                t.stream ? t.stream.abort() : (t[1] = l);
                              },
                            }),
                            s.beforeEnqueue(t),
                            c.push(t),
                            g || u(),
                            e.postscribe
                          );
                        }
                        o.__esModule = !0;
                        var b =
                          Object.assign ||
                          function (e) {
                            for (var o = 1; o < arguments.length; o++) {
                              var s = arguments[o];
                              for (var t in s)
                                Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t]);
                            }
                            return e;
                          };
                        o['default'] = d;
                        var m = n(s(2)),
                          i = t(s(4)),
                          a = {
                            afterAsync: l,
                            afterDequeue: l,
                            afterStreamStart: l,
                            afterWrite: l,
                            autoFix: !0,
                            beforeEnqueue: l,
                            beforeWriteToken: function f (e) {
                              return e;
                            },
                            beforeWrite: function h (e) {
                              return e;
                            },
                            done: l,
                            error: function C (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          p = 0,
                          c = [],
                          g = null;
                        b(d, { streams: {}, queue: c, WriteStream: m['default'] });
                      },
                      function (e, o, s) {
                        'use strict';
                        function t (e) {
                          if (e && e.__esModule) return e;
                          var o = {};
                          if (null != e)
                            for (var s in e)
                              Object.prototype.hasOwnProperty.call(e, s) && (o[s] = e[s]);
                          return (o['default'] = e), o;
                        }
                        function n (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function P (e, o) {
                          if (!(e instanceof o))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function v (e, o) {
                          var s = F + o,
                            t = e.getAttribute(s);
                          return S.existy(t) ? String(t) : t;
                        }
                        function y (e, o, s) {
                          var t = 2 < arguments.length && s !== undefined ? arguments[2] : null,
                            n = F + o;
                          S.existy(t) && '' !== t ? e.setAttribute(n, t) : e.removeAttribute(n);
                        }
                        o.__esModule = !0;
                        var E =
                            Object.assign ||
                            function (e) {
                              for (var o = 1; o < arguments.length; o++) {
                                var s = arguments[o];
                                for (var t in s)
                                  Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t]);
                              }
                              return e;
                            },
                          j = n(s(3)),
                          S = t(s(4)),
                          O = !1,
                          F = 'data-ps-',
                          I = 'ps-style',
                          M = 'ps-script',
                          r = (function () {
                            function t (e, o) {
                              var s = 1 < arguments.length && o !== undefined ? arguments[1] : {};
                              P(this, t),
                                (this.root = e),
                                (this.options = s),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new j['default']('', { autoFix: s.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                y(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (t.prototype.write = function s () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var o = this.writeQueue.shift();
                                  S.isFunction(o) ? this._callFunction(o) : this._writeImpl(o);
                                }
                              }),
                              (t.prototype._callFunction = function n (e) {
                                var o = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(o),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(o);
                              }),
                              (t.prototype._writeImpl = function r (e) {
                                this.parser.append(e);
                                for (
                                  var o = void 0, s = void 0, t = void 0, n = [];
                                  (o = this.parser.readToken()) &&
                                  !(s = S.isScript(o)) &&
                                  !(t = S.isStyle(o));

                                )
                                  (o = this.options.beforeWriteToken(o)) && n.push(o);
                                0 < n.length && this._writeStaticTokens(n),
                                  s && this._handleScriptToken(o),
                                  t && this._handleStyleToken(o);
                              }),
                              (t.prototype._writeStaticTokens = function i (e) {
                                var o = this._buildChunk(e);
                                return o.actual
                                  ? ((o.html = this.proxyHistory + o.actual),
                                    (this.proxyHistory += o.proxy),
                                    (this.proxyRoot.innerHTML = o.html),
                                    O && (o.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    O && (o.actualInnerHTML = this.root.innerHTML),
                                    o)
                                  : null;
                              }),
                              (t.prototype._buildChunk = function u (e) {
                                for (
                                  var o = this.actuals.length,
                                    s = [],
                                    t = [],
                                    n = [],
                                    r = e.length,
                                    i = 0;
                                  i < r;
                                  i++
                                ) {
                                  var a = e[i],
                                    c = a.toString();
                                  if ((s.push(c), a.attrs)) {
                                    if (!/^noscript$/i.test(a.tagName)) {
                                      var l = o++;
                                      t.push(c.replace(/(\/?>)/, ' ' + F + 'id=' + l + ' $1')),
                                        a.attrs.id !== M &&
                                          a.attrs.id !== I &&
                                          n.push(
                                            'atomicTag' === a.type
                                              ? ''
                                              : '<' +
                                                  a.tagName +
                                                  ' ' +
                                                  F +
                                                  'proxyof=' +
                                                  l +
                                                  (a.unary ? ' />' : '>')
                                          );
                                    }
                                  } else t.push(c), n.push('endTag' === a.type ? c : '');
                                }
                                return {
                                  tokens: e,
                                  raw: s.join(''),
                                  actual: t.join(''),
                                  proxy: n.join(''),
                                };
                              }),
                              (t.prototype._walkChunk = function a () {
                                for (
                                  var e = void 0, o = [this.proxyRoot];
                                  S.existy((e = o.shift()));

                                ) {
                                  var s = 1 === e.nodeType;
                                  if (!s || !v(e, 'proxyof')) {
                                    s && y((this.actuals[v(e, 'id')] = e), 'id');
                                    var t = e.parentNode && v(e.parentNode, 'proxyof');
                                    t && this.actuals[t].appendChild(e);
                                  }
                                  o.unshift.apply(o, S.toArray(e.childNodes));
                                }
                              }),
                              (t.prototype._handleScriptToken = function c (e) {
                                var o = this,
                                  s = this.parser.clear();
                                s && this.writeQueue.unshift(s),
                                  (e.src = e.attrs.src || e.attrs.SRC),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    (e.src && this.scriptStack.length
                                      ? (this.deferredRemote = e)
                                      : this._onScriptStart(e),
                                    this._writeScriptToken(e, function () {
                                      o._onScriptDone(e);
                                    }));
                              }),
                              (t.prototype._handleStyleToken = function l (e) {
                                var o = this.parser.clear();
                                o && this.writeQueue.unshift(o),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  o && this.write();
                              }),
                              (t.prototype._writeStyleToken = function d (e) {
                                var o = this._buildStyle(e);
                                this._insertCursor(o, I),
                                  e.content &&
                                    (o.styleSheet && !o.sheet
                                      ? (o.styleSheet.cssText = e.content)
                                      : o.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (t.prototype._buildStyle = function o (e) {
                                var s = this.doc.createElement(e.tagName);
                                return (
                                  s.setAttribute('type', e.type),
                                  S.eachKey(e.attrs, function (e, o) {
                                    s.setAttribute(e, o);
                                  }),
                                  s
                                );
                              }),
                              (t.prototype._insertCursor = function b (e, o) {
                                this._writeImpl('<span id="' + o + '"/>');
                                var s = this.doc.getElementById(o);
                                s && s.parentNode.replaceChild(e, s);
                              }),
                              (t.prototype._onScriptStart = function m (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (t.prototype._onScriptDone = function p (e) {
                                e === this.scriptStack[0]
                                  ? (this.scriptStack.shift(),
                                    this.write.apply(this, e.outerWrites),
                                    !this.scriptStack.length &&
                                      this.deferredRemote &&
                                      (this._onScriptStart(this.deferredRemote),
                                      (this.deferredRemote = null)))
                                  : this.options.error({
                                      msg: 'Bad script nesting or script finished twice',
                                    });
                              }),
                              (t.prototype._writeScriptToken = function g (e, o) {
                                var s = this._buildScript(e),
                                  t = this._shouldRelease(s),
                                  n = this.options.afterAsync;
                                e.src &&
                                  ((s.src = e.src),
                                  this._scriptLoadHandler(
                                    s,
                                    t
                                      ? n
                                      : function () {
                                          o(), n();
                                        }
                                  ));
                                try {
                                  this._insertCursor(s, M), (s.src && !t) || o();
                                } catch (r) {
                                  this.options.error(r), o();
                                }
                              }),
                              (t.prototype._buildScript = function f (e) {
                                var s = this.doc.createElement(e.tagName);
                                return (
                                  S.eachKey(e.attrs, function (e, o) {
                                    s.setAttribute(e, o);
                                  }),
                                  e.content && (s.text = e.content),
                                  s
                                );
                              }),
                              (t.prototype._scriptLoadHandler = function h (o, s) {
                                function t () {
                                  o = o.onload = o.onreadystatechange = o.onerror = null;
                                }
                                function n () {
                                  t(), null != s && s(), (s = null);
                                }
                                function r (e) {
                                  t(), i(e), null != s && s(), (s = null);
                                }
                                function e (e, o) {
                                  var s = e['on' + o];
                                  null != s && (e['_on' + o] = s);
                                }
                                var i = this.options.error;
                                e(o, 'load'),
                                  e(o, 'error'),
                                  E(o, {
                                    onload: function a () {
                                      if (o._onload)
                                        try {
                                          o._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          r({ msg: 'onload handler failed ' + e + ' @ ' + o.src });
                                        }
                                      n();
                                    },
                                    onerror: function c () {
                                      if (o._onerror)
                                        try {
                                          o._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          return void r({
                                            msg: 'onerror handler failed ' + e + ' @ ' + o.src,
                                          });
                                        }
                                      r({ msg: 'remote script failed ' + o.src });
                                    },
                                    onreadystatechange: function l () {
                                      /^(loaded|complete)$/.test(o.readyState) && n();
                                    },
                                  });
                              }),
                              (t.prototype._shouldRelease = function C (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              t
                            );
                          })();
                        o['default'] = r;
                      },
                      function (s) {
                        !(function t (e, o) {
                          s.exports = o();
                        })(0, function () {
                          return (function (s) {
                            function t (e) {
                              if (n[e]) return n[e].exports;
                              var o = (n[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                s[e].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
                              );
                            }
                            var n = {};
                            return (t.m = s), (t.c = n), (t.p = ''), t(0);
                          })([
                            function (e, o, s) {
                              'use strict';
                              function t (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var n = t(s(1));
                              e.exports = n['default'];
                            },
                            function (e, o, s) {
                              'use strict';
                              function t (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function n (e) {
                                if (e && e.__esModule) return e;
                                var o = {};
                                if (null != e)
                                  for (var s in e)
                                    Object.prototype.hasOwnProperty.call(e, s) && (o[s] = e[s]);
                                return (o['default'] = e), o;
                              }
                              function u (e, o) {
                                if (!(e instanceof o))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              o.__esModule = !0;
                              var d = n(s(2)),
                                b = n(s(3)),
                                m = t(s(6)),
                                r = s(5),
                                p = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                i = (function () {
                                  function c (e, o) {
                                    var s = this,
                                      t =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      n =
                                        1 < arguments.length && o !== undefined
                                          ? arguments[1]
                                          : {};
                                    u(this, c), (this.stream = t);
                                    var r = !1,
                                      i = {};
                                    for (var a in d)
                                      d.hasOwnProperty(a) &&
                                        (n.autoFix && (i[a + 'Fix'] = !0),
                                        (r = r || i[a + 'Fix']));
                                    r
                                      ? ((this._readToken = (0, m['default'])(
                                          this,
                                          i,
                                          function () {
                                            return s._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, m['default'])(this, i, function () {
                                          return s._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (c.prototype.append = function o (e) {
                                      this.stream += e;
                                    }),
                                    (c.prototype.prepend = function s (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (c.prototype._readTokenImpl = function t () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (c.prototype._peekTokenImpl = function n () {
                                      for (var e in p)
                                        if (p.hasOwnProperty(e) && p[e].test(this.stream)) {
                                          var o = b[e](this.stream);
                                          if (o)
                                            return 'startTag' === o.type &&
                                              /script|style/i.test(o.tagName)
                                              ? null
                                              : ((o.text = this.stream.substr(0, o.length)), o);
                                        }
                                    }),
                                    (c.prototype.peekToken = function e () {
                                      return this._peekToken();
                                    }),
                                    (c.prototype.readToken = function r () {
                                      return this._readToken();
                                    }),
                                    (c.prototype.readTokens = function i (e) {
                                      for (var o = void 0; (o = this.readToken()); )
                                        if (e[o.type] && !1 === e[o.type](o)) return;
                                    }),
                                    (c.prototype.clear = function a () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (c.prototype.rest = function l () {
                                      return this.stream;
                                    }),
                                    c
                                  );
                                })();
                              for (var a in (((o['default'] = i).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (i.escapeAttributes = function (e) {
                                var o = {};
                                for (var s in e)
                                  e.hasOwnProperty(s) && (o[s] = (0, r.escapeQuotes)(e[s], null));
                                return o;
                              }),
                              (i.supports = d)))
                                d.hasOwnProperty(a) &&
                                  (i.browserHasFlaw = i.browserHasFlaw || (!d[a] && a));
                            },
                            function (e, o) {
                              'use strict';
                              var s = !(o.__esModule = !0),
                                t = !1,
                                n = window.document.createElement('div');
                              try {
                                var r = '<P><I></P></I>';
                                (n.innerHTML = r), (o.tagSoup = s = n.innerHTML !== r);
                              } catch (i) {
                                o.tagSoup = s = !1;
                              }
                              try {
                                (n.innerHTML = '<P><i><P></P></i></P>'),
                                  (o.selfClose = t = 2 === n.childNodes.length);
                              } catch (i) {
                                o.selfClose = t = !1;
                              }
                              (n = null), (o.tagSoup = s), (o.selfClose = t);
                            },
                            function (e, o, s) {
                              'use strict';
                              function t (e) {
                                var o = e.indexOf('-->');
                                if (0 <= o) return new u.CommentToken(e.substr(4, o - 1), o + 3);
                              }
                              function n (e) {
                                var o = e.indexOf('<');
                                return new u.CharsToken(0 <= o ? o : e.length);
                              }
                              function r (e) {
                                var i, a, c;
                                if (-1 !== e.indexOf('>')) {
                                  var o = e.match(d.startTag);
                                  if (o) {
                                    var s =
                                      ((i = {}),
                                      (a = {}),
                                      (c = o[2]),
                                      o[2].replace(d.attr, function (e, o, s, t, n, r) {
                                        s || t || n || r
                                          ? arguments[5]
                                            ? ((i[arguments[5]] = ''), (a[arguments[5]] = !0))
                                            : (i[o] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (d.fillAttr.test(o) && o) ||
                                                '')
                                          : (i[o] = ''),
                                          (c = c.replace(e, ''));
                                      }),
                                      {
                                        v: new u.StartTagToken(
                                          o[1],
                                          o[0].length,
                                          i,
                                          a,
                                          !!o[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === s ? 'undefined' : l(s)))
                                      return s.v;
                                  }
                                }
                              }
                              function i (e) {
                                var o = r(e);
                                if (o) {
                                  var s = e.slice(o.length);
                                  if (s.match(new RegExp('</\\s*' + o.tagName + '\\s*>', 'i'))) {
                                    var t = s.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + o.tagName + '\\s*>', 'i')
                                    );
                                    if (t)
                                      return new u.AtomicTagToken(
                                        o.tagName,
                                        t[0].length + o.length,
                                        o.attrs,
                                        o.booleanAttrs,
                                        t[1]
                                      );
                                  }
                                }
                              }
                              function a (e) {
                                var o = e.match(d.endTag);
                                if (o) return new u.EndTagToken(o[1], o[0].length);
                              }
                              o.__esModule = !0;
                              var l =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                  ? function (e) {
                                      return typeof e;
                                    }
                                  : function (e) {
                                      return e &&
                                        'function' == typeof Symbol &&
                                        e.constructor === Symbol &&
                                        e !== Symbol.prototype
                                        ? 'symbol'
                                        : typeof e;
                                    };
                              (o.comment = t),
                                (o.chars = n),
                                (o.startTag = r),
                                (o.atomicTag = i),
                                (o.endTag = a);
                              var u = s(4),
                                d = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, o, s) {
                              'use strict';
                              function a (e, o) {
                                if (!(e instanceof o))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (o.__esModule = !0),
                                (o.EndTagToken = o.AtomicTagToken = o.StartTagToken = o.TagToken = o.CharsToken = o.CommentToken = o.Token = undefined);
                              var c = s(5),
                                t = (o.Token = function t (e, o) {
                                  a(this, t), (this.type = e), (this.length = o), (this.text = '');
                                }),
                                n =
                                  ((o.CommentToken = (function () {
                                    function s (e, o) {
                                      a(this, s),
                                        (this.type = 'comment'),
                                        (this.length = o || (e ? e.length : 0)),
                                        (this.text = ''),
                                        (this.content = e);
                                    }
                                    return (
                                      (s.prototype.toString = function e () {
                                        return '<!--' + this.content;
                                      }),
                                      s
                                    );
                                  })()),
                                  (o.CharsToken = (function () {
                                    function o (e) {
                                      a(this, o),
                                        (this.type = 'chars'),
                                        (this.length = e),
                                        (this.text = '');
                                    }
                                    return (
                                      (o.prototype.toString = function e () {
                                        return this.text;
                                      }),
                                      o
                                    );
                                  })()),
                                  (o.TagToken = (function () {
                                    function r (e, o, s, t, n) {
                                      a(this, r),
                                        (this.type = e),
                                        (this.length = s),
                                        (this.text = ''),
                                        (this.tagName = o),
                                        (this.attrs = t),
                                        (this.booleanAttrs = n),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (r.formatTag = function i (e, o) {
                                        var s =
                                            1 < arguments.length && o !== undefined
                                              ? arguments[1]
                                              : null,
                                          t = '<' + e.tagName;
                                        for (var n in e.attrs)
                                          if (e.attrs.hasOwnProperty(n)) {
                                            t += ' ' + n;
                                            var r = e.attrs[n];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[n]) ||
                                              (t += '="' + (0, c.escapeQuotes)(r) + '"');
                                          }
                                        return (
                                          e.rest && (t += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (t += '/>') : (t += '>'),
                                          s !== undefined &&
                                            null !== s &&
                                            (t += s + '</' + e.tagName + '>'),
                                          t
                                        );
                                      }),
                                      r
                                    );
                                  })()));
                              (o.StartTagToken = (function () {
                                function i (e, o, s, t, n, r) {
                                  a(this, i),
                                    (this.type = 'startTag'),
                                    (this.length = o),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = s),
                                    (this.booleanAttrs = t),
                                    (this.html5Unary = !1),
                                    (this.unary = n),
                                    (this.rest = r);
                                }
                                return (
                                  (i.prototype.toString = function e () {
                                    return n.formatTag(this);
                                  }),
                                  i
                                );
                              })()),
                                (o.AtomicTagToken = (function () {
                                  function r (e, o, s, t, n) {
                                    a(this, r),
                                      (this.type = 'atomicTag'),
                                      (this.length = o),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = s),
                                      (this.booleanAttrs = t),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = n);
                                  }
                                  return (
                                    (r.prototype.toString = function e () {
                                      return n.formatTag(this, this.content);
                                    }),
                                    r
                                  );
                                })()),
                                (o.EndTagToken = (function () {
                                  function s (e, o) {
                                    a(this, s),
                                      (this.type = 'endTag'),
                                      (this.length = o),
                                      (this.text = ''),
                                      (this.tagName = e);
                                  }
                                  return (
                                    (s.prototype.toString = function e () {
                                      return '</' + this.tagName + '>';
                                    }),
                                    s
                                  );
                                })());
                            },
                            function (e, o) {
                              'use strict';
                              function s (e, o) {
                                var s =
                                  1 < arguments.length && o !== undefined ? arguments[1] : '';
                                return e
                                  ? e.replace(/([^"]*)"/g, function (e, o) {
                                      return /\\/.test(o) ? o + '"' : o + '\\"';
                                    })
                                  : s;
                              }
                              (o.__esModule = !0), (o.escapeQuotes = s);
                            },
                            function (e, o) {
                              'use strict';
                              function l (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = t.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function u (e, o) {
                                var s = e.stream,
                                  t = l(o());
                                return (e.stream = s), t;
                              }
                              function d (e, o) {
                                var s = o.pop();
                                e.prepend('</' + s.tagName + '>');
                              }
                              function b () {
                                var e = [];
                                return (
                                  (e.last = function () {
                                    return this[this.length - 1];
                                  }),
                                  (e.lastTagNameEq = function (e) {
                                    var o = this.last();
                                    return (
                                      o && o.tagName && o.tagName.toUpperCase() === e.toUpperCase()
                                    );
                                  }),
                                  (e.containsTagName = function (e) {
                                    for (var o, s = 0; (o = this[s]); s++)
                                      if (o.tagName === e) return !0;
                                    return !1;
                                  }),
                                  e
                                );
                              }
                              function s (s, t, o) {
                                function n () {
                                  var e = u(s, o);
                                  e && i[e.type] && i[e.type](e);
                                }
                                var r = b(),
                                  i = {
                                    startTag: function a (e) {
                                      var o = e.tagName;
                                      'TR' === o.toUpperCase() && r.lastTagNameEq('TABLE')
                                        ? (s.prepend('<TBODY>'), n())
                                        : t.selfCloseFix && m.test(o) && r.containsTagName(o)
                                        ? r.lastTagNameEq(o)
                                          ? d(s, r)
                                          : (s.prepend('</' + e.tagName + '>'), n())
                                        : e.unary || r.push(e);
                                    },
                                    endTag: function c (e) {
                                      r.last()
                                        ? t.tagSoupFix && !r.lastTagNameEq(e.tagName)
                                          ? d(s, r)
                                          : r.pop()
                                        : t.tagSoupFix && (o(), n());
                                    },
                                  };
                                return function e () {
                                  return n(), l(o());
                                };
                              }
                              (o.__esModule = !0), (o['default'] = s);
                              var t = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                m = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, o) {
                        'use strict';
                        function t (e) {
                          return null != e;
                        }
                        function s (e) {
                          return 'function' == typeof e;
                        }
                        function n (e, o, s) {
                          var t = void 0,
                            n = (e && e.length) || 0;
                          for (t = 0; t < n; t++) o.call(s, e[t], t);
                        }
                        function r (e, o, s) {
                          for (var t in e) e.hasOwnProperty(t) && o.call(s, t, e[t]);
                        }
                        function i (s, e) {
                          return (
                            (s = s || {}),
                            r(e, function (e, o) {
                              t(s[e]) || (s[e] = o);
                            }),
                            s
                          );
                        }
                        function a (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (t) {
                            var o =
                              ((s = []),
                              n(e, function (e) {
                                s.push(e);
                              }),
                              { v: s });
                            if ('object' === (void 0 === o ? 'undefined' : b(o))) return o.v;
                          }
                          var s;
                        }
                        function c (e) {
                          return e[e.length - 1];
                        }
                        function l (e, o) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(o)
                          );
                        }
                        function u (e) {
                          return l(e, 'script');
                        }
                        function d (e) {
                          return l(e, 'style');
                        }
                        o.__esModule = !0;
                        var b =
                          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e;
                              }
                            : function (e) {
                                return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                              };
                        (o.existy = t),
                          (o.isFunction = s),
                          (o.each = n),
                          (o.eachKey = r),
                          (o.defaults = i),
                          (o.toArray = a),
                          (o.last = c),
                          (o.isTag = l),
                          (o.isScript = u),
                          (o.isStyle = d);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/unescapeHtmlCode.js': {
                script: function (e, o, s) {
                  'use strict';
                  var t = s('@adobe/reactor-document').createElement('div');
                  e.exports = function (e) {
                    return (t.innerHTML = e), t.textContent || t.innerText || e;
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js': {
                script: function (e, o, s) {
                  'use strict';
                  var t = s('@adobe/reactor-promise');
                  e.exports = function (e, o) {
                    return { code: '<script>\n' + o + '\n</script>', promise: t.resolve() };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js': {
                script: function (e, o, s) {
                  'use strict';
                  var r = s('@adobe/reactor-promise'),
                    i = 0;
                  e.exports = function (t, e) {
                    var n = '_runScript' + ++i,
                      o = new r(function (e, s) {
                        _satellite[n] = function (o) {
                          delete _satellite[n],
                            new r(function (e) {
                              e(o.call(t.event.element, t.event, t.event.target, r));
                            }).then(e, s);
                        };
                      });
                    return {
                      code:
                        '<script>_satellite["' +
                        n +
                        '"](function(event, target, Promise) {\n' +
                        e +
                        '\n});</script>',
                      promise: o,
                    };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateHtmlCode.js': {
                script: function (e, o, s, t) {
                  'use strict';
                  var n = s('@adobe/reactor-promise'),
                    r = 0,
                    i = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite._onCustomCodeSuccess = function (e) {
                      var o = i[e];
                      o && (delete i[e], o.resolve());
                    }),
                    (window._satellite._onCustomCodeFailure = function (e) {
                      var o = i[e];
                      o && (delete i[e], o.reject());
                    });
                  var a = function (e) {
                      return -1 !== e.indexOf('${reactorCallbackId}');
                    },
                    c = function (e, o) {
                      return e.replace(/\${reactorCallbackId}/g, o);
                    },
                    l = function (e) {
                      return e.settings.isExternal;
                    };
                  e.exports = function (e, o) {
                    var s;
                    return (
                      l(e) && (o = t.replaceTokens(o, e.event)),
                      a(o)
                        ? ((s = new n(function (e, o) {
                            i[String(r)] = { resolve: e, reject: o };
                          })),
                          (o = c(o, r)),
                          (r += 1))
                        : (s = n.resolve()),
                      { code: o, promise: s }
                    );
                  };
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, o, s) {
                  'use strict';
                  var t = s('@adobe/reactor-load-script'),
                    n = s('@adobe/reactor-promise'),
                    r = {},
                    i = {},
                    a = function (e) {
                      return i[e] || (i[e] = t(e)), i[e];
                    };
                  (_satellite.__registerScript = function (e, o) {
                    r[e] = o;
                  }),
                    (e.exports = function (o) {
                      return r[o]
                        ? n.resolve(r[o])
                        : new n(function (e) {
                            a(o).then(
                              function () {
                                e(r[o]);
                              },
                              function () {
                                e();
                              }
                            );
                          });
                    });
                },
              },
              'core/src/lib/events/helpers/createBubbly.js': {
                script: function (e, o, s) {
                  'use strict';
                  var t = s('./weakMap'),
                    m = s('./matchesProperties'),
                    p = s('./matchesSelector');
                  e.exports = function () {
                    var d = [],
                      b = new t(),
                      e = {
                        addListener: function (e, o) {
                          d.push({ settings: e, callback: o });
                        },
                        evaluateEvent: function (o, e) {
                          if (d.length && !b.has(o)) {
                            for (var s = o.target, t = !1; s; ) {
                              for (var n = !1, r = !1, i = 0; i < d.length; i++) {
                                var a = d[i],
                                  c = a.settings.elementSelector,
                                  l = a.settings.elementProperties;
                                if (
                                  (!1 !== a.settings.bubbleFireIfChildFired || !t) &&
                                  (s === o.target || !1 !== a.settings.bubbleFireIfParent) &&
                                  (s === o.target || c || (l && Object.keys(l).length)) &&
                                  (!c || p(s, c)) &&
                                  (!l || m(s, l))
                                ) {
                                  var u = {};
                                  e
                                    ? Object.keys(o).forEach(function (e) {
                                        u[e] = o[e];
                                      })
                                    : (u.nativeEvent = o),
                                    (u.element = s),
                                    (u.target = o.target),
                                    !1 !== a.callback(u) &&
                                      ((r = !0), a.settings.bubbleStop && (n = !0));
                                }
                              }
                              if (n) break;
                              r && (t = !0), (s = s.parentNode);
                            }
                            b.set(o, !0);
                          }
                        },
                        __reset: function () {
                          d = [];
                        },
                      };
                    return e;
                  };
                },
              },
              'core/src/lib/events/helpers/weakMap.js': {
                script: function (e, o, s) {
                  'use strict';
                  var t = s('@adobe/reactor-window').WeakMap;
                  if (void 0 === t) {
                    var n = Object.defineProperty,
                      r = Date.now() % 1000000000;
                    (t = function () {
                      this.name = '__st' + ((1000000000 * Math.random()) >>> 0) + r++ + '__';
                    }).prototype = {
                      set: function (e, o) {
                        var s = e[this.name];
                        return (
                          s && s[0] === e
                            ? (s[1] = o)
                            : n(e, this.name, { value: [e, o], writable: !0 }),
                          this
                        );
                      },
                      get: function (e) {
                        var o;
                        return (o = e[this.name]) && o[0] === e ? o[1] : undefined;
                      },
                      delete: function (e) {
                        var o = e[this.name];
                        return !(!o || o[0] !== e || ((o[0] = o[1] = undefined), 0));
                      },
                      has: function (e) {
                        var o = e[this.name];
                        return !!o && o[0] === e;
                      },
                    };
                  }
                  e.exports = t;
                },
              },
              'core/src/lib/events/helpers/matchesProperties.js': {
                script: function (e, o, s) {
                  'use strict';
                  var n = s('./../../helpers/textMatch'),
                    r = function (e, o) {
                      return '@text' === o || 'innerText' === o
                        ? e.textContent || e.innerText
                        : o in e
                        ? e[o]
                        : e.getAttribute
                        ? e.getAttribute(o)
                        : void 0;
                    };
                  e.exports = function (t, e) {
                    return (
                      !e ||
                      e.every(function (e) {
                        var o = r(t, e.name),
                          s = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                        return n(o, s);
                      })
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/matchesSelector.js': {
                script: function (e, o, s, n) {
                  'use strict';
                  e.exports = function (e, o) {
                    var s = e.matches || e.msMatchesSelector;
                    if (s)
                      try {
                        return s.call(e, o);
                      } catch (t) {
                        return (
                          n.logger.warn(
                            'Matching element failed. ' + o + ' is not a valid selector.'
                          ),
                          !1
                        );
                      }
                    return !1;
                  };
                },
              },
              'core/src/lib/helpers/textMatch.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, o) {
                    if (null == o) throw new Error('Illegal Argument: Pattern is not present');
                    return (
                      null != e &&
                      ('string' == typeof o ? e === o : o instanceof RegExp && o.test(e))
                    );
                  };
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP2e2f86ba46954a2b8a2b3bb72276b9f8/',
          },
          'adobe-contexthub': {
            displayName: 'Adobe ContextHub',
            modules: {},
            settings: { dataSchemaType: 'default' },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP76cc9a1cb360441db5c7bfb163c22e2b/',
          },
        },
        company: { orgId: '25823F955A99D5040A495C1D@AdobeOrg' },
        property: {
          name: 'D+ Web',
          settings: {
            domains: ['disney.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RL7555a88c6c034725970ff470fcfec2d6',
            name: 'Disney+ BlueKai Global Site Tag - All Pages - MLPs',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC143b0f3d46824ba29bd0158dd910f07d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL8f284dac781a4f2d9ac3f3b0eb5af125',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Oath',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isPreviewPage%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6fd66e6925cb4946bd300c2557f806bc-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCf03948c155e04e2d9740a8caadaa3769-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL22187378673d48c1bc44a7cb72d774a4',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Amazon ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isRegionNorthAmerica%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCaefcc36bf7574ac6a37a590118d0bc26-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLcfb0dceb1245462d8fbf4f501defc399',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Bing Ads - US ONLY - Hulu',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6141b0fa47eb4188819084b55062c5c0-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCf6405927b4f745b19f9429b1fd5c6b35-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL6700a042c4f040d7a65eee6620996d85',
            name: 'Web | PAY: Payment Success: New Member Monthly - Twitter - EMEA',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionEMEA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC0d588b04980f47c7a59f2fedf87f5300-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL29413a6f71674b0f97b3b653d247c0e6',
            name: 'Web | Disney Plus | mProduct 2 | Bing',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC0a300bb65e00410986b29acce29abfaf-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc3fd1dd1d49845e1b380678610971873',
            name:
              'Web | PAY: Payment Success: Disney + Super Bundle - Google Ads - US ONLY - Hulu',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCff4c77dd304840e7becf8ffc71176b9e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL560a278348064997bcf39898d08d4217',
            name: 'Web | PAY: Payment Success: New Member Monthly - Amazon IT',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryIT%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC4657f9f5a00142a8954793f3f47a7751-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL74cee3bf93f5452098e1a65e9a950c9c',
            name: 'Web | PAY: Payment Success: New Member Annual  -Twitter - APAC ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionAPAC%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC8428a9c25d5d4fb4b56d35e64be0648b-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL25fd8530930e4ec49e25299ffb942799',
            name: 'Web | MLP: web.disneyplus.com: Enter Email - Google Floodlight',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') &&
                      _satellite.getVar('isSignUpPage') &&
                      !_satellite.getVar('isPasswordPage') &&
                      !_satellite.getVar('isBillingPage')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC08a5210ead6842e98d48a32ab8a6d61a-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL18a96a71bea54214b0f92c31e3372982',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Amazon  IT',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryIT%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6a7a2202a54642eb8f6e5f5e797205fa-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2775d3f7068741b1a3253d5c5f81f2be',
            name:
              'Web | PAY: Payment Success: Disney + Super Bundle - Google Floodlight - US ONLY - ESPN+',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCdece51462e35480d90f5a06f6e6e2174-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL30da912f837d4981b6a488ae411c4644',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual | Facebook Pixel',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCd25a991821ce42bc9b3e9c53fe5a86ac-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL47b7bf74a6fa46fb9ea1801ce484fdc0',
            name: 'Web | PAY: Payment Success: New Member Annual - Twitter - CA ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryCA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC1ead9a429bfe44b7b9af93f5fb53553e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc9033b929be64f95960a0a3ec9fd6b47',
            name: 'Web | MLP: web.disneyplus.com: Welcome Page - Youtube',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isWelcomePage%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC7f35ff17f0a94cd393b218d0d2445d8c-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLadda2c4ea9434186817d4acc7fe9f74c',
            name: 'Web | PAY: Payment Success: New Member Monthly | Impact Radius ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isRegionLATAM%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isFTcampaignCode%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isFTvoucherCode%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC91b077d04be448e6b5fb4a9f79e3f1de-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL73332bc910a44647811e7b8de0cfbe0c',
            name: 'Web | PAY: Payment Success: New Member Monthly - Amazon ES',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryES%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC41a90cbbcbb349af82090c2d4bae47d4-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLfcd0ea7cdfb64cf5adc6ed99ee6a12e1',
            name: 'Web | PAY: Payment Success: Bundle Upgrade - Oath',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCa5815dd2f9344ad291c677977f362458-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCf267e18d6fc14ebd91e00c6158bd1f54-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL758dcd771e844fb9b93b7e9a82eef55e',
            name: 'Web | PAY: Payment Success: New Member Monthly - Amazon ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isRegionNorthAmerica%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC024bd063349243bdaa2fa7835213bf69-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf87e9f9ada0e49328dda8533d7beb32c',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Flashtalking US ONLY ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCfee146175d0f417ea959bf64f7d5d6ca-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL45cd17e53d4340b0a75018cc4d45e556',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Amazon  GB',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryGB%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCdc3fcacea04444e983e041ace3c04c7b-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL1d1cbdf906c6473d989c61d89f17f0ca',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Twitter - LATAM ',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionLATAM%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCe1e6417ce37a435eaea0d71edf331495-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL702e5b65782644f486ef7ca998403060',
            name: 'Web | MLP: web.disneyplus.com: Password - Youtube',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') && _satellite.getVar('isPasswordPage')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC145f301e700249378a282c63ee4ab85d-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL70944b79d9a3478fb4ac33395645d48f',
            name:
              'Web | PAY: Payment Success: Disney + Super Bundle - Facebook - US ONLY - ESPN+ ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC1d19420a14ef466491cb9dcf7041c195-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLaa6550e77011476fa81a6dfa85f555fe',
            name: 'Web | PAY: Payment Success: New Member Monthly - Google Ads',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC0c3f8fd068a74c88a4b48f4689482eca-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9d8df0d5500946ffba3558b73b481df5',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Twitter - CA ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryCA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCea9feb20a1d6488ebbef512de3847a85-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2a51e3b83529468f994a0d12203787c8',
            name: 'Web | MLP: web.disneyplus.com: Welcome Page - Youtube  Awareness',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isWelcomePage%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC1399de426f514a6aaf6df92fd508de87-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL19cdd27cbcb94d6c9e5ab0676c2f636c',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual | Impact Radius ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isRegionLATAM%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isFTcampaignCode%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isFTvoucherCode%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC7c5b38e17cff474aab4e89bc6f65fa96-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL284018c656844b5bbc8b0c7a1d0f20f1',
            name: 'Web | PAY: Payment Success: New Member Monthly - Bing Ads ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC09d37b59ed2147af8c47a56282ed0ccd-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL559c7e5b2fd7462dafc8b8f6d282ed3e',
            name: 'Web | PAY: Payment Success: New Member Monthly - Oath  EMEA',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionEMEA%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCc49e3dffceae4f96a275e7e7823311e6-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCc475ba2023c84d5f89dccd4b64fbb400-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf6e3cc3826184781b32e87510c197143',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Oath- US ONLY - Hulu',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCc09e0715bcb9452abb03b9b6dae7e2cf-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL430c138aa9794410aff40f0c8cc73b39',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual -Oath  EMEA',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionEMEA%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC2a05a066783c4366b4f422078bd2d09a-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCa5b5bad7b1a4467b803af7a8c11bfec2-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL48505cabfbaf40bd9e3c3b890bcf6d86',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Twitter - EMEA ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionEMEA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6fb636dc35184bbfb69660ea53458603-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL62f9c67dfb154ce78c8e546d48bc9c67',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Impact Radius ESPN+ ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isEx_cidESPN%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC7f7f10cace3b413787aa333e182f465d-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC02a4f34c211a4782bae95bc6a3449e81-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa01dab16e6824ea3964f3b08f4d356e5',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Amazon  FR',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryFR%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6b343488d42941e0a809ce045de3e92e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9ef64d0acdc4463e893de336582c1bb4',
            name: 'Web | Disney Plus | mProduct 2 | Google Floodlight',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC54f6363709d44818a6769ae76c32aec9-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL83929575dc3b449594df59bf9722a434',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Flashtalking',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isPreviewPage%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC3ad49503f2244b4e8b4b1c057053947a-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL36ab224825b24346b2ff2991a1c3c97e',
            name: 'Web | PAY: Payment Success: Bundle Upgrade - Flashtalking ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCf0d601e2d3c24defb60861cc39043394-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL08426ec7e88645f7a9b2e4a770da996a',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Twitter - EMEA',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionEMEA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDataLayerPresent%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC891da2e39f13480a878d920874b6b191-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL63d9fbf895174694bea3374d7b254fe1',
            name: 'D+ Google Library Load (dynamicPageIsDisplayed))',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 48,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCd34aa9d9cb2a4a8f8a49c8aa48915c4b-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa2b87e26a24d4ce78938553c1f9dcad8',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual | Flashtalking ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC2f08b268d2f646849d1149ec6c7ffa27-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2e00441f87b8414790b49e4cb12ee0bc',
            name:
              'Web | PAY: Payment Success: Disney + Super Bundle - Flashtalking US ONLY - ESPN+',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC3e8ecbc4f5a548daa819a943fa273a10-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5d76c45dc0414d6db6effda8854bfa91',
            name: 'Web | Disney Plus  | mProduct 2 | Facebook',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC4e3b336ba85c47599d8a35ad763f595c-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLea4392a4df694b26b8f5ce08ddd67eec',
            name: 'Web | MLP: web.disneyplus.com: Billing -  Youtube',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') && _satellite.getVar('isBillingPage')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC12b8847e5d1d4b55aceefd053592b764-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLabeefdff4ec54e439598acae74b81b1b',
            name: 'Web | PAY: Payment Success: New Member Monthly - Amazon  FR',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryFR%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC8b14527400bb47e7af09989543de106e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL424c610c5d4c4a23b8e9e5345bcba808',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Impact - US ONLY ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isEx_cidESPN%' },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCaec28323a407449b9bf6fbff9f150dfb-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5ead5237b2d944c1b565b1fca39de236',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Google Floodlight',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') && !_satellite.getVar('isPreviewPage')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC9a216eb8b9d947329ba3ebdb8605b8ca-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb708125ae83445a1a5b11efacf375df8',
            name: 'Web | DisneyPlus | Payment Success | New Member Monthly | Snapchat',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isRegionEMEA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isCountryGroupEMEA%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC4373496ddf6149be848e4f9eb96ab57b-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf100e80fbd79441a8f7d71cbfc9b63ba',
            name: 'Web | PAY: Payment Success: Bundle Upgrade - Twitter',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCa19d7864ebfd46d19d3913de07b129eb-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLab4a76c4e4b44c028c105d16edc55e82',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual -Oath ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCdf50821a55c84f09ab9218446c801f81-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC0c6f0138233c42b5bf026969069fe4d1-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLd9b8d3e4e3864d75aa97da2651c85f50',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Flashtalking',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTruthy' }, leftOperand: '%dssDL.pageURL%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC38352a217283455b8fcd3736236790f7-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL6aede34b8e384e0a9f7d728aa5720fdd',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Bing Ads',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isPreviewPage%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC67b9624d43c64e6690e2cd6d33a745da-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL405b8c8afaad48a3b960e474ec620caa',
            name: 'Web | PAY: Payment Success: New Member Annual - Twitter - LATAM ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionLATAM%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCc804d637bf084d7e81b138dcfd967b83-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL36261a7a329c4ba6b94e0c737d208616',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual | Impact Radius - Free Trail',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isFTcampaignCode%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isFTvoucherCode%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCba8e2ad8161e41c4a7f72948b49762b8-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf49e776b7a414b43b32d330759ad58a8',
            name: 'Web | Disney Plus | mProduct 2 | Flashtalking',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6a9f26d8e7c14376a305580d25f0e074-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL964ac6655df2485089e2916a72de637f',
            name: 'Web | MLP: web.disneyplus.com: Facebook InitiateCheckout ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') &&
                      _satellite.getVar('isSignUpPage') &&
                      !_satellite.getVar('isPasswordPage') &&
                      !_satellite.getVar('isBillingPage')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC40acbc0a4e2a444991a44a76b32cb4be-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLab9f63520740437a85016a92108d296c',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Twitter - US ONLY ESPN+',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC87fe6028991e462d9268944485d92ce0-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL20072ed4f43641be899eb2aa930adb7d',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Facebook ',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC86db4b7be8424ace8bf285b05f3a51a1-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2b664eed0955459997c49dd12e40a9d0',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Oath- US ONLY ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCce20ef189dd840bc980296c5b2b58122-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC9abbdd1ea18b4792a13f122c2fbbc4a3-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9a1730c8ad904c80b029ba2bdc9f3c67',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Twitter - LATAM ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionLATAM%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCffb324e9bf024dc28fc62ea27df70169-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb545e7fc576e4fc69f135b37f5db15e1',
            name: 'Web | Disney Plus | mProduct 2 | US | Youtube',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCeb2c58c5752649d58ea6fb1d4c6556d3-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL6a39a10e301a4a4e8ce47d5967d1af26',
            name: 'Web | Disney Plus | mProduct 2 | Impact Radius',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC428a4ccc016d4724a1c7af743f844232-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL82453ed03fb0408da8b2ebd40830db19',
            name: 'Web | Disney Plus | mProduct 2 | Twitter',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCb41fa4f27c35420ca4b18f5a9cfc7e6e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf454c290086449db9464a222e9c031eb',
            name: 'Web | MLP: web.disneyplus.com: Password - Google Floodlight',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') && _satellite.getVar('isPasswordPage')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCdb2fd03b0691472e9f046f92e094801d-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLd14ee844af6c4ccea3b58bd2b767f832',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Twitter - APAC ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionAPAC%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCc6e6c7c8307b41a585355396e9e84c9c-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLabfbdf437d404073a119bd0e366128fb',
            name: 'Web | PAY: Payment Success: New Member Monthly | Facebook Pixel ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC0d925c3d6f4f471ca66c70f7064c3192-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL0a2bf01067144c109efd85da76a7eecb',
            name: 'Web | Disney Plus | mProduct 2 | UK | Amazon ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryGB%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC7b12aeef86db44a2b1c43e4f6f2cb71e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa76154d2b7b243acbb7691b8c9c68564',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Bing Ads - US ONLY ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC19c3d1ca0a244f7fa89a4fa5e31fd413-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4003b11a57f94b39bc438da35945885b',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Twitter - US ',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDataLayerPresent%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC8694fe646a2e4639aa22b61df9d2f813-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL807742d100fd45f2b74e61ba0fbf2a16',
            name: 'Web | Disney Plus | mProduct 2 | Google Ads',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC3d91cc50cb7848f0a527cb3ebdaac918-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb3ff7cf7a2f54f3891c86943e1962f35',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Impact Radius ESPN+',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isEx_cidESPN%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCc76c63f80dfb4df5bc7e63ef3577ce13-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC0a1937e7d20b4ed48785a60f16277ae5-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc63a25830d2145b6a677e6852caba835',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Bing Ads',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC201b75ab0a67481c941d8a832f6ff1a7-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLd41a1aaf8cbf4839a8cde8ba66826518',
            name: 'Global Functions and Variables',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 47 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'var flashtalkingParms = [\n  ["D9cc.U2","dssDL.pageName"],\n  ["D9cc.U5","dssDL.userProductSku"],\n  ["D9cc.U6","dssDL.userProductName"],\n  ["D9cc.U9","dssDL.countryCode"],\n];\nfunction createFlashtalkingURLParms(){\n  return createURLParms(flashtalkingParms)\n}\nfunction createURLParms(inputParmsArray){\n  var result = "";\n  for (var i = 0; i < inputParmsArray.length; i++)\n    result = result +  "&" + inputParmsArray[i][0] + "=" + _satellite.getVar(inputParmsArray[i][1]);\n  return result;\n}\n\nvar allCountries = {\n"af": {"Country": "Afghanistan", "Region": "APAC", "SiteID": "82820"},\n"ax": {"Country": "Aland Islands", "Region": "EMEA", "SiteID": "80642"},\n"al": {"Country": "Albania", "Region": "EMEA", "SiteID": "80642"},\n"dz": {"Country": "Algeria", "Region": "EMEA", "SiteID": "80642"},\n"as": {"Country": "American Samoa", "Region": "North America", "SiteID": "79557"},\n"ad": {"Country": "Andorra", "Region": "EMEA", "SiteID": "80642"},\n"ao": {"Country": "Angola", "Region": "EMEA", "SiteID": "80642"},\n"ai": {"Country": "Anguilla", "Region": "EMEA", "SiteID": "80642"},\n"ar": {"Country": "Argentina", "Region": "LATAM", "SiteID": "82815",\n      "Google_Conversion_Id": "590301971",\n      "Google_Conversion_Label": "iAQ9CJKJ1uEBEJOWvZkC",\n      "Google_Conversion_Welcome": "X__WCL2K1uEBEJOWvZkC",\n      "Google_Conversion_EnterEmail": "rDe2CNqw8OEBEJOWvZkC",\n      "Google_Conversion_Password": "-IhbCLmf_-EBEJOWvZkC",\n      "Google_Conversion_Billing": "dzVACJO25OEBEJOWvZkC",\n      "Google_Conversion_Monthly": "rPnTCPf9_uEBEJOWvZkC",\n      "Google_Conversion_Yearly": "fj3zCLbO8OEBEJOWvZkC"},\n"am": {"Country": "Armenia", "Region": "EMEA", "SiteID": "80642"},\n"aw": {"Country": "Aruba", "Region": "EMEA", "SiteID": "80642"},\n"au": {"Country": "Australia", "Region": "APAC", "SiteID": "82818",\n       "Google_Conversion_Id": "722631967",\n       "Google_Conversion_Label": "inT2CKSE96kBEJ_6ydgC",\n       "Google_Conversion_Welcome": "bmP8CP-76akBEJ_6ydgC",\n       "Google_Conversion_EnterEmail": "p1nECLCE96kBEJ_6ydgC",\n       "Google_Conversion_Password": "VzYJCISF96kBEJ_6ydgC",\n       "Google_Conversion_Billing": "0S--CPnzyLEBEJ_6ydgC",\n       "Google_Conversion_Monthly": "olYYCMC-6akBEJ_6ydgC",\n       "Google_Conversion_Yearly": "GEnLCNr57akBEJ_6ydgC",\n       "Google_Conversion_Bundle": "u_VSCNHxwrEBEJ_6ydgC"},\n"at": {"Country": "Austria", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677756982", \n       "Google_Conversion_Label": "exBTCPXHm8MBELaAl8MC",\n       "Google_Conversion_Welcome": "Lyv3COj3pMMBELaAl8MC",\n       "Google_Conversion_EnterEmail": "iORdCLeli8MBELaAl8MC",\n       "Google_Conversion_Password": "8_7oCNLIm8MBELaAl8MC",\n       "Google_Conversion_Billing": "EtEOCMzIm8MBELaAl8MC",\n       "Google_Conversion_Monthly": "T97BCLqli8MBELaAl8MC",\n       "Google_Conversion_Yearly": "toFRCP7Hm8MBELaAl8MC"},\n"bh": {"Country": "Bahrain", "Region": "EMEA", "SiteID": "80642"},\n"bd": {"Country": "Bangladesh", "Region": "APAC", "SiteID": "82820"},\n"be": {"Country": "Belgium", "Region": "EMEA", "SiteID": "80642"},\n"bz": {"Country": "Belize", "Region": "LATAM", "SiteID": "82815"},\n"bj": {"Country": "Benin", "Region": "EMEA", "SiteID": "80642"},\n"bm": {"Country": "Bermuda", "Region": "EMEA", "SiteID": "80642"},\n"bt": {"Country": "Bhutan", "Region": "APAC", "SiteID": "82820"},\n"bo": {"Country": "Bolivia, Plurinational State of", "Region": "LATAM", "SiteID": "82815"},\n"bq": {"Country": "Bonaire, Sint Eustatius and Saba", "Region": "EMEA", "SiteID": "80642"},\n"ba": {"Country": "Bosnia and Herzegovina", "Region": "EMEA", "SiteID": "80642"},\n"bw": {"Country": "Botswana", "Region": "EMEA", "SiteID": "80642"},\n"bv": {"Country": "Bouvet Island", "Region": "EMEA", "SiteID": "80642"},\n"br": {"Country": "Brazil", "Region": "LATAM", "SiteID": "82815",\n      "Google_Conversion_Id": "590301971",\n      "Google_Conversion_Label": "iAQ9CJKJ1uEBEJOWvZkC",\n      "Google_Conversion_Welcome": "X__WCL2K1uEBEJOWvZkC",\n      "Google_Conversion_EnterEmail": "rDe2CNqw8OEBEJOWvZkC",\n      "Google_Conversion_Password": "-IhbCLmf_-EBEJOWvZkC",\n      "Google_Conversion_Billing": "dzVACJO25OEBEJOWvZkC",\n      "Google_Conversion_Monthly": "rPnTCPf9_uEBEJOWvZkC",\n      "Google_Conversion_Yearly": "fj3zCLbO8OEBEJOWvZkC"},\n"io": {"Country": "British Indian Ocean Territory", "Region": "EMEA", "SiteID": "80642"},\n"bn": {"Country": "Brunei Darussalam", "Region": "APAC", "SiteID": "82820"},\n"bg": {"Country": "Bulgaria", "Region": "EMEA", "SiteID": "80642"},\n"bf": {"Country": "Burkina Faso", "Region": "EMEA", "SiteID": "80642"},\n"bu": {"Country": "Burma", "Region": "APAC", "SiteID": "82819"},\n"bi": {"Country": "Burundi", "Region": "EMEA", "SiteID": "80642"},\n"kh": {"Country": "Cambodia", "Region": "APAC", "SiteID": "82820"},\n"cm": {"Country": "Cameroon", "Region": "EMEA", "SiteID": "80642"},\n"ca": {"Country": "Canada", "Region": "North America", "SiteID": "79557",\n\t"Google_Conversion_Id": "704802860", \n       "Google_Conversion_Label": "aiQDCNS-0rEBEKzgidAC",\n       "Google_Conversion_Welcome": "L7LjCJzE3LEBEKzgidAC",\n       "Google_Conversion_EnterEmail": "yR0CCMnC0rEBEKzgidAC",\n       "Google_Conversion_Password": "MfKkCKDI3LEBEKzgidAC",\n       "Google_Conversion_Billing": "ObokCKSM47EBEKzgidAC",\n       "Google_Conversion_Monthly": "608DCK_G0rEBEKzgidAC",\n       "Google_Conversion_Yearly": "FtTQCPzN3LEBEKzgidAC",\n       "Google_Conversion_Bundle": "ThiZCOfL0rEBEKzgidAC"},\n"cv": {"Country": "Cape Verde", "Region": "EMEA", "SiteID": "80642"},\n"ky": {"Country": "Cayman Islands", "Region": "EMEA", "SiteID": "80642"},\n"cf": {"Country": "Central African Republic", "Region": "EMEA", "SiteID": "80642"},\n"td": {"Country": "Chad", "Region": "EMEA", "SiteID": "80642"},\n"cl": {"Country": "Chile", "Region": "LATAM", "SiteID": "82815",\n      "Google_Conversion_Id": "590246256",\n      "Google_Conversion_Label": "xSKUCIPN5OEBEPDiuZkC",\n      "Google_Conversion_Welcome": "G2CCCMzO5OEBEPDiuZkC",\n      "Google_Conversion_EnterEmail": "rDe2CNqw8OEBEJOWvZkC",\n      "Google_Conversion_Password": "VVkbCIHR5OEBEPDiuZkC",\n      "Google_Conversion_Billing": "k635CNbS5OEBEPDiuZkC",\n      "Google_Conversion_Monthly": "Duw7CPi3_-EBEPDiuZkC",\n      "Google_Conversion_Yearly": "r55qCK3W5OEBEPDiuZkC"},\n"cn": {"Country": "China", "Region": "APAC", "SiteID": "82820"},\n"cx": {"Country": "Christmas Island", "Region": "APAC", "SiteID": "82820"},\n"cc": {"Country": "Cocos (Keeling) Islands", "Region": "APAC", "SiteID": "82820"},\n"co": {"Country": "Colombia", "Region": "LATAM", "SiteID": "82815",\n      "Google_Conversion_Id": "590246256",\n      "Google_Conversion_Label": "xSKUCIPN5OEBEPDiuZkC",\n      "Google_Conversion_Welcome": "G2CCCMzO5OEBEPDiuZkC",\n      "Google_Conversion_EnterEmail": "rDe2CNqw8OEBEJOWvZkC",\n      "Google_Conversion_Password": "VVkbCIHR5OEBEPDiuZkC",\n      "Google_Conversion_Billing": "k635CNbS5OEBEPDiuZkC",\n      "Google_Conversion_Monthly": "Duw7CPi3_-EBEPDiuZkC",\n      "Google_Conversion_Yearly": "r55qCK3W5OEBEPDiuZkC"},\n"km": {"Country": "Comoros", "Region": "EMEA", "SiteID": "80642"},\n"cg": {"Country": "Congo", "Region": "EMEA", "SiteID": "80642"},\n"cd": {"Country": "Congo, the Democratic Republic of the", "Region": "EMEA", "SiteID": "80642"},\n"ck": {"Country": "Cook Islands", "Region": "APAC", "SiteID": "82820"},\n"cr": {"Country": "Costa Rica", "Region": "LATAM", "SiteID": "82815",\n      "Google_Conversion_Id": "590301971",\n      "Google_Conversion_Label": "iAQ9CJKJ1uEBEJOWvZkC",\n      "Google_Conversion_Welcome": "X__WCL2K1uEBEJOWvZkC",\n      "Google_Conversion_EnterEmail": "rDe2CNqw8OEBEJOWvZkC",\n      "Google_Conversion_Password": "-IhbCLmf_-EBEJOWvZkC",\n      "Google_Conversion_Billing": "dzVACJO25OEBEJOWvZkC",\n      "Google_Conversion_Monthly": "rPnTCPf9_uEBEJOWvZkC",\n      "Google_Conversion_Yearly": "fj3zCLbO8OEBEJOWvZkC"},\n"hr": {"Country": "Croatia", "Region": "EMEA", "SiteID": "80642"},\n"cw": {"Country": "Curacao", "Region": "EMEA", "SiteID": "80642"},\n"cy": {"Country": "Cyprus", "Region": "EMEA", "SiteID": "80642"},\n"cz": {"Country": "Czech Republic", "Region": "EMEA", "SiteID": "80642"},\n"dk": {"Country": "Denmark", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677233571", \n       "Google_Conversion_Label": "hmb3CIiPpcMBEKOH98IC",\n       "Google_Conversion_Welcome": "9r42CKjdm8MBEKOH98IC",\n       "Google_Conversion_EnterEmail": "Ahs2CNO7i8MBEKOH98IC",\n       "Google_Conversion_Password": "QFtzCNa7i8MBEKOH98IC",\n       "Google_Conversion_Billing": "Qnj0CLu7i8MBEKOH98IC",\n       "Google_Conversion_Monthly": "vg5nCK7dm8MBEKOH98IC",\n       "Google_Conversion_Yearly": "kT8VCNm7i8MBEKOH98IC"},\n"dj": {"Country": "Djibouti", "Region": "EMEA", "SiteID": "80642"},\n"tp": {"Country": "East Timor", "Region": "APAC", "SiteID": "82820"},\n"ec": {"Country": "Ecuador", "Region": "LATAM", "SiteID": "82815",\n      "Google_Conversion_Id": "590301971",\n      "Google_Conversion_Label": "iAQ9CJKJ1uEBEJOWvZkC",\n      "Google_Conversion_Welcome": "X__WCL2K1uEBEJOWvZkC",\n      "Google_Conversion_EnterEmail": "rDe2CNqw8OEBEJOWvZkC",\n      "Google_Conversion_Password": "-IhbCLmf_-EBEJOWvZkC",\n      "Google_Conversion_Billing": "dzVACJO25OEBEJOWvZkC",\n      "Google_Conversion_Monthly": "rPnTCPf9_uEBEJOWvZkC",\n      "Google_Conversion_Yearly": "fj3zCLbO8OEBEJOWvZkC"},\n"eg": {"Country": "Egypt", "Region": "EMEA", "SiteID": "80642"},\n"sv": {"Country": "El Salvador", "Region": "LATAM", "SiteID": "82815"},\n"gq": {"Country": "Equatorial Guinea", "Region": "EMEA", "SiteID": "80642"},\n"er": {"Country": "Eritrea", "Region": "EMEA", "SiteID": "80642"},\n"ee": {"Country": "Estonia", "Region": "EMEA", "SiteID": "80642"},\n"et": {"Country": "Ethiopia", "Region": "EMEA", "SiteID": "80642"},\n"fk": {"Country": "Falkland Islands (Malvinas)", "Region": "EMEA", "SiteID": "80642"},\n"fo": {"Country": "Faroe Islands", "Region": "EMEA", "SiteID": "80642"},\n"fj": {"Country": "Fiji", "Region": "APAC", "SiteID": "82820"},\n"fi": {"Country": "Finland", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677233571", \n       "Google_Conversion_Label": "hmb3CIiPpcMBEKOH98IC",\n       "Google_Conversion_Welcome": "9r42CKjdm8MBEKOH98IC",\n       "Google_Conversion_EnterEmail": "Ahs2CNO7i8MBEKOH98IC",\n       "Google_Conversion_Password": "QFtzCNa7i8MBEKOH98IC",\n       "Google_Conversion_Billing": "Qnj0CLu7i8MBEKOH98IC",\n       "Google_Conversion_Monthly": "vg5nCK7dm8MBEKOH98IC",\n       "Google_Conversion_Yearly": "kT8VCNm7i8MBEKOH98IC"},\n"fr": {"Country": "France", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677812612", \n       "Google_Conversion_Label": "I2I7CPzFm8MBEISzmsMC",\n       "Google_Conversion_Welcome": "IDIsCJ2ai8MBEISzmsMC",\n       "Google_Conversion_EnterEmail": "XxCjCKShi8MBEISzmsMC",\n       "Google_Conversion_Password": "mdA5CLy7m8MBEISzmsMC",\n       "Google_Conversion_Billing": "jBqrCMjEm8MBEISzmsMC",\n       "Google_Conversion_Monthly": "CjleCILGm8MBEISzmsMC",\n       "Google_Conversion_Yearly": "XRAfCMrGm8MBEISzmsMC"},\n"fx": {"Country": "France Metropolitan", "Region": "EMEA", "SiteID": "80642"},\n"gf": {"Country": "French Guiana", "Region": "EMEA", "SiteID": "80642"},\n"pf": {"Country": "French Polynesia", "Region": "EMEA", "SiteID": "80642"},\n"tf": {"Country": "French Southern Territories", "Region": "EMEA", "SiteID": "80642"},\n"ga": {"Country": "Gabon", "Region": "EMEA", "SiteID": "80642"},\n"gm": {"Country": "Gambia", "Region": "EMEA", "SiteID": "80642"},\n"de": {"Country": "Germany", "Region": "EMEA", "SiteID": "80638",\n       "Google_Conversion_Id": "677756982", \n       "Google_Conversion_Label": "exBTCPXHm8MBELaAl8MC",\n       "Google_Conversion_Welcome": "Lyv3COj3pMMBELaAl8MC",\n       "Google_Conversion_EnterEmail": "iORdCLeli8MBELaAl8MC",\n       "Google_Conversion_Password": "8_7oCNLIm8MBELaAl8MC",\n       "Google_Conversion_Billing": "EtEOCMzIm8MBELaAl8MC",\n       "Google_Conversion_Monthly": "T97BCLqli8MBELaAl8MC",\n       "Google_Conversion_Yearly": "toFRCP7Hm8MBELaAl8MC"},\n"gh": {"Country": "Ghana", "Region": "EMEA", "SiteID": "80642"},\n"gi": {"Country": "Gibraltar", "Region": "EMEA", "SiteID": "80642"},\n"gb": {"Country": "Great Britain", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677764170", \n       "Google_Conversion_Label": "I3OJCO67i8MBEMq4l8MC",\n       "Google_Conversion_Welcome": "PQURCJqSpcMBEMq4l8MC",\n       "Google_Conversion_EnterEmail": "DE9-CKmSpcMBEMq4l8MC",\n       "Google_Conversion_Password": "M32cCNeQpcMBEMq4l8MC",\n       "Google_Conversion_Billing": "sz3LCKCSpcMBEMq4l8MC",\n       "Google_Conversion_Monthly": "y-jwCN-SpcMBEMq4l8MC",\n       "Google_Conversion_Yearly": "6AtYCNySpcMBEMq4l8MC"},\n"gr": {"Country": "Greece", "Region": "EMEA", "SiteID": "80642"},\n"gl": {"Country": "Greenland", "Region": "EMEA", "SiteID": "80642"},\n"gp": {"Country": "Guadeloupe", "Region": "EMEA", "SiteID": "80642"},\n"gu": {"Country": "Guam", "Region": "North America", "SiteID": "79557"},\n"gt": {"Country": "Guatemala", "Region": "LATAM", "SiteID": "82815"},\n"gg": {"Country": "Guernsey", "Region": "EMEA", "SiteID": "80642"},\n"gn": {"Country": "Guinea", "Region": "EMEA", "SiteID": "80642"},\n"gw": {"Country": "Guinea-Bissau", "Region": "EMEA", "SiteID": "80642"},\n"gy": {"Country": "Guyana", "Region": "LATAM", "SiteID": "82815"},\n"hm": {"Country": "Heard Island and McDonald Islands", "Region": "APAC", "SiteID": "82820"},\n"va": {"Country": "Holy See (Vatican City State)", "Region": "EMEA", "SiteID": "80642"},\n"hn": {"Country": "Honduras", "Region": "LATAM", "SiteID": "82815"},\n"hk": {"Country": "Hong Kong", "Region": "APAC", "SiteID": "82820"},\n"hu": {"Country": "Hungary", "Region": "EMEA", "SiteID": "80642"},\n"is": {"Country": "Iceland", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677233571", \n       "Google_Conversion_Label": "hmb3CIiPpcMBEKOH98IC",\n       "Google_Conversion_Welcome": "9r42CKjdm8MBEKOH98IC",\n       "Google_Conversion_EnterEmail": "Ahs2CNO7i8MBEKOH98IC",\n       "Google_Conversion_Password": "QFtzCNa7i8MBEKOH98IC",\n       "Google_Conversion_Billing": "Qnj0CLu7i8MBEKOH98IC",\n       "Google_Conversion_Monthly": "vg5nCK7dm8MBEKOH98IC",\n       "Google_Conversion_Yearly": "kT8VCNm7i8MBEKOH98IC"},\n"in": {"Country": "India", "Region": "APAC", "SiteID": "82820"},\n"id": {"Country": "Indonesia", "Region": "APAC", "SiteID": "82819"},\n"ir": {"Country": "Iran, Islamic Republic of", "Region": "EMEA", "SiteID": "80642"},\n"iq": {"Country": "Iraq", "Region": "EMEA", "SiteID": "80642"},\n"ie": {"Country": "Ireland", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677764170", \n       "Google_Conversion_Label": "I3OJCO67i8MBEMq4l8MC",\n       "Google_Conversion_Welcome": "PQURCJqSpcMBEMq4l8MC",\n       "Google_Conversion_EnterEmail": "DE9-CKmSpcMBEMq4l8MC",\n       "Google_Conversion_Password": "M32cCNeQpcMBEMq4l8MC",\n       "Google_Conversion_Billing": "sz3LCKCSpcMBEMq4l8MC",\n       "Google_Conversion_Monthly": "y-jwCN-SpcMBEMq4l8MC",\n       "Google_Conversion_Yearly": "6AtYCNySpcMBEMq4l8MC"},\n"im": {"Country": "Isle of Man", "Region": "EMEA", "SiteID": "80642"},\n"il": {"Country": "Israel", "Region": "EMEA", "SiteID": "80642"},\n"it": {"Country": "Italy", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677814079", \n       "Google_Conversion_Label": "B758CJOri8MBEL--msMC",\n       "Google_Conversion_Welcome": "81qCCK7Rm8MBEL--msMC",\n       "Google_Conversion_EnterEmail": "UFwiCKvOm8MBEL--msMC",\n       "Google_Conversion_Password": "nSybCKXRm8MBEL--msMC",\n       "Google_Conversion_Billing": "VnoVCJnRm8MBEL--msMC",\n       "Google_Conversion_Monthly": "JRX1CP6qi8MBEL--msMC",\n       "Google_Conversion_Yearly": "qfQbCJmri8MBEL--msMC"},\n"ci": {"Country": "Ivory Coast", "Region": "EMEA", "SiteID": "80642"},\n"jp": {"Country": "Japan", "Region": "APAC", "SiteID": "82816"},\n"je": {"Country": "Jersey", "Region": "EMEA", "SiteID": "80642"},\n"jo": {"Country": "Jordan", "Region": "EMEA", "SiteID": "80642"},\n"ke": {"Country": "Kenya", "Region": "EMEA", "SiteID": "80642"},\n"ki": {"Country": "Kiribati", "Region": "APAC", "SiteID": "82820"},\n"kr": {"Country": "Korea, Republic of", "Region": "APAC", "SiteID": "82820"},\n"xk": {"Country": "Kosovo", "Region": "EMEA", "SiteID": "80642"},\n"kw": {"Country": "Kuwait", "Region": "EMEA", "SiteID": "80642"},\n"la": {"Country": "Lao People\'s Democratic Republic", "Region": "APAC", "SiteID": "82819"},\n"lv": {"Country": "Latvia", "Region": "EMEA", "SiteID": "80642"},\n"lb": {"Country": "Lebanon", "Region": "EMEA", "SiteID": "80642"},\n"ls": {"Country": "Lesotho", "Region": "EMEA", "SiteID": "80642"},\n"lr": {"Country": "Liberia", "Region": "EMEA", "SiteID": "80642"},\n"ly": {"Country": "Libya", "Region": "EMEA", "SiteID": "80642"},\n"li": {"Country": "Liechtenstein", "Region": "EMEA", "SiteID": "80642"},\n"lt": {"Country": "Lithuania", "Region": "EMEA", "SiteID": "80642"},\n"lu": {"Country": "Luxembourg", "Region": "EMEA", "SiteID": "80642"},\n"mo": {"Country": "Macao", "Region": "APAC", "SiteID": "82820"},\n"mk": {"Country": "Macedonia, the former Yugoslav Republic of", "Region": "EMEA", "SiteID": "80642"},\n"mg": {"Country": "Madagascar", "Region": "EMEA", "SiteID": "80642"},\n"mw": {"Country": "Malawi", "Region": "EMEA", "SiteID": "80642"},\n"my": {"Country": "Malaysia", "Region": "APAC", "SiteID": "82820"},\n"mv": {"Country": "Maldives", "Region": "APAC", "SiteID": "82820"},\n"ml": {"Country": "Mali", "Region": "EMEA", "SiteID": "80642"},\n"mt": {"Country": "Malta", "Region": "EMEA", "SiteID": "80642"},\n"mq": {"Country": "Martinique", "Region": "EMEA", "SiteID": "80642"},\n"mr": {"Country": "Mauritania", "Region": "EMEA", "SiteID": "80642"},\n"mu": {"Country": "Mauritius", "Region": "EMEA", "SiteID": "80642"},\n"yt": {"Country": "Mayotte", "Region": "EMEA", "SiteID": "80642"},\n"mx": {"Country": "Mexico", "Region": "LATAM", "SiteID": "82815",\n      "Google_Conversion_Id": "590306984",\n      "Google_Conversion_Label": "RebfCNnY5OEBEKi9vZkC",\n      "Google_Conversion_Welcome": "iQBqCKzY5OEBEKi9vZkC",\n      "Google_Conversion_EnterEmail": "Cm1ZCOrB_-EBEKi9vZkC",\n      "Google_Conversion_Password": "0-01CJ7d8OEBEKi9vZkC",\n      "Google_Conversion_Billing": "HM3xCN3G_-EBEKi9vZkC",\n      "Google_Conversion_Monthly": "1asYCKnf8OEBEKi9vZkC",\n      "Google_Conversion_Yearly": "1asYCKnf8OEBEKi9vZkC"},\n"md": {"Country": "Moldova, Republic of", "Region": "EMEA", "SiteID": "80642"},\n"mc": {"Country": "Monaco", "Region": "EMEA", "SiteID": "80642"},\n"me": {"Country": "Montenegro", "Region": "EMEA", "SiteID": "80642"},\n"ms": {"Country": "Montserrat", "Region": "EMEA", "SiteID": "80642"},\n"ma": {"Country": "Morocco", "Region": "EMEA", "SiteID": "80642"},\n"mz": {"Country": "Mozambique", "Region": "EMEA", "SiteID": "80642"},\n"na": {"Country": "Namibia", "Region": "EMEA", "SiteID": "80642"},\n"nr": {"Country": "Nauru", "Region": "APAC", "SiteID": "82820"},\n"np": {"Country": "Nepal", "Region": "APAC", "SiteID": "82820"},\n"nl": {"Country": "Netherlands", "Region": "EMEA", "SiteID": "80642"},\n"an": {"Country": "Netherlands-Antilles", "Region": "EMEA", "SiteID": "80642"},\n"nt": {"Country": "Neutral Zone", "Region": "EMEA", "SiteID": "80642"},\n"nc": {"Country": "New Caledonia", "Region": "EMEA", "SiteID": "80642"},\n"nz": {"Country": "New Zealand", "Region": "APAC", "SiteID": "82818",\n       "Google_Conversion_Id": "722631967", \n       "Google_Conversion_Label": "inT2CKSE96kBEJ_6ydgC",\n       "Google_Conversion_Welcome": "bmP8CP-76akBEJ_6ydgC",\n       "Google_Conversion_EnterEmail": "p1nECLCE96kBEJ_6ydgC",\n       "Google_Conversion_Password": "VzYJCISF96kBEJ_6ydgC",\n       "Google_Conversion_Billing": "0S--CPnzyLEBEJ_6ydgC",\n       "Google_Conversion_Monthly": "olYYCMC-6akBEJ_6ydgC",\n       "Google_Conversion_Yearly": "GEnLCNr57akBEJ_6ydgC",\n       "Google_Conversion_Bundle": "u_VSCNHxwrEBEJ_6ydgC"},\n"ni": {"Country": "Nicaragua", "Region": "LATAM", "SiteID": "82815"},\n"ne": {"Country": "Niger", "Region": "EMEA", "SiteID": "80642"},\n"ng": {"Country": "Nigeria", "Region": "EMEA", "SiteID": "80642"},\n"nu": {"Country": "Niue", "Region": "APAC", "SiteID": "82820"},\n"nf": {"Country": "Norfolk Island", "Region": "APAC", "SiteID": "82820"},\n"mp": {"Country": "Northern Mariana Islands", "Region": "North America", "SiteID": "79557"},\n"no": {"Country": "Norway", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677233571", \n       "Google_Conversion_Label": "hmb3CIiPpcMBEKOH98IC",\n       "Google_Conversion_Welcome": "9r42CKjdm8MBEKOH98IC",\n       "Google_Conversion_EnterEmail": "Ahs2CNO7i8MBEKOH98IC",\n       "Google_Conversion_Password": "QFtzCNa7i8MBEKOH98IC",\n       "Google_Conversion_Billing": "Qnj0CLu7i8MBEKOH98IC",\n       "Google_Conversion_Monthly": "vg5nCK7dm8MBEKOH98IC",\n       "Google_Conversion_Yearly": "kT8VCNm7i8MBEKOH98IC"},\n"om": {"Country": "Oman", "Region": "EMEA", "SiteID": "80642"},\n"pk": {"Country": "Pakistan", "Region": "APAC", "SiteID": "82820"},\n"ps": {"Country": "Palestinian Territory, Occupied", "Region": "EMEA", "SiteID": "80642"},\n"pa": {"Country": "Panama", "Region": "LATAM", "SiteID": "82815",\n      "Google_Conversion_Id": "590301971",\n      "Google_Conversion_Label": "iAQ9CJKJ1uEBEJOWvZkC",\n      "Google_Conversion_Welcome": "X__WCL2K1uEBEJOWvZkC",\n      "Google_Conversion_EnterEmail": "rDe2CNqw8OEBEJOWvZkC",\n      "Google_Conversion_Password": "-IhbCLmf_-EBEJOWvZkC",\n      "Google_Conversion_Billing": "dzVACJO25OEBEJOWvZkC",\n      "Google_Conversion_Monthly": "rPnTCPf9_uEBEJOWvZkC",\n      "Google_Conversion_Yearly": "fj3zCLbO8OEBEJOWvZkC"},\n"pg": {"Country": "Papua New Guinea", "Region": "APAC", "SiteID": "82820"},\n"py": {"Country": "Paraguay", "Region": "LATAM", "SiteID": "82815"},\n"pe": {"Country": "Peru", "Region": "LATAM", "SiteID": "82815",\n      "Google_Conversion_Id": "590246256",\n      "Google_Conversion_Label": "xSKUCIPN5OEBEPDiuZkC",\n      "Google_Conversion_Welcome": "G2CCCMzO5OEBEPDiuZkC",\n      "Google_Conversion_EnterEmail": "rDe2CNqw8OEBEJOWvZkC",\n      "Google_Conversion_Password": "VVkbCIHR5OEBEPDiuZkC",\n      "Google_Conversion_Billing": "k635CNbS5OEBEPDiuZkC",\n      "Google_Conversion_Monthly": "Duw7CPi3_-EBEPDiuZkC",\n      "Google_Conversion_Yearly": "r55qCK3W5OEBEPDiuZkC"},\n"ph": {"Country": "Philippines", "Region": "APAC", "SiteID": "82820"},\n"pn": {"Country": "Pitcairn", "Region": "EMEA", "SiteID": "80642"},\n"pl": {"Country": "Poland", "Region": "EMEA", "SiteID": "80642"},\n"pt": {"Country": "Portugal", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677790338", \n       "Google_Conversion_Label": "yqipCNfNm8MBEIKFmcMC",\n       "Google_Conversion_Welcome": "-drQCNTNm8MBEIKFmcMC",\n       "Google_Conversion_EnterEmail": "hpohCMT6pMMBEIKFmcMC",\n       "Google_Conversion_Password": "xPN5CMXNm8MBEIKFmcMC",\n       "Google_Conversion_Billing": "mhtECJHMm8MBEIKFmcMC",\n       "Google_Conversion_Monthly": "55GJCJ2si8MBEIKFmcMC",\n       "Google_Conversion_Yearly": "F0MrCOSoi8MBEIKFmcMC"},\n"pr": {"Country": "Puerto Rico", "Region": "North America", "SiteID": "79557"},\n"qa": {"Country": "Qatar", "Region": "EMEA", "SiteID": "80642"},\n"mm": {"Country": "Republic of the Union of Myanmar", "Region": "APAC", "SiteID": "82819"},\n"re": {"Country": "Reunion", "Region": "EMEA", "SiteID": "80642"},\n"ro": {"Country": "Romania", "Region": "EMEA", "SiteID": "80642"},\n"rw": {"Country": "Rwanda", "Region": "EMEA", "SiteID": "80642"},\n"bl": {"Country": "Saint Barthelemy", "Region": "EMEA", "SiteID": "80642"},\n"sh": {"Country": "Saint Helena, Ascension and Tristan da Cunha", "Region": "EMEA", "SiteID": "80642"},\n"mf": {"Country": "Saint Martin (French part)", "Region": "EMEA", "SiteID": "80642"},\n"pm": {"Country": "Saint Pierre and Miquelon", "Region": "EMEA", "SiteID": "80642"},\n"ws": {"Country": "Samoa", "Region": "APAC", "SiteID": "82820"},\n"sm": {"Country": "San Marino", "Region": "EMEA", "SiteID": "80642"},\n"st": {"Country": "Sao Tome and Principe", "Region": "EMEA", "SiteID": "80642"},\n"sa": {"Country": "Saudi Arabia", "Region": "EMEA", "SiteID": "80642"},\n"sn": {"Country": "Senegal", "Region": "EMEA", "SiteID": "80642"},\n"rs": {"Country": "Serbia", "Region": "EMEA", "SiteID": "80642"},\n"cs": {"Country": "Serbia and Montenegro", "Region": "EMEA", "SiteID": "80642"},\n"sc": {"Country": "Seychelles", "Region": "EMEA", "SiteID": "80642"},\n"sl": {"Country": "Sierra Leone", "Region": "EMEA", "SiteID": "80642"},\n"sg": {"Country": "Singapore", "Region": "APAC", "SiteID": "82820"},\n"sx": {"Country": "Sint Maarten (Dutch part)", "Region": "EMEA", "SiteID": "80642"},\n"sk": {"Country": "Slovakia", "Region": "EMEA", "SiteID": "80642"},\n"si": {"Country": "Slovenia", "Region": "EMEA", "SiteID": "80642"},\n"sb": {"Country": "Solomon Islands", "Region": "APAC", "SiteID": "82820"},\n"so": {"Country": "Somalia", "Region": "EMEA", "SiteID": "80642"},\n"za": {"Country": "South Africa", "Region": "EMEA", "SiteID": "80642"},\n"gs": {"Country": "South Georgia and the South Sandwich Islands", "Region": "EMEA", "SiteID": "80642"},\n"ss": {"Country": "South Sudan", "Region": "EMEA", "SiteID": "80642"},\n"es": {"Country": "Spain", "Region": "EMEA", "SiteID": "80640",\n       "Google_Conversion_Id": "677790338", \n       "Google_Conversion_Label": "yqipCNfNm8MBEIKFmcMC",\n       "Google_Conversion_Welcome": "-drQCNTNm8MBEIKFmcMC",\n       "Google_Conversion_EnterEmail": "hpohCMT6pMMBEIKFmcMC",\n       "Google_Conversion_Password": "xPN5CMXNm8MBEIKFmcMC",\n       "Google_Conversion_Billing": "mhtECJHMm8MBEIKFmcMC",\n       "Google_Conversion_Monthly": "55GJCJ2si8MBEIKFmcMC",\n       "Google_Conversion_Yearly": "F0MrCOSoi8MBEIKFmcMC"},\n"lk": {"Country": "Sri Lanka", "Region": "APAC", "SiteID": "82820"},\n"sr": {"Country": "Suriname", "Region": "LATAM", "SiteID": "82815"},\n"sj": {"Country": "Svalbard and Jan Mayen", "Region": "EMEA", "SiteID": "80642"},\n"sz": {"Country": "Swaziland", "Region": "EMEA", "SiteID": "80642"},\n"se": {"Country": "Sweden", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677233571", \n       "Google_Conversion_Label": "hmb3CIiPpcMBEKOH98IC",\n       "Google_Conversion_Welcome": "9r42CKjdm8MBEKOH98IC",\n       "Google_Conversion_EnterEmail": "Ahs2CNO7i8MBEKOH98IC",\n       "Google_Conversion_Password": "QFtzCNa7i8MBEKOH98IC",\n       "Google_Conversion_Billing": "Qnj0CLu7i8MBEKOH98IC",\n       "Google_Conversion_Monthly": "vg5nCK7dm8MBEKOH98IC",\n       "Google_Conversion_Yearly": "kT8VCNm7i8MBEKOH98IC"},\n"ch": {"Country": "Switzerland", "Region": "EMEA", "SiteID": "80642",\n       "Google_Conversion_Id": "677756982", \n       "Google_Conversion_Label": "exBTCPXHm8MBELaAl8MC",\n       "Google_Conversion_Welcome": "Lyv3COj3pMMBELaAl8MC",\n       "Google_Conversion_EnterEmail": "iORdCLeli8MBELaAl8MC",\n       "Google_Conversion_Password": "8_7oCNLIm8MBELaAl8MC",\n       "Google_Conversion_Billing": "EtEOCMzIm8MBELaAl8MC",\n       "Google_Conversion_Monthly": "T97BCLqli8MBELaAl8MC",\n       "Google_Conversion_Yearly": "toFRCP7Hm8MBELaAl8MC"},\n"sy": {"Country": "Syrian Arab Republic", "Region": "EMEA", "SiteID": "80642"},\n"tw": {"Country": "Taiwan, Province of China", "Region": "APAC", "SiteID": "82820"},\n"tz": {"Country": "Tanzania, United Republic of", "Region": "EMEA", "SiteID": "80642"},\n"th": {"Country": "Thailand", "Region": "APAC", "SiteID": "82820"},\n"tl": {"Country": "Timor-Leste", "Region": "APAC", "SiteID": "82820"},\n"tg": {"Country": "Togo", "Region": "EMEA", "SiteID": "80642"},\n"tk": {"Country": "Tokelau", "Region": "APAC", "SiteID": "82820"},\n"to": {"Country": "Tonga", "Region": "APAC", "SiteID": "82820"},\n"tn": {"Country": "Tunisia", "Region": "EMEA", "SiteID": "80642"},\n"tr": {"Country": "Turkey", "Region": "EMEA", "SiteID": "80642"},\n"tc": {"Country": "Turks and Caicos Islands", "Region": "EMEA", "SiteID": "80642"},\n"tv": {"Country": "Tuvalu", "Region": "APAC", "SiteID": "82820"},\n"ug": {"Country": "Uganda", "Region": "EMEA", "SiteID": "80642"},\n"ua": {"Country": "Ukraine", "Region": "EMEA", "SiteID": "80642"},\n"ae": {"Country": "United Arab Emirates", "Region": "EMEA", "SiteID": "80642"},\n"uk": {"Country": "United Kingdom", "Region": "EMEA", "SiteID": "80642"},\n"us": {"Country": "United States", "Region": "North America", "SiteID": "79557", \n       "Google_Conversion_Id": "722611785", \n       "Google_Conversion_Label": "0bYOCK7Ct7EBEMncyNgC",\n       "Google_Conversion_Welcome": "iQiZCMS4yLEBEMncyNgC",\n       "Google_Conversion_EnterEmail": "aNJ-CPSxwrEBEMncyNgC",\n       "Google_Conversion_Password": "eGf_CJjTt7EBEMncyNgC",\n       "Google_Conversion_Billing": "w2CHCLvGwrEBEMncyNgC",\n       "Google_Conversion_Monthly": "zr3WCOPct7EBEMncyNgC",\n       "Google_Conversion_Yearly": "gE6PCM7KwrEBEMncyNgC",\n       "Google_Conversion_Bundle": "QVHlCNHNwrEBEMncyNgC"},\n"um": {"Country": "United States Minor Outlying Islands", "Region": "North America", "SiteID": "79557"},\n"uy": {"Country": "Uruguay", "Region": "LATAM", "SiteID": "82815",\n      "Google_Conversion_Id": "590301971",\n      "Google_Conversion_Label": "iAQ9CJKJ1uEBEJOWvZkC",\n      "Google_Conversion_Welcome": "X__WCL2K1uEBEJOWvZkC",\n      "Google_Conversion_EnterEmail": "rDe2CNqw8OEBEJOWvZkC",\n      "Google_Conversion_Password": "-IhbCLmf_-EBEJOWvZkC",\n      "Google_Conversion_Billing": "dzVACJO25OEBEJOWvZkC",\n      "Google_Conversion_Monthly": "rPnTCPf9_uEBEJOWvZkC",\n      "Google_Conversion_Yearly": "fj3zCLbO8OEBEJOWvZkC"},\n"vu": {"Country": "Vanuatu", "Region": "APAC", "SiteID": "82820"},\n"ve": {"Country": "Venezuela, Bolivarian Republic of", "Region": "LATAM", "SiteID": "82815"},\n"vn": {"Country": "Viet Nam", "Region": "APAC", "SiteID": "82819"},\n"vg": {"Country": "Virgin Islands, British", "Region": "EMEA", "SiteID": "80642"},\n"vi": {"Country": "Virgin Islands, U.S.", "Region": "North America", "SiteID": "79557"},\n"wf": {"Country": "Wallis and Futuna", "Region": "EMEA", "SiteID": "80642"},\n"eh": {"Country": "Western Sahara", "Region": "EMEA", "SiteID": "80642"},\n"ye": {"Country": "Yemen", "Region": "EMEA", "SiteID": "80642"},\n"yu": {"Country": "Yugoslavia", "Region": "EMEA", "SiteID": "80642"},\n"zr": {"Country": "Zaire", "Region": "EMEA", "SiteID": "80642"},\n"zm": {"Country": "Zambia", "Region": "EMEA", "SiteID": "80642"},\n"zw": {"Country": "Zimbabwe", "Region": "EMEA", "SiteID":"80642"}\n};\n\nfunction getSiteId(countryCode){\n    return (allCountries[countryCode])?allCountries[countryCode].SiteID:"88888";\n}\n\n\nfunction getGoogleConversionIDnConversionLabel(countryCode){\n  return [allCountries[countryCode].Google_Conversion_Id, \n          allCountries[countryCode].Google_Conversion_Label,\n          allCountries[countryCode].Google_Conversion_Welcome,\n           allCountries[countryCode].Google_Conversion_EnterEmail, \n          allCountries[countryCode].Google_Conversion_Password, \n          allCountries[countryCode].Google_Conversion_Billing, \n          allCountries[countryCode].Google_Conversion_Monthly,\n          allCountries[countryCode].Google_Conversion_Yearly,\n         allCountries[countryCode].Google_Conversion_Bundle];\n}\nvar countriesNoPixels = {\n "gf": "",\n "gp": "",\n "mq": "",\n "yt": "",\n "bl": "",\n "mf": "",\n "nc": "",\n "wf": "",\n "mu": "",\n "re": "", \n "ag": "",\n "aw": "",\n "bs": "",\n "bb": "",\n "bz": "",\n "bm": "",\n "bq": "",\n "vg": "",\n "ky": "",\n "cw": "",\n "dm": "",\n "sv": "",\n "gd": "",\n "gy": "",\n "ai": "",\n "ht": "",\n "hn": "",\n "jm": "",\n "fk": "",\n "ms": "",\n "ni": "", \n "gs": "",\n "kn": "",\n "lc": "",\n "vc": "",\n "sr": "",\n "tt": "",\n "tc": "",\n "mc": ""\n};',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL3497a6d7cf51470ab9fb1d279e6eab9e',
            name:
              'Web | PAY: Payment Success: Disney + Super Bundle - Google Ads - US ONLY - ESPN+',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC89f25a665b634ba7bf9d1a974274d1dc-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL476c98c779d745e68a708ce1236c1574',
            name: 'Web | MLP: web.disneyplus.com: Welcome Page - Google Floodlight',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isWelcomePage%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC83cdfb6da3b04c71a835cab8013d9bde-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa509dc86195e4db0b2e870152b65cd26',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual | Bing Ads ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC90a09e6d369e46bf8f45fdc20e489de1-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb5ffcae2f0984f89bb46de12982337f0',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Twitter - CA',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryCA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDataLayerPresent%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6b8e5c5eb7bb4fccb027ca1203e52a76-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL637c31b7a5c948c2a674976b6fa86143',
            name: 'Web | PAY: Payment Success: New Member Monthly - Oath ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6ec834ca538d4c5c959b9d87ef2ca85e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC3e6112b816fd4d4a88049620576f04d4-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb930c1416b9f432396955a457e1baffa',
            name: 'Web | PAY: Payment Success: New Member Monthly - Amazon  GB',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryGB%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC7bd31401226c4765af8d77b098697355-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLdeb468c8ec8f4b47a2bf3db403ca9a1c',
            name: 'Web | Disney Plus | mProduct 2 | US | Amazon',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC5bc6a9de34394599b7a2b48b8655ebb0-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa4651bdd6832414583343854c1634fbb',
            name: 'Web | PAY: Payment Success: New Member Monthly -Twitter - APAC',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionAPAC%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC9201e9435a254ad5b7301825d905fea4-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc8cf968575f34a768bf501dd8b89cea1',
            name: 'Web | DisneyPlus | All Pages | MLPs | Snapchat',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isRegionEMEA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isCountryGroupEMEA%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDataLayerPresent%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC18e1f126b2b74b4995d560c115dcb7d3-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL7efd4516b3c14ea0bb0318a88cf884f5',
            name: 'Web | PAY: Payment Success: New Member Monthly - Twitter - CA',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryCA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCd001db8c91214159bdcfa07181b2fec2-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLda5a472e4f3e4dc48abcef06db45ddec',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Impact Radius ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isEx_cidESPN%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC62c6e3cfb3ca4b19b5116cffa0cc183d-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCa64a7d50e4d94649b65ba17e544d8a4f-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLdb8440f0fdf44b14967915ce7727e635',
            name: 'Web | PAY: Payment Success: New Member Monthly - Twitter - LATAM',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionLATAM%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC4f7bc96e10794bcb88463298ce1dc412-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLbb6fc58368db4c9f9edfbaae562ffee0',
            name: 'Web | PAY: Payment Success: New Member Annual - Twitter - EMEA ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionEMEA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC18824376e9974e2db8907fd44ce467f0-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL37a2b0e8f38c40c18208ce9ddb6f9561',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Google Ads',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC785e0e9b342541b1b9690013a27b6477-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe32b1e5659a0406f9793ccd1ff536d0d',
            name: 'D+ Google Library Load (Window Loaded)',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 48 },
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 48,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTruthy' }, leftOperand: '%dssDL.pageURL%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCc1eeee8c692a476cafc0179dda88c4b0-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLfa435912e5fb40ebba4d538303ad83d4',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Amazon  ES',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryES%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCd52815eb0558434b84acdbdb960905f9-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL0456664045494116b5243c15ee0e0323',
            name:
              'Web | PAY: Payment Success: Disney + Super Bundle - Google Floodlight - US ONLY',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC45e0708f7a2644b98885eec453ffed77-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL0d9bdff2b13441789faad515de9400e5',
            name: 'Web | PAY: Payment Success: New Member Monthly - Google Floodlight ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCeda2b72c14d540d09152bf2417bfe7d7-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL8b4f718e8f954bb2954d2582bfa2fe22',
            name: 'Web | PAY: Payment Success: New Member Monthly - Youtube',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCea72a2988df548879f5381ce19d22809-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL6b3924bbc68240c79c24e55613499253',
            name: 'Web | PAY: Payment Success: Bundle Upgrade - Facebook',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC4101ab1aa9f349589ea75157330e58fd-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL818e6b03ad4446a5b63fcfbd05ef3f87',
            name: 'Web | PAY: Payment Success: New Member Monthly | Impact Radius - Free Trial',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isFTcampaignCode%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isFTvoucherCode%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC56a723a876ca47e2a3ae00fcd14533e4-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb090f32661834da6a87cff772901a1d5',
            name: 'Web | PAY: Payment Success: New Member Monthly - Amazon  DE',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryDE%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC5a6d412a9c224349b8e493064de784ed-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9f8429c54ed64fdaacd0b58e5e594d0f',
            name: 'Web | DisneyPlus | All Pages | Not MLPs_Flow Pages | Snapchat',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') && !_satellite.getVar('isPreviewPage')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isRegionEMEA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isCountryGroupEMEA%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCcc21dbff53a64d1285aaa2b97f9eebf7-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL76617fc768904a14bd84dd198c159a8a',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Youtube - US ONLY',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC1b1c34cda022429cb4649ccd3ec0e663-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9e7f69de2f49490c9f1c09bb54a6e3d6',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Facebook - US ONLY - Hulu',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCc25957a9c9fa4872a164339ab588ba25-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL213a5d538c364dac9cdc7eaa99dca874',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Facebook',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isPreviewPage%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC7a3e3c1e1bf6439496a37d8b9897312b-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9f2336a8efbe4314acff1f66d35e0c48',
            name: 'Web | PAY: Payment Success: Bundle Upgrade - Bing Ads',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCdd47abd9bb754429b385e45e27f92f91-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL673e641fa19e446ca796808d43781ac2',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Oath- US ONLY - ESPN+',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCaea5689a6c7946a4bd12fd52e95ab49e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCb1f863f1abb24650a0c68177acf808b1-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL3593f553dd44445e986d37dd2492a407',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Twitter - US',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC1c82e9ab1b4f40d39e9a5a8092549f93-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL25c5e60ec0d043bca270a5449eb65fe9',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Impact - US ONLY ESPN+',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isEx_cidESPN%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isEplusBundleUpgradePartnerId%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCe2489eaa2bff4af09ac2b7bb17c89aa1-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa82dada751ad4f17af33e5d98c1f38cc',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Facebook - US ONLY',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC36a29bf851984cb3bcba738fdff4dc15-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLeabdab55ac174bec8ef6db0488c398ff',
            name: 'Web | Disney Plus | mProduct 2 | Oath',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%ismProductsku2%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCa89b31fa826443638b8dbc84edebe251-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL82dc543c14fb48a28665d02221fd3460',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Google Floodlight',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDataLayerPresent%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC20d471b0ba894d77ab9c190dac829ae8-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL81a16b4f40584c6aa2f25e396af38a28',
            name: 'Web | PAY: Payment Success: Bundle Upgrade - Google Ads',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC29c91548f3334a80989e49e8012641df-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2d43441c07ed48d08feeab809be59541',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Google Floodlight ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC712cb4670ff049e4ac01d3879b8dae50-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb3ec84fd533b48dba89118f3080d6a57',
            name: 'Web | PAY: Payment Success: Bundle Upgrade - Youtube Awareness',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCc2988770c8014e0caa639d278c20686a-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL7045defb40f04453bcddef55c98592fa',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Youtube',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') && !_satellite.getVar('isPreviewPage')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCefccdab86b7b4166a5fa5b506fb98e06-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9f191f1ecbed48c7a25824a9de48ee27',
            name:
              'Web | PAY: Payment Success: Disney + Super Bundle - Google Floodlight - US ONLY - Hulu',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC791a8b0231394a59af2940683be7a93c-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC4b5aa3389dcd471fb43d04c39d890658-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc3a19f3f57af42c0b5288ef4469a5332',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Youtube',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCdaee82b9d909440083d7268879184ea3-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe61b01d1bef44bc7bb32a03382cd522e',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Twitter - APAC',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionAPAC%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDataLayerPresent%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC1a6f5abac8ce43c990a7b4e82319ea19-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL75a77517940442ffbdc57575fd866d75',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Amazon DE',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryDE%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC3423cefa4bda4ce9b5527d205fb2b79a-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf277b8045dba42d2ae31487f74cd69cc',
            name:
              'Web | PAY: Payment Success: Disney + Super Bundle - Salesforce - US ONLY - Hulu ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCb98e350f81df4f1d9b7e71163c6a04e2-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4eb715916e3b4c21b5d825a547666306',
            name: 'Disney+ BlueKai Global Site Tag - All Pages - Not MLPs ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isPreviewPage%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCd91275f7444e4d42a8114199bc9ad6b5-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL237ab7f5265942a2891c7716dccfc0c6',
            name: 'Web | PAY: Payment Success: New Member Monthly - Twitter - US',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC61cd3bcce24f44dbb13c2b256d42c338-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLdc095e6713e845e89dd994b419f03a37',
            name: 'Web | MLP: web.disneyplus.com: Facebook Complete Registration',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') && _satellite.getVar('isPasswordPage')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCcbbd788559af4a2e8d6296123e4b454b-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL7d620308b71a48b48ab779640fa2835c',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Impact Radius',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isEx_cidESPN%' },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC48ac55b19f5f4e7b82edf864d3146209-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC1abe864625eb41a29037af7fe822cf4b-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL06ee27f211384c48854b7e288b540d08',
            name: 'Web | PAY: Payment Success: New Member Monthly - Amazon  IE',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryIE%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6554bc3977bd4fd3af727ad34b69ace5-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2be282c904424259a99f512b008057c9',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Amazon  AT',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryAT%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC982f73803d1343f98306b1c35181fd09-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4eddd75db24749bea4a0d3e64ba7c51e',
            name: 'Web | PAY: Payment Success: New Member\xA0Annual - Amazon  IE',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryIE%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC1a59a5f6cf274339902bd60b1a954206-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2fec61d2258d4c688c1401334ccf722b',
            name: 'Web | PAY: Payment Success: New Member Monthly | Flashtalking ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCec0d75711cf64d4c9f499b9ad08dcb84-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4564a128072b47149e95260e20faa4a1',
            name:
              'Web | PAY: Payment Success: New Member\xA0Annual | Impact Radius - Free Trail | LATAM',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionLATAM%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC138f295e2b994260add405ea513766b7-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL7aba1d91de5c43f4b160ca332b57fe00',
            name:
              'Web | PAY: Payment Success: New Member Monthly | Impact Radius - Free Trial | LATAM',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isRegionLATAM%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCebb2e05973b44a0e93091a567053334c-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe9fd1814ac5745ea9bfd984a6fbbe84e',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Neustar - US ONLY - Hulu',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCf8b4bc386261471b903115cbd923b1f0-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa5f1739fcbc84708876a6ec7e0444050',
            name: 'Web | PAY: Payment Success: Bundle Upgrade - Google Floodlight',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC845a2a92e37b4e0e8d705adb386abfa1-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4cd9827aff94472f988bd09e46f21696',
            name: 'Web | PAY: Payment Success: Bundle Upgrade - Impact Radius',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC15544874f2754f7b96868553d15d09ce-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe78fb250489e4f9fbff00fdb80c17ae9',
            name: 'Web | PAY: Payment Success: New Member Monthly - Amazon  AT',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionMonthly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryAT%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC1d4029bb96a64e849ff76309059a6283-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLbc1384f84de14d26b3152ee1fe5082e1',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Google Ads - US ONLY ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC474ec9fd5e5742e0b35f6d8abcf34cbd-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf8547dc2968a43f0b0b735b0e52ae500',
            name: 'Web | MLP: web.disneyplus.com: All Pages - Not MLPs - Twitter - US',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC31de9e7dcb524eefbbaba11c5321f0d1-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLabfe31276ee2411e8b970f6a84a2f2fb',
            name: 'Web | DisneyPlus | Payment Success | New Member\xA0Annual | Snapchat',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionYearly%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isRegionEMEA%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isCountryGroupEMEA%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC085212453686441889d63c3a2f7824f5-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL84d296825b2f4bffad70c619285d48dd',
            name: 'Web | MLP: web.disneyplus.com: Billing -  Google Floodlight',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') && _satellite.getVar('isBillingPage')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6bb75970c6774461aa5f5f8a7e7caef2-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe910ee40d8b341279ab762a9a74a1df3',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Bing Ads - US ONLY  ESPN+ ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC83df17c0586f49af999f77bcb2483a41-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5e49132fd7754f6a99b9786970cb2d29',
            name: 'Web | DisneyPlus | Payment Success | Bundle Upgrade | Snapchat',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC20f802f6eaec41d9aab3556e3f6f9b06-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4249baf8225243eba66194c38eedf69b',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Oath',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC0e1bb2ceb902452d81790774359f8f4e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC5150eeb662424705862e46d2a5f0ba92-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL520b84c3daaa4d96a85704a07c16e2dc',
            name: 'Web | DisneyPlus | Payment Success | Super Bundle | Snapchat',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC0c4f4fea36704e3a88f639be66e11d45-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb45bba3070a940d3a316fd189f87cb0d',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Twitter - US ONLY ',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC9b1097ab9d8647fd809902e7fe6c2a9a-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL37f12b1373ee46988dfd00c4117a4803',
            name: 'Web | MLP: web.disneyplus.com: All Pages - MLPs - Youtube',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDataLayerPresent%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC259fae0409784a9db6e9667ece12b0f3-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4d635f779a5f4b9f8ef9d5c8e95439f9',
            name: 'Web | MLP: web.disneyplus.com: Enter Email - Youtube',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      _satellite.getVar('isDisneyPlusSite') &&
                      _satellite.getVar('isSignUpPage') &&
                      !_satellite.getVar('isPasswordPage') &&
                      !_satellite.getVar('isBillingPage')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC6fd55aed7660406ab1fe12ac7133be64-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL12c1d808558f4e02939c0ef692778a44',
            name: 'Web | PAY: Payment Success: Bundle Upgrade - Impact Radius ESPN+',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isUserActive%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isEx_cidESPN%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isEplusBundleUpgradePartnerId%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC7127437d832e42dbb85c9b40dff90fa7-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL920ede80e05a44f2957e010d852b555f',
            name: 'Web | Disney Plus | BlueKai Optimizely | Not All Pages | US',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'dynamicPageIsDisplayed',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyHomePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%isPreviewPage%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isInAppMulanPage%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCf4ef570062e44f5ead3839b0f7c0881d-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf001861030dd4c3db9274859d3b026c4',
            name: 'Web | Disney Plus | BlueKai Optimizely | All Pages | US ',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isMovieDetailPage-Mulan%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDataLayerPresent%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCc79fa2a10dc1408ca895d1a179927371-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL73475541f745452cb890b24881e8deee',
            name:
              "Web | DisneyPlus | Disney Studio's  | Soul Movie Page Only |  Google_Facebook_Snapchat",
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%shouldFirePixelsForCountry%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isCountryUS%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isDisneyPlusSite%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%isSoulMoviePage%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC737fdb936b6746049ad1a5cd8ff3ac07-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC876894eb69fe4a409f8dbc09a00c67ff-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RCb9ef82ec62954416aace38f301e06493-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe2c0df26e7c14bd081fe6ee6733a019a',
            name: 'Web | PAY: Payment Success: Disney + Super Bundle - Amazon - US',
            events: [
              {
                modulePath: 'core/src/lib/events/customEvent.js',
                settings: {
                  type: 'purchaseSuccess',
                  elementSelector: 'body',
                  bubbleFireIfParent: !0,
                  bubbleFireIfChildFired: !0,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%isDisneyPlusBundleUpgradePage%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%isSubscriptionBundle%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/196a292be3ba/0a014bbb8427/891ec3a8efa3/RC3b26bfde270f493787fbcf0beff674f6-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
        ],
      });
    var $___var_48c76609cbe71fd5 = (function () {
      const $___old_0b1f8478595ae852 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_0b1f8478595ae852)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_addd751f0eb655f8.userAgent
          ));
        return function () {
          'use strict';
          function e (e, o) {
            return e((o = { exports: {} }), o.exports), o.exports;
          }
          function o (o) {
            var s = this.constructor;
            return this.then(
              function (e) {
                return s.resolve(o()).then(function () {
                  return e;
                });
              },
              function (e) {
                return s.resolve(o()).then(function () {
                  return s.reject(e);
                });
              }
            );
          }
          function l (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function t () {}
          function n (e, o) {
            return function () {
              e.apply(o, arguments);
            };
          }
          function r (e) {
            if (!(this instanceof r)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              b(e, this);
          }
          function i (t, n) {
            for (; 3 === t._state; ) t = t._value;
            0 !== t._state
              ? ((t._handled = !0),
                r._immediateFn(function () {
                  var e = 1 === t._state ? n.onFulfilled : n.onRejected;
                  if (null !== e) {
                    var o;
                    try {
                      o = e(t._value);
                    } catch (s) {
                      return void c(n.promise, s);
                    }
                    a(n.promise, o);
                  } else (1 === t._state ? a : c)(n.promise, t._value);
                }))
              : t._deferreds.push(n);
          }
          function a (e, o) {
            try {
              if (o === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (o && ('object' == typeof o || 'function' == typeof o)) {
                var s = o.then;
                if (o instanceof r) return (e._state = 3), (e._value = o), void u(e);
                if ('function' == typeof s) return void b(n(s, o), e);
              }
              (e._state = 1), (e._value = o), u(e);
            } catch (t) {
              c(e, t);
            }
          }
          function c (e, o) {
            (e._state = 2), (e._value = o), u(e);
          }
          function u (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              r._immediateFn(function () {
                e._handled || r._unhandledRejectionFn(e._value);
              });
            for (var o = 0, s = e._deferreds.length; o < s; o++) i(e, e._deferreds[o]);
            e._deferreds = null;
          }
          function d (e, o, s) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof o ? o : null),
              (this.promise = s);
          }
          function b (e, o) {
            var s = !1;
            try {
              e(
                function (e) {
                  s || ((s = !0), a(o, e));
                },
                function (e) {
                  s || ((s = !0), c(o, e));
                }
              );
            } catch (t) {
              if (s) return;
              (s = !0), c(o, t);
            }
          }
          function m (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function s () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
              for (var o = {}, s = 0; s < 10; s++) o['_' + String.fromCharCode(s)] = s;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(o)
                  .map(function (e) {
                    return o[e];
                  })
                  .join('')
              )
                return !1;
              var t = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  t[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, t)).join('')
              );
            } catch (n) {
              return !1;
            }
          }
          function g (e, o) {
            return Object.prototype.hasOwnProperty.call(e, o);
          }
          if (window.atob) {
            var p = function (e) {
                var s = [];
                return (
                  e.forEach(function (o) {
                    o.events &&
                      o.events.forEach(function (e) {
                        s.push({ rule: o, event: e });
                      });
                  }),
                  s.sort(function (e, o) {
                    return e.event.ruleOrder - o.event.ruleOrder;
                  })
                );
              },
              f = 'debug',
              h = function (o, e) {
                var s = function () {
                    return 'true' === o.getItem(f);
                  },
                  t = function (e) {
                    o.setItem(f, e);
                  },
                  n = [],
                  r = function (e) {
                    n.push(e);
                  };
                return (
                  (e.outputEnabled = s()),
                  {
                    onDebugChanged: r,
                    getDebugEnabled: s,
                    setDebugEnabled: function (o) {
                      s() !== o &&
                        (t(o),
                        (e.outputEnabled = o),
                        n.forEach(function (e) {
                          e(o);
                        }));
                    },
                  }
                );
              },
              C = 'Module did not export a function.',
              P = function (r, i) {
                return function (e, o, s) {
                  s = s || [];
                  var t = r.getModuleExports(e.modulePath);
                  if ('function' != typeof t) throw new Error(C);
                  var n = i(e.settings || {}, o);
                  return t.bind(null, n).apply(null, s);
                };
              },
              v = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              y = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              E = '\uD83D\uDE80',
              j =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : E,
              S = !1,
              O = function (e) {
                if (S && window.console) {
                  var o = Array.prototype.slice.call(arguments, 1);
                  o.unshift(j),
                    e !== y.DEBUG || window.console[e] || (e = y.INFO),
                    window.console[e].apply(window.console, o);
                }
              },
              F = O.bind(null, y.LOG),
              I = O.bind(null, y.INFO),
              M = O.bind(null, y.DEBUG),
              _ = O.bind(null, y.WARN),
              A = O.bind(null, y.ERROR),
              R = {
                log: F,
                info: I,
                debug: M,
                warn: _,
                error: A,
                get outputEnabled () {
                  return S;
                },
                set outputEnabled (e) {
                  S = e;
                },
                createPrefixedLogger: function (e) {
                  var o = '[' + e + ']';
                  return {
                    log: F.bind(null, o),
                    info: I.bind(null, o),
                    debug: M.bind(null, o),
                    warn: _.bind(null, o),
                    error: A.bind(null, o),
                  };
                },
              },
              D = e(function (t) {
                !(function (e) {
                  if (((t.exports = e()), !!0)) {
                    var o = window.Cookies,
                      s = (window.Cookies = e());
                    s.noConflict = function () {
                      return (window.Cookies = o), s;
                    };
                  }
                })(function () {
                  function c () {
                    for (var e = 0, o = {}; e < arguments.length; e++) {
                      var s = arguments[e];
                      for (var t in s) o[t] = s[t];
                    }
                    return o;
                  }
                  function u (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (l) {
                    function a () {}
                    function s (e, o, s) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (s = c({ path: '/' }, a.defaults, s)).expires &&
                          (s.expires = new Date(1 * new Date() + 86400000 * s.expires)),
                          (s.expires = s.expires ? s.expires.toUTCString() : '');
                        try {
                          var t = JSON.stringify(o);
                          /^[\{\[]/.test(t) && (o = t);
                        } catch (i) {}
                        (o = l.write
                          ? l.write(o, e)
                          : encodeURIComponent(String(o)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var n = '';
                        for (var r in s)
                          s[r] &&
                            ((n += '; ' + r), !0 !== s[r] && (n += '=' + s[r].split(';')[0]));
                        return (document.cookie = e + '=' + o + n);
                      }
                    }
                    function o (e, o) {
                      const $___old_6e3cf5b498939f92 = {}.constructor.getOwnPropertyDescriptor(
                        Document.prototype,
                        'cookie'
                      );
                      try {
                        if ($___old_6e3cf5b498939f92)
                          ({}.constructor.defineProperty(
                            Document.prototype,
                            'cookie',
                            $___stub_cdc5a54489618108.cookie
                          ));
                        return function () {
                          if ('undefined' != typeof document) {
                            for (
                              var s = {},
                                t = document.cookie ? document.cookie.split('; ') : [],
                                n = 0;
                              n < t.length;
                              n++
                            ) {
                              var r = t[n].split('='),
                                i = r.slice(1).join('=');
                              o || '"' !== i.charAt(0) || (i = i.slice(1, -1));
                              try {
                                var a = u(r[0]);
                                if (((i = (l.read || l)(i, a) || u(i)), o))
                                  try {
                                    i = JSON.parse(i);
                                  } catch (c) {}
                                if (((s[a] = i), e === a)) break;
                              } catch (c) {}
                            }
                            return e ? s[e] : s;
                          }
                        }.apply(this, arguments);
                      } finally {
                        if ($___old_6e3cf5b498939f92)
                          ({}.constructor.defineProperty(
                            Document.prototype,
                            'cookie',
                            $___old_6e3cf5b498939f92
                          ));
                      }
                    }
                    return (
                      (a.set = s),
                      (a.get = function (e) {
                        return o(e, !1);
                      }),
                      (a.getJSON = function (e) {
                        return o(e, !0);
                      }),
                      (a.remove = function (e, o) {
                        s(e, '', c(o, { expires: -1 }));
                      }),
                      (a.defaults = {}),
                      (a.withConverter = e),
                      a
                    );
                  }
                  return e(function () {});
                });
              }),
              T = { get: D.get, set: D.set, remove: D.remove },
              L = window,
              w = 'com.adobe.reactor.',
              B = function (t, e) {
                var n = w + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_4b4ccf94841007a2 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_4b4ccf94841007a2)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_9417959baab2caf0.localStorage
                        ));
                      return function () {
                        try {
                          return L[t].getItem(n + e);
                        } catch (o) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_4b4ccf94841007a2)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_4b4ccf94841007a2
                        ));
                    }
                  },
                  setItem: function (e, o) {
                    const $___old_d2c0e1c130108ca2 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_d2c0e1c130108ca2)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_9417959baab2caf0.localStorage
                        ));
                      return function () {
                        try {
                          return L[t].setItem(n + e, o), !0;
                        } catch (s) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_d2c0e1c130108ca2)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_d2c0e1c130108ca2
                        ));
                    }
                  },
                };
              },
              x = '_sdsat_',
              G = 'dataElements.',
              N = 'dataElementCookiesMigrated',
              k = B('localStorage'),
              W = B('sessionStorage', G),
              V = B('localStorage', G),
              Y = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              U = {},
              K = function (e) {
                var o;
                try {
                  o = JSON.stringify(e);
                } catch (s) {}
                return o;
              },
              J = function (e, o, s) {
                var t;
                switch (o) {
                  case Y.PAGEVIEW:
                    return void (U[e] = s);
                  case Y.SESSION:
                    return void ((t = K(s)) && W.setItem(e, t));
                  case Y.VISITOR:
                    return void ((t = K(s)) && V.setItem(e, t));
                }
              },
              H = function (e, o) {
                var s = T.get(x + e);
                s !== undefined && J(e, o, s);
              },
              z = {
                setValue: J,
                getValue: function (e, o) {
                  var s;
                  switch (o) {
                    case Y.PAGEVIEW:
                      return U.hasOwnProperty(e) ? U[e] : null;
                    case Y.SESSION:
                      return null === (s = W.getItem(e)) ? s : JSON.parse(s);
                    case Y.VISITOR:
                      return null === (s = V.getItem(e)) ? s : JSON.parse(s);
                  }
                },
                migrateCookieData: function (o) {
                  k.getItem(N) ||
                    (Object.keys(o).forEach(function (e) {
                      H(e, o[e].storageDuration);
                    }),
                    k.setItem(N, !0));
                },
              },
              Z = function (e, o, s, t) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  o +
                  '. ' +
                  s +
                  (t ? '\n' + t : '')
                );
              },
              q = function (a, c, l, u) {
                return function (e, o) {
                  var s = c(e);
                  if (!s) return u ? '' : undefined;
                  var t,
                    n = s.storageDuration;
                  try {
                    t = a.getModuleExports(s.modulePath);
                  } catch (i) {
                    return void R.error(Z(s, e, i.message, i.stack));
                  }
                  if ('function' == typeof t) {
                    var r;
                    try {
                      r = t(l(s.settings, o), o);
                    } catch (i) {
                      return void R.error(Z(s, e, i.message, i.stack));
                    }
                    return (
                      n && (null != r ? z.setValue(e, n, r) : (r = z.getValue(e, n))),
                      null == r && null != s.defaultValue && (r = s.defaultValue),
                      'string' == typeof r &&
                        (s.cleanText && (r = v(r)), s.forceLowerCase && (r = r.toLowerCase())),
                      r
                    );
                  }
                  R.error(Z(s, e, 'Module did not export a function.'));
                };
              },
              Q = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return v(e.textContent);
                },
              },
              $ = function (e, o, s) {
                for (var t, n = e, r = 0, i = o.length; r < i; r++) {
                  if (null == n) return undefined;
                  var a = o[r];
                  if (s && '@' === a.charAt(0)) {
                    var c = a.slice(1);
                    n = Q[c](n);
                  } else if (n.getAttribute && (t = a.match(/^getAttribute\((.+)\)$/))) {
                    var l = t[1];
                    n = n.getAttribute(l);
                  } else n = n[a];
                }
                return n;
              },
              X = function (r, i, a) {
                return function (e, o) {
                  var s;
                  if (i(e)) s = a(e, o);
                  else {
                    var t = e.split('.'),
                      n = t.shift();
                    'this' === n
                      ? o && (s = $(o.element, t, !0))
                      : 'event' === n
                      ? o && (s = $(o, t))
                      : 'target' === n
                      ? o && (s = $(o.target, t))
                      : (s = $(r[n], t));
                  }
                  return s;
                };
              },
              ee = function (s, t) {
                return function (e) {
                  var o = e.split('.')[0];
                  return Boolean(
                    t(e) || 'this' === o || 'event' === o || 'target' === o || s.hasOwnProperty(o)
                  );
                };
              },
              oe = function (e, o, s) {
                var t = { exports: {} };
                return e.call(t.exports, t, t.exports, o, s), t.exports;
              },
              se = function () {
                var i = {},
                  s = function (e) {
                    var o = i[e];
                    if (!o) throw new Error('Module ' + e + ' not found.');
                    return o;
                  },
                  e = function () {
                    Object.keys(i).forEach(function (e) {
                      try {
                        t(e);
                      } catch (s) {
                        var o =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          s.message +
                          (s.stack ? '\n' + s.stack : '');
                        R.error(o);
                      }
                    });
                  },
                  t = function (e) {
                    var o = s(e);
                    return (
                      o.hasOwnProperty('exports') ||
                        (o.exports = oe(o.definition.script, o.require, o.turbine)),
                      o.exports
                    );
                  };
                return {
                  registerModule: function (e, o, s, t, n) {
                    var r = { definition: o, extensionName: s, require: t, turbine: n };
                    (r.require = t), (i[e] = r);
                  },
                  hydrateCache: e,
                  getModuleExports: t,
                  getModuleDefinition: function (e) {
                    return s(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return s(e).extensionName;
                  },
                };
              },
              te = !1,
              ne = function (t) {
                return function (o, s) {
                  var e = t._monitors;
                  e &&
                    (te ||
                      (R.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (te = !0)),
                    e.forEach(function (e) {
                      e[o] && e[o](s);
                    }));
                };
              },
              re = function (n, r, i) {
                var s,
                  t,
                  a,
                  c,
                  l = [],
                  u = function (e, o, s) {
                    if (!n(o)) return e;
                    l.push(o);
                    var t = r(o, s);
                    return l.pop(), null == t && i ? '' : t;
                  };
                return (
                  (s = function (e, s) {
                    var o = /^%([^%]+)%$/.exec(e);
                    return o
                      ? u(e, o[1], s)
                      : e.replace(/%(.+?)%/g, function (e, o) {
                          return u(e, o, s);
                        });
                  }),
                  (t = function (e, o) {
                    for (var s = {}, t = Object.keys(e), n = 0; n < t.length; n++) {
                      var r = t[n],
                        i = e[r];
                      s[r] = c(i, o);
                    }
                    return s;
                  }),
                  (a = function (e, o) {
                    for (var s = [], t = 0, n = e.length; t < n; t++) s.push(c(e[t], o));
                    return s;
                  }),
                  (c = function (e, o) {
                    return 'string' == typeof e
                      ? s(e, o)
                      : Array.isArray(e)
                      ? a(e, o)
                      : 'object' == typeof e && null !== e
                      ? t(e, o)
                      : e;
                  }),
                  function (e, o) {
                    return 10 < l.length
                      ? (R.error('Data element circular reference detected: ' + l.join(' -> ')), e)
                      : c(e, o);
                  }
                );
              },
              ie = function (n) {
                return function (e, o) {
                  if ('string' == typeof e) n[arguments[0]] = o;
                  else if (arguments[0]) {
                    var s = arguments[0];
                    for (var t in s) n[t] = s[t];
                  }
                };
              },
              ae = setTimeout;
            (r.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (r.prototype.then = function (e, o) {
                var s = new this.constructor(t);
                return i(this, new d(e, o, s)), s;
              }),
              (r.prototype['finally'] = o),
              (r.all = function (o) {
                return new r(function (n, r) {
                  function i (o, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var s = e.then;
                        if ('function' == typeof s)
                          return void s.call(
                            e,
                            function (e) {
                              i(o, e);
                            },
                            r
                          );
                      }
                      (a[o] = e), 0 == --c && n(a);
                    } catch (t) {
                      r(t);
                    }
                  }
                  if (!l(o)) return r(new TypeError('Promise.all accepts an array'));
                  var a = Array.prototype.slice.call(o);
                  if (0 === a.length) return n([]);
                  for (var c = a.length, e = 0; e < a.length; e++) i(e, a[e]);
                });
              }),
              (r.resolve = function (o) {
                return o && 'object' == typeof o && o.constructor === r
                  ? o
                  : new r(function (e) {
                      e(o);
                    });
              }),
              (r.reject = function (s) {
                return new r(function (e, o) {
                  o(s);
                });
              }),
              (r.race = function (n) {
                return new r(function (e, o) {
                  if (!l(n)) return o(new TypeError('Promise.race accepts an array'));
                  for (var s = 0, t = n.length; s < t; s++) r.resolve(n[s]).then(e, o);
                });
              }),
              (r._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  ae(e, 0);
                }),
              (r._unhandledRejectionFn = function Oo (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || r['default'] || r,
              le = function (l, s, t) {
                return function (a, o, c, e) {
                  return e.then(function () {
                    var r,
                      i = a.delayNext;
                    return new ce(function (e, o) {
                      var s = l(a, c, [c]);
                      if (!i) return e();
                      var t = a.timeout,
                        n = new ce(function (e, o) {
                          r = setTimeout(function () {
                            o(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  t / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, t);
                        });
                      ce.race([s, n]).then(e, o);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(r), (e = s(e)), t(a, o, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(r);
                      });
                  });
                };
              },
              ue = function (c, s, t, n, l) {
                return function (i, o, a, e) {
                  return e.then(function () {
                    var r;
                    return new ce(function (e, o) {
                      var s = c(i, a, [a]),
                        t = i.timeout,
                        n = new ce(function (e, o) {
                          r = setTimeout(function () {
                            o(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  t / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, t);
                        });
                      ce.race([s, n]).then(e, o);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(r), (e = s(e)), n(i, o, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(r), !t(i, e))) return l(i, o), ce.reject();
                      });
                  });
                };
              },
              de = ce.resolve(),
              be = function (t, n, e) {
                return function (o, s) {
                  return (
                    o.conditions &&
                      o.conditions.forEach(function (e) {
                        de = t(e, o, s, de);
                      }),
                    o.actions &&
                      o.actions.forEach(function (e) {
                        de = n(e, o, s, de);
                      }),
                    (de = (de = de.then(function () {
                      e(o);
                    }))['catch'](function () {}))
                  );
                };
              },
              me = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              pe = function (i, a, c, l) {
                return function (e, o) {
                  var s;
                  if (e.conditions)
                    for (var t = 0; t < e.conditions.length; t++) {
                      s = e.conditions[t];
                      try {
                        var n = i(s, o, [o]);
                        if (me(n))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!a(s, n)) return c(s, e), !1;
                      } catch (r) {
                        return l(s, e, r), !1;
                      }
                    }
                  return !0;
                };
              },
              ge = function (s, t) {
                return function (e, o) {
                  s(e, o) && t(e, o);
                };
              },
              fe = function (s) {
                return function (e) {
                  var o = s.getModuleDefinition(e.modulePath);
                  return (o && o.displayName) || e.modulePath;
                };
              },
              he = function (n) {
                return function (e) {
                  var o = e.rule,
                    s = e.event,
                    t = n.getModuleDefinition(s.modulePath).name;
                  return {
                    $type: n.getModuleExtensionName(s.modulePath) + '.' + t,
                    $rule: { id: o.id, name: o.name },
                  };
                };
              },
              Ce = function (a, c, l, u, d, b) {
                return function (s, e) {
                  var t = e.rule,
                    o = e.event;
                  o.settings = o.settings || {};
                  try {
                    var n = d(e);
                    c(o, null, [
                      function r (e) {
                        var o = l(n, e);
                        s(function () {
                          a(o, t);
                        });
                      },
                    ]);
                  } catch (i) {
                    b.error(u(o, t, i));
                  }
                };
              },
              Pe = function (n, r, i, a) {
                return function (e, o, s) {
                  var t = r(e);
                  i.error(n(t, o.name, s)), a('ruleActionFailed', { rule: o, action: e });
                };
              },
              ve = function (n, r, i, a) {
                return function (e, o, s) {
                  var t = r(e);
                  i.error(n(t, o.name, s)), a('ruleConditionFailed', { rule: o, condition: e });
                };
              },
              ye = function (t, n, r) {
                return function (e, o) {
                  var s = t(e);
                  n.log('Condition "' + s + '" for rule "' + o.name + '" was not met.'),
                    r('ruleConditionFailed', { rule: o, condition: e });
                };
              },
              Ee = function (o, s) {
                return function (e) {
                  o.log('Rule "' + e.name + '" fired.'), s('ruleCompleted', { rule: e });
                };
              },
              je = function (r, i, a) {
                return function (e, o) {
                  var s;
                  if (e.actions)
                    for (var t = 0; t < e.actions.length; t++) {
                      s = e.actions[t];
                      try {
                        r(s, o, [o]);
                      } catch (n) {
                        return void i(s, e, n);
                      }
                    }
                  a(e);
                };
              },
              Se = function (s, t, n, r) {
                return function (e, o) {
                  r('ruleTriggered', { rule: o }), s ? n(o, e) : t(o, e);
                };
              },
              Oe = function (e, o, s) {
                return (
                  'Failed to execute "' +
                  e +
                  '" for "' +
                  o +
                  '" rule. ' +
                  s.message +
                  (s.stack ? '\n' + s.stack : '')
                );
              },
              Fe = function (e, o) {
                return (o && !e.negate) || (!o && e.negate);
              },
              Ie = [],
              Me = !1,
              _e = function (e) {
                Me ? e() : Ie.push(e);
              },
              Ae = function (e, o, s) {
                e(o).forEach(function (e) {
                  s(_e, e);
                }),
                  (Me = !0),
                  Ie.forEach(function (e) {
                    e();
                  }),
                  (Ie = []);
              },
              Re = function (e) {
                if (
                  (e ||
                    (e = new Error(
                      'The extension triggered an error, but no error information was provided.'
                    )),
                  !(e instanceof Error))
                ) {
                  var o = 'object' == typeof e ? JSON.stringify(e) : String(e);
                  e = new Error(o);
                }
                return e;
              },
              De = Object.getOwnPropertySymbols,
              Te = Object.prototype.hasOwnProperty,
              Le = Object.prototype.propertyIsEnumerable,
              we = s()
                ? Object.assign
                : function (e) {
                    for (var o, s, t = m(e), n = 1; n < arguments.length; n++) {
                      for (var r in (o = Object(arguments[n]))) Te.call(o, r) && (t[r] = o[r]);
                      if (De) {
                        s = De(o);
                        for (var i = 0; i < s.length; i++) Le.call(o, s[i]) && (t[s[i]] = o[s[i]]);
                      }
                    }
                    return t;
                  },
              Be = function (e, o) {
                return (
                  we((o = o || {}), e),
                  o.hasOwnProperty('type') ||
                    Object.defineProperty(o, 'type', {
                      get: function () {
                        return (
                          R.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          o.$type
                        );
                      },
                    }),
                  o
                );
              },
              xe = function (c, l) {
                return function (e, o) {
                  var s = c[e];
                  if (s) {
                    var t = s.modules;
                    if (t)
                      for (var n = Object.keys(t), r = 0; r < n.length; r++) {
                        var i = n[r],
                          a = t[i];
                        if (a.shared && a.name === o) return l.getModuleExports(i);
                      }
                  }
                };
              },
              Ge = function (e, o) {
                return function () {
                  return o ? e(o) : {};
                };
              },
              Ne = function (s, t) {
                return function (e) {
                  if (t) {
                    var o = e.split('.');
                    o.splice(o.length - 1 || 1, 0, 'min'), (e = o.join('.'));
                  }
                  return s + e;
                };
              },
              ke = '.js',
              We = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              Ve = function (e, o) {
                return -1 !== e.indexOf(o, e.length - o.length);
              },
              Ye = function (e, o) {
                Ve(o, ke) || (o += ke);
                var s = o.split('/'),
                  t = We(e).split('/');
                return (
                  s.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? t.length && t.pop() : t.push(e));
                  }),
                  t.join('/')
                );
              },
              Ue = document,
              Ke = function (s, t) {
                return new ce(function (e, o) {
                  (t.onload = function () {
                    e(t);
                  }),
                    (t.onerror = function () {
                      o(new Error('Failed to load script ' + s));
                    });
                });
              },
              Je = function (e) {
                var o = document.createElement('script');
                (o.src = e), (o.async = !0);
                var s = Ke(e, o);
                return document.getElementsByTagName('head')[0].appendChild(o), s;
              },
              He = function (e, o, s, t) {
                (o = o || '&'), (s = s || '=');
                var n = {};
                if ('string' != typeof e || 0 === e.length) return n;
                var r = /\+/g;
                e = e.split(o);
                var i = 1000;
                t && 'number' == typeof t.maxKeys && (i = t.maxKeys);
                var a = e.length;
                0 < i && i < a && (a = i);
                for (var c = 0; c < a; ++c) {
                  var l,
                    u,
                    d,
                    b,
                    m = e[c].replace(r, '%20'),
                    p = m.indexOf(s);
                  0 <= p ? ((l = m.substr(0, p)), (u = m.substr(p + 1))) : ((l = m), (u = '')),
                    (d = decodeURIComponent(l)),
                    (b = decodeURIComponent(u)),
                    g(n, d)
                      ? Array.isArray(n[d])
                        ? n[d].push(b)
                        : (n[d] = [n[d], b])
                      : (n[d] = b);
                }
                return n;
              },
              ze = function (e) {
                switch (typeof e) {
                  case 'string':
                    return e;
                  case 'boolean':
                    return e ? 'true' : 'false';
                  case 'number':
                    return isFinite(e) ? e : '';
                  default:
                    return '';
                }
              },
              Ze = function (s, t, n, e) {
                return (
                  (t = t || '&'),
                  (n = n || '='),
                  null === s && (s = undefined),
                  'object' == typeof s
                    ? Object.keys(s)
                        .map(function (e) {
                          var o = encodeURIComponent(ze(e)) + n;
                          return Array.isArray(s[e])
                            ? s[e]
                                .map(function (e) {
                                  return o + encodeURIComponent(ze(e));
                                })
                                .join(t)
                            : o + encodeURIComponent(ze(s[e]));
                        })
                        .join(t)
                    : e
                    ? encodeURIComponent(ze(e)) + n + encodeURIComponent(ze(s))
                    : ''
                );
              },
              qe = e(function (e, o) {
                (o.decode = o.parse = He), (o.encode = o.stringify = Ze);
              }),
              Qe = (qe.decode, qe.parse, qe.encode, qe.stringify, '@adobe/reactor-'),
              $e = {
                cookie: T,
                document: Ue,
                'load-script': Je,
                'object-assign': we,
                promise: ce,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), qe.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return qe.stringify(e);
                  },
                },
                window: L,
              },
              Xe = function (t) {
                return function (e) {
                  if (0 === e.indexOf(Qe)) {
                    var o = e.substr(Qe.length),
                      s = $e[o];
                    if (s) return s;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return t(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              eo = function (e, i, a, c, l) {
                var u = e.extensions,
                  d = e.buildInfo,
                  b = e.property.settings;
                if (u) {
                  var m = xe(u, i);
                  Object.keys(u).forEach(function (t) {
                    var n = u[t],
                      e = Ge(c, n.settings);
                    if (n.modules) {
                      var o = R.createPrefixedLogger(n.displayName),
                        s = Ne(n.hostedLibFilesBaseUrl, d.minified),
                        r = {
                          buildInfo: d,
                          getDataElementValue: l,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: s,
                          getSharedModule: m,
                          logger: o,
                          propertySettings: b,
                          replaceTokens: c,
                          onDebugChanged: a.onDebugChanged,
                          get debugEnabled () {
                            return a.getDebugEnabled();
                          },
                        };
                      Object.keys(n.modules).forEach(function (s) {
                        var e = n.modules[s],
                          o = Xe(function (e) {
                            var o = Ye(s, e);
                            return i.getModuleExports(o);
                          });
                        i.registerModule(s, e, t, o, r);
                      });
                    }
                  }),
                    i.hydrateCache();
                }
                return i;
              },
              oo = function (e, o, s, t, n) {
                var r = R.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  R.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: o.property.name }),
                  (e.company = o.company),
                  (e.buildInfo = o.buildInfo),
                  (e.logger = r),
                  (e.notify = function (e, o) {
                    switch (
                      (R.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      o)
                    ) {
                      case 3:
                        r.info(e);
                        break;
                      case 4:
                        r.warn(e);
                        break;
                      case 5:
                        r.error(e);
                        break;
                      default:
                        r.log(e);
                    }
                  }),
                  (e.getVar = t),
                  (e.setVar = n),
                  (e.setCookie = function (e, o, s) {
                    var t = '',
                      n = {};
                    s && ((t = ', { expires: ' + s + ' }'), (n.expires = s));
                    var r =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      o +
                      '"' +
                      t +
                      ').';
                    R.warn(r), T.set(e, o, n);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      R.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      T.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    R.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      T.remove(e);
                  }),
                  (e.cookie = T),
                  (e.pageBottom = function () {}),
                  (e.setDebug = s);
                var i = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      i ||
                        (R.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (i = !0)),
                      o
                    );
                  },
                });
              },
              so = window._satellite;
            if (so && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var to = so.container;
              delete so.container;
              var no = to.property.settings.undefinedVarsReturnEmpty,
                ro = to.property.settings.ruleComponentSequencingEnabled,
                io = to.dataElements || {};
              z.migrateCookieData(io);
              var ao,
                co = function (e) {
                  return io[e];
                },
                lo = se(),
                uo = q(
                  lo,
                  co,
                  function () {
                    return ao.apply(null, arguments);
                  },
                  no
                ),
                bo = {},
                mo = ie(bo),
                po = ee(bo, co),
                go = X(bo, co, uo);
              ao = re(po, go, no);
              var fo = h(B('localStorage'), R);
              oo(so, to, fo.setDebugEnabled, go, mo), eo(to, lo, fo, ao, uo);
              var ho = ne(so),
                Co = P(lo, ao),
                Po = fe(lo),
                vo = ye(Po, R, ho),
                yo = ve(Oe, Po, R, ho),
                Eo = Pe(Oe, Po, R, ho),
                jo = Ee(R, ho),
                So = Ce(
                  Se(
                    ro,
                    ge(pe(Co, Fe, vo, yo), je(Co, Eo, jo)),
                    be(ue(Co, Re, Fe, yo, vo), le(Co, Re, Eo), jo),
                    ho
                  ),
                  Co,
                  Be,
                  Oe,
                  he(lo),
                  R
                );
              Ae(p, to.rules || [], So);
            }
            return so;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_0b1f8478595ae852)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_0b1f8478595ae852
          ));
      }
    })();
    _satellite = $___var_48c76609cbe71fd5;
  })();
}
