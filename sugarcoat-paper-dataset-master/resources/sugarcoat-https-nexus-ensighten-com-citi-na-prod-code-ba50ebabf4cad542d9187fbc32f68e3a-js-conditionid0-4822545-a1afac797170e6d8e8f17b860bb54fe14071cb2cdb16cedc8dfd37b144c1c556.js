{
  const $___stub_cdc5a54489618108 = {};
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
  })($___stub_cdc5a54489618108);
  (function () {
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src = 'https://data.dianomi.com/frontend/pixel2?shortcode=Citi.Deposits';
      },
      3238765,
      641779
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src =
          'https://pubads.g.doubleclick.net/activity;dc_iu=/479/DFPAudiencePixel;ord=1;dc_seg=1003115878';
      },
      3238762,
      641782
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var ensVar0 = function () {
          return Math.random() * 10000000000000;
        };
        var ensVar1 = function () {
          return document.URL;
        };
        var countingMethod = 'transactions';
        var dl = 'dataLayer';
        var floodLightId = 'DC-6260004';
        var send_to = [];
        if (floodLightId) {
          var receiver = floodLightId + '/' + 'lifea0' + '/' + 'lifea02t' + '+' + countingMethod;
          send_to.push(receiver);
        } else {
          var ids = [];
          for (var i in ids) {
            var receiver = ids[i] + '/' + 'lifea0' + '/' + 'lifea02t' + '+' + countingMethod;
            send_to.push(receiver);
          }
        }
        var allow_custom_scripts = 'true' == 'true' ? true : false;
        var eventObj = { allow_custom_scripts: allow_custom_scripts, send_to: send_to };
        if (countingMethod === 'per_session') if ('') eventObj.session_id = '';
        if (countingMethod === 'transactions') {
          if ('0') eventObj.value = '0';
          if (ensVar0.call(this)) eventObj.transaction_id = ensVar0.call(this);
          if ('') eventObj.quantity = '';
        }
        eventObj['u6'] = [ensVar1.call(this)];
        window[dl] = window[dl] || [];
        window.gtag =
          window.gtag ||
          function gtag () {
            window[dl].push(arguments);
          };
        gtag('event', 'conversion', eventObj);
      },
      2632204,
      564217
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.bindDOMParsed(function () {
          var frame = document.createElement('iframe'),
            getCookie = Bootstrapper.Cookies
              ? Bootstrapper.Cookies.get
              : function (a, c) {
                  const $___old_07222240c8e91de3 = {}.constructor.getOwnPropertyDescriptor(
                    Document.prototype,
                    'cookie'
                  );
                  try {
                    if ($___old_07222240c8e91de3)
                      ({}.constructor.defineProperty(
                        Document.prototype,
                        'cookie',
                        $___stub_cdc5a54489618108.cookie
                      ));
                    return function () {
                      for (var b = document.cookie.split(';'), d = 0; d < b.length; d++) {
                        var e = b[d].replace(/^s+/, '').split('=');
                        if (e[0] == a) return c ? e[1] : decodeURIComponent(e[1]);
                      }
                      return '';
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_07222240c8e91de3)
                      ({}.constructor.defineProperty(
                        Document.prototype,
                        'cookie',
                        $___old_07222240c8e91de3
                      ));
                  }
                },
            gclid = getCookie('_gcl_aw')
              ? getCookie('_gcl_aw').split('.')[getCookie('_gcl_aw').split('.').length - 1]
              : '';
          frame.style.display = 'none';
          frame.style.width = '1px';
          frame.style.height = '1px';
          frame.src =
            'https://6269322.fls.doubleclick.net/activityi;src=6269322;type=lifea0;cat=banka0' +
            (document.URL !== '' ? ';u7=' + document.URL : '') +
            ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' +
            Math.round(Math.random() * 10000000000000) +
            '?';
          frame.title = 'No Content';
          document.body.appendChild(frame);
        });
      },
      3059950,
      621744
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.bindDOMParsed(function () {
          var frame = document.createElement('iframe'),
            getCookie = Bootstrapper.Cookies
              ? Bootstrapper.Cookies.get
              : function (a, c) {
                  const $___old_49df60218492bbc9 = {}.constructor.getOwnPropertyDescriptor(
                    Document.prototype,
                    'cookie'
                  );
                  try {
                    if ($___old_49df60218492bbc9)
                      ({}.constructor.defineProperty(
                        Document.prototype,
                        'cookie',
                        $___stub_cdc5a54489618108.cookie
                      ));
                    return function () {
                      for (var b = document.cookie.split(';'), d = 0; d < b.length; d++) {
                        var e = b[d].replace(/^s+/, '').split('=');
                        if (e[0] == a) return c ? e[1] : decodeURIComponent(e[1]);
                      }
                      return '';
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_49df60218492bbc9)
                      ({}.constructor.defineProperty(
                        Document.prototype,
                        'cookie',
                        $___old_49df60218492bbc9
                      ));
                  }
                },
            gclid = getCookie('_gcl_aw')
              ? getCookie('_gcl_aw').split('.')[getCookie('_gcl_aw').split('.').length - 1]
              : '';
          frame.style.display = 'none';
          frame.style.width = '1px';
          frame.style.height = '1px';
          frame.src =
            'https://6256710.fls.doubleclick.net/activityi;src=6256710;type=lifem0;cat=mortg0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' +
            Math.round(Math.random() * 10000000000000) +
            '?';
          frame.title = 'No Content';
          document.body.appendChild(frame);
        });
      },
      3264035,
      644812
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var partner_id = '397201';
        window._linkedin_data_partner_id = partner_id;
        src = '//snap.licdn.com/li.lms-analytics/insight.min.js';
        Bootstrapper.insertScript(src);
      },
      3155491,
      630835
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.insertScript('https://cdn.inpwrd.net/track/1.0.0/bundle.min.js');
      },
      3092973,
      596978
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src = 'https://gwmtracking.com/p/v/1/5cf16399f870814c0138c6b1/format/img';
      },
      3059949,
      605976
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        window.projectId = '10000';
        window.pixelId = '10071894';
        (function (w, d, t, r, u) {
          window.dotq = window.dotq || [];
          window.dotq.push({
            projectId: window.projectId,
            properties: { pixelId: window.pixelId },
          });
          var s = d.createElement(t);
          s.src = r;
          s.async = true;
          s.onload = s.onreadystatechange = function () {
            var y,
              rs = this.readyState,
              c = w[u];
            if (rs && rs != 'complete' && rs != 'loaded') return;
            try {
              y = YAHOO.ywa.I13N.fireBeacon;
              w[u] = [];
              w[u].push = function (p) {
                y([p]);
              };
              y(c);
            } catch (e) {}
          };
          var scr = d.getElementsByTagName(t)[0],
            par = scr.parentNode;
          par.insertBefore(s, scr);
        })(window, document, 'script', 'https://s.yimg.com/wi/ytc.js', 'dotq');
      },
      2931459,
      607228
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var param_ti = '5695784';
        var param_gv = '';
        var param_ea = '';
        var param_ec = '';
        var param_el = '';
        var param_ev = '';
        var pageLoad = true;
        var arrayName = '';
        var onload_function = function () {
          var name = '';
          if (arrayName === 'uetq' || arrayName === '') name = window.uetq || [];
          else if (arrayName !== undefined && arrayName != 'uetq') name = window.arrayName || [];
          var o = { ti: param_ti };
          (o.q = name), (name = new UET(o));
          if (pageLoad) name.push('pageLoad');
          var local_object = {};
          param_gv ? (local_object['gv'] = +(+param_gv).toFixed(3)) : '',
            param_ea ? (local_object['ea'] = param_ea) : '',
            param_ec ? (local_object['ec'] = param_ec) : '',
            param_el ? (local_object['el'] = param_el) : '',
            param_ev ? (local_object['ev'] = param_ev) : '';
          name.push(local_object);
        };
        var local_scr_url = '//' + 'bat.bing.com/bat.js';
        Bootstrapper.loadScriptCallback(local_scr_url, onload_function);
      },
      3399476,
      492646
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var clientName = 'Bank%20Q4';
        var clientID = '778713';
        var eventType = 'visitor';
        var segmentNumber = '0';
        var segmentName = 'BankQ4Suppression';
        window.a9 = window.a9 || {};
        a9.clientName = clientName;
        a9.clientID = clientID;
        a9.eventType = eventType ? eventType : '';
        a9.segmentNumber = segmentNumber ? segmentNumber : '';
        a9.segmentName = segmentName ? segmentName : '';
        var url = '//a.tribalfusion.com/pixel/tags/' + clientName + '/' + clientID + '/pixel.js';
        Bootstrapper.insertScript(url);
      },
      3212411,
      605966
    );
  })();
}
