{
  const $___stub_7b3e42788f2718a1 = {};
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
  })($___stub_7b3e42788f2718a1);
  (function () {
    (window.webpackJsonp = window.webpackJsonp || []).push([
      [3],
      {
        250: function (e, t, i) {
          var n = i(255);
          e.exports = function (e) {
            return n(2, e);
          };
        },
        255: function (e, t, i) {
          var n = i(106);
          e.exports = function (e, t) {
            var i;
            if ('function' != typeof t) throw new TypeError('Expected a function');
            return (
              (e = n(e)),
              function () {
                return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = void 0), i;
              }
            );
          };
        },
        258: function (e, t, i) {
          var n = i(256),
            r = i(67);
          e.exports = function (e, t, i) {
            var o = !0,
              s = !0;
            if ('function' != typeof e) throw new TypeError('Expected a function');
            return (
              r(i) &&
                ((o = 'leading' in i ? !!i.leading : o), (s = 'trailing' in i ? !!i.trailing : s)),
              n(e, t, { leading: o, maxWait: t, trailing: s })
            );
          };
        },
        263: function (e, t) {
          e.exports = function (e) {
            return null == e;
          };
        },
        299: function (e, t, i) {
          'use strict';
          var n = i(7),
            r = i(116)(6),
            o = 'findIndex',
            s = !0;
          o in [] &&
            Array(1)[o](function () {
              s = !1;
            }),
            n(n.P + n.F * s, 'Array', {
              findIndex: function (e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }),
            i(69)(o);
        },
        300: function (e, t, i) {
          'use strict';
          function n () {
            return (n =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var i = arguments[t];
                  for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                }
                return e;
              }).apply(this, arguments);
          }
          function r (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = t);
          }
          function o (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          var s,
            a =
              'function' != typeof Object.assign
                ? function (e) {
                    if (null == e)
                      throw new TypeError('Cannot convert undefined or null to object');
                    for (var t = Object(e), i = 1; i < arguments.length; i++) {
                      var n = arguments[i];
                      if (null != n) for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
                    }
                    return t;
                  }
                : Object.assign,
            u = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'],
            l = 'undefined' == typeof document ? { style: {} } : document.createElement('div'),
            c = Math.round,
            d = Math.abs,
            h = Date.now;
          function p (e, t) {
            for (var i, n, r = t[0].toUpperCase() + t.slice(1), o = 0; o < u.length; ) {
              if ((n = (i = u[o]) ? i + r : t) in e) return n;
              o++;
            }
          }
          s = 'undefined' == typeof window ? {} : window;
          var f = p(l.style, 'touchAction'),
            v = void 0 !== f;
          var m = (function () {
              if (!v) return !1;
              var e = {},
                t = s.CSS && s.CSS.supports;
              return (
                ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(
                  function (i) {
                    return (e[i] = !t || s.CSS.supports('touch-action', i));
                  }
                ),
                e
              );
            })(),
            w = 'ontouchstart' in s,
            g = void 0 !== p(s, 'PointerEvent'),
            y = w && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            b = ['x', 'y'],
            T = ['clientX', 'clientY'];
          function E (e, t, i) {
            var n;
            if (e)
              if (e.forEach) e.forEach(t, i);
              else if (void 0 !== e.length) for (n = 0; n < e.length; ) t.call(i, e[n], n, e), n++;
              else for (n in e) e.hasOwnProperty(n) && t.call(i, e[n], n, e);
          }
          function x (e, t) {
            return 'function' == typeof e ? e.apply((t && t[0]) || void 0, t) : e;
          }
          function O (e, t) {
            return e.indexOf(t) > -1;
          }
          var S = (function () {
            function e (e, t) {
              (this.manager = e), this.set(t);
            }
            var t = e.prototype;
            return (
              (t.set = function (e) {
                'compute' === e && (e = this.compute()),
                  v && this.manager.element.style && m[e] && (this.manager.element.style[f] = e),
                  (this.actions = e.toLowerCase().trim());
              }),
              (t.update = function () {
                this.set(this.manager.options.touchAction);
              }),
              (t.compute = function () {
                var e = [];
                return (
                  E(this.manager.recognizers, function (t) {
                    x(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
                  }),
                  (function (e) {
                    if (O(e, 'none')) return 'none';
                    var t = O(e, 'pan-x'),
                      i = O(e, 'pan-y');
                    return t && i
                      ? 'none'
                      : t || i
                      ? t
                        ? 'pan-x'
                        : 'pan-y'
                      : O(e, 'manipulation')
                      ? 'manipulation'
                      : 'auto';
                  })(e.join(' '))
                );
              }),
              (t.preventDefaults = function (e) {
                var t = e.srcEvent,
                  i = e.offsetDirection;
                if (this.manager.session.prevented) t.preventDefault();
                else {
                  var n = this.actions,
                    r = O(n, 'none') && !m.none,
                    o = O(n, 'pan-y') && !m['pan-y'],
                    s = O(n, 'pan-x') && !m['pan-x'];
                  if (r) {
                    var a = 1 === e.pointers.length,
                      u = e.distance < 2,
                      l = e.deltaTime < 250;
                    if (a && u && l) return;
                  }
                  if (!s || !o)
                    return r || (o && 6 & i) || (s && 24 & i) ? this.preventSrc(t) : void 0;
                }
              }),
              (t.preventSrc = function (e) {
                (this.manager.session.prevented = !0), e.preventDefault();
              }),
              e
            );
          })();
          function A (e, t) {
            for (; e; ) {
              if (e === t) return !0;
              e = e.parentNode;
            }
            return !1;
          }
          function C (e) {
            var t = e.length;
            if (1 === t) return { x: c(e[0].clientX), y: c(e[0].clientY) };
            for (var i = 0, n = 0, r = 0; r < t; ) (i += e[r].clientX), (n += e[r].clientY), r++;
            return { x: c(i / t), y: c(n / t) };
          }
          function N (e) {
            for (var t = [], i = 0; i < e.pointers.length; )
              (t[i] = { clientX: c(e.pointers[i].clientX), clientY: c(e.pointers[i].clientY) }),
                i++;
            return {
              timeStamp: h(),
              pointers: t,
              center: C(t),
              deltaX: e.deltaX,
              deltaY: e.deltaY,
            };
          }
          function P (e, t, i) {
            i || (i = b);
            var n = t[i[0]] - e[i[0]],
              r = t[i[1]] - e[i[1]];
            return Math.sqrt(n * n + r * r);
          }
          function k (e, t, i) {
            i || (i = b);
            var n = t[i[0]] - e[i[0]],
              r = t[i[1]] - e[i[1]];
            return (180 * Math.atan2(r, n)) / Math.PI;
          }
          function I (e, t) {
            return e === t ? 1 : d(e) >= d(t) ? (e < 0 ? 2 : 4) : t < 0 ? 8 : 16;
          }
          function _ (e, t, i) {
            return { x: t / e || 0, y: i / e || 0 };
          }
          function M (e, t) {
            var i = e.session,
              n = t.pointers,
              r = n.length;
            i.firstInput || (i.firstInput = N(t)),
              r > 1 && !i.firstMultiple
                ? (i.firstMultiple = N(t))
                : 1 === r && (i.firstMultiple = !1);
            var o = i.firstInput,
              s = i.firstMultiple,
              a = s ? s.center : o.center,
              u = (t.center = C(n));
            (t.timeStamp = h()),
              (t.deltaTime = t.timeStamp - o.timeStamp),
              (t.angle = k(a, u)),
              (t.distance = P(a, u)),
              (function (e, t) {
                var i = t.center,
                  n = e.offsetDelta || {},
                  r = e.prevDelta || {},
                  o = e.prevInput || {};
                (1 !== t.eventType && 4 !== o.eventType) ||
                  ((r = e.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }),
                  (n = e.offsetDelta = { x: i.x, y: i.y })),
                  (t.deltaX = r.x + (i.x - n.x)),
                  (t.deltaY = r.y + (i.y - n.y));
              })(i, t),
              (t.offsetDirection = I(t.deltaX, t.deltaY));
            var l,
              c,
              p = _(t.deltaTime, t.deltaX, t.deltaY);
            (t.overallVelocityX = p.x),
              (t.overallVelocityY = p.y),
              (t.overallVelocity = d(p.x) > d(p.y) ? p.x : p.y),
              (t.scale = s ? ((l = s.pointers), P((c = n)[0], c[1], T) / P(l[0], l[1], T)) : 1),
              (t.rotation = s
                ? (function (e, t) {
                    return k(t[1], t[0], T) + k(e[1], e[0], T);
                  })(s.pointers, n)
                : 0),
              (t.maxPointers = i.prevInput
                ? t.pointers.length > i.prevInput.maxPointers
                  ? t.pointers.length
                  : i.prevInput.maxPointers
                : t.pointers.length),
              (function (e, t) {
                var i,
                  n,
                  r,
                  o,
                  s = e.lastInterval || t,
                  a = t.timeStamp - s.timeStamp;
                if (8 !== t.eventType && (a > 25 || void 0 === s.velocity)) {
                  var u = t.deltaX - s.deltaX,
                    l = t.deltaY - s.deltaY,
                    c = _(a, u, l);
                  (n = c.x),
                    (r = c.y),
                    (i = d(c.x) > d(c.y) ? c.x : c.y),
                    (o = I(u, l)),
                    (e.lastInterval = t);
                } else (i = s.velocity), (n = s.velocityX), (r = s.velocityY), (o = s.direction);
                (t.velocity = i), (t.velocityX = n), (t.velocityY = r), (t.direction = o);
              })(i, t);
            var f = e.element;
            A(t.srcEvent.target, f) && (f = t.srcEvent.target), (t.target = f);
          }
          function V (e, t, i) {
            var n = i.pointers.length,
              r = i.changedPointers.length,
              o = 1 & t && n - r == 0,
              s = 12 & t && n - r == 0;
            (i.isFirst = !!o),
              (i.isFinal = !!s),
              o && (e.session = {}),
              (i.eventType = t),
              M(e, i),
              e.emit('hammer.input', i),
              e.recognize(i),
              (e.session.prevInput = i);
          }
          function F (e) {
            return e.trim().split(/\s+/g);
          }
          function D (e, t, i) {
            E(F(t), function (t) {
              e.addEventListener(t, i, !1);
            });
          }
          function z (e, t, i) {
            E(F(t), function (t) {
              e.removeEventListener(t, i, !1);
            });
          }
          function R (e) {
            var t = e.ownerDocument || e;
            return t.defaultView || t.parentWindow || window;
          }
          var L = (function () {
            function e (e, t) {
              var i = this;
              (this.manager = e),
                (this.callback = t),
                (this.element = e.element),
                (this.target = e.options.inputTarget),
                (this.domHandler = function (t) {
                  x(e.options.enable, [e]) && i.handler(t);
                }),
                this.init();
            }
            var t = e.prototype;
            return (
              (t.handler = function () {}),
              (t.init = function () {
                this.evEl && D(this.element, this.evEl, this.domHandler),
                  this.evTarget && D(this.target, this.evTarget, this.domHandler),
                  this.evWin && D(R(this.element), this.evWin, this.domHandler);
              }),
              (t.destroy = function () {
                this.evEl && z(this.element, this.evEl, this.domHandler),
                  this.evTarget && z(this.target, this.evTarget, this.domHandler),
                  this.evWin && z(R(this.element), this.evWin, this.domHandler);
              }),
              e
            );
          })();
          function W (e, t, i) {
            if (e.indexOf && !i) return e.indexOf(t);
            for (var n = 0; n < e.length; ) {
              if ((i && e[n][i] == t) || (!i && e[n] === t)) return n;
              n++;
            }
            return -1;
          }
          var j = {
              pointerdown: 1,
              pointermove: 2,
              pointerup: 4,
              pointercancel: 8,
              pointerout: 8,
            },
            B = { 2: 'touch', 3: 'pen', 4: 'mouse', 5: 'kinect' },
            q = 'pointerdown',
            X = 'pointermove pointerup pointercancel';
          s.MSPointerEvent &&
            !s.PointerEvent &&
            ((q = 'MSPointerDown'), (X = 'MSPointerMove MSPointerUp MSPointerCancel'));
          var Y = (function (e) {
            function t () {
              var i,
                n = t.prototype;
              return (
                (n.evEl = q),
                (n.evWin = X),
                ((i =
                  e.apply(this, arguments) || this).store = i.manager.session.pointerEvents = []),
                i
              );
            }
            return (
              r(t, e),
              (t.prototype.handler = function (e) {
                var t = this.store,
                  i = !1,
                  n = e.type.toLowerCase().replace('ms', ''),
                  r = j[n],
                  o = B[e.pointerType] || e.pointerType,
                  s = 'touch' === o,
                  a = W(t, e.pointerId, 'pointerId');
                1 & r && (0 === e.button || s)
                  ? a < 0 && (t.push(e), (a = t.length - 1))
                  : 12 & r && (i = !0),
                  a < 0 ||
                    ((t[a] = e),
                    this.callback(this.manager, r, {
                      pointers: t,
                      changedPointers: [e],
                      pointerType: o,
                      srcEvent: e,
                    }),
                    i && t.splice(a, 1));
              }),
              t
            );
          })(L);
          function U (e) {
            return Array.prototype.slice.call(e, 0);
          }
          function H (e, t, i) {
            for (var n = [], r = [], o = 0; o < e.length; ) {
              var s = t ? e[o][t] : e[o];
              W(r, s) < 0 && n.push(e[o]), (r[o] = s), o++;
            }
            return (
              i &&
                (n = t
                  ? n.sort(function (e, i) {
                      return e[t] > i[t];
                    })
                  : n.sort()),
              n
            );
          }
          var G = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 },
            Z = (function (e) {
              function t () {
                var i;
                return (
                  (t.prototype.evTarget = 'touchstart touchmove touchend touchcancel'),
                  ((i = e.apply(this, arguments) || this).targetIds = {}),
                  i
                );
              }
              return (
                r(t, e),
                (t.prototype.handler = function (e) {
                  var t = G[e.type],
                    i = $.call(this, e, t);
                  i &&
                    this.callback(this.manager, t, {
                      pointers: i[0],
                      changedPointers: i[1],
                      pointerType: 'touch',
                      srcEvent: e,
                    });
                }),
                t
              );
            })(L);
          function $ (e, t) {
            var i,
              n,
              r = U(e.touches),
              o = this.targetIds;
            if (3 & t && 1 === r.length) return (o[r[0].identifier] = !0), [r, r];
            var s = U(e.changedTouches),
              a = [],
              u = this.target;
            if (
              ((n = r.filter(function (e) {
                return A(e.target, u);
              })),
              1 === t)
            )
              for (i = 0; i < n.length; ) (o[n[i].identifier] = !0), i++;
            for (i = 0; i < s.length; )
              o[s[i].identifier] && a.push(s[i]), 12 & t && delete o[s[i].identifier], i++;
            return a.length ? [H(n.concat(a), 'identifier', !0), a] : void 0;
          }
          var Q = { mousedown: 1, mousemove: 2, mouseup: 4 },
            K = (function (e) {
              function t () {
                var i,
                  n = t.prototype;
                return (
                  (n.evEl = 'mousedown'),
                  (n.evWin = 'mousemove mouseup'),
                  ((i = e.apply(this, arguments) || this).pressed = !1),
                  i
                );
              }
              return (
                r(t, e),
                (t.prototype.handler = function (e) {
                  var t = Q[e.type];
                  1 & t && 0 === e.button && (this.pressed = !0),
                    2 & t && 1 !== e.which && (t = 4),
                    this.pressed &&
                      (4 & t && (this.pressed = !1),
                      this.callback(this.manager, t, {
                        pointers: [e],
                        changedPointers: [e],
                        pointerType: 'mouse',
                        srcEvent: e,
                      }));
                }),
                t
              );
            })(L);
          function J (e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
              var i = { x: t.clientX, y: t.clientY },
                n = this.lastTouches;
              this.lastTouches.push(i);
              setTimeout(function () {
                var e = n.indexOf(i);
                e > -1 && n.splice(e, 1);
              }, 2500);
            }
          }
          function ee (e, t) {
            1 & e
              ? ((this.primaryTouch = t.changedPointers[0].identifier), J.call(this, t))
              : 12 & e && J.call(this, t);
          }
          function te (e) {
            for (
              var t = e.srcEvent.clientX, i = e.srcEvent.clientY, n = 0;
              n < this.lastTouches.length;
              n++
            ) {
              var r = this.lastTouches[n],
                o = Math.abs(t - r.x),
                s = Math.abs(i - r.y);
              if (o <= 25 && s <= 25) return !0;
            }
            return !1;
          }
          var ie = (function () {
            return (function (e) {
              function t (t, i) {
                var n;
                return (
                  ((n = e.call(this, t, i) || this).handler = function (e, t, i) {
                    var r = 'touch' === i.pointerType,
                      s = 'mouse' === i.pointerType;
                    if (!(s && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                      if (r) ee.call(o(o(n)), t, i);
                      else if (s && te.call(o(o(n)), i)) return;
                      n.callback(e, t, i);
                    }
                  }),
                  (n.touch = new Z(n.manager, n.handler)),
                  (n.mouse = new K(n.manager, n.handler)),
                  (n.primaryTouch = null),
                  (n.lastTouches = []),
                  n
                );
              }
              return (
                r(t, e),
                (t.prototype.destroy = function () {
                  this.touch.destroy(), this.mouse.destroy();
                }),
                t
              );
            })(L);
          })();
          function ne (e, t, i) {
            return !!Array.isArray(e) && (E(e, i[t], i), !0);
          }
          var re = 1;
          function oe (e, t) {
            var i = t.manager;
            return i ? i.get(e) : e;
          }
          function se (e) {
            return 16 & e ? 'cancel' : 8 & e ? 'end' : 4 & e ? 'move' : 2 & e ? 'start' : '';
          }
          var ae = (function () {
              function e (e) {
                void 0 === e && (e = {}),
                  (this.options = n({ enable: !0 }, e)),
                  (this.id = re++),
                  (this.manager = null),
                  (this.state = 1),
                  (this.simultaneous = {}),
                  (this.requireFail = []);
              }
              var t = e.prototype;
              return (
                (t.set = function (e) {
                  return (
                    a(this.options, e), this.manager && this.manager.touchAction.update(), this
                  );
                }),
                (t.recognizeWith = function (e) {
                  if (ne(e, 'recognizeWith', this)) return this;
                  var t = this.simultaneous;
                  return t[(e = oe(e, this)).id] || ((t[e.id] = e), e.recognizeWith(this)), this;
                }),
                (t.dropRecognizeWith = function (e) {
                  return (
                    ne(e, 'dropRecognizeWith', this) ||
                      ((e = oe(e, this)), delete this.simultaneous[e.id]),
                    this
                  );
                }),
                (t.requireFailure = function (e) {
                  if (ne(e, 'requireFailure', this)) return this;
                  var t = this.requireFail;
                  return (
                    -1 === W(t, (e = oe(e, this))) && (t.push(e), e.requireFailure(this)), this
                  );
                }),
                (t.dropRequireFailure = function (e) {
                  if (ne(e, 'dropRequireFailure', this)) return this;
                  e = oe(e, this);
                  var t = W(this.requireFail, e);
                  return t > -1 && this.requireFail.splice(t, 1), this;
                }),
                (t.hasRequireFailures = function () {
                  return this.requireFail.length > 0;
                }),
                (t.canRecognizeWith = function (e) {
                  return !!this.simultaneous[e.id];
                }),
                (t.emit = function (e) {
                  var t = this,
                    i = this.state;
                  function n (i) {
                    t.manager.emit(i, e);
                  }
                  i < 8 && n(t.options.event + se(i)),
                    n(t.options.event),
                    e.additionalEvent && n(e.additionalEvent),
                    i >= 8 && n(t.options.event + se(i));
                }),
                (t.tryEmit = function (e) {
                  if (this.canEmit()) return this.emit(e);
                  this.state = 32;
                }),
                (t.canEmit = function () {
                  for (var e = 0; e < this.requireFail.length; ) {
                    if (!(33 & this.requireFail[e].state)) return !1;
                    e++;
                  }
                  return !0;
                }),
                (t.recognize = function (e) {
                  var t = a({}, e);
                  if (!x(this.options.enable, [this, t]))
                    return this.reset(), void (this.state = 32);
                  56 & this.state && (this.state = 1),
                    (this.state = this.process(t)),
                    30 & this.state && this.tryEmit(t);
                }),
                (t.process = function (e) {}),
                (t.getTouchAction = function () {}),
                (t.reset = function () {}),
                e
              );
            })(),
            ue = {
              domEvents: !1,
              touchAction: 'compute',
              enable: !0,
              inputTarget: null,
              inputClass: null,
              preset: [],
              cssProps: {
                userSelect: 'none',
                touchSelect: 'none',
                touchCallout: 'none',
                contentZooming: 'none',
                userDrag: 'none',
                tapHighlightColor: 'rgba(0,0,0,0)',
              },
            };
          function le (e, t) {
            var i,
              n = e.element;
            n.style &&
              (E(e.options.cssProps, function (r, o) {
                (i = p(n.style, o)),
                  t
                    ? ((e.oldCssProps[i] = n.style[i]), (n.style[i] = r))
                    : (n.style[i] = e.oldCssProps[i] || '');
              }),
              t || (e.oldCssProps = {}));
          }
          var ce = (function () {
              function e (e, t) {
                var i,
                  n = this;
                (this.options = a({}, ue, t || {})),
                  (this.options.inputTarget = this.options.inputTarget || e),
                  (this.handlers = {}),
                  (this.session = {}),
                  (this.recognizers = []),
                  (this.oldCssProps = {}),
                  (this.element = e),
                  (this.input = new ((i = this).options.inputClass ||
                    (g ? Y : y ? Z : w ? ie : K))(i, V)),
                  (this.touchAction = new S(this, this.options.touchAction)),
                  le(this, !0),
                  E(
                    this.options.recognizers,
                    function (e) {
                      var t = n.add(new e[0](e[1]));
                      e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
                    },
                    this
                  );
              }
              var t = e.prototype;
              return (
                (t.set = function (e) {
                  return (
                    a(this.options, e),
                    e.touchAction && this.touchAction.update(),
                    e.inputTarget &&
                      (this.input.destroy(),
                      (this.input.target = e.inputTarget),
                      this.input.init()),
                    this
                  );
                }),
                (t.stop = function (e) {
                  this.session.stopped = e ? 2 : 1;
                }),
                (t.recognize = function (e) {
                  var t = this.session;
                  if (!t.stopped) {
                    var i;
                    this.touchAction.preventDefaults(e);
                    var n = this.recognizers,
                      r = t.curRecognizer;
                    (!r || (r && 8 & r.state)) && ((t.curRecognizer = null), (r = null));
                    for (var o = 0; o < n.length; )
                      (i = n[o]),
                        2 === t.stopped || (r && i !== r && !i.canRecognizeWith(r))
                          ? i.reset()
                          : i.recognize(e),
                        !r && 14 & i.state && ((t.curRecognizer = i), (r = i)),
                        o++;
                  }
                }),
                (t.get = function (e) {
                  if (e instanceof ae) return e;
                  for (var t = this.recognizers, i = 0; i < t.length; i++)
                    if (t[i].options.event === e) return t[i];
                  return null;
                }),
                (t.add = function (e) {
                  if (ne(e, 'add', this)) return this;
                  var t = this.get(e.options.event);
                  return (
                    t && this.remove(t),
                    this.recognizers.push(e),
                    (e.manager = this),
                    this.touchAction.update(),
                    e
                  );
                }),
                (t.remove = function (e) {
                  if (ne(e, 'remove', this)) return this;
                  var t = this.get(e);
                  if (e) {
                    var i = this.recognizers,
                      n = W(i, t);
                    -1 !== n && (i.splice(n, 1), this.touchAction.update());
                  }
                  return this;
                }),
                (t.on = function (e, t) {
                  if (void 0 === e || void 0 === t) return this;
                  var i = this.handlers;
                  return (
                    E(F(e), function (e) {
                      (i[e] = i[e] || []), i[e].push(t);
                    }),
                    this
                  );
                }),
                (t.off = function (e, t) {
                  if (void 0 === e) return this;
                  var i = this.handlers;
                  return (
                    E(F(e), function (e) {
                      t ? i[e] && i[e].splice(W(i[e], t), 1) : delete i[e];
                    }),
                    this
                  );
                }),
                (t.emit = function (e, t) {
                  this.options.domEvents &&
                    (function (e, t) {
                      var i = document.createEvent('Event');
                      i.initEvent(e, !0, !0), (i.gesture = t), t.target.dispatchEvent(i);
                    })(e, t);
                  var i = this.handlers[e] && this.handlers[e].slice();
                  if (i && i.length) {
                    (t.type = e),
                      (t.preventDefault = function () {
                        t.srcEvent.preventDefault();
                      });
                    for (var n = 0; n < i.length; ) i[n](t), n++;
                  }
                }),
                (t.destroy = function () {
                  this.element && le(this, !1),
                    (this.handlers = {}),
                    (this.session = {}),
                    this.input.destroy(),
                    (this.element = null);
                }),
                e
              );
            })(),
            de = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 },
            he = (function (e) {
              function t () {
                var i,
                  n = t.prototype;
                return (
                  (n.evTarget = 'touchstart'),
                  (n.evWin = 'touchstart touchmove touchend touchcancel'),
                  ((i = e.apply(this, arguments) || this).started = !1),
                  i
                );
              }
              return (
                r(t, e),
                (t.prototype.handler = function (e) {
                  var t = de[e.type];
                  if ((1 === t && (this.started = !0), this.started)) {
                    var i = pe.call(this, e, t);
                    12 & t && i[0].length - i[1].length == 0 && (this.started = !1),
                      this.callback(this.manager, t, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: 'touch',
                        srcEvent: e,
                      });
                  }
                }),
                t
              );
            })(L);
          function pe (e, t) {
            var i = U(e.touches),
              n = U(e.changedTouches);
            return 12 & t && (i = H(i.concat(n), 'identifier', !0)), [i, n];
          }
          var fe = (function (e) {
              function t (t) {
                return void 0 === t && (t = {}), e.call(this, n({ pointers: 1 }, t)) || this;
              }
              r(t, e);
              var i = t.prototype;
              return (
                (i.attrTest = function (e) {
                  var t = this.options.pointers;
                  return 0 === t || e.pointers.length === t;
                }),
                (i.process = function (e) {
                  var t = this.state,
                    i = e.eventType,
                    n = 6 & t,
                    r = this.attrTest(e);
                  return n && (8 & i || !r)
                    ? 16 | t
                    : n || r
                    ? 4 & i
                      ? 8 | t
                      : 2 & t
                      ? 4 | t
                      : 2
                    : 32;
                }),
                t
              );
            })(ae),
            ve = (function (e) {
              function t (t) {
                var i;
                return (
                  void 0 === t && (t = {}),
                  ((i =
                    e.call(
                      this,
                      n(
                        {
                          event: 'tap',
                          pointers: 1,
                          taps: 1,
                          interval: 300,
                          time: 250,
                          threshold: 9,
                          posThreshold: 10,
                        },
                        t
                      )
                    ) || this).pTime = !1),
                  (i.pCenter = !1),
                  (i._timer = null),
                  (i._input = null),
                  (i.count = 0),
                  i
                );
              }
              r(t, e);
              var i = t.prototype;
              return (
                (i.getTouchAction = function () {
                  return ['manipulation'];
                }),
                (i.process = function (e) {
                  var t = this,
                    i = this.options,
                    n = e.pointers.length === i.pointers,
                    r = e.distance < i.threshold,
                    o = e.deltaTime < i.time;
                  if ((this.reset(), 1 & e.eventType && 0 === this.count))
                    return this.failTimeout();
                  if (r && o && n) {
                    if (4 !== e.eventType) return this.failTimeout();
                    var s = !this.pTime || e.timeStamp - this.pTime < i.interval,
                      a = !this.pCenter || P(this.pCenter, e.center) < i.posThreshold;
                    if (
                      ((this.pTime = e.timeStamp),
                      (this.pCenter = e.center),
                      a && s ? (this.count += 1) : (this.count = 1),
                      (this._input = e),
                      0 === this.count % i.taps)
                    )
                      return this.hasRequireFailures()
                        ? ((this._timer = setTimeout(function () {
                            (t.state = 8), t.tryEmit();
                          }, i.interval)),
                          2)
                        : 8;
                  }
                  return 32;
                }),
                (i.failTimeout = function () {
                  var e = this;
                  return (
                    (this._timer = setTimeout(function () {
                      e.state = 32;
                    }, this.options.interval)),
                    32
                  );
                }),
                (i.reset = function () {
                  clearTimeout(this._timer);
                }),
                (i.emit = function () {
                  8 === this.state &&
                    ((this._input.tapCount = this.count),
                    this.manager.emit(this.options.event, this._input));
                }),
                t
              );
            })(ae);
          function me (e) {
            return 16 === e ? 'down' : 8 === e ? 'up' : 2 === e ? 'left' : 4 === e ? 'right' : '';
          }
          var we = (function (e) {
              function t (t) {
                var i;
                return (
                  void 0 === t && (t = {}),
                  ((i =
                    e.call(
                      this,
                      n({ event: 'pan', threshold: 10, pointers: 1, direction: 30 }, t)
                    ) || this).pX = null),
                  (i.pY = null),
                  i
                );
              }
              r(t, e);
              var i = t.prototype;
              return (
                (i.getTouchAction = function () {
                  var e = this.options.direction,
                    t = [];
                  return 6 & e && t.push('pan-y'), 24 & e && t.push('pan-x'), t;
                }),
                (i.directionTest = function (e) {
                  var t = this.options,
                    i = !0,
                    n = e.distance,
                    r = e.direction,
                    o = e.deltaX,
                    s = e.deltaY;
                  return (
                    r & t.direction ||
                      (6 & t.direction
                        ? ((r = 0 === o ? 1 : o < 0 ? 2 : 4),
                          (i = o !== this.pX),
                          (n = Math.abs(e.deltaX)))
                        : ((r = 0 === s ? 1 : s < 0 ? 8 : 16),
                          (i = s !== this.pY),
                          (n = Math.abs(e.deltaY)))),
                    (e.direction = r),
                    i && n > t.threshold && r & t.direction
                  );
                }),
                (i.attrTest = function (e) {
                  return (
                    fe.prototype.attrTest.call(this, e) &&
                    (2 & this.state || (!(2 & this.state) && this.directionTest(e)))
                  );
                }),
                (i.emit = function (t) {
                  (this.pX = t.deltaX), (this.pY = t.deltaY);
                  var i = me(t.direction);
                  i && (t.additionalEvent = this.options.event + i),
                    e.prototype.emit.call(this, t);
                }),
                t
              );
            })(fe),
            ge = (function (e) {
              function t (t) {
                return (
                  void 0 === t && (t = {}),
                  e.call(
                    this,
                    n(
                      { event: 'swipe', threshold: 10, velocity: 0.3, direction: 30, pointers: 1 },
                      t
                    )
                  ) || this
                );
              }
              r(t, e);
              var i = t.prototype;
              return (
                (i.getTouchAction = function () {
                  return we.prototype.getTouchAction.call(this);
                }),
                (i.attrTest = function (t) {
                  var i,
                    n = this.options.direction;
                  return (
                    30 & n
                      ? (i = t.overallVelocity)
                      : 6 & n
                      ? (i = t.overallVelocityX)
                      : 24 & n && (i = t.overallVelocityY),
                    e.prototype.attrTest.call(this, t) &&
                      n & t.offsetDirection &&
                      t.distance > this.options.threshold &&
                      t.maxPointers === this.options.pointers &&
                      d(i) > this.options.velocity &&
                      4 & t.eventType
                  );
                }),
                (i.emit = function (e) {
                  var t = me(e.offsetDirection);
                  t && this.manager.emit(this.options.event + t, e),
                    this.manager.emit(this.options.event, e);
                }),
                t
              );
            })(fe),
            ye = (function (e) {
              function t (t) {
                return (
                  void 0 === t && (t = {}),
                  e.call(this, n({ event: 'pinch', threshold: 0, pointers: 2 }, t)) || this
                );
              }
              r(t, e);
              var i = t.prototype;
              return (
                (i.getTouchAction = function () {
                  return ['none'];
                }),
                (i.attrTest = function (t) {
                  return (
                    e.prototype.attrTest.call(this, t) &&
                    (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
                  );
                }),
                (i.emit = function (t) {
                  if (1 !== t.scale) {
                    var i = t.scale < 1 ? 'in' : 'out';
                    t.additionalEvent = this.options.event + i;
                  }
                  e.prototype.emit.call(this, t);
                }),
                t
              );
            })(fe),
            be = (function (e) {
              function t (t) {
                return (
                  void 0 === t && (t = {}),
                  e.call(this, n({ event: 'rotate', threshold: 0, pointers: 2 }, t)) || this
                );
              }
              r(t, e);
              var i = t.prototype;
              return (
                (i.getTouchAction = function () {
                  return ['none'];
                }),
                (i.attrTest = function (t) {
                  return (
                    e.prototype.attrTest.call(this, t) &&
                    (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
                  );
                }),
                t
              );
            })(fe),
            Te = (function (e) {
              function t (t) {
                var i;
                return (
                  void 0 === t && (t = {}),
                  ((i =
                    e.call(this, n({ event: 'press', pointers: 1, time: 251, threshold: 9 }, t)) ||
                    this)._timer = null),
                  (i._input = null),
                  i
                );
              }
              r(t, e);
              var i = t.prototype;
              return (
                (i.getTouchAction = function () {
                  return ['auto'];
                }),
                (i.process = function (e) {
                  var t = this,
                    i = this.options,
                    n = e.pointers.length === i.pointers,
                    r = e.distance < i.threshold,
                    o = e.deltaTime > i.time;
                  if (((this._input = e), !r || !n || (12 & e.eventType && !o))) this.reset();
                  else if (1 & e.eventType)
                    this.reset(),
                      (this._timer = setTimeout(function () {
                        (t.state = 8), t.tryEmit();
                      }, i.time));
                  else if (4 & e.eventType) return 8;
                  return 32;
                }),
                (i.reset = function () {
                  clearTimeout(this._timer);
                }),
                (i.emit = function (e) {
                  8 === this.state &&
                    (e && 4 & e.eventType
                      ? this.manager.emit(this.options.event + 'up', e)
                      : ((this._input.timeStamp = h()),
                        this.manager.emit(this.options.event, this._input)));
                }),
                t
              );
            })(ae);
          function Ee (e, t, i) {
            var n = 'DEPRECATED METHOD: ' + t + '\n' + i + ' AT \n';
            return function () {
              var t = new Error('get-stack-trace'),
                i =
                  t && t.stack
                    ? t.stack
                        .replace(/^[^\(]+?[\n$]/gm, '')
                        .replace(/^\s+at\s+/gm, '')
                        .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
                    : 'Unknown Stack Trace',
                r = window.console && (window.console.warn || window.console.log);
              return r && r.call(window.console, n, i), e.apply(this, arguments);
            };
          }
          var xe = Ee(
              function (e, t, i) {
                for (var n = Object.keys(t), r = 0; r < n.length; )
                  (!i || (i && void 0 === e[n[r]])) && (e[n[r]] = t[n[r]]), r++;
                return e;
              },
              'extend',
              'Use `assign`.'
            ),
            Oe = Ee(
              function (e, t) {
                return xe(e, t, !0);
              },
              'merge',
              'Use `assign`.'
            );
          function Se (e, t, i) {
            var n,
              r = t.prototype;
            ((n = e.prototype = Object.create(r)).constructor = e), (n._super = r), i && a(n, i);
          }
          function Ae (e, t) {
            return function () {
              return e.apply(t, arguments);
            };
          }
          var Ce = (function () {
            var e = function (e, t) {
              return (
                void 0 === t && (t = {}),
                new ce(
                  e,
                  n(
                    {
                      recognizers: [
                        [be, { enable: !1 }],
                        [ye, { enable: !1 }, ['rotate']],
                        [ge, { direction: 6 }],
                        [we, { direction: 6 }, ['swipe']],
                        [ve],
                        [ve, { event: 'doubletap', taps: 2 }, ['tap']],
                        [Te],
                      ],
                    },
                    t
                  )
                )
              );
            };
            return (
              (e.VERSION = '2.0.15'),
              (e.DIRECTION_ALL = 30),
              (e.DIRECTION_DOWN = 16),
              (e.DIRECTION_LEFT = 2),
              (e.DIRECTION_RIGHT = 4),
              (e.DIRECTION_UP = 8),
              (e.DIRECTION_HORIZONTAL = 6),
              (e.DIRECTION_VERTICAL = 24),
              (e.DIRECTION_NONE = 1),
              (e.DIRECTION_DOWN = 16),
              (e.INPUT_START = 1),
              (e.INPUT_MOVE = 2),
              (e.INPUT_END = 4),
              (e.INPUT_CANCEL = 8),
              (e.STATE_POSSIBLE = 1),
              (e.STATE_BEGAN = 2),
              (e.STATE_CHANGED = 4),
              (e.STATE_ENDED = 8),
              (e.STATE_RECOGNIZED = 8),
              (e.STATE_CANCELLED = 16),
              (e.STATE_FAILED = 32),
              (e.Manager = ce),
              (e.Input = L),
              (e.TouchAction = S),
              (e.TouchInput = Z),
              (e.MouseInput = K),
              (e.PointerEventInput = Y),
              (e.TouchMouseInput = ie),
              (e.SingleTouchInput = he),
              (e.Recognizer = ae),
              (e.AttrRecognizer = fe),
              (e.Tap = ve),
              (e.Pan = we),
              (e.Swipe = ge),
              (e.Pinch = ye),
              (e.Rotate = be),
              (e.Press = Te),
              (e.on = D),
              (e.off = z),
              (e.each = E),
              (e.merge = Oe),
              (e.extend = xe),
              (e.bindFn = Ae),
              (e.assign = a),
              (e.inherit = Se),
              (e.bindFn = Ae),
              (e.prefixed = p),
              (e.toArray = U),
              (e.inArray = W),
              (e.uniqueArray = H),
              (e.splitStr = F),
              (e.boolOrFn = x),
              (e.hasParent = A),
              (e.addEventListeners = D),
              (e.removeEventListeners = z),
              (e.defaults = ue),
              e
            );
          })();
          t.a = Ce;
        },
        301: function (e, t, i) {
          'use strict';
          i(302)('link', function (e) {
            return function (t) {
              return e(this, 'a', 'href', t);
            };
          });
        },
        302: function (e, t, i) {
          var n = i(7),
            r = i(8),
            o = i(27),
            s = /"/g,
            a = function (e, t, i, n) {
              var r = String(o(e)),
                a = '<' + t;
              return (
                '' !== i && (a += ' ' + i + '="' + String(n).replace(s, '&quot;') + '"'),
                a + '>' + r + '</' + t + '>'
              );
            };
          e.exports = function (e, t) {
            var i = {};
            (i[e] = t(a)),
              n(
                n.P +
                  n.F *
                    r(function () {
                      var t = ''[e]('"');
                      return t !== t.toLowerCase() || t.split('"').length > 3;
                    }),
                'String',
                i
              );
          };
        },
        303: function (e, t, i) {
          const $___old_1da1d85a2f1d2248 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'platform'
          );
          try {
            if ($___old_1da1d85a2f1d2248)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'platform',
                $___stub_7b3e42788f2718a1.platform
              ));
            return function () {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var n,
                r = i(2),
                o = (n = r) && 'object' == typeof n && 'default' in n ? n.default : n,
                s = new (i(304))(),
                a = s.getBrowser(),
                u = (s.getCPU(), s.getDevice()),
                l = s.getEngine(),
                c = s.getOS(),
                d = s.getUA(),
                h = function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'none';
                  return e || t;
                },
                p = function () {
                  return (
                    !('undefined' == typeof window || (!window.navigator && !navigator)) &&
                    (window.navigator || navigator)
                  );
                },
                f = function (e) {
                  const $___old_df40ad178c911aef = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'platform'
                  );
                  try {
                    if ($___old_df40ad178c911aef)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'platform',
                        $___stub_7b3e42788f2718a1.platform
                      ));
                    return function () {
                      var t = p();
                      return (
                        t &&
                        t.platform &&
                        (-1 !== t.platform.indexOf(e) ||
                          ('MacIntel' === t.platform && t.maxTouchPoints > 1 && !window.MSStream))
                      );
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_df40ad178c911aef)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'platform',
                        $___old_df40ad178c911aef
                      ));
                  }
                };
              function v (e) {
                return (v =
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
                      })(e);
              }
              function m (e, t) {
                for (var i = 0; i < t.length; i++) {
                  var n = t[i];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
                }
              }
              function w (e, t, i) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = i),
                  e
                );
              }
              function g () {
                return (g =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                    }
                    return e;
                  }).apply(this, arguments);
              }
              function y (e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t &&
                    (n = n.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    i.push.apply(i, n);
                }
                return i;
              }
              function b (e) {
                return (b = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              function T (e, t) {
                return (T =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function E (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              var x = 'mobile',
                O = 'tablet',
                S = 'smarttv',
                A = 'console',
                C = 'wearable',
                N = void 0,
                P = 'Chrome',
                k = 'Firefox',
                I = 'Opera',
                _ = 'Yandex',
                M = 'Safari',
                V = 'Internet Explorer',
                F = 'Edge',
                D = 'Chromium',
                z = 'IE',
                R = 'Mobile Safari',
                L = 'MIUI Browser',
                W = 'iOS',
                j = 'Android',
                B = 'Windows Phone',
                q = 'Windows',
                X = 'Mac OS',
                Y = {
                  isMobile: !1,
                  isTablet: !1,
                  isBrowser: !1,
                  isSmartTV: !1,
                  isConsole: !1,
                  isWearable: !1,
                },
                U = function (e, t, i, n) {
                  return (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var i = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? y(i, !0).forEach(function (t) {
                            w(e, t, i[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                        : y(i).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                          });
                    }
                    return e;
                  })({}, e, {
                    vendor: h(t.vendor),
                    model: h(t.model),
                    os: h(i.name),
                    osVersion: h(i.version),
                    ua: h(n),
                  });
                },
                H = (function (e) {
                  switch (e) {
                    case x:
                      return { isMobile: !0 };
                    case O:
                      return { isTablet: !0 };
                    case S:
                      return { isSmartTV: !0 };
                    case A:
                      return { isConsole: !0 };
                    case C:
                      return { isWearable: !0 };
                    case N:
                      return { isBrowser: !0 };
                    default:
                      return Y;
                  }
                })(u.type);
              var G,
                Z = function () {
                  return 'string' == typeof d && -1 !== d.indexOf('Edg/');
                },
                $ = function () {
                  return a.name === F;
                },
                Q = function () {
                  return f('iPad');
                },
                K = u.type === S,
                J = u.type === A,
                ee = u.type === C,
                te = a.name === R || Q(),
                ie = a.name === D,
                ne =
                  (function () {
                    switch (u.type) {
                      case x:
                      case O:
                        return !0;
                      default:
                        return !1;
                    }
                  })() || Q(),
                re = u.type === x,
                oe = u.type === O || Q(),
                se = u.type === N,
                ae = c.name === j,
                ue = c.name === B,
                le = c.name === W || Q(),
                ce = a.name === P,
                de = a.name === k,
                he = a.name === M || a.name === R,
                pe = a.name === I,
                fe = a.name === V || a.name === z,
                ve = h(c.version),
                me = h(c.name),
                we = h(a.version),
                ge = h(a.major),
                ye = h(a.name),
                be = h(u.vendor),
                Te = h(u.model),
                Ee = h(l.name),
                xe = h(l.version),
                Oe = h(d),
                Se = $() || Z(),
                Ae = a.name === _,
                Ce = h(u.type, 'browser'),
                Ne =
                  (G = p()) &&
                  (/iPad|iPhone|iPod/.test(G.platform) ||
                    ('MacIntel' === G.platform && G.maxTouchPoints > 1)) &&
                  !window.MSStream,
                Pe = Q(),
                ke = f('iPhone'),
                Ie = f('iPod'),
                _e = (function () {
                  const $___old_f96252c77b69e350 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  );
                  try {
                    if ($___old_f96252c77b69e350)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_7b3e42788f2718a1.userAgent
                      ));
                    return function () {
                      var e = p(),
                        t = e && e.userAgent.toLowerCase();
                      return 'string' == typeof t && /electron/.test(t);
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_f96252c77b69e350)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_f96252c77b69e350
                      ));
                  }
                })(),
                Me = Z(),
                Ve = $() && !Z(),
                Fe = c.name === q,
                De = c.name === X,
                ze = a.name === L;
              (t.AndroidView = function (e) {
                var t = e.renderWithFragment,
                  i = e.children,
                  n = e.viewClassName,
                  s = e.style;
                return ae
                  ? t
                    ? o.createElement(r.Fragment, null, i)
                    : o.createElement('div', { className: n, style: s }, i)
                  : null;
              }),
                (t.BrowserView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return se
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.ConsoleView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return J
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.CustomView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return e.condition
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.IEView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return fe
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.IOSView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return le
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.MobileOnlyView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return re
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.MobileView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return ne
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.SmartTVView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return K
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.TabletView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return oe
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.WearableView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return ee
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.WinPhoneView = function (e) {
                  var t = e.renderWithFragment,
                    i = e.children,
                    n = e.viewClassName,
                    s = e.style;
                  return ue
                    ? t
                      ? o.createElement(r.Fragment, null, i)
                      : o.createElement('div', { className: n, style: s }, i)
                    : null;
                }),
                (t.browserName = ye),
                (t.browserVersion = ge),
                (t.deviceDetect = function () {
                  var e = H.isBrowser,
                    t = H.isMobile,
                    i = H.isTablet,
                    n = H.isSmartTV,
                    r = H.isConsole,
                    o = H.isWearable;
                  return e
                    ? (function (e, t, i, n, r) {
                        return {
                          isBrowser: e,
                          browserMajorVersion: h(t.major),
                          browserFullVersion: h(t.version),
                          browserName: h(t.name),
                          engineName: h(i.name),
                          engineVersion: h(i.version),
                          osName: h(n.name),
                          osVersion: h(n.version),
                          userAgent: h(r),
                        };
                      })(e, a, l, c, d)
                    : n
                    ? (function (e, t, i, n) {
                        return {
                          isSmartTV: e,
                          engineName: h(t.name),
                          engineVersion: h(t.version),
                          osName: h(i.name),
                          osVersion: h(i.version),
                          userAgent: h(n),
                        };
                      })(n, l, c, d)
                    : r
                    ? (function (e, t, i, n) {
                        return {
                          isConsole: e,
                          engineName: h(t.name),
                          engineVersion: h(t.version),
                          osName: h(i.name),
                          osVersion: h(i.version),
                          userAgent: h(n),
                        };
                      })(r, l, c, d)
                    : t || i
                    ? U(H, u, c, d)
                    : o
                    ? (function (e, t, i, n) {
                        return {
                          isWearable: e,
                          engineName: h(t.name),
                          engineVersion: h(t.version),
                          osName: h(i.name),
                          osVersion: h(i.version),
                          userAgent: h(n),
                        };
                      })(o, l, c, d)
                    : void 0;
                }),
                (t.deviceType = Ce),
                (t.engineName = Ee),
                (t.engineVersion = xe),
                (t.fullBrowserVersion = we),
                (t.getUA = Oe),
                (t.isAndroid = ae),
                (t.isBrowser = se),
                (t.isChrome = ce),
                (t.isChromium = ie),
                (t.isConsole = J),
                (t.isEdge = Se),
                (t.isEdgeChromium = Me),
                (t.isElectron = _e),
                (t.isFirefox = de),
                (t.isIE = fe),
                (t.isIOS = le),
                (t.isIOS13 = Ne),
                (t.isIPad13 = Pe),
                (t.isIPhone13 = ke),
                (t.isIPod13 = Ie),
                (t.isLegacyEdge = Ve),
                (t.isMIUI = ze),
                (t.isMacOs = De),
                (t.isMobile = ne),
                (t.isMobileOnly = re),
                (t.isMobileSafari = te),
                (t.isOpera = pe),
                (t.isSafari = he),
                (t.isSmartTV = K),
                (t.isTablet = oe),
                (t.isWearable = ee),
                (t.isWinPhone = ue),
                (t.isWindows = Fe),
                (t.isYandex = Ae),
                (t.mobileModel = Te),
                (t.mobileVendor = be),
                (t.osName = me),
                (t.osVersion = ve),
                (t.withOrientationChange = function (e) {
                  return (function (t) {
                    function i (e) {
                      var t, n, r;
                      return (
                        (function (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        })(this, i),
                        (n = this),
                        ((t =
                          !(r = b(i).call(this, e)) ||
                          ('object' != typeof r && 'function' != typeof r)
                            ? E(n)
                            : r).isEventListenerAdded = !1),
                        (t.handleOrientationChange = t.handleOrientationChange.bind(E(t))),
                        (t.onOrientationChange = t.onOrientationChange.bind(E(t))),
                        (t.onPageLoad = t.onPageLoad.bind(E(t))),
                        (t.state = { isLandscape: !1, isPortrait: !1 }),
                        t
                      );
                    }
                    var n, r, s;
                    return (
                      (function (e, t) {
                        if ('function' != typeof t && null !== t)
                          throw new TypeError(
                            'Super expression must either be null or a function'
                          );
                        (e.prototype = Object.create(t && t.prototype, {
                          constructor: { value: e, writable: !0, configurable: !0 },
                        })),
                          t && T(e, t);
                      })(i, t),
                      (n = i),
                      (r = [
                        {
                          key: 'handleOrientationChange',
                          value: function () {
                            this.isEventListenerAdded || (this.isEventListenerAdded = !0);
                            var e = window.innerWidth > window.innerHeight ? 90 : 0;
                            this.setState({ isPortrait: 0 === e, isLandscape: 90 === e });
                          },
                        },
                        {
                          key: 'onOrientationChange',
                          value: function () {
                            this.handleOrientationChange();
                          },
                        },
                        {
                          key: 'onPageLoad',
                          value: function () {
                            this.handleOrientationChange();
                          },
                        },
                        {
                          key: 'componentDidMount',
                          value: function () {
                            void 0 !== ('undefined' == typeof window ? 'undefined' : v(window)) &&
                              ne &&
                              (this.isEventListenerAdded
                                ? window.removeEventListener('load', this.onPageLoad, !1)
                                : (this.handleOrientationChange(),
                                  window.addEventListener('load', this.onPageLoad, !1)),
                              window.addEventListener('resize', this.onOrientationChange, !1));
                          },
                        },
                        {
                          key: 'componentWillUnmount',
                          value: function () {
                            window.removeEventListener('resize', this.onOrientationChange, !1);
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            return o.createElement(
                              e,
                              g({}, this.props, {
                                isLandscape: this.state.isLandscape,
                                isPortrait: this.state.isPortrait,
                              })
                            );
                          },
                        },
                      ]) && m(n.prototype, r),
                      s && m(n, s),
                      i
                    );
                  })(o.Component);
                });
            }.apply(this, arguments);
          } finally {
            if ($___old_1da1d85a2f1d2248)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'platform',
                $___old_1da1d85a2f1d2248
              ));
          }
        },
        304: function (e, t, i) {
          var n;
          !(function (r, o) {
            'use strict';
            var s = 'model',
              a = 'name',
              u = 'type',
              l = 'vendor',
              c = 'version',
              d = 'mobile',
              h = 'tablet',
              p = 'smarttv',
              f = {
                extend: function (e, t) {
                  var i = {};
                  for (var n in e)
                    t[n] && t[n].length % 2 == 0 ? (i[n] = t[n].concat(e[n])) : (i[n] = e[n]);
                  return i;
                },
                has: function (e, t) {
                  return 'string' == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase());
                },
                lowerize: function (e) {
                  return e.toLowerCase();
                },
                major: function (e) {
                  return 'string' == typeof e ? e.replace(/[^\d\.]/g, '').split('.')[0] : void 0;
                },
                trim: function (e) {
                  return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                },
              },
              v = {
                rgx: function (e, t) {
                  for (var i, n, r, o, s, a, u = 0; u < t.length && !s; ) {
                    var l = t[u],
                      c = t[u + 1];
                    for (i = n = 0; i < l.length && !s; )
                      if ((s = l[i++].exec(e)))
                        for (r = 0; r < c.length; r++)
                          (a = s[++n]),
                            'object' == typeof (o = c[r]) && o.length > 0
                              ? 2 == o.length
                                ? 'function' == typeof o[1]
                                  ? (this[o[0]] = o[1].call(this, a))
                                  : (this[o[0]] = o[1])
                                : 3 == o.length
                                ? 'function' != typeof o[1] || (o[1].exec && o[1].test)
                                  ? (this[o[0]] = a ? a.replace(o[1], o[2]) : void 0)
                                  : (this[o[0]] = a ? o[1].call(this, a, o[2]) : void 0)
                                : 4 == o.length &&
                                  (this[o[0]] = a
                                    ? o[3].call(this, a.replace(o[1], o[2]))
                                    : void 0)
                              : (this[o] = a || void 0);
                    u += 2;
                  }
                },
                str: function (e, t) {
                  for (var i in t)
                    if ('object' == typeof t[i] && t[i].length > 0) {
                      for (var n = 0; n < t[i].length; n++)
                        if (f.has(t[i][n], e)) return '?' === i ? void 0 : i;
                    } else if (f.has(t[i], e)) return '?' === i ? void 0 : i;
                  return e;
                },
              },
              m = {
                browser: {
                  oldsafari: {
                    version: {
                      '1.0': '/8',
                      1.2: '/1',
                      1.3: '/3',
                      '2.0': '/412',
                      '2.0.2': '/416',
                      '2.0.3': '/417',
                      '2.0.4': '/419',
                      '?': '/',
                    },
                  },
                },
                device: {
                  amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
                  sprint: {
                    model: { 'Evo Shift 4G': '7373KT' },
                    vendor: { HTC: 'APA', Sprint: 'Sprint' },
                  },
                },
                os: {
                  windows: {
                    version: {
                      ME: '4.90',
                      'NT 3.11': 'NT3.51',
                      'NT 4.0': 'NT4.0',
                      2000: 'NT 5.0',
                      XP: ['NT 5.1', 'NT 5.2'],
                      Vista: 'NT 6.0',
                      7: 'NT 6.1',
                      8: 'NT 6.2',
                      8.1: 'NT 6.3',
                      10: ['NT 6.4', 'NT 10.0'],
                      RT: 'ARM',
                    },
                  },
                },
              },
              w = {
                browser: [
                  [
                    /(opera\smini)\/([\w\.-]+)/i,
                    /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                    /(opera).+version\/([\w\.]+)/i,
                    /(opera)[\/\s]+([\w\.]+)/i,
                  ],
                  [a, c],
                  [/(opios)[\/\s]+([\w\.]+)/i],
                  [[a, 'Opera Mini'], c],
                  [/\s(opr)\/([\w\.]+)/i],
                  [[a, 'Opera'], c],
                  [
                    /(kindle)\/([\w\.]+)/i,
                    /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                    /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                    /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
                    /(?:ms|\()(ie)\s([\w\.]+)/i,
                    /(rekonq)\/([\w\.]*)/i,
                    /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
                  ],
                  [a, c],
                  [/(konqueror)\/([\w\.]+)/i],
                  [[a, 'Konqueror'], c],
                  [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                  [[a, 'IE'], c],
                  [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                  [[a, 'Edge'], c],
                  [/(yabrowser)\/([\w\.]+)/i],
                  [[a, 'Yandex'], c],
                  [/(Avast)\/([\w\.]+)/i],
                  [[a, 'Avast Secure Browser'], c],
                  [/(AVG)\/([\w\.]+)/i],
                  [[a, 'AVG Secure Browser'], c],
                  [/(puffin)\/([\w\.]+)/i],
                  [[a, 'Puffin'], c],
                  [/(focus)\/([\w\.]+)/i],
                  [[a, 'Firefox Focus'], c],
                  [/(opt)\/([\w\.]+)/i],
                  [[a, 'Opera Touch'], c],
                  [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                  [[a, 'UCBrowser'], c],
                  [/(comodo_dragon)\/([\w\.]+)/i],
                  [[a, /_/g, ' '], c],
                  [/(windowswechat qbcore)\/([\w\.]+)/i],
                  [[a, 'WeChat(Win) Desktop'], c],
                  [/(micromessenger)\/([\w\.]+)/i],
                  [[a, 'WeChat'], c],
                  [/(brave)\/([\w\.]+)/i],
                  [[a, 'Brave'], c],
                  [/(qqbrowserlite)\/([\w\.]+)/i],
                  [a, c],
                  [/(QQ)\/([\d\.]+)/i],
                  [a, c],
                  [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                  [a, c],
                  [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                  [a, c],
                  [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                  [a, c],
                  [/(MetaSr)[\/\s]?([\w\.]+)/i],
                  [a],
                  [/(LBBROWSER)/i],
                  [a],
                  [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                  [c, [a, 'MIUI Browser']],
                  [/;fbav\/([\w\.]+);/i],
                  [c, [a, 'Facebook']],
                  [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                  [a, c],
                  [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                  [c, [a, 'Chrome Headless']],
                  [/\swv\).+(chrome)\/([\w\.]+)/i],
                  [[a, /(.+)/, '$1 WebView'], c],
                  [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                  [[a, /(.+(?:g|us))(.+)/, '$1 $2'], c],
                  [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                  [c, [a, 'Android Browser']],
                  [/(sailfishbrowser)\/([\w\.]+)/i],
                  [[a, 'Sailfish Browser'], c],
                  [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                  [a, c],
                  [/(dolfin)\/([\w\.]+)/i],
                  [[a, 'Dolphin'], c],
                  [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                  [[a, '360 Browser']],
                  [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                  [[a, 'Chrome'], c],
                  [/(coast)\/([\w\.]+)/i],
                  [[a, 'Opera Coast'], c],
                  [/fxios\/([\w\.-]+)/i],
                  [c, [a, 'Firefox']],
                  [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                  [c, [a, 'Mobile Safari']],
                  [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                  [c, a],
                  [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                  [[a, 'GSA'], c],
                  [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                  [a, [c, v.str, m.browser.oldsafari.version]],
                  [/(webkit|khtml)\/([\w\.]+)/i],
                  [a, c],
                  [/(navigator|netscape)\/([\w\.-]+)/i],
                  [[a, 'Netscape'], c],
                  [
                    /(swiftfox)/i,
                    /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                    /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                    /(links)\s\(([\w\.]+)/i,
                    /(gobrowser)\/?([\w\.]*)/i,
                    /(ice\s?browser)\/v?([\w\._]+)/i,
                    /(mosaic)[\/\s]([\w\.]+)/i,
                  ],
                  [a, c],
                ],
                cpu: [
                  [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                  [['architecture', 'amd64']],
                  [/(ia32(?=;))/i],
                  [['architecture', f.lowerize]],
                  [/((?:i[346]|x)86)[;\)]/i],
                  [['architecture', 'ia32']],
                  [/windows\s(ce|mobile);\sppc;/i],
                  [['architecture', 'arm']],
                  [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                  [['architecture', /ower/, '', f.lowerize]],
                  [/(sun4\w)[;\)]/i],
                  [['architecture', 'sparc']],
                  [
                    /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
                  ],
                  [['architecture', f.lowerize]],
                ],
                device: [
                  [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                  [s, l, [u, h]],
                  [/applecoremedia\/[\w\.]+ \((ipad)/],
                  [s, [l, 'Apple'], [u, h]],
                  [/(apple\s{0,1}tv)/i],
                  [
                    [s, 'Apple TV'],
                    [l, 'Apple'],
                    [u, p],
                  ],
                  [
                    /(archos)\s(gamepad2?)/i,
                    /(hp).+(touchpad)/i,
                    /(hp).+(tablet)/i,
                    /(kindle)\/([\w\.]+)/i,
                    /\s(nook)[\w\s]+build\/(\w+)/i,
                    /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                  ],
                  [l, s, [u, h]],
                  [/(kf[A-z]+)\sbuild\/.+silk\//i],
                  [s, [l, 'Amazon'], [u, h]],
                  [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                  [
                    [s, v.str, m.device.amazon.model],
                    [l, 'Amazon'],
                    [u, d],
                  ],
                  [/android.+aft([bms])\sbuild/i],
                  [s, [l, 'Amazon'], [u, p]],
                  [/\((ip[honed|\s\w*]+);.+(apple)/i],
                  [s, l, [u, d]],
                  [/\((ip[honed|\s\w*]+);/i],
                  [s, [l, 'Apple'], [u, d]],
                  [
                    /(blackberry)[\s-]?(\w+)/i,
                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                    /(hp)\s([\w\s]+\w)/i,
                    /(asus)-?(\w+)/i,
                  ],
                  [l, s, [u, d]],
                  [/\(bb10;\s(\w+)/i],
                  [s, [l, 'BlackBerry'], [u, d]],
                  [
                    /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i,
                  ],
                  [s, [l, 'Asus'], [u, h]],
                  [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                  [
                    [l, 'Sony'],
                    [s, 'Xperia Tablet'],
                    [u, h],
                  ],
                  [
                    /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                  ],
                  [s, [l, 'Sony'], [u, d]],
                  [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                  [l, s, [u, 'console']],
                  [/android.+;\s(shield)\sbuild/i],
                  [s, [l, 'Nvidia'], [u, 'console']],
                  [/(playstation\s[34portablevi]+)/i],
                  [s, [l, 'Sony'], [u, 'console']],
                  [/(sprint\s(\w+))/i],
                  [
                    [l, v.str, m.device.sprint.vendor],
                    [s, v.str, m.device.sprint.model],
                    [u, d],
                  ],
                  [
                    /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,
                    /(zte)-(\w*)/i,
                    /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
                  ],
                  [l, [s, /_/g, ' '], [u, d]],
                  [/(nexus\s9)/i],
                  [s, [l, 'HTC'], [u, h]],
                  [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29|ele-l29)/i],
                  [s, [l, 'Huawei'], [u, d]],
                  [/android.+(bah2?-a?[lw]\d{2})/i],
                  [s, [l, 'Huawei'], [u, h]],
                  [/(microsoft);\s(lumia[\s\w]+)/i],
                  [l, s, [u, d]],
                  [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                  [s, [l, 'Microsoft'], [u, 'console']],
                  [/(kin\.[onetw]{3})/i],
                  [
                    [s, /\./g, ' '],
                    [l, 'Microsoft'],
                    [u, d],
                  ],
                  [
                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                    /mot[\s-]?(\w*)/i,
                    /(XT\d{3,4}) build\//i,
                    /(nexus\s6)/i,
                  ],
                  [s, [l, 'Motorola'], [u, d]],
                  [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                  [s, [l, 'Motorola'], [u, h]],
                  [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                  [
                    [l, f.trim],
                    [s, f.trim],
                    [u, p],
                  ],
                  [/hbbtv.+maple;(\d+)/i],
                  [
                    [s, /^/, 'SmartTV'],
                    [l, 'Samsung'],
                    [u, p],
                  ],
                  [/\(dtv[\);].+(aquos)/i],
                  [s, [l, 'Sharp'], [u, p]],
                  [
                    /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                    /((SM-T\w+))/i,
                  ],
                  [[l, 'Samsung'], s, [u, h]],
                  [/smart-tv.+(samsung)/i],
                  [l, [u, p], s],
                  [
                    /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                    /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                    /sec-((sgh\w+))/i,
                  ],
                  [[l, 'Samsung'], s, [u, d]],
                  [/sie-(\w*)/i],
                  [s, [l, 'Siemens'], [u, d]],
                  [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                  [[l, 'Nokia'], s, [u, d]],
                  [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                  [s, [l, 'Acer'], [u, h]],
                  [/android.+([vl]k\-?\d{3})\s+build/i],
                  [s, [l, 'LG'], [u, h]],
                  [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                  [[l, 'LG'], s, [u, h]],
                  [/(lg) netcast\.tv/i],
                  [l, s, [u, p]],
                  [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                  [s, [l, 'LG'], [u, d]],
                  [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                  [l, s, [u, h]],
                  [/android.+(ideatab[a-z0-9\-\s]+)/i],
                  [s, [l, 'Lenovo'], [u, h]],
                  [/(lenovo)[_\s-]?([\w-]+)/i],
                  [l, s, [u, d]],
                  [/linux;.+((jolla));/i],
                  [l, s, [u, d]],
                  [/((pebble))app\/[\d\.]+\s/i],
                  [l, s, [u, 'wearable']],
                  [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                  [l, s, [u, d]],
                  [/crkey/i],
                  [
                    [s, 'Chromecast'],
                    [l, 'Google'],
                    [u, p],
                  ],
                  [/android.+;\s(glass)\s\d/i],
                  [s, [l, 'Google'], [u, 'wearable']],
                  [/android.+;\s(pixel c)[\s)]/i],
                  [s, [l, 'Google'], [u, h]],
                  [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                  [s, [l, 'Google'], [u, d]],
                  [
                    /android.+;\s(\w+)\s+build\/hm\1/i,
                    /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                    /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                    /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]?[\w\s]+))\s+build/i,
                  ],
                  [
                    [s, /_/g, ' '],
                    [l, 'Xiaomi'],
                    [u, d],
                  ],
                  [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]?[\w\s]+))\s+build/i],
                  [
                    [s, /_/g, ' '],
                    [l, 'Xiaomi'],
                    [u, h],
                  ],
                  [/android.+;\s(m[1-5]\snote)\sbuild/i],
                  [s, [l, 'Meizu'], [u, d]],
                  [/(mz)-([\w-]{2,})/i],
                  [[l, 'Meizu'], s, [u, d]],
                  [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                  [s, [l, 'OnePlus'], [u, d]],
                  [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                  [s, [l, 'RCA'], [u, h]],
                  [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                  [s, [l, 'Dell'], [u, h]],
                  [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                  [s, [l, 'Verizon'], [u, h]],
                  [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                  [[l, 'Barnes & Noble'], s, [u, h]],
                  [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                  [s, [l, 'NuVision'], [u, h]],
                  [/android.+;\s(k88)\sbuild/i],
                  [s, [l, 'ZTE'], [u, h]],
                  [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                  [s, [l, 'Swiss'], [u, d]],
                  [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                  [s, [l, 'Swiss'], [u, h]],
                  [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                  [s, [l, 'Zeki'], [u, h]],
                  [
                    /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                    /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
                  ],
                  [[l, 'Dragon Touch'], s, [u, h]],
                  [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                  [s, [l, 'Insignia'], [u, h]],
                  [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                  [s, [l, 'NextBook'], [u, h]],
                  [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                  [[l, 'Voice'], s, [u, d]],
                  [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                  [[l, 'LvTel'], s, [u, d]],
                  [/android.+;\s(PH-1)\s/i],
                  [s, [l, 'Essential'], [u, d]],
                  [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                  [s, [l, 'Envizen'], [u, h]],
                  [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                  [l, s, [u, h]],
                  [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                  [s, [l, 'MachSpeed'], [u, h]],
                  [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                  [l, s, [u, h]],
                  [/android.+[;\/]\s*TU_(1491)\s+build/i],
                  [s, [l, 'Rotor'], [u, h]],
                  [/android.+(KS(.+))\s+build/i],
                  [s, [l, 'Amazon'], [u, h]],
                  [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                  [l, s, [u, h]],
                  [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                  [[u, f.lowerize], l, s],
                  [/[\s\/\(](smart-?tv)[;\)]/i],
                  [[u, p]],
                  [/(android[\w\.\s\-]{0,9});.+build/i],
                  [s, [l, 'Generic']],
                ],
                engine: [
                  [/windows.+\sedge\/([\w\.]+)/i],
                  [c, [a, 'EdgeHTML']],
                  [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                  [c, [a, 'Blink']],
                  [
                    /(presto)\/([\w\.]+)/i,
                    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                    /(icab)[\/\s]([23]\.[\d\.]+)/i,
                  ],
                  [a, c],
                  [/rv\:([\w\.]{1,9}).+(gecko)/i],
                  [c, a],
                ],
                os: [
                  [/microsoft\s(windows)\s(vista|xp)/i],
                  [a, c],
                  [
                    /(windows)\snt\s6\.2;\s(arm)/i,
                    /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                    /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
                  ],
                  [a, [c, v.str, m.os.windows.version]],
                  [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                  [
                    [a, 'Windows'],
                    [c, v.str, m.os.windows.version],
                  ],
                  [/\((bb)(10);/i],
                  [[a, 'BlackBerry'], c],
                  [
                    /(blackberry)\w*\/?([\w\.]*)/i,
                    /(tizen|kaios)[\/\s]([\w\.]+)/i,
                    /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
                  ],
                  [a, c],
                  [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                  [[a, 'Symbian'], c],
                  [/\((series40);/i],
                  [a],
                  [/mozilla.+\(mobile;.+gecko.+firefox/i],
                  [[a, 'Firefox OS'], c],
                  [
                    /(nintendo|playstation)\s([wids34portablevu]+)/i,
                    /(mint)[\/\s\(]?(\w*)/i,
                    /(mageia|vectorlinux)[;\s]/i,
                    /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                    /(hurd|linux)\s?([\w\.]*)/i,
                    /(gnu)\s?([\w\.]*)/i,
                  ],
                  [a, c],
                  [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                  [[a, 'Chromium OS'], c],
                  [/(sunos)\s?([\w\.\d]*)/i],
                  [[a, 'Solaris'], c],
                  [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                  [a, c],
                  [/(haiku)\s(\w+)/i],
                  [a, c],
                  [
                    /cfnetwork\/.+darwin/i,
                    /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
                  ],
                  [
                    [c, /_/g, '.'],
                    [a, 'iOS'],
                  ],
                  [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                  [
                    [a, 'Mac OS'],
                    [c, /_/g, '.'],
                  ],
                  [
                    /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                    /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                    /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                    /(unix)\s?([\w\.]*)/i,
                  ],
                  [a, c],
                ],
              },
              g = function (e, t) {
                const $___old_3654a81d2d9b8ffe = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_3654a81d2d9b8ffe)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_7b3e42788f2718a1.userAgent
                    ));
                  return function () {
                    if (('object' == typeof e && ((t = e), (e = void 0)), !(this instanceof g)))
                      return new g(e, t).getResult();
                    var i =
                        e ||
                        (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ''),
                      n = t ? f.extend(w, t) : w;
                    return (
                      (this.getBrowser = function () {
                        var e = { name: void 0, version: void 0 };
                        return v.rgx.call(e, i, n.browser), (e.major = f.major(e.version)), e;
                      }),
                      (this.getCPU = function () {
                        var e = { architecture: void 0 };
                        return v.rgx.call(e, i, n.cpu), e;
                      }),
                      (this.getDevice = function () {
                        var e = { vendor: void 0, model: void 0, type: void 0 };
                        return v.rgx.call(e, i, n.device), e;
                      }),
                      (this.getEngine = function () {
                        var e = { name: void 0, version: void 0 };
                        return v.rgx.call(e, i, n.engine), e;
                      }),
                      (this.getOS = function () {
                        var e = { name: void 0, version: void 0 };
                        return v.rgx.call(e, i, n.os), e;
                      }),
                      (this.getResult = function () {
                        return {
                          ua: this.getUA(),
                          browser: this.getBrowser(),
                          engine: this.getEngine(),
                          os: this.getOS(),
                          device: this.getDevice(),
                          cpu: this.getCPU(),
                        };
                      }),
                      (this.getUA = function () {
                        return i;
                      }),
                      (this.setUA = function (e) {
                        return (i = e), this;
                      }),
                      this
                    );
                  }.apply(this, arguments);
                } finally {
                  if ($___old_3654a81d2d9b8ffe)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_3654a81d2d9b8ffe
                    ));
                }
              };
            (g.VERSION = '0.7.22'),
              (g.BROWSER = { NAME: a, MAJOR: 'major', VERSION: c }),
              (g.CPU = { ARCHITECTURE: 'architecture' }),
              (g.DEVICE = {
                MODEL: s,
                VENDOR: l,
                TYPE: u,
                CONSOLE: 'console',
                MOBILE: d,
                SMARTTV: p,
                TABLET: h,
                WEARABLE: 'wearable',
                EMBEDDED: 'embedded',
              }),
              (g.ENGINE = { NAME: a, VERSION: c }),
              (g.OS = { NAME: a, VERSION: c }),
              void 0 !== t
                ? (void 0 !== e && e.exports && (t = e.exports = g), (t.UAParser = g))
                : void 0 ===
                    (n = function () {
                      return g;
                    }.call(t, i, t, e)) || (e.exports = n);
            var y = r && (r.jQuery || r.Zepto);
            if (y && !y.ua) {
              var b = new g();
              (y.ua = b.getResult()),
                (y.ua.get = function () {
                  return b.getUA();
                }),
                (y.ua.set = function (e) {
                  b.setUA(e);
                  var t = b.getResult();
                  for (var i in t) y.ua[i] = t[i];
                });
            }
          })('object' == typeof window ? window : this);
        },
      },
    ]);
  })();
}
