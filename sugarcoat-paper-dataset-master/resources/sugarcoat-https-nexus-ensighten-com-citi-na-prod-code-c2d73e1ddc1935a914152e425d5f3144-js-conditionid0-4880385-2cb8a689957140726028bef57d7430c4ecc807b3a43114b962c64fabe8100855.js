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
        new Image().src =
          'https://pt.ispot.tv/v2/TC-3498-3.gif?app=web' + '&' + 'type=HYCA_landing';
      },
      3336943,
      650551
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var type = 'global',
          custom_conversion_id = '',
          custom_conversion_label = '',
          custom_event_name = '';
        local_params = {};
        if (type === 'async')
          Bootstrapper.loadScriptCallback(
            '//www.googleadservices.com/pagead/conversion_async.js',
            function () {
              window.google_trackConversion({
                google_conversion_id: custom_conversion_id,
                google_conversion_label: custom_conversion_label,
                google_remarketing_only: true,
                google_custom_params: local_params,
              });
            }
          );
        else if (type === 'sync') {
          window.google_conversion_id = custom_conversion_id;
          window.google_conversion_label = custom_conversion_label;
          window.google_remarketing_only = true;
          window.google_custom_params = local_params;
          document.write(
            '<script src="//www.googleadservices.com/pagead/conversion.js"></script>'
          );
        } else if (type === 'image') {
          var data = [],
            dataParam = '';
          for (var i in local_params)
            if (local_params.hasOwnProperty(i))
              data.push(encodeURIComponent(i + '=' + local_params[i]));
          dataParam = data.length > 0 ? '&data=' + data.join(';') : '';
          new Image().src =
            'https://googleads.g.doubleclick.net/pagead/viewthroughconversion/' +
            custom_conversion_id +
            '/?value=0&label=' +
            custom_conversion_label +
            '&guid=ON&script=0' +
            dataParam;
        } else if (type === 'global') {
          var dl = '';
          if (dl == '') dl = 'dataLayer';
          window[dl] = window[dl] || [];
          var remarketingIds = [];
          remarketingIds.push('AW-819500023');
          var url =
            '//www.googletagmanager.com/gtag/js?id=' +
            remarketingIds[0] +
            (dl !== 'dataLayer' ? '&l=' + dl : '');
          function callbackFunc () {
            var configProperties = {};
            if ('') configProperties.linker = { domains: ''.split(',') };
            for (var i = 0; i < remarketingIds.length; i++)
              gtag('config', remarketingIds[i], configProperties);
            if (custom_conversion_label) {
              var send_to_list = [];
              for (var i = 0; i < remarketingIds.length; i++) {
                var tracking_id = remarketingIds[i] + '/' + '';
                send_to_list.push(tracking_id);
              }
              local_params.send_to = send_to_list;
            }
            custom_event_name = custom_event_name ? custom_event_name : 'conversion';
            gtag('event', custom_event_name, local_params);
          }
          if (!window.gtag) {
            window.gtag =
              window.gtag ||
              function gtag () {
                var dl = '' || 'dataLayer';
                window[dl] = window[dl] || [];
                window[dl].push(arguments);
              };
            gtag('js', new Date());
            Bootstrapper.loadScriptCallback(url, callbackFunc);
          } else callbackFunc();
        }
      },
      3256381,
      604700
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src =
          'https://data.adxcel-ec2.com/pixel/?ad_log=referer' +
          '&' +
          'action=signup' +
          '&' +
          'pixid=1fa8c118-c602-483e-9fae-ed85cb047dfa';
      },
      3283849,
      647512
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
                  const $___old_e6f0bf1e2c8eab65 = {}.constructor.getOwnPropertyDescriptor(
                    Document.prototype,
                    'cookie'
                  );
                  try {
                    if ($___old_e6f0bf1e2c8eab65)
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
                    if ($___old_e6f0bf1e2c8eab65)
                      ({}.constructor.defineProperty(
                        Document.prototype,
                        'cookie',
                        $___old_e6f0bf1e2c8eab65
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
            'https://6269322.fls.doubleclick.net/activityi;src=6269322;type=bankp0;cat=banka01z;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' +
            Math.round(Math.random() * 10000000000000) +
            '?';
          frame.title = 'No Content';
          document.body.appendChild(frame);
        });
      },
      3256385,
      643214
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src =
          'https://s.amazon-adsystem.com/iui3?d=forester-did' +
          '&' +
          'ex-fargs=' +
          encodeURIComponent('?id=267b51f7-ab71-7c71-48af-6aa2a4598cc7&type=4&m=1') +
          '&' +
          'ex-fch=416613' +
          '&' +
          'ex-src=https://online.citi.com' +
          '&' +
          'ex-hargs=' +
          encodeURIComponent('v=1.0;c=5681374320001;p=267B51F7-AB71-7C71-48AF-6AA2A4598CC7') +
          '';
      },
      3305924,
      644798
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src = 'https://pubads.g.doubleclick.net/activity;xsp=4609762;ord=123456789';
      },
      3269668,
      644801
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src = 'https://sp.analytics.yahoo.com/spp.pl?a=10000' + '&' + '.yp=10122412';
      },
      3352757,
      655792
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
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src = 'https://pubads.g.doubleclick.net/activity;xsp=4633681;ord=1';
      },
      3269667,
      644806
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src = 'https://pubads.g.doubleclick.net/activity;xsp=4635400;ord=1';
      },
      3269694,
      644818
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        new Image().src = '';
        new Image().src = '';
      },
      3330861,
      651291
    );
  })();
}
