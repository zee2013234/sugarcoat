var AppMeasurement_Module_Integrate,
  AppMeasurement_Module_ActivityMap,
  j,
  E,
  AppMeasurement_Module_Media;
{
  const $___stub_5e1b81c00d598b73 = {};
  (exports => {
    'use strict';
    const xhrUnsent = 0;
    const xhrOpened = 1;
    const xhrHeadersReceived = 2;
    const xhrLoading = 3;
    const xhrDone = 4;
    const xhrDeferredHandleSymbol = Symbol('deferredHandle');
    const xhrOnLoadStartSymbol = Symbol('onloadstart');
    const xhrOnProgressSymbol = Symbol('onprogress');
    const xhrOnAbortSymbol = Symbol('onabort');
    const xhrOnErrorSymbol = Symbol('onerror');
    const xhrOnLoadSymbol = Symbol('onload');
    const xhrOnTimeoutSymbol = Symbol('ontimeout');
    const xhrOnLoadEndSymbol = Symbol('onloadend');
    const xhrOnReadyStateChangeSymbol = Symbol('onreadystatechange');
    const xhrReadyStateSymbol = Symbol('readyState');
    const xhrTimeoutSymbol = Symbol('timeout');
    const xhrWithCredentialsSymbol = Symbol('withCredentials');
    const xhrUploadSymbol = Symbol('upload');
    const xhrResponseTypeSymbol = Symbol('responseType');
    const defineEvent = (obj, symbol) => {
      const type = symbol.description.substring(2);
      Object.defineProperty(obj, symbol, {
        configurable: false,
        enumerable: false,
        value: null,
        writable: true,
      });
      obj.addEventListener(type, function (event) {
        const handler = this[symbol];
        if (handler) {
          handler(event);
        }
      });
    };
    const changeReadyState = (xhr, readyState) => {
      xhr[xhrReadyStateSymbol] = readyState;
      xhr.dispatchEvent(new Event('readystatechange'));
    };
    let isSealed = true;
    class XMLHttpRequestEventTarget extends EventTarget {
      constructor () {
        super();
        if (!(this instanceof XMLHttpRequest) && !(this instanceof XMLHttpRequestUpload)) {
          throw new TypeError('Illegal constructor');
        }
        defineEvent(this, xhrOnLoadStartSymbol);
        defineEvent(this, xhrOnProgressSymbol);
        defineEvent(this, xhrOnAbortSymbol);
        defineEvent(this, xhrOnErrorSymbol);
        defineEvent(this, xhrOnLoadSymbol);
        defineEvent(this, xhrOnTimeoutSymbol);
        defineEvent(this, xhrOnLoadEndSymbol);
      }
      get onloadstart () {
        return this[xhrOnLoadStartSymbol];
      }
      set onloadstart (value) {
        this[xhrOnLoadStartSymbol] = value;
      }
      get onprogress () {
        return this[xhrOnProgressSymbol];
      }
      set onprogress (value) {
        this[xhrOnProgressSymbol] = value;
      }
      get onabort () {
        return this[xhrOnAbortSymbol];
      }
      set onabort (value) {
        this[xhrOnAbortSymbol] = value;
      }
      get onerror () {
        return this[xhrOnErrorSymbol];
      }
      set onerror (value) {
        this[xhrOnErrorSymbol] = value;
      }
      get ontimeout () {
        return this[xhrOnTimeoutSymbol];
      }
      set ontimeout (value) {
        this[xhrOnTimeoutSymbol] = value;
      }
      get onloadend () {
        return this[xhrOnLoadEndSymbol];
      }
      set onloadend (value) {
        this[xhrOnLoadEndSymbol] = value;
      }
    }
    exports.XMLHttpRequestEventTarget = {
      configurable: true,
      enumerable: true,
      value: XMLHttpRequestEventTarget,
      writable: true,
    };
    class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
        super();
      }
    }
    exports.XMLHttpRequestUpload = {
      configurable: true,
      enumerable: true,
      value: XMLHttpRequestUpload,
      writable: true,
    };
    class XMLHttpRequest extends XMLHttpRequestEventTarget {
      constructor () {
        super();
        isSealed = false;
        const xhrUpload = new XMLHttpRequestUpload();
        isSealed = true;
        Object.defineProperty(this, xhrDeferredHandleSymbol, {
          configurable: false,
          enumerable: false,
          value: null,
          writable: true,
        });
        defineEvent(this, xhrOnReadyStateChangeSymbol);
        Object.defineProperty(this, xhrReadyStateSymbol, {
          configurable: false,
          enumerable: false,
          value: xhrUnsent,
          writable: true,
        });
        Object.defineProperty(this, xhrTimeoutSymbol, {
          configurable: false,
          enumerable: false,
          value: 0,
          writable: true,
        });
        Object.defineProperty(this, xhrWithCredentialsSymbol, {
          configurable: false,
          enumerable: false,
          value: false,
          writable: true,
        });
        Object.defineProperty(this, xhrUploadSymbol, {
          configurable: false,
          enumerable: false,
          value: xhrUpload,
          writable: false,
        });
        Object.defineProperty(this, xhrResponseTypeSymbol, {
          configurable: false,
          enumerable: false,
          value: '',
          writable: true,
        });
      }
      get onreadystatechange () {
        return this[xhrOnReadyStateChangeSymbol];
      }
      set onreadystatechange (value) {
        this[xhrOnReadyStateChangeSymbol] = value;
      }
      get readyState () {
        return this[xhrReadyStateSymbol];
      }
      open (method, url) {
        switch (this[xhrReadyStateSymbol]) {
          case xhrUnsent:
          case xhrDone: {
            changeReadyState(this, xhrOpened);
            break;
          }
        }
      }
      setRequestHeader (name, value) {}
      setTrustToken (trustToken) {}
      get timeout () {
        return this[xhrTimeoutSymbol];
      }
      set timeout (value) {
        this[xhrTimeoutSymbol] = value;
      }
      get withCredentials () {
        return this[xhrWithCredentialsSymbol];
      }
      set withCredentials (value) {
        switch (this[xhrReadyStateSymbol]) {
          case xhrUnsent:
          case xhrOpened: {
            break;
          }
          default: {
            throw new DOMException(
              "Failed to set the 'withCredentials' property on 'XMLHttpRequest': The value may only be set if the object's state is UNSENT or OPENED."
            );
          }
        }
        this[xhrWithCredentialsSymbol] = !!value;
      }
      get upload () {
        return this[xhrUploadSymbol];
      }
      send () {
        if (this[xhrReadyStateSymbol] === xhrOpened && this[xhrDeferredHandleSymbol] === null) {
          this[xhrDeferredHandleSymbol] = setTimeout(() => {
            this[xhrDeferredHandleSymbol] = null;
            changeReadyState(this, xhrDone);
            this.dispatchEvent(new ProgressEvent('error'));
            this.dispatchEvent(new ProgressEvent('loadend'));
          }, 0);
        } else {
          throw new DOMException(
            "Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED."
          );
        }
      }
      abort () {
        if (this[xhrReadyStateSymbol] === xhrOpened && this[xhrDeferredHandleSymbol] !== null) {
          clearTimeout(this[xhrDeferredHandleSymbol]);
          this[xhrDeferredHandleSymbol] = null;
          changeReadyState(this, xhrUnsent);
          this.dispatchEvent(new ProgressEvent('abort'));
          this.dispatchEvent(new ProgressEvent('loadend'));
        }
      }
      get responseURL () {
        return '';
      }
      get status () {
        return 0;
      }
      get statusText () {
        return '';
      }
      getResponseHeader (name) {
        return null;
      }
      overrideMimeType (mime) {}
      get responseType () {
        return this[xhrResponseTypeSymbol];
      }
      set responseType (value) {
        switch (this[xhrReadyStateSymbol]) {
          case xhrDone: {
            throw new DOMException(
              "Failed to set the 'responseType' property on 'XMLHttpRequest': The response type cannot be set if the object's state is LOADING or DONE."
            );
          }
        }
        switch (value) {
          case '':
          case 'arraybuffer':
          case 'blob':
          case 'document':
          case 'json':
          case 'text': {
            this[xhrResponseTypeSymbol] = value;
            break;
          }
        }
      }
      get response () {
        const responseType = this[xhrResponseTypeSymbol];
        return responseType === '' || responseType === 'text' ? '' : null;
      }
      get responseText () {
        const responseType = this[xhrResponseTypeSymbol];
        if (responseType === '' || responseType === 'text') {
          return '';
        } else {
          throw new DOMException(
            "Failed to read the 'responseText' property from 'XMLHttpRequest': The value is only accessible if the object's 'responseType' is '' or 'text' (was 'arraybuffer')."
          );
        }
      }
      get responseXML () {
        return null;
      }
    }
    Object.defineProperty(XMLHttpRequest, 'UNSENT', {
      configurable: false,
      enumerable: true,
      value: xhrUnsent,
    });
    Object.defineProperty(XMLHttpRequest, 'OPENED', {
      configurable: false,
      enumerable: true,
      value: xhrOpened,
    });
    Object.defineProperty(XMLHttpRequest, 'HEADERS_RECEIVED', {
      configurable: false,
      enumerable: true,
      value: xhrHeadersReceived,
    });
    Object.defineProperty(XMLHttpRequest, 'LOADING', {
      configurable: false,
      enumerable: true,
      value: xhrLoading,
    });
    Object.defineProperty(XMLHttpRequest, 'DONE', {
      configurable: false,
      enumerable: true,
      value: xhrDone,
    });
    exports.XMLHttpRequest = {
      configurable: true,
      enumerable: true,
      value: XMLHttpRequest,
      writable: true,
    };
  })($___stub_5e1b81c00d598b73);
  const $___stub_93ef30bcc5fe9986 = {};
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
  })($___stub_93ef30bcc5fe9986);
  const $___stub_3ac875f7196a9c3f = {};
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
  })($___stub_3ac875f7196a9c3f);
  (function () {
    AppMeasurement_Module_Integrate = $___var_3909ebf452fede86;
    ({}.constructor.defineProperty(AppMeasurement_Module_Integrate, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement_Module_Integrate',
      writable: false,
    }));
    AppMeasurement_Module_ActivityMap = $___var_943f24929dd01ec4;
    ({}.constructor.defineProperty(AppMeasurement_Module_ActivityMap, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement_Module_ActivityMap',
      writable: false,
    }));
    E = $___var_e0cd6e7fbda0108d;
    ({}.constructor.defineProperty(E, 'name', {
      configurable: true,
      enumerable: false,
      value: 'E',
      writable: false,
    }));
    AppMeasurement_Module_Media = $___var_c44135ed05e537c0;
    ({}.constructor.defineProperty(AppMeasurement_Module_Media, 'name', {
      configurable: true,
      enumerable: false,
      value: 'AppMeasurement_Module_Media',
      writable: false,
    }));
    function $___var_3909ebf452fede86 (l) {
      var c = this;
      c.s = l;
      var e = window;
      e.s_c_in || ((e.s_c_il = []), (e.s_c_in = 0));
      c._il = e.s_c_il;
      c._in = e.s_c_in;
      c._il[c._in] = c;
      e.s_c_in++;
      c._c = 's_m';
      c.list = [];
      c.add = function (d, b) {
        var a;
        b || (b = 's_Integrate_' + d);
        e[b] || (e[b] = {});
        a = c[d] = e[b];
        a.a = d;
        a.e = c;
        a._c = 0;
        a._d = 0;
        void 0 == a.disable && (a.disable = 0);
        a.get = function (b, d) {
          var f = document,
            h = f.getElementsByTagName('HEAD'),
            k;
          if (
            !a.disable &&
            (d || (v = 's_' + c._in + '_Integrate_' + a.a + '_get_' + a._c),
            a._c++,
            (a.VAR = v),
            (a.CALLBACK = 's_c_il[' + c._in + '].' + a.a + '.callback'),
            a.delay(),
            (h = h && 0 < h.length ? h[0] : f.body))
          )
            try {
              (k = f.createElement('SCRIPT')),
                (k.type = 'text/javascript'),
                k.setAttribute('async', 'async'),
                (k.src = c.c(a, b)),
                0 > b.indexOf('[CALLBACK]') &&
                  (k.onload = k.onreadystatechange = function () {
                    a.callback(e[v]);
                  }),
                h.firstChild ? h.insertBefore(k, h.firstChild) : h.appendChild(k);
            } catch (l) {}
        };
        a.callback = function (b) {
          var c;
          if (b) for (c in b) Object.prototype[c] || (a[c] = b[c]);
          a.ready();
        };
        a.beacon = function (b) {
          var d = 's_i_' + c._in + '_Integrate_' + a.a + '_' + a._c;
          a.disable || (a._c++, (d = e[d] = new Image()), (d.src = c.c(a, b)));
        };
        a.script = function (b) {
          a.get(b, 1);
        };
        a.delay = function () {
          a._d++;
        };
        a.ready = function () {
          a._d--;
          a.disable || l.delayReady();
        };
        c.list.push(d);
      };
      c._g = function (d) {
        var b,
          a = (d ? 'use' : 'set') + 'Vars';
        for (d = 0; d < c.list.length; d++)
          if ((b = c[c.list[d]]) && !b.disable && b[a])
            try {
              b[a](l, b);
            } catch (e) {}
      };
      c._t = function () {
        c._g(1);
      };
      c._d = function () {
        var d, b;
        for (d = 0; d < c.list.length; d++)
          if ((b = c[c.list[d]]) && !b.disable && 0 < b._d) return 1;
        return 0;
      };
      c.c = function (c, b) {
        var a, e, g, f;
        'http' != b.toLowerCase().substring(0, 4) && (b = 'http://' + b);
        l.ssl && (b = l.replace(b, 'http:', 'https:'));
        c.RAND = Math.floor(10000000000000 * Math.random());
        for (a = 0; 0 <= a; )
          (a = b.indexOf('[', a)),
            0 <= a &&
              ((e = b.indexOf(']', a)),
              e > a &&
                ((g = b.substring(a + 1, e)),
                2 < g.length && 's.' == g.substring(0, 2)
                  ? (f = l[g.substring(2)]) || (f = '')
                  : ((f = '' + c[g]), f != c[g] && parseFloat(f) != c[g] && (g = 0)),
                g && (b = b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1)),
                (a = e)));
        return b;
      };
    }
    function $___var_943f24929dd01ec4 (f) {
      function g (a, d) {
        var b, c, n;
        if (a && d && (b = e.c[d] || (e.c[d] = d.split(','))))
          for (n = 0; n < b.length && (c = b[n++]); ) if (-1 < a.indexOf(c)) return null;
        p = 1;
        return a;
      }
      function q (a, d, b, c, e) {
        var g, h;
        if (a.dataset && (h = a.dataset[d])) g = h;
        else if (a.getAttribute)
          if ((h = a.getAttribute('data-' + b))) g = h;
          else if ((h = a.getAttribute(b))) g = h;
        if (
          !g &&
          f.useForcedLinkTracking &&
          e &&
          ((g = ''), (d = a.onclick ? '' + a.onclick : ''))
        ) {
          b = d.indexOf(c);
          var l, k;
          if (0 <= b) {
            for (b += 10; b < d.length && 0 <= '= \t\r\n'.indexOf(d.charAt(b)); ) b++;
            if (b < d.length) {
              h = b;
              for (l = k = 0; h < d.length && (';' != d.charAt(h) || l); )
                l
                  ? d.charAt(h) != l || k
                    ? (k = '\\' == d.charAt(h) ? !k : 0)
                    : (l = 0)
                  : ((l = d.charAt(h)), '"' != l && "'" != l && (l = 0)),
                  h++;
              if ((d = d.substring(b, h)))
                (a.e = new Function('s', 'var e;try{s.w.' + c + '=' + d + '}catch(e){}')), a.e(f);
            }
          }
        }
        return g || (e && f.w[c]);
      }
      function r (a, d, b) {
        var c;
        return (c = e[d](a, b)) && (p ? ((p = 0), c) : g(k(c), e[d + 'Exclusions']));
      }
      function s (a, d, b) {
        var c;
        if (
          a &&
          !(1 === (c = a.nodeType) && (c = a.nodeName) && (c = c.toUpperCase()) && t[c]) &&
          (1 === a.nodeType && (c = a.nodeValue) && (d[d.length] = c),
          b.a ||
            b.t ||
            b.s ||
            !a.getAttribute ||
            ((c = a.getAttribute('alt'))
              ? (b.a = c)
              : (c = a.getAttribute('title'))
              ? (b.t = c)
              : 'IMG' == ('' + a.nodeName).toUpperCase() &&
                (c = a.getAttribute('src') || a.src) &&
                (b.s = c)),
          (c = a.childNodes) && c.length)
        )
          for (a = 0; a < c.length; a++) s(c[a], d, b);
      }
      function k (a) {
        if (null == a || void 0 == a) return a;
        try {
          return a
            .replace(
              RegExp(
                '^[\\s\\n\\f\\r\\t\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u205F\u3000\uFEFF]+',
                'mg'
              ),
              ''
            )
            .replace(
              RegExp(
                '[\\s\\n\\f\\r\\t\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u205F\u3000\uFEFF]+$',
                'mg'
              ),
              ''
            )
            .replace(
              RegExp(
                '[\\s\\n\\f\\r\\t\t-\r \xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u205F\u3000\uFEFF]{1,}',
                'mg'
              ),
              ' '
            )
            .substring(0, 254);
        } catch (d) {}
      }
      var e = this;
      e.s = f;
      var m = window;
      m.s_c_in || ((m.s_c_il = []), (m.s_c_in = 0));
      e._il = m.s_c_il;
      e._in = m.s_c_in;
      e._il[e._in] = e;
      m.s_c_in++;
      e._c = 's_m';
      e.c = {};
      var p = 0,
        t = { SCRIPT: 1, STYLE: 1, LINK: 1, CANVAS: 1 };
      e._g = function () {
        var a,
          d,
          b,
          c = f.contextData,
          e = f.linkObject;
        (a = f.pageName || f.pageURL) &&
          (d = r(e, 'link', f.linkName)) &&
          (b = r(e, 'region')) &&
          ((c['a.activitymap.page'] = a.substring(0, 255)),
          (c['a.activitymap.link'] = 128 < d.length ? d.substring(0, 128) : d),
          (c['a.activitymap.region'] = 127 < b.length ? b.substring(0, 127) : b),
          (c['a.activitymap.pageIDType'] = f.pageName ? 1 : 0));
      };
      e.link = function (a, d) {
        var b;
        if (d) b = g(k(d), e.linkExclusions);
        else if ((b = a) && !(b = q(a, 'sObjectId', 's-object-id', 's_objectID', 1))) {
          var c, f;
          (f = g(k(a.innerText || a.textContent), e.linkExclusions)) ||
            (s(a, (c = []), (b = { a: void 0, t: void 0, s: void 0 })),
            (f = g(k(c.join('')))) ||
              (f = g(k(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0))) ||
              !(c = (c = a.tagName) && c.toUpperCase ? c.toUpperCase() : '') ||
              ('INPUT' == c || ('SUBMIT' == c && a.value)
                ? (f = g(k(a.value)))
                : 'IMAGE' == c && a.src && (f = g(k(a.src)))));
          b = f;
        }
        return b;
      };
      e.region = function (a) {
        for (var d, b = e.regionIDAttribute || 'id'; a && (a = a.parentNode); ) {
          if ((d = q(a, b, b, b))) return d;
          if ('BODY' == a.nodeName) return 'BODY';
        }
      };
    }
    var $___var_7a95543d0b1b802b = null;
    j = $___var_7a95543d0b1b802b;
    function $___var_e0cd6e7fbda0108d () {
      return function () {};
    }
    function $___var_c44135ed05e537c0 (q) {
      var b = this;
      b.s = q;
      q = window;
      q.s_c_in || ((q.s_c_il = []), (q.s_c_in = 0));
      b._il = q.s_c_il;
      b._in = q.s_c_in;
      b._il[b._in] = b;
      q.s_c_in++;
      b._c = 's_m';
      b.list = [];
      b.open = function (d, c, e, k) {
        var f = {},
          a = new Date(),
          l = '',
          g;
        c || (c = -1);
        if (d && e) {
          b.list || (b.list = {});
          b.list[d] && b.close(d);
          k && k.id && (l = k.id);
          if (l)
            for (g in b.list)
              !Object.prototype[g] && b.list[g] && b.list[g].R == l && b.close(b.list[g].name);
          f.name = d;
          f.length = c;
          f.offset = 0;
          f.e = 0;
          f.playerName = b.playerName ? b.playerName : e;
          f.R = l;
          f.C = 0;
          f.a = 0;
          f.timestamp = Math.floor(a.getTime() / 1000);
          f.k = 0;
          f.u = f.timestamp;
          f.c = -1;
          f.n = '';
          f.g = -1;
          f.D = 0;
          f.I = {};
          f.G = 0;
          f.m = 0;
          f.f = '';
          f.B = 0;
          f.L = 0;
          f.A = 0;
          f.F = 0;
          f.l = !1;
          f.v = '';
          f.J = '';
          f.K = 0;
          f.r = !1;
          f.H = '';
          f.complete = 0;
          f.Q = 0;
          f.p = 0;
          f.q = 0;
          b.list[d] = f;
        }
      };
      b.openAd = function (d, c, e, k, f, a, l, g) {
        var h = {};
        b.open(d, c, e, g);
        if ((h = b.list[d])) (h.l = !0), (h.v = k), (h.J = f), (h.K = a), (h.H = l);
      };
      b.M = function (d) {
        var c = b.list[d];
        b.list[d] = 0;
        c && c.monitor && clearTimeout(c.monitor.interval);
      };
      b.close = function (d) {
        b.i(d, 0, -1);
      };
      b.play = function (d, c, e, k) {
        var f = b.i(d, 1, c, e, k);
        f &&
          !f.monitor &&
          ((f.monitor = {}),
          (f.monitor.update = function () {
            1 == f.k && b.i(f.name, 3, -1);
            f.monitor.interval = setTimeout(f.monitor.update, 1000);
          }),
          f.monitor.update());
      };
      b.click = function (d, c) {
        b.i(d, 7, c);
      };
      b.complete = function (d, c) {
        b.i(d, 5, c);
      };
      b.stop = function (d, c) {
        b.i(d, 2, c);
      };
      b.track = function (d) {
        b.i(d, 4, -1);
      };
      b.P = function (d, c) {
        var e = 'a.media.',
          k = d.linkTrackVars,
          f = d.linkTrackEvents,
          a = 'm_i',
          l,
          g = d.contextData,
          h;
        c.l &&
          ((e += 'ad.'),
          c.v && ((g['a.media.name'] = c.v), (g[e + 'pod'] = c.J), (g[e + 'podPosition'] = c.K)),
          c.G || (g[e + 'CPM'] = c.H));
        c.r && ((g[e + 'clicked'] = !0), (c.r = !1));
        g['a.contentType'] = 'video' + (c.l ? 'Ad' : '');
        g['a.media.channel'] = b.channel;
        g[e + 'name'] = c.name;
        g[e + 'playerName'] = c.playerName;
        0 < c.length && (g[e + 'length'] = c.length);
        g[e + 'timePlayed'] = Math.floor(c.a);
        0 < Math.floor(c.a) && (g[e + 'timePlayed'] = Math.floor(c.a));
        c.G ||
          ((g[e + 'view'] = !0),
          (a = 'm_s'),
          b.Heartbeat &&
            b.Heartbeat.enabled &&
            (a = c.l ? (b.__primetime ? 'mspa_s' : 'msa_s') : b.__primetime ? 'msp_s' : 'ms_s'),
          (c.G = 1));
        c.f &&
          ((g[e + 'segmentNum'] = c.m),
          (g[e + 'segment'] = c.f),
          0 < c.B && (g[e + 'segmentLength'] = c.B),
          c.A && 0 < c.a && (g[e + 'segmentView'] = !0));
        !c.Q && c.complete && ((g[e + 'complete'] = !0), (c.S = 1));
        0 < c.p && (g[e + 'milestone'] = c.p);
        0 < c.q && (g[e + 'offsetMilestone'] = c.q);
        if (k) for (h in g) Object.prototype[h] || (k += ',contextData.' + h);
        l = g['a.contentType'];
        d.pe = a;
        d.pev3 = l;
        var q, s;
        if (b.contextDataMapping)
          for (h in (d.events2 || (d.events2 = ''), k && (k += ',events'), b.contextDataMapping))
            if (!Object.prototype[h]) {
              a =
                h.length > e.length && h.substring(0, e.length) == e ? h.substring(e.length) : '';
              l = b.contextDataMapping[h];
              if ('string' == typeof l)
                for (q = l.split(','), s = 0; s < q.length; s++)
                  (l = q[s]),
                    'a.contentType' == h
                      ? (k && (k += ',' + l), (d[l] = g[h]))
                      : 'view' == a ||
                        'segmentView' == a ||
                        'clicked' == a ||
                        'complete' == a ||
                        'timePlayed' == a ||
                        'CPM' == a
                      ? (f && (f += ',' + l),
                        'timePlayed' == a || 'CPM' == a
                          ? g[h] && (d.events2 += (d.events2 ? ',' : '') + l + '=' + g[h])
                          : g[h] && (d.events2 += (d.events2 ? ',' : '') + l))
                      : 'segment' == a && g[h + 'Num']
                      ? (k && (k += ',' + l), (d[l] = g[h + 'Num'] + ':' + g[h]))
                      : (k && (k += ',' + l), (d[l] = g[h]));
              else if ('milestones' == a || 'offsetMilestones' == a)
                (h = h.substring(0, h.length - 1)),
                  g[h] &&
                    b.contextDataMapping[h + 's'][g[h]] &&
                    (f && (f += ',' + b.contextDataMapping[h + 's'][g[h]]),
                    (d.events2 += (d.events2 ? ',' : '') + b.contextDataMapping[h + 's'][g[h]]));
              g[h] && (g[h] = 0);
              'segment' == a && g[h + 'Num'] && (g[h + 'Num'] = 0);
            }
        d.linkTrackVars = k;
        d.linkTrackEvents = f;
      };
      b.i = function (d, c, e, k, f) {
        var a = {},
          l = new Date().getTime() / 1000,
          g,
          h,
          q = b.trackVars,
          s = b.trackEvents,
          t = b.trackSeconds,
          u = b.trackMilestones,
          v = b.trackOffsetMilestones,
          w = b.segmentByMilestones,
          x = b.segmentByOffsetMilestones,
          p,
          n,
          r = 1,
          m = {},
          y;
        b.channel || (b.channel = b.s.w.location.hostname);
        if ((a = d && b.list && b.list[d] ? b.list[d] : 0))
          if (
            (a.l &&
              ((t = b.adTrackSeconds),
              (u = b.adTrackMilestones),
              (v = b.adTrackOffsetMilestones),
              (w = b.adSegmentByMilestones),
              (x = b.adSegmentByOffsetMilestones)),
            0 > e && (e = 1 == a.k && 0 < a.u ? l - a.u + a.c : a.c),
            0 < a.length && (e = e < a.length ? e : a.length),
            0 > e && (e = 0),
            (a.offset = e),
            0 < a.length && ((a.e = (a.offset / a.length) * 100), (a.e = 100 < a.e ? 100 : a.e)),
            0 > a.c && (a.c = e),
            (y = a.D),
            (m.name = d),
            (m.ad = a.l),
            (m.length = a.length),
            (m.openTime = new Date()),
            m.openTime.setTime(1000 * a.timestamp),
            (m.offset = a.offset),
            (m.percent = a.e),
            (m.playerName = a.playerName),
            (m.mediaEvent =
              0 > a.g
                ? 'OPEN'
                : 1 == c
                ? 'PLAY'
                : 2 == c
                ? 'STOP'
                : 3 == c
                ? 'MONITOR'
                : 4 == c
                ? 'TRACK'
                : 5 == c
                ? 'COMPLETE'
                : 7 == c
                ? 'CLICK'
                : 'CLOSE'),
            2 < c || (c != a.k && (2 != c || 1 == a.k)))
          ) {
            f || ((k = a.m), (f = a.f));
            if (c) {
              1 == c && (a.c = e);
              if ((3 >= c || 5 <= c) && 0 <= a.g && ((r = !1), (q = s = 'None'), a.g != e)) {
                h = a.g;
                h > e && ((h = a.c), h > e && (h = e));
                p = u ? u.split(',') : 0;
                if (0 < a.length && p && e >= h)
                  for (n = 0; n < p.length; n++)
                    (g = p[n] ? parseFloat('' + p[n]) : 0) &&
                      (h / a.length) * 100 < g &&
                      a.e >= g &&
                      ((r = !0),
                      (n = p.length),
                      (m.mediaEvent = 'MILESTONE'),
                      (a.p = m.milestone = g));
                if ((p = v ? v.split(',') : 0) && e >= h)
                  for (n = 0; n < p.length; n++)
                    (g = p[n] ? parseFloat('' + p[n]) : 0) &&
                      h < g &&
                      e >= g &&
                      ((r = !0),
                      (n = p.length),
                      (m.mediaEvent = 'OFFSET_MILESTONE'),
                      (a.q = m.offsetMilestone = g));
              }
              if (a.L || !f) {
                if (w && u && 0 < a.length) {
                  if ((p = u.split(',')))
                    for (p.push('100'), n = h = 0; n < p.length; n++)
                      if ((g = p[n] ? parseFloat('' + p[n]) : 0))
                        a.e < g && ((k = n + 1), (f = 'M:' + h + '-' + g), (n = p.length)),
                          (h = g);
                } else if (x && v && (p = v.split(',')))
                  for (p.push('' + (0 < a.length ? a.length : 'E')), n = h = 0; n < p.length; n++)
                    if ((g = p[n] ? parseFloat('' + p[n]) : 0) || 'E' == p[n]) {
                      if (e < g || 'E' == p[n])
                        (k = n + 1), (f = 'O:' + h + '-' + g), (n = p.length);
                      h = g;
                    }
                f && (a.L = !0);
              }
              (f || a.f) &&
                f != a.f &&
                ((a.F = !0), a.f || ((a.m = k), (a.f = f)), 0 <= a.g && (r = !0));
              (2 <= c || 100 <= a.e) && a.c < e && ((a.C += e - a.c), (a.a += e - a.c));
              if (2 >= c || (3 == c && !a.k))
                (a.n += (1 == c || 3 == c ? 'S' : 'E') + Math.floor(e)), (a.k = 3 == c ? 1 : c);
              !r &&
                0 <= a.g &&
                3 >= c &&
                (t = t ? t : 0) &&
                a.a >= t &&
                ((r = !0), (m.mediaEvent = 'SECONDS'));
              a.u = l;
              a.c = e;
            }
            if (!c || (3 >= c && 100 <= a.e))
              2 != a.k && (a.n += 'E' + Math.floor(e)),
                (c = 0),
                (q = s = 'None'),
                (m.mediaEvent = 'CLOSE');
            7 == c && (r = m.clicked = a.r = !0);
            if (
              5 == c ||
              (b.completeByCloseOffset &&
                (!c || 100 <= a.e) &&
                0 < a.length &&
                e >= a.length - b.completeCloseOffsetThreshold)
            )
              r = m.complete = a.complete = !0;
            l = m.mediaEvent;
            'MILESTONE' == l
              ? (l += '_' + m.milestone)
              : 'OFFSET_MILESTONE' == l && (l += '_' + m.offsetMilestone);
            a.I[l] ? (m.eventFirstTime = !1) : ((m.eventFirstTime = !0), (a.I[l] = 1));
            m.event = m.mediaEvent;
            m.timePlayed = a.C;
            m.segmentNum = a.m;
            m.segment = a.f;
            m.segmentLength = a.B;
            b.monitor && 4 != c && b.monitor(b.s, m);
            b.Heartbeat && b.Heartbeat.enabled && 0 <= a.g && (r = !1);
            0 == c && b.M(d);
            r &&
              a.D == y &&
              ((d = { contextData: {} }),
              (d.linkTrackVars = q),
              (d.linkTrackEvents = s),
              d.linkTrackVars || (d.linkTrackVars = ''),
              d.linkTrackEvents || (d.linkTrackEvents = ''),
              b.P(d, a),
              d.linkTrackVars || (d['!linkTrackVars'] = 1),
              d.linkTrackEvents || (d['!linkTrackEvents'] = 1),
              b.s.track(d),
              a.F ? ((a.m = k), (a.f = f), (a.A = !0), (a.F = !1)) : 0 < a.a && (a.A = !1),
              (a.n = ''),
              (a.p = a.q = 0),
              (a.a -= Math.floor(a.a)),
              (a.g = e),
              a.D++);
          }
        return a;
      };
      b.O = function (d, c, e, k, f) {
        var a = 0;
        if (d && (!b.autoTrackMediaLengthRequired || (c && 0 < c))) {
          if (b.list && b.list[d]) a = 1;
          else if (1 == e || 3 == e) b.open(d, c, 'HTML5 Video', f), (a = 1);
          a && b.i(d, e, k, -1, 0);
        }
      };
      b.attach = function (d) {
        var c, e, k;
        d &&
          d.tagName &&
          'VIDEO' == d.tagName.toUpperCase() &&
          (b.o ||
            (b.o = function (c, a, d) {
              var e, h;
              b.autoTrack &&
                ((e = c.currentSrc),
                (h = c.duration) || (h = -1),
                0 > d && (d = c.currentTime),
                b.O(e, h, a, d, c));
            }),
          (c = function () {
            b.o(d, 1, -1);
          }),
          (e = function () {
            b.o(d, 1, -1);
          }),
          b.j(d, 'play', c),
          b.j(d, 'pause', e),
          b.j(d, 'seeking', e),
          b.j(d, 'seeked', c),
          b.j(d, 'ended', function () {
            b.o(d, 0, -1);
          }),
          b.j(d, 'timeupdate', c),
          (k = function () {
            d.paused || d.ended || d.seeking || b.o(d, 3, -1);
            setTimeout(k, 1000);
          }),
          k());
      };
      b.j = function (b, c, e) {
        b.attachEvent
          ? b.attachEvent('on' + c, e)
          : b.addEventListener && b.addEventListener(c, e, !1);
      };
      void 0 == b.completeByCloseOffset && (b.completeByCloseOffset = 1);
      void 0 == b.completeCloseOffsetThreshold && (b.completeCloseOffsetThreshold = 1);
      b.Heartbeat = {};
      b.N = function () {
        var d, c;
        if (b.autoTrack && (d = b.s.d.getElementsByTagName('VIDEO')))
          for (c = 0; c < d.length; c++) b.attach(d[c]);
      };
      b.j(q, 'load', b.N);
    }
    if (
      document.location.href.indexOf('directv.com') > -1 ||
      document.location.href.indexOf('paygonline.com') > -1
    ) {
      function AppMeasurement_Module_AudienceManagement (d) {
        var a = this;
        a.s = d;
        var b = window;
        b.s_c_in || ((b.s_c_il = []), (b.s_c_in = 0));
        a._il = b.s_c_il;
        a._in = b.s_c_in;
        a._il[a._in] = a;
        b.s_c_in++;
        a._c = 's_m';
        a.setup = function (c) {
          b.DIL &&
            c &&
            ((c.disableDefaultRequest = !0),
            (c.disableScriptAttachment = !0),
            (c.disableCORS = !0),
            (c.secureDataCollection = !1),
            (a.instance = b.DIL.create(c)),
            (a.tools = b.DIL.tools));
        };
        a.isReady = function () {
          return a.instance ? !0 : !1;
        };
        a.getEventCallConfigParams = function () {
          return a.instance && a.instance.api && a.instance.api.getEventCallConfigParams
            ? a.instance.api.getEventCallConfigParams()
            : {};
        };
        a.passData = function (b) {
          a.instance && a.instance.api && a.instance.api.passData && a.instance.api.passData(b);
        };
      }
      'function' !== typeof window.DIL &&
        ((window.DIL = function (c, f) {
          var k = [],
            g,
            w;
          c !== Object(c) && (c = {});
          var u, l, D, N, A, y, E, F, O, P, G, B, z;
          u = c.partner;
          l = c.containerNSID;
          D = !!c.disableDestinationPublishingIframe;
          N = c.iframeAkamaiHTTPS;
          A = c.mappings;
          y = c.uuidCookie;
          E = !0 === c.enableErrorReporting;
          F = c.visitorService;
          O = c.declaredId;
          P = !0 === c.delayAllUntilWindowLoad;
          G = !0 === c.disableIDSyncs;
          B = 'undefined' === typeof c.secureDataCollection || !0 === c.secureDataCollection;
          z = 'boolean' === typeof c.isCoopSafe ? c.isCoopSafe : null;
          var Q, L, H, R, S;
          Q = !0 === c.disableDefaultRequest;
          L = c.afterResultForDefaultRequest;
          H = c.dpIframeSrc;
          R = c.visitorConstructor;
          S = !0 === c.disableCORS;
          E && DIL.errorModule.activate();
          E = !0 === window._dil_unit_tests;
          (g = f) && k.push(g + '');
          if (!u || 'string' !== typeof u)
            return (
              (g = 'DIL partner is invalid or not specified in initConfig'),
              DIL.errorModule.handleError({ name: 'error', message: g, filename: 'dil.js' }),
              Error(g)
            );
          g =
            'DIL containerNSID is invalid or not specified in initConfig, setting to default of 0';
          if (l || 'number' === typeof l) (l = parseInt(l, 10)), !isNaN(l) && 0 <= l && (g = '');
          g && ((l = 0), k.push(g), (g = ''));
          w = DIL.getDil(u, l);
          if (w instanceof DIL && w.api.getPartner() === u && w.api.getContainerNSID() === l)
            return w;
          if (this instanceof DIL) DIL.registerDil(this, u, l);
          else
            return new DIL(
              c,
              "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " +
                u +
                ' and containerNSID = ' +
                l
            );
          var t = {
            IS_HTTPS: B || 'https:' === document.location.protocol,
            MILLIS_PER_DAY: 86400000,
            DIL_COOKIE_NAME: 'AAMC_' + encodeURIComponent(u) + '_' + l,
            FIRST_PARTY_SYNCS: 'AMSYNCS',
            FIRST_PARTY_SYNCS_ON_PAGE: 'AMSYNCSOP',
            REGION: 'REGION',
            SIX_MONTHS_IN_MINUTES: 259200,
            IE_VERSION: (function () {
              if (document.documentMode) return document.documentMode;
              for (var a = 7; 4 < a; a--) {
                var b = document.createElement('div');
                b.innerHTML = '<!--[if IE ' + a + ']><span></span><![endif]-->';
                if (b.getElementsByTagName('span').length) return a;
              }
              return null;
            })(),
          };
          t.IS_IE_LESS_THAN_10 = 'number' === typeof t.IE_VERSION && 10 > t.IE_VERSION;
          var M = { stuffed: {} },
            m = {},
            p = {
              firingQueue: [],
              fired: [],
              firing: !1,
              sent: [],
              errored: [],
              reservedKeys: {
                sids: !0,
                pdata: !0,
                logdata: !0,
                callback: !0,
                postCallbackFn: !0,
                useImageRequest: !0,
              },
              firstRequestHasFired: !1,
              abortRequests: !1,
              num_of_cors_responses: 0,
              num_of_cors_errors: 0,
              corsErrorSources: [],
              num_of_img_responses: 0,
              num_of_img_errors: 0,
              platformParams: {
                d_nsid: l + '',
                d_rtbd: 'json',
                d_jsonv: DIL.jsonVersion + '',
                d_dst: '1',
              },
              nonModStatsParams: { d_rtbd: !0, d_dst: !0, d_cts: !0, d_rs: !0 },
              modStatsParams: null,
              adms: {
                TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 2000,
                calledBack: !1,
                mid: null,
                noVisitorAPI: !1,
                VisitorAPI: null,
                instance: null,
                releaseType: 'no VisitorAPI',
                isOptedOut: !0,
                isOptedOutCallbackCalled: !1,
                admsProcessingStarted: !1,
                process: function (a) {
                  try {
                    if (!this.admsProcessingStarted) {
                      this.admsProcessingStarted = !0;
                      var b = this,
                        e,
                        d,
                        h,
                        n;
                      if ('function' === typeof a && 'function' === typeof a.getInstance) {
                        if (F === Object(F) && (e = F.namespace) && 'string' === typeof e)
                          d = a.getInstance(e, { idSyncContainerID: l });
                        else {
                          this.releaseType = 'no namespace';
                          this.releaseRequests();
                          return;
                        }
                        if (
                          d === Object(d) &&
                          d instanceof a &&
                          'function' === typeof d.isAllowed &&
                          'function' === typeof d.getMarketingCloudVisitorID &&
                          'function' === typeof d.getCustomerIDs &&
                          'function' === typeof d.isOptedOut
                        ) {
                          this.VisitorAPI = a;
                          if (!d.isAllowed()) {
                            this.releaseType = 'VisitorAPI not allowed';
                            this.releaseRequests();
                            return;
                          }
                          this.instance = d;
                          h = function (a) {
                            'VisitorAPI' !== b.releaseType &&
                              ((b.mid = a), (b.releaseType = 'VisitorAPI'), b.releaseRequests());
                          };
                          n = d.getMarketingCloudVisitorID(h);
                          if ('string' === typeof n && n.length) {
                            h(n);
                            return;
                          }
                          setTimeout(function () {
                            'VisitorAPI' !== b.releaseType &&
                              ((b.releaseType = 'timeout'), b.releaseRequests());
                          }, this.getLoadTimeout());
                          return;
                        }
                        this.releaseType = 'invalid instance';
                      } else this.noVisitorAPI = !0;
                      this.releaseRequests();
                    }
                  } catch (c) {
                    this.releaseRequests();
                  }
                },
                releaseRequests: function () {
                  this.calledBack = !0;
                  p.registerRequest();
                },
                getMarketingCloudVisitorID: function () {
                  return this.instance ? this.instance.getMarketingCloudVisitorID() : null;
                },
                getMIDQueryString: function () {
                  var a = r.isPopulatedString,
                    b = this.getMarketingCloudVisitorID();
                  (a(this.mid) && this.mid === b) || (this.mid = b);
                  return a(this.mid) ? 'd_mid=' + this.mid + '&' : '';
                },
                getCustomerIDs: function () {
                  return this.instance ? this.instance.getCustomerIDs() : null;
                },
                getCustomerIDsQueryString: function (a) {
                  if (a === Object(a)) {
                    var b = '',
                      e = [],
                      d = [],
                      h,
                      n;
                    for (h in a)
                      a.hasOwnProperty(h) &&
                        ((d[0] = h),
                        (n = a[h]),
                        n === Object(n) &&
                          ((d[1] = n.id || ''), (d[2] = n.authState || 0), e.push(d), (d = [])));
                    if ((d = e.length))
                      for (a = 0; a < d; a++)
                        b += '&d_cid_ic=' + q.encodeAndBuildRequest(e[a], '%01');
                    return b;
                  }
                  return '';
                },
                getIsOptedOut: function () {
                  this.instance
                    ? this.instance.isOptedOut(
                        [this, this.isOptedOutCallback],
                        this.VisitorAPI.OptOut.GLOBAL,
                        !0
                      )
                    : ((this.isOptedOut = !1), (this.isOptedOutCallbackCalled = !0));
                },
                isOptedOutCallback: function (a) {
                  this.isOptedOut = a;
                  this.isOptedOutCallbackCalled = !0;
                  p.registerRequest();
                },
                getLoadTimeout: function () {
                  var a = this.instance;
                  if (a) {
                    if ('function' === typeof a.getLoadTimeout) return a.getLoadTimeout();
                    if ('undefined' !== typeof a.loadTimeout) return a.loadTimeout;
                  }
                  return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE;
                },
              },
              declaredId: {
                declaredId: { init: null, request: null },
                declaredIdCombos: {},
                setDeclaredId: function (a, b) {
                  var e = r.isPopulatedString,
                    d = encodeURIComponent;
                  if (a === Object(a) && e(b)) {
                    var h = a.dpid,
                      n = a.dpuuid,
                      c = null;
                    if (e(h) && e(n)) {
                      c = d(h) + '$' + d(n);
                      if (!0 === this.declaredIdCombos[c])
                        return "setDeclaredId: combo exists for type '" + b + "'";
                      this.declaredIdCombos[c] = !0;
                      this.declaredId[b] = { dpid: h, dpuuid: n };
                      return "setDeclaredId: succeeded for type '" + b + "'";
                    }
                  }
                  return "setDeclaredId: failed for type '" + b + "'";
                },
                getDeclaredIdQueryString: function () {
                  var a = this.declaredId.request,
                    b = this.declaredId.init,
                    e = encodeURIComponent,
                    d = '';
                  null !== a
                    ? (d = '&d_dpid=' + e(a.dpid) + '&d_dpuuid=' + e(a.dpuuid))
                    : null !== b && (d = '&d_dpid=' + e(b.dpid) + '&d_dpuuid=' + e(b.dpuuid));
                  return d;
                },
              },
              registerRequest: function (a) {
                var b = this.firingQueue;
                a === Object(a) && b.push(a);
                this.firing ||
                  !b.length ||
                  (P && !DIL.windowLoaded) ||
                  (this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(),
                  this.adms.calledBack &&
                    !this.adms.isOptedOut &&
                    this.adms.isOptedOutCallbackCalled &&
                    ((this.adms.isOptedOutCallbackCalled = !1),
                    (a = b.shift()),
                    (a.src = a.src.replace(
                      /demdex.net\/event\?d_nsid=/,
                      'demdex.net/event?' + this.adms.getMIDQueryString() + 'd_nsid='
                    )),
                    r.isPopulatedString(a.corsPostData) &&
                      (a.corsPostData = a.corsPostData.replace(
                        /^d_nsid=/,
                        this.adms.getMIDQueryString() + 'd_nsid='
                      )),
                    C.fireRequest(a),
                    this.firstRequestHasFired ||
                      ('script' !== a.tag && 'cors' !== a.tag) ||
                      (this.firstRequestHasFired = !0)));
              },
              processVisitorAPI: function () {
                this.adms.process(R || window.Visitor);
              },
              getCoopQueryString: function () {
                var a = '';
                !0 === z ? (a = '&d_coop_safe=1') : !1 === z && (a = '&d_coop_unsafe=1');
                return a;
              },
            };
          B = function () {
            var a = 'http://fast.',
              b = '?d_nsid=' + l + '#' + encodeURIComponent(document.location.href);
            if ('string' === typeof H && H.length) return H + b;
            t.IS_HTTPS && (a = !0 === N ? 'https://fast.' : 'https://');
            return a + u + '.demdex.net/dest5.html' + b;
          };
          var v = {
              MAX_SYNCS_LENGTH: 649,
              id: 'destination_publishing_iframe_' + u + '_' + l,
              url: B(),
              onPagePixels: [],
              iframeHost: null,
              getIframeHost: function (a) {
                if ('string' === typeof a) {
                  var b = a.split('/');
                  if (3 <= b.length) return b[0] + '//' + b[2];
                  k.push('getIframeHost: url is malformed: ' + a);
                  return a;
                }
              },
              iframe: null,
              iframeHasLoaded: !1,
              sendingMessages: !1,
              messages: [],
              messagesPosted: [],
              messagesReceived: [],
              ibsDeleted: [],
              jsonForComparison: [],
              jsonDuplicates: [],
              jsonWaiting: [],
              jsonProcessed: [],
              canSetThirdPartyCookies: !0,
              receivedThirdPartyCookiesNotification: !1,
              newIframeCreated: null,
              iframeIdChanged: !1,
              originalIframeHasLoadedAlready: null,
              regionChanged: !1,
              timesRegionChanged: 0,
              attachIframe: function () {
                function a () {
                  d = document.createElement('iframe');
                  d.sandbox = 'allow-scripts allow-same-origin';
                  d.title = 'Adobe ID Syncing iFrame';
                  d.id = e.id;
                  d.name = e.id + '_name';
                  d.style.cssText = 'display: none; width: 0; height: 0;';
                  d.src = e.url;
                  e.newIframeCreated = !0;
                  b();
                  document.body.appendChild(d);
                }
                function b () {
                  d.addEventListener('load', function () {
                    d.className = 'aamIframeLoaded';
                    e.iframeHasLoaded = !0;
                    e.requestToProcess();
                  });
                }
                if (!t.IS_IE_LESS_THAN_10) {
                  var e = this,
                    d = document.getElementById(this.id);
                  d
                    ? 'IFRAME' !== d.nodeName
                      ? ((this.id += '_2'), (this.iframeIdChanged = !0), a())
                      : ((this.newIframeCreated = !1),
                        'aamIframeLoaded' !== d.className
                          ? ((this.originalIframeHasLoadedAlready = !1), b())
                          : ((this.iframeHasLoaded = this.originalIframeHasLoadedAlready = !0),
                            (this.iframe = d),
                            this.requestToProcess()))
                    : a();
                  this.iframe = d;
                }
              },
              requestToProcess: function (a, b) {
                function e () {
                  d.jsonForComparison.push(a);
                  d.jsonWaiting.push([a, b]);
                }
                var d = this,
                  h,
                  n;
                h = p.adms.instance;
                a === Object(a) &&
                  h === Object(h) &&
                  h.idSyncContainerID === l &&
                  (v.ibsDeleted.push(a.ibs), delete a.ibs);
                if (a && !r.isEmptyObject(a))
                  if (
                    ((h = JSON.stringify(a.ibs || [])),
                    (n = JSON.stringify(a.dests || [])),
                    this.jsonForComparison.length)
                  ) {
                    var c = !1,
                      f,
                      g,
                      k;
                    f = 0;
                    for (g = this.jsonForComparison.length; f < g; f++)
                      if (
                        ((k = this.jsonForComparison[f]),
                        h === JSON.stringify(k.ibs || []) && n === JSON.stringify(k.dests || []))
                      ) {
                        c = !0;
                        break;
                      }
                    c ? this.jsonDuplicates.push(a) : e();
                  } else e();
                this.receivedThirdPartyCookiesNotification &&
                  this.jsonWaiting.length &&
                  ((h = this.jsonWaiting.shift()),
                  !1 === this.newIframeCreated && delete h[0].ibs,
                  this.process(h[0], h[1]),
                  this.requestToProcess());
                this.iframeHasLoaded &&
                  this.messages.length &&
                  !this.sendingMessages &&
                  ((this.sendingMessages = !0), this.sendMessages());
              },
              checkIfRegionChanged: function (a) {
                var b = q.getDilCookieField(t.REGION);
                null !== b &&
                  'undefined' !== typeof a.dcs_region &&
                  parseInt(b, 10) !== a.dcs_region &&
                  ((this.regionChanged = !0),
                  this.timesRegionChanged++,
                  q.setDilCookieField(t.FIRST_PARTY_SYNCS_ON_PAGE, ''),
                  q.setDilCookieField(t.FIRST_PARTY_SYNCS, ''));
                'undefined' !== typeof a.dcs_region && q.setDilCookieField(t.REGION, a.dcs_region);
              },
              processSyncOnPage: function (a) {
                var b, e, d;
                if ((b = a.ibs) && b instanceof Array && (e = b.length))
                  for (a = 0; a < e; a++)
                    (d = b[a]), d.syncOnPage && this.checkFirstPartyCookie(d, '', 'syncOnPage');
              },
              process: function (a, b) {
                var e = encodeURIComponent,
                  d,
                  h,
                  n,
                  c,
                  f,
                  g;
                b === Object(b) &&
                  (g = q.encodeAndBuildRequest(['', b.dpid || '', b.dpuuid || ''], ','));
                if ((d = a.dests) && d instanceof Array && (h = d.length))
                  for (n = 0; n < h; n++)
                    (c = d[n]),
                      (f = [e('dests'), e(c.id || ''), e(c.y || ''), e(c.c || '')]),
                      this.addMessage(f.join('|'));
                if ((d = a.ibs) && d instanceof Array && (h = d.length))
                  for (n = 0; n < h; n++)
                    (c = d[n]),
                      (f = [
                        e('ibs'),
                        e(c.id || ''),
                        e(c.tag || ''),
                        q.encodeAndBuildRequest(c.url || [], ','),
                        e(c.ttl || ''),
                        '',
                        g,
                        c.fireURLSync ? 'true' : 'false',
                      ]),
                      c.syncOnPage ||
                        (this.canSetThirdPartyCookies
                          ? this.addMessage(f.join('|'))
                          : c.fireURLSync && this.checkFirstPartyCookie(c, f.join('|')));
                this.jsonProcessed.push(a);
              },
              checkFirstPartyCookie: function (a, b, e) {
                var d = (e = 'syncOnPage' === e ? !0 : !1)
                    ? t.FIRST_PARTY_SYNCS_ON_PAGE
                    : t.FIRST_PARTY_SYNCS,
                  h = this.getOnPageSyncData(d),
                  c = !1,
                  f = !1,
                  g = Math.ceil(new Date().getTime() / t.MILLIS_PER_DAY);
                h
                  ? ((h = h.split('*')),
                    (f = this.pruneSyncData(h, a.id, g)),
                    (c = f.dataPresent),
                    (f = f.dataValid),
                    (c && f) || this.fireSync(e, a, b, h, d, g))
                  : ((h = []), this.fireSync(e, a, b, h, d, g));
              },
              getOnPageSyncData: function (a) {
                var b = p.adms.instance;
                return b && 'function' === typeof b.idSyncGetOnPageSyncInfo
                  ? b.idSyncGetOnPageSyncInfo()
                  : q.getDilCookieField(a);
              },
              pruneSyncData: function (a, b, e) {
                var d = !1,
                  h = !1,
                  c,
                  f,
                  g;
                if (a instanceof Array)
                  for (f = 0; f < a.length; f++)
                    (c = a[f]),
                      (g = parseInt(c.split('-')[1], 10)),
                      c.match('^' + b + '-')
                        ? ((d = !0), e < g ? (h = !0) : (a.splice(f, 1), f--))
                        : e >= g && (a.splice(f, 1), f--);
                return { dataPresent: d, dataValid: h };
              },
              manageSyncsSize: function (a) {
                if (a.join('*').length > this.MAX_SYNCS_LENGTH)
                  for (
                    a.sort(function (a, e) {
                      return parseInt(a.split('-')[1], 10) - parseInt(e.split('-')[1], 10);
                    });
                    a.join('*').length > this.MAX_SYNCS_LENGTH;

                  )
                    a.shift();
              },
              fireSync: function (a, b, e, d, h, c) {
                function f (a, b, d, e) {
                  return function () {
                    g.onPagePixels[a] = null;
                    var h = g.getOnPageSyncData(d),
                      c = [];
                    if (h) {
                      var h = h.split('*'),
                        n,
                        f,
                        k;
                      n = 0;
                      for (f = h.length; n < f; n++)
                        (k = h[n]), k.match('^' + b.id + '-') || c.push(k);
                    }
                    g.setSyncTrackingData(c, b, d, e);
                  };
                }
                var g = this;
                if (a) {
                  if ('img' === b.tag) {
                    a = b.url;
                    e = t.IS_HTTPS ? 'https:' : 'http:';
                    var k, p, q;
                    d = 0;
                    for (k = a.length; d < k; d++) {
                      p = a[d];
                      q = /^\/\//.test(p);
                      var l = new Image();
                      l.addEventListener('load', f(this.onPagePixels.length, b, h, c));
                      l.src = (q ? e : '') + p;
                      this.onPagePixels.push(l);
                    }
                  }
                } else this.addMessage(e), this.setSyncTrackingData(d, b, h, c);
              },
              addMessage: function (a) {
                this.messages.push(a);
              },
              setSyncTrackingData: function (a, b, e, d) {
                a.push(b.id + '-' + (d + Math.ceil(b.ttl / 60 / 24)));
                this.manageSyncsSize(a);
                q.setDilCookieField(e, a.join('*'));
              },
              sendMessages: function () {
                var a = '',
                  b = encodeURIComponent;
                this.regionChanged &&
                  ((a = b('---destpub-clear-dextp---')), (this.regionChanged = !1));
                this.messages.length &&
                  ((a = a + b('---destpub-combined---') + this.messages.join('%01')),
                  this.postMessage(a),
                  (this.messages = []));
                this.sendingMessages = !1;
              },
              postMessage: function (a) {
                DIL.xd.postMessage(a, this.url, this.iframe.contentWindow);
                this.messagesPosted.push(a);
              },
              receiveMessage: function (a) {
                var b = /^---destpub-to-parent---/;
                'string' === typeof a &&
                  b.test(a) &&
                  ((b = a.replace(b, '').split('|')),
                  'canSetThirdPartyCookies' === b[0] &&
                    ((this.canSetThirdPartyCookies = 'true' === b[1] ? !0 : !1),
                    (this.receivedThirdPartyCookiesNotification = !0),
                    this.requestToProcess()),
                  this.messagesReceived.push(a));
              },
            },
            J = {
              traits: function (a) {
                r.isValidPdata(a) &&
                  (m.sids instanceof Array || (m.sids = []), q.extendArray(m.sids, a));
                return this;
              },
              pixels: function (a) {
                r.isValidPdata(a) &&
                  (m.pdata instanceof Array || (m.pdata = []), q.extendArray(m.pdata, a));
                return this;
              },
              logs: function (a) {
                r.isValidLogdata(a) &&
                  (m.logdata !== Object(m.logdata) && (m.logdata = {}),
                  q.extendObject(m.logdata, a));
                return this;
              },
              customQueryParams: function (a) {
                r.isEmptyObject(a) || q.extendObject(m, a, p.reservedKeys);
                return this;
              },
              signals: function (a, b) {
                var e,
                  d = a;
                if (!r.isEmptyObject(d)) {
                  if (b && 'string' === typeof b)
                    for (e in ((d = {}), a)) a.hasOwnProperty(e) && (d[b + e] = a[e]);
                  q.extendObject(m, d, p.reservedKeys);
                }
                return this;
              },
              declaredId: function (a) {
                p.declaredId.setDeclaredId(a, 'request');
                return this;
              },
              result: function (a) {
                'function' === typeof a && (m.callback = a);
                return this;
              },
              afterResult: function (a) {
                'function' === typeof a && (m.postCallbackFn = a);
                return this;
              },
              useImageRequest: function () {
                m.useImageRequest = !0;
                return this;
              },
              clearData: function () {
                m = {};
                return this;
              },
              submit: function () {
                C.submitRequest(m);
                m = {};
                return this;
              },
              getPartner: function () {
                return u;
              },
              getContainerNSID: function () {
                return l;
              },
              getEventLog: function () {
                return k;
              },
              getState: function () {
                var a = {},
                  b = {};
                q.extendObject(a, p, { registerRequest: !0 });
                q.extendObject(b, v, {
                  attachIframe: !0,
                  requestToProcess: !0,
                  process: !0,
                  sendMessages: !0,
                });
                return {
                  initConfig: c,
                  pendingRequest: m,
                  otherRequestInfo: a,
                  destinationPublishingInfo: b,
                };
              },
              idSync: function (a) {
                if (G) return 'Error: id syncs have been disabled';
                if (a !== Object(a) || 'string' !== typeof a.dpid || !a.dpid.length)
                  return 'Error: config or config.dpid is empty';
                if ('string' !== typeof a.url || !a.url.length)
                  return 'Error: config.url is empty';
                var b = a.url,
                  e = a.minutesToLive,
                  d = encodeURIComponent,
                  h = v,
                  c,
                  b = b.replace(/^https:/, '').replace(/^http:/, '');
                if ('undefined' === typeof e) e = 20160;
                else if (((e = parseInt(e, 10)), isNaN(e) || 0 >= e))
                  return 'Error: config.minutesToLive needs to be a positive number';
                c = q.encodeAndBuildRequest(['', a.dpid, a.dpuuid || ''], ',');
                a = ['ibs', d(a.dpid), 'img', d(b), e, '', c];
                h.addMessage(a.join('|'));
                p.firstRequestHasFired && h.requestToProcess();
                return 'Successfully queued';
              },
              aamIdSync: function (a) {
                if (G) return 'Error: id syncs have been disabled';
                if (a !== Object(a) || 'string' !== typeof a.dpuuid || !a.dpuuid.length)
                  return 'Error: config or config.dpuuid is empty';
                a.url = '//dpm.demdex.net/ibs:dpid=' + a.dpid + '&dpuuid=' + a.dpuuid;
                return this.idSync(a);
              },
              passData: function (a) {
                if (r.isEmptyObject(a)) return 'Error: json is empty or not an object';
                v.ibsDeleted.push(a.ibs);
                delete a.ibs;
                C.defaultCallback(a);
                return a;
              },
              getPlatformParams: function () {
                return p.platformParams;
              },
              getEventCallConfigParams: function () {
                var a = p,
                  b = a.modStatsParams,
                  e = a.platformParams,
                  d;
                if (!b) {
                  b = {};
                  for (d in e)
                    e.hasOwnProperty(d) &&
                      !a.nonModStatsParams[d] &&
                      (b[d.replace(/^d_/, '')] = e[d]);
                  !0 === z ? (b.coop_safe = 1) : !1 === z && (b.coop_unsafe = 1);
                  a.modStatsParams = b;
                }
                return b;
              },
              setAsCoopSafe: function () {
                z = !0;
                return this;
              },
              setAsCoopUnsafe: function () {
                z = !1;
                return this;
              },
            },
            C = {
              corsMetadata: (function () {
                var a = 'none',
                  b = !0;
                'undefined' !== typeof XMLHttpRequest &&
                  XMLHttpRequest === Object(XMLHttpRequest) &&
                  ('withCredentials' in new XMLHttpRequest()
                    ? (a = 'XMLHttpRequest')
                    : new Function('/*@cc_on return /^10/.test(@_jscript_version) @*/')()
                    ? (a = 'XMLHttpRequest')
                    : 'undefined' !== typeof XDomainRequest &&
                      XDomainRequest === Object(XDomainRequest) &&
                      (b = !1),
                  0 < Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') &&
                    (b = !1));
                return { corsType: a, corsCookiesEnabled: b };
              })(),
              getCORSInstance: function () {
                return 'none' === this.corsMetadata.corsType
                  ? null
                  : new window[this.corsMetadata.corsType]();
              },
              submitRequest: function (a) {
                p.registerRequest(C.createQueuedRequest(a));
                return !0;
              },
              createQueuedRequest: function (a) {
                var b = a.callback,
                  e = 'img',
                  d,
                  h;
                if (!r.isEmptyObject(A)) {
                  var c;
                  for (d in A)
                    A.hasOwnProperty(d) &&
                      ((h = A[d]),
                      null == h ||
                        '' === h ||
                        !(d in a) ||
                        h in a ||
                        h in p.reservedKeys ||
                        ((c = a[d]), null != c && '' !== c && (a[h] = c)));
                }
                r.isValidPdata(a.sids) || (a.sids = []);
                r.isValidPdata(a.pdata) || (a.pdata = []);
                r.isValidLogdata(a.logdata) || (a.logdata = {});
                a.logdataArray = q.convertObjectToKeyValuePairs(a.logdata, '=', !0);
                a.logdataArray.push('_ts=' + new Date().getTime());
                'function' !== typeof b && (b = this.defaultCallback);
                d = this.makeRequestSrcData(a);
                (h = this.getCORSInstance()) && !0 !== a.useImageRequest && (e = 'cors');
                return {
                  tag: e,
                  src: d.src,
                  corsSrc: d.corsSrc,
                  callbackFn: b,
                  postCallbackFn: a.postCallbackFn,
                  useImageRequest: !!a.useImageRequest,
                  requestData: a,
                  corsInstance: h,
                  corsPostData: d.corsPostData,
                };
              },
              defaultCallback: function (a, b) {
                v.checkIfRegionChanged(a);
                v.processSyncOnPage(a);
                var e, d, h, c, f, g, k, l, m;
                if ((e = a.stuff) && e instanceof Array && (d = e.length))
                  for (h = 0; h < d; h++)
                    if ((c = e[h]) && c === Object(c)) {
                      f = c.cn;
                      g = c.cv;
                      k = c.ttl;
                      if ('undefined' === typeof k || '' === k)
                        k = Math.floor(q.getMaxCookieExpiresInMinutes() / 60 / 24);
                      l = c.dmn || '.' + document.domain.replace(/^www\./, '');
                      m = c.type;
                      f &&
                        (g || 'number' === typeof g) &&
                        ('var' !== m &&
                          (k = parseInt(k, 10)) &&
                          !isNaN(k) &&
                          q.setCookie(f, g, 1440 * k, '/', l, !1),
                        (M.stuffed[f] = g));
                    }
                e = a.uuid;
                r.isPopulatedString(e) &&
                  !r.isEmptyObject(y) &&
                  ((d = y.path),
                  ('string' === typeof d && d.length) || (d = '/'),
                  (h = parseInt(y.days, 10)),
                  isNaN(h) && (h = 100),
                  q.setCookie(
                    y.name || 'aam_did',
                    e,
                    1440 * h,
                    d,
                    y.domain || '.' + document.domain.replace(/^www\./, ''),
                    !0 === y.secure
                  ));
                D || p.abortRequests || v.requestToProcess(a, b);
              },
              makeRequestSrcData: function (a) {
                a.sids = r.removeEmptyArrayValues(a.sids || []);
                a.pdata = r.removeEmptyArrayValues(a.pdata || []);
                var b = p,
                  e = b.platformParams,
                  d = q.encodeAndBuildRequest(a.sids, ','),
                  c = q.encodeAndBuildRequest(a.pdata, ','),
                  f = (a.logdataArray || []).join('&');
                delete a.logdataArray;
                var g = t.IS_HTTPS ? 'https://' : 'http://',
                  k = b.declaredId.getDeclaredIdQueryString(),
                  l = b.adms.instance
                    ? b.adms.getCustomerIDsQueryString(b.adms.getCustomerIDs())
                    : '',
                  m = [],
                  x,
                  v,
                  I,
                  w;
                for (x in a)
                  if (!(x in b.reservedKeys) && a.hasOwnProperty(x))
                    if (((v = a[x]), (x = encodeURIComponent(x)), v instanceof Array))
                      for (I = 0, w = v.length; I < w; I++)
                        m.push(x + '=' + encodeURIComponent(v[I]));
                    else m.push(x + '=' + encodeURIComponent(v));
                a = m.length ? '&' + m.join('&') : '';
                b =
                  'd_nsid=' +
                  e.d_nsid +
                  b.getCoopQueryString() +
                  k +
                  l +
                  (d.length ? '&d_sid=' + d : '') +
                  (c.length ? '&d_px=' + c : '') +
                  (f.length ? '&d_ld=' + encodeURIComponent(f) : '');
                e = '&d_rtbd=' + e.d_rtbd + '&d_jsonv=' + e.d_jsonv + '&d_dst=' + e.d_dst;
                g = g + u + '.demdex.net/event';
                c = d = g + '?' + b + e + a;
                2048 < d.length && (d = d.substring(0, 2048).substring(0, d.lastIndexOf('&')));
                return {
                  corsSrc: g + '?_ts=' + new Date().getTime(),
                  src: d,
                  originalSrc: c,
                  corsPostData: b + e + a,
                  isDeclaredIdCall: '' !== k,
                };
              },
              fireRequest: function (a) {
                if ('img' === a.tag) this.fireImage(a);
                else {
                  var b = p.declaredId,
                    b = b.declaredId.request || b.declaredId.init || {};
                  this.fireCORS(a, { dpid: b.dpid || '', dpuuid: b.dpuuid || '' });
                }
              },
              fireImage: function (a) {
                var b = p,
                  e,
                  d;
                b.abortRequests ||
                  ((b.firing = !0),
                  (e = new Image(0, 0)),
                  b.sent.push(a),
                  (e.onload = function () {
                    b.firing = !1;
                    b.fired.push(a);
                    b.num_of_img_responses++;
                    b.registerRequest();
                  }),
                  (d = function (d) {
                    g = 'imgAbortOrErrorHandler received the event of type ' + d.type;
                    k.push(g);
                    b.abortRequests = !0;
                    b.firing = !1;
                    b.errored.push(a);
                    b.num_of_img_errors++;
                    b.registerRequest();
                  }),
                  e.addEventListener('error', d),
                  e.addEventListener('abort', d),
                  (e.src = a.src));
              },
              fireCORS: function (a, b) {
                var e = this,
                  d = p,
                  c = this.corsMetadata.corsType,
                  f = a.corsSrc,
                  l = a.corsInstance,
                  q = a.corsPostData,
                  m = a.postCallbackFn,
                  r = 'function' === typeof m;
                if (!d.abortRequests && !S) {
                  d.firing = !0;
                  try {
                    l.open('post', f, !0),
                      'XMLHttpRequest' === c &&
                        ((l.withCredentials = !0),
                        l.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                        (l.onreadystatechange = function () {
                          if (4 === this.readyState && 200 === this.status)
                            a: {
                              var c;
                              try {
                                if (((c = JSON.parse(this.responseText)), c !== Object(c))) {
                                  e.handleCORSError(a, b, 'Response is not JSON');
                                  break a;
                                }
                              } catch (h) {
                                e.handleCORSError(a, b, 'Error parsing response as JSON');
                                break a;
                              }
                              G && (v.ibsDeleted.push(c.ibs), delete c.ibs);
                              try {
                                var f = a.callbackFn;
                                d.firing = !1;
                                d.fired.push(a);
                                d.num_of_cors_responses++;
                                f(c, b);
                                r && m(c, b);
                              } catch (h) {
                                h.message =
                                  'DIL handleCORSResponse caught error with message ' + h.message;
                                g = h.message;
                                k.push(g);
                                h.filename = h.filename || 'dil.js';
                                h.partner = u;
                                DIL.errorModule.handleError(h);
                                try {
                                  f({ error: h.name + '|' + h.message }, b),
                                    r && m({ error: h.name + '|' + h.message }, b);
                                } catch (n) {}
                              } finally {
                                d.registerRequest();
                              }
                            }
                        })),
                      (l.onerror = function () {
                        e.handleCORSError(a, b, 'onerror');
                      }),
                      (l.ontimeout = function () {
                        e.handleCORSError(a, b, 'ontimeout');
                      }),
                      l.send(q);
                  } catch (t) {
                    this.handleCORSError(a, b, 'try-catch');
                  }
                  d.sent.push(a);
                  d.declaredId.declaredId.request = null;
                }
              },
              handleCORSError: function (a, b, e) {
                p.num_of_cors_errors++;
                p.corsErrorSources.push(e);
              },
              handleRequestError: function (a, b) {
                var e = p;
                k.push(a);
                e.abortRequests = !0;
                e.firing = !1;
                e.errored.push(b);
                e.registerRequest();
              },
            },
            r = {
              isValidPdata: function (a) {
                return a instanceof Array && this.removeEmptyArrayValues(a).length ? !0 : !1;
              },
              isValidLogdata: function (a) {
                return !this.isEmptyObject(a);
              },
              isEmptyObject: function (a) {
                if (a !== Object(a)) return !0;
                for (var b in a) if (a.hasOwnProperty(b)) return !1;
                return !0;
              },
              removeEmptyArrayValues: function (a) {
                for (var b = 0, e = a.length, d, c = [], b = 0; b < e; b++)
                  (d = a[b]), 'undefined' !== typeof d && null !== d && '' !== d && c.push(d);
                return c;
              },
              isPopulatedString: function (a) {
                return 'string' === typeof a && a.length;
              },
            },
            q = {
              convertObjectToKeyValuePairs: function (a, b, e) {
                var d = [],
                  c,
                  f;
                b || (b = '=');
                for (c in a)
                  a.hasOwnProperty(c) &&
                    ((f = a[c]),
                    'undefined' !== typeof f &&
                      null !== f &&
                      '' !== f &&
                      d.push(c + b + (e ? encodeURIComponent(f) : f)));
                return d;
              },
              encodeAndBuildRequest: function (a, b) {
                return a
                  .map(function (a) {
                    return encodeURIComponent(a);
                  })
                  .join(b);
              },
              getCookie: function (a) {
                a += '=';
                var b = document.cookie.split(';'),
                  e,
                  d,
                  c;
                e = 0;
                for (d = b.length; e < d; e++) {
                  for (c = b[e]; ' ' === c.charAt(0); ) c = c.substring(1, c.length);
                  if (0 === c.indexOf(a))
                    return decodeURIComponent(c.substring(a.length, c.length));
                }
                return null;
              },
              setCookie: function (a, b, e, d, c, f) {
                var g = new Date();
                e && (e *= 60000);
                document.cookie =
                  a +
                  '=' +
                  encodeURIComponent(b) +
                  (e ? ';expires=' + new Date(g.getTime() + e).toUTCString() : '') +
                  (d ? ';path=' + d : '') +
                  (c ? ';domain=' + c : '') +
                  (f ? ';secure' : '');
              },
              extendArray: function (a, b) {
                return a instanceof Array && b instanceof Array
                  ? (Array.prototype.push.apply(a, b), !0)
                  : !1;
              },
              extendObject: function (a, b, e) {
                var d;
                if (a === Object(a) && b === Object(b)) {
                  for (d in b)
                    !b.hasOwnProperty(d) || (!r.isEmptyObject(e) && d in e) || (a[d] = b[d]);
                  return !0;
                }
                return !1;
              },
              getMaxCookieExpiresInMinutes: function () {
                return t.SIX_MONTHS_IN_MINUTES;
              },
              getCookieField: function (a, b) {
                var e = this.getCookie(a),
                  d = decodeURIComponent;
                if ('string' === typeof e) {
                  var e = e.split('|'),
                    c,
                    f;
                  c = 0;
                  for (f = e.length - 1; c < f; c++) if (d(e[c]) === b) return d(e[c + 1]);
                }
                return null;
              },
              getDilCookieField: function (a) {
                return this.getCookieField(t.DIL_COOKIE_NAME, a);
              },
              setCookieField: function (a, b, c) {
                var d = this.getCookie(a),
                  f = !1,
                  g = encodeURIComponent;
                b = g(b);
                c = g(c);
                if ('string' === typeof d) {
                  var d = d.split('|'),
                    k,
                    g = 0;
                  for (k = d.length - 1; g < k; g++)
                    if (d[g] === b) {
                      d[g + 1] = c;
                      f = !0;
                      break;
                    }
                  f || ((g = d.length), (d[g] = b), (d[g + 1] = c));
                } else d = [b, c];
                this.setCookie(
                  a,
                  d.join('|'),
                  this.getMaxCookieExpiresInMinutes(),
                  '/',
                  this.getDomain(),
                  !1
                );
              },
              setDilCookieField: function (a, b) {
                return this.setCookieField(t.DIL_COOKIE_NAME, a, b);
              },
              getDomain: function (a) {
                !a && window.location && (a = window.location.hostname);
                if (a)
                  if (/^[0-9.]+$/.test(a)) a = '';
                  else {
                    var b = a.split('.'),
                      c = b.length - 1,
                      d = c - 1;
                    1 < c &&
                      2 >= b[c].length &&
                      (2 === b[c - 1].length ||
                        0 > ',DOMAIN_2_CHAR_EXCEPTIONS,'.indexOf(',' + b[c] + ',')) &&
                      d--;
                    if (0 < d) for (a = ''; c >= d; ) (a = b[c] + (a ? '.' : '') + a), c--;
                  }
                return a;
              },
              replaceMethodsWithFunction: function (a, b) {
                var c;
                if (a === Object(a) && 'function' === typeof b)
                  for (c in a) a.hasOwnProperty(c) && 'function' === typeof a[c] && (a[c] = b);
              },
            };
          'error' === u &&
            0 === l &&
            window.addEventListener('load', function () {
              DIL.windowLoaded = !0;
            });
          var T = !1,
            K = function () {
              T || ((T = !0), p.registerRequest(), U(), D || p.abortRequests || v.attachIframe());
            },
            U = function () {
              D ||
                setTimeout(function () {
                  Q ||
                    p.firstRequestHasFired ||
                    ('function' === typeof L ? J.afterResult(L).submit() : J.submit());
                }, DIL.constants.TIME_TO_DEFAULT_REQUEST);
            };
          w = document;
          'error' !== u &&
            (DIL.windowLoaded
              ? K()
              : 'complete' !== w.readyState && 'loaded' !== w.readyState
              ? window.addEventListener('load', function () {
                  DIL.windowLoaded = !0;
                  K();
                })
              : ((DIL.windowLoaded = !0), K()));
          if ('error' !== u)
            try {
              DIL.xd.receiveMessage(function (a) {
                v.receiveMessage(a.data);
              }, v.getIframeHost(v.url));
            } catch (a) {}
          p.declaredId.setDeclaredId(O, 'init');
          p.processVisitorAPI();
          t.IS_IE_LESS_THAN_10 &&
            q.replaceMethodsWithFunction(J, function () {
              return this;
            });
          this.api = J;
          this.getStuffedVariable = function (a) {
            var b = M.stuffed[a];
            b ||
              'number' === typeof b ||
              (b = q.getCookie(a)) ||
              'number' === typeof b ||
              (b = '');
            return b;
          };
          this.validators = r;
          this.helpers = q;
          this.constants = t;
          this.log = k;
          E &&
            ((this.pendingRequest = m),
            (this.requestController = p),
            (this.setDestinationPublishingUrl = B),
            (this.destinationPublishing = v),
            (this.requestProcs = C),
            (this.variables = M),
            (this.callWindowLoadFunctions = K));
        }),
        (DIL.extendStaticPropertiesAndMethods = function (c) {
          var f;
          if (c === Object(c)) for (f in c) c.hasOwnProperty(f) && (this[f] = c[f]);
        }),
        DIL.extendStaticPropertiesAndMethods({
          version: '7.0',
          jsonVersion: 1,
          constants: { TIME_TO_DEFAULT_REQUEST: 50 },
          variables: { scriptNodeList: document.getElementsByTagName('script') },
          windowLoaded: !1,
          dils: {},
          isAddedPostWindowLoad: function (c) {
            this.windowLoaded = 'function' === typeof c ? !!c() : 'boolean' === typeof c ? c : !0;
          },
          create: function (c) {
            try {
              return new DIL(c);
            } catch (f) {
              throw Error(
                'Error in attempt to create DIL instance with DIL.create(): ' + f.message
              );
            }
          },
          registerDil: function (c, f, k) {
            f = f + '$' + k;
            f in this.dils || (this.dils[f] = c);
          },
          getDil: function (c, f) {
            var k;
            'string' !== typeof c && (c = '');
            f || (f = 0);
            k = c + '$' + f;
            return k in this.dils
              ? this.dils[k]
              : Error(
                  'The DIL instance with partner = ' +
                    c +
                    ' and containerNSID = ' +
                    f +
                    ' was not found'
                );
          },
          dexGetQSVars: function (c, f, k) {
            f = this.getDil(f, k);
            return f instanceof this ? f.getStuffedVariable(c) : '';
          },
          xd: {
            postMessage: function (c, f, k) {
              f && k.postMessage(c, f.replace(/([^:]+:\/\/[^\/]+).*/, '$1'));
            },
            receiveMessage: function (c, f) {
              var k;
              try {
                c &&
                  (k = function (g) {
                    if (
                      ('string' === typeof f && g.origin !== f) ||
                      ('[object Function]' === Object.prototype.toString.call(f) &&
                        !1 === f(g.origin))
                    )
                      return !1;
                    c(g);
                  }),
                  window[c ? 'addEventListener' : 'removeEventListener']('message', k, !1);
              } catch (g) {}
            },
          },
        }),
        (DIL.errorModule = (function () {
          var c = DIL.create({
              partner: 'error',
              containerNSID: 0,
              disableDestinationPublishingIframe: !0,
            }),
            f = {
              harvestererror: 14138,
              destpuberror: 14139,
              dpmerror: 14140,
              generalerror: 14137,
              error: 14137,
              noerrortypedefined: 15021,
              evalerror: 15016,
              rangeerror: 15017,
              referenceerror: 15018,
              typeerror: 15019,
              urierror: 15020,
            },
            k = !1;
          return {
            activate: function () {
              k = !0;
            },
            handleError: function (g) {
              if (!k) return 'DIL error module has not been activated';
              g !== Object(g) && (g = {});
              var w = g.name ? (g.name + '').toLowerCase() : '',
                u = [];
              g = {
                name: w,
                filename: g.filename ? g.filename + '' : '',
                partner: g.partner ? g.partner + '' : 'no_partner',
                site: g.site ? g.site + '' : document.location.href,
                message: g.message ? g.message + '' : '',
              };
              u.push(w in f ? f[w] : f.noerrortypedefined);
              c.api.pixels(u).logs(g).useImageRequest().submit();
              return 'DIL error report sent';
            },
            pixelMap: f,
          };
        })()),
        (DIL.tools = {}),
        (DIL.modules = {
          helpers: {
            handleModuleError: function (c, f, k) {
              var g = '';
              f = f || 'Error caught in DIL module/submodule: ';
              c === Object(c)
                ? (g = f + (c.message || 'err has no message'))
                : ((g = f + 'err is not a valid object'), (c = {}));
              c.message = g;
              k instanceof DIL && (c.partner = k.api.getPartner());
              DIL.errorModule.handleError(c);
              return (this.errorMessage = g);
            },
          },
        }));
      function AppMeasurement (r) {
        var a = this;
        a.version = '2.9.0';
        var k = window;
        (k.AppMeasurement = this), k.s_c_in || ((k.s_c_il = []), (k.s_c_in = 0));
        a._il = k.s_c_il;
        a._in = k.s_c_in;
        a._il[a._in] = a;
        k.s_c_in++;
        a._c = 's_c';
        var p = k.AppMeasurement.Mb;
        p || (p = null);
        var n = k,
          m,
          s;
        try {
          for (
            m = n.parent, s = n.location;
            m &&
            m.location &&
            s &&
            '' + m.location != '' + s &&
            n.location &&
            '' + m.location != '' + n.location &&
            m.location.host == s.host;

          )
            (n = m), (m = n.parent);
        } catch (u) {}
        a.D = function (a) {
          try {
            console.log(a);
          } catch (b) {}
        };
        a.Ga = function (a) {
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
                (c = a.replace(c, d, '%' + d.charCodeAt(0).toString(16).toUpperCase()));
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
        a.tb = function () {
          var c = k.location.hostname,
            b = a.fpCookieDomainPeriods,
            d;
          b || (b = a.cookieDomainPeriods);
          if (
            c &&
            !a.ya &&
            !/^[0-9.]+$/.test(c) &&
            ((b = b ? parseInt(b) : 2), (b = 2 < b ? b : 2), (d = c.lastIndexOf('.')), 0 <= d)
          ) {
            for (; 0 <= d && 1 < b; ) (d = c.lastIndexOf('.', d - 1)), b--;
            a.ya = 0 < d ? c.substring(d) : c;
          }
          return a.ya;
        };
        a.c_r = a.cookieRead = function (c) {
          c = a.escape(c);
          var b = ' ' + a.d.cookie,
            d = b.indexOf(' ' + c + '='),
            f = 0 > d ? d : b.indexOf(';', d);
          c = 0 > d ? '' : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
          return '[[B]]' != c ? c : '';
        };
        a.c_w = a.cookieWrite = function (c, b, d) {
          var f = a.tb(),
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
                ((d = new Date()), (g = d.getYear()), d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
          return c && 'NONE' != e
            ? ((a.d.cookie =
                a.escape(c) +
                '=' +
                a.escape('' != b ? b : '[[B]]') +
                '; path=/;' +
                (d && 'SESSION' != e ? ' expires=' + d.toUTCString() + ';' : '') +
                (f ? ' domain=' + f + ';' : '')),
              a.cookieRead(c) == b)
            : 0;
        };
        a.qb = function () {
          var c = a.Util.getIeVersion();
          'number' === typeof c &&
            10 > c &&
            ((a.unsupportedBrowser = !0), a.fb(a, function () {}));
        };
        a.fb = function (a, b) {
          for (var d in a) a.hasOwnProperty(d) && 'function' === typeof a[d] && (a[d] = b);
        };
        a.L = [];
        a.ba = function (c, b, d) {
          if (a.za) return 0;
          a.maxDelay || (a.maxDelay = 250);
          var f = 0,
            e = new Date().getTime() + a.maxDelay,
            g = a.d.visibilityState,
            h = ['webkitvisibilitychange', 'visibilitychange'];
          g || (g = a.d.webkitVisibilityState);
          if (g && 'prerender' == g) {
            if (!a.ca)
              for (a.ca = 1, d = 0; d < h.length; d++)
                a.d.addEventListener(h[d], function () {
                  var c = a.d.visibilityState;
                  c || (c = a.d.webkitVisibilityState);
                  'visible' == c && ((a.ca = 0), a.delayReady());
                });
            f = 1;
            e = 0;
          } else d || (a.o('_d') && (f = 1));
          f && (a.L.push({ m: c, a: b, t: e }), a.ca || setTimeout(a.delayReady, a.maxDelay));
          return f;
        };
        a.delayReady = function () {
          var c = new Date().getTime(),
            b = 0,
            d;
          for (a.o('_d') ? (b = 1) : a.qa(); 0 < a.L.length; ) {
            d = a.L.shift();
            if (b && !d.t && d.t > c) {
              a.L.unshift(d);
              setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
              break;
            }
            a.za = 1;
            a[d.m].apply(a, d.a);
            a.za = 0;
          }
        };
        a.setAccount = a.sa = function (c) {
          var b, d;
          if (!a.ba('setAccount', arguments))
            if (((a.account = c), a.allAccounts))
              for (
                b = a.allAccounts.concat(c.split(',')), a.allAccounts = [], b.sort(), d = 0;
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
            h = '';
          e = f = '';
          if (a.lightProfileID)
            (d = a.P), (h = a.lightTrackVars) && (h = ',' + h + ',' + a.ga.join(',') + ',');
          else {
            d = a.g;
            if (a.pe || a.linkType)
              (h = a.linkTrackVars),
                (f = a.linkTrackEvents),
                a.pe &&
                  ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                  a[e] && ((h = a[e].Kb), (f = a[e].Jb)));
            h && (h = ',' + h + ',' + a.G.join(',') + ',');
            f && h && (h += ',events,');
          }
          b && (b = ',' + b + ',');
          for (f = 0; f < d.length; f++)
            (e = d[f]),
              (g = a[e]) &&
                (!h || 0 <= h.indexOf(',' + e + ',')) &&
                (!b || 0 <= b.indexOf(',' + e + ',')) &&
                c(e, g);
        };
        a.q = function (c, b, d, f, e) {
          var g = '',
            h,
            l,
            k,
            q,
            m = 0;
          'contextData' == c && (c = 'c');
          if (b) {
            for (h in b)
              if (
                !(Object.prototype[h] || (e && h.substring(0, e.length) != e)) &&
                b[h] &&
                (!d || 0 <= d.indexOf(',' + (f ? f + '.' : '') + h + ','))
              ) {
                k = !1;
                if (m)
                  for (l = 0; l < m.length; l++) h.substring(0, m[l].length) == m[l] && (k = !0);
                if (
                  !k &&
                  ('' == g && (g += '&' + c + '.'),
                  (l = b[h]),
                  e && (h = h.substring(e.length)),
                  0 < h.length)
                )
                  if (((k = h.indexOf('.')), 0 < k))
                    (l = h.substring(0, k)),
                      (k = (e ? e : '') + l + '.'),
                      m || (m = []),
                      m.push(k),
                      (g += a.q(l, b, d, f, k));
                  else if (('boolean' == typeof l && (l = l ? 'true' : 'false'), l)) {
                    if ('retrieveLightData' == f && 0 > e.indexOf('.contextData.'))
                      switch (((k = h.substring(0, 4)), (q = h.substring(4)), h)) {
                        case 'transactionID':
                          h = 'xact';
                          break;
                        case 'channel':
                          h = 'ch';
                          break;
                        case 'campaign':
                          h = 'v0';
                          break;
                        default:
                          a.Ga(q) &&
                            ('prop' == k
                              ? (h = 'c' + q)
                              : 'eVar' == k
                              ? (h = 'v' + q)
                              : 'list' == k
                              ? (h = 'l' + q)
                              : 'hier' == k && ((h = 'h' + q), (l = l.substring(0, 255))));
                      }
                    g += '&' + a.escape(h) + '=' + a.escape(l);
                  }
              }
            '' != g && (g += '&.' + c);
          }
          return g;
        };
        a.usePostbacks = 0;
        a.wb = function () {
          var c = '',
            b,
            d,
            f,
            e,
            g,
            h,
            l,
            k,
            q = '',
            m = '',
            n = (e = '');
          if (a.lightProfileID)
            (b = a.P), (q = a.lightTrackVars) && (q = ',' + q + ',' + a.ga.join(',') + ',');
          else {
            b = a.g;
            if (a.pe || a.linkType)
              (q = a.linkTrackVars),
                (m = a.linkTrackEvents),
                a.pe &&
                  ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                  a[e] && ((q = a[e].Kb), (m = a[e].Jb)));
            q && (q = ',' + q + ',' + a.G.join(',') + ',');
            m && ((m = ',' + m + ','), q && (q += ',events,'));
            a.events2 && (n += ('' != n ? ',' : '') + a.events2);
          }
          if (a.visitor && a.visitor.getCustomerIDs) {
            e = p;
            if ((g = a.visitor.getCustomerIDs()))
              for (d in g)
                Object.prototype[d] ||
                  ((f = g[d]),
                  'object' == typeof f &&
                    (e || (e = {}),
                    f.id && (e[d + '.id'] = f.id),
                    f.authState && (e[d + '.as'] = f.authState)));
            e && (c += a.q('cid', e));
          }
          a.AudienceManagement &&
            a.AudienceManagement.isReady() &&
            (c += a.q('d', a.AudienceManagement.getEventCallConfigParams()));
          for (d = 0; d < b.length; d++) {
            e = b[d];
            g = a[e];
            f = e.substring(0, 4);
            h = e.substring(4);
            g ||
              ('events' == e && n
                ? ((g = n), (n = ''))
                : 'marketingCloudOrgID' == e && a.visitor && (g = a.visitor.marketingCloudOrgID));
            if (g && (!q || 0 <= q.indexOf(',' + e + ','))) {
              switch (e) {
                case 'customerPerspective':
                  e = 'cp';
                  break;
                case 'marketingCloudOrgID':
                  e = 'mcorgid';
                  break;
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
                    ((a.pageURLRest = g.substring(255)), (g = g.substring(0, 255)));
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
                  n && (g += ('' != g ? ',' : '') + n);
                  if (m)
                    for (h = g.split(','), g = '', f = 0; f < h.length; f++)
                      (l = h[f]),
                        (k = l.indexOf('=')),
                        0 <= k && (l = l.substring(0, k)),
                        (k = l.indexOf(':')),
                        0 <= k && (l = l.substring(0, k)),
                        0 <= m.indexOf(',' + l + ',') && (g += (g ? ',' : '') + h[f]);
                  break;
                case 'events2':
                  g = '';
                  break;
                case 'contextData':
                  c += a.q('c', a[e], q, e);
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
                  a.retrieveLightProfiles && (c += a.q('mts', a[e], q, e));
                  g = '';
                  break;
                default:
                  a.Ga(h) &&
                    ('prop' == f
                      ? (e = 'c' + h)
                      : 'eVar' == f
                      ? (e = 'v' + h)
                      : 'list' == f
                      ? (e = 'l' + h)
                      : 'hier' == f && ((e = 'h' + h), (g = g.substring(0, 255))));
              }
              g && (c += '&' + e + '=' + ('pev' != e.substring(0, 3) ? a.escape(g) : g));
            }
            'pev3' == e && a.e && (c += a.e);
          }
          a.fa && ((c += '&lrt=' + a.fa), (a.fa = null));
          return c;
        };
        a.C = function (a) {
          var b = a.tagName;
          if (
            'undefined' != '' + a.Pb ||
            ('undefined' != '' + a.Fb && 'HTML' != ('' + a.Fb).toUpperCase())
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
        a.Ca = function (a) {
          var b = k.location,
            d = a.href ? a.href : '',
            f,
            e,
            g;
          f = d.indexOf(':');
          e = d.indexOf('?');
          g = d.indexOf('/');
          d &&
            (0 > f || (0 <= e && f > e) || (0 <= g && f > g)) &&
            ((e = a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : ''),
            (f = b.pathname.lastIndexOf('/')),
            (d =
              (e ? e + '//' : '') +
              (a.host ? a.host : b.host ? b.host : '') +
              ('/' != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + '/' : '') +
              d));
          return d;
        };
        a.M = function (c) {
          var b = a.C(c),
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
                    a.replace(a.replace(a.replace('' + f, '\r', ''), '\n', ''), '\t', ''),
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
              : (e = a.Ca(c)),
            e)
            ? { id: e.substring(0, 100), type: g }
            : 0;
        };
        a.Nb = function (c) {
          for (var b = a.C(c), d = a.M(c); c && !d && 'BODY' != b; )
            if ((c = c.parentElement ? c.parentElement : c.parentNode)) (b = a.C(c)), (d = a.M(c));
          (d && 'BODY' != b) || (c = 0);
          c &&
            ((b = c.onclick ? '' + c.onclick : ''),
            0 <= b.indexOf('.tl(') || 0 <= b.indexOf('.trackLink(')) &&
            (c = 0);
          return c;
        };
        a.Eb = function () {
          var c,
            b,
            d = a.linkObject,
            f = a.linkType,
            e = a.linkURL,
            g,
            h;
          a.ha = 1;
          d || ((a.ha = 0), (d = a.clickObject));
          if (d) {
            c = a.C(d);
            for (b = a.M(d); d && !b && 'BODY' != c; )
              if ((d = d.parentElement ? d.parentElement : d.parentNode))
                (c = a.C(d)), (b = a.M(d));
            (b && 'BODY' != c) || (d = 0);
            if (d && !a.linkObject) {
              var l = d.onclick ? '' + d.onclick : '';
              if (0 <= l.indexOf('.tl(') || 0 <= l.indexOf('.trackLink(')) d = 0;
            }
          } else a.ha = 1;
          !e && d && (e = a.Ca(d));
          e &&
            !a.linkLeaveQueryString &&
            ((g = e.indexOf('?')), 0 <= g && (e = e.substring(0, g)));
          if (!f && e) {
            var m = 0,
              q = 0,
              n;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
              for (
                l = e.toLowerCase(),
                  g = l.indexOf('?'),
                  h = l.indexOf('#'),
                  0 <= g ? 0 <= h && h < g && (g = h) : (g = h),
                  0 <= g && (l = l.substring(0, g)),
                  g = a.linkDownloadFileTypes.toLowerCase().split(','),
                  h = 0;
                h < g.length;
                h++
              )
                (n = g[h]) && l.substring(l.length - (n.length + 1)) == '.' + n && (f = 'd');
            if (
              a.trackExternalLinks &&
              !f &&
              ((l = e.toLowerCase()),
              a.Fa(l) &&
                (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname),
                (g = 0),
                a.linkExternalFilters
                  ? ((g = a.linkExternalFilters.toLowerCase().split(',')), (m = 1))
                  : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(',')),
                g))
            ) {
              for (h = 0; h < g.length; h++) (n = g[h]), 0 <= l.indexOf(n) && (q = 1);
              q ? m && (f = 'e') : m || (f = 'e');
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
                k.s_objectID && ((b.id = k.s_objectID), (d = b.type = 1)),
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
        a.xb = function () {
          var c = a.ha,
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
          if (a.trackClickMap || a.trackInlineStats || a.Ab()) {
            var b = {},
              d = 0,
              e = a.cookieRead('s_sq'),
              g = e ? e.split('&') : 0,
              h,
              l,
              k,
              e = 0;
            if (g)
              for (h = 0; h < g.length; h++)
                (l = g[h].split('=')),
                  (f = a.unescape(l[0]).split(',')),
                  (l = a.unescape(l[1])),
                  (b[l] = f);
            f = a.account.split(',');
            h = {};
            for (k in a.contextData)
              k &&
                !Object.prototype[k] &&
                'a.activitymap.' == k.substring(0, 14) &&
                ((h[k] = a.contextData[k]), (a.contextData[k] = ''));
            a.e = a.q('c', h) + (a.e ? a.e : '');
            if (c || a.e) {
              c && !a.e && (e = 1);
              for (l in b)
                if (!Object.prototype[l])
                  for (k = 0; k < f.length; k++)
                    for (
                      e &&
                        ((g = b[l].join(',')),
                        g == a.account &&
                          ((a.e += ('&' != l.charAt(0) ? '&' : '') + l), (b[l] = []), (d = 1))),
                        h = 0;
                      h < b[l].length;
                      h++
                    )
                      (g = b[l][h]),
                        g == f[k] &&
                          (e &&
                            (a.e +=
                              '&u=' + a.escape(g) + ('&' != l.charAt(0) ? '&' : '') + l + '&u=0'),
                          b[l].splice(h, 1),
                          (d = 1));
              c || (d = 1);
              if (d) {
                e = '';
                h = 2;
                !c && a.e && ((e = a.escape(f.join(',')) + '=' + a.escape(a.e)), (h = 1));
                for (l in b)
                  !Object.prototype[l] &&
                    0 < h &&
                    0 < b[l].length &&
                    ((e += (e ? '&' : '') + a.escape(b[l].join(',')) + '=' + a.escape(l)), h--);
                a.cookieWrite('s_sq', e);
              }
            }
          }
          return c;
        };
        a.yb = function () {
          if (!a.Ib) {
            var c = new Date(),
              b = n.location,
              d,
              f,
              e = (f = d = ''),
              g = '',
              h = '',
              l = '1.2',
              k = a.cookieWrite('s_cc', 'true', 0) ? 'Y' : 'N',
              m = '',
              p = '';
            if (
              c.setUTCDate &&
              ((l = '1.3'), (0).toPrecision && ((l = '1.5'), (c = []), c.forEach))
            ) {
              l = '1.6';
              f = 0;
              d = {};
              try {
                (f = new Iterator(d)),
                  f.next &&
                    ((l = '1.7'),
                    c.reduce &&
                      ((l = '1.8'),
                      l.trim &&
                        ((l = '1.8.1'),
                        Date.parse && ((l = '1.8.2'), Object.create && (l = '1.8.5')))));
              } catch (r) {}
            }
            d = screen.width + 'x' + screen.height;
            e = navigator.javaEnabled() ? 'Y' : 'N';
            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
            g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
            h = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
              a.b.addBehavior('#default#homePage'), (m = a.b.Ob(b) ? 'Y' : 'N');
            } catch (s) {}
            try {
              a.b.addBehavior('#default#clientCaps'), (p = a.b.connectionType);
            } catch (t) {}
            a.resolution = d;
            a.colorDepth = f;
            a.javascriptVersion = l;
            a.javaEnabled = e;
            a.cookiesEnabled = k;
            a.browserWidth = g;
            a.browserHeight = h;
            a.connectionType = p;
            a.homepage = m;
            a.Ib = 1;
          }
        };
        a.Q = {};
        a.loadModule = function (c, b) {
          var d = a.Q[c];
          if (!d) {
            d = k['AppMeasurement_Module_' + c] ? new k['AppMeasurement_Module_' + c](a) : {};
            a.Q[c] = a[c] = d;
            d.Za = function () {
              return d.eb;
            };
            d.gb = function (b) {
              if ((d.eb = b)) (a[c + '_onLoad'] = b), a.ba(c + '_onLoad', [a, d], 1) || b(a, d);
            };
            try {
              Object.defineProperty
                ? Object.defineProperty(d, 'onLoad', { get: d.Za, set: d.gb })
                : (d._olc = 1);
            } catch (f) {
              d._olc = 1;
            }
          }
          b && ((a[c + '_onLoad'] = b), a.ba(c + '_onLoad', [a, d], 1) || b(a, d));
        };
        a.o = function (c) {
          var b, d;
          for (b in a.Q)
            if (
              !Object.prototype[b] &&
              (d = a.Q[b]) &&
              (d._olc && d.onLoad && ((d._olc = 0), d.onLoad(a, d)), d[c] && d[c]())
            )
              return 1;
          return 0;
        };
        a.Ab = function () {
          return a.ActivityMap && a.ActivityMap._c ? !0 : !1;
        };
        a.Bb = function () {
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
          var d, f, e, g, h, l;
          for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.ua : a.g, e = 0; e < f.length; e++)
              if (((g = f[e]), (h = c[g]) || c['!' + g])) {
                if (!b && ('contextData' == g || 'retrieveLightData' == g) && a[g])
                  for (l in a[g]) h[l] || (h[l] = a[g][l]);
                a[g] = h;
              }
        };
        a.Qa = function (c, b) {
          var d, f, e, g;
          for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.ua : a.g, e = 0; e < f.length; e++)
              (g = f[e]), (c[g] = a[g]), b || c[g] || (c['!' + g] = 1);
        };
        a.sb = function (a) {
          var b,
            d,
            f,
            e,
            g,
            h = 0,
            l,
            k = '',
            m = '';
          if (
            a &&
            255 < a.length &&
            ((b = '' + a),
            (d = b.indexOf('?')),
            0 < d &&
              ((l = b.substring(d + 1)),
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
                  ? (h = ',q,ie,start,search_key,word,kw,cd,')
                  : 0 <= e.indexOf('yahoo.co') && (h = ',p,ei,'),
                h && l)))
          ) {
            if ((a = l.split('&')) && 1 < a.length) {
              for (f = 0; f < a.length; f++)
                (e = a[f]),
                  (d = e.indexOf('=')),
                  0 < d && 0 <= h.indexOf(',' + e.substring(0, d) + ',')
                    ? (k += (k ? '&' : '') + e)
                    : (m += (m ? '&' : '') + e);
              k && m ? (l = k + '&' + m) : (m = '');
            }
            d = 253 - (l.length - m.length) - b.length;
            a = b + (0 < d ? g.substring(0, d) : '') + '?' + l;
          }
          return a;
        };
        a.Ta = function (c) {
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
        a.X = !1;
        a.J = !1;
        a.ib = function () {
          a.J = !0;
          a.H();
        };
        a.Y = !1;
        a.S = !1;
        a.jb = function (c) {
          a.marketingCloudVisitorID = c.MCMID;
          a.visitorOptedOut = c.MCOPTOUT;
          a.analyticsVisitorID = c.MCAID;
          a.audienceManagerLocationHint = c.MCAAMLH;
          a.audienceManagerBlob = c.MCAAMB;
          a.S = !0;
          a.H();
        };
        a.Sa = function (c) {
          a.maxDelay || (a.maxDelay = 250);
          return a.o('_d')
            ? (c &&
                setTimeout(function () {
                  c();
                }, a.maxDelay),
              !1)
            : !0;
        };
        a.W = !1;
        a.I = !1;
        a.qa = function () {
          a.I = !0;
          a.H();
        };
        a.isReadyToTrack = function () {
          var c = !0,
            b = a.visitor;
          a.X || a.J || (a.Ta(a.ib) ? (a.J = !0) : (a.X = !0));
          if (a.X && !a.J) return !1;
          b &&
            b.isAllowed() &&
            (a.Y ||
              a.marketingCloudVisitorID ||
              !b.getVisitorValues ||
              ((a.Y = !0), a.marketingCloudVisitorID ? (a.S = !0) : b.getVisitorValues(a.jb)),
            (c = !a.Y || a.S || a.marketingCloudVisitorID ? !0 : !1));
          a.W || a.I || (a.Sa(a.qa) ? (a.I = !0) : (a.W = !0));
          a.W && !a.I && (c = !1);
          return c;
        };
        a.l = p;
        a.r = 0;
        a.callbackWhenReadyToTrack = function (c, b, d) {
          var f;
          f = {};
          f.nb = c;
          f.mb = b;
          f.kb = d;
          a.l == p && (a.l = []);
          a.l.push(f);
          0 == a.r && (a.r = setInterval(a.H, 100));
        };
        a.H = function () {
          var c;
          if (a.isReadyToTrack() && (a.hb(), a.l != p))
            for (; 0 < a.l.length; ) (c = a.l.shift()), c.mb.apply(c.nb, c.kb);
        };
        a.hb = function () {
          a.r && (clearInterval(a.r), (a.r = 0));
        };
        a.ab = function (c) {
          var b,
            d,
            f = p,
            e = p;
          if (!a.isReadyToTrack()) {
            b = [];
            if (c != p) for (d in ((f = {}), c)) f[d] = c[d];
            e = {};
            a.Qa(e, !0);
            b.push(f);
            b.push(e);
            a.callbackWhenReadyToTrack(a, a.track, b);
            return !0;
          }
          return !1;
        };
        a.ub = function () {
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
          a.visitor && a.visitor.getAuthState && (a.authState = a.visitor.getAuthState());
          a.o('_s');
          a.ab(c) ||
            (b && a.R(b),
            c && ((d = {}), a.Qa(d, 0), a.R(c)),
            a.Bb() &&
              !a.visitorOptedOut &&
              (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.ub()),
              a.Eb(),
              a.usePlugins && a.doPlugins && a.doPlugins(a),
              a.account &&
                (a.abort ||
                  (a.trackOffline &&
                    !a.timestamp &&
                    (a.timestamp = Math.floor(f.getTime() / 1000)),
                  (f = k.location),
                  a.pageURL || (a.pageURL = f.href ? f.href : f),
                  a.referrer ||
                    a.Ra ||
                    ((f = a.Util.getQueryParam('adobe_mc_ref', null, null, !0)),
                    (a.referrer =
                      f || void 0 === f ? (void 0 === f ? '' : f) : n.document.referrer)),
                  (a.Ra = 1),
                  (a.referrer = a.sb(a.referrer)),
                  a.o('_g')),
                a.xb() &&
                  !a.abort &&
                  (a.visitor &&
                    !a.supplementalDataID &&
                    a.visitor.getSupplementalDataID &&
                    (a.supplementalDataID = a.visitor.getSupplementalDataID(
                      'AppMeasurement:' + a._in,
                      a.expectSupplementalData ? !1 : !0
                    )),
                  a.yb(),
                  (g += a.wb()),
                  a.cb(e, g),
                  a.o('_t'),
                  (a.referrer = '')))),
            c && a.R(d, 1));
          a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0;
        };
        a.ta = [];
        a.registerPreTrackCallback = function (c) {
          for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
          'function' == typeof c
            ? a.ta.push([c, b])
            : a.debugTracking &&
              a.D('DEBUG: Non function type passed to registerPreTrackCallback');
        };
        a.Wa = function (c) {
          a.oa(a.ta, c);
        };
        a.ra = [];
        a.registerPostTrackCallback = function (c) {
          for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
          'function' == typeof c
            ? a.ra.push([c, b])
            : a.debugTracking &&
              a.D('DEBUG: Non function type passed to registerPostTrackCallback');
        };
        a.Va = function (c) {
          a.oa(a.ra, c);
        };
        a.oa = function (c, b) {
          if ('object' == typeof c)
            for (var d = 0; d < c.length; d++) {
              var f = c[d][0],
                e = c[d][1].slice();
              e.unshift(b);
              if ('function' == typeof f)
                try {
                  f.apply(null, e);
                } catch (g) {
                  a.debugTracking && a.D(g.message);
                }
            }
        };
        a.tl = a.trackLink = function (c, b, d, f, e) {
          a.linkObject = c;
          a.linkType = b;
          a.linkName = d;
          e && ((a.k = c), (a.v = e));
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
        a.cb = function (c, b) {
          var d =
            a.Xa() +
            '/' +
            c +
            '?AQB=1&ndh=1&pf=1&' +
            (a.pa() ? 'callback=s_c_il[' + a._in + '].doPostbacks&et=1&' : '') +
            b +
            '&AQE=1';
          a.Wa(d);
          a.Ua(d);
          a.T();
        };
        a.Xa = function () {
          var c = a.Ya();
          return (
            'http' +
            (a.ssl ? 's' : '') +
            '://' +
            c +
            '/b/ss/' +
            a.account +
            '/' +
            (a.mobile ? '5.' : '') +
            (a.pa() ? '10' : '1') +
            '/JS-' +
            a.version +
            (a.Hb ? 'T' : '') +
            (a.tagContainerMarker ? '-' + a.tagContainerMarker : '')
          );
        };
        a.pa = function () {
          return (a.AudienceManagement && a.AudienceManagement.isReady()) || 0 != a.usePostbacks;
        };
        a.Ya = function () {
          var c = a.dc,
            b = a.trackingServer;
          b
            ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure)
            : ((c = c ? ('' + c).toLowerCase() : 'd1'),
              'd1' == c ? (c = '112') : 'd2' == c && (c = '122'),
              (b = a.$a() + '.' + c + '.2o7.net'));
          return b;
        };
        a.$a = function () {
          var c = a.visitorNamespace;
          c || ((c = a.account.split(',')[0]), (c = c.replace(/[^0-9a-z]/gi, '')));
          return c;
        };
        a.Pa = /{(%?)(.*?)(%?)}/;
        a.Lb = RegExp(a.Pa.source, 'g');
        a.rb = function (c) {
          if ('object' == typeof c.dests)
            for (var b = 0; b < c.dests.length; ++b) {
              var d = c.dests[b];
              if ('string' == typeof d.c && 'aa.' == d.id.substr(0, 3))
                for (var f = d.c.match(a.Lb), e = 0; e < f.length; ++e) {
                  var g = f[e],
                    h = g.match(a.Pa),
                    k = '';
                  '%' == h[1] && 'timezone_offset' == h[2]
                    ? (k = new Date().getTimezoneOffset())
                    : '%' == h[1] && 'timestampz' == h[2] && (k = a.vb());
                  d.c = d.c.replace(g, a.escape(k));
                }
            }
        };
        a.vb = function () {
          var c = new Date(),
            b = new Date(60000 * Math.abs(c.getTimezoneOffset()));
          return (
            a.j(4, c.getFullYear()) +
            '-' +
            a.j(2, c.getMonth() + 1) +
            '-' +
            a.j(2, c.getDate()) +
            'T' +
            a.j(2, c.getHours()) +
            ':' +
            a.j(2, c.getMinutes()) +
            ':' +
            a.j(2, c.getSeconds()) +
            (0 < c.getTimezoneOffset() ? '-' : '+') +
            a.j(2, b.getUTCHours()) +
            ':' +
            a.j(2, b.getUTCMinutes())
          );
        };
        a.j = function (a, b) {
          return (Array(a + 1).join(0) + b).slice(-a);
        };
        a.la = {};
        a.doPostbacks = function (c) {
          if ('object' == typeof c)
            if (
              (a.rb(c),
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
                  ((a.la[d.id] = new Image()), (a.la[d.id].alt = ''), (a.la[d.id].src = d.c));
              }
        };
        a.Ua = function (c) {
          a.i || a.zb();
          a.i.push(c);
          a.ea = a.B();
          a.Na();
        };
        a.zb = function () {
          a.i = a.Cb();
          a.i || (a.i = []);
        };
        a.Cb = function () {
          var c, b;
          if (a.ka()) {
            try {
              (b = k.localStorage.getItem(a.ia())) && (c = k.JSON.parse(b));
            } catch (d) {}
            return c;
          }
        };
        a.ka = function () {
          var c = !0;
          (a.trackOffline && a.offlineFilename && k.localStorage && k.JSON) || (c = !1);
          return c;
        };
        a.Da = function () {
          var c = 0;
          a.i && (c = a.i.length);
          a.p && c++;
          return c;
        };
        a.T = function () {
          if (a.p && (a.A && a.A.complete && a.A.F && a.A.na(), a.p)) return;
          a.Ea = p;
          if (a.ja) a.ea > a.O && a.La(a.i), a.ma(500);
          else {
            var c = a.lb();
            if (0 < c) a.ma(c);
            else if ((c = a.Aa())) (a.p = 1), a.Db(c), a.Gb(c);
          }
        };
        a.ma = function (c) {
          a.Ea || (c || (c = 0), (a.Ea = setTimeout(a.T, c)));
        };
        a.lb = function () {
          var c;
          if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
          c = a.B() - a.Ja;
          return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
        };
        a.Aa = function () {
          if (0 < a.i.length) return a.i.shift();
        };
        a.Db = function (c) {
          if (a.debugTracking) {
            var b = 'AppMeasurement Debug: ' + c;
            c = c.split('&');
            var d;
            for (d = 0; d < c.length; d++) b += '\n\t' + a.unescape(c[d]);
            a.D(b);
          }
        };
        a.bb = function () {
          return a.marketingCloudVisitorID || a.analyticsVisitorID;
        };
        a.V = !1;
        var t;
        try {
          t = JSON.parse('{"x":"y"}');
        } catch (w) {
          t = null;
        }
        t && 'y' == t.x
          ? ((a.V = !0),
            (a.U = function (a) {
              return JSON.parse(a);
            }))
          : k.$ && k.$.parseJSON
          ? ((a.U = function (a) {
              return k.$.parseJSON(a);
            }),
            (a.V = !0))
          : (a.U = function () {
              return null;
            });
        a.Gb = function (c) {
          var b, d, f;
          a.bb() &&
            2047 < c.length &&
            ('undefined' != typeof XMLHttpRequest &&
              ((b = new XMLHttpRequest()), 'withCredentials' in b ? (d = 1) : (b = 0)),
            b || 'undefined' == typeof XDomainRequest || ((b = new XDomainRequest()), (d = 2)),
            b &&
              ((a.AudienceManagement && a.AudienceManagement.isReady()) || 0 != a.usePostbacks) &&
              (a.V ? (b.va = !0) : (b = 0)));
          !b && a.Oa && (c = c.substring(0, 2047));
          !b &&
            a.d.createElement &&
            (0 != a.usePostbacks || (a.AudienceManagement && a.AudienceManagement.isReady())) &&
            (b = a.d.createElement('SCRIPT')) &&
            'async' in b &&
            ((f = (f = a.d.getElementsByTagName('HEAD')) && f[0] ? f[0] : a.d.body)
              ? ((b.type = 'text/javascript'), b.setAttribute('async', 'async'), (d = 3))
              : (b = 0));
          b ||
            ((b = new Image()),
            (b.alt = ''),
            b.abort ||
              'undefined' === typeof k.InstallTrigger ||
              (b.abort = function () {
                b.src = p;
              }));
          b.Ka = Date.now();
          b.xa = function () {
            try {
              b.F && (clearTimeout(b.F), (b.F = 0));
            } catch (a) {}
          };
          b.onload = b.na = function () {
            b.Ka && (a.fa = Date.now() - b.Ka);
            a.Va(c);
            b.xa();
            a.pb();
            a.Z();
            a.p = 0;
            a.T();
            if (b.va) {
              b.va = !1;
              try {
                a.doPostbacks(a.U(b.responseText));
              } catch (d) {}
            }
          };
          b.onabort = b.onerror = b.Ba = function () {
            b.xa();
            (a.trackOffline || a.ja) && a.p && a.i.unshift(a.ob);
            a.p = 0;
            a.ea > a.O && a.La(a.i);
            a.Z();
            a.ma(500);
          };
          b.onreadystatechange = function () {
            4 == b.readyState && (200 == b.status ? b.na() : b.Ba());
          };
          a.Ja = a.B();
          if (1 == d || 2 == d) {
            var e = c.indexOf('?');
            f = c.substring(0, e);
            e = c.substring(e + 1);
            e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, '');
            1 == d ? (b.open('POST', f, !0), b.send(e)) : 2 == d && (b.open('POST', f), b.send(e));
          } else if (((b.src = c), 3 == d)) {
            if (a.Ha)
              try {
                f.removeChild(a.Ha);
              } catch (g) {}
            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
            a.Ha = a.A;
          }
          b.F = setTimeout(function () {
            b.F && (b.complete ? b.na() : (a.trackOffline && b.abort && b.abort(), b.Ba()));
          }, 5000);
          a.ob = c;
          a.A = k['s_i_' + a.replace(a.account, ',', '_')] = b;
          if ((a.useForcedLinkTracking && a.K) || a.v)
            a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
              (a.aa = setTimeout(a.Z, a.forcedLinkTrackingTimeout));
        };
        a.pb = function () {
          if (a.ka() && !(a.Ia > a.O))
            try {
              k.localStorage.removeItem(a.ia()), (a.Ia = a.B());
            } catch (c) {}
        };
        a.La = function (c) {
          if (a.ka()) {
            a.Na();
            try {
              k.localStorage.setItem(a.ia(), k.JSON.stringify(c)), (a.O = a.B());
            } catch (b) {}
          }
        };
        a.Na = function () {
          if (a.trackOffline) {
            if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
            for (; a.i.length > a.offlineLimit; ) a.Aa();
          }
        };
        a.forceOffline = function () {
          a.ja = !0;
        };
        a.forceOnline = function () {
          a.ja = !1;
        };
        a.ia = function () {
          return a.offlineFilename + '-' + a.visitorNamespace + a.account;
        };
        a.B = function () {
          return new Date().getTime();
        };
        a.Fa = function (a) {
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
          a.Hb = c;
          for (b = 0; b < a._il.length; b++)
            if ((d = a._il[b]) && 's_l' == d._c && d.tagContainerName == c) {
              a.R(d);
              if (d.lmq) for (b = 0; b < d.lmq.length; b++) (f = d.lmq[b]), a.loadModule(f.n);
              if (d.ml)
                for (f in d.ml)
                  if (a[f])
                    for (b in ((c = a[f]), (f = d.ml[f]), f))
                      !Object.prototype[b] &&
                        ('function' != typeof f[b] || 0 > ('' + f[b]).indexOf('s_c_il')) &&
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
          getQueryParam: function (c, b, d, f) {
            var e,
              g = '';
            b || (b = a.pageURL ? a.pageURL : k.location);
            d = d ? d : '&';
            if (!c || !b) return g;
            b = '' + b;
            e = b.indexOf('?');
            if (0 > e) return g;
            b = d + b.substring(e + 1) + d;
            if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + '=' + d))) {
              e = b.indexOf('#');
              0 <= e && (b = b.substr(0, e) + d);
              e = b.indexOf(d + c + '=');
              if (0 > e) return g;
              b = b.substring(e + d.length + c.length + 1);
              e = b.indexOf(d);
              0 <= e && (b = b.substring(0, e));
              0 < b.length && (g = a.unescape(b));
              return g;
            }
          },
          getIeVersion: function () {
            if (document.documentMode) return document.documentMode;
            for (var a = 7; 4 < a; a--) {
              var b = document.createElement('div');
              b.innerHTML = '<!--[if IE ' + a + ']><span></span><![endif]-->';
              if (b.getElementsByTagName('span').length) return a;
            }
            return null;
          },
        };
        a.G = 'supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData'.split(
          ' '
        );
        a.g = a.G.concat(
          'purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt'.split(
            ' '
          )
        );
        a.ga = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(
          ' '
        );
        a.P = a.ga.slice(0);
        a.ua = 'account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement'.split(
          ' '
        );
        for (m = 0; 250 >= m; m++)
          76 > m && (a.g.push('prop' + m), a.P.push('prop' + m)),
            a.g.push('eVar' + m),
            a.P.push('eVar' + m),
            6 > m && a.g.push('hier' + m),
            4 > m && a.g.push('list' + m);
        m = 'pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID'.split(
          ' '
        );
        a.g = a.g.concat(m);
        a.G = a.G.concat(m);
        a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf('https');
        a.charSet = 'UTF-8';
        a.contextData = {};
        a.offlineThrottleDelay = 0;
        a.offlineFilename = 'AppMeasurement.offline';
        a.Ja = 0;
        a.ea = 0;
        a.O = 0;
        a.Ia = 0;
        a.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
        a.w = k;
        a.d = k.document;
        try {
          if (((a.Oa = !1), navigator)) {
            var v = navigator.userAgent;
            if (
              'Microsoft Internet Explorer' == navigator.appName ||
              0 <= v.indexOf('MSIE ') ||
              (0 <= v.indexOf('Trident/') && 0 <= v.indexOf('Windows NT 6'))
            )
              a.Oa = !0;
          }
        } catch (x) {}
        a.Z = function () {
          a.aa && (k.clearTimeout(a.aa), (a.aa = p));
          a.k && a.K && a.k.dispatchEvent(a.K);
          a.v && ('function' == typeof a.v ? a.v() : a.k && a.k.href && (a.d.location = a.k.href));
          a.k = a.K = a.v = 0;
        };
        a.Ma = function () {
          a.b = a.d.body;
          a.b
            ? ((a.u = function (c) {
                var b, d, f, e, g;
                if (!((a.d && a.d.getElementById('cppXYctnr')) || (c && c['s_fe_' + a._in]))) {
                  if (a.wa)
                    if (a.useForcedLinkTracking) a.b.removeEventListener('click', a.u, !1);
                    else {
                      a.b.removeEventListener('click', a.u, !0);
                      a.wa = a.useForcedLinkTracking = 0;
                      return;
                    }
                  else a.useForcedLinkTracking = 0;
                  a.clickObject = c.srcElement ? c.srcElement : c.target;
                  try {
                    if (
                      !a.clickObject ||
                      (a.N && a.N == a.clickObject) ||
                      !(
                        a.clickObject.tagName ||
                        a.clickObject.parentElement ||
                        a.clickObject.parentNode
                      )
                    )
                      a.clickObject = 0;
                    else {
                      var h = (a.N = a.clickObject);
                      a.da && (clearTimeout(a.da), (a.da = 0));
                      a.da = setTimeout(function () {
                        a.N == h && (a.N = 0);
                      }, 10000);
                      f = a.Da();
                      a.track();
                      if (f < a.Da() && a.useForcedLinkTracking && c.target) {
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
                          a.Fa(g) || (g = 0),
                          (d = e.target),
                          c.target.dispatchEvent &&
                            g &&
                            (!d ||
                              '_self' == d ||
                              '_top' == d ||
                              '_parent' == d ||
                              (k.name && d == k.name)))
                        ) {
                          try {
                            b = a.d.createEvent('MouseEvents');
                          } catch (l) {
                            b = new k.MouseEvent();
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
                            } catch (m) {
                              b = 0;
                            }
                            b &&
                              ((b['s_fe_' + a._in] = b.s_fe = 1),
                              c.stopPropagation(),
                              c.stopImmediatePropagation && c.stopImmediatePropagation(),
                              c.preventDefault(),
                              (a.k = c.target),
                              (a.K = b));
                          }
                        }
                      }
                    }
                  } catch (n) {
                    a.clickObject = 0;
                  }
                }
              }),
              a.b && a.b.attachEvent
                ? a.b.attachEvent('onclick', a.u)
                : a.b &&
                  a.b.addEventListener &&
                  (navigator &&
                    ((0 <= navigator.userAgent.indexOf('WebKit') && a.d.createEvent) ||
                      (0 <= navigator.userAgent.indexOf('Firefox/2') && k.MouseEvent)) &&
                    ((a.wa = 1),
                    (a.useForcedLinkTracking = 1),
                    a.b.addEventListener('click', a.u, !0)),
                  a.b.addEventListener('click', a.u, !1)))
            : setTimeout(a.Ma, 30);
        };
        a.qb();
        a.Qb ||
          (r
            ? a.setAccount(r)
            : a.D('Error, missing Report Suite ID in AppMeasurement initialization'),
          a.Ma(),
          a.loadModule('ActivityMap'));
      }
      function s_gi (r) {
        var a,
          k = window.s_c_il,
          p,
          n,
          m = r.split(','),
          s,
          u,
          t = 0;
        if (k)
          for (p = 0; !t && p < k.length; ) {
            a = k[p];
            if ('s_c' == a._c && (a.account || a.oun))
              if (a.account && a.account == r) t = 1;
              else
                for (
                  n = a.account ? a.account : a.oun,
                    n = a.allAccounts ? a.allAccounts : n.split(','),
                    s = 0;
                  s < m.length;
                  s++
                )
                  for (u = 0; u < n.length; u++) m[s] == n[u] && (t = 1);
            p++;
          }
        t ? a.setAccount && a.setAccount(r) : (a = new AppMeasurement(r));
        return a;
      }
      AppMeasurement.getInstance = s_gi;
      window.s_objectID || (window.s_objectID = 0);
      function s_pgicq () {
        var r = window,
          a = r.s_giq,
          k,
          p,
          n;
        if (a)
          for (k = 0; k < a.length; k++)
            (p = a[k]),
              (n = s_gi(p.oun)),
              n.setAccount(p.un),
              n.setTagContainer(p.tagContainerName);
        r.s_giq = 0;
      }
      s_pgicq();
    } else {
      function AppMeasurement_Module_AudienceManagement (d) {
        var a = this;
        a.s = d;
        var b = window;
        b.s_c_in || ((b.s_c_il = []), (b.s_c_in = 0));
        a._il = b.s_c_il;
        a._in = b.s_c_in;
        a._il[a._in] = a;
        b.s_c_in++;
        a._c = 's_m';
        a.setup = function (c) {
          b.DIL &&
            c &&
            ((c.disableDefaultRequest = !0),
            (c.disableScriptAttachment = !0),
            (c.disableCORS = !0),
            (c.secureDataCollection = !1),
            (a.instance = b.DIL.create(c)),
            (a.tools = b.DIL.tools));
        };
        a.isReady = function () {
          return a.instance ? !0 : !1;
        };
        a.getEventCallConfigParams = function () {
          return a.instance && a.instance.api && a.instance.api.getEventCallConfigParams
            ? a.instance.api.getEventCallConfigParams()
            : {};
        };
        a.passData = function (b) {
          a.instance && a.instance.api && a.instance.api.passData && a.instance.api.passData(b);
        };
      }
      !(function () {
        'use strict';
        var r, o, a;
        'function' != typeof window.DIL &&
          ((window.DIL = function (n) {
            const $___old_be22d7463bbf65b5 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              ),
              $___old_f40c885476067520 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              );
            try {
              if ($___old_be22d7463bbf65b5)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_5e1b81c00d598b73.XMLHttpRequest
                ));
              if ($___old_f40c885476067520)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_5e1b81c00d598b73.XMLHttpRequest
                ));
              return function () {
                var c,
                  e,
                  I,
                  r,
                  u,
                  h,
                  t,
                  o,
                  s,
                  i,
                  a,
                  d,
                  l,
                  f,
                  p,
                  g,
                  m,
                  y = [],
                  b = {};
                n !== Object(n) && (n = {}),
                  (I = n.partner),
                  (r = n.containerNSID),
                  (u = n.mappings),
                  (h = n.uuidCookie),
                  (t = !0 === n.enableErrorReporting),
                  (o = n.visitorService),
                  (s = n.declaredId),
                  (i = !0 === n.delayAllUntilWindowLoad),
                  (a = void 0 === n.secureDataCollection || !0 === n.secureDataCollection),
                  (d = 'boolean' == typeof n.isCoopSafe ? n.isCoopSafe : null),
                  (l = !0 === n.disableDefaultRequest),
                  (f = n.afterResultForDefaultRequest),
                  (p = n.visitorConstructor),
                  (g = !0 === n.disableCORS),
                  (m = !0 === n.ignoreHardDependencyOnVisitorAPI),
                  t && DIL.errorModule.activate(),
                  m &&
                    y.push(
                      'Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.'
                    );
                var O = !0 === window._dil_unit_tests;
                if (((c = arguments[1]) && y.push(c + ''), !I || 'string' != typeof I)) {
                  var v = {
                    name: 'error',
                    message: (c = 'DIL partner is invalid or not specified in initConfig'),
                    filename: 'dil.js',
                  };
                  return DIL.errorModule.handleError(v), new Error(c);
                }
                if (
                  ((c =
                    'DIL containerNSID is invalid or not specified in initConfig, setting to default of 0'),
                  (r || 'number' == typeof r) &&
                    ((r = parseInt(r, 10)), !isNaN(r) && 0 <= r && (c = '')),
                  c && ((r = 0), y.push(c), (c = '')),
                  (e = DIL.getDil(I, r)) instanceof DIL &&
                    e.api.getPartner() === I &&
                    e.api.getContainerNSID() === r)
                )
                  return e;
                if (!(this instanceof DIL))
                  return new DIL(
                    n,
                    "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " +
                      I +
                      ' and containerNSID = ' +
                      r
                  );
                DIL.registerDil(this, I, r);
                var C = {
                  IS_HTTPS: a || 'https:' === document.location.protocol,
                  SIX_MONTHS_IN_MINUTES: 259200,
                  IE_VERSION: (function () {
                    if (document.documentMode) return document.documentMode;
                    for (var e = 7; 4 < e; e--) {
                      var t = document.createElement('div');
                      if (
                        ((t.innerHTML = '<!--[if IE ' + e + ']><span></span><![endif]-->'),
                        t.getElementsByTagName('span').length)
                      )
                        return (t = null), e;
                    }
                    return null;
                  })(),
                };
                C.IS_IE_LESS_THAN_10 = 'number' == typeof C.IE_VERSION && C.IE_VERSION < 10;
                var S = { stuffed: {} },
                  D = {},
                  R = {
                    firingQueue: [],
                    fired: [],
                    firing: !1,
                    sent: [],
                    errored: [],
                    reservedKeys: {
                      sids: !0,
                      pdata: !0,
                      logdata: !0,
                      callback: !0,
                      postCallbackFn: !0,
                      useImageRequest: !0,
                    },
                    firstRequestHasFired: !1,
                    abortRequests: !1,
                    num_of_cors_responses: 0,
                    num_of_cors_errors: 0,
                    corsErrorSources: [],
                    num_of_img_responses: 0,
                    num_of_img_errors: 0,
                    platformParams: {
                      d_nsid: r + '',
                      d_rtbd: 'json',
                      d_jsonv: DIL.jsonVersion + '',
                      d_dst: '1',
                    },
                    nonModStatsParams: { d_rtbd: !0, d_dst: !0, d_cts: !0, d_rs: !0 },
                    modStatsParams: null,
                    adms: {
                      TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 30000,
                      calledBack: !1,
                      mid: null,
                      noVisitorAPI: null,
                      VisitorAPI: null,
                      instance: null,
                      releaseType: 'no VisitorAPI',
                      isOptedOut: !0,
                      isOptedOutCallbackCalled: !1,
                      admsProcessingStarted: !1,
                      process: function (e) {
                        try {
                          if (this.admsProcessingStarted) return;
                          this.admsProcessingStarted = !0;
                          var t,
                            n,
                            s,
                            i = o;
                          if ('function' != typeof e || 'function' != typeof e.getInstance)
                            throw ((this.noVisitorAPI = !0), new Error('Visitor does not exist.'));
                          if (i !== Object(i) || !(t = i.namespace) || 'string' != typeof t)
                            throw (
                              ((this.releaseType = 'no namespace'),
                              new Error(
                                "DIL.create() needs the initConfig property `visitorService`:{namespace:'<Experience Cloud Org ID>'}"
                              ))
                            );
                          if (
                            !(
                              (n = e.getInstance(t, { idSyncContainerID: r })) === Object(n) &&
                              n instanceof e &&
                              'function' == typeof n.isAllowed &&
                              'function' == typeof n.getMarketingCloudVisitorID &&
                              'function' == typeof n.getCustomerIDs &&
                              'function' == typeof n.isOptedOut &&
                              'function' == typeof n.publishDestinations
                            )
                          )
                            throw (
                              ((this.releaseType = 'invalid instance'),
                              (s = 'Invalid Visitor instance.'),
                              n === Object(n) &&
                                'function' != typeof n.publishDestinations &&
                                (s +=
                                  ' In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3+ .'),
                              new Error(s))
                            );
                          if (((this.VisitorAPI = e), !n.isAllowed()))
                            return (
                              (this.releaseType = 'VisitorAPI is not allowed to write cookies'),
                              void this.releaseRequests()
                            );
                          (this.instance = n), this.waitForMidToReleaseRequests();
                        } catch (e) {
                          if (!m)
                            throw new Error(
                              'Error in processing Visitor API, which is a hard dependency for DIL v8.0+: ' +
                                e.message
                            );
                          this.releaseRequests();
                        }
                      },
                      waitForMidToReleaseRequests: function () {
                        var t = this;
                        this.instance &&
                          (this.instance.getMarketingCloudVisitorID(function (e) {
                            (t.mid = e), (t.releaseType = 'VisitorAPI'), t.releaseRequests();
                          }, !0),
                          (!j.exists ||
                            (!j.isIabContext && j.isApproved()) ||
                            (j.isIabContext && x.hasGoSignal())) &&
                            setTimeout(function () {
                              'VisitorAPI' !== t.releaseType &&
                                ((t.releaseType = 'timeout'), t.releaseRequests());
                            }, this.getLoadTimeout()));
                      },
                      releaseRequests: function () {
                        (this.calledBack = !0), R.registerRequest();
                      },
                      getMarketingCloudVisitorID: function () {
                        return this.instance ? this.instance.getMarketingCloudVisitorID() : null;
                      },
                      getMIDQueryString: function () {
                        var e = q.isPopulatedString,
                          t = this.getMarketingCloudVisitorID();
                        return (
                          (e(this.mid) && this.mid === t) || (this.mid = t),
                          e(this.mid) ? 'd_mid=' + this.mid + '&' : ''
                        );
                      },
                      getCustomerIDs: function () {
                        return this.instance ? this.instance.getCustomerIDs() : null;
                      },
                      getCustomerIDsQueryString: function (e) {
                        if (e !== Object(e)) return '';
                        var t,
                          n,
                          s,
                          i,
                          r = '',
                          o = [],
                          a = [];
                        for (t in e)
                          e.hasOwnProperty(t) &&
                            (n = e[(a[0] = t)]) === Object(n) &&
                            ((a[1] = n.id || ''), (a[2] = n.authState || 0), o.push(a), (a = []));
                        if ((i = o.length))
                          for (s = 0; s < i; s++)
                            r += '&d_cid_ic=' + A.encodeAndBuildRequest(o[s], '%01');
                        return r;
                      },
                      getIsOptedOut: function () {
                        this.instance
                          ? this.instance.isOptedOut(
                              [this, this.isOptedOutCallback],
                              this.VisitorAPI.OptOut.GLOBAL,
                              !0
                            )
                          : ((this.isOptedOut = !1), (this.isOptedOutCallbackCalled = !0));
                      },
                      getIsOptedOutTemp: function () {
                        var e = this;
                        this.instance
                          ? setTimeout(function () {
                              e.isOptedOutCallback(!1);
                            }, 250)
                          : ((this.isOptedOut = !1), (this.isOptedOutCallbackCalled = !0));
                      },
                      isOptedOutCallback: function (e) {
                        (this.isOptedOut = e),
                          (this.isOptedOutCallbackCalled = !0),
                          R.registerRequest(),
                          j.isIabContext() && x.checkQueryStringObject();
                      },
                      getLoadTimeout: function () {
                        var e = this.instance;
                        if (e) {
                          if ('function' == typeof e.getLoadTimeout) return e.getLoadTimeout();
                          if (void 0 !== e.loadTimeout) return e.loadTimeout;
                        }
                        return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE;
                      },
                    },
                    declaredId: {
                      declaredId: { init: null, request: null },
                      declaredIdCombos: {},
                      setDeclaredId: function (e, t) {
                        var n = q.isPopulatedString,
                          s = encodeURIComponent;
                        if (e === Object(e) && n(t)) {
                          var i = e.dpid,
                            r = e.dpuuid,
                            o = null;
                          if (n(i) && n(r))
                            return (
                              (o = s(i) + '$' + s(r)),
                              !0 === this.declaredIdCombos[o]
                                ? "setDeclaredId: combo exists for type '" + t + "'"
                                : ((this.declaredIdCombos[o] = !0),
                                  (this.declaredId[t] = { dpid: i, dpuuid: r }),
                                  "setDeclaredId: succeeded for type '" + t + "'")
                            );
                        }
                        return "setDeclaredId: failed for type '" + t + "'";
                      },
                      getDeclaredIdQueryString: function () {
                        var e = this.declaredId.request,
                          t = this.declaredId.init,
                          n = encodeURIComponent,
                          s = '';
                        return (
                          null !== e
                            ? (s = '&d_dpid=' + n(e.dpid) + '&d_dpuuid=' + n(e.dpuuid))
                            : null !== t &&
                              (s = '&d_dpid=' + n(t.dpid) + '&d_dpuuid=' + n(t.dpuuid)),
                          s
                        );
                      },
                    },
                    registerRequest: function (e) {
                      var t,
                        n = this.firingQueue;
                      e === Object(e) && (n.push(e), e.isDefaultRequest || (l = !0)),
                        this.firing ||
                          !n.length ||
                          (i && !DIL.windowLoaded) ||
                          (this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(),
                          this.adms.calledBack &&
                            !this.adms.isOptedOut &&
                            this.adms.isOptedOutCallbackCalled &&
                            (j.isApproved() || x.hasGoSignal()) &&
                            ((this.adms.isOptedOutCallbackCalled = !1),
                            ((t = n.shift()).src = t.src.replace(
                              /&d_nsid=/,
                              '&' + this.adms.getMIDQueryString() + x.getQueryString() + 'd_nsid='
                            )),
                            q.isPopulatedString(t.corsPostData) &&
                              (t.corsPostData = t.corsPostData.replace(
                                /^d_nsid=/,
                                this.adms.getMIDQueryString() + x.getQueryString() + 'd_nsid='
                              )),
                            L.fireRequest(t),
                            this.firstRequestHasFired ||
                              ('script' !== t.tag && 'cors' !== t.tag) ||
                              (this.firstRequestHasFired = !0)));
                    },
                    processVisitorAPI: function () {
                      this.adms.process(p || window.Visitor);
                    },
                    getCoopQueryString: function () {
                      var e = '';
                      return (
                        !0 === d ? (e = '&d_coop_safe=1') : !1 === d && (e = '&d_coop_unsafe=1'), e
                      );
                    },
                  };
                b.requestController = R;
                var _,
                  w,
                  E = {
                    sendingMessages: !1,
                    messages: [],
                    messagesPosted: [],
                    messagesReceived: [],
                    jsonForComparison: [],
                    jsonDuplicates: [],
                    jsonWaiting: [],
                    jsonProcessed: [],
                    requestToProcess: function (e, t) {
                      var n,
                        s = this;
                      function i () {
                        s.jsonForComparison.push(e), s.jsonWaiting.push([e, t]);
                      }
                      if (e && !q.isEmptyObject(e))
                        if (((n = JSON.stringify(e.dests || [])), this.jsonForComparison.length)) {
                          var r,
                            o,
                            a,
                            d = !1;
                          for (r = 0, o = this.jsonForComparison.length; r < o; r++)
                            if (
                              ((a = this.jsonForComparison[r]),
                              n === JSON.stringify(a.dests || []))
                            ) {
                              d = !0;
                              break;
                            }
                          d ? this.jsonDuplicates.push(e) : i();
                        } else i();
                      if (this.jsonWaiting.length) {
                        var u = this.jsonWaiting.shift();
                        this.process(u[0], u[1]), this.requestToProcess();
                      }
                      this.messages.length && !this.sendingMessages && this.sendMessages();
                    },
                    process: function (e) {
                      var t,
                        n,
                        s,
                        i,
                        r,
                        o = encodeURIComponent;
                      if ((t = e.dests) && t instanceof Array && (n = t.length))
                        for (s = 0; s < n; s++)
                          (i = t[s]),
                            (r = [o('dests'), o(i.id || ''), o(i.y || ''), o(i.c || '')]),
                            this.addMessage(r.join('|'));
                      this.jsonProcessed.push(e);
                    },
                    addMessage: function (e) {
                      this.messages.push(e);
                    },
                    sendMessages: function () {
                      this.sendingMessages ||
                        ((this.sendingMessages = !0),
                        this.messages.length &&
                          (this.publishDestinations(this.messages), (this.messages = [])),
                        (this.sendingMessages = !1));
                    },
                    publishDestinations: function (e) {
                      var t = R.adms.instance;
                      t &&
                        'function' == typeof t.publishDestinations &&
                        t.publishDestinations(I, e, function (e) {
                          y.push(
                            'visitor.publishDestinations() result: ' + (e.error || e.message)
                          );
                        }),
                        Array.prototype.push.apply(this.messagesPosted, e);
                    },
                  },
                  P = {
                    traits: function (e) {
                      return (
                        q.isValidPdata(e) &&
                          (D.sids instanceof Array || (D.sids = []), A.extendArray(D.sids, e)),
                        this
                      );
                    },
                    pixels: function (e) {
                      return (
                        q.isValidPdata(e) &&
                          (D.pdata instanceof Array || (D.pdata = []), A.extendArray(D.pdata, e)),
                        this
                      );
                    },
                    logs: function (e) {
                      return (
                        q.isValidLogdata(e) &&
                          (D.logdata !== Object(D.logdata) && (D.logdata = {}),
                          A.extendObject(D.logdata, e)),
                        this
                      );
                    },
                    customQueryParams: function (e) {
                      return q.isEmptyObject(e) || A.extendObject(D, e, R.reservedKeys), this;
                    },
                    signals: function (e, t) {
                      var n,
                        s = e;
                      if (!q.isEmptyObject(s)) {
                        if (t && 'string' == typeof t)
                          for (n in ((s = {}), e)) e.hasOwnProperty(n) && (s[t + n] = e[n]);
                        A.extendObject(D, s, R.reservedKeys);
                      }
                      return this;
                    },
                    declaredId: function (e) {
                      return R.declaredId.setDeclaredId(e, 'request'), this;
                    },
                    result: function (e) {
                      return 'function' == typeof e && (D.callback = e), this;
                    },
                    afterResult: function (e) {
                      return 'function' == typeof e && (D.postCallbackFn = e), this;
                    },
                    useImageRequest: function () {
                      return (D.useImageRequest = !0), this;
                    },
                    clearData: function () {
                      return (D = {}), this;
                    },
                    submit: function (e) {
                      return (D.isDefaultRequest = !!e), L.submitRequest(D), (D = {}), this;
                    },
                    getPartner: function () {
                      return I;
                    },
                    getContainerNSID: function () {
                      return r;
                    },
                    getEventLog: function () {
                      return y;
                    },
                    getState: function () {
                      var e = {},
                        t = {};
                      return (
                        A.extendObject(e, R, { registerRequest: !0 }),
                        A.extendObject(t, E, {
                          requestToProcess: !0,
                          process: !0,
                          sendMessages: !0,
                        }),
                        {
                          initConfig: n,
                          pendingRequest: D,
                          otherRequestInfo: e,
                          destinationPublishingInfo: t,
                          log: y,
                        }
                      );
                    },
                    idSync: function () {
                      throw new Error(
                        'Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance'
                      );
                    },
                    aamIdSync: function () {
                      throw new Error(
                        'Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance'
                      );
                    },
                    passData: function (e) {
                      return q.isEmptyObject(e)
                        ? 'Error: json is empty or not an object'
                        : (L.defaultCallback(e), e);
                    },
                    getPlatformParams: function () {
                      return R.platformParams;
                    },
                    getEventCallConfigParams: function () {
                      var e,
                        t = R,
                        n = t.modStatsParams,
                        s = t.platformParams;
                      if (!n) {
                        for (e in ((n = {}), s))
                          s.hasOwnProperty(e) &&
                            !t.nonModStatsParams[e] &&
                            (n[e.replace(/^d_/, '')] = s[e]);
                        !0 === d ? (n.coop_safe = 1) : !1 === d && (n.coop_unsafe = 1),
                          (t.modStatsParams = n);
                      }
                      return n;
                    },
                    setAsCoopSafe: function () {
                      return (d = !0), this;
                    },
                    setAsCoopUnsafe: function () {
                      return (d = !1), this;
                    },
                    getEventCallIabSignals: function (e) {
                      var t;
                      return e !== Object(e)
                        ? 'Error: config is not an object'
                        : 'function' != typeof e.callback
                        ? 'Error: config.callback is not a function'
                        : ((t = parseInt(e.timeout, 10)),
                          isNaN(t) && (t = null),
                          void x.getQueryStringObject(e.callback, t));
                    },
                  },
                  L = {
                    corsMetadata:
                      ((_ = 'none'),
                      'undefined' != typeof XMLHttpRequest &&
                        XMLHttpRequest === Object(XMLHttpRequest) &&
                        'withCredentials' in new XMLHttpRequest() &&
                        (_ = 'XMLHttpRequest'),
                      { corsType: _ }),
                    getCORSInstance: function () {
                      return 'none' === this.corsMetadata.corsType
                        ? null
                        : new window[this.corsMetadata.corsType]();
                    },
                    submitRequest: function (e) {
                      return R.registerRequest(L.createQueuedRequest(e)), !0;
                    },
                    createQueuedRequest: function (e) {
                      var t,
                        n,
                        s,
                        i,
                        r,
                        o = e.callback,
                        a = 'img',
                        d = e.isDefaultRequest;
                      if ((delete e.isDefaultRequest, !q.isEmptyObject(u)))
                        for (s in u)
                          if (u.hasOwnProperty(s)) {
                            if (null == (i = u[s]) || '' === i) continue;
                            if (s in e && !(i in e) && !(i in R.reservedKeys)) {
                              if (null == (r = e[s]) || '' === r) continue;
                              e[i] = r;
                            }
                          }
                      return (
                        q.isValidPdata(e.sids) || (e.sids = []),
                        q.isValidPdata(e.pdata) || (e.pdata = []),
                        q.isValidLogdata(e.logdata) || (e.logdata = {}),
                        (e.logdataArray = A.convertObjectToKeyValuePairs(e.logdata, '=', !0)),
                        e.logdataArray.push('_ts=' + new Date().getTime()),
                        'function' != typeof o && (o = this.defaultCallback),
                        (t = this.makeRequestSrcData(e)),
                        (n = this.getCORSInstance()) && !0 !== e.useImageRequest && (a = 'cors'),
                        {
                          tag: a,
                          src: t.src,
                          corsSrc: t.corsSrc,
                          callbackFn: o,
                          postCallbackFn: e.postCallbackFn,
                          useImageRequest: !!e.useImageRequest,
                          requestData: e,
                          corsInstance: n,
                          corsPostData: t.corsPostData,
                          isDefaultRequest: d,
                        }
                      );
                    },
                    defaultCallback: function (e, t) {
                      var n, s, i, r, o, a, d, u, c;
                      if ((n = e.stuff) && n instanceof Array && (s = n.length))
                        for (i = 0; i < s; i++)
                          (r = n[i]) &&
                            r === Object(r) &&
                            ((o = r.cn),
                            (a = r.cv),
                            (void 0 !== (d = r.ttl) && '' !== d) ||
                              (d = Math.floor(A.getMaxCookieExpiresInMinutes() / 60 / 24)),
                            (u = r.dmn || '.' + document.domain.replace(/^www\./, '')),
                            (c = r.type),
                            o &&
                              (a || 'number' == typeof a) &&
                              ('var' !== c &&
                                (d = parseInt(d, 10)) &&
                                !isNaN(d) &&
                                A.setCookie(o, a, 24 * d * 60, '/', u, !1),
                              (S.stuffed[o] = a)));
                      var l,
                        f,
                        p = e.uuid;
                      q.isPopulatedString(p) &&
                        (q.isEmptyObject(h) ||
                          (('string' == typeof (l = h.path) && l.length) || (l = '/'),
                          (f = parseInt(h.days, 10)),
                          isNaN(f) && (f = 100),
                          A.setCookie(
                            h.name || 'aam_did',
                            p,
                            24 * f * 60,
                            l,
                            h.domain || '.' + document.domain.replace(/^www\./, ''),
                            !0 === h.secure
                          ))),
                        R.abortRequests || E.requestToProcess(e, t);
                    },
                    makeRequestSrcData: function (r) {
                      (r.sids = q.removeEmptyArrayValues(r.sids || [])),
                        (r.pdata = q.removeEmptyArrayValues(r.pdata || []));
                      var o = R,
                        e = o.platformParams,
                        t = A.encodeAndBuildRequest(r.sids, ','),
                        n = A.encodeAndBuildRequest(r.pdata, ','),
                        s = (r.logdataArray || []).join('&');
                      delete r.logdataArray;
                      var i,
                        a,
                        d = encodeURIComponent,
                        u = C.IS_HTTPS ? 'https://' : 'http://',
                        c = o.declaredId.getDeclaredIdQueryString(),
                        l = o.adms.instance
                          ? o.adms.getCustomerIDsQueryString(o.adms.getCustomerIDs())
                          : '',
                        f = (function () {
                          var e,
                            t,
                            n,
                            s,
                            i = [];
                          for (e in r)
                            if (!(e in o.reservedKeys) && r.hasOwnProperty(e))
                              if (((t = r[e]), (e = d(e)), t instanceof Array))
                                for (n = 0, s = t.length; n < s; n++) i.push(e + '=' + d(t[n]));
                              else i.push(e + '=' + d(t));
                          return i.length ? '&' + i.join('&') : '';
                        })(),
                        p = 'd_dil_ver=' + d(DIL.version),
                        h =
                          'd_nsid=' +
                          e.d_nsid +
                          o.getCoopQueryString() +
                          c +
                          l +
                          (t.length ? '&d_sid=' + t : '') +
                          (n.length ? '&d_px=' + n : '') +
                          (s.length ? '&d_ld=' + d(s) : ''),
                        g = '&d_rtbd=' + e.d_rtbd + '&d_jsonv=' + e.d_jsonv + '&d_dst=' + e.d_dst,
                        m = '&h_referer=' + d(location.href);
                      return (
                        (a = (i = u + I + '.demdex.net/event') + '?' + p + '&' + h + g + f + m),
                        {
                          corsSrc: i + '?' + p + '&_ts=' + new Date().getTime(),
                          src: a,
                          corsPostData: h + g + f + m,
                          isDeclaredIdCall: '' !== c,
                        }
                      );
                    },
                    fireRequest: function (e) {
                      if ('img' === e.tag) this.fireImage(e);
                      else {
                        var t = R.declaredId,
                          n = t.declaredId.request || t.declaredId.init || {},
                          s = { dpid: n.dpid || '', dpuuid: n.dpuuid || '' };
                        this.fireCORS(e, s);
                      }
                    },
                    fireImage: function (t) {
                      var e,
                        n,
                        s = R;
                      s.abortRequests ||
                        ((s.firing = !0),
                        (e = new Image(0, 0)),
                        s.sent.push(t),
                        (e.onload = function () {
                          (s.firing = !1),
                            s.fired.push(t),
                            s.num_of_img_responses++,
                            s.registerRequest();
                        }),
                        (n = function (e) {
                          (c = 'imgAbortOrErrorHandler received the event of type ' + e.type),
                            y.push(c),
                            (s.abortRequests = !0),
                            (s.firing = !1),
                            s.errored.push(t),
                            s.num_of_img_errors++,
                            s.registerRequest();
                        }),
                        e.addEventListener('error', n),
                        e.addEventListener('abort', n),
                        (e.src = t.src));
                    },
                    fireCORS: function (s, i) {
                      var r = this,
                        o = R,
                        e = this.corsMetadata.corsType,
                        t = s.corsSrc,
                        n = s.corsInstance,
                        a = s.corsPostData,
                        d = s.postCallbackFn,
                        u = 'function' == typeof d;
                      if (!o.abortRequests && !g) {
                        o.firing = !0;
                        try {
                          n.open('post', t, !0),
                            'XMLHttpRequest' === e &&
                              ((n.withCredentials = !0),
                              n.setRequestHeader(
                                'Content-Type',
                                'application/x-www-form-urlencoded'
                              ),
                              (n.onreadystatechange = function () {
                                4 === this.readyState &&
                                  200 === this.status &&
                                  (function (e) {
                                    var t;
                                    try {
                                      if ((t = JSON.parse(e)) !== Object(t))
                                        return r.handleCORSError(s, i, 'Response is not JSON');
                                    } catch (e) {
                                      return r.handleCORSError(
                                        s,
                                        i,
                                        'Error parsing response as JSON'
                                      );
                                    }
                                    try {
                                      var n = s.callbackFn;
                                      (o.firing = !1),
                                        o.fired.push(s),
                                        o.num_of_cors_responses++,
                                        n(t, i),
                                        u && d(t, i);
                                    } catch (e) {
                                      (e.message =
                                        'DIL handleCORSResponse caught error with message ' +
                                        e.message),
                                        (c = e.message),
                                        y.push(c),
                                        (e.filename = e.filename || 'dil.js'),
                                        (e.partner = I),
                                        DIL.errorModule.handleError(e);
                                      try {
                                        n({ error: e.name + '|' + e.message }, i),
                                          u && d({ error: e.name + '|' + e.message }, i);
                                      } catch (e) {}
                                    } finally {
                                      o.registerRequest();
                                    }
                                  })(this.responseText);
                              })),
                            (n.onerror = function () {
                              r.handleCORSError(s, i, 'onerror');
                            }),
                            (n.ontimeout = function () {
                              r.handleCORSError(s, i, 'ontimeout');
                            }),
                            n.send(a);
                        } catch (e) {
                          this.handleCORSError(s, i, 'try-catch');
                        }
                        o.sent.push(s), (o.declaredId.declaredId.request = null);
                      }
                    },
                    handleCORSError: function (e, t, n) {
                      R.num_of_cors_errors++, R.corsErrorSources.push(n);
                    },
                    handleRequestError: function (e, t) {
                      var n = R;
                      y.push(e),
                        (n.abortRequests = !0),
                        (n.firing = !1),
                        n.errored.push(t),
                        n.registerRequest();
                    },
                  },
                  q = {
                    isValidPdata: function (e) {
                      return !!(e instanceof Array && this.removeEmptyArrayValues(e).length);
                    },
                    isValidLogdata: function (e) {
                      return !this.isEmptyObject(e);
                    },
                    isEmptyObject: function (e) {
                      if (e !== Object(e)) return !0;
                      var t;
                      for (t in e) if (e.hasOwnProperty(t)) return !1;
                      return !0;
                    },
                    removeEmptyArrayValues: function (e) {
                      var t,
                        n = 0,
                        s = e.length,
                        i = [];
                      for (n = 0; n < s; n++) null != (t = e[n]) && '' !== t && i.push(t);
                      return i;
                    },
                    isPopulatedString: function (e) {
                      return 'string' == typeof e && e.length;
                    },
                  },
                  A = {
                    convertObjectToKeyValuePairs: function (e, t, n) {
                      var s,
                        i,
                        r = [];
                      for (s in (t || (t = '='), e))
                        e.hasOwnProperty(s) &&
                          null != (i = e[s]) &&
                          '' !== i &&
                          r.push(s + t + (n ? encodeURIComponent(i) : i));
                      return r;
                    },
                    encodeAndBuildRequest: function (e, t) {
                      return e
                        .map(function (e) {
                          return encodeURIComponent(e);
                        })
                        .join(t);
                    },
                    getCookie: function (e) {
                      var t,
                        n,
                        s,
                        i = e + '=',
                        r = document.cookie.split(';');
                      for (t = 0, n = r.length; t < n; t++) {
                        for (s = r[t]; ' ' === s.charAt(0); ) s = s.substring(1, s.length);
                        if (0 === s.indexOf(i))
                          return decodeURIComponent(s.substring(i.length, s.length));
                      }
                      return null;
                    },
                    setCookie: function (e, t, n, s, i, r) {
                      var o = new Date();
                      n && (n = 1000 * n * 60),
                        (document.cookie =
                          e +
                          '=' +
                          encodeURIComponent(t) +
                          (n ? ';expires=' + new Date(o.getTime() + n).toUTCString() : '') +
                          (s ? ';path=' + s : '') +
                          (i ? ';domain=' + i : '') +
                          (r ? ';secure' : ''));
                    },
                    extendArray: function (e, t) {
                      return (
                        e instanceof Array &&
                        t instanceof Array &&
                        (Array.prototype.push.apply(e, t), !0)
                      );
                    },
                    extendObject: function (e, t, n) {
                      var s;
                      if (e !== Object(e) || t !== Object(t)) return !1;
                      for (s in t)
                        if (t.hasOwnProperty(s)) {
                          if (!q.isEmptyObject(n) && s in n) continue;
                          e[s] = t[s];
                        }
                      return !0;
                    },
                    getMaxCookieExpiresInMinutes: function () {
                      return C.SIX_MONTHS_IN_MINUTES;
                    },
                    replaceMethodsWithFunction: function (e, t) {
                      var n;
                      if (e === Object(e) && 'function' == typeof t)
                        for (n in e)
                          e.hasOwnProperty(n) && 'function' == typeof e[n] && (e[n] = t);
                    },
                  },
                  j =
                    ((w = b.requestController),
                    {
                      exists: null,
                      instance: null,
                      aamIsApproved: null,
                      init: function () {
                        var e = this;
                        this.checkIfExists()
                          ? ((this.exists = !0),
                            (this.instance = window.adobe.optIn),
                            this.instance.fetchPermissions(function () {
                              e.callback();
                            }, !0))
                          : (this.exists = !1);
                      },
                      checkIfExists: function () {
                        return (
                          window.adobe === Object(window.adobe) &&
                          window.adobe.optIn === Object(window.adobe.optIn)
                        );
                      },
                      callback: function () {
                        (this.aamIsApproved = this.instance.isApproved([
                          this.instance.Categories.AAM,
                        ])),
                          w.adms.waitForMidToReleaseRequests(),
                          w.adms.getIsOptedOut();
                      },
                      isApproved: function () {
                        return (
                          !this.isIabContext() &&
                          !w.adms.isOptedOut &&
                          (!this.exists || this.aamIsApproved)
                        );
                      },
                      isIabContext: function () {
                        return this.instance && this.instance.isIabContext;
                      },
                    });
                b.optIn = j;
                var T,
                  M,
                  k,
                  V,
                  x =
                    ((M = (T = b).requestController),
                    (k = T.optIn),
                    (V = {
                      isVendorConsented: null,
                      doesGdprApply: null,
                      consentString: null,
                      queryStringObjectCallbacks: [],
                      init: function () {
                        this.fetchConsentData();
                      },
                      hasGoSignal: function () {
                        return !(
                          !(
                            k.isIabContext() &&
                            this.isVendorConsented &&
                            this.doesGdprApply &&
                            'string' == typeof this.consentString &&
                            this.consentString.length
                          ) || M.adms.isOptedOut
                        );
                      },
                      fetchConsentData: function (n, e) {
                        var s = this,
                          t = {};
                        'function' != typeof n && (n = function () {}),
                          k.instance && k.isIabContext()
                            ? (e && (t.timeout = e),
                              k.instance.execute({
                                command: 'iabPlugin.fetchConsentData',
                                params: t,
                                callback: function (e, t) {
                                  t === Object(t)
                                    ? ((s.doesGdprApply = !!t.gdprApplies),
                                      (s.consentString = t.consentString || ''))
                                    : ((s.doesGdprApply = !1), (s.consentString = '')),
                                    (s.isVendorConsented = k.instance.isApproved(
                                      k.instance.Categories.AAM
                                    )),
                                    e ? n({}) : s.checkQueryStringObject(n),
                                    M.adms.waitForMidToReleaseRequests();
                                },
                              }))
                            : n({});
                      },
                      getQueryString: function () {
                        return k.isIabContext()
                          ? 'gdpr=' +
                              (this.doesGdprApply ? 1 : 0) +
                              '&gdpr_consent=' +
                              this.consentString +
                              '&'
                          : '';
                      },
                      getQueryStringObject: function (e, t) {
                        this.fetchConsentData(e, t);
                      },
                      checkQueryStringObject: function (e) {
                        V.hasGoSignal() &&
                          'function' == typeof e &&
                          e({
                            gdpr: this.doesGdprApply ? 1 : 0,
                            gdpr_consent: this.consentString,
                          });
                      },
                    }));
                (b.iab = x),
                  'error' === I &&
                    0 === r &&
                    window.addEventListener('load', function () {
                      DIL.windowLoaded = !0;
                    });
                var N = !1,
                  Q = function () {
                    N || ((N = !0), R.registerRequest(), F());
                  },
                  F = function () {
                    setTimeout(function () {
                      l ||
                        R.firstRequestHasFired ||
                        ('function' == typeof f ? P.afterResult(f).submit(!0) : P.submit(!0));
                    }, DIL.constants.TIME_TO_DEFAULT_REQUEST);
                  },
                  H = document;
                'error' !== I &&
                  (DIL.windowLoaded
                    ? Q()
                    : 'complete' !== H.readyState && 'loaded' !== H.readyState
                    ? window.addEventListener('load', function () {
                        (DIL.windowLoaded = !0), Q();
                      })
                    : ((DIL.windowLoaded = !0), Q())),
                  R.declaredId.setDeclaredId(s, 'init'),
                  j.init(),
                  x.init(),
                  R.processVisitorAPI();
                C.IS_IE_LESS_THAN_10 &&
                  A.replaceMethodsWithFunction(P, function () {
                    return this;
                  }),
                  (this.api = P),
                  (this.getStuffedVariable = function (e) {
                    var t = S.stuffed[e];
                    return (
                      t ||
                        'number' == typeof t ||
                        (t = A.getCookie(e)) ||
                        'number' == typeof t ||
                        (t = ''),
                      t
                    );
                  }),
                  (this.validators = q),
                  (this.helpers = A),
                  (this.constants = C),
                  (this.log = y),
                  (this.pendingRequest = D),
                  (this.requestController = R),
                  (this.destinationPublishing = E),
                  (this.requestProcs = L),
                  (this.units = b),
                  O && ((this.variables = S), (this.callWindowLoadFunctions = Q));
              }.apply(this, arguments);
            } finally {
              if ($___old_be22d7463bbf65b5)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_be22d7463bbf65b5
                ));
              if ($___old_f40c885476067520)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_f40c885476067520
                ));
            }
          }),
          (DIL.extendStaticPropertiesAndMethods = function (e) {
            var t;
            if (e === Object(e)) for (t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
          }),
          DIL.extendStaticPropertiesAndMethods({
            version: '9.0',
            jsonVersion: 1,
            constants: { TIME_TO_DEFAULT_REQUEST: 500 },
            variables: { scriptNodeList: document.getElementsByTagName('script') },
            windowLoaded: !1,
            dils: {},
            isAddedPostWindowLoad: function () {
              var e = arguments[0];
              this.windowLoaded = 'function' == typeof e ? !!e() : 'boolean' != typeof e || e;
            },
            create: function (e) {
              try {
                return new DIL(e);
              } catch (e) {
                throw new Error(
                  'Error in attempt to create DIL instance with DIL.create(): ' + e.message
                );
              }
            },
            registerDil: function (e, t, n) {
              var s = t + '$' + n;
              s in this.dils || (this.dils[s] = e);
            },
            getDil: function (e, t) {
              var n;
              return (
                'string' != typeof e && (e = ''),
                t || (t = 0),
                (n = e + '$' + t) in this.dils
                  ? this.dils[n]
                  : new Error(
                      'The DIL instance with partner = ' +
                        e +
                        ' and containerNSID = ' +
                        t +
                        ' was not found'
                    )
              );
            },
            dexGetQSVars: function (e, t, n) {
              var s = this.getDil(t, n);
              return s instanceof this ? s.getStuffedVariable(e) : '';
            },
          }),
          (DIL.errorModule =
            ((r = DIL.create({
              partner: 'error',
              containerNSID: 0,
              ignoreHardDependencyOnVisitorAPI: !0,
            })),
            (a = !(o = {
              harvestererror: 14138,
              destpuberror: 14139,
              dpmerror: 14140,
              generalerror: 14137,
              error: 14137,
              noerrortypedefined: 15021,
              evalerror: 15016,
              rangeerror: 15017,
              referenceerror: 15018,
              typeerror: 15019,
              urierror: 15020,
            })),
            {
              activate: function () {
                a = !0;
              },
              handleError: function (e) {
                if (!a) return 'DIL error module has not been activated';
                e !== Object(e) && (e = {});
                var t = e.name ? (e.name + '').toLowerCase() : '',
                  n = t in o ? o[t] : o.noerrortypedefined,
                  s = [],
                  i = {
                    name: t,
                    filename: e.filename ? e.filename + '' : '',
                    partner: e.partner ? e.partner + '' : 'no_partner',
                    site: e.site ? e.site + '' : document.location.href,
                    message: e.message ? e.message + '' : '',
                  };
                return (
                  s.push(n),
                  r.api.pixels(s).logs(i).useImageRequest().submit(),
                  'DIL error report sent'
                );
              },
              pixelMap: o,
            })),
          (DIL.tools = {}),
          (DIL.modules = { helpers: {} }));
      })();
      function AppMeasurement (r) {
        const $___old_c74ea3df9e9c33c5 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_c74ea3df9e9c33c5)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_93ef30bcc5fe9986.userAgent
            ));
          return function () {
            var a = this;
            a.version = '2.11.0';
            var k = window;
            k.s_c_in || ((k.s_c_il = []), (k.s_c_in = 0));
            a._il = k.s_c_il;
            a._in = k.s_c_in;
            a._il[a._in] = a;
            k.s_c_in++;
            a._c = 's_c';
            var q = k.AppMeasurement.ac;
            q || (q = null);
            var p = k,
              m,
              s;
            try {
              for (
                m = p.parent, s = p.location;
                m &&
                m.location &&
                s &&
                '' + m.location != '' + s &&
                p.location &&
                '' + m.location != '' + p.location &&
                m.location.host == s.host;

              )
                (p = m), (m = p.parent);
            } catch (u) {}
            a.D = function (a) {
              try {
                console.log(a);
              } catch (b) {}
            };
            a.Pa = function (a) {
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
                    (c = a.replace(c, d, '%' + d.charCodeAt(0).toString(16).toUpperCase()));
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
            a.Ib = function () {
              var c = k.location.hostname,
                b = a.fpCookieDomainPeriods,
                d;
              b || (b = a.cookieDomainPeriods);
              if (
                c &&
                !a.Ha &&
                !/^[0-9.]+$/.test(c) &&
                ((b = b ? parseInt(b) : 2), (b = 2 < b ? b : 2), (d = c.lastIndexOf('.')), 0 <= d)
              ) {
                for (; 0 <= d && 1 < b; ) (d = c.lastIndexOf('.', d - 1)), b--;
                a.Ha = 0 < d ? c.substring(d) : c;
              }
              return a.Ha;
            };
            a.c_r = a.cookieRead = function (c) {
              c = a.escape(c);
              var b = ' ' + a.d.cookie,
                d = b.indexOf(' ' + c + '='),
                f = 0 > d ? d : b.indexOf(';', d);
              c = 0 > d ? '' : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
              return '[[B]]' != c ? c : '';
            };
            a.c_w = a.cookieWrite = function (c, b, d) {
              var f = a.Ib(),
                e = a.cookieLifetime,
                g;
              b = '' + b;
              e = e ? ('' + e).toUpperCase() : '';
              d &&
                'SESSION' != e &&
                'NONE' != e &&
                ((g = '' != b ? parseInt(e ? e : 0) : -60)
                  ? ((d = new Date()), d.setTime(d.getTime() + 1000 * g))
                  : 1 === d &&
                    ((d = new Date()),
                    (g = d.getYear()),
                    d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
              return c && 'NONE' != e
                ? ((a.d.cookie =
                    a.escape(c) +
                    '=' +
                    a.escape('' != b ? b : '[[B]]') +
                    '; path=/;' +
                    (d && 'SESSION' != e ? ' expires=' + d.toUTCString() + ';' : '') +
                    (f ? ' domain=' + f + ';' : '')),
                  a.cookieRead(c) == b)
                : 0;
            };
            a.Fb = function () {
              var c = a.Util.getIeVersion();
              'number' === typeof c &&
                10 > c &&
                ((a.unsupportedBrowser = !0), a.tb(a, function () {}));
            };
            a.tb = function (a, b) {
              for (var d in a) a.hasOwnProperty(d) && 'function' === typeof a[d] && (a[d] = b);
            };
            a.M = [];
            a.fa = function (c, b, d) {
              if (a.Ia) return 0;
              a.maxDelay || (a.maxDelay = 250);
              var f = 0,
                e = new Date().getTime() + a.maxDelay,
                g = a.d.visibilityState,
                h = ['webkitvisibilitychange', 'visibilitychange'];
              g || (g = a.d.webkitVisibilityState);
              if (g && 'prerender' == g) {
                if (!a.ga)
                  for (a.ga = 1, d = 0; d < h.length; d++)
                    a.d.addEventListener(h[d], function () {
                      var c = a.d.visibilityState;
                      c || (c = a.d.webkitVisibilityState);
                      'visible' == c && ((a.ga = 0), a.delayReady());
                    });
                f = 1;
                e = 0;
              } else d || (a.o('_d') && (f = 1));
              f && (a.M.push({ m: c, a: b, t: e }), a.ga || setTimeout(a.delayReady, a.maxDelay));
              return f;
            };
            a.delayReady = function () {
              var c = new Date().getTime(),
                b = 0,
                d;
              for (a.o('_d') ? (b = 1) : a.za(); 0 < a.M.length; ) {
                d = a.M.shift();
                if (b && !d.t && d.t > c) {
                  a.M.unshift(d);
                  setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                  break;
                }
                a.Ia = 1;
                a[d.m].apply(a, d.a);
                a.Ia = 0;
              }
            };
            a.setAccount = a.sa = function (c) {
              var b, d;
              if (!a.fa('setAccount', arguments))
                if (((a.account = c), a.allAccounts))
                  for (
                    b = a.allAccounts.concat(c.split(',')), a.allAccounts = [], b.sort(), d = 0;
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
                h = '';
              e = f = '';
              if (a.lightProfileID)
                (d = a.Q), (h = a.lightTrackVars) && (h = ',' + h + ',' + a.ka.join(',') + ',');
              else {
                d = a.g;
                if (a.pe || a.linkType)
                  (h = a.linkTrackVars),
                    (f = a.linkTrackEvents),
                    a.pe &&
                      ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                      a[e] && ((h = a[e].Zb), (f = a[e].Yb)));
                h && (h = ',' + h + ',' + a.G.join(',') + ',');
                f && h && (h += ',events,');
              }
              b && (b = ',' + b + ',');
              for (f = 0; f < d.length; f++)
                (e = d[f]),
                  (g = a[e]) &&
                    (!h || 0 <= h.indexOf(',' + e + ',')) &&
                    (!b || 0 <= b.indexOf(',' + e + ',')) &&
                    c(e, g);
            };
            a.q = function (c, b, d, f, e) {
              var g = '',
                h,
                l,
                k,
                n,
                m = 0;
              'contextData' == c && (c = 'c');
              if (b) {
                for (h in b)
                  if (
                    !(Object.prototype[h] || (e && h.substring(0, e.length) != e)) &&
                    b[h] &&
                    (!d || 0 <= d.indexOf(',' + (f ? f + '.' : '') + h + ','))
                  ) {
                    k = !1;
                    if (m)
                      for (l = 0; l < m.length; l++)
                        h.substring(0, m[l].length) == m[l] && (k = !0);
                    if (
                      !k &&
                      ('' == g && (g += '&' + c + '.'),
                      (l = b[h]),
                      e && (h = h.substring(e.length)),
                      0 < h.length)
                    )
                      if (((k = h.indexOf('.')), 0 < k))
                        (l = h.substring(0, k)),
                          (k = (e ? e : '') + l + '.'),
                          m || (m = []),
                          m.push(k),
                          (g += a.q(l, b, d, f, k));
                      else if (('boolean' == typeof l && (l = l ? 'true' : 'false'), l)) {
                        if ('retrieveLightData' == f && 0 > e.indexOf('.contextData.'))
                          switch (((k = h.substring(0, 4)), (n = h.substring(4)), h)) {
                            case 'transactionID':
                              h = 'xact';
                              break;
                            case 'channel':
                              h = 'ch';
                              break;
                            case 'campaign':
                              h = 'v0';
                              break;
                            default:
                              a.Pa(n) &&
                                ('prop' == k
                                  ? (h = 'c' + n)
                                  : 'eVar' == k
                                  ? (h = 'v' + n)
                                  : 'list' == k
                                  ? (h = 'l' + n)
                                  : 'hier' == k && ((h = 'h' + n), (l = l.substring(0, 255))));
                          }
                        g += '&' + a.escape(h) + '=' + a.escape(l);
                      }
                  }
                '' != g && (g += '&.' + c);
              }
              return g;
            };
            a.usePostbacks = 0;
            a.Lb = function () {
              var c = '',
                b,
                d,
                f,
                e,
                g,
                h,
                l,
                k,
                n = '',
                m = '',
                p = (e = ''),
                r = a.V();
              if (a.lightProfileID)
                (b = a.Q), (n = a.lightTrackVars) && (n = ',' + n + ',' + a.ka.join(',') + ',');
              else {
                b = a.g;
                if (a.pe || a.linkType)
                  (n = a.linkTrackVars),
                    (m = a.linkTrackEvents),
                    a.pe &&
                      ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                      a[e] && ((n = a[e].Zb), (m = a[e].Yb)));
                n && (n = ',' + n + ',' + a.G.join(',') + ',');
                m && ((m = ',' + m + ','), n && (n += ',events,'));
                a.events2 && (p += ('' != p ? ',' : '') + a.events2);
              }
              if (r && a.xa() && r.getCustomerIDs) {
                e = q;
                if ((g = r.getCustomerIDs()))
                  for (d in g)
                    Object.prototype[d] ||
                      ((f = g[d]),
                      'object' == typeof f &&
                        (e || (e = {}),
                        f.id && (e[d + '.id'] = f.id),
                        f.authState && (e[d + '.as'] = f.authState)));
                e && (c += a.q('cid', e));
              }
              a.AudienceManagement &&
                a.AudienceManagement.isReady() &&
                (c += a.q('d', a.AudienceManagement.getEventCallConfigParams()));
              for (d = 0; d < b.length; d++) {
                e = b[d];
                g = a[e];
                f = e.substring(0, 4);
                h = e.substring(4);
                g ||
                  ('events' == e && p
                    ? ((g = p), (p = ''))
                    : 'marketingCloudOrgID' == e &&
                      r &&
                      a.K('ECID') &&
                      (g = r.marketingCloudOrgID));
                if (g && (!n || 0 <= n.indexOf(',' + e + ','))) {
                  switch (e) {
                    case 'customerPerspective':
                      e = 'cp';
                      break;
                    case 'marketingCloudOrgID':
                      e = 'mcorgid';
                      break;
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
                        ((a.pageURLRest = g.substring(255)), (g = g.substring(0, 255)));
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
                      p && (g += ('' != g ? ',' : '') + p);
                      if (m)
                        for (h = g.split(','), g = '', f = 0; f < h.length; f++)
                          (l = h[f]),
                            (k = l.indexOf('=')),
                            0 <= k && (l = l.substring(0, k)),
                            (k = l.indexOf(':')),
                            0 <= k && (l = l.substring(0, k)),
                            0 <= m.indexOf(',' + l + ',') && (g += (g ? ',' : '') + h[f]);
                      break;
                    case 'events2':
                      g = '';
                      break;
                    case 'contextData':
                      c += a.q('c', a[e], n, e);
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
                      a.retrieveLightProfiles && (c += a.q('mts', a[e], n, e));
                      g = '';
                      break;
                    default:
                      a.Pa(h) &&
                        ('prop' == f
                          ? (e = 'c' + h)
                          : 'eVar' == f
                          ? (e = 'v' + h)
                          : 'list' == f
                          ? (e = 'l' + h)
                          : 'hier' == f && ((e = 'h' + h), (g = g.substring(0, 255))));
                  }
                  g && (c += '&' + e + '=' + ('pev' != e.substring(0, 3) ? a.escape(g) : g));
                }
                'pev3' == e && a.e && (c += a.e);
              }
              a.ja && ((c += '&lrt=' + a.ja), (a.ja = null));
              return c;
            };
            a.C = function (a) {
              var b = a.tagName;
              if (
                'undefined' != '' + a.ec ||
                ('undefined' != '' + a.Ub && 'HTML' != ('' + a.Ub).toUpperCase())
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
            a.La = function (a) {
              var b = k.location,
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
                  a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : ''),
                (f = b.pathname.lastIndexOf('/')),
                (d =
                  (e ? e + '//' : '') +
                  (a.host ? a.host : b.host ? b.host : '') +
                  ('/' != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + '/' : '') +
                  d));
              return d;
            };
            a.N = function (c) {
              var b = a.C(c),
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
                        a.replace(a.replace(a.replace('' + f, '\r', ''), '\n', ''), '\t', ''),
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
                  : (e = a.La(c)),
                e)
                ? { id: e.substring(0, 100), type: g }
                : 0;
            };
            a.bc = function (c) {
              for (var b = a.C(c), d = a.N(c); c && !d && 'BODY' != b; )
                if ((c = c.parentElement ? c.parentElement : c.parentNode))
                  (b = a.C(c)), (d = a.N(c));
              (d && 'BODY' != b) || (c = 0);
              c &&
                ((b = c.onclick ? '' + c.onclick : ''),
                0 <= b.indexOf('.tl(') || 0 <= b.indexOf('.trackLink(')) &&
                (c = 0);
              return c;
            };
            a.Tb = function () {
              var c,
                b,
                d = a.linkObject,
                f = a.linkType,
                e = a.linkURL,
                g,
                h;
              a.la = 1;
              d || ((a.la = 0), (d = a.clickObject));
              if (d) {
                c = a.C(d);
                for (b = a.N(d); d && !b && 'BODY' != c; )
                  if ((d = d.parentElement ? d.parentElement : d.parentNode))
                    (c = a.C(d)), (b = a.N(d));
                (b && 'BODY' != c) || (d = 0);
                if (d && !a.linkObject) {
                  var l = d.onclick ? '' + d.onclick : '';
                  if (0 <= l.indexOf('.tl(') || 0 <= l.indexOf('.trackLink(')) d = 0;
                }
              } else a.la = 1;
              !e && d && (e = a.La(d));
              e &&
                !a.linkLeaveQueryString &&
                ((g = e.indexOf('?')), 0 <= g && (e = e.substring(0, g)));
              if (!f && e) {
                var m = 0,
                  n = 0,
                  p;
                if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                  for (
                    l = e.toLowerCase(),
                      g = l.indexOf('?'),
                      h = l.indexOf('#'),
                      0 <= g ? 0 <= h && h < g && (g = h) : (g = h),
                      0 <= g && (l = l.substring(0, g)),
                      g = a.linkDownloadFileTypes.toLowerCase().split(','),
                      h = 0;
                    h < g.length;
                    h++
                  )
                    (p = g[h]) && l.substring(l.length - (p.length + 1)) == '.' + p && (f = 'd');
                if (
                  a.trackExternalLinks &&
                  !f &&
                  ((l = e.toLowerCase()),
                  a.Oa(l) &&
                    (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname),
                    (g = 0),
                    a.linkExternalFilters
                      ? ((g = a.linkExternalFilters.toLowerCase().split(',')), (m = 1))
                      : a.linkInternalFilters &&
                        (g = a.linkInternalFilters.toLowerCase().split(',')),
                    g))
                ) {
                  for (h = 0; h < g.length; h++) (p = g[h]), 0 <= l.indexOf(p) && (n = 1);
                  n ? m && (f = 'e') : m || (f = 'e');
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
                    k.s_objectID && ((b.id = k.s_objectID), (d = b.type = 1)),
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
            a.Mb = function () {
              var c = a.la,
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
              if (a.trackClickMap || a.trackInlineStats || a.Pb()) {
                var b = {},
                  d = 0,
                  e = a.ob(),
                  g = e ? e.split('&') : 0,
                  h,
                  l,
                  k,
                  e = 0;
                if (g)
                  for (h = 0; h < g.length; h++)
                    (l = g[h].split('=')),
                      (f = a.unescape(l[0]).split(',')),
                      (l = a.unescape(l[1])),
                      (b[l] = f);
                f = a.account.split(',');
                h = {};
                for (k in a.contextData)
                  k &&
                    !Object.prototype[k] &&
                    'a.activitymap.' == k.substring(0, 14) &&
                    ((h[k] = a.contextData[k]), (a.contextData[k] = ''));
                a.e = a.q('c', h) + (a.e ? a.e : '');
                if (c || a.e) {
                  c && !a.e && (e = 1);
                  for (l in b)
                    if (!Object.prototype[l])
                      for (k = 0; k < f.length; k++)
                        for (
                          e &&
                            ((g = b[l].join(',')),
                            g == a.account &&
                              ((a.e += ('&' != l.charAt(0) ? '&' : '') + l),
                              (b[l] = []),
                              (d = 1))),
                            h = 0;
                          h < b[l].length;
                          h++
                        )
                          (g = b[l][h]),
                            g == f[k] &&
                              (e &&
                                (a.e +=
                                  '&u=' +
                                  a.escape(g) +
                                  ('&' != l.charAt(0) ? '&' : '') +
                                  l +
                                  '&u=0'),
                              b[l].splice(h, 1),
                              (d = 1));
                  c || (d = 1);
                  if (d) {
                    e = '';
                    h = 2;
                    !c && a.e && ((e = a.escape(f.join(',')) + '=' + a.escape(a.e)), (h = 1));
                    for (l in b)
                      !Object.prototype[l] &&
                        0 < h &&
                        0 < b[l].length &&
                        ((e += (e ? '&' : '') + a.escape(b[l].join(',')) + '=' + a.escape(l)),
                        h--);
                    a.ub(e);
                  }
                }
              }
              return c;
            };
            a.ob = function () {
              if (a.useLinkTrackSessionStorage) {
                if (a.Ca()) return k.sessionStorage.getItem(a.R);
              } else return a.cookieRead(a.R);
            };
            a.Ca = function () {
              return k.sessionStorage ? !0 : !1;
            };
            a.ub = function (c) {
              a.useLinkTrackSessionStorage
                ? a.Ca() && k.sessionStorage.setItem(a.R, c)
                : a.cookieWrite(a.R, c);
            };
            a.Nb = function () {
              if (!a.Xb) {
                var c = new Date(),
                  b = p.location,
                  d,
                  f,
                  e = (f = d = ''),
                  g = '',
                  h = '',
                  l = '1.2',
                  k = a.cookieWrite('s_cc', 'true', 0) ? 'Y' : 'N',
                  m = '',
                  q = '';
                if (
                  c.setUTCDate &&
                  ((l = '1.3'), (0).toPrecision && ((l = '1.5'), (c = []), c.forEach))
                ) {
                  l = '1.6';
                  f = 0;
                  d = {};
                  try {
                    (f = new Iterator(d)),
                      f.next &&
                        ((l = '1.7'),
                        c.reduce &&
                          ((l = '1.8'),
                          l.trim &&
                            ((l = '1.8.1'),
                            Date.parse && ((l = '1.8.2'), Object.create && (l = '1.8.5')))));
                  } catch (r) {}
                }
                d = screen.width + 'x' + screen.height;
                e = navigator.javaEnabled() ? 'Y' : 'N';
                f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
                g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
                h = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
                try {
                  a.b.addBehavior('#default#homePage'), (m = a.b.cc(b) ? 'Y' : 'N');
                } catch (s) {}
                try {
                  a.b.addBehavior('#default#clientCaps'), (q = a.b.connectionType);
                } catch (t) {}
                a.resolution = d;
                a.colorDepth = f;
                a.javascriptVersion = l;
                a.javaEnabled = e;
                a.cookiesEnabled = k;
                a.browserWidth = g;
                a.browserHeight = h;
                a.connectionType = q;
                a.homepage = m;
                a.Xb = 1;
              }
            };
            a.S = {};
            a.loadModule = function (c, b) {
              var d = a.S[c];
              if (!d) {
                d = k['AppMeasurement_Module_' + c] ? new k['AppMeasurement_Module_' + c](a) : {};
                a.S[c] = a[c] = d;
                d.jb = function () {
                  return d.rb;
                };
                d.vb = function (b) {
                  if ((d.rb = b))
                    (a[c + '_onLoad'] = b), a.fa(c + '_onLoad', [a, d], 1) || b(a, d);
                };
                try {
                  Object.defineProperty
                    ? Object.defineProperty(d, 'onLoad', { get: d.jb, set: d.vb })
                    : (d._olc = 1);
                } catch (f) {
                  d._olc = 1;
                }
              }
              b && ((a[c + '_onLoad'] = b), a.fa(c + '_onLoad', [a, d], 1) || b(a, d));
            };
            a.o = function (c) {
              var b, d;
              for (b in a.S)
                if (
                  !Object.prototype[b] &&
                  (d = a.S[b]) &&
                  (d._olc && d.onLoad && ((d._olc = 0), d.onLoad(a, d)), d[c] && d[c]())
                )
                  return 1;
              return 0;
            };
            a.Pb = function () {
              return a.ActivityMap && a.ActivityMap._c ? !0 : !1;
            };
            a.Qb = function () {
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
            a.T = function (c, b) {
              var d, f, e, g, h, k;
              for (d = 0; 2 > d; d++)
                for (f = 0 < d ? a.Da : a.g, e = 0; e < f.length; e++)
                  if (((g = f[e]), (h = c[g]) || c['!' + g])) {
                    if (!b && ('contextData' == g || 'retrieveLightData' == g) && a[g])
                      for (k in a[g]) h[k] || (h[k] = a[g][k]);
                    a[g] = h;
                  }
            };
            a.Za = function (c, b) {
              var d, f, e, g;
              for (d = 0; 2 > d; d++)
                for (f = 0 < d ? a.Da : a.g, e = 0; e < f.length; e++)
                  (g = f[e]), (c[g] = a[g]), b || c[g] || (c['!' + g] = 1);
            };
            a.Hb = function (a) {
              var b,
                d,
                f,
                e,
                g,
                h = 0,
                k,
                m = '',
                n = '';
              if (
                a &&
                255 < a.length &&
                ((b = '' + a),
                (d = b.indexOf('?')),
                0 < d &&
                  ((k = b.substring(d + 1)),
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
                      ? (h = ',q,ie,start,search_key,word,kw,cd,')
                      : 0 <= e.indexOf('yahoo.co') && (h = ',p,ei,'),
                    h && k)))
              ) {
                if ((a = k.split('&')) && 1 < a.length) {
                  for (f = 0; f < a.length; f++)
                    (e = a[f]),
                      (d = e.indexOf('=')),
                      0 < d && 0 <= h.indexOf(',' + e.substring(0, d) + ',')
                        ? (m += (m ? '&' : '') + e)
                        : (n += (n ? '&' : '') + e);
                  m && n ? (k = m + '&' + n) : (n = '');
                }
                d = 253 - (k.length - n.length) - b.length;
                a = b + (0 < d ? g.substring(0, d) : '') + '?' + k;
              }
              return a;
            };
            a.cb = function (c) {
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
            a.ba = !1;
            a.J = !1;
            a.xb = function () {
              a.J = !0;
              a.H();
            };
            a.ca = !1;
            a.U = !1;
            a.yb = function (c) {
              a.marketingCloudVisitorID = c.MCMID;
              a.visitorOptedOut = c.MCOPTOUT;
              a.analyticsVisitorID = c.MCAID;
              a.audienceManagerLocationHint = c.MCAAMLH;
              a.audienceManagerBlob = c.MCAAMB;
              a.U = !0;
              a.H();
            };
            a.bb = function (c) {
              a.maxDelay || (a.maxDelay = 250);
              return a.o('_d')
                ? (c &&
                    setTimeout(function () {
                      c();
                    }, a.maxDelay),
                  !1)
                : !0;
            };
            a.Z = !1;
            a.I = !1;
            a.za = function () {
              a.I = !0;
              a.H();
            };
            a.isReadyToTrack = function () {
              var c = !0;
              if (!a.nb() || !a.mb()) return !1;
              a.xa() || (c = !1);
              a.qb() || (c = !1);
              return c;
            };
            a.nb = function () {
              a.ba || a.J || (a.cb(a.xb) ? (a.J = !0) : (a.ba = !0));
              return a.ba && !a.J ? !1 : !0;
            };
            a.mb = function () {
              var c = a.va();
              if (c)
                if (a.ta || a.aa)
                  if (a.ta) {
                    if (!c.isApproved(c.Categories.ANALYTICS)) return !1;
                  } else return !1;
                else return c.fetchPermissions(a.sb, !0), (a.aa = !0), !1;
              return !0;
            };
            a.K = function (c) {
              var b = a.va();
              return b && !b.isApproved(b.Categories[c]) ? !1 : !0;
            };
            a.va = function () {
              return k.adobe && k.adobe.optIn ? k.adobe.optIn : null;
            };
            a.xa = function () {
              var c = a.V();
              return c &&
                a.K('ECID') &&
                (a.ca ||
                  a.marketingCloudVisitorID ||
                  !c.getVisitorValues ||
                  ((a.ca = !0), a.marketingCloudVisitorID ? (a.U = !0) : c.getVisitorValues(a.yb)),
                a.ca && !a.U && !a.marketingCloudVisitorID)
                ? !1
                : !0;
            };
            a.V = function () {
              var c = a.visitor;
              c && !c.isAllowed() && (c = null);
              return c;
            };
            a.qb = function () {
              a.Z || a.I || (a.bb(a.za) ? (a.I = !0) : (a.Z = !0));
              return a.Z && !a.I ? !1 : !0;
            };
            a.aa = !1;
            a.sb = function () {
              a.aa = !1;
              a.ta = !0;
            };
            a.l = q;
            a.r = 0;
            a.callbackWhenReadyToTrack = function (c, b, d) {
              var f;
              f = {};
              f.Cb = c;
              f.Bb = b;
              f.zb = d;
              a.l == q && (a.l = []);
              a.l.push(f);
              0 == a.r && (a.r = setInterval(a.H, 100));
            };
            a.H = function () {
              var c;
              if (a.isReadyToTrack() && (a.wb(), a.l != q))
                for (; 0 < a.l.length; ) (c = a.l.shift()), c.Bb.apply(c.Cb, c.zb);
            };
            a.wb = function () {
              a.r && (clearInterval(a.r), (a.r = 0));
            };
            a.lb = function (c) {
              var b,
                d,
                f = q,
                e = q;
              if (!a.isReadyToTrack()) {
                b = [];
                if (c != q) for (d in ((f = {}), c)) f[d] = c[d];
                e = {};
                a.Za(e, !0);
                b.push(f);
                b.push(e);
                a.callbackWhenReadyToTrack(a, a.track, b);
                return !0;
              }
              return !1;
            };
            a.Jb = function () {
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
                  ),
                h = a.V();
              a.o('_s');
              a.lb(c) ||
                (b && a.T(b),
                c && ((d = {}), a.Za(d, 0), a.T(c)),
                a.Qb() &&
                  !a.visitorOptedOut &&
                  (a.wa() || (a.fid = a.Jb()),
                  a.Tb(),
                  a.usePlugins && a.doPlugins && a.doPlugins(a),
                  a.account &&
                    (a.abort ||
                      (a.trackOffline &&
                        !a.timestamp &&
                        (a.timestamp = Math.floor(f.getTime() / 1000)),
                      (f = k.location),
                      a.pageURL || (a.pageURL = f.href ? f.href : f),
                      a.referrer ||
                        a.$a ||
                        ((f = a.Util.getQueryParam('adobe_mc_ref', null, null, !0)),
                        (a.referrer =
                          f || void 0 === f ? (void 0 === f ? '' : f) : p.document.referrer)),
                      (a.$a = 1),
                      (a.referrer = a.Hb(a.referrer)),
                      a.o('_g')),
                    a.Mb() &&
                      !a.abort &&
                      (h &&
                        a.K('TARGET') &&
                        !a.supplementalDataID &&
                        h.getSupplementalDataID &&
                        (a.supplementalDataID = h.getSupplementalDataID(
                          'AppMeasurement:' + a._in,
                          a.expectSupplementalData ? !1 : !0
                        )),
                      a.K('AAM') || (a.contextData['cm.ssf'] = 1),
                      a.Nb(),
                      (g += a.Lb()),
                      a.pb(e, g),
                      a.o('_t'),
                      (a.referrer = '')))),
                c && a.T(d, 1));
              a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0;
            };
            a.Ba = [];
            a.registerPreTrackCallback = function (c) {
              for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
              'function' == typeof c
                ? a.Ba.push([c, b])
                : a.debugTracking &&
                  a.D('DEBUG: Non function type passed to registerPreTrackCallback');
            };
            a.gb = function (c) {
              a.ua(a.Ba, c);
            };
            a.Aa = [];
            a.registerPostTrackCallback = function (c) {
              for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]);
              'function' == typeof c
                ? a.Aa.push([c, b])
                : a.debugTracking &&
                  a.D('DEBUG: Non function type passed to registerPostTrackCallback');
            };
            a.fb = function (c) {
              a.ua(a.Aa, c);
            };
            a.ua = function (c, b) {
              if ('object' == typeof c)
                for (var d = 0; d < c.length; d++) {
                  var f = c[d][0],
                    e = c[d][1].slice();
                  e.unshift(b);
                  if ('function' == typeof f)
                    try {
                      f.apply(null, e);
                    } catch (g) {
                      a.debugTracking && a.D(g.message);
                    }
                }
            };
            a.tl = a.trackLink = function (c, b, d, f, e) {
              a.linkObject = c;
              a.linkType = b;
              a.linkName = d;
              e && ((a.k = c), (a.v = e));
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
            a.pb = function (c, b) {
              var d =
                a.hb() +
                '/' +
                c +
                '?AQB=1&ndh=1&pf=1&' +
                (a.ya() ? 'callback=s_c_il[' + a._in + '].doPostbacks&et=1&' : '') +
                b +
                '&AQE=1';
              a.gb(d);
              a.eb(d);
              a.W();
            };
            a.hb = function () {
              var c = a.ib();
              return (
                'http' +
                (a.ssl ? 's' : '') +
                '://' +
                c +
                '/b/ss/' +
                a.account +
                '/' +
                (a.mobile ? '5.' : '') +
                (a.ya() ? '10' : '1') +
                '/JS-' +
                a.version +
                (a.Wb ? 'T' : '') +
                (a.tagContainerMarker ? '-' + a.tagContainerMarker : '')
              );
            };
            a.ya = function () {
              return (
                (a.AudienceManagement && a.AudienceManagement.isReady()) || 0 != a.usePostbacks
              );
            };
            a.ib = function () {
              var c = a.dc,
                b = a.trackingServer;
              b
                ? a.trackingServerSecure && a.ssl && (b = a.trackingServerSecure)
                : ((c = c ? ('' + c).toLowerCase() : 'd1'),
                  'd1' == c ? (c = '112') : 'd2' == c && (c = '122'),
                  (b = a.kb() + '.' + c + '.2o7.net'));
              return b;
            };
            a.kb = function () {
              var c = a.visitorNamespace;
              c || ((c = a.account.split(',')[0]), (c = c.replace(/[^0-9a-z]/gi, '')));
              return c;
            };
            a.Ya = /{(%?)(.*?)(%?)}/;
            a.$b = RegExp(a.Ya.source, 'g');
            a.Gb = function (c) {
              if ('object' == typeof c.dests)
                for (var b = 0; b < c.dests.length; ++b) {
                  var d = c.dests[b];
                  if ('string' == typeof d.c && 'aa.' == d.id.substr(0, 3))
                    for (var f = d.c.match(a.$b), e = 0; e < f.length; ++e) {
                      var g = f[e],
                        h = g.match(a.Ya),
                        k = '';
                      '%' == h[1] && 'timezone_offset' == h[2]
                        ? (k = new Date().getTimezoneOffset())
                        : '%' == h[1] && 'timestampz' == h[2] && (k = a.Kb());
                      d.c = d.c.replace(g, a.escape(k));
                    }
                }
            };
            a.Kb = function () {
              var c = new Date(),
                b = new Date(60000 * Math.abs(c.getTimezoneOffset()));
              return (
                a.j(4, c.getFullYear()) +
                '-' +
                a.j(2, c.getMonth() + 1) +
                '-' +
                a.j(2, c.getDate()) +
                'T' +
                a.j(2, c.getHours()) +
                ':' +
                a.j(2, c.getMinutes()) +
                ':' +
                a.j(2, c.getSeconds()) +
                (0 < c.getTimezoneOffset() ? '-' : '+') +
                a.j(2, b.getUTCHours()) +
                ':' +
                a.j(2, b.getUTCMinutes())
              );
            };
            a.j = function (a, b) {
              return (Array(a + 1).join(0) + b).slice(-a);
            };
            a.pa = {};
            a.doPostbacks = function (c) {
              if ('object' == typeof c)
                if (
                  (a.Gb(c),
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
                      ((a.pa[d.id] = new Image()), (a.pa[d.id].alt = ''), (a.pa[d.id].src = d.c));
                  }
            };
            a.eb = function (c) {
              a.i || a.Ob();
              a.i.push(c);
              a.ia = a.B();
              a.Wa();
            };
            a.Ob = function () {
              a.i = a.Rb();
              a.i || (a.i = []);
            };
            a.Rb = function () {
              var c, b;
              if (a.oa()) {
                try {
                  (b = k.localStorage.getItem(a.ma())) && (c = k.JSON.parse(b));
                } catch (d) {}
                return c;
              }
            };
            a.oa = function () {
              var c = !0;
              (a.trackOffline && a.offlineFilename && k.localStorage && k.JSON) || (c = !1);
              return c;
            };
            a.Ma = function () {
              var c = 0;
              a.i && (c = a.i.length);
              a.p && c++;
              return c;
            };
            a.W = function () {
              if (a.p && (a.A && a.A.complete && a.A.F && a.A.ra(), a.p)) return;
              a.Na = q;
              if (a.na) a.ia > a.P && a.Ua(a.i), a.qa(500);
              else {
                var c = a.Ab();
                if (0 < c) a.qa(c);
                else if ((c = a.Ja())) (a.p = 1), a.Sb(c), a.Vb(c);
              }
            };
            a.qa = function (c) {
              a.Na || (c || (c = 0), (a.Na = setTimeout(a.W, c)));
            };
            a.Ab = function () {
              var c;
              if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
              c = a.B() - a.Sa;
              return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
            };
            a.Ja = function () {
              if (0 < a.i.length) return a.i.shift();
            };
            a.Sb = function (c) {
              if (a.debugTracking) {
                var b = 'AppMeasurement Debug: ' + c;
                c = c.split('&');
                var d;
                for (d = 0; d < c.length; d++) b += '\n\t' + a.unescape(c[d]);
                a.D(b);
              }
            };
            a.wa = function () {
              return a.marketingCloudVisitorID || a.analyticsVisitorID;
            };
            a.Y = !1;
            var t;
            try {
              t = JSON.parse('{"x":"y"}');
            } catch (w) {
              t = null;
            }
            t && 'y' == t.x
              ? ((a.Y = !0),
                (a.X = function (a) {
                  return JSON.parse(a);
                }))
              : k.$ && k.$.parseJSON
              ? ((a.X = function (a) {
                  return k.$.parseJSON(a);
                }),
                (a.Y = !0))
              : (a.X = function () {
                  return null;
                });
            a.Vb = function (c) {
              var b, d, f;
              a.wa() &&
                2047 < c.length &&
                (a.ab() && ((d = 1), (b = new XMLHttpRequest())),
                b &&
                  ((a.AudienceManagement && a.AudienceManagement.isReady()) ||
                    0 != a.usePostbacks) &&
                  (a.Y ? (b.Ea = !0) : (b = 0)));
              !b && a.Xa && (c = c.substring(0, 2047));
              !b &&
                a.d.createElement &&
                (0 != a.usePostbacks ||
                  (a.AudienceManagement && a.AudienceManagement.isReady())) &&
                (b = a.d.createElement('SCRIPT')) &&
                'async' in b &&
                ((f = (f = a.d.getElementsByTagName('HEAD')) && f[0] ? f[0] : a.d.body)
                  ? ((b.type = 'text/javascript'), b.setAttribute('async', 'async'), (d = 2))
                  : (b = 0));
              b ||
                ((b = new Image()),
                (b.alt = ''),
                b.abort ||
                  'undefined' === typeof k.InstallTrigger ||
                  (b.abort = function () {
                    b.src = q;
                  }));
              b.Ta = Date.now();
              b.Ga = function () {
                try {
                  b.F && (clearTimeout(b.F), (b.F = 0));
                } catch (a) {}
              };
              b.onload = b.ra = function () {
                b.Ta && (a.ja = Date.now() - b.Ta);
                a.fb(c);
                b.Ga();
                a.Eb();
                a.da();
                a.p = 0;
                a.W();
                if (b.Ea) {
                  b.Ea = !1;
                  try {
                    a.doPostbacks(a.X(b.responseText));
                  } catch (d) {}
                }
              };
              b.onabort = b.onerror = b.Ka = function () {
                b.Ga();
                (a.trackOffline || a.na) && a.p && a.i.unshift(a.Db);
                a.p = 0;
                a.ia > a.P && a.Ua(a.i);
                a.da();
                a.qa(500);
              };
              b.onreadystatechange = function () {
                4 == b.readyState && (200 == b.status ? b.ra() : b.Ka());
              };
              a.Sa = a.B();
              if (1 == d)
                (f = c.indexOf('?')),
                  (d = c.substring(0, f)),
                  (f = c.substring(f + 1)),
                  (f = f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, '')),
                  b.open('POST', d, !0),
                  (b.withCredentials = !0),
                  b.send(f);
              else if (((b.src = c), 2 == d)) {
                if (a.Qa)
                  try {
                    f.removeChild(a.Qa);
                  } catch (e) {}
                f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                a.Qa = a.A;
              }
              b.F = setTimeout(function () {
                b.F && (b.complete ? b.ra() : (a.trackOffline && b.abort && b.abort(), b.Ka()));
              }, 5000);
              a.Db = c;
              a.A = k['s_i_' + a.replace(a.account, ',', '_')] = b;
              if ((a.useForcedLinkTracking && a.L) || a.v)
                a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
                  (a.ea = setTimeout(a.da, a.forcedLinkTrackingTimeout));
            };
            a.ab = function () {
              return 'undefined' !== typeof XMLHttpRequest &&
                'withCredentials' in new XMLHttpRequest()
                ? !0
                : !1;
            };
            a.Eb = function () {
              if (a.oa() && !(a.Ra > a.P))
                try {
                  k.localStorage.removeItem(a.ma()), (a.Ra = a.B());
                } catch (c) {}
            };
            a.Ua = function (c) {
              if (a.oa()) {
                a.Wa();
                try {
                  k.localStorage.setItem(a.ma(), k.JSON.stringify(c)), (a.P = a.B());
                } catch (b) {}
              }
            };
            a.Wa = function () {
              if (a.trackOffline) {
                if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
                for (; a.i.length > a.offlineLimit; ) a.Ja();
              }
            };
            a.forceOffline = function () {
              a.na = !0;
            };
            a.forceOnline = function () {
              a.na = !1;
            };
            a.ma = function () {
              return a.offlineFilename + '-' + a.visitorNamespace + a.account;
            };
            a.B = function () {
              return new Date().getTime();
            };
            a.Oa = function (a) {
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
              a.Wb = c;
              for (b = 0; b < a._il.length; b++)
                if ((d = a._il[b]) && 's_l' == d._c && d.tagContainerName == c) {
                  a.T(d);
                  if (d.lmq) for (b = 0; b < d.lmq.length; b++) (f = d.lmq[b]), a.loadModule(f.n);
                  if (d.ml)
                    for (f in d.ml)
                      if (a[f])
                        for (b in ((c = a[f]), (f = d.ml[f]), f))
                          !Object.prototype[b] &&
                            ('function' != typeof f[b] || 0 > ('' + f[b]).indexOf('s_c_il')) &&
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
              getQueryParam: function (c, b, d, f) {
                var e,
                  g = '';
                b || (b = a.pageURL ? a.pageURL : k.location);
                d = d ? d : '&';
                if (!c || !b) return g;
                b = '' + b;
                e = b.indexOf('?');
                if (0 > e) return g;
                b = d + b.substring(e + 1) + d;
                if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + '=' + d))) {
                  e = b.indexOf('#');
                  0 <= e && (b = b.substr(0, e) + d);
                  e = b.indexOf(d + c + '=');
                  if (0 > e) return g;
                  b = b.substring(e + d.length + c.length + 1);
                  e = b.indexOf(d);
                  0 <= e && (b = b.substring(0, e));
                  0 < b.length && (g = a.unescape(b));
                  return g;
                }
              },
              getIeVersion: function () {
                if (document.documentMode) return document.documentMode;
                for (var a = 7; 4 < a; a--) {
                  var b = document.createElement('div');
                  b.innerHTML = '<!--[if IE ' + a + ']><span></span><![endif]-->';
                  if (b.getElementsByTagName('span').length) return a;
                }
                return null;
              },
            };
            a.G = 'supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData'.split(
              ' '
            );
            a.g = a.G.concat(
              'purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt'.split(
                ' '
              )
            );
            a.ka = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(
              ' '
            );
            a.Q = a.ka.slice(0);
            a.Da = 'account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement'.split(
              ' '
            );
            for (m = 0; 250 >= m; m++)
              76 > m && (a.g.push('prop' + m), a.Q.push('prop' + m)),
                a.g.push('eVar' + m),
                a.Q.push('eVar' + m),
                6 > m && a.g.push('hier' + m),
                4 > m && a.g.push('list' + m);
            m = 'pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a'.split(
              ' '
            );
            a.g = a.g.concat(m);
            a.G = a.G.concat(m);
            a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf('https');
            a.charSet = 'UTF-8';
            a.contextData = {};
            a.offlineThrottleDelay = 0;
            a.offlineFilename = 'AppMeasurement.offline';
            a.R = 's_sq';
            a.Sa = 0;
            a.ia = 0;
            a.P = 0;
            a.Ra = 0;
            a.linkDownloadFileTypes =
              'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
            a.w = k;
            a.d = k.document;
            try {
              if (((a.Xa = !1), navigator)) {
                var v = navigator.userAgent;
                if (
                  'Microsoft Internet Explorer' == navigator.appName ||
                  0 <= v.indexOf('MSIE ') ||
                  (0 <= v.indexOf('Trident/') && 0 <= v.indexOf('Windows NT 6'))
                )
                  a.Xa = !0;
              }
            } catch (x) {}
            a.da = function () {
              a.ea && (k.clearTimeout(a.ea), (a.ea = q));
              a.k && a.L && a.k.dispatchEvent(a.L);
              a.v &&
                ('function' == typeof a.v ? a.v() : a.k && a.k.href && (a.d.location = a.k.href));
              a.k = a.L = a.v = 0;
            };
            a.Va = function () {
              const $___old_f93e2fad0da583fb = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              );
              try {
                if ($___old_f93e2fad0da583fb)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_93ef30bcc5fe9986.userAgent
                  ));
                return function () {
                  a.b = a.d.body;
                  a.b
                    ? ((a.u = function (c) {
                        var b, d, f, e, g;
                        if (
                          !((a.d && a.d.getElementById('cppXYctnr')) || (c && c['s_fe_' + a._in]))
                        ) {
                          if (a.Fa)
                            if (a.useForcedLinkTracking) a.b.removeEventListener('click', a.u, !1);
                            else {
                              a.b.removeEventListener('click', a.u, !0);
                              a.Fa = a.useForcedLinkTracking = 0;
                              return;
                            }
                          else a.useForcedLinkTracking = 0;
                          a.clickObject = c.srcElement ? c.srcElement : c.target;
                          try {
                            if (
                              !a.clickObject ||
                              (a.O && a.O == a.clickObject) ||
                              !(
                                a.clickObject.tagName ||
                                a.clickObject.parentElement ||
                                a.clickObject.parentNode
                              )
                            )
                              a.clickObject = 0;
                            else {
                              var h = (a.O = a.clickObject);
                              a.ha && (clearTimeout(a.ha), (a.ha = 0));
                              a.ha = setTimeout(function () {
                                a.O == h && (a.O = 0);
                              }, 10000);
                              f = a.Ma();
                              a.track();
                              if (f < a.Ma() && a.useForcedLinkTracking && c.target) {
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
                                  a.Oa(g) || (g = 0),
                                  (d = e.target),
                                  c.target.dispatchEvent &&
                                    g &&
                                    (!d ||
                                      '_self' == d ||
                                      '_top' == d ||
                                      '_parent' == d ||
                                      (k.name && d == k.name)))
                                ) {
                                  try {
                                    b = a.d.createEvent('MouseEvents');
                                  } catch (l) {
                                    b = new k.MouseEvent();
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
                                    } catch (m) {
                                      b = 0;
                                    }
                                    b &&
                                      ((b['s_fe_' + a._in] = b.s_fe = 1),
                                      c.stopPropagation(),
                                      c.stopImmediatePropagation && c.stopImmediatePropagation(),
                                      c.preventDefault(),
                                      (a.k = c.target),
                                      (a.L = b));
                                  }
                                }
                              }
                            }
                          } catch (n) {
                            a.clickObject = 0;
                          }
                        }
                      }),
                      a.b && a.b.attachEvent
                        ? a.b.attachEvent('onclick', a.u)
                        : a.b &&
                          a.b.addEventListener &&
                          (navigator &&
                            ((0 <= navigator.userAgent.indexOf('WebKit') && a.d.createEvent) ||
                              (0 <= navigator.userAgent.indexOf('Firefox/2') && k.MouseEvent)) &&
                            ((a.Fa = 1),
                            (a.useForcedLinkTracking = 1),
                            a.b.addEventListener('click', a.u, !0)),
                          a.b.addEventListener('click', a.u, !1)))
                    : setTimeout(a.Va, 30);
                }.apply(this, arguments);
              } finally {
                if ($___old_f93e2fad0da583fb)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_f93e2fad0da583fb
                  ));
              }
            };
            a.Fb();
            a.fc ||
              (r
                ? a.setAccount(r)
                : a.D('Error, missing Report Suite ID in AppMeasurement initialization'),
              a.Va(),
              a.loadModule('ActivityMap'));
          }.apply(this, arguments);
        } finally {
          if ($___old_c74ea3df9e9c33c5)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_c74ea3df9e9c33c5
            ));
        }
      }
      function s_gi (r) {
        var a,
          k = window.s_c_il,
          q,
          p,
          m = r.split(','),
          s,
          u,
          t = 0;
        if (k)
          for (q = 0; !t && q < k.length; ) {
            a = k[q];
            if ('s_c' == a._c && (a.account || a.oun))
              if (a.account && a.account == r) t = 1;
              else
                for (
                  p = a.account ? a.account : a.oun,
                    p = a.allAccounts ? a.allAccounts : p.split(','),
                    s = 0;
                  s < m.length;
                  s++
                )
                  for (u = 0; u < p.length; u++) m[s] == p[u] && (t = 1);
            q++;
          }
        t ? a.setAccount && a.setAccount(r) : (a = new AppMeasurement(r));
        return a;
      }
      AppMeasurement.getInstance = s_gi;
      window.s_objectID || (window.s_objectID = 0);
      function s_pgicq () {
        var r = window,
          a = r.s_giq,
          k,
          q,
          p;
        if (a)
          for (k = 0; k < a.length; k++)
            (q = a[k]),
              (p = s_gi(q.oun)),
              p.setAccount(q.un),
              p.setTagContainer(q.tagContainerName);
        r.s_giq = 0;
      }
      s_pgicq();
    }
    detmScriptExecutor.push('s-code', function (params) {
      const $___old_c4b26d7e5dce86e9 = {}.constructor.getOwnPropertyDescriptor(
        window,
        'sessionStorage'
      );
      try {
        if ($___old_c4b26d7e5dce86e9)
          ({}.constructor.defineProperty(
            window,
            'sessionStorage',
            $___stub_3ac875f7196a9c3f.sessionStorage
          ));
        return function () {
          var detm_env = detmScriptLoaderConfig.environment || '';
          if ('stage' == detm_env || 'preprod' == detm_env) var sacct_env = 'staging';
          else sacct_env = '';
          var getURLParts = function (href) {
              var urlParts = {};
              return (
                (bits = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                  href
                )),
                (urlParts.protocol = bits[1]),
                (urlParts.host = bits[6]),
                (urlParts.filepath = bits[9] + (void 0 !== bits[13] ? '#' + bits[13] : '')),
                (urlParts.source = bits[0]),
                (urlParts.authority = bits[2]),
                (urlParts.userInfo = bits[3]),
                (urlParts.user = bits[4]),
                (urlParts.password = bits[5]),
                (urlParts.port = bits[7]),
                (urlParts.relative = bits[8]),
                (urlParts.path = bits[9]),
                (urlParts.directory = bits[10]),
                (urlParts.file = bits[11]),
                (urlParts.query = bits[12] ? bits[12] : ''),
                (urlParts.anchor = bits[13]),
                urlParts
              );
            },
            s_account = 'attglobaldev',
            slif = '',
            sltv =
              'events,pageName,contextData.events,server,prop6,prop12,prop17,prop18,prop19,prop20,prop23,prop25,prop30,prop41,prop53,prop56,eVar3,eVar7,eVar13,eVar14,eVar70,eVar88,eVar161,eVar188,list2',
            ses = '#fbid|;jessionid',
            mediaVar = 'events,prop6,prop53,eVar13,eVar14,eVar17,eVar18,eVar60,eVar61,eVar188';
          ddo.squawk('s_account 1:' + s_account, 1, 'e');
          var filters,
            buMapping = [
              ['/business/', 'pos'],
              ['/businesscare/', 'poc'],
              ['/businesscare-ebill/', 'ebill'],
              ['/businessoffers/', 'snl'],
              ['/ebiz/', 'ebiz'],
              ['/business/4', 'dtvb'],
              ['/directv-for-business/', 'dtvb'],
            ],
            buMappingByDomain = [
              ['www.business.att.com', 'mcom'],
              ['bizcircle.att.com', 'mcom'],
              ['marketing.att.com', 'mcom'],
              ['networkingexchangeblog.att.com', 'mcom'],
              ['stagingneblog.att.com', 'mcom'],
              ['devneblog.att.com', 'mcom'],
              ['resources.att.com', 'mcom'],
              ['www.corp.att.com', 'mcom'],
              ['www.businessdirect.att.com', 'bd'],
              ['obt.bus.att.com', 'bd'],
              ['thesummit.att.com', 'mcom'],
            ],
            bu_value = '';
          if (
            ('undefined' != typeof ddo &&
              'Business' == ddo.getVar('page.category.pageOwnership') &&
              -1 == document.location.host.indexOf('att.net')) ||
            'undefined' != typeof digitalData ||
            document.location.host.toLowerCase().indexOf('zooppa.com') > -1
          ) {
            for (
              'staging' !== sacct_env && (s_account = 'attprod'),
                'staging' == sacct_env && (s_account = 'attdev'),
                ddo.squawk('s_account 2:' + s_account, 1, 'e'),
                slif = 'javascript:,att.com,iotca.org,firstnet.com',
                ses = '#fbid|;jessionid|;amssjsessionid|;AMSSJSESSIONID',
                sltv =
                  'events,channel,contextData.events,server,prop6,prop12,prop17,prop18,prop19,prop20,prop25,prop30,prop53,eVar7,eVar13,eVar17,eVar18,eVar88,eVar161,eVar188',
                mediaVar =
                  'events,prop6,prop60,eVar13,eVar14,eVar17,eVar18,eVar60,eVar61,eVar88,eVar188',
                bu_value = 'abs',
                i = 0;
              i < buMapping.length;
              i++
            )
              window.location.pathname.toLowerCase().indexOf(buMapping[i][0].toLowerCase()) > -1 &&
                (bu_value = buMapping[i][1]);
            for (i = 0; i < buMappingByDomain.length; i++)
              window.location.host.toLowerCase().indexOf(buMappingByDomain[i][0].toLowerCase()) >
                -1 && (bu_value = buMappingByDomain[i][1]);
          } else
            document.location.host.toLowerCase().indexOf('programs.thekernorg.com') > -1
              ? ((s_account = 'attnetdev'), (slif = 'javascript:,programs.thekernorg.com'))
              : document.location.host.toLowerCase().indexOf('att.net') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attnetprod'), (slif = 'javascript:,att.net'))
              : document.location.host.toLowerCase().indexOf('uverse.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,uverse.com'))
              : document.location.host.toLowerCase().indexOf('uverse.com') > -1 &&
                'staging' == sacct_env
              ? ((s_account = 'attcondev'), (slif = 'javascript:,uverse.com'))
              : document.location.host.toLowerCase().indexOf('events.att.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,uverse.com,events.att.com'))
              : document.location.host.toLowerCase().indexOf('events.att.com') > -1 &&
                'staging' == sacct_env
              ? ((s_account = 'attcondev'), (slif = 'javascript:,uverse.com,events.att.com'))
              : document.location.host.toLowerCase().indexOf('att.net') > -1 &&
                'staging' == sacct_env
              ? ((s_account = 'attnetdev'), (slif = 'javascript:,att.net'))
              : document.location.host.toLowerCase().indexOf('att.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,att.com'))
              : document.location.host.toLowerCase().indexOf('att.com') > -1 &&
                'staging' == sacct_env
              ? ((s_account = 'attcondev'), (slif = 'javascript:,att.com'))
              : document.location.host.toLowerCase().indexOf('paygonline.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,paygonline.com'))
              : document.location.host.toLowerCase().indexOf('csr-myaccount.cingular.net') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,csr-myaccount.cingular.net'))
              : document.location.host.toLowerCase().indexOf('129.192.151.35') > -1 &&
                'staging' == sacct_env
              ? ((s_account = 'attcondev'), (slif = 'javascript:,129.192.151.35'))
              : document.location.host.toLowerCase().indexOf('survey.foreseeresults.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,foreseeresults.com'))
              : document.location.host.toLowerCase().indexOf('directvnow.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,directvnow.com'))
              : document.location.host.toLowerCase().indexOf('watchityourway.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,watchityourway.com'))
              : document.location.host.toLowerCase().indexOf('directv.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,directv.com'))
              : document.location.host.toLowerCase().indexOf('attwatchtv.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,attwatchtv.com'))
              : document.location.host.toLowerCase().indexOf('attonlineoffers.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,attonlineoffers.com'))
              : document.location.host.toLowerCase().indexOf('more.att.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attnetprod'), (slif = 'javascript:,more.att.com'))
              : document.location.host.toLowerCase().indexOf('watch.att.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attnetprod'), (slif = 'javascript:,watch.att.com'))
              : document.location.host.toLowerCase().indexOf('experience.att.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attnetprod'), (slif = 'javascript:,experience.att.com'))
              : document.location.host.toLowerCase().indexOf('audience.att.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attnetprod'), (slif = 'javascript:,audience.att.com'))
              : document.location.host.toLowerCase().indexOf('audiencenetwork.att.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attnetprod'), (slif = 'javascript:,audiencenetwork.att.com'))
              : document.location.host.toLowerCase().indexOf('atttvnow.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,atttvnow.com'))
              : document.location.host.toLowerCase().indexOf('itcanwait.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,itcanwait.com'))
              : document.location.host.toLowerCase().indexOf('attbelieves.com') > -1 &&
                'staging' != sacct_env
              ? ((s_account = 'attconprod'), (slif = 'javascript:,attbelieves.com'))
              : document.location.host.toLowerCase().indexOf('research.att.com') > -1 &&
                'staging' != sacct_env &&
                ((s_account = 'attconprod'), (slif = 'javascript:,research.att.com'));
          if (
            ((('www.att.com' == document.location.hostname &&
              document.location.href.indexOf('/smallbusiness') > -1) ||
              ('undefined' != typeof ddo && 'SMB' == ddo.getVar('user.login.userType')) ||
              ('undefined' != typeof ddo && 'CONS_SMB' == ddo.getVar('user.login.userType')) ||
              ('undefined' != typeof ddo && 'SMB' == ddo.getVar('user.customerType')) ||
              ('undefined' != typeof ddo &&
                'SMB' == ddo.getVar('user.account.accountInFocusUserType')) ||
              ('www.directv.com' == document.location.hostname &&
                document.location.href.indexOf('/forbusiness') > -1)) &&
              -1 == s_account.indexOf('attprod') &&
              -1 == s_account.indexOf('attdev') &&
              ('staging' !== sacct_env && (s_account += ',attprod'),
              'staging' == sacct_env && (s_account += ',attdev')),
            (s_att = s_gi(s_account)),
            (s_att.visitorNamespace = 'att1'),
            (s_att.trackingServer = 'metrics.att.com'),
            (s_att.trackingServerSecure = 'smetrics.att.com'),
            (s_att.visitor = Visitor.getInstance('55633F7A534535110A490D44@AdobeOrg')),
            (s_att.charSet = 'UTF-8'),
            (s_att.currencyCode = 'USD'),
            (s_att.useLinkTrackSessionStorage = !0),
            (s_att.trackDownloadLinks = !0),
            (s_att.trackExternalLinks = !0),
            (s_att.trackInlineStats = !1),
            (s_att.linkDownloadFileTypes =
              'exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,docx,pdf,xls,xlsx'),
            (s_att.linkLeaveQueryString = !1),
            (s_att.linkTrackVars = sltv),
            (s_att.linkTrackEvents = 'None'),
            (s_att.fpCookieDomainPeriods = 2),
            (s_att.linkInternalFilters =
              (void 0 !== (filters = slif) &&
                -1 == filters.indexOf('directvnow.com') &&
                (filters += ',directvnow.com,alienvault.com,my-attwifi.attwifi.com'),
              filters)),
            (s_att.sso = !1),
            (s_att.sessionExcludeStrings = ses),
            (s_att._tpDST = {
              2012: '3/11,11/4',
              2013: '3/10,11/3',
              2014: '3/9,11/2',
              2015: '3/8,11/1',
              2016: '3/13,11/6',
              2017: '3/12,11/5',
              2018: '3/11,11/4',
              2019: '3/10,11/3',
              2020: '3/8,11/1',
              2021: '3/14,11/7',
            }),
            (s_att.pte =
              'event301,event302,event303,event304,event305,event306,event307,event308,event309,event310'),
            (s_att.ptc = !1),
            (s_att.usePlugins = !0),
            (s_att.doPlugins = function (s) {
              var tempAppMeasurementVersion = 'AppMeasurement=' + s_att.version,
                tempVisitorIDVersion = void 0 !== s_att.visitor ? s_att.visitor.version : 'N/A',
                tempDTMBuildDate =
                  'DTM=' +
                  ('undefined' != typeof _satellite ? _satellite.buildDate : 'NO SATELLITE'),
                tempDataSource = '',
                tempDMVersion = '',
                tempDDVersion = '',
                tempContainerVersion = 'Container=' + detmScriptLoaderConfig.version,
                nextData = window.__NEXT_DATA__,
                tempPageBuildID =
                  void 0 !== nextData && void 0 !== nextData.buildId ? nextData.buildId : '';
              if (
                ((tempPageBuildID = 'pageBuildId=' + tempPageBuildID),
                ((document.location.hostname.indexOf('att.com') > -1 &&
                  document.location.href.indexOf('/smallbusiness') > -1) ||
                  ('undefined' != typeof ddo && 'SMB' == ddo.getVar('user.login.userType')) ||
                  ('undefined' != typeof ddo && 'CONS_SMB' == ddo.getVar('user.login.userType')) ||
                  ('undefined' != typeof ddo && 'SMB' == ddo.getVar('user.customerType')) ||
                  ('undefined' != typeof ddo &&
                    'SMB' == ddo.getVar('user.account.accountInFocusUserType')) ||
                  document.cookie.match(/DTAB=.*Bsn/)) &&
                  -1 == s_account.indexOf('attprod') &&
                  -1 == s_account.indexOf('attdev') &&
                  ('staging' !== sacct_env && (s_account += ',attprod'),
                  'staging' == sacct_env && (s_account += ',attdev')),
                (s_att.account = s_account),
                (s_att.prop6 = '1268|' + s_att.version + '|'),
                (s_att.prop6 += tempVisitorIDVersion),
                'undefined' != typeof ddo && (ddo.version().api, 1)
                  ? ((s_att.prop6 += '|DMapi=' + ddo.version().api),
                    (tempDMVersion = 'DM=' + ddo.version().api))
                  : ((s_att.prop6 += '|DMapi=na'), (tempDMVersion = 'DM=na')),
                'undefined' != typeof ddo && (ddo.version().config, 1)
                  ? ((s_att.prop6 += '|DMcfg=' + ddo.version().config),
                    (tempDDVersion = 'DD=' + ddo.version().config))
                  : ((s_att.prop6 += '|DMcfg=na'), (tempDDVersion = 'DD=na')),
                'undefined' != typeof ddo && void 0 !== ddo.getVar('page.location.domain')
                  ? s_att.server || (s_att.server = ddo.getVar('page.location.domain'))
                  : ((s_att.server = document.location.host.split('/').join('')),
                    (s_att.server =
                      s_att.server.indexOf(':') > -1
                        ? (s_att.server = s_att.server.match('(.*):')[1])
                        : s_att.server)),
                'undefined' != typeof ddo &&
                  void 0 !== ddo.getVar('page.location.domain') &&
                  ddo.getVar('page.location.domain') !== window.location.hostname &&
                  (ddo.setVar('page.location.domain', window.location.hostname),
                  (s_att.eVar161 = s_att.server = window.location.hostname)),
                s_att.eVar161
                  ? (s_att.eVar161 = s_att.server || window.location.hostname)
                  : (s_att.eVar161 = ddo.getVar('page.location.domain')),
                bu_value || (bu_value = s_att.server.indexOf('att.com') > -1 ? 'con' : 'net'),
                ((s_att.server &&
                  (s_att.server.indexOf('paygonline.com') > 1 ||
                    s_att.server.indexOf('129.192.151.34') > -1 ||
                    s_att.server.indexOf('app.mobilemyaccount') > -1 ||
                    s_att.server.indexOf('app_qa.mobilemyaccount') > -1 ||
                    s_att.server.indexOf('csr-myaccount.cingular.net') > -1)) ||
                  s_att.server.indexOf('watchityourway.com') > -1 ||
                  s_att.server.indexOf('directvnow.com') > -1 ||
                  s_att.server.indexOf('directv.com') > -1 ||
                  s_att.server.indexOf('atttvnow.com') > -1) &&
                  (bu_value = 'con'),
                s_att.channel || (s_att.channel = bu_value),
                !s_att.server ||
                  (s_att.prop1 && 'default' != s_att.prop1.toLowerCase()) ||
                  (s_att.server.indexOf('sales_att.liveperson') > -1
                    ? (s_att.prop1 = 'sales.liveperson')
                    : 'att' != s_att.server.split('.')[1]
                    ? (s_att.prop1 = s_att.server.split('.')[0] + '.' + s_att.server.split('.')[1])
                    : 'www' == s_att.server.split('.')[0]
                    ? (s_att.prop1 = 'att')
                    : (s_att.prop1 = s_att.server.split('.')[0])),
                (s_att.prop2 && 'default' != s_att.prop2.toLowerCase()) ||
                  (s_att.prop2 = s_att.channel + '|' + s_att.prop1),
                !s_att.prop3 || 'default' == s_att.prop3.toLowerCase())
              )
                if ('' != document.location.pathname.split('/')[1]) {
                  var dlp1 = document.location.pathname.split('/')[1];
                  s_att.prop3 = s_att.prop2 + '|' + dlp1;
                } else s_att.prop3 = s_att.prop2;
              if (
                !s_att.pageName ||
                'default' == s_att.pageName.toLowerCase() ||
                '||||' == s_att.pageName
              ) {
                for (
                  var wtPN = '', md = document.getElementsByTagName('meta'), m = 0;
                  m < md.length;
                  m++
                )
                  'DCSext.wtPN' == md.item(m).name && (wtPN = md.item(m).content);
                if (-1 == wtPN.indexOf('/') && '' != wtPN)
                  wtPN.indexOf('ATT Homepage | ') > -1 &&
                    ((s_att.eVar43 = wtPN.split(' | ')[1]), (wtPN = 'ATT Homepage')),
                    (s_att.pageName = s_att.prop3 + '|' + wtPN);
                else if (
                  '/' != document.location.pathname &&
                  document.location.pathname.substring(1) != dlp1
                )
                  if ('t' == dlp1) {
                    var n = document.location.pathname.substr(1);
                    (n = n.replace('t/', '')),
                      (s_att.pageName = s_att.prop3 + '|' + n),
                      (s_att.pageName = s_att.pageName.split('/').join('|'));
                  } else {
                    var parts = getURLParts(location.href);
                    s_att.pageName = s_att.prop3 + '|' + parts.file;
                  }
                else s_att.pageName = s_att.prop3;
                (s_account.indexOf('attprod') > -1 || s_account.indexOf('attdev') > -1) &&
                  (s_att.pageName &&
                    s_att.pageName.indexOf('|index.jsp') > -1 &&
                    (s_att.pageName = s_att.pageName.substr(
                      0,
                      s_att.pageName.indexOf('|index.jsp')
                    )),
                  s_att.pageName &&
                    s_att.pageName.indexOf('businesscare-ebill') > -1 &&
                    (s_att.pageName =
                      s_att.prop3 +
                      '|' +
                      document.title.replace(new RegExp('Corporate Self Care -.*- '), '')),
                  s_att.pageName &&
                    s_att.pageName.indexOf('businesscare|menu') > -1 &&
                    (s_att.pageName =
                      s_att.prop3 + '|' + document.title.replace('AT&T Business Care - ', '')),
                  ('/businesscare/' != document.location.pathname &&
                    '/businesscare/index.jsp' != document.location.pathname) ||
                    (s_att.pageName = s_att.prop3));
              }
              s_att.pageName && (s_att.eVar18 = s_att.pageName),
                s_att.pageName && (s_att.hier1 = s_att.pageName.replace(/\|/g, '/')),
                s_att.channel && (s_att.eVar10 = 'D=channel');
              var tempCampaign = '';
              if (!s_att.campaign || 'default' == s_att.campaign.toLowerCase()) {
                var cmpSrc =
                  s_att.sessionClean(s_att.getQueryParam('source')) ||
                  s_att.sessionClean(s_att.getQueryParam('bref')) ||
                  s_att.sessionClean(s_att.getQueryParam('/?source')) ||
                  s_att.sessionClean(s_att.getQueryParam('ref'));
                cmpSrc.indexOf('&') > -1 && (cmpSrc = cmpSrc.split('&')[0]);
                var cmpExtSrc =
                  '' !=
                  s_att.sessionClean(s_att.getQueryParam('wtExtndSource').replace(/[\s]|%20/g, ''))
                    ? '-' +
                      s_att.sessionClean(
                        s_att.getQueryParam('wtExtndSource').replace(/[\s]|%20/g, '')
                      )
                    : '';
                '' != cmpSrc &&
                  ('i' == cmpSrc.substr(0, 1).toLowerCase()
                    ? (s_att.eVar1 = cmpSrc + cmpExtSrc)
                    : ((tempCampaign = cmpSrc + cmpExtSrc),
                      'E' == cmpSrc.charAt(0) && '' != cmpSrc.charAt(15)
                        ? ((s_att.campaign = tempCampaign),
                          (s_att.campaign = s_att.getValOnce(s_att.campaign, 'cname', 0)),
                          (s_att.eVar90 = s_att.crossVisitParticipation(
                            s_att.campaign,
                            's_cmpstx',
                            '90',
                            '5',
                            '|',
                            '',
                            '1'
                          )))
                        : '' != s_att.sessionClean(s_att.getQueryParam('bref')) &&
                          'E' == cmpSrc.charAt(0) &&
                          ((s_att.campaign = tempCampaign),
                          (s_att.campaign = s_att.getValOnce(s_att.campaign, 'cname', 0)),
                          (s_att.eVar90 = s_att.crossVisitParticipation(
                            s_att.campaign,
                            's_cmpstx',
                            '90',
                            '5',
                            '|',
                            '',
                            '1'
                          )))));
              }
              if (null != s_att.campaign) {
                var temp93 = s_att.campaign.charAt(0) + '|' + s_att.campaign.charAt(16) || '';
                '' != temp93 &&
                  0 ==
                    (function (str, delimiter) {
                      var value = !1;
                      if ('string' == typeof str) {
                        for (
                          var tokens = ddo.ext.strSplit(str, delimiter), emptyCount = 0, i = 0;
                          i < tokens.length;
                          i++
                        ) {
                          if ('' != tokens[i].trim()) return !1;
                          ++emptyCount;
                        }
                        value = tokens.length > 0 && emptyCount == tokens.length;
                      }
                      return value;
                    })(temp93, '|') &&
                  ((s_att.eVar93 = temp93),
                  (s_att.linkTrackVars = s_att.apl(s_att.linkTrackVars, 'eVar93', ',', 1)));
              }
              var QMCount = 1;
              (s_att.pageUrl = document.location.pathname + document.location.search),
                s_att.pageUrl &&
                  '' != s_att.pageUrl &&
                  s_att.pageUrl.indexOf('?') > -1 &&
                  (QMCount = s_att.pageUrl.match(/\?/gi).length),
                (s_att.pageUrl = s_att.pageUrl.split('?'));
              var tempURLSC = s_att.sessionClean(s_att.pageUrl[0]) || '';
              if (
                ((s_att.eVar13 && 'default' != s_att.eVar13.toLowerCase()) ||
                  (s_att.eVar13 = tempURLSC.toLowerCase()),
                s_att.eVar13.indexOf('/index.html') > -1)
              ) {
                var tempNoindex = s_att.eVar13.replace('/index.html', '');
                s_att.eVar13 = tempNoindex.toLowerCase() || '';
              }
              if (s_att.eVar13.indexOf('/index.jsp') > -1) {
                var tempNoJSP = s_att.eVar13.replace('/index.jsp', '');
                s_att.eVar13 = tempNoJSP.toLowerCase() || '';
              }
              var tempSCUrl = s_att.sessionClean(s_att.eVar13) || '';
              s_att.eVar13 && (s_att.eVar13 = s_att.prop29 = tempSCUrl.toLowerCase()),
                (s_att.eVar188 && 'default' != s_att.eVar188.toLowerCase()) ||
                  (s_att.eVar188 = s_att.sessionClean(s_att.pageUrl[0])),
                s_att.eVar188.indexOf('/index.html') > -1 &&
                  (s_att.eVar188 = s_att.eVar188.replace('/index.html', '')),
                s_att.eVar188.indexOf('/index.jsp') > -1 &&
                  (s_att.eVar188 = s_att.eVar188.replace('/index.jsp', '')),
                s_att.eVar188 && (s_att.eVar188 = s_att.sessionClean(s_att.eVar188)),
                s_att.pageName && (s_att.pageName = s_att.sessionClean(s_att.pageName));
              var tempPgUrl = s_att.pageUrl[QMCount] || '',
                tempLpgurl = tempPgUrl || '';
              if (
                (void 0 !== tempPgUrl &&
                  '' != tempPgUrl &&
                  (s_att.eVar14 = s_att.prop41 = s_att.sessionClean(tempLpgurl)),
                void 0 !== s_att.eVar14 && s_att.eVar14.indexOf('%26') > -1)
              ) {
                var tempDurl = s_att.Util.urlDecode(s_att.eVar14) || '';
                s_att.eVar14 = s_att.prop41 = tempDurl || '';
              }
              if (
                (void 0 === s_att.eVar49 || void 0 === s_att.prop49) &&
                'undefined' != typeof ddo
              ) {
                var fpn = ddo.getVar('page.pageInfo.friendlyPageName') || '';
                '' != fpn && (s_att.eVar49 = s_att.prop49 = fpn);
              }
              (s_att.prop12 = 'D=User-Agent'),
                (s_att.eVar7 = 'D=User-Agent'),
                s_att.prop24 || (s_att.prop24 = document.title);
              try {
                s_att.prop25 = s_att.eVar8 = s_att.getTimeParting('n', '-5');
              } catch (e) {
                console.log(
                  'Analytics s-code ERROR: time parting plugin failed, make sure DST start/end dates are configured'
                );
              }
              if (
                ((s_att.prop21 = 'D=mid'),
                (s_att.prop30 = 'D=aid'),
                s_att.eVar15 && (s_att.prop42 = 'D=v15'),
                s_att.eVar69 ||
                  (s_att.eVar69 =
                    '' != s_att.Util.cookieRead('fsr.r') ? 'Not Qualified' : 'Qualified'),
                window.location.href.indexOf('start.att.net') > -1 &&
                  (window.s_att.trackExternalLinks = !1),
                void 0 !== s_att.linkType &&
                  'e' === s_att.linkType &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, ',event254', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event254', ',', 1))),
                void 0 !== s_att.linkType &&
                  'd' === s_att.linkType &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, ',event253', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event253', ',', 1))),
                void 0 !== s_att.linkType &&
                  'o' === s_att.linkType &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, ',event252', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event252', ',', 1))),
                document.location.href.indexOf('aa_ref=') > -1)
              ) {
                var tar_ref = document.location.href.match('[&|?]aa_ref=([^&]*)')[1];
                'blank' !== tar_ref &&
                  -1 == tar_ref.indexOf('#') &&
                  (s_att.referrer = document.location.href.match('[&|?]aa_ref=([^&]*)')[1]);
              }
              (document.location.host.toLowerCase().indexOf('att.net') > -1 ||
                document.location.host.toLowerCase().indexOf('uverse.com') > -1) &&
                (s_att.metadata(),
                document.location.search.indexOf('r=') > -1 &&
                  (s_att.referrer = document.location.search.match('[&|?]r=([^&]*)')[1]),
                'Logged In' == s_att.prop27
                  ? 'Logged In' != s_att.c_r('s_auth') &&
                    ((s_att.events = s_att.apl(s_att.events, 'event18', ',', 0)),
                    s_att.c_w('s_auth', 'Logged In'))
                  : ((s_att.prop27 = s_att.eVar3 = 'Logged Out'),
                    s_att.c_w('s_auth', s_att.prop27))),
                s_att.events &&
                  s_att.events.indexOf('scCheckout') > -1 &&
                  (s_att.prop31 = 'start'),
                s_att.events && s_att.events.indexOf('purchase') > -1 && (s_att.prop31 = 'stop'),
                (s_att.prop31 = s_att.getTimeToComplete(s_att.prop31, 'ttc', 0)),
                '||||' == s_att.eVar53 && (s_att.eVar53 = ''),
                (s_att.prop45 = ddo.ext.getCookie('TLTSID')),
                (s_att.prop53 = 'D=pe'),
                (s_att.contextData.visitorAPI =
                  'undefined' != typeof Visitor ? 'VisitorAPI Present' : 'VisitorAPI Missing');
              var dtmVal = 'object' == typeof _satellite ? 'true' : 'false';
              'true' == dtmVal
                ? 'undefined' != typeof ddo
                  ? void 0 !== ddo.getVar('page.pageInfo.friendlyPageName') &&
                    '' !== ddo.getVar('page.pageInfo.friendlyPageName')
                    ? (s_att.prop35 = 'True|DM')
                    : (s_att.prop35 = 'True|digitalData')
                  : 'undefined' != typeof digitalData &&
                    void 0 !== digitalData.page &&
                    void 0 !== digitalData.page.pageInfo &&
                    (void 0 === digitalData.page.pageInfo.destinationURL
                      ? ((s_att.prop35 = 'True|basetag'), (tempDataSource = 'DataSource=basetag'))
                      : ((s_att.prop35 = 'True|digitalData'),
                        (tempDataSource = 'DataSource=digitalData')))
                : (s_att.prop35 = dtmVal);
              var scvi = {
                  scvi: {
                    Data_Source: tempDataSource,
                    SC_Version: '1268',
                    EDM_Version: tempDMVersion.split('=')[1],
                    EDD_Version: tempDDVersion.split('=')[1],
                    EDM_Version: tempDMVersion.split('=')[1] || '',
                    EDD_Version: tempDDVersion.split('=')[1] || '',
                    Direct_Call_Rule: s_att.eVar75 || 'NONE',
                    Reporting_Suite: s_account || '',
                    App_Measurement_Version: s_att.version || '',
                  },
                },
                tempDMRule = 'DMRule=NONE';
              if (
                ((s_att.linkTrackVars = s_att.apl(s_att.linkTrackVars, 'eVar75', ',', 1)),
                void 0 !== s_att.eVar75 && 2 == s_att.eVar75.length
                  ? ((tempDMRule = 'DMRule=' + s_att.eVar75),
                    (tempDataSource = 'DM'),
                    (s_att.eVar75 =
                      tempDataSource +
                      '|' +
                      tempContainerVersion +
                      '|SCode=1268|' +
                      tempDMVersion +
                      '|' +
                      tempDDVersion +
                      '|' +
                      tempDTMBuildDate +
                      '|' +
                      tempDMRule +
                      '|VisitorID=' +
                      tempVisitorIDVersion +
                      '|' +
                      tempAppMeasurementVersion +
                      '|' +
                      s_account +
                      '|' +
                      tempPageBuildID))
                  : ((tempDataSource = 'SC'),
                    (s_att.eVar75 =
                      tempDataSource +
                      '|' +
                      tempContainerVersion +
                      '|SCode=1268|' +
                      tempDMVersion +
                      '|' +
                      tempDDVersion +
                      '|' +
                      tempDTMBuildDate +
                      '|' +
                      tempDMRule +
                      '|VisitorID=' +
                      tempVisitorIDVersion +
                      '|' +
                      tempAppMeasurementVersion +
                      '|' +
                      s_account +
                      '|' +
                      tempPageBuildID)),
                void 0 !== s_att.list3 && void 0 !== s_att.list3.length && s_att.list3.length > 0)
              )
                try {
                  var l3 = JSON.parse(unescape(s_att.list3));
                  (l3.extended = scvi), (s_att.list3 = escape(JSON.stringify(l3)));
                } catch (e) {}
              if (s_att.events) {
                s_att.events.indexOf('prodView') > -1 &&
                  (s_att.events = s_att.apl(s_att.events, 'event23', ',', 0));
                var ea = s_att.events;
                if (s_att.events.indexOf(':') > -1) {
                  ea = s_att.events.split(',');
                  for (var f = 0; f < ea.length; f++)
                    ea[f].indexOf(':') > -1 && (ea[f] = ea[f].split(':')[0]);
                  ea = ea.join();
                }
                s_att.contextData.events = s_att.events;
              }
              if (
                (document.location.pathname.toLowerCase().indexOf('/hronestop/') > -1 &&
                  (s_att.abort = !0),
                s_att.manageVars('cleanseVars'),
                s_att.performanceTiming(),
                s_att.account.indexOf('attprod') > -1 || s_att.account.indexOf('attdev') > -1)
              ) {
                var disableCallback = !1;
                (window._uxa = window._uxa || []),
                  _uxa.push([
                    'afterPageView',
                    function () {
                      disableCallback ||
                        ((disableCallback = !0),
                        window.CS_CONF &&
                          ((CS_CONF.integrations = CS_CONF.integrations || []),
                          CS_CONF.integrations.push('Adobe Analytics')));
                    },
                  ]);
                var cn1 = '_cs_mk',
                  cookies = '; ' + document.cookie;
                if (cookies) {
                  var getCookie1 = cookies.split('; ' + cn1 + '='),
                    getCookie2 = cookies.split('; _cs_id=');
                  if (getCookie1.length > 1 && getCookie2.length > 1) return;
                  function init (cookieValue) {
                    var cmk = Math.random() + '_' + Date.now();
                    cookieValue && (cmk = cookieValue), (s_att.eVar103 = cmk);
                    var tld = (function () {
                        for (
                          var i = 0,
                            domain = document.domain,
                            p = domain.split('.'),
                            s = '_gd' + new Date().getTime();
                          i < p.length - 1 && -1 == document.cookie.indexOf(s + '=' + s);

                        )
                          (domain = p.slice(-1 - ++i).join('.')),
                            (document.cookie = s + '=' + s + ';domain=' + domain + ';');
                        return (
                          (document.cookie =
                            s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + domain + ';'),
                          domain
                        );
                      })(),
                      now = new Date(),
                      time = now.getTime();
                    (time += 1800000),
                      now.setTime(time),
                      (document.cookie =
                        cn1 +
                        '=' +
                        cmk +
                        '; expires=' +
                        now.toUTCString() +
                        ';path=/;domain=' +
                        tld),
                      _uxa.push(['trackDynamicVariable', { key: 'csMatchingKey', value: cmk }]);
                  }
                  if (1 == getCookie1.length) init();
                  else {
                    var getCookieValue = '';
                    getCookie1 && (getCookieValue = getCookie1[1].split(';')[0]),
                      init(getCookieValue);
                  }
                }
              }
            }),
            (s_att.partnerDFACheck = new Function(
              'cfg',
              "var s=this,c=cfg.visitCookie,src=cfg.clickThroughParam,scp=cfg.searchCenterParam,p=cfg.newRsidsProp,tv=cfg.tEvar,dl=',',cr,nc,q,g,gs,i,j,k,fnd,v=1,t=new Date,cn=0,ca=new Array,aa=new Array,cs=new Array;t.setTime(t.getTime()+1800000);cr=s.c_r(c);if(cr){v=0;}ca=s.split(cr,dl);if(s.un)aa=s.split(s.un,dl);else aa=s.split(s.account,dl);for(i=0;i<aa.length;i++){fnd = 0;for(j=0;j<ca.length;j++){if(aa[i] == ca[j]){fnd=1;}}if(!fnd){cs[cn]=aa[i];cn++;}}if(cs.length){for(k=0;k<cs.length;k++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;s.vpr(p,nc);v=1;}if(s.wd)q=s.wd.location.search.toLowerCase();else q=s.w.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf('&'+src.toLowerCase()+'=');gs=(scp)?q.indexOf('&'+scp.toLowerCase()+'='):-1;if(g>-1){s.vpr(p,cr);v=1;}else if(gs>-1){v=0;s.vpr(tv,'SearchCenter Visitors');}if(!s.c_w(c,cr,t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}return v>=1;"
            )),
            (s_att.vpr = new Function(
              'vs',
              'v',
              "if(typeof(v)!='undefined' && vs){var s=this; eval('s_att.'+vs+'=\"'+v+'\"')}"
            )),
            (s_att.split = new Function(
              'l',
              'd',
              'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
            )),
            (s_att.repl = new Function(
              'x',
              'o',
              'n',
              'var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x'
            )),
            window.location.host.toLowerCase().indexOf('signin.att.com') < 0 &&
              window.location.host.toLowerCase().indexOf('signin.stage.clogin.att.com') < 0 &&
              window.location.host.toLowerCase().indexOf('signin.test.clogin.att.com') < 0 &&
              window.location.host.toLowerCase().indexOf('signin.dev.clogin.att.com') < 0)
          ) {
            var dfaConfig = {
              CSID: '',
              SPOTID: '6100125',
              tEvar: 'eVar241',
              errorEvar: 'eVar244',
              timeoutEvent: 'event483',
              requestURL:
                'http://fls.doubleclick.net/json?spot=[SPOTID]&src=[CSID]&var=[VAR]&host=integrate.112.2o7.net%2Fdfa_echo%3Fvar%3D[VAR]%26AQE%3D1%26A2S%3D1&ord=[RAND]',
              maxDelay: '750',
              visitCookie: 's_dfa',
              clickThroughParam: 'source',
              searchCenterParam: void 0,
              newRsidsProp: void 0,
            };
            s_att.loadModule('Integrate'),
              (s_att.maxDelay = dfaConfig.maxDelay),
              (s_att.Integrate.onLoad = function (s, m) {
                s_att.partnerDFACheck(dfaConfig) &&
                  (s_att.Integrate.add('DFA'),
                  (s_att.Integrate.DFA.tEvar = dfaConfig.tEvar),
                  (s_att.Integrate.DFA.errorEvar = dfaConfig.errorEvar),
                  (s_att.Integrate.DFA.timeoutEvent = dfaConfig.timeoutEvent),
                  (s_att.Integrate.DFA.CSID = dfaConfig.CSID),
                  (s_att.Integrate.DFA.SPOTID = dfaConfig.SPOTID),
                  s_att.Integrate.DFA.get(dfaConfig.requestURL),
                  (s_att.Integrate.DFA.setVars = function (s, p) {
                    if (window[p.VAR]) {
                      var tday = parseInt(Date.now() / 1000),
                        lstimpclk =
                          s_3_Integrate_DFA_get_0.lastimptime ||
                          s_3_Integrate_DFA_get_0.lastclktime ||
                          '',
                        diff = tday.valueOf() - lstimpclk.valueOf();
                      '' !== lstimpclk &&
                        diff / 60 / 60 < 72 &&
                        (p.ec
                          ? p.errorEvar && (s[p.errorEvar] = p.ec)
                          : (s[p.tEvar] =
                              'DFA-' +
                              (p.lis ? p.lis : 0) +
                              '-' +
                              (p.lip ? p.lip : 0) +
                              '-' +
                              (p.lastimp ? p.lastimp : 0) +
                              '-' +
                              (p.lastimptime ? p.lastimptime : 0) +
                              '-' +
                              (p.lcs ? p.lcs : 0) +
                              '-' +
                              (p.lcp ? p.lcp : 0) +
                              '-' +
                              (p.lastclk ? p.lastclk : 0) +
                              '-' +
                              (p.lastclktime ? p.lastclktime : 0)));
                    } else
                      p.timeoutEvent &&
                        (s_att.events =
                          (s_att.events && '' != s_att.events ? s_att.events + ',' : '') +
                          p.timeoutEvent);
                  }));
              });
          }
          if (
            ((s_att.storageCheck = function () {
              const $___old_030bfb04bec13c4b = {}.constructor.getOwnPropertyDescriptor(
                window,
                'sessionStorage'
              );
              try {
                if ($___old_030bfb04bec13c4b)
                  ({}.constructor.defineProperty(
                    window,
                    'sessionStorage',
                    $___stub_3ac875f7196a9c3f.sessionStorage
                  ));
                return function () {
                  if (sessionStorage && !s_att.sso && navigator.cookieEnabled) return !0;
                  navigator.cookieEnabled ||
                    -1 != document.cookie.indexOf('AMCV_55633F7A534535110A490D44') ||
                    s_att.getVisitStart() ||
                    (sessionStorage &&
                      (sessionStorage.removeItem('s_sess'), localStorage.removeItem('s_pers')));
                }.apply(this, arguments);
              } finally {
                if ($___old_030bfb04bec13c4b)
                  ({}.constructor.defineProperty(
                    window,
                    'sessionStorage',
                    $___old_030bfb04bec13c4b
                  ));
              }
            }),
            (s_att.c_dr = function (k) {
              const $___old_0e6575cd513df99b = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'sessionStorage'
                ),
                $___old_d5cd09f7ec5b4eb0 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'localStorage'
                );
              try {
                if ($___old_0e6575cd513df99b)
                  ({}.constructor.defineProperty(
                    window,
                    'sessionStorage',
                    $___stub_3ac875f7196a9c3f.sessionStorage
                  ));
                if ($___old_d5cd09f7ec5b4eb0)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_3ac875f7196a9c3f.localStorage
                  ));
                return function () {
                  var cv, tss, tls;
                  (cv = ''),
                    (tss = sessionStorage.getItem('s_sess')),
                    (tls = localStorage.getItem('s_pers'));
                  var sm = new RegExp(k + '=([^;]*)');
                  if (null != tss && tss.indexOf(k) > -1)
                    cv = s_att.Util.urlDecode(tss).match(sm)[1];
                  else if (null != tls && tls.indexOf(k) > -1) {
                    var lastIndex = (cv = s_att.Util.urlDecode(tls).match(sm)[1]).lastIndexOf('|');
                    cv = cv.substring(0, lastIndex);
                  } else 's_sess' == k ? (cv = tss) : 's_pers' == k && (cv = tls);
                  return cv;
                }.apply(this, arguments);
              } finally {
                if ($___old_0e6575cd513df99b)
                  ({}.constructor.defineProperty(
                    window,
                    'sessionStorage',
                    $___old_0e6575cd513df99b
                  ));
                if ($___old_d5cd09f7ec5b4eb0)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_d5cd09f7ec5b4eb0
                  ));
              }
            }),
            (s_att.c_dw = function (k, v, e) {
              const $___old_eb84bb2762ca3da1 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              );
              try {
                if ($___old_eb84bb2762ca3da1)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_3ac875f7196a9c3f.localStorage
                  ));
                return function () {
                  var pt,
                    st,
                    ts,
                    sm = new RegExp(k + '=[^\\s]*');
                  e
                    ? ((st = localStorage), (pt = 's_pers'))
                    : ((st = sessionStorage), (pt = 's_sess')),
                    (ts = s_att.c_r(pt)),
                    's_pers' == k || 's_sess' == k || '' == ts
                      ? st.setItem(pt, v + ';')
                      : e
                      ? ((ts =
                          null != ts && ts.indexOf(k) > -1
                            ? ts
                                .split(sm)
                                .join(k + '=' + s_att.Util.urlEncode(v) + '|' + e.getTime() + '; ')
                            : ts + k + '=' + s_att.Util.urlEncode(v) + '|' + e.getTime() + '; '),
                        st.setItem(pt, ts))
                      : e ||
                        ((ts =
                          null != ts && ts.indexOf(k) > -1
                            ? ts.split(sm).join(k + '=' + s_att.Util.urlEncode(v) + '; ')
                            : ts + k + '=' + s_att.Util.urlEncode(v) + '; '),
                        st.setItem(pt, ts));
                }.apply(this, arguments);
              } finally {
                if ($___old_eb84bb2762ca3da1)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_eb84bb2762ca3da1
                  ));
              }
            }),
            !s_att.__ccucr)
          ) {
            (s_att.c_rr = s_att.c_r),
              (s_att.__ccucr = !0),
              (s_att.c_rspers = function () {
                var cv = this.c_rr('s_pers'),
                  date = new Date().getTime(),
                  expd = null,
                  cvarr = [],
                  vcv = '';
                if (!cv) return vcv;
                for (var i = 0, l = (cvarr = cv.split(';')).length; i < l; i++)
                  (expd = cvarr[i].match(/\|([0-9]+)$/)) &&
                    parseInt(expd[1]) >= date &&
                    (vcv += cvarr[i] + ';');
                return vcv;
              }),
              (s_att.c_r = function (k) {
                var i,
                  m,
                  e,
                  s = this,
                  v = (new Date(), s.c_rr(k)),
                  c = s.c_rspers();
                return (
                  v ||
                  ((k = s.Util.urlDecode(k)),
                  (m =
                    (i = (c = (i = c.indexOf(' ' + k + '=')) < 0 ? s.c_rr('s_sess') : c).indexOf(
                      ' ' + k + '='
                    )) < 0
                      ? i
                      : c.indexOf('|', i)),
                  (e = i < 0 ? i : c.indexOf(';', i)),
                  (m = m > 0 ? m : e),
                  (v =
                    i < 0
                      ? ''
                      : s.Util.urlDecode(c.substring(i + 2 + k.length, m < 0 ? c.length : m))))
                );
              }),
              s_att.storageCheck() &&
                ((s_att.osc = s_att.c_r('s_sess')),
                (s_att.opc = s_att.c_r('s_pers')),
                (s_att.c_r = s_att.c_dr));
          }
          if (!s_att.__ccucw) {
            if (
              ((s_att.c_wr = s_att.c_w),
              (s_att.__ccucw = !0),
              (s_att.c_w = function (k, v, e) {
                var pv,
                  sv,
                  i,
                  t,
                  s = this,
                  d = new Date(),
                  ht = 0,
                  pc = 0,
                  sc = 0;
                if (
                  (d.setTime(d.getTime() - 60000),
                  s.c_rr(k) && s.c_wr(k, '', d),
                  (k = s.Util.urlEncode(k)),
                  (i = (pv = s.c_rspers()).indexOf(' ' + k + '=')) > -1 &&
                    ((pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1)), (pc = 1)),
                  (i = (sv = s.c_rr('s_sess')).indexOf(' ' + k + '=')) > -1 &&
                    ((sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1)), (sc = 1)),
                  (d = new Date()),
                  e
                    ? e.getTime() > d.getTime() &&
                      ((pv += ' ' + k + '=' + s.Util.urlEncode(v) + '|' + e.getTime() + ';'),
                      (pc = 1))
                    : ((sv += ' ' + k + '=' + s.Util.urlEncode(v) + ';'), (sc = 1)),
                  (sv = sv.replace(/%00/g, '')),
                  (pv = pv.replace(/%00/g, '')),
                  sc && s.c_wr('s_sess', sv, 0),
                  pc)
                ) {
                  for (t = pv; t && -1 != t.indexOf(';'); ) {
                    var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
                    (t = t.substring(t.indexOf(';') + 1)), (ht = ht < t1 ? t1 : ht);
                  }
                  d.setTime(ht), s.c_wr('s_pers', pv, d);
                }
                return v == s.c_r(s.Util.urlEncode(k));
              }),
              s_att.storageCheck())
            ) {
              if ((s_att.osc && s_att.c_w('s_sess', ''), s_att.opc)) {
                var d = new Date();
                d.setTime(d.getTime() - 60000),
                  s_att.c_dw('s_pers', s_att.opc, !0),
                  s_att.c_w('s_pers', '', d);
              }
              s_att.c_w = s_att.c_dw;
            }
          }
          (s_att.getTimeParting = new Function(
            'h',
            'z',
            "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' PM';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}"
          )),
            (s_att.getValOnce = new Function(
              'v',
              'c',
              'e',
              't',
              "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v"
            )),
            (s_att.apl = new Function(
              'l',
              'v',
              'd',
              'u',
              "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l"
            )),
            (s_att.split = new Function(
              'l',
              'd',
              'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
            )),
            (s_att.getPreviousValue = new Function(
              'v',
              'c',
              'el',
              "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
            )),
            (s_att.setupLinkTrack = new Function(
              'vl',
              'c',
              'e',
              "var s=this;var cv=s.c_r(c);if(vl){var vla=vl.split(',');}if(cv!=''){var cva=s.split(cv,'^^');if(cva[1]!=''){for(x in vla){s[vla[x]]=cva[x];if(e){s.events=s.apl(s.events,e,',',2);}}}}s.c_w(c,'',0);if(typeof s.linkObject!='undefined'&&s.hbx_lt!='manual'){s.lta=[];if(typeof s.pageName!='undefined')s.lta[0]=s.pageName;if(typeof s.linkObject!=null){slo=s.linkObject;if(s.linkObject!=0){if(s.linkObject.getAttribute('name')!=null){var b=s.linkObject.getAttribute('name');if(b.indexOf('&lpos=')>-1){s.lta[3]=b.match('&lpos=([^&]*)')[1];}if(b.indexOf('&lid=')>-1){s.lta[1]=b.match('&lid=([^&]*)')[1];}}}if(typeof s.lta[1]=='undefined'){if(s.linkName!=0){s.lta[1]=s.linkName;}else if(s.linkObject!=0){if(s.cleanStr(s.linkObject.innerHTML).length>0){s.lta[1]=s.cleanStr(s.linkObject.innerHTML);}else if(s.linkObject.innerHTML.indexOf('<img')>-1){if(s.linkObject.innerHTML.indexOf('alt=')>-1){s.lta[1]=s.linkObject.innerHTML.match('alt=\"([^\"]*)')[1];}else{s.lta[1]=s.linkObject.innerHTML.match('src=\"([^\"]*)')[1]}}else{s.lta[1]=s.linkObject.innerHTML;}}}try{if(typeof s.trackLinkModule(s.linkObject)!='undefined'){s.lta[3]=s.trackLinkModule(s.linkObject);}}catch(e){}if(s.lta[1]!=null&&typeof s.lta[1]!='undefined'){if(typeof s.pageName!='undefined')s.lta[0]=s.pageName;if(s.linkObject!=0){if(s.linkObject.getAttribute('href')!=null){s.lta[2]=s.linkObject.getAttribute('href');}}}}if(s.linkType!=0){for(var x=0;x<vla.length;x++){s[vla[x]]=s.cleanStr(s.lta[x]);if(e){s.events=s.apl(s.events,e,',',2);s.linkTrackVars=s.apl(s.linkTrackVars,'events',',',2);}}s.linkTrackVars=s.apl(s.linkTrackVars,vl,',',2);}else{if(s.lta[1]){var tcv='';for(var x=0;x<s.lta.length;x++){tcv+=s.cleanStr(s.lta[x])+'^^'}s.c_w(c,tcv)}}s.lta=null;}"
            )),
            (s_att.cleanStr = function (a) {
              if (void 0 !== a && 'string' == typeof a)
                return (a = (a = (a = a.replace(/<\/?[^>]+(>|$)/g, '')).replace(
                  /^\s+|\s+$/g,
                  ''
                )).replace(/[\u2018\u2019\u201A]/g, "'"));
            }),
            (s_att.trackLinkModule = function (l) {
              for (var s = this, t = l.parentNode; t; ) {
                if (s.trackLinkModuleAttribute(t, 'data-adobetracking-title'))
                  return t.getAttribute('data-adobetracking-title');
                if (s.trackLinkModuleAttribute(t, 'data-adobetracking-id'))
                  return t.getAttribute('data-adobetracking-id');
                if (s.trackLinkModuleAttribute(t, 'id')) return t.getAttribute('id');
                t = t.parentNode;
              }
            }),
            (s_att.trackLinkModuleAttribute = function (t, a) {
              if (null != t.getAttribute(a) && '' != t.getAttribute(a)) return !0;
            }),
            (s_att.metadata = new Function(
              '',
              "var s=this;var mda;if(document.all){mda=document.all.tags('meta');}else if(document.documentElement){mda=document.getElementsByTagName('meta');}if(typeof mda!='undefined'){for(var m=0;m<mda.length;m++){var mdn=mda.item(m).name;var mdc=mda.item(m).content;if(mdn!=null){switch(mdn){case('attanalytics.hsia'):s.prop50=mdc;break;case('attanalytics.loggedin'):s.eVar3=s.prop27=mdc;break;case('attanalytics.usertvpackage'):s.prop51=mdc;break;case('attanalytics.usertype'):s.prop52=mdc;break;}}}}"
            )),
            (s_att.repl = new Function(
              'x',
              'o',
              'n',
              'var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x'
            )),
            (s_att.join = new Function(
              'v',
              'p',
              "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;"
            )),
            (s_att.crossVisitParticipation = new Function(
              'v',
              'cn',
              'ex',
              'ct',
              'dl',
              'ev',
              'dv',
              "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.length;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}if(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array();if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=arry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});if(ce)s.c_w(cn,'');return r;"
            )),
            (s_att.sessionClean = new Function(
              'v',
              "var s=this;var y=s_att.sessionExcludeStrings.split('|');for(var x=0;x<y.length;x++){var z=new RegExp(y[x]+'([^?&]*)');v=v.replace(z,'');}return v"
            )),
            (s_att.manageVars = new Function(
              'c',
              'l',
              'f',
              "var s=this,vl,la,vla;l=l?l:'';f=f?f:1;if(!s[c])return false;vl='pageName,purchaseID,channel,server,pageType,campaign,state,zip,events,products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.split(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(la[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0);return true;}else{return false;}"
            )),
            (s_att.getQueryParam = new Function(
              'p',
              'd',
              'u',
              'h',
              "var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:(s.wd?s.wd.location:window.location));while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v"
            )),
            (s_att.p_gpv = new Function(
              'k',
              'u',
              'h',
              "var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v"
            )),
            (s_att.p_gvf = new Function(
              't',
              'k',
              "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa?s.epa(v):s.unescape(v);}return''"
            )),
            (s_att.pt = new Function(
              'x',
              'd',
              'f',
              'a',
              "var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return''"
            )),
            (s_att.cleanseVars = new Function(
              't',
              "var s=this;if(s[t]&&t!='events'){s[t]=s_att.cleanStr(s[t]);}"
            )),
            (s_att.getVisitStart = new Function(
              'c',
              "var s=this,n,t=new Date;if(typeof s.callType=='function'&&s.callType()=='+')return 0;if(!c)c='s_visit';t.setTime(t.getTime()+18e5);n=s.c_r(c)?0:1;if(!s.c_w(c,1,t))s.c_w(c,1,0);if(!s.c_r(c))n=0;return n"
            )),
            (s_att.getTimeToComplete = new Function(
              'v',
              'cn',
              'e',
              "var s=this,d=new Date,x=d,k;if(!s_att.ttcr){e=e?e:0;if(v=='start'||v=='stop')s_att.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s_att.c_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s_att.c_r(cn);if(!s.c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th=3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un='hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='seconds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';"
            )),
            (s_att.performanceTiming = function (v) {
              var s = this;
              v && (s.ptv = v),
                'undefined' != typeof performance &&
                  (0 == performance.timing.loadEventEnd &&
                    (s.pi = setInterval(function () {
                      s.performanceWrite();
                    }, 250)),
                  s.ptc && 'e' != s.linkType ? (s.rfe(), (s[s.ptv] = '')) : s.performanceRead());
            }),
            (s_att.performanceWrite = function () {
              var s = this;
              performance.timing.loadEventEnd > 0 && clearInterval(s.pi);
              try {
                if ('' == s.c_r('s_ptc') && performance.timing.loadEventEnd > 0)
                  try {
                    var pt = performance.timing,
                      pta = '';
                    if (
                      ((pta = s.performanceCheck(pt.fetchStart, pt.navigationStart)),
                      (pta += '^^' + s.performanceCheck(pt.domainLookupStart, pt.fetchStart)),
                      (pta += '^^' + s.performanceCheck(pt.domainLookupEnd, pt.domainLookupStart)),
                      (pta += '^^' + s.performanceCheck(pt.connectEnd, pt.connectStart)),
                      (pta += '^^' + s.performanceCheck(pt.responseStart, pt.connectEnd)),
                      (pta += '^^' + s.performanceCheck(pt.responseEnd, pt.responseStart)),
                      (pta += '^^' + s.performanceCheck(pt.loadEventStart, pt.domLoading)),
                      (pta += '^^' + s.performanceCheck(pt.loadEventEnd, pt.loadEventStart)),
                      (pta += '^^' + s.performanceCheck(pt.loadEventEnd, pt.navigationStart)),
                      s.c_w('s_ptc', pta),
                      sessionStorage && navigator.cookieEnabled && 'undefined' != s.ptv)
                    ) {
                      for (
                        var pe = performance.getEntries(), tempPe = '', i = 0;
                        i < pe.length;
                        i++
                      )
                        (tempPe += '!'),
                          (tempPe +=
                            pe[i].name.indexOf('?') > -1 ? pe[i].name.split('?')[0] : pe[i].name),
                          (tempPe +=
                            '|' +
                            (Math.round(pe[i].startTime) / 1000).toFixed(1) +
                            '|' +
                            (Math.round(pe[i].duration) / 1000).toFixed(1) +
                            '|' +
                            pe[i].initiatorType);
                      sessionStorage.setItem('s_pec', tempPe);
                    }
                  } catch (err) {
                    return;
                  }
              } catch (err$0) {
                return;
              }
            }),
            (s_att.performanceCheck = function (a, b) {
              if (a >= 0 && b >= 0)
                return a - b < 60000 && a - b >= 0 ? ((a - b) / 1000).toFixed(3) : 600;
            }),
            (s_att.performanceRead = function () {
              var s = this;
              performance.timing.loadEventEnd > 0 && clearInterval(s.pi);
              var cv = s.c_r('s_ptc');
              if (s.pte) var ela = s.pte.split(',');
              if ('' != cv) {
                var cva = cv.split('^^');
                if ('' != cva[1])
                  for (var x = 0; x < ela.length - 1; x++)
                    s.events = s.apl(s.events, ela[x] + '=' + cva[x], ',', 2);
                s.events = s.apl(s.events, ela[ela.length - 1], ',', 2);
              }
              (s.linkTrackEvents = s.apl(s.linkTrackEvents, s.pte, ',', 2)),
                s.c_w('s_ptc', '', 0),
                sessionStorage && navigator.cookieEnabled && 'undefined' != s.ptv
                  ? ((s[s.ptv] = sessionStorage.getItem('s_pec')),
                    sessionStorage.setItem('s_pec', '', 0))
                  : (s[s.ptv] = 'sessionStorage Unavailable'),
                (s.ptc = !0);
            }),
            (s_att.rfe = function () {
              var s = this;
              if (s.events) s.events.split(',');
              var pta = s.pte.split(',');
              try {
                for (x in pta) {
                  var ptr = new RegExp(pta[x] + '[^,][0-9]*.[0-9](.*)');
                  (s.events = s.events.match(ptr)[1]), (s.contextData.events = s.events);
                }
              } catch (e) {
                return;
              }
            }),
            void 0 !== s_account &&
              (s_account.indexOf('attprod') > -1 ||
                s_account.indexOf('attdev') > -1 ||
                s_account.indexOf('attnetdev') > -1 ||
                s_account.indexOf('attnetprod') > -1) &&
              (s_att.loadModule('AudienceManagement'),
              s_att.AudienceManagement.setup({
                partner: 'att',
                containerNSID: 0,
                uuidCookie: { name: 'aam_uuid', days: 30 },
                visitorService: { namespace: '55633F7A534535110A490D44@AdobeOrg' },
              })),
            s_att.loadModule('Media'),
            document.location.host.toLowerCase().indexOf('uverse.com') > -1
              ? (s_att.Media.autoTrack = !0)
              : (s_att.Media.autoTrack = !1),
            (s_att.Media.trackVars = mediaVar),
            (s_att.Media.trackEvents = 'event60,event61,event62,event63,event64,event65,event66'),
            (s_att.Media.trackMilestones = '25,50,75,99'),
            (s_att.Media.trackSeconds = 60),
            (s_att.Media.playerName = 'AT&T Global Media Player'),
            (s_att.Media.segmentByMilestones = !0),
            (s_att.Media.trackUsingContextData = !0),
            (s_att.Media.contextDataMapping = {
              'a.media.name': 'eVar60',
              'a.contentType': 'eVar61',
              'a.media.timePlayed': 'event60',
              'a.media.view': 'event61',
              'a.media.complete': 'event62',
              'a.media.milestones': { 25: 'event64', 50: 'event63', 75: 'event65', 99: 'event66' },
            });
        }.apply(this, arguments);
      } finally {
        if ($___old_c4b26d7e5dce86e9)
          ({}.constructor.defineProperty(window, 'sessionStorage', $___old_c4b26d7e5dce86e9));
      }
    }),
      detmScriptExecutor.push('DM_PushEventHandler', function (params) {
        'undefined' == typeof detmEventHandler &&
          (detmEventHandler = new (function (ddo) {
            (this.actions = ddo.getConfig()._globalEventActions),
              (this.processor = function (event) {
                for (var action in this.actions)
                  if (action === event.eventAction) return this.actions[action].processor;
                return null;
              }),
              (this.isTimeforImpressionOff = function () {
                var istime = !1,
                  month = new Date().getUTCMonth() + 1,
                  day = new Date().getUTCDate(),
                  hour = new Date().getUTCHours();
                return (
                  new Date().getUTCMinutes(),
                  ((11 == month && day > 4 && day < 9) || (11 == month && 9 == day && hour < 8)) &&
                    (istime = !0),
                  istime
                );
              }),
              (this.handle = function (event) {
                const $___old_68f19091d3a07b2a = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'sessionStorage'
                );
                try {
                  if ($___old_68f19091d3a07b2a)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___stub_3ac875f7196a9c3f.sessionStorage
                    ));
                  return function () {
                    ddo.squawk('DM_PushEventHandler 1268', 1, 'i');
                    var ignore = !1;
                    ('myATT_GLBN_Alerts_Displayed' != event.eventCode &&
                      'myATT_GLBN_Alerts_Preview_Displayed' != event.eventCode &&
                      'myATT_GLBN_Alerts_Detail_PopUp_Displayed' != event.eventCode) ||
                      ('myATT CBO Welcome Pg' != event._evtFriendlyPageName &&
                        'eSup AT&T Support Center Pg' != event._evtFriendlyPageName &&
                        ((ignore = !0),
                        ddo.processedByDTM(event, 'Adobe'),
                        ddo.processedByDTM(event, 'WT'))),
                      (event._processedByWT = 1);
                    var exclusions = [];
                    if (document.location.hostname.indexOf('att.com') > -1)
                      for (var j = 0; j < exclusions.length; j++)
                        if (
                          document.location.pathname.indexOf(exclusions[j]) > -1 &&
                          'impression' == event.eventAction
                        ) {
                          ddo.processedByDTM(event, 'Adobe'), (ignore = !0);
                          break;
                        }
                    if (
                      ('impression' == event.eventAction &&
                        this.isTimeforImpressionOff() &&
                        (ddo.processedByDTM(event, 'Adobe'), (ignore = !0)),
                      0 == ignore)
                    )
                      switch (this.processor(event)) {
                        case 'LC':
                          ddo.setProcessedEvent(event, 'handled'),
                            detmScriptExecutor.execute('DM_Adobe_LinkClick_V2', null);
                          break;
                        case 'PV':
                          ddo.setProcessedEvent(event, 'handled'),
                            detmScriptExecutor.execute('DM_Adobe_PageView_V2', null);
                      }
                    ddo.squawk('the EventHandler direct call rule finished', 1, 'i');
                  }.apply(this, arguments);
                } finally {
                  if ($___old_68f19091d3a07b2a)
                    ({}.constructor.defineProperty(
                      window,
                      'sessionStorage',
                      $___old_68f19091d3a07b2a
                    ));
                }
              });
          })(ddo)),
          detmEventHandler.handle(params),
          document.location.href.indexOf('ordersummary.html') > -1 &&
            void 0 !== window.ddo &&
            ddo.setConsoleLog('DTM - Direct Call Rule - DM_PushEventHandler - Fired', 'DTM');
      }),
      detmScriptExecutor.push('DM_Adobe_LinkClick_V2', function (params) {
        var rtrim;
        function FeatureConverter (featureString, featureType) {
          (this.raw = featureString),
            (this.featureType = featureType),
            (this.instanceDelimiter = '|'),
            (this.fieldDelimiter = '~'),
            (this.fields = 2),
            (this.toJSON = function () {
              var features = [],
                instances = this.raw.split(this.instanceDelimiter);
              if (instances.length > 0)
                for (var i = 0; i < instances.length; i++) {
                  var fields = instances[i].split(this.fieldDelimiter);
                  if (this.fields == fields.length) {
                    var feature = {
                      number: fields[0],
                      code: fields[1],
                      featureType: this.featureType,
                    };
                    features.push(feature);
                  }
                }
              return features;
            }),
            (this.legacySplit = function () {
              var code = '',
                features = this.toJSON();
              return features.length > 0 && (code = features[0].code), code;
            }),
            (this.track = function () {
              for (
                var products = '', features = this.toJSON(), id = {}, i = 0;
                i < features.length;
                i++
              ) {
                var c = features[i].code,
                  d = features[i].featureType;
                id[c] = id[c] ? ++id[c] : 1;
              }
              for (var data in id) {
                var event = '';
                switch (d) {
                  case FeatureConverter.featureType.added:
                    (event = 'event606=' + id[data]),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event606',
                        ',',
                        2
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event606', ',', 2));
                    var instance = ';' + data + ';;;' + event + ';';
                    products = s_att.apl(products, instance, ',', 0);
                    break;
                  case FeatureConverter.featureType.removed:
                    (event = 'event607=' + id[data]),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event607',
                        ',',
                        2
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event607', ',', 2));
                    instance = ';' + data + ';;;' + event + ';';
                    products = s_att.apl(products, instance, ',', 0);
                }
              }
              return products;
            });
        }
        function DeviceConverter () {
          var devices = ['smartphone', 'tablet', 'wearable'],
            getDevice = function (devices, type) {
              for (var i = 0; i < devices.length; i++) {
                var device = devices[i];
                if (void 0 !== device.type && type === device.type.toLowerCase()) return device;
              }
              return null;
            };
          this.build = function (event) {
            var result = '';
            if (void 0 !== event && void 0 !== event.devices && void 0 !== event.devices.length)
              for (var first = !0, i = 0; i < devices.length; i++) {
                var type = devices[i],
                  device = getDevice(event.devices, type);
                null !== device &&
                  void 0 !== device.count &&
                  (first ? (first = !1) : (result += '|'), (result += device.count));
              }
            return (
              containsNothingButDelimiters(
                (result += '|' + checkGetVarValue(ddo.getVar('user.account.hboMaxPricingTier'))),
                '|'
              ) && (result = ''),
              result
            );
          };
        }
        function MgtFlowConverter () {
          var attrs = ['siteName', 'userType', 'mode', 'createFlowStep', 'feature', 'appName'];
          this.build = function (event) {
            for (var result = '', fRecord = !0, i = 0; i < attrs.length; i++) {
              var attr = attrs[i];
              if (void 0 !== event[attr])
                if ((fRecord ? (fRecord = !1) : (result += '|'), Array.isArray(event[attr])))
                  for (
                    var collection = event[attr], fField = !0, j = 0;
                    j < collection.length;
                    j++
                  ) {
                    fField ? (fField = !1) : (result += '~'), (result += collection[j]);
                  }
                else result += event[attr];
            }
            return containsNothingButDelimiters(result, '|') && (result = ''), result;
          };
        }
        function checkGetVarValue (p1, p2) {
          if (null == p1) return '';
          var r1 = p1.toString().toLowerCase() || '',
            getVar = '';
          return (
            (getVar =
              'undefined' == r1 ||
              'default' == r1 ||
              'none' == r1 ||
              'unknown' == r1 ||
              'unspecified' === r1
                ? ''
                : p1 || r1 || ''),
            void 0 === p2
              ? getVar
              : 's' == p2
              ? getVar.toString() || ''
              : 'n' == p2
              ? parseInt(getVar) || ''
              : void 0
          );
        }
        function processEventItems (evt, pageOwnership) {
          var products = '',
            crpProds = '',
            rrpProds = '',
            nrpProds = '';
          if (void 0 !== evt && void 0 !== evt.items)
            for (var i = 0; i < evt.items.length; i++) {
              var item = evt.items[i],
                itemSku = item.itemSku || 'Product Not Set in PDL',
                itemQty = item.itemQty || '',
                varList = '',
                price = '',
                cartQty = '',
                discountPrice = '',
                installPrice = '',
                eventList = [],
                discountAmount = item.discountAmount || '';
              '' !== discountAmount &&
                '0' !== discountAmount &&
                '0.00' !== discountAmount &&
                ((discountPrice = 'event58=' + item.discountAmount),
                eventList.push(discountPrice),
                (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event58', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event58', ',', 2)));
              var installFee = item.installationFee || '';
              '' !== installFee &&
                '0' !== installFee &&
                '0.00' !== installFee &&
                ((installPrice = 'event94=' + installFee),
                eventList.push(installPrice),
                (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event94', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event94', ',', 2)));
              var parentSku = item.parentSku || '';
              parentSku = parentSku.toLowerCase();
              var tempSuccessFlagCheck = evt.successFlag || '',
                oneTimePrice = item.itemOneTimePrice || item.basePrice || '',
                recurring = item.itemRecurringPrice || item.priceMonthly || '',
                temp204 =
                  (item.pricingMethod || item.offerId || '') +
                  '~' +
                  (item.macd || '') +
                  '~' +
                  (item.itemUpgradeTypeSelected || '') +
                  '~' +
                  (item.existingCustItemStatus || item.itemState || ''),
                cartEventProcessor = new ShoppingCartEventProcessor(evt);
              if (
                cartEventProcessor.isSuccessfulPurchase() ||
                cartEventProcessor.isSuccessfulUpgrade()
              ) {
                '' != recurring &&
                  '0' !== recurring &&
                  '0.00' !== recurring &&
                  ((price = 'event15=' + recurring),
                  eventList.push(price),
                  (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event15', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event15', ',', 2)));
                var firstBill = item.priceFirstBill || '';
                '' != firstBill &&
                  '0' !== firstBill &&
                  '0.00' !== firstBill &&
                  ((price = 'event6=' + firstBill),
                  eventList.push(price),
                  (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event6', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event6', ',', 2))),
                  '~~~' !== temp204 &&
                    (varList = s_att.apl(varList, 'eVar204=' + temp204, '|', 1));
              }
              var temp22 =
                checkGetVarValue(item.promotionCode) || checkGetVarValue(item.promoCode) || '';
              '' != temp22 && (varList = s_att.apl(varList, 'eVar22=' + temp22, '|', 1));
              var eventCode = evt.eventCode || '';
              '' != eventCode &&
                '1' == tempSuccessFlagCheck &&
                (cartEventProcessor.isSuccessfulAdd()
                  ? ('~~~' !== temp204 &&
                      (varList = s_att.apl(varList, 'eVar204=' + temp204, '|', 1)),
                    '' != itemQty &&
                      ((cartQty = 'event52=' + itemQty),
                      eventList.push(cartQty),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event52',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event52', ',', 2))),
                    '' != cartQty && (varList = s_att.apl(varList, 'eVar190=' + itemQty, '|', 1)))
                  : cartEventProcessor.isSuccessfulRemove()
                  ? ('' != itemQty &&
                      ((cartQty = 'event53=' + itemQty),
                      eventList.push(cartQty),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event53',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event53', ',', 2))),
                    '' != cartQty && (varList = s_att.apl(varList, 'eVar190=' + itemQty, '|', 1)))
                  : '' != itemQty &&
                    ((cartQty = 'event21=' + itemQty),
                    eventList.push(cartQty),
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event21', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event21', ',', 2))),
                'string' == typeof parentSku &&
                  '' !== parentSku &&
                  (varList = s_att.apl(varList, 'eVar38=' + parentSku, '|', 1)),
                cartEventProcessor.isSuccessfulAdd() &&
                  ('Business' == pageOwnership
                    ? (varList =
                        'undefined' !== item.addToCartMethod && '' !== item.addToCartMethod
                          ? s_att.apl(varList, 'eVar26=' + item.addToCartMethod, '|', 1)
                          : s_att.apl(varList, 'eVar26=Add to Cart Method Not Set in PDL', '|', 1))
                    : 'undefined' !== item.addToCartMethod &&
                      '' !== item.addToCartMethod &&
                      (varList = s_att.apl(varList, 'eVar26=' + item.addToCartMethod, '|', 1)))),
                '1' == (item.preOrderFlag || '') &&
                  (eventCode.indexOf('eBiz_Order_Started') > -1 ||
                    eventCode.indexOf('eBiz_Configuration Save_Clicked') > -1 ||
                    eventCode.indexOf('eBiz_Configuration_Submitted') > -1 ||
                    eventCode.indexOf('eBiz_Edit Order_Clicked') > -1 ||
                    eventCode.indexOf('eBiz_Edit Service Arrangement_Clicked') > -1 ||
                    eventCode.indexOf('eBiz_Edit Contact_Information_Clicked') > -1 ||
                    eventCode.indexOf('eBiz_Order_Reviewed') > -1 ||
                    eventCode.indexOf('eBiz_Order_Confirmed') > -1 ||
                    eventCode.indexOf('eBiz_Cancel Order Submission_Clicked') > -1 ||
                    eventCode.indexOf('eBiz_Cancel Order Submission_Confirmed') > -1 ||
                    eventCode.indexOf('eBiz_Order Cancel_Clicked') > -1 ||
                    eventCode.indexOf('eBiz_Order_Cancelled') > -1 ||
                    eventCode.indexOf('eBiz_Order_Submit') > -1) &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event95', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event95', ',', 1)));
              var eventListStr = '';
              eventList.length > 0 && (eventListStr = eventList.join('|'));
              var skuDetails =
                ';' +
                itemSku +
                ';' +
                itemQty +
                ';' +
                oneTimePrice +
                ';' +
                eventListStr +
                ';' +
                varList;
              products = s_att.apl(products, skuDetails, ',', 1);
            }
          if (void 0 !== evt && void 0 !== evt.currentRatePlans) {
            for (i = 0; i < evt.currentRatePlans.length; i++) {
              var crp = evt.currentRatePlans[i],
                crpSku = crp.soc || 'Product Not Set in PDL',
                crpList = [],
                mrc = crp.mrc || '';
              '' !== mrc &&
                ((mrc1 = 'event626=1|event627=' + mrc),
                crpList.push(mrc1),
                (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event626', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event626', ',', 2)),
                (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event627', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event627', ',', 2)));
              var crpListStr = '';
              crpList.length > 0 && (crpListStr = crpList.join('|')),
                (crpProds += ';' + crpSku + ';1;;' + crpListStr + ';');
            }
            products = s_att.apl(products, crpProds, ',', 1);
          }
          if (void 0 !== evt && void 0 !== evt.recommendedRatePlans) {
            for (i = 0; i < evt.recommendedRatePlans.length; i++) {
              var rrp = evt.recommendedRatePlans[i],
                rrpSku = rrp.soc || 'Product Not Set in PDL',
                rrpList = [],
                mrc2 = rrp.mrc || '';
              '' !== mrc2 &&
                ((mrc3 = 'event628=1|event629=' + mrc2),
                rrpList.push(mrc3),
                (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event628', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event628', ',', 2)),
                (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event629', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event629', ',', 2)));
              var rrpListStr = '';
              rrpList.length > 0 && (rrpListStr = rrpList.join('|')),
                (rrpProds += ';' + rrpSku + ';1;;' + rrpListStr + ';');
            }
            products = s_att.apl(products, rrpProds, ',', 1);
          }
          if (void 0 !== evt && void 0 !== evt.newRatePlans) {
            for (i = 0; i < evt.newRatePlans.length; i++) {
              var nrp = evt.newRatePlans[i],
                nrpSku = nrp.soc || 'Product Not Set in PDL',
                nrpList = [],
                mrc4 = nrp.mrc || '';
              '' !== mrc4 &&
                ((mrc5 = 'event630=1|event631=' + mrc4),
                nrpList.push(mrc5),
                (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event630', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event630', ',', 2)),
                (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event631', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event631', ',', 2)));
              var nrpListStr = '';
              nrpList.length > 0 && (nrpListStr = nrpList.join('|')),
                (nrpProds += ';' + nrpSku + ';1;;' + nrpListStr + ';');
            }
            products = s_att.apl(products, nrpProds, ',', 1);
          }
          return products;
        }
        function ShoppingCartEventProcessor (event) {
          (this.event = event),
            (this.isSuccessful = void 0 !== event.successFlag && '1' == event.successFlag),
            (this.eventCode = event.eventCode || ''),
            (this.isEventCodeOneOf = function (eventCodes) {
              value = !1;
              for (var i = 0; i < eventCodes.length; i++)
                if (eventCodes[i] == this.eventCode) {
                  value = !0;
                  break;
                }
              return value;
            }),
            (this.isSuccessfulAdd = function () {
              return this.isSuccessful && this.isEventCodeOneOf(this.addEventCodes);
            }),
            (this.isSuccessfulPlan = function () {
              return this.isSuccessful && this.isEventCodeOneOf(this.planEventCodes);
            }),
            (this.isSuccessfulCheckout = function () {
              return this.isSuccessful && this.isEventCodeOneOf(this.checkoutEventCodes);
            }),
            (this.isSuccessfulUpgrade = function () {
              return this.isSuccessful && this.isEventCodeOneOf(this.deviceUpgradeEventCodes);
            }),
            (this.isSuccessfulModifiedPlan = function () {
              return this.isSuccessful && this.isEventCodeOneOf(this.modifiedPlanEventCodes);
            }),
            (this.isSuccessfulLegacyFeature = function () {
              var value = !1;
              return (
                void 0 === this.event.featureDetails &&
                  (value = this.isEventCodeOneOf(this.legacyFeatureEventCodes)),
                value
              );
            }),
            (this.isSuccessfulFeature = function () {
              var value = !1;
              return (
                void 0 !== this.event.featureDetails &&
                  (value = this.isEventCodeOneOf(this.featureEventCodes)),
                value
              );
            }),
            (this.isSuccessfulPurchase = function () {
              return this.isSuccessful && this.isEventCodeOneOf(this.purchaseEventCodes);
            }),
            (this.isSuccessfulRemove = function () {
              return this.isSuccessful && this.isEventCodeOneOf(this.removeEventCodes);
            }),
            (this.isSuccessfulRetrieve = function () {
              return this.isSuccessful && this.isEventCodeOneOf(this.retrieveEventCodes);
            }),
            (this.isSuccessfulSave = function () {
              return this.isSuccessful && this.isEventCodeOneOf(this.saveEventCodes);
            }),
            (this.isSuccessfulView = function () {
              return this.isSuccessful && this.isEventCodeOneOf(this.viewEventCodes);
            }),
            (this.isSuccessfulCartRetrieve = function () {
              return this.isEventCodeOneOf(this.cartRetrievedCodes);
            }),
            (this.processFeatureDetails = function () {
              var products = '';
              if (void 0 !== this.event.featureDetails && this.event.featureDetails.length > 0) {
                for (var i = 0; i < this.event.featureDetails.length; i++) {
                  var featureDetail = this.event.featureDetails[i],
                    eVar212 =
                      (featureDetail.featureDeviceType || '') +
                      '~' +
                      (featureDetail.featureEffectiveDateOption || '') +
                      '~' +
                      (featureDetail.featureEndDateOption || '') +
                      '~' +
                      (featureDetail.featureStatusCode || '');
                  eVar212 = containsNothingButDelimiters(eVar212, '~') ? '' : 'eVar212=' + eVar212;
                  var evt = '';
                  switch (featureDetail.featureAction || '') {
                    case 'Select':
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event600',
                        ',',
                        1
                      )),
                        (s_att.events = s_att.apl(s_att.events, 'event600', ',', 1)),
                        (evt = 'event600');
                      break;
                    case 'Add':
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event606',
                        ',',
                        1
                      )),
                        (s_att.events = s_att.apl(s_att.events, 'event606', ',', 1)),
                        (evt = 'event606|event15=' + (featureDetail.featurePrice || ''));
                      break;
                    case 'Remove':
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event607',
                        ',',
                        1
                      )),
                        (s_att.events = s_att.apl(s_att.events, 'event607', ',', 1)),
                        (evt = 'event607|event15=' + (featureDetail.featurePrice || ''));
                      break;
                    default:
                      console.log(
                        "DM_Adobe_LinkClick_V2: featureDetails has item with unknown featureAction: '" +
                          featureDetail.featureAction +
                          "'"
                      );
                  }
                  var instance =
                    ';' + (featureDetail.featureSoc || '') + ';1;;' + evt + ';' + eVar212;
                  products = s_att.apl(products, instance, ',', 0);
                }
                void 0 !== s_att.products && s_att.products.length > 0
                  ? (s_att.products = s_att.apl(s_att.products, products, ',', 1))
                  : (s_att.products = products);
              }
            });
        }
        function containsNothingButDelimiters (str, delimiter) {
          var value = !1;
          if ('string' == typeof str) {
            for (
              var tokens = ddo.ext.strSplit(str, delimiter), emptyCount = 0, i = 0;
              i < tokens.length;
              i++
            ) {
              if ('' != tokens[i].trim()) return !1;
              ++emptyCount;
            }
            value = tokens.length > 0 && emptyCount == tokens.length;
          }
          return value;
        }
        function SetBillingAccountNumber (evt) {
          var properties = [
            {
              attrs: [
                { name: '_evtAccountInFocusIdentifier', type: 'auto' },
                { name: 'user.account.accountInFocusIdentifier', type: 'canonical' },
              ],
            },
            { attrs: [{ type: 'canonical', name: 'user.login.type' }] },
            { attrs: [{ type: 'canonical', name: 'user.account.ban' }] },
            { attrs: [{ type: 'canonical', name: 'user.account.uBan' }] },
            { attrs: [{ type: 'canonical', name: 'user.account.dBan' }] },
            { attrs: [{ type: 'canonical', name: 'user.account.directvBan' }] },
            { attrs: [{ type: 'canonical', name: 'user.account.wirelineBtn' }] },
            {
              attrs: [
                { name: 'acctNum', type: 'auto' },
                { name: 'selectedAccountIdentifier', type: 'auto' },
              ],
            },
          ];
          s_att.eVar30 = '';
          for (var attr = '', value = '', found = !1, i = 0; i < properties.length; i++) {
            for (var property = properties[i], j = 0; j < property.attrs.length; j++) {
              switch ((attr = property.attrs[j]).type) {
                case 'auto':
                  value = (void 0 !== evt && evt[attr.name]) || '';
                  break;
                case 'canonical':
                  (value = checkGetVarValue(ddo.getVar(attr.name))),
                    'user.login.type' === attr.name && 'CTN' != value && (value = '');
              }
              if ('' !== value && 'Default' !== value && 'UNKNOWN' !== value) {
                found = !0;
                break;
              }
            }
            if (found) break;
          }
          var event = '';
          if (found)
            switch ('canonical' === attr.type ? attr.name.split('.')[2] : attr.name) {
              case 'wirelineBtn':
                event = 'event555';
                break;
              case 'type':
                if ('CTN' === value) {
                  var wAN = checkGetVarValue(ddo.getVar('user.account.wirelessAccountNumber'));
                  wAN.length > 0 && (s_att.eVar30 = wAN);
                }
                event = 'event554';
                break;
              case 'ban':
                (s_att.eVar30 = value), (event = 'event550');
                break;
              case 'uBan':
                (s_att.eVar30 = value), (event = 'event551');
                break;
              case 'dBan':
                (s_att.eVar30 = value), (event = 'event552');
                break;
              case 'directvBan':
                (s_att.eVar30 = value), (event = 'event553');
                break;
              case '_evtAccountInFocusIdentifier':
              case 'accountInFocusIdentifier':
                s_att.eVar30 = value;
                break;
              case 'acctNum':
              case 'selectedAccountIdentifier':
                s_att.eVar30 = value;
                break;
              default:
                (s_att.eVar30 = value), (event = 'event556');
            }
          if (s_att.eVar30.length > 0) {
            var idx = -1,
              idxTilde = s_att.eVar30.indexOf('~'),
              idxPipe = s_att.eVar30.indexOf('|');
            switch (
              (idxTilde > -1 && (idx = idxTilde),
              idxPipe > -1 && idx > idxPipe && (idx = idxPipe),
              idx)
            ) {
              case 0:
                s_att.eVar30 = '';
                break;
              case -1:
                break;
              default:
                s_att.eVar30 = s_att.eVar30.substring(0, idx);
            }
          }
          '' !== event &&
            ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, event, ',', 2)),
            (s_att.events = s_att.apl(s_att.events, event, ',', 2)));
        }
        function removeQueryString (url) {
          var idx = void 0 !== url ? url.indexOf('?') : -1;
          return idx > -1 && (url = url.substring(0, idx)), url;
        }
        ddo.squawk('DM_Adobe LinkClick V2 Ver: 1268 ', 1, 'i'),
          String.prototype.trim ||
            ((rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
            (String.prototype.trim = function () {
              return this.replace(rtrim, '');
            })),
          (FeatureConverter.featureType = { added: 1, removed: 0 }),
          (ShoppingCartEventProcessor.prototype.planEventCodes = [
            'myATT_SVCS_System_ManageMyDevice_Display',
            'myATT_SVCS_System_WirelessHub_Display',
            'myATT_SVCS_System_ChangePlan_Configurator_Display',
            'myATT_SVCS_ChangePlan_Review_Submit',
            'myATT_SVCS_ChangePlan_Submit',
          ]),
          (ShoppingCartEventProcessor.prototype.addEventCodes = [
            'POS_Cart_Add_Submit',
            'HRock_Cart_Add_Submit',
            'Mbl-HRock_Cart_Add_Submit',
            'HRock_Cart_Update_Submit',
            'Mbl-HRock_Cart_Update_Submit',
            'HRock_Cart_Replace_Submit',
            'Mbl-HRock_Cart_Replace_Submit',
            'HRock_Cart_Add_PreOrder_Submit',
            'Mbl-HRock_Cart_Add_PreOrder_Submit',
            'HRUverse_AddtoCart_Continue',
            'HRUverse_Cart_Add_Ins&Equip_Submit',
            'HRUverse_Cart_Add_TV_Submit',
            'HRUverse_Cart_Add_VOIP_Submit',
            'HRUverse_Cart_Add_HSIA_Submit',
            'HRUverse_ReplaceInCart_Continue',
            'DS_Cart_Add_Submit',
            'DS_Cart_Update_Submit',
            'DS_Cart_Replace_Submit',
            'BC_Cart_Add_Submit',
            'DS_Add_To_Cart_Submit',
            'DS_Upgrade_Cart_Add_Submit',
            'SIMP_WLS_Cart_Add_Submit',
          ]),
          (ShoppingCartEventProcessor.prototype.modifiedPlanEventCodes = [
            'DTVNow_Modify_Plan_Continue',
            'ATTTVNow_Modify_Plan_Continue',
          ]),
          (ShoppingCartEventProcessor.prototype.deviceUpgradeEventCodes = [
            'DS_Upgrade_Submit',
            'DS_Upgrade_Option_Submit',
          ]),
          (ShoppingCartEventProcessor.prototype.checkoutEventCodes = [
            'HRock_Cart_Submit',
            'Mbl-HRock_Cart_Submit',
            'HRock_Cart_ExpressCheckOut_Submit',
            'Mbl-HRock_Cart_ExpressCheckOut_Submit',
            'HRUverse_Cart_Submit',
            'DS_Cart_Submit',
            'eBiz_Order_Submit',
            'DTVNow_CheckOut_Order_Submit',
            'DS_Upgrade_Checkout_Submit',
            'ATTTVNow_CheckOut_Order_Submit',
          ]),
          (ShoppingCartEventProcessor.prototype.legacyFeatureEventCodes = [
            'myATT_SVCS_FeaturesAdd_Sub',
            'Mbl-myATT_FeaturesRemove_SUB',
            'Mbl-myATT_FeaturesAdd_SUB',
            'A_FTRS_REMOVE_FEATURES_SUB',
            'A_FTRS_ADD_FEATURES_SUB',
          ]),
          (ShoppingCartEventProcessor.prototype.featureEventCodes = [
            'myATT_SVCS_FeatureDetails_Sub',
            'myATT_SVCS_FeaturesReview_Sub',
            'myATT_SVCS_FeaturesAdd_Sub',
            'myATT_SVCS_FeaturesRemove_Sub',
          ]),
          (ShoppingCartEventProcessor.prototype.purchaseEventCodes = [
            'myATT_SVCS_FeaturesAdd_Sub',
            'HRUverse_System_Order_Confirmed',
            'HRUVerse_System_Order_Confirmed',
            'HRock_System_Order_Confirmed',
            'Move_My_Service_System_Order_Confirmed',
            'HRUverse_System_Unity_Confirmed',
            'POS_System_Order_Confirmed',
            'eBiz - Order Confirmation',
            'EAP_Order_Submit',
            'DS_System_Order_Confirmed',
            'DS_System_Upgrade_Order_Confirmed',
            'DS_System_TV_Order_Confirmed',
            'eBiz_Order_Confirmed',
            'DTVNow_System_Order_Confirmed',
            'BC_System_Order_Confirmed',
            'BC_Increase_Licenses_Confirmed',
            'DTVNow_Modify_Plan_Submit',
            'myATT_AddRemoveService_Submit',
            'ATTTVNow_System_Order_Confirmed',
            'ATTTVNow_Modify_Plan_Submit',
            'myATT_MyServices_RetentionOffer_Accept_Submit',
            'SIMP_WLS_Order_Confirmed',
          ]),
          (ShoppingCartEventProcessor.prototype.removeEventCodes = [
            'POS_Cart_Remove_Submit',
            'POS_Cart_Edit_Submit',
            'HRock_Cart_Remove_Submit',
            'Mbl-HRock_Cart_Remove_Submit',
            'HRUverse_Cart_Remove_Submit',
            'SIMP_WLS_Cart_Removed_Submit',
          ]),
          (ShoppingCartEventProcessor.prototype.retrieveEventCodes = [
            'POS_Cart_Retrieve_Submit',
            'HRock_Cart_RetrieveCart_Submit',
            'Mbl-HRock_Cart_RetrieveCart_Submit',
            'HRUverser_Cart_Retrieve_Cart_Submit',
            'DS_Cart_RetrieveCart_Submit',
            'DS_Save_Cart_Submit',
          ]),
          (ShoppingCartEventProcessor.prototype.saveEventCodes = [
            'POS_Cart_Save_Submit',
            'HRock_Cart_SaveCart_Submit',
            'Mbl-HRock_Cart_SaveCart_Submit',
            'HRUVerse_Cart_SaveCart_Submit',
            'DS_Cart_SaveCart_Submit',
            'DS_Retrieve_Cart_Submit',
          ]),
          (ShoppingCartEventProcessor.prototype.viewEventCodes = [
            'POS_View_Cart_Submit',
            'HRUverse_System_Cart_Summary_Displayed',
            'myATT_SVCS_FeatureDetails_Sub',
            'DS_System_Cart_Summary_Displayed',
            'DS_System_Cart_Summary_Display',
          ]),
          (ShoppingCartEventProcessor.prototype.cartRetrievedCodes = [
            'DS_System_SavedCart_Retrieved',
            'HRock_System_SavedCart_Retrieved',
            'Mbl-HRock_System_SavedCart_Retrieved',
          ]),
          (s_att.linkTrackVars +=
            ',list1,list2,list3,campaign,server,products,purchaseID,transactionID,prop1,prop4,prop5,prop8,prop9,prop10,prop12,prop13,prop15,prop17,prop18,prop19,prop20,prop21,prop22,prop23,prop24,prop26,prop27,prop29,prop33,prop34,prop35,prop36,prop37,prop40,prop41,prop42,prop46,prop48,prop49,prop50,prop51,prop52,prop54,prop55,prop56,prop60,prop61,prop62,prop67,prop68,eVar3,eVar4,eVar5,eVar6,eVar7,eVar9,eVar10,eVar13,eVar14,eVar15,eVar16,eVar18,eVar19,eVar20,eVar21,eVar22,eVar23,eVar25,eVar26,eVar27,eVar29,eVar30,eVar31,eVar33,eVar34,eVar35,eVar36,eVar37,eVar38,eVar39,eVar41,eVar42,eVar47,eVar48,eVar49,eVar51,eVar52,eVar53,eVar54,eVar55,eVar56,eVar57,eVar58,eVar59,eVar60,eVar61,eVar62,eVar63,eVar68,eVar71,eVar72,eVar73,eVar74,eVar75,eVar76,eVar77,eVar78,eVar79,eVar81,eVar84,eVar85,eVar86,eVar87,eVar88,eVar91,eVar92,eVar94,eVar95,eVar96,eVar99,eVar100,eVar101,eVar102,eVar151,eVar161,eVar162,eVar163,eVar164,eVar165,eVar166,eVar167,eVar168,eVar169,eVar170,eVar172,eVar183,eVar184,eVar186,eVar187,eVar188,eVar190,eVar191,eVar192,eVar193,eVar196,eVar201,eVar202,eVar203,eVar204,eVar205,eVar206,eVar207,eVar208,eVar211,eVar212,eVar213,eVar214,eVar215,eVar216,eVar217,eVar221,eVar222,eVar223,eVar226,eVar227,eVar228,eVar229,eVar230,eVar235,eVar237,eVar238,eVar240,eVar241,eVar243,eVar249,eVar250'),
          (s_att.server = ddo.getVar('page.location.domain')),
          (tempPageOwnership = checkGetVarValue(ddo.getVar('page.category.pageOwnership'))),
          'Business' == tempPageOwnership && -1 == document.location.host.indexOf('att.net')
            ? ((s_att.prop1 =
                checkGetVarValue(ddo.getVar('page.pageInfo.appCode').toLowerCase()) ||
                checkGetVarValue(ddo.getVar('page.category.siteSection'))),
              (s_att.prop2 =
                s_att.prop1 + '|' + checkGetVarValue(ddo.getVar('page.category.siteSubSection1'))),
              (s_att.prop3 =
                s_att.prop2 + '|' + checkGetVarValue(ddo.getVar('page.category.siteSubSection2'))))
            : ((s_att.prop1 = checkGetVarValue(ddo.getVar('page.category.siteSection'))),
              (s_att.prop2 = checkGetVarValue(ddo.getVar('page.category.siteSubSection1'))),
              (s_att.prop3 = checkGetVarValue(ddo.getVar('page.category.siteSubSection2')))),
          1 == checkGetVarValue(ddo.getVar('page.attributes.zenkeyIdFlag')) &&
            ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event625', ',', 1)),
            (s_att.events = s_att.apl(s_att.events, 'event625', ',', 1))),
          (s_att.linkTrackVars = s_att.apl(s_att.linkTrackVars, 'prop2,prop3', ',', 1)),
          (s_att.prop13 = ddo.getVar('user.tech.ipAddress')),
          (s_att.prop24 = checkGetVarValue(ddo.getVar('page.pageInfo.pageTitle'))),
          (s_att.prop26 = checkGetVarValue(
            (function () {
              var webDesignFlag = '',
                expType = '';
              return (
                'undefined' != typeof ddo &&
                  ((webDesignFlag = ddo.getVar('page.pageInfo.responsiveWebDesignFlag')),
                  (viewedUIExperience = ddo.getVar('page.pageInfo.viewedUIExperience')),
                  (wdf = '0' != webDesignFlag ? 'Responsive' : 'Nonresponsive'),
                  (expType = wdf + '|' + viewedUIExperience)),
                expType
              );
            })()
          )),
          'Business' !== tempPageOwnership &&
            (s_att.prop35 = checkGetVarValue(ddo.getVar('page.pageInfo.DTMPresent'))),
          (s_att.prop48 = checkGetVarValue(ddo.getVar('user.uuid'))),
          (s_att.prop62 = checkGetVarValue(ddo.getVar('page.pageInfo.lineOfBusiness')));
        var tempULid = checkGetVarValue(ddo.getVar('user.login.id'));
        ((s_att.eVar3 = tempULid.toLowerCase() || ''),
        (s_att.eVar19 = ddo.getVar('edm.toolName')),
        (s_att.eVar29 = checkGetVarValue(ddo.getVar('user.account.fan'))),
        SetBillingAccountNumber(),
        (s_att.eVar31 = checkGetVarValue(ddo.getVar('user.account.ctn'))),
        (s_att.eVar33 = ddo.getVar('edm.socialSite')),
        (s_att.eVar39 = ddo.getVar('user.attributes.foreSeeRespondendID')),
        (s_att.eVar41 = ddo.getVar('edm.SOCID')),
        (s_att.eVar42 = ddo.getVar('edm.bundleID')),
        (s_att.eVar51 = checkGetVarValue(ddo.getVar('user.login.type'))),
        (s_att.eVar57 = checkGetVarValue(ddo.getVar('page.attributes.productType'))),
        (s_att.eVar62 = s_att.prop62),
        (s_att.eVar77 = checkGetVarValue(ddo.getVar('user.account.productSegment'))),
        (s_att.eVar82 = checkGetVarValue(ddo.getVar('page.pageInfo.lineOrderType'))),
        document.location.href.indexOf('aa_ref=') > -1)
          ? 'blank' !== (tar_ref = document.location.href.match('[&|?]aa_ref=([^&]*)')[1]) &&
            -1 == tar_ref.indexOf('#') &&
            (s_att.eVar92 = document.location.href.match('[&|?]aa_ref=([^&]*)')[1])
          : ((tempReferrer = document.referrer || ''), (s_att.eVar92 = tempReferrer || ''));
        var temp138 = checkGetVarValue(ddo.getVar('page.attributes.loginAppClientId')) || '';
        if (
          ('' != temp138 &&
            ((s_att.eVar138 = temp138),
            (s_att.linkTrackVars = s_att.apl(s_att.linkTrackVars, 'eVar138', ',', 1))),
          (s_att.eVar201 = checkGetVarValue(ddo.getVar('page.category.applicationName'))),
          (s_att.eVar227 = checkGetVarValue(ddo.getVar('page.pageInfo.pathingIntent'))),
          (s_att.linkTrackVars = s_att.apl(s_att.linkTrackVars, 'eVar227', ',', 1)),
          'Business Solutions' === checkGetVarValue(ddo.getVar('page.media.productInFocusLOB')) &&
            '' != checkGetVarValue(ddo.getVar('page.media.productInFocusMedia')) &&
            ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event514', ',', 1)),
            (s_att.events = s_att.apl(s_att.events, 'event514', ',', 1))),
          (s_att.events = ''),
          (tempEvents = ddo.getEventsToBeProcessed()),
          'undefined' != typeof tempEvents || tempEvents.length > 0)
        )
          for (ap = 0; ap < tempEvents.length; ap++) {
            var internal = RegExp(
              '((f|ht)tps?:)?(//)?((more|watch|experience|audience|audiencenetwork|start).att.(com|net).*)'
            );
            if (
              (!internal.test(window.location.href) ||
                'linkClick' != tempEvents[ap].eventAction ||
                void 0 === tempEvents[ap].linkDestinationUrl ||
                !internal.test(tempEvents[ap].linkDestinationUrl)) &&
              (void 0 === tempEvents[ap]._evt_DTM_InEventHandler ||
                1 == tempEvents[ap]._evt_DTM_InEventHandler) &&
              ((s_att.prop58 = tempEvents[ap].eventAction),
              (s_att.prop68 = tempEvents[ap].intersectid || ''),
              (s_att.linkTrackVars = s_att.apl(s_att.linkTrackVars, 'prop58', ',', 1)),
              1 != tempEvents[ap]._processedByAdobe &&
                'pageLoad' != tempEvents[ap].eventAction &&
                'virtualPageLoad' != tempEvents[ap].eventAction &&
                'modalLoad' != tempEvents[ap].eventAction &&
                'modalClose' != tempEvents[ap].eventAction)
            ) {
              var tempEventOrder = tempEvents[ap]._evtOrder;
              void 0 !== tempEvents[ap].tradeInFlag &&
                1 == tempEvents[ap].tradeInFlag &&
                ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event99', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event99', ',', 1))),
                (tempProdString = ''),
                (tempSlotFriendlyName = ''),
                (tempContentFriendlyName = ''),
                (tempSlotPosition = ''),
                (tempEventPageURL = ''),
                (tempLinkDestinationURL = ''),
                (tempAppCode = ''),
                (tempPrimaryCategory = ''),
                (tempFirstProductInCart = '');
              var tempSuccessFlagCheck = tempEvents[ap].successFlag || '',
                shoppingCart = new ShoppingCartEventProcessor(tempEvents[ap]);
              (s_att.products = processEventItems(tempEvents[ap], tempPageOwnership)),
                ddo.squawk('Adobe LinkClick Rule s_att.products: ' + s_att.products, 1, 'e');
              var webDesignFlag,
                expType,
                dnsFormSubmit = '';
              if (
                'formSubmit' == tempEvents[ap].eventAction &&
                1 != tempEvents[ap]._processedDueToTime
              )
                dnsFormSubmit = 'formSubmitNo';
              if (
                ((s_att.eVar3 = checkGetVarValue(tempEvents[ap]._evtLoginId) || ''),
                (s_att.eVar51 = checkGetVarValue(tempEvents[ap]._evtLoginType) || ''),
                (s_att.prop24 =
                  tempEvents[ap]._evtTitle ||
                  checkGetVarValue(ddo.getVar('page.pageInfo.pageTitle'))),
                (s_att.prop67 = tempEvents[ap].sourceSystem || 'DETM'),
                (webDesignFlag = ddo.getVar('page.pageInfo.responsiveWebDesignFlag')),
                (viewedUIExperience =
                  checkGetVarValue(tempEvents[ap]._bevtViewedUIExperience) ||
                  ddo.getVar('page.pageInfo.viewedUIExperience')),
                (wdf = '0' != webDesignFlag ? 'Responsive' : 'Nonresponsive'),
                (expType = wdf + '|' + viewedUIExperience),
                (s_att.eVar34 = s_att.prop26 = expType || ''),
                (tempEventAction = tempEvents[ap].eventAction || ''),
                'formSubmitNo' != dnsFormSubmit)
              ) {
                (tempEventCode = ''),
                  4 == ddo.version().api
                    ? (tempEventCode += tempEvents[ap].eventName)
                    : (tempEventCode += tempEvents[ap].eventCode),
                  'linkClick' != tempEventAction && (s_att.eVar15 = tempEventCode),
                  (s_att.pageName = tempEvents[ap]._evtPageName),
                  (s_att.prop4 = s_att.eVar16 =
                    sessionStorage.getItem('native_udid') ||
                    tempEvents[ap]._evtAppVisitorCookie ||
                    ddo.getVar('user.appVisitorCookie') ||
                    '');
                var language =
                  checkGetVarValue(tempEvents[ap]._evtLanguage) ||
                  checkGetVarValue(ddo.getVar('page.pageInfo.language')) ||
                  '';
                if (
                  ((language =
                    (language = language.toLowerCase()).indexOf('en') > -1
                      ? 'EN'
                      : language.indexOf('es') > -1
                      ? 'ES'
                      : 'Other'),
                  (s_att.prop5 = s_att.eVar35 = language),
                  (s_att.prop8 =
                    tempEvents[ap]._evtPageFunction ||
                    ddo.getVar('page.category.pageFunction') ||
                    ''),
                  (s_att.prop12 = s_att.eVar7 =
                    tempEvents[ap]._evtTechUserAgent || ddo.getVar('user.tech.userAgent') || ''),
                  'impression' !== tempEvents[ap].eventAction &&
                    ('Business' == tempPageOwnership
                      ? (s_att.prop17 = tempEvents[ap]._evtPageName || '')
                      : (s_att.prop17 =
                          checkGetVarValue(tempEvents[ap]._bevtPageName) ||
                          checkGetVarValue(tempEvents[ap]._evtPageName) ||
                          checkGetVarValue(tempEvents[ap].linkPageName) ||
                          checkGetVarValue(ddo.getVar('page.pageInfo.pageName')) ||
                          '')),
                  (s_att.prop37 = s_att.eVar206 =
                    ddo.getVar('user.attuid') || tempEvents[ap].solutionSenderAgentId || ''),
                  shoppingCart.isSuccessfulSave() &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event36', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event36', ',', 1))),
                  shoppingCart.isSuccessfulRetrieve())
                ) {
                  var tempCartState =
                    '|' +
                    checkGetVarValue(tempEvents[ap].cartType) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].cartState) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].persistedCartHours) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].persistedCartAge) +
                    '|||' +
                    checkGetVarValue(tempEvents[ap].persistedCartChannelOrigination);
                  '' != tempCartState &&
                    0 == containsNothingButDelimiters(tempCartState, '|') &&
                    ((s_att.eVar78 = tempCartState.toLowerCase() || ''),
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event37', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event37', ',', 1)));
                }
                if (shoppingCart.isSuccessfulCartRetrieve()) {
                  var tempRetrieve =
                    '|' +
                    checkGetVarValue(tempEvents[ap].cartType) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].cartState) +
                    '||' +
                    checkGetVarValue(tempEvents[ap].persistedCartHours) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].persistedCartAge) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].persistedCartChannelOrigination);
                  '' != tempRetrieve &&
                    0 == containsNothingButDelimiters(tempRetrieve, '|') &&
                    ((s_att.eVar78 = tempRetrieve.toLowerCase() || ''),
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event38', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event38', ',', 1)));
                }
                void 0 === tempEvents[ap].cartRetrievedFlag ||
                  (1 !== tempEvents[ap].cartRetrievedFlag &&
                    '1' !== tempEvents[ap].cartRetrievedFlag) ||
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event39', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event39', ',', 1)));
                var lnkName = tempEvents[ap].linkName || '';
                (s_att.prop18 = s_att.eVar79 = lnkName.toLowerCase() || ''),
                  (s_att.prop34 = s_att.eVar36 =
                    checkGetVarValue(ddo.getVar('user.account.serviceType')) ||
                    tempEvents[ap].selectedAccountType ||
                    checkGetVarValue(ddo.getVar('user.account.accountInFocusType')) ||
                    ''),
                  'Business' == tempPageOwnership
                    ? ((tempSlotPosition = tempEvents[ap].slotPosition),
                      (tempContentFriendlyName = tempEvents[ap].contentFriendlyName),
                      (tempSlotFriendlyName = tempEvents[ap].slotFriendlyName),
                      (tempAppCode = ddo.getVar('page.pageInfo.appCode')),
                      (tempLinkDestinationURL =
                        tempEvents[ap].linkDestinationURL || tempEvents[ap].linkDestinationUrl),
                      (tempPrimaryCategory = tempEvents[ap].primaryCategory),
                      'impression' !== tempEvents[ap].eventAction &&
                        ((s_att.prop19 = removeQueryString(tempLinkDestinationURL)),
                        (s_att.prop20 = tempEvents[ap].linkPosition || tempSlotFriendlyName),
                        (s_att.prop23 = tempSlotPosition)),
                      (s_att.eVar10 = s_att.channel = tempAppCode.toLowerCase()),
                      (s_att.eVar188 = tempEvents[ap]._evtPageURL || ''),
                      'linkClick' != tempEventAction &&
                        (s_att.eVar15 = s_att.prop42 = tempEventCode),
                      'undefined' != typeof tempPrimaryCategory &&
                        '' != tempPrimaryCategory &&
                        'Self Service' == tempPrimaryCategory &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event22',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event22', ',', 1)),
                        (tempDollarAmount =
                          checkGetVarValue(tempEvents[ap].eventDollarAmount, 'n') || ''),
                        '' != tempDollarAmount &&
                          ((s_att.linkTrackEvents = s_att.apl(
                            s_att.linkTrackEvents,
                            'event29',
                            ',',
                            1
                          )),
                          (s_att.events = s_att.apl(
                            s_att.events,
                            'event29=' + tempDollarAmount,
                            ',',
                            1
                          ))),
                        (tempRequestId = tempEvents[ap].requestID || ''),
                        '' != tempRequestId && (s_att.eVar55 = tempRequestId)),
                      tempEventCode.indexOf('POC_Registration Start_Submit') > -1 &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event1',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event1', ',', 1))),
                      tempEventCode.indexOf('POC_Registration Complete_Submit') > -1 &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event2',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event2', ',', 1))),
                      tempEventCode.indexOf('content_scrolled_50_percent') > -1 &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event249',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event249', ',', 1))),
                      tempEventCode.indexOf('POS Billing Information Submit') > -1 &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event9',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event9', ',', 1))),
                      (tempEventCode.indexOf('POS_Review_Order_Approve_Submit') > -1 ||
                        tempEventCode.indexOf('POS_CheckOut Review Order_Submit') > -1 ||
                        tempEventCode.indexOf('BC_Review_Order_Submit') > -1) &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event11',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event11', ',', 1))),
                      (tempVariableQoSAddedFlag = tempEvents[ap].variableQoSAddedFlag || ''),
                      '' != tempVariableQoSAddedFlag && (s_att.eVar183 = tempVariableQoSAddedFlag))
                    : 'impression' !== tempEvents[ap].eventAction &&
                      (s_att.prop20 =
                        tempEvents[ap].linkPosition || tempEvents[ap].slotFriendlyName || ''),
                  (s_att.prop21 = 'D=mid');
                var temp139 =
                  checkGetVarValue(tempEvents[ap].flowName) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].fileFlowName) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].flowStepName) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].flowStepCount);
                0 == containsNothingButDelimiters(temp139, '|') &&
                  ((s_att.eVar139 = temp139),
                  (s_att.linkTrackVars = s_att.apl(s_att.linkTrackVars, 'eVar139', ',', 1))),
                  (s_att.eVar184 =
                    checkGetVarValue(ddo.getVar('user.actorType')) ||
                    checkGetVarValue(ddo.getVar('user.attributes.actorType')) ||
                    checkGetVarValue(ddo.getVar('user.attributes.ABSactorType')) ||
                    ''),
                  void 0 !== s_att.prop20 &&
                    'number' != typeof s_att.prop20 &&
                    s_att.prop20.indexOf('Social') > -1 &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event7', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event7', ',', 1))),
                  shoppingCart.isSuccessfulAdd() &&
                    ((tempFirstProductInCart = tempEvents[ap].firstProductInCart || '0'),
                    '1' == tempFirstProductInCart
                      ? ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'scOpen,scAdd',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'scOpen,scAdd', ',', 1)))
                      : '0' == tempFirstProductInCart &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'scAdd',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'scAdd', ',', 1)))),
                  shoppingCart.isSuccessfulRemove() &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'scRemove',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'scRemove', ',', 1)));
                var temp23 =
                  (checkGetVarValue(tempEvents[ap].cartFulfillMethod) || '') +
                  '|' +
                  (checkGetVarValue(tempEvents[ap].shippingMethod) ||
                    checkGetVarValue(tempEvents[ap].Shipping) ||
                    checkGetVarValue(tempEvents[ap].shipping) ||
                    '');
                '' != temp23 &&
                  0 == containsNothingButDelimiters(temp23, '|') &&
                  (s_att.eVar23 = temp23),
                  shoppingCart.isSuccessfulCheckout() &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'scCheckout',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'scCheckout', ',', 1))),
                  shoppingCart.isSuccessfulUpgrade() &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event13', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event13', ',', 1))),
                  shoppingCart.isSuccessfulModifiedPlan() &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event100',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event100', ',', 1)));
                var tempDonationFlag = tempEvents[ap].donationFlag;
                (1 !== tempDonationFlag && '1' !== tempDonationFlag) ||
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event120', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event120', ',', 1)));
                var tempDonationAmount =
                  checkGetVarValue(tempEvents[ap].donationAmount, 'n') || '';
                if (
                  ('' != tempDonationAmount &&
                    tempDonationAmount > 0 &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event121',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event121', ',', 1)),
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event122', ',', 1)),
                    (s_att.events = s_att.apl(
                      s_att.events,
                      'event122=' + tempDonationAmount,
                      ',',
                      1
                    ))),
                  shoppingCart.isSuccessfulView())
                ) {
                  var tempSuccessfulView =
                    '|' +
                    checkGetVarValue(tempEvents[ap].cartType) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].cartState) +
                    '||' +
                    checkGetVarValue(tempEvents[ap].persistedCartHours) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].persistedCartAge) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].persistedCartChannelOrigination);
                  '' != tempSuccessfulView &&
                    0 == containsNothingButDelimiters(tempSuccessfulView, '|') &&
                    (s_att.eVar78 = tempSuccessfulView.toLowerCase() || ''),
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'scView', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'scView', ',', 1));
                }
                tempEventCode.indexOf('MCOM_Newsletter_Subscription_Submit') > -1 &&
                  '1' == tempSuccessFlagCheck &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event285', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event285', ',', 1))),
                  tempEventCode.indexOf('MCOM_Gated_Download') > -1 &&
                    '1' == tempSuccessFlagCheck &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event616',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event616', ',', 1))),
                  (tempEventCode.indexOf('HRUverse_CheckOut_PmtInfo_Submit') > -1 ||
                    tempEventCode.indexOf('Mbl-HRUverse_CheckOut_PmtInfo_Submit') > -1 ||
                    tempEventCode.indexOf('HRUverse_CheckOut_PersInfo_VerifyAddr_Submit') > -1 ||
                    tempEventCode.indexOf('HRUverse_CheckOut_PersInfo_Submit') > -1 ||
                    tempEventCode.indexOf('Mbl-HRUverse_CheckOut_PersInfo_Submit') > -1 ||
                    tempEventCode.indexOf('HRUverse_Cart_Add_VOIP_Submit') > -1 ||
                    tempEventCode.indexOf('Chat_Manage_Your_Data_Submit') > -1 ||
                    tempEventCode.indexOf('HRUverse_CheckOut_PmtInfo_Submit') > -1 ||
                    tempEventCode.indexOf('Mbl-HRUverse_CheckOut_ScheduleInstall_Submit') > -1) &&
                    '1' == tempEvents[ap].successFlag &&
                    'Y' == tempEvents[ap].paperlessBillOpt &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event56', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event56', ',', 1)));
                var tempPymtDetails = tempEvents[ap].paymentDetails || '';
                if ('' !== tempPymtDetails) {
                  for (var tempPymt = new Array(), i = 0; i < tempPymtDetails.length; i++) {
                    (amount = tempPymtDetails[i].paymentAmount || ''),
                      (pmethod = tempPymtDetails[i].paymentMethod || ''),
                      (sched = tempPymtDetails[i].paymentScheduledFlag || '');
                    var pymtDet = amount + '~' + pmethod + '~' + sched;
                    tempPymt.push(pymtDet) || tempPymt.push('');
                  }
                  s_att.eVar27 = tempPymt.join('|') || '';
                }
                var pgURL = tempEvents[ap]._bevtPageURL || tempEvents[ap]._evtPageURL || '',
                  bits = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]?)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                    pgURL
                  ),
                  pageURLCleanUP = '';
                if (
                  (null != bits &&
                    '' !== bits &&
                    void 0 !== bits[9] &&
                    null !== bits[9] &&
                    '' !== bits[9] &&
                    (pageURLCleanUP = bits[9]),
                  /start.att\.net/.test(pgURL) &&
                    pageURLCleanUP.indexOf('/') > -1 &&
                    pageURLCleanUP.split('/').length > 3 &&
                    (pgURL = pageURLCleanUP =
                      '/' +
                      pageURLCleanUP.split('/')[1] +
                      '/' +
                      pageURLCleanUP.split('/')[2] +
                      '/' +
                      pageURLCleanUP.split('/')[3] +
                      '/'),
                  /directv\.com/.test(pgURL) &&
                    /^\/dtvapp\/mydirectv\/account\/payment\/mybillingcenter.jsp\/virtual\/h:/.test(
                      pageURLCleanUP
                    ) &&
                    null != bits &&
                    '' !== bits &&
                    (void 0 !== bits[13] && null !== bits[13] && '' !== bits[13]
                      ? (pageURLCleanUP = bits[9] + '/virtual/' + bits[13]).indexOf('//') > -1 &&
                        (pageURLCleanUP = pageURLCleanUP.replace('//', '/'))
                      : void 0 !== bits[10] &&
                        null !== bits[10] &&
                        '' !== bits[10] &&
                        (pageURLCleanUP = bits[10]),
                    (pgURL = pageURLCleanUP)),
                  /forums\.att\.com/.test(pgURL) && /^\/t5\//.test(pageURLCleanUP))
                ) {
                  var urlTokens = pageURLCleanUP.split('/');
                  urlTokens.length > 3 &&
                    (temp29 = '/' + urlTokens[1] + '/' + urlTokens[2] + '/' + urlTokens[3] + '/');
                }
                if (
                  ((s_att.prop29 = s_att.eVar13 = pgURL.toLowerCase() || ''),
                  null != s_att.eVar13 &&
                  void 0 !== s_att.eVar13 &&
                  s_att.eVar13.indexOf('/support/contact-us/wireless/') > -1
                    ? (s_att.eVar223 = s_att.prop68)
                    : (s_att.eVar223 = ''),
                  ('formSubmit' !== tempEvents[ap].eventAction &&
                    'formResponse' !== tempEvents[ap].eventAction) ||
                    ('GblSearch_TextSubmit' !== tempEvents[ap].eventCode &&
                      'Mbl-GblSearch_TextSubmit' !== tempEvents[ap].eventCode &&
                      'GlblSearch_Search_Submit' !== tempEvents[ap].eventCode &&
                      'mbl-glbl-Search_Submit' !== tempEvents[ap].eventCode &&
                      'Mbl-Search_TextSubmit' !== tempEvents[ap].eventCode) ||
                    'Global Search Text Box' !== tempEvents[ap].linkName)
                ) {
                  if ('impression' !== tempEvents[ap].eventAction) {
                    var ldu =
                      tempEvents[ap].linkDestinationUrl || tempEvents[ap].linkDestinationURL || '';
                    s_att.prop19 = removeQueryString(ldu.toLowerCase()) || '';
                  }
                } else s_att.prop19 = window.location.href;
                s_att.prop33 = s_att.eVar76 =
                  tempEvents[ap].internalSearchType ||
                  tempEvents[ap].selectedAccountIdMethod ||
                  tempEvents[ap].mobileNumberSearchOption ||
                  tempEvents[ap].currentSearchTermCategory ||
                  '';
                var tempQuery = tempEvents[ap]._evtQuerystring || '';
                if ('' !== tempQuery) s_att.prop41 = s_att.eVar14 = tempQuery;
                else if ('' == tempQuery && tempEvents[ap]._evtAddressBarFullURL !== location.href)
                  s_att.prop41 = s_att.eVar14 = '';
                else {
                  var hash = location.hash || '',
                    qry = tempEvents[ap]._evtQuerystring || '';
                  s_att.prop41 = s_att.eVar14 = '' !== hash ? hash : qry;
                }
                checkGetVarValue(ddo.getVar('page.location.queryString')).indexOf('ab_test=') >
                  -1 && (s_att.prop15 = ddo.ext.getParameterByName('ab_test')),
                  (s_att.eVar85 = checkGetVarValue(tempEvents[ap]._evtAddressBarFullURL) || '');
                var governed_property_value =
                  tempEvents[ap]._bevtDomain ||
                  tempEvents[ap]._evtDomain ||
                  ddo.getVar('page.location.domain') ||
                  '';
                -1 === governed_property_value.indexOf('mobilemyaccount')
                  ? (s_att.eVar161 = s_att.server = document.location.host)
                  : (s_att.eVar161 = s_att.server = governed_property_value),
                  (s_att.prop51 = checkGetVarValue(tempEvents[ap].linkPath) || '');
                var liabilityType =
                  checkGetVarValue(ddo.getVar('user.account.liabilityType')) || '';
                if ('Business' == tempPageOwnership) {
                  (s_att.prop52 = s_att.eVar52 =
                    checkGetVarValue(ddo.getVar('user.attributes.ABScompanyRole')) ||
                    checkGetVarValue(ddo.getVar('user.account.companyRole')) ||
                    ''),
                    '' != liabilityType &&
                      (liabilityType =
                        'Corporate' == liabilityType ||
                        'Business' == liabilityType ||
                        'CRU' == liabilityType
                          ? 'CRU'
                          : 'Individual' == liabilityType || 'IRU' == liabilityType
                          ? 'IRU'
                          : 'CONS' == liabilityType
                          ? 'CONS'
                          : '');
                  var altSegmentType =
                      checkGetVarValue(ddo.getVar('user.attributes.PremierAltSegmentType')) ||
                      checkGetVarValue(ddo.getVar('user.account.ABSaltSegmentType')) ||
                      '',
                    enterpriseType =
                      checkGetVarValue(ddo.getVar('user.attributes.PremierEnterpriseType')) ||
                      checkGetVarValue(ddo.getVar('user.account.ABSenterpriseType')) ||
                      '',
                    companyName =
                      checkGetVarValue(ddo.getVar('user.attributes.ABScompanyName')) ||
                      checkGetVarValue(ddo.getVar('user.account.companyName')) ||
                      '',
                    agreementNumber =
                      checkGetVarValue(ddo.getVar('user.attributes.PremierAgreementNumber')) ||
                      checkGetVarValue(ddo.getVar('user.account.premierAgreementNumber')) ||
                      '';
                  (s_att.eVar53 =
                    altSegmentType +
                    '|' +
                    liabilityType +
                    '|' +
                    enterpriseType +
                    '|' +
                    companyName +
                    '|' +
                    agreementNumber),
                    (s_att.eVar54 =
                      checkGetVarValue(ddo.getVar('page.attributes.PremierAccountGroup')) ||
                      checkGetVarValue(ddo.getVar('page.attributes.premierAccountGroup')) ||
                      checkGetVarValue(ddo.getVar('page.pageInfo.premierAccountGroup')) ||
                      '');
                  var tempVehicleWifiEligibleFlag =
                    checkGetVarValue(ddo.getVar('user.attributes.vehicleWifiEligibleFlag')) || '';
                  '0' == tempVehicleWifiEligibleFlag || 0 == tempVehicleWifiEligibleFlag
                    ? (tempVehicleWifiEligibleFlag = 'CC=No')
                    : ('1' != tempVehicleWifiEligibleFlag && 1 != tempVehicleWifiEligibleFlag) ||
                      (tempVehicleWifiEligibleFlag = 'CC=Yes');
                  var tempFirstNetFlag =
                    checkGetVarValue(ddo.getVar('user.attributes.firstNetFlag')) || '';
                  '0' == tempFirstNetFlag || 0 == tempFirstNetFlag
                    ? (tempFirstNetFlag = 'FN=No')
                    : ('1' != tempFirstNetFlag && 1 != tempFirstNetFlag) ||
                      (tempFirstNetFlag = 'FN=Yes');
                  var tempDarFlag = checkGetVarValue(ddo.getVar('user.attributes.darFlag')) || '';
                  '0' == tempDarFlag || 0 == tempDarFlag
                    ? (tempDarFlag = 'DAR=No')
                    : ('1' != tempDarFlag && 1 != tempDarFlag) || (tempDarFlag = 'DAR=Yes');
                  var tempLibertyFlag =
                    checkGetVarValue(ddo.getVar('user.account.libertyFlag')) || '';
                  '0' == tempLibertyFlag || 0 == tempLibertyFlag
                    ? (tempLibertyFlag = 'LIB=No')
                    : ('1' != tempLibertyFlag && 1 != tempLibertyFlag) ||
                      (tempLibertyFlag = 'LIB=Yes');
                  var tempPremierUserProperties =
                    tempVehicleWifiEligibleFlag +
                    '|' +
                    tempFirstNetFlag +
                    '|' +
                    tempDarFlag +
                    '|' +
                    (checkGetVarValue(ddo.getVar('user.attributes.firstNetUserRole')) || '') +
                    '|' +
                    (tempEvents[ap].responderType || '') +
                    '|' +
                    tempLibertyFlag;
                  '' != tempPremierUserProperties &&
                    0 == containsNothingButDelimiters(tempPremierUserProperties, '|') &&
                    (s_att.eVar191 = tempPremierUserProperties);
                  var tempCompanyProperties =
                    (checkGetVarValue(ddo.getVar('user.attributes.companyID')) || '') +
                    '|' +
                    (checkGetVarValue(ddo.getVar('user.attributes.marketSegment')) || '') +
                    '|' +
                    (checkGetVarValue(ddo.getVar('user.attributes.contract')) || '') +
                    '|' +
                    (checkGetVarValue(ddo.getVar('user.attributes.ABScompanyName')) ||
                      checkGetVarValue(ddo.getVar('user.attributes.companyName')) ||
                      '');
                  '|||' == tempCompanyProperties && (tempCompanyProperties = ''),
                    (s_att.eVar192 = tempCompanyProperties);
                } else {
                  s_att.prop52 =
                    checkGetVarValue(tempEvents[ap]._evtLiabilityType) ||
                    checkGetVarValue(ddo.getVar('user.account.liabilityType')) ||
                    '';
                  var temp54 =
                    checkGetVarValue(ddo.getVar('page.attributes.navigationServiceType')) ||
                    checkGetVarValue(tempEvents[ap].navigationServiceType) ||
                    '';
                  (s_att.prop54 = temp54.toLowerCase() || ''),
                    ('IRU' != liabilityType &&
                      'CONS' != liabilityType &&
                      'CRU' != liabilityType) ||
                      (temp53 = '|' + liabilityType + '|||'),
                    'undefined' != typeof temp53 && '||||' != temp53 && (s_att.eVar53 = temp53);
                }
                (s_att.prop62 =
                  checkGetVarValue(tempEvents[ap]._evtLineOfBusiness) ||
                  checkGetVarValue(ddo.getVar('page.pageInfo.lineOfBusiness')) ||
                  ''),
                  (s_att.eVar20 =
                    checkGetVarValue(tempEvents[ap]._evtFlowCode) ||
                    checkGetVarValue(ddo.getVar('page.pageInfo.flowCode')) ||
                    ''),
                  (s_att.prop46 = s_att.eVar20);
                var tempZip =
                  checkGetVarValue(tempEvents[ap]._evtZipCode, 's') ||
                  checkGetVarValue(tempEvents[ap].zipCode, 's') ||
                  checkGetVarValue(ddo.getVar('page.pageInfo.zipCode'), 's') ||
                  '';
                /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(tempZip) &&
                  ((zip = tempZip.substring(0, 5) || ''), (s_att.eVar21 = zip)),
                  (s_att.eVar39 = tempEvents[ap].foreseeSessionIdfsr || ''),
                  null !== (tempEvents[ap]._evtFsrCookie || null) &&
                    (s_att.eVar68 = tempEvents[ap]._evtFsrCookie || ''),
                  (s_att.eVar72 = tempEvents[ap].alertCode || ''),
                  '0' == checkGetVarValue(tempEvents[ap].successFlag, 's') &&
                    (s_att.eVar86 =
                      tempEvents[ap].statusCode || tempEvents[ap].statusMessage || ''),
                  (s_att.eVar87 =
                    checkGetVarValue(tempEvents[ap].searchResultFilters) ||
                    checkGetVarValue(tempEvents[ap].filterSelection) ||
                    '');
                var tar_ref,
                  orgUrl = checkGetVarValue(tempEvents[ap].searchOriginURL) || '';
                if (
                  ((s_att.eVar88 = orgUrl.toLowerCase() || ''),
                  (s_att.eVar91 =
                    checkGetVarValue(ddo.getVar('page.pageInfo.referralFlow')) ||
                    checkGetVarValue(tempEvents[ap].referralFlow) ||
                    ''),
                  '' != s_att.eVar91)
                ) {
                  var idxQsn = s_att.eVar91.indexOf('?'),
                    idxHash = s_att.eVar91.indexOf('#');
                  if (idxQsn > -1 && idxHash > -1) {
                    var idx91 = idxQsn > idxHash ? idxHash : idxQsn;
                    s_att.eVar91 = s_att.eVar91.substring(0, idx91);
                  } else
                    idxQsn > -1
                      ? (s_att.eVar91 = s_att.eVar91.substring(0, idxQsn))
                      : idxHash > -1 && (s_att.eVar91 = s_att.eVar91.substring(0, idxHash));
                  '.' === s_att.eVar91 && (s_att.eVar91 = '');
                }
                if (document.location.href.indexOf('aa_ref=') > -1)
                  'blank' !== (tar_ref = document.location.href.match('[&|?]aa_ref=([^&]*)')[1]) &&
                    -1 == tar_ref.indexOf('#') &&
                    (s_att.eVar92 = document.location.href.match('[&|?]aa_ref=([^&]*)')[1]);
                else (tempReferrer = document.referrer || ''), (s_att.eVar92 = tempReferrer || '');
                (s_att.eVar162 =
                  checkGetVarValue(tempEvents[ap]._evtPageOwnership) ||
                  checkGetVarValue(tempEvents[ap].pageOwnership) ||
                  checkGetVarValue(ddo.getVar('page.category.pageOwnership')) ||
                  ''),
                  (s_att.eVar163 =
                    checkGetVarValue(tempEvents[ap].loginSource) ||
                    checkGetVarValue(ddo.getVar('user.login.loginSource')) ||
                    ''),
                  (s_att.eVar164 =
                    checkGetVarValue(tempEvents[ap].RepresentativeIpAddress) ||
                    checkGetVarValue(ddo.getVar('user.representativeIpAddress')) ||
                    ''),
                  (s_att.eVar165 =
                    checkGetVarValue(tempEvents[ap].billingSystem) ||
                    checkGetVarValue(ddo.getVar('user.account.billingSystem')) ||
                    ''),
                  (s_att.eVar166 =
                    checkGetVarValue(tempEvents[ap].inputPreloginUserId) ||
                    checkGetVarValue(ddo.getVar('user.login.inputPreloginUserId')) ||
                    ''),
                  (s_att.eVar151 = checkGetVarValue(ddo.getVar('page.pageInfo.abTest')) || ''),
                  (tempOrigDepositAmt = checkGetVarValue(tempEvents[ap].origDepositAmt)),
                  (tempLineRemovedDepositAmt = checkGetVarValue(
                    tempEvents[ap].lineRemovedDepositAmt
                  )),
                  ('' == tempOrigDepositAmt && '' == tempLineRemovedDepositAmt) ||
                    (s_att.eVar168 = tempOrigDepositAmt + '|' + tempLineRemovedDepositAmt),
                  (s_att.eVar169 = checkGetVarValue(tempEvents[ap].flexBanScenario) || '');
                var tempCheckoutRedesignInfo =
                  (checkGetVarValue(tempEvents[ap].trackLNP) || '') +
                  '|' +
                  (checkGetVarValue(tempEvents[ap].billingAddressSelection) || '');
                '|' !== tempCheckoutRedesignInfo && (s_att.eVar170 = tempCheckoutRedesignInfo);
                var temp171 =
                  checkGetVarValue(tempEvents[ap].bandwidthThreshold) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].bandwidthFrequency) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].bandwidthPeriod) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].bandwidth) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].region) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].locationID) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].circuitID);
                '' != temp171 &&
                  0 == containsNothingButDelimiters(temp171, '|') &&
                  ((s_att.eVar171 = temp171),
                  (s_att.linkTrackVars = s_att.apl(s_att.linkTrackVars, 'eVar171', ',', 1)));
                var temp187str = '',
                  temp187 = new Array();
                temp187.push(checkGetVarValue(tempEvents[ap].assetType)),
                  temp187.push(checkGetVarValue(tempEvents[ap].assessNetwork)),
                  temp187.push(checkGetVarValue(tempEvents[ap].requestType)),
                  temp187.push(checkGetVarValue(tempEvents[ap].troubleType)),
                  temp187.push(checkGetVarValue(tempEvents[ap].outageCondition)),
                  temp187.push(checkGetVarValue(tempEvents[ap].severity)),
                  temp187.push(checkGetVarValue(tempEvents[ap].authorizationValue)),
                  '' != (temp187str = temp187.join('|')) &&
                    0 == containsNothingButDelimiters(temp187str, '|') &&
                    (s_att.eVar187 = temp187str),
                  void 0 !== tempEvents[ap].serviceImpacting &&
                    'true' == tempEvents[ap].serviceImpacting &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event282',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event282', ',', 1))),
                  void 0 !== tempEvents[ap].isRecurringTrouble &&
                    'true' == tempEvents[ap].isRecurringTrouble &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event283',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event283', ',', 1))),
                  void 0 !== tempEvents[ap].trustedDeviceFlag &&
                    1 == tempEvents[ap].trustedDeviceFlag &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event287',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event287', ',', 1))),
                  1 == checkGetVarValue(ddo.getVar('user.tech.thinNativeFlag')) &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event288',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event288', ',', 1))),
                  (1 != checkGetVarValue(tempEvents[ap].premiumServiceEligibleFlag) &&
                    '1' != checkGetVarValue(tempEvents[ap].premiumServiceEligibleFlag)) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event289',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event289', ',', 1)));
                var tempPmtPastDue = tempEvents[ap].paymentPastDueFlag || '';
                '' == tempPmtPastDue ||
                  (1 != tempPmtPastDue && '1' != tempPmtPastDue) ||
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event290', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event290', ',', 1)));
                var tempSchPayByDue = tempEvents[ap].scheduledPayByDueDateFlag || '';
                '' == tempSchPayByDue ||
                  (1 != tempSchPayByDue && '1' != tempSchPayByDue) ||
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event291', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event291', ',', 1)));
                var tempeVar193 =
                  checkGetVarValue(tempEvents[ap].orderType) +
                  '|' +
                  (checkGetVarValue(tempEvents[ap].service) ||
                    checkGetVarValue(ddo.getVar('page.attributes.service'))) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].manageType) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].portType);
                '' != tempeVar193 &&
                  0 == containsNothingButDelimiters(tempeVar193, '|') &&
                  (s_att.eVar193 = tempeVar193);
                var mgtFlow = new MgtFlowConverter();
                (s_att.eVar196 = mgtFlow.build(tempEvents[ap])),
                  (s_att.eVar201 =
                    tempEvents[ap]._evtApplicationName ||
                    ddo.getVar('page.category.applicationName') ||
                    '');
                var converter = new DeviceConverter(),
                  temp203 =
                    checkGetVarValue(ddo.getVar('user.attributes.subscriberStatus')) ||
                    checkGetVarValue(ddo.getVar('user.account.accountInFocusStatus')) ||
                    checkGetVarValue(ddo.getVar('user.account.wirelessAccountStatus')) ||
                    checkGetVarValue(ddo.getVar('user.account.wirelineUserStatus')) ||
                    checkGetVarValue(ddo.getVar('user.account.memberStatus')) ||
                    '';
                (temp203 += '|'),
                  '' != (temp203 += converter.build(tempEvents[ap])) &&
                    0 == containsNothingButDelimiters(temp203, '|') &&
                    (s_att.eVar203 = temp203);
                var temp205 =
                  checkGetVarValue(tempEvents[ap].creditClass) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].paymentMethod) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].donationAmount) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].sharedFeatureGroupType) +
                  '|' +
                  checkGetVarValue(tempEvents[ap].charityName);
                '' != temp205 &&
                  0 == containsNothingButDelimiters(temp205, '|') &&
                  (s_att.eVar205 = temp205);
                var tempPrimaryOrderId = tempEvents[ap].primaryOrderId || '',
                  tempPrimaryOrderFlag = tempEvents[ap].primaryOrderFlag || '';
                if (
                  ('eBiz_Order_Submit' === tempEvents[ap].eventCode &&
                    ((s_att.eVar193 = tempeVar193 + '|' + tempPrimaryOrderId),
                    '1' == tempPrimaryOrderFlag &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event280',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event280', ',', 1)))),
                  (s_att.eVar208 = tempEvents[ap].effectiveDateOption || ''),
                  shoppingCart.isSuccessfulLegacyFeature())
                ) {
                  if (
                    void 0 !== tempEvents[ap].featureAdded &&
                    tempEvents[ap].featureAdded.length > 0
                  ) {
                    converter = new FeatureConverter(
                      tempEvents[ap].featureAdded || '',
                      FeatureConverter.featureType.added
                    );
                    (s_att.eVar212 = converter.legacySplit()),
                      (featureCodes = converter.track()).length > 0 &&
                        (void 0 !== s_att.products && s_att.products.length > 0
                          ? (s_att.products = s_att.apl(s_att.products, featureCodes, ',', 1))
                          : (s_att.products = featureCodes));
                  }
                  if (
                    void 0 !== tempEvents[ap].featureRemoved &&
                    tempEvents[ap].featureRemoved.length > 0
                  ) {
                    var featureCodes;
                    converter = new FeatureConverter(
                      tempEvents[ap].featureRemoved || '',
                      FeatureConverter.featureType.removed
                    );
                    (s_att.eVar213 = converter.legacySplit()),
                      (featureCodes = converter.track()).length > 0 &&
                        (void 0 !== s_att.products && s_att.products.length > 0
                          ? (s_att.products = s_att.apl(s_att.products, featureCodes, ',', 1))
                          : (s_att.products = featureCodes));
                  }
                  s_att.eVar212 &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event606',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event606', ',', 1))),
                    s_att.eVar213 &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event607',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event607', ',', 1)));
                }
                var temp22 =
                  checkGetVarValue(tempEvents[ap].promotionCode) ||
                  checkGetVarValue(tempEvents[ap].promoCode);
                if (
                  ('' != temp22 && (s_att.eVar22 = temp22),
                  void 0 !== tempEvents[ap].promoDollarsOffAmount ||
                    void 0 !== tempEvents[ap].PromoDollarsOffAmount)
                ) {
                  var tempPromoDollarsOffAmount =
                    tempEvents[ap].promoDollarsOffAmount ||
                    tempEvents[ap].PromoDollarsOffAmount ||
                    '';
                  '' != tempPromoDollarsOffAmount &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event27', ',', 1)),
                    (s_att.events = s_att.apl(
                      s_att.events,
                      'event27=' + tempPromoDollarsOffAmount,
                      ',',
                      1
                    )));
                }
                shoppingCart.isSuccessfulFeature() && shoppingCart.processFeatureDetails(),
                  (s_att.eVar215 = tempEvents[ap].connectedComm || '');
                var tempGigaPowerIntentFlag = tempEvents[ap].customerGigapowerIntentFlag || '';
                '1' == tempGigaPowerIntentFlag || 1 == tempGigaPowerIntentFlag
                  ? (s_att.eVar216 = 'Yes')
                  : ('0' != tempGigaPowerIntentFlag && 0 != tempGigaPowerIntentFlag) ||
                    (s_att.eVar216 = 'No'),
                  (s_att.eVar217 = tempEvents[ap].offerId || '');
                var user_feedback = {
                  rating:
                    checkGetVarValue(tempEvents[ap].feedbackRating, 'n') ||
                    checkGetVarValue(tempEvents[ap].starRating, 'n'),
                  reason: checkGetVarValue(tempEvents[ap].ratingReason),
                  filename: checkGetVarValue(tempEvents[ap].flowFileName),
                  salessystem: checkGetVarValue(tempEvents[ap].salesSystem),
                  segmentID: checkGetVarValue(ddo.getVar('user.directvSegmentId')),
                  emailCount: checkGetVarValue(tempEvents[ap].countEmailAddresses),
                  voicemailType: checkGetVarValue(tempEvents[ap].voicemailType),
                  addressSource: checkGetVarValue(tempEvents[ap].addressSource),
                  suggestedIdType: checkGetVarValue(tempEvents[ap].suggestedIdType),
                  get_results: function () {
                    switch (!0) {
                      case '' != this.reason:
                        return 'RatingReason|' + this.reason || '';
                      case '' != this.filename:
                        return 'FlowFileName|' + this.filename || '';
                      case '' != this.salessystem:
                        return 'SalesSystem|' + this.salessystem || '';
                      case '' != this.segmentID:
                        return 'DTVSegmentId|' + this.segmentID || '';
                      case '' != this.emailCount:
                        return 'EmailAddressCount|' + this.emailCount || '';
                      case '' != this.voicemailType:
                        return 'VoicemailType|' + this.voicemailType || '';
                      case '' != this.addressSource:
                        return 'AddressSource|' + this.addressSource || '';
                      case '' != this.suggestedIdType:
                        return 'SuggestedIdType|' + this.suggestedIdType || '';
                      default:
                        return '';
                    }
                  },
                };
                '' != user_feedback.rating &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event67', ',', 1)),
                  (s_att.events = s_att.apl(
                    s_att.events,
                    'event67=' + user_feedback.rating,
                    ',',
                    1
                  ))),
                  (s_att.eVar237 = user_feedback.get_results() || '');
                var tempNewTabs =
                  (checkGetVarValue(tempEvents[ap].linkDisplayedCount) || '') +
                  '|' +
                  (checkGetVarValue(tempEvents[ap].linkDisplayedSelectedPosition) || '') +
                  '|' +
                  (checkGetVarValue(tempEvents[ap].tabDisplayed) || '') +
                  '|' +
                  (checkGetVarValue(tempEvents[ap].searchRecommendationCategory) || '') +
                  '|' +
                  (checkGetVarValue(tempEvents[ap].linkDisplayedSelectedCategory) || '');
                '' != tempNewTabs &&
                  0 == containsNothingButDelimiters(tempNewTabs, '|') &&
                  (s_att.eVar222 = tempNewTabs),
                  (s_att.eVar238 =
                    tempEvents[ap].feedbackComments || checkGetVarValue(tempEvents[ap].reason));
                var service_avail = {
                  dwellingType:
                    checkGetVarValue(tempEvents[ap].dwellingType) ||
                    checkGetVarValue(ddo.getVar('user.account.mduIndicator')),
                  pmtMethod: checkGetVarValue(tempEvents[ap].pmtMethod),
                  ottAddOn: checkGetVarValue(tempEvents[ap].ottAddOn),
                  details: function () {
                    switch (!0) {
                      case '' != this.dwellingType:
                        return 'DwellingType|' + this.dwellingType || '';
                      case '' != this.pmtMethod:
                        return 'PaymentMethod|' + this.pmtMethod || '';
                      case '' != this.ottAddOn:
                        return 'ottAddOn|' + this.ottAddOn || '';
                      default:
                        return '';
                    }
                  },
                };
                s_att.eVar235 = service_avail.details() || '';
                var tempTNC = ddo.getVar('page.attributes.tncFlag') || '';
                ('1' !== tempTNC && 1 != tempTNC) ||
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event93', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event93', ',', 1))),
                  'Video_Interact' == tempEvents[ap].eventCode && (s_att.abort = !0),
                  void 0 !== tempEvents[ap].linkName &&
                    'Foresee Invite Shown' == tempEvents[ap].linkName &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event70', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event70', ',', 1))),
                  void 0 !== tempEvents[ap].linkName &&
                    'Foresee Invite Accepted' == tempEvents[ap].linkName &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event71', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event71', ',', 1))),
                  void 0 !== tempEvents[ap].linkName &&
                    'Foresee Invite Declined' == tempEvents[ap].linkName &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event72', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event72', ',', 1)));
                var updateCOF = tempEvents[ap].updateCardOnFileFlag || '';
                (1 !== updateCOF && '1' !== updateCOF) ||
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event126', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event126', ',', 1)));
                var COF = tempEvents[ap].cardOnFileFlag || '';
                (1 !== COF && '1' !== COF) ||
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event123', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event123', ',', 1))),
                  (tempEvents[ap].dueTodayTotalAmt || '') > 0 &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event124',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event124', ',', 1)));
                var tmpIOP = ddo.getVar('page.attributes.integratedOfferPromoIndicator') || '';
                (('' != tmpIOP && 'Y' == tmpIOP) || 'y' == tmpIOP) &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event264', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event264', ',', 1)));
                var tempZEF = ddo.getVar('user.attributes.zuluEligFlag') || '';
                '' != tempZEF &&
                  '1' == tempZEF &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event281', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event281', ',', 1)));
                var tempJEF = ddo.getVar('user.attributes.jupiterEligFlag') || '';
                if (
                  ('' != tempJEF &&
                    '1' == tempJEF &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event284',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event284', ',', 1))),
                  'MCOM_Contact_Me_Submit' === tempEvents[ap].eventCode &&
                    '1' == tempEvents[ap].successFlag &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event615',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event615', ',', 1))),
                  (tempEventCode.indexOf('MCOM_Gated_Download') > -1 ||
                    tempEventCode.indexOf('MCOM_Contact_Me_Submit') > -1 ||
                    tempEventCode.indexOf('myATT_Contact_Me_Submit') > -1) &&
                    '1' == tempEvents[ap].successFlag)
                ) {
                  var formTV =
                    checkGetVarValue(tempEvents[ap].formEmail) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].formCompany) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].formName) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].formServicePortfolio) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].formServiceFamily) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].formService) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].formSolutionOfInterest) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].formRequestType) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].formType) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].formActivityCode) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].businessType) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].businessLocationCount);
                  '' != formTV &&
                    0 == containsNothingButDelimiters(formTV, '|') &&
                    (s_att.eVar221 = formTV);
                }
                function trimVideo (a, b) {
                  return 'string' == typeof a && '' !== a && a.length > b ? a.substring(0, b) : a;
                }
                void 0 !== tempEvents[ap].billingEmailChoice &&
                  'Confirm' == tempEvents[ap].billingEmailChoice &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event700', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event700', ',', 1))),
                  void 0 !== tempEvents[ap].billingEmailChoice &&
                    'Change' == tempEvents[ap].billingEmailChoice &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event701',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event701', ',', 1))),
                  void 0 !== tempEvents[ap].billingEmailChoice &&
                    'Add' == tempEvents[ap].billingEmailChoice &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event702',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event702', ',', 1)));
                var tmpVLT = checkGetVarValue(tempEvents[ap].videoLengthTotal, 's') || '';
                if (
                  (('Video_Commence' != tempEvents[ap].eventCode &&
                    'MCOM_Video_Start' != tempEvents[ap].eventCode &&
                    'NEB_Video_Start' != tempEvents[ap].eventCode) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event59,event61',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(
                      s_att.events,
                      'event59=' + tmpVLT + ',event61',
                      ',',
                      1
                    ))),
                  ('MCOM_Video_Complete' != tempEvents[ap].eventCode &&
                    'NEB_Video_Complete' != tempEvents[ap].eventCode) ||
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event62', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event62', ',', 1))),
                  ('MCOM_Video_Progress' != tempEvents[ap].eventCode &&
                    'NEB_Video_Progress' != tempEvents[ap].eventCode) ||
                    ((TempVideoProgressionPercent = tempEvents[ap].videoProgressionPercent || ''),
                    '' != TempVideoProgressionPercent &&
                      'Business' == tempPageOwnership &&
                      ('25%' == TempVideoProgressionPercent
                        ? ((s_att.linkTrackEvents = s_att.apl(
                            s_att.linkTrackEvents,
                            'event64',
                            ',',
                            1
                          )),
                          (s_att.events = s_att.apl(s_att.events, 'event64', ',', 1)))
                        : '50%' == TempVideoProgressionPercent
                        ? ((s_att.linkTrackEvents = s_att.apl(
                            s_att.linkTrackEvents,
                            'event63',
                            ',',
                            1
                          )),
                          (s_att.events = s_att.apl(s_att.events, 'event63', ',', 1)))
                        : '75%' == TempVideoProgressionPercent &&
                          ((s_att.linkTrackEvents = s_att.apl(
                            s_att.linkTrackEvents,
                            'event65',
                            ',',
                            1
                          )),
                          (s_att.events = s_att.apl(s_att.events, 'event65', ',', 1))))),
                  'Video_Update' == tempEvents[ap].eventCode)
                ) {
                  var tmpVLV = checkGetVarValue(tempEvents[ap].videoLengthViewed, 's') || '';
                  (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event60', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event60=' + tmpVLV, ',', 1));
                  var tmpVP = checkGetVarValue(tempEvents[ap].videoProgressPercent, 'n') || '';
                  if ('' != tmpVP)
                    switch (!0) {
                      case 100 == tmpVP:
                        (s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event62',
                          ',',
                          1
                        )),
                          (s_att.events = s_att.apl(s_att.events, 'event62', ',', 1));
                        break;
                      case tmpVP >= 75 && tmpVP < 100:
                        (s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event65',
                          ',',
                          1
                        )),
                          (s_att.events = s_att.apl(s_att.events, 'event65', ',', 1));
                        break;
                      case tmpVP >= 50 && tmpVP < 75:
                        (s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event63',
                          ',',
                          1
                        )),
                          (s_att.events = s_att.apl(s_att.events, 'event63', ',', 1));
                        break;
                      case tmpVP >= 25 && tmpVP < 50:
                        (s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event64',
                          ',',
                          1
                        )),
                          (s_att.events = s_att.apl(s_att.events, 'event64', ',', 1));
                        break;
                      default:
                        console.log(
                          tmpVP + ' is not an acceptable value for event[n].videoProgressPercent'
                        );
                    }
                }
                var tempVLT = checkGetVarValue(tempEvents[ap].videoLoadTime, 's'),
                  tempVBT = checkGetVarValue(tempEvents[ap].videoBufferTime, 's'),
                  tempVPR =
                    trimVideo(checkGetVarValue(tempEvents[ap].videoPreRollFlag, 's'), 20) || '';
                '' !== tempVLT &&
                  '0' !== tempVLT &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event66', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event66=' + tempVLT, ',', 1))),
                  '' !== tempVBT &&
                    '0' !== tempVBT &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event68', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event68=' + tempVBT, ',', 1))),
                  '' !== tempVPR &&
                    '1' == tempVPR &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event69', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event69', ',', 1)));
                var temp56 =
                  trimVideo(
                    checkGetVarValue(tempEvents[ap].productInFocusLOB) ||
                      checkGetVarValue(ddo.getVar('page.media.productInFocusLOB')) ||
                      '',
                    20
                  ) +
                  '|' +
                  trimVideo(
                    checkGetVarValue(tempEvents[ap].devMake) ||
                      checkGetVarValue(ddo.getVar('page.media.productInFocusDeviceMake')) ||
                      checkGetVarValue(tempEvents[ap].activatedDeviceMake) ||
                      '',
                    50
                  ) +
                  '|' +
                  trimVideo(
                    checkGetVarValue(tempEvents[ap].devModel) ||
                      checkGetVarValue(ddo.getVar('page.media.productInFocusDeviceModel')) ||
                      checkGetVarValue(tempEvents[ap].activatedDeviceModel) ||
                      '',
                    50
                  ) +
                  '|' +
                  trimVideo(
                    checkGetVarValue(tempEvents[ap].devOS) ||
                      checkGetVarValue(ddo.getVar('page.media.productInFocusDeviceOS')) ||
                      '',
                    20
                  ) +
                  '|' +
                  trimVideo(
                    checkGetVarValue(tempEvents[ap].devType) ||
                      checkGetVarValue(ddo.getVar('page.media.productInFocusDeviceType')) ||
                      '',
                    30
                  ) +
                  '|' +
                  trimVideo(
                    checkGetVarValue(tempEvents[ap].productInFocusFunction) ||
                      checkGetVarValue(ddo.getVar('page.media.productInFocusFunction')) ||
                      '',
                    20
                  ) +
                  '|' +
                  trimVideo(
                    checkGetVarValue(tempEvents[ap].productInFocusGroup) ||
                      checkGetVarValue(ddo.getVar('page.media.productInFocusMedia')) ||
                      '',
                    30
                  );
                '' != temp56 &&
                  0 == containsNothingButDelimiters(temp56, '|') &&
                  (s_att.eVar56 = temp56);
                var tempEvMediaID = trimVideo(checkGetVarValue(tempEvents[ap].mediaId), 30) || '',
                  tempEvVideoID = trimVideo(checkGetVarValue(tempEvents[ap].videoId), 30) || '',
                  tempEvMediaFN =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaFriendlyName), 115) || '',
                  tempEvVideoFN =
                    trimVideo(checkGetVarValue(tempEvents[ap].videoFriendlyName), 115) || '',
                  tempEvMediaSeason =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaSeasonNumber), 4) || '',
                  tempEvMediaEpisode =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaEpisodeNumber), 3) || '',
                  tempEvMediaSeries =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaSeriesName), 60) || '',
                  tempMediaID =
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.id'), 's'), 45) || '',
                  tempMediaFN =
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.friendlyName'), 's'), 115) ||
                    '',
                  tempMediaSeries =
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.seriesName'), 's'), 60) ||
                    '';
                (temp_devMedia = tempEvMediaID || tempMediaID || tempEvVideoID || ''),
                  (temp_devFN = tempEvMediaFN || tempMediaFN || tempEvVideoFN || ''),
                  (temp_devMSea = tempEvMediaSeason || ''),
                  (temp_devMed = tempEvMediaEpisode || ''),
                  (temp_devMSer = tempEvMediaSeries || tempMediaSeries || '');
                var temp60;
                '' !=
                  (temp60 =
                    temp_devMedia +
                    '|' +
                    temp_devFN +
                    '|' +
                    temp_devMSea +
                    '|' +
                    temp_devMed +
                    '|' +
                    temp_devMSer) &&
                  0 == containsNothingButDelimiters(temp60, '|') &&
                  (s_att.eVar60 = temp60);
                var tempEvVideoType =
                    trimVideo(checkGetVarValue(tempEvents[ap].videoType), 15) ||
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.videoType'), 's'), 15) ||
                    '',
                  tempEvMediaType =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaType), 30) ||
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.type'), 's'), 30) ||
                    '',
                  tempEvMediaClass =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaClass), 15) ||
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.class'), 's'), 15) ||
                    '',
                  tempEvMediaObj =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaObjective), 25) ||
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.objective'), 's'), 25) ||
                    '',
                  tempEvMediaCat =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaCategory), 50) ||
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.category'), 's'), 50) ||
                    '',
                  tempEvMediaVert =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaVertical), 20) ||
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.vertical'), 's'), 20) ||
                    '',
                  tempEvMediaPubDate =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaPublishDate), 10) ||
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.publishDate'), 's'), 10) ||
                    '',
                  tempMediaPublisher =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaPublisher), 30) ||
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.publisher'), 's'), 30) ||
                    '',
                  tempMediaPersona =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaPersona), 30) ||
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.persona'), 's'), 30) ||
                    '',
                  tempMediaFormat =
                    trimVideo(checkGetVarValue(tempEvents[ap].mediaFormat), 10) ||
                    trimVideo(checkGetVarValue(ddo.getVar('page.media.format'), 's'), 10) ||
                    '';
                (temp61 = ''),
                  (temp61 =
                    tempEvVideoType +
                    '|' +
                    tempEvMediaType +
                    '|' +
                    tempEvMediaClass +
                    '|' +
                    tempEvMediaObj +
                    '|' +
                    tempEvMediaCat +
                    '|' +
                    tempEvMediaVert +
                    '|' +
                    tempEvMediaPubDate +
                    '|' +
                    tempMediaPublisher +
                    '|' +
                    tempMediaPersona +
                    '|' +
                    tempMediaFormat),
                  '' != temp61 &&
                    0 == containsNothingButDelimiters(temp61, '|') &&
                    (s_att.eVar61 = temp61);
                var temp226;
                if (
                  ('' !=
                    (temp226 =
                      (trimVideo(checkGetVarValue(tempEvents[ap].mediaProvider), 25) ||
                        trimVideo(checkGetVarValue(ddo.getVar('page.media.provider'), 's'), 25) ||
                        trimVideo(checkGetVarValue(tempEvents[ap].videoProvider), 25) ||
                        trimVideo(
                          checkGetVarValue(ddo.getVar('page.attributes.newsProvider'), 's'),
                          25
                        ) ||
                        '') +
                      '|' +
                      (trimVideo(checkGetVarValue(tempEvents[ap].mediaNetwork), 20) ||
                        trimVideo(checkGetVarValue(ddo.getVar('page.media.network'), 's'), 20) ||
                        trimVideo(checkGetVarValue(tempEvents[ap].videoNetwork), 20) ||
                        '') +
                      '|' +
                      (trimVideo(checkGetVarValue(tempEvents[ap].mediaSource), 20) ||
                        trimVideo(checkGetVarValue(tempEvents[ap].videoNetwork), 20) ||
                        '') +
                      '|' +
                      (trimVideo(checkGetVarValue(tempEvents[ap].mediaPlayerName), 30) ||
                        trimVideo(checkGetVarValue(tempEvents[ap].videoPlayerName), 30) ||
                        '') +
                      '|' +
                      (trimVideo(checkGetVarValue(tempEvents[ap].mediaPlayerLocation), 30) ||
                        trimVideo(checkGetVarValue(tempEvents[ap].videoSeries), 30) ||
                        '') +
                      '||' +
                      (trimVideo(checkGetVarValue(tempEvents[ap].mediaTrigger), 8) ||
                        trimVideo(checkGetVarValue(tempEvents[ap].videoTrigger), 8) ||
                        '') +
                      '|' +
                      (trimVideo(checkGetVarValue(tempEvents[ap].mediaPreRollFlag), 20) ||
                        trimVideo(checkGetVarValue(tempEvents[ap].videoPreRollFlag), 20) ||
                        '') +
                      '|' +
                      (trimVideo(checkGetVarValue(tempEvents[ap].mediaSequenceCount), 3) ||
                        trimVideo(
                          checkGetVarValue(ddo.getVar('page.media.sequenceCount'), 's'),
                          3
                        ) ||
                        trimVideo(checkGetVarValue(tempEvents[ap].videoSequenceCount), 3) ||
                        '') +
                      '|' +
                      (trimVideo(checkGetVarValue(tempEvents[ap].mediaSequenceNum), 3) ||
                        trimVideo(
                          checkGetVarValue(ddo.getVar('page.media.sequenceNum'), 's'),
                          3
                        ) ||
                        trimVideo(checkGetVarValue(tempEvents[ap].videoSequenceNum), 3) ||
                        '')) &&
                    0 == containsNothingButDelimiters(temp226, '|') &&
                    (s_att.eVar226 = temp226),
                  'impression' !== tempEvents[ap].eventAction)
                ) {
                  var tempContentDetails =
                    checkGetVarValue(tempEvents[ap].contentFriendlyName) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].contentProductGroup) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].contentSystem);
                  s_att.prop56 = '||' === tempContentDetails ? '' : tempContentDetails;
                  var tempContentID =
                    checkGetVarValue(
                      tempEvents[ap].contentId || tempEvents[ap].searchContentId || ''
                    ) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].contentFriendlyName);
                  (s_att.prop22 = '|' === tempContentID ? '' : tempContentID),
                    (s_att.prop23 = checkGetVarValue(tempEvents[ap].slotPosition, 's') || '');
                }
                (templc49 =
                  tempEvents[ap]._bevtFriendlyPageName ||
                  tempEvents[ap]._evtFriendlyPageName ||
                  ddo.getVar('page.pageInfo.friendlyPageName') ||
                  ''),
                  'Business' !== tempPageOwnership &&
                    ((templc49 = templc49.replace(/[\u2013\u2014]/g, '-')),
                    (templc49 = templc49.replace(/\ÃƒÆ'Ã†'\?/g, '')),
                    (templc49 = templc49.replace(/\ÃƒÆ'Ã¢â‚¬Å¡\Ãƒâ€šÃ‚Â¢/g, '')),
                    (templc49 = templc49.replace(/\ÃƒÆ'Ã¢â‚¬Å¡\?/g, '')),
                    (templc49 = templc49.replace(/\ÃƒÆ'Ã¢â‚¬Å¡\Ãƒâ€šÃ‚Â¡/g, '')),
                    (templc49 = templc49.replace(/\ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³/g, '')),
                    (templc49 = templc49.replace(/\ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â®/g, '')),
                    (templc49 = templc49.replace(/\ÃƒÆ'Ã¢â‚¬Å¡ /g, '')),
                    (templc49 = templc49.replace(/\'/g, ''))),
                  (s_att.prop49 = s_att.eVar49 = checkGetVarValue(templc49)),
                  (tempSku = checkGetVarValue(tempEvents[ap].contentSku) || ''),
                  '' !== tempSku &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event270',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event270', ',', 1)),
                    (tempProdString = s_att.apl(s_att.products, ';' + tempSku + ';1;;;;', ',', 1)),
                    (s_att.products = tempProdString)),
                  (tempCPSID = checkGetVarValue(tempEvents[ap].contentPageSectionId) || ''),
                  (s_att.eVar229 = tempCPSID || ''),
                  (tempPageGroup = checkGetVarValue(tempEvents[ap]._evtPageGroup)),
                  'UNDEFINED' == tempPageGroup &&
                    ((tempPageGroup = ddo.getVar('page.category.pageGroup')),
                    'UNDEFINED' == tempPageGroup && (tempPageGroup = '')),
                  (s_att.eVar63 = tempPageGroup);
                var temp95 =
                  (checkGetVarValue(tempEvents[ap]._evtPageOwnership) ||
                    checkGetVarValue(tempEvents[ap].pageOwnership) ||
                    checkGetVarValue(ddo.getVar('page.category.pageOwnership')) ||
                    '') +
                  '|' +
                  checkGetVarValue(tempPageGroup) +
                  '|' +
                  (checkGetVarValue(tempEvents[ap]._evtLineOfBusiness) ||
                    checkGetVarValue(ddo.getVar('page.pageInfo.lineOfBusiness'))) +
                  '|' +
                  (checkGetVarValue(tempEvents[ap]._evtPageFunction) ||
                    checkGetVarValue(ddo.getVar('page.category.pageFunction')) ||
                    '');
                '|||' == temp95 && (temp95 = ''), (s_att.eVar95 = temp95);
                var tempConnVehStr = '',
                  tempConnVeh = new Array();
                tempConnVeh.push(
                  checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleYear'))
                ),
                  tempConnVeh.push(
                    checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleMake'))
                  ),
                  tempConnVeh.push(
                    checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleModel'))
                  ),
                  tempConnVeh.push(
                    checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleTrim'))
                  ),
                  tempConnVeh.push(
                    checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleManufacturer'))
                  ),
                  tempConnVeh.push(
                    checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleEnrollmentType'))
                  ),
                  '' != (tempConnVehStr = tempConnVeh.join('|')) &&
                    0 == containsNothingButDelimiters(tempConnVehStr, '|') &&
                    (s_att.eVar96 = tempConnVehStr);
                var tempPmtArrangementCode =
                    checkGetVarValue(ddo.getVar('page.attributes.paymentArrangementCode')) ||
                    checkGetVarValue(tempEvents[ap].paymentArrangementCode) ||
                    checkGetVarValue(tempEvents[ap].pmtArrangementCode) ||
                    '',
                  tempPmtExperienceCode =
                    checkGetVarValue(ddo.getVar('page.attributes.paymentExperienceCode')) ||
                    checkGetVarValue(tempEvents[ap].paymentExperienceCode) ||
                    checkGetVarValue(tempEvents[ap].pmtExperienceCode) ||
                    '',
                  tempPmtExperienceAcctStatus =
                    checkGetVarValue(
                      ddo.getVar('page.attributes.paymentExperienceAccountStatus')
                    ) ||
                    checkGetVarValue(tempEvents[ap].paymentExperienceAccountStatus) ||
                    checkGetVarValue(tempEvents[ap].pmtExperienceAcctStatus) ||
                    '';
                (tempFeatureSelect =
                  checkGetVarValue(tempEvents[ap].featureSelect) ||
                  checkGetVarValue(tempEvents[ap].featureSelected) ||
                  'undefined'),
                  (tempFeatureCategory = checkGetVarValue(tempEvents[ap].featureCategory) || ''),
                  (tempAddonCategoryName =
                    checkGetVarValue(tempEvents[ap].addonCategoryName) || '');
                var tempAIFUT,
                  tempSAUT,
                  tempUAS = new Array();
                tempUAS.push(checkGetVarValue(tempEvents[ap].benefitsLevel)),
                  tempUAS.push(
                    checkGetVarValue(ddo.getVar('user.account.acctInFocusTenureGroup'))
                  ),
                  tempUAS.push(checkGetVarValue('')),
                  tempUAS.push(checkGetVarValue(ddo.getVar('user.account.dtvBillerIndicator'))),
                  tempUAS.push(checkGetVarValue(ddo.getVar('user.login.userType'))),
                  (tempAIFUT = checkGetVarValue(
                    ddo.getVar('user.account.accountInFocusUserType')
                  )),
                  (tempSAUT = checkGetVarValue(tempEvents[ap].selectedAccountUserType)),
                  '' !== tempAIFUT
                    ? tempUAS.push(tempAIFUT)
                    : '' !== tempSAUT
                    ? tempUAS.push(tempSAUT)
                    : tempUAS.push(''),
                  tempUAS.push(checkGetVarValue(ddo.getVar('user.attributes.dtvBillingPlatform')));
                var tempUASstr = tempUAS.join('|');
                '' != tempUASstr &&
                  0 == containsNothingButDelimiters(tempUASstr, '|') &&
                  (s_att.eVar202 = tempUASstr),
                  'undefined' != tempFeatureSelect &&
                    (s_att.eVar207 = tempFeatureSelect + '|' + tempAddonCategoryName),
                  'Business' == tempPageOwnership
                    ? ((s_att.eVar211 = tempEvents[ap].rateplanCode || ''),
                      (s_att.eVar47 = tempEvents[ap].planType || ''))
                    : ((tempNewRatePlanCode =
                        tempEvents[ap].newRatePlanSOC ||
                        tempEvents[ap].newRatePlan ||
                        tempEvents[ap].newRp ||
                        ''),
                      (tempCurrentRatePlanCode =
                        tempEvents[ap].currentRatePlanSOC ||
                        tempEvents[ap].currentRatePlan ||
                        tempEvents[ap].currRp ||
                        ''),
                      (tempEffectiveDateOption = tempEvents[ap].effectiveDateOption || ''),
                      (tempRecommendedRatePlan = tempEvents[ap].recommendedRatePlan || ''),
                      (tempRecommendedRatePlanSOC = tempEvents[ap].recommendedRatePlanSOC || ''),
                      (tempRecommendedRatePlanMRC = tempEvents[ap].recommendedRatePlanMRC || ''),
                      (tempRecommendedRatePlanName = tempEvents[ap].recommendedRatePlanName || ''),
                      (tempNewRatePlanName = tempEvents[ap].newRatePlanName || ''),
                      (tempNewRatePlanMRC = tempEvents[ap].newRatePlanMRC || ''),
                      (tempCurrentRatePlanName = tempEvents[ap].currentRatePlanName || ''),
                      (tempCurrentRatePlanMRC = tempEvents[ap].currentRatePlanMRC || ''),
                      'undefined' != typeof tempNewRatePlanCode &&
                        '' != tempNewRatePlanCode &&
                        (tempNewRatePlanCode.indexOf('~') > -1
                          ? (tempNewRatePlanCode = tempNewRatePlanCode.replace(/~/g, '|'))
                          : (tempNewRatePlanCode =
                              tempNewRatePlanCode +
                              '|' +
                              tempNewRatePlanName +
                              '|' +
                              tempNewRatePlanMRC)),
                      'undefined' != typeof tempCurrentRatePlanCode &&
                        '' != tempCurrentRatePlanCode &&
                        (tempCurrentRatePlanCode.indexOf('~') > -1
                          ? (tempCurrentRatePlanCode = tempCurrentRatePlanCode.replace(/~/g, '|'))
                          : (tempCurrentRatePlanCode =
                              tempCurrentRatePlanCode +
                              '|' +
                              tempCurrentRatePlanName +
                              '|' +
                              tempCurrentRatePlanMRC)),
                      ('' == tempRecommendedRatePlan && '' == tempRecommendedRatePlanSOC) ||
                        (tempRecommendedRatePlan.indexOf('~') > -1
                          ? (tempRecommendedRatePlan = tempRecommendedRatePlan.replace(/~/g, '|'))
                          : (tempRecommendedRatePlan =
                              tempRecommendedRatePlanSOC +
                              '|' +
                              tempRecommendedRatePlanName +
                              '|' +
                              tempRecommendedRatePlanMRC)),
                      (tempeVar211 =
                        tempNewRatePlanCode +
                        '|' +
                        tempCurrentRatePlanCode +
                        '|' +
                        tempEffectiveDateOption +
                        '|' +
                        tempRecommendedRatePlan),
                      '' != tempeVar211 &&
                        0 == containsNothingButDelimiters(tempeVar211, '|') &&
                        (s_att.eVar211 = tempeVar211)),
                  (s_att.prop36 = s_att.eVar4 = tempEvents[ap].errorType || '');
                var ioc = ddo.getVar('page.attributes.ioCode') || '',
                  pmc = tempEvents[ap].promoCode || '';
                pmc.indexOf('|') > -1 && (pmc = pmc.split('|')[0]);
                var tnf = ddo.getVar('user.tech.thinNativeFlag') || '',
                  cpf = tempEvents[ap].consentPageFormat || '',
                  ptm = checkGetVarValue(ddo.getVar('page.attributes.pageTriggerMethod'));
                (s_att.eVar99 = ioc + '|' + pmc + '|' + tnf + '|' + cpf + '|' + ptm),
                  containsNothingButDelimiters(s_att.eVar99, '|') && (s_att.eVar99 = ''),
                  (s_att.eVar100 =
                    tempEvents[ap]._evtmaxPageDepthViewed ||
                    ddo.getVar('page.pageInfo.maxPageDepthViewed') ||
                    ''),
                  ('linkClick' !== tempEvents[ap].eventAction &&
                    'formResponse' !== tempEvents[ap].eventAction) ||
                    (void 0 !== tempEvents[ap].linkCoordinateX &&
                      void 0 !== tempEvents[ap].linkCoordinateY &&
                      '' !== tempEvents[ap].linkCoordinateX &&
                      '' !== tempEvents[ap].linkCoordinateY &&
                      ((s_att.eVar101 =
                        checkGetVarValue(tempEvents[ap].linkCoordinateX) +
                          '|' +
                          checkGetVarValue(tempEvents[ap].linkCoordinateY) ||
                        checkGetVarValue(ddo.getVar('linkCoordinateX')) +
                          '|' +
                          checkGetVarValue(ddo.getVar('linkCoordinateY'))),
                      containsNothingButDelimiters(s_att.eVar101, '|') && (s_att.eVar101 = ''))),
                  (tempHBOPromo =
                    checkGetVarValue(tempEvents[ap].promotionType) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].promotionQualifier) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].promotionDiscountPrice)),
                  '' != tempHBOPromo &&
                    0 == containsNothingButDelimiters(tempHBOPromo, '|') &&
                    (s_att.eVar102 = tempHBOPromo),
                  void 0 !== s_att.eVar30 &&
                    0 === s_att.eVar30.length &&
                    SetBillingAccountNumber(tempEvents[ap]),
                  (tempVS = window.VISITOR_STATE || ''),
                  (temp81 =
                    checkGetVarValue(ddo.getVar('user.customerType')) + '|' + tempVS || ''),
                  '' != temp81 &&
                    0 == containsNothingButDelimiters(temp81, '|') &&
                    (s_att.eVar81 = temp81),
                  (tempContentType = checkGetVarValue(tempEvents[ap].searchContentType) || ''),
                  (tempSearchType =
                    tempEvents[ap].internalSearchType ||
                    tempEvents[ap].selectedAccountIdMethod ||
                    tempEvents[ap].mobileNumberSearchOption ||
                    tempEvents[ap].currentSearchTermCategory ||
                    ''),
                  (tempSearchTerm =
                    tempEvents[ap].currentSearchTerm || tempEvents[ap].internalSearchTerm || ''),
                  (tempSTL = tempSearchTerm.toLowerCase() || ''),
                  'Business' == tempPageOwnership &&
                    'undefined' != typeof tempSearchType &&
                    '' != tempSearchType &&
                    (('undefined' != typeof tempSearchTerm && '' != tempSearchTerm) ||
                      (tempSearchTerm = 'Term Not Provided')),
                  (tempSearchResults =
                    tempEvents[ap].currentSearchResultCount ||
                    tempEvents[ap].internalSearchNumResults),
                  (tempAutoSuggest = tempEvents[ap].autoSuggestInd),
                  'number' == typeof tempSearchResults &&
                    (tempSearchResults = tempSearchResults.toString()),
                  '0' == tempSearchResults && (tempSearchResults = 'No Results'),
                  'undefined' != typeof tempSearchTerm &&
                    '' != tempSearchTerm &&
                    ((s_att.eVar5 = s_att.prop9 = tempSTL || ''),
                    (s_att.eVar6 = s_att.prop10 = tempSearchResults),
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event16', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event16', ',', 1))),
                  'undefined' != typeof tempContentType && '' != tempContentType
                    ? (s_att.eVar76 = s_att.prop33 = tempSearchType + '|' + tempContentType)
                    : (s_att.eVar76 = s_att.prop33 = tempSearchType),
                  'undefined' != typeof tempAutoSuggest &&
                    ('Y' == tempAutoSuggest
                      ? ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event75',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event75', ',', 1)))
                      : 'N' == tempAutoSuggest &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event76',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event76', ',', 1)))),
                  'No Results' == tempSearchResults &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event17', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event17', ',', 1))),
                  (tempEventCode.indexOf('Mbl-GlblSearch') > -1 ||
                    tempEventCode.indexOf('Mbl-Srch') > -1 ||
                    tempEventCode.indexOf('Srch_') > -1) &&
                    (s_att.eVar15 = s_att.prop42 = tempEventCode),
                  void 0 !== tempEvents[ap].passwordSavedFlag &&
                    '1' == tempEvents[ap].passwordSavedFlag &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event42', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event42', ',', 1))),
                  (temp172 =
                    checkGetVarValue(tempEvents[ap].chargeType) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].disputeReasonType) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].billVariance)),
                  '' != temp172 &&
                    0 == containsNothingButDelimiters(temp172, '|') &&
                    (s_att.eVar172 = temp172.replace('~', '|')),
                  void 0 === tempEvents[ap].billVarianceFlag ||
                    (1 !== tempEvents[ap].billVarianceFlag &&
                      '1' !== tempEvents[ap].billVarianceFlag) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event130',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event130', ',', 1)));
                var displayedMessage = ddo.getVar('page.attributes.displayedMessage') || '',
                  eventsDisplayedMessage = tempEvents[ap].displayedMessage || '',
                  displayedMessageType = ddo.getVar('page.attributes.displayedMessageType') || '',
                  eVar230_TwoFactor = displayedMessageType.length > 0;
                displayedMessage.length > 0 || eventsDisplayedMessage.length > 0
                  ? (eVar230_TwoFactor
                      ? (displayedMessage.length > 230 &&
                          (displayedMessage = displayedMessage.substring(0, 230)),
                        (s_att.eVar230 = displayedMessage + '|' + displayedMessageType))
                      : (s_att.eVar230 = displayedMessage || eventsDisplayedMessage || ''),
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event271', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event271', ',', 1)))
                  : 'Biz_Activation_Account_Information_Confirm_Clicked' ==
                      tempEvents[ap].eventCode &&
                    void 0 !== tempEvents[ap].securityQuestionList &&
                    (s_att.eVar230 = tempEvents[ap].securityQuestionList || ''),
                  tempEventCode.indexOf('DS_System_Upgrade_Eligibility_Displayed') > -1 &&
                    (void 0 === tempEvents[ap].isMultilineUpgradeEligible ||
                      ('1' != tempEvents[ap].isMultilineUpgradeEligible &&
                        1 != tempEvents[ap].isMultilineUpgradeEligible) ||
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event257',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event257', ',', 1)))),
                  (tempEventCode.indexOf('DS_Upgrade_Proceed_To_Checkout_Submit') > -1 ||
                    tempEventCode.indexOf('DS_Upgrade_Continue_Submit') > -1 ||
                    tempEventCode.indexOf('DS_System_Upgrade_Cart_Summary_Display') > -1 ||
                    tempEventCode.indexOf('DS_System_Upgrade_Checkout_Display') > -1 ||
                    tempEventCode.indexOf('DS_System_Upgrade_Order_Confirmed') > -1) &&
                    (void 0 === tempEvents[ap].isMultilineUpgrade ||
                      ('1' != tempEvents[ap].isMultilineUpgrade &&
                        1 != tempEvents[ap].isMultilineUpgrade) ||
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event258',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event258', ',', 1)))),
                  void 0 === tempEvents[ap].connectedComm ||
                    ('Y' != tempEvents[ap].connectedComm && 'y' != tempEvents[ap].connectedComm) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event203',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event203', ',', 1))),
                  void 0 === tempEvents[ap].connectedComm ||
                    ('N' != tempEvents[ap].connectedComm && 'n' != tempEvents[ap].connectedComm) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event204',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event204', ',', 1))),
                  void 0 === tempEvents[ap].dtvConnectedComm ||
                    ('Y' != tempEvents[ap].dtvConnectedComm &&
                      'y' != tempEvents[ap].dtvConnectedComm) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event205',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event205', ',', 1))),
                  void 0 === tempEvents[ap].dtvConnectedComm ||
                    ('N' != tempEvents[ap].dtvConnectedComm &&
                      'n' != tempEvents[ap].dtvConnectedComm) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event206',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event206', ',', 1))),
                  tempEventCode.indexOf('HRock_System_Upgrade_Offer_Displayed') > -1 &&
                    (void 0 === tempEvents[ap].isMultilineUpgradeEligible ||
                      ('1' != tempEvents[ap].isMultilineUpgradeEligible &&
                        1 != tempEvents[ap].isMultilineUpgradeEligible) ||
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event257',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event257', ',', 1)))),
                  tempEventCode.indexOf('HRock_Cart_Upgrade_Submit') > -1 &&
                    (void 0 === tempEvents[ap].isMultilineUpgrade ||
                      ('1' != tempEvents[ap].isMultilineUpgrade &&
                        1 != tempEvents[ap].isMultilineUpgrade) ||
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event258',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event258', ',', 1)))),
                  'myATT_PMT_AutoPay_Delete_Modal_Displayed' == tempEvents[ap].eventCode &&
                    (void 0 === tempEvents[ap].autoPayMessageDisplayed ||
                      ('Y' != tempEvents[ap].autoPayMessageDisplayed &&
                        'y' != tempEvents[ap].autoPayMessageDisplayed) ||
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event272',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event272', ',', 1))));
                var tempPmtUsed =
                  tempEvents[ap].pmtUsedStoredProf ||
                  tempEvents[ap].paymentUsedStoredProfileFlag ||
                  '';
                '' == tempPmtUsed ||
                  ('Y' != tempPmtUsed &&
                    'y' != tempPmtUsed &&
                    1 != tempPmtUsed &&
                    '1' != tempPmtUsed) ||
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event259', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event259', ',', 1)));
                var tempPmtStored =
                  tempEvents[ap].pmtProfStored ||
                  tempEvents[ap].SavedPaymentMethod_flag ||
                  tempEvents[ap].paymentProfileStoredFlag ||
                  '';
                '' == tempPmtStored ||
                  ('y' != tempPmtStored &&
                    'Y' != tempPmtStored &&
                    '1' != tempPmtStored &&
                    1 != tempPmtStored) ||
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event260', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event260', ',', 1)));
                var tempPmtEnroll =
                  tempEvents[ap].pmtAutoPayEnroll || tempEvents[ap].paymentAutoPayEnrollFlag || '';
                if (
                  ('' == tempPmtEnroll ||
                    ('Y' != tempPmtEnroll &&
                      'y' != tempPmtEnroll &&
                      '1' != tempPmtEnroll &&
                      1 != tempPmtEnroll) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event261',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event261', ',', 1))),
                  void 0 === tempEvents[ap].paperlessBillFlag ||
                    ('1' != tempEvents[ap].paperlessBillFlag &&
                      1 != tempEvents[ap].paperlessBillFlag) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event262',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event262', ',', 1))),
                  void 0 === tempEvents[ap].autoPayFlag ||
                    ('1' != tempEvents[ap].autoPayFlag && 1 != tempEvents[ap].autoPayFlag) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event264',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event264', ',', 1))),
                  (void 0 === tempEvents[ap].upSellOfferDetails &&
                    void 0 === tempEvents[ap].uverseUpSellDetails) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event265',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event265', ',', 1))),
                  (void 0 === tempEvents[ap].crossSellOfferDetails &&
                    void 0 === tempEvents[ap].uverseCrossSellDetails) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event266',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event266', ',', 1))),
                  void 0 === tempEvents[ap].changePaymentSelectionFlag ||
                    ('1' != tempEvents[ap].changePaymentSelectionFlag &&
                      1 != tempEvents[ap].changePaymentSelectionFlag) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event273',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event273', ',', 1))),
                  void 0 === tempEvents[ap].changedShippingAddressFlag ||
                    ('1' != tempEvents[ap].changedShippingAddressFlag &&
                      1 != tempEvents[ap].changedShippingAddressFlag) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event274',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event274', ',', 1))),
                  void 0 === tempEvents[ap].optinEmailFlag ||
                    ('1' != tempEvents[ap].optinEmailFlag && 1 != tempEvents[ap].optinEmailFlag) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event275',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event275', ',', 1))),
                  void 0 === tempEvents[ap].optinContactFlag ||
                    ('1' != tempEvents[ap].optinContactFlag &&
                      1 != tempEvents[ap].optinContactFlag) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event276',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event276', ',', 1))),
                  void 0 === tempEvents[ap].preferredAreaCodeFlag ||
                    ('1' != tempEvents[ap].preferredAreaCodeFlag &&
                      1 != tempEvents[ap].preferredAreaCodeFlag) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event277',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event277', ',', 1))),
                  void 0 ===
                    checkGetVarValue(ddo.getVar('user.attributes.connectedVehiclePrepaidFlag')) ||
                    ('1' !=
                      checkGetVarValue(
                        ddo.getVar('user.attributes.connectedVehiclePrepaidFlag')
                      ) &&
                      1 !=
                        checkGetVarValue(
                          ddo.getVar('user.attributes.connectedVehiclePrepaidFlag')
                        )) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event278',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event278', ',', 1))),
                  void 0 !== tempEvents[ap].userIdSavedFlag &&
                    '1' == tempEvents[ap].userIdSavedFlag &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event43', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event43', ',', 1))),
                  (s_att.prop73 = s_att.eVar73 =
                    tempEvents[ap]._evtChatState ||
                    checkGetVarValue(ddo.getVar('page.pageInfo.chatState'))),
                  'available' == s_att.prop73.toLowerCase() &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event19', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event19', ',', 1))),
                  void 0 === tempEvents[ap].existingDtvAcctFlag ||
                    ('Y' != tempEvents[ap].existingDtvAcctFlag &&
                      'y' != tempEvents[ap].existingDtvAcctFlag) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event263',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event263', ',', 1))),
                  (tempPmtArrange =
                    tempEvents[ap].pmtArrange || tempEvents[ap].paymentArrangementFlag || ''),
                  'N' === tempPmtArrange ||
                    'Y' === tempPmtArrange ||
                    '0' === tempPmtArrange ||
                    '1' === tempPmtArrange ||
                    0 === tempPmtArrange ||
                    1 === tempPmtArrange)
                ) {
                  var tempVar214 =
                    tempPmtArrange +
                    '|' +
                    tempPmtArrangementCode +
                    '|' +
                    tempPmtExperienceCode +
                    '|' +
                    tempPmtExperienceAcctStatus;
                  '' != tempVar214 &&
                    0 == containsNothingButDelimiters(tempVar214, '|') &&
                    (s_att.eVar214 = tempVar214);
                }
                if (
                  ((tempPageUrl = checkGetVarValue(tempEvents[ap]._evtAddressBarFullURL) || ''),
                  (temp88 = s_att.eVar188 || ''),
                  (temp88.toLowerCase().indexOf('agentsso') > -1 ||
                    tempPageUrl.toLowerCase().indexOf('agentsso') > -1 ||
                    tempPageUrl.toLowerCase().indexOf('opus') > -1) &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event312',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event312', ',', 1))),
                  '1' == checkGetVarValue(tempEvents[ap].contactEmailFlag, 's') &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event401',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event401', ',', 1))),
                  '1' == checkGetVarValue(tempEvents[ap].contactWirelessNumberFlag, 's') &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event402',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event402', ',', 1))),
                  '1' == checkGetVarValue(tempEvents[ap].emailOnFlag, 's') &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event403',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event403', ',', 1))),
                  '1' == checkGetVarValue(tempEvents[ap].textOnFlag, 's') &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event404',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event404', ',', 1))),
                  '1' == checkGetVarValue(tempEvents[ap].callOnFlag, 's') &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event405',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event405', ',', 1))),
                  '1' == checkGetVarValue(tempEvents[ap].offerTypeFlag, 's') &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event408',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event408', ',', 1))),
                  '0' == checkGetVarValue(tempEvents[ap].offerTypeFlag, 's') &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event409',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event409', ',', 1))),
                  'yes' === checkGetVarValue(tempEvents[ap].emailOptIn, 's').toLowerCase() &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event525',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event525', ',', 1))),
                  'yes' === checkGetVarValue(tempEvents[ap].changeEmail, 's').toLowerCase() &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event527',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event527', ',', 1))),
                  'yes' === checkGetVarValue(tempEvents[ap].alertHBA, 's').toLowerCase() &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event529',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event529', ',', 1))),
                  tempEventCode.indexOf('DS_Check_Avail_Submit') > -1 ||
                    tempEventCode.indexOf('DS_System_Check_Avail_Response') > -1 ||
                    tempEventCode.indexOf('hsiaInstantOnAvailResult') > -1)
                ) {
                  (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event601', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event601', ',', 1));
                  var elg = tempEvents[ap].eligResult || '',
                    dtvElg = tempEvents[ap].dtvIneligibleReason || '';
                  elg.length > 150 && (elg = elg.substring(0, 150)),
                    dtvElg.length > 50 && (dtvElg = dtvElg.substring(0, 50));
                  var tempELG = new Array();
                  tempELG.push(tempEvents[ap].gigaAvailResult) || tempELG.push(''),
                    tempELG.push(tempEvents[ap].iptvAvailResult) || tempELG.push(''),
                    tempELG.push(tempEvents[ap].voipAvailResult) || tempELG.push(''),
                    tempELG.push(tempEvents[ap].hsiaAvailResult) || tempELG.push(''),
                    tempELG.push(tempEvents[ap].dtvAvailResult) || tempELG.push(''),
                    tempELG.push(tempEvents[ap].wllAvailResult) || tempELG.push(''),
                    tempELG.push(tempEvents[ap].wirelessAvailResult) || tempELG.push(''),
                    tempELG.push(tempEvents[ap].wlHpAvailResult) || tempELG.push(''),
                    tempELG.push(tempEvents[ap].existingServiceSummary) || tempELG.push(''),
                    tempELG.push(tempEvents[ap].uverseTransportType) || tempELG.push(''),
                    tempELG.push(elg) || tempELG.push(''),
                    tempELG.push(dtvElg) || tempELG.push(''),
                    tempELG.push(tempEvents[ap].atttvAvailResult) || tempELF.push('');
                  var tempELGstr = tempELG.join('|');
                  !1 === containsNothingButDelimiters(tempELGstr, '|') &&
                    (s_att.eVar48 = tempELGstr);
                }
                var giga = tempEvents[ap].gigaAvailResult || '',
                  iptv = tempEvents[ap].iptvAvailResult || '',
                  voip = tempEvents[ap].voipAvailResult || '',
                  hsia = tempEvents[ap].hsiaAvailResult || '';
                if (
                  ((s_att.prop14 = s_att.eVar11 = ''),
                  (s_att.prop55 = ''),
                  tempEventCode.indexOf('DS_Check_Avail_Submit') > -1 &&
                    (giga.indexOf('Green') > -1 ||
                      iptv.indexOf('Green') > -1 ||
                      voip.indexOf('Green') > -1 ||
                      hsia.indexOf('Green') > -1) &&
                    ((s_att.linkTrackVars = s_att.apl(
                      s_att.linkTrackVars,
                      'prop14,eVar11',
                      ',',
                      1
                    )),
                    (s_att.prop14 = s_att.eVar11 = 'HSDS|1|Green|Core|Upper|EG Sales'),
                    (s_att.prop55 =
                      s_att.eVar11.split('|')[4] +
                      '|' +
                      s_att.eVar11.split('|')[0] +
                      '|' +
                      s_att.eVar11.split('|')[1])),
                  void 0 !== tempSuccessFlagCheck &&
                    '1' == tempSuccessFlagCheck &&
                    (tempEventCode.indexOf('eBiz - Order Started') > -1 &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event506',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event506', ',', 1))),
                    tempEventCode.indexOf('eBiz - Order Review') > -1 &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event11',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event11', ',', 1))),
                    tempEventCode.indexOf('Srch_ResultClick') > -1 &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event12',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event12', ',', 1)))),
                  (tempLPN =
                    checkGetVarValue(tempEvents[ap].lnpFlag) ||
                    checkGetVarValue(ddo.getVar('user.attributes.lnpFlag')) ||
                    ''),
                  ('Yes' !== tempLPN &&
                    'Y' !== tempLPN &&
                    'y' !== tempLPN &&
                    '1' !== tempLPN &&
                    1 !== tempLPN) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      ',event85',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event85', ',', 1))),
                  tempEventCode.indexOf('HRock_System_TradeIn_Requested') > -1 ||
                    (tempEventCode.indexOf('DS_TradeIn_Request_Submit') > -1 &&
                      '1' == checkGetVarValue(tempEvents[ap].tradeInFlag, 's')))
                )
                  if ('1' == checkGetVarValue(tempEvents[ap].successFlag, 's'))
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event86', ',', 1)),
                      (s_att.events = s_att.apl(s_att.events, 'event86', ',', 1));
                  else {
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event87', ',', 1)),
                      (s_att.events = s_att.apl(s_att.events, 'event87', ',', 1));
                    var tempStat = '|' + checkGetVarValue(tempEvents[ap].statusCode);
                    '|' != tempStat && (s_att.eVar94 = tempStat || '');
                  }
                if (
                  ((tempEventCode.indexOf('HRock_Remove_TradeIn_Submit') > -1 ||
                    (tempEventCode.indexOf('DS_Remove_TradeIn_Submit') > -1 &&
                      '1' == checkGetVarValue(tempEvents[ap].tradeInFlag, 's'))) &&
                    '1' == checkGetVarValue(tempEvents[ap].successFlag, 's') &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event88', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event88', ',', 1))),
                  (tempEventCode.indexOf('HRock_System_Order_Confirmed') > -1 ||
                    tempEventCode.indexOf('DS_System_Order_Confirmed') > -1) &&
                    '1' == checkGetVarValue(tempEvents[ap].tradeInFlag, 's'))
                ) {
                  '1' == tempEvents[ap].tradeInStatus[0]
                    ? ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event89',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event89', ',', 1)))
                    : ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event90',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event90', ',', 1)));
                  var tempTrade =
                    checkGetVarValue(tempEvents[ap].deviceTradeInValue) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].tradeInStatus);
                  '|' != tempTrade && (s_att.eVar94 = tempTrade || '');
                }
                void 0 !== tempSuccessFlagCheck &&
                  '1' == tempSuccessFlagCheck &&
                  tempEventCode.indexOf('eBiz_Activation_Contact_Information_Confirm_Clicked') >
                    -1 &&
                  void 0 !== tempEvents[ap].doNotCallWirelessClicked &&
                  'yes' === tempEvents[ap].doNotCallWirelessClicked.toLowerCase() &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event311', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event311', ',', 1))),
                  (tempDownPaymentReq = tempEvents[ap].downPaymentReq),
                  (tempSecurityDepositReq = tempEvents[ap].securityDepositReq),
                  (tempDepositRequiredLineCount = tempEvents[ap].depositRequiredLineCount),
                  (tempLineCount = tempEvents[ap].lineCount),
                  (tempLineRemoveCount = tempEvents[ap].lineRemoveCount),
                  (tempEventCode.indexOf('HRock_System_Order_Reviewed') > -1 ||
                    tempEventCode.indexOf('Mbl-HRock_System_Order_Reviewed') > -1) &&
                    ('1' == tempDownPaymentReq &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event77',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event77', ',', 1))),
                    'Y' == tempSecurityDepositReq &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event78',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event78', ',', 1))),
                    'undefined' != typeof tempDepositRequiredLineCount &&
                      '' != tempDepositRequiredLineCount &&
                      null != tempDepositRequiredLineCount &&
                      ((tempDepositRequiredLineCount =
                        'event79=' + tempDepositRequiredLineCount.toString()),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event79',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(
                        s_att.events,
                        tempDepositRequiredLineCount,
                        ',',
                        1
                      )))),
                  (tempEventCode.indexOf('HRock_System_Order_Confirmed') > -1 ||
                    tempEventCode.indexOf('Mbl-HRock_System_Order_Confirmed') > -1) &&
                    ('undefined' != typeof tempLineCount &&
                      '' != tempLineCount &&
                      null != tempLineCount &&
                      ((tempLineCount = 'event25=' + tempLineCount.toString()),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event25',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, tempLineCount, ',', 1))),
                    'undefined' != typeof tempLineRemoveCount &&
                      '' != tempLineRemoveCount &&
                      null != tempLineRemoveCount &&
                      ((tempLineRemoveCount = 'event80=' + tempLineRemoveCount.toString()),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event80',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, tempLineRemoveCount, ',', 1))));
                var tempPreOrderFlag = tempEvents[ap].preOrderFlag || '',
                  tempMultiGigOrderFlag = tempEvents[ap].multiGigOrderFlag || '';
                ('1' != tempPreOrderFlag && '1' != tempMultiGigOrderFlag) ||
                  ((tempEventCode.indexOf('eBiz_Order_Started') > -1 ||
                    tempEventCode.indexOf('eBiz_Configuration Save_Clicked') > -1 ||
                    tempEventCode.indexOf('eBiz_Configuration_Submitted') > -1 ||
                    tempEventCode.indexOf('eBiz_Edit Order_Clicked') > -1 ||
                    tempEventCode.indexOf('eBiz_Edit Service Arrangement_Clicked') > -1 ||
                    tempEventCode.indexOf('eBiz_Edit Contact_Information_Clicked') > -1 ||
                    tempEventCode.indexOf('eBiz_Order_Reviewed') > -1 ||
                    tempEventCode.indexOf('eBiz_Order_Confirmed') > -1 ||
                    tempEventCode.indexOf('eBiz_Cancel Order Submission_Clicked') > -1 ||
                    tempEventCode.indexOf('eBiz_Cancel Order Submission_Confirmed') > -1 ||
                    tempEventCode.indexOf('eBiz_Order Cancel_Clicked') > -1 ||
                    tempEventCode.indexOf('eBiz_Order_Cancelled') > -1 ||
                    tempEventCode.indexOf('eBiz_Order_Submit') > -1) &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event95', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event95', ',', 1)))),
                  '' == tempEvents[ap].authSvcs || null == tempEvents[ap].authSvcs
                    ? (s_att.prop27 = 'not set')
                    : 'UNAUTH' == tempEvents[ap].authSvcs
                    ? (s_att.prop27 = 'UnAuth')
                    : (s_att.prop27 = 'Auth'),
                  (s_att.list1 = '');
                var impProd = '';
                if (void 0 !== ddo.getImpressions && 'impression' == tempEvents[ap].eventAction)
                  for (var key in ((adbLCPNCheck =
                    checkGetVarValue(tempEvents[ap]._evtPageURL) ||
                    checkGetVarValue(tempEvents[ap]._bevtPageName) ||
                    checkGetVarValue(tempEvents[ap]._evtPageName) ||
                    checkGetVarValue(tempEvents[ap].linkPageName) ||
                    checkGetVarValue(ddo.getVar('page.pageInfo.pageName')) ||
                    ''),
                  (adbTempLCImpObj = ddo.getImpressions()),
                  adbTempLCImpObj))
                    if (adbTempLCImpObj.hasOwnProperty(key) && key == adbLCPNCheck) {
                      var adbTempLCImpEvents = adbTempLCImpObj[key];
                      for (adblcimp = 0; adblcimp < adbTempLCImpEvents.length; adblcimp++)
                        'impression' == adbTempLCImpEvents[adblcimp].eventAction &&
                          1 != adbTempLCImpEvents[adblcimp]._processedByAdobe &&
                          (ddo.processedByDTM(adbTempLCImpEvents[adblcimp], 'Adobe'),
                          (adblcTempcontentId =
                            adbTempLCImpEvents[adblcimp].contentId ||
                            adbTempLCImpEvents[adblcimp].contentid ||
                            adbTempLCImpEvents[adblcimp].variationID ||
                            adbTempLCImpEvents[adblcimp].variationid ||
                            ''),
                          (adblcTempcontentPageSectionId =
                            adbTempLCImpEvents[adblcimp].contentPageSectionId || ''),
                          (adblcTempcontentTransactionId =
                            adbTempLCImpEvents[adblcimp].componentOrder ||
                            adbTempLCImpEvents[adblcimp].contentTransactionId ||
                            adbTempLCImpEvents[adblcimp].tDataTransactionId ||
                            ''),
                          (adblcTempcontentSystem =
                            adbTempLCImpEvents[adblcimp].contentSystem || ''),
                          (adblcTempcontentFriendlyName =
                            adbTempLCImpEvents[adblcimp].contentFriendlyName || ''),
                          (adblcTempSlotFriendlyName =
                            adbTempLCImpEvents[adblcimp].slotFriendlyName || ''),
                          (adblcTempcontentProductGroup =
                            adbTempLCImpEvents[adblcimp].contentProductGroup || ''),
                          (adblcTempcontentSku = adbTempLCImpEvents[adblcimp].contentSku || ''),
                          (adblcTempSlotPosition =
                            adbTempLCImpEvents[adblcimp].slotPosition || ''),
                          (adblcTempcontentRotationPosition =
                            adbTempLCImpEvents[adblcimp].contentRotationPosition || ''),
                          (adblcTempcontentInventorySpaceId =
                            adbTempLCImpEvents[adblcimp].contentInventorySpaceId || ''),
                          (adblcTempInventorySpaceId =
                            adbTempLCImpEvents[adblcimp].inventorySpaceId || ''),
                          (templcPositionTwo =
                            adblcTempSlotPosition || adblcTempcontentRotationPosition),
                          (templcPositionFour =
                            adblcTempcontentInventorySpaceId || adblcTempInventorySpaceId),
                          adblcTempcontentFriendlyName &&
                            ((s_att.linkTrackEvents = s_att.apl(
                              s_att.linkTrackEvents,
                              'event350',
                              ',',
                              1
                            )),
                            (s_att.events = s_att.apl(s_att.events, 'event350', ',', 1)),
                            (s_att.linkTrackEvents = s_att.apl(
                              s_att.linkTrackEvents,
                              'event352',
                              ',',
                              1
                            )),
                            (s_att.events = s_att.apl(s_att.events, 'event352', ',', 1)),
                            (impProd =
                              ';impression;;;event352=1;eVar243=~' +
                              templcPositionTwo +
                              '~' +
                              adblcTempcontentPageSectionId +
                              '~' +
                              templcPositionFour +
                              '~' +
                              adblcTempcontentTransactionId +
                              '~' +
                              adblcTempcontentSystem +
                              '~' +
                              adblcTempcontentFriendlyName +
                              '~' +
                              adblcTempSlotFriendlyName +
                              '~' +
                              adblcTempcontentProductGroup +
                              '~' +
                              adblcTempcontentSku),
                            (s_att.products = s_att.apl(s_att.products, impProd, ',', 1)),
                            '' == s_att.list1
                              ? (s_att.list1 +=
                                  adblcTempcontentId +
                                  '~' +
                                  templcPositionTwo +
                                  '~' +
                                  adblcTempcontentPageSectionId +
                                  '~' +
                                  templcPositionFour +
                                  '~' +
                                  adblcTempcontentTransactionId +
                                  '~' +
                                  adblcTempcontentSystem +
                                  '~' +
                                  adblcTempcontentFriendlyName +
                                  '~' +
                                  adblcTempSlotFriendlyName +
                                  '~' +
                                  adblcTempcontentProductGroup +
                                  '~' +
                                  adblcTempcontentSku)
                              : (s_att.list1 +=
                                  '|' +
                                  adblcTempcontentId +
                                  '~' +
                                  templcPositionTwo +
                                  '~' +
                                  adblcTempcontentPageSectionId +
                                  '~' +
                                  templcPositionFour +
                                  '~' +
                                  adblcTempcontentTransactionId +
                                  '~' +
                                  adblcTempcontentSystem +
                                  '~' +
                                  adblcTempcontentFriendlyName +
                                  '~' +
                                  adblcTempSlotFriendlyName +
                                  '~' +
                                  adblcTempcontentProductGroup +
                                  '~' +
                                  adblcTempcontentSku)));
                    }
                if (
                  ((adbTempClickId = ''),
                  (adbTempcontentId =
                    tempEvents[ap].contentId ||
                    tempEvents[ap].contentid ||
                    tempEvents[ap].variationID ||
                    tempEvents[ap].variationid ||
                    ''),
                  (adbTempcontentPageSectionId = tempEvents[ap].contentPageSectionId || ''),
                  (adbTempcontentTransactionId =
                    tempEvents[ap].componentOrder ||
                    tempEvents[ap].contentTransactionId ||
                    tempEvents[ap].tDataTransactionId ||
                    ''),
                  (adbTempcontentSystem = tempEvents[ap].contentSystem || ''),
                  (adbTempcontentFriendlyName = tempEvents[ap].contentFriendlyName || ''),
                  (adbTempSlotFriendlyName = tempEvents[ap].slotFriendlyName || ''),
                  (adbTempcontentProductGroup = tempEvents[ap].contentProductGroup || ''),
                  (adbTempcontentSku = tempEvents[ap].contentSku || ''),
                  (adbTempSlotPosition = tempEvents[ap].slotPosition || ''),
                  (adbTempcontentRotationPosition = tempEvents[ap].contentRotationPosition || ''),
                  (adbTempcontentInventorySpaceId = tempEvents[ap].contentInventorySpaceId || ''),
                  (adbTempInventorySpaceId = tempEvents[ap].inventorySpaceId || ''),
                  (adbTempLinkPosition = tempEvents[ap].linkPosition || ''),
                  (tempPositionTwo = adbTempSlotPosition || adbTempcontentRotationPosition),
                  (tempPositionFour = adbTempcontentInventorySpaceId || adbTempInventorySpaceId),
                  adbTempcontentFriendlyName)
                ) {
                  if (
                    'linkClick' == tempEvents[ap].eventAction ||
                    'formSubmit' == tempEvents[ap].eventAction ||
                    'formResponse' == tempEvents[ap].eventAction
                  ) {
                    (s_att.eVar37 =
                      adbTempcontentId +
                      '~' +
                      tempPositionTwo +
                      '~' +
                      adbTempcontentPageSectionId +
                      '~' +
                      tempPositionFour +
                      '~' +
                      adbTempcontentTransactionId +
                      '~' +
                      adbTempcontentSystem +
                      '~' +
                      adbTempcontentFriendlyName +
                      '~' +
                      adbTempSlotFriendlyName +
                      '~' +
                      adbTempcontentProductGroup +
                      '~' +
                      adbTempcontentSku),
                      (s_att.eVar249 =
                        adbTempLinkPosition +
                        '~' +
                        adbTempSlotPosition +
                        '~' +
                        adbTempSlotFriendlyName +
                        '~' +
                        adbTempcontentFriendlyName +
                        '~' +
                        adbTempcontentSystem +
                        '~' +
                        adbTempInventorySpaceId +
                        '~' +
                        adbTempcontentId),
                      (s_att.eVar250 =
                        adbTempcontentId +
                        '~' +
                        adbTempcontentFriendlyName +
                        '~' +
                        adbTempSlotPosition +
                        '~' +
                        adbTempSlotFriendlyName),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event351',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event351', ',', 1)),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event353',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event353', ',', 1));
                    var impClk =
                      ';imp_click;;;event353=1;eVar243=~' +
                      tempPositionTwo +
                      '~' +
                      adbTempcontentPageSectionId +
                      '~' +
                      tempPositionFour +
                      '~' +
                      adbTempcontentTransactionId +
                      '~' +
                      adbTempcontentSystem +
                      '~' +
                      adbTempcontentFriendlyName +
                      '~' +
                      adbTempSlotFriendlyName +
                      '~' +
                      adbTempcontentProductGroup +
                      '~' +
                      adbTempcontentSku;
                    s_att.products = s_att.apl(s_att.products, impClk, ',', 1);
                  }
                  'impression' == tempEvents[ap].eventAction &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event350',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event350', ',', 1)));
                }
                if (
                  ((tempSuccessFlag = checkGetVarValue(tempEvents[ap].successFlag, 's')),
                  s_att.eVar15 &&
                    ('1' === tempSuccessFlag
                      ? ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event48',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event48', ',', 1)))
                      : '0' === tempSuccessFlag
                      ? ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event49',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event49', ',', 1)),
                        'Business' == tempPageOwnership &&
                          ((s_att.linkTrackEvents = s_att.apl(
                            s_att.linkTrackEvents,
                            'event24',
                            ',',
                            1
                          )),
                          (s_att.events = s_att.apl(s_att.events, 'event24', ',', 1)),
                          (s_att.list2 = tempEvents[ap].statusMessage || '')))
                      : '-1' === tempSuccessFlag
                      ? ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event50',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event50', ',', 1)))
                      : '-2' === tempSuccessFlag
                      ? ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event51',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event51', ',', 1)))
                      : ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event98',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event98', ',', 1)))),
                  s_att.eVar3 && '' != s_att.eVar3
                    ? (s_att.eVar167 = 'Authenticated')
                    : (s_att.eVar167 = 'Unauthenticated'),
                  'A_LGN_LOGIN_SUB' == s_att.eVar15 ||
                    'Mbl-myATT_Login_SUB' == s_att.eVar15 ||
                    'HRock_Login_Submit' == s_att.eVar15 ||
                    'Mbl-HRock_Login_Submit' == s_att.eVar15 ||
                    'HRock_System_Login_Submit' == s_att.eVar15 ||
                    'Mbl-MNM_Login_SUB' == s_att.eVar15 ||
                    'Mbl-ToBR_Login_SUB' == s_att.eVar15 ||
                    'MNM_Login_SUB' == s_att.eVar15 ||
                    'ToBR_Login_SUB' == s_att.eVar15 ||
                    'EOS_Login_Submit' == s_att.eVar15 ||
                    'Mbl-EOS_Login_Submit' == s_att.eVar15 ||
                    'MyATT_Login_PrePaid_Submit' == s_att.eVar15 ||
                    'eBiz_Login_Sub' == s_att.eVar15 ||
                    'POS_Login_Submit' == s_att.eVar15 ||
                    'LoginWidget_Login_Sub' == s_att.eVar15 ||
                    'LoginSDK_Login_Sub' == s_att.eVar15 ||
                    'myATT_FPWD_System_Login_Sub' == s_att.eVar15 ||
                    'myATT_REGS_System_Login_Sub' == s_att.eVar15 ||
                    'TS&R_HS_Login_Submit' == s_att.eVar15 ||
                    'Mbl-TS&R_HS_Login_Submit' == s_att.eVar15 ||
                    'Mbl-myATT_Quickview_Login_SUB' == s_att.eVar15 ||
                    'MicroCell_Login_Submit' == s_att.eVar15 ||
                    'OPSS_Supercedes_Login_Sub' == s_att.eVar15 ||
                    'EAP_Login_Submit' == s_att.eVar15 ||
                    'GoPhone_Login_PrePaid_Submit' == s_att.eVar15 ||
                    'GoPhone_Enrollment_Submit' == s_att.eVar15 ||
                    'myATT_LGN_Enter2FactorCode_Sub' == s_att.eVar15)
                )
                  if (1 == tempSuccessFlag) {
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event18', ',', 1)),
                      (s_att.events = s_att.apl(s_att.events, 'event18', ',', 1));
                    var tempSlidAssocAccts = ddo.getVar('user.account.slidAssocAccts');
                    (void 0 !== tempSlidAssocAccts &&
                      '' != tempSlidAssocAccts &&
                      'Default' != tempSlidAssocAccts) ||
                      ddo.setVar('user.account.slidAssocAccts', 'No Accounts');
                  } else
                    0 == tempSuccessFlag &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event3',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event3', ',', 1)));
                tempEventCode.indexOf('eSup_Feedback_Yes_Submit') > -1 &&
                  ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event255', ',', 1)),
                  (s_att.events = s_att.apl(s_att.events, 'event255', ',', 1))),
                  tempEventCode.indexOf('eSup_Feedback_No_Submit') > -1 &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event256',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event256', ',', 1))),
                  shoppingCart.isSuccessfulPurchase() &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'purchase',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'purchase', ',', 1)),
                    (TempLineOrdersCount =
                      checkGetVarValue(tempEvents[ap].lineOrdersCount, 'n') || ''),
                    '' !== TempLineOrdersCount &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event55',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(
                        s_att.events,
                        'event55=' + TempLineOrdersCount,
                        ',',
                        1
                      ))),
                    (TempAccessory = tempEvents[ap].accessoryAttach || ''),
                    '1' == TempAccessory &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event26',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event26', ',', 1))),
                    (TempPostalCode = tempEvents[ap].postalCode || ''),
                    '' != TempPostalCode && (s_att.eVar21 = TempPostalCode),
                    (TempOrderId = tempEvents[ap].orderId || tempEvents[ap].OrderId || ''),
                    '' != TempOrderId &&
                      ((s_att.eVar25 = TempOrderId),
                      (s_att.purchaseID = s_att.transactionID = TempOrderId))),
                  ('A_PMT_QUICK_PAY_SUB' != s_att.eVar15 &&
                    'A_PMT_EDIT_PAY_SETUP' != s_att.eVar15) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event608',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event608', ',', 1))),
                  ('A_PMT_EDIT_PAY_CONFIRM_SUB' != s_att.eVar15 &&
                    'A_PMT_EDIT_PAY_MULTIPLE_PAY_CONFIRM_SUB' != s_att.eVar15 &&
                    'A_PMT_EDIT_PAY_UNSECURED_CONFIRM_SUB' != s_att.eVar15 &&
                    'A_PMT_QUICK_PAY_CONFIRM_SUB' != s_att.eVar15 &&
                    'A_PMT_QUICK_PAY_MULTIPLE_PAY_CONFIRM_SUB' != s_att.eVar15 &&
                    'A_PMT_QUICK_PAY_SCHEDULED_PAYMENT_SUB' != s_att.eVar15 &&
                    'A_PMT_QUICK_PAY_UNSECURED_CONFIRM_SUB' != s_att.eVar15) ||
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event609',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event609', ',', 1))),
                  'A_PMT_QUICK_PAY_AUTOPAY_ENROLL_SUB' == s_att.eVar15 &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event57', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event57', ',', 1))),
                  (s_att.eVar59 = tempEvents[ap].chatSessionId || ''),
                  (tempChat =
                    checkGetVarValue(tempEvents[ap].chatBusinessUnit) +
                    '|' +
                    checkGetVarValue(tempEvents[ap].chatAgentGroup)),
                  '|' != tempChat && (s_att.eVar71 = tempChat || ''),
                  (s_att.eVar9 = tempEvents[ap].chatInviteType || ''),
                  tempEventCode.indexOf('Chat_Request_Submit') > -1 &&
                    '1' == checkGetVarValue(tempEvents[ap].successFlag, 's') &&
                    ((s_att.eVar58 = tempEvents[ap]._evtPageName || ''),
                    (s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event34', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event34', ',', 1))),
                  tempEventCode.indexOf('Chat_Dialogue_Start_Submit') > -1 &&
                    '1' == checkGetVarValue(tempEvents[ap].successFlag, 's') &&
                    ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event35', ',', 1)),
                    (s_att.events = s_att.apl(s_att.events, 'event35', ',', 1))),
                  (s_att.eVar74 = checkGetVarValue(ddo.getVar('user.account.serviceSegment')));
                var tempEC = checkGetVarValue(tempEvents[ap].eventCode),
                  tempSC = checkGetVarValue(tempEvents[ap].statusCode),
                  tempSF = checkGetVarValue(tempEvents[ap].successFlag);
                if (
                  ('' !== tempSC && '0' == tempSF && (s_att.prop50 = tempEC + '|' + tempSC),
                  'Business' == tempPageOwnership)
                )
                  window.dtm_linkOverride = !0;
                if (
                  ((s_att.list3 = ddo.buildGovernedPassThrough(tempEventOrder)),
                  (s_att.eVar75 = 'LC'),
                  ddo.squawk('Adobe LinkClick Rule s_att.events: ' + s_att.events, 1, 'e'),
                  ddo.squawk('Adobe LinkClick Rule Just Before the tl call', 1, 'e'),
                  'undefined' != typeof ddo && !ddo.nometrics)
                )
                  if ('undefined' != typeof detm_last_link_info) {
                    var lcParam = detm_last_link_info.element || !0;
                    window.location.href.indexOf('start.att.net') > -1
                      ? void 0 !== s_att.prop18 && '' !== s_att.prop18
                        ? s_att.tl(lcParam, 'e', s_att.prop18)
                        : s_att.tl(lcParam, 'e', 'Link Name Undefined')
                      : void 0 !== s_att.prop18 && '' !== s_att.prop18
                      ? s_att.tl(lcParam, 'o', s_att.prop18)
                      : s_att.tl(lcParam, 'o', 'Link Name Undefined'),
                      (detm_last_link_info.element = null);
                  } else
                    window.location.href.indexOf('start.att.net') > -1
                      ? void 0 !== s_att.prop18 && '' !== s_att.prop18
                        ? s_att.tl(this, 'e', s_att.prop18)
                        : s_att.tl(this, 'e', 'Link Name Undefined')
                      : void 0 !== s_att.prop18 && '' !== s_att.prop18
                      ? s_att.tl(this, 'o', s_att.prop18)
                      : s_att.tl(this, 'o', 'Link Name Undefined');
                function isIE (e, t) {
                  var n,
                    c = 'IE',
                    d = document.createElement('B'),
                    i = document.documentElement;
                  return (
                    e && ((c += ' ' + e), t && (c = t + ' ' + c)),
                    (d.innerHTML = '<!--[if ' + c + ']><b id="iecctest"></b><![endif]-->'),
                    i.appendChild(d),
                    (n = !!document.getElementById('iecctest')),
                    i.removeChild(d),
                    n
                  );
                }
                if (
                  (s_att.clearVars(),
                  ddo.processedByDTM(tempEvents[ap], 'Adobe'),
                  (s_att.list2 = ''),
                  (s_att.list3 = ''),
                  (s_att.prop17 = ''),
                  (s_att.prop18 = ''),
                  (s_att.prop54 = ''),
                  (s_att.eVar15 = ''),
                  (s_att.eVar25 = ''),
                  (s_att.eVar55 = ''),
                  (s_att.eVar61 = ''),
                  (s_att.eVar78 = ''),
                  (s_att.eVar79 = ''),
                  (s_att.eVar86 = ''),
                  (s_att.eVar211 = ''),
                  (s_att.eVar221 = ''),
                  (s_att.eVar223 = ''),
                  (s_att.eVar227 = ''),
                  (s_att.events = ''),
                  (s_att.purchaseID = ''),
                  (s_att.campaign = ''),
                  void 0 !== s_att.products &&
                    s_att.products.length > 0 &&
                    (s_att.products.indexOf('event352') > -1 ||
                      s_att.products.indexOf('event353') > -1) &&
                    (s_att.products = ''),
                  !isIE(8) && 'function' == typeof document.createEvent)
                ) {
                  !(function () {
                    if ('function' == typeof window.CustomEvent) return !1;
                    function CustomEvent (event, params) {
                      params = params || { bubbles: !1, cancelable: !1, detail: void 0 };
                      var evt = document.createEvent('CustomEvent');
                      return (
                        evt.initCustomEvent(
                          event,
                          params.bubbles,
                          params.cancelable,
                          params.detail
                        ),
                        evt
                      );
                    }
                    (CustomEvent.prototype = window.Event.prototype),
                      (window.CustomEvent = CustomEvent);
                  })();
                  var adobeBeaconSent = new CustomEvent('adobeBeaconSent', {});
                  document.dispatchEvent(adobeBeaconSent);
                }
              }
            }
          }
      }),
      detmScriptExecutor.push('DM_Adobe_PageView_V2', function (params) {
        const $___old_8fda338a6d756d09 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'sessionStorage'
          ),
          $___old_540be2d0b98f28ed = {}.constructor.getOwnPropertyDescriptor(window, 'Storage');
        try {
          if ($___old_8fda338a6d756d09)
            ({}.constructor.defineProperty(
              window,
              'sessionStorage',
              $___stub_3ac875f7196a9c3f.sessionStorage
            ));
          if ($___old_540be2d0b98f28ed)
            ({}.constructor.defineProperty(window, 'Storage', $___stub_3ac875f7196a9c3f.Storage));
          return function () {
            function checkGetVarValue (p1, p2) {
              if (null == p1) return '';
              var r1 = p1.toString().toLowerCase() || '',
                getVar = '';
              return (
                (getVar =
                  'undefined' == r1 ||
                  'default' == r1 ||
                  'none' == r1 ||
                  'unknown' == r1 ||
                  'unspecified' === r1
                    ? ''
                    : p1 || r1 || ''),
                void 0 === p2
                  ? getVar
                  : 's' == p2
                  ? getVar.toString() || ''
                  : 'n' == p2
                  ? parseInt(getVar) || ''
                  : void 0
              );
            }
            function isShopCheckoutPage (url) {
              var confirmation = !1;
              return (
                'string' == typeof url &&
                  (confirmation =
                    url.indexOf('m.att.com/shopmobile/checkout/reviewpersonalinfo.html') > -1 ||
                    url.indexOf('m.att.com/shopmobile/checkout/thankyou.html') > -1),
                confirmation
              );
            }
            function containsNothingButDelimiters (str, delimiter) {
              var value = !1;
              if ('string' == typeof str) {
                for (
                  var tokens = ddo.ext.strSplit(str, delimiter), emptyCount = 0, i = 0;
                  i < tokens.length;
                  i++
                ) {
                  if ('' != tokens[i].trim()) return !1;
                  ++emptyCount;
                }
                value = tokens.length > 0 && emptyCount == tokens.length;
              }
              return value;
            }
            function DeviceConverter () {
              var devices = ['smartphone', 'tablet', 'wearable'],
                getDevice = function (devices, type) {
                  for (var i = 0; i < devices.length; i++) {
                    var device = devices[i];
                    if (void 0 !== device.type && type === device.type.toLowerCase())
                      return device;
                  }
                  return null;
                };
              this.build = function (event) {
                var result = '';
                if (
                  void 0 !== event &&
                  void 0 !== event.devices &&
                  void 0 !== event.devices.length
                )
                  for (var first = !0, i = 0; i < devices.length; i++) {
                    var type = devices[i],
                      device = getDevice(event.devices, type);
                    null !== device &&
                      void 0 !== device.count &&
                      (first ? (first = !1) : (result += '|'), (result += device.count));
                  }
                return (
                  containsNothingButDelimiters(
                    (result +=
                      '|' + checkGetVarValue(ddo.getVar('user.account.hboMaxPricingTier'))),
                    '|'
                  ) && (result = ''),
                  result
                );
              };
            }
            function SetBillingAccountNumber (evt) {
              var properties = [
                {
                  attrs: [
                    { name: '_evtAccountInFocusIdentifier', type: 'auto' },
                    { name: 'user.account.accountInFocusIdentifier', type: 'canonical' },
                  ],
                },
                { attrs: [{ type: 'canonical', name: 'user.login.type' }] },
                { attrs: [{ type: 'canonical', name: 'user.account.ban' }] },
                { attrs: [{ type: 'canonical', name: 'user.account.uBan' }] },
                { attrs: [{ type: 'canonical', name: 'user.account.dBan' }] },
                { attrs: [{ type: 'canonical', name: 'user.account.directvBan' }] },
                { attrs: [{ type: 'canonical', name: 'user.account.wirelineBtn' }] },
                {
                  attrs: [
                    { name: 'acctNum', type: 'auto' },
                    { name: 'selectedAccountIdentifier', type: 'auto' },
                  ],
                },
              ];
              s_att.eVar30 = '';
              for (var attr = '', value = '', found = !1, i = 0; i < properties.length; i++) {
                for (var property = properties[i], j = 0; j < property.attrs.length; j++) {
                  switch ((attr = property.attrs[j]).type) {
                    case 'auto':
                      value = (void 0 !== evt && evt[attr.name]) || '';
                      break;
                    case 'canonical':
                      (value = checkGetVarValue(ddo.getVar(attr.name))),
                        'user.login.type' === attr.name && 'CTN' != value && (value = '');
                  }
                  if ('' !== value && 'Default' !== value && 'UNKNOWN' !== value) {
                    found = !0;
                    break;
                  }
                }
                if (found) break;
              }
              var event = '';
              if (found)
                switch ('canonical' === attr.type ? attr.name.split('.')[2] : attr.name) {
                  case 'wirelineBtn':
                    event = 'event555';
                    break;
                  case 'type':
                    if ('CTN' === value) {
                      var wAN = checkGetVarValue(ddo.getVar('user.account.wirelessAccountNumber'));
                      wAN.length > 0 && (s_att.eVar30 = wAN);
                    }
                    event = 'event554';
                    break;
                  case 'ban':
                    (s_att.eVar30 = value), (event = 'event550');
                    break;
                  case 'uBan':
                    (s_att.eVar30 = value), (event = 'event551');
                    break;
                  case 'dBan':
                    (s_att.eVar30 = value), (event = 'event552');
                    break;
                  case 'directvBan':
                    (s_att.eVar30 = value), (event = 'event553');
                    break;
                  case '_evtAccountInFocusIdentifier':
                  case 'accountInFocusIdentifier':
                    s_att.eVar30 = value;
                    break;
                  case 'acctNum':
                  case 'selectedAccountIdentifier':
                    s_att.eVar30 = value;
                    break;
                  default:
                    (s_att.eVar30 = value), (event = 'event556');
                }
              if (s_att.eVar30.length > 0) {
                var idx = -1,
                  idxTilde = s_att.eVar30.indexOf('~'),
                  idxPipe = s_att.eVar30.indexOf('|');
                switch (
                  (idxTilde > -1 && (idx = idxTilde),
                  idxPipe > -1 && idx > idxPipe && (idx = idxPipe),
                  idx)
                ) {
                  case 0:
                    s_att.eVar30 = '';
                    break;
                  case -1:
                    break;
                  default:
                    s_att.eVar30 = s_att.eVar30.substring(0, idx);
                }
              }
              '' !== event &&
                ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, event, ',', 2)),
                (s_att.events = s_att.apl(s_att.events, event, ',', 2)));
            }
            ddo.squawk('DM_AdobePageView_V2 Ver: 1268 ', 1, 'i'),
              (s_att.events = ''),
              (tempPageOwnership = checkGetVarValue(ddo.getVar('page.category.pageOwnership'))),
              (s_att.pageName = ddo.getVar('page.pageInfo.pageName')),
              (s_att.server = ddo.getVar('page.location.domain')),
              'Business' == tempPageOwnership && -1 == document.location.host.indexOf('att.net')
                ? ((s_att.channel = checkGetVarValue(
                    ddo.getVar('page.pageInfo.appCode').toLowerCase()
                  )),
                  (s_att.prop1 =
                    s_att.channel +
                    '|' +
                    checkGetVarValue(ddo.getVar('page.category.siteSection'))),
                  (s_att.prop2 =
                    s_att.prop1 +
                    '|' +
                    checkGetVarValue(ddo.getVar('page.category.siteSubSection1'))),
                  (s_att.prop3 =
                    s_att.prop2 +
                    '|' +
                    checkGetVarValue(ddo.getVar('page.category.siteSubSection2'))))
                : ((s_att.prop1 = checkGetVarValue(ddo.getVar('page.category.siteSection'))),
                  (s_att.prop2 = checkGetVarValue(ddo.getVar('page.category.siteSubSection1'))),
                  (s_att.prop3 = checkGetVarValue(ddo.getVar('page.category.siteSubSection2')))),
              (s_att.prop4 = checkGetVarValue(ddo.getVar('user.appVisitorCookie'))),
              (s_att.prop8 = checkGetVarValue(ddo.getVar('page.category.pageFunction'))),
              (s_att.prop12 = checkGetVarValue(ddo.getVar('user.tech.userAgent'))),
              (s_att.prop13 = checkGetVarValue(ddo.getVar('user.tech.ipAddress'))),
              checkGetVarValue(ddo.getVar('page.location.queryString')).indexOf('ab_test=') > -1 &&
                (s_att.prop15 = ddo.ext.getParameterByName('ab_test')),
              (s_att.prop21 = 'D=mid'),
              (s_att.prop24 = checkGetVarValue(ddo.getVar('page.pageInfo.pageTitle')));
            var tempULID = checkGetVarValue(ddo.getVar('user.login.id'));
            (s_att.prop28 = tempULID.toLowerCase() || ''),
              (s_att.prop35 = checkGetVarValue(ddo.getVar('page.pageInfo.DTMPresent')));
            var tempQStr = checkGetVarValue(ddo.getVar('page.location.queryString'));
            if (
              ((s_att.prop41 = tempQStr || ''),
              (s_att.prop45 = checkGetVarValue(ddo.ext.getCookie('TLTSID'))),
              (s_att.prop48 = checkGetVarValue(ddo.getVar('user.uuid'))),
              (s_att.prop62 = checkGetVarValue(ddo.getVar('page.pageInfo.lineOfBusiness'))),
              checkGetVarValue(ddo.getVar('page.location.queryString')).indexOf('udid=') > -1 &&
                (s_att.prop71 = ddo.ext.getParameterByName('udid')),
              1 == checkGetVarValue(ddo.getVar('page.attributes.zenkeyIdFlag')) &&
                ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event625', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event625', ',', 1))),
              (s_att.prop74 = checkGetVarValue(ddo.getVar('page.pageInfo.opinionLabInd'))),
              (s_att.eVar3 = s_att.prop28),
              (s_att.eVar7 = s_att.prop12),
              (s_att.eVar8 = s_att.prop25),
              (s_att.eVar16 = s_att.prop4),
              'undefined' != typeof Storage)
            ) {
              if ('string' == typeof sessionStorage.getItem('pageName')) {
                var prevPageName = sessionStorage.getItem('pageName');
                s_att.eVar17 = prevPageName;
              }
              sessionStorage.pageName = ddo.getVar('page.pageInfo.pageName') || s_att.pageName;
            }
            (s_att.eVar19 = checkGetVarValue(ddo.getVar('edm.toolName'))),
              (s_att.eVar20 = checkGetVarValue(ddo.getVar('page.pageInfo.flowCode'))),
              (s_att.prop46 = s_att.eVar20);
            var tempZip = checkGetVarValue(ddo.getVar('page.pageInfo.zipCode', 's'));
            function getQueryVariable (variable, urlString) {
              for (var vars = urlString.split('&'), i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (pair[0].toLowerCase() == variable) return pair[1];
              }
            }
            /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(tempZip) &&
              ((zip = tempZip.substring(0, 5) || ''), (s_att.eVar21 = zip)),
              (s_att.eVar29 = checkGetVarValue(ddo.getVar('user.account.fan'))),
              SetBillingAccountNumber(),
              (s_att.eVar31 = checkGetVarValue(ddo.getVar('user.account.ctn'))),
              (s_att.eVar33 = checkGetVarValue(ddo.getVar('edm.socialSite'))),
              (s_att.eVar39 = checkGetVarValue(ddo.getVar('user.attributes.foreSeeRespondendID'))),
              (s_att.eVar41 = checkGetVarValue(ddo.getVar('edm.SOCID'))),
              (s_att.eVar42 = checkGetVarValue(ddo.getVar('edm.bundleID'))),
              (s_att.eVar51 = checkGetVarValue(ddo.getVar('user.login.type'))),
              'Business' == tempPageOwnership
                ? (s_att.eVar52 = s_att.prop52 =
                    checkGetVarValue(ddo.getVar('user.attributes.ABScompanyRole')) ||
                    checkGetVarValue(ddo.getVar('user.account.companyRole')))
                : (s_att.prop52 = checkGetVarValue(ddo.getVar('user.account.liabilityType'))),
              (altSegmentType =
                checkGetVarValue(ddo.getVar('user.attributes.PremierAltSegmentType')) ||
                checkGetVarValue(ddo.getVar('user.account.ABSaltSegmentType'))),
              (liabilityType = checkGetVarValue(ddo.getVar('user.account.liabilityType'))),
              (enterpriseType =
                checkGetVarValue(ddo.getVar('user.attributes.PremierEnterpriseType')) ||
                checkGetVarValue(ddo.getVar('user.account.ABSenterpriseType'))),
              (companyName =
                checkGetVarValue(ddo.getVar('user.attributes.ABScompanyName')) ||
                checkGetVarValue(ddo.getVar('user.account.companyName'))),
              (agreementNumber =
                checkGetVarValue(ddo.getVar('user.attributes.PremierAgreementNumber')) ||
                checkGetVarValue(ddo.getVar('user.account.premierAgreementNumber'))),
              'Business' == tempPageOwnership
                ? ('' != liabilityType &&
                    ('Corporate' == liabilityType ||
                    'Business' == liabilityType ||
                    'CRU' == liabilityType
                      ? (liabilityType = 'CRU')
                      : 'Individual' == liabilityType || 'IRU' == liabilityType
                      ? (liabilityType = 'IRU')
                      : 'CONS' == liabilityType
                      ? (liabilityType = 'CONS')
                      : (liabilityType = '')),
                  (s_att.eVar53 =
                    altSegmentType +
                    '|' +
                    liabilityType +
                    '|' +
                    enterpriseType +
                    '|' +
                    companyName +
                    '|' +
                    agreementNumber))
                : (('IRU' != liabilityType && 'CONS' != liabilityType && 'CRU' != liabilityType) ||
                    (temp53 = '|' + liabilityType + '|||'),
                  'undefined' != typeof temp53 && '||||' != temp53 && (s_att.eVar53 = temp53)),
              (s_att.eVar57 = checkGetVarValue(ddo.getVar('page.attributes.productType'))),
              (s_att.eVar62 = s_att.prop62);
            var tempURLATTRepl = decodeURI(window.location.search.substring(1))
                .replace(/AT&T/g, 'ATT<y>')
                .replace(/at&t/g, 'att<y>'),
              paidSearch = getQueryVariable('lns', tempURLATTRepl),
              tempSearchParams =
                (getQueryVariable('wtpdsrchprg', tempURLATTRepl) || '') +
                '|' +
                (getQueryVariable('wtpdsrchgp', tempURLATTRepl) || '') +
                '|' +
                (getQueryVariable('wtpaidsearchterm', tempURLATTRepl) || '') +
                '|' +
                (getQueryVariable('wtpdsrchpcmt', tempURLATTRepl) || '');
            if (
              ('|||' !== tempSearchParams &&
                (s_att.eVar83 = tempSearchParams
                  .replace(/ATT<y>/g, 'AT&T')
                  .replace(/att<y>/g, 'at&t')),
              null != paidSearch &&
                (s_att.eVar180 =
                  '' == paidSearch
                    ? 'No Term Provided'
                    : paidSearch.replace(/ATT<y>/g, 'AT&T').replace(/att<y>/g, 'at&t')),
              (s_att.eVar63 = checkGetVarValue(ddo.getVar('page.category.pageGroup'))),
              (s_att.eVar74 = checkGetVarValue(ddo.getVar('user.account.serviceSegment'))),
              (s_att.eVar77 = checkGetVarValue(ddo.getVar('user.account.productSegment'))),
              (tempABFURL = checkGetVarValue(ddo.getVar('page.location._addressBarFullURL'))),
              (tempVS = window.VISITOR_STATE || ''),
              (temp81 = checkGetVarValue(ddo.getVar('user.customerType')) + '|' + tempVS || ''),
              '' != temp81 &&
                0 == containsNothingButDelimiters(temp81, '|') &&
                (s_att.eVar81 = temp81),
              (s_att.eVar82 = checkGetVarValue(ddo.getVar('page.pageInfo.lineOrderType'))),
              (s_att.eVar85 = tempABFURL || ''),
              document.location.href.indexOf('aa_ref=') > -1)
            ) {
              var tar_ref = document.location.href.match('[&|?]aa_ref=([^&]*)')[1];
              'blank' !== tar_ref &&
                -1 == tar_ref.indexOf('#') &&
                (s_att.eVar92 = document.location.href.match('[&|?]aa_ref=([^&]*)')[1]);
            } else (tempReferrer = document.referrer || ''), (s_att.eVar92 = tempReferrer || '');
            if (null != s_att.campaign) {
              var temp93 = s_att.campaign.charAt(0) + '|' + s_att.campaign.charAt(16);
              '' != temp93 &&
                0 == containsNothingButDelimiters(temp93, '|') &&
                (s_att.eVar93 = temp93);
            }
            var temp95 =
              checkGetVarValue(ddo.getVar('page.category.pageOwnership')) +
              '|' +
              checkGetVarValue(ddo.getVar('page.category.pageGroup')) +
              '|' +
              checkGetVarValue(ddo.getVar('page.pageInfo.lineOfBusiness')) +
              '|' +
              checkGetVarValue(ddo.getVar('page.category.pageFunction'));
            '|||' == temp95 && (temp95 = ''), (s_att.eVar95 = temp95);
            var tempConnVehStr = '',
              tempConnVeh = new Array();
            tempConnVeh.push(checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleYear'))),
              tempConnVeh.push(
                checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleMake'))
              ),
              tempConnVeh.push(
                checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleModel'))
              ),
              tempConnVeh.push(
                checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleTrim'))
              ),
              tempConnVeh.push(
                checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleManufacturer'))
              ),
              tempConnVeh.push(
                checkGetVarValue(ddo.getVar('user.attributes.connectedVehicleEnrollmentType'))
              ),
              '' != (tempConnVehStr = tempConnVeh.join('|')) &&
                0 == containsNothingButDelimiters(tempConnVehStr, '|') &&
                (s_att.eVar96 = tempConnVehStr);
            var temp138 = checkGetVarValue(ddo.getVar('page.attributes.loginAppClientId')) || '';
            '' != temp138 && (s_att.eVar138 = temp138);
            var temp139 =
              '|' + checkGetVarValue(ddo.getVar('page.attributes.fileFlowName')) + '||';
            '' != temp139 &&
              0 == containsNothingButDelimiters(temp139, '|') &&
              (s_att.eVar139 = temp139),
              (s_att.eVar151 = checkGetVarValue(ddo.getVar('page.pageInfo.abTest')) || ''),
              (s_att.eVar162 = checkGetVarValue(ddo.getVar('page.category.pageOwnership'))),
              (s_att.eVar163 = checkGetVarValue(ddo.getVar('user.login.loginSource'))),
              (s_att.eVar164 = checkGetVarValue(ddo.getVar('user.representativeIpAddress'))),
              (s_att.eVar165 = checkGetVarValue(ddo.getVar('user.account.billingSystem'))),
              (s_att.eVar166 = checkGetVarValue(ddo.getVar('user.login.inputPreloginUserId'))),
              s_att.eVar3 && '' != s_att.eVar3
                ? (s_att.eVar167 = 'Authenticated')
                : (s_att.eVar167 = 'Unauthenticated'),
              checkGetVarValue(ddo.getVar('page.location.queryString')).indexOf('LNS=') > -1 &&
                (s_att.eVar180 = ddo.ext.getParameterByName('LNS')),
              (s_att.eVar184 =
                checkGetVarValue(ddo.getVar('user.actorType')) ||
                checkGetVarValue(ddo.getVar('user.attributes.actorType')) ||
                checkGetVarValue(ddo.getVar('user.attributes.ABSactorType')) ||
                ''),
              (s_att.eVar185 = checkGetVarValue(
                ddo.getVar('user.account.ABSenterpriseTypeDetail')
              ));
            var tempVehicleWifiEligibleFlag =
              checkGetVarValue(ddo.getVar('user.attributes.vehicleWifiEligibleFlag')) || '';
            '0' == tempVehicleWifiEligibleFlag || 0 == tempVehicleWifiEligibleFlag
              ? (tempVehicleWifiEligibleFlag = 'CC=No')
              : ('1' != tempVehicleWifiEligibleFlag && 1 != tempVehicleWifiEligibleFlag) ||
                (tempVehicleWifiEligibleFlag = 'CC=Yes');
            var tempFirstNetFlag =
              checkGetVarValue(ddo.getVar('user.attributes.firstNetFlag')) || '';
            '0' == tempFirstNetFlag || 0 == tempFirstNetFlag
              ? (tempFirstNetFlag = 'FN=No')
              : ('1' != tempFirstNetFlag && 1 != tempFirstNetFlag) ||
                (tempFirstNetFlag = 'FN=Yes');
            var tempDarFlag = checkGetVarValue(ddo.getVar('user.attributes.darFlag')) || '';
            '0' == tempDarFlag || 0 == tempDarFlag
              ? (tempDarFlag = 'DAR=No')
              : ('1' != tempDarFlag && 1 != tempDarFlag) || (tempDarFlag = 'DAR=Yes');
            var tempLibertyFlag = checkGetVarValue(ddo.getVar('user.account.libertyFlag')) || '';
            '0' == tempLibertyFlag || 0 == tempLibertyFlag
              ? (tempLibertyFlag = 'LIB=No')
              : ('1' != tempLibertyFlag && 1 != tempLibertyFlag) || (tempLibertyFlag = 'LIB=Yes');
            var tempCompanyProperties =
              (checkGetVarValue(ddo.getVar('user.attributes.companyID')) || '') +
              '|' +
              (checkGetVarValue(ddo.getVar('user.attributes.marketSegment')) || '') +
              '|' +
              (checkGetVarValue(ddo.getVar('user.attributes.contract')) || '') +
              '|' +
              (checkGetVarValue(ddo.getVar('user.attributes.ABScompanyName')) ||
                checkGetVarValue(ddo.getVar('user.attributes.companyName')) ||
                '');
            '|||' == tempCompanyProperties && (tempCompanyProperties = ''),
              (s_att.eVar192 = tempCompanyProperties);
            var tempeVar193 = '|' + checkGetVarValue(ddo.getVar('page.attributes.service')) + '||';
            if (
              ('' != tempeVar193 &&
                0 == containsNothingButDelimiters(tempeVar193, '|') &&
                (s_att.eVar193 = tempeVar193),
              'www.business.att.com' == document.location.hostname ||
                ('www.att.com' == document.location.hostname &&
                  'SMB' == ddo.getVar('user.customerType')) ||
                ('www.att.com' == document.location.hostname &&
                  document.location.href.indexOf('/smallbusiness/') > -1))
            ) {
              var tempDnbDataPV = sessionStorage.getItem('tempDnbData');
              s_att.eVar195 = tempDnbDataPV;
            }
            if (
              ((s_att.eVar201 =
                checkGetVarValue(ddo.getVar('page.attributes.applicationName')) ||
                checkGetVarValue(ddo.getVar('page.category.applicationName'))),
              (employeeId = checkGetVarValue(ddo.getVar('user.attributes.employeeId'))),
              (employeeSegment = checkGetVarValue(ddo.getVar('user.employeeSegment'))),
              (bargainInd = checkGetVarValue(ddo.getVar('user.attributes.bargainInd'))),
              ('' == employeeId && '' == employeeSegment && '' == bargainInd) ||
                (s_att.eVar89 = employeeId + '|' + employeeSegment + '|' + bargainInd),
              (s_att.eVar227 = checkGetVarValue(ddo.getVar('page.pageInfo.pathingIntent'))),
              'Business Solutions' ===
                checkGetVarValue(ddo.getVar('page.media.productInFocusLOB')) &&
                '' != checkGetVarValue(ddo.getVar('page.media.productInFocusMedia')) &&
                ((s_att.linkTrackEvents = s_att.apl(s_att.linkTrackEvents, 'event514', ',', 1)),
                (s_att.events = s_att.apl(s_att.events, 'event514', ',', 1))),
              (tempEvent = ddo.getEventsToBeProcessed()),
              'undefined' != typeof tempEvent || tempEvent.length > 0)
            )
              for (aplevt = 0; aplevt < tempEvent.length; aplevt++) {
                if (
                  ((s_att.prop58 = tempEvent[aplevt].eventAction),
                  (s_att.prop68 = tempEvent[aplevt].intersectid || ''),
                  (internal = RegExp(
                    '((f|ht)tps?:)?(//)?((more|watch|experience|audience|audiencenetwork|start).att.(com|net).*)'
                  )),
                  ('linkClick' == tempEvent[aplevt].eventAction ||
                    'modalLoad' == tempEvent[aplevt].eventAction) &&
                    internal.test(window.location.href))
                ) {
                  s_att.prop17 = tempEvent[aplevt]._evtPageName || '';
                  var tempLn = tempEvent[aplevt].linkName || '';
                  (s_att.prop18 = tempLn.toLowerCase() || ''),
                    (s_att.prop20 = tempEvent[aplevt].linkPosition || ''),
                    tempEvent[aplevt].slotPosition &&
                      (s_att.prop23 =
                        tempEvent[aplevt].slotPosition.toString() ||
                        tempEvent[aplevt].SlotPosition.toString() ||
                        '');
                  var tempContentDetails =
                    checkGetVarValue(tempEvent[aplevt].contentFriendlyName) +
                    '|' +
                    checkGetVarValue(tempEvent[aplevt].contentProductGroup) +
                    '|' +
                    checkGetVarValue(tempEvent[aplevt].contentSystem);
                  s_att.prop56 = '||' === tempContentDetails ? '' : tempContentDetails;
                }
                if (
                  1 == tempEvent[aplevt]._evt_DTM_InEventHandler &&
                  1 != tempEvent[aplevt]._processedByAdobe &&
                  ('pageLoad' == tempEvent[aplevt].eventAction ||
                    'virtualPageLoad' == tempEvent[aplevt].eventAction ||
                    'modalLoad' == tempEvent[aplevt].eventAction ||
                    'modalClose' == tempEvent[aplevt].eventAction)
                ) {
                  var tempPmtArrangementCode =
                      checkGetVarValue(ddo.getVar('page.attributes.paymentArrangementCode')) ||
                      checkGetVarValue(tempEvent[aplevt].paymentArrangementCode) ||
                      checkGetVarValue(tempEvent[aplevt].pmtArrangementCode) ||
                      '',
                    tempPmtExperienceCode =
                      checkGetVarValue(ddo.getVar('page.attributes.paymentExperienceCode')) ||
                      checkGetVarValue(tempEvent[aplevt].paymentExperienceCode) ||
                      checkGetVarValue(tempEvent[aplevt].pmtExperienceCode) ||
                      '',
                    tempPmtExperienceAcctStatus =
                      checkGetVarValue(
                        ddo.getVar('page.attributes.paymentExperienceAccountStatus')
                      ) ||
                      checkGetVarValue(tempEvent[aplevt].paymentExperienceAccountStatus) ||
                      checkGetVarValue(tempEvent[aplevt].pmtExperienceAcctStatus) ||
                      '';
                  tempPmtArrange =
                    tempEvent[aplevt].paymentArrangementFlag || tempEvent[aplevt].pmtArrange || '';
                  var tempVar214 =
                    tempPmtArrange +
                    '|' +
                    tempPmtArrangementCode +
                    '|' +
                    tempPmtExperienceCode +
                    '|' +
                    tempPmtExperienceAcctStatus;
                  '' != tempVar214 &&
                    0 == containsNothingButDelimiters(tempVar214, '|') &&
                    (s_att.eVar214 = tempVar214),
                    (s_att.prop67 = tempEvent[aplevt].sourceSystem || 'DETM');
                  var hash = location.hash || '',
                    qry = ddo.getVar('page.location.queryString') || '';
                  (s_att.prop41 = s_att.eVar14 = '' !== hash ? hash : qry),
                    (s_att.pageName = tempEvent[aplevt]._evtPageName || s_att.pageName);
                  var tempContentType = tempEvent[aplevt].searchContentType || '',
                    tempSearchType =
                      tempEvent[aplevt].internalSearchType ||
                      tempEvent[aplevt].selectedAccountIdMethod ||
                      tempEvent[aplevt].mobileNumberSearchOption ||
                      tempEvent[aplevt].currentSearchTermCategory ||
                      '';
                  (s_att.eVar76 = s_att.prop33 =
                    void 0 !== tempContentType || '' != tempContentType
                      ? tempSearchType + '|' + tempContentType
                      : tempSearchType),
                    (temp29 = ''),
                    window.location.href.indexOf('start.att.net') > -1 &&
                      ((s_att.prop69 = checkGetVarValue(ddo.getVar('page.attributes.ABTest1'))),
                      (s_att.prop70 = checkGetVarValue(ddo.getVar('page.attributes.ABTest2')))),
                    (s_att.prop37 = s_att.eVar206 =
                      ddo.getVar('user.attuid') || tempEvent[aplevt].solutionSenderAgentId || ''),
                    void 0 !== tempEvent[aplevt].url &&
                    isShopCheckoutPage(tempEvent[aplevt]._addressBarFullURL)
                      ? (temp29 = tempEvent[aplevt].url)
                      : void 0 !== ddo.getVar('page.location.path') &&
                        (temp29 = checkGetVarValue(ddo.getVar('page.location.path'))),
                    ('' != temp29 && 'Default' != temp29 && 'UNKNOWN' != temp29) || (temp29 = '');
                  var pgURL = window.location.href,
                    bits = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]?)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
                      pgURL
                    ),
                    pageURLCleanUP = '';
                  if (
                    (null != bits &&
                      '' !== bits &&
                      void 0 !== bits[9] &&
                      null !== bits[9] &&
                      '' !== bits[9] &&
                      (pageURLCleanUP = bits[9]),
                    /start.att\.net/.test(pgURL) &&
                      pageURLCleanUP.indexOf('/') > -1 &&
                      pageURLCleanUP.split('/').length > 3 &&
                      ((pageURLCleanUP =
                        '/' +
                        pageURLCleanUP.split('/')[1] +
                        '/' +
                        pageURLCleanUP.split('/')[2] +
                        '/' +
                        pageURLCleanUP.split('/')[3] +
                        '/'),
                      (temp29 = pageURLCleanUP)),
                    /directv\.com/.test(pgURL) &&
                      /^\/dtvapp\/mydirectv\/account\/payment\/mybillingcenter.jsp\/virtual\/h:/.test(
                        pageURLCleanUP
                      ) &&
                      null != bits &&
                      '' !== bits &&
                      (void 0 !== bits[13] && null !== bits[13] && '' !== bits[13]
                        ? (pageURLCleanUP = bits[9] + '/virtual/' + bits[13]).indexOf('//') > -1 &&
                          (pageURLCleanUP = pageURLCleanUP.replace('//', '/'))
                        : void 0 !== bits[10] &&
                          null !== bits[10] &&
                          '' !== bits[10] &&
                          (pageURLCleanUP = bits[10]),
                      (temp29 = pageURLCleanUP)),
                    /forums\.att\.com/.test(pgURL) && /^\/t5\//.test(pageURLCleanUP))
                  ) {
                    var urlTokens = pageURLCleanUP.split('/');
                    urlTokens.length > 3 &&
                      (temp29 =
                        '/' + urlTokens[1] + '/' + urlTokens[2] + '/' + urlTokens[3] + '/');
                  }
                  if (
                    ((s_att.eVar13 = s_att.prop29 = temp29.toLowerCase() || ''),
                    null != s_att.eVar13 &&
                    void 0 !== s_att.eVar13 &&
                    s_att.eVar13.indexOf('/support/contact-us/wireless/') > -1
                      ? (s_att.eVar223 = s_att.prop68)
                      : (s_att.eVar223 = ''),
                    'Business' == tempPageOwnership)
                  ) {
                    var temp279 = '';
                    void 0 !== ddo.getVar('page.media.type') &&
                      (temp279 = checkGetVarValue(ddo.getVar('page.media.type'))),
                      (s_att.eVar188 = temp29),
                      (temp29.toLowerCase().indexOf('/solutions/whitepaper/') > -1 ||
                        temp29.toLowerCase().indexOf('/content/whitepaper/') > -1 ||
                        temp279.toLowerCase().indexOf('whitepaper') > -1) &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          ',event279',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event279', ',', 1)));
                  }
                  s_att.prop21 = 'D=mid';
                  var webDesignFlag,
                    expType,
                    temp23 =
                      (checkGetVarValue(tempEvent[aplevt].cartFulfillMethod) || '') +
                      '|' +
                      (checkGetVarValue(tempEvent[aplevt].shippingMethod) ||
                        checkGetVarValue(tempEvent[aplevt].Shipping) ||
                        checkGetVarValue(tempEvent[aplevt].shipping) ||
                        '');
                  '' != temp23 &&
                    0 == containsNothingButDelimiters(temp23, '|') &&
                    (s_att.eVar23 = temp23),
                    (webDesignFlag = ddo.getVar('page.pageInfo.responsiveWebDesignFlag')),
                    (viewedUIExperience =
                      checkGetVarValue(tempEvent[aplevt]._bevtViewedUIExperience) ||
                      ddo.getVar('page.pageInfo.viewedUIExperience')),
                    (wdf = '0' != webDesignFlag ? 'Responsive' : 'Nonresponsive'),
                    (expType = wdf + '|' + viewedUIExperience),
                    (s_att.eVar34 = s_att.prop26 = expType || ''),
                    '' == tempEvent[aplevt].authSvcs || null == tempEvent[aplevt].authSvcs
                      ? (s_att.prop27 = 'not set')
                      : 'UNAUTH' == tempEvent[aplevt].authSvcs
                      ? (s_att.prop27 = 'UnAuth')
                      : (s_att.prop27 = 'Auth'),
                    'Business' == tempPageOwnership
                      ? (s_att.eVar49 = s_att.prop49 = ddo.getVar(
                          'page.pageInfo.friendlyPageName'
                        ))
                      : ((tempc49 = ''),
                        void 0 !== tempEvent[aplevt].friendlyPageName &&
                        isShopCheckoutPage(tempEvent[aplevt]._addressBarFullURL)
                          ? (tempc49 = tempEvent[aplevt].friendlyPageName)
                          : void 0 !== ddo.getVar('page.pageInfo.friendlyPageName') &&
                            (tempc49 =
                              tempEvent[aplevt]._bevtFriendlyPgeName ||
                              tempEvent[aplevt]._evtFriendlyPageName ||
                              checkGetVarValue(ddo.getVar('page.pageInfo.friendlyPageName'))),
                        '' == tempc49 || 'Default' == tempc49 || 'UNKNOWN' == tempc49
                          ? (tempc49 = null)
                          : ((tempc49 = tempc49.replace(/[\u2013\u2014]/g, '-')),
                            (tempc49 = tempc49.replace(/\Ã\?/g, '')),
                            (tempc49 = tempc49.replace(/\Â\¢/g, '')),
                            (tempc49 = tempc49.replace(/\Â\?/g, '')),
                            (tempc49 = tempc49.replace(/\Â\¡/g, '')),
                            (tempc49 = tempc49.replace(/\Â³/g, '')),
                            (tempc49 = tempc49.replace(/\Â®/g, '')),
                            (tempc49 = tempc49.replace(/\Â /g, '')),
                            (tempc49 = tempc49.replace(/\'/g, ''))),
                        (s_att.prop49 = s_att.eVar49 = checkGetVarValue(tempc49))),
                    (s_att.prop33 = s_att.eVar76 =
                      tempEvent[aplevt].internalSearchType ||
                      tempEvent[aplevt].selectedAccountIdMethod ||
                      tempEvent[aplevt].mobileNumberSearchOption ||
                      tempEvent[aplevt].currentSearchTermCategory ||
                      '');
                  var tempAdbeProcessed = tempEvent[aplevt]._evtOrder;
                  if (
                    ((s_att.prop57 =
                      checkGetVarValue(ddo.getVar('page.pageInfo.breadcrumbs')) ||
                      checkGetVarValue(ddo.getVar('page.attributes.topicPath')) ||
                      tempEvent[aplevt].topicPath ||
                      ''),
                    (s_att.list3 = ddo.buildGovernedPassThrough(tempAdbeProcessed)),
                    s_att.eVar17 ||
                      (s_att.eVar17 = s_att.getPreviousValue(s_att.pageName, 'gpv_v17', '')),
                    !s_att.eVar21)
                  ) {
                    tempZip =
                      checkGetVarValue(tempEvent[aplevt]._evtZipCode, 's') ||
                      checkGetVarValue(tempEvent[aplevt].zipCode, 's') ||
                      '';
                    s_att.eVar21 = tempZip.substring(0, 5) || '';
                  }
                  if (
                    (s_att.eVar39 || (s_att.eVar39 = tempEvent[aplevt].foreseeSessionIdfsr),
                    (s_att.prop34 = s_att.eVar36 =
                      checkGetVarValue(ddo.getVar('user.account.serviceType')) ||
                      tempEvent[aplevt].selectedAccountType ||
                      checkGetVarValue(ddo.getVar('user.account.accountInFocusType')) ||
                      ''),
                    s_att.eVar30 || SetBillingAccountNumber(tempEvent[aplevt]),
                    s_att.prop40 || (s_att.prop40 = s_att.eVar84 = tempEvent[aplevt].solutionId),
                    !s_att.prop54)
                  ) {
                    var temp54 =
                      checkGetVarValue(ddo.getVar('page.attributes.navigationServiceType')) ||
                      checkGetVarValue(tempEvent[aplevt].navigationServiceType) ||
                      '';
                    s_att.prop54 = temp54.toLowerCase() || '';
                  }
                  (tempEvent[aplevt].eventCode || '').indexOf('Chat_Request_Submit') > -1 &&
                    '1' == checkGetVarValue(tempEvent[aplevt].successFlag, 's') &&
                    ((s_att.linkTrackVars = s_att.apl(s_att.linkTrackVars, 'eVar58', ',', 1)),
                    (s_att.eVar58 = tempEvent[aplevt]._evtPageName || '')),
                    (tempVS = window.VISITOR_STATE || ''),
                    (temp81 =
                      checkGetVarValue(ddo.getVar('user.customerType')) + '|' + tempVS || ''),
                    '' != temp81 &&
                      0 == containsNothingButDelimiters(temp81, '|') &&
                      (s_att.eVar81 = temp81),
                    (s_att.eVar54 =
                      checkGetVarValue(ddo.getVar('page.attributes.PremierAccountGroup')) ||
                      checkGetVarValue(ddo.getVar('page.attributes.premierAccountGroup')) ||
                      checkGetVarValue(ddo.getVar('page.pageInfo.premierAccountGroup')) ||
                      '');
                  var language = checkGetVarValue(ddo.getVar('page.pageInfo.language'));
                  (language =
                    (language = language.toLowerCase()).indexOf('en') > -1
                      ? 'EN'
                      : language.indexOf('es') > -1
                      ? 'ES'
                      : 'Other'),
                    (s_att.prop5 = s_att.eVar35 = language),
                    void 0 !== tempEvent[aplevt].passwordSavedFlag &&
                      '1' == tempEvent[aplevt].passwordSavedFlag &&
                      (s_att.events = s_att.apl(s_att.events, 'event42', ',', 1)),
                    void 0 !== tempEvent[aplevt].userIdSavedFlag &&
                      '1' == tempEvent[aplevt].userIdSavedFlag &&
                      (s_att.events = s_att.apl(s_att.events, 'event43', ',', 1)),
                    (s_att.prop73 = s_att.eVar73 =
                      tempEvent[aplevt]._evtChatState ||
                      checkGetVarValue(ddo.getVar('page.pageInfo.chatState'))),
                    'available' == s_att.prop73.toLowerCase() &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',event19',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event19', ',', 1)));
                  var governed_property_value =
                    tempEvent[aplevt]._bevtDomain ||
                    tempEvent[aplevt]._evtDomain ||
                    ddo.getVar('page.location.domain') ||
                    '';
                  -1 === governed_property_value.indexOf('mobilemyaccount')
                    ? (s_att.eVar161 = s_att.server = document.location.host)
                    : (s_att.eVar161 = s_att.server = governed_property_value);
                  var tempPremierUserProperties =
                    tempVehicleWifiEligibleFlag +
                    '|' +
                    tempFirstNetFlag +
                    '|' +
                    tempDarFlag +
                    '|' +
                    (checkGetVarValue(ddo.getVar('user.attributes.firstNetUserRole')) || '') +
                    '|' +
                    (tempEvent[aplevt].responderType || '') +
                    '|' +
                    tempLibertyFlag;
                  '' != tempPremierUserProperties &&
                    0 == containsNothingButDelimiters(tempPremierUserProperties, '|') &&
                    (s_att.eVar191 = tempPremierUserProperties);
                  var tempAIFUT,
                    tempSAUT,
                    tempUAS = new Array();
                  tempUAS.push(checkGetVarValue(tempEvent[aplevt].benefitsLevel)),
                    tempUAS.push(
                      checkGetVarValue(ddo.getVar('user.account.acctInFocusTenureGroup'))
                    ),
                    tempUAS.push(checkGetVarValue('')),
                    tempUAS.push(checkGetVarValue(ddo.getVar('user.account.dtvBillerIndicator'))),
                    tempUAS.push(checkGetVarValue(ddo.getVar('user.login.userType'))),
                    (tempAIFUT = checkGetVarValue(
                      ddo.getVar('user.account.accountInFocusUserType')
                    )),
                    (tempSAUT = checkGetVarValue(tempEvent[aplevt].selectedAccountUserType)),
                    '' !== tempAIFUT
                      ? tempUAS.push(tempAIFUT)
                      : '' !== tempSAUT
                      ? tempUAS.push(tempSAUT)
                      : tempUAS.push(''),
                    tempUAS.push(
                      checkGetVarValue(ddo.getVar('user.attributes.dtvBillingPlatform'))
                    );
                  var tempUASstr = tempUAS.join('|');
                  '' != tempUASstr &&
                    0 == containsNothingButDelimiters(tempUASstr, '|') &&
                    (s_att.eVar202 = tempUASstr);
                  var tempNewTabs =
                    (checkGetVarValue(tempEvent[aplevt].linkDisplayedCount) || '') +
                    '|' +
                    (checkGetVarValue(tempEvent[aplevt].linkDisplayedSelectedPosition) || '') +
                    '|' +
                    (checkGetVarValue(tempEvent[aplevt].tabDisplayed) || '') +
                    '|' +
                    (checkGetVarValue(tempEvent[aplevt].searchRecommendationCategory) || '') +
                    '|' +
                    (checkGetVarValue(tempEvent[aplevt].linkDisplayedSelectedCategory) || '');
                  '' != tempNewTabs &&
                    0 == containsNothingButDelimiters(tempNewTabs, '|') &&
                    (s_att.eVar222 = tempNewTabs),
                    (tempSkuQty = tempEvent[aplevt].SkuQty),
                    (tempSkuPrice = tempEvent[aplevt].SkuPrice);
                  var tempProdString = '';
                  if (
                    (null !== tempSkuQty &&
                      'undefined' != typeof tempSkuQty &&
                      '' !== tempSkuQty &&
                      (tempSkuQty = tempSkuQty.split('|')),
                    null !== tempSkuPrice &&
                      'undefined' != typeof tempSkuPrice &&
                      '' !== tempSkuPrice &&
                      'string' == typeof tempSkuPrice &&
                      tempSkuPrice.indexOf('|') > -1 &&
                      (tempSkuPrice = tempSkuPrice.split('|')),
                    tempSkuQty)
                  )
                    for (sq = 0; sq < tempSkuQty.length; sq++)
                      (posSkuQty = tempSkuQty[sq]),
                        (posSkuQty = posSkuQty.split('~')),
                        '' !== tempSkuPrice &&
                        'undefined' != typeof tempSkuPrice &&
                        null !== tempSkuPrice &&
                        'string' == typeof tempSkuPrice
                          ? ((posSkuPrice = tempSkuPrice[sq]),
                            (posSkuPrice = posSkuPrice.substring(1)))
                          : (posSkuPrice = ''),
                        (tempProdString = s_att.apl(
                          tempProdString,
                          ';' + posSkuQty[0] + ';' + posSkuQty[1] + ';' + posSkuPrice,
                          ',',
                          1
                        ));
                  null != s_att.eVar13 &&
                    void 0 !== s_att.eVar13 &&
                    'pageLoad' === tempEvent[aplevt].eventAction &&
                    ((tempSku = ddo.getVar('page.attributes.sku')),
                    null !== tempSku &&
                      'undefined' != typeof tempSku &&
                      -1 === tempSku.indexOf('|') &&
                      -1 === tempSku.indexOf('~') &&
                      tempSku &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',prodView',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'prodView', ',', 1)),
                      (tempProdString = s_att.apl(tempProdString, ';' + tempSku, ',', 1)),
                      (s_att.products = tempProdString)),
                    (s_att.eVar13.indexOf('/shop/wireless/deviceconfigurator.html') > -1 ||
                      s_att.eVar13.indexOf('/shopmobile/wireless/devices/termsselection.html') >
                        -1) &&
                      ddo.getVar('page.attributes.sku') &&
                      ((tempSku = ddo.getVar('page.attributes.sku')),
                      (tempProdString = s_att.apl(tempProdString, ';' + tempSku, ',', 1)),
                      (s_att.products = tempProdString),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',event91',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event91', ',', 1))));
                  var gpDomainCheck = document.location.hostname.toLowerCase(),
                    gpPathCheck = document.location.pathname.toLowerCase();
                  gpDomainCheck.indexOf('www.paygonline.com') > -1 &&
                  gpPathCheck.indexOf('/websc/') > -1
                    ? ddo.getVar('user.login.id') && (s_att.eVar31 = ddo.getVar('user.login.id'))
                    : gpDomainCheck.indexOf('129.192.151') > -1 &&
                      gpPathCheck.indexOf('/websc/') > -1 &&
                      ddo.getVar('user.login.id') &&
                      (s_att.eVar31 = ddo.getVar('user.login.id'));
                  var user_feedback = {
                    rating:
                      checkGetVarValue(tempEvent[aplevt].feedbackRating, 'n') ||
                      checkGetVarValue(tempEvent[aplevt].starRating, 'n'),
                    reason: checkGetVarValue(tempEvent[aplevt].ratingReason),
                    filename: checkGetVarValue(tempEvent[aplevt].flowFileName),
                    salessystem: checkGetVarValue(tempEvent[aplevt].salesSystem),
                    segmentID: checkGetVarValue(ddo.getVar('user.directvSegmentId')),
                    emailCount: checkGetVarValue(tempEvent[aplevt].countEmailAddresses),
                    voicemailType: checkGetVarValue(tempEvent[aplevt].voicemailType),
                    addressSource: checkGetVarValue(tempEvent[aplevt].addressSource),
                    get_results: function () {
                      switch (!0) {
                        case '' != this.reason:
                          return 'RatingReason|' + this.reason || '';
                        case '' != this.filename:
                          return 'FlowFileName|' + this.filename || '';
                        case '' != this.salessystem:
                          return 'SalesSystem|' + this.salessystem || '';
                        case '' != this.segmentID:
                          return 'DTVSegmentId|' + this.segmentID || '';
                        case '' != this.emailCount:
                          return 'EmailAddressCount|' + this.emailCount || '';
                        case '' != this.voicemailType:
                          return 'VoicemailType|' + this.voicemailType || '';
                        case '' != this.addressSource:
                          return 'AddressSource|' + this.addressSource || '';
                        default:
                          return '';
                      }
                    },
                  };
                  '' != user_feedback.rating &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      ',event67',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(
                      s_att.events,
                      'event67=' + user_feedback.rating,
                      ',',
                      1
                    ))),
                    (s_att.eVar237 = user_feedback.get_results() || ''),
                    null != s_att.eVar13 &&
                      (s_att.eVar13.indexOf('/stores/') > -1
                        ? isNaN(s_att.eVar13.split('/').pop()) ||
                          ((s_att.linkTrackVars = s_att.apl(
                            s_att.linkTrackVars,
                            'eVar80',
                            ',',
                            1
                          )),
                          (s_att.eVar80 = s_att.eVar13.split('/').pop()))
                        : ((s_att.linkTrackVars = s_att.apl(
                            s_att.linkTrackVars,
                            'eVar80',
                            ',',
                            1
                          )),
                          (s_att.eVar80 = checkGetVarValue(
                            ddo.getVar('user.attributes.merchantId')
                          )))),
                    ('1' !== ddo.getVar('page.attributes.onDeviceFlow') &&
                      1 !== ddo.getVar('page.attributes.onDeviceFlow')) ||
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',event84',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event84', ',', 1))),
                    ('' == tempEvent[aplevt].correctedSearchTerm &&
                      null == tempEvent[aplevt].correctedSearchTerm) ||
                      (s_att.prop11 = tempEvent[aplevt].correctedSearchTerm),
                    null != s_att.eVar13 &&
                      ((s_att.eVar13.indexOf('/shop/wireless/deviceconfigurator.html') > -1 ||
                        s_att.eVar13.indexOf('/shop/wireless/plans/joingroup.html') > -1 ||
                        s_att.eVar13.indexOf('/shop/wireless/plans/planconfigurator.html') > -1 ||
                        s_att.eVar13.indexOf('/shop/wireless/features/featureslist.html') > -1 ||
                        s_att.eVar13.indexOf('/shop/cart/cartsummary.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/wireless/devices/termsselection.html') >
                          -1 ||
                        s_att.eVar13.indexOf('/shopmobile/wireless/plans/dataplanselection.html') >
                          -1 ||
                        s_att.eVar13.indexOf('/shopmobile/wireless/addaline.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/wireless/plans/mobileshare.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/wireless/mobileshare-hub.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/wireless/plans-services-hub.html') >
                          -1 ||
                        s_att.eVar13.indexOf('/shopmobile/wireless/recommended-accessories.html') >
                          -1 ||
                        s_att.eVar13.indexOf('/shopmobile/cart/cartsummary.html') > -1) &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          ',event102',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event102', ',', 1))),
                      (s_att.eVar13.indexOf('/shopmobile/checkout/shippinginfo.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/personalinfo.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/paymentinfo.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/transfernumber.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/selectyournumber.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/transfernumberdetail.html') >
                          -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/searchareaandzipcode.html') >
                          -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/transfernumberresult.html') >
                          -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/reviewpersonalinfo.html') >
                          -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/orderreview.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/nextterms.html') > -1 ||
                        s_att.eVar13.indexOf('/shopmobile/checkout/terms.html') > -1 ||
                        s_att.eVar13.indexOf('/shop/checkout/personalpayment.html') > -1 ||
                        s_att.eVar13.indexOf('/shop/checkout/phonedetails.html') > -1 ||
                        s_att.eVar13.indexOf('/wireless/virtual/transferNumber.html') > -1 ||
                        s_att.eVar13.indexOf('/shop/checkout/orderreview.html') > -1) &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          ',event103',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event103', ',', 1)))),
                    (void 0 === tempEvent[aplevt].upSellOfferDetails &&
                      void 0 === tempEvent[aplevt].uverseUpSellDetails) ||
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',event265',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event265', ',', 1))),
                    (void 0 === tempEvent[aplevt].crossSellOfferDetails &&
                      void 0 === tempEvent[aplevt].uverseCrossSellDetails) ||
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',event266',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event266', ',', 1))),
                    void 0 ===
                      checkGetVarValue(
                        ddo.getVar('user.attributes.connectedVehiclePrepaidFlag')
                      ) ||
                      ('1' !=
                        checkGetVarValue(
                          ddo.getVar('user.attributes.connectedVehiclePrepaidFlag')
                        ) &&
                        1 !=
                          checkGetVarValue(
                            ddo.getVar('user.attributes.connectedVehiclePrepaidFlag')
                          )) ||
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',event278',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event278', ',', 1)));
                  var tempZEF = ddo.getVar('user.attributes.zuluEligFlag') || '';
                  '' != tempZEF &&
                    '1' == tempZEF &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      ',event281',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event281', ',', 1)));
                  var tempJEF = ddo.getVar('user.attributes.jupiterEligFlag') || '';
                  '' != tempJEF &&
                    '1' == tempJEF &&
                    ((s_att.linkTrackEvents = s_att.apl(
                      s_att.linkTrackEvents,
                      'event284',
                      ',',
                      1
                    )),
                    (s_att.events = s_att.apl(s_att.events, 'event284', ',', 1))),
                    1 == checkGetVarValue(ddo.getVar('user.tech.thinNativeFlag')) &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        'event288',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event288', ',', 1))),
                    'object' == typeof s_att &&
                      'string' == typeof s_att.eVar13 &&
                      '/shop/wireless/expressupgrade.html' == s_att.eVar13 &&
                      ('string' != typeof s_att.eVar15 ||
                        s_att.eVar15.indexOf('Express Upgrade Shopper') < 0) &&
                      ((s_att.eVar15 =
                        (s_att.eVar15 ? s_att.eVar15 + ',' : '') + 'Express Upgrade Shopper'),
                      (s_att.events = s_att.apl(s_att.events, 'event614', ',', 1))),
                    window.location.href.indexOf('/business/cart/cart_contents.jsp') > -1 &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',scView',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'scView', ',', 1))),
                    (window.location.href.indexOf(
                      '/business/checkout_cru/service_information.jsp'
                    ) > -1 ||
                      window.location.href.indexOf(
                        '/business/checkout_iru/service_information.jsp'
                      ) > -1 ||
                      window.location.href.indexOf('/business/checkout_sbnc/index.jsp') > -1) &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',scCheckout',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'scCheckout', ',', 1))),
                    (window.location.href.indexOf('/business/checkout_iru/billing_info.jsp') >
                      -1 ||
                      window.location.href.indexOf(
                        '/business/checkout_sbnc/default_contract.jsp'
                      ) > -1) &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',event9',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event9', ',', 1))),
                    (window.location.href.indexOf('/business/checkout_cru/review_order.jsp') >
                      -1 ||
                      window.location.href.indexOf('/business/checkout_iru/review_order.jsp') >
                        -1 ||
                      window.location.href.indexOf(
                        '/business/checkout_sbnc/review_order_sbdc.jsp'
                      ) > -1 ||
                      window.location.href.indexOf('/business/checkout_sbnc/review_order.jsp') >
                        -1) &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',event11',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event11', ',', 1))),
                    'Business' == ddo.getVar('page.category.pageOwnership') &&
                      ((tempLinkID = s_att.getQueryParam('LinkID') || ''),
                      (tempElqAID = s_att.getQueryParam('elqaid') || ''),
                      (tempElqAT = s_att.getQueryParam('elqat') || ''),
                      (tempElqCampaignID = s_att.getQueryParam('elqCampaignID') || ''),
                      (tempElq = s_att.getQueryParam('elq') || ''),
                      (temp181 =
                        tempLinkID + '|' + tempElqAID + '|' + tempElqAT + '|' + tempElqCampaignID),
                      '' != temp181 &&
                        0 == containsNothingButDelimiters(temp181, '|') &&
                        (s_att.eVar181 = temp181),
                      '' !== tempElqCampaignID &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          'event513',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'event513', ',', 1))),
                      (s_att.eVar182 = tempElq));
                  var displayedMessage = ddo.getVar('page.attributes.displayedMessage') || '',
                    eventsDisplayedMessage = tempEvent[aplevt].displayedMessage || '',
                    displayedMessageType =
                      ddo.getVar('page.attributes.displayedMessageType') || '',
                    eVar230_TwoFactor = displayedMessageType.length > 0;
                  if (
                    ((displayedMessage.length > 0 || eventsDisplayedMessage.length > 0) &&
                      (eVar230_TwoFactor
                        ? (displayedMessage.length > 230 &&
                            (displayedMessage = displayedMessage.substring(0, 230)),
                          (s_att.eVar230 = displayedMessage + '|' + displayedMessageType))
                        : (s_att.eVar230 = displayedMessage || eventsDisplayedMessage || ''),
                      (s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',event271',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event271', ',', 1))),
                    (tempPageUrl =
                      checkGetVarValue(tempEvent[aplevt]._evtAddressBarFullURL) || ''),
                    (temp88 = s_att.eVar188 || ''),
                    (temp88.toLowerCase().indexOf('agentsso') > -1 ||
                      tempPageUrl.toLowerCase().indexOf('agentsso') > -1 ||
                      tempPageUrl.toLowerCase().indexOf('opus') > -1) &&
                      ((s_att.linkTrackEvents = s_att.apl(
                        s_att.linkTrackEvents,
                        ',event312',
                        ',',
                        1
                      )),
                      (s_att.events = s_att.apl(s_att.events, 'event312', ',', 1))),
                    s_att.eVar81 ||
                      ((tempVS = window.VISITOR_STATE || ''),
                      (s_att.eVar81 =
                        checkGetVarValue(ddo.getVar('user.customerType')) + '|' + tempVS || '')),
                    s_att.eVar87 ||
                      (s_att.eVar87 =
                        checkGetVarValue(tempEvent[aplevt].searchResultFilters) ||
                        checkGetVarValue(tempEvent[aplevt].filterSelection) ||
                        ''),
                    void 0 !== tempEvent[aplevt].searchOriginURL)
                  ) {
                    var tempSOGUrl = tempEvent[aplevt].searchOriginURL || '';
                    s_att.eVar88 = tempSOGUrl.toLowerCase();
                  }
                  if (
                    ((s_att.eVar91 =
                      checkGetVarValue(ddo.getVar('page.pageInfo.referralFlow')) ||
                      checkGetVarValue(tempEvent[aplevt].referralFlow) ||
                      ''),
                    '' != s_att.eVar91)
                  ) {
                    var idxQsn = s_att.eVar91.indexOf('?'),
                      idxHash = s_att.eVar91.indexOf('#');
                    if (idxQsn > -1 && idxHash > -1) {
                      var idx91 = idxQsn > idxHash ? idxHash : idxQsn;
                      s_att.eVar91 = s_att.eVar91.substring(0, idx91);
                    } else
                      idxQsn > -1
                        ? (s_att.eVar91 = s_att.eVar91.substring(0, idxQsn))
                        : idxHash > -1 && (s_att.eVar91 = s_att.eVar91.substring(0, idxHash));
                    '.' === s_att.eVar91 && (s_att.eVar91 = '');
                  }
                  function trimVideo (a, b) {
                    return 'string' == typeof a && '' !== a && a.length > b
                      ? a.substring(0, b)
                      : a;
                  }
                  var tempPIFLOB =
                      trimVideo(
                        checkGetVarValue(ddo.getVar('page.media.productInFocusLOB'), 's'),
                        20
                      ) || '',
                    tempPIFMake = trimVideo(
                      checkGetVarValue(ddo.getVar('page.media.productInFocusDeviceMake'), 's') ||
                        checkGetVarValue(tempEvent[aplevt].activatedDeviceMake) ||
                        '',
                      50
                    ),
                    tempPIFModel = trimVideo(
                      checkGetVarValue(ddo.getVar('page.media.productInFocusDeviceModel')) ||
                        checkGetVarValue(tempEvent[aplevt].activatedDeviceModel) ||
                        '',
                      50
                    ),
                    tempPIFOS =
                      trimVideo(
                        checkGetVarValue(ddo.getVar('page.media.productInFocusDeviceOS'), 's'),
                        20
                      ) || '',
                    tempPIFType =
                      trimVideo(
                        checkGetVarValue(ddo.getVar('page.media.productInFocusDeviceType'), 's'),
                        30
                      ) || '',
                    tempPIFFunc =
                      trimVideo(
                        checkGetVarValue(ddo.getVar('page.media.productInFocusFunction'), 's'),
                        20
                      ) || '',
                    tempPIFMedia =
                      trimVideo(
                        checkGetVarValue(ddo.getVar('page.media.productInFocusMedia'), 's'),
                        30
                      ) || '';
                  (temp_LOB = tempPIFLOB || ''),
                    (temp_devMake = tempPIFMake || ''),
                    (temp_devModel = tempPIFModel || ''),
                    (temp_devOS = tempPIFOS || ''),
                    (temp_devType = tempPIFType || ''),
                    (temp_devPIFunc = tempPIFFunc || ''),
                    (temp_devPIFG = tempPIFMedia || '');
                  var temp56;
                  '' !=
                    (temp56 =
                      temp_LOB +
                      '|' +
                      temp_devMake +
                      '|' +
                      temp_devModel +
                      '|' +
                      temp_devOS +
                      '|' +
                      temp_devType +
                      '|' +
                      temp_devPIFunc +
                      '|' +
                      temp_devPIFG) &&
                    0 == containsNothingButDelimiters(temp56, '|') &&
                    (s_att.eVar56 = temp56);
                  var converter = new DeviceConverter(),
                    temp203 =
                      checkGetVarValue(ddo.getVar('user.attributes.subscriberStatus')) ||
                      checkGetVarValue(ddo.getVar('user.account.accountInFocusStatus')) ||
                      checkGetVarValue(ddo.getVar('user.account.wirelessAccountStatus')) ||
                      checkGetVarValue(ddo.getVar('user.account.wirelineUserStatus')) ||
                      checkGetVarValue(ddo.getVar('user.account.memberStatus')) ||
                      '';
                  (temp203 += '|'),
                    '' != (temp203 += converter.build(tempEvent[aplevt])) &&
                      0 == containsNothingButDelimiters(temp203, '|') &&
                      (s_att.eVar203 = temp203);
                  var temp60;
                  '' !=
                    (temp60 =
                      (trimVideo(checkGetVarValue(ddo.getVar('page.media.id'), 's'), 45) || '') +
                      '|' +
                      (trimVideo(
                        checkGetVarValue(ddo.getVar('page.media.friendlyName'), 's'),
                        115
                      ) || '') +
                      '|||' +
                      (trimVideo(checkGetVarValue(ddo.getVar('page.media.seriesName'), 's'), 60) ||
                        '')) &&
                    0 == containsNothingButDelimiters(temp60, '|') &&
                    (s_att.eVar60 = temp60);
                  var tempEvVideoType =
                      trimVideo(checkGetVarValue(ddo.getVar('page.media.videoType'), 's'), 15) ||
                      '',
                    tempEvMediaType =
                      trimVideo(checkGetVarValue(ddo.getVar('page.media.type'), 's'), 30) || '',
                    tempEvMediaClass =
                      trimVideo(checkGetVarValue(ddo.getVar('page.media.class'), 's'), 15) || '',
                    tempEvMediaObj =
                      trimVideo(checkGetVarValue(ddo.getVar('page.media.objective'), 's'), 25) ||
                      '',
                    tempEvMediaCat =
                      trimVideo(checkGetVarValue(ddo.getVar('page.media.category'), 's'), 50) ||
                      '',
                    tempEvMediaVert =
                      trimVideo(checkGetVarValue(ddo.getVar('page.media.vertical'), 's'), 20) ||
                      '',
                    tempEvMediaPubDate =
                      trimVideo(checkGetVarValue(ddo.getVar('page.media.publishDate'), 's'), 10) ||
                      '',
                    tempMediaPublisher =
                      trimVideo(checkGetVarValue(ddo.getVar('page.media.publisher'), 's'), 30) ||
                      '',
                    tempMediaPersona =
                      trimVideo(checkGetVarValue(ddo.getVar('page.media.persona'), 's'), 30) || '',
                    tempMediaFormat =
                      trimVideo(checkGetVarValue(ddo.getVar('page.media.format'), 's'), 10) || '';
                  (temp61 = ''),
                    (temp61 =
                      tempEvVideoType +
                      '|' +
                      tempEvMediaType +
                      '|' +
                      tempEvMediaClass +
                      '|' +
                      tempEvMediaObj +
                      '|' +
                      tempEvMediaCat +
                      '|' +
                      tempEvMediaVert +
                      '|' +
                      tempEvMediaPubDate +
                      '|' +
                      tempMediaPublisher +
                      '|' +
                      tempMediaPersona +
                      '|' +
                      tempMediaFormat),
                    '' != temp61 &&
                      0 == containsNothingButDelimiters(temp61, '|') &&
                      (s_att.eVar61 = temp61);
                  var temp226;
                  '' !=
                    (temp226 =
                      (trimVideo(checkGetVarValue(ddo.getVar('page.media.provider'), 's'), 25) ||
                        trimVideo(
                          checkGetVarValue(ddo.getVar('page.attributes.newsProvider'), 's'),
                          25
                        ) ||
                        '') +
                      '|' +
                      (trimVideo(checkGetVarValue(ddo.getVar('page.media.network'), 's'), 20) ||
                        '') +
                      '|||||||' +
                      (trimVideo(
                        checkGetVarValue(ddo.getVar('page.media.sequenceCount'), 's'),
                        3
                      ) || '') +
                      '|' +
                      (trimVideo(checkGetVarValue(ddo.getVar('page.media.sequenceNum'), 's'), 3) ||
                        '')) &&
                    0 == containsNothingButDelimiters(temp226, '|') &&
                    (s_att.eVar226 = temp226);
                  var temp205 =
                    checkGetVarValue(tempEvent[aplevt].creditClass) +
                    '|' +
                    checkGetVarValue(tempEvent[aplevt].paymentMethod) +
                    '||';
                  if (
                    ('' != temp205 &&
                      0 == containsNothingButDelimiters(temp205, '|') &&
                      (s_att.eVar205 = temp205),
                    tempEvent[aplevt].eventCode.indexOf('intercepted') > -1 &&
                      ((s_att.eVar25 = checkGetVarValue(
                        ddo.getVar('page.attributes.directvOrderId')
                      )),
                      '' !== s_att.eVar25 &&
                        ((s_att.linkTrackEvents = s_att.apl(
                          s_att.linkTrackEvents,
                          ',purchase',
                          ',',
                          1
                        )),
                        (s_att.events = s_att.apl(s_att.events, 'purchase', ',', 1))),
                      (s_att.eVar247 = checkGetVarValue(ddo.getVar('page.attributes.directvMID'))),
                      (void 0 !== s_att.eVar49 && '' != s_att.eVar49) ||
                        (void 0 !== s_att.prop49 && '' != s_att.prop49) ||
                        (s_att.prop49 = s_att.eVar49 = checkGetVarValue(
                          ddo.getVar('page.attributes.directvPageName')
                        ))),
                    'pageLoad' == tempEvent[aplevt].eventAction &&
                      -1 == window.location.href.indexOf('start.att.net'))
                  ) {
                    tempContentDetails =
                      checkGetVarValue(tempEvent[aplevt].contentFriendlyName) +
                      '|' +
                      checkGetVarValue(tempEvent[aplevt].contentProductGroup) +
                      '|' +
                      checkGetVarValue(tempEvent[aplevt].contentSystem);
                    s_att.prop56 = '||' === tempContentDetails ? '' : tempContentDetails;
                  }
                  var ioc = ddo.getVar('page.attributes.ioCode') || '',
                    pmc = tempEvent[aplevt].promoCode || '';
                  pmc.indexOf('|') > -1 && (pmc = pmc.split('|')[0]);
                  var tnf = ddo.getVar('user.tech.thinNativeFlag') || '',
                    cpf = tempEvent[aplevt].consentPageFormat || '',
                    ptm = checkGetVarValue(ddo.getVar('page.attributes.pageTriggerMethod'));
                  (s_att.eVar99 = ioc + '|' + pmc + '|' + tnf + '|' + cpf + '|' + ptm),
                    containsNothingButDelimiters(s_att.eVar99, '|') && (s_att.eVar99 = '');
                  var temp100 =
                    checkGetVarValue(tempEvent[aplevt]._evtmaxPageDepthViewed) ||
                    checkGetVarValue(tempEvent[aplevt].maxPageDepthViewed) ||
                    checkGetVarValue(ddo.getVar('page.pageInfo.maxPageDepthViewed')) ||
                    '';
                  if (
                    ((s_att.eVar100 = temp100), (s_att.list1 = ''), void 0 !== ddo.getImpressions)
                  )
                    for (var key in ((adbPNCheck =
                      checkGetVarValue(tempEvent[aplevt]._evtPageURL) ||
                      checkGetVarValue(tempEvent[aplevt]._bevtPageName) ||
                      checkGetVarValue(tempEvent[aplevt]._evtPageName) ||
                      ddo.getVar('page.pageInfo.pageName') ||
                      ''),
                    (adbTempPLImpObj = ddo.getImpressions()),
                    adbTempPLImpObj))
                      if (adbTempPLImpObj.hasOwnProperty(key) && key == adbPNCheck) {
                        var adbTempPLImpEvents = adbTempPLImpObj[key];
                        if (
                          1 === adbTempPLImpEvents.length &&
                          'pageLoad' == tempEvent[aplevt].eventAction
                        ) {
                          (tempCFN = adbTempPLImpEvents[0].contentFriendlyName || ''),
                            (tempCPG = adbTempPLImpEvents[0].contentProductGroup || ''),
                            (tempCS = adbTempPLImpEvents[0].contentSystem || '');
                          var tempCD = tempCFN + '|' + tempCPG + '|' + tempCS;
                          s_att.prop56 = '||' === tempCD ? '' : tempCD;
                        }
                        for (adbplimp = 0; adbplimp < adbTempPLImpEvents.length; adbplimp++)
                          'impression' == adbTempPLImpEvents[adbplimp].eventAction &&
                            1 != adbTempPLImpEvents[adbplimp]._processedByAdobe &&
                            (ddo.processedByDTM(adbTempPLImpEvents[adbplimp], 'Adobe'),
                            (adbplTempcontentId =
                              adbTempPLImpEvents[adbplimp].contentId ||
                              adbTempPLImpEvents[adbplimp].contentid ||
                              ''),
                            (adbplTempcontentPageSectionId =
                              adbTempPLImpEvents[adbplimp].contentPageSectionId || ''),
                            (adbplTempcontentTransactionId =
                              adbTempPLImpEvents[adbplimp].componentOrder ||
                              adbTempPLImpEvents[adbplimp].contentTransactionId ||
                              adbTempPLImpEvents[adbplimp].tDataTransactionId ||
                              ''),
                            (adbplTempcontentSystem =
                              adbTempPLImpEvents[adbplimp].contentSystem || ''),
                            (adbplTempcontentFriendlyName =
                              adbTempPLImpEvents[adbplimp].contentFriendlyName || ''),
                            (adbplTempSlotFriendlyName =
                              adbTempPLImpEvents[adbplimp].slotFriendlyName || ''),
                            (adbplTempcontentProductGroup =
                              adbTempPLImpEvents[adbplimp].contentProductGroup || ''),
                            (adbplTempcontentSku = adbTempPLImpEvents[adbplimp].contentSku || ''),
                            (adbplTempSlotPosition =
                              adbTempPLImpEvents[adbplimp].slotPosition || ''),
                            (adbplTempcontentRotationPosition =
                              adbTempPLImpEvents[adbplimp].contentRotationPosition || ''),
                            (adbplTempcontentInventorySpaceId =
                              adbTempPLImpEvents[adbplimp].contentInventorySpaceId || ''),
                            (adbplTempInventorySpaceId =
                              adbTempPLImpEvents[adbplimp].inventorySpaceId || ''),
                            (adbtempplPositionTwo =
                              adbplTempSlotPosition || adbplTempcontentRotationPosition),
                            (adbtempplPositionFour =
                              adbplTempcontentInventorySpaceId || adbplTempInventorySpaceId),
                            adbplTempcontentFriendlyName &&
                              ((s_att.linkTrackEvents = s_att.apl(
                                s_att.linkTrackEvents,
                                'event350',
                                ',',
                                1
                              )),
                              (s_att.events = s_att.apl(s_att.events, 'event350', ',', 1)),
                              (s_att.linkTrackEvents = s_att.apl(
                                s_att.linkTrackEvents,
                                'event352',
                                ',',
                                1
                              )),
                              (s_att.events = s_att.apl(s_att.events, 'event352', ',', 1)),
                              (impProd =
                                ';impression;;;event352=1;eVar243=~' +
                                adbtempplPositionTwo +
                                '~' +
                                adbplTempcontentPageSectionId +
                                '~' +
                                adbtempplPositionFour +
                                '~' +
                                adbplTempcontentTransactionId +
                                '~' +
                                adbplTempcontentSystem +
                                '~' +
                                adbplTempcontentFriendlyName +
                                '~' +
                                adbplTempSlotFriendlyName +
                                '~' +
                                adbplTempcontentProductGroup +
                                '~' +
                                adbplTempcontentSku),
                              (s_att.products = s_att.apl(s_att.products, impProd, ',', 1)),
                              '' == s_att.list1
                                ? (s_att.list1 +=
                                    adbplTempcontentId +
                                    '~' +
                                    adbtempplPositionTwo +
                                    '~' +
                                    adbplTempcontentPageSectionId +
                                    '~' +
                                    adbtempplPositionFour +
                                    '~' +
                                    adbplTempcontentTransactionId +
                                    '~' +
                                    adbplTempcontentSystem +
                                    '~' +
                                    adbplTempcontentFriendlyName +
                                    '~' +
                                    adbplTempSlotFriendlyName +
                                    '~' +
                                    adbplTempcontentProductGroup +
                                    '~' +
                                    adbplTempcontentSku)
                                : (s_att.list1 +=
                                    '|' +
                                    adbplTempcontentId +
                                    '~' +
                                    adbtempplPositionTwo +
                                    '~' +
                                    adbplTempcontentPageSectionId +
                                    '~' +
                                    adbtempplPositionFour +
                                    '~' +
                                    adbplTempcontentTransactionId +
                                    '~' +
                                    adbplTempcontentSystem +
                                    '~' +
                                    adbplTempcontentFriendlyName +
                                    '~' +
                                    adbplTempSlotFriendlyName +
                                    '~' +
                                    adbplTempcontentProductGroup +
                                    '~' +
                                    adbplTempcontentSku)));
                      }
                  function getQSV (name) {
                    var q = location.search.match(new RegExp('[?&]' + name + '=([^&#]*)'));
                    return q && q[1];
                  }
                  function mktgQSP () {
                    for (
                      var parameters = '',
                        mktg = [
                          'utm_advid',
                          'utm_cmpid',
                          'utm_stid',
                          'utm_pmtid',
                          'utm_crid',
                          'gclid',
                          'dclid',
                        ],
                        i = 0;
                      i < mktg.length;
                      i++
                    ) {
                      var value = getQSV(mktg[i]);
                      null != value && (parameters += '' !== parameters ? '|' + value : value);
                    }
                    return parameters;
                  }
                  '' !== location.search && (s_att.eVar197 = mktgQSP() || ''),
                    ddo.squawk('Adobe PageLoad Rule s_att.events: ' + s_att.events, 1, 'e'),
                    ddo.squawk('Adobe PageLoad Rule Completed', 1, 'e'),
                    'Business' == ddo.getVar('page.category.pageOwnership') &&
                      ((s_att.prop17 = ''),
                      (s_att.prop18 = ''),
                      (s_att.prop19 = ''),
                      (s_att.prop20 = ''),
                      (s_att.prop22 = ''),
                      (s_att.prop23 = ''),
                      '' !== s_att.eVar201 &&
                        'POC' !== s_att.eVar201 &&
                        'POS' !== s_att.eVar201 &&
                        'OPSS Metrocell' !== s_att.eVar201 &&
                        'eBiz' !== s_att.eVar201 &&
                        (s_att.eVar53 = '')),
                    (s_att.eVar75 = 'PV'),
                    void 0 !== s_att.eVar15 && '' != s_att.eVar15 && (s_att.eVar15 = ''),
                    'undefined' == typeof ddo || ddo.nometrics || s_att.t(),
                    ddo.processedByDTM(tempEvent[aplevt], 'Adobe'),
                    window.location.href.indexOf('start.att.net') > -1 &&
                      ((s_att.prop17 = ''),
                      (s_att.prop18 = ''),
                      (s_att.prop20 = ''),
                      (s_att.prop23 = ''),
                      (s_att.prop56 = '')),
                    void 0 !== s_att.eVar49 && '' != s_att.eVar49 && (s_att.eVar49 = ''),
                    void 0 !== s_att.prop49 && '' != s_att.prop49 && (s_att.prop49 = ''),
                    (s_att.eVar223 = ''),
                    (s_att.list3 = ''),
                    void 0 !== s_att.products &&
                      s_att.products.length > 0 &&
                      (s_att.products.indexOf('event352') > -1 ||
                        s_att.products.indexOf('event353') > -1) &&
                      (s_att.products = '');
                }
              }
          }.apply(this, arguments);
        } finally {
          if ($___old_8fda338a6d756d09)
            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_8fda338a6d756d09));
          if ($___old_540be2d0b98f28ed)
            ({}.constructor.defineProperty(window, 'Storage', $___old_540be2d0b98f28ed));
        }
      }),
      detmScriptExecutor.execute('s-code', null);
  })();
}
