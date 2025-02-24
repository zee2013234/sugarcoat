{
  const $___stub_b639c6cb2abfa563 = {};
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
  })($___stub_b639c6cb2abfa563);
  (function () {
    Bootstrapper.bindDOMLoaded(
      function () {
        const $___old_1cf886ea83d3894e = {}.constructor.getOwnPropertyDescriptor(
          window,
          'XMLHttpRequest'
        );
        try {
          if ($___old_1cf886ea83d3894e)
            ({}.constructor.defineProperty(
              window,
              'XMLHttpRequest',
              $___stub_b639c6cb2abfa563.XMLHttpRequest
            ));
          return function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var apiUrl =
              'https://personalization.dell.com/psvc/signals/personas?_=' + new Date().getTime();
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.open('GET', apiUrl, true);
            xhr.send();
          }.apply(this, arguments);
        } finally {
          if ($___old_1cf886ea83d3894e)
            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_1cf886ea83d3894e));
        }
      },
      3390026,
      659060
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var tntMutex = 1,
          recsMutex = 1;
        window.tntClick = function (mboxSeen, tntvar, mboxClick) {
          if (tntMutex) {
            tntMutex = 0;
            if (typeof s_dell !== 'undefined' && typeof s_dell.tl === 'function') {
              if (mboxSeen && mboxSeen.length > 0) {
                s_dell.prop16 = mboxSeen;
                s_dell.linkTrackVars = s_dell.apl(s_dell.linkTrackVars, 'prop16', ',', 2);
              }
              if (mboxClick && mboxClick.length > 0) {
                s_dell.eVar120 = mboxClick;
                s_dell.linkTrackVars = s_dell.apl(s_dell.linkTrackVars, 'eVar120', ',', 2);
              }
              s_dell.tl(true, 'o', tntvar);
            }
          }
        };
        window.recsClick = function (mboxClick, tntvar) {
          if (recsMutex) {
            recsMutex = 0;
            if (typeof s_dell !== 'undefined' && typeof s_dell.tl === 'function') {
              s_dell.eVar85 = mboxClick;
              s_dell.linkTrackVars = s_dell.apl(s_dell.linkTrackVars, 'eVar85', ',', 2);
              s_dell.tl(true, 'o', tntvar);
            }
          }
        };
      },
      2432342,
      523434
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var url = location.href.toLowerCase();
        if (url && url.indexOf('en-us') != -1)
          (function (i, n, v, o, c, a) {
            i.InvocaTagId = o;
            var s = n.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = ('https:' === n.location.protocol ? 'https://' : 'http://') + v;
            var fs = n.getElementsByTagName('script')[0];
            fs.parentNode.insertBefore(s, fs);
          })(
            window,
            document,
            'solutions.invocacdn.com/js/invoca-latest.min.js',
            '1725/1729457844'
          );
      },
      3246645,
      618461
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var appname = Dell.Metrics.sc.applicationname;
        if (appname != 'homepage') {
          window.iperceptionskey = '8c377d46-a6c4-4205-9147-e9c9c45ad533';
          (function () {
            var a = document.createElement('script'),
              b = document.getElementsByTagName('body')[0];
            a.type = 'text/javascript';
            a.async = true;
            a.src = '//universal.iper2.com/wrapper.js';
            b.appendChild(a);
          })();
        }
      },
      2208304,
      504092
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        if (!window.BOOMR)
          Bootstrapper.insertScript(
            'https://afcs.dellcdn.com/csb/scripts/csb-boomr.min.f4136970c1.js '
          );
      },
      3382484,
      620280
    );
    Bootstrapper.bindDOMLoaded(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        var partition = 'www41';
        var projectGUID = '1de0049e-b22b-4d6a-8646-a6e5dca6106f';
        window.ClickTalePIISelector = '';
        if (!window.clickTaleTagInjected)
          !(function (d, t, u) {
            clickTaleTagInjected = true;
            function injectTag () {
              var ns = d.createElementNS;
              var a = ns ? ns.call(d, 'http://www.w3.org/1999/xhtml', t) : d.createElement(t),
                s = d.getElementsByTagName(t)[0];
              a.async = true;
              a.crossOrigin = 'anonymous';
              a.type = 'text/javascript';
              a.src = u;
              s.parentNode.insertBefore(a, s);
            }
            if (d.readyState != 'loading') injectTag();
            else
              d.addEventListener('DOMContentLoaded', function () {
                setTimeout(injectTag, 0);
              });
          })(
            document,
            'script',
            'https://cdnssl.clicktale.net/' + partition + '/ptc/' + projectGUID + '.js'
          );
      },
      2765111,
      585844
    );
    Bootstrapper.bindImmediate(
      function () {
        var Bootstrapper = window['Bootstrapper'];
        var ensightenOptions = Bootstrapper.ensightenOptions;
        Bootstrapper.registerDataDefinition(function () {
          Bootstrapper.data.define(
            {
              extract: function () {
                return Dell.Metrics.sc.channel;
              },
              transform: function (val) {
                return val ? val : '';
              },
              load: 'page',
              trigger: Bootstrapper.data.bottomOfBodyTrigger,
              dataDefName: 'URL via Channel Variable',
              collection: 'Dell Metrics data layer',
              source: 'Manage',
              priv: 'false',
            },
            { id: '56946' }
          );
        }, 56946);
      },
      -1,
      -1
    );
  })();
}
