{
  const $___stub_a1115fdf2e39e319 = {};
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
  })($___stub_a1115fdf2e39e319);
  const $___stub_f41e7bff56ded01f = {};
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
  })($___stub_f41e7bff56ded01f);
  (function () {
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['digitalHelpClick'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,eVar55,eVar57';
            var eventlist = window.citiData.eventlist;
            if (eventlist == 'digHelpOffered') {
              s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event30', ',', 1);
              s.events = s.apl(s.events, 'event30', ',', 1);
            } else if (eventlist == 'digHelpInteraction') {
              s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event31', ',', 1);
              s.events = s.apl(s.events, 'event31', ',', 1);
            } else {
              s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event50', ',', 1);
              s.events = s.apl(s.events, 'event50', ',', 1);
            }
            s.eVar38 = citiData.pageName;
            s.eVar55 = citiData.digHelpType;
            s.eVar57 = citiData.digHelpSessionID;
            s.tl(this, 'o', s.eVar55);
            s.events = '';
            eventlist = '';
            window.citiData.eventlist = '';
            window.citiData.digHelpType = '';
            window.citiData.digHelpSessionID = '';
            window.citiData.events = '';
          } catch (e) {}
        });
      },
      2834829,
      593700
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.globalInfo.pageDef;
                } catch (e) {
                  return 'error';
                }
              },
              transform: function (v) {
                return v;
              },
              load: 'page',
              dataDefName: 'citiData_pageDef',
              collection: 'page_variables',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7831' }
          );
        }, 7831);
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['formError'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          window.citiData = window.citiData || {};
          var s = window.s || {};
          window.citiData.selfServeType = window.citiData.selfServeType || '';
          window.citiData.formErrorMessage = citiData.formErrorMessage || '';
          s.linkTrackVars = 'eVar38,eVar20,eVar70,eVar71,eVar4,events';
          s.linkTrackEvents = 'event2';
          s.events = 'event2';
          s.eVar4 = 'AccountAlertError:' + window.citiData.formErrorMessage;
          s.eVar38 = s.pageName;
          if (window.citiData.selfServeType) {
            s.eVar70 = window.citiData.selfServeType;
            s.eVar71 = 'AccountAlertError:' + window.citiData.formErrorMessage;
            s.eVar20 =
              window.citiData.selfServeType +
              'AccountAlertError:' +
              window.citiData.formErrorMessage;
          } else s.eVar20 = window.citiData.formErrorMessage || 'form error';
          s.tl(this, 'o', s.eVar20);
          s.eVar70 = '';
          s.eVar71 = '';
          s.eVar20 = '';
          s.eVar4 = '';
          console.log('tms formError detected');
        });
      },
      2923227,
      [2929498],
      510670,
      [486892]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.siteSection2;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_siteSection2',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17009' }
          );
        }, 17009);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.pageLanguage;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_pageLanguage',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17014' }
          );
        }, 17014);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.pageCat;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_pageCat',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15575' }
          );
        }, 15575);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['youtubeShare'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            s.linkTrackVars = 'events,eVar38,eVar56';
            s.linkTrackEvents = 'event33';
            s.events = 'event33';
            s.eVar38 = s.pageName;
            s.eVar56 = 'youtube share';
            s.tl(this, 'o', s.eVar56);
            s.linkTrackVars = '';
            s.linkTrackEvents = '';
            s.events = '';
            s.eVar56 = '';
          } catch (e) {}
        });
      },
      2108794,
      495376
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.prospectID;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_prospectID',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '18661' }
          );
        }, 18661);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['linkedinShare'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            s.linkTrackVars = 'events,eVar38,eVar56';
            s.linkTrackEvents = 'event33';
            s.events = 'event33';
            s.eVar38 = s.pageName;
            s.eVar56 = 'linkedin share';
            s.tl(this, 'o', s.eVar56);
            s.linkTrackVars = '';
            s.linkTrackEvents = '';
            s.events = '';
            s.eVar56 = '';
          } catch (e) {}
        });
      },
      2108795,
      495377
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  var citiData = window.citiData || {};
                  citiData.SCInfo = window.citiData.SCInfo || {};
                  if (citiData.cardsCookie) return citiData.cardsCookie;
                  else if (citiData.SCInfo.cardsCookie) return citiData.SCInfo.cardsCookie;
                  else {
                    var CBOLCookieValue = document.cookie.replace(
                      /(?:(?:^|.*;\s*)CBOLECM\s*=\s*([^;]*).*$)|^.*$/,
                      '$1'
                    );
                    var MarketingCookieValue = document.cookie.replace(
                      /(?:(?:^|.*;\s*)MarketingECM\s*=\s*([^;]*).*$)|^.*$/,
                      '$1'
                    );
                    return CBOLCookieValue || MarketingCookieValue || '';
                  }
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_cardsCookie_ECM',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '45320' }
          );
        }, 45320);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.pageLanguage;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_pageLanguage',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15574' }
          );
        }, 15574);
      },
      -1,
      -1
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['customDownload'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,eVar13';
            s.linkTrackEvents = 'event47';
            s.events = 'event47';
            s.eVar38 = citiData.pageName;
            s.eVar13 = citiData.downloadName;
            s.tl(this, 'd', s.eVar13);
            s.eVar13 = '';
          } catch (e) {}
        });
      },
      2923041,
      512346
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  var prodstring = '';
                  if (citiData.prodCat) {
                    var cat = citiData.prodCat.split(',');
                    var pname = citiData.prodName.split(',');
                    var len1 = cat.length;
                    var len2 = cat.length + 1;
                    for (i = 0; i < len1; i++)
                      if (prodstring == '') prodstring = prodstring + pname[i] + ';' + cat[i];
                      else prodstring = prodstring + ',' + pname[i] + ';' + cat[i];
                  } else if (citiData.prodName) prodstring = ';' + citiData.prodName;
                  return prodstring;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.afterElementsDownloadedTrigger,
              dataDefName: 'citiData_prodString',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '26439' }
          );
        }, 26439);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.siteSection3;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_siteSection3',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17010' }
          );
        }, 17010);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['display_mortgage_refinance_lead_confirmation'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          new Image().src = 'https://pubads.g.doubleclick.net/activity;xsp=4630073;ord=1?';
        });
      },
      3358793,
      657690
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.country;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_country',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15573' }
          );
        }, 15573);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.pageType;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_pageType',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '34378' }
          );
        }, 34378);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.pageCat;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_pageCat',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17015' }
          );
        }, 17015);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.domain;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_domain',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '19052' }
          );
        }, 19052);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.citiProducts;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_citiProducts',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '26401' }
          );
        }, 26401);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.custProfString;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_custProfString',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '26399' }
          );
        }, 26399);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.prospectID;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_prospectID',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '46012' }
          );
        }, 46012);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.selfServCompDetail;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_selfServCompDetail',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '34377' }
          );
        }, 34377);
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        window.JSON.flatten = function (origData) {
          var data = Object.assign({}, origData);
          var result = {};
          function recurse (cur, prop) {
            if (Object(cur) !== cur) result[prop] = cur;
            else if (Array.isArray(cur)) {
              for (var i = 0, l = cur.length; i < l; i++)
                recurse(cur[i], prop ? prop + '_' + i : '' + i);
              if (l == 0) result[prop] = [];
            } else {
              var isEmpty = true;
              for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + '_' + p : p);
              }
              if (isEmpty) result[prop] = {};
            }
          }
          if (data.site_events && Array.isArray(data.site_events)) {
            result.site_events = data.site_events.join();
            console.log('site_events detected');
          }
          if (
            (data.products && Array.isArray(data.products)) ||
            (data.banner_array && Array.isArray(data.banner_array))
          ) {
            console.log('product data detected');
            data.products_formatted = '';
            data.products_details = '';
            data.products_acq_codes = '';
            data.promo_codes = '';
            if (data.products) {
              var productsLength = data.products.length || 0;
              for (let i = 0; i < productsLength; i++) {
                let prodString, catString, acqString, pdString, productNameString, promoCodeString;
                catString = data.products[i].category || 'noCat';
                acqString = data.products[i].acquisition_source_code || '';
                promoCodeString = data.products[i].promo_code || '';
                pdString = data.products[i].product_details || '';
                productNameString = data.products[i].product_name || 'no product_name';
                prodString =
                  catString +
                  ';' +
                  productNameString +
                  ';;;;eVar38=' +
                  acqString +
                  '|eVar131=' +
                  promoCodeString +
                  '|eVar128=' +
                  pdString +
                  ',';
                data.products_formatted = data.products_formatted + prodString;
                data.products_acq_codes = data.products_acq_codes + acqString + ',';
                data.products_details = data.products_details + pdString + ',';
                data.promo_codes = data.promo_codes + promoCodeString + ',';
              }
            }
            if (data.banner_array) {
              var bannerArrayLength = data.banner_array.length || 0;
              for (var i = 0; i < bannerArrayLength; i++) {
                let prodString,
                  catString,
                  acqString,
                  pdString,
                  productNameString,
                  cmsContentIdString,
                  scenarioIdString,
                  bannerCreativeString,
                  v127string,
                  promoCodeString;
                catString = data.banner_array[i].category || 'noCat';
                acqString = data.banner_array[i].acquisition_source_code || '';
                promoCodeString = data.banner_array[i].promo_code || '';
                pdString = data.banner_array[i].product_details || '';
                cmsContentIdString = data.banner_array[i].cms_contentID || '';
                scenarioIdString = data.banner_array[i].scenarioID || '';
                bannerCreativeString = data.banner_array[i].banner_creative || '';
                v127string = data.banner_array[i].positionID || '';
                v127string = v127string + '~' + data.banner_array[i].banner_layout || '';
                v127string = v127string + '~' + data.banner_array[i].banner_title || '';
                productNameString = data.banner_array[i].product_name || 'no product field';
                prodString =
                  catString +
                  ';' +
                  productNameString +
                  ';;;;eVar38=' +
                  acqString +
                  '|eVar131=' +
                  promoCodeString +
                  '|eVar125=contentID=' +
                  cmsContentIdString +
                  '~scenarioID=' +
                  scenarioIdString +
                  '|eVar126=' +
                  bannerCreativeString +
                  '|eVar127=' +
                  v127string +
                  '|eVar128=' +
                  pdString +
                  ',';
                data.products_formatted = data.products_formatted + prodString;
                data.products_acq_codes = data.products_acq_codes + acqString + ',';
                data.products_details = data.products_details + pdString + ',';
                data.promo_codes = data.promo_codes + promoCodeString + ',';
              }
              data.banner_array = 'formatted';
            }
            delete data.products;
            _dl.promo_codes = data.promo_codes;
            _dl.products_acq_codes = data.products_acq_codes;
            _dl.products_details = data.products_details;
          }
          if (data.rf_response) delete data.rf_response;
          recurse(data, '');
          return result;
        };
        var s_tms_trackView_dl = function () {
          if (window.s_tms) {
            s_tms.contextData = window._flat_dl;
            s_tms.products = _flat_dl.products_formatted;
            s_tms.t();
          } else console.log('s_tms_trackView_dl but no s_tms');
        };
        var s_tms_trackEvent_dl = function (eventName) {
          if (window.s_tms) {
            s_tms.linkTrackVars = '';
            var x;
            for (x in window._flat_dl) {
              s_tms.contextData[x] = window._flat_dl[x];
              s_tms.linkTrackVars += 'contextData.' + x + ',';
            }
            s_tms.products = _flat_dl.products_formatted;
            s_tms.linkTrackVars += 'products';
            s_tms.tl(this, 'o', eventName);
          } else console.log('s_tms_trackEvent_dl(' + eventName + '), but no s_tms');
        };
        window._trackAnalytics = function (dataObj) {
          dataObj = dataObj || window._dl || {};
          window._dl = dataObj;
          var action_type = window._dl.action_type || '';
          window._flat_dl = JSON.flatten(dataObj);
          if (action_type.length > 0)
            if (action_type.indexOf('event') > -1) {
              var eventName = _flat_dl.event_name || _flat_dl.page_inter || 'unnamedEvent';
              if (window.s_tms) s_tms_trackEvent_dl(eventName);
              else console.log('trackAnalytics event but no s_tms');
              Bootstrapper.ensEvent.trigger('na_tms_custom_event');
            } else {
              if (action_type.indexOf('view') > -1) {
                if (window.s_tms) s_tms_trackView_dl();
                else console.log('trackAnalytics view but no s_tms');
                Bootstrapper.ensEvent.trigger('na_tms_page_view');
              }
            }
          else console.log('trackAnalytics() missing _dl.action_type');
        };
      },
      3352748,
      [3375998],
      578262,
      [593103]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.cardSiteID;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_cardSiteID',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17013' }
          );
        }, 17013);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  window.citiData = window.citiData || {};
                  var lob = window.citiData.lob || '';
                  lob = lob.replace(/\d+/g, '');
                  return lob;
                } catch (e) {
                  return 'undefined';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_lob',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '26398' }
          );
        }, 26398);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.cyotaID;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_cyotaID',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '21530' }
          );
        }, 21530);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.custProdString;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_custProdString',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '26400' }
          );
        }, 26400);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.raType;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_raType',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '23081' }
          );
        }, 23081);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.chckCrdAppStusResult;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_chckCrdAppStusResult',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17022' }
          );
        }, 17022);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.raResponse;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_raResponse',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '23082' }
          );
        }, 23082);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.testPop;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_testPop',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '47875' }
          );
        }, 47875);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['tileOfferAcceptClick'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          s.linkTrackVars = 'events,products';
          s.linkTrackEvents = 'event85';
          s.events = 'event85';
          s.products = citiData.tile;
          s.tl(this, 'o', 'tile Offer Accept click');
          s.products = '';
          s.events = '';
        });
      },
      3399158,
      663315
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.ccsid;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_ccsid',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '21528' }
          );
        }, 21528);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.pageName;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_pageName',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15567' }
          );
        }, 15567);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.siteSection1;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_siteSection1',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17008' }
          );
        }, 17008);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return window.s.eVar48;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'atlas_app_status',
              collection: 'app_funnel_track',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17167' }
          );
        }, 17167);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.selfServDetail;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_selfServDetail',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '20314' }
          );
        }, 20314);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.userType;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_userType',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '21532' }
          );
        }, 21532);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.errorCode;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_errorCode',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '20197' }
          );
        }, 20197);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.lastLoginDate;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_lastLoginDate',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '26402' }
          );
        }, 26402);
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        try {
          $('a:contains("Share Your Screen")').click(function () {
            citiData.custLink = 'Share Your Screen link click';
            Bootstrapper.ensEvent.trigger('customLinkClick');
          });
        } catch (err) {}
      },
      2431984,
      [2904126],
      521100,
      [490141]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.bankAppStatus;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_bankAppStatus',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '43436' }
          );
        }, 43436);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['bannerImpression'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,list3';
            s.linkTrackEvents = 'event92';
            s.events = 'event92';
            s.eVar38 = citiData.pageName;
            s.list3 = window.citiData.offerList;
            s.tl(this, 'o', 'banner impression');
          } catch (e) {}
        });
      },
      2776548,
      584566
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.siteSection3;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_siteSection3',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15572' }
          );
        }, 15572);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.selfServType;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_selfServType',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '19608' }
          );
        }, 19608);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.channel;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_channel',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15569' }
          );
        }, 15569);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['facebookShare'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            s.linkTrackVars = 'events,eVar38,eVar56';
            s.linkTrackEvents = 'event33';
            s.events = 'event33';
            s.eVar38 = s.pageName;
            s.eVar56 = 'facebook share';
            s.tl(this, 'o', s.eVar56);
            s.linkTrackVars = '';
            s.linkTrackEvents = '';
            s.events = '';
            s.eVar56 = '';
          } catch (e) {}
        });
      },
      2108797,
      495374
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.bankProdSourceCode;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_bankProdSourceCode',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '43435' }
          );
        }, 43435);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.userChoice;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_userChoice',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '26437' }
          );
        }, 26437);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.globalInfo.CUUID.replace(/%2D/g, '-');
                } catch (e) {
                  return 'error';
                }
              },
              load: 'session',
              dataDefName: 'citiData_CUUID',
              collection: 'page_variables',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7830' }
          );
        }, 7830);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.hier1;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_hier1',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '18788' }
          );
        }, 18788);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return window._pid;
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'atlas_var_pid',
              collection: 'app_funnel_track',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17165' }
          );
        }, 17165);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['display_mortgage_refinance_lead_confirmation'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          new Image().src = 'https://pubads.g.doubleclick.net/activity;xsp=4369426;ord=1?';
        });
      },
      3358795,
      657685
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.cardProdSourceCode;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_cardProdSourceCode',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17018' }
          );
        }, 17018);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.dateActivated;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_dateActivated',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '26403' }
          );
        }, 26403);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['twitterShare'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            s.linkTrackVars = 'events,eVar38,eVar56';
            s.linkTrackEvents = 'event33';
            s.events = 'event33';
            s.eVar38 = s.pageName;
            s.eVar56 = 'twitter share';
            s.tl(this, 'o', s.eVar56);
            s.linkTrackVars = '';
            s.linkTrackEvents = '';
            s.events = '';
            s.eVar56 = '';
          } catch (e) {}
        });
      },
      2108796,
      495375
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['oneclickPaperlessandSelfServ'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,eVar70,eVar71,eVar72';
            s.linkTrackEvents = 'event79,event14';
            s.events = 'event79,event14';
            s.eVar38 = citiData.pageName;
            s.eVar70 = window.citiData.selfServType;
            s.eVar71 = window.citiData.selfServDetail;
            s.eVar72 = window.citiData.selfServCompDetail;
            s.tl(this, 'o', s.eVar70);
            window.citiData.selfServType = '';
            window.citiData.selfServDetail = '';
            window.citiData.selfServCompDetail = '';
          } catch (e) {}
        });
      },
      2670646,
      573017
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.CUUID;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_CUUID',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15565' }
          );
        }, 15565);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['selfServiceComplete'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,eVar70,eVar71,eVar72';
            s.linkTrackEvents = 'event79';
            s.events = 'event79';
            s.eVar38 = citiData.pageName;
            s.eVar70 = window.citiData.selfServType;
            s.eVar71 = window.citiData.selfServDetail;
            s.eVar72 = window.citiData.selfServCompDetail;
            s.tl(this, 'o', s.eVar70);
            s.eVar70 = '';
            s.eVar71 = '';
            s.eVar72 = '';
          } catch (e) {}
        });
      },
      2923043,
      522574
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['pebblepost_event'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          window._pp = window._pp || [];
          var citiData = window.citiData || {};
          _pp.siteId = '1560';
          _pp.siteUId = citiData.CUUID || citiData.cuuid || '';
          _pp.orderValue = window.sessionStorage.cmv || '';
          _pp.orderId = window.citiData.appID || '';
          _pp.tags = '';
          if (document.cookie.includes('ECM')) _pp.tags = 'CUSTOMER';
          _pp.endUrl = '/application/' + citiData.bankProdSourceCode + '/' + citiData.pageName;
          (function () {
            var ppjs = document.createElement('script');
            ppjs.type = 'text/javascript';
            ppjs.async = true;
            ppjs.src =
              ('https:' == document.location.protocol ? 'https:' : 'http:') +
              '//cdn.pbbl.co/r/' +
              _pp.siteId +
              '.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ppjs, s);
          })();
        });
      },
      3352749,
      652314
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.siteSection1;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_siteSection1',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15570' }
          );
        }, 15570);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.siteSection4;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_siteSection4',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15702' }
          );
        }, 15702);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.siteSearchCount;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_siteSearchCount',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '21533' }
          );
        }, 21533);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['customError'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,eVar4';
            s.linkTrackEvents = 'event2';
            s.events = 'event2';
            s.eVar38 = citiData.pageName;
            s.eVar4 = citiData.errorCode;
            s.tl(this, 'o', s.eVar4);
            window.citiData.errorCode = '';
            window.citiData.events = '';
          } catch (e) {}
        });
      },
      2801138,
      588511
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.prodID;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_prodID',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17019' }
          );
        }, 17019);
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        window.AppMeasurement = function (r) {
          const $___old_d01840913311f75b = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_d01840913311f75b)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_f41e7bff56ded01f.userAgent
              ));
            return function () {
              var a = this;
              a.version = '2.9.0';
              var k = window;
              k.s_c_in || ((k.s_c_il = []), (k.s_c_in = 0));
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
                  ((b = b ? parseInt(b) : 2),
                  (b = 2 < b ? b : 2),
                  (d = c.lastIndexOf('.')),
                  0 <= d)
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
                      ((d = new Date()),
                      (g = d.getYear()),
                      d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
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
                f &&
                  (a.L.push({ m: c, a: b, t: e }), a.ca || setTimeout(a.delayReady, a.maxDelay));
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
                      : 'marketingCloudOrgID' == e &&
                        a.visitor &&
                        (g = a.visitor.marketingCloudOrgID));
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
                  ((e =
                    a.protocol && 1 < a.protocol.length
                      ? a.protocol
                      : b.protocol
                      ? b.protocol
                      : ''),
                  (f = b.pathname.lastIndexOf('/')),
                  (d =
                    (e ? e + '//' : '') +
                    (a.host ? a.host : b.host ? b.host : '') +
                    ('/' != d.substring(0, 1)
                      ? b.pathname.substring(0, 0 > f ? 0 : f) + '/'
                      : '') +
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
                  if ((c = c.parentElement ? c.parentElement : c.parentNode))
                    (b = a.C(c)), (d = a.M(c));
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
                        : a.linkInternalFilters &&
                          (g = a.linkInternalFilters.toLowerCase().split(',')),
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
                  d = k['AppMeasurement_Module_' + c]
                    ? new k['AppMeasurement_Module_' + c](a)
                    : {};
                  a.Q[c] = a[c] = d;
                  d.Za = function () {
                    return d.eb;
                  };
                  d.gb = function (b) {
                    if ((d.eb = b))
                      (a[c + '_onLoad'] = b), a.ba(c + '_onLoad', [a, d], 1) || b(a, d);
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
                    ((a.Y = !0),
                    a.marketingCloudVisitorID ? (a.S = !0) : b.getVisitorValues(a.jb)),
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
                return (
                  (a.AudienceManagement && a.AudienceManagement.isReady()) || 0 != a.usePostbacks
                );
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
                        ((a.la[d.id] = new Image()),
                        (a.la[d.id].alt = ''),
                        (a.la[d.id].src = d.c));
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
                const $___old_d9272ba359ffdf77 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'XMLHttpRequest'
                );
                try {
                  if ($___old_d9272ba359ffdf77)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___stub_a1115fdf2e39e319.XMLHttpRequest
                    ));
                  return function () {
                    var b, d, f;
                    a.bb() &&
                      2047 < c.length &&
                      ('undefined' != typeof XMLHttpRequest &&
                        ((b = new XMLHttpRequest()), 'withCredentials' in b ? (d = 1) : (b = 0)),
                      b ||
                        'undefined' == typeof XDomainRequest ||
                        ((b = new XDomainRequest()), (d = 2)),
                      b &&
                        ((a.AudienceManagement && a.AudienceManagement.isReady()) ||
                          0 != a.usePostbacks) &&
                        (a.V ? (b.va = !0) : (b = 0)));
                    !b && a.Oa && (c = c.substring(0, 2047));
                    !b &&
                      a.d.createElement &&
                      (0 != a.usePostbacks ||
                        (a.AudienceManagement && a.AudienceManagement.isReady())) &&
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
                      1 == d
                        ? (b.open('POST', f, !0), b.send(e))
                        : 2 == d && (b.open('POST', f), b.send(e));
                    } else if (((b.src = c), 3 == d)) {
                      if (a.Ha)
                        try {
                          f.removeChild(a.Ha);
                        } catch (g) {}
                      f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                      a.Ha = a.A;
                    }
                    b.F = setTimeout(function () {
                      b.F &&
                        (b.complete ? b.na() : (a.trackOffline && b.abort && b.abort(), b.Ba()));
                    }, 5000);
                    a.ob = c;
                    a.A = k['s_i_' + a.replace(a.account, ',', '_')] = b;
                    if ((a.useForcedLinkTracking && a.K) || a.v)
                      a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
                        (a.aa = setTimeout(a.Z, a.forcedLinkTrackingTimeout));
                  }.apply(this, arguments);
                } finally {
                  if ($___old_d9272ba359ffdf77)
                    ({}.constructor.defineProperty(
                      window,
                      'XMLHttpRequest',
                      $___old_d9272ba359ffdf77
                    ));
                }
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
                    if (d.lmq)
                      for (b = 0; b < d.lmq.length; b++) (f = d.lmq[b]), a.loadModule(f.n);
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
              a.linkDownloadFileTypes =
                'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
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
                a.v &&
                  ('function' == typeof a.v
                    ? a.v()
                    : a.k && a.k.href && (a.d.location = a.k.href));
                a.k = a.K = a.v = 0;
              };
              a.Ma = function () {
                const $___old_9eced24bb35ea0ef = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_9eced24bb35ea0ef)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_f41e7bff56ded01f.userAgent
                    ));
                  return function () {
                    a.b = a.d.body;
                    a.b
                      ? ((a.u = function (c) {
                          var b, d, f, e, g;
                          if (
                            !(
                              (a.d && a.d.getElementById('cppXYctnr')) ||
                              (c && c['s_fe_' + a._in])
                            )
                          ) {
                            if (a.wa)
                              if (a.useForcedLinkTracking)
                                a.b.removeEventListener('click', a.u, !1);
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
                  }.apply(this, arguments);
                } finally {
                  if ($___old_9eced24bb35ea0ef)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_9eced24bb35ea0ef
                    ));
                }
              };
              a.qb();
              a.Qb ||
                (r
                  ? a.setAccount(r)
                  : a.D('Error, missing Report Suite ID in AppMeasurement initialization'),
                a.Ma(),
                a.loadModule('ActivityMap'));
            }.apply(this, arguments);
          } finally {
            if ($___old_d01840913311f75b)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_d01840913311f75b
              ));
          }
        };
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
        var rsid = (function () {
          rsidAry = [];
          if (
            ~window.location.hostname.indexOf('test') ||
            window.location.href.indexOf('localhost') > 1 ||
            ~window.location.hostname.indexOf('citigrppfmstage') ||
            ~window.location.hostname.indexOf('usmktdit') ||
            ~window.location.hostname.indexOf('uat') ||
            ~window.location.hostname.indexOf('staging') ||
            ~window.location.hostname.indexOf('qa') ||
            ~window.location.hostname.indexOf('prev') ||
            ~window.location.hostname.indexOf('gtcrd-cbllw01lab') ||
            ~window.location.hostname.indexOf('gtcrd-cbllw04lab') ||
            ~window.location.hostname.indexOf('accountonline-uat.bridgetrack.com')
          )
            rsidAry.push('citiuscombdev');
          else if (
            /dit.?.?.?\./.test(window.location.hostname) ||
            /sit.?.?.?\./.test(window.location.hostname)
          )
            rsidAry.push('citiuscombdev');
          else rsidAry.push('citiuscombprod');
          rsidAry = rsidAry.join(',');
          return rsidAry;
        })();
        window.s_tms = new AppMeasurement(rsid);
        s_tms.currencyCode = 'USD';
        s_tms.trackDownloadLinks = false;
        s_tms.trackExternalLinks = false;
        s_tms.trackInlineStats = false;
        s_tms.linkDownloadFileTypes =
          'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,ofx,csv,qif,qfx';
        s_tms.linkInternalFilters =
          'javascript:,citi.com,citibank.com,citicards.com,accountonline.com,citi.bridgetrack.com,accountonline.bridgetrack.com,citipricerewind.com,myhomeequity.com,citibankonline.com';
        s_tms.linkExternalFilters = 'facebook.com,twitter.co,youtube.com,linkedin.com';
        s_tms.linkLeaveQueryString = false;
        s_tms.linkTrackVars = '';
        s_tms.linkTrackEvents = 'None';
        s_tms.visitor = typeof window.adobe_visitor === 'object' ? window.adobe_visitor : {};
        s_tms.trackingServer = 'metrics.citi.com';
        s_tms.trackingServerSecure = 'metrics1.citi.com';
        s_tms.usePlugins = true;
        s_tms.apl = new Function(
          'l',
          'v',
          'd',
          'u',
          '' +
            "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a." +
            'length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas' +
            'e()));}}if(!m)l=l?l+d+v:v;return l'
        );
        function s_getLoadTime () {
          if (!window.s_loadT) {
            var b = new Date().getTime(),
              o = window.performance ? performance.timing : 0,
              a = o ? o.requestStart : window.inHeadTS || 0;
            s_loadT = a ? Math.round((b - a) / 100) : '';
          }
          return s_loadT;
        }
        s_tms.getNewRepeat = new Function(
          'd',
          'cn',
          '' +
            'var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:' +
            "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" +
            "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" +
            "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" +
            "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"
        );
        s_tms.split = new Function(
          'l',
          'd',
          '' +
            'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x' +
            '++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
        );
        s_tms.getPercentPageViewed = function (pid, ch) {
          var s = this,
            a = s.c_r('s_ppv');
          a = -1 < a.indexOf(',') ? a.split(',') : [];
          a[0] = s.unescape(a[0]);
          pid = pid ? pid : s.pageName ? s.pageName : document.location.href;
          s.ppvChange = ch ? ch : !0;
          if ('undefined' === typeof s.linkType || 'o' !== s.linkType)
            (s.ppvID && s.ppvID === pid) ||
              ((s.ppvID = pid), s.c_w('s_ppv', ''), s.handlePPVevents()),
              s.p_fo('s_gppvLoad') &&
                window.addEventListener &&
                (window.addEventListener('load', s.handlePPVevents, !1),
                window.addEventListener('click', s.handlePPVevents, !1),
                window.addEventListener('scroll', s.handlePPVevents, !1),
                window.addEventListener('resize', s.handlePPVevents, !1)),
              (s._ppvPreviousPage = a[0] ? a[0] : ''),
              (s._ppvHighestPercentViewed = a[1] ? a[1] : ''),
              (s._ppvInitialPercentViewed = a[2] ? a[2] : ''),
              (s._ppvHighestPixelsSeen = a[3] ? a[3] : '');
        };
        s_tms.handlePPVevents = function () {
          if (s_c_il) {
            for (var b = 0, d = s_c_il.length; b < d; b++)
              if ('undefined' != typeof s_c_il[b] && s_c_il[b]._c && 's_c' == s_c_il[b]._c) {
                var a = s_c_il[b];
                break;
              }
            if (a && a.ppvID) {
              var f = Math.max(
                Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
                Math.max(document.body.clientHeight, document.documentElement.clientHeight)
              );
              b =
                (window.pageYOffset ||
                  window.document.documentElement.scrollTop ||
                  window.document.body.scrollTop) +
                (window.innerHeight ||
                  document.documentElement.clientHeight ||
                  document.body.clientHeight);
              d = Math.min(Math.round((b / f) * 100), 100);
              var e = '';
              !a.c_r('s_tp') ||
              a.unescape(a.c_r('s_ppv').split(',')[0]) !== a.ppvID ||
              (1 == a.ppvChange && a.c_r('s_tp') && f != a.c_r('s_tp'))
                ? (a.c_w('s_tp', f), a.c_w('s_ppv', ''))
                : (e = a.c_r('s_ppv'));
              var c = e && -1 < e.indexOf(',') ? e.split(',', 4) : [];
              f = 0 < c.length ? c[0] : escape(a.ppvID);
              var g = 1 < c.length ? parseInt(c[1]) : d,
                h = 2 < c.length ? parseInt(c[2]) : d;
              c = 3 < c.length ? parseInt(c[3]) : b;
              0 < d && (e = f + ',' + (d > g ? d : g) + ',' + h + ',' + (b > c ? b : c));
              a.c_w('s_ppv', e);
            }
          }
        };
        s_tms.p_fo = function (on) {
          var s = this;
          s.__fo || (s.__fo = {});
          if (s.__fo[on]) return !1;
          s.__fo[on] = {};
          return !0;
        };
        s_tms.getPreviousValue = new Function(
          'v',
          'c',
          'el',
          '' +
            "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" +
            "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" +
            '){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)' +
            ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" +
            "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"
        );
        s_tms.getQueryParam = new Function(
          'p',
          'd',
          'u',
          '' +
            "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati" +
            "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p" +
            ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-" +
            "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i=" +
            '=p.length?i:i+1)}return v'
        );
        s_tms.p_gpv = new Function(
          'k',
          'u',
          '' +
            "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v" +
            "=s.pt(q,'&','p_gvf',k)}return v"
        );
        s_tms.p_gvf = new Function(
          't',
          'k',
          '' +
            "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" +
            "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." +
            "epa(v)}return ''"
        );
        s_tms._tpDST = {
          2018: '3/11,11/4',
          2019: '3/10,11/3',
          2020: '3/8,11/1',
          2021: '3/14,11/7',
          2022: '3/13,11/6',
          2023: '3/12,11/5',
          2024: '3/10,11/3',
          2025: '3/9,11/2',
          2026: '3/8,11/1',
        };
        s_tms.getTimeParting = new Function(
          'h',
          'z',
          '' +
            "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont" +
            "h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['" +
            "Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda" +
            "y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp" +
            "DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea" +
            "r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)" +
            "{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT" +
            'imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d' +
            ".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P" +
            "M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}"
        );
        s_tms.getValOnce = new Function(
          'v',
          'c',
          'e',
          't',
          '' +
            "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000" +
            '0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e' +
            "==0?0:a);}return v==k?'':v"
        );
        s_tms.getVisitNum = new Function(
          'tp',
          'c',
          'c2',
          '' +
            "var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}" +
            "if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi" +
            "me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!" +
            "c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn=" +
            "'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi" +
            "t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els" +
            "e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri" +
            "ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);" +
            "s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)" +
            ";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}"
        );
        s_tms.dimo = new Function('m', 'y', '' + 'var d=new Date(y,m+1,0);return d.getDate();');
        s_tms.endof = new Function(
          'x',
          '' +
            'var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x==' +
            "'m'){d=s_tms.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(" +
            "x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return " +
            't;'
        );
        s_tms.doPlugins = function (s_tms) {
          var tp = s_tms.getTimeParting('n', '-5');
          s_tms.prop7 = tp;
          s_tms.eVar7 = tp;
          s_tms.eVar11 = s_tms.getNewRepeat(30);
          s_tms.eVar23 = s_tms.getPreviousValue(s_tms.contextData.app_hierarchy, 'gpv_pn') || '';
          s_tms.prop20 = s_tms.eVar23;
          var citiDataguid = '';
          if (window.citiData) {
            s_tms.prop65 = citiData.pageName || 'na';
            citiDataguid = citiData.guid;
          }
          if (_dl) {
            s_tms.eVar99 = _dl.products_acq_codes || '';
            s_tms.eVar133 = _dl.promo_codes || '';
            s_tms.eVar85 = _dl.guid || citiDataguid || '';
          }
        };
      },
      3375998,
      [3277348, 3399126, 3381390, 3039001, 3352745],
      593103,
      [358910, 531459, 552021, 578278, 624610]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var ids = [],
          dataLayerNs = '' || 'dataLayer',
          hasExecutedBaseCode = false;
        ids.push('DC-6260004');
        ids.push('DC-6269322');
        ids.push('DC-6256710');
        window[dataLayerNs] = window[dataLayerNs] || [];
        if (!window.gtag) {
          window.gtag = function () {
            window[dataLayerNs].push(arguments);
          };
          gtag('js', new Date());
        }
        Bootstrapper.gtag = Bootstrapper.gtag || {};
        Bootstrapper.gtag.handleEvents = function () {
          for (var i = 0; i < Bootstrapper.gtag.events.length; i++) Bootstrapper.gtag.events[i]();
          Bootstrapper.gtag.events.splice(0, Bootstrapper.gtag.events.length);
        };
        Bootstrapper.gtag.events = Bootstrapper.gtag.events || [];
        Bootstrapper.gtag.events.push = function () {
          Array.prototype.push.apply(this, arguments);
          if (hasExecutedBaseCode) Bootstrapper.gtag.handleEvents();
          return;
        };
        Bootstrapper.loadScriptCallback(
          '//www.googletagmanager.com/gtag/js?id=' +
            ids[0] +
            (dataLayerNs !== 'dataLayer' ? '&l=' + dataLayerNs : ''),
          function () {
            var configProperties = {};
            if ('') configProperties.linker = { domains: ''.split(',') };
            for (var i = 0; i < ids.length; i++) gtag('config', ids[i], configProperties);
            hasExecutedBaseCode = true;
            Bootstrapper.gtag.handleEvents();
          }
        );
      },
      3221775,
      639140
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.appID;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_appID',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17020' }
          );
        }, 17020);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        (function () {
          var url1 = document.location.pathname;
          if (url1.indexOf('/credit-cards/home') == -1)
            if (citiData.pageName !== 'Homepage') {
              window.bk_async = function () {
                bk_use_multiple_iframes = true;
                bk_allow_multiple_calls = true;
                bk_addPageCtx('language', citiData.pageLanguage);
                bk_addPageCtx('product', citiData.custProdString);
                bk_addPageCtx('event', citiData.eventList);
                bk_addPageCtx('category', citiData.pageCat);
                bk_addPageCtx('page', citiData.pageName);
                bk_addPageCtx('section1', citiData.siteSection1);
                bk_addPageCtx('section2', citiData.siteSection2);
                bk_addPageCtx('section3', citiData.siteSection3);
                bk_addPageCtx('section4', citiData.siteSection4);
                bk_addPageCtx('bankappstatus', citiData.bankAppStatus);
                bk_addPageCtx('productID', citiData.prodID);
                BKTAG.doTag(63068, 10);
              };
              (function () {
                var scripts = document.getElementsByTagName('script')[0];
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://tags.bkrtx.com/js/bk-coretag.js';
                scripts.parentNode.insertBefore(s, scripts);
              })();
            }
        }.call(window));
      },
      3183206,
      542251
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  if (citiData.cuuid) return citiData.cuuid;
                  else if (citiData.CUUID) return citiData.CUUID;
                  else if (Bootstrapper.data.extract('CUUID', 'cookie').length > 0)
                    return Bootstrapper.data.extract('CUUID', 'cookie');
                  else if (!!citiData && !!citiData.globalInfo && !!citiData.globalInfo.CUUID)
                    return citiData.globalInfo.CUUID;
                  else if (!!citiData && !!citiData.SCInfo && !!citiData.SCInfo.cuuid)
                    return citiData.SCInfo.cuuid;
                  else if (Bootstrapper.data.extract('17005', 'cookie').length > 0)
                    return Bootstrapper.data.extract('17005', 'cookie');
                  else if (getCookie('CUUID')) return getCookie('CUUID');
                  else if (getCookie('cuuid')) return getCookie('cuuid');
                  else return '';
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_dd_CUUID',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17005' }
          );
        }, 17005);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.localpageName;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_localPageName',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '19051' }
          );
        }, 19051);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['signOnAttempt'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38';
            s.linkTrackEvents = 'event29';
            s.events = 'event29';
            s.eVar38 = citiData.pageName;
            s.tl(this, 'o', 'sign on attempt');
            s.events = '';
          } catch (e) {}
        });
      },
      3161673,
      632449
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['tileCTAClick'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          s.linkTrackVars = 'events,products';
          s.linkTrackEvents = 'event46';
          s.events = 'event46';
          s.products = citiData.tile;
          s.tl(this, 'o', 'tile CTA click');
          s.events = '';
          s.products = '';
        });
      },
      3399161,
      663310
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['display_mortgage_refinance_lead_confirmation'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          new Image().src =
            'https://pubads.g.doubleclick.net/activity;dc_iu=/1019096/DFPAudiencePixel;ord=1;dc_seg=763022796?';
        });
      },
      3358792,
      657681
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['alertCancel'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,eVar70,eVar71,eVar72';
            s.linkTrackEvents = 'event78,event79';
            s.events = 'event79,event78';
            s.eVar38 = citiData.pageName;
            s.eVar70 = window.citiData.selfServType;
            s.eVar71 = window.citiData.selfServDetail;
            s.eVar72 = window.citiData.selfServCompDetail;
            s.tl(this, 'o', s.eVar70);
            s.eVar70 = '';
            s.eVar71 = '';
            s.eVar72 = '';
          } catch (e) {}
        });
      },
      2923042,
      522572
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.channel;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_channel',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17007' }
          );
        }, 17007);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return citiData.toolType;
              },
              transform: function (val) {
                return val ? val : '';
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'toolType',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '54080' }
          );
        }, 54080);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return document.referrer;
              },
              transform: function (val) {
                return val ? val : '';
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'referring url',
              collection: 'Page',
              source: 'Manage',
              priv: 'false',
            },
            { id: '54782' }
          );
        }, 54782);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.on(
          'click',
          '#mgmp_referralStatusTable.btnmgm-sendReminderBtnmgm-floatRightbutton',
          function () {
            Bootstrapper.ensEvent.trigger('SGSendReminderEvent', this);
          },
          true
        );
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function pageName () {
                try {
                  var citiData = window.citiData || {};
                  citiData.SCInfo = window.citiData.SCInfo || {};
                  if (typeof citiData.experianID != 'undefined') return 'experianDefaultPageName';
                  else
                    return citiData.pageName || citiData.SCInfo.pageName || citiData.pageDef || '';
                } catch (e) {
                  return 'e';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_pageName',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17006' }
          );
        }, 17006);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['customLinkClick'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,eVar20';
            s.linkTrackEvents = 'event19';
            s.events = 'event19';
            s.eVar38 = citiData.pageName;
            s.eVar20 = citiData.custLink;
            s.tl(this, 'o', s.eVar20);
            s.eVar20 = '';
          } catch (e) {}
        });
      },
      2904126,
      490141
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function tmsadobeanlaytics () {
                try {
                  var citiData = window.citiData || {};
                  var aaBoolean = citiData.TMSAdobeAnalytics || '';
                  return aaBoolean;
                } catch (e) {
                  return '';
                }
              },
              transform: function (val) {
                return val ? val : '';
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_TMSAdobeAnalytics',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '47535' }
          );
        }, 47535);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['Searchterm'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          var s = window.s;
          var citiData = window.citiData || {};
          if (citiData.eventList == 'siteSearchNull') {
            s.pageName = 'jcbol_common_fullSearch';
            s.linkTrackVars = 'events,eVar38,eVar5,eVar7';
            s.linkTrackEvents = 'event70,event71';
            s.events = 'event70,event71';
            s.eVar38 = 'jcbol_common_fullSearch';
            s.eVar5 = citiData.searchTerm;
            s.eVar7 = citiData.previousPageName;
            s.tl(this, 'o', citiData.eventList);
            console.log('Site Search Null Result');
          }
        });
      },
      2734578,
      580663
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.responsive;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_responsive',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17012' }
          );
        }, 17012);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.ISN;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_ISN',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '18662' }
          );
        }, 18662);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.hier1;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_hier1',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15576' }
          );
        }, 15576);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.pageDef;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_dd_pageDef',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17004' }
          );
        }, 17004);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['clearCardAppComplete'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,eVar27,eVar17,eVar19,eVar90,prop16,prop17';
            s.linkTrackEvents = 'event4';
            s.events = 'event4=-1';
            s.eVar38 = citiData.pageName;
            s.eVar27 = citiData.prodID;
            s.prop17 = citiData.prodID;
            s.eVar17 = citiData.cardProdSourceCode;
            s.prop16 = citiData.cardProdSourceCode;
            s.eVar19 = citiData.cardAppStatus;
            s.eVar90 = citiData.appID;
            s.Products = citiData.prodName;
            s.tl(this, 'o', s.eVar19);
            s.eVar27 = '';
            s.eVar17 = '';
            s.eVar19 = '';
            s.eVar90 = '';
            s.prop16 = '';
            s.prop17 = '';
            s.Products = '';
          } catch (e) {}
        });
      },
      3111536,
      626438
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['display_mortgage_refinance_lead_confirmation'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          new Image().src =
            'https://beacon.krxd.net/event.gif?event_id=M8ZHsbsT&event_type=pageview';
        });
      },
      3358774,
      657688
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.siteSection2;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_siteSection2',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15571' }
          );
        }, 15571);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['tileInteractionClick'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          s.linkTrackVars = 'events,products';
          s.linkTrackEvents = 'event84';
          s.events = 'event84';
          s.products = citiData.tile;
          s.tl(this, 'o', 'tile CTA click');
          s.products = '';
          s.events = '';
        });
      },
      3399160,
      663313
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['display_mortgage_refinance_lead_confirmation'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          Bootstrapper.data.resolve(['46013', '46012', '17006'], function (
            manage_46013,
            manage_46012,
            manage_17006
          ) {
            var ensVar0 = function () {
              return;
            };
            var ensVar1 = function () {
              return manage_46013;
            };
            var ensVar2 = function () {
              return manage_46012;
            };
            var ensVar3 = function () {
              return manage_17006;
            };
            var countingMethod = 'unique';
            var dl = 'dataLayer';
            var floodLightId = 'DC-6256710';
            var send_to = [];
            if (floodLightId) {
              var receiver =
                floodLightId + '/' + 'cmi-p000' + '/' + 'mortg006' + '+' + countingMethod;
              send_to.push(receiver);
            } else {
              var ids = [];
              for (var i in ids) {
                var receiver = ids[i] + '/' + 'cmi-p000' + '/' + 'mortg006' + '+' + countingMethod;
                send_to.push(receiver);
              }
            }
            var allow_custom_scripts = 'true' == 'true' ? true : false;
            var eventObj = { allow_custom_scripts: allow_custom_scripts, send_to: send_to };
            if (countingMethod === 'per_session') if ('') eventObj.session_id = '';
            if (countingMethod === 'transactions') {
              if ('') eventObj.value = '';
              if (ensVar0.call(this)) eventObj.transaction_id = ensVar0.call(this);
              if ('') eventObj.quantity = '';
            }
            eventObj['u1'] = [ensVar1.call(this)];
            eventObj['u3'] = [ensVar2.call(this)];
            eventObj['u4'] = [ensVar3.call(this)];
            window[dl] = window[dl] || [];
            window.gtag =
              window.gtag ||
              function gtag () {
                window[dl].push(arguments);
              };
            gtag('event', 'conversion', eventObj);
          });
        });
      },
      3352772,
      654259
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['ratingsAndReviewsClick'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            var reviewDetail = 'Clicked to Read Rating Review ' + citiData.ratingAndReviewDetail;
            s.linkTrackVars = 'events,eVar38,eVar20';
            s.linkTrackEvents = 'event19';
            s.events = 'event19';
            s.eVar38 = citiData.pageName;
            s.eVar20 = reviewDetail;
            s.tl(this, 'o', s.eVar20);
            window.citiData.ratingAndReviewDetail = '';
            s.eVar20 = '';
          } catch (e) {}
        });
      },
      2923044,
      515853
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        Bootstrapper.ensEvent.add(['uploadDocument'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            var uploadName = citiData.uploadName || 'unspecified upload';
            s.linkTrackVars = 'events,eVar38,eVar20';
            s.linkTrackEvents = 'event19,event131';
            s.events = 'event19,event131';
            s.eVar38 = citiData.pageName;
            s.eVar20 = uploadName;
            s.tl(this, 'o', s.eVar20);
            window.citiData.uploadName = '';
            s.eVar20 = '';
          } catch (e) {
            console.log('upload tracking error');
          }
        });
      },
      2923045,
      [3399157],
      528144,
      [359218]
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return Bootstrapper.data.extract('CUUID', 'cookie').replace(/%2D/g, '-');
                } catch (e) {
                  return 'error';
                }
              },
              load: 'session',
              dataDefName: 'CUUID',
              collection: 'page_variables',
              source: 'Manage',
              priv: 'false',
            },
            { id: '7018' }
          );
        }, 7018);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.raTransType;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_raTransType',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '23079' }
          );
        }, 23079);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.cardAppStatus;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_cardAppStatus',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17021' }
          );
        }, 17021);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.country;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_country',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '18789' }
          );
        }, 18789);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['selfServiceStart'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,eVar70,eVar71';
            s.linkTrackEvents = 'event78';
            s.events = 'event78';
            s.eVar38 = citiData.pageName;
            s.eVar70 = window.citiData.selfServType;
            s.eVar71 = window.citiData.selfServDetail;
            s.tl(this, 'o', s.eVar70);
            s.eVar70 = '';
            s.eVar71 = '';
          } catch (e) {}
        });
      },
      2923046,
      522576
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.custType;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_custType',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '21531' }
          );
        }, 21531);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.platform;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_platform',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '19053' }
          );
        }, 19053);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                try {
                  return _citiData.pageDef;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'sapient_pageDef',
              collection: 'page_variables_sapient',
              source: 'Manage',
              priv: 'false',
            },
            { id: '15566' }
          );
        }, 15566);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.eventList;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_eventList',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17017' }
          );
        }, 17017);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.server;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_server',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17016' }
          );
        }, 17016);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['Searchterm'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            if (citiData.eventList == 'siteSearch') {
              s.linkTrackVars = 'events,eVar38,eVar5';
              s.linkTrackEvents = 'event70';
              s.events = 'event70';
              s.eVar5 = citiData.searchTerm;
              s.eVar38 = citiData.pageName;
              s.tl(this, 'o', citiData.eventList);
            } else if (citiData.eventList == 'siteSearchClick') {
              s.linkTrackVars = 'events,eVar38,eVar5,eVar6';
              s.linkTrackEvents = 'event72';
              s.events = 'event72';
              s.eVar5 = citiData.searchTerm;
              s.eVar6 = citiData.searchResultClickTerm;
              s.eVar38 = citiData.pageName;
              s.tl(this, 'o', citiData.eventList);
            }
          } catch (e) {}
        });
      },
      2742762,
      562734
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.siteSection4;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_siteSection4',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17011' }
          );
        }, 17011);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.regType;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_regType',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '23090' }
          );
        }, 23090);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                var value = '; ' + document.cookie;
                var parts = value.split('; liveRamp=');
                if (parts.length == 2) return decodeURIComponent(parts.pop().split(';').shift());
              },
              transform: function (val) {
                return val ? val : '';
              },
              load: 'visitor',
              trigger: Bootstrapper.data.whenValueExistsTrigger,
              dataDefName: 'IDL',
              collection: 'User',
              source: 'Manage',
              priv: 'false',
            },
            { id: '64072' }
          );
        }, 64072);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return window.s.eVar46 + '_' + window.s.eVar49;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'atlas_apptype',
              collection: 'app_funnel_track',
              source: 'Manage',
              priv: 'false',
            },
            { id: '17163' }
          );
        }, 17163);
      },
      -1,
      -1
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['emailShare'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            s.linkTrackVars = 'events,eVar38,eVar56';
            s.linkTrackEvents = 'event33';
            s.events = 'event33';
            s.eVar38 = s.pageName;
            s.eVar56 = 'email share';
            s.tl(this, 'o', s.eVar56);
            s.linkTrackVars = '';
            s.linkTrackEvents = '';
            s.events = '';
            s.eVar56 = '';
          } catch (e) {}
        });
      },
      2532572,
      551962
    );
    Bootstrapper.bindImmediate(
      function () {
        Bootstrapper.ensEvent.add(['toolUsed'], function () {
          var ensEventContext = this;
          if (ensEventContext == window) ensEventContext = undefined;
          var Bootstrapper = window['Bootstrapper'];
          var ensightenOptions = Bootstrapper.ensightenOptions;
          try {
            var s = window.s;
            var citiData = window.citiData || {};
            s.linkTrackVars = 'events,eVar38,eVar63';
            s.linkTrackEvents = 'event81';
            s.events = 'event81';
            s.eVar38 = citiData.pageName;
            s.eVar63 = citiData.toolType;
            s.tl(this, 'o', s.eVar63);
            s.clearVars('eVar63');
            s.clearVars('events');
          } catch (e) {}
        });
      },
      3283873,
      582775
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function anon () {
                try {
                  return citiData.ISN;
                } catch (e) {
                  return 'error';
                }
              },
              load: 'instance',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'citiData_ISN',
              collection: 'DD_citiData',
              source: 'Manage',
              priv: 'false',
            },
            { id: '46013' }
          );
        }, 46013);
      },
      -1,
      -1
    );
    Bootstrapper.bindDependencyDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        try {
          if (window.stored_analytics)
            for (i = 0; i < window.stored_analytics.length; i++)
              _trackAnalytics(window.stored_analytics[i]);
        } catch (e) {
          console.log('initial pageview Tag error');
        }
      },
      2836703,
      [3352748],
      578343,
      [578262]
    );
  })();
}
