{
  const $___stub_dc70937786909300 = {};
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
  })($___stub_dc70937786909300);
  (function () {
    if ('undefined' == typeof mm_simple_compilation) {
      function psdgetgetpsd (e, t) {
        (t = t || window.location.href), (e = e.replace(/[\[\]]/g, '\\$&'));
        var i = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)').exec(t);
        return i ? (i[2] ? decodeURIComponent(i[2].replace(/\+/g, ' ')) : '') : null;
      }
      function getDevice () {
        var e = {};
        return (e.agent = navigator.userAgent), (e.mobile = is_MobileDevice(e.agent)), e;
      }
      function is_MobileDevice (e) {
        return (
          -1 != e.indexOf('iPhone') ||
          -1 != e.indexOf('iPod') ||
          -1 != e.indexOf('iPad') ||
          -1 != e.indexOf('Android')
        );
      }
      (mm_simple_compilation = '19-11-2020 10:48:04'),
        'true' == psdgetgetpsd('tplib') && (tplib = !0),
        (function (e) {
          null == e.psd && (e.psd = {}),
            null == e.psd.framework && (e.psd.framework = {}),
            null == e.psd.framework.events && (e.psd.framework.events = {}),
            null == e.psd.framework.parser && (e.psd.framework.parser = {}),
            null == e.psd.framework.mediator && (e.psd.framework.mediator = {}),
            null == e.psd.framework.mediator.jsonp && (e.psd.framework.mediator.jsonp = {}),
            null == e.psd.framework.utils && (e.psd.framework.utils = {}),
            (e.psd.framework.debug = !1),
            -1 != e.location.href.indexOf('mm_debug') && (e.psd.framework.debug = !0);
        })(window),
        (function () {
          const $___old_2d7fe561e47fd31b = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_2d7fe561e47fd31b)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_dc70937786909300.userAgent
              ));
            return function () {
              null == window.psd && (window.psd = {}),
                null == window.psd.framework && (window.psd.framework = {});
              var e,
                a = navigator.userAgent,
                t = !0,
                n = /msie/i.test(a),
                o = /.NET/i.test(a),
                s = /chrome/i.test(a),
                r = /safari/i.test(a) && !s,
                d = /iphone/i.test(a),
                l = /ipad/i.test(a),
                p = /android/i.test(a),
                c = /opera/i.test(a),
                m = /firefox/i.test(a),
                u = /gecko\//i.test(a),
                _ = /seamonkey\//i.test(a),
                g = /version\/(\d+(\.\d+)?)/i;
              checkWIN7orHigher = function (e) {
                const $___old_e0022b13501b53cd = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_e0022b13501b53cd)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_dc70937786909300.userAgent
                    ));
                  return function () {
                    var t = window.navigator.userAgent.match(/NT [0-9.]+/g),
                      a = '';
                    if (null == t) return !1;
                    for (t = t[0], i = 0; i < t.length; i++)
                      (isNaN(t[i]) && '.' != t[i]) || (a += t[i]);
                    return e <= parseFloat(a);
                  }.apply(this, arguments);
                } finally {
                  if ($___old_e0022b13501b53cd)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_e0022b13501b53cd
                    ));
                }
              };
              var E,
                v,
                h,
                f,
                y,
                P = window.navigator.userAgent,
                M = checkWIN7orHigher('6.1'),
                T = /Windows NT 6.0/i.test(P),
                b = /Ubuntu/i.test(P),
                R = /Linux/i.test(P),
                I = /Mac OS X/i.test(P);
              function A (e) {
                return !!(
                  (e.msie && 8 < e.version) ||
                  s ||
                  (e.safari && 3.1 <= e.version) ||
                  (e.firefox && 21 <= e.version && M) ||
                  (e.firefox && 22 <= e.version && T) ||
                  (e.firefox && 22 <= e.version && I) ||
                  (e.firefox && 22 <= e.version && R) ||
                  (e.firefox && 22 <= e.version && b)
                );
              }
              (psd.framework.ua =
                (o && (e = { msie: t, version: 11 }),
                n && (e = { msie: t, version: a.match(/msie (\d+(\.\d+)?);/i)[1] }),
                s && (e = { webkit: t, chrome: t, version: a.match(/chrome\/(\d+(\.\d+)?)/i)[1] }),
                (d || l) &&
                  ((e = { webkit: t, mobile: t, ios: t, iphone: d, ipad: l }),
                  g.test(a) && (e.version = a.match(g)[1])),
                p && (e = { webkit: t, android: t, mobile: t, version: '0' }),
                !r || ((E = a.match(g)) && (e = { webkit: t, safari: t, version: E[1] })),
                c && (E = a.match(g)) && (e = { opera: t, version: E[1] }),
                u &&
                  ((e = { gecko: t, mozilla: t, version: a.match(/firefox\/(\d+(\.\d+)?)/i)[1] }),
                  m && (e.firefox = t)),
                _ && (e = { seamonkey: t, version: a.match(/seamonkey\/(\d+(\.\d+)?)/i)[1] }),
                e)),
                (psd.framework.androidNativeBrowser = (function () {
                  if (p && r) {
                    var e,
                      t = a.match(/Android\s(\d+(\.\d+)?)/i)[1];
                    return {
                      compatible: !((e = !(o || n || s || c || u || _)) && 5 <= t),
                      nativeBrowser: e,
                      androidVersion: t,
                    };
                  }
                  return { compatible: !1 };
                })()),
                (psd.framework.compatibility =
                  (v = psd.framework.ua).msie && v.version < 9 ? 1 : 0),
                (psd.framework.mp3AudioCompatible = A(psd.framework.ua)),
                (psd.framework.mp4AudioCompatible = A(psd.framework.ua)),
                (psd.framework.aacAudioCompatible = A(psd.framework.ua)),
                (psd.framework.mp4VideoCompatible = !!(
                  ((h = psd.framework.ua).msie && 8 < h.version) ||
                  s ||
                  (h.safari && 3.1 <= h.version) ||
                  (h.firefox && 21 <= h.version && M) ||
                  (h.firefox && 22 <= h.version && T) ||
                  (h.firefox && 22 <= h.version && I) ||
                  (h.firefox && 22 <= h.version && R) ||
                  (h.firefox && 22 <= h.version && b)
                )),
                (psd.framework.oggVideoCompatible =
                  ((f = psd.framework.ua),
                  !!(
                    s ||
                    (f.firefox && 3.5 <= f.version) ||
                    (f.gecko && 1.9 < f.version) ||
                    (f.opera && 10.5 <= f.version)
                  ))),
                (psd.framework.webmVideoCompatible =
                  ((y = psd.framework.ua),
                  !!(
                    s ||
                    (y.firefox && 4.2 <= y.version) ||
                    (y.gecko && 2 <= y.version) ||
                    (y.opera && 10.6 <= y.version)
                  )));
            }.apply(this, arguments);
          } finally {
            if ($___old_2d7fe561e47fd31b)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_2d7fe561e47fd31b
              ));
          }
        })();
      var match_UA = function (e) {
        return -1 < getDevice().agent.toLowerCase().indexOf(e);
      };
      function checkNativeHLS (e) {
        function t (e) {
          psd.framework.debug && console.log('[checkNativeHLS]', e);
        }
        return getDevice().mobile
          ? e
            ? match_UA('iphone') || match_UA('ipad')
              ? (t('[DAI][HLS][iPhone]'), !0)
              : (t('[DAI][RealHLS][Android]'), !1)
            : (t('[HLS][HTML5 Mobile]'), !0)
          : e
          ? match_UA('macintosh')
            ? match_UA('chrome') || match_UA('firefox')
              ? (t('[DAI][RealHLS][Chrome-Firefox]'), !1)
              : (t('[DAI][HLS][Safari]'), !0)
            : (t('[DAI][RealHLS][PC]'), !1)
          : (t('[RealHLS][PC-MAC]'), !1);
      }
      function checkDomain (e) {
        return -1 != window.location.href.indexOf(e);
      }
      function bitRateparse (e, t) {
        var i,
          a,
          n,
          o,
          s,
          r = [];
        return (
          (a = (i = e).split('/')),
          (a = String(a[i.split('/').length - 2])),
          (n = a.split(',')),
          -1 !== a.indexOf('csmil')
            ? (r = a.match(/(?!\,)(\d+?)(?=\,)/g))
            : n.forEach(function (e, t) {
                r[t] = e.split('_')[e.split('_').length - 1];
              }),
          1 === r.length || 0 === r.length
            ? e
            : (o = r.filter(function (e) {
                return parseInt(e) >= t;
              })).length === r.length
            ? e
            : (o.forEach(function (t, e) {
                (s = n.filter(function (e) {
                  return -1 !== e.indexOf(t);
                })),
                  (i = i
                    .replace(s, '')
                    .replace(/(,,\/)|(,\/)|(\/,)/g, '/')
                    .replace(/,,/g, ',')
                    .replace(/(,,\.mp4)/g, ',.mp4'));
              }),
              i)
        );
      }
      var FlashDetect = new (function () {
        var p = this;
        function c (e) {
          var t = -1;
          try {
            t = new ActiveXObject(e);
          } catch (e) {}
          return t;
        }
        (p.release = '1.0.2'),
          (p.installed = !1),
          (p.major = -1),
          (p.minor = -1),
          (p.revision = -1),
          (p.revisionStr = ''),
          (p.activeXVersion = '');
        var m = [
            {
              name: 'ShockwaveFlash.ShockwaveFlash.7',
              version: function (e) {
                return i(e);
              },
            },
            {
              name: 'ShockwaveFlash.ShockwaveFlash.6',
              version: function (e) {
                var t = '6,0,21';
                try {
                  (e.AllowScriptAccess = 'always'), (t = i(e));
                } catch (e) {}
                return t;
              },
            },
            {
              name: 'ShockwaveFlash.ShockwaveFlash',
              version: function (e) {
                return i(e);
              },
            },
          ],
          i = function (e) {
            var t = -1;
            try {
              t = e.GetVariable('$version');
            } catch (e) {}
            return t;
          };
        (p.majorAtLeast = function (e) {
          return p.major >= e;
        }),
          (p.FlashDetect = (function () {
            if (navigator.plugins && 0 < navigator.plugins.length) {
              var e = 'application/x-shockwave-flash',
                t = navigator.mimeTypes;
              if (t && t[e] && t[e].enabledPlugin && t[e].enabledPlugin.description) {
                var i = t[e].enabledPlugin.description.split(' '),
                  a = i[2].split('.');
                (p.major = parseInt(a[0], 10)),
                  (p.minor = parseInt(a[1], 10)),
                  (p.revisionStr = i[3]),
                  (p.revision =
                    ((d = p.revisionStr), parseInt(d.replace(/[a-zA-Z]/g, ''), 10) || p.revision)),
                  (p.installed = !0);
              }
            } else if (-1 == navigator.appVersion.indexOf('Mac') && window.execScript)
              for (var n = -1, o = 0; o < m.length && -1 == n; o++) {
                var s = c(m[o].name);
                if ('object' == typeof s && ((p.installed = !0), -1 != (n = m[o].version(s)))) {
                  var r =
                    ((l = void 0),
                    (l = n.split(',')),
                    {
                      major: parseInt(l[0].split(' ')[1], 10),
                      minor: parseInt(l[1], 10),
                      revision: parseInt(l[2], 10),
                      revisionStr: l[2],
                    });
                  (p.major = r.major),
                    (p.minor = r.minor),
                    (p.revision = r.revision),
                    (p.revisionStr = r.revisionStr),
                    (p.activeXVersion = n);
                }
              }
            var d, l;
          })());
      })();
      (psd.framework.Event = function (e) {
        (this.type = e), (this.target = null);
      }),
        (psd.framework.EventDispatcher = function () {
          var r = {};
          (this.addEventListener = function (e, t, i, a) {
            r[e] || (r[e] = []), r[e].push({ listener: t, scope: i, id_res: a });
          }),
            (this.removeEventListener = function (e, t, i, a) {
              var n = 0,
                o = r[e].length,
                s = [];
              for (n = 0; n < o; n++)
                (r[e][n].listener === t && r[e][n].scope === i) ||
                  (void 0 !== a && a == r[e][n].id_res) ||
                  s.push(r[e][n]);
              r[e] = s;
            }),
            (this.dispatchEvent = function (e) {
              var t = 0;
              if (void 0 !== e.type && ((e.target = this), r[e.type])) {
                var i = r[e.type];
                for (t = 0; t < i.length; t++) i[t].listener.apply(i[t].scope, [e]);
              }
            });
        }),
        (function (e) {
          function t (e, t) {
            psd.framework.Event.call(this, e);
            var i = void 0 !== t && null != t;
            (this.id = i && t.id ? t.id : ''), (this.message = i && t.message ? t.message : '');
          }
          (t.prototype = new psd.framework.Event()), (e.ErrorEvent = t);
        })(psd.framework),
        (function (e) {
          function t (e) {
            psd.framework.Event.call(this, e);
          }
          (t.prototype = new psd.framework.Event()),
            (t.TIMER = 'timer'),
            (t.TIMER_COMPLETE = 'timerComplete'),
            (e.TimerEvent = t);
        })(psd.framework.events),
        (function (e) {
          function _ () {
            psd.framework.EventDispatcher.call(this);
            var t,
              s = '0',
              r = '',
              d = null,
              l = !1,
              p = _.RESPONSE_XML,
              c = this,
              m = null,
              u =
                ((t = this),
                function (e) {
                  i.apply(t, [e]);
                }),
              i = function (e) {
                var t = e,
                  i = new psd.framework.MediatorResult(
                    psd.framework.MediatorResult.MEDIATOR_SUCCESS_CODE,
                    psd.framework.MediatorResult.MEDIATOR_SUCCESS,
                    t
                  );
                c.dispatchEvent(
                  new psd.framework.MediatorEvent(
                    psd.framework.MediatorEvent.MEDIATE_COMPLETE,
                    s,
                    i
                  )
                );
              };
            return (
              (this.corsIE = function (e) {
                return e && e != l && (l = e), l;
              }),
              (this.setCustomCallback = function (e) {
                m = e;
              }),
              (this.mediate = function (e, t, i) {
                var a, n, o;
                (responseData = ''),
                  (mediationID = _.getNextKey()),
                  (s = 'mediate_' + mediationID),
                  (r = e),
                  (d = t),
                  !i ||
                    (i != _.RESPONSE_TEXT &&
                      i != _.RESPONSE_XML &&
                      i != _.RESPONSE_JSON &&
                      i != _.RESPONSE_JSONP) ||
                    (p = i),
                  p == _.RESPONSE_JSONP
                    ? ((n = document.createElement('script')).setAttribute(
                        'type',
                        'text/javascript'
                      ),
                      m
                        ? (n.setAttribute('src', e), (window[m] = u))
                        : ((o = -1 < e.indexOf('?') ? '&' : '?'),
                          n.setAttribute('src', e + o + 'jsonp=psd.framework.mediator.jsonp.' + s),
                          (psd.framework.mediator.jsonp[s] = u)),
                      document.getElementsByTagName('head')[0].appendChild(n))
                    : (window.XDomainRequest && l
                        ? (((a = new XDomainRequest()).onerror = function () {
                            (mediatorResult = new psd.framework.MediatorResult(
                              psd.framework.MediatorResult.MEDIATOR_ERROR_CODE,
                              psd.framework.MediatorResult.MEDIATOR_ERROR,
                              null
                            )),
                              c.dispatchEvent(
                                new psd.framework.MediatorEvent(
                                  psd.framework.MediatorEvent.MEDIATE_ERROR,
                                  s,
                                  mediatorResult
                                )
                              );
                          }),
                          (a.onload = function () {
                            switch (p) {
                              case _.RESPONSE_TEXT:
                                responseData = a.responseText;
                                break;
                              case _.RESPONSE_XML:
                                (responseData = new ActiveXObject('Microsoft.XMLDOM')),
                                  (responseData.async = 'false'),
                                  responseData.loadXML(a.responseText);
                                break;
                              case _.RESPONSE_JSON:
                                responseData = a.responseText;
                            }
                            var e = d.parse(responseData);
                            (mediatorResult = new psd.framework.MediatorResult(
                              psd.framework.MediatorResult.MEDIATOR_SUCCESS_CODE,
                              psd.framework.MediatorResult.MEDIATOR_SUCCESS,
                              e
                            )),
                              c.dispatchEvent(
                                new psd.framework.MediatorEvent(
                                  psd.framework.MediatorEvent.MEDIATE_COMPLETE,
                                  s,
                                  mediatorResult
                                )
                              );
                          }))
                        : ((a = window.XMLHttpRequest
                            ? new XMLHttpRequest()
                            : new ActiveXObject(
                                'Microsoft.XMLHTTP'
                              )).onreadystatechange = function () {
                            switch (a.readyState) {
                              case _._STATE_REQUEST_NOT_INITIALIZED_CODE:
                              case _._STATE_SERVER_CONECTION_STABLISHED_CODE:
                              case _._STATE_REQUEST_RECEIVED_CODE:
                              case _._STATE_REQUEST_PROCESSING_CODE:
                                break;
                              case _._STATE_REQUEST_FINISHED_CODE:
                                var e;
                                if (a.status == _._REQUEST_OK_CODE) {
                                  switch (p) {
                                    case _.RESPONSE_TEXT:
                                      responseData = a.responseText;
                                      break;
                                    case _.RESPONSE_XML:
                                      responseData = a.responseXML;
                                      break;
                                    case _.RESPONSE_JSON:
                                      responseData = a.responseText;
                                  }
                                  var t = d.parse(responseData);
                                  (e = new psd.framework.MediatorResult(
                                    psd.framework.MediatorResult.MEDIATOR_SUCCESS_CODE,
                                    psd.framework.MediatorResult.MEDIATOR_SUCCESS,
                                    t
                                  )),
                                    c.dispatchEvent(
                                      new psd.framework.MediatorEvent(
                                        psd.framework.MediatorEvent.MEDIATE_COMPLETE,
                                        s,
                                        e
                                      )
                                    );
                                } else
                                  (e = new psd.framework.MediatorResult(
                                    psd.framework.MediatorResult.MEDIATOR_ERROR_CODE,
                                    psd.framework.MediatorResult.MEDIATOR_ERROR,
                                    null
                                  )),
                                    c.dispatchEvent(
                                      new psd.framework.MediatorEvent(
                                        psd.framework.MediatorEvent.MEDIATE_ERROR,
                                        s,
                                        e
                                      )
                                    );
                            }
                          }),
                      a.open(_.REQUEST_GET, r, !0),
                      a.send());
              }),
              s
            );
          }
          (_.prototype = new psd.framework.EventDispatcher()),
            (_._REQUEST_OK_CODE = 200),
            (_._REQUEST_ERROR_CODE = 404),
            (_._STATE_REQUEST_NOT_INITIALIZED_CODE = 0),
            (_._STATE_SERVER_CONECTION_STABLISHED_CODE = 1),
            (_._STATE_REQUEST_RECEIVED_CODE = 2),
            (_._STATE_REQUEST_PROCESSING_CODE = 3),
            (_._STATE_REQUEST_FINISHED_CODE = 4),
            (_.REQUEST_GET = 'GET'),
            (_.REQUEST_POST = 'POST'),
            (_.REQUEST_HEAD = 'HEAD'),
            (_.RESPONSE_TEXT = 'text'),
            (_.RESPONSE_XML = 'xml'),
            (_.RESPONSE_JSON = 'json'),
            (_.RESPONSE_JSONP = 'jsonp'),
            (_._nextID = 0),
            (_.getNextKey = function () {
              return _._nextID++;
            }),
            (e.Mediator = _);
        })(psd.framework),
        (function (e) {
          function t (e, t, i) {
            psd.framework.Event.call(this, e), (this.id = t), (this.result = i);
          }
          (t.prototype = new psd.framework.Event()),
            (t.MEDIATE_COMPLETE = 'mediate_complete'),
            (t.MEDIATE_ERROR = 'mediate_error'),
            (e.MediatorEvent = t);
        })(psd.framework),
        (function (e) {
          function t (e, t, i) {
            (this.code = e), (this.msg = t), (this.parserResult = i);
          }
          (t.MEDIATOR_SUCCESS_CODE = 0),
            (t.MEDIATOR_ERROR_CODE = 1),
            (t.MEDIATOR_SECURITY_ERROR = 2),
            (t.MEDIATOR_IO_ERROR = 3),
            (t.MEDIATOR_SUCCESS = 'mediator_success'),
            (t.MEDIATOR_ERROR = 'mediator_error'),
            (t.MEDIATOR_SECURITY_ERROR = 'mediator_security_error'),
            (t.MEDIATOR_IO_ERROR = 'mediator_io_error'),
            (e.MediatorResult = t);
        })(psd.framework),
        (psd.framework.Parser = function () {
          this.parse = function (e) {
            return new psd.framework.ParserResult(
              psd.framework.ParserResult.PARSER_SUCCESS_CODE,
              psd.framework.ParserResult.PARSER_SUCCESS,
              e
            );
          };
        }),
        (function (e) {
          function t () {
            psd.framework.Parser.call(this),
              (this.className = 'psd.framework.parser.JSONParser'),
              (this.parse = function (e) {
                var t = new psd.framework.ParserResult(
                  psd.framework.ParserResult.PARSER_ERROR_CODE,
                  psd.framework.ParserResult.PARSER_ERROR,
                  e
                );
                if ('undefined' != typeof JSON && void 0 !== JSON.parse)
                  try {
                    (t.result = 'object' == typeof e ? e : JSON.parse(e)),
                      (t.code = psd.framework.ParserResult.PARSER_SUCCESS_CODE),
                      (t.msg = psd.framework.ParserResult.PARSER_SUCCESS);
                  } catch (e) {
                    t.msg = e.message;
                  }
                return t;
              });
          }
          (t.prototype = new psd.framework.Parser()), (e.JSONParser = t);
        })(psd.framework.parser),
        (function (e) {
          function t (e, t, i) {
            (this.code = e), (this.msg = t), (this.result = i);
          }
          (t.PARSER_SUCCESS_CODE = 0),
            (t.PARSER_ERROR_CODE = 1),
            (t.PARSER_SUCCESS = 'parser_success'),
            (t.PARSER_ERROR = 'parser_error'),
            (e.ParserResult = t);
        })(psd.framework),
        (function (e) {
          function t () {}
          (t.merge = function (e, t) {
            var i = {};
            for (var a in e) i[a] = e[a];
            for (var a in t) i[a] = t[a];
            return i;
          }),
            (e.ObjectUtil = t);
        })(psd.framework),
        (function (e) {
          function t () {}
          (t.trim = function (e) {
            return e.replace(/^\s+/g, '').replace(/\s+$/g, '');
          }),
            (e.StringUtil = t);
        })(psd.framework),
        (function (e) {
          function t (e, t) {
            psd.framework.EventDispatcher.call(this),
              (this.className = 'psd.framework.utils.Timer');
            var i,
              a = null,
              n =
                ((i = this),
                function () {
                  o.apply(i);
                }),
              o = function () {
                s++,
                  this.dispatchEvent(
                    new psd.framework.events.TimerEvent(psd.framework.events.TimerEvent.TIMER)
                  ),
                  0 != d &&
                    d == s &&
                    (this.reset(),
                    this.dispatchEvent(
                      new psd.framework.events.TimerEvent(
                        psd.framework.events.TimerEvent.TIMER_COMPLETE
                      )
                    ));
              },
              s = 0;
            this.currentCount = function () {
              return s;
            };
            var r = null != e ? e : 1000;
            this.delay = function (e) {
              return null != e && 0 < e && (r = e), r;
            };
            var d = null != t ? t : 0,
              l = !(this.repeatCount = function (e) {
                return null != e && 0 < e && (d = e), d;
              });
            (this.running = function () {
              return l;
            }),
              (this.start = function () {
                l || ((a = setInterval(n, r)), (l = !0));
              }),
              (this.stop = function () {
                l && (clearInterval(a), (l = !1));
              }),
              (this.reset = function () {
                this.stop(), (s = 0);
              });
          }
          (t.prototype = new psd.framework.EventDispatcher()), (e.Timer = t);
        })(psd.framework.utils),
        (window.LibraryManager = new (function () {
          var i = [],
            a = [],
            n = null,
            o = null;
          (this.load = function (e) {
            var t = _validateItem(e);
            '' == t
              ? _checkDependencies(e.depends)
                ? e.success.apply(e.scope)
                : _loadDependencies(e)
              : psd.framework.debug && console.log('Invalid load item: ' + t);
          }),
            (_validateItem = function (e) {
              var t = '';
              return (
                void 0 === e && (t = 'null loaditem'),
                void 0 === e.depends && (t = 'null depends'),
                null != e.depends &&
                  'string' != typeof e.depends &&
                  'object' != typeof e.depends &&
                  (t = 'illegal depends type ' + typeof e.depends),
                'function' != typeof e.success && (t = 'success is not a function'),
                'function' != typeof e.error && (t = 'error is not a function'),
                'string' == typeof e.depends && (e.depends = [e.depends]),
                t
              );
            }),
            (_checkDependencies = function (e) {
              var t,
                i = !0;
              for (t in e) if (!(i = i && _checkDependency(e[t]))) break;
              return i;
            }),
            (_checkDependency = function (e) {
              var t;
              for (t in i) if (i[t] == e) return !0;
              return !1;
            }),
            (_loadDependencies = function (e) {
              var t;
              if ((null == n && 0 == a.length) || n == e) {
                if (((n = e), _checkDependencies(e.depends))) _dependencyLoaded();
                else
                  for (t in e.depends)
                    if (!_checkDependency(e.depends[t])) {
                      _loadDependency(e.depends[t]);
                      break;
                    }
              } else a.push(e);
            }),
            (_loadDependency = function (e) {
              psd.framework.debug && console.log('loading dependency ' + e), (o = e);
              var t = document.getElementsByTagName('head')[0],
                i = document.createElement('script');
              (i.type = 'text/javascript'),
                0 <= navigator.appName.indexOf('Microsoft')
                  ? (i.onreadystatechange = function () {
                      ('loaded' != this.readyState && 'complete' != this.readyState) ||
                        (_dependencyLoaded(), (i.onreadystatechange = null));
                    })
                  : (i.onload = _dependencyLoaded),
                (i.src = o),
                t.appendChild(i);
            }),
            (_dependencyLoaded = function () {
              psd.framework.debug && console.log('successfully loaded dependency ' + o),
                i.push(o),
                (o = ''),
                _checkDependencies(n.depends)
                  ? (n.success.apply(n.scope),
                    (n = null),
                    0 < a.length && ((n = a.shift()), _loadDependencies(n)))
                  : _loadDependencies(n);
            });
        })()),
        (function (e) {
          null == e.psd && (e.psd = {}),
            null == e.psd.media && (e.psd.media = {}),
            null == e.psd.media.skins && (e.psd.media.skins = {}),
            null == e.psd.media.skins.generic && (e.psd.media.skins.generic = {}),
            null == e.psd.media.wrappers && (e.psd.media.wrappers = {}),
            null == e.emic && (e.emic = {}),
            null == e.emic.top && (e.emic.top = {});
        })(window),
        (function (e) {
          function t (e, t) {
            psd.framework.Event.call(this, e), (this.data = t);
          }
          (t.prototype = new psd.framework.Event()),
            (t.MEDIA_BEGIN = 'mediaBegin'),
            (t.MEDIA_START = 'mediaStart'),
            (t.MEDIA_STOP = 'mediaStop'),
            (t.MEDIA_FIRST_QUART = 'mediaFirstQuart'),
            (t.MEDIA_HALF = 'mediaHalf'),
            (t.MEDIA_THIRD_QUART = 'mediaThirdQuart'),
            (t.AD_START = 'adStart'),
            (t.AD_SKIP = 'adSkip'),
            (t.AD_COMPLETE = 'adComplete'),
            (t.MEDIA_COMPLETE = 'mediaComplete'),
            (t.MEDIA_PREVIOUS = 'mediaPrevious'),
            (t.MEDIA_NEXT = 'mediaNext'),
            (t.ESTADO_BUFFER_FULL = 'estadoBufferFull'),
            (t.ESTADO_BUFFER_EMPTY = 'estadoBufferEmpty'),
            (t.MEDIA_PROGRESS = 'mediaProgress'),
            (t.CUEPOINT_DATA = 'CUEPOINT_DATA'),
            (t.INITIALIZED = 'INITIALIZED'),
            (t.AD_COMPANION_ON = 'adCompanionOn'),
            (t.AD_COMPANION_OFF = 'adCompanionOff'),
            (this.data = null),
            (e.MediaEvent = t);
        })(psd.media),
        (function (e) {
          function t (e, t) {
            psd.framework.Event.call(this, e), (this.data = t);
          }
          (t.prototype = new psd.framework.Event()),
            (t.EVENT_INI = 'TopLauncherInitialized'),
            (t.EVENT_ERROR = 'TopEmbedError'),
            (this.data = null),
            (e.TopEmbedEvent = t);
        })(psd.media),
        (function (e) {
          function t (e, t) {
            psd.framework.Event.call(this, e), (this.data = t);
          }
          (t.prototype = new psd.framework.Event()),
            (t.EVENT_INIT = 'TopEventPlaylistInitialized'),
            (t.EVENT_ERROR = 'TopEmbedPlaylistError'),
            (this.data = null),
            (e.TopEmbedEventPlaylist = t);
        })(psd.media),
        (function (e) {
          function t (e, t) {
            psd.framework.Event.call(this, e), (this.data = t);
          }
          (t.prototype = new psd.framework.Event()),
            (t.EVENT_ERROR = 'eventError'),
            (t.DATA_REQUEST = 'dataRequest'),
            (t.DATA_COMPLETE = 'dataComplete'),
            (t.MEDIA_CHANGE = 'mediaChange'),
            (t.PLAYLIST_COMPLETE = 'playlistComplete'),
            (this.data = null),
            (e.PlaylistEvent = t);
        })(psd.media),
        (function (e) {
          function t (e, t) {
            psd.framework.Event.call(this, e), (this.data = t);
          }
          (t.prototype = new psd.framework.Event()),
            (t.EVENT_INI = 'MediaPlayerInitialized'),
            (t.EVENT_ERROR = 'TopLauncheError'),
            (this.data = null),
            (e.TopLauncherEvent = t);
        })(psd.media),
        (psd.media.InfoPanel = function () {
          var u,
            _ = this;
          (this.onclick = null),
            (this.paint = function (s, i, a, e, r, t) {
              function d () {
                _container.style.position = 'relative';
                var e = document.createElement('div');
                (e.style.width = '100%'),
                  (e.style.height = '100%'),
                  (e.style.position = 'absolute'),
                  (e.style.textAlign = 'center'),
                  (e.style.top = 0),
                  (e.style.left = 0),
                  (e.style.backgroundColor = 'rgba(0,0,0,0.9)'),
                  (e.style.display = 'table'),
                  (e.className = 'mm_infopanel_background'),
                  (e.style.zIndex = 1000),
                  (e.style.cursor = 'pointer');
                var t = document.createElement('div');
                (t.style.margin = 'auto'),
                  (t.className = 'mm_infopanel_message'),
                  (t.style.color = 'white'),
                  (t.style.fontFamily = 'Arial'),
                  (t.style.display = 'table-cell'),
                  (t.style.verticalAlign = 'middle'),
                  (t.innerHTML = i),
                  e.appendChild(t),
                  null != this.onclick &&
                    (e.onclick = function () {
                      _.onclick(e);
                    }),
                  a || (_container.innerHTML = ''),
                  _container.appendChild(e);
              }
              (_container = document.getElementById(s)), (_message = i), (_cover = r);
              function n (e) {
                var t = new Date();
                if (
                  ((_IdMedia = s + t.getTime() + '_' + Math.floor(1000 * Math.random() + 1)),
                  0 == e.result.parserResult.code)
                ) {
                  if (
                    ((u = (u = e.result.parserResult.result.replace(
                      /{<-%ID%->}/g,
                      _IdMedia
                    )).replace(/{<-%MESSAGE%->}/g, _message)),
                    'undefined' != typeof _cover && '' != r)
                  )
                    u = u.replace(/{<-%COVER%->}/g, _cover);
                  else {
                    var i = u.indexOf('<<'),
                      a = u.indexOf('>>');
                    u = u.replace(/{<-%COVER%->}/g, u.substr(i + 2, a - (i + 2)));
                  }
                  if (checkDomain(URL_EMBED_PLAYER)) {
                    (i = u.indexOf('<!--{{')), (a = u.indexOf('}}-->'));
                    var n = u.substr(i, a + 6 - i),
                      o = u.substr(i + 6, a - (i + 6));
                    u = u.replace(n, o);
                  }
                  _container.innerHTML = u;
                } else 1 == e.result.parserResult.code && d();
              }
              function o (e) {
                d();
              }
              var l = '/psdmedia/media/simple/skinsInfoPanel/{UDN}/assets/template.html',
                p = '/psdmedia/media/simple/skinsInfoPanel/{UDN}/assets/style.css',
                c = t,
                m = e;
              'diario_as' == c
                ? ((function () {
                    l = l.replace('{UDN}', c);
                    var e = new psd.framework.Parser(),
                      t = new psd.framework.Mediator(),
                      i = m ? m + l : l;
                    t.corsIE(!0),
                      t.addEventListener(psd.framework.MediatorEvent.MEDIATE_COMPLETE, n, this),
                      t.addEventListener(psd.framework.MediatorEvent.MEDIATE_ERROR, o, this),
                      t.mediate(i, e, psd.framework.Mediator.RESPONSE_TEXT);
                  })(),
                  (function () {
                    p = p.replace('{UDN}', c);
                    var e = document.createElement('link'),
                      t = m ? m + p : p;
                    e.setAttribute('rel', 'stylesheet'),
                      e.setAttribute('type', 'text/css'),
                      e.setAttribute('href', t),
                      void 0 !== e && document.getElementsByTagName('head')[0].appendChild(e);
                  })())
                : d();
            });
        }),
        (psd.media.Lang = function () {
          var a = {
              es: {
                contenido_no_disponible: 'Contenido no disponible',
                trans_no_disponible: 'No disponible para este dispositivo',
                trans_no_comenzado: 'La retransmisión aún no ha comenzado',
                trans_reanudara: 'La retransmisión se reanudará en breve',
                trans_finalizada: 'La retransmisión ha finalizado',
                publicidad: 'Publicidad',
                actualizar_plugin: 'Necesitas actualizar tu plugin de Flash',
                no_mp4: 'El navegador no admite vídeo HTML5/MP4',
                no_mp3: 'El navegador no admite audio HTML5/MP3',
                geobloqueado: 'Contenido no disponible en su zona geográfica',
                bloqueado: 'Contenido compartido bloqueado',
                aun_no_disponible: 'El contenido no está disponible todavía',
                no_disponible: 'El contenido no está disponible',
                audio_geobloqueado: 'Audio no disponible en su zona geográfica',
                audio_aun_no_disponible: 'Audio no disponible todavía',
                audio_no_disponible: 'Audio ya no disponible',
                audio_no_encontrado: 'Audio no encontrado',
                necesita_plugin: 'Necesita instalar el plugin de flash para ver este contenido',
                no_encontrado: 'Contenido no encontrado',
                cerrar: 'Cerrar',
                tamanio_real: 'Tamaño real',
                ver_perfil_eskup: 'Ver perfil en Eskup',
                teclear_usuario: 'Tienes que teclear usuario y contraseña',
                error_correo:
                  "El campo 'usuario' no parece un correo electrónico. Por favor, revísalo.",
                foto: 'Foto',
                tamanio_ventana: 'Tamaño ventana',
                ver_perfil_completo: 'Ver perfil completo',
                avatar: 'Avatar',
                ver_video: 'Ver vídeo',
                vervideo_svg: '//ep00.epimg.net/reproductores/vervideo.svg',
                directo: 'EMISIÓN EN DIRECTO',
                siguiente_noticia: 'Siguiente noticia',
                anterior_noticia: 'Noticia anterior',
                primera_noticia: 'No hay noticia anterior',
                ultima_noticia: 'No hay más noticias',
                contenido_no_disponible_as:
                  'Este contenido tiene un vídeo que no está disponible en tu zona geográfica',
              },
              en: {
                contenido_no_disponible_as:
                  'This content has a video that is not available in your geographic area',
              },
              ca: {
                contenido_no_disponible: 'Contingut no disponible',
                trans_no_disponible: 'Transmissió no disponible per a aquest dispositiu',
                trans_no_comenzado: 'La retransmissió encara no ha començat',
                trans_reanudara: 'La retransmissió es reprendrà aviat',
                trans_finalizada: 'La retransmissió ha finalitzat',
                publicidad: 'Publicitat',
                actualizar_plugin: 'Necessites actualitzar el teu plugin de Flash',
                no_mp4: 'El navegador no admet vídeo HTML5/MP4',
                no_mp3: 'El navegador no admet HTML5/MP3',
                geobloqueado: 'Contingut no disponible en la seva zona geogràfica',
                bloqueado: 'Contingut compartit bloquejat',
                aun_no_disponible: 'El contingut encara no està disponible',
                no_disponible: 'El contingut no està disponible',
                audio_geobloqueado: 'Áudio no disponible en la seva zona geogràfica',
                audio_aun_no_disponible: 'Àudio no disponible encara',
                audio_no_disponible: 'Àudio ja no disponible',
                audio_no_encontrado: 'Áudio no trobat',
                necesita_plugin:
                  'Necessita instal\xB7lar el plugin de Flash per veure aquest contingut',
                no_encontrado: 'Contingut no trobat',
                cerrar: 'Tancar',
                tamanio_real: 'Mida real',
                ver_perfil_eskup: 'Veure perfil en Eskup',
                teclear_usuario: 'Has de teclejar usuari i contrasenya',
                error_correo: "El camp 'usuari' no sembla un correu electrònic. Sisplau, revisa'l",
                foto: 'Foto',
                tamanio_ventana: 'Mida finestra',
                ver_perfil_completo: 'Veure perfil complet',
                avatar: 'Avatar',
                ver_video: 'Veure Vídeo',
                vervideo_svg: '//ep00.epimg.net/reproductores/vervideo_ca.svg',
                directo: 'EMISSIÓ EN DIRECTE',
                siguiente_noticia: 'Propera notícia',
                anterior_noticia: 'Notícia anterior',
                primera_noticia: 'No hi ha notícia anterior',
                ultima_noticia: 'No hi ha més notícies',
                contenido_no_disponible_as:
                  'Aquest contingut ha un vídeo que no està disponible en la teva zona geogràfica',
              },
              'pt-br': {
                contenido_no_disponible: 'Contenido não disponível',
                trans_no_disponible: 'Indisponível para este dispositivo',
                trans_no_comenzado: 'La retransmisión aún no ha comenzado',
                trans_reanudara: 'La retransmisión se reanudará en breve',
                trans_finalizada: 'La retransmisión ha finalizado',
                publicidad: 'Publicidade',
                actualizar_plugin: 'Você precisa atualizar seu plugin Flash',
                no_mp4: 'O navegador não suporta vídeo HTML5/MP4',
                no_mp3: 'O navegador não suporta HTML5/MP3',
                geobloqueado: 'Contenido não disponível para sua região',
                bloqueado: 'Contenido compartido bloqueado',
                aun_no_disponible: 'O contenido ainda não está disponível',
                no_disponible: 'O contenido não está disponível',
                audio_geobloqueado: 'Audio no disponible en su zona geográfica',
                audio_aun_no_disponible: 'Audio no disponible todavía',
                audio_no_disponible: 'Audio ya no disponible',
                audio_no_encontrado: 'Audio no encontrado',
                necesita_plugin: 'Você precisa instalar o plugin flash para ver este conteúdo',
                no_encontrado: 'Contenido não encontrado',
                cerrar: 'Fechar',
                tamanio_real: 'Tamanho real',
                ver_perfil_eskup: 'Ver perfil em Eskup',
                teclear_usuario: 'Digite usuário e senha',
                error_correo: "O campo 'usuário' não parece ser um e-mail. Por favor, verifique",
                foto: 'Foto',
                tamanio_ventana: 'Tamanho Janela',
                ver_perfil_completo: 'Ver perfil completo',
                avatar: 'Avatar',
                ver_video: 'Ver vídeo',
                vervideo_svg: '//ep00.epimg.net/reproductores/vervideo_pt-br.svg',
                directo: 'AO VIVO',
                siguiente_noticia: 'Próxima notícia',
                anterior_noticia: 'Notícias anteriores',
                primera_noticia: 'Nenhuma notícia anterior',
                ultima_noticia: 'Sem mais notícias',
                contenido_no_disponible_as:
                  'Este conteúdo tem um vídeo que não está disponível na sua área geográfica',
              },
            },
            n = [
              'À',
              'Á',
              'Â',
              'Ã',
              'Ä',
              'à',
              'á',
              'â',
              'ã',
              'ä',
              'È',
              'É',
              'Ê',
              'Ë',
              'è',
              'é',
              'ê',
              'ë',
              'Ì',
              'Í',
              'Î',
              'Ï',
              'ì',
              'í',
              'î',
              'ï',
              'Ò',
              'Ó',
              'Ô',
              'Õ',
              'Ö',
              'ò',
              'ó',
              'ô',
              'õ',
              'ö',
              'Ù',
              'Ú',
              'Û',
              'Ü',
              'ù',
              'ú',
              'û',
              'ü',
              'Ñ',
              'ñ',
              'Ç',
              'ç',
            ],
            o = [
              'À',
              'Á',
              'Â',
              'Ã',
              'Ä',
              'à',
              'á',
              'â',
              'ã',
              'ä',
              'È',
              'É',
              'Ê',
              'Ë',
              'è',
              'é',
              'ê',
              'ë',
              'Ì',
              'Í',
              'Î',
              'Ï',
              'ì',
              'í',
              'î',
              'ï',
              'Ò',
              'Ó',
              'Ô',
              'Õ',
              'Ö',
              'ò',
              'ó',
              'ô',
              'õ',
              'ö',
              'Ù',
              'Ú',
              'Û',
              'Ü',
              'ù',
              'ú',
              'û',
              'ü',
              'Ñ',
              'ñ',
              'Ç',
              'ç',
            ];
          (this.translate = function (e, t) {
            return void 0 === a[e]
              ? ''
              : null == a[e][t]
              ? null != a.es[t]
                ? a.es[t]
                : ''
              : a[e][t];
          }),
            (this.translateText = function (e, t) {
              var i = t.match(/{{lang:[A-Za-z0-9\_\-]*}}/g);
              for (var a in i) {
                var n = i[a].replace('{{lang:', '').replace('}}', '');
                t = t.replace(i[a], this.translate(e, n));
              }
              return t;
            }),
            (this.addTranslation = function (e, t, i) {
              a[e], (a[e] = {}), (a[e][t] = i);
            }),
            (this.addTranslations = function (e) {
              for (var t in e)
                for (var i in (void 0 === a[t] && (a[t] = {}), e[t])) a[t][i] = e[t][i];
            }),
            (this.UNICODE = function (e) {
              for (var t in n) {
                var i = new RegExp(n[t], 'g');
                e = e.replace(i, o[t]);
              }
              return e;
            }),
            (this.compatibility = function (e) {
              var t;
              for (t in a) if (e == t) return !0;
              return !1;
            });
        }),
        (psd.media.NextPanel = function (e, t, i, a, n) {
          var r,
            d,
            l,
            p,
            c,
            m,
            u,
            _,
            g,
            E,
            v,
            h = this,
            f = e,
            y = i,
            P = n,
            o = !1,
            s = '/psdmedia/media/simple/skinsNextPanel/{UDN}/assets/template.html',
            M = '/psdmedia/media/simple/skinsNextPanel/{UDN}/assets/style.css';
          (_CODE_NUM_PARSER_OK = 0), (_CODE_NUM_PARSER_ERROR = 1);
          function T (e) {
            var t = new Date();
            (P = P + t.getTime() + '_' + Math.floor(1000 * Math.random() + 1)),
              e.result.parserResult.code == _CODE_NUM_PARSER_OK
                ? (r = e.result.parserResult.result.replace(/{<-%ID%->}/g, P))
                : (e.result.parserResult.code, _CODE_NUM_PARSER_ERROR);
          }
          function b (e) {}
          var R = t,
            I = a;
          !(function () {
            s = s.replace('{UDN}', R);
            var e = new psd.framework.Parser(),
              t = new psd.framework.Mediator(),
              i = I ? I + s : s;
            t.corsIE(!0),
              t.addEventListener(psd.framework.MediatorEvent.MEDIATE_COMPLETE, T, this),
              t.addEventListener(psd.framework.MediatorEvent.MEDIATE_ERROR, b, this),
              t.mediate(i, e, psd.framework.Mediator.RESPONSE_TEXT);
          })(),
            (function () {
              M = M.replace('{UDN}', R);
              var e = document.createElement('link'),
                t = I ? I + M : M;
              e.setAttribute('rel', 'stylesheet'),
                e.setAttribute('type', 'text/css'),
                e.setAttribute('href', t),
                void 0 !== e && document.getElementsByTagName('head')[0].appendChild(e);
            })(),
            (this.showPanel = function (e, t, i, a, n) {
              var o = document.getElementById(y);
              function s (e) {
                return document.getElementById(e + P);
              }
              document.getElementById('mm_next_panel_' + P) ||
                ((elementHTML = document.createElement('div')),
                (elementHTML.id = 'mm_next_panel_' + P),
                (elementHTML.className = 'mm_nextpanel'),
                (elementHTML.style.display = 'none'),
                (elementHTML.innerHTML = r),
                o.appendChild(elementHTML)),
                (d = s('mm_next_panel_')),
                (l = s('mm_nextMedia_')),
                (p = s('mm_repeatMedia_')),
                (c = s('mm_nextTime_')),
                (g = s('mm_nextThumb_')),
                (E = s('mm_nextText_')),
                (g.src = e),
                (E.innerHTML = t),
                (_ = f),
                (c.innerHTML = f),
                (l.onclick = function () {
                  h.killPanel(), i();
                }),
                (g.onclick = function () {
                  (v = 'nextThumb'), h.killPanel(), i();
                }),
                (E.onclick = function () {
                  (v = 'nextText'), h.killPanel(), i();
                }),
                (p.onclick = function () {
                  (v = 'repeatMedia'), h.killPanel(), (c.innerHTML = _), n();
                }),
                (m = function () {
                  v = 'next_counter';
                  var e = _;
                  u = setInterval(function () {
                    0 != e ? (e--, (c.innerHTML = e)) : (h.killPanel(), a());
                  }, 1000);
                }),
                h.viewPanel();
            }),
            (this.viewPanel = function (e) {
              (o = !0), m(), (d.style.display = '');
            }),
            (this.isShowPanel = function () {
              return o;
            }),
            (this.killPanel = function () {
              void 0 !== d && (d.style.display = 'none'), clearInterval(u), (o = !1);
            }),
            (this.eventAction = function () {
              return v;
            });
        }),
        (function (e) {
          function t (e) {
            var P = this;
            psd.framework.EventDispatcher.call(this),
              (this.className = 'psd.media.TopLauncher'),
              (_PROTOCOLO_HTTPS = 'https'),
              (_URL_HOST_HTTPS = 'https://topsslpl-a.akamaihd.net'),
              (_TYPE_FLASH = 'FLASH'),
              (_TYPE_IOS = 'IOS'),
              (_TYPE_UDS = 'UDS'),
              (VIDEO_MEDIA_TYPE = 'video'),
              (AUDIO_MEDIA_TYPE = 'audio'),
              (NAME_BITRATE = 'bitrate'),
              (NAME_HEIGHT = 'height'),
              (URL_ADBLOCK = '/psdmedia/resources/js/psd/ima3.js'),
              (URL_LOGO_TOP = '/psdmedia/resources/img/top50.png'),
              (URL_BACKGROUND = '/psdmedia/resources/img/gradient.png'),
              (URL_PUBLI = '/psdmedia/resources/js/psd/prisaAd.min.js'),
              (URL_TOP_PLAYER = '/psdmedia/media/top/TopPlayer.min.js'),
              (URL_STATS = '/psdmedia/resources/js/psd/statistics.top.min.js'),
              'undefined' != typeof tplib &&
                ((URL_TOP_PLAYER = '/psdmedia/media/top/js/TopPlayer.lib.js'),
                (URL_STATS = '/psdmedia/resources/js/psd/lib/statistics.lib.js'),
                (URL_PUBLI = '/psdmedia/resources/js/psd/lib/prisaAd.lib.js')),
              (ERROR_PARSER = 'Error Code #2'),
              (ERROR_WS = 'Error Code #3'),
              (ERROR_CARGA_STATISTICS = 'Error Code #4'),
              (ERROR_CARGA_TOP_PLAYER = 'Error Code #5'),
              (ERROR_SERVICIO_MEDIA = 'Error_servicio_media'),
              (ID_PROVIDER_PRISADIGITAL = 1),
              (ID_PROVIDER_BRIGHTCOVE = 2),
              (ID_PROVIDER_GENERIC = 3),
              (ID_PROVIDER_TRITON = 4),
              (ID_PROVIDER_AKAMAIHD = 5),
              (ID_PROVIDER_YT = 6),
              (ID_PROVIDER_DM = 7),
              (ID_PROVIDER_VIMEO = 8),
              (ID_PROVIDER_HLS = 9);
            var n = 'private';
            (CONTROLLER_TYPE_AKAMAIHD = 'akamaihd'),
              (CONTROLLER_TYPE_AKAMAIHDS = 'akamaihds'),
              (CONTROLLER_TYPE_TRITON = 'triton'),
              (CONTROLLER_TYPE_HTML5NATIVE = 'html5native'),
              (CONTROLLER_TYPE_YT = 'youtube'),
              (CONTROLLER_TYPE_DM = 'dailymotion'),
              (CONTROLLER_TYPE_VIMEO = 'vimeo'),
              (CONTROLLER_TYPE_HLS = 'hls'),
              (CONTROLLER_TYPE_REAL_HLS = 'Realhls'),
              (_fullscreen = !1);
            var o,
              M,
              T,
              b,
              i,
              d,
              l,
              R,
              I,
              A,
              s,
              w = e,
              O = !1;
            (this.url_FAPI = ''),
              (this.data_FAPI = {}),
              (this.init = function () {
                t.apply(this);
              }),
              (this.setEmbed = function (e) {
                s = e;
              }),
              (this.getEmbed = function () {
                return s;
              });
            var t = function () {
                var n;
                if (
                  (void 0 === w.topPlayer && (w.topPlayer = {}),
                  void 0 === w.topPlayer.media && (w.topPlayer.media = {}),
                  (T = new psd.media.TopWindowError({
                    id_container: w.player.container,
                    base: w.base,
                    skin: w.skin.udn,
                    width: w.player.width,
                    height: w.player.height,
                    secure: void 0,
                    imgCover: w.topPlayer.media.imgCover ? w.topPlayer.media.imgCover : '',
                  })),
                  'undefined' != typeof mm_base &&
                    ((1 != mm_base && 0 != mm_base) || (mm_base = 'loc'),
                    'string' == typeof mm_base &&
                      (function (e) {
                        var t;
                        switch (e) {
                          case psd.media.LOCAL:
                            (w.base = ''), (t = 'LOCAL');
                            break;
                          case psd.media.INTEGRACION:
                            (w.base = '//playerint.top.prisasd.com'), (t = 'INTEGRACIÓN');
                            break;
                          case psd.media.PRODUCCION:
                            (w.base = '//playertop.elpais.com'), (t = 'PRODUCCIÓN');
                            break;
                          default:
                            t = 'URL BASE PERSONALIZADA: ' + (w.base = e);
                        }
                        'undefined' != typeof mm_simple_compilation
                          ? console.log(
                              '\nENTORNO ' +
                                t +
                                '\nmm_simple_compilation: ' +
                                mm_simple_compilation +
                                '\n'
                            )
                          : console.log('\nENTORNO ' + t + '\n');
                      })(mm_base)),
                  'undefined' != typeof mm_publi &&
                    ((1 != mm_publi && 0 != mm_publi) || (mm_publi = 'loc'),
                    'string' == typeof mm_publi &&
                      (function (e) {
                        var t;
                        switch (e) {
                          case psd.media.LOCAL:
                            (n = ''), (t = 'PUBLICIDAD LOCAL');
                            break;
                          case psd.media.INTEGRACION:
                            (n = '//playerint.top.prisasd.com'), (t = 'PUBLICIDAD INTEGRACIÓN');
                            break;
                          case psd.media.PRODUCCION:
                            (n = '//playertop.elpais.com'), (t = 'PUBLICIDAD PRODUCCIÓN');
                            break;
                          default:
                            t = 'PUBLICIDAD PERSONALIZADA: ' + (n = e);
                        }
                        console.log('\nENTORNO ' + t + '\n');
                      })(mm_publi)),
                  (M = null != w.base && null != w.base && w.base),
                  (function (e) {
                    var t;
                    for (t = 0; t < e.length; t++) {
                      var i, a;
                      (i = document.getElementsByTagName('head')[0]),
                        (a = document.createElement('script')),
                        'undefined' != typeof mm_publi
                          ? (a.src = n + e[t])
                          : (a.src = w.base + e[t]),
                        (a.type = 'text/javascript'),
                        i.appendChild(a);
                    }
                  })([URL_PUBLI, URL_ADBLOCK]),
                  null != w.stats &&
                    null != w.stats.conf &&
                    '' != w.stats.conf &&
                    void 0 === psd.statistics)
                ) {
                  var e = [];
                  e.push(M ? w.base + URL_STATS : URL_STATS);
                  var t = { depends: e, success: r, error: p, scope: this };
                  LibraryManager.load(t);
                } else c();
              },
              r = function () {
                c.apply(this);
              },
              p = function () {
                w.ws.mediaType == VIDEO_MEDIA_TYPE && T.paintMessage(ERROR_CARGA_STATISTICS);
              },
              c = function () {
                (i = w.ws.urlBase),
                  (i = m(i)),
                  (d = w.ws.id_video),
                  (l = w.ws.id_cuenta),
                  u.apply(this);
              },
              m = function (e) {
                return -1 != e.indexOf('http') && (e = '//' + e.split('//')[1]), e;
              },
              u = function () {
                if (void 0 !== s && s.pre_data) g(s.pre_data);
                else {
                  null == w.ws.mediaType && (w.ws.mediaType = VIDEO_MEDIA_TYPE);
                  var e = new psd.framework.parser.JSONParser(),
                    t = new psd.framework.Mediator();
                  t.corsIE(!0),
                    t.addEventListener(psd.framework.MediatorEvent.MEDIATE_COMPLETE, g, this),
                    t.addEventListener(psd.framework.MediatorEvent.MEDIATE_ERROR, E, this),
                    (window.mm_version = 'v2'),
                    (P.url_FAPI =
                      i +
                      '/' +
                      window.mm_version +
                      '/search/' +
                      l +
                      '/' +
                      w.ws.mediaType +
                      '/idref/' +
                      d),
                    void 0 !== P.getEmbed() &&
                      P.getEmbed().format &&
                      (P.url_FAPI += '/' + P.getEmbed().format),
                    t.mediate(P.url_FAPI, e, psd.framework.Mediator.RESPONSE_JSON);
                }
              };
            function S (e, t) {
              var i = !1;
              if (
                (null != R.media.youtube_details &&
                  null != R.media.youtube_details.privacy_status &&
                  void 0 !== R.media.youtube_details.privacy_status &&
                  R.media.youtube_details.privacy_status == n &&
                  (R.media.youtube_privacy_status = n),
                null == typeof e.type ||
                  'YOUTUBE' != e.type.name ||
                  '' == e.src ||
                  'processed' != e.tag ||
                  R.media.youtube_privacy_status == n ||
                  null == R.media.youtube_privacy_status)
              )
                return i;
              if (t.meta_intellectual_property)
                for (meta in t.meta_intellectual_property)
                  'youtube' == t.meta_intellectual_property[meta].name && (i = !0);
              return i;
            }
            this.addSetting = function (e) {
              w = e;
            };
            var _,
              g = function (e) {
                var t = e.result.parserResult;
                if (
                  (void 0 !== P.getEmbed &&
                    void 0 !== P.getEmbed().API &&
                    void 0 !== P.getEmbed().API.onReset &&
                    t &&
                    void 0 !== t.result &&
                    void 0 !== t.result.data &&
                    P.getEmbed().API.onReset(t.result.data),
                  t.code == psd.framework.ParserResult.PARSER_SUCCESS_CODE &&
                    'object' == typeof t.result &&
                    0 < t.result.total)
                )
                  (P.data_FAPI = t.result), v(t.result);
                else {
                  w.ws.mediaType == VIDEO_MEDIA_TYPE &&
                    T.paintMessage(psd.media.TopLauncherEvent.EVENT_ERROR);
                  var i = {};
                  if (
                    ((i.errorType = ERROR_SERVICIO_MEDIA),
                    this.dispatchEvent(
                      new psd.media.TopLauncherEvent(psd.media.TopLauncherEvent.EVENT_ERROR, i)
                    ),
                    'undefined' != typeof mm_force_playlist)
                  ) {
                    void 0 === w.player && (w.player = {}),
                      (w.player.autoplay = !1),
                      void 0 === w.topPlayer
                        ? ((w.topPlayer = {}), (w.topPlayer.ad = {}))
                        : void 0 === w.topPlayer.ad && (w.topPlayer.ad = {}),
                      (w.topPlayer.ad.enabled = !1),
                      void 0 === w.skin && (w.skin = {});
                    var a = {
                      data: [
                        {
                          url_thumbnail: '',
                          vigency: [],
                          isdvr: !(w.skin.id = 'transparent'),
                          description: '',
                          asset: [],
                          status: { id: 4, name: 'COMPLETED' },
                          youtube_privacy_status: 'unlisted',
                          url_mosaic: '',
                          id_external: null,
                          season: null,
                          meta_intellectual_property: [],
                          geo_location: '',
                          active: !0,
                          tags_externals: [],
                          islive: !1,
                          id: 0,
                          author: '',
                          chapter: null,
                          name: '',
                          length: 0,
                          playlist: [],
                          idref: '',
                          tags: [],
                          provider: { id: 1, name: 'Prisadigital' },
                          id_contract: '',
                          url_video_still: '',
                          ptags: null,
                          youtube_details: {
                            id: 5982,
                            category: 17,
                            youtube_video_title: null,
                            asset_type: null,
                            playlist: null,
                            channel: null,
                            publish_at: null,
                          },
                        },
                      ],
                      total: 1,
                    };
                    (P.data_FAPI = a),
                      v(a),
                      this.dispatchEvent(
                        new psd.media.TopLauncherEvent(psd.media.TopLauncherEvent.EVENT_ERROR, i)
                      ),
                      (mm_force_playlist = 2);
                  }
                }
                'undefined' != typeof mm_youbora && mm_youbora && P.getEmbed().load_Youbora();
              },
              E = function (e) {
                w.ws.mediaType == VIDEO_MEDIA_TYPE && T.paintMessage(ERROR_PARSER);
                var t = {};
                (t.errorType = ERROR_SERVICIO_MEDIA),
                  this.dispatchEvent(
                    new psd.media.TopLauncherEvent(psd.media.TopLauncherEvent.EVENT_ERROR, t)
                  );
              },
              v =
                ((_ = this),
                function (e) {
                  h.apply(_, [e]);
                }),
              h = function (a) {
                a = a.data[0];
                var e,
                  t,
                  i = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
                    navigator.userAgent.toLowerCase()
                  ),
                  n = (navigator.userAgent.match(/iPhone/i), []);
                (t = (R = w).ws.mediaType == AUDIO_MEDIA_TYPE ? 'audio/mp3' : 'video/mp4'),
                  null != a.description &&
                    null != a.description &&
                    (a.description = a.description.replace(/<[^>]*>?/g, ''));
                try {
                  if (
                    ((R.id = a.idref),
                    (R.media = {
                      type: t,
                      title: null != a.name ? a.name : '',
                      desc: null != a.description ? a.description : '',
                      author: null != a.author ? a.author : '',
                      date: null != a.created_at ? a.created_at.split(' ')[0] : '',
                      duration: null != a.length ? a.length : '',
                      live: null != a.islive && a.islive,
                      isDvr: null != a.isdvr && a.isdvr,
                      cdn: { provider: '' },
                      tags: null != a.tags ? a.tags : void 0,
                      urlMosaic: a.url_mosaic,
                      chapter: a.chapter,
                      season: a.season,
                      geo_location: a.geo_location,
                      youtube_privacy_status: a.youtube_privacy_status,
                      id_contract: null != a.id_contract ? a.id_contract : '',
                      details: null != a.details ? a.details : null,
                      tags_externals: null != a.tags_externals ? a.tags_externals : '',
                      youtube_details: null != a.youtube_details ? a.youtube_details : null,
                      station_id: null != a.station_id ? a.station_id : '',
                    }),
                    w.ws.mediaType == AUDIO_MEDIA_TYPE
                      ? (R.media.poster = null != a.url_audio_still ? a.url_audio_still : '')
                      : ((R.media.poster = null != a.url_video_still ? a.url_video_still : ''),
                        void 0 !== window.mm_poster &&
                          '' != window.mm_poster &&
                          (R.media.poster = window.mm_poster)),
                    (R.media.poster_thumbnail = null != a.url_thumbnail ? a.url_thumbnail : ''),
                    void 0 !== R.topPlayer &&
                      void 0 !== R.topPlayer.media &&
                      void 0 !== R.topPlayer.media.custom_cover &&
                      null != R.topPlayer.media.custom_cover &&
                      '' != R.topPlayer.media.custom_cover &&
                      (R.media.poster = R.topPlayer.media.custom_cover),
                    a.provider.id == ID_PROVIDER_AKAMAIHD
                      ? ((R.media.cdn.provider = CONTROLLER_TYPE_AKAMAIHD),
                        (R.media.clipBegin = '1418403600000'),
                        (R.media.clipEnd = '1418418900000'),
                        (R.media.absolute = !0))
                      : (R.media.cdn.provider = CONTROLLER_TYPE_AKAMAIHDS),
                    (R.id_provider = a.provider.id),
                    (R.id_external = a.id_external),
                    0 < a.asset.length)
                  )
                    for (_asset in ((P.isExternal = !1), a.asset))
                      void 0 !== a.asset[_asset].type &&
                        null != a.asset[_asset].type &&
                        void 0 !== a.asset[_asset].type.name &&
                        null != a.asset[_asset].type.name &&
                        ('YOUTUBE' == a.asset[_asset].type.name
                          ? S(a.asset[_asset], a) &&
                            ((R.id_provider = ID_PROVIDER_YT),
                            (R.id_external = a.asset[_asset].src),
                            (P.isExternal = !0))
                          : 'TRITON' == a.asset[_asset].type.name &&
                            ((R.id_provider = ID_PROVIDER_TRITON),
                            (R.id_external = a.asset[_asset].src),
                            (P.isExternal = !0)));
                  if (
                    ((R.eskup = { idEskup: null != a.id_es_kup ? a.id_es_kup : '' }),
                    (R.media.srcHTML5 = []),
                    0 < a.playlist.length)
                  ) {
                    void 0 !== R.skin &&
                      void 0 !== R.skin.maxbitrate &&
                      0 != R.skin.maxbitrate &&
                      a.playlist.forEach(function (e, t) {
                        a.playlist[t].url = bitRateparse(e.url, R.skin.maxbitrate);
                      });
                    for (var o = 0; o < a.playlist.length; o++) {
                      if (
                        void 0 !== w &&
                        void 0 !== w.topPlayer &&
                        void 0 !== w.topPlayer.media &&
                        void 0 !== w.topPlayer.media.dist
                      ) {
                        var s = w.topPlayer.media.dist,
                          r = '?';
                        a.playlist[o].url &&
                          (0 < a.playlist[o].url.indexOf('?') && (r = '&'),
                          a.isLive || (a.playlist[o].url += r + 'dist=' + s));
                      }
                      a.playlist[o].type_url.name == _TYPE_FLASH
                        ? (R.media.src = a.playlist[o].url)
                        : a.playlist[o].type_url.name == _TYPE_IOS &&
                          ((i && (!i || ('video' != R.skin.mode && null != R.skin.mode))) ||
                            R.media.srcHTML5.push(a.playlist[o].url));
                    }
                  }
                  if (
                    void 0 !== w &&
                    void 0 !== w.topPlayer &&
                    void 0 !== w.topPlayer.media &&
                    void 0 !== w.topPlayer.media.dist &&
                    ((s = w.topPlayer.media.dist), 0 < a.asset.length)
                  )
                    for (var d = 0; d < a.asset.length; d++) {
                      (r = '?'),
                        a.asset[d].src &&
                          (0 < a.asset[d].src.indexOf('?') && (r = '&'),
                          a.asset[d].type
                            ? 'YOUTUBE' != a.asset[d].type.name &&
                              (a.isLive || (a.asset[d].src += r + 'dist=' + s))
                            : a.isLive || (a.asset[d].src += r + 'dist=' + s));
                      for (var l = 0; l < a.asset[d].url.length; l++)
                        (r = '?'),
                          a.asset[d].url[l].url &&
                            (0 < a.asset[d].url[l].url.indexOf('?') && (r = '&'),
                            -1 < a.asset[d].url[l].url.indexOf('youtube') ||
                              a.isLive ||
                              (a.asset[d].url[l].url += r + 'dist=' + s));
                    }
                  if (((A = !1), 0 < a.asset.length))
                    for (d = 0; d < a.asset.length; d++)
                      if (((a.asset[d].custom = !1), void 0 === a.asset[d].type))
                        a.asset[d].custom = !0;
                      else if (
                        null == a.asset[d].type ||
                        'CUSTOM' == a.asset[d].type.name ||
                        '' == a.asset[d].type
                      )
                        a.asset[d].custom = !0;
                      else {
                        function p (e) {
                          if (
                            e &&
                            ((A = !0),
                            (R.id_provider = ID_PROVIDER_YT),
                            (R.id_external = a.asset[d].src),
                            (R.skin.id = 'transparent'),
                            void 0 === R.ads && (R.ads = {}),
                            (R.ads.enabled = !1),
                            void 0 === R.topPlayer && (R.topPlayer = {}),
                            void 0 === R.topPlayer.media && (R.topPlayer.media = {}),
                            void 0 === R.topPlayer.media.YTiFrame &&
                              ((R.topPlayer.media.YTiFrame = {}),
                              (R.topPlayer.media.YTiFrame = !0)),
                            'undefined' == typeof mm_ytload)
                          ) {
                            window.mm_ytload = !1;
                            var t = document.createElement('script'),
                              i = document.createTextNode(
                                'function onYouTubePlayerAPIReady(){mm_ytload = true;}'
                              );
                            t.appendChild(i), document.body.appendChild(t);
                          }
                        }
                        (void 0 !== R.media.youtube_privacy_status &&
                          'unlisted' != R.media.youtube_privacy_status) ||
                          (R.media.youtube_privacy_status = 'public'),
                          R.id_provider == ID_PROVIDER_YT &&
                            ((O = !0),
                            null != a.id_external && null == a.asset[d].tag
                              ? p(O)
                              : null != a.asset[d].tag && p(O));
                      }
                  else
                    void 0 === R.topPlayer && (R.topPlayer = {}),
                      void 0 === R.topPlayer.media && (R.topPlayer.media = {}),
                      void 0 === R.topPlayer.media.YTiFrame &&
                        ((R.topPlayer.media.YTiFrame = {}), (R.topPlayer.media.YTiFrame = !1));
                  if (!A && 0 == P.isExternal) {
                    if (0 < a.asset.length) {
                      for (var c = {}, m = 0; m < a.asset.length; m++)
                        a.asset[m].custom &&
                          (null == c.bitrate || a.asset[m].bitrate < c.bitrate) &&
                          ((c.index = m), (c.bitrate = a.asset[m].bitrate));
                      for (var u = 0; u < a.asset[c.index].url.length; u++)
                        a.asset[c.index].custom &&
                          (0 == a.playlist.length &&
                            a.asset[c.index].url[u].type_url.name == _TYPE_IOS &&
                            ((srcIOS = a.asset[c.index].url[u].url),
                            R.media.srcHTML5.push(srcIOS)),
                          a.asset[c.index].url[u].type_url.name == _TYPE_UDS
                            ? ((e = a.asset[c.index].url[u].url), R.media.srcHTML5.push(e))
                            : a.asset[c.index].url[u].type_url.name == _TYPE_FLASH &&
                              R.id_provider == ID_PROVIDER_GENERIC &&
                              (R.media.src = a.asset[c.index].url[u].url));
                      0 == R.media.srcHTML5.length &&
                        void 0 !== R.media.src &&
                        R.media.srcHTML5.push(R.media.src);
                    }
                    if (0 < a.asset.length) {
                      for (var _ = 0; _ < a.asset.length; _++)
                        if (a.asset[_].custom) {
                          var g = {};
                          (g.assetBitrate = a.asset[_].bitrate),
                            (g.assetHeight = a.asset[_].height),
                            n.push(g);
                        }
                      if (0 < n.length) {
                        n = n.sort(function (e, t) {
                          return parseFloat(e.assetBitrate) - parseFloat(t.assetBitrate);
                        });
                        var E = NAME_HEIGHT;
                        for (R.media.renditions = [], o = 0; o < n.length; o++)
                          E == NAME_BITRATE
                            ? R.media.renditions.push(n[o].assetBitrate + 'bps')
                            : E == NAME_HEIGHT && R.media.renditions.push(n[o].assetHeight + 'p');
                      }
                    }
                  }
                  if (void 0 !== R.media.srcHTML5 && 0 < R.media.srcHTML5.length)
                    for (var o in R.media.srcHTML5)
                      0 < (v = R.media.srcHTML5[o]).indexOf('.m3u8') &&
                        (i || this.hlsIsSupported()) &&
                        (R.media.src = v);
                  var v, h;
                  if (
                    (R.id_provider != ID_PROVIDER_TRITON &&
                      R.id_provider != ID_PROVIDER_YT &&
                      void 0 !== R.media.src &&
                      0 < (v = R.media.src).indexOf('.m3u8') &&
                      (R.id_provider = ID_PROVIDER_HLS),
                    void 0 !== R.media.src &&
                      ((R.id_provider == ID_PROVIDER_HLS &&
                        (!1 === this.hlsIsSupported() || void 0 === this.hlsIsSupported())) ||
                        0 < R.media.src.indexOf('.f4m')))
                  ) {
                    var f = document.createElement('script');
                    (f.src = w.base + '/psdmedia/resources/js/ext/swfobject/swfobject.js'),
                      document.querySelector('head').appendChild(f);
                  }
                  for (
                    null != R.ads && null != a.ptags && null != a.ptags && (R.ads.pTags = a.ptags),
                      R.player.mode = i ? 'html5,directlink' : 'flash',
                      I = [],
                      o = 0;
                    o < n.length;
                    o++
                  )
                    (h = { label: n[o].assetHeight + 'p', bitrate: n[o].assetBitrate + 'bps' }),
                      I.push(h);
                  if (b) D.apply(this);
                  else {
                    var y = {
                      depends: M ? w.base + URL_TOP_PLAYER : URL_TOP_PLAYER,
                      success: L,
                      error: N,
                      scope: this,
                    };
                    'undefined' == typeof mm_top_compilation
                      ? LibraryManager.load(y)
                      : D.apply(this);
                  }
                } catch (e) {
                  w.ws.mediaType == VIDEO_MEDIA_TYPE && T.paintMessage();
                }
              },
              L = function () {
                D.apply(this);
              },
              D = function () {
                var e;
                switch (
                  ((e = R.topPlayer ? R.topPlayer : {}).social || (e.social = {}),
                  (e.social.eskupData = R.eskup),
                  e.generic || (e.generic = {}),
                  (e.generic.container = R.player.container),
                  (e.generic.id = R.player.container.replace('.', '_') + '_TopPlayer'),
                  (e.generic.width = R.player.width),
                  (e.generic.height = R.player.height),
                  (e.generic.urlBase = R.base),
                  (e.generic.id_player = R.extra.id),
                  (e.generic.id_cuenta = R.ws.id_cuenta),
                  e.ui || (e.ui = {}),
                  (e.ui.skin = R.skin.id),
                  (e.ui.poster = R.media.poster),
                  (e.ui.posterThumbnail = R.media.poster_thumbnail),
                  (e.ui.bgColor = R.player.bgColor),
                  (e.ui.skinData = R.skin),
                  (e.ui.absoluteTime = R.media.absoluteTime),
                  (e.ui.overrideNativeControls = R.skin.html5),
                  (e.ui.showPreview = !1),
                  e.ad || (e.ad = {}),
                  void 0 !== e.ad.enabled && void 0 !== R.ads && (R.ads.enabled = e.ad.enabled),
                  void 0 !== R.ads
                    ? void 0 !== R.ads.enabled
                      ? R.ads.enabled
                        ? (R.ads.enabled = !0)
                        : (R.ads.enabled = !1)
                      : (R.ads.enabled = !0)
                    : ((R.ads = {}), (R.ads.enabled = !1)),
                  A && (R.ads.enabled = !1),
                  R.ads.enabled
                    ? ((e.ad.enabledYouTube = R.ads.enabled),
                      R.ads.conf && (e.ad.conf = R.ads.conf),
                      R.ads.pTags && (e.ad.pTags = R.ads.pTags),
                      R.ads.enabled && (e.ad.enabled = R.ads.enabled))
                    : ((e.ad.enabledYouTube = e.ad.enabled), (e.ad.enabled = !1)),
                  e.media || (e.media = {}),
                  'undefined' != typeof mm_autoplay && (mm_autoplay = !0),
                  R.id_provider)
                ) {
                  case ID_PROVIDER_TRITON:
                    getDevice().mobile && 'undefined' != typeof mm_autoplay && (mm_autoplay = !1),
                      (e.media.id = R.id_external),
                      (e.media.idTOP = R.id),
                      (e.media.provider = 'triton'),
                      R.media.live
                        ? ((e.media.controllerPriority = [
                            emic.top.MediaModule.CONTROLLER_TYPE_TRITON,
                          ]),
                          (e.media.tecPriorityPC = [emic.top.MediaModule.TECHNOLOGY_HTML5]))
                        : (e.media.controllerPriority = [
                            emic.top.MediaModule.CONTROLLER_TYPE_AKAMAIHD,
                          ]);
                    break;
                  case ID_PROVIDER_GENERIC:
                    (e.media.id = R.id),
                      (e.media.idTOP = R.id),
                      (e.media.url = R.media.src),
                      (e.media.urlHTML5 = R.media.srcHTML5),
                      (e.media.controllerPriority = [
                        emic.top.MediaModule.CONTROLLER_TYPE_HTML5NATIVE,
                      ]),
                      (e.media.tecPriorityPC = [emic.top.MediaModule.TECHNOLOGY_HTML5]),
                      (e.media.provider = 'generic');
                    break;
                  case ID_PROVIDER_PRISADIGITAL:
                  case ID_PROVIDER_BRIGHTCOVE:
                    (e.media.id = R.id),
                      (e.media.idTOP = R.id),
                      (e.media.url = R.media.src),
                      (e.media.urlHTML5 = R.media.srcHTML5),
                      (e.media.controllerPriority = [
                        emic.top.MediaModule.CONTROLLER_TYPE_HTML5NATIVE,
                      ]),
                      (e.media.tecPriorityPC = [emic.top.MediaModule.TECHNOLOGY_HTML5]),
                      (e.media.provider = 'prisadigital');
                    break;
                  case ID_PROVIDER_YT:
                    (e.media.id = R.id_external),
                      (e.media.idTOP = R.id),
                      (e.media.controllerPriority = [emic.top.MediaModule.CONTROLLER_TYPE_YT]),
                      (e.media.tecPriorityPC = [emic.top.MediaModule.TECHNOLOGY_HTML5]),
                      (e.media.provider = 'youtube'),
                      (e.ui.skin = 'transparent'),
                      (e.ad.enabled = !1),
                      (mm_autoplay = void 0);
                    break;
                  case ID_PROVIDER_DM:
                    (e.media.id = R.id_external),
                      (e.media.idTOP = R.id),
                      (e.media.controllerPriority = [emic.top.MediaModule.CONTROLLER_TYPE_DM]),
                      (e.media.tecPriorityPC = [emic.top.MediaModule.TECHNOLOGY_HTML5]),
                      (e.media.provider = 'dailymotion');
                    break;
                  case ID_PROVIDER_HLS:
                    (e.media.id = R.id),
                      (e.media.idTOP = R.id),
                      (e.media.url = R.media.src),
                      (e.media.urlHTML5 = R.media.srcHTML5),
                      this.hlsIsSupported()
                        ? (e.media.controllerPriority = [
                            emic.top.MediaModule.CONTROLLER_TYPE_REAL_HLS,
                          ])
                        : (e.media.controllerPriority = [
                            emic.top.MediaModule.CONTROLLER_TYPE_HLS,
                          ]),
                      (e.media.provider = 'hls');
                    break;
                  default:
                    (e.media.id = R.id),
                      (e.media.idTOP = R.id),
                      (e.media.url = R.media.src),
                      (e.media.urlHTML5 = R.media.srcHTML5),
                      (e.media.provider = 'default'),
                      (e.media.controllerPriority = [
                        emic.top.MediaModule.CONTROLLER_TYPE_HTML5NATIVE,
                      ]);
                }
                if (
                  (null != R.player.autoplay
                    ? (e.media.autoplay = R.player.autoplay)
                    : null == e.media.autoplay && (e.media.autoplay = !1),
                  (e.media.wmode = R.player.wmode),
                  (e.media.title = R.media.title),
                  (e.media.description = R.media.desc),
                  (e.media.isLive = R.media.live),
                  (e.media.isDVR = R.media.isDvr),
                  (e.media.clipBegin = R.media.clipBegin),
                  (e.media.clipEnd = R.media.clipEnd),
                  (e.media.absolute = R.media.absolute),
                  (e.media.author = R.media.author),
                  (e.media.date = R.media.date),
                  (e.media.duration = R.media.duration),
                  (e.media.urlMosaic = R.media.urlMosaic),
                  (e.media.chapter = R.media.chapter),
                  (e.media.season = R.media.season),
                  (e.media.geo_location = R.media.geo_location),
                  (e.media.youtube_privacy_status = R.media.youtube_privacy_status),
                  (e.media.details = R.media.details),
                  (e.media.youtube_details = R.media.youtube_details),
                  (e.media.station_id = R.media.station_id),
                  void 0 !== e.media.station_id &&
                    null != e.media.station_id &&
                    '' != e.media.station_id)
                ) {
                  if (void 0 !== e.media.urlHTML5)
                    for (var t = 0; t < e.media.urlHTML5.length; t++) {
                      var i = 0 < e.media.urlHTML5[t].indexOf('?') ? '&' : '?';
                      e.media.urlHTML5[t] += i + 'stid=' + e.media.station_id;
                    }
                  void 0 !== e.media.url &&
                    ((i = 0 < e.media.url.indexOf('?') ? '&' : '?'),
                    (e.media.url += i + 'stid=' + e.media.station_id));
                }
                e.media.isLive && (e.media.defaultLive = e.media.idTOP),
                  null != R.security &&
                    ((e.media.authParams = R.security.authParams),
                    (e.media.authParamsHTML5 = R.security.authParamsHTML5)),
                  (e.media.mimetype = R.media.type),
                  (e.media.renditions = I),
                  (e.media.tags = {}),
                  (e.media.tags.canal = C.apply(this, ['Canal'])),
                  (e.media.tags.programa = C.apply(this, ['P'])),
                  (e.media.tags.emisora = C.apply(this, ['E'])),
                  (e.media.tags.seccion = C.apply(this, ['S'])),
                  (e.media.tags.tematica = C.apply(this, ['T'])),
                  (e.media.tags.cp = k.apply(this)),
                  (e.media.tags.tematicaParent = C.apply(this, ['W'])),
                  (e.media.tags.tagContrato = C.apply(this, ['contrato'])),
                  (e.media.tags.allTags = x.apply(this, [e.media.tags])),
                  (e.media.tags.allTagsList = U(e.media.tags.allTags)),
                  (e.media.tags.tagsArrayExternal = y()),
                  (e.media.tags.externals = V(R.media.tags_externals)),
                  (e.media.tags.iptc = B(R.media.tags_externals)),
                  (e.media.tags.iab = H(R.media.tags_externals)),
                  (e.media.tags.youbora = R.media.tags),
                  (e.media.tags.tagsNoticiasId = j(R.topPlayer.media.tags_noticia_array)),
                  e.stat || (e.stat = {}),
                  null != R.stats && null != R.stats.conf && '' != R.stats.conf
                    ? ((e.stat.conf = R.stats.conf),
                      e.stat.extraData || (e.stat.extraData = {}),
                      (e.stat.extraData.canal = e.media.tags.canal),
                      (e.stat.extraData.programa = e.media.tags.programa),
                      (e.stat.extraData.emisora = e.media.tags.emisora),
                      (e.stat.extraData.seccion = e.media.tags.seccion),
                      (e.stat.extraData.tematica = e.media.tags.tematica),
                      (e.stat.extraData.tematicaParent = e.media.tags.tematicaParent),
                      (e.stat.extraData.tipoContenido = 'Programa'),
                      (e.stat.extraData.idTop = R.id),
                      (e.stat.extraData.playerName = R.extra.description),
                      (e.stat.extraData.tags = e.media.tags.allTags),
                      (e.stat.extraData.tagsList = e.media.tags.allTagsList),
                      (e.stat.extraData.id_contract = R.media.id_contract),
                      (e.stat.extraData.tags_externals = e.media.tags.externals),
                      (e.stat.extraData.tagContrato = e.media.tags.tagContrato))
                    : (e.stat.enabled = !1),
                  'undefined' != typeof mm_autoplay_disable &&
                    1 == mm_autoplay_disable &&
                    (mm_autoplay_disable = b = !1),
                  ('undefined' != typeof mm_autoplay && 1 == mm_autoplay) ||
                    ('undefined' != typeof mm_playlist_no_reset &&
                      1 == mm_playlist_no_reset &&
                      (mm_playlist_no_reset = b = !1)),
                  b
                    ? ((b = !1), null != o && o.load(e))
                    : ((o = new emic.top.TopPlayer()).addEventListener(
                        emic.top.event.TopEvent.ON_READY,
                        f,
                        this
                      ),
                      'youtube' == e.media.provider && void 0 !== e.media.cover && e.media.cover,
                      o.init(e),
                      'function' == typeof o.setLauncher && o.setLauncher(this));
              },
              f = function () {
                this.dispatchEvent(
                  new psd.media.TopLauncherEvent(psd.media.TopLauncherEvent.EVENT_INI)
                );
              },
              N = function () {
                w.ws.mediaType == VIDEO_MEDIA_TYPE && T.paintMessage(ERROR_CARGA_TOP_PLAYER);
              },
              y = function () {
                var e = [];
                if (null != R.media.tags_externals && 0 < R.media.tags_externals.length)
                  for (var t = 0; t < R.media.tags_externals.length; t++)
                    e[e.length] = {
                      id: R.media.tags_externals[t].id,
                      name: R.media.tags_externals[t].name,
                    };
                return e;
              },
              C = function (e) {
                var t = '';
                if (null == R.media.tags) return '';
                if (0 < R.media.tags.length) {
                  for (var i = 0; i < R.media.tags.length; i++)
                    R.media.tags[i].type == e &&
                      (t += '' == t ? R.media.tags[i].name : ',' + R.media.tags[i].name);
                  return t;
                }
                return '';
              },
              k = function () {
                var e = '';
                if (null == R.media.tags) return '';
                if (0 < R.media.tags.length) {
                  for (var t = 0; t < R.media.tags.length; t++)
                    'CP' == R.media.tags[t].type &&
                      null == R.media.tags[t].tag_parent &&
                      (e += '' == e ? R.media.tags[t].name : ',' + R.media.tags[t].name);
                  return e;
                }
                return '';
              },
              x = function (e) {
                var t = '';
                for (tagName in e)
                  '' != e[tagName] &&
                    ' ' != e[tagName] &&
                    (t += '' == t ? e[tagName] : ',' + e[tagName]);
                return t;
              },
              U = function (e) {
                return e.replace(/,/gi, ';');
              },
              B = function (e) {
                var t = [];
                if ('' != e)
                  for (var i = 0; i < e.length; i++)
                    '' != e[i].cod_iptc &&
                      null != e[i].cod_iptc &&
                      void 0 !== e[i].cod_iptc &&
                      t.push(e[i].cod_iptc);
                return t.join(',');
              },
              H = function (e) {
                var t = [];
                if ('' != e)
                  for (var i = 0; i < e.length; i++)
                    '' != e[i].cod_iab &&
                      null != e[i].cod_iab &&
                      void 0 !== e[i].cod_iab &&
                      t.push(e[i].cod_iab);
                return t.join(',');
              },
              V = function (e) {
                if ('' == e) return '';
                var t = '',
                  i = ';';
                for (a in e) a == e.length - 1 && (i = ''), (t += e[a].idref + i);
                return t;
              },
              j = function (e) {
                if ('' == e) return '';
                var t = '',
                  i = ',';
                for (a in e) a == e.length - 1 && (i = ''), (t += e[a].id + i);
                return t;
              };
            (this.getMediaPlayer = function () {
              if (o) return o;
            }),
              (this.reset = function (e, t, i, a) {
                for (var n in (null == e && (e = w.ws.urlBase), a)) {
                  var o = a[n];
                  if (null != w[n])
                    for (var s in o) {
                      var r = o[s];
                      void 0 !== w[n][s] && (w[n][s] = r);
                    }
                }
                (b = !0), (l = t), (d = i), u.apply(this);
              }),
              (this.setRatio = function (e, t, i) {
                o.setRatio(e, t, i);
              }),
              (this.hlsIsSupported = function () {
                var e = (window.MediaSource = window.MediaSource || window.WebKitMediaSource),
                  t = (window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer),
                  i =
                    e &&
                    'function' == typeof e.isTypeSupported &&
                    e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                  a =
                    !t ||
                    (t.prototype &&
                      'function' == typeof t.prototype.appendBuffer &&
                      'function' == typeof t.prototype.remove);
                return i && a;
              });
          }
          (t.prototype = new psd.framework.EventDispatcher()),
            (e.INTEGRACION = 'int'),
            (e.PRODUCCION = 'pro'),
            (e.LOCAL = 'loc'),
            (window.mm_version = 'v1'),
            (e.TopLauncher = t);
        })(psd.media),
        (function (e) {
          function t (n, e) {
            var m = this,
              t = null,
              o = null;
            (this.onInit = function (e) {}),
              (this.a_name = ''),
              void 0 !== n && (this.a_name = n.id_player + '_' + n.id_media),
              (this.settings_pre = {}),
              (function () {
                if ('undefined' != typeof mm_cookiesync) {
                  var e = '';
                  if (
                    (void 0 !== n && (e = n.id_cuenta),
                    'undefined' != typeof mm_demo && (e = 'demo'),
                    '' != e)
                  ) {
                    var t = '//fapi-top.prisasd.com/short/' + e + '/accountstationid',
                      i = new psd.framework.parser.JSONParser(),
                      a = new psd.framework.Mediator();
                    a.corsIE(!0),
                      (onDataCompleteSSDD_CS = function (e) {
                        if (
                          (void 0 === e.result.parserResult.result.success ||
                            0 != e.result.parserResult.result.success) &&
                          e.result.parserResult.result.data[0].station_id
                        ) {
                          var t = e.result.parserResult.result.data[0].station_id;
                          'undefined' != typeof mm_demo && (t = 167083),
                            '' != t &&
                              (function (e) {
                                if ('audio' == n.media_type)
                                  switch (n.id_cuenta) {
                                    case 'elpais':
                                    case 'diarioas':
                                    case 'elcomidista':
                                    case 'smoda':
                                    case 'motor':
                                    case 'verne':
                                    case 'cincodias':
                                    case 'retina':
                                      break;
                                    default:
                                      if ('object' != typeof tdIdsync) {
                                        var t = '';
                                        'undefined' != typeof PBS &&
                                          void 0 !== PBS.slm &&
                                          void 0 !== PBS.slm.cf &&
                                          void 0 !== PBS.slm.cf.consent &&
                                          (t = PBS.slm.cf.consent);
                                        var i = document.createElement('script');
                                        (i.type = 'text/javascript'),
                                          (i.src =
                                            'https://playerservices.live.streamtheworld.com/api/idsync.js?stationId=' +
                                            e +
                                            '&gdpr=1&gdpr_consent=' +
                                            t),
                                          (i.onload = function () {
                                            'undefined' != typeof mm_demo &&
                                              mm_demo &&
                                              console.log(
                                                '%cCookie Sync loaded',
                                                'font-weight:bold;color:orange'
                                              );
                                          });
                                        var a = document.getElementsByTagName('script')[0];
                                        a.parentNode.insertBefore(i, a);
                                      }
                                  }
                              })(t);
                        }
                      }),
                      (onDataErrorSSDD_CS = function () {}),
                      a.addEventListener(
                        psd.framework.MediatorEvent.MEDIATE_COMPLETE,
                        onDataCompleteSSDD_CS,
                        this
                      ),
                      a.addEventListener(
                        psd.framework.MediatorEvent.MEDIATE_ERROR,
                        onDataErrorSSDD_CS,
                        this
                      ),
                      a.mediate(t, i, psd.framework.Mediator.RESPONSE_JSON);
                  }
                }
              })(),
              psd.framework.EventDispatcher.call(this),
              (this.className = 'psd.media.TopEmbed'),
              (this.pluginsList = {}),
              (this.plugins = {}),
              (this.base = ''),
              (URL_BASE_DEV = '//webfastapi.top.des.prisadigital.int'),
              (URL_BASE_PRO = '//fapi-top.prisasd.com'),
              (MEDIA_TYPE_VIDEO = 'video'),
              (MIN_PLAYER_WIDTH = 320),
              (ERROR_PARSER = 'Error Code #1'),
              (ERROR_SERVICIO_PLAYER = 'Error_servicio_player'),
              (ERROR_SERVICIO_MEDIA = 'Error_servicio_media'),
              (URL_EMBED_PLAYER = 'instanceplayer.prisasd.com');
            var r = n;
            this.iniSettings = r;
            var a,
              i,
              u,
              s,
              d,
              l,
              p = !1,
              c = !1;
            (this.playList = void 0),
              (emic.top.debug = function (e, t, i) {
                if (
                  emic.top.debugTop ||
                  (function (e) {
                    var t = !1;
                    if (
                      void 0 !== window.mm_debug &&
                      '' != window.mm_debug &&
                      0 != window.mm_debug &&
                      '0' != window.mm_debug
                    ) {
                      (t = !0), (window.mm_debug += '');
                      var i = window.mm_debug.split('|');
                      if (void 0 !== e)
                        for (var a in ((t = !1), (e = e.split('|'))))
                          for (var n in i) (e[a] != i[n] && 'all' != i[n]) || (t = !0);
                      else for (var n in ((t = !1), i)) 'all' == i[n] && (t = !0);
                    }
                    return t;
                  })(i)
                ) {
                  var a = new Date(),
                    n = '[' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() + ']' + e;
                  null != typeof console &&
                    (console.log
                      ? console.log(n, t || '')
                      : console.debug && console.debug(n, t || ''));
                  var o = document.getElementById(emic.top.externalConsole);
                  if (o) {
                    var s;
                    if ('object' == typeof t)
                      for (var r in ((s = '\n'), t)) s += '  --> ' + r + ': ' + t[r] + '\n';
                    else s = null == t ? '' : t;
                    o.innerHTML =
                      o.innerHTML +
                      '[' +
                      a.getHours() +
                      ':' +
                      a.getMinutes() +
                      ':' +
                      a.getSeconds() +
                      ']' +
                      e +
                      s +
                      '\n';
                  }
                }
              });
            var _ = function () {
              new psd.media.TopEmbedManager().addEmbed(this),
                this.removeEventListener(psd.media.TopEmbedEvent.EVENT_INI, _, this);
            };
            function g () {
              if (null != r) {
                if (
                  ((o =
                    'undefined' != typeof JSON &&
                    void 0 !== JSON.parse &&
                    void 0 !== JSON.stringify
                      ? JSON.parse(JSON.stringify(r))
                      : r),
                  void 0 !== psdgetgetpsd &&
                    (psdgetgetpsd('mm_id_player') && (r.id_player = psdgetgetpsd('mm_id_player')),
                    psdgetgetpsd('mm_id_media') && (r.id_media = psdgetgetpsd('mm_id_media')),
                    psdgetgetpsd('mm_media_type') &&
                      (r.media_type = psdgetgetpsd('mm_media_type'))),
                  void 0 !== r.managerOpt && null !== r.managerOpt)
                ) {
                  var e = new psd.media.TopEmbedManager(),
                    t = r.managerOpt;
                  return delete r.managerOpt, void e.add(r, t, this);
                }
                if (
                  ('object' == typeof r.playList &&
                    '' === r.playList.URL_list &&
                    ((r.playListBAK = r.playList), (r.playList = !0)),
                  'boolean' == typeof r.playList &&
                    !0 === r.playList &&
                    (this.addEventListener(psd.media.TopEmbedEvent.EVENT_INI, v, this),
                    (r.playList = '')),
                  'object' == typeof r.playList && '{}' != JSON.stringify(r.playList))
                ) {
                  var i = n.playList;
                  (r.playList = ''), this.setPlayList(i, r);
                } else {
                  if (null == r.id_container || null == r.id_container || '' == r.id_container) {
                    var a = 'PLAYER_' + (parseInt(1000 * Math.random()) + new Date().getTime());
                    document.write("<div id='" + a + "'></div>"), (r.id_container = a);
                  }
                  (p = null != r.dev && r.dev), P(), f.apply(this), y.apply(this);
                }
              }
            }
            function E () {
              null != this.getSettings() &&
                !0 === this.getSettings().isPlaylist &&
                (this.playList.destroyPlayLists(),
                (this.playList = null),
                (r.isPlaylist = !1),
                (r.playlistUrl = ''));
            }
            void 0 !== r &&
              ('boolean' != typeof e
                ? void 0 === r.managerOpt &&
                  this.addEventListener(psd.media.TopEmbedEvent.EVENT_INI, _, this)
                : e && 'undefined' != r.managerOpt && delete r.managerOpt),
              (this.getManager = function () {
                return t;
              }),
              (this.setManager = function (e) {
                t = e;
              });
            var v = function () {
              if (
                (this.removeEventListener(psd.media.TopEmbedEvent.EVENT_INI, v, this),
                null != this.getMediaPlayer &&
                  null != this.getMediaPlayer().getData &&
                  null != this.getMediaPlayer().getData().mediaData)
              ) {
                var e = this.getMediaPlayer().getData().mediaData.tags.externals;
                if (0 < e.length) {
                  for (var t in (e = e.split(';'))) e[t] = 'tags_externals.idref|' + e[t];
                  e = e.join(',');
                  var i,
                    a =
                      d.ws.urlBase +
                      '/' +
                      window.mm_version +
                      '/search/' +
                      r.id_cuenta +
                      '/' +
                      r.media_type +
                      '/tags?tags=mn(idref|' +
                      r.id_media +
                      ')m(' +
                      e +
                      ')&orderBy=modify_at|desc&size=12&itemIdref=' +
                      r.id_media;
                  'object' == typeof r.playListBAK
                    ? (((i = r.playListBAK).URL_list = a), delete r.playListBAK)
                    : (i =
                        r.media_type == MEDIA_TYPE_VIDEO
                          ? { URL_list: a, nextpanel: { active: !0, time: 5, skin: 'default' } }
                          : { URL_list: a }),
                    delete r.id_media,
                    delete r.playList,
                    this.setPlayList(i, r);
                }
              }
            };
            this.setPlayList = function (e, t) {
              var i;
              void 0 !== this.getMediaPlayer() &&
                void 0 !== this.getMediaPlayer().getMediaModule() &&
                this.getMediaPlayer().getMediaModule().stop(),
                E.apply(this),
                void 0 === e.id_container ||
                  '' == e.id_container ||
                  (null != (i = document.getElementById(e.id_container)) && (i.innerHTML = '')),
                void 0 !== t.id_container &&
                  '' != t.id_container &&
                  null != (i = document.getElementById(t.id_container)) &&
                  (i.innerHTML = ''),
                (this.playList = new psd.media.TopEmbedPlaylist(this, e)),
                'object' == typeof t
                  ? (this.playList.setPlayerSettings(t), this.playList.init())
                  : this.isInitialized()
                  ? this.playList.init()
                  : this.addEventListener(psd.media.TopEmbedEvent.EVENT_INI, h, this);
            };
            var h = function () {
              this.removeEventListener(psd.media.TopEmbedEvent.EVENT_INI, h, this),
                this.playList.init();
            };
            this.getSettings = function (e) {
              return e ? o : r;
            };
            var f = function () {
                i = p ? URL_BASE_DEV : URL_BASE_PRO;
              },
              y = function () {
                var e = new psd.framework.parser.JSONParser(),
                  t = new psd.framework.Mediator();
                t.corsIE(!0),
                  t.addEventListener(psd.framework.MediatorEvent.MEDIATE_COMPLETE, M, this),
                  t.addEventListener(psd.framework.MediatorEvent.MEDIATE_ERROR, T, this),
                  t.mediate(
                    i + '/api/' + r.id_cuenta + '/player/' + r.id_player,
                    e,
                    psd.framework.Mediator.RESPONSE_JSON
                  );
              },
              P = function () {
                r.overwriteWidth
                  ? (width = r.overwriteWidth)
                  : (width = document.getElementById(r.id_container).clientWidth),
                  r.overwriteHeight
                    ? (height = r.overwriteHeight)
                    : (height = document.getElementById(r.id_container).clientHeight),
                  void 0 === r.topPlayer && (r.topPlayer = {}),
                  void 0 === r.topPlayer.media && (r.topPlayer.media = {}),
                  (a = new psd.media.TopWindowError({
                    id_container: r.id_container,
                    id_cuenta: r.id_cuenta,
                    base: r.base,
                    width: width,
                    height: height,
                    secure: r.secure,
                    imgCover: r.topPlayer.media.imgCover ? r.topPlayer.media.imgCover : '',
                  }));
              },
              M = function (e) {
                var t = e.result.parserResult;
                if (t.code == psd.framework.ParserResult.PARSER_SUCCESS_CODE)
                  b.apply(this, [t.result]);
                else {
                  (null != r.media_type && r.media_type != MEDIA_TYPE_VIDEO) ||
                    a.paintMessage(ERROR_PARSER, r);
                  var i = {};
                  (i.errorType = ERROR_SERVICIO_PLAYER),
                    this.dispatchEvent(
                      new psd.media.TopEmbedEvent(psd.media.TopEmbedEvent.EVENT_ERROR, i)
                    );
                }
              },
              T = function (e) {
                (null != r.media_type && r.media_type != MEDIA_TYPE_VIDEO) ||
                  a.paintMessage(ERROR_PARSER, r);
                var t = {};
                (t.errorType = ERROR_SERVICIO_PLAYER),
                  this.dispatchEvent(
                    new psd.media.TopEmbedEvent(psd.media.TopEmbedEvent.EVENT_ERROR, t)
                  );
              },
              b = function (e) {
                if (
                  ((d = e),
                  (this.base = d.base),
                  (this.format = void 0 !== d.ws.format ? d.ws.format : ''),
                  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
                    e.ws.mediaType == MEDIA_TYPE_VIDEO &&
                    (d.player.autoplay = !1),
                  (e.ws.id_video = r.id_media),
                  (e.player.container = r.id_container),
                  void 0 !== r.topPlayer
                    ? void 0 !== r.topPlayer.media &&
                      (null != r.topPlayer.media.autoNext &&
                        (d.player.autoNext = r.topPlayer.media.autoNext),
                      null != r.topPlayer.media.clickPlayList &&
                        (d.player.clickPlayList = r.topPlayer.media.clickPlayList),
                      null != r.topPlayer.media.autoplay &&
                        ((1 != r.topPlayer.media.autoplay && 0 != r.topPlayer.media.autoplay) ||
                          (0 != d.player.autoplay &&
                            (d.player.autoplay = r.topPlayer.media.autoplay))))
                    : (r.topPlayer = {}),
                  void 0 === r.topPlayer.media && (r.topPlayer.media = {}),
                  'undefined' != typeof mm_dist && (r.topPlayer.media.dist = mm_dist),
                  'undefined' != typeof mm_csegid && (r.topPlayer.media.csegid = mm_csegid),
                  void 0 !== psdgetgetpsd &&
                    (null != psdgetgetpsd('mm_base') && (window.mm_base = psdgetgetpsd('mm_base')),
                    null != psdgetgetpsd('mm_AdServer') &&
                      ((window.mm_AdServer = psdgetgetpsd('mm_AdServer')),
                      'google' == psdgetgetpsd('mm_AdServer') &&
                        (window.mm_AdServer =
                          'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator='),
                      'google2' == psdgetgetpsd('mm_AdServer') &&
                        (window.mm_AdServer =
                          'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=')),
                    1 == psdgetgetpsd('mm_noads') && (window.mm_noads = !0),
                    void 0 !== window.mm_noads &&
                      1 == window.mm_noads &&
                      (void 0 === r.topPlayer.ad && (r.topPlayer.ad = {}),
                      (r.topPlayer.ad.enabled = !1)),
                    null != psdgetgetpsd('mm_debug') &&
                      (window.mm_debug = psdgetgetpsd('mm_debug')),
                    null != psdgetgetpsd('mm_force_iphone_ad') && (window.mm_force_iphone_ad = !0),
                    'true' == psdgetgetpsd('mm_autoplay') && (r.topPlayer.media.autoplay = !0),
                    'true' == psdgetgetpsd('mm_premuted') && (r.topPlayer.media.premuted = !0),
                    null != psdgetgetpsd('mm_poster') &&
                      (window.mm_poster = psdgetgetpsd('mm_poster'))),
                  'audio' == r.media_type &&
                    void 0 !== getDevice &&
                    (0 < getDevice().agent.toLowerCase().indexOf('iphone') ||
                      (0 < getDevice().agent.toLowerCase().indexOf('safari') &&
                        -1 == getDevice().agent.toLowerCase().indexOf('chrome'))) &&
                    'undefined' == typeof mm_force_iphone_ad &&
                    (void 0 === r.topPlayer.ad && (r.topPlayer.ad = {}),
                    (window.mm_iphone_ad_disabled = !0),
                    (r.topPlayer.ad.enabled = !1)),
                  r.topPlayer && (e.topPlayer = r.topPlayer),
                  void 0 !== r.isPlaylist &&
                    (void 0 !== r.topPlayer || (r.topPlayer = {}),
                    void 0 !== r.topPlayer.media || (r.topPlayer.media = {}),
                    (r.topPlayer.media.isPlaylist = r.isPlaylist),
                    (r.topPlayer.media.playlistUrl = r.playlistUrl),
                    (e.topPlayer = r.topPlayer)),
                  (void 0 === r.ancho && void 0 === r.alto) ||
                    (void 0 === e.topPlayer && (e.topPlayer = {}),
                    void 0 === e.topPlayer.media && (e.topPlayer.media = {}),
                    (e.topPlayer.media.ancho = r.ancho),
                    (e.topPlayer.media.alto = r.alto)),
                  r.mainPlayer && (e.mainPlayer = r.mainPlayer),
                  r.overwriteWidth && (e.player.width = r.overwriteWidth),
                  r.overwriteHeight && (e.player.height = r.overwriteHeight),
                  null != r.media_type
                    ? (e.ws.mediaType = r.media_type)
                    : (e.ws.mediaType = MEDIA_TYPE_VIDEO),
                  l)
                ) {
                  l = !1;
                  var t = i + '/api';
                  u.addSetting(e), u.reset(t, r.id_cuenta, r.id_media);
                } else
                  (u = new psd.media.TopLauncher()).addSetting(e),
                    u.init(),
                    u.setEmbed(this),
                    u.addEventListener(psd.media.TopLauncherEvent.EVENT_INI, R, this),
                    u.addEventListener(psd.media.TopLauncherEvent.EVENT_ERROR, I, this);
              };
            function R () {
              if (
                ((s = u.getMediaPlayer()),
                void 0 !== r &&
                  (void 0 === r.plugins && (r.plugins = []),
                  (m.pluginsList.KeyWidget = { type: 'KeyWidget', conf: {} })),
                (function () {
                  if (void 0 !== r.plugins) {
                    var e = m.base;
                    void 0 !== r.topPlayer &&
                      void 0 !== r.topPlayer.generic &&
                      void 0 !== r.topPlayer.generic.urlBase &&
                      (e = r.topPlayer.generic.urlBase);
                    var t = '';
                    for (var i in ('undefined' != typeof tplib && (t = '/lib'), r.plugins))
                      m.pluginsList[r.plugins[i].type] = r.plugins[i];
                    for (var i in (emic.top.debug('PLUGINS', m.pluginsList), m.pluginsList))
                      if (m.pluginsList[i].disabled && 1 == m.pluginsList[i].disabled)
                        void 0 !== m.pluginsList[m.pluginsList[i].type] &&
                          delete m.pluginsList[m.pluginsList[i].type];
                      else if (
                        'FloatingPlayerWidget' != m.pluginsList[i].type ||
                        ('FloatingPlayerWidget' == m.pluginsList[i].type && !match_UA('macintosh'))
                      ) {
                        var a = document.createElement('script');
                        (a.type = 'text/javascript'),
                          (a.src =
                            e +
                            '/psdmedia/media/top/widgets/' +
                            m.pluginsList[i].type +
                            t +
                            '/' +
                            m.pluginsList[i].type +
                            '.js'),
                          (a.onload = (function (t) {
                            return function () {
                              var e = new window[m.pluginsList[t].type](m);
                              e.init(m.pluginsList[t].conf),
                                (m.plugins[m.pluginsList[t].type] = e);
                            };
                          })(i)),
                          document.head.appendChild(a);
                      }
                  }
                })(),
                d.ws.mediaType != MEDIA_TYPE_VIDEO &&
                  (s.addEventListener(psd.media.MediaEvent.AD_START, A),
                  s.addEventListener(psd.media.MediaEvent.AD_SKIP, w),
                  s.addEventListener(psd.media.MediaEvent.AD_COMPLETE, O)),
                (c = !0),
                void 0 !== r.ratio)
              ) {
                var e = parseInt(r.ratio.split(':')[0]),
                  t = parseInt(r.ratio.split(':')[1]);
                d.ws.mediaType == MEDIA_TYPE_VIDEO &&
                  'number' == typeof e &&
                  'number' == typeof t &&
                  this.setRatio(e, t, !0);
              }
              if (
                (function () {
                  this.API = {};
                  var t = this.getMediaPlayer(),
                    i = this.getMediaPlayer().getMediaModule(),
                    e = this.getMediaPlayer().getAdModule(),
                    a = this.getMediaPlayer().getUIModule(),
                    n = this,
                    o =
                      'color:white;padding:5px;border-radius:5px;font-weight:bold;font-family:Arial;font-size:110%;text-shadow:0 1px 2px rgba(0,0,0,0.8);',
                    s = 'padding-left:20px;font-weight:bold';
                  this.API.man = function () {
                    console.log(''),
                      console.log(
                        '%cTopEmbed API \u25B6 ',
                        o +
                          'background:#66628d;font-size:20px;padding:10px;border:2px solid #47436c'
                      ),
                      console.log(
                        '%cNeed help? %cdmena@clb.t-prisa.com',
                        'padding-left:20px;',
                        'color:#66628d;font-family:Arial;'
                      ),
                      console.log(''),
                      console.log('%cMedia functions', 'background:#00bcd4;' + o),
                      console.log(
                        '%cplay()                       %cPlays the content',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cpause()                      %cPauses the content',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cseek(second,percent)         %cSeeks the content to a specific second',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cseekSeconds(seconds)         %cAdds the specified seconds',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%csetVolume(percet)            %cChanges the volume. Value must be a float between 0 and 1',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cmute()                       %cMutes/unmutes the content',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cfullScreen()                 %cRequests fullscreen',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cexternalOrder(name,params)   %cSends an specificall order to the UI skin',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cgetTime()                    %cReturns the current played seconds',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cgetStatus()                  %cReturns the current status of the content (play/pause/initial',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cgetVolume()                  %cReturns the current volume of the content between 0 and 1',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cgetDuration()                %cReturns the duration of the media',
                        s,
                        'color:#666'
                      ),
                      console.log('%cMedia listeners', 'background:gold;' + o),
                      console.log(
                        '%conReset(evt)                 %cDispatched when player is reseted',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conLoadingStart(evt)          %cDispatched when source is loading',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conMediaBegin(evt)            %cDispatched when media begins',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conMediaEnd(evt)              %cDispatched when media ends',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conError(evt)                 %cDispatched when media fails',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conBufferEmpty(evt)           %cDispatched when buffer is empty',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conBufferFull(evt)            %cDispatched when buffer is full',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conProgress(evt)              %cDispatched when media progresses',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conStatusChange(evt)          %cDispatched when status changes',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conVolumeChange(evt)          %cDispatched when volume changes',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conSeekStart(evt)             %cDispatched when seek starts',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conSeekComplete(evt)          %cDispatched when seek completes',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conOrderExternal(evt)         %cDispatched when player wants to report an specific information or query',
                        s,
                        'color:#666'
                      ),
                      console.log('%cAd listeners', 'background:#cd5566;' + o),
                      console.log(
                        '%conLoadingAdStart(evt)        %cDispatched when ad is required',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conAdStart(evt)               %cDispatched when ad starts',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conAdEnd(evt)                 %cDispatched when ad ends',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conAdError(evt)               %cDispatched when ad fails',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%conAdSkip(evt)                %cDispatched when ad is skipped',
                        s,
                        'color:#666'
                      ),
                      console.log('%cDebug functions', 'background:#3bcf67;' + o),
                      console.log(
                        '%cgetName()                    %cReturns the player name',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cgetContainer()               %cReturns the DOM element which contains the player',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cgetContainerName()           %cReturns the id of the div which contains the player',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cgetSettings(real)            %cReturns the settings of the player. If "real" only input settings will be displayed',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%chighlight(css)               %cApplies a highlight to the player for debug. If param is null default highlight will be displayed',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cinfo2()                      %cDisplays a lateral panel with players info.',
                        s,
                        'color:#666'
                      ),
                      console.log(
                        '%cAPIonWindow()                %cOnly for fast debug. Copies de API methods into de window object "api".',
                        s,
                        'color:#666'
                      );
                  };
                  var r = 0,
                    d = 0,
                    l = 0.7,
                    p = 'initial',
                    c = 'preview';
                  (this.API.help = this.API.man),
                    (this.API.play = function () {
                      i && i.play();
                    }),
                    (this.API.pause = function () {
                      i && i.pause();
                    }),
                    (this.API.seek = function (e, t) {
                      t ? i && (1 < e && (e /= 100), i.seekByProp(e)) : i && i.seek(e);
                    }),
                    (this.API.seekSeconds = function (e) {
                      i && m.API.seek(m.API.getTime() + e);
                    }),
                    (this.API.setVolume = function (e) {
                      i && i.setVolume(e);
                    }),
                    (this.API.mute = function () {
                      i && (0 == d ? m.API.setVolume(l) : i.mute());
                    }),
                    (this.API.externalOrder = function (e, t) {
                      u.getMediaPlayer().getUIModule().externalOrder(e, t);
                    }),
                    (this.API.fullScreen = function () {
                      u.getMediaPlayer().getUIModule().getSkin().notifyOrderFullScreen();
                    }),
                    (this.API.getName = function () {
                      return m.a_name;
                    }),
                    (this.API.getTime = function () {
                      return r;
                    }),
                    (this.API.getStatus = function () {
                      return p;
                    }),
                    (this.API.getPosition = function () {
                      return c;
                    }),
                    (this.API.getVolume = function () {
                      return d;
                    }),
                    (this.API.getContainer = function () {
                      return document.getElementById(n.getSettings().id_container);
                    }),
                    (this.API.getContainerName = function () {
                      return n.getSettings().id_container;
                    }),
                    (this.API.getSettings = function (e) {
                      return n.getSettings(e);
                    }),
                    (this.API.getDuration = function (e) {
                      switch (e) {
                        case 'H':
                          return t.getData().mediaData.duration / 1000 / 60 / 60;
                        case 'm':
                          return t.getData().mediaData.duration / 1000 / 60;
                        case 's':
                          return t.getData().mediaData.duration / 1000;
                        default:
                          return t.getData().mediaData.duration;
                      }
                    }),
                    (this.API.highlight = function (e) {
                      if (
                        (!0 === e &&
                          ((n.API.getContainer().className = n.API.getContainer().className.replace(
                            / mm_highlight/g,
                            ''
                          )),
                          (n.API.getContainer().className += ' mm_highlight')),
                        !1 === e &&
                          (n.API.getContainer().className = n.API.getContainer().className.replace(
                            / mm_highlight/g,
                            ''
                          )),
                        null == e &&
                          (-1 < n.API.getContainer().className.indexOf('mm_highlight')
                            ? (console.log('encontrado'),
                              (n.API.getContainer().className = n.API.getContainer().className.replace(
                                / mm_highlight/g,
                                ''
                              )))
                            : (n.API.getContainer().className += ' mm_highlight')),
                        !document.getElementById('mm_highlight'))
                      ) {
                        var t = document.createElement('style');
                        (t.id = 'mm_highlight'),
                          (t.innerHTML =
                            '.mm_highlight{                        border:5px solid #aaff00;                        box-sizing:border-box;                        }'),
                          document.head.appendChild(t);
                      }
                    }),
                    (this.API.info2 = function () {
                      psd.media.psdManager.info2();
                    }),
                    (this.API.APIonWindow = function () {
                      window.api = m.API;
                    }),
                    (this.API.onReset = function (e) {}),
                    (this.API.onLoadingStart = function (e) {}),
                    (this.API.onMediaBegin = function (e) {}),
                    (this.API.onMediaEnd = function (e) {}),
                    (this.API.onError = function (e) {}),
                    (this.API.onProgress = function (e) {}),
                    (this.API.onStatusChange = function (e) {}),
                    (this.API.onPositionChange = function (e) {}),
                    (this.API.onVolumeChange = function (e) {}),
                    (this.API.onBufferEmpty = function (e) {}),
                    (this.API.onBufferFull = function (e) {}),
                    (this.API.onOrderExternal = function (e) {}),
                    (this.API.onSeekStart = function (e) {}),
                    (this.API.onSeekComplete = function (e) {}),
                    (this.API.onLoadingAdStart = function (e) {}),
                    (this.API.onAdStart = function (e) {}),
                    (this.API.onAdEnd = function (e) {}),
                    (this.API.onAdError = function (e) {}),
                    (this.API.onAdSkip = function (e) {}),
                    (this.API.onAll = function (t) {
                      (this.onLoadingAdStart = function (e) {
                        console.log(t, e);
                      }),
                        (this.onAdStart = function (e) {
                          console.log(t, e);
                        }),
                        (this.onAdEnd = function (e) {
                          console.log(t, e);
                        }),
                        (this.onAdError = function (e) {
                          console.log(t, e);
                        }),
                        (this.onAdSkip = function (e) {
                          console.log(t, e);
                        }),
                        (this.onLoadingStart = function (e) {
                          console.log(t, e);
                        }),
                        (this.onMediaBegin = function (e) {
                          console.log(t, e);
                        }),
                        (this.onReset = function (e) {
                          console.log(t, e);
                        }),
                        (this.onMediaEnd = function (e) {
                          console.log(t, e);
                        }),
                        (this.onStatusChange = function (e) {
                          console.log(t, e);
                        }),
                        (this.onBufferEmpty = function (e) {
                          console.log(t, e);
                        }),
                        (this.onBufferFull = function (e) {
                          console.log(t, e);
                        }),
                        (this.onOrderExternal = function (e) {
                          console.log(t, e);
                        }),
                        (this.onSeekStart = function (e) {
                          console.log(t, e);
                        }),
                        (this.onSeekComplete = function (e) {
                          console.log(t, e);
                        });
                    }),
                    i &&
                      (i.addEventListener(emic.top.event.MediaEvent.ON_MEDIA_BEGIN, function (e) {
                        m.API.onMediaBegin(e),
                          void 0 !== window.onMediaBegin && window.onMediaBegin(e);
                      }),
                      i.addEventListener(emic.top.event.MediaEvent.ON_MEDIA_END, function (e) {
                        m.API.onMediaEnd(e), void 0 !== window.onMediaEnd && window.onMediaEnd(e);
                      }),
                      i.addEventListener(emic.top.event.MediaEvent.ON_ERROR, function (e) {
                        m.API.onError(e), void 0 !== window.onError && window.onError(e);
                      }),
                      i.addEventListener(emic.top.event.MediaEvent.ON_PROGRESS, function (e) {
                        (r = e.data.currentTime),
                          m.API.onProgress(e),
                          void 0 !== window.onProgress && window.onProgress(e);
                      }),
                      i.addEventListener(emic.top.event.MediaEvent.ON_STATUS_CHANGE, function (e) {
                        (p = e.data.status),
                          m.API.onStatusChange(e),
                          void 0 !== window.onStatusChange && window.onStatusChange(e);
                      }),
                      i.addEventListener(emic.top.event.MediaEvent.ON_VOLUME_CHANGE, function (e) {
                        0 != e.data && (l = e.data),
                          (d = e.data),
                          m.API.onVolumeChange(e),
                          void 0 !== window.onVolumeChange && window.onVolumeChange(e);
                      }),
                      i.addEventListener(emic.top.event.MediaEvent.ON_BUFFER_EMPTY, function (e) {
                        m.API.onBufferEmpty(e),
                          void 0 !== window.onBufferEmpty && window.onBufferEmpty(e);
                      }),
                      i.addEventListener(emic.top.event.MediaEvent.ON_BUFFER_FULL, function (e) {
                        m.API.onBufferFull(e),
                          void 0 !== window.onBufferFull && window.onBufferFull(e);
                      }),
                      i.addEventListener(emic.top.event.MediaEvent.ON_SEEK_START, function (e) {
                        m.API.onSeekStart(e),
                          void 0 !== window.onSeekStart && window.onSeekStart(e);
                      }),
                      i.addEventListener(emic.top.event.MediaEvent.ON_SEEK_COMPLETE, function (e) {
                        m.API.onSeekComplete(e),
                          void 0 !== window.onSeekComplete && window.onSeekComplete(e);
                      }),
                      void 0 !== emic.top.event.MediaEvent.ON_LOADING_START &&
                        i.addEventListener(emic.top.event.MediaEvent.ON_LOADING_START, function (
                          e
                        ) {
                          m.API.onLoadingStart(e),
                            void 0 !== window.onLoadingStart && window.onLoadingStart(e);
                        })),
                    e &&
                      (e.addEventListener(emic.top.event.AdEvent.ON_AD_VIDEO_START, function (e) {
                        m.API.onAdStart(e), void 0 !== window.onAdStart && window.onAdStart(e);
                      }),
                      e.addEventListener(emic.top.event.AdEvent.ON_AD_VIDEO_END, function (e) {
                        m.API.onAdEnd(e), void 0 !== window.onAdEnd && window.onAdEnd(e);
                      }),
                      e.addEventListener(emic.top.event.AdEvent.ON_AD_ERROR, function (e) {
                        m.API.onAdError(e), void 0 !== window.onAdError && window.onAdError(e);
                      }),
                      e.addEventListener(emic.top.event.AdEvent.ON_AD_VIDEO_SKIP, function (e) {
                        m.API.onAdSkip(e), void 0 !== window.onAdSkip && window.onAdSkip(e);
                      }),
                      void 0 !== emic.top.event.AdEvent.ON_LOADING_AD_START &&
                        e.addEventListener(emic.top.event.AdEvent.ON_LOADING_AD_START, function (
                          e
                        ) {
                          m.API.onLoadingAdStart(e),
                            void 0 !== window.onLoadingAdStart && window.onLoadingAdStart(e);
                        })),
                    a &&
                      a.addEventListener(emic.top.event.UIEvent.ON_ORDER_EXTERNAL, function (e) {
                        m.API.onOrderExternal(e),
                          void 0 !== window.onOrderExternal && window.onOrderExternal(e);
                      }),
                    t &&
                      t.addEventListener(emic.top.event.TopEvent.ON_POSITION_CHANGE, function (e) {
                        (c = e.data.position),
                          m.API.onPositionChange(e),
                          void 0 !== window.onPositionChange && window.onPositionChange(e);
                      }),
                    'undefined' != typeof mm_youbora &&
                      mm_youbora &&
                      void 0 === this.getSettings(!0).noyb &&
                      m.load_Youbora();
                }.apply(this),
                void 0 !== psdgetgetpsd && 1 == psdgetgetpsd('mm_debug'))
              ) {
                var i =
                  'color:#333;padding:5px 0;font-weight:bold;font-family:Arial;font-size:120%;';
                console.log(
                  '%cTopEmbed %c' + this.a_name + '%c loaded successfully! %c\u2764',
                  i + 'color:green;',
                  'color:#333',
                  i + 'color:green;',
                  'color:red;'
                ),
                  console.log(
                    '%cDo you need help? Type %cMM.player.API.man()%c in console to display the manual',
                    i,
                    i + 'color:blue;font-weight:unset;',
                    i
                  );
              }
              this.onInit(this),
                this.dispatchEvent(
                  new psd.media.TopEmbedEvent(psd.media.TopEmbedEvent.EVENT_INI, d)
                ),
                'undefined' != typeof mm_force_playlist &&
                  2 == mm_force_playlist &&
                  (T.apply(this), (mm_force_playlist = 1));
            }
            function I (e) {
              var t = {};
              (t.errorType = e.data.errorType),
                this.dispatchEvent(
                  new psd.media.TopEmbedEvent(psd.media.TopEmbedEvent.EVENT_ERROR, t)
                );
            }
            function A (e) {
              var t, i;
              (i =
                (9 * (t = d.player.width < MIN_PLAYER_WIDTH ? MIN_PLAYER_WIDTH : d.player.width)) /
                16),
                (document.getElementById(r.id_container).style.width = t + 'px'),
                (document.getElementById(r.id_media + '_simple').style.width = t + 'px'),
                (document.getElementById(r.id_container).style.height = i + 'px'),
                (document.getElementById(r.id_media + '_simple').style.height = i + 'px');
            }
            function w (e) {
              (document.getElementById(r.id_container).style.width = d.player.width + 'px'),
                (document.getElementById(r.id_media + '_simple').style.width =
                  d.player.width + 'px'),
                (document.getElementById(r.id_container).style.height = d.player.height + 'px'),
                (document.getElementById(r.id_media + '_simple').style.height =
                  d.player.height + 'px');
            }
            function O () {
              (document.getElementById(r.id_container).style.width = d.player.width + 'px'),
                (document.getElementById(r.id_media + '_simple').style.width =
                  d.player.width + 'px'),
                (document.getElementById(r.id_container).style.height = d.player.height + 'px'),
                (document.getElementById(r.id_media + '_simple').style.height =
                  d.player.height + 'px');
            }
            (this.load_Youbora = function () {
              if (
                void 0 !== m.API &&
                'undefined' != typeof youbora &&
                void 0 !== youbora.adapters.PrisaAdapter
              ) {
                'undefined' != typeof mm_youbora_debug &&
                  (youbora.Log.logLevel = youbora.Log.Level.VERBOSE);
                var e = null,
                  t = null;
                switch (m.getSettings().topPlayer.media.provider) {
                  case 'triton':
                    e = 'TRITON';
                    break;
                  case 'youtube':
                    e = 'YOUTUBE';
                }
                'undefined' != typeof PRISA &&
                  void 0 !== PRISA.user &&
                  void 0 !== PRISA.user.getData() &&
                  '' != PRISA.user.getData().nickname &&
                  (t = PRISA.user.getData().nickname);
                var i = !1;
                'video' == m.API.getSettings().media_type && (i = !0);
                var a = {
                  accountCode: 'prisa',
                  'content.id': m.API.getSettings().topPlayer.media.idTOP,
                  'content.playbackType': m.API.getSettings().media_type,
                  'content.package': m.API.getSettings().id_cuenta,
                  'content.title': m.API.getSettings().topPlayer.media.title,
                  'content.channel': m.API.getSettings().topPlayer.media.tags.emisora.split(
                    ','
                  )[0],
                  'content.program': m.API.getSettings().topPlayer.media.tags.programa.split(
                    ','
                  )[0],
                  'content.customDimension.1': m.API.getSettings().topPlayer.media.tags.seccion.split(
                    ','
                  )[0],
                  'background.enabled': i,
                  'app.name': 'Web',
                };
                function n () {
                  'undefined' != typeof mm_youbora_debug &&
                    console.log('{{YOUBORA}} Evento AdStart'),
                    r || (m.ybplugin.getAdsAdapter().fireStart(), (r = !0));
                }
                function o () {
                  'undefined' != typeof mm_youbora_debug &&
                    console.log('{{YOUBORA}} Evento AdStop'),
                    m.ybplugin.getAdsAdapter().fireStop(),
                    (r = !1);
                }
                i &&
                  ((a['background.settings.android'] = 'pause'),
                  (a['background.settings.iOS'] = 'pause')),
                  null != e && (a['content.cdn'] = e),
                  null != t && (a['user.name'] = t),
                  (m.ybplugin = new youbora.Plugin(a)),
                  m.ybplugin.setAdapter(new youbora.adapters.PrisaAdapter(m)),
                  m.ybplugin.setAdsAdapter(new youbora.Adapter());
                var s = m.getMediaPlayer().getAdModule(),
                  r = !1;
                s.removeEventListener(
                  emic.top.event.AdEvent.ON_AD_VIDEO_START,
                  n,
                  null,
                  'youbora_ad_fire_start'
                ),
                  s.removeEventListener(
                    emic.top.event.AdEvent.ON_AD_VIDEO_END,
                    o,
                    null,
                    'youbora_ad_fire_stop'
                  ),
                  s.removeEventListener(
                    emic.top.event.AdEvent.ON_AD_VIDEO_SKIP,
                    o,
                    null,
                    'youbora_ad_fire_stop'
                  ),
                  s.removeEventListener(
                    emic.top.event.AdEvent.ON_AD_ERROR,
                    o,
                    null,
                    'youbora_ad_fire_stop'
                  ),
                  s.addEventListener(
                    emic.top.event.AdEvent.ON_AD_VIDEO_START,
                    n,
                    null,
                    'youbora_ad_fire_start'
                  ),
                  s.addEventListener(
                    emic.top.event.AdEvent.ON_AD_VIDEO_END,
                    o,
                    null,
                    'youbora_ad_fire_stop'
                  ),
                  s.addEventListener(
                    emic.top.event.AdEvent.ON_AD_VIDEO_SKIP,
                    o,
                    null,
                    'youbora_ad_fire_stop'
                  ),
                  s.addEventListener(
                    emic.top.event.AdEvent.ON_AD_ERROR,
                    o,
                    null,
                    'youbora_ad_fire_stop'
                  );
              }
            }),
              (this.addPlugin = function (e, t) {
                if (t)
                  void 0 === this.iniSettings.plugins && (this.iniSettings.plugins = []),
                    this.iniSettings.plugins.push(e);
                else {
                  var i = m.base;
                  void 0 !== r.topPlayer &&
                    void 0 !== r.topPlayer.generic &&
                    void 0 !== r.topPlayer.generic.urlBase &&
                    (i = r.topPlayer.generic.urlBase);
                  var a = '';
                  if (
                    ('undefined' != typeof tplib && (a = '/lib'),
                    (m.pluginsList[e.type] = e).disabled && 1 == e.disabled)
                  )
                    void 0 !== m.pluginsList[e.type] && delete m.pluginsList[e.type];
                  else {
                    var n = document.createElement('script');
                    (n.type = 'text/javascript'),
                      (n.src =
                        i + '/psdmedia/media/top/widgets/' + e.type + a + '/' + e.type + '.js'),
                      (n.onload =
                        ((o = e.type),
                        (s = e.conf),
                        function () {
                          var e = new window[o](m);
                          (m.pluginsList[o] = e), m.pluginsList[o].init(s);
                        })),
                      document.head.appendChild(n);
                  }
                }
                var o, s;
              }),
              (this.getMediaPlayer = function () {
                return s;
              }),
              (this.reset = function (e) {
                'undefined' == typeof mm_autoplay && this.getMediaPlayer().getMediaModule().stop(),
                  '{}' == JSON.stringify(e.playList) && E.apply(this),
                  (l = !0),
                  (p = null != e.dev && e.dev),
                  f.apply(this),
                  e.id_cuenta && (r.id_cuenta = e.id_cuenta),
                  e.id_media && (r.id_media = e.id_media),
                  e.media_type && (r.media_type = e.media_type),
                  e.id_player && (r.id_player = e.id_player),
                  e.id_container && (r.id_container = e.id_container),
                  e.topPlayer && (r.topPlayer = e.topPlayer),
                  e.mainPlayer && (r.mainPlayer = e.mainPlayer),
                  y.apply(this),
                  'undefined' != typeof mm_autoplay &&
                    1 == mm_autoplay &&
                    void 0 !== this.API &&
                    void 0 !== this.API.getPosition &&
                    'preview' != this.API.getPosition() &&
                    void 0 !== this.getMediaPlayer &&
                    null != typeof this.getMediaPlayer().getMediaModule() &&
                    'stop' != this.API.getStatus() &&
                    (this.getMediaPlayer().getMediaModule().play(),
                    this.getMediaPlayer().getMediaModule().pause());
              }),
              (this.init = function (e) {
                (p = null != (r = e).dev && e.dev), g.apply(this);
              }),
              (this.isInitialized = function () {
                return c;
              }),
              (this.setRatio = function (e, t, i) {
                u.setRatio(e, t, i);
              }),
              g.apply(this);
          }
          (t.prototype = new psd.framework.EventDispatcher()), (e.TopEmbed = t);
        })(psd.media),
        (function (e) {
          function t (e) {
            psd.framework.EventDispatcher.call(this),
              (this.className = 'psd.media.TopPlaylist'),
              (this.embedplaylist = e);
            var o,
              s,
              r = [];
            (this.index = 0),
              (this.init = function (e, t) {
                this.addEventListener('onPlayListChangeMedia', a, this),
                  (this.index = t),
                  (o = e),
                  i.apply(this);
              }),
              (this.reDraw = function () {
                s.paintPlaylist();
              }),
              (this.setData = function (e) {
                r = e;
              }),
              (this.resetData = function (e) {
                s.setDataPlaylist(e);
              });
            var i = function () {
                if (
                  ((s = new psd.media.TopPlaylist_lista(o, this.index, this.embedplaylist)),
                  'generica' == o.playListSkin)
                ) {
                  var e = '/psdmedia/media/simple/skinsPlaylist/playlist.css',
                    t = o.player.getMediaPlayer().getData().genericData.urlBase,
                    i = null != t && null != t && t;
                  null != o.styleItemsContainer && s.setType(o.styleItemsContainer);
                  var a = document.createElement('link'),
                    n = i ? t + e : e;
                  a.setAttribute('rel', 'stylesheet'),
                    a.setAttribute('type', 'text/css'),
                    a.setAttribute('href', n),
                    void 0 !== a && document.getElementsByTagName('head')[0].appendChild(a);
                }
                s.addEventListener(psd.media.PlaylistEvent.DATA_REQUEST, d, this),
                  s.addEventListener(psd.media.PlaylistEvent.DATA_COMPLETE, d, this),
                  s.addEventListener(psd.media.PlaylistEvent.MEDIA_CHANGE, d, this),
                  s.addEventListener(psd.media.PlaylistEvent.PLAYLIST_COMPLETE, d, this),
                  s.init(r),
                  s.load();
              },
              d = function (e) {
                e.type == psd.media.PlaylistEvent.DATA_COMPLETE && s.paintPlaylist(),
                  this.dispatchEvent(e);
              };
            function a () {
              this.getTopPlaylist().setPlayerEventos();
            }
            (this.next = function () {
              s.next();
            }),
              (this.previous = function () {
                s.previous();
              }),
              (this.gotoByIndex = function (e) {
                s.gotoByIndex(e);
              }),
              (this.gotoByIdRef = function (e) {
                s.gotoByIdRef(e);
              }),
              (this.changeConfig = function (e) {
                s.changeConfig(e);
              }),
              (this.getTopPlaylist = function () {
                return s;
              }),
              (this.playIndex = function (e) {
                e < s.data()[0].length && s.loadMedia(e);
              });
          }
          (t.prototype = new psd.framework.EventDispatcher()), (e.TopPlaylist = t);
        })(psd.media),
        (function (e) {
          function t (c, d) {
            psd.framework.EventDispatcher.call(this),
              (this.className = 'psd.media.TopEmbedPlaylist');
            var t,
              l,
              p,
              m = c,
              u = d,
              _ = 0,
              g = 0,
              E = [],
              i = this,
              a = null,
              n = null,
              v = !1,
              h = 0,
              f = null,
              y = null,
              P = null,
              o = !1,
              s = 0.7,
              M = [0, -1],
              r = !1;
            function T (e) {
              if (
                null != e.result &&
                null != e.result.parserResult &&
                null != e.result.parserResult.result &&
                null != e.result.parserResult.result.data
              ) {
                (p = e.result.parserResult.result.data).length < 1 &&
                  void 0 !== u[0] &&
                  document.getElementById(u[0].id_container_playlist) &&
                  (document.getElementById(u[0].id_container_playlist).className +=
                    ' mm_playlist_empty');
                var t = [];
                for (var i in p) null != p[i] && t.push(p[i]);
                if (0 == t.length) return void l.init(m);
                for (var i in (p = t))
                  if (null != p[i].description) {
                    var a = p[i].description;
                    (a = a.replace(/<[^>]*>?/g, '')), (p[i].description = a);
                  }
                if (v)
                  for (_play in E)
                    h == _play &&
                      (E[_play].resetData(p),
                      E[_play].reDraw(),
                      -1 < M[1] && (this.playIndex(M[0], M[1]), (M[1] = -1)));
                else {
                  if (
                    (null != u[_].reload_secs &&
                      0 < u[_].reload_secs &&
                      ((r = g),
                      setInterval(function () {
                        R.apply(this, [r]);
                      }, 1000 * u[_].reload_secs)),
                    void 0 === m.id_media || '' == m.id_media)
                  ) {
                    var n = 0;
                    if (void 0 !== d.index)
                      if (
                        (d.index < 0 && (d.index = (Math.random() * (p.length - 1)) | 0),
                        void 0 !== d.reorder && 1 == d.reorder)
                      )
                        for (i = 0; i < d.index; i++) p[p.length - 1] = p.shift();
                      else n = d.index;
                    if (void 0 !== d.shuffle && 1 == d.shuffle) {
                      var o = (n = 0);
                      void 0 !== d.index && (o = d.index);
                      var s = p.splice(o, 1)[0];
                      p.sort(function (e, t) {
                        return 0.5 - Math.random();
                      }),
                        p.shift(s);
                    }
                    n < 0 && (n = 0),
                      n >= p.length && (n = p.length - 1),
                      (d.index = n),
                      (m.id_media = p[n].idref);
                  }
                  0 == _
                    ? ('object' != typeof l && (l = new psd.media.TopEmbed()),
                      void 0 !== m.topPlayer &&
                        void 0 !== m.topPlayer.media &&
                        ((this.ancho = m.topPlayer.media.ancho),
                        (this.alto = m.topPlayer.media.alto)),
                      l.init(m),
                      l.addEventListener(psd.media.TopEmbedEvent.EVENT_INI, I, this))
                    : I();
                }
              }
              var r;
            }
            function b (e) {
              void 0 !== u[0] &&
                document.getElementById(u[0].id_container_playlist) &&
                (document.getElementById(u[0].id_container_playlist).className +=
                  ' mm_playlist_empty');
            }
            (this.ancho = 0),
              (this.alto = 0),
              (this.getMediaTopEmbed = function () {
                return l;
              }),
              (this.getMediaTopPlaylist = function () {
                return E;
              }),
              (this.destroyPlayLists = function () {
                for (var e in E)
                  'function' == typeof E[e].getTopPlaylist &&
                    E[e].getTopPlaylist().destroyBasePlayList();
                r = !0;
              }),
              (this.setPlayerSettings = function (e) {
                t = e;
              }),
              (this.isArray = function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              }),
              (this.init = function () {
                if (
                  (null != u.skinPlaylist &&
                    ((u.styleItemsContainer = u.skinPlaylist), delete u.skinPlaylist),
                  null == u.autoNext && (u.autoNext = !0),
                  null != u.skin && delete u.skin,
                  null == u.repeat && (u.repeat = 2),
                  (null != u.playListSkin && '' != u.playListSkin) ||
                    (void 0 !== u.styleItemsContainer && '' != u.styleItemsContainer
                      ? (u.playListSkin = 'generica')
                      : (u.playListSkin = 'vacia')),
                  'vacia' == u.playListSkin && (u.styleItemsContainer = ''),
                  'psd.media.TopEmbed' == m.className &&
                    ((l = m), (m = void 0 !== t ? t : l.getSettings())),
                  (m.isPlaylist = !0),
                  (m.playlistUrl = d.URL_list),
                  this.isArray(u) || (u = [u]),
                  '' == u[0].id_container_playlist || null == u[0].id_container_playlist)
                ) {
                  var e = m.id_container;
                  (f = document.getElementById(m.id_container)),
                    'vacia' == u[0].playListSkin
                      ? (((y = document.createElement('div')).id = m.id_container + '__player'),
                        (y.style.width = '100%'),
                        (y.style.height = '100%'),
                        (y.style.float = 'left'),
                        (m.id_container = e + '__player'),
                        f.appendChild(y))
                      : (((y = document.createElement('div')).id = m.id_container + '__player'),
                        (y.style.width = '70%'),
                        (y.style.height = '100%'),
                        (y.style.float = 'left'),
                        ((P = document.createElement('div')).id = m.id_container + '__playlist'),
                        (P.style.width = '30%'),
                        (P.style.height = '100%'),
                        (P.style.float = 'left'),
                        (m.id_container = e + '__player'),
                        (u[0].id_container_playlist = e + '__playlist'),
                        f.appendChild(y),
                        f.appendChild(P),
                        (o = !0));
                }
                (n = new psd.framework.parser.JSONParser()),
                  (a = new psd.framework.Mediator()).corsIE(!0),
                  a.addEventListener(psd.framework.MediatorEvent.MEDIATE_COMPLETE, T, this),
                  a.addEventListener(psd.framework.MediatorEvent.MEDIATE_ERROR, b, this),
                  a.mediate(u[_].URL_list, n, psd.framework.Mediator.RESPONSE_JSON),
                  (g = _);
              });
            var R = function (e) {
              (v = !0), (h = e), a.mediate(u[e].URL_list, n, psd.framework.Mediator.RESPONSE_JSON);
            };
            this.resetPlayList = function (e, t, i) {
              (u[e] = t), R(e), null != i && (M = [g, i]);
            };
            var I = function () {
              if (!r)
                if (void 0 !== u[_]) {
                  u[_].player = l;
                  var e = new psd.media.TopPlaylist(i);
                  null != u[_].playerPercent && (s = u[_].playerPercent),
                    e.addEventListener(psd.media.PlaylistEvent.DATA_COMPLETE, function (e) {
                      _ == u.length - 1 && o && (_fullscreen || i.resize_16_9(s, !0));
                    }),
                    (E[_] = e).setData(p),
                    e.init(u[_], _),
                    ++_ < u.length
                      ? i.init()
                      : i.dispatchEvent(
                          new psd.media.TopEmbedEventPlaylist(
                            psd.media.TopEmbedEventPlaylist.EVENT_INIT,
                            { TopEmbed: l, TopPlaylist: E }
                          )
                        );
                } else
                  i.getMediaTopPlaylist()[0].dispatchEvent(
                    new psd.media.PlaylistEvent('onPlayListChangeMedia', {})
                  );
            };
            (this.playIndex = function (e, t) {
              E[e].playIndex(t);
            }),
              (this.resize_16_9 = function (e, t) {
                var i = f,
                  a = y,
                  n = P;
                if (null != i) {
                  var o,
                    s,
                    r = e;
                  if ('function' == typeof c.getSettings && 'audio' == c.getSettings().media_type)
                    (a.style.width = '100%'),
                      (a.style.display = 'inline-block'),
                      void 0 !== c.getSettings().topPlayer &&
                        void 0 !== c.getSettings().topPlayer.generic &&
                        (a.style.height =
                          parseInt(c.getSettings().topPlayer.generic.height) + 'px'),
                      (n.style.width = '100%'),
                      (n.style.height = '400px');
                  else {
                    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 768
                      ? ((r = 1),
                        n.className.indexOf('mm_mobile_list') < 0 &&
                          (n.className += ' mm_mobile_list'))
                      : (r = e);
                    var d = i.offsetWidth,
                      l = (d * (100 * r)) / 100;
                    (a.style.width = Math.floor(l) + 'px'),
                      (a.style.height = Math.floor((9 * l) / 16) + 'px');
                    var p = a.offsetHeight;
                    (i.style.height = p + 'px'),
                      (n.style.width = 1 == r ? d + 'px' : d - l + 'px'),
                      (n.style.height = Math.floor(p) + 'px');
                  }
                  t &&
                    ((o = this),
                    (s = null) != window.onresize && (s = window.onresize),
                    (window.onresize = function () {
                      null != s && s(), _fullscreen || o.resize_16_9(e, !1);
                    }));
                }
              });
          }
          (t.prototype = new psd.framework.EventDispatcher()), (e.TopEmbedPlaylist = t);
        })(psd.media),
        (psd.media.TopEmbedManager = function (e) {
          'object' != typeof psd.media.psdManager &&
            (psd.media.psdManager = new psd.media.TopEmbedManagerGeneral(e)),
            (this.add = function (e, t, i) {
              psd.media.psdManager.add(e, t, i);
            }),
            (this.addEmbed = function (e) {
              psd.media.psdManager.addEmbed(e);
            });
        }),
        (function (e) {
          function t (e) {
            psd.framework.EventDispatcher.call(this),
              (this.className = 'psd.media.TopEmbedManagerGeneral');
            var _,
              g = this;
            function E (e, t, i) {
              var a;
              (a = void 0 !== i && '' != i ? i : e),
                (e.width = a.clientWidth),
                void 0 !== this.elemsMgr[t].confs.topPlayer.media.alto &&
                void 0 !== this.elemsMgr[t].confs.topPlayer.media.ancho
                  ? (e.height =
                      (a.clientWidth * this.elemsMgr[t].confs.topPlayer.media.alto) /
                      this.elemsMgr[t].confs.topPlayer.media.ancho)
                  : (e.height = (314 * a.clientWidth) / 560);
            }
            function v (e) {
              var t = e;
              -1 == e.indexOf('https') &&
                (t =
                  -1 != window.document.location.protocol.indexOf('https')
                    ? 'https:' + e
                    : 'http:' + e);
              var i = document.createDocumentFragment(),
                a = document.createElement('meta');
              a.setAttribute('itemprop', 'url'), a.setAttribute('content', t);
              var n = document.createElement('meta');
              n.setAttribute('itemprop', 'width'), n.setAttribute('content', '980');
              var o = document.createElement('meta');
              return (
                o.setAttribute('itemprop', 'height'),
                o.setAttribute('content', '552'),
                i.appendChild(a),
                i.appendChild(n),
                i.appendChild(o),
                i
              );
            }
            (this.idx = -1),
              (this.elemsMgr = []),
              (this.pauseOthersOnPlay = !1),
              (this.muteOthersOnPlay = !1),
              (this.customActionOnPlay = function (e, t, i) {
                this.elemsMgr[e].embed,
                  void 0 !== this.elemsMgr[e].embed &&
                    '' != this.elemsMgr[e].embed &&
                    void 0 !== this.elemsMgr[t].embed &&
                    '' != this.elemsMgr[t].embed &&
                    e != t &&
                    'play' == i &&
                    this.reset(e);
              }),
              (this.info2 = function () {
                if (null == document.getElementById('psdInfo2Manager')) {
                  var e = document.getElementById('psdInfo2Manager'),
                    t = document.createElement('div');
                  for (var i in ((t.id = 'psdInfo2Manager'),
                  (t.style =
                    'width: 300px;height: 100%;position: fixed;top: 0px;right: 0px;background-color: beige;opacity: 0.9;z-index: 1000000000;font-size: 1em; overflow:scroll'),
                  document.body.appendChild(t),
                  ((e = document.createElement('div')).id = 'psdInfo2ManagerBut'),
                  (e.style = 'position: fixed;right: 300px;background-color: sandybrown;'),
                  (e.innerHTML =
                    "<span id='psdInfo2ManagerButTxt' style='font-size:3em'>&nbsp;&rarrb;&nbsp;</span>"),
                  t.appendChild(e),
                  (e.onclick = function () {
                    var e = document.getElementById('psdInfo2Manager'),
                      t = document.getElementById('psdInfo2ManagerBut'),
                      i = document.getElementById('psdInfo2ManagerButTxt');
                    '300px' == e.style.width
                      ? ((e.style.width = '30px'),
                        (t.style.right = '0px'),
                        (i.innerHTML = '&nbsp;&larrb;&nbsp;'))
                      : ((e.style.width = '300px'),
                        (t.style.right = '300px'),
                        (i.innerHTML = '&nbsp;&rarrb;&nbsp;'));
                  }),
                  this.elemsMgr)) {
                    var a = document.getElementById(this.elemsMgr[i].confs.id_container);
                    (a.style.outline = '7px solid red'),
                      (a.onmouseover = function () {
                        var e = document.getElementById('divInfo_' + this.id);
                        (e.style.backgroundColor = 'red'), (e.style.color = 'white');
                      }),
                      (a.onmouseout = function () {
                        var e = document.getElementById('divInfo_' + this.id);
                        (e.style.backgroundColor = ''), (e.style.color = '');
                      }),
                      (e = document.createElement('div'));
                    var n = document.createElement('a');
                    n.onclick = (function (e) {
                      return function () {
                        window.location.hash = e;
                      };
                    })(this.elemsMgr[i].confs.id_container);
                    var o = document.createElement('div');
                    (o.id = 'divInfo_' + this.elemsMgr[i].confs.id_container),
                      (o.style = 'border:thin solid black; margin: 10px;'),
                      (o.innerHTML = '** Sin TopEmbed **'),
                      (n.innerHTML =
                        '(' + i + ') <b>' + this.elemsMgr[i].confs.id_container + '</b> ');
                    var s = document.createElement('div');
                    s.style = 'clear:both;';
                    var r = a.getElementsByTagName('img');
                    if (0 < r.length) {
                      if (null == (r = r[0]).getAttribute('data-src'))
                        var d =
                          '<div style="float:left"><img src="' +
                          r.src +
                          '" style="width:100px;" /></div>';
                      else
                        d =
                          '<div style="float:left"><img src="' +
                          r.getAttribute('data-src') +
                          '" style="width:100px;" /></div>';
                      (d +=
                        '<ul><li>Width:' +
                        r.getAttribute('width') +
                        '</li><li>Height:' +
                        r.getAttribute('height') +
                        '</li></ul>'),
                        (d += '<div style="clear: both;"></div>'),
                        (s.innerHTML = d);
                    }
                    e.appendChild(n), e.appendChild(s), e.appendChild(o), t.appendChild(e);
                  }
                  setInterval(function () {
                    info2Status.apply(g);
                  }, 1000);
                }
              }),
              (info2Status = function () {
                for (var e in this.elemsMgr) {
                  var t = this.elemsMgr[e].embed;
                  if ('' != t && t.isInitialized()) {
                    if (
                      null ==
                      (i = document.getElementById('divInfo_' + t.getSettings().id_container))
                    )
                      var i = document.getElementById(
                        'divInfo_' + t.getSettings().id_container.replace('__player', '')
                      );
                    null != i &&
                      (t.getMediaPlayer().getCurrentPosition() == emic.top.TopPlayer.POSITION_MEDIA
                        ? (i.style.outline = '5px solid red')
                        : (i.style.outline = ''),
                      (i.innerHTML =
                        '<ul><li>' +
                        t.getMediaPlayer().getData().internalData.controllerName +
                        '</li><li>' +
                        t.getMediaPlayer().getCurrentPosition() +
                        '</li><li>' +
                        t.getMediaPlayer().getMediaModule().getStatus() +
                        '</li><li>' +
                        t.getMediaPlayer().getAdModule().getStatus() +
                        '</li>'));
                  }
                }
              }),
              (this.existsFPW = function (e) {
                if (void 0 !== e && null != e && void 0 !== e.plugins && null != e.plugins)
                  for (var t in e.plugins)
                    if (
                      'FloatingPlayerWidget' == e.plugins[t].type &&
                      void 0 !== e.plugins[t].conf &&
                      null != e.plugins[t].conf &&
                      void 0 !== e.plugins[t].conf.force_on_viewport &&
                      1 == e.plugins[t].conf.force_on_viewport
                    )
                      return !0;
                return !1;
              }),
              (this.setCover = function (e, t) {
                return void 0 !== t && '' != t
                  ? void 0 !== e.topPlayer && void 0 !== e.topPlayer.media
                    ? ((e.topPlayer.media.imgCover = t),
                      g.existsFPW(e) || (e.topPlayer.media.autoplay && !getDevice().mobile)
                        ? ((e.topPlayer.media.cover = !1), '')
                        : ((e.topPlayer.media.cover = !0), t))
                    : t
                  : '';
              }),
              (this.setAutoplay = function (e, t, i) {
                return (
                  void 0 !== t &&
                    '' != t &&
                    (void 0 === e.topPlayer && (e.topPlayer = {}),
                    void 0 === e.topPlayer.media && (e.topPlayer.media = {}),
                    void 0 !== i && '' != i && null != i
                      ? g.existsFPW(e) || (e.topPlayer.media.autoplay = !0)
                      : (e.topPlayer.media.autoplay = !getDevice().mobile)),
                  e
                );
              }),
              (this.generateHTML = function (e, t) {
                if (void 0 === t || '' == t || null == t) return !1;
                var i, a;
                for (var n in ((a = document.createDocumentFragment()), t)) {
                  if (
                    ((i = document.createElement(t[n].HTMLelement)),
                    void 0 !== t[n].ClassName &&
                      '' != t[n].ClassName &&
                      (i.className = t[n].ClassName),
                    void 0 !== t[n].style && '' != t[n].style)
                  )
                    for (var o = String(t[n].style).split(';'), s = 0; s < o.length; s++) {
                      var r = o[s].split(':');
                      i.style[r[0]] = r[1];
                    }
                  (i.innerHTML = t[n].value), a.appendChild(i);
                }
                return a;
              }),
              (this.add = function (i, a, n) {
                if (1 == a[3]) {
                  var e = 'fapi-top';
                  switch (i.id_cuenta) {
                    case 'diarioas':
                      e = 'gapi';
                  }
                  var t =
                    '//' +
                    e +
                    '.prisasd.com/api/v2/search/{id_cuenta}/{media_type}/idref/{id_media}';
                  t = t
                    .replace('{id_cuenta}', i.id_cuenta)
                    .replace('{media_type}', i.media_type)
                    .replace('{id_media}', i.id_media);
                  var o = new psd.framework.parser.JSONParser(),
                    s = new psd.framework.Mediator();
                  return (
                    s.corsIE(!0),
                    s.addEventListener(
                      psd.framework.MediatorEvent.MEDIATE_COMPLETE,
                      function (e) {
                        var t = e.result.parserResult;
                        if (
                          t.code == psd.framework.ParserResult.PARSER_SUCCESS_CODE &&
                          'object' == typeof t.result &&
                          0 < t.result.total
                        ) {
                          n.pre_data = e;
                          try {
                            if (
                              4 != e.result.parserResult.result.data[0].status.id &&
                              6 != e.result.parserResult.result.data[0].status.id
                            )
                              return;
                            (a[3] = !1), this.add(i, a, n);
                          } catch (e) {
                            return;
                          }
                        } else n.pre_data = '';
                      },
                      this
                    ),
                    s.addEventListener(
                      psd.framework.MediatorEvent.MEDIATE_ERROR,
                      function (e) {},
                      this
                    ),
                    void s.mediate(t, o, psd.framework.Mediator.RESPONSE_JSON)
                  );
                }
                if (
                  (this.idx++,
                  (this.elemsMgr[this.idx] = { embed: null != n ? n : '' }),
                  !0 === getDevice().mobile && void 0 !== i.plugins)
                )
                  for (var r in i.plugins)
                    'FloatingPlayerWidget' == i.plugins[r].type && (a[0] = '');
                a[4] && (this.elemsMgr[this.idx].is_video = a[4]);
                var d = a[0];
                if (d)
                  switch (d.substr(d.lastIndexOf('.') + 1).toLowerCase()) {
                    case 'mp4':
                      this.elemsMgr[this.idx].is_video = !0;
                      break;
                    case 'jpg':
                    case 'png':
                      this.elemsMgr[this.idx].is_video = !1;
                  }
                if (void 0 === a || null == a)
                  (this.elemsMgr[this.idx].confs = this.setAutoplay(i)),
                    (this.elemsMgr[this.idx].htmlObj = this.generateHTML(i)),
                    this.generateContainer(this.idx, n);
                else {
                  (this.elemsMgr[this.idx].images = this.setCover(i, a[0])),
                    (this.elemsMgr[this.idx].urlsNoticia = a[1]),
                    (this.elemsMgr[this.idx].confs = this.setAutoplay(i, a[0], a[1])),
                    (this.elemsMgr[this.idx].preloadData = a[4]),
                    void 0 === this.elemsMgr[this.idx].confs.topPlayer &&
                      (this.elemsMgr[this.idx].confs.topPlayer = {}),
                    void 0 === this.elemsMgr[this.idx].confs.topPlayer.media &&
                      (this.elemsMgr[this.idx].confs.topPlayer.media = {});
                  var l = document.createElement('img');
                  (l.src = a[0]),
                    (l.that = this),
                    (l.onerror = function () {}),
                    (l.onload = function () {
                      1 != this.that.elemsMgr[this.that.idx].preloadData &&
                        (this.that.elemsMgr[
                          this.that.idx
                        ].confs.topPlayer.media.custom_cover = this.that.elemsMgr[
                          this.that.idx
                        ].images);
                    }),
                    (this.elemsMgr[this.idx].htmlObj = this.generateHTML(i, a[2])),
                    this.generateContainer(this.idx, n);
                }
              }),
              (this.addEmbed = function (e) {
                e.setManager(this),
                  this.idx++,
                  (this.elemsMgr[this.idx] = { embed: e, confs: e.iniSettings }),
                  void 0 !== e.iniSettings.managerOpt
                    ? (this.elemsMgr[this.idx].images = e.iniSettings.managerOpt[0])
                    : (this.elemsMgr[this.idx].images = ''),
                  this.generateEmbed(this.idx);
              }),
              (this.generateContainer = function (a, e) {
                if ('' != this.elemsMgr[a].images) {
                  var t = document.getElementById(this.elemsMgr[a].confs.id_container),
                    i = document.createElement('div'),
                    n = document.createElement('a'),
                    o = document.createElement('span');
                  (n.className = 'posicionador'),
                    (o.className = 'boton_video'),
                    (n.href = 'javascript:void(0)');
                  var s = null;
                  if (
                    (this.elemsMgr[a].is_video
                      ? ((s = document.createElement('video')).setAttribute('muted', !0),
                        s.setAttribute('loop', !0),
                        s.setAttribute('autoplay', !0),
                        (s.src = this.elemsMgr[a].images),
                        (s.onload = function () {
                          E.apply(g, [this, a]), this.play();
                        }),
                        (s.oncanplaythrough = function () {
                          E.apply(g, [this, a]), (this.muted = !0), this.play();
                        }))
                      : ((s = document.createElement('img')),
                        'function' == typeof window.lzld
                          ? (s.setAttribute('data-src', this.elemsMgr[a].images),
                            s.setAttribute('src', '//ep01.epimg.net/t.gif'),
                            E.apply(this, [s, a, t]),
                            (s.onload = function () {
                              lzld(this);
                            }))
                          : ((s.src = this.elemsMgr[a].images),
                            (s.onload = function () {
                              E.apply(g, [this, a]);
                            }))),
                    (s.style.width = '100%'),
                    (s.style.height = '100%'),
                    'diarioas' == e.getSettings().id_cuenta ||
                      getDevice().mobile ||
                      (n.onclick =
                        ((u = a),
                        function (e) {
                          g.generateEmbed(u), (n.onclick = null);
                        })),
                    void 0 !== this.elemsMgr[a].urlsNoticia &&
                      '' != this.elemsMgr[a].urlsNoticia &&
                      null != this.elemsMgr[a].urlsNoticia)
                  )
                    getDevice().mobile
                      ? ((n.onclick = ''), (n.href = this.elemsMgr[a].urlsNoticia))
                      : this.elemsMgr[a].htmlObj && n.appendChild(this.elemsMgr[a].htmlObj),
                      (t.innerHTML = ''),
                      i.appendChild(n),
                      n.appendChild(o),
                      n.appendChild(s),
                      n.appendChild(v(this.elemsMgr[a].images));
                  else {
                    if (this.elemsMgr[a].htmlObj) {
                      var r = document.createRange();
                      r.selectNodeContents(this.elemsMgr[a].htmlObj);
                      var d = r.cloneContents();
                      'diarioas' == e.getSettings().id_cuenta ||
                        getDevice().mobile ||
                        n.appendChild(d);
                    }
                    'diarioas' == e.getSettings().id_cuenta ||
                      getDevice().mobile ||
                      n.appendChild(o),
                      getDevice().mobile
                        ? g.generateEmbed(a)
                        : ((t.innerHTML = ''),
                          i.appendChild(n),
                          'diarioas' == e.getSettings().id_cuenta ||
                            getDevice().mobile ||
                            n.appendChild(o),
                          n.appendChild(s),
                          n.appendChild(v(this.elemsMgr[a].images)));
                  }
                  if ('diarioas' != e.getSettings().id_cuenta || getDevice().mobile)
                    t.appendChild(i);
                  else {
                    t.appendChild(i);
                    var l =
                      '//gapi.prisasd.com/api/v2/search/{id_cuenta}/{media_type}/idref/{id_media}';
                    (l = l
                      .replace('{id_cuenta}', e.getSettings().id_cuenta)
                      .replace('{media_type}', e.getSettings().media_type)
                      .replace('{id_media}', e.getSettings().id_media)),
                      void 0 === e.getSettings().topPlayer && (e.getSettings().topPlayer = {}),
                      void 0 === e.getSettings().topPlayer.media &&
                        (e.getSettings().topPlayer.media = {});
                    var p = new psd.media.TopWindowError({
                        id_container: e.getSettings().id_container,
                        id_cuenta: e.getSettings().id_cuenta,
                        skin: 'diario_as',
                        imgCover: e.getSettings().topPlayer.media.imgCover
                          ? e.getSettings().topPlayer.media.imgCover
                          : '',
                      }),
                      c = new psd.framework.parser.JSONParser(),
                      m = new psd.framework.Mediator();
                    m.corsIE(!0),
                      m.addEventListener(
                        psd.framework.MediatorEvent.MEDIATE_COMPLETE,
                        function (e) {
                          var t,
                            i = e.result.parserResult;
                          i.code == psd.framework.ParserResult.PARSER_SUCCESS_CODE &&
                          'object' == typeof i.result &&
                          0 < i.result.total
                            ? ((n.onclick =
                                ((t = a),
                                function (e) {
                                  g.generateEmbed(t), (n.onclick = null);
                                })),
                              n.appendChild(d),
                              n.appendChild(o))
                            : p.paintMessage();
                        },
                        this
                      ),
                      m.addEventListener(
                        psd.framework.MediatorEvent.MEDIATE_ERROR,
                        function (e) {
                          p.paintMessage();
                        },
                        this
                      ),
                      m.mediate(l, c, psd.framework.Mediator.RESPONSE_JSON);
                  }
                } else g.generateEmbed(a);
                var u;
              }),
              (this.getPlayers = function () {
                return g.elemsMgr;
              }),
              (this.generateEmbed = function (u) {
                function e (e, t) {
                  t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                  var i = document.createEvent('CustomEvent');
                  return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                }
                function t () {
                  if (getDevice().mobile && this.elemsMgr[u].images) {
                    var t = this.elemsMgr[u].embed,
                      e = document.getElementById(this.elemsMgr[u].confs.id_container),
                      i = document.createElement('div'),
                      a = document.createElement('a'),
                      n = document.createElement('span');
                    if (
                      ((a.className = ''),
                      (a.id = t.getSettings().topPlayer.generic.container + '_posicionador_a'),
                      (n.className = 'boton_video'),
                      (n.style.zIndex = '1001'),
                      (n.style.pointerEvents = 'none'),
                      (a.href = 'javascript:void(0)'),
                      this.elemsMgr[u].is_video)
                    )
                      var o = document.createElement('video');
                    else o = document.createElement('img');
                    function s (e) {
                      (o.style.pointerEvents = 'none'),
                        (o.style.display = 'none'),
                        (o.mm_container.style.display = 'block'),
                        e &&
                          'function' == typeof o.embed.getMediaPlayer().getUIModule().getSkin &&
                          'function' ==
                            typeof o.embed.getMediaPlayer().getUIModule().getSkin().showLoading &&
                          o.embed.getMediaPlayer().getUIModule().getSkin().showLoading(!0, !0),
                        (document.getElementById(
                          t.getSettings().topPlayer.generic.container + '_posicionador_a'
                        ).style.display = 'none');
                    }
                    (o.mm_container = document.getElementById(
                      'UIModule_' + this.elemsMgr[u].confs.id_container + '_TopPlayer'
                    )),
                      (o.mm_container.style.display = 'none'),
                      this.elemsMgr[u].is_video
                        ? (o.setAttribute('muted', !0),
                          o.setAttribute('loop', !0),
                          o.setAttribute('autoplay', !0),
                          (o.src = this.elemsMgr[u].images),
                          (o.onload = function () {
                            E.apply(g, [this, u]), this.play();
                          }),
                          (o.oncanplaythrough = function () {
                            E.apply(g, [this, u]), (this.muted = !0), this.play();
                          }))
                        : 'function' == typeof window.lzld
                        ? (o.setAttribute('data-src', this.elemsMgr[u].images),
                          o.setAttribute('src', '//ep01.epimg.net/t.gif'),
                          E.apply(this, [o, u, e]),
                          (o.onload = function () {
                            lzld(this);
                          }))
                        : ((o.src = this.elemsMgr[u].images),
                          (o.onload = function () {
                            E.apply(g, [this, u]);
                          })),
                      (o.style.width = '100%'),
                      (o.style.height = '100%'),
                      (o.style.position = 'absolute'),
                      (o.style.width = '100%'),
                      (o.style.height = '100%'),
                      (o.style.top = '0'),
                      (o.style.left = '0'),
                      (o.style.zIndex = '1000'),
                      (o.embed = this.elemsMgr[u].embed);
                    var r = o.embed.API.onAdStart,
                      d = o.embed.API.onMediaBegin;
                    (o.embed.API.onAdStart = function (e) {
                      'function' == typeof r && r.call(this, e), 'none' != o.style.display && s();
                    }),
                      (o.embed.API.onMediaBegin = function (e) {
                        'function' == typeof d && d.call(this, e),
                          'none' != o.style.display && s();
                      }),
                      (o.onerror = function () {
                        s();
                      }),
                      (o.onclick = function () {
                        s(!0), this.embed.API.play();
                      }),
                      g.elemsMgr[u].htmlObj && a.appendChild(g.elemsMgr[u].htmlObj),
                      i.appendChild(a),
                      a.appendChild(n),
                      a.appendChild(o),
                      a.appendChild(v(this.elemsMgr[u].images)),
                      document
                        .getElementById(t.getSettings().topPlayer.generic.container + '_base')
                        .appendChild(a),
                      (this.elemsMgr[u].images = null);
                  }
                  var l,
                    p,
                    c =
                      ((l = u),
                      function (e) {
                        var t = new CustomEvent('topembedmanager_event', { detail: e });
                        if (
                          (document.dispatchEvent(t),
                          (_ = l),
                          'play' == e.data.status ||
                            'onPreloadControllerComplete' == e.data.status)
                        )
                          for (var i in g.elemsMgr)
                            i != l &&
                              'object' == typeof g.elemsMgr[i].embed &&
                              g.elemsMgr[i].embed.isInitialized() &&
                              ('object' == typeof g.elemsMgr[i].embed.nextPanel &&
                                g.elemsMgr[i].embed.nextPanel.isShowPanel() &&
                                g.elemsMgr[i].embed.nextPanel.killPanel(),
                              g.elemsMgr[i].embed.getMediaPlayer().getCurrentPosition() !=
                                emic.top.TopPlayer.POSITION_PREVIEW &&
                                (this.doSwitch
                                  ? this.onSwitch(
                                      g.elemsMgr[i].embed,
                                      g.elemsMgr[l].embed,
                                      e.data.status
                                    )
                                  : (g.pauseOthersOnPlay && g.pause(i, !0),
                                    g.muteOthersOnPlay && g.mute(i, !0),
                                    null != g.customActionOnPlay &&
                                      g.customActionOnPlay.apply(g, [i, l, e.data.status]))));
                      }),
                    m =
                      ((p = u),
                      function (e) {
                        var t = new CustomEvent('topembedmanager_event', { detail: e });
                        for (var i in (document.dispatchEvent(t), (_ = p), g.elemsMgr))
                          i != p &&
                            'object' == typeof g.elemsMgr[i].embed &&
                            g.elemsMgr[i].embed.isInitialized() &&
                            ('object' == typeof g.elemsMgr[i].embed.nextPanel &&
                              g.elemsMgr[i].embed.nextPanel.isShowPanel() &&
                              g.elemsMgr[i].embed.nextPanel.killPanel(),
                            g.elemsMgr[i].embed.getMediaPlayer().getCurrentPosition() !=
                              emic.top.TopPlayer.POSITION_PREVIEW &&
                              null != g.customActionOnPlay &&
                              g.customActionOnPlay.apply(g, [i, p, e.data.status]));
                      });
                  g.elemsMgr[u].embed
                    .getMediaPlayer()
                    .getAdModule()
                    .addEventListener(emic.top.event.AdEvent.ON_AD_INSTREAM_START, m, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getAdModule()
                      .addEventListener(emic.top.event.AdEvent.ON_AD_INSTREAM_END, m, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getAdModule()
                      .addEventListener(emic.top.event.AdEvent.ON_AD_VIDEO_START, m, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getAdModule()
                      .addEventListener(emic.top.event.AdEvent.ON_AD_VIDEO_PAUSE, m, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getAdModule()
                      .addEventListener(emic.top.event.AdEvent.ON_AD_VIDEO_RESUME, m, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getAdModule()
                      .addEventListener(emic.top.event.AdEvent.ON_AD_VOLUME_CHANGE, m, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getAdModule()
                      .addEventListener(emic.top.event.AdEvent.ON_AD_ERROR, m, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getAdModule()
                      .addEventListener(emic.top.event.AdEvent.ON_AD_VIDEO_SKIP, m, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getAdModule()
                      .addEventListener(emic.top.event.AdEvent.ON_AD_VIDEO_END, m, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getAdModule()
                      .addEventListener(emic.top.event.AdEvent.ON_NO_AD, m, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getMediaModule()
                      .addEventListener(emic.top.event.MediaEvent.ON_INIT_COMPLETE, c, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getMediaModule()
                      .addEventListener(emic.top.event.MediaEvent.ON_READY, c, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getMediaModule()
                      .addEventListener(emic.top.event.MediaEvent.ON_RESET_COMPLETE, c, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getMediaModule()
                      .addEventListener(emic.top.event.MediaEvent.ON_MEDIA_BEGIN, c, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getMediaModule()
                      .addEventListener(emic.top.event.MediaEvent.ON_MEDIA_END, c, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getMediaModule()
                      .addEventListener(emic.top.event.MediaEvent.ON_STATUS_CHANGE, c, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getMediaModule()
                      .addEventListener(emic.top.event.MediaEvent.ON_VOLUME_CHANGE, c, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getMediaModule()
                      .addEventListener(emic.top.event.MediaEvent.ON_ERROR, c, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getMediaModule()
                      .addEventListener(emic.top.event.MediaEvent.ON_TAG, c, this),
                    g.elemsMgr[u].embed
                      .getMediaPlayer()
                      .getMediaModule()
                      .addEventListener(emic.top.event.MediaEvent.ON_METADATA, c, this);
                }
                'function' != typeof window.CustomEvent &&
                  ((e.prototype = window.Event.prototype), (window.CustomEvent = e)),
                  (this.doSwitch = !1),
                  (this.onSwitch = function (e, t) {
                    return !1;
                  }),
                  '' != this.elemsMgr[u].embed
                    ? (this.elemsMgr[u].embed,
                      !0 === this.elemsMgr[u].embed.isInitialized()
                        ? this.elemsMgr[u].embed.addEventListener(
                            psd.media.TopEmbedEvent.EVENT_INI,
                            t,
                            this
                          )
                        : (this.elemsMgr[u].embed.addEventListener(
                            psd.media.TopEmbedEvent.EVENT_INI,
                            t,
                            this
                          ),
                          this.elemsMgr[u].embed.init(this.elemsMgr[u].confs)))
                    : ((this.elemsMgr[u].embed = new psd.media.TopEmbed(
                        this.elemsMgr[u].confs,
                        !0
                      )),
                      this.elemsMgr[u].embed.addEventListener(
                        psd.media.TopEmbedEvent.EVENT_INI,
                        t,
                        this
                      ));
              }),
              (this.play = function (e) {
                var t = _;
                void 0 !== e && (t = e), this.setPlayPauseMute(this.elemsMgr[t].embed, 'play');
              }),
              (this.pause = function (e, t) {
                if (void 0 === e) this.setPlayPauseMute(this.elemsMgr[_].embed, 'pause');
                else if (void 0 === t)
                  for (var i in this.elemsMgr)
                    i == e && this.setPlayPauseMute(this.elemsMgr[i].embed, 'pause');
                else if (1 == t)
                  for (var i in this.elemsMgr)
                    i != e && this.setPlayPauseMute(this.elemsMgr[i].embed, 'pause');
              }),
              (this.mute = function (e, t) {
                if (void 0 === e) this.setPlayPauseMute(this.elemsMgr[_].embed, 'mute');
                else if (void 0 === t)
                  for (var i in this.elemsMgr)
                    i == e && this.setPlayPauseMute(this.elemsMgr[i].embed, 'mute');
                else if (1 == t)
                  for (var i in this.elemsMgr)
                    i != e && this.setPlayPauseMute(this.elemsMgr[i].embed, 'mute');
              }),
              (this.setPlayPauseMute = function (e, t) {
                if ('' != e && e.isInitialized())
                  switch (t) {
                    case 'play':
                      e.getMediaPlayer().getMediaModule().play();
                      break;
                    case 'pause':
                      e.getMediaPlayer().pause();
                      break;
                    case 'mute':
                      e.getMediaPlayer().getMediaModule().mute();
                  }
              }),
              (this.reset = function (e) {
                this.elemsMgr[e].embed.getMediaPlayer().reboot();
              }),
              document.addEventListener('showInfo2', function () {
                g.info2();
              });
          }
          (t.prototype = new psd.framework.EventDispatcher()), (e.TopEmbedManagerGeneral = t);
        })(psd.media),
        (function (e) {
          function t (e, t, i) {
            psd.framework.EventDispatcher.call(this),
              (this.className = 'psd.media.TopPlaylist_BaseController'),
              (REPEAT_ONE = '1'),
              (REPEAT_ALL = '2'),
              (this.tipo = ''),
              (this.index = t),
              (this.embedplaylist = i),
              (this.currentIdRef = ''),
              (this.currentStatus = ''),
              (this.autoPlayPlayList = !0);
            var a,
              r = this;
            ERROR_SERVICIO_PLAYLIST = 'Error_servicio_playlist';
            var d,
              n,
              l,
              p = {},
              c = 0,
              m = 0,
              o = !1,
              u = !0;
            (this.destroyBasePlayList = function () {
              'object' == typeof this.playlistContainer &&
                ((this.playlistContainer.innerHTML = ''), (this.playlistContainer = !1)),
                (a = p.player.getMediaPlayer().getMediaModule()).removeEventListener(
                  emic.top.event.MediaEvent.ON_READY,
                  g
                ),
                a.removeEventListener(emic.top.event.MediaEvent.ON_MEDIA_BEGIN, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_MEDIA_END, _, this),
                a.removeEventListener(emic.top.event.MediaEvent.ON_CUE, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_METADATA, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_ERROR, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_STATUS_CHANGE, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_VOLUME_CHANGE, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_SWITCH_REQUEST, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_SWITCH_COMPLETE, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_PROGRESS, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_SEEK_COMPLETE, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_SEEK_START, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_BUFFER_EMPTY, g),
                a.removeEventListener(emic.top.event.MediaEvent.ON_BUFFER_FULL, g),
                (n = p.player.getMediaPlayer().getUIModule()).removeEventListener(
                  emic.top.event.UIEvent.ON_ORDER_NEXT,
                  E,
                  this
                ),
                n.removeEventListener(emic.top.event.UIEvent.ON_ORDER_PREV, E, this);
            }),
              (this.init = function (e) {
                if (
                  ((mm_playlist_no_reset = !0),
                  this.setPlayerEventos(),
                  this.setDataPlaylist(e),
                  (this.currentIdRef = p.player.getSettings().id_media),
                  'boolean' == typeof p.player.getSettings().topPlayer.media.autoplay &&
                    (this.autoPlayPlayList = p.player.getSettings().topPlayer.media.autoplay),
                  (this.currentStatus = 'pause'),
                  p.nextpanel.active)
                ) {
                  var t = p.player.getSettings(),
                    i = p.nextpanel.time,
                    a = p.nextpanel.skin,
                    n = t.id_container + '_base',
                    o = t.topPlayer.generic.urlBase,
                    s = t.id_media;
                  (l = new psd.media.NextPanel(i, a, n, o, s)), (p.player.nextPanel = l);
                }
              }),
              (this.setPlayerEventos = function () {
                (function () {
                  (a = p.player.getMediaPlayer().getMediaModule()).addEventListener(
                    emic.top.event.MediaEvent.ON_READY,
                    g
                  ),
                    a.addEventListener(emic.top.event.MediaEvent.ON_MEDIA_BEGIN, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_MEDIA_END, _, this),
                    a.addEventListener(emic.top.event.MediaEvent.ON_CUE, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_METADATA, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_ERROR, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_STATUS_CHANGE, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_VOLUME_CHANGE, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_SWITCH_REQUEST, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_SWITCH_COMPLETE, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_PROGRESS, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_SEEK_COMPLETE, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_SEEK_START, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_BUFFER_EMPTY, g),
                    a.addEventListener(emic.top.event.MediaEvent.ON_BUFFER_FULL, g),
                    (n = p.player.getMediaPlayer().getUIModule()).addEventListener(
                      emic.top.event.UIEvent.ON_ORDER_NEXT,
                      E,
                      this
                    ),
                    n.addEventListener(emic.top.event.UIEvent.ON_ORDER_PREV, E, this);
                }.apply(this));
              });
            var s = function () {
              var e, t, i;
              p.nextpanel.active
                ? ((t = (e = 0 == d[m].length || c == d[m].length - 1 ? d[m][0] : d[m][c + 1])
                    .url_thumbnail),
                  (i = e.name),
                  l.showPanel(
                    t,
                    i,
                    function () {
                      r.nextOnclick();
                    },
                    function () {
                      r.nextAuto();
                    },
                    function () {
                      r.resetMedia(c, !1);
                    }
                  ))
                : (c + 1 == d[m].length && p.repeat != REPEAT_ALL) ||
                  (1 == p.autoNext && r.next());
            };
            function _ (e) {
              null == this.embedplaylist._selectedIndex && (this.embedplaylist._selectedIndex = 0),
                this.embedplaylist._selectedIndex == this.index &&
                  o &&
                  1 < d[m].length &&
                  (1 == p.autoNext && p.repeat == REPEAT_ONE ? h.apply(this) : s());
            }
            function g (e) {
              e.type == emic.top.event.MediaEvent.ON_MEDIA_BEGIN &&
                ((r.currentIdRef = e.id), (o = !0)),
                e.type == emic.top.event.MediaEvent.ON_STATUS_CHANGE &&
                  ((r.currentStatus = e.data.status), v.apply(r));
            }
            function E (e) {
              switch (e.type) {
                case emic.top.event.UIEvent.ON_ORDER_NEXT:
                  this.next();
                  break;
                case emic.top.event.UIEvent.ON_ORDER_PREV:
                  this.previous();
              }
            }
            (this.setDataPlaylist = function (e) {
              d = [e];
              var t = {};
              (t.data = d),
                (t.page = m + 1),
                this.dispatchEvent(
                  new psd.media.PlaylistEvent(psd.media.PlaylistEvent.DATA_COMPLETE, t)
                );
            }),
              (this.esElMismo = function (e) {
                return r.currentIdRef == d[m][e].idref;
              });
            var v = function () {
                this.setSelectedStateThis(this.currentStatus);
              },
              h = function (e) {
                if (e && r.currentIdRef == d[m][c].idref) {
                  var t = p.player.getMediaPlayer().getMediaModule();
                  switch (
                    (t.isPlaying() ? (r.currentStatus = 'play') : (r.currentStatus = 'pause'),
                    r.currentStatus)
                  ) {
                    case 'play':
                      t.pause();
                      break;
                    case 'pause':
                      t.play();
                  }
                } else {
                  var i = {};
                  (i.actualIndex = c),
                    (i.actualIdref = d[m][c].idref),
                    (r.currentIdRef = d[m][c].idref),
                    (mm_playlist_no_reset = !0),
                    this.dispatchEvent(
                      new psd.media.PlaylistEvent(psd.media.PlaylistEvent.MEDIA_CHANGE, i)
                    );
                  var a = !1,
                    n = p.player.getMediaPlayer().getData();
                  (_autoValue = e ? (a = !0) : !(a = !1)),
                    p.nextpanel.active && 'repeatMedia' == l.eventAction() && (a = !0),
                    (u = u && !1),
                    p.nextpanel.active &&
                      (l.isShowPanel() && l.killPanel(),
                      'repeatMedia' != l.eventAction() && (n.mediaData.reload = !1));
                  var o = {
                    dev: p.dev,
                    id_cuenta: p.id_cuenta,
                    id_media: d[m][c].idref,
                    media_type: d[m].type,
                    topPlayer: {
                      ad: { tags_noticia: n.adData.tags_noticia },
                      media: {
                        autoplay: _autoValue,
                        autoNext: p.autoNext,
                        clickPlayList: a,
                        primerVideoPlayList: u,
                        premuted: n.mediaData.premuted,
                        un_creacion: n.mediaData.un_creacion,
                        portal_creacion: n.mediaData.portal_creacion,
                        seccion_creacion: n.mediaData.seccion_creacion,
                        reload: n.mediaData.reload,
                      },
                    },
                  };
                  'number' == typeof this.embedplaylist.ancho &&
                    'number' == typeof this.embedplaylist.alto &&
                    ((o.topPlayer.media.ancho = this.embedplaylist.ancho),
                    (o.topPlayer.media.alto = this.embedplaylist.alto));
                  var s = document.createEvent('CustomEvent');
                  s.initCustomEvent('psdMediaChange', !1, !1, { id_media: o.id_media }),
                    document.dispatchEvent(s),
                    p.player.reset(o);
                }
              };
            (this.next = function () {
              this.nextAuto();
            }),
              (this.setSelected = function () {}),
              (this.previous = function () {
                this.prevOnclick();
              }),
              (this.config = function (e) {
                null != e &&
                  (void 0 !== e.URL_list && (p.URL_list = e.URL_list),
                  void 0 !== e.autoNext && (p.autoNext = e.autoNext),
                  void 0 !== e.pagination && (p.pagination = e.pagination),
                  void 0 !== e.repeat && (p.repeat = e.repeat),
                  void 0 !== e.id_cuenta && (p.id_cuenta = e.id_cuenta),
                  void 0 !== e.player && (p.player = e.player),
                  void 0 !== e.secure && (p.secure = e.secure),
                  void 0 !== e.dev && (p.dev = e.dev),
                  void 0 !== e.nextpanel
                    ? (p.nextpanel = e.nextpanel)
                    : (p.nextpanel = { active: !1 }));
              }),
              (this.data = function () {
                return d;
              }),
              (this.actualIndex = function () {
                return 0;
              }),
              (this.resetMedia = function (e, t) {
                (c = e), h.apply(this, [t]);
              }),
              (this.load = function (e) {
                this.config(e),
                  f(),
                  function () {
                    var e = {};
                    (e.page = m),
                      this.dispatchEvent(
                        new psd.media.PlaylistEvent(psd.media.PlaylistEvent.DATA_REQUEST, e)
                      );
                  }.apply(this);
              }),
              (this.setType = function (e) {
                this.tipo = e;
              });
            var f = function () {};
            (this.paintPlaylist = function () {}), this.config(e);
          }
          (t.prototype = new psd.framework.EventDispatcher()), (e.TopPlaylist_BaseController = t);
        })(psd.media),
        (function (namespace) {
          function TopPlaylist_lista (iniSettings, index, embedplaylist) {
            psd.media.TopPlaylist_BaseController.call(this, iniSettings),
              (this.className = 'psd.media.TopPlaylist_lista'),
              (this.index = index),
              (this.embedplaylist = embedplaylist),
              (this.playlistContainer = !1);
            var _iniSettings = iniSettings,
              data,
              _arrayData,
              elemento,
              _that = this,
              _current = 0,
              _total;
            void 0 !== iniSettings.index && (_current = iniSettings.index);
            var _elementos = [],
              _lastid = null,
              _lastidrefs = '',
              nElementos = function (e) {
                return 1 <= e || 0 == e ? e + ' elementos' : e + ' elemento';
              };
            (this.setSelectedStateThis = function (e) {
              if (_current < _elementos.length)
                switch (e) {
                  case 'play':
                    _elementos[_current].setIconPause();
                    break;
                  case 'pause':
                    _elementos[_current].setIconPlay();
                }
            }),
              (this.secondsAsTimeCode = function (e, t) {
                var i = Math.floor(e / 3600),
                  a = Math.floor((e - 3600 * i) / 60),
                  n = Math.floor(e - 3600 * i - 60 * a);
                return (
                  i < 10 && (i = '0' + i),
                  a < 10 && (a = '0' + a),
                  n < 10 && (n = '0' + n),
                  null == t
                    ? i + ':' + a + ':' + n
                    : (i < 1 ? t.replace('hh:', '') : t.replace('hh', i))
                        .replace('mm', a)
                        .replace('ss', n)
                );
              }),
              (this.paintPlaylist = function () {
                var e,
                  t = _iniSettings.player.getSettings().topPlayer.generic,
                  i = document.createElement('script'),
                  a = t.urlBase ? t.urlBase : '';
                switch (
                  ((i.src = a + '/psdmedia/media/simple/skinsPlaylist/'),
                  _iniSettings.playListSkin)
                ) {
                  case 'oneplayer':
                    'undefined' != typeof tplib
                      ? (i.src += 'oneplayer.lib.js')
                      : (i.src += 'oneplayer.min.js');
                    break;
                  case 'eppodcast':
                    'undefined' != typeof tplib
                      ? (i.src += 'eppodcast.lib.js')
                      : (i.src += 'eppodcast.min.js');
                    break;
                  case 'vacia':
                    'undefined' != typeof tplib
                      ? (i.src += 'vacia.lib.js')
                      : (i.src += 'vacia.min.js');
                    break;
                  case 'generica':
                    this.tipo || (this.tipo = 'lista');
                  default:
                    'undefined' != typeof tplib
                      ? (i.src += 'generica.lib.js')
                      : (i.src += 'generica.min.js'),
                      (_iniSettings.playListSkin = 'generica');
                }
                (i.type = 'text/javascript'),
                  (i.onload =
                    ((e = this),
                    function () {
                      e.onPlayListTemplateLoad();
                    })),
                  document.getElementsByTagName('head')[0].appendChild(i);
              }),
              (this.onPlayListTemplateLoad = function () {
                (_arrayData = this.data()),
                  (_arrayData = _arrayData[0]),
                  (_total = _arrayData.length);
                for (var _currentidrefs = '', jj = 0; jj < _arrayData.length; jj++)
                  null != _arrayData[jj] && (_currentidrefs += _arrayData[jj].idref);
                if (_currentidrefs != _lastidrefs) {
                  _lastidrefs = _currentidrefs;
                  var tpl = eval('new psd.skins.' + _iniSettings.playListSkin + '(this)');
                  if (
                    (tpl.setPlayListContainer(_iniSettings.id_container_playlist),
                    (this.playlistContainer = tpl.getPlayListContainer()),
                    this.playlistContainer)
                  ) {
                    (container = tpl.getItemsContainer()),
                      this.tipo &&
                        (container.classList.contains(this.tipo) ||
                          (container.className += ' ' + this.tipo)),
                      (_elementos = []);
                    for (var jj = 0; jj < _arrayData.length; jj++)
                      null != _arrayData[jj] &&
                        ((elemento = _arrayData[jj]),
                        (item_container = tpl.addItem(elemento)),
                        (item_container.onclick = (function (e) {
                          return function () {
                            _that.esElMismo(e) ||
                              ('object' == typeof _that &&
                                'object' == typeof _that.embedplaylist &&
                                'function' == typeof _that.embedplaylist.getMediaTopEmbed &&
                                'function' ==
                                  typeof _that.embedplaylist.getMediaTopEmbed().getMediaPlayer &&
                                'function' ==
                                  typeof _that.embedplaylist.getMediaTopEmbed().getMediaPlayer()
                                    .getMediaModule &&
                                'function' ==
                                  typeof _that.embedplaylist
                                    .getMediaTopEmbed()
                                    .getMediaPlayer()
                                    .getMediaModule().stop &&
                                _that.embedplaylist
                                  .getMediaTopEmbed()
                                  .getMediaPlayer()
                                  .getMediaModule()
                                  .stop()),
                              _that.loadMedia(e, !0),
                              (_current = e),
                              (_that.embedplaylist._selectedIndex = _that.index);
                          };
                        })(jj)),
                        (item_container.tag = _arrayData[jj].id),
                        _elementos.push(item_container),
                        null != _lastid && _lastid == _arrayData[jj].id && this.setSelected(jj));
                    if (
                      (tpl.doPostCreateTpl(),
                      'object' == typeof _iniSettings.player.getSettings().topPlayer.ui &&
                        !0 === _iniSettings.player.getSettings().topPlayer.ui.skinData.soy_embed)
                    ) {
                      var tmp = document.getElementsByTagName('body');
                      tmp[0].classList.add('widget');
                    }
                  }
                  (this.prevOnclick = function () {
                    --_current < 0 && (_current = _total - 1), this.loadMedia(_current, !0);
                  }),
                    (this.nextOnclick = function () {
                      _total - 1 < ++_current && (_current = 0), this.loadMedia(_current, !0);
                    }),
                    (this.nextAuto = function () {
                      _total - 1 < ++_current && (_current = 0), this.loadMedia(_current);
                    }),
                    (this.setSelected = function (e) {
                      if (e >= _elementos.length) _current = e;
                      else {
                        for (j = 0; j < _elementos.length; j++) _elementos[j].noSelected();
                        e < _elementos.length &&
                          (_elementos[e].setSelected(),
                          (_lastid = _elementos[(_current = e)].tag));
                      }
                    }),
                    (this.loadMedia = function (e, t) {
                      t ? this.resetMedia(e, !0) : this.resetMedia(e, !1), this.setSelected(e);
                    }),
                    this.setSelected(_current);
                }
              });
          }
          (TopPlaylist_lista.prototype = new psd.media.TopPlaylist_BaseController()),
            (namespace.TopPlaylist_lista = TopPlaylist_lista);
        })(psd.media),
        (function (e) {
          function t (r) {
            psd.framework.EventDispatcher.call(this),
              (this.className = 'psd.media.TopWindowError');
            var d = r;
            this.paintMessage = function (e, t) {
              var i,
                a,
                n = new psd.media.InfoPanel(),
                o = new psd.media.Lang();
              'undefined' != typeof LANG && (window.mm_lang = LANG),
                void 0 === window.mm_lang &&
                  ((a = (navigator.language || navigator.userLanguage).substr(0, 2)),
                  o.compatibility(a) ? (window.mm_lang = a) : (window.mm_lang = 'es')),
                void 0 !== t &&
                  (t.topPlayer.ui.skinData.udn,
                  (d.skin = t.topPlayer.ui.skinData.udn),
                  console.log(t.topPlayer.ui.skinData.udn)),
                'diario_as' == d.skin
                  ? ((i = 'contenido_no_disponible_as'), (r.base = '//as.player-top.prisasd.com'))
                  : (i = 'contenido_no_disponible');
              var s = o.translate(window.mm_lang, i);
              n.paint(d.id_container, s, !0, d.base, d.imgCover, d.skin);
            };
          }
          (t.prototype = new psd.framework.EventDispatcher()), (e.TopWindowError = t);
        })(psd.media);
    }
  })();
}
