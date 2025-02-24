{
  const $___stub_fb986baf23da602c = {};
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
  })($___stub_fb986baf23da602c);
  (function () {
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function exceptionTagClosure () {
          if (
            window._A &&
            _A.constructor == Object &&
            _A.isO(window._A.section) &&
            _A.isO(window.s)
          ) {
            if (typeof window.hpmmd == 'undefined') window.hpmmd = { metatags: {} };
            else if (typeof window.hpmmd.metatags == 'undefined') window.hpmmd.metatags = {};
            window.unityStoreMeasurement = (function () {
              var console = {
                log: function (x) {
                  if (!!window.console) window.console.log(x);
                },
                warn: function (x) {
                  if (!!window.console) window.console.warn(x);
                },
                error: function (x) {
                  if (!!window.console) window.console.error(x);
                },
              };
              var original_ = window._;
              if (!original_)
                (function () {
                  function M (a, b, c) {
                    if (b !== b) {
                      a: {
                        b = a.length;
                        for (c += -1; ++c < b; ) {
                          var d = a[c];
                          if (d !== d) {
                            a = c;
                            break a;
                          }
                        }
                        a = -1;
                      }
                      return a;
                    }
                    c -= 1;
                    for (d = a.length; ++c < d; ) if (a[c] === b) return c;
                    return -1;
                  }
                  function A (a) {
                    return !!a && typeof a == 'object';
                  }
                  function f () {}
                  function ta (a) {
                    var b = a ? a.length : 0;
                    for (this.data = { hash: ua(null), set: new va() }; b--; ) this.push(a[b]);
                  }
                  function Ja (a, b) {
                    var c = a.data;
                    return (typeof b == 'string' || x(b) ? c.set.has(b) : c.hash[b]) ? 0 : -1;
                  }
                  function Ka (a, b) {
                    var c = -1,
                      d = a.length;
                    for (b || (b = Array(d)); ++c < d; ) b[c] = a[c];
                    return b;
                  }
                  function wa (a, b) {
                    for (var c = -1, d = a.length; ++c < d && false !== b(a[c], c, a); );
                    return a;
                  }
                  function tb (a, b) {
                    for (var c = -1, d = a.length, e = Array(d); ++c < d; ) e[c] = b(a[c], c, a);
                    return e;
                  }
                  function ub (a, b) {
                    for (var c = -1, d = a.length; ++c < d; ) if (b(a[c], c, a)) return true;
                    return false;
                  }
                  function vb (a, b) {
                    return null == b ? a : La(b, C(b), a);
                  }
                  function La (a, b, c) {
                    c || (c = {});
                    for (var d = -1, e = b.length; ++d < e; ) {
                      var g = b[d];
                      c[g] = a[g];
                    }
                    return c;
                  }
                  function xa (a, b, c) {
                    var d = typeof a;
                    return 'function' == d
                      ? b === n
                        ? a
                        : Ma(a, b, c)
                      : null == a
                      ? Z
                      : 'object' == d
                      ? Na(a)
                      : b === n
                      ? Oa(a)
                      : wb(a, b);
                  }
                  function Pa (a, b, c, d, e, g, h) {
                    var p;
                    c && (p = e ? c(a, d, e) : c(a));
                    if (p !== n) return p;
                    if (!x(a)) return a;
                    if ((d = t(a))) {
                      if (((p = xb(a)), !b)) return Ka(a, p);
                    } else {
                      var s = D.call(a),
                        m = s == N;
                      if (s == y || s == O || (m && !e)) {
                        if (P(a)) return e ? a : {};
                        p = yb(m ? {} : a);
                        if (!b) return vb(p, a);
                      } else return q[s] ? zb(a, s, b) : e ? a : {};
                    }
                    g || (g = []);
                    h || (h = []);
                    for (e = g.length; e--; ) if (g[e] == a) return h[e];
                    g.push(a);
                    h.push(p);
                    (d ? wa : Qa)(a, function (d, e) {
                      p[e] = Pa(d, b, c, e, a, g, h);
                    });
                    return p;
                  }
                  function ya (a, b, c, d) {
                    d || (d = []);
                    for (var e = -1, g = a.length; ++e < g; ) {
                      var h = a[e];
                      if (A(h) && E(h) && (c || t(h) || G(h)))
                        if (b) ya(h, b, c, d);
                        else
                          for (var p = d, s = -1, m = h.length, k = p.length; ++s < m; )
                            p[k + s] = h[s];
                      else c || (d[d.length] = h);
                    }
                    return d;
                  }
                  function Ra (a, b) {
                    return Sa(a, b, $);
                  }
                  function Qa (a, b) {
                    return Sa(a, b, C);
                  }
                  function Ta (a, b, c) {
                    if (null != a) {
                      a = z(a);
                      c !== n && c in a && (b = [c]);
                      c = 0;
                      for (var d = b.length; null != a && c < d; ) a = z(a)[b[c++]];
                      return c && c == d ? a : n;
                    }
                  }
                  function za (a, b, c, d, e, g) {
                    if (a === b) return true;
                    if (null == a || null == b || (!x(a) && !A(b))) return a !== a && b !== b;
                    a: {
                      var h = za,
                        p = t(a),
                        s = t(b),
                        m = I,
                        k = I;
                      p || ((m = D.call(a)), m == O ? (m = y) : m != y && (p = Q(a)));
                      s || ((k = D.call(b)), k == O ? (k = y) : k != y && Q(b));
                      var f = m == y && !P(a),
                        s = k == y && !P(b),
                        k = m == k;
                      if (!k || p || f) {
                        if (
                          !d &&
                          ((m = f && u.call(a, '__wrapped__')),
                          (s = s && u.call(b, '__wrapped__')),
                          m || s)
                        ) {
                          a = h(m ? a.value() : a, s ? b.value() : b, c, d, e, g);
                          break a;
                        }
                        if (k) {
                          e || (e = []);
                          g || (g = []);
                          for (m = e.length; m--; )
                            if (e[m] == a) {
                              a = g[m] == b;
                              break a;
                            }
                          e.push(a);
                          g.push(b);
                          a = (p ? Ab : Bb)(a, b, h, c, d, e, g);
                          e.pop();
                          g.pop();
                        } else a = false;
                      } else a = Cb(a, b, m);
                    }
                    return a;
                  }
                  function Db (a, b, c) {
                    var d = b.length,
                      e = d,
                      g = !c;
                    if (null == a) return !e;
                    for (a = z(a); d--; ) {
                      var h = b[d];
                      if (g && h[2] ? h[1] !== a[h[0]] : !(h[0] in a)) return false;
                    }
                    for (; ++d < e; ) {
                      var h = b[d],
                        p = h[0],
                        f = a[p],
                        m = h[1];
                      if (g && h[2]) {
                        if (f === n && !(p in a)) return false;
                      } else if (((h = c ? c(f, m, p) : n), h === n ? !za(m, f, c, true) : !h))
                        return false;
                    }
                    return true;
                  }
                  function Eb (a, b) {
                    var c = -1,
                      d = E(a) ? Array(a.length) : [];
                    Ua(a, function (a, g, h) {
                      d[++c] = b(a, g, h);
                    });
                    return d;
                  }
                  function Na (a) {
                    var b = Fb(a);
                    if (1 == b.length && b[0][2]) {
                      var c = b[0][0],
                        d = b[0][1];
                      return function (a) {
                        if (null == a) return false;
                        a = z(a);
                        return a[c] === d && (d !== n || c in a);
                      };
                    }
                    return function (a) {
                      return Db(a, b);
                    };
                  }
                  function wb (a, b) {
                    var c = t(a),
                      d = Va(a) && b === b && !x(b),
                      e = a + '';
                    a = Wa(a);
                    return function (g) {
                      if (null == g) return false;
                      var h = e;
                      g = z(g);
                      if (!((!c && d) || h in g)) {
                        g = 1 == a.length ? g : Ta(g, Xa(a, 0, -1));
                        if (null == g) return false;
                        h = Ya(a);
                        g = z(g);
                      }
                      return g[h] === b ? b !== n || h in g : za(b, g[h], n, true);
                    };
                  }
                  function Za (a, b, c, d, e) {
                    if (!x(a)) return a;
                    var g = E(b) && (t(b) || Q(b)),
                      h = g ? n : C(b);
                    wa(h || b, function (p, f) {
                      h && ((f = p), (p = b[f]));
                      if (A(p)) {
                        d || (d = []);
                        e || (e = []);
                        a: {
                          for (var m = f, k = d, q = e, v = k.length, l = b[m]; v--; )
                            if (k[v] == l) {
                              a[m] = q[v];
                              break a;
                            }
                          var v = a[m],
                            r = c ? c(v, l, m, a, b) : n,
                            u = r === n;
                          u &&
                            ((r = l),
                            E(l) && (t(l) || Q(l))
                              ? (r = t(v) ? v : E(v) ? Ka(v) : [])
                              : Aa(l) || G(l)
                              ? (r = G(v) ? $a(v) : Aa(v) ? v : {})
                              : (u = false));
                          k.push(l);
                          q.push(r);
                          if (u) a[m] = Za(r, l, c, k, q);
                          else if (r === r ? r !== v : v === v) a[m] = r;
                        }
                      } else (m = a[f]), (k = c ? c(m, p, f, a, b) : n), (q = k === n) && (k = p), (k === n && (!g || f in a)) || (!q && (k === k ? k === m : m !== m)) || (a[f] = k);
                    });
                    return a;
                  }
                  function ab (a) {
                    return function (b) {
                      return null == b ? n : z(b)[a];
                    };
                  }
                  function Gb (a) {
                    var b = a + '';
                    a = Wa(a);
                    return function (c) {
                      return Ta(c, a, b);
                    };
                  }
                  function Hb (a, b, c, d, e) {
                    e(a, function (a, e, f) {
                      c = d ? ((d = false), a) : b(c, a, e, f);
                    });
                    return c;
                  }
                  function Xa (a, b, c) {
                    var d = -1,
                      e = a.length;
                    b = null == b ? 0 : +b || 0;
                    0 > b && (b = -b > e ? 0 : e + b);
                    c = c === n || c > e ? e : +c || 0;
                    0 > c && (c += e);
                    e = b > c ? 0 : (c - b) >>> 0;
                    b >>>= 0;
                    for (c = Array(e); ++d < e; ) c[d] = a[d + b];
                    return c;
                  }
                  function bb (a, b) {
                    var c = -1,
                      d = aa(),
                      e = a.length,
                      g = d === M,
                      h = g && e >= cb,
                      f = h ? (ua && va ? new ta(void 0) : null) : null,
                      s = [];
                    f ? ((d = Ja), (g = false)) : ((h = false), (f = b ? [] : s));
                    a: for (; ++c < e; ) {
                      var m = a[c],
                        k = b ? b(m, c, a) : m;
                      if (g && m === m) {
                        for (var n = f.length; n--; ) if (f[n] === k) continue a;
                        b && f.push(k);
                        s.push(m);
                      } else 0 > d(f, k, 0) && ((b || h) && f.push(k), s.push(m));
                    }
                    return s;
                  }
                  function Ma (a, b, c) {
                    if (typeof a != 'function') return Z;
                    if (b === n) return a;
                    switch (c) {
                      case 1:
                        return function (c) {
                          return a.call(b, c);
                        };
                      case 3:
                        return function (c, e, g) {
                          return a.call(b, c, e, g);
                        };
                      case 4:
                        return function (c, e, g, h) {
                          return a.call(b, c, e, g, h);
                        };
                      case 5:
                        return function (c, e, g, h, f) {
                          return a.call(b, c, e, g, h, f);
                        };
                    }
                    return function () {
                      return a.apply(b, arguments);
                    };
                  }
                  function db (a) {
                    var b = new Ib(a.byteLength);
                    new Ba(b).set(new Ba(a));
                    return b;
                  }
                  function Ab (a, b, c, d, e, g, h) {
                    var f = -1,
                      s = a.length,
                      m = b.length;
                    if (s != m && !(e && m > s)) return false;
                    for (; ++f < s; ) {
                      var k = a[f],
                        m = b[f],
                        l = d ? d(e ? m : k, e ? k : m, f) : n;
                      if (l !== n) {
                        if (l) continue;
                        return false;
                      }
                      if (e) {
                        if (
                          !ub(b, function (a) {
                            return k === a || c(k, a, d, e, g, h);
                          })
                        )
                          return false;
                      } else if (k !== m && !c(k, m, d, e, g, h)) return false;
                    }
                    return true;
                  }
                  function Cb (a, b, c) {
                    switch (c) {
                      case R:
                      case S:
                        return +a == +b;
                      case T:
                        return a.name == b.name && a.message == b.message;
                      case U:
                        return a != +a ? b != +b : a == +b;
                      case V:
                      case H:
                        return a == b + '';
                    }
                    return false;
                  }
                  function Bb (a, b, c, d, e, g, h) {
                    var f = C(a),
                      s = f.length,
                      m = C(b).length;
                    if (s != m && !e) return false;
                    for (m = s; m--; ) {
                      var k = f[m];
                      if (!(e ? k in b : u.call(b, k))) return false;
                    }
                    for (var l = e; ++m < s; ) {
                      var k = f[m],
                        q = a[k],
                        r = b[k],
                        t = d ? d(e ? r : q, e ? q : r, k) : n;
                      if (t === n ? !c(q, r, d, e, g, h) : !t) return false;
                      l || (l = 'constructor' == k);
                    }
                    return l ||
                      ((c = a.constructor),
                      (d = b.constructor),
                      !(c != d && 'constructor' in a && 'constructor' in b) ||
                        (typeof c == 'function' &&
                          c instanceof c &&
                          typeof d == 'function' &&
                          d instanceof d))
                      ? true
                      : false;
                  }
                  function Ca (a, b, c) {
                    var d = f.callback || ba,
                      d = d === ba ? xa : d;
                    return c ? d(a, b, c) : d;
                  }
                  function aa (a, b, c) {
                    var d = f.indexOf || Da,
                      d = d === Da ? M : d;
                    return a ? d(a, b, c) : d;
                  }
                  function Fb (a) {
                    a = eb(a);
                    for (var b = a.length; b--; ) {
                      var c = a[b],
                        d;
                      d = a[b][1];
                      d = d === d && !x(d);
                      c[2] = d;
                    }
                    return a;
                  }
                  function ca (a, b) {
                    var c = null == a ? n : a[b];
                    return fb(c) ? c : n;
                  }
                  function xb (a) {
                    var b = a.length,
                      c = new a.constructor(b);
                    b &&
                      'string' == typeof a[0] &&
                      u.call(a, 'index') &&
                      ((c.index = a.index), (c.input = a.input));
                    return c;
                  }
                  function yb (a) {
                    a = a.constructor;
                    (typeof a == 'function' && a instanceof a) || (a = Object);
                    return new a();
                  }
                  function zb (a, b, c) {
                    var d = a.constructor;
                    switch (b) {
                      case Ea:
                        return db(a);
                      case R:
                      case S:
                        return new d(+a);
                      case da:
                      case ea:
                      case fa:
                      case ga:
                      case ha:
                      case ia:
                      case ja:
                      case ka:
                      case la:
                        return (
                          d instanceof d && (d = B[b]),
                          (b = a.buffer),
                          new d(c ? db(b) : b, a.byteOffset, a.length)
                        );
                      case U:
                      case H:
                        return new d(a);
                      case V:
                        var e = new d(a.source, Jb.exec(a));
                        e.lastIndex = a.lastIndex;
                    }
                    return e;
                  }
                  function E (a) {
                    return null != a && F(ma(a));
                  }
                  function Fa (a, b) {
                    a = typeof a == 'number' || Kb.test(a) ? +a : -1;
                    b = null == b ? gb : b;
                    return -1 < a && 0 == a % 1 && a < b;
                  }
                  function J (a, b, c) {
                    if (!x(c)) return false;
                    var d = typeof b;
                    return ('number' == d ? E(c) && Fa(b, c.length) : 'string' == d && b in c)
                      ? ((b = c[b]), a === a ? a === b : b !== b)
                      : false;
                  }
                  function Va (a, b) {
                    var c = typeof a;
                    return ('string' == c && Lb.test(a)) || 'number' == c
                      ? true
                      : t(a)
                      ? false
                      : !Mb.test(a) || (null != b && a in z(b));
                  }
                  function F (a) {
                    return typeof a == 'number' && -1 < a && 0 == a % 1 && a <= gb;
                  }
                  function hb (a) {
                    for (
                      var b = $(a),
                        c = b.length,
                        d = c && a.length,
                        e = !!d && F(d) && (t(a) || G(a) || W(a)),
                        g = -1,
                        f = [];
                      ++g < c;

                    ) {
                      var p = b[g];
                      ((e && Fa(p, d)) || u.call(a, p)) && f.push(p);
                    }
                    return f;
                  }
                  function z (a) {
                    if (f.support.unindexedChars && W(a)) {
                      for (var b = -1, c = a.length, d = Object(a); ++b < c; ) d[b] = a.charAt(b);
                      return d;
                    }
                    return x(a) ? a : Object(a);
                  }
                  function Wa (a) {
                    if (t(a)) return a;
                    var b = [];
                    (null == a ? '' : a + '').replace(Nb, function (a, d, e, g) {
                      b.push(e ? g.replace(Ob, '$1') : d || a);
                    });
                    return b;
                  }
                  function ib (a, b, c) {
                    if (!a || !a.length) return [];
                    if (c ? J(a, b, c) : null == b) b = 1;
                    return Xa(a, 0 > b ? 0 : b);
                  }
                  function jb (a) {
                    return a ? a[0] : n;
                  }
                  function Da (a, b, c) {
                    var d = a ? a.length : 0;
                    if (!d) return -1;
                    if (typeof c == 'number') c = 0 > c ? na(d + c, 0) : c;
                    else if (c) {
                      c = 0;
                      var e = a ? a.length : c;
                      if (typeof b == 'number' && b === b && e <= Pb) {
                        for (; c < e; ) {
                          var g = (c + e) >>> 1,
                            f = a[g];
                          f < b && null !== f ? (c = g + 1) : (e = g);
                        }
                        c = e;
                      } else {
                        e = Z;
                        c = e(b);
                        for (
                          var g = 0,
                            f = a ? a.length : 0,
                            p = c !== c,
                            s = null === c,
                            m = c === n;
                          g < f;

                        ) {
                          var k = Qb((g + f) / 2),
                            l = e(a[k]),
                            q = l !== n,
                            r = l === l;
                          (p ? r : s ? r && q && null != l : m ? r && q : null == l ? 0 : l < c)
                            ? (g = k + 1)
                            : (f = k);
                        }
                        c = Rb(f, Sb);
                      }
                      return c < d && (b === b ? b === a[c] : a[c] !== a[c]) ? c : -1;
                    }
                    return M(a, b, c || 0);
                  }
                  function Ya (a) {
                    var b = a ? a.length : 0;
                    return b ? a[b - 1] : n;
                  }
                  function kb (a) {
                    return ib(a, 1);
                  }
                  function lb (a, b, c, d) {
                    if (!a || !a.length) return [];
                    null != b &&
                      typeof b != 'boolean' &&
                      ((d = c), (c = J(a, b, d) ? n : b), (b = false));
                    var e = Ca();
                    if (null != c || e !== xa) c = e(c, d, 3);
                    if (b && aa() === M) {
                      b = c;
                      var g;
                      c = -1;
                      d = a.length;
                      for (var e = -1, f = []; ++c < d; ) {
                        var p = a[c],
                          l = b ? b(p, c, a) : p;
                        (c && g === l) || ((g = l), (f[++e] = p));
                      }
                      a = f;
                    } else a = bb(a, c);
                    return a;
                  }
                  function Ga (a, b, c, d) {
                    var e = a ? ma(a) : 0;
                    F(e) || ((a = mb(a)), (e = a.length));
                    c =
                      typeof c != 'number' || (d && J(b, c, d))
                        ? 0
                        : 0 > c
                        ? na(e + c, 0)
                        : c || 0;
                    return typeof a == 'string' || (!t(a) && W(a))
                      ? c <= e && -1 < a.indexOf(b, c)
                      : !!e && -1 < aa(a, b, c);
                  }
                  function nb (a, b, c) {
                    var d = t(a) ? tb : Eb;
                    b = Ca(b, c, 3);
                    return d(a, b);
                  }
                  function oa (a, b) {
                    if (typeof a != 'function') throw new TypeError(Tb);
                    b = na(b === n ? a.length - 1 : +b || 0, 0);
                    return function () {
                      for (
                        var c = arguments, d = -1, e = na(c.length - b, 0), g = Array(e);
                        ++d < e;

                      )
                        g[d] = c[b + d];
                      switch (b) {
                        case 0:
                          return a.call(this, g);
                        case 1:
                          return a.call(this, c[0], g);
                        case 2:
                          return a.call(this, c[0], c[1], g);
                      }
                      e = Array(b + 1);
                      for (d = -1; ++d < b; ) e[d] = c[d];
                      e[b] = g;
                      return a.apply(this, e);
                    };
                  }
                  function G (a) {
                    return A(a) && E(a) && u.call(a, 'callee') && !pa.call(a, 'callee');
                  }
                  function qa (a) {
                    return x(a) && D.call(a) == N;
                  }
                  function x (a) {
                    var b = typeof a;
                    return !!a && ('object' == b || 'function' == b);
                  }
                  function fb (a) {
                    return null == a
                      ? false
                      : qa(a)
                      ? ob.test(pb.call(a))
                      : A(a) && (P(a) ? ob : Ub).test(a);
                  }
                  function Aa (a) {
                    var b;
                    if (
                      !A(a) ||
                      D.call(a) != y ||
                      P(a) ||
                      G(a) ||
                      !(
                        u.call(a, 'constructor') ||
                        ((b = a.constructor), typeof b != 'function' || b instanceof b)
                      )
                    )
                      return false;
                    var c;
                    if (f.support.ownLast)
                      return (
                        Ra(a, function (a, b, g) {
                          c = u.call(g, b);
                          return false;
                        }),
                        false !== c
                      );
                    Ra(a, function (a, b) {
                      c = b;
                    });
                    return c === n || u.call(a, c);
                  }
                  function W (a) {
                    return typeof a == 'string' || (A(a) && D.call(a) == H);
                  }
                  function Q (a) {
                    return A(a) && F(a.length) && !!l[D.call(a)];
                  }
                  function $a (a) {
                    return La(a, $(a));
                  }
                  function $ (a) {
                    if (null == a) return [];
                    x(a) || (a = Object(a));
                    for (
                      var b = a.length,
                        c = f.support,
                        b = (b && F(b) && (t(a) || G(a) || W(a)) && b) || 0,
                        d = a.constructor,
                        e = -1,
                        d = (qa(d) && d.prototype) || K,
                        g = d === a,
                        h = Array(b),
                        l = 0 < b,
                        n = c.enumErrorProps && (a === ra || a instanceof Error),
                        m = c.enumPrototypes && qa(a);
                      ++e < b;

                    )
                      h[e] = e + '';
                    for (var k in a)
                      (m && 'prototype' == k) ||
                        (n && ('message' == k || 'name' == k)) ||
                        (l && Fa(k, b)) ||
                        ('constructor' == k && (g || !u.call(a, k))) ||
                        h.push(k);
                    if (c.nonEnumShadows && a !== K)
                      for (
                        b = a === Vb ? H : a === ra ? T : D.call(a),
                          c = w[b] || w[y],
                          b == y && (d = K),
                          b = Ha.length;
                        b--;

                      )
                        (k = Ha[b]),
                          (e = c[k]),
                          (g && e) || (e ? !u.call(a, k) : a[k] === d[k]) || h.push(k);
                    return h;
                  }
                  function eb (a) {
                    a = z(a);
                    for (var b = -1, c = C(a), d = c.length, e = Array(d); ++b < d; ) {
                      var g = c[b];
                      e[b] = [g, a[g]];
                    }
                    return e;
                  }
                  function mb (a) {
                    for (var b = C(a), c = -1, d = b.length, e = Array(d); ++c < d; )
                      e[c] = a[b[c]];
                    return e;
                  }
                  function ba (a, b, c) {
                    c && J(a, b, c) && (b = n);
                    return A(a) ? qb(a) : xa(a, b);
                  }
                  function Z (a) {
                    return a;
                  }
                  function qb (a) {
                    return Na(Pa(a, true));
                  }
                  function Oa (a) {
                    return Va(a) ? ab(a) : Gb(a);
                  }
                  var n,
                    cb = 200,
                    Tb = 'Expected a function',
                    O = '[object Arguments]',
                    I = '[object Array]',
                    R = '[object Boolean]',
                    S = '[object Date]',
                    T = '[object Error]',
                    N = '[object Function]',
                    U = '[object Number]',
                    y = '[object Object]',
                    V = '[object RegExp]',
                    H = '[object String]',
                    Ea = '[object ArrayBuffer]',
                    da = '[object Float32Array]',
                    ea = '[object Float64Array]',
                    fa = '[object Int8Array]',
                    ga = '[object Int16Array]',
                    ha = '[object Int32Array]',
                    ia = '[object Uint8Array]',
                    ja = '[object Uint8ClampedArray]',
                    ka = '[object Uint16Array]',
                    la = '[object Uint32Array]',
                    Mb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                    Lb = /^\w*$/,
                    Nb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
                    Ob = /\\(\\)?/g,
                    Jb = /\w*$/,
                    Ub = /^\[object .+?Constructor\]$/,
                    Kb = /^\d+$/,
                    Ha = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
                      ' '
                    ),
                    l = {};
                  l[da] = l[ea] = l[fa] = l[ga] = l[ha] = l[ia] = l[ja] = l[ka] = l[la] = true;
                  l[O] = l[I] = l[Ea] = l[R] = l[S] = l[T] = l[N] = l['[object Map]'] = l[U] = l[
                    y
                  ] = l[V] = l['[object Set]'] = l[H] = l['[object WeakMap]'] = false;
                  var q = {};
                  q[O] = q[I] = q[Ea] = q[R] = q[S] = q[da] = q[ea] = q[fa] = q[ga] = q[ha] = q[
                    U
                  ] = q[y] = q[V] = q[H] = q[ia] = q[ja] = q[ka] = q[la] = true;
                  q[T] = q[N] = q['[object Map]'] = q['[object Set]'] = q[
                    '[object WeakMap]'
                  ] = false;
                  var sa = { function: true, object: true },
                    X = sa[typeof exports] && exports && !exports.nodeType && exports,
                    Y = sa[typeof module] && module && !module.nodeType && module,
                    Wb = sa[typeof self] && self && self.Object && self,
                    rb = sa[typeof window] && window && window.Object && window,
                    Xb = Y && Y.exports === X && X,
                    r =
                      (X && Y && typeof global == 'object' && global && global.Object && global) ||
                      (rb !== (this && this.window) && rb) ||
                      Wb ||
                      this,
                    P = (function () {
                      try {
                        Object({ toString: 0 } + '');
                      } catch (a) {
                        return function () {
                          return false;
                        };
                      }
                      return function (a) {
                        return typeof a.toString != 'function' && typeof (a + '') == 'string';
                      };
                    })(),
                    Yb = Array.prototype,
                    ra = Error.prototype,
                    K = Object.prototype,
                    Vb = String.prototype,
                    pb = Function.prototype.toString,
                    u = K.hasOwnProperty,
                    D = K.toString,
                    Zb = r._,
                    ob = RegExp(
                      '^' +
                        pb
                          .call(u)
                          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                          .replace(
                            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                            '$1.*?'
                          ) +
                        '$'
                    ),
                    Ib = r.ArrayBuffer,
                    pa = K.propertyIsEnumerable,
                    va = ca(r, 'Set'),
                    $b = Yb.splice,
                    Ba = r.Uint8Array,
                    ua = ca(Object, 'create'),
                    Qb = Math.floor,
                    ac = ca(Array, 'isArray'),
                    sb = ca(Object, 'keys'),
                    na = Math.max,
                    Rb = Math.min,
                    Sb = 4294967294,
                    Pb = 2147483647,
                    gb = 9007199254740991,
                    B = {};
                  B[da] = r.Float32Array;
                  B[ea] = r.Float64Array;
                  B[fa] = r.Int8Array;
                  B[ga] = r.Int16Array;
                  B[ha] = r.Int32Array;
                  B[ia] = Ba;
                  B[ja] = r.Uint8ClampedArray;
                  B[ka] = r.Uint16Array;
                  B[la] = r.Uint32Array;
                  var w = {};
                  w[I] = w[S] = w[U] = {
                    constructor: true,
                    toLocaleString: true,
                    toString: true,
                    valueOf: true,
                  };
                  w[R] = w[H] = { constructor: true, toString: true, valueOf: true };
                  w[T] = w[N] = w[V] = { constructor: true, toString: true };
                  w[y] = { constructor: true };
                  wa(Ha, function (a) {
                    for (var b in w)
                      if (u.call(w, b)) {
                        var c = w[b];
                        c[a] = u.call(c, a);
                      }
                  });
                  var L = (f.support = {});
                  (function (a) {
                    var b = function () {
                        this.x = a;
                      },
                      c = { 0: a, length: a },
                      d = [];
                    b.prototype = { valueOf: a, y: a };
                    for (var e in new b()) d.push(e);
                    L.enumErrorProps = pa.call(ra, 'message') || pa.call(ra, 'name');
                    L.enumPrototypes = pa.call(b, 'prototype');
                    L.nonEnumShadows = !/valueOf/.test(d);
                    L.ownLast = 'x' != d[0];
                    L.spliceObjects = ($b.call(c, 0, 1), !c[0]);
                    L.unindexedChars = 'xx' != 'x'[0] + Object('x')[0];
                  })(1, 0);
                  var Ua = (function (a, b) {
                      return function (c, d) {
                        var e = c ? ma(c) : 0;
                        if (!F(e)) return a(c, d);
                        for (
                          var g = b ? e : -1, f = z(c);
                          (b ? g-- : ++g < e) && false !== d(f[g], g, f);

                        );
                        return c;
                      };
                    })(Qa),
                    Sa = (function (a) {
                      return function (b, c, d) {
                        var e = z(b);
                        d = d(b);
                        for (var g = d.length, f = a ? g : -1; a ? f-- : ++f < g; ) {
                          var l = d[f];
                          if (false === c(e[l], l, e)) break;
                        }
                        return b;
                      };
                    })(),
                    ma = ab('length'),
                    bc = oa(function (a) {
                      return bb(ya(a, false, true));
                    }),
                    cc = oa(function (a, b) {
                      var c;
                      if (E(a)) {
                        c = b;
                        var d = a ? a.length : 0,
                          e = [];
                        if (d) {
                          var g = -1,
                            f = aa(),
                            l = f === M,
                            n = l && c.length >= cb ? (ua && va ? new ta(c) : null) : null,
                            m = c.length;
                          n && ((f = Ja), (l = false), (c = n));
                          b: for (; ++g < d; )
                            if (((n = a[g]), l && n === n)) {
                              for (var k = m; k--; ) if (c[k] === n) continue b;
                              e.push(n);
                            } else 0 > f(c, n, 0) && e.push(n);
                        }
                        c = e;
                      } else c = [];
                      return c;
                    }),
                    Ia = (function (a, b) {
                      return function (c, d, e, f) {
                        var h = 3 > arguments.length;
                        return typeof d == 'function' && f === n && t(c)
                          ? a(c, d, e, h)
                          : Hb(c, Ca(d, f, 4), e, h, b);
                      };
                    })(function (a, b, c, d) {
                      var e = -1,
                        f = a.length;
                      for (d && f && (c = a[++e]); ++e < f; ) c = b(c, a[e], e, a);
                      return c;
                    }, Ua),
                    t =
                      ac ||
                      function (a) {
                        return A(a) && F(a.length) && D.call(a) == I;
                      },
                    dc = (function (a) {
                      return oa(function (b, c) {
                        var d = -1,
                          e = null == b ? 0 : c.length,
                          f = 2 < e ? c[e - 2] : n,
                          h = 2 < e ? c[2] : n,
                          l = 1 < e ? c[e - 1] : n;
                        typeof f == 'function'
                          ? ((f = Ma(f, l, 5)), (e -= 2))
                          : ((f = typeof l == 'function' ? l : n), (e -= f ? 1 : 0));
                        h && J(c[0], c[1], h) && ((f = 3 > e ? n : f), (e = 1));
                        for (; ++d < e; ) (h = c[d]) && a(b, h, f);
                        return b;
                      });
                    })(Za),
                    C = sb
                      ? function (a) {
                          var b = null == a ? n : a.constructor;
                          return (typeof b == 'function' && b.prototype === a) ||
                            (typeof a == 'function' ? f.support.enumPrototypes : E(a))
                            ? hb(a)
                            : x(a)
                            ? sb(a)
                            : [];
                        }
                      : hb;
                  ta.prototype.push = function (a) {
                    var b = this.data;
                    typeof a == 'string' || x(a) ? b.set.add(a) : (b.hash[a] = true);
                  };
                  f.callback = ba;
                  f.compact = function (a) {
                    for (var b = -1, c = a ? a.length : 0, d = -1, e = []; ++b < c; ) {
                      var f = a[b];
                      f && (e[++d] = f);
                    }
                    return e;
                  };
                  f.drop = ib;
                  f.flatten = function (a, b, c) {
                    var d = a ? a.length : 0;
                    c && J(a, b, c) && (b = false);
                    return d ? ya(a, b) : [];
                  };
                  f.keys = C;
                  f.keysIn = $;
                  f.map = nb;
                  f.matches = qb;
                  f.merge = dc;
                  f.pairs = eb;
                  f.property = Oa;
                  f.rest = kb;
                  f.restParam = oa;
                  f.toPlainObject = $a;
                  f.union = bc;
                  f.uniq = lb;
                  f.values = mb;
                  f.without = cc;
                  f.collect = nb;
                  f.iteratee = ba;
                  f.tail = kb;
                  f.unique = lb;
                  f.first = jb;
                  f.identity = Z;
                  f.includes = Ga;
                  f.indexOf = Da;
                  f.isArguments = G;
                  f.isArray = t;
                  f.isFunction = qa;
                  f.isNative = fb;
                  f.isObject = x;
                  f.isPlainObject = Aa;
                  f.isString = W;
                  f.isTypedArray = Q;
                  f.last = Ya;
                  f.noConflict = function () {
                    r._ = Zb;
                    return this;
                  };
                  f.reduce = Ia;
                  f.size = function (a) {
                    var b = a ? ma(a) : 0;
                    return F(b) ? b : C(a).length;
                  };
                  f.contains = Ga;
                  f.foldl = Ia;
                  f.head = jb;
                  f.include = Ga;
                  f.inject = Ia;
                  f.VERSION = '3.10.1';
                  typeof define == 'function' && typeof define.amd == 'object' && define.amd
                    ? ((r._ = f),
                      define(function () {
                        return f;
                      }))
                    : X && Y
                    ? Xb
                      ? ((Y.exports = f)._ = f)
                      : (X._ = f)
                    : (r._ = f);
                }.call(this));
              else;
              var _ = window._;
              var dictionaryCore = (function (_, console) {
                console.log('lightweightModule: Initializing DictionaryCore...');
                var _wl = window.location,
                  dictionary = {},
                  hpmmd = window.hpmmd || {
                    type: 'Cleansheet Wash',
                    page: { events: [] },
                    product: {},
                    user: {},
                    legacy: {},
                    promo: {},
                    version: 'WASH',
                  },
                  plugins = {},
                  configuration = { 'user.bluekai_guid': 'gBluekaiId|', delimiter: '|' };
                function setPlugins (pluginObject) {
                  plugins = pluginObject;
                }
                function getPlugins () {
                  return plugins;
                }
                function get (index) {
                  var returnValue = null;
                  try {
                    var israw = false;
                    if (index.indexOf('raw:') === 0) {
                      index = index.replace('raw:', '');
                      israw = true;
                    }
                    if (index.indexOf('g') === 0 && index.indexOf('|') != -1) {
                      var params = index.split('|'),
                        functionName = params.slice(0, 1),
                        args = params.slice(1, params.length);
                      returnValue = plugins[functionName].apply(this, args);
                    } else returnValue = eval('dictionary.' + index);
                    returnValue = israw ? returnValue : getPlugins.gCleanLowerCase(returnValue);
                  } catch (e) {}
                  return returnValue;
                }
                function set (index, value) {
                  var splits = index.split('.'),
                    levelsMinusLastElement = splits.slice(0, splits.length - 1),
                    lastElement = splits[splits.length - 1];
                  var pointer = dictionary;
                  _.map(levelsMinusLastElement, function (level) {
                    if (typeof pointer[level] !== 'object') pointer[level] = {};
                    pointer = pointer[level];
                  });
                  if (!!value) pointer[lastElement] = value;
                }
                function doInitialize (addlDictionaryObject) {
                  var hpmmdcopy = _.reduce(
                    this.hpmmd,
                    function (result, elem, key) {
                      if (key !== 'video') result[key] = elem;
                      return result;
                    },
                    {}
                  );
                  dictionary = JSON.parse(JSON.stringify(hpmmdcopy));
                  dictionary.video = this.hpmmd.video;
                  if (!!addlDictionaryObject)
                    _.map(addlDictionaryObject, function (metadataItem, metadataKey) {
                      if (!!metadataItem) {
                        var tmp = _.merge(dictionary[metadataKey], metadataItem);
                        dictionary[metadataKey] = tmp;
                        if (metadataKey == 'page')
                          dictionary[metadataKey].events = metadataItem.events;
                        if (metadataKey == 'product')
                          dictionary[metadataKey].list = metadataItem.list;
                        if (!!dictionary[metadataKey])
                          _.map(addlDictionaryObject[metadataKey], function (
                            metadataItem2,
                            metadataKey2
                          ) {
                            dictionary[metadataKey][metadataKey2] = metadataItem2;
                          });
                        else dictionary[metadataKey] = metadataItem;
                      }
                    });
                  _.map(this.configuration, function (value, key) {
                    try {
                      if (typeof value == 'function') set(key, value(dictionary));
                      else if (
                        typeof value == 'string' &&
                        (value.indexOf('raw:') === 0 ||
                          (value.indexOf('g') === 0 && value.indexOf('|') != -1))
                      )
                        set(key, get(value));
                      else set(key, value);
                    } catch (e) {
                      console.log('ERROR: Issue with plugin ' + key);
                    }
                  });
                }
                window.usm_get = get;
                window.usm_set = set;
                window.usm_getPlugins = getPlugins;
                return {
                  configuration: configuration,
                  hpmmd: hpmmd,
                  doInitialize: doInitialize,
                  get: get,
                  set: set,
                  getPlugins: getPlugins,
                  setPlugins: setPlugins,
                };
              })(_, console);
              var dictionary = (function (dictionary, _, console) {
                console.log('lightweightModule: Initializing Dictionary...');
                var _wl = window.location,
                  hpmmd = window.hpmmd || {
                    type: 'Cleansheet Wash',
                    page: { events: [] },
                    product: {},
                    user: {},
                    legacy: {},
                    promo: {},
                    version: 'WASH',
                  };
                dictionary.hpmmd = hpmmd;
                hpmmd.page.site = hpmmd.page.site || 'hhos';
                if (
                  document.URL.indexOf('eprime') !== -1 ||
                  document.URL.indexOf('b2b') !== -1 ||
                  document.URL.indexOf('elite') !== -1 ||
                  document.URL.indexOf('h20143') !== -1 ||
                  document.URL.indexOf('elidev') !== -1
                )
                  hpmmd.page.site = hpmmd.page.site || 'b2b';
                hpmmd.page.site = hpmmd.page.site.replace('ec:', '');
                var platform;
                if (hpmmd.page.site === 'hhos') platform = 'wcs web';
                else platform = '';
                dictionary.configuration = {
                  delimeter: '|',
                  'code.hpversion': 'unity:bs-Ensighten:js-20150810A',
                  'page.server': _wl.hostname,
                  'metatags.language': 'gMetaTags|language',
                  'product.category': 'gDetermineProductCategory|',
                  'page.platform': platform,
                  'metatags.country': 'gMetaTags|country',
                  'metatags.segment': 'gMetaTags|segment',
                  'metatags.lifecycle': 'gMetaTags|lifecycle',
                  'metatags.sectionid': 'gMetaTags|web_section_id',
                  'metatags.business_unit': 'gDetermineProductCategory|business_unit',
                  'metatags.region': function () {
                    return 'ams';
                  },
                  'metatags.hp_design_version': 'gMetaTags|hp_design_version',
                  'page.name': hpmmd.page.name,
                  'page.site': hpmmd.page.site,
                  'page.section': hpmmd.page.section,
                  'page.subsection': hpmmd.page.subsection,
                  'page.page_function': hpmmd.page.page_function,
                  'page.pdptab': hpmmd.page.pdptab,
                  'page.tabname': hpmmd.page.tabname,
                  'page.tabs': hpmmd.page.tabs,
                  'page.sectiontaxonomy': 'gCleanLowerCase|hpmmd.page.sectiontaxonomy',
                  'page.store': function () {
                    return dictionary.getPlugins().gCleanLowerCase(hpmmd.page.store) || 'gen';
                  },
                  'page.login': 'gCleanLowerCase|hpmmd.page.login',
                  'page.url': _wl.protocol + '//' + _wl.host + _wl.pathname,
                  'page.fullurl': _wl.href,
                  'page.aoid': 'gQuery|aoid',
                  'page.jumpid': 'gAtlasJumpId|all|atlasjumpid',
                  'page.in_jumpid': 'gAtlasJumpId|in|atlasjumpid',
                  'page.em_jumpid': 'gAtlasJumpId|em|atlasjumpid',
                  'page.re_jumpid': 'gAtlasJumpId|re|atlasjumpid',
                  'page.undefined_jumpid': 'gAtlasJumpId|undef|atlasjumpid',
                  'page.all_jumpid': 'gAtlasJumpId|all|atlasjumpid',
                  'page.previous_page_click': 'gPrevPageClick|',
                  'user.serial_sessionid': 'gCookie|JSESSIONID',
                  'promo.kenshoo_id': 'gQuery|k_clickid',
                  'promo.aoid': 'gQuery|aoid',
                  'product.purchase_id': hpmmd.product.purchaseID,
                  'page.homepage_referral_click': 'gQuery|hpclick',
                  'page.events': function () {
                    var page = dictionary.get('page') || {};
                    page.events = page.events || [];
                    page.events.splice(0, 0, 'page.view');
                    return page.events;
                  },
                  'search.meta': function () {
                    var searchObject = dictionary.get('search') || {},
                      returnValue = {},
                      value,
                      pageEvents = dictionary.get('page.events') || [];
                    try {
                      value = parseInt(searchObject.number_of_results, 10);
                    } catch (e) {}
                    if (value >= 0) {
                      returnValue.valid = true;
                      if (!!searchObject.number_of_results)
                        returnValue.number_of_results = searchObject.number_of_results;
                      if (!!searchObject.meta) returnValue.meta = searchObject.meta;
                      if (!!searchObject.facets) returnValue.facets = searchObject.facets;
                      if (!!searchObject.sort) returnValue.sort = searchObject.sort;
                      if (value == 0) {
                        returnValue = 'null';
                        pageEvents.push('search.null');
                      } else {
                        returnValue = JSON.stringify(returnValue)
                          .replace(/["'\{\}]+/g, '')
                          .replace(/\s+/, ' ');
                        pageEvents.push('search.valid');
                      }
                      if (pageEvents.length > 0) dictionary.set('page.events', pageEvents);
                    } else returnValue = null;
                    return returnValue;
                  },
                  'user.email_id': 'gQuery|sid,rid',
                  'page.cart_id': 'gCookie|WC_CartOrderId_',
                  'page.store_detail': 'ams:us:eprime',
                  'page.product_hierarchy': function () {
                    var hierraw = dictionary.get('page.sectiontaxonomy') || ' :',
                      hier = hierraw.split(':')[1];
                    return 'home:customer'.indexOf(hier) == -1 ? hier : null;
                  },
                  'page.userid': 'raw:gAtlasUserId|hpshopping|hpshopping2',
                  'page.navigation': 'gCookie|unityfacet|c',
                };
                return dictionary;
              })(dictionaryCore, _, console);
              var dictionaryPlugins = (function (dictionary, _, console) {
                console.log('lightweightModule: Initializing DictionaryPlugins...');
                var cookie = {
                  get: function (k) {
                    var c = ' ' + document.cookie,
                      s = c.indexOf(' ' + k + '='),
                      e = s < 0 ? s : c.indexOf(';', s),
                      v = s < 0 ? '' : c.substring(s + 2 + k.length, e < 0 ? c.length : e);
                    return unescape(v);
                  },
                  set: function (k, v, e, p, d) {
                    var exp =
                      typeof e == 'object'
                        ? e
                        : new Date(new Date().getTime() + (!e ? 0 : e) * 86400000);
                    document.cookie =
                      k +
                      '=' +
                      escape(v) +
                      (!!e ? '; expires=' + exp.toGMTString() : '') +
                      '; path=' +
                      (!p ? '/' : p) +
                      '; ' +
                      (!!d ? ' domain=' + d : '');
                  },
                };
                function gMetaTags (specificTagName) {
                  var metatags = document.getElementsByTagName('meta') || {},
                    returnArray = {},
                    htmlTag = document.getElementsByTagName('html') || [{}];
                  if (typeof hpmmd !== 'undefined' && !!hpmmd.metatags)
                    returnArray = hpmmd.metatags;
                  returnArray['language'] = htmlTag[0].lang || 'en-us';
                  _.map(metatags, function (key) {
                    returnArray[key.name] = key.content;
                  });
                  returnArray['country'] = returnArray['target_country'];
                  returnArray['business_unit'] = returnArray['bu'];
                  if (!!specificTagName) return returnArray[specificTagName];
                  return returnArray;
                }
                function gBluekaiId () {
                  var s = {};
                  (function (w, s) {
                    function readCookie (c) {
                      var unescape = typeof unescape == 'function' ? unescape : decodeURIComponent,
                        r = new RegExp(c + '\\=([^\\;]+)'),
                        found = r.exec(document.cookie);
                      return found ? unescape(found[1]) : null;
                    }
                    var numberOfCheckTimes = 5;
                    function latentFindBluekaiId () {
                      if (--numberOfCheckTimes <= 0) return;
                      if (!!w._bluekai_guid)
                        try {
                          document.cookie = 'bkguid=' + w._bluekai_guid + ';domain=.hp.com;path=/';
                        } catch (e) {}
                      else setTimeout(latentFindBluekaiId, 200);
                    }
                    var bluekaiId = w._bluekai_guid || readCookie('bkguid');
                    if (!!bluekaiId) s.prop71 = 'bkguid:' + unescape(bluekaiId);
                    else setTimeout(latentFindBluekaiId, 200);
                  })(window, s);
                  return s.prop71;
                }
                function gClean (value) {
                  value = !!value && value.indexOf('.') != -1 ? eval(value) : value || '';
                  return value
                    .replace(/^\[/, '')
                    .replace(/\]$/, '')
                    .replace(/[\\<]+/, '')
                    .replace(/[\\>]+/, '')
                    .replace(/\s+/, ' ')
                    .replace(/^\s*/, '')
                    .replace(/\s*$/, '');
                }
                function gCleanLowerCase (value) {
                  return gClean(value).toLowerCase();
                }
                function gCookie (param, flag) {
                  var r = cookie.get(param);
                  if (flag === 'c' || flag === 1) {
                    cookie.set(param, '-', -100);
                    cookie.set(param, '-', -100, '/', '.hp.com');
                  }
                  return unescape(r);
                }
                function gQuery () {
                  var s = omnitureObject;
                  var i,
                    param = '';
                  for (i = arguments.length - 1; i >= 0; i--) param += arguments[i] + ',';
                  var r = !s.Util.getQueryParam ? null : s.Util.getQueryParam.call(s, param);
                  return !!r ? r : null;
                }
                function gUnityUserId (c1, c2, flag) {
                  var r = cookie.get(c2) || cookie.get(c1);
                  if (flag === 'c' || flag === 1) cookie.set(param, '-', -1000);
                  var userid = r.substring(r.indexOf('user_id'), r.length);
                  var lastindex = userid.indexOf('&');
                  if (lastindex < 0) lastindex = userid.length;
                  userid = userid.substring(userid.indexOf('-!-') + 3, lastindex);
                  if (userid.length < userid.indexOf('-!-') + 3) userid = '';
                  return unescape(userid);
                }
                function gUnityJumpId (type, cookieValue) {
                  var cookieVal1 = cookie.get(cookieValue),
                    hpjumpidcookie = cookie.get('hpjumpidv2');
                  var _jumpid =
                      dictionary.get('page.jumpid') ||
                      gQuery('jumpid') ||
                      hpjumpidcookie ||
                      cookieVal1,
                    jpre = '',
                    r = '';
                  if (cookieVal1 == _jumpid) cookie.set(cookieValue, '', -1, '/');
                  if (hpjumpidcookie == _jumpid) cookie.set('hpjumpidv2', '', -1, '/');
                  if (!!_jumpid && _jumpid.length > 0) {
                    jpre = _jumpid.split('_')[0];
                    r = _jumpid;
                    var returnTest =
                      type.indexOf(jpre) !== -1 ||
                      jpre === type ||
                      (type === 'all' && _jumpid.length > 0);
                    return returnTest ? r : null;
                  }
                }
                function gDetermineProductCategory (type) {
                  var href = window.location.href.toLowerCase(),
                    rvalue;
                  if (type == 'business_unit') {
                    if (href.indexOf('laptop') != -1) rvalue = 'psg';
                    if (href.indexOf('desktop') != -1) rvalue = 'psg';
                    if (href.indexOf('printers') != -1) rvalue = 'ipg';
                    if (href.indexOf('ink') != -1) rvalue = 'ipg';
                    if (href.indexOf('desktop') != -1) rvalue = 'psg';
                    if (href.indexOf('accessories') != -1) rvalue = 'psg';
                  } else {
                    rvalue = unescape(unescape(gQuery('path') || 'home|home'));
                    return rvalue.split('|')[1].toLowerCase();
                  }
                  return rvalue;
                }
                function gPrevPageClick () {
                  function overrideClickmap (_cookieVal) {
                    var t = _cookieVal,
                      t2,
                      t3;
                    t = !!t ? '' : t;
                    if (t.length > 1) {
                      t3 = t.split('=');
                      if (t3.length > 2) t3 = t.split('=');
                      t2 = unescape(t3[t3.length - 1]).split('&oid=');
                      t = unescape(t2[t2.length - 1]).split('&')[0];
                      t = t.toLowerCase().indexOf('welcomeov2') != -1 ? t : '';
                    } else t = '';
                    return t;
                  }
                  var r = gCookie('h_cm2', 0);
                  var lpi = gCookie('h_cm', 1);
                  lpi = lpi ? overrideClickmap(lpi) : '';
                  hpmmd.page.previous_page_click = r || lpi || null;
                  r = hpmmd.page.previous_page_click;
                  if (r) {
                    hpmmd.promo.internal = r;
                    hpmmd.legacy.promo = { internal: lpi };
                  } else r = '';
                  return r.length <= 1 ? '' : r;
                }
                dictionary.setPlugins({
                  cookie: cookie,
                  gCookie: gCookie,
                  gQuery: gQuery,
                  gClean: gClean,
                  gMetaTags: gMetaTags,
                  gCleanLowerCase: gCleanLowerCase,
                  gDetermineProductCategory: gDetermineProductCategory,
                  gUnityUserId: gUnityUserId,
                  gUnityJumpId: gUnityJumpId,
                  gPrevPageClick: gPrevPageClick,
                });
              })(dictionary, _, console);
              var mapCore = (function (dictionary, _, console) {
                console.log('lightweightModule: Initializing OmnitureMapCore...');
                var devURLs = ['hp-webplatform.com', 'localhost'];
                var isdev = false;
                var accountMap = { defaultReportsuite: ['hpi-hphqelite1.0-dev'] };
                var settingsMap = {
                  linkInternalFilters: 'javascript:,.hp,hp.',
                  trackInlineStats: true,
                  trackDownloadLinks: true,
                  trackExternalLinks: true,
                  linkDownloadFileTypes: 'exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls',
                  linkLeaveQueryString: false,
                  trackingServer: 'met1.hp.com',
                  trackingServerSecure: 'met2.hp.com',
                  charSet: 'UTF-8',
                  visitorNamespace: 'hpcorp',
                  linkTrackVars: 'None',
                  linkTrackEvents: 'None',
                  currencyCode: 'USD',
                };
                var eventMap = {
                  pageview: ['event4'],
                  scopen: ['scOpen'],
                  scadd: ['scAdd'],
                  scview: ['scView'],
                  scremove: ['scRemove'],
                  sccheckout: ['scCheckout'],
                  purchase: ['purchase'],
                };
                var variableMap = {
                  'page.site:page.section:page.name': ['pageName', 'eVar55'],
                  'page.site:page.section': ['channel'],
                  'page.pagetype': ['pageType'],
                  'page.server': ['server'],
                  'metatags.region': ['prop75'],
                  'metatags.country': ['prop7'],
                  'metatags.language': ['prop8'],
                  'metatags.segment': ['prop9'],
                  'metatags.lifecycle': ['prop10'],
                  'metatags.sectionid': ['prop12'],
                  'page.reportsuiteids': ['prop13'],
                  'metatags.business_unit': ['prop16'],
                  'page.homepage_referral_click': ['eVar10'],
                  'user.email_id': ['eVar13'],
                  'code.hpversion': ['prop22'],
                  'page.url': ['prop49'],
                  'page.fullurl': ['prop50'],
                  'product.currency': ['currencyCode'],
                  'metatags.country:metatags.language:metatags.segment': ['eVar1'],
                  'user.id': ['eVar8'],
                  'search.filters': ['prop37', 'eVar37'],
                  'user.bluekai_id': ['prop71'],
                  'search.keyword': ['prop36', 'eVar36'],
                };
                function getAccount () {
                  var defaultReportSuite = this.accountMap.defaultReportsuite[0],
                    reportSuite = _.reduce(
                      this.accountMap,
                      function (currentReportSuite, item) {
                        var returnValue = currentReportSuite,
                          doesmatch = false,
                          isAlreadyFound = currentReportSuite !== defaultReportSuite;
                        if (item.length >= 2 && !isAlreadyFound) {
                          hrefCaseInsensitive = window.location.href.toLowerCase();
                          doesmatch = _.reduce(
                            _.tail(item),
                            function (alreadyMatches, item) {
                              if (typeof item == 'function')
                                alreadyMatches = alreadyMatches || item(window.location.href);
                              if (typeof item == 'string')
                                alreadyMatches =
                                  alreadyMatches ||
                                  hrefCaseInsensitive.indexOf(item.toLowerCase()) !== -1;
                              if (typeof item == 'object' && !!item.test)
                                alreadyMatches = alreadyMatches || item.test(window.location.href);
                              return alreadyMatches;
                            },
                            false
                          );
                        }
                        return doesmatch ? item[0] : returnValue;
                      },
                      defaultReportSuite
                    ),
                    returnValue = reportSuite;
                  dictionary.set('page.reportsuiteids', returnValue);
                  return returnValue;
                }
                function doMap (s) {
                  _.map(this.settingsMap, function (value, setting) {
                    s[setting] = value;
                  });
                  s.events = dictionary.get('page.events') || [];
                  s.events = s.events.join(',').toLowerCase();
                  _.map(this.eventMap, function (eventValue, possibleEvent) {
                    possibleEvent = possibleEvent.toLowerCase();
                    if (s.events.indexOf(possibleEvent) != -1)
                      if (s.events.indexOf(possibleEvent + ':') !== -1) {
                        var regResults = new RegExp(possibleEvent + '\\:([^\\s\\,]+)').exec(
                          s.events
                        );
                        s.events = s.events.replace(
                          new RegExp(regResults[0], 'g'),
                          _.map(eventValue, function (eachEvent) {
                            return eachEvent + ':' + regResults[1];
                          }).join(',')
                        );
                      } else
                        s.events = s.events.replace(
                          new RegExp(possibleEvent, 'g'),
                          eventValue.join(',')
                        );
                  });
                  s.events = _.unique(s.events.split(',')).join(',');
                  var seg_meta_tag = dictionary.get('metatags.segment');
                  if (typeof seg_meta_tag !== 'undefined')
                    switch (seg_meta_tag.toLowerCase().replace(/^\s+|\s+$/g, '')) {
                      case 'hhos':
                      case 'hho':
                      case 'consumer.home':
                        dictionary.set('metatags.segment', 'consumer.home');
                        break;
                      case 'smb':
                      case 'smbs':
                      case 'commercial.smb':
                        dictionary.set('metatags.segment', 'commercial.smb');
                        break;
                      case 'leb':
                      case 'commercial.large':
                      case 'commercial.b2b':
                        dictionary.set('metatags.segment', 'commercial.large');
                        break;
                      case 'ga':
                      case 'commercial.ga':
                        dictionary.set('metatags.segment', 'commergial.ga');
                        break;
                      case 'ghe':
                      case 'commercial.pubsector':
                        dictionary.set('metatags.segment', 'commercial.pubsector');
                        break;
                      case 'segment neutral':
                        dictionary.set('metatags.segment', 'segment neutral');
                        break;
                      case 'partner':
                      case 'partners':
                        dictionary.set('metatags.segment', 'partners');
                        break;
                      case 'corporate':
                        dictionary.set('metatags.segment', 'corporate');
                        break;
                      default:
                        dictionary.set('metatags.segment', 'undefined segment');
                        break;
                    }
                  _.map(this.variableMap, function (value, setting) {
                    var result;
                    function tryDelimiter (delimiter, string, optionalDelimiter) {
                      optionalDelimiter = optionalDelimiter || dictionary.get('delimiter');
                      if (string.indexOf(delimiter) != -1)
                        return _.reduce(
                          string.split(delimiter),
                          function (memo, value) {
                            memo.push(dictionary.get(value));
                            return memo;
                          },
                          []
                        ).join(optionalDelimiter);
                    }
                    result =
                      tryDelimiter('|', setting, '|') ||
                      tryDelimiter(':', setting, ':') ||
                      dictionary.get('+', setting) ||
                      dictionary.get(setting);
                    function addDelimiter (complex) {
                      return _.isArray(complex)
                        ? complex.join(dictionary.get('delimiter') || ':')
                        : complex;
                    }
                    if (!!result)
                      if (typeof value == 'object' && _.size(value) > 0) {
                        var lastItem = null;
                        _.map(value, function (item) {
                          if (!lastItem) {
                            s[item] = addDelimiter(result).toLowerCase();
                            lastItem = item
                              .replace('eVar', 'v')
                              .replace('prop', 'c')
                              .replace('hier', 'h')
                              .replace('channel', 'ch')
                              .replace('campaign', 'v0');
                          } else s[item] = 'D=' + lastItem;
                        });
                      } else if (typeof value !== 'object')
                        s[value] = addDelimiter(result).toLowerCase();
                  });
                }
                return {
                  accountMap: accountMap,
                  settingsMap: settingsMap,
                  eventMap: eventMap,
                  variableMap: variableMap,
                  getAccount: getAccount,
                  doMap: doMap,
                  postmap: function () {},
                  premap: function () {},
                };
              })(dictionary, _, console);
              var map = (function (map, dictionary, _, console) {
                console.log('lightweightModule: Initializing OmnitureMap...');
                map.accountMap = {
                  lithiumSupportForums: [
                    'hphqglobal,hpcsglobal,hphq-ces-global,hphq-ces-csf-global',
                    'h30471.',
                    'h30467.',
                    'h30478.',
                    'h30487.',
                    'h30491.',
                    'h30492.',
                    'h30434.',
                  ],
                  defaultReportsuite: ['hphqglobal,hphqna'],
                };
                map.settingsMap = _.merge(map.settingsMap, {
                  linkInternalFilters: 'javascript:,hp.com',
                });
                map.variableMap = _.merge(map.variableMap, {
                  'page.site:page.section:page.subsection:page.page_function:page.name': [
                    'pageName',
                    'prop38',
                    'eVar55',
                    'hier1',
                  ],
                  'page.site:page.section': ['channel'],
                  'page.site:page.section:page.subsection:page.name': ['prop25', 'eVar30'],
                  'product.category': ['eVar23', 'prop34'],
                  'user.id:user.account:user.account_id:user.account_eboid:user.account_ncrflevel:user.role:user.state': [
                    'eVar8',
                  ],
                  'product.payment_type': ['eVar41'],
                });
                map.eventMap = _.merge(map.eventMap, {
                  'category.view': ['event5'],
                  'config.start': ['event60'],
                  'subcategory.view': ['event5'],
                  'series.view': ['prodView,event1'],
                  'page.view': ['event4'],
                  'model.view': ['event1'],
                  'pdp.view': ['prodView,event1'],
                  'product.view': ['prodView,event1'],
                  'bundle.view': ['prodView'],
                  'checkout.complete': ['event70'],
                  'checkout.pr.start': ['event40'],
                  'checkout.pr.complete': ['event41'],
                  'pr.new': ['event42'],
                  'pr.review': ['event43'],
                  'pr.review.manager': ['event43'],
                  'pr.reject': ['event45'],
                  'pr.approve': ['event45'],
                  'pr.complete': ['event49'],
                  'po.new': ['event51'],
                  'po.review': ['event52'],
                  'po.complete': ['event53'],
                  'quote.new': ['event71'],
                  'quote.review': ['event72'],
                  'quote.complete': ['event73'],
                  purchase: ['purchase,event33,event34,event35,event36'],
                });
                map.eventMap = _.merge(map.eventMap, {
                  'cart.new': ['scOpen'],
                  'cart.add': ['scAdd'],
                  'cart.remove': ['scRemove'],
                  'cart.view': ['scView'],
                  'checkout.start': ['scCheckout'],
                });
                map.variableMap = _.merge(map.variableMap, {
                  'page.site:page.section:page.subsection:page.name': ['prop25', 'eVar30'],
                  'page.aoid': ['campaign'],
                  'page.server': ['server'],
                  'product.hierarchy': ['hier2'],
                  'metatags.segment|page.name': ['prop21'],
                  'code.hpversion': ['prop22'],
                  'page.url': ['prop49'],
                  'page.fullurl': ['prop50'],
                  'page.pdptab': ['prop56'],
                  'search.keywords': ['prop36', 'eVar36'],
                  'search.meta': ['prop37', 'eVar37'],
                  'search.hpcom_keywords': ['prop6', 'eVar6'],
                  'product.payment_type': ['eVar41'],
                  'page.platform': ['prop1'],
                  'page.discount_tier': ['prop5'],
                  'metatags.country': ['prop7'],
                  'metatags.language': ['prop8'],
                  'metatags.segment': ['prop9'],
                  'metatags.lifecycle': ['prop10'],
                  'metatags.sectionid': ['prop12'],
                  'page.reportsuiteids': ['prop13'],
                  'user.login': ['prop14'],
                  'metatags.business_unit': ['prop16'],
                  'metatags.hp_design_version': ['prop51'],
                  'page.tabname': ['prop56'],
                  'page.page_function': ['prop57'],
                  'user.account:user.state:user.id': ['eVar8'],
                  'metatags.region:metatags.country:page.site': ['eVar5'],
                  'metatags.country:metatags.language:metatags.segment': ['eVar1'],
                  'user.email_id': ['eVar10'],
                  'promo.coupon_code': ['eVar43'],
                  'product.purchase_id': ['purchaseID'],
                  'product.name': ['prop35'],
                });
                return map;
              })(mapCore, dictionary, _, console);
              var postMapCore = (function (dictionary, map, _, console) {
                console.log('lightweightModule: Initializing OmniturePostMapCore...');
                var postmapPluginStack = {
                  doCommonPlugins: function (s) {},
                  doGlobalNavMeasurement: function (s) {
                    (function () {
                      function clearClickTrackingCookies () {
                        var expires = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
                        s.Util.cookieWrite('h_inavclk', '-', expires);
                        s.Util.cookieWrite('h_cm', '-', expires);
                        s.Util.cookieWrite('h_cm2', '-', expires);
                      }
                      function setSegmentCK (override) {
                        var expires = new Date(),
                          seg_tag =
                            override || document.getElementsByName('segment').length > 0
                              ? document.getElementsByName('segment')[0].getAttribute('content')
                              : null,
                          cookie_name = '';
                        expires.setTime(expires.getTime() + 30 * 24 * 60 * 60 * 1000);
                        if (!!seg_tag) {
                          seg_tag = seg_tag.toLowerCase().replace(/^\s+|\s+$/g, '');
                          if (
                            seg_tag != 'segment neutral' ||
                            s.Util.cookieRead('hp_last_segment') === ''
                          ) {
                            switch (seg_tag) {
                              case 'smb':
                              case 'commercial.smb':
                                cookie_name = 'commercial.smb';
                                break;
                              case 'hho':
                              case 'consumer.home':
                              case 'commercial.hho':
                              case 'consumer':
                              case 'consumer-public':
                                cookie_name = 'consumer.home';
                                break;
                              case 'commercial.b2b':
                              case 'leb':
                              case 'large':
                              case 'commercial':
                              case 'commercial.large':
                                var sub_bu = '';
                                if (document.getElementsByName('sub_bu').length > 0)
                                  sub_bu =
                                    '.' +
                                    document
                                      .getElementsByName('sub_bu')[0]
                                      .getAttribute('content')
                                      .toLowerCase();
                                else if (typeof hpmmd === 'object')
                                  sub_bu = !!hpmmd.page.sub_business_unit
                                    ? '.' + hpmmd.page.sub_business_unit
                                    : '';
                                cookie_name = 'commercial.large' + sub_bu;
                                break;
                              case 'ghe':
                              case 'commercial.pubsector':
                                cookie_name = 'commercial.pubsector';
                                break;
                              case 'ga':
                              case 'commercial.ga':
                                cookie_name = 'commercial.ga';
                                break;
                              case 'segment neutral':
                              case 'any':
                              case 'neutral':
                              case 'segment-neutral':
                              case 'products':
                                if (!!!s.Util.cookieRead('hp_last_segment'))
                                  cookie_name = 'segment neutral';
                                else cookie_name = s.Util.cookieRead('hp_last_segment');
                                break;
                              case 'partner':
                              case 'partners':
                                cookie_name = 'partners';
                                break;
                              case 'corporate':
                                if (
                                  s.Util.cookieRead('hp_last_segment') === 'segment neutral' ||
                                  s.Util.cookieRead('hp_last_segment') === '' ||
                                  s.Util.cookieRead('hp_last_segment') == 'any'
                                )
                                  cookie_name = 'corporate';
                                break;
                              default:
                                if (
                                  seg_tag == 'consumer.home' ||
                                  seg_tag == 'commercial.smb' ||
                                  seg_tag == 'commercial.large' ||
                                  seg_tag == 'commercial.pubsector' ||
                                  seg_tag == 'commercial.ga' ||
                                  seg_tag == 'partners' ||
                                  seg_tag == 'segment neutral'
                                )
                                  cookie_name = seg_tag;
                                break;
                            }
                            if (!!cookie_name)
                              document.cookie =
                                'hp_last_segment=' +
                                cookie_name +
                                ';expires=' +
                                expires.toGMTString() +
                                '; domain=.hp.com;path=/';
                          }
                        } else {
                          var smt;
                          if (document.getElementsByName('segment').length === 0) {
                            smt = document.createElement('meta');
                            smt.setAttribute('name', 'segment');
                            document.getElementsByTagName('head')[0].appendChild(smt);
                          } else smt = document.getElementsByName('segment')[0];
                          if (/(shopping|store).hp.com/.test(window.location.href)) {
                            cookie_name = 'consumer.home';
                            smt.setAttribute('content', 'consumer.home');
                          } else if (/shopping\d?.hp.com/.test(window.location.href)) {
                            cookie_name = 'commercial.smb';
                            smt.setAttribute('content', 'commercial.smb');
                          } else {
                            if (s.Util.cookieRead('hp_last_segment') === '')
                              cookie_name = 'segment neutral';
                            smt.setAttribute('content', 'segment neutral');
                          }
                          document.cookie =
                            'hp_last_segment=' +
                            cookie_name +
                            ';expires=' +
                            expires.toGMTString() +
                            '; domain=.hp.com;path=/';
                        }
                        document.cookie =
                          'hp_cust_seg_sel=-;expires=' +
                          new Date('Thu, 01 Jan 1970 00:00:00 GMT') +
                          '; domain=.hp.com;path=/';
                      }
                      var inavcookieValue = s.Util.cookieRead('h_inavclk'),
                        legacyeVar13 = s.Util.cookieRead('h_cm') || s.Util.cookieRead('h_cm2'),
                        metatags = hpmmd.metatags || {},
                        _setValue =
                          typeof _set == 'function'
                            ? _set
                            : function (x) {
                                return x;
                              },
                        country = hpmmd.page.country || metatags.target_country || 'us',
                        language = hpmmd.page.language || metatags.language || 'en';
                      if (!!window.jsmd) metatags = jsmd.mdata.metatags;
                      else if (typeof window.dictionary !== 'undefined')
                        metatags = dictionary.get('metatags');
                      if (!!inavcookieValue && inavcookieValue !== '-') {
                        s.eVar68 = unescape(inavcookieValue);
                        s.prop68 = 'D=v68';
                        s.events = !!s.events ? s.events + ',event69' : 'event69';
                        if (inavcookieValue.indexOf('home:') == 0)
                          s.eVar13 =
                            country + ':' + language + ':' + inavcookieValue.replace('home:', '');
                        clearClickTrackingCookies();
                      } else if (!!legacyeVar13) {
                        s.eVar13 = unescape(legacyeVar13);
                        clearClickTrackingCookies();
                      }
                      s.prop51 = s.prop51 + ':' + (metatags.hp_inav_version || 'hflegacy');
                      s.prop73 = s.getPreviousValue(s.pageName, 's_prevPage');
                      s.eVar69 = 'D=c73';
                      var setProp21 = function () {
                        var seg = s.Util.cookieRead('hp_last_segment') || '';
                        seg = seg.length > 0 ? seg.toLowerCase() : 'noseg';
                        s.prop21 = 'D="cs:' + seg;
                      };
                      setSegmentCK('consumer.home');
                      setProp21();
                    })();
                  },
                  doCommonJumpid: function (s) {
                    hpmmd.cookie = dictionary.getPlugins().cookie;
                    function s_hp_jumpIdProcessing (s) {
                      var hpmmd = window.jsmd ? jsmd.plugin : window.hpmmd || { ck: {} },
                        cookieBaseObject = hpmmd.ck || hpmmd.cookie || {},
                        cookieSet = cookieBaseObject.set || s_vp_setPersistentCookieExact,
                        cookieGet =
                          cookieBaseObject.get ||
                          function (x) {
                            s.Util.cookieRead(x);
                          },
                        getQueryParam = hpmmd.gQuery
                          ? function (x) {
                              return hpmmd.gQuery(x);
                            }
                          : function (x) {
                              return s.Util.getQueryParam(x);
                            };
                      window.s_setJumpid = function (jumpid) {
                        cookieSet('hpjumpidv2', jumpid, 30);
                      };
                      s.eVar54 = getQueryParam('k_clickid') || '';
                      var aoid = getQueryParam('aoid') || '';
                      if (
                        aoid.length > 0 &&
                        !(hpmmd.campaign != null && hpmmd.campaign.length > 0)
                      )
                        s.campaign = hpmmd.campaign = aoid;
                      var hootpostid = getQueryParam('hootpostid') || '';
                      if (hootpostid != '') s.eVar29 = hootpostid;
                      var mailzqj = getQueryParam('mailzqj') || '';
                      if (mailzqj != '' && mailzqj.length < 11) s.eVar20 = _set(mailzqj);
                      var jumpid = getQueryParam('jumpid') || '',
                        jumpidc = cookieGet('hpjumpidv2') || cookieGet('atlasjumpid');
                      if (!!jumpidc && (jumpid.length < 3 || jumpid.indexOf('in_') === 0)) {
                        jumpidc = jumpidc.split('"').join('');
                        cookieSet('hpjumpidv2', 'i', -1);
                        cookieSet('atlasjumpid', 'i', -1);
                        jumpid = jumpidc.length > 3 ? jumpidc : jumpid;
                      }
                      jumpid = jumpid.toLowerCase();
                      jumpid = jumpid.split('#')[0];
                      var prevJumpid = s.getPreviousValue(jumpid || '-', 'ddj');
                      s.eVar15 = s.eVar16 = s.eVar17 = s.eVar18 = s.eVar19 = '';
                      if (jumpid.length > 3 && prevJumpid !== jumpid) {
                        jumpid = jumpid.indexOf('<') != -1 ? escape(jumpid) : jumpid;
                        if (window.s_hp_doFilterJumpids) jumpid = s_hp_doFilterJumpids(jumpid);
                        var s_jumpIdType = jumpid.substring(0, 3);
                        if (typeof RegExp != 'undefined') {
                          var getMCC = /mcc\|([A-Za-z0-9]+)/i;
                          if (getMCC.test(jumpid)) {
                            r = getMCC.exec(jumpid);
                            if (r.length > 0) s.eVar9 = '||' + r[1];
                          }
                        }
                        var strip_jumpid = jumpid;
                        var isDart = jumpid.indexOf('dm:') != -1;
                        var isSf = jumpid.indexOf('sf:') != -1;
                        if (isDart) strip_jumpid = jumpid.split('/dm:')[0];
                        if (isSf) strip_jumpid = jumpid.split('/sf:')[0];
                        switch (s_jumpIdType) {
                          case 'ps_':
                          case 'va_':
                          case 'af_':
                          case 'mb_':
                          case 'sc_':
                          case 'em_':
                          case 'ba_':
                            if (
                              strip_jumpid.length < 14 ||
                              (!!s.prop5 && s.prop5.indexOf('tsg.software') != -1) ||
                              /(ba_r329_hhoaffiliate|ps_r329_hhosem|ba_r329_hhocse|ba_r329_hhodisplay|sc_r329_hhosocial|em_r329_hho_.*)/gi.test(
                                strip_jumpid
                              )
                            ) {
                              s.eVar15 = strip_jumpid;
                              s.eVar17 = jumpid;
                              if (typeof sStackPush === 'function')
                                s.events = sStackPush('event80', s.events);
                              else s.events = !!s.events ? s.events + ',event80' : 'event80';
                            }
                            break;
                          case 'in_':
                            s.eVar16 = jumpid;
                            break;
                          case 're_':
                            s.eVar18 = jumpid;
                            break;
                          case 'TC|':
                          case 'TC-':
                            s.eVar15 = strip_jumpid;
                            s.eVar17 = jumpid;
                            if (typeof sStackPush === 'function')
                              s.events = sStackPush('event80', s.events);
                            else s.events = !!s.events ? s.events + ',event80' : 'event80';
                            break;
                          case 'sh_':
                            s.eVar15 = strip_jumpid;
                            s.eVar17 = jumpid;
                            if (typeof sStackPush === 'function')
                              s.events = sStackPush('event80', s.events);
                            else s.events = !!s.events ? s.events + ',event80' : 'event80';
                            if (!document.referrer)
                              (function () {
                                var a = jumpid,
                                  b = [];
                                b = a.split('_');
                                if (b.length > 2 && b[2]) s.referrer = 'http://' + b[2] + '.com';
                              })();
                            break;
                          case 'cp_':
                            s.eVar18 = jumpid;
                            break;
                          default:
                            if (jumpid.indexOf('ex_') !== 0) s.eVar19 = jumpid;
                            break;
                        }
                      }
                    }
                    s_hp_jumpIdProcessing(s);
                  },
                  doNativeAdobePlugins: function (s) {},
                  doLast: function (s) {
                    var pageTypeStatus = dictionary.get('page.error404');
                    if (pageTypeStatus) {
                      s.pageName = '';
                      s.pageType = 'errorPage';
                    }
                  },
                };
                map.postmap = function (s) {
                  if (typeof map.postmapPlugins.doFirst == 'function')
                    try {
                      console.log('UNITY: Executing post-map plugin ' + 'doFirst');
                      map.postmapPlugins.doFirst(s);
                      console.log('UNITY: Completed post-map plugin ' + 'doFirst');
                    } catch (e) {
                      console.warn('UNITY: post-map plugin exception:' + e);
                    }
                  _.map(map.postmapPlugins, function (eachPluginFunction, pluginFunctionName) {
                    try {
                      console.log('UNITY: Executing post-map plugin ' + pluginFunctionName);
                      if (pluginFunctionName !== 'doFirst' && pluginFunctionName !== 'doLast')
                        eachPluginFunction(s);
                      console.log('UNITY: Completed post-map plugin ' + pluginFunctionName);
                    } catch (e) {
                      console.warn('UNITY: post-map plugin exception:' + e);
                    }
                  });
                  if (typeof map.postmapPlugins.doLast == 'function')
                    try {
                      console.log('UNITY: Executing post-map plugin ' + 'doLast');
                      map.postmapPlugins.doLast(s);
                      console.log('UNITY: Completed post-map plugin ' + 'doLast');
                    } catch (e) {
                      console.warn('UNITY: post-map plugin exception:' + e);
                    }
                };
                map.postmapPlugins = postmapPluginStack;
              })(dictionary, map, _, console);
              var postMap = (function (dictionary, map, _, console, postmap) {
                console.log('lightweightModule: Initializing OmniturePostMap...');
                var additionalPostmapPlugins = {
                  doFirst: function (s) {
                    (function addProductsString (s) {
                      var productObject = dictionary.get('product') || dictionary.get('products'),
                        storeType = dictionary.get('page.site'),
                        productArray = _.reduce(
                          productObject.list || [],
                          function (a, b) {
                            var c = b.events || b.event || '',
                              d = b.price || b.revenue || b.total_price || '',
                              e = b.quantity || b.units || '',
                              productType = storeType.indexOf('ec:') !== -1 ? '' : b.type || '',
                              sku = b.id || b.sku || 'unknown product',
                              f =
                                (productType.length > 1 ? productType + ':' : '') +
                                sku.toLowerCase(),
                              xsellAttr = b.xsell || b.cross_sell || '',
                              xsell = false || xsellAttr == true || xsellAttr === 'true',
                              eventString = !!c ? ';' + c : '',
                              xsellString = !!xsell ? ';evar58=Options / Accessories XSell' : ';';
                            return (
                              a.push(';' + f + ';' + e + ';' + d + eventString + xsellString), a
                            );
                          },
                          []
                        );
                      s.products = productArray.join(',');
                    })(s);
                  },
                  doSocialSupportForums: function (s) {
                    (function doPropSpecificLogic (s) {
                      var site = dictionary.get('page.site');
                      if (site == 'csf') {
                        s.channel = (
                          site +
                          (dictionary.get('metatags.language')
                            ? ':' + dictionary.get('metatags.language')
                            : '') +
                          (dictionary.get('page.section')
                            ? ':' + dictionary.get('page.section')
                            : '') +
                          (dictionary.get('page.subsection')
                            ? ':' + dictionary.get('page.subsection')
                            : '')
                        ).toLowerCase();
                        s.pageName =
                          s.channel +
                          (dictionary.get('page.name')
                            ? ':' + dictionary.get('page.name')
                            : ''
                          ).toLowerCase();
                        s.prop1 = dictionary.get('page.content_id').toLowerCase();
                        s.prop73 = s.getPreviousValue(s.pageName, 'c73', '');
                        if (s.prop73)
                          s.prop2 =
                            s.prop73.indexOf(':') > -1
                              ? s.prop73.substring(0, s.prop73.lastIndexOf(':'))
                              : s.prop73;
                        else s.prop2 = s.prop73 = 'no value';
                        s.prop3 = dictionary.get('page.page_action') || '';
                        if (s.prop3 == 'new' || s.prop3 == 'reply') {
                          var pagename = (dictionary.get('page.name') || '').toLowerCase(),
                            type = '';
                          if (pagename.indexOf('forum') > -1) type = 'thread';
                          else if (pagename.indexOf('blog') > -1) type = 'blog';
                          s.prop3 = type != '' ? s.prop3 + ' ' + type : s.prop3;
                        }
                        s.prop4 = (s.prop3 || 'page') + ':' + s.pageName;
                        var linkObj = dictionary.get('link') || '';
                        if (typeof linkObj == 'object') {
                          s.prop3 = linkObj.page_action
                            ? linkObj.page_action.toLowerCase()
                            : 'link';
                          s.prop4 =
                            s.prop3 +
                            ':' +
                            (linkObj.name ? linkObj.name.toLowerCase() : '') +
                            ':' +
                            s.pageName;
                          s.linkTrackVars = s.apl(s.linkTrackVars, 'prop3,prop4', ',', 2);
                        }
                        s.prop3 = s.prop3 ? s.prop3.toLowerCase() : '';
                        s.prop4 = s.prop4 ? s.prop4.toLowerCase() : '';
                      }
                    })(s);
                  },
                };
                map.postmapPlugins = _.merge(map.postmapPlugins, additionalPostmapPlugins);
              })(dictionary, map, _, console, postMapCore);
              var doCore = (function (dictionary, omnitureMap, _, postMap, console) {
                console.log('lightweightModule: Initializing CoreOmniture...');
                function optOutofTracking () {
                  var optOut = dictionary.get('disabled') || dictionary.get('disable') || '';
                  optOut = optOut + '';
                  optOut = optOut.toLowerCase();
                  return optOut == 'true' || optOut == '1';
                }
                function doInitialize (addlDictionaryObject) {
                  const $___old_558357e09c72547a = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  );
                  try {
                    if ($___old_558357e09c72547a)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_fb986baf23da602c.userAgent
                      ));
                    return function () {
                      dictionary.doInitialize(addlDictionaryObject);
                      if (!optOutofTracking()) {
                        var s = (window.s = new AppMeasurement());
                        if (_A.isF(window.Visitor))
                          s.visitor = Visitor.getInstance('5E34123F5245B2CD0A490D45@AdobeOrg');
                        else console.log('>>> debug Adobe Visitor not defined');
                        s.account = omnitureMap.getAccount();
                        s.getPreviousValue = new Function(
                          'v',
                          'c',
                          'el',
                          '' +
                            "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" +
                            "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" +
                            '){for(y in j){if(i[x]==j[y]){if(s.Util.cookieRead(c)) r=s.Util.cookieRead(c);v?s.Util.cookieWrite(c,v,t)' +
                            ":s.Util.cookieWrite(c,'no value',t);return r}}}}}else{if(s.Util.cookieRead(c)) r=s.Util.cookieRead(c);v?" +
                            "s.Util.cookieWrite(c,v,t):s.Util.cookieWrite(c,'no value',t);return r}"
                        );
                        s.products = null;
                      }
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_558357e09c72547a)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_558357e09c72547a
                      ));
                  }
                }
                function doMap () {
                  if (!optOutofTracking()) {
                    omnitureMap.premap(window.s);
                    omnitureMap.doMap(window.s);
                    omnitureMap.postmap(window.s);
                  }
                }
                function filterUserAgent () {
                  const $___old_e6e1869035b08d34 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  );
                  try {
                    if ($___old_e6e1869035b08d34)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_fb986baf23da602c.userAgent
                      ));
                    return function () {
                      var userAgent = navigator.userAgent.toLowerCase(),
                        reportSuites =
                          dictionary.get('page.reportsuiteids') || window.location.hostname,
                        defaultReturnValue = false;
                      if (
                        reportSuites.indexOf('instantink') !== -1 &&
                        userAgent.indexOf('linux') !== -1 &&
                        userAgent.indexOf('firefox/10.0') !== -1 &&
                        userAgent.indexOf('rv:10.0') !== -1
                      )
                        defaultReturnValue = true;
                      if (/ms search \d\.?\d? robot/.test(userAgent)) defaultReturnValue = true;
                      if (userAgent.toLowerCase().indexOf('monitis') !== -1)
                        defaultReturnValue = true;
                      return defaultReturnValue;
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_e6e1869035b08d34)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_e6e1869035b08d34
                      ));
                  }
                }
                function doSend () {
                  if (filterUserAgent() || optOutofTracking()) return;
                  var link = dictionary.get('link'),
                    type = !!link ? link.type : 'page';
                  switch (type) {
                    case 'download':
                      s.tl({}, 'd', link.name || 'Unknown link');
                      break;
                    case 'exit':
                      s.tl({}, 'e', link.name || 'Unknown link');
                      break;
                    case 'custom':
                      s.tl({}, 'o', link.name || 'Unknown link');
                      break;
                    default:
                      window.s.t();
                      break;
                  }
                }
                return {
                  optOut: optOutofTracking,
                  initialize: doInitialize,
                  map: doMap,
                  send: doSend,
                };
              })(dictionary, map, _, postMap, console);
              if (typeof JSON !== 'object') JSON = {};
              !(function () {
                function f (t) {
                  return t < 10 ? '0' + t : t;
                }
                if (typeof Date.prototype.toJSON !== 'function') {
                  Date.prototype.toJSON = function () {
                    return isFinite(this.valueOf())
                      ? this.getUTCFullYear() +
                          '-' +
                          f(this.getUTCMonth() + 1) +
                          '-' +
                          f(this.getUTCDate()) +
                          'T' +
                          f(this.getUTCHours()) +
                          ':' +
                          f(this.getUTCMinutes()) +
                          ':' +
                          f(this.getUTCSeconds()) +
                          'Z'
                      : null;
                  };
                  String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
                    return this.valueOf();
                  };
                }
                var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                  escapable = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                  gap,
                  indent,
                  meta = {
                    '\b': '\\b',
                    ' ': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"': '\\"',
                    '\\': '\\\\',
                  },
                  rep;
                function quote (t) {
                  escapable.lastIndex = 0;
                  return escapable.test(t)
                    ? '"' +
                        t.replace(escapable, function (t) {
                          var e = meta[t];
                          return typeof e === 'string'
                            ? e
                            : '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4);
                        }) +
                        '"'
                    : '"' + t + '"';
                }
                function str (t, e) {
                  var n,
                    r,
                    f,
                    o,
                    i = gap,
                    u,
                    p = e[t];
                  if (p && typeof p === 'object' && typeof p.toJSON === 'function')
                    p = p.toJSON(t);
                  if (typeof rep === 'function') p = rep.call(e, t, p);
                  switch (typeof p) {
                    case 'string':
                      return quote(p);
                    case 'number':
                      return isFinite(p) ? String(p) : 'null';
                    case 'boolean':
                    case 'null':
                      return String(p);
                    case 'object':
                      if (!p) return 'null';
                      gap += indent;
                      u = [];
                      if (Object.prototype.toString.apply(p) === '[object Array]') {
                        o = p.length;
                        for (n = 0; n < o; n += 1) u[n] = str(n, p) || 'null';
                        f =
                          u.length === 0
                            ? '[]'
                            : gap
                            ? '[\n' + gap + u.join(',\n' + gap) + '\n' + i + ']'
                            : '[' + u.join(',') + ']';
                        gap = i;
                        return f;
                      }
                      if (rep && typeof rep === 'object') {
                        o = rep.length;
                        for (n = 0; n < o; n += 1)
                          if (typeof rep[n] === 'string') {
                            r = rep[n];
                            f = str(r, p);
                            if (f) u.push(quote(r) + (gap ? ': ' : ':') + f);
                          }
                      } else
                        for (r in p)
                          if (Object.prototype.hasOwnProperty.call(p, r)) {
                            f = str(r, p);
                            if (f) u.push(quote(r) + (gap ? ': ' : ':') + f);
                          }
                      f =
                        u.length === 0
                          ? '{}'
                          : gap
                          ? '{\n' + gap + u.join(',\n' + gap) + '\n' + i + '}'
                          : '{' + u.join(',') + '}';
                      gap = i;
                      return f;
                  }
                }
                if (typeof JSON.stringify !== 'function')
                  JSON.stringify = function (t, e, n) {
                    var r;
                    gap = '';
                    indent = '';
                    if (typeof n === 'number') for (r = 0; r < n; r += 1) indent += ' ';
                    else if (typeof n === 'string') indent = n;
                    rep = e;
                    if (
                      e &&
                      typeof e !== 'function' &&
                      (typeof e !== 'object' || typeof e.length !== 'number')
                    )
                      throw new Error('JSON.stringify');
                    return str('', { '': t });
                  };
                if (typeof JSON.parse !== 'function')
                  JSON.parse = function (text, reviver) {
                    var j;
                    function walk (t, e) {
                      var n,
                        r,
                        f = t[e];
                      if (f && typeof f === 'object')
                        for (n in f)
                          if (Object.prototype.hasOwnProperty.call(f, n)) {
                            r = walk(f, n);
                            if (r !== undefined) f[n] = r;
                            else delete f[n];
                          }
                      return reviver.call(t, e, f);
                    }
                    text = String(text);
                    cx.lastIndex = 0;
                    if (cx.test(text))
                      text = text.replace(cx, function (t) {
                        return '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4);
                      });
                    if (
                      /^[\],:{}\s]*$/.test(
                        text
                          .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                          .replace(
                            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                            ']'
                          )
                          .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
                      )
                    ) {
                      j = eval('(' + text + ')');
                      return typeof reviver === 'function' ? walk({ '': j }, '') : j;
                    }
                    throw new SyntaxError('JSON.parse');
                  };
              })();
              window._ = original_;
              return { core: doCore, _: _ };
            })();
            (function () {
              if (!!window.unityStoreMeasurement) {
                unityStoreMeasurement.core.initialize();
                unityStoreMeasurement.core.map();
                unityStoreMeasurement.core.send();
              }
            })();
          } else setTimeout(exceptionTagClosure, 50);
        })();
      },
      3043655,
      336189
    );
  })();
}
