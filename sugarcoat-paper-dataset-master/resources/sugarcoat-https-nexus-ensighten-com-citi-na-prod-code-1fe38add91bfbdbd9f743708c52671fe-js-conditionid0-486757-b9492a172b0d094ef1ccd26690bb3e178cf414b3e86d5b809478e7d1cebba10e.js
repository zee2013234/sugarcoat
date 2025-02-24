{
  const $___stub_4011c24c598eb934 = {};
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
  })($___stub_4011c24c598eb934);
  const $___stub_f41e7bff56ded01f = {};
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
  })($___stub_f41e7bff56ded01f);
  (function () {
    Bootstrapper.bindDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['naAnalyticsPageView'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          Bootstrapper.bindImmediate(
            function () {
              var ddConditions = {
                not: ['not', null, 'not'],
                caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
                compareTo: ['citigroup', '...', 'false'],
                requiredData: ['17008', '17006', '47535'],
                comparators: ['matches', 'matches', 'is'],
              };
              Bootstrapper.data.resolve(ddConditions.requiredData, function () {
                ddConditions.values = Array.prototype.slice.call(arguments, 0);
                var Bootstrapper = window['Bootstrapper'];
                if (Bootstrapper.data.checkConditions(ddConditions)) {
                  var Bootstrapper = window['Bootstrapper'];
                  var ensightenOptions = Bootstrapper.ensightenOptions;
                  var url1 = document.location.pathname;
                  if (url1.indexOf('/credit-cards/home') == -1) {
                    window.bk_async = function () {
                      bk_use_multiple_iframes = true;
                      bk_allow_multiple_calls = true;
                      bk_addPageCtx('language', citiData.pageLanguage);
                      bk_addPageCtx('product', citiData.custProdString);
                      bk_addPageCtx('event', citiData.eventList);
                      bk_addPageCtx('category', citiData.pageCat);
                      bk_addPageCtx('page', citiData.pageName);
                      bk_addPageCtx('section1', citiData.siteSection1);
                      bk_addPageCtx('section2', citiData.siteSection2);
                      bk_addPageCtx('section3', citiData.siteSection3);
                      bk_addPageCtx('section4', citiData.siteSection4);
                      bk_addPageCtx('bankappstatus', citiData.bankAppStatus);
                      bk_addPageCtx('productID', citiData.prodID);
                      BKTAG.doTag(63068, 10);
                    };
                    (function () {
                      var scripts = document.getElementsByTagName('script')[0];
                      var s = document.createElement('script');
                      s.async = true;
                      s.src = 'https://tags.bkrtx.com/js/bk-coretag.js';
                      scripts.parentNode.insertBefore(s, scripts);
                    })();
                  }
                }
              });
            },
            -1,
            -1
          );
        });
      },
      3183109,
      609396
    );
    Bootstrapper.bindImmediate(
      function () {
        var ddConditions = {
          not: ['not', null, 'not'],
          caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
          compareTo: ['citigroup', '...', 'false'],
          requiredData: ['17008', '17006', '47535'],
          comparators: ['matches', 'matches', 'is'],
        };
        Bootstrapper.data.resolve(ddConditions.requiredData, function () {
          ddConditions.values = Array.prototype.slice.call(arguments, 0);
          var Bootstrapper = window['Bootstrapper'];
          if (Bootstrapper.data.checkConditions(ddConditions))
            Bootstrapper.bindImmediate(
              function () {
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                $('#ddSubmit button[data-target="#noInfoModal"]').click(function () {
                  s.pageName = 'citibank card application - beneficial owner - not now overlay';
                  s.prop22 = 'citibank card application - beneficial owner - not now overlay';
                  s.t();
                });
              },
              2532573,
              551970
            );
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var ddConditions = {
          not: ['not', null, 'not'],
          caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
          compareTo: ['citigroup', '...', 'false'],
          requiredData: ['17008', '17006', '47535'],
          comparators: ['matches', 'matches', 'is'],
        };
        Bootstrapper.data.resolve(ddConditions.requiredData, function () {
          ddConditions.values = Array.prototype.slice.call(arguments, 0);
          var Bootstrapper = window['Bootstrapper'];
          if (Bootstrapper.data.checkConditions(ddConditions))
            Bootstrapper.bindDOMParsed(
              function () {
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                jQuery("a[href*='/US/JRS/helpcenter/main.do']").click(function () {
                  s.linkTrackVars = 'eVar38,eVar20,events';
                  s.linkTrackEvents = 'event19';
                  s.eVar38 = citiData.pageName;
                  s.eVar20 = 'help and faqs';
                  s.events = 'event19';
                  s.tl('this', 'o', 'help and faqs clicked');
                });
              },
              2670712,
              571630
            );
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var ddConditions = {
          not: ['not', null, 'not'],
          caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
          compareTo: ['citigroup', '...', 'false'],
          requiredData: ['17008', '17006', '47535'],
          comparators: ['matches', 'matches', 'is'],
        };
        Bootstrapper.data.resolve(ddConditions.requiredData, function () {
          ddConditions.values = Array.prototype.slice.call(arguments, 0);
          var Bootstrapper = window['Bootstrapper'];
          if (Bootstrapper.data.checkConditions(ddConditions))
            Bootstrapper.bindImmediate(
              function () {
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                if (!!window.citiData && !!window.citiData.SCInfo)
                  for (var x in citiData.SCInfo)
                    if (!!citiData[x] === false) citiData[x] = citiData.SCInfo[x];
              },
              2514756,
              385436
            );
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        Bootstrapper.ensEvent.add(['naAnalyticsPageView'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          Bootstrapper.bindImmediate(
            function () {
              var ddConditions = {
                not: ['not', null, 'not'],
                caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
                compareTo: ['citigroup', '...', 'false'],
                requiredData: ['17008', '17006', '47535'],
                comparators: ['matches', 'matches', 'is'],
              };
              Bootstrapper.data.resolve(ddConditions.requiredData, function () {
                ddConditions.values = Array.prototype.slice.call(arguments, 0);
                var Bootstrapper = window['Bootstrapper'];
                if (Bootstrapper.data.checkConditions(ddConditions)) {
                  var Bootstrapper = window['Bootstrapper'];
                  var ensightenOptions = Bootstrapper.ensightenOptions;
                  Bootstrapper.AF.push(['call', 's', 'exec']);
                }
              });
            },
            -1,
            -1
          );
        });
      },
      2929498,
      [3375966],
      486892,
      [359214]
    );
    Bootstrapper.bindImmediate(
      function () {
        var ddConditions = {
          not: ['not', null, 'not'],
          caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
          compareTo: ['citigroup', '...', 'false'],
          requiredData: ['17008', '17006', '47535'],
          comparators: ['matches', 'matches', 'is'],
        };
        Bootstrapper.data.resolve(ddConditions.requiredData, function () {
          ddConditions.values = Array.prototype.slice.call(arguments, 0);
          var Bootstrapper = window['Bootstrapper'];
          if (Bootstrapper.data.checkConditions(ddConditions))
            Bootstrapper.bindDOMLoaded(
              function () {
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                Bootstrapper._SC = Bootstrapper._SC || {};
                Bootstrapper._SC.dataHandler =
                  Bootstrapper._SC.dataHandler ||
                  function (a, b) {
                    return a && a.length && 0 < a.length && a[0] && a[0][b]
                      ? a[0][b]
                      : Bootstrapper.data.resolve(b);
                  };
                Bootstrapper.AF.push(['join', 's', 'dl', '17021']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17018']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17018']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17007']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17022']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17015']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17004']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17014']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17019']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17019']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17012']);
                Bootstrapper.AF.push(['join', 's', 'dl', '23090']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17008']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17009']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17010']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17011']);
                Bootstrapper.AF.push(['join', 's', 'dl', '20197']);
                Bootstrapper.AF.push(['join', 's', 'dl', '20197']);
                Bootstrapper.AF.push(['join', 's', 'dl', '23082']);
                Bootstrapper.AF.push(['join', 's', 'dl', '23079']);
                Bootstrapper.AF.push(['join', 's', 'dl', '23081']);
                Bootstrapper.AF.push(['join', 's', 'dl', '18789']);
                Bootstrapper.AF.push(['join', 's', 'dl', '20314']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17020']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17020']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17020']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17013']);
                Bootstrapper.AF.push(['join', 's', 'dl', '17013']);
                Bootstrapper.AF.push(['join', 's', 'dl', '19608']);
                Bootstrapper.AF.push(['join', 's', 'dl', '19052']);
                Bootstrapper.AF.push(['join', 's', 'dl', '19051']);
                Bootstrapper.AF.push(['join', 's', 'dl', '19053']);
                Bootstrapper.AF.push(['join', 's', 'dl', '21528']);
                Bootstrapper.AF.push(['join', 's', 'dl', '26401']);
                Bootstrapper.AF.push(['join', 's', 'dl', '26400']);
                Bootstrapper.AF.push(['join', 's', 'dl', '26399']);
                Bootstrapper.AF.push(['join', 's', 'dl', '21530']);
                Bootstrapper.AF.push(['join', 's', 'dl', '26398']);
                Bootstrapper.AF.push(['join', 's', 'dl', '21532']);
                Bootstrapper.AF.push(['join', 's', 'dl', '26437']);
                Bootstrapper.AF.push(['join', 's', 'dl', '34378']);
                Bootstrapper.AF.push(['join', 's', 'dl', '43435']);
                Bootstrapper.AF.push(['join', 's', 'dl', '43436']);
                Bootstrapper.AF.push(['join', 's', 'dl', '47875']);
                Bootstrapper.AF.push(['join', 's', 'dl', '45320']);
                Bootstrapper.AF.push(['join', 's', 'dl', '45320']);
                Bootstrapper.AF.push(['join', 's', 'dl', '26439']);
                Bootstrapper.AF.push(['push', 'SiteCatalyst', 'ns', 's']);
                Bootstrapper.AF.push([
                  'join',
                  's',
                  'pre',
                  [
                    [
                      'events',
                      function anon () {
                        try {
                          var transLayer = {
                            custError: 'event2',
                            regComplete: 'event3',
                            cardAppComplete: 'event4',
                            cardPaperlessEnr: 'event14',
                            cardPaperlessDeEnr: 'event15',
                            bankPaperlessEnr: 'event53',
                            bankPaperlessDeEnr: 'event54',
                            paperlessEnr: 'event14',
                            paperlessDeEnr: 'event15',
                            raStart: 'event24',
                            raComplete: 'event25',
                            raStep2: 'event26',
                            signOnSucc: 'event27',
                            signOnFail: 'event28',
                            cardAppStatusCheck: 'event32',
                            cardAppStart: 'event39',
                            cardAppStep2: 'event41',
                            regStart: 'event43',
                            cardBTAmount: 'event48',
                            cardBTFee: 'event49',
                            siteSearchExecute: 'event70',
                            siteSearchNull: 'event71',
                            siteSearchClick: 'event72',
                            selfServStart: 'event78',
                            siteSearch: 'event70',
                            selfServComplete: 'event79',
                            toolInteraction: 'event81',
                            banImp: 'event92',
                            bankAppStart: 'event93',
                            bankAppComplete: 'event100',
                            fundingAmount: 'event126',
                            helocAppStart: 'event200',
                            helocAppComplete: 'event201',
                            leadStart: 'event76',
                            leadComplete: 'event77',
                            docUpload: 'event131',
                            naturalSearchLand: 'event132',
                            systemAoEnr: 'event119',
                            systemPsEnr: 'event120',
                            tileDisplay: 'event45',
                            tileCTAClick: 'event46',
                            tileInteractionClick: 'event84',
                            tileOfferAcceptClick: 'event85',
                            menuClick: 'event140',
                          };
                          var patternMap = new RegExp(Object.keys(transLayer).join('|'), 'gi');
                          scEvents = window.citiData.eventList.replace(patternMap, function (
                            matched
                          ) {
                            return transLayer[matched];
                          });
                          if (window.citiData.fundingAmount) {
                            var fund = window.citiData.fundingAmount.replace('$', '');
                            var abc = ',event126=' + fund;
                            scEvents = scEvents.concat(abc);
                          }
                          return scEvents;
                        } catch (e) {
                          var return_val = '';
                          if (window.citiData.fundingAmount) {
                            var fund = window.citiData.fundingAmount.replace('$', '');
                            var abc = 'event126=' + fund;
                            return_val = return_val.concat(abc);
                          }
                          return return_val;
                        }
                      },
                    ],
                    [
                      'eVar19',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17021');
                      },
                    ],
                    [
                      'eVar17',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17018');
                      },
                    ],
                    [
                      'prop16',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17018');
                      },
                    ],
                    [
                      'channel',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17007');
                      },
                    ],
                    [
                      'eVar34',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17022');
                      },
                    ],
                    [
                      'prop8',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17015');
                      },
                    ],
                    [
                      'prop59',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17004');
                      },
                    ],
                    [
                      'prop11',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17014');
                      },
                    ],
                    [
                      'pageName',
                      function getAdobePageNameValue () {
                        var newPageName;
                        var pageURL = window.location.pathname;
                        var adobePageName =
                          window.citiData && window.citiData.pageName
                            ? window.citiData.pageName
                            : undefined;
                        if (adobePageName.indexOf('General Error Page') > -1) {
                          if (pageURL.indexOf('/cards/credit/application/TimeOut') > -1)
                            newPageName = 'Cards Application Session Timeout';
                        } else newPageName = adobePageName;
                        return newPageName;
                      },
                    ],
                    [
                      'prop17',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17019');
                      },
                    ],
                    [
                      'eVar3',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17019');
                      },
                    ],
                    [
                      'eVar78',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17012');
                      },
                    ],
                    [
                      'eVar89',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '23090');
                      },
                    ],
                    [
                      'prop1',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17008');
                      },
                    ],
                    [
                      'prop2',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17009');
                      },
                    ],
                    [
                      'prop3',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17010');
                      },
                    ],
                    [
                      'prop4',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17011');
                      },
                    ],
                    [
                      'prop12',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '20197');
                      },
                    ],
                    [
                      'eVar4',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '20197');
                      },
                    ],
                    [
                      'eVar33',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '23082');
                      },
                    ],
                    [
                      'eVar31',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '23079');
                      },
                    ],
                    [
                      'eVar32',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '23081');
                      },
                    ],
                    [
                      'list1',
                      function () {
                        try {
                          return window.citiData.flexDetail;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'hier1',
                      function anon () {
                        try {
                          return (
                            window.citiData.channel +
                            '/' +
                            window.citiData.siteSection1 +
                            '/' +
                            window.citiData.siteSection2 +
                            '/' +
                            window.citiData.siteSection3 +
                            '/' +
                            window.citiData.siteSection4
                          );
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'prop9',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '18789');
                      },
                    ],
                    [
                      'eVar73',
                      function anon () {
                        try {
                          if (window.innerWidth <= 599) return 'small|' + window.innerWidth;
                          else if (window.innerWidth >= 600 && window.innerWidth <= 3200)
                            return 'medium|' + window.innerWidth;
                          else if (window.innerWidth >= 3201) return 'large|' + window.innerWidth;
                          else return '';
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar71',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '20314');
                      },
                    ],
                    [
                      'transactionID',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17020');
                      },
                    ],
                    [
                      'prop58',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17020');
                      },
                    ],
                    [
                      'eVar90',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17020');
                      },
                    ],
                    [
                      'eVar1',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17013');
                      },
                    ],
                    [
                      'prop10',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '17013');
                      },
                    ],
                    [
                      'eVar70',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '19608');
                      },
                    ],
                    [
                      'eVar87',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '19052');
                      },
                    ],
                    [
                      'prop22',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '19051');
                      },
                    ],
                    [
                      'eVar42',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '19053');
                      },
                    ],
                    [
                      'eVar40',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '21528');
                      },
                    ],
                    [
                      'eVar53',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '26401');
                      },
                    ],
                    [
                      'eVar50',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '26400');
                      },
                    ],
                    [
                      'eVar43',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '26399');
                      },
                    ],
                    [
                      'eVar10',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '21530');
                      },
                    ],
                    [
                      'eVar30',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '26398');
                      },
                    ],
                    [
                      'eVar51',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '21532');
                      },
                    ],
                    [
                      'prop33',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '26437');
                      },
                    ],
                    [
                      'pageType',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '34378');
                      },
                    ],
                    [
                      'eVar47',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '43435');
                      },
                    ],
                    [
                      'eVar94',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '43436');
                      },
                    ],
                    [
                      'prop27',
                      function prop27info () {
                        var nonCardsAcxiomResponse =
                          window.citiData && window.citiData.acxiomResponse
                            ? window.citiData.acxiomResponse
                            : undefined;
                        var cardsAcxiomResponse =
                          window.citiData && window.citiData.SCInfo.acxiomResponse
                            ? window.citiData.SCInfo.acxiomResponse
                            : undefined;
                        var prop27value;
                        if (nonCardsAcxiomResponse && !cardsAcxiomResponse)
                          prop27value = nonCardsAcxiomResponse;
                        else if (cardsAcxiomResponse && !nonCardsAcxiomResponse)
                          prop27value = cardsAcxiomResponse;
                        return prop27value;
                      },
                    ],
                    [
                      'prop69',
                      function anon () {
                        try {
                          return citiData.loginStatus;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'prop74',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '47875');
                      },
                    ],
                    [
                      'eVar5',
                      function anon () {
                        try {
                          var searchType = citiData.searchType || '';
                          var searchTerm = citiData.searchTerm || '';
                          var e5value = searchType + searchTerm;
                          return e5value;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar60',
                      function anon () {
                        return citiData.leadType || '';
                      },
                    ],
                    [
                      'eVar99',
                      function () {
                        if (citiData.custStatus)
                          return (function anon () {
                            return citiData.custStatus || '';
                          })();
                      },
                    ],
                    [
                      'prop68',
                      function () {
                        if (citiData.alertMsg)
                          return (function anon () {
                            return citiData.alertMsg || '';
                          })();
                      },
                    ],
                    [
                      'eVar24',
                      function anon () {
                        var parseQueryString = function () {
                          var str = window.location.search;
                          var objURL = {};
                          str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function (
                            $0,
                            $1,
                            $2,
                            $3
                          ) {
                            objURL[$1] = $3;
                          });
                          return objURL;
                        };
                        var params = parseQueryString();
                        var waveId = '';
                        if (params.waveId) waveId = params.waveId;
                        return waveId;
                      },
                    ],
                    [
                      'eVar27',
                      function () {
                        try {
                          return citiData.prodID;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar6',
                      function () {
                        try {
                          return window.citiData.searchResultClickTerm;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar98',
                      function () {
                        try {
                          return window.citiData.regDetail;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'prop5',
                      function () {
                        try {
                          return window.citiData.siteSection5;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar117',
                      function () {
                        try {
                          return citiData.btaRegion;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar103',
                      function () {
                        try {
                          return window.citiData.flexPlans;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'prop37',
                      function anon () {
                        var a1 = $('script[src*="nexus.ensighten.com/"]').attr('src');
                        var a2 = a1.split('nexus.ensighten.com/');
                        var a3 = a2.length;
                        var a4 = a2[a3 - 1].split('/');
                        return a4[1];
                      },
                    ],
                    [
                      'eVar95',
                      function () {
                        try {
                          return window.citiData.pendReason;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar93',
                      function () {
                        try {
                          return window.citiData.fundingMethod;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'prop44',
                      function () {
                        try {
                          return window.citiData.pos_plan_detail;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'prop32',
                      function () {
                        try {
                          return window.citiData.pos_indicator;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar112',
                      function () {
                        try {
                          return window.citiData.pos_indicator;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar111',
                      function () {
                        try {
                          return window.citiData.pos_plan_detail;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar114',
                      function () {
                        try {
                          return window._dl.test_id;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar85',
                      function () {
                        try {
                          return window.citiData.acxiomRCode;
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'products',
                      function anon () {
                        try {
                          var productdata = Bootstrapper._SC.dataHandler(arguments, '26439');
                          var productdata1 = window.citiData.pos_products;
                          var productdata2 = window.citiData.tile;
                          if (productdata != '') return productdata;
                          else if (productdata1 != '' && typeof productdata1 != 'undefined')
                            return productdata1;
                          else if (productdata2 != '' && typeof productdata2 != 'undefined')
                            return productdata2;
                          else return '';
                        } catch (e) {
                          return '';
                        }
                      },
                    ],
                    [
                      'eVar29',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '45320');
                      },
                    ],
                    [
                      'eVar72',
                      function anon () {
                        return citiData.selfServCompDetail || '';
                      },
                    ],
                    [
                      'eVar29',
                      function () {
                        return Bootstrapper._SC.dataHandler(arguments, '45320');
                      },
                    ],
                  ],
                ]);
                Bootstrapper.AF.push([
                  'join',
                  's',
                  'post',
                  [
                    [
                      'eVar62',
                      function geteVar62Value () {
                        var cuuidValue =
                          window.citiData && window.citiData.cuuid
                            ? window.citiData.cuuid
                            : undefined;
                        var cuuidOther =
                          window.citiData && window.citiData.CUUID
                            ? window.citiData.CUUID
                            : undefined;
                        var v62Value;
                        if (cuuidValue) v62Value = cuuidValue;
                        else if (cuuidOther) v62Value = cuuidOther;
                        else if (getCookie('CUUID')) v62Value = getCookie('CUUID');
                        else if (getCookie('cuuid')) v62Value = getCookie('cuuid');
                        return v62Value;
                      },
                    ],
                    [
                      'eVar96',
                      function setevar96 () {
                        var whichSide = 'cl';
                        var bos = '-';
                        var dsa = '-';
                        var ax = 'no call';
                        var dsr = '-';
                        var rf = '-';
                        var cms = '-';
                        var evar96 = '-';
                        var evar9 = '-';
                        var evar52 = '-';
                        var prop26 = '-';
                        var citiData = window.citiData || {};
                        if (!!window.citiData && !!window.citiData.SCInfo)
                          for (var x in citiData.SCInfo)
                            if (!!citiData[x] === false) citiData[x] = citiData.SCInfo[x];
                        if (!!window.citiData && !!window.citiData.globalInfo)
                          for (var n in citiData.globalInfo)
                            if (!!citiData[n] === false) citiData[n] = citiData.globalInfo[n];
                        if (citiData.serverSideBullseye) {
                          citiData.serverSideBullseye = citiData.serverSideBullseye.toString();
                          if (citiData.serverSideBullseye.indexOf('true') > -1) whichSide = 'sv';
                          else {
                            bos = 'na';
                            dsa = 'na';
                            dsr = 'na';
                          }
                        } else {
                          bos = 'na';
                          dsa = 'na';
                          dsr = 'na';
                        }
                        if (citiData.BannerOSSuccess)
                          if (citiData.BannerOSSuccess.length > 1) bos = '1';
                        if (citiData.BannerOSFailure)
                          if (citiData.BannerOSFailure.length > 1) bos = '0';
                        if (citiData.AcxiomDSSuccess)
                          if (citiData.AcxiomDSSuccess.indexOf('error') > -1) dsa = '0';
                          else if (citiData.AcxiomDSSuccess.indexOf('uccess') > -1) dsa = '1';
                        if (citiData.acxiomResponse)
                          if (citiData.acxiomResponse.length > 1) ax = '1';
                        if (citiData.acxiomFailure)
                          if (citiData.acxiomFailure.length > 1) ax = '0';
                        if (citiData.RocketFuelDSSucess)
                          if (citiData.RocketFuelDSSucess.length > 1) dsr = '1';
                        if (citiData.RocketFuelDSFailure)
                          if (citiData.RocketFuelDSFailure.length > 1) dsr = '0';
                        if (citiData.rfResponse) if (citiData.rfResponse.length > 1) rf = '1';
                        if (citiData.rfFailure) if (citiData.rfFailure.length > 1) rf = '0';
                        if (citiData.cmsFailureMessage)
                          if (citiData.cmsFailureMessage.length > 1) {
                            cms = '0';
                            evar52 = citiData.cmsFailureMessage;
                          }
                        if (citiData.cmsSuccessResponse)
                          if (citiData.cmsSuccessResponse.length > 1) cms = '1';
                        evar96 =
                          whichSide +
                          '|bos:' +
                          bos +
                          '|dsa:' +
                          dsa +
                          '|ax:' +
                          ax +
                          '|dsr:' +
                          dsr +
                          '|rf:' +
                          rf +
                          '|cms:' +
                          cms;
                        return evar96;
                      },
                    ],
                    [
                      'prop73',
                      function anon () {
                        return Bootstrapper.getRunDeploymentIds();
                      },
                    ],
                    [
                      'eVar100',
                      function v100 () {
                        return citiData.custType || '';
                      },
                    ],
                    [
                      'prop26',
                      function getRFResponses () {
                        var tmp26, rf;
                        tmp26 = 'no value';
                        if (citiData.rfResponse)
                          if (citiData.rfResponse.length > 1) {
                            rf = '1';
                            tmp26 = 'success';
                            try {
                              var resp = JSON.parse(citiData.rfResponse);
                              var scenID = '';
                              if (document.location.href.indexOf('cards') > -1)
                                scenID = resp.rf_placement1.scenarioID;
                              else scenID = resp.rf_placements.rf_placement1.scenarioID;
                              tmp26 += '|' + scenID;
                            } catch (e) {
                              console.log('rfResponseParsingError');
                            }
                          }
                        if (citiData.rfFailure)
                          if (citiData.rfFailure.length > 1) {
                            rf = '0';
                            tmp26 = citiData.rfFailure.trim();
                          }
                        return tmp26;
                      },
                    ],
                    [
                      'prop14',
                      function anon () {
                        var experianID = window.citiData.experianID || '';
                        return experianID;
                      },
                    ],
                    [
                      'eVar9',
                      function getEvar9 () {
                        const $___old_9e9e93a2caefd5cd = {}.constructor.getOwnPropertyDescriptor(
                          window,
                          'sessionStorage'
                        );
                        try {
                          if ($___old_9e9e93a2caefd5cd)
                            ({}.constructor.defineProperty(
                              window,
                              'sessionStorage',
                              $___stub_4011c24c598eb934.sessionStorage
                            ));
                          return function () {
                            var evar9 = '';
                            var ax = 'no call';
                            if (citiData.acxiomResponse)
                              if (citiData.acxiomResponse.length > 1) {
                                ax = '1';
                                evar9 = citiData.acxiomResponse;
                                sessionStorage.tmsAcxResponse = evar9;
                              }
                            if (citiData.acxiomFailure)
                              if (citiData.acxiomFailure.length > 1) {
                                ax = '0';
                                evar9 = citiData.acxiomFailure;
                                sessionStorage.tmsAcxResponse = evar9;
                              }
                            if (ax == 'no call') {
                              evar9 = sessionStorage.tmsAcxResponse || 'no call, no cache';
                              if (evar9.indexOf('cache') < 0) evar9 = 'cached:' + evar9;
                            }
                            return evar9;
                          }.apply(this, arguments);
                        } finally {
                          if ($___old_9e9e93a2caefd5cd)
                            ({}.constructor.defineProperty(
                              window,
                              'sessionStorage',
                              $___old_9e9e93a2caefd5cd
                            ));
                        }
                      },
                    ],
                    [
                      'eVar52',
                      function geteVar52Value () {
                        var tmpV52 = 'no value';
                        if (citiData.cmsFailureMessage)
                          if (citiData.cmsFailureMessage.length > 1)
                            tmpV52 = citiData.cmsFailureMessage;
                        if (citiData.cmsSuccessResponse)
                          if (citiData.cmsSuccessResponse.length > 1)
                            tmpV52 = citiData.cmsSuccessResponse;
                        return tmpV52;
                      },
                    ],
                    [
                      'list3',
                      function list3setter () {
                        var list3 = '';
                        if (citiData.pageContent)
                          try {
                            citiData.pageContent.placements.forEach(function (arrayItem) {
                              if (arrayItem.descriptionMod)
                                list3 +=
                                  arrayItem.placementId +
                                  ':' +
                                  arrayItem.descriptionMod +
                                  ':' +
                                  arrayItem.cmsContentId +
                                  '|';
                              else
                                list3 +=
                                  arrayItem.placementId + ':' + arrayItem.cmsContentId + '|';
                            });
                          } catch (e) {}
                        return citiData.offerList || list3 || '';
                      },
                    ],
                    [
                      'eVar79',
                      function citidataguid () {
                        return citiData.guid || '';
                      },
                    ],
                  ],
                ]);
              },
              3399157,
              359218
            );
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyDOMParsed(
      function () {
        Bootstrapper.ensEvent.add(['naAnalyticsPageView'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          Bootstrapper.bindImmediate(
            function () {
              var ddConditions = {
                not: ['not', null, 'not'],
                caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
                compareTo: ['citigroup', '...', 'false'],
                requiredData: ['17008', '17006', '47535'],
                comparators: ['matches', 'matches', 'is'],
              };
              Bootstrapper.data.resolve(ddConditions.requiredData, function () {
                ddConditions.values = Array.prototype.slice.call(arguments, 0);
                var Bootstrapper = window['Bootstrapper'];
                if (Bootstrapper.data.checkConditions(ddConditions)) {
                  var Bootstrapper = window['Bootstrapper'];
                  var ensightenOptions = Bootstrapper.ensightenOptions;
                  try {
                    var arr_tntDomains = [
                      'online.citi.com/US/ag/small-business-banking',
                      'online.citi.com/small-business-banking',
                      'online.citi.com/tandc',
                      'online.citi.com/US/ag/tandc',
                      'online.citi.com/homepage',
                      'loadtest.creditcards.citi.com',
                    ];
                    var currentUrlSSR = window.location.href.toString();
                    var citiSSRCheck = /citi.com\/$/.test(currentUrlSSR);
                    function isUrlInArray (urlList) {
                      var currentUrl = window.location.href.toString();
                      var result = false;
                      for (var i = 0; i < urlList.length && result === false; i++)
                        if (currentUrl.indexOf(urlList[i]) != -1) result = true;
                      return result;
                    }
                    var addMbox_tnt = false;
                    if (isUrlInArray(arr_tntDomains)) {
                      console.log('checking URL');
                      addMbox_tnt = true;
                    }
                    if (!addMbox_tnt && !citiSSRCheck)
                      adobe.target.getOffer({
                        mbox: 'target-global-mbox',
                        success: function (offer) {
                          adobe.target.applyOffer({ mbox: 'target-global-mbox', offer: offer });
                        },
                        error: function (status, error) {
                          if (console && console.log) {
                            console.log(status);
                            console.log(error);
                          }
                        },
                      });
                  } catch (n) {}
                }
              });
            },
            -1,
            -1
          );
        });
      },
      3399126,
      [3039001],
      531459,
      [578278]
    );
    Bootstrapper.bindImmediate(
      function () {
        var ddConditions = {
          not: ['not', null, 'not'],
          caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
          compareTo: ['citigroup', '...', 'false'],
          requiredData: ['17008', '17006', '47535'],
          comparators: ['matches', 'matches', 'is'],
        };
        Bootstrapper.data.resolve(ddConditions.requiredData, function () {
          ddConditions.values = Array.prototype.slice.call(arguments, 0);
          var Bootstrapper = window['Bootstrapper'];
          if (Bootstrapper.data.checkConditions(ddConditions))
            Bootstrapper.bindDOMLoaded(
              function () {
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                Bootstrapper.AF = (function () {
                  var g = {
                    data: {},
                    _dataConfig: {},
                    logHistory: [],
                    debug: !0,
                    dataObj: function (a) {
                      var b = a ? [] : '';
                      b.finalized = !1;
                      b.type = a;
                      return b;
                    },
                    validateInput: function (a) {
                      if ('object' !== typeof a || 'number' !== typeof a.length)
                        return this.log('Error, input must be type Array');
                      /set|push|call|eval|finalize|join/.test(a[0]) ||
                        this.log("Error, '" + a[0] + "' is not a valid command");
                      return !0;
                    },
                    storeData: function (a, b, d, c, e) {
                      e = this.getConfig(b, d, e);
                      b = this.data[b][d];
                      if (e.finalized)
                        return this.log("Error, cannot modify finalized key '" + d + "'"), b;
                      if ('undefined' !== typeof b && e.multi)
                        return 'join' == a ? (b = b.concat(c)) : b.push(c), b;
                      e.multi ? ((d = [c]), 'join' == a && (d = [].concat(c))) : (d = c);
                      return d;
                    },
                    getConfig: function (a, b, d, c) {
                      a = this._dataConfig[a] || {};
                      c = {};
                      return 'undefined' == typeof a[b]
                        ? ((c.multi = d), (c.finalized = !1), c)
                        : a[b];
                    },
                    store: function (a, b, d, c, e) {
                      this.data[b] = this.data[b] || {};
                      this.data[b][d] = this.storeData(a, b, d, c, e);
                      return this.data[b][d];
                    },
                    parseCode: function (a) {
                      return ((a || function () {}) + '').replace(
                        /^function\s*\(\s*\)\s*\{|\}$/g,
                        ''
                      );
                    },
                    callFn: function (a, b, d, c) {
                      const $___old_d7685c142d2ec0d0 = {}.constructor.getOwnPropertyDescriptor(
                        Navigator.prototype,
                        'userAgent'
                      );
                      try {
                        if ($___old_d7685c142d2ec0d0)
                          ({}.constructor.defineProperty(
                            Navigator.prototype,
                            'userAgent',
                            $___stub_f41e7bff56ded01f.userAgent
                          ));
                        return function () {
                          if ('function' == typeof a)
                            if (d)
                              'undefined' != typeof window.execScript
                                ? window.execScript(this.parseCode(a))
                                : eval.call(window, this.parseCode(a));
                            else return a.apply(window, c);
                          else if ('function' == typeof this.data[a][b])
                            if (d)
                              'undefined' != typeof window.execScript
                                ? window.execScript(this.parseCode(this.data[a][b]))
                                : eval.call(window, this.parseCode(this.data[a][b]));
                            else
                              return (
                                (c = 'object' == typeof c && 'number' == typeof c.length ? c : []),
                                this.data[a][b].apply(this.data[a], c)
                              );
                          else return this.log("Error, '" + b + "' is not a function");
                        }.apply(this, arguments);
                      } finally {
                        if ($___old_d7685c142d2ec0d0)
                          ({}.constructor.defineProperty(
                            Navigator.prototype,
                            'userAgent',
                            $___old_d7685c142d2ec0d0
                          ));
                      }
                    },
                    parse: function (a) {
                      if (this.validateInput(a)) {
                        a = Array.prototype.slice.call(a, 0);
                        var b = a.shift(),
                          d = a.shift(),
                          c = a.shift(),
                          e = a[0];
                        if (/set|push|join/.test(b))
                          return this.store(b, d, c, e, /push|join/.test(b));
                        if (/call|eval/.test(b)) return this.callFn(d, c, 'eval' == b, a);
                        if ('finalize' == b)
                          return (
                            (a = this._dataConfig[d] = this._dataConfig[d] || {}),
                            (a = a[c] || { multi: !1 }),
                            (a.finalized = !0),
                            (this._dataConfig[d][c] = a)
                          );
                      }
                    },
                    log: function (a) {
                      this.logHistory.push(a);
                      return this.debug && 'object' == typeof console ? console.log(a) && !1 : !1;
                    },
                  };
                  if (
                    'object' == typeof Bootstrapper.AF &&
                    '[object Array]' !== Object.prototype.toString.call(Bootstrapper.AF)
                  )
                    return Bootstrapper.AF;
                  if ('[object Array]' === Object.prototype.toString.call(Bootstrapper.AF))
                    for (var h = Bootstrapper.AF, f = 0; f < h.length; f++) g.parse(h[f]);
                  return {
                    push: function (a) {
                      return g.parse(a);
                    },
                  };
                })();
                Bootstrapper._SC = Bootstrapper._SC || {};
                Bootstrapper._SC.log = function (a) {
                  if (Bootstrapper._SC.logEnabled)
                    try {
                      console.log('AA App Log - ' + a);
                    } catch (f) {}
                };
                Bootstrapper.AF.push([
                  'set',
                  'SiteCatalyst',
                  'block',
                  function (a) {
                    this.ignore = this.ignore || {};
                    this.ignore[a] = 1;
                  },
                ]);
                Bootstrapper.AF.push([
                  'set',
                  'SiteCatalyst',
                  'exec',
                  function () {
                    if (!this.ar) {
                      Bootstrapper.AF.push(['push', 'SiteCatalyst', 'ar', !0]);
                      for (var a = this.ns || [], f = {}, c = 0; c < a.length; c++)
                        (f[a[c]] = 1),
                          Bootstrapper.AF.push([
                            'set',
                            a[c],
                            'exec',
                            (function (a) {
                              return function () {
                                var c = this.dl || [],
                                  b = this.DMFDelay || !1;
                                Bootstrapper._SC.log('Delay for DMF: ' + b);
                                var f = function (c) {
                                    if ('object' != typeof window[a])
                                      setTimeout.call(
                                        this,
                                        function () {
                                          f.call(this, c);
                                        },
                                        250
                                      );
                                    else {
                                      for (var g = ['pre', 'post'], e = 0; e < g.length; e++) {
                                        var b = this[g[e]];
                                        if ('object' == typeof b)
                                          for (var k = 0; k < b.length; k++) {
                                            var d = b[k],
                                              h = window[a];
                                            if ('object' == typeof d[0] && d[0].length) {
                                              do h = h[d[0].shift()];
                                              while (1 < d[0].length);
                                              d[0] = d[0].shift();
                                            }
                                            if (d[1] && 'function' == typeof d[1])
                                              try {
                                                h[d[0]] = d[1].call(this, c);
                                              } catch (l) {}
                                            else h[d[0]] = d[1];
                                          }
                                      }
                                      window[a].t();
                                      Bootstrapper.AF.push([
                                        'set',
                                        a,
                                        'getCallbacks',
                                        function () {
                                          return this.callback || [];
                                        },
                                      ]);
                                      g = Bootstrapper.AF.push(['call', a, 'getCallbacks']);
                                      for (e = 0; e < g.length; e++)
                                        'function' == typeof g[e] && g[e].call(window);
                                    }
                                  },
                                  l = function () {
                                    Bootstrapper.data
                                      ? Bootstrapper.data.resolve.call(this, c, function () {
                                          for (var a = {}, b = 0; b < c.length; b++)
                                            a[c[b]] = arguments[b];
                                          f.call(this, a);
                                        })
                                      : f.call(this, {});
                                  },
                                  m = this;
                                b
                                  ? Bootstrapper.bindDOMParsed(function () {
                                      l.call(m);
                                    })
                                  : l.call(this);
                              };
                            })(a[c]),
                          ]);
                      var a = 0,
                        b;
                      for (b in f)
                        (this.ignore && b in this.ignore) ||
                          (a
                            ? setTimeout(
                                (function (a) {
                                  return function () {
                                    Bootstrapper.AF.push(['call', a, 'exec']);
                                  };
                                })(b),
                                250 * a
                              )
                            : Bootstrapper.AF.push(['call', b, 'exec']),
                          a++);
                    }
                  },
                ]);
                Bootstrapper.bindPageSpecificCompletion(function () {
                  setTimeout(function () {
                    Bootstrapper.AF.push(['call', 'SiteCatalyst', 'exec']);
                  }, 250);
                });
                Bootstrapper.AF.push([
                  'eval',
                  function () {
                    var sName = 's';
                    Bootstrapper.AF = (function () {
                      var g = {
                        data: {},
                        _dataConfig: {},
                        logHistory: [],
                        debug: !0,
                        dataObj: function (a) {
                          var b = a ? [] : '';
                          b.finalized = !1;
                          b.type = a;
                          return b;
                        },
                        validateInput: function (a) {
                          if ('object' !== typeof a || 'number' !== typeof a.length)
                            return this.log('Error, input must be type Array');
                          /set|push|call|eval|finalize|join/.test(a[0]) ||
                            this.log("Error, '" + a[0] + "' is not a valid command");
                          return !0;
                        },
                        storeData: function (a, b, d, c, e) {
                          e = this.getConfig(b, d, e);
                          b = this.data[b][d];
                          if (e.finalized)
                            return this.log("Error, cannot modify finalized key '" + d + "'"), b;
                          if ('undefined' !== typeof b && e.multi)
                            return 'join' == a ? (b = b.concat(c)) : b.push(c), b;
                          e.multi ? ((d = [c]), 'join' == a && (d = [].concat(c))) : (d = c);
                          return d;
                        },
                        getConfig: function (a, b, d, c) {
                          a = this._dataConfig[a] || {};
                          c = {};
                          return 'undefined' == typeof a[b]
                            ? ((c.multi = d), (c.finalized = !1), c)
                            : a[b];
                        },
                        store: function (a, b, d, c, e) {
                          this.data[b] = this.data[b] || {};
                          this.data[b][d] = this.storeData(a, b, d, c, e);
                          return this.data[b][d];
                        },
                        parseCode: function (a) {
                          return ((a || function () {}) + '').replace(
                            /^function\s*\(\s*\)\s*\{|\}$/g,
                            ''
                          );
                        },
                        callFn: function (a, b, d, c) {
                          if ('function' == typeof a)
                            if (d)
                              'undefined' != typeof window.execScript
                                ? window.execScript(this.parseCode(a))
                                : eval.call(window, this.parseCode(a));
                            else return a.apply(window, c);
                          else if ('function' == typeof this.data[a][b])
                            if (d)
                              'undefined' != typeof window.execScript
                                ? window.execScript(this.parseCode(this.data[a][b]))
                                : eval.call(window, this.parseCode(this.data[a][b]));
                            else
                              return (
                                (c = 'object' == typeof c && 'number' == typeof c.length ? c : []),
                                this.data[a][b].apply(this.data[a], c)
                              );
                          else return this.log("Error, '" + b + "' is not a function");
                        },
                        parse: function (a) {
                          if (this.validateInput(a)) {
                            a = Array.prototype.slice.call(a, 0);
                            var b = a.shift(),
                              d = a.shift(),
                              c = a.shift(),
                              e = a[0];
                            if (/set|push|join/.test(b))
                              return this.store(b, d, c, e, /push|join/.test(b));
                            if (/call|eval/.test(b)) return this.callFn(d, c, 'eval' == b, a);
                            if ('finalize' == b)
                              return (
                                (a = this._dataConfig[d] = this._dataConfig[d] || {}),
                                (a = a[c] || { multi: !1 }),
                                (a.finalized = !0),
                                (this._dataConfig[d][c] = a)
                              );
                          }
                        },
                        log: function (a) {
                          this.logHistory.push(a);
                          return this.debug && 'object' == typeof console
                            ? console.log(a) && !1
                            : !1;
                        },
                      };
                      if (
                        'object' == typeof Bootstrapper.AF &&
                        '[object Array]' !== Object.prototype.toString.call(Bootstrapper.AF)
                      )
                        return Bootstrapper.AF;
                      if ('[object Array]' === Object.prototype.toString.call(Bootstrapper.AF))
                        for (var h = Bootstrapper.AF, f = 0; f < h.length; f++) g.parse(h[f]);
                      return {
                        push: function (a) {
                          return g.parse(a);
                        },
                      };
                    })();
                    Bootstrapper._SC = Bootstrapper._SC || {};
                    Bootstrapper._SC.log = function (a) {
                      if (Bootstrapper._SC.logEnabled)
                        try {
                          console.log('AA App Log - ' + a);
                        } catch (f) {}
                    };
                    Bootstrapper.AF.push([
                      'set',
                      'SiteCatalyst',
                      'block',
                      function (a) {
                        this.ignore = this.ignore || {};
                        this.ignore[a] = 1;
                      },
                    ]);
                    Bootstrapper.AF.push([
                      'set',
                      'SiteCatalyst',
                      'exec',
                      function () {
                        if (!this.ar) {
                          Bootstrapper.AF.push(['push', 'SiteCatalyst', 'ar', !0]);
                          for (var a = this.ns || [], f = {}, c = 0; c < a.length; c++)
                            (f[a[c]] = 1),
                              Bootstrapper.AF.push([
                                'set',
                                a[c],
                                'exec',
                                (function (a) {
                                  return function () {
                                    var c = this.dl || [],
                                      b = this.DMFDelay || !1;
                                    Bootstrapper._SC.log('Delay for DMF: ' + b);
                                    var f = function (c) {
                                        if ('object' != typeof window[a])
                                          setTimeout.call(
                                            this,
                                            function () {
                                              f.call(this, c);
                                            },
                                            250
                                          );
                                        else {
                                          for (var g = ['pre', 'post'], e = 0; e < g.length; e++) {
                                            var b = this[g[e]];
                                            if ('object' == typeof b)
                                              for (var k = 0; k < b.length; k++) {
                                                var d = b[k],
                                                  h = window[a];
                                                if ('object' == typeof d[0] && d[0].length) {
                                                  do h = h[d[0].shift()];
                                                  while (1 < d[0].length);
                                                  d[0] = d[0].shift();
                                                }
                                                if (d[1] && 'function' == typeof d[1])
                                                  try {
                                                    h[d[0]] = d[1].call(this, c);
                                                  } catch (l) {}
                                                else h[d[0]] = d[1];
                                              }
                                          }
                                          window[a].t();
                                          Bootstrapper.AF.push([
                                            'set',
                                            a,
                                            'getCallbacks',
                                            function () {
                                              return this.callback || [];
                                            },
                                          ]);
                                          g = Bootstrapper.AF.push(['call', a, 'getCallbacks']);
                                          for (e = 0; e < g.length; e++)
                                            'function' == typeof g[e] && g[e].call(window);
                                        }
                                      },
                                      l = function () {
                                        Bootstrapper.data
                                          ? Bootstrapper.data.resolve.call(this, c, function () {
                                              for (var a = {}, b = 0; b < c.length; b++)
                                                a[c[b]] = arguments[b];
                                              f.call(this, a);
                                            })
                                          : f.call(this, {});
                                      },
                                      m = this;
                                    b
                                      ? Bootstrapper.bindDOMParsed(function () {
                                          l.call(m);
                                        })
                                      : l.call(this);
                                  };
                                })(a[c]),
                              ]);
                          var a = 0,
                            b;
                          for (b in f)
                            (this.ignore && b in this.ignore) ||
                              (a
                                ? setTimeout(
                                    (function (a) {
                                      return function () {
                                        Bootstrapper.AF.push(['call', a, 'exec']);
                                      };
                                    })(b),
                                    250 * a
                                  )
                                : Bootstrapper.AF.push(['call', b, 'exec']),
                              a++);
                        }
                      },
                    ]);
                    Bootstrapper.bindPageSpecificCompletion(function () {
                      setTimeout(function () {
                        Bootstrapper.AF.push(['call', 'SiteCatalyst', 'exec']);
                      }, 250);
                    });
                    Bootstrapper.AF.push([
                      'eval',
                      function () {
                        var sName = 's';
                        s = new AppMeasurement();
                        delete s.ActivityMap;
                        s.account = (function () {
                          var rsid = [];
                          if (
                            ~window.location.hostname.indexOf('test') ||
                            ~window.location.hostname.indexOf('citigrppfmstage') ||
                            ~window.location.hostname.indexOf('usmktdit') ||
                            ~window.location.hostname.indexOf('uat') ||
                            ~window.location.hostname.indexOf('staging') ||
                            ~window.location.hostname.indexOf('webqa') ||
                            ~window.location.hostname.indexOf('previe') ||
                            ~window.location.hostname.indexOf('gtcrd-cbllw01lab') ||
                            ~window.location.hostname.indexOf('gtcrd-cbllw04lab') ||
                            ~window.location.hostname.indexOf('accountonline-uat.bridgetrack.com')
                          )
                            rsid.push('citinadev');
                          else if (
                            /dit..?\./.test(window.location.hostname) ||
                            /sit..?\./.test(window.location.hostname)
                          )
                            rsid.push('citinadev');
                          else rsid.push('citinaprod');
                          return rsid.join(',');
                        })();
                        s_getLoadTime();
                        s.currencyCode = 'USD';
                        s.trackDownloadLinks = true;
                        s.trackExternalLinks = true;
                        s.trackInlineStats = false;
                        s.linkDownloadFileTypes =
                          'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,ofx,csv,qif,qfx';
                        s.linkInternalFilters =
                          'javascript:,citi.com,citibank.com,citicards.com,accountonline.com,citi.bridgetrack.com,accountonline.bridgetrack.com,citipricerewind.com,myhomeequity.com,citibankonline.com';
                        s.linkExternalFilters = 'facebook.com,twitter.co,youtube.com,linkedin.com';
                        s.linkLeaveQueryString = false;
                        s.linkTrackVars = 'eVar38';
                        s.linkTrackEvents = 'None';
                        s._tpDST = {
                          2017: '3/12,11/5',
                          2018: '3/11,11/4',
                          2019: '3/10,11/3',
                          2020: '3/8,11/1',
                          2021: '3/14,11/7',
                          2022: '3/13,11/6',
                          2023: '3/12,11/5',
                          2024: '3/10,11/3',
                          2025: '3/9,11/2',
                          2026: '3/8,11/1',
                          2027: '3/14,11/7',
                          2028: '3/12,11/5',
                          2029: '3/11,11/4',
                          2030: '3/10,11/3',
                        };
                        s.usePlugins = true;
                        s.fsdRules = {
                          ssn:
                            '(?!000)([0-6]\\d{2}|7([0-6]\\d|7[012]))([ -]?)(?!00)\\d\\d\\3(?!0000)\\d{4}',
                          account_num:
                            '[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]',
                          cc_num: '[0-9][0-9][0-9][0-9][0-9][0-9]',
                          email_addy:
                            '[A-Za-z0-9](([_.-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([.-]?[a-zA-Z0-9]+)*).([A-Za-z]{2,})',
                        };
                        s.fsdruleset = { all: ['account_num', 'cc_num'] };
                        s.formList = 'frm_bt,cA-DD-step1Form,Personal_Info,apply_form';
                        s.trackFormList = true;
                        s.trackPageName = true;
                        s.useCommerce = false;
                        s.varUsed = 'prop73';
                        s.eventList = '';
                        s.doPlugins = function (s) {
                          if (s.pagename && !s.pageName) s.pageName = s.pagename;
                          s.pageName = s.trimWS(s.pageName);
                          s.hbx_lt = 'auto';
                          s.setupLinkTrack('prop46,prop47,prop48,prop49', 'SC_LINKS');
                          var tloc = location.href;
                          if (
                            tloc.indexOf('cmp=') != -1 ||
                            tloc.indexOf('emc=') != -1 ||
                            tloc.indexOf('ecid=') != -1 ||
                            tloc.indexOf('intc=') != -1 ||
                            tloc.indexOf('ProspectID=') != -1
                          )
                            s.tQryStrCmp = 'cbol';
                          else if (
                            tloc.indexOf('isn=') != -1 ||
                            tloc.indexOf('isl=') != -1 ||
                            tloc.indexOf('icid') != -1
                          )
                            s.tQryStrCmp = 'cmi';
                          else s.tQryStrCmp = '';
                          if (!s.campaign && s.tQryStrCmp == 'cbol') {
                            s.campaign = s.Util.getQueryParam('cmp');
                            if (!s.campaign) s.campaign = s.Util.getQueryParam('emc');
                            if (!s.campaign) s.campaign = s.Util.getQueryParam('ecid');
                            s.campaign = s.getValOnce(s.campaign, 's_gvo_v0', 0);
                          }
                          if (!s.campaign && s.tQryStrCmp == 'cmi') {
                            s.campaign =
                              s.Util.getQueryParam('isn') + '-' + s.Util.getQueryParam('isl');
                            if (s.campaign == '-') s.campaign = '';
                            s.campaign = s.getValOnce(s.campaign, 's_gvo_v0', 0);
                            if (s.campaign) s.events = s.apl(s.events, 'event33', ',', 2);
                          }
                          if (!s.eVar39 && s.tQryStrCmp == 'cbol') {
                            s.eVar39 = s.Util.getQueryParam('intc');
                            s.eVar39 = s.getValOnce(s.eVar39, 's_gvo_v39', 0);
                          }
                          if (!s.eVar22 && s.tQryStrCmp == 'cbol') {
                            s.eVar22 = s.Util.getQueryParam('ProspectID');
                            s.eVar22 = s.getValOnce(s.eVar22, 's_gvo_v22', 0);
                          }
                          if (!s.eVar39 && s.tQryStrCmp == 'cmi') {
                            s.eVar39 = s.Util.getQueryParam('icid');
                            s.eVar39 = s.getValOnce(s.eVar39, 's_gvo_v39', 0);
                            if (s.eVar39) s.events = s.apl(s.events, 'event34', ',', 2);
                          }
                          s.prop47 = s.filterSensitiveData({
                            orig: s.prop47,
                            ruleset: 'all',
                            repltext: '**SENSITIVE DATA REPLACED**',
                          });
                          s.prop48 = s.filterSensitiveData({
                            orig: s.prop48,
                            ruleset: 'all',
                            repltext: '**SENSITIVE DATA REPLACED**',
                          });
                          if (s.prop47 && !s.eVar6) s.eVar6 = s.prop47;
                          s.eVar7 = s.getPreviousValue(s.pageName, 'gpv_p7', '');
                          var s_errors = document.getElementById('hasErrors');
                          if (typeof s_errors != 'undefined' && s_errors != null) {
                            s.eVar4 = '';
                            var s_msg = s_errors.getElementsByClassName('msg');
                            for (i = 0; i < s_msg.length; i++) {
                              var tmpMsg = s_msg[i].innerHTML
                                .replace('.', '')
                                .replace('is required', '')
                                .replace('is a required field', '')
                                .replace('  ', ' ')
                                .replace(/^\s+|\s+$/g, '');
                              s.eVar4 += tmpMsg + ',';
                            }
                            s.eVar4 = s.eVar4.substring(0, s.eVar4.length - 1);
                          }
                          s.prop61 = s_getLoadTime();
                          s.contextData['visitStart'] = s.getVisitStart('s_visit');
                          var tpA = s.getTimeParting('n', '-5');
                          var time = tpA.split('|')[0];
                          s.eVar64 = s.prop64 = time.replace(' ', '');
                          s.eVar65 = s.prop65 = tpA.split('|')[1];
                          s.prop66 = s.prop65 + '|' + s.prop64;
                          s.eVar68 = s.getVisitNum('m', 's_vnum');
                          s.eVar67 = s.getNewRepeat(1825, 's_nr');
                          s.prop63 = document.URL;
                          s.eVar38 = s.pageName;
                          s.setupFormAnalysis();
                          s.tnt = s.trackTNT();
                          s.prop25 = s.c_r('s_vi');
                          if (
                            window.mboxFactoryDefault &&
                            typeof mboxFactoryDefault.getPCId == 'function'
                          )
                            s.eVar12 = mboxFactoryDefault.getPCId().getId();
                          if (s.pageName && s.contextData['visitStart'] == '1')
                            s.getVisitStartTime('start', 's_vstart');
                          if (s.pageName && s.contextData['visitStart'] != '1')
                            s.prop21 = s.getElapsedTime('s_vstart');
                          if (typeof jQuery != 'undefined')
                            jQuery(document).ready(function () {
                              jQuery('#btn_verify').click(function () {
                                var s = s_gi(s_account);
                                s.linkTrackVars = 'evar20';
                                s.linkTrackEvents = 'None';
                                s.eVar20 = 'Verify Application';
                                s.tl(this, 'o', 'Verify Application');
                              });
                            });
                        };
                        console.log('test 12');
                        s.CVPwRecency = function (cn) {
                          arry = s.split(s.c_r(cn).toLowerCase(), '],[');
                          for (q = 0; q < arry.length; q++) {
                            z = arry[q];
                            z = s.repl(z, '[', '');
                            z = s.repl(z, ']', '');
                            z = s.repl(z, "'", '');
                            z = s.repl(z, '%20', ' ');
                            arry[q] = s.split(z, ',');
                          }
                          var td = new Date();
                          var recent = '';
                          var chan = '';
                          for (var x = 0; x < arry.length; x++) {
                            var diff = Math.round((td.getTime() - arry[x][1]) / 86400000);
                            if (x != 0) {
                              recent = recent + '>';
                              chan = chan + '>';
                            }
                            chan = chan + arry[x][0];
                            recent = diff <= 0 ? recent + 'S' : recent;
                            recent = diff >= 1 && diff <= 3 ? recent + '1-3' : recent;
                            recent = diff >= 4 && diff <= 14 ? recent + '4-14' : recent;
                            recent = diff >= 15 && diff <= 30 ? recent + '15-30' : recent;
                            recent = diff > 30 ? recent + '30+' : recent;
                          }
                          if (chan && recent) return chan + '::' + recent;
                          else return '';
                        };
                        s.filterSensitiveData = function (o) {
                          var d_a = { orig: '', ruleset: 'all', repltext: '' };
                          for (var index in d_a)
                            if (typeof o[index] == 'undefined') o[index] = d_a[index];
                          var f = o['orig'];
                          rs = s.fsdruleset[o['ruleset']];
                          for (r in rs) {
                            rx = new RegExp(s.fsdRules[rs[r]]);
                            if (rx.test(f))
                              f = o['repltext'] != '' ? o['repltext'] : 'FILTERED:' + rs[r];
                          }
                          return f;
                        };
                        s.cleanStr = function (a) {
                          if (typeof a != 'undefined')
                            if (typeof a == 'string') {
                              a = a.replace(/<\/?[^>]+(>|$)/g, '');
                              a = a.replace(/^\s+|\s+$/g, '');
                              a = a.replace(/[\u2018\u2019\u201A]/g, "'");
                              a = a.replace(/\t+/g, '');
                              a = a.replace(/(\r\n|\n|\r)/gm, '');
                              return a;
                            }
                        };
                        s.trimWS = function (str) {
                          if (str) {
                            str = str.replace(/^\s+/, '');
                            for (var i = str.length - 1; i >= 0; i--)
                              if (/\S/.test(str.charAt(i))) {
                                str = str.substring(0, i + 1);
                                break;
                              }
                            return str;
                          } else return;
                        };
                        s.p_fo = new Function(
                          'n',
                          '' +
                            'var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=' +
                            'new Object;return 1;}else {return 0;}'
                        );
                        s.join = new Function(
                          'v',
                          'p',
                          '' +
                            "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" +
                            ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" +
                            ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" +
                            'se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;'
                        );
                        s.split = new Function(
                          'l',
                          'd',
                          '' +
                            'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x' +
                            '++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
                        );
                        s.pt = new Function(
                          'x',
                          'd',
                          'f',
                          'a',
                          '' +
                            'var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t' +
                            '.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substri' +
                            "ng(z,x.length);t=z<x.length?t:''}return'';"
                        );
                        s.repl = new Function(
                          'x',
                          'o',
                          'n',
                          '' +
                            'var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.' +
                            'substring(i+o.length);i=x.indexOf(o,i+l)}return x'
                        );
                        s.p_gh = new Function(
                          '' +
                            "var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot(" +
                            "o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){" +
                            "o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s." +
                            "ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';"
                        );
                        s.apl = new Function(
                          'l',
                          'v',
                          'd',
                          'u',
                          '' +
                            "var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d),al=a.length;fo" +
                            'r(i=0;i<al;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowe' +
                            'rCase()));}}if(!m)l=l?l+d+v:v;return l;'
                        );
                        if (!s.__ccucr) {
                          s.c_rr = s.c_r;
                          s.__ccucr = true;
                          function c_r (k) {
                            var s = this,
                              d = new Date(),
                              v = s.c_rr(k),
                              c = s.c_rspers(),
                              i,
                              m,
                              e;
                            if (v) return v;
                            k = s.Util.urlDecode(k);
                            i = c.indexOf(' ' + k + '=');
                            c = i < 0 ? s.c_rr('s_sess') : c;
                            i = c.indexOf(' ' + k + '=');
                            m = i < 0 ? i : c.indexOf('|', i);
                            e = i < 0 ? i : c.indexOf(';', i);
                            m = m > 0 ? m : e;
                            v =
                              i < 0
                                ? ''
                                : s.Util.urlDecode(
                                    c.substring(i + 2 + k.length, m < 0 ? c.length : m)
                                  );
                            return v;
                          }
                          function c_rspers () {
                            var cv = s.c_rr('s_pers');
                            var date = new Date().getTime();
                            var expd = null;
                            var cvarr = [];
                            var vcv = '';
                            if (!cv) return vcv;
                            cvarr = cv.split(';');
                            for (var i = 0, l = cvarr.length; i < l; i++) {
                              expd = cvarr[i].match(/\|([0-9]+)$/);
                              if (expd && parseInt(expd[1]) >= date) vcv += cvarr[i] + ';';
                            }
                            return vcv;
                          }
                          s.c_rspers = c_rspers;
                          s.c_r = c_r;
                        }
                        if (!s.__ccucw) {
                          s.c_wr = s.c_w;
                          s.__ccucw = true;
                          function c_w (k, v, e) {
                            var s = this,
                              d = new Date(),
                              ht = 0,
                              pn = 's_pers',
                              sn = 's_sess',
                              pc = 0,
                              sc = 0,
                              pv,
                              sv,
                              c,
                              i,
                              t;
                            d.setTime(d.getTime() - 60000);
                            if (s.c_rr(k)) s.c_wr(k, '', d);
                            k = s.Util.urlEncode(k);
                            pv = s.c_rspers();
                            i = pv.indexOf(' ' + k + '=');
                            if (i > -1) {
                              pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1);
                              pc = 1;
                            }
                            sv = s.c_rr(sn);
                            i = sv.indexOf(' ' + k + '=');
                            if (i > -1) {
                              sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
                              sc = 1;
                            }
                            d = new Date();
                            if (e) {
                              if (e.getTime() > d.getTime()) {
                                pv +=
                                  ' ' + k + '=' + s.Util.urlEncode(v) + '|' + e.getTime() + ';';
                                pc = 1;
                              }
                            } else {
                              sv += ' ' + k + '=' + s.Util.urlEncode(v) + ';';
                              sc = 1;
                            }
                            sv = sv.replace(/%00/g, '');
                            pv = pv.replace(/%00/g, '');
                            if (sc) s.c_wr(sn, sv, 0);
                            if (pc) {
                              t = pv;
                              while (t && t.indexOf(';') != -1) {
                                var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
                                t = t.substring(t.indexOf(';') + 1);
                                ht = ht < t1 ? t1 : ht;
                              }
                              d.setTime(ht);
                              s.c_wr(pn, pv, d);
                            }
                            return v == s.c_r(s.Util.urlEncode(k));
                          }
                          s.c_w = c_w;
                        }
                        s.pt = new Function(
                          'x',
                          'd',
                          'f',
                          'a',
                          '' +
                            'var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t' +
                            '.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substri' +
                            "ng(z,x.length);t=z<x.length?t:''}return'';"
                        );
                        s.manageVars = new Function(
                          'c',
                          'l',
                          'f',
                          '' +
                            "var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa" +
                            'geName,purchaseID,channel,server,pageType,campaign,state,zip,events' +
                            ",products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar" +
                            "'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl" +
                            "it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l" +
                            "a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}" +
                            "}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0" +
                            ');return true;}else{return false;}'
                        );
                        s.clearVars = new Function('t', "var s=this;s[t]='';");
                        s.lowercaseVars = new Function(
                          't',
                          '' +
                            "var s=this;if(s[t]&&t!='events'){s[t]=s[t].toString();if(s[t].index" +
                            "Of('D=')!=0){s[t]=s[t].toLowerCase();}}"
                        );
                        s.getMultipleQueryParams = new Function(
                          'a',
                          'b',
                          '' +
                            "var s=this,rFor,r,q;a=a?a:'';b=b?b:',';rFor=s.split(a,',');for(q in" +
                            ' rFor){if(rFor.hasOwnProperty(q)){if(s.Util.getQueryParam(rFor[q]))' +
                            '{r=s.apl(r,s.Util.getQueryParam(rFor[q]),b,1);}}}return r;'
                        );
                        s.wd = window;
                        s.fl = new Function('x', 'l', '' + "return x?(''+x).substring(0,l):x");
                        s.pt = new Function(
                          'x',
                          'd',
                          'f',
                          'a',
                          '' +
                            "var s=this,t=x,z=0,y,r,l='length';while(t){y=t.indexOf(d);y=y<0?t[l" +
                            ']:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d[l];t=x.subs' +
                            "tring(z,x[l]);t=z<x[l]?t:''}return''"
                        );
                        s.rep = new Function(
                          'x',
                          'o',
                          'n',
                          '' +
                            'var a=new Array,i=0,j;if(x){if(x.split)a=x.split(o);else if(!o)for(' +
                            'i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){' +
                            'j=x.indexOf(o,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i' +
                            ">=0)i+=o.length}}x='';j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.joi" +
                            'n)x=a.join(n);else for(i=1;i<j;i++)x+=n+a[i]}}return x'
                        );
                        s.ape = new Function(
                          'x',
                          '' +
                            "var s=this,h='0123456789ABCDEF',f='+~!*()\\'',i,c=s.charSet,n,l,e,y" +
                            "='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComp" +
                            'onent(x);for(i=0;i<f.length;i++){n=f.substring(i,i+1);if(x.indexOf(' +
                            "n)>=0)x=s.rep(x,n,'%'+n.charCodeAt(0).toString(16).toUpperCase())}}" +
                            "else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.sub" +
                            "string(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=" +
                            "h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='" +
                            "+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2" +
                            "B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0)" +
                            "{i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.subst" +
                            "ring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.subst" +
                            "ring(i);i=x.indexOf('%',i)}}}return x"
                        );
                        s.epa = new Function(
                          'x',
                          '' +
                            "var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Fu" +
                            "nction('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape" +
                            "(x)}return y');return tcf(x)}else return unescape(x)}return y"
                        );
                        s.parseUri = new Function(
                          'u',
                          '' +
                            "if(u){u=u+'';u=u.indexOf(':')<0&&u.indexOf('//')!=0?(u.indexOf('/')" +
                            "==0?'/':'//')+u:u}u=u?u+'':window.location.href;var e,a=document.cr" +
                            "eateElement('a'),l=['href','protocol','host','hostname','port','pat" +
                            "hname','search','hash'],p,r={href:u,toString:function(){return this" +
                            ".href}};a.setAttribute('href',u);for(e=1;e<l.length;e++){p=l[e];r[p" +
                            "]=a[p]||''}delete a;p=r.pathname||'';if(p.indexOf('/')!=0)r.pathnam" +
                            "e='/'+p;return r"
                        );
                        s.gtfs = new Function(
                          '' +
                            'var w=window,l=w.location,d=document,u;if(!l.origin)l.origin=l.prot' +
                            "ocol+'//'+l.hostname+(l.port?':'+l.port:'');u=l!=w.parent.location?" +
                            'd.referrer:d.location;return{location:s.parseUri(u)}'
                        );
                        s.getTimeParting = new Function(
                          'h',
                          'z',
                          '' +
                            "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont" +
                            "h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['" +
                            "Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda" +
                            "y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp" +
                            "DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea" +
                            "r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)" +
                            "{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT" +
                            'imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d' +
                            ".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P" +
                            "M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}"
                        );
                        s.setupLinkTrack = new Function(
                          'vl',
                          'c',
                          'e',
                          '' +
                            "var cv=s.c_r(c);if(vl){var vla=vl.split(',');}if(cv!=''){var cva=s." +
                            "split(cv,'^^');for(x in vla){s[vla[x]]=cva[x];if(e){s.events=s.apl(" +
                            "s.events,e,',',2);}}}s.c_w(c,'',0);if(typeof s.linkObject!='undefin" +
                            "ed'&&s.hbx_lt!='manual'){s.lta=[];if(typeof s.pageName!='undefined'" +
                            ')s.lta[0]=s.pageName;if(typeof s.linkObject!=null){slo=s.linkObject' +
                            ";if(s.linkObject!=0){if(s.linkObject.getAttribute('name')!=null){va" +
                            "r b=s.linkObject.getAttribute('name');if(b.indexOf('&lpos=')>-1){s." +
                            "lta[3]=b.match('&lpos=([^&]*)')[1];}if(b.indexOf('&lid=')>-1){s." +
                            "lta[1]=b.match('&lid=([^&]*)')[1];}}}if(typeof s.lta[1]=='undefi" +
                            "ned'){if(s.linkName!=0){s.lta[1]=s.linkName;}else if(s.linkObject!=" +
                            "0){if(s.linkObject.innerHTML.indexOf('<img')>-1){s.lta[1]=s.linkObj" +
                            'ect.innerHTML.match(\'src="([^"]*)\')[1]}else{s.lta[1]=s.linkObject' +
                            ".innerHTML;}}}s.lta[2]=s.pageName+' | '+s.lta[1];}if(s.linkType!=0)" +
                            '{for(var x=0;x<vla.length;x++){s[vla[x]]=s.lta[x];if(e){s.events=s.' +
                            "apl(s.events,e,',',2);s.linkTrackVars=s.apl(s.linkTrackVars,'events" +
                            "',',',2);}}s.linkTrackVars=s.apl(s.linkTrackVars,vl,',',2);}else{va" +
                            "r tcv='';for(var x=0;x<s.lta.length;x++){tcv+=s.lta[x]+'^^'}s.c_w(c" +
                            ',tcv)}s.lta=null;}'
                        );
                        s.setupFormAnalysis = new Function(
                          '' +
                            'var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=window.onload;' +
                            'window.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even' +
                            "tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''" +
                            ",'','')}"
                        );
                        s.sendFormEvent = new Function(
                          't',
                          'pn',
                          'fn',
                          'en',
                          '' +
                            "var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='" +
                            "s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';"
                        );
                        s.faol = new Function(
                          'e',
                          '' +
                            'var s=s_c_il[' +
                            s._in +
                            '],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=window.' +
                            'event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng' +
                            'th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name' +
                            ";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);" +
                            "if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='" +
                            "No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element" +
                            's[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();if(t.indexOf' +
                            "('FIELDSET')<0){var md=el.onmousedown,kd=el.onkeydown,omd=md?md.toS" +
                            "tring():'',okd=kd?kd.toString():'';if(omd.indexOf('.fam(')<0&&okd.i" +
                            "ndexOf('.fam(')<0){el.s_famd=md;el.s_fakd=kd;el.onmousedown=s.fam;e" +
                            'l.onkeydown=s.fam}}}}}}f.ul=window.onunload;window.onunload=s.fasl;}ret' +
                            'urn r;'
                        );
                        s.faos = new Function(
                          'e',
                          '' +
                            'var s=s_c_il[' +
                            s._in +
                            '],f=s.fa,su;if(!e)e=window.event;if(f.vu){s[f.v' +
                            "u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru" +
                            'e;'
                        );
                        s.fasl = new Function(
                          'e',
                          '' +
                            'var s=s_c_il[' +
                            s._in +
                            '],f=s.fa,a=f.va,l=window.location,ip=s.trackPag' +
                            "eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path" +
                            "name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]=" +
                            "'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]" +
                            "='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]" +
                            "!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV" +
                            'ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars=' +
                            "ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt" +
                            "e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'" +
                            ",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s" +
                            ".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f." +
                            "vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object" +
                            "();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.us" +
                            "ePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;"
                        );
                        s.fam = new Function(
                          'e',
                          '' +
                            'var s=s_c_il[' +
                            s._in +
                            '],f=s.fa;if(!e) e=window.event;var o=s.trackLas' +
                            'tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this.' +
                            'form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e.' +
                            "which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW" +
                            "N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM" +
                            "AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e" +
                            "n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1" +
                            '){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va[' +
                            '1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s' +
                            '_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak' +
                            'd(e);'
                        );
                        s.ee = new Function(
                          'e',
                          'n',
                          '' + 'return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;'
                        );
                        s.fage = new Function(
                          'e',
                          'a',
                          '' + "var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';"
                        );
                        s.getVisitNum = new Function(
                          'tp',
                          'c',
                          'c2',
                          '' +
                            "var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}" +
                            "if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi" +
                            "me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!" +
                            "c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn=" +
                            "'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi" +
                            "t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els" +
                            "e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri" +
                            "ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);" +
                            "s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)" +
                            ";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}"
                        );
                        s.dimo = new Function(
                          'm',
                          'y',
                          '' + 'var d=new Date(y,m+1,0);return d.getDate();'
                        );
                        s.endof = new Function(
                          'x',
                          '' +
                            'var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x==' +
                            "'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(" +
                            "x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return " +
                            't;'
                        );
                        s.getNewRepeat = new Function(
                          'd',
                          'cn',
                          '' +
                            'var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:' +
                            "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" +
                            "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" +
                            "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" +
                            "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"
                        );
                        s.getValOnce = new Function(
                          'v',
                          'c',
                          'e',
                          't',
                          '' +
                            "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000" +
                            '0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e' +
                            "==0?0:a);}return v==k?'':v"
                        );
                        s.getPreviousValue = new Function(
                          'v',
                          'c',
                          'el',
                          '' +
                            "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" +
                            "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" +
                            '){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)' +
                            ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" +
                            "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
                        );
                        function s_getLoadTime () {
                          if (!window.s_loadT) {
                            var b = new Date().getTime(),
                              o = window.performance ? performance.timing : 0,
                              a = o ? o.requestStart : window.inHeadTS || 0;
                            s_loadT = a ? Math.round((b - a) / 100) : '';
                          }
                          return s_loadT;
                        }
                        s.crossVisitParticipation = new Function(
                          'v',
                          'cn',
                          'ex',
                          'ct',
                          'dl',
                          'ev',
                          'dv',
                          '' +
                            "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var" +
                            " ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l" +
                            'ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i' +
                            "f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(" +
                            'v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()' +
                            ";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar" +
                            "ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry" +
                            "[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+" +
                            '5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len' +
                            'gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date(' +
                            ').getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new' +
                            ' Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td.' +
                            'getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0' +
                            "]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:','," +
                            "front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli" +
                            "m:dl});if(ce)s.c_w(cn,'');return r;"
                        );
                        s.getDaysSinceLastVisit = new Function(
                          'c',
                          '' +
                            'var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT' +
                            'ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s' +
                            "etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f" +
                            "2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f" +
                            "5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);" +
                            "s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da" +
                            "y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day" +
                            "){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s." +
                            "c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c" +
                            "_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c" +
                            "+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur" +
                            'n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s' +
                            "!=f5) return '';else return cval_s;"
                        );
                        s.clickPast = new Function(
                          'scp',
                          'ct_ev',
                          'cp_ev',
                          'cpc',
                          '' +
                            'var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc)' +
                            "{cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev" +
                            ';s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc' +
                            ',0,0);}}}'
                        );
                        s.getAndPersistValue = new Function(
                          'v',
                          'c',
                          'e',
                          '' +
                            'var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(' +
                            'v)s.c_w(c,v,e?a:0);return s.c_r(c);'
                        );
                        s.trackTNT = new Function(
                          'v',
                          'p',
                          'b',
                          '' +
                            "var s=this,n='s_tnt',q='s_tntref',p=(p)?p:n,v=(v)?v:n,r='',pm=false" +
                            ",b=(b)?b:true;if(s.Util.getQueryParam(q)!=''){s.referrer=s.Util.get" +
                            "QueryParam(q);}else if(s.c_r(q)!=''){s.referrer=s.c_r(q);document.c" +
                            "ookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(" +
                            "(document.cookie.indexOf(q)!=-1&&s.c_r(q)=='')||(location.search.in" +
                            "dexOf(q+'=')!=-1&&s.Util.getQueryParam(q)=='')){s.referrer='Typed/B" +
                            "ookmarked';document.cookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:" +
                            "00:01 GMT;';}if(s.Util.getQueryParam(p)!=''){pm=s.Util.getQueryPara" +
                            "m(p);}else if(s.c_r(p)){pm=s.c_r(p);document.cookie=p+'=;path=/;exp" +
                            "ires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(s.c_r(p)==''&&s.Util." +
                            "getQueryParam(p)==''){pm='';}if(pm)r+=(pm+',');if(window[v]!=undefi" +
                            "ned)r+=window[v];if(b)window[v]='';return r;"
                        );
                        s.getVisitStart = new Function(
                          'c',
                          '' +
                            'var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c' +
                            ')){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;'
                        );
                        s.getVisitStartTime = new Function(
                          'v',
                          'cn',
                          'e',
                          '' +
                            "var s=this,d=new Date,x=d;if(!s.vstf){e=e?e:0;if(v=='start')s.vstf=" +
                            '1;x.setTime(x.getTime()+e*86400000);s.c_w(cn,d.getTime(),e?x:0);ret' +
                            "urn'';}"
                        );
                        s.getElapsedTime = new Function(
                          'cn',
                          '' +
                            'var s=this,d=new Date,k,v,sec;k=s.c_r(cn);v=(d.getTime()-k)/1000;se' +
                            'c=Math.round(v);return sec;'
                        );
                        s.handlePPVevents = function () {
                          if (!s_c_il) return;
                          for (var i = 0, scill = s_c_il.length; i < scill; i++)
                            if (
                              typeof s_c_il[i] != 'undefined' &&
                              s_c_il[i]._c &&
                              s_c_il[i]._c == 's_c'
                            ) {
                              var s = s_c_il[i];
                              break;
                            }
                          if (!s) return;
                          if (!s.getPPVid) return;
                          var dh = Math.max(
                              Math.max(s.d.body.scrollHeight, s.d.documentElement.scrollHeight),
                              Math.max(s.d.body.offsetHeight, s.d.documentElement.offsetHeight),
                              Math.max(s.d.body.clientHeight, s.d.documentElement.clientHeight)
                            ),
                            vph =
                              window.innerHeight ||
                              s.d.documentElement.clientHeight ||
                              s.d.body.clientHeight,
                            st =
                              window.pageYOffset ||
                              window.document.documentElement.scrollTop ||
                              window.document.body.scrollTop,
                            vh = st + vph,
                            pv = Math.min(Math.round((vh / dh) * 100), 100),
                            c = '',
                            p = s.c_r('s_ppv').split(',')[0];
                          if (
                            !s.c_r('tp') ||
                            (s.unescape ? s.unescape(p) : decodeURIComponent(p)) != s.getPPVid ||
                            (s.ppvChange == '1' && s.c_r('tp') && dh != s.c_r('tp'))
                          ) {
                            s.c_w('tp', dh);
                            s.c_w('s_ppv', '');
                          } else c = s.c_r('s_ppv');
                          var a = c && c.indexOf(',') > -1 ? c.split(',', 4) : [],
                            id = a.length > 0 ? a[0] : escape(s.getPPVid),
                            cv = a.length > 1 ? parseInt(a[1]) : 0,
                            p0 = a.length > 2 ? parseInt(a[2]) : pv,
                            cy = a.length > 3 ? parseInt(a[3]) : 0,
                            cn =
                              pv > 0
                                ? id +
                                  ',' +
                                  (pv > cv ? pv : cv) +
                                  ',' +
                                  p0 +
                                  ',' +
                                  (vh > cy ? vh : cy)
                                : '';
                          s.c_w('s_ppv', cn);
                        };
                        s.getPercentPageViewed = function (pid, change) {
                          var s = this,
                            ist = !s.getPPVid ? true : false;
                          pid = pid ? pid : s.pageName ? s.pageName : document.location.href;
                          s.ppvChange = change ? change : '1';
                          if (
                            typeof s.linkType != 'undefined' &&
                            s.linkType != '0' &&
                            s.linkType != '' &&
                            s.linkType != 'e'
                          )
                            return '';
                          var v = s.c_r('s_ppv'),
                            a = v.indexOf(',') > -1 ? v.split(',', 4) : [];
                          if (a && a.length < 4) {
                            for (var i = 3; i > 0; i--) a[i] = i < a.length ? a[i - 1] : '';
                            a[0] = '';
                          }
                          if (a) a[0] = unescape(a[0]);
                          if (!s.getPPVid || s.getPPVid != pid) {
                            s.getPPVid = pid;
                            s.c_w('s_ppv', escape(s.getPPVid));
                            s.handlePPVevents();
                          }
                          if (ist)
                            if (window.addEventListener) {
                              window.addEventListener('load', s.handlePPVevents, false);
                              window.addEventListener('click', s.handlePPVevents, false);
                              window.addEventListener('scroll', s.handlePPVevents, false);
                              window.addEventListener('resize', s.handlePPVevents, false);
                            } else if (window.attachEvent) {
                              window.attachEvent('onload', s.handlePPVevents);
                              window.attachEvent('onclick', s.handlePPVevents);
                              window.attachEvent('onscroll', s.handlePPVevents);
                              window.attachEvent('onresize', s.handlePPVevents);
                            }
                          return pid != '-' ? a : a[1];
                        };
                        s.performanceTiming = new Function(
                          'v',
                          '' +
                            "var s=this;if(v)s.ptv=v;if(typeof performance!='undefined'){if(perf" +
                            'ormance.timing.loadEventEnd==0){s.pi=setInterval(function(){s.perfo' +
                            "rmanceWrite()},250);}if(!s.ptc||s.linkType=='e'){s.performanceRead(" +
                            ");}else{s.rfe();s[s.ptv]='';}}"
                        );
                        s.performanceWrite = new Function(
                          '',
                          '' +
                            'var s=this;if(performance.timing.loadEventEnd>0)clearInterval(s.pi)' +
                            ";try{if(s.c_r('s_ptc')==''&&performance.timing.loadEventEnd>0){try{" +
                            "var pt=performance.timing;var pta='';pta=s.performanceCheck(pt.fetc" +
                            "hStart,pt.navigationStart);pta+='^^'+s.performanceCheck(pt.domainLo" +
                            "okupStart,pt.fetchStart);pta+='^^'+s.performanceCheck(pt.domainLook" +
                            "upEnd,pt.domainLookupStart);pta+='^^'+s.performanceCheck(pt.connect" +
                            "End,pt.connectStart);pta+='^^'+s.performanceCheck(pt.responseStart," +
                            "pt.connectEnd);pta+='^^'+s.performanceCheck(pt.responseEnd,pt.respo" +
                            "nseStart);pta+='^^'+s.performanceCheck(pt.loadEventStart,pt.domLoad" +
                            "ing);pta+='^^'+s.performanceCheck(pt.loadEventEnd,pt.loadEventStart" +
                            ");pta+='^^'+s.performanceCheck(pt.loadEventEnd,pt.navigationStart);" +
                            "s.c_w('s_ptc',pta);if(sessionStorage&&navigator.cookieEnabled&&s.pt" +
                            "v!='undefined'){var pe=performance.getEntries();var tempPe='';for(v" +
                            "ar i=0;i<pe.length;i++){tempPe+='!';tempPe+=pe[i].name.indexOf('?')" +
                            ">-1?pe[i].name.split('?')[0]:pe[i].name;tempPe+='|'+(Math.round(pe[" +
                            "i].startTime)/1000).toFixed(1)+'|'+(Math.round(pe[i].duration)/1000" +
                            ").toFixed(1)+'|'+pe[i].initiatorType;}sessionStorage.setItem('s_pec" +
                            "',tempPe);}}catch(err){return;}}}catch(err){return;}"
                        );
                        s.performanceCheck = new Function(
                          'a',
                          'b',
                          '' +
                            'if(a>=0&&b>=0){if((a-b)<60000&&((a-b)>=0)){return((a-b)/1000).toFix' +
                            'ed(2);}else{return 600;}}'
                        );
                        s.performanceRead = new Function(
                          '',
                          '' +
                            'var s=this;if(performance.timing.loadEventEnd>0)clearInterval(s.pi)' +
                            ";var cv=s.c_r('s_ptc');if(s.pte){var ela=s.pte.split(',');}if(cv!='" +
                            "'){var cva=s.split(cv,'^^');if(cva[1]!=''){for(var x=0;x<(ela.lengt" +
                            "h-1);x++){s.events=s.apl(s.events,ela[x]+'='+cva[x],',',2);}}s.even" +
                            "ts=s.apl(s.events,ela[ela.length-1],',',2);}s.linkTrackEvents=s.apl" +
                            "(s.linkTrackEvents,s.pte,',',2);s.c_w('s_ptc','',0);if(sessionStora" +
                            "ge&&navigator.cookieEnabled&&s.ptv!='undefined'){s[s.ptv]=sessionSt" +
                            "orage.getItem('s_pec');sessionStorage.setItem('s_pec','',0);}else{s" +
                            "[s.ptv]='sessionStorage Unavailable';}s.ptc=true;"
                        );
                        s.rfe = new Function(
                          '',
                          '' +
                            "var s=this;var ea=s.split(s.events,',');var pta=s.split(s.pte,',');" +
                            "try{for(x in pta){var ptr=new RegExp(pta[x]+'[^,][0-9]*.[0-9](.*)" +
                            "');s.events=s.events.match(ptr)[1];s.contextData['events']=s.events" +
                            ';}}catch(e){return;}'
                        );
                        s.getPageVisibility = new Function(
                          '',
                          '' +
                            "var s=this;if(s.getVisitStart()){s.Util.cookieWrite('s_pvs','');s.U" +
                            "til.cookieWrite('s_tps','');}if(s.Util.cookieRead('s_pvs')&&s.pvt<1" +
                            "){if(parseInt(s.Util.cookieRead('s_pvs'))<=parseInt(s.Util.cookieRe" +
                            "ad('s_tps'))){s.pve=s.pvel.split(',');s.events=s.apl(s.events,s.pve" +
                            "[0]+'='+(parseInt(s.Util.cookieRead('s_pvs'))),',',2);s.Util.cookie" +
                            "Write('s_pvs','');s.events=s.apl(s.events,s.pve[1]+'='+(parseInt(s." +
                            "Util.cookieRead('s_tps'))),',',2);s.Util.cookieWrite('s_tps','');s." +
                            "events=s.apl(s.events,s.pve[2],',',2);}}s.pvi=setInterval(s.pvx,100" +
                            '0);s.wpvi=setInterval(s.wpvc,5000);'
                        );
                        s.gbp = new Function(
                          '',
                          '' +
                            "if('hidden'in document){return null;}var bp=['moz','ms','o','webkit" +
                            "'];for(var i=0;i<bp.length;i++){var p=bp[i]+'Hidden';if(p in docume" +
                            'nt){return bp[i];}}return null;'
                        );
                        s.hp = new Function(
                          'p',
                          '' + "if(p){return p+'Hidden';}else{return'hidden';}"
                        );
                        s.vs = new Function(
                          'p',
                          '' + "if(p){return p+'VisibilityState';}else{return'visibilityState';}"
                        );
                        s.ve = new Function(
                          'p',
                          '' + "if(p){return p+'visibilitychange';}else{return'visibilitychange';}"
                        );
                        s.pvx = new Function('', '' + 's.pvt+=1;');
                        s.wpvc = function () {
                          var tempDate = Date.now();
                          s.Util.cookieWrite('s_tps', Math.ceil((tempDate - s.totalTime) / 1000));
                          s.Util.cookieWrite('s_pvs', s.pvt);
                        };
                        document.addEventListener('visibilitychange', function (event) {
                          if (document.hidden) {
                            s.visibility = false;
                            clearTimeout(s.pvi);
                          } else {
                            s.visibility = true;
                            s.pvi = setInterval(s.pvx, 1000);
                          }
                        });
                        s.totalTime = new Date();
                        s.pvt = 0;
                        s.prefix = s.gbp;
                        s.hidden = s.hp(s.prefix);
                        s.visibility = true;
                        s.visibilityState = s.vs(s.prefix);
                        s.visibilityEvent = s.ve(s.prefix);
                        s.getTimeBetweenEvents = new Function(
                          'v1',
                          'v1fl',
                          'v2',
                          'v2fl',
                          'cn',
                          'e',
                          'fmt',
                          'rv',
                          '' +
                            "var s=this,v1p=false,v2p=false,v1a=s.split(v1,','),v2a=s.split(v2,'" +
                            ",'),rva=rv?s.split(rv,','):[],t1,t2='',d=new Date(),x=new Date();cn" +
                            "=cn?cn:'s_tbe';fmt=fmt?fmt:'f';e=e?e:0;for(var i=0;i<rva.length;++i" +
                            "){if(s.inList(rva[i],s.events,',')){x.setDate(x.getDate()-1);s.c_w(" +
                            "cn,'',x);return'';}}t1=s.c_r(cn);x.setTime(x.getTime()+e*86400000);" +
                            "for(var i=0;i<v1a.length&&!v1p;++i){v1p=s.inList(v1a[i],s.events,'," +
                            "');}for(var i=0;i<v2a.length&&!v2p;++i){v2p=s.inList(v2a[i],s.event" +
                            "s,',');}if(v1a.length==1&&v2a.length==1&&v1==v2){if(v1p&&v2p){s.c_w" +
                            '(cn,d.getTime(),e?x:0);if(t1){t2=(d.getTime()-t1)/1000;}}}else{if(v' +
                            "1p&&(v1fl=='l'||!t1)){s.c_w(cn,d.getTime(),e?x:0);}if(v2p&&t1){if(v" +
                            "2fl=='f'){x.setDate(x.getDate()-1);s.c_w(cn,'',x);}t2=(d.getTime()-" +
                            "t1)/1000;}}return t2?s.fmt_t2(t2,fmt):'';"
                        );
                        s.fmt_t2 = new Function(
                          't',
                          'fmt',
                          '' +
                            "if(fmt=='d'){return t/86400;}else if(fmt=='h'){return t/3600;}else " +
                            "if(fmt=='m'){return t/60;}else if(fmt=='s'){return t;}else{var td=8" +
                            "6400,th=3600,tm=60,r=5,u,un;if(t>td){u=td;un='days';}else if(t>th){" +
                            "u=th;un='hours';}else if(t>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1" +
                            ";un='seconds';}t=t*r/u;return(Math.round(t)/r)+' '+un;}"
                        );
                        s.trackingServer = 'metrics.citi.com';
                        s.trackingServerSecure = 'metrics1.citi.com';
                        function AppMeasurement () {
                          var a = this;
                          a.version = '2.0.0';
                          var h = window;
                          h.s_c_in || ((h.s_c_il = []), (h.s_c_in = 0));
                          a._il = h.s_c_il;
                          a._in = h.s_c_in;
                          a._il[a._in] = a;
                          h.s_c_in++;
                          a._c = 's_c';
                          var n = h.AppMeasurement.Ob;
                          n || (n = null);
                          var p = h,
                            l,
                            r;
                          try {
                            for (
                              l = p.parent, r = p.location;
                              l &&
                              l.location &&
                              r &&
                              '' + l.location != '' + r &&
                              p.location &&
                              '' + l.location != '' + p.location &&
                              l.location.host == r.host;

                            )
                              (p = l), (l = p.parent);
                          } catch (s) {}
                          a.P = function (a) {
                            try {
                              console.log(a);
                            } catch (b) {}
                          };
                          a.La = function (a) {
                            return '' + parseInt(a) == '' + a;
                          };
                          a.replace = function (a, b, d) {
                            return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d);
                          };
                          a.escape = function (c) {
                            var b, d;
                            if (!c) return c;
                            c = encodeURIComponent(c);
                            for (b = 0; 7 > b; b++)
                              (d = "+~!*()'".substring(b, b + 1)),
                                0 <= c.indexOf(d) &&
                                  (c = a.replace(
                                    c,
                                    d,
                                    '%' + d.charCodeAt(0).toString(16).toUpperCase()
                                  ));
                            return c;
                          };
                          a.unescape = function (c) {
                            if (!c) return c;
                            c = 0 <= c.indexOf('+') ? a.replace(c, '+', ' ') : c;
                            try {
                              return decodeURIComponent(c);
                            } catch (b) {}
                            return unescape(c);
                          };
                          a.vb = function () {
                            var c = h.location.hostname,
                              b = a.fpCookieDomainPeriods,
                              d;
                            b || (b = a.cookieDomainPeriods);
                            if (
                              c &&
                              !a.cookieDomain &&
                              !/^[0-9.]+$/.test(c) &&
                              ((b = b ? parseInt(b) : 2),
                              (b = 2 < b ? b : 2),
                              (d = c.lastIndexOf('.')),
                              0 <= d)
                            ) {
                              for (; 0 <= d && 1 < b; ) (d = c.lastIndexOf('.', d - 1)), b--;
                              a.cookieDomain = 0 < d ? c.substring(d) : c;
                            }
                            return a.cookieDomain;
                          };
                          a.c_r = a.cookieRead = function (c) {
                            c = a.escape(c);
                            var b = ' ' + a.d.cookie,
                              d = b.indexOf(' ' + c + '='),
                              f = 0 > d ? d : b.indexOf(';', d);
                            c =
                              0 > d
                                ? ''
                                : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
                            return '[[B]]' != c ? c : '';
                          };
                          a.c_w = a.cookieWrite = function (c, b, d) {
                            var f = a.vb(),
                              e = a.cookieLifetime,
                              g;
                            b = '' + b;
                            e = e ? ('' + e).toUpperCase() : '';
                            d &&
                              'SESSION' != e &&
                              'NONE' != e &&
                              ((g = '' != b ? parseInt(e ? e : 0) : -60)
                                ? ((d = new Date()), d.setTime(d.getTime() + 1000 * g))
                                : 1 == d &&
                                  ((d = new Date()),
                                  (g = d.getYear()),
                                  d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
                            return c && 'NONE' != e
                              ? ((a.d.cookie =
                                  a.escape(c) +
                                  '=' +
                                  a.escape('' != b ? b : '[[B]]') +
                                  '; path=/;' +
                                  (d && 'SESSION' != e
                                    ? ' expires=' + d.toGMTString() + ';'
                                    : '') +
                                  (f ? ' domain=' + f + ';' : '')),
                                a.cookieRead(c) == b)
                              : 0;
                          };
                          a.K = [];
                          a.ia = function (c, b, d) {
                            if (a.Ea) return 0;
                            a.maxDelay || (a.maxDelay = 250);
                            var f = 0,
                              e = new Date().getTime() + a.maxDelay,
                              g = a.d.visibilityState,
                              k = ['webkitvisibilitychange', 'visibilitychange'];
                            g || (g = a.d.webkitVisibilityState);
                            if (g && 'prerender' == g) {
                              if (!a.ja)
                                for (a.ja = 1, d = 0; d < k.length; d++)
                                  a.d.addEventListener(k[d], function () {
                                    var c = a.d.visibilityState;
                                    c || (c = a.d.webkitVisibilityState);
                                    'visible' == c && ((a.ja = 0), a.delayReady());
                                  });
                              f = 1;
                              e = 0;
                            } else d || (a.p('_d') && (f = 1));
                            f &&
                              (a.K.push({ m: c, a: b, t: e }),
                              a.ja || setTimeout(a.delayReady, a.maxDelay));
                            return f;
                          };
                          a.delayReady = function () {
                            var c = new Date().getTime(),
                              b = 0,
                              d;
                            for (a.p('_d') ? (b = 1) : a.xa(); 0 < a.K.length; ) {
                              d = a.K.shift();
                              if (b && !d.t && d.t > c) {
                                a.K.unshift(d);
                                setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                                break;
                              }
                              a.Ea = 1;
                              a[d.m].apply(a, d.a);
                              a.Ea = 0;
                            }
                          };
                          a.setAccount = a.sa = function (c) {
                            var b, d;
                            if (!a.ia('setAccount', arguments))
                              if (((a.account = c), a.allAccounts))
                                for (
                                  b = a.allAccounts.concat(c.split(',')),
                                    a.allAccounts = [],
                                    b.sort(),
                                    d = 0;
                                  d < b.length;
                                  d++
                                )
                                  (0 != d && b[d - 1] == b[d]) || a.allAccounts.push(b[d]);
                              else a.allAccounts = c.split(',');
                          };
                          a.foreachVar = function (c, b) {
                            var d,
                              f,
                              e,
                              g,
                              k = '';
                            e = f = '';
                            if (a.lightProfileID)
                              (d = a.O),
                                (k = a.lightTrackVars) &&
                                  (k = ',' + k + ',' + a.na.join(',') + ',');
                            else {
                              d = a.g;
                              if (a.pe || a.linkType)
                                (k = a.linkTrackVars),
                                  (f = a.linkTrackEvents),
                                  a.pe &&
                                    ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                                    a[e] && ((k = a[e].Mb), (f = a[e].Lb)));
                              k && (k = ',' + k + ',' + a.G.join(',') + ',');
                              f && k && (k += ',events,');
                            }
                            b && (b = ',' + b + ',');
                            for (f = 0; f < d.length; f++)
                              (e = d[f]),
                                (g = a[e]) &&
                                  (!k || 0 <= k.indexOf(',' + e + ',')) &&
                                  (!b || 0 <= b.indexOf(',' + e + ',')) &&
                                  c(e, g);
                          };
                          a.r = function (c, b, d, f, e) {
                            var g = '',
                              k,
                              m,
                              h,
                              t,
                              l = 0;
                            'contextData' == c && (c = 'c');
                            if (b) {
                              for (k in b)
                                if (
                                  !(Object.prototype[k] || (e && k.substring(0, e.length) != e)) &&
                                  b[k] &&
                                  (!d || 0 <= d.indexOf(',' + (f ? f + '.' : '') + k + ','))
                                ) {
                                  h = !1;
                                  if (l)
                                    for (m = 0; m < l.length; m++)
                                      k.substring(0, l[m].length) == l[m] && (h = !0);
                                  if (
                                    !h &&
                                    ('' == g && (g += '&' + c + '.'),
                                    (m = b[k]),
                                    e && (k = k.substring(e.length)),
                                    0 < k.length)
                                  )
                                    if (((h = k.indexOf('.')), 0 < h))
                                      (m = k.substring(0, h)),
                                        (h = (e ? e : '') + m + '.'),
                                        l || (l = []),
                                        l.push(h),
                                        (g += a.r(m, b, d, f, h));
                                    else if (
                                      ('boolean' == typeof m && (m = m ? 'true' : 'false'), m)
                                    ) {
                                      if (
                                        'retrieveLightData' == f &&
                                        0 > e.indexOf('.contextData.')
                                      )
                                        switch (
                                          ((h = k.substring(0, 4)), (t = k.substring(4)), k)
                                        ) {
                                          case 'transactionID':
                                            k = 'xact';
                                            break;
                                          case 'channel':
                                            k = 'ch';
                                            break;
                                          case 'campaign':
                                            k = 'v0';
                                            break;
                                          default:
                                            a.La(t) &&
                                              ('prop' == h
                                                ? (k = 'c' + t)
                                                : 'eVar' == h
                                                ? (k = 'v' + t)
                                                : 'list' == h
                                                ? (k = 'l' + t)
                                                : 'hier' == h &&
                                                  ((k = 'h' + t), (m = m.substring(0, 255))));
                                        }
                                      g += '&' + a.escape(k) + '=' + a.escape(m);
                                    }
                                }
                              '' != g && (g += '&.' + c);
                            }
                            return g;
                          };
                          a.usePostbacks = 0;
                          a.yb = function () {
                            var c = '',
                              b,
                              d,
                              f,
                              e,
                              g,
                              k,
                              m,
                              h,
                              l = '',
                              p = '',
                              q = (e = '');
                            if (a.lightProfileID)
                              (b = a.O),
                                (l = a.lightTrackVars) &&
                                  (l = ',' + l + ',' + a.na.join(',') + ',');
                            else {
                              b = a.g;
                              if (a.pe || a.linkType)
                                (l = a.linkTrackVars),
                                  (p = a.linkTrackEvents),
                                  a.pe &&
                                    ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                                    a[e] && ((l = a[e].Mb), (p = a[e].Lb)));
                              l && (l = ',' + l + ',' + a.G.join(',') + ',');
                              p && ((p = ',' + p + ','), l && (l += ',events,'));
                              a.events2 && (q += ('' != q ? ',' : '') + a.events2);
                            }
                            if (a.visitor && a.visitor.getCustomerIDs) {
                              e = n;
                              if ((g = a.visitor.getCustomerIDs()))
                                for (d in g)
                                  Object.prototype[d] ||
                                    ((f = g[d]),
                                    'object' == typeof f &&
                                      (e || (e = {}),
                                      f.id && (e[d + '.id'] = f.id),
                                      f.authState && (e[d + '.as'] = f.authState)));
                              e && (c += a.r('cid', e));
                            }
                            a.AudienceManagement &&
                              a.AudienceManagement.isReady() &&
                              (c += a.r('d', a.AudienceManagement.getEventCallConfigParams()));
                            for (d = 0; d < b.length; d++) {
                              e = b[d];
                              g = a[e];
                              f = e.substring(0, 4);
                              k = e.substring(4);
                              !g && 'events' == e && q && ((g = q), (q = ''));
                              if (g && (!l || 0 <= l.indexOf(',' + e + ','))) {
                                switch (e) {
                                  case 'supplementalDataID':
                                    e = 'sdid';
                                    break;
                                  case 'timestamp':
                                    e = 'ts';
                                    break;
                                  case 'dynamicVariablePrefix':
                                    e = 'D';
                                    break;
                                  case 'visitorID':
                                    e = 'vid';
                                    break;
                                  case 'marketingCloudVisitorID':
                                    e = 'mid';
                                    break;
                                  case 'analyticsVisitorID':
                                    e = 'aid';
                                    break;
                                  case 'audienceManagerLocationHint':
                                    e = 'aamlh';
                                    break;
                                  case 'audienceManagerBlob':
                                    e = 'aamb';
                                    break;
                                  case 'authState':
                                    e = 'as';
                                    break;
                                  case 'pageURL':
                                    e = 'g';
                                    255 < g.length &&
                                      ((a.pageURLRest = g.substring(255)),
                                      (g = g.substring(0, 255)));
                                    break;
                                  case 'pageURLRest':
                                    e = '-g';
                                    break;
                                  case 'referrer':
                                    e = 'r';
                                    break;
                                  case 'vmk':
                                  case 'visitorMigrationKey':
                                    e = 'vmt';
                                    break;
                                  case 'visitorMigrationServer':
                                    e = 'vmf';
                                    a.ssl && a.visitorMigrationServerSecure && (g = '');
                                    break;
                                  case 'visitorMigrationServerSecure':
                                    e = 'vmf';
                                    !a.ssl && a.visitorMigrationServer && (g = '');
                                    break;
                                  case 'charSet':
                                    e = 'ce';
                                    break;
                                  case 'visitorNamespace':
                                    e = 'ns';
                                    break;
                                  case 'cookieDomainPeriods':
                                    e = 'cdp';
                                    break;
                                  case 'cookieLifetime':
                                    e = 'cl';
                                    break;
                                  case 'variableProvider':
                                    e = 'vvp';
                                    break;
                                  case 'currencyCode':
                                    e = 'cc';
                                    break;
                                  case 'channel':
                                    e = 'ch';
                                    break;
                                  case 'transactionID':
                                    e = 'xact';
                                    break;
                                  case 'campaign':
                                    e = 'v0';
                                    break;
                                  case 'latitude':
                                    e = 'lat';
                                    break;
                                  case 'longitude':
                                    e = 'lon';
                                    break;
                                  case 'resolution':
                                    e = 's';
                                    break;
                                  case 'colorDepth':
                                    e = 'c';
                                    break;
                                  case 'javascriptVersion':
                                    e = 'j';
                                    break;
                                  case 'javaEnabled':
                                    e = 'v';
                                    break;
                                  case 'cookiesEnabled':
                                    e = 'k';
                                    break;
                                  case 'browserWidth':
                                    e = 'bw';
                                    break;
                                  case 'browserHeight':
                                    e = 'bh';
                                    break;
                                  case 'connectionType':
                                    e = 'ct';
                                    break;
                                  case 'homepage':
                                    e = 'hp';
                                    break;
                                  case 'events':
                                    q && (g += ('' != g ? ',' : '') + q);
                                    if (p)
                                      for (k = g.split(','), g = '', f = 0; f < k.length; f++)
                                        (m = k[f]),
                                          (h = m.indexOf('=')),
                                          0 <= h && (m = m.substring(0, h)),
                                          (h = m.indexOf(':')),
                                          0 <= h && (m = m.substring(0, h)),
                                          0 <= p.indexOf(',' + m + ',') &&
                                            (g += (g ? ',' : '') + k[f]);
                                    break;
                                  case 'events2':
                                    g = '';
                                    break;
                                  case 'contextData':
                                    c += a.r('c', a[e], l, e);
                                    g = '';
                                    break;
                                  case 'lightProfileID':
                                    e = 'mtp';
                                    break;
                                  case 'lightStoreForSeconds':
                                    e = 'mtss';
                                    a.lightProfileID || (g = '');
                                    break;
                                  case 'lightIncrementBy':
                                    e = 'mti';
                                    a.lightProfileID || (g = '');
                                    break;
                                  case 'retrieveLightProfiles':
                                    e = 'mtsr';
                                    break;
                                  case 'deleteLightProfiles':
                                    e = 'mtsd';
                                    break;
                                  case 'retrieveLightData':
                                    a.retrieveLightProfiles && (c += a.r('mts', a[e], l, e));
                                    g = '';
                                    break;
                                  default:
                                    a.La(k) &&
                                      ('prop' == f
                                        ? (e = 'c' + k)
                                        : 'eVar' == f
                                        ? (e = 'v' + k)
                                        : 'list' == f
                                        ? (e = 'l' + k)
                                        : 'hier' == f &&
                                          ((e = 'h' + k), (g = g.substring(0, 255))));
                                }
                                g &&
                                  (c +=
                                    '&' +
                                    e +
                                    '=' +
                                    ('pev' != e.substring(0, 3) ? a.escape(g) : g));
                              }
                              'pev3' == e && a.e && (c += a.e);
                            }
                            return c;
                          };
                          a.D = function (a) {
                            var b = a.tagName;
                            if (
                              'undefined' != '' + a.Rb ||
                              ('undefined' != '' + a.Hb && 'HTML' != ('' + a.Hb).toUpperCase())
                            )
                              return '';
                            b = b && b.toUpperCase ? b.toUpperCase() : '';
                            'SHAPE' == b && (b = '');
                            b &&
                              (('INPUT' == b || 'BUTTON' == b) && a.type && a.type.toUpperCase
                                ? (b = a.type.toUpperCase())
                                : !b && a.href && (b = 'A'));
                            return b;
                          };
                          a.Ha = function (a) {
                            var b = h.location,
                              d = a.href ? a.href : '',
                              f,
                              e,
                              g;
                            f = d.indexOf(':');
                            e = d.indexOf('?');
                            g = d.indexOf('/');
                            d &&
                              (0 > f || (0 <= e && f > e) || (0 <= g && f > g)) &&
                              ((e =
                                a.protocol && 1 < a.protocol.length
                                  ? a.protocol
                                  : b.protocol
                                  ? b.protocol
                                  : ''),
                              (f = b.pathname.lastIndexOf('/')),
                              (d =
                                (e ? e + '//' : '') +
                                (a.host ? a.host : b.host ? b.host : '') +
                                ('/' != d.substring(0, 1)
                                  ? b.pathname.substring(0, 0 > f ? 0 : f) + '/'
                                  : '') +
                                d));
                            return d;
                          };
                          a.L = function (c) {
                            var b = a.D(c),
                              d,
                              f,
                              e = '',
                              g = 0;
                            return b &&
                              ((d = c.protocol),
                              (f = c.onclick),
                              !c.href ||
                              ('A' != b && 'AREA' != b) ||
                              (f && d && !(0 > d.toLowerCase().indexOf('javascript')))
                                ? f
                                  ? ((e = a.replace(
                                      a.replace(
                                        a.replace(a.replace('' + f, '\r', ''), '\n', ''),
                                        '\t',
                                        ''
                                      ),
                                      ' ',
                                      ''
                                    )),
                                    (g = 2))
                                  : 'INPUT' == b || 'SUBMIT' == b
                                  ? (c.value
                                      ? (e = c.value)
                                      : c.innerText
                                      ? (e = c.innerText)
                                      : c.textContent && (e = c.textContent),
                                    (g = 3))
                                  : 'IMAGE' == b && c.src && (e = c.src)
                                : (e = a.Ha(c)),
                              e)
                              ? { id: e.substring(0, 100), type: g }
                              : 0;
                          };
                          a.Pb = function (c) {
                            for (var b = a.D(c), d = a.L(c); c && !d && 'BODY' != b; )
                              if ((c = c.parentElement ? c.parentElement : c.parentNode))
                                (b = a.D(c)), (d = a.L(c));
                            (d && 'BODY' != b) || (c = 0);
                            c &&
                              ((b = c.onclick ? '' + c.onclick : ''),
                              0 <= b.indexOf('.tl(') || 0 <= b.indexOf('.trackLink(')) &&
                              (c = 0);
                            return c;
                          };
                          a.Gb = function () {
                            var c,
                              b,
                              d = a.linkObject,
                              f = a.linkType,
                              e = a.linkURL,
                              g,
                              k;
                            a.oa = 1;
                            d || ((a.oa = 0), (d = a.clickObject));
                            if (d) {
                              c = a.D(d);
                              for (b = a.L(d); d && !b && 'BODY' != c; )
                                if ((d = d.parentElement ? d.parentElement : d.parentNode))
                                  (c = a.D(d)), (b = a.L(d));
                              (b && 'BODY' != c) || (d = 0);
                              if (d && !a.linkObject) {
                                var m = d.onclick ? '' + d.onclick : '';
                                if (0 <= m.indexOf('.tl(') || 0 <= m.indexOf('.trackLink(')) d = 0;
                              }
                            } else a.oa = 1;
                            !e && d && (e = a.Ha(d));
                            e &&
                              !a.linkLeaveQueryString &&
                              ((g = e.indexOf('?')), 0 <= g && (e = e.substring(0, g)));
                            if (!f && e) {
                              var l = 0,
                                p = 0,
                                n;
                              if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                                for (
                                  m = e.toLowerCase(),
                                    g = m.indexOf('?'),
                                    k = m.indexOf('#'),
                                    0 <= g ? 0 <= k && k < g && (g = k) : (g = k),
                                    0 <= g && (m = m.substring(0, g)),
                                    g = a.linkDownloadFileTypes.toLowerCase().split(','),
                                    k = 0;
                                  k < g.length;
                                  k++
                                )
                                  (n = g[k]) &&
                                    m.substring(m.length - (n.length + 1)) == '.' + n &&
                                    (f = 'd');
                              if (
                                a.trackExternalLinks &&
                                !f &&
                                ((m = e.toLowerCase()),
                                a.Ka(m) &&
                                  (a.linkInternalFilters ||
                                    (a.linkInternalFilters = h.location.hostname),
                                  (g = 0),
                                  a.linkExternalFilters
                                    ? ((g = a.linkExternalFilters.toLowerCase().split(',')),
                                      (l = 1))
                                    : a.linkInternalFilters &&
                                      (g = a.linkInternalFilters.toLowerCase().split(',')),
                                  g))
                              ) {
                                for (k = 0; k < g.length; k++)
                                  (n = g[k]), 0 <= m.indexOf(n) && (p = 1);
                                p ? l && (f = 'e') : l || (f = 'e');
                              }
                            }
                            a.linkObject = d;
                            a.linkURL = e;
                            a.linkType = f;
                            if (a.trackClickMap || a.trackInlineStats)
                              (a.e = ''),
                                d &&
                                  ((f = a.pageName),
                                  (e = 1),
                                  (d = d.sourceIndex),
                                  f || ((f = a.pageURL), (e = 0)),
                                  h.s_objectID && ((b.id = h.s_objectID), (d = b.type = 1)),
                                  f &&
                                    b &&
                                    b.id &&
                                    c &&
                                    (a.e =
                                      '&pid=' +
                                      a.escape(f.substring(0, 255)) +
                                      (e ? '&pidt=' + e : '') +
                                      '&oid=' +
                                      a.escape(b.id.substring(0, 100)) +
                                      (b.type ? '&oidt=' + b.type : '') +
                                      '&ot=' +
                                      c +
                                      (d ? '&oi=' + d : '')));
                          };
                          a.zb = function () {
                            var c = a.oa,
                              b = a.linkType,
                              d = a.linkURL,
                              f = a.linkName;
                            b &&
                              (d || f) &&
                              ((b = b.toLowerCase()),
                              'd' != b && 'e' != b && (b = 'o'),
                              (a.pe = 'lnk_' + b),
                              (a.pev1 = d ? a.escape(d) : ''),
                              (a.pev2 = f ? a.escape(f) : ''),
                              (c = 1));
                            a.abort && (c = 0);
                            if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
                              var b = {},
                                d = 0,
                                e = a.cookieRead('s_sq'),
                                g = e ? e.split('&') : 0,
                                k,
                                m,
                                h,
                                e = 0;
                              if (g)
                                for (k = 0; k < g.length; k++)
                                  (m = g[k].split('=')),
                                    (f = a.unescape(m[0]).split(',')),
                                    (m = a.unescape(m[1])),
                                    (b[m] = f);
                              f = a.account.split(',');
                              k = {};
                              for (h in a.contextData)
                                h &&
                                  !Object.prototype[h] &&
                                  'a.activitymap.' == h.substring(0, 14) &&
                                  ((k[h] = a.contextData[h]), (a.contextData[h] = ''));
                              a.e = a.r('c', k) + (a.e ? a.e : '');
                              if (c || a.e) {
                                c && !a.e && (e = 1);
                                for (m in b)
                                  if (!Object.prototype[m])
                                    for (h = 0; h < f.length; h++)
                                      for (
                                        e &&
                                          ((g = b[m].join(',')),
                                          g == a.account &&
                                            ((a.e += ('&' != m.charAt(0) ? '&' : '') + m),
                                            (b[m] = []),
                                            (d = 1))),
                                          k = 0;
                                        k < b[m].length;
                                        k++
                                      )
                                        (g = b[m][k]),
                                          g == f[h] &&
                                            (e &&
                                              (a.e +=
                                                '&u=' +
                                                a.escape(g) +
                                                ('&' != m.charAt(0) ? '&' : '') +
                                                m +
                                                '&u=0'),
                                            b[m].splice(k, 1),
                                            (d = 1));
                                c || (d = 1);
                                if (d) {
                                  e = '';
                                  k = 2;
                                  !c &&
                                    a.e &&
                                    ((e = a.escape(f.join(',')) + '=' + a.escape(a.e)), (k = 1));
                                  for (m in b)
                                    !Object.prototype[m] &&
                                      0 < k &&
                                      0 < b[m].length &&
                                      ((e +=
                                        (e ? '&' : '') +
                                        a.escape(b[m].join(',')) +
                                        '=' +
                                        a.escape(m)),
                                      k--);
                                  a.cookieWrite('s_sq', e);
                                }
                              }
                            }
                            return c;
                          };
                          a.Ab = function () {
                            if (!a.Kb) {
                              var c = new Date(),
                                b = p.location,
                                d,
                                f,
                                e = (f = d = ''),
                                g = '',
                                k = '',
                                h = '1.2',
                                l = a.cookieWrite('s_cc', 'true', 0) ? 'Y' : 'N',
                                n = '',
                                q = '';
                              if (
                                c.setUTCDate &&
                                ((h = '1.3'),
                                (0).toPrecision && ((h = '1.5'), (c = []), c.forEach))
                              ) {
                                h = '1.6';
                                f = 0;
                                d = {};
                                try {
                                  (f = new Iterator(d)),
                                    f.next &&
                                      ((h = '1.7'),
                                      c.reduce &&
                                        ((h = '1.8'),
                                        h.trim &&
                                          ((h = '1.8.1'),
                                          Date.parse &&
                                            ((h = '1.8.2'), Object.create && (h = '1.8.5')))));
                                } catch (r) {}
                              }
                              d = screen.width + 'x' + screen.height;
                              e = navigator.javaEnabled() ? 'Y' : 'N';
                              f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
                              g = a.w.innerWidth
                                ? a.w.innerWidth
                                : a.d.documentElement.offsetWidth;
                              k = a.w.innerHeight
                                ? a.w.innerHeight
                                : a.d.documentElement.offsetHeight;
                              try {
                                a.b.addBehavior('#default#homePage'), (n = a.b.Qb(b) ? 'Y' : 'N');
                              } catch (s) {}
                              try {
                                a.b.addBehavior('#default#clientCaps'), (q = a.b.connectionType);
                              } catch (u) {}
                              a.resolution = d;
                              a.colorDepth = f;
                              a.javascriptVersion = h;
                              a.javaEnabled = e;
                              a.cookiesEnabled = l;
                              a.browserWidth = g;
                              a.browserHeight = k;
                              a.connectionType = q;
                              a.homepage = n;
                              a.Kb = 1;
                            }
                          };
                          a.Q = {};
                          a.loadModule = function (c, b) {
                            var d = a.Q[c];
                            if (!d) {
                              d = h['AppMeasurement_Module_' + c]
                                ? new h['AppMeasurement_Module_' + c](a)
                                : {};
                              a.Q[c] = a[c] = d;
                              d.cb = function () {
                                return d.hb;
                              };
                              d.ib = function (b) {
                                if ((d.hb = b))
                                  (a[c + '_onLoad'] = b),
                                    a.ia(c + '_onLoad', [a, d], 1) || b(a, d);
                              };
                              try {
                                Object.defineProperty
                                  ? Object.defineProperty(d, 'onLoad', { get: d.cb, set: d.ib })
                                  : (d._olc = 1);
                              } catch (f) {
                                d._olc = 1;
                              }
                            }
                            b &&
                              ((a[c + '_onLoad'] = b), a.ia(c + '_onLoad', [a, d], 1) || b(a, d));
                          };
                          a.p = function (c) {
                            var b, d;
                            for (b in a.Q)
                              if (
                                !Object.prototype[b] &&
                                (d = a.Q[b]) &&
                                (d._olc && d.onLoad && ((d._olc = 0), d.onLoad(a, d)),
                                d[c] && d[c]())
                              )
                                return 1;
                            return 0;
                          };
                          a.Cb = function () {
                            var c = Math.floor(10000000000000 * Math.random()),
                              b = a.visitorSampling,
                              d = a.visitorSamplingGroup,
                              d =
                                's_vsn_' +
                                (a.visitorNamespace ? a.visitorNamespace : a.account) +
                                (d ? '_' + d : ''),
                              f = a.cookieRead(d);
                            if (b) {
                              b *= 100;
                              f && (f = parseInt(f));
                              if (!f) {
                                if (!a.cookieWrite(d, c)) return 0;
                                f = c;
                              }
                              if (f % 10000 > b) return 0;
                            }
                            return 1;
                          };
                          a.R = function (c, b) {
                            var d, f, e, g, k, h;
                            for (d = 0; 2 > d; d++)
                              for (f = 0 < d ? a.Aa : a.g, e = 0; e < f.length; e++)
                                if (((g = f[e]), (k = c[g]) || c['!' + g])) {
                                  if (
                                    !b &&
                                    ('contextData' == g || 'retrieveLightData' == g) &&
                                    a[g]
                                  )
                                    for (h in a[g]) k[h] || (k[h] = a[g][h]);
                                  a[g] = k;
                                }
                          };
                          a.Ua = function (c, b) {
                            var d, f, e, g;
                            for (d = 0; 2 > d; d++)
                              for (f = 0 < d ? a.Aa : a.g, e = 0; e < f.length; e++)
                                (g = f[e]), (c[g] = a[g]), b || c[g] || (c['!' + g] = 1);
                          };
                          a.ub = function (a) {
                            var b,
                              d,
                              f,
                              e,
                              g,
                              k = 0,
                              h,
                              l = '',
                              n = '';
                            if (
                              a &&
                              255 < a.length &&
                              ((b = '' + a),
                              (d = b.indexOf('?')),
                              0 < d &&
                                ((h = b.substring(d + 1)),
                                (b = b.substring(0, d)),
                                (e = b.toLowerCase()),
                                (f = 0),
                                'http://' == e.substring(0, 7)
                                  ? (f += 7)
                                  : 'https://' == e.substring(0, 8) && (f += 8),
                                (d = e.indexOf('/', f)),
                                0 < d &&
                                  ((e = e.substring(f, d)),
                                  (g = b.substring(d)),
                                  (b = b.substring(0, d)),
                                  0 <= e.indexOf('google')
                                    ? (k = ',q,ie,start,search_key,word,kw,cd,')
                                    : 0 <= e.indexOf('yahoo.co') && (k = ',p,ei,'),
                                  k && h)))
                            ) {
                              if ((a = h.split('&')) && 1 < a.length) {
                                for (f = 0; f < a.length; f++)
                                  (e = a[f]),
                                    (d = e.indexOf('=')),
                                    0 < d && 0 <= k.indexOf(',' + e.substring(0, d) + ',')
                                      ? (l += (l ? '&' : '') + e)
                                      : (n += (n ? '&' : '') + e);
                                l && n ? (h = l + '&' + n) : (n = '');
                              }
                              d = 253 - (h.length - n.length) - b.length;
                              a = b + (0 < d ? g.substring(0, d) : '') + '?' + h;
                            }
                            return a;
                          };
                          a.$a = function (c) {
                            var b = a.d.visibilityState,
                              d = ['webkitvisibilitychange', 'visibilitychange'];
                            b || (b = a.d.webkitVisibilityState);
                            if (b && 'prerender' == b) {
                              if (c)
                                for (b = 0; b < d.length; b++)
                                  a.d.addEventListener(d[b], function () {
                                    var b = a.d.visibilityState;
                                    b || (b = a.d.webkitVisibilityState);
                                    'visible' == b && c();
                                  });
                              return !1;
                            }
                            return !0;
                          };
                          a.ea = !1;
                          a.I = !1;
                          a.kb = function () {
                            a.I = !0;
                            a.j();
                          };
                          a.ca = !1;
                          a.V = !1;
                          a.gb = function (c) {
                            a.marketingCloudVisitorID = c;
                            a.V = !0;
                            a.j();
                          };
                          a.fa = !1;
                          a.W = !1;
                          a.lb = function (c) {
                            a.visitorOptedOut = c;
                            a.W = !0;
                            a.j();
                          };
                          a.Z = !1;
                          a.S = !1;
                          a.Wa = function (c) {
                            a.analyticsVisitorID = c;
                            a.S = !0;
                            a.j();
                          };
                          a.ba = !1;
                          a.U = !1;
                          a.Ya = function (c) {
                            a.audienceManagerLocationHint = c;
                            a.U = !0;
                            a.j();
                          };
                          a.aa = !1;
                          a.T = !1;
                          a.Xa = function (c) {
                            a.audienceManagerBlob = c;
                            a.T = !0;
                            a.j();
                          };
                          a.Za = function (c) {
                            a.maxDelay || (a.maxDelay = 250);
                            return a.p('_d')
                              ? (c &&
                                  setTimeout(function () {
                                    c();
                                  }, a.maxDelay),
                                !1)
                              : !0;
                          };
                          a.da = !1;
                          a.H = !1;
                          a.xa = function () {
                            a.H = !0;
                            a.j();
                          };
                          a.isReadyToTrack = function () {
                            var c = !0,
                              b = a.visitor,
                              d,
                              f,
                              e;
                            a.ea || a.I || (a.$a(a.kb) ? (a.I = !0) : (a.ea = !0));
                            if (a.ea && !a.I) return !1;
                            b &&
                              b.isAllowed() &&
                              (a.ca ||
                                a.marketingCloudVisitorID ||
                                !b.getMarketingCloudVisitorID ||
                                ((a.ca = !0),
                                (a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([
                                  a,
                                  a.gb,
                                ])),
                                a.marketingCloudVisitorID && (a.V = !0)),
                              a.fa ||
                                a.visitorOptedOut ||
                                !b.isOptedOut ||
                                ((a.fa = !0),
                                (a.visitorOptedOut = b.isOptedOut([a, a.lb])),
                                a.visitorOptedOut != n && (a.W = !0)),
                              a.Z ||
                                a.analyticsVisitorID ||
                                !b.getAnalyticsVisitorID ||
                                ((a.Z = !0),
                                (a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.Wa])),
                                a.analyticsVisitorID && (a.S = !0)),
                              a.ba ||
                                a.audienceManagerLocationHint ||
                                !b.getAudienceManagerLocationHint ||
                                ((a.ba = !0),
                                (a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([
                                  a,
                                  a.Ya,
                                ])),
                                a.audienceManagerLocationHint && (a.U = !0)),
                              a.aa ||
                                a.audienceManagerBlob ||
                                !b.getAudienceManagerBlob ||
                                ((a.aa = !0),
                                (a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Xa])),
                                a.audienceManagerBlob && (a.T = !0)),
                              (c = a.ca && !a.V && !a.marketingCloudVisitorID),
                              (b = a.Z && !a.S && !a.analyticsVisitorID),
                              (d = a.ba && !a.U && !a.audienceManagerLocationHint),
                              (f = a.aa && !a.T && !a.audienceManagerBlob),
                              (e = a.fa && !a.W),
                              (c = c || b || d || f || e ? !1 : !0));
                            a.da || a.H || (a.Za(a.xa) ? (a.H = !0) : (a.da = !0));
                            a.da && !a.H && (c = !1);
                            return c;
                          };
                          a.o = n;
                          a.u = 0;
                          a.callbackWhenReadyToTrack = function (c, b, d) {
                            var f;
                            f = {};
                            f.pb = c;
                            f.ob = b;
                            f.mb = d;
                            a.o == n && (a.o = []);
                            a.o.push(f);
                            0 == a.u && (a.u = setInterval(a.j, 100));
                          };
                          a.j = function () {
                            var c;
                            if (a.isReadyToTrack() && (a.jb(), a.o != n))
                              for (; 0 < a.o.length; ) (c = a.o.shift()), c.ob.apply(c.pb, c.mb);
                          };
                          a.jb = function () {
                            a.u && (clearInterval(a.u), (a.u = 0));
                          };
                          a.eb = function (c) {
                            var b,
                              d,
                              f = n,
                              e = n;
                            if (!a.isReadyToTrack()) {
                              b = [];
                              if (c != n) for (d in ((f = {}), c)) f[d] = c[d];
                              e = {};
                              a.Ua(e, !0);
                              b.push(f);
                              b.push(e);
                              a.callbackWhenReadyToTrack(a, a.track, b);
                              return !0;
                            }
                            return !1;
                          };
                          a.wb = function () {
                            var c = a.cookieRead('s_fid'),
                              b = '',
                              d = '',
                              f;
                            f = 8;
                            var e = 4;
                            if (!c || 0 > c.indexOf('-')) {
                              for (c = 0; 16 > c; c++)
                                (f = Math.floor(Math.random() * f)),
                                  (b += '0123456789ABCDEF'.substring(f, f + 1)),
                                  (f = Math.floor(Math.random() * e)),
                                  (d += '0123456789ABCDEF'.substring(f, f + 1)),
                                  (f = e = 16);
                              c = b + '-' + d;
                            }
                            a.cookieWrite('s_fid', c, 1) || (c = 0);
                            return c;
                          };
                          a.t = a.track = function (c, b) {
                            var d,
                              f = new Date(),
                              e =
                                's' +
                                (Math.floor(f.getTime() / 10800000) % 10) +
                                Math.floor(10000000000000 * Math.random()),
                              g = f.getYear(),
                              g =
                                't=' +
                                a.escape(
                                  f.getDate() +
                                    '/' +
                                    f.getMonth() +
                                    '/' +
                                    (1900 > g ? g + 1900 : g) +
                                    ' ' +
                                    f.getHours() +
                                    ':' +
                                    f.getMinutes() +
                                    ':' +
                                    f.getSeconds() +
                                    ' ' +
                                    f.getDay() +
                                    ' ' +
                                    f.getTimezoneOffset()
                                );
                            a.visitor &&
                              a.visitor.getAuthState &&
                              (a.authState = a.visitor.getAuthState());
                            a.p('_s');
                            a.eb(c) ||
                              (b && a.R(b),
                              c && ((d = {}), a.Ua(d, 0), a.R(c)),
                              a.Cb() &&
                                !a.visitorOptedOut &&
                                (a.analyticsVisitorID ||
                                  a.marketingCloudVisitorID ||
                                  (a.fid = a.wb()),
                                a.Gb(),
                                a.usePlugins && a.doPlugins && a.doPlugins(a),
                                a.account &&
                                  (a.abort ||
                                    (a.trackOffline &&
                                      !a.timestamp &&
                                      (a.timestamp = Math.floor(f.getTime() / 1000)),
                                    (f = h.location),
                                    a.pageURL || (a.pageURL = f.href ? f.href : f),
                                    a.referrer || a.Va || (a.referrer = p.document.referrer),
                                    (a.Va = 1),
                                    (a.referrer = a.ub(a.referrer)),
                                    a.p('_g')),
                                  a.zb() &&
                                    !a.abort &&
                                    (a.visitor &&
                                      !a.supplementalDataID &&
                                      a.visitor.getSupplementalDataID &&
                                      (a.supplementalDataID = a.visitor.getSupplementalDataID(
                                        'AppMeasurement:' + a._in,
                                        a.expectSupplementalData ? !1 : !0
                                      )),
                                    a.Ab(),
                                    (g += a.yb()),
                                    a.Fb(e, g),
                                    a.p('_t'),
                                    (a.referrer = '')))),
                              c && a.R(d, 1));
                            a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = h.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0;
                          };
                          a.za = [];
                          a.registerPreTrackCallback = function (c) {
                            for (var b = [], d = 1; d < arguments.length; d++)
                              b.push(arguments[d]);
                            'function' == typeof c
                              ? a.za.push([c, b])
                              : a.debugTracking &&
                                a.P('DEBUG: Non function type passed to registerPreTrackCallback');
                          };
                          a.bb = function (c) {
                            a.wa(a.za, c);
                          };
                          a.ya = [];
                          a.registerPostTrackCallback = function (c) {
                            for (var b = [], d = 1; d < arguments.length; d++)
                              b.push(arguments[d]);
                            'function' == typeof c
                              ? a.ya.push([c, b])
                              : a.debugTracking &&
                                a.P(
                                  'DEBUG: Non function type passed to registerPostTrackCallback'
                                );
                          };
                          a.ab = function (c) {
                            a.wa(a.ya, c);
                          };
                          a.wa = function (c, b) {
                            if ('object' == typeof c)
                              for (var d = 0; d < c.length; d++) {
                                var f = c[d][0],
                                  e = c[d][1];
                                e.unshift(b);
                                if ('function' == typeof f)
                                  try {
                                    f.apply(null, e);
                                  } catch (g) {
                                    a.debugTracking && a.P(g.message);
                                  }
                              }
                          };
                          a.tl = a.trackLink = function (c, b, d, f, e) {
                            a.linkObject = c;
                            a.linkType = b;
                            a.linkName = d;
                            e && ((a.l = c), (a.A = e));
                            return a.track(f);
                          };
                          a.trackLight = function (c, b, d, f) {
                            a.lightProfileID = c;
                            a.lightStoreForSeconds = b;
                            a.lightIncrementBy = d;
                            return a.track(f);
                          };
                          a.clearVars = function () {
                            var c, b;
                            for (c = 0; c < a.g.length; c++)
                              if (
                                ((b = a.g[c]),
                                'prop' == b.substring(0, 4) ||
                                  'eVar' == b.substring(0, 4) ||
                                  'hier' == b.substring(0, 4) ||
                                  'list' == b.substring(0, 4) ||
                                  'channel' == b ||
                                  'events' == b ||
                                  'eventList' == b ||
                                  'products' == b ||
                                  'productList' == b ||
                                  'purchaseID' == b ||
                                  'transactionID' == b ||
                                  'state' == b ||
                                  'zip' == b ||
                                  'campaign' == b)
                              )
                                a[b] = void 0;
                          };
                          a.tagContainerMarker = '';
                          a.Fb = function (c, b) {
                            var d,
                              f = a.trackingServer;
                            d = '';
                            var e = a.dc,
                              g = 'sc.',
                              h = a.visitorNamespace;
                            f
                              ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure)
                              : (h ||
                                  ((h = a.account),
                                  (f = h.indexOf(',')),
                                  0 <= f && (h = h.substring(0, f)),
                                  (h = h.replace(/[^A-Za-z0-9]/g, ''))),
                                d || (d = '2o7.net'),
                                (e = e ? ('' + e).toLowerCase() : 'd1'),
                                '2o7.net' == d &&
                                  ('d1' == e ? (e = '112') : 'd2' == e && (e = '122'), (g = '')),
                                (f = h + '.' + e + '.' + g + d));
                            d = a.ssl ? 'https://' : 'http://';
                            e =
                              (a.AudienceManagement && a.AudienceManagement.isReady()) ||
                              0 != a.usePostbacks;
                            d +=
                              f +
                              '/b/ss/' +
                              a.account +
                              '/' +
                              (a.mobile ? '5.' : '') +
                              (e ? '10' : '1') +
                              '/JS-' +
                              a.version +
                              (a.Jb ? 'T' : '') +
                              (a.tagContainerMarker ? '-' + a.tagContainerMarker : '') +
                              '/' +
                              c +
                              '?AQB=1&ndh=1&pf=1&' +
                              (e ? 'callback=s_c_il[' + a._in + '].doPostbacks&et=1&' : '') +
                              b +
                              '&AQE=1';
                            a.bb(d);
                            a.sb(d);
                            a.ka();
                          };
                          a.Ta = /{(%?)(.*?)(%?)}/;
                          a.Nb = RegExp(a.Ta.source, 'g');
                          a.tb = function (c) {
                            if ('object' == typeof c.dests)
                              for (var b = 0; b < c.dests.length; ++b) {
                                var d = c.dests[b];
                                if ('string' == typeof d.c && 'aa.' == d.id.substr(0, 3))
                                  for (var f = d.c.match(a.Nb), e = 0; e < f.length; ++e) {
                                    var g = f[e],
                                      h = g.match(a.Ta),
                                      l = '';
                                    '%' == h[1] && 'timezone_offset' == h[2]
                                      ? (l = new Date().getTimezoneOffset())
                                      : '%' == h[1] && 'timestampz' == h[2] && (l = a.xb());
                                    d.c = d.c.replace(g, a.escape(l));
                                  }
                              }
                          };
                          a.xb = function () {
                            var c = new Date(),
                              b = new Date(60000 * Math.abs(c.getTimezoneOffset()));
                            return (
                              a.k(4, c.getFullYear()) +
                              '-' +
                              a.k(2, c.getMonth() + 1) +
                              '-' +
                              a.k(2, c.getDate()) +
                              'T' +
                              a.k(2, c.getHours()) +
                              ':' +
                              a.k(2, c.getMinutes()) +
                              ':' +
                              a.k(2, c.getSeconds()) +
                              (0 < c.getTimezoneOffset() ? '-' : '+') +
                              a.k(2, b.getUTCHours()) +
                              ':' +
                              a.k(2, b.getUTCMinutes())
                            );
                          };
                          a.k = function (a, b) {
                            return (Array(a + 1).join(0) + b).slice(-a);
                          };
                          a.ta = {};
                          a.doPostbacks = function (c) {
                            if ('object' == typeof c)
                              if (
                                (a.tb(c),
                                'object' == typeof a.AudienceManagement &&
                                  'function' == typeof a.AudienceManagement.isReady &&
                                  a.AudienceManagement.isReady() &&
                                  'function' == typeof a.AudienceManagement.passData)
                              )
                                a.AudienceManagement.passData(c);
                              else if ('object' == typeof c && 'object' == typeof c.dests)
                                for (var b = 0; b < c.dests.length; ++b) {
                                  var d = c.dests[b];
                                  'object' == typeof d &&
                                    'string' == typeof d.c &&
                                    'string' == typeof d.id &&
                                    'aa.' == d.id.substr(0, 3) &&
                                    ((a.ta[d.id] = new Image()),
                                    (a.ta[d.id].alt = ''),
                                    (a.ta[d.id].src = d.c));
                                }
                          };
                          a.sb = function (c) {
                            a.i || a.Bb();
                            a.i.push(c);
                            a.ma = a.C();
                            a.Ra();
                          };
                          a.Bb = function () {
                            a.i = a.Db();
                            a.i || (a.i = []);
                          };
                          a.Db = function () {
                            var c, b;
                            if (a.ra()) {
                              try {
                                (b = h.localStorage.getItem(a.pa())) && (c = h.JSON.parse(b));
                              } catch (d) {}
                              return c;
                            }
                          };
                          a.ra = function () {
                            var c = !0;
                            (a.trackOffline && a.offlineFilename && h.localStorage && h.JSON) ||
                              (c = !1);
                            return c;
                          };
                          a.Ia = function () {
                            var c = 0;
                            a.i && (c = a.i.length);
                            a.q && c++;
                            return c;
                          };
                          a.ka = function () {
                            if (a.q && (a.B && a.B.complete && a.B.F && a.B.va(), a.q)) return;
                            a.Ja = n;
                            if (a.qa) a.ma > a.N && a.Pa(a.i), a.ua(500);
                            else {
                              var c = a.nb();
                              if (0 < c) a.ua(c);
                              else if ((c = a.Fa())) (a.q = 1), a.Eb(c), a.Ib(c);
                            }
                          };
                          a.ua = function (c) {
                            a.Ja || (c || (c = 0), (a.Ja = setTimeout(a.ka, c)));
                          };
                          a.nb = function () {
                            var c;
                            if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
                            c = a.C() - a.Oa;
                            return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
                          };
                          a.Fa = function () {
                            if (0 < a.i.length) return a.i.shift();
                          };
                          a.Eb = function (c) {
                            if (a.debugTracking) {
                              var b = 'AppMeasurement Debug: ' + c;
                              c = c.split('&');
                              var d;
                              for (d = 0; d < c.length; d++) b += '\n\t' + a.unescape(c[d]);
                              a.P(b);
                            }
                          };
                          a.fb = function () {
                            return a.marketingCloudVisitorID || a.analyticsVisitorID;
                          };
                          a.Y = !1;
                          var q;
                          try {
                            q = JSON.parse('{"x":"y"}');
                          } catch (u) {
                            q = null;
                          }
                          q && 'y' == q.x
                            ? ((a.Y = !0),
                              (a.X = function (a) {
                                return JSON.parse(a);
                              }))
                            : h.$ && h.$.parseJSON
                            ? ((a.X = function (a) {
                                return h.$.parseJSON(a);
                              }),
                              (a.Y = !0))
                            : (a.X = function () {
                                return null;
                              });
                          a.Ib = function (c) {
                            var b, d, f;
                            a.fb() &&
                              2047 < c.length &&
                              ('undefined' != typeof XMLHttpRequest &&
                                ((b = new XMLHttpRequest()),
                                'withCredentials' in b ? (d = 1) : (b = 0)),
                              b ||
                                'undefined' == typeof XDomainRequest ||
                                ((b = new XDomainRequest()), (d = 2)),
                              b &&
                                ((a.AudienceManagement && a.AudienceManagement.isReady()) ||
                                  0 != a.usePostbacks) &&
                                (a.Y ? (b.Ba = !0) : (b = 0)));
                            !b && a.Sa && (c = c.substring(0, 2047));
                            !b &&
                              a.d.createElement &&
                              (0 != a.usePostbacks ||
                                (a.AudienceManagement && a.AudienceManagement.isReady())) &&
                              (b = a.d.createElement('SCRIPT')) &&
                              'async' in b &&
                              ((f =
                                (f = a.d.getElementsByTagName('HEAD')) && f[0] ? f[0] : a.d.body)
                                ? ((b.type = 'text/javascript'),
                                  b.setAttribute('async', 'async'),
                                  (d = 3))
                                : (b = 0));
                            b ||
                              ((b = new Image()),
                              (b.alt = ''),
                              b.abort ||
                                'undefined' === typeof h.InstallTrigger ||
                                (b.abort = function () {
                                  b.src = n;
                                }));
                            b.Da = function () {
                              try {
                                b.F && (clearTimeout(b.F), (b.F = 0));
                              } catch (a) {}
                            };
                            b.onload = b.va = function () {
                              a.ab(c);
                              b.Da();
                              a.rb();
                              a.ga();
                              a.q = 0;
                              a.ka();
                              if (b.Ba) {
                                b.Ba = !1;
                                try {
                                  a.doPostbacks(a.X(b.responseText));
                                } catch (d) {}
                              }
                            };
                            b.onabort = b.onerror = b.Ga = function () {
                              b.Da();
                              (a.trackOffline || a.qa) && a.q && a.i.unshift(a.qb);
                              a.q = 0;
                              a.ma > a.N && a.Pa(a.i);
                              a.ga();
                              a.ua(500);
                            };
                            b.onreadystatechange = function () {
                              4 == b.readyState && (200 == b.status ? b.va() : b.Ga());
                            };
                            a.Oa = a.C();
                            if (1 == d || 2 == d) {
                              var e = c.indexOf('?');
                              f = c.substring(0, e);
                              e = c.substring(e + 1);
                              e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, '');
                              1 == d
                                ? (b.open('POST', f, !0), b.send(e))
                                : 2 == d && (b.open('POST', f), b.send(e));
                            } else if (((b.src = c), 3 == d)) {
                              if (a.Ma)
                                try {
                                  f.removeChild(a.Ma);
                                } catch (g) {}
                              f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                              a.Ma = a.B;
                            }
                            b.F = setTimeout(function () {
                              b.F &&
                                (b.complete
                                  ? b.va()
                                  : (a.trackOffline && b.abort && b.abort(), b.Ga()));
                            }, 5000);
                            a.qb = c;
                            a.B = h['s_i_' + a.replace(a.account, ',', '_')] = b;
                            if ((a.useForcedLinkTracking && a.J) || a.A)
                              a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
                                (a.ha = setTimeout(a.ga, a.forcedLinkTrackingTimeout));
                          };
                          a.rb = function () {
                            if (a.ra() && !(a.Na > a.N))
                              try {
                                h.localStorage.removeItem(a.pa()), (a.Na = a.C());
                              } catch (c) {}
                          };
                          a.Pa = function (c) {
                            if (a.ra()) {
                              a.Ra();
                              try {
                                h.localStorage.setItem(a.pa(), h.JSON.stringify(c)), (a.N = a.C());
                              } catch (b) {}
                            }
                          };
                          a.Ra = function () {
                            if (a.trackOffline) {
                              if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
                              for (; a.i.length > a.offlineLimit; ) a.Fa();
                            }
                          };
                          a.forceOffline = function () {
                            a.qa = !0;
                          };
                          a.forceOnline = function () {
                            a.qa = !1;
                          };
                          a.pa = function () {
                            return a.offlineFilename + '-' + a.visitorNamespace + a.account;
                          };
                          a.C = function () {
                            return new Date().getTime();
                          };
                          a.Ka = function (a) {
                            a = a.toLowerCase();
                            return 0 != a.indexOf('#') &&
                              0 != a.indexOf('about:') &&
                              0 != a.indexOf('opera:') &&
                              0 != a.indexOf('javascript:')
                              ? !0
                              : !1;
                          };
                          a.setTagContainer = function (c) {
                            var b, d, f;
                            a.Jb = c;
                            for (b = 0; b < a._il.length; b++)
                              if ((d = a._il[b]) && 's_l' == d._c && d.tagContainerName == c) {
                                a.R(d);
                                if (d.lmq)
                                  for (b = 0; b < d.lmq.length; b++)
                                    (f = d.lmq[b]), a.loadModule(f.n);
                                if (d.ml)
                                  for (f in d.ml)
                                    if (a[f])
                                      for (b in ((c = a[f]), (f = d.ml[f]), f))
                                        !Object.prototype[b] &&
                                          ('function' != typeof f[b] ||
                                            0 > ('' + f[b]).indexOf('s_c_il')) &&
                                          (c[b] = f[b]);
                                if (d.mmq)
                                  for (b = 0; b < d.mmq.length; b++)
                                    (f = d.mmq[b]),
                                      a[f.m] &&
                                        ((c = a[f.m]),
                                        c[f.f] &&
                                          'function' == typeof c[f.f] &&
                                          (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                                if (d.tq) for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                                d.s = a;
                                break;
                              }
                          };
                          a.Util = {
                            urlEncode: a.escape,
                            urlDecode: a.unescape,
                            cookieRead: a.cookieRead,
                            cookieWrite: a.cookieWrite,
                            getQueryParam: function (c, b, d) {
                              var f;
                              b || (b = a.pageURL ? a.pageURL : h.location);
                              d || (d = '&');
                              return c &&
                                b &&
                                ((b = '' + b),
                                (f = b.indexOf('?')),
                                0 <= f &&
                                  ((b = d + b.substring(f + 1) + d),
                                  (f = b.indexOf(d + c + '=')),
                                  0 <= f &&
                                    ((b = b.substring(f + d.length + c.length + 1)),
                                    (f = b.indexOf(d)),
                                    0 <= f && (b = b.substring(0, f)),
                                    0 < b.length)))
                                ? a.unescape(b)
                                : '';
                            },
                          };
                          a.G = 'supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData'.split(
                            ' '
                          );
                          a.g = a.G.concat(
                            'purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt'.split(
                              ' '
                            )
                          );
                          a.na = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(
                            ' '
                          );
                          a.O = a.na.slice(0);
                          a.Aa = 'account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement'.split(
                            ' '
                          );
                          for (l = 0; 250 >= l; l++)
                            76 > l && (a.g.push('prop' + l), a.O.push('prop' + l)),
                              a.g.push('eVar' + l),
                              a.O.push('eVar' + l),
                              6 > l && a.g.push('hier' + l),
                              4 > l && a.g.push('list' + l);
                          l = 'pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest'.split(
                            ' '
                          );
                          a.g = a.g.concat(l);
                          a.G = a.G.concat(l);
                          a.ssl = 0 <= h.location.protocol.toLowerCase().indexOf('https');
                          a.charSet = 'UTF-8';
                          a.contextData = {};
                          a.offlineThrottleDelay = 0;
                          a.offlineFilename = 'AppMeasurement.offline';
                          a.Oa = 0;
                          a.ma = 0;
                          a.N = 0;
                          a.Na = 0;
                          a.linkDownloadFileTypes =
                            'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
                          a.w = h;
                          a.d = h.document;
                          try {
                            if (((a.Sa = !1), navigator)) {
                              var v = navigator.userAgent;
                              if (
                                'Microsoft Internet Explorer' == navigator.appName ||
                                0 <= v.indexOf('MSIE ') ||
                                (0 <= v.indexOf('Trident/') && 0 <= v.indexOf('Windows NT 6'))
                              )
                                a.Sa = !0;
                            }
                          } catch (w) {}
                          a.ga = function () {
                            a.ha && (h.clearTimeout(a.ha), (a.ha = n));
                            a.l && a.J && a.l.dispatchEvent(a.J);
                            a.A &&
                              ('function' == typeof a.A
                                ? a.A()
                                : a.l && a.l.href && (a.d.location = a.l.href));
                            a.l = a.J = a.A = 0;
                          };
                          a.Qa = function () {
                            a.b = a.d.body;
                            a.b
                              ? ((a.v = function (c) {
                                  var b, d, f, e, g;
                                  if (
                                    !(
                                      (a.d && a.d.getElementById('cppXYctnr')) ||
                                      (c && c['s_fe_' + a._in])
                                    )
                                  ) {
                                    if (a.Ca)
                                      if (a.useForcedLinkTracking)
                                        a.b.removeEventListener('click', a.v, !1);
                                      else {
                                        a.b.removeEventListener('click', a.v, !0);
                                        a.Ca = a.useForcedLinkTracking = 0;
                                        return;
                                      }
                                    else a.useForcedLinkTracking = 0;
                                    a.clickObject = c.srcElement ? c.srcElement : c.target;
                                    try {
                                      if (
                                        !a.clickObject ||
                                        (a.M && a.M == a.clickObject) ||
                                        !(
                                          a.clickObject.tagName ||
                                          a.clickObject.parentElement ||
                                          a.clickObject.parentNode
                                        )
                                      )
                                        a.clickObject = 0;
                                      else {
                                        var k = (a.M = a.clickObject);
                                        a.la && (clearTimeout(a.la), (a.la = 0));
                                        a.la = setTimeout(function () {
                                          a.M == k && (a.M = 0);
                                        }, 10000);
                                        f = a.Ia();
                                        a.track();
                                        if (f < a.Ia() && a.useForcedLinkTracking && c.target) {
                                          for (
                                            e = c.target;
                                            e &&
                                            e != a.b &&
                                            'A' != e.tagName.toUpperCase() &&
                                            'AREA' != e.tagName.toUpperCase();

                                          )
                                            e = e.parentNode;
                                          if (
                                            e &&
                                            ((g = e.href),
                                            a.Ka(g) || (g = 0),
                                            (d = e.target),
                                            c.target.dispatchEvent &&
                                              g &&
                                              (!d ||
                                                '_self' == d ||
                                                '_top' == d ||
                                                '_parent' == d ||
                                                (h.name && d == h.name)))
                                          ) {
                                            try {
                                              b = a.d.createEvent('MouseEvents');
                                            } catch (l) {
                                              b = new h.MouseEvent();
                                            }
                                            if (b) {
                                              try {
                                                b.initMouseEvent(
                                                  'click',
                                                  c.bubbles,
                                                  c.cancelable,
                                                  c.view,
                                                  c.detail,
                                                  c.screenX,
                                                  c.screenY,
                                                  c.clientX,
                                                  c.clientY,
                                                  c.ctrlKey,
                                                  c.altKey,
                                                  c.shiftKey,
                                                  c.metaKey,
                                                  c.button,
                                                  c.relatedTarget
                                                );
                                              } catch (n) {
                                                b = 0;
                                              }
                                              b &&
                                                ((b['s_fe_' + a._in] = b.s_fe = 1),
                                                c.stopPropagation(),
                                                c.stopImmediatePropagation &&
                                                  c.stopImmediatePropagation(),
                                                c.preventDefault(),
                                                (a.l = c.target),
                                                (a.J = b));
                                            }
                                          }
                                        }
                                      }
                                    } catch (p) {
                                      a.clickObject = 0;
                                    }
                                  }
                                }),
                                a.b && a.b.attachEvent
                                  ? a.b.attachEvent('onclick', a.v)
                                  : a.b &&
                                    a.b.addEventListener &&
                                    (navigator &&
                                      ((0 <= navigator.userAgent.indexOf('WebKit') &&
                                        a.d.createEvent) ||
                                        (0 <= navigator.userAgent.indexOf('Firefox/2') &&
                                          h.MouseEvent)) &&
                                      ((a.Ca = 1),
                                      (a.useForcedLinkTracking = 1),
                                      a.b.addEventListener('click', a.v, !0)),
                                    a.b.addEventListener('click', a.v, !1)))
                              : setTimeout(a.Qa, 30);
                          };
                          a.Qa();
                          a.loadModule('ActivityMap');
                        }
                        function s_gi (a) {
                          var h,
                            n = window.s_c_il,
                            p,
                            l,
                            r = a.split(','),
                            s,
                            q,
                            u = 0;
                          if (n)
                            for (p = 0; !u && p < n.length; ) {
                              h = n[p];
                              if ('s_c' == h._c && (h.account || h.oun))
                                if (h.account && h.account == a) u = 1;
                                else
                                  for (
                                    l = h.account ? h.account : h.oun,
                                      l = h.allAccounts ? h.allAccounts : l.split(','),
                                      s = 0;
                                    s < r.length;
                                    s++
                                  )
                                    for (q = 0; q < l.length; q++) r[s] == l[q] && (u = 1);
                              p++;
                            }
                          u || (h = new AppMeasurement());
                          h.setAccount ? h.setAccount(a) : h.sa && h.sa(a);
                          return h;
                        }
                        AppMeasurement.getInstance = s_gi;
                        window.s_objectID || (window.s_objectID = 0);
                        function s_pgicq () {
                          var a = window,
                            h = a.s_giq,
                            n,
                            p,
                            l;
                          if (h)
                            for (n = 0; n < h.length; n++)
                              (p = h[n]),
                                (l = s_gi(p.oun)),
                                l.setAccount(p.un),
                                l.setTagContainer(p.tagContainerName);
                          a.s_giq = 0;
                        }
                        s_pgicq();
                      },
                    ]);
                    Bootstrapper.AF.push(['call', 'SiteCatalyst', 'block', 's']);
                    Bootstrapper.AF.push(['push', 'SiteCatalyst', 'ns', 's']);
                  },
                ]);
                Bootstrapper.AF.push(['call', 'SiteCatalyst', 'block', 's']);
                Bootstrapper.AF.push(['push', 'SiteCatalyst', 'ns', 's']);
                Bootstrapper.AF.push([
                  'set',
                  'SiteCatalyst',
                  'clearData',
                  function () {
                    if (this.ns)
                      for (var i = 0; i < this.ns.length; i++) {
                        var sObj = this.ns[i];
                        Bootstrapper.AF.push([
                          'set',
                          sObj,
                          'clearData',
                          function () {
                            this.pre = [];
                          },
                        ]);
                      }
                  },
                ]);
                Bootstrapper.AF.push(['call', 'SiteCatalyst', 'clearData']);
                Bootstrapper.AF.push([
                  'set',
                  'SiteCatalyst',
                  'clearVars',
                  function () {
                    if (this.ns)
                      for (var i = 0; i < this.ns.length; i++) {
                        var sObj = this.ns[i];
                        Bootstrapper.AF.push([
                          'set',
                          sObj,
                          'clearVars',
                          function () {
                            this.pre = this.pre || [];
                            for (var i = 0; i < this.pre.length; i++) {
                              var adobeVar = this.pre[i][0];
                              if (
                                /^(channel|events|eventList|products|productList|purchaseID|transactionID|state|zip|campaign)$/.test(
                                  adobeVar
                                ) ||
                                /^(prop|eVar|hier|list)$/.test(adobeVar.substring(0, 4))
                              ) {
                                this.pre.splice(this.pre.indexOf(i, 1));
                                i--;
                              }
                            }
                          },
                        ]);
                      }
                  },
                ]);
                Bootstrapper.AF.push(['call', 'SiteCatalyst', 'clearVars']);
              },
              3375966,
              359214
            );
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var ddConditions = {
          not: ['not', null, 'not'],
          caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
          compareTo: ['citigroup', '...', 'false'],
          requiredData: ['17008', '17006', '47535'],
          comparators: ['matches', 'matches', 'is'],
        };
        Bootstrapper.data.resolve(ddConditions.requiredData, function () {
          ddConditions.values = Array.prototype.slice.call(arguments, 0);
          var Bootstrapper = window['Bootstrapper'];
          if (Bootstrapper.data.checkConditions(ddConditions))
            Bootstrapper.bindDependencyDOMLoaded(
              function () {
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                try {
                  var country = '';
                  $('#countryDropdown').on('change', function () {
                    country = $('#countryDropdown').children('option:selected').text();
                    country = 'country selector-' + country;
                  });
                  $('#submitCountryName').on('click', function () {
                    var s = window.s;
                    s.linkTrackVars = 'events,eVar38,eVar20';
                    s.linkTrackEvents = 'event19';
                    s.events = 'event19';
                    s.eVar38 = s.pageName;
                    s.eVar20 = country;
                    s.tl(this, 'o', country);
                  });
                } catch (err) {}
              },
              2028951,
              [3399157],
              488122,
              [359218]
            );
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var ddConditions = {
          not: ['not', null, 'not'],
          caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
          compareTo: ['citigroup', '...', 'false'],
          requiredData: ['17008', '17006', '47535'],
          comparators: ['matches', 'matches', 'is'],
        };
        Bootstrapper.data.resolve(ddConditions.requiredData, function () {
          ddConditions.values = Array.prototype.slice.call(arguments, 0);
          var Bootstrapper = window['Bootstrapper'];
          if (Bootstrapper.data.checkConditions(ddConditions))
            Bootstrapper.bindDependencyDOMLoaded(
              function () {
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                function OmniturePageViewHasFired () {
                  var i = document.images;
                  for (var c = 0, l = i.length; c < l; c++)
                    if (
                      (i[c].src.indexOf('/b/ss/citina') >= 0 ||
                        i[c].src.indexOf('/b/ss/citic') >= 0) &&
                      !i[c].src.match(/[&?]pe=/)
                    )
                      return true;
                  for (var o in window)
                    if (
                      o.substring(0, 4) == 's_i_' &&
                      window[o].src &&
                      (window[o].src.indexOf('/b/ss/citina') >= 0 ||
                        window[o].src.indexOf('/b/ss/citic') >= 0) &&
                      !window[o].src.match(/[&?]pe=/)
                    )
                      return true;
                  return false;
                }
                window.citiData = window.citiData || {};
                window.citiData.SCInfo = window.citiData.SCInfo || {};
                window.citiData.pageDef = citiData.pageDef || citiData.SCInfo.pageDef || '';
                window.citiData.pageName = citiData.pageName || citiData.SCInfo.pageName || '';
                if (
                  citiData.pageDef.indexOf('jUSCBOL_Loginpage') > -1 ||
                  citiData.pageName.indexOf('ookied Username') > -1
                ) {
                  window.citiData.defaultPageView = false;
                  window.citiData.pageViewType = 'on bullseye';
                }
                if (
                  citiData.pageDef.indexOf('jJRSMARKETING_CitiHome') > -1 &&
                  citiData.pageName.indexOf(
                    'Compare Credit Card Offers & Apply Online - Citi Credit Cards'
                  ) > -1
                ) {
                  window.citiData.defaultPageView = false;
                  window.citiData.pageViewType = 'on bullseye';
                }
                if (typeof window.citiData.defaultPageView !== undefined)
                  window.citiData.defaultPageView = window.citiData.defaultPageView;
                else window.citiData.defaultPageView = true;
                if (
                  OmniturePageViewHasFired() === false &&
                  window.citiData.defaultPageView !== false
                )
                  setTimeout(function () {
                    Bootstrapper.AF.push(['call', 's', 'exec']);
                  }, 500);
                if (
                  OmniturePageViewHasFired() === false &&
                  window.citiData.pageViewType == 'on bullseye'
                ) {
                  citiData.pageViewChecker = true;
                  setInterval(function () {
                    if (
                      (citiData.cmsFailureMessage ||
                        citiData.cmsSuccessResponse ||
                        citiData.BannerOSFailure ||
                        citiData.SCInfo.BannerOSFailure ||
                        citiData.SCInfo.BannerOSSuccess) &&
                      citiData.pageViewChecker
                    ) {
                      Bootstrapper.AF.push(['call', 's', 'exec']);
                      citiData.pageViewChecker = false;
                    }
                  }, 350);
                }
              },
              3154250,
              [3375966, 3399157, 2514756],
              369351,
              [359214, 359218, 385436]
            );
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['naAnalyticsPageView'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          Bootstrapper.bindImmediate(
            function () {
              var ddConditions = {
                not: ['not', null, 'not'],
                caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
                compareTo: ['citigroup', '...', 'false'],
                requiredData: ['17008', '17006', '47535'],
                comparators: ['matches', 'matches', 'is'],
              };
              Bootstrapper.data.resolve(ddConditions.requiredData, function () {
                ddConditions.values = Array.prototype.slice.call(arguments, 0);
                var Bootstrapper = window['Bootstrapper'];
                if (Bootstrapper.data.checkConditions(ddConditions)) {
                  var Bootstrapper = window['Bootstrapper'];
                  var ensightenOptions = Bootstrapper.ensightenOptions;
                  if (
                    citiData.pageName.indexOf('nga cbol bank') > -1 &&
                    citiData.pageName.indexOf('application') > -1
                  )
                    Bootstrapper.ensEvent.trigger('ngaCbolBankAppPageView');
                  var hostname1 = document.location.hostname;
                  var pathname1 = document.location.pathname;
                  pagename2 = citiData.pageName;
                  var eventlist = citiData.eventList;
                  pathname1 = pathname1.toLowerCase();
                  if (
                    (hostname1 == 'online.citi.com' ||
                      hostname1 == 'uat1.online.citi.com' ||
                      hostname1 == 'uat2.online.citi.com' ||
                      hostname1 == 'uat3.online.citi.com') &&
                    (pathname1.indexOf('/open-cs-acct./funding/select-acct') != -1 ||
                      pathname1.indexOf('us/ag/funding/funded-approved') != -1 ||
                      pathname1.indexOf('us/ag/open-cs-acct/appl-declined') != -1 ||
                      pathname1.indexOf('us/ag/open-cs-acct/funding/pending') != -1 ||
                      pathname1.indexOf('us/ag/open-cs-acct/index') != -1 ||
                      pathname1.indexOf('us/ag/open-cs-acct/funding/funded-approved') != -1 ||
                      pathname1.indexOf('us/ag/family/member') != -1 ||
                      (pathname1.indexOf('us/ag/funding/pending') != -1 &&
                        (pagename2 == 'nga cbol bank primary application - fund complete pended' ||
                          pagename2 == 'nga cbol bank joint application - fund complete pended')))
                  )
                    Bootstrapper.ensEvent.trigger('naBankAppPageViewPreLogin');
                  var pname1 = citiData.pageName;
                  var bprod = citiData.bankProdSourceCode;
                  if (
                    pname1 == 'nxt - personal info a1' &&
                    eventlist.indexOf('bankAppStart') != -1 &&
                    (bprod.indexOf('citi_accelerate_savings | access_account') != -1 ||
                      bprod.indexOf('citi_accelerate_savings|access_account') != -1)
                  ) {
                    Bootstrapper.ensEvent.trigger('CitiAccelerateSavings_AccessAccount_AppStart');
                    console.log('first App start trigger');
                  } else if (
                    pname1 == 'nxt - transfer funds' &&
                    (bprod.indexOf('citi_accelerate_savings | access_account') != -1 ||
                      bprod.indexOf('citi_accelerate_savings|access_account') != -1)
                  )
                    Bootstrapper.ensEvent.trigger('CitiAccelerateSavings_AccessAccount_Approval');
                  else if (
                    pname1 == 'nxt - pended single' &&
                    (bprod.indexOf('citi_accelerate_savings | access_account') != -1 ||
                      bprod.indexOf('citi_accelerate_savings|access_account') != -1)
                  )
                    Bootstrapper.ensEvent.trigger(
                      'CitiAccelerateSavings_AccessAccount_PendingSingle'
                    );
                  else if (
                    pname1 == 'nxt - pended joint' &&
                    (bprod.indexOf('citi_accelerate_savings | access_account') != -1 ||
                      bprod.indexOf('citi_accelerate_savings|access_account') != -1)
                  )
                    Bootstrapper.ensEvent.trigger(
                      'CitiAccelerateSavings_AccessAccount_PendingJoint'
                    );
                  else if (
                    pname1 == 'nxt - declined overlay single' &&
                    (bprod.indexOf('citi_accelerate_savings | access_account') != -1 ||
                      bprod.indexOf('citi_accelerate_savings|access_account') != -1)
                  )
                    Bootstrapper.ensEvent.trigger(
                      'CitiAccelerateSavings_AccessAccount_DeclinedSingle'
                    );
                  else if (
                    pname1 == 'nxt - declined overlay joint' &&
                    (bprod.indexOf('citi_accelerate_savings | access_account') != -1 ||
                      bprod.indexOf('citi_accelerate_savings|access_account') != -1)
                  )
                    Bootstrapper.ensEvent.trigger(
                      'CitiAccelerateSavings_AccessAccount_DeclinedJoint'
                    );
                  else if (
                    pname1 == 'nxt - congratulations' &&
                    citiData.fundingAmount &&
                    (bprod.indexOf('citi_accelerate_savings | access_account') != -1 ||
                      bprod.indexOf('citi_accelerate_savings|access_account') != -1)
                  )
                    Bootstrapper.ensEvent.trigger(
                      'CitiAccelerateSavings_AccessAccount_FundingConfirmation'
                    );
                  var furl = document.location.href;
                  var cpname = citiData.pageName;
                  if (
                    furl.indexOf('online.citi.com/US/ag/open-cs-acct/index?formCode=deposit-ao') !=
                      -1 &&
                    (cpname.indexOf('nxt - id verification') != -1 ||
                      cpname.indexOf('nxt - income and employment') != -1 ||
                      cpname.indexOf('nxt - agreements and disclosures') != -1 ||
                      cpname.indexOf('nxt - transfer funds') != -1 ||
                      cpname.indexOf('nxt - declined overlay') != -1 ||
                      cpname.indexOf('nxt - personal info') != -1 ||
                      cpname.indexOf('nxt - skip funding overlay') != -1 ||
                      cpname.indexOf('nxt - review funds transfer') != -1 ||
                      cpname.indexOf('nxt - congratulations') != -1 ||
                      cpname.indexOf('nxt - time out warning') != -1 ||
                      cpname.indexOf('nxt - add bank account overlay') != -1 ||
                      cpname.indexOf('nxt - address change overlay') != -1 ||
                      cpname.indexOf('nxt - pended') != -1 ||
                      cpname.indexOf('nxt - no offer available') != -1 ||
                      cpname.indexOf('nxt - add debit card overlay') != -1 ||
                      cpname.indexOf('nxt - add bank account error overlay') != -1 ||
                      cpname.indexOf('nxt - error overlay') != -1 ||
                      cpname.indexOf('nxt - continue as single applicant overlay') != -1 ||
                      cpname.indexOf('nxt - elevate overlay') != -1 ||
                      cpname.indexOf('nxt - cancel overlay') != -1 ||
                      cpname.indexOf('nxt - funding error overlay') != -1 ||
                      cpname.indexOf('nxt - application pended') != -1 ||
                      cpname.indexOf(
                        'nxt - documents uploaded incomplete: are you sure to exit'
                      ) != -1 ||
                      cpname.indexOf('nxt - documents uploaded complete: finish and exit') != -1)
                  )
                    Bootstrapper.ensEvent.trigger('pebblepost_event');
                  if (
                    furl.indexOf('mortgage.citi.com/cmi/mortgage/home-loan/default.htm') != -1 &&
                    cpname.indexOf('ps mortgage purchase lead_FTHB_confirmation') != -1
                  )
                    Bootstrapper.ensEvent.trigger('lead_FTHB_confirmation');
                  if (
                    furl.indexOf('mortgage.citi.com/cmi/mortgage/home-loan/default.htm') != -1 &&
                    cpname.indexOf('ps mortgage purchase lead_confirmation') != -1
                  )
                    Bootstrapper.ensEvent.trigger('ps_mortgage_purchase_lead_confirmation');
                  if (
                    furl.indexOf(
                      'mortgage.citi.com/cmi/mortgage/mortgage-refinancing/default.htm'
                    ) != -1 &&
                    cpname.indexOf('ps mortgage refinance lead_confirmation') != -1
                  )
                    Bootstrapper.ensEvent.trigger('ps_mortgage_refinance_lead_confirmation');
                  if (
                    furl.indexOf('mortgage.citi.com/cmi/mortgage/home-loan/default.htm') != -1 &&
                    cpname.indexOf('display mortgage purchase lead_FTHB_confirmation') != -1
                  )
                    Bootstrapper.ensEvent.trigger(
                      'display_mortgage_purchase_lead_FTHB_confirmation'
                    );
                  if (
                    furl.indexOf('mortgage.citi.com/cmi/mortgage/home-loan/default.htm') != -1 &&
                    cpname.indexOf('display mortgage purchase lead_confirmation') != -1
                  )
                    Bootstrapper.ensEvent.trigger('display_mortgage_purchase_lead_confirmation');
                  if (
                    furl.indexOf(
                      'mortgage.citi.com/cmi/mortgage/mortgage-refinancing/default.htm'
                    ) != -1 &&
                    cpname.indexOf('display mortgage refinance lead_confirmation') != -1
                  )
                    Bootstrapper.ensEvent.trigger('display_mortgage_refinance_lead_confirmation');
                }
              });
            },
            -1,
            -1
          );
        });
      },
      3363924,
      609397
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['naAnalyticsPageView'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          Bootstrapper.bindImmediate(
            function () {
              var ddConditions = {
                not: ['not', null, 'not'],
                caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
                compareTo: ['citigroup', '...', 'false'],
                requiredData: ['17008', '17006', '47535'],
                comparators: ['matches', 'matches', 'is'],
              };
              Bootstrapper.data.resolve(ddConditions.requiredData, function () {
                ddConditions.values = Array.prototype.slice.call(arguments, 0);
                var Bootstrapper = window['Bootstrapper'];
                if (Bootstrapper.data.checkConditions(ddConditions)) {
                  var Bootstrapper = window['Bootstrapper'];
                  var ensightenOptions = Bootstrapper.ensightenOptions;
                  Bootstrapper.ensEvent.trigger('naAnalyticsFloodLightPageView');
                }
              });
            },
            -1,
            -1
          );
        });
      },
      2897286,
      600937
    );
    Bootstrapper.bindImmediate(
      function () {
        var ddConditions = {
          not: ['not', null, 'not'],
          caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
          compareTo: ['citigroup', '...', 'false'],
          requiredData: ['17008', '17006', '47535'],
          comparators: ['matches', 'matches', 'is'],
        };
        Bootstrapper.data.resolve(ddConditions.requiredData, function () {
          ddConditions.values = Array.prototype.slice.call(arguments, 0);
          var Bootstrapper = window['Bootstrapper'];
          if (Bootstrapper.data.checkConditions(ddConditions))
            Bootstrapper.bindImmediate(
              function () {
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                $('[aria-label="App Store"]').on('click', function () {
                  s.linkTrackVars = 'events,eVar20';
                  s.linkTrackEvents = 'event19';
                  s.eVar20 = 'App Store';
                  s.events = 'event19';
                  s.tl('this', 'o', 'App Store clicked');
                });
                $('[aria-label="Google Play"]').on('click', function () {
                  s.linkTrackVars = 'events,eVar20';
                  s.linkTrackEvents = 'event19';
                  s.eVar20 = 'Google Play';
                  s.events = 'event19';
                  s.tl('this', 'o', 'Google Play clicked');
                });
              },
              2670634,
              572752
            );
        });
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var ddConditions = {
          not: ['not', null, 'not'],
          caseInsensitive: ['ignore case', 'ignore case', 'ignore case'],
          compareTo: ['citigroup', '...', 'false'],
          requiredData: ['17008', '17006', '47535'],
          comparators: ['matches', 'matches', 'is'],
        };
        Bootstrapper.data.resolve(ddConditions.requiredData, function () {
          ddConditions.values = Array.prototype.slice.call(arguments, 0);
          var Bootstrapper = window['Bootstrapper'];
          if (Bootstrapper.data.checkConditions(ddConditions))
            Bootstrapper.bindDOMLoaded(
              function () {
                var Bootstrapper = window['Bootstrapper'];
                var ensightenOptions = Bootstrapper.ensightenOptions;
                $('#redemption-option-icon-a-1').on('click', function () {
                  s.linkTrackVars = 'events,eVar20';
                  s.linkTrackEvents = 'event19';
                  s.eVar20 = 'travel rewards';
                  s.events = 'event19';
                  s.tl('this', 'o', 'travel rewards clicked');
                });
                $('#redemption-option-icon-a-2').on('click', function () {
                  s.linkTrackVars = 'events,eVar20';
                  s.linkTrackEvents = 'event19';
                  s.eVar20 = 'thankyou select and credit';
                  s.events = 'event19';
                  s.tl('this', 'o', 'thankyou select and credit clicked');
                });
                $('#redemption-option-icon-a-3').on('click', function () {
                  s.linkTrackVars = 'events,eVar20';
                  s.linkTrackEvents = 'event19';
                  s.eVar20 = 'redeem for gift cards';
                  s.events = 'event19';
                  s.tl('this', 'o', 'redeem for gift cards clicked');
                });
                $('#category-tab-item-0').on('click', function () {
                  s.linkTrackVars = 'events,eVar20';
                  s.linkTrackEvents = 'event19';
                  s.eVar20 = 'all categories rewards';
                  s.events = 'event19';
                  s.tl('this', 'o', 'all categories rewards clicked');
                });
                $('#category-tab-item-1').on('click', function () {
                  s.linkTrackVars = 'events,eVar20';
                  s.linkTrackEvents = 'event19';
                  s.eVar20 = '3X rewards';
                  s.events = 'event19';
                  s.tl('this', 'o', '3x rewards clicked');
                });
                $('#category-tab-item-2').on('click', function () {
                  s.linkTrackVars = 'events,eVar20';
                  s.linkTrackEvents = 'event19';
                  s.eVar20 = '2x rewards';
                  s.events = 'event19';
                  s.tl('this', 'o', '2x rewards clicked');
                });
                $('#category-tab-item-3').on('click', function () {
                  s.linkTrackVars = 'events,eVar20';
                  s.linkTrackEvents = 'event19';
                  s.eVar20 = '1x rewards';
                  s.events = 'event19';
                  s.tl('this', 'o', '1x rewards clicked');
                });
              },
              2680754,
              572750
            );
        });
      },
      -1,
      -1
    );
  })();
}
