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
    Bootstrapper.bindDependencyDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        try {
          (function () {
            var qboCookieName = 'qbn.qbo_sc';
            var qboCookieTimerName = 'qbn.qbo_sctimer';
            var qbseCookieName = 'qbse.cid';
            var qbseCookieTimerName = 'qbse.cid_timer';
            var qboCookie = getCookie(qboCookieName);
            var qboCookieTimer = getCookie(qboCookieTimerName);
            var qbseCookie = getCookie(qbseCookieName);
            var hasCID =
              (location.search + location.hash).toLowerCase().indexOf('cid=') > -1 ? true : false;
            var hasXCID =
              (location.search + location.hash).toLowerCase().indexOf('xcid=') > -1 ? true : false;
            var expire, newCookieVal;
            if (qboCookie !== null) {
              expire = getExpireDays(false, qboCookieTimerName);
              var xcidStr = '';
              if (qbseCookie && qbseCookie.toLowerCase().indexOf('xcid:') > -1)
                xcidStr = qbseCookie.substring(qbseCookie.toLowerCase().lastIndexOf('xcid:'));
              if (qboCookie.toLowerCase().indexOf('xcid:') > -1)
                setCookie(
                  qbseCookieName,
                  qboCookie.substr(0, qboCookie.toLowerCase().indexOf('xcid:')) + xcidStr,
                  expire
                );
              else setCookie(qbseCookieName, qboCookie + xcidStr, expire);
              setCookie(qbseCookieTimerName, Math.floor(qboCookieTimer / 1000), expire);
            }
            if (qboCookie === null)
              if (hasCID || hasXCID) {
                newCookieVal = genrateQBSECookie();
                expire = getExpireDays(true);
                setCookie(qboCookieName, newCookieVal, expire, true);
                var expireDate = new Date();
                expireDate.setTime(expireDate.getTime() + 90 * 86400000);
                var newExpireTP = Math.floor(expireDate);
                setCookie(qboCookieTimerName, newExpireTP, expire);
              }
            qbseCookie = getCookie(qbseCookieName);
            if (qbseCookie.length > 254 || qbseCookie.match(/sc:/g).length > 1) {
              expire = getExpireDays(false, qbseCookieTimerName);
              setCookie(qbseCookieName, cleanQBSEcookie(), expire);
            }
            function cleanQBSEcookie () {
              var oldValue = getCookie(qbseCookieName);
              var obj = {};
              var i, ary, ary2;
              if (oldValue !== null) {
                ary = oldValue.split('|');
                for (i = 0; i < ary.length; i++) {
                  ary2 = ary[i].split(':');
                  if (ary2.length == 2) obj[ary2[0]] = ary2[1];
                }
              }
              var st =
                'cid:' +
                (obj.cid ? obj.cid : '') +
                '|sc:' +
                (obj.sc ? obj.sc : '') +
                '|ext:' +
                (obj.ext ? obj.ext : '') +
                '|int:' +
                (obj.int ? obj.int : '') +
                '|xcid:' +
                (obj.xcid ? obj.xcid : '') +
                '|';
              return st.substr(0, 254);
            }
            function genrateQBSECookie () {
              var nintyDayCookieName = 'qbse.cid';
              var nintyDayCookieTimestampName = 'qbse.cid_timer';
              var externalUrlMappings = {
                GOOGLE: [
                  'google.com.au',
                  'google.com.br',
                  'google.ca',
                  'www.google.fr',
                  'google.co.in',
                  'google.co.uk',
                ],
                USGOOGLE: ['google.com'],
                AOL: [
                  'aol.com',
                  'aol.com.au',
                  'aol.com.br',
                  'aol.ca',
                  'www.aol.fr',
                  'aol.in',
                  'aol.co.uk',
                ],
                BING: ['bing.com'],
                YAHOO: [
                  'yahoo.com',
                  'au.yahoo.com',
                  'br.yahoo.com',
                  'ca.yahoo.com',
                  'fr.yahoo.com',
                  'in.yahoo.com',
                  'uk.yahoo.com',
                ],
                LYCOS: [
                  'lycos.com',
                  'lycos.com.au',
                  'lycos.ca',
                  'lycos.in',
                  'lycos.co.uk',
                  'lycos.fr',
                ],
                ASK: ['ask.com'],
                FACEBOOK: ['facebook.com'],
                KATOO: ['uk.kartoo.com'],
                ZEN: ['wrx.zen.co.uk'],
                YAHOOSEARCH: ['r.search.yahoo.com'],
              };
              var internalUrlMappings = {
                INTUIT: [
                  'www.intuit.com',
                  'www.intuit.com.au',
                  'www.quickbooksonline.com.br',
                  'www.intuit.ca',
                  'www.quickbooks.fr',
                  'www.intuit.in',
                  'www.intuit.co.uk',
                ],
                MV_INTUIT: ['intuit.mv.intuit.com'],
                QB_INTUIT: [
                  'www.quickbooks.com.au',
                  'quickbooks.intuit.ca',
                  'www.quickbooks.in',
                  'plus.quickbooks.co.uk',
                ],
                NEW_INTUIT: [
                  'quickbooks.intuit.com.au',
                  'quickbooks.com.br',
                  'quickbooks.intuit.fr',
                  'quickbooks.intuit.in',
                  'quickbooks.intuit.co.uk',
                ],
                ENT_INTUIT: ['enterprise.intuit.ca'],
                GP_INTUIT: ['gopayment.intuit.ca'],
                MS_INTUIT: ['merchantservices.intuit.ca'],
                QB_INTUIT1: ['quickbooksenligne.intuit.ca'],
                PROADV_INTUIT: ['proadvisor.intuit.ca'],
                PROADV_INTUIT1: ['conseillerspro.intuit.ca'],
                PROADV_INTUIT2: ['comptable.intuit.ca'],
                PROFILE_INTUIT: ['profile.intuit.ca'],
                PROFILE_INTUIT1: ['profilefrancais.intuit.ca'],
                ACCT_INTUIT: ['accountant.intuit.ca'],
                TT_INTUIT: ['turbotax.intuit.ca'],
                TT_INTUIT1: ['impotrapide.intuit.ca'],
                COMM_INTUIT: ['community.turbotaxonline.ca'],
                CTSDEV: ['ctsdev'],
              };
              var mobileUrls = {
                'm.intuit.com': 'MOBILEINTUIT',
                'qbinproduct.intuit.com/mobile': 'MOBILE',
              };
              var code_mapping = {
                GOOGLE: 'SEO-GOO_',
                USGOOGLE: 'SEO-GOO_',
                AOL: 'SEO-AOL_',
                BING: 'SEO-MSN_',
                YAHOO: 'SEO-YAH_',
                LYCOS: 'SEO-LYC_',
                ASK: 'SEO-ASK_',
                MOBILEINTUITANDROID: 'MOB-WEB-AND',
                MOBILEINTUITOTHER: 'MOB-WEB',
                MOBILEANDROID: 'MOB-IPD-AND',
                MOBILEOTHER: 'MOB-IPD',
                INTUIT: 'INT',
                ENT_INTUIT: 'INT',
                GP_INTUIT: 'INT',
                MS_INTUIT: 'INT',
                PROADV_INTUIT: 'INT',
                PROADV_INTUIT1: 'INT',
                PROADV_INTUIT2: 'INT',
                PROFILE_INTUIT: 'INT',
                PROFILE_INTUIT1: 'INT',
                ACCT_INTUIT: 'INT',
                TT_INTUIT: 'INT',
                TT_INTUIT1: 'INT',
                COMM_INTUIT: 'INT',
                QB_INTUIT: 'INT',
                QB_INTUIT1: 'INT',
                FACEBOOK: 'SOC-FACEBOOK',
                YAHOOSEARCH: 'SEO-YAH_',
                CTSDEV: 'SEO-GOO_',
              };
              var deviceTypes = {
                android: 'ANDROID',
                iphone: 'IPHONE',
                defaultDevice: 'UNKWN-DEVICE',
              };
              var device = setDevice(navigator.userAgent || '');
              var cid = getQueryStrParam('cid');
              var sc = getQueryStrParam('sc');
              var xcid = getQueryStrParam('xcid');
              var referrer = document.referrer;
              var int, ext;
              var newCookieValue, newExpireDay, newExpireTimestamp;
              var noExistingCookie = getCookie(nintyDayCookieName) === null;
              if (cid !== null && cid.length > 0) {
                newCookieValue = updateCookieValue('cid', cid);
                if (noExistingCookie && sc !== null && sc.length > 0)
                  newCookieValue = updateCookieValue('sc', sc, newCookieValue);
                newExpireDay = getExpireDays(true);
                newExpireTimestamp = getExpireTimestamp(true);
              } else if (sc !== null && sc.length > 0) {
                newCookieValue = updateCookieValue('sc', sc);
                newExpireDay = getExpireDays(false);
                newExpireTimestamp = getExpireTimestamp(false);
              } else if (referrer !== null && referrer.length > 0) {
                ext = getUrlMapping(referrer, externalUrlMappings);
                if (ext === null) {
                  var j;
                  for (j in mobileUrls)
                    if (referrer.toLowerCase().indexOf(j) != -1) {
                      if (device == deviceTypes.android)
                        ext = sc = code_mapping[mobileUrls[j] + 'ANDROID'];
                      else returnVal = code_mapping[mobileUrls[j] + 'OTHER'];
                      return returnVal;
                    }
                  var parser = document.createElement('a');
                  parser.href = referrer;
                  if (
                    parser.hostname.indexOf('.intuit.') < 0 &&
                    parser.hostname.indexOf('.quickbooks.') < 0
                  ) {
                    ext = 'OTH-' + parser.hostname;
                    newCookieValue = updateCookieValue('ext', ext);
                  } else {
                    int = getUrlMapping(referrer, internalUrlMappings);
                    if (int === null)
                      if (
                        parser.hostname.indexOf('.intuit.com') > -1 &&
                        parser.hostname.indexOf('quickbooksonline.intuit.com') < 0
                      ) {
                        int = parser.hostname;
                        newCookieValue = updateCookieValue('int', int);
                      } else {
                        if (
                          noExistingCookie &&
                          (parser.hostname.indexOf('.intuit.') > -1 ||
                            parser.hostname.indexOf('.quickbooks.') > -1)
                        ) {
                          int = parser.hostname;
                          newCookieValue = updateCookieValue('int', int);
                        }
                      }
                    else newCookieValue = updateCookieValue('int', int);
                  }
                } else newCookieValue = updateCookieValue('ext', ext);
                newExpireDay = getExpireDays(false);
                newExpireTimestamp = getExpireTimestamp(false);
              } else {
                var pathName = window.location.pathname || '';
                if (pathName !== null && /\/mobile\/new_login\.jsp/.test(pathName)) {
                  if (device == deviceTypes.android) sc = code_mapping.MOBILEINTUITANDROID;
                  else sc = code_mapping.MOBILEINTUITOTHER;
                  newCookieValue = updateCookieValue('sc', sc);
                } else {
                  newCookieValue = updateCookieValue('int', location.host);
                  if (noExistingCookie)
                    newCookieValue = updateCookieValue('ext', 'QOE-COM', newCookieValue);
                }
                newExpireDay = getExpireDays(false);
                newExpireTimestamp = getExpireTimestamp(false);
              }
              if (xcid !== null && xcid.length > 0)
                newCookieValue = updateCookieValue('xcid', xcid, newCookieValue);
              if (newCookieValue) {
                setCookie(nintyDayCookieName, newCookieValue, newExpireDay);
                setCookie(nintyDayCookieTimestampName, newExpireTimestamp, newExpireDay);
              }
              function formatCookieValue (obj) {
                var st =
                  'cid:' +
                  (obj.cid ? obj.cid : '') +
                  '|sc:' +
                  (obj.sc ? obj.sc : '') +
                  '|ext:' +
                  (obj.ext ? obj.ext : '') +
                  '|int:' +
                  (obj.int ? obj.int : '') +
                  '|xcid:' +
                  (obj.xcid ? obj.xcid : '') +
                  '|';
                return st.substr(0, 254);
              }
              function updateCookieValue (type, value, latestValue) {
                var oldValue = latestValue ? latestValue : getCookie(nintyDayCookieName);
                var obj = {};
                var i, ary, ary2;
                if (oldValue !== null) {
                  ary = oldValue.split('|');
                  for (i = 0; i < ary.length; i++) {
                    ary2 = ary[i].split(':');
                    if (ary2.length == 2) obj[ary2[0]] = ary2[1];
                  }
                }
                obj[type] = value;
                return formatCookieValue(obj);
              }
              function getExpireDays (reset) {
                if (reset) return 90;
                else {
                  var expireDate, expireDays, today;
                  var cookieExpire = getCookie(nintyDayCookieTimestampName);
                  if (cookieExpire !== null && cookieExpire != 'null') {
                    expireDate = new Date(cookieExpire * 1000);
                    today = new Date();
                    var timeDiff = Math.abs(expireDate.getTime() - today.getTime());
                    return Math.ceil(timeDiff / (1000 * 3600 * 24));
                  } else return 90;
                }
              }
              function getExpireTimestamp (reset) {
                var tp = getCookie(nintyDayCookieTimestampName);
                if (reset || tp === null || tp == 'null') {
                  expireDate = new Date();
                  return expireDate.setTime(expireDate.getTime() + 90 * 86400000);
                } else if (tp.length == 10) return tp * 1000;
                else return tp;
              }
              function getUrlMapping (referrer, mappings) {
                var key1 = null;
                for (var key in mappings) {
                  var ary = mappings[key];
                  for (var i = 0; i < ary.length; i++)
                    if (referrer.indexOf(ary[i]) > -1) {
                      key1 = key;
                      break;
                    }
                }
                if (key1)
                  if (code_mapping.hasOwnProperty(key1)) return code_mapping[key1];
                  else return key1;
                return null;
              }
              function setDevice (userAgent) {
                var device = deviceTypes.defaultDevice;
                if (userAgent === null || userAgent.length === 0)
                  device = deviceTypes.defaultDevice;
                else if (/android/i.test(userAgent)) device = deviceTypes.android;
                else if (/iphone/i.test(userAgent)) device = deviceTypes.iphone;
                return device;
              }
              return newCookieValue;
            }
            function canHandleSameSiteAttribute (userAgent) {
              var regexes = [
                /\(iP.+; CPU .*OS 12[_\d]*.*\) AppleWebKit\//,
                /^.*Macintosh;.*Mac OS X 10_14.*Version.*Safari.*$/,
                /(Chromium|Chrome)\/(5[1-9]|6[0-6])\.(\d+)(?:\.(\d+)|)(?:\.(\d+)|)/,
                /UCBrowser\/[0-9][0-1]?.(\d+)\.(\d+)[\.\d]*!/,
                /UCBrowser\/12.[0-9][0-2]?.(\d+)[\.\d]*!/,
                /UCBrowser\/12.13.[0-2][\.\d]*/,
                /(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:)(\d+)/,
                /\bMSIE\s+7\.0;.*\bTrident\/(\d+)\.0/,
              ];
              for (var index = 0; index < regexes.length; index++) {
                var regex = regexes[index];
                if (userAgent.match(regex) !== null) return false;
              }
              return true;
            }
            function setCookie (c_name, c_value, expire, disableEncode) {
              const $___old_91b2e49efa6f74e6 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              );
              try {
                if ($___old_91b2e49efa6f74e6)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_fd468a9a287c63aa.userAgent
                  ));
                return function () {
                  if (!disableEncode) c_value = encodeURIComponent(c_value);
                  var d = new Date();
                  d.setTime(d.getTime() + expire * 24 * 60 * 60 * 1000);
                  var expires = 'expires=' + d.toUTCString();
                  var root_domain = getRootDomain();
                  var sameSiteNone = canHandleSameSiteAttribute(navigator.userAgent)
                    ? 'sameSite=None; secure'
                    : '';
                  document.cookie =
                    c_name +
                    '=' +
                    c_value +
                    '; ' +
                    expires +
                    '; path=/; domain=' +
                    root_domain +
                    ';' +
                    sameSiteNone;
                }.apply(this, arguments);
              } finally {
                if ($___old_91b2e49efa6f74e6)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_91b2e49efa6f74e6
                  ));
              }
            }
            function getCookie (c_name) {
              try {
                var i,
                  x,
                  y,
                  ARRcookies = document.cookie.split(';');
                for (i = 0, len = ARRcookies.length; i < len; i++) {
                  x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
                  y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
                  x = x.replace(/^\s+|\s+$/g, '');
                  if (x == c_name)
                    if (y === null) return null;
                    else return unescape(y);
                }
                return null;
              } catch (err) {
                return null;
              }
            }
            function getQueryStrParam (key) {
              try {
                key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, '\\$&');
                var allQueries = location.hash + location.search;
                var match = allQueries.match(
                  new RegExp('[?&]' + key.toLowerCase() + '=([^&]+)(&|$)', 'i')
                );
                if (match && match[1] !== null)
                  return decodeURIComponent(match[1].replace(/\+/gi, ' '));
                return null;
              } catch (err) {
                return null;
              }
            }
            function getRootDomain () {
              var i = 0,
                domain = document.domain,
                p = domain.split('.'),
                s = '_gd' + new Date().getTime();
              while (i < p.length - 1 && document.cookie.indexOf(s + '=' + s) == -1) {
                domain = p.slice(-1 - ++i).join('.');
                document.cookie = s + '=' + s + ';domain=' + domain + ';';
              }
              document.cookie =
                s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + domain + ';';
              return domain;
            }
            function getExpireDays (reset, cookieName) {
              if (reset) return 90;
              else {
                if (cookieName === null) cookieName = nintyDayCookieTimestampName;
                var expireDate, expireDays, today;
                var cookieExpire = getCookie(cookieName);
                if (cookieExpire !== null && cookieExpire != 'null') {
                  if (cookieExpire.length == 10)
                    expireDate = new Date(parseInt(cookieExpire * 1000, 10));
                  else expireDate = new Date(parseInt(cookieExpire, 10));
                  today = new Date();
                  var timeDiff = Math.abs(expireDate.getTime() - today.getTime());
                  return Math.floor(timeDiff / (3600 * 24 * 1000));
                } else return 90;
              }
            }
          })();
        } catch (err) {}
      },
      3163629,
      [3163533],
      365893,
      [430636]
    );
  })();
}
