var dataLayer, gtm_products;
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
  (function () {
    var $___var_41ab96e05ad3ae01 = dataLayer || [],
      $___var_9f3785c8653a2fe2 = gtm_products || [];
    dataLayer = $___var_41ab96e05ad3ae01;
    gtm_products = $___var_9f3785c8653a2fe2;
    (function (d, l, C) {
      const $___old_55b5cd7e129918f9 = {}.constructor.getOwnPropertyDescriptor(
        Document.prototype,
        'cookie'
      );
      try {
        if ($___old_55b5cd7e129918f9)
          ({}.constructor.defineProperty(
            Document.prototype,
            'cookie',
            $___stub_cdc5a54489618108.cookie
          ));
        return function () {
          dataLayer = d.dataLayer;
          gtm_products = d.gtm_products;
          var L = d.location.hostname,
            D = d.location.pathname,
            E = d.location.hash,
            A = !1,
            x = null,
            M = d.documentLanguage || 'tr',
            N = -1 < l.location.href.indexOf('gadebug'),
            f = function () {
              N && console.log.apply(d.console, arguments);
            },
            h = function (a) {
              var b = { çÇ: 'c', ğĞ: 'g', şŞ: 's', üÜ: 'u', ıİ: 'i', öÖ: 'o' };
              a = a.toString();
              for (var c in b) a = a.replace(new RegExp('[' + c + ']', 'g'), b[c]);
              return a
                .replace(/[^_-a-zA-Z0-9\s]+/gi, '')
                .replace(/\s/gi, '-')
                .replace(/[-]+/gi, '-')
                .toLowerCase();
            },
            g = function (a, b) {
              dataLayer.push(a);
              b && (dataLayer.initialized = !0);
            },
            F = function () {
              E = d.location.hash;
              D = d.location.pathname;
              var a = '/haritada-emlak-arama/ localhost banaozel.sahibinden.com /odeme-yap /emlak360/emlak-endeksi /hizmetler /kategori -hizmetleri /anasayfa-vitrin-ozet / /servisler /banaozel-ozet /kategoriler /emlak360 /oto360'.split(
                  ' '
                ),
                b = !1,
                c;
              for (c in a) {
                var e = a[c];
                if (-1 < L.indexOf(e) || -1 < D.indexOf(e) || -1 < E.indexOf(e)) {
                  b = !0;
                  break;
                }
              }
              return b;
            },
            m = function (a) {
              if (!0 === A && !1 === F()) return !1;
              var b = { event: 'virtualPageView' };
              a && a.charAt && ((a = ('/' == a.charAt(0) ? '' : '/') + a), (b.pageView = a));
              g(b);
              A = !0;
            },
            B = function (a, b, c, e, d) {
              null == e && (e = 0);
              g({ Category: a, Action: b, Label: d ? c : h(c), Value: e, event: 'gaEvent' });
            },
            k = function (a, b, c) {
              var e = {};
              e[b] = c;
              g(e);
              G('gaCustomVarSetted', { index: a, name: b, value: c });
            },
            G = function (a, b) {
              var c;
              l.createEvent
                ? ((c = l.createEvent('HTMLEvents')), c.initEvent('shbdn-' + a, !0, !0))
                : ((c = l.createEventObject()), (c.eventType = 'shbdn-' + a));
              c.__eventData = b;
              l.createEvent ? l.dispatchEvent(c) : l.fireEvent('on' + c.eventType, c);
            },
            t,
            u = function (a) {
              return '/' + a.join('/') + '/';
            },
            H = function (a, b) {
              if (a) {
                'undefined' !== typeof a.isStore && b.push(a.isStore ? 'kurumsal' : 'bireysel');
                'undefined' !== typeof a.isGet && b.push(a.isGet ? 'get' : 'ilan');
                if (
                  'undefined' !== typeof a.categories &&
                  null != a.categories &&
                  0 < a.categories.length
                )
                  for (b.push('kat'), t = 0, length = a.categories.length; t < length; t++)
                    b.push(h(a.categories[t]));
                'undefined' !== typeof a.isUsed &&
                  null !== a.isUsed &&
                  'null' !== a.isUsed &&
                  b.push(a.isUsed ? 'ikinci-el' : 'sifir');
                if (
                  'undefined' !== typeof a.locations &&
                  null != a.locations &&
                  0 < a.locations.length
                )
                  for (b.push('yer'), t = 0, length = a.locations.length; t < length; t++)
                    b.push(h(a.locations[t]));
              }
            },
            O = function (a, b) {
              var c = Date.now,
                e = d.requestAnimationFrame,
                q = c(),
                f,
                g = function () {
                  c() - q < b || ((q += b), a());
                  f || e(g);
                };
              e(g);
              return {
                clear: function () {
                  f = 1;
                },
              };
            },
            z = {
              homepage: function (a) {
                a.hasOwnProperty('viewName') &&
                  a.viewName &&
                  (f('homepage generated: ' + a.viewName), m(a.viewName));
              },
              login: function (a) {
                a.hasOwnProperty('viewName') &&
                  a.viewName &&
                  (f('login generated: ' + a.viewName), m(a.viewName));
              },
              classified: function (a) {
                f('route = classified');
                var b = [],
                  c = a.classified;
                b.push(c.isGet ? 'get' : 'ilan');
                b.push(c.isActive ? 'aktif' : 'pasif');
                b.push(c.isStore ? 'kurumsal' : 'bireysel');
                'undefined' !== typeof c.isUsed &&
                  null !== c.isUsed &&
                  'null' !== c.isUsed &&
                  b.push(c.isUsed ? 'ikinci-el' : 'sifir');
                b.push('kat');
                a = 0;
                for (length = c.categories.length; a < length; a++) b.push(h(c.categories[a]));
                b.push('yer');
                a = 0;
                for (length = c.locations.length; a < length; a++) b.push(h(c.locations[a]));
                b = u(b);
                f('custom classified url generated: ' + b);
                m(b);
              },
              postad: function (a) {
                f('route = postad');
                var b = [],
                  c = a.view;
                a = a.classified;
                b.push('ilan-verme');
                b.push(
                  {
                    addclassified1: 'kategori',
                    addclassified2: 'detay',
                    classified: 'onizleme',
                    doping: 'doping',
                    addclassified5: 'tesekkur',
                  }[c]
                );
                H(a, b);
                b = u(b);
                f('custom postad url generated: ' + b);
                a.isSucceed && g(a.succeedData);
                m(b);
              },
              search: function (a) {
                f('route = search');
                var b = [],
                  c,
                  e = a.categories,
                  d = a.locations;
                b.push('arama');
                a.hasOwnProperty('viewName') &&
                  a.viewName &&
                  'search' !== a.viewName &&
                  b.push(a.viewName);
                'undefined' !== typeof a.searchResult &&
                  null !== a.searchResult &&
                  'null' !== a.searchResult &&
                  (null !== a.searchResult.isGet &&
                    'null' !== a.searchResult.isGet &&
                    b.push(a.searchResult.isGet ? 'get' : 'ilan'),
                  null !== a.searchResult.isUsed &&
                    'null' !== a.searchResult.isUsed &&
                    b.push(a.searchResult.isUsed ? 'ikinci-el' : 'sifir'));
                if (0 < e.length) for (c in (b.push('kat'), e)) b.push(h(e[c]));
                if (0 < d.length) for (c in (b.push('yer'), d)) b.push(h(d[c]));
                b = u(b);
                a.query && (b += '?q=' + a.query);
                f('custom search url generated: ' + b);
                m(b);
              },
              mapSearch: function () {
                f('pageView event is fired in mapSearch_analytics.js');
              },
              category: function (a) {
                f('route = category');
                var b = [],
                  c;
                a = a.categories;
                b.push('kategori');
                for (c in a) b.push(h(a[c]));
                b = u(b);
                f('custom category url generated: ' + b);
                m(b);
              },
              store: function (a) {
                f('route = store');
                var b = [],
                  c,
                  e = a.storeSubdomain.categories;
                b.push('magaza');
                b.push(
                  {
                    2: 'emlak',
                    1: 'vasita',
                    3: 'alisveris',
                    5: 'is-makinesi',
                    4: 'hayvanlar-alemi',
                    7: 'hepsi-bir',
                    9: 'yedek-parca',
                  }[a.storeSubdomain.packetId]
                );
                if (0 < e.length) for (c in (b.push('kat'), e)) b.push(h(e[c]));
                b = u(b);
                a.storeSubdomain.query && (b += '?q=' + a.storeSubdomain.query);
                f('custom store url generated: ' + b);
                m(b);
              },
              payment: function (a) {
                if (a.hasOwnProperty('classified')) {
                  var b = [];
                  b.push(a.viewName);
                  H(a.classified, b);
                  a = u(b);
                  f('custom payment url generated: ' + a);
                } else (a = '/' + a.viewName), f('payment store url generated: ' + a);
                m(a);
              },
              register: function (a) {
                f('route = register');
                var b = { '/kayit/': '/uye-ol/', '/eposta-kayit/': '/son-1-adim/' };
                a = a.view;
                var c, e;
                for (e in b)
                  if (-1 < e.indexOf(a)) {
                    c = b[e];
                    break;
                  } else c = a;
                f('submitted page url: ' + c);
                m(c);
              },
              custom: function (a) {
                if (a.hasOwnProperty('viewName') && a.viewName) {
                  var b = [];
                  b.push(a.viewName);
                  b = u(b);
                  f('custom url generated: ' + b);
                  m(b);
                }
                if (a.hasOwnProperty('trackEvent') && a.trackEvent)
                  for (var b = 0, c = a.trackEvent.length; b < c; b++)
                    B(
                      a.trackEvent[b].category,
                      a.trackEvent[b].action,
                      a.trackEvent[b].label,
                      null,
                      !0
                    );
              },
              error: function (a) {
                f('route = error');
                a = 'hata_' + a.errorCode + '_' + l.location.href;
                f('generated error url: ' + a);
                m(a);
              },
            },
            v = function (a) {
              const $___old_b44e656fbf35df31 = {}.constructor.getOwnPropertyDescriptor(
                Document.prototype,
                'cookie'
              );
              try {
                if ($___old_b44e656fbf35df31)
                  ({}.constructor.defineProperty(
                    Document.prototype,
                    'cookie',
                    $___stub_cdc5a54489618108.cookie
                  ));
                return function () {
                  a = l.cookie.match(new RegExp('(; )?' + a + '=([^;]*);?'));
                  return null !== a && 2 < a.length ? a[2] : null;
                }.apply(this, arguments);
              } finally {
                if ($___old_b44e656fbf35df31)
                  ({}.constructor.defineProperty(
                    Document.prototype,
                    'cookie',
                    $___old_b44e656fbf35df31
                  ));
              }
            },
            n = function (a, b, c) {
              const $___old_a38ffb4eff51c46d = {}.constructor.getOwnPropertyDescriptor(
                Document.prototype,
                'cookie'
              );
              try {
                if ($___old_a38ffb4eff51c46d)
                  ({}.constructor.defineProperty(
                    Document.prototype,
                    'cookie',
                    $___stub_cdc5a54489618108.cookie
                  ));
                return function () {
                  c || ((c = new Date()), c.setMonth(c.getMonth() + 12));
                  l.cookie = a + '=' + b + ';expires=' + c + ';domain=.sahibinden.com;';
                }.apply(this, arguments);
              } finally {
                if ($___old_a38ffb4eff51c46d)
                  ({}.constructor.defineProperty(
                    Document.prototype,
                    'cookie',
                    $___old_a38ffb4eff51c46d
                  ));
              }
            },
            p = function (a) {
              a = a.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
              a = new RegExp('[\\?&]' + a + '=([^&#]*)').exec(location.search);
              return null == a ? '' : decodeURIComponent(a[1].replace(/\+/g, ' '));
            },
            I = function () {
              const $___old_a7ed966a473f0448 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              );
              try {
                if ($___old_a7ed966a473f0448)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_addd751f0eb655f8.userAgent
                  ));
                return function () {
                  var a = d.pageTrackData,
                    b;
                  if (a && a.hasOwnProperty('userSegment')) g({ 'user segment': a.userSegment });
                  else if ((b = v('userType')))
                    (b = b.replace('_yapi', '_ismakineleri')), g({ 'user segment': b });
                  if (a === C) f("pageTrackData variable couldn't found. tracking url..."), m();
                  else {
                    b = a.route;
                    g({ l: M });
                    g({ dc: a.dc || '' });
                    a.homepageDesign && g({ homepage_design: a.homepageDesign });
                    a.successfulPaymentWithSavedCC &&
                      g({
                        Category: 'Funnel',
                        Action: 'kayitliOdeme',
                        Label: 'tebrikler',
                        Value: 0,
                        event: 'gaEvent',
                      });
                    if (a.hasOwnProperty('transactionObject') && a.transactionObject) {
                      if (
                        a.transactionObject.hasOwnProperty('transactionProducts') &&
                        a.transactionObject.transactionProducts &&
                        0 < a.transactionObject.transactionProducts.length
                      ) {
                        var c = 0,
                          e = a.transactionObject.transactionProducts,
                          q = e.length;
                        for (c; c < q; c++) gtm_products.push(e[c]);
                      }
                      a.transactionObject.transactionProducts = gtm_products;
                      g(a.transactionObject);
                      a.transactionUserItem &&
                        (g({
                          Category: 'Transaction',
                          Action: 'Loyalty',
                          Label: 'Recurrence',
                          Value: a.transactionUserItem.recurrence,
                          event: 'gaEvent',
                        }),
                        g({
                          Category: 'Transaction',
                          Action: 'Loyalty',
                          Label: 'Delay',
                          Value: a.transactionUserItem.delay,
                          event: 'gaEvent',
                        }));
                    }
                    var q = l.referrer,
                      c = -1 < d.navigator.userAgent.indexOf('EmbeddedBrowser'),
                      e = -1 < d.navigator.userAgent.indexOf('SahibindenPro'),
                      q = 0 < q.length && c ? 'WebView > WebView' : C,
                      h = 'Unknown OS',
                      k = navigator.userAgent;
                    -1 !== k.indexOf('like Mac')
                      ? (h = 'iOS')
                      : -1 !== k.indexOf('Android')
                      ? (h = 'Android')
                      : -1 !== k.indexOf('Mac')
                      ? (h = 'Macintosh')
                      : -1 !== k.indexOf('Win')
                      ? (h = 'Windows')
                      : -1 !== k.indexOf('Linux') && (h = 'Linux');
                    g({ os: h, webView: c, SahibindenPro: e }, !0);
                    q &&
                      g({
                        Category: q,
                        Action: a.view,
                        Label: a.viewName,
                        Value: 0,
                        event: 'gaEvent',
                      });
                    if (b in z) z[b](a);
                    else F() || m();
                  }
                }.apply(this, arguments);
              } finally {
                if ($___old_a7ed966a473f0448)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_a7ed966a473f0448
                  ));
              }
            },
            y = 'Yepyeni-std';
          new RegExp(/nwsh=fct/).test(l.cookie) && (y = 'Yepyeni-fct');
          k(1, 'Arama Menusu', y, 2);
          k(1, 'ilan detay', 'yeni', 2);
          var w = v('MS1'),
            r = v('MS2'),
            J = v('MDR'),
            y = 'shuid dopingPurchase dopingTotal dopingFrequency lastDopingPurchase lastVisit getPurchase getTotal getFrequency lastGetPurchase'.split(
              ' '
            );
          if (w) null !== r && k(1, 'MS2', r, 2);
          else {
            var w = p('gclid'),
              K = p('utm_source');
            if (w) w = 'adwords';
            else if (K) {
              if (((w = K), null === r && (r = p('utm_campaign')))) n('MS2', r), k(1, 'MS2', r, 2);
            } else w = l.referrer;
            n('MS1', w);
          }
          null !== J && k(1, 'MDR', J, 2);
          if (
            Object.prototype.hasOwnProperty.call(d, 'pageTrackData') &&
            (pageTrackData.hasOwnProperty('view') &&
              pageTrackData.view &&
              k(1, 'pageType', pageTrackData.view, 2),
            pageTrackData.hasOwnProperty('customVars') && pageTrackData.customVars)
          )
            for (n = 0; n < pageTrackData.customVars.length; n++)
              (p = pageTrackData.customVars[n]), k(1, h(p.name), p.value ? p.value : '', 2);
          n = null === v('shuid') ? 0 : 1;
          k(1, 'ULS', n, 2);
          for (n = 0; n < y.length; n++) (p = y[n]), (r = v(p)), null !== r && k(1, p, r, 2);
          (function () {
            var a = parseInt(v('vid'), 10) / 10;
            k(1, 'bestmatch-alisveris', 0 < a && 2 > a ? 'a-2' : 'b-98', 2);
            k(1, 'ab-alisveris_sifir_ikinciel', 0 < a && 50 > a ? 'a-50' : 'b-50', 2);
          })();
          (function (a, b, c, e, d) {
            a[e] = a[e] || [];
            a[e].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            a = b.getElementsByTagName(c)[0];
            b = b.createElement(c);
            b.async = !0;
            b.src =
              '//www.googletagmanager.com/gtm.js?id=' + d + ('dataLayer' != e ? '&l=' + e : '');
            a.parentNode.insertBefore(b, a);
          })(d, l, 'script', 'dataLayer', 'GTM-58T6ZP');
          (function (a) {
            var b = O(function () {
              'complete' === l.readyState && (a(), b.clear());
            }, 1);
          })(I);
          d.gaTrackPageview = m;
          d.gaReinitializeAndTrackPageview = function () {
            A = !1;
            I();
          };
          d.gaTrackEvent = B;
          d.gaTrackEventWithCallback = function (a, b, c, e, d, f) {
            B(a, b, c, e, f);
            x = function () {
              d && d();
            };
            setTimeout(x, 500);
          };
          d.gaHitCallback = function () {
            x && (x(), (x = null));
          };
          d.gaSetCustomVar = k;
          d.gaAddItem = function (a, b, c, e, d, f) {
            gtm_products.push({ sku: b, name: c, category: e, price: d, quantity: f });
          };
          d.gaAddTrans = function (a, b, c, e, d) {
            g({
              transactionId: a,
              transactionTotal: c,
              transactionShipping: d,
              transactionTax: e,
              transactionProducts: gtm_products,
              event: 'transaction',
            });
          };
          d.gaTrackTrans = function () {
            m('_trackTrans');
          };
          d.slugify = h;
          d.gaTrackPostad = z.postad;
          d.gaTrackPayment = z.payment;
          d.gaTrackCustomEvent = function (a, b, c, d, f) {
            f = f ? f : 0;
            g({ Category: b, Action: c, Label: h(d), Value: f, event: a });
          };
          d.gaTriggerEvent = G;
          d.gaOnEvent = function (a, b) {
            l.addEventListener('shbdn-' + a, function (a) {
              a.__eventData || (a.__eventData = {});
              b.call(this, a.__eventData);
            });
          };
        }.apply(this, arguments);
      } finally {
        if ($___old_55b5cd7e129918f9)
          ({}.constructor.defineProperty(Document.prototype, 'cookie', $___old_55b5cd7e129918f9));
      }
    })(window, document);
  })();
}
