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
    Marketing.bindDependencyImmediate(
      function () {
        const $___old_bd82f1bbb7a4479f = {}.constructor.getOwnPropertyDescriptor(
          Document.prototype,
          'cookie'
        );
        try {
          if ($___old_bd82f1bbb7a4479f)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___stub_cdc5a54489618108.cookie
            ));
          return function () {
            var Bootstrapper = window['Marketing'];
            var ensightenOptions = Marketing.ensightenOptions;
            try {
              if (Marketing.UDO.priorconsent) {
                if (
                  /(dell-small-business\/cp\/small-business-central)$|(small-business-partners\/ab\/small-business-partners)$/i.test(
                    location.pathname
                  )
                )
                  Marketing.gEvent('DC-9632645/campa0/small0+standard', 'conversion');
                if (Marketing.UDO.promoid === '100') {
                  var idMap = {
                    ae: 'csb_s004',
                    ar: 'csb_s010',
                    at: 'csb_s005',
                    au: 'csb_s00p',
                    befr: 'csb_s00n',
                    benl: 'csb_s00o',
                    br: 'csb_s01',
                    caen: 'csb_s00',
                    cafr: 'csb_s0',
                    chde: 'csb_s006',
                    chfr: 'csb_s007',
                    cl: 'csb_s011',
                    co: 'csb_s012',
                    cr: 'csb_s013',
                    cz: 'csb_s008',
                    de: 'csb_s002',
                    dk: 'csb_s009',
                    do: 'csb_s01b',
                    ec: 'csb_s014',
                    es: 'csb_s00-',
                    fl: 'csb_s00a',
                    fr: 'csb_s003',
                    gt: 'csb_s016',
                    hk: 'csb_s01d',
                    hn: 'csb_s017',
                    id: 'csb_s00w',
                    ie: 'csb_s00b',
                    il: 'csb_s00c',
                    in: 'csb_s00s',
                    it: 'csb_s00d',
                    jp: 'csb_s00r',
                    kr: 'csb_s00v',
                    mx: 'csb_s018',
                    my: 'csb_s00t',
                    ni: 'csb_s019',
                    nl: 'csb_s00e',
                    no: 'csb_s00f',
                    nz: 'csb_s00q',
                    pa: 'csb_s01-',
                    pe: 'csb_s01a',
                    ph: 'csb_s00x',
                    pl: 'csb_s00g',
                    pt: 'csb_s01c',
                    ru: 'csb_s00h',
                    sa: 'csb_s00i',
                    se: 'csb_s00j',
                    sg: 'csb_s00u',
                    sv: 'csb_s015',
                    th: 'csb_s00z',
                    tr: 'csb_s00k',
                    tw: 'csb_s00y',
                    ua: 'csb_s00l',
                    uk: 'csb_s001',
                    us: 'csb_s000',
                    vn: 'csb_s00_',
                    za: 'csb_s00m',
                  };
                  if (/be|ca|ch/i.test(Marketing.scDataObj.country))
                    Marketing.gEvent(
                      'DC-9632645/sales0/' +
                        idMap[
                          Marketing.scDataObj.country.toLowerCase() +
                            Marketing.scDataObj.language.toLowerCase()
                        ] +
                        '+transactions',
                      'purchase'
                    );
                  else
                    Marketing.gEvent(
                      'DC-9632645/sales0/' +
                        idMap[Marketing.scDataObj.country.toLowerCase()] +
                        '+transactions',
                      'purchase'
                    );
                }
                if (
                  /alienware/i.test(Marketing.scDataObj.categoryid) ||
                  /alienware/i.test(Marketing.scDataObj.page)
                ) {
                  if (Marketing.UDO.promoid === '9')
                    Marketing.gEvent('DC-9632645/baske0/alien0+standard', 'conversion');
                  if (Marketing.UDO.promoid === '3')
                    Marketing.gEvent('DC-9632645/categ0/alien0+standard', 'conversion');
                  if (/Configurator/i.test(Marketing.scDataObj.module))
                    Marketing.gEvent('DC-9632645/confi0/alien0+standard', 'conversion');
                  if (/alienware-deals/i.test(Marketing.UDO.category))
                    Marketing.gEvent('DC-9632645/deals0/alien0+standard', 'conversion');
                  if (
                    /dell.com\/..-..\/gaming\/alienware/i.test(
                      location.hostname + location.pathname
                    )
                  )
                    Marketing.gEvent('DC-9632645/homee0/alien0+standard', 'conversion');
                  if (/productdetail/i.test(Marketing.scDataObj.page))
                    Marketing.gEvent('DC-9632645/produ0/alien0+standard', 'conversion');
                }
                if (/alienwarearena/i.test(location.hostname))
                  Marketing.gEvent('DC-9632645/solut0/alien0+standard', 'conversion');
                if (/dhs/i.test(Marketing.scDataObj.segment)) {
                  if (Marketing.UDO.promoid === '9')
                    Marketing.gEvent('DC-9632645/baske0/consu0+standard', 'conversion');
                  if (Marketing.UDO.promoid === '3')
                    Marketing.gEvent('DC-9632645/categ0/consu0+standard', 'conversion');
                  if (/Configurator/i.test(Marketing.scDataObj.module))
                    Marketing.gEvent('DC-9632645/confi0/consu0+standard', 'conversion');
                  if (
                    /bf-edge/i.test(Marketing.scDataObj.cms) ||
                    /deals/i.test(dell_marketing_util.getscMap('pagename'))
                  )
                    Marketing.gEvent('DC-9632645/deals0/consu0+standard', 'conversion');
                  if (/franchise/i.test(Marketing.scDataObj.page) || Marketing.UDO.promoid === '5')
                    Marketing.gEvent('DC-9632645/famil0/consu0+standard', 'conversion');
                  if (/home/i.test(Marketing.scDataObj.page) || Marketing.UDO.promoid === '2')
                    Marketing.gEvent('DC-9632645/homee0/consu0+standard', 'conversion');
                  if (
                    /productdetail/i.test(Marketing.scDataObj.page) ||
                    Marketing.UDO.promoid === '7'
                  )
                    Marketing.gEvent('DC-9632645/produ0/consu0+standard', 'conversion');
                  if (
                    /(dell.com|dellemc.com|delltechnologies.com)/i.test(location.hostname) &&
                    /learnforwork/i.test(Marketing.scDataObj.page)
                  )
                    Marketing.gEvent('DC-9632645/solut0/consu0+standard', 'conversion');
                }
                if (Marketing.UDO.promoid === '9')
                  Marketing.gEvent('DC-9632645/baske0/gamin0+standard', 'conversion');
                if (Marketing.UDO.promoid === '3' && /gaming/i.test(location.pathname))
                  Marketing.gEvent('DC-9632645/categ0/gamin0+standard', 'conversion');
                if (
                  /Configurator/i.test(Marketing.scDataObj.module) &&
                  /gaming/i.test(location.pathname)
                )
                  Marketing.gEvent('DC-9632645/confi0/gamin0+standard', 'conversion');
                if (/bf-edge/i.test(Marketing.scDataObj.cms))
                  Marketing.gEvent('DC-9632645/deals0/gamin0+standard', 'conversion');
                if (
                  /dell.com\/..-..\/shop\/gaming-and-games\/cp\/game/i.test(
                    location.hostname + location.pathname
                  )
                )
                  Marketing.gEvent('DC-9632645/homee0/gamin0+standard', 'conversion');
                if (
                  /productdetail/i.test(Marketing.scDataObj.page) &&
                  /gaming/i.test(location.pathname)
                )
                  Marketing.gEvent('DC-9632645/produ0/gamin0+standard', 'conversion');
                if (
                  /eep/i.test(Marketing.scDataObj.segment) ||
                  /purchaseprogram/i.test(Marketing.scDataObj.page)
                ) {
                  if (Marketing.UDO.promoid === '9')
                    Marketing.gEvent('DC-9632645/baske0/mpp_b0+standard', 'conversion');
                  if (Marketing.UDO.promoid === '3')
                    Marketing.gEvent('DC-9632645/categ0/mpp_c0+standard', 'conversion');
                  if (/Configurator/i.test(Marketing.scDataObj.module))
                    Marketing.gEvent('DC-9632645/confi0/mpp_c0+standard', 'conversion');
                  if (
                    /bf-edge/i.test(Marketing.scDataObj.cms) ||
                    /deals/i.test(dell_marketing_util.getscMap('pagename'))
                  )
                    Marketing.gEvent('DC-9632645/deals0/mpp_d0+standard', 'conversion');
                  if (/franchise/i.test(Marketing.scDataObj.page))
                    Marketing.gEvent('DC-9632645/famil0/mpp_f0+standard', 'conversion');
                  if (
                    /home/i.test(Marketing.scDataObj.page) ||
                    /dell.com\/..-..\/shop\/purchaseprogram/i.test(
                      location.hostname + location.pathname
                    )
                  )
                    Marketing.gEvent('DC-9632645/homee0/mpp_h0+standard', 'conversion');
                  if (/productdetail/i.test(Marketing.scDataObj.page))
                    Marketing.gEvent('DC-9632645/produ0/mpp_p0+standard', 'conversion');
                  if (
                    /(dell.com|dellemc.com|delltechnologies.com)/i.test(location.hostname) &&
                    /learnforwork/i.test(Marketing.scDataObj.page)
                  )
                    Marketing.gEvent('DC-9632645/solut0/mpp_b0+standard', 'conversion');
                }
                if (/bsd/i.test(Marketing.scDataObj.segment)) {
                  if (Marketing.UDO.promoid === '9')
                    Marketing.gEvent('DC-9632645/baske0/small0+standard', 'conversion');
                  if (Marketing.UDO.promoid === '3')
                    Marketing.gEvent('DC-9632645/categ0/small0+standard', 'conversion');
                  if (/Configurator/i.test(Marketing.scDataObj.module))
                    Marketing.gEvent('DC-9632645/confi0/small0+standard', 'conversion');
                  if (
                    /bf-edge/i.test(Marketing.scDataObj.cms) ||
                    /deals/i.test(dell_marketing_util.getscMap('pagename'))
                  )
                    Marketing.gEvent('DC-9632645/deals0/small0+standard', 'conversion');
                  if (/franchise/i.test(Marketing.scDataObj.page) || Marketing.UDO.promoid === '5')
                    Marketing.gEvent('DC-9632645/famil0/small0+standard', 'conversion');
                  if (/home/i.test(Marketing.scDataObj.page) || Marketing.UDO.promoid === '2')
                    Marketing.gEvent('DC-9632645/homee0/small0+standard', 'conversion');
                  if (
                    /productdetail/i.test(Marketing.scDataObj.page) ||
                    Marketing.UDO.promoid === '7'
                  )
                    Marketing.gEvent('DC-9632645/produ0/small0+standard', 'conversion');
                  if (
                    /(dell.com|dellemc.com|delltechnologies.com)/i.test(location.hostname) &&
                    /learnforwork/i.test(Marketing.scDataObj.page)
                  )
                    Marketing.gEvent('DC-9632645/solut0/small0+standard', 'conversion');
                  Marketing.UDO.g_mpv('DC-9632645/hve4u0/csb_h000+standard', 'conversion');
                }
              }
            } catch (e) {
              dell_marketing_util.debug(e);
            }
          }.apply(this, arguments);
        } finally {
          if ($___old_bd82f1bbb7a4479f)
            ({}.constructor.defineProperty(
              Document.prototype,
              'cookie',
              $___old_bd82f1bbb7a4479f
            ));
        }
      },
      3254428,
      [3329163, 3253918],
      619255,
      [619404, 620818]
    );
    Marketing.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          if (Marketing.UDO.priorconsent)
            if (Marketing.UDO.promoid === '100' && Marketing.UDO.segment === 'bsd')
              Marketing.gEvent('DC-9632645/sales0/csb-s0+transactions', 'purchase');
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3300260,
      [3329163],
      640885,
      [619404]
    );
    Marketing.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          if (Marketing.UDO.priorconsent)
            if (
              Marketing.UDO.promoid === '100' &&
              (/eep/i.test(Marketing.scDataObj.segment) ||
                /purchaseprogram/i.test(Marketing.scDataObj.page))
            )
              Marketing.gEvent('DC-9632645/sales0/csb-m0+transactions', 'purchase');
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3300261,
      [3329163],
      650324,
      [619404]
    );
    Marketing.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Marketing'];
        var ensightenOptions = Marketing.ensightenOptions;
        try {
          if (Marketing.UDO.priorconsent)
            if (Marketing.UDO.promoid === '100' && Marketing.UDO.segment === 'dhs')
              Marketing.gEvent('DC-9632645/sales0/csb-c0+transactions', 'purchase');
        } catch (e) {
          dell_marketing_util.debug(e);
        }
      },
      3303400,
      [3329163],
      650325,
      [619404]
    );
  })();
}
