{
  const $___stub_ab116a01f765cef1 = {};
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
  })($___stub_ab116a01f765cef1);
  (function () {
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var random_number = Math.floor(100000000 + Math.random() * 900000000);
        var img = document.createElement('img');
        img.src =
          'https://20822230p.rfihub.com/ca.html?rb=648&ca=20822230&ra=' +
          random_number +
          '&_o=17169175&_t=zx-cookie-match';
        $('head').append(img);
        var img = document.createElement('img');
        img.src =
          'https://20822800p.rfihub.com/ca.html?rb=648&ca=20822800&ra=' +
          random_number +
          '&_o=17169175&_t=zx-liveramp-cookie-match';
        $('head').append(img);
      },
      3399208,
      633148
    );
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var url1 = document.location.pathname;
        if (url1.indexOf('/credit-cards/home') == -1) {
          var citiData = window.citiData || {};
          var s = window.s || {};
          var _dl = window._dl || {};
          var trackRFactivity = function () {
            var scpagename = citiData.pageName || s.pageName || '';
            var cuuid = citiData.cuuid || s.eVar62 || '';
            var channel = citiData.channel || '';
            var sitesection2 = citiData.siteSection2 || '';
            var url = window.top.location.href;
            var rando = Math.floor(Math.random() * 2000);
            var cavalue = '20766699';
            var bankAppStatus = citiData.bankAppStatus || '';
            scpagename = scpagename.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
            channel = channel.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
            sitesection2 = sitesection2.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
            if (
              scpagename.indexOf('ngacbolbank') > -1 &&
              scpagename.indexOf('applicationreceived') > -1
            )
              scpagename += '_' + bankAppStatus;
            var urlParams = new URLSearchParams(window.location.search);
            var plist = urlParams.get('product_list');
            var package1 = urlParams.get('package');
            (function () {
              var w = window,
                d = document;
              var s = d.createElement('script');
              s.setAttribute('async', 'true');
              s.setAttribute('type', 'text/javascript');
              s.setAttribute('src', '//c1.rfihub.net/js/tc.min.js');
              var f = d.getElementsByTagName('script')[0];
              f.parentNode.insertBefore(s, f);
              if (typeof w['_rfi'] !== 'function')
                w['_rfi'] = function () {
                  w['_rfi'].commands = w['_rfi'].commands || [];
                  w['_rfi'].commands.push(arguments);
                };
              _rfi('setArgs', 'ver', '9');
              _rfi('setArgs', 'ra', rando);
              _rfi('setArgs', 'rb', '648');
              _rfi('setArgs', 'ca', cavalue);
              _rfi('setArgs', '_o', '17169175');
              _rfi('setArgs', '_t', scpagename);
              _rfi('setArgs', 'ssv_cuuid', cuuid);
              _rfi('setArgs', 'ssv_package', package1);
              _rfi('setArgs', 'ssv_prodlist', plist);
              _rfi('setArgs', 'ssv_pagename', scpagename);
              _rfi('track');
            })();
          };
          var ispageangular = false;
          if (citiData.pageDef) if (citiData.pageDef.indexOf('angular') > -1) ispageangular = true;
          if (citiData.pageName == 'Homepage' || _dl.spa_page == 'true' || _dl.spa_page == true)
            ispageangular = true;
          if (ispageangular)
            Bootstrapper.ensEvent.add('naAnalyticsPageView', function () {
              trackRFactivity();
            });
          else trackRFactivity();
        }
      },
      3305888,
      494437
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        window.citiData = window.citiData || {};
        var string1 = window.citiData.lob || '';
        var colonLoc = string1.indexOf(':') || '';
        if (colonLoc > -1) {
          var string2 = string1.substr(0, colonLoc);
          window.citiData.lob = string2;
        } else window.citiData.lob = string1;
        if (window.s) window.s.eVar30 = citiData.lob;
      },
      2366488,
      507276
    );
    Bootstrapper.bindDependencyDOMParsed(
      function () {
        Bootstrapper.ensEvent.add(['naAnalyticsPageView'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
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
        });
      },
      3399126,
      [3039001],
      531459,
      [578278]
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['naAnalyticsPageView'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
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
            Bootstrapper.ensEvent.trigger('CitiAccelerateSavings_AccessAccount_PendingSingle');
          else if (
            pname1 == 'nxt - pended joint' &&
            (bprod.indexOf('citi_accelerate_savings | access_account') != -1 ||
              bprod.indexOf('citi_accelerate_savings|access_account') != -1)
          )
            Bootstrapper.ensEvent.trigger('CitiAccelerateSavings_AccessAccount_PendingJoint');
          else if (
            pname1 == 'nxt - declined overlay single' &&
            (bprod.indexOf('citi_accelerate_savings | access_account') != -1 ||
              bprod.indexOf('citi_accelerate_savings|access_account') != -1)
          )
            Bootstrapper.ensEvent.trigger('CitiAccelerateSavings_AccessAccount_DeclinedSingle');
          else if (
            pname1 == 'nxt - declined overlay joint' &&
            (bprod.indexOf('citi_accelerate_savings | access_account') != -1 ||
              bprod.indexOf('citi_accelerate_savings|access_account') != -1)
          )
            Bootstrapper.ensEvent.trigger('CitiAccelerateSavings_AccessAccount_DeclinedJoint');
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
            furl.indexOf('online.citi.com/US/ag/open-cs-acct/index?formCode=deposit-ao') != -1 &&
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
              cpname.indexOf('nxt - documents uploaded incomplete: are you sure to exit') != -1 ||
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
            furl.indexOf('mortgage.citi.com/cmi/mortgage/mortgage-refinancing/default.htm') !=
              -1 &&
            cpname.indexOf('ps mortgage refinance lead_confirmation') != -1
          )
            Bootstrapper.ensEvent.trigger('ps_mortgage_refinance_lead_confirmation');
          if (
            furl.indexOf('mortgage.citi.com/cmi/mortgage/home-loan/default.htm') != -1 &&
            cpname.indexOf('display mortgage purchase lead_FTHB_confirmation') != -1
          )
            Bootstrapper.ensEvent.trigger('display_mortgage_purchase_lead_FTHB_confirmation');
          if (
            furl.indexOf('mortgage.citi.com/cmi/mortgage/home-loan/default.htm') != -1 &&
            cpname.indexOf('display mortgage purchase lead_confirmation') != -1
          )
            Bootstrapper.ensEvent.trigger('display_mortgage_purchase_lead_confirmation');
          if (
            furl.indexOf('mortgage.citi.com/cmi/mortgage/mortgage-refinancing/default.htm') !=
              -1 &&
            cpname.indexOf('display mortgage refinance lead_confirmation') != -1
          )
            Bootstrapper.ensEvent.trigger('display_mortgage_refinance_lead_confirmation');
        });
      },
      3363924,
      609397
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        Bootstrapper.ensEvent.add(['naAnalyticsPageView'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          Bootstrapper.AF.push(['call', 's', 'exec']);
        });
      },
      2929498,
      [3375966],
      486892,
      [359214]
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['naAnalyticsPageView'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          Bootstrapper.ensEvent.trigger('naAnalyticsFloodLightPageView');
        });
      },
      2897286,
      600937
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['naAnalyticsPageView'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
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
        });
      },
      3183109,
      609396
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        function getCookie (name) {
          const $___old_d2def73d6af558aa = {}.constructor.getOwnPropertyDescriptor(
            Document.prototype,
            'cookie'
          );
          try {
            if ($___old_d2def73d6af558aa)
              ({}.constructor.defineProperty(
                Document.prototype,
                'cookie',
                $___stub_ab116a01f765cef1.cookie
              ));
            return function () {
              var value = '; ' + document.cookie;
              var parts = value.split('; ' + name + '=');
              if (parts.length == 2) return parts.pop().split(';').shift();
            }.apply(this, arguments);
          } finally {
            if ($___old_d2def73d6af558aa)
              ({}.constructor.defineProperty(
                Document.prototype,
                'cookie',
                $___old_d2def73d6af558aa
              ));
          }
        }
        var localCcsId = getCookie('CCSID') || '';
        citiData = window.citiData || [];
        if (localCcsId.length < 2) localCcsId = citiData.ccsid || '';
        var rawCCSID = localCcsId || '';
        function buildTag (hashed_CCSID) {
          var srTag = '//sr.rlcdn.com/425466.html?es=80676&u=' + hashed_CCSID;
          return srTag;
        }
        function callTag (tag) {
          var iframe = document.createElement('iframe');
          iframe.name = '_rlcdn';
          iframe.height = 0;
          iframe.width = 0;
          iframe.frameBorder = 0;
          iframe.src = tag;
          iframe.style.display = 'none';
          iframe.title = '_';
          document.body.appendChild(iframe);
        }
        function SHA1 (msg) {
          function rotate_left (n, s) {
            var t4 = (n << s) | (n >>> (32 - s));
            return t4;
          }
          function lsb_hex (val) {
            var str = '';
            var i;
            var vh;
            var vl;
            for (i = 0; i <= 6; i += 2) {
              vh = (val >>> (i * 4 + 4)) & 15;
              vl = (val >>> (i * 4)) & 15;
              str += vh.toString(16) + vl.toString(16);
            }
            return str;
          }
          function cvt_hex (val) {
            var str = '';
            var i;
            var v;
            for (i = 7; i >= 0; i--) {
              v = (val >>> (i * 4)) & 15;
              str += v.toString(16);
            }
            return str;
          }
          function Utf8Encode (string) {
            string = string.replace(/\r\n/g, '\n');
            var utftext = '';
            for (var n = 0; n < string.length; n++) {
              var c = string.charCodeAt(n);
              if (c < 128) utftext += String.fromCharCode(c);
              else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
              } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
              }
            }
            return utftext;
          }
          var blockstart;
          var i, j;
          var W = new Array(80);
          var H0 = 1732584193;
          var H1 = 4023233417;
          var H2 = 2562383102;
          var H3 = 271733878;
          var H4 = 3285377520;
          var A, B, C, D, E;
          var temp;
          msg = Utf8Encode(msg);
          var msg_len = msg.length;
          var word_array = new Array();
          for (i = 0; i < msg_len - 3; i += 4) {
            j =
              (msg.charCodeAt(i) << 24) |
              (msg.charCodeAt(i + 1) << 16) |
              (msg.charCodeAt(i + 2) << 8) |
              msg.charCodeAt(i + 3);
            word_array.push(j);
          }
          switch (msg_len % 4) {
            case 0:
              i = 2147483648;
              break;
            case 1:
              i = (msg.charCodeAt(msg_len - 1) << 24) | 8388608;
              break;
            case 2:
              i =
                (msg.charCodeAt(msg_len - 2) << 24) | (msg.charCodeAt(msg_len - 1) << 16) | 32768;
              break;
            case 3:
              i =
                (msg.charCodeAt(msg_len - 3) << 24) |
                (msg.charCodeAt(msg_len - 2) << 16) |
                (msg.charCodeAt(msg_len - 1) << 8) |
                128;
              break;
          }
          word_array.push(i);
          while (word_array.length % 16 != 14) word_array.push(0);
          word_array.push(msg_len >>> 29);
          word_array.push((msg_len << 3) & 4294967295);
          for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
            for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
            for (i = 16; i <= 79; i++)
              W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
            A = H0;
            B = H1;
            C = H2;
            D = H3;
            E = H4;
            for (i = 0; i <= 19; i++) {
              temp =
                (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 1518500249) & 4294967295;
              E = D;
              D = C;
              C = rotate_left(B, 30);
              B = A;
              A = temp;
            }
            for (i = 20; i <= 39; i++) {
              temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 1859775393) & 4294967295;
              E = D;
              D = C;
              C = rotate_left(B, 30);
              B = A;
              A = temp;
            }
            for (i = 40; i <= 59; i++) {
              temp =
                (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 2400959708) &
                4294967295;
              E = D;
              D = C;
              C = rotate_left(B, 30);
              B = A;
              A = temp;
            }
            for (i = 60; i <= 79; i++) {
              temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 3395469782) & 4294967295;
              E = D;
              D = C;
              C = rotate_left(B, 30);
              B = A;
              A = temp;
            }
            H0 = (H0 + A) & 4294967295;
            H1 = (H1 + B) & 4294967295;
            H2 = (H2 + C) & 4294967295;
            H3 = (H3 + D) & 4294967295;
            H4 = (H4 + E) & 4294967295;
          }
          var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
          return temp.toLowerCase();
        }
        var normedCCSID = rawCCSID.toLowerCase().replace(/\s/g, '');
        var sha1HashedCCSID = SHA1(normedCCSID);
        var srTag = buildTag(sha1HashedCCSID);
        callTag(srTag);
      },
      1865473,
      388219
    );
  })();
}
