var _satellite;
{
  const $___stub_a011c28886b08277 = {};
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
  })($___stub_a011c28886b08277);
  const $___stub_5299202f9682c77d = {};
  (exports => {
    'use strict';
    exports.doNotTrack = {
      configurable: true,
      enumerable: true,
      get () {
        return '1';
      },
    };
    exports.productSub = {
      configurable: true,
      enumerable: true,
      get () {
        return 20030107;
      },
    };
    exports.vendor = {
      configurable: true,
      enumerable: true,
      get () {
        return '';
      },
    };
  })($___stub_5299202f9682c77d);
  const $___stub_9d7b4eb662ee43f5 = {};
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
  })($___stub_9d7b4eb662ee43f5);
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-11-26T07:42:12Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          apacRegion: {
            defaultValue: 'false',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if (_satellite.getVar('apacRegionVar') != undefined)
                  return _satellite.getVar('apacRegionVar');
                for (var e = !1, t = ['/cn/'], a = t.length, n = 0; n < a; n++)
                  if (-1 != location.href.indexOf(t[n])) {
                    e = !0;
                    break;
                  }
                if ('go.oracle.com' === location.hostname) {
                  var s = window.languageCode ? window.languageCode : 'en',
                    o = window.countryCode ? window.countryCode : 'us';
                  ('zh-cn' != s && 'cn' != o) || (e = !0);
                }
                return _satellite.setVar('apacRegionVar', e), e;
              },
            },
          },
          scData: {
            defaultValue: 'false',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                try {
                  var e = {
                      pageURL: 'Not Available',
                      pageName: 'Not Available',
                      siteId: 'Not Available',
                      userType: 'Not Available',
                      loginStatus: 'Not Available',
                      globalId: 'Not Available',
                      userAction: 'Not Available',
                      videoTitle: 'Not Available',
                      linkName: 'Not Available',
                      fileDownload: 'Not Available',
                    },
                    t = {
                      event1: 'Welcome',
                      event2: 'Landing Page/Pad Step2:Survey',
                      event3: 'Landing Page/Pad Step3:Thanks',
                      event8: 'Welcome',
                      event9: 'Step3:Thanks',
                      event10: 'Step2:Reg',
                      event15: 'File Downloads',
                      event22: 'OOW/Javaone Registration Started',
                      event23: 'OOW/Javaone Registration Complete',
                      event26: 'Trial/Demo Registration Welcome',
                      event27: 'Trial/Demo Registration Confirmed',
                    };
                  if (
                    (location.href && (e.pageURL = encodeURIComponent(location.href)),
                    'object' == typeof s)
                  ) {
                    if (
                      (s.pageName && (e.pageName = s.pageName),
                      s.eVar26 && (e.siteId = s.eVar26),
                      s.eVar20 && (e.userType = s.eVar20),
                      s.eVar54 && (e.loginStatus = s.eVar54),
                      s.eVar64 && (e.globalId = s.eVar64),
                      s.eVar15 && (e.fileDownload = s.eVar15),
                      s.eVar24 && (e.userAction = 'no value' == s.eVar24 ? 'on load' : s.eVar24),
                      s.events)
                    ) {
                      for (var a = s.events.split(','), n = '', o = 0; o < a.length; o++)
                        if (a[o] in t) {
                          n = '-' + t[a[o]];
                          break;
                        }
                      e.userAction = encodeURIComponent(e.userAction + ':' + s.events + n);
                    }
                  } else e.found = !1;
                  return e;
                } catch (i) {
                  return !1;
                }
              },
            },
          },
          countryExclusion: {
            defaultValue: 'false',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function e () {
                  var e,
                    t = [],
                    a = window.location.href;
                  -1 != a.indexOf('#') && (a = a.split('#')[0]);
                  for (
                    var n = a.slice(window.location.href.indexOf('?') + 1).split('&'), s = 0;
                    s < n.length;
                    s++
                  )
                    (e = n[s].split('=')), t.push(e[0]), (t[e[0]] = e[1]);
                  return t;
                }
                if (_satellite.getVar('countryExclusionVar') != undefined)
                  return _satellite.getVar('countryExclusionVar');
                for (var t = !1, a = ['/ru/'], n = a.length, s = ((t = !1), 0); s < n; s++)
                  if (-1 != location.href.indexOf(a[s])) {
                    t = !0;
                    break;
                  }
                if ('go.oracle.com' === location.hostname) {
                  var o = window.languageCode ? window.languageCode : 'en',
                    i = window.countryCode ? window.countryCode : 'us',
                    r = e().src1;
                  if (r != undefined && -1 != r.indexOf('a_')) {
                    console.log('in if lop');
                    var c = r.split(':');
                    for (s = 0; s < c.length; s++)
                      if (-1 != c[s].indexOf('a_')) {
                        console.log('in countryid'), (i = c[s].substring(2)), console.log(i);
                        break;
                      }
                  }
                  ('ru-ru' != o && 'ru' != i) || (t = !0);
                }
                return (
                  window.truste &&
                    window.truste.eu &&
                    truste.eu.bindMap &&
                    truste.eu.bindMap.country &&
                    'ru' == window.truste.eu.bindMap.country &&
                    (t = !0),
                  _satellite.setVar('countryExclusionVar', t),
                  t
                );
              },
            },
          },
          trusteConsent: {
            defaultValue: 'Not defined',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                const $___old_0f51f98ce0a7657a = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'doNotTrack'
                );
                try {
                  if ($___old_0f51f98ce0a7657a)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'doNotTrack',
                      $___stub_5299202f9682c77d.doNotTrack
                    ));
                  return function () {
                    function e () {
                      var e = new Array(-1, 'NoTRUSTe');
                      try {
                        (e[0] = i.truste.api.getGdprConsentDecision().consentDecision),
                          (e[1] = i.truste.api.getGdprConsentDecision().source);
                      } catch (t) {
                        e[0] = -1;
                      }
                      if (-1 == e[0])
                        try {
                          (e[0] = truste.cma.callApi(
                            'getGDPRConsentDecision',
                            'oracle.com'
                          ).consentDecision),
                            (e[1] = truste.cma.callApi(
                              'getGDPRConsentDecision',
                              'oracle.com'
                            ).source);
                        } catch (t) {
                          e[0] = -1;
                        }
                      return e[0];
                    }
                    var t = { truste_consent: -1, dnt: !1 };
                    if (_satellite.getVar('trustVar') != undefined)
                      return (t = _satellite.getVar('trustVar'));
                    try {
                      i.truste.api.getGdprConsentDecision();
                    } catch (n) {
                      var i = i || {};
                      (i.truste = {}),
                        (i.truste.api = {}),
                        function () {
                          (this.getCookieName = function () {
                            return 'notice_preferences';
                          }),
                            (this.getStorageItemName = function () {
                              return 'truste.eu.cookie.notice_preferences';
                            }),
                            (this.getGdprCookieName = function () {
                              return 'notice_gdpr_prefs';
                            }),
                            (this.getGdprStorageItemName = function () {
                              return 'truste.eu.cookie.notice_gdpr_prefs';
                            });
                        }.apply(i.truste),
                        function () {
                          function n (e) {
                            for (
                              var t = e + '=', a = document.cookie.split(';'), n = 0;
                              n < a.length;
                              n++
                            ) {
                              for (var s = a[n]; ' ' == s.charAt(0); ) s = s.substring(1);
                              if (0 == s.indexOf(t)) return s.substring(t.length, s.length);
                            }
                            return null;
                          }
                          function s (e) {
                            const $___old_eb1bf6638124d951 = {}.constructor.getOwnPropertyDescriptor(
                                window,
                                'Storage'
                              ),
                              $___old_7386d208e796b26f = {}.constructor.getOwnPropertyDescriptor(
                                window,
                                'localStorage'
                              );
                            try {
                              if ($___old_eb1bf6638124d951)
                                ({}.constructor.defineProperty(
                                  window,
                                  'Storage',
                                  $___stub_a011c28886b08277.Storage
                                ));
                              if ($___old_7386d208e796b26f)
                                ({}.constructor.defineProperty(
                                  window,
                                  'localStorage',
                                  $___stub_a011c28886b08277.localStorage
                                ));
                              return function () {
                                var t,
                                  a =
                                    ((t = e),
                                    'undefined' != typeof Storage
                                      ? localStorage.getItem(t)
                                      : null);
                                return null != a ? JSON.parse(a).value : null;
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_eb1bf6638124d951)
                                ({}.constructor.defineProperty(
                                  window,
                                  'Storage',
                                  $___old_eb1bf6638124d951
                                ));
                              if ($___old_7386d208e796b26f)
                                ({}.constructor.defineProperty(
                                  window,
                                  'localStorage',
                                  $___old_7386d208e796b26f
                                ));
                            }
                          }
                          var o = i.truste;
                          (this.getConsentCode = function () {
                            var e = s(o.getStorageItemName()) || n(o.getCookieName());
                            return null == e ? -1 : parseInt(e) + 1;
                          }),
                            (this.getGdprConsentCode = function () {
                              var e = s(o.getGdprStorageItemName()) || n(o.getGdprCookieName());
                              if (null == e) return -1;
                              var t = new Array();
                              for (a in (t = e.split(','))) t[a] = parseInt(t[a], 10) + 1;
                              return t.toString();
                            }),
                            (this.getConsentDecision = function () {
                              var e = this.getConsentCode();
                              if (-1 != e)
                                return (
                                  (t =
                                    '{"consentDecision": ' +
                                    parseInt(e) +
                                    ', "source": "asserted"}'),
                                  JSON.parse(t)
                                );
                              var t = '{"consentDecision": 0, "source": "implied"}';
                              return JSON.parse(t);
                            }),
                            (this.getGdprConsentDecision = function () {
                              var e = this.getGdprConsentCode();
                              if (-1 != e)
                                return (
                                  (t = '{"consentDecision": [' + e + '], "source": "asserted"}'),
                                  JSON.parse(t)
                                );
                              var t = '{"consentDecision": [0], "source": "implied"}';
                              return JSON.parse(t);
                            });
                        }.apply(i.truste.api);
                    }
                    return (
                      (t.truste_consent = e()),
                      (-1 != t.truste_consent && -1 == t.truste_consent.indexOf(0)) ||
                        (1 != navigator.doNotTrack &&
                          1 != window.doNotTrack &&
                          1 != navigator.msDoNotTrack) ||
                        (t.dnt = !0),
                      _satellite.setVar('trustVar', t),
                      t
                    );
                  }.apply(this, arguments);
                } finally {
                  if ($___old_0f51f98ce0a7657a)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'doNotTrack',
                      $___old_0f51f98ce0a7657a
                    ));
                }
              },
            },
          },
          dataLayer: {
            defaultValue: 'Not defined',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function e () {
                  for (
                    var e = document.getElementsByTagName('meta'), t = {}, a = 0;
                    a < e.length;
                    a++
                  ) {
                    var n;
                    (n = e[a].getAttribute('name')) &&
                      n.trim().match(/^\w+(\s+\w+)*$/) &&
                      e[a].getAttribute('content') &&
                      (t[(n = n.trim().replace(/[*,\r\n\t ]+/gi, '_'))] = e[a]
                        .getAttribute('content')
                        .trim());
                  }
                  return t;
                }
                if (
                  ((window.dataLayerObject = {}),
                  (dataLayerObject = {
                    page: { pageInfo: 'NotSet', taxonomy: 'NotSet', variation: 'default' },
                    user: {
                      userType: '',
                      campaigns: { status: 'NotSet' },
                      eloqua: { guid: 'NotSet' },
                      isLoggedIn: 'NotSet',
                      isReturning: 'NotSet',
                      cookieStatus: 'NotSet',
                      profileGUID: 'NotSet',
                      geoCountry: 'NotSet',
                      profile: { profileInfo: 'NotSet' },
                      customer: 'NotSet',
                    },
                    privacy: { consentDecision: 'NotSet', dnt: 'NotSet', consentSource: 'NotSet' },
                  }),
                  (dataLayerObject.page.pageInfo =
                    window.pageData && window.pageData.pageInfo
                      ? window.pageData.pageInfo
                      : 'NotSet'),
                  (dataLayerObject.page.taxonomy =
                    window.pageData && window.pageData.taxonomy
                      ? window.pageData.taxonomy
                      : 'NotSet'),
                  dataLayerObject.page.pageInfo.keywords)
                ) {
                  var t = !1;
                  dataLayerObject.page.pageInfo.keywords.split(',').forEach(function (e) {
                    -1 != e.trim().indexOf('AA') &&
                      ((t = e.trim()), (dataLayerObject.page.variation = t));
                  });
                } else
                  (dataLayerObject.page.pageInfo = e()),
                    (
                      document.getElementsByName('keywords')[0].getAttribute('content') ||
                      document.getElementsByName('keywords')[0].getAttribute('content')
                    )
                      .split(',')
                      .forEach(function (e) {
                        -1 != e.trim().indexOf('AA') &&
                          ((t = e.trim()), (dataLayerObject.page.variation = t));
                      });
              },
            },
          },
          LP_id: {
            defaultValue: 'false',
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = 'Not Available';
                return _satellite.getVar('lpIdVar') != undefined
                  ? _satellite.getVar('lpIdVar')
                  : ('go.oracle.com' == location.host &&
                      0 < location.href.toLocaleLowerCase().indexOf('/lp=') &&
                      (e = location.href
                        .toLocaleLowerCase()
                        .split('?')[0]
                        .split('/lp=')[1]
                        .split('/')[0]),
                    _satellite.setVar('lpIdVar', e),
                    e);
              },
            },
          },
          metaDataLayer: {
            defaultValue: 'Not Available',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if (_satellite.getVar('metadataVar') != undefined)
                  return _satellite.getVar('metadataVar');
                for (
                  var e = document.getElementsByTagName('meta'), t = {}, a = 0;
                  a < e.length;
                  a++
                )
                  e[a].getAttribute('name') &&
                    (t[e[a].getAttribute('name').toLowerCase()] = e[a]
                      .getAttribute('content')
                      .replace(/'/g, '%27'));
                return _satellite.setVar('metadataVar', t), t;
              },
            },
          },
          salesChatProductId: {
            defaultValue: '0',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = 0,
                  t = {
                    'Big Data': { stage: '34', prod: '18' },
                    'Business Analytics': { stage: '35', prod: '19' },
                    'Cloud Applications': { stage: '18', prod: '20' },
                    'Cloud Technologies': { stage: '31', prod: '21' },
                    'Customer Experience Sales & Marketing': { stage: '27', prod: '22' },
                    'Customer Experience Service': { stage: '26', prod: '23' },
                    Database: { stage: '32', prod: '24' },
                    'Engineered Systems': { stage: '29', prod: '25' },
                    'Enterprise Communications Solutions': { stage: '205', prod: '170' },
                    'Enterprise Performance Management': { stage: '19', prod: '26' },
                    'Enterprise Resource Planning': { stage: '20', prod: '27' },
                    'Human Capital Management': { stage: '25', prod: '29' },
                    Middleware: { stage: '33', prod: '30' },
                    'Operating Systems and Virtualization': { stage: '30', prod: '31' },
                    Procurement: { stage: '22', prod: '32' },
                    'Product Lifecycle Management': { stage: '23', prod: '33' },
                    'Project Portfolio Management': { stage: '36', prod: '34' },
                    'Server & Storage Systems': { stage: '28', prod: '35' },
                    'Supply Chain Management': { stage: '24', prod: '36' },
                    'Application Development': { stage: '145', prod: '143' },
                    MySQL: { stage: '232', prod: '224' },
                    'Autonomous Database': { stage: '268', prod: '225' },
                    'Financial Management': { stage: '21', prod: '28' },
                    'Hotel, Restaurant and Casino Solutions': { stage: '270', prod: '256' },
                    'Accelerate On Prem to Cloud': { stage: '271', prod: '257' },
                    'Communications Network & SD-WAN': { stage: '205', prod: '170' },
                    'Construction Project Management': { stage: '36', prod: '34' },
                  },
                  a = 'prod';
                (-1 == location.host.indexOf('www-sites.oracle.com') &&
                  -1 == location.host.indexOf('www-content-stage.oracle.com') &&
                  -1 == location.host.indexOf('www-portal-stage.oracle.com')) ||
                  (a = 'stage');
                var n = {
                  '/database/data-warehouse.html': 'Autonomous Database',
                  '/database/autonomous-transaction-processing.html': 'Autonomous Database',
                  '/database/what-is-autonomous-database.html': 'Autonomous Database',
                  '/database/autonomous-database/think-autonomous.html': 'Autonomous Database',
                  '/database/autonomous-database/guaranteed.html': 'Autonomous Database',
                  '/database/technologies/mysql.html': 'MySQL',
                  '/database/autonomous-database.html': 'Autonomous Database',
                  '/autonomous-database/': 'Autonomous Database',
                  '/autonomous-database-on-exadata-cloud-at-customer/': 'Autonomous Database',
                  '/database/adw-cloud.html': 'Autonomous Database',
                  '/database/adw-cloud-pricing.html': 'Autonomous Database',
                  '/database/atp-cloud.html': 'Autonomous Database',
                  '/database/atp-cloud-pricing.html': 'Autonomous Database',
                  '/applications/agile-product-lifecycle-management/':
                    'Product Lifecycle Management',
                  '/applications/customer-experience/': 'Customer Experience Sales & Marketing',
                  '/applications/enterprise-resource-planning/': 'Enterprise Resource Planning',
                  '/applications/erp/': 'Enterprise Resource Planning',
                  '/applications/human-capital-management/': 'Human Capital Management',
                  '/applications/jd-edwards-enterpriseone/': 'Enterprise Resource Planning',
                  '/applications/performance-management/': 'Enterprise Performance Management',
                  '/applications/primavera/': 'Project Portfolio Management',
                  '/applications/rightnow/': 'Customer Experience Service',
                  '/applications/supply-chain-management/': 'Supply Chain Management',
                  '/applications/taleo.html': 'Human Capital Management',
                  '/autonomouscloud/': 'Cloud Technologies',
                  '/big-data/': 'Big Data',
                  '/cloud/blockchain/': 'Application Development',
                  '/cloud/': 'Cloud Technologies',
                  '/cx/industry/digital-experience/': 'Communications Network & SD-WAN',
                  '/cx/service/': 'Customer Experience Service',
                  '/cx/': 'Customer Experience Sales & Marketing',
                  '/database/': 'Database',
                  '/engineered-systems/': 'Engineered Systems',
                  '/enterprise-manager/': 'Cloud Technologies',
                  '/erp/': 'Enterprise Resource Planning',
                  '/human-capital-management/': 'Human Capital Management',
                  '/industries/communications/': 'Enterprise Communications Solutions',
                  '/industries/construction-engineering/': 'Project Portfolio Management',
                  '/java/': 'Application Development',
                  '/linux/': 'Operating Systems and Virtualization',
                  '/marketingcloud/': 'Customer Experience Sales & Marketing',
                  '/middleware/technologies/crystalball.html': 'Construction Project Management',
                  '/middleware/': 'Middleware',
                  '/servers/': 'Server & Storage Systems',
                  '/solaris/': 'Operating Systems and Virtualization',
                  '/solutions/business-analytics/': 'Business Analytics',
                  '/storage/': 'Server & Storage Systems',
                  '/us/products/applications/siebel/': 'Customer Experience Sales & Marketing',
                  '/virtualization/': 'Operating Systems and Virtualization',
                  '/mysql/': 'MySQL',
                  '/applications/siebel/': 'Customer Experience Sales & Marketing',
                  '/industries/food-beverage/': 'Hotel, Restaurant and Casino Solutions',
                  '/industries/hospitality/': 'Hotel, Restaurant and Casino Solutions',
                  '/consulting/': 'Accelerate On Prem to Cloud',
                  '/application-development/': 'Application Development',
                  '/solutions/chatbots/': 'Cloud Technologies',
                  '/business-analytics/': 'Business Analytics',
                  '/corporate/events/live/new-autonomous-services/': 'Cloud Technologies',
                  '/asiasouth/cloudday/': 'Cloud Technologies',
                  '/integration/': 'Middleware',
                  '/scm/': 'Supply Chain Management',
                  '/events/virtual-summits/cloud-cx/': 'Customer Experience Sales & Marketing',
                  '/asiasouth/events/virtual-summits/cloud-platform/': 'Cloud Technologies',
                  '/applications/crystalball/': 'Construction Project Management',
                };
                for (var s in n)
                  if (-1 != location.pathname.indexOf(s)) {
                    e = t[n[s]][a];
                    break;
                  }
                return e;
              },
            },
          },
          truste_consent: {
            defaultValue: 'Not Defined',
            forceLowerCase: !0,
            cleanText: !0,
            storageDuration: 'pageview',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                const $___old_31fac2c0e70be940 = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'doNotTrack'
                );
                try {
                  if ($___old_31fac2c0e70be940)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'doNotTrack',
                      $___stub_5299202f9682c77d.doNotTrack
                    ));
                  return function () {
                    function e () {
                      var e = new Array(-1, 'NoTRUSTe');
                      try {
                        (e[0] = o.truste.api.getConsentDecision().consentDecision),
                          (e[1] = o.truste.api.getConsentDecision().source);
                      } catch (t) {
                        e[0] = -1;
                      }
                      if (-1 == e[0])
                        try {
                          (e[0] =
                            'approved' ==
                            truste.cma.callApi(
                              'getConsent',
                              'oracle.com',
                              null,
                              null,
                              'advertising'
                            ).consent
                              ? 3
                              : -1),
                            (e[1] = truste.cma.callApi('getConsentDecision', 'oracle.com').source),
                            -1 == e[0] &&
                              ((e[0] =
                                'approved' ==
                                truste.cma.callApi(
                                  'getConsent',
                                  'oracle.com',
                                  null,
                                  null,
                                  'functional'
                                ).consent
                                  ? 2
                                  : -1),
                              (e[1] = truste.cma.callApi(
                                'getConsentDecision',
                                'oracle.com'
                              ).source)),
                            -1 == e[0] && (e[0] = 1),
                            'implied' == e[1] && (e[0] = 0);
                        } catch (t) {
                          e[0] = -1;
                        }
                      if (-1 == e[0])
                        try {
                          (e[0] = truste.cma.callApi(
                            'getConsentDecision',
                            'oracle.com'
                          ).consentDecision),
                            (e[1] = truste.cma.callApi('getConsentDecision', 'oracle.com').source);
                        } catch (t) {
                          e[0] = -1;
                        }
                      return e[0];
                    }
                    var t = -1;
                    if (_satellite.getVar('trusteVar') != undefined)
                      return (t = _satellite.getVar('trusteVar')).toString();
                    try {
                      o.truste.api.getConsentDecision().consentDecision,
                        o.truste.api.getConsentDecision().source;
                    } catch (a) {
                      var o = o || {};
                      (o.truste = {}),
                        (o.truste.api = {}),
                        function () {
                          var e = 'notice_preferences',
                            t = 'truste.eu.cookie.notice_preferences';
                          (this.getCookieName = function () {
                            return e;
                          }),
                            (this.getStorageItemName = function () {
                              return t;
                            });
                        }.apply(o.truste),
                        function () {
                          function t (e) {
                            for (
                              var t = e + '=', a = document.cookie.split(';'), n = 0;
                              n < a.length;
                              n++
                            ) {
                              for (var s = a[n]; ' ' == s.charAt(0); ) s = s.substring(1);
                              if (0 == s.indexOf(t)) return s.substring(t.length, s.length);
                            }
                            return null;
                          }
                          function a (e) {
                            const $___old_b730b95ebcdddfef = {}.constructor.getOwnPropertyDescriptor(
                                window,
                                'Storage'
                              ),
                              $___old_fbfc63023a76abb4 = {}.constructor.getOwnPropertyDescriptor(
                                window,
                                'localStorage'
                              );
                            try {
                              if ($___old_b730b95ebcdddfef)
                                ({}.constructor.defineProperty(
                                  window,
                                  'Storage',
                                  $___stub_a011c28886b08277.Storage
                                ));
                              if ($___old_fbfc63023a76abb4)
                                ({}.constructor.defineProperty(
                                  window,
                                  'localStorage',
                                  $___stub_a011c28886b08277.localStorage
                                ));
                              return function () {
                                return 'undefined' != typeof Storage
                                  ? localStorage.getItem(e)
                                  : null;
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_b730b95ebcdddfef)
                                ({}.constructor.defineProperty(
                                  window,
                                  'Storage',
                                  $___old_b730b95ebcdddfef
                                ));
                              if ($___old_fbfc63023a76abb4)
                                ({}.constructor.defineProperty(
                                  window,
                                  'localStorage',
                                  $___old_fbfc63023a76abb4
                                ));
                            }
                          }
                          function n (e) {
                            var t = a(e);
                            return null == t ? null : JSON.parse(t).value;
                          }
                          var s = o.truste;
                          (this.getConsentCode = function () {
                            var e = n(s.getStorageItemName()) || t(s.getCookieName());
                            return null == e ? -1 : parseInt(e) + 1;
                          }),
                            (this.getConsentDecision = function () {
                              var e = this.getConsentCode();
                              if (-1 != e)
                                return (
                                  (t =
                                    '{"consentDecision": ' +
                                    parseInt(e) +
                                    ', "source": "asserted"}'),
                                  JSON.parse(t)
                                );
                              var t = '{"consentDecision": 0, "source": "implied"}';
                              return JSON.parse(t);
                            });
                        }.apply(o.truste.api);
                    }
                    return (
                      (-1 != (t = e()) && 0 != t) ||
                        (1 != navigator.doNotTrack &&
                          1 != window.doNotTrack &&
                          1 != navigator.msDoNotTrack) ||
                        (t = 1),
                      _satellite.setVar('trusteVar', t),
                      t
                    );
                  }.apply(this, arguments);
                } finally {
                  if ($___old_31fac2c0e70be940)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'doNotTrack',
                      $___old_31fac2c0e70be940
                    ));
                }
              },
            },
          },
          siteRegion: {
            defaultValue: 'NA',
            forceLowerCase: !0,
            cleanText: !0,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                function e (e) {
                  if (-1 != e.indexOf('emea')) (i = 'emea'), (d = !0);
                  else if (-1 != e.indexOf('lad')) (i = 'lad'), (d = !0);
                  else if (-1 != e.indexOf('apac')) (i = 'apac'), (d = !0);
                  else if (-1 != e.indexOf('nas')) (i = 'nas'), (d = !0);
                  else if (-1 != e.indexOf('a_'))
                    for (var t = e.split(':'), a = 0; a < t.length; a++)
                      if (-1 != t[a].indexOf('a_')) {
                        (s = t[a].substring(2)), (i = n(s)), (d = !0);
                        break;
                      }
                  return i;
                }
                function n (e) {
                  if (e)
                    for (var t = 0; t < o.length; t++) {
                      var a = o[t];
                      if (-1 != a.countries.indexOf(e)) {
                        i = a.region;
                        break;
                      }
                    }
                  return i;
                }
                function t () {
                  var e,
                    t = [],
                    a = window.location.href;
                  -1 != a.indexOf('#') && (a = a.split('#')[0]);
                  for (
                    var n = a.slice(window.location.href.indexOf('?') + 1).split('&'), s = 0;
                    s < n.length;
                    s++
                  )
                    (e = n[s].split('=')), t.push(e[0]), (t[e[0]] = e[1]);
                  return t;
                }
                if (_satellite.getVar('_siteRegion') != undefined)
                  return _satellite.getVar('_siteRegion');
                var s,
                  o = [
                    {
                      region: 'lad',
                      countries: [
                        'ar',
                        'br',
                        'cl',
                        'co',
                        'cr',
                        'lad',
                        'mx',
                        'pe',
                        'pr',
                        've',
                        'ec',
                        'la',
                        'esa',
                      ],
                    },
                    { region: 'nas', countries: ['ca-en', 'ca-fr', 'as', 'us'] },
                    {
                      region: 'apac',
                      countries: [
                        'asiasouth',
                        'au',
                        'cn',
                        'hk',
                        'in',
                        'id',
                        'jp',
                        'kr',
                        'my',
                        'mn',
                        'nz',
                        'pk',
                        'ph',
                        'sg',
                        'lk',
                        'tw',
                        'th',
                        'vn',
                        'ja',
                        'ko',
                        'zhs',
                        'zht',
                        'ptb',
                      ],
                    },
                    {
                      region: 'emea',
                      countries: [
                        'at',
                        'be',
                        'ba',
                        'bg',
                        'hr',
                        'cy',
                        'cz',
                        'dk',
                        'ee',
                        'fi',
                        'fr',
                        'de',
                        'gr',
                        'hu',
                        'ie',
                        'it',
                        'ru',
                        'lv',
                        'lt',
                        'lu',
                        'mt',
                        'nl',
                        'no',
                        'pl',
                        'pt',
                        'ro',
                        'rs',
                        'sk',
                        'si',
                        'es',
                        'se',
                        'ch-fr',
                        'ch-de',
                        'tr',
                        'ua',
                        'uk',
                        'africa',
                        'africa-fr',
                        'dz',
                        'bh',
                        'eg',
                        'gh',
                        'il',
                        'jo',
                        'ke',
                        'kw',
                        'lb',
                        'middleeast-ar',
                        'middleeast',
                        'ma',
                        'ng',
                        'om',
                        'qa',
                        'sa',
                        'sa-ar',
                        'sn',
                        'za',
                        'ae',
                        'ae-ar',
                        'gb',
                        'preu',
                        'prme',
                        'al',
                        'ao',
                        'de',
                        'dk',
                        'me',
                        'mk',
                        'yu',
                        'emea-en',
                        'ita',
                      ],
                    },
                  ],
                  a = window.location.pathname,
                  i = 'nas';
                if (0 === a.indexOf('/opn/') || 0 === a.indexOf('/partners/'))
                  s = a.split('/').slice(1)[1];
                else if (
                  'community.oracle.com' === location.hostname &&
                  -1 != a.indexOf('/other-languages/')
                ) {
                  var r = a.split('/other-languages/')[1].split('/')[0];
                  'chinese' == r && (s = 'cn'),
                    'japanese' == r && (s = 'jp'),
                    'portuguese' == r && (s = 'pt'),
                    'espanol' == r && (s = 'es'),
                    'german' == r && (s = 'de');
                } else
                  s =
                    'go.oracle.com' === location.hostname
                      ? window.countryCode
                        ? window.countryCode
                        : ''
                      : location.pathname.split('/').slice(1)[0];
                s != undefined && (i = n(s));
                var c = t().source,
                  l = t().src1,
                  u = t().sourceType,
                  d = !1;
                return (
                  c != undefined && 0 == d && (i = e(c)),
                  l != undefined && 0 == d && (i = e(l)),
                  u != undefined && 0 == d && (i = e(u)),
                  (region = i),
                  _satellite.setVar('_siteRegion', region),
                  region
                );
              },
            },
          },
        },
        extensions: {
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/dataElements/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e) {
                    return e.source();
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, a, n) {
                  'use strict';
                  var s,
                    o,
                    i,
                    r = a('@adobe/reactor-document'),
                    c = a('./helpers/decorateCode'),
                    l = a('./helpers/loadCodeSequentially'),
                    u = a('../../../node_modules/postscribe/dist/postscribe'),
                    d =
                      ((s = function (e) {
                        u(r.body, e, {
                          error: function (e) {
                            n.logger.error(e.msg);
                          },
                        });
                      }),
                      (o = []),
                      (i = function () {
                        if (r.body) for (; o.length; ) s(o.shift());
                        else setTimeout(i, 20);
                      }),
                      function (e) {
                        o.push(e), i();
                      }),
                    m = (function () {
                      if (r.currentScript) return r.currentScript.async;
                      for (var e = r.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(a.src)) return a.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    var a = { settings: e, event: t },
                      n = a.settings.source;
                    if (n)
                      return a.settings.isExternal
                        ? l(n).then(function (e) {
                            e && d(c(a, e));
                          })
                        : void (m || 'loading' !== r.readyState
                            ? d(c(a, n))
                            : r.write
                            ? r.write(c(a, n))
                            : d(c(a, n)));
                  };
                },
              },
              'core/src/lib/conditions/subdomain.js': {
                name: 'subdomain',
                displayName: 'Subdomain',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-document'),
                    s = a('../helpers/textMatch');
                  e.exports = function (e) {
                    var a = n.location.hostname;
                    return e.subdomains.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return s(a, t);
                    });
                  };
                },
              },
              'core/src/lib/events/pageBottom.js': {
                name: 'page-bottom',
                displayName: 'Page Bottom',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    n.registerPageBottomTrigger(t);
                  };
                },
              },
              'core/src/lib/conditions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    return e.source.call(t.element, t, t.target);
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    n.registerLibraryLoadedTrigger(t);
                  };
                },
              },
              'core/src/lib/conditions/queryStringParameter.js': {
                name: 'query-string-parameter',
                displayName: 'Query String Parameter',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-window'),
                    s = a('@adobe/reactor-query-string'),
                    o = a('../helpers/textMatch');
                  e.exports = function (e) {
                    var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value,
                      a = s.parse(n.location.search);
                    return o(a[e.name], t);
                  };
                },
              },
              'core/src/lib/conditions/pathAndQuerystring.js': {
                name: 'path-and-querystring',
                displayName: 'Path And Query String',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-document'),
                    s = a('../helpers/textMatch');
                  e.exports = function (e) {
                    var a = n.location.pathname + n.location.search;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return s(a, t);
                    });
                  };
                },
              },
              'core/src/lib/events/windowLoaded.js': {
                name: 'window-loaded',
                displayName: 'Window Loaded',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    n.registerWindowLoadedTrigger(t);
                  };
                },
              },
              'core/src/lib/events/click.js': {
                name: 'click',
                displayName: 'Click',
                script: function (e, t, a) {
                  'use strict';
                  var o = a('@adobe/reactor-window'),
                    i = a('./helpers/createBubbly')(),
                    r = new (a('./helpers/weakMap'))(),
                    c = function (e) {
                      for (; e; ) {
                        var t = e.tagName;
                        if (t && 'a' === t.toLowerCase()) {
                          var a = e.getAttribute('href'),
                            n = e.getAttribute('target');
                          return a &&
                            (!n || '_self' === n || ('_top' === n && o.top === o) || n === o.name)
                            ? e
                            : void 0;
                        }
                        e = e.parentNode;
                      }
                    };
                  document.addEventListener('click', i.evaluateEvent, !0),
                    (e.exports = function (n, s) {
                      i.addListener(n, function (e) {
                        var t = e.nativeEvent;
                        if (!t.s_fe) {
                          if (n.anchorDelay && !r.has(t)) {
                            var a = c(t.target);
                            a &&
                              (t.preventDefault(),
                              setTimeout(function () {
                                o.location = a.href;
                              }, n.anchorDelay)),
                              r.set(t, !0);
                          }
                          s(e);
                        }
                      });
                    }),
                    (e.exports.__reset = i.__reset);
                },
              },
              'core/src/lib/events/directCall.js': {
                name: 'direct-call',
                displayName: 'Direct Call',
                script: function (e, t, a, s) {
                  'use strict';
                  var o = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite.track = function (e, t) {
                      e = e.trim();
                      var a = o[e];
                      if (a) {
                        var n = { identifier: e, detail: t };
                        a.forEach(function (e) {
                          e(n);
                        });
                      } else
                        s.logger.log('"' + e + '" does not match any direct call identifiers.');
                    }),
                    (e.exports = function (e, t) {
                      var a = o[e.identifier];
                      a || (a = o[e.identifier] = []), a.push(t);
                    });
                },
              },
              'core/src/lib/conditions/path.js': {
                name: 'path',
                displayName: 'Path Without Query String',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-document'),
                    s = a('../helpers/textMatch');
                  e.exports = function (e) {
                    var a = n.location.pathname;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return s(a, t);
                    });
                  };
                },
              },
              'core/src/lib/events/mediaTimePlayed.js': {
                name: 'media-time-played',
                displayName: 'Media Time Played',
                script: function (e, t, a) {
                  'use strict';
                  var r = a('./helpers/createBubbly')(),
                    c = new (a('./helpers/weakMap'))(),
                    l = [],
                    u = { SECOND: 'second', PERCENT: 'percent' },
                    n = function (e) {
                      var a = e.target;
                      if (a.seekable && a.seekable.length) {
                        var t = a.seekable,
                          n = t.start(0),
                          s = t.end(0),
                          o = a.currentTime - n,
                          i = c.get(a) || 0;
                        l.forEach(function (e) {
                          var t = e.unit === u.SECOND ? e.amount : (s - n) * (e.amount / 100);
                          i < t &&
                            t <= o &&
                            r.evaluateEvent({ target: a, amount: e.amount, unit: e.unit }, !0);
                        }),
                          c.set(a, o);
                      }
                    };
                  document.addEventListener('timeupdate', n, !0),
                    (e.exports = function (t, a) {
                      var e = function (e) {
                        return e.amount === t.amount && e.unit === t.unit;
                      };
                      l.some(e) || l.push({ amount: t.amount, unit: t.unit }),
                        r.addListener(t, function (e) {
                          if (e.amount !== t.amount || e.unit !== t.unit) return !1;
                          a(e);
                        });
                    });
                },
              },
              'core/src/lib/events/historyChange.js': {
                name: 'history-change',
                displayName: 'History Change',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/debounce'),
                    s = a('./helpers/once'),
                    o = window.history,
                    i = window.location.href,
                    r = [],
                    c = function (t, e, a) {
                      var n = t[e];
                      t[e] = function () {
                        var e = n.apply(t, arguments);
                        return a.apply(null, arguments), e;
                      };
                    },
                    l = n(function () {
                      var e = window.location.href;
                      i !== e &&
                        (r.forEach(function (e) {
                          e();
                        }),
                        (i = e));
                    }, 0),
                    u = s(function () {
                      o &&
                        (o.pushState && c(o, 'pushState', l),
                        o.replaceState && c(o, 'replaceState', l)),
                        window.addEventListener('popstate', l),
                        window.addEventListener('hashchange', l);
                    });
                  e.exports = function (e, t) {
                    u(), r.push(t);
                  };
                },
              },
              'core/src/lib/conditions/browser.js': {
                name: 'browser',
                displayName: 'Browser',
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./helpers/clientInfo');
                  e.exports = function (e) {
                    return -1 !== e.browsers.indexOf(n.browser);
                  };
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, t, a, n) {
                  'use strict';
                  var s = 0,
                    o = function (e) {
                      return e.settings.isExternal;
                    },
                    i = function (e, t) {
                      return '<script>\n' + t + '\n</script>';
                    },
                    r = function (t, e) {
                      var a = '__runScript' + ++s;
                      return (
                        (_satellite[a] = function (e) {
                          e.call(t.event.element, t.event, t.event.target), delete _satellite[a];
                        }),
                        '<script>_satellite["' +
                          a +
                          '"](function(event, target) {\n' +
                          e +
                          '\n});</script>'
                      );
                    },
                    c = {
                      javascript: function (e, t) {
                        return e.settings.global ? i(e, t) : r(e, t);
                      },
                      html: function (e, t) {
                        return o(e) ? n.replaceTokens(t, e.event) : t;
                      },
                    };
                  e.exports = function (e, t) {
                    return c[e.settings.language](e, t);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-promise'),
                    s = a('./getSourceByUrl'),
                    o = n.resolve();
                  e.exports = function (t) {
                    var e = new n(function (a) {
                      var e = s(t);
                      n.all([e, o]).then(function (e) {
                        var t = e[0];
                        a(t);
                      });
                    });
                    return (o = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (a, n) {
                  !(function s (e, t) {
                    'object' == typeof n && 'object' == typeof a
                      ? (a.exports = t())
                      : 'function' == typeof define && define.amd
                      ? define([], t)
                      : 'object' == typeof n
                      ? (n.postscribe = t())
                      : (e.postscribe = t());
                  })(this, function () {
                    return (function (a) {
                      function n (e) {
                        if (s[e]) return s[e].exports;
                        var t = (s[e] = { exports: {}, id: e, loaded: !1 });
                        return a[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports;
                      }
                      var s = {};
                      return (n.m = a), (n.c = s), (n.p = ''), n(0);
                    })([
                      function (e, t, a) {
                        'use strict';
                        function n (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var s = n(a(1));
                        e.exports = s['default'];
                      },
                      function (e, t, a) {
                        'use strict';
                        function n (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var a in e)
                              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                          return (t['default'] = e), t;
                        }
                        function s (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function l () {}
                        function u () {
                          var e = c.shift();
                          if (e) {
                            var t = i.last(e);
                            t.afterDequeue(),
                              (e.stream = o.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function o (e, t, n) {
                          function s (e) {
                            (e = n.beforeWrite(e)), p.write(e), n.afterWrite(e);
                          }
                          ((p = new g['default'](e, n)).id = v++),
                            (p.name = n.name || p.id),
                            (d.streams[p.name] = p);
                          var a = e.ownerDocument,
                            o = {
                              close: a.close,
                              open: a.open,
                              write: a.write,
                              writeln: a.writeln,
                            };
                          m(a, {
                            close: l,
                            open: l,
                            write: function r () {
                              for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                                t[a] = arguments[a];
                              return s(t.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                                t[a] = arguments[a];
                              return s(t.join('') + '\n');
                            },
                          });
                          var i = p.win.onerror || l;
                          return (
                            (p.win.onerror = function (e, t, a) {
                              n.error({ msg: e + ' - ' + t + ': ' + a }),
                                i.apply(p.win, [e, t, a]);
                            }),
                            p.write(t, function () {
                              m(a, o), (p.win.onerror = i), n.done(), (p = null), u();
                            }),
                            p
                          );
                        }
                        function d (e, t, a) {
                          if (i.isFunction(a)) a = { done: a };
                          else if ('clear' === a) return (c = []), (p = null), void (v = 0);
                          a = i.defaults(a, r);
                          var n = [
                            (e = /^#/.test(e)
                              ? window.document.getElementById(e.substr(1))
                              : e.jquery
                              ? e[0]
                              : e),
                            t,
                            a,
                          ];
                          return (
                            (e.postscribe = {
                              cancel: function s () {
                                n.stream ? n.stream.abort() : (n[1] = l);
                              },
                            }),
                            a.beforeEnqueue(n),
                            c.push(n),
                            p || u(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var m =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var n in a)
                                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                          };
                        t['default'] = d;
                        var g = s(a(2)),
                          i = n(a(4)),
                          r = {
                            afterAsync: l,
                            afterDequeue: l,
                            afterStreamStart: l,
                            afterWrite: l,
                            autoFix: !0,
                            beforeEnqueue: l,
                            beforeWriteToken: function f (e) {
                              return e;
                            },
                            beforeWrite: function b (e) {
                              return e;
                            },
                            done: l,
                            error: function h (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          v = 0,
                          c = [],
                          p = null;
                        m(d, { streams: {}, queue: c, WriteStream: g['default'] });
                      },
                      function (e, t, a) {
                        'use strict';
                        function n (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var a in e)
                              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                          return (t['default'] = e), t;
                        }
                        function s (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function x (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function w (e, t) {
                          var a = C + t,
                            n = e.getAttribute(a);
                          return I.existy(n) ? String(n) : n;
                        }
                        function y (e, t, a) {
                          var n = 2 < arguments.length && a !== undefined ? arguments[2] : null,
                            s = C + t;
                          I.existy(n) && '' !== n ? e.setAttribute(s, n) : e.removeAttribute(s);
                        }
                        t.__esModule = !0;
                        var R =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a)
                                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                            },
                          j = s(a(3)),
                          I = n(a(4)),
                          _ = !1,
                          C = 'data-ps-',
                          P = 'ps-style',
                          O = 'ps-script',
                          o = (function () {
                            function n (e, t) {
                              var a = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              x(this, n),
                                (this.root = e),
                                (this.options = a),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new j['default']('', { autoFix: a.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                y(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (n.prototype.write = function a () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var t = this.writeQueue.shift();
                                  I.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (n.prototype._callFunction = function s (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (n.prototype._writeImpl = function o (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, a = void 0, n = void 0, s = [];
                                  (t = this.parser.readToken()) &&
                                  !(a = I.isScript(t)) &&
                                  !(n = I.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && s.push(t);
                                0 < s.length && this._writeStaticTokens(s),
                                  a && this._handleScriptToken(t),
                                  n && this._handleStyleToken(t);
                              }),
                              (n.prototype._writeStaticTokens = function i (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    _ && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    _ && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (n.prototype._buildChunk = function u (e) {
                                for (
                                  var t = this.actuals.length,
                                    a = [],
                                    n = [],
                                    s = [],
                                    o = e.length,
                                    i = 0;
                                  i < o;
                                  i++
                                ) {
                                  var r = e[i],
                                    c = r.toString();
                                  if ((a.push(c), r.attrs)) {
                                    if (!/^noscript$/i.test(r.tagName)) {
                                      var l = t++;
                                      n.push(c.replace(/(\/?>)/, ' ' + C + 'id=' + l + ' $1')),
                                        r.attrs.id !== O &&
                                          r.attrs.id !== P &&
                                          s.push(
                                            'atomicTag' === r.type
                                              ? ''
                                              : '<' +
                                                  r.tagName +
                                                  ' ' +
                                                  C +
                                                  'proxyof=' +
                                                  l +
                                                  (r.unary ? ' />' : '>')
                                          );
                                    }
                                  } else n.push(c), s.push('endTag' === r.type ? c : '');
                                }
                                return {
                                  tokens: e,
                                  raw: a.join(''),
                                  actual: n.join(''),
                                  proxy: s.join(''),
                                };
                              }),
                              (n.prototype._walkChunk = function r () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  I.existy((e = t.shift()));

                                ) {
                                  var a = 1 === e.nodeType;
                                  if (!a || !w(e, 'proxyof')) {
                                    a && y((this.actuals[w(e, 'id')] = e), 'id');
                                    var n = e.parentNode && w(e.parentNode, 'proxyof');
                                    n && this.actuals[n].appendChild(e);
                                  }
                                  t.unshift.apply(t, I.toArray(e.childNodes));
                                }
                              }),
                              (n.prototype._handleScriptToken = function c (e) {
                                var t = this,
                                  a = this.parser.clear();
                                a && this.writeQueue.unshift(a),
                                  (e.src = e.attrs.src || e.attrs.SRC),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    (e.src && this.scriptStack.length
                                      ? (this.deferredRemote = e)
                                      : this._onScriptStart(e),
                                    this._writeScriptToken(e, function () {
                                      t._onScriptDone(e);
                                    }));
                              }),
                              (n.prototype._handleStyleToken = function l (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (n.prototype._writeStyleToken = function d (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, P),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (n.prototype._buildStyle = function t (e) {
                                var a = this.doc.createElement(e.tagName);
                                return (
                                  a.setAttribute('type', e.type),
                                  I.eachKey(e.attrs, function (e, t) {
                                    a.setAttribute(e, t);
                                  }),
                                  a
                                );
                              }),
                              (n.prototype._insertCursor = function m (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var a = this.doc.getElementById(t);
                                a && a.parentNode.replaceChild(e, a);
                              }),
                              (n.prototype._onScriptStart = function g (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (n.prototype._onScriptDone = function v (e) {
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
                              (n.prototype._writeScriptToken = function p (e, t) {
                                var a = this._buildScript(e),
                                  n = this._shouldRelease(a),
                                  s = this.options.afterAsync;
                                e.src &&
                                  ((a.src = e.src),
                                  this._scriptLoadHandler(
                                    a,
                                    n
                                      ? s
                                      : function () {
                                          t(), s();
                                        }
                                  ));
                                try {
                                  this._insertCursor(a, O), (a.src && !n) || t();
                                } catch (o) {
                                  this.options.error(o), t();
                                }
                              }),
                              (n.prototype._buildScript = function f (e) {
                                var a = this.doc.createElement(e.tagName);
                                return (
                                  I.eachKey(e.attrs, function (e, t) {
                                    a.setAttribute(e, t);
                                  }),
                                  e.content && (a.text = e.content),
                                  a
                                );
                              }),
                              (n.prototype._scriptLoadHandler = function b (t, a) {
                                function n () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function s () {
                                  n(), null != a && a(), (a = null);
                                }
                                function o (e) {
                                  n(), i(e), null != a && a(), (a = null);
                                }
                                function e (e, t) {
                                  var a = e['on' + t];
                                  null != a && (e['_on' + t] = a);
                                }
                                var i = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  R(t, {
                                    onload: function r () {
                                      if (t._onload)
                                        try {
                                          t._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          o({ msg: 'onload handler failed ' + e + ' @ ' + t.src });
                                        }
                                      s();
                                    },
                                    onerror: function c () {
                                      if (t._onerror)
                                        try {
                                          t._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          return void o({
                                            msg: 'onerror handler failed ' + e + ' @ ' + t.src,
                                          });
                                        }
                                      o({ msg: 'remote script failed ' + t.src });
                                    },
                                    onreadystatechange: function l () {
                                      /^(loaded|complete)$/.test(t.readyState) && s();
                                    },
                                  });
                              }),
                              (n.prototype._shouldRelease = function h (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              n
                            );
                          })();
                        t['default'] = o;
                      },
                      function (a) {
                        !(function n (e, t) {
                          a.exports = t();
                        })(0, function () {
                          return (function (a) {
                            function n (e) {
                              if (s[e]) return s[e].exports;
                              var t = (s[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                a[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports
                              );
                            }
                            var s = {};
                            return (n.m = a), (n.c = s), (n.p = ''), n(0);
                          })([
                            function (e, t, a) {
                              'use strict';
                              function n (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var s = n(a(1));
                              e.exports = s['default'];
                            },
                            function (e, t, a) {
                              'use strict';
                              function n (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function s (e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                  for (var a in e)
                                    Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                                return (t['default'] = e), t;
                              }
                              function u (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              t.__esModule = !0;
                              var d = s(a(2)),
                                m = s(a(3)),
                                g = n(a(6)),
                                o = a(5),
                                v = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                i = (function () {
                                  function c (e, t) {
                                    var a = this,
                                      n =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      s =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    u(this, c), (this.stream = n);
                                    var o = !1,
                                      i = {};
                                    for (var r in d)
                                      d.hasOwnProperty(r) &&
                                        (s.autoFix && (i[r + 'Fix'] = !0),
                                        (o = o || i[r + 'Fix']));
                                    o
                                      ? ((this._readToken = (0, g['default'])(
                                          this,
                                          i,
                                          function () {
                                            return a._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, g['default'])(this, i, function () {
                                          return a._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (c.prototype.append = function t (e) {
                                      this.stream += e;
                                    }),
                                    (c.prototype.prepend = function a (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (c.prototype._readTokenImpl = function n () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (c.prototype._peekTokenImpl = function s () {
                                      for (var e in v)
                                        if (v.hasOwnProperty(e) && v[e].test(this.stream)) {
                                          var t = m[e](this.stream);
                                          if (t)
                                            return 'startTag' === t.type &&
                                              /script|style/i.test(t.tagName)
                                              ? null
                                              : ((t.text = this.stream.substr(0, t.length)), t);
                                        }
                                    }),
                                    (c.prototype.peekToken = function e () {
                                      return this._peekToken();
                                    }),
                                    (c.prototype.readToken = function o () {
                                      return this._readToken();
                                    }),
                                    (c.prototype.readTokens = function i (e) {
                                      for (var t = void 0; (t = this.readToken()); )
                                        if (e[t.type] && !1 === e[t.type](t)) return;
                                    }),
                                    (c.prototype.clear = function r () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (c.prototype.rest = function l () {
                                      return this.stream;
                                    }),
                                    c
                                  );
                                })();
                              for (var r in (((t['default'] = i).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (i.escapeAttributes = function (e) {
                                var t = {};
                                for (var a in e)
                                  e.hasOwnProperty(a) && (t[a] = (0, o.escapeQuotes)(e[a], null));
                                return t;
                              }),
                              (i.supports = d)))
                                d.hasOwnProperty(r) &&
                                  (i.browserHasFlaw = i.browserHasFlaw || (!d[r] && r));
                            },
                            function (e, t) {
                              'use strict';
                              var a = !(t.__esModule = !0),
                                n = !1,
                                s = window.document.createElement('div');
                              try {
                                var o = '<P><I></P></I>';
                                (s.innerHTML = o), (t.tagSoup = a = s.innerHTML !== o);
                              } catch (i) {
                                t.tagSoup = a = !1;
                              }
                              try {
                                (s.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = n = 2 === s.childNodes.length);
                              } catch (i) {
                                t.selfClose = n = !1;
                              }
                              (s = null), (t.tagSoup = a), (t.selfClose = n);
                            },
                            function (e, t, a) {
                              'use strict';
                              function n (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new u.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function s (e) {
                                var t = e.indexOf('<');
                                return new u.CharsToken(0 <= t ? t : e.length);
                              }
                              function o (e) {
                                var i, r, c;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(d.startTag);
                                  if (t) {
                                    var a =
                                      ((i = {}),
                                      (r = {}),
                                      (c = t[2]),
                                      t[2].replace(d.attr, function (e, t, a, n, s, o) {
                                        a || n || s || o
                                          ? arguments[5]
                                            ? ((i[arguments[5]] = ''), (r[arguments[5]] = !0))
                                            : (i[t] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (d.fillAttr.test(t) && t) ||
                                                '')
                                          : (i[t] = ''),
                                          (c = c.replace(e, ''));
                                      }),
                                      {
                                        v: new u.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          i,
                                          r,
                                          !!t[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === a ? 'undefined' : l(a)))
                                      return a.v;
                                  }
                                }
                              }
                              function i (e) {
                                var t = o(e);
                                if (t) {
                                  var a = e.slice(t.length);
                                  if (a.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                    var n = a.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                    );
                                    if (n)
                                      return new u.AtomicTagToken(
                                        t.tagName,
                                        n[0].length + t.length,
                                        t.attrs,
                                        t.booleanAttrs,
                                        n[1]
                                      );
                                  }
                                }
                              }
                              function r (e) {
                                var t = e.match(d.endTag);
                                if (t) return new u.EndTagToken(t[1], t[0].length);
                              }
                              t.__esModule = !0;
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
                              (t.comment = n),
                                (t.chars = s),
                                (t.startTag = o),
                                (t.atomicTag = i),
                                (t.endTag = r);
                              var u = a(4),
                                d = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, t, a) {
                              'use strict';
                              function r (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (t.__esModule = !0),
                                (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                              var c = a(5),
                                n = (t.Token = function n (e, t) {
                                  r(this, n), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                s =
                                  ((t.CommentToken = (function () {
                                    function a (e, t) {
                                      r(this, a),
                                        (this.type = 'comment'),
                                        (this.length = t || (e ? e.length : 0)),
                                        (this.text = ''),
                                        (this.content = e);
                                    }
                                    return (
                                      (a.prototype.toString = function e () {
                                        return '<!--' + this.content;
                                      }),
                                      a
                                    );
                                  })()),
                                  (t.CharsToken = (function () {
                                    function t (e) {
                                      r(this, t),
                                        (this.type = 'chars'),
                                        (this.length = e),
                                        (this.text = '');
                                    }
                                    return (
                                      (t.prototype.toString = function e () {
                                        return this.text;
                                      }),
                                      t
                                    );
                                  })()),
                                  (t.TagToken = (function () {
                                    function o (e, t, a, n, s) {
                                      r(this, o),
                                        (this.type = e),
                                        (this.length = a),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = n),
                                        (this.booleanAttrs = s),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (o.formatTag = function i (e, t) {
                                        var a =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          n = '<' + e.tagName;
                                        for (var s in e.attrs)
                                          if (e.attrs.hasOwnProperty(s)) {
                                            n += ' ' + s;
                                            var o = e.attrs[s];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[s]) ||
                                              (n += '="' + (0, c.escapeQuotes)(o) + '"');
                                          }
                                        return (
                                          e.rest && (n += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (n += '/>') : (n += '>'),
                                          a !== undefined &&
                                            null !== a &&
                                            (n += a + '</' + e.tagName + '>'),
                                          n
                                        );
                                      }),
                                      o
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function i (e, t, a, n, s, o) {
                                  r(this, i),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = a),
                                    (this.booleanAttrs = n),
                                    (this.html5Unary = !1),
                                    (this.unary = s),
                                    (this.rest = o);
                                }
                                return (
                                  (i.prototype.toString = function e () {
                                    return s.formatTag(this);
                                  }),
                                  i
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function o (e, t, a, n, s) {
                                    r(this, o),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = a),
                                      (this.booleanAttrs = n),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = s);
                                  }
                                  return (
                                    (o.prototype.toString = function e () {
                                      return s.formatTag(this, this.content);
                                    }),
                                    o
                                  );
                                })()),
                                (t.EndTagToken = (function () {
                                  function a (e, t) {
                                    r(this, a),
                                      (this.type = 'endTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e);
                                  }
                                  return (
                                    (a.prototype.toString = function e () {
                                      return '</' + this.tagName + '>';
                                    }),
                                    a
                                  );
                                })());
                            },
                            function (e, t) {
                              'use strict';
                              function a (e, t) {
                                var a =
                                  1 < arguments.length && t !== undefined ? arguments[1] : '';
                                return e
                                  ? e.replace(/([^"]*)"/g, function (e, t) {
                                      return /\\/.test(t) ? t + '"' : t + '\\"';
                                    })
                                  : a;
                              }
                              (t.__esModule = !0), (t.escapeQuotes = a);
                            },
                            function (e, t) {
                              'use strict';
                              function l (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = n.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function u (e, t) {
                                var a = e.stream,
                                  n = l(t());
                                return (e.stream = a), n;
                              }
                              function d (e, t) {
                                var a = t.pop();
                                e.prepend('</' + a.tagName + '>');
                              }
                              function m () {
                                var e = [];
                                return (
                                  (e.last = function () {
                                    return this[this.length - 1];
                                  }),
                                  (e.lastTagNameEq = function (e) {
                                    var t = this.last();
                                    return (
                                      t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase()
                                    );
                                  }),
                                  (e.containsTagName = function (e) {
                                    for (var t, a = 0; (t = this[a]); a++)
                                      if (t.tagName === e) return !0;
                                    return !1;
                                  }),
                                  e
                                );
                              }
                              function a (a, n, t) {
                                function s () {
                                  var e = u(a, t);
                                  e && i[e.type] && i[e.type](e);
                                }
                                var o = m(),
                                  i = {
                                    startTag: function r (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && o.lastTagNameEq('TABLE')
                                        ? (a.prepend('<TBODY>'), s())
                                        : n.selfCloseFix && g.test(t) && o.containsTagName(t)
                                        ? o.lastTagNameEq(t)
                                          ? d(a, o)
                                          : (a.prepend('</' + e.tagName + '>'), s())
                                        : e.unary || o.push(e);
                                    },
                                    endTag: function c (e) {
                                      o.last()
                                        ? n.tagSoupFix && !o.lastTagNameEq(e.tagName)
                                          ? d(a, o)
                                          : o.pop()
                                        : n.tagSoupFix && (t(), s());
                                    },
                                  };
                                return function e () {
                                  return s(), l(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = a);
                              var n = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                g = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, t) {
                        'use strict';
                        function n (e) {
                          return null != e;
                        }
                        function a (e) {
                          return 'function' == typeof e;
                        }
                        function s (e, t, a) {
                          var n = void 0,
                            s = (e && e.length) || 0;
                          for (n = 0; n < s; n++) t.call(a, e[n], n);
                        }
                        function o (e, t, a) {
                          for (var n in e) e.hasOwnProperty(n) && t.call(a, n, e[n]);
                        }
                        function i (a, e) {
                          return (
                            (a = a || {}),
                            o(e, function (e, t) {
                              n(a[e]) || (a[e] = t);
                            }),
                            a
                          );
                        }
                        function r (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (n) {
                            var t =
                              ((a = []),
                              s(e, function (e) {
                                a.push(e);
                              }),
                              { v: a });
                            if ('object' === (void 0 === t ? 'undefined' : m(t))) return t.v;
                          }
                          var a;
                        }
                        function c (e) {
                          return e[e.length - 1];
                        }
                        function l (e, t) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(t)
                          );
                        }
                        function u (e) {
                          return l(e, 'script');
                        }
                        function d (e) {
                          return l(e, 'style');
                        }
                        t.__esModule = !0;
                        var m =
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
                        (t.existy = n),
                          (t.isFunction = a),
                          (t.each = s),
                          (t.eachKey = o),
                          (t.defaults = i),
                          (t.toArray = r),
                          (t.last = c),
                          (t.isTag = l),
                          (t.isScript = u),
                          (t.isStyle = d);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-load-script'),
                    s = a('@adobe/reactor-promise'),
                    o = {},
                    i = {},
                    r = function (e) {
                      return i[e] || (i[e] = n(e)), i[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    o[e] = t;
                  }),
                    (e.exports = function (t) {
                      return o[t]
                        ? s.resolve(o[t])
                        : new s(function (e) {
                            r(t).then(
                              function () {
                                e(o[t]);
                              },
                              function () {
                                e();
                              }
                            );
                          });
                    });
                },
              },
              'core/src/lib/helpers/textMatch.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    if (null == t) throw new Error('Illegal Argument: Pattern is not present');
                    return (
                      null != e &&
                      ('string' == typeof t ? e === t : t instanceof RegExp && t.test(e))
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, a) {
                  const $___old_07a5d0cd7749803d = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_07a5d0cd7749803d)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_9d7b4eb662ee43f5.appVersion
                      ));
                    return function () {
                      'use strict';
                      var n = a('@adobe/reactor-window'),
                        s = a('@adobe/reactor-document'),
                        o = -1 !== n.navigator.appVersion.indexOf('MSIE 10'),
                        i = 'WINDOW_LOADED',
                        r = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        l = [c, r, i],
                        u = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        d = {};
                      l.forEach(function (e) {
                        d[e] = [];
                      });
                      var m = function (e, t) {
                          l.slice(0, v(e) + 1).forEach(function (e) {
                            p(t, e);
                          });
                        },
                        g = function () {
                          return 'complete' === s.readyState
                            ? i
                            : 'interactive' === s.readyState
                            ? o
                              ? null
                              : r
                            : void 0;
                        },
                        v = function (e) {
                          return l.indexOf(e);
                        },
                        p = function (t, e) {
                          d[e].forEach(function (e) {
                            f(t, e);
                          }),
                            (d[e] = []);
                        },
                        f = function (e, t) {
                          var a = t.trigger,
                            n = t.syntheticEventFn;
                          a(n ? n(e) : null);
                        };
                      (n._satellite = n._satellite || {}),
                        (n._satellite.pageBottom = m.bind(null, c)),
                        s.addEventListener('DOMContentLoaded', m.bind(null, r), !0),
                        n.addEventListener('load', m.bind(null, i), !0),
                        n.setTimeout(function () {
                          var e = g();
                          e && m(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            d[c].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            d[r].push({ trigger: e, syntheticEventFn: u.bind(null, s) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[i].push({ trigger: e, syntheticEventFn: u.bind(null, n) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_07a5d0cd7749803d)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_07a5d0cd7749803d
                      ));
                  }
                },
              },
              'core/src/lib/events/helpers/createBubbly.js': {
                script: function (e, t, a) {
                  'use strict';
                  var n = a('./weakMap'),
                    g = a('./matchesProperties'),
                    v = a('./matchesSelector');
                  e.exports = function () {
                    var d = [],
                      m = new n(),
                      e = {
                        addListener: function (e, t) {
                          d.push({ settings: e, callback: t });
                        },
                        evaluateEvent: function (t, e) {
                          if (d.length && !m.has(t)) {
                            for (var a = t.target, n = !1; a; ) {
                              for (var s = !1, o = !1, i = 0; i < d.length; i++) {
                                var r = d[i],
                                  c = r.settings.elementSelector,
                                  l = r.settings.elementProperties;
                                if (
                                  (!1 !== r.settings.bubbleFireIfChildFired || !n) &&
                                  (a === t.target || !1 !== r.settings.bubbleFireIfParent) &&
                                  (a === t.target || c || (l && Object.keys(l).length)) &&
                                  (!c || v(a, c)) &&
                                  (!l || g(a, l))
                                ) {
                                  var u = {};
                                  e
                                    ? Object.keys(t).forEach(function (e) {
                                        u[e] = t[e];
                                      })
                                    : (u.nativeEvent = t),
                                    (u.element = a),
                                    (u.target = t.target),
                                    !1 !== r.callback(u) &&
                                      ((o = !0), r.settings.bubbleStop && (s = !0));
                                }
                              }
                              if (s) break;
                              o && (n = !0), (a = a.parentNode);
                            }
                            m.set(t, !0);
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
                script: function (e, t, a) {
                  'use strict';
                  var n = a('@adobe/reactor-window').WeakMap;
                  if (void 0 === n) {
                    var s = Object.defineProperty,
                      o = Date.now() % 1000000000;
                    (n = function () {
                      this.name = '__st' + ((1000000000 * Math.random()) >>> 0) + o++ + '__';
                    }).prototype = {
                      set: function (e, t) {
                        var a = e[this.name];
                        return (
                          a && a[0] === e
                            ? (a[1] = t)
                            : s(e, this.name, { value: [e, t], writable: !0 }),
                          this
                        );
                      },
                      get: function (e) {
                        var t;
                        return (t = e[this.name]) && t[0] === e ? t[1] : undefined;
                      },
                      delete: function (e) {
                        var t = e[this.name];
                        return !(!t || t[0] !== e || ((t[0] = t[1] = undefined), 0));
                      },
                      has: function (e) {
                        var t = e[this.name];
                        return !!t && t[0] === e;
                      },
                    };
                  }
                  e.exports = n;
                },
              },
              'core/src/lib/events/helpers/matchesProperties.js': {
                script: function (e, t, a) {
                  'use strict';
                  var s = a('./../../helpers/textMatch'),
                    o = function (e, t) {
                      return '@text' === t || 'innerText' === t
                        ? e.textContent || e.innerText
                        : t in e
                        ? e[t]
                        : e.getAttribute
                        ? e.getAttribute(t)
                        : void 0;
                    };
                  e.exports = function (n, e) {
                    return (
                      !e ||
                      e.every(function (e) {
                        var t = o(n, e.name),
                          a = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                        return s(t, a);
                      })
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/matchesSelector.js': {
                script: function (e, t, a, s) {
                  'use strict';
                  e.exports = function (e, t) {
                    var a = e.matches || e.msMatchesSelector;
                    if (a)
                      try {
                        return a.call(e, t);
                      } catch (n) {
                        return (
                          s.logger.warn(
                            'Matching element failed. ' + t + ' is not a valid selector.'
                          ),
                          !1
                        );
                      }
                    return !1;
                  };
                },
              },
              'core/src/lib/events/helpers/debounce.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (a, n, s) {
                    var o = null;
                    return function () {
                      var e = s || this,
                        t = arguments;
                      clearTimeout(o),
                        (o = setTimeout(function () {
                          a.apply(e, t);
                        }, n));
                    };
                  };
                },
              },
              'core/src/lib/events/helpers/once.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    var a;
                    return function () {
                      return e && ((a = e.apply(t || this, arguments)), (e = null)), a;
                    };
                  };
                },
              },
              'core/src/lib/conditions/helpers/clientInfo.js': {
                script: function (e) {
                  const $___old_e22eb9bc387a5276 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  );
                  try {
                    if ($___old_e22eb9bc387a5276)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_9d7b4eb662ee43f5.userAgent
                      ));
                    return function () {
                      'use strict';
                      var t = function (s) {
                          return function (e) {
                            for (var t = Object.keys(s), a = 0; a < t.length; a++) {
                              var n = t[a];
                              if (s[n].test(e)) return n;
                            }
                            return 'Unknown';
                          };
                        },
                        a = t({
                          Edge: /Edge/,
                          'Mobile Safari': /Mobile(\/[0-9A-z]+)? Safari/,
                          Chrome: /Chrome/,
                          Firefox: /Firefox/,
                          IE: /MSIE|Trident/,
                          Safari: /Safari/,
                        })(navigator.userAgent),
                        n = t({
                          iOS: /iPhone|iPad|iPod/,
                          Android: /Android [0-9\.]+;/,
                          Linux: / Linux /,
                          Unix: /FreeBSD|OpenBSD|CrOS/,
                          Windows: /[\( ]Windows /,
                          MacOS: /Macintosh;/,
                        })(navigator.userAgent),
                        s = t({
                          iPhone: /iPhone/,
                          iPad: /iPad/,
                          iPod: /iPod/,
                          Nokia: /SymbOS|Maemo/,
                          'Windows Phone': /IEMobile/,
                          Blackberry: /BlackBerry/,
                          Android: /Android [0-9\.]+;/,
                          Desktop: /.*/,
                        })(navigator.userAgent);
                      e.exports = { browser: a, os: n, deviceType: s };
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_e22eb9bc387a5276)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_e22eb9bc387a5276
                      ));
                  }
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP04617b99e04841b9991487d04c8db46c/',
          },
        },
        company: { orgId: '93263704532955710A490D44@AdobeOrg' },
        property: {
          name: 'OCOM Mktg Web Container (DTM - 2019-04-25 01:09:59)',
          settings: {
            domains: ['oracle.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RL0c761228297d46b9a1d758695bd0a6b9',
            name: 'Eloqua NAS HCM Q3FY18 - February 20 2018 - 145754',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    (t[63150] = { cat: 'hcmwo0' }),
                      (t[63151] = { cat: 'hcmwo00' }),
                      (t[63011] = { cat: 'succe0' }),
                      (t[63012] = { cat: 'succe00' }),
                      (t[62997] = { cat: 'succe0' }),
                      (t[62998] = { cat: 'succe00' }),
                      (t[57759] = { cat: 'hcmwo0' }),
                      (t[57758] = { cat: 'hcmwo00' }),
                      (t[64441] = { cat: 'socia0' }),
                      (t[64436] = { cat: 'socia00' });
                    var a = _satellite.getVar('LP_id');
                    return 'object' == typeof t[a] && ((window.cat = t[a].cat), !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<!-- Start of DoubleClick Floodlight Tag: Please do not remove --> <iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=namhc001;cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL9a61430a19514ffca5daa4bc8812f85d',
            name: 'Maxymiser Core Script',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '^/index.html', valueIsRegex: !0 },
                    { value: '^/modern-business-experience/', valueIsRegex: !0 },
                    { value: '/corporate/acquisitions/micros/', valueIsRegex: !0 },
                    { value: '/dtm-upgrade/hp.html', valueIsRegex: !0 },
                    { value: '/datalayer/cxd-poc.html', valueIsRegex: !0 },
                    { value: '/applications/erp/', valueIsRegex: !0 },
                    { value: '^/database/autonomous-database.html', valueIsRegex: !0 },
                    { value: '^/database/', valueIsRegex: !0 },
                    { value: '^/applications/customer-experience/data-cloud/', valueIsRegex: !0 },
                    {
                      value: '/emea/applications/erp/connected-intelligence-finance-function.html',
                      valueIsRegex: !0,
                    },
                    {
                      value:
                        '/emea/applications/erp/connected-intelligence-finance-function-report.html',
                      valueIsRegex: !0,
                    },
                    {
                      value:
                        '/emea/applications/erp/connected-intelligence-finance-function-data.html',
                      valueIsRegex: !0,
                    },
                    { value: '/launch/sync/mxymiser-sync.html', valueIsRegex: !0 },
                    { value: '^/applications/$', valueIsRegex: !0 },
                    { value: '^/erp/agile-finance/', valueIsRegex: !0 },
                    { value: '^/erp/agile-finance-form.html', valueIsRegex: !0 },
                    {
                      value: '^/cx/sales/sales-force-automation/gartner-mq/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    { value: '^/cloud/(\\?.*)*$', valueIsRegex: !0 },
                    { value: '^/cloud/free/(\\?.*)*$', valueIsRegex: !0 },
                    { value: '^/cloud/economics/(\\?.*)*$', valueIsRegex: !0 },
                    {
                      value: '/performance-management/solutions/scenario-planning/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value:
                        '/performance-management/solutions/scenario-planning-eloqua-form.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/scm/solutions/complete-guide-to-modern-scm/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/scm/solutions/insights-collaboration/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/scm/solutions/insights-collaboration-contact-form.html',
                      valueIsRegex: !0,
                    },
                    {
                      value:
                        '/cloud/apps-to-cloud/solutions/migrate-applications/digital-enterprise-eloqua-form.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/cloud/apps-to-cloud/solutions/migrate-applications/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/corporate/features/webcasts/aicpa-webcasts/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/scm/solutions/complete-guide-to-modern-scm/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/oreilly-analytics-paper/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/pique-migrating-workloads/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/cloud-security-for-dummies/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/iaas-for-dummies-storage/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/iaas-for-dummies-compute/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/low-code-dev-autonomous/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/the-future-of-data-warehousing-paper/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/idc-security-db-paper/(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    { value: '^/cloud/oreilly-form.html(\\?.*)*$', valueIsRegex: !0 },
                    {
                      value: '^/cloud/solutions/pique-migrating-workloads/form.html(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/cloud-security-for-dummies/form.html(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/iaas-for-dummies-storage/form.html(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/iaas-for-dummies-compute/form.html(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/low-code-dev-autonomous/form.html(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value:
                        '^/cloud/solutions/the-future-of-data-warehousing-paper/form.html(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/cloud/solutions/idc-security-db-paper/form2.html(\\?.*)*$',
                      valueIsRegex: !0,
                    },
                    { value: '/product-navigator/', valueIsRegex: !0 },
                    { value: '/corporate/acquisitions/dyn/', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      -1 ==
                        location.href.indexOf(
                          '/performance-management/solutions/scenario-planning'
                        ) &&
                      -1 ==
                        location.href.indexOf(
                          '/cloud/apps-to-cloud/solutions/migrate-applications/'
                        )
                    )
                      return !(
                        (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                        e.dnt
                      );
                    var t = [
                        'fr',
                        'jp',
                        'asiasouth',
                        'au',
                        'de',
                        'ae',
                        'uk',
                        'it',
                        'in',
                        'sa',
                        'za',
                        'es',
                        'se',
                        'nl',
                      ],
                      a = location.href.split('/')[3];
                    return !(!t.includes(a) && 'performance-management' != a && 'cloud' != a);
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'coreTags', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'bottom', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'async', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'sync', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'selfhosted', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>\n  window.dataLayerObject.maxymiserDeployed = true;\n</script>\n<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></script>\n',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL157d14277d714a5daf5986d45c450a9a',
            name: 'Eloqua-JP Conversion Pixels 164615',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    {
                      value:
                        '^/jp/applications/customer-experience/uncovering-hype-around-innovative-technology.html',
                      valueIsRegex: !0,
                    },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC21684b609a2548fc98256435a1a07110-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCee5a6185caf04c50821905bd0470e24f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC1ca71a637ece499abfdb948d2e1c9831-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL18347d3bba914ffb9df63c6c43943039',
            name: 'Eloqua NAS SMB Q3FY18 - February 13 2018-145350',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    t[65924] = { cat: 'smbep0' };
                    var a = _satellite.getVar('LP_id');
                    return 'object' == typeof t[a] && ((window.cat = t[a].cat), !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<!-- Start of DoubleClick Floodlight Tag: Please do not remove --> <iframe src="https://8312155.fls.doubleclick.net/activityi;src=8312155;type=oracl0;cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa8655bde4a3d4864b17d8e1ac7cc7254',
            name: 'Eloqua-JP Conversion Pixels 167757',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    {
                      value:
                        '/jp/applications/customer-experience/innovation-technologies-growth.html',
                      valueIsRegex: !0,
                    },
                    {
                      value:
                        '/jp/applications/customer-experience/innovation-technologies-growth-form.html',
                      valueIsRegex: !0,
                    },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = window.location.pathname;
                    return '/jp/applications/customer-experience/innovation-technologies-growth.html' ==
                      t
                      ? ((window.google_tag_label = 'Q4t7CK21yoMBEKbFwv4C'),
                        (window.gtm_params = !0),
                        (window.google_tag_remarketing = !0))
                      : '/jp/applications/customer-experience/innovation-technologies-growth-form.html' ==
                          t &&
                          ((window.google_tag_label = '04S-CObnjpQBEKbFwv4C'),
                          (window.gtm_params = !1),
                          !(window.google_tag_remarketing = !1));
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC5a45cac209fa4c568d777d79f9c83fb3-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC2db0baaf07894cfd9c81ab900ad4d264-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL69810672bcea46f699f94a06c4e2e860',
            name: 'DoubleClick Pixel for EMEA Tech and Apps Q2FY18',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    {
                      value:
                        '/uk/cloud/iaas/clearer-path-to-cloud-adoption/pulse-survey/index.html',
                      valueIsRegex: !0,
                    },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<iframe src="https://3573292.fls.doubleclick.net/activityi;src=3573292;type=oracl0;cat=youia0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL9f480500893c4eb7b12d590b2a374522',
            name: 'Consideration Uber File Download Link New - Testing',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector: 'a',
                  elementProperties: [
                    {
                      name: 'href',
                      value:
                        '\\.(?:doc|docx|eps|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\\&|\\?)',
                      valueIsRegex: !0,
                    },
                  ],
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'UberTag-FileDownload' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^/index.html', valueIsRegex: !0 }] },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCf946caa4dba04d52ac21fe616cbf6beb-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL43b13975807d46a7b59579412fcb5054',
            name: 'Javaone Registration',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '\\bjavaone/register\\b', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      1 != _satellite.getVar('truste_consent') &&
                      2 != _satellite.getVar('truste_consent')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: JavaOne Registration Overview\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/javaone/register/index.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 04/14/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=oracl00;cat=javao0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=oracl00;cat=javao0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL4ce5f0b302874f58b47ac2e1d4a8f04e',
            name: 'Infinity - OCOM Development Tag',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                    { value: 'www-content.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'www-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'community-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'www-qa.oracle.com', valueIsRegex: !0 },
                    { value: 'www-dev1.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) &&
                        -1 == e.truste_consent.indexOf(2) &&
                        -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'infinity', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: '/poc/infinity/yt-track-test.html', valueIsRegex: !0 },
                    { value: '/poc/infinity/youtube-tracking.html', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'var infinityDevScript = "";\nvar iTag = document.createElement("script");\n\n/* Deploy the Infinity dev tag specific to each staging domain */\nif ((location.host == "www-sites.oracle.com" || location.host == "www-content.oracle.com") && (location.pathname !== "/go.java")) {\n    if (location.pathname.indexOf(\'/oraclefoundation.org/\') != -1) {\n      infinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oraclefoundation/odc.js?_ora.context=analytics:development";\n    }else{\n      infinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracle/odc.js?_ora.context=analytics:development"\n    }\n} else if (location.host == "community-stage.oracle.com") {\n    infinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oraclecommunity/odc.js?_ora.context=analytics:development";\n} else if (location.host == "blogs-stage.oracle.com") {\n    infinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracleblogs/odc.js?_ora.context=analytics:development";\n} else if (location.host == "www-stage.oracle.com"  && location.pathname == "/developer.oracle.com") {\n    infinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracledeveloper/odc.js?_ora.context=analytics:development";\n} else if (location.host == "www-stage.oracle.com"  && location.pathname.indexOf("/search") != -1) {\n    infinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracle/odc.js?_ora.context=analytics:development";\n}  else if (location.host == "www-sites.oracle.com"  && location.pathname == "/go.java") {\n    infinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/gojava/odc.js?_ora.context=analytics:development";\n} else if (location.host == "www-stage.oracle.com"  && location.pathname.indexOf("/partners") != -1) {\n    infinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/partners/odc.js?_ora.context=analytics:development";\n} else if(location.host == "www-stage.oracle.com" || location.host == "www-qa.oracle.com" || location.host == "www-dev1.oracle.com") {\n    infinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracle/odc.js?_ora.context=analytics:development";\n}  \niTag.src = infinityDevScript;\niTag.async = true;\niTag.type = \'text/javascript\';\ndocument.head.appendChild(iTag);       ',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL458a000a7ece49ad8f01b024652a155d',
            name: 'Eloqua Google Display Ad campaign for IaaS-145921',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = _satellite.getVar('LP_id');
                    return '65054' == t
                      ? ((window.dtm_google_conversion_label = 'zVL9CJDA8XMQkqu3kwM'), !0)
                      : '65055' == t &&
                          ((window.dtm_google_conversion_label = '4BK-CNzlgXQQkqu3kwM'), !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCf8b4a047de154af5b25bf43523f2b13c-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4ab0a368512c434b9c46d4f4b3a54b4c',
            name: 'Eloqua NAS ERP l Q3FY18 - January 9 2018 - 143309',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    t[54689] = { type: 'fy18n000', cat: 'mitre0' };
                    var a = _satellite.getVar('LP_id');
                    return (
                      'object' == typeof t[a] &&
                      ((window.cat = t[a].cat), (window.type = t[a].type), !0)
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
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=\'+ window.type +\';cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL4b72cccce61a4246841e9ed408914dc2',
            name: 'Eloqua NAS SMB Q2FY19 - October 4 2018 - 158436',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = { 74431: { cat: 'smbhc009' } },
                      a = _satellite.getVar('LP_id');
                    return 'object' == typeof t[a] && ((window.cat = t[a].cat), !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<!-- Start of DoubleClick Floodlight Tag: Please do not remove --> <iframe src="https://8643435.fls.doubleclick.net/activityi;src=8643435;type=oracl0;cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL03d20fe2eae84558bda7285c0e310866',
            name: 'MOAT Content  Tag',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/corporate/', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    '<script>\n(function(){function D(){for(var a=[8],c=1;2>=c;c++)a.push(8+c),a.push(8-c);a=a[Math.floor(Math.random()*a.length)];return{b:a,a:0==Math.floor(Math.random()*a)}}function l(a){var c=a=a.replace(":","");try{for(var d=0;100>d&&(a=decodeURIComponent(a),c!=a)&&!a.match(/^http(s)?\\:/);d++)c=a}catch(b){}return a.replace(/(^\\s+|\\s+$)/g,"")}try{var z=function(a,c,d,b){return a[c]===b&&0===d||a[d]===b&&0===c};if(!location||!location.hostname||!location.pathname)return!1;var e=document.location.hostname.replace(/^www\\./,\n""),t=function(){for(var a,c=document.getElementsByTagName("meta"),d,b=0,e=c.length;b<e;b++)if(d=c[b],"og:title"===d.getAttribute("property")){a=d.getAttribute("content");break}a||(a=document.title||"Untitled");return a}(),b={},b=function(a,c,b){a.l1=c;a.l2=b;a.l3="__page__";a.l4="-";return a}(b,e,t),m=(new Date).getTime(),n=Math.floor(Math.random()*Math.pow(10,12)),p,f;f=D();p=f.a?f.b:0;b.zmoatab_cm=p;b.t=m;b.de=n;b.zMoatAB_SNPT=!0;var q;q=p?p:1;var u;u=f?f.a?!0:!1:!0;var e=[],v=(new Date).getTime().toString(35),\nw=[l(b.l1),l(b.l2),l(b.l3),l(b.l4)].join(":"),t=/zct[a-z0-9]+/i,g="",h;for(h in b)b.hasOwnProperty(h)&&h.match(t)&&(g+="&"+h+"="+b[h]);var A=document.referrer.match(/^([^:]{2,}:\\/\\/[^\\/]*)/),r=A?A[1]:document.referrer,x=["e=17","d="+encodeURIComponent(w),"de="+n,"t="+m,"i=ORACLE_CONTENT1","cm="+q,String("j="+encodeURIComponent(r)+g),"mp=1","ac=1","pl=1","bq=10","vc=2"],v="https://g5r0xwdu5kou-a.akamaihd.net/"+v+".gif?",y=function(a){for(var c="",b=0;b<a.length;b++)c+=(0===b?"":"&")+a[b];return c}(function(a){for(var b=\n0;b<a.length;b++){var d=Math.floor(Math.random()*(a.length-b)+b),e=a[b],f=z(a,b,d,x[1]);z(a,b,d,x[0])||f?b--:(a[b]=a[d],a[d]=e)}return a}(x)),y=v+y+"&cs=0",E="https://px.moatads.com/pixel.gif?e=17&d="+encodeURIComponent(w)+"&de="+n+"&t="+m+"&i=ORACLE_CONTENT1&cm="+q+"&j="+encodeURIComponent(r)+g+"&mp=0&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0",F="https://px.moatads.com/pixel.gif?e=17&d="+encodeURIComponent(w)+"&de="+n+"&t="+m+"&i=ORACLE_CONTENT1&cm="+q+"&j="+encodeURIComponent(r)+g+"&ku=1&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0";\nu&&((new Image).src=y,(new Image).src=E);for(var B in b)e.push(B+"="+encodeURIComponent(b[B]));var e=e.join("&"),e=e+"&vc=2",k=document.createElement("script");k.type="text/javascript";k.async=!0;u&&(k.onerror=function(){(new Image).src=F});var C=document.getElementsByTagName("script")[0];C.parentNode.insertBefore(k,C);k.src="https://z.moatads.com/oraclecontent19897089498/moatcontent.js#"+e}catch(a){try{var G="//pixel.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=MOATCONTENTABSNIPPET1"+\ng+"&vc=2&ac=1&k="+encodeURIComponent(a)+"&j="+encodeURIComponent(r)+"&cs="+(new Date).getTime();(new Image).src=G}catch(c){}}})();\n</script>\n',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLa8614e914269484c979aca8969bf1909',
            name: 'SMB Service Cloud',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'smb/service-cloud', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB Service Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/service-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx00;cat=smbse0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx00;cat=smbse0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL38fab9208fb543f6b8b398bb0c65a166',
            name: 'Eloqua-JP Conversion Pixels AW-846058898 - 168040',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=78210', valueIsRegex: !0 },
                    { value: 'lp=56961', valueIsRegex: !0 },
                    { value: 'lp=56882', valueIsRegex: !0 },
                    { value: 'lp=77312', valueIsRegex: !0 },
                    { value: 'lp=66521', valueIsRegex: !0 },
                    { value: 'lp=61300', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC0dd211b99b13433d94dca8a432d7ba7e-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL97c680ddab3a457d8c1f413d3acf7afe',
            name: 'Eloqua Google Display Ad campaign for IaaS-146685',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = ['63475', '64221', '64315', '65565', '65075'],
                      a = ['63476', '64222', '64316', '65566', '65076'],
                      n = _satellite.getVar('LP_id');
                    return -1 != t.indexOf(n)
                      ? ((window.dtm_google_conversion_label = 'zVL9CJDA8XMQkqu3kwM'), !0)
                      : -1 != a.indexOf(n) &&
                          ((window.dtm_google_conversion_label = '4BK-CNzlgXQQkqu3kwM'), !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCe223476dbc5c4e18aa0f4af2b3a4ab63-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL0c413d03dc164870aa85111dc7b49117',
            name: 'Eloqua Conversion Pixels 154756',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    (t[56961] = 'q6WYCMCc6YQBEKbFwv4C'),
                      (t[60373] = 'IdLOCP6Z_IUBEKbFwv4C'),
                      (t[69867] = '02SgCIj-7IUBEKbFwv4C');
                    var a = _satellite.getVar('LP_id');
                    return !!t[a] && ((window.dtm_conv_lbl = t[a]), !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC7233366b5430403dbe0bd7db64775785-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL19c63dbaf25841069179e116bc4a8cf4',
            name: 'Doubleclick Pixel -  NAS SMB Q4FY18 - May 25 2018 - 151138 ',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    t = {
                      66122: { type: 'oracl0', cat: 'smbep0' },
                      66123: { type: 'oracl00', cat: 'smbep0' },
                      '/smb/epm-cloud.html': { type: 'oracl0', cat: 'smbep000' },
                    };
                    var a = _satellite.getVar('LP_id');
                    return 'object' == typeof t[a]
                      ? ((window.type = t[a].type), (window.cat = t[a].cat), !0)
                      : 'object' == typeof t[location.pathname] &&
                          ((window.type = t[location.pathname].type),
                          (window.cat = t[location.pathname].cat),
                          !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCac31222d3b43462cb66efb9e5d32d103-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL1b8417b086f9471e826347a21cbdb7a8',
            name: 'Tech Target Ad Pixel',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: '/pixels/ads/tech-target.html', valueIsRegex: !0 },
                    {
                      value:
                        '/industries/communications/enterprise-communications/products/sd-wan-aware.html',
                      valueIsRegex: !1,
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/products/sd-wan-edge.html',
                      valueIsRegex: !1,
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/products/talari-platforms.html',
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/solutions/sd-wan.html',
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/solutions/sd-wan-financial-services.html',
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/solutions/sd-wan-manufacturing.html',
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/solutions/sd-wan-professional-services.html',
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/solutions/sd-wan-emergency-services.html',
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/sd-wan-management.html',
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/sd-wan-mpls-and-hybrid-wan.html',
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/failsafe-sd-wan.html',
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/wan-optimization.html',
                    },
                    {
                      value:
                        '/industries/communications/enterprise-communications/sd-wan-security.html',
                    },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCd4c4474d806f47bc9a550b7afbf6a746-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLaa69d487ea6c463087c52ddc48eb7601',
            name: 'SMB ERP Cloud',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'smb/erp-cloud', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      1 != _satellite.getVar('truste_consent') &&
                      2 != _satellite.getVar('truste_consent')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB ERP Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/erp-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smber0;cat=smber0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smber0;cat=smber0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL437f59d0eec345b9ad0c439cc5bdc4f1',
            name: 'Eloqua-JP Conversion Pixels 161946',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'lp=77312', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCef689be4ad444060bcdc30f3c4a2e0af-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb90cb7bf002b47f9a32d60b818a551d3',
            name: 'SMB EPM Cloud',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'smb/epm-cloud', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB EPM Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/epm-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbep0;cat=smbep0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbep0;cat=smbep0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLbb52e626b1394d2c97df392f805376a3',
            name: 'SMB HR Cloud',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'smb/hr-cloud', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB HR Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/hr-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbhr0;cat=smbhr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbhr0;cat=smbhr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLd043a8e7d7af44ea8d22de14f73a846f',
            name: 'Data Layer copy - CXD Test',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return _satellite.getVar('dataLayer'), !0;
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: '^/applications/erp/$', valueIsRegex: !0 },
                    { value: '^/applications/human-capital-management/$', valueIsRegex: !0 },
                    { value: '^/applications/$', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'cxupoc', value: 'true', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "/* Function to get profile User Type and login status of User */\nfunction getUserInfo(){\n\tvar user = {};\n\t\n\tif (_satellite.cookie.get('ORA_WWW_MRKT')) { // Check for the cookie - use the ORA_WWW_MRKT first but if that doesn't exist then look to use ORA_UCM_INFO\n\t\tvar mrktCookie =  _satellite.cookie.get('ORA_WWW_MRKT');\n    \tuser.userType = (mrktCookie.toLowerCase().indexOf('employee') > 0 ) ? \"O\" : \"P\";\n\t\tuser.profileGUID = mrktCookie.split('~')[1].slice(2);\n\t\tuser.cookieName = 'www_mrkt';\n\t} else if (_satellite.cookie.get('ORA_UCM_INFO')) { // If ORA_WWW_MRKT is not there, then look for the ORA_UCM_INFO cookie\n\t\tvar ucmCookie =  _satellite.cookie.get('ORA_UCM_INFO');\n\t\tucmCookie.split('~')[4] && (\n\t\t  user.userType = (ucmCookie.split('~')[4] .toLowerCase().indexOf('@oracle') > 0) ? \"O\" : \"P\"\n\t\t);\n\t\tuser.profileGUID = ucmCookie.split('~')[1];\n\t\tuser.cookieName = 'ucm_info';\n\t} else { // If ora_www_mrkt and ora_ucm_info doesn't exist, its an Unsigned User.\n\t\tuser.userType = 'U';\n\t\tuser.cookieName = 'NoCookie';\n\t\tuser.profileGUID = 'NotSet';\n\t}\n  \n    if (_satellite.cookie.get('ORA_WWW_PERSONALIZE')){\n      user.profileInfo = getPersonalizeObject();\n    }\n\treturn user;\n}\t\n\t\nvar consent_level = _satellite.getVar('trusteConsent'); // Check for User's Truste consent preferences.\nvar userInfo =  getUserInfo(); // Read User' profile information.\n\ndataLayerObject.user.isLoggedIn = (userInfo.userType == 'U') ? 'Not Logged In' : 'Logged In'; // Set login status to Data layer.\n\n// Check for Truste consent. Set ORA_WWW_MRKT and ORA_UCM_INFO only if the User has opted in for Functional cookies.\nif ((consent_level.truste_consent.indexOf(0) != -1 || consent_level.truste_consent.indexOf(2) != -1  || consent_level.truste_consent.indexOf(3) != -1) ) {\n  // Assign userType, cookieStatus and profileGUID to User object in Data Layer\n  dataLayerObject.user.userType = userInfo.userType;\n  dataLayerObject.user.cookieStatus = userInfo.cookieName;\n  if (consent_level.truste_consent.indexOf(0) != -1  || consent_level.truste_consent.indexOf(3) != -1) { // Set GUID, if the User consent is implied (consent level - 0) or explicit (consent level - 3)\n    dataLayerObject.user.profileGUID = userInfo.profileGUID;\n    \n    //Set ORA_WWW_PERSONALIZE cookie value \n    if(userInfo.profileInfo){dataLayerObject.user.profile.profileInfo = userInfo.profileInfo;}\n  } else {  \n    dataLayerObject.user.profileGUID = 'NoConsent';\n    dataLayerObject.user.profile.profileInfo = 'NoConsent';\n  }\n} else {\n  dataLayerObject.user.userType = 'A'; //If no Truste consent, its an Anonymous User.\n  dataLayerObject.user.cookieStatus = 'NoConsent';\n  dataLayerObject.user.profileGUID = 'NoConsent';\n  dataLayerObject.user.profile.profileInfo = 'NoConsent';\n}\n\n// If the TRUSTe preference is not to have advertising OR functional cookies, then don't set Eloqua GUID.\nif ((consent_level.truste_consent.indexOf(0) != -1 || consent_level.truste_consent.indexOf(2) != -1  || consent_level.truste_consent.indexOf(3) != -1) ) {\n  if (_satellite.cookie.get('ELOQUA')){\n    dataLayerObject.user.eloqua.guid = _satellite.cookie.get('ELOQUA').replace('GUID=','');\n  } else {\n    setTimeout (function() {\n      _satellite.cookie.get('ELOQUA') && ( dataLayerObject.user.eloqua.guid = _satellite.cookie.get('ELOQUA').replace('GUID=','') )\n    }, 2000);\n  }\n} else { // No Truste Consent\n   dataLayerObject.user.eloqua.guid = 'NoConsent';\n}\n\n/* Function to check if the User is New or Return visitor, read it from Cookie s_nr */\nif (_satellite.cookie.get('s_nr')) {\n  dataLayerObject.user.isReturning = _satellite.cookie.get('s_nr').split('-')[1] == 'Repeat'? 'Repeat' : 'New';\n} else {\n  setTimeout (function() {\n      _satellite.cookie.get('s_nr') && (dataLayerObject.user.isReturning = _satellite.cookie.get('s_nr').split('-')[1] == 'Repeat'? 'Repeat' : 'New')\n  }, 2000);\n}  \n\nfunction getPersonalizeObject(){\n  var cookieValue = _satellite.cookie.get('ORA_WWW_PERSONALIZE');\n  var tempObj ={};\n  cookieValue.split('~').forEach(function(v,i){\n    var valArr = v.split(':');\n    if(valArr.length == 2){\n       tempObj[valArr[0]] = valArr[1];\n    }\n  });\n  if(Object.keys(tempObj).length > 0){\n    var obj = {};\n    obj.ind = tempObj.i;\n    obj.role = tempObj.r;\n    obj.reg = tempObj.g;\n    obj.lang = tempObj.l;\n    obj.cSize = tempObj.cs;\n    obj.cName = tempObj.cn;\n    \n    return obj;\n  }else{\n    return cookieValue;\n  }\n}",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "var cookieRegistry = [];\n//Get User Details\nfunction listenCookieChange(cookieName, callback) {\n    setInterval(function() {\n        if (cookieRegistry[cookieName]) {\n            var latestCookieVal = _satellite.cookie.get(cookieName) ? _satellite.cookie.get(cookieName) : 'NA'; \n            if ( latestCookieVal != cookieRegistry[cookieName]) {\n                cookieRegistry[cookieName] = latestCookieVal;\n                return callback(latestCookieVal);\n            }\n        } else {\n            cookieRegistry[cookieName] = _satellite.cookie.get(cookieName) ? _satellite.cookie.get(cookieName) : 'NA';\n        }\n    }, 1000);\n}\n\n//listen for change in 'notice_gdpr_prefs' cookie and update changes to dataLayerObject\nlistenCookieChange('notice_gdpr_prefs', function(cookie) {\n  console.log('Truste Consent Changed');\n  window.dataLayerObject.privacy.consentDecision = window.oracle.truste.api.getGdprConsentDecision().consentDecision;\n  window.dataLayerObject.privacy.consentSource = window.oracle.truste.api.getGdprConsentDecision().source;\n  console.log(window.dataLayerObject);\n});\n\n//add truste and Do Not Track values to dataLayer\nwindow.dataLayerObject.privacy.consentDecision = _satellite.getVar('trusteConsent')['truste_consent'];\nwindow.dataLayerObject.privacy.dnt = _satellite.getVar('trusteConsent')['dnt'];\n\n//Set campaigns status to \"NoTrack\" id DNT enabled\nif(window.dataLayerObject.privacy.dnt === true){\n  window.dataLayerObject.user.campaigns.status = \"NoTrack\";\n}\n\n//update country code\nwindow.addEventListener(\"load\", function(){\n  //window.dataLayerObject.privacy.consentSource = window.oracle.truste.api.getGdprConsentDecision().source;\n  window.dataLayerObject.privacy.consentSource = window.oracle.truste.api.getGdprConsentDecision ? window.oracle.truste.api.getGdprConsentDecision().source : window.oracle.truste.api.getConsentDecision().source;\n    if(window.truste != 'undefined') {\n      if (window.truste.eu && window.truste.eu.bindMap && window.truste.eu.bindMap.country){\n        window.dataLayerObject.user.geoCountry = window.truste.eu.bindMap.country;\n      }    \n   }\n}, false);",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "var consent_level = _satellite.getVar('trusteConsent'); // Check for User's Truste consent preferences.\n\n// If the TRUSTe preference is not to have advertising OR functional cookies, then don't set Eloqua GUID.\nif ((consent_level.truste_consent.indexOf(0) != -1 || consent_level.truste_consent.indexOf(3) != -1) ) {\n    if (_satellite.cookie.get('ELOQUA')){\n      getAccessToken();\n    } else {\n      setTimeout (function() {\n       getAccessToken();\n      }, 2000);\n    }\n} else { // No Truste Consent\n    window.dataLayerObject.user.customer = consent_level.dnt === true ? \"NoTrack\" : \"NoConsent\";\n}\n\n/* Function to read data from CXD api by passing the oAuth token */\nfunction getCXDDataAndMap(accessToken) {\n  //Read ELOQUA cookie\n  var elqCookie = _satellite.cookie.get('ELOQUA');\n  if(elqCookie) {\n    var guid = elqCookie.replace('GUID=',''); //Remove GUID= from cookie value to extract GUID\n    \n    /**** For Testing ****/\n    if(getQueryString('eloquaGUID')){\n      guid = getQueryString('eloquaGUID');\n    }\n    //Make CXD API Call\n    var apiURL = 'https://cxd-b2b.cxunity.ocs.oraclecloud.com/api-data/v1/05c39a4b26c74a35ac539e5ae0b7a403/data/idgraph/guid_personalization_rule?q=[{\"operator\":\"EQUALS\",\"attribute\":\"GUID\",\"value\":\"' + guid + '\"}]';\n    var cxdApiRequest = new XMLHttpRequest();\n\n    cxdApiRequest.onreadystatechange = function(cbresponse) {\n        if (this.readyState == 4 ) {\n            if(this.status == 200){\n                if(JSON.parse(this.responseText)){\n                    window.dataLayerObject.user.customer = JSON.parse(this.responseText);\n                } else {\n                    window.dataLayerObject.user.customer = 'NoResponse';\n                }\n            } else {\n                window.dataLayerObject.user.customer = 'APICallFailed';\n            }\n            console.log(\"Printing CXD api results:\");\n            console.log(window.dataLayerObject.user.customer);\n        }\n    };\n    \n    cxdApiRequest.open(\"GET\",apiURL,true);\n    cxdApiRequest.setRequestHeader('Content-Type','application/json');\n    cxdApiRequest.setRequestHeader('Authorization', accessToken.token_type + \" \" + accessToken.access_token);\n    cxdApiRequest.send();\n  } else {\n    //Set 'NoEloquaCookie' in  data layer\n    window.dataLayerObject.user.customer = \"NoEloquaCookie\";\n  }\n}\n\n/* Function to get oauth authorization token from idcs api */\nfunction getAccessToken() {\n  var clientID = \"c351d5267ce949839baea90588661391\";\n  var secret = \"be25fdf9-4bbe-497a-880f-e799621d42dc\";\n  var authorization = \"Basic \" + btoa(clientID + \":\" + secret);\n  var tokenURL = \"https://idcs-8b2bc506c31944a88433d340f121769e.identity.oraclecloud.com/oauth2/v1/token\";\n  var postData = {\n    scope: \"https://cxd-b2b.cxunity.ocs.oraclecloud.com/cxunity\",\n    grant_type: \"password\",\n    username: \"cxunity-testers_in@oracle.com\",\n    password: \"CXUnity@0001\"\n  };\n  var urlEncodedDataPairs=[],urlEncodedData;\n  // Turn the data object into an array of URL-encoded key/value pairs.\n  for( var name in postData ) {\n    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent(postData[name]));\n  }\n\n  // Combine the pairs into a single string and replace all %-encoded spaces to \n  // the '+' character; matches the behaviour of browser form submissions.\n  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );\n  \n  var accessTokenRequest = new XMLHttpRequest();\n   \n  accessTokenRequest.onreadystatechange = function(callback) {\n    var accessToken = false;\n    if (this.readyState == 4 ) {\n       if(this.status == 200) {\n         if(JSON.parse(this.responseText)){\n           accessToken = JSON.parse(this.responseText);\n           getCXDDataAndMap(accessToken);\n         }\n       } else {\n         window.dataLayerObject.user.customer = 'NoResponse';\n       }\n    }\n  };\n  accessTokenRequest.open(\"POST\",tokenURL);\n  accessTokenRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');\n  accessTokenRequest.setRequestHeader('Authorization', authorization)\n  accessTokenRequest.send(urlEncodedData);  \n}\n\n/* Get Query String */\nfunction getQueryString( field ) {\n\tvar href = window.location.href;\n\tvar reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );\n\tvar string = reg.exec(href);\n\treturn string ? string[1] : null;\n}",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLbf93e9535ce4442e92eb51b0ac345251',
            name: 'Eloqua NAS SMB l Q3FY18 - January 17 2018 - 145615',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    (t[66047] = { cat: 'smbcx006' }),
                      (t['/smb/epm-cloud.html'] = { cat: 'smbep00' });
                    var a = _satellite.getVar('LP_id');
                    return 'object' == typeof t[a]
                      ? ((window.cat = t[a].cat), !0)
                      : 'object' == typeof t[location.pathname] &&
                          ((window.cat = t[location.pathname].cat), !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<!-- Start of DoubleClick Floodlight Tag: Please do not remove --> <iframe src="https://8312155.fls.doubleclick.net/activityi;src=8312155;type=oracl0;cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL5ecf71d28d1547ea88a5c5f2a2767547',
            name: 'Consideration Prospecting UBER TAG Video Starts - Eloqua New - Testing',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: {
                  elementSelector:
                    ".vjs-poster,button.vjs-big-play-button,a[rel='vbox'][href*='bcid'],button.vjs-play-control",
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCa882160e8d204843a58ee22e1102866c-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb28b4a8fb27249a4b10fcfbfc80a3ff4',
            name: 'ODC Analytics',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) &&
                        -1 == e.truste_consent.indexOf(2) &&
                        -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: '/launch/odc-analaytics-test/', valueIsRegex: !0 },
                    { value: 'applications/customer-experience/data-cloud/', valueIsRegex: !0 },
                    { value: '/data-hotline/', valueIsRegex: !1 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "var axel = Math.random() + \"\";\t\nvar random = axel * 10000000000000;\nvar img = document.createElement('img'),pageURL = window.location.href,referrer = document.referrer;\n\nimg.src = 'https://p.dlx.addthis.com/e/mp/g-10044?pkey=&chpcm=&chpsg=&chpcr='+pageURL+'&chpck=&rand='+random+'&chpth='+referrer;\nimg.width='1';\nimg.height='1';\nimg.border='0';\nimg.style='display: none';\ndocument.body.append(img);",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL5e62d607384d402d8781c73d52cadf03',
            name: 'Eloqua NAS HCM Q3FY18 - December 15 2017- 14249',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    (t[63158] = { cat: 'hcmwo0' }), (t[63159] = { cat: 'hcmwo00' });
                    var a = _satellite.getVar('LP_id');
                    return 'object' == typeof t[a] && ((window.cat = t[a].cat), !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=namhc001;cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL92532b5ff5dc4549bd7e7e4b7bc353f1',
            name: 'Eloqua-JP Conversion Pixels AW-836061479 - 168040',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'lp=72720', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCb9637f1172504b658a2912a0623c4aad-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc03fbe2c557742ac880cfe5428f62a1e',
            name: 'Eloqua-JP Conversion Pixels 162162',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=77663', valueIsRegex: !0 },
                    { value: 'lp=77664', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = _satellite.getVar('LP_id');
                    return '77663' == t
                      ? ((window.dtm_label = 'Q4t7CK21yoMBEKbFwv4C'),
                        (window.dtm_remarketing = !0),
                        (dtm_custom_params = !0))
                      : '77664' == t &&
                          ((window.dtm_label = '035tCMu8m5EBEKbFwv4C'),
                          (window.dtm_remarketing = !1),
                          !(dtm_custom_params = !1));
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCfdd77dbc34114cdba2ddb0147d563e56-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLeaae0f79d0694b5f874836e47fd6f08c',
            name: 'Awareness UBER TAG - Eloqua New - Testing',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion') ||
                      -1 != location.search.indexOf('testUber=true') ||
                      -1 != document.referrer.indexOf('explore.oracle.com') ||
                      ('go.oracle.com' != location.host &&
                        ('www.oracle.com' != location.host || !formHtmlName))
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCaf3e26f33ed8467a81eb656beffdf574-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL1be140cae4da40b7b900709942506b12',
            name: 'Autonomous Site - Chat and Source Tracking Scripts',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      (-1 !=
                        [
                          'www-stage.oracle.com',
                          'www-sites-stage.oracle.com',
                          'www-sites.oracle.com',
                        ].indexOf(window.location.host) &&
                        0 == window.location.pathname.indexOf('/auto.oracle.com/')) ||
                      'auto.oracle.com' == window.location.host
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
                    '<script>\n    var sc_product = 225;\n    var x = document.getElementsByClassName("atgchat-link");\n    for (var i = 0; i < x.length; i++) {\n    name = "ochat";\n        arr = x[i].className.split(" ");\n        if (arr.indexOf(name) == -1) {\n            x[i].className += " " + name;\n        }\n   }\n</script>\n<script data-reqjq="" src="//auto.oracle.com/asset/js/oracle-chat-auto.js" id="oracle_chat" data-path="//auto.oracle.com/asset/json/chat-translation-data.json" data-scchannel="SC Auto" data-nosidewall></script>',
                  language: 'html',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '/*! GENERIC - GETURLVARS */\nfunction getUrlVars(){var a=[],b,c=window.location.href;c.indexOf("#")!=-1&&(c=c.split("#")[0]);for(var d=c.slice(window.location.href.indexOf("?")+1).split("&"),e=0;e<d.length;e++){b=d[e].split("=");a.push(b[0]);a[b[0]]=b[1]}return a}\n\n/*! ORACLE - TRACKING URL */\njQuery(document).ready(function(){\n\n\t\tvar sourceStrTest = getUrlVars()["source"];\n\t\tvar sourceStr = "";\n\t\tif (sourceStrTest != undefined) {sourceStr = sourceStrTest;}\n\t\t\n\t\tif (sourceStr != "") {\n\t\t\tjQuery(document).on(\'mousedown\', \'a:not([href^="#"])\', function (e) {\n\t\t\t\tvar cLink = jQuery(this).attr(\'href\');\n\t\t\t\tvar searchSourceStr = sourceStr.split(\'+\')[0];\n\t\t\t\tif (cLink.indexOf(\'source=\' + searchSourceStr) != -1 || cLink.indexOf(\'src1=\' + searchSourceStr) != -1 || cLink.indexOf(\'sourceType=\' + searchSourceStr) != -1 || cLink.indexOf(\'elqSignOut\') != -1 || cLink.indexOf(\'learn.oracle.com\') != -1) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\n\t\t\t\tvar vars = {}, hash;\n\t\t\t\tvar ua = cLink.split("?");\n\t\t\t\tvar base_url = "";\n\t\t\t\tvar nexturl_found = 0;\n\t\t\t\tvar eloquaform_link = false;\n\t\t\t\tdo {\n\t\t\t\t\tbase_url += ua.shift() + "?";\n\t\t\t\t} while (ua.length > 1);\n\t\t\t\tvar qs = ua.shift();\n\t\t\t\tvar type = (cLink.indexOf(\'go.oracle.com\') != -1) ? "src1" : "source";\n\t\t\t\ttype = (cLink.indexOf(\'myservices.us.oraclecloud.com\') != -1) ? "sourceType" : type;\n\t\t\t\t\n\t\t\t\tqs2 = (qs == undefined) ? [] : qs.split(\'&\');\n\t\t\t\tfor (var i = 0; i < qs2.length; i++) {\n\t\t\t\t\thash = qs2[i].split(\'=\');\n\t\t\t\t\tvars[hash[0]] = hash[1];\n\t\t\t\t}\n\n\t\t\t\tvars[type] = (vars[type] == undefined) ? sourceStr : sourceStr.split(\'+\')[0] + \'+\' + vars[type];\n\t\t\t\tqsSource = base_url;\n\t\t\t\tjQuery.each(vars, function (key, value) {\t\n\t\t\t\t\tif (key != type) {\n\t\t\t\t\t\tqsSource += key + "=" + value;\n\t\t\t\t\t\tif (key == "nexturl") {\n\t\t\t\t\t\t\tnexturl_found = 1;\n\t\t\t\t\t\t\tqsSource += "?" + type + "=" + vars[type];\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (key == "iframe") {\n\t\t\t\t\t\t\teloquaform_link = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tqsSource += "&";\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\tif (nexturl_found == 0) {\n\t\t\t\t\tqsSource += type + "=" + vars[type] + "&";\n\t\t\t\t}\n\t\t\t\tqsSource = qsSource.slice(0, -1);\n\t\t\t\tif (eloquaform_link) {\n\t\t\t\t\tvar url_params = "";\n\t\t\t\t\tjQuery.each( getUrlVars(), function(key, value) { \n\t\t\t\t\t\tif(value != "source"){\n\t\t\t\t\t\t\turl_params += "&" + value + (getUrlVars()[value] ? "=" + getUrlVars()[value] : "")\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t\tqsSource += url_params;\n\t\t\t\t\teloquaform_link = false;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tjQuery(this).attr(\'href\', qsSource);\n\t\t\t});\n\t\t}\t\n});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL05aec2bd05cf4271a3cd5e74ce2dcd4e',
            name: 'SMB Customer Stories',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'smb/customers', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB Customer Stories\nURL of the webpage where the tag is expected to be placed: http://https://www.oracle.com/smb/customers.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcu0;cat=smbcu0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcu0;cat=smbcu0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLc09dfae4b42c468286443d5d4dc97008',
            name: 'Eloqua Conversion Pixels 156553',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=64598', valueIsRegex: !0 },
                    { value: 'lp=60581', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCb7c67012a40a4c04b8fa2f1df2a3dc9e-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL69bdcf2ac1494919b653dbe2cdb7ad57',
            name: 'Awareness UBER TAG New - Testing',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '^/index.html', valueIsRegex: !0 },
                    { value: '/corporate/accessibility/', valueIsRegex: !0 },
                    { value: '/product-navigator', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return (
                      !(
                        (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                        e.dnt ||
                        0 != _satellite.getVar('countryExclusion') ||
                        -1 != document.referrer.indexOf('explore.oracle.com')
                      ) && -1 == location.search.indexOf('testUber=true')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'qualifiedTag', value: 'true', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'uberTag', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC4f29c4f10f794b269f6323435c626db7-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL20238d8752b647089dfac5da5f7fa629',
            name: 'Eloqua-JP EPM  Remarketing Pixels 164867',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=56960', valueIsRegex: !0 },
                    { value: 'lp=77311', valueIsRegex: !0 },
                    { value: 'lp=72719', valueIsRegex: !0 },
                    { value: '^/cxjp', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCd1c5efa023144d36bd4cf7e22f3edd6a-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2cde24c8017640e9ae4460de51141b63',
            name: 'Consideration Prospecting UBER TAG Video Starts New - Testing',
            events: [
              {
                modulePath: 'core/src/lib/events/mediaTimePlayed.js',
                settings: {
                  unit: 'second',
                  amount: 1,
                  elementSelector: 'video',
                  bubbleFireIfChildFired: !1,
                },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^/index.html', valueIsRegex: !0 }] },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC3722c2feffd24d28bc56aee8682c8772-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC20431a3624db4b78b777c51a03526c5a-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL86e820c75eb44494b5e2f9d15a49f8d8',
            name: 'Consideration Prospecting UBER TAG New - Testing',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '^/index.html', valueIsRegex: !0 },
                    { value: '/product-navigator', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      !(
                        (-1 == consent_level.truste_consent.indexOf(0) &&
                          -1 == consent_level.truste_consent.indexOf(3)) ||
                        consent_level.dnt ||
                        0 != _satellite.getVar('countryExclusion') ||
                        -1 != document.referrer.indexOf('explore.oracle.com')
                      ) && -1 == location.search.indexOf('testUber=true')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC0765898b850f492fa129364391f2f2f9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa55fdf828e7a41b5af196e1351a61f71',
            name: 'Eloqua NAS ERP Q4FY18 - May 31 2018 - 151485',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = {
                        41337: { type: 'namer001', cat: 'gener0' },
                        41652: { type: 'namer002', cat: 'gener0' },
                      },
                      a = _satellite.getVar('LP_id');
                    return 'object' == typeof t[a]
                      ? ((window.type = t[a].type), (window.cat = t[a].cat), !0)
                      : 'object' == typeof t[location.pathname] &&
                          ((window.type = t[location.pathname].type),
                          (window.cat = t[location.pathname].cat),
                          !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<!-- Start of DoubleClick Floodlight Tag: Please do not remove --> <iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=\'+ window.type +\';cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL4d0c475e6ad44ac18ab7667357953e6a',
            name: 'Eloqua FY20 NAM SMB Paid Media Campaign ',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: 'lp=78566', valueIsRegex: !0 },
                    { value: 'lp=78567', valueIsRegex: !0 },
                    { value: 'lp=79696', valueIsRegex: !0 },
                    { value: 'lp=79697', valueIsRegex: !0 },
                    { value: 'lp=74510', valueIsRegex: !0 },
                    { value: 'lp=74511', valueIsRegex: !0 },
                    { value: 'lp=77444', valueIsRegex: !0 },
                    { value: 'lp=77446', valueIsRegex: !0 },
                    { value: 'lp=71150', valueIsRegex: !0 },
                    { value: 'lp=71151', valueIsRegex: !0 },
                    { value: 'lp=78232', valueIsRegex: !0 },
                    { value: 'lp=78231', valueIsRegex: !0 },
                    { value: 'lp=78437', valueIsRegex: !0 },
                    { value: 'lp=78438', valueIsRegex: !0 },
                    { value: 'lp=69012', valueIsRegex: !0 },
                    { value: 'lp=69013', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCbaea5c9b22bc4f47b63ec110425d69cc-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC6833411a90574510a3bbe031ed0061c3-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL35f18020ea3e4e4cab96287e7baa09c1',
            name: 'Eloqua-JP Conversion Pixels 162470',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^/jp/corporate/contact/$', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC6d4b674857e242429625a1ccf967027d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLca745e59112c4ddbae8eb5a4e8ca20e3',
            name: 'SMB Commerce Cloud',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'smb/commerce-cloud', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB Commerice Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/commerce-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx000;cat=smbco0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx000;cat=smbco0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLeb68461d2687465d9bc90ddb998aeeaa',
            name: 'Eloqua-JP Conversion Pixels 166142',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=74439', valueIsRegex: !0 },
                    { value: 'lp=74416', valueIsRegex: !0 },
                    { value: 'lp=74560', valueIsRegex: !0 },
                    { value: 'lp=74605', valueIsRegex: !0 },
                    { value: 'lp=78889', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCf93a4c5981f04bf1b5897c2e89e29a93-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL043286800eb0423793d5e353ecea793f',
            name: 'TrustArc Script',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 0 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'www-dev1.oracle.com', valueIsRegex: !0 },
                    { value: 'www-qa.oracle.com', valueIsRegex: !0 },
                    { value: 'www-qa-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'www-qa-dev.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return !(
                      0 <
                        document.querySelectorAll("script[src*='consent.truste.com/notice']")
                          .length || window.formHtmlName
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'trustarc', value: 'bottom', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="text/javascript" src="//consent.truste.com/notice?domain=oracle.com&c=teconsent&js=bb&noticeType=bb&text=true&gtm=1&cdn=1&pcookie" async crossorigin></script>\n<script type="text/javascript">\nif (location.pathname.indexOf("/ru/") === 0){\n  document.write(\'\\x3Cscript src=//consent.truste.com/notice?domain=oracleru.com&c=teconsent&js=bb&noticeType=bb&text=true&gtm=1&cdn=1&pcookie async crossorigin="">\\x3C/script>\');\n}\n</script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLae1194999e584c2c944e713a144338eb',
            name: 'UberTag - Ajax Form Submit',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'UberTagAjax' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return (
                      !(
                        (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                        e.dnt ||
                        0 != _satellite.getVar('countryExclusion') ||
                        -1 != document.referrer.indexOf('explore.oracle.com')
                      ) && -1 == location.search.indexOf('testUber=true')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC64153ce63750405fbf269e1b9495fe9a-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL23927659b8cb4960b306994f71c02583',
            name: 'Eloqua-JP Conversion Pixels 166558',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'lp=79142', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC1d8bfb97f1a048c8b67bb9b6148ee0a5-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL24349c29bb7443ebae73840a84579be5',
            name: 'Tech Target Ad Pixel Eloqua',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: 'lp=89689', valueIsRegex: !0 },
                    { value: 'LP=89176', valueIsRegex: !0 },
                    { value: 'LP=89848', valueIsRegex: !0 },
                    { value: 'LP=91286', valueIsRegex: !0 },
                    { value: 'LP=89895', valueIsRegex: !0 },
                    { value: 'LP=81531', valueIsRegex: !0 },
                    { value: 'LP=82149', valueIsRegex: !0 },
                    { value: 'LP=83624', valueIsRegex: !0 },
                    { value: 'LP=81607', valueIsRegex: !0 },
                    { value: 'LP=81719', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC7c49ac386d644af49d674bcb43aa2eaf-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf1a4179b8eeb4db38470b14ba413fe8b',
            name: 'Maxymiser Core Script - Sync Performance',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                    { value: 'www-stage.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: '^sync', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>window.dataLayerObject.maxymiserDeployed = true;</script>\n<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></script>\n\n',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL4e766afd78794021842b4c3b3762d642',
            name: 'Eloqua-JP Conversion Pixels 163820',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=78888', valueIsRegex: !0 },
                    { value: 'lp=78889', valueIsRegex: !0 },
                    { value: 'lp=77951', valueIsRegex: !0 },
                    { value: 'lp=77963', valueIsRegex: !0 },
                    { value: 'lp=78442', valueIsRegex: !0 },
                    { value: 'lp=78495', valueIsRegex: !0 },
                    { value: 'lp=78497', valueIsRegex: !0 },
                    { value: 'lp=78499', valueIsRegex: !0 },
                    { value: 'lp=78501', valueIsRegex: !0 },
                    { value: 'lp=78503', valueIsRegex: !0 },
                    { value: 'lp=77952', valueIsRegex: !0 },
                    { value: 'lp=77965', valueIsRegex: !0 },
                    { value: 'lp=78443', valueIsRegex: !0 },
                    { value: 'lp=78496', valueIsRegex: !0 },
                    { value: 'lp=78498', valueIsRegex: !0 },
                    { value: 'lp=78500', valueIsRegex: !0 },
                    { value: 'lp=78502', valueIsRegex: !0 },
                    { value: 'lp=78504', valueIsRegex: !0 },
                    { value: 'lp=78657', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = _satellite.getVar('LP_id');
                    return '78888' == t ||
                      '77951' == t ||
                      '77963' == t ||
                      '78442' == t ||
                      '78495' == t ||
                      '78497' == t ||
                      '78499' == t ||
                      '78501' == t ||
                      '78503' == t ||
                      '78657' == t
                      ? ((window.google_tag_label = 'Q4t7CK21yoMBEKbFwv4C'),
                        (window.gtm_params = !0),
                        (window.google_tag_remarketing = !0))
                      : !(
                          ('78889' != t &&
                            '77952' != t &&
                            '77965' != t &&
                            '78443' != t &&
                            '78496' != t &&
                            '78498' != t &&
                            '78500' != t &&
                            '78502' != t &&
                            '78504' != t) ||
                          ((window.google_tag_label = 'y1N1CMq0ppMBEKbFwv4C'),
                          (window.gtm_params = !1),
                          (window.google_tag_remarketing = !1))
                        );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC7d0e25ef65654c2486b24b123516a424-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe538bb8a84b1495281f12d4390159dbc',
            name: 'Eloqua Conversion Pixels 157012',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=73416', valueIsRegex: !0 },
                    { value: 'lp=74845', valueIsRegex: !0 },
                    { value: 'lp=71020', valueIsRegex: !0 },
                    { value: 'lp=71046', valueIsRegex: !0 },
                    { value: 'lp=71062', valueIsRegex: !0 },
                    { value: 'lp=70985', valueIsRegex: !0 },
                    { value: 'lp=68862', valueIsRegex: !0 },
                    { value: 'lp=68993', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC84d0f161c49d46c18c8a6e53a200968d-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe821e958e967462b9dffb79fd4ffefcd',
            name: 'Chat Script For QA',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    {
                      value: '^/applications/human-capital-management/chat-test-wo.html',
                      valueIsRegex: !0,
                    },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>\n\t\twindow.sc_channel = \'SC Ocom\';\n    if(window.location.pathname.indexOf(\'technetwork\') != -1){\n    \twindow.sc_channel = "SC OTN";\n    }\n  \n  \tvar sc_product = _satellite.getVar(\'salesChatProductId\');\n    var x = document.getElementsByClassName("atgchat-link");\n    for (var i = 0; i < x.length; i++) {\n    name = "ochat";\n        arr = x[i].className.split(" ");\n        if (arr.indexOf(name) == -1) {\n            x[i].className += " " + name;\n        }\n   }\n   \n   var oChatScript = document.createElement(\'script\');\n\toChatScript.type = \'text/javascript\';\n\toChatScript.src = "//www.oracle.com/a/ocom/docs/oracle-chat-pp-test.js";\n\toChatScript.id = "oracle_chat";\n\toChatScript.async = false;\n\toChatScript.setAttribute("data-path", "/asset/web/json/chat-translation-data.json");\n\toChatScript.setAttribute("data-scchannel", window.sc_channel);\n\tdocument.body.appendChild(oChatScript);\n</script>\n<!-- <script data-reqjq src="//www.oracle.com/asset/web/js/oracle-chat.js" onload="this.setAttribute(\'data-scchannel\',window.sc_channel)" id="oracle_chat" data-path="/asset/web/json/chat-translation-data.json"></script> -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL2597cbdc80214076b835882929f678de',
            name: 'Eloqua Google Conversion Tag - 154756',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: 'a#downloadFilePDF', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'lp=72720', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC12f4642974ad45e5b77c2a2a04c09964-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL28984b2c51bb434aa22900418899b124',
            name: 'Eloqua Oracle Marketing Cloud Eloqua LP Advertise Campaign-1149099 ',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = ['68516', '67937', '67295', '68350'],
                      a = _satellite.getVar('LP_id');
                    return -1 != t.indexOf(a);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC74fcb77c2c5a456ab9be9661ff3f2cb9-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCcf708e9264bf4a82979acf9f7bc1439c-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL887395907ab446119f1153c85cfddce6',
            name: 'Maxymiser Core Script - Bottom Async performance',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'abtm', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>window.dataLayerObject.maxymiserDeployed = true;</script>\n<script type="text/javascript" src="https://service.maxymiser.net/api/us/ocomtest.oracle.com/eb93eb/mmapi.js" async></script>',
                  language: 'html',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source: "$('.herotabs').show();\n$('.pghero').show();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL2198773fb0b74bc59f506cce1bd672c6',
            name: 'Awareness UBER TAG - Stage Sites',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'go-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'community-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'www-dev1.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/\\bauto.oracle.com/', valueIsRegex: !0 },
                    { value: '/corporate/accessibility/', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return (
                      !(
                        (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                        e.dnt ||
                        0 != _satellite.getVar('countryExclusion')
                      ) &&
                      (('go.oracle.com' != location.host && 'www.oracle.com' != location.host) ||
                        -1 != location.search.indexOf('testUber=true'))
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'coreTags', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'uberTag', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC9345c171b12146c2b26c2034897b3344-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2a497c22017246d4904c303fe1305d4e',
            name: 'Maxymiser Core Script Async - PROD',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [{ value: '^/corporate/acquisitions/net4call/$', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>window.dataLayerObject.maxymiserDeployed = true;</script>\n<script type="text/javascript" src="https://service.maxymiser.net/api/us/ocomtest.oracle.com/eb93eb/mmapi.js" async></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL89620d1ca14e42c49f382d845e1142d4',
            name: 'NAS Communications GBU Q3FY18 - December 5 2017 - 141951',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    return (
                      (t[
                        '/industries/communications/enterprise/products/live-experience-cloud/index.html'
                      ] = { type: 'fy18c0', cat: 'oracl0' }),
                      (t[
                        '/industries/communications/enterprise/products/session-border-controller/index.html'
                      ] = { type: 'fy18c000', cat: 'oracl0' }),
                      (t[
                        '/industries/communications/enterprise/products/interactive-session-recorder/index.html'
                      ] = { type: 'fy18c000', cat: 'oracl000' }),
                      (t[
                        '/industries/communications/enterprise/products/operations-monitor/index.html'
                      ] = { type: 'fy18c000', cat: 'oracl001' }),
                      'object' == typeof t[location.pathname] &&
                        ((window.type = t[location.pathname].type),
                        (window.cat = t[location.pathname].cat),
                        !0)
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
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=\'+ window.type +\';cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLc47e2dce537049cc8c2a810b0e63cb94',
            name: 'Global Site Tag - Japan',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=79141', valueIsRegex: !0 },
                    { value: 'lp=79142', valueIsRegex: !0 },
                    { value: 'lp=74439', valueIsRegex: !0 },
                    { value: 'lp=74416', valueIsRegex: !0 },
                    { value: 'lp=74560', valueIsRegex: !0 },
                    { value: 'lp=74605', valueIsRegex: !0 },
                    { value: 'lp=78210', valueIsRegex: !0 },
                    { value: 'lp=56961', valueIsRegex: !0 },
                    { value: 'lp=56882', valueIsRegex: !0 },
                    { value: 'lp=77312', valueIsRegex: !0 },
                    { value: 'lp=66521', valueIsRegex: !0 },
                    { value: 'lp=61300', valueIsRegex: !0 },
                    { value: 'lp=77199', valueIsRegex: !0 },
                    { value: 'lp=77325', valueIsRegex: !0 },
                    { value: 'lp=77213', valueIsRegex: !0 },
                    { value: 'lp=77292', valueIsRegex: !0 },
                    { value: 'lp=76756', valueIsRegex: !0 },
                    { value: 'lp=77286', valueIsRegex: !0 },
                    { value: 'lp=62462', valueIsRegex: !0 },
                    { value: 'lp=83029', valueIsRegex: !0 },
                    { value: 'lp=83351', valueIsRegex: !0 },
                    { value: 'lp=83449', valueIsRegex: !0 },
                    { value: 'lp=83427', valueIsRegex: !0 },
                    { value: 'lp=83478', valueIsRegex: !0 },
                    { value: 'lp=83483', valueIsRegex: !0 },
                    { value: 'lp=83472', valueIsRegex: !0 },
                    { value: 'lp=83963', valueIsRegex: !0 },
                    { value: 'lp=83959', valueIsRegex: !0 },
                    { value: 'lp=85269', valueIsRegex: !0 },
                    { value: 'lp=86518', valueIsRegex: !0 },
                    { value: 'lp=100997', valueIsRegex: !0 },
                    { value: 'lp=101005', valueIsRegex: !0 },
                    { value: 'lp=101082', valueIsRegex: !0 },
                    { value: 'lp=101093', valueIsRegex: !0 },
                    { value: 'lp=101108', valueIsRegex: !0 },
                    { value: 'lp=101197', valueIsRegex: !0 },
                    { value: 'lp=101214', valueIsRegex: !0 },
                    { value: 'lp=101301', valueIsRegex: !0 },
                    { value: 'lp=101199', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCd42baf4326c4489dbfc83ceb2ca1f59a-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2aa226a87f35408eac4031255244ffac',
            name: 'Eloqua First Party Script',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e =
                        -1 != location.host.indexOf('-stage') ||
                        -1 != location.host.indexOf('-content') ||
                        -1 != location.host.indexOf('localhost') ||
                        -1 != location.host.indexOf('.us.oracle.com') ||
                        -1 != location.host.indexOf('127.0.0.1') ||
                        -1 != location.host.indexOf('-dev') ||
                        -1 != location.host.indexOf('www-sites'),
                      t = _satellite.getVar('trusteConsent');
                    return !(
                      e ||
                      (-1 == t.truste_consent.indexOf(0) &&
                        -1 == t.truste_consent.indexOf(2) &&
                        -1 == t.truste_consent.indexOf(3)) ||
                      t.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'coreTags', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'eloqua', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'eloqua', value: 'basictag', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "/* Create the Eloqua tracking array if it doesn't exist */\nvar _elqQ = _elqQ || [];\nvar elq_path = '/i/';\nvar elq_global = 'elqCfg.min.js'\n/* Eloqua server (root) */\t\t\t\t\nvar elq_root = '//img03.en25.com';\t\t\t\t\t// Eloqua ONLY has production\nvar elq_prodID = '1973398186';\t\t\t\t\t\t// Eloqua PROD instance\nvar elq_devID  = '30554202';\t\t\t\t\t\t// Eloqua DEV instance\n\n/* Set up and send the Eloqua ping to Eloqua PROD instance, but only send web site PRODUCTION data. */\n_elqQ.push(['elqSetSiteId', elq_prodID]);\n_elqQ.push(['elqUseFirstPartyCookie', 'go.oracle.com']);              //For PROD\n_elqQ.push(['elqTrackPageView']);\n\n/* The function to insert the asyncronous JavaScript into the page once the DOM has loaded */\n(function () {\n  function async_load() {\n    var s = document.createElement('script'); \n    s.type = 'text/javascript'; \n    s.async = true;\n    s.src = '//img03.en25.com/i/elqCfg.min.js';\n    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);\n  }\n  if(window.jQuery) {\n\t  jQuery(document).ready(function($) { async_load(); });\n\t} else {\n\t\tdocument.addEventListener(\"DOMContentLoaded\", function(event) { async_load(); });\t\n\t}\n})();\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLd109c9c1c6854494b2f0d51ad58afc4d',
            name: 'Eloqua Oracle CX Web Google Display Ad campaign - 150934',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'lp=70483', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC2981f68ce57b4bc39482a85bbd946796-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC5f26f3f7329b44019b3a1f9a1f8a3414-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9a84b8fc899a458ba8b439a282784bff',
            name: 'Stage Scripts',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www-content.oracle.com', valueIsRegex: !0 },
                    { value: 'www-content-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'www-portal-stage.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^/technetwork/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>\n \t \tvar sc_product = _satellite.getVar(\'salesChatProductId\');\n    var x = document.getElementsByClassName("atgchat-link");\n    for (var i = 0; i < x.length; i++) {\n    name = "ochat";\n        arr = x[i].className.split(" ");\n        if (arr.indexOf(name) == -1) {\n            x[i].className += " " + name;\n        }\n   }\n</script>\n<script data-reqjq src="//www.oracle.com/asset/web/js/oracle-chat.js" id="oracle_chat" data-scchannel="SC OTN" data-path="/webfolder/assets/chat-translation-data.json"></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLa66a0dbda43e40139ad489b1cf3c26b7',
            name: 'Eloqua NAS HCM Q3FY18 - December 1 2017 - 141749',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    (t[55113] = { cat: 'hcmfi0' }),
                      (t[55114] = { cat: 'hcmfi00' }),
                      (t[57822] = { cat: 'hcmwo0' }),
                      (t[57823] = { cat: 'hcmwo00' });
                    var a = _satellite.getVar('LP_id');
                    return 'object' == typeof t[a] && ((window.cat = t[a].cat), !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=namhc001;cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLe8bcd1b56664441196cf7a20aeebe3d8',
            name: 'Maxymiser Core Script copy - Self hosting Performance Test',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'selfhosted', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>window.dataLayerObject.maxymiserDeployed = true;</script>\n<script type="text/javascript" src="//www.oracle.com/asset/web/maxymiser/mmcore.js"></script>\n',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL6f6a4eaddbce4be9b354e59e191da173',
            name: 'Eloqua-JP Conversion Pixels 168871',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=81193', valueIsRegex: !0 },
                    { value: 'lp=81194', valueIsRegex: !0 },
                    { value: 'lp=81180', valueIsRegex: !0 },
                    { value: 'lp=81181', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = _satellite.getVar('LP_id');
                    return (
                      ('81181' != t && '81194' != t) || (window.thankspage = !0),
                      ('81180' != t && '81193' != t) || (window.thankspage = !1),
                      !0
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC106920d0d0684de6a25d939e25db65f8-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLea3233a2040c4ebfafaede8035378bf4',
            name: 'Eloqua HCM Paid Search Google Re marketing Pixels  Campaign - 155087',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=62356', valueIsRegex: !0 },
                    { value: 'lp=62460', valueIsRegex: !0 },
                    { value: 'lp=62348', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC89b7a5cb0d454ccbbc63b7c8f07b1105-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9e5f414e8c954c6eb5081771ddaae067',
            name: 'Infinity Tag - Eloqua',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                    { value: 'eventreg.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) &&
                        -1 == e.truste_consent.indexOf(2) &&
                        -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    '//var tagURL = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oraclego/odc.js?_ora.context=analytics:production";\nif(window.location.href.indexOf(\'InfinityDev=true\') > 0 ){\n    var tagURL = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oraclego/odc.js?_ora.context=analytics:development";\n    var iTag = document.createElement("script");\n    iTag.src = tagURL;\n    iTag.async = true;\n    iTag.type = \'text/javascript\';\n    document.head.appendChild(iTag);   \n}\n\n\n\n    ',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL2aee4df37fb94b0188922fc37a8057cc',
            name: 'SMB IT',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'smb/it', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB IT\nURL of the webpage where the tag is expected to be placed: https://go.oracle.com/smb-it\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 12/21/2016\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbgo0;cat=smbit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbgo0;cat=smbit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLecd6bea1f7634eac9bbd62be9110f6ff',
            name: 'Eloqua-JP Conversion Pixels 163292',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=78509', valueIsRegex: !0 },
                    { value: 'lp=78510', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion') ||
                      ('78509' == _satellite.getVar('LP_id')
                        ? ((window.google_tag_label = 'Q4t7CK21yoMBEKbFwv4C'),
                          (window.gtm_params = !0),
                          (window.google_tag_remarketing = !0))
                        : ((window.google_tag_label = 'JNXtCNvE-5IBEKbFwv4C'),
                          (window.gtm_params = !1),
                          (window.google_tag_remarketing = !1)),
                      0)
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCd5b8f3e6919948069e01461db3ce622a-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf92586103f1a4f2e9cae88c6d1f1cd9a',
            name: 'Maxymiser Core Script copy - Default Hosting Performance Test',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'default', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>window.dataLayerObject.maxymiserDeployed = true;</script>\n<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLa708213663fb41408b97b9dd3c0f01a2',
            name: 'Eloqua LAD SMB | Q3FY18 - December 21 2017-142753',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [
                        '62729',
                        '62730',
                        '62750',
                        '62751',
                        '62758',
                        '62674',
                        '62675',
                        '62759',
                        '62760',
                        '62806',
                        '62563',
                        '62565',
                        '62687',
                        '62688',
                        '62802',
                        '62883',
                        '62884',
                        '62885',
                        '62886',
                        '62695',
                        '62800',
                        '62801',
                        '62841',
                        '62842',
                        '62761',
                        '62762',
                        '62763',
                        '62764',
                        '62765',
                        '62811',
                        '62993',
                        '62994',
                        '62850',
                        '62851',
                        '62803',
                        '62887',
                        '62888',
                        '62893',
                        '62894',
                        '62757',
                      ],
                      a = _satellite.getVar('LP_id');
                    return -1 != t.indexOf(a);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the <head> and </head> tags on every page of your site.\n-->\n<!-- Global site tag (gtag.js) - DoubleClick -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=DC-3573286\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-3573286');\n</script>\n<!-- End of global snippet: Please do not remove -->",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL7172ad14f8b74cff900a45f0708b485b',
            name: 'Form Complete Uber Tag New - Testing',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'UberTag-FormComplete' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^/index.html', valueIsRegex: !0 }] },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion') ||
                      -1 != location.search.indexOf('testUber=true') ||
                      -1 != document.referrer.indexOf('explore.oracle.com') ||
                      ('go.oracle.com' != location.host &&
                        ('www.oracle.com' != location.host ||
                          (!window.formHtmlName &&
                            -1 == s.pageName.indexOf('Thank') &&
                            -1 == s.eVar24.indexOf('success=true'))))
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCb9d460e3639f4178992897450175e82d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLdb8f87738bcf4ae691e9bf2cf8272b03',
            name: 'Push state Event - Single Page App',
            events: [
              { modulePath: 'core/src/lib/events/historyChange.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www-stage.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/customers/products', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC554b758be50f49e1a9848dab573c57db-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL919c678f0d4a478eb23388107a4fe0be',
            name: 'Eloqua Source Tracking Script',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var s = document.createElement("script");\ns.type = "text/javascript";\ns.async = true;\ns.src = "//www.oracle.com/a/ocom/docs/dc/urltrack-lib.js";\ndocument.head.appendChild(s);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa0ec39cfc15b4bbc8eb32cb01074d6af',
            name: 'Eloqua-JP Conversion Pixels 161940',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=68350', valueIsRegex: !0 },
                    { value: 'lp=72723', valueIsRegex: !0 },
                    { value: 'lp=75205', valueIsRegex: !0 },
                    { value: 'lp=76369', valueIsRegex: !0 },
                    { value: 'lp=73778', valueIsRegex: !0 },
                    { value: 'lp=71223', valueIsRegex: !0 },
                    { value: 'lp=72727', valueIsRegex: !0 },
                    { value: 'lp=73833', valueIsRegex: !0 },
                    { value: 'lp=67937', valueIsRegex: !0 },
                    { value: 'lp=67295', valueIsRegex: !0 },
                    { value: 'lp=68516', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCdb89d66361be4d988c36d4a89198b1fe-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL6fe216ce6747432c8ef0048f7b834441',
            name: 'Eloqua-JP Conversion Pixels AW-836061479 - 172000',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=81193', valueIsRegex: !0 },
                    { value: 'lp=82559', valueIsRegex: !0 },
                    { value: 'lp=81075', valueIsRegex: !0 },
                    { value: 'lp=82589', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC0686b2ffa0014a5eb902dcbef367aa8b-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC942dff17c1ab4664a3ed42e06ef15d2f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL80b9f2d57cc748a4ad11d735b25196ff',
            name: 'Eloqua Advertising Clone Bundle Script',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    for (
                      var e = !1, t = window.location.search.substring(1).split('&'), a = 0;
                      a < t.length;
                      a++
                    ) {
                      var n = t[a].split('=');
                      'src1' == n[0] && 'pas' == n[1].split(':')[2] && (e = !0);
                    }
                    return e;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "var advCloneBundleScript = document.createElement('script');\nadvCloneBundleScript.type = 'text/javascript';\nvar _url = \"//www.oracle.com/a/ocom/docs/dc/adv-clone-bundle.js\";\n\nif(location.href.indexOf('opstest=true') != -1){\n   _url = \"//www.oracle.com/a/ocom/docs/dc/adv-clone-bundle-test.js\";\n}\nadvCloneBundleScript.src = _url;\nadvCloneBundleScript.async = true;\ndocument.body.appendChild(advCloneBundleScript);",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL89b4db631f58444fb10cbd3216e6983c',
            name: 'truste test - page top',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 3 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'truste', value: 'top', valueIsRegex: !1 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="text/javascript" src="//consent.truste.com/notice?domain=oracle.com&c=teconsent&js=bb&noticeType=bb&text=true&gtm=1&cdn=1&pcookie" async crossorigin></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLd6195b97a424480bab7a6765123e3272',
            name: 'Maxymiser Core Script - Bottom load performance  CSS hide',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 1 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'bottom', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'document.write("<style>.herotabs{display:none;}</style>");\ndocument.write("<style>.pghero{display:none;}</style>");',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL5050d7a9ee1f4488a3427e56a5637c84',
            name: 'Maxymiser Core Script - Async performance  CSS hide',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 1 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'async', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'document.write("<style>.herotabs{display:none;}</style>");\ndocument.write("<style>.pghero{display:none;}</style>");',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa29c9b35eaf641068216b08d703d8d1c',
            name: 'Eloqua NAS SMB Q4FY18 - April 26 2018-149749',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    (t[68510] = { cat: 'smbcx007', type: 'oracl0' }),
                      (t[68511] = { cat: 'smbcx004', type: 'oracl000' });
                    var a = _satellite.getVar('LP_id');
                    return (
                      'object' == typeof t[a] &&
                      ((window.cat = t[a].cat), (window.type = t[a].type), !0)
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
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<!-- Start of DoubleClick Floodlight Tag: Please do not remove --> <iframe src="https://8312155.fls.doubleclick.net/activityi;src=8312155;type=\'+ window.type +\';cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLf4afacd037cc4b159e041a99eef06c23',
            name: 'Oracle Startup - Landing Page',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'startup/index.html', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: Oracle Startup - Landing Page\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/startup/index.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 11/21/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=fy18n006;cat=oracl0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=fy18n006;cat=oracl0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLf24b8a264521475d94883e6e976d60c1',
            name: 'Eloqua Conversion Pixels-68487-157445',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'lp=68487', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC2914eaa1910c4515b6484bc6bfb450f6-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLda05d2f84f4941938f2d172d8295b6b3',
            name: 'Maxymiser Core Script - Async performance ',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'async', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>window.dataLayerObject.maxymiserDeployed = true;</script>\n<script type="text/javascript" src="https://service.maxymiser.net/api/us/ocomtest.oracle.com/eb93eb/mmapi.js" async></script>',
                  language: 'html',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source: "$('.herotabs').show();\n//$('.pghero').show();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL8a9cc120001d435a9724d7c34f2b54b2',
            name: 'truste test',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 1 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/poc/page-performance/truste-visualrender.html', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="text/javascript" src="//consent.truste.com/notice?domain=oracle.com&c=teconsent&js=bb&noticeType=bb&text=true&gtm=1&cdn=1&pcookie" async crossorigin></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL527fa0df89264e2699e384497fa72adf',
            name: 'Maxymiser Core Script -Bottom Async performance  CSS hide',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 1 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'abtm', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'document.write("<style>.herotabs{display:none;}</style>");\ndocument.write("<style>.pghero{display:none;}</style>");',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLef5c010d6a6b4a09a1e947223d0d3c8a',
            name: 'Eloqua NAS SMB Q3FY18 - December 18 2017 - 142568',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    (t[57762] = { cat: 'smbcx003', type: 'oracl000' }),
                      (t[48378] = { cat: 'smbcx00', type: 'oracl000' }),
                      (t[54753] = { cat: 'smbcx001', type: 'oracl0' }),
                      (t[48377] = { cat: 'smbcx000', type: 'oracl0' }),
                      (t[57761] = { cat: 'smbcx004', type: 'oracl0' }),
                      (t[54354] = { cat: 'smbcx002', type: 'oracl0' }),
                      (t[54754] = { cat: 'smbcx000', type: 'oracl000' }),
                      (t[54919] = { cat: 'smber00', type: 'oracl0' }),
                      (t[55229] = { cat: 'smber002', type: 'oracl000' }),
                      (t[54920] = { cat: 'smber000', type: 'oracl000' }),
                      (t[55343] = { cat: 'smber004', type: 'oracl000' }),
                      (t[55342] = { cat: 'smber002', type: 'oracl0' }),
                      (t[55228] = { cat: 'smber000', type: 'oracl0' }),
                      (t[55353] = { cat: 'smber001', type: 'oracl0' }),
                      (t[54350] = { cat: 'smbhc000', type: 'oracl000' }),
                      (t[46363] = { cat: 'smbhc002', type: 'oracl0' }),
                      (t[46365] = { cat: 'smbhc002', type: 'oracl000' }),
                      (t[54349] = { cat: 'smbhc000', type: 'oracl0' }),
                      (t[55311] = { cat: 'smbhc003', type: 'oracl000' }),
                      (t[55344] = { cat: 'smbhc005', type: 'oracl0' }),
                      (t[55310] = { cat: 'smbhc004', type: 'oracl0' }),
                      (t[55345] = { cat: 'smbhc004', type: 'oracl000' }),
                      (t[48955] = { cat: 'smbcx0', type: 'oracl000' }),
                      (t[51189] = { cat: 'smbcx003', type: 'oracl0' }),
                      (t[51190] = { cat: 'smbcx002', type: 'oracl000' }),
                      (t[54355] = { cat: 'smbcx001', type: 'oracl000' }),
                      (t[48934] = { cat: 'smber00', type: 'oracl000' }),
                      (t[48809] = { cat: 'smber0', type: 'oracl0' }),
                      (t[55354] = { cat: 'smber003', type: 'oracl000' }),
                      (t[48769] = { cat: 'smber001', type: 'oracl000' }),
                      (t[56750] = { cat: 'smber005', type: 'oracl000' }),
                      (t[56749] = { cat: 'smber003', type: 'oracl0' }),
                      (t[48808] = { cat: 'smber0', type: 'oracl000' }),
                      (t[50090] = { cat: 'smbhc001', type: 'oracl000' }),
                      (t[50089] = { cat: 'smbhc003', type: 'oracl0' }),
                      (t[48504] = { cat: 'smbhc00', type: 'oracl0' }),
                      (t[48943] = { cat: 'smbhc0', type: 'oracl000' }),
                      (t[48505] = { cat: 'smbhc00', type: 'oracl000' });
                    var a = _satellite.getVar('LP_id');
                    return 'object' == typeof t[a]
                      ? ((window.cat = t[a].cat), (window.type = t[a].type), !0)
                      : 'object' == typeof t[location.pathname] &&
                          ((window.cat = t[location.pathname].cat),
                          (window.type = t[location.pathname].type),
                          !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var axel = Math.random() + "";\t\nvar a = axel * 10000000000000;\nvar pixel = \'<!-- Start of DoubleClick Floodlight Tag: Please do not remove --> <iframe src="https://8312155.fls.doubleclick.net/activityi;src=8312155;type=\'+ window.type +\';cat=\'+ window.cat +\';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\';\ndocument.getElementsByTagName("body")[0].insertAdjacentHTML(\'afterBegin\', pixel);\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLd374c417957d41a682d8750d4870c3c8',
            name: 'Qualified Lead Uber Tag New - Testing',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'UberTag-QualifiedLead' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion') ||
                      -1 != document.referrer.indexOf('explore.oracle.com') ||
                      ('go.oracle.com' != location.host &&
                        (_satellite.getVar('scData').found ||
                          -1 == ['event23', 'event27'].indexOf(s.events)))
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC7570cfbee1ce427991c5d8fdde689ede-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL382ea637eb174c7d8c1e5886e07f8cd7',
            name: 'Autonomous Site - Advertising Scripts',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = [
                        'www-stage.oracle.com',
                        'www-sites-stage.oracle.com',
                        'www-sites.oracle.com',
                      ],
                      t = _satellite.getVar('truste_consent');
                    return (
                      1 != t &&
                      2 != t &&
                      0 == _satellite.getVar('countryExclusion') &&
                      -1 == location.search.indexOf('testUber=true') &&
                      ((-1 != e.indexOf(window.location.host) &&
                        0 == window.location.pathname.indexOf('/auto.oracle.com/')) ||
                        'auto.oracle.com' == window.location.host)
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC15745117f8d749fa8dcec581a33a21f9-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCca751e31118d44f4815ffa37b1c69d64-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLabad7f8211614590a9ea356991f42c22',
            name: 'Maxymiser Core Script copy - Bottom load Performance',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'bottom', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>window.dataLayerObject.maxymiserDeployed = true;</script>\n<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></script>\n\n',
                  language: 'html',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source: "$('.herotabs').show();\n$('.pghero').show();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL8fe439860bac41ea9291e81f1112c76a',
            name: 'Eloqua-JP Conversion Pixels 163559',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=76369', valueIsRegex: !0 },
                    { value: 'lp=72723', valueIsRegex: !0 },
                    { value: 'lp=72727', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC556830170b4042c9a59974835c017570-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLfc7d33f7a8894236acc8fe205b802360',
            name: 'TrustArc Script Production copy - Bottom performance test',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com' },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'trustarc', value: 'bottom', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="text/javascript" src="//consent.truste.com/notice?domain=oracle.com&c=teconsent&js=bb&noticeType=bb&text=true&gtm=1&cdn=1&pcookie" async crossorigin></script>\n<script type="text/javascript">\nif (location.pathname.indexOf("/ru/") === 0){\n  document.write(\'\\x3Cscript src=//consent.truste.com/notice?domain=oracleru.com&c=teconsent&js=bb&noticeType=bb&text=true&gtm=1&cdn=1&pcookie async crossorigin="">\\x3C/script>\');\n}\n</script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLf76c45533ab147bda6e55a1b8977a387',
            name: 'Eloqua First Party Script copy - Performance Test',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e =
                        -1 != location.host.indexOf('-stage') ||
                        -1 != location.host.indexOf('-content') ||
                        -1 != location.host.indexOf('localhost') ||
                        -1 != location.host.indexOf('.us.oracle.com') ||
                        -1 != location.host.indexOf('127.0.0.1') ||
                        -1 != location.host.indexOf('-dev') ||
                        -1 != location.host.indexOf('www-sites'),
                      t = _satellite.getVar('trusteConsent');
                    return !(
                      e ||
                      (-1 == t.truste_consent.indexOf(0) &&
                        -1 == t.truste_consent.indexOf(2) &&
                        -1 == t.truste_consent.indexOf(3)) ||
                      t.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'coreTags', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'eloqua', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'eloqua', value: 'basictag', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    "    var _elqQ = _elqQ || [];\n    var elq_prodID = '1973398186';\t\t\t\t\t\t// Eloqua PROD instance\n    var elq_devID  = '30554202';\t\t\t\t\t\t// Eloqua DEV instance\n    _elqQ.push(['elqSetSiteId', elq_prodID]);\n    _elqQ.push(['elqUseFirstPartyCookie', 'go.oracle.com']);\n    _elqQ.push(['elqTrackPageView']);\n\t\n    (function() {\n        function async_load() {\n            var s = document.createElement('script'); s.type = 'text/javascript';\n            s.async = true;\n            s.src = '//img.en25.com/i/elqCfg.min.js';\n            var x = document.getElementsByTagName('script')[0];\n            x.parentNode.insertBefore(s, x);\n        }\n        if(window.addEventListener) window.addEventListener('DOMContentLoaded', async_load, false);\n        else if (window.attachEvent) window.attachEvent('onload', async_load);\n    })();\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa3944f822186444e8c8df6139839a4d2',
            name: 'Eloqua Oracle IaaS/PaaS Google Display Ad campaign - 153005',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=70897', valueIsRegex: !0 },
                    { value: 'lp=68486', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC946c6c94f9334d82935fc9409655e0c9-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC8218ed8350cb4ae58bb26e0f017982f7-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb2488be8e54245cbb6e31d4dd17f8487',
            name: 'Chat Script for HP',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    {
                      value: '^/(([A-Za-z]{2})|([A-Za-z]{2}-[A-Za-z]{2}))/index.html',
                      valueIsRegex: !0,
                    },
                    { value: '^/lad/index.html', valueIsRegex: !0 },
                    { value: '^/asiasouth/index.html', valueIsRegex: !0 },
                    { value: '^/africa-fr/index.html', valueIsRegex: !0 },
                    { value: '^/africa/index.html', valueIsRegex: !0 },
                    { value: '^/middleeast/index.html', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '^/index.html', valueIsRegex: !0 },
                    { value: '^/ca-fr/index.html', valueIsRegex: !0 },
                    { value: '^/il/index.html', valueIsRegex: !0 },
                    { value: '^/sa-ar/index.html', valueIsRegex: !0 },
                    { value: '^/ae-ar/index.html', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'coreTags', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'chat', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>\n    var x = document.getElementsByClassName("atgchat-link");\n    for (var i = 0; i < x.length; i++) {\n    name = "ochat";\n        arr = x[i].className.split(" ");\n        if (arr.indexOf(name) == -1) {\n            x[i].className += " " + name;\n        }\n   }\n</script>\n<script data-reqjq src="//www.oracle.com/asset/web/js/oracle-chat.js" id="oracle_chat" data-path="/asset/web/json/chat-translation-data.json"></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL924712cb2e384caeab03da985da24550',
            name: 'Eloqua Conversion Pixels 158266',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=73833', valueIsRegex: !0 },
                    { value: 'lp=73778', valueIsRegex: !0 },
                    { value: 'lp=75205', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC1e3dfb7d30ba441e8ec220be3bb23ccf-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa423b1abe9444fa89ac1f7be78c8d130',
            name: 'OTN Software Downloads Script',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '_qa/test-otn-sw-downloads.html', valueIsRegex: !0 },
                    { value: '/technologies/', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return 0 != document.getElementsByClassName('otn-software').length;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script data-reqjq async="async" language="JavaScript" data-src="https://www.oracle.com/a/tech/docs/otn-osdc.js"></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLf5d92a00fcc74ac9a34e7601ede51be4',
            name: 'Maxymiser-Global',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'blogs.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'coreTags', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'maxymiser', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>window.dataLayerObject.maxymiserDeployed = true;</script>\n<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL711cf721f4de4110b1c2b2da1f1855a7',
            name: 'SMB Sales Cloud',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'smb/sales-cloud', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB Sales Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/sales-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx0;cat=smbsa0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx0;cat=smbsa0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL26e5ec017ee847bcaa4325de4714f0a8',
            name: 'Consideration Prospecting UBER TAG Video CTA  New - Testing',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: '.bcc_cta a', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^/index.html', valueIsRegex: !0 }] },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC5f45928ed9cd4a1cab47fd0d558b8ac5-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLfe69caace8a04a0eb94f9b91c20f27b2',
            name: 'DB Click Pixels for IaaS ',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/cloud/iaas/', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    return (
                      (t['/de/cloud/iaas/clearer-path-to-cloud-adoption/customer-stories.html'] = {
                        cat: 'cloud003',
                      }),
                      (t['/it/cloud/iaas/clearer-path-to-cloud-adoption/customer-stories.html'] = {
                        cat: 'cloud007',
                      }),
                      (t['/uk/cloud/iaas/clearer-path-to-cloud-adoption/customer-stories.html'] = {
                        cat: 'cloud00',
                      }),
                      (t['/de/cloud/iaas/clearer-path-to-cloud-adoption.html'] = {
                        cat: 'cloud002',
                        bcid_cat: 'cloud005',
                      }),
                      (t['/it/cloud/iaas/clearer-path-to-cloud-adoption.html'] = {
                        cat: 'cloud006',
                        bcid_cat: 'cloud009',
                      }),
                      (t['/uk/cloud/iaas/clearer-path-to-cloud-adoption.html'] = {
                        cat: 'cloud0',
                        bcid_cat: 'cloud001',
                      }),
                      (t['/de/cloud/iaas/clearer-path-to-cloud-adoption/pulse-survey.html'] = {
                        cat: 'cloud004',
                      }),
                      (t['/it/cloud/iaas/clearer-path-to-cloud-adoption/pulse-survey.html'] = {
                        cat: 'cloud008',
                      }),
                      (t['/uk/cloud/iaas/clearer-path-to-cloud-adoption/pulse-survey.html'] = {
                        cat: 'cloud000',
                      }),
                      'object' == typeof t[location.pathname] &&
                        (-1 != location.search.indexOf('bcid=548068258800')
                          ? (window.cat = t[location.pathname].bcid_cat)
                          : (window.cat = t[location.pathname].cat),
                        !0)
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCdac3b657a4644800b5038aa28fa493d2-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL90952543c6614a9ca4890f0f02c34d19',
            name: 'Data Layer',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                    { value: 'auto.oracle.com', valueIsRegex: !0 },
                    { value: 'www-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'community-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                    { value: 'www-content.oracle.com', valueIsRegex: !0 },
                    { value: 'www-dev1.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return _satellite.getVar('dataLayer'), !0;
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'cxupoc', value: 'true', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '/*if(dataLayerObject.page.pageInfo.keywords){\n  var _variation = false;\n  var keywordaArr = dataLayerObject.page.pageInfo.keywords.split(\',\');\n  console.log(keywordaArr);\n  keywordaArr.forEach(function(ele){\n    console.log(ele);\n    if(ele.trim().indexOf(\'AA\') != -1) {\n      console.log("in if");\n      _variation = ele.trim();\n       dataLayerObject.page.variation = _variation;\n    }\n  });\n  if(_variation){\n     console.log("_variation", _variation);\n    dataLayerObject.page.variation = _variation;\n  }\n}\n*/',
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "/* Function to get profile User Type and login status of User */\nfunction getUserInfo(){\n\tvar user = {};\n\t\n\tif (_satellite.cookie.get('ORA_WWW_MRKT')) { // Check for the cookie - use the ORA_WWW_MRKT first but if that doesn't exist then look to use ORA_UCM_INFO\n\t\tvar mrktCookie =  _satellite.cookie.get('ORA_WWW_MRKT');\n    \tuser.userType = (mrktCookie.toLowerCase().indexOf('employee') > 0 ) ? \"O\" : \"P\";\n\t\tuser.profileGUID = mrktCookie.split('~')[1].slice(2);\n\t\tuser.cookieName = 'www_mrkt';\n\t} else if (_satellite.cookie.get('ORA_UCM_INFO')) { // If ORA_WWW_MRKT is not there, then look for the ORA_UCM_INFO cookie\n\t\tvar ucmCookie =  _satellite.cookie.get('ORA_UCM_INFO');\n\t\tucmCookie.split('~')[4] && (\n\t\t  user.userType = (ucmCookie.split('~')[4] .toLowerCase().indexOf('@oracle') > 0) ? \"O\" : \"P\"\n\t\t);\n\t\tuser.profileGUID = ucmCookie.split('~')[1];\n\t\tuser.cookieName = 'ucm_info';\n\t} else { // If ora_www_mrkt and ora_ucm_info doesn't exist, its an Unsigned User.\n\t\tuser.userType = 'U';\n\t\tuser.cookieName = 'NoCookie';\n\t\tuser.profileGUID = 'NotSet';\n\t}\n  \n    if (_satellite.cookie.get('ORA_WWW_PERSONALIZE')){\n      user.profileInfo = getPersonalizeObject();\n    }\n\treturn user;\n}\t\n\t\nvar consent_level = _satellite.getVar('trusteConsent'); // Check for User's Truste consent preferences.\nvar userInfo =  getUserInfo(); // Read User' profile information.\n\ndataLayerObject.user.isLoggedIn = (userInfo.userType == 'U') ? 'Not Logged In' : 'Logged In'; // Set login status to Data layer.\n\n// Check for Truste consent. Set ORA_WWW_MRKT and ORA_UCM_INFO only if the User has opted in for Functional cookies.\nif ((consent_level.truste_consent.indexOf(0) != -1 || consent_level.truste_consent.indexOf(2) != -1  || consent_level.truste_consent.indexOf(3) != -1) ) {\n  // Assign userType, cookieStatus and profileGUID to User object in Data Layer\n  dataLayerObject.user.userType = userInfo.userType;\n  dataLayerObject.user.cookieStatus = userInfo.cookieName;\n  if (consent_level.truste_consent.indexOf(0) != -1  || consent_level.truste_consent.indexOf(3) != -1) { // Set GUID, if the User consent is implied (consent level - 0) or explicit (consent level - 3)\n    dataLayerObject.user.profileGUID = userInfo.profileGUID;\n    \n    //Set ORA_WWW_PERSONALIZE cookie value \n    if(userInfo.profileInfo){dataLayerObject.user.profile.profileInfo = userInfo.profileInfo;}\n  } else {  \n    dataLayerObject.user.profileGUID = 'NoConsent';\n    dataLayerObject.user.profile.profileInfo = 'NoConsent';\n  }\n} else {\n  dataLayerObject.user.userType = 'A'; //If no Truste consent, its an Anonymous User.\n  dataLayerObject.user.cookieStatus = 'NoConsent';\n  dataLayerObject.user.profileGUID = 'NoConsent';\n  dataLayerObject.user.profile.profileInfo = 'NoConsent';\n}\n\n// If the TRUSTe preference is not to have advertising OR functional cookies, then don't set Eloqua GUID.\nif ((consent_level.truste_consent.indexOf(0) != -1 || consent_level.truste_consent.indexOf(2) != -1  || consent_level.truste_consent.indexOf(3) != -1) ) {\n  if (_satellite.cookie.get('ELOQUA')){\n    dataLayerObject.user.eloqua.guid = _satellite.cookie.get('ELOQUA').replace('GUID=','');\n  } else {\n    setTimeout (function() {\n      _satellite.cookie.get('ELOQUA') && ( dataLayerObject.user.eloqua.guid = _satellite.cookie.get('ELOQUA').replace('GUID=','') )\n    }, 2000);\n  }\n} else { // No Truste Consent\n   dataLayerObject.user.eloqua.guid = 'NoConsent';\n}\n\n/* Function to check if the User is New or Return visitor, read it from Cookie s_nr */\nif (_satellite.cookie.get('s_nr')) {\n  dataLayerObject.user.isReturning = _satellite.cookie.get('s_nr').split('-')[1] == 'Repeat'? 'Repeat' : 'New';\n} else {\n  setTimeout (function() {\n      _satellite.cookie.get('s_nr') && (dataLayerObject.user.isReturning = _satellite.cookie.get('s_nr').split('-')[1] == 'Repeat'? 'Repeat' : 'New')\n  }, 2000);\n}  \n\nfunction getPersonalizeObject(){\n  var cookieValue = _satellite.cookie.get('ORA_WWW_PERSONALIZE');\n  var tempObj ={};\n  cookieValue.split('~').forEach(function(v,i){\n    var valArr = v.split(':');\n    if(valArr.length == 2){\n       tempObj[valArr[0]] = valArr[1];\n    }\n  });\n  if(Object.keys(tempObj).length > 0){\n    var obj = {};\n    obj.ind = tempObj.i;\n    obj.role = tempObj.r;\n    obj.reg = tempObj.g;\n    obj.lang = tempObj.l;\n    obj.cSize = tempObj.cs;\n    obj.cName = tempObj.cn;\n    \n    return obj;\n  }else{\n    return cookieValue;\n  }\n}",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "var cookieRegistry = [];\n//Get User Details\nfunction listenCookieChange(cookieName, callback) {\n    setInterval(function() {\n        if (cookieRegistry[cookieName]) {\n            var latestCookieVal = _satellite.cookie.get(cookieName) ? _satellite.cookie.get(cookieName) : 'NA'; \n            if ( latestCookieVal != cookieRegistry[cookieName]) {\n                cookieRegistry[cookieName] = latestCookieVal;\n                return callback(latestCookieVal);\n            }\n        } else {\n            cookieRegistry[cookieName] = _satellite.cookie.get(cookieName) ? _satellite.cookie.get(cookieName) : 'NA';\n        }\n    }, 1000);\n}\n\n//listen for change in 'notice_gdpr_prefs' cookie and update changes to dataLayerObject\nlistenCookieChange('notice_gdpr_prefs', function(cookie) {\n  console.log('Truste Consent Changed');\n  window.dataLayerObject.privacy.consentDecision = window.oracle.truste.api.getGdprConsentDecision().consentDecision;\n  window.dataLayerObject.privacy.consentSource = window.oracle.truste.api.getGdprConsentDecision().source;\n  console.log(window.dataLayerObject);\n});\n\n//add truste and Do Not Track values to dataLayer\nwindow.dataLayerObject.privacy.consentDecision = _satellite.getVar('trusteConsent')['truste_consent'];\nwindow.dataLayerObject.privacy.dnt = _satellite.getVar('trusteConsent')['dnt'];\n\n//Set campaigns status to \"NoTrack\" id DNT enabled\nif(window.dataLayerObject.privacy.dnt === true){\n  window.dataLayerObject.user.campaigns.status = \"NoTrack\";\n}\n\n//update country code\nwindow.addEventListener(\"load\", function(){\n  //window.dataLayerObject.privacy.consentSource = window.oracle.truste.api.getGdprConsentDecision().source;\n  window.dataLayerObject.privacy.consentDecision = window.oracle.truste.api.getGdprConsentDecision ? window.oracle.truste.api.getGdprConsentDecision().consentDecision : window.oracle.truste.api.getConsentDecision().consentDecision;\n  window.dataLayerObject.privacy.consentSource = window.oracle.truste.api.getGdprConsentDecision ? window.oracle.truste.api.getGdprConsentDecision().source : window.oracle.truste.api.getConsentDecision().source;\n    if(window.truste != 'undefined') {\n      if (window.truste.eu && window.truste.eu.bindMap && window.truste.eu.bindMap.country){\n        window.dataLayerObject.user.geoCountry = window.truste.eu.bindMap.country;\n      }    \n   }\n}, false);",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLaf8bca9d583b486f866964daae8a291b',
            name: 'Linkedin Pixel Performance Testing',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion') ||
                      -1 != document.referrer.indexOf('explore.oracle.com')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'linkedinTest', value: 'true' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC3f2e210a732142e59c66f574c3148143-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL08fae749ee004ff888ecb00739abbb80',
            name: 'Eloqua-JP Conversion Pixels AW-846058898 - HPgbCMfXv3MQkqu3kwM',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=77199', valueIsRegex: !0 },
                    { value: 'lp=77325', valueIsRegex: !0 },
                    { value: 'lp=77213', valueIsRegex: !0 },
                    { value: 'lp=77292', valueIsRegex: !0 },
                    { value: 'lp=76756', valueIsRegex: !0 },
                    { value: 'lp=62462', valueIsRegex: !0 },
                    { value: 'lp=77286', valueIsRegex: !0 },
                    { value: 'lp=83029', valueIsRegex: !0 },
                    { value: 'lp=83351', valueIsRegex: !0 },
                    { value: 'lp=83449', valueIsRegex: !0 },
                    { value: 'lp=83427', valueIsRegex: !0 },
                    { value: 'lp=83478', valueIsRegex: !0 },
                    { value: 'lp=83483', valueIsRegex: !0 },
                    { value: 'lp=83472', valueIsRegex: !0 },
                    { value: 'lp=83963', valueIsRegex: !0 },
                    { value: 'lp=83959', valueIsRegex: !0 },
                    { value: 'lp=85269', valueIsRegex: !0 },
                    { value: 'lp=86518', valueIsRegex: !0 },
                    { value: 'lp=100997', valueIsRegex: !0 },
                    { value: 'lp=101005', valueIsRegex: !0 },
                    { value: 'lp=101082', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC4e36c8d02f9549e9aec3097587695155-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa089b56631a74b078693541e3ad18e7d',
            name: 'File Download Link - Eloqua - New - Testing',
            events: [
              {
                modulePath: 'core/src/lib/events/click.js',
                settings: { elementSelector: '#downloadFilePDF', bubbleFireIfChildFired: !1 },
                ruleOrder: 50,
              },
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'UberTag-FileDownloadEloqua' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion') ||
                      _satellite.getVar('scData').found ||
                      !window.fileName
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC31580100353548e1b2e4f781edd597f9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL56aacebe598444d3a77503bc573e211f',
            name: 'Qualified Lead Uber Tag New - Testing1',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion') ||
                      -1 != document.referrer.indexOf('explore.oracle.com')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'qualifiedTag', value: 'true', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCcc6e28f367d94c1a8075b14daefe9145-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLfe1ce81ba5c544efa824052b7b7cd6df',
            name: 'Twitter Pixel Performance Testing',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion') ||
                      -1 != document.referrer.indexOf('explore.oracle.com')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'twitterTest', value: 'true' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCf0eb81ee54fd4c7f953234b228243ab3-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb671a2c958884075b19d8209e3df1d3b',
            name: 'Chat bot testing',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: '/_qa/oracle-sales-chat/demo.html', valueIsRegex: !0 }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source: 'window.sc_product = 20;',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa2a2469269d2496fa997d0518d39bdcf',
            name: 'Chat Script',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/corporate/contact/', valueIsRegex: !0 },
                    { value: '/consulting/soar.html', valueIsRegex: !0 },
                    { value: '^/us/corporate/events/soar/index.html', valueIsRegex: !0 },
                    { value: '/applications/', valueIsRegex: !0 },
                    { value: '/artificial-intelligence/', valueIsRegex: !0 },
                    { value: '/autonomouscloud/', valueIsRegex: !0 },
                    { value: '/big-data/', valueIsRegex: !0 },
                    { value: '/cloud/', valueIsRegex: !0 },
                    { value: '/content-storage-management/', valueIsRegex: !0 },
                    { value: '/corporate/pricing/', valueIsRegex: !0 },
                    { value: '/database/', valueIsRegex: !0 },
                    { value: '/engineered-systems/', valueIsRegex: !0 },
                    { value: '/enterprise-manager/', valueIsRegex: !0 },
                    { value: '/erp/', valueIsRegex: !0 },
                    { value: '/industries/communications/', valueIsRegex: !0 },
                    { value: '/industries/construction-engineering/', valueIsRegex: !0 },
                    { value: '/linux/', valueIsRegex: !0 },
                    { value: '/marketingcloud/', valueIsRegex: !0 },
                    { value: '/middleware/', valueIsRegex: !0 },
                    { value: '/midmarket/', valueIsRegex: !0 },
                    { value: '/midsize/', valueIsRegex: !0 },
                    { value: '/networking/', valueIsRegex: !0 },
                    { value: '^(\\/?[a-zA-Z0-9_-]*)/products/', valueIsRegex: !0 },
                    { value: '/security/', valueIsRegex: !0 },
                    { value: '/servers/', valueIsRegex: !0 },
                    { value: '/smb/', valueIsRegex: !0 },
                    { value: '/solutions/', valueIsRegex: !0 },
                    { value: '/storage/', valueIsRegex: !0 },
                    { value: '/systems/', valueIsRegex: !0 },
                    { value: '/tools/', valueIsRegex: !0 },
                    { value: '^/us/products/applications/ebusiness/', valueIsRegex: !0 },
                    {
                      value: '^/us/products/applications/master-data-management/',
                      valueIsRegex: !0,
                    },
                    { value: '^/us/products/applications/siebel/', valueIsRegex: !0 },
                    { value: '/virtualization/', valueIsRegex: !0 },
                    {
                      value: '^/(de|es|fr|it|nl|se|uk)/corporate/features/power/',
                      valueIsRegex: !0,
                    },
                    { value: '/it-infrastructure/', valueIsRegex: !0 },
                    { value: '^/jp/corporate/pricing.html', valueIsRegex: !0 },
                    { value: '/technetwork/', valueIsRegex: !0 },
                    { value: '^/tryit.html', valueIsRegex: !0 },
                    { value: '/area-of-interest/', valueIsRegex: !0 },
                    { value: '^/cn/videocenter/', valueIsRegex: !0 },
                    { value: '^(\\/?[a-zA-Z0-9_-]*)/mysql/', valueIsRegex: !0 },
                    { value: '/_qa/chatTest/compass_test.html', valueIsRegex: !0 },
                    { value: '/industries/food-beverage/', valueIsRegex: !0 },
                    { value: '/industries/hospitality/', valueIsRegex: !0 },
                    { value: '^/jp/contact-us/', valueIsRegex: !0 },
                    { value: '^/technical-resources/', valueIsRegex: !0 },
                    { value: '/internet-of-things/', valueIsRegex: !0 },
                    { value: '^/cn/netsuite/', valueIsRegex: !0 },
                    { value: '^/(middleeast-ar|sa-ar|ae-ar)/*', valueIsRegex: !0 },
                    { value: '^/cn/sun/', valueIsRegex: !0 },
                    { value: '^/sun/', valueIsRegex: !0 },
                    { value: '/application-development/', valueIsRegex: !0 },
                    { value: '^/business-analytics/analytics-for-cloud-hcm/$', valueIsRegex: !0 },
                    { value: '/business-analytics/$', valueIsRegex: !0 },
                    { value: '/business-analytics/analytics-cloud.html', valueIsRegex: !0 },
                    {
                      value: '/business-analytics/analytics-for-applications.html',
                      valueIsRegex: !0,
                    },
                    { value: '/business-analytics/analytics-server.html', valueIsRegex: !0 },
                    {
                      value: '/business-analytics/analytics-for-cloud-erp.html',
                      valueIsRegex: !0,
                    },
                    { value: '/business-analytics/products.html', valueIsRegex: !0 },
                    { value: '/business-analytics/applications-roadmap.html', valueIsRegex: !0 },
                    { value: '/business-analytics/solutions.html', valueIsRegex: !0 },
                    { value: '/business-analytics/resources.html', valueIsRegex: !0 },
                    { value: '/corporate/events/live/new-autonomous-services/', valueIsRegex: !0 },
                    { value: '/asiasouth/cloudday/', valueIsRegex: !0 },
                    { value: '/autonomous-database/', valueIsRegex: !0 },
                    { value: '/scm/', valueIsRegex: !0 },
                    { value: '/human-capital-management/', valueIsRegex: !0 },
                    { value: '/customers/', valueIsRegex: !0 },
                    { value: '/integration/', valueIsRegex: !0 },
                    { value: '/chatbots/', valueIsRegex: !0 },
                    { value: '^/events/customer-spotlight/', valueIsRegex: !0 },
                    { value: '^/events/virtual-summits/cloud-cx/', valueIsRegex: !0 },
                    { value: '/cx/', valueIsRegex: !0 },
                    {
                      value: '/asiasouth/events/virtual-summits/cloud-platform/',
                      valueIsRegex: !0,
                    },
                    { value: '/support/support-options.html', valueIsRegex: !0 },
                    { value: '/solaris/', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/corporate/contact/help.html', valueIsRegex: !0 },
                    { value: '^/ca-fr/', valueIsRegex: !0 },
                    { value: '^/il/', valueIsRegex: !0 },
                    { value: '^/partners/', valueIsRegex: !0 },
                    { value: '/industries/retail/', valueIsRegex: !0 },
                    { value: '^/emea/', valueIsRegex: !0 },
                    { value: '/java/', valueIsRegex: !0 },
                    { value: '/technetwork/java/', valueIsRegex: !0 },
                    {
                      value: '^/industries/construction-engineering/future-of-projects/',
                      valueIsRegex: !0,
                    },
                    { value: '/products/financing/', valueIsRegex: !0 },
                    { value: '/applications/erp/future-ready-upgrade/', valueIsRegex: !0 },
                    { value: '^/_qa/cloud/solution-hubs/$', valueIsRegex: !0 },
                    { value: '/_qa/cloud/solution-hubs/about.html', valueIsRegex: !0 },
                    { value: '/_qa/cloud/solution-hubs/tarun-demos.html' },
                    { value: '^/cloud/solution-hubs/$', valueIsRegex: !0 },
                    { value: '/cloud/solution-hubs/about.html' },
                    { value: '/cloud/solution-hubs/demos.html' },
                    { value: '/consulting/applications/openworld-2019.html', valueIsRegex: !0 },
                    { value: '/applications/customer-experience/data-cloud/', valueIsRegex: !0 },
                    { value: '/technetwork/security-advisory/', valueIsRegex: !0 },
                    { value: '/industries/hospitality/hospitality-connect/', valueIsRegex: !0 },
                    { value: '/cloud/sign-in.html', valueIsRegex: !0 },
                    {
                      value: '^/industries/food-beverage/food-beverage-connect/',
                      valueIsRegex: !0,
                    },
                    { value: '^/jp/industries/', valueIsRegex: !0 },
                    {
                      value: '/applications/human-capital-management/chat-test-wo.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/reach-the-right-people.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/protect-your-ad-spend.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/moat-measure-the-impact.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/products/data-management-platform/cross-device.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/products/data-management-platform/id-graph.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/products/data-management-platform/ecosystem.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/data-cloud/products/data-management-platform/$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/data-as-a-service/data-providers.html',
                      valueIsRegex: !0,
                    },
                    {
                      value:
                        '/opn/secure/get-enabled/partnercasts/product-channel/applications/index.html',
                      valueIsRegex: !0,
                    },
                    { value: '/partnernetwork/expertise/sell/erp/', valueIsRegex: !0 },
                    { value: '/data-cloud/products/audiences.html', valueIsRegex: !0 },
                    {
                      value: '/data-cloud/products/contextual-intelligence.html',
                      valueIsRegex: !0,
                    },
                    { value: '/developer-live/database/', valueIsRegex: !0 },
                    { value: '/search/', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'coreTags', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'chat', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'chat', value: 'window-loaded', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'proactive-chat', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>\n\t\twindow.sc_channel = \'SC Ocom\';\n    if(window.location.pathname.indexOf(\'technetwork\') != -1){\n    \twindow.sc_channel = "SC OTN";\n    }\n  \n  \tvar sc_product = _satellite.getVar(\'salesChatProductId\');\n    var x = document.getElementsByClassName("atgchat-link");\n    for (var i = 0; i < x.length; i++) {\n    name = "ochat";\n        arr = x[i].className.split(" ");\n        if (arr.indexOf(name) == -1) {\n            x[i].className += " " + name;\n        }\n   }\n   \n   var oChatScript = document.createElement(\'script\');\n\toChatScript.type = \'text/javascript\';\n\toChatScript.src = "//www.oracle.com/asset/web/js/oracle-chat.js";\n\toChatScript.id = "oracle_chat";\n\toChatScript.async = false;\n\toChatScript.setAttribute("data-path", "/asset/web/json/chat-translation-data.json");\n\toChatScript.setAttribute("data-scchannel", window.sc_channel);\n    if(window.location.pathname.indexOf(\'corporate/events/live/new-autonomous-services/\') != -1 || window.location.pathname.indexOf(\'/support/support-options.html\') != -1) {\n      oChatScript.setAttribute("data-nosidewall", "");\n    }\n\tdocument.body.appendChild(oChatScript);\n</script>\n<!-- <script data-reqjq src="//www.oracle.com/asset/web/js/oracle-chat.js" onload="this.setAttribute(\'data-scchannel\',window.sc_channel)" id="oracle_chat" data-path="/asset/web/json/chat-translation-data.json"></script> -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL2fc89ab2faa04b75b80b36424fe69db7',
            name: 'DoubleClick Pixels - Your Tomorrow Today 2018',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/tomorrow/', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/\\btechnetwork/', valueIsRegex: !0 },
                    { value: '/\\bpartners/', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = [];
                    return (
                      (t['/corporate/tomorrow/payscout.html'] = { cat: 'yttst0' }),
                      (t['/corporate/tomorrow/index.html'] = { cat: 'yttho0' }),
                      'object' == typeof t[location.pathname] &&
                        ((window.cat = t[location.pathname].cat), !0)
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC04006c3770e548d990959b9dfa4ad6d9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLfb45a7ae1da24cf4ba2346205b6183be',
            name: 'Eloqua IaaS/PaaS Campaign Google Conversion Tag-153005',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'lp=68487', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC3936d6b6376649f2bf0539cf475e4a45-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLd2857acebed645e4900a99b9d6203d0b',
            name: 'Maxymiser Core Script - Eloqua',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=55466', valueIsRegex: !0 },
                    { value: 'lp=58625', valueIsRegex: !0 },
                    { value: 'lp=59961', valueIsRegex: !0 },
                    { value: 'lp=56007', valueIsRegex: !0 },
                    { value: 'lp=56008', valueIsRegex: !0 },
                    { value: 'lp=54859', valueIsRegex: !0 },
                    { value: 'lp=54858', valueIsRegex: !0 },
                    { value: 'lp=55467', valueIsRegex: !0 },
                    { value: 'lp=66717', valueIsRegex: !0 },
                    { value: 'lp=66798', valueIsRegex: !0 },
                    { value: 'lp=41254', valueIsRegex: !0 },
                    { value: 'lp=63344', valueIsRegex: !0 },
                    { value: 'lp=69090', valueIsRegex: !0 },
                    { value: 'lp=41253', valueIsRegex: !0 },
                    { value: 'lp=63343', valueIsRegex: !0 },
                    { value: 'lp=70980', valueIsRegex: !0 },
                    { value: 'lp=71091', valueIsRegex: !0 },
                    { value: 'lp=71092', valueIsRegex: !0 },
                    { value: 'lp=54440', valueIsRegex: !0 },
                    { value: 'lp=71477', valueIsRegex: !0 },
                    { value: 'lp=72461', valueIsRegex: !0 },
                    { value: 'lp=72589', valueIsRegex: !0 },
                    { value: 'lp=73252', valueIsRegex: !0 },
                    { value: 'lp=76346', valueIsRegex: !0 },
                    { value: 'lp=49044', valueIsRegex: !0 },
                    { value: 'lp=54858', valueIsRegex: !0 },
                    { value: 'lp=54859', valueIsRegex: !0 },
                    { value: 'lp=54878', valueIsRegex: !0 },
                    { value: 'lp=54879', valueIsRegex: !0 },
                    { value: 'lp=54881', valueIsRegex: !0 },
                    { value: 'lp=54882', valueIsRegex: !0 },
                    { value: 'lp=54883', valueIsRegex: !0 },
                    { value: 'lp=54884', valueIsRegex: !0 },
                    { value: 'lp=67877', valueIsRegex: !0 },
                    { value: 'lp=67878', valueIsRegex: !0 },
                    { value: 'lp=89444', valueIsRegex: !0 },
                    { value: 'lp=88830', valueIsRegex: !0 },
                    { value: 'lp=94604', valueIsRegex: !0 },
                    { value: 'lp=94605', valueIsRegex: !0 },
                    { value: 'lp=94606', valueIsRegex: !0 },
                    { value: 'lp=83767', valueIsRegex: !0 },
                    { value: 'lp=89231', valueIsRegex: !0 },
                    { value: 'lp=101550', valueIsRegex: !0 },
                    { value: 'lp=101912', valueIsRegex: !0 },
                    { value: 'lp=102000', valueIsRegex: !0 },
                    { value: 'lp=101976', valueIsRegex: !0 },
                    { value: 'lp=101919', valueIsRegex: !0 },
                    { value: 'lp=101923', valueIsRegex: !0 },
                    { value: 'lp=102053', valueIsRegex: !0 },
                    { value: 'lp=101995', valueIsRegex: !0 },
                    { value: 'lp=101989', valueIsRegex: !0 },
                    { value: 'lp=101913', valueIsRegex: !0 },
                    { value: 'lp=102001', valueIsRegex: !0 },
                    { value: 'lp=101992', valueIsRegex: !0 },
                    { value: 'lp=101918', valueIsRegex: !0 },
                    { value: 'lp=101922', valueIsRegex: !0 },
                    { value: 'lp=102054', valueIsRegex: !0 },
                    { value: 'lp=101996', valueIsRegex: !0 },
                    { value: 'lp=101977', valueIsRegex: !0 },
                    { value: 'lp=97970', valueIsRegex: !0 },
                    { value: 'lp=97967', valueIsRegex: !0 },
                    { value: 'lp=97969', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
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
                    '<script>window.dataLayerObject && ( window.dataLayerObject.maxymiserDeployed = true);</script>\n<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLff2b2856c2fb47cd8de11ac20ec1d0b3',
            name: 'Bluekai Core Tag Conditional Deployment',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 52 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                    { value: 'auto.oracle.com', valueIsRegex: !0 },
                    { value: 'www-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                    { value: 'community-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                    { value: 'www-dev1.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return (-1 == e.truste_consent.indexOf(0) &&
                      -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt
                      ? ((window.dataLayerObject.user.campaigns.status =
                          !0 === window.dataLayerObject.privacy.dnt ? 'NoTrack' : 'NoConsent'),
                        !1)
                      : -1 == document.referrer.indexOf('explore.oracle.com') &&
                          1 != _satellite.getVar('apacRegion') &&
                          1 != _satellite.getVar('countryExclusion');
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'coreTags', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'bluekai', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "// Declare Bluekai variables.\nwindow.bluekai = {};\nwindow.bluekai.loaded = \"NotSet\";\nvar consent_level = _satellite.getVar('trusteConsent');\n\nvar isStage = (  location.host.indexOf('-stage') != -1    ||\n\t\t\t\tlocation.host.indexOf('-content') != -1  ||\n\t\t\t\tlocation.host.indexOf('localhost') != -1 ||\n\t\t\t\tlocation.host.indexOf('.us.oracle.com') != -1 ||\n\t\t\t\tlocation.host.indexOf('127.0.0.1') != -1 ||\t\t\t\t\n\t\t\t\tlocation.host.indexOf('-dev') != -1 ||\n\t\t\t\tlocation.host.indexOf('www-sites') != -1\n\t\t\t )\n\nvar ora_bk_version = 'bkIn:1.0:v1.3:SentTo' + (isStage) ? 26595 : 25867;  \nwindow.bk_async = function() {\n  bkTagID = (isStage) ? 26595 : 25867;\n  bk_addPageCtx(\"contTop\", (typeof(contTop) !== 'undefined') ? contTop : '');\n  bk_addPageCtx(\"contLang\", (typeof(language_value) !== 'undefined') ? language_value : '');\n  bk_addPageCtx(\"prodInt\", (typeof(prodInt) !== 'undefined') ? prodInt : '');\n  bk_addPageCtx(\"pgname\", (typeof(bk_pgname) !== 'undefined') ? bk_pgname : '');\n  bk_allow_multiple_calls = true;\n  BKTAG.doTag(bkTagID, 1);\n\tsetTimeout(function(){\n      (function() {\n        // Check cached data is valid to use\n        /*if(validateBlukeCacheData()){\n          var cachedData = window.localStorage.getItem('BlueKaiCampaigns');\n          cachedData = JSON.parse(cachedData);\n          window.dataLayerObject.user.campaigns = cachedData.campaigns;\n          window.bluekai = cachedData.bluekai;\n        }else {*/\n        if (window.dataLayerObject.maxymiserDeployed != undefined && window.dataLayerObject.maxymiserDeployed == true) {\n          callBluekaiScript();\n        }\n        //}\n      }());\n    },1000); // load bluekai json script.\n};\n\nvar bk_scripts = document.getElementsByTagName('script')[0];\nvar bk_s = document.createElement('script');\nbk_s.async = true;\nbk_s.src = \"//tags.bkrtx.com/js/bk-coretag.js\";\nbk_scripts.parentNode.insertBefore(bk_s, bk_scripts);\n\n\n/* Function to call Bluekai 46606 json return */\nfunction callBluekaiScript() {\n  if(window.jQuery) {\n      // Create request object.\n\t\t\tvar xhr;\n\n\t\t\tif(xhr && xhr.readyState != 4 && xhr.readyState != 0){\n\t\t\t  xhr.abort();\n\t\t\t}\n\t\t\t// Ajax Request to get the Bluekai data.\n\t\t\txhr = jQuery.ajax({\n\t\t\t  url: \"//tags.bluekai.com/site/46606?ret=js\",\n\t\t\t  type: \"GET\" ,\n\t\t\t  dataType:  \"script\",\n\t\t\t  cache: true,\n\t\t\t  crossDomain: true,\n\t\t\t  timeout: 4000,\n\t\t\t  success: function(a) {\n\t\t\t\tif (window.bk_results) {\n\t\t\t\t\twindow.dataLayerObject.user.campaigns.status = \"loaded\";\n\t\t\t\t\tbkCampaigns(); // Call the function to read data for Campaigns - 280341/280343/280348/280349\n\t\t\t\t\tdocument.cookie = \"ORA_WWW_ABMDATA=\"+JSON.stringify(window.bluekai) + \"; path=/\"; // Store data for Campaigns to Cookie - 280341/280343/280348/280349\n\t\t\t\t\tmaptoDataLayer(); // Call the function to map json data to Datalayer object.\n                    //cacheBlueKaiData(); // Store bluekai data on browser local storage and set expire date ro 24 Hours \n\t\t\t\t}        \n\t\t\t  },\n\t\t\t  error: function(e) {\n\t\t\t\t  window.bluekai.loaded = \"NoResponse\"; // Failed to load Bluekai data.\n\t\t\t\t  window.dataLayerObject.user.campaigns.status = \"NoResponse\"; // If the bluekai API call fails, set Status to 'NoResponse'\n                  //cacheBlueKaiData(); // Store bluekai data on browser local storage and set expire date ro 24 Hours\n\t\t\t  }\n\t\t\t});  \n\t} else {\n\t    // If jQuery is not found, use plain javascript to load bluekai json.\n\t\t\tvar s = document.createElement('script'); \n\t\t\ts.type = 'text/javascript'; \n\t\t\ts.async = true;\n\t\t\ts.src = \"//tags.bluekai.com/site/46606?ret=js\";\n\t\t\ts.onload = function() {\n        if (window.bk_results) {\n\t\t\t      window.dataLayerObject.user.campaigns.status = \"loaded\";\n\t\t\t      bkCampaigns(); // Call the function to read data for Campaigns - 280341/280343/280348/280349\n            document.cookie = \"ORA_WWW_ABMDATA=\" + JSON.stringify(window.bluekai) + \"; path=/\"; // Store data for Campaigns to Cookie - 280341/280343/280348/280349\n            maptoDataLayer(); // Call the function to map json data to Datalayer object.\n        } else {\n            window.bluekai.loaded = \"NoResponse\"; // Failed to load Bluekai data.\n            window.dataLayerObject.user.campaigns.status = \"NoResponse\"; // If the bluekai API call fails, set Status to 'NoResponse' \n        }  \n      };\n      document.getElementsByTagName('script')[0].appendChild(s);\n      //cacheBlueKaiData(); // Store bluekai data on browser local storage and set expire date ro 24 Hours\n  }\n}  \n\n/* Function to read the bluekai data to window.bluekai object. */\nfunction bkCampaigns() {\n    // Set the values to Bluekai object.\n    window.bluekai.loaded = (window.bk_results.campaigns.length > 0) ? \"loaded\" : window.bluekai.loaded;\n    window.bluekai.data = [];\n    window.bluekai.bkId = 'NoValue';\n\n    // Loop through the list of campaigns to retrieve the categories.\n    for (var x in window.bk_results.campaigns) {\n       var campaignId = window.bk_results.campaigns[x].campaign;\n       if (campaignId == '280343' || campaignId == '280341' || campaignId == '280349' || campaignId == '280348') {\n            var data_obj = {};\n            data_obj['campaignId'] = campaignId;\n            data_obj['categories'] = mapCategories(window.bk_results.campaigns[x]);\n            window.bluekai.data.push(data_obj);\n       }\n       // Set bk value to bkId.\n       if(window.bluekai.bkId == 'NoValue' && window.bk_results.campaigns[x].bk) {\n         window.bluekai.bkId = window.bk_results.campaigns[x].bk;\n       }\n    }  // End of for loop.\n}\n\n/* Function to map Bluekai json return data to DataLayer object */\nfunction maptoDataLayer() {\n\t  //assign bk_result to dataLayerObject\n  \tif(window.bk_results && window.dataLayerObject && window.dataLayerObject.user.campaigns.status == \"loaded\") {\n      if(window.bk_results.campaigns.length > 0) {\n        window.dataLayerObject.user.campaigns.data = window.bk_results.campaigns;\n      } else {\n      \twindow.dataLayerObject.user.campaigns.data = [];\n      }\n  \t}\n}\n\n/* Function to map the categories for a campaign */\nfunction mapCategories(campaign) {\n\tvar campaignSet = [];\n\tif(campaign.categories != null) {\n\t\tfor (var j = campaign.categories.length; j--;) {\n\t\t\tcampaignSet.push(campaign.categories[j].categoryID);\n    }\n  } else {\n\t\tcampaignSet = [\"NoValue\"];\n\t}\n\treturn campaignSet;\n}\n\n/* Function to cache bluekai data */\n/*function cacheBlueKaiData() {\n   var expireDate = new Date().getTime() + (24 * 60 * 60 * 1000), // 24Hours\n   data = {\n     'campaigns': window.dataLayerObject.user.campaigns,\n     't': expireDate,\n     'privacy': {\n         'consentDecision': window.dataLayerObject.privacy.consentDecision,\n         'dnt': window.dataLayerObject.privacy.dnt\n      },\n     'bluekai': window.bluekai  \n  };\n  window.localStorage.setItem('BlueKaiCampaigns',JSON.stringify(data));\n}*/\n\n// Function to validate bluekai Cache object\n/*function validateBlukeCacheData() {\n  var status=false;\n  // Check cached data exists\n  if(window.localStorage.getItem('BlueKaiCampaigns')){\n      var cachedData = window.localStorage.getItem('BlueKaiCampaigns');\n      cachedData = JSON.parse(cachedData);\n      //check data expired?\n      if(new Date().getTime() < cachedData.t){\n        //Check for truste change\n        if(cachedData.privacy.dnt === window.dataLayerObject.privacy.dnt && ( JSON.stringify(window.dataLayerObject.privacy.consentDecision) == JSON.stringify(cachedData.privacy.consentDecision)) ){\n           status = true;\n         }\n      }\n  }\n  return status;\n}*/\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL923609fbbfaf4608a224978ea3127c7f',
            name: 'Eloqua Conversion Pixels-67354 - 154756',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'lp=67354', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC5480c57c7ba54228b2f9c88b16ad773b-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL7840db06c337450db58c79599263102d',
            name: 'Eloqua Conversion Pixels-70897-157445',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'lp=70897', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC462c7bcfcc8d4e3f968cd8ee60297ccd-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLfff31fe314984ba9a27cb91951b59a03',
            name: 'Rimini Street schema.org JSON',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '^/rimini-street/$', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="application/ld+json">\n{\n  "@context": "http://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [\n    { \n      "@type": "ListItem", \n      "position": "1", \n      "item": { \n        "@id": "https://www.oracle.com/support/", \n        "name": "Support" \n      } \n    },\n    { \n      "@type": "ListItem", \n      "position": "2", \n      "item": { \n        "@id": "https://www.oracle.com/rimini-street/", \n        "name": "Rimini Street" \n      } \n    }\n  ]\n}\n</script>\n<script type="application/ld+json">\n{\n  "@context": "http://schema.org",\n  "@type": "NewsArticle",\n  "headline": "Court Orders Rimini Street to Comply with Permanent Injunction Prohibiting Further Infringement",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://www.oracle.com/assets/ct13-autonomous-db-self-driving-5037183.png"\n  },\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://www.oracle.com/corporate/pressrelease/rimini-street-110718.html"\n  },\n  "description": "On Monday, a federal appeals court rejected Rimini Street\'s motion to stay and effectively delay a permanent injunction issued by the Federal District Court in Nevada.",\n  "datePublished": "2018-11-07",\n  "dateModified": "2018-11-07",\n  "author": {\n    "@type": "Organization",\n    "name": "Oracle"\n  },\n  "publisher": {\n    "@type": "Organization",\n    "name": "Oracle",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://www.oracle.com/webfolder/s/brand/assets/i/specimens/identity/logo/badge-color-print.gif"\n    }\n  },\n  "articleBody": "On Monday, a federal appeals court rejected Rimini Street\'s motion to stay and effectively delay a permanent injunction issued by the Federal District Court in Nevada. That injunction prohibits Rimini Street from engaging in specific unlawful practices in connection with its core business practices as found in Oracle\'s 2015 copyright infringement trial against Rimini Street and its founder, Seth Ravin. The trial court had determined earlier that the more than $100 million that Rimini Street paid to Oracle in damages following trial was inadequate to fully compensate Oracle for Rimini Street\'s copyright infringement, citing \\"Rimini Street\'s conscious disregard for Oracle\'s software copyrights\\" and the fact that Rimini Street\'s business model \\"was built entirely on its infringement of Oracle\'s copyrighted software.\\" The Court ruled that Rimini Street can only provide support for Oracle\'s PeopleSoft, J.D. Edwards, Siebel, and Database software subject to certain court-mandated restrictions, as set forth in the injunction. While Rimini Street made public statements suggesting that it can comply with the injunction without changing its business model, it told the federal appeals court a different story in court filings. Rimini Street instead argued that the \\"injunction goes far beyond the changes that Rimini Street [already] made in response\\" to the Nevada court\'s rulings, and would therefore harm its business. Rimini Street must now comply with all the terms of the injunction while its latest appeal is pending.\'We are grateful that the Ninth Circuit Court of Appeals denied Rimini Street\'s latest attempt to delay justice. The federal courts in this country have appropriately recognized that the only way to stop serial infringers such as Rimini Street is to subject them to detailed, court-ordered prohibitions against unlawful practices and subject them to contempt of court penalties for any breach. Oracle will continue to be unrelenting in its mission to stop the infringement of its intellectual property rights,\' said Dorian Daley, Oracle\'s Executive Vice President and General Counsel."\n}\n</script>\n<script type="application/ld+json">\n{\n  "@context": "http://schema.org",\n  "@type": "NewsArticle",\n  "headline": "Federal Court Rules Oracle Is Entitled to a Permanent Injunction Against Rimini Street, Awards Attorneys\' Fees",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://www.oracle.com/assets/ct13-autonomous-db-self-securing-5037185.png"\n  },\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://www.oracle.com/corporate/pressrelease/rimini-street-081418.html"\n  },\n  "description": "Today, for the second time, a Federal Court in Nevada granted Oracle\'s motion for a permanent injunction against Rimini Street for years of infringement of Oracle\'s copyrights.",\n  "datePublished": "2018-08-14",\n  "dateModified": "2018-08-14",\n  "author": {\n    "@type": "Organization",\n    "name": "Oracle"\n  },\n  "publisher": {\n    "@type": "Organization",\n    "name": "Oracle",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://www.oracle.com/webfolder/s/brand/assets/i/specimens/identity/logo/badge-color-print.gif" \n    }\n  },\n  "articlebody": "Today, for the second time, a Federal Court in Nevada granted Oracle\'s motion for a permanent injunction against Rimini Street for years of infringement of Oracle\'s copyrights. In an opinion notable for its strong language condemning Rimini Street\'s actions, the Court made clear that since its inception, Rimini\'s business \\"was built entirely on its infringement of Oracle\'s copyrighted software.\\" The Court also highlighted Rimini\'s \\"conscious disregard\\" for Oracle\'s copyrights and Rimini\'s \\"significant litigation misconduct\\" in granting Oracle\'s motion for its attorneys\' fees to be paid. \\"As the Court\'s Order today makes clear, Rimini Street\'s business has been built entirely on unlawful conduct, and Rimini\'s executives have repeatedly lied to cover up their company\'s illegal acts. Rimini, which admits that it is the subject of an ongoing federal criminal investigation, has proven itself to be disreputable, and it seems very clear that it will not stop its unlawful conduct until a Court orders it to stop. Oracle is grateful that today the Federal Court in Nevada did just that,\\" said Dorian Daley, Oracle\'s Executive Vice President and General Counsel. The Court noted that it was Rimini\'s brazen misconduct that enabled it to \'rapidly build\' its infringing business, while at the same time irreparably damaging Oracle because Rimini\'s very business model \\"eroded the bonds and trust that Oracle has with its customers.\\" It also stressed that for over five years of litigation, \\"literally up until trial\\", Rimini Street denied the allegations of infringement. At trial, however, Rimini CEO Seth Ravin, who was also a defendant, changed his story and admitted for the first time that Rimini Street did in fact engage in all the infringing activities that Oracle had identified. Finally, the Court declared that over $28M in attorneys\' fees should be awarded to Oracle because of Rimini Street\'s significant litigation misconduct in this action. Rimini comments to the market that this award would have to be returned to Rimini have proven to be false and misleading, like so many of its actions and assurances to customers and others."\n}\n</script>\n<script type="application/ld+json">\n{\n  "@context": "http://schema.org",\n  "@type": "NewsArticle",\n  "headline": "Oracle Will Seek Affirmation of Cost Award in the United States Supreme Court",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://www.oracle.com/assets/ct13-autonomous-db-self-repairing-5037184.png"\n  },\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://www.oracle.com/corporate/pressrelease/oracle-statement-092718.html"\n  },\n  "description": "Today\'s United States Supreme Court grant of certiorari in the Rimini case is limited to a narrow issue regarding an award of more than $12 million in litigation costs that Rimini was ordered to pay to Oracle.",\n  "datePublished": "2018-09-27",\n  "dateModified": "2018-09-27",\n  "author": {\n    "@type": "Organization",\n    "name": "Oracle"\n  },\n  "publisher": {\n    "@type": "Organization",\n    "name": "Oracle",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://www.oracle.com/webfolder/s/brand/assets/i/specimens/identity/logo/badge-color-print.gif"\n    }\n  }\n  ,\n  "articlebody": "Today\'s United States Supreme Court grant of certiorari in the Rimini Street case is limited to a narrow issue regarding an award of more than $12 million in litigation costs that Rimini Street was ordered to pay to Oracle. This award came after a jury found that Rimini Street infringed 93 Oracle copyrights, and this costs appeal has zero impact on the resolved issue that Rimini Street infringed 93 copyrights and the jury award of compensatory damages. In 2016, the trial court found that Oracle was entitled to an award of attorneys\' fees and costs \\"because of Rimini\'s repeated instances of copyright infringement and its significant litigation misconduct.\\" While the Supreme Court will take up this narrow costs issue as a matter of law, the underlying conduct is not in question. \\"We look forward to addressing this costs issue in our nation\'s highest court, and we believe that the Court should reject the attempt by Rimini Street-a dishonest, serial infringer-to avoid fully compensating Oracle for Rimini\'s misconduct,\\" said Dorian Daley, Oracle\'s Executive Vice President and General Counsel."\n}\n</script>\n<script type="application/ld+json">\n{\n  "@context": "http://schema.org",\n  "@type": "VideoObject",\n  "name": "Why Cybersecurity Matters and Why You Should Never Compromise",\n  "description": "Global cybercrime headlines reflect the new normal. Hear from Oracle\'s Juan Jones, SVP, Global Support Renewal Sales, share his insights on the risk of third-party and self-maintenance support models while identifying their limitations.",\n  "thumbnailUrl": "https://oracle-a.akamaihd.net/aug2014/1460825906/201804/1920/1460825906_5778650349001_5778642544001-vs.jpg",\n  "uploadDate": "2014-06-17",\n  "duration": "PT7M50S",\n  "contentUrl": "https://video.oracle.com/detail/video/5778642544001",\n  "embedUrl": "https://video.oracle.com/detail/video/5778642544001"\n}\n</script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL6bede53a88e34538a4245b920cb50aa2',
            name: 'Eloqua Modern Customer Experience Google Conversion Tag-154161',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=69867', valueIsRegex: !0 },
                    { value: 'lp=71223', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC1471b35cb0e54956a1272beeda2701f5-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb08f6cd84c2f41fb92efa6b1972b666f',
            name: 'OCOM Source Tracking Script',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'www-dev1.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/product-navigator/', valueIsRegex: !0 },
                    { value: '^/index.html', valueIsRegex: !0 },
                    { value: '/customers/', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      '/index.html' !== window.location.pathname || 'ProdNav-Index' === mpulseDim
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC85ca8dfd2ade4f87bd5e23e23e2764a6-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLcbcf8968c67d49bea186ef29f053e912',
            name: "Eloqua Redirect Inactive LP's",
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 0 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="text/javascript" src="https://www.oracle.com/oce/dc/assets/CONT0D836E5C67BD4255A56B4E83BA603A3B/native/inactiveredirect.js"></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLdda290fd3bef4a84800fea7799268c8b',
            name: 'Eloqua-JP Conversion Pixels AW-802202278 - gH9kCOyZx-EBEKbFwv4C',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=100530', valueIsRegex: !0 },
                    { value: 'lp=101927', valueIsRegex: !0 },
                    { value: 'lp=101885', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC52ca4973415d4e48943b2c7e566cd2bc-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLfed147bdea0a440aa623ecead5689731',
            name: 'mPulse Script',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www-qa-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'www-qa.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '^/customers/', valueIsRegex: !0 },
                    { value: '^/product-navigator/', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>\n(function(){\n  var ids = {"www-qa-stage.oracle.com": "ADT9Q-6GNFN-89AUC-5CRRD-EG33M", "www-qa.oracle.com": "PM2PL-2CBAC-7NNE3-S3PVS-CKLVU"};\n  var id = ids[window.location.host];\n  // Boomerang Loader Snippet version 10\n  if (window.BOOMR && (window.BOOMR.version || window.BOOMR.snippetExecuted)) {\n    return;\n  }  window.BOOMR = window.BOOMR || {};\n  window.BOOMR.snippetExecuted = true;  var dom, doc, where, iframe = document.createElement("iframe"), win = window;  function boomerangSaveLoadTime(e) {\n    win.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();\n  }  if (win.addEventListener) {\n    win.addEventListener("load", boomerangSaveLoadTime, false);\n  } else if (win.attachEvent) {\n    win.attachEvent("onload", boomerangSaveLoadTime);\n  }  iframe.src = "javascript:void(0)";\n  iframe.title = "";\n  iframe.role = "presentation";\n  (iframe.frameElement || iframe).style.cssText = "width:0;height:0;border:0;display:none;";\n  where = document.getElementsByTagName("script")[0];\n  where.parentNode.insertBefore(iframe, where);  try {\n    doc = iframe.contentWindow.document;\n  } catch (e) {\n    dom = document.domain;\n    iframe.src = "javascript:var d=document.open();d.domain=\'" + dom + "\';void(0);";\n    doc = iframe.contentWindow.document;\n  }  doc.open()._l = function() {\n    var js = this.createElement("script");\n    if (dom) {\n      this.domain = dom;\n    }\n  js.id = "boomr-if-as";\n    js.src = "https://s.go-mpulse.net/boomerang/" + id;\n    BOOMR_lstart = new Date().getTime();\n    this.body.appendChild(js);\n  };\n  doc.write(\'<bo\' + \'dy onload="document._l();">\');\n  doc.close();\n})();\n</script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL1b5492b18a7e4a22816a1965996200e5',
            name: 'Chat Script copy - Perf testing',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/corporate/contact/', valueIsRegex: !0 },
                    { value: '/consulting/soar.html', valueIsRegex: !0 },
                    { value: '^/us/corporate/events/soar/index.html', valueIsRegex: !0 },
                    { value: '/applications/', valueIsRegex: !0 },
                    { value: '/artificial-intelligence/', valueIsRegex: !0 },
                    { value: '/autonomouscloud/', valueIsRegex: !0 },
                    { value: '/big-data/', valueIsRegex: !0 },
                    { value: '/cloud/', valueIsRegex: !0 },
                    { value: '/content-storage-management/', valueIsRegex: !0 },
                    { value: '/corporate/pricing/', valueIsRegex: !0 },
                    { value: '/database/', valueIsRegex: !0 },
                    { value: '/engineered-systems/', valueIsRegex: !0 },
                    { value: '/enterprise-manager/', valueIsRegex: !0 },
                    { value: '/erp/', valueIsRegex: !0 },
                    { value: '/industries/communications/', valueIsRegex: !0 },
                    { value: '/industries/construction-engineering/', valueIsRegex: !0 },
                    { value: '/linux/', valueIsRegex: !0 },
                    { value: '/marketingcloud/', valueIsRegex: !0 },
                    { value: '/middleware/', valueIsRegex: !0 },
                    { value: '/midmarket/', valueIsRegex: !0 },
                    { value: '/midsize/', valueIsRegex: !0 },
                    { value: '/networking/', valueIsRegex: !0 },
                    { value: '^(\\/?[a-zA-Z0-9_-]*)/products/', valueIsRegex: !0 },
                    { value: '/security/', valueIsRegex: !0 },
                    { value: '/servers/', valueIsRegex: !0 },
                    { value: '/smb/', valueIsRegex: !0 },
                    { value: '/solaris/', valueIsRegex: !0 },
                    { value: '/solutions/', valueIsRegex: !0 },
                    { value: '/storage/', valueIsRegex: !0 },
                    { value: '/systems/', valueIsRegex: !0 },
                    { value: '/tools/', valueIsRegex: !0 },
                    { value: '^/us/products/applications/ebusiness/', valueIsRegex: !0 },
                    {
                      value: '^/us/products/applications/master-data-management/',
                      valueIsRegex: !0,
                    },
                    { value: '^/us/products/applications/siebel/', valueIsRegex: !0 },
                    { value: '/virtualization/', valueIsRegex: !0 },
                    {
                      value: '^/(de|es|fr|it|nl|se|uk)/corporate/features/power/',
                      valueIsRegex: !0,
                    },
                    { value: '/it-infrastructure/', valueIsRegex: !0 },
                    { value: '^/jp/corporate/pricing.html', valueIsRegex: !0 },
                    { value: '/technetwork/', valueIsRegex: !0 },
                    { value: '^/tryit.html', valueIsRegex: !0 },
                    { value: '/area-of-interest/', valueIsRegex: !0 },
                    { value: '^/cn/videocenter/', valueIsRegex: !0 },
                    { value: '^(\\/?[a-zA-Z0-9_-]*)/mysql/', valueIsRegex: !0 },
                    { value: '/_qa/chatTest/compass_test.html', valueIsRegex: !0 },
                    { value: '/industries/food-beverage/', valueIsRegex: !0 },
                    { value: '/industries/hospitality/', valueIsRegex: !0 },
                    { value: '^/jp/contact-us/', valueIsRegex: !0 },
                    { value: '^/technical-resources/', valueIsRegex: !0 },
                    { value: '/internet-of-things/', valueIsRegex: !0 },
                    { value: '^/cn/netsuite/', valueIsRegex: !0 },
                    { value: '^/(middleeast-ar|sa-ar|ae-ar)/*', valueIsRegex: !0 },
                    { value: '^/cn/sun/', valueIsRegex: !0 },
                    { value: '^/sun/', valueIsRegex: !0 },
                    { value: '/application-development/', valueIsRegex: !0 },
                    { value: '^/business-analytics/analytics-for-cloud-hcm/$', valueIsRegex: !0 },
                    { value: '/business-analytics/$', valueIsRegex: !0 },
                    { value: '/business-analytics/analytics-cloud.html', valueIsRegex: !0 },
                    {
                      value: '/business-analytics/analytics-for-applications.html',
                      valueIsRegex: !0,
                    },
                    { value: '/business-analytics/analytics-server.html', valueIsRegex: !0 },
                    {
                      value: '/business-analytics/analytics-for-cloud-erp.html',
                      valueIsRegex: !0,
                    },
                    { value: '/business-analytics/products.html', valueIsRegex: !0 },
                    { value: '/business-analytics/applications-roadmap.html', valueIsRegex: !0 },
                    { value: '/business-analytics/solutions.html', valueIsRegex: !0 },
                    { value: '/business-analytics/resources.html', valueIsRegex: !0 },
                    { value: '/corporate/events/live/new-autonomous-services/', valueIsRegex: !0 },
                    { value: '/asiasouth/cloudday/', valueIsRegex: !0 },
                    { value: '/autonomous-database/', valueIsRegex: !0 },
                    { value: '/scm/', valueIsRegex: !0 },
                    { value: '/human-capital-management/', valueIsRegex: !0 },
                    { value: '/customers/', valueIsRegex: !0 },
                    { value: '/integration/', valueIsRegex: !0 },
                    { value: '/chatbots/', valueIsRegex: !0 },
                    { value: '^/events/customer-spotlight/', valueIsRegex: !0 },
                    { value: '^/events/virtual-summits/cloud-cx/', valueIsRegex: !0 },
                    { value: '/cx/', valueIsRegex: !0 },
                    {
                      value: '/asiasouth/events/virtual-summits/cloud-platform/',
                      valueIsRegex: !0,
                    },
                    { value: '/support/support-options.html', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/corporate/contact/help.html', valueIsRegex: !0 },
                    { value: '^/ca-fr/', valueIsRegex: !0 },
                    { value: '^/il/', valueIsRegex: !0 },
                    { value: '^/partners/', valueIsRegex: !0 },
                    { value: '/industries/retail/', valueIsRegex: !0 },
                    { value: '^/emea/', valueIsRegex: !0 },
                    { value: '/java/', valueIsRegex: !0 },
                    { value: '/technetwork/java/', valueIsRegex: !0 },
                    {
                      value: '^/industries/construction-engineering/future-of-projects/',
                      valueIsRegex: !0,
                    },
                    { value: '/products/financing/', valueIsRegex: !0 },
                    { value: '/applications/erp/future-ready-upgrade/', valueIsRegex: !0 },
                    { value: '^/_qa/cloud/solution-hubs/$', valueIsRegex: !0 },
                    { value: '/_qa/cloud/solution-hubs/about.html', valueIsRegex: !0 },
                    { value: '/_qa/cloud/solution-hubs/tarun-demos.html' },
                    { value: '^/cloud/solution-hubs/$', valueIsRegex: !0 },
                    { value: '/cloud/solution-hubs/about.html' },
                    { value: '/cloud/solution-hubs/demos.html' },
                    { value: '/consulting/applications/openworld-2019.html', valueIsRegex: !0 },
                    { value: '/applications/customer-experience/data-cloud/', valueIsRegex: !0 },
                    { value: '/technetwork/security-advisory/', valueIsRegex: !0 },
                    { value: '/industries/hospitality/hospitality-connect/', valueIsRegex: !0 },
                    { value: '/cloud/sign-in.html', valueIsRegex: !0 },
                    {
                      value: '^/industries/food-beverage/food-beverage-connect/',
                      valueIsRegex: !0,
                    },
                    { value: '^/jp/industries/', valueIsRegex: !0 },
                    {
                      value: '/applications/human-capital-management/chat-test-wo.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/reach-the-right-people.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/protect-your-ad-spend.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/moat-measure-the-impact.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/products/data-management-platform/cross-device.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/products/data-management-platform/id-graph.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/products/data-management-platform/ecosystem.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/data-cloud/products/data-management-platform/$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/data-as-a-service/data-providers.html',
                      valueIsRegex: !0,
                    },
                    {
                      value:
                        '/opn/secure/get-enabled/partnercasts/product-channel/applications/index.html',
                      valueIsRegex: !0,
                    },
                    { value: '/partnernetwork/expertise/sell/erp/', valueIsRegex: !0 },
                    { value: '/data-cloud/products/audiences.html', valueIsRegex: !0 },
                    {
                      value: '/data-cloud/products/contextual-intelligence.html',
                      valueIsRegex: !0,
                    },
                    { value: '/developer-live/database/', valueIsRegex: !0 },
                    { value: '/search/', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'chat', value: 'window-loaded', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC605af3dd704c4e2da5cffeeb06bf254d-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLbd87c6df493c456badd44ac5a85017bd',
            name: 'Storyhub IE Redirect',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www-dev1.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '^/customers/', valueIsRegex: !0 }] },
              },
              { modulePath: 'core/src/lib/conditions/browser.js', settings: { browsers: ['IE'] } },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'ie-redirect', value: 'true', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source: 'window.location.replace("https://www.oracle.com/search/customers/");',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL3d485d0aa64e4f579374f151b99aaa7d',
            name: 'Infinity - OCOM Production Tag',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 49 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                    { value: 'developer.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                    { value: 'www.ateam-oracle.com', valueIsRegex: !0 },
                    { value: 'go.java', valueIsRegex: !0 },
                    { value: 'oraclefoundation.org', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) &&
                        -1 == e.truste_consent.indexOf(2) &&
                        -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'coreTags', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'infinity', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'var iTag = document.createElement("script"),infinityProdScript = "";\n\n/* Deploy the Infinity prod tag specific to each domain */\nif (location.host == "www.oracle.com") {\n    if (location.pathname.indexOf("/partners") != -1) {\n      infinityProdScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/partners/odc.js?_ora.context=analytics:production"\n    } else {\n      infinityProdScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracle/odc.js?_ora.context=analytics:production"\n    }  \n} else if (location.host == "community.oracle.com") {\n    infinityProdScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oraclecommunity/odc.js?_ora.context=analytics:production";\n} else if (location.host == "blogs.oracle.com" || location.host == "www.ateam-oracle.com") {\n    infinityProdScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracleblogs/odc.js?_ora.context=analytics:production";\n} else if (location.host == "developer.oracle.com") {\n    infinityProdScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracledeveloper/odc.js?_ora.context=analytics:production";\n} else if (location.host == "go.java") {\n    infinityProdScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/gojava/odc.js?_ora.context=analytics:production";\n} else if (location.host == "oraclefoundation.org") {\n    infinityProdScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oraclefoundation/odc.js?_ora.context=analytics:production ";\n}\niTag.src = infinityProdScript;\niTag.async = true;\niTag.type = \'text/javascript\';\ndocument.head.appendChild(iTag);       ',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL7ecc29d2098f454a862312225a599f30',
            name: 'Develop Test Deploy - Landing Page',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [{ value: 'cloud/dev-test-deploy/index.html', valueIsRegex: !0 }],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC4b4ac3231c5d4db681de800d1cb819b9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL82d928fa601f468ea37198539a78e98b',
            name: 'SMB Talent Management Cloud',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'smb/talent-management-cloud', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
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
                    '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB Talent management Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/talent-management-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbta0;cat=smbta0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbta0;cat=smbta0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL863bba628c7f417db893afdbce8a7e4f',
            name: 'Eloqua  Sales Cloud Landing Pad Campaign-147103',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    if (
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    )
                      return !1;
                    var t = _satellite.getVar('LP_id');
                    return '67353' == t
                      ? ((window.dtm_google_conversion_label = 'brosCNS4xn0Qkqu3kwM'), !0)
                      : '67354' == t &&
                          ((window.dtm_google_conversion_label = '8BNNCKqCwn0Qkqu3kwM'), !0);
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC8715791ff83d41f097f5bd94b116def9-source.min.js',
                  language: 'html',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc6b2bdf29d6b4185a1e6ba2db6abb57a',
            name: 'Global Site Tag New',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'GlobalSiteTag' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs.oracle.com', valueIsRegex: !0 },
                    { value: 'community.oracle.com', valueIsRegex: !0 },
                    { value: 'go.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'go-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'www-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'blogs-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'community-stage.oracle.com', valueIsRegex: !0 },
                    { value: 'auto.oracle.com', valueIsRegex: !0 },
                    { value: 'www-dev1.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/corporate/accessibility/', valueIsRegex: !0 },
                    { value: '/product-navigator', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    if (
                      ('www.oracle.com' == window.location.host &&
                        '/index.html' == window.location.pathname) ||
                      -1 != document.referrer.indexOf('explore.oracle.com')
                    )
                      return !1;
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'uberTag', value: 'no', valueIsRegex: !0 },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC1cd1f29d5ed3452fb7ec4fa2d23768b1-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf9139acab7914d888dfe2b50e5dee386',
            name: 'Infinity - Youtube API',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 10 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www-sites.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) &&
                        -1 == e.truste_consent.indexOf(2) &&
                        -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: '/poc/infinity/yt-track-test.html', valueIsRegex: !0 },
                    { value: '/poc/infinity/youtube-tracking.html', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '/* Deploy the Infinity dev tag specific to each staging domain */\nvar iTag = document.createElement("script");\n\ninfinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracle/odc.js?_ora.context=analytics:development"\n\niTag.src = infinityDevScript;\niTag.async = true;\niTag.type = \'text/javascript\';\ndocument.head.appendChild(iTag);',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLec76111a27b642ee87995650be4c482c',
            name: 'Global Site Tag - Japan - 802202278',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=98173', valueIsRegex: !0 },
                    { value: 'lp=98107', valueIsRegex: !0 },
                    { value: 'lp=98164', valueIsRegex: !0 },
                    { value: 'lp=98270', valueIsRegex: !0 },
                    { value: 'lp=98317', valueIsRegex: !0 },
                    { value: 'lp=98175', valueIsRegex: !0 },
                    { value: 'lp=101511', valueIsRegex: !0 },
                    { value: 'lp=101411', valueIsRegex: !0 },
                    { value: 'lp=98383', valueIsRegex: !0 },
                    { value: 'lp=98479', valueIsRegex: !0 },
                    { value: 'lp=98464', valueIsRegex: !0 },
                    { value: 'lp=99070', valueIsRegex: !0 },
                    { value: 'lp=98968', valueIsRegex: !0 },
                    { value: 'lp=100530', valueIsRegex: !0 },
                    { value: 'lp=101927', valueIsRegex: !0 },
                    { value: 'lp=101885', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC94d0f59e269d4d4cbad690b1085d660c-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL78c617a24ca34319b92f5101e4ce810c',
            name: 'Eloqua-JP Conversion Pixels AW-802202278 - OkrWCLDcuuEBEKbFwv4C',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=98173', valueIsRegex: !0 },
                    { value: 'lp=98107', valueIsRegex: !0 },
                    { value: 'lp=98164', valueIsRegex: !0 },
                    { value: 'lp=98270', valueIsRegex: !0 },
                    { value: 'lp=98317', valueIsRegex: !0 },
                    { value: 'lp=98175', valueIsRegex: !0 },
                    { value: 'lp=101511', valueIsRegex: !0 },
                    { value: 'lp=101411', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCe6ab3de029e242b0aa5fc609a8e05033-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL81b2b9c87bb14b54888e6112d570866f',
            name: 'Eloqua-JP Conversion Pixels AW-846058898 - ro-fCLTTv3MQkqu3kwM',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=101093', valueIsRegex: !0 },
                    { value: 'lp=101108', valueIsRegex: !0 },
                    { value: 'lp=101197', valueIsRegex: !0 },
                    { value: 'lp=101214', valueIsRegex: !0 },
                    { value: 'lp=101301', valueIsRegex: !0 },
                    { value: 'lp=101199', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RC2e5373f9da51491897863cb0422f2748-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc4939b271d9a4203aad62c7171287359',
            name: 'Eloqua-JP Conversion Pixels AW-802202278 - X9M8CL7L1eEBEKbFwv4C',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'go.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'lp=98383', valueIsRegex: !0 },
                    { value: 'lp=98479', valueIsRegex: !0 },
                    { value: 'lp=98464', valueIsRegex: !0 },
                    { value: 'lp=99070', valueIsRegex: !0 },
                    { value: 'lp=98968', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      0 != _satellite.getVar('countryExclusion')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/d177e281f37d/4b3a4cc62e81/7cfbb81c1f38/RCb87ab9e1a903424b8635e500d85a2f58-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL1ea1211451ba4677aad605252b396e8e',
            name: 'Chat Script copy - disable proactive POC',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'www.oracle.com', valueIsRegex: !0 },
                    { value: 'www-sites.oracle.com', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/corporate/contact/', valueIsRegex: !0 },
                    { value: '/consulting/soar.html', valueIsRegex: !0 },
                    { value: '^/us/corporate/events/soar/index.html', valueIsRegex: !0 },
                    { value: '/applications/', valueIsRegex: !0 },
                    { value: '/artificial-intelligence/', valueIsRegex: !0 },
                    { value: '/autonomouscloud/', valueIsRegex: !0 },
                    { value: '/big-data/', valueIsRegex: !0 },
                    { value: '/cloud/', valueIsRegex: !0 },
                    { value: '/content-storage-management/', valueIsRegex: !0 },
                    { value: '/corporate/pricing/', valueIsRegex: !0 },
                    { value: '/database/', valueIsRegex: !0 },
                    { value: '/engineered-systems/', valueIsRegex: !0 },
                    { value: '/enterprise-manager/', valueIsRegex: !0 },
                    { value: '/erp/', valueIsRegex: !0 },
                    { value: '/industries/communications/', valueIsRegex: !0 },
                    { value: '/industries/construction-engineering/', valueIsRegex: !0 },
                    { value: '/linux/', valueIsRegex: !0 },
                    { value: '/marketingcloud/', valueIsRegex: !0 },
                    { value: '/middleware/', valueIsRegex: !0 },
                    { value: '/midmarket/', valueIsRegex: !0 },
                    { value: '/midsize/', valueIsRegex: !0 },
                    { value: '/networking/', valueIsRegex: !0 },
                    { value: '^(\\/?[a-zA-Z0-9_-]*)/products/', valueIsRegex: !0 },
                    { value: '/security/', valueIsRegex: !0 },
                    { value: '/servers/', valueIsRegex: !0 },
                    { value: '/smb/', valueIsRegex: !0 },
                    { value: '/solutions/', valueIsRegex: !0 },
                    { value: '/storage/', valueIsRegex: !0 },
                    { value: '/systems/', valueIsRegex: !0 },
                    { value: '/tools/', valueIsRegex: !0 },
                    { value: '^/us/products/applications/ebusiness/', valueIsRegex: !0 },
                    {
                      value: '^/us/products/applications/master-data-management/',
                      valueIsRegex: !0,
                    },
                    { value: '^/us/products/applications/siebel/', valueIsRegex: !0 },
                    { value: '/virtualization/', valueIsRegex: !0 },
                    {
                      value: '^/(de|es|fr|it|nl|se|uk)/corporate/features/power/',
                      valueIsRegex: !0,
                    },
                    { value: '/it-infrastructure/', valueIsRegex: !0 },
                    { value: '^/jp/corporate/pricing.html', valueIsRegex: !0 },
                    { value: '/technetwork/', valueIsRegex: !0 },
                    { value: '^/tryit.html', valueIsRegex: !0 },
                    { value: '/area-of-interest/', valueIsRegex: !0 },
                    { value: '^/cn/videocenter/', valueIsRegex: !0 },
                    { value: '^(\\/?[a-zA-Z0-9_-]*)/mysql/', valueIsRegex: !0 },
                    { value: '/_qa/chatTest/compass_test.html', valueIsRegex: !0 },
                    { value: '/industries/food-beverage/', valueIsRegex: !0 },
                    { value: '/industries/hospitality/', valueIsRegex: !0 },
                    { value: '^/jp/contact-us/', valueIsRegex: !0 },
                    { value: '^/technical-resources/', valueIsRegex: !0 },
                    { value: '/internet-of-things/', valueIsRegex: !0 },
                    { value: '^/cn/netsuite/', valueIsRegex: !0 },
                    { value: '^/(middleeast-ar|sa-ar|ae-ar)/*', valueIsRegex: !0 },
                    { value: '^/cn/sun/', valueIsRegex: !0 },
                    { value: '^/sun/', valueIsRegex: !0 },
                    { value: '/application-development/', valueIsRegex: !0 },
                    { value: '^/business-analytics/analytics-for-cloud-hcm/$', valueIsRegex: !0 },
                    { value: '/business-analytics/$', valueIsRegex: !0 },
                    { value: '/business-analytics/analytics-cloud.html', valueIsRegex: !0 },
                    {
                      value: '/business-analytics/analytics-for-applications.html',
                      valueIsRegex: !0,
                    },
                    { value: '/business-analytics/analytics-server.html', valueIsRegex: !0 },
                    {
                      value: '/business-analytics/analytics-for-cloud-erp.html',
                      valueIsRegex: !0,
                    },
                    { value: '/business-analytics/products.html', valueIsRegex: !0 },
                    { value: '/business-analytics/applications-roadmap.html', valueIsRegex: !0 },
                    { value: '/business-analytics/solutions.html', valueIsRegex: !0 },
                    { value: '/business-analytics/resources.html', valueIsRegex: !0 },
                    { value: '/corporate/events/live/new-autonomous-services/', valueIsRegex: !0 },
                    { value: '/asiasouth/cloudday/', valueIsRegex: !0 },
                    { value: '/autonomous-database/', valueIsRegex: !0 },
                    { value: '/scm/', valueIsRegex: !0 },
                    { value: '/human-capital-management/', valueIsRegex: !0 },
                    { value: '/customers/', valueIsRegex: !0 },
                    { value: '/integration/', valueIsRegex: !0 },
                    { value: '/chatbots/', valueIsRegex: !0 },
                    { value: '^/events/customer-spotlight/', valueIsRegex: !0 },
                    { value: '^/events/virtual-summits/cloud-cx/', valueIsRegex: !0 },
                    { value: '/cx/', valueIsRegex: !0 },
                    {
                      value: '/asiasouth/events/virtual-summits/cloud-platform/',
                      valueIsRegex: !0,
                    },
                    { value: '/support/support-options.html', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/corporate/contact/help.html', valueIsRegex: !0 },
                    { value: '^/ca-fr/', valueIsRegex: !0 },
                    { value: '^/il/', valueIsRegex: !0 },
                    { value: '^/partners/', valueIsRegex: !0 },
                    { value: '/industries/retail/', valueIsRegex: !0 },
                    { value: '^/emea/', valueIsRegex: !0 },
                    { value: '/java/', valueIsRegex: !0 },
                    { value: '/technetwork/java/', valueIsRegex: !0 },
                    {
                      value: '^/industries/construction-engineering/future-of-projects/',
                      valueIsRegex: !0,
                    },
                    { value: '/products/financing/', valueIsRegex: !0 },
                    { value: '/applications/erp/future-ready-upgrade/', valueIsRegex: !0 },
                    { value: '^/_qa/cloud/solution-hubs/$', valueIsRegex: !0 },
                    { value: '/_qa/cloud/solution-hubs/about.html', valueIsRegex: !0 },
                    { value: '/_qa/cloud/solution-hubs/tarun-demos.html' },
                    { value: '^/cloud/solution-hubs/$', valueIsRegex: !0 },
                    { value: '/cloud/solution-hubs/about.html' },
                    { value: '/cloud/solution-hubs/demos.html' },
                    { value: '/consulting/applications/openworld-2019.html', valueIsRegex: !0 },
                    { value: '/applications/customer-experience/data-cloud/', valueIsRegex: !0 },
                    { value: '/technetwork/security-advisory/', valueIsRegex: !0 },
                    { value: '/industries/hospitality/hospitality-connect/', valueIsRegex: !0 },
                    { value: '/cloud/sign-in.html', valueIsRegex: !0 },
                    {
                      value: '^/industries/food-beverage/food-beverage-connect/',
                      valueIsRegex: !0,
                    },
                    { value: '^/jp/industries/', valueIsRegex: !0 },
                    {
                      value: '/applications/human-capital-management/chat-test-wo.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/reach-the-right-people.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/protect-your-ad-spend.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/moat-measure-the-impact.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/products/data-management-platform/cross-device.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/products/data-management-platform/id-graph.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/products/data-management-platform/ecosystem.html',
                      valueIsRegex: !0,
                    },
                    {
                      value: '^/data-cloud/products/data-management-platform/$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '/data-cloud/solutions/data-as-a-service/data-providers.html',
                      valueIsRegex: !0,
                    },
                    {
                      value:
                        '/opn/secure/get-enabled/partnercasts/product-channel/applications/index.html',
                      valueIsRegex: !0,
                    },
                    { value: '/partnernetwork/expertise/sell/erp/', valueIsRegex: !0 },
                    { value: '/data-cloud/products/audiences.html', valueIsRegex: !0 },
                    {
                      value: '/data-cloud/products/contextual-intelligence.html',
                      valueIsRegex: !0,
                    },
                    { value: '/developer-live/database/', valueIsRegex: !0 },
                    { value: '/search/', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'proactive-chat', value: 'no', valueIsRegex: !0 },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script>\n\t\twindow.sc_channel = \'SC Ocom\';\n    if(window.location.pathname.indexOf(\'technetwork\') != -1){\n    \twindow.sc_channel = "SC OTN";\n    }\n  \n    // Check if the user is accessing from mobile device\n    var isMobile = {\n    Android: function() {\n        return navigator.userAgent.match(/Android/i);\n    },\n    BlackBerry: function() {\n        return navigator.userAgent.match(/BlackBerry/i);\n    },\n    iOS: function() {\n        return navigator.userAgent.match(/iPhone|iPad|iPod/i);\n    },\n    Opera: function() {\n        return navigator.userAgent.match(/Opera Mini/i);\n    },\n    Windows: function() {\n        return navigator.userAgent.match(/IEMobile/i);\n    },\n    any: function() {\n        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());\n    }\n    };\n  \n  \tvar sc_product = _satellite.getVar(\'salesChatProductId\');\n    var x = document.getElementsByClassName("atgchat-link");\n    for (var i = 0; i < x.length; i++) {\n    name = "ochat";\n        arr = x[i].className.split(" ");\n        if (arr.indexOf(name) == -1) {\n            x[i].className += " " + name;\n        }\n   }\n   \n   var oChatScript = document.createElement(\'script\');\n\toChatScript.type = \'text/javascript\';\n\toChatScript.src = "//www.oracle.com/asset/web/js/oracle-chat.js";\n\toChatScript.id = "oracle_chat";\n\toChatScript.async = false;\n\toChatScript.setAttribute("data-path", "/asset/web/json/chat-translation-data.json");\n\toChatScript.setAttribute("data-scchannel", window.sc_channel);\n    if (isMobile.any()) { // disable proactive if accessed from mobile device\n      oChatScript.setAttribute("data-proactive", false);\n    }  \n\tdocument.body.appendChild(oChatScript);\n</script>\n<!-- <script data-reqjq src="//www.oracle.com/asset/web/js/oracle-chat.js" onload="this.setAttribute(\'data-scchannel\',window.sc_channel)" id="oracle_chat" data-path="/asset/web/json/chat-translation-data.json"></script> -->',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL213fa64bd4174efea3d895a26e8e98fd',
            name: 'Infinity - Youtube API Testing Naveen',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 10 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'www-sites.oracle.com', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    var e = _satellite.getVar('trusteConsent');
                    return !(
                      (-1 == e.truste_consent.indexOf(0) &&
                        -1 == e.truste_consent.indexOf(2) &&
                        -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: '/poc/infinity/yt-track-emded-test.html', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'var ytiFrameTag = document.createElement("script"),\nyouTubeIframeURL = "https://www.youtube.com/iframe_api";\n\nytiFrameTag.src = youTubeIframeURL;\nytiFrameTag.async = true;\nytiFrameTag.type = \'text/javascript\';\nytiFrameTag.onload = loadInfinityScript;\nytiFrameTag.onerror = loadInfinityScript;\ndocument.head.appendChild(ytiFrameTag);\n\nfunction loadInfinityScript() {\n  /* Deploy the Infinity dev tag specific to each staging domain */\n  var iTag = document.createElement("script");\n\n  infinityDevScript = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracle/odc.js?_ora.context=analytics:development"\n\n  iTag.src = infinityDevScript;\n  iTag.async = true;\n  iTag.type = \'text/javascript\';\n  document.head.appendChild(iTag);\n\n}',
                  language: 'javascript',
                },
              },
            ],
          },
        ],
      });
    var $___var_e00e2a6f623de65c = (function () {
      const $___old_b539543486ac1194 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_b539543486ac1194)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_9d7b4eb662ee43f5.userAgent
          ));
        return function () {
          'use strict';
          function e (e, t) {
            return e((t = { exports: {} }), t.exports), t.exports;
          }
          function t (t) {
            var a = this.constructor;
            return this.then(
              function (e) {
                return a.resolve(t()).then(function () {
                  return e;
                });
              },
              function (e) {
                return a.resolve(t()).then(function () {
                  return a.reject(e);
                });
              }
            );
          }
          function l (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function n () {}
          function s (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function o (e) {
            if (!(this instanceof o)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              m(e, this);
          }
          function i (n, s) {
            for (; 3 === n._state; ) n = n._value;
            0 !== n._state
              ? ((n._handled = !0),
                o._immediateFn(function () {
                  var e = 1 === n._state ? s.onFulfilled : s.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(n._value);
                    } catch (a) {
                      return void c(s.promise, a);
                    }
                    r(s.promise, t);
                  } else (1 === n._state ? r : c)(s.promise, n._value);
                }))
              : n._deferreds.push(s);
          }
          function r (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var a = t.then;
                if (t instanceof o) return (e._state = 3), (e._value = t), void u(e);
                if ('function' == typeof a) return void m(s(a, t), e);
              }
              (e._state = 1), (e._value = t), u(e);
            } catch (n) {
              c(e, n);
            }
          }
          function c (e, t) {
            (e._state = 2), (e._value = t), u(e);
          }
          function u (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              o._immediateFn(function () {
                e._handled || o._unhandledRejectionFn(e._value);
              });
            for (var t = 0, a = e._deferreds.length; t < a; t++) i(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function d (e, t, a) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = a);
          }
          function m (e, t) {
            var a = !1;
            try {
              e(
                function (e) {
                  a || ((a = !0), r(t, e));
                },
                function (e) {
                  a || ((a = !0), c(t, e));
                }
              );
            } catch (n) {
              if (a) return;
              (a = !0), c(t, n);
            }
          }
          function g (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function a () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
              for (var t = {}, a = 0; a < 10; a++) t['_' + String.fromCharCode(a)] = a;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e];
                  })
                  .join('')
              )
                return !1;
              var n = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  n[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
              );
            } catch (s) {
              return !1;
            }
          }
          function p (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var v = function (e) {
                var a = [];
                return (
                  e.forEach(function (t) {
                    t.events &&
                      t.events.forEach(function (e) {
                        a.push({ rule: t, event: e });
                      });
                  }),
                  a.sort(function (e, t) {
                    return e.event.ruleOrder - t.event.ruleOrder;
                  })
                );
              },
              f = 'debug',
              b = function (t, e) {
                var a = function () {
                    return 'true' === t.getItem(f);
                  },
                  n = function (e) {
                    t.setItem(f, e);
                  },
                  s = [],
                  o = function (e) {
                    s.push(e);
                  };
                return (
                  (e.outputEnabled = a()),
                  {
                    onDebugChanged: o,
                    getDebugEnabled: a,
                    setDebugEnabled: function (t) {
                      a() !== t &&
                        (n(t),
                        (e.outputEnabled = t),
                        s.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              h = 'Module did not export a function.',
              x = function (o, i) {
                return function (e, t, a) {
                  a = a || [];
                  var n = o.getModuleExports(e.modulePath);
                  if ('function' != typeof n) throw new Error(h);
                  var s = i(e.settings || {}, t);
                  return n.bind(null, s).apply(null, a);
                };
              },
              w = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              y = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              R = '\uD83D\uDE80',
              j =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : R,
              I = !1,
              _ = function (e) {
                if (I && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(j),
                    e !== y.DEBUG || window.console[e] || (e = y.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              C = _.bind(null, y.LOG),
              P = _.bind(null, y.INFO),
              O = _.bind(null, y.DEBUG),
              k = _.bind(null, y.WARN),
              S = _.bind(null, y.ERROR),
              E = {
                log: C,
                info: P,
                debug: O,
                warn: k,
                error: S,
                get outputEnabled () {
                  return I;
                },
                set outputEnabled (e) {
                  I = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: C.bind(null, t),
                    info: P.bind(null, t),
                    debug: O.bind(null, t),
                    warn: k.bind(null, t),
                    error: S.bind(null, t),
                  };
                },
              },
              L = e(function (n) {
                !(function (e) {
                  if (((n.exports = e()), !!0)) {
                    var t = window.Cookies,
                      a = (window.Cookies = e());
                    a.noConflict = function () {
                      return (window.Cookies = t), a;
                    };
                  }
                })(function () {
                  function c () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var a = arguments[e];
                      for (var n in a) t[n] = a[n];
                    }
                    return t;
                  }
                  function u (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (l) {
                    function r () {}
                    function a (e, t, a) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (a = c({ path: '/' }, r.defaults, a)).expires &&
                          (a.expires = new Date(1 * new Date() + 86400000 * a.expires)),
                          (a.expires = a.expires ? a.expires.toUTCString() : '');
                        try {
                          var n = JSON.stringify(t);
                          /^[\{\[]/.test(n) && (t = n);
                        } catch (i) {}
                        (t = l.write
                          ? l.write(t, e)
                          : encodeURIComponent(String(t)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var s = '';
                        for (var o in a)
                          a[o] &&
                            ((s += '; ' + o), !0 !== a[o] && (s += '=' + a[o].split(';')[0]));
                        return (document.cookie = e + '=' + t + s);
                      }
                    }
                    function t (e, t) {
                      if ('undefined' != typeof document) {
                        for (
                          var a = {},
                            n = document.cookie ? document.cookie.split('; ') : [],
                            s = 0;
                          s < n.length;
                          s++
                        ) {
                          var o = n[s].split('='),
                            i = o.slice(1).join('=');
                          t || '"' !== i.charAt(0) || (i = i.slice(1, -1));
                          try {
                            var r = u(o[0]);
                            if (((i = (l.read || l)(i, r) || u(i)), t))
                              try {
                                i = JSON.parse(i);
                              } catch (c) {}
                            if (((a[r] = i), e === r)) break;
                          } catch (c) {}
                        }
                        return e ? a[e] : a;
                      }
                    }
                    return (
                      (r.set = a),
                      (r.get = function (e) {
                        return t(e, !1);
                      }),
                      (r.getJSON = function (e) {
                        return t(e, !0);
                      }),
                      (r.remove = function (e, t) {
                        a(e, '', c(t, { expires: -1 }));
                      }),
                      (r.defaults = {}),
                      (r.withConverter = e),
                      r
                    );
                  }
                  return e(function () {});
                });
              }),
              T = { get: L.get, set: L.set, remove: L.remove },
              A = window,
              D = 'com.adobe.reactor.',
              N = function (n, e) {
                var s = D + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_91fe7ab1d82a9a79 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_91fe7ab1d82a9a79)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      return function () {
                        try {
                          return A[n].getItem(s + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_91fe7ab1d82a9a79)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_91fe7ab1d82a9a79
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_a748ca1da7d5a3e8 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_a748ca1da7d5a3e8)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      return function () {
                        try {
                          return A[n].setItem(s + e, t), !0;
                        } catch (a) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_a748ca1da7d5a3e8)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_a748ca1da7d5a3e8
                        ));
                    }
                  },
                };
              },
              V = '_sdsat_',
              q = 'dataElements.',
              M = 'dataElementCookiesMigrated',
              B = N('localStorage'),
              U = N('sessionStorage', q),
              F = N('localStorage', q),
              Q = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              W = {},
              G = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (a) {}
                return t;
              },
              $ = function (e, t, a) {
                var n;
                switch (t) {
                  case Q.PAGEVIEW:
                    return void (W[e] = a);
                  case Q.SESSION:
                    return void ((n = G(a)) && U.setItem(e, n));
                  case Q.VISITOR:
                    return void ((n = G(a)) && F.setItem(e, n));
                }
              },
              z = function (e, t) {
                var a = T.get(V + e);
                a !== undefined && $(e, t, a);
              },
              J = {
                setValue: $,
                getValue: function (e, t) {
                  var a;
                  switch (t) {
                    case Q.PAGEVIEW:
                      return W.hasOwnProperty(e) ? W[e] : null;
                    case Q.SESSION:
                      return null === (a = U.getItem(e)) ? a : JSON.parse(a);
                    case Q.VISITOR:
                      return null === (a = F.getItem(e)) ? a : JSON.parse(a);
                  }
                },
                migrateCookieData: function (t) {
                  B.getItem(M) ||
                    (Object.keys(t).forEach(function (e) {
                      z(e, t[e].storageDuration);
                    }),
                    B.setItem(M, !0));
                },
              },
              H = function (e, t, a, n) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  a +
                  (n ? '\n' + n : '')
                );
              },
              K = function (r, c, l, u) {
                return function (e, t) {
                  var a = c(e);
                  if (!a) return u ? '' : undefined;
                  var n,
                    s = a.storageDuration;
                  try {
                    n = r.getModuleExports(a.modulePath);
                  } catch (i) {
                    return void E.error(H(a, e, i.message, i.stack));
                  }
                  if ('function' == typeof n) {
                    var o;
                    try {
                      o = n(l(a.settings, t), t);
                    } catch (i) {
                      return void E.error(H(a, e, i.message, i.stack));
                    }
                    return (
                      s && (null != o ? J.setValue(e, s, o) : (o = J.getValue(e, s))),
                      null == o && null != a.defaultValue && (o = a.defaultValue),
                      'string' == typeof o &&
                        (a.cleanText && (o = w(o)), a.forceLowerCase && (o = o.toLowerCase())),
                      o
                    );
                  }
                  E.error(H(a, e, 'Module did not export a function.'));
                };
              },
              Y = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return w(e.textContent);
                },
              },
              Z = function (e, t, a) {
                for (var n, s = e, o = 0, i = t.length; o < i; o++) {
                  if (null == s) return undefined;
                  var r = t[o];
                  if (a && '@' === r.charAt(0)) {
                    var c = r.slice(1);
                    s = Y[c](s);
                  } else if (s.getAttribute && (n = r.match(/^getAttribute\((.+)\)$/))) {
                    var l = n[1];
                    s = s.getAttribute(l);
                  } else s = s[r];
                }
                return s;
              },
              X = function (o, i, r) {
                return function (e, t) {
                  var a;
                  if (i(e)) a = r(e, t);
                  else {
                    var n = e.split('.'),
                      s = n.shift();
                    'this' === s
                      ? t && (a = Z(t.element, n, !0))
                      : 'event' === s
                      ? t && (a = Z(t, n))
                      : 'target' === s
                      ? t && (a = Z(t.target, n))
                      : (a = Z(o[s], n));
                  }
                  return a;
                };
              },
              ee = function (a, n) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    n(e) || 'this' === t || 'event' === t || 'target' === t || a.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, a) {
                var n = { exports: {} };
                return e.call(n.exports, n, n.exports, t, a), n.exports;
              },
              ae = function () {
                var i = {},
                  a = function (e) {
                    var t = i[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(i).forEach(function (e) {
                      try {
                        n(e);
                      } catch (a) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          a.message +
                          (a.stack ? '\n' + a.stack : '');
                        E.error(t);
                      }
                    });
                  },
                  n = function (e) {
                    var t = a(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, a, n, s) {
                    var o = { definition: t, extensionName: a, require: n, turbine: s };
                    (o.require = n), (i[e] = o);
                  },
                  hydrateCache: e,
                  getModuleExports: n,
                  getModuleDefinition: function (e) {
                    return a(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return a(e).extensionName;
                  },
                };
              },
              ne = !1,
              se = function (n) {
                return function (t, a) {
                  var e = n._monitors;
                  e &&
                    (ne ||
                      (E.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (ne = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](a);
                    }));
                };
              },
              oe = function (s, o, i) {
                var a,
                  n,
                  r,
                  c,
                  l = [],
                  u = function (e, t, a) {
                    if (!s(t)) return e;
                    l.push(t);
                    var n = o(t, a);
                    return l.pop(), null == n && i ? '' : n;
                  };
                return (
                  (a = function (e, a) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? u(e, t[1], a)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return u(e, t, a);
                        });
                  }),
                  (n = function (e, t) {
                    for (var a = {}, n = Object.keys(e), s = 0; s < n.length; s++) {
                      var o = n[s],
                        i = e[o];
                      a[o] = c(i, t);
                    }
                    return a;
                  }),
                  (r = function (e, t) {
                    for (var a = [], n = 0, s = e.length; n < s; n++) a.push(c(e[n], t));
                    return a;
                  }),
                  (c = function (e, t) {
                    return 'string' == typeof e
                      ? a(e, t)
                      : Array.isArray(e)
                      ? r(e, t)
                      : 'object' == typeof e && null !== e
                      ? n(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < l.length
                      ? (E.error('Data element circular reference detected: ' + l.join(' -> ')), e)
                      : c(e, t);
                  }
                );
              },
              ie = function (s) {
                return function (e, t) {
                  if ('string' == typeof e) s[arguments[0]] = t;
                  else if (arguments[0]) {
                    var a = arguments[0];
                    for (var n in a) s[n] = a[n];
                  }
                };
              },
              re = setTimeout;
            (o.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (o.prototype.then = function (e, t) {
                var a = new this.constructor(n);
                return i(this, new d(e, t, a)), a;
              }),
              (o.prototype['finally'] = t),
              (o.all = function (t) {
                return new o(function (s, o) {
                  function i (t, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var a = e.then;
                        if ('function' == typeof a)
                          return void a.call(
                            e,
                            function (e) {
                              i(t, e);
                            },
                            o
                          );
                      }
                      (r[t] = e), 0 == --c && s(r);
                    } catch (n) {
                      o(n);
                    }
                  }
                  if (!l(t)) return o(new TypeError('Promise.all accepts an array'));
                  var r = Array.prototype.slice.call(t);
                  if (0 === r.length) return s([]);
                  for (var c = r.length, e = 0; e < r.length; e++) i(e, r[e]);
                });
              }),
              (o.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === o
                  ? t
                  : new o(function (e) {
                      e(t);
                    });
              }),
              (o.reject = function (a) {
                return new o(function (e, t) {
                  t(a);
                });
              }),
              (o.race = function (s) {
                return new o(function (e, t) {
                  if (!l(s)) return t(new TypeError('Promise.race accepts an array'));
                  for (var a = 0, n = s.length; a < n; a++) o.resolve(s[a]).then(e, t);
                });
              }),
              (o._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  re(e, 0);
                }),
              (o._unhandledRejectionFn = function It (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || o['default'] || o,
              le = function (l, a, n) {
                return function (r, t, c, e) {
                  return e.then(function () {
                    var o,
                      i = r.delayNext;
                    return new ce(function (e, t) {
                      var a = l(r, c, [c]);
                      if (!i) return e();
                      var n = r.timeout,
                        s = new ce(function (e, t) {
                          o = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  n / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, n);
                        });
                      ce.race([a, s]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(o), (e = a(e)), n(r, t, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(o);
                      });
                  });
                };
              },
              ue = function (c, a, n, s, l) {
                return function (i, t, r, e) {
                  return e.then(function () {
                    var o;
                    return new ce(function (e, t) {
                      var a = c(i, r, [r]),
                        n = i.timeout,
                        s = new ce(function (e, t) {
                          o = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  n / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, n);
                        });
                      ce.race([a, s]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(o), (e = a(e)), s(i, t, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(o), !n(i, e))) return l(i, t), ce.reject();
                      });
                  });
                };
              },
              de = ce.resolve(),
              me = function (n, s, e) {
                return function (t, a) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        de = n(e, t, a, de);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        de = s(e, t, a, de);
                      }),
                    (de = (de = de.then(function () {
                      e(t);
                    }))['catch'](function () {}))
                  );
                };
              },
              ge = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              ve = function (i, r, c, l) {
                return function (e, t) {
                  var a;
                  if (e.conditions)
                    for (var n = 0; n < e.conditions.length; n++) {
                      a = e.conditions[n];
                      try {
                        var s = i(a, t, [t]);
                        if (ge(s))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!r(a, s)) return c(a, e), !1;
                      } catch (o) {
                        return l(a, e, o), !1;
                      }
                    }
                  return !0;
                };
              },
              pe = function (a, n) {
                return function (e, t) {
                  a(e, t) && n(e, t);
                };
              },
              fe = function (a) {
                return function (e) {
                  var t = a.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              be = function (s) {
                return function (e) {
                  var t = e.rule,
                    a = e.event,
                    n = s.getModuleDefinition(a.modulePath).name;
                  return {
                    $type: s.getModuleExtensionName(a.modulePath) + '.' + n,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              he = function (r, c, l, u, d, m) {
                return function (a, e) {
                  var n = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var s = d(e);
                    c(t, null, [
                      function o (e) {
                        var t = l(s, e);
                        a(function () {
                          r(t, n);
                        });
                      },
                    ]);
                  } catch (i) {
                    m.error(u(t, n, i));
                  }
                };
              },
              xe = function (s, o, i, r) {
                return function (e, t, a) {
                  var n = o(e);
                  i.error(s(n, t.name, a)), r('ruleActionFailed', { rule: t, action: e });
                };
              },
              we = function (s, o, i, r) {
                return function (e, t, a) {
                  var n = o(e);
                  i.error(s(n, t.name, a)), r('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              ye = function (n, s, o) {
                return function (e, t) {
                  var a = n(e);
                  s.log('Condition "' + a + '" for rule "' + t.name + '" was not met.'),
                    o('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Re = function (t, a) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), a('ruleCompleted', { rule: e });
                };
              },
              je = function (o, i, r) {
                return function (e, t) {
                  var a;
                  if (e.actions)
                    for (var n = 0; n < e.actions.length; n++) {
                      a = e.actions[n];
                      try {
                        o(a, t, [t]);
                      } catch (s) {
                        return void i(a, e, s);
                      }
                    }
                  r(e);
                };
              },
              Ie = function (a, n, s, o) {
                return function (e, t) {
                  o('ruleTriggered', { rule: t }), a ? s(t, e) : n(t, e);
                };
              },
              _e = function (e, t, a) {
                return (
                  'Failed to execute "' +
                  e +
                  '" for "' +
                  t +
                  '" rule. ' +
                  a.message +
                  (a.stack ? '\n' + a.stack : '')
                );
              },
              Ce = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              Pe = [],
              Oe = !1,
              ke = function (e) {
                Oe ? e() : Pe.push(e);
              },
              Se = function (e, t, a) {
                e(t).forEach(function (e) {
                  a(ke, e);
                }),
                  (Oe = !0),
                  Pe.forEach(function (e) {
                    e();
                  }),
                  (Pe = []);
              },
              Ee = function (e) {
                if (
                  (e ||
                    (e = new Error(
                      'The extension triggered an error, but no error information was provided.'
                    )),
                  !(e instanceof Error))
                ) {
                  var t = 'object' == typeof e ? JSON.stringify(e) : String(e);
                  e = new Error(t);
                }
                return e;
              },
              Le = Object.getOwnPropertySymbols,
              Te = Object.prototype.hasOwnProperty,
              Ae = Object.prototype.propertyIsEnumerable,
              De = a()
                ? Object.assign
                : function (e) {
                    for (var t, a, n = g(e), s = 1; s < arguments.length; s++) {
                      for (var o in (t = Object(arguments[s]))) Te.call(t, o) && (n[o] = t[o]);
                      if (Le) {
                        a = Le(t);
                        for (var i = 0; i < a.length; i++) Ae.call(t, a[i]) && (n[a[i]] = t[a[i]]);
                      }
                    }
                    return n;
                  },
              Ne = function (e, t) {
                return (
                  De((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          E.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Ve = function (c, l) {
                return function (e, t) {
                  var a = c[e];
                  if (a) {
                    var n = a.modules;
                    if (n)
                      for (var s = Object.keys(n), o = 0; o < s.length; o++) {
                        var i = s[o],
                          r = n[i];
                        if (r.shared && r.name === t) return l.getModuleExports(i);
                      }
                  }
                };
              },
              qe = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Me = function (a, n) {
                return function (e) {
                  if (n) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return a + e;
                };
              },
              Be = '.js',
              Ue = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              Fe = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              Qe = function (e, t) {
                Fe(t, Be) || (t += Be);
                var a = t.split('/'),
                  n = Ue(e).split('/');
                return (
                  a.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? n.length && n.pop() : n.push(e));
                  }),
                  n.join('/')
                );
              },
              We = document,
              Ge = function (a, n) {
                return new ce(function (e, t) {
                  (n.onload = function () {
                    e(n);
                  }),
                    (n.onerror = function () {
                      t(new Error('Failed to load script ' + a));
                    });
                });
              },
              $e = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var a = Ge(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), a;
              },
              ze = function (e, t, a, n) {
                (t = t || '&'), (a = a || '=');
                var s = {};
                if ('string' != typeof e || 0 === e.length) return s;
                var o = /\+/g;
                e = e.split(t);
                var i = 1000;
                n && 'number' == typeof n.maxKeys && (i = n.maxKeys);
                var r = e.length;
                0 < i && i < r && (r = i);
                for (var c = 0; c < r; ++c) {
                  var l,
                    u,
                    d,
                    m,
                    g = e[c].replace(o, '%20'),
                    v = g.indexOf(a);
                  0 <= v ? ((l = g.substr(0, v)), (u = g.substr(v + 1))) : ((l = g), (u = '')),
                    (d = decodeURIComponent(l)),
                    (m = decodeURIComponent(u)),
                    p(s, d)
                      ? Array.isArray(s[d])
                        ? s[d].push(m)
                        : (s[d] = [s[d], m])
                      : (s[d] = m);
                }
                return s;
              },
              Je = function (e) {
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
              He = function (a, n, s, e) {
                return (
                  (n = n || '&'),
                  (s = s || '='),
                  null === a && (a = undefined),
                  'object' == typeof a
                    ? Object.keys(a)
                        .map(function (e) {
                          var t = encodeURIComponent(Je(e)) + s;
                          return Array.isArray(a[e])
                            ? a[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(Je(e));
                                })
                                .join(n)
                            : t + encodeURIComponent(Je(a[e]));
                        })
                        .join(n)
                    : e
                    ? encodeURIComponent(Je(e)) + s + encodeURIComponent(Je(a))
                    : ''
                );
              },
              Ke = e(function (e, t) {
                (t.decode = t.parse = ze), (t.encode = t.stringify = He);
              }),
              Ye = (Ke.decode, Ke.parse, Ke.encode, Ke.stringify, '@adobe/reactor-'),
              Ze = {
                cookie: T,
                document: We,
                'load-script': $e,
                'object-assign': De,
                promise: ce,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), Ke.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return Ke.stringify(e);
                  },
                },
                window: A,
              },
              Xe = function (n) {
                return function (e) {
                  if (0 === e.indexOf(Ye)) {
                    var t = e.substr(Ye.length),
                      a = Ze[t];
                    if (a) return a;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return n(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, i, r, c, l) {
                var u = e.extensions,
                  d = e.buildInfo,
                  m = e.property.settings;
                if (u) {
                  var g = Ve(u, i);
                  Object.keys(u).forEach(function (n) {
                    var s = u[n],
                      e = qe(c, s.settings);
                    if (s.modules) {
                      var t = E.createPrefixedLogger(s.displayName),
                        a = Me(s.hostedLibFilesBaseUrl, d.minified),
                        o = {
                          buildInfo: d,
                          getDataElementValue: l,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: a,
                          getSharedModule: g,
                          logger: t,
                          propertySettings: m,
                          replaceTokens: c,
                          onDebugChanged: r.onDebugChanged,
                          get debugEnabled () {
                            return r.getDebugEnabled();
                          },
                        };
                      Object.keys(s.modules).forEach(function (a) {
                        var e = s.modules[a],
                          t = Xe(function (e) {
                            var t = Qe(a, e);
                            return i.getModuleExports(t);
                          });
                        i.registerModule(a, e, n, t, o);
                      });
                    }
                  }),
                    i.hydrateCache();
                }
                return i;
              },
              tt = function (e, t, a, n, s) {
                var o = E.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  E.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: t.property.name }),
                  (e.company = t.company),
                  (e.buildInfo = t.buildInfo),
                  (e.logger = o),
                  (e.notify = function (e, t) {
                    switch (
                      (E.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      t)
                    ) {
                      case 3:
                        o.info(e);
                        break;
                      case 4:
                        o.warn(e);
                        break;
                      case 5:
                        o.error(e);
                        break;
                      default:
                        o.log(e);
                    }
                  }),
                  (e.getVar = n),
                  (e.setVar = s),
                  (e.setCookie = function (e, t, a) {
                    var n = '',
                      s = {};
                    a && ((n = ', { expires: ' + a + ' }'), (s.expires = a));
                    var o =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      n +
                      ').';
                    E.warn(o), T.set(e, t, s);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      E.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      T.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    E.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      T.remove(e);
                  }),
                  (e.cookie = T),
                  (e.pageBottom = function () {}),
                  (e.setDebug = a);
                var i = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      i ||
                        (E.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (i = !0)),
                      t
                    );
                  },
                });
              },
              at = window._satellite;
            if (at && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var nt = at.container;
              delete at.container;
              var st = nt.property.settings.undefinedVarsReturnEmpty,
                ot = nt.property.settings.ruleComponentSequencingEnabled,
                it = nt.dataElements || {};
              J.migrateCookieData(it);
              var rt,
                ct = function (e) {
                  return it[e];
                },
                lt = ae(),
                ut = K(
                  lt,
                  ct,
                  function () {
                    return rt.apply(null, arguments);
                  },
                  st
                ),
                dt = {},
                mt = ie(dt),
                gt = ee(dt, ct),
                vt = X(dt, ct, ut);
              rt = oe(gt, vt, st);
              var pt = b(N('localStorage'), E);
              tt(at, nt, pt.setDebugEnabled, vt, mt), et(nt, lt, pt, rt, ut);
              var ft = se(at),
                bt = x(lt, rt),
                ht = fe(lt),
                xt = ye(ht, E, ft),
                wt = we(_e, ht, E, ft),
                yt = xe(_e, ht, E, ft),
                Rt = Re(E, ft),
                jt = he(
                  Ie(
                    ot,
                    pe(ve(bt, Ce, xt, wt), je(bt, yt, Rt)),
                    me(ue(bt, Ee, Ce, wt, xt), le(bt, Ee, yt), Rt),
                    ft
                  ),
                  bt,
                  Ne,
                  _e,
                  be(lt),
                  E
                );
              Se(v, nt.rules || [], jt);
            }
            return at;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_b539543486ac1194)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_b539543486ac1194
          ));
      }
    })();
    _satellite = $___var_e00e2a6f623de65c;
  })();
}
