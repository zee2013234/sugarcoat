{
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
    !(function (u, e, o, s) {
      const $___old_8d255f15d305a082 = {}.constructor.getOwnPropertyDescriptor(
        window,
        'localStorage'
      );
      try {
        if ($___old_8d255f15d305a082)
          ({}.constructor.defineProperty(
            window,
            'localStorage',
            $___stub_b317e19f866a2da7.localStorage
          ));
        return function () {
          if (void 0 === u.unid || !u.unid.version) {
            !(function () {
              try {
                new window.CustomEvent('test');
              } catch (e) {
                function t (e, t) {
                  t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                  var i = document.createEvent('CustomEvent');
                  return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                }
                (t.prototype = window.Event.prototype), (window.CustomEvent = t);
              }
            })();
            function l (e) {
              return (document.cookie.match('(?:^|;\\s*)' + e + '\\s*=\\s*([^;]+)') || 0)[1];
            }
            function c (e, t, i, n) {
              var a = new Date();
              a.setTime(a.getTime() + 157680000000),
                (document.cookie =
                  e +
                  '=' +
                  (void 0 === t ? '' : t) +
                  ';path=' +
                  (n || '/') +
                  ';expires=' +
                  (void 0 === t ? 'Thu, 01 Jan 1970 00:00:01 GMT' : a.toUTCString()) +
                  (i ? ';domain=' + i : '') +
                  ';SameSite=none ;secure');
            }
            function r () {
              (w.className = ''),
                S.postMessage(JSON.stringify({ action: 'check', data: unid._data }), D);
            }
            function v (e) {
              (b.vexpired = 63072000000 <= new Date() - e),
                b.vexpired &&
                  (delete b.lsData.VCONSENT,
                  delete b.lsData.VCONSENTTIME,
                  delete b.lsData.SWID,
                  delete b.lsData.ANON);
            }
            function g (e, t) {
              (unid.reason = e),
                o.dispatchEvent(new CustomEvent('unid.error', { detail: t || e })),
                u.unid.cbGet && u.unid.cbGet(),
                u.unid.cbData && u.unid.cbData(unid.getData());
            }
            function f () {
              var e = unid.getData();
              if (
                (o.dispatchEvent(new CustomEvent('unid.value', { detail: e })),
                u.unid.cbGet && u.unid.cbGet(e.unid),
                u.unid.cbData && u.unid.cbData(e),
                !unid._data.uiLogSent && '{}' !== JSON.stringify(unid._data.uiLog))
              ) {
                unid._data.uiLogSent = 1;
                var t = new (u.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
                t.open('POST', u.location.protocol + '//unid.go.com/log', !0),
                  t.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'),
                  (unid._data.uiLog.conversation_id = unid._data.conversation_id),
                  (unid._data.uiLog.correlation_id = unid._data.correlation_id),
                  (unid._data.uiLog.h = unid._data.host),
                  (unid._data.uiLog.href = unid._data.href),
                  (unid._data.uiLog.framed = unid._data.framed),
                  unid._data.lsDisabled ||
                    (unid._data.uiLog.ls = localStorage.getItem(_ + ':data')),
                  (unid._data.uiLog.lsDisabled = unid._data.lsDisabled ? 1 : 0),
                  (unid._data.uiLog.lsFail = unid._data.lsFail ? 1 : 0),
                  (unid._data.uiLog.new = unid.new),
                  (unid._data.uiLog.received = unid.received),
                  (unid._data.uiLog.silo = unid.silo),
                  (unid._data.uiLog.swid = unid._data.swid),
                  (unid._data.uiLog.version = unid.version),
                  t.send(JSON.stringify(unid._data.uiLog));
              }
            }
            function m (e, t) {
              var i = new Date().getTime();
              if (
                (o.dispatchEvent(new CustomEvent('unid.abort', { detail: unid.getData() })),
                f(),
                'denied' !== e &&
                  'swid_nt' !== e &&
                  !(
                    localStorage && 72000000 < i - Number(localStorage.getItem(_ + ':abort') || 0)
                  ))
              )
                try {
                  localStorage.setItem(_ + ':abort', i);
                  var n = new (u.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
                  n.open('GET', u.location.protocol + '//unid.go.com/abort', !0),
                    n.setRequestHeader('Content-Type', 'text/plain'),
                    n.setRequestHeader(
                      '_',
                      'f`' +
                        (parent !== u ? 1 : 0) +
                        '``h`' +
                        u.location.hostname +
                        (t ? '``e`' + t : '') +
                        '``' +
                        e +
                        '`1'
                    ),
                    n.send();
                } catch (e) {}
            }
            function p (e) {
              const $___old_e71255ddb5a8e123 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              );
              try {
                if ($___old_e71255ddb5a8e123)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_b317e19f866a2da7.localStorage
                  ));
                return function () {
                  if (!b.lsDisabled)
                    try {
                      localStorage.setItem(_ + ':data', JSON.stringify(e));
                    } catch (e) {
                      b.lsFail = !0;
                    }
                }.apply(this, arguments);
              } finally {
                if ($___old_e71255ddb5a8e123)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_e71255ddb5a8e123
                  ));
              }
            }
            var _ = 'com.go.unid',
              t = l('UNID'),
              i = l('SWID'),
              D = 'https://cdn.unid.go.com',
              n = s.hostname.replace(/\.$/, '').toLowerCase(),
              b = {
                cookiesDisabled: !e.cookieEnabled,
                framed: u.self != u.top || s !== u.parent.location ? 1 : 0,
                fwid: l('mrmid'),
                host: n,
                href: s.href,
                incognito: !1,
                language: e.language,
                uiLog: {},
                lsDisabled: !1,
                lsFail: !1,
                merlinId:
                  'undefined' != typeof Merlin && Merlin.cookies ? Merlin.cookies.M_ID : void 0,
                ref: o.referrer,
                rutma: l('__rutma'),
                swid: i,
                tzOffset: new Date().getTimezoneOffset(),
                unid: t,
                what: {},
              };
            if (void 0 !== u.DisneyID) {
              b.did = 1;
              try {
                u.DisneyID.get()
                  .getLoggedInStatus()
                  .then(function (e) {
                    e &&
                      u.DisneyID.get()
                        .getGuest()
                        .then(function (e) {
                          e.profile &&
                            ((b.authed = 1), (b.test = 'Y' === e.profile.testProfileFlag));
                        })
                        .fail(function (e) {
                          (b.didErrorGuest = 1), (b.didErrorMsg = e);
                        });
                  });
              } catch (e) {
                (b.didErrorLoad = 1), (b.didErrorMsg = e.message);
              }
            }
            if (
              ((u.unid = {
                _data: b,
                clear: function (e) {
                  e && (u.unid.clearCB = e), c('UNID');
                  for (
                    var t = s.host.split(':')[0].split('.'), i = '.' + t.pop(), n = 0;
                    n < t.length;
                    n++
                  )
                    (i = t.pop() + i),
                      t.length && (i = '.' + i),
                      c('UNID', void 0, i),
                      l('UNID') || (t = []);
                  localStorage.removeItem(_ + ':abort'),
                    localStorage.removeItem(_ + ':data'),
                    delete unid._data.unid,
                    delete unid.value,
                    (unid.new = !1),
                    (unid.silo = !1),
                    (unid._data.lsData = {}),
                    (unid.reason = 'cleared'),
                    S && S.postMessage('{"action":"clear"}', D);
                },
                get: function (e) {
                  var t = l('UNID');
                  return e && (t ? e(t) : (u.unid.cbGet = e)), t;
                },
                getData: function (e) {
                  var t = {
                    new: u.unid.new,
                    reason: u.unid.reason,
                    received: u.unid.received,
                    silo: u.unid.silo,
                    unid: 'denied' === u.unid.reason ? void 0 : u.unid.value,
                    done: u.unid.done,
                  };
                  return e && (t.done ? e(t) : (u.unid.cbData = e)), t;
                },
                vconsent: function (e, t, i, n) {
                  var a = void 0 === unid._data.lsData.VCONSENT ? 2 : unid._data.lsData.VCONSENT;
                  v(t);
                  var d = b.vexpired ? 2 : e ? 1 : 0;
                  return a === d
                    ? (n && n({ unid: unid.value, reason: unid.reason, type: unid.type }), !1)
                    : (2 != d &&
                        (1 == d && (unid.silo = !1),
                        (unid._data.lsData.VCONSENT = d),
                        (unid._data.lsData.VCONSENTTIME = t.getTime())),
                      (unid._data.user = i),
                      (unid._data.update = 1),
                      (2 === a && 0 == d) ||
                        (0 === a && 2 == d) ||
                        ((unid._data.unid = void 0), delete unid._data.lsData.UNID),
                      p(unid._data.lsData),
                      r(),
                      n && (u.unid.cbData = n),
                      !0);
                },
                new: !1,
                reason: t ? 'return' : 'new',
                received: !1,
                silo: !1,
                value: t,
                version: '4.0.159',
                done: !1,
              }),
              (b.version = u.unid.version),
              '1' == l('SWID_NT'))
            )
              return unid.clear(), (unid.reason = 'swid_nt'), (unid.done = !0), m('swid_nt');
            b.cookiesDisabled || (c(_, _), (b.cookiesBlocked = !l(_)), c(_));
            try {
              var a = _ + ':test';
              localStorage.setItem(a, 1), localStorage.getItem(a), localStorage.removeItem(a);
            } catch (e) {
              b.lsDisabled = !0;
            }
            var d = (function () {
              const $___old_c237ad892f2c671f = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              );
              try {
                if ($___old_c237ad892f2c671f)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_b317e19f866a2da7.localStorage
                  ));
                return function () {
                  var e;
                  if (
                    (b.lsDisabled || (e = localStorage.getItem(_ + ':data')),
                    '[object Object]' === e &&
                      (localStorage.removeItem(_ + ':data'), (e = void 0)),
                    e)
                  )
                    try {
                      e = JSON.parse(e);
                    } catch (e) {
                      localStorage.removeItem(_ + ':data'), (b.lsFail = !0);
                    }
                  return e || {};
                }.apply(this, arguments);
              } finally {
                if ($___old_c237ad892f2c671f)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_c237ad892f2c671f
                  ));
              }
            })();
            void 0 !== (b.lsData = d).VCONSENTTIME && v(d.VCONSENTTIME);
            var w = o.createElement('iframe');
            (w.id = 'unidFrame'),
              (w.style.display = 'none'),
              (w.src = D + '/inner/?v=' + u.unid.version);
            function h () {
              o.body.appendChild(w), (S = w.contentWindow);
            }
            var S;
            o.body && h(),
              (o.onreadystatechange = function () {
                if (
                  'complete' === o.readyState &&
                  o.body &&
                  (!b.merlinId &&
                    'undefined' != typeof Merlin &&
                    Merlin.getCookies &&
                    Merlin.getCookies(function (e) {
                      e && e.M_ID && (b.merlinId = e.M_ID);
                    }),
                  S || h(),
                  'MutationObserver' in u)
                ) {
                  var d = new MutationObserver(function (e) {
                    e.forEach(function (e) {
                      var t,
                        i = e.addedNodes[0];
                      if (
                        i &&
                        (t = i.childNodes)[0] &&
                        Array.prototype.slice.call(t).filter(function (e) {
                          return !!e.id && 'unidFrame' == e.id;
                        }).length
                      ) {
                        d.disconnect();
                        var n = o.querySelector('#unidFrame'),
                          a = w && w.parentNode ? w.parentNode : null;
                        a && (a.removeChild(n), h());
                      } else
                        u.setTimeout(function () {
                          d.disconnect();
                        }, 2000);
                    });
                  });
                  d.observe(o.body, { childList: !0, subtree: !1, attributes: !1 });
                }
              });
            var N = o.querySelector('script[src*="/js/unid.min.js"]');
            N
              ? ((b.client = N.getAttribute('data-client')),
                (b.correlation_id = N.getAttribute('data-correlation_id')),
                (b.conversation_id = N.getAttribute('data-conversation_id')),
                (b.vrequired = !!N.getAttribute('data-vrequired')))
              : (b.uiLog.qs_fail = 1),
              o.dispatchEvent(new CustomEvent('unid.ready')),
              (w.onload = function () {
                !(function (t) {
                  try {
                    var e = window.RequestFileSystem || window.webkitRequestFileSystem;
                    if (e)
                      e(
                        window.TEMPORARY,
                        100,
                        function () {
                          t();
                        },
                        function () {
                          (b.incognito = !0), t();
                        }
                      );
                    else {
                      if (!window.indexedDB) throw 1;
                      sessionStorage.setItem(_, _), sessionStorage.removeItem(_), t();
                    }
                  } catch (e) {
                    (b.incognito = !0), t();
                  }
                })(r);
              });
            function I (e) {
              if (e.origin === D) {
                var t = {};
                try {
                  t = JSON.parse(e.data);
                } catch (e) {
                  return;
                }
                var i = t.data,
                  n = t.action;
                if ('state' === n) {
                  if ((w.classList.add('unid_' + i), 'cleared' === i && u.unid.clearCB))
                    return u.unid.clearCB();
                  if ('done' === i) return (unid.done = !0), f();
                  if ('swid_nt' === i) return unid.clear(), (unid.reason = i), m(i);
                  if ('daa_optout' === i) return unid.clear(), (unid.reason = i), m(i);
                  if ('denied' === i || 'gated' === i) {
                    var a = l('UNID');
                    return (
                      a && ((b.uiLog.unid = a), (b.uiLog.reason = i)),
                      c('UNID'),
                      delete unid._data.unid,
                      delete unid.value,
                      (unid.new = !1),
                      (unid.silo = !1),
                      (unid.reason = i),
                      m(i)
                    );
                  }
                  if ('backoff' === i) return g(i);
                  if (/error_/.test(i)) return g('error', Number(i.replace('error_', '')));
                  'debug' === i &&
                    (function () {
                      var e = new (u.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
                      e.open('POST', u.location.protocol + '//unid.go.com/debug', !0),
                        e.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'),
                        e.send(
                          JSON.stringify({
                            ls: localStorage.getItem(_ + ':data'),
                            href: s.href,
                            h: s.hostname,
                            u: unid.value,
                            s: l('SWID'),
                            unid_cookie: l('UNID'),
                            debug: JSON.stringify(unid.getData()),
                          })
                        );
                    })();
                } else if ('store' === n)
                  (unid._data.lsData = i), (unid._data.lsData.version = unid.version), p(i);
                else if ('log' === n) console.log(i);
                else if ('reason' === n)
                  'new' === (unid.reason = i)
                    ? (unid.new = !0)
                    : 'silo' === i
                    ? (unid.silo = !0)
                    : 'sync' === i && ((unid.new = !1), (unid.silo = !1));
                else if ('unid' === n) {
                  if (((unid.received = !0), i)) {
                    for (
                      var d = s.host.split(':')[0].split('.'), o = '.' + d.pop(), r = 0;
                      r < d.length;
                      r++
                    )
                      (o = d.pop() + o),
                        d.length && (o = '.' + o),
                        c('UNID', i, o),
                        l('UNID') === i && (d = []);
                    c('UNID', i), w.classList.add('unid_allowed'), w.setAttribute('data-unid', i);
                  }
                  (unid.new = 'sync' !== unid.reason && i && i !== u.unid.value),
                    (u.unid.value = i),
                    u.unid._data && (u.unid._data.unid = u.unid.value);
                }
              }
            }
            u.addEventListener ? addEventListener('message', I, !1) : attachEvent('onmessage', I);
          }
        }.apply(this, arguments);
      } finally {
        if ($___old_8d255f15d305a082)
          ({}.constructor.defineProperty(window, 'localStorage', $___old_8d255f15d305a082));
      }
    })(window, navigator, document, window.location);
  })();
}
