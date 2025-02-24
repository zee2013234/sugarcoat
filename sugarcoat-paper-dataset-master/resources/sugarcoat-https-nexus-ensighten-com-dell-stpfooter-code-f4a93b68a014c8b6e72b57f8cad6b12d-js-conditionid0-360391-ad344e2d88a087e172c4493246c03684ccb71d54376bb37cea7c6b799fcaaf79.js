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
    Bootstrapper.bindDOMParsed(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.bindDOMParsed(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function () {
              var a = document.getElementsByClassName('opinionlabhtml');
              for (var i = 0; i < a.length; i++) {
                a[i].href = '#';
                try {
                  a[i].addEventListener('click', function (e) {
                    var evt = e || window.event;
                    OOo.oo_feedback.show(evt);
                  });
                } catch (ex) {
                  a[i].attachEvent('onclick', function (e) {
                    var evt = e || window.event;
                    OOo.oo_feedback.show(evt);
                  });
                }
                a[i].style.display = 'inline';
              }
            })();
            (function () {
              (function (b, a) {
                if ('disabled' === 'enabled' && typeof define === 'function' && define.amd)
                  define([], a);
                else b.OOo = a();
              })(this, function () {
                const $___old_e4fc1aab047d997b = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_e4fc1aab047d997b)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_47c01efa79e9f191.userAgent
                    ));
                  return function () {
                    window.OOo = {
                      __detectBrowser: function (b) {
                        var a = Object.prototype.toString.call(window.opera) === '[object Opera]',
                          d,
                          c = {
                            IE: !!d,
                            Opera: a,
                            WebKit: b.indexOf('AppleWebKit/') > -1,
                            Chrome: b.indexOf('Chrome') > -1,
                            Gecko: b.indexOf('Gecko') > -1 && b.indexOf('KHTML') === -1,
                            MobileSafari: /Apple.*Mobile.*Safari/.test(b),
                            iOs:
                              b.indexOf('iPad') > -1 ||
                              b.indexOf('iPhone') > -1 ||
                              b.indexOf('iPod') > -1,
                            iOS67: b.search(/OS 6(.*)|7(.*) like Mac OS/i) > -1,
                            BlackBerry: b.indexOf('BlackBerry') > -1,
                            Fennec: b.indexOf('Fennec') > -1,
                            IEMobile: b.indexOf('IEMobile') > -1,
                            WindowsPhone: b.toLowerCase().indexOf('windows phone') > -1,
                            WindowsTablet:
                              b.toLowerCase().indexOf('windows nt') > -1 &&
                              b.toLowerCase().indexOf('touch') > -1,
                            OperaMobile: b.search(/Opera (?:Mobi|Mini)/) > -1,
                            Kindle: b.search(/[ ](Kindle|Silk)/) > -1,
                            isChromeIOS: /crios/i.test(b),
                            ua: b,
                            Android: /Android/.test(b),
                          },
                          e = false;
                        c.isMobile =
                          c.MobileSafari ||
                          c.BlackBerry ||
                          c.Fennec ||
                          c.IEMobile ||
                          c.OperaMobile ||
                          c.Kindle ||
                          c.iOs ||
                          c.Android ||
                          c.WindowsPhone ||
                          c.WindowsTablet;
                        c.isMobileNonIOS = c.isMobile && !c.iOs;
                        return c;
                      },
                    };
                    OOo.Browser = OOo.__detectBrowser(navigator.userAgent);
                    OOo.Cache = {};
                    OOo.instanceCount = 0;
                    OOo.K = function () {};
                    var E = E || OOo;
                    (function () {
                      function v (b) {
                        return document.getElementById(b);
                      }
                      function z (b, a) {
                        var d;
                        for (d in a) if (a.hasOwnProperty(d)) b[d] = a[d];
                        return b;
                      }
                      function w (b, a, d, c) {
                        if (b.addEventListener) b.addEventListener(a, d, c);
                        else if (b.attachEvent) b.attachEvent('on' + a, d);
                      }
                      function u (b, a, d, c) {
                        if (b.removeEventListener) b.removeEventListener(a, d, c);
                        else if (b.detachEvent) b.detachEvent('on' + a, d);
                      }
                      function C (b) {
                        var a = [],
                          d;
                        for (d in b)
                          if (b.hasOwnProperty(d))
                            a.push(d + '=' + (encodeURIComponent(b[d]) || ''));
                        return a.join('&');
                      }
                      function x (b) {
                        var a = C(b.metrics),
                          d =
                            b.tealeafId +
                            '|' +
                            b.clickTalePID +
                            '/' +
                            b.clickTaleUID +
                            '/' +
                            b.clickTaleSID;
                        a += '&custom_var=' + OOo.createLegacyVars(b.legacyVariables, d);
                        if (b.metrics.type === 'OnPage') a += '|iframe';
                        if (b.asm) a += '&asm=2';
                        a += '&_' + 'rev=2';
                        if (b.customVariables)
                          a +=
                            '&customVars=' + encodeURIComponent(OOo.serialize(b.customVariables));
                        return a;
                      }
                      function D (b, a) {
                        var d = document,
                          c = d.createElement('form'),
                          e = d.createElement('input'),
                          f = b.referrerRewrite;
                        b.metrics.referer = location.href;
                        if (f) b.metrics.referer = OOo.referrerRewrite(f);
                        c.style.display = 'none';
                        c.method = 'post';
                        c.target = a || 'OnlineOpinion';
                        c.action = b.onPageCard
                          ? 'https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp?r=' +
                            location.href
                          : 'https://secure.opinionlab.com/ccc01/comment_card_d.asp';
                        if (b.commentCardUrl) {
                          c.action = b.commentCardUrl;
                          if (b.onPageCard) c.action += '?r=' + location.href;
                        }
                        e.name = 'params';
                        e.value = x(b);
                        c.appendChild(e);
                        d.body.appendChild(c);
                        return c;
                      }
                      function A () {
                        return {
                          width: screen.width,
                          height: screen.height,
                          referer: location.href,
                          prev: document.referrer,
                          time1: new Date().getTime(),
                          time2: null,
                          currentURL: location.href,
                          ocodeVersion: '5.9.3',
                        };
                      }
                      function B (b) {
                        var a = '';
                        if (b && b.search('://') > -1) {
                          var d = b.split('/');
                          for (var c = 3; c < d.length; c++) {
                            a += '/';
                            a += d[c];
                          }
                        }
                        return a;
                      }
                      function y (b, a) {
                        b = b || {};
                        if (typeof b === 'string') return a + '|' + b;
                        return b.override ? b.vars : a + (b.vars ? '|' + b.vars : '');
                      }
                      function F (b, a) {
                        if (!a) a = location;
                        if (typeof b === 'string') return b;
                        return b.searchPattern
                          ? a.href.replace(b.searchPattern, b.replacePattern)
                          : b.replacePattern;
                      }
                      function N (b) {
                        var a,
                          d = false,
                          c = document.getElementsByTagName('meta');
                        if (c !== 'undefined')
                          for (a = 0; a < c.length; a += 1)
                            if (c[a].getAttribute('name') === b) d = true;
                        return d;
                      }
                      var G = (function () {
                        if (
                          navigator.appName === 'Microsoft Internet Explorer' &&
                          navigator.userAgent.search('MSIE 6') !== -1
                        )
                          return true;
                        var b = document.body,
                          a,
                          d;
                        if (document.createElement && b && b.appendChild && b.removeChild) {
                          a = document.createElement('iframe');
                          d = false;
                          a.setAttribute('name', 'oo_test');
                          a.style.display = 'none';
                          b.appendChild(a);
                          d = !!!document.getElementsByName('oo_test')[0];
                          b.removeChild(a);
                          return d;
                        } else return null;
                      })();
                      function H (b, a) {
                        var d = b || window.event;
                        if (d.preventDefault && d.stopPropagation) {
                          d.preventDefault();
                          d.stopPropagation();
                        } else d.returnValue = false;
                        var c = OOo.$('oo_waypoint_container'),
                          e = c.parentNode;
                        e.removeChild(c);
                        if (a) a.focus();
                      }
                      function I () {
                        var b = this.options;
                        var a =
                          "<div id='oo_waypoint_prompt' role='dialogue' aria-describedby='oo_waypoint_message'><div id='oo_company_logo'></div><div id='oo_waypoint_content'><p id='oo_waypoint_message'>Select a category</p><p id='waypoint_icons'></p><p id='ol_brand_logo'><a href='http://www.opinionlab.com/company/' target='_0' aria-label='Powered by OpinionLab. This will open a new window'></a></p></div><a id='oo_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialogue</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_waypoint_prompt #oo_waypoint_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->";
                        if (typeof b.wpmarkup !== 'undefined') a = b.wpmarkup;
                        var d = OOo.$('oo_waypoint_prompt');
                        if (d) {
                          var c = OOo.$('oo_waypoint_container');
                          this.showWaypoint(c);
                          return;
                        }
                        this.showWaypoint(a);
                      }
                      function J (c) {
                        var e = document,
                          f = 0,
                          g = typeof c === 'string' ? e.createElement('div') : c,
                          h = e.createElement('div'),
                          l,
                          m,
                          j,
                          i,
                          k = this.options,
                          o = k.categories,
                          p,
                          q,
                          r = e.activeElement;
                        h.id = 'oo_waypoint_overlay';
                        g.id = 'oo_waypoint_container';
                        g.style.visibility = 'hidden';
                        if (typeof c === 'string') {
                          g.innerHTML = c;
                          e.body.appendChild(g);
                        }
                        g.appendChild(h);
                        if (k.companyLogo && k.companySlogan) {
                          l = new Image();
                          l.src = k.companyLogo;
                          l.alt = k.companySlogan;
                          OOo.$('oo_company_logo').appendChild(l);
                          OOo.$('oo_waypoint_prompt').setAttribute('aria-label', k.companySlogan);
                        }
                        j = new Image();
                        j.src = k.pathToAssets + 'oo_opinionlab_logo.png';
                        j.alt = 'powered by OpinionLab';
                        OOo.$('ol_brand_logo').children[0].appendChild(j);
                        p = OOo.$('oo_close_prompt');
                        for (var s in o)
                          if (o.hasOwnProperty(s)) {
                            var n = document.createElement('a'),
                              t = k.categories[s].icon;
                            n.className = 'waypoint_icon';
                            n.href = '#';
                            n.innerHTML =
                              String(s).replace(/_/g, ' ') +
                              '<span class="screen_reader">This will open a new window</span>';
                            if (t && e.addEventListener) {
                              n.style.backgroundImage = 'url(' + k.pathToAssets + t + ')';
                              n.style.backgroundRepeat = 'no-repeat';
                              n.style.backgroundPosition = 'left center';
                              n.style.backgroundSize = '70px 50px';
                              n.style.textAlign = 'left';
                              n.style.paddingLeft = '90px';
                            }
                            if (typeof k.categories[s].oCode === 'string') {
                              OOo.addEventListener(
                                n,
                                'click',
                                (function (d) {
                                  return function (b) {
                                    var a = b || window.event;
                                    window.open(
                                      k.categories[d].oCode,
                                      '_0',
                                      'scrollbars=yes,location=yes,menubar=yes,resizable=yes'
                                    );
                                    OOo.hideWaypoint(a, r);
                                  };
                                })(s),
                                false
                              );
                              n.onkeyup = (function (d) {
                                return function (b) {
                                  var a = b || window.event;
                                  if (a.keyCode !== 13) return;
                                  window.open(
                                    k.categories[d].oCode,
                                    '_0',
                                    'scrollbars=yes,location=yes,menubar=yes,resizable=yes'
                                  );
                                  OOo.hideWaypoint(a, r);
                                };
                              })(s);
                            } else {
                              OOo.addEventListener(
                                n,
                                'click',
                                (function (d) {
                                  return function (b) {
                                    var a = b || window.event;
                                    OOo.Waypoint[d].show(a);
                                    OOo.hideWaypoint(a, r);
                                  };
                                })(s),
                                false
                              );
                              n.onkeyup = (function (d) {
                                return function (b) {
                                  var a = b || window.event;
                                  if (a.keyCode !== 13) return;
                                  OOo.Waypoint[d].show(a);
                                  OOo.hideWaypoint(a, r);
                                };
                              })(s);
                            }
                            f++;
                            OOo.$('waypoint_icons').appendChild(n);
                          }
                        OOo.addEventListener(
                          p,
                          'click',
                          function (b) {
                            var a = b || window.event;
                            OOo.hideWaypoint(a, r);
                          },
                          false
                        );
                        i = OOo.$('waypoint_icons').children;
                        q = i[0];
                        q.onkeydown = function (b) {
                          var a = b || window.event;
                          if (a.keyCode === 9)
                            if (a.shiftKey) {
                              p.focus();
                              return false;
                            }
                        };
                        p.onkeyup = function (b) {
                          var a = b || window.event;
                          if (a.keyCode !== 13) return;
                          OOo.hideWaypoint(a, r);
                        };
                        p.onkeydown = function (b) {
                          var a = b || window.event;
                          if (a.keyCode === 9)
                            if (!a.shiftKey) {
                              q.focus();
                              return false;
                            }
                        };
                        i[f - 1].className = 'waypoint_icon last';
                        g.style.visibility = 'visible';
                        g.style.display = 'block';
                        h.className = 'no_loading';
                        q.focus();
                      }
                      function K (b, a) {
                        var d = b || window.event;
                        if (d.preventDefault && d.stopPropagation) {
                          d.preventDefault();
                          d.stopPropagation();
                        } else d.returnValue = false;
                        OOo.$('oo_container').style.display = 'none';
                        if (a) a.focus();
                      }
                      function L () {
                        var b =
                          "<div id='oo_invitation_prompt' role='dialog' aria-describedby='oo_invite_message'><div id='oo_company_logo'></div><div id='oo_invite_content'><p id='oo_invite_message'>After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p><p class='prompt_button'><a href='#' id='oo_launch_prompt'>Yes<span class='screen_reader'>This will open a new window</span></a></p><p class='prompt_button'><a href='#' id='oo_no_thanks'>No Thanks</a></p><p id='ol_brand_logo'><a href='http://www.opinionlab.com/company/'; target='_0' aria-label='Powered by OpinionLab. This will open a new window'></a></p></div><a id='oo_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialog</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_invitation_prompt #oo_invite_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->";
                        var a = this.options;
                        if (typeof a.inviteMarkup !== 'undefined') b = a.inviteMarkup;
                        var d = OOo.$('oo_invitation_prompt');
                        if (d) {
                          var c = OOo.$('oo_container');
                          this.showPrompt(c);
                          return;
                        }
                        this.showPrompt(b);
                      }
                      function M (d, c) {
                        var e = document,
                          f = typeof d === 'string' ? e.createElement('div') : d,
                          g = e.createElement('div'),
                          h,
                          l,
                          m,
                          j,
                          i = this.options,
                          k,
                          o,
                          p,
                          q,
                          r = e.activeElement;
                        g.id = 'oo_invitation_overlay';
                        f.id = 'oo_container';
                        f.style.visibility = 'hidden';
                        if (typeof d === 'string') {
                          f.innerHTML = d;
                          e.body.appendChild(f);
                        }
                        f.appendChild(g);
                        k = OOo.$('oo_launch_prompt');
                        o = OOo.$('oo_no_thanks');
                        p = OOo.$('oo_close_prompt');
                        q = OOo.$('oo_company_logo');
                        if (i.companyLogo && i.companySlogan) {
                          h = new Image();
                          h.src = i.companyLogo;
                          h.alt = i.companySlogan;
                          q.appendChild(h);
                          OOo.$('oo_invitation_prompt').setAttribute(
                            'aria-label',
                            i.companySlogan
                          );
                        }
                        m = new Image();
                        m.src = i.pathToAssets + 'oo_opinionlab_logo.png';
                        m.alt = 'powered by OpinionLab';
                        OOo.$('ol_brand_logo').children[0].appendChild(m);
                        if (i.callBacks) {
                          if (typeof i.callBacks.prompt === 'function') i.callBacks.prompt();
                          if (typeof i.callBacks.yesClick === 'function')
                            OOo.addEventListener(
                              k,
                              'click',
                              function () {
                                i.callBacks.yesClick();
                              },
                              false
                            );
                          if (typeof i.callBacks.noClick === 'function')
                            OOo.addEventListener(
                              o,
                              'click',
                              function () {
                                i.callBacks.noClick();
                              },
                              false
                            );
                          if (typeof i.callBacks.closeClick === 'function')
                            OOo.addEventListener(
                              p,
                              'click',
                              function () {
                                i.callBacks.closeClick();
                              },
                              false
                            );
                        }
                        OOo.addEventListener(k, 'click', c.bind(this), false);
                        OOo.addEventListener(
                          o,
                          'click',
                          function (b) {
                            var a = b || window.event;
                            OOo.hidePrompt(a, r);
                          },
                          false
                        );
                        OOo.addEventListener(
                          p,
                          'click',
                          function (b) {
                            var a = b || window.event;
                            OOo.hidePrompt(a, r);
                          },
                          false
                        );
                        k.onkeyup = function (b) {
                          var a = b || window.event;
                          if (a.keyCode !== 13) return;
                          c.bind(this);
                        }.bind(this);
                        k.onkeydown = function (b) {
                          var a = b || window.event;
                          if (a.keyCode === 9)
                            if (a.shiftKey) {
                              p.focus();
                              return false;
                            }
                        };
                        o.onkeyup = function (b) {
                          var a = b || window.event;
                          if (a.keyCode !== 13) return;
                          OOo.hidePrompt(a, r);
                        };
                        p.onkeyup = function (b) {
                          var a = b || window.event;
                          if (a.keyCode !== 13) return;
                          OOo.hidePrompt(a, r);
                        };
                        p.onkeydown = function (b) {
                          var a = b || window.event;
                          if (a.keyCode === 9)
                            if (!a.shiftKey) {
                              k.focus();
                              return false;
                            }
                        };
                        f.style.visibility = 'visible';
                        f.style.display = 'block';
                        g.className = 'no_loading';
                        r.blur();
                        k.focus();
                      }
                      z(OOo, {
                        extend: z,
                        toQueryString: C,
                        addEventListener: w,
                        $: v,
                        appendOOForm: D,
                        removeEventListener: u,
                        createMetrics: A,
                        truncateMetric: B,
                        createLegacyVars: y,
                        DYNAMIC_FRAME_NAME_IS_BUGGY: G,
                        getFormParams: x,
                        referrerRewrite: F,
                        hidePrompt: K,
                        getPrompt: L,
                        showPrompt: M,
                        hideWaypoint: H,
                        getWaypoint: I,
                        showWaypoint: J,
                      });
                    })();
                    (function () {
                      function f (b) {
                        if (!b) return null;
                        switch (typeof b) {
                          case 'number':
                          case 'boolean':
                          case 'function':
                            return b;
                          case 'string':
                            return "'" + b + "'";
                          case 'object':
                            var a, d, c, e;
                            if (b.constructor === Array || typeof b.callee !== 'undefined') {
                              a = '[';
                              c = b.length;
                              for (d = 0; d < c - 1; d += 1) a += f(b[d]) + ',';
                              a += f(b[d]) + ']';
                            } else {
                              a = '{';
                              for (e in b) if (b.hasOwnProperty(e)) a += e + ':' + f(b[e]) + ',';
                              a = a.replace(/,$/, '') + '}';
                            }
                            return a;
                          default:
                            return null;
                        }
                      }
                      OOo.extend(OOo, { serialize: f });
                    })();
                    (function () {
                      function e (b, a, d) {
                        var c;
                        if (b.search(a[0]) !== -1) {
                          OOo.createCookie(d, 0);
                          return false;
                        } else if (OOo.readCookie(d)) {
                          c = parseInt(OOo.readCookie(d), 10);
                          if (b.search(a[c + 1]) !== -1 && c + 1 !== a.length - 1) {
                            OOo.createCookie(d, c + 1);
                            return false;
                          } else if (b.search(a[c]) !== -1) return false;
                          else if (c + 1 === a.length - 1 && b.search(a.pop()) !== -1) {
                            OOo.eraseCookie(d);
                            return true;
                          } else {
                            OOo.eraseCookie(d);
                            return false;
                          }
                        } else return false;
                      }
                      OOo.extend(OOo, { checkTunnel: e });
                    })();
                    (function () {
                      function r (b) {
                        var a = '',
                          d;
                        for (d = 7; d >= 0; d -= 1)
                          a += '0123456789abcdef'.charAt((b >> (d * 4)) & 15);
                        return a;
                      }
                      function s (b) {
                        var a = ((b.length + 8) >> 6) + 1,
                          d = new Array(a * 16),
                          c;
                        for (c = 0; c < a * 16; c += 1) d[c] = 0;
                        for (c = 0; c < b.length; c += 1)
                          d[c >> 2] |= b.charCodeAt(c) << (24 - (c % 4) * 8);
                        d[c >> 2] |= 128 << (24 - (c % 4) * 8);
                        d[a * 16 - 1] = b.length * 8;
                        return d;
                      }
                      function n (b, a) {
                        var d = (b & 65535) + (a & 65535),
                          c = (b >> 16) + (a >> 16) + (d >> 16);
                        return (c << 16) | (d & 65535);
                      }
                      function t (b, a) {
                        return (b << a) | (b >>> (32 - a));
                      }
                      function v (b, a, d, c) {
                        if (b < 20) return (a & d) | (~a & c);
                        if (b < 40) return a ^ d ^ c;
                        if (b < 60) return (a & d) | (a & c) | (d & c);
                        return a ^ d ^ c;
                      }
                      function z (b) {
                        return b < 20
                          ? 1518500249
                          : b < 40
                          ? 1859775393
                          : b < 60
                          ? -1894007588
                          : -899497514;
                      }
                      function w (b) {
                        var a = s(b),
                          d = new Array(80),
                          c = 1732584193,
                          e = -271733879,
                          f = -1732584194,
                          g = 271733878,
                          h = -1009589776,
                          l,
                          m,
                          j,
                          i,
                          k,
                          o,
                          p,
                          q;
                        for (p = 0; p < a.length; p += 16) {
                          l = c;
                          m = e;
                          j = f;
                          i = g;
                          k = h;
                          for (q = 0; q < 80; q += 1) {
                            if (q < 16) d[q] = a[p + q];
                            else d[q] = t(d[q - 3] ^ d[q - 8] ^ d[q - 14] ^ d[q - 16], 1);
                            o = n(n(t(c, 5), v(q, e, f, g)), n(n(h, d[q]), z(q)));
                            h = g;
                            g = f;
                            f = t(e, 30);
                            e = c;
                            c = o;
                          }
                          c = n(c, l);
                          e = n(e, m);
                          f = n(f, j);
                          g = n(g, i);
                          h = n(h, k);
                        }
                        return r(c) + r(e) + r(f) + r(g) + r(h);
                      }
                      OOo.extend(OOo, { sha1: w });
                    })();
                    (function () {
                      function h (b, a) {
                        if (!a) a = location;
                        var d = b.cookieName || 'oo_abandon',
                          c = OOo.readCookie(d),
                          e = b.startPage,
                          f = b.endPage,
                          g = b.middle;
                        if (!c) {
                          if (a.pathname.indexOf(e) !== -1) OOo.createCookie(d);
                          return false;
                        } else if (a.pathname.indexOf(f) !== -1) {
                          OOo.eraseCookie(d);
                          return false;
                        } else if (a.pathname.search(g) !== -1) return false;
                        else {
                          OOo.eraseCookie(d);
                          return true;
                        }
                      }
                      OOo.extend(OOo, { checkAbandonment: h });
                    })();
                    (function () {
                      function c (b) {
                        var a, d;
                        for (a = b.length - 1; a >= 0; a -= 1)
                          if (b[a].read) {
                            d = OOo.readCookie(b[a].name);
                            if (!!d && d === b[a].value) return true;
                            else if (
                              typeof b[a].value === 'undefined' &&
                              !!OOo.readCookie(b[a].name)
                            )
                              return true;
                          }
                        return false;
                      }
                      function e (b) {
                        var a;
                        for (a = b.length - 1; a >= 0; a -= 1)
                          if (b[a].set) OOo.createCookie(b[a].name, b[a].value, b[a].expiration);
                      }
                      OOo.extend(OOo, { checkThirdPartyCookies: c, setThirdPartyCookies: e });
                    })();
                    OOo.extend(
                      Function.prototype,
                      (function () {
                        if (typeof Function.prototype.bind !== 'undefined') return;
                        var e = Array.prototype.slice;
                        function f (b, a) {
                          var d = b.length,
                            c = a.length;
                          while (c) {
                            c -= 1;
                            b[d + c] = a[c];
                          }
                          return b;
                        }
                        function g (b, a) {
                          b = e.call(b, 0);
                          return f(b, a);
                        }
                        function h (a) {
                          if (arguments.length < 2 && typeof a === 'undefined') return this;
                          var d = this,
                            c = e.call(arguments, 1);
                          return function () {
                            var b = g(c, arguments);
                            return d.apply(a, b);
                          };
                        }
                        return { bind: h };
                      })()
                    );
                    (function () {
                      function f (b) {
                        if (!b) b = location;
                        var a;
                        if (b.host.search(/\.[a-z]+/) !== -1) {
                          a = b.host.split('.').reverse();
                          if (a.length > 3) return b.host;
                          a = '.' + a[1] + '.' + a[0];
                        } else a = b.host;
                        return a;
                      }
                      function g (b, a, d) {
                        var c = '',
                          e = '';
                        if (d) {
                          c = new Date();
                          c.setTime(c.getTime() + d * 1000);
                          e = '; expires=' + c.toGMTString();
                        }
                        if (location.host !== f())
                          document.cookie = b + '=' + a + e + '; path=/; domain=' + f() + ';';
                        else document.cookie = b + '=' + a + e + '; path=/;';
                      }
                      function h (b) {
                        var a = b + '=',
                          d = document.cookie.split(';'),
                          c,
                          e;
                        for (e = 0; e < d.length; e += 1) {
                          c = d[e];
                          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                          if (c.indexOf(a) === 0) return c.substring(a.length, c.length);
                        }
                        return null;
                      }
                      function l (b) {
                        g(b, '', -1);
                      }
                      OOo.extend(OOo, {
                        getCookieDomain: f,
                        createCookie: g,
                        readCookie: h,
                        eraseCookie: l,
                      });
                    })();
                    OOo.Ocode = function (b) {
                      var a = OOo.Browser,
                        d,
                        c;
                      if (b.disableMobile && a.isMobile) return;
                      if (b.disableNoniOS && a.isMobileNonIOS) return;
                      OOo.instanceCount += 1;
                      this.options = { tealeafCookieName: 'TLTSID' };
                      OOo.extend(this.options, b);
                      d = this.options;
                      d.metrics = OOo.createMetrics();
                      this.frameName = d.onPageCard
                        ? 'OnlineOpinion' + OOo.instanceCount
                        : 'OnlineOpinion';
                      if (d.cookie && OOo.Ocode.matchUrl(d.cookie, location)) return;
                      if (d.thirdPartyCookies && OOo.checkThirdPartyCookies(d.thirdPartyCookies))
                        return;
                      if (d.abandonment && !OOo.checkAbandonment(d.abandonment)) return;
                      if (
                        d.tunnel &&
                        !OOo.checkTunnel(location.pathname, d.tunnel.path, d.tunnel.cookieName)
                      )
                        return;
                      if (d.events && d.events.onSingleClick)
                        this.singProbability = Math.random() < 1 - d.events.onSingleClick / 100;
                      d.tealeafId =
                        OOo.readCookie(d.tealeafCookieName) || OOo.readCookie(d.sessionCookieName);
                      if (d.events) {
                        this.setupEvents();
                        if (d.events.disableLinks || d.events.disableFormElements)
                          this.setupDisableElements();
                      }
                      if (d.floating) this.floating();
                      else if (d.bar) this.bar();
                      else if (d.tab) this.tab();
                    };
                    OOo.Ocode.prototype = {
                      show: function (b, a) {
                        var d = b || window.event;
                        if (a !== 'exit' && a !== 'entry')
                          if (d.preventDefault && d.stopPropagation) {
                            d.preventDefault();
                            d.stopPropagation();
                          } else d.returnValue = false;
                        if (this.onPageCardVisible) return;
                        var c = this.options,
                          e;
                        if (c.events && c.events.prompt) {
                          if (c.cookie) OOo.eraseCookie(c.cookie.name || 'oo_r');
                          OOo.hidePrompt();
                        }
                        if (this.interruptShow) return;
                        if (!this.floatingLogo && c.cookie && OOo.Ocode.matchUrl(c.cookie)) return;
                        if (!c.floating && c.events && this.singProbability) return;
                        if (c.events && c.events.onSingleClick) this.singProbability = true;
                        if (c.cookie) OOo.Ocode.tagUrl(c.cookie);
                        if (c.thirdPartyCookies) {
                          if (OOo.checkThirdPartyCookies(c.thirdPartyCookies)) return;
                          OOo.setThirdPartyCookies(c.thirdPartyCookies);
                        }
                        if (this.floatingLogo) this.floatingLogo.children[0].blur();
                        if (this.floatingLogo && c.disappearOnClick)
                          this.floatingLogo.style.display = 'none';
                        if (c.clickTalePID && typeof window.ClickTale === 'function') {
                          c.clickTaleUID = window.ClickTaleGetUID();
                          c.clickTaleSID = window.ClickTaleGetSID();
                        }
                        if (c.onPageCard && !OOo.Browser.isMobile) this.setupOnPageCC();
                        else this.launchOOPopup();
                        e = c.floating || c.tab || c.bar;
                        if (e && typeof e.onClickCallback === 'function') e.onClickCallback();
                      },
                    };
                    OOo.extend(OOo.Ocode, {
                      tagUrl: function (b, a) {
                        if (!a) a = location;
                        var d = b.name || 'oo_r',
                          c = b.type === 'page' ? a.href : a.hostname,
                          e = OOo.readCookie(d) || '';
                        if (OOo.Ocode.matchUrl(b, a)) return;
                        OOo.createCookie(d, e + OOo.sha1(c), b.expiration);
                      },
                      matchUrl: function (b, a) {
                        if (!a) a = location;
                        var d = OOo.readCookie(b.name || 'oo_r'),
                          c;
                        if (!d) return false;
                        c = b.type === 'page' ? a.href : a.hostname;
                        return d.search(OOo.sha1(c)) !== -1;
                      },
                    });
                    (function () {
                      var l = 0;
                      function m () {
                        var b = this.options,
                          a = b.newWindowSize || [545, 325],
                          d = [
                            parseInt((b.metrics.height - a[1]) / 2, 10),
                            parseInt((b.metrics.width - a[0]) / 2, 10),
                          ],
                          c,
                          e,
                          f =
                            'resizable=yes,location=no,status=no,scrollbars=1,width=' +
                            a[0] +
                            ',height=' +
                            a[1] +
                            ',top=' +
                            d[0] +
                            ',left=' +
                            d[1],
                          g = 'OnlineOpinion';
                        if (b.newWindow) g = g + l++;
                        b.metrics.time2 = new Date().getTime();
                        b.metrics.type = 'Popup';
                        c = OOo.appendOOForm(b, g);
                        var h =
                          'https://secure.opinionlab.com/ccc01/comment_card_d.asp?' +
                          c.children[0].value;
                        if (b.commentCardUrl) h = b.commentCardUrl;
                        if (OOo.Browser.isChromeIOS) g = '_0';
                        if (OOo.Browser.isMobile && OOo.Browser.ua.search('Android') !== -1)
                          c.submit();
                        else {
                          e = window.open(h, g, f);
                          if (e && !OOo.Browser.isChromeIOS) c.submit();
                        }
                      }
                      OOo.extend(OOo.Ocode.prototype, { launchOOPopup: m });
                    })();
                    (function () {
                      function i () {
                        var d = this.options.events,
                          c = [false, false],
                          e = ['onExit', 'onEntry'],
                          f = 'beforeunload',
                          g,
                          h,
                          l,
                          m,
                          j;
                        if (OOo.Browser.Opera) f = 'unload';
                        if (OOo.Browser.iOs) f = 'pagehide';
                        if (d.prompt)
                          OOo.extend(this.options, {
                            promptMarkup: d.prompt.promptMarkup || 'oo_event_prompt.html',
                            neverShowAgainButton: false,
                            pathToAssets: d.prompt.pathToAssets,
                          });
                        for (l = e.length - 1; l >= 0; l -= 1) {
                          g = e[l];
                          if (d[g] instanceof Array) {
                            m = d[g];
                            j = m.length;
                            while (j && !c[l]) {
                              j -= 1;
                              if (
                                window.location.href.search(m[j].url) !== -1 &&
                                Math.random() >= 1 - m[j].p / 100
                              )
                                c[l] = true;
                            }
                          } else if (d[g] && Math.random() >= 1 - d[g] / 100) c[l] = true;
                        }
                        if (c[0])
                          OOo.addEventListener(
                            window,
                            f,
                            function (b) {
                              var a = b || window.event;
                              this.show(a, 'exit');
                            }.bind(this),
                            false
                          );
                        if (c[1])
                          if (d.delayEntry)
                            window.setTimeout(
                              function (b) {
                                var a = b || window.event;
                                if (d.prompt) this.getPrompt();
                                else this.show(a, 'entry');
                              }.bind(this),
                              d.delayEntry * 1000
                            );
                          else if (d.prompt) this.getPrompt();
                          else
                            (function (b) {
                              var a = b || window.event;
                              this.show(a, 'entry');
                            }.bind(this)());
                      }
                      function k (b) {
                        var a = b || window.event,
                          d = b.target || b.srcElement,
                          c = this.options.events,
                          e = d.parentNode,
                          f = 5,
                          g = 0;
                        while (e && (d.nodeName !== 'A' || d.nodeName !== 'INPUT') && g !== f) {
                          if (e.nodeName === 'A') d = e;
                          e = e.parentNode;
                          g += 1;
                        }
                        if (
                          c.disableFormElements &&
                          (d.tagName === 'INPUT' || d.tagName === 'BUTTON') &&
                          (d.type === 'submit' ||
                            d.type === 'image' ||
                            d.type === 'reset' ||
                            d.type === 'button')
                        )
                          this.interruptShow = true;
                        if (
                          c.disableLinks &&
                          (d.nodeName === 'A' || d.nodeName === 'AREA') &&
                          d.href.substr(0, 4) === 'http' &&
                          d.href.search(c.disableLinks) !== -1
                        )
                          this.interruptShow = true;
                      }
                      function o (b) {
                        this.interruptShow = true;
                      }
                      function p () {
                        OOo.addEventListener(document.body, 'mousedown', k.bind(this));
                        if (!this.options.events.disableFormElements) return;
                        var b = document.getElementsByTagName('form'),
                          a;
                        for (a = b.length - 1; a >= 0; a -= 1)
                          OOo.addEventListener(b[a], 'submit', o.bind(this));
                      }
                      OOo.extend(OOo.Ocode.prototype, {
                        setupEvents: i,
                        setupDisableElements: p,
                        getPrompt: function () {
                          OOo.getPrompt.call(this);
                        },
                        showPrompt: function (b) {
                          if (this.options.cookie) OOo.Ocode.tagUrl(this.options.cookie);
                          OOo.showPrompt.call(this, b, this.show);
                        },
                      });
                    })();
                    OOo.extend(OOo.Ocode.prototype, {
                      floating: function () {
                        var c = document,
                          e = (this.floatingLogo = document.createElement('div')),
                          f = c.createElement('div'),
                          g = c.createElement('div'),
                          h = c.createElement('div'),
                          l = c.createElement('span'),
                          m = this.options.floating,
                          j = OOo.$(m.contentId),
                          i = '10px',
                          k = m.id,
                          o = c.createElement('span'),
                          p,
                          q,
                          r,
                          s,
                          n,
                          t,
                          v,
                          z,
                          w = 0;
                        function u (b) {
                          return b.offsetLeft + b.offsetWidth;
                        }
                        function C (b) {
                          s.style.left = u(j) + 'px';
                        }
                        o.innerHTML =
                          'Screen reader users: Please switch to forms mode for this link.';
                        o.className = 'screen_reader';
                        if (k) e.id = k;
                        e.className = 'oo_feedback_float';
                        g.className = 'oo_transparent';
                        f.className = 'olUp';
                        h.className = 'olOver';
                        f.tabIndex = 0;
                        f.onkeyup = function (b) {
                          p = b || window.event;
                          if (p.keyCode !== 13) return;
                          this.show(p);
                        }.bind(this);
                        f.innerHTML = m.caption || 'Feedback';
                        e.appendChild(o);
                        e.appendChild(f);
                        l.innerHTML = m.hoverCaption || 'Click here to<br>rate this page';
                        h.appendChild(l);
                        e.appendChild(h);
                        e.appendChild(g);
                        function x (b) {
                          var a = c.documentElement.scrollTop || c.body.scrollTop,
                            d = c.documentElement.clientHeight || document.body.clientHeight;
                          e.style.top = a + d - (v || 0) - 10 + 'px';
                        }
                        if (m.position && m.position.search(/Content/) && j) {
                          s = this.spacer = c.createElement('div');
                          n = OOo.Browser.WebKit ? c.body : c.documentElement;
                          s.id = 'oo_feedback_fl_spacer';
                          s.style.left = u(j) + 'px';
                          c.body.appendChild(s);
                          switch (m.position) {
                            case 'rightOfContent':
                              t = function (b) {
                                e.style.left = u(j) - n.scrollLeft + 'px';
                              };
                              break;
                            case 'fixedPreserveContent':
                              t = function (b) {
                                var a = OOo.Browser.IE ? c.body.clientWidth : window.innerWidth,
                                  d = n.scrollLeft;
                                if (a <= u(j) + e.offsetWidth + parseInt(i, 10))
                                  e.style.left = u(j) - d + 'px';
                                else {
                                  e.style.left = '';
                                  e.style.right = i;
                                }
                              };
                              break;
                            case 'fixedContentMax':
                              t = function (b) {
                                var a = OOo.Browser.IE ? c.body.clientWidth : window.innerWidth;
                                if (a <= u(j) + e.offsetWidth + parseInt(i, 10)) {
                                  e.style.left = '';
                                  e.style.right = i;
                                } else {
                                  e.style.left = u(j) - n.scrollLeft + 'px';
                                  e.style.right = '';
                                }
                              };
                              break;
                          }
                          window.setTimeout(t, 0);
                          OOo.addEventListener(window, 'scroll', t, false);
                          OOo.addEventListener(window, 'resize', t, false);
                          OOo.addEventListener(window, 'resize', C, false);
                        } else e.style.right = i;
                        e.onkeyup = function (b) {
                          var a = b || window.event;
                          if (a.keyCode !== 13) return;
                          this.show(a);
                        }.bind(this);
                        if (OOo.Browser.isMobile)
                          if ('ontouchstart' in window) {
                            e.ontouchstart = function (b) {
                              var a = b || window.event;
                              if (a.preventDefault && a.stopPropagation) {
                                a.preventDefault();
                                a.stopPropagation();
                              } else a.returnValue = false;
                              w++;
                            }.bind(this);
                            e.ontouchend = function (b) {
                              var a = b || window.event;
                              if (w >= 2) {
                                this.show(a);
                                w = 0;
                              }
                            }.bind(this);
                          } else
                            e.onclick = function (b) {
                              var a = b || window.event;
                              this.show(a);
                            }.bind(this);
                        else
                          e.onclick = function (b) {
                            var a = b || window.event;
                            this.show(a);
                          }.bind(this);
                        c.body.appendChild(e);
                      },
                      removeFloatingLogo: function () {
                        document.body.removeChild(this.floatingLogo);
                        if (this.spacer) document.body.removeChild(this.spacer);
                      },
                    });
                    OOo.extend(OOo.Ocode.prototype, {
                      bar: function () {
                        var c = document,
                          e = (this.floatingLogo = c.createElement('a')),
                          f,
                          g,
                          h,
                          l = c.documentElement.scrollTop || c.body.scrollTop,
                          m = c.createElement('span'),
                          j = this.options,
                          i = 0,
                          k = c.createElement('span');
                        function o (b) {
                          var a = 0,
                            d = 0;
                          if (b.offsetParent) {
                            do {
                              a += b.offsetLeft;
                              d += b.offsetTop;
                            } while (b == b.offsetParent);
                            return [a, d];
                          }
                        }
                        function p (b) {
                          var a = document.activeElement,
                            d;
                          if (!a) return;
                          d = o(a);
                          if (!d) return;
                          if (
                            d[1] + a.clientHeight >
                            (window.innerHeight || document.body.clientHeight) +
                              (window.pageYOffset || document.body.scrollTop) -
                              e.clientHeight
                          )
                            if (navigator.appVersion.indexOf('MSIE 7.') !== -1)
                              window.scrollBy(0, 0);
                            else window.scrollBy(0, a.clientHeight + 20);
                        }
                        m.innerHTML = 'Launches comment card in new window';
                        m.className = 'screen_reader';
                        k.className = 'icon';
                        this.reflowBar = OOo.K;
                        e.id = 'oo_bar';
                        e.href = '#';
                        e.innerHTML = j.bar.caption || 'Feedback';
                        e.appendChild(m);
                        e.appendChild(k);
                        if (typeof j.tabIndex === 'number') e.tabIndex = j.tabIndex;
                        else e.tabIndex = 0;
                        e.onkeyup = function (b) {
                          var a = b || window.event;
                          if (a.keyCode !== 13) return;
                          this.show(a);
                        }.bind(this);
                        if (OOo.Browser.isMobile)
                          if ('ontouchstart' in window) {
                            e.ontouchstart = function (b) {
                              var a = b || window.event;
                              if (a.preventDefault && a.stopPropagation) {
                                a.preventDefault();
                                a.stopPropagation();
                              } else a.returnValue = false;
                              i++;
                            }.bind(this);
                            e.ontouchend = function (b) {
                              var a = b || window.event;
                              if (i >= 2) {
                                this.show(a);
                                i = 0;
                              }
                            }.bind(this);
                          } else
                            e.onclick = function (b) {
                              var a = b || window.event;
                              this.show(a);
                            }.bind(this);
                        else
                          e.onclick = function (b) {
                            var a = b || window.event;
                            this.show(a);
                          }.bind(this);
                        document.body.className +=
                          document.body.className < 1 ? 'oo_bar' : ' oo_bar';
                        document.body.appendChild(e);
                        OOo.addEventListener(document.body, 'keyup', p, false);
                      },
                    });
                    OOo.extend(OOo.Ocode.prototype, {
                      tab: function () {
                        var d = document,
                          c = (this.floatingLogo = d.createElement('div')),
                          e = d.createElement('div'),
                          f = d.createElement('div'),
                          g = d.createElement('span'),
                          h = this.options.tab,
                          l = d.createElement('a'),
                          m = 'Feedback',
                          j = h.tabType,
                          i = 'right',
                          k = 0;
                        switch (j) {
                          case 1:
                            var o = d.createElement('span');
                            c = this.floatingLogo = d.createElement('a');
                            e = d.createElement('span');
                            c.href = '#';
                            c.id = 'oo_tab_' + j;
                            if (h.position) i = h.position;
                            c.className = tabClass = 'oo_tab_' + i + '_' + j;
                            e.className = 'screen_reader';
                            o.className = 'icon';
                            if (typeof h.tabIndex === 'number') c.tabIndex = h.tabIndex;
                            else c.tabIndex = 0;
                            if (h.verbiage) m = h.verbiage;
                            c.innerHTML = m;
                            e.innerHTML = 'Launches comment card in new window';
                            c.appendChild(e);
                            c.appendChild(o);
                            setTimeout(function () {
                              c.className += ' small';
                            }, 2500);
                            break;
                          default:
                            c.id = 'oo_tab';
                            c.className = 'oo_tab_' + (h.position || i);
                            if (h.wcagBasePath) c.className += ' wcag';
                            if (typeof h.tabIndex === 'number') c.tabIndex = h.tabIndex;
                            else if (typeof h.tabIndex === 'undefined') c.tabIndex = 0;
                            f.appendChild(l);
                            c.appendChild(f);
                            f.appendChild(g);
                            c.appendChild(f);
                            if (e) {
                              e.className = 'screen_reader';
                              e.innerHTML = 'Activate to launch comment card';
                              c.appendChild(e);
                            }
                        }
                        c.onkeyup = function (b) {
                          var a = b || window.event;
                          if (a.keyCode !== 13) return;
                          this.show(a);
                        }.bind(this);
                        if (OOo.Browser.isMobile)
                          if ('ontouchstart' in window) {
                            c.ontouchstart = function (b) {
                              var a = b || window.event;
                              if (a.preventDefault && a.stopPropagation) {
                                a.preventDefault();
                                a.stopPropagation();
                              } else a.returnValue = false;
                              k++;
                            }.bind(this);
                            c.ontouchend = function (b) {
                              var a = b || window.event;
                              if (k >= 2) {
                                this.show(a);
                                k = 0;
                              }
                            }.bind(this);
                          } else
                            c.onclick = function (b) {
                              var a = b || window.event;
                              this.show(a);
                            }.bind(this);
                        else
                          c.onclick = function (b) {
                            var a = b || window.event;
                            this.show(a);
                          }.bind(this);
                        d.body.appendChild(c);
                      },
                    });
                    OOo.extend(OOo.Ocode.prototype, {
                      setupOnPageCC: function () {
                        var e = document,
                          f = OOo.Cache.overlay || e.createElement('div'),
                          g = (this.wrapper = e.createElement('div')),
                          h = e.createElement('a'),
                          l = e.createElement('div'),
                          m = e.createElement('span'),
                          j = this.frameName,
                          i = e.createElement(
                            OOo.DYNAMIC_FRAME_NAME_IS_BUGGY
                              ? '<iframe name="' + j + '">'
                              : 'iframe'
                          ),
                          k = e.createDocumentFragment(),
                          o = this.options,
                          p = o.onPageCard,
                          q = 'https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp',
                          r,
                          s,
                          n,
                          t = false,
                          v = this,
                          z,
                          w,
                          u,
                          C,
                          x,
                          D,
                          A,
                          B = e.createElement('span');
                        function y (b) {
                          if (b && b.preventDefault) b.preventDefault();
                          document.body.focus();
                          i.tabIndex = -1;
                          i.title = 'empty';
                          i['aria-hidden'] = 'true';
                          f.style.display = 'none';
                          f.className = '';
                          e.body.removeChild(g);
                          if (window.postMessage) OOo.removeEventListener(window, 'message', x);
                          else window.clearInterval(s);
                          t = false;
                          v.onPageCardVisible = false;
                          return false;
                        }
                        x = OOo.Ocode.postMessageHandler(function (b) {
                          var a = parseInt(b, 10),
                            d,
                            c;
                          if (a > 0) {
                            if (t) return;
                            t = true;
                            d =
                              window.innerHeight ||
                              e.documentElement.clientHeight ||
                              e.body.clientHeight;
                            c = a;
                            A = g.offsetTop;
                            if (c + A > d) c = d - 40 - A;
                            i.style.width = '555px';
                            l.style.width = '555px';
                            i.style.height = c + 'px';
                            g.style.visibility = 'visible';
                            if (m.clientHeight < 20) m.style.height = g.offsetHeight + 'px';
                            f.className = 'no_loading';
                            v.onPageCardVisible = true;
                            r && e.body.removeChild(r);
                          } else if (b === 'submitted') y();
                          if (OOo.Browser.IE && e.compatMode === 'BackCompat')
                            window.scrollTo(0, 0);
                        }, v.options.commentCardUrl);
                        o.metrics.type = 'OnPage';
                        OOo.Cache.overlay = f;
                        f.id = 'oo_overlay';
                        f.style.display = 'block';
                        f.className = '';
                        l.className = 'iwrapper';
                        g.className = 'oo_cc_wrapper';
                        g.setAttribute('role', 'alert');
                        g.setAttribute('aria-describedby', 'comment_card_description');
                        B.className = 'screen_reader';
                        B.id = 'comment_card_description';
                        B.innerHTML =
                          'Please leave your feedback in the comment card you just activated';
                        g.appendChild(B);
                        h.className = 'oo_cc_close';
                        h.innerHTML =
                          '<span class="screen_reader">Close dialog</span><span aria-hidden="true">&#10006;</span>';
                        h.title = o.closeTitle ? o.closeTitle : 'Close dialog';
                        if (!e.addEventListener) l.style.outline = '1px solid #cdcdcd';
                        g.style.visibility = 'hidden';
                        h.tabIndex = 0;
                        h.onkeyup = function (b) {
                          var a = b || window.event;
                          if (a.keyCode !== 13) return;
                          y();
                        };
                        if (OOo.Browser.IE) {
                          i.frameBorder = '0';
                          if (!window.XMLHttpRequest || e.compatMode === 'BackCompat') {
                            D = Math.max(e.documentElement.clientWidth, e.body.offsetWidth);
                            f.style.position = 'absolute';
                            f.style.width =
                              e.compatMode === 'BackCompat' ? D - 21 + 'px' : D + 'px';
                            f.style.height =
                              Math.max(e.documentElement.clientHeight, e.body.offsetHeight) + 'px';
                            g.style.position = 'absolute';
                            OOo.addEventListener(window, 'scroll', function () {
                              f.style.top =
                                e.body.scrollTop +
                                document.body.clientHeight -
                                f.clientHeight +
                                'px';
                              g.style.top = e.body.scrollTop + A + 25 + 'px';
                            });
                          }
                        }
                        OOo.addEventListener(h, 'click', y);
                        if (p.closeWithOverlay && !OOo.Browser.isMobile) {
                          g.appendChild(m);
                          m.onclick = y;
                          f.onclick = y;
                        }
                        i.src = ' ';
                        i.name = j;
                        i.title = 'Comment Card';
                        l.appendChild(h);
                        l.appendChild(i);
                        g.appendChild(l);
                        k.appendChild(g);
                        k.appendChild(f);
                        e.body.appendChild(k);
                        if (window.postMessage) OOo.addEventListener(window, 'message', x);
                        else s = setInterval(x, 500);
                        o.metrics.time2 = new Date().getTime();
                        r = OOo.appendOOForm(o, j);
                        r.submit();
                      },
                    });
                    OOo.extend(OOo.Ocode, {
                      postMessageHandler: function (c, e, f) {
                        return function (b) {
                          var a = 'https://secure.opinionlab.com',
                            d;
                          if (!f) f = location;
                          if (
                            (b && !(b.origin === a || b.origin.indexOf(e) !== 0)) ||
                            (!b && f.hash.search('OL=') === -1)
                          )
                            return false;
                          d = b ? b.data : f.hash.split('=').pop();
                          if (!b && location.hash) location.hash = '';
                          c(d);
                          return d;
                        };
                      },
                    });
                    OOo.Invitation = function (b) {
                      this.options = {
                        tunnelCookie: 'oo_inv_tunnel',
                        repromptTime: 604800,
                        responseRate: 50,
                        repromptCookie: 'oo_inv_reprompt',
                        promptMarkup: 'oo_inv_prompt.html',
                        promptStyles: 'oo_inverstitial_style.css',
                        percentageCookie: 'oo_inv_percent',
                        pagesHitCookie: 'oo_inv_hit',
                        popupType: 'popunder',
                        promptDelay: 0,
                        neverShowAgainButton: false,
                        loadPopupInBackground: false,
                        truncatePrevCurrentMetrics: false,
                        disablePrevCurrentMetrics: false,
                        tealeafCookieName: 'TLTSID',
                        monitorWindow: 'oo_inv_monitor.html',
                        companySlogan: 'We value your opinion',
                        beforePrompt: OOo.K,
                        callBacks: { prompt: '', yesClick: '', noClick: '', closeClick: '' },
                        inviteMarkup:
                          "<div id='oo_invitation_prompt' role='dialog' aria-describedby='oo_invite_message'><div id='oo_company_logo'></div><div id='oo_invite_content'><p id='oo_invite_message'>After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p><p class='prompt_button'><a href='#' id='oo_launch_prompt'>Yes<span class='screen_reader'>This will open a new window</span></a></p><p class='prompt_button'><a href='#' id='oo_no_thanks'>No Thanks</a></p><p id='ol_brand_logo'><a href='http://www.opinionlab.com/company/'; target='_0' aria-label='Powered by OpinionLab. This will open a new window'></a></p></div><a id='oo_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialog</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_invitation_prompt #oo_invite_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->",
                      };
                      this.popupShown = false;
                      OOo.extend(this.options, b);
                      var a = this.options,
                        d = parseInt(OOo.readCookie(a.pagesHitCookie), 10) || 0;
                      OOo.Invitation.friendlyDomains = a.friendlyDomains || null;
                      var c = {
                        weight: Number(OOo.readCookie('oo_OODynamicRewrite_weight')),
                        searchPattern: OOo.readCookie('oo_OODynamicRewrite_searchPattern'),
                        replacePattern: OOo.readCookie('oo_OODynamicRewrite_replacePattern'),
                      };
                      OOo.eraseCookie('oo_OODynamicRewrite_weight');
                      OOo.eraseCookie('oo_OODynamicRewrite_searchPattern');
                      OOo.eraseCookie('oo_OODynamicRewrite_replacePattern');
                      if (!window.OOoDynamicRewrite || window.OOoDynamicRewrite.weight < c.weight)
                        window.OOoDynamicRewrite = c;
                      if (
                        window.OOoDynamicRewrite &&
                        'number' === typeof window.OOoDynamicRewrite.weight &&
                        !isNaN(window.OOoDynamicRewrite.weight)
                      ) {
                        OOo.createCookie(
                          'oo_OODynamicRewrite_weight',
                          window.OOoDynamicRewrite.weight
                        );
                        if (window.OOoDynamicRewrite.searchPattern)
                          OOo.createCookie(
                            'oo_OODynamicRewrite_searchPattern',
                            window.OOoDynamicRewrite.searchPattern
                          );
                        if (window.OOoDynamicRewrite.replacePattern)
                          OOo.createCookie(
                            'oo_OODynamicRewrite_replacePattern',
                            window.OOoDynamicRewrite.replacePattern
                          );
                      }
                      if (
                        location.search.search('evs') !== -1 ||
                        OOo.readCookie('oo_evs_friendly') === 'yes'
                      ) {
                        OOo.eraseCookie('oo_evs_friendly');
                        a.loadPopupInBackground = true;
                        this.launchPopup();
                        OOo.createCookie(
                          a.repromptCookie,
                          1,
                          a.repromptTime === -1 ? 0 : a.repromptTime
                        );
                      }
                      setTimeout(
                        function () {
                          if (!window.oo_inv_monitor) return;
                          if (a.area && location.href.search(a.area) === -1) {
                            this.options.popupType = 'popup';
                            this.launchPopup();
                          } else if (a.goal && location.href.search(a.goal) !== -1)
                            window.oo_inv_monitor.close();
                        }.bind(this),
                        1600
                      );
                      if (OOo.readCookie(a.repromptCookie)) return;
                      if (a.thirdPartyCookies && OOo.checkThirdPartyCookies(a.thirdPartyCookies))
                        return;
                      if (!OOo.readCookie(a.percentageCookie))
                        OOo.createCookie(
                          a.percentageCookie,
                          Math.random() > 1 - a.responseRate / 100 ? '1' : '0'
                        );
                      if (typeof a.promptTrigger !== 'undefined')
                        if (a.promptTrigger instanceof RegExp) {
                          if (!window.location.href.match(a.promptTrigger)) return;
                        } else if (a.promptTrigger instanceof Array)
                          if (!OOo.checkTunnel(location.pathname, a.promptTrigger, a.tunnelCookie))
                            return;
                      d += 1;
                      OOo.createCookie(a.pagesHitCookie, d);
                      if (a.pagesHit && d < a.pagesHit) return;
                      OOo.eraseCookie(a.tunnelCookie);
                      if (OOo.readCookie(a.percentageCookie) === '1')
                        window.setTimeout(
                          function () {
                            OOo.createCookie(a.repromptCookie, 1, a.repromptTime);
                            this.options.beforePrompt();
                            this.getPrompt();
                          }.bind(this),
                          a.promptDelay * 1000
                        );
                    };
                    OOo.Invitation.notifyFriendlyLocationChange = function (b) {
                      if (window.oo_inv_monitor) OOo.createCookie('oo_evs_friendly', 'yes');
                    };
                    OOo.Invitation.prototype = {
                      getPrompt: function () {
                        OOo.getPrompt.call(this);
                      },
                      showPrompt: function (b) {
                        OOo.showPrompt.call(this, b, this.launchPopup);
                      },
                      launchPopup: function (a) {
                        if (this.popupShown) return;
                        this.popupShown = true;
                        var d = a || window.event;
                        if (d.preventDefault && d.stopPropagation) {
                          d.preventDefault();
                          d.stopPropagation();
                        } else d.returnValue = false;
                        var c = this.options,
                          e = window.location.href,
                          f =
                            c.popupType === 'popup'
                              ? 'https://secure.opinionlab.com/ccc01/comment_card.asp?'
                              : c.pathToAssets +
                                c.monitorWindow +
                                '?time1=' +
                                new Date().getTime() +
                                '&',
                          g,
                          h = [],
                          l = c.asm ? [555, 500] : OOo.Browser.Chrome ? [400, 400] : [400, 350],
                          m,
                          j = OOo.createMetrics(),
                          i = OOo.readCookie(c.tealeafCookieName),
                          k;
                        if (c.clickTalePID && window.ClickTaleGetUID && window.ClickTaleGetSID)
                          i +=
                            '|' +
                            [
                              c.clickTalePID,
                              window.ClickTaleGetUID(),
                              window.ClickTaleGetSID(),
                            ].join('/');
                        l = c.newWindowSize || l;
                        k =
                          'scrollbars=1,resizable=1,location=no,status=no,width=' +
                          l[0] +
                          ',height=' +
                          l[1];
                        if (c.referrerRewrite) j.referer = OOo.referrerRewrite(c.referrerRewrite);
                        if (c.truncatePrevCurrentMetrics) {
                          j.prev = OOo.truncateMetric(j.prev);
                          j.currentURL = OOo.truncateMetric(j.currentURL);
                        }
                        if (c.disablePrevCurrentMetrics) {
                          j.prev = '';
                          j.currentURL = '';
                        }
                        if (c.thirdPartyCookies) OOo.setThirdPartyCookies(c.thirdPartyCookies);
                        g = OOo.toQueryString(j) + '&type=Invitation';
                        if (c.customVariables)
                          g +=
                            '&customVars=' + encodeURIComponent(OOo.serialize(c.customVariables));
                        g += '&custom_var=' + OOo.createLegacyVars(c.legacyVariables, i);
                        if (c.asm) {
                          g += '&asm=2';
                          k += ',scrollbars=1';
                        }
                        f += g;
                        if (f.match(/\?/g).length === 2) f = f.replace(/\?([^?]*)$/, '&$1');
                        this.popup = m = window.open(f, 'OnlineOpinionInvitation', k);
                        if (!c.loadPopupInBackground && OOo.$('oo_container')) OOo.hidePrompt(d);
                        if (c.chromeSurveyPrompt)
                          setTimeout(function (b) {
                            m.postMessage(c.chromeSurveyPrompt, '*');
                          }, 500);
                      },
                      killPrompt: function (b) {
                        var a = b || window.event;
                        if (
                          this.options.callBacks &&
                          typeof this.options.callBacks.noClick === 'function'
                        )
                          this.options.callBacks.noClick();
                        OOo.createCookie(this.options.repromptCookie, 1, 157680000);
                        OOo.hidePrompt(a);
                      },
                    };
                    OOo.extend(OOo.Invitation, {
                      navigateToFriendlyDomain: function (b) {
                        location.href = b;
                      },
                    });
                    OOo.Waypoint = function (b) {
                      var a = OOo.Browser;
                      if (b.disableMobile && a.isMobile) return;
                      if (b.disableNoniOS && a.isMobileNonIOS) return;
                      this.options = {
                        pathToAssets: '/onlineopinionV5/',
                        waypointMarkup: 'oo_waypoint.html',
                        companySlogan: 'Give us feedback',
                        companyLogo: 'waypoint_logo.png',
                        categories: {
                          website: {
                            tealeafCookieName: 'TLTSID',
                            waypointIcon: 'waypoint_icon.png',
                          },
                          store: {
                            referrerRewrite: {
                              searchPattern: /:\/\//,
                              replacePattern: '://store.',
                            },
                            tealeafCookieName: 'TLTSID',
                            waypointIcon: 'waypoint_icon.png',
                          },
                          product: {
                            referrerRewrite: {
                              searchPattern: /:\/\//,
                              replacePattern: '://product.',
                            },
                            tealeafCookieName: 'TLTSID',
                            waypointIcon: 'waypoint_icon.png',
                          },
                          other: {
                            referrerRewrite: {
                              searchPattern: /:\/\//,
                              replacePattern: '://other.',
                            },
                            tealeafCookieName: 'TLTSID',
                            waypointIcon: 'waypoint_icon.png',
                          },
                        },
                        wpmarkup:
                          "<div id='oo_waypoint_prompt' role='dialogue' aria-describedby='oo_waypoint_message'><div id='oo_company_logo'></div><div id='oo_waypoint_content'><p id='oo_waypoint_message'>Select a category</p><p id='waypoint_icons'></p><p id='ol_brand_logo'><a href='http://www.opinionlab.com/company/' target='_0' aria-label='Powered by OpinionLab. This will open a new window'></a></p></div><a id='oo_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialogue</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_waypoint_prompt #oo_waypoint_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->",
                      };
                      OOo.extend(this.options, b);
                      var d = this.options,
                        c = d.categories;
                      for (var e in c)
                        if (c.hasOwnProperty(e))
                          if (typeof d.categories[e].oCode === 'object') {
                            var f = {};
                            f[e] = new OOo.Ocode(c[e].oCode);
                            OOo.extend(OOo.Waypoint, f);
                          }
                      OOo.extend(OOo.Waypoint, {
                        getWaypoint: function () {
                          this.getWaypoint();
                        }.bind(this),
                      });
                    };
                    OOo.Waypoint.prototype = {
                      getWaypoint: function () {
                        OOo.getWaypoint.call(this);
                      },
                      showWaypoint: function (b) {
                        OOo.showWaypoint.call(this, b);
                      },
                      killWaypoint: function (b) {
                        var a = b || window.event;
                        OOo.hideWaypoint(a);
                      },
                    };
                    OOo.extend(OOo, {
                      appendWaypoint: function (d) {
                        var c = OOo.$(d);
                        if (!!c)
                          if (OOo.Browser.isMobile) {
                            var e = 0;
                            if ('ontouchstart' in window) {
                              OOo.addEventListener(
                                c,
                                'touchstart',
                                function (b) {
                                  var a = b || window.event;
                                  if (a.preventDefault && a.stopPropagation) {
                                    a.preventDefault();
                                    a.stopPropagation();
                                  } else a.returnValue = false;
                                  e++;
                                },
                                false
                              );
                              OOo.addEventListener(
                                c,
                                'touchend',
                                function (b) {
                                  var a = b || window.event;
                                  if (e >= 2) {
                                    OOo.Waypoint.getWaypoint();
                                    e = 0;
                                  }
                                },
                                false
                              );
                            } else
                              OOo.addEventListener(
                                c,
                                'click',
                                function (b) {
                                  var a = b || window.event;
                                  if (a.preventDefault && a.stopPropagation) {
                                    a.preventDefault();
                                    a.stopPropagation();
                                  } else a.returnValue = false;
                                  OOo.Waypoint.getWaypoint();
                                },
                                false
                              );
                          } else {
                            OOo.addEventListener(
                              c,
                              'click',
                              function (b) {
                                var a = b || window.event;
                                if (a.preventDefault && a.stopPropagation) {
                                  a.preventDefault();
                                  a.stopPropagation();
                                } else a.returnValue = false;
                                OOo.Waypoint.getWaypoint();
                              },
                              false
                            );
                            OOo.addEventListener(
                              c,
                              'keydown',
                              function (b) {
                                var a = b || window.event;
                                if (a.preventDefault && a.stopPropagation) {
                                  a.preventDefault();
                                  a.stopPropagation();
                                } else a.returnValue = false;
                                if (a.keyCode !== 13) return;
                                OOo.Waypoint.getWaypoint();
                              },
                              false
                            );
                          }
                      },
                    });
                    return OOo;
                  }.apply(this, arguments);
                } finally {
                  if ($___old_e4fc1aab047d997b)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_e4fc1aab047d997b
                    ));
                }
              });
            }.call(window));
            (function (w, o) {
              var scMap = Dell.Metrics.sc;
              var getscMap = function (key) {
                return typeof scMap[key] != 'undefined' ? scMap[key] : '';
              };
              var getCookieKeyValue = function (cname, id) {
                try {
                  var sid = id + '=';
                  var lwp = o.readCookie(cname);
                  var startIdx = 0;
                  var endIdx = 0;
                  if (lwp.indexOf(sid) == -1) return null;
                  else {
                    startIdx = lwp.indexOf(sid) + id.length + 1;
                    if (lwp.substring(startIdx).indexOf('&') == -1)
                      return lwp.substring(startIdx).toLowerCase();
                    else endIdx = lwp.substring(startIdx).indexOf('&') + startIdx;
                  }
                  return lwp.substring(startIdx, endIdx).toLowerCase();
                } catch (e) {}
                return null;
              };
              try {
                var pageSeg = getscMap('segment'),
                  pageLang = getscMap('language'),
                  pageCnty = getscMap('country'),
                  pageCS = getscMap('customerset');
              } catch (e) {}
              if (!pageSeg) var pageSeg = getCookieKeyValue('lwp', 's');
              if (!pageLang) var pageLang = getCookieKeyValue('lwp', 'l');
              if (!pageCnty) var pageCnty = getCookieKeyValue('lwp', 'c');
              if (!pageCS) var pageCS = getCookieKeyValue('lwp', 'cs');
              o.oo_feedback = new o.Ocode({
                referrerRewrite:
                  w.location.protocol +
                  '//' +
                  w.location.hostname +
                  '/' +
                  pageCnty.toLowerCase() +
                  '/' +
                  pageLang.toLowerCase() +
                  '/' +
                  pageSeg.toLowerCase() +
                  w.location.pathname,
                customVariables: {
                  s_viCookie: o.readCookie('s_vi'),
                  amcvCookie: o.readCookie('AMCV_4DD80861515CAB990A490D45%40AdobeOrg'),
                  SiteServerId: o.readCookie('SITESERVER'),
                  AdobePageName: getscMap('pagename')
                    ? getscMap('pagename')
                    : typeof s_dell !== 'undefined'
                    ? typeof s_dell.pageName !== 'undefined'
                      ? s_dell.pageName
                      : ''
                    : '',
                  Segment: pageSeg,
                  Country: pageCnty,
                  Language: pageLang,
                  ApplicationName: getscMap('applicationname')
                    ? getscMap('applicationname')
                    : typeof s_dell !== 'undefined'
                    ? typeof s_dell.waaplicationname !== 'undefined'
                      ? s_dell.waaplicationname
                      : ''
                    : '',
                  PremierStatus:
                    typeof s_dell !== 'undefined'
                      ? typeof s_dell.premier !== 'undefined'
                        ? s_dell.premier
                        : ''
                      : '',
                  CMS: getscMap('cms')
                    ? getscMap('cms')
                    : typeof s_dell !== 'undefined'
                    ? typeof s_dell.prop29 !== 'undefined'
                      ? s_dell.prop29
                      : ''
                    : '',
                },
                tealeafCookieName: 'DellCEMSession',
              });
            })(window, OOo);
          },
          1646605,
          239652
        );
      },
      3029867,
      239652
    );
  })();
}
