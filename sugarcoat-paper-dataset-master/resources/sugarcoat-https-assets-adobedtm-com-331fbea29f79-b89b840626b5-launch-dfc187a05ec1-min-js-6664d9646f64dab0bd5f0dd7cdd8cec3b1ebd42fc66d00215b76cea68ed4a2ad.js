var _satellite;
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
  const $___stub_12e4a56044062aff = {};
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
  })($___stub_12e4a56044062aff);
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-10-19T14:08:13Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          'user | isPasswordRecoveryConfirm': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isPasswordRecoveryConfirm',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | isUIDLookupCompleted': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isUIDLookupCompleted',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | isPasswordResetConfirm': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isPasswordResetConfirm',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | marketID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: { user: { item: 'first', action: 'pluck' } },
                  selectedField: { name: 'user[n].segment.marketID', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'page | language': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.pageInfo.language',
                    type: 'string',
                    description:
                      'Language of the page. Values should be in ISO Language Code, either English (en) or Spanish (es).',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'siteInfo | siteVersion': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'siteInfo.siteVersion', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'event | eventAction': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (e) {
                return adobe.consulting.util.getObjVal(e, 'detail.eventAction');
              },
            },
          },
          'page | primaryCategory': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.category.primaryCategory',
                    type: 'string',
                    examples: ['shop', 'help and support', 'my account', 'idm'],
                    description:
                      'This is used to track site section on every page. Every section should have an unique sitesection.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | uidCreationType': {
            defaultValue: '',
            forceLowerCase: !0,
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e;
                return (
                  adobe.consulting.util.getObjVal(
                    digitalData,
                    'user.0.profile.0.attributes.uidCreationType'
                  )
                    ? (e = adobe.consulting.util.getObjVal(
                        digitalData,
                        'user.0.profile.0.attributes.uidCreationType'
                      ))
                    : adobe.consulting.util.getObjVal(digitalData, 'page.pageInfo.referrerId') &&
                      (e = adobe.consulting.util.getObjVal(
                        digitalData,
                        'page.pageInfo.referrerId'
                      )),
                  e
                );
              },
            },
          },
          'user | authGUID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.authGUID',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | userNameType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.userNameType',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | customerType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.customerType',
                    type: 'string',
                    description:
                      'Captures the Customer Type (new/existing). This is exactly experience type.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'siteInfo | server': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'siteInfo.server',
                    type: 'string',
                    examples: ['PATAPLL-J72NXW1'],
                    description: 'The server where the page is hosted.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'siteInfo | visitorID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'siteInfo.visitorID',
                    type: 'string',
                    examples: ['1497c713-186f-4015-b7ce-5014f788d064'],
                    description: 'The visitor session ID of that session.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'transaction | buyflowStep': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'transaction.attributes.buyflowStep', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'code | siteVersion': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                if ('undefined' == typeof digitalData) return '';
                var e = adobe.consulting.util
                  .getObjVal(digitalData, 'siteInfo.siteVersion')
                  .toString();
                return (
                  _satellite.getVar('page | designType') &&
                    ((e = _satellite.getVar('page | designType')),
                    _satellite.getVar('page | codebaseName') &&
                      ((e = e + '|' + _satellite.getVar('page | codebaseName')),
                      _satellite.getVar('page | releaseVersion') &&
                        (e = e + '|' + _satellite.getVar('page | releaseVersion')))),
                  e
                );
              },
            },
          },
          'event | pageName': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (e) {
                return adobe.consulting.util.getObjVal(e, 'detail.eventPage');
              },
            },
          },
          'page | designType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.category.designType',
                    type: 'string',
                    examples: ['mobile', 'desktop', 'responsive'],
                    description: 'mobile vs. desktop/tablet vs. responsive design.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'transaction | billPayAmount': {
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'transaction.attributes.billPay.billPayAmount',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'product | offerSystem': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: { product: { item: 'last', action: 'pluck' } },
                  selectedField: { name: 'product[n].productInfo.system', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'page | codebaseName': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.codebase.name',
                    type: 'string',
                    examples: ['h&s resi', 'modesto', 'df learn', 'my account', 'local store'],
                    description: 'The name of the codebase.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | customerGUID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.userGUID',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'page | releaseVersion': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.codebase.releaseVersion',
                    type: 'string',
                    examples: ['11_02_16', 'sprint 702', '3.4.3'],
                    description: 'Release label for the version of the codebase.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | isPersonalEmailVerified': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isPersonalEmailVerify',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'code | impressionComponentArray': {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (e) {
                var t = '',
                  n = adobe.consulting.util.getObjVal(e, 'detail.component.0.componentInfo');
                return (
                  n &&
                    (t +=
                      '' == t
                        ? (digitalData.page.category.primaryCategory
                            ? digitalData.page.category.primaryCategory
                            : '') +
                          (digitalData.page.category.subCategory1
                            ? '|' + digitalData.page.category.subCategory1
                            : '') +
                          '>' +
                          (n.componentName ? n.componentName : '') +
                          (n.componentID ? '|' + n.componentID : '') +
                          (n.instanceID ? '|' + n.instanceID : '') +
                          (n.description ? '|' + n.description : '')
                        : ',' +
                          (digitalData.page.category.primaryCategory
                            ? digitalData.page.category.primaryCategory
                            : '') +
                          (digitalData.page.category.subCategory1
                            ? '|' + digitalData.page.category.subCategory1
                            : '') +
                          '>' +
                          (n.componentName ? n.componentName : '') +
                          (n.componentID ? '|' + n.componentID : '') +
                          '|' +
                          (n.instanceID ? '|' + n.instanceID : '') +
                          (n.description ? '|' + n.description : '')),
                  t
                );
              },
            },
          },
          'product | productIDbuyFlow': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = '';
                if (digitalData && digitalData.product)
                  for (i = 0; i < digitalData.product.length; i++) {
                    var t = digitalData.product[i].productInfo;
                    t &&
                      t.productID &&
                      (e +=
                        '' == e
                          ? ';' + t.productID + ';' + t.quantity + ';' + t.price
                          : ',;' + t.productID + ';' + t.quantity + ';' + t.price);
                  }
                return e;
              },
            },
          },
          'transaction | fulfillmentType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'transaction.attributes.fulfillmentType',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | accountNumberVerificationType': {
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.accountNumberVerificationType',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | authenticationStatus': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '|',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.authenticationType',
                    type: 'string',
                    description: 'Populate authentication type on every page of the website.',
                  },
                  selectedSchema: 'Core',
                },
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.recognizationType',
                    type: 'string',
                    description: 'Populate recognization type on every page of the website.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'transaction | isUIDStart': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'transaction.attributes.flowStage',
                    type: 'string',
                    description: 'The current stage of the flow.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'page | businessSiteType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '|',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.category.businessType',
                    type: 'string',
                    examples: ['resi', 'busn_ent', 'busn_smb', 'mobile'],
                    description: 'Comcast top level business.',
                  },
                  selectedSchema: 'Core',
                },
                {
                  options: {},
                  selectedField: {
                    name: 'page.category.siteType',
                    type: 'string',
                    examples: ['sales', 'selfservice'],
                    description:
                      'On load of every page populate site prefix - top level section name, business unit.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | isUsernameCreated': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isUsernameCreated',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'event | containerList': {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (e) {
                var t = adobe.consulting.util.getObjVal(e, 'detail.container'),
                  n = '';
                for (i = t.length - 1; 0 <= i; i--) n += '' == n ? t[i] : '|' + t[i];
                return n;
              },
            },
          },
          'page | affiliateChannelName': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '|',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.affiliate.name',
                    type: 'string',
                    examples: ['comcast', 'best buy', 'verizon wireless'],
                    description: 'Affiliate name data for omni-channel',
                  },
                  selectedSchema: 'Core',
                },
                {
                  options: {},
                  selectedField: {
                    name: 'page.affiliate.channel',
                    type: 'string',
                    examples: ['web', 'x1', 'direct'],
                    description: 'Affiliate channel data for omni-channel.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'page | pageName': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.pageInfo.pageName',
                    type: 'string',
                    description:
                      'Combined by the implementation from the following properties and pipe delimited [page.category.businessType, page.category.siteType, page.category.primaryCategory, page.category.subCategory1, page.pageInfo.screenName]. Do NOT set this.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | isRebindConfirm': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isRebindConfirm',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'siteInfo | sessionID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'siteInfo.sessionID',
                    type: 'string',
                    examples: ['1497c713-186f-4015-b7ce-5014f788d064'],
                    description: 'The session ID of that session.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
          'user | type': {
            defaultValue: '',
            forceLowerCase: !0,
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: { name: 'user[n].profile[n].profileInfo.type', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | isVerifyMethod': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.isVerifyMethod',
                    type: 'boolean',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'event | onsiteSearchTerm': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function (e) {
                return adobe.consulting.util.getObjVal(e, 'detail.page.pageInfo.onsiteSearchTerm');
              },
            },
          },
          'user | preActivationState': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].profileInfo.preActivationState',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | recoveryOptions': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.recoveryOptions',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'transaction | buyflowType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'transaction.attributes.buyflowType', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'transaction | transactionID': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'transaction.transactionID', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'utility | isPrivacyPage': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return -1 < location.href.indexOf('/privacy/');
              },
            },
          },
          'transaction | funnelType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: { name: 'transaction.attributes.funnelType', type: 'string' },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | UIDVerificationMethod': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.UIDVerificationMethod',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'user | isReferAFriend': {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e;
                return (
                  digitalData.users &&
                  digitalData.users[0].attributes &&
                  digitalData.users[0].attributes.isRaf
                    ? (e = digitalData.users[0].attributes.isRaf)
                    : digitalData.user &&
                      digitalData.user[0].attributes &&
                      digitalData.user[0].attributes.isRaf &&
                      (e = digitalData.user[0].attributes.isRaf),
                  digitalData.users &&
                  digitalData.users[0].attributes &&
                  digitalData.users[0].attributes.israf
                    ? (e = digitalData.users[0].attributes.israf)
                    : digitalData.user &&
                      digitalData.user[0].attributes &&
                      digitalData.user[0].attributes.israf &&
                      (e = digitalData.user[0].attributes.israf),
                  digitalData.users &&
                  digitalData.users[0].attributes &&
                  digitalData.user[0].attributes.isRAF
                    ? (e = digitalData.users[0].attributes.isRAF)
                    : digitalData.user &&
                      digitalData.user[0].attributes &&
                      digitalData.user[0].attributes.isRAF &&
                      (e = digitalData.user[0].attributes.isRAF),
                  e
                );
              },
            },
          },
          'user | imageVerificationAttempts': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {
                    user: { item: 'first', action: 'pluck' },
                    profile: { item: 'first', action: 'pluck' },
                  },
                  selectedField: {
                    name: 'user[n].profile[n].attributes.imageVerificationAttempts',
                    type: 'integer',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'transaction | paymentType': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'transaction.attributes.billPay.paymentType',
                    type: 'string',
                  },
                  selectedSchema: 'Transitional',
                },
              ],
            },
          },
          'page | subCategory1': {
            defaultValue: '',
            modulePath: 'data-layer-test/src/lib/dataElements/dataTestWconfig.js',
            settings: {
              fieldSeparator: '',
              selectedFields: [
                {
                  options: {},
                  selectedField: {
                    name: 'page.category.subCategory1',
                    type: 'string',
                    examples: ['buyflow', 'learn', 'billing', 'my plan'],
                    description: 'This is used to track sub section on every page.',
                  },
                  selectedSchema: 'Core',
                },
              ],
            },
          },
        },
        extensions: {
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/dataElements/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    return e.source(t);
                  };
                },
              },
              'core/src/lib/conditions/valueComparison.js': {
                name: 'value-comparison',
                displayName: 'Value Comparison',
                script: function (e) {
                  'use strict';
                  var r = function (e) {
                      return 'number' == typeof e && isFinite(e);
                    },
                    a = function (e) {
                      return 'string' == typeof e || e instanceof String;
                    },
                    i = function (e, t) {
                      return t && a(e) ? e.toLowerCase() : e;
                    },
                    o = function (e) {
                      return r(e) ? String(e) : e;
                    },
                    s = function (e) {
                      return a(e) ? Number(e) : e;
                    },
                    t = function (r) {
                      return function (e, t, n) {
                        return (e = o(e)), (t = o(t)), a(e) && a(t) && r(e, t, n);
                      };
                    },
                    n = function (n) {
                      return function (e, t) {
                        return (e = s(e)), (t = s(t)), r(e) && r(t) && n(e, t);
                      };
                    },
                    l = function (r) {
                      return function (e, t, n) {
                        return r(i(e, n), i(t, n));
                      };
                    },
                    c = {
                      equals: l(function (e, t) {
                        return e == t;
                      }),
                      doesNotEqual: function () {
                        return !c.equals.apply(null, arguments);
                      },
                      contains: t(
                        l(function (e, t) {
                          return -1 !== e.indexOf(t);
                        })
                      ),
                      doesNotContain: function () {
                        return !c.contains.apply(null, arguments);
                      },
                      startsWith: t(
                        l(function (e, t) {
                          return 0 === e.indexOf(t);
                        })
                      ),
                      doesNotStartWith: function () {
                        return !c.startsWith.apply(null, arguments);
                      },
                      endsWith: t(
                        l(function (e, t) {
                          return e.substring(e.length - t.length, e.length) === t;
                        })
                      ),
                      doesNotEndWith: function () {
                        return !c.endsWith.apply(null, arguments);
                      },
                      matchesRegex: t(function (e, t, n) {
                        return new RegExp(t, n ? 'i' : '').test(e);
                      }),
                      doesNotMatchRegex: function () {
                        return !c.matchesRegex.apply(null, arguments);
                      },
                      lessThan: n(function (e, t) {
                        return e < t;
                      }),
                      lessThanOrEqual: n(function (e, t) {
                        return e <= t;
                      }),
                      greaterThan: n(function (e, t) {
                        return t < e;
                      }),
                      greaterThanOrEqual: n(function (e, t) {
                        return t <= e;
                      }),
                      isTrue: function (e) {
                        return !0 === e;
                      },
                      isTruthy: function (e) {
                        return Boolean(e);
                      },
                      isFalse: function (e) {
                        return !1 === e;
                      },
                      isFalsy: function (e) {
                        return !e;
                      },
                    };
                  e.exports = function (e) {
                    return c[e.comparison.operator](
                      e.leftOperand,
                      e.rightOperand,
                      Boolean(e.comparison.caseInsensitive)
                    );
                  };
                },
              },
              'core/src/lib/events/directCall.js': {
                name: 'direct-call',
                displayName: 'Direct Call',
                script: function (e, t, n, i) {
                  'use strict';
                  var o = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite.track = function (e, t) {
                      e = e.trim();
                      var n = o[e];
                      if (n) {
                        var r = { identifier: e, detail: t };
                        n.forEach(function (e) {
                          e(r);
                        });
                        var a = [
                          'Rules using the direct call event type with identifier "' +
                            e +
                            '" have been triggered' +
                            (t ? ' with additional detail:' : '.'),
                        ];
                        t && a.push(t), i.logger.log.apply(i.logger, a);
                      } else
                        i.logger.log('"' + e + '" does not match any direct call identifiers.');
                    }),
                    (e.exports = function (e, t) {
                      var n = o[e.identifier];
                      n || (n = o[e.identifier] = []), n.push(t);
                    });
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, n, i) {
                  'use strict';
                  var o,
                    r,
                    a,
                    s,
                    l = n('@adobe/reactor-document'),
                    c = n('@adobe/reactor-promise'),
                    u = n('./helpers/decorateCode'),
                    d = n('./helpers/loadCodeSequentially'),
                    f = n('../../../node_modules/postscribe/dist/postscribe'),
                    p = n('./helpers/unescapeHtmlCode'),
                    m =
                      ((r = function (e) {
                        f(l.body, e, {
                          beforeWriteToken: function (t) {
                            var e = t.tagName && t.tagName.toLowerCase();
                            return (
                              o && 'script' === e && (t.attrs.nonce = o),
                              ('script' !== e && 'style' !== e) ||
                                (Object.keys(t.attrs || {}).forEach(function (e) {
                                  t.attrs[e] = p(t.attrs[e]);
                                }),
                                t.src && (t.src = p(t.src))),
                              t
                            );
                          },
                          error: function (e) {
                            i.logger.error(e.msg);
                          },
                        });
                      }),
                      (a = []),
                      (s = function () {
                        if (l.body) for (; a.length; ) r(a.shift());
                        else setTimeout(s, 20);
                      }),
                      function (e) {
                        a.push(e), s();
                      }),
                    g = (function () {
                      if (l.currentScript) return l.currentScript.async;
                      for (var e = l.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(n.src)) return n.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    var n;
                    o = i.getExtensionSettings().cspNonce;
                    var r = { settings: e, event: t },
                      a = r.settings.source;
                    if (a)
                      return r.settings.isExternal
                        ? d(a).then(function (e) {
                            return e ? ((n = u(r, e)), m(n.code), n.promise) : c.resolve();
                          })
                        : ((n = u(r, a)),
                          g || 'loading' !== l.readyState
                            ? m(n.code)
                            : l.write && !1 === i.propertySettings.ruleComponentSequencingEnabled
                            ? l.write(n.code)
                            : m(n.code),
                          n.promise);
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    r.registerLibraryLoadedTrigger(t);
                  };
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./decorators/decorateGlobalJavaScriptCode'),
                    a = n('./decorators/decorateNonGlobalJavaScriptCode'),
                    i = {
                      javascript: function (e, t) {
                        return e.settings.global ? r(e, t) : a(e, t);
                      },
                      html: n('./decorators/decorateHtmlCode'),
                    };
                  e.exports = function (e, t) {
                    return i[e.settings.language](e, t);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-promise'),
                    a = n('./getSourceByUrl'),
                    i = r.resolve();
                  e.exports = function (t) {
                    var e = new r(function (n) {
                      var e = a(t);
                      r.all([e, i]).then(function (e) {
                        var t = e[0];
                        n(t);
                      });
                    });
                    return (i = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (n, r) {
                  !(function a (e, t) {
                    'object' == typeof r && 'object' == typeof n
                      ? (n.exports = t())
                      : 'function' == typeof define && define.amd
                      ? define([], t)
                      : 'object' == typeof r
                      ? (r.postscribe = t())
                      : (e.postscribe = t());
                  })(this, function () {
                    return (function (n) {
                      function r (e) {
                        if (a[e]) return a[e].exports;
                        var t = (a[e] = { exports: {}, id: e, loaded: !1 });
                        return n[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports;
                      }
                      var a = {};
                      return (r.m = n), (r.c = a), (r.p = ''), r(0);
                    })([
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var a = r(n(1));
                        e.exports = a['default'];
                      },
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function a (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function c () {}
                        function u () {
                          var e = l.shift();
                          if (e) {
                            var t = o.last(e);
                            t.afterDequeue(),
                              (e.stream = i.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function i (e, t, r) {
                          function a (e) {
                            (e = r.beforeWrite(e)), g.write(e), r.afterWrite(e);
                          }
                          ((g = new p['default'](e, r)).id = m++),
                            (g.name = r.name || g.id),
                            (d.streams[g.name] = g);
                          var n = e.ownerDocument,
                            i = {
                              close: n.close,
                              open: n.open,
                              write: n.write,
                              writeln: n.writeln,
                            };
                          f(n, {
                            close: c,
                            open: c,
                            write: function s () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return a(t.join(''));
                            },
                            writeln: function l () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return a(t.join('') + '\n');
                            },
                          });
                          var o = g.win.onerror || c;
                          return (
                            (g.win.onerror = function (e, t, n) {
                              r.error({ msg: e + ' - ' + t + ': ' + n }),
                                o.apply(g.win, [e, t, n]);
                            }),
                            g.write(t, function () {
                              f(n, i), (g.win.onerror = o), r.done(), (g = null), u();
                            }),
                            g
                          );
                        }
                        function d (e, t, n) {
                          if (o.isFunction(n)) n = { done: n };
                          else if ('clear' === n) return (l = []), (g = null), void (m = 0);
                          n = o.defaults(n, s);
                          var r = [
                            (e = /^#/.test(e)
                              ? window.document.getElementById(e.substr(1))
                              : e.jquery
                              ? e[0]
                              : e),
                            t,
                            n,
                          ];
                          return (
                            (e.postscribe = {
                              cancel: function a () {
                                r.stream ? r.stream.abort() : (r[1] = c);
                              },
                            }),
                            n.beforeEnqueue(r),
                            l.push(r),
                            g || u(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var f =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                          };
                        t['default'] = d;
                        var p = a(n(2)),
                          o = r(n(4)),
                          s = {
                            afterAsync: c,
                            afterDequeue: c,
                            afterStreamStart: c,
                            afterWrite: c,
                            autoFix: !0,
                            beforeEnqueue: c,
                            beforeWriteToken: function h (e) {
                              return e;
                            },
                            beforeWrite: function y (e) {
                              return e;
                            },
                            done: c,
                            error: function v (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          m = 0,
                          l = [],
                          g = null;
                        f(d, { streams: {}, queue: l, WriteStream: p['default'] });
                      },
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function a (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function b (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function T (e, t) {
                          var n = C + t,
                            r = e.getAttribute(n);
                          return k.existy(r) ? String(r) : r;
                        }
                        function w (e, t, n) {
                          var r = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                            a = C + t;
                          k.existy(r) && '' !== r ? e.setAttribute(a, r) : e.removeAttribute(a);
                        }
                        t.__esModule = !0;
                        var S =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                            },
                          E = a(n(3)),
                          k = r(n(4)),
                          x = !1,
                          C = 'data-ps-',
                          _ = 'ps-style',
                          j = 'ps-script',
                          i = (function () {
                            function r (e, t) {
                              var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              b(this, r),
                                (this.root = e),
                                (this.options = n),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new E['default']('', { autoFix: n.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                w(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (r.prototype.write = function n () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var t = this.writeQueue.shift();
                                  k.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (r.prototype._callFunction = function a (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (r.prototype._writeImpl = function i (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, n = void 0, r = void 0, a = [];
                                  (t = this.parser.readToken()) &&
                                  !(n = k.isScript(t)) &&
                                  !(r = k.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && a.push(t);
                                0 < a.length && this._writeStaticTokens(a),
                                  n && this._handleScriptToken(t),
                                  r && this._handleStyleToken(t);
                              }),
                              (r.prototype._writeStaticTokens = function o (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    x && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    x && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (r.prototype._buildChunk = function u (e) {
                                for (
                                  var t = this.actuals.length,
                                    n = [],
                                    r = [],
                                    a = [],
                                    i = e.length,
                                    o = 0;
                                  o < i;
                                  o++
                                ) {
                                  var s = e[o],
                                    l = s.toString();
                                  if ((n.push(l), s.attrs)) {
                                    if (!/^noscript$/i.test(s.tagName)) {
                                      var c = t++;
                                      r.push(l.replace(/(\/?>)/, ' ' + C + 'id=' + c + ' $1')),
                                        s.attrs.id !== j &&
                                          s.attrs.id !== _ &&
                                          a.push(
                                            'atomicTag' === s.type
                                              ? ''
                                              : '<' +
                                                  s.tagName +
                                                  ' ' +
                                                  C +
                                                  'proxyof=' +
                                                  c +
                                                  (s.unary ? ' />' : '>')
                                          );
                                    }
                                  } else r.push(l), a.push('endTag' === s.type ? l : '');
                                }
                                return {
                                  tokens: e,
                                  raw: n.join(''),
                                  actual: r.join(''),
                                  proxy: a.join(''),
                                };
                              }),
                              (r.prototype._walkChunk = function s () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  k.existy((e = t.shift()));

                                ) {
                                  var n = 1 === e.nodeType;
                                  if (!n || !T(e, 'proxyof')) {
                                    n && w((this.actuals[T(e, 'id')] = e), 'id');
                                    var r = e.parentNode && T(e.parentNode, 'proxyof');
                                    r && this.actuals[r].appendChild(e);
                                  }
                                  t.unshift.apply(t, k.toArray(e.childNodes));
                                }
                              }),
                              (r.prototype._handleScriptToken = function l (e) {
                                var t = this,
                                  n = this.parser.clear();
                                n && this.writeQueue.unshift(n),
                                  (e.src = e.attrs.src || e.attrs.SRC),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    (e.src && this.scriptStack.length
                                      ? (this.deferredRemote = e)
                                      : this._onScriptStart(e),
                                    this._writeScriptToken(e, function () {
                                      t._onScriptDone(e);
                                    }));
                              }),
                              (r.prototype._handleStyleToken = function c (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (r.prototype._writeStyleToken = function d (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, _),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (r.prototype._buildStyle = function t (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  n.setAttribute('type', e.type),
                                  k.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  n
                                );
                              }),
                              (r.prototype._insertCursor = function f (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var n = this.doc.getElementById(t);
                                n && n.parentNode.replaceChild(e, n);
                              }),
                              (r.prototype._onScriptStart = function p (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (r.prototype._onScriptDone = function m (e) {
                                e === this.scriptStack[0]
                                  ? (this.scriptStack.shift(),
                                    this.write.apply(this, e.outerWrites),
                                    !this.scriptStack.length &&
                                      this.deferredRemote &&
                                      (this._onScriptStart(this.deferredRemote),
                                      (this.deferredRemote = null)))
                                  : this.options.error({
                                      msg: 'Bad script nesting or script finished twice',
                                    });
                              }),
                              (r.prototype._writeScriptToken = function g (e, t) {
                                var n = this._buildScript(e),
                                  r = this._shouldRelease(n),
                                  a = this.options.afterAsync;
                                e.src &&
                                  ((n.src = e.src),
                                  this._scriptLoadHandler(
                                    n,
                                    r
                                      ? a
                                      : function () {
                                          t(), a();
                                        }
                                  ));
                                try {
                                  this._insertCursor(n, j), (n.src && !r) || t();
                                } catch (i) {
                                  this.options.error(i), t();
                                }
                              }),
                              (r.prototype._buildScript = function h (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  k.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  e.content && (n.text = e.content),
                                  n
                                );
                              }),
                              (r.prototype._scriptLoadHandler = function y (t, n) {
                                function r () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function a () {
                                  r(), null != n && n(), (n = null);
                                }
                                function i (e) {
                                  r(), o(e), null != n && n(), (n = null);
                                }
                                function e (e, t) {
                                  var n = e['on' + t];
                                  null != n && (e['_on' + t] = n);
                                }
                                var o = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  S(t, {
                                    onload: function s () {
                                      if (t._onload)
                                        try {
                                          t._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          i({ msg: 'onload handler failed ' + e + ' @ ' + t.src });
                                        }
                                      a();
                                    },
                                    onerror: function l () {
                                      if (t._onerror)
                                        try {
                                          t._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          return void i({
                                            msg: 'onerror handler failed ' + e + ' @ ' + t.src,
                                          });
                                        }
                                      i({ msg: 'remote script failed ' + t.src });
                                    },
                                    onreadystatechange: function c () {
                                      /^(loaded|complete)$/.test(t.readyState) && a();
                                    },
                                  });
                              }),
                              (r.prototype._shouldRelease = function v (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              r
                            );
                          })();
                        t['default'] = i;
                      },
                      function (n) {
                        !(function r (e, t) {
                          n.exports = t();
                        })(0, function () {
                          return (function (n) {
                            function r (e) {
                              if (a[e]) return a[e].exports;
                              var t = (a[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                n[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports
                              );
                            }
                            var a = {};
                            return (r.m = n), (r.c = a), (r.p = ''), r(0);
                          })([
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var a = r(n(1));
                              e.exports = a['default'];
                            },
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function a (e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                  for (var n in e)
                                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return (t['default'] = e), t;
                              }
                              function u (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              t.__esModule = !0;
                              var d = a(n(2)),
                                f = a(n(3)),
                                p = r(n(6)),
                                i = n(5),
                                m = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                o = (function () {
                                  function l (e, t) {
                                    var n = this,
                                      r =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      a =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    u(this, l), (this.stream = r);
                                    var i = !1,
                                      o = {};
                                    for (var s in d)
                                      d.hasOwnProperty(s) &&
                                        (a.autoFix && (o[s + 'Fix'] = !0),
                                        (i = i || o[s + 'Fix']));
                                    i
                                      ? ((this._readToken = (0, p['default'])(
                                          this,
                                          o,
                                          function () {
                                            return n._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, p['default'])(this, o, function () {
                                          return n._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (l.prototype.append = function t (e) {
                                      this.stream += e;
                                    }),
                                    (l.prototype.prepend = function n (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (l.prototype._readTokenImpl = function r () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (l.prototype._peekTokenImpl = function a () {
                                      for (var e in m)
                                        if (m.hasOwnProperty(e) && m[e].test(this.stream)) {
                                          var t = f[e](this.stream);
                                          if (t)
                                            return 'startTag' === t.type &&
                                              /script|style/i.test(t.tagName)
                                              ? null
                                              : ((t.text = this.stream.substr(0, t.length)), t);
                                        }
                                    }),
                                    (l.prototype.peekToken = function e () {
                                      return this._peekToken();
                                    }),
                                    (l.prototype.readToken = function i () {
                                      return this._readToken();
                                    }),
                                    (l.prototype.readTokens = function o (e) {
                                      for (var t = void 0; (t = this.readToken()); )
                                        if (e[t.type] && !1 === e[t.type](t)) return;
                                    }),
                                    (l.prototype.clear = function s () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (l.prototype.rest = function c () {
                                      return this.stream;
                                    }),
                                    l
                                  );
                                })();
                              for (var s in (((t['default'] = o).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (o.escapeAttributes = function (e) {
                                var t = {};
                                for (var n in e)
                                  e.hasOwnProperty(n) && (t[n] = (0, i.escapeQuotes)(e[n], null));
                                return t;
                              }),
                              (o.supports = d)))
                                d.hasOwnProperty(s) &&
                                  (o.browserHasFlaw = o.browserHasFlaw || (!d[s] && s));
                            },
                            function (e, t) {
                              'use strict';
                              var n = !(t.__esModule = !0),
                                r = !1,
                                a = window.document.createElement('div');
                              try {
                                var i = '<P><I></P></I>';
                                (a.innerHTML = i), (t.tagSoup = n = a.innerHTML !== i);
                              } catch (o) {
                                t.tagSoup = n = !1;
                              }
                              try {
                                (a.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = r = 2 === a.childNodes.length);
                              } catch (o) {
                                t.selfClose = r = !1;
                              }
                              (a = null), (t.tagSoup = n), (t.selfClose = r);
                            },
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new u.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function a (e) {
                                var t = e.indexOf('<');
                                return new u.CharsToken(0 <= t ? t : e.length);
                              }
                              function i (e) {
                                var o, s, l;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(d.startTag);
                                  if (t) {
                                    var n =
                                      ((o = {}),
                                      (s = {}),
                                      (l = t[2]),
                                      t[2].replace(d.attr, function (e, t, n, r, a, i) {
                                        n || r || a || i
                                          ? arguments[5]
                                            ? ((o[arguments[5]] = ''), (s[arguments[5]] = !0))
                                            : (o[t] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (d.fillAttr.test(t) && t) ||
                                                '')
                                          : (o[t] = ''),
                                          (l = l.replace(e, ''));
                                      }),
                                      {
                                        v: new u.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          o,
                                          s,
                                          !!t[3],
                                          l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === n ? 'undefined' : c(n)))
                                      return n.v;
                                  }
                                }
                              }
                              function o (e) {
                                var t = i(e);
                                if (t) {
                                  var n = e.slice(t.length);
                                  if (n.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                    var r = n.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                    );
                                    if (r)
                                      return new u.AtomicTagToken(
                                        t.tagName,
                                        r[0].length + t.length,
                                        t.attrs,
                                        t.booleanAttrs,
                                        r[1]
                                      );
                                  }
                                }
                              }
                              function s (e) {
                                var t = e.match(d.endTag);
                                if (t) return new u.EndTagToken(t[1], t[0].length);
                              }
                              t.__esModule = !0;
                              var c =
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
                              (t.comment = r),
                                (t.chars = a),
                                (t.startTag = i),
                                (t.atomicTag = o),
                                (t.endTag = s);
                              var u = n(4),
                                d = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, t, n) {
                              'use strict';
                              function s (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (t.__esModule = !0),
                                (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                              var l = n(5),
                                r = (t.Token = function r (e, t) {
                                  s(this, r), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                a =
                                  ((t.CommentToken = (function () {
                                    function n (e, t) {
                                      s(this, n),
                                        (this.type = 'comment'),
                                        (this.length = t || (e ? e.length : 0)),
                                        (this.text = ''),
                                        (this.content = e);
                                    }
                                    return (
                                      (n.prototype.toString = function e () {
                                        return '<!--' + this.content;
                                      }),
                                      n
                                    );
                                  })()),
                                  (t.CharsToken = (function () {
                                    function t (e) {
                                      s(this, t),
                                        (this.type = 'chars'),
                                        (this.length = e),
                                        (this.text = '');
                                    }
                                    return (
                                      (t.prototype.toString = function e () {
                                        return this.text;
                                      }),
                                      t
                                    );
                                  })()),
                                  (t.TagToken = (function () {
                                    function i (e, t, n, r, a) {
                                      s(this, i),
                                        (this.type = e),
                                        (this.length = n),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = r),
                                        (this.booleanAttrs = a),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (i.formatTag = function o (e, t) {
                                        var n =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          r = '<' + e.tagName;
                                        for (var a in e.attrs)
                                          if (e.attrs.hasOwnProperty(a)) {
                                            r += ' ' + a;
                                            var i = e.attrs[a];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[a]) ||
                                              (r += '="' + (0, l.escapeQuotes)(i) + '"');
                                          }
                                        return (
                                          e.rest && (r += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (r += '/>') : (r += '>'),
                                          n !== undefined &&
                                            null !== n &&
                                            (r += n + '</' + e.tagName + '>'),
                                          r
                                        );
                                      }),
                                      i
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function o (e, t, n, r, a, i) {
                                  s(this, o),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = n),
                                    (this.booleanAttrs = r),
                                    (this.html5Unary = !1),
                                    (this.unary = a),
                                    (this.rest = i);
                                }
                                return (
                                  (o.prototype.toString = function e () {
                                    return a.formatTag(this);
                                  }),
                                  o
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function i (e, t, n, r, a) {
                                    s(this, i),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = n),
                                      (this.booleanAttrs = r),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = a);
                                  }
                                  return (
                                    (i.prototype.toString = function e () {
                                      return a.formatTag(this, this.content);
                                    }),
                                    i
                                  );
                                })()),
                                (t.EndTagToken = (function () {
                                  function n (e, t) {
                                    s(this, n),
                                      (this.type = 'endTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e);
                                  }
                                  return (
                                    (n.prototype.toString = function e () {
                                      return '</' + this.tagName + '>';
                                    }),
                                    n
                                  );
                                })());
                            },
                            function (e, t) {
                              'use strict';
                              function n (e, t) {
                                var n =
                                  1 < arguments.length && t !== undefined ? arguments[1] : '';
                                return e
                                  ? e.replace(/([^"]*)"/g, function (e, t) {
                                      return /\\/.test(t) ? t + '"' : t + '\\"';
                                    })
                                  : n;
                              }
                              (t.__esModule = !0), (t.escapeQuotes = n);
                            },
                            function (e, t) {
                              'use strict';
                              function c (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = r.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function u (e, t) {
                                var n = e.stream,
                                  r = c(t());
                                return (e.stream = n), r;
                              }
                              function d (e, t) {
                                var n = t.pop();
                                e.prepend('</' + n.tagName + '>');
                              }
                              function f () {
                                var e = [];
                                return (
                                  (e.last = function () {
                                    return this[this.length - 1];
                                  }),
                                  (e.lastTagNameEq = function (e) {
                                    var t = this.last();
                                    return (
                                      t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase()
                                    );
                                  }),
                                  (e.containsTagName = function (e) {
                                    for (var t, n = 0; (t = this[n]); n++)
                                      if (t.tagName === e) return !0;
                                    return !1;
                                  }),
                                  e
                                );
                              }
                              function n (n, r, t) {
                                function a () {
                                  var e = u(n, t);
                                  e && o[e.type] && o[e.type](e);
                                }
                                var i = f(),
                                  o = {
                                    startTag: function s (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && i.lastTagNameEq('TABLE')
                                        ? (n.prepend('<TBODY>'), a())
                                        : r.selfCloseFix && p.test(t) && i.containsTagName(t)
                                        ? i.lastTagNameEq(t)
                                          ? d(n, i)
                                          : (n.prepend('</' + e.tagName + '>'), a())
                                        : e.unary || i.push(e);
                                    },
                                    endTag: function l (e) {
                                      i.last()
                                        ? r.tagSoupFix && !i.lastTagNameEq(e.tagName)
                                          ? d(n, i)
                                          : i.pop()
                                        : r.tagSoupFix && (t(), a());
                                    },
                                  };
                                return function e () {
                                  return a(), c(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = n);
                              var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                p = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, t) {
                        'use strict';
                        function r (e) {
                          return null != e;
                        }
                        function n (e) {
                          return 'function' == typeof e;
                        }
                        function a (e, t, n) {
                          var r = void 0,
                            a = (e && e.length) || 0;
                          for (r = 0; r < a; r++) t.call(n, e[r], r);
                        }
                        function i (e, t, n) {
                          for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r]);
                        }
                        function o (n, e) {
                          return (
                            (n = n || {}),
                            i(e, function (e, t) {
                              r(n[e]) || (n[e] = t);
                            }),
                            n
                          );
                        }
                        function s (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (r) {
                            var t =
                              ((n = []),
                              a(e, function (e) {
                                n.push(e);
                              }),
                              { v: n });
                            if ('object' === (void 0 === t ? 'undefined' : f(t))) return t.v;
                          }
                          var n;
                        }
                        function l (e) {
                          return e[e.length - 1];
                        }
                        function c (e, t) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(t)
                          );
                        }
                        function u (e) {
                          return c(e, 'script');
                        }
                        function d (e) {
                          return c(e, 'style');
                        }
                        t.__esModule = !0;
                        var f =
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
                        (t.existy = r),
                          (t.isFunction = n),
                          (t.each = a),
                          (t.eachKey = i),
                          (t.defaults = o),
                          (t.toArray = s),
                          (t.last = l),
                          (t.isTag = c),
                          (t.isScript = u),
                          (t.isStyle = d);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/unescapeHtmlCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-document').createElement('div');
                  e.exports = function (e) {
                    return (r.innerHTML = e), r.textContent || r.innerText || e;
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-promise');
                  e.exports = function (e, t) {
                    return { code: '<script>\n' + t + '\n</script>', promise: r.resolve() };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js': {
                script: function (e, t, n) {
                  'use strict';
                  var i = n('@adobe/reactor-promise'),
                    o = 0;
                  e.exports = function (r, e) {
                    var a = '_runScript' + ++o,
                      t = new i(function (e, n) {
                        _satellite[a] = function (t) {
                          delete _satellite[a],
                            new i(function (e) {
                              e(t.call(r.event.element, r.event, r.event.target, i));
                            }).then(e, n);
                        };
                      });
                    return {
                      code:
                        '<script>_satellite["' +
                        a +
                        '"](function(event, target, Promise) {\n' +
                        e +
                        '\n});</script>',
                      promise: t,
                    };
                  };
                },
              },
              'core/src/lib/actions/helpers/decorators/decorateHtmlCode.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('@adobe/reactor-promise'),
                    i = 0,
                    o = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite._onCustomCodeSuccess = function (e) {
                      var t = o[e];
                      t && (delete o[e], t.resolve());
                    }),
                    (window._satellite._onCustomCodeFailure = function (e) {
                      var t = o[e];
                      t && (delete o[e], t.reject());
                    });
                  var s = function (e) {
                      return -1 !== e.indexOf('${reactorCallbackId}');
                    },
                    l = function (e, t) {
                      return e.replace(/\${reactorCallbackId}/g, t);
                    },
                    c = function (e) {
                      return e.settings.isExternal;
                    };
                  e.exports = function (e, t) {
                    var n;
                    return (
                      c(e) && (t = r.replaceTokens(t, e.event)),
                      s(t)
                        ? ((n = new a(function (e, t) {
                            o[String(i)] = { resolve: e, reject: t };
                          })),
                          (t = l(t, i)),
                          (i += 1))
                        : (n = a.resolve()),
                      { code: t, promise: n }
                    );
                  };
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-load-script'),
                    a = n('@adobe/reactor-promise'),
                    i = {},
                    o = {},
                    s = function (e) {
                      return o[e] || (o[e] = r(e)), o[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    i[e] = t;
                  }),
                    (e.exports = function (t) {
                      return i[t]
                        ? a.resolve(i[t])
                        : new a(function (e) {
                            s(t).then(
                              function () {
                                e(i[t]);
                              },
                              function () {
                                e();
                              }
                            );
                          });
                    });
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, n) {
                  const $___old_d638891dbf7d1b50 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_d638891dbf7d1b50)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_7b3e42788f2718a1.appVersion
                      ));
                    return function () {
                      'use strict';
                      var r = n('@adobe/reactor-window'),
                        a = n('@adobe/reactor-document'),
                        i = -1 !== r.navigator.appVersion.indexOf('MSIE 10'),
                        o = 'WINDOW_LOADED',
                        s = 'DOM_READY',
                        l = 'PAGE_BOTTOM',
                        c = [l, s, o],
                        u = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        d = {};
                      c.forEach(function (e) {
                        d[e] = [];
                      });
                      var f = function (e, t) {
                          c.slice(0, m(e) + 1).forEach(function (e) {
                            g(t, e);
                          });
                        },
                        p = function () {
                          return 'complete' === a.readyState
                            ? o
                            : 'interactive' === a.readyState
                            ? i
                              ? null
                              : s
                            : void 0;
                        },
                        m = function (e) {
                          return c.indexOf(e);
                        },
                        g = function (t, e) {
                          d[e].forEach(function (e) {
                            h(t, e);
                          }),
                            (d[e] = []);
                        },
                        h = function (e, t) {
                          var n = t.trigger,
                            r = t.syntheticEventFn;
                          n(r ? r(e) : null);
                        };
                      (r._satellite = r._satellite || {}),
                        (r._satellite.pageBottom = f.bind(null, l)),
                        a.addEventListener('DOMContentLoaded', f.bind(null, s), !0),
                        r.addEventListener('load', f.bind(null, o), !0),
                        r.setTimeout(function () {
                          var e = p();
                          e && f(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            d[l].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            d[s].push({ trigger: e, syntheticEventFn: u.bind(null, a) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            d[o].push({ trigger: e, syntheticEventFn: u.bind(null, r) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_d638891dbf7d1b50)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_d638891dbf7d1b50
                      ));
                  }
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP2e2f86ba46954a2b8a2b3bb72276b9f8/',
          },
          'adobe-analytics': {
            displayName: 'Adobe Analytics',
            modules: {
              'adobe-analytics/src/lib/actions/clearVariables.js': {
                name: 'clear-variables',
                displayName: 'Clear Variables',
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('../sharedModules/getTracker');
                  e.exports = function () {
                    return a().then(
                      function (e) {
                        e.clearVars && (r.logger.info('Clear variables.'), e.clearVars());
                      },
                      function (e) {
                        r.logger.error('Cannot clear variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/setVariables.js': {
                name: 'set-variables',
                displayName: 'Set Variables',
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('../sharedModules/getTracker'),
                    i = n('../helpers/applyTrackerVariables');
                  e.exports = function (t, n) {
                    return a().then(
                      function (e) {
                        r.logger.info('Set variables on the tracker.'),
                          i(e, t.trackerProperties),
                          t.customSetup &&
                            t.customSetup.source &&
                            t.customSetup.source.call(n.element, n, e);
                      },
                      function (e) {
                        r.logger.error('Cannot set variables: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/actions/sendBeacon.js': {
                name: 'send-beacon',
                displayName: 'Send Beacon',
                script: function (e, t, n, a) {
                  'use strict';
                  var r = n('../sharedModules/getTracker'),
                    i = function (e) {
                      return e && e.nodeName && 'a' === e.nodeName.toLowerCase();
                    },
                    o = function (e) {
                      return i(e) ? e.innerHTML : 'link clicked';
                    },
                    s = function (e, t, n) {
                      if ('page' === t.type) a.logger.info('Firing page view beacon.'), e.t();
                      else {
                        var r = { linkType: t.linkType || 'o', linkName: t.linkName || o(n) };
                        a.logger.info(
                          'Firing link track beacon using the values: ' + JSON.stringify(r) + '.'
                        ),
                          e.tl(i(n) ? n : 'true', r.linkType, r.linkName);
                      }
                    };
                  e.exports = function (t, n) {
                    return r().then(
                      function (e) {
                        s(e, t, n.element);
                      },
                      function (e) {
                        a.logger.error('Cannot send beacon: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a,
                    i = n('@adobe/reactor-cookie'),
                    o = n('@adobe/reactor-promise'),
                    s = n('@adobe/reactor-window'),
                    l = n('../helpers/settingsHelper'),
                    c = n('../helpers/augmenters'),
                    u = n('../helpers/applyTrackerVariables'),
                    d = n('../helpers/loadLibrary'),
                    f = n('../helpers/generateVersion')(r.buildInfo.turbineBuildDate),
                    p = 'beforeSettings',
                    m = r.getSharedModule('adobe-mcid', 'mcid-instance'),
                    g = function (e) {
                      return !e || 'true' === i.get(e);
                    },
                    h = function (r) {
                      return o
                        .all(
                          c.map(function (e) {
                            var t;
                            try {
                              t = e(r);
                            } catch (n) {
                              setTimeout(function () {
                                throw n;
                              });
                            }
                            return o.resolve(t);
                          })
                        )
                        .then(function () {
                          return r;
                        });
                    },
                    y = function (e) {
                      return (
                        m &&
                          (r.logger.info('Setting MCID instance on the tracker.'),
                          (e.visitor = m)),
                        e
                      );
                    },
                    v = function (e) {
                      return (
                        r.logger.info('Setting version on tracker: "' + f + '".'),
                        'undefined' != typeof e.tagContainerMarker
                          ? (e.tagContainerMarker = f)
                          : 'string' == typeof e.version &&
                            e.version.substring(e.version.length - 5) !== '-' + f &&
                            (e.version += '-' + f),
                        e
                      );
                    },
                    b = function (e, t, n) {
                      return (
                        t.loadPhase === p &&
                          t.source &&
                          (r.logger.info('Calling custom script before settings.'),
                          t.source.call(s, n)),
                        u(n, e || {}),
                        t.loadPhase !== p &&
                          t.source &&
                          (r.logger.info('Calling custom script after settings.'),
                          t.source.call(s, n)),
                        n
                      );
                    },
                    T = function (e, t) {
                      return (
                        l.isAudienceManagementEnabled(e) &&
                          (t.loadModule('AudienceManagement'),
                          r.logger.info('Initializing AudienceManagement module'),
                          t.AudienceManagement.setup(e.moduleProperties.audienceManager.config)),
                        t
                      );
                    },
                    w =
                      ((a = r.getExtensionSettings()),
                      g(a.trackingCookieName)
                        ? d(a)
                            .then(h)
                            .then(y)
                            .then(v)
                            .then(b.bind(null, a.trackerProperties, a.customSetup || {}))
                            .then(T.bind(null, a))
                        : o.reject('EU compliance was not acknowledged by the user.'));
                  e.exports = function () {
                    return w;
                  };
                },
                name: 'get-tracker',
                shared: !0,
              },
              'adobe-analytics/src/lib/sharedModules/augmentTracker.js': {
                name: 'augment-tracker',
                shared: !0,
                script: function (e, t, n) {
                  'use strict';
                  var r = n('../helpers/augmenters');
                  e.exports = function (e) {
                    r.push(e);
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/settingsHelper.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('@adobe/reactor-window'),
                    i = {
                      LIB_TYPES: {
                        MANAGED: 'managed',
                        PREINSTALLED: 'preinstalled',
                        REMOTE: 'remote',
                        CUSTOM: 'custom',
                      },
                      MANAGED_LIB_PATHS: {
                        APP_MEASUREMENT: 'AppMeasurement.js',
                        ACTIVITY_MAP: 'AppMeasurement_Module_ActivityMap.js',
                        AUDIENCE_MANAGEMENT: 'AppMeasurement_Module_AudienceManagement.js',
                      },
                      getReportSuites: function (e) {
                        var t = e.production;
                        return (
                          e[r.buildInfo.environment] && (t = e[r.buildInfo.environment]),
                          t.join(',')
                        );
                      },
                      isActivityMapEnabled: function (e) {
                        return !(
                          e.libraryCode &&
                          !e.libraryCode.useActivityMap &&
                          !1 === e.libraryCode.useActivityMap
                        );
                      },
                      isAudienceManagementEnabled: function (e) {
                        var t = !1;
                        return (
                          e &&
                            e.moduleProperties &&
                            e.moduleProperties.audienceManager &&
                            e.moduleProperties.audienceManager.config &&
                            a &&
                            a._satellite &&
                            a._satellite.company &&
                            a._satellite.company.orgId &&
                            (t = !0),
                          t
                        );
                      },
                    };
                  e.exports = i;
                },
              },
              'adobe-analytics/src/lib/helpers/augmenters.js': {
                script: function (e) {
                  'use strict';
                  e.exports = [];
                },
              },
              'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                script: function (e, t, n, o) {
                  'use strict';
                  var a = n('@adobe/reactor-query-string'),
                    i = n('@adobe/reactor-window'),
                    s = /eVar([0-9]+)/,
                    l = /prop([0-9]+)/,
                    c = new RegExp(
                      '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                    ),
                    u = function (e, t, n) {
                      return n.indexOf(e) === t;
                    },
                    d = function (e, t, n) {
                      var r = Object.keys(t).filter(c.test.bind(c));
                      return (
                        n && r.push('events'),
                        (r = r.concat((e.linkTrackVars || '').split(',')))
                          .filter(function (e, t) {
                            return 'None' !== e && e && u(e, t, r);
                          })
                          .join(',')
                      );
                    },
                    f = function (e, t) {
                      var n = t.map(function (e) {
                        return e.name;
                      });
                      return (n = n.concat((e.linkTrackEvents || '').split(',')))
                        .filter(function (e, t) {
                          return 'None' !== e && u(e, t, n);
                        })
                        .join(',');
                    },
                    r = function (e, t, n) {
                      e[t] = n[t].join(',');
                    },
                    p = function (a, e, t) {
                      var i = t.dynamicVariablePrefix || 'D=';
                      t[e].forEach(function (e) {
                        var t;
                        if ('value' === e.type) t = e.value;
                        else {
                          var n = s.exec(e.value);
                          if (n) t = i + 'v' + n[1];
                          else {
                            var r = l.exec(e.value);
                            r && (t = i + 'c' + r[1]);
                          }
                        }
                        a[e.name] = t;
                      });
                    },
                    m = {
                      linkDownloadFileTypes: r,
                      linkExternalFilters: r,
                      linkInternalFilters: r,
                      hierarchies: function (t, e, n) {
                        n[e].forEach(function (e) {
                          t[e.name] = e.sections.join(e.delimiter);
                        });
                      },
                      props: p,
                      eVars: p,
                      campaign: function (e, t, n) {
                        if ('queryParam' === n[t].type) {
                          var r = a.parse(i.location.search);
                          e[t] = r[n[t].value];
                        } else e[t] = n[t].value;
                      },
                      events: function (e, t, n) {
                        var r = n[t].map(function (e) {
                          var t = e.name;
                          return (
                            e.id && (t = [t, e.id].join(':')),
                            e.value && (t = [t, e.value].join('=')),
                            t
                          );
                        });
                        e[t] = r.join(',');
                      },
                    };
                  e.exports = function (t, r) {
                    var a = {};
                    (r = r || {}),
                      Object.keys(r).forEach(function (e) {
                        var t = m[e],
                          n = r[e];
                        t ? t(a, e, r) : (a[e] = n);
                      }),
                      a.events &&
                        t.events &&
                        0 < t.events.length &&
                        (a.events = t.events + ',' + a.events);
                    var e = r && r.events && 0 < r.events.length,
                      n = d(t, a, e);
                    n && (a.linkTrackVars = n);
                    var i = f(t, r.events || []);
                    i && (a.linkTrackEvents = i),
                      o.logger.info(
                        'Applying the following properties on tracker: "' +
                          JSON.stringify(a) +
                          '".'
                      ),
                      Object.keys(a).forEach(function (e) {
                        t[e] = a[e];
                      });
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/loadLibrary.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var a = n('@adobe/reactor-load-script'),
                    i = n('@adobe/reactor-window'),
                    o = n('@adobe/reactor-promise'),
                    s = n('./settingsHelper'),
                    l = n('./pollHelper'),
                    c = function (e, t) {
                      if (!i.s_gi)
                        throw new Error(
                          'Unable to create AppMeasurement tracker, `s_gi` function not found.' +
                            i.AppMeasurement
                        );
                      r.logger.info(
                        'Creating AppMeasurement tracker with these report suites: "' + t + '"'
                      );
                      var n = i.s_gi(t);
                      return (
                        e.libraryCode.scopeTrackerGlobally &&
                          (r.logger.info('Setting the tracker as window.s'), (i.s = n)),
                        n
                      );
                    },
                    u = function (e) {
                      var t = [];
                      switch (e.libraryCode.type) {
                        case s.LIB_TYPES.MANAGED:
                          t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.APP_MEASUREMENT)),
                            s.isActivityMapEnabled(e) &&
                              t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.ACTIVITY_MAP));
                          break;
                        case s.LIB_TYPES.CUSTOM:
                          t.push(e.libraryCode.source);
                          break;
                        case s.LIB_TYPES.REMOTE:
                          t.push(
                            'https:' === i.location.protocol
                              ? e.libraryCode.httpsUrl
                              : e.libraryCode.httpUrl
                          );
                      }
                      if (s.isAudienceManagementEnabled(e)) {
                        var n = { namespace: i._satellite.company.orgId };
                        (e.moduleProperties.audienceManager.config.visitorService = n),
                          t.push(r.getHostedLibFileUrl(s.MANAGED_LIB_PATHS.AUDIENCE_MANAGEMENT));
                      }
                      return t;
                    },
                    d = function (e) {
                      return o.all(
                        u(e).map(function (e) {
                          return r.logger.info('Loading script: ' + e), a(e);
                        })
                      );
                    },
                    f = function (e, t) {
                      if (e.libraryCode.accounts)
                        if (t.sa) {
                          var n = s.getReportSuites(e.libraryCode.accounts);
                          r.logger.info(
                            'Setting the following report suites on the tracker: "' + n + '"'
                          ),
                            t.sa(n);
                        } else
                          r.logger.warn(
                            'Cannot set report suites on tracker. `sa` method not available.'
                          );
                      return t;
                    },
                    p = function (e) {
                      if (i[e])
                        return r.logger.info('Found tracker located at: "' + e + '".'), i[e];
                      throw new Error('Cannot find the global variable name: "' + e + '".');
                    };
                  e.exports = function (e) {
                    var t = d(e);
                    switch (e.libraryCode.type) {
                      case s.LIB_TYPES.MANAGED:
                        var n = s.getReportSuites(e.libraryCode.accounts);
                        return t.then(c.bind(null, e, n));
                      case s.LIB_TYPES.PREINSTALLED:
                        return t
                          .then(l.poll.bind(null, i, e.libraryCode.trackerVariableName))
                          .then(f.bind(null, e));
                      case s.LIB_TYPES.CUSTOM:
                      case s.LIB_TYPES.REMOTE:
                        return t
                          .then(p.bind(null, e.libraryCode.trackerVariableName))
                          .then(f.bind(null, e));
                      default:
                        throw new Error('Cannot load library. Type not supported.');
                    }
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/generateVersion.js': {
                script: function (e) {
                  'use strict';
                  var t = 8,
                    n = function (e) {
                      return e.getUTCDate().toString(36);
                    },
                    r = function (e) {
                      return e.substr(e.length - 1);
                    },
                    a = function (e) {
                      return Math.floor(e.getUTCHours() / t);
                    },
                    i = function (e) {
                      var t = (e.getUTCMonth() + 1 + 12 * a(e)).toString(36);
                      return r(t);
                    },
                    o = function (e) {
                      return (e.getUTCFullYear() - 2010).toString(36);
                    };
                  e.exports = function (e) {
                    var t = new Date(e);
                    if (isNaN(t)) throw new Error('Invalid date provided');
                    return ('L' + o(t) + i(t) + n(t)).toUpperCase();
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/pollHelper.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var o = n('@adobe/reactor-promise'),
                    s = 40,
                    l = 250,
                    c = function (e, t, n) {
                      r.logger.info('Found property located at: "' + t + '"].'), e(n);
                    },
                    a = function (a, i) {
                      return new o(function (e, t) {
                        if (a[i]) return c(e, i, a[i]);
                        var n = 1,
                          r = setInterval(function () {
                            a[i] && (c(e, i, a[i]), clearInterval(r)),
                              s <= n &&
                                (clearInterval(r),
                                t(
                                  new Error(
                                    'Bailing out. Cannot find the variable name: "' + i + '"].'
                                  )
                                )),
                              n++;
                          }, l);
                      });
                    };
                  e.exports = {
                    poll: function (e, t) {
                      return (
                        r.logger.info(
                          'Waiting for the property to become accessible at: "' + t + '"].'
                        ),
                        a(e, t)
                      );
                    },
                  };
                },
              },
            },
            settings: {
              orgId: 'DA11332E5321D0550A490D45@AdobeOrg',
              libraryCode: {
                type: 'custom',
                source:
                  'https://assets.adobedtm.com/331fbea29f79/b89b840626b5/0964baf301a9/EX1b86fc47a82749298ddd14e438481fe7-libraryCode_source.min.js',
                accounts: {
                  staging: ['comcastcomcastcppqa'],
                  production: ['comcastcomcastcppprod'],
                  development: ['comcastcomcastcppqa'],
                },
                trackerVariableName: 's',
              },
              trackerProperties: {
                currencyCode: 'USD',
                trackInlineStats: !0,
                trackDownloadLinks: !0,
                trackExternalLinks: !0,
                linkInternalFilters: [
                  'support-test-two.xfn-ops.xfinity.com/',
                  'www.xfinity.com',
                  'www.xfinity',
                  'wifi.xfinity.com',
                  'tel:',
                  'sitesearch.xfinity.com',
                  'search.xfinity.com',
                  'referafriend.xfinity.com',
                  'my.xfinity.com',
                  'mostlivesports.com',
                  'mobile.xfinity.com',
                  'mailto:',
                  'ly.xfinity.com',
                  'login.xfinity.com',
                  'javascript:',
                  'idm.xfinity.com',
                  'https://support-test-six.xfn-ops.xfinity.com/support/',
                  'forums.xfinity.com',
                  'forums.businesshelp.comcast.com',
                  'es.xfinity.com',
                  'customer.xfinity.com',
                  'customer.staging.xfinity.com',
                  'comcastsupport.com',
                  'comcast.convergentcare.com',
                  'comcast.com',
                  'cdn.xfinity.com',
                  'api.xfinity.com',
                ],
                linkDownloadFileTypes: [
                  'doc',
                  'docx',
                  'eps',
                  'jpg',
                  'png',
                  'svg',
                  'xls',
                  'ppt',
                  'pptx',
                  'pdf',
                  'xlsx',
                  'tab',
                  'csv',
                  'zip',
                  'txt',
                  'vsd',
                  'vxd',
                  'xml',
                  'js',
                  'css',
                  'rar',
                  'exe',
                  'wma',
                  'mov',
                  'avi',
                  'wmv',
                  'mp3',
                  'wav',
                  'm4v',
                ],
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EPbde2f7ca14e540399dcc1f8208860b7b/',
          },
          'data-layer-test': {
            displayName: 'Data Layer Test',
            modules: {
              'data-layer-test/src/lib/dataElements/dataTestWconfig.js': {
                name: 'data-test-wconfig',
                displayName: 'Data Test w/Config',
                script: function (e) {
                  'use strict';
                  function o (e, t, r) {
                    return String(t)
                      .split('.')
                      .reduce(function (e, t) {
                        try {
                          return e[t] === undefined ? r : e[t];
                        } catch (n) {
                          return r;
                        }
                      }, e);
                  }
                  function s (e, t, n) {
                    n = n || {};
                    var r = o(e, t[0]),
                      a = n[t[0]];
                    if (!a || !r) return t[0] ? r : e;
                    switch (((t = t.slice(1)), a.action)) {
                      case 'join':
                        return r
                          .map(function (e) {
                            return s(e, t, n);
                          })
                          .join(a.separator);
                      case 'pluck':
                        var i = 0;
                        switch (a.item) {
                          case 'last':
                            i = r.length - 1;
                            break;
                          case 'specific':
                            i = a.index;
                        }
                        return s(r[i], t, n);
                    }
                  }
                  e.exports = function (e) {
                    var t = o(e, 'selectedFields', []),
                      n = o(e, 'fieldSeparator', '');
                    return t
                      .map(function (e) {
                        return s(
                          window.digitalData,
                          e.selectedField.name.split('[n]').map(function (e) {
                            return e.startsWith('.') ? e.substring(1) : e;
                          }),
                          e.options
                        );
                      })
                      .join(n);
                  };
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP4ab17e00b57d4f7e9f44f70a3c51c448/',
          },
        },
        company: { orgId: 'DA11332E5321D0550A490D45@AdobeOrg' },
        property: {
          name: 'Residential | CPP',
          settings: {
            domains: ['xfinity.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !0,
          },
        },
        rules: [
          {
            id: 'RL5c4cdff088874880a2493df873a0b8e9',
            name: '50 | AA | All Pages | Global Click Event | DCR',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'send-Event' },
                ruleOrder: 50,
              },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTruthy' }, leftOperand: '%event.detail%' },
                timeout: 2000,
              },
            ],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js',
                settings: {},
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  trackerProperties: {
                    eVars: [{ name: 'eVar37', type: 'value', value: '%event | pageName%' }],
                    props: [{ name: 'prop17', type: 'value', value: '%event | pageName%' }],
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/331fbea29f79/b89b840626b5/0964baf301a9/RCc246067ffdd4472cbfc19c97dbe5f284-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'link', linkName: 'Click Tracking', linkType: 'o' },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLcd509bd6a9f14cae8303ac1cbb6e9941',
            name: '50 | All Pages | Global Page Load | DCR |AA',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'custom-PageLoad' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/clearVariables.js',
                settings: {},
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/setVariables.js',
                settings: {
                  customSetup: {
                    source: function (e, t) {
                      if (
                        (((t = window.s || t).products = _satellite.getVar(
                          'product | productIDbuyFlow'
                        )),
                        digitalData.page.attributes.pageLoadEvent &&
                          (-1 <
                            digitalData.page.attributes.pageLoadEvent.indexOf('Payment start') ||
                            -1 <
                              digitalData.page.attributes.pageLoadEvent.indexOf(
                                'payment start'
                              )) &&
                          (t.events = t.apl(t.events, 'event95', ',', 2)),
                        'account authenication' == digitalData.page.attributes.pageLoadEvent &&
                          (t.events = t.apl(t.events, 'event49', ',', 2)),
                        ('Payment review' != digitalData.page.attributes.pageLoadEvent &&
                          'payment review' != digitalData.page.attributes.pageLoadEvent) ||
                          (t.events = t.apl(t.events, 'event64', ',', 2)),
                        'Single payment today' == digitalData.page.attributes.pageLoadEvent &&
                          (t.events = t.apl(t.events, 'event7', ',', 2)),
                        'Single payment scheduled' == digitalData.page.attributes.pageLoadEvent &&
                          (t.events = t.apl(t.events, 'event21', ',', 2)),
                        _satellite.getVar('transaction | billPayAmount'))
                      ) {
                        var n = 'event94=' + _satellite.getVar('transaction | billPayAmount');
                        t.events = t.apl(t.events, n, ',', 2);
                      }
                      'shop' == t.eVar34 &&
                        'learn' == t.eVar35 &&
                        (t.prop44 = t.eVar44 = 'responsivedesign|all digital learn'),
                        'order' == t.prop46 && 'idm' == t.prop34 && (t.prop46 = t.eVar38 = ''),
                        'order' == _satellite.getVar('transaction | buyflowStep') &&
                          '' != _satellite.getVar('product | productIDbuyFlow') &&
                          (t.events = t.apl(t.events, 'purchase', ',', 2)),
                        '1' == _satellite.getVar('user | isReferAFriend') &&
                          (t.events = t.apl(t.events, 'event87', ',', 2)),
                        'yes' == _satellite.getVar('transation | isUIDStart') &&
                          (t.events = t.apl(t.events, 'event115', ',', 2)),
                        'yes' == _satellite.getVar('user | isPersonalEmailVerified') &&
                          (t.events = t.apl(t.events, 'event119', ',', 2)),
                        'yes' == _satellite.getVar('user | isUsernameCreated') &&
                          (t.events = t.apl(t.events, 'event116', ',', 2)),
                        'yes' == _satellite.getVar('user | isVerifyMethod') &&
                          (t.events = t.apl(t.events, 'event117', ',', 2)),
                        'yes' == _satellite.getVar('user | isUIDLookupCompleted') &&
                          (t.events = t.apl(t.events, 'event120', ',', 2)),
                        'yes' == _satellite.getVar('user | isPasswordRecoveryConfirm') &&
                          (t.events = t.apl(t.events, 'event121', ',', 2)),
                        'yes' == _satellite.getVar('user | isPasswordResetConfirm') &&
                          (t.events = t.apl(t.events, 'event122', ',', 2)),
                        'yes' == _satellite.getVar('user | isRebindConfirm') &&
                          (t.events = t.apl(t.events, 'event123', ',', 2));
                    },
                  },
                  trackerProperties: {
                    eVars: [
                      { name: 'eVar1', type: 'value', value: '%user | customerType%' },
                      { name: 'eVar10', type: 'value', value: '%user | marketID%' },
                      { name: 'eVar16', type: 'value', value: '%user | type%' },
                      { name: 'eVar21', type: 'value', value: '%transaction | paymentType%' },
                      { name: 'eVar32', type: 'value', value: '%transaction | fulfillmentType%' },
                      { name: 'eVar37', type: 'value', value: '%event | pageName%' },
                      { name: 'eVar38', type: 'value', value: '%transaction | buyflowType%' },
                      { name: 'eVar40', type: 'value', value: '%user | preActivationState%' },
                      { name: 'eVar44', type: 'value', value: '%code | siteVersion%' },
                      { name: 'eVar46', type: 'value', value: '%missing%' },
                      { name: 'eVar64', type: 'value', value: '%user | authGUID%' },
                      { name: 'eVar69', type: 'value', value: '%transaction | funnelType%' },
                      { name: 'eVar71', type: 'value', value: '%user | customerGUID%' },
                      { name: 'eVar86', type: 'value', value: '%user | authenticationStatus%' },
                      { name: 'eVar92', type: 'value', value: '%user | UIDVerificationMethod%' },
                      {
                        name: 'eVar93',
                        type: 'value',
                        value: '%user | accountNumberVerificationType%',
                      },
                      {
                        name: 'eVar94',
                        type: 'value',
                        value: '%user | imageVerificationAttempts%',
                      },
                      { name: 'eVar99', type: 'value', value: '%page | affiliateChannelName%' },
                    ],
                    props: [
                      { name: 'prop35', type: 'value', value: '%page | subCategory1%' },
                      { name: 'prop39', type: 'value', value: '%user | recoveryOptions%' },
                      { name: 'prop44', type: 'value', value: '%code | siteVersion%' },
                      { name: 'prop45', type: 'value', value: '%user | customerType%' },
                      { name: 'prop46', type: 'value', value: '%transaction | buyflowStep%' },
                      { name: 'prop52', type: 'value', value: '%user | uidCreationType%' },
                      { name: 'prop55', type: 'value', value: '%page | businessSiteType%' },
                      { name: 'prop56', type: 'value', value: '%user | userNameType%' },
                      { name: 'prop60', type: 'value', value: '%page | language%' },
                    ],
                    server: '%siteInfo | server%',
                    channel: '%page | primaryCategory%',
                    pageName: '%page | pageName%',
                    purchaseID: '%transaction | transactionID%',
                    transactionID: '%transaction | transactionID%',
                  },
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/331fbea29f79/b89b840626b5/0964baf301a9/RCc8490695618941e8bc663849a8e878ba-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
                timeout: 2000,
                delayNext: !0,
              },
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
          {
            id: 'RLdc527a789b354b98a30f32f03866a007',
            name: '1 | Common | All Pages | Adobe Consulting Libraries and Utils | Library Loaded',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 1 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '\n//JS Util functions for DTM Data Elements and DTM Rules.\nwindow.adobe = window.adobe || {};\nwindow.adobe.consulting = window.adobe.consulting || {};\nwindow.adobe.consulting.util = window.adobe.consulting.util || {};\n\n(function (A) {\n\n // Get the value from an object heirarchy. Usage :- window.adobe.consulting.util.getObjVal(<base object>, <heirarchy under base object as a string>, <default value (optional), this will be returned if the object is not found>);\n  A.getObjVal = function (obj, prop, defVal) {\n    \tdefVal = defVal || "";\n\t    if(!obj || !prop || typeof prop != "string") { _satellite.logger.info("!*!*!* WARNING !*!*!* \'Object\' or \'Path\' is missing or invalid"); return defVal; }\n      var props = prop.split("."), i;\n      for (i = 0; i < props.length; i += 1) {\n          if (typeof obj[props[i]] !== "undefined") { obj = obj[props[i]]; } else { _satellite.logger.info("!*!*!* WARNING !*!*!* " + props[i] + " could not be found under path " + prop); return defVal; }\n      }\n      return obj;\n  };\n  \n  A.resetState = function () {\n    \n    // Resetting Variable for holding Campaign/Experience qualification for each page/view\n    window.ttMETA = [];\n    \n    //Resetting SDID for A4T integration.\n    var visitor = Visitor.getInstance ("DA11332E5321D0550A490D45@AdobeOrg");\n    visitor.resetState();\n  };\n\n  A.getAPI = function(url, successHandler, errorHandler, headers) {\n        var xhr = typeof XMLHttpRequest != \'undefined\'\n            ? new XMLHttpRequest()\n            : new ActiveXObject(\'Microsoft.XMLHTTP\');\n        xhr.open(\'get\', url, true);\n        if(headers) {\n            for(var i=0, j = Object.keys(headers); i < j.length; i++) {\n            xhr.setRequestHeader(j[i], headers[j[i]]);\n            }\t\n        }\n        xhr.withCredentials = true;// Must follow xhr.open to avoid InvalidStateError\n        xhr.onreadystatechange = function() {\n            var status, data;\n            if (xhr.readyState == 4) { \n            status = xhr.status;\n            if (status == 200) {\n                data = JSON.parse(xhr.responseText);\n                successHandler && successHandler(data);\n            } else {\n                errorHandler && errorHandler(status);\n            }\n            }\n        };\n        xhr.send();\n    };\n\n    A.fireCustomEvent = function(name, details) {\n        var event = new CustomEvent(name, {\n            detail: {\n            source: "dtm",\n            data : details\n            }\n        });\n        document.dispatchEvent(event);\n    };\n\n    A.numberOfDaysPassed = function(fromDate) {\n\n        var fromDateArr = fromDate.split("-");\n            \n        if(fromDateArr.length != 3 || isNaN(new Date(fromDate))) {\n                console.log("Invalid Date given for function window.adobe.consulting.util.numberOfDaysPassed()");\n            return NaN;\n            }\n\n            \n        var currDate = new Date();\n\n        var utcFromDate = new Date(Date.UTC(fromDateArr[0],fromDateArr[1] -1 ,fromDateArr[2], 24, 0, 0, 0));\n        var utcCurrentDate = Date.UTC(currDate.getFullYear(), currDate.getMonth(), currDate.getDate(), 24, 0, 0, 0);\n\n        var dateDiff = utcCurrentDate - utcFromDate;\n\n        return A.dhm(dateDiff)[0];\n    };\n\n    A.dhm = function(t){\n        var cd = 24 * 60 * 60 * 1000,\n            ch = 60 * 60 * 1000,\n            d = Math.floor(t / cd),\n            h = Math.floor( (t - d * cd) / ch),\n            m = Math.round( (t - d * cd - h * ch) / 60000),\n            pad = function(n){ return n < 10 ? \'0\' + n : n; };\n        if( m === 60 ){\n            h++;\n            m = 0;\n        }\n        if( h === 24 ){\n            d++;\n            h = 0;\n        }\n        return [d, pad(h), pad(m)];\n    };\n\n\n\n    A.getMetaContentByName = function (name,content){\n        var content = (content==null)?\'content\':content, metaObj = document.querySelector("meta[name=\'"+name+"\']");\n        return metaObj != null ? metaObj.getAttribute(content) != null ? metaObj.getAttribute(content).toLowerCase() : "" : "";\n    };\n\n    A.fireTargetCustomMbox = function (name,params){\n        adobe.target.getOffer({\n        mbox: name,\n        params: params,\n        success: function(offer) {\n            adobe.target.applyOffer({\n            "mbox": name,\n            "offer": offer\n            });\n        },\n        error: function(status, error) {\n            _satellite.notify("Adobe Target custom mBox ( " + name + " ) request did not succeed :: ", status, error);\n        }\n        });  \n    };\n\n    A.getEventInfo = function (eventMethod, DL_path, eventName) {\n        var DL_events = digitalData.event;\n        for(var x=0; x < DL_events.length ; x++) {\n            if(DL_events[x].eventInfo.eventMethod && DL_events[x].eventInfo.eventMethod == eventMethod) {\n                if(typeof eventName !== "undefined") {\n                    return (DL_events[x].eventInfo.eventName == eventName) ?  A.getObjVal(DL_events[x].eventInfo, DL_path) : "";\n                }\n                return A.getObjVal(DL_events[x].eventInfo, DL_path);\n            }\n        }\n    };\n\n\n    //getGBB Offers\n    A.getGBBHomeOffer = function (ruleid, tokenname) {\n        return new Promise(function(resolve, reject) {\n            try {\n                var match = /&RC.MKT=(\\d+)&/gm.exec(_satellite.getVar("Cookie | PSC")),\n                marketID = match && match[1],\n                apiURL = marketID && ruleid && tokenname && "https://xapi.xfinity.com/markets/" + marketID + "/rules/" + ruleid + "/FeaturedOffers/V2?tokenname=" + tokenname;\n\n                function apiSuccessHandler(data) {\n                    resolve(data.featuredOffers);\n                }\n\n                function apiErrorHandler(data) {\n                    reject(data);\n                }\n\n                if (apiURL) {\n                    A.getAPI(apiURL, apiSuccessHandler, apiErrorHandler);\n                }\n                else {\n                    reject("Invalid arguments");\n                }       \n            }\n            catch(e) {\n                reject(e);\n            }\n        });\n    };\n\n    //Searches a single or an array of objects for key and value match (No nested array or object search support)\n    A.getMOV = function (objectRoot, keyArray, valueArray) {\n        objectRoot = objectRoot || []; keyArray = keyArray || []; valueArray = valueArray || [];\n        var goodArguments = !(!(typeof objectRoot == "object") || !keyArray.length || !valueArray.length);\n        var matchFound = false;\n        if(!goodArguments) {\n            console.error("Warning :: Invalid Arguments for function adobe.consulting.util.getMOV()");\n            return {};\n        }\n        if (Array.isArray(objectRoot) && objectRoot.length) {\n            for(var x=0; x < objectRoot.length; x++) {\n                var result = A.getMOV(objectRoot[x], keyArray, valueArray);\n                if (result) return result;\n            }\n        }\n        for(var y=0;y < keyArray.length; y++) {\n            matchFound = valueArray[y] && objectRoot.hasOwnProperty(keyArray[y]) && objectRoot[keyArray[y]] == valueArray[y] ? true : false;\n            if(!matchFound) { \n                return null \n            }\n        }\n        return objectRoot;\n    };\n\n}(window.adobe.consulting.util));\n',
                  language: 'javascript',
                },
                timeout: 2000,
                delayNext: !0,
              },
            ],
          },
        ],
      });
    var $___var_ea8d5f91a2a313a2 = (function () {
      const $___old_1cc327dc34723096 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_1cc327dc34723096)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_7b3e42788f2718a1.userAgent
          ));
        return function () {
          'use strict';
          function e (e, t) {
            return e((t = { exports: {} }), t.exports), t.exports;
          }
          function t (t) {
            var n = this.constructor;
            return this.then(
              function (e) {
                return n.resolve(t()).then(function () {
                  return e;
                });
              },
              function (e) {
                return n.resolve(t()).then(function () {
                  return n.reject(e);
                });
              }
            );
          }
          function c (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function r () {}
          function a (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function i (e) {
            if (!(this instanceof i)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              f(e, this);
          }
          function o (r, a) {
            for (; 3 === r._state; ) r = r._value;
            0 !== r._state
              ? ((r._handled = !0),
                i._immediateFn(function () {
                  var e = 1 === r._state ? a.onFulfilled : a.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(r._value);
                    } catch (n) {
                      return void l(a.promise, n);
                    }
                    s(a.promise, t);
                  } else (1 === r._state ? s : l)(a.promise, r._value);
                }))
              : r._deferreds.push(a);
          }
          function s (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof i) return (e._state = 3), (e._value = t), void u(e);
                if ('function' == typeof n) return void f(a(n, t), e);
              }
              (e._state = 1), (e._value = t), u(e);
            } catch (r) {
              l(e, r);
            }
          }
          function l (e, t) {
            (e._state = 2), (e._value = t), u(e);
          }
          function u (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              i._immediateFn(function () {
                e._handled || i._unhandledRejectionFn(e._value);
              });
            for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function d (e, t, n) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = n);
          }
          function f (e, t) {
            var n = !1;
            try {
              e(
                function (e) {
                  n || ((n = !0), s(t, e));
                },
                function (e) {
                  n || ((n = !0), l(t, e));
                }
              );
            } catch (r) {
              if (n) return;
              (n = !0), l(t, r);
            }
          }
          function p (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function n () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
              for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e];
                  })
                  .join('')
              )
                return !1;
              var r = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  r[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
              );
            } catch (a) {
              return !1;
            }
          }
          function g (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var m = function (e) {
                var n = [];
                return (
                  e.forEach(function (t) {
                    t.events &&
                      t.events.forEach(function (e) {
                        n.push({ rule: t, event: e });
                      });
                  }),
                  n.sort(function (e, t) {
                    return e.event.ruleOrder - t.event.ruleOrder;
                  })
                );
              },
              h = 'debug',
              y = function (t, e) {
                var n = function () {
                    return 'true' === t.getItem(h);
                  },
                  r = function (e) {
                    t.setItem(h, e);
                  },
                  a = [],
                  i = function (e) {
                    a.push(e);
                  };
                return (
                  (e.outputEnabled = n()),
                  {
                    onDebugChanged: i,
                    getDebugEnabled: n,
                    setDebugEnabled: function (t) {
                      n() !== t &&
                        (r(t),
                        (e.outputEnabled = t),
                        a.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              v = 'Module did not export a function.',
              b = function (i, o) {
                return function (e, t, n) {
                  n = n || [];
                  var r = i.getModuleExports(e.modulePath);
                  if ('function' != typeof r) throw new Error(v);
                  var a = o(e.settings || {}, t);
                  return r.bind(null, a).apply(null, n);
                };
              },
              T = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              w = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              S = '\uD83D\uDE80',
              E =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : S,
              k = !1,
              x = function (e) {
                if (k && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(E),
                    e !== w.DEBUG || window.console[e] || (e = w.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              C = x.bind(null, w.LOG),
              _ = x.bind(null, w.INFO),
              j = x.bind(null, w.DEBUG),
              A = x.bind(null, w.WARN),
              D = x.bind(null, w.ERROR),
              I = {
                log: C,
                info: _,
                debug: j,
                warn: A,
                error: D,
                get outputEnabled () {
                  return k;
                },
                set outputEnabled (e) {
                  k = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: C.bind(null, t),
                    info: _.bind(null, t),
                    debug: j.bind(null, t),
                    warn: A.bind(null, t),
                    error: D.bind(null, t),
                  };
                },
              },
              P = e(function (r) {
                !(function (e) {
                  if (((r.exports = e()), !!0)) {
                    var t = window.Cookies,
                      n = (window.Cookies = e());
                    n.noConflict = function () {
                      return (window.Cookies = t), n;
                    };
                  }
                })(function () {
                  function l () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var r in n) t[r] = n[r];
                    }
                    return t;
                  }
                  function u (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (c) {
                    function s () {}
                    function n (e, t, n) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (n = l({ path: '/' }, s.defaults, n)).expires &&
                          (n.expires = new Date(1 * new Date() + 86400000 * n.expires)),
                          (n.expires = n.expires ? n.expires.toUTCString() : '');
                        try {
                          var r = JSON.stringify(t);
                          /^[\{\[]/.test(r) && (t = r);
                        } catch (o) {}
                        (t = c.write
                          ? c.write(t, e)
                          : encodeURIComponent(String(t)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var a = '';
                        for (var i in n)
                          n[i] &&
                            ((a += '; ' + i), !0 !== n[i] && (a += '=' + n[i].split(';')[0]));
                        return (document.cookie = e + '=' + t + a);
                      }
                    }
                    function t (e, t) {
                      if ('undefined' != typeof document) {
                        for (
                          var n = {},
                            r = document.cookie ? document.cookie.split('; ') : [],
                            a = 0;
                          a < r.length;
                          a++
                        ) {
                          var i = r[a].split('='),
                            o = i.slice(1).join('=');
                          t || '"' !== o.charAt(0) || (o = o.slice(1, -1));
                          try {
                            var s = u(i[0]);
                            if (((o = (c.read || c)(o, s) || u(o)), t))
                              try {
                                o = JSON.parse(o);
                              } catch (l) {}
                            if (((n[s] = o), e === s)) break;
                          } catch (l) {}
                        }
                        return e ? n[e] : n;
                      }
                    }
                    return (
                      (s.set = n),
                      (s.get = function (e) {
                        return t(e, !1);
                      }),
                      (s.getJSON = function (e) {
                        return t(e, !0);
                      }),
                      (s.remove = function (e, t) {
                        n(e, '', l(t, { expires: -1 }));
                      }),
                      (s.defaults = {}),
                      (s.withConverter = e),
                      s
                    );
                  }
                  return e(function () {});
                });
              }),
              V = { get: P.get, set: P.set, remove: P.remove },
              N = window,
              F = 'com.adobe.reactor.',
              O = function (r, e) {
                var a = F + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_22fc9e43f550e7ce = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_22fc9e43f550e7ce)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_12e4a56044062aff.localStorage
                        ));
                      return function () {
                        try {
                          return N[r].getItem(a + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_22fc9e43f550e7ce)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_22fc9e43f550e7ce
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_6faec73f7a906a8a = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_6faec73f7a906a8a)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_12e4a56044062aff.localStorage
                        ));
                      return function () {
                        try {
                          return N[r].setItem(a + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_6faec73f7a906a8a)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_6faec73f7a906a8a
                        ));
                    }
                  },
                };
              },
              M = '_sdsat_',
              L = 'dataElements.',
              R = 'dataElementCookiesMigrated',
              U = O('localStorage'),
              W = O('sessionStorage', L),
              B = O('localStorage', L),
              H = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              q = {},
              G = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              $ = function (e, t, n) {
                var r;
                switch (t) {
                  case H.PAGEVIEW:
                    return void (q[e] = n);
                  case H.SESSION:
                    return void ((r = G(n)) && W.setItem(e, r));
                  case H.VISITOR:
                    return void ((r = G(n)) && B.setItem(e, r));
                }
              },
              J = function (e, t) {
                var n = V.get(M + e);
                n !== undefined && $(e, t, n);
              },
              Y = {
                setValue: $,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case H.PAGEVIEW:
                      return q.hasOwnProperty(e) ? q[e] : null;
                    case H.SESSION:
                      return null === (n = W.getItem(e)) ? n : JSON.parse(n);
                    case H.VISITOR:
                      return null === (n = B.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  U.getItem(R) ||
                    (Object.keys(t).forEach(function (e) {
                      J(e, t[e].storageDuration);
                    }),
                    U.setItem(R, !0));
                },
              },
              z = function (e, t, n, r) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  n +
                  (r ? '\n' + r : '')
                );
              },
              Q = function (s, l, c, u) {
                return function (e, t) {
                  var n = l(e);
                  if (!n) return u ? '' : undefined;
                  var r,
                    a = n.storageDuration;
                  try {
                    r = s.getModuleExports(n.modulePath);
                  } catch (o) {
                    return void I.error(z(n, e, o.message, o.stack));
                  }
                  if ('function' == typeof r) {
                    var i;
                    try {
                      i = r(c(n.settings, t), t);
                    } catch (o) {
                      return void I.error(z(n, e, o.message, o.stack));
                    }
                    return (
                      a && (null != i ? Y.setValue(e, a, i) : (i = Y.getValue(e, a))),
                      null == i && null != n.defaultValue && (i = n.defaultValue),
                      'string' == typeof i &&
                        (n.cleanText && (i = T(i)), n.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  I.error(z(n, e, 'Module did not export a function.'));
                };
              },
              K = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return T(e.textContent);
                },
              },
              X = function (e, t, n) {
                for (var r, a = e, i = 0, o = t.length; i < o; i++) {
                  if (null == a) return undefined;
                  var s = t[i];
                  if (n && '@' === s.charAt(0)) {
                    var l = s.slice(1);
                    a = K[l](a);
                  } else if (a.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) {
                    var c = r[1];
                    a = a.getAttribute(c);
                  } else a = a[s];
                }
                return a;
              },
              Z = function (i, o, s) {
                return function (e, t) {
                  var n;
                  if (o(e)) n = s(e, t);
                  else {
                    var r = e.split('.'),
                      a = r.shift();
                    'this' === a
                      ? t && (n = X(t.element, r, !0))
                      : 'event' === a
                      ? t && (n = X(t, r))
                      : 'target' === a
                      ? t && (n = X(t.target, r))
                      : (n = X(i[a], r));
                  }
                  return n;
                };
              },
              ee = function (n, r) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    r(e) || 'this' === t || 'event' === t || 'target' === t || n.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, n) {
                var r = { exports: {} };
                return e.call(r.exports, r, r.exports, t, n), r.exports;
              },
              ne = function () {
                var o = {},
                  n = function (e) {
                    var t = o[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(o).forEach(function (e) {
                      try {
                        r(e);
                      } catch (n) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          n.message +
                          (n.stack ? '\n' + n.stack : '');
                        I.error(t);
                      }
                    });
                  },
                  r = function (e) {
                    var t = n(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, n, r, a) {
                    var i = { definition: t, extensionName: n, require: r, turbine: a };
                    (i.require = r), (o[e] = i);
                  },
                  hydrateCache: e,
                  getModuleExports: r,
                  getModuleDefinition: function (e) {
                    return n(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return n(e).extensionName;
                  },
                };
              },
              re = !1,
              ae = function (r) {
                return function (t, n) {
                  var e = r._monitors;
                  e &&
                    (re ||
                      (I.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (re = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](n);
                    }));
                };
              },
              ie = function (a, i, o) {
                var n,
                  r,
                  s,
                  l,
                  c = [],
                  u = function (e, t, n) {
                    if (!a(t)) return e;
                    c.push(t);
                    var r = i(t, n);
                    return c.pop(), null == r && o ? '' : r;
                  };
                return (
                  (n = function (e, n) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? u(e, t[1], n)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return u(e, t, n);
                        });
                  }),
                  (r = function (e, t) {
                    for (var n = {}, r = Object.keys(e), a = 0; a < r.length; a++) {
                      var i = r[a],
                        o = e[i];
                      n[i] = l(o, t);
                    }
                    return n;
                  }),
                  (s = function (e, t) {
                    for (var n = [], r = 0, a = e.length; r < a; r++) n.push(l(e[r], t));
                    return n;
                  }),
                  (l = function (e, t) {
                    return 'string' == typeof e
                      ? n(e, t)
                      : Array.isArray(e)
                      ? s(e, t)
                      : 'object' == typeof e && null !== e
                      ? r(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < c.length
                      ? (I.error('Data element circular reference detected: ' + c.join(' -> ')), e)
                      : l(e, t);
                  }
                );
              },
              oe = function (a) {
                return function (e, t) {
                  if ('string' == typeof e) a[arguments[0]] = t;
                  else if (arguments[0]) {
                    var n = arguments[0];
                    for (var r in n) a[r] = n[r];
                  }
                };
              },
              se = setTimeout;
            (i.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (i.prototype.then = function (e, t) {
                var n = new this.constructor(r);
                return o(this, new d(e, t, n)), n;
              }),
              (i.prototype['finally'] = t),
              (i.all = function (t) {
                return new i(function (a, i) {
                  function o (t, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var n = e.then;
                        if ('function' == typeof n)
                          return void n.call(
                            e,
                            function (e) {
                              o(t, e);
                            },
                            i
                          );
                      }
                      (s[t] = e), 0 == --l && a(s);
                    } catch (r) {
                      i(r);
                    }
                  }
                  if (!c(t)) return i(new TypeError('Promise.all accepts an array'));
                  var s = Array.prototype.slice.call(t);
                  if (0 === s.length) return a([]);
                  for (var l = s.length, e = 0; e < s.length; e++) o(e, s[e]);
                });
              }),
              (i.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              }),
              (i.reject = function (n) {
                return new i(function (e, t) {
                  t(n);
                });
              }),
              (i.race = function (a) {
                return new i(function (e, t) {
                  if (!c(a)) return t(new TypeError('Promise.race accepts an array'));
                  for (var n = 0, r = a.length; n < r; n++) i.resolve(a[n]).then(e, t);
                });
              }),
              (i._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  se(e, 0);
                }),
              (i._unhandledRejectionFn = function kt (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var le = window.Promise || i['default'] || i,
              ce = function (c, n, r) {
                return function (s, t, l, e) {
                  return e.then(function () {
                    var i,
                      o = s.delayNext;
                    return new le(function (e, t) {
                      var n = c(s, l, [l]);
                      if (!o) return e();
                      var r = s.timeout,
                        a = new le(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      le.race([n, a]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = n(e)), r(s, t, e), le.reject(e);
                      })
                      .then(function () {
                        clearTimeout(i);
                      });
                  });
                };
              },
              ue = function (l, n, r, a, c) {
                return function (o, t, s, e) {
                  return e.then(function () {
                    var i;
                    return new le(function (e, t) {
                      var n = l(o, s, [s]),
                        r = o.timeout,
                        a = new le(function (e, t) {
                          i = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      le.race([n, a]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(i), (e = n(e)), a(o, t, e), le.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(i), !r(o, e))) return c(o, t), le.reject();
                      });
                  });
                };
              },
              de = le.resolve(),
              fe = function (r, a, e) {
                return function (t, n) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        de = r(e, t, n, de);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        de = a(e, t, n, de);
                      }),
                    (de = (de = de.then(function () {
                      e(t);
                    }))['catch'](function () {}))
                  );
                };
              },
              pe = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              me = function (o, s, l, c) {
                return function (e, t) {
                  var n;
                  if (e.conditions)
                    for (var r = 0; r < e.conditions.length; r++) {
                      n = e.conditions[r];
                      try {
                        var a = o(n, t, [t]);
                        if (pe(a))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!s(n, a)) return l(n, e), !1;
                      } catch (i) {
                        return c(n, e, i), !1;
                      }
                    }
                  return !0;
                };
              },
              ge = function (n, r) {
                return function (e, t) {
                  n(e, t) && r(e, t);
                };
              },
              he = function (n) {
                return function (e) {
                  var t = n.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              ye = function (a) {
                return function (e) {
                  var t = e.rule,
                    n = e.event,
                    r = a.getModuleDefinition(n.modulePath).name;
                  return {
                    $type: a.getModuleExtensionName(n.modulePath) + '.' + r,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              ve = function (s, l, c, u, d, f) {
                return function (n, e) {
                  var r = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var a = d(e);
                    l(t, null, [
                      function i (e) {
                        var t = c(a, e);
                        n(function () {
                          s(t, r);
                        });
                      },
                    ]);
                  } catch (o) {
                    f.error(u(t, r, o));
                  }
                };
              },
              be = function (a, i, o, s) {
                return function (e, t, n) {
                  var r = i(e);
                  o.error(a(r, t.name, n)), s('ruleActionFailed', { rule: t, action: e });
                };
              },
              Te = function (a, i, o, s) {
                return function (e, t, n) {
                  var r = i(e);
                  o.error(a(r, t.name, n)), s('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              we = function (r, a, i) {
                return function (e, t) {
                  var n = r(e);
                  a.log('Condition "' + n + '" for rule "' + t.name + '" was not met.'),
                    i('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Se = function (t, n) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), n('ruleCompleted', { rule: e });
                };
              },
              Ee = function (i, o, s) {
                return function (e, t) {
                  var n;
                  if (e.actions)
                    for (var r = 0; r < e.actions.length; r++) {
                      n = e.actions[r];
                      try {
                        i(n, t, [t]);
                      } catch (a) {
                        return void o(n, e, a);
                      }
                    }
                  s(e);
                };
              },
              ke = function (n, r, a, i) {
                return function (e, t) {
                  i('ruleTriggered', { rule: t }), n ? a(t, e) : r(t, e);
                };
              },
              xe = function (e, t, n) {
                return (
                  'Failed to execute "' +
                  e +
                  '" for "' +
                  t +
                  '" rule. ' +
                  n.message +
                  (n.stack ? '\n' + n.stack : '')
                );
              },
              Ce = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              _e = [],
              je = !1,
              Ae = function (e) {
                je ? e() : _e.push(e);
              },
              De = function (e, t, n) {
                e(t).forEach(function (e) {
                  n(Ae, e);
                }),
                  (je = !0),
                  _e.forEach(function (e) {
                    e();
                  }),
                  (_e = []);
              },
              Ie = function (e) {
                if (
                  (e ||
                    (e = new Error(
                      'The extension triggered an error, but no error information was provided.'
                    )),
                  !(e instanceof Error))
                ) {
                  var t = 'object' == typeof e ? JSON.stringify(e) : String(e);
                  e = new Error(t);
                }
                return e;
              },
              Pe = Object.getOwnPropertySymbols,
              Ve = Object.prototype.hasOwnProperty,
              Ne = Object.prototype.propertyIsEnumerable,
              Fe = n()
                ? Object.assign
                : function (e) {
                    for (var t, n, r = p(e), a = 1; a < arguments.length; a++) {
                      for (var i in (t = Object(arguments[a]))) Ve.call(t, i) && (r[i] = t[i]);
                      if (Pe) {
                        n = Pe(t);
                        for (var o = 0; o < n.length; o++) Ne.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                      }
                    }
                    return r;
                  },
              Oe = function (e, t) {
                return (
                  Fe((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          I.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Me = function (l, c) {
                return function (e, t) {
                  var n = l[e];
                  if (n) {
                    var r = n.modules;
                    if (r)
                      for (var a = Object.keys(r), i = 0; i < a.length; i++) {
                        var o = a[i],
                          s = r[o];
                        if (s.shared && s.name === t) return c.getModuleExports(o);
                      }
                  }
                };
              },
              Le = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Re = function (n, r) {
                return function (e) {
                  if (r) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return n + e;
                };
              },
              Ue = '.js',
              We = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              Be = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              He = function (e, t) {
                Be(t, Ue) || (t += Ue);
                var n = t.split('/'),
                  r = We(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? r.length && r.pop() : r.push(e));
                  }),
                  r.join('/')
                );
              },
              qe = document,
              Ge = function (n, r) {
                return new le(function (e, t) {
                  (r.onload = function () {
                    e(r);
                  }),
                    (r.onerror = function () {
                      t(new Error('Failed to load script ' + n));
                    });
                });
              },
              $e = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var n = Ge(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              Je = function (e, t, n, r) {
                (t = t || '&'), (n = n || '=');
                var a = {};
                if ('string' != typeof e || 0 === e.length) return a;
                var i = /\+/g;
                e = e.split(t);
                var o = 1000;
                r && 'number' == typeof r.maxKeys && (o = r.maxKeys);
                var s = e.length;
                0 < o && o < s && (s = o);
                for (var l = 0; l < s; ++l) {
                  var c,
                    u,
                    d,
                    f,
                    p = e[l].replace(i, '%20'),
                    m = p.indexOf(n);
                  0 <= m ? ((c = p.substr(0, m)), (u = p.substr(m + 1))) : ((c = p), (u = '')),
                    (d = decodeURIComponent(c)),
                    (f = decodeURIComponent(u)),
                    g(a, d)
                      ? Array.isArray(a[d])
                        ? a[d].push(f)
                        : (a[d] = [a[d], f])
                      : (a[d] = f);
                }
                return a;
              },
              Ye = function (e) {
                switch (typeof e) {
                  case 'string':
                    return e;
                  case 'boolean':
                    return e ? 'true' : 'false';
                  case 'number':
                    return isFinite(e) ? e : '';
                  default:
                    return '';
                }
              },
              ze = function (n, r, a, e) {
                return (
                  (r = r || '&'),
                  (a = a || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent(Ye(e)) + a;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(Ye(e));
                                })
                                .join(r)
                            : t + encodeURIComponent(Ye(n[e]));
                        })
                        .join(r)
                    : e
                    ? encodeURIComponent(Ye(e)) + a + encodeURIComponent(Ye(n))
                    : ''
                );
              },
              Qe = e(function (e, t) {
                (t.decode = t.parse = Je), (t.encode = t.stringify = ze);
              }),
              Ke = (Qe.decode, Qe.parse, Qe.encode, Qe.stringify, '@adobe/reactor-'),
              Xe = {
                cookie: V,
                document: qe,
                'load-script': $e,
                'object-assign': Fe,
                promise: le,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), Qe.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return Qe.stringify(e);
                  },
                },
                window: N,
              },
              Ze = function (r) {
                return function (e) {
                  if (0 === e.indexOf(Ke)) {
                    var t = e.substr(Ke.length),
                      n = Xe[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return r(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, o, s, l, c) {
                var u = e.extensions,
                  d = e.buildInfo,
                  f = e.property.settings;
                if (u) {
                  var p = Me(u, o);
                  Object.keys(u).forEach(function (r) {
                    var a = u[r],
                      e = Le(l, a.settings);
                    if (a.modules) {
                      var t = I.createPrefixedLogger(a.displayName),
                        n = Re(a.hostedLibFilesBaseUrl, d.minified),
                        i = {
                          buildInfo: d,
                          getDataElementValue: c,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: p,
                          logger: t,
                          propertySettings: f,
                          replaceTokens: l,
                          onDebugChanged: s.onDebugChanged,
                          get debugEnabled () {
                            return s.getDebugEnabled();
                          },
                        };
                      Object.keys(a.modules).forEach(function (n) {
                        var e = a.modules[n],
                          t = Ze(function (e) {
                            var t = He(n, e);
                            return o.getModuleExports(t);
                          });
                        o.registerModule(n, e, r, t, i);
                      });
                    }
                  }),
                    o.hydrateCache();
                }
                return o;
              },
              tt = function (e, t, n, r, a) {
                var i = I.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  I.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: t.property.name }),
                  (e.company = t.company),
                  (e.buildInfo = t.buildInfo),
                  (e.logger = i),
                  (e.notify = function (e, t) {
                    switch (
                      (I.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      t)
                    ) {
                      case 3:
                        i.info(e);
                        break;
                      case 4:
                        i.warn(e);
                        break;
                      case 5:
                        i.error(e);
                        break;
                      default:
                        i.log(e);
                    }
                  }),
                  (e.getVar = r),
                  (e.setVar = a),
                  (e.setCookie = function (e, t, n) {
                    var r = '',
                      a = {};
                    n && ((r = ', { expires: ' + n + ' }'), (a.expires = n));
                    var i =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      r +
                      ').';
                    I.warn(i), V.set(e, t, a);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      I.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      V.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    I.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      V.remove(e);
                  }),
                  (e.cookie = V),
                  (e.pageBottom = function () {}),
                  (e.setDebug = n);
                var o = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      o ||
                        (I.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (o = !0)),
                      t
                    );
                  },
                });
              },
              nt = window._satellite;
            if (nt && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var rt = nt.container;
              delete nt.container;
              var at = rt.property.settings.undefinedVarsReturnEmpty,
                it = rt.property.settings.ruleComponentSequencingEnabled,
                ot = rt.dataElements || {};
              Y.migrateCookieData(ot);
              var st,
                lt = function (e) {
                  return ot[e];
                },
                ct = ne(),
                ut = Q(
                  ct,
                  lt,
                  function () {
                    return st.apply(null, arguments);
                  },
                  at
                ),
                dt = {},
                ft = oe(dt),
                pt = ee(dt, lt),
                mt = Z(dt, lt, ut);
              st = ie(pt, mt, at);
              var gt = y(O('localStorage'), I);
              tt(nt, rt, gt.setDebugEnabled, mt, ft), et(rt, ct, gt, st, ut);
              var ht = ae(nt),
                yt = b(ct, st),
                vt = he(ct),
                bt = we(vt, I, ht),
                Tt = Te(xe, vt, I, ht),
                wt = be(xe, vt, I, ht),
                St = Se(I, ht),
                Et = ve(
                  ke(
                    it,
                    ge(me(yt, Ce, bt, Tt), Ee(yt, wt, St)),
                    fe(ue(yt, Ie, Ce, Tt, bt), ce(yt, Ie, wt), St),
                    ht
                  ),
                  yt,
                  Oe,
                  xe,
                  ye(ct),
                  I
                );
              De(m, rt.rules || [], Et);
            }
            return nt;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_1cc327dc34723096)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_1cc327dc34723096
          ));
      }
    })();
    _satellite = $___var_ea8d5f91a2a313a2;
  })();
}
