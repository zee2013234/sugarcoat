var _typeof, socialshareRenewal;
{
  const $___stub_1af3d49f017e59bb = {};
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
  })($___stub_1af3d49f017e59bb);
  const $___stub_89e2ef323dcc6760 = {};
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
  })($___stub_89e2ef323dcc6760);
  (function () {
    (function (exports) {
      !(function (a, b, c) {
        'use strict';
        function d () {
          for (var a = b.querySelectorAll(p), c = 0, d = a.length; d > c; c += 1) {
            e(a[c]);
          }
        }
        function e (a) {
          if (!a[q]) {
            a[q] = !0;
            var b = i(a, 'type'),
              c = i(a, 'action');
            b &&
              c &&
              k(a, 'click', function (d) {
                d.preventDefault(), f(b, c, j(a));
              });
          }
        }
        function f (a, b, d) {
          switch (a) {
            case n.DIALOG:
              switch (b) {
                case o.SHARE:
                  g(d);
                  break;
                default:
                  c.error('bad or missing action: ' + b);
              }
              break;
            default:
              c.error('bad or missing type: ' + a);
          }
        }
        function g (b) {
          var d = b.link;
          if (!d) {
            throw new Error('bad or missing link: ' + d);
          }
          var e = b.next || a.location.href,
            f = b.target || '_self',
            g = l + '?link=' + encodeURIComponent(d) + '&next=' + encodeURIComponent(e),
            i = a.open(g, f);
          if (a !== i.opener) {
            c.log('popup!');
            var j = setInterval(function () {
              h(i) && j && (clearInterval(j), (j = null));
            }, 1000);
          }
        }
        function h (a) {
          if (a.location.hash) {
            var b = m.exec(a.location.hash);
            if (b) {
              var c = b[2];
              if (a.confirm('등록된 글을 카페에서 확인하시겠습니까?')) {
                return a.location.replace(c), !0;
              }
              a.location.hash = a.location.hash.replace(m, '');
            }
          }
        }
        function i (a, b) {
          return a.dataset ? a.dataset[b] : a.getAttribute('data-' + b);
        }
        function j (a) {
          if (a.dataset) {
            return a.dataset;
          }
          for (var b = {}, c = a.attributes, d = 0, e = c.length; e > d; d += 1) {
            var f = c[d],
              g = r.exec(f.name);
            g && (b[g[1]] = f.value);
          }
          return b;
        }
        function k (a, b, c) {
          a.addEventListener
            ? a.addEventListener(b, c, !1)
            : a.attachEvent && a.attachEvent('on' + b, c);
        }
        var l = a.__CAFE_SHARE_DIALOG_ENDPOINT__ || 'http://m.cafe.daum.net/_dialogs/share',
          m = /(#|&)__cafe_link__=(.+)/,
          n = { DIALOG: 'dialog' },
          o = { SHARE: 'share' },
          p = '.cafe-widget',
          q = '__cafe_widget__';
        setTimeout(function () {
          h(a) || d();
        }, 1);
        var r = /^data-(\w+)$/i;
        (a.DaumCafe = a.DaumCafe || {}),
          (a.DaumCafe.Widget = a.DaumCafe.Widget || {}),
          (a.DaumCafe.Widget.connect = f);
      })(window, document, console);
    })();
    var $___var_6734409dcb768407 =
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
    _typeof = $___var_6734409dcb768407;
    !(function (e) {
      if (
        'object' === ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) &&
        'undefined' != typeof module
      )
        module.exports = e();
      else if ('function' == typeof define && define.amd) define([], e);
      else {
        ('undefined' != typeof window
          ? window
          : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
          ? self
          : this
        ).Kakao = e();
      }
    })(function () {
      return (function p (o, a, s) {
        function c (t, e) {
          if (!a[t]) {
            if (!o[t]) {
              var n = 'function' == typeof require && require;
              if (!e && n) return n(t, !0);
              if (u) return u(t, !0);
              var r = new Error("Cannot find module '" + t + "'");
              throw ((r.code = 'MODULE_NOT_FOUND'), r);
            }
            var i = (a[t] = { exports: {} });
            o[t][0].call(
              i.exports,
              function (e) {
                return c(o[t][1][e] || e);
              },
              i,
              i.exports,
              p,
              o,
              a,
              s
            );
          }
          return a[t].exports;
        }
        for (var u = 'function' == typeof require && require, e = 0; e < s.length; e++) c(s[e]);
        return c;
      })(
        {
          1: [
            function (e, t, n) {
              var r,
                i,
                o = (t.exports = {});
              function a () {
                throw new Error('setTimeout has not been defined');
              }
              function s () {
                throw new Error('clearTimeout has not been defined');
              }
              function c (e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === a || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
                try {
                  return r(e, 0);
                } catch (t) {
                  try {
                    return r.call(null, e, 0);
                  } catch (t) {
                    return r.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  r = 'function' == typeof setTimeout ? setTimeout : a;
                } catch (e) {
                  r = a;
                }
                try {
                  i = 'function' == typeof clearTimeout ? clearTimeout : s;
                } catch (e) {
                  i = s;
                }
              })();
              var u,
                l = [],
                p = !1,
                d = -1;
              function f () {
                p && u && ((p = !1), u.length ? (l = u.concat(l)) : (d = -1), l.length && m());
              }
              function m () {
                if (!p) {
                  var e = c(f);
                  p = !0;
                  for (var t = l.length; t; ) {
                    for (u = l, l = []; ++d < t; ) u && u[d].run();
                    (d = -1), (t = l.length);
                  }
                  (u = null),
                    (p = !1),
                    (function n (e) {
                      if (i === clearTimeout) return clearTimeout(e);
                      if ((i === s || !i) && clearTimeout)
                        return (i = clearTimeout), clearTimeout(e);
                      try {
                        return i(e);
                      } catch (t) {
                        try {
                          return i.call(null, e);
                        } catch (t) {
                          return i.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function h (e, t) {
                (this.fun = e), (this.array = t);
              }
              function g () {}
              (o.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (1 < arguments.length)
                  for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                l.push(new h(e, t)), 1 !== l.length || p || c(m);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = 'browser'),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ''),
                (o.versions = {}),
                (o.on = g),
                (o.addListener = g),
                (o.once = g),
                (o.off = g),
                (o.removeListener = g),
                (o.removeAllListeners = g),
                (o.emit = g),
                (o.prependListener = g),
                (o.prependOnceListener = g),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw new Error('process.binding is not supported');
                }),
                (o.cwd = function () {
                  return '/';
                }),
                (o.chdir = function (e) {
                  throw new Error('process.chdir is not supported');
                }),
                (o.umask = function () {
                  return 0;
                });
            },
            {},
          ],
          2: [
            function (c, e, u) {
              (function (e, t) {
                var r = c('process/browser.js').nextTick,
                  n = Function.prototype.apply,
                  i = Array.prototype.slice,
                  o = {},
                  a = 0;
                function s (e, t) {
                  (this._id = e), (this._clearFn = t);
                }
                (u.setTimeout = function () {
                  return new s(n.call(setTimeout, window, arguments), clearTimeout);
                }),
                  (u.setInterval = function () {
                    return new s(n.call(setInterval, window, arguments), clearInterval);
                  }),
                  (u.clearTimeout = u.clearInterval = function (e) {
                    e.close();
                  }),
                  (s.prototype.unref = s.prototype.ref = function () {}),
                  (s.prototype.close = function () {
                    this._clearFn.call(window, this._id);
                  }),
                  (u.enroll = function (e, t) {
                    clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                  }),
                  (u.unenroll = function (e) {
                    clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                  }),
                  (u._unrefActive = u.active = function (e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    0 <= t &&
                      (e._idleTimeoutId = setTimeout(function () {
                        e._onTimeout && e._onTimeout();
                      }, t));
                  }),
                  (u.setImmediate =
                    'function' == typeof e
                      ? e
                      : function (e) {
                          var t = a++,
                            n = !(arguments.length < 2) && i.call(arguments, 1);
                          return (
                            (o[t] = !0),
                            r(function () {
                              o[t] && (n ? e.apply(null, n) : e.call(null), u.clearImmediate(t));
                            }),
                            t
                          );
                        }),
                  (u.clearImmediate =
                    'function' == typeof t
                      ? t
                      : function (e) {
                          delete o[e];
                        });
              }.call(this, c('timers').setImmediate, c('timers').clearImmediate));
            },
            { 'process/browser.js': 1, timers: 2 },
          ],
          3: [
            function (r, e, t) {
              e.exports = (function () {
                var e = r('./auth.js');
                function t () {
                  return 'Bearer ' + e.getAccessToken();
                }
                function n () {
                  return 'KakaoAK ' + e.getAppKey();
                }
                return { accessToken: t, appKey: n, tokenOrKey: e.getAccessToken() ? t : n };
              })();
            },
            { './auth.js': 5 },
          ],
          4: [
            function (a, e, t) {
              e.exports = (function () {
                var n = {};
                a('../vendor/es6-promise.js');
                var r,
                  s = a('../vendor/easyXDM.js'),
                  c = a('./util.js'),
                  u = a('./common.js'),
                  l = a('./api.authType');
                (n.request = function (o) {
                  var a = (o = u.processRules(o, p.request, 'API.request')).url;
                  return (
                    p.api[a].data &&
                      (o.data = u.processRules(o.data, p.api[a].data, 'API.request - ' + a)),
                    new Promise(function (n, i) {
                      (function t () {
                        var n = {};
                        c.each(o.data, function (e, t) {
                          n[t] = c.isString(e) ? e : JSON.stringify(e);
                        });
                        var i = {
                            url: a,
                            method: p.api[a].method,
                            headers: {
                              KA: u.KAKAO_AGENT,
                              'Cache-Control': 'no-cache',
                              Pragma: 'no-cache',
                            },
                            data: n,
                          },
                          e = p.api[a].authType || l.accessToken;
                        return (
                          (i.headers.Authorization = e()),
                          new Promise(function (t, n) {
                            if (
                              (function r (e) {
                                return (
                                  '/v1/api/story/upload/multi' === e ||
                                  '/v2/api/talk/message/image/upload' === e
                                );
                              })(a)
                            ) {
                              if (!o.files && !o.data.file)
                                throw new u.KakaoError("'files' parameter should be set for " + a);
                              (function e (r) {
                                return new Promise(function (t, n) {
                                  var e = c.map(r, function (t) {
                                    return u.serializeFile(t).then(function (e) {
                                      return { name: t.name, type: t.type, str: e };
                                    });
                                  });
                                  Promise.all(e).then(
                                    function (e) {
                                      t({ paramName: 'file', data: e });
                                    },
                                    function (e) {
                                      n(e);
                                    }
                                  );
                                });
                              })(o.files || o.data.file).then(
                                function (e) {
                                  (i.file = e), t(i);
                                },
                                function (e) {
                                  n(e);
                                }
                              );
                            } else t(i);
                          })
                        );
                      })().then(
                        function (e) {
                          (function t () {
                            r ||
                              (r = u.guardCreateEasyXDM(function () {
                                return new s.Rpc(
                                  { remote: u.URL.apiRemote },
                                  { remote: { request: {} } }
                                );
                              }));
                            return r;
                          })().request(
                            e,
                            function (e) {
                              o.success(e), o.always(e), n(e);
                            },
                            function (e) {
                              var t = (function r (e) {
                                try {
                                  u.logDebug(e);
                                  var t = e.message;
                                  return JSON.parse(t.responseText);
                                } catch (n) {
                                  return { code: -777, msg: 'Unknown error' };
                                }
                              })(e);
                              o.fail(t), o.always(t), i(t);
                            }
                          );
                        },
                        function (e) {
                          i(e);
                        }
                      );
                    })
                  );
                }),
                  (n.createAPIAlias = function (t) {
                    return function (e) {
                      return (e = e || {}), c.defaults(e, t), n.request(e);
                    };
                  });
                var e = {
                    permission: c.isOneOf(['A', 'F', 'M']),
                    enable_share: c.isBoolean,
                    android_exec_param: c.isString,
                    ios_exec_param: c.isString,
                    android_market_param: c.isString,
                    ios_market_param: c.isString,
                  },
                  t = { secure_resource: c.isBoolean },
                  p = {
                    request: {
                      required: {
                        url: function (e) {
                          return c.isOneOf(c.keys(p.api))(e);
                        },
                      },
                      optional: {
                        data: c.isObject,
                        files: function (e) {
                          return (
                            c.passesOneOf([c.isArray, c.isFileList])(e) &&
                            c.every(e, c.passesOneOf([c.isFile, c.isBlob]))
                          );
                        },
                        file: c.isFile,
                        success: c.isFunction,
                        fail: c.isFunction,
                        always: c.isFunction,
                      },
                      defaults: {
                        data: {},
                        success: c.emptyFunc,
                        fail: c.emptyFunc,
                        always: c.emptyFunc,
                      },
                    },
                    api: {
                      '/v1/user/signup': {
                        method: 'post',
                        data: { optional: { properties: c.isObject } },
                      },
                      '/v1/user/unlink': { method: 'post' },
                      '/v1/user/me': {
                        method: 'post',
                        data: { optional: c.extend({ propertyKeys: c.isArray }, t) },
                      },
                      '/v2/user/me': {
                        method: 'get',
                        data: { optional: c.extend({ property_keys: c.isArray }, t) },
                      },
                      '/v1/user/logout': { method: 'post', data: {} },
                      '/v1/user/update_profile': {
                        method: 'post',
                        data: { required: { properties: c.isObject } },
                      },
                      '/v1/api/talk/profile': { method: 'get', data: { optional: t } },
                      '/v1/api/talk/memo/send': {
                        method: 'post',
                        data: {
                          required: { template_id: c.passesOneOf([c.isNumber, c.isString]) },
                          optional: { args: c.isString },
                        },
                      },
                      '/v2/api/talk/memo/send': {
                        method: 'post',
                        data: {
                          required: { template_id: c.isNumber },
                          optional: { args: c.isString },
                        },
                      },
                      '/v2/api/talk/memo/scrap/send': {
                        method: 'post',
                        data: {
                          required: { request_url: c.isString },
                          optional: { template_id: c.isNumber, template_args: c.isObject },
                        },
                      },
                      '/v2/api/talk/memo/default/send': {
                        method: 'post',
                        data: { required: { template_object: c.isObject } },
                      },
                      '/v1/api/story/profile': { method: 'get', data: { optional: t } },
                      '/v1/api/story/isstoryuser': { method: 'get' },
                      '/v1/api/story/mystory': {
                        method: 'get',
                        data: { required: { id: c.isString } },
                      },
                      '/v1/api/story/mystories': {
                        method: 'get',
                        data: { optional: { last_id: c.isString } },
                      },
                      '/v1/api/story/linkinfo': {
                        method: 'get',
                        data: { required: { url: c.isString } },
                      },
                      '/v1/api/story/post/note': {
                        method: 'post',
                        data: { required: { content: i }, optional: e },
                      },
                      '/v1/api/story/post/photo': {
                        method: 'post',
                        data: {
                          required: {
                            image_url_list: function o (e) {
                              return (
                                !!c.isArray(e) &&
                                c.every(e, function (e) {
                                  if (!c.isString(e)) return !1;
                                  if (c.isURL(e))
                                    throw new u.KakaoError(
                                      "url in image_url_list should be a kage url, obtained from '/v1/api/story/upload/multi'."
                                    );
                                  return !0;
                                })
                              );
                            },
                          },
                          optional: c.extend({ content: i }, e),
                        },
                      },
                      '/v1/api/story/post/link': {
                        method: 'post',
                        data: {
                          required: { link_info: c.isObject },
                          optional: c.extend({ content: i }, e),
                        },
                      },
                      '/v1/api/story/upload/multi': { method: 'post', data: {} },
                      '/v1/emoticon/my_items': { method: 'get', data: {}, authType: l.appKey },
                      '/v1/emoticon/item_resources': {
                        method: 'get',
                        data: { required: { id: c.isString } },
                        authType: l.appKey,
                      },
                      '/v1/api/story/delete/mystory': {
                        method: 'delete',
                        data: { required: { id: c.isString } },
                      },
                      '/v2/emoticon/items': { method: 'get', authType: l.tokenOrKey },
                      '/v2/emoticon/item': {
                        method: 'get',
                        data: { required: { id: c.passesOneOf([c.isNumber, c.isString]) } },
                        authType: l.tokenOrKey,
                      },
                      '/v2/emoticon/item_resources': { method: 'get', authType: l.tokenOrKey },
                      '/v2/emoticon/item_resource': {
                        method: 'get',
                        data: { required: { id: c.passesOneOf([c.isNumber, c.isString]) } },
                        authType: l.tokenOrKey,
                      },
                      '/v1/s2/publish': {
                        method: 'post',
                        data: {
                          required: {
                            timestamp: c.isNumber,
                            from: c.isString,
                            to: c.isString,
                            action: c.isString,
                          },
                          defaults: function () {
                            return { timestamp: new Date().getTime() };
                          },
                          optional: { props: c.isObject },
                          after: function (e) {
                            if (90000 < JSON.stringify(e).length)
                              throw new u.KakaoError("Event's length is over 90000 bytes.");
                          },
                        },
                        authType: l.appKey,
                      },
                      '/v2/api/kakaolink/talk/template/validate': {
                        method: 'get',
                        data: {
                          required: { link_ver: c.isString, template_id: c.isNumber },
                          optional: { template_args: c.isObject },
                        },
                        authType: l.appKey,
                      },
                      '/v2/api/kakaolink/talk/template/scrap': {
                        method: 'get',
                        data: {
                          required: { link_ver: c.isString, request_url: c.isString },
                          optional: { template_id: c.isNumber, template_args: c.isObject },
                        },
                        authType: l.appKey,
                      },
                      '/v2/api/kakaolink/talk/template/default': {
                        method: 'get',
                        data: { required: { link_ver: c.isString, template_object: c.isObject } },
                        authType: l.appKey,
                      },
                      '/v1/user/access_token_info': { method: 'get', data: {} },
                      '/v2/api/talk/message/image/upload': {
                        method: 'post',
                        data: { required: { file: c.isObject } },
                        authType: l.appKey,
                      },
                      '/v2/api/talk/message/image/delete': {
                        method: 'delete',
                        data: { required: { image_url: c.isString } },
                        authType: l.appKey,
                      },
                      '/v2/api/talk/message/image/scrap': {
                        method: 'post',
                        data: { required: { image_url: c.isString } },
                        authType: l.appKey,
                      },
                      '/v1/vision/face/detect': {
                        method: 'post',
                        data: {
                          required: { image_url: c.isString },
                          optional: { threshold: c.isNumber },
                        },
                        authType: l.appKey,
                      },
                      '/v1/vision/product/detect': {
                        method: 'post',
                        data: {
                          required: { image_url: c.isString },
                          optional: { threshold: c.isNumber },
                        },
                        authType: l.appKey,
                      },
                      '/v1/vision/thumbnail/crop': {
                        method: 'post',
                        data: {
                          required: {
                            image_url: c.isString,
                            width: c.isInteger,
                            height: c.isInteger,
                          },
                        },
                        authType: l.appKey,
                      },
                      '/v1/vision/thumbnail/detect': {
                        method: 'post',
                        data: {
                          required: {
                            image_url: c.isString,
                            width: c.isInteger,
                            height: c.isInteger,
                          },
                        },
                        authType: l.appKey,
                      },
                      '/v1/vision/multitag/generate': {
                        method: 'post',
                        data: { required: { image_url: c.isString } },
                        authType: l.appKey,
                      },
                      '/v1/vision/adult/detect': {
                        method: 'post',
                        data: { required: { image_url: c.isString } },
                        authType: l.appKey,
                      },
                      '/v1/translation/translate': {
                        method: 'post',
                        data: {
                          required: {
                            query: c.isString,
                            src_lang: c.isString,
                            target_lang: c.isString,
                          },
                        },
                        authType: l.appKey,
                      },
                      '/v1/friends': {
                        method: 'get',
                        data: {
                          optional: c.extend(
                            { offset: c.isNumber, limit: c.isNumber, order: c.isString },
                            t
                          ),
                        },
                      },
                      '/v1/user/service/terms': { method: 'get' },
                      '/v1/api/talk/plusfriends': {
                        method: 'get',
                        data: { optional: c.extend({ plus_friend_public_ids: c.isArray }) },
                      },
                      '/v1/user/shipping_address': {
                        method: 'get',
                        data: {
                          optional: c.extend({
                            address_id: c.isNumber,
                            from_updated_at: c.isNumber,
                            page_size: c.isNumber,
                          }),
                        },
                      },
                      '/v1/api/talk/friends': {
                        method: 'get',
                        data: {
                          optional: c.extend(
                            { offset: c.isNumber, limit: c.isNumber, order: c.isString },
                            t
                          ),
                        },
                      },
                      '/v1/api/talk/friends/message/send': {
                        method: 'post',
                        data: {
                          required: {
                            template_id: c.isNumber,
                            receiver_uuids: c.isArray,
                            receiver_id_type: c.isString,
                          },
                          optional: { template_args: c.isObject },
                          defaults: function () {
                            return { receiver_id_type: 'uuid' };
                          },
                        },
                      },
                      '/v1/api/talk/friends/message/scrap/send': {
                        method: 'post',
                        data: {
                          required: {
                            request_url: c.isString,
                            receiver_uuids: c.isArray,
                            receiver_id_type: c.isString,
                          },
                          optional: { template_id: c.isNumber, template_args: c.isObject },
                          defaults: function () {
                            return { receiver_id_type: 'uuid' };
                          },
                        },
                      },
                      '/v1/api/talk/friends/message/default/send': {
                        method: 'post',
                        data: {
                          required: {
                            template_object: c.isObject,
                            receiver_uuids: c.isArray,
                            receiver_id_type: c.isString,
                          },
                          defaults: function () {
                            return { receiver_id_type: 'uuid' };
                          },
                        },
                      },
                    },
                  };
                function i (e) {
                  if (!c.isString(e)) return !1;
                  if (0 === e.length || 2048 < e.length)
                    throw new u.KakaoError('content length should be between 0 and 2048');
                  return !0;
                }
                return (
                  (n.cleanup = function () {
                    r && (r.destroy(), (r = null));
                  }),
                  n
                );
              })();
            },
            {
              '../vendor/easyXDM.js': 25,
              '../vendor/es6-promise.js': 26,
              './api.authType': 3,
              './common.js': 9,
              './util.js': 22,
            },
          ],
          5: [
            function (B, e, t) {
              e.exports = (function () {
                var r = {},
                  i = B('../vendor/easyXDM.js'),
                  o = B('../vendor/CryptoJS.js'),
                  a = B('./util.js'),
                  s = B('./common.js'),
                  c = B('./auth.withTalk.js'),
                  u = B('./auth.withTalk.poller.js'),
                  l = B('./common/everntObserver'),
                  p = B('./webviewchecker.js')(),
                  d = [],
                  f = '_blank',
                  m = 'width=370, height=580, scrollbars=yes, resizable=1';
                r.createLoginButton = function (r) {
                  r = s.processRules(r, j.createLoginButton, 'Auth.createLoginButton');
                  var e = a.getElement(r.container);
                  if (!e)
                    throw new s.KakaoError(
                      'container is required for Kakao login button: pass in element or id'
                    );
                  var t = 'medium' === r.size ? '02' : 'small' === r.size ? '03' : '01',
                    n =
                      s.URL.authDomain +
                      '/public/widget/login/' +
                      r.lang +
                      '/' +
                      r.lang +
                      '_' +
                      t +
                      '_medium.png',
                    i =
                      s.URL.authDomain +
                      '/public/widget/login/' +
                      r.lang +
                      '/' +
                      r.lang +
                      '_' +
                      t +
                      '_medium_press.png';
                  (e.innerHTML =
                    '<img \n        id="kakao-login-btn" \n        src=' +
                    n +
                    '\n        style="cursor: pointer"\n        onmouseover=this.src=\'' +
                    i +
                    "' \n        onmouseout=this.src='" +
                    n +
                    "' />"),
                    (e.onclick = function () {
                      var e = a.getRandomString() + a.getRandomString();
                      if (c.isSupport() && r.throughTalk) _(r, e);
                      else if (p.isNewerAndroidKakaoTalkWebView())
                        if (r.redirectUri) {
                          var t = S(r);
                          location.href = t;
                        } else {
                          var n = b(r, e, s.URL.talkLoginRedirectUri);
                          _(r, e, n);
                        }
                      else if (r.redirectUri) {
                        t = S(r);
                        location.href = t;
                      } else {
                        var t = x(r, e);
                        (s.UA.browser.msie && parseInt(s.UA.browser.version.major) <= 9) ||
                          O(r, e),
                          s.windowOpen(t, f, m);
                      }
                      l.dispatch('LOGIN_START');
                    });
                };
                var e,
                  h,
                  g,
                  v,
                  y,
                  k,
                  t = {};
                function b (t, n, r) {
                  return (function i () {
                    var e = a.extend(
                      {
                        redirect_uri: r,
                        response_type: 'code',
                        state: n,
                        ka: s.KAKAO_AGENT,
                        origin: window.location.origin,
                      },
                      L(t),
                      K(t)
                    );
                    return s.URL.authorize + '?' + a.buildQueryString(e);
                  })();
                }
                function w () {
                  g && g.close && g.close();
                }
                function _ (t, e, n) {
                  if (
                    (h ||
                      ((h = R({}, function (e) {
                        'error' != e.status ||
                          ('500' != e.error_code && '600' != e.error_code) ||
                          (u.stop(),
                          U(
                            {
                              error: e.error_description,
                              error_description: e.error_description,
                              error_code: e.error_code,
                              status: e.status,
                            },
                            t
                          ));
                        if (e.status)
                          if ('ok' == e.status) {
                            if ((u.stop(), v === e.code)) return;
                            (v = e.code),
                              h.getAccessToken(
                                e.code,
                                s.RUNTIME.appKey,
                                s.UA.os.ios && !n ? s.URL.redirectUri : s.URL.talkLoginRedirectUri,
                                t.approvalType
                              ),
                              w();
                          } else 'about:blank' == g.location.href && s.UA.os.ios && w();
                        else U(e, t);
                      })),
                      d.push(function () {
                        h.destroy(), (h = null);
                      })),
                    n)
                  )
                    t.redirectUri ? (location.href = n) : s.windowOpen(n, f, m);
                  else {
                    var r;
                    r = t.redirectUri
                      ? S(t)
                      : x(t, e, s.UA.os.ios ? s.URL.redirectUri : s.URL.talkLoginRedirectUri);
                    var i = a.extend(L(t), K(t));
                    g = c.login(e, r, i, t.redirectUri);
                  }
                  u.start(
                    function () {
                      e && h.getCode(e, s.RUNTIME.appKey);
                    },
                    function () {
                      U(
                        {
                          error: 'timeout',
                          description: 'Account login timed out. Please log in again.',
                          error_description: 'Account login timed out. Please log in again.',
                        },
                        t
                      ),
                        t.redirectUri ? (location.href = r) : s.windowOpen(r, f, m);
                    }
                  );
                }
                function S (t) {
                  return (function n () {
                    var e = a.extend(
                      {
                        redirect_uri: t.redirectUri,
                        response_type: 'code',
                        ka: s.KAKAO_AGENT,
                        origin: window.location.origin,
                      },
                      L(t),
                      K(t)
                    );
                    return s.URL.authorize + '?' + a.buildQueryString(e);
                  })();
                }
                function x (n, r, i) {
                  return (
                    y ||
                      ((y = R({}, function (e) {
                        u.stop(), U(e, I(e, t));
                      })),
                      d.push(function () {
                        y.destroy(), (y = null);
                      })),
                    (t[r] = n),
                    (function o () {
                      var e;
                      e = n.redirectUri ? n.redirectUri : i || 'kakaojs';
                      var t = a.extend(
                        {
                          redirect_uri: e,
                          response_type: 'code',
                          state: r,
                          proxy: 'easyXDM_Kakao_' + y.channel + '_provider',
                          ka: s.KAKAO_AGENT,
                          origin: window.location.origin,
                        },
                        L(n),
                        K(n)
                      );
                      return s.URL.authorize + '?' + a.buildQueryString(t);
                    })()
                  );
                }
                function O (r, e) {
                  a.addEvent(window, 'message', function i (e) {
                    if (/\.kakao\.com$/.test(e.origin) && e.data) {
                      var t = e.data.split(' ');
                      if ('postResponse' === t[1]) {
                        var n = JSON.parse(decodeURIComponent(t[2]));
                        U(n, r), a.removeEvent(window, 'message', i);
                      }
                    }
                    d.push(function () {
                      a.removeEvent(window, 'message', i);
                    });
                  });
                }
                (r.login = function (e) {
                  e = s.processRules(e, j.login, 'Auth.login');
                  var t = a.getRandomString() + a.getRandomString();
                  if (c.isSupport() && e.throughTalk) _(e, t);
                  else if (p.isNewerAndroidKakaoTalkWebView())
                    if (e.redirectUri) {
                      var n = S(e);
                      location.href = n;
                    } else {
                      _(e, t, b(e, t, s.URL.talkLoginRedirectUri));
                    }
                  else if (e.redirectUri) {
                    n = S(e);
                    location.href = n;
                  } else {
                    var n = x(e, t);
                    (s.UA.browser.msie && parseInt(s.UA.browser.version.major) <= 9) || O(e, t),
                      s.windowOpen(n, f, m);
                  }
                  l.dispatch('LOGIN_START');
                }),
                  (r.autoLogin = function (e) {
                    if (
                      ((e = s.processRules(e, j.autoLogin, 'Auth.autoLogin')),
                      p.isIOSKakaoTalkWebView() || p.isAndroidKakaoTalkWebView())
                    ) {
                      var t = a.getRandomString() + a.getRandomString();
                      _(
                        e,
                        t,
                        (function o (t, n, r) {
                          return (function i () {
                            var e = a.extend(
                              {
                                redirect_uri: r,
                                response_type: 'code',
                                state: n,
                                ka: s.KAKAO_AGENT,
                                origin: window.location.origin,
                                auto_login: 'true',
                              },
                              L(t)
                            );
                            return s.URL.authorize + '?' + a.buildQueryString(e);
                          })();
                        })(e, t, s.URL.talkLoginRedirectUri)
                      );
                    } else {
                      F(
                        {
                          error: 'auto_login',
                          error_description:
                            'Auto-login is only supported by KakaoTalk InAppBrowser.',
                          error_code: '400',
                          status: 'error',
                        },
                        e
                      );
                    }
                    l.dispatch('LOGIN_START');
                  }),
                  (r.issueAccessToken = function (t) {
                    (t = s.processRules(t, j.issueAccessToken, 'Auth.issueAccessToken')),
                      e ||
                        (e = R({}, function (e) {
                          U(e, t);
                        })),
                      e.getAccessToken(t.code, s.RUNTIME.appKey, t.redirectUri);
                  });
                var A = {};
                r.selectStoryChannel = function (t) {
                  (t = s.processRules(t, j.selectStoryChannel, 'Auth.selectStoryChannel')),
                    k ||
                      ((k = R({}, function (e) {
                        F(e, I(e, A));
                      })),
                      d.push(function () {
                        k.destroy(), (k = null);
                      }));
                  var n = a.getRandomString();
                  (A[n] = t),
                    window.open(
                      (function r () {
                        var e = a.extend(
                          {
                            state: n,
                            proxy: 'easyXDM_Kakao_' + k.channel + '_provider',
                            token: t.extendedToken || '',
                          },
                          L(t)
                        );
                        return s.URL.storyChannel + '?' + a.buildQueryString(e);
                      })(),
                      'kakaostory_channel_select',
                      m
                    );
                };
                var n = { success: a.emptyFunc, fail: a.emptyFunc, always: a.emptyFunc },
                  T = a.extend(
                    { throughTalk: !0, persistAccessToken: !0, persistRefreshToken: !1 },
                    n
                  ),
                  E = {
                    success: a.isFunction,
                    fail: a.isFunction,
                    always: a.isFunction,
                    persistAccessToken: a.isBoolean,
                    persistRefreshToken: a.isBoolean,
                    approvalType: a.isOneOf(['project']),
                    scope: a.isString,
                    throughTalk: a.isBoolean,
                    plusFriendPublicId: a.isString,
                    serviceTerms: a.isString,
                    redirectUri: a.isString,
                    state: a.isString,
                  },
                  j = {
                    createLoginButton: {
                      required: { container: a.passesOneOf([a.isElement, a.isString]) },
                      optional: a.extend(
                        {
                          lang: a.isOneOf(['en', 'kr']),
                          size: a.isOneOf(['small', 'medium', 'large']),
                        },
                        E
                      ),
                      defaults: a.extend({ lang: 'kr', size: 'medium' }, T),
                    },
                    login: { optional: E, defaults: T },
                    autoLogin: {
                      optional: {
                        success: a.isFunction,
                        fail: a.isFunction,
                        always: a.isFunction,
                      },
                      defaults: n,
                    },
                    issueAccessToken: {
                      required: { code: a.isString, redirectUri: a.isString },
                      optional: {
                        success: a.isFunction,
                        fail: a.isFunction,
                        always: a.isFunction,
                      },
                      defaults: n,
                    },
                    selectStoryChannel: {
                      optional: {
                        extendedToken: a.isString,
                        success: a.isFunction,
                        fail: a.isFunction,
                        always: a.isFunction,
                      },
                      defaults: n,
                    },
                  };
                function R (t, n) {
                  return (
                    a.extend(t, { remote: s.URL.loginWidget, channel: a.getRandomString() }),
                    s.guardCreateEasyXDM(function () {
                      var e = new i.Rpc(t, {
                        local: {
                          postResponse: n,
                          getKakaoAgent: function () {
                            return s.KAKAO_AGENT;
                          },
                        },
                        remote: {
                          getCode: {},
                          getAccessToken: {},
                          setClient: {},
                          setStateToken: {},
                          deleteAuthCookie: {},
                        },
                      });
                      return (e.channel = t.channel), e;
                    })
                  );
                }
                function I (e, t) {
                  if (!a.has(t, e.stateToken)) throw new s.KakaoError('security error: #CST2');
                  var n = t[e.stateToken];
                  return delete t[e.stateToken], delete e.stateToken, n;
                }
                function U (e, t) {
                  e.error
                    ? (function n (e) {
                        if ('access_denied' == e.error) return;
                        r.setAccessToken(null);
                      })(e)
                    : (r.setAccessToken(e.access_token, t.persistAccessToken),
                      l.dispatch('LOGIN')),
                    F(e, t);
                }
                function F (e, t) {
                  s.logDebug(e), e.error ? t.fail(e) : t.success(e), t.always(e);
                }
                function L (e) {
                  var t = { client_id: s.RUNTIME.appKey };
                  return (
                    e.approvalType && (t.approval_type = e.approvalType),
                    e.scope && (t.scope = e.scope),
                    e.state && e.redirectUri && (t.state = e.state),
                    t
                  );
                }
                function K (e) {
                  var t = {};
                  return (
                    e.plusFriendPublicId !== undefined &&
                      (t['extra.plus_friend_public_id'] = e.plusFriendPublicId),
                    e.serviceTerms !== undefined && (t['extra.service_terms'] = e.serviceTerms),
                    t
                  );
                }
                (r.logout = function (e) {
                  (e = e || a.emptyFunc),
                    s.validate(e, a.isFunction, 'Auth.logout'),
                    Kakao.API.request({
                      url: '/v1/user/logout',
                      always: function () {
                        r.setAccessToken(null), l.dispatch('LOGOUT'), e(!0);
                      },
                    });
                }),
                  (r.loginForm = function (e) {
                    e = s.processRules(e, j.login, 'Auth.loginForm');
                    var t = a.getRandomString() + a.getRandomString();
                    if (e.redirectUri) {
                      n = s.URL.loginForm + '?continue=' + encodeURIComponent(S(e));
                      location.href = n;
                    } else {
                      var n = s.URL.loginForm + '?continue=' + encodeURIComponent(x(e, t));
                      s.windowOpen(n, f, m);
                    }
                  }),
                  (r.setAccessToken = function (e, t) {
                    null === (s.RUNTIME.accessToken = e) || !1 === t
                      ? (function n (e) {
                          a.localStorage.removeItem(e);
                        })(C())
                      : (function i (e, t) {
                          var n = (function r (e, t) {
                            return o.AES.encrypt(e, t).toString();
                          })(t, s.RUNTIME.appKey);
                          a.localStorage.setItem(e, n);
                        })(C(), e);
                  }),
                  (r.setRefreshToken = function (e) {
                    console.log('unsupported operation: setRefreshToken()');
                  }),
                  (r.getAccessToken = function () {
                    return (
                      s.RUNTIME.accessToken ||
                        (s.RUNTIME.accessToken = (function r (e) {
                          var t = a.localStorage.getItem(e);
                          return t
                            ? (function n (e, t) {
                                return o.AES.decrypt(e, t).toString(o.enc.Utf8);
                              })(t, s.RUNTIME.appKey)
                            : null;
                        })(C())),
                      s.RUNTIME.accessToken
                    );
                  }),
                  (r.getRefreshToken = function () {
                    return console.log('unsupported operation: getRefreshToken()'), '';
                  });
                var N = {};
                function C () {
                  return (
                    N.accessTokenKey ||
                      (N.accessTokenKey =
                        'kakao_' +
                        (function t (e) {
                          return o.MD5(e).toString();
                        })('kat' + s.RUNTIME.appKey)),
                    N.accessTokenKey
                  );
                }
                return (
                  (r.getAppKey = function () {
                    return s.RUNTIME.appKey;
                  }),
                  (r.getStatus = function (t) {
                    s.validate(t, a.isFunction, 'Auth.getStatus'),
                      r.getAccessToken()
                        ? Kakao.API.request({ url: '/v1/user/me' }).then(
                            function (e) {
                              t({ status: 'connected', user: e });
                            },
                            function () {
                              t({ status: 'not_connected' });
                            }
                          )
                        : t({ status: 'not_connected' });
                  }),
                  (r.getStatusInfo = function (t) {
                    s.validate(t, a.isFunction, 'Auth.getConnectionInfo'),
                      r.getAccessToken()
                        ? Kakao.API.request({
                            url: '/v2/user/me',
                            success: function (e) {
                              t({ status: 'connected', user: e });
                            },
                            fail: function () {
                              t({ status: 'not_connected' });
                            },
                          })
                        : t({ status: 'not_connected' });
                  }),
                  (r.cleanup = function () {
                    a.each(d, function (e, t) {
                      e();
                    }),
                      (d.length = 0);
                  }),
                  r
                );
              })();
            },
            {
              '../vendor/CryptoJS.js': 24,
              '../vendor/easyXDM.js': 25,
              './auth.withTalk.js': 6,
              './auth.withTalk.poller.js': 7,
              './common.js': 9,
              './common/everntObserver': 11,
              './util.js': 22,
              './webviewchecker.js': 23,
            },
          ],
          6: [
            function (e, t, n) {
              var l, p, d, f, m, r;
              t.exports =
                ((p = e('./common.js')),
                (d = '_blank'),
                (f = 'width=380, height=520, scrollbars=yes'),
                (m = /Version\/4.0/i.test(p.UA.ua) || /; wv\)/i.test(p.UA.ua)),
                (r = /naver\(inapp|fb_iab|daumapps/g.test(p.UA.ua)),
                {
                  isSupport: function () {
                    if (p.UA.os.ios) {
                      var e = /safari|FxiOS|CriOS/.test(p.UA.ua),
                        t = /naver|daumapps/g.test(p.UA.ua) && !/KAKAOTALK/i.test(p.UA.ua);
                      return e || t;
                    }
                    return (
                      !!p.UA.os.android &&
                      p.UA.browser.chrome &&
                      !/opr\//i.test(p.UA.ua) &&
                      30 <= p.UA.browser.version.major &&
                      (!m || (m && r))
                    );
                  },
                  login: function (e, t, n, r) {
                    if (this.isSupport()) {
                      if (p.UA.os.ios) {
                        var i = (function a (e, t) {
                          return (
                            (t.state = e),
                            [
                              p.URL.talkLoginScheme,
                              '?',
                              'client_id=' + p.RUNTIME.appKey,
                              '&',
                              'redirect_uri=' + p.URL.redirectUri,
                              '&',
                              'params=' + encodeURIComponent(JSON.stringify(t)),
                            ].join('')
                          );
                        })(e, n);
                        r
                          ? (location.href =
                              p.URL.universalKakaoLink +
                              encodeURIComponent(i) +
                              '&web=' +
                              encodeURIComponent(t))
                          : (l = p.windowOpen(
                              p.URL.universalKakaoLink +
                                encodeURIComponent(i) +
                                '&web=' +
                                encodeURIComponent(t),
                              d,
                              f
                            ));
                      } else if (p.UA.os.android) {
                        var o = (function s (e, t, n) {
                          return [
                            'intent:#Intent',
                            'action=com.kakao.talk.intent.action.CAPRI_LOGGED_IN_ACTIVITY',
                            'launchFlags=0x08880000',
                            'S.com.kakao.sdk.talk.appKey=' + p.RUNTIME.appKey,
                            'S.com.kakao.sdk.talk.redirectUri=' + p.URL.talkLoginRedirectUri,
                            'S.com.kakao.sdk.talk.state=' + e,
                            'S.com.kakao.sdk.talk.extraparams=' +
                              encodeURIComponent(JSON.stringify(n)),
                            'S.browser_fallback_url=' + encodeURIComponent(t),
                            'end;',
                          ].join(';');
                        })(e, t, n);
                        r
                          ? (location.href = o)
                          : !(function c () {
                              return 40 < p.UA.browser.version.major;
                            })() || m
                          ? (l = p.windowOpen('', d, f)) &&
                            (l.addEventListener('unload', function u () {
                              setTimeout(function () {
                                l && l.location && (l.location.href = t);
                              }, 10);
                            }),
                            (l.location.href = o))
                          : (l = p.windowOpen(o, d, f));
                      }
                      return l;
                    }
                  },
                  hasWebLoginWindow: function () {
                    try {
                      return !(
                        !l ||
                        !l.location ||
                        'about:blank' == l.location.href ||
                        (p.UA.os.android && !l.location.href)
                      );
                    } catch (e) {
                      return !0;
                    }
                  },
                });
            },
            { './common.js': 9 },
          ],
          7: [
            function (e, t, n) {
              t.exports = (function () {
                var n,
                  r = 0,
                  i = function i () {},
                  o = function o () {},
                  t = function t () {
                    return !1;
                  };
                function a () {
                  t() ? s() : 60 < ++r ? (s(), i()) : o();
                }
                function s () {
                  clearInterval(n);
                }
                return {
                  start: function (e, t) {
                    (r = 0),
                      'function' == typeof e && (o = e),
                      'function' == typeof t && (i = t),
                      n && s(),
                      (n = setInterval(a, 1000));
                  },
                  stop: function () {
                    s();
                  },
                  setStopCondition: function (e) {
                    'function' == typeof e && (t = e);
                  },
                };
              })();
            },
            {},
          ],
          8: [
            function (e, t, n) {
              var r;
              t.exports =
                ((r = e('../vendor/userAgent.js')),
                {
                  getOrigin: function () {
                    return (
                      location.protocol +
                      '//' +
                      location.hostname +
                      (location.port ? ':' + location.port : '')
                    );
                  },
                  getNavigator: function () {
                    return navigator;
                  },
                  getUA: function () {
                    return r();
                  },
                });
            },
            { '../vendor/userAgent.js': 27 },
          ],
          9: [
            function (n, e, t) {
              e.exports = (function () {
                const $___old_e386e151dc7680de = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'platform'
                );
                try {
                  if ($___old_e386e151dc7680de)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'platform',
                      $___stub_1af3d49f017e59bb.platform
                    ));
                  return function () {
                    var c = {},
                      u = n('./util.js'),
                      e = n('./browserProxy.js'),
                      t = e.getOrigin();
                    (c.VERSION = '1.33.1'),
                      (c.KAKAO_AGENT =
                        'sdk/' +
                        c.VERSION +
                        ' os/javascript lang/' +
                        (e.getNavigator().userLanguage || e.getNavigator().language) +
                        ' device/' +
                        e.getNavigator().platform.replace(/ /g, '_') +
                        ' origin/' +
                        encodeURIComponent(t)),
                      (c.URL = {
                        authorize: 'https://kauth.kakao.com/oauth/authorize',
                        loginWidget:
                          'https://kauth.kakao.com/public/widget/login/kakaoLoginWidget.html',
                        apiRemote: 'https://kapi.kakao.com/cors/',
                        plusFriend: 'https://pf.kakao.com',
                        storyChannel: 'https://kauth.kakao.com/story/select_channel',
                        storyShare: 'https://story.kakao.com/s/share',
                        channelFollow: 'https://story.kakao.com/s/follow',
                        storyIcon: '//dev.kakao.com/sdk/js/resources/story/icon_small.png',
                        universalKakaoLink: 'https://talk-apps.kakao.com/scheme/',
                        talkLoginScheme: 'kakaokompassauth://authorize',
                        talkLoginRedirectUri: 'https://kapi.kakao.com/cors/afterlogin.html',
                        redirectUri: 'JS-SDK',
                        authDomain: 'https://kauth.kakao.com',
                        navi: 'kakaonavi-sdk://navigate',
                        naviShare: 'kakaonavi-sdk://sharePoi',
                        naviWeb: 'https://kakaonavi-wguide.kakao.com/openapi',
                        loginForm: 'https://accounts.kakao.com/login',
                        sharerDomain: 'https://sharer.kakao.com',
                        stat: 'https://apps.kakao.com/sdk/js',
                        resPrefix: 'https://developers.kakao.com/assets/img/about',
                      }),
                      (c.RUNTIME = { appKey: '', accessToken: '' }),
                      (c.DUMMY_KEY = 'YOUR APP KEY'),
                      (c.UA = e.getUA());
                    var l = function l (e) {
                      Error.prototype.constructor.apply(this, arguments),
                        (this.name = 'KakaoError'),
                        (this.message = e);
                    };
                    return (
                      (l.prototype = new Error()),
                      (c.KakaoError = l),
                      (c.isDebug = function () {
                        return !1;
                      }),
                      (c.logDebug = function (e) {
                        c.isDebug() && window.console && console.log(JSON.stringify(e));
                      }),
                      (c.validate = function (e, t, n) {
                        if (!0 !== t(e)) throw new l('Illegal argument for ' + n);
                      }),
                      (c.processRules = function (e, t, r) {
                        (e = e || {}),
                          t.before && t.before(e),
                          u.isFunction(t.defaults)
                            ? u.defaults(e, t.defaults(e))
                            : u.defaults(e, t.defaults);
                        var n = t.required || {},
                          i = u.difference(u.keys(n), u.keys(e));
                        if (i.length)
                          throw new l('Missing required keys: ' + i.join(',') + ' at ' + r);
                        var o = t.optional || {},
                          a = u.extend({}, n, o),
                          s = u.difference(u.keys(e), u.keys(a));
                        if (s.length)
                          throw new l('Invalid parameter keys: ' + s.join(',') + ' at ' + r);
                        return (
                          u.each(e, function (e, t) {
                            var n = a[t];
                            c.validate(e, n, '"' + t + '" in ' + r);
                          }),
                          t.after && t.after(e),
                          e
                        );
                      }),
                      (c.getInstallUrl = function (e, t) {
                        if (c.UA.os.android) {
                          var n = { appkey: c.RUNTIME.appKey, KA: c.KAKAO_AGENT };
                          return 'market://details?id=' + e + '&referrer=' + JSON.stringify(n);
                        }
                        return c.UA.os.ios ? 'https://itunes.apple.com/app/id' + t : location.href;
                      }),
                      (c.isRetinaDisplay = function () {
                        return (
                          1 < window.devicePixelRatio ||
                          !(
                            !window.matchMedia ||
                            !window.matchMedia(
                              '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)'
                            ).matches
                          )
                        );
                      }),
                      (c.createHiddenIframe = function (e, t) {
                        var n = document.getElementById(e);
                        return (
                          null !== n && n.parentNode.removeChild(n),
                          ((n = document.createElement('iframe')).id = e),
                          (n.style.border = 'none'),
                          (n.style.display = 'none'),
                          (n.style.width = '0px'),
                          (n.style.height = '0px'),
                          (n.src = t),
                          n
                        );
                      }),
                      (c.guardCreateEasyXDM = function (e) {
                        try {
                          return e();
                        } catch (t) {
                          throw t instanceof TypeError
                            ? new l('kakao.js should be loaded from a web server')
                            : new l('EasyXDM -' + t.message);
                        }
                      }),
                      (c.serializeFile = function (r) {
                        return new Promise(function (t, n) {
                          'undefined' == typeof FileReader &&
                            n(new l('File API is not supported for this browser.'));
                          var e = new FileReader();
                          (e.onload = function (e) {
                            try {
                              t(u.arrayBufferToString(e.target.result));
                            } catch (e) {
                              n(e);
                            }
                          }),
                            (e.onerror = function (e) {
                              n(new l('Cannot read file: ' + r.name));
                            }),
                            e.readAsArrayBuffer(r);
                        });
                      }),
                      (c.popupWindows = {}),
                      (c.windowOpen = function (e, t, n) {
                        var r = c.popupWindows[t];
                        return (
                          r && r.close && !r.closed && r.close(),
                          (c.popupWindows[t] = window.open(e, t, n)),
                          c.popupWindows[t]
                        );
                      }),
                      c
                    );
                  }.apply(this, arguments);
                } finally {
                  if ($___old_e386e151dc7680de)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'platform',
                      $___old_e386e151dc7680de
                    ));
                }
              })();
            },
            { './browserProxy.js': 8, './util.js': 22 },
          ],
          10: [
            function (e, t, n) {
              var r;
              t.exports =
                (((r = function r (e) {
                  Error.prototype.constructor.apply(this, arguments),
                    (this.name = 'KakaoError'),
                    (this.message = e);
                }).prototype = new Error()),
                r);
            },
            {},
          ],
          11: [
            function (e, t, n) {
              var r, i;
              t.exports =
                ((r = e('../util')),
                (i = {}),
                {
                  subscribe: function (e, t) {
                    i[e] || (i[e] = []), i[e].push(t);
                  },
                  unsubscribe: function (e, t) {
                    for (var n = i[e], r = 0; r < l.length; r++)
                      if (n[m] === t) {
                        n.splice(m, 1);
                        break;
                      }
                  },
                  dispatch: function (e) {
                    var t = i[e];
                    t &&
                      t.length &&
                      r.each(t, function (e) {
                        e();
                      });
                  },
                });
            },
            { '../util': 22 },
          ],
          12: [
            function (p, e, t) {
              e.exports = function (e, t, r) {
                var n = p('../util.js'),
                  i = p('./KakaoError'),
                  o = p('./validate');
                (e = e || {}),
                  t.before && t.before(e),
                  n.isFunction(t.defaults)
                    ? n.defaults(e, t.defaults(e))
                    : n.defaults(e, t.defaults);
                var a = t.required || {},
                  s = n.difference(n.keys(a), n.keys(e));
                if (s.length) throw new i('Missing required keys: ' + s.join(',') + ' at ' + r);
                var c = t.optional || {},
                  u = n.extend({}, a, c),
                  l = n.difference(n.keys(e), n.keys(u));
                if (l.length) throw new i('Invalid parameter keys: ' + l.join(',') + ' at ' + r);
                return (
                  n.each(e, function (e, t) {
                    var n = u[t];
                    o(e, n, '"' + t + '" in ' + r);
                  }),
                  t.after && t.after(e),
                  e
                );
              };
            },
            { '../util.js': 22, './KakaoError': 10, './validate': 13 },
          ],
          13: [
            function (i, e, t) {
              e.exports = function (e, t, n) {
                var r = i('./KakaoError');
                if (!0 !== t(e)) throw new r('Illegal argument for ' + n);
              };
            },
            { './KakaoError': 10 },
          ],
          14: [
            function (e, t, n) {
              var r, i, o, a;
              t.exports =
                ((r = {}),
                (i = e('./util.js')),
                (o = e('./api.js')),
                e('./common/everntObserver'),
                (a = []),
                (r.getMyItems = o.createAPIAlias({ url: '/v1/emoticon/my_items' })),
                (r.getItemResources = o.createAPIAlias({
                  url: '/v1/emoticon/item_resources',
                  data: {},
                })),
                (r.cleanup = function () {
                  i.each(a, function (e, t) {
                    e();
                  }),
                    (a.length = 0);
                }),
                r);
            },
            { './api.js': 4, './common/everntObserver': 11, './util.js': 22 },
          ],
          15: [
            function (F, e, t) {
              e.exports = (function () {
                var o = 'com.kakao.talk',
                  a = '362057947',
                  e = {},
                  p = F('./util.js'),
                  n = F('./api.js'),
                  d = F('./common.js'),
                  s = F('../vendor/web2app.js'),
                  c = F('./webviewchecker.js')(),
                  u = F('./link.obj.js'),
                  l = F('../vendor/userAgent.js')(),
                  f = F('./link.poller'),
                  t = function t () {
                    (this.appkey = d.RUNTIME.appKey),
                      (this.appver = '1.0'),
                      (this.apiver = '3.0'),
                      (this.linkver = '3.5'),
                      (this.extras = { KA: d.KAKAO_AGENT }),
                      (this.objs = []);
                  },
                  m = function m () {
                    (this.appkey = d.RUNTIME.appKey),
                      (this.appver = '1.0'),
                      (this.linkver = '4.0'),
                      (this.template_json = {}),
                      (this.template_args = {}),
                      (this.template_id = ''),
                      (this.extras = { KA: d.KAKAO_AGENT });
                  },
                  h = function h (e) {
                    var r = {};
                    return (
                      (r.object_type = e.objectType),
                      (r.button_title = e.buttonTitle || ''),
                      p.each(e, function (e, t) {
                        var n = u.create(e, t, 'defaultObject');
                        r && (r[t] = n);
                      }),
                      'list' == r.object_type &&
                        ((r.header_title = e.headerTitle || ''),
                        e.headerImageUrl && (r.header_image_url = e.headerImageUrl),
                        e.headerImageWidth && (r.header_image_width = e.headerImageWidth),
                        e.headerImageHeight && (r.header_image_height = e.headerImageHeight),
                        (r.header_link = r.headerLink || {}),
                        delete r.headerLink),
                      'location' == r.object_type &&
                        ((r.address = e.address || ''), (r.address_title = e.addressTitle || '')),
                      'text' == r.object_type && (r.text = e.text || ''),
                      { link_ver: '4.0', template_object: r }
                    );
                  },
                  g = function g (e) {
                    return {
                      link_ver: '4.0',
                      template_id: e.templateId,
                      template_args: e.templateArgs,
                    };
                  },
                  v = function v (e) {
                    var t = { link_ver: '4.0', request_url: e.requestUrl };
                    return (
                      e.templateId && (t.template_id = e.templateId),
                      e.templateArgs && (t.template_args = e.templateArgs),
                      t
                    );
                  },
                  r = 'custom',
                  i = 'default',
                  y = 'scrap',
                  k = [];
                function b (t, n, r) {
                  var e = p.getElement(n.container);
                  if (!e)
                    throw new d.KakaoError(
                      'container is required for KakaoTalk Link: pass in element or id'
                    );
                  var i = function i (e) {
                    return (
                      (e = e || window.e).preventDefault(), e.stopPropagation(), S(t, n, r), !1
                    );
                  };
                  p.addEvent(e, 'click', i),
                    k.push(function () {
                      p.removeEvent(e, 'click', i);
                    });
                }
                function w (t, e) {
                  var n;
                  switch (e) {
                    case 'custom':
                      n = g(t);
                      break;
                    case 'default':
                      n = h(t);
                      break;
                    case 'scrap':
                      n = v(t);
                      break;
                    default:
                      throw new d.KakaoError('type is required for KakaoTalk Link');
                  }
                  var r = {
                    app_key: d.RUNTIME.appKey,
                    validation_action: e,
                    validation_params: JSON.stringify(n),
                    ka: d.KAKAO_AGENT,
                  };
                  t.serverCallbackArgs && (r.lcba = t.serverCallbackArgs);
                  var i =
                    d.URL.sharerDomain +
                    '/talk/friends/picker/easylink?app_key=' +
                    r.app_key +
                    '&ka=' +
                    encodeURIComponent(r.ka) +
                    '&validation_action=' +
                    r.validation_action +
                    '&validation_params=' +
                    encodeURIComponent(r.validation_params);
                  r.lcba && (i = i + '&lcba=' + encodeURIComponent(r.lcba));
                  var o,
                    a = 'kakao_link_web_sharer',
                    s = 'location=no,resizable=no,status=no,scrollbars=no,width=460,height=608';
                  function c (e) {
                    'sent' === e.data && e.origin === d.URL.sharerDomain && t.callback();
                  }
                  !0 !== (d.UA.browser.msie || d.UA.browser.spartan) && i.length < 2084
                    ? (o = d.windowOpen(i, a, s)).focus()
                    : (o = (function l (e, t, n, r) {
                        var i = d.UA.browser.msie ? {} : d.windowOpen('', n, t),
                          o = document.createElement('form');
                        for (var a in (o.setAttribute('accept-charset', 'utf-8'),
                        o.setAttribute('method', 'post'),
                        o.setAttribute('action', e),
                        o.setAttribute('target', n),
                        o.setAttribute('style', 'display:none'),
                        r))
                          if (r.hasOwnProperty(a)) {
                            var s = document.createElement('input');
                            (s.type = 'hidden'),
                              (s.name = a),
                              (s.value = p.isString(r[a]) ? r[a] : JSON.stringify(r[a])),
                              o.appendChild(s);
                          }
                        return (
                          document.body.appendChild(o),
                          o.submit(),
                          document.body.removeChild(o),
                          i.focus && i.focus(),
                          i
                        );
                      })(d.URL.sharerDomain + '/talk/friends/picker/link', s, a, r)),
                    t.callback &&
                      d.UA.browser.msie &&
                      console.log(
                        "method 'callback' does not support the Internet Explorer environment."
                      );
                  var u = setInterval(function () {
                    o.closed && (clearInterval(u), p.removeEvent(window, 'message', c));
                  }, 1000);
                  p.addEvent(window, 'message', c),
                    k.push(function () {
                      p.removeEvent(window, 'message', c);
                    });
                }
                (e.createTalkLink = e.createTalkLinkButton = function (e) {
                  e = d.processRules(e, A.createTalkLink, 'Link.createTalkLink');
                  var t = p.getElement(e.container);
                  if (!t)
                    throw new d.KakaoError(
                      'container is required for KakaoTalk Link: pass in element or id'
                    );
                  var n = function n () {
                    U(E(e, 'Link.createTalkLink'), e.fail, e.installTalk);
                  };
                  p.addEvent(t, 'click', n),
                    k.push(function () {
                      p.removeEvent(t, 'click', n);
                    });
                }),
                  (e.sendTalkLink = function (e) {
                    U(
                      E(
                        (e = d.processRules(e, A.talkLink, 'Link.sendTalkLink')),
                        'Link.sendTalkLink'
                      ),
                      e.fail,
                      e.installTalk
                    );
                  }),
                  (e.createCustom = e.createCustomButton = function (e) {
                    b(j, (e = d.processRules(e, A.createCustom, 'Link.createCustom')), r);
                  }),
                  (e.createScrap = e.createScrapButton = function (e) {
                    b(R, (e = d.processRules(e, A.createScrap, 'Link.createScrap')), y);
                  }),
                  (e.createDefault = e.createDefaultButton = function (e) {
                    b(
                      I,
                      (e =
                        'list' == e.objectType
                          ? d.processRules(e, A.createDefaultList, 'Link.createDefaultList')
                          : 'location' == e.objectType
                          ? d.processRules(
                              e,
                              A.createDefaultLocation,
                              'Link.createDefaultLocation'
                            )
                          : 'commerce' == e.objectType
                          ? d.processRules(
                              e,
                              A.createDefaultCommerce,
                              'Link.createDefaultCommerce'
                            )
                          : 'text' == e.objectType
                          ? d.processRules(e, A.createDefaultText, 'Link.createDefaultText')
                          : d.processRules(e, A.createDefaultFeed, 'Link.createDefaultFeed')),
                      i
                    );
                  });
                var _ = 'tablet' == l.platform && l.os.ios;
                function S (e, t, n) {
                  var r;
                  if (
                    (l.os.android && (new Image().src = d.URL.stat),
                    'mobile' == l.platform || _ || w(t, n),
                    l.browser.iphone && /version/.test(l.ua.toLowerCase()))
                  ) {
                    var i = null;
                    (r = function r (e) {
                      return (i = e);
                    }),
                      f.start(
                        function () {
                          return null != i;
                        },
                        function () {
                          x(i, t);
                        },
                        function () {
                          t.fail({ msg: 'The request wait time has expired.', at: 'link.poller' });
                        }
                      );
                  } else r = x;
                  return e(t).then(
                    function (e) {
                      return r(e, t);
                    },
                    function (e) {
                      t.fail(e);
                    }
                  );
                }
                function x (e, t) {
                  var n = new m();
                  (n.extras = p.extend(n.extras, t.extras)),
                    t.serverCallbackArgs && (n.extras.lcba = t.serverCallbackArgs),
                    (n.template_json = e.template_msg),
                    (n.template_args = e.template_args),
                    (n.template_id = e.template_id);
                  var r = T + '://send?' + p.buildQueryString(n);
                  if (10000 < JSON.stringify(n).length)
                    throw new d.KakaoError(
                      'Failed to send message because it exceeds the message size limit. Please contact the app administrator.'
                    );
                  ('mobile' == l.platform || _) && U(r, t.fail, t.installTalk);
                  var i = {
                    template_msg: e.template_msg || {},
                    warning_msg: e.warning_msg || {},
                    argument_msg: e.argument_msg || {},
                  };
                  return t.success(i), i;
                }
                (e.sendCustom = function (e) {
                  return S(j, (e = d.processRules(e, A.custom, 'Link.sendCustomTemplate')), r);
                }),
                  (e.sendScrap = function (e) {
                    return S(R, (e = d.processRules(e, A.scrap, 'Link.sendScrap')), y);
                  }),
                  (e.sendDefault = function (e) {
                    if (!e.objectType)
                      throw new d.KakaoError('objectType is required for KakaoTalk Link');
                    return S(I, (e = d.processRules(e, A[e.objectType], 'Link.sendDefault')), i);
                  }),
                  (e.uploadImage = function (e) {
                    return (function t (e) {
                      return n.request({
                        url: '/v2/api/talk/message/image/upload',
                        data: { file: e.file },
                      });
                    })((e = d.processRules(e, A.uploadImage, 'Link.uploadImage')));
                  }),
                  (e.deleteImage = function (e) {
                    return (function t (e) {
                      return n.request({
                        url: '/v2/api/talk/message/image/delete',
                        data: { image_url: e.imageUrl },
                      });
                    })((e = d.processRules(e, A.deleteImage, 'Link.deleteImage')));
                  }),
                  (e.scrapImage = function (e) {
                    return (function t (e) {
                      return n.request({
                        url: '/v2/api/talk/message/image/scrap',
                        data: { image_url: e.imageUrl },
                      });
                    })((e = d.processRules(e, A.scrapImage, 'Link.scrapImage')));
                  });
                var O = ['feed', 'list', 'location', 'commerce', 'text'],
                  A = {
                    talkLink: {
                      optional: {
                        label: p.passesOneOf([p.isString, p.isObject]),
                        image: p.isObject,
                        webImage: p.isObject,
                        webButton: p.isObject,
                        webLink: p.isObject,
                        appButton: p.isObject,
                        appLink: p.isObject,
                        horizontalButton: p.isArray,
                        fail: p.isFunction,
                        installTalk: p.isBoolean,
                        forwardable: p.isBoolean,
                        extras: p.isObject,
                      },
                      before: function (e) {
                        p.isString(e.label) && (e.label = { text: e.label });
                      },
                      defaults: { installTalk: !0, forwardable: !1, fail: p.emptyFunc },
                    },
                    custom: {
                      required: { templateId: p.isNumber },
                      optional: {
                        templateArgs: p.isObject,
                        installTalk: p.isBoolean,
                        fail: p.isFunction,
                        always: p.isFunction,
                        success: p.isFunction,
                        extras: p.isObject,
                        callback: p.isFunction,
                        serverCallbackArgs: p.isString,
                      },
                      defaults: {
                        templateArgs: {},
                        installTalk: !1,
                        fail: p.emptyFunc,
                        always: p.emptyFunc,
                        success: p.emptyFunc,
                        callback: p.emptyFunc,
                      },
                    },
                    scrap: {
                      required: { requestUrl: p.isString },
                      optional: {
                        templateId: p.isNumber,
                        templateArgs: p.isObject,
                        installTalk: p.isBoolean,
                        fail: p.isFunction,
                        always: p.isFunction,
                        success: p.isFunction,
                        extras: p.isObject,
                        callback: p.isFunction,
                        serverCallbackArgs: p.isString,
                      },
                      defaults: {
                        templateArgs: {},
                        installTalk: !1,
                        fail: p.emptyFunc,
                        always: p.emptyFunc,
                        success: p.emptyFunc,
                        callback: p.emptyFunc,
                      },
                    },
                    feed: {
                      required: { objectType: p.isOneOf(O), content: p.isObject },
                      optional: {
                        social: p.isObject,
                        buttonTitle: p.isString,
                        buttons: p.isArray,
                        installTalk: p.isBoolean,
                        fail: p.isFunction,
                        always: p.isFunction,
                        success: p.isFunction,
                        extras: p.isObject,
                        callback: p.isFunction,
                        serverCallbackArgs: p.isString,
                      },
                      defaults: {
                        installTalk: !1,
                        fail: p.emptyFunc,
                        always: p.emptyFunc,
                        success: p.emptyFunc,
                        callback: p.emptyFunc,
                      },
                    },
                    commerce: {
                      required: {
                        objectType: p.isOneOf(O),
                        content: p.isObject,
                        commerce: p.isObject,
                      },
                      optional: {
                        buttonTitle: p.isString,
                        buttons: p.isArray,
                        installTalk: p.isBoolean,
                        fail: p.isFunction,
                        always: p.isFunction,
                        success: p.isFunction,
                        extras: p.isObject,
                        callback: p.isFunction,
                        serverCallbackArgs: p.isString,
                      },
                      defaults: {
                        installTalk: !1,
                        fail: p.emptyFunc,
                        always: p.emptyFunc,
                        success: p.emptyFunc,
                        callback: p.emptyFunc,
                      },
                    },
                    list: {
                      required: {
                        objectType: p.isOneOf(O),
                        headerTitle: p.isString,
                        headerLink: p.isObject,
                        contents: p.isArray,
                      },
                      optional: {
                        buttonTitle: p.isString,
                        buttons: p.isArray,
                        headerImageUrl: p.isString,
                        headerImageWidth: p.isNumber,
                        headerImageHeight: p.isNumber,
                        installTalk: p.isBoolean,
                        fail: p.isFunction,
                        always: p.isFunction,
                        success: p.isFunction,
                        extras: p.isObject,
                        callback: p.isFunction,
                        serverCallbackArgs: p.isString,
                      },
                      defaults: {
                        installTalk: !1,
                        fail: p.emptyFunc,
                        always: p.emptyFunc,
                        success: p.emptyFunc,
                        callback: p.emptyFunc,
                      },
                    },
                    location: {
                      required: {
                        objectType: p.isOneOf(O),
                        content: p.isObject,
                        address: p.isString,
                      },
                      optional: {
                        addressTitle: p.isString,
                        social: p.isObject,
                        buttonTitle: p.isString,
                        buttons: p.isArray,
                        installTalk: p.isBoolean,
                        fail: p.isFunction,
                        always: p.isFunction,
                        success: p.isFunction,
                        extras: p.isObject,
                        callback: p.isFunction,
                        serverCallbackArgs: p.isString,
                      },
                      defaults: {
                        installTalk: !1,
                        fail: p.emptyFunc,
                        always: p.emptyFunc,
                        success: p.emptyFunc,
                        callback: p.emptyFunc,
                      },
                    },
                    text: {
                      required: { objectType: p.isOneOf(O), text: p.isString, link: p.isObject },
                      optional: {
                        buttonTitle: p.isString,
                        buttons: p.isArray,
                        installTalk: p.isBoolean,
                        fail: p.isFunction,
                        always: p.isFunction,
                        success: p.isFunction,
                        extras: p.isObject,
                        callback: p.isFunction,
                        serverCallbackArgs: p.isString,
                      },
                      defaults: {
                        installTalk: !1,
                        fail: p.emptyFunc,
                        always: p.emptyFunc,
                        success: p.emptyFunc,
                        callback: p.emptyFunc,
                      },
                    },
                    uploadImage: {
                      required: { file: p.isObject },
                      optional: { always: p.isFunction, success: p.isFunction },
                      defaults: { always: p.emptyFunc, success: p.emptyFunc },
                    },
                    deleteImage: {
                      required: { imageUrl: p.isString },
                      optional: { always: p.isFunction, success: p.isFunction },
                      defaults: { always: p.emptyFunc, success: p.emptyFunc },
                    },
                    scrapImage: {
                      required: { imageUrl: p.isString },
                      optional: { always: p.isFunction, success: p.isFunction },
                      defaults: { always: p.emptyFunc, success: p.emptyFunc },
                    },
                  };
                (A.createTalkLink = p.extend(
                  { required: { container: p.passesOneOf([p.isElement, p.isString]) } },
                  A.talkLink
                )),
                  (A.createCustom = p.defaults(
                    {
                      required: p.extend(
                        { container: p.passesOneOf([p.isElement, p.isString]) },
                        A.custom.required
                      ),
                    },
                    A.custom
                  )),
                  (A.createScrap = p.defaults(
                    {
                      required: p.extend(
                        { container: p.passesOneOf([p.isElement, p.isString]) },
                        A.scrap.required
                      ),
                    },
                    A.scrap
                  )),
                  (A.createDefaultFeed = p.defaults(
                    {
                      required: p.extend(
                        { container: p.passesOneOf([p.isElement, p.isString]) },
                        A.feed.required
                      ),
                    },
                    A.feed
                  )),
                  (A.createDefaultList = p.defaults(
                    {
                      required: p.extend(
                        { container: p.passesOneOf([p.isElement, p.isString]) },
                        A.list.required
                      ),
                    },
                    A.list
                  )),
                  (A.createDefaultLocation = p.defaults(
                    {
                      required: p.extend(
                        { container: p.passesOneOf([p.isElement, p.isString]) },
                        A.location.required
                      ),
                    },
                    A.location
                  )),
                  (A.createDefaultCommerce = p.defaults(
                    {
                      required: p.extend(
                        { container: p.passesOneOf([p.isElement, p.isString]) },
                        A.commerce.required
                      ),
                    },
                    A.commerce
                  )),
                  (A.createDefaultText = p.defaults(
                    {
                      required: p.extend(
                        { container: p.passesOneOf([p.isElement, p.isString]) },
                        A.text.required
                      ),
                    },
                    A.text
                  ));
                var T = (d.UA.os.ios, 'kakaolink');
                function E (e, r) {
                  var i = new t();
                  return (
                    (i.forwardable = e.forwardable),
                    (i.extras = p.extend(i.extras, e.extras)),
                    p.each(e, function (e, t) {
                      var n = u.create(e, t, r);
                      n && i.objs.push(n);
                    }),
                    T + '://send?' + p.buildQueryString(i)
                  );
                }
                function j (e) {
                  return n.request({
                    url: '/v2/api/kakaolink/talk/template/validate',
                    data: g(e),
                  });
                }
                function R (e) {
                  return n.request({ url: '/v2/api/kakaolink/talk/template/scrap', data: v(e) });
                }
                function I (e) {
                  return n.request({ url: '/v2/api/kakaolink/talk/template/default', data: h(e) });
                }
                function U (e, t, n) {
                  var r = {
                    urlScheme: e,
                    intentURI:
                      'intent:' +
                      e +
                      '#Intent;launchFlags=0x14008000;' +
                      (!0 === n ? 'package=com.kakao.talk;' : '') +
                      'end;',
                    appName: 'KakaoTalk',
                    storeURL: d.getInstallUrl(o, a),
                    onUnsupportedEnvironment: function () {
                      t(e);
                    },
                  };
                  (!n || c.isIOSKakaoTalkWebView() || c.isAndroidWebView()) &&
                    (r.onAppMissing = p.emptyFunc),
                    c.isIOSKakaoTalkWebView() && (r.universalLink = undefined);
                  try {
                    s(r);
                  } catch (i) {
                    console.log(i);
                  }
                }
                return (
                  (e.cleanup = function () {
                    p.each(k, function (e, t) {
                      e();
                    }),
                      (k.length = 0);
                  }),
                  e
                );
              })();
            },
            {
              '../vendor/userAgent.js': 27,
              '../vendor/web2app.js': 28,
              './api.js': 4,
              './common.js': 9,
              './link.obj.js': 16,
              './link.poller': 17,
              './util.js': 22,
              './webviewchecker.js': 23,
            },
          ],
          16: [
            function (T, e, t) {
              e.exports = (function () {
                var a = T('./util.js'),
                  n = T('./common/KakaoError'),
                  s = T('./common/ruleProcess'),
                  e = 'web',
                  t = 'inweb',
                  r = { displayType: a.isOneOf(['both', 'sender', 'receiver']) };
                function i (e) {
                  var t = parseInt(e, 10);
                  if (isNaN(t) || t < 80)
                    throw new n(
                      'Illegal argument for image: width/height should be a number larger than 80'
                    );
                  return !0;
                }
                function o (e) {
                  (e.width = parseInt(e.width, 10)), (e.height = parseInt(e.height, 10));
                }
                function c (e) {
                  var t = a.keys(e)[0];
                  return (
                    'webButton' === t
                      ? s(e.webButton, v[t], 'parameter webButton in Link.createTalkLink')
                      : s(e.appButton, v[t], 'parameter appButton in Link.createTalkLink'),
                    !0
                  );
                }
                function u (e, t) {
                  return {
                    objtype: 'image',
                    src: t.src,
                    width: t.width,
                    height: t.height,
                    action: d(e, t),
                    disptype: t.displayType,
                  };
                }
                function l (e, t) {
                  return {
                    objtype: 'button',
                    text: t.text,
                    action: d(e, t),
                    disptype: t.displayType,
                  };
                }
                function p (e, t) {
                  return {
                    objtype: 'link',
                    text: t.text,
                    action: d(e, t),
                    disptype: t.displayType,
                  };
                }
                function d (e, n) {
                  switch (e) {
                    case 'web':
                      return (function r () {
                        return {
                          type: n.type,
                          url: n.url
                            ? (function t (e) {
                                return -1 < e.indexOf('://') ? e : 'http://' + e;
                              })(n.url)
                            : undefined,
                          auth: n.auth,
                        };
                      })();
                    case 'app':
                      return (function t () {
                        return {
                          type: 'app',
                          url: n.webUrl,
                          actioninfo: (function e (r, i) {
                            r && (r = s(r, y, 'execParams in Kakao.Link'));
                            i && (i = s(i, y, 'marketParams in Kakao.Link'));
                            var o = [];
                            return (
                              a.each(
                                {
                                  android: { os: 'android' },
                                  iphone: { os: 'ios', devicetype: 'phone' },
                                  ipad: { os: 'ios', devicetype: 'pad' },
                                },
                                function (e, t) {
                                  var n = a.extend({}, e);
                                  r && r[t] && (n.execparam = a.buildQueryString(r[t], !1)),
                                    i && i[t] && (n.marketparam = a.buildQueryString(i[t], !1)),
                                    (n.execparam || n.marketparam) && o.push(n);
                                }
                              ),
                              o
                            );
                          })(n.execParams, n.marketParams),
                        };
                      })();
                    default:
                      return undefined;
                  }
                }
                function f (e) {
                  return {
                    web_url: e.webUrl,
                    mobile_web_url: e.mobileWebUrl,
                    android_execution_params: e.androidExecParams,
                    ios_execution_params: e.iosExecParams,
                  };
                }
                function m (e) {
                  return s(e, v.content, 'parameter content in Link.sendDefault'), !0;
                }
                function h (e) {
                  return s(e, v.link, 'parameter link in Link.sendDefault'), !0;
                }
                function g (e) {
                  return s(e, v.button, 'parameter button in Link.sendDefault'), !0;
                }
                var v = {
                    label: {
                      required: { text: a.isString },
                      optional: r,
                      builder: function k (e) {
                        return { objtype: 'label', text: e.text, disptype: e.displayType };
                      },
                    },
                    image: {
                      required: { src: a.isString, width: i, height: i },
                      optional: r,
                      before: o,
                      builder: a.partial(u, null),
                    },
                    webImage: {
                      required: { src: a.isString, width: i, height: i },
                      optional: a.extend(
                        { url: a.isString, auth: a.isBoolean, type: a.isOneOf([e, t]) },
                        r
                      ),
                      defaults: { type: e },
                      before: o,
                      builder: a.partial(u, 'web'),
                    },
                    webButton: {
                      optional: a.extend(
                        {
                          text: a.isString,
                          url: a.isString,
                          auth: a.isBoolean,
                          type: a.isOneOf(['web', 'inweb']),
                        },
                        r
                      ),
                      defaults: { type: 'web' },
                      builder: a.partial(l, 'web'),
                    },
                    appButton: {
                      optional: a.extend(
                        {
                          text: a.isString,
                          webUrl: a.isString,
                          execParams: a.isObject,
                          marketParams: a.isObject,
                          type: a.isString,
                        },
                        r
                      ),
                      defaults: { type: 'app' },
                      builder: a.partial(l, 'app'),
                    },
                    webLink: {
                      required: { text: a.isString },
                      optional: a.extend(
                        { url: a.isString, auth: a.isBoolean, type: a.isOneOf(['web', 'inweb']) },
                        r
                      ),
                      defaults: { type: 'web' },
                      builder: a.partial(p, 'web'),
                    },
                    appLink: {
                      required: { text: a.isString },
                      optional: a.extend(
                        { webUrl: a.isString, execParams: a.isObject, marketParams: a.isObject },
                        r
                      ),
                      builder: a.partial(p, 'app'),
                    },
                    horizontalButton: {
                      required: { 0: c, 1: c },
                      builder: function b (e) {
                        var t = a.keys(e[0]),
                          n = a.keys(e[1]),
                          r = e[0][t],
                          i = e[1][n];
                        return {
                          objtype: 'horizontal',
                          subs: [
                            { objtype: 'button', text: r.text, action: d(r.type, r) },
                            { objtype: 'button', text: i.text, action: d(i.type, i) },
                          ],
                          disptype: 'both',
                        };
                      },
                    },
                    content: {
                      required: { title: a.isString, imageUrl: a.isString, link: h },
                      optional: {
                        imageWidth: a.isNumber,
                        imageHeight: a.isNumber,
                        description: a.isString,
                      },
                      builder: function w (e) {
                        return {
                          title: e.title,
                          image_url: e.imageUrl,
                          link: f(e.link),
                          image_width: e.imageWidth,
                          image_height: e.imageHeight,
                          description: e.description,
                        };
                      },
                    },
                    contents: {
                      optional: { 0: m, 1: m, 2: m },
                      builder: function _ (e) {
                        if (e.length < 2)
                          throw new n('Illegal argument for contents: min count(2)');
                        return a.map(e, function (e) {
                          return {
                            title: e.title,
                            image_url: e.imageUrl,
                            link: f(e.link),
                            image_width: e.imageWidth,
                            image_height: e.imageHeight,
                            description: e.description,
                          };
                        });
                      },
                    },
                    commerce: {
                      required: { regularPrice: a.isNumber },
                      optional: {
                        discountPrice: a.isNumber,
                        discountRate: a.isNumber,
                        fixedDiscountPrice: a.isNumber,
                      },
                      builder: function S (e) {
                        return {
                          regular_price: e.regularPrice,
                          discount_price: e.discountPrice,
                          discount_rate: e.discountRate,
                          fixed_discount_price: e.fixedDiscountPrice,
                        };
                      },
                    },
                    social: {
                      optional: {
                        likeCount: a.isNumber,
                        commentCount: a.isNumber,
                        sharedCount: a.isNumber,
                        viewCount: a.isNumber,
                        subscriberCount: a.isNumber,
                      },
                      builder: function x (e) {
                        return {
                          like_count: e.likeCount,
                          comment_count: e.commentCount,
                          shared_count: e.sharedCount,
                          view_count: e.viewCount,
                          subscriber_count: e.subscriberCount,
                        };
                      },
                    },
                    button: {
                      required: { title: a.isString, link: h },
                      builder: function O (e) {
                        return { title: e.title, link: f(e.link) };
                      },
                    },
                    buttons: {
                      optional: { 0: g, 1: g },
                      builder: function A (e) {
                        return a.map(e, function (e) {
                          return { title: e.title, link: f(e.link) };
                        });
                      },
                    },
                    headerLink: {
                      optional: {
                        webUrl: a.isString,
                        mobileWebUrl: a.isString,
                        androidExecParams: a.isString,
                        iosExecParams: a.isString,
                      },
                      builder: f,
                    },
                    link: {
                      optional: {
                        webUrl: a.isString,
                        mobileWebUrl: a.isString,
                        androidExecParams: a.isString,
                        iosExecParams: a.isString,
                      },
                      builder: f,
                    },
                  },
                  y = { optional: { iphone: a.isObject, ipad: a.isObject, android: a.isObject } };
                return {
                  create: function (e, t, n) {
                    var r = v[t];
                    if (r)
                      return (
                        (e = s(e, r, "parameter '" + t + "' in " + (n || 'Link'))), r.builder(e)
                      );
                  },
                };
              })();
            },
            { './common/KakaoError': 10, './common/ruleProcess': 12, './util.js': 22 },
          ],
          17: [
            function (e, t, n) {
              t.exports = (function () {
                var a = 0,
                  s = [];
                function c () {
                  for (var e = 0; e < s.length; ++e) clearTimeout(s[e]);
                  s = [];
                }
                return {
                  start: function (e, t, n) {
                    !(function o () {
                      (a = 0), c();
                    })();
                    for (var r = 1; 100 * r < 10001; ++r) {
                      var i = setTimeout(function () {
                        (a += 100), e() ? (c(), t()) : 10001 < a + 100 && (c(), n());
                      }, 100 * r);
                      s.push(i);
                    }
                  },
                  stop: function () {
                    c();
                  },
                };
              })();
            },
            {},
          ],
          18: [
            function (i, e, t) {
              e.exports = (function (e) {
                e.Kakao = e.Kakao || {};
                var t = e.Kakao,
                  n = i('./util.js'),
                  r = i('./common.js');
                return (
                  (t.VERSION = r.VERSION),
                  (t.Story = i('./story.js')),
                  (t.init = function (e) {
                    if (r.RUNTIME.appKey)
                      throw new r.KakaoError('Kakao.init: Already initialized.');
                    if (!n.isString(e) || e === r.DUMMY_KEY)
                      throw new r.KakaoError('Kakao.init: App key must be provided');
                    (r.RUNTIME.appKey = e),
                      (t.Auth = i('./auth.js')),
                      (t.API = i('./api.js')),
                      (t.Link = i('./link.js')),
                      (t.Emoticon = i('./emoticon.js')),
                      (t.Navi = i('./navi.js')),
                      (t.PlusFriend = i('./plusFriend.js'));
                  }),
                  (t.isInitialized = function () {
                    return !!r.RUNTIME.appKey;
                  }),
                  (t.cleanup = function () {
                    t.Auth && t.Auth.cleanup(),
                      t.API && t.API.cleanup(),
                      t.Link && t.Link.cleanup(),
                      t.Story && t.Story.cleanup(),
                      t.Emoticon && t.Emoticon.cleanup(),
                      t.PlusFriend && t.PlusFriend.cleanup(),
                      n.nullify(r.RUNTIME);
                  }),
                  window.kakaoAsyncInit && window.kakaoAsyncInit(),
                  t
                );
              })(window);
            },
            {
              './api.js': 4,
              './auth.js': 5,
              './common.js': 9,
              './emoticon.js': 14,
              './link.js': 15,
              './navi.js': 19,
              './plusFriend.js': 20,
              './story.js': 21,
              './util.js': 22,
            },
          ],
          19: [
            function (t, e, n) {
              e.exports = (function () {
                var i = t('./util.js'),
                  o = t('./common'),
                  a = t('./common/ruleProcess'),
                  s = t('../vendor/web2app.js'),
                  c = 'com.locnall.KimGiSa',
                  e = {};
                (e.start = function (e) {
                  var t = (function r (e) {
                      var t = new u();
                      return (
                        (t.param = {
                          destination: l.spot.destinationBuilder(e),
                          option:
                            '{}' === JSON.stringify(l.spot.optionBuilder(e))
                              ? undefined
                              : l.spot.optionBuilder(e),
                          via_list: e.viaPoints,
                        }),
                        o.URL.navi + '?' + i.buildQueryString(t)
                      );
                    })((e = a(e, l.spot))),
                    n = encodeURIComponent(t.replace(o.URL.navi, o.URL.naviWeb));
                  s({
                    urlScheme: t,
                    intentURI:
                      'intent:' +
                      t +
                      '#Intent;package=' +
                      c +
                      ';S.browser_fallback_url=' +
                      n +
                      ';end;',
                    storeURL: t.replace(o.URL.navi, o.URL.naviWeb),
                    universalLink: t.replace(o.URL.navi, o.URL.naviWeb),
                  });
                }),
                  (e.share = function (e) {
                    var t = (function r (e) {
                        var t = new u();
                        return (
                          (t.param = {
                            destination: p.spot.destinationBuilder(e),
                            option:
                              '{}' === JSON.stringify(p.spot.optionBuilder(e))
                                ? undefined
                                : p.spot.optionBuilder(e),
                          }),
                          (t.scheme_type = 'sharePoi'),
                          o.URL.naviShare + '?' + i.buildQueryString(t)
                        );
                      })((e = a(e, p.spot))),
                      n = encodeURIComponent(t.replace(o.URL.naviShare, o.URL.naviWeb));
                    s({
                      urlScheme: t,
                      intentURI:
                        'intent:' +
                        t +
                        '#Intent;package=' +
                        c +
                        ';S.browser_fallback_url=' +
                        n +
                        ';end;',
                      storeURL: t.replace(o.URL.naviShare, o.URL.naviWeb),
                      universalLink: t.replace(o.URL.naviShare, o.URL.naviWeb),
                    });
                  });
                var u = function u () {
                    (this.appkey = o.RUNTIME.appKey),
                      (this.apiver = '1.0'),
                      (this.extras = { KA: o.KAKAO_AGENT });
                  },
                  l = {
                    spot: {
                      required: { name: i.isString, x: i.isNumber, y: i.isNumber },
                      optional: {
                        coordType: i.isOneOf(['wgs84', 'katec']),
                        vehicleType: i.isOneOf([1, 2, 3, 4, 5, 6, 7]),
                        rpOption: i.isOneOf([1, 2, 3, 4, 5, 6, 8, 100]),
                        routeInfo: i.isBoolean,
                        sX: i.isNumber,
                        sY: i.isNumber,
                        sAngle: i.isNumber,
                        returnUri: i.isString,
                        rpflag: i.isString,
                        cid: i.isString,
                        guideId: i.isNumber,
                        viaPoints: function (e) {
                          if (!i.isArray(e)) return !1;
                          if (3 < e.length) throw new Error('via points should not be exceed 3');
                          return (
                            i.each(e, function (e) {
                              return a(e, l.viaPoint);
                            }),
                            !0
                          );
                        },
                      },
                      destinationBuilder: function (e) {
                        return {
                          name: e.name,
                          x: e.x,
                          y: e.y,
                          rpflag: e.rpflag,
                          cid: e.cid,
                          guide_id: e.guideId,
                        };
                      },
                      optionBuilder: function (e) {
                        return {
                          coord_type: e.coordType,
                          vehicle_type: e.vehicleType,
                          rpoption: e.rpOption,
                          route_info: e.routeInfo,
                          s_x: e.sX,
                          s_y: e.sY,
                          s_angle: e.sAngle,
                          return_uri: e.returnUri,
                        };
                      },
                    },
                    viaPoint: {
                      required: { name: i.isString, x: i.isNumber, y: i.isNumber },
                      optional: { rpflag: i.isString, cid: i.isString },
                    },
                  },
                  p = {
                    spot: {
                      required: { name: i.isString, x: i.isNumber, y: i.isNumber },
                      optional: {
                        coordType: i.isOneOf(['wgs84', 'katec']),
                        rpflag: i.isString,
                        cid: i.isString,
                        guideId: i.isNumber,
                      },
                      destinationBuilder: function (e) {
                        return {
                          name: e.name,
                          x: e.x,
                          y: e.y,
                          rpflag: e.rpflag,
                          cid: e.cid,
                          guide_id: e.guideId,
                        };
                      },
                      optionBuilder: function (e) {
                        return { coord_type: e.coordType };
                      },
                    },
                  };
                return e;
              })();
            },
            {
              '../vendor/web2app.js': 28,
              './common': 9,
              './common/ruleProcess': 12,
              './util.js': 22,
            },
          ],
          20: [
            function (i, e, t) {
              e.exports = (function () {
                var e = {},
                  c = i('./util.js'),
                  u = i('./common.js'),
                  t = i('./browserProxy.js'),
                  l = 'plus_friend_add_social_plugin',
                  p = 'plus_friend_chat_social_plugin',
                  d = 'width=350, height=510',
                  n = '1.0',
                  f = [];
                function m (e, t, n, r) {
                  var i = document.createElement('a'),
                    o = document.createElement('img');
                  return (
                    i.setAttribute('href', '#'),
                    o.setAttribute('src', t),
                    o.setAttribute('alt', n),
                    o.setAttribute('title', n),
                    r.supportMultipleDensities &&
                      o.setAttribute(
                        'srcset',
                        [t.replace('.png', '_2X.png 2x'), t.replace('.png', '_3X.png 3x')].join(
                          ', '
                        )
                      ),
                    i.appendChild(o),
                    i
                  );
                }
                function h (e) {
                  var t = u.URL.plusFriend + '/' + e.plusFriendId + '/friend';
                  return u.RUNTIME.appKey && (t += '?' + r()), t;
                }
                function g (e) {
                  var t = u.URL.plusFriend + '/' + e.plusFriendId + '/chat';
                  return u.RUNTIME.appKey && (t += '?' + r()), t;
                }
                function r () {
                  if (!u.RUNTIME.appKey)
                    throw u.KakaoError(
                      'The app key does not exist. Please call Kakao.init function.'
                    );
                  var e = {
                    api_ver: n,
                    kakao_agent: u.KAKAO_AGENT,
                    app_key: u.RUNTIME.appKey,
                    referer: t.getOrigin() + location.pathname + location.search,
                  };
                  return c.buildQueryString(e);
                }
                (e.createAddFriendButton = function (e) {
                  e = u.processRules(
                    e,
                    v.createAddFriendButton,
                    'PlusFriend.createAddFriendButton'
                  );
                  var t = c.getElement(e.container);
                  if (!t)
                    throw new u.KakaoError(
                      'container is required for creating PlusFriend.addFriend button: pass in element or id'
                    );
                  var n = h(e),
                    r = (function s (e) {
                      var t = 'friendadd_' + e.size + '_' + e.color + '_' + e.shape;
                      return u.URL.resPrefix + '/logos/plusfriend/' + t + '.png';
                    })(e),
                    i = m(n, r, '플러스친구 친구 추가 버튼', e);
                  t.appendChild(i);
                  var o = function o (e) {
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                      u.windowOpen(n, l, d);
                  };
                  c.addEvent(i, 'click', o);
                  var a = function a () {
                    t.removeChild(i), c.removeEvent(i, 'click', o);
                  };
                  f.push(a);
                }),
                  (e.addFriend = function (e) {
                    var t = h((e = u.processRules(e, v.addFriend, 'PlusFriend.addFriend')));
                    u.windowOpen(t, l, d);
                  }),
                  (e.createChatButton = function (e) {
                    e = u.processRules(e, v.createChatButton, 'PlusFriend.createChatButton');
                    var t = c.getElement(e.container);
                    if (!t)
                      throw new u.KakaoError(
                        'container is required for creating PlusFriend.chat button: pass in element or id'
                      );
                    var n = g(e),
                      r = (function s (e) {
                        var t = e.title + '_' + e.size + '_' + e.color + '_' + e.shape;
                        return u.URL.resPrefix + '/logos/plusfriend/' + t + '.png';
                      })(e),
                      i = m(n, r, '플러스친구 1:1 채팅 버튼', e);
                    t.appendChild(i);
                    var o = function o (e) {
                      e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                        u.windowOpen(n, p, d);
                    };
                    c.addEvent(i, 'click', o);
                    var a = function a () {
                      t.removeChild(i), c.removeEvent(i, 'click', o);
                    };
                    f.push(a);
                  }),
                  (e.chat = function (e) {
                    var t = g((e = u.processRules(e, v.chat, 'PlusFriend.chat')));
                    u.windowOpen(t, p, d);
                  });
                var v = {
                  createAddFriendButton: {
                    required: {
                      container: c.passesOneOf([c.isElement, c.isString]),
                      plusFriendId: c.isString,
                    },
                    optional: {
                      color: c.isOneOf(['yellow', 'black']),
                      shape: c.isOneOf(['rect', 'round']),
                      size: c.isOneOf(['small', 'large']),
                      supportMultipleDensities: c.isBoolean,
                    },
                    defaults: function (e) {
                      var t = c.getElement(e.container);
                      return t
                        ? {
                            plusFriendId: t.getAttribute('data-plusfriend-id'),
                            color: t.getAttribute('data-color') || 'yellow',
                            shape: t.getAttribute('data-shape') || 'rect',
                            size: t.getAttribute('data-size') || 'small',
                            supportMultipleDensities: !!t.getAttribute(
                              'data-support-multiple-densities'
                            ),
                          }
                        : null;
                    },
                  },
                  addFriend: { required: { plusFriendId: c.isString } },
                  createChatButton: {
                    required: {
                      container: c.passesOneOf([c.isElement, c.isString]),
                      plusFriendId: c.isString,
                    },
                    optional: {
                      color: c.isOneOf(['yellow', 'mono']),
                      shape: c.isOneOf(['pc', 'mobile']),
                      size: c.isOneOf(['small', 'large']),
                      title: c.isOneOf(['consult', 'question']),
                      supportMultipleDensities: c.isBoolean,
                    },
                    defaults: function (e) {
                      var t = c.getElement(e.container);
                      return t
                        ? {
                            plusFriendId: t.getAttribute('data-plusfriend-id'),
                            color: t.getAttribute('data-color') || 'yellow',
                            shape: t.getAttribute('data-shape') || 'pc',
                            size: t.getAttribute('data-size') || 'small',
                            title: t.getAttribute('data-title') || 'consult',
                            supportMultipleDensities: !!t.getAttribute(
                              'data-support-multiple-densities'
                            ),
                          }
                        : null;
                    },
                  },
                  chat: { required: { plusFriendId: c.isString } },
                };
                return (
                  (e.cleanup = function () {
                    c.each(f, function (e) {
                      e();
                    }),
                      (f.length = 0);
                  }),
                  e
                );
              })();
            },
            { './browserProxy.js': 8, './common.js': 9, './util.js': 22 },
          ],
          21: [
            function (t, e, n) {
              e.exports = (function () {
                var e = {},
                  l = t('./util.js'),
                  p = t('./common.js'),
                  c = t('../vendor/web2app.js'),
                  s = 'kakaostory_social_plugin',
                  u = 'width=670, height=471',
                  d = [];
                (e.createShareButton = function (e) {
                  e = p.processRules(e, f.createShareButton, 'Story.createShareButton');
                  var r = l.getElement(e.container);
                  if (!r)
                    throw new p.KakaoError(
                      'container is required for KakaoStory share button: pass in element or id'
                    );
                  var i = document.createElement('a'),
                    o = document.createElement('img');
                  i.appendChild(o);
                  var t = m(e.url, e.text);
                  i.setAttribute('href', t), i.setAttribute('target', '_blank');
                  var n = function n (e) {
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                      p.windowOpen(t, s, u);
                  };
                  l.addEvent(i, 'click', n);
                  var a = function a () {
                    l.removeEvent(i, 'click', n), r.removeChild(i);
                  };
                  d.push(a),
                    (o.onload = function (e) {
                      var t, n;
                      r.appendChild(i),
                        (n =
                          p.UA.browser.msie && parseInt(p.UA.browser.version.major) <= 10
                            ? ((t = o.width), o.height)
                            : ((t = e.target.width), e.target.height)),
                        (o.width = t),
                        (o.height = n);
                    }),
                    (o.src = p.URL.storyIcon);
                }),
                  (e.share = function (e) {
                    var t = m((e = p.processRules(e, f.share, 'Story.share')).url, e.text);
                    p.windowOpen(t, s, u);
                  }),
                  (e.open = function (e) {
                    var t,
                      n,
                      r =
                        ((e = p.processRules(e, f.open, 'Story.open')).text ? e.text + '\n' : '') +
                        (e.url || ''),
                      i = location.hostname || '';
                    e.urlInfo &&
                      (n =
                        (t = p.processRules(e.urlInfo, f.openUrlInfo, 'Story.open')).name || '');
                    var o = (function s (e, t, n, r) {
                        var i = {
                          post: e,
                          appver: p.VERSION,
                          appid: t,
                          apiver: '1.0',
                          appname: n,
                        };
                        r && (i.urlinfo = r);
                        return l.extend(i, h()), 'storylink://posting?' + l.buildQueryString(i);
                      })(r, i, n || i, JSON.stringify(t)),
                      a = {
                        urlScheme: o,
                        intentURI:
                          'intent:' +
                          o +
                          '#Intent;' +
                          (!0 === e.install ? 'package=com.kakao.story;' : '') +
                          'end;',
                        appname: 'KakaoStory',
                        storeURL: p.getInstallUrl('com.kakao.story', '486244601'),
                        onUnsupportedEnvironment: function () {
                          e.fail && e.fail();
                        },
                      };
                    c(a);
                  });
                var i = 0;
                e.createFollowButton = function (e) {
                  e = p.processRules(e, f.createFollowButton, 'Story.createFollowButton');
                  var t = l.getElement(e.container);
                  if (!t)
                    throw new p.KakaoError(
                      'container is required for KakaoStory follow button: pass in element or id'
                    );
                  var o = document.createElement('iframe'),
                    a = i++;
                  (o.src = (function r (e, t) {
                    var n = {
                      id: e.id,
                      type: e.type,
                      hideFollower: !e.showFollowerCount,
                      frameId: t,
                    };
                    return l.extend(n, h()), p.URL.channelFollow + '?' + l.buildQueryString(n);
                  })(e, a)),
                    o.setAttribute('frameborder', '0'),
                    o.setAttribute('marginwidth', '0'),
                    o.setAttribute('marginheight', '0'),
                    o.setAttribute('scrolling', 'no');
                  var s = e.showFollowerCount && 'horizontal' === e.type ? 85 : 59,
                    c = e.showFollowerCount && 'vertical' === e.type ? 46 : 20;
                  (o.style.width = s + 'px'), (o.style.height = c + 'px');
                  var u = function u (e) {
                    if (e.data && /\.kakao\.com$/.test(e.origin)) {
                      var t = e.data.split(','),
                        n = parseInt(t[0], 10),
                        r = parseInt(t[1], 10),
                        i = parseInt(t[2], 10);
                      if (n !== a) return;
                      s !== r && ((s = r), (o.style.width = r + 'px')),
                        c !== i && ((c = i), (o.style.height = i + 'px'));
                    }
                  };
                  t.appendChild(o), l.addEvent(window, 'message', u);
                  var n = function n () {
                    l.removeEvent(window, 'message', u), t.removeChild(o);
                  };
                  d.push(n);
                };
                var f = {
                  createShareButton: {
                    required: { container: l.passesOneOf([l.isElement, l.isString]) },
                    optional: { url: l.isString, text: l.isString },
                    defaults: function (e) {
                      var t = l.getElement(e.container);
                      return t ? { url: t.getAttribute('data-url') || location.href } : null;
                    },
                  },
                  share: {
                    optional: { url: l.isString, text: l.isString },
                    defaults: { url: location.href },
                  },
                  open: {
                    optional: {
                      url: l.isString,
                      text: l.isString,
                      urlInfo: l.isObject,
                      install: l.isBoolean,
                    },
                    defaults: { url: location.href, install: !1 },
                  },
                  openUrlInfo: {
                    required: { title: l.isString },
                    optional: {
                      desc: l.isString,
                      name: l.isString,
                      images: l.isArray,
                      imageurl: l.isArray,
                      type: l.isString,
                    },
                    defaults: { type: 'website' },
                    before: function (e) {
                      e.images && ((e.imageurl = e.images), delete e.images);
                    },
                  },
                  createFollowButton: {
                    required: {
                      container: l.passesOneOf([l.isElement, l.isString]),
                      id: l.isString,
                    },
                    optional: {
                      type: l.isOneOf(['horizontal', 'vertical']),
                      showFollowerCount: l.isBoolean,
                    },
                    defaults: function (e) {
                      var t = l.getElement(e.container);
                      if (t) {
                        var n = {
                            type: t.getAttribute('data-type') || 'horizontal',
                            showFollowerCount:
                              'false' !== t.getAttribute('data-show-follower-count'),
                          },
                          r = t.getAttribute('data-id');
                        return r && (n.id = r), n;
                      }
                      return null;
                    },
                    after: function (e) {
                      '@' !== e.id.substr(0, 1) && (e.id = '@' + e.id);
                    },
                  },
                };
                function m (e, t) {
                  var n = { url: e };
                  return (
                    t && (n.text = t),
                    l.extend(n, h()),
                    p.URL.storyShare + '?' + l.buildQueryString(n)
                  );
                }
                function h () {
                  var e = { kakao_agent: p.KAKAO_AGENT };
                  return p.RUNTIME.appKey && (e.app_key = p.RUNTIME.appKey), e;
                }
                return (
                  (e.cleanup = function () {
                    l.each(d, function (e, t) {
                      e();
                    }),
                      (d.length = 0);
                  }),
                  e
                );
              })();
            },
            { '../vendor/web2app.js': 28, './common.js': 9, './util.js': 22 },
          ],
          22: [
            function (e, t, n) {
              t.exports = (function () {
                var s = {},
                  a = {},
                  n = Array.prototype,
                  e = Object.prototype,
                  r = n.slice,
                  i = n.concat,
                  o = e.toString,
                  c = e.hasOwnProperty,
                  u = n.forEach,
                  t = n.map,
                  l = n.filter,
                  p = n.every,
                  d = n.some,
                  f = n.indexOf,
                  m = Array.isArray,
                  h = Object.keys,
                  g = (s.each = function (e, t, n) {
                    if (null == e) return e;
                    if (u && e.forEach === u) e.forEach(t, n);
                    else if (e.length === +e.length) {
                      for (var r = 0, i = e.length; r < i; r++)
                        if (t.call(n, e[r], r, e) === a) return;
                    } else {
                      var o = s.keys(e);
                      for (r = 0, i = o.length; r < i; r++)
                        if (t.call(n, e[o[r]], o[r], e) === a) return;
                    }
                    return e;
                  });
                (s.map = function (e, r, i) {
                  var o = [];
                  return null == e
                    ? o
                    : t && e.map === t
                    ? e.map(r, i)
                    : (g(e, function (e, t, n) {
                        o.push(r.call(i, e, t, n));
                      }),
                      o);
                }),
                  (s.filter = function (e, r, i) {
                    var o = [];
                    return null == e
                      ? o
                      : l && e.filter === l
                      ? e.filter(r, i)
                      : (g(e, function (e, t, n) {
                          r.call(i, e, t, n) && o.push(e);
                        }),
                        o);
                  }),
                  (s.every = function (e, r, i) {
                    r || (r = s.identity);
                    var o = !0;
                    return null == e
                      ? o
                      : p && e.every === p
                      ? e.every(r, i)
                      : (g(e, function (e, t, n) {
                          if (!(o = o && r.call(i, e, t, n))) return a;
                        }),
                        !!o);
                  });
                var v = (s.any = function (e, r, i) {
                  r || (r = s.identity);
                  var o = !1;
                  return null == e
                    ? o
                    : d && e.some === d
                    ? e.some(r, i)
                    : (g(e, function (e, t, n) {
                        if (o || (o = r.call(i, e, t, n))) return a;
                      }),
                      !!o);
                });
                return (
                  (s.contains = function (e, t) {
                    return (
                      null != e &&
                      (f && e.indexOf === f
                        ? -1 != e.indexOf(t)
                        : v(e, function (e) {
                            return e === t;
                          }))
                    );
                  }),
                  (s.difference = function (e) {
                    var t = i.apply(n, r.call(arguments, 1));
                    return s.filter(e, function (e) {
                      return !s.contains(t, e);
                    });
                  }),
                  (s.partial = function (i) {
                    var o = r.call(arguments, 1);
                    return function () {
                      for (var e = 0, t = o.slice(), n = 0, r = t.length; n < r; n++)
                        t[n] === s && (t[n] = arguments[e++]);
                      for (; e < arguments.length; ) t.push(arguments[e++]);
                      return i.apply(this, t);
                    };
                  }),
                  (s.after = function (e, t) {
                    return function () {
                      if (--e < 1) return t.apply(this, arguments);
                    };
                  }),
                  (s.keys = function (e) {
                    if (!s.isObject(e)) return [];
                    if (h) return h(e);
                    var t = [];
                    for (var n in e) s.has(e, n) && t.push(n);
                    return t;
                  }),
                  (s.extend = function (n) {
                    return (
                      g(r.call(arguments, 1), function (e) {
                        if (e) for (var t in e) n[t] = e[t];
                      }),
                      n
                    );
                  }),
                  (s.defaults = function (n) {
                    return (
                      g(r.call(arguments, 1), function (e) {
                        if (e) for (var t in e) void 0 === n[t] && (n[t] = e[t]);
                      }),
                      n
                    );
                  }),
                  (s.isElement = function (e) {
                    return !(!e || 1 !== e.nodeType);
                  }),
                  (s.isArray =
                    m ||
                    function (e) {
                      return '[object Array]' == o.call(e);
                    }),
                  (s.isObject = function (e) {
                    return e === Object(e);
                  }),
                  g(
                    [
                      'Arguments',
                      'Function',
                      'String',
                      'Number',
                      'Date',
                      'RegExp',
                      'Blob',
                      'File',
                      'FileList',
                    ],
                    function (t) {
                      s['is' + t] = function (e) {
                        return o.call(e) == '[object ' + t + ']';
                      };
                    }
                  ),
                  (s.isBoolean = function (e) {
                    return !0 === e || !1 === e || '[object Boolean]' == o.call(e);
                  }),
                  (s.has = function (e, t) {
                    return c.call(e, t);
                  }),
                  (s.identity = function (e) {
                    return e;
                  }),
                  (s.isInteger = function (e) {
                    return s.isNumber(e) && e % 1 == 0;
                  }),
                  (s.emptyFunc = function () {}),
                  (s.getElement = function (e) {
                    return s.isElement(e) ? e : s.isString(e) ? document.querySelector(e) : null;
                  }),
                  (s.addEvent = function (e, t, n) {
                    e.addEventListener
                      ? e.addEventListener(t, n, !1)
                      : e.attachEvent && e.attachEvent('on' + t, n);
                  }),
                  (s.removeEvent = function (e, t, n) {
                    e.removeEventListener
                      ? e.removeEventListener(t, n, !1)
                      : e.detachEvent && e.detachEvent('on' + t, n);
                  }),
                  (s.buildQueryString = function (e, t) {
                    var n = [];
                    for (var r in e)
                      if (e.hasOwnProperty(r)) {
                        var i = e[r];
                        s.isObject(i) && (i = JSON.stringify(i));
                        var o = !1 === t ? r : encodeURIComponent(r),
                          a = !1 === t ? i : encodeURIComponent(i);
                        n.push(o + '=' + a);
                      }
                    return n.join('&');
                  }),
                  (s.getRandomString = function () {
                    return Math.random().toString(36).slice(2);
                  }),
                  (s.nullify = function (n) {
                    s.each(n, function (e, t) {
                      n[t] = null;
                    });
                  }),
                  (s.isOneOf = function (e) {
                    return s.partial(s.contains, e);
                  }),
                  (s.passesOneOf = function (e) {
                    if (!s.isArray(e)) throw new Error('validators should be an Array');
                    return function (t) {
                      return s.any(e, function (e) {
                        return e(t);
                      });
                    };
                  }),
                  (s.isURL = function (e) {
                    return /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(
                      e
                    );
                  }),
                  (s.arrayBufferToString = function (e) {
                    var t,
                      n,
                      r,
                      i = '',
                      o = new Uint8Array(e),
                      a = o.length,
                      s = Math.pow(2, 16);
                    for (t = 0; t < a; t += s)
                      (n = Math.min(s, a - t)),
                        (r = o.subarray(t, t + n)),
                        (i += String.fromCharCode.apply(null, r));
                    return i;
                  }),
                  (s.localStorage = (function () {
                    const $___old_ec195b9f5d1dce99 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_ec195b9f5d1dce99)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_89e2ef323dcc6760.localStorage
                        ));
                      return function () {
                        var e = {
                          _data: {},
                          setItem: function (e, t) {
                            return (this._data[e] = String(t));
                          },
                          getItem: function (e) {
                            return this._data.hasOwnProperty(e) ? this._data[e] : null;
                          },
                          removeItem: function (e) {
                            return delete this._data[e];
                          },
                          clear: function () {
                            return (this._data = {});
                          },
                        };
                        try {
                          return 'localStorage' in window
                            ? (window.localStorage.setItem('store', ''),
                              window.localStorage.removeItem('store'),
                              window.localStorage)
                            : e;
                        } catch (t) {
                          return e;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_ec195b9f5d1dce99)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_ec195b9f5d1dce99
                        ));
                    }
                  })()),
                  s
                );
              })();
            },
            {},
          ],
          23: [
            function (e, t, n) {
              t.exports = function () {
                var r = e('../vendor/userAgent.js')();
                return {
                  isAndroidWebView: function () {
                    return (
                      r.os.android &&
                      ((function e () {
                        return 2 == r.os.version.major && /Version\/\d+.\d+|/i.test(r.ua);
                      })() ||
                        (function t () {
                          return (
                            4 == r.os.version.major &&
                            r.os.version.minor < 4 &&
                            /Version\/\d+.\d+|/i.test(r.ua)
                          );
                        })() ||
                        (function n () {
                          return (
                            /Version\/\d+\.\d+/i.test(r.ua) &&
                            (/Chrome\/\d+\.\d+\.\d+\.\d+ Mobile/i.test(r.ua) ||
                              /; wv\)/i.test(r.ua))
                          );
                        })())
                    );
                  },
                  isIOSKakaoTalkWebView: function () {
                    return r.os.ios && /KAKAOTALK/i.test(r.ua);
                  },
                  isAndroidKakaoTalkWebView: function () {
                    return r.os.android && /KAKAOTALK/i.test(r.ua);
                  },
                  isNewerAndroidKakaoTalkWebView: function () {
                    return (
                      r.os.android &&
                      /KAKAOTALK/i.test(r.ua) &&
                      r.browser.chrome &&
                      71 <= r.browser.version.major
                    );
                  },
                };
              };
            },
            { '../vendor/userAgent.js': 27 },
          ],
          24: [
            function (e, t, n) {
              var r, c, i, o, a, u, s, E;
              t.exports =
                ((E =
                  E ||
                  (function (s, e) {
                    var t = {},
                      n = (t.lib = {}),
                      r = function r () {},
                      i = (n.Base = {
                        extend: function (e) {
                          r.prototype = this;
                          var t = new r();
                          return (
                            e && t.mixIn(e),
                            t.hasOwnProperty('init') ||
                              (t.init = function () {
                                t.$super.init.apply(this, arguments);
                              }),
                            ((t.init.prototype = t).$super = this),
                            t
                          );
                        },
                        create: function () {
                          var e = this.extend();
                          return e.init.apply(e, arguments), e;
                        },
                        init: function () {},
                        mixIn: function (e) {
                          for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                          e.hasOwnProperty('toString') && (this.toString = e.toString);
                        },
                        clone: function () {
                          return this.init.prototype.extend(this);
                        },
                      }),
                      c = (n.WordArray = i.extend({
                        init: function (e, t) {
                          (e = this.words = e || []),
                            (this.sigBytes = null != t ? t : 4 * e.length);
                        },
                        toString: function (e) {
                          return (e || a).stringify(this);
                        },
                        concat: function (e) {
                          var t = this.words,
                            n = e.words,
                            r = this.sigBytes;
                          if (((e = e.sigBytes), this.clamp(), r % 4))
                            for (var i = 0; i < e; i++)
                              t[(r + i) >>> 2] |=
                                ((n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                                (24 - ((r + i) % 4) * 8);
                          else if (65535 < n.length)
                            for (i = 0; i < e; i += 4) t[(r + i) >>> 2] = n[i >>> 2];
                          else t.push.apply(t, n);
                          return (this.sigBytes += e), this;
                        },
                        clamp: function () {
                          var e = this.words,
                            t = this.sigBytes;
                          (e[t >>> 2] &= 4294967295 << (32 - (t % 4) * 8)),
                            (e.length = s.ceil(t / 4));
                        },
                        clone: function () {
                          var e = i.clone.call(this);
                          return (e.words = this.words.slice(0)), e;
                        },
                        random: function (e) {
                          for (var t = [], n = 0; n < e; n += 4)
                            t.push((4294967296 * s.random()) | 0);
                          return new c.init(t, e);
                        },
                      })),
                      o = (t.enc = {}),
                      a = (o.Hex = {
                        stringify: function (e) {
                          var t = e.words;
                          e = e.sigBytes;
                          for (var n = [], r = 0; r < e; r++) {
                            var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                            n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
                          }
                          return n.join('');
                        },
                        parse: function (e) {
                          for (var t = e.length, n = [], r = 0; r < t; r += 2)
                            n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
                          return new c.init(n, t / 2);
                        },
                      }),
                      u = (o.Latin1 = {
                        stringify: function (e) {
                          var t = e.words;
                          e = e.sigBytes;
                          for (var n = [], r = 0; r < e; r++)
                            n.push(String.fromCharCode((t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255));
                          return n.join('');
                        },
                        parse: function (e) {
                          for (var t = e.length, n = [], r = 0; r < t; r++)
                            n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
                          return new c.init(n, t);
                        },
                      }),
                      l = (o.Utf8 = {
                        stringify: function (e) {
                          try {
                            return decodeURIComponent(escape(u.stringify(e)));
                          } catch (t) {
                            throw Error('Malformed UTF-8 data');
                          }
                        },
                        parse: function (e) {
                          return u.parse(unescape(encodeURIComponent(e)));
                        },
                      }),
                      p = (n.BufferedBlockAlgorithm = i.extend({
                        reset: function () {
                          (this._data = new c.init()), (this._nDataBytes = 0);
                        },
                        _append: function (e) {
                          'string' == typeof e && (e = l.parse(e)),
                            this._data.concat(e),
                            (this._nDataBytes += e.sigBytes);
                        },
                        _process: function (e) {
                          var t = this._data,
                            n = t.words,
                            r = t.sigBytes,
                            i = this.blockSize,
                            o = r / (4 * i);
                          if (
                            ((e =
                              (o = e ? s.ceil(o) : s.max((0 | o) - this._minBufferSize, 0)) * i),
                            (r = s.min(4 * e, r)),
                            e)
                          ) {
                            for (var a = 0; a < e; a += i) this._doProcessBlock(n, a);
                            (a = n.splice(0, e)), (t.sigBytes -= r);
                          }
                          return new c.init(a, r);
                        },
                        clone: function () {
                          var e = i.clone.call(this);
                          return (e._data = this._data.clone()), e;
                        },
                        _minBufferSize: 0,
                      }));
                    n.Hasher = p.extend({
                      cfg: i.extend(),
                      init: function (e) {
                        (this.cfg = this.cfg.extend(e)), this.reset();
                      },
                      reset: function () {
                        p.reset.call(this), this._doReset();
                      },
                      update: function (e) {
                        return this._append(e), this._process(), this;
                      },
                      finalize: function (e) {
                        return e && this._append(e), this._doFinalize();
                      },
                      blockSize: 16,
                      _createHelper: function (n) {
                        return function (e, t) {
                          return new n.init(t).finalize(e);
                        };
                      },
                      _createHmacHelper: function (n) {
                        return function (e, t) {
                          return new d.HMAC.init(n, t).finalize(e);
                        };
                      },
                    });
                    var d = (t.algo = {});
                    return t;
                  })(Math)),
                (c = (r = E).lib.WordArray),
                (r.enc.Base64 = {
                  stringify: function (e) {
                    var t = e.words,
                      n = e.sigBytes,
                      r = this._map;
                    e.clamp(), (e = []);
                    for (var i = 0; i < n; i += 3)
                      for (
                        var o =
                            (((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                            (((t[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255) << 8) |
                            ((t[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255),
                          a = 0;
                        a < 4 && i + 0.75 * a < n;
                        a++
                      )
                        e.push(r.charAt((o >>> (6 * (3 - a))) & 63));
                    if ((t = r.charAt(64))) for (; e.length % 4; ) e.push(t);
                    return e.join('');
                  },
                  parse: function (e) {
                    var t = e.length,
                      n = this._map;
                    (r = n.charAt(64)) && -1 != (r = e.indexOf(r)) && (t = r);
                    for (var r = [], i = 0, o = 0; o < t; o++)
                      if (o % 4) {
                        var a = n.indexOf(e.charAt(o - 1)) << ((o % 4) * 2),
                          s = n.indexOf(e.charAt(o)) >>> (6 - (o % 4) * 2);
                        (r[i >>> 2] |= (a | s) << (24 - (i % 4) * 8)), i++;
                      }
                    return c.create(r, i);
                  },
                  _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                }),
                (function (o) {
                  function S (e, t, n, r, i, o, a) {
                    return (((e = e + ((t & n) | (~t & r)) + i + a) << o) | (e >>> (32 - o))) + t;
                  }
                  function x (e, t, n, r, i, o, a) {
                    return (((e = e + ((t & r) | (n & ~r)) + i + a) << o) | (e >>> (32 - o))) + t;
                  }
                  function O (e, t, n, r, i, o, a) {
                    return (((e = e + (t ^ n ^ r) + i + a) << o) | (e >>> (32 - o))) + t;
                  }
                  function A (e, t, n, r, i, o, a) {
                    return (((e = e + (n ^ (t | ~r)) + i + a) << o) | (e >>> (32 - o))) + t;
                  }
                  for (
                    var e = E, t = (r = e.lib).WordArray, n = r.Hasher, r = e.algo, T = [], i = 0;
                    i < 64;
                    i++
                  )
                    T[i] = (4294967296 * o.abs(o.sin(i + 1))) | 0;
                  (r = r.MD5 = n.extend({
                    _doReset: function () {
                      this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878]);
                    },
                    _doProcessBlock: function (e, t) {
                      for (var n = 0; n < 16; n++) {
                        var r = e[(a = t + n)];
                        e[a] =
                          (16711935 & ((r << 8) | (r >>> 24))) |
                          (4278255360 & ((r << 24) | (r >>> 8)));
                      }
                      n = this._hash.words;
                      var i,
                        o,
                        a = e[t + 0],
                        s = ((r = e[t + 1]), e[t + 2]),
                        c = e[t + 3],
                        u = e[t + 4],
                        l = e[t + 5],
                        p = e[t + 6],
                        d = e[t + 7],
                        f = e[t + 8],
                        m = e[t + 9],
                        h = e[t + 10],
                        g = e[t + 11],
                        v = e[t + 12],
                        y = e[t + 13],
                        k = e[t + 14],
                        b = e[t + 15],
                        w = n[0],
                        _ = A(
                          (_ = A(
                            (_ = A(
                              (_ = A(
                                (_ = O(
                                  (_ = O(
                                    (_ = O(
                                      (_ = O(
                                        (_ = x(
                                          (_ = x(
                                            (_ = x(
                                              (_ = x(
                                                (_ = S(
                                                  (_ = S(
                                                    (_ = S(
                                                      (_ = S(
                                                        (_ = n[1]),
                                                        (o = S(
                                                          (o = n[2]),
                                                          (i = S(
                                                            (i = n[3]),
                                                            (w = S(w, _, o, i, a, 7, T[0])),
                                                            _,
                                                            o,
                                                            r,
                                                            12,
                                                            T[1]
                                                          )),
                                                          w,
                                                          _,
                                                          s,
                                                          17,
                                                          T[2]
                                                        )),
                                                        i,
                                                        w,
                                                        c,
                                                        22,
                                                        T[3]
                                                      )),
                                                      (o = S(
                                                        o,
                                                        (i = S(
                                                          i,
                                                          (w = S(w, _, o, i, u, 7, T[4])),
                                                          _,
                                                          o,
                                                          l,
                                                          12,
                                                          T[5]
                                                        )),
                                                        w,
                                                        _,
                                                        p,
                                                        17,
                                                        T[6]
                                                      )),
                                                      i,
                                                      w,
                                                      d,
                                                      22,
                                                      T[7]
                                                    )),
                                                    (o = S(
                                                      o,
                                                      (i = S(
                                                        i,
                                                        (w = S(w, _, o, i, f, 7, T[8])),
                                                        _,
                                                        o,
                                                        m,
                                                        12,
                                                        T[9]
                                                      )),
                                                      w,
                                                      _,
                                                      h,
                                                      17,
                                                      T[10]
                                                    )),
                                                    i,
                                                    w,
                                                    g,
                                                    22,
                                                    T[11]
                                                  )),
                                                  (o = S(
                                                    o,
                                                    (i = S(
                                                      i,
                                                      (w = S(w, _, o, i, v, 7, T[12])),
                                                      _,
                                                      o,
                                                      y,
                                                      12,
                                                      T[13]
                                                    )),
                                                    w,
                                                    _,
                                                    k,
                                                    17,
                                                    T[14]
                                                  )),
                                                  i,
                                                  w,
                                                  b,
                                                  22,
                                                  T[15]
                                                )),
                                                (o = x(
                                                  o,
                                                  (i = x(
                                                    i,
                                                    (w = x(w, _, o, i, r, 5, T[16])),
                                                    _,
                                                    o,
                                                    p,
                                                    9,
                                                    T[17]
                                                  )),
                                                  w,
                                                  _,
                                                  g,
                                                  14,
                                                  T[18]
                                                )),
                                                i,
                                                w,
                                                a,
                                                20,
                                                T[19]
                                              )),
                                              (o = x(
                                                o,
                                                (i = x(
                                                  i,
                                                  (w = x(w, _, o, i, l, 5, T[20])),
                                                  _,
                                                  o,
                                                  h,
                                                  9,
                                                  T[21]
                                                )),
                                                w,
                                                _,
                                                b,
                                                14,
                                                T[22]
                                              )),
                                              i,
                                              w,
                                              u,
                                              20,
                                              T[23]
                                            )),
                                            (o = x(
                                              o,
                                              (i = x(
                                                i,
                                                (w = x(w, _, o, i, m, 5, T[24])),
                                                _,
                                                o,
                                                k,
                                                9,
                                                T[25]
                                              )),
                                              w,
                                              _,
                                              c,
                                              14,
                                              T[26]
                                            )),
                                            i,
                                            w,
                                            f,
                                            20,
                                            T[27]
                                          )),
                                          (o = x(
                                            o,
                                            (i = x(
                                              i,
                                              (w = x(w, _, o, i, y, 5, T[28])),
                                              _,
                                              o,
                                              s,
                                              9,
                                              T[29]
                                            )),
                                            w,
                                            _,
                                            d,
                                            14,
                                            T[30]
                                          )),
                                          i,
                                          w,
                                          v,
                                          20,
                                          T[31]
                                        )),
                                        (o = O(
                                          o,
                                          (i = O(
                                            i,
                                            (w = O(w, _, o, i, l, 4, T[32])),
                                            _,
                                            o,
                                            f,
                                            11,
                                            T[33]
                                          )),
                                          w,
                                          _,
                                          g,
                                          16,
                                          T[34]
                                        )),
                                        i,
                                        w,
                                        k,
                                        23,
                                        T[35]
                                      )),
                                      (o = O(
                                        o,
                                        (i = O(
                                          i,
                                          (w = O(w, _, o, i, r, 4, T[36])),
                                          _,
                                          o,
                                          u,
                                          11,
                                          T[37]
                                        )),
                                        w,
                                        _,
                                        d,
                                        16,
                                        T[38]
                                      )),
                                      i,
                                      w,
                                      h,
                                      23,
                                      T[39]
                                    )),
                                    (o = O(
                                      o,
                                      (i = O(
                                        i,
                                        (w = O(w, _, o, i, y, 4, T[40])),
                                        _,
                                        o,
                                        a,
                                        11,
                                        T[41]
                                      )),
                                      w,
                                      _,
                                      c,
                                      16,
                                      T[42]
                                    )),
                                    i,
                                    w,
                                    p,
                                    23,
                                    T[43]
                                  )),
                                  (o = O(
                                    o,
                                    (i = O(
                                      i,
                                      (w = O(w, _, o, i, m, 4, T[44])),
                                      _,
                                      o,
                                      v,
                                      11,
                                      T[45]
                                    )),
                                    w,
                                    _,
                                    b,
                                    16,
                                    T[46]
                                  )),
                                  i,
                                  w,
                                  s,
                                  23,
                                  T[47]
                                )),
                                (o = A(
                                  o,
                                  (i = A(i, (w = A(w, _, o, i, a, 6, T[48])), _, o, d, 10, T[49])),
                                  w,
                                  _,
                                  k,
                                  15,
                                  T[50]
                                )),
                                i,
                                w,
                                l,
                                21,
                                T[51]
                              )),
                              (o = A(
                                o,
                                (i = A(i, (w = A(w, _, o, i, v, 6, T[52])), _, o, c, 10, T[53])),
                                w,
                                _,
                                h,
                                15,
                                T[54]
                              )),
                              i,
                              w,
                              r,
                              21,
                              T[55]
                            )),
                            (o = A(
                              o,
                              (i = A(i, (w = A(w, _, o, i, f, 6, T[56])), _, o, b, 10, T[57])),
                              w,
                              _,
                              p,
                              15,
                              T[58]
                            )),
                            i,
                            w,
                            y,
                            21,
                            T[59]
                          )),
                          (o = A(
                            o,
                            (i = A(i, (w = A(w, _, o, i, u, 6, T[60])), _, o, g, 10, T[61])),
                            w,
                            _,
                            s,
                            15,
                            T[62]
                          )),
                          i,
                          w,
                          m,
                          21,
                          T[63]
                        );
                      (n[0] = (n[0] + w) | 0),
                        (n[1] = (n[1] + _) | 0),
                        (n[2] = (n[2] + o) | 0),
                        (n[3] = (n[3] + i) | 0);
                    },
                    _doFinalize: function () {
                      var e = this._data,
                        t = e.words,
                        n = 8 * this._nDataBytes,
                        r = 8 * e.sigBytes;
                      t[r >>> 5] |= 128 << (24 - (r % 32));
                      var i = o.floor(n / 4294967296);
                      for (
                        t[15 + (((r + 64) >>> 9) << 4)] =
                          (16711935 & ((i << 8) | (i >>> 24))) |
                          (4278255360 & ((i << 24) | (i >>> 8))),
                          t[14 + (((r + 64) >>> 9) << 4)] =
                            (16711935 & ((n << 8) | (n >>> 24))) |
                            (4278255360 & ((n << 24) | (n >>> 8))),
                          e.sigBytes = 4 * (t.length + 1),
                          this._process(),
                          t = (e = this._hash).words,
                          n = 0;
                        n < 4;
                        n++
                      )
                        (r = t[n]),
                          (t[n] =
                            (16711935 & ((r << 8) | (r >>> 24))) |
                            (4278255360 & ((r << 24) | (r >>> 8))));
                      return e;
                    },
                    clone: function () {
                      var e = n.clone.call(this);
                      return (e._hash = this._hash.clone()), e;
                    },
                  })),
                    (e.MD5 = n._createHelper(r)),
                    (e.HmacMD5 = n._createHmacHelper(r));
                })(Math),
                (a = (i = (o = E).lib).Base),
                (u = i.WordArray),
                (s = (i = o.algo).EvpKDF = a.extend({
                  cfg: a.extend({ keySize: 4, hasher: i.MD5, iterations: 1 }),
                  init: function (e) {
                    this.cfg = this.cfg.extend(e);
                  },
                  compute: function (e, t) {
                    for (
                      var n = (a = this.cfg).hasher.create(),
                        r = u.create(),
                        i = r.words,
                        o = a.keySize,
                        a = a.iterations;
                      i.length < o;

                    ) {
                      s && n.update(s);
                      var s = n.update(e).finalize(t);
                      n.reset();
                      for (var c = 1; c < a; c++) (s = n.finalize(s)), n.reset();
                      r.concat(s);
                    }
                    return (r.sigBytes = 4 * o), r;
                  },
                })),
                (o.EvpKDF = function (e, t, n) {
                  return s.create(n).compute(e, t);
                }),
                E.lib.Cipher ||
                  (function (e) {
                    var t = (f = E).lib,
                      n = t.Base,
                      a = t.WordArray,
                      r = t.BufferedBlockAlgorithm,
                      i = f.enc.Base64,
                      o = f.algo.EvpKDF,
                      s = (t.Cipher = r.extend({
                        cfg: n.extend(),
                        createEncryptor: function (e, t) {
                          return this.create(this._ENC_XFORM_MODE, e, t);
                        },
                        createDecryptor: function (e, t) {
                          return this.create(this._DEC_XFORM_MODE, e, t);
                        },
                        init: function (e, t, n) {
                          (this.cfg = this.cfg.extend(n)),
                            (this._xformMode = e),
                            (this._key = t),
                            this.reset();
                        },
                        reset: function () {
                          r.reset.call(this), this._doReset();
                        },
                        process: function (e) {
                          return this._append(e), this._process();
                        },
                        finalize: function (e) {
                          return e && this._append(e), this._doFinalize();
                        },
                        keySize: 4,
                        ivSize: 4,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function (r) {
                          return {
                            encrypt: function (e, t, n) {
                              return ('string' == typeof t ? m : d).encrypt(r, e, t, n);
                            },
                            decrypt: function (e, t, n) {
                              return ('string' == typeof t ? m : d).decrypt(r, e, t, n);
                            },
                          };
                        },
                      }));
                    t.StreamCipher = s.extend({
                      _doFinalize: function () {
                        return this._process(!0);
                      },
                      blockSize: 1,
                    });
                    var c = (f.mode = {}),
                      u = function u (e, t, n) {
                        var r = this._iv;
                        r ? (this._iv = void 0) : (r = this._prevBlock);
                        for (var i = 0; i < n; i++) e[t + i] ^= r[i];
                      },
                      l = (t.BlockCipherMode = n.extend({
                        createEncryptor: function (e, t) {
                          return this.Encryptor.create(e, t);
                        },
                        createDecryptor: function (e, t) {
                          return this.Decryptor.create(e, t);
                        },
                        init: function (e, t) {
                          (this._cipher = e), (this._iv = t);
                        },
                      })).extend();
                    (l.Encryptor = l.extend({
                      processBlock: function (e, t) {
                        var n = this._cipher,
                          r = n.blockSize;
                        u.call(this, e, t, r),
                          n.encryptBlock(e, t),
                          (this._prevBlock = e.slice(t, t + r));
                      },
                    })),
                      (l.Decryptor = l.extend({
                        processBlock: function (e, t) {
                          var n = this._cipher,
                            r = n.blockSize,
                            i = e.slice(t, t + r);
                          n.decryptBlock(e, t), u.call(this, e, t, r), (this._prevBlock = i);
                        },
                      })),
                      (c = c.CBC = l),
                      (l = (f.pad = {}).Pkcs7 = {
                        pad: function (e, t) {
                          for (
                            var n,
                              r =
                                ((n = (n = 4 * t) - (e.sigBytes % n)) << 24) |
                                (n << 16) |
                                (n << 8) |
                                n,
                              i = [],
                              o = 0;
                            o < n;
                            o += 4
                          )
                            i.push(r);
                          (n = a.create(i, n)), e.concat(n);
                        },
                        unpad: function (e) {
                          e.sigBytes -= 255 & e.words[(e.sigBytes - 1) >>> 2];
                        },
                      }),
                      (t.BlockCipher = s.extend({
                        cfg: s.cfg.extend({ mode: c, padding: l }),
                        reset: function () {
                          s.reset.call(this);
                          var e = (t = this.cfg).iv,
                            t = t.mode;
                          if (this._xformMode == this._ENC_XFORM_MODE) var n = t.createEncryptor;
                          else (n = t.createDecryptor), (this._minBufferSize = 1);
                          this._mode = n.call(t, this, e && e.words);
                        },
                        _doProcessBlock: function (e, t) {
                          this._mode.processBlock(e, t);
                        },
                        _doFinalize: function () {
                          var e = this.cfg.padding;
                          if (this._xformMode == this._ENC_XFORM_MODE) {
                            e.pad(this._data, this.blockSize);
                            var t = this._process(!0);
                          } else (t = this._process(!0)), e.unpad(t);
                          return t;
                        },
                        blockSize: 4,
                      }));
                    var p = (t.CipherParams = n.extend({
                        init: function (e) {
                          this.mixIn(e);
                        },
                        toString: function (e) {
                          return (e || this.formatter).stringify(this);
                        },
                      })),
                      d =
                        ((c = (f.format = {}).OpenSSL = {
                          stringify: function (e) {
                            var t = e.ciphertext;
                            return ((e = e.salt)
                              ? a.create([1398893684, 1701076831]).concat(e).concat(t)
                              : t
                            ).toString(i);
                          },
                          parse: function (e) {
                            var t = (e = i.parse(e)).words;
                            if (1398893684 == t[0] && 1701076831 == t[1]) {
                              var n = a.create(t.slice(2, 4));
                              t.splice(0, 4), (e.sigBytes -= 16);
                            }
                            return p.create({ ciphertext: e, salt: n });
                          },
                        }),
                        (t.SerializableCipher = n.extend({
                          cfg: n.extend({ format: c }),
                          encrypt: function (e, t, n, r) {
                            r = this.cfg.extend(r);
                            var i = e.createEncryptor(n, r);
                            return (
                              (t = i.finalize(t)),
                              (i = i.cfg),
                              p.create({
                                ciphertext: t,
                                key: n,
                                iv: i.iv,
                                algorithm: e,
                                mode: i.mode,
                                padding: i.padding,
                                blockSize: e.blockSize,
                                formatter: r.format,
                              })
                            );
                          },
                          decrypt: function (e, t, n, r) {
                            return (
                              (r = this.cfg.extend(r)),
                              (t = this._parse(t, r.format)),
                              e.createDecryptor(n, r).finalize(t.ciphertext)
                            );
                          },
                          _parse: function (e, t) {
                            return 'string' == typeof e ? t.parse(e, this) : e;
                          },
                        }))),
                      f = ((f.kdf = {}).OpenSSL = {
                        execute: function (e, t, n, r) {
                          return (
                            r || (r = a.random(8)),
                            (e = o.create({ keySize: t + n }).compute(e, r)),
                            (n = a.create(e.words.slice(t), 4 * n)),
                            (e.sigBytes = 4 * t),
                            p.create({ key: e, iv: n, salt: r })
                          );
                        },
                      }),
                      m = (t.PasswordBasedCipher = d.extend({
                        cfg: d.cfg.extend({ kdf: f }),
                        encrypt: function (e, t, n, r) {
                          return (
                            (n = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize)),
                            (r.iv = n.iv),
                            (e = d.encrypt.call(this, e, t, n.key, r)).mixIn(n),
                            e
                          );
                        },
                        decrypt: function (e, t, n, r) {
                          return (
                            (r = this.cfg.extend(r)),
                            (t = this._parse(t, r.format)),
                            (n = r.kdf.execute(n, e.keySize, e.ivSize, t.salt)),
                            (r.iv = n.iv),
                            d.decrypt.call(this, e, t, n.key, r)
                          );
                        },
                      }));
                  })(),
                (function () {
                  for (
                    var e = E,
                      t = e.lib.BlockCipher,
                      n = e.algo,
                      a = [],
                      r = [],
                      i = [],
                      o = [],
                      s = [],
                      c = [],
                      u = [],
                      l = [],
                      p = [],
                      d = [],
                      f = [],
                      m = 0;
                    m < 256;
                    m++
                  )
                    f[m] = m < 128 ? m << 1 : (m << 1) ^ 283;
                  var h = 0,
                    g = 0;
                  for (m = 0; m < 256; m++) {
                    var v =
                      ((v = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4)) >>> 8) ^ (255 & v) ^ 99;
                    a[h] = v;
                    var y = f[(r[v] = h)],
                      k = f[y],
                      b = f[k],
                      w = (257 * f[v]) ^ (16843008 * v);
                    (i[h] = (w << 24) | (w >>> 8)),
                      (o[h] = (w << 16) | (w >>> 16)),
                      (s[h] = (w << 8) | (w >>> 24)),
                      (c[h] = w),
                      (w = (16843009 * b) ^ (65537 * k) ^ (257 * y) ^ (16843008 * h)),
                      (u[v] = (w << 24) | (w >>> 8)),
                      (l[v] = (w << 16) | (w >>> 16)),
                      (p[v] = (w << 8) | (w >>> 24)),
                      (d[v] = w),
                      h ? ((h = y ^ f[f[f[b ^ y]]]), (g ^= f[f[g]])) : (h = g = 1);
                  }
                  var _ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                  (n = n.AES = t.extend({
                    _doReset: function () {
                      for (
                        var e = (n = this._key).words,
                          t = n.sigBytes / 4,
                          n = 4 * ((this._nRounds = t + 6) + 1),
                          r = (this._keySchedule = []),
                          i = 0;
                        i < n;
                        i++
                      )
                        if (i < t) r[i] = e[i];
                        else {
                          var o = r[i - 1];
                          i % t
                            ? 6 < t &&
                              4 == i % t &&
                              (o =
                                (a[o >>> 24] << 24) |
                                (a[(o >>> 16) & 255] << 16) |
                                (a[(o >>> 8) & 255] << 8) |
                                a[255 & o])
                            : ((o =
                                (a[(o = (o << 8) | (o >>> 24)) >>> 24] << 24) |
                                (a[(o >>> 16) & 255] << 16) |
                                (a[(o >>> 8) & 255] << 8) |
                                a[255 & o]),
                              (o ^= _[(i / t) | 0] << 24)),
                            (r[i] = r[i - t] ^ o);
                        }
                      for (e = this._invKeySchedule = [], t = 0; t < n; t++)
                        (i = n - t),
                          (o = t % 4 ? r[i] : r[i - 4]),
                          (e[t] =
                            t < 4 || i <= 4
                              ? o
                              : u[a[o >>> 24]] ^
                                l[a[(o >>> 16) & 255]] ^
                                p[a[(o >>> 8) & 255]] ^
                                d[a[255 & o]]);
                    },
                    encryptBlock: function (e, t) {
                      this._doCryptBlock(e, t, this._keySchedule, i, o, s, c, a);
                    },
                    decryptBlock: function (e, t) {
                      var n = e[t + 1];
                      (e[t + 1] = e[t + 3]),
                        (e[t + 3] = n),
                        this._doCryptBlock(e, t, this._invKeySchedule, u, l, p, d, r),
                        (n = e[t + 1]),
                        (e[t + 1] = e[t + 3]),
                        (e[t + 3] = n);
                    },
                    _doCryptBlock: function (e, t, n, r, i, o, a, s) {
                      for (
                        var c = this._nRounds,
                          u = e[t] ^ n[0],
                          l = e[t + 1] ^ n[1],
                          p = e[t + 2] ^ n[2],
                          d = e[t + 3] ^ n[3],
                          f = 4,
                          m = 1;
                        m < c;
                        m++
                      ) {
                        var h =
                            r[u >>> 24] ^
                            i[(l >>> 16) & 255] ^
                            o[(p >>> 8) & 255] ^
                            a[255 & d] ^
                            n[f++],
                          g =
                            r[l >>> 24] ^
                            i[(p >>> 16) & 255] ^
                            o[(d >>> 8) & 255] ^
                            a[255 & u] ^
                            n[f++],
                          v =
                            r[p >>> 24] ^
                            i[(d >>> 16) & 255] ^
                            o[(u >>> 8) & 255] ^
                            a[255 & l] ^
                            n[f++];
                        (d =
                          r[d >>> 24] ^
                          i[(u >>> 16) & 255] ^
                          o[(l >>> 8) & 255] ^
                          a[255 & p] ^
                          n[f++]),
                          (u = h),
                          (l = g),
                          (p = v);
                      }
                      (h =
                        ((s[u >>> 24] << 24) |
                          (s[(l >>> 16) & 255] << 16) |
                          (s[(p >>> 8) & 255] << 8) |
                          s[255 & d]) ^
                        n[f++]),
                        (g =
                          ((s[l >>> 24] << 24) |
                            (s[(p >>> 16) & 255] << 16) |
                            (s[(d >>> 8) & 255] << 8) |
                            s[255 & u]) ^
                          n[f++]),
                        (v =
                          ((s[p >>> 24] << 24) |
                            (s[(d >>> 16) & 255] << 16) |
                            (s[(u >>> 8) & 255] << 8) |
                            s[255 & l]) ^
                          n[f++]),
                        (d =
                          ((s[d >>> 24] << 24) |
                            (s[(u >>> 16) & 255] << 16) |
                            (s[(l >>> 8) & 255] << 8) |
                            s[255 & p]) ^
                          n[f++]),
                        (e[t] = h),
                        (e[t + 1] = g),
                        (e[t + 2] = v),
                        (e[t + 3] = d);
                    },
                    keySize: 8,
                  })),
                    (e.AES = t._createHelper(n));
                })(),
                E);
            },
            {},
          ],
          25: [
            function (e, t, n) {
              t.exports =
                ((function (h, l, p, g, d, f) {
                  const $___old_510ec64eb61e7d19 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  );
                  try {
                    if ($___old_510ec64eb61e7d19)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_1af3d49f017e59bb.userAgent
                      ));
                    return function () {
                      var s,
                        u,
                        m,
                        c,
                        v,
                        y = this || h,
                        k = Math.floor(10000 * Math.random()),
                        b = Function.prototype,
                        w = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
                        n = /[\-\w]+\/\.\.\//,
                        r = /([^:])\/\//g,
                        _ = '',
                        S = {},
                        t = h.easyXDM,
                        x = 'easyXDM_',
                        O = !1;
                      function A (e, t) {
                        var n = _typeof(e[t]);
                        return 'function' == n || !('object' != n || !e[t]) || 'unknown' == n;
                      }
                      function T () {
                        var e,
                          t = 'Shockwave Flash',
                          n = 'application/x-shockwave-flash';
                        if (!K(navigator.plugins) && 'object' == _typeof(navigator.plugins[t])) {
                          var r = navigator.plugins[t].description;
                          r &&
                            !K(navigator.mimeTypes) &&
                            navigator.mimeTypes[n] &&
                            navigator.mimeTypes[n].enabledPlugin &&
                            (u = r.match(/\d+/g));
                        }
                        if (!u)
                          try {
                            (e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')),
                              (u = Array.prototype.slice.call(
                                e.GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/),
                                1
                              )),
                              (e = null);
                          } catch (a) {}
                        if (!u) return !1;
                        var i = parseInt(u[0], 10),
                          o = parseInt(u[1], 10);
                        return (m = 9 < i && 0 < o), !0;
                      }
                      if (A(h, 'addEventListener'))
                        (c = function c (e, t, n) {
                          e.addEventListener(t, n, !1);
                        }),
                          (v = function v (e, t, n) {
                            e.removeEventListener(t, n, !1);
                          });
                      else {
                        if (!A(h, 'attachEvent')) throw new Error('Browser not supported');
                        (c = function c (e, t, n) {
                          e.attachEvent('on' + t, n);
                        }),
                          (v = function v (e, t, n) {
                            e.detachEvent('on' + t, n);
                          });
                      }
                      var e,
                        i = !1,
                        o = [];
                      function a () {
                        if (!i) {
                          i = !0;
                          for (var e = 0; e < o.length; e++) o[e]();
                          o.length = 0;
                        }
                      }
                      if (
                        !(i =
                          'readyState' in l
                            ? 'complete' == (e = l.readyState) ||
                              (~navigator.userAgent.indexOf('AppleWebKit/') &&
                                ('loaded' == e || 'interactive' == e))
                            : !!l.body)
                      ) {
                        if (A(h, 'addEventListener')) c(l, 'DOMContentLoaded', a);
                        else if (
                          (c(l, 'readystatechange', function () {
                            'complete' == l.readyState && a();
                          }),
                          l.documentElement.doScroll && h === top)
                        ) {
                          var E = function E () {
                            if (!i) {
                              try {
                                l.documentElement.doScroll('left');
                              } catch (e) {
                                return void g(E, 1);
                              }
                              a();
                            }
                          };
                          E();
                        }
                        c(h, 'load', a);
                      }
                      function j (e, t) {
                        i
                          ? e.call(t)
                          : o.push(function () {
                              e.call(t);
                            });
                      }
                      function R (e) {
                        return e.match(w)[3];
                      }
                      function I (e) {
                        if (0 <= e.indexOf('file://')) return 'file://';
                        var t = e.toLowerCase().match(w);
                        if (!t) return '';
                        var n = t[2],
                          r = t[3],
                          i = t[4] || '';
                        return (
                          (('http:' == n && ':80' == i) || ('https:' == n && ':443' == i)) &&
                            (i = ''),
                          n + '//' + r + i
                        );
                      }
                      function U (e) {
                        if (!(e = e.replace(r, '$1/')).match(/^(http||https):\/\//)) {
                          var t = '/' === e.substring(0, 1) ? '' : p.pathname;
                          '/' !== t.substring(t.length - 1) &&
                            (t = t.substring(0, t.lastIndexOf('/') + 1)),
                            (e = p.protocol + '//' + p.host + t + e);
                        }
                        for (; n.test(e); ) e = e.replace(n, '');
                        return e;
                      }
                      function F (e, t) {
                        var n = '',
                          r = e.indexOf('#');
                        -1 !== r && ((n = e.substring(r)), (e = e.substring(0, r)));
                        var i = [];
                        for (var o in t) t.hasOwnProperty(o) && i.push(o + '=' + f(t[o]));
                        return e + (O ? '#' : -1 == e.indexOf('?') ? '?' : '&') + i.join('&') + n;
                      }
                      var L = (function (e) {
                        for (var t, n = {}, r = (e = e.substring(1).split('&')).length; r--; )
                          n[(t = e[r].split('='))[0]] = d(t[1]);
                        return n;
                      })(/xdm_e=/.test(p.search) ? p.search : p.hash);
                      function K (e) {
                        return void 0 === e;
                      }
                      var N,
                        C = function () {
                          var e = {},
                            t = { a: [1, 2, 3] },
                            n = '{"a":[1,2,3]}';
                          return 'undefined' != typeof JSON &&
                            'function' == typeof JSON.stringify &&
                            JSON.stringify(t).replace(/\s/g, '') === n
                            ? JSON
                            : (Object.toJSON &&
                                Object.toJSON(t).replace(/\s/g, '') === n &&
                                (e.stringify = Object.toJSON),
                              'function' == typeof String.prototype.evalJSON &&
                                (t = n.evalJSON()).a &&
                                3 === t.a.length &&
                                3 === t.a[2] &&
                                (e.parse = function (e) {
                                  return e.evalJSON();
                                }),
                              e.stringify && e.parse
                                ? ((C = function () {
                                    return e;
                                  }),
                                  e)
                                : null);
                        };
                      function B (e, t, n) {
                        var r;
                        for (var i in t)
                          t.hasOwnProperty(i) &&
                            (i in e
                              ? 'object' === (void 0 === (r = t[i]) ? 'undefined' : _typeof(r))
                                ? B(e[i], r, n)
                                : n || (e[i] = t[i])
                              : (e[i] = t[i]));
                        return e;
                      }
                      function M (e) {
                        var t;
                        K(s) &&
                          (function a () {
                            var e = l.body.appendChild(l.createElement('form')),
                              t = e.appendChild(l.createElement('input'));
                            (t.name = x + 'TEST' + k),
                              (s = t !== e.elements[t.name]),
                              l.body.removeChild(e);
                          })(),
                          s
                            ? (t = l.createElement('<iframe name="' + e.props.name + '"/>'))
                            : ((t = l.createElement('IFRAME')).name = e.props.name),
                          (t.id = t.name = e.props.name),
                          delete e.props.name,
                          'string' == typeof e.container &&
                            (e.container = l.getElementById(e.container)),
                          e.container ||
                            (B(t.style, { position: 'absolute', top: '-2000px', left: '0px' }),
                            (e.container = l.body));
                        var n = e.props.src;
                        if (
                          ((e.props.src = 'javascript:false'),
                          B(t, e.props),
                          (t.border = t.frameBorder = 0),
                          (t.allowTransparency = !0),
                          e.container.appendChild(t),
                          e.onLoad && c(t, 'load', e.onLoad),
                          e.usePost)
                        ) {
                          var r,
                            i = e.container.appendChild(l.createElement('form'));
                          if (
                            ((i.target = t.name),
                            (i.action = n),
                            (i.method = 'POST'),
                            'object' === _typeof(e.usePost))
                          )
                            for (var o in e.usePost)
                              e.usePost.hasOwnProperty(o) &&
                                (s
                                  ? (r = l.createElement('<input name="' + o + '"/>'))
                                  : ((r = l.createElement('INPUT')).name = o),
                                (r.value = e.usePost[o]),
                                i.appendChild(r));
                          i.submit(), i.parentNode.removeChild(i);
                        } else t.src = n;
                        return (e.props.src = n), t;
                      }
                      function q (e) {
                        var t,
                          n = e.protocol;
                        if (
                          ((e.isHost = e.isHost || K(L.xdm_p)),
                          (O = e.hash || !1),
                          e.props || (e.props = {}),
                          e.isHost)
                        )
                          (e.remote = U(e.remote)),
                            (e.channel = e.channel || 'default' + k++),
                            (e.secret = Math.random().toString(16).substring(2)),
                            K(n) &&
                              (n =
                                I(p.href) == I(e.remote)
                                  ? '4'
                                  : A(h, 'postMessage') || A(l, 'postMessage')
                                  ? '1'
                                  : e.swf && A(h, 'ActiveXObject') && T()
                                  ? '6'
                                  : 'Gecko' === navigator.product &&
                                    'frameElement' in h &&
                                    -1 == navigator.userAgent.indexOf('WebKit')
                                  ? '5'
                                  : e.remoteHelper
                                  ? '2'
                                  : '0');
                        else if (
                          ((e.channel = L.xdm_c.replace(/["'<>\\]/g, '')),
                          (e.secret = L.xdm_s),
                          (e.remote = L.xdm_e.replace(/["'<>\\]/g, '')),
                          (n = L.xdm_p),
                          e.acl &&
                            !(function c (e, t) {
                              'string' == typeof e && (e = [e]);
                              for (var n, r = e.length; r--; )
                                if (
                                  ((n =
                                    '^' === e[r].substr(0, 1) &&
                                    '$' === e[r].substr(e[r].length - 1, 1)
                                      ? e[r]
                                      : '^' +
                                        e[r]
                                          .replace(/[-[\]/{}()+.\^$|]/g, '\\$&')
                                          .replace(/(\*)/g, '.$1')
                                          .replace(/\?/g, '.') +
                                        '$'),
                                  (n = new RegExp(n)).test(t))
                                )
                                  return !0;
                              return !1;
                            })(e.acl, e.remote))
                        )
                          throw new Error('Access denied for ' + e.remote);
                        switch ((e.protocol = n)) {
                          case '0':
                            if (
                              (B(
                                e,
                                {
                                  interval: 100,
                                  delay: 2000,
                                  useResize: !0,
                                  useParent: !1,
                                  usePolling: !1,
                                },
                                !0
                              ),
                              e.isHost)
                            ) {
                              if (!e.local) {
                                for (
                                  var r,
                                    i = p.protocol + '//' + p.host,
                                    o = l.body.getElementsByTagName('img'),
                                    a = o.length;
                                  a--;

                                )
                                  if ((r = o[a]).src.substring(0, i.length) === i) {
                                    e.local = r.src;
                                    break;
                                  }
                                e.local || (e.local = h);
                              }
                              var s = { xdm_c: e.channel, xdm_p: 0 };
                              e.local === h
                                ? ((e.usePolling = !0),
                                  (e.useParent = !0),
                                  (e.local = p.protocol + '//' + p.host + p.pathname + p.search),
                                  (s.xdm_e = e.local),
                                  (s.xdm_pa = 1))
                                : (s.xdm_e = U(e.local)),
                                e.container && ((e.useResize = !1), (s.xdm_po = 1)),
                                (e.remote = F(e.remote, s));
                            } else
                              B(e, {
                                useParent: !K(L.xdm_pa),
                                usePolling: !K(L.xdm_po),
                                useResize: !e.useParent && e.useResize,
                              });
                            t = [
                              new S.stack.HashTransport(e),
                              new S.stack.ReliableBehavior({}),
                              new S.stack.QueueBehavior({
                                encode: !0,
                                maxLength: 4000 - e.remote.length,
                              }),
                              new S.stack.VerifyBehavior({ initiate: e.isHost }),
                            ];
                            break;
                          case '1':
                            t = [new S.stack.PostMessageTransport(e)];
                            break;
                          case '2':
                            e.isHost && (e.remoteHelper = U(e.remoteHelper)),
                              (t = [
                                new S.stack.NameTransport(e),
                                new S.stack.QueueBehavior(),
                                new S.stack.VerifyBehavior({ initiate: e.isHost }),
                              ]);
                            break;
                          case '3':
                            t = [new S.stack.NixTransport(e)];
                            break;
                          case '4':
                            t = [new S.stack.SameOriginTransport(e)];
                            break;
                          case '5':
                            t = [new S.stack.FrameElementTransport(e)];
                            break;
                          case '6':
                            u || T(), (t = [new S.stack.FlashTransport(e)]);
                        }
                        return t.push(new S.stack.QueueBehavior({ lazy: e.lazy, remove: !0 })), t;
                      }
                      function P (e) {
                        for (
                          var t,
                            n = {
                              incoming: function (e, t) {
                                this.up.incoming(e, t);
                              },
                              outgoing: function (e, t) {
                                this.down.outgoing(e, t);
                              },
                              callback: function (e) {
                                this.up.callback(e);
                              },
                              init: function () {
                                this.down.init();
                              },
                              destroy: function () {
                                this.down.destroy();
                              },
                            },
                            r = 0,
                            i = e.length;
                          r < i;
                          r++
                        )
                          B((t = e[r]), n, !0),
                            0 !== r && (t.down = e[r - 1]),
                            r !== i - 1 && (t.up = e[r + 1]);
                        return t;
                      }
                      B(S, {
                        version: '2.5.00.1',
                        query: L,
                        stack: {},
                        apply: B,
                        getJSONObject: C,
                        whenReady: j,
                        noConflict: function D (e) {
                          return (
                            (h.easyXDM = t),
                            (_ = e) && (x = 'easyXDM_' + _.replace('.', '_') + '_'),
                            S
                          );
                        },
                      }),
                        (S.DomHelper = {
                          on: c,
                          un: v,
                          requiresJSON: function (e) {
                            (function n (e, t) {
                              return !('object' != _typeof(e[t]) || !e[t]);
                            })(h, 'JSON') ||
                              l.write('<script type="text/javascript" src="' + e + '"></script>');
                          },
                        }),
                        (N = {}),
                        (S.Fn = {
                          set: function (e, t) {
                            N[e] = t;
                          },
                          get: function (e, t) {
                            if (N.hasOwnProperty(e)) {
                              var n = N[e];
                              return t && delete N[e], n;
                            }
                          },
                        }),
                        (S.Socket = function (n) {
                          var t = P(
                              q(n).concat([
                                {
                                  incoming: function (e, t) {
                                    n.onMessage(e, t);
                                  },
                                  callback: function (e) {
                                    n.onReady && n.onReady(e);
                                  },
                                },
                              ])
                            ),
                            r = I(n.remote);
                          (this.origin = I(n.remote)),
                            (this.destroy = function () {
                              t.destroy();
                            }),
                            (this.postMessage = function (e) {
                              t.outgoing(e, r);
                            }),
                            t.init();
                        }),
                        (S.Rpc = function (t, e) {
                          if (e.local)
                            for (var n in e.local)
                              if (e.local.hasOwnProperty(n)) {
                                var r = e.local[n];
                                'function' == typeof r && (e.local[n] = { method: r });
                              }
                          var i = P(
                            q(t).concat([
                              new S.stack.RpcBehavior(this, e),
                              {
                                callback: function (e) {
                                  t.onReady && t.onReady(e);
                                },
                              },
                            ])
                          );
                          (this.origin = I(t.remote)),
                            (this.context = t.context || null),
                            (this.destroy = function () {
                              i.destroy();
                            }),
                            i.init();
                        }),
                        (S.stack.SameOriginTransport = function (e) {
                          var t, n, i, o;
                          return (t = {
                            outgoing: function (e, t, n) {
                              i(e), n && n();
                            },
                            destroy: function () {
                              n && (n.parentNode.removeChild(n), (n = null));
                            },
                            onDOMReady: function () {
                              (o = I(e.remote)),
                                e.isHost
                                  ? (B(e.props, {
                                      src: F(e.remote, {
                                        xdm_e: p.protocol + '//' + p.host + p.pathname,
                                        xdm_c: e.channel,
                                        xdm_p: 4,
                                      }),
                                      name: x + e.channel + '_provider',
                                    }),
                                    (n = M(e)),
                                    S.Fn.set(e.channel, function (e) {
                                      return (
                                        (i = e),
                                        g(function () {
                                          t.up.callback(!0);
                                        }, 0),
                                        function (e) {
                                          t.up.incoming(e, o);
                                        }
                                      );
                                    }))
                                  : ((i = (function r () {
                                      var e = parent;
                                      if ('' !== _)
                                        for (var t = 0, n = _.split('.'); t < n.length; t++)
                                          e = e[n[t]];
                                      return e.easyXDM;
                                    })().Fn.get(
                                      e.channel,
                                      !0
                                    )(function (e) {
                                      t.up.incoming(e, o);
                                    })),
                                    g(function () {
                                      t.up.callback(!0);
                                    }, 0));
                            },
                            init: function () {
                              j(t.onDOMReady, t);
                            },
                          });
                        }),
                        (S.stack.FlashTransport = function (o) {
                          var n, r, i, a, s;
                          function c (e, t) {
                            g(function () {
                              n.up.incoming(e, i);
                            }, 0);
                          }
                          function u (n) {
                            var e = o.swf + '?host=' + o.isHost,
                              t = 'easyXDM_swf_' + Math.floor(10000 * Math.random());
                            S.Fn.set('flash_loaded' + n.replace(/[\-.]/g, '_'), function () {
                              S.stack.FlashTransport[n].swf = a = s.firstChild;
                              for (
                                var e = S.stack.FlashTransport[n].queue, t = 0;
                                t < e.length;
                                t++
                              )
                                e[t]();
                              e.length = 0;
                            }),
                              o.swfContainer
                                ? (s =
                                    'string' == typeof o.swfContainer
                                      ? l.getElementById(o.swfContainer)
                                      : o.swfContainer)
                                : (B(
                                    (s = l.createElement('div')).style,
                                    m && o.swfNoThrottle
                                      ? {
                                          height: '20px',
                                          width: '20px',
                                          position: 'fixed',
                                          right: 0,
                                          top: 0,
                                        }
                                      : {
                                          height: '1px',
                                          width: '1px',
                                          position: 'absolute',
                                          overflow: 'hidden',
                                          right: 0,
                                          top: 0,
                                        }
                                  ),
                                  l.body.appendChild(s));
                            var r =
                              'callback=flash_loaded' +
                              f(n.replace(/[\-.]/g, '_')) +
                              '&proto=' +
                              y.location.protocol +
                              '&domain=' +
                              f(R(y.location.href)) +
                              '&port=' +
                              f(
                                (function i (e) {
                                  return e.match(w)[4] || '';
                                })(y.location.href)
                              ) +
                              '&ns=' +
                              f(_);
                            s.innerHTML =
                              "<object height='20' width='20' type='application/x-shockwave-flash' id='" +
                              t +
                              "' data='" +
                              e +
                              "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" +
                              e +
                              "'></param><param name='flashvars' value='" +
                              r +
                              "'></param><embed type='application/x-shockwave-flash' FlashVars='" +
                              r +
                              "' allowScriptAccess='always' wmode='transparent' src='" +
                              e +
                              "' height='1' width='1'></embed></object>";
                          }
                          return (n = {
                            outgoing: function (e, t, n) {
                              a.postMessage(o.channel, e.toString()), n && n();
                            },
                            destroy: function () {
                              try {
                                a.destroyChannel(o.channel);
                              } catch (e) {}
                              (a = null), r && (r.parentNode.removeChild(r), (r = null));
                            },
                            onDOMReady: function () {
                              (i = o.remote),
                                S.Fn.set('flash_' + o.channel + '_init', function () {
                                  g(function () {
                                    n.up.callback(!0);
                                  });
                                }),
                                S.Fn.set('flash_' + o.channel + '_onMessage', c),
                                (o.swf = U(o.swf));
                              var e = R(o.swf),
                                t = function t () {
                                  (S.stack.FlashTransport[e].init = !0),
                                    (a = S.stack.FlashTransport[e].swf).createChannel(
                                      o.channel,
                                      o.secret,
                                      I(o.remote),
                                      o.isHost
                                    ),
                                    o.isHost &&
                                      (m &&
                                        o.swfNoThrottle &&
                                        B(o.props, {
                                          position: 'fixed',
                                          right: 0,
                                          top: 0,
                                          height: '20px',
                                          width: '20px',
                                        }),
                                      B(o.props, {
                                        src: F(o.remote, {
                                          xdm_e: I(p.href),
                                          xdm_c: o.channel,
                                          xdm_p: 6,
                                          xdm_s: o.secret,
                                        }),
                                        name: x + o.channel + '_provider',
                                      }),
                                      (r = M(o)));
                                };
                              S.stack.FlashTransport[e] && S.stack.FlashTransport[e].init
                                ? t()
                                : S.stack.FlashTransport[e]
                                ? S.stack.FlashTransport[e].queue.push(t)
                                : ((S.stack.FlashTransport[e] = { queue: [t] }), u(e));
                            },
                            init: function () {
                              j(n.onDOMReady, n);
                            },
                          });
                        }),
                        (S.stack.PostMessageTransport = function (r) {
                          var i, t, o, a;
                          function n (e) {
                            if ('string' == typeof e.data) {
                              var t = (function n (e) {
                                if (e.origin) return I(e.origin);
                                if (e.uri) return I(e.uri);
                                if (e.domain) return p.protocol + '//' + e.domain;
                                throw 'Unable to retrieve the origin of the event';
                              })(e);
                              t == a &&
                                'string' == typeof e.data &&
                                e.data.substring(0, r.channel.length + 1) == r.channel + ' ' &&
                                i.up.incoming(e.data.substring(r.channel.length + 1), t);
                            }
                          }
                          function s (e) {
                            e.data == r.channel + '-ready' &&
                              ((o =
                                'postMessage' in t.contentWindow
                                  ? t.contentWindow
                                  : t.contentWindow.document),
                              v(h, 'message', s),
                              c(h, 'message', n),
                              g(function () {
                                i.up.callback(!0);
                              }, 0));
                          }
                          return (i = {
                            outgoing: function (e, t, n) {
                              o.postMessage(r.channel + ' ' + e, t || a), n && n();
                            },
                            destroy: function () {
                              v(h, 'message', s),
                                v(h, 'message', n),
                                t && ((o = null), t.parentNode.removeChild(t), (t = null));
                            },
                            onDOMReady: function () {
                              'file://' === (a = I(r.remote)) && (a = '*'),
                                r.isHost
                                  ? (c(h, 'message', s),
                                    B(r.props, {
                                      src: F(r.remote, {
                                        xdm_e: I(p.href),
                                        xdm_c: r.channel,
                                        xdm_p: 1,
                                      }),
                                      name: x + r.channel + '_provider',
                                    }),
                                    (t = M(r)))
                                  : (c(h, 'message', n),
                                    (o =
                                      'postMessage' in h.parent
                                        ? h.parent
                                        : h.parent.document).postMessage(r.channel + '-ready', a),
                                    g(function () {
                                      i.up.callback(!0);
                                    }, 0));
                            },
                            init: function () {
                              j(i.onDOMReady, i);
                            },
                          });
                        }),
                        (S.stack.FrameElementTransport = function (e) {
                          var t, n, r, i;
                          return (t = {
                            outgoing: function (e, t, n) {
                              r.call(this, e), n && n();
                            },
                            destroy: function () {
                              n && (n.parentNode.removeChild(n), (n = null));
                            },
                            onDOMReady: function () {
                              (i = I(e.remote)),
                                e.isHost
                                  ? (B(e.props, {
                                      src: F(e.remote, {
                                        xdm_e: I(p.href),
                                        xdm_c: e.channel,
                                        xdm_p: 5,
                                      }),
                                      name: x + e.channel + '_provider',
                                    }),
                                    ((n = M(e)).fn = function (e) {
                                      return (
                                        delete n.fn,
                                        (r = e),
                                        g(function () {
                                          t.up.callback(!0);
                                        }, 0),
                                        function (e) {
                                          t.up.incoming(e, i);
                                        }
                                      );
                                    }))
                                  : (l.referrer &&
                                      I(l.referrer) != L.xdm_e &&
                                      (h.top.location = L.xdm_e),
                                    (r = h.frameElement.fn(function (e) {
                                      t.up.incoming(e, i);
                                    })),
                                    t.up.callback(!0));
                            },
                            init: function () {
                              j(t.onDOMReady, t);
                            },
                          });
                        }),
                        (S.stack.NameTransport = function (r) {
                          var t, i, o, e, a, s, c, u;
                          function l (e) {
                            var t = r.remoteHelper + (i ? '#_3' : '#_2') + r.channel;
                            o.contentWindow.sendMessage(e, t);
                          }
                          function p () {
                            i
                              ? (2 != ++a && i) || t.up.callback(!0)
                              : (l('ready'), t.up.callback(!0));
                          }
                          function d (e) {
                            t.up.incoming(e, c);
                          }
                          function f () {
                            s &&
                              g(function () {
                                s(!0);
                              }, 0);
                          }
                          return (t = {
                            outgoing: function (e, t, n) {
                              (s = n), l(e);
                            },
                            destroy: function () {
                              o.parentNode.removeChild(o),
                                (o = null),
                                i && (e.parentNode.removeChild(e), (e = null));
                            },
                            onDOMReady: function () {
                              (i = r.isHost),
                                (a = 0),
                                (c = I(r.remote)),
                                (r.local = U(r.local)),
                                i
                                  ? (S.Fn.set(r.channel, function (e) {
                                      i && 'ready' === e && (S.Fn.set(r.channel, d), p());
                                    }),
                                    (u = F(r.remote, {
                                      xdm_e: r.local,
                                      xdm_c: r.channel,
                                      xdm_p: 2,
                                    })),
                                    B(r.props, {
                                      src: u + '#' + r.channel,
                                      name: x + r.channel + '_provider',
                                    }),
                                    (e = M(r)))
                                  : ((r.remoteHelper = r.remote), S.Fn.set(r.channel, d));
                              var n = function n () {
                                var e = o || this;
                                v(e, 'load', n),
                                  S.Fn.set(r.channel + '_load', f),
                                  (function t () {
                                    'function' == typeof e.contentWindow.sendMessage
                                      ? p()
                                      : g(t, 50);
                                  })();
                              };
                              o = M({ props: { src: r.local + '#_4' + r.channel }, onLoad: n });
                            },
                            init: function () {
                              j(t.onDOMReady, t);
                            },
                          });
                        }),
                        (S.stack.HashTransport = function (i) {
                          var o, a, e, s, c, u, l, p, d, f;
                          function t () {
                            if (l) {
                              var e = l.location.href,
                                t = '',
                                n = e.indexOf('#');
                              -1 != n && (t = e.substring(n)),
                                t &&
                                  t != c &&
                                  (function r (e) {
                                    (c = e), o.up.incoming(c.substring(c.indexOf('_') + 1), f);
                                  })(t);
                            }
                          }
                          function m () {
                            e = setInterval(t, s);
                          }
                          return (o = {
                            outgoing: function (e, t) {
                              !(function n (e) {
                                if (p) {
                                  var t = i.remote + '#' + u++ + '_' + e;
                                  (a || !d ? p.contentWindow : p).location = t;
                                }
                              })(e);
                            },
                            destroy: function () {
                              h.clearInterval(e),
                                (!a && d) || p.parentNode.removeChild(p),
                                (p = null);
                            },
                            onDOMReady: function () {
                              if (
                                ((a = i.isHost),
                                (s = i.interval),
                                (c = '#' + i.channel),
                                (u = 0),
                                (d = i.useParent),
                                (f = I(i.remote)),
                                a)
                              ) {
                                if (
                                  (B(i.props, {
                                    src: i.remote,
                                    name: x + i.channel + '_provider',
                                  }),
                                  d)
                                )
                                  i.onLoad = function () {
                                    (l = h), m(), o.up.callback(!0);
                                  };
                                else {
                                  var t = 0,
                                    n = i.delay / 50;
                                  !(function r () {
                                    if (++t > n)
                                      throw new Error('Unable to reference listenerwindow');
                                    try {
                                      l = p.contentWindow.frames[x + i.channel + '_consumer'];
                                    } catch (e) {}
                                    l ? (m(), o.up.callback(!0)) : g(r, 50);
                                  })();
                                }
                                p = M(i);
                              } else
                                (l = h),
                                  m(),
                                  d
                                    ? ((p = parent), o.up.callback(!0))
                                    : (B(i, {
                                        props: {
                                          src: i.remote + '#' + i.channel + new Date(),
                                          name: x + i.channel + '_consumer',
                                        },
                                        onLoad: function () {
                                          o.up.callback(!0);
                                        },
                                      }),
                                      (p = M(i)));
                            },
                            init: function () {
                              j(o.onDOMReady, o);
                            },
                          });
                        }),
                        (S.stack.ReliableBehavior = function (e) {
                          var i,
                            o,
                            a = 0,
                            s = 0,
                            c = '';
                          return (i = {
                            incoming: function (e, t) {
                              var n = e.indexOf('_'),
                                r = e.substring(0, n).split(',');
                              (e = e.substring(n + 1)),
                                r[0] == a && ((c = ''), o && o(!0)),
                                0 < e.length &&
                                  (i.down.outgoing(r[1] + ',' + a + '_' + c, t),
                                  s != r[1] && ((s = r[1]), i.up.incoming(e, t)));
                            },
                            outgoing: function (e, t, n) {
                              (c = e), (o = n), i.down.outgoing(s + ',' + ++a + '_' + e, t);
                            },
                          });
                        }),
                        (S.stack.QueueBehavior = function (o) {
                          var a,
                            e,
                            s = [],
                            r = !0,
                            i = '',
                            c = 0,
                            u = !1,
                            l = !1;
                          function p () {
                            if (o.remove && 0 === s.length)
                              !(function n (e) {
                                (e.up.down = e.down), (e.down.up = e.up), (e.up = e.down = null);
                              })(a);
                            else if (!r && 0 !== s.length && !e) {
                              r = !0;
                              var t = s.shift();
                              a.down.outgoing(t.data, t.origin, function (e) {
                                (r = !1),
                                  t.callback &&
                                    g(function () {
                                      t.callback(e);
                                    }, 0),
                                  p();
                              });
                            }
                          }
                          return (a = {
                            init: function () {
                              K(o) && (o = {}),
                                o.maxLength && ((c = o.maxLength), (l = !0)),
                                o.lazy ? (u = !0) : a.down.init();
                            },
                            callback: function (e) {
                              r = !1;
                              var t = a.up;
                              p(), t.callback(e);
                            },
                            incoming: function (e, t) {
                              if (l) {
                                var n = e.indexOf('_'),
                                  r = parseInt(e.substring(0, n), 10);
                                (i += e.substring(n + 1)),
                                  0 === r &&
                                    (o.encode && (i = d(i)), a.up.incoming(i, t), (i = ''));
                              } else a.up.incoming(e, t);
                            },
                            outgoing: function (e, t, n) {
                              o.encode && (e = f(e));
                              var r,
                                i = [];
                              if (l) {
                                for (; 0 !== e.length; )
                                  (r = e.substring(0, c)), (e = e.substring(r.length)), i.push(r);
                                for (; (r = i.shift()); )
                                  s.push({
                                    data: i.length + '_' + r,
                                    origin: t,
                                    callback: 0 === i.length ? n : null,
                                  });
                              } else s.push({ data: e, origin: t, callback: n });
                              u ? a.down.init() : p();
                            },
                            destroy: function () {
                              (e = !0), a.down.destroy();
                            },
                          });
                        }),
                        (S.stack.VerifyBehavior = function (r) {
                          var i, o, a;
                          function s () {
                            (o = Math.random().toString(16).substring(2)), i.down.outgoing(o);
                          }
                          return (i = {
                            incoming: function (e, t) {
                              var n = e.indexOf('_');
                              -1 === n
                                ? e === o
                                  ? i.up.callback(!0)
                                  : a || ((a = e), r.initiate || s(), i.down.outgoing(e))
                                : e.substring(0, n) === a && i.up.incoming(e.substring(n + 1), t);
                            },
                            outgoing: function (e, t, n) {
                              i.down.outgoing(o + '_' + e, t, n);
                            },
                            callback: function (e) {
                              r.initiate && s();
                            },
                          });
                        }),
                        (S.stack.RpcBehavior = function (l, i) {
                          var t,
                            o = i.serializer || C(),
                            a = 0,
                            s = {};
                          function p (e) {
                            (e.jsonrpc = '2.0'), t.down.outgoing(o.stringify(e));
                          }
                          function n (r, i) {
                            var o = Array.prototype.slice;
                            return function () {
                              var e,
                                t = arguments.length,
                                n = { method: i };
                              0 < t && 'function' == typeof arguments[t - 1]
                                ? (1 < t && 'function' == typeof arguments[t - 2]
                                    ? ((e = {
                                        success: arguments[t - 2],
                                        error: arguments[t - 1],
                                      }),
                                      (n.params = o.call(arguments, 0, t - 2)))
                                    : ((e = { success: arguments[t - 1] }),
                                      (n.params = o.call(arguments, 0, t - 1))),
                                  (s['' + ++a] = e),
                                  (n.id = a))
                                : (n.params = o.call(arguments, 0)),
                                r.namedParams && 1 === n.params.length && (n.params = n.params[0]),
                                p(n);
                            };
                          }
                          function c (e, r, t, n) {
                            if (t) {
                              var i, o;
                              r
                                ? ((i = function (e) {
                                    (i = b), p({ id: r, result: e });
                                  }),
                                  (o = function (e, t) {
                                    o = b;
                                    var n = { id: r, error: { code: -32099, message: e } };
                                    t && (n.error.data = t), p(n);
                                  }))
                                : (i = o = b),
                                (function c (e) {
                                  return '[object Array]' === Object.prototype.toString.call(e);
                                })(n) || (n = [n]);
                              try {
                                var a = l.context || t.scope,
                                  s = t.method.apply(a, n.concat([i, o]));
                                K(s) || i(s);
                              } catch (u) {
                                o(u.message);
                              }
                            } else
                              r &&
                                p({
                                  id: r,
                                  error: { code: -32601, message: 'Procedure not found.' },
                                });
                          }
                          return (t = {
                            incoming: function (e, t) {
                              var n = o.parse(e);
                              if (n.method)
                                i.handle
                                  ? i.handle(n, p)
                                  : c(n.method, n.id, i.local[n.method], n.params);
                              else {
                                var r = s[n.id];
                                n.error
                                  ? r.error && r.error(n.error)
                                  : r.success && r.success(n.result),
                                  delete s[n.id];
                              }
                            },
                            init: function () {
                              if (i.remote)
                                for (var e in i.remote)
                                  i.remote.hasOwnProperty(e) && (l[e] = n(i.remote[e], e));
                              t.down.init();
                            },
                            destroy: function () {
                              for (var e in i.remote)
                                i.remote.hasOwnProperty(e) && l.hasOwnProperty(e) && delete l[e];
                              t.down.destroy();
                            },
                          });
                        }),
                        (y.easyXDM = S);
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_510ec64eb61e7d19)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_510ec64eb61e7d19
                      ));
                  }
                })(
                  window,
                  document,
                  location,
                  window.setTimeout,
                  decodeURIComponent,
                  encodeURIComponent
                ),
                easyXDM.noConflict('Kakao'));
            },
            {},
          ],
          26: [
            function (Z, ee, e) {
              (function (Q, $, Y) {
                (function () {
                  'use strict';
                  function p (e) {
                    return 'function' == typeof e;
                  }
                  var r,
                    a = Array.isArray
                      ? Array.isArray
                      : function M (e) {
                          return '[object Array]' === Object.prototype.toString.call(e);
                        },
                    n = 0;
                  var s = function q (e, t) {
                      (d[n] = e), (d[n + 1] = t), 2 === (n += 2) && l();
                    },
                    e = 'undefined' != typeof window ? window : undefined,
                    t = e || {},
                    i = t.MutationObserver || t.WebKitMutationObserver,
                    o = void 0 !== Q && '[object process]' === {}.toString.call(Q),
                    c =
                      'undefined' != typeof Uint8ClampedArray &&
                      'undefined' != typeof importScripts &&
                      'undefined' != typeof MessageChannel;
                  function u () {
                    return function () {
                      setTimeout(f, 1);
                    };
                  }
                  var l,
                    d = new Array(1000);
                  function f () {
                    for (var e = 0; e < n; e += 2) {
                      (0, d[e])(d[e + 1]), (d[e] = undefined), (d[e + 1] = undefined);
                    }
                    n = 0;
                  }
                  function m () {}
                  l = o
                    ? (function P () {
                        var e = Q.nextTick,
                          t = Q.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                        return (
                          Array.isArray(t) && '0' === t[1] && '10' === t[2] && (e = Y),
                          function () {
                            e(f);
                          }
                        );
                      })()
                    : i
                    ? (function D () {
                        var e = 0,
                          t = new i(f),
                          n = document.createTextNode('');
                        return (
                          t.observe(n, { characterData: !0 }),
                          function () {
                            n.data = e = ++e % 2;
                          }
                        );
                      })()
                    : c
                    ? (function z () {
                        var e = new MessageChannel();
                        return (
                          (e.port1.onmessage = f),
                          function () {
                            e.port2.postMessage(0);
                          }
                        );
                      })()
                    : e === undefined && 'function' == typeof Z
                    ? (function W () {
                        try {
                          var e = Z('vertx');
                          return (
                            (r = e.runOnLoop || e.runOnContext),
                            (function t () {
                              return function () {
                                r(f);
                              };
                            })()
                          );
                        } catch (n) {
                          return u();
                        }
                      })()
                    : u();
                  var h = void 0,
                    g = 1,
                    v = 2,
                    y = new A();
                  function k (e, t) {
                    if (t.constructor === e.constructor)
                      !(function r (t, e) {
                        e._state === g
                          ? _(t, e._result)
                          : e._state === v
                          ? S(t, e._result)
                          : x(
                              e,
                              undefined,
                              function (e) {
                                b(t, e);
                              },
                              function (e) {
                                S(t, e);
                              }
                            );
                      })(e, t);
                    else {
                      var n = (function i (e) {
                        try {
                          return e.then;
                        } catch (t) {
                          return (y.error = t), y;
                        }
                      })(t);
                      n === y
                        ? S(e, y.error)
                        : n === undefined
                        ? _(e, t)
                        : p(n)
                        ? (function o (e, r, i) {
                            s(function (t) {
                              var n = !1,
                                e = (function o (e, t, n, r) {
                                  try {
                                    e.call(t, n, r);
                                  } catch (i) {
                                    return i;
                                  }
                                })(
                                  i,
                                  r,
                                  function (e) {
                                    n || ((n = !0), r !== e ? b(t, e) : _(t, e));
                                  },
                                  function (e) {
                                    n || ((n = !0), S(t, e));
                                  },
                                  t._label
                                );
                              !n && e && ((n = !0), S(t, e));
                            }, e);
                          })(e, t, n)
                        : _(e, t);
                    }
                  }
                  function b (e, t) {
                    e === t
                      ? S(
                          e,
                          (function n () {
                            return new TypeError('You cannot resolve a promise with itself');
                          })()
                        )
                      : !(function r (e) {
                          return (
                            'function' == typeof e ||
                            ('object' === (void 0 === e ? 'undefined' : _typeof(e)) && null !== e)
                          );
                        })(t)
                      ? _(e, t)
                      : k(e, t);
                  }
                  function w (e) {
                    e._onerror && e._onerror(e._result), O(e);
                  }
                  function _ (e, t) {
                    e._state === h &&
                      ((e._result = t), (e._state = g), 0 !== e._subscribers.length && s(O, e));
                  }
                  function S (e, t) {
                    e._state === h && ((e._state = v), (e._result = t), s(w, e));
                  }
                  function x (e, t, n, r) {
                    var i = e._subscribers,
                      o = i.length;
                    (e._onerror = null),
                      (i[o] = t),
                      (i[o + g] = n),
                      (i[o + v] = r),
                      0 === o && e._state && s(O, e);
                  }
                  function O (e) {
                    var t = e._subscribers,
                      n = e._state;
                    if (0 !== t.length) {
                      for (var r, i, o = e._result, a = 0; a < t.length; a += 3)
                        (r = t[a]), (i = t[a + n]), r ? E(n, r, i, o) : i(o);
                      e._subscribers.length = 0;
                    }
                  }
                  function A () {
                    this.error = null;
                  }
                  var T = new A();
                  function E (e, t, n, r) {
                    var i,
                      o,
                      a,
                      s,
                      c = p(n);
                    if (c) {
                      if (
                        ((i = (function u (e, t) {
                          try {
                            return e(t);
                          } catch (n) {
                            return (T.error = n), T;
                          }
                        })(n, r)) === T
                          ? ((s = !0), (o = i.error), (i = null))
                          : (a = !0),
                        t === i)
                      )
                        return void S(
                          t,
                          (function l () {
                            return new TypeError(
                              'A promises callback cannot return that same promise.'
                            );
                          })()
                        );
                    } else (i = r), (a = !0);
                    t._state !== h ||
                      (c && a ? b(t, i) : s ? S(t, o) : e === g ? _(t, i) : e === v && S(t, i));
                  }
                  function j (e, t) {
                    var n = this;
                    (n._instanceConstructor = e),
                      (n.promise = new e(m)),
                      n._validateInput(t)
                        ? ((n._input = t),
                          (n.length = t.length),
                          (n._remaining = t.length),
                          n._init(),
                          0 === n.length
                            ? _(n.promise, n._result)
                            : ((n.length = n.length || 0),
                              n._enumerate(),
                              0 === n._remaining && _(n.promise, n._result)))
                        : S(n.promise, n._validationError());
                  }
                  (j.prototype._validateInput = function (e) {
                    return a(e);
                  }),
                    (j.prototype._validationError = function () {
                      return new Error('Array Methods must be provided an Array');
                    }),
                    (j.prototype._init = function () {
                      this._result = new Array(this.length);
                    });
                  var R = j;
                  (j.prototype._enumerate = function () {
                    for (
                      var e = this.length, t = this.promise, n = this._input, r = 0;
                      t._state === h && r < e;
                      r++
                    )
                      this._eachEntry(n[r], r);
                  }),
                    (j.prototype._eachEntry = function (e, t) {
                      var n = this,
                        r = n._instanceConstructor;
                      !(function i (e) {
                        return (
                          'object' === (void 0 === e ? 'undefined' : _typeof(e)) && null !== e
                        );
                      })(e)
                        ? (n._remaining--, (n._result[t] = e))
                        : e.constructor === r && e._state !== h
                        ? ((e._onerror = null), n._settledAt(e._state, t, e._result))
                        : n._willSettleAt(r.resolve(e), t);
                    }),
                    (j.prototype._settledAt = function (e, t, n) {
                      var r = this,
                        i = r.promise;
                      i._state === h && (r._remaining--, e === v ? S(i, n) : (r._result[t] = n)),
                        0 === r._remaining && _(i, r._result);
                    }),
                    (j.prototype._willSettleAt = function (e, t) {
                      var n = this;
                      x(
                        e,
                        undefined,
                        function (e) {
                          n._settledAt(g, t, e);
                        },
                        function (e) {
                          n._settledAt(v, t, e);
                        }
                      );
                    });
                  var I = function H (e) {
                    var t = new this(m);
                    if (!a(e)) return S(t, new TypeError('You must pass an array to race.')), t;
                    var n = e.length;
                    function r (e) {
                      b(t, e);
                    }
                    function i (e) {
                      S(t, e);
                    }
                    for (var o = 0; t._state === h && o < n; o++)
                      x(this.resolve(e[o]), undefined, r, i);
                    return t;
                  };
                  var U = function J (e) {
                    if (
                      e &&
                      'object' === (void 0 === e ? 'undefined' : _typeof(e)) &&
                      e.constructor === this
                    )
                      return e;
                    var t = new this(m);
                    return b(t, e), t;
                  };
                  var F = function X (e) {
                      var t = new this(m);
                      return S(t, e), t;
                    },
                    L = 0;
                  var K = N;
                  function N (e) {
                    (this._id = L++),
                      (this._state = undefined),
                      (this._result = undefined),
                      (this._subscribers = []),
                      m !== e &&
                        (p(e) ||
                          (function t () {
                            throw new TypeError(
                              'You must pass a resolver function as the first argument to the promise constructor'
                            );
                          })(),
                        this instanceof N ||
                          (function n () {
                            throw new TypeError(
                              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                            );
                          })(),
                        (function r (t, e) {
                          try {
                            e(
                              function (e) {
                                b(t, e);
                              },
                              function (e) {
                                S(t, e);
                              }
                            );
                          } catch (n) {
                            S(t, n);
                          }
                        })(this, e));
                  }
                  (N.all = function V (e) {
                    return new R(this, e).promise;
                  }),
                    (N.race = I),
                    (N.resolve = U),
                    (N.reject = F),
                    (N.prototype = {
                      constructor: N,
                      then: function (e, t) {
                        var n = this._state;
                        if ((n === g && !e) || (n === v && !t)) return this;
                        var r = new this.constructor(m),
                          i = this._result;
                        if (n) {
                          var o = arguments[n - 1];
                          s(function () {
                            E(n, r, o, i);
                          });
                        } else x(this, r, e, t);
                        return r;
                      },
                      catch: function (e) {
                        return this.then(null, e);
                      },
                    });
                  var C = function G () {
                      var e;
                      if (void 0 !== $) e = $;
                      else if ('undefined' != typeof self) e = self;
                      else
                        try {
                          e = Function('return this')();
                        } catch (n) {
                          throw new Error(
                            'polyfill failed because global object is unavailable in this environment'
                          );
                        }
                      var t = e.Promise;
                      (t &&
                        '[object Promise]' === Object.prototype.toString.call(t.resolve()) &&
                        !t.cast) ||
                        (e.Promise = K);
                    },
                    B = { Promise: K, polyfill: C };
                  void 0 !== ee && ee.exports
                    ? (ee.exports = B)
                    : void 0 !== this && (this.ES6Promise = B),
                    C();
                }.call(this));
              }.call(
                this,
                Z('_process'),
                'undefined' != typeof global
                  ? global
                  : 'undefined' != typeof self
                  ? self
                  : 'undefined' != typeof window
                  ? window
                  : {},
                Z('timers').setImmediate
              ));
            },
            { _process: 1, timers: 2 },
          ],
          27: [
            function (e, t, n) {
              t.exports = function c (e) {
                const $___old_e455034eb262b8ab = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_e455034eb262b8ab)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_1af3d49f017e59bb.userAgent
                    ));
                  return function () {
                    function r (e) {
                      var t = {},
                        n = e ? e.split(/\.|-|_/) : ['0', '0', '0'];
                      return (
                        (t.info = n.join('.')),
                        (t.major = n[0] || '0'),
                        (t.minor = n[1] || '0'),
                        (t.patch = n[2] || '0'),
                        t
                      );
                    }
                    return {
                      ua: (e = (e || window.navigator.userAgent).toString().toLowerCase()),
                      browser: (function i (e) {
                        var t = {},
                          n = /(dolfin)[ \/]([\w.]+)/.exec(e) ||
                            /(edge)[ \/]([\w.]+)/.exec(e) ||
                            /(chrome)[ \/]([\w.]+)/.exec(e) ||
                            /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) ||
                            /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(e) ||
                            /(msie) ([\w.]+)/.exec(e) ||
                            (e.indexOf('compatible') < 0 &&
                              /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e)) || ['', 'unknown'];
                        return (
                          'webkit' === n[1]
                            ? (n = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) ||
                                /(android)[ \/]([\w._\-]+);/.exec(e) || [n[0], 'safari', n[2]])
                            : 'mozilla' === n[1]
                            ? /trident/.test(e)
                              ? (n[1] = 'msie')
                              : (n[1] = 'firefox')
                            : 'edge' === n[1]
                            ? (n[1] = 'spartan')
                            : /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(
                                e
                              ) && (n[1] = 'polaris'),
                          (t[n[1]] = !0),
                          (t.name = n[1]),
                          (t.version = r(n[2])),
                          t
                        );
                      })(e),
                      platform: (function o (e) {
                        return (function t (e) {
                          return !(
                            !e.match(/linux|windows (nt|98)|macintosh/) ||
                            e.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)
                          );
                        })(e)
                          ? 'pc'
                          : (function n (e) {
                              return !!(
                                e.match(/ipad/) ||
                                (e.match(/android/) && !e.match(/mobi|mini|fennec/))
                              );
                            })(e)
                          ? 'tablet'
                          : (function r (e) {
                              return !!e.match(
                                /ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/
                              );
                            })(e)
                          ? 'mobile'
                          : '';
                      })(e),
                      os: (function a (e) {
                        var t = {},
                          n = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) ||
                            /(android)[ \/]([\w._\-]+);/.exec(e) ||
                            (!!/android/.test(e) && ['', 'android', '0.0.0']) ||
                            (!!/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(
                              e
                            ) && ['', 'polaris', '0.0.0']) ||
                            /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(e) ||
                            (!!/(windows)/.test(e) && ['', 'windows', '0.0.0']) ||
                            /(mac) os x ([\w._\-]+)/.exec(e) ||
                            (!!/(linux)/.test(e) && ['', 'linux', '0.0.0']) ||
                            (!!/webos/.test(e) && ['', 'webos', '0.0.0']) ||
                            /(bada)[ \/]([\w._\-]+)/.exec(e) ||
                            (!!/bada/.test(e) && ['', 'bada', '0.0.0']) ||
                            (!!/(rim|blackberry|bb10)/.test(e) && ['', 'blackberry', '0.0.0']) || [
                              '',
                              'unknown',
                              '0.0.0',
                            ];
                        return (
                          'iphone' === n[1] || 'ipad' === n[1] || 'ipod' === n[1]
                            ? (n[1] = 'ios')
                            : 'windows' === n[1] && '98' === n[2] && (n[2] = '0.98.0'),
                          (t[n[1]] = !0),
                          (t.name = n[1]),
                          (t.version = r(n[2])),
                          t
                        );
                      })(e),
                      app: (function s (e) {
                        var t = {},
                          n = /(crios)[ \/]([\w.]+)/.exec(e) ||
                            /(daumapps)[ \/]([\w.]+)/.exec(e) || ['', ''];
                        return (
                          n[1]
                            ? ((t.isApp = !0), (t.name = n[1]), (t.version = r(n[2])))
                            : (t.isApp = !1),
                          t
                        );
                      })(e),
                    };
                  }.apply(this, arguments);
                } finally {
                  if ($___old_e455034eb262b8ab)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_e455034eb262b8ab
                    ));
                }
              };
            },
            {},
          ],
          28: [
            function (t, e, n) {
              e.exports = (function () {
                var e = t('./userAgent.js'),
                  l = 5000,
                  s = 300,
                  o = 100,
                  p = e(),
                  c = p.os,
                  d = ['firefox', 'opr/'],
                  f = ['KAKAOTALK'];
                function m (e) {
                  window.top.location.replace(e);
                }
                function h (t, n, r) {
                  var i = new Date().getTime();
                  return setTimeout(function () {
                    var e = new Date().getTime();
                    g() && e - i < t + o && r(n);
                  }, t);
                }
                function g () {
                  for (var e = ['hidden', 'webkitHidden'], t = 0, n = e.length; t < n; t++)
                    if ('undefined' != typeof document[e[t]]) return !document[e[t]];
                  return !0;
                }
                function v (e) {
                  setTimeout(function () {
                    (function n (e) {
                      var t = document.createElement('iframe');
                      return (
                        (t.id = e),
                        (t.style.border = 'none'),
                        (t.style.width = '0'),
                        (t.style.height = '0'),
                        (t.style.display = 'none'),
                        (t.style.overflow = 'hidden'),
                        document.body.appendChild(t),
                        t
                      );
                    })('appLauncher').src = e;
                  }, 100);
                }
                return function y (e) {
                  var t = 'function' == typeof e.willInvokeApp ? e.willInvokeApp : function () {},
                    n = 'function' == typeof e.onAppMissing ? e.onAppMissing : m,
                    r =
                      'function' == typeof e.onUnsupportedEnvironment
                        ? e.onUnsupportedEnvironment
                        : function () {};
                  t(),
                    c.android
                      ? (function i () {
                          var e = p.browser.chrome && 25 <= +p.browser.version.major,
                            t = new RegExp(d.join('|'), 'i'),
                            n = new RegExp(f.join('|'), 'i');
                          return (e && !t.test(p.ua)) || n.test(p.ua);
                        })() &&
                        e.intentURI &&
                        !e.useUrlScheme
                        ? (function o (e) {
                            function t () {
                              top.location.href = e;
                            }
                            p.browser.chrome ? t() : setTimeout(t, 100);
                          })(e.intentURI)
                        : e.storeURL &&
                          (function a (e, t, n) {
                            h(s, t, n), v(e);
                          })(e.urlScheme, e.storeURL, n)
                      : c.ios && e.storeURL
                      ? (function u (e, t, n, r) {
                          var i = h(l, t, n);
                          parseInt(p.os.version.major, 10) < 8
                            ? (function o (e) {
                                window.addEventListener('pagehide', function t () {
                                  g() &&
                                    (clearTimeout(e), window.removeEventListener('pagehide', t));
                                });
                              })(i)
                            : (function a (e) {
                                document.addEventListener('visibilitychange', function t () {
                                  g() &&
                                    (clearTimeout(e),
                                    document.removeEventListener('visibilitychange', t));
                                });
                              })(i),
                            !(function s () {
                              return 8 < parseInt(p.os.version.major, 10) && p.os.ios;
                            })()
                              ? v(e)
                              : (r === undefined ? (r = e) : clearTimeout(i),
                                (function c (e) {
                                  window.top.location.replace(e);
                                })(r));
                        })(e.urlScheme, e.storeURL, n, e.universalLink)
                      : setTimeout(function () {
                          r();
                        }, 100);
                };
              })();
            },
            { './userAgent.js': 27 },
          ],
        },
        {},
        [18]
      )(18);
    });
    var $___var_650f6c095a077854 = (function () {
      'use strict';
      function kakaoTalk () {
        function kakaoLinkShareHandler (context) {
          var kakaoLinkContext = context.kakaoAPI.kakaoLinkData;
          Kakao.Link[kakaoLinkContext.shareType](kakaoLinkContext.shareData);
        }
        return {
          share: function share (context) {
            kakaoLinkShareHandler(context);
          },
        };
      }
      var htmlElement = typeof HTMLElement !== 'undefined' ? HTMLElement : Element;
      var attachEventListener = function attachEventListener (fn, target) {
        return function () {
          var e = window.event;
          fn({
            target: e.srcElement,
            currentTarget: target,
            preventDefault: function preventDefault () {
              e.returnValue = false;
            },
          });
        };
      };
      function eventBind (type, listener, target) {
        if (target.addEventListener) {
          target.addEventListener(type, listener, false);
        } else {
          var attachListener = attachEventListener(listener, target);
          target.attachEvent('on' + type, attachListener);
        }
      }
      function on (type, listener, target) {
        if (target && target.length && target[0] instanceof htmlElement) {
          for (var i = 0, len = target.length; i < len; i++) {
            eventBind(type, listener, target[i]);
          }
        } else {
          eventBind(type, listener, target);
        }
      }
      var TYPE = {
        RESIZE: 'resize',
        CLICK: 'click',
        LONGPRESS: 'contextmenu',
        TOUCH_END: 'touchend',
        TOUCH_MOVE: 'touchmove',
        HOVER: 'mouseenter',
      };
      var EventManager = { on: on, TYPE: TYPE };
      var clickLog = function clickLog (category, service) {
        var tiaraTracker = window.TiaraTracker;
        var _window = window,
          _tiq = _window._tiq;
        if (tiaraTracker && tiaraTracker.getInstance()) {
          var eventProps = { te1: 'util', te2: category };
          if (service) {
            eventProps.te3 = service;
          }
          tiaraTracker.getInstance().trackEvent('clickLog').customProps(eventProps).track();
        } else if (_tiq) {
          var arr = ['__trackEvent', 'util', category];
          if (service) {
            arr.push(service);
          }
          _tiq.push(arr);
        }
      };
      var userAgent = function userAgent () {
        const $___old_97fdeb23cd4f9c39 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_97fdeb23cd4f9c39)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_1af3d49f017e59bb.userAgent
            ));
          return function () {
            var ua = window.navigator.userAgent.toString().toLowerCase();
            function checkUserAgent (ua) {
              var browser = {};
              var match = /(dolfin)[ \/]([\w.]+)/.exec(ua) ||
                /(edge)[ \/]([\w.]+)/.exec(ua) ||
                /(chrome)[ \/]([\w.]+)/.exec(ua) ||
                /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
                /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
                /(msie) ([\w.]+)/.exec(ua) ||
                (ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua)) || [
                  '',
                  'unknown',
                ];
              if (match[1] === 'webkit') {
                match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) ||
                  /(android)[ \/]([\w._\-]+);/.exec(ua) || [match[0], 'safari', match[2]];
              } else if (match[1] === 'mozilla') {
                if (/trident/.test(ua)) {
                  match[1] = 'msie';
                } else {
                  match[1] = 'firefox';
                }
              } else if (match[1] === 'edge') {
                match[1] = 'spartan';
              } else if (
                /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)
              ) {
                match[1] = 'polaris';
              }
              browser[match[1]] = true;
              browser.name = match[1];
              browser.version = setVersion(match[2]);
              return browser;
            }
            function setVersion (versionString) {
              var version = {};
              var versions = versionString ? versionString.split(/\.|-|_/) : ['0', '0', '0'];
              version.info = versions.join('.');
              version.major = versions[0] || '0';
              version.minor = versions[1] || '0';
              version.patch = versions[2] || '0';
              return version;
            }
            function checkPlatform (ua) {
              if (isPc(ua)) {
                return 'pc';
              } else if (isTablet(ua)) {
                return 'tablet';
              } else if (isMobile(ua)) {
                return 'mobile';
              } else {
                return '';
              }
            }
            function isPc (ua) {
              if (
                ua.match(/linux|windows (nt|98)|macintosh|cros/) &&
                !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)
              ) {
                return true;
              }
              return false;
            }
            function isTablet (ua) {
              if (ua.match(/ipad/) || (ua.match(/android/) && !ua.match(/mobi|mini|fennec/))) {
                return true;
              }
              return false;
            }
            function isMobile (ua) {
              if (
                !!ua.match(
                  /ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/
                )
              ) {
                return true;
              } else {
                return false;
              }
            }
            function checkOs (ua) {
              var os = {},
                match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) ||
                  /(android)[ \/]([\w._\-]+);/.exec(ua) ||
                  (/android/.test(ua) ? ['', 'android', '0.0.0'] : false) ||
                  (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)
                    ? ['', 'polaris', '0.0.0']
                    : false) ||
                  /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(ua) ||
                  (/(windows)/.test(ua) ? ['', 'windows', '0.0.0'] : false) ||
                  /(mac) os x ([\w._\-]+)/.exec(ua) ||
                  (/(linux)/.test(ua) ? ['', 'linux', '0.0.0'] : false) ||
                  (/webos/.test(ua) ? ['', 'webos', '0.0.0'] : false) ||
                  /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(ua) ||
                  /(bada)[ \/]([\w._\-]+)/.exec(ua) ||
                  (/bada/.test(ua) ? ['', 'bada', '0.0.0'] : false) ||
                  (/(rim|blackberry|bb10)/.test(ua) ? ['', 'blackberry', '0.0.0'] : false) || [
                    '',
                    'unknown',
                    '0.0.0',
                  ];
              if (match[1] === 'iphone' || match[1] === 'ipad' || match[1] === 'ipod') {
                match[1] = 'ios';
              } else if (match[1] === 'windows' && match[2] === '98') {
                match[2] = '0.98.0';
              }
              if (match[1] === 'cros') {
                match[1] = 'chrome';
              }
              os[match[1]] = true;
              os.name = match[1];
              os.version = setVersion(match[2]);
              return os;
            }
            function checkApp (ua) {
              var app = {},
                match = /(crios)[ \/]([\w.]+)/.exec(ua) ||
                  /(daumapps)[ \/]([\w.]+)/.exec(ua) || ['', ''];
              if (match[1]) {
                app.isApp = true;
                app.name = match[1];
                app.version = setVersion(match[2]);
              } else {
                app.isApp = false;
              }
              return app;
            }
            return {
              ua: ua,
              browser: checkUserAgent(ua),
              platform: checkPlatform(ua),
              os: checkOs(ua),
              app: checkApp(ua),
            };
          }.apply(this, arguments);
        } finally {
          if ($___old_97fdeb23cd4f9c39)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_97fdeb23cd4f9c39
            ));
        }
      };
      var _typeof =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            };
      var queryStringify = function queryStringify (obj) {
        var pairs = [];
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              var value = obj[key];
              if (
                (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' &&
                value.length
              ) {
                pairs.push(toValuesString(key, value));
              } else {
                pairs.push(key + '=' + value.toString());
              }
            }
          }
        }
        return pairs.join('&');
      };
      function toValuesString (key, values) {
        return values
          .map(function (value) {
            return key + '=' + value;
          })
          .join('&');
      }
      var web2app = (function () {
        var TIMEOUT_IOS = 2 * 1000,
          TIMEOUT_ANDROID = 3 * 100,
          INTERVAL = 100,
          ua = userAgent(),
          os = ua.os,
          intentNotSupportedBrowserList = ['firefox', 'opr/'];
        function moveToStore (storeURL) {
          top.window.location.href = storeURL;
        }
        function web2app (context) {
          var willInvokeApp =
              typeof context.willInvokeApp === 'function' ? context.willInvokeApp : function () {},
            onAppMissing =
              typeof context.onAppMissing === 'function' ? context.onAppMissing : moveToStore,
            onUnsupportedEnvironment =
              typeof context.onUnsupportedEnvironment === 'function'
                ? context.onUnsupportedEnvironment
                : function () {};
          willInvokeApp();
          if (os.android) {
            if (isIntentSupportedBrowser() && context.intentURI && !context.useUrlScheme) {
              web2appViaIntentURI(context.intentURI);
            } else if (context.storeURL) {
              web2appViaCustomUrlSchemeForAndroid(
                context.urlScheme,
                context.storeURL,
                onAppMissing
              );
            }
          } else if (os.ios && context.storeURL) {
            web2appViaCustomUrlSchemeForIOS(
              context.urlScheme,
              context.storeURL,
              onAppMissing,
              context.universalLink
            );
          } else {
            setTimeout(function () {
              onUnsupportedEnvironment();
            }, 100);
          }
        }
        function isIntentSupportedBrowser () {
          var supportsIntent = ua.browser.chrome && +ua.browser.version.major >= 25;
          var blackListRegexp = new RegExp(intentNotSupportedBrowserList.join('|'), 'i');
          return supportsIntent && !blackListRegexp.test(ua.ua);
        }
        function web2appViaCustomUrlSchemeForAndroid (urlScheme, storeURL, fallback) {
          deferFallback(TIMEOUT_ANDROID, storeURL, fallback);
          launchAppViaHiddenIframe(urlScheme);
        }
        function deferFallback (timeout, storeURL, fallback) {
          var clickedAt = new Date().getTime();
          return setTimeout(function () {
            var now = new Date().getTime();
            if (isPageVisible() && now - clickedAt < timeout + INTERVAL) {
              fallback(storeURL);
            }
          }, timeout);
        }
        function web2appViaIntentURI (launchURI) {
          if (ua.browser.chrome) {
            move();
          } else {
            setTimeout(move, 100);
          }
          function move () {
            top.window.location.href = launchURI;
          }
        }
        function web2appViaCustomUrlSchemeForIOS (urlScheme, storeURL, fallback, universalLink) {
          var tid = deferFallback(TIMEOUT_IOS, storeURL, fallback);
          if (parseInt(ua.os.version.major, 10) < 8) {
            bindPagehideEvent(tid);
          } else {
            bindVisibilityChangeEvent(tid);
          }
          if (isSupportUniversalLinks()) {
            if (universalLink === undefined) {
              universalLink = urlScheme;
            } else {
              clearTimeout(tid);
            }
            launchAppViaChangingLocation(universalLink);
          } else {
            launchAppViaHiddenIframe(urlScheme);
          }
        }
        function bindPagehideEvent (tid) {
          window.addEventListener('pagehide', function clear () {
            if (isPageVisible()) {
              clearTimeout(tid);
              window.removeEventListener('pagehide', clear);
            }
          });
        }
        function bindVisibilityChangeEvent (tid) {
          document.addEventListener('visibilitychange', function clear () {
            if (isPageVisible()) {
              clearTimeout(tid);
              document.removeEventListener('visibilitychange', clear);
            }
          });
        }
        function isPageVisible () {
          var attrNames = ['hidden', 'webkitHidden'];
          for (var i = 0, len = attrNames.length; i < len; i++) {
            if (typeof document[attrNames[i]] !== 'undefined') {
              return !document[attrNames[i]];
            }
          }
          return true;
        }
        function launchAppViaChangingLocation (urlScheme) {
          console.log('launchAppViaChangingLocation');
          top.window.location.href = urlScheme;
        }
        function launchAppViaHiddenIframe (urlScheme) {
          setTimeout(function () {
            var iframe = createHiddenIframe('appLauncher');
            iframe.src = urlScheme;
          }, 100);
        }
        function createHiddenIframe (id) {
          var iframe = document.createElement('iframe');
          iframe.id = id;
          iframe.style.border = 'none';
          iframe.style.width = '0';
          iframe.style.height = '0';
          iframe.style.display = 'none';
          iframe.style.overflow = 'hidden';
          document.body.appendChild(iframe);
          return iframe;
        }
        function isSupportUniversalLinks () {
          return parseInt(ua.os.version.major, 10) > 8 && ua.os.ios;
        }
        return web2app;
      })();
      var util = {
        type: function type (target) {
          return Object.prototype.toString.call(target);
        },
        throwError: function throwError (messages) {
          throw new Error(messages);
        },
        addClass: function addClass (el, cName) {
          function has (el, cname) {
            return el.className && (' ' + el.className + ' ').lastIndexOf(' ' + cname + ' ') > -1;
          }
          if (!el.className) {
            el.className = cName;
          } else if (!has(el, cName)) {
            el.className += ' ' + cName;
          }
        },
        removeClass: function removeClass (el, cName) {
          if (el.className) {
            el.className = (' ' + el.className + ' ')
              .replace(' ' + cName + ' ', ' ')
              .replace(/^\s+|\s+$/g, '');
          }
        },
        EventManager: EventManager,
        userAgent: userAgent,
        queryStringify: queryStringify,
        web2app: web2app,
        clickLog: clickLog,
      };
      function kakaoStory (isMobile) {
        var ua = util.userAgent();
        var appId = window.location.hostname;
        var FULL_NAME = '카카오스토리';
        function shareKakaoStory (appInfo, context) {
          if (isMobile) {
            kakaoStory.web2app(appInfo);
          } else {
            var url = 'https://story.kakao.com/share?url=' + encodeURIComponent(context.link);
            var option = 'width=530, height=480, resizable=no, scrollbars=no, status=no';
            window.open(url, 'StoryShare', option);
          }
        }
        return {
          share: function share (context) {
            var link = context.link,
              uriPath = 'posting',
              storeURL = ua.os.android
                ? 'market://details?id=com.kakao.story'
                : 'itms-apps://itunes.apple.com/app/id486244601',
              serviceName = context.service_name || '다음',
              param = {
                post: encodeURIComponent(context.prefix + '\r\n' + link),
                appid: encodeURIComponent(appId),
                appname: encodeURIComponent(serviceName),
                appver: '1.0',
                apiver: '1.0',
              };
            if (context.url_info) {
              param['urlinfo'] = encodeURIComponent(JSON.stringify(context.url_info));
            }
            shareKakaoStory(
              {
                name: FULL_NAME,
                suffix: '가',
                scheme: 'storylink',
                pkg: 'com.kakao.story',
                uriPath: uriPath,
                param: param,
                storeURL: storeURL,
              },
              context
            );
          },
        };
      }
      var getUrlScheme = function getUrlScheme (appInfo) {
        return appInfo.scheme + '://' + appInfo.uriPath + '?' + util.queryStringify(appInfo.param);
      };
      var getIntentUri = function getIntentUri (appInfo) {
        return (
          'intent://' +
          appInfo.uriPath +
          '?' +
          util.queryStringify(appInfo.param) +
          '#Intent;scheme=' +
          appInfo.scheme +
          ';package=' +
          appInfo.pkg +
          ';end'
        );
      };
      kakaoStory.web2app = function (appInfo) {
        var UNKNOWN_APP_ID = 0;
        var DEFAULT_APP_KEYWORD = '다음앱';
        util.web2app({
          urlScheme: getUrlScheme(appInfo),
          intentURI: getIntentUri(appInfo),
          storeURL: appInfo.storeURL,
          appName: appInfo.name || DEFAULT_APP_KEYWORD,
          onUnsupportedEnvironment: function onUnsupportedEnvironment (context) {
            window.location.href =
              'http://search.daum.net/search?w=tot&DA=BESE&q=' +
              (appInfo.name || DEFAULT_APP_KEYWORD);
          },
          willInvokeApp: function willInvokeApp () {
            var beacon = new Image();
            beacon.src =
              'http://tiara.daum.net/tiara.front/front/click/?referer=http%3A%2F%2Fdummy.daum.net%2F&url=http://dummy.daum.net/?t__nil_mob_minidaum=applink&nil_id=' +
              UNKNOWN_APP_ID;
          },
        });
      };
      function facebook (isMobile) {
        return {
          share: function share (context) {
            var link = context.link;
            var ua = util.userAgent().platform;
            var device = ua === 'mobile' ? 'm' : 'www';
            var address =
              'https://' + device + '.facebook.com/sharer.php?u=' + encodeURIComponent(link);
            var option = 'width=580, height=255, resizable=no, scrollbars=no, status=no';
            if (isMobile) {
              window.open(address, 'sharer', '');
            } else {
              window.open(address, '', option);
            }
          },
        };
      }
      function twitter (isMobile) {
        return {
          share: function share (context) {
            var link = context.link;
            var param = {
              url: encodeURIComponent(link),
              text: encodeURIComponent(context.prefix),
            };
            var webIntent = 'https://twitter.com/intent/tweet?' + util.queryStringify(param);
            if (context.service_name) {
              webIntent += encodeURIComponent(' | ' + context.service_name);
            }
            if (isMobile) {
              top.location.href = webIntent;
            } else {
              var option = 'width=580, height=255, resizable=no, scrollbars=yes, status=no';
              var popWindow = window.open('', '', option);
              popWindow.location.href = webIntent;
            }
          },
        };
      }
      function daumCafe (isMobile) {
        return {
          share: function share (context) {
            if (isMobile) {
              DaumCafe.Widget.connect('dialog', 'share', { link: context.link });
            } else {
              if (context.cafe) {
                window.open(
                  encodeURI(context.cafe),
                  '',
                  'width=620, height=450, resizable=yes, scrollbars=yes'
                );
              } else {
                DaumCafe.Widget.connect('dialog', 'share', { link: context.link });
              }
            }
          },
        };
      }
      function mail (isMobile) {
        return {
          share: function share (context) {
            var link = context.link,
              param = {
                opentype: 'compose',
                serviceId: 'socialshareRenewal',
                menubar: 'true',
                SUBJECT: encodeURIComponent(context.prefix),
                BODY: encodeURIComponent('"' + context.prefix + '"\r\n' + link),
                LINK: encodeURIComponent(link),
              };
            if (isMobile) {
              top.location.href =
                'http://mail2.daum.net/hanmailex/mobile/MailLauncher.daum?' +
                util.queryStringify(param);
            } else {
              var option = 'width=1000, height=550, resizable=yes, scrollbars=yes';
              var popWindow = window.open('', '', option);
              popWindow.location.href =
                'http://mail2.daum.net/hanmailex/Compose.daum?' + util.queryStringify(param);
            }
          },
        };
      }
      var htmlElement$1 = typeof HTMLElement !== 'undefined' ? HTMLElement : Element;
      var attachEventListener$1 = function attachEventListener (fn, target) {
        return function () {
          var e = window.event;
          fn({
            target: e.srcElement,
            currentTarget: target,
            preventDefault: function preventDefault () {
              e.returnValue = false;
            },
          });
        };
      };
      function eventBind$1 (type, listener, target) {
        if (target.addEventListener) {
          target.addEventListener(type, listener, false);
        } else {
          var attachListener = attachEventListener$1(listener, target);
          target.attachEvent('on' + type, attachListener);
        }
      }
      function on$1 (type, listener, target) {
        if (target && target.length && target[0] instanceof htmlElement$1) {
          for (var i = 0, len = target.length; i < len; i++) {
            eventBind$1(type, listener, target[i]);
          }
        } else {
          eventBind$1(type, listener, target);
        }
      }
      var TYPE$1 = {
        RESIZE: 'resize',
        CLICK: 'click',
        LONGPRESS: 'contextmenu',
        TOUCH_END: 'touchend',
        TOUCH_MOVE: 'touchmove',
        HOVER: 'mouseenter',
      };
      var EventManager$1 = { on: on$1, TYPE: TYPE$1 };
      var clickLog$1 = function clickLog (category, service) {
        var tiaraTracker = window.TiaraTracker;
        var _window = window,
          _tiq = _window._tiq;
        if (tiaraTracker && tiaraTracker.getInstance()) {
          var eventProps = { te1: 'util', te2: category };
          if (service) {
            eventProps.te3 = service;
          }
          tiaraTracker.getInstance().trackEvent('clickLog').customProps(eventProps).track();
        } else if (_tiq) {
          var arr = ['__trackEvent', 'util', category];
          if (service) {
            arr.push(service);
          }
          _tiq.push(arr);
        }
      };
      var userAgent$1 = function userAgent () {
        const $___old_559a5c7b8ed4e37a = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_559a5c7b8ed4e37a)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_1af3d49f017e59bb.userAgent
            ));
          return function () {
            var ua = window.navigator.userAgent.toString().toLowerCase();
            function checkUserAgent (ua) {
              var browser = {};
              var match = /(dolfin)[ \/]([\w.]+)/.exec(ua) ||
                /(edge)[ \/]([\w.]+)/.exec(ua) ||
                /(chrome)[ \/]([\w.]+)/.exec(ua) ||
                /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
                /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
                /(msie) ([\w.]+)/.exec(ua) ||
                (ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua)) || [
                  '',
                  'unknown',
                ];
              if (match[1] === 'webkit') {
                match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) ||
                  /(android)[ \/]([\w._\-]+);/.exec(ua) || [match[0], 'safari', match[2]];
              } else if (match[1] === 'mozilla') {
                if (/trident/.test(ua)) {
                  match[1] = 'msie';
                } else {
                  match[1] = 'firefox';
                }
              } else if (match[1] === 'edge') {
                match[1] = 'spartan';
              } else if (
                /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)
              ) {
                match[1] = 'polaris';
              }
              browser[match[1]] = true;
              browser.name = match[1];
              browser.version = setVersion(match[2]);
              return browser;
            }
            function setVersion (versionString) {
              var version = {};
              var versions = versionString ? versionString.split(/\.|-|_/) : ['0', '0', '0'];
              version.info = versions.join('.');
              version.major = versions[0] || '0';
              version.minor = versions[1] || '0';
              version.patch = versions[2] || '0';
              return version;
            }
            function checkPlatform (ua) {
              if (isPc(ua)) {
                return 'pc';
              } else if (isTablet(ua)) {
                return 'tablet';
              } else if (isMobile(ua)) {
                return 'mobile';
              } else {
                return '';
              }
            }
            function isPc (ua) {
              if (
                ua.match(/linux|windows (nt|98)|macintosh|cros/) &&
                !ua.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)
              ) {
                return true;
              }
              return false;
            }
            function isTablet (ua) {
              if (ua.match(/ipad/) || (ua.match(/android/) && !ua.match(/mobi|mini|fennec/))) {
                return true;
              }
              return false;
            }
            function isMobile (ua) {
              if (
                !!ua.match(
                  /ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/
                )
              ) {
                return true;
              } else {
                return false;
              }
            }
            function checkOs (ua) {
              var os = {},
                match = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(ua) ||
                  /(android)[ \/]([\w._\-]+);/.exec(ua) ||
                  (/android/.test(ua) ? ['', 'android', '0.0.0'] : false) ||
                  (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(ua)
                    ? ['', 'polaris', '0.0.0']
                    : false) ||
                  /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(ua) ||
                  (/(windows)/.test(ua) ? ['', 'windows', '0.0.0'] : false) ||
                  /(mac) os x ([\w._\-]+)/.exec(ua) ||
                  (/(linux)/.test(ua) ? ['', 'linux', '0.0.0'] : false) ||
                  (/webos/.test(ua) ? ['', 'webos', '0.0.0'] : false) ||
                  /(cros)(?:\s[\w]+\s)([\d._\-]+)/.exec(ua) ||
                  /(bada)[ \/]([\w._\-]+)/.exec(ua) ||
                  (/bada/.test(ua) ? ['', 'bada', '0.0.0'] : false) ||
                  (/(rim|blackberry|bb10)/.test(ua) ? ['', 'blackberry', '0.0.0'] : false) || [
                    '',
                    'unknown',
                    '0.0.0',
                  ];
              if (match[1] === 'iphone' || match[1] === 'ipad' || match[1] === 'ipod') {
                match[1] = 'ios';
              } else if (match[1] === 'windows' && match[2] === '98') {
                match[2] = '0.98.0';
              }
              if (match[1] === 'cros') {
                match[1] = 'chrome';
              }
              os[match[1]] = true;
              os.name = match[1];
              os.version = setVersion(match[2]);
              return os;
            }
            function checkApp (ua) {
              var app = {},
                match = /(crios)[ \/]([\w.]+)/.exec(ua) ||
                  /(daumapps)[ \/]([\w.]+)/.exec(ua) || ['', ''];
              if (match[1]) {
                app.isApp = true;
                app.name = match[1];
                app.version = setVersion(match[2]);
              } else {
                app.isApp = false;
              }
              return app;
            }
            return {
              ua: ua,
              browser: checkUserAgent(ua),
              platform: checkPlatform(ua),
              os: checkOs(ua),
              app: checkApp(ua),
            };
          }.apply(this, arguments);
        } finally {
          if ($___old_559a5c7b8ed4e37a)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_559a5c7b8ed4e37a
            ));
        }
      };
      var queryStringify$1 = function queryStringify (obj) {
        var pairs = [];
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              var value = obj[key];
              if (
                (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' &&
                value.length
              ) {
                pairs.push(toValuesString$1(key, value));
              } else {
                pairs.push(key + '=' + value.toString());
              }
            }
          }
        }
        return pairs.join('&');
      };
      function toValuesString$1 (key, values) {
        return values
          .map(function (value) {
            return key + '=' + value;
          })
          .join('&');
      }
      var web2app$1 = (function () {
        var TIMEOUT_IOS = 2 * 1000,
          TIMEOUT_ANDROID = 3 * 100,
          INTERVAL = 100,
          ua = userAgent$1(),
          os = ua.os,
          intentNotSupportedBrowserList = ['firefox', 'opr/'];
        function moveToStore (storeURL) {
          top.window.location.href = storeURL;
        }
        function web2app (context) {
          var willInvokeApp =
              typeof context.willInvokeApp === 'function' ? context.willInvokeApp : function () {},
            onAppMissing =
              typeof context.onAppMissing === 'function' ? context.onAppMissing : moveToStore,
            onUnsupportedEnvironment =
              typeof context.onUnsupportedEnvironment === 'function'
                ? context.onUnsupportedEnvironment
                : function () {};
          willInvokeApp();
          if (os.android) {
            if (isIntentSupportedBrowser() && context.intentURI && !context.useUrlScheme) {
              web2appViaIntentURI(context.intentURI);
            } else if (context.storeURL) {
              web2appViaCustomUrlSchemeForAndroid(
                context.urlScheme,
                context.storeURL,
                onAppMissing
              );
            }
          } else if (os.ios && context.storeURL) {
            web2appViaCustomUrlSchemeForIOS(
              context.urlScheme,
              context.storeURL,
              onAppMissing,
              context.universalLink
            );
          } else {
            setTimeout(function () {
              onUnsupportedEnvironment();
            }, 100);
          }
        }
        function isIntentSupportedBrowser () {
          var supportsIntent = ua.browser.chrome && +ua.browser.version.major >= 25;
          var blackListRegexp = new RegExp(intentNotSupportedBrowserList.join('|'), 'i');
          return supportsIntent && !blackListRegexp.test(ua.ua);
        }
        function web2appViaCustomUrlSchemeForAndroid (urlScheme, storeURL, fallback) {
          deferFallback(TIMEOUT_ANDROID, storeURL, fallback);
          launchAppViaHiddenIframe(urlScheme);
        }
        function deferFallback (timeout, storeURL, fallback) {
          var clickedAt = new Date().getTime();
          return setTimeout(function () {
            var now = new Date().getTime();
            if (isPageVisible() && now - clickedAt < timeout + INTERVAL) {
              fallback(storeURL);
            }
          }, timeout);
        }
        function web2appViaIntentURI (launchURI) {
          if (ua.browser.chrome) {
            move();
          } else {
            setTimeout(move, 100);
          }
          function move () {
            top.window.location.href = launchURI;
          }
        }
        function web2appViaCustomUrlSchemeForIOS (urlScheme, storeURL, fallback, universalLink) {
          var tid = deferFallback(TIMEOUT_IOS, storeURL, fallback);
          if (parseInt(ua.os.version.major, 10) < 8) {
            bindPagehideEvent(tid);
          } else {
            bindVisibilityChangeEvent(tid);
          }
          if (isSupportUniversalLinks()) {
            if (universalLink === undefined) {
              universalLink = urlScheme;
            } else {
              clearTimeout(tid);
            }
            launchAppViaChangingLocation(universalLink);
          } else {
            launchAppViaHiddenIframe(urlScheme);
          }
        }
        function bindPagehideEvent (tid) {
          window.addEventListener('pagehide', function clear () {
            if (isPageVisible()) {
              clearTimeout(tid);
              window.removeEventListener('pagehide', clear);
            }
          });
        }
        function bindVisibilityChangeEvent (tid) {
          document.addEventListener('visibilitychange', function clear () {
            if (isPageVisible()) {
              clearTimeout(tid);
              document.removeEventListener('visibilitychange', clear);
            }
          });
        }
        function isPageVisible () {
          var attrNames = ['hidden', 'webkitHidden'];
          for (var i = 0, len = attrNames.length; i < len; i++) {
            if (typeof document[attrNames[i]] !== 'undefined') {
              return !document[attrNames[i]];
            }
          }
          return true;
        }
        function launchAppViaChangingLocation (urlScheme) {
          console.log('launchAppViaChangingLocation');
          top.window.location.href = urlScheme;
        }
        function launchAppViaHiddenIframe (urlScheme) {
          setTimeout(function () {
            var iframe = createHiddenIframe('appLauncher');
            iframe.src = urlScheme;
          }, 100);
        }
        function createHiddenIframe (id) {
          var iframe = document.createElement('iframe');
          iframe.id = id;
          iframe.style.border = 'none';
          iframe.style.width = '0';
          iframe.style.height = '0';
          iframe.style.display = 'none';
          iframe.style.overflow = 'hidden';
          document.body.appendChild(iframe);
          return iframe;
        }
        function isSupportUniversalLinks () {
          return parseInt(ua.os.version.major, 10) > 8 && ua.os.ios;
        }
        return web2app;
      })();
      var util$1 = {
        type: function type (target) {
          return Object.prototype.toString.call(target);
        },
        throwError: function throwError (messages) {
          throw new Error(messages);
        },
        addClass: function addClass (el, cName) {
          function has (el, cname) {
            return el.className && (' ' + el.className + ' ').lastIndexOf(' ' + cname + ' ') > -1;
          }
          if (!el.className) {
            el.className = cName;
          } else if (!has(el, cName)) {
            el.className += ' ' + cName;
          }
        },
        removeClass: function removeClass (el, cName) {
          if (el.className) {
            el.className = (' ' + el.className + ' ')
              .replace(' ' + cName + ' ', ' ')
              .replace(/^\s+|\s+$/g, '');
          }
        },
        EventManager: EventManager$1,
        userAgent: userAgent$1,
        queryStringify: queryStringify$1,
        web2app: web2app$1,
        clickLog: clickLog$1,
      };
      var isMobile = util$1.userAgent().platform === 'mobile';
      var SNS_MODULE = {
        kakaoTalk: 'kakaotalk',
        kakaoStory: 'kakaostory',
        facebook: 'facebook',
        twitter: 'twitter',
        daumCafe: 'daumcafe',
        mail: 'mail',
      };
      var snsFactory = function snsFactory () {
        return {
          create: function create (snsName) {
            var sns = null;
            switch (snsName) {
              case SNS_MODULE.kakaoTalk:
                sns = kakaoTalk();
                break;
              case SNS_MODULE.kakaoStory:
                sns = kakaoStory(isMobile);
                break;
              case SNS_MODULE.facebook:
                sns = facebook(isMobile);
                break;
              case SNS_MODULE.twitter:
                sns = twitter(isMobile);
                break;
              case SNS_MODULE.daumCafe:
                sns = daumCafe(isMobile);
                break;
              case SNS_MODULE.mail:
                sns = mail(isMobile);
                break;
              default:
                sns = null;
            }
            return sns;
          },
        };
      };
      var socialSharer = function socialSharer (snsFactory, shareData) {
        if (!shareData) {
          throw new Error(socialSharer.messages.noShareData);
        }
        var Kakao = window.Kakao || shareData.Kakao || null;
        if (Kakao) {
          if (Kakao.Auth);
          else {
            var kakaoLinkDaumAppKey = void 0;
            try {
              if (shareData.kakaoAPI.appkey) {
                kakaoLinkDaumAppKey = shareData.kakaoAPI.appkey;
              }
              Kakao.init(kakaoLinkDaumAppKey);
            } catch (e) {
              throw new Error(e.message + ' 및 ' + socialSharer.messages.confirmKakaoApi);
            }
          }
        }
        return {
          shareSns: function shareSns (snsName) {
            if (!snsName) throw new Error(socialSharer.messages.noSnsName);
            var sns = snsFactory.create(snsName);
            if (!sns) {
              throw new Error(socialSharer.noSnsModule(snsName));
            }
            sns.share(shareData);
          },
        };
      };
      socialSharer.messages = {
        noSnsName: 'sns 이름을 인자로 받아야 합니다.',
        noSnsModule: '_ 이란 sns모듈은 없습니다. sns 이름을 확인하세요',
        noShareData: 'sns 모듈에 전달할 data를 넣어야 합니다. 옵션값의 두번째 인자를 확인하세요',
        confirmKakaoApi: 'Kakao api data가 필요합니다.',
      };
      socialSharer.noSnsModule = function (name) {
        return socialSharer.messages.noSnsModule.replace('_', name);
      };
      var ATTR_NAME = 'data-handler';
      var socialshareViewer = function socialshareViewer (socialSharer, snsItemList) {
        var view = {
          share: function share (socialName) {
            socialSharer.shareSns(socialName);
            util$1.clickLog('layer', socialName);
          },
        };
        var handleClick = function handleClick (e) {
          e.preventDefault();
          var targetEl = e.currentTarget;
          var socialName = targetEl.getAttribute(ATTR_NAME);
          view.share(socialName);
        };
        EventManager$1.on(EventManager$1.TYPE.CLICK, handleClick, snsItemList);
        return view;
      };
      var SocialShare = {
        snsFactory: snsFactory,
        socialSharer: socialSharer,
        socialshareViewer: socialshareViewer,
      };
      var SNS_LIST = ['kakaotalk', 'kakaostory', 'facebook', 'twitter', 'daumcafe', 'mail'];
      var SNS_DATA = {
        kakaotalk: { iconClassName: 'ico_sns_kt', name: '카카오톡' },
        kakaostory: { iconClassName: 'ico_sns_ks', name: '카카오스토리' },
        facebook: { iconClassName: 'ico_sns_fb', name: '페이스북' },
        twitter: { iconClassName: 'ico_sns_tw', name: '트위터' },
        daumcafe: { iconClassName: 'ico_sns_cafe', name: '다음카페' },
        mail: { iconClassName: 'ico_sns_mail', name: '메일' },
      };
      var viewData = { SNS_LIST: SNS_LIST, SNS_DATA: SNS_DATA, link: '' };
      var CLOSE_BTN_CLASSNAME = '.btn_close';
      var COPY_BTN_CLASSNAME = '.link_copyurl';
      var bindEvent = function bindEvent (viewer, layerContainer) {
        var ua = util.userAgent();
        var isIE =
          ua.browser.name.indexOf('msie') > -1 ? parseInt(ua.browser.version.major) : false;
        var isLowIE = isIE && isIE < 10 ? true : false;
        var closeBtnEl = layerContainer.querySelectorAll(CLOSE_BTN_CLASSNAME);
        var copyBtn = layerContainer.querySelector(COPY_BTN_CLASSNAME);
        var delay = null;
        var closeLayer = function closeLayer (e) {
          e.preventDefault();
          viewer.hide();
          if (delay) {
            viewer.hideMsgLayer();
            clearTimeout(delay);
          }
        };
        var copyUrl = function copyUrl (e) {
          e.preventDefault();
          viewer.copyEvent();
          delay = setTimeout(function () {
            viewer.hideMsgLayer();
            closeLayer(e);
          }, 2000);
        };
        for (var i = 0; i < closeBtnEl.length; i++) {
          EventManager.on(EventManager.TYPE.CLICK, closeLayer, closeBtnEl[i]);
        }
        if (!isLowIE) {
          EventManager.on(EventManager.TYPE.CLICK, copyUrl, copyBtn);
        }
      };
      var ua = util.userAgent();
      var isLowIE =
        ua.browser.name.indexOf('msie') > -1 ? parseInt(ua.browser.version.major) : false;
      var template = function template (viewData) {
        var link = viewData.link;
        var URL_VIEW_IE =
          '<div class="sns_copyurl sns_copyurl_type2">\n  <span class="link_copyurl"><input type="text" class="tf_url" title="현재페이지 URL복사" value="' +
          link +
          '"></span>\n  <p class="desc_tip">위 URL을 복사(Ctrl+C)하여 원하는 곳에 <br>붙여넣기(Ctrl+V)해주세요.</p>\n  </div>';
        var URL_VIEW_LATEST =
          '<div class="sns_copyurl">\n    <a href="#none" class="link_copyurl">\n    <span class="screen_out">현재페이지 URL복사</span>\n    <span class="txt_url">' +
          link +
          '</span>\n    <span class="txt_copy">URL복사</span>\n    </a>\n    </div>';
        var URL_VIEW_TEMPLATE = isLowIE && isLowIE < 10 ? URL_VIEW_IE : URL_VIEW_LATEST;
        var MSG_TEMPLATE =
          '<div class="sns_comm_p copyurl_layer hide">\n  <div class="inner_copyurl">\n  <p class="desc_copyurl">주소가 복사되었습니다.<br>원하는곳에 붙여넣기(Ctrl+V)해주세요.</p>\n  <button class="btn_close"><span class="img_social ico_close">공유목록 닫기</span>\n  </button>';
        var $container = document.createElement('div');
        $container.className = 'social_comm_p';
        var SNS_TEMPLATE =
          '<div class="sns_comm_p share_layer">\n    <strong class="screen_out">SNS로 공유하기 펼쳐짐</strong>\n    <ul class="list_sns"></ul>\n    <div class="copyUrl">' +
          URL_VIEW_TEMPLATE +
          '</div>\n    <button class="btn_close"><span class="img_social ico_close">공유목록 닫기</span></button>\n    </div>' +
          MSG_TEMPLATE +
          '\n  ';
        $container.innerHTML = SNS_TEMPLATE;
        var listSnsEl = $container.querySelector('.list_sns');
        var snsList = viewData.SNS_LIST;
        var snsListHtml = function snsListHtml (snsList) {
          var buffer = [];
          for (var i = 0; i < snsList.length; i++) {
            var snsName = snsList[i];
            var temp =
              '<li>\n        <a href="#none" class="link_sns" data-handler="' +
              snsName +
              '">\n        <span class="img_social ' +
              viewData.SNS_DATA[snsName].iconClassName +
              '">\n        </span>' +
              viewData.SNS_DATA[snsName].name +
              '</a></li>';
            buffer.push(temp);
          }
          return buffer.join('');
        };
        listSnsEl.innerHTML = snsListHtml(snsList);
        return $container;
      };
      var htmlElement$4 = typeof HTMLElement !== 'undefined' ? HTMLElement : Element;
      var layerViewer = function layerViewer (triggerEl, opts) {
        var messages = layerViewer.messages;
        if (!(triggerEl instanceof htmlElement$4)) {
          util.throwError(messages.failTriggerEl);
        }
        viewData.link = opts.link || '';
        var layerContainer = template(viewData);
        var msgLayer = layerContainer.querySelector('.copyurl_layer');
        var shareLayer = layerContainer.querySelector('.share_layer');
        var linkTxt = layerContainer.querySelector('.txt_url');
        var viewer = {
          render: function render (moreViewContainer) {
            if (!(moreViewContainer instanceof htmlElement$4)) {
              util.throwError(
                layerViewer.failArgument(messages.failRenderArgument, moreViewContainer)
              );
            }
            moreViewContainer.appendChild(this.getView());
            bindEvent(viewer, layerContainer);
            this.hide();
          },
          getView: function getView () {
            return layerContainer;
          },
          show: function show () {
            if (layerContainer) {
              util.clickLog('btn_share');
              util.removeClass(layerContainer, 'hide');
            }
          },
          hide: function hide () {
            util.addClass(layerContainer, 'hide');
          },
          showMsgLayer: function showMsgLayer () {
            util.removeClass(msgLayer, 'hide');
            util.addClass(shareLayer, 'hide');
          },
          hideMsgLayer: function hideMsgLayer () {
            util.addClass(msgLayer, 'hide');
            util.removeClass(shareLayer, 'hide');
          },
          changeLink: function changeLink (url) {
            if (layerContainer) {
              var urlEl = layerContainer.querySelector('.txt_url');
              urlEl.innerHTML = url;
            }
          },
          copyEvent: function copyEvent () {
            this.copyUrl(linkTxt);
            this.showMsgLayer();
            util.clickLog('layer', 'copyUrl');
          },
          copyUrl: function copyUrl (targetTxt) {
            var range = document.createRange();
            range.selectNodeContents(targetTxt);
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
          },
        };
        EventManager.on(
          EventManager.TYPE.CLICK,
          function (e) {
            e.preventDefault();
            viewer.show();
          },
          triggerEl
        );
        if (opts.action && opts.action === 'hover') {
          EventManager.on(
            EventManager.TYPE.HOVER,
            function (e) {
              e.preventDefault();
              viewer.show();
            },
            triggerEl
          );
        }
        return viewer;
      };
      layerViewer.messages = {
        failRenderArgument:
          '_은 moreViewContainer 옵션으로 잘못된 타입 입니다. DOM객체가 주입되어야 합니다.',
        failTriggerEl: '트리거 버튼 타입이 잘못되었습니다. Element 타입으로 넣어주세요.',
      };
      layerViewer.failArgument = function failArgument (message, arguemnt) {
        return message.replace('_', util.type(arguemnt));
      };
      var socialshareRenewal = {};
      function Main (el, options) {
        if (!(this instanceof Main)) {
          return new Main(el, options);
        }
        this.el = el;
        this.options = options;
        this.viewer = layerViewer(this.el, options);
        this.viewer.render(this.options.moreViewContainer);
        var snsFactory = SocialShare.snsFactory();
        var share = SocialShare.socialSharer(snsFactory, this.options);
        var snsItemEl = options.moreViewContainer.querySelectorAll('.link_sns');
        SocialShare.socialshareViewer(share, snsItemEl, this.options.prefix);
      }
      Main.prototype = {
        close: function close () {
          this.viewer.hide();
        },
        open: function open () {
          this.viewer.show();
        },
        share: (function (_share) {
          function share (_x) {
            return _share.apply(this, arguments);
          }
          share.toString = function () {
            return _share.toString();
          };
          return share;
        })(function (snsName) {
          share.shareSns(snsName);
        }),
        updateContext: function updateContext (options) {
          var link = window.location || '';
          if (options) {
            this.options = options;
            link = this.options.link || '';
          }
          this.viewer.changeLink(link);
        },
      };
      socialshareRenewal.Main = Main;
      return socialshareRenewal;
    })();
    socialshareRenewal = $___var_650f6c095a077854;
  })();
}
