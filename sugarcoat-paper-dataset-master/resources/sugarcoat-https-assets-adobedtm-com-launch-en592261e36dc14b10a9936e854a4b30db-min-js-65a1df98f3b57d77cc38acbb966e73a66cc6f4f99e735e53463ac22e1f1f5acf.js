var _satellite;
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
    !(function () {
      (window._satellite = window._satellite || {}),
        (window._satellite.container = {
          buildInfo: {
            minified: !0,
            buildDate: '2020-11-26T23:07:53Z',
            environment: 'production',
            turbineBuildDate: '2020-08-10T20:14:17Z',
            turbineVersion: '27.0.0',
          },
          dataElements: {
            DL_Contatore_Numero_Ricerche_Spedizioni: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.contatore_nr_ricerche_sped' },
            },
            DL_wp_post_cat_name: {
              defaultValue: '',
              forceLowerCase: !0,
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $('meta[name=wp_post_cat_name]').attr('content');
                },
              },
            },
            DL_importo_trasferito: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.importo_trasferito' },
            },
            DL_E2E_simu_importo: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.E2E_simu_importo' },
            },
            DL_rpol_seg_flg_noprodotti: {
              defaultValue: 'ND',
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rpol_seg_flg_noprodotti' },
            },
            DL_merchandising_operationType: {
              defaultValue: '',
              forceLowerCase: !0,
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.merchandising_operationType' },
            },
            DL_merchandising_order_id: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.merchandising_order_id' },
            },
            DL_merchandising_id_prodotto: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.merchandising_id_prodotto' },
            },
            DL_merchandising_price: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.merchandising_price' },
            },
            DL_rpol_seg_flg_SmartDispoIban: {
              defaultValue: 'ND',
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rpol_seg_flg_SmartDispoIban' },
            },
            DL_tipologia_buono: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.tipologia_buono' },
            },
            DL_PMONEY_orizzonte_investimento: {
              defaultValue: '',
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.e2e_wth_orizzonte_investimento' },
            },
            DL_flag_contatto: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.flag_contatto' },
            },
            DL_Cerca_Testo_Cercato: {
              defaultValue: '',
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.text_searched' },
            },
            DL_rpol_seg_flg_SmartInfoSiTel: {
              defaultValue: 'ND',
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rpol_seg_flg_SmartInfoSiTel' },
            },
            DL_rpol_importo_Bfp_calcolo: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rpol_importo_Bfp_calcolo' },
            },
            DL_data_nascita: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.data_nascita' },
            },
            DL_importo: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.importo' },
            },
            'PosteIt[Coll]': {
              defaultValue: '',
              modulePath: 'report-suite-selector/src/lib/dataElements/selectReportSuite.js',
              settings: { reportSuite: 'posteapp.dev.overall.poste.italiane' },
            },
            DL_rpol_tipo_accantonamento: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rpol_tipo_accantonamento' },
            },
            DL_targa_auto: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.targa' },
            },
            DL_metodo_pagamento: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.metodo_pagamento' },
            },
            DL_E2E_contatore_cta_acquista: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.E2E_contatore_cta_acquista' },
            },
            DL_rpol_seg_flg_SmartInfoNoTelSiCC: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rpol_seg_flg_SmartInfoNoTelSiCC' },
            },
            DL_importo_buono: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.importo_buono' },
            },
            DL_alias_page_plain: {
              defaultValue: '',
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.alias_page' },
            },
            DL_importo_ricarica: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.importo_ricarica' },
            },
            DL_mail: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.mail' },
            },
            DL_provincia: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.provincia' },
            },
            DL_gestore_telefonico: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.gestore_telefonico' },
            },
            DL_dataScadenzaPolizza: {
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return dataLayer.dataScadenzaPolizza + '';
                },
              },
            },
            DL_importo_girofondo: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.importo_girofondo' },
            },
            DL_nr_cellulare: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.cellulare' },
            },
            DL_importo_ricarica_postepay: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.importo_ricarica_postepay' },
            },
            DL_environment: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return _satellite.buildInfo.environment;
                },
              },
            },
            DL_techID: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.techid' },
            },
            DL_HybApp_title: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.poste_app.title' },
            },
            DL_rpol_seg_flg_SmartInfoNoTel: {
              defaultValue: 'ND',
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rpol_seg_flg_SmartInfoNoTel' },
            },
            DL_E2E_simu_prodotto: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.E2E_simu_prodotto' },
            },
            DL_migr_id_privata_tipo_utente: {
              defaultValue: '',
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.migr_id_privata_tipo_utente' },
            },
            DL_Step_Number: {
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.scenario_step' },
            },
            'PosteIt[Dev]': {
              defaultValue: '',
              modulePath: 'report-suite-selector/src/lib/dataElements/selectReportSuite.js',
              settings: { reportSuite: 'posteapp.dev.overall.poste.italiane' },
            },
            DL_strumento_certificazione: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.strumento_certificazione' },
            },
            DL_mdp_strumento_autorizzativo: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.mdp_strumento_autorizzativo' },
            },
            DL_merchandising_operationType_VOL: {
              defaultValue: '',
              forceLowerCase: !0,
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.poste_app.merchandising_operationType' },
            },
            DL_usr_id: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return _satellite.getVar('DL_Library_LaunchSetting').userid;
                },
              },
            },
            DL_merchandising_product_set: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.merchandising_product_set' },
            },
            DL_met_autorizzativo: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.met_autorizzativo' },
            },
            DL_importo_buono_rimborsato: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.importo_buono_rimborsato' },
            },
            DL_rpol_tipo_buoni: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rpol_tipo_buoni' },
            },
            DL_PMONEY_linea_investimento: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.e2e_wth_linea_investimento' },
            },
            DL_alias_page: {
              defaultValue: '',
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.alias_page' },
            },
            DL_rpol_tipo_bfp: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rpol_tipo_bfp' },
            },
            DL_Contatore_Numero_Risultati_Spedizioni: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.contatore_nr_risultati_sped' },
            },
            DL_merchandising_quantity: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.merchandising_quantity' },
            },
            DL_Configuration_Assistente_Pixie: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return {
                    'postepay.poste.it/professionisti-imprese/postepay-evolution-business.html':
                      'prelogin',
                    'postepay.poste.it/prodotti/postepay-evolution.html': 'prelogin',
                    'postepay.poste.it/prodotti/postepay-standard.html': 'prelogin',
                    'www.poste.it/iostudio-postepay.html': 'prelogin',
                    'postepay.poste.it/gamma/carte-postepay.html': 'prelogin',
                    'buonielibretti.poste.it/accedi-registrati-online.html': 'prelogin',
                    'buonielibretti.poste.it/calcolatore-buoni.html': 'prelogin',
                    'www.poste.it/scrivici/index.html': 'prelogin',
                    'postepay.poste.it/': 'prelogin',
                    'www.poste.it/chatta-con-noi.html': 'prelogin',
                    'www.poste.it/cerca-up-pensione/index.html': 'prelogin',
                    'anticipazionecig.poste.it/': 'prelogin',
                    'www.poste.it/assistente-digitale-poste.html': 'prelogin',
                    'www.poste.it/myposte/index.html': 'postlogin',
                    'postepay.poste.it/ppay/private/pages/ricarica-postepay.html': 'postlogin',
                    'postepay.poste.it/ppay/private/pages/ricarica-telefonica.html': 'postlogin',
                    'postepay.poste.it/ppay/private/pages/bonifico-sepa.html': 'postlogin',
                    'postepay.poste.it/ppay/private/pages/postagiro.html': 'postlogin',
                    'postepay.poste.it/professionisti-imprese/postepay-corporate.html': 'prelogin',
                    'postepay.poste.it/professionisti-imprese/postepay-impresa.html': 'prelogin',
                    'postepay.poste.it/professionisti-imprese/postepay-virtual.html': 'prelogin',
                    'www.poste.it/faq-conti-e-carte.html': 'prelogin',
                    'www.poste.it/prodotti/conto-corrente-bancoposta.html': 'prelogin',
                    'www.poste.it/prodotti/conto-corrente-bancoposta-di-base.html': 'prelogin',
                    'www.poste.it/gamma/servizi-accessori-ai-conti-bancoposta.html': 'prelogin',
                    'www.poste.it/gamma/conti-correnti-bancoposta.html': 'prelogin',
                    'www.poste.it/prodotti/bonifici-sepa-e-postagiro.html': 'prelogin',
                    'bancoposta.poste.it/bpol/public/BPOL_ListaMovimentiAPP/index.html':
                      'postlogin',
                    'bancoposta.poste.it/bpol/public/BPOL_BonificoSEPAAPP/index.html': 'postlogin',
                    'bancoposta.poste.it/bpol/public/BPOL_BonificoSEPADetrazioniAPP/index.html':
                      'postlogin',
                    'bancoposta.poste.it/bpol/public/bonifico-tesoreria.html': 'postlogin',
                    'bancoposta.poste.it/bpol/public/BPOL_PostagiroAPP/index.html': 'postlogin',
                    'routerfibraintranet-route-fibra.app.coll2.ocprm.testposte/fibra-customer-identification':
                      'postlogin',
                    'routerfibraintranet-route-fibra.app.coll2.ocprm.testposte/fibra-contractualization':
                      'postlogin',
                    'router-fibra-coll.retecert.postecert/fibra-customer-identification':
                      'postlogin',
                    'router-fibra-coll.retecert.postecert/fibra-contractualization': 'postlogin',
                    'routerfibraintranet-route-fibra.app.gpweb2.openshift.azposte/fibra-customer-identification':
                      'prelogin',
                    'routerfibraintranet-route-fibra.app.gpweb2.openshift.azposte/fibra-contractualization':
                      'prelogin',
                    'router-fibra-prod.rete.poste/fibra-customer-identification': 'prelogin',
                    'router-fibra-prod.rete.poste/fibra-contractualization': 'prelogin',
                  };
                },
              },
            },
            DL_rpol_seg_flg_SmartDispo: {
              defaultValue: 'ND',
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rpol_seg_flg_SmartDispo' },
            },
            'pageUrl Extended': {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return location.href;
                },
              },
            },
            DL_HybApp_uri: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.poste_app.uri' },
            },
            DL_Meta_CRMU_TipologiaContenutoPagina: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $("meta[name='ADB.TipologiaContenutoPagina']").attr('content');
                },
              },
            },
            DL_E2E_simu_interazioni: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.E2E_simu_interazioni' },
            },
            DL_Meta_CRMU_SegmentoClientela: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $("meta[name='ADB.SegmentoClientela']").attr('content');
                },
              },
            },
            DL_E2E_simu_categoria: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.E2E_simu_categoria' },
            },
            DL_stato_user_e2e_risparmio: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.stato_user_e2e_risparmio' },
            },
            pageUrl: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  var e = '/',
                    t = location.host,
                    a = location.href;
                  return (
                    '/index.html' != location.pathname && (e = location.pathname),
                    0 < a.indexOf('jod-portal/decorator') &&
                    0 < a.toLowerCase().indexOf('.shtml%7c')
                      ? ((e = a.replace(
                          a.substring(a.toLowerCase().indexOf('.shtml%7c'), a.length),
                          '.shtml'
                        )),
                        _satellite.notify('[DEBUG] - JodPortal: ' + e),
                        e)
                      : (_satellite.notify('[DEBUG] - StandardUrl: ' + [t, e].join('')),
                        [t, e].join(''))
                  );
                },
              },
            },
            pageName: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/pageInfo.js',
              settings: { attribute: 'title' },
            },
            DL_tipologia: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.tipologia' },
            },
            QS_flag_profilazione: {
              defaultValue: '0',
              modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
              settings: { name: 'fp', caseInsensitive: !0 },
            },
            QS_vid: {
              defaultValue: '0',
              modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
              settings: { name: 'vid', caseInsensitive: !0 },
            },
            DL_flag_profilazione: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return _satellite.getVar('DL_Library_LaunchSetting').flag_profilazione;
                },
              },
            },
            DL_merchandising_desc_prodotto_VOL: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.poste_app.merchandising_desc_prodotto' },
            },
            DL_e2e_prodotto_scelto_simulatore: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.e2e_prodotto_scelto_simulatore' },
            },
            'Query Parameter Campaign': {
              defaultValue: '',
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/queryStringParameter.js',
              settings: { name: 'stz', caseInsensitive: !0 },
            },
            DL_Meta_CRMU_LivelloQuattroCatalogo: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $("meta[name='ADB.LivelloQuattroCatalogo']").attr('content');
                },
              },
            },
            DL_Step_URI: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  var e = '/',
                    t = location.host;
                  return (
                    '/index.html' != location.pathname && (e = location.pathname),
                    [t, e].join('').split('.html')[0] +
                      '-' +
                      _satellite.getVar('DL_Scenario_Name').replace(/\s+/g, '_') +
                      '-' +
                      _satellite.getVar('DL_Step_Number') +
                      '.html'
                  );
                },
              },
            },
            DL_rpol_importo_buono: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.rpol_importo_buono' },
            },
            DL_Meta_CRMU_CodLivelloTreCatalogo: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $("meta[name='ADB.CodLivelloTreCatalogo']").attr('content');
                },
              },
            },
            DL_HybApp_group: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.poste_app.gruppo' },
            },
            DL_wp_rating_count: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $('meta[name=wp_rating_count]').attr('content');
                },
              },
            },
            DL_wp_comments_count: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $('meta[name=wp_comments_count]').attr('content');
                },
              },
            },
            DL_PIC_rendicontazione_profilo: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.rendicontazione_profilo' },
            },
            DL_Meta_CRMU_AreaSito: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $("meta[name='ADB.AreaSito']").attr('content');
                },
              },
            },
            DL_mdp_metodo_di_pagamento: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.mdp_metodo_di_pagamento' },
            },
            DL_PMONEY_importo_investimento: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.e2e_wth_importo_investimento' },
            },
            DL_profilo_utente: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'session',
              modulePath: 'lookup-table-utility/src/lib/dataElements/lookupTable.js',
              settings: {
                lookupArray: [
                  { input: 'LP', output: 'Libero Professionista' },
                  { input: 'SD', output: 'Società e Ditte' },
                ],
                inputVariable: { value: 'dataLayer.profilo_utente', dataElement: !1 },
              },
            },
            DL_Library_LaunchSetting: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  var e = {
                    userid: '',
                    flag_profilazione: '',
                    checkUserid: function () {
                      if (0 != _satellite.getVar('QS_vid')) {
                        var e = _satellite.getVar('QS_vid'),
                          t =
                            '0' == _satellite.getVar('QS_flag_profilazione')
                              ? 28 == e.length
                                ? 'SI'
                                : 'NO'
                              : _satellite.getVar('QS_flag_profilazione');
                        _satellite.cookie.set(
                          'LaunchSetting',
                          { usr_id: e, flag_profilazione: t },
                          { domain: '.poste.it' }
                        ),
                          (this.userid = e),
                          (this.flag_profilazione = t),
                          _satellite.logger.log(
                            'Variabile querystring presente, valorizzata e cookie settato'
                          );
                      } else
                        'undefined' != typeof dataLayer && 'undefined' != typeof dataLayer.usr_id
                          ? 0 != dataLayer.usr_id.length &&
                            (_satellite.cookie.set(
                              'LaunchSetting',
                              {
                                usr_id: dataLayer.usr_id,
                                flag_profilazione: dataLayer.flag_profilazione,
                              },
                              { domain: '.poste.it' }
                            ),
                            (this.userid = dataLayer.usr_id),
                            (this.flag_profilazione = dataLayer.flag_profilazione),
                            _satellite.logger.log(
                              'Variabile presente, valorizzata e cookie settato'
                            ))
                          : void 0 !== _satellite.cookie.get('LaunchSetting')
                          ? 0 != _satellite.cookie.get('LaunchSetting').length
                            ? ((this.userid = JSON.parse(
                                _satellite.cookie.get('LaunchSetting')
                              ).usr_id),
                              (this.flag_profilazione = JSON.parse(
                                _satellite.cookie.get('LaunchSetting')
                              ).flag_profilazione),
                              _satellite.logger.log(
                                'Variabile non presente e cookie presente e valorizzato'
                              ))
                            : ((this.userid = ''),
                              (this.flag_profilazione = ''),
                              _satellite.logger.log(
                                'Variabili non presenti e cookie presente ma non valorizzato'
                              ))
                          : ((this.userid = ''),
                            (this.flag_profilazione = ''),
                            _satellite.logger.log('Variabili non presenti e cookie non presente'));
                    },
                  };
                  return e.checkUserid(), e;
                },
              },
            },
            DL_tagbuildversion: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return _satellite.buildInfo.buildDate;
                },
              },
            },
            DL_url_referrer: {
              defaultValue: '',
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/pageInfo.js',
              settings: { attribute: 'referrer' },
            },
            DL_Meta_CRMU_CodLivelloQuattroCatalogo: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $("meta[name='ADB.CodLivelloQuattroCatalogo']").attr('content');
                },
              },
            },
            DL_Scenario_Name: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.scenario_name' },
            },
            DL_PMONEY_strumento_regolamento: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.e2e_wth_strumento_regolamento' },
            },
            DL_Meta_CRMU_AreaBusiness: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $("meta[name='ADB.AreaBusiness']").attr('content');
                },
              },
            },
            'PosteIt[Prod]': {
              defaultValue: '',
              modulePath: 'report-suite-selector/src/lib/dataElements/selectReportSuite.js',
              settings: { reportSuite: 'posteapp.overall.poste.italiane' },
            },
            DL_text_err_alert: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.text_err_alert' },
            },
            DL_merchandising_desc_prodotto_dettaglio: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.merchandising_desc_prodotto_dettaglio' },
            },
            DL_tipo_carta: {
              defaultValue: '',
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.tipo_carta' },
            },
            DL_merchandising_desc_prodotto: {
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.merchandising_desc_prodotto' },
            },
            DL_cta_star: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.cta_star' },
            },
            DL_Configuration_Survey_Aiutaci_Standard: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  var e = '',
                    t = '';
                  try {
                    t =
                      (e = JSON.parse(_satellite.cookie.get('LaunchSetting'))).usr_id +
                      '---' +
                      e.flag_profilazione;
                  } catch (a) {
                    e = '';
                  }
                  return {
                    'https://www.poste.it/myposte/index.html#/cruscotto': {
                      anchorLink:
                        '.main-pills.main-pills-basic.myposte-favorite-to-modifiy.spacer-xs-bottom-30',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/BP-MyPoste?pagina=' + t,
                    },
                    'https://bancoposta.poste.it/bpol/public/homeBanking.html': {
                      anchorLink: '.myposte-cards',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/BP-HomeBanking?pagina=' + t,
                    },
                    'https://bancoposta.poste.it/bpol/public/BPOL_ListaMovimentiAPP/index.html': {
                      anchorLink: '.col-md-9.col-structure.ng-scope',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/BP-Saldo-movimenti-conto?pagina=' +
                        t,
                    },
                    'https://bancoposta.poste.it/bpol/public/BPOL_BonificoSEPAAPP/index.html': {
                      scenario_name: 'Bonifico Sepa',
                      scenario_step: '3',
                      anchorLink: '.main-pills-wrap',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/BP-BonificoSepa?pagina=' + t,
                    },
                    'https://bancoposta.poste.it/bpol/public/BPOL_PostagiroAPP/index.html': {
                      scenario_name: 'Postagiro',
                      scenario_step: '3',
                      anchorLink: '.main-pills-wrap',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/BP-Postagiro?pagina=' + t,
                    },
                    'https://bancoposta.poste.it/bpol/public/BPOL_BonificoSEPADetrazioniAPP/index.html': {
                      scenario_name: 'Bonifico Sepa per Detrazione',
                      scenario_step: '3',
                      anchorLink: '.main-pills-wrap',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/BP-BonificoSepa-detrazioni-fiscali?pagina=' +
                        t,
                    },
                    'https://bancoposta.poste.it/bpol/public/BPOL_GirofondoAPP/index.html': {
                      scenario_name: 'Girofondo',
                      scenario_step: '3',
                      anchorLink: '.main-pills-wrap',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/BP-Girofondo?pagina=' + t,
                    },
                    'https://bancoposta.poste.it/bpol/public/BPOL_RicaricaTelefonicaAPP/index.html': {
                      scenario_name: 'Ricarica telefonica',
                      scenario_step: '4',
                      anchorLink: '.main-pills-wrap',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/BP-Ricarichetelefoniche?pagina=' +
                        t,
                    },
                    'https://pagamenti.poste.it/cs/PT/esito_vc2_ok.html': {
                      anchorLink: '.main-pills-wrap',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/BP-Pagamento?pagina=' + t,
                    },
                    'https://risparmiopostaleonline.poste.it/rpol/private/pages/index.html': {
                      anchorLink: '.main-pills-wrap',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/CDP-Risparmio-postale-online?pagina=?pagina=' +
                        t,
                    },
                    'https://postepay.poste.it/ppay/private/pages/index.html': {
                      anchorLink: '.content-rpol',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/PP-Area-Postepay?pagina=' +
                        t,
                    },
                    'https://postepay.poste.it/ppay/private/pages/landing.html': {
                      anchorLink: '.content-rpol',
                      ctaLink:
                        'https://aiutaciamigliorare.poste.it/sondaggi/PP-Landing?pagina=' + t,
                    },
                  };
                },
              },
            },
            DL_Meta_CRMU_LivelloTreCatalogo: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/customCode.js',
              settings: {
                source: function () {
                  return $("meta[name='ADB.LivelloTreCatalogo']").attr('content');
                },
              },
            },
            DL_tipo_offerta_acquistata: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.funnel.tipo_offerta_acquistata' },
            },
            DL_tipologia_pacco_spedito: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.tipologia_pacco_spedito' },
            },
            DL_Transaction_ID: {
              defaultValue: '',
              forceLowerCase: !0,
              cleanText: !0,
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.transaction_id' },
            },
            DL_touch_point_web: {
              modulePath: 'core/src/lib/dataElements/constant.js',
              settings: { value: 'WEB' },
            },
            DL_event_myposteVita_avvenuto_riconoscimento: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.event_myposteVita_avvenuto_riconoscimento' },
            },
            DL_event_myposteVita_avvenuta_richiesta_lettere: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.event_myposteVita_avvenuta_richiesta_lettere' },
            },
            DL_event_myposteVita_avvenuta_richiesta_isee: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.event_myposteVita_avvenuta_richiesta_isee' },
            },
            DL_modalità_riconoscimento: {
              defaultValue: '',
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.modalita_riconoscimento' },
            },
            DL_PDW_flag_paperless: {
              defaultValue: '',
              storageDuration: 'session',
              modulePath: 'core/src/lib/dataElements/javascriptVariable.js',
              settings: { path: 'dataLayer.flag_paperless' },
            },
          },
          extensions: {
            'report-suite-selector': {
              displayName: 'Adobe Report Suite Selector',
              modules: {
                'report-suite-selector/src/lib/dataElements/selectReportSuite.js': {
                  name: 'select-report-suite',
                  displayName: 'Select Report Suite',
                  script: function (e) {
                    'use strict';
                    e.exports = function (e) {
                      return e.reportSuite;
                    };
                  },
                },
              },
              hostedLibFilesBaseUrl:
                'https://assets.adobedtm.com/extensions/EPded6ad5edf7d46b1a2887388a8c59061/',
            },
            'adobe-analytics': {
              displayName: 'Adobe Analytics',
              modules: {
                'adobe-analytics/src/lib/actions/sendBeacon.js': {
                  name: 'send-beacon',
                  displayName: 'Send Beacon',
                  script: function (e, t, a, n) {
                    'use strict';
                    var r = a('../sharedModules/getTracker'),
                      i = function (e) {
                        return e && e.nodeName && 'a' === e.nodeName.toLowerCase();
                      },
                      o = function (e) {
                        return i(e) ? e.innerHTML : 'link clicked';
                      },
                      s = function (e, t, a) {
                        if ('page' === t.type) n.logger.info('Firing page view beacon.'), e.t();
                        else {
                          var r = { linkType: t.linkType || 'o', linkName: t.linkName || o(a) };
                          n.logger.info(
                            'Firing link track beacon using the values: ' + JSON.stringify(r) + '.'
                          ),
                            e.tl(i(a) ? a : 'true', r.linkType, r.linkName);
                        }
                      };
                    e.exports = function (t, a) {
                      return r().then(
                        function (e) {
                          s(e, t, a.element);
                        },
                        function (e) {
                          n.logger.error('Cannot send beacon: ' + e);
                        }
                      );
                    };
                  },
                },
                'adobe-analytics/src/lib/actions/setVariables.js': {
                  name: 'set-variables',
                  displayName: 'Set Variables',
                  script: function (e, t, a, r) {
                    'use strict';
                    var n = a('../sharedModules/getTracker'),
                      i = a('../helpers/applyTrackerVariables');
                    e.exports = function (t, a) {
                      return n().then(
                        function (e) {
                          r.logger.info('Set variables on the tracker.'),
                            i(e, t.trackerProperties),
                            t.customSetup &&
                              t.customSetup.source &&
                              t.customSetup.source.call(a.element, a, e);
                        },
                        function (e) {
                          r.logger.error('Cannot set variables: ' + e);
                        }
                      );
                    };
                  },
                },
                'adobe-analytics/src/lib/actions/clearVariables.js': {
                  name: 'clear-variables',
                  displayName: 'Clear Variables',
                  script: function (e, t, a, r) {
                    'use strict';
                    var n = a('../sharedModules/getTracker');
                    e.exports = function () {
                      return n().then(
                        function (e) {
                          e.clearVars && (r.logger.info('Clear variables.'), e.clearVars());
                        },
                        function (e) {
                          r.logger.error('Cannot clear variables: ' + e);
                        }
                      );
                    };
                  },
                },
                'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                  script: function (e, t, a, r) {
                    'use strict';
                    var n = a('@adobe/reactor-cookie'),
                      i = a('@adobe/reactor-promise'),
                      o = a('@adobe/reactor-window'),
                      s = a('../helpers/settingsHelper'),
                      l = a('../helpers/augmenters'),
                      c = a('../helpers/applyTrackerVariables'),
                      u = a('../helpers/loadLibrary'),
                      p = a('../helpers/generateVersion')(r.buildInfo.turbineBuildDate),
                      d = 'beforeSettings',
                      m = r.getSharedModule('adobe-mcid', 'mcid-instance'),
                      _ = function (e) {
                        return !e || 'true' === n.get(e);
                      },
                      v = function (r) {
                        return i
                          .all(
                            l.map(function (e) {
                              var t;
                              try {
                                t = e(r);
                              } catch (a) {
                                setTimeout(function () {
                                  throw a;
                                });
                              }
                              return i.resolve(t);
                            })
                          )
                          .then(function () {
                            return r;
                          });
                      },
                      g = function (e) {
                        return (
                          m &&
                            (r.logger.info('Setting MCID instance on the tracker.'),
                            (e.visitor = m)),
                          e
                        );
                      },
                      f = function (e) {
                        return (
                          r.logger.info('Setting version on tracker: "' + p + '".'),
                          'undefined' != typeof e.tagContainerMarker
                            ? (e.tagContainerMarker = p)
                            : 'string' == typeof e.version &&
                              e.version.substring(e.version.length - 5) !== '-' + p &&
                              (e.version += '-' + p),
                          e
                        );
                      },
                      b = function (e, t, a) {
                        return (
                          t.loadPhase === d &&
                            t.source &&
                            (r.logger.info('Calling custom script before settings.'),
                            t.source.call(o, a)),
                          c(a, e || {}),
                          t.loadPhase !== d &&
                            t.source &&
                            (r.logger.info('Calling custom script after settings.'),
                            t.source.call(o, a)),
                          a
                        );
                      },
                      h = function (e, t) {
                        return (
                          s.isAudienceManagementEnabled(e) &&
                            (t.loadModule('AudienceManagement'),
                            r.logger.info('Initializing AudienceManagement module'),
                            t.AudienceManagement.setup(e.moduleProperties.audienceManager.config)),
                          t
                        );
                      },
                      y = (function (e) {
                        return _(e.trackingCookieName)
                          ? u(e)
                              .then(v)
                              .then(g)
                              .then(f)
                              .then(b.bind(null, e.trackerProperties, e.customSetup || {}))
                              .then(h.bind(null, e))
                          : i.reject('EU compliance was not acknowledged by the user.');
                      })(r.getExtensionSettings());
                    e.exports = function () {
                      return y;
                    };
                  },
                  name: 'get-tracker',
                  shared: !0,
                },
                'adobe-analytics/src/lib/sharedModules/augmentTracker.js': {
                  name: 'augment-tracker',
                  shared: !0,
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('../helpers/augmenters');
                    e.exports = function (e) {
                      r.push(e);
                    };
                  },
                },
                'adobe-analytics/src/lib/helpers/settingsHelper.js': {
                  script: function (e, t, a, r) {
                    'use strict';
                    var n = a('@adobe/reactor-window'),
                      i = {
                        LIB_TYPES: {
                          MANAGED: 'managed',
                          PREINSTALLED: 'preinstalled',
                          REMOTE: 'remote',
                          CUSTOM: 'custom',
                        },
                        MANAGED_LIB_PATHS: {
                          APP_MEASUREMENT: 'AppMeasurement.js',
                          ACTIVITY_MAP: 'AppMeasurement_Module_ActivityMap.js',
                          AUDIENCE_MANAGEMENT: 'AppMeasurement_Module_AudienceManagement.js',
                        },
                        getReportSuites: function (e) {
                          var t = e.production;
                          return (
                            e[r.buildInfo.environment] && (t = e[r.buildInfo.environment]),
                            t.join(',')
                          );
                        },
                        isActivityMapEnabled: function (e) {
                          return !(
                            e.libraryCode &&
                            !e.libraryCode.useActivityMap &&
                            !1 === e.libraryCode.useActivityMap
                          );
                        },
                        isAudienceManagementEnabled: function (e) {
                          var t = !1;
                          return (
                            e &&
                              e.moduleProperties &&
                              e.moduleProperties.audienceManager &&
                              e.moduleProperties.audienceManager.config &&
                              n &&
                              n._satellite &&
                              n._satellite.company &&
                              n._satellite.company.orgId &&
                              (t = !0),
                            t
                          );
                        },
                      };
                    e.exports = i;
                  },
                },
                'adobe-analytics/src/lib/helpers/augmenters.js': {
                  script: function (e) {
                    'use strict';
                    e.exports = [];
                  },
                },
                'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                  script: function (e, t, a, o) {
                    'use strict';
                    var n = a('@adobe/reactor-query-string'),
                      i = a('@adobe/reactor-window'),
                      s = /eVar([0-9]+)/,
                      l = /prop([0-9]+)/,
                      c = new RegExp(
                        '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                      ),
                      u = function (e, t, a) {
                        return a.indexOf(e) === t;
                      },
                      p = function (e, t, a) {
                        var r = Object.keys(t).filter(c.test.bind(c));
                        return (
                          a && r.push('events'),
                          (r = r.concat((e.linkTrackVars || '').split(',')))
                            .filter(function (e, t) {
                              return 'None' !== e && e && u(e, t, r);
                            })
                            .join(',')
                        );
                      },
                      d = function (e, t) {
                        var a = t.map(function (e) {
                          return e.name;
                        });
                        return (a = a.concat((e.linkTrackEvents || '').split(',')))
                          .filter(function (e, t) {
                            return 'None' !== e && u(e, t, a);
                          })
                          .join(',');
                      },
                      r = function (e, t, a) {
                        e[t] = a[t].join(',');
                      },
                      m = function (n, e, t) {
                        var i = t.dynamicVariablePrefix || 'D=';
                        t[e].forEach(function (e) {
                          var t;
                          if ('value' === e.type) t = e.value;
                          else {
                            var a = s.exec(e.value);
                            if (a) t = i + 'v' + a[1];
                            else {
                              var r = l.exec(e.value);
                              r && (t = i + 'c' + r[1]);
                            }
                          }
                          n[e.name] = t;
                        });
                      },
                      _ = {
                        linkDownloadFileTypes: r,
                        linkExternalFilters: r,
                        linkInternalFilters: r,
                        hierarchies: function (t, e, a) {
                          a[e].forEach(function (e) {
                            t[e.name] = e.sections.join(e.delimiter);
                          });
                        },
                        props: m,
                        eVars: m,
                        campaign: function (e, t, a) {
                          if ('queryParam' === a[t].type) {
                            var r = n.parse(i.location.search);
                            e[t] = r[a[t].value];
                          } else e[t] = a[t].value;
                        },
                        events: function (e, t, a) {
                          var r = a[t].map(function (e) {
                            var t = e.name;
                            return (
                              e.id && (t = [t, e.id].join(':')),
                              e.value && (t = [t, e.value].join('=')),
                              t
                            );
                          });
                          e[t] = r.join(',');
                        },
                      };
                    e.exports = function (t, r) {
                      var n = {};
                      (r = r || {}),
                        Object.keys(r).forEach(function (e) {
                          var t = _[e],
                            a = r[e];
                          t ? t(n, e, r) : (n[e] = a);
                        }),
                        n.events &&
                          t.events &&
                          0 < t.events.length &&
                          (n.events = t.events + ',' + n.events);
                      var e = r && r.events && 0 < r.events.length,
                        a = p(t, n, e);
                      a && (n.linkTrackVars = a);
                      var i = d(t, r.events || []);
                      i && (n.linkTrackEvents = i),
                        o.logger.info(
                          'Applying the following properties on tracker: "' +
                            JSON.stringify(n) +
                            '".'
                        ),
                        Object.keys(n).forEach(function (e) {
                          t[e] = n[e];
                        });
                    };
                  },
                },
                'adobe-analytics/src/lib/helpers/loadLibrary.js': {
                  script: function (e, t, a, r) {
                    'use strict';
                    var n = a('@adobe/reactor-load-script'),
                      i = a('@adobe/reactor-window'),
                      o = a('@adobe/reactor-promise'),
                      s = a('./settingsHelper'),
                      l = a('./pollHelper'),
                      c = function (e, t) {
                        if (!i.s_gi)
                          throw new Error(
                            'Unable to create AppMeasurement tracker, `s_gi` function not found.' +
                              i.AppMeasurement
                          );
                        r.logger.info(
                          'Creating AppMeasurement tracker with these report suites: "' + t + '"'
                        );
                        var a = i.s_gi(t);
                        return (
                          e.libraryCode.scopeTrackerGlobally &&
                            (r.logger.info('Setting the tracker as window.s'), (i.s = a)),
                          a
                        );
                      },
                      u = function (e) {
                        var t = [];
                        switch (e.libraryCode.type) {
                          case s.LIB_TYPES.MANAGED:
                            t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.APP_MEASUREMENT)),
                              s.isActivityMapEnabled(e) &&
                                t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.ACTIVITY_MAP));
                            break;
                          case s.LIB_TYPES.CUSTOM:
                            t.push(e.libraryCode.source);
                            break;
                          case s.LIB_TYPES.REMOTE:
                            t.push(
                              'https:' === i.location.protocol
                                ? e.libraryCode.httpsUrl
                                : e.libraryCode.httpUrl
                            );
                        }
                        if (s.isAudienceManagementEnabled(e)) {
                          var a = { namespace: i._satellite.company.orgId };
                          (e.moduleProperties.audienceManager.config.visitorService = a),
                            t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.AUDIENCE_MANAGEMENT));
                        }
                        return t;
                      },
                      p = function (e) {
                        return o.all(
                          u(e).map(function (e) {
                            return r.logger.info('Loading script: ' + e), n(e);
                          })
                        );
                      },
                      d = function (e, t) {
                        if (e.libraryCode.accounts)
                          if (t.sa) {
                            var a = s.getReportSuites(e.libraryCode.accounts);
                            r.logger.info(
                              'Setting the following report suites on the tracker: "' + a + '"'
                            ),
                              t.sa(a);
                          } else
                            r.logger.warn(
                              'Cannot set report suites on tracker. `sa` method not available.'
                            );
                        return t;
                      },
                      m = function (e) {
                        if (i[e])
                          return r.logger.info('Found tracker located at: "' + e + '".'), i[e];
                        throw new Error('Cannot find the global variable name: "' + e + '".');
                      };
                    e.exports = function (e) {
                      var t = p(e);
                      switch (e.libraryCode.type) {
                        case s.LIB_TYPES.MANAGED:
                          var a = s.getReportSuites(e.libraryCode.accounts);
                          return t.then(c.bind(null, e, a));
                        case s.LIB_TYPES.PREINSTALLED:
                          return t
                            .then(l.poll.bind(null, i, e.libraryCode.trackerVariableName))
                            .then(d.bind(null, e));
                        case s.LIB_TYPES.CUSTOM:
                        case s.LIB_TYPES.REMOTE:
                          return t
                            .then(m.bind(null, e.libraryCode.trackerVariableName))
                            .then(d.bind(null, e));
                        default:
                          throw new Error('Cannot load library. Type not supported.');
                      }
                    };
                  },
                },
                'adobe-analytics/src/lib/helpers/generateVersion.js': {
                  script: function (e) {
                    'use strict';
                    var t = 8,
                      a = function (e) {
                        return e.getUTCDate().toString(36);
                      },
                      r = function (e) {
                        return e.substr(e.length - 1);
                      },
                      n = function (e) {
                        return Math.floor(e.getUTCHours() / t);
                      },
                      i = function (e) {
                        var t = (e.getUTCMonth() + 1 + 12 * n(e)).toString(36);
                        return r(t);
                      },
                      o = function (e) {
                        return (e.getUTCFullYear() - 2010).toString(36);
                      };
                    e.exports = function (e) {
                      var t = new Date(e);
                      if (isNaN(t)) throw new Error('Invalid date provided');
                      return ('L' + o(t) + i(t) + a(t)).toUpperCase();
                    };
                  },
                },
                'adobe-analytics/src/lib/helpers/pollHelper.js': {
                  script: function (e, t, a, r) {
                    'use strict';
                    var o = a('@adobe/reactor-promise'),
                      s = 40,
                      l = 250,
                      c = function (e, t, a) {
                        r.logger.info('Found property located at: "' + t + '"].'), e(a);
                      },
                      n = function (n, i) {
                        return new o(function (e, t) {
                          if (n[i]) return c(e, i, n[i]);
                          var a = 1,
                            r = setInterval(function () {
                              n[i] && (c(e, i, n[i]), clearInterval(r)),
                                s <= a &&
                                  (clearInterval(r),
                                  t(
                                    new Error(
                                      'Bailing out. Cannot find the variable name: "' + i + '"].'
                                    )
                                  )),
                                a++;
                            }, l);
                        });
                      };
                    e.exports = {
                      poll: function (e, t) {
                        return (
                          r.logger.info(
                            'Waiting for the property to become accessible at: "' + t + '"].'
                          ),
                          n(e, t)
                        );
                      },
                    };
                  },
                },
              },
              settings: {
                orgId: '3A3C1D085C5C70990A495CFC@AdobeOrg',
                customSetup: {
                  source: function (e) {
                    e.visitorID = _satellite.getVar('DL_usr_id');
                  },
                  loadPhase: 'beforeSettings',
                },
                libraryCode: {
                  type: 'managed',
                  accounts: {
                    staging: ['%PosteIt[Coll]%'],
                    production: ['%PosteIt[Prod]%'],
                    development: ['%PosteIt[Dev]%'],
                  },
                  useActivityMap: !0,
                  scopeTrackerGlobally: !1,
                },
                trackerProperties: {
                  eVars: [
                    { name: 'eVar2', type: 'value', value: '%pageUrl%' },
                    { name: 'eVar24', type: 'value', value: '%DL_url_referrer%' },
                    { name: 'eVar27', type: 'value', value: '%DL_flag_profilazione%' },
                    { name: 'eVar32', type: 'value', value: '%pageUrl Extended%' },
                    { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                    { name: 'eVar199', type: 'value', value: '%DL_usr_id%' },
                    { name: 'eVar200', type: 'value', value: '%DL_touch_point_web%' },
                  ],
                  props: [
                    { name: 'prop1', type: 'value', value: '%pageUrl%' },
                    { name: 'prop2', type: 'value', value: 'WEB' },
                    { name: 'prop3', type: 'alias', value: 'eVar24' },
                  ],
                  campaign: { type: 'value', value: '%Query Parameter Campaign%' },
                  pageName: '%pageName%',
                  currencyCode: 'EUR',
                  trackingServer: 'posteitalianespa.sc.omtrdc.net',
                  trackInlineStats: !0,
                  trackDownloadLinks: !0,
                  trackExternalLinks: !0,
                  linkInternalFilters: ['poste.it'],
                  trackingServerSecure: 'posteitalianespa.sc.omtrdc.net',
                  linkDownloadFileTypes: [
                    'doc',
                    'docx',
                    'eps',
                    'jpg',
                    'png',
                    'svg',
                    'xls',
                    'ppt',
                    'pptx',
                    'pdf',
                    'xlsx',
                    'tab',
                    'csv',
                    'zip',
                    'txt',
                    'vsd',
                    'vxd',
                    'xml',
                    'js',
                    'css',
                    'rar',
                    'exe',
                    'wma',
                    'mov',
                    'avi',
                    'wmv',
                    'mp3',
                    'wav',
                    'm4v',
                  ],
                },
              },
              hostedLibFilesBaseUrl:
                'https://assets.adobedtm.com/extensions/EPbde2f7ca14e540399dcc1f8208860b7b/',
            },
            core: {
              displayName: 'Core',
              modules: {
                'core/src/lib/dataElements/javascriptVariable.js': {
                  name: 'javascript-variable',
                  displayName: 'JavaScript Variable',
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('../helpers/getObjectProperty.js');
                    e.exports = function (e) {
                      return r(window, e.path);
                    };
                  },
                },
                'core/src/lib/dataElements/customCode.js': {
                  name: 'custom-code',
                  displayName: 'Custom Code',
                  script: function (e) {
                    'use strict';
                    e.exports = function (e, t) {
                      return e.source(t);
                    };
                  },
                },
                'core/src/lib/dataElements/pageInfo.js': {
                  name: 'page-info',
                  displayName: 'Page Info',
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('@adobe/reactor-document');
                    e.exports = function (e) {
                      switch (e.attribute) {
                        case 'url':
                          return r.location.href;
                        case 'hostname':
                          return r.location.hostname;
                        case 'pathname':
                          return r.location.pathname;
                        case 'protocol':
                          return r.location.protocol;
                        case 'referrer':
                          return r.referrer;
                        case 'title':
                          return r.title;
                      }
                    };
                  },
                },
                'core/src/lib/dataElements/queryStringParameter.js': {
                  name: 'query-string-parameter',
                  displayName: 'Query String Parameter',
                  script: function (e, t, a) {
                    'use strict';
                    var o = a('@adobe/reactor-window'),
                      s = a('@adobe/reactor-query-string');
                    e.exports = function (e) {
                      var t = s.parse(o.location.search);
                      if (!e.caseInsensitive) return t[e.name];
                      for (
                        var a = e.name.toLowerCase(), r = Object.keys(t), n = 0;
                        n < r.length;
                        n++
                      ) {
                        var i = r[n];
                        if (i.toLowerCase() === a) return t[i];
                      }
                    };
                  },
                },
                'core/src/lib/dataElements/constant.js': {
                  name: 'constant',
                  displayName: 'Constant',
                  script: function (e) {
                    'use strict';
                    e.exports = function (e) {
                      return e.value;
                    };
                  },
                },
                'core/src/lib/events/directCall.js': {
                  name: 'direct-call',
                  displayName: 'Direct Call',
                  script: function (e, t, a, i) {
                    'use strict';
                    var o = {};
                    (window._satellite = window._satellite || {}),
                      (window._satellite.track = function (e, t) {
                        e = e.trim();
                        var a = o[e];
                        if (a) {
                          var r = { identifier: e, detail: t };
                          a.forEach(function (e) {
                            e(r);
                          });
                          var n = [
                            'Rules using the direct call event type with identifier "' +
                              e +
                              '" have been triggered' +
                              (t ? ' with additional detail:' : '.'),
                          ];
                          t && n.push(t), i.logger.log.apply(i.logger, n);
                        } else
                          i.logger.log('"' + e + '" does not match any direct call identifiers.');
                      }),
                      (e.exports = function (e, t) {
                        var a = o[e.identifier];
                        a || (a = o[e.identifier] = []), a.push(t);
                      });
                  },
                },
                'core/src/lib/conditions/cookie.js': {
                  name: 'cookie',
                  displayName: 'Cookie',
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('@adobe/reactor-cookie'),
                      n = a('../helpers/textMatch');
                    e.exports = function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return n(r.get(e.name), t);
                    };
                  },
                },
                'core/src/lib/events/domReady.js': {
                  name: 'dom-ready',
                  displayName: 'DOM Ready',
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('./helpers/pageLifecycleEvents');
                    e.exports = function (e, t) {
                      r.registerDomReadyTrigger(t);
                    };
                  },
                },
                'core/src/lib/conditions/path.js': {
                  name: 'path',
                  displayName: 'Path Without Query String',
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('@adobe/reactor-document'),
                      n = a('../helpers/textMatch');
                    e.exports = function (e) {
                      var a = r.location.pathname;
                      return e.paths.some(function (e) {
                        var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                        return n(a, t);
                      });
                    };
                  },
                },
                'core/src/lib/actions/customCode.js': {
                  name: 'custom-code',
                  displayName: 'Custom Code',
                  script: function (e, t, a, i) {
                    'use strict';
                    var o,
                      r,
                      n,
                      s,
                      l = a('@adobe/reactor-document'),
                      c = a('@adobe/reactor-promise'),
                      u = a('./helpers/decorateCode'),
                      p = a('./helpers/loadCodeSequentially'),
                      d = a('../../../node_modules/postscribe/dist/postscribe'),
                      m = a('./helpers/unescapeHtmlCode'),
                      _ =
                        ((r = function (e) {
                          d(l.body, e, {
                            beforeWriteToken: function (t) {
                              var e = t.tagName && t.tagName.toLowerCase();
                              return (
                                o && 'script' === e && (t.attrs.nonce = o),
                                ('script' !== e && 'style' !== e) ||
                                  (Object.keys(t.attrs || {}).forEach(function (e) {
                                    t.attrs[e] = m(t.attrs[e]);
                                  }),
                                  t.src && (t.src = m(t.src))),
                                t
                              );
                            },
                            error: function (e) {
                              i.logger.error(e.msg);
                            },
                          });
                        }),
                        (n = []),
                        (s = function () {
                          if (l.body) for (; n.length; ) r(n.shift());
                          else setTimeout(s, 20);
                        }),
                        function (e) {
                          n.push(e), s();
                        }),
                      v = (function () {
                        if (l.currentScript) return l.currentScript.async;
                        for (var e = l.querySelectorAll('script'), t = 0; t < e.length; t++) {
                          var a = e[t];
                          if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(a.src))
                            return a.async;
                        }
                        return !0;
                      })();
                    e.exports = function (e, t) {
                      var a;
                      o = i.getExtensionSettings().cspNonce;
                      var r = { settings: e, event: t },
                        n = r.settings.source;
                      if (n)
                        return r.settings.isExternal
                          ? p(n).then(function (e) {
                              return e ? ((a = u(r, e)), _(a.code), a.promise) : c.resolve();
                            })
                          : ((a = u(r, n)),
                            v || 'loading' !== l.readyState
                              ? _(a.code)
                              : l.write && !1 === i.propertySettings.ruleComponentSequencingEnabled
                              ? l.write(a.code)
                              : _(a.code),
                            a.promise);
                    };
                  },
                },
                'core/src/lib/conditions/subdomain.js': {
                  name: 'subdomain',
                  displayName: 'Subdomain',
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('@adobe/reactor-document'),
                      n = a('../helpers/textMatch');
                    e.exports = function (e) {
                      var a = r.location.hostname;
                      return e.subdomains.some(function (e) {
                        var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                        return n(a, t);
                      });
                    };
                  },
                },
                'core/src/lib/conditions/variable.js': {
                  name: 'variable',
                  displayName: 'Variable',
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('../helpers/getObjectProperty'),
                      n = a('../helpers/textMatch');
                    e.exports = function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return n(r(window, e.name), t);
                    };
                  },
                },
                'core/src/lib/events/click.js': {
                  name: 'click',
                  displayName: 'Click',
                  script: function (e, t, a) {
                    'use strict';
                    var i = a('@adobe/reactor-window'),
                      o = a('./helpers/createBubbly')(),
                      s = new (a('./helpers/weakMap'))(),
                      l = function (e) {
                        for (; e; ) {
                          var t = e.tagName;
                          if (t && 'a' === t.toLowerCase()) {
                            var a = e.getAttribute('href'),
                              r = e.getAttribute('target');
                            return a &&
                              (!r ||
                                '_self' === r ||
                                ('_top' === r && i.top === i) ||
                                r === i.name)
                              ? e
                              : void 0;
                          }
                          e = e.parentNode;
                        }
                      };
                    document.addEventListener('click', o.evaluateEvent, !0),
                      (e.exports = function (r, n) {
                        o.addListener(r, function (e) {
                          var t = e.nativeEvent;
                          if (!t.s_fe) {
                            if (r.anchorDelay && !s.has(t)) {
                              var a = l(t.target);
                              a &&
                                (t.preventDefault(),
                                setTimeout(function () {
                                  i.location = a.href;
                                }, r.anchorDelay)),
                                s.set(t, !0);
                            }
                            n(e);
                          }
                        });
                      }),
                      (e.exports.__reset = o.__reset);
                  },
                },
                'core/src/lib/events/pageBottom.js': {
                  name: 'page-bottom',
                  displayName: 'Page Bottom',
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('./helpers/pageLifecycleEvents');
                    e.exports = function (e, t) {
                      r.registerPageBottomTrigger(t);
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
                'core/src/lib/events/historyChange.js': {
                  name: 'history-change',
                  displayName: 'History Change',
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('./helpers/debounce'),
                      n = a('./helpers/once'),
                      i = window.history,
                      o = window.location.href,
                      s = [],
                      l = function (t, e, a) {
                        var r = t[e];
                        t[e] = function () {
                          var e = r.apply(t, arguments);
                          return a.apply(null, arguments), e;
                        };
                      },
                      c = r(function () {
                        var e = window.location.href;
                        o !== e &&
                          (s.forEach(function (e) {
                            e();
                          }),
                          (o = e));
                      }, 0),
                      u = n(function () {
                        i &&
                          (i.pushState && l(i, 'pushState', c),
                          i.replaceState && l(i, 'replaceState', c)),
                          window.addEventListener('popstate', c),
                          window.addEventListener('hashchange', c);
                      });
                    e.exports = function (e, t) {
                      u(), s.push(t);
                    };
                  },
                },
                'core/src/lib/events/libraryLoaded.js': {
                  name: 'library-loaded',
                  displayName: 'Library Loaded (Page Top)',
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('./helpers/pageLifecycleEvents');
                    e.exports = function (e, t) {
                      r.registerLibraryLoadedTrigger(t);
                    };
                  },
                },
                'core/src/lib/helpers/getObjectProperty.js': {
                  script: function (e) {
                    'use strict';
                    e.exports = function (e, t) {
                      for (var a = t.split('.'), r = e, n = 0, i = a.length; n < i; n++) {
                        if (null == r) return undefined;
                        r = r[a[n]];
                      }
                      return r;
                    };
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
                    const $___old_281c7709f6b72ae0 = {}.constructor.getOwnPropertyDescriptor(
                      Navigator.prototype,
                      'appVersion'
                    );
                    try {
                      if ($___old_281c7709f6b72ae0)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'appVersion',
                          $___stub_47c01efa79e9f191.appVersion
                        ));
                      return function () {
                        'use strict';
                        var r = a('@adobe/reactor-window'),
                          n = a('@adobe/reactor-document'),
                          i = -1 !== r.navigator.appVersion.indexOf('MSIE 10'),
                          o = 'WINDOW_LOADED',
                          s = 'DOM_READY',
                          l = 'PAGE_BOTTOM',
                          c = [l, s, o],
                          u = function (e, t) {
                            return { element: e, target: e, nativeEvent: t };
                          },
                          p = {};
                        c.forEach(function (e) {
                          p[e] = [];
                        });
                        var d = function (e, t) {
                            c.slice(0, _(e) + 1).forEach(function (e) {
                              v(t, e);
                            });
                          },
                          m = function () {
                            return 'complete' === n.readyState
                              ? o
                              : 'interactive' === n.readyState
                              ? i
                                ? null
                                : s
                              : void 0;
                          },
                          _ = function (e) {
                            return c.indexOf(e);
                          },
                          v = function (t, e) {
                            p[e].forEach(function (e) {
                              g(t, e);
                            }),
                              (p[e] = []);
                          },
                          g = function (e, t) {
                            var a = t.trigger,
                              r = t.syntheticEventFn;
                            a(r ? r(e) : null);
                          };
                        (r._satellite = r._satellite || {}),
                          (r._satellite.pageBottom = d.bind(null, l)),
                          n.addEventListener('DOMContentLoaded', d.bind(null, s), !0),
                          r.addEventListener('load', d.bind(null, o), !0),
                          r.setTimeout(function () {
                            var e = m();
                            e && d(e);
                          }, 0),
                          (e.exports = {
                            registerLibraryLoadedTrigger: function (e) {
                              e();
                            },
                            registerPageBottomTrigger: function (e) {
                              p[l].push({ trigger: e });
                            },
                            registerDomReadyTrigger: function (e) {
                              p[s].push({ trigger: e, syntheticEventFn: u.bind(null, n) });
                            },
                            registerWindowLoadedTrigger: function (e) {
                              p[o].push({ trigger: e, syntheticEventFn: u.bind(null, r) });
                            },
                          });
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_281c7709f6b72ae0)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'appVersion',
                          $___old_281c7709f6b72ae0
                        ));
                    }
                  },
                },
                'core/src/lib/actions/helpers/decorateCode.js': {
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('./decorators/decorateGlobalJavaScriptCode'),
                      n = a('./decorators/decorateNonGlobalJavaScriptCode'),
                      i = {
                        javascript: function (e, t) {
                          return e.settings.global ? r(e, t) : n(e, t);
                        },
                        html: a('./decorators/decorateHtmlCode'),
                      };
                    e.exports = function (e, t) {
                      return i[e.settings.language](e, t);
                    };
                  },
                },
                'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('@adobe/reactor-promise'),
                      n = a('./getSourceByUrl'),
                      i = r.resolve();
                    e.exports = function (t) {
                      var e = new r(function (a) {
                        var e = n(t);
                        r.all([e, i]).then(function (e) {
                          var t = e[0];
                          a(t);
                        });
                      });
                      return (i = e);
                    };
                  },
                },
                'core/node_modules/postscribe/dist/postscribe.js': {
                  script: function (a, r) {
                    !(function n (e, t) {
                      'object' == typeof r && 'object' == typeof a
                        ? (a.exports = t())
                        : 'function' == typeof define && define.amd
                        ? define([], t)
                        : 'object' == typeof r
                        ? (r.postscribe = t())
                        : (e.postscribe = t());
                    })(this, function () {
                      return (function (a) {
                        function r (e) {
                          if (n[e]) return n[e].exports;
                          var t = (n[e] = { exports: {}, id: e, loaded: !1 });
                          return a[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports;
                        }
                        var n = {};
                        return (r.m = a), (r.c = n), (r.p = ''), r(0);
                      })([
                        function (e, t, a) {
                          'use strict';
                          function r (e) {
                            return e && e.__esModule ? e : { default: e };
                          }
                          var n = r(a(1));
                          e.exports = n['default'];
                        },
                        function (e, t, a) {
                          'use strict';
                          function r (e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                              for (var a in e)
                                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                            return (t['default'] = e), t;
                          }
                          function n (e) {
                            return e && e.__esModule ? e : { default: e };
                          }
                          function c () {}
                          function u () {
                            var e = l.shift();
                            if (e) {
                              var t = o.last(e);
                              t.afterDequeue(),
                                (e.stream = i.apply(undefined, e)),
                                t.afterStreamStart();
                            }
                          }
                          function i (e, t, r) {
                            function n (e) {
                              (e = r.beforeWrite(e)), v.write(e), r.afterWrite(e);
                            }
                            ((v = new m['default'](e, r)).id = _++),
                              (v.name = r.name || v.id),
                              (p.streams[v.name] = v);
                            var a = e.ownerDocument,
                              i = {
                                close: a.close,
                                open: a.open,
                                write: a.write,
                                writeln: a.writeln,
                              };
                            d(a, {
                              close: c,
                              open: c,
                              write: function s () {
                                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                                  t[a] = arguments[a];
                                return n(t.join(''));
                              },
                              writeln: function l () {
                                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                                  t[a] = arguments[a];
                                return n(t.join('') + '\n');
                              },
                            });
                            var o = v.win.onerror || c;
                            return (
                              (v.win.onerror = function (e, t, a) {
                                r.error({ msg: e + ' - ' + t + ': ' + a }),
                                  o.apply(v.win, [e, t, a]);
                              }),
                              v.write(t, function () {
                                d(a, i), (v.win.onerror = o), r.done(), (v = null), u();
                              }),
                              v
                            );
                          }
                          function p (e, t, a) {
                            if (o.isFunction(a)) a = { done: a };
                            else if ('clear' === a) return (l = []), (v = null), void (_ = 0);
                            a = o.defaults(a, s);
                            var r = [
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
                                cancel: function n () {
                                  r.stream ? r.stream.abort() : (r[1] = c);
                                },
                              }),
                              a.beforeEnqueue(r),
                              l.push(r),
                              v || u(),
                              e.postscribe
                            );
                          }
                          t.__esModule = !0;
                          var d =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var r in a)
                                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                              }
                              return e;
                            };
                          t['default'] = p;
                          var m = n(a(2)),
                            o = r(a(4)),
                            s = {
                              afterAsync: c,
                              afterDequeue: c,
                              afterStreamStart: c,
                              afterWrite: c,
                              autoFix: !0,
                              beforeEnqueue: c,
                              beforeWriteToken: function g (e) {
                                return e;
                              },
                              beforeWrite: function f (e) {
                                return e;
                              },
                              done: c,
                              error: function b (e) {
                                throw new Error(e.msg);
                              },
                              releaseAsync: !1,
                            },
                            _ = 0,
                            l = [],
                            v = null;
                          d(p, { streams: {}, queue: l, WriteStream: m['default'] });
                        },
                        function (e, t, a) {
                          'use strict';
                          function r (e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                              for (var a in e)
                                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                            return (t['default'] = e), t;
                          }
                          function n (e) {
                            return e && e.__esModule ? e : { default: e };
                          }
                          function h (e, t) {
                            if (!(e instanceof t))
                              throw new TypeError('Cannot call a class as a function');
                          }
                          function y (e, t) {
                            var a = j + t,
                              r = e.getAttribute(a);
                            return P.existy(r) ? String(r) : r;
                          }
                          function L (e, t, a) {
                            var r = 2 < arguments.length && a !== undefined ? arguments[2] : null,
                              n = j + t;
                            P.existy(r) && '' !== r ? e.setAttribute(n, r) : e.removeAttribute(n);
                          }
                          t.__esModule = !0;
                          var V =
                              Object.assign ||
                              function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var r in a)
                                    Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                              },
                            D = n(a(3)),
                            P = r(a(4)),
                            S = !1,
                            j = 'data-ps-',
                            k = 'ps-style',
                            E = 'ps-script',
                            i = (function () {
                              function r (e, t) {
                                var a =
                                  1 < arguments.length && t !== undefined ? arguments[1] : {};
                                h(this, r),
                                  (this.root = e),
                                  (this.options = a),
                                  (this.doc = e.ownerDocument),
                                  (this.win = this.doc.defaultView || this.doc.parentWindow),
                                  (this.parser = new D['default']('', { autoFix: a.autoFix })),
                                  (this.actuals = [e]),
                                  (this.proxyHistory = ''),
                                  (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                  (this.scriptStack = []),
                                  (this.writeQueue = []),
                                  L(this.proxyRoot, 'proxyof', 0);
                              }
                              return (
                                (r.prototype.write = function a () {
                                  var e;
                                  for (
                                    (e = this.writeQueue).push.apply(e, arguments);
                                    !this.deferredRemote && this.writeQueue.length;

                                  ) {
                                    var t = this.writeQueue.shift();
                                    P.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                  }
                                }),
                                (r.prototype._callFunction = function n (e) {
                                  var t = { type: 'function', value: e.name || e.toString() };
                                  this._onScriptStart(t),
                                    e.call(this.win, this.doc),
                                    this._onScriptDone(t);
                                }),
                                (r.prototype._writeImpl = function i (e) {
                                  this.parser.append(e);
                                  for (
                                    var t = void 0, a = void 0, r = void 0, n = [];
                                    (t = this.parser.readToken()) &&
                                    !(a = P.isScript(t)) &&
                                    !(r = P.isStyle(t));

                                  )
                                    (t = this.options.beforeWriteToken(t)) && n.push(t);
                                  0 < n.length && this._writeStaticTokens(n),
                                    a && this._handleScriptToken(t),
                                    r && this._handleStyleToken(t);
                                }),
                                (r.prototype._writeStaticTokens = function o (e) {
                                  var t = this._buildChunk(e);
                                  return t.actual
                                    ? ((t.html = this.proxyHistory + t.actual),
                                      (this.proxyHistory += t.proxy),
                                      (this.proxyRoot.innerHTML = t.html),
                                      S && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                      this._walkChunk(),
                                      S && (t.actualInnerHTML = this.root.innerHTML),
                                      t)
                                    : null;
                                }),
                                (r.prototype._buildChunk = function u (e) {
                                  for (
                                    var t = this.actuals.length,
                                      a = [],
                                      r = [],
                                      n = [],
                                      i = e.length,
                                      o = 0;
                                    o < i;
                                    o++
                                  ) {
                                    var s = e[o],
                                      l = s.toString();
                                    if ((a.push(l), s.attrs)) {
                                      if (!/^noscript$/i.test(s.tagName)) {
                                        var c = t++;
                                        r.push(l.replace(/(\/?>)/, ' ' + j + 'id=' + c + ' $1')),
                                          s.attrs.id !== E &&
                                            s.attrs.id !== k &&
                                            n.push(
                                              'atomicTag' === s.type
                                                ? ''
                                                : '<' +
                                                    s.tagName +
                                                    ' ' +
                                                    j +
                                                    'proxyof=' +
                                                    c +
                                                    (s.unary ? ' />' : '>')
                                            );
                                      }
                                    } else r.push(l), n.push('endTag' === s.type ? l : '');
                                  }
                                  return {
                                    tokens: e,
                                    raw: a.join(''),
                                    actual: r.join(''),
                                    proxy: n.join(''),
                                  };
                                }),
                                (r.prototype._walkChunk = function s () {
                                  for (
                                    var e = void 0, t = [this.proxyRoot];
                                    P.existy((e = t.shift()));

                                  ) {
                                    var a = 1 === e.nodeType;
                                    if (!(a && y(e, 'proxyof'))) {
                                      a && L((this.actuals[y(e, 'id')] = e), 'id');
                                      var r = e.parentNode && y(e.parentNode, 'proxyof');
                                      r && this.actuals[r].appendChild(e);
                                    }
                                    t.unshift.apply(t, P.toArray(e.childNodes));
                                  }
                                }),
                                (r.prototype._handleScriptToken = function l (e) {
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
                                (r.prototype._handleStyleToken = function c (e) {
                                  var t = this.parser.clear();
                                  t && this.writeQueue.unshift(t),
                                    (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                    (e = this.options.beforeWriteToken(e)) &&
                                      this._writeStyleToken(e),
                                    t && this.write();
                                }),
                                (r.prototype._writeStyleToken = function p (e) {
                                  var t = this._buildStyle(e);
                                  this._insertCursor(t, k),
                                    e.content &&
                                      (t.styleSheet && !t.sheet
                                        ? (t.styleSheet.cssText = e.content)
                                        : t.appendChild(this.doc.createTextNode(e.content)));
                                }),
                                (r.prototype._buildStyle = function t (e) {
                                  var a = this.doc.createElement(e.tagName);
                                  return (
                                    a.setAttribute('type', e.type),
                                    P.eachKey(e.attrs, function (e, t) {
                                      a.setAttribute(e, t);
                                    }),
                                    a
                                  );
                                }),
                                (r.prototype._insertCursor = function d (e, t) {
                                  this._writeImpl('<span id="' + t + '"/>');
                                  var a = this.doc.getElementById(t);
                                  a && a.parentNode.replaceChild(e, a);
                                }),
                                (r.prototype._onScriptStart = function m (e) {
                                  (e.outerWrites = this.writeQueue),
                                    (this.writeQueue = []),
                                    this.scriptStack.unshift(e);
                                }),
                                (r.prototype._onScriptDone = function _ (e) {
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
                                (r.prototype._writeScriptToken = function v (e, t) {
                                  var a = this._buildScript(e),
                                    r = this._shouldRelease(a),
                                    n = this.options.afterAsync;
                                  e.src &&
                                    ((a.src = e.src),
                                    this._scriptLoadHandler(
                                      a,
                                      r
                                        ? n
                                        : function () {
                                            t(), n();
                                          }
                                    ));
                                  try {
                                    this._insertCursor(a, E), (a.src && !r) || t();
                                  } catch (i) {
                                    this.options.error(i), t();
                                  }
                                }),
                                (r.prototype._buildScript = function g (e) {
                                  var a = this.doc.createElement(e.tagName);
                                  return (
                                    P.eachKey(e.attrs, function (e, t) {
                                      a.setAttribute(e, t);
                                    }),
                                    e.content && (a.text = e.content),
                                    a
                                  );
                                }),
                                (r.prototype._scriptLoadHandler = function f (t, a) {
                                  function r () {
                                    t = t.onload = t.onreadystatechange = t.onerror = null;
                                  }
                                  function n () {
                                    r(), null != a && a(), (a = null);
                                  }
                                  function i (e) {
                                    r(), o(e), null != a && a(), (a = null);
                                  }
                                  function e (e, t) {
                                    var a = e['on' + t];
                                    null != a && (e['_on' + t] = a);
                                  }
                                  var o = this.options.error;
                                  e(t, 'load'),
                                    e(t, 'error'),
                                    V(t, {
                                      onload: function s () {
                                        if (t._onload)
                                          try {
                                            t._onload.apply(
                                              this,
                                              Array.prototype.slice.call(arguments, 0)
                                            );
                                          } catch (e) {
                                            i({
                                              msg: 'onload handler failed ' + e + ' @ ' + t.src,
                                            });
                                          }
                                        n();
                                      },
                                      onerror: function l () {
                                        if (t._onerror)
                                          try {
                                            t._onerror.apply(
                                              this,
                                              Array.prototype.slice.call(arguments, 0)
                                            );
                                          } catch (e) {
                                            return void i({
                                              msg: 'onerror handler failed ' + e + ' @ ' + t.src,
                                            });
                                          }
                                        i({ msg: 'remote script failed ' + t.src });
                                      },
                                      onreadystatechange: function c () {
                                        /^(loaded|complete)$/.test(t.readyState) && n();
                                      },
                                    });
                                }),
                                (r.prototype._shouldRelease = function b (e) {
                                  return (
                                    !/^script$/i.test(e.nodeName) ||
                                    !!(
                                      this.options.releaseAsync &&
                                      e.src &&
                                      e.hasAttribute('async')
                                    )
                                  );
                                }),
                                r
                              );
                            })();
                          t['default'] = i;
                        },
                        function (a) {
                          !(function r (e, t) {
                            a.exports = t();
                          })(0, function () {
                            return (function (a) {
                              function r (e) {
                                if (n[e]) return n[e].exports;
                                var t = (n[e] = { exports: {}, id: e, loaded: !1 });
                                return (
                                  a[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports
                                );
                              }
                              var n = {};
                              return (r.m = a), (r.c = n), (r.p = ''), r(0);
                            })([
                              function (e, t, a) {
                                'use strict';
                                function r (e) {
                                  return e && e.__esModule ? e : { default: e };
                                }
                                var n = r(a(1));
                                e.exports = n['default'];
                              },
                              function (e, t, a) {
                                'use strict';
                                function r (e) {
                                  return e && e.__esModule ? e : { default: e };
                                }
                                function n (e) {
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
                                var p = n(a(2)),
                                  d = n(a(3)),
                                  m = r(a(6)),
                                  i = a(5),
                                  _ = {
                                    comment: /^<!--/,
                                    endTag: /^<\//,
                                    atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                    startTag: /^</,
                                    chars: /^[^<]/,
                                  },
                                  o = (function () {
                                    function l (e, t) {
                                      var a = this,
                                        r =
                                          0 < arguments.length && e !== undefined
                                            ? arguments[0]
                                            : '',
                                        n =
                                          1 < arguments.length && t !== undefined
                                            ? arguments[1]
                                            : {};
                                      u(this, l), (this.stream = r);
                                      var i = !1,
                                        o = {};
                                      for (var s in p)
                                        p.hasOwnProperty(s) &&
                                          (n.autoFix && (o[s + 'Fix'] = !0),
                                          (i = i || o[s + 'Fix']));
                                      i
                                        ? ((this._readToken = (0, m['default'])(
                                            this,
                                            o,
                                            function () {
                                              return a._readTokenImpl();
                                            }
                                          )),
                                          (this._peekToken = (0, m['default'])(
                                            this,
                                            o,
                                            function () {
                                              return a._peekTokenImpl();
                                            }
                                          )))
                                        : ((this._readToken = this._readTokenImpl),
                                          (this._peekToken = this._peekTokenImpl));
                                    }
                                    return (
                                      (l.prototype.append = function t (e) {
                                        this.stream += e;
                                      }),
                                      (l.prototype.prepend = function a (e) {
                                        this.stream = e + this.stream;
                                      }),
                                      (l.prototype._readTokenImpl = function r () {
                                        var e = this._peekTokenImpl();
                                        if (e)
                                          return (this.stream = this.stream.slice(e.length)), e;
                                      }),
                                      (l.prototype._peekTokenImpl = function n () {
                                        for (var e in _)
                                          if (_.hasOwnProperty(e) && _[e].test(this.stream)) {
                                            var t = d[e](this.stream);
                                            if (t)
                                              return 'startTag' === t.type &&
                                                /script|style/i.test(t.tagName)
                                                ? null
                                                : ((t.text = this.stream.substr(0, t.length)), t);
                                          }
                                      }),
                                      (l.prototype.peekToken = function e () {
                                        return this._peekToken();
                                      }),
                                      (l.prototype.readToken = function i () {
                                        return this._readToken();
                                      }),
                                      (l.prototype.readTokens = function o (e) {
                                        for (var t = void 0; (t = this.readToken()); )
                                          if (e[t.type] && !1 === e[t.type](t)) return;
                                      }),
                                      (l.prototype.clear = function s () {
                                        var e = this.stream;
                                        return (this.stream = ''), e;
                                      }),
                                      (l.prototype.rest = function c () {
                                        return this.stream;
                                      }),
                                      l
                                    );
                                  })();
                                for (var s in (((t['default'] = o).tokenToString = function (e) {
                                  return e.toString();
                                }),
                                (o.escapeAttributes = function (e) {
                                  var t = {};
                                  for (var a in e)
                                    e.hasOwnProperty(a) &&
                                      (t[a] = (0, i.escapeQuotes)(e[a], null));
                                  return t;
                                }),
                                (o.supports = p)))
                                  p.hasOwnProperty(s) &&
                                    (o.browserHasFlaw = o.browserHasFlaw || (!p[s] && s));
                              },
                              function (e, t) {
                                'use strict';
                                var a = !(t.__esModule = !0),
                                  r = !1,
                                  n = window.document.createElement('div');
                                try {
                                  var i = '<P><I></P></I>';
                                  (n.innerHTML = i), (t.tagSoup = a = n.innerHTML !== i);
                                } catch (o) {
                                  t.tagSoup = a = !1;
                                }
                                try {
                                  (n.innerHTML = '<P><i><P></P></i></P>'),
                                    (t.selfClose = r = 2 === n.childNodes.length);
                                } catch (o) {
                                  t.selfClose = r = !1;
                                }
                                (n = null), (t.tagSoup = a), (t.selfClose = r);
                              },
                              function (e, t, a) {
                                'use strict';
                                function r (e) {
                                  var t = e.indexOf('-->');
                                  if (0 <= t) return new u.CommentToken(e.substr(4, t - 1), t + 3);
                                }
                                function n (e) {
                                  var t = e.indexOf('<');
                                  return new u.CharsToken(0 <= t ? t : e.length);
                                }
                                function i (e) {
                                  var o, s, l;
                                  if (-1 !== e.indexOf('>')) {
                                    var t = e.match(p.startTag);
                                    if (t) {
                                      var a =
                                        ((o = {}),
                                        (s = {}),
                                        (l = t[2]),
                                        t[2].replace(p.attr, function (e, t, a, r, n, i) {
                                          a || r || n || i
                                            ? arguments[5]
                                              ? ((o[arguments[5]] = ''), (s[arguments[5]] = !0))
                                              : (o[t] =
                                                  arguments[2] ||
                                                  arguments[3] ||
                                                  arguments[4] ||
                                                  (p.fillAttr.test(t) && t) ||
                                                  '')
                                            : (o[t] = ''),
                                            (l = l.replace(e, ''));
                                        }),
                                        {
                                          v: new u.StartTagToken(
                                            t[1],
                                            t[0].length,
                                            o,
                                            s,
                                            !!t[3],
                                            l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                          ),
                                        });
                                      if ('object' === (void 0 === a ? 'undefined' : c(a)))
                                        return a.v;
                                    }
                                  }
                                }
                                function o (e) {
                                  var t = i(e);
                                  if (t) {
                                    var a = e.slice(t.length);
                                    if (a.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                      var r = a.match(
                                        new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                      );
                                      if (r)
                                        return new u.AtomicTagToken(
                                          t.tagName,
                                          r[0].length + t.length,
                                          t.attrs,
                                          t.booleanAttrs,
                                          r[1]
                                        );
                                    }
                                  }
                                }
                                function s (e) {
                                  var t = e.match(p.endTag);
                                  if (t) return new u.EndTagToken(t[1], t[0].length);
                                }
                                t.__esModule = !0;
                                var c =
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
                                (t.comment = r),
                                  (t.chars = n),
                                  (t.startTag = i),
                                  (t.atomicTag = o),
                                  (t.endTag = s);
                                var u = a(4),
                                  p = {
                                    startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                    endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                    attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                    fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                  };
                              },
                              function (e, t, a) {
                                'use strict';
                                function s (e, t) {
                                  if (!(e instanceof t))
                                    throw new TypeError('Cannot call a class as a function');
                                }
                                (t.__esModule = !0),
                                  (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                                var l = a(5),
                                  r = (t.Token = function r (e, t) {
                                    s(this, r),
                                      (this.type = e),
                                      (this.length = t),
                                      (this.text = '');
                                  }),
                                  n =
                                    ((t.CommentToken = (function () {
                                      function a (e, t) {
                                        s(this, a),
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
                                        s(this, t),
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
                                      function i (e, t, a, r, n) {
                                        s(this, i),
                                          (this.type = e),
                                          (this.length = a),
                                          (this.text = ''),
                                          (this.tagName = t),
                                          (this.attrs = r),
                                          (this.booleanAttrs = n),
                                          (this.unary = !1),
                                          (this.html5Unary = !1);
                                      }
                                      return (
                                        (i.formatTag = function o (e, t) {
                                          var a =
                                              1 < arguments.length && t !== undefined
                                                ? arguments[1]
                                                : null,
                                            r = '<' + e.tagName;
                                          for (var n in e.attrs)
                                            if (e.attrs.hasOwnProperty(n)) {
                                              r += ' ' + n;
                                              var i = e.attrs[n];
                                              ('undefined' != typeof e.booleanAttrs &&
                                                'undefined' != typeof e.booleanAttrs[n]) ||
                                                (r += '="' + (0, l.escapeQuotes)(i) + '"');
                                            }
                                          return (
                                            e.rest && (r += ' ' + e.rest),
                                            e.unary && !e.html5Unary ? (r += '/>') : (r += '>'),
                                            a !== undefined &&
                                              null !== a &&
                                              (r += a + '</' + e.tagName + '>'),
                                            r
                                          );
                                        }),
                                        i
                                      );
                                    })()));
                                (t.StartTagToken = (function () {
                                  function o (e, t, a, r, n, i) {
                                    s(this, o),
                                      (this.type = 'startTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = a),
                                      (this.booleanAttrs = r),
                                      (this.html5Unary = !1),
                                      (this.unary = n),
                                      (this.rest = i);
                                  }
                                  return (
                                    (o.prototype.toString = function e () {
                                      return n.formatTag(this);
                                    }),
                                    o
                                  );
                                })()),
                                  (t.AtomicTagToken = (function () {
                                    function i (e, t, a, r, n) {
                                      s(this, i),
                                        (this.type = 'atomicTag'),
                                        (this.length = t),
                                        (this.text = ''),
                                        (this.tagName = e),
                                        (this.attrs = a),
                                        (this.booleanAttrs = r),
                                        (this.unary = !1),
                                        (this.html5Unary = !1),
                                        (this.content = n);
                                    }
                                    return (
                                      (i.prototype.toString = function e () {
                                        return n.formatTag(this, this.content);
                                      }),
                                      i
                                    );
                                  })()),
                                  (t.EndTagToken = (function () {
                                    function a (e, t) {
                                      s(this, a),
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
                                function c (e) {
                                  return (
                                    e &&
                                      'startTag' === e.type &&
                                      ((e.unary = r.test(e.tagName) || e.unary),
                                      (e.html5Unary = !/\/>$/.test(e.text))),
                                    e
                                  );
                                }
                                function u (e, t) {
                                  var a = e.stream,
                                    r = c(t());
                                  return (e.stream = a), r;
                                }
                                function p (e, t) {
                                  var a = t.pop();
                                  e.prepend('</' + a.tagName + '>');
                                }
                                function d () {
                                  var e = [];
                                  return (
                                    (e.last = function () {
                                      return this[this.length - 1];
                                    }),
                                    (e.lastTagNameEq = function (e) {
                                      var t = this.last();
                                      return (
                                        t &&
                                        t.tagName &&
                                        t.tagName.toUpperCase() === e.toUpperCase()
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
                                function a (a, r, t) {
                                  function n () {
                                    var e = u(a, t);
                                    e && o[e.type] && o[e.type](e);
                                  }
                                  var i = d(),
                                    o = {
                                      startTag: function s (e) {
                                        var t = e.tagName;
                                        'TR' === t.toUpperCase() && i.lastTagNameEq('TABLE')
                                          ? (a.prepend('<TBODY>'), n())
                                          : r.selfCloseFix && m.test(t) && i.containsTagName(t)
                                          ? i.lastTagNameEq(t)
                                            ? p(a, i)
                                            : (a.prepend('</' + e.tagName + '>'), n())
                                          : e.unary || i.push(e);
                                      },
                                      endTag: function l (e) {
                                        i.last()
                                          ? r.tagSoupFix && !i.lastTagNameEq(e.tagName)
                                            ? p(a, i)
                                            : i.pop()
                                          : r.tagSoupFix && (t(), n());
                                      },
                                    };
                                  return function e () {
                                    return n(), c(t());
                                  };
                                }
                                (t.__esModule = !0), (t['default'] = a);
                                var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                  m = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                              },
                            ]);
                          });
                        },
                        function (e, t) {
                          'use strict';
                          function r (e) {
                            return null != e;
                          }
                          function a (e) {
                            return 'function' == typeof e;
                          }
                          function n (e, t, a) {
                            var r = void 0,
                              n = (e && e.length) || 0;
                            for (r = 0; r < n; r++) t.call(a, e[r], r);
                          }
                          function i (e, t, a) {
                            for (var r in e) e.hasOwnProperty(r) && t.call(a, r, e[r]);
                          }
                          function o (a, e) {
                            return (
                              (a = a || {}),
                              i(e, function (e, t) {
                                r(a[e]) || (a[e] = t);
                              }),
                              a
                            );
                          }
                          function s (e) {
                            try {
                              return Array.prototype.slice.call(e);
                            } catch (r) {
                              var t =
                                ((a = []),
                                n(e, function (e) {
                                  a.push(e);
                                }),
                                { v: a });
                              if ('object' === (void 0 === t ? 'undefined' : d(t))) return t.v;
                            }
                            var a;
                          }
                          function l (e) {
                            return e[e.length - 1];
                          }
                          function c (e, t) {
                            return (
                              !(
                                !e ||
                                ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                                !('tagName' in e)
                              ) && !!~e.tagName.toLowerCase().indexOf(t)
                            );
                          }
                          function u (e) {
                            return c(e, 'script');
                          }
                          function p (e) {
                            return c(e, 'style');
                          }
                          t.__esModule = !0;
                          var d =
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
                          (t.existy = r),
                            (t.isFunction = a),
                            (t.each = n),
                            (t.eachKey = i),
                            (t.defaults = o),
                            (t.toArray = s),
                            (t.last = l),
                            (t.isTag = c),
                            (t.isScript = u),
                            (t.isStyle = p);
                        },
                      ]);
                    });
                  },
                },
                'core/src/lib/actions/helpers/unescapeHtmlCode.js': {
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('@adobe/reactor-document').createElement('div');
                    e.exports = function (e) {
                      return (r.innerHTML = e), r.textContent || r.innerText || e;
                    };
                  },
                },
                'core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js': {
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('@adobe/reactor-promise');
                    e.exports = function (e, t) {
                      return { code: '<script>\n' + t + '\n</script>', promise: r.resolve() };
                    };
                  },
                },
                'core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js': {
                  script: function (e, t, a) {
                    'use strict';
                    var i = a('@adobe/reactor-promise'),
                      o = 0;
                    e.exports = function (r, e) {
                      var n = '_runScript' + ++o,
                        t = new i(function (e, a) {
                          _satellite[n] = function (t) {
                            delete _satellite[n],
                              new i(function (e) {
                                e(t.call(r.event.element, r.event, r.event.target, i));
                              }).then(e, a);
                          };
                        });
                      return {
                        code:
                          '<script>_satellite["' +
                          n +
                          '"](function(event, target, Promise) {\n' +
                          e +
                          '\n});</script>',
                        promise: t,
                      };
                    };
                  },
                },
                'core/src/lib/actions/helpers/decorators/decorateHtmlCode.js': {
                  script: function (e, t, a, r) {
                    'use strict';
                    var n = a('@adobe/reactor-promise'),
                      i = 0,
                      o = {};
                    (window._satellite = window._satellite || {}),
                      (window._satellite._onCustomCodeSuccess = function (e) {
                        var t = o[e];
                        t && (delete o[e], t.resolve());
                      }),
                      (window._satellite._onCustomCodeFailure = function (e) {
                        var t = o[e];
                        t && (delete o[e], t.reject());
                      });
                    var s = function (e) {
                        return -1 !== e.indexOf('${reactorCallbackId}');
                      },
                      l = function (e, t) {
                        return e.replace(/\${reactorCallbackId}/g, t);
                      },
                      c = function (e) {
                        return e.settings.isExternal;
                      };
                    e.exports = function (e, t) {
                      var a;
                      return (
                        c(e) && (t = r.replaceTokens(t, e.event)),
                        s(t)
                          ? ((a = new n(function (e, t) {
                              o[String(i)] = { resolve: e, reject: t };
                            })),
                            (t = l(t, i)),
                            (i += 1))
                          : (a = n.resolve()),
                        { code: t, promise: a }
                      );
                    };
                  },
                },
                'core/src/lib/actions/helpers/getSourceByUrl.js': {
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('@adobe/reactor-load-script'),
                      n = a('@adobe/reactor-promise'),
                      i = {},
                      o = {},
                      s = function (e) {
                        return o[e] || (o[e] = r(e)), o[e];
                      };
                    (_satellite.__registerScript = function (e, t) {
                      i[e] = t;
                    }),
                      (e.exports = function (t) {
                        return i[t]
                          ? n.resolve(i[t])
                          : new n(function (e) {
                              s(t).then(
                                function () {
                                  e(i[t]);
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
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('./weakMap'),
                      m = a('./matchesProperties'),
                      _ = a('./matchesSelector');
                    e.exports = function () {
                      var p = [],
                        d = new r(),
                        e = {
                          addListener: function (e, t) {
                            p.push({ settings: e, callback: t });
                          },
                          evaluateEvent: function (t, e) {
                            if (p.length && !d.has(t)) {
                              for (var a = t.target, r = !1; a; ) {
                                for (var n = !1, i = !1, o = 0; o < p.length; o++) {
                                  var s = p[o],
                                    l = s.settings.elementSelector,
                                    c = s.settings.elementProperties;
                                  if (
                                    (!1 !== s.settings.bubbleFireIfChildFired || !r) &&
                                    (a === t.target || !1 !== s.settings.bubbleFireIfParent) &&
                                    (a === t.target || l || (c && Object.keys(c).length)) &&
                                    (!l || _(a, l)) &&
                                    (!c || m(a, c))
                                  ) {
                                    var u = {};
                                    e
                                      ? Object.keys(t).forEach(function (e) {
                                          u[e] = t[e];
                                        })
                                      : (u.nativeEvent = t),
                                      (u.element = a),
                                      (u.target = t.target),
                                      !1 !== s.callback(u) &&
                                        ((i = !0), s.settings.bubbleStop && (n = !0));
                                  }
                                }
                                if (n) break;
                                i && (r = !0), (a = a.parentNode);
                              }
                              d.set(t, !0);
                            }
                          },
                          __reset: function () {
                            p = [];
                          },
                        };
                      return e;
                    };
                  },
                },
                'core/src/lib/events/helpers/weakMap.js': {
                  script: function (e, t, a) {
                    'use strict';
                    var r = a('@adobe/reactor-window').WeakMap;
                    if (void 0 === r) {
                      var n = Object.defineProperty,
                        i = Date.now() % 1000000000;
                      (r = function () {
                        this.name = '__st' + ((1000000000 * Math.random()) >>> 0) + i++ + '__';
                      }).prototype = {
                        set: function (e, t) {
                          var a = e[this.name];
                          return (
                            a && a[0] === e
                              ? (a[1] = t)
                              : n(e, this.name, { value: [e, t], writable: !0 }),
                            this
                          );
                        },
                        get: function (e) {
                          var t;
                          return (t = e[this.name]) && t[0] === e ? t[1] : undefined;
                        },
                        delete: function (e) {
                          var t = e[this.name];
                          return !(!t || t[0] !== e) && ((t[0] = t[1] = undefined), !0);
                        },
                        has: function (e) {
                          var t = e[this.name];
                          return !!t && t[0] === e;
                        },
                      };
                    }
                    e.exports = r;
                  },
                },
                'core/src/lib/events/helpers/matchesProperties.js': {
                  script: function (e, t, a) {
                    'use strict';
                    var n = a('./../../helpers/textMatch'),
                      i = function (e, t) {
                        return '@text' === t || 'innerText' === t
                          ? e.textContent || e.innerText
                          : t in e
                          ? e[t]
                          : e.getAttribute
                          ? e.getAttribute(t)
                          : void 0;
                      };
                    e.exports = function (r, e) {
                      return (
                        !e ||
                        e.every(function (e) {
                          var t = i(r, e.name),
                            a = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                          return n(t, a);
                        })
                      );
                    };
                  },
                },
                'core/src/lib/events/helpers/matchesSelector.js': {
                  script: function (e, t, a, n) {
                    'use strict';
                    e.exports = function (e, t) {
                      var a = e.matches || e.msMatchesSelector;
                      if (a)
                        try {
                          return a.call(e, t);
                        } catch (r) {
                          return (
                            n.logger.warn(
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
                    e.exports = function (a, r, n) {
                      var i = null;
                      return function () {
                        var e = n || this,
                          t = arguments;
                        clearTimeout(i),
                          (i = setTimeout(function () {
                            a.apply(e, t);
                          }, r));
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
              },
              hostedLibFilesBaseUrl:
                'https://assets.adobedtm.com/extensions/EP2e2f86ba46954a2b8a2b3bb72276b9f8/',
            },
            'doubleclick-floodlight': {
              displayName: 'DoubleClick Floodlight (Beta)',
              modules: {
                'doubleclick-floodlight/dist/lib/actions/floodlightCounter.js': {
                  name: 'floodlight-counter',
                  displayName: 'Floodlight Counter Tag',
                  script: function (e, t, a, i) {
                    'use strict';
                    function r (e, t, a) {
                      var r;
                      r =
                        'sales' === t && 'img' === a
                          ? 'ad.doubleclick.net/activity'
                          : e.src.value + '.fls.doubleclick.net/activityi';
                      var n = '';
                      for (var i in e) {
                        var o = e[i].value;
                        '' != o &&
                          void 0 !== o &&
                          (n += encodeURIComponent(i) + '=' + encodeURIComponent(o) + ';');
                      }
                      return (
                        0 < n.length && (r = r + ';' + (n = n.substring(0, n.length - 1))),
                        'https://' + r + '?'
                      );
                    }
                    function n (e, t) {
                      var a = document.createElement(t);
                      if (
                        ((a.src = e),
                        (a.style = 'display:none'),
                        'loading' === document.readyState)
                      ) {
                        var r = 'Waiting on document to embed ' + e + ' ' + t + '..';
                        i.logger.log(r),
                          document.addEventListener('DOMContentLoaded', function () {
                            i.logger.log('Document is now loaded, embedding..');
                            try {
                              document.body.appendChild(a);
                            } catch (e) {
                              i.logger.error('Unable to embed Floodlight!'), i.logger.error(e);
                            }
                          });
                      } else {
                        r = 'Embedding ' + e + ' ' + t + '..';
                        i.logger.log(r);
                        try {
                          document.body.appendChild(a);
                        } catch (n) {
                          i.logger.error('Unable to embed Floodlight!'), i.logger.error(n);
                        }
                      }
                    }
                    var o = 'counter';
                    e.exports = function (e) {
                      e
                        ? n(r(e.params, o, e.elementTagName), e.elementTagName)
                        : i.logger.error('No settings found, not firing Floodlight tag!');
                    };
                  },
                },
              },
              hostedLibFilesBaseUrl:
                'https://assets.adobedtm.com/extensions/EP9a01085750854132acb9bc9bade4150c/',
            },
            'ags055-time-spent-and-scroll-depth-combined-event': {
              displayName: 'Time and Scroll Event',
              modules: {},
              hostedLibFilesBaseUrl:
                'https://assets.adobedtm.com/extensions/EP2226e05b847f48ca99039835cf4cc1a2/',
            },
            'mapping-table': {
              displayName: 'Mapping Table',
              modules: {},
              hostedLibFilesBaseUrl:
                'https://assets.adobedtm.com/extensions/EPee1a5c2067154712a5f911d06bdfa041/',
            },
            'lookup-table-utility': {
              displayName: 'Lookup Table Utility',
              modules: {
                'lookup-table-utility/src/lib/dataElements/lookupTable.js': {
                  name: 'lookup-table',
                  displayName: 'Lookup Table',
                  script: function (module, exports, require, turbine) {
                    'use strict';
                    module.exports = function (settings) {
                      if (settings.inputVariable.dataElement)
                        var inputVariable = settings.inputVariable.value.toString();
                      else if ('object' == typeof eval(settings.inputVariable.value))
                        var inputVariable = JSON.stringify(eval(settings.inputVariable.value));
                      else var inputVariable = eval(settings.inputVariable.value).toString();
                      var lookupArray = settings.lookupArray,
                        lookupValue = lookupArray.filter(function (e) {
                          if (e.input === inputVariable) return e;
                        });
                      return lookupValue[0] ? lookupValue[0].output : undefined;
                    };
                  },
                },
              },
              hostedLibFilesBaseUrl:
                'https://assets.adobedtm.com/extensions/EPbade1de4902944faadae748f106fb817/',
            },
          },
          company: { orgId: '3A3C1D085C5C70990A495CFC@AdobeOrg' },
          property: {
            name: '01 - Poste.it',
            settings: {
              domains: ['poste.it'],
              undefinedVarsReturnEmpty: !0,
              ruleComponentSequencingEnabled: !1,
            },
          },
          rules: [
            {
              id: 'RL0100b1b0b98741dfb4b5b9ac5904226b',
              name: 'RPOL_funnel_associazione_iban',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'libretto_smart-associazione_iban' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        4 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Onboarding;Associazione Iban;1;0'),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_tipologia_buono')),
                          (t.linkTrackVars += 'eVar9,products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL32b644edd9d04cd782ed879efd74072f',
              name: '[CAMP] - DoubleClick MyInt - POSTE_MYN_LP_pagaconpostepay',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: { paths: [{ value: 'pagaconpostepay.html', valueIsRegex: !0 }] },
                },
                {
                  modulePath: 'core/src/lib/conditions/cookie.js',
                  settings: {
                    name: 'notice_gdpr_prefs',
                    value: '^[^:]*2[^:]*:',
                    valueIsRegex: !0,
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'doubleclick-floodlight/dist/lib/actions/floodlightCounter.js',
                  settings: {
                    params: {
                      cat: { key: 'cat', value: 'poste002' },
                      ord: { key: 'ord', value: '1' },
                      src: { key: 'src', value: '9593253' },
                      type: { key: 'type', value: 'lpqgq0' },
                    },
                    elementTagName: 'iframe',
                    floodlightType: 'counter',
                  },
                },
              ],
            },
            {
              id: 'RL051f5c555e3a47b8819d6ecbb0e06e98',
              name: 'DR_Ricerca_Spedizioni',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'id_ricerche_sped' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%pageUrl%' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'alias', value: 'eVar2' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      events: [
                        { name: 'event8', value: '%DL_Contatore_Numero_Risultati_Spedizioni%' },
                        { name: 'event9', value: '%DL_Contatore_Numero_Ricerche_Spedizioni%' },
                      ],
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'Ricerche_Spedizioni', linkType: 'o' },
                },
              ],
            },
            {
              id: 'RL982cda64f2ac4124b9c12529e9365c1b',
              name: '[BOT] - Assistente Digitale',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RC566a158275404d04bb55c176f4972502-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL7e4e8209be5c434f92029bed361225c5',
              name: 'DR_XOL_alias_page',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'Landing_xol' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_alias_page%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL6141863fd65b406fb46ef849330bd19b',
              name: '[INTRANET] Variabili meta in pagina',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/subdomain.js',
                  settings: { subdomains: [{ value: 'noidiposte', valueIsRegex: !0 }] },
                },
              ],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar29', type: 'value', value: '%DL_wp_post_cat_name%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                      ],
                      events: [
                        { name: 'event14', value: '%DL_wp_comments_count%' },
                        { name: 'event15', value: '%DL_wp_rating_count%' },
                      ],
                    },
                  },
                },
              ],
            },
            {
              id: 'RL1eb4906bed484d3c9df8556867bf086a',
              name: 'DR_id_err_alert',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'id_err_alert' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        t.linkTrackVars =
                          'eVar17,eVar200,prop2,prop1,eVar6,eVar7,eVar198,campaign,eVar2';
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%pageUrl%' },
                        { name: 'eVar17', type: 'value', value: '%DL_text_err_alert%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%pageUrl%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'Messaggio di Errore', linkType: 'o' },
                },
                { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              ],
            },
            {
              id: 'RLad3efeab85ba44c28371156d2d765cf3',
              name: '[DR] - Prototipo Overlay Survey - Layout PopUp funnel e2e buoni e libretti',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_e2e' },
                  ruleOrder: 50,
                },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/variable.js',
                  settings: {
                    name: 'dataLayer.funnel.alias_page',
                    value: 'alias_e2e_rpol_2_1_prima_di_iniziare',
                    valueIsRegex: !0,
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RCb7d796f0d1d54c8b851c1e9bfb3d7a2b-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL951f5978007d4984bd8dc8837ec12de9',
              name: 'DR_Testo_Cercato',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'id_text_searched' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar10', type: 'value', value: '%DL_Cerca_Testo_Cercato%' },
                        { name: 'eVar2', type: 'value', value: '%pageUrl%' },
                        { name: 'eVar3', type: 'value', value: 'none' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%pageUrl%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'Testo_Ricercato', linkType: 'o' },
                },
              ],
            },
            {
              id: 'RLa99b89f3fbd5411c96dd9b6ed5ba18eb',
              name: 'PPAY_funnel_bonifico_estero',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'bonifico_estero' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Invio Denaro;Bonifico Estero;1;'),
                          (t.events = 'scAdd'),
                          (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                          (t.linkTrackVars += 'eVar12,products'),
                          (t.linkTrackEvents += 'scAdd')),
                          4 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Invio Denaro;Bonifico Estero;1;' +
                              _satellite.getVar('DL_importo_trasferito')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.linkTrackVars += 'eVar12,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL1cb0f15051534a79b6e78714429b400b',
              name: 'ADP_funnel_prodotti_non_carrellabili',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'prodotti_non_carrellabili' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        3 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Area dei pagamenti;Prodotti non carrellabili;1;' +
                            _satellite.getVar('DL_importo')),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_tipologia')),
                          (t.eVar12 = _satellite.getVar('DL_mdp_strumento_autorizzativo')),
                          (t.eVar16 = _satellite.getVar('DL_mdp_metodo_di_pagamento')),
                          (t.linkTrackVars += 'eVar9,eVar12,eVar16,products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL402fc15cd8e64f9284cf2c8353bc6d13',
              name: 'PPAY_funnel_bonifico_sepa',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'bonifico_sepa' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Invio Denaro;Bonifico Sepa;1;'),
                          (t.events = 'scAdd'),
                          (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                          (t.linkTrackVars += 'eVar12,products'),
                          (t.linkTrackEvents += 'scAdd')),
                          4 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Invio Denaro;Bonifico Sepa;1;' +
                              _satellite.getVar('DL_importo_trasferito')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.linkTrackVars += 'eVar12,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        {
                          name: 'eVar11',
                          type: 'value',
                          value: 'rule:_ppay_funnel_bonifico_sepa',
                        },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL2f2db9f3640c401fa9b50415538bc11d',
              name: 'tracking_dem_myposte_v2',
              events: [
                {
                  modulePath: 'core/src/lib/events/click.js',
                  settings: {
                    elementSelector: 'a.ng-binding',
                    bubbleFireIfParent: !0,
                    bubbleFireIfChildFired: !0,
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: { paths: [{ value: '/myposte/', valueIsRegex: !0 }] },
                },
              ],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        t.eVar20 = jQuery(this).text();
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar20', type: 'value', value: '%DL_dem_bacheca_title%' },
                        { name: 'eVar2', type: 'value', value: '%pageUrl%' },
                      ],
                      props: [
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                        { name: 'prop1', type: 'value', value: '%pageUrl%' },
                      ],
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'Dem Bacheca', linkType: 'o' },
                },
                { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              ],
            },
            {
              id: 'RL1563de5c13d44d1da17e39eb16072fdf',
              name: 'DR_RPOL_alias_page',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'Landing_rpol' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_alias_page%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLd257cd41451d40c0bb36c248acddc65c',
              name: 'RPOL_funnel_onboarding_buoni_cartacei_anagrafati',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'libretto_smart-onboarding_buoni_cartacei_anagrafati' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        3 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Onboarding;Onboarding Buoni Cartacei Anagrafati;1;'),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_tipologia_buono')));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLc93794fe7a4b439186e5e5f792eb2602',
              name: 'Gestione Impression & Click Banner',
              events: [
                { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 20 },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        var n = function n (e) {
                            var t,
                              a,
                              r = window.location.search.substring(1).split('&');
                            for (a = 0; a < r.length; a++)
                              if ((t = r[a].split('='))[0] === e)
                                return t[1] === undefined || decodeURIComponent(t[1]);
                          },
                          a = [];
                        $('[data-wtac-container]').each(function () {
                          a.push($(this).attr('data-wtac-container'));
                        });
                        for (var r = a.length, i = '', o = 0; o < r; o++)
                          i = i + ';Gestione Banner ADV;;;event6=1;evar21=' + a[o] + ',';
                        var s = n('wt.ac');
                        void 0 !== s && s
                          ? (t.products = i + ';Gestione Banner ADV;;;event7=1;evar21=' + s)
                          : 0 < r && (t.products = i.substring(0, i.length - 1)),
                          'undefined' != typeof t.products &&
                            0 < t.products.length &&
                            ((t.events = 'prodView'),
                            0 < r && (t.events += ',event6'),
                            void 0 !== s && s && (t.events += ',event7'));
                      },
                    },
                    trackerProperties: {
                      eVars: [{ name: 'eVar2', type: 'value', value: '%pageUrl%' }],
                      props: [{ name: 'prop1', type: 'value', value: '%pageUrl%' }],
                    },
                  },
                },
              ],
            },
            {
              id: 'RL7674b93dc93b40b683ba70e0d02ad19e',
              name: 'FILATELIA_funnel_acquisto',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'area_filatelia' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        var a = _satellite.getVar('DL_merchandising_desc_prodotto'),
                          r =
                            (_satellite.getVar('DL_merchandising_id_prodotto'),
                            _satellite.getVar('DL_merchandising_operationType')),
                          n =
                            (_satellite.getVar('DL_merchandising_order_id'),
                            _satellite.getVar('DL_merchandising_id_prodotto'),
                            _satellite.getVar('DL_merchandising_product_set'),
                            _satellite.getVar('DL_merchandising_quantity')),
                          i = _satellite.getVar('DL_merchandising_price'),
                          o = _satellite.getVar('DL_metodo_pagamento');
                        'view' == r &&
                          ((t.products = 'Francobolli Online;' + a + ';;'),
                          (t.events = 'prodView')),
                          'add' == r &&
                            ((t.products = 'Francobolli Online;' + a + ';' + n + ';' + i),
                            (t.events = 'scAdd')),
                          'remove' == r &&
                            ((t.products = 'Francobolli Online;' + a + ';1'),
                            (t.events = 'scRemove')),
                          'purchase' == r &&
                            ((t.products = 'Francobolli Online;' + a + ';' + n + ';' + i),
                            (t.events = 'purchase'),
                            (t.purchaseID = 'order_id'),
                            (t.eVar16 = o));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'alias', value: 'eVar2' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      channel: 'Filatelia Online',
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLf3af2abde0b5450d986736bbf671821a',
              name: 'RPOL_funnel_girofondo_libretto_libretto',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'libretto_smart-girofondo_libretto_libretto' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        4 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Invio Denaro;Girofondo da Libretto a Libretto;1;' +
                            _satellite.getVar('DL_importo_girofondo')),
                          (t.events = 'purchase'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL06a707d97ccb43378e0a8d51b8ec8045',
              name: 'DR_id_simu_e2e_risparmio_postale',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'id_simu_e2e' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar9', type: 'value', value: '%DL_rpol_tipo_bfp%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%pageUrl%' },
                      ],
                      props: [
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                        { name: 'prop1', type: 'value', value: '%pageUrl%' },
                      ],
                      events: [{ name: 'event10', value: '%DL_rpol_importo_Bfp_calcolo%' }],
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: {
                    type: 'link',
                    linkName: 'Simulatore Buoni in mio possesso Area Risparmio Postale',
                    linkType: 'o',
                  },
                },
              ],
            },
            {
              id: 'RL4c35084b7a9a4024b210396097fe8772',
              name: 'BPOL_funnel_ricarica_telefonica',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'ricarica_telefonica-ricarica_telefonica' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Ricariche;Ricarica Telefonica;1;'),
                          (t.events = 'scAdd'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'scAdd')),
                          4 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Ricariche;Ricarica Telefonica;1;' +
                              _satellite.getVar('DL_importo_ricarica')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.eVar13 = _satellite.getVar('DL_gestore_telefonico')),
                            (t.linkTrackVars += 'eVar12,eVar13,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL9d0781046297482092d22245456f64e5',
              name: '[CAMP] - DoubleClick MyInt - POSTE_MYN_LP_postepay_evolution',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: { paths: [{ value: 'postepay-evolution.html', valueIsRegex: !0 }] },
                },
                {
                  modulePath: 'core/src/lib/conditions/cookie.js',
                  settings: {
                    name: 'notice_gdpr_prefs',
                    value: '^[^:]*2[^:]*:',
                    valueIsRegex: !0,
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'doubleclick-floodlight/dist/lib/actions/floodlightCounter.js',
                  settings: {
                    params: {
                      cat: { key: 'cat', value: 'poste001' },
                      ord: { key: 'ord', value: '1' },
                      src: { key: 'src', value: '9593253' },
                      type: { key: 'type', value: 'lpqgq0' },
                    },
                    elementTagName: 'iframe',
                    floodlightType: 'counter',
                  },
                },
              ],
            },
            {
              id: 'RLd29cb2f920904336a8fcbcbead902dbe',
              name: 'funnel_finalizzazione_consumer',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'finalizzazione_consumer' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL8486961f889041cabf8a5dbcf6a618c3',
              name: 'RPOL_funnel_libretto_ordinario-emissione_acquisto_buoni',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'libretto_ordinario-emissione_acquisto_buoni' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        4 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Acquisto;Emissione o Acquisto Buoni;1;' +
                            _satellite.getVar('DL_rpol_importo_buono')),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_rpol_tipo_buoni')),
                          (t.linkTrackVars += 'eVar9,products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLaaae59068bdc40caa83dcde9626a116f',
              name:
                'RPOL_funnel_libretto_ordinario-onboarding_libretto_ordinario-dematerializzato',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: {
                    identifier:
                      'libretto_ordinario-onboarding_libretto_ordinario-dematerializzato',
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        3 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Onboarding;Onboarding Libretto Ordinario Dematerializzato;1;0'),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_tipologia_buono')),
                          (t.linkTrackVars += 'eVar9,products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL2d1ed3c73b41474b9f3d594e64a8eec5',
              name: 'Pageload_BaseTag',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: { paths: [{ value: '/C:/', valueIsRegex: !0 }] },
                  negate: !0,
                },
              ],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar27', type: 'value', value: '%DL_flag_profilazione%' },
                      ],
                      props: [
                        { name: 'prop10', type: 'value', value: '%DL_Meta_CRMU_AreaSito%' },
                        {
                          name: 'prop11',
                          type: 'value',
                          value: '%DL_Meta_CRMU_TipologiaContenutoPagina%',
                        },
                        {
                          name: 'prop12',
                          type: 'value',
                          value: '%DL_Meta_CRMU_SegmentoClientela%',
                        },
                        { name: 'prop13', type: 'value', value: '%DL_Meta_CRMU_AreaBusiness%' },
                        {
                          name: 'prop14',
                          type: 'value',
                          value: '%DL_Meta_CRMU_LivelloTreCatalogo%',
                        },
                        {
                          name: 'prop15',
                          type: 'value',
                          value: '%DL_Meta_CRMU_CodLivelloTreCatalogo%',
                        },
                        {
                          name: 'prop16',
                          type: 'value',
                          value: '%DL_Meta_CRMU_LivelloQuattroCatalogo%',
                        },
                        {
                          name: 'prop17',
                          type: 'value',
                          value: '%DL_Meta_CRMU_CodLivelloQuattroCatalogo%',
                        },
                      ],
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLd5dce7292d454f6692fde1ed3cf421b6',
              name: 'PPAY_funnel_ricarica_telefonica',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'ricarica_telefonica' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Ricariche;Ricarica Telefonica;1;'),
                          (t.events = 'scAdd'),
                          (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                          (t.eVar13 = _satellite.getVar('DL_gestore_telefonico')),
                          (t.linkTrackVars += 'eVar12,eVar13,products'),
                          (t.linkTrackEvents += 'scAdd')),
                          4 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Ricariche;Ricarica Telefonica;1;' +
                              _satellite.getVar('DL_importo_ricarica')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.eVar13 = _satellite.getVar('DL_gestore_telefonico')),
                            (t.linkTrackVars += 'eVar12,eVar13,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL6f71fa4a06d540fe915c36aa668c6795',
              name: 'DR_MDP_cta_star',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'Landing_mdp' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%pageUrl%' },
                        { name: 'eVar20', type: 'value', value: '%DL_cta_star%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%pageUrl%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'Landing MDP', linkType: 'o' },
                },
              ],
            },
            {
              id: 'RL081a65ec522f4f97a959be463bcdab50',
              name: 'funnel_invio_pacco_nazionale',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_invio_pacco_nazionale' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar8', type: 'value', value: 'PaccoWeb' },
                        { name: 'eVar9', type: 'value', value: '%DL_tipologia_pacco_spedito%' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLcedf9334181a4a048f986f7563a449d3',
              name: 'BPOL_funnel_ricarica_postepay',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'postepay-ricarica_postepay' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Ricariche;Ricarica Postepay;1;'),
                          (t.events = 'scAdd'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'scAdd')),
                          3 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Ricariche;Ricarica Postepay;1;' +
                              _satellite.getVar('DL_importo_trasferito')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.linkTrackVars += 'eVar12,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL3f670a7b888e44f98a8018c234676e7a',
              name: 'funnel_attivazione_carta',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'attivazione_carta' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL4b3054a7429d43a6922a31ddd31c2874',
              name: 'funnel_registrazione_consumer',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'registrazione_consumer' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL275d64d6a115437898cbab1d66b30034',
              name: 'Maxymiser Url Path',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: {
                    paths: [
                      { value: '/ppay/private/pages/index.html' },
                      { value: '/gamma/carte-postepay.html' },
                      { value: '/prodotti/postepay-digital.html' },
                      { value: '/prodotti/postepay-standard.html' },
                      { value: '/cerca/index.html' },
                      { value: '/applicazione-postepay.html' },
                      { value: '/postedeliveryweb/retail' },
                      { value: '/postedeliveryweb/business' },
                      { value: '/gamma/spedisci-online.html' },
                      { value: '/gamma/spedizione-pacchi.html' },
                    ],
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RCf0d688c33ae34263b90e62112a101692-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RLec023c8c4d584acba9ff541ae1b43b4f',
              name: '[CAMP] - DoubleClick MyInt - POSTE_MYN_LP_gamma_lettera',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: { paths: [{ value: '/gamma/lettera.html', valueIsRegex: !0 }] },
                },
                {
                  modulePath: 'core/src/lib/conditions/cookie.js',
                  settings: {
                    name: 'notice_gdpr_prefs',
                    value: '^[^:]*2[^:]*:',
                    valueIsRegex: !0,
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'doubleclick-floodlight/dist/lib/actions/floodlightCounter.js',
                  settings: {
                    params: {
                      cat: { key: 'cat', value: 'poste0' },
                      ord: { key: 'ord', value: '1' },
                      src: { key: 'src', value: '9593253' },
                      type: { key: 'type', value: 'lpqgq0' },
                    },
                    elementTagName: 'iframe',
                    floodlightType: 'counter',
                  },
                },
              ],
            },
            {
              id: 'RL96d3d01b590e49c5805861ca1110cc08',
              name: 'Funnel di acquisto EcoBonus',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_ecobonus' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        var a = _satellite.getVar('DL_merchandising_desc_prodotto'),
                          r = _satellite.getVar('DL_merchandising_operationType'),
                          n = _satellite.getVar('DL_merchandising_order_id');
                        'view' == r &&
                          ((t.products = 'Acquisto;' + a + ';;'), (t.events = 'prodView')),
                          'add' == r &&
                            ((t.products = 'Acquisto;' + a + ';1'), (t.events = 'scAdd')),
                          'remove' == r &&
                            ((t.products = 'Acquisto;' + a + ';1'), (t.events = 'scRemove')),
                          'purchase' == r &&
                            ((t.products = 'Acquisto;' + a + ';1'),
                            (t.events = 'purchase'),
                            (t.purchaseID = n));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'alias', value: 'eVar2' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      channel: 'Funnel EcoBonus',
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL353da5c4b43b4bfb9b79ffc40f313069',
              name: 'DR_RDDC',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'RDDC' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page_plain%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL9fdf2e5d162c4906a9f43c5e0163112d',
              name: 'Maxymiser Url Landing',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      var e = window.location.href;
                      if (
                        'https://www.poste.it/index.html' == e ||
                        'https://www.poste.it/' == e ||
                        'https://postepay.poste.it/' == e ||
                        'https://postepay.poste.it/index.html' == e
                      )
                        return !0;
                    },
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RC4027405d9adf4abeb5c1f9b0642fad0c-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL2ce40ee28caa4f1eb78e7bb8eb3a15be',
              name: 'DR_PPAY_alias_page',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'Landing_ppay' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_alias_page_plain%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL35f31dd055014ec7851f6860b7b77dc0',
              name: 'ADP_funnel_bollettino_pa_esito_positivo',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'bollettino_pa_esito_positivo' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        4 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Area dei pagamenti;Bollettino PA esito positivo;1;' +
                            _satellite.getVar('DL_importo')),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_tipologia')),
                          (t.eVar12 = _satellite.getVar('DL_mdp_strumento_autorizzativo')),
                          (t.eVar16 = _satellite.getVar('DL_mdp_metodo_di_pagamento')),
                          (t.linkTrackVars += 'eVar9,eVar12,eVar16,products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLec976bae7dae4dcbb4a2cde832b3a71a',
              name: 'xol-funnel_invio_raccomandata',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'xol-funnel_invio_raccomandata' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Comunicazioni Online;Raccomandata Online;1;'),
                          (t.events = 'scAdd')),
                          5 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products = 'Comunicazioni Online;Raccomandata Online;1;'),
                            (t.events = 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL21afaef5e7cf4c059cb32cf800f792a6',
              name: 'FastQuote',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'FASTQUOTE' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar3', type: 'value', value: 'FastQuote' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                        { name: 'prop18', type: 'value', value: '%DL_targa_auto%' },
                        { name: 'prop19', type: 'value', value: '%DL_data_nascita%' },
                        { name: 'prop20', type: 'value', value: '%DL_provincia%' },
                        { name: 'prop21', type: 'value', value: '%DL_nr_cellulare%' },
                        { name: 'prop22', type: 'value', value: '%DL_mail%' },
                        { name: 'prop23', type: 'value', value: '%DL_flag_contatto%' },
                        { name: 'prop24', type: 'value', value: '%DL_techID%' },
                        { name: 'prop25', type: 'value', value: '%DL_dataScadenzaPolizza%' },
                      ],
                      pageURL: '%DL_alias_page%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'Form FastQuote Compilata', linkType: 'o' },
                },
              ],
            },
            {
              id: 'RLf6b995447a2b422e97efc0340ab15ed6',
              name: 'Funnel di acquisto Fibra su WEB',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_fibra' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'alias', value: 'eVar2' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      channel: 'Funnel Fibra Business',
                      pageURL: '%DL_alias_page%',
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLbd21b9ec279844db9e5dacfdac791f33',
              name: '[AIUTACI A MIGLIORARE] - Box Survey Visualization',
              events: [
                {
                  modulePath: 'core/src/lib/events/historyChange.js',
                  settings: {},
                  ruleOrder: 50,
                },
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'invio_denaro-bonifico_sepa' },
                  ruleOrder: 50,
                },
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'postepay-ricarica_postepay' },
                  ruleOrder: 50,
                },
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'invio_denaro-girofondo' },
                  ruleOrder: 50,
                },
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'invio_denaro-postagiro' },
                  ruleOrder: 50,
                },
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'ricarica_telefonica-ricarica_telefonica' },
                  ruleOrder: 50,
                },
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'ricarica_carta_postepay' },
                  ruleOrder: 50,
                },
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'ricarica_telefonica' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RC075c4067e7c94f4ab179e82c1b05476a-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL147fa3b1989a494b9492d6bb88bfddfe',
              name: 'ADP_funnel_bollettino_pa_esito_negativo',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'bollettino_pa_esito_negativo' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        4 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Area dei pagamenti;Bollettino PA esito negativo;1;' +
                            _satellite.getVar('DL_importo')),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_tipologia')),
                          (t.eVar12 = _satellite.getVar('DL_mdp_strumento_autorizzativo')),
                          (t.eVar16 = _satellite.getVar('DL_mdp_metodo_di_pagamento')),
                          (t.linkTrackVars += 'eVar9,eVar12,eVar16,products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLda11189ac32249e0ac840188b1e47e85',
              name: 'RPOL_funnel_offerta_supersmart_acquisto',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'offerta_supersmart-offerta_supersmart' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar9', type: 'value', value: '%DL_rpol_tipo_accantonamento%' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL90402f5f7a5d4fd7b3b48de73a467339',
              name: 'HybApp_Funnel_VOL_AppBP',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_VOL-APP-BP' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        _satellite.getVar('DL_HybApp_title');
                        var a = _satellite.getVar('DL_merchandising_desc_prodotto_VOL'),
                          r = _satellite.getVar('DL_merchandising_operationType_VOL');
                        'add' == r &&
                          ((t.products = 'Acquisto;VOL ' + a + ';1;0'), (t.events = 'scAdd')),
                          'purchase' == r &&
                            ((t.products = 'Acquisto;VOL ' + a + ';1;0'), (t.events = 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_HybApp_uri%' },
                        { name: 'eVar3', type: 'value', value: '%DL_HybApp_group%' },
                        { name: 'eVar32', type: 'value', value: '%pageUrl Extended%' },
                      ],
                      props: [{ name: 'prop1', type: 'value', value: '%DL_HybApp_uri%' }],
                      pageName: '%DL_HybApp_title%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL2ef9abc195ca4a04a1c99406c119eb82',
              name: '[AIUTACI A MIGLIORARE] - Invia e Controlla',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'invia_controlla' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RCadf18227d7ec45358ece8cd94574698c-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RLb6313e24ed4f4917bf3342dda537e43b',
              name: 'Elementi_Statici_pre_basetag',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 40 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: {
                    paths: [
                      {
                        value: '/bpol/public/BPOL_ListaMovimentiAPP/index.html',
                        valueIsRegex: !0,
                      },
                      { value: '/ppay/private/pages/landing.html' },
                    ],
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: { trackerProperties: { events: [{ name: 'event2', value: '1' }] } },
                },
              ],
            },
            {
              id: 'RLa1cbd4bee0bf4409bb0e45fab4078ff7',
              name: '[CCT] - Yandex base Tag',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/cookie.js',
                  settings: {
                    name: 'notice_gdpr_prefs',
                    value: '^[^:]*2[^:]*:',
                    valueIsRegex: !0,
                  },
                },
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: {
                    paths: [
                      { value: 'pages/onboarding.html', valueIsRegex: !0 },
                      { value: '/prodotti/postemoney-investimenti.html', valueIsRegex: !0 },
                      { value: '/iorestoacasa', valueIsRegex: !0 },
                    ],
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RCbaf78837da7045f9a1bbe5bccb28ec06-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL049a77452724492aacd02b6487be7fc4',
              name: 'PMONEY_funnel_acquisto',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_e2e_wealth' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        var a = _satellite.getVar('DL_PMONEY_linea_investimento'),
                          r = _satellite.getVar('DL_PMONEY_orizzonte_investimento'),
                          n = _satellite.getVar('DL_PMONEY_importo_investimento'),
                          i = _satellite.getVar('DL_PMONEY_strumento_regolamento');
                        'alias_pmoney_4_1_1_sviluppi_linea_investimento' ==
                          _satellite.getVar('DL_alias_page') && (t.eVar22 = r),
                          'alias_pmoney_5_1_richiesta_fea' == _satellite.getVar('DL_alias_page') &&
                            (t.eVar23 = i),
                          'alias_pmoney_4_2_strumento_regolamento' ==
                            _satellite.getVar('DL_alias_page') &&
                            ((t.products = 'Acquisto;' + a + ';1;' + n), (t.events = 'scAdd')),
                          'alias_pmoney_6_thankyouPage' == _satellite.getVar('DL_alias_page') &&
                            ((t.products = 'Acquisto;' + a + ';1;' + n),
                            (t.events = 'purchase'),
                            (t.channel = 'Pmoney - Pratica Finalizzata'),
                            (t.eVar3 = t.channel)),
                          'alias_pmoney_landing' == _satellite.getVar('DL_alias_page') &&
                            ((t.channel = 'Pmoney - Landing'), (t.eVar3 = t.channel)),
                          _satellite.getVar('DL_alias_page').match(/alias_pmoney_1_*/) &&
                            ((t.channel = 'Pmoney - Dati Personali'), (t.eVar3 = t.channel)),
                          _satellite.getVar('DL_alias_page').match(/alias_pmoney_2_*/) &&
                            ((t.channel = 'Pmoney - Questionario Mifid'), (t.eVar3 = t.channel)),
                          _satellite.getVar('DL_alias_page').match(/alias_pmoney_3_*/) &&
                            ((t.channel = 'Pmoney - QAV'), (t.eVar3 = t.channel)),
                          _satellite.getVar('DL_alias_page').match(/alias_pmoney_4_*/) &&
                            ((t.channel = 'Pmoney - Scelta Linea'), (t.eVar3 = t.channel)),
                          _satellite.getVar('DL_alias_page').match(/alias_pmoney_5_*/) &&
                            ((t.channel = 'Pmoney - Verifica e Firma'), (t.eVar3 = t.channel));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page%' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'alias', value: 'eVar2' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page%',
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL02a490fe187d475590f06302acabe737',
              name: 'BaseTag SiteImprove',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: {
                    paths: [
                      { value: '/gamma/carte-postepay.html', valueIsRegex: !0 },
                      { value: '/prodotti/postepay', valueIsRegex: !0 },
                    ],
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RC2f926f027b744622bd094d3d107e1d40-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL995ecbb6f4444be688e2ee8f8f822e42',
              name: 'RPOL_E2E_Buoni_e_Libretti',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_e2e' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        -1 !==
                          _satellite
                            .getVar('DL_alias_page')
                            .indexOf('alias_e2e_rpol_ThankYouPage') &&
                          ((t.products =
                            'E2E Risparmio Online - ' +
                            _satellite.getVar('DL_tipo_offerta_acquistata') +
                            ';' +
                            _satellite.getVar('DL_tipologia_buono') +
                            ';1;' +
                            _satellite.getVar('DL_importo_buono')),
                          (t.events = 'purchase'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackVars += 's.channel'),
                          (t.channel = 'E2E Buoni e Libretti - Thankyou Page'),
                          (t.linkTrackEvents += 'purchase'),
                          (t.eVar3 = t.channel),
                          (t.linkTrackVars += 's.evar3')),
                          _satellite.getVar('DL_alias_page').match(/alias_e2e_rpol_2_*/) &&
                            'alias_e2e_rpol_2_5_proposal_upselling' !=
                              _satellite.getVar('DL_alias_page') &&
                            ((t.channel = 'E2E Buoni e Libretti - Dati Offerta'),
                            (t.linkTrackVars += 's.channel'),
                            (t.eVar3 = t.channel),
                            (t.linkTrackVars += 's.evar3')),
                          (_satellite.getVar('DL_alias_page').match(/alias_e2e_rpol_3_*/) ||
                            'alias_e2e_rpol_2_5_proposal_upselling' ==
                              _satellite.getVar('DL_alias_page')) &&
                            ((t.channel = 'E2E Buoni e Libretti - Verifica Dati Offerta'),
                            (t.linkTrackVars += 's.channel'),
                            (t.eVar3 = t.channel),
                            (t.linkTrackVars += 's.evar3'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar18', type: 'value', value: '%DL_stato_user_e2e_risparmio%' },
                        {
                          name: 'eVar19',
                          type: 'value',
                          value: '%DL_e2e_prodotto_scelto_simulatore%',
                        },
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_alias_page%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL52f5cbea82044436bda65256db1059e8',
              name: 'RPOL_funnel_girofondo_libretto_conto',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'libretto_smart-girofondo_libretto_conto' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        4 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Invio Denaro;Girofondo da Libretto a Conto;1;' +
                            _satellite.getVar('DL_importo_girofondo')),
                          (t.events = 'purchase'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLcf058bc218af40739cd240a1c8e1dcbf',
              name: 'ADP_funnel_fesp',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'fesp' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL4c378ef3475c4d8bb8ada862ab8fdcf2',
              name: 'ADP_funnel_prodotti_carrellabili',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'prodotti_carrellabili' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        4 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Area dei pagamenti;Prodotti carrellabili;1;' +
                            _satellite.getVar('DL_importo')),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_tipologia')),
                          (t.eVar12 = _satellite.getVar('DL_mdp_strumento_autorizzativo')),
                          (t.eVar16 = _satellite.getVar('DL_mdp_metodo_di_pagamento')),
                          (t.linkTrackVars += 'eVar9,eVar12,eVar16,products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL10db136664b14558b19614ead58e9c7d',
              name: 'xol-funnel_invio_lettera',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'xol-funnel_invio_lettera' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Comunicazioni Online;Lettera Online;1;'),
                          (t.events = 'scAdd')),
                          5 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products = 'Comunicazioni Online;Lettera Online;1;'),
                            (t.events = 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar8', type: 'value', value: 'Lettera' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL66f06b97337a446db84d86abbfb46f10',
              name: 'xol-funnel_invio_telegramma',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'xol-funnel_invio_telegramma' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Comunicazioni Online;Telegramma Online;1;'),
                          (t.events = 'scAdd')),
                          5 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products = 'Comunicazioni Online;Telegramma Online;1;'),
                            (t.events = 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL7428c9c01f6f41d0b05e593c6b3d112a',
              name: 'HybApp_Funnel_VOL_AppPPay',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_VOL_PPAY' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        var a = _satellite.getVar('DL_HybApp_title'),
                          r = _satellite.getVar('DL_merchandising_desc_prodotto_VOL'),
                          n = _satellite.getVar('DL_merchandising_operationType_VOL');
                        ('add' != n && 'VOL - main' != a) ||
                          ((t.products = 'Acquisto;VOL ' + r + ';1;0'), (t.events = 'scAdd')),
                          'purchase' == n &&
                            ((t.products = 'Acquisto;VOL ' + r + ';1;0'), (t.events = 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_HybApp_uri%' },
                        { name: 'eVar3', type: 'value', value: '%DL_HybApp_group%' },
                      ],
                      props: [{ name: 'prop1', type: 'value', value: '%DL_HybApp_uri%' }],
                      pageURL: '%DL_HybApp_uri%',
                      pageName: '%DL_HybApp_title%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL0c8c658303e5465cb6aa01586b8d9275',
              name: '[CCT] - BlueKai Tag',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/cookie.js',
                  settings: {
                    name: 'notice_gdpr_prefs',
                    value: '^[^:]*2[^:]*:',
                    valueIsRegex: !0,
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RC6cc7407660504433b9276330a1a5479c-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL5c3223e7bfaf4bdcb4ab0cde065f948b',
              name: 'BPOL_funnel_invio_denaro-bonifico_sepa',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'invio_denaro-bonifico_sepa' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        var a = _satellite.getVar('DL_importo_trasferito'),
                          r = _satellite.getVar('DL_met_autorizzativo');
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Invio Denaro;Bonifico Sepa;1;'),
                          (t.events = 'scAdd'),
                          (t.linkTrackVars += 'eVar12,products'),
                          (t.linkTrackEvents += 'scAdd')),
                          3 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products = 'Invio Denaro;Bonifico Sepa;1;' + a),
                            (t.events = 'purchase'),
                            (t.eVar12 = r),
                            (t.linkTrackVars += 'eVar12,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL218dcbc10aac48e08beedecb41bb028b',
              name: 'funnel_le_mie_carte',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'le_mie_carte' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar9', type: 'value', value: '%DL_tipo_carta%' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL67293328c11e4e6889a751ffea60a042',
              name: 'RPOL_funnel_certifica_telefono_libretto_smart',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'libretto_smart-certifica_telefono_libretto_smart' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        4 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Onboarding;Certifica Telefono Libretto Smart;1;0'),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_tipologia_buono')),
                          (t.linkTrackVars += 'eVar9,products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL642dc48713464f9f9c2d8acc4369609c',
              name: 'MyPosteVita',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'MyPosteVita' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        var a = _satellite.getVar('DL_merchandising_desc_prodotto'),
                          r = _satellite.getVar('DL_merchandising_operationType'),
                          n =
                            (_satellite.getVar('DL_merchandising_order_id'),
                            _satellite.getVar('DL_merchandising_quantity')),
                          i = _satellite.getVar('DL_merchandising_price');
                        'add' == r &&
                          ((t.products =
                            'Operativita Area Riservata Assicurativa;' + a + ';' + n + ';' + i),
                          (t.events = 'scAdd')),
                          'purchase' == r &&
                            ((t.products =
                              'Operativita Area Riservata Assicurativa;' + a + ';' + n + ';' + i),
                            (t.events = 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'alias', value: 'eVar2' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      events: [
                        {
                          name: 'event3',
                          value: '%DL_event_myposteVita_avvenuto_riconoscimento%',
                        },
                        {
                          name: 'event4',
                          value: '%DL_event_myposteVita_avvenuta_richiesta_isee%',
                        },
                        {
                          name: 'event5',
                          value: '%DL_event_myposteVita_avvenuta_richiesta_lettere%',
                        },
                      ],
                      pageURL: '%DL_alias_page_plain%',
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLc617fb9a68a94bfca72aab44aca1a82f',
              name: 'BPOL_funnel_invio_denaro-postagiro_per_detrazione',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'invio_denaro-postagiro_per_detrazione' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        2 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Invio Denaro;Postagiro per Detrazione;1;'),
                          (t.events = 'scAdd'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'scAdd')),
                          3 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Invio Denaro;Postagiro per Detrazione;1;' +
                              _satellite.getVar('DL_importo_trasferito')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.linkTrackVars += 'eVar12,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLaf4dd88f2fd646b1997e3ebeeb695412',
              name: 'Vendita Online Codice Business',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_codice' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: { source: function () {} },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'eVar35', type: 'value', value: '%DL_profilo_utente%' },
                        { name: 'eVar197', type: 'value', value: '%DL_Transaction_ID%' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'alias', value: 'eVar2' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      channel: 'VOL Codice Business da Web',
                      pageURL: '%DL_alias_page_plain%',
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLc9e2481466d4475cb1feda2f002b0854',
              name: '[CCT] - Clarity base Tag',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: {
                    paths: [
                      { value: '/prodotti/postepay-digital.html' },
                      { value: '/risparmiare-con-i-buoni.html' },
                      { value: 'myposte/index.html', valueIsRegex: !0 },
                      { value: '/postedeliveryweb/retail' },
                    ],
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RCc5b4da86cd1940fa979d2151176b07a0-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL7a64e8780ab941f29f35b243be81cbaf',
              name: 'Area_FDR',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'Area_FDR' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: { source: function () {} },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'alias', value: 'eVar2' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      channel: 'Funnel Firma Digitale Remota',
                      pageURL: '%DL_alias_page_plain%',
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLe130bc849f5a4c17ba7a792e82b1600f',
              name: 'RPOL_funnel_ricarica_postepay',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'libretto_smart-ricarica_postepay' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        4 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Ricariche;Ricarica Postepay;1;' +
                            _satellite.getVar('DL_importo_ricarica_postepay')),
                          (t.events = 'purchase'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL4064161cab224dd0ae8859d06603ad36',
              name: 'funnel_prenotazione_ticket',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'prenota_ticket' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        6 == _satellite.getVar('DL_Step_Number') && (t.events = 'event7');
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLb986c538348e42c897eac1b337fe1c5c',
              name: 'funnel_spid-registrazione_spid_carta_nazionale',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'spid-registrazione_spid_carta_nazionale' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL3dd4072b2166423b983c8ba8db986133',
              name: '[CAMP] - DoubleClick MyInt - POSTE_MYN_LP_applicazione_postepay',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: { paths: [{ value: 'applicazione-postepay.html', valueIsRegex: !0 }] },
                },
                {
                  modulePath: 'core/src/lib/conditions/cookie.js',
                  settings: {
                    name: 'notice_gdpr_prefs',
                    value: '^[^:]*2[^:]*:',
                    valueIsRegex: !0,
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'doubleclick-floodlight/dist/lib/actions/floodlightCounter.js',
                  settings: {
                    params: {
                      cat: { key: 'cat', value: 'poste0' },
                      ord: { key: 'ord', value: '1' },
                      src: { key: 'src', value: '9593253' },
                      type: { key: 'type', value: 'lpqgq0' },
                    },
                    elementTagName: 'iframe',
                    floodlightType: 'counter',
                  },
                },
              ],
            },
            {
              id: 'RLe02bcea33e374adcaf7dd59550ba8f63',
              name: 'PPAY_invio_denaro_funnel_postagiro',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'postagiro' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Invio Denaro;Postagiro;1;'),
                          (t.events = 'scAdd'),
                          (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                          (t.linkTrackVars += 'eVar12,products'),
                          (t.linkTrackEvents += 'scAdd')),
                          4 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Invio Denaro;Postagiro;1;' +
                              _satellite.getVar('DL_importo_trasferito')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.linkTrackVars += 'eVar12,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL6e242f7ddd9e4b86bd672566047bf713',
              name: 'RPOL_funnel_rimborso_buoni',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'libretto_smart-rimborso_buoni' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        4 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Rimborso;Rimborso Buoni;1;' +
                            -1 * _satellite.getVar('DL_importo_buono_rimborsato')),
                          (t.events = 'purchase'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL15427adcc31644e6974ede697eb8de53',
              name: 'DR_CIG',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'CIG' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page_plain%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL9f928ef0eb054119880c6d74de310343',
              name: 'funnel_spid-registrazione_spid_sms',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'spid-registrazione_spid_sms' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL62c18dd5cd204f97bb73730b2cac32a9',
              name: 'TA_Extension',
              events: [
                {
                  modulePath: 'core/src/lib/events/libraryLoaded.js',
                  settings: {},
                  ruleOrder: 50,
                },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/subdomain.js',
                  settings: {
                    subdomains: [
                      { value: 'noidiposte', valueIsRegex: !0 },
                      { value: 'posteassicura', valueIsRegex: !0 },
                      { value: 'postevita', valueIsRegex: !0 },
                      { value: 'posteinsurancebroker', valueIsRegex: !0 },
                      { value: 'lapostadibabbonatale', valueIsRegex: !0 },
                    ],
                  },
                  negate: !0,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      "var doTrustarc = function(){\n    if(typeof jQuery !== 'undefined'){\n        if(jQuery('#consent_blackbar').length == 0){\n            jQuery(\"body > div.content.content-alert-browser\").append('<div id=\"consent_blackbar\"></div>');\n        }\n        if(jQuery('#teconsent').length == 0){\n            jQuery(\"body > div.content.content-footer.content-footer-post > div > div > div > div > div.col-md-7\").removeClass('hide');\n            jQuery(\"body > div.content.content-footer.content-footer-post > div > div > div > div > div.col-md-7 > div > div.base-footer\").html('<div id=\"teconsent\"></div>')\n        }\n        var eTrustArc = document.createElement('script');\n        eTrustArc.async = true;\n        eTrustArc.src = ('//consent.trustarc.com/notice?domain=posteitaliane.com&c=teconsent&country=it&language=it&gtm=1&js=nj&noticeType=bb&text=true');\n        document.body.appendChild(eTrustArc);\n        return true;\n    }\n    return false;\n}\n\nif(!doTrustarc()){\n    var interval = setInterval(function(){\n        if(doTrustarc()){\n            clearInterval(interval);\n        }\n    },500);\n}\n\n\nvar _STATE = {};\nfunction runOnce()\n{\n\tif(!_STATE.hasRunOnce && window.truste && truste.eu && truste.eu.prefclose)\n\t{\n\t\tconsole.log(\"doing run once\");\n\t\t_STATE.oldValue = parseInt(truste.eu.bindMap.prefCookie);\n\t\t_STATE.oldMethod = truste.eu.prefclose;\n\t\ttruste.eu.prefclose = function()\n\t\t{\n\t\t\t_STATE.oldMethod();\n\t\t\tif(_STATE.oldValue != parseInt(truste.eu.bindMap.prefCookie))\n\t\t\tsetTimeout(function(){ window.location.reload(); },20);\n\t\t};\n\t_STATE.hasRunOnce = true;\n\t_STATE.i && clearInterval(_STATE.i);\n\t}\n}\n_STATE.i = setInterval(runOnce,10);",
                    language: 'javascript',
                  },
                },
              ],
            },
            {
              id: 'RL3a5f4540ee7143c5a176875ee2fa52c0',
              name: 'funnel_spid-registrazione_spid_up',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'spid-registrazione_spid_up' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL0980841ee5074bc0973c22d83fe945ba',
              name: 'IDP_migrazione_utenti',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_migrazione' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        {
                          name: 'eVar30',
                          type: 'value',
                          value: '%DL_migr_id_privata_tipo_utente%',
                        },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page_plain%',
                      pageName: '%DL_alias_page_plain%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLd2dbb90509ab4c0db59d08e9696f0aa4',
              name: 'funnel_invio_pacco_internazionale',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_invio_pacco_internazionale' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar8', type: 'value', value: 'PaccoWeb' },
                        { name: 'eVar9', type: 'value', value: '%DL_tipologia_pacco_spedito%' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL056cda5d5b7a44729a0f4ef51422a620',
              name: '[DR] - Prototipo Overlay Survey - Send Data To Analytics',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'directsurvey' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [{ name: 'eVar31', type: 'value', value: '%event.detail.info%' }],
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'Survey Feedback Modal', linkType: 'o' },
                },
              ],
            },
            {
              id: 'RLdd24bd8eceb848eb80fb9ace87d41870',
              name: 'DR_rpol_seg_flg',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'id_segmento_rpol' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        t.eVar11 =
                          _satellite.getVar('DL_rpol_seg_flg_SmartDispo') +
                          ':' +
                          _satellite.getVar('DL_rpol_seg_flg_noprodotti') +
                          ':' +
                          _satellite.getVar('DL_rpol_seg_flg_SmartDispoIban') +
                          ':' +
                          _satellite.getVar('DL_rpol_seg_flg_SmartInfoNoTelSiCC') +
                          ':' +
                          _satellite.getVar('DL_rpol_seg_flg_SmartInfoSiTel') +
                          ':' +
                          _satellite.getVar('DL_rpol_seg_flg_SmartInfoNoTel');
                      },
                    },
                    trackerProperties: {},
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'PostLogin', linkType: 'o' },
                },
              ],
            },
            {
              id: 'RLa3e3cb0ee5e54cf88ec4aa54afd2a954',
              name: 'tracciamento_codice_errore_securelogin',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 49 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: {
                    paths: [
                      { value: '/jod-fcc/fcc-authentication-failed.html', valueIsRegex: !0 },
                    ],
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        var a = jQuery('.box-error p').text();
                        (t.eVar17 = a), _satellite.logger.log('LOG -> ' + a);
                      },
                    },
                    trackerProperties: {},
                  },
                },
              ],
            },
            {
              id: 'RL87e50e24f85d4b0f80bd8e32871af5fa',
              name: 'funnel_abilitazione_sicurezza_web_comune_alle_carte',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'abilitazione_sicurezza_web_comune_alle_carte' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL3bbe79e9d18446a7b213c0bb6050de8a',
              name: 'BPOL_funnel_invio_denaro-postagiro',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'invio_denaro-postagiro' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Invio Denaro;Postagiro;1;'),
                          (t.events = 'scAdd'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'scAdd')),
                          3 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Invio Denaro;Postagiro;1;' +
                              _satellite.getVar('DL_importo_trasferito')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.linkTrackVars += 'eVar12,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLc1d504cc882e4b59b9d031a5e218cf2b',
              name: 'DR_id_simu_e2e',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'id_simu_e2e' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar8', type: 'value', value: '%DL_E2E_simu_categoria%' },
                        { name: 'eVar9', type: 'value', value: '%DL_E2E_simu_prodotto%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%pageUrl%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%pageUrl%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      events: [{ name: 'event10', value: '%DL_E2E_simu_importo%' }],
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'Simulatore E2E', linkType: 'o' },
                },
              ],
            },
            {
              id: 'RL1065fd3c9f774431bde4b30e5e30826f',
              name: 'RPOL_funnel_libretto_ordinario-onboarding_libretto_ordinario-cartaceo',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: {
                    identifier: 'libretto_ordinario-onboarding_libretto_ordinario-cartaceo',
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLc5e67311250e4dea97e22747ae8836f5',
              name: 'funnel_spid-registrazione_spid_fd',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'spid-registrazione_spid_fd' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL2c7345cab9284eb58bef20b0241f84b1',
              name: 'PPAY_funnel_rinnova_carta',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'rinnova_carta' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Onboarding;Rinnovo Carta;1;'),
                          (t.events = 'scAdd'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'scAdd')),
                          4 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products = 'Onboarding;Rinnovo Carta;1;' + importo),
                            (t.events = 'purchase'),
                            (t.linkTrackVars += 'products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL8e3cbbbd890e4d298f9395b9b9575775',
              name: '[ALL WEB] - gestione errori con alias',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'id_err_alert' },
                  ruleOrder: 50,
                },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (0 != _satellite.getVar('DL_alias_page').length) return !0;
                    },
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        t.linkTrackVars =
                          'eVar17,eVar200,prop2,prop1,eVar6,eVar7,eVar198,campaign,eVar2';
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar17', type: 'value', value: '%DL_text_err_alert%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page%' },
                      ],
                      props: [
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                        { name: 'prop1', type: 'value', value: '%DL_alias_page%' },
                      ],
                      pageURL: '%DL_alias_page%',
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'Messaggio di Errore', linkType: 'o' },
                },
                { modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js', settings: {} },
              ],
            },
            {
              id: 'RL738270882fa54c46a3de637e877a04d7',
              name: 'RPOL_funnel_offerta_supersmart_simula_accantonamento',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'offerta_supersmart-simula_accantonamento' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL94d7137d841a41d5afab4cd87b3699b2',
              name: 'IDP_skip_migrazione',
              events: [
                {
                  modulePath: 'core/src/lib/events/click.js',
                  settings: {
                    elementSelector: '#notnow',
                    bubbleFireIfParent: !0,
                    bubbleFireIfChildFired: !0,
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: { paths: [{ value: '/myposte/migrazione.html', valueIsRegex: !0 }] },
                },
              ],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: { trackerProperties: { events: [{ name: 'event13', value: '1' }] } },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: {
                    type: 'link',
                    linkName: '[IDP] - Skip processo migrazione user',
                    linkType: 'o',
                  },
                },
              ],
            },
            {
              id: 'RLd249c6c5e3864dffb2c191059c95b2c6',
              name: 'dataLayerScript',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 1 },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/4d622ce80bd2/66013fe91d66/14df9e83b94c/RC1cafac1324134ae5a8ed788765d40fec-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL226a9ea2b184486aadde7f9707010cec',
              name: 'BPOL_funnel_invio_denaro-bonifico_sepa_per_detrazione',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'invio_denaro-bonifico_sepa_per_detrazione' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Invio Denaro;Bonifico Sepa per Detrazione;1;'),
                          (t.events = 'scAdd'),
                          (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                          (t.linkTrackVars += 'eVar12,products'),
                          (t.linkTrackEvents += 'scAdd')),
                          3 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Invio Denaro;Bonifico Sepa per Detrazione;1;' +
                              _satellite.getVar('DL_importo_trasferito')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.linkTrackVars += 'eVar12,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL0930be54da044ec8b0832e3a8f9223c9',
              name: 'PPAY_funnel_ricarica_postepay',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'ricarica_carta_postepay' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Ricariche;Ricarica PostePay;1;'),
                          (t.events = 'scAdd'),
                          (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                          (t.linkTrackVars += 'eVar12,products'),
                          (t.linkTrackEvents += 'scAdd')),
                          4 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Ricariche;Ricarica PostePay;1;' +
                              _satellite.getVar('DL_importo_ricarica')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.linkTrackVars += 'eVar12,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLee7014ab56284b008d3ab769c399593a',
              name: 'PPAY_funnel_modifica_cellulare_rilasciato',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'modifica_cellulare_rilasciato' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Onboarding;Modifica Cellulare Rilasciato;1;'),
                          (t.events = 'scAdd'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'scAdd')),
                          4 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products = 'Onboarding;Modifica Cellulare Rilasciato;1;'),
                            (t.events = 'purchase'),
                            (t.linkTrackVars += 'products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL3a8299ca9be442358e167c142093e9dd',
              name: 'RPOL_funnel_inserimento_cancellazione_buoni_cartacei',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: {
                    identifier: 'libretto_smart-inserimento_cancellazione_buoni_cartacei',
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        3 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Area Patrimonio Buoni;Inserimento e Cancellazione Buoni Cartacei non anagrafati;1;'),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_tipologia_buono')),
                          (t.linkTrackVars += 'eVar9,products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL491e9444be1844e8b5585a4c50e73e77',
              name: 'RPOL_funnel_associazione_rilascio_numero_libretto_smart',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: {
                    identifier: 'libretto_smart-associazione_rilascio_numero_libretto_smart',
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        3 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products =
                            'Onboarding;Associazione e Rilascio Numero Libretto Smart;1;' +
                            _satellite.getVar('DL_importo_buono')),
                          (t.events = 'purchase'),
                          (t.eVar9 = _satellite.getVar('DL_tipologia_buono')),
                          (t.linkTrackVars += 'eVar9,products'),
                          (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar14', type: 'value', value: '%DL_strumento_certificazione%' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL2515e5415c2b45178344712a5eac5590',
              name: 'funnel_spid-registrazione_spid_lettore_bancoposta',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'spid-registrazione_spid_lettore_bancoposta' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'value', value: 'WEB' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLc0804046f273416498b31469d7aab3fa',
              name: '[CAMP] - DoubleClick MyInt - POSTE_MYN_LP_postepay_standard',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: { paths: [{ value: 'postepay-standard.html', valueIsRegex: !0 }] },
                },
                {
                  modulePath: 'core/src/lib/conditions/cookie.js',
                  settings: {
                    name: 'notice_gdpr_prefs',
                    value: '^[^:]*2[^:]*:',
                    valueIsRegex: !0,
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'doubleclick-floodlight/dist/lib/actions/floodlightCounter.js',
                  settings: {
                    params: {
                      cat: { key: 'cat', value: 'poste000' },
                      ord: { key: 'ord', value: '1' },
                      src: { key: 'src', value: '9593253' },
                      type: { key: 'type', value: 'lpqgq0' },
                    },
                    elementTagName: 'iframe',
                    floodlightType: 'counter',
                  },
                },
              ],
            },
            {
              id: 'RLcf6300fc8a87447d815b11c34d887c7b',
              name: 'BPOL_funnel_invio_denaro-girofondo',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'invio_denaro-girofondo' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        1 == _satellite.getVar('DL_Step_Number') &&
                          ((t.products = 'Invio Denaro;Girofondo;1;'),
                          (t.events = 'scAdd'),
                          (t.linkTrackVars += 'products'),
                          (t.linkTrackEvents += 'scAdd')),
                          3 == _satellite.getVar('DL_Step_Number') &&
                            ((t.products =
                              'Invio Denaro;Girofondo;1;' +
                              _satellite.getVar('DL_importo_trasferito')),
                            (t.events = 'purchase'),
                            (t.eVar12 = _satellite.getVar('DL_met_autorizzativo')),
                            (t.linkTrackVars += 'eVar12,products'),
                            (t.linkTrackEvents += 'purchase'));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar6', type: 'value', value: '%DL_Scenario_Name%' },
                        { name: 'eVar7', type: 'value', value: '%DL_Step_Number%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_Step_URI%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_Step_URI%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_Step_URI%',
                      pageName: '%DL_Scenario_Name%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLf75c525cb2884f6abf3fd35f5639b0b5',
              name: 'DR_VisitorID',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'id_usr_id' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        t.visitorID = _satellite.getVar('DL_usr_id');
                      },
                    },
                    trackerProperties: {
                      eVars: [{ name: 'eVar199', type: 'value', value: '%DL_usr_id%' }],
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'link', linkName: 'VisitorID', linkType: 'o' },
                },
              ],
            },
            {
              id: 'RLdd4e542f4bf04d74bfebdfda1eed1fb0',
              name: '[CAMP] - DoubleClick MyInt - POSTE_MYN_LP_paga_con_qr_code',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/path.js',
                  settings: { paths: [{ value: '/codice-postepay.html', valueIsRegex: !0 }] },
                },
                {
                  modulePath: 'core/src/lib/conditions/cookie.js',
                  settings: {
                    name: 'notice_gdpr_prefs',
                    value: '^[^:]*2[^:]*:',
                    valueIsRegex: !0,
                  },
                },
              ],
              actions: [
                {
                  modulePath: 'doubleclick-floodlight/dist/lib/actions/floodlightCounter.js',
                  settings: {
                    params: {
                      cat: { key: 'cat', value: 'poste003' },
                      ord: { key: 'ord', value: '1' },
                      src: { key: 'src', value: '9593253' },
                      type: { key: 'type', value: 'lpqgq0' },
                    },
                    elementTagName: 'iframe',
                    floodlightType: 'counter',
                  },
                },
              ],
            },
            {
              id: 'RLe321bd61c6fc4f438301d78b8273a7cb',
              name: 'DR_MDP_alias_page',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'Landing_mdp' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page_plain%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RLbc8ea57e8d6d45778b97a5cee65fddc2',
              name: 'DR_landing_myposte',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'landing_myposte' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                      ],
                      props: [
                        { name: 'prop1', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page_plain%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL978da0f13a0d46f1bfcaf0f4f08dfd72',
              name: 'funnel_registrazione_business',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'funnel_registrazione_business' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: { source: function () {} },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'alias', value: 'eVar2' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page_plain%',
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
            {
              id: 'RL52fe0b5fb0e643ed835e1c3aa1aab277',
              name: 'Funnel_PosteDeliveryWeb',
              events: [
                {
                  modulePath: 'core/src/lib/events/directCall.js',
                  settings: { identifier: 'postedeliveryweb' },
                  ruleOrder: 50,
                },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                  settings: {
                    customSetup: {
                      source: function (e, t) {
                        var a = _satellite.getVar('DL_merchandising_desc_prodotto'),
                          r = _satellite.getVar('DL_merchandising_operationType'),
                          n =
                            (_satellite.getVar('DL_merchandising_order_id'),
                            _satellite.getVar('DL_merchandising_quantity')),
                          i = _satellite.getVar('DL_merchandising_price'),
                          o = _satellite.getVar('DL_metodo_pagamento');
                        'add' == r &&
                          ((t.products = 'Invio Pacchi;' + a + ';' + n + ';' + i),
                          (t.events = 'scAdd')),
                          'purchase' == r &&
                            ((t.products = 'Invio Pacchi;' + a + ';' + n + ';' + i),
                            (t.events = 'purchase'),
                            (t.purchaseID = 'order_id'),
                            (t.eVar16 = o)),
                          0 < a.length && ((t.channel = a), (t.eVar3 = t.channel));
                      },
                    },
                    trackerProperties: {
                      eVars: [
                        { name: 'eVar2', type: 'value', value: '%DL_alias_page_plain%' },
                        { name: 'eVar198', type: 'value', value: '%DL_tagbuildversion%' },
                        { name: 'eVar200', type: 'value', value: 'WEB' },
                      ],
                      props: [
                        { name: 'prop1', type: 'alias', value: 'eVar2' },
                        { name: 'prop2', type: 'alias', value: 'eVar200' },
                      ],
                      pageURL: '%DL_alias_page_plain%',
                      pageName: '%pageName%',
                    },
                  },
                },
                {
                  modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                  settings: { type: 'page' },
                },
              ],
            },
          ],
        });
    })();
    var $___var_fdd943595cfc391f = (function () {
      const $___old_869f2686c48aefd2 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_869f2686c48aefd2)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_47c01efa79e9f191.userAgent
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
          function c (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function r () {}
          function n (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function i (e) {
            if (!(this instanceof i)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              d(e, this);
          }
          function o (r, n) {
            for (; 3 === r._state; ) r = r._value;
            0 !== r._state
              ? ((r._handled = !0),
                i._immediateFn(function () {
                  var e = 1 === r._state ? n.onFulfilled : n.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(r._value);
                    } catch (a) {
                      return void l(n.promise, a);
                    }
                    s(n.promise, t);
                  } else (1 === r._state ? s : l)(n.promise, r._value);
                }))
              : r._deferreds.push(n);
          }
          function s (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var a = t.then;
                if (t instanceof i) return (e._state = 3), (e._value = t), void u(e);
                if ('function' == typeof a) return void d(n(a, t), e);
              }
              (e._state = 1), (e._value = t), u(e);
            } catch (r) {
              l(e, r);
            }
          }
          function l (e, t) {
            (e._state = 2), (e._value = t), u(e);
          }
          function u (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              i._immediateFn(function () {
                e._handled || i._unhandledRejectionFn(e._value);
              });
            for (var t = 0, a = e._deferreds.length; t < a; t++) o(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function p (e, t, a) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = a);
          }
          function d (e, t) {
            var a = !1;
            try {
              e(
                function (e) {
                  a || ((a = !0), s(t, e));
                },
                function (e) {
                  a || ((a = !0), l(t, e));
                }
              );
            } catch (r) {
              if (a) return;
              (a = !0), l(t, r);
            }
          }
          function m (e) {
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
              var r = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  r[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
              );
            } catch (n) {
              return !1;
            }
          }
          function v (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var _ = function (e) {
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
              g = 'debug',
              f = function (t, e) {
                var a = function () {
                    return 'true' === t.getItem(g);
                  },
                  r = function (e) {
                    t.setItem(g, e);
                  },
                  n = [],
                  i = function (e) {
                    n.push(e);
                  };
                return (
                  (e.outputEnabled = a()),
                  {
                    onDebugChanged: i,
                    getDebugEnabled: a,
                    setDebugEnabled: function (t) {
                      a() !== t &&
                        (r(t),
                        (e.outputEnabled = t),
                        n.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              b = 'Module did not export a function.',
              h = function (i, o) {
                return function (e, t, a) {
                  a = a || [];
                  var r = i.getModuleExports(e.modulePath);
                  if ('function' != typeof r) throw new Error(b);
                  var n = o(e.settings || {}, t);
                  return r.bind(null, n).apply(null, a);
                };
              },
              y = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              L = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              V = '\uD83D\uDE80',
              D =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : V,
              P = !1,
              S = function (e) {
                if (P && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(D),
                    e !== L.DEBUG || window.console[e] || (e = L.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              j = S.bind(null, L.LOG),
              k = S.bind(null, L.INFO),
              E = S.bind(null, L.DEBUG),
              R = S.bind(null, L.WARN),
              T = S.bind(null, L.ERROR),
              N = {
                log: j,
                info: k,
                debug: E,
                warn: R,
                error: T,
                get outputEnabled () {
                  return P;
                },
                set outputEnabled (e) {
                  P = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: j.bind(null, t),
                    info: k.bind(null, t),
                    debug: E.bind(null, t),
                    warn: R.bind(null, t),
                    error: T.bind(null, t),
                  };
                },
              },
              C = e(function (r) {
                !(function (e) {
                  if (((r.exports = e()), !!0)) {
                    var t = window.Cookies,
                      a = (window.Cookies = e());
                    a.noConflict = function () {
                      return (window.Cookies = t), a;
                    };
                  }
                })(function () {
                  function l () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var a = arguments[e];
                      for (var r in a) t[r] = a[r];
                    }
                    return t;
                  }
                  function u (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (c) {
                    function s () {}
                    function a (e, t, a) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (a = l({ path: '/' }, s.defaults, a)).expires &&
                          (a.expires = new Date(1 * new Date() + 86400000 * a.expires)),
                          (a.expires = a.expires ? a.expires.toUTCString() : '');
                        try {
                          var r = JSON.stringify(t);
                          /^[\{\[]/.test(r) && (t = r);
                        } catch (o) {}
                        (t = c.write
                          ? c.write(t, e)
                          : encodeURIComponent(String(t)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var n = '';
                        for (var i in a)
                          a[i] &&
                            ((n += '; ' + i), !0 !== a[i] && (n += '=' + a[i].split(';')[0]));
                        return (document.cookie = e + '=' + t + n);
                      }
                    }
                    function t (e, t) {
                      if ('undefined' != typeof document) {
                        for (
                          var a = {},
                            r = document.cookie ? document.cookie.split('; ') : [],
                            n = 0;
                          n < r.length;
                          n++
                        ) {
                          var i = r[n].split('='),
                            o = i.slice(1).join('=');
                          t || '"' !== o.charAt(0) || (o = o.slice(1, -1));
                          try {
                            var s = u(i[0]);
                            if (((o = (c.read || c)(o, s) || u(o)), t))
                              try {
                                o = JSON.parse(o);
                              } catch (l) {}
                            if (((a[s] = o), e === s)) break;
                          } catch (l) {}
                        }
                        return e ? a[e] : a;
                      }
                    }
                    return (
                      (s.set = a),
                      (s.get = function (e) {
                        return t(e, !1);
                      }),
                      (s.getJSON = function (e) {
                        return t(e, !0);
                      }),
                      (s.remove = function (e, t) {
                        a(e, '', l(t, { expires: -1 }));
                      }),
                      (s.defaults = {}),
                      (s.withConverter = e),
                      s
                    );
                  }
                  return e(function () {});
                });
              }),
              w = { get: C.get, set: C.set, remove: C.remove },
              I = window,
              x = 'com.adobe.reactor.',
              O = function (r, e) {
                var n = x + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_290122642bebc006 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_290122642bebc006)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return I[r].getItem(n + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_290122642bebc006)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_290122642bebc006
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_81c0207d994e0f29 = {}.constructor.getOwnPropertyDescriptor(
                        window,
                        'localStorage'
                      ),
                      $___old_77756f21a71a3ab3 = {}.constructor.getOwnPropertyDescriptor(
                        window,
                        'sessionStorage'
                      );
                    try {
                      if ($___old_81c0207d994e0f29)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      if ($___old_77756f21a71a3ab3)
                        ({}.constructor.defineProperty(
                          window,
                          'sessionStorage',
                          $___stub_b317e19f866a2da7.sessionStorage
                        ));
                      return function () {
                        try {
                          return I[r].setItem(n + e, t), !0;
                        } catch (a) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_81c0207d994e0f29)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_81c0207d994e0f29
                        ));
                      if ($___old_77756f21a71a3ab3)
                        ({}.constructor.defineProperty(
                          window,
                          'sessionStorage',
                          $___old_77756f21a71a3ab3
                        ));
                    }
                  },
                };
              },
              B = '_sdsat_',
              U = 'dataElements.',
              A = 'dataElementCookiesMigrated',
              M = O('localStorage'),
              z = O('sessionStorage', U),
              W = O('localStorage', U),
              F = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              q = {},
              H = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (a) {}
                return t;
              },
              G = function (e, t, a) {
                var r;
                switch (t) {
                  case F.PAGEVIEW:
                    return void (q[e] = a);
                  case F.SESSION:
                    return void ((r = H(a)) && z.setItem(e, r));
                  case F.VISITOR:
                    return void ((r = H(a)) && W.setItem(e, r));
                }
              },
              Q = function (e, t) {
                var a = w.get(B + e);
                a !== undefined && G(e, t, a);
              },
              Y = {
                setValue: G,
                getValue: function (e, t) {
                  var a;
                  switch (t) {
                    case F.PAGEVIEW:
                      return q.hasOwnProperty(e) ? q[e] : null;
                    case F.SESSION:
                      return null === (a = z.getItem(e)) ? a : JSON.parse(a);
                    case F.VISITOR:
                      return null === (a = W.getItem(e)) ? a : JSON.parse(a);
                  }
                },
                migrateCookieData: function (t) {
                  M.getItem(A) ||
                    (Object.keys(t).forEach(function (e) {
                      Q(e, t[e].storageDuration);
                    }),
                    M.setItem(A, !0));
                },
              },
              $ = function (e, t, a, r) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  a +
                  (r ? '\n' + r : '')
                );
              },
              J = function (s, l, c, u) {
                return function (e, t) {
                  var a = l(e);
                  if (!a) return u ? '' : undefined;
                  var r,
                    n = a.storageDuration;
                  try {
                    r = s.getModuleExports(a.modulePath);
                  } catch (o) {
                    return void N.error($(a, e, o.message, o.stack));
                  }
                  if ('function' == typeof r) {
                    var i;
                    try {
                      i = r(c(a.settings, t), t);
                    } catch (o) {
                      return void N.error($(a, e, o.message, o.stack));
                    }
                    return (
                      n && (null != i ? Y.setValue(e, n, i) : (i = Y.getValue(e, n))),
                      null == i && null != a.defaultValue && (i = a.defaultValue),
                      'string' == typeof i &&
                        (a.cleanText && (i = y(i)), a.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  N.error($(a, e, 'Module did not export a function.'));
                };
              },
              K = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return y(e.textContent);
                },
              },
              Z = function (e, t, a) {
                for (var r, n = e, i = 0, o = t.length; i < o; i++) {
                  if (null == n) return undefined;
                  var s = t[i];
                  if (a && '@' === s.charAt(0)) {
                    var l = s.slice(1);
                    n = K[l](n);
                  } else if (n.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) {
                    var c = r[1];
                    n = n.getAttribute(c);
                  } else n = n[s];
                }
                return n;
              },
              X = function (i, o, s) {
                return function (e, t) {
                  var a;
                  if (o(e)) a = s(e, t);
                  else {
                    var r = e.split('.'),
                      n = r.shift();
                    'this' === n
                      ? t && (a = Z(t.element, r, !0))
                      : 'event' === n
                      ? t && (a = Z(t, r))
                      : 'target' === n
                      ? t && (a = Z(t.target, r))
                      : (a = Z(i[n], r));
                  }
                  return a;
                };
              },
              ee = function (a, r) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    r(e) || 'this' === t || 'event' === t || 'target' === t || a.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, a) {
                var r = { exports: {} };
                return e.call(r.exports, r, r.exports, t, a), r.exports;
              },
              ae = function () {
                var o = {},
                  a = function (e) {
                    var t = o[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(o).forEach(function (e) {
                      try {
                        r(e);
                      } catch (a) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          a.message +
                          (a.stack ? '\n' + a.stack : '');
                        N.error(t);
                      }
                    });
                  },
                  r = function (e) {
                    var t = a(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, a, r, n) {
                    var i = { definition: t, extensionName: a, require: r, turbine: n };
                    (i.require = r), (o[e] = i);
                  },
                  hydrateCache: e,
                  getModuleExports: r,
                  getModuleDefinition: function (e) {
                    return a(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return a(e).extensionName;
                  },
                };
              },
              re = !1,
              ne = function (r) {
                return function (t, a) {
                  var e = r._monitors;
                  e &&
                    (re ||
                      (N.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (re = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](a);
                    }));
                };
              },
              ie = function (n, i, o) {
                var a,
                  r,
                  s,
                  l,
                  c = [],
                  u = function (e, t, a) {
                    if (!n(t)) return e;
                    c.push(t);
                    var r = i(t, a);
                    return c.pop(), null == r && o ? '' : r;
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
                  (r = function (e, t) {
                    for (var a = {}, r = Object.keys(e), n = 0; n < r.length; n++) {
                      var i = r[n],
                        o = e[i];
                      a[i] = l(o, t);
                    }
                    return a;
                  }),
                  (s = function (e, t) {
                    for (var a = [], r = 0, n = e.length; r < n; r++) a.push(l(e[r], t));
                    return a;
                  }),
                  (l = function (e, t) {
                    return 'string' == typeof e
                      ? a(e, t)
                      : Array.isArray(e)
                      ? s(e, t)
                      : 'object' == typeof e && null !== e
                      ? r(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < c.length
                      ? (N.error('Data element circular reference detected: ' + c.join(' -> ')), e)
                      : l(e, t);
                  }
                );
              },
              oe = function (n) {
                return function (e, t) {
                  if ('string' == typeof e) n[arguments[0]] = t;
                  else if (arguments[0]) {
                    var a = arguments[0];
                    for (var r in a) n[r] = a[r];
                  }
                };
              },
              se = setTimeout;
            (i.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (i.prototype.then = function (e, t) {
                var a = new this.constructor(r);
                return o(this, new p(e, t, a)), a;
              }),
              (i.prototype['finally'] = t),
              (i.all = function (t) {
                return new i(function (n, i) {
                  function o (t, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var a = e.then;
                        if ('function' == typeof a)
                          return void a.call(
                            e,
                            function (e) {
                              o(t, e);
                            },
                            i
                          );
                      }
                      (s[t] = e), 0 == --l && n(s);
                    } catch (r) {
                      i(r);
                    }
                  }
                  if (!c(t)) return i(new TypeError('Promise.all accepts an array'));
                  var s = Array.prototype.slice.call(t);
                  if (0 === s.length) return n([]);
                  for (var l = s.length, e = 0; e < s.length; e++) o(e, s[e]);
                });
              }),
              (i.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              }),
              (i.reject = function (a) {
                return new i(function (e, t) {
                  t(a);
                });
              }),
              (i.race = function (n) {
                return new i(function (e, t) {
                  if (!c(n)) return t(new TypeError('Promise.race accepts an array'));
                  for (var a = 0, r = n.length; a < r; a++) i.resolve(n[a]).then(e, t);
                });
              }),
              (i._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  se(e, 0);
                }),
              (i._unhandledRejectionFn = function Pt (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var le = window.Promise || i['default'] || i,
              ce = function (c, a, r) {
                return function (s, t, l, e) {
                  return e.then(function () {
                    var i,
                      o = s.delayNext;
                    return new le(function (e, t) {
                      var a = c(s, l, [l]);
                      if (!o) return e();
                      var r = s.timeout,
                        n = new le(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      le.race([a, n]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = a(e)), r(s, t, e), le.reject(e);
                      })
                      .then(function () {
                        clearTimeout(i);
                      });
                  });
                };
              },
              ue = function (l, a, r, n, c) {
                return function (o, t, s, e) {
                  return e.then(function () {
                    var i;
                    return new le(function (e, t) {
                      var a = l(o, s, [s]),
                        r = o.timeout,
                        n = new le(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      le.race([a, n]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = a(e)), n(o, t, e), le.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(i), !r(o, e))) return c(o, t), le.reject();
                      });
                  });
                };
              },
              pe = le.resolve(),
              de = function (r, n, e) {
                return function (t, a) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        pe = r(e, t, a, pe);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        pe = n(e, t, a, pe);
                      }),
                    (pe = (pe = pe.then(function () {
                      e(t);
                    }))['catch'](function () {}))
                  );
                };
              },
              me = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              _e = function (o, s, l, c) {
                return function (e, t) {
                  var a;
                  if (e.conditions)
                    for (var r = 0; r < e.conditions.length; r++) {
                      a = e.conditions[r];
                      try {
                        var n = o(a, t, [t]);
                        if (me(n))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!s(a, n)) return l(a, e), !1;
                      } catch (i) {
                        return c(a, e, i), !1;
                      }
                    }
                  return !0;
                };
              },
              ve = function (a, r) {
                return function (e, t) {
                  a(e, t) && r(e, t);
                };
              },
              ge = function (a) {
                return function (e) {
                  var t = a.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              fe = function (n) {
                return function (e) {
                  var t = e.rule,
                    a = e.event,
                    r = n.getModuleDefinition(a.modulePath).name;
                  return {
                    $type: n.getModuleExtensionName(a.modulePath) + '.' + r,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              be = function (s, l, c, u, p, d) {
                return function (a, e) {
                  var r = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var n = p(e);
                    l(t, null, [
                      function i (e) {
                        var t = c(n, e);
                        a(function () {
                          s(t, r);
                        });
                      },
                    ]);
                  } catch (o) {
                    d.error(u(t, r, o));
                  }
                };
              },
              he = function (n, i, o, s) {
                return function (e, t, a) {
                  var r = i(e);
                  o.error(n(r, t.name, a)), s('ruleActionFailed', { rule: t, action: e });
                };
              },
              ye = function (n, i, o, s) {
                return function (e, t, a) {
                  var r = i(e);
                  o.error(n(r, t.name, a)), s('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Le = function (r, n, i) {
                return function (e, t) {
                  var a = r(e);
                  n.log('Condition "' + a + '" for rule "' + t.name + '" was not met.'),
                    i('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Ve = function (t, a) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), a('ruleCompleted', { rule: e });
                };
              },
              De = function (i, o, s) {
                return function (e, t) {
                  var a;
                  if (e.actions)
                    for (var r = 0; r < e.actions.length; r++) {
                      a = e.actions[r];
                      try {
                        i(a, t, [t]);
                      } catch (n) {
                        return void o(a, e, n);
                      }
                    }
                  s(e);
                };
              },
              Pe = function (a, r, n, i) {
                return function (e, t) {
                  i('ruleTriggered', { rule: t }), a ? n(t, e) : r(t, e);
                };
              },
              Se = function (e, t, a) {
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
              je = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              ke = [],
              Ee = !1,
              Re = function (e) {
                Ee ? e() : ke.push(e);
              },
              Te = function (e, t, a) {
                e(t).forEach(function (e) {
                  a(Re, e);
                }),
                  (Ee = !0),
                  ke.forEach(function (e) {
                    e();
                  }),
                  (ke = []);
              },
              Ne = function (e) {
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
              Ce = Object.getOwnPropertySymbols,
              we = Object.prototype.hasOwnProperty,
              Ie = Object.prototype.propertyIsEnumerable,
              xe = a()
                ? Object.assign
                : function (e) {
                    for (var t, a, r = m(e), n = 1; n < arguments.length; n++) {
                      for (var i in (t = Object(arguments[n]))) we.call(t, i) && (r[i] = t[i]);
                      if (Ce) {
                        a = Ce(t);
                        for (var o = 0; o < a.length; o++) Ie.call(t, a[o]) && (r[a[o]] = t[a[o]]);
                      }
                    }
                    return r;
                  },
              Oe = function (e, t) {
                return (
                  xe((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          N.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Be = function (l, c) {
                return function (e, t) {
                  var a = l[e];
                  if (a) {
                    var r = a.modules;
                    if (r)
                      for (var n = Object.keys(r), i = 0; i < n.length; i++) {
                        var o = n[i],
                          s = r[o];
                        if (s.shared && s.name === t) return c.getModuleExports(o);
                      }
                  }
                };
              },
              Ue = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Ae = function (a, r) {
                return function (e) {
                  if (r) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return a + e;
                };
              },
              Me = '.js',
              ze = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              We = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              Fe = function (e, t) {
                We(t, Me) || (t += Me);
                var a = t.split('/'),
                  r = ze(e).split('/');
                return (
                  a.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? r.length && r.pop() : r.push(e));
                  }),
                  r.join('/')
                );
              },
              qe = document,
              He = function (a, r) {
                return new le(function (e, t) {
                  (r.onload = function () {
                    e(r);
                  }),
                    (r.onerror = function () {
                      t(new Error('Failed to load script ' + a));
                    });
                });
              },
              Ge = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var a = He(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), a;
              },
              Qe = function (e, t, a, r) {
                (t = t || '&'), (a = a || '=');
                var n = {};
                if ('string' != typeof e || 0 === e.length) return n;
                var i = /\+/g;
                e = e.split(t);
                var o = 1000;
                r && 'number' == typeof r.maxKeys && (o = r.maxKeys);
                var s = e.length;
                0 < o && o < s && (s = o);
                for (var l = 0; l < s; ++l) {
                  var c,
                    u,
                    p,
                    d,
                    m = e[l].replace(i, '%20'),
                    _ = m.indexOf(a);
                  0 <= _ ? ((c = m.substr(0, _)), (u = m.substr(_ + 1))) : ((c = m), (u = '')),
                    (p = decodeURIComponent(c)),
                    (d = decodeURIComponent(u)),
                    v(n, p)
                      ? Array.isArray(n[p])
                        ? n[p].push(d)
                        : (n[p] = [n[p], d])
                      : (n[p] = d);
                }
                return n;
              },
              Ye = function (e) {
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
              $e = function (a, r, n, e) {
                return (
                  (r = r || '&'),
                  (n = n || '='),
                  null === a && (a = undefined),
                  'object' == typeof a
                    ? Object.keys(a)
                        .map(function (e) {
                          var t = encodeURIComponent(Ye(e)) + n;
                          return Array.isArray(a[e])
                            ? a[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(Ye(e));
                                })
                                .join(r)
                            : t + encodeURIComponent(Ye(a[e]));
                        })
                        .join(r)
                    : e
                    ? encodeURIComponent(Ye(e)) + n + encodeURIComponent(Ye(a))
                    : ''
                );
              },
              Je = e(function (e, t) {
                (t.decode = t.parse = Qe), (t.encode = t.stringify = $e);
              }),
              Ke = (Je.decode, Je.parse, Je.encode, Je.stringify, '@adobe/reactor-'),
              Ze = {
                cookie: w,
                document: qe,
                'load-script': Ge,
                'object-assign': xe,
                promise: le,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), Je.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return Je.stringify(e);
                  },
                },
                window: I,
              },
              Xe = function (r) {
                return function (e) {
                  if (0 === e.indexOf(Ke)) {
                    var t = e.substr(Ke.length),
                      a = Ze[t];
                    if (a) return a;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return r(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, o, s, l, c) {
                var u = e.extensions,
                  p = e.buildInfo,
                  d = e.property.settings;
                if (u) {
                  var m = Be(u, o);
                  Object.keys(u).forEach(function (r) {
                    var n = u[r],
                      e = Ue(l, n.settings);
                    if (n.modules) {
                      var t = N.createPrefixedLogger(n.displayName),
                        a = Ae(n.hostedLibFilesBaseUrl, p.minified),
                        i = {
                          buildInfo: p,
                          getDataElementValue: c,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: a,
                          getSharedModule: m,
                          logger: t,
                          propertySettings: d,
                          replaceTokens: l,
                          onDebugChanged: s.onDebugChanged,
                          get debugEnabled () {
                            return s.getDebugEnabled();
                          },
                        };
                      Object.keys(n.modules).forEach(function (a) {
                        var e = n.modules[a],
                          t = Xe(function (e) {
                            var t = Fe(a, e);
                            return o.getModuleExports(t);
                          });
                        o.registerModule(a, e, r, t, i);
                      });
                    }
                  }),
                    o.hydrateCache();
                }
                return o;
              },
              tt = function (e, t, a, r, n) {
                var i = N.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  N.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: t.property.name }),
                  (e.company = t.company),
                  (e.buildInfo = t.buildInfo),
                  (e.logger = i),
                  (e.notify = function (e, t) {
                    switch (
                      (N.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      t)
                    ) {
                      case 3:
                        i.info(e);
                        break;
                      case 4:
                        i.warn(e);
                        break;
                      case 5:
                        i.error(e);
                        break;
                      default:
                        i.log(e);
                    }
                  }),
                  (e.getVar = r),
                  (e.setVar = n),
                  (e.setCookie = function (e, t, a) {
                    var r = '',
                      n = {};
                    a && ((r = ', { expires: ' + a + ' }'), (n.expires = a));
                    var i =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      r +
                      ').';
                    N.warn(i), w.set(e, t, n);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      N.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      w.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    N.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      w.remove(e);
                  }),
                  (e.cookie = w),
                  (e.pageBottom = function () {}),
                  (e.setDebug = a);
                var o = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      o ||
                        (N.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (o = !0)),
                      t
                    );
                  },
                });
              },
              at = window._satellite;
            if (at && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var rt = at.container;
              delete at.container;
              var nt = rt.property.settings.undefinedVarsReturnEmpty,
                it = rt.property.settings.ruleComponentSequencingEnabled,
                ot = rt.dataElements || {};
              Y.migrateCookieData(ot);
              var st,
                lt = function (e) {
                  return ot[e];
                },
                ct = ae(),
                ut = J(
                  ct,
                  lt,
                  function () {
                    return st.apply(null, arguments);
                  },
                  nt
                ),
                pt = {},
                dt = oe(pt),
                mt = ee(pt, lt),
                _t = X(pt, lt, ut);
              st = ie(mt, _t, nt);
              var vt = f(O('localStorage'), N);
              tt(at, rt, vt.setDebugEnabled, _t, dt), et(rt, ct, vt, st, ut);
              var gt = ne(at),
                ft = h(ct, st),
                bt = ge(ct),
                ht = Le(bt, N, gt),
                yt = ye(Se, bt, N, gt),
                Lt = he(Se, bt, N, gt),
                Vt = Ve(N, gt),
                Dt = be(
                  Pe(
                    it,
                    ve(_e(ft, je, ht, yt), De(ft, Lt, Vt)),
                    de(ue(ft, Ne, je, yt, ht), ce(ft, Ne, Lt), Vt),
                    gt
                  ),
                  ft,
                  Oe,
                  Se,
                  fe(ct),
                  N
                );
              Te(_, rt.rules || [], Dt);
            }
            return at;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_869f2686c48aefd2)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_869f2686c48aefd2
          ));
      }
    })();
    _satellite = $___var_fdd943595cfc391f;
  })();
}
