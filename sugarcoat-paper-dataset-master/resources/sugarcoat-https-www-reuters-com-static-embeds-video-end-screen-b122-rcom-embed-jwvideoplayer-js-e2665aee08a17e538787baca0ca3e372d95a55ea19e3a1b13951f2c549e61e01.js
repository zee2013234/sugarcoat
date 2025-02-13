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
      [2],
      {
        248: function (e, t, n) {
          'use strict';
          n(38), n(60), n(37), n(36), n(247);
          var o = n(2),
            r = n.n(o),
            a = n(243),
            i = n.n(a),
            l = n(244),
            c = n.n(l),
            s = n(64),
            u = n.n(s);
          function _ () {
            return (_ =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }).apply(this, arguments);
          }
          n(198);
          var p = {
              'text-label': 'TextLabel__text-label___3oCVw',
              'small-all-caps': 'TextLabel__small-all-caps___2Z2RG',
              'small-all-caps-spaced-out': 'TextLabel__small-all-caps-spaced-out___3O9H4',
              'small-all-caps-no-spacing': 'TextLabel__small-all-caps-no-spacing___3Ic1_',
              medium: 'TextLabel__medium___t9PWg',
              bold: 'TextLabel__bold___nuCHW',
              regular: 'TextLabel__regular___2X0ym',
              light: 'TextLabel__light___1WILL',
              'light-all-caps': 'TextLabel__light-all-caps___13-vF',
              'light-all-caps-no-spacing': 'TextLabel__light-all-caps-no-spacing___pcfh5',
              serif: 'TextLabel__serif___3lOpX',
              'serif-semi-bold': 'TextLabel__serif-semi-bold___2-G6G',
              'gray-to-black': 'TextLabel__gray-to-black___PGjdw',
              'gray-to-orange': 'TextLabel__gray-to-orange___3Bor1',
              'black-to-orange': 'TextLabel__black-to-orange___23uc0',
              'white-to-orange': 'TextLabel__white-to-orange___2nwYu',
              orange: 'TextLabel__orange___bulJg',
              'blue-to-orange': 'TextLabel__blue-to-orange___1SFN2',
              gray: 'TextLabel__gray___1V4fk',
              black: 'TextLabel__black___2FN-Z',
              white: 'TextLabel__white___32MyF',
              blue: 'TextLabel__blue___3HUIK',
            },
            f = {
              GRAY: 'gray',
              WHITE: 'white',
              BLACK: 'black',
              ORANGE: 'orange',
              BLUE: 'blue',
              GRAY_TO_BLACK: 'gray-to-black',
              GRAY_TO_ORANGE: 'gray-to-orange',
              WHITE_TO_ORANGE: 'white-to-orange',
              BLACK_TO_ORANGE: 'black-to-orange',
              BLUE_TO_ORANGE: 'blue-to-orange',
            },
            d = {
              LIGHT: 'light',
              LIGHT_ALL_CAPS: 'light-all-caps',
              LIGHT_ALL_CAPS_NO_SPACING: 'light-all-caps-no-spacing',
              SMALL_ALL_CAPS: 'small-all-caps',
              SMALL_ALL_CAPS_NO_SPACING: 'small-all-caps-no-spacing',
              SMALL_ALL_CAPS_SPACED_OUT: 'small-all-caps-spaced-out',
              REGULAR: 'regular',
              MEDIUM: 'medium',
              BOLD: 'bold',
              SERIF: 'serif',
              SERIF_SEMI_BOLD: 'serif-semi-bold',
            },
            y = Object.values(f),
            m = Object.values(d);
          function h (e) {
            var t = e.className,
              n = e.style,
              o = e.text,
              a = e.font,
              i = e.color,
              l = e.tag,
              s = e.href,
              f = e.handleClick,
              d = y.indexOf(i) < 0,
              m = !d && i,
              h = c()(p['text-label'], p[m], p[a], t),
              b = Object.assign({}, d && { color: i }, n),
              g = s ? 'a' : l,
              v = u()(e, ['text', 'color', 'font', 'tag', 'handleClick']);
            return r.a.createElement(g, _({}, v, { className: h, style: b, onClick: f }), o);
          }
          (h.Color = f),
            (h.Font = d),
            (h.propTypes = {
              className: i.a.string,
              style: i.a.object,
              text: i.a.oneOfType([i.a.string, i.a.node, i.a.array]),
              color: i.a.string,
              font: i.a.oneOf(m),
              tag: i.a.string,
              href: i.a.string,
              handleClick: i.a.func,
            }),
            (h.defaultProps = {
              color: f.GRAY,
              font: d.SMALL_ALL_CAPS,
              tag: 'p',
              handleClick: function () {},
            });
          var b = h;
          n.d(t, 'a', function () {
            return b;
          });
        },
        264: function (e, t, n) {
          'use strict';
          n(61), n(103), n(62), n(104), n(59), n(38), n(107), n(60), n(37), n(36), n(63), n(113);
          var o = n(250),
            r = n.n(o),
            a = n(258),
            i = n.n(a),
            l = n(263),
            c = n.n(l),
            s = n(303);
          function u (e) {
            return (
              (function (e) {
                if (Array.isArray(e)) return _(e);
              })(e) ||
              (function (e) {
                if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                  return Array.from(e);
              })(e) ||
              (function (e, t) {
                if (!e) return;
                if ('string' == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                'Object' === n && e.constructor && (n = e.constructor.name);
                if ('Map' === n || 'Set' === n) return Array.from(e);
                if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                  return _(e, t);
              })(e) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()
            );
          }
          function _ (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
          }
          t.a = function (e) {
            var t,
              n,
              o,
              a,
              l,
              _ = {},
              p = [25, 50, 75, 90, 100],
              f = [10, 30],
              d =
                ((a = new Map()),
                (l = function (e) {
                  return a.has(e) || a.set(e, { completion_sec: 0 }), a.get(e);
                }),
                {
                  startSession: function () {
                    Date.now();
                  },
                  recordQuartile: function (e, t) {
                    var n = l(e),
                      o = Math.round((e.duration * t) / 100);
                    n.completion_sec = Math.max(n.completion_sec, o);
                  },
                  getCompletionSec: function (e) {
                    return l(e).completion_sec;
                  },
                  getAllCompletionSec: function () {
                    return u(a.values()).reduce(function (e, t) {
                      return (e += t.completion_sec);
                    }, 0);
                  },
                }),
              y = function (t, n) {
                var o = Object.assign({ action: t }, _, n);
                e(o);
              },
              m = i()(
                function (e) {
                  var t = Math.round(e);
                  f.forEach(function (e, o) {
                    t >= e && n[o]();
                  });
                },
                1000,
                { leading: !0, trailing: !1 }
              ),
              h = i()(
                function (e) {
                  var n = Math.ceil(100 * e);
                  p.forEach(function (e, o) {
                    n >= e && t[o]();
                  });
                },
                1000,
                { leading: !0, trailing: !1 }
              ),
              b = y.bind(null, 'video_player.session.started', {
                nonInteraction: 1,
                videoSessionStarted: 1,
              }),
              g = r()(function () {
                y('video_player.session.finished', {
                  video_player_video_completion_sec: d.getAllCompletionSec(),
                  nonInteraction: 0,
                  videoSessionFinished: 1,
                });
              }),
              v = y.bind(null, 'video_player.resume', { videoResume: 1 }),
              w = y.bind(null, 'video_player.pause', { nonInteraction: 0, videoPause: 1 }),
              S = y.bind(null, 'video_player.mute', { nonInteraction: 0, videoMute: 1 }),
              T = y.bind(null, 'video_player.unmute', { videoUnmute: 1 }),
              E = y.bind(null, 'video_player.fullscreen', { videoFullscreen: 1 }),
              k = y.bind(null, 'video_player.collapse', { videoCollapse: 1 }),
              C = r()(function (e) {
                e && y('video_player.story.auto.play', { nonInteraction: 0, videoAutoPlay: 1 });
              }),
              P = r()(function (e) {
                y('video_player.story.error', {
                  video_player_error_code: e,
                  nonInteraction: 0,
                  videoStoryError: 1,
                });
              }),
              O =
                (y.bind(null, 'video_player.story.auto.play.not.allowed', {
                  nonInteraction: 0,
                  videoAutoPlayNotAllowed: 1,
                }),
                y.bind(null, 'video_player.story.manual.play', {
                  nonInteraction: 0,
                  videoManualPlay: 1,
                })),
              x = y.bind(null, 'video_player.story.seek', { nonInteraction: 0, videoSeek: 1 }),
              j = y.bind(null, 'video_player.story.cc.on', { nonInteraction: 0, videoCCOn: 1 }),
              A = y.bind(null, 'video_player.story.cc.off', { nonInteraction: 0, videoCCOff: 1 }),
              N = y.bind(null, 'video_player.story.started', {
                nonInteraction: 0,
                videoStoryStart: 1,
              }),
              R = y.bind(null, 'video_player.story.next.click', {
                nonInteraction: 0,
                videoNextUpClick: 1,
              }),
              I = y.bind(null, 'video_player.ad.skip', {
                nonInteraction: 0,
                videoPrerollAdSkip: 1,
              }),
              M = y.bind(null, 'video_player.session.pre.ad.started', {
                nonInteraction: 0,
                videoBeforePreRoll: 1,
              }),
              L = y.bind(null, 'video_player.ad.started', {
                nonInteraction: 0,
                videoPrerollStart: 1,
              }),
              D = y.bind(null, 'video_player.ad.finished', {
                nonInteraction: 0,
                videoPrerollEnd: 1,
              }),
              B = y.bind(null, 'video_player.ad.viewable', {
                video_player_ad_viewable_state: 1,
                nonInteraction: 0,
                videoPrerollAdViewable: 1,
              });
            return {
              updateStory: function (e, a) {
                o = e;
                var i = e.ad,
                  l = e.id,
                  u = e.title,
                  m = e.duration,
                  h = e.analytics,
                  b = s.isMobile ? 'Mobile' : 'Desktop',
                  g = h && h.platform ? h.platform : b,
                  v = h ? h.location : void 0,
                  w = h ? h.context : void 0,
                  S = h ? h.category : void 0,
                  T = h ? h.source : void 0,
                  E = i ? i.custom_params.videoId : l;
                !E && h && (E = h.id);
                var k = [u, a, w, v, S, T, m, l].find(function (e) {
                  return !c()(e);
                });
                (_ = Object.assign({
                  category: 'video',
                  label: k,
                  video_player_video_asset_id: E,
                  video_player_video_title: u,
                  video_player_video_order: a,
                  video_player_video_length: m,
                  video_player_video_label_map: k,
                  video_player_video_location: v,
                  video_player_video_context: w,
                  video_player_video_category: S,
                  video_player_video_source: T,
                  platform: g,
                })),
                  (t = p.map(function (t) {
                    return r()(function () {
                      d.recordQuartile(e, t);
                      var n = d.getCompletionSec(e);
                      y('video_player.story.quartile', {
                        video_player_video_completion_pct: t,
                        video_player_video_completion_sec: n,
                        nonInteraction: 0,
                        videoQuartile: 1,
                      });
                    });
                  })),
                  (n = f.map(function (t) {
                    return r()(function () {
                      d.recordQuartile(e, t);
                      d.getCompletionSec(e);
                      y('video_player.story.seconds.completed', {
                        video_player_video_completion_sec: t,
                        nonInteraction: 0,
                        videoSecondsCompleted: 1,
                      });
                    });
                  }));
              },
              startSession: d.startSession,
              enterStory: function () {
                Object.assign(_, { video_player_video_type: 'STORY' });
              },
              enterAd: function () {
                Object.assign(_, { video_player_video_type: 'AD' });
              },
              trackAdSkip: I,
              trackBeforePrerollStart: M,
              trackPrerollStart: L,
              trackPrerollEnd: D,
              trackAdViewable: B,
              trackAdBlock: function (e) {
                setTimeout(function () {
                  y('video_player.ad.block.detected', {
                    video_player_ad_block_detected: e,
                    nonInteraction: 0,
                    videoPrerollAdBlockDetected: 1,
                  });
                }, 1000);
              },
              trackStoryStart: N,
              trackStoryEnd: function () {
                y('video_player.story.finished', {
                  video_player_video_completion_pct: 100,
                  video_player_video_completion_sec: d.getCompletionSec(o),
                  nonInteraction: 0,
                  videoStoryEnd: 1,
                });
              },
              trackStoryAutoplay: C,
              trackStorySecComplete: m,
              trackStoryQuartile: h,
              trackStoryBuffering: function (e) {
                y('video_player.story.buffer', {
                  video_player_buffer_state: e || 'loading',
                  nonInteraction: 0,
                  videoBuffer: 1,
                });
              },
              trackStoryError: P,
              trackPlayerLoaded: b,
              trackPlayerFinished: g,
              trackPlay: O,
              trackResume: v,
              trackPause: w,
              trackSeek: x,
              trackMute: S,
              trackUnmute: T,
              trackCCOn: j,
              trackCCOff: A,
              trackNextUpVideoClick: R,
              trackFullscreen: E,
              trackStateChange: function (e) {
                y('video_player.state.change', {
                  video_player_state_position: e,
                  nonInteraction: 0,
                  videoStateChange: 1,
                });
              },
              trackCollapse: k,
            };
          };
        },
        265: function (e, t, n) {
          'use strict';
          n(105), n(59), n(60), n(37), n(36), n(65), n(38);
          var o = n(2),
            r = n.n(o),
            a = n(243),
            i = n.n(a),
            l = (n(244), n(64)),
            c = n.n(l),
            s = n(248);
          function u (e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, o);
            }
            return n;
          }
          function _ (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? u(Object(n), !0).forEach(function (t) {
                    p(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : u(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
            }
            return e;
          }
          function p (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function f () {
            return (f =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }).apply(this, arguments);
          }
          function d (e) {
            var t = e.seconds,
              n = (function (e, t) {
                var n = parseInt(e, 10),
                  o = Math.floor(n / 3600),
                  r = Math.floor((n - 3600 * o) / 60),
                  a = n - 3600 * o - 60 * r;
                return (
                  o < 10 && (o = '0' + o),
                  r < 10 && (r = '0' + r),
                  a < 10 && (a = '0' + a),
                  t ? [o, r, a].join(':') : [r, a].join(':')
                );
              })(t, t / 3600 >= 1),
              o = c()(e, ['seconds']);
            return r.a.createElement(s.a, f({}, o, { text: n }));
          }
          (d.propTypes = _(_({}, s.a.propTypes), {}, { seconds: i.a.number })),
            (d.defaultProps = { seconds: 0 }),
            (d.Font = s.a.Font),
            (d.Color = s.a.Color);
          var y = d;
          n.d(t, 'a', function () {
            return y;
          });
        },
        266: function (e, t, n) {
          'use strict';
          n(61), n(63), n(62), n(60), n(37), n(247), n(104), n(59), n(103), n(36), n(245), n(246);
          var o = n(2),
            r = n.n(o),
            a = n(243),
            i = n.n(a),
            l = n(244),
            c = n.n(l);
          function s (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
          }
          function u (e) {
            return (u =
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
          function _ (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function p (e, t) {
            return (p =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function f (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = m(e);
              if (t) {
                var r = m(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return d(this, n);
            };
          }
          function d (e, t) {
            return !t || ('object' !== u(t) && 'function' != typeof t) ? y(e) : t;
          }
          function y (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function m (e) {
            return (m = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function h (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(235);
          var b,
            g = {
              'size-container': 'Image__size-container___1F01j',
              'image-container': 'Image__image-container___3XUvb',
              'logo-light': 'Image__logo-light___1o9eH',
              'logo-dark': 'Image__logo-dark___gBP8T',
              loaded: 'Image__loaded___2w56Y',
              image: 'Image__image___6wPci',
              fadein: 'Image__fadein___agl3V',
              fit: 'Image__fit___1uHCx',
              cover: 'Image__cover___2NcXy',
              'lock-ratio': 'Image__lock-ratio___s5qTP',
            },
            v = { EXACT: 'exact', FIT: 'fit', COVER: 'cover' },
            w = { LOGO_LIGHT: 'logo-light', LOGO_DARK: 'logo-dark' },
            S = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && p(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = f(i);
              function i (e) {
                var t;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, i),
                  h(y((t = a.call(this, e))), 'handleImageLoad', function () {
                    t.setState({ loaded: !0 });
                  }),
                  (t.state = { loaded: !1, src: t.props.src }),
                  t
                );
              }
              return (
                (t = i),
                (o = [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (e, t) {
                      return e.src !== t.src ? { src: e.src, loaded: !1 } : null;
                    },
                  },
                ]),
                (n = [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = e.alt,
                        a = e.aspect_ratio,
                        i = e.fill_mode,
                        l = e.placeholder,
                        s = e.forwarded_ref,
                        u = e.is_amp,
                        _ = this.state,
                        p = _.src,
                        f = _.loaded,
                        d = a
                          ? { height: 0, paddingBottom: ''.concat((1 / a) * 100, '%') }
                          : void 0;
                      return r.a.createElement(
                        'div',
                        { className: t, style: n, ref: s },
                        r.a.createElement(
                          'div',
                          { className: g['size-container'] },
                          r.a.createElement(
                            'div',
                            {
                              className: c()(
                                g['image-container'],
                                a && g['lock-ratio'],
                                l && g[l],
                                f && g.loaded
                              ),
                              style: d,
                            },
                            u
                              ? p &&
                                  r.a.createElement('amp-img', {
                                    key: p,
                                    className: c()(g.image, g[i]),
                                    alt: o,
                                    src: p,
                                    title: o,
                                    onLoad: this.handleImageLoad,
                                    layout: 'fill',
                                  })
                              : p &&
                                  r.a.createElement('img', {
                                    key: p,
                                    className: c()(g.image, g[i]),
                                    src: p,
                                    alt: o,
                                    title: o,
                                    onLoad: this.handleImageLoad,
                                  })
                          )
                        )
                      );
                    },
                  },
                ]) && _(t.prototype, n),
                o && _(t, o),
                i
              );
            })(o.PureComponent);
          h(S, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            src: i.a.string,
            is_amp: i.a.bool,
            alt: i.a.string,
            aspect_ratio: i.a.number,
            fill_mode: i.a.string,
            placeholder: i.a.oneOf(
              [!1].concat(
                ((b = Object.values(w)),
                (function (e) {
                  if (Array.isArray(e)) return s(e);
                })(b) ||
                  (function (e) {
                    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                      return Array.from(e);
                  })(b) ||
                  (function (e, t) {
                    if (e) {
                      if ('string' == typeof e) return s(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        'Object' === n && e.constructor && (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                          ? Array.from(e)
                          : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? s(e, t)
                          : void 0
                      );
                    }
                  })(b) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })())
              )
            ),
            forwarded_ref: i.a.object,
          }),
            h(S, 'defaultProps', { fill_mode: v.EXACT, placeholder: w.LOGO_LIGHT, is_amp: !1 }),
            h(S, 'FillMode', v),
            h(S, 'Placeholder', w);
          var T = S;
          n.d(t, 'a', function () {
            return T;
          });
        },
        305: function (e, t, n) {
          'use strict';
          n.r(t);
          n(104), n(59), n(103), n(36), n(245), n(246), n(61);
          var o = n(2),
            r = n.n(o),
            a = n(243),
            i = n.n(a),
            l = function () {
              var e, t;
              return (
                void 0 !== document.hidden
                  ? ((e = 'hidden'), (t = 'visibilitychange'))
                  : void 0 !== document.msHidden
                  ? ((e = 'msHidden'), (t = 'msvisibilitychange'))
                  : void 0 !== document.webkitHidden &&
                    ((e = 'webkitHidden'), (t = 'webkitvisibilitychange')),
                { hidden: e, visibilitychange: t }
              );
            },
            c = function (e, t) {
              t(!document[e]);
            },
            s = function () {
              var e = null;
              return {
                start: function (t) {
                  var n = l(),
                    o = n.hidden,
                    r = n.visibilitychange;
                  (e = e || c.bind(null, o, t)), document.addEventListener(r, e, !1);
                },
                stop: function () {
                  var t = l(),
                    n = (t.hidden, t.visibilitychange);
                  document.removeEventListener(n, e), (e = null);
                },
              };
            };
          function u (e) {
            return (u =
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
          function _ (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function p (e, t) {
            return (p =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function f (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = m(e);
              if (t) {
                var r = m(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return d(this, n);
            };
          }
          function d (e, t) {
            return !t || ('object' !== u(t) && 'function' != typeof t) ? y(e) : t;
          }
          function y (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function m (e) {
            return (m = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function h (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var b = (function (e) {
            !(function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function');
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && p(e, t);
            })(i, e);
            var t,
              n,
              o,
              a = f(i);
            function i (e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, i),
                h(y((t = a.call(this, e))), 'play', function () {
                  var e = t.video_ref.current.play();
                  e &&
                    e.then(t.props.onPlay).catch(function (e) {
                      'NotAllowedError' === e.name && t.props.onAutostartNotAllowed();
                    });
                }),
                h(y(t), 'pause', function () {
                  t.video_ref.current.pause();
                }),
                h(y(t), 'handleLoadedMetadata', function (e) {
                  t.props.onLoadedMetadata({ duration: e.target.duration });
                }),
                h(y(t), 'handleLoadStart', function (e) {
                  var n = t.props.index;
                  t.props.onPlaylistItem({ index: n }), t.props.onBuffering();
                }),
                h(y(t), 'handleLoadedData', function (e) {
                  t.props.toggle_play && t.play();
                }),
                h(y(t), 'handleTimeUpdate', function (e) {
                  t.props.onTimeUpdate({ currentTime: e.target.currentTime });
                }),
                h(y(t), 'handleVolumeChange', function (e) {
                  t.props.onMuteChange(e.target.muted);
                }),
                h(y(t), 'handleError', function (e) {
                  var n = e.target.error;
                  t.props.onError({ code: n.code, message: n.message });
                }),
                h(y(t), 'handleVisibilityChange', function (e) {}),
                (t.video_ref = r.a.createRef()),
                (t.visibility_detector = s()),
                t
              );
            }
            return (
              (t = i),
              (n = [
                {
                  key: 'componentDidMount',
                  value: function () {
                    var e = this;
                    window.setTimeout(function () {
                      var t = e.props,
                        n = t.autoplay;
                      (0, t.onReady)(null, { autostart: n }, e.video_ref.current);
                    }, 0),
                      this.visibility_detector.start(this.handleVisibilityChange);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.visibility_detector.stop(this.handleVisibilityChange);
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.video_ref.current;
                    this.props.toggle_play !== e.toggle_play &&
                      (this.props.toggle_play ? this.play() : this.pause()),
                      this.props.toggle_sound !== e.toggle_sound &&
                        (this.props.toggle_sound ? (t.muted = !1) : (t.muted = !0)),
                      this.props.index !== e.index && this.props.toggle_play && this.play(),
                      this.props.seek_time !== e.seek_time &&
                        (t.currentTime = this.props.seek_time);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.className,
                      n = e.style,
                      o = e.index,
                      a = e.playlist,
                      i = e.autoplay,
                      l = e.muted,
                      c = e.onPlay,
                      s = e.onPause,
                      u = e.onPlaying,
                      _ = e.onBuffering,
                      p = e.onSeeking,
                      f = e.onSeeked,
                      d = e.onEnded,
                      y = a[o],
                      m = y.image,
                      h = y.file;
                    return r.a.createElement('video', {
                      ref: this.video_ref,
                      className: t,
                      style: n,
                      poster: m,
                      src: h,
                      autoPlay: i,
                      muted: l,
                      onPlay: c,
                      onPause: s,
                      onPlaying: u,
                      onWaiting: _,
                      onTimeUpdate: this.handleTimeUpdate,
                      onVolumeChange: this.handleVolumeChange,
                      onSeeking: p,
                      onSeeked: f,
                      onLoadedMetadata: this.handleLoadedMetadata,
                      onLoadStart: this.handleLoadStart,
                      onLoadedData: this.handleLoadedData,
                      onEnded: d,
                      onError: this.handleError,
                      playsInline: !0,
                    });
                  },
                },
              ]) && _(t.prototype, n),
              o && _(t, o),
              i
            );
          })(o.PureComponent);
          h(b, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            playlist: i.a.arrayOf(
              i.a.shape({ title: i.a.string, image: i.a.string, file: i.a.string })
            ),
            index: i.a.number,
            autoplay: i.a.bool,
            autopause: i.a.bool,
            muted: i.a.bool,
            toggle_play: i.a.bool,
            toggle_sound: i.a.bool,
            seek_time: i.a.number,
            onReady: i.a.func,
            onPlay: i.a.func,
            onPause: i.a.func,
            onPlaying: i.a.func,
            onBuffering: i.a.func,
            onTimeUpdate: i.a.func,
            onVolumeChange: i.a.func,
            onSeeking: i.a.func,
            onSeeked: i.a.func,
            onLoadedMetadata: i.a.func,
            onEnded: i.a.func,
            onError: i.a.func,
            onPlaylistItem: i.a.func,
            onAutostartNotAllowed: i.a.func,
          }),
            h(b, 'defaultProps', {
              index: 0,
              toggle_play: !1,
              toggle_sound: !1,
              seek_time: 0,
              onPlay: function () {},
              onPause: function () {},
              onPlaying: function () {},
              onBuffering: function () {},
              onTimeUpdate: function () {},
              onMuteChange: function () {},
              onSeeking: function () {},
              onSeeked: function () {},
              onLoadedMetadata: function () {},
              onEnded: function () {},
              onReady: function () {},
              onError: function () {},
              onPlaylistItem: function () {},
              onAutostartNotAllowed: function () {},
            });
          var g = b,
            v = (n(105), n(299), n(38), n(60), n(37), n(65), n(263)),
            w = n.n(v);
          function S (e) {
            return (S =
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
          function T (e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, o);
            }
            return n;
          }
          function E (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function k (e, t) {
            return (k =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function C (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = x(e);
              if (t) {
                var r = x(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return P(this, n);
            };
          }
          function P (e, t) {
            return !t || ('object' !== S(t) && 'function' != typeof t) ? O(e) : t;
          }
          function O (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function x (e) {
            return (x = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function j (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var A,
            N =
              ((A = 0),
              function () {
                return 'jw-'.concat((A += 1));
              }),
            R = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && k(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = C(i);
              function i (e) {
                var t;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, i),
                  j(O((t = a.call(this, e))), 'createJWPlaylist', function (e) {
                    return e.map(function (e) {
                      var t,
                        n = e.ad,
                        o =
                          n && n.custom_params
                            ? ((t = n.custom_params),
                              Object.keys(t)
                                .map(function (e) {
                                  return ''.concat(e, '=').concat(t[e]);
                                })
                                .join('&'))
                            : void 0,
                        r = n
                          ? { iu: n.dart_zone, npa: n.npa, rdp: n.rdp, customparam: o }
                          : void 0;
                      return Object.assign({ title: e.title, image: e.image, file: e.file }, r);
                    });
                  }),
                  j(O(t), 'getCaptionsIndex', function (e) {
                    return t.jwplayer.getCaptionsList().findIndex(function (t) {
                      return t.label === e;
                    });
                  }),
                  j(O(t), 'handlePlay', function (e) {
                    var n = 'autostart' === e.playReason;
                    t.props.onPlay({ autoplay: n }),
                      'buffering' === e.oldstate && t.props.onPlaying();
                  }),
                  j(O(t), 'handleReady', function (e, n) {
                    t.props.onReady(n, e, t.jwplayer);
                  }),
                  j(O(t), 'handleError', function (e) {
                    t.props.onError({ code: e.code, message: e.message });
                  }),
                  j(O(t), 'handleMeta', function (e) {
                    'media' === e.metadataType &&
                      t.props.onLoadedMetadata({ duration: e.duration });
                  }),
                  j(O(t), 'handleCaptionsList', function (e) {
                    e.tracks.length > 1 && t.props.onCaptionsReady();
                  }),
                  j(O(t), 'handleTime', function (e) {
                    t.props.onTimeUpdate({ currentTime: e.currentTime });
                  }),
                  j(O(t), 'handleBuffer', function (e) {
                    t.props.onBuffering(e.reason);
                  }),
                  j(O(t), 'handleBeforeComplete', function (e) {
                    jwplayer().getPlaylistIndex() ===
                      (t.props.playlist && t.props.playlist.length - 1) &&
                      (t.playlist_complete = !0),
                      t.props.onEnded();
                  }),
                  j(O(t), 'handleFirstFrame', function (e) {
                    var n = jwplayer().getPlaylistIndex();
                    t.playlist_complete && 0 === n && t.jwplayer.pause(), t.props.onStarted();
                  }),
                  j(O(t), 'handleMute', function (e) {
                    t.props.onMuteChange(e.mute);
                  }),
                  j(O(t), 'handleAdBreakStart', function (e) {
                    t.props.onAdBreakStart(e);
                  }),
                  j(O(t), 'handleAdBreakEnd', function (e) {
                    t.props.onAdBreakEnd(e);
                  }),
                  j(O(t), 'handleAdManager', function (e, n) {
                    t.props.onAdManager(n, t.jwplayer, e);
                  }),
                  j(O(t), 'handleAdImpression', function (e, n) {
                    t.props.onAdImpression(n, t.jwplayer, e);
                  }),
                  j(O(t), 'handleAdViewable', function () {
                    1 === t.jwplayer.getViewable() && t.props.onAdViewable();
                  }),
                  j(O(t), 'handleAdPlay', function (e) {
                    var n = 'autostart' === e.playReason;
                    t.props.onBeforePreroll(e),
                      t.props.onAdViewable(),
                      t.props.onAdPlay({ autoplay: n });
                  }),
                  j(O(t), 'handleAdPause', function (e) {
                    t.props.onAdPause(e);
                  }),
                  j(O(t), 'handleAdTime', function (e) {
                    t.props.onAdTimeUpdate(e);
                  }),
                  j(O(t), 'handleAdError', function (e) {
                    console.log('encountered an ad error', e);
                  }),
                  j(O(t), 'handleViewable', function (e) {
                    var n = Boolean(e.viewable);
                    t.props.onViewableChange(n);
                  }),
                  (t.id = N()),
                  (t.placeholder_ref = r.a.createRef()),
                  (t.playlist_complete = !1),
                  t
                );
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      const $___old_a5a9332bb245b466 = {}.constructor.getOwnPropertyDescriptor(
                        Navigator.prototype,
                        'platform'
                      );
                      try {
                        if ($___old_a5a9332bb245b466)
                          ({}.constructor.defineProperty(
                            Navigator.prototype,
                            'platform',
                            $___stub_7b3e42788f2718a1.platform
                          ));
                        return function () {
                          var e = this.props,
                            t = e.playlist,
                            n = e.autoplay,
                            o = e.autopause,
                            r = e.pause_ads,
                            a = e.muted,
                            i = e.config_params,
                            l = e.onPause,
                            c = (e.onBuffering, e.onSeeking),
                            s = e.onSeeked,
                            u = (e.onStarted, e.onEnded, e.onPlaylistItem),
                            _ = e.onAutostartNotAllowed,
                            p = e.onAdSkipped,
                            f = e.onAdComplete,
                            d = (e.onAdViewable, this.createJWPlaylist(t)),
                            y = window.jwplayer.defaults,
                            m = w()(n) ? y.autostart : n,
                            h = w()(o) ? y.autoPause : o,
                            b = r,
                            g = w()(a) ? y.mute : a,
                            v = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2
                                  ? T(Object(n), !0).forEach(function (t) {
                                      j(e, t, n[t]);
                                    })
                                  : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                  : T(Object(n)).forEach(function (t) {
                                      Object.defineProperty(
                                        e,
                                        t,
                                        Object.getOwnPropertyDescriptor(n, t)
                                      );
                                    });
                              }
                              return e;
                            })(
                              {
                                playlist: d,
                                controls: !1,
                                renderCaptionsNatively: !1,
                                width: '100%',
                                height: '100%',
                                aspectratio: void 0,
                                stretching: 'uniform',
                                anId: '929201',
                                pubOrder: '',
                                pubID: 'PubID',
                                ias_xps: m ? 'autoplayed' : 'clicktoplay',
                                ias_xbp: 'pre-roll',
                                ias_xar: '0',
                              },
                              i
                            );
                          w()(h) || Object.assign(v, { autoPause: h }),
                            w()(m) || Object.assign(v, { autostart: m }),
                            w()(g) || Object.assign(v, { mute: g }),
                            r && Object.assign(v.autoPause, { pauseAds: b });
                          var S = this.placeholder_ref.current;
                          this.jwplayer = window.jwplayer(S).setup(v);
                          var E = this.jwplayer;
                          E.setCaptions({
                            fontSize: 14,
                            fontFamily: 'knowledge-medium, Arial, sans-serif',
                            backgroundOpacity: 50,
                            windowOpacity: 0,
                          }),
                            E.on('ready', this.handleReady.bind(null, v)),
                            E.on('play', this.handlePlay),
                            E.on('pause', l),
                            E.on('seek', c),
                            E.on('seeked', s),
                            E.on('buffer', this.handleBuffer),
                            E.on('firstFrame', this.handleFirstFrame),
                            E.on('beforeComplete', this.handleBeforeComplete),
                            E.on('playlistItem', u),
                            E.on('meta', this.handleMeta),
                            E.on('time', this.handleTime),
                            E.on('mute', this.handleMute),
                            E.on('error', this.handleError),
                            E.on('captionsList', this.handleCaptionsList),
                            E.on('adBreakStart', this.handleAdBreakStart),
                            E.on('adBreakEnd', this.handleAdBreakEnd),
                            E.on('adPlay', this.handleAdPlay),
                            E.on('adPause', this.handleAdPause),
                            E.on('adsManager', this.handleAdManager.bind(null, v)),
                            E.on('adImpression', this.handleAdImpression.bind(null, v)),
                            E.on('adSkipped', p),
                            E.on('adComplete', f),
                            E.on('adViewableImpression', this.handleAdViewable),
                            E.on('adTime', this.handleAdTime),
                            E.on('adError', this.handleAdError),
                            E.on('autostartNotAllowed', _),
                            E.on('viewable', this.handleViewable);
                        }.apply(this, arguments);
                      } finally {
                        if ($___old_a5a9332bb245b466)
                          ({}.constructor.defineProperty(
                            Navigator.prototype,
                            'platform',
                            $___old_a5a9332bb245b466
                          ));
                      }
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.jwplayer.remove(), (this.jwplayer = null);
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function (e) {
                      var t = this.jwplayer;
                      if (
                        (this.props.toggle_play !== e.toggle_play &&
                          (this.props.toggle_play ? t.play() : t.pause()),
                        this.props.toggle_sound !== e.toggle_sound &&
                          (this.props.toggle_sound ? t.setMute(!1) : t.setMute(!0)),
                        this.props.toggle_cc !== e.toggle_cc &&
                          (this.props.toggle_cc
                            ? t.setCurrentCaptions(this.getCaptionsIndex('English'))
                            : t.setCurrentCaptions(this.getCaptionsIndex('Off'))),
                        this.props.seek_time !== e.seek_time && t.seek(this.props.seek_time),
                        this.props.index !== e.index && t.playlistItem(this.props.index),
                        this.props.playlist !== e.playlist)
                      ) {
                        var n = this.createJWPlaylist(this.props.playlist);
                        t.load(n);
                      }
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style;
                      return r.a.createElement(
                        'div',
                        { className: t, style: n },
                        r.a.createElement('div', {
                          ref: this.placeholder_ref,
                          key: this.id,
                          id: this.id,
                        })
                      );
                    },
                  },
                ]) && E(t.prototype, n),
                o && E(t, o),
                i
              );
            })(o.PureComponent);
          j(R, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            playlist: i.a.arrayOf(
              i.a.shape({
                title: i.a.string,
                image: i.a.string,
                file: i.a.string,
                ad: i.a.shape({
                  dart_zone: i.a.string.isRequired,
                  npa: i.a.oneOf(['0', '1']),
                  rdp: i.a.oneOf(['0', '1']),
                  custom_params: i.a.object,
                }),
              })
            ),
            index: i.a.number,
            autoplay: i.a.oneOf([!0, !1, 'viewable']),
            autopause: i.a.bool,
            pause_ads: i.a.bool,
            muted: i.a.bool,
            toggle_play: i.a.bool,
            toggle_sound: i.a.bool,
            toggle_cc: i.a.bool,
            seek_time: i.a.number,
            config_params: i.a.object,
            onReady: i.a.func,
            onPlay: i.a.func,
            onPause: i.a.func,
            onPlaying: i.a.func,
            onBuffering: i.a.func,
            onTimeUpdate: i.a.func,
            onSeeking: i.a.func,
            onSeeked: i.a.func,
            onLoadedMetadata: i.a.func,
            onStarted: i.a.func,
            onEnded: i.a.func,
            onError: i.a.func,
            onBeforePreroll: i.a.func,
            onAdBreakStart: i.a.func,
            onAdBreakEnd: i.a.func,
            onAdPlay: i.a.func,
            onAdPause: i.a.func,
            onAdTimeUpdate: i.a.func,
            onAdSkipped: i.a.func,
            onAdManager: i.a.func,
            onAdImpression: i.a.func,
            onAdComplete: i.a.func,
            onAdViewable: i.a.func,
            onPlaylistItem: i.a.func,
            onCaptionsReady: i.a.func,
            onAutostartNotAllowed: i.a.func,
            onViewableChange: i.a.func,
          }),
            j(R, 'defaultProps', {
              index: 0,
              toggle_play: !1,
              toggle_sound: !1,
              toggle_cc: !1,
              seek_time: 0,
              config_params: {},
              pause_ads: !0,
              onReady: function () {},
              onPlay: function () {},
              onPause: function () {},
              onPlaying: function () {},
              onBuffering: function () {},
              onTimeUpdate: function () {},
              onMuteChange: function () {},
              onSeeking: function () {},
              onSeeked: function () {},
              onLoadedMetadata: function () {},
              onStarted: function () {},
              onEnded: function () {},
              onError: function () {},
              onBeforePreroll: function () {},
              onAdBreakStart: function () {},
              onAdBreakEnd: function () {},
              onAdPlay: function () {},
              onAdPause: function () {},
              onAdTimeUpdate: function () {},
              onAdSkipped: function () {},
              onAdManager: function () {},
              onAdImpression: function () {},
              onAdComplete: function () {},
              onAdViewable: function () {},
              onPlaylistItem: function () {},
              onCaptionsReady: function () {},
              onAutostartNotAllowed: function () {},
              onViewableChange: function () {},
            });
          var I = R,
            M = (n(247), n(68), n(244)),
            L = n.n(M),
            D = n(248);
          n(218);
          var B = 'AdCountdown__countdown___3vNeJ';
          function V (e) {
            var t = e.className,
              n = e.style,
              o = e.position,
              a = e.duration,
              i = Math.max(0, Math.round(a - o));
            return i <= 0
              ? null
              : r.a.createElement(
                  'div',
                  { className: L()(t, B), style: n },
                  r.a.createElement(D.a, {
                    tag: 'span',
                    text: 'ADVERTISEMENT: ',
                    font: D.a.Font.MEDIUM,
                    color: D.a.Color.WHITE,
                  }),
                  r.a.createElement(D.a, {
                    tag: 'span',
                    text: 'Your content will begin in '.concat(i, ' seconds'),
                    font: D.a.Font.REGULAR,
                    color: D.a.Color.WHITE,
                  })
                );
          }
          V.propTypes = {
            className: i.a.string,
            style: i.a.object,
            position: i.a.number,
            duration: i.a.number,
          };
          var F = V,
            U = function (e) {
              return r.a.createElement(
                'svg',
                e,
                r.a.createElement('path', { d: 'M7 3.74L15 8l-8 4.28L0 16V0l7 3.74z' })
              );
            };
          U.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 15 16' };
          var G = function (e) {
            return r.a.createElement(
              'svg',
              e,
              r.a.createElement('path', { d: 'M0 0h3v16H0M9 0h3v16H9' })
            );
          };
          (G.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 12 16' }), n(219);
          var H = 'PlayButton__button___2dhqA',
            z = 'PlayButton__play___2_LR1',
            W = 'PlayButton__pause___glbZ6';
          function Y (e) {
            var t = e.className,
              n = e.style,
              o = e.paused,
              a = e.translations,
              i = e.onClickToPlay,
              l = e.onClickToPause,
              c = o ? a.play : a.pause;
            return r.a.createElement(
              'button',
              {
                className: L()(H, t),
                style: n,
                onClick: o ? i : l,
                title: c,
                'aria-label': c,
                role: 'button',
                tabIndex: '0',
              },
              o && r.a.createElement(U, { className: z }),
              !o && r.a.createElement(G, { className: W })
            );
          }
          (Y.propTypes = {
            className: i.a.string,
            style: i.a.object,
            paused: i.a.bool,
            translations: i.a.shape({ play: i.a.string, pause: i.a.string }),
            onClickToPlay: i.a.func,
            onClickToPause: i.a.func,
          }),
            (Y.defaultProps = {
              paused: !1,
              onClickToPlay: function () {},
              onClickToPause: function () {},
              translations: { play: 'Play', pause: 'Pause' },
            });
          var Z = Y,
            q = function (e) {
              return r.a.createElement(
                'svg',
                e,
                r.a.createElement('path', {
                  d:
                    'M0 47.6h19v66.7H0zm28.6 0v66.7l76.2 47.6V0zM128.6 0c-1.6 0-3.2.2-4.8.2v14.3c1.6-.1 3.2-.2 4.8-.2 36.8-.5 67 29 67.5 65.9.5 36.8-29 67-65.9 67.5h-1.6c-1.6 0-3.2-.1-4.8-.2v14.3c1.6.1 3.2.2 4.8.2 44.7 1.3 82-33.9 83.3-78.6S178.1 1.3 133.4 0h-4.8z',
                }),
                r.a.createElement('path', {
                  d:
                    'M128.6 38.1c-1.6 0-3.1.1-4.7.3v14.4c1.6-.3 3.1-.4 4.7-.4 15.8-.3 28.8 12.3 29.1 28 .3 15.8-12.3 28.8-28 29.1h-1.1c-1.6 0-3.2-.1-4.7-.4v14.4c23.5 2.6 44.7-14.4 47.3-37.9S156.8 41 133.3 38.4c-1.6-.2-3.1-.3-4.7-.3z',
                })
              );
            };
          q.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 213.5 161.9' };
          var K = function (e) {
            return r.a.createElement(
              'svg',
              e,
              r.a.createElement('path', {
                d:
                  'M0 47.63h19.05v66.68H0zm186.01 33.6l23.55 23.55-13.39 13.39-23.55-23.55-23.55 23.55-13.38-13.39 23.55-23.55-23.55-23.55 13.38-13.39 23.55 23.55 23.55-23.55 13.39 13.39-23.55 23.55zM28.58 47.63v66.68l76.2 47.62V0l-76.2 47.63z',
              })
            );
          };
          (K.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 209.56 161.93' }),
            n(220);
          var J = 'SoundButton__button___3V6Pw',
            X = 'SoundButton__on___1FC_S',
            Q = 'SoundButton__off___me2kh';
          function $ (e) {
            var t = e.className,
              n = e.style,
              o = e.muted,
              a = e.translations,
              i = e.onClickToUnmute,
              l = e.onClickToMute,
              c = o ? a.unmute : a.mute;
            return r.a.createElement(
              'button',
              {
                className: L()(J, t),
                style: n,
                onClick: o ? i : l,
                title: c,
                'aria-label': c,
                role: 'button',
                tabIndex: '0',
              },
              o && r.a.createElement(K, { className: Q }),
              !o && r.a.createElement(q, { className: X })
            );
          }
          ($.propTypes = {
            className: i.a.string,
            style: i.a.object,
            muted: i.a.bool,
            translations: i.a.shape({ mute: i.a.string, ummute: i.a.string }),
            onClickToUnmute: i.a.func,
            onClickToMute: i.a.func,
          }),
            ($.defaultProps = {
              muted: !1,
              onClickToUnmute: function () {},
              onClickToMute: function () {},
              translations: { mute: 'Mute', unmute: 'Unmute' },
            });
          var ee = $,
            te = function (e) {
              return r.a.createElement(
                'svg',
                e,
                r.a.createElement('path', {
                  d:
                    'M1.9.8h16.2c1 0 1.9.8 1.8 1.8v11.2c0 .9-.9 1.4-1.9 1.4h-5.7L10.4 17h-.9l-1.9-1.8H1.9c-1 0-1.9-.4-1.9-1.4V2.6C0 1.6.9.8 1.9.8zm5.5 9.5c-1.5 0-2.1-.9-2-2.2 0-1.3.5-2.2 2-2.2.6 0 1.2.2 1.6.4l.3-1.2c-.5-.3-1.4-.5-2.2-.5-2.4 0-3.6 1.4-3.6 3.6s1.2 3.6 3.6 3.6c.8 0 1.7-.2 2.2-.5L9 10c-.4.2-1 .3-1.6.3zm7.2 0c-1.5 0-2-.9-2-2.1 0-1.3.5-2.2 2-2.2.6 0 1.2.2 1.6.4l.3-1.3c-.5-.3-1.4-.5-2.2-.5-2.4 0-3.6 1.4-3.6 3.6s1.2 3.6 3.6 3.6c.8 0 1.7-.2 2.2-.5l-.3-1.3c-.4.2-1 .3-1.6.3z',
                })
              );
            };
          te.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 17' };
          var ne = function (e) {
            return r.a.createElement(
              'svg',
              e,
              r.a.createElement('path', {
                d:
                  'M18.1 2.6s.1 0 0 0l.1 10.9h-6.5l-.6.5-1.1 1-1.1-1-.5-.5H1.8V2.6h16.3zm0-1.8H1.9C.9.8 0 1.6 0 2.6v11.2c0 1 .9 1.4 1.9 1.4h5.7L9.5 17h.9l1.9-1.8H18c1 0 1.9-.5 1.9-1.4V2.6c.1-1-.8-1.8-1.8-1.8z',
              }),
              r.a.createElement('path', {
                d:
                  'M7.4 10.3c.6 0 1.2-.1 1.6-.3l.3 1.3c-.5.3-1.4.5-2.2.5-2.4 0-3.6-1.4-3.6-3.6s1.2-3.6 3.6-3.6c.8 0 1.7.2 2.2.5L9 6.3c-.4-.2-1-.4-1.6-.4-1.5 0-2 .9-2 2.2-.1 1.3.5 2.2 2 2.2m7.2 0c.6 0 1.2-.1 1.6-.3l.3 1.3c-.5.3-1.4.5-2.2.5-2.4 0-3.6-1.4-3.6-3.6s1.2-3.6 3.6-3.6c.8 0 1.7.2 2.2.5l-.3 1.3c-.4-.2-1-.4-1.6-.4-1.5 0-2 .9-2 2.2 0 1.2.5 2.1 2 2.1',
              })
            );
          };
          (ne.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 17' }),
            n(221);
          var oe = 'CCButton__button___PWh0k',
            re = 'CCButton__on___2VF4t',
            ae = 'CCButton__off___wwRXg';
          function ie (e) {
            var t = e.className,
              n = e.style,
              o = e.on,
              a = e.translations,
              i = e.onClickToToggle;
            return r.a.createElement(
              'div',
              { className: t, style: n },
              r.a.createElement(
                'button',
                {
                  className: oe,
                  onClick: i.bind(this, !o),
                  title: a.closed_captions,
                  'aria-label': a.closed_caption,
                  'aria-pressed': o ? 'true' : 'false',
                  role: 'button',
                  tabIndex: '0',
                },
                o && r.a.createElement(te, { className: re }),
                !o && r.a.createElement(ne, { className: ae })
              )
            );
          }
          (ie.propTypes = {
            className: i.a.string,
            style: i.a.object,
            on: i.a.bool,
            translations: i.a.shape({ closed_captions: i.a.string }),
            onClickToToggle: i.a.func,
          }),
            (ie.defaultProps = {
              on: !1,
              onClickToToggle: function (e) {},
              translations: { closed_caption: 'Closed Caption' },
            });
          var le = ie,
            ce = function (e) {
              return r.a.createElement(
                'svg',
                e,
                r.a.createElement('path', {
                  d:
                    'M385.5 301.2c-27.4 0-51.6 13-67.4 33.1l-146.7-75c2-7.2 3.3-14.6 3.3-22.3a85 85 0 0 0-4-24.3l146-74.6a86.3 86.3 0 1 0-17.6-51.7c.1 7.7 1.5 15.2 3.4 22.3l-146.6 75A86 86 0 0 0 2 237a86.3 86.3 0 0 0 155.2 51.6l146 74.7c-2.4 7.7-4 15.8-4 24.3a86.4 86.4 0 1 0 86.3-86.4z',
                })
              );
            };
          (ce.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 473.9 473.9' }),
            n(222);
          var se = 'ShareButton__button___AOdU3',
            ue = 'ShareButton__icon___23dU8';
          function _e (e) {
            var t = e.className,
              n = e.style,
              o = (e.on, e.onClick),
              a = e.translations;
            return r.a.createElement(
              'div',
              { className: t, style: n },
              r.a.createElement(
                'button',
                {
                  className: se,
                  onClick: o,
                  'aria-label': a.share,
                  role: 'button',
                  tabIndex: '0',
                },
                r.a.createElement(ce, { className: ue })
              )
            );
          }
          (_e.propTypes = {
            className: i.a.string,
            style: i.a.object,
            onClick: i.a.func,
            translations: i.a.shape({ share: i.a.string }),
          }),
            (_e.defaultProps = { onClick: function () {}, translations: { share: 'Share' } });
          var pe = _e,
            fe = { THEATER: 'THEATER', DEFAULT: 'DEFAULT', STICKY: 'STICKY' };
          function de (e) {
            return (de =
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
          function ye (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function me (e, t) {
            return (me =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function he (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = ve(e);
              if (t) {
                var r = ve(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return be(this, n);
            };
          }
          function be (e, t) {
            return !t || ('object' !== de(t) && 'function' != typeof t) ? ge(e) : t;
          }
          function ge (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function ve (e) {
            return (ve = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function we (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var Se = function (e) {
            return r.a.createElement(
              'svg',
              e,
              r.a.createElement('path', { d: 'M20 2v14H0V2h20zM2 4v10h16V4H2z' })
            );
          };
          Se.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 18' };
          var Te = function (e) {
            return r.a.createElement(
              'svg',
              e,
              r.a.createElement('path', { d: 'M18 4v10H2V4h16zM4 6v6h12V6H4z' })
            );
          };
          (Te.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 18' }),
            n(223);
          var Ee = 'ViewModeButton__button___27efH',
            ke = 'ViewModeButton__icon___100hh',
            Ce = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && me(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = he(i);
              function i (e) {
                var t;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, i),
                  we(ge((t = a.call(this, e))), 'handleClick', function (e) {
                    var n = t.props.onClick(t.state.view_mode, fe);
                    n && t.setState({ view_mode: n });
                  }),
                  (t.state = { view_mode: t.props.initial_view_mode }),
                  t
                );
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = e.translations,
                        a = this.state.view_mode,
                        i = a === fe.THEATER,
                        l = a === fe.DEFAULT,
                        c = l ? o.theater_mode : o.default_mode;
                      return r.a.createElement(
                        'button',
                        {
                          className: L()(Ee, t),
                          style: n,
                          onClick: this.handleClick,
                          title: c,
                          'aria-label': c,
                          role: 'button',
                          tabIndex: '0',
                        },
                        i && r.a.createElement(Te, { className: ke }),
                        l && r.a.createElement(Se, { className: ke })
                      );
                    },
                  },
                ]) && ye(t.prototype, n),
                o && ye(t, o),
                i
              );
            })(o.PureComponent);
          we(Ce, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            initial_view_mode: i.a.oneOf(Object.values(fe)).isRequired,
            translations: i.a.shape({ default_mode: i.a.string, theater_mode: i.a.string }),
            onClick: i.a.func,
          }),
            we(Ce, 'defaultProps', {
              initial_view_mode: fe.DEFAULT,
              onClick: function (e) {
                return e === fe.DEFAULT ? fe.THEATER : fe.DEFAULT;
              },
            });
          var Pe = Ce;
          function Oe (e) {
            return (Oe =
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
          function xe (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          }
          function je (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function Ae (e, t) {
            return (Ae =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function Ne (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = Me(e);
              if (t) {
                var r = Me(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return Re(this, n);
            };
          }
          function Re (e, t) {
            return !t || ('object' !== Oe(t) && 'function' != typeof t) ? Ie(e) : t;
          }
          function Ie (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function Me (e) {
            return (Me = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function Le (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var De = function (e) {
            return r.a.createElement(
              'svg',
              e,
              r.a.createElement('path', {
                d:
                  'M0 17.002V18h7v-1.995H2V11H0v6.002zM23.002 18H24v-7h-1.996v4.99H17V18h6.002zM24 .995V0h-7v1.99h5V7h2V.995zM.998 0H0v7h1.996V2.021H7V0H.998z',
              })
            );
          };
          De.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 18' };
          var Be = function (e) {
            return r.a.createElement(
              'svg',
              e,
              r.a.createElement('path', {
                fillRule: 'evenodd',
                d:
                  'M11 6.002V7h7V5.005h-5V0h-2v6.002zM6.002 7H7V0H5.004v4.99H0V7h6.002zM7 11.995V11H0v1.99h5V18h2v-6.005zM11.998 11H11v7h1.996v-4.979H18V11h-6.002z',
              })
            );
          };
          (Be.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 18 18' }),
            n(224);
          var Ve = 'FullscreenButton__button___Z7YyB',
            Fe = 'FullscreenButton__enter___1NMz1',
            Ue = 'FullscreenButton__exit___3SCFv',
            Ge = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Ae(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = Ne(i);
              function i () {
                var e;
                xe(this, i);
                for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                  n[o] = arguments[o];
                return (
                  Le(Ie((e = a.call.apply(a, [this].concat(n)))), 'handleClick', function () {
                    !(
                      document.fullscreenElement ||
                      document.webkitFullscreenElement ||
                      document.mozFullScreenElement ||
                      document.msFullscreenElement
                    )
                      ? e.props.onClickToEnterFullscreen()
                      : e.props.onClickToExitFullscreen();
                  }),
                  e
                );
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = e.translations.fullscreen;
                      return r.a.createElement(
                        'div',
                        { className: t, style: n },
                        r.a.createElement(
                          'button',
                          {
                            className: Ve,
                            onClick: this.handleClick,
                            title: o,
                            'aria-label': o,
                            role: 'button',
                            tabIndex: '0',
                          },
                          r.a.createElement(Be, { className: Ue }),
                          r.a.createElement(De, { className: Fe })
                        )
                      );
                    },
                  },
                ]) && je(t.prototype, n),
                o && je(t, o),
                i
              );
            })(o.PureComponent);
          Le(Ge, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            translations: i.a.shape({ fullscreen: i.a.string }),
            onClickToEnterFullscreen: i.a.func,
            onClickToExitFullscreen: i.a.func,
          }),
            Le(Ge, 'defaultProps', {
              onClickToEnterFullscreen: function () {},
              onClickToExitFullscreen: function () {},
              translations: { fullscreen: 'Fullscreen' },
            });
          var He = Ge,
            ze = n(265);
          n(225);
          var We = 'TimeDisplay__current___20C63',
            Ye = 'TimeDisplay__separator___2QXTV',
            Ze = 'TimeDisplay__duration___1ac0I';
          function qe (e) {
            var t = e.className,
              n = e.style,
              o = e.current,
              a = e.duration;
            return r.a.createElement(
              'div',
              { className: t, style: n },
              o >= 0 &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(ze.a, {
                    className: We,
                    seconds: o,
                    font: ze.a.Font.REGULAR,
                    color: ze.a.Color.WHITE,
                  }),
                  r.a.createElement(D.a, {
                    className: Ye,
                    text: '/',
                    font: D.a.Font.REGULAR,
                    color: D.a.Color.WHITE,
                  })
                ),
              r.a.createElement(ze.a, {
                className: Ze,
                seconds: a,
                font: ze.a.Font.REGULAR,
                color: ze.a.Color.WHITE,
              })
            );
          }
          (qe.propTypes = {
            className: i.a.string,
            style: i.a.object,
            current: i.a.number,
            duration: i.a.number,
          }),
            (qe.defaultProps = { duration: 0 });
          var Ke = qe;
          n(226);
          var Je = 'TitleOverlay__container___108td',
            Xe = 'TitleOverlay__title___tg0kP';
          function Qe (e) {
            var t = e.className,
              n = e.style,
              o = e.title;
            return r.a.createElement(
              'div',
              { className: t, style: n },
              r.a.createElement(
                'div',
                { className: Je },
                r.a.createElement(D.a, {
                  className: Xe,
                  text: o,
                  font: D.a.Font.MEDIUM,
                  color: D.a.Color.WHITE,
                })
              )
            );
          }
          Qe.propTypes = { className: i.a.string, style: i.a.object, title: i.a.string };
          var $e = Qe;
          n(227);
          var et = 'ProgressBar__container___g8DrB',
            tt = 'ProgressBar__seek-progress___ygxaj',
            nt = 'ProgressBar__play-progress___n-lJT';
          function ot (e) {
            var t = e.className,
              n = e.style,
              o = e.show_seek_progress,
              a = e.seek_progress,
              i = e.play_progress,
              l = L()(et, t);
            return r.a.createElement(
              'div',
              { className: l, style: n },
              !o &&
                r.a.createElement('div', {
                  className: nt,
                  style: { width: ''.concat(100 * i, '%') },
                }),
              o &&
                r.a.createElement('div', {
                  className: tt,
                  style: { width: ''.concat(100 * a, '%') },
                })
            );
          }
          (ot.propTypes = {
            className: i.a.string,
            style: i.a.object,
            show_seek_progress: i.a.bool,
            seek_progress: i.a.number,
            play_progress: i.a.number,
          }),
            (ot.defaultProps = { show_seek_progress: !1, seek_progress: 0, play_progress: 0 });
          var rt = ot,
            at = n(300);
          function it (e) {
            return (it =
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
          function lt (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function ct (e, t) {
            return (ct =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function st (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = pt(e);
              if (t) {
                var r = pt(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return ut(this, n);
            };
          }
          function ut (e, t) {
            return !t || ('object' !== it(t) && 'function' != typeof t) ? _t(e) : t;
          }
          function _t (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function pt (e) {
            return (pt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function ft (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(228);
          var dt = 'Scrubber__scrub-container___B50N9',
            yt = 'Scrubber__grabbing___3IK7m',
            mt = 'Scrubber__scrubber___P8L7b',
            ht = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && ct(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = st(i);
              function i (e) {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, i),
                  ft(_t((t = a.call(this, e))), 'getProgress', function (e) {
                    var n = t.scrubber_container_ref.current.clientWidth;
                    return Math.max(0, Math.min(1, e / n));
                  }),
                  ft(_t(t), 'handlePanStart', function (e) {
                    var n = t.scrubber_ref.current,
                      o = n.getBoundingClientRect().left + n.clientWidth / 2,
                      r = t.scrubber_container_ref.current.getBoundingClientRect().left;
                    t.start_x = o - r;
                    var a = t.getProgress(t.start_x);
                    t.setState({ progress: a, grabbing: !0 }), t.props.onDragStart(a);
                  }),
                  ft(_t(t), 'handlePanMove', function (e) {
                    var n = t.start_x + e.deltaX,
                      o = t.getProgress(n);
                    t.setState({ progress: o }), t.props.onDragMove(o);
                  }),
                  ft(_t(t), 'handlePanEndOrCancel', function (e) {
                    t.setState({ grabbing: !1 }), t.props.onDragEnd();
                  }),
                  ft(_t(t), 'handleClick', function (e) {
                    if (e.target !== t.scrubber_ref.current) {
                      var n = e.currentTarget.getBoundingClientRect(),
                        o = t.getProgress(e.clientX - n.left);
                      t.setState({ progress: o }), t.props.onClick(o);
                    }
                  }),
                  (t.scrubber_container_ref = r.a.createRef()),
                  (t.scrubber_ref = r.a.createRef());
                var n = e.play_progress;
                return (t.state = { progress: n, grabbing: !1 }), t;
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'componentDidUpdate',
                    value: function (e) {
                      e.play_progress === this.props.play_progress ||
                        this.state.grabbing ||
                        this.setState({ progress: this.props.play_progress });
                    },
                  },
                  {
                    key: 'componentDidMount',
                    value: function () {
                      (this.hammer = new at.a.Manager(this.scrubber_ref.current)),
                        this.hammer.add(
                          new at.a.Pan({ direction: at.a.DIRECTION_ALL, threshold: 5 })
                        ),
                        this.hammer.on('panstart', this.handlePanStart),
                        this.hammer.on('panmove', this.handlePanMove),
                        this.hammer.on('panend pancancel', this.handlePanEndOrCancel);
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.hammer.destroy(), (this.hammer = null);
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = this.state,
                        a = o.progress,
                        i = o.grabbing,
                        l = mt,
                        c = L()(dt, i && yt);
                      return r.a.createElement(
                        'div',
                        { className: t, style: n },
                        r.a.createElement(
                          'div',
                          {
                            className: c,
                            ref: this.scrubber_container_ref,
                            onClick: this.handleClick,
                          },
                          r.a.createElement('div', {
                            className: l,
                            style: { left: ''.concat(100 * a, '%') },
                            ref: this.scrubber_ref,
                          })
                        )
                      );
                    },
                  },
                ]) && lt(t.prototype, n),
                o && lt(t, o),
                i
              );
            })(o.PureComponent);
          ft(ht, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            play_progress: i.a.number,
            onDragStart: i.a.func,
            onDragMove: i.a.func,
            onDragEnd: i.a.func,
            onClick: i.a.func,
          }),
            ft(ht, 'defaultProps', {
              play_progress: 0,
              onDragStart: function () {},
              onDragMove: function () {},
              onDragEnd: function () {},
              onClick: function () {},
            });
          var bt = ht;
          function gt (e) {
            return (gt =
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
          function vt (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function wt (e, t) {
            return (wt =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function St (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = kt(e);
              if (t) {
                var r = kt(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return Tt(this, n);
            };
          }
          function Tt (e, t) {
            return !t || ('object' !== gt(t) && 'function' != typeof t) ? Et(e) : t;
          }
          function Et (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function kt (e) {
            return (kt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function Ct (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(229);
          var Pt = 'ProgressControls__container___2DjSQ',
            Ot = 'ProgressControls__progress-bar___3kGby',
            xt = 'ProgressControls__scrubber___3-NZD',
            jt = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && wt(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = St(i);
              function i (e) {
                var t;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, i),
                  Ct(Et((t = a.call(this, e))), 'handleDragStart', function (e) {
                    t.setState({ seek_progress: e, scrubbing: !0 }), t.props.onDragStart(e);
                  }),
                  Ct(Et(t), 'handleDragMove', function (e) {
                    t.setState({ seek_progress: e, scrubbing: !0 }), t.props.onDragMove(e);
                  }),
                  Ct(Et(t), 'handleDragEnd', function () {
                    t.setState({ scrubbing: !1 }), t.props.onDragEnd();
                  }),
                  Ct(Et(t), 'handleClick', function (e) {
                    t.setState({ seek_progress: e }), t.props.onClick(e);
                  }),
                  (t.state = { seek_progress: 0, scrubbing: !1 }),
                  t
                );
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = e.seeking,
                        a = e.play_progress,
                        i = this.state,
                        l = i.scrubbing,
                        c = i.seek_progress,
                        s = l || o;
                      return r.a.createElement(
                        'div',
                        { className: t, style: n },
                        r.a.createElement(
                          'div',
                          { className: Pt, tabIndex: 0 },
                          r.a.createElement(rt, {
                            className: Ot,
                            show_seek_progress: s,
                            seek_progress: c,
                            play_progress: a,
                          }),
                          r.a.createElement(bt, {
                            className: xt,
                            play_progress: a,
                            onDragStart: this.handleDragStart,
                            onDragMove: this.handleDragMove,
                            onDragEnd: this.handleDragEnd,
                            onClick: this.handleClick,
                          })
                        )
                      );
                    },
                  },
                ]) && vt(t.prototype, n),
                o && vt(t, o),
                i
              );
            })(o.PureComponent);
          Ct(jt, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            seeking: i.a.bool,
            play_progress: i.a.number,
            onDragStart: i.a.func,
            onDragMove: i.a.func,
            onDragEnd: i.a.func,
            onClick: i.a.func,
          }),
            Ct(jt, 'defaultProps', {
              seeking: !1,
              onDragStart: function () {},
              onDragMove: function () {},
              onDragEnd: function () {},
              onClick: function () {},
            });
          var At = jt,
            Nt = n(249),
            Rt = n.n(Nt),
            It = n(256),
            Mt = n.n(It);
          function Lt (e) {
            return (Lt =
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
          function Dt (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function Bt (e, t, n) {
            return t && Dt(e.prototype, t), n && Dt(e, n), e;
          }
          function Vt (e, t) {
            return (Vt =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function Ft (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = Gt(e);
              if (t) {
                var r = Gt(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return Ut(this, n);
            };
          }
          function Ut (e, t) {
            return !t || ('object' !== Lt(t) && 'function' != typeof t)
              ? (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e)
              : t;
          }
          function Gt (e) {
            return (Gt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function Ht (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(230);
          var zt = {
              container: 'Spinner__container___72LOd',
              'icon-container': 'Spinner__icon-container___YSqEe',
              icon: 'Spinner__icon___1K_bY',
              spinner: 'Spinner__spinner___Ihxn4',
              white: 'Spinner__white___fq5TM',
              orange: 'Spinner__orange____BRLG',
              text: 'Spinner__text___2EofX',
              appear: 'Spinner__appear___fjVQy',
              enter: 'Spinner__enter___3TL-v',
              'appear-active': 'Spinner__appear-active___3jbjd',
              'enter-active': 'Spinner__enter-active___3saMt',
              'enter-done': 'Spinner__enter-done___2CjAL',
              exit: 'Spinner__exit___T1GKA',
              'exit-active': 'Spinner__exit-active___1pHyq',
              'exit-done': 'Spinner__exit-done___2b4Qz',
            },
            Wt = { WHITE: 'white', ORANGE: 'orange' },
            Yt = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Vt(e, t);
              })(n, e);
              var t = Ft(n);
              function n (e) {
                var o;
                !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, n),
                  ((o = t.call(this, e)).state = { transition_in: !1 });
                return (
                  (o.deferred_show = Mt()(function () {
                    o.setState({ transition_in: !0 });
                  }, 100)),
                  o
                );
              }
              return (
                Bt(n, null, [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (e, t) {
                      return e.show ? null : { transition_in: !1 };
                    },
                  },
                ]),
                Bt(n, [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      this.props.show && this.deferred_show();
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function (e) {
                      e.show !== this.props.show &&
                        (this.props.show ? this.deferred_show() : this.deferred_show.cancel());
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.deferred_show.cancel();
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.text_className,
                        o = e.style,
                        a = e.text_style,
                        i = e.color,
                        l = e.text;
                      return r.a.createElement(
                        Rt.a,
                        {
                          timeout: 500,
                          in: this.state.transition_in,
                          mountOnEnter: !0,
                          unmountOnExit: !0,
                          classNames: {
                            appear: zt.appear,
                            appearActive: zt['appear-active'],
                            enter: zt.enter,
                            enterActive: zt['enter-active'],
                            enterDone: zt['enter-done'],
                            exit: zt.exit,
                            exitActive: zt['exit-active'],
                            exitDone: zt['exit-done'],
                          },
                        },
                        r.a.createElement(
                          'div',
                          { className: L()(zt.container, t), style: o },
                          r.a.createElement(
                            'div',
                            { className: zt['icon-container'] },
                            r.a.createElement(
                              'svg',
                              {
                                className: L()(zt.icon, zt[i]),
                                preserveAspectRatio: 'xMidYMid',
                                viewBox: '0 0 100 100',
                              },
                              r.a.createElement('circle', { cx: '50', cy: '50', r: '40' })
                            )
                          ),
                          l &&
                            r.a.createElement(D.a, {
                              className: L()(zt.text, n),
                              style: a,
                              text: l,
                              font: D.a.Font.REGULAR,
                              color: i === Wt.WHITE ? D.a.Color.WHITE : D.a.Color.GRAY,
                              tag: 'span',
                            })
                        )
                      );
                    },
                  },
                ]),
                n
              );
            })(o.PureComponent);
          function Zt (e) {
            return (Zt =
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
          function qt (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          }
          function Kt (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function Jt (e, t) {
            return (Jt =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function Xt (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = $t(e);
              if (t) {
                var r = $t(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return Qt(this, n);
            };
          }
          function Qt (e, t) {
            return !t || ('object' !== Zt(t) && 'function' != typeof t)
              ? (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e)
              : t;
          }
          function $t (e) {
            return ($t = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function en (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          Ht(Yt, 'propTypes', {
            show: i.a.bool,
            className: i.a.string,
            text_className: i.a.string,
            style: i.a.object,
            text_style: i.a.object,
            color: i.a.oneOf(Object.values(Wt)),
            text: i.a.string,
          }),
            Ht(Yt, 'defaultProps', { show: !0, color: Wt.ORANGE }),
            Ht(Yt, 'Color', Wt),
            n(231);
          var tn = 'BufferingOverlay__container___3efmH',
            nn = 'BufferingOverlay__spinner___1mf2M',
            on = 'BufferingOverlay__appear___3wFQ0',
            rn = 'BufferingOverlay__enter___19sN8',
            an = 'BufferingOverlay__appear-active___3Rby2',
            ln = 'BufferingOverlay__enter-active___3sDBu',
            cn = 'BufferingOverlay__enter-done___3koGR',
            sn = 'BufferingOverlay__exit___3wC7H',
            un = 'BufferingOverlay__exit-active___3fU7f',
            _n = 'BufferingOverlay__exit-done___1L3te',
            pn = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Jt(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = Xt(i);
              function i () {
                return qt(this, i), a.apply(this, arguments);
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = e.show;
                      return r.a.createElement(
                        Rt.a,
                        {
                          timeout: 400,
                          in: o,
                          mountOnEnter: !0,
                          unmountOnExit: !0,
                          classNames: {
                            appear: on,
                            appearActive: an,
                            enter: rn,
                            enterActive: ln,
                            enterDone: cn,
                            exit: sn,
                            exitActive: un,
                            exitDone: _n,
                          },
                        },
                        r.a.createElement(
                          'div',
                          { className: t, style: n },
                          r.a.createElement(
                            'div',
                            { className: tn },
                            r.a.createElement(Yt, {
                              className: nn,
                              color: Yt.Color.WHITE,
                              show: !0,
                            })
                          )
                        )
                      );
                    },
                  },
                ]) && Kt(t.prototype, n),
                o && Kt(t, o),
                i
              );
            })(o.PureComponent);
          en(pn, 'propTypes', { className: i.a.string, style: i.a.object, show: i.a.bool }),
            en(pn, 'defaultProps', { show: !0 });
          var fn = pn;
          var dn = function (e, t, n) {
              var o = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - t / 2,
                r = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - n / 2;
              return window.open(
                e,
                '',
                'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
                  t +
                  ', height=' +
                  n +
                  ', top=' +
                  r +
                  ', left=' +
                  o
              );
            },
            yn = {
              GRAY_TO_ORIGINAL: 'gray-to-original',
              WHITE_TO_ORIGINAL: 'white-to-original',
              WHITE_TO_ORANGE: 'white-to-orange',
              ALWAYS_GRAY: 'always-gray',
              ALWAYS_WHITE: 'always-white',
            };
          n(197);
          var mn = {
            container: 'SocialTools__container___3rfoZ',
            icon: 'SocialTools__icon___MYRE6',
            borderless: 'SocialTools__borderless___368d9',
            'always-gray': 'SocialTools__always-gray___2pIVP',
            'gray-to-original': 'SocialTools__gray-to-original___1Duya',
            'always-white': 'SocialTools__always-white___2j03w',
            'white-to-original': 'SocialTools__white-to-original___2tdRg',
            'white-to-orange': 'SocialTools__white-to-orange___2o6Ku',
            twitter: 'SocialTools__twitter___1EoE2',
            facebook: 'SocialTools__facebook___3tojW',
            youtube: 'SocialTools__youtube___gGJFS',
            rss: 'SocialTools__rss___2Wgb-',
            linkedin: 'SocialTools__linkedin___rYZd4',
            instagram: 'SocialTools__instagram___38SVl',
            email: 'SocialTools__email___1O9y9',
            link: 'SocialTools__link___wCGCZ',
            wechat: 'SocialTools__wechat___187--',
          };
          function hn (e) {
            var t = e.className,
              n = e.color,
              o = e.borderless,
              a = e.share,
              i = e.url,
              l = L()(mn.icon, mn.facebook, mn[n], o ? mn.borderless : void 0, t),
              c = a
                ? (function (e) {
                    var t = encodeURIComponent(e.url),
                      n = encodeURIComponent(e.title),
                      o = 'https://www.facebook.com/sharer/sharer.php?u='
                        .concat(t, '&t=')
                        .concat(n);
                    return dn.bind(null, o, 600, 400);
                  })(a)
                : (function (e) {
                    return function () {
                      window.open(e, '_blank');
                    };
                  })(i);
            return r.a.createElement(
              'button',
              { 'aria-label': 'Facebook', type: 'button', className: l, onClick: c },
              r.a.createElement(
                'svg',
                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 9 16' },
                r.a.createElement('path', {
                  d:
                    'M5.8 16V8.7h2.7l.4-2.8H5.8V4c0-.8.2-1.4 1.5-1.4H9V.1C8.7.1 7.8 0 6.6 0c-2.3 0-4 1.3-4 3.8v2.1H0v2.8h2.7V16h3.1z',
                })
              )
            );
          }
          (hn.Color = yn),
            (hn.propTypes = {
              className: i.a.string,
              color: i.a.oneOf(Object.values(yn)),
              borderless: i.a.bool,
              share: i.a.shape({ url: i.a.string.isRequired, title: i.a.string.isRequired }),
              url: i.a.string,
            }),
            (hn.defaultProps = { color: yn.GRAY_TO_ORIGINAL, borderless: !1 });
          var bn = hn;
          n(197);
          var gn = {
            container: 'SocialTools__container___3rfoZ',
            icon: 'SocialTools__icon___MYRE6',
            borderless: 'SocialTools__borderless___368d9',
            'always-gray': 'SocialTools__always-gray___2pIVP',
            'gray-to-original': 'SocialTools__gray-to-original___1Duya',
            'always-white': 'SocialTools__always-white___2j03w',
            'white-to-original': 'SocialTools__white-to-original___2tdRg',
            'white-to-orange': 'SocialTools__white-to-orange___2o6Ku',
            twitter: 'SocialTools__twitter___1EoE2',
            facebook: 'SocialTools__facebook___3tojW',
            youtube: 'SocialTools__youtube___gGJFS',
            rss: 'SocialTools__rss___2Wgb-',
            linkedin: 'SocialTools__linkedin___rYZd4',
            instagram: 'SocialTools__instagram___38SVl',
            email: 'SocialTools__email___1O9y9',
            link: 'SocialTools__link___wCGCZ',
            wechat: 'SocialTools__wechat___187--',
          };
          function vn (e) {
            var t = e.className,
              n = e.color,
              o = e.borderless,
              a = e.share,
              i = e.url,
              l = L()(gn.icon, gn.twitter, gn[n], o ? gn.borderless : void 0, t),
              c = a
                ? (function (e) {
                    var t = encodeURIComponent(e.url),
                      n = encodeURIComponent(e.title),
                      o = 'https://www.twitter.com/share?url='.concat(t, '&text=').concat(n);
                    return dn.bind(null, o, 600, 400);
                  })(a)
                : (function (e) {
                    return function () {
                      window.open(e, '_blank');
                    };
                  })(i);
            return r.a.createElement(
              'button',
              { 'aria-label': 'Twitter', type: 'button', className: l, onClick: c },
              r.a.createElement(
                'svg',
                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
                r.a.createElement('path', {
                  d:
                    'M512.002 97.211c-18.84 8.354-39.082 14.001-60.33 16.54 21.686-13 38.342-33.585 46.186-58.115a210.29 210.29 0 0 1-66.705 25.49c-19.16-20.415-46.461-33.17-76.674-33.17-58.011 0-105.042 47.029-105.042 105.039 0 8.233.929 16.25 2.72 23.939-87.3-4.382-164.701-46.2-216.509-109.753-9.042 15.514-14.223 33.558-14.223 52.809 0 36.444 18.544 68.596 46.73 87.433a104.614 104.614 0 0 1-47.577-13.139c-.01.438-.01.878-.01 1.321 0 50.894 36.209 93.348 84.261 103a105.245 105.245 0 0 1-27.674 3.687c-6.769 0-13.349-.66-19.764-1.888 13.368 41.73 52.16 72.104 98.126 72.949-35.95 28.176-81.243 44.967-130.458 44.967-8.479 0-16.84-.496-25.058-1.471 46.486 29.807 101.701 47.197 161.021 47.197 193.211 0 298.868-160.062 298.868-298.872 0-4.554-.104-9.084-.305-13.59 20.526-14.809 38.335-33.309 52.417-54.373z',
                })
              )
            );
          }
          (vn.Color = yn),
            (vn.propTypes = {
              className: i.a.string,
              color: i.a.oneOf(Object.values(yn)),
              borderless: i.a.bool,
              share: i.a.shape({ url: i.a.string.isRequired, title: i.a.string.isRequired }),
              url: i.a.string,
            }),
            (vn.defaultProps = { color: yn.GRAY_TO_ORIGINAL, borderless: !1 });
          var wn = vn;
          n(197);
          var Sn = {
            container: 'SocialTools__container___3rfoZ',
            icon: 'SocialTools__icon___MYRE6',
            borderless: 'SocialTools__borderless___368d9',
            'always-gray': 'SocialTools__always-gray___2pIVP',
            'gray-to-original': 'SocialTools__gray-to-original___1Duya',
            'always-white': 'SocialTools__always-white___2j03w',
            'white-to-original': 'SocialTools__white-to-original___2tdRg',
            'white-to-orange': 'SocialTools__white-to-orange___2o6Ku',
            twitter: 'SocialTools__twitter___1EoE2',
            facebook: 'SocialTools__facebook___3tojW',
            youtube: 'SocialTools__youtube___gGJFS',
            rss: 'SocialTools__rss___2Wgb-',
            linkedin: 'SocialTools__linkedin___rYZd4',
            instagram: 'SocialTools__instagram___38SVl',
            email: 'SocialTools__email___1O9y9',
            link: 'SocialTools__link___wCGCZ',
            wechat: 'SocialTools__wechat___187--',
          };
          function Tn (e) {
            return function () {
              window.open(e, '_blank');
            };
          }
          function En (e) {
            var t = e.className,
              n = e.color,
              o = e.borderless,
              a = e.url,
              i = L()(Sn.icon, Sn.youtube, Sn[n], o ? Sn.borderless : void 0, t);
            return r.a.createElement(
              'button',
              { 'aria-label': 'YouTube', type: 'button', className: i, onClick: Tn(a) },
              r.a.createElement(
                'svg',
                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 17.01 11.94' },
                r.a.createElement('path', {
                  d:
                    'M12 6L6.11 9.27V2.69zm5.5 3V2.92A2.94 2.94 0 0 0 14.4 0H2.6S-.5 0-.5 2.92V9a2.93 2.93 0 0 0 3.1 3h11.8s3.1 0 3.1-3',
                })
              )
            );
          }
          (En.Color = yn),
            (En.propTypes = {
              className: i.a.string,
              color: i.a.oneOf(Object.values(yn)),
              borderless: i.a.bool,
              url: i.a.string,
            }),
            (En.defaultProps = { color: yn.GRAY_TO_ORIGINAL, borderless: !1 });
          var kn = En;
          n(197);
          var Cn = {
            container: 'SocialTools__container___3rfoZ',
            icon: 'SocialTools__icon___MYRE6',
            borderless: 'SocialTools__borderless___368d9',
            'always-gray': 'SocialTools__always-gray___2pIVP',
            'gray-to-original': 'SocialTools__gray-to-original___1Duya',
            'always-white': 'SocialTools__always-white___2j03w',
            'white-to-original': 'SocialTools__white-to-original___2tdRg',
            'white-to-orange': 'SocialTools__white-to-orange___2o6Ku',
            twitter: 'SocialTools__twitter___1EoE2',
            facebook: 'SocialTools__facebook___3tojW',
            youtube: 'SocialTools__youtube___gGJFS',
            rss: 'SocialTools__rss___2Wgb-',
            linkedin: 'SocialTools__linkedin___rYZd4',
            instagram: 'SocialTools__instagram___38SVl',
            email: 'SocialTools__email___1O9y9',
            link: 'SocialTools__link___wCGCZ',
            wechat: 'SocialTools__wechat___187--',
          };
          function Pn (e) {
            return function () {
              window.open(e, '_blank');
            };
          }
          function On (e) {
            var t = e.className,
              n = e.color,
              o = e.borderless,
              a = e.url,
              i = L()(Cn.icon, Cn.instagram, Cn[n], o ? Cn.borderless : void 0, t);
            return r.a.createElement(
              'button',
              { 'aria-label': 'Instagram', type: 'button', className: i, onClick: Pn(a) },
              r.a.createElement(
                'svg',
                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 14 14' },
                r.a.createElement('path', {
                  d:
                    'M7 4.7c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c1.3 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3z',
                }),
                r.a.createElement('path', {
                  d:
                    'M14 4.1c0-.6-.1-1.2-.3-1.7-.4-.9-1.1-1.7-2-2C11 .2 10.5.1 9.9 0H4.1C3.5.1 3 .2 2.4.4c-.9.4-1.7 1.1-2 2C.2 3 .1 3.5 0 4.1v5.8c0 .6.1 1.2.3 1.7.4.9 1.1 1.7 2 2 .7.2 1.2.3 1.8.4h5.8c.6 0 1.2-.1 1.7-.3.9-.4 1.7-1.1 2-2 .2-.5.3-1.1.3-1.7V7.1c0-1.9.1-2.2.1-3zM10.6 7c0 2-1.6 3.6-3.6 3.6S3.4 9 3.4 7 5 3.4 7 3.4 10.6 5 10.6 7zm1-3.7c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8 0-.5.4-.8.8-.8.4-.1.8.3.8.8z',
                })
              )
            );
          }
          (On.Color = yn),
            (On.propTypes = {
              className: i.a.string,
              color: i.a.oneOf(Object.values(yn)),
              borderless: i.a.bool,
              url: i.a.string,
            }),
            (On.defaultProps = { color: yn.GRAY_TO_ORIGINAL, borderless: !1 });
          var xn = On;
          n(197);
          var jn = {
            container: 'SocialTools__container___3rfoZ',
            icon: 'SocialTools__icon___MYRE6',
            borderless: 'SocialTools__borderless___368d9',
            'always-gray': 'SocialTools__always-gray___2pIVP',
            'gray-to-original': 'SocialTools__gray-to-original___1Duya',
            'always-white': 'SocialTools__always-white___2j03w',
            'white-to-original': 'SocialTools__white-to-original___2tdRg',
            'white-to-orange': 'SocialTools__white-to-orange___2o6Ku',
            twitter: 'SocialTools__twitter___1EoE2',
            facebook: 'SocialTools__facebook___3tojW',
            youtube: 'SocialTools__youtube___gGJFS',
            rss: 'SocialTools__rss___2Wgb-',
            linkedin: 'SocialTools__linkedin___rYZd4',
            instagram: 'SocialTools__instagram___38SVl',
            email: 'SocialTools__email___1O9y9',
            link: 'SocialTools__link___wCGCZ',
            wechat: 'SocialTools__wechat___187--',
          };
          function An (e) {
            return function () {
              window.open(e, '_blank');
            };
          }
          function Nn (e) {
            var t = e.className,
              n = e.color,
              o = e.borderless,
              a = e.url,
              i = L()(jn.icon, jn.linkedin, jn[n], o ? jn.borderless : void 0, t);
            return r.a.createElement(
              'button',
              { 'aria-label': 'LinkedIn', type: 'button', className: i, onClick: An(a) },
              r.a.createElement(
                'svg',
                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 12 12' },
                r.a.createElement('path', {
                  d:
                    'M.1 12V3.6h2.6V12H.1M2.7 1.3c0 .7-.6 1.4-1.3 1.4C.6 2.7 0 2.1 0 1.4S.5 0 1.3 0h.1c.7 0 1.3.5 1.3 1.3 0-.1 0 0 0 0M9.4 12V7.4c0-1.1-.4-1.8-1.3-1.8-.6 0-1.1.4-1.3 1-.1.1-.1.4-.1.6V12H4.2V6.3c0-1 0-1.9-.1-2.7h2.2l.1 1.2C7 3.9 8 3.4 9 3.4c1.7 0 3 1.1 3 3.6v5H9.4',
                })
              )
            );
          }
          (Nn.Color = yn),
            (Nn.propTypes = {
              className: i.a.string,
              color: i.a.oneOf(Object.values(yn)),
              borderless: i.a.bool,
              url: i.a.string,
            }),
            (Nn.defaultProps = { color: yn.GRAY_TO_ORIGINAL, borderless: !1 });
          var Rn = Nn;
          n(197);
          var In = {
            container: 'SocialTools__container___3rfoZ',
            icon: 'SocialTools__icon___MYRE6',
            borderless: 'SocialTools__borderless___368d9',
            'always-gray': 'SocialTools__always-gray___2pIVP',
            'gray-to-original': 'SocialTools__gray-to-original___1Duya',
            'always-white': 'SocialTools__always-white___2j03w',
            'white-to-original': 'SocialTools__white-to-original___2tdRg',
            'white-to-orange': 'SocialTools__white-to-orange___2o6Ku',
            twitter: 'SocialTools__twitter___1EoE2',
            facebook: 'SocialTools__facebook___3tojW',
            youtube: 'SocialTools__youtube___gGJFS',
            rss: 'SocialTools__rss___2Wgb-',
            linkedin: 'SocialTools__linkedin___rYZd4',
            instagram: 'SocialTools__instagram___38SVl',
            email: 'SocialTools__email___1O9y9',
            link: 'SocialTools__link___wCGCZ',
            wechat: 'SocialTools__wechat___187--',
          };
          function Mn (e) {
            return function () {
              window.open(e, '_blank');
            };
          }
          function Ln (e) {
            var t = e.className,
              n = e.color,
              o = e.borderless,
              a = e.url,
              i = L()(In.icon, In.rss, In[n], o ? In.borderless : void 0, t);
            return r.a.createElement(
              'button',
              { 'aria-label': 'RSS', type: 'button', className: i, onClick: Mn(a) },
              r.a.createElement(
                'svg',
                { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 17.01 17.01' },
                r.a.createElement('path', {
                  d:
                    'M3.85 13.15a2.24 2.24 0 0 1 0 3.18 2.26 2.26 0 0 1-3.19 0 2.24 2.24 0 0 1 0-3.18 2.25 2.25 0 0 1 3.19 0zm0 0zM.66 16.33zM0 5.78V9a7.92 7.92 0 0 1 5.62 2.34A7.94 7.94 0 0 1 8 17h3.26a11.2 11.2 0 0 0-3.33-7.92A11.18 11.18 0 0 0 0 5.78zM0 0v3.25A13.78 13.78 0 0 1 13.75 17H17a17 17 0 0 0-5-12A17 17 0 0 0 0 0z',
                })
              )
            );
          }
          (Ln.Color = yn),
            (Ln.propTypes = {
              className: i.a.string,
              color: i.a.oneOf(Object.values(yn)),
              borderless: i.a.bool,
              url: i.a.string,
            }),
            (Ln.defaultProps = { color: yn.GRAY_TO_ORIGINAL, borderless: !1 });
          var Dn = Ln,
            Bn = function (e) {
              return r.a.createElement(
                'svg',
                e,
                r.a.createElement('path', {
                  d:
                    'M52.768 45.627a1.644 1.644 0 0 1 2.331 0l16.702 16.704c.283-.631.44-1.34.44-2.077V26.32c0-.625-.094-1.286-.268-1.954-.808 1.266-1.816 2.375-3.022 3.164L41.2 46.065c-1.5.962-3.295 1.372-5.08 1.379-1.782-.007-3.58-.417-5.078-1.379L3.293 27.53c-1.208-.789-2.22-1.897-3.023-3.164A7.802 7.802 0 0 0 0 26.32v33.934c0 .737.159 1.446.442 2.077l16.702-16.704a1.644 1.644 0 0 1 2.331 0 1.646 1.646 0 0 1 0 2.331L2.69 64.75a4.792 4.792 0 0 0 2.258.568h62.345c.813 0 1.58-.207 2.259-.568L52.768 47.958a1.65 1.65 0 0 1 0-2.331z',
                }),
                r.a.createElement('path', {
                  d:
                    'M68.056 19.222L40.309 1.115c-2.304-1.486-6.073-1.486-8.374 0L4.187 19.222c-.768.491-1.744 1.316-1.506 1.757.646 1.209 1.566 2.261 2.398 2.792l7.416 4.843v-5.662a4.952 4.952 0 0 1 4.95-4.954h37.354a4.95 4.95 0 0 1 4.946 4.954v5.662l7.419-4.843c.833-.531 1.752-1.583 2.398-2.792.238-.44-.738-1.266-1.506-1.757z',
                }),
                r.a.createElement('path', {
                  d:
                    'M25.423 28.893a1.65 1.65 0 1 1 0-3.3h21.396a1.651 1.651 0 0 1 0 3.3H25.423zM25.421 36.448a1.649 1.649 0 1 1 0-3.299h14.141a1.648 1.648 0 1 1 0 3.299H25.421z',
                })
              );
            };
          (Bn.defaultProps = {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 72.241 65.318',
          }),
            n(197);
          var Vn = {
            container: 'SocialTools__container___3rfoZ',
            icon: 'SocialTools__icon___MYRE6',
            borderless: 'SocialTools__borderless___368d9',
            'always-gray': 'SocialTools__always-gray___2pIVP',
            'gray-to-original': 'SocialTools__gray-to-original___1Duya',
            'always-white': 'SocialTools__always-white___2j03w',
            'white-to-original': 'SocialTools__white-to-original___2tdRg',
            'white-to-orange': 'SocialTools__white-to-orange___2o6Ku',
            twitter: 'SocialTools__twitter___1EoE2',
            facebook: 'SocialTools__facebook___3tojW',
            youtube: 'SocialTools__youtube___gGJFS',
            rss: 'SocialTools__rss___2Wgb-',
            linkedin: 'SocialTools__linkedin___rYZd4',
            instagram: 'SocialTools__instagram___38SVl',
            email: 'SocialTools__email___1O9y9',
            link: 'SocialTools__link___wCGCZ',
            wechat: 'SocialTools__wechat___187--',
          };
          function Fn (e) {
            return function () {
              window.open(e, '_self');
            };
          }
          function Un (e) {
            var t,
              n,
              o,
              a = e.className,
              i = e.color,
              l = e.borderless,
              c = e.share,
              s = e.translations,
              u = L()(Vn.icon, Vn.email, Vn[i], l ? Vn.borderless : void 0, a);
            return r.a.createElement(
              'button',
              {
                'aria-label': s.email,
                className: u,
                onClick: Fn(
                  ((t = c),
                  (n = t.title),
                  (o = t.url),
                  'mailto:?subject=' + encodeURIComponent(n) + '&body=' + encodeURIComponent(o))
                ),
              },
              r.a.createElement(Bn, null)
            );
          }
          (Un.Color = yn),
            (Un.propTypes = {
              className: i.a.string,
              color: i.a.oneOf(Object.values(yn)),
              borderless: i.a.bool,
              share: i.a.shape({ url: i.a.string.isRequired, title: i.a.string.isRequired })
                .isRequired,
              translations: i.a.shape({ email: i.a.string }),
            }),
            (Un.defaultProps = {
              color: yn.GRAY_TO_ORIGINAL,
              borderless: !1,
              translations: { email: 'Email' },
            });
          var Gn = Un,
            Hn =
              (n(301),
              function (e) {
                return r.a.createElement(
                  'svg',
                  e,
                  r.a.createElement('path', {
                    d:
                      'M150.2 105.3l15.6-14.6c5.2-5 5.2-13.3 0-18.3s-13.7-5-18.4 0l-15.1 15-3.3-2.7a14.6 14.6 0 0 1 0-21.4l32.6-32c3.3-2.8 7-4.6 11.3-4.6 4.2 0 8.5 1.8 11.3 4.6L208.8 55a14 14 0 0 1 4.7 11c0 4.6-2 7.8-4.7 11l-32.6 31.5a16 16 0 0 1-22.2 0l-3.8-3.2zm-123.6 63c0-4 1.9-7.7 4.7-10.5L64 126.3c2.8-3.2 6.6-5 11.3-5 4.2 0 8 1.8 11.3 5l3.3 2.8s-14.6 14.1-15.5 14.6c-5.2 5-5.2 13.2 0 17.8 5.1 5 13.6 5 18.8 0l15.1-15 2.4 3.1a14.6 14.6 0 0 1 0 21.5l-32.6 32c-6.1 6-16.5 6-22.2 0l-24.5-23.8a15.7 15.7 0 0 1-4.7-11zm-14.2-28.7a39.2 39.2 0 0 0 0 57L37 220.5a42.9 42.9 0 0 0 59.4 0L129 189a41.3 41.3 0 0 0 12.3-28.8c0-11-4.8-21-12.3-28.8l-3.3-3.2 6.1-5.9 2.9 3.2a46 46 0 0 0 29.7 11.9c11.3 0 21.7-4.6 29.7-11.9L226.7 94c8-8 12.3-18 12.3-29s-4.3-21-12.3-28.8L202 12.6a42 42 0 0 0-29.7-12 42 42 0 0 0-29.7 12L110 44a39.4 39.4 0 0 0-12.3 28.8c0 11 4.8 21 12.3 28.8l3.3 2.7-6.1 6-3.3-2.8a40.2 40.2 0 0 0-29.3-11.9 44.1 44.1 0 0 0-29.6 12l-32.6 32z',
                  })
                );
              });
          (Hn.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 239 233' }),
            n(197);
          var zn = {
            container: 'SocialTools__container___3rfoZ',
            icon: 'SocialTools__icon___MYRE6',
            borderless: 'SocialTools__borderless___368d9',
            'always-gray': 'SocialTools__always-gray___2pIVP',
            'gray-to-original': 'SocialTools__gray-to-original___1Duya',
            'always-white': 'SocialTools__always-white___2j03w',
            'white-to-original': 'SocialTools__white-to-original___2tdRg',
            'white-to-orange': 'SocialTools__white-to-orange___2o6Ku',
            twitter: 'SocialTools__twitter___1EoE2',
            facebook: 'SocialTools__facebook___3tojW',
            youtube: 'SocialTools__youtube___gGJFS',
            rss: 'SocialTools__rss___2Wgb-',
            linkedin: 'SocialTools__linkedin___rYZd4',
            instagram: 'SocialTools__instagram___38SVl',
            email: 'SocialTools__email___1O9y9',
            link: 'SocialTools__link___wCGCZ',
            wechat: 'SocialTools__wechat___187--',
          };
          function Wn (e) {
            var t = document.createElement('input');
            (t.type = 'text'),
              (t.value = e),
              document.body.append(t),
              t.select(),
              t.setSelectionRange(0, 99999),
              document.execCommand('copy'),
              document.body.removeChild(t);
          }
          function Yn (e) {
            var t = e.className,
              n = e.color,
              o = e.borderless,
              a = e.share,
              i = e.translations,
              l = L()(zn.icon, zn.link, zn[n], o ? zn.borderless : void 0, t);
            return r.a.createElement(
              'button',
              { 'aria-label': i.copyLink, className: l, onClick: Wn.bind(null, a.url) },
              r.a.createElement(Hn, null)
            );
          }
          (Yn.Color = yn),
            (Yn.propTypes = {
              className: i.a.string,
              color: i.a.oneOf(Object.values(yn)),
              borderless: i.a.bool,
              share: i.a.shape({ url: i.a.string.isRequired }).isRequired,
              translations: i.a.shape({ copyLink: i.a.string }),
            }),
            (Yn.defaultProps = {
              color: yn.GRAY_TO_ORIGINAL,
              borderless: !1,
              translations: { copyLink: 'Copy link' },
            });
          var Zn = Yn;
          n(63), n(62);
          n(232);
          var qn = {
              Lightbox: 'Lightbox__Lightbox___3l8oM',
              appear: 'Lightbox__appear___3porg',
              enter: 'Lightbox__enter___VYxE_',
              exit: 'Lightbox__exit___1y3GZ',
              'appear-active': 'Lightbox__appear-active___3lTiv',
              'enter-active': 'Lightbox__enter-active___3Y3HE',
              'exit-active': 'Lightbox__exit-active___2GlAM',
              'exit-done': 'Lightbox__exit-done___3sSYX',
              'enter-done': 'Lightbox__enter-done___2lMKl',
            },
            Kn = function (e) {
              var t = e.children,
                n = e.onClickExit,
                o = e.shown;
              return r.a.createElement(
                Rt.a,
                {
                  classNames: {
                    appear: qn.appear,
                    apperActive: qn['appear-active'],
                    appearDone: qn['appear-done'],
                    enter: qn.enter,
                    enterActive: qn['enter-active'],
                    enterDone: qn['enter-done'],
                    exit: qn.exit,
                    exitActive: qn['exit-active'],
                    exitDone: qn['exit-done'],
                  },
                  in: o,
                  timeout: 300,
                },
                r.a.createElement('div', { className: qn.Lightbox, onClick: n }, o && t)
              );
            };
          (Kn.propTypes = { shown: i.a.bool, onClickExit: i.a.func.isRequired }),
            (Kn.defaultProps = { shown: !1 });
          var Jn = Kn;
          function Xn (e) {
            return (Xn =
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
          function Qn (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          }
          function $n (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function eo (e, t) {
            return (eo =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function to (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = oo(e);
              if (t) {
                var r = oo(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return no(this, n);
            };
          }
          function no (e, t) {
            return !t || ('object' !== Xn(t) && 'function' != typeof t)
              ? (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e)
              : t;
          }
          function oo (e) {
            return (oo = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function ro (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(233);
          var ao = 'QRModal__qrcode___1Xnu5',
            io = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && eo(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = to(i);
              function i () {
                return Qn(this, i), a.apply(this, arguments);
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'render',
                    value: function () {
                      var e = /\.(jpg|gif|png)$/.test(this.props.url)
                        ? this.props.url
                        : '/resources_v2/images/qrcode_reuterschina.jpg';
                      return r.a.createElement(
                        Jn,
                        { shown: this.props.shown, onClickExit: this.props.closeModal },
                        r.a.createElement('img', { src: e, className: ao })
                      );
                    },
                  },
                ]) && $n(t.prototype, n),
                o && $n(t, o),
                i
              );
            })(o.Component);
          function lo (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                  o = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(o = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
                    o = !0
                  );
                } catch (e) {
                  (r = !0), (a = e);
                } finally {
                  try {
                    o || null == l.return || l.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                return n;
              })(e, t) ||
              (function (e, t) {
                if (!e) return;
                if ('string' == typeof e) return co(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                'Object' === n && e.constructor && (n = e.constructor.name);
                if ('Map' === n || 'Set' === n) return Array.from(e);
                if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                  return co(e, t);
              })(e, t) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()
            );
          }
          function co (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
          }
          ro(io, 'propTypes', { url: i.a.string, shown: i.a.bool }),
            ro(io, 'defaultProps', { shown: !1 }),
            n(197);
          var so = {
              container: 'SocialTools__container___3rfoZ',
              icon: 'SocialTools__icon___MYRE6',
              borderless: 'SocialTools__borderless___368d9',
              'always-gray': 'SocialTools__always-gray___2pIVP',
              'gray-to-original': 'SocialTools__gray-to-original___1Duya',
              'always-white': 'SocialTools__always-white___2j03w',
              'white-to-original': 'SocialTools__white-to-original___2tdRg',
              'white-to-orange': 'SocialTools__white-to-orange___2o6Ku',
              twitter: 'SocialTools__twitter___1EoE2',
              facebook: 'SocialTools__facebook___3tojW',
              youtube: 'SocialTools__youtube___gGJFS',
              rss: 'SocialTools__rss___2Wgb-',
              linkedin: 'SocialTools__linkedin___rYZd4',
              instagram: 'SocialTools__instagram___38SVl',
              email: 'SocialTools__email___1O9y9',
              link: 'SocialTools__link___wCGCZ',
              wechat: 'SocialTools__wechat___187--',
            },
            uo = function (e) {
              var t = e.className,
                n = e.color,
                a = e.borderless,
                i = lo(Object(o.useState)(!1), 2),
                l = i[0],
                c = i[1],
                s = function () {
                  return c(!l);
                },
                u = L()(so.icon, so.wechat, so[n], a ? so.borderless : void 0, t);
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  'button',
                  { 'aria-label': 'WeChat', type: 'button', className: u, onClick: s },
                  r.a.createElement(
                    'svg',
                    { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 17 15' },
                    r.a.createElement('path', {
                      d:
                        'M11.7963779,4.85862595 C10.2253053,4.94070611 8.85914122,5.41696565 7.74998855,6.49296183 C6.62935115,7.58005344 6.11779389,8.91215267 6.25762214,10.5634885 C5.6435458,10.4874427 5.08423282,10.4037405 4.52174046,10.356374 C4.32747328,10.3400229 4.09693511,10.3632519 3.9323855,10.4561031 C3.38617939,10.7643092 2.86255344,11.1122901 2.24192366,11.5002405 C2.35579771,10.9851794 2.42950763,10.5341603 2.55999237,10.1003359 C2.65595802,9.78148855 2.61151145,9.60402672 2.31777481,9.39639313 C0.431812977,8.06487786 -0.363164122,6.07217939 0.231770992,4.02062977 C0.782194656,2.12272901 2.13388931,0.971725191 3.97053817,0.371729008 C6.47738931,-0.447125954 9.29465267,0.388145038 10.8190076,2.37844275 C11.3695611,3.09737405 11.7071603,3.90429008 11.7963779,4.85862595 Z M4.56573282,4.21937405 C4.58020229,3.84414122 4.25506107,3.50608779 3.8688626,3.49479771 C3.47345038,3.48318321 3.14824427,3.78535496 3.13669466,4.17499237 C3.12501527,4.5698855 3.42705725,4.88633206 3.82532443,4.8964542 C4.22015267,4.90644656 4.55113359,4.6038855 4.56573282,4.21937405 Z M8.33824046,3.49453817 C7.9506145,3.50167557 7.62307252,3.83181298 7.62995038,4.20853817 C7.6370229,4.59901908 7.95833588,4.9045 8.35692748,4.89969847 C8.75655725,4.89489695 9.0596374,4.58617176 9.05587405,4.18745038 C9.05256489,3.79606107 8.73267939,3.48733588 8.33824046,3.49453817 Z',
                    }),
                    r.a.createElement('path', {
                      d:
                        'M15.3260191,14.6530916 C14.828542,14.4315725 14.3722023,14.099229 13.8863397,14.0484885 C13.4023588,13.9979427 12.8935916,14.277145 12.3872252,14.3289237 C10.8448321,14.4867252 9.46303053,14.0568588 8.32364122,13.0031832 C6.15666031,10.9988702 6.46629389,7.92563359 8.97340458,6.28312214 C11.2016374,4.82332824 14.4694656,5.30996947 16.0404733,7.3355 C17.4114389,9.10298092 17.2503282,11.4492405 15.5766718,12.9340802 C15.0923664,13.3638168 14.918084,13.7174427 15.2288206,14.283958 C15.2861794,14.3885534 15.2927328,14.5209847 15.3260191,14.6530916 L15.3260191,14.6530916 Z M9.66320229,9.17033206 C9.9799084,9.17065649 10.2406832,8.92279389 10.252687,8.60998092 C10.2653397,8.27880534 9.99898473,8.00103053 9.66735496,7.99966794 C9.33903435,7.99817557 9.06398473,8.27984351 9.07540458,8.60608779 C9.08617557,8.91779771 9.34876718,9.16994275 9.66320229,9.17033206 Z M13.3137252,8.00096565 C13.0064275,7.99882443 12.7453282,8.2503855 12.7328053,8.5608626 C12.7195038,8.89288168 12.9775534,9.16553053 13.3061336,9.16637405 C13.6239427,9.16741221 13.8750496,8.92707634 13.8865992,8.61082443 C13.8989275,8.27802672 13.6407481,8.00323664 13.3137252,8.00096565 L13.3137252,8.00096565 Z',
                    })
                  )
                ),
                r.a.createElement(io, {
                  url: 'https://cn.reuters.com/resources_v2/images/qrcode_reuterschina.jpg',
                  shown: l,
                  closeModal: s,
                })
              );
            };
          (uo.Color = yn),
            (uo.propTypes = {
              className: i.a.string,
              color: i.a.oneOf(Object.values(yn)),
              borderless: i.a.bool,
              url: i.a.string,
              handleOnClickExit: i.a.func,
            }),
            (uo.defaultProps = { color: yn.GRAY_TO_ORIGINAL, borderless: !1 });
          var _o = uo;
          function po (e) {
            return (po =
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
          function fo () {
            return (fo =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }).apply(this, arguments);
          }
          function yo (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          }
          function mo (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function ho (e, t) {
            return (ho =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function bo (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = vo(e);
              if (t) {
                var r = vo(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return go(this, n);
            };
          }
          function go (e, t) {
            return !t || ('object' !== po(t) && 'function' != typeof t)
              ? (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e)
              : t;
          }
          function vo (e) {
            return (vo = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function wo (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(197);
          var So = 'SocialTools__container___3rfoZ',
            To = {
              FACEBOOK: 'facebook',
              TWITTER: 'twitter',
              YOUTUBE: 'youtube',
              INSTAGRAM: 'instagram',
              LINKEDIN: 'linkedin',
              RSS: 'rss',
              EMAIL: 'email',
              LINK: 'link',
              WECHAT: 'wechat',
            },
            Eo = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && ho(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = bo(i);
              function i () {
                return yo(this, i), a.apply(this, arguments);
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'renderSocialButton',
                    value: function (e, t, n, o, a, i, l) {
                      var c = { key: i, color: n, borderless: o, url: e[l] };
                      switch (i) {
                        case To.FACEBOOK:
                          return r.a.createElement(bn, fo({}, c, { share: t }));
                        case To.TWITTER:
                          return r.a.createElement(wn, fo({}, c, { share: t }));
                        case To.YOUTUBE:
                          return r.a.createElement(kn, c);
                        case To.INSTAGRAM:
                          return r.a.createElement(xn, c);
                        case To.LINKEDIN:
                          return r.a.createElement(Rn, c);
                        case To.RSS:
                          return r.a.createElement(Dn, c);
                        case To.EMAIL:
                          return r.a.createElement(Gn, fo({}, c, { share: t }));
                        case To.LINK:
                          return r.a.createElement(Zn, fo({}, c, { share: t }));
                        case To.WECHAT:
                          return r.a.createElement(_o, fo({}, c, { share: t, handleOnClick: a }));
                        default:
                          return null;
                      }
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.urls,
                        n = e.share,
                        o = e.color,
                        a = e.borderless,
                        i = e.onClickWeChat;
                      return r.a.createElement(
                        'div',
                        { className: L()(So, this.props.className) },
                        this.props.platforms.map(this.renderSocialButton.bind(null, t, n, o, a, i))
                      );
                    },
                  },
                ]) && mo(t.prototype, n),
                o && mo(t, o),
                i
              );
            })(o.PureComponent);
          wo(Eo, 'propTypes', {
            className: i.a.string,
            platforms: i.a.array.isRequired,
            urls: i.a.arrayOf(i.a.string),
            share: i.a.shape({ title: i.a.string.isRequired, url: i.a.string.isRequired }),
            color: i.a.oneOf(Object.values(yn)),
            borderless: i.a.bool,
          }),
            wo(Eo, 'defaultProps', { urls: [], color: yn.GRAY_TO_ORIGINAL, borderless: !1 }),
            wo(Eo, 'Platform', To),
            wo(Eo, 'Color', yn);
          var ko = Eo;
          function Co (e) {
            return (Co =
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
          function Po (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          }
          function Oo (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function xo (e, t) {
            return (xo =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function jo (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = No(e);
              if (t) {
                var r = No(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return Ao(this, n);
            };
          }
          function Ao (e, t) {
            return !t || ('object' !== Co(t) && 'function' != typeof t)
              ? (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e)
              : t;
          }
          function No (e) {
            return (No = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function Ro (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(234);
          var Io = {
              container: 'ShareOverlay__container___2eDDD',
              title: 'ShareOverlay__title___1XyUA',
            },
            Mo = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && xo(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = jo(i);
              function i () {
                return Po(this, i), a.apply(this, arguments);
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = e.share,
                        a = e.translations,
                        i = e.onClickToClose;
                      return r.a.createElement(
                        'div',
                        { className: t, style: n },
                        r.a.createElement(
                          'div',
                          { className: Io.container, onClick: i },
                          r.a.createElement(
                            'div',
                            null,
                            r.a.createElement(D.a, {
                              className: Io.title,
                              text: a.share_this_story,
                              font: D.a.Font.REGULAR,
                              color: D.a.Color.WHITE,
                            }),
                            r.a.createElement(
                              'div',
                              { className: Io['share-buttons'] },
                              r.a.createElement(ko, {
                                platforms: ['facebook', 'twitter', 'email', 'link'],
                                share: o,
                                borderless: !0,
                                color: ko.Color.WHITE_TO_ORANGE,
                              })
                            )
                          )
                        )
                      );
                    },
                  },
                ]) && Oo(t.prototype, n),
                o && Oo(t, o),
                i
              );
            })(o.PureComponent);
          Ro(Mo, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            share: i.a.shape({ url: i.a.string.isRequired, title: i.a.string.isRequired }),
            translations: i.a.shape({ share_this_story: i.a.string }),
            onClickToClose: i.a.func,
          }),
            Ro(Mo, 'defaultProps', { onClickToClose: function () {} });
          var Lo = Mo;
          function Do (e) {
            return (Do =
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
          function Bo (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function Vo (e, t) {
            return (Vo =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function Fo (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = Ho(e);
              if (t) {
                var r = Ho(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return Uo(this, n);
            };
          }
          function Uo (e, t) {
            return !t || ('object' !== Do(t) && 'function' != typeof t) ? Go(e) : t;
          }
          function Go (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function Ho (e) {
            return (Ho = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function zo (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var Wo = (function (e) {
            !(function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function');
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Vo(e, t);
            })(i, e);
            var t,
              n,
              o,
              a = Fo(i);
            function i (e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, i),
                zo(Go((t = a.call(this, e))), 'supportTouch', function () {
                  return 'ontouchstart' in window;
                }),
                zo(Go(t), 'createCountdown', function (e, t) {
                  var n;
                  return {
                    start: function () {
                      window.clearTimeout(n), (n = window.setTimeout(t, e));
                    },
                    stop: function () {
                      window.clearTimeout(n);
                    },
                  };
                }),
                zo(Go(t), 'handleMouseEnter', function () {
                  if (t.supportTouch()) return !1;
                  t.setState({ toggle: !0 }, t.countdown.start), t.props.onToggle(!0);
                }),
                zo(Go(t), 'handleMouseMove', function (e) {
                  if (t.supportTouch()) return !1;
                  t.countdown.start(),
                    t.state.toggle || (t.setState({ toggle: !0 }), t.props.onToggle(!0));
                }),
                zo(Go(t), 'handleMouseLeave', function () {
                  if (t.supportTouch()) return !1;
                  t.setState({ toggle: !1 }, t.countdown.stop), t.props.onToggle(!1);
                }),
                zo(Go(t), 'handleTouchStart', function () {
                  var e = !t.state.toggle;
                  t.setState({ toggle: e }), t.props.onToggle(e);
                }),
                zo(Go(t), 'handleTouchMove', function () {
                  t.countdown.stop(),
                    t.state.toggle || (t.setState({ toggle: !0 }), t.props.onToggle(!0));
                }),
                zo(Go(t), 'handleTouchEnd', function () {
                  t.state.toggle && t.countdown.start();
                }),
                zo(Go(t), 'handleCountdownComplete', function () {
                  t.setState({ toggle: !1 }), t.props.onToggle(!1);
                }),
                (t.state = { toggle: !1 }),
                (t.countdown = t.createCountdown(4000, t.handleCountdownComplete)),
                t
              );
            }
            return (
              (t = i),
              (n = [
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.countdown.stop(), (this.countdown = null);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.className,
                      n = e.style,
                      o = e.children;
                    return r.a.createElement(
                      'div',
                      {
                        className: t,
                        style: n,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove,
                        onTouchEnd: this.handleTouchEnd,
                        onTouchCancel: this.handleTouchEnd,
                      },
                      o
                    );
                  },
                },
              ]) && Bo(t.prototype, n),
              o && Bo(t, o),
              i
            );
          })(o.PureComponent);
          zo(Wo, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            children: i.a.node,
            onToggle: i.a.func,
          }),
            zo(Wo, 'defaultProps', { onToggle: function () {} });
          var Yo = Wo,
            Zo = n(266);
          function qo (e) {
            return (qo =
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
          function Ko (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          }
          function Jo (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function Xo (e, t) {
            return (Xo =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function Qo (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = tr(e);
              if (t) {
                var r = tr(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return $o(this, n);
            };
          }
          function $o (e, t) {
            return !t || ('object' !== qo(t) && 'function' != typeof t) ? er(e) : t;
          }
          function er (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function tr (e) {
            return (tr = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function nr (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var or = function (e) {
            return r.a.createElement(
              'svg',
              e,
              r.a.createElement('path', {
                d:
                  'M11.8 10.4l8.7-8.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L10.4 9 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.3L9 10.4.3 19.1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.3 0l8.7-8.7 8.7 8.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.3l-8.6-8.8z',
              })
            );
          };
          (or.defaultProps = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20.8 20.8' }),
            n(236);
          var rr = 'NextUpTooltip__container___1AIF5',
            ar = 'NextUpTooltip__image___14_l2',
            ir = 'NextUpTooltip__text-container___3PqkI',
            lr = 'NextUpTooltip__next-up___3-wUc',
            cr = 'NextUpTooltip__title___2SJ-z',
            sr = 'NextUpTooltip__close-button___11AR6',
            ur = 'NextUpTooltip__close___34wvT',
            _r = 'NextUpTooltip__appear___1l81t',
            pr = 'NextUpTooltip__enter___1e_D7',
            fr = 'NextUpTooltip__appear-active___3Juki',
            dr = 'NextUpTooltip__enter-active___t9LxB',
            yr = 'NextUpTooltip__enter-done___1DL96',
            mr = 'NextUpTooltip__exit___1fQEb',
            hr = 'NextUpTooltip__exit-active___2yU3x',
            br = 'NextUpTooltip__exit-done___291XK',
            gr = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Xo(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = Qo(i);
              function i () {
                var e;
                Ko(this, i);
                for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                  n[o] = arguments[o];
                return (
                  nr(er((e = a.call.apply(a, [this].concat(n)))), 'state', {
                    dismissed: !1,
                    item: null,
                  }),
                  nr(er(e), 'handleClick', function () {
                    e.props.onClick(e.props.item);
                  }),
                  nr(er(e), 'handleClickClose', function () {
                    e.setState({ dismissed: !0 });
                  }),
                  e
                );
              }
              return (
                (t = i),
                (o = [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (e, t) {
                      return e.item !== t.item ? { item: e.item, dismissed: !1 } : null;
                    },
                  },
                ]),
                (n = [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = e.show,
                        a = this.state,
                        l = a.item,
                        c = a.dismissed,
                        s = o && !c,
                        u = Object.assign(
                          {},
                          i.defaultProps.translations,
                          this.props.translations
                        );
                      return r.a.createElement(
                        'div',
                        { className: t, style: n },
                        r.a.createElement(
                          Rt.a,
                          {
                            timeout: 100,
                            in: s,
                            mountOnEnter: !0,
                            unmountOnExit: !0,
                            classNames: {
                              appear: _r,
                              appearActive: fr,
                              enter: pr,
                              enterActive: dr,
                              enterDone: yr,
                              exit: mr,
                              exitActive: hr,
                              exitDone: br,
                            },
                          },
                          r.a.createElement(
                            'div',
                            { className: rr },
                            r.a.createElement(Zo.a, {
                              className: ar,
                              src: l.image,
                              fill_mode: Zo.a.FillMode.COVER,
                              alt: l.title,
                              onClick: this.handleClick,
                            }),
                            r.a.createElement(
                              'div',
                              { className: ir, onClick: this.handleClick },
                              r.a.createElement(D.a, {
                                className: lr,
                                text: u.next_up,
                                font: D.a.Font.SMALL_ALL_CAPS,
                                color: D.a.Color.WHITE,
                              }),
                              r.a.createElement(D.a, {
                                className: cr,
                                text: l.title,
                                font: D.a.Font.REGULAR,
                                color: D.a.Color.WHITE,
                              })
                            ),
                            r.a.createElement(
                              'button',
                              {
                                className: sr,
                                onClick: this.handleClickClose,
                                'aria-label': u.close,
                              },
                              r.a.createElement(or, { className: ur })
                            )
                          )
                        )
                      );
                    },
                  },
                ]) && Jo(t.prototype, n),
                o && Jo(t, o),
                i
              );
            })(o.PureComponent);
          nr(gr, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            item: i.a.shape({ title: i.a.string, image: i.a.string }),
            translations: i.a.shape({ next_up: i.a.string, close: i.a.string }),
            show: i.a.bool,
            onClick: i.a.func,
          }),
            nr(gr, 'defaultProps', {
              show: !0,
              translations: { next_up: 'Next Up', close: 'Close' },
              onClick: function () {},
            });
          var vr = gr;
          function wr (e) {
            return (wr =
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
          function Sr (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function Tr (e, t) {
            return (Tr =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function Er (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = Pr(e);
              if (t) {
                var r = Pr(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return kr(this, n);
            };
          }
          function kr (e, t) {
            return !t || ('object' !== wr(t) && 'function' != typeof t) ? Cr(e) : t;
          }
          function Cr (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function Pr (e) {
            return (Pr = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function Or (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(237);
          var xr = 'ProgressButton__container___3pUzk',
            jr = 'ProgressButton__inner___2_uED',
            Ar = 'ProgressButton__progress___33TJo',
            Nr = 'ProgressButton__meter___2bgXv',
            Rr = 'ProgressButton__value___3t9ah',
            Ir = 'ProgressButton__countdown___3TRth',
            Mr = 'ProgressButton__play-button___3Lyzz',
            Lr = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Tr(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = Er(i);
              function i (e) {
                var t;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, i),
                  Or(Cr((t = a.call(this, e))), 'calculateDashOffset', function (e) {
                    return t.circumference * (1 - e);
                  }),
                  (t.radius = 54),
                  (t.circumference = 2 * Math.PI * t.radius),
                  t
                );
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = e.progress,
                        a = e.countdown,
                        i = e.paused,
                        l = e.translations,
                        c = e.onClickToPlay,
                        s = e.onClickToPause,
                        u = L()(Rr, a && Ir),
                        _ = a
                          ? { animationDuration: a }
                          : { strokeDashoffset: this.calculateDashOffset(o) };
                      return r.a.createElement(
                        'div',
                        { className: t, style: n },
                        r.a.createElement(
                          'div',
                          { className: xr },
                          r.a.createElement(
                            'div',
                            { className: jr },
                            r.a.createElement(
                              'svg',
                              { className: Ar, viewBox: '0 0 120 120' },
                              r.a.createElement('circle', {
                                className: Nr,
                                cx: '60',
                                cy: '60',
                                r: this.radius,
                              }),
                              r.a.createElement('circle', {
                                className: u,
                                style: _,
                                cx: '60',
                                cy: '60',
                                r: this.radius,
                                strokeDasharray: this.circumference,
                              })
                            ),
                            r.a.createElement(Z, {
                              className: Mr,
                              paused: i,
                              translations: l,
                              onClickToPlay: c,
                              onClickToPause: s,
                            })
                          )
                        )
                      );
                    },
                  },
                ]) && Sr(t.prototype, n),
                o && Sr(t, o),
                i
              );
            })(o.PureComponent);
          Or(Lr, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            progress: i.a.number,
            countdown: i.a.string,
            paused: i.a.bool,
            translations: i.a.shape({ play: i.a.string, pause: i.a.string }),
            onClickToPlay: i.a.func,
            onClickToPause: i.a.func,
          }),
            Or(Lr, 'defaultProps', { progress: 0 });
          var Dr = Lr;
          function Br (e) {
            return (Br =
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
          function Vr (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function Fr (e, t, n) {
            return t && Vr(e.prototype, t), n && Vr(e, n), e;
          }
          function Ur (e, t) {
            return (Ur =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function Gr (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = Wr(e);
              if (t) {
                var r = Wr(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return Hr(this, n);
            };
          }
          function Hr (e, t) {
            return !t || ('object' !== Br(t) && 'function' != typeof t) ? zr(e) : t;
          }
          function zr (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function Wr (e) {
            return (Wr = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function Yr (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(238);
          var Zr = 'TeaserScreen__container___YAnL0',
            qr = 'TeaserScreen__background___IUmV1',
            Kr = 'TeaserScreen__content___3DaIZ',
            Jr = 'TeaserScreen__button-container___Cj4n-',
            Xr = 'TeaserScreen__progress-button___2ZgZX',
            Qr = 'TeaserScreen__spinner___2em1w',
            $r = 'TeaserScreen__title___3Swn-',
            ea = 'TeaserScreen__duration___3bByA',
            ta = 'TeaserScreen__hidden___2Fm0y',
            na = 'TeaserScreen__appear___22t-2',
            oa = 'TeaserScreen__enter___1Xf7N',
            ra = 'TeaserScreen__appear-active___II5qC',
            aa = 'TeaserScreen__enter-active___221Je',
            ia = 'TeaserScreen__enter-done___3mTIb',
            la = 'TeaserScreen__exit___2oebx',
            ca = 'TeaserScreen__exit-active___1bYa9',
            sa = 'TeaserScreen__exit-done___2Nog4',
            ua = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Ur(e, t);
              })(n, e);
              var t = Gr(n);
              function n (e) {
                var o;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, n),
                  Yr(zr((o = t.call(this, e))), 'getWaitPromise', function () {
                    var e,
                      t,
                      n = Promise.resolve(),
                      o = function () {
                        t && t();
                      };
                    return {
                      start: function () {
                        return (
                          o(),
                          (n = n
                            .then(function () {
                              return new Promise(function (n, o) {
                                (e = window.setTimeout(n, 1500)), (t = o);
                              });
                            })
                            .catch(function () {
                              window.clearTimeout(e);
                            }))
                        );
                      },
                      stop: o,
                      when: function (e) {
                        return (n = n.then(e));
                      },
                    };
                  }),
                  Yr(zr(o), 'handleClickToPlay', function () {
                    o.props.onClickToPlay(o.props.item);
                  }),
                  (o.state = { fade_out: !1 }),
                  (o.wait_promise = o.getWaitPromise()),
                  o
                );
              }
              return (
                Fr(n, null, [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (e, t) {
                      return e.show && t.fade_out ? { fade_out: !1 } : null;
                    },
                  },
                ]),
                Fr(n, [
                  {
                    key: 'componentDidUpdate',
                    value: function (e) {
                      var t = this;
                      e.show !== this.props.show &&
                        (this.props.show
                          ? this.wait_promise.start()
                          : this.wait_promise.when(function () {
                              t.setState({ fade_out: !0 });
                            }));
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.wait_promise.stop();
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = e.item,
                        a = e.countdown,
                        i = e.toggle_play,
                        l = e.buffering,
                        c = e.ready,
                        s = e.translations,
                        u = this.state.fade_out,
                        _ = o.title,
                        p = o.image,
                        f = o.duration;
                      return r.a.createElement(
                        Rt.a,
                        {
                          timeout: 400,
                          in: !u,
                          mountOnEnter: !0,
                          unmountOnExit: !0,
                          classNames: {
                            appear: na,
                            appearActive: ra,
                            enter: oa,
                            enterActive: aa,
                            enterDone: ia,
                            exit: la,
                            exitActive: ca,
                            exitDone: sa,
                          },
                        },
                        r.a.createElement(
                          'div',
                          { className: t, style: n },
                          r.a.createElement(
                            'div',
                            { className: Zr },
                            r.a.createElement('div', {
                              className: qr,
                              style: p ? { backgroundImage: 'url('.concat(p, ')') } : void 0,
                            }),
                            r.a.createElement(
                              'div',
                              { className: Kr },
                              r.a.createElement(
                                'div',
                                { className: Jr },
                                c &&
                                  !l &&
                                  r.a.createElement(Dr, {
                                    className: Xr,
                                    paused: !i,
                                    countdown: a,
                                    translations: s,
                                    onClickToPlay: this.handleClickToPlay,
                                  }),
                                r.a.createElement(Yt, {
                                  className: Qr,
                                  color: Yt.Color.WHITE,
                                  show: !c || l,
                                })
                              ),
                              r.a.createElement(
                                'div',
                                null,
                                r.a.createElement(D.a, {
                                  className: $r,
                                  font: D.a.Font.MEDIUM,
                                  color: D.a.Color.WHITE,
                                  text: _,
                                }),
                                r.a.createElement(Ke, {
                                  className: L()(ea, !f && ta),
                                  duration: f,
                                })
                              )
                            )
                          )
                        )
                      );
                    },
                  },
                ]),
                n
              );
            })(o.PureComponent);
          Yr(ua, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            show: i.a.bool,
            toggle_play: i.a.bool,
            buffering: i.a.bool,
            ready: i.a.bool,
            countdown: i.a.string,
            item: i.a.shape({ title: i.a.string, image: i.a.string, duration: i.a.number }),
            translations: i.a.shape({ play: i.a.string, pause: i.a.string }),
            onClickToPlay: i.a.func,
          }),
            Yr(ua, 'defaultProps', {
              show: !0,
              toggle_play: !1,
              buffering: !1,
              ready: !1,
              onClickToPlay: function () {},
            });
          var _a = ua;
          function pa (e) {
            return (pa =
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
          function fa (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          }
          function da (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function ya (e, t) {
            return (ya =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function ma (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = ba(e);
              if (t) {
                var r = ba(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return ha(this, n);
            };
          }
          function ha (e, t) {
            return !t || ('object' !== pa(t) && 'function' != typeof t)
              ? (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e)
              : t;
          }
          function ba (e) {
            return (ba = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function ga (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(239);
          var va = 'ErrorScreen__container___vSD06',
            wa = 'ErrorScreen__background___1KcSq',
            Sa = 'ErrorScreen__message___3pJIt',
            Ta = (function (e) {
              !(function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && ya(e, t);
              })(i, e);
              var t,
                n,
                o,
                a = ma(i);
              function i () {
                return fa(this, i), a.apply(this, arguments);
              }
              return (
                (t = i),
                (n = [
                  {
                    key: 'render',
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        n = e.style,
                        o = (e.show, e.error),
                        a = (o.code, o.message);
                      return r.a.createElement(
                        'div',
                        { className: t, style: n },
                        r.a.createElement(
                          'div',
                          { className: va },
                          r.a.createElement('div', { className: wa }),
                          r.a.createElement(D.a, {
                            className: Sa,
                            font: D.a.Font.REGULAR,
                            color: D.a.Color.WHITE,
                            text: a,
                            tag: 'p',
                          })
                        )
                      );
                    },
                  },
                ]) && da(t.prototype, n),
                o && da(t, o),
                i
              );
            })(o.PureComponent);
          ga(Ta, 'propTypes', {
            className: i.a.string,
            style: i.a.object,
            show: i.a.bool,
            error: i.a.shape({ code: i.a.number, message: i.a.string }).isRequired,
          }),
            ga(Ta, 'defaultProps', { show: !0 });
          var Ea = Ta,
            ka = {
              en: {
                play: 'Play',
                pause: 'Pause',
                mute: 'Mute',
                unmute: 'Unmute',
                closed_captions: 'Closed Captions',
                default_mode: 'Default mode',
                theater_mode: 'Theater mode',
                fullscreen: 'Fullscreen',
                share_this_story: 'Share this story',
                next_up: 'Next up',
              },
              zh: {
                play: '播放',
                pause: '暂停',
                mute: '静音',
                unmute: '取消静音',
                closed_captions: '字幕',
                default_mode: '默认视图',
                theater_mode: '剧场模式',
                fullscreen: '全屏',
                share_this_story: '分享这条视频',
                next_up: '下一条视频',
              },
              ja: {
                play: '再生',
                pause: '一時停止',
                mute: 'ミュート',
                unmute: 'ミュート削除',
                closed_captions: '字幕',
                default_mode: 'デフォルト表示',
                theater_mode: 'シアターモード',
                fullscreen: '全画面',
                share_this_story: 'シェアする',
                next_up: '次の動画',
              },
            },
            Ca = function (e) {
              return ka[e];
            },
            Pa = Object.keys(ka),
            Oa = function (e) {
              return e.requestFullscreen
                ? e.requestFullscreen
                : e.webkitRequestFullscreen
                ? e.webkitRequestFullscreen
                : e.mozRequestFullScreen
                ? e.mozRequestFullScreen
                : e.msRequestFullscreen
                ? e.msRequestFullscreen
                : null;
            },
            xa = function () {
              return 'undefined' != typeof document && !!Oa(document.body);
            },
            ja = n(264);
          function Aa (e) {
            return (Aa =
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
          function Na (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function Ra (e, t) {
            return (Ra =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function Ia (e) {
            var t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                o = Da(e);
              if (t) {
                var r = Da(this).constructor;
                n = Reflect.construct(o, arguments, r);
              } else n = o.apply(this, arguments);
              return Ma(this, n);
            };
          }
          function Ma (e, t) {
            return !t || ('object' !== Aa(t) && 'function' != typeof t) ? La(e) : t;
          }
          function La (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function Da (e) {
            return (Da = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function Ba (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          n(240);
          var Va = {
              container: 'VideoPlayer__container___1ZKDQ',
              video: 'VideoPlayer__video___3LqxA',
              overlay: 'VideoPlayer__overlay___2ZH3o',
              hidden: 'VideoPlayer__hidden___27oQq',
              'ad-overlay': 'VideoPlayer__ad-overlay___1ikyh',
              'teaser-screen': 'VideoPlayer__teaser-screen___3FPM-',
              'error-screen': 'VideoPlayer__error-screen___3l6qc',
              'title-overlay': 'VideoPlayer__title-overlay___1YlQp',
              'ad-controls': 'VideoPlayer__ad-controls___3D2Lm',
              'story-controls': 'VideoPlayer__story-controls___2yPYM',
              group: 'VideoPlayer__group___1-jRi',
              'progress-controls': 'VideoPlayer__progress-controls___1dbUt',
              'play-button': 'VideoPlayer__play-button___3DtZB',
              'sound-button': 'VideoPlayer__sound-button___3A2-K',
              'cc-button': 'VideoPlayer__cc-button___2bDNR',
              'share-button': 'VideoPlayer__share-button___El0qM',
              'view-mode-button': 'VideoPlayer__view-mode-button___3idN3',
              'fullscreen-button': 'VideoPlayer__fullscreen-button___2CYS3',
              'next-up-tooltip': 'VideoPlayer__next-up-tooltip___3Zj26',
              elevated: 'VideoPlayer__elevated___37y12',
              'time-display': 'VideoPlayer__time-display___2d691',
              'ad-countdown': 'VideoPlayer__ad-countdown___ymTH-',
            },
            Fa = function (e) {
              var t, n;
              return (
                (n = t = (function (t) {
                  !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError('Super expression must either be null or a function');
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      t && Ra(e, t);
                  })(l, t);
                  var n,
                    o,
                    a,
                    i = Ia(l);
                  function l (e) {
                    var t;
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError('Cannot call a class as a function');
                      })(this, l),
                      Ba(La((t = i.call(this, e))), '_isMounted', !1),
                      Ba(La(t), 'openShareOverlay', function () {
                        t.setState({ share_opened: !0 });
                      }),
                      Ba(La(t), 'closeShareOverlay', function () {
                        t.setState({ share_opened: !1 });
                      }),
                      Ba(La(t), 'handleReady', function (e, n, o) {
                        t._isMounted && t.setState({ ready: !0 }),
                          new Promise(function (e, n) {
                            t.analytics.startSession(), e();
                          }).then(function () {
                            t.analytics.trackPlayerLoaded();
                          }),
                          t.analytics.trackAdBlock(o.getAdBlock()),
                          t.props.onReady(o);
                      }),
                      Ba(La(t), 'handlePlay', function (e) {
                        t.setState({ paused: !1, toggle_play: !0, content_started: !0 }),
                          t.props.onPlay();
                      }),
                      Ba(La(t), 'handlePause', function () {
                        t.setState({ paused: !0, toggle_play: !1 });
                      }),
                      Ba(La(t), 'handlePlaying', function () {
                        t.setState({ buffering: !1 });
                      }),
                      Ba(La(t), 'handleBuffering', function (e) {
                        t.analytics.trackStoryBuffering(e), t.setState({ buffering: !0 });
                      }),
                      Ba(La(t), 'handleTimeUpdate', function (e) {
                        var n = e.currentTime,
                          o = t.state.duration,
                          r = n / o,
                          a = r > 0.9 || o - n < 10;
                        t.setState({ current_time: n, play_progress: r, show_nextup_tooltip: a }),
                          t.analytics.trackStorySecComplete(n),
                          t.analytics.trackStoryQuartile(r);
                      }),
                      Ba(La(t), 'handleAdTimeUpdate', function (e) {
                        t.setState({ ad_current_time: e.position, ad_duration: e.duration });
                      }),
                      Ba(La(t), 'handleMuteChange', function (e) {
                        t.setState({ muted: e });
                      }),
                      Ba(La(t), 'handleProgressDragMove', function (e) {
                        var n = (t.state.duration - 0.001) * e;
                        t.setState({ toggle_play: !1, seek_time: n });
                      }),
                      Ba(La(t), 'handleProgressDragEnd', function () {
                        t.setState({ toggle_play: !0 }), t.analytics.trackSeek();
                      }),
                      Ba(La(t), 'handleProgressClick', function (e) {
                        var n = (t.state.duration - 0.001) * e;
                        t.setState({ seek_time: n }), t.analytics.trackSeek();
                      }),
                      Ba(La(t), 'handleSeeking', function (e) {
                        t.setState({ seeking: !0 });
                      }),
                      Ba(La(t), 'handleSeeked', function (e) {
                        t.setState({ seeking: !1 });
                      }),
                      Ba(La(t), 'handleLoadedMetadata', function (e) {
                        var n = e.duration;
                        t.setState({ duration: n });
                      }),
                      Ba(La(t), 'handleStarted', function (e) {
                        t.analytics.trackStoryStart(),
                          t.analytics.trackStoryAutoplay(t.props.autoplay);
                      }),
                      Ba(La(t), 'handleEnded', function (e) {
                        var n = t.state,
                          o = n.next_index,
                          r = n.is_last_item;
                        t.analytics.trackStoryEnd(),
                          r && t.analytics.trackPlayerFinished(),
                          t.setState({ index: o, toggle_play: !0 });
                      }),
                      Ba(La(t), 'handleError', function (e) {
                        t.setState({ error: e }),
                          t.analytics.trackStoryError(e),
                          t.props.onError(e);
                      }),
                      Ba(La(t), 'handleAdBreakStart', function (e) {
                        var n = xa();
                        t.setState({
                          in_ad_break: !0,
                          ad_current_time: 0,
                          ad_duration: 0,
                          can_toggle_fullscreen_ad: n,
                        }),
                          t.analytics.enterAd();
                      }),
                      Ba(La(t), 'handleAdBreakEnd', function (e) {
                        var n = xa();
                        t.setState({ in_ad_break: !1, can_toggle_fullscreen_ad: n }),
                          t.analytics.enterStory();
                      }),
                      Ba(La(t), 'handleAdSkipped', function (e) {
                        t.analytics.trackAdSkip();
                      }),
                      Ba(La(t), 'handleBeforePreroll', function (e) {
                        t.props.disable_preroll_tracking || t.analytics.trackBeforePrerollStart();
                      }),
                      Ba(La(t), 'handleAdManager', function (e, n, o) {
                        t.props.onAdManager(e, n, o);
                      }),
                      Ba(La(t), 'handleAdImpression', function (e, n, o) {
                        t.analytics.trackPrerollStart(), t.props.onAdImpression(e, n, o);
                      }),
                      Ba(La(t), 'handleAdComplete', function (e) {
                        t.analytics.trackPrerollEnd();
                      }),
                      Ba(La(t), 'handleAdViewable', function () {
                        t.analytics.trackAdViewable();
                      }),
                      Ba(La(t), 'handleAdBlock', function (e) {
                        t.analytics.trackAdBlock(e);
                      }),
                      Ba(La(t), 'handleClickToPlay', function () {
                        t.setState({ toggle_play: !0 }),
                          t.state.paused ? t.analytics.trackResume() : t.analytics.trackPlay();
                      }),
                      Ba(La(t), 'handleClickToPlayItem', function (e) {
                        var n = t.props.playlist.indexOf(e);
                        t.setState({ index: n, toggle_play: !0 }), t.analytics.trackPlay();
                      }),
                      Ba(La(t), 'handleClickNextUpTooltip', function (e) {
                        var n = t.props.playlist.indexOf(e);
                        t.setState({ index: n, toggle_play: !0 }),
                          t.analytics.trackNextUpVideoClick();
                      }),
                      Ba(La(t), 'handleClickToPause', function () {
                        t.setState({ toggle_play: !1 }), t.analytics.trackPause();
                      }),
                      Ba(La(t), 'handleClickToUnmute', function () {
                        t.setState({ toggle_sound: !0 }), t.analytics.trackUnmute();
                      }),
                      Ba(La(t), 'handleClickToMute', function () {
                        t.setState({ toggle_sound: !1 }), t.analytics.trackMute();
                      }),
                      Ba(La(t), 'handleClickToToggleCC', function (e) {
                        t.setState({ toggle_cc: e }),
                          e ? t.analytics.trackCCOn() : t.analytics.trackCCOff();
                      }),
                      Ba(La(t), 'handleCaptionsReady', function () {
                        t.setState({ cc_ready: !0 });
                      }),
                      Ba(La(t), 'handleTouchControls', function (e) {
                        e.stopPropagation();
                      }),
                      Ba(La(t), 'handlePlaylistItem', function (e) {
                        var n = e.index,
                          o = t.props.playlist.length - 1,
                          r = n + 1 > o ? 0 : n + 1,
                          a = n === o;
                        t.setState({
                          index: n,
                          next_index: r,
                          is_last_item: a,
                          content_started: !1,
                          buffering: !1,
                          seeking: !1,
                          play_progress: 0,
                          cc_ready: !1,
                          show_nextup_tooltip: !1,
                          share_opened: !1,
                          error: null,
                        }),
                          t.props.onPlaylistItemChange(n);
                        var i = t.props.playlist[n];
                        t.analytics.updateStory(i, n), t.analytics.enterStory();
                      }),
                      Ba(La(t), 'handleOverlayToggle', function (e) {
                        t.setState({ overlay_toggle: e });
                      }),
                      Ba(La(t), 'handleClickToEnterFullscreen', function () {
                        var e, n;
                        ((e = t.player_ref.current), !!(n = Oa(e)) && (n.apply(e), !0)) ||
                          (function (e) {
                            !!e.webkitEnterFullscreen && e.webkitEnterFullscreen();
                          })(t.player_ref.current.querySelector('video'));
                        t.analytics.trackFullscreen();
                      }),
                      Ba(La(t), 'handleClickToExitFullscreen', function () {
                        document.exitFullscreen
                          ? document.exitFullscreen()
                          : document.webkitExitFullscreen
                          ? document.webkitExitFullscreen()
                          : document.mozCancelFullScreen
                          ? document.mozCancelFullScreen()
                          : document.msExitFullscreen && document.msExitFullscreen(),
                          t.analytics.trackCollapse();
                      }),
                      Ba(La(t), 'handleFullScreenChange', function (e) {
                        var n = !!(
                          document.fullScreenElement ||
                          document.webkitIsFullScreen ||
                          document.mozFullScreen ||
                          document.msFullscreenElement
                        );
                        t.props.onFullscreenChange(n);
                      }),
                      Ba(La(t), 'handleViewableChange', function (e) {
                        t.props.onViewableChange(e);
                      }),
                      Ba(La(t), 'handleAutostartNotAllowed', function () {
                        t.setState({ toggle_play: !1 }), t.analytics.trackAutoplayNotAllowed();
                      }),
                      (t.player_ref = r.a.createRef()),
                      (t.position = 'original'),
                      (t.state = {
                        ready: !1,
                        index: 0,
                        next_index: 0,
                        is_last_item: !1,
                        content_started: !1,
                        in_ad_break: !1,
                        paused: !0,
                        muted: !0,
                        buffering: !1,
                        seeking: !1,
                        error: null,
                        current_time: 0,
                        ad_current_time: 0,
                        ad_duration: 0,
                        toggle_play: !1,
                        toggle_sound: !1,
                        toggle_cc: !0,
                        seek_time: 0,
                        duration: 0,
                        play_progress: 0,
                        cc_ready: !1,
                        share_opened: !1,
                        show_nextup_tooltip: !1,
                        overlay_toggle: !1,
                        can_toggle_fullscreen_ad: !0,
                      }),
                      (t.analytics = Object(ja.a)(t.props.onAnalyticsEvent)),
                      t
                    );
                  }
                  return (
                    (n = l),
                    (o = [
                      {
                        key: 'componentDidMount',
                        value: function () {
                          (this._isMounted = !0),
                            document.addEventListener(
                              'fullscreenchange',
                              this.handleFullScreenChange
                            ),
                            document.addEventListener(
                              'mozfullscreenchange',
                              this.handleFullScreenChange
                            ),
                            document.addEventListener(
                              'webkitfullscreenchange',
                              this.handleFullScreenChange
                            ),
                            document.addEventListener(
                              'msfullscreenchange',
                              this.handleFullScreenChange
                            );
                        },
                      },
                      {
                        key: 'componentWillUnmount',
                        value: function () {
                          (this._isMounted = !1),
                            document.removeEventListener(
                              'fullscreenchange',
                              this.handleFullScreenChange
                            ),
                            document.removeEventListener(
                              'mozfullscreenchange',
                              this.handleFullScreenChange
                            ),
                            document.removeEventListener(
                              'webkitfullscreenchange',
                              this.handleFullScreenChange
                            ),
                            document.removeEventListener(
                              'msfullscreenchange',
                              this.handleFullScreenChange
                            );
                        },
                      },
                      {
                        key: 'componentDidUpdate',
                        value: function (e) {
                          var t = this.props.current_index;
                          t !== e.current_index && this.setState({ index: t, toggle_play: !0 });
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          var t = this.props.playlist;
                          if (!t) return null;
                          var n = this.props,
                            o = n.className,
                            a = n.style,
                            i = n.lang,
                            l = n.autoplay,
                            c = n.autopause,
                            s = n.pause_ads,
                            u = n.initial_view_mode,
                            _ = n.position,
                            p = n.is_mobile,
                            f = n.config_params,
                            d = n.enable_play_button,
                            y = n.enable_sound_button,
                            m = n.enable_cc_button,
                            h = n.enable_share_button,
                            b = n.enable_view_mode_button,
                            g = n.enable_fullscreen_button,
                            v = n.enable_time_display,
                            w = n.enable_progress_controls,
                            S = n.enable_nextup_tooltip,
                            T = n.enable_ad_countdown,
                            E = n.onClickViewMode,
                            k = this.state,
                            C = k.ready,
                            P = k.index,
                            O = k.next_index,
                            x = k.content_started,
                            j = k.buffering,
                            A = k.seeking,
                            N = k.paused,
                            R = k.muted,
                            I = k.error,
                            M = k.in_ad_break,
                            D = k.play_progress,
                            B = k.current_time,
                            V = k.duration,
                            U = k.ad_current_time,
                            G = k.ad_duration,
                            H = k.toggle_cc,
                            z = k.cc_ready,
                            W = k.share_opened,
                            Y = k.show_nextup_tooltip,
                            q = k.overlay_toggle,
                            K = k.toggle_play,
                            J = k.toggle_sound,
                            X = k.seek_time,
                            Q = k.can_toggle_fullscreen_ad,
                            $ = t[P],
                            te = t[O],
                            ne = Ca(i);
                          return (
                            _ &&
                              this.position !== _ &&
                              !p &&
                              ('original' === _ && this.analytics.trackStateChange('Original'),
                              'rightrail' === _ && this.analytics.trackStateChange('Right Rail'),
                              (this.position = _)),
                            r.a.createElement(
                              Yo,
                              { className: o, style: a, onToggle: this.handleOverlayToggle },
                              r.a.createElement(
                                'div',
                                { className: Va.container, ref: this.player_ref },
                                r.a.createElement(e, {
                                  className: Va.video,
                                  playlist: t,
                                  index: P,
                                  autoplay: l,
                                  autopause: c,
                                  pause_ads: s,
                                  muted: R,
                                  toggle_play: K,
                                  toggle_sound: J,
                                  toggle_cc: H,
                                  seek_time: X,
                                  config_params: f,
                                  onPlay: this.handlePlay,
                                  onPause: this.handlePause,
                                  onPlaying: this.handlePlaying,
                                  onBuffering: this.handleBuffering,
                                  onTimeUpdate: this.handleTimeUpdate,
                                  onMuteChange: this.handleMuteChange,
                                  onSeeking: this.handleSeeking,
                                  onSeeked: this.handleSeeked,
                                  onLoadedMetadata: this.handleLoadedMetadata,
                                  onStarted: this.handleStarted,
                                  onEnded: this.handleEnded,
                                  onReady: this.handleReady,
                                  onError: this.handleError,
                                  onAdBreakStart: this.handleAdBreakStart,
                                  onAdBreakEnd: this.handleAdBreakEnd,
                                  onAdPlay: this.handlePlay,
                                  onAdPause: this.handlePause,
                                  onAdTimeUpdate: this.handleAdTimeUpdate,
                                  onAdSkipped: this.handleAdSkipped,
                                  onBeforePreroll: this.handleBeforePreroll,
                                  onAdManager: this.handleAdManager,
                                  onAdImpression: this.handleAdImpression,
                                  onAdComplete: this.handleAdComplete,
                                  onAdViewable: this.handleAdViewable,
                                  onPlaylistItem: this.handlePlaylistItem,
                                  onCaptionsReady: this.handleCaptionsReady,
                                  onAutostartNotAllowed: this.handleAutostartNotAllowed,
                                  onViewableChange: this.handleViewableChange,
                                }),
                                M &&
                                  r.a.createElement(
                                    'div',
                                    { className: L()(Va['ad-overlay'], Va.overlay) },
                                    r.a.createElement(
                                      'div',
                                      {
                                        className: Va['ad-controls'],
                                        onTouchStart: this.handleTouchControls,
                                      },
                                      r.a.createElement(
                                        'div',
                                        { className: Va.group },
                                        d &&
                                          r.a.createElement(Z, {
                                            className: Va['play-button'],
                                            paused: N,
                                            translations: ne,
                                            onClickToPlay: this.handleClickToPlay,
                                            onClickToPause: this.handleClickToPause,
                                          }),
                                        y &&
                                          r.a.createElement(ee, {
                                            className: Va['sound-button'],
                                            muted: R,
                                            translations: ne,
                                            onClickToUnmute: this.handleClickToUnmute,
                                            onClickToMute: this.handleClickToMute,
                                          }),
                                        T &&
                                          r.a.createElement(F, {
                                            className: Va['ad-countdown'],
                                            position: U,
                                            duration: G,
                                          })
                                      ),
                                      r.a.createElement(
                                        'div',
                                        { className: Va.group },
                                        b &&
                                          r.a.createElement(Pe, {
                                            className: Va['view-mode-button'],
                                            initial_view_mode: u,
                                            translations: ne,
                                            onClick: E,
                                          }),
                                        g &&
                                          Q &&
                                          r.a.createElement(He, {
                                            className: Va['fullscreen-button'],
                                            translations: ne,
                                            onClickToEnterFullscreen: this
                                              .handleClickToEnterFullscreen,
                                            onClickToExitFullscreen: this
                                              .handleClickToExitFullscreen,
                                          })
                                      )
                                    )
                                  ),
                                r.a.createElement(fn, { className: Va.overlay, show: x && j }),
                                x &&
                                  !M &&
                                  r.a.createElement(
                                    'div',
                                    { className: L()(Va.overlay, (!q || W) && Va.hidden) },
                                    r.a.createElement($e, {
                                      className: Va['title-overlay'],
                                      title: $.title,
                                    }),
                                    r.a.createElement(
                                      'div',
                                      {
                                        className: Va['story-controls'],
                                        onTouchStart: this.handleTouchControls,
                                      },
                                      w &&
                                        r.a.createElement(At, {
                                          className: Va['progress-controls'],
                                          play_progress: D,
                                          seeking: A,
                                          onDragMove: this.handleProgressDragMove,
                                          onDragEnd: this.handleProgressDragEnd,
                                          onClick: this.handleProgressClick,
                                        }),
                                      r.a.createElement(
                                        'div',
                                        { className: Va.group },
                                        d &&
                                          r.a.createElement(Z, {
                                            className: Va['play-button'],
                                            paused: N,
                                            translations: ne,
                                            onClickToPlay: this.handleClickToPlay,
                                            onClickToPause: this.handleClickToPause,
                                          }),
                                        y &&
                                          r.a.createElement(ee, {
                                            className: Va['sound-button'],
                                            muted: R,
                                            translations: ne,
                                            onClickToUnmute: this.handleClickToUnmute,
                                            onClickToMute: this.handleClickToMute,
                                          }),
                                        v &&
                                          r.a.createElement(Ke, {
                                            className: Va['time-display'],
                                            current: B,
                                            duration: V,
                                          })
                                      ),
                                      r.a.createElement(
                                        'div',
                                        { className: Va.group },
                                        m &&
                                          z &&
                                          r.a.createElement(le, {
                                            className: Va['cc-button'],
                                            on: H,
                                            translations: ne,
                                            onClickToToggle: this.handleClickToToggleCC,
                                          }),
                                        h &&
                                          $.share &&
                                          r.a.createElement(pe, {
                                            className: Va['share-button'],
                                            onClick: this.openShareOverlay,
                                          }),
                                        b &&
                                          r.a.createElement(Pe, {
                                            className: Va['view-mode-button'],
                                            initial_view_mode: u,
                                            translations: ne,
                                            onClick: E,
                                          }),
                                        g &&
                                          r.a.createElement(He, {
                                            className: Va['fullscreen-button'],
                                            translations: ne,
                                            onClickToEnterFullscreen: this
                                              .handleClickToEnterFullscreen,
                                            onClickToExitFullscreen: this
                                              .handleClickToExitFullscreen,
                                          })
                                      )
                                    )
                                  ),
                                S &&
                                  x &&
                                  !M &&
                                  !W &&
                                  r.a.createElement(
                                    'div',
                                    { onTouchStart: this.handleTouchControls },
                                    r.a.createElement(vr, {
                                      className: L()(Va['next-up-tooltip'], q && Va.elevated),
                                      translations: ne,
                                      item: te,
                                      show: Y,
                                      onClick: this.handleClickNextUpTooltip,
                                    })
                                  ),
                                W &&
                                  r.a.createElement(Lo, {
                                    className: L()(Va['share-overlay'], Va.overlay),
                                    translations: ne,
                                    share: $.share,
                                    onClickToClose: this.closeShareOverlay,
                                  }),
                                r.a.createElement(_a, {
                                  className: Va['teaser-screen'],
                                  show: $ && !x && !M && !I,
                                  item: $,
                                  toggle_play: K,
                                  buffering: j,
                                  ready: C,
                                  translations: ne,
                                  onClickToPlay: this.handleClickToPlayItem,
                                }),
                                I &&
                                  r.a.createElement(Ea, {
                                    className: Va['error-screen'],
                                    error: I,
                                  })
                              )
                            )
                          );
                        },
                      },
                    ]) && Na(n.prototype, o),
                    a && Na(n, a),
                    l
                  );
                })(o.PureComponent)),
                Ba(t, 'propTypes', {
                  className: i.a.string,
                  style: i.a.object,
                  playlist: i.a.arrayOf(
                    i.a.shape({
                      title: i.a.string,
                      image: i.a.string,
                      file: i.a.string,
                      duration: i.a.number,
                      ad: i.a.shape({
                        dart_zone: i.a.string.isRequired,
                        npa: i.a.oneOf(['0', '1']),
                        rdp: i.a.oneOf(['0', '1']),
                        custom_params: i.a.object,
                      }),
                      analytics: i.a.shape({
                        location: i.a.string,
                        category: i.a.string,
                        context: i.a.string,
                        source: i.a.string,
                        platform: i.a.string,
                        asset_id: i.a.oneOfType([i.a.string, i.a.number]),
                      }),
                      share: i.a.shape({ title: i.a.string, url: i.a.string }),
                    })
                  ),
                  lang: i.a.oneOf(Pa),
                  autoplay: i.a.oneOf([!0, !1, 'viewable']),
                  autopause: i.a.bool,
                  pause_ads: i.a.bool,
                  initial_view_mode: i.a.oneOf(Object.values(fe)),
                  position: i.a.string,
                  is_mobile: i.a.bool,
                  enable_play_button: i.a.bool,
                  enable_sound_button: i.a.bool,
                  enable_cc_button: i.a.bool,
                  enable_share_button: i.a.bool,
                  enable_view_mode_button: i.a.bool,
                  enable_fullscreen_button: i.a.bool,
                  enable_time_display: i.a.bool,
                  enable_progress_controls: i.a.bool,
                  enable_nextup_tooltip: i.a.bool,
                  enable_ad_countdown: i.a.bool,
                  disable_preroll_tracking: i.a.bool,
                  current_index: i.a.number,
                  config_params: i.a.object,
                  onPlaylistItemChange: i.a.func,
                  onFullscreenChange: i.a.func,
                  onClickViewMode: i.a.func,
                  onReady: i.a.func,
                  onError: i.a.func,
                  onAdManager: i.a.func,
                  onAdImpression: i.a.func,
                  onAnalyticsEvent: i.a.func,
                  onViewableChange: i.a.func,
                  onPlay: i.a.func,
                  onStateChange: i.a.func,
                }),
                Ba(t, 'defaultProps', {
                  lang: 'en',
                  enable_play_button: !0,
                  enable_sound_button: !0,
                  enable_cc_button: !0,
                  enable_share_button: !0,
                  enable_view_mode_button: !0,
                  enable_fullscreen_button: !0,
                  enable_time_display: !0,
                  enable_progress_controls: !0,
                  enable_nextup_tooltip: !0,
                  enable_ad_countdown: !0,
                  disable_preroll_tracking: !1,
                  current_view_mode: fe.DEFAULT,
                  current_index: 0,
                  is_mobile: !1,
                  config_params: {},
                  pause_ads: !0,
                  onPlaylistItemChange: function () {},
                  onFullscreenChange: function () {},
                  onReady: function () {},
                  onError: function () {},
                  onAdManager: function () {},
                  onAdImpression: function () {},
                  onAnalyticsEvent: function () {},
                  onViewableChange: function () {},
                  onPlay: function () {},
                  onStateChange: function () {},
                }),
                Ba(t, 'DEFAULT_LANG', 'en'),
                Ba(t, 'AVAILABLE_LANG', Pa),
                n
              );
            };
          n.d(t, 'DirectVideoPlayer', function () {
            return Ua;
          }),
            n.d(t, 'JWVideoPlayer', function () {
              return Ga;
            });
          var Ua = Fa(g),
            Ga = Fa(I);
        },
      },
    ]);
  })();
}
