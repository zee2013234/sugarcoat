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
  const $___stub_053c907fde22f83d = {};
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
  })($___stub_053c907fde22f83d);
  (function () {
    (function ensightenInit () {
      var ensightenOptions = {
        client: 'hp',
        clientId: 217,
        publishPath: 'hpcom_prod',
        isPublic: 0,
        serverComponentLocation: 'nexus.ensighten.com/hp/hpcom_prod/serverComponent.php',
        staticJavascriptPath: 'nexus.ensighten.com/hp/hpcom_prod/code/',
        ns: 'Bootstrapper',
        nexus: 'nexus.ensighten.com',
        scUseCacheBuster: 'true',
        enableTagAuditBeacon: 'false',
        enablePagePerfBeacon: 'false',
        registryNs: 'ensBootstraps',
        generatedOn: 'Tue Nov 10 18:51:02 GMT 2020',
        beaconSamplingSeedValue: 11,
      };
      if (!window[ensightenOptions.ns]) {
        window[ensightenOptions.registryNs] || (window[ensightenOptions.registryNs] = {});
        window[ensightenOptions.registryNs][ensightenOptions.ns] = window[
          ensightenOptions.ns
        ] = (function (f) {
          const $___old_b44550f4e5136d05 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_b44550f4e5136d05)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_fb986baf23da602c.userAgent
              ));
            return function () {
              function l (a) {
                this.name = 'DependencyNotAvailableException';
                this.message = 'Dependency with id ' + a + 'is missing';
              }
              function m (a) {
                this.name = 'BeaconException';
                this.message = 'There was an error durring beacon initialization';
                a = a || {};
                this.lineNumber = a.lineNumber || a.line;
                this.fileName = a.fileName;
              }
              function n () {
                for (var a = b.dataDefinitionIds.length, c = !0, d = 0; d < a; d++) {
                  var e = b.dataDefinitions[b.dataDefinitionIds[d]];
                  if (!e || null == e.endRegistration) {
                    c = !1;
                    break;
                  }
                }
                c && b.callOnDataDefintionComplete();
              }
              var e = {},
                b = {};
              b.ensightenOptions = ensightenOptions;
              b.scDataObj = {};
              e.version = '1.26.0';
              e.nexus = f.nexus || 'nexus.ensighten.com';
              e.rand = -1;
              e.currSec = new Date().getSeconds();
              e.options = {
                interval: f.interval || 100,
                erLoc: f.errorLocation || e.nexus + '/error/e.gif',
                scLoc:
                  f.serverComponentLocation || e.nexus + '/' + f.client + '/serverComponent.php',
                sjPath: f.staticJavascriptPath || e.nexus + '/' + f.client + '/code/',
                alLoc: f.alertLocation || e.nexus + '/alerts/a.gif',
                publishPath: f.publishPath,
                isPublic: f.isPublic,
                client: f.client,
                clientId: f.clientId,
                enableTagAuditBeacon: f.enableTagAuditBeacon,
                scUseCacheBuster: f.scUseCacheBuster,
                beaconSamplingSeedValue: f.beaconSamplingSeedValue || -1,
              };
              e.ruleList = [];
              e.allDeploymentIds = [];
              e.runDeploymentIds = [];
              e.runRuleIds = [];
              e.exceptionList = [];
              e.ensightenVariables = {};
              e.test = function (a) {
                if (
                  !(
                    a.executionData.hasRun ||
                    (a.executionData.runTime && 0 < a.executionData.runTime.length)
                  )
                ) {
                  for (var c = 0; c < a.dependencies.length; c++)
                    if (!1 === a.dependencies[c]()) return;
                  a.execute();
                }
              };
              l.prototype = Error();
              l.prototype || (l.prototype = {});
              l.prototype.constructor = l;
              e.DependencyNotAvailableException = l;
              m.prototype = Error();
              m.prototype || (m.prototype = {});
              m.prototype.constructor = m;
              e.BeaconException = m;
              e.checkForInvalidDependencies = function (a, c, d, h) {
                for (a = 0; a < d.length; a++)
                  if ('DEPENDENCYNEVERAVAILABLE' === d[a])
                    return (
                      (b.currentRuleId = this.id),
                      (b.currentDeploymentId = this.deploymentId),
                      b.reportException(new e.DependencyNotAvailableException(h[a])),
                      c && -1 !== c && e.allDeploymentIds.push(c),
                      !0
                    );
                return !1;
              };
              b.currentRuleId = -1;
              b.currentDeploymentId = -1;
              b.reportedErrors = [];
              b.reportedAlerts = [];
              b.AF = [];
              b._serverTime = '';
              b._clientIP = '';
              b.sampleBeacon = function () {
                var a = !1;
                try {
                  var c = (e.currSec || 0) % 20,
                    b = e.options.beaconSamplingSeedValue;
                  -1 === b ? (a = !0) : 0 !== c && 0 === b % c && (a = !0);
                } catch (h) {}
                return a;
              };
              b.getServerComponent = function (a) {
                b.callOnGetServerComponent();
                b.insertScript(
                  window.location.protocol + '//' + e.options.scLoc,
                  !1,
                  a || !0,
                  e.options.scUseCacheBuster
                );
              };
              b.setVariable = function (a, c) {
                e.ensightenVariables[a] = c;
              };
              b.getVariable = function (a) {
                return a in e.ensightenVariables ? e.ensightenVariables[a] : null;
              };
              b.testAll = function () {
                for (var a = 0; a < e.ruleList.length; a++) e.test(e.ruleList[a]);
              };
              b.executionState = {
                DOMParsed: !1,
                DOMLoaded: !1,
                dataDefinitionComplete: !1,
                conditionalRules: !1,
                readyForServerComponent: !1,
              };
              b.reportException = function (a) {
                a.timestamp = new Date().getTime();
                e.exceptionList.push(a);
                a =
                  window.location.protocol +
                  '//' +
                  e.options.erLoc +
                  '?msg=' +
                  encodeURIComponent(a.message || '') +
                  '&lnn=' +
                  encodeURIComponent(a.lineNumber || a.line || -1) +
                  '&fn=' +
                  encodeURIComponent(a.fileName || '') +
                  '&cid=' +
                  encodeURIComponent(e.options.clientId || -1) +
                  '&client=' +
                  encodeURIComponent(e.options.client || '') +
                  '&publishPath=' +
                  encodeURIComponent(e.options.publishPath || '') +
                  '&rid=' +
                  encodeURIComponent(b.currentRuleId || -1) +
                  '&did=' +
                  encodeURIComponent(b.currentDeploymentId || -1) +
                  '&errorName=' +
                  encodeURIComponent(a.name || '');
                a = b.imageRequest(a);
                a.timestamp = new Date().getTime();
                this.reportedErrors.push(a);
              };
              b.Rule = function (a) {
                this.execute = function () {
                  this.executionData.runTime.push(new Date());
                  b.currentRuleId = this.id;
                  b.currentDeploymentId = this.deploymentId;
                  try {
                    this.code();
                  } catch (c) {
                    window[ensightenOptions.ns].reportException(c);
                  } finally {
                    (this.executionData.hasRun = !0),
                      -1 !== this.deploymentId &&
                        (e.runDeploymentIds.push(this.deploymentId), e.runRuleIds.push(this.id)),
                      b.testAll();
                  }
                };
                this.id = a.id;
                this.deploymentId = a.deploymentId;
                this.dependencies = a.dependencies || [];
                this.code = a.code;
                this.executionData = { hasRun: !1, runTime: [] };
              };
              b.registerRule = function (a) {
                if (b.getRule(a.id) && -1 !== a.id) return !1;
                e.ruleList.push(a);
                -1 !== a.deploymentId && e.allDeploymentIds.push(a.deploymentId);
                b.testAll();
                return !0;
              };
              b.getRule = function (a) {
                for (var c = 0; c < e.ruleList.length; c++)
                  if (e.ruleList[c].id === a) return e.ruleList[c];
                return !1;
              };
              b.getRuleList = function () {
                return e.ruleList;
              };
              b.clearRuleList = function () {
                e.ruleList = [];
              };
              b.getAllDeploymentIds = function () {
                return e.allDeploymentIds;
              };
              b.getRunRuleIds = function () {
                return e.runRuleIds;
              };
              b.getRunDeploymentIds = function () {
                return e.runDeploymentIds;
              };
              b.hasRuleRun = function (a) {
                return (a = b.getRule(a)) ? a.executionData.hasRun : !1;
              };
              e.toTwoChar = function (a) {
                return (2 === a.toString().length ? '' : '0') + a;
              };
              b.Alert = function (a) {
                var c = new Date();
                c =
                  c.getFullYear() +
                  '-' +
                  e.toTwoChar(c.getMonth()) +
                  '-' +
                  e.toTwoChar(c.getDate()) +
                  ' ' +
                  e.toTwoChar(c.getHours()) +
                  ':' +
                  e.toTwoChar(c.getMinutes()) +
                  ':' +
                  e.toTwoChar(c.getSeconds());
                this.severity = a.severity || 1;
                this.subject = a.subject || '';
                this.type = a.type || 1;
                this.ruleId = a.ruleId || -1;
                this.severity = encodeURIComponent(this.severity);
                this.date = encodeURIComponent(c);
                this.subject = encodeURIComponent(this.subject);
                this.type = encodeURIComponent(this.type);
              };
              b.generateAlert = function (a) {
                a = b.imageRequest(
                  window.location.protocol +
                    '//' +
                    e.options.alLoc +
                    '?d=' +
                    a.date +
                    '&su=' +
                    a.subject +
                    '&se=' +
                    a.severity +
                    '&t=' +
                    a.type +
                    '&cid=' +
                    e.options.clientId +
                    '&client=' +
                    e.options.client +
                    '&publishPath=' +
                    e.options.publishPath +
                    '&rid=' +
                    b.currentRuleId +
                    '&did=' +
                    b.currentDeploymentId
                );
                a.timestamp = new Date().getTime();
                this.reportedAlerts.push(a);
              };
              b.imageRequest = function (a) {
                var c = new Image(0, 0);
                c.src = a;
                return c;
              };
              b.insertScript = function (a, c, d, h) {
                var p = document.getElementsByTagName('script'),
                  g;
                h = void 0 !== h ? h : !0;
                if (void 0 !== c ? c : 1)
                  for (g = 0; g < p.length; g++)
                    if (
                      p[g].src === a &&
                      p[g].readyState &&
                      /loaded|complete/.test(p[g].readyState)
                    )
                      return;
                if (d) {
                  d = 1 == d && 'object' == typeof b.scDataObj ? b.scDataObj : d;
                  e.rand = Math.random() * ('1E' + (10 * Math.random()).toFixed(0));
                  c = window.location.href;
                  'object' === typeof d && d.PageID && ((c = d.PageID), delete d.PageID);
                  if ('object' === typeof d)
                    for (g in d) {
                      g = ~c.indexOf('#') ? c.slice(c.indexOf('#'), c.length) : '';
                      c = c.slice(0, g.length ? c.length - g.length : c.length);
                      c += ~c.indexOf('?') ? '&' : '?';
                      for (k in d) c += k + '=' + d[k] + '&';
                      c = c.slice(0, -1) + g;
                      break;
                    }
                  a += '?';
                  h && (a += 'r=' + e.rand + '&');
                  a += 'namespace=' + ensightenOptions.ns + '&';
                  a += 'staticJsPath=' + ensightenOptions.staticJavascriptPath + '&';
                  a += 'publishedOn=' + ensightenOptions.generatedOn + '&';
                  a +=
                    'ClientID=' +
                    encodeURIComponent(e.options.clientId) +
                    '&PageID=' +
                    encodeURIComponent(c);
                }
                (function (a, c, b) {
                  var d = c.head || c.getElementsByTagName('head');
                  setTimeout(function () {
                    if ('item' in d) {
                      if (!d[0]) {
                        setTimeout(arguments.callee, 25);
                        return;
                      }
                      d = d[0];
                    }
                    var a = c.createElement('script');
                    a.src = b;
                    a.onload = a.onerror = function () {
                      this.addEventListener && (this.readyState = 'loaded');
                    };
                    d.insertBefore(a, d.firstChild);
                  }, 0);
                })(window, document, a);
              };
              b.loadScriptCallback = function (a, c, b) {
                var d = document.getElementsByTagName('script'),
                  e;
                b = d[0];
                for (e = 0; e < d.length; e++)
                  if (d[e].src === a && d[e].readyState && /loaded|complete/.test(d[e].readyState))
                    try {
                      c();
                    } catch (g) {
                      window[ensightenOptions.ns].reportException(g);
                    } finally {
                      return;
                    }
                d = document.createElement('script');
                d.type = 'text/javascript';
                d.async = !0;
                d.src = a;
                d.onerror = function () {
                  this.addEventListener && (this.readyState = 'loaded');
                };
                d.onload = d.onreadystatechange = function () {
                  if (
                    !this.readyState ||
                    'complete' === this.readyState ||
                    'loaded' === this.readyState
                  ) {
                    this.onload = this.onreadystatechange = null;
                    this.addEventListener && (this.readyState = 'loaded');
                    try {
                      c.call(this);
                    } catch (g) {
                      window[ensightenOptions.ns].reportException(g);
                    }
                  }
                };
                b.parentNode.insertBefore(d, b);
              };
              b.insertPageFiles = function (a) {
                var b = 0,
                  d = 0,
                  e = function () {
                    d == a.length - 1 &&
                      window[ensightenOptions.ns].callOnPageSpecificCompletion();
                    d++;
                  };
                for (b = 0; b < a.length; ++b)
                  window[ensightenOptions.ns].loadScriptCallback(a[b], e);
              };
              b.unobtrusiveAddEvent = function (a, b, d) {
                try {
                  var c = a[b] ? a[b] : function () {};
                  a[b] = function () {
                    d.apply(this, arguments);
                    return c.apply(this, arguments);
                  };
                } catch (p) {
                  window[ensightenOptions.ns].reportException(p);
                }
              };
              b.anonymous = function (a, c) {
                return function () {
                  try {
                    (b.currentRuleId = c ? c : 'anonymous'), a();
                  } catch (d) {
                    window[ensightenOptions.ns].reportException(d);
                  }
                };
              };
              b.setCurrentRuleId = function (a) {
                b.currentRuleId = a;
              };
              b.setCurrentDeploymentId = function (a) {
                b.currentDeploymentId = a;
              };
              b.bindImmediate = function (a, c, d) {
                if ('function' === typeof a)
                  a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [],
                    code: a,
                  });
                else if ('object' !== typeof a) return !1;
                b.registerRule(a);
              };
              b.bindDOMParsed = function (a, c, d) {
                if ('function' === typeof a)
                  a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [
                      function () {
                        return window[ensightenOptions.ns].executionState.DOMParsed;
                      },
                    ],
                    code: a,
                  });
                else if ('object' !== typeof a) return !1;
                b.registerRule(a);
              };
              b.bindDOMLoaded = function (a, c, d) {
                if ('function' === typeof a)
                  a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [
                      function () {
                        return window[ensightenOptions.ns].executionState.DOMLoaded;
                      },
                    ],
                    code: a,
                  });
                else if ('object' !== typeof a) return !1;
                b.registerRule(a);
              };
              b.bindPageSpecificCompletion = function (a, c, d) {
                if ('function' === typeof a)
                  a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [
                      function () {
                        return window[ensightenOptions.ns].executionState.conditionalRules;
                      },
                    ],
                    code: a,
                  });
                else if ('object' !== typeof a) return !1;
                b.registerRule(a);
              };
              b.bindOnGetServerComponent = function (a, c, d) {
                if ('function' === typeof a)
                  a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [
                      function () {
                        return window[ensightenOptions.ns].executionState.readyForServerComponent;
                      },
                    ],
                    code: a,
                  });
                else if ('object' !== typeof a) return !1;
                b.registerRule(a);
              };
              b.bindDataDefinitionComplete = function (a, c, d) {
                if ('function' === typeof a)
                  a = new b.Rule({
                    id: c || -1,
                    deploymentId: d || -1,
                    dependencies: [
                      function () {
                        return window[ensightenOptions.ns].executionState.dataDefinitionComplete;
                      },
                    ],
                    code: a,
                  });
                else if ('object' !== typeof a) return !1;
                b.registerRule(a);
              };
              b.checkHasRun = function (a) {
                if (0 === a.length) return !0;
                for (var c, d = 0; d < a.length; ++d)
                  if (((c = b.getRule(parseInt(a[d], 10))), !c || !c.executionData.hasRun))
                    return !1;
                return !0;
              };
              b.bindDependencyImmediate = function (a, c, d, h, f) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, h, d, f)) {
                  g.push(function () {
                    return window[ensightenOptions.ns].checkHasRun(d);
                  });
                  if ('function' === typeof a)
                    a = new b.Rule({
                      id: c || -1,
                      deploymentId: h || -1,
                      dependencies: g,
                      code: a,
                    });
                  else if ('object' !== typeof a) return !1;
                  b.registerRule(a);
                }
              };
              b.bindDependencyDOMLoaded = function (a, c, d, h, f) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, h, d, f)) {
                  g.push(function () {
                    return window[ensightenOptions.ns].executionState.DOMLoaded;
                  });
                  g.push(function () {
                    return window[ensightenOptions.ns].checkHasRun(d);
                  });
                  if ('function' === typeof a)
                    a = new b.Rule({
                      id: c || -1,
                      deploymentId: h || -1,
                      dependencies: g,
                      code: a,
                    });
                  else if ('object' !== typeof a) return !1;
                  b.registerRule(a);
                }
              };
              b.bindDependencyDOMParsed = function (a, c, d, h, f) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, h, d, f)) {
                  g.push(function () {
                    return window[ensightenOptions.ns].executionState.DOMParsed;
                  });
                  g.push(function () {
                    return window[ensightenOptions.ns].checkHasRun(d);
                  });
                  if ('function' === typeof a)
                    a = new b.Rule({
                      id: c || -1,
                      deploymentId: h || -1,
                      dependencies: g,
                      code: a,
                    });
                  else if ('object' !== typeof a) return !1;
                  b.registerRule(a);
                }
              };
              b.bindDependencyPageSpecificCompletion = function (a, c, d, h, f) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, h, d, f)) {
                  g.push(function () {
                    return window[ensightenOptions.ns].executionState.conditionalRules;
                  });
                  g.push(function () {
                    return window[ensightenOptions.ns].checkHasRun(d);
                  });
                  if ('function' === typeof a)
                    a = new b.Rule({
                      id: c || -1,
                      deploymentId: h || -1,
                      dependencies: g,
                      code: a,
                    });
                  else if ('object' !== typeof a) return !1;
                  b.registerRule(a);
                }
              };
              b.bindDependencyOnGetServerComponent = function (a, c, d, h, f) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, h, d, f)) {
                  g.push(function () {
                    return window[ensightenOptions.ns].executionState.readyForServerComponent;
                  });
                  g.push(function () {
                    return window[ensightenOptions.ns].checkHasRun(d);
                  });
                  if ('function' === typeof a)
                    a = new b.Rule({
                      id: c || -1,
                      deploymentId: h || -1,
                      dependencies: g,
                      code: a,
                    });
                  else if ('object' !== typeof a) return !1;
                  b.registerRule(a);
                }
              };
              b.bindDependencyPageSpecificCompletion = function (a, c, d, f, p) {
                var g = [];
                if (!e.checkForInvalidDependencies(c, f, d, p)) {
                  g.push(function () {
                    return window[ensightenOptions.ns].executionState.dataDefinitionComplete;
                  });
                  g.push(function () {
                    return window[ensightenOptions.ns].checkHasRun(d);
                  });
                  if ('function' === typeof a)
                    a = new b.Rule({
                      id: c || -1,
                      deploymentId: f || -1,
                      dependencies: g,
                      code: a,
                    });
                  else if ('object' !== typeof a) return !1;
                  b.registerRule(a);
                }
              };
              b.dataDefintionIds = [];
              b.dataDefinitions = [];
              b.pageSpecificDataDefinitionsSet = !1;
              b.setPageSpecificDataDefinitionIds = function (a) {
                for (var c = a ? a.length : 0, d = 0; d < c; d++) {
                  var e = a[d];
                  if (Array.prototype.indexOf)
                    -1 == b.dataDefinitionIds.indexOf(e) && b.dataDefinitionIds.push(e);
                  else {
                    for (var f = !1, g = b.dataDefinitionIds.length, l = 0; l < g; l++)
                      if (b.dataDefinitionIds[l] === e) {
                        f = !0;
                        break;
                      }
                    f || b.dataDefinitionIds.push(e);
                  }
                }
                b.pageSpecificDataDefinitionsSet = !0;
                n();
              };
              b.DataDefinition = function (a, b) {
                this.id = a;
                this.registrationFn = b;
                this.endRegistrationTime = this.startRegistrationTime = null;
                this.startRegistration = function () {
                  this.startRegistrationTime = new Date();
                };
                this.endRegistration = function () {
                  this.endRegistrationTime = new Date();
                };
              };
              b.registerDataDefinition = function (a, c) {
                var d = b.dataDefinitions[c];
                d || ((d = new b.DataDefinition(c, a)), (b.dataDefinitions[c] = d));
                d.startRegistrationTime ||
                  (d.startRegistration(), d.registrationFn(), d.endRegistration());
                b.pageSpecificDataDefinitionsSet && n();
              };
              b.callOnDataDefintionComplete = function () {
                b.executionState.dataDefinitionComplete = !0;
                b.testAll();
              };
              b.callOnDOMParsed = function () {
                window[ensightenOptions.ns].executionState.DOMParsed = !0;
                window[ensightenOptions.ns].testAll();
              };
              b.callOnDOMLoaded = function () {
                window[ensightenOptions.ns].executionState.DOMParsed = !0;
                window[ensightenOptions.ns].executionState.DOMLoaded = !0;
                window[ensightenOptions.ns].testAll();
              };
              b.callOnPageSpecificCompletion = function () {
                for (
                  var a = document.getElementsByTagName('script'), b = 0, d = a.length;
                  b < d;
                  b++
                )
                  if (
                    a[b].src &&
                    a[b].src.match(/\.ensighten\.com\/(.+?)\/code\/.*/i) &&
                    'loaded' != a[b].readyState &&
                    'complete' != a[b].readyState
                  ) {
                    setTimeout(window[ensightenOptions.ns].callOnPageSpecificCompletion, 50);
                    return;
                  }
                setTimeout(function () {
                  window[ensightenOptions.ns].executionState.conditionalRules = !0;
                  window[ensightenOptions.ns].testAll();
                }, 1);
              };
              b.callOnGetServerComponent = function () {
                window[ensightenOptions.ns].executionState.readyForServerComponent = !0;
                window[ensightenOptions.ns].testAll();
              };
              b.hasDOMParsed = function () {
                return window[ensightenOptions.ns].executionState.DOMParsed;
              };
              b.hasDOMLoaded = function () {
                return window[ensightenOptions.ns].executionState.DOMLoaded;
              };
              b.hasPageSpecificCompletion = function () {
                return window[ensightenOptions.ns].executionState.conditionalRules;
              };
              var r = function () {
                var a = [],
                  b = !1,
                  d = !1;
                return {
                  add: function (c) {
                    b && !d ? c() : 'function' == typeof c && (a[a.length] = c);
                  },
                  exec: function () {
                    d = !0;
                    do {
                      var c = a;
                      a = [];
                      b = !0;
                      for (var e = 0; e < c.length; e++)
                        try {
                          c[e].call(window);
                        } catch (g) {
                          window[ensightenOptions.ns].reportException(g);
                        }
                    } while (0 < a.length);
                    d = !1;
                  },
                  haveRun: function () {
                    return b;
                  },
                };
              };
              b.new_fArray = function () {
                return r();
              };
              e.timer = null;
              (function () {
                function a (a, b) {
                  return function () {
                    a.apply(b, arguments);
                  };
                }
                window.console || (window.console = {});
                var b = window.console;
                if (!b.log)
                  if (window.log4javascript) {
                    var d = log4javascript.getDefaultLogger();
                    b.log = a(d.info, d);
                    b.debug = a(d.debug, d);
                    b.info = a(d.info, d);
                    b.warn = a(d.warn, d);
                    b.error = a(d.error, d);
                  } else b.log = function () {};
                b.debug || (b.debug = b.log);
                b.info || (b.info = b.log);
                b.warn || (b.warn = b.log);
                b.error || (b.error = b.log);
              })();
              document.addEventListener
                ? (-1 < navigator.userAgent.indexOf('AppleWebKit/')
                    ? (e.timer = window.setInterval(function () {
                        /loaded|interactive|complete/.test(document.readyState) &&
                          (clearInterval(e.timer), b.callOnDOMParsed());
                      }, 50))
                    : document.addEventListener('DOMContentLoaded', b.callOnDOMParsed, !1),
                  window.addEventListener('load', b.callOnDOMLoaded, !1))
                : (setTimeout(function () {
                    var a = window.document;
                    (function () {
                      try {
                        if (!document.body) throw 'continue';
                        a.documentElement.doScroll('left');
                      } catch (c) {
                        setTimeout(arguments.callee, 15);
                        return;
                      }
                      window[ensightenOptions.ns].callOnDOMParsed();
                    })();
                  }, 1),
                  window.attachEvent('onload', function () {
                    window[ensightenOptions.ns].callOnDOMLoaded();
                  }));
              document.readyState &&
                'complete' === document.readyState &&
                ((b.executionState.DOMParsed = !0), (b.executionState.DOMLoaded = !0));
              'true' === e.options.enableTagAuditBeacon &&
                b.sampleBeacon() &&
                window.setTimeout(function () {
                  if (window[ensightenOptions.ns] && !window[ensightenOptions.ns].mobilePlatform)
                    try {
                      for (var a = [], c, d, h, l, g = 0; g < e.ruleList.length; ++g)
                        (d = e.ruleList[g]),
                          (h = d.executionData.hasRun ? '1' : '0'),
                          (l = d.deploymentId.toString() + '|' + d.id.toString() + '|' + h),
                          a.push(l);
                      c = '[' + a.join(';') + ']';
                      var m =
                        window.location.protocol +
                        '//' +
                        e.nexus +
                        '/' +
                        encodeURIComponent(f.client) +
                        '/' +
                        encodeURIComponent(f.publishPath) +
                        '/TagAuditBeacon.rnc?cid=' +
                        encodeURIComponent(f.clientId) +
                        '&data=' +
                        c +
                        '&idx=0&r=' +
                        e.rand;
                      b.imageRequest(m);
                    } catch (q) {
                      (b.currentRuleId = -1),
                        (b.currentDeploymentId = -1),
                        (a = new e.BeaconException(q)),
                        window[ensightenOptions.ns].reportException(a);
                    }
                }, 3000);
              window.setInterval(b.testAll, e.options.interval);
              return b;
            }.apply(this, arguments);
          } finally {
            if ($___old_b44550f4e5136d05)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_b44550f4e5136d05
              ));
          }
        })(ensightenOptions);
        'true' === ensightenOptions.enablePagePerfBeacon &&
          window[ensightenOptions.ns] &&
          window[ensightenOptions.ns].sampleBeacon() &&
          window[ensightenOptions.ns].bindDOMParsed(function () {
            if (!window[ensightenOptions.ns].mobilePlatform) {
              var f = window.performance;
              if (f) {
                f = f.timing || {};
                var l = f.navigationStart || 0,
                  m = {
                    connectEnd: 'ce',
                    connectStart: 'cs',
                    domComplete: 'dc',
                    domContentLoadedEventEnd: 'dclee',
                    domContentLoadedEventStart: 'dcles',
                    domInteractive: 'di',
                    domLoading: 'dl',
                    domainLookupEnd: 'dle',
                    domainLookupStart: 'dls',
                    fetchStart: 'fs',
                    loadEventEnd: 'lee',
                    loadEventStart: 'les',
                    redirectEnd: 'rede',
                    redirectStart: 'reds',
                    requestStart: 'reqs',
                    responseStart: 'resps',
                    responseEnd: 'respe',
                    secureConnectionStart: 'scs',
                    unloadEventStart: 'ues',
                    unloadEventEnd: 'uee',
                  };
                var n = '&ns=' + encodeURIComponent(f.navigationStart);
                for (var e in m)
                  if (void 0 !== f[e]) {
                    var b = f[e] - l;
                    n += '&' + m[e] + '=' + (0 < b ? encodeURIComponent(b) : 0);
                  } else n += '&' + m[e] + '=-1';
                window[ensightenOptions.ns].timing = n;
                e = ensightenOptions.nexus || 'nexus.ensighten.com';
                f = ensightenOptions.staticJavascriptPath || '';
                n = f.indexOf('/', 0);
                l = f.indexOf('/code/');
                f = f.substring(n, l) + '/perf.rnc';
                f +=
                  '?cid=' +
                  encodeURIComponent(ensightenOptions.clientId) +
                  window[ensightenOptions.ns].timing;
                window[ensightenOptions.ns].imageRequest('//' + e + f);
              }
            }
          });
        window[ensightenOptions.ns].data ||
          ((window[ensightenOptions.ns].when = (function () {
            function f (a, b, d, c) {
              return l(a).then(b, d, c);
            }
            function p (a) {
              this.then = a;
            }
            function l (a) {
              return c(function (b) {
                b(a);
              });
            }
            function c (b) {
              function g (a) {
                k && ((r = e(a)), d(k, r), (k = u));
              }
              function f (a) {
                g(h(a));
              }
              function q (b) {
                k && d(k, a(b));
              }
              var r,
                k = [];
              try {
                b(g, f, q);
              } catch (E) {
                f(E);
              }
              return new p(function (a, b, d) {
                return c(function (c, g, e) {
                  k
                    ? k.push(function (f) {
                        f.then(a, b, d).then(c, g, e);
                      })
                    : n(function () {
                        r.then(a, b, d).then(c, g, e);
                      });
                });
              });
            }
            function e (a) {
              return a instanceof p
                ? a
                : a !== Object(a)
                ? m(a)
                : c(function (b, d, c) {
                    n(function () {
                      try {
                        var g = a.then;
                        'function' === typeof g ? z(g, a, b, d, c) : b(m(a));
                      } catch (y) {
                        d(y);
                      }
                    });
                  });
            }
            function m (a) {
              var b = new p(function (d) {
                try {
                  return 'function' == typeof d ? e(d(a)) : b;
                } catch (D) {
                  return h(D);
                }
              });
              return b;
            }
            function h (a) {
              var b = new p(function (d, c) {
                try {
                  return 'function' == typeof c ? e(c(a)) : b;
                } catch (F) {
                  return h(F);
                }
              });
              return b;
            }
            function a (b) {
              var d = new p(function (c, g, e) {
                try {
                  return 'function' == typeof e ? a(e(b)) : d;
                } catch (y) {
                  return a(y);
                }
              });
              return d;
            }
            function d (a, b) {
              n(function () {
                for (var d, c = 0; (d = a[c++]); ) d(b);
              });
            }
            function b (a, b, d, g, e) {
              q(2, arguments);
              return f(a, function (a) {
                return c(function (d, c, g) {
                  function e (a) {
                    h(a);
                  }
                  function q (a) {
                    u(a);
                  }
                  var k;
                  var n = a.length >>> 0;
                  var t = Math.max(0, Math.min(b, n));
                  var w = [];
                  var x = n - t + 1;
                  var m = [];
                  if (t) {
                    var h = function (a) {
                      m.push(a);
                      --x || ((u = h = r), c(m));
                    };
                    var u = function (a) {
                      w.push(a);
                      --t || ((u = h = r), d(w));
                    };
                    for (k = 0; k < n; ++k) k in a && f(a[k], q, e, g);
                  } else d(w);
                }).then(d, g, e);
              });
            }
            function t (a, b, d, c) {
              q(1, arguments);
              return k(a, w).then(b, d, c);
            }
            function k (a, b) {
              return f(a, function (a) {
                return c(function (d, c, g) {
                  var e, q;
                  var k = (e = a.length >>> 0);
                  var r = [];
                  if (k) {
                    var n = function (a, e) {
                      f(a, b).then(
                        function (a) {
                          r[e] = a;
                          --k || d(r);
                        },
                        c,
                        g
                      );
                    };
                    for (q = 0; q < e; q++) q in a ? n(a[q], q) : --k;
                  } else d(r);
                });
              });
            }
            function n (a) {
              1 === x.push(a) && A(g);
            }
            function g () {
              for (var a, b = 0; (a = x[b++]); ) a();
              x = [];
            }
            function q (a, b) {
              for (var d, c = b.length; c > a; )
                if (((d = b[--c]), null != d && 'function' != typeof d))
                  throw Error('arg ' + c + ' must be a function');
            }
            function r () {}
            function w (a) {
              return a;
            }
            f.defer = function () {
              var a, b;
              var d = {
                promise: u,
                resolve: u,
                reject: u,
                notify: u,
                resolver: { resolve: u, reject: u, notify: u },
              };
              d.promise = a = c(function (c, g, e) {
                d.resolve = d.resolver.resolve = function (d) {
                  if (b) return l(d);
                  b = !0;
                  c(d);
                  return a;
                };
                d.reject = d.resolver.reject = function (d) {
                  if (b) return l(h(d));
                  b = !0;
                  g(d);
                  return a;
                };
                d.notify = d.resolver.notify = function (a) {
                  e(a);
                  return a;
                };
              });
              return d;
            };
            f.resolve = l;
            f.reject = function (a) {
              return f(a, h);
            };
            f.join = function () {
              return k(arguments, w);
            };
            f.all = t;
            f.map = k;
            f.reduce = function (a, b) {
              var d = z(B, arguments, 1);
              return f(a, function (a) {
                var c = a.length;
                d[0] = function (a, d, g) {
                  return f(a, function (a) {
                    return f(d, function (d) {
                      return b(a, d, g, c);
                    });
                  });
                };
                return G.apply(a, d);
              });
            };
            f.any = function (a, d, c, g) {
              return b(
                a,
                1,
                function (a) {
                  return d ? d(a[0]) : a[0];
                },
                c,
                g
              );
            };
            f.some = b;
            f.isPromise = function (a) {
              return a && 'function' === typeof a.then;
            };
            p.prototype = {
              otherwise: function (a) {
                return this.then(u, a);
              },
              ensure: function (a) {
                function b () {
                  return l(a());
                }
                return this.then(b, b).yield(this);
              },
              yield: function (a) {
                return this.then(function () {
                  return a;
                });
              },
              spread: function (a) {
                return this.then(function (b) {
                  return t(b, function (b) {
                    return a.apply(u, b);
                  });
                });
              },
              always: function (a, b) {
                return this.then(a, a, b);
              },
            };
            var u;
            var x = [];
            var H = setTimeout;
            var A =
              'function' === typeof setImmediate
                ? 'undefined' === typeof window
                  ? setImmediate
                  : setImmediate.bind(window)
                : 'object' === typeof process && process.nextTick
                ? process.nextTick
                : function (a) {
                    H(a, 0);
                  };
            var v = Function.prototype;
            var C = v.call;
            var z = v.bind
              ? C.bind(C)
              : function (a, b) {
                  return a.apply(b, B.call(arguments, 2));
                };
            v = [];
            var B = v.slice;
            var G =
              v.reduce ||
              function (a) {
                var b = 0;
                var d = Object(this);
                var c = d.length >>> 0;
                var g = arguments;
                if (1 >= g.length)
                  for (;;) {
                    if (b in d) {
                      g = d[b++];
                      break;
                    }
                    if (++b >= c) throw new TypeError();
                  }
                else g = g[1];
                for (; b < c; ++b) b in d && (g = a(g, d[b], b, d));
                return g;
              };
            return f;
          })()),
          (function () {
            function f (c, f) {
              return l.all(f || [], function (e) {
                return c.apply(null, e);
              });
            }
            function p (e) {
              var m = c.call(arguments, 1);
              return function () {
                return f(e, m.concat(c.call(arguments)));
              };
            }
            var l = window[ensightenOptions.ns].when;
            var c = [].slice;
            l.apply = f;
            l.call = function (e) {
              return f(e, c.call(arguments, 1));
            };
            l.lift = p;
            l.bind = p;
            l.compose = function (e) {
              var m = c.call(arguments, 1);
              return function () {
                var h = c.call(arguments);
                h = f(e, h);
                return l.reduce(
                  m,
                  function (a, d) {
                    return d(a);
                  },
                  h
                );
              };
            };
          })(),
          (window[ensightenOptions.ns].data = (function (f, p) {
            function l (a, d) {
              this.name = 'DataDefinitionException';
              this.message =
                d || 'Data definitions cannot be resolved as there are invalid id(s): ' + a;
            }
            var c = {
                engines: {
                  memory: {
                    get: function (a) {
                      if (e.utils.isArray(a)) {
                        for (var d = [], b = 0; b < a.length; b++) d.push(c.data[a[b]]);
                        return f[ensightenOptions.ns].when.resolve(d);
                      }
                      d = c.dataDefinitions[a] || { storage: { get: function () {} } };
                      d = d.storage.get(d);
                      c.data[a] = d;
                      return f[ensightenOptions.ns].when.resolve(c.data[a]);
                    },
                    set: function (a, d) {
                      if (e.utils.isArray(a)) for (var b in a) c.data[a[b]] = d[b];
                      else c.data[a] = d;
                      return f[ensightenOptions.ns].when.resolve(!0);
                    },
                    remove: function (a) {
                      if (e.utils.isArray(a)) for (var d in a) delete c.data[a[d]];
                      else delete c.data[a];
                      return f[ensightenOptions.ns].when.resolve(!0);
                    },
                    clear: function (a) {
                      c.data = {};
                      c.definitions = {};
                      return f[ensightenOptions.ns].when.resolve(!0);
                    },
                    all: function () {
                      return f[ensightenOptions.ns].when.resolve(c.data);
                    },
                  },
                },
                normalizeInputArgs: function (a, d) {
                  var b = { key: [], val: p },
                    c;
                  if (e.utils.isPlainObject(a))
                    for (c in ((b.val = []), a)) b.key.push(c), b.val.push(a[c]);
                  else e.utils.isArray(a), (b.key = a), (b.val = d);
                  return b;
                },
                definitions: {},
                data: {},
              },
              e = {
                utils: {
                  isPlainObject: function (a) {
                    return !!a && '[object Object]' === Object.prototype.toString.call(a);
                  },
                  isArray: function (a) {
                    return '[object Array]' === Object.prototype.toString.call(a);
                  },
                  escapeRegEx: function (a) {
                    try {
                      return a.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
                    } catch (d) {
                      return a;
                    }
                  },
                },
              },
              m = function () {
                return f[ensightenOptions.ns].when.reject('Not Implemented.');
              };
            l.prototype = Error();
            l.prototype || (l.prototype = {});
            l.prototype.constructor = l;
            c.DataDefinitionException = l;
            c.checkForInvalidDataDefinitions = function (a) {
              e.utils.isArray(a) || (a = [a]);
              return a && 0 < a.length && ((a = a.join(',')), -1 < a.indexOf('invalid_id'))
                ? (f[ensightenOptions.ns].reportException(new c.DataDefinitionException(a)), !0)
                : !1;
            };
            c.collectAvailableDataDefinitions = function (a) {
              for (var d = [], b = 0; b < a.length; b++) {
                var t = parseInt(a[b], 10),
                  k = f[ensightenOptions.ns].dataDefinitions[t];
                if (null === k || k === p)
                  if (((k = e.storage.session.get({ id: t })), null !== k && k !== p))
                    e.set(t, k),
                      (c.dataDefinitions[t] = {
                        id: t,
                        load: 'visitor',
                        storage: e.storage.visitor,
                        missingDDFromCache: !0,
                      }),
                      d.push(f[ensightenOptions.ns].data.get('' + t));
                  else
                    return (
                      f[ensightenOptions.ns].reportException(
                        new c.DataDefinitionException(a, 'Invalid data definition used: ' + t)
                      ),
                      { promises: [], isInvalid: !0 }
                    );
                else d.push(f[ensightenOptions.ns].data.get('' + a[b]));
              }
              return { promises: d, isInvalid: !1 };
            };
            c.getSync = function (a) {
              function d (a) {
                var d = a.extract || t,
                  c = a.transform || k,
                  g = !1,
                  e = null,
                  f = null;
                try {
                  e = d();
                } catch (v) {
                  (e = null), (g = !0);
                }
                try {
                  f = c(e);
                } catch (v) {
                  (f = null), (g = !0);
                }
                g && b.push(a.id);
                return f;
              }
              var b = [],
                t = function () {
                  return document;
                },
                k = function (a) {
                  return null !== a && a !== p ? a.toString() : null;
                },
                n = parseInt(a);
              a = 'string' === typeof a ? a.split('.') : [];
              var g = {},
                q = '';
              if (!isNaN(n) && 'undefined' === typeof c.dataDefinitions[n])
                return (
                  f[ensightenOptions.ns].reportException(
                    new c.DataDefinitionException(
                      n,
                      'Error resolving data definition: ' + n + '.  Does not exist on the page.'
                    )
                  ),
                  'Data definition specified does not exist on the page'
                );
              if (
                isNaN(n) &&
                'undefined' ===
                  typeof c.dataDefinitionsBySourceCollName['' + a[0] + '.' + a[1] + '.' + a[2]]
              )
                return (
                  f[ensightenOptions.ns].reportException(
                    new c.DataDefinitionException(
                      a,
                      'Error resolving data definition: ' +
                        a[0] +
                        '.' +
                        a[1] +
                        '.' +
                        a[2] +
                        '.  Does not exist on the page.'
                    )
                  ),
                  'Data definition specified does not exist on the page'
                );
              isNaN(n)
                ? 3 == a.length &&
                  (g = e.getDataDefinitionBySourceCollectionName(a[0], a[1], a[2]))
                : (g = e.getDataDefinitionById(n));
              q =
                g.load && g.load.match(/(session|visitor)/i) && g.storage && g.storage.get
                  ? g.storage.get(g)
                  : d(g);
              0 < b.length &&
                f[ensightenOptions.ns].reportException(
                  new c.DataDefinitionException(
                    b,
                    'Error resolving data definitions synchronously: ' + b
                  )
                );
              return q;
            };
            c.dataDefinitions = {};
            c.dataDefinitionsBySourceCollName = {};
            e.defineEngine = function (a, d) {
              var b,
                e = ['get', 'set', 'remove', 'clear', 'all'];
              c.engines[a] = d;
              if (!d.returnsPromise)
                for (b = 0; b < e.length; b++) {
                  var k = e[b];
                  d[k] = f[ensightenOptions.ns].when.lift(d[k]);
                }
            };
            e.storage = {
              instance: {
                set: function (a, d) {},
                get: function (a) {
                  return c.getSync(a.id);
                },
              },
              page: {
                set: function (a, d) {},
                get: function (a) {
                  return c.data[a.id];
                },
              },
              session: {
                set: function (a, d) {
                  var b = e.storage.session.get({ id: a }),
                    c = new Date(),
                    k = c.getTime();
                  c.setTime(k + 1800000);
                  null != b && (d = b);
                  f[ensightenOptions.ns].data.cookie.utils.set(a, d, { expires: c.toGMTString() });
                  b = { expires: c.getTime(), value: d };
                  f[ensightenOptions.ns].data.local.utils.set(a, b);
                },
                get: function (a) {
                  var d = f[ensightenOptions.ns].data.cookie.utils.get(a.id),
                    b = f.JSON && f.JSON.stringify ? f.JSON : f[ensightenOptions.ns].JSON;
                  b = b || {};
                  var c = new Date();
                  c = c.getTime();
                  if (null === d) {
                    try {
                      var e = b.parse(f[ensightenOptions.ns].data.local.utils.get(a.id));
                    } catch (n) {
                      e = null;
                    }
                    null != e &&
                      ((e.expires = +e.expires),
                      c <= e.expires
                        ? (d = e.value)
                        : '' == e.expires && e.value != p
                        ? (d = e.value)
                        : f[ensightenOptions.ns].data.local.utils.remove(a.id));
                  }
                  return d;
                },
              },
              visitor: {
                set: function (a, d) {
                  var b = e.storage.session.get({ id: a });
                  null != b && (d = b);
                  f[ensightenOptions.ns].data.cookie.utils.set(a, d);
                  f[ensightenOptions.ns].data.local.utils.set(a, { expires: '', value: d });
                },
                get: function (a) {
                  return e.storage.session.get(a);
                },
              },
            };
            e.getEngine = e.engine = function (a) {
              return a
                ? c.engines[a] || { get: m, set: m, remove: m, clear: m, all: m }
                : c.engines;
            };
            e.all = function (a) {
              return f[ensightenOptions.ns].data.engine(a || 'memory').all();
            };
            e.get = function (a, d, b) {
              d = d || 'memory';
              b = b || {};
              -1 < a.indexOf(',')
                ? ((a = a.split(',')), (a = c.normalizeInputArgs(a)))
                : (a = c.normalizeInputArgs(a));
              return b.wait
                ? c.getWait(a.key, f[ensightenOptions.ns].data.engine(d), b)
                : c.data && c.data.hasOwnProperty(a.key)
                ? f[ensightenOptions.ns].data.engine(d).get(a.key)
                : c.getWaitForKey(a.key, f[ensightenOptions.ns].data.engine(d), b);
            };
            c.getWait = function (a, d, b) {
              var c = +new Date(),
                k = f[ensightenOptions.ns].when.defer(),
                n = function () {
                  var c = d.get(a);
                  if (-1 === b.wait) return c;
                  c.then(
                    function (a) {
                      b.setCheck(a) ? k.resolve(a) : setTimeout(g, b.interval);
                    },
                    function (a) {
                      setTimeout(g, b.interval);
                    }
                  );
                },
                g = function () {
                  var a = +new Date() - c;
                  -1 !== b.wait && a < b.wait ? n() : k.reject('Timeout');
                };
              b.interval = b.interval || 500;
              b.wait = b.wait || 5000;
              e.utils.isArray(a)
                ? (b.setCheck =
                    b.setCheck ||
                    function (a) {
                      for (var b = !0, d = 0; d < a.length; d++) b = b && !!a[d];
                      return b;
                    })
                : (b.setCheck =
                    b.setCheck ||
                    function (a) {
                      return !!a;
                    });
              n();
              return k.promise;
            };
            c.getWaitForKey = function (a, d, b) {
              var e = f[ensightenOptions.ns].when.defer(),
                k = function () {
                  if (c.data && c.data.hasOwnProperty(a)) {
                    var g = d.get(a);
                    if (-1 === b.wait) return g;
                    g.then(
                      function (a) {
                        e.resolve(a);
                      },
                      function (a) {
                        e.reject(a);
                      }
                    );
                  } else setTimeout(n, b.interval);
                },
                n = function () {
                  k();
                };
              b.interval = b.interval || 100;
              b.wait = b.wait || 1;
              k();
              return e.promise;
            };
            e.set = function (a, d, b) {
              var e = c.normalizeInputArgs(a, d);
              Array.prototype.slice.call(arguments);
              return f[ensightenOptions.ns].data.engine(b || 'memory').set(e.key, e.val);
            };
            e.remove = function (a, d) {
              return f[ensightenOptions.ns].data.engine(d || 'memory').remove(a);
            };
            e.clear = function (a) {
              return f[ensightenOptions.ns].data.engine(a || 'memory').clear();
            };
            e.define = function (a, d) {
              d && (a.name = d.id || d.name);
              if (!a.name)
                return f[ensightenOptions.ns].when.reject(
                  Error("Invalid parameters: missing 'name'")
                );
              a.id = a.name;
              var b = a.load || 'page';
              a.load = a.load || 'javascript';
              a.load = -1 < a.load.indexOf('javascript') ? a.load : a.load + ',javascript';
              a.trigger =
                a.trigger ||
                function () {
                  return f[ensightenOptions.ns].when.resolve();
                };
              a.priv = a.priv || !1;
              a.collection = a.collection || 'Data Layer';
              a.persist = f[ensightenOptions.ns].data.engine('memory');
              a.storage = e.storage[b.toLowerCase()] || e.storage.page;
              var h =
                  a.extract ||
                  function () {
                    return document;
                  },
                k =
                  a.transform ||
                  function (a) {
                    return a;
                  },
                n = function (b, d) {
                  var c = [];
                  c.push(a.persist.set(b, d));
                  a.storage.set(a.id, d);
                  'object' == typeof f[ensightenOptions.ns].data.dataExport &&
                    f[ensightenOptions.ns].data.dataExport(b, d, a.collection);
                  f[ensightenOptions.ns].when.all(c).then(
                    function (a) {
                      g.resolve(a);
                    },
                    function (a) {
                      g.reject(a);
                    }
                  );
                },
                g = f[ensightenOptions.ns].when.defer();
              try {
                var q = a.trigger();
              } catch (r) {
                f[ensightenOptions.ns].reportException(
                  new c.DataDefinitionException(
                    null,
                    '"' +
                      r +
                      '" error caught in Data Definition trigger: ' +
                      a.dataDefName +
                      ', ID:' +
                      a.id +
                      '. Using bottom of body trigger.'
                  )
                ),
                  (q = f[ensightenOptions.ns].data.bottomOfBodyTrigger());
              }
              q.then(
                function () {
                  g.resolve(
                    f[ensightenOptions.ns].when.reduce(
                      [
                        (function () {
                          try {
                            return h();
                          } catch (r) {
                            return (
                              f[ensightenOptions.ns].reportException(
                                new c.DataDefinitionException(
                                  null,
                                  '"' +
                                    r +
                                    '" error caught in Data Definition extractor: ' +
                                    a.dataDefName +
                                    ', ID:' +
                                    a.id +
                                    '.'
                                )
                              ),
                              null
                            );
                          }
                        })(),
                        function () {
                          try {
                            return k.apply(this, arguments);
                          } catch (r) {
                            return (
                              f[ensightenOptions.ns].reportException(
                                new c.DataDefinitionException(
                                  null,
                                  '"' +
                                    r +
                                    '" error caught in Data Definition transformer: ' +
                                    a.dataDefName +
                                    ', ID ' +
                                    a.id +
                                    '.'
                                )
                              ),
                              null
                            );
                          }
                        },
                        n,
                      ],
                      function (b, d, c, e) {
                        if (1 == c) return d(b);
                        2 == c && d(a.name, b);
                      }
                    )
                  );
                },
                function (a) {
                  g.reject(a);
                }
              );
              c.dataDefinitions[a.id] = a;
              c.dataDefinitionsBySourceCollName[
                '' + a.source + '.' + a.collection + '.' + a.dataDefName
              ] = a;
              return g.promise;
            };
            e.checkConditions = function (a) {
              var d,
                b = {
                  lt: function (a, b) {
                    var d = +a,
                      e = +b;
                    return isNaN(d) || isNaN(e)
                      ? (f[ensightenOptions.ns].reportException(
                          new c.DataDefinitionException(
                            null,
                            'Value(s) cannot be converted to number: compareWith: ' +
                              a +
                              ', compareTo: ' +
                              b
                          )
                        ),
                        !1)
                      : d < e;
                  },
                  gt: function (a, b) {
                    var d = +a,
                      e = +b;
                    return isNaN(d) || isNaN(e)
                      ? (f[ensightenOptions.ns].reportException(
                          new c.DataDefinitionException(
                            null,
                            'Value(s) cannot be converted to number: compareWith: ' +
                              a +
                              ', compareTo: ' +
                              b
                          )
                        ),
                        !1)
                      : d > e;
                  },
                  eql: function (a, b) {
                    return a == b;
                  },
                  exists: function (a, b) {
                    return null == a || a == p || '' == a ? !1 : !0;
                  },
                  re: function (a, b, d) {
                    b = new RegExp(b, d ? 'i' : '');
                    try {
                      return a.match(b);
                    } catch (q) {
                      return !1;
                    }
                  },
                  starts: function (a, d, c) {
                    d = e.utils.escapeRegEx(d);
                    return b.re(a, '^' + d, c);
                  },
                  ends: function (a, d, c) {
                    d = e.utils.escapeRegEx(d);
                    return b.re(a, d + '$', c);
                  },
                  contains: function (a, d, c) {
                    d = e.utils.escapeRegEx(d);
                    return b.re(a, '.*' + d + '.*', c);
                  },
                };
              b.is = b.eql;
              b['starts with'] = b.starts;
              b['ends with'] = b.ends;
              b['is greater than'] = b.gt;
              b['is less than'] = b.lt;
              b.matches = b.re;
              for (d = 0; d < a.values.length; d++) {
                var h = (a.customComparator
                  ? a.customComparator[d]
                    ? a.customComparator[d]
                    : b[a.comparators[d]]
                  : b[a.comparators[d]])(
                  a.values[d],
                  a.compareTo[d],
                  a.caseInsensitive ? a.caseInsensitive[d] || !1 : !1
                );
                a.not[d] && (h = !h);
                if (!h) return !1;
              }
              return !0;
            };
            e.triggerPromise = function (a, d, b) {
              b = b || 5000;
              var c = +new Date(),
                e = f[ensightenOptions.ns].when.defer();
              (function () {
                var f = a();
                f != d
                  ? e.resolve(f)
                  : +new Date() - c < b
                  ? setTimeout(arguments.callee, 200)
                  : e.reject('timed out');
              })();
              return e.promise;
            };
            e.timeoutPromise = function (a, d) {
              var b = f[ensightenOptions.ns].when.defer();
              d = d || 800;
              a.then(b.resolve, b.reject);
              setTimeout(function () {
                b.reject(Error('timed out'));
              }, d);
              return b.promise;
            };
            e.delayTrigger = function (a) {
              a = a || 10;
              var d = f[ensightenOptions.ns].when.defer();
              setTimeout(function () {
                d.resolve();
              }, a);
              return d.promise;
            };
            e.delayUntilTrigger = function (a, d, b, c) {
              b = b || null;
              c = c || 200;
              var e = +new Date(),
                h = f[ensightenOptions.ns].when.defer();
              (function () {
                var g = a();
                g != d
                  ? h.resolve(g)
                  : b
                  ? +new Date() - e < b
                    ? setTimeout(arguments.callee, c)
                    : h.reject('timed out')
                  : setTimeout(arguments.callee, c);
              })();
              return h.promise;
            };
            c.applyTrigger = function (a) {
              var d = f[ensightenOptions.ns].when.defer();
              a(function () {
                d.resolve(!0);
              });
              return d.promise;
            };
            e.immediateTrigger = function () {
              return c.applyTrigger(f[ensightenOptions.ns].bindImmediate);
            };
            e.bottomOfBodyTrigger = function () {
              return c.applyTrigger(f[ensightenOptions.ns].bindDOMParsed);
            };
            e.whenValueExistsTrigger = function () {
              return f[ensightenOptions.ns].when.resolve(this.extract());
            };
            e.afterEnsightenCompleteTrigger = function () {
              return c.applyTrigger(f[ensightenOptions.ns].bindPageSpecificCompletion);
            };
            e.afterElementsDownloadedTrigger = function () {
              return c.applyTrigger(f[ensightenOptions.ns].bindDOMLoaded);
            };
            e.getAllDataDefinitionsOnCurrentPage = function () {
              return c.dataDefinitions;
            };
            e.getAllDataDefinitionsOnCurrentPage_S_C_N = function () {
              return c.dataDefinitionsBySourceCollName;
            };
            e.getDataDefinitionById = function (a) {
              return c.dataDefinitions[a || -1] || {};
            };
            e.getDataDefinitionBySourceCollectionName = function (a, d, b) {
              return c.dataDefinitionsBySourceCollName['' + a + '.' + d + '.' + b] || {};
            };
            e.getDataDefinitionByPercentSyntax = function (a) {
              a = ('' + a).split('_');
              return 1 > a.length ? {} : c.dataDefinitions[a[1]] || {};
            };
            e.resolve = function (a, d) {
              var b = this,
                h = null;
              if (!c.checkForInvalidDataDefinitions(a))
                if (d)
                  f[ensightenOptions.ns].bindDataDefinitionComplete(function () {
                    var e = c.collectAvailableDataDefinitions(a);
                    e.isInvalid ||
                      f[ensightenOptions.ns].when.all(e.promises).then(
                        function (e) {
                          try {
                            d.apply(b, e);
                          } catch (r) {
                            f[ensightenOptions.ns].reportException(
                              new c.DataDefinitionException(
                                a,
                                'Error resolving data definitions: ' + a + '. Details: ' + r
                              )
                            );
                          }
                        },
                        function (b) {
                          f[ensightenOptions.ns].reportException(
                            new c.DataDefinitionException(
                              a,
                              'Error resolving data definitions: ' + a + '. Details: ' + b
                            )
                          );
                        }
                      );
                  });
                else {
                  h = [];
                  var k = a;
                  e.utils.isArray(a) || (k = [a]);
                  for (var m = 0; m < k.length; m++) h.push(c.getSync(k[m]));
                  return (h = e.utils.isArray(a) ? h : h[0]);
                }
            };
            e.extract = function (a, d) {
              var b = '',
                c = function (a, b) {
                  var d = ~b.indexOf('#') ? b.split('#')[1] : '',
                    c = d ? 0 : ~b.indexOf('[') ? parseInt(b.match(/\[(\d+)\]/)[1]) : 0,
                    e = (d ? b.split('#')[0] : c ? b.split('[')[0] : b).toLowerCase();
                  if (a == document && 'html' == e && 0 == c)
                    return document.getElementsByTagName('html')[0];
                  if (~b.indexOf('#')) return document.getElementById(b.split('#')[1]);
                  var g = a.firstChild;
                  if (!g) return null;
                  var f = 0;
                  for (c = 0 != c ? c - 1 : c; g; ) {
                    if (1 == g.nodeType) {
                      if (
                        (g.tagName.toLowerCase() == e && '' != d && g.id == d) ||
                        (g.tagName.toLowerCase() == e && f == c && '' == d)
                      )
                        return g;
                      g.tagName.toLowerCase() == e && f++;
                    }
                    g = g.nextSibling;
                  }
                },
                e = function (a, b) {
                  a = a.split('/');
                  for (var d = c(b || document, a[1]), e = 2; e < a.length; e++) {
                    if (null == d) return null;
                    d = c(d, a[e]);
                  }
                  return d;
                },
                h = (function () {
                  for (
                    var a = {},
                      b = f.document.getElementsByTagName('META') || [],
                      d = 0,
                      c = b.length;
                    d < c;
                    d++
                  ) {
                    var e = b[d].name || b[d].getAttribute('property') || '';
                    0 !== e.length && (a[e] = b[d].content);
                  }
                  return a;
                })(),
                g = function (a) {
                  var b = h[a];
                  if (b) return b;
                  b = f.document.getElementsByTagName('META') || [];
                  for (var d = 0, c = b.length; d < c; d++) {
                    var e = b[d].name || b[d].getAttribute('property') || '';
                    if (a == e) return b[d].content;
                  }
                },
                q = function (a) {
                  return (val = new RegExp('&' + a + '=([^&]*)').exec(
                    f.location.search.replace(/^\?/, '&')
                  ))
                    ? val[0].split('=')[1]
                    : '';
                },
                r = function (a) {
                  return (val = new RegExp('^' + a + '=.*|;\\s*' + a + '=.*').exec(
                    f.document.cookie
                  ))
                    ? val[0].split('=')[1].split(';')[0]
                    : '';
                },
                m = function (a) {
                  (a = l(a)) &&
                    a.nodeType &&
                    1 == a.nodeType &&
                    (a = a.value || a.innerHTML || '');
                  return a.toString().replace(/\n|\r|\s\s+/g, '') || '';
                },
                l = function (a) {
                  var b = '';
                  if (0 == a.indexOf('/HTML/BODY')) b = e(a);
                  else
                    try {
                      b = eval(a);
                    } catch (A) {
                      b = '';
                    }
                  return b;
                };
              try {
                return (
                  d
                    ? 'meta' == d
                      ? (b = g(a))
                      : 'cookie' == d
                      ? (b = r(a))
                      : 'param' == d
                      ? (b = q(a))
                      : 'content' == d
                      ? (b = m(a))
                      : 'event' == d
                      ? (b = l(a))
                      : 'var' == d && (b = f[a])
                    : (b = g(a) || r(a) || q(a) || m(a) || l(a) || f[a] || ''),
                  b || ''
                );
              } catch (x) {
                return '';
              }
            };
            if ('undefined' == typeof h) var h = { exports: {} };
            return e;
          })(window)),
          window[ensightenOptions.ns].data.defineEngine(
            'store',
            (function () {
              const $___old_37842c826fb6ac46 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              );
              try {
                if ($___old_37842c826fb6ac46)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_053c907fde22f83d.localStorage
                  ));
                return function () {
                  function f (a) {
                    return function () {
                      var d = Array.prototype.slice.call(arguments, 0);
                      d.unshift(b);
                      k.appendChild(b);
                      b.addBehavior('#default#userData');
                      b.load(h);
                      d = a.apply(store, d);
                      k.removeChild(b);
                      return d;
                    };
                  }
                  function p (a) {
                    return a.replace(l, '___');
                  }
                  var l = RegExp('[!"#$%&\'()*+,/\\\\:;<=>?@[\\]^`{|}~]', 'g'),
                    c = {},
                    e = window,
                    m = e.document,
                    h = 'localStorage',
                    a,
                    d =
                      Array.isArray ||
                      function (a) {
                        return '[object Array]' === Object.prototype.toString.call(a);
                      };
                  c.set = function (a, b) {};
                  c.get = function (a) {};
                  c.remove = function (a) {};
                  c.clear = function () {};
                  try {
                    if (h in e && e[h]) {
                      var b = e[h];
                      c.set = function (a, c) {
                        var e,
                          g =
                            window.JSON && window.JSON.stringify
                              ? window.JSON
                              : window[ensightenOptions.ns].JSON;
                        if (d(a)) {
                          var f = 0;
                          for (e = a.length; f < e; f++)
                            b.setItem(a[f], 'string' === typeof c[f] ? c[f] : g.stringify(c[f]));
                        } else b.setItem(a, 'string' === typeof c ? c : g.stringify(c));
                      };
                      c.get = function (a) {
                        if (d(a)) {
                          var c = {},
                            e;
                          var f = 0;
                          for (e = a.length; f < e; f++) c[a[f]] = b.getItem(a[f]);
                          return c;
                        }
                        return b.getItem(a);
                      };
                      c.remove = function (a) {
                        if (d(a)) {
                          var c;
                          var e = 0;
                          for (c = a.length; e < c; e++) b.removeItem(a[e]);
                        } else b.removeItem(a);
                      };
                      c.clear = function () {
                        b.clear();
                      };
                      c.all = function () {
                        return b;
                      };
                    } else if ('globalStorage' in e && e.globalStorage)
                      (b = e.globalStorage[e.location.hostname]),
                        (c.set = function (a, c) {
                          if (d(a)) {
                            var e;
                            var f = 0;
                            for (e = a.length; f < e; f++) b[a[f]] = c[f];
                          } else b[a] = c;
                        }),
                        (c.get = function (a) {
                          if (d(a)) {
                            var c = {},
                              e;
                            var f = 0;
                            for (e = a.length; f < e; f++) c[a[f]] = b[a[f]] && b[a[f]].value;
                            return c;
                          }
                          return b[a] && b[a].value;
                        }),
                        (c.remove = function (a) {
                          if (d(a)) {
                            var c;
                            var e = 0;
                            for (c = a.length; e < c; e++) delete b[a[e]];
                          } else delete b[a];
                        }),
                        (c.clear = function () {
                          for (var a in b) delete b[a];
                        }),
                        (c.all = function () {
                          return b;
                        });
                    else if (m.documentElement.addBehavior) {
                      try {
                        var t = new ActiveXObject('htmlfile');
                        t.open();
                        t.write(
                          '<script>document.w=window</script><iframe src="/favicon.ico"></frame>'
                        );
                        t.close();
                        var k = t.w.frames[0].document;
                        b = k.createElement('div');
                      } catch (g) {
                        (b = m.createElement('div')), (k = m.body);
                      }
                      c.set = f(function (a, b, e) {
                        if (d(b)) {
                          var f;
                          var g = 0;
                          for (f = b.length; g < f; g++) {
                            fixedKey = p(b[g]);
                            if (void 0 === e[g]) return c.remove(fixedKey);
                            a.setAttribute(fixedKey, e[g]);
                            a.save(h);
                          }
                        } else {
                          fixedKey = p(b);
                          if (void 0 === e) return c.remove(fixedKey);
                          a.setAttribute(fixedKey, e);
                          a.save(h);
                        }
                      });
                      c.get = f(function (a, b) {
                        if (d(b)) {
                          var c = {},
                            e;
                          var f = 0;
                          for (e = b.length; f < e; f++) {
                            var g = p(b[f]);
                            c[b[f]] = a.getAttribute(g);
                          }
                          return c;
                        }
                        b = p(b);
                        return a.getAttribute(b);
                      });
                      c.remove = f(function (a, b) {
                        if (d(b)) {
                          var c;
                          var e = 0;
                          for (c = b.length; e < c; e++) a.removeAttribute(p(b[e])), a.save(h);
                        } else (b = p(b)), a.removeAttribute(b), a.save(h);
                      });
                      c.clear = f(function (a) {
                        var b = a.XMLDocument.documentElement.attributes;
                        a.load(h);
                        for (var d = 0, c; (c = b[d]); d++) a.removeAttribute(c.name);
                        a.save(h);
                      });
                      c.all = f(function (a) {
                        for (
                          var b = a.XMLDocument.documentElement.attributes, d = {}, c = 0, e;
                          (e = b[c]);
                          ++c
                        ) {
                          var f = p(e.name);
                          d[e.name] = a.getAttribute(f);
                        }
                        return d;
                      });
                    }
                  } catch (g) {}
                  var n = {};
                  for (a in c) n[a] = c[a];
                  n.testStorage = function () {
                    try {
                      var a = 'tk_' + Math.ceil(50000000 * Math.random());
                      n.set(a, 'test');
                      if ('test' === n.get(a)) return n.remove(a), !0;
                    } catch (q) {}
                    return !1;
                  };
                  c.utils = n;
                  return (window[ensightenOptions.ns].data.local = c);
                }.apply(this, arguments);
              } finally {
                if ($___old_37842c826fb6ac46)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_37842c826fb6ac46
                  ));
              }
            })()
          ),
          window[ensightenOptions.ns].data.defineEngine(
            'cookie',
            (function (f, p) {
              var l = function () {
                  return l.get.apply(l, arguments);
                },
                c = (l.utils = {
                  isArray:
                    Array.isArray ||
                    function (c) {
                      return '[object Array]' === Object.prototype.toString.call(c);
                    },
                  isPlainObject: window[ensightenOptions.ns].data.utils.isPlainObject,
                  toArray: function (c) {
                    return Array.prototype.slice.call(c);
                  },
                  getKeys:
                    Object.keys ||
                    function (c) {
                      var e = [],
                        f = '';
                      for (f in c) c.hasOwnProperty(f) && e.push(f);
                      return e;
                    },
                  escape: function (c) {
                    return String(c).replace(/[,;"\\=\s%]/g, function (c) {
                      return encodeURIComponent(c);
                    });
                  },
                  retrieve: function (c, f) {
                    return null == c ? f : c;
                  },
                  getAllCookies: function () {
                    if ('' === f.cookie) return {};
                    for (var c = f.cookie.split('; '), m = {}, h = 0, a = c.length; h < a; h++) {
                      var d = c[h].split('=');
                      m[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
                    }
                    return m;
                  },
                  set: function (e, m, h) {
                    h = h || -1;
                    if (c.isPlainObject(e))
                      for (var a in e) e.hasOwnProperty(a) && l.set(a, e[a], m);
                    else if (c.isArray(e)) {
                      var d;
                      a = 0;
                      for (d = e.length; a < d; a++) l.set(e[a], m[a], h);
                    } else {
                      a = h.expires !== p ? h.expires : l.defaults.expires || '';
                      'number' === typeof a && (a = new Date(a));
                      a =
                        c.isPlainObject(a) && 'toGMTString' in a
                          ? ';expires=' + a.toGMTString()
                          : c.isPlainObject(a) && a instanceof Date
                          ? ';expires=' + a.toUTCString()
                          : ';expires=' + a;
                      d = (d = h.path || l.defaults.path) ? ';path=' + d : '';
                      var b = h.domain || l.defaults.domain;
                      b = b ? ';domain=' + b : '';
                      h = h.secure || l.defaults.secure ? ';secure' : '';
                      f.cookie = c.escape(e) + '=' + c.escape(m) + a + d + b + h;
                    }
                  },
                  get: function (e, f) {
                    f = f || p;
                    var h = c.getAllCookies();
                    if (c.isArray(e)) {
                      for (var a = {}, d = 0, b = e.length; d < b; d++)
                        (a[e[d]] = c.retrieve(h[e[d]], f)), a[e[d]] === p && (a[e[d]] = null);
                      return a;
                    }
                    a = c.retrieve(h[e], f);
                    return a === p ? null : a;
                  },
                  getGMTString: function (c) {
                    var e = new Date();
                    e.setTime(e.getTime() + 86400000 * c);
                    return e.toGMTString();
                  },
                });
              l.defaults = { path: '/', expires: c.getGMTString(90) };
              l.set = function (e, f) {
                c.set(e, f);
              };
              l.remove = function (e) {
                e = c.isArray(e) ? e : c.toArray(arguments);
                for (var f = 0, h = e.length; f < h; f++) c.set(e[f], '', { expires: -1 });
              };
              l.clear = function () {
                return l.remove(c.getKeys(c.getAllCookies()));
              };
              l.get = function (e, f) {
                return c.get(e, f);
              };
              l.all = function () {
                return c.getAllCookies();
              };
              l.utils = c;
              return (window[ensightenOptions.ns].data.cookie = l);
            })(document)
          ));
        window[ensightenOptions.ns].ensEvent ||
          ((window[ensightenOptions.ns].ensEvent = (function (p, u) {
            var k = {
              queue: {},
              pollQueue: {},
              pushTrigger: function (b, c) {
                if ('[object Array]' === Object.prototype.toString.call(b)) {
                  for (var g = 0; g < b.length; g++) k.pushTrigger(b[g], c);
                  return !0;
                }
                if ('string' != typeof b) return !1;
                this.queue[b] = this.queue[b] || { fn: [] };
                'function' == typeof c && this.queue[b].fn.push(c);
                return !0;
              },
              callTrigger: function (b, c, g) {
                if ('string' != typeof b) return !1;
                b = k.queue[b];
                if (
                  'object' == typeof b &&
                  b.fn &&
                  b.fn.length &&
                  ((0 != b.fireOnFirstSet && c == u) || (c != u && 0 != b.fireOnUpdate))
                )
                  for (c = 0; c < b.fn.length; c++)
                    try {
                      b.fn[c].call(this);
                    } catch (n) {
                      p[ensightenOptions.ns].reportException(n);
                    }
              },
              setPollOptions: function (b, c, g) {
                this.queue[b] = this.queue[b] || { fn: [] };
                this.queue[b].fireOnFirstSet = c;
                this.queue[b].fireOnUpdate = g;
              },
              callPoll: function (b, c, g, p, r) {
                if ('string' == typeof b && c && c.length && !(1 > c.length)) {
                  for (var n = 0; n < c.length; n++) k.setPollOptions(c[n], p, r);
                  k.pushWatch(b, c, g);
                }
              },
              pushWatch: function (b, c, g) {
                this.pollQueue[b] ||
                  (this.pollQueue[b] = { previousVal: u, eventArr: [], valueFn: g });
                this.pollQueue[b].eventArr = this.pollQueue[b].eventArr.concat(c);
                this.pollQueue[b].valueFn = g;
              },
              globalWatch: function () {
                setInterval(function () {
                  for (var b in k.pollQueue) {
                    var c = k.pollQueue[b],
                      g = c.valueFn(b);
                    if (c.previousVal !== g && null !== g && '' !== g) {
                      for (var n = 0; n < c.eventArr.length; n++)
                        k.callTrigger.call(p, c.eventArr[n], c.previousVal, g);
                      k.pollQueue[b].previousVal = g;
                    }
                  }
                }, 500);
              },
            };
            k.globalWatch();
            return {
              add: function (b, c) {
                return k.pushTrigger(b, c);
              },
              get: function (b) {
                return k.queue[b];
              },
              trigger: function (b, c) {
                return k.callTrigger.call(c || p, b);
              },
              poll: function (b, c, g, n, r) {
                r = r || p[ensightenOptions.ns].data.resolve;
                return k.callPoll(b, c, r, g, n);
              },
            };
          })(window)),
          (function (p, u, k) {
            u[p] = k();
          })('qwery', window[ensightenOptions.ns], function () {
            function p () {
              this.c = {};
            }
            function u (a) {
              return H.g(a) || H.s(a, '(^|\\s+)' + a + '(\\s+|$)', 1);
            }
            function k (a, d) {
              for (var e = 0, f = a.length; e < f; e++) d(a[e]);
            }
            function b (a) {
              for (var d = [], e = 0, f = a.length; e < f; ++e)
                l(a[e]) ? (d = d.concat(a[e])) : (d[d.length] = a[e]);
              return d;
            }
            function c (a) {
              for (var d = 0, e = a.length, f = []; d < e; d++) f[d] = a[d];
              return f;
            }
            function g (a) {
              for (; (a = a.previousSibling) && 1 != a.nodeType; );
              return a;
            }
            function n (a, d, e, f, b, h, l, c, g, k, y) {
              var I, B, m;
              if (
                1 !== this.nodeType ||
                (d && '*' !== d && this.tagName && this.tagName.toLowerCase() !== d) ||
                (e && (I = e.match(Q)) && I[1] !== this.id)
              )
                return !1;
              if (e && (m = e.match(R)))
                for (a = m.length; a--; ) if (!u(m[a].slice(1)).test(this.className)) return !1;
              if (g && v.pseudos[g] && !v.pseudos[g](this, y)) return !1;
              if (f && !l)
                for (B in ((g = this.attributes), g))
                  if (Object.prototype.hasOwnProperty.call(g, B) && (g[B].name || B) == b)
                    return this;
              return f && !x(h, S(this, b) || '', l) ? !1 : this;
            }
            function r (a) {
              return J.g(a) || J.s(a, a.replace(T, '\\$1'));
            }
            function x (a, d, e) {
              switch (a) {
                case '=':
                  return d == e;
                case '^=':
                  return d.match(w.g('^=' + e) || w.s('^=' + e, '^' + r(e), 1));
                case '$=':
                  return d.match(w.g('$=' + e) || w.s('$=' + e, r(e) + '$', 1));
                case '*=':
                  return d.match(w.g(e) || w.s(e, r(e), 1));
                case '~=':
                  return d.match(
                    w.g('~=' + e) || w.s('~=' + e, '(?:^|\\s+)' + r(e) + '(?:\\s+|$)', 1)
                  );
                case '|=':
                  return d.match(w.g('|=' + e) || w.s('|=' + e, '^' + r(e) + '(-|$)', 1));
              }
              return 0;
            }
            function q (a, d) {
              var e = [],
                f = [],
                b,
                h,
                l = d,
                c = C.g(a) || C.s(a, a.split(K)),
                g = a.match(L);
              if (!c.length) return e;
              var m = (c = c.slice(0)).pop();
              c.length && (b = c[c.length - 1].match(M)) && (l = N(d, b[1]));
              if (!l) return e;
              var y = m.match(E);
              var v =
                l !== d && 9 !== l.nodeType && g && /^[+~]$/.test(g[g.length - 1])
                  ? (function (a) {
                      for (; (l = l.nextSibling); )
                        1 == l.nodeType &&
                          (y[1] ? y[1] == l.tagName.toLowerCase() : 1) &&
                          (a[a.length] = l);
                      return a;
                    })([])
                  : l.getElementsByTagName(y[1] || '*');
              b = 0;
              for (m = v.length; b < m; b++) if ((h = n.apply(v[b], y))) e[e.length] = h;
              if (!c.length) return e;
              k(e, function (a) {
                t(a, c, g) && (f[f.length] = a);
              });
              return f;
            }
            function t (a, d, e, b) {
              function l (a, b, c) {
                for (; (c = U[e[b]](c, a)); )
                  if (f(c) && n.apply(c, d[b].match(E)))
                    if (b) {
                      if ((h = l(c, b - 1, c))) return h;
                    } else return c;
              }
              var h;
              return (h = l(a, d.length - 1, a)) && (!b || z(h, b));
            }
            function f (a, d) {
              return a && 'object' === typeof a && (d = a.nodeType) && (1 == d || 9 == d);
            }
            function h (a) {
              var d = [],
                e;
              var f = 0;
              a: for (; f < a.length; ++f) {
                for (e = 0; e < d.length; ++e) if (d[e] == a[f]) continue a;
                d[d.length] = a[f];
              }
              return d;
            }
            function l (a) {
              return 'object' === typeof a && isFinite(a.length);
            }
            function N (a, d, e) {
              return 9 === a.nodeType
                ? a.getElementById(d)
                : a.ownerDocument &&
                    (((e = a.ownerDocument.getElementById(d)) && z(e, a) && e) ||
                      (!z(a, a.ownerDocument) && F('[id="' + d + '"]', a)[0]));
            }
            function v (a, d) {
              var e, h;
              var g = d ? ('string' == typeof d ? v(d)[0] : !d.nodeType && l(d) ? d[0] : d) : m;
              if (!g || !a) return [];
              if (a === window || f(a)) return !d || (a !== window && f(g) && z(a, g)) ? [a] : [];
              if (a && l(a)) return b(a);
              if ((e = a.match(V))) {
                if (e[1]) return (h = N(g, e[1])) ? [h] : [];
                if (e[2]) return c(g.getElementsByTagName(e[2]));
                if (W && e[3]) return c(g.getElementsByClassName(e[3]));
              }
              return F(a, g);
            }
            function y (a, d) {
              return function (e) {
                var f, b;
                O.test(e)
                  ? 9 !== a.nodeType &&
                    ((b = f = a.getAttribute('id')) ||
                      a.setAttribute('id', (b = '__qwerymeupscotty')),
                    d(a.parentNode || a, '[id="' + b + '"]' + e, !0),
                    f || a.removeAttribute('id'))
                  : e.length && d(a, e, !1);
              };
            }
            var m = document,
              D = m.documentElement,
              F,
              Q = /#([\w\-]+)/,
              R = /\.[\w\-]+/g,
              M = /^#([\w\-]+)$/,
              X = /^([\w]+)?\.([\w\-]+)$/,
              O = /(^|,)\s*[>~+]/,
              Y = /^\s+|\s*([,\s\+~>]|$)\s*/g,
              A = /[\s>\+~]/,
              P = /(?![\s\w\-\/\?&=:\.\(\)!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
              T = /([.*+?\^=!:${}()|\[\]\/\\])/g,
              V = new RegExp(M.source + '|' + /^([\w\-]+)$/.source + '|' + /^\.([\w\-]+)$/.source),
              L = new RegExp('(' + A.source + ')' + P.source, 'g'),
              K = new RegExp(A.source + P.source),
              E = new RegExp(
                /^(\*|[a-z0-9]+)?(?:([\.#]+[\w\-\.#]+)?)/.source +
                  '(' +
                  /\[([\w\-]+)(?:([\|\^\$\*~]?=)['"]?([ \w\-\/\?&=:\.\(\)!,@#%<>\{\}\$\*\^]+)["']?)?\]/
                    .source +
                  ')?(' +
                  /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/.source +
                  ')?'
              ),
              U = {
                ' ': function (a) {
                  return a && a !== D && a.parentNode;
                },
                '>': function (a, d) {
                  return a && a.parentNode == d.parentNode && a.parentNode;
                },
                '~': function (a) {
                  return a && a.previousSibling;
                },
                '+': function (a, d, e, f) {
                  return a ? (e = g(a)) && (f = g(d)) && e == f && e : !1;
                },
              };
            p.prototype = {
              g: function (a) {
                return this.c[a] || void 0;
              },
              s: function (a, d, e) {
                d = e ? new RegExp(d) : d;
                return (this.c[a] = d);
              },
            };
            var H = new p(),
              J = new p(),
              w = new p(),
              C = new p(),
              z =
                'compareDocumentPosition' in D
                  ? function (a, d) {
                      return 16 == (d.compareDocumentPosition(a) & 16);
                    }
                  : 'contains' in D
                  ? function (a, d) {
                      d = 9 === d.nodeType || d == window ? D : d;
                      return d !== a && d.contains(a);
                    }
                  : function (a, d) {
                      for (; (a = a.parentNode); ) if (a === d) return 1;
                      return 0;
                    },
              S = (function () {
                var a = m.createElement('p');
                return ((a.innerHTML = '<a href="#x">x</a>'),
                '#x' != a.firstChild.getAttribute('href'))
                  ? function (a, e) {
                      return 'class' === e
                        ? a.className
                        : 'href' === e || 'src' === e
                        ? a.getAttribute(e, 2)
                        : a.getAttribute(e);
                    }
                  : function (a, e) {
                      return a.getAttribute(e);
                    };
              })(),
              W = !!m.getElementsByClassName,
              Z = m.querySelector && m.querySelectorAll,
              aa = function (a, d) {
                var e = [],
                  f,
                  b;
                try {
                  if (9 === d.nodeType || !O.test(a)) return c(d.querySelectorAll(a));
                  k(
                    (f = a.split(',')),
                    y(d, function (a, d) {
                      b = a.querySelectorAll(d);
                      1 == b.length ? (e[e.length] = b.item(0)) : b.length && (e = e.concat(c(b)));
                    })
                  );
                  return 1 < f.length && 1 < e.length ? h(e) : e;
                } catch (ba) {}
                return G(a, d);
              },
              G = function (a, d) {
                var e = [],
                  f,
                  b;
                a = a.replace(Y, '$1');
                if ((f = a.match(X))) {
                  var l = u(f[2]);
                  f = d.getElementsByTagName(f[1] || '*');
                  var c = 0;
                  for (b = f.length; c < b; c++) l.test(f[c].className) && (e[e.length] = f[c]);
                  return e;
                }
                k(
                  (f = a.split(',')),
                  y(d, function (a, f, h) {
                    l = q(f, a);
                    c = 0;
                    for (b = l.length; c < b; c++)
                      if (9 === a.nodeType || h || z(l[c], d)) e[e.length] = l[c];
                  })
                );
                return 1 < f.length && 1 < e.length ? h(e) : e;
              };
            A = function (a) {
              'undefined' !== typeof a.useNativeQSA && (F = a.useNativeQSA ? (Z ? aa : G) : G);
            };
            A({ useNativeQSA: !0 });
            v.configure = A;
            v.uniq = h;
            v.is = function (a, d, e) {
              if (f(d)) return a == d;
              if (l(d)) return !!~b(d).indexOf(a);
              for (var c = d.split(','), h; (d = c.pop()); )
                if (
                  ((h = C.g(d) || C.s(d, d.split(K))),
                  (d = d.match(L)),
                  (h = h.slice(0)),
                  n.apply(a, h.pop().match(E)) && (!h.length || t(a, h, d, e)))
                )
                  return !0;
              return !1;
            };
            v.pseudos = {};
            return v;
          }),
          (function () {
            function p (f, b, c) {
              n || (n = window[ensightenOptions.ns].qwery);
              var h = n;
              if ((h = h.call(c, b, c)) && 0 < h.length) {
                if ('_root' == b) f = c;
                else if (f === c) f = void 0;
                else {
                  b: {
                    for (var l = h.length, g = 0; g < l; g++)
                      if (f === h[g]) {
                        h = !0;
                        break b;
                      }
                    h = !1;
                  }
                  h || (f.parentNode ? (r++, (f = p(f.parentNode, b, c))) : (f = void 0));
                }
                return f;
              }
              return !1;
            }
            function u (f, b, c, g) {
              q[f.id] || (q[f.id] = {});
              q[f.id][b] || (q[f.id][b] = {});
              q[f.id][b][c] || (q[f.id][b][c] = []);
              q[f.id][b][c].push(g);
            }
            function k (f, b, c, g) {
              if (g || c)
                if (g)
                  for (var h = 0; h < q[f.id][b][c].length; h++) {
                    if (q[f.id][b][c][h] === g) {
                      q[f.id][b][c].pop(h, 1);
                      break;
                    }
                  }
                else delete q[f.id][b][c];
              else q[f.id][b] = {};
            }
            function b (b, c, l) {
              if (q[b][l]) {
                var f = c.target || c.srcElement,
                  h,
                  k,
                  m = {},
                  n = (k = 0);
                r = 0;
                for (h in q[b][l])
                  q[b][l].hasOwnProperty(h) &&
                    (k = p(f, h, t[b].element)) &&
                    g.matchesEvent(l, t[b].element, k, '_root' == h, c) &&
                    (r++, (q[b][l][h].match = k), (m[r] = q[b][l][h]));
                c.stopPropagation = function () {
                  c.cancelBubble = !0;
                };
                for (k = 0; k <= r; k++)
                  if (m[k])
                    for (n = 0; n < m[k].length; n++) {
                      if (!1 === m[k][n].call(m[k].match, c)) {
                        g.cancel(c);
                        return;
                      }
                      if (c.cancelBubble) return;
                    }
              }
            }
            function c (c, h, l, n) {
              function f (c) {
                return function (f) {
                  b(p, f, c);
                };
              }
              c instanceof Array || (c = [c]);
              l || 'function' != typeof h || ((l = h), (h = '_root'));
              var p = this.id,
                m;
              for (m = 0; m < c.length; m++)
                (q[p] && q[p][c[m]]) || g.addEvent(this, c[m], f(c[m])),
                  n ? k(this, c[m], h, l) : u(this, c[m], h, l);
              return this;
            }
            function g (b, c, l, k) {
              if (('string' == typeof b && 'function' == typeof c) || 'string' == typeof c)
                g(document).on(b, c, l, k || !1);
              if (!(this instanceof g)) {
                for (var f in t) if (t[f].element === b) return t[f];
                x++;
                t[x] = new g(b, x);
                t[x]._on = t[x].on;
                t[x].on = function (b, c, f, g) {
                  var h = 'function' == typeof c ? c : f;
                  if ('function' == typeof c ? f : g)
                    (b = [b]),
                      'string' == typeof c && b.push(c),
                      b.push(
                        (function (b) {
                          return function (c) {
                            c.defaultPrevented || window[ensightenOptions.ns].Delegate.load(this);
                            if (this.nodeName && 'a' != this.nodeName.toLowerCase())
                              return b.call(this);
                            'undefined' != typeof c.preventDefault
                              ? c.preventDefault()
                              : (c.returnValue = !1);
                            b.call(this);
                          };
                        })(h)
                      ),
                      this._on.apply(this, b);
                  else return this._on.call(this, b, c, f);
                };
                return t[x];
              }
              this.element = b;
              this.id = c;
            }
            var n,
              r = 0,
              x = 0,
              q = {},
              t = {};
            g.prototype.on = function (b, g, l) {
              return c.call(this, b, g, l);
            };
            g.prototype.off = function (b, g, l) {
              return c.call(this, b, g, l, !0);
            };
            g.cancel = function (b) {
              b.preventDefault();
              b.stopPropagation();
            };
            g.addEvent = function (b, c, g) {
              b.element.addEventListener(c, g, 'blur' == c || 'focus' == c);
            };
            g.matchesEvent = function () {
              return !0;
            };
            g.load = function (b) {
              setTimeout(
                (function (b, c) {
                  return function () {
                    if (b.nodeName && 'a' == b.nodeName.toLowerCase()) {
                      if (c && /^javascript\s*:/.test(c))
                        return new Function(unescape(c)).call(window);
                      c && (window.location.href = c);
                    }
                  };
                })(b, b.href || ''),
                750
              );
            };
            window[ensightenOptions.ns].Delegate = g;
          })(),
          (function (p) {
            var u = p.addEvent;
            p.addEvent = function (k, b, c) {
              if (k.element.addEventListener) return u(k, b, c);
              'focus' == b && (b = 'focusin');
              'blur' == b && (b = 'focusout');
              k.element.attachEvent('on' + b, c);
            };
            p.cancel = function (k) {
              k.preventDefault && k.preventDefault();
              k.stopPropagation && k.stopPropagation();
              k.returnValue = !1;
              k.cancelBubble = !0;
            };
          })(window[ensightenOptions.ns].Delegate),
          (window[ensightenOptions.ns].on = window[ensightenOptions.ns].Delegate));
        Bootstrapper.dataDefinitionIds = [
          9602,
          7942,
          7943,
          7944,
          7945,
          7946,
          9866,
          7947,
          7948,
          7949,
          7950,
          7951,
          7952,
          7953,
          7954,
          7955,
          7956,
          7957,
          7958,
          7959,
          7960,
          7961,
          7962,
          7963,
          7964,
          11806,
          7075,
          7076,
          7078,
          7079,
          7081,
          12361,
          12362,
          8650,
          12363,
          12365,
          7502,
          7503,
          7504,
          12369,
          12370,
          12372,
          12373,
          7901,
          17765,
          7269,
          6504,
          9449,
          16375,
        ];
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
              Bootstrapper.data.define(
                {
                  extract: function () {
                    (function (countryMetaTags) {
                      var hpmmd = { page: {}, legacy: {} };
                      function defineRegion (cc) {
                        if (!!hpmmd.page) {
                          var cc1 = (!!cc ? cc.toLowerCase() : '') + ':';
                          var ap = 'au:cn:hk:hk:in:id:jp:kr:my:nz:ph:sg:tw:th:vn:',
                            emea =
                              'emea_africa:at:be:be:by:bg:hr:cz:dk:ee:fi:fr:de:gr:hu:ie:il:it:kz:lv:lt:emea_middle_east:nl:no:pl:pt:ro:ru:rs:sa:sk:si:za:es:se:ch:ch:tr:ua:uk:',
                            na = 'us:ca:',
                            la =
                              'ar:bo:br:jm:lamerica_nsc_carib:lamerica_nsc_cnt_amer:cl:co:ec:mx:py:pe:pr:uy:ve:',
                            caemea = 'al:am:az:ba:dz:ge:is:ke:ks:ma:md:mk:mt:ng:tn:pk:bd:lk:';
                          hpmmd.page.major_region = 'ams';
                          hpmmd.page.region = 'na';
                          hpmmd.page.rs_region = cc == 'us' ? 'amerus' : 'amerlaca';
                          hpmmd.legacy.region = 'na';
                          if (na.indexOf(cc1) != -1);
                          if ((caemea + emea).indexOf(cc1) != -1) {
                            hpmmd.page.major_region = 'emea';
                            hpmmd.page.region = 'emea';
                            hpmmd.page.rs_region = 'emea';
                            hpmmd.legacy.region = 'emea';
                          }
                          if (ap.indexOf(cc1) != -1) {
                            hpmmd.page.major_region = 'apj';
                            hpmmd.page.region = 'apj';
                            hpmmd.page.rs_region = 'apj';
                            hpmmd.legacy.region = 'ap';
                          }
                          if (la.indexOf(cc1) != -1) {
                            hpmmd.page.major_region = 'ams';
                            hpmmd.page.region = 'la';
                            hpmmd.page.rs_region = 'amerlaca';
                            hpmmd.legacy.region = 'la';
                          }
                        }
                      }
                      try {
                        defineRegion(countryMetaTags[0].getAttribute('content').toLowerCase());
                      } catch (e) {}
                      return hpmmd.legacy.region || 'na';
                    })(document.getElementsByName('target_country'));
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.afterElementsDownloadedTrigger,
                  dataDefName: 'Marketing Region Definitions',
                  collection: 'Marketing',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '17765' }
              );
            }, 17765);
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
                      return Bootstrapper.data.extract('description', 'meta');
                    } catch (e) {
                      return 'error';
                    }
                  },
                  transform: function (v) {
                    return v;
                  },
                  load: 'page',
                  dataDefName: 'description',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '12369' }
              );
            }, 12369);
          },
          -1,
          -1
        );
        Bootstrapper.bindDependencyImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function () {
              try {
                var isChina =
                  ~window.location.hostname.indexOf('.houston.hp.com') ||
                  ~window.location.hostname.indexOf('.hpstore.cc') ||
                  (location.hostname in
                    {
                      'www.hp.com': 1,
                      'stg.www.hp.com': 1,
                      'www8.hp.com': 1,
                      'stg.www8.hp.com': 1,
                    } &&
                    !!~location.pathname.toLowerCase().indexOf('/cn/zh'));
                var is123 = (window.location.hostname || '').toLowerCase() === '123.hp.com';
                var allowedCountries = [
                    '/us/en/',
                    '/ca/en/',
                    '/ca/fr/',
                    '/uk/en/',
                    '/de/de/',
                    '/au/en/',
                    '/sg/en/',
                    '/in/en/',
                    '/id/en/',
                  ],
                  isNotAllowed = true;
                for (var i = 0; i < allowedCountries.length; i++)
                  if (location.href.toLowerCase().indexOf(allowedCountries[i]) > 0)
                    isNotAllowed = false;
                if (isChina || is123 || isNotAllowed) return;
                Bootstrapper.bindOnGetServerComponent(function () {
                  var snippet = 'https://cdn.optimizely.com/public/2129670914/s/hpcom.js';
                  var cust_tags_obj = {};
                  var local_keys = Object.keys(cust_tags_obj);
                  window.optimizely = window.optimizely || [];
                  if (local_keys[0] !== '')
                    if (local_keys.length === 1)
                      window.optimizely.push([
                        'customTag',
                        local_keys[0],
                        cust_tags_obj[local_keys[0]],
                      ]);
                    else window.optimizely.push(['customTag', cust_tags_obj]);
                  document.write('<script type="text/javascript" src="' + snippet + '"></script>');
                });
              } catch (e) {}
            })();
          },
          3273930,
          [2146211],
          571399,
          [382405]
        );
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.AF = (function () {
              var g = {
                data: {},
                _dataConfig: {},
                logHistory: [],
                debug: !0,
                dataObj: function (a) {
                  var b = a ? [] : '';
                  b.finalized = !1;
                  b.type = a;
                  return b;
                },
                validateInput: function (a) {
                  if ('object' !== typeof a || 'number' !== typeof a.length)
                    return this.log('Error, input must be type Array');
                  /set|push|call|eval|finalize|join/.test(a[0]) ||
                    this.log("Error, '" + a[0] + "' is not a valid command");
                  return !0;
                },
                storeData: function (a, b, d, c, e) {
                  e = this.getConfig(b, d, e);
                  b = this.data[b][d];
                  if (e.finalized)
                    return this.log("Error, cannot modify finalized key '" + d + "'"), b;
                  if ('undefined' !== typeof b && e.multi)
                    return 'join' == a ? (b = b.concat(c)) : b.push(c), b;
                  e.multi ? ((d = [c]), 'join' == a && (d = [].concat(c))) : (d = c);
                  return d;
                },
                getConfig: function (a, b, d, c) {
                  a = this._dataConfig[a] || {};
                  c = {};
                  return 'undefined' == typeof a[b]
                    ? ((c.multi = d), (c.finalized = !1), c)
                    : a[b];
                },
                store: function (a, b, d, c, e) {
                  this.data[b] = this.data[b] || {};
                  this.data[b][d] = this.storeData(a, b, d, c, e);
                  return this.data[b][d];
                },
                parseCode: function (a) {
                  return ((a || function () {}) + '').replace(/^function\s*\(\s*\)\s*\{|\}$/g, '');
                },
                callFn: function (a, b, d, c) {
                  const $___old_e04b5b8975f973f2 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  );
                  try {
                    if ($___old_e04b5b8975f973f2)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_fb986baf23da602c.userAgent
                      ));
                    return function () {
                      if ('function' == typeof a)
                        if (d)
                          'undefined' != typeof window.execScript
                            ? window.execScript(this.parseCode(a))
                            : eval.call(window, this.parseCode(a));
                        else return a.apply(window, c);
                      else if ('function' == typeof this.data[a][b])
                        if (d)
                          'undefined' != typeof window.execScript
                            ? window.execScript(this.parseCode(this.data[a][b]))
                            : eval.call(window, this.parseCode(this.data[a][b]));
                        else
                          return (
                            (c = 'object' == typeof c && 'number' == typeof c.length ? c : []),
                            this.data[a][b].apply(this.data[a], c)
                          );
                      else return this.log("Error, '" + b + "' is not a function");
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_e04b5b8975f973f2)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_e04b5b8975f973f2
                      ));
                  }
                },
                parse: function (a) {
                  if (this.validateInput(a)) {
                    a = Array.prototype.slice.call(a, 0);
                    var b = a.shift(),
                      d = a.shift(),
                      c = a.shift(),
                      e = a[0];
                    if (/set|push|join/.test(b))
                      return this.store(b, d, c, e, /push|join/.test(b));
                    if (/call|eval/.test(b)) return this.callFn(d, c, 'eval' == b, a);
                    if ('finalize' == b)
                      return (
                        (a = this._dataConfig[d] = this._dataConfig[d] || {}),
                        (a = a[c] || { multi: !1 }),
                        (a.finalized = !0),
                        (this._dataConfig[d][c] = a)
                      );
                  }
                },
                log: function (a) {
                  this.logHistory.push(a);
                  return this.debug && 'object' == typeof console ? console.log(a) && !1 : !1;
                },
              };
              if (
                'object' == typeof Bootstrapper.AF &&
                '[object Array]' !== Object.prototype.toString.call(Bootstrapper.AF)
              )
                return Bootstrapper.AF;
              if ('[object Array]' === Object.prototype.toString.call(Bootstrapper.AF))
                for (var h = Bootstrapper.AF, f = 0; f < h.length; f++)
                  try {
                    g.parse(h[f]);
                  } catch (k) {}
              return {
                push: function (a) {
                  return g.parse(a);
                },
              };
            })();
            Bootstrapper.Cookies = (function () {
              return {
                domain: '.hp.com' || location.hostname,
                get: function (a, c) {
                  for (var b = document.cookie.split(';'), d = 0; d < b.length; d++) {
                    var e = b[d].replace(/^\s+/, '').split('=');
                    if (e[0] == a) return c ? e[1] : decodeURIComponent(e[1]);
                  }
                  return '';
                },
                set: function (a, c, b) {
                  document.cookie =
                    a +
                    '=' +
                    encodeURIComponent(c) +
                    (b ? ';expires=' + b : '') +
                    ';path=/;domain=' +
                    this.domain;
                  return this.get(a) == c;
                },
                test: function (a) {
                  return this.get(a) ? !0 : !1;
                },
              };
            })();
            Bootstrapper.dataManager = (function () {
              var _private = {
                  data: {},
                  add: function (o) {
                    if (typeof o == 'object' && o.id) {
                      o.get = function (e) {
                        return Bootstrapper.dataManager.getDataElement(this.id, e);
                      };
                      this.data[o.id] = o;
                    }
                  },
                  getObj: function (i) {
                    if (i) return _private.data[i];
                    return _private.data;
                  },
                  getDataElement: function (i, e) {
                    if (typeof this.data[i] == 'undefined') return '';
                    var dataObj = this.data[i].data,
                      retVal;
                    if (typeof dataObj == 'object') {
                      if (typeof dataObj[e] == 'undefined') return '';
                      dataObj = dataObj[e];
                      if (typeof dataObj.get == 'string') {
                        var d = eval(dataObj.get);
                        if (typeof dataObj.mod == 'string' && dataObj.mod !== '') {
                          var m =
                            '(function(){ return ' +
                            (dataObj.mod === '' ? 'this' : dataObj.mod) +
                            ';})';
                          retVal = eval(m).call(d);
                        } else if (typeof dataObj.mod == 'function')
                          retVal = dataObj.mod.call(d, d);
                        else retVal = d;
                      } else if (typeof dataObj.get == 'function') {
                        var d = dataObj.get.call(this.data[i]);
                        if (typeof dataObj.mod == 'string' && dataObj.mod !== '') {
                          var m =
                            '(function(){ return ' +
                            (dataObj.mod === '' ? 'this' : dataObj.mod) +
                            ';})';
                          retVal = eval(m).call(d);
                        } else if (typeof dataObj.mod == 'function')
                          retVal = dataObj.mod.call(d, d);
                        else retVal = d;
                      }
                      return retVal;
                    }
                  },
                  getDataLayer: function (i) {
                    var retObj = {};
                    var dataObj = this.data[i].data;
                    for (key in dataObj)
                      try {
                        retObj[key] = this.getDataElement(i, key);
                      } catch (e) {
                        retObj[key] = null;
                      }
                    return retObj;
                  },
                  getAllData: function () {
                    var data = this.data,
                      retObj = { _d: {} };
                    for (var key in data) {
                      retObj._d[key] = {};
                      var d = this.getDataLayer(key);
                      for (var k in d) {
                        retObj[k] = d[k];
                        retObj._d[key][k] = d[k];
                      }
                    }
                    return retObj;
                  },
                  getData: function (i) {
                    if (i) return this.getDataLayer(i);
                    else return this.getAllData();
                  },
                  addDataElement: function (layerId, name, o) {
                    if (
                      typeof this.data[layerId] == 'object' &&
                      typeof name == 'string' &&
                      typeof o == 'object'
                    ) {
                      var d = this.data[layerId];
                      d.data[name] = o;
                    }
                  },
                },
                _public = {
                  push: function (dl) {
                    _private.add(dl);
                  },
                  getObj: function (i) {
                    return _private.getObj(i);
                  },
                  getData: function (i) {
                    return _private.getData(i);
                  },
                  getDataElement: function (i, e) {
                    return _private.getDataElement(i, e);
                  },
                  addDataElement: function (layerId, name, o) {
                    return _private.addDataElement(layerId, name, o);
                  },
                };
              return _public;
            })();
            Bootstrapper.dataManager.map = (function () {
              return {
                define: function (n, d) {
                  if (Bootstrapper.data)
                    for (i in d) {
                      var v = typeof d[i] == 'string' ? Bootstrapper.data.extract(d[i]) : d[i]();
                      Bootstrapper.data.dataManagerPush(i, v, n);
                    }
                },
              };
            })();
            window.$data = function (a, b) {
              if (typeof b == 'string')
                try {
                  return Bootstrapper.dataManager.getDataElement(a, b);
                } catch (e) {}
              else if (typeof a == 'string') return Bootstrapper.dataManager.getData()[a] || '';
              return '';
            };
            Bootstrapper.bindOnGetServerComponent(function () {
              var DL =
                Bootstrapper.dataManager && Bootstrapper.targetingExtension
                  ? Bootstrapper.dataManager.getData()
                  : {};
              if (~document.cookie.indexOf('VTP:enabled')) DL['ensightenVT'] = 1;
              if (Bootstrapper.scDataObj) for (i in DL) Bootstrapper.scDataObj[i] = DL[i];
            });
            var ns = window[ensightenOptions.ns];
            ns.VTconfig = ns.VTconfig || {};
            ns.VTconfig['DM'] = this.deploymentId;
            Bootstrapper.dataManager.pushObject = function (obj, id, name) {
              Bootstrapper.dataManager.push({ name: name || id, id: id, data: {} });
              for (var k in obj)
                if (obj[k] && typeof obj[k] !== 'function')
                  Bootstrapper.dataManager.addDataElement(id, k, {
                    name: k,
                    get: (function (o, key) {
                      return function () {
                        return o[key];
                      };
                    })(obj, k),
                  });
            };
            Bootstrapper.getQueryParam = function (key, loc) {
              if (!this.params || loc) {
                var search = loc || window.location.search;
                var params = search.replace(/^\?/, ''),
                  paramObj = {};
                params = params.split('&');
                for (var i = 0; i < params.length; i++) {
                  var t = params[i].split('=');
                  paramObj[t[0]] = t[1];
                }
                if (!loc) this.params = paramObj;
                else return paramObj[key] || '';
              }
              return this.params[key] || '';
            };
            Bootstrapper.getElementXPath = function (e) {
              var n = e;
              var p = '';
              while (n != document.getElementsByTagName('html')[0]) {
                var t = '/' + n.tagName;
                if (n.id != '') {
                  t += '#' + n.id;
                  p = t + p;
                } else {
                  var c = 1;
                  _n = n.previousSibling;
                  while (_n != null) {
                    if (n.tagName == _n.tagName) c++;
                    _n = _n.previousSibling;
                  }
                  p = t + (c != 1 ? '[' + c + ']' : '') + p;
                }
                n = n.parentNode;
              }
              return Bootstrapper.getMinXPath('/HTML' + p);
            };
            Bootstrapper.getMinXPath = function (path) {
              var p = path.split('/'),
                lastId = 0;
              for (var i = 0; i < p.length; i++) if (~p[i].indexOf('#')) lastId = i;
              for (var i = lastId - 1; i > 0; i--)
                if (!p[i].match(/^(html|body)/i)) p.splice(i, 1);
              return p.join('/');
            };
            Bootstrapper.getElementByXPathStep = function (d, a) {
              var c = ~a.indexOf('#') ? a.split('#')[1] : '',
                e = c ? 0 : ~a.indexOf('[') ? parseInt(a.match(/\[(\d+)\]/)[1]) : 0,
                f = (c ? a.split('#')[0] : e ? a.split('[')[0] : a).toLowerCase();
              if (d == document && f == 'html' && e == 0)
                return document.getElementsByTagName('html')[0];
              if (~a.indexOf('#')) return document.getElementById(a.split('#')[1]);
              var b = d.firstChild;
              if (!b) return null;
              for (var g = 0, e = e != 0 ? e - 1 : e; b; ) {
                if (b.nodeType == 1)
                  if (b.tagName.toLowerCase() == f && c != '' && b.id == c) return b;
                  else if (b.tagName.toLowerCase() == f && g == e && c == '') return b;
                  else b.tagName.toLowerCase() == f && g++;
                b = b.nextSibling;
              }
            };
            Bootstrapper.getElementByXPath = function (d, n) {
              for (
                var d = d.split('/'),
                  a = Bootstrapper.getElementByXPathStep(n || document, d[1]),
                  c = 2;
                c < d.length;
                c++
              ) {
                if (a == null) return null;
                a = Bootstrapper.getElementByXPathStep(a, d[c]);
              }
              return a;
            };
            window._log = function (m) {
              window._enslog = window._enslog || [];
              window._enslog.push(m);
              if (console) {
                var v = typeof m == 'string' ? m : '',
                  s = window.location.search,
                  p = ~s.indexOf('ensightenDebug=')
                    ? s.split('ensightenDebug=')[1].split('&')[0].split('#')[0].split(';')[0]
                    : !1;
                if (p && p == 'act') {
                  if (~v.indexOf('$$$')) console.log(v);
                } else if (p && p == 'cloak') {
                  if (~v.indexOf('*** Cloak')) console.log(v);
                } else if (p) console.log(m);
              }
            };
            Bootstrapper.MVT = (function () {
              var g = {},
                h = {
                  split: function (b, a) {
                    var c = [];
                    do {
                      var d = b.shift(),
                        e = [],
                        f = [d];
                      (e = d.x.split('/')).shift();
                      for (d = b.length - 1; -1 < d; d--) {
                        var g = b[d].x.split('/');
                        g.shift();
                        g[0] == e[0] && (f.push(b[d]), b.splice(d, 1));
                      }
                      c.push(f);
                    } while (0 < b.length);
                    for (d = 0; d < c.length; d++)
                      (e = this.getCommon(c[d])), Bootstrapper.MVT.traverse(a, e, c[d]);
                  },
                  getCommon: function (b) {
                    for (var a = [], c = 0; c < b.length; a.push(b[c++].x));
                    if (1 == a.length) return a[0];
                    for (c = 0; c < a.length; (a[c] = a[c++].split('/')).shift());
                    b = a[0];
                    for (c = 1; c < a.length; c++) {
                      for (var d = 0; d < a[c].length; d++)
                        if (a[0][d] != a[c][d]) {
                          var e = d;
                          break;
                        }
                      if (e) break;
                    }
                    return '/' + b.slice(0, e).join('/');
                  },
                  tests: [],
                },
                i = {
                  hidden: [],
                  cloaks: [],
                  EDLutils: !0,
                  initialized: !1,
                  invisibilityCloak: !1,
                  disabled: !!~window.location.search.indexOf('ensTools=disable'),
                  cloakDisabled:
                    (true || !!~window.location.search.indexOf('ensCloak=disable')) &&
                    !~window.location.search.indexOf('ensCloak=enable'),
                  forceSyncCloak:
                    !!~window.location.search.indexOf('ensCloak=') &&
                    !!~window.location.search.indexOf('!resync'),
                  content: {
                    initialized: !1,
                    map: {},
                    list: '',
                    target: function (o) {
                      if (typeof o == 'string' && ~o.indexOf('##') && ~o.indexOf('@@'))
                        this.store(o);
                      else {
                        if (o instanceof Array) {
                          var c = '';
                          for (var i = 0, l = o.length; i < l; i++)
                            if (o[i].u) c += '##' + o[i].u + '@@' + (o[i].x || '');
                        } else if (o.u) o = '##' + o.u + '@@' + (o.x || '');
                        this.store(o);
                      }
                    },
                    utils: function (a, n, o) {
                      if (Bootstrapper.data)
                        try {
                          if (a == 'get') return Bootstrapper.data.getEngine('store').utils.get(n);
                          else if (a == 'set')
                            return Bootstrapper.data.getEngine('store').utils.set(n, o);
                        } catch (e) {
                          Bootstrapper.MVT.EDLutils = false;
                          _log('*** Cloak:EDL utils not available');
                        }
                      else {
                        Bootstrapper.MVT.EDLutils = false;
                        _log('*** Cloak:EDL not available');
                      }
                    },
                    store: function (o) {
                      if (!Bootstrapper.MVT.content.initialized) this.list = o;
                      else {
                        if (this.list == '') this.list = o;
                        this.utils('set', '_ensCloak', o);
                      }
                      _log('*** Cloak:Storage updated');
                    },
                    load: function (d) {
                      var cl;
                      if (d == 1) cl = this.list;
                      else cl = this.utils('get', '_ensCloak');
                      if (!d) {
                        _log('GLOBAL: ' + this.list);
                        _log('STORED: ' + cl);
                      }
                      if (typeof cl == 'string' && cl != '' && ~cl.indexOf('##')) {
                        cl = cl.split('##');
                        for (var i = 0, l = cl.length; i < l; i++)
                          if (~cl[i].indexOf('@@')) {
                            var u = cl[i].split('@@')[0],
                              x = cl[i].split('@@')[1] || '';
                            if (d == 'list') {
                              _log('URL: ' + u);
                              _log('XPATH: ' + x);
                            }
                            this.add({ u: u, x: x });
                          }
                        _log('*** Cloak:Storage loaded');
                      } else _log('*** Cloak:Storage empty');
                    },
                    add: function (o) {
                      if (o.u) {
                        if (~window.location.href.indexOf(o.u))
                          if (o.x && o.x != '') {
                            if (typeof this.map[o.x] == 'undefined') {
                              this.map[o.x] = o;
                              this.map[o.x].t = 'map';
                            }
                          } else Bootstrapper.MVT.invisibilityCloak = true;
                      } else if (typeof this.map[o.x] == 'undefined') {
                        this.map[o.x] = o;
                        this.map[o.x].t = 'map';
                      }
                    },
                    init: function () {
                      if (!Bootstrapper.MVT.cloakDisabled) {
                        var sync = this.utils('get', '_ensCloakSync') || '',
                          time = new Date().getTime(),
                          fetch = true;
                        if (Bootstrapper.MVT.EDLutils) {
                          if (~sync != '' && !isNaN(sync))
                            if (time - sync > 1800000) sync = time;
                            else fetch = false;
                          else sync = time;
                          if (fetch) this.utils('set', '_ensCloakSync', sync);
                        } else fetch = false;
                        if (fetch || Bootstrapper.MVT.forceSyncCloak) {
                          if (Bootstrapper.scDataObj) Bootstrapper.scDataObj['ensCloak'] = 'sync';
                          if (this.list == '') Bootstrapper.MVT.invisibilityCloak = true;
                          _log('*** Cloak:Syncing');
                        }
                        this.load(1);
                        this.load(2);
                      }
                      var m = this.map;
                      for (i in m)
                        if (m[i].x) Bootstrapper.MVT.push({ x: m[i].x, m: m[i].x, t: 'map' });
                      if (
                        Bootstrapper.MVT.invisibilityCloak &&
                        !Bootstrapper.MVT.disabled &&
                        !Bootstrapper.MVT.cloakDisabled
                      )
                        Bootstrapper.MVT.cover();
                    },
                  },
                  addModule: function (b, a) {
                    g[b] = a;
                  },
                  swap: function (b, a) {
                    g[a.t].swap(b, a);
                  },
                  start: function (b) {
                    for (var a = 0; a < b.length; a++) g[b[a].t].init(b[a]);
                    a = h.getCommon(b);
                    '/' == a && h.split(b, document);
                    this.traverse(document, a, b);
                  },
                  init: function () {
                    Bootstrapper.MVT.content.initialized = !0;
                    Bootstrapper.MVT.content.init();
                    _log('*** MVT:init - ' + h.tests.length + ' targets');
                    Bootstrapper.MVT.initialized = !0;
                    _log(h.tests.slice());
                    if (h.tests.length && !this.disabled) Bootstrapper.MVT.start(h.tests);
                  },
                  push: function (o) {
                    if (Bootstrapper.MVT.disabled) return;
                    if (typeof o == 'object') {
                      _log('*** MVT:push');
                      _log(o);
                      if (typeof this.setDone == 'undefined') {
                        this.setDone = 1;
                        Bootstrapper.bindPageSpecificCompletion(function () {
                          Bootstrapper.MVT.done();
                        });
                        Bootstrapper.bindDOMLoaded(function () {
                          setTimeout(function () {
                            Bootstrapper.MVT.done();
                          }, 500);
                        });
                      }
                      if (o.x) {
                        o.cloak = this.cloak(o, 1);
                        if (o.t && this.content.map[o.x])
                          if (o.t == 'map') this.content.map[o.x].cloak = o.cloak;
                          else if (this.content.map[o.x].cloak)
                            Bootstrapper.MVT.delCSS(this.content.map[o.x].cloak);
                      }
                      if (this.initialized && o.x) {
                        _log('MVT:content');
                        _log(o);
                        if (this.content.map[o.x]) for (i in o) this.content.map[o.x][i] = o[i];
                        else this.check(o);
                      } else {
                        for (var i = 0; i < h.tests.length; i++)
                          if (h.tests[i].x && o.x && h.tests[i].x == o.x)
                            if (h.tests[i].t == 'map' && o.t != 'map') {
                              for (j in o) h.tests[i][j] = o[j];
                              return;
                            }
                        h.tests.push(o);
                        this.hidden.push(o);
                      }
                    }
                  },
                  injectCSS: function (x, e) {
                    var d = document,
                      s = d.createElement('style');
                    if (e) s.className = '_ensCSS';
                    if ('\x0B' == 'v') {
                      d.getElementsByTagName('head')[0].appendChild(s);
                      s.styleSheet.cssText = x;
                    } else {
                      s.type = 'text/css';
                      s.innerHTML = x;
                      d.getElementsByTagName('head')[0].appendChild(s);
                    }
                    return s;
                  },
                  delCSS: function (s, f) {
                    if (s)
                      try {
                        if ('\x0B' == 'v') s.styleSheet.cssText = '/**/';
                        if (s.parentNode) s.parentNode.removeChild(s);
                        return !0;
                      } catch (e) {
                        if (f) return f();
                        return !1;
                      }
                    return !1;
                  },
                  cover: function () {
                    _log('*** Cloak:Cover');
                    this.invisibilityCloak = this.injectCSS(
                      'body{position:relative; opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important}'
                    );
                    Bootstrapper.bindPageSpecificCompletion(function () {
                      Bootstrapper.MVT.uncover('Uncover - complete');
                    });
                    Bootstrapper.bindDOMLoaded(function () {
                      setTimeout(function () {
                        Bootstrapper.MVT.uncover('Uncover - loaded');
                      }, 500);
                    });
                    setTimeout(function () {
                      Bootstrapper.MVT.uncover('Uncover - timeout');
                    }, 7000);
                  },
                  uncover: function (l) {
                    if (this.invisibilityCloak)
                      if (this.delCSS(this.invisibilityCloak)) {
                        this.invisibilityCloak = !1;
                        _log('*** Cloak:' + l);
                      }
                  },
                  cloak: function (o, t) {
                    var s = false,
                      x = o.toString();
                    if (typeof o == 'object' && o.x) x = o.x;
                    if (~x.indexOf('/HTML/'))
                      x = x
                        .substr(1)
                        .replace(/\//g, ' ')
                        .replace(/\[.*\]$/g, '');
                    s = Bootstrapper.MVT.injectCSS(x + '{visibility:hidden !important}', t);
                    if (t) this.cloaks.push(s);
                    return s;
                  },
                  show: function (a, b) {
                    if (b && b.cloak) this.delCSS(b.cloak);
                    else if (a) {
                      a.style.display = a.style.oldDisplay || 'block';
                      a.style.visibility = 'visible';
                    }
                  },
                  done: function () {
                    var a = this.hidden,
                      c = this.cloaks,
                      s = document.getElementsByTagName('style');
                    for (i = 0; i < h.length; i++) this.show(h[i]);
                    this.hidden = [];
                    for (i = 0; i < c.length; i++) this.delCSS(c[i]);
                    this.cloaks = [];
                    for (i = 0; i < s.length; i++)
                      if (s[i].className == '_ensCSS') this.delCSS(s[i]);
                    _log('*** MVT:done');
                  },
                  check: function (o) {
                    var n = Bootstrapper.getElementByXPath(o.x);
                    _log('*** MVT:check');
                    _log(n);
                    if (n) Bootstrapper.MVT.swap(n, o);
                    else if (!Bootstrapper.hasDOMLoaded())
                      setTimeout(function () {
                        Bootstrapper.MVT.check(o);
                      }, 25);
                    else {
                      setTimeout(function () {
                        Bootstrapper.MVT.done();
                      }, 100);
                      _log('*** MVT:unresolved - not found');
                    }
                  },
                  traverse: function (b, a, c) {
                    if (1 == c.length && c[0].x == a) var d = !0;
                    for (var e = 0; e < c.length; c[e].x = c[e++].x.slice(a.length));
                    (a = a.split('/')).shift();
                    for (e = 0; e < a.length; e++) {
                      var f = Bootstrapper.getElementByXPathStep(b, a[e]);
                      if (null != f) {
                        Bootstrapper.swapNodes = Bootstrapper.swapNodes || [];
                        Bootstrapper.swapNodes.push(f);
                        b = f;
                      } else {
                        a = '/' + a.slice(e).join('/');
                        for (e = 0; e < c.length; c[e].x = a + c[e++].x);
                        if (!Bootstrapper.hasDOMParsed()) {
                          setTimeout(
                            (function (a, b, c) {
                              return function () {
                                Bootstrapper.MVT.traverse(a, b, c);
                              };
                            })(b, a, c),
                            25
                          );
                          return;
                        } else {
                          setTimeout(function () {
                            Bootstrapper.MVT.done();
                          }, 100);
                          _log('*** MVT:unresolved - not found');
                          return;
                        }
                      }
                    }
                    d ? this.swap(b, c[0]) : h.split(c, b);
                  },
                };
              return i;
            })();
            Bootstrapper.bindOnGetServerComponent(function () {
              Bootstrapper.MVT.init();
            });
            Bootstrapper.MVT.addModule('map', {
              init: function (a) {},
              swap: function (a, b) {
                if (
                  typeof Bootstrapper.DOMloadedDone == 'undefined' ||
                  !Bootstrapper.DOMloadedDone
                ) {
                  if (
                    Bootstrapper.hasDOMLoaded() &&
                    typeof Bootstrapper.DOMloadedDone == 'undefined'
                  ) {
                    Bootstrapper.DOMloadedDone = !1;
                    _log('*** DOM:loaded ***');
                    setTimeout(function () {
                      Bootstrapper.DOMloadedDone = !0;
                    }, 500);
                  }
                  if (Bootstrapper.MVT.content.map[b.m].t != 'map') {
                    for (i in Bootstrapper.MVT.content.map[b.m])
                      b[i] = Bootstrapper.MVT.content.map[b.m][i];
                    Bootstrapper.MVT.swap(a, b);
                    return;
                  } else {
                    setTimeout(function () {
                      Bootstrapper.MVT.swap(a, b);
                    }, 10);
                    return;
                  }
                } else {
                  _log('*** MVT:show - no changes found = ' + b.m);
                  Bootstrapper.MVT.show(a, b);
                }
              },
            });
            Bootstrapper.MVT.addModule('xp', {
              init: function (a) {},
              swap: function (a, b) {
                _log('*** MVT:loaded');
                _log(a);
                _log(b);
                var d = 0;
                if (b.p == 'replace') {
                  if (!a.tagName.toUpperCase().match(/IMG|INPUT|TEXTAREA/)) {
                    a.innerHTML = b.c;
                    a.className = a.className + ' ensContent';
                    d = a;
                  }
                } else {
                  d = document.createElement('div');
                  d.className = 'ensContent';
                  d.innerHTML = b.c;
                  if (b.p == 'prepend')
                    if (a.firstChild !== null) a.insertBefore(d, a.firstChild);
                    else d = 0;
                  else if (b.p == 'append') a.appendChild(d, a);
                  else if (b.p == 'element')
                    if (a.parentNode !== null) a.parentNode.replaceChild(d, a);
                    else d = 0;
                  else if (b.p == 'before')
                    if (a.parentNode !== null) a.parentNode.insertBefore(d, a);
                    else d = 0;
                  else if (b.p == 'after')
                    if (a.parentNode !== null)
                      if (a.nextSibling === null) a.parentNode.appendChild(d);
                      else a.parentNode.insertBefore(d, a.nextSibling);
                    else d = 0;
                }
                try {
                  if (d)
                    for (var s = d.getElementsByTagName('script'), l = s.length, i = 0; i < l; i++)
                      if (s[i].src) {
                        var l = document.createElement('script');
                        l.src = s[i].src;
                        l.type = s[i].type;
                        s[i].parentNode.replaceChild(d, s[i]);
                      } else Function('try{' + s[i].text + '}catch(e){}')();
                } catch (e) {}
                _log('*** MVT:complete');
                Bootstrapper.MVT.show(a, b);
              },
            });
            Bootstrapper.VTconfig = Bootstrapper.VTconfig || {};
            Bootstrapper.VTconfig['MVT'] = this.deploymentId;
            window.isHPI = true;
            window.isHPE = !isHPI;
          },
          1186846,
          288825
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
                      return hpmmd.page.bu || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'hpmmd-page-bu',
                  collection: 'hpmmd object',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7942' }
              );
            }, 7942);
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
                      return window.ci_aIDs || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_aIDs',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7959' }
              );
            }, 7959);
          },
          -1,
          -1
        );
        Bootstrapper.bindDependencyImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.AF = (function () {
              var g = {
                data: {},
                _dataConfig: {},
                logHistory: [],
                debug: !0,
                dataObj: function (a) {
                  var b = a ? [] : '';
                  b.finalized = !1;
                  b.type = a;
                  return b;
                },
                validateInput: function (a) {
                  if ('object' !== typeof a || 'number' !== typeof a.length)
                    return this.log('Error, input must be type Array');
                  /set|push|call|eval|finalize|join/.test(a[0]) ||
                    this.log("Error, '" + a[0] + "' is not a valid command");
                  return !0;
                },
                storeData: function (a, b, d, c, e) {
                  e = this.getConfig(b, d, e);
                  b = this.data[b][d];
                  if (e.finalized)
                    return this.log("Error, cannot modify finalized key '" + d + "'"), b;
                  if ('undefined' !== typeof b && e.multi)
                    return 'join' == a ? (b = b.concat(c)) : b.push(c), b;
                  e.multi ? ((d = [c]), 'join' == a && (d = [].concat(c))) : (d = c);
                  return d;
                },
                getConfig: function (a, b, d, c) {
                  a = this._dataConfig[a] || {};
                  c = {};
                  return 'undefined' == typeof a[b]
                    ? ((c.multi = d), (c.finalized = !1), c)
                    : a[b];
                },
                store: function (a, b, d, c, e) {
                  this.data[b] = this.data[b] || {};
                  this.data[b][d] = this.storeData(a, b, d, c, e);
                  return this.data[b][d];
                },
                parseCode: function (a) {
                  return ((a || function () {}) + '').replace(/^function\s*\(\s*\)\s*\{|\}$/g, '');
                },
                callFn: function (a, b, d, c) {
                  if ('function' == typeof a)
                    if (d)
                      'undefined' != typeof window.execScript
                        ? window.execScript(this.parseCode(a))
                        : eval.call(window, this.parseCode(a));
                    else return a.apply(window, c);
                  else if ('function' == typeof this.data[a][b])
                    if (d)
                      'undefined' != typeof window.execScript
                        ? window.execScript(this.parseCode(this.data[a][b]))
                        : eval.call(window, this.parseCode(this.data[a][b]));
                    else
                      return (
                        (c = 'object' == typeof c && 'number' == typeof c.length ? c : []),
                        this.data[a][b].apply(this.data[a], c)
                      );
                  else return this.log("Error, '" + b + "' is not a function");
                },
                parse: function (a) {
                  if (this.validateInput(a)) {
                    a = Array.prototype.slice.call(a, 0);
                    var b = a.shift(),
                      d = a.shift(),
                      c = a.shift(),
                      e = a[0];
                    if (/set|push|join/.test(b))
                      return this.store(b, d, c, e, /push|join/.test(b));
                    if (/call|eval/.test(b)) return this.callFn(d, c, 'eval' == b, a);
                    if ('finalize' == b)
                      return (
                        (a = this._dataConfig[d] = this._dataConfig[d] || {}),
                        (a = a[c] || { multi: !1 }),
                        (a.finalized = !0),
                        (this._dataConfig[d][c] = a)
                      );
                  }
                },
                log: function (a) {
                  this.logHistory.push(a);
                  return this.debug && 'object' == typeof console ? console.log(a) && !1 : !1;
                },
              };
              if (
                'object' == typeof Bootstrapper.AF &&
                '[object Array]' !== Object.prototype.toString.call(Bootstrapper.AF)
              )
                return Bootstrapper.AF;
              if ('[object Array]' === Object.prototype.toString.call(Bootstrapper.AF))
                for (var h = Bootstrapper.AF, f = 0; f < h.length; f++) g.parse(h[f]);
              return {
                push: function (a) {
                  return g.parse(a);
                },
              };
            })();
            Bootstrapper._SC = Bootstrapper._SC || {};
            Bootstrapper._SC.log = function (a) {
              if (Bootstrapper._SC.logEnabled)
                try {
                  console.log('AA App Log - ' + a);
                } catch (f) {}
            };
            Bootstrapper.AF.push([
              'set',
              'SiteCatalyst',
              'block',
              function (a) {
                this.ignore = this.ignore || {};
                this.ignore[a] = 1;
              },
            ]);
            Bootstrapper.AF.push([
              'set',
              'SiteCatalyst',
              'exec',
              function () {
                if (!this.ar) {
                  Bootstrapper.AF.push(['push', 'SiteCatalyst', 'ar', !0]);
                  for (var a = this.ns || [], f = {}, c = 0; c < a.length; c++)
                    (f[a[c]] = 1),
                      Bootstrapper.AF.push([
                        'set',
                        a[c],
                        'exec',
                        (function (a) {
                          return function () {
                            var c = this.dl || [],
                              b = this.DMFDelay || !1;
                            Bootstrapper._SC.log('Delay for DMF: ' + b);
                            var f = function (c) {
                                if ('object' != typeof window[a])
                                  setTimeout.call(
                                    this,
                                    function () {
                                      f.call(this, c);
                                    },
                                    250
                                  );
                                else {
                                  for (var g = ['pre', 'post'], e = 0; e < g.length; e++) {
                                    var b = this[g[e]];
                                    if ('object' == typeof b)
                                      for (var k = 0; k < b.length; k++) {
                                        var d = b[k],
                                          h = window[a];
                                        if ('object' == typeof d[0] && d[0].length) {
                                          do h = h[d[0].shift()];
                                          while (1 < d[0].length);
                                          d[0] = d[0].shift();
                                        }
                                        if (d[1] && 'function' == typeof d[1])
                                          try {
                                            h[d[0]] = d[1].call(this, c);
                                          } catch (l) {}
                                        else h[d[0]] = d[1];
                                      }
                                  }
                                  window[a].t();
                                  Bootstrapper.AF.push([
                                    'set',
                                    a,
                                    'getCallbacks',
                                    function () {
                                      return this.callback || [];
                                    },
                                  ]);
                                  g = Bootstrapper.AF.push(['call', a, 'getCallbacks']);
                                  for (e = 0; e < g.length; e++)
                                    'function' == typeof g[e] && g[e].call(window);
                                }
                              },
                              l = function () {
                                Bootstrapper.data
                                  ? Bootstrapper.data.resolve.call(this, c, function () {
                                      for (var a = {}, b = 0; b < c.length; b++)
                                        a[c[b]] = arguments[b];
                                      f.call(this, a);
                                    })
                                  : f.call(this, {});
                              },
                              m = this;
                            b
                              ? Bootstrapper.bindDOMParsed(function () {
                                  l.call(m);
                                })
                              : l.call(this);
                          };
                        })(a[c]),
                      ]);
                  var a = 0,
                    b;
                  for (b in f)
                    (this.ignore && b in this.ignore) ||
                      (a
                        ? setTimeout(
                            (function (a) {
                              return function () {
                                Bootstrapper.AF.push(['call', a, 'exec']);
                              };
                            })(b),
                            250 * a
                          )
                        : Bootstrapper.AF.push(['call', b, 'exec']),
                      a++);
                }
              },
            ]);
            Bootstrapper.bindPageSpecificCompletion(function () {
              setTimeout(function () {
                Bootstrapper.AF.push(['call', 'SiteCatalyst', 'exec']);
              }, 250);
            });
            Bootstrapper.AF.push([
              'eval',
              function () {
                var sName = 's';
                var s = new AppMeasurement();
                try {
                  window._A.wrapAdobeCalls();
                  if (window._A.logState()) {
                    window._A.logTimeStamps();
                    window._A.logDomEvents();
                  }
                } catch (e) {}
                window.optimizely = window.optimizely || [];
                if (
                  window.optimizely &&
                  typeof window.optimizely.get === 'function' &&
                  window.optimizely.get('custom/adobeIntegrator')
                )
                  window.optimizely.get('custom/adobeIntegrator').assignCampaigns(window.s);
                s.account = 'hphqglobal';
                if (_A.isF(window.Visitor))
                  s.visitor = Visitor.getInstance('5E34123F5245B2CD0A490D45@AdobeOrg');
                s.visitorNamespace = 'hpcorp';
                s.trackingServer = 'met1.hp.com';
                s.trackingServerSecure = 'met2.hp.com';
                s.vmk = '4A466CB3';
                s.currencyCode = 'USD';
                s.charSet = 'UTF-8';
                s.trackDownloadLinks = true;
                s.trackExternalLinks = true;
                s.trackInlineStats = true;
                s.linkDownloadFileTypes =
                  'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
                s.linkInternalFilters = 'javascript:,hp.,.hp,compaq.,.compaq,omen.com';
                s.linkLeaveQueryString = false;
                s.linkTrackVars = 'prop73';
                s.linkTrackEvents = 'None';
                s.dc = '112';
                s.usePlugins = true;
                s.ActionDepthTest = true;
                s.loadModule('Media');
                s.Media.trackUsingContextData = true;
                s.Media.autoTrack = false;
                s.Media.trackMilestones = '25,50,75';
                s.Media.segmentByMilestones = true;
                s.Media.completeByCloseOffset = true;
                s.Media.completeCloseOffsetThreshold = 0;
                s.Media.contextDataMapping = {
                  'a.media.name': 'eVar70',
                  'a.media.segment': 'eVar71',
                  'a.contentType': 'eVar72',
                  'a.media.segmentView': 'event97',
                  'a.media.complete': 'event98',
                  'a.media.timePlayed': 'event99',
                  'a.media.view': 'event100',
                };
                s.Media.trackVars = 'events,eVar70,eVar71,eVar72';
                s.Media.trackEvents = 'event97,event98,event99,event100';
                function s_doPlugins (s) {
                  var ppv = s.getPercentPageViewed(s.pageName || document.location.href),
                    ppvPageName = '',
                    ppvInitial = 0,
                    ppvFinal = 0;
                  if (
                    ppv &&
                    typeof ppv == 'object' &&
                    typeof ppv.length == 'number' &&
                    ppv.length > 2
                  ) {
                    ppvPageName = ppv[0];
                    ppvInitial = ppv[2];
                    ppvFinal = ppv[1];
                  }
                  s.prop60 =
                    s.prop73 &&
                    ppvPageName == s.prop73 &&
                    typeof ppvInitial == 'number' &&
                    ppvInitial > 0 &&
                    ppvInitial <= 100 &&
                    typeof ppvFinal == 'number' &&
                    ppvFinal > 0 &&
                    ppvFinal <= 100 &&
                    ppvInitial <= ppvFinal
                      ? ppvInitial + '|' + ppvFinal
                      : '';
                  var D = document,
                    L = document.location,
                    W = window;
                  var addLTV = function () {
                    var i, n;
                    for (i = 0; i < arguments.length; i++) {
                      n = arguments[i];
                      if (
                        typeof s.linkTrackVars != 'string' ||
                        s.linkTrackVars.toLowerCase() == 'none'
                      )
                        s.linkTrackVars = '';
                      if (s.linkTrackVars.indexOf(n) < 0)
                        s.linkTrackVars += (s.linkTrackVars ? ',' : '') + n;
                    }
                  };
                  s.prop26 = s.pageName || document.location.href;
                  s.eVar90 = L.href;
                  s.eVar91 = D.referrer;
                  s.eVar93 = L.protocol + '//' + L.hostname + L.pathname;
                  s.eVar94 = L.hostname;
                  s.eVar96 = navigator.userAgent;
                  var codeType = typeof W.Bootstrapper == 'object' ? 'ens' : 'js',
                    codeBase = '',
                    codeDate = '',
                    codeStamp = '',
                    ecidEnabled = _A.isF(window.Visitor);
                  if (codeType == 'ens') {
                    codeBase =
                      (Bootstrapper.ensightenOptions.staticJavascriptPath.indexOf('-test') > 0
                        ? 'dev:'
                        : '') + Bootstrapper.ensightenOptions.publishPath;
                    var g = Bootstrapper.ensightenOptions.generatedOn;
                    codeDate =
                      g.substring(8, 10) +
                      '-' +
                      g.substring(4, 7) +
                      '-' +
                      g.substring(g.length - 4, g.length) +
                      ' ' +
                      g.substring(11, 19);
                  } else {
                    if (!codeBase) {
                      var jss = D.getElementsByTagName('script'),
                        js = jss[jss.length - 1].src,
                        fn = js.match(/([^/])+/g);
                      fn = fn[fn.length - 1];
                      codeBase = fn.substring(0, fn.indexOf('.'));
                    }
                    if (!codeDate && typeof W.hpmmd == 'object')
                      codeDate =
                        hpmmd.version ||
                        (typeof hpmmd.code == 'object' && hpmmd.code.version) ||
                        '?';
                  }
                  codeStamp =
                    codeType +
                    '|' +
                    codeBase +
                    '|' +
                    (ecidEnabled ? 'ECID' : 's_vi') +
                    '|' +
                    codeDate;
                  if (typeof W.hpmmd == 'object') hpmmd.versionStamp = codeStamp;
                  s.eVar92 = codeStamp;
                  if (typeof window._A == 'object' && typeof window._A.section == 'object') {
                    s.eVar95 = _A.section.type || '?';
                    s.eVar95 += ':' + (_A.section.subtype || '?');
                    s.eVar95 += '|' + (_A.section.platform || '?');
                    if (_A.dev) s.eVar95 += ':dev';
                    s.eVar95 += '|' + (_A.section.region || '?');
                    s.eVar95 += '|' + (_A.section.country || '?');
                    s.eVar95 += ':' + (_A.section.language || '?');
                    s.eVar95 += '|' + (_A.section.currency || '?');
                  } else s.eVar95 = '?';
                  addLTV('prop26', 'eVar90', 'eVar91', 'eVar92', 'eVar93', 'eVar94', 'eVar95');
                  s.tnt = s.tnt || window.s_tnt || s.trackTNT();
                }
                s.doPlugins = s_doPlugins;
                window.trackVideoMetrics = function (a, b, c) {
                  try {
                    console.log(
                      'trackVideoMetrics(',
                      typeof a == 'string' ? '"' + a + '"' : a,
                      ',',
                      typeof b == 'string' ? '"' + b + '"' : b,
                      ',',
                      typeof c == 'string' ? '"' + c + '"' : c,
                      ')'
                    );
                    var M = s.Media,
                      p = 'trackVideoMetrics',
                      r = -2;
                    if (typeof M != 'object') {
                      console.log(p + 'Adobe Analtyics Media Module not loaded');
                      return -1;
                    }
                    switch (a) {
                      case 'open':
                        r = M[a](b, c, 'YouTube Player');
                        break;
                      case 'play':
                      case 'stop':
                      case 'complete':
                      case 'close':
                        r = M[a](b, c);
                        break;
                      default:
                        console.log(p, 'ERROR: unknown track type:', a);
                        break;
                    }
                  } catch (e) {
                    console.log(p, 'ERROR: run-time error:', e);
                  }
                  return r;
                };
                s.getQueryParam = s.Util.getQueryParam;
                s.getPreviousValue = new Function(
                  'a',
                  'b',
                  'd',
                  '' +
                    "var U='undefined',S='string',f,g,h,k,l,o=this,p=o.events,q=new Date" +
                    ',t=!d;if(q.setTime(q.getTime()+18e5),1==arguments.length&&(b=a,a=vo' +
                    "id 0),d&&S==typeof p)for(f in d=o.split(d,','),h=o.split(p,','),d)f" +
                    "or(g in h)t=t||d[f]==h[f];return t&&S==typeof b&&b?('object'!=typeo" +
                    'f o.Prev&&(o.Prev={}),l=o.Prev[b],k=o.c_r(b),U==typeof l&&(l=o.Prev' +
                    "[b]=k),U!=typeof a&&a!=k&&o.c_w(b,a||0===a||''===a?a:'no value',q)," +
                    'l):void 0'
                );
                s.split = new Function(
                  'l',
                  'd',
                  '' +
                    'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x' +
                    '++]=l.substring(0,i);l=l.substring(i+d.length);}return a'
                );
                s.trackTNT = new Function(
                  'v',
                  'p',
                  'b',
                  '' +
                    "var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s." +
                    "Util.getQueryParam){pm=s.Util.getQueryParam(p);}if(pm){r+=(pm+',');}if(window[v" +
                    "]!=undefined){r+=window[v];}if(b){window[v]='';}return r;"
                );
                s.getPercentPageViewed = new Function(
                  'a',
                  '' +
                    'var b=this,c=window,d=c.addEventListener,e=c.attachEvent,f=["load",' +
                    '"unload","scroll","resize","zoom","keyup","mouseup","touchend","ori' +
                    'entationchange","pan"],g="s_ppv",h=g+"l",i=a&&"-"!=a?a:document.loc' +
                    'ation.href,j=function(a){var e,c=b.c_r(a?h:g)||"",d=c.indexOf(",")>' +
                    '-1?c.split(",",11):[""],f=function(a){return"number"!=typeof a?1:a<' +
                    '1?1:a>100?100:a},j=function(a){return"number"!=typeof a?1:a<1?1:a};' +
                    'for(e=0;e<11;e++)d.length<e+1&&(d[e]=0==e||10==e?"":0),0==e?d[0]=a?' +
                    'unescape(d[0])||"":i:e<10&&(d[e]=j(d[e]?parseInt(d[e])||1:1));retur' +
                    'n d[1]=f(d[1]),d[2]=f(d[2]),d[2]>d[1]&&(d[1]=d[2]),d[3]>d[8]&&(d[8]' +
                    '=d[3]),(d.length>10||!a)&&(d[10]=d[10]&&"L"!=d[10]&&"LP"!=d[10]&&"P' +
                    'L"!=d[10]?"P":d[10]),d};if(c.s_Obj=b,!c.PPVe){c.PPVe=function(a){va' +
                    'r b=window,c=document||{},d=c.body,e=c.documentElement||{},f=window' +
                    '.screen||{},h="Height",i="client",k="scroll",l="load",m="offset"+h,' +
                    'n=k+h,o=k+"Top",p=i+"Width",q=i+h,r=Math,s=100,t="object",u="number' +
                    '",v=",",w=b.s_Obj||b.s||0;if(a=a&&typeof a==t?a.type||"":"",a.index' +
                    'Of("on")||(a=a.substring(2)),b.PPVt&&!a&&(clearTimeout(PPVt),PPVt=0' +
                    '),w&&typeof w==t&&d&&typeof d==t){var H,x=r.max(d[n]||e[n],d[m]||e[' +
                    'm],d[q]||e[q]||1),y=b.innerWidth||e[p]||d[p]||1,z=b.innerHeight||e[' +
                    'q]||d[q]||1,A=f.width||1,B=f.height||1,C=r.round(s*(b.devicePixelRa' +
                    'tio||1))/s,D=(c.pageYOffset||e[o]||d[o]||0)+z,E=x>0&&D>0?r.round(s*' +
                    'D/x):1,l=b.orientation,F=isNaN(l)?z>y?0:90:r.abs(F)%180,G=j(),i=a==' +
                    'l||1==G[1],I=function(a,b){return a=typeof a!=u?1:a<1?1:a,b&&a>s?s:' +
                    'a};new RegExp("(iPod|iPad|iPhone)").exec(window.navigator&&navigato' +
                    'r.userAgent||"")&&F&&(H=A,A=B,B=H),F=F?"L":"P",G[10]=i||!G[10]?F:("' +
                    'string"==typeof G[10]?G[10]:"").substring(0,1),"L"!=G[10]&&"P"!=G[1' +
                    '0]&&(G[10]=F),w.c_w(g,escape(G[0])+v+I(G[1]>E?G[1]:E,1)+v+I(i?E:G[2' +
                    '],1)+v+I(i?D:G[3])+v+I(y)+v+I(z)+v+I(A)+v+I(B)+v+I(x)+v+I(C)+v+G[10' +
                    ']+(G[10]==F?"":F))}b.PPVt||a=="un"+l||(b.PPVt=setTimeout(PPVe,333))' +
                    '},b.c_w(h,b.c_r(g)||""),b.c_w(g,escape(i)+",0,0,0,0,0,0,0,0,0");for' +
                    '(var k=c.PPVe,l=0;l<f.length;l++)d?d(f[l],k,!1):e&&e("on"+f[l],k);k' +
                    '()}var m=j(1);return arguments.length&&"-"!=a?"?"==a?m[2]:m:m[1]'
                );
                if (typeof window.hpmmd == 'object' && window.hpmmd.youTubePlugin == true)
                  try {
                    window.s_YTO = {
                      s_name: 's',
                      debug:
                        (typeof window.Bootstrapper == 'object' &&
                          Bootstrapper.ensightenOptions.staticJavascriptPath.indexOf('-test') >
                            0) ||
                        (document.location.search &&
                          document.location.search.indexOf('YTOdebug') > -1),
                    };
                    s_YTl = function () {
                      if (typeof window.s_YTO == 'object' && s_YTO.debug)
                        console.log.apply(this, arguments);
                    };
                    window.s_YTp = function () {
                      try {
                        var D = document,
                          f = D.getElementsByTagName('iframe'),
                          k,
                          id,
                          t,
                          i,
                          j,
                          I = function (n) {
                            var i = 0;
                            try {
                              eval('var ' + n);
                            } catch (e) {
                              i = 1;
                            }
                            return i;
                          },
                          C = function (id) {
                            var i = 0,
                              c = 0;
                            for (; c < 2 && i < f.length; i++) if (f[i].id == id) c++;
                            return c;
                          };
                        if (s_YTisa()) s_YTO.ya = 2;
                        for (i = 0; i < f.length; i++) {
                          k = s_YTgk(f[i].src);
                          id = f[i].id;
                          if (k) {
                            if (id && C(id) > 1)
                              console.log('YTP duplcate IFRAME ID found, id:', id, 'tag:', f[i]);
                            if (!id || I(id) || C(id) > 1) {
                              if (I(id))
                                s_YTl('YTP YouTube tag has invalid name:', id, 'tag:', f[i]);
                              id = 'YouTubeV';
                              for (j = 1; j < 99; j++) if (!D.getElementById(id + j)) break;
                              id = j < 99 ? id + j : '';
                              f[i].id = id;
                              console.log('YTP added ID to YouTube tag, ID:', id, 'tag:', f[i]);
                            }
                            if (id)
                              if (!s_YTO.ya) {
                                s_YTO.ya = 1;
                                (t = D.createElement('script')), f;
                                t.src = '//www.youtube.com/player_api';
                                f = D.getElementsByTagName('script')[0];
                                f.parentNode.insertBefore(t, f);
                                console.log(
                                  'YTP invoking YouTube API, ID:',
                                  id,
                                  'tag:',
                                  f[i],
                                  's_YTO:',
                                  s_YTO
                                );
                                break;
                              } else if (s_YTO.ya == 2 && !s_YTO.v[id]) {
                                s_YTO.v[id] = new s_YTv(id);
                                console.log(
                                  'YTP new YouTube video found, ID:',
                                  id,
                                  'tag:',
                                  f[i],
                                  's_YTO:',
                                  s_YTO
                                );
                                break;
                              }
                          }
                        }
                      } catch (e) {
                        console.log('YTP ERROR s_YTp()', e.message);
                      }
                      s_YTO.ut = setTimeout('s_YTp()', 150);
                    };
                    s_YTisa = function () {
                      return typeof window.YT == 'object' && !!YT.Player;
                    };
                    s_YTism = function () {
                      var s = (s_YTO.s = window[s_YTO.s_name || 's'] || 0),
                        l =
                          typeof s == 'object' && typeof s.Media == 'object' && s.Media.open
                            ? !!s
                            : false;
                      if (!l) s_YTl('YTP WARNING: Media module not loaded');
                      return l;
                    };
                    s_YTgk = function (u) {
                      try {
                        var r = '',
                          a,
                          f = '',
                          v = u.toLowerCase();
                        if (v.indexOf('//www.youtube.com') > -1) {
                          if (v.indexOf('/watch') > -1) f = 'v';
                          if (!f && v.indexOf('/apiplayer') > -1) f = 'video_id';
                          if (!f && v.indexOf('/v/') > -1) f = '/v/';
                          if (!f && v.indexOf('/embed/') > -1) f = '/embed/';
                          if (f > 'A') {
                            a = v.indexOf('?' + f + '=');
                            if (a < 0) a = v.indexOf('&' + f + '=');
                            if (a > -1) r = u.substring(a + f.length + 2);
                          } else if (f) {
                            a = v.indexOf(f);
                            r = u.substring(a + f.length);
                          }
                          if (r) {
                            a = r.indexOf('?');
                            if (a < 0) a = r.indexOf('&');
                            if (a < 0) a = r.indexOf('#');
                            if (a > -1) r = r.substring(0, a);
                          }
                        }
                      } catch (e) {
                        console.log('YTP ERROR s_YTgk()', e.message);
                      }
                      return r;
                    };
                    window.onYouTubePlayerAPIReady = function () {
                      try {
                        s_YTl('YTP onYouTubePlayerAPIReady()');
                        s_YTO.ya = 2;
                        if (s_YTO.ut) clearTimeout(s_YTO.ut);
                        s_YTp();
                      } catch (e) {
                        console.log('YTP ERROR onYouTubePlayerAPIReady()', e.message);
                      }
                    };
                    s_YTdv = function (id) {
                      try {
                        s_YTl('YTP s_YTdv()');
                        if (!id) return;
                        var v = s_YTO.v[id] || 0;
                        if (v)
                          if (v.ss) {
                            if (s_YTism()) s_YTO.s.Media.close(v.sv);
                            v.ss = 0;
                          }
                        v.vc();
                      } catch (e) {
                        console.log('YTP ERROR s_YTdv()', e.message);
                      }
                    };
                    s_YTv = function (id) {
                      if (s_YTO.debug) console.log('YTP s_YTv(', id, ')');
                      var t = this;
                      t.vc = function () {
                        var t = this;
                        t.id = t.sn = t.sl = t.yt = t.yk = t.kl = '';
                        t.yd = t.yp = t.ys = t.ss = t.ts = t.qs = t.ql = 0;
                      };
                      t.vg = function (yp) {
                        try {
                          var t = this,
                            D = document,
                            W = window,
                            N = 'number',
                            u = '',
                            a,
                            b,
                            c,
                            i,
                            x = 0,
                            y;
                          if (W.s_YTO.debug) console.log('YTP -->t.vg(', yp, ')');
                          if (yp) {
                            if (yp.getVideoUrl) u = yp.getVideoUrl();
                            s_YTl('YTP getVideoUrl:', u, 'yp.a.src:', yp.a.src || '');
                            if (!u) u = yp.a.src || '';
                            if (yp.getVideoData) x = yp.getVideoData();
                            if (x && x.title) t.yt = x.title;
                            s_YTl(
                              'YTP getVideoData:',
                              x,
                              'getVideoData.title:',
                              x.title,
                              'yt:',
                              t.yt
                            );
                            y = x && x.video_id ? x.video_id : s_YTgk(u);
                            s_YTl('YTP video id:', y);
                            if (y && y != t.yk) {
                              if (W.s_YTO.debug)
                                console.log('YTP key change old:', t.yk, 'new:', y);
                              t.kl = t.yk;
                              t.yk = y;
                              t.ts = t.qs = t.ys = 0;
                              if (t.yd) {
                                delete t.yd;
                                t.yd = 0;
                              }
                              t.yt = '';
                              a = 's_YTdata_' + t.id + '_' + t.yk;
                              b = D.getElementById(a);
                              if (b) b.parentNode.removeChild(b);
                              b = D.createElement('script');
                              b.id = a;
                              b.src =
                                '//googleapis.com/youtube/v3/videos' +
                                '?id=' +
                                t.yk +
                                '&key=AIzaSyAr0VMShn9PJeWjRthd932vlz6_NoYVo6c' +
                                '&part=snippet,statistics&callback=window.s_YTO.v.' +
                                t.id +
                                '.fc';
                              s_YTl('YTP >== invoking', b.src);
                              a = D.getElementsByTagName('script')[0];
                              a.parentNode.insertBefore(b, a);
                            }
                            if (yp.getDuration) {
                              x = yp.getDuration();
                              t.ts = typeof x == N ? Math.round(x) : 0;
                              s_YTl('YTP getDuration:', x, 'ts:', t.ts);
                            }
                            t.qs = 0;
                            if (yp.getCurrentTime) {
                              x = yp.getCurrentTime();
                              t.qs = typeof x == N ? Math.round(x) : 0;
                              s_YTl('YTP getCurrentTime:', x, 'qs:', t.qs);
                            }
                            if (yp.getPlayerState) {
                              x = yp.getPlayerState();
                              t.ys = x || 0;
                              s_YTl('YTP getPlayerState:', x, 'ys:', t.ys);
                            }
                          }
                          s_YTl('YTP ----t.vg() end');
                        } catch (e) {
                          console.log('YTP ERROR t.vg(', yp, ')', e.message);
                        }
                      };
                      t.ve = function () {
                        try {
                          if (s_YTism()) {
                            var t = this,
                              d,
                              O = function () {
                                t.sl = t.sn;
                                t.sn = t.yt
                                  ? t.yt
                                  : t.yk
                                  ? t.yk
                                  : t.id || 'YouTube video at ' + document.location.href;
                                s_YTl('YTP s.Media.open(', t.sn, ',', t.ts, ',', s_YTO.vp, ')');
                                s.Media.open(t.sn, t.ts, s_YTO.vp);
                                t.ss = 1;
                              },
                              P = function () {
                                s_YTl('YTP s.Media.play(', t.sn, ',', t.qs, ')');
                                s.Media.play(t.sn, t.qs);
                                t.ql = t.qs;
                                t.ss = 2;
                              },
                              S = function (n, q) {
                                s_YTl('YTP s.Media.stop(', n || t.sn, ',', q || t.qs, ')');
                                s.Media.stop(n || t.sn, q || t.qs);
                                t.ss = 1;
                                t.ql = t.qs;
                              },
                              C = function (n) {
                                s_YTl('YTP s.Media.close(', t.sn, ')');
                                s.Media.close(n || t.sn);
                                t.ss = t.qs = t.ql = 0;
                              };
                            t.vg(t.yp);
                            t.sn = t.yt
                              ? t.yt
                              : t.yk
                              ? t.yk
                              : t.id || 'YouTube video at ' + document.location.href;
                            s_YTl(
                              'YTP YouTube event, video:',
                              t.sn,
                              ' event:',
                              t.ys,
                              ' properties:',
                              t.yp
                            );
                            if (t.sk && t.sk != t.kl)
                              if (t.ss) {
                                if (t.ss == 2) S(t.sl, t.ql);
                                C(t.sl);
                              }
                            switch (t.ys) {
                              case 1:
                                s_YTl('YTP YouTube event case: Playing');
                                d = 9;
                                if (t.ss == 2) {
                                  d = Math.abs(t.qs - t.ql);
                                  if (d > 1) S(t.sn, t.ql);
                                }
                                if (!t.ss) {
                                  O();
                                  t.qs = t.ql = 0;
                                }
                                if (d > 1) P();
                                break;
                              case 0:
                                s_YTl('YTP YouTube event case: Ended');
                                if (t.ss) {
                                  if (t.ss != 1) {
                                    if (Math.abs(t.qs - t.ts) <= 1) t.qs = t.ts;
                                    S();
                                  }
                                  C();
                                }
                                break;
                              case 2:
                                s_YTl('YTP YouTube event case: Paused');
                                if (!t.ss) O();
                                if (t.ss != 1) S();
                                break;
                              case 3:
                                s_YTl('YTP YouTube event case: Buffering (data under run)');
                                break;
                              case -1:
                                s_YTl('YTP YouTube event case: Unstarted');
                                break;
                              case 5:
                                s_YTl('YTP YouTube event case: Video cued');
                                break;
                              default:
                                console.log('YTP WARNING Unknown YouTube event case:', t.ys);
                                break;
                            }
                          }
                        } catch (e) {
                          console.log(
                            'YTP ERROR ve()',
                            'video:',
                            t.sn,
                            'player:',
                            t,
                            'msg:',
                            e.message
                          );
                        }
                      };
                      t.isc = function (ye) {
                        try {
                          s_YTl('YTP ==>t.isc(', ye, ')');
                          t.ys = ye.data;
                          t.vg(ye.target);
                          s_YTO.v[t.id].ve();
                        } catch (e) {
                          console.log('YTP ERROR isc(', ye, ')', e.message);
                        }
                      };
                      t.fc = function (d) {
                        try {
                          t.yd = d;
                          var T = '';
                          if (T) t.yt = T;
                          console.log('YTP ==>t.fc(', d, ') title:', T);
                        } catch (e) {
                          console.log('YTP ERROR fc(', d, ')', e.message);
                        }
                      };
                      try {
                        var o = id && typeof id == 'string' ? document.getElementById(id) : '';
                        if (!o) {
                          s_YTl('YTP WARNING t.ve() video ID missing');
                          return null;
                        }
                        t.vc();
                        t.id = id;
                        var W = window,
                          ar = arguments,
                          a = new Object();
                        if (ar.length > 1) a.videoId = ar[1];
                        if (ar.length > 3) {
                          a.width = w;
                          a.height = h;
                        }
                        a.events = new Object();
                        a.events.onStateChange = t.isc;
                        t.yp = new YT.Player(id, a);
                        t.vg(t.yp);
                      } catch (e) {
                        console.log('YTP ERROR s_YTv()', e.message);
                      }
                      return t;
                    };
                    s_aE = function (o, e, f) {
                      try {
                        s_YTl('YTP s_YTi()');
                        if (arguments.length < 3) {
                          f = e;
                          e = o;
                          o = window;
                        }
                        if (o.attachEvent) {
                          o['e' + e + f] = f;
                          o[e + f] = function () {
                            o['e' + e + f](window.event);
                          };
                          o.attachEvent('on' + e, o[e + f]);
                        } else o.addEventListener(e, f, false);
                      } catch (e) {
                        console.log('YTP ERROR s_aE()', e.message);
                      }
                    };
                    window.s_YTi = function () {
                      try {
                        console.log('YTP initializing');
                        if (typeof s_YTO.v != 'object') s_YTO.v = {};
                        s_YTO.ya = s_YTisa() ? 2 : 0;
                        s_YTO.ut = 0;
                        s_YTO.vp = 'YouTube Player';
                        s_YTp();
                      } catch (e) {
                        console.log('YTP ERROR s_YTi()', e.message);
                      }
                    };
                    if (document.body) s_YTi();
                    else s_aE('load', window.s_YTi);
                  } catch (e) {
                    console.log('YTP ERROR catastrophic', e.message);
                  }
                function AppMeasurement_Module_Integrate (l) {
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
                            g &&
                              (b = b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1)),
                            (a = e)));
                    return b;
                  };
                }
                function AppMeasurement_Module_Media (q) {
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
                          !Object.prototype[g] &&
                            b.list[g] &&
                            b.list[g].R == l &&
                            b.close(b.list[g].name);
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
                      c.v &&
                        ((g['a.media.name'] = c.v),
                        (g[e + 'pod'] = c.J),
                        (g[e + 'podPosition'] = c.K)),
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
                        (a = c.l
                          ? b.__primetime
                            ? 'mspa_s'
                            : 'msa_s'
                          : b.__primetime
                          ? 'msp_s'
                          : 'ms_s'),
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
                      for (h in (d.events2 || (d.events2 = ''),
                      k && (k += ',events'),
                      b.contextDataMapping))
                        if (!Object.prototype[h]) {
                          a =
                            h.length > e.length && h.substring(0, e.length) == e
                              ? h.substring(e.length)
                              : '';
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
                                      ? g[h] &&
                                        (d.events2 += (d.events2 ? ',' : '') + l + '=' + g[h])
                                      : g[h] && (d.events2 += (d.events2 ? ',' : '') + l))
                                  : 'segment' == a && g[h + 'Num']
                                  ? (k && (k += ',' + l), (d[l] = g[h + 'Num'] + ':' + g[h]))
                                  : (k && (k += ',' + l), (d[l] = g[h]));
                          else if ('milestones' == a || 'offsetMilestones' == a)
                            (h = h.substring(0, h.length - 1)),
                              g[h] &&
                                b.contextDataMapping[h + 's'][g[h]] &&
                                (f && (f += ',' + b.contextDataMapping[h + 's'][g[h]]),
                                (d.events2 +=
                                  (d.events2 ? ',' : '') + b.contextDataMapping[h + 's'][g[h]]));
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
                        0 < a.length &&
                          ((a.e = (a.offset / a.length) * 100), (a.e = 100 < a.e ? 100 : a.e)),
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
                          if (
                            (3 >= c || 5 <= c) &&
                            0 <= a.g &&
                            ((r = !1), (q = s = 'None'), a.g != e)
                          ) {
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
                                    a.e < g &&
                                      ((k = n + 1), (f = 'M:' + h + '-' + g), (n = p.length)),
                                      (h = g);
                            } else if (x && v && (p = v.split(',')))
                              for (
                                p.push('' + (0 < a.length ? a.length : 'E')), n = h = 0;
                                n < p.length;
                                n++
                              )
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
                          (2 <= c || 100 <= a.e) &&
                            a.c < e &&
                            ((a.C += e - a.c), (a.a += e - a.c));
                          if (2 >= c || (3 == c && !a.k))
                            (a.n += (1 == c || 3 == c ? 'S' : 'E') + Math.floor(e)),
                              (a.k = 3 == c ? 1 : c);
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
                          a.F
                            ? ((a.m = k), (a.f = f), (a.A = !0), (a.F = !1))
                            : 0 < a.a && (a.A = !1),
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
                function AppMeasurement_Module_ActivityMap (f) {
                  function g (a, d) {
                    var b, c, n;
                    if (a && d && (b = e.c[d] || (e.c[d] = d.split(','))))
                      for (n = 0; n < b.length && (c = b[n++]); )
                        if (-1 < a.indexOf(c)) return null;
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
                            (a.e = new Function(
                              's',
                              'var e;try{s.w.' + c + '=' + d + '}catch(e){}'
                            )),
                              a.e(f);
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
                      !(
                        1 === (c = a.nodeType) &&
                        (c = a.nodeName) &&
                        (c = c.toUpperCase()) &&
                        t[c]
                      ) &&
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
                            : a.src && 'IMAGE' == c && (f = g(k(a.src)))));
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
                function AppMeasurement () {
                  var a = this;
                  a.version = '1.6';
                  var k = window;
                  k.s_c_in || ((k.s_c_il = []), (k.s_c_in = 0));
                  a._il = k.s_c_il;
                  a._in = k.s_c_in;
                  a._il[a._in] = a;
                  k.s_c_in++;
                  a._c = 's_c';
                  var q = k.AppMeasurement.Db;
                  q || (q = null);
                  var r = k,
                    n,
                    t;
                  try {
                    for (
                      n = r.parent, t = r.location;
                      n &&
                      n.location &&
                      t &&
                      '' + n.location != '' + t &&
                      r.location &&
                      '' + n.location != '' + r.location &&
                      n.location.host == t.host;

                    )
                      (r = n), (n = r.parent);
                  } catch (u) {}
                  a.sb = function (a) {
                    try {
                      console.log(a);
                    } catch (b) {}
                  };
                  a.Ba = function (a) {
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
                  a.kb = function () {
                    var c = k.location.hostname,
                      b = a.fpCookieDomainPeriods,
                      d;
                    b || (b = a.cookieDomainPeriods);
                    if (
                      c &&
                      !a.cookieDomain &&
                      !/^[0-9.]+$/.test(c) &&
                      ((b = b ? parseInt(b) : 2),
                      (b = 2 < b ? b : 2),
                      (d = c.lastIndexOf('.')),
                      0 <= d)
                    ) {
                      for (; 0 <= d && 1 < b; ) (d = c.lastIndexOf('.', d - 1)), b--;
                      a.cookieDomain = 0 < d ? c.substring(d) : c;
                    }
                    return a.cookieDomain;
                  };
                  a.c_r = a.cookieRead = function (c) {
                    c = a.escape(c);
                    var b = ' ' + a.d.cookie,
                      d = b.indexOf(' ' + c + '='),
                      f = 0 > d ? d : b.indexOf(';', d);
                    c =
                      0 > d ? '' : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
                    return '[[B]]' != c ? c : '';
                  };
                  a.c_w = a.cookieWrite = function (c, b, d) {
                    var f = a.kb(),
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
                          c +
                          '=' +
                          a.escape('' != b ? b : '[[B]]') +
                          '; path=/;' +
                          (d && 'SESSION' != e ? ' expires=' + d.toGMTString() + ';' : '') +
                          (f ? ' domain=' + f + ';' : '')),
                        a.cookieRead(c) == b)
                      : 0;
                  };
                  a.G = [];
                  a.da = function (c, b, d) {
                    if (a.va) return 0;
                    a.maxDelay || (a.maxDelay = 250);
                    var f = 0,
                      e = new Date().getTime() + a.maxDelay,
                      g = a.d.visibilityState,
                      m = ['webkitvisibilitychange', 'visibilitychange'];
                    g || (g = a.d.webkitVisibilityState);
                    if (g && 'prerender' == g) {
                      if (!a.ea)
                        for (a.ea = 1, d = 0; d < m.length; d++)
                          a.d.addEventListener(m[d], function () {
                            var c = a.d.visibilityState;
                            c || (c = a.d.webkitVisibilityState);
                            'visible' == c && ((a.ea = 0), a.delayReady());
                          });
                      f = 1;
                      e = 0;
                    } else d || (a.l('_d') && (f = 1));
                    f &&
                      (a.G.push({ m: c, a: b, t: e }),
                      a.ea || setTimeout(a.delayReady, a.maxDelay));
                    return f;
                  };
                  a.delayReady = function () {
                    var c = new Date().getTime(),
                      b = 0,
                      d;
                    for (a.l('_d') ? (b = 1) : a.pa(); 0 < a.G.length; ) {
                      d = a.G.shift();
                      if (b && !d.t && d.t > c) {
                        a.G.unshift(d);
                        setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                        break;
                      }
                      a.va = 1;
                      a[d.m].apply(a, d.a);
                      a.va = 0;
                    }
                  };
                  a.setAccount = a.sa = function (c) {
                    var b, d;
                    if (!a.da('setAccount', arguments))
                      if (((a.account = c), a.allAccounts))
                        for (
                          b = a.allAccounts.concat(c.split(',')),
                            a.allAccounts = [],
                            b.sort(),
                            d = 0;
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
                      m = '';
                    e = f = '';
                    if (a.lightProfileID)
                      (d = a.K),
                        (m = a.lightTrackVars) && (m = ',' + m + ',' + a.ia.join(',') + ',');
                    else {
                      d = a.e;
                      if (a.pe || a.linkType)
                        (m = a.linkTrackVars),
                          (f = a.linkTrackEvents),
                          a.pe &&
                            ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                            a[e] && ((m = a[e].Cb), (f = a[e].Bb)));
                      m && (m = ',' + m + ',' + a.B.join(',') + ',');
                      f && m && (m += ',events,');
                    }
                    b && (b = ',' + b + ',');
                    for (f = 0; f < d.length; f++)
                      (e = d[f]),
                        (g = a[e]) &&
                          (!m || 0 <= m.indexOf(',' + e + ',')) &&
                          (!b || 0 <= b.indexOf(',' + e + ',')) &&
                          c(e, g);
                  };
                  a.o = function (c, b, d, f, e) {
                    var g = '',
                      m,
                      p,
                      k,
                      w,
                      n = 0;
                    'contextData' == c && (c = 'c');
                    if (b) {
                      for (m in b)
                        if (
                          !(Object.prototype[m] || (e && m.substring(0, e.length) != e)) &&
                          b[m] &&
                          (!d || 0 <= d.indexOf(',' + (f ? f + '.' : '') + m + ','))
                        ) {
                          k = !1;
                          if (n)
                            for (p = 0; p < n.length; p++)
                              m.substring(0, n[p].length) == n[p] && (k = !0);
                          if (
                            !k &&
                            ('' == g && (g += '&' + c + '.'),
                            (p = b[m]),
                            e && (m = m.substring(e.length)),
                            0 < m.length)
                          )
                            if (((k = m.indexOf('.')), 0 < k))
                              (p = m.substring(0, k)),
                                (k = (e ? e : '') + p + '.'),
                                n || (n = []),
                                n.push(k),
                                (g += a.o(p, b, d, f, k));
                            else if (('boolean' == typeof p && (p = p ? 'true' : 'false'), p)) {
                              if ('retrieveLightData' == f && 0 > e.indexOf('.contextData.'))
                                switch (((k = m.substring(0, 4)), (w = m.substring(4)), m)) {
                                  case 'transactionID':
                                    m = 'xact';
                                    break;
                                  case 'channel':
                                    m = 'ch';
                                    break;
                                  case 'campaign':
                                    m = 'v0';
                                    break;
                                  default:
                                    a.Ba(w) &&
                                      ('prop' == k
                                        ? (m = 'c' + w)
                                        : 'eVar' == k
                                        ? (m = 'v' + w)
                                        : 'list' == k
                                        ? (m = 'l' + w)
                                        : 'hier' == k &&
                                          ((m = 'h' + w), (p = p.substring(0, 255))));
                                }
                              g += '&' + a.escape(m) + '=' + a.escape(p);
                            }
                        }
                      '' != g && (g += '&.' + c);
                    }
                    return g;
                  };
                  a.mb = function () {
                    var c = '',
                      b,
                      d,
                      f,
                      e,
                      g,
                      m,
                      p,
                      k,
                      n = '',
                      r = '',
                      s = (e = '');
                    if (a.lightProfileID)
                      (b = a.K),
                        (n = a.lightTrackVars) && (n = ',' + n + ',' + a.ia.join(',') + ',');
                    else {
                      b = a.e;
                      if (a.pe || a.linkType)
                        (n = a.linkTrackVars),
                          (r = a.linkTrackEvents),
                          a.pe &&
                            ((e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1)),
                            a[e] && ((n = a[e].Cb), (r = a[e].Bb)));
                      n && (n = ',' + n + ',' + a.B.join(',') + ',');
                      r && ((r = ',' + r + ','), n && (n += ',events,'));
                      a.events2 && (s += ('' != s ? ',' : '') + a.events2);
                    }
                    if (
                      a.visitor &&
                      1.5 <= parseFloat(a.visitor.version) &&
                      a.visitor.getCustomerIDs
                    ) {
                      e = q;
                      if ((g = a.visitor.getCustomerIDs()))
                        for (d in g)
                          Object.prototype[d] ||
                            ((f = g[d]),
                            e || (e = {}),
                            f.id && (e[d + '.id'] = f.id),
                            f.authState && (e[d + '.as'] = f.authState));
                      e && (c += a.o('cid', e));
                    }
                    a.AudienceManagement &&
                      a.AudienceManagement.isReady() &&
                      (c += a.o('d', a.AudienceManagement.getEventCallConfigParams()));
                    for (d = 0; d < b.length; d++) {
                      e = b[d];
                      g = a[e];
                      f = e.substring(0, 4);
                      m = e.substring(4);
                      !g && 'events' == e && s && ((g = s), (s = ''));
                      if (g && (!n || 0 <= n.indexOf(',' + e + ','))) {
                        switch (e) {
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
                            s && (g += ('' != g ? ',' : '') + s);
                            if (r)
                              for (m = g.split(','), g = '', f = 0; f < m.length; f++)
                                (p = m[f]),
                                  (k = p.indexOf('=')),
                                  0 <= k && (p = p.substring(0, k)),
                                  (k = p.indexOf(':')),
                                  0 <= k && (p = p.substring(0, k)),
                                  0 <= r.indexOf(',' + p + ',') && (g += (g ? ',' : '') + m[f]);
                            break;
                          case 'events2':
                            g = '';
                            break;
                          case 'contextData':
                            c += a.o('c', a[e], n, e);
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
                            a.retrieveLightProfiles && (c += a.o('mts', a[e], n, e));
                            g = '';
                            break;
                          default:
                            a.Ba(m) &&
                              ('prop' == f
                                ? (e = 'c' + m)
                                : 'eVar' == f
                                ? (e = 'v' + m)
                                : 'list' == f
                                ? (e = 'l' + m)
                                : 'hier' == f && ((e = 'h' + m), (g = g.substring(0, 255))));
                        }
                        g && (c += '&' + e + '=' + ('pev' != e.substring(0, 3) ? a.escape(g) : g));
                      }
                      'pev3' == e && a.c && (c += a.c);
                    }
                    return c;
                  };
                  a.v = function (a) {
                    var b = a.tagName;
                    if (
                      'undefined' != '' + a.Gb ||
                      ('undefined' != '' + a.wb && 'HTML' != ('' + a.wb).toUpperCase())
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
                  a.xa = function (a) {
                    var b = a.href ? a.href : '',
                      d,
                      f,
                      e;
                    d = b.indexOf(':');
                    f = b.indexOf('?');
                    e = b.indexOf('/');
                    b &&
                      (0 > d || (0 <= f && d > f) || (0 <= e && d > e)) &&
                      ((f =
                        a.protocol && 1 < a.protocol.length
                          ? a.protocol
                          : l.protocol
                          ? l.protocol
                          : ''),
                      (d = l.pathname.lastIndexOf('/')),
                      (b =
                        (f ? f + '//' : '') +
                        (a.host ? a.host : l.host ? l.host : '') +
                        ('/' != h.substring(0, 1)
                          ? l.pathname.substring(0, 0 > d ? 0 : d) + '/'
                          : '') +
                        b));
                    return b;
                  };
                  a.H = function (c) {
                    var b = a.v(c),
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
                              a.replace(
                                a.replace(a.replace('' + f, '\r', ''), '\n', ''),
                                '\t',
                                ''
                              ),
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
                          : c.src && 'IMAGE' == b && (e = c.src)
                        : (e = a.xa(c)),
                      e)
                      ? { id: e.substring(0, 100), type: g }
                      : 0;
                  };
                  a.Eb = function (c) {
                    for (var b = a.v(c), d = a.H(c); c && !d && 'BODY' != b; )
                      if ((c = c.parentElement ? c.parentElement : c.parentNode))
                        (b = a.v(c)), (d = a.H(c));
                    (d && 'BODY' != b) || (c = 0);
                    c &&
                      ((b = c.onclick ? '' + c.onclick : ''),
                      0 <= b.indexOf('.tl(') || 0 <= b.indexOf('.trackLink(')) &&
                      (c = 0);
                    return c;
                  };
                  a.vb = function () {
                    var c,
                      b,
                      d = a.linkObject,
                      f = a.linkType,
                      e = a.linkURL,
                      g,
                      m;
                    a.ja = 1;
                    d || ((a.ja = 0), (d = a.clickObject));
                    if (d) {
                      c = a.v(d);
                      for (b = a.H(d); d && !b && 'BODY' != c; )
                        if ((d = d.parentElement ? d.parentElement : d.parentNode))
                          (c = a.v(d)), (b = a.H(d));
                      (b && 'BODY' != c) || (d = 0);
                      if (d && !a.linkObject) {
                        var p = d.onclick ? '' + d.onclick : '';
                        if (0 <= p.indexOf('.tl(') || 0 <= p.indexOf('.trackLink(')) d = 0;
                      }
                    } else a.ja = 1;
                    !e && d && (e = a.xa(d));
                    e &&
                      !a.linkLeaveQueryString &&
                      ((g = e.indexOf('?')), 0 <= g && (e = e.substring(0, g)));
                    if (!f && e) {
                      var n = 0,
                        r = 0,
                        q;
                      if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                        for (
                          p = e.toLowerCase(),
                            g = p.indexOf('?'),
                            m = p.indexOf('#'),
                            0 <= g ? 0 <= m && m < g && (g = m) : (g = m),
                            0 <= g && (p = p.substring(0, g)),
                            g = a.linkDownloadFileTypes.toLowerCase().split(','),
                            m = 0;
                          m < g.length;
                          m++
                        )
                          (q = g[m]) &&
                            p.substring(p.length - (q.length + 1)) == '.' + q &&
                            (f = 'd');
                      if (
                        a.trackExternalLinks &&
                        !f &&
                        ((p = e.toLowerCase()),
                        a.Aa(p) &&
                          (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname),
                          (g = 0),
                          a.linkExternalFilters
                            ? ((g = a.linkExternalFilters.toLowerCase().split(',')), (n = 1))
                            : a.linkInternalFilters &&
                              (g = a.linkInternalFilters.toLowerCase().split(',')),
                          g))
                      ) {
                        for (m = 0; m < g.length; m++) (q = g[m]), 0 <= p.indexOf(q) && (r = 1);
                        r ? n && (f = 'e') : n || (f = 'e');
                      }
                    }
                    a.linkObject = d;
                    a.linkURL = e;
                    a.linkType = f;
                    if (a.trackClickMap || a.trackInlineStats)
                      (a.c = ''),
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
                            (a.c =
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
                  a.nb = function () {
                    var c = a.ja,
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
                    if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
                      var b = {},
                        d = 0,
                        e = a.cookieRead('s_sq'),
                        g = e ? e.split('&') : 0,
                        m,
                        p,
                        k,
                        e = 0;
                      if (g)
                        for (m = 0; m < g.length; m++)
                          (p = g[m].split('=')),
                            (f = a.unescape(p[0]).split(',')),
                            (p = a.unescape(p[1])),
                            (b[p] = f);
                      f = a.account.split(',');
                      m = {};
                      for (k in a.contextData)
                        k &&
                          !Object.prototype[k] &&
                          'a.activitymap.' == k.substring(0, 14) &&
                          ((m[k] = a.contextData[k]), (a.contextData[k] = ''));
                      a.c = a.o('c', m) + (a.c ? a.c : '');
                      if (c || a.c) {
                        c && !a.c && (e = 1);
                        for (p in b)
                          if (!Object.prototype[p])
                            for (k = 0; k < f.length; k++)
                              for (
                                e &&
                                  ((g = b[p].join(',')),
                                  g == a.account &&
                                    ((a.c += ('&' != p.charAt(0) ? '&' : '') + p),
                                    (b[p] = []),
                                    (d = 1))),
                                  m = 0;
                                m < b[p].length;
                                m++
                              )
                                (g = b[p][m]),
                                  g == f[k] &&
                                    (e &&
                                      (a.c +=
                                        '&u=' +
                                        a.escape(g) +
                                        ('&' != p.charAt(0) ? '&' : '') +
                                        p +
                                        '&u=0'),
                                    b[p].splice(m, 1),
                                    (d = 1));
                        c || (d = 1);
                        if (d) {
                          e = '';
                          m = 2;
                          !c &&
                            a.c &&
                            ((e = a.escape(f.join(',')) + '=' + a.escape(a.c)), (m = 1));
                          for (p in b)
                            !Object.prototype[p] &&
                              0 < m &&
                              0 < b[p].length &&
                              ((e +=
                                (e ? '&' : '') + a.escape(b[p].join(',')) + '=' + a.escape(p)),
                              m--);
                          a.cookieWrite('s_sq', e);
                        }
                      }
                    }
                    return c;
                  };
                  a.ob = function () {
                    if (!a.Ab) {
                      var c = new Date(),
                        b = r.location,
                        d,
                        f,
                        e = (f = d = ''),
                        g = '',
                        m = '',
                        k = '1.2',
                        n = a.cookieWrite('s_cc', 'true', 0) ? 'Y' : 'N',
                        q = '',
                        s = '';
                      if (
                        c.setUTCDate &&
                        ((k = '1.3'), (0).toPrecision && ((k = '1.5'), (c = []), c.forEach))
                      ) {
                        k = '1.6';
                        f = 0;
                        d = {};
                        try {
                          (f = new Iterator(d)),
                            f.next &&
                              ((k = '1.7'),
                              c.reduce &&
                                ((k = '1.8'),
                                k.trim &&
                                  ((k = '1.8.1'),
                                  Date.parse && ((k = '1.8.2'), Object.create && (k = '1.8.5')))));
                        } catch (t) {}
                      }
                      d = screen.width + 'x' + screen.height;
                      e = navigator.javaEnabled() ? 'Y' : 'N';
                      f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
                      g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
                      m = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
                      try {
                        a.b.addBehavior('#default#homePage'), (q = a.b.Fb(b) ? 'Y' : 'N');
                      } catch (u) {}
                      try {
                        a.b.addBehavior('#default#clientCaps'), (s = a.b.connectionType);
                      } catch (x) {}
                      a.resolution = d;
                      a.colorDepth = f;
                      a.javascriptVersion = k;
                      a.javaEnabled = e;
                      a.cookiesEnabled = n;
                      a.browserWidth = g;
                      a.browserHeight = m;
                      a.connectionType = s;
                      a.homepage = q;
                      a.Ab = 1;
                    }
                  };
                  a.L = {};
                  a.loadModule = function (c, b) {
                    var d = a.L[c];
                    if (!d) {
                      d = k['AppMeasurement_Module_' + c]
                        ? new k['AppMeasurement_Module_' + c](a)
                        : {};
                      a.L[c] = a[c] = d;
                      d.Qa = function () {
                        return d.Ua;
                      };
                      d.Va = function (b) {
                        if ((d.Ua = b))
                          (a[c + '_onLoad'] = b), a.da(c + '_onLoad', [a, d], 1) || b(a, d);
                      };
                      try {
                        Object.defineProperty
                          ? Object.defineProperty(d, 'onLoad', { get: d.Qa, set: d.Va })
                          : (d._olc = 1);
                      } catch (f) {
                        d._olc = 1;
                      }
                    }
                    b && ((a[c + '_onLoad'] = b), a.da(c + '_onLoad', [a, d], 1) || b(a, d));
                  };
                  a.l = function (c) {
                    var b, d;
                    for (b in a.L)
                      if (
                        !Object.prototype[b] &&
                        (d = a.L[b]) &&
                        (d._olc && d.onLoad && ((d._olc = 0), d.onLoad(a, d)), d[c] && d[c]())
                      )
                        return 1;
                    return 0;
                  };
                  a.qb = function () {
                    var c = Math.floor(10000000000000 * Math.random()),
                      b = a.visitorSampling,
                      d = a.visitorSamplingGroup,
                      d =
                        's_vsn_' +
                        (a.visitorNamespace ? a.visitorNamespace : a.account) +
                        (d ? '_' + d : ''),
                      f = a.cookieRead(d);
                    if (b) {
                      f && (f = parseInt(f));
                      if (!f) {
                        if (!a.cookieWrite(d, c)) return 0;
                        f = c;
                      }
                      if (f % 10000 > v) return 0;
                    }
                    return 1;
                  };
                  a.M = function (c, b) {
                    var d, f, e, g, m, k;
                    for (d = 0; 2 > d; d++)
                      for (f = 0 < d ? a.qa : a.e, e = 0; e < f.length; e++)
                        if (((g = f[e]), (m = c[g]) || c['!' + g])) {
                          if (!b && ('contextData' == g || 'retrieveLightData' == g) && a[g])
                            for (k in a[g]) m[k] || (m[k] = a[g][k]);
                          a[g] = m;
                        }
                  };
                  a.Ja = function (c, b) {
                    var d, f, e, g;
                    for (d = 0; 2 > d; d++)
                      for (f = 0 < d ? a.qa : a.e, e = 0; e < f.length; e++)
                        (g = f[e]), (c[g] = a[g]), b || c[g] || (c['!' + g] = 1);
                  };
                  a.ib = function (a) {
                    var b,
                      d,
                      f,
                      e,
                      g,
                      m = 0,
                      k,
                      n = '',
                      q = '';
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
                            ? (m = ',q,ie,start,search_key,word,kw,cd,')
                            : 0 <= e.indexOf('yahoo.co') && (m = ',p,ei,'),
                          m && k)))
                    ) {
                      if ((a = k.split('&')) && 1 < a.length) {
                        for (f = 0; f < a.length; f++)
                          (e = a[f]),
                            (d = e.indexOf('=')),
                            0 < d && 0 <= m.indexOf(',' + e.substring(0, d) + ',')
                              ? (n += (n ? '&' : '') + e)
                              : (q += (q ? '&' : '') + e);
                        n && q ? (k = n + '&' + q) : (q = '');
                      }
                      d = 253 - (k.length - q.length) - b.length;
                      a = b + (0 < d ? g.substring(0, d) : '') + '?' + k;
                    }
                    return a;
                  };
                  a.Pa = function (c) {
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
                  a.Z = !1;
                  a.D = !1;
                  a.Xa = function () {
                    a.D = !0;
                    a.i();
                  };
                  a.X = !1;
                  a.Q = !1;
                  a.Ta = function (c) {
                    a.marketingCloudVisitorID = c;
                    a.Q = !0;
                    a.i();
                  };
                  a.aa = !1;
                  a.R = !1;
                  a.Ya = function (c) {
                    a.visitorOptedOut = c;
                    a.R = !0;
                    a.i();
                  };
                  a.U = !1;
                  a.N = !1;
                  a.La = function (c) {
                    a.analyticsVisitorID = c;
                    a.N = !0;
                    a.i();
                  };
                  a.W = !1;
                  a.P = !1;
                  a.Na = function (c) {
                    a.audienceManagerLocationHint = c;
                    a.P = !0;
                    a.i();
                  };
                  a.V = !1;
                  a.O = !1;
                  a.Ma = function (c) {
                    a.audienceManagerBlob = c;
                    a.O = !0;
                    a.i();
                  };
                  a.Oa = function (c) {
                    a.maxDelay || (a.maxDelay = 250);
                    return a.l('_d')
                      ? (c &&
                          setTimeout(function () {
                            c();
                          }, a.maxDelay),
                        !1)
                      : !0;
                  };
                  a.Y = !1;
                  a.C = !1;
                  a.pa = function () {
                    a.C = !0;
                    a.i();
                  };
                  a.isReadyToTrack = function () {
                    var c = !0,
                      b = a.visitor;
                    a.Z || a.D || (a.Pa(a.Xa) ? (a.D = !0) : (a.Z = !0));
                    if (a.Z && !a.D) return !1;
                    b &&
                      b.isAllowed() &&
                      (a.X ||
                        a.marketingCloudVisitorID ||
                        !b.getMarketingCloudVisitorID ||
                        ((a.X = !0),
                        (a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.Ta])),
                        a.marketingCloudVisitorID && (a.Q = !0)),
                      a.aa ||
                        a.visitorOptedOut ||
                        !b.isOptedOut ||
                        ((a.aa = !0),
                        (a.visitorOptedOut = b.isOptedOut([a, a.Ya])),
                        a.visitorOptedOut != q && (a.R = !0)),
                      a.U ||
                        a.analyticsVisitorID ||
                        !b.getAnalyticsVisitorID ||
                        ((a.U = !0),
                        (a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.La])),
                        a.analyticsVisitorID && (a.N = !0)),
                      a.W ||
                        a.audienceManagerLocationHint ||
                        !b.getAudienceManagerLocationHint ||
                        ((a.W = !0),
                        (a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([
                          a,
                          a.Na,
                        ])),
                        a.audienceManagerLocationHint && (a.P = !0)),
                      a.V ||
                        a.audienceManagerBlob ||
                        !b.getAudienceManagerBlob ||
                        ((a.V = !0),
                        (a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Ma])),
                        a.audienceManagerBlob && (a.O = !0)),
                      (a.X && !a.Q && !a.marketingCloudVisitorID) ||
                        (a.U && !a.N && !a.analyticsVisitorID) ||
                        (a.W && !a.P && !a.audienceManagerLocationHint) ||
                        (a.V && !a.O && !a.audienceManagerBlob) ||
                        (a.aa && !a.R)) &&
                      (c = !1);
                    a.Y || a.C || (a.Oa(a.pa) ? (a.C = !0) : (a.Y = !0));
                    a.Y && !a.C && (c = !1);
                    return c;
                  };
                  a.k = q;
                  a.p = 0;
                  a.callbackWhenReadyToTrack = function (c, b, d) {
                    var f;
                    f = {};
                    f.bb = c;
                    f.ab = b;
                    f.Za = d;
                    a.k == q && (a.k = []);
                    a.k.push(f);
                    0 == a.p && (a.p = setInterval(a.i, 100));
                  };
                  a.i = function () {
                    var c;
                    if (a.isReadyToTrack() && (a.Wa(), a.k != q))
                      for (; 0 < a.k.length; ) (c = a.k.shift()), c.ab.apply(c.bb, c.Za);
                  };
                  a.Wa = function () {
                    a.p && (clearInterval(a.p), (a.p = 0));
                  };
                  a.Ra = function (c) {
                    var b,
                      d,
                      f = q,
                      e = q;
                    if (!a.isReadyToTrack()) {
                      b = [];
                      if (c != q) for (d in ((f = {}), c)) f[d] = c[d];
                      e = {};
                      a.Ja(e, !0);
                      b.push(f);
                      b.push(e);
                      a.callbackWhenReadyToTrack(a, a.track, b);
                      return !0;
                    }
                    return !1;
                  };
                  a.lb = function () {
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
                    a.visitor &&
                      (a.visitor.jb && (a.authState = a.visitor.jb()),
                      !a.supplementalDataID &&
                        a.visitor.getSupplementalDataID &&
                        (a.supplementalDataID = a.visitor.getSupplementalDataID(
                          'AppMeasurement:' + a._in,
                          a.expectSupplementalData ? !1 : !0
                        )));
                    a.l('_s');
                    a.Ra(c) ||
                      (b && a.M(b),
                      c && ((d = {}), a.Ja(d, 0), a.M(c)),
                      a.qb() &&
                        !a.visitorOptedOut &&
                        (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.lb()),
                        a.vb(),
                        a.usePlugins && a.doPlugins && a.doPlugins(a),
                        a.account &&
                          (a.abort ||
                            (a.trackOffline &&
                              !a.timestamp &&
                              (a.timestamp = Math.floor(f.getTime() / 1000)),
                            (f = k.location),
                            a.pageURL || (a.pageURL = f.href ? f.href : f),
                            a.referrer || a.Ka || (a.referrer = r.document.referrer),
                            (a.Ka = 1),
                            (a.referrer = a.ib(a.referrer)),
                            a.l('_g')),
                          a.nb() &&
                            !a.abort &&
                            (a.ob(), (g += a.mb()), a.ub(e, g), a.l('_t'), (a.referrer = '')))),
                      c && a.M(d, 1));
                    a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.c = a.lightProfileID = 0;
                  };
                  a.tl = a.trackLink = function (c, b, d, f, e) {
                    a.linkObject = c;
                    a.linkType = b;
                    a.linkName = d;
                    e && ((a.j = c), (a.r = e));
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
                    for (c = 0; c < a.e.length; c++)
                      if (
                        ((b = a.e[c]),
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
                  a.ub = function (c, b) {
                    var d,
                      f = a.trackingServer;
                    d = '';
                    var e = a.dc,
                      g = 'sc.',
                      k = a.visitorNamespace;
                    f
                      ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure)
                      : (k ||
                          ((k = a.account),
                          (f = k.indexOf(',')),
                          0 <= f && (k = k.substring(0, f)),
                          (k = k.replace(/[^A-Za-z0-9]/g, ''))),
                        d || (d = '2o7.net'),
                        (e = e ? ('' + e).toLowerCase() : 'd1'),
                        '2o7.net' == d &&
                          ('d1' == e ? (e = '112') : 'd2' == e && (e = '122'), (g = '')),
                        (f = k + '.' + e + '.' + g + d));
                    d = a.ssl ? 'https://' : 'http://';
                    e = a.AudienceManagement && a.AudienceManagement.isReady();
                    d +=
                      f +
                      '/b/ss/' +
                      a.account +
                      '/' +
                      (a.mobile ? '5.' : '') +
                      (e ? '10' : '1') +
                      '/JS-' +
                      a.version +
                      (a.zb ? 'T' : '') +
                      (a.tagContainerMarker ? '-' + a.tagContainerMarker : '') +
                      '/' +
                      c +
                      '?AQB=1&ndh=1&pf=1&' +
                      (e ? 'callback=s_c_il[' + a._in + '].AudienceManagement.passData&' : '') +
                      b +
                      '&AQE=1';
                    a.gb(d);
                    a.fa();
                  };
                  a.gb = function (c) {
                    a.g || a.pb();
                    a.g.push(c);
                    a.ha = a.u();
                    a.Ha();
                  };
                  a.pb = function () {
                    a.g = a.rb();
                    a.g || (a.g = []);
                  };
                  a.rb = function () {
                    var c, b;
                    if (a.ma()) {
                      try {
                        (b = k.localStorage.getItem(a.ka())) && (c = k.JSON.parse(b));
                      } catch (d) {}
                      return c;
                    }
                  };
                  a.ma = function () {
                    var c = !0;
                    (a.trackOffline && a.offlineFilename && k.localStorage && k.JSON) || (c = !1);
                    return c;
                  };
                  a.ya = function () {
                    var c = 0;
                    a.g && (c = a.g.length);
                    a.A && c++;
                    return c;
                  };
                  a.fa = function () {
                    if (!a.A)
                      if (((a.za = q), a.la)) a.ha > a.J && a.Fa(a.g), a.oa(500);
                      else {
                        var c = a.$a();
                        if (0 < c) a.oa(c);
                        else if ((c = a.wa())) (a.A = 1), a.tb(c), a.xb(c);
                      }
                  };
                  a.oa = function (c) {
                    a.za || (c || (c = 0), (a.za = setTimeout(a.fa, c)));
                  };
                  a.$a = function () {
                    var c;
                    if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
                    c = a.u() - a.Ea;
                    return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
                  };
                  a.wa = function () {
                    if (0 < a.g.length) return a.g.shift();
                  };
                  a.tb = function (c) {
                    if (a.debugTracking) {
                      var b = 'AppMeasurement Debug: ' + c;
                      c = c.split('&');
                      var d;
                      for (d = 0; d < c.length; d++) b += '\n\t' + a.unescape(c[d]);
                      a.sb(b);
                    }
                  };
                  a.Sa = function () {
                    return a.marketingCloudVisitorID || a.analyticsVisitorID;
                  };
                  a.T = !1;
                  var s;
                  try {
                    s = JSON.parse('{"x":"y"}');
                  } catch (x) {
                    s = null;
                  }
                  s && 'y' == s.x
                    ? ((a.T = !0),
                      (a.S = function (a) {
                        return JSON.parse(a);
                      }))
                    : k.$ && k.$.parseJSON
                    ? ((a.S = function (a) {
                        return k.$.parseJSON(a);
                      }),
                      (a.T = !0))
                    : (a.S = function () {
                        return null;
                      });
                  a.xb = function (c) {
                    var b, d, f;
                    a.Sa() &&
                      2047 < c.length &&
                      ('undefined' != typeof XMLHttpRequest &&
                        ((b = new XMLHttpRequest()), 'withCredentials' in b ? (d = 1) : (b = 0)),
                      b ||
                        'undefined' == typeof XDomainRequest ||
                        ((b = new XDomainRequest()), (d = 2)),
                      b &&
                        a.AudienceManagement &&
                        a.AudienceManagement.isReady() &&
                        (a.T ? (b.ra = !0) : (b = 0)));
                    !b && a.Ia && (c = c.substring(0, 2047));
                    !b &&
                      a.d.createElement &&
                      a.AudienceManagement &&
                      a.AudienceManagement.isReady() &&
                      (b = a.d.createElement('SCRIPT')) &&
                      'async' in b &&
                      ((f = (f = a.d.getElementsByTagName('HEAD')) && f[0] ? f[0] : a.d.body)
                        ? ((b.type = 'text/javascript'), b.setAttribute('async', 'async'), (d = 3))
                        : (b = 0));
                    b || ((b = new Image()), (b.alt = ''));
                    b.ua = function () {
                      try {
                        a.na && (clearTimeout(a.na), (a.na = 0)),
                          b.timeout && (clearTimeout(b.timeout), (b.timeout = 0));
                      } catch (c) {}
                    };
                    b.onload = b.yb = function () {
                      b.ua();
                      a.fb();
                      a.ba();
                      a.A = 0;
                      a.fa();
                      if (b.ra) {
                        b.ra = !1;
                        try {
                          var c = a.S(b.responseText);
                          a.AudienceManagement.passData(c);
                        } catch (d) {}
                      }
                    };
                    b.onabort = b.onerror = b.hb = function () {
                      b.ua();
                      (a.trackOffline || a.la) && a.A && a.g.unshift(a.eb);
                      a.A = 0;
                      a.ha > a.J && a.Fa(a.g);
                      a.ba();
                      a.oa(500);
                    };
                    b.onreadystatechange = function () {
                      4 == b.readyState && (200 == b.status ? b.yb() : b.hb());
                    };
                    a.Ea = a.u();
                    if (1 == d || 2 == d) {
                      var e = c.indexOf('?');
                      f = c.substring(0, e);
                      e = c.substring(e + 1);
                      e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, '');
                      1 == d
                        ? (b.open('POST', f, !0), b.send(e))
                        : 2 == d && (b.open('POST', f), b.send(e));
                    } else if (((b.src = c), 3 == d)) {
                      if (a.Ca)
                        try {
                          f.removeChild(a.Ca);
                        } catch (g) {}
                      f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
                      a.Ca = a.cb;
                    }
                    b.abort && (a.na = setTimeout(b.abort, 5000));
                    a.eb = c;
                    a.cb = k['s_i_' + a.replace(a.account, ',', '_')] = b;
                    if ((a.useForcedLinkTracking && a.F) || a.r)
                      a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
                        (a.ca = setTimeout(a.ba, a.forcedLinkTrackingTimeout));
                  };
                  a.fb = function () {
                    if (a.ma() && !(a.Da > a.J))
                      try {
                        k.localStorage.removeItem(a.ka()), (a.Da = a.u());
                      } catch (c) {}
                  };
                  a.Fa = function (c) {
                    if (a.ma()) {
                      a.Ha();
                      try {
                        k.localStorage.setItem(a.ka(), k.JSON.stringify(c)), (a.J = a.u());
                      } catch (b) {}
                    }
                  };
                  a.Ha = function () {
                    if (a.trackOffline) {
                      if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
                      for (; a.g.length > a.offlineLimit; ) a.wa();
                    }
                  };
                  a.forceOffline = function () {
                    a.la = !0;
                  };
                  a.forceOnline = function () {
                    a.la = !1;
                  };
                  a.ka = function () {
                    return a.offlineFilename + '-' + a.visitorNamespace + a.account;
                  };
                  a.u = function () {
                    return new Date().getTime();
                  };
                  a.Aa = function (a) {
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
                    a.zb = c;
                    for (b = 0; b < a._il.length; b++)
                      if ((d = a._il[b]) && 's_l' == d._c && d.tagContainerName == c) {
                        a.M(d);
                        if (d.lmq)
                          for (b = 0; b < d.lmq.length; b++) (f = d.lmq[b]), a.loadModule(f.n);
                        if (d.ml)
                          for (f in d.ml)
                            if (a[f])
                              for (b in ((c = a[f]), (f = d.ml[f]), f))
                                !Object.prototype[b] &&
                                  ('function' != typeof f[b] ||
                                    0 > ('' + f[b]).indexOf('s_c_il')) &&
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
                    getQueryParam: function (c, b, d) {
                      var f;
                      b || (b = a.pageURL ? a.pageURL : k.location);
                      d || (d = '&');
                      return c &&
                        b &&
                        ((b = '' + b),
                        (f = b.indexOf('?')),
                        0 <= f &&
                          ((b = d + b.substring(f + 1) + d),
                          (f = b.indexOf(d + c + '=')),
                          0 <= f &&
                            ((b = b.substring(f + d.length + c.length + 1)),
                            (f = b.indexOf(d)),
                            0 <= f && (b = b.substring(0, f)),
                            0 < b.length)))
                        ? a.unescape(b)
                        : '';
                    },
                  };
                  a.B = 'supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData'.split(
                    ' '
                  );
                  a.e = a.B.concat(
                    'purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt'.split(
                      ' '
                    )
                  );
                  a.ia = 'timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy'.split(
                    ' '
                  );
                  a.K = a.ia.slice(0);
                  a.qa = 'account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement'.split(
                    ' '
                  );
                  for (n = 0; 250 >= n; n++)
                    76 > n && (a.e.push('prop' + n), a.K.push('prop' + n)),
                      a.e.push('eVar' + n),
                      a.K.push('eVar' + n),
                      6 > n && a.e.push('hier' + n),
                      4 > n && a.e.push('list' + n);
                  n = 'pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest'.split(
                    ' '
                  );
                  a.e = a.e.concat(n);
                  a.B = a.B.concat(n);
                  a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf('https');
                  a.charSet = 'UTF-8';
                  a.contextData = {};
                  a.offlineThrottleDelay = 0;
                  a.offlineFilename = 'AppMeasurement.offline';
                  a.Ea = 0;
                  a.ha = 0;
                  a.J = 0;
                  a.Da = 0;
                  a.linkDownloadFileTypes =
                    'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
                  a.w = k;
                  a.d = k.document;
                  try {
                    if (((a.Ia = !1), navigator)) {
                      var y = navigator.userAgent;
                      if (
                        'Microsoft Internet Explorer' == navigator.appName ||
                        0 <= y.indexOf('MSIE ') ||
                        (0 <= y.indexOf('Trident/') && 0 <= y.indexOf('Windows NT 6'))
                      )
                        a.Ia = !0;
                    }
                  } catch (z) {}
                  a.ba = function () {
                    a.ca && (k.clearTimeout(a.ca), (a.ca = q));
                    a.j && a.F && a.j.dispatchEvent(a.F);
                    a.r &&
                      ('function' == typeof a.r
                        ? a.r()
                        : a.j && a.j.href && (a.d.location = a.j.href));
                    a.j = a.F = a.r = 0;
                  };
                  a.Ga = function () {
                    a.b = a.d.body;
                    a.b
                      ? ((a.q = function (c) {
                          var b, d, f, e, g;
                          if (
                            !(
                              (a.d && a.d.getElementById('cppXYctnr')) ||
                              (c && c['s_fe_' + a._in])
                            )
                          ) {
                            if (a.ta)
                              if (a.useForcedLinkTracking)
                                a.b.removeEventListener('click', a.q, !1);
                              else {
                                a.b.removeEventListener('click', a.q, !0);
                                a.ta = a.useForcedLinkTracking = 0;
                                return;
                              }
                            else a.useForcedLinkTracking = 0;
                            a.clickObject = c.srcElement ? c.srcElement : c.target;
                            try {
                              if (
                                !a.clickObject ||
                                (a.I && a.I == a.clickObject) ||
                                !(
                                  a.clickObject.tagName ||
                                  a.clickObject.parentElement ||
                                  a.clickObject.parentNode
                                )
                              )
                                a.clickObject = 0;
                              else {
                                var m = (a.I = a.clickObject);
                                a.ga && (clearTimeout(a.ga), (a.ga = 0));
                                a.ga = setTimeout(function () {
                                  a.I == m && (a.I = 0);
                                }, 10000);
                                f = a.ya();
                                a.track();
                                if (f < a.ya() && a.useForcedLinkTracking && c.target) {
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
                                    a.Aa(g) || (g = 0),
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
                                    } catch (n) {
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
                                      } catch (q) {
                                        b = 0;
                                      }
                                      b &&
                                        ((b['s_fe_' + a._in] = b.s_fe = 1),
                                        c.stopPropagation(),
                                        c.stopImmediatePropagation && c.stopImmediatePropagation(),
                                        c.preventDefault(),
                                        (a.j = c.target),
                                        (a.F = b));
                                    }
                                  }
                                }
                              }
                            } catch (r) {
                              a.clickObject = 0;
                            }
                          }
                        }),
                        a.b && a.b.attachEvent
                          ? a.b.attachEvent('onclick', a.q)
                          : a.b &&
                            a.b.addEventListener &&
                            (navigator &&
                              ((0 <= navigator.userAgent.indexOf('WebKit') && a.d.createEvent) ||
                                (0 <= navigator.userAgent.indexOf('Firefox/2') && k.MouseEvent)) &&
                              ((a.ta = 1),
                              (a.useForcedLinkTracking = 1),
                              a.b.addEventListener('click', a.q, !0)),
                            a.b.addEventListener('click', a.q, !1)))
                      : setTimeout(a.Ga, 30);
                  };
                  a.Ga();
                  a.loadModule('ActivityMap');
                }
                function s_gi (a) {
                  var k,
                    q = window.s_c_il,
                    r,
                    n,
                    t = a.split(','),
                    u,
                    s,
                    x = 0;
                  if (q)
                    for (r = 0; !x && r < q.length; ) {
                      k = q[r];
                      if ('s_c' == k._c && (k.account || k.oun))
                        if (k.account && k.account == a) x = 1;
                        else
                          for (
                            n = k.account ? k.account : k.oun,
                              n = k.allAccounts ? k.allAccounts : n.split(','),
                              u = 0;
                            u < t.length;
                            u++
                          )
                            for (s = 0; s < n.length; s++) t[u] == n[s] && (x = 1);
                      r++;
                    }
                  x || (k = new AppMeasurement());
                  k.setAccount ? k.setAccount(a) : k.sa && k.sa(a);
                  return k;
                }
                AppMeasurement.getInstance = s_gi;
                window.s_objectID || (window.s_objectID = 0);
                function s_pgicq () {
                  var a = window,
                    k = a.s_giq,
                    q,
                    r,
                    n;
                  if (k)
                    for (q = 0; q < k.length; q++)
                      (r = k[q]),
                        (n = s_gi(r.oun)),
                        n.setAccount(r.un),
                        n.setTagContainer(r.tagContainerName);
                  a.s_giq = 0;
                }
                s_pgicq();
              },
            ]);
            Bootstrapper.AF.push(['call', 'SiteCatalyst', 'block', 's']);
            Bootstrapper.AF.push(['push', 'SiteCatalyst', 'ns', 's']);
            Bootstrapper.AF.push([
              'set',
              'SiteCatalyst',
              'clearData',
              function () {
                if (this.ns)
                  for (var i = 0; i < this.ns.length; i++) {
                    var sObj = this.ns[i];
                    Bootstrapper.AF.push([
                      'set',
                      sObj,
                      'clearData',
                      function () {
                        this.pre = [];
                      },
                    ]);
                  }
              },
            ]);
            Bootstrapper.AF.push(['call', 'SiteCatalyst', 'clearData']);
            Bootstrapper.AF.push([
              'set',
              'SiteCatalyst',
              'clearVars',
              function () {
                if (this.ns)
                  for (var i = 0; i < this.ns.length; i++) {
                    var sObj = this.ns[i];
                    Bootstrapper.AF.push([
                      'set',
                      sObj,
                      'clearVars',
                      function () {
                        this.pre = this.pre || [];
                        for (var i = 0; i < this.pre.length; i++) {
                          var adobeVar = this.pre[i][0];
                          if (
                            /^(channel|events|eventList|products|productList|purchaseID|transactionID|state|zip|campaign)$/.test(
                              adobeVar
                            ) ||
                            /^(prop|eVar|hier|list)$/.test(adobeVar.substring(0, 4))
                          ) {
                            this.pre.splice(this.pre.indexOf(i, 1));
                            i--;
                          }
                        }
                      },
                    ]);
                  }
              },
            ]);
            Bootstrapper.AF.push(['call', 'SiteCatalyst', 'clearVars']);
          },
          3206395,
          [3375270, 3158145],
          292061,
          [371978, 613579]
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
                      return window.ci_transactionValue || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_transactionValue',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7947' }
              );
            }, 7947);
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
                      return window.CI_ItemNames || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'CI_ItemNames',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7944' }
              );
            }, 7944);
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
                      return window.ci_aPrices || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_aPrices',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7961' }
              );
            }, 7961);
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
                    var str = '';
                    if (Bootstrapper.data.extract('lifecycle', 'meta').length > 0)
                      return Bootstrapper.data.extract('lifecycle', 'meta');
                    else if (typeof window.globalDL === 'undefined' && window.hpmmd) {
                      window.globalDL = window.hpmmd;
                      str =
                        str.length < 1 &&
                        window.globalDL &&
                        window.globalDL.metatags &&
                        window.globalDL.metatags.lifecycle
                          ? window.globalDL.metatags.lifecycle
                          : '';
                    }
                    return str;
                  },
                  transform: function (v) {
                    return v;
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.immediateTrigger,
                  dataDefName: 'lifecycle',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '12372' }
              );
            }, 12372);
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
                    var str = '';
                    if (Bootstrapper.data.extract('segment', 'meta').length > 0)
                      return Bootstrapper.data.extract('segment', 'meta');
                    else if (typeof window.globalDL === 'undefined' && window.hpmmd) {
                      window.globalDL = window.hpmmd;
                      str =
                        str.length < 1 &&
                        window.globalDL &&
                        window.globalDL.metatags &&
                        window.globalDL.metatags.segment
                          ? window.globalDL.metatags.segment
                          : '';
                    }
                    return str;
                  },
                  transform: function (v) {
                    return v;
                  },
                  load: 'page',
                  dataDefName: 'segment',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '12365' }
              );
            }, 12365);
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
                      return window.ci_landing || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_landing',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7948' }
              );
            }, 7948);
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
                    var stage = 'pro';
                    if (/[\?&]hpanalyticsitg=/.test(window.location.search) === true)
                      stage = 'itg';
                    else if (/[\?&]hpanalyticsdev=/.test(window.location.search) === true)
                      stage = 'dev';
                    return stage;
                  },
                  load: 'page',
                  dataDefName: 'hpcom-stage',
                  collection: 'hpcom',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7502' }
              );
            }, 7502);
          },
          -1,
          -1
        );
        Bootstrapper.bindDOMParsed(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function (tagList) {
              function insertTag (src, type, cat, ord, num, tag_type) {
                function replaceValueOrRandom (template, name, value) {
                  var random = (Math.random() + '') * 10000000000000,
                    tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
                  return template.replace(name, tmp);
                }
                var srcTemplate, url;
                if (tag_type == 'iframe') {
                  (srcTemplate =
                    'https://###SRC###.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?'),
                    (url = srcTemplate
                      .replace('###SRC###', src)
                      .replace('###TYPE###', type)
                      .replace('###CAT###', cat)
                      .replace('###SRC###', src));
                  url = replaceValueOrRandom(url, '###ORD###', ord || '');
                  url = replaceValueOrRandom(url, '###NUM###', num || '');
                  var iframe = document.createElement('iframe');
                  iframe.style.display = 'none';
                  iframe.src = url;
                  document.body.appendChild(iframe);
                }
                if (tag_type == 'img') {
                  (srcTemplate =
                    '//ad.doubleclick.net/ddm/activity/src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?'),
                    (url = srcTemplate
                      .replace('###SRC###', src)
                      .replace('###TYPE###', type)
                      .replace('###CAT###', cat)
                      .replace('###SRC###', src));
                  url = replaceValueOrRandom(url, '###ORD###', ord || '');
                  url = replaceValueOrRandom(url, '###NUM###', num || '');
                  new Image().src = url;
                }
              }
              var lcCurrentURL = location.href.toLowerCase();
              for (var i = 0; i < tagList.length; i++) {
                var tag = tagList[i];
                if (
                  tag.isValid &&
                  (lcCurrentURL.indexOf(tag.url) !== -1 ||
                    tag.url.indexOf(location.hostname + location.pathname) !== -1)
                )
                  insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num, tag.tag_type);
              }
            })([
              {
                url: 'http://www8.hp.com/uk/en/sprout/home.html?_sm_au_=iVVtL51jN6FQtCNR',
                isValid: true,
                src: '2326416',
                type: 'sproutq2',
                cat: 'uk_ps000',
                ord: '<random>',
                tag_type: 'img',
              },
              {
                url: 'http://www8.hp.com/uk/en/sprout/home.html?_sm_au_=iVVtL51jN6FQtCNR',
                isValid: true,
                src: '2326416',
                type: 'sproutq2',
                cat: 'uk_ps001',
                ord: '<random>',
                tag_type: 'img',
              },
              {
                url: 'http://www8.hp.com/fr/fr/sprout/home.html',
                isValid: true,
                src: '2326316',
                type: 'psgsp0',
                cat: 'fr_ps0',
                ord: '1',
                num: '<random>',
                tag_type: 'iframe',
              },
              {
                url: 'http://www8.hp.com/fr/fr/sprout/home.html/3d',
                isValid: true,
                src: '2326316',
                type: 'psgsp0',
                cat: 'fr_ps002',
                ord: '1',
                num: '<random>',
                tag_type: 'iframe',
              },
              {
                url: 'http://www8.hp.com/fr/fr/sprout/home.html',
                isValid: true,
                src: '2326316',
                type: 'psgsp0',
                cat: 'fr_ps00',
                ord: '1',
                num: '<random>',
                tag_type: 'iframe',
              },
              {
                url: 'http://www8.hp.com/fr/fr/sprout/home.html',
                isValid: true,
                src: '2326316',
                type: 'psgsp0',
                cat: 'fr_ps000',
                ord: '1',
                num: '<random>',
                tag_type: 'iframe',
              },
              {
                url: 'http://www8.hp.com/fr/fr/sprout/home.html',
                isValid: true,
                src: '2326316',
                type: 'psgsp0',
                cat: 'fr_ps001',
                ord: '1',
                num: '<random>',
                tag_type: 'iframe',
              },
              {
                url: 'http://www8.hp.com/es/es/sprout/home.html',
                isValid: true,
                src: '2326389',
                type: 'psg_s0',
                cat: 'es_ps0',
                ord: '1',
                num: '<random>',
                tag_type: 'iframe',
              },
              {
                url: 'http://www8.hp.com/es/es/sprout/home.html',
                isValid: true,
                src: '2326389',
                type: 'psg_s0',
                cat: 'es_ps00',
                ord: '1',
                num: '<random>',
                tag_type: 'iframe',
              },
              {
                url: 'http://www8.hp.com/es/es/sprout/home.html',
                isValid: true,
                src: '2326389',
                type: 'psg_s0',
                cat: 'es_ps000',
                ord: '1',
                num: '<random>',
                tag_type: 'iframe',
              },
              {
                url: 'http://www8.hp.com/us/en/sprout/home.html',
                isValid: true,
                src: '2326389',
                type: 'psg_s0',
                cat: 'es_ps002',
                ord: '1',
                num: '<random>',
                tag_type: 'iframe',
              },
              {
                url: 'http://www8.hp.com/us/en/sprout/home.html',
                isValid: true,
                src: '2326389',
                type: 'psg_s0',
                cat: 'es_ps001',
                ord: '1',
                num: '<random>',
                tag_type: 'iframe',
              },
            ]);
          },
          1306075,
          377279
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
                      return window.CI_ItemQtys || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'CI_ItemQtys',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7946' }
              );
            }, 7946);
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
                      return window.ci_aoid || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_aoid',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7953' }
              );
            }, 7953);
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
                      return window.CI_PaymentType || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'CI_PaymentType',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7957' }
              );
            }, 7957);
          },
          -1,
          -1
        );
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var hpscDomains = /^(h20566\.www2\.hp\.com|h20565\.www2\.hp\.com|hpsc.*\.(houston|austin|atlanta)\.(hpe|hp)\.com|hpsc.*\.itcs\.(hpe|hp)\.com)$/gi;
            if (hpscDomains.test(window.location.hostname)) {
              function pn () {
                var p = 'unknown page';
                function e (p) {
                  var e = unescape(window.location.search.substring(1));
                  var i = e.split('&');
                  for (var n = 0; n < i.length; n++) {
                    var r = i[n].split('=');
                    if (r[0] == p)
                      return unescape(r[2]).split('|')[0] + '|' + unescape(r[2]).split('|')[1];
                  }
                }
                if (window.SP_PAGE_NAME) {
                  var i = window.SP_PAGE_NAME.toLowerCase();
                  if (i.indexOf('forums') > -1) {
                    var n = !!e('spf_p.prp_fmMain') ? e('spf_p.prp_fmMain') : '';
                    p = 'hpsc:' + i + '|' + n;
                  } else p = 'hpsc:' + i;
                  if (i.indexOf('search') > -1)
                    if (window.SP_SEARCH_RESULTS === 0)
                      window.s_prop15 = window.SP_SEARCH_KEYWORDS;
                    else window.s_prop6 = window.SP_SEARCH_KEYWORDS;
                  if (window.SP_DOC_ID) window.s_prop2 = window.SP_DOC_ID;
                  if (window.SP_PRODUCT_LINE_CODE) window.s_prop4 = window.SP_PRODUCT_LINE_CODE;
                  if (window.SP_PRODUCT_SERIES_OID && window.SP_PRODUCT_SERIES_NAME) {
                    var r = window.SP_PRODUCT_SERIES_OID;
                    var o = unescape(window.SP_PRODUCT_SERIES_NAME);
                    window.s_prop5 = r + '-' + o;
                  }
                }
                p = p.split('hpsc:').join('');
                return p;
              }
              window.s_sendDownloadLinkEventCES = function (p, e) {
                window.s_linkTrackVars = 'prop4,prop5';
                var i = e.split(':');
                var n = i[0];
                var r = i[1];
                var o = i[2];
                var a = i[3];
                var s = i[4];
                var t = unescape(i[5]);
                var w = n + ':' + r + ':' + o + '-' + s;
                window.hpmmd.page.traffic4 = o;
                window.hpmmd.page.traffic5 = a + '-' + t;
                try {
                  trackMetrics('newLink', { name: w, type: 'download' });
                } catch (c) {}
              };
              window.hpmmd = window.hpmmd || {
                type: 'Cleansheet Wash',
                page: { events: [] },
                product: {},
                user: {},
                legacy: {},
                promo: {},
              };
              window.hpmmd.page.name = pn();
              window.hpmmd.page.section = 'hpsc';
              window.hpmmd.page.segment = window.s_prop9 || 'commercial';
              window.hpmmd.page.traffic1 = window.s_prop1;
              window.hpmmd.page.traffic2 = window.s_prop2;
              window.hpmmd.page.traffic4 = window.s_prop4;
              window.hpmmd.page.traffic5 = window.s_prop5;
              if (window.s_prop6)
                window.hpmmd.search = { sitesearch: { keyword: window.s_prop6 } };
              var rsidTest = /(h20566\.www2\.hp\.com|h20565\.www2\.hp\.com)/gi;
              if (rsidTest.test(window.location.hostname))
                window.hpmmd.account = 'hphqwwserviceportal,hpi-hphqwwserviceportal';
              else window.hpmmd.account = 'hphqwwserviceportaldev,hpi-hphqwwserviceportaldev';
            }
          },
          933531,
          311806
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
                      return Bootstrapper.data.extract('target_country', 'meta');
                    } catch (e) {
                      return 'error';
                    }
                  },
                  transform: function (v) {
                    return v;
                  },
                  load: 'page',
                  dataDefName: 'target_country',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '12362' }
              );
            }, 12362);
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
                    var re = /gclid=([^&\?]+)/,
                      param = re.exec(location.search || '');
                    return !!param && param.length > 1 ? param[1] : '';
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'Global-gclid - Google Search',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '9866' }
              );
            }, 9866);
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
                      return window.ci_aItemNames || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_aItemNames',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7960' }
              );
            }, 7960);
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
                      return window.CI_OrderID || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'CI_OrderID',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7963' }
              );
            }, 7963);
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
                      return Bootstrapper.data.extract('keywords', 'meta');
                    } catch (e) {
                      return 'error';
                    }
                  },
                  transform: function (v) {
                    return v;
                  },
                  load: 'page',
                  dataDefName: 'keywords',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '12370' }
              );
            }, 12370);
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
                      return window.hpmmd.metatags.language;
                    } catch (e) {
                      return 'error';
                    }
                  },
                  load: 'page',
                  dataDefName: 'language',
                  collection: 'b2b',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7075' }
              );
            }, 7075);
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
                      if (typeof globalDL === 'undefined' && !!hpmmd) {
                        globalDL = hpmmd;
                        if (globalDL && globalDL.metatags && globalDL.metatags.business_unit)
                          return globalDL.metatags.business_unit;
                      }
                      return Bootstrapper.data.extract('bu', 'meta');
                    } catch (e) {
                      return 'error';
                    }
                  },
                  transform: function (val) {
                    return val ? val.toLowerCase() : '';
                  },
                  load: 'page',
                  dataDefName: 'businessUnit',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '12373' }
              );
            }, 12373);
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
                    rval = false;
                    var sw_urls = /software-solutions\/(unified-functional-automated-testing|arcsight-logger-log-management|operations-manager-infrastructure-monitoring|data-protector-backup-recovery-software|configuration-management-system-database|diagnostics-software|service-virtualization)\/index\.html/gi;
                    var camp = /\/campaigns\//gi;
                    if (sw_urls.test(window.location.href) || camp.test(window.location.href))
                      rval = true;
                    return rval;
                  },
                  load: 'page',
                  dataDefName: 'hpcom-delayedURLs',
                  collection: 'hpcom',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '9449' }
              );
            }, 9449);
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
                    var host = window.location.hostname,
                      qs = window.location.search,
                      cookie = document.cookie,
                      domains_arr = ['localhost', 'itcs.hp.com', 'h30434.sdc.hp.com'],
                      qs_arr = ['hpanalyticsdev='],
                      cookie_arr = ['hpanalyticsdev=true'],
                      result = false;
                    for (i = 0; i < domains_arr.length; i++)
                      if (host == domains_arr[i]) result = true;
                    for (i = 0; i < qs_arr.length; i++)
                      if (qs.indexOf(qs_arr[i]) !== -1) result = true;
                    for (i = 0; i < cookie_arr.length; i++)
                      if (cookie.indexOf(cookie_arr[i]) !== -1) result = true;
                    if (
                      /d\d+t\d+(g|a|ga|gc)\.(houston|austin|atlanta)\.hp\.com/.test(host) == true
                    ) {
                      var domains_arr2 = ['atlanta.hp.com', 'houston.hp.com', 'austin.hp.com'];
                      for (i = 0; i < domains_arr2.length; i++)
                        if (host == domains_arr[i]) result = true;
                    }
                    return result;
                  },
                  load: 'page',
                  dataDefName: 'hpcom-isdev',
                  collection: 'hpcom',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7079' }
              );
            }, 7079);
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
                      return window.ci_series || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_series',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7950' }
              );
            }, 7950);
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
                      return window.canparamValues || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_canparamValues',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7952' }
              );
            }, 7952);
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
                    const $___old_bfea28bc165929ec = {}.constructor.getOwnPropertyDescriptor(
                      Navigator.prototype,
                      'userAgent'
                    );
                    try {
                      if ($___old_bfea28bc165929ec)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'userAgent',
                          $___stub_fb986baf23da602c.userAgent
                        ));
                      return function () {
                        var ua = navigator.userAgent.toLowerCase();
                        if (ua.indexOf('gomezagent') !== -1 || ua.indexOf('catchpoint') !== -1)
                          return false;
                        return true;
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_bfea28bc165929ec)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'userAgent',
                          $___old_bfea28bc165929ec
                        ));
                    }
                  },
                  load: 'page',
                  dataDefName: 'hpcom-checkValidUserAgents',
                  collection: 'hpcom',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7504' }
              );
            }, 7504);
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
                    if (!!window.console) {
                      console.log('Enabling global-utility');
                      return '';
                    }
                  },
                  load: 'page',
                  dataDefName: 'UberUtility',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '16375' }
              );
            }, 16375);
          },
          -1,
          -1
        );
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function (hpUtil) {
              var MAX_ATTEMPTS = 200;
              var BACKOFF_THRESHOLD = 100;
              var BACKOFF_RATE = 1.1;
              var DEFAULT_INTERVAL = 100;
              var trackConsoleErrors = false;
              var templayed;
              if (typeof templayed == 'undefined') {
                templayed = function (c, e) {
                  var b = function (m, h) {
                      h = 1;
                      m = m.replace(/\.\.\//g, function () {
                        h++;
                        return '';
                      });
                      var l = ['vars[vars.length - ', h, ']'],
                        k = m == '.' ? [] : m.split('.'),
                        g = 0;
                      for (g; g < k.length; g++) l.push('.' + k[g]);
                      return l.join('');
                    },
                    a = function (g) {
                      return g.replace(/\{\{(!|&|\{)?\s*(.*?)\s*}}+/g, function (j, h, l) {
                        if (h == '!') return '';
                        var k = d++;
                        return [
                          '"; var o',
                          k,
                          ' = ',
                          b(l),
                          ', s',
                          k,
                          ' = (((typeof(o',
                          k,
                          ') == "function" ? o',
                          k,
                          '.call(vars[vars.length - 1]) : o',
                          k,
                          ') || "") + ""); s += ',
                          h
                            ? 's' + k
                            : '(/[&"><]/.test(s' +
                              k +
                              ') ? s' +
                              k +
                              '.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/>/g,"&gt;").replace(/</g,"&lt;") : s' +
                              k +
                              ')',
                          ' + "',
                        ].join('');
                      });
                    },
                    f = function (g) {
                      return a(
                        g.replace(/\{\{(\^|#)(.*?)}}(.*?)\{\{\/\2}}/g, function (j, h, m, l) {
                          var k = d++;
                          return [
                            '"; var o',
                            k,
                            ' = ',
                            b(m),
                            '; ',
                            (h == '^'
                              ? [
                                  'if ((o',
                                  k,
                                  ' instanceof Array) ? !o',
                                  k,
                                  '.length : !o',
                                  k,
                                  ') { s += "',
                                  f(l),
                                  '"; } ',
                                ]
                              : [
                                  'if (typeof(o',
                                  k,
                                  ') == "boolean" && o',
                                  k,
                                  ') { s += "',
                                  f(l),
                                  '"; } else if (o',
                                  k,
                                  ') { for (var i',
                                  k,
                                  ' = 0; i',
                                  k,
                                  ' < o',
                                  k,
                                  '.length; i',
                                  k,
                                  '++) { vars.push(o',
                                  k,
                                  '[i',
                                  k,
                                  ']); s += "',
                                  f(l),
                                  '"; vars.pop(); }}',
                                ]
                            ).join(''),
                            '; s += "',
                          ].join('');
                        })
                      );
                    },
                    d = 0;
                  return new Function(
                    'vars',
                    'vars = [vars]; var s = "' +
                      f(c.replace(/"/g, '\\"').replace(/\n/g, '\\n')) +
                      '"; return s;'
                  );
                };
                templayed.version = '0.2.1';
              }
              hpUtil.templayed = templayed;
              hpUtil.q = Bootstrapper.when.defer;
              hpUtil.whenAvailable = hpUtil.when = function (condition, interval) {
                interval = interval || DEFAULT_INTERVAL;
                var attempts = 0;
                var dfd = new hpUtil.q();
                (function () {
                  if (attempts > MAX_ATTEMPTS) {
                    dfd.reject('Condition never met within time limit');
                    return;
                  } else if (attempts > BACKOFF_THRESHOLD) interval = interval * BACKOFF_RATE;
                  if (condition()) dfd.resolve();
                  else setTimeout(arguments.callee, interval);
                  attempts++;
                })();
                return dfd.promise;
              };
              function whenDecorator (condition, f) {
                return function () {
                  var dfd = new hpUtil.q();
                  var that = this;
                  var args = arguments;
                  hpUtil.when(condition).then(function () {
                    dfd.resolve(f.apply(that, args));
                  });
                  return dfd.promise;
                };
              }
              hpUtil.getParamByName = function (name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
                  results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
              };
              hpUtil.setCookie = function (cname, cvalue, exdays, cdomain, cpath) {
                var c = [];
                var d = new Date();
                d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
                c.push(cname + '=' + cvalue);
                c.push('expires=' + d.toUTCString());
                c.push('domain=' + (cdomain || '.hp.com'));
                c.push('path=' + (cpath || '/'));
                document.cookie = c.join(';');
              };
              hpUtil.deleteCookie = function (cname) {
                this.setCookie(cname, '', -1);
              };
              hpUtil.getCookie = function (cname) {
                var name = cname + '=';
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                  var c = ca[i];
                  while (c.charAt(0) == ' ') c = c.substring(1);
                  if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                }
                return '';
              };
              hpUtil.getTimeRemaining = function (endtime) {
                var t = Date.parse(endtime) - Date.parse(new Date());
                var seconds = Math.floor((t / 1000) % 60);
                var minutes = Math.floor((t / 1000 / 60) % 60);
                var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                var days = Math.floor(t / (1000 * 60 * 60 * 24));
                return { total: t, days: days, hours: hours, minutes: minutes, seconds: seconds };
              };
            })((window.hpUtil = window.hpUtil || {}));
          },
          2146211,
          382405
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
                      return window.CI_ShipState || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'CI_ShipState',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7958' }
              );
            }, 7958);
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
                      return window.ci_tid || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_tid',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7956' }
              );
            }, 7956);
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
                    if (typeof window.s !== 'undefined') {
                      var cCode = '';
                      try {
                        cCode =
                          !!window.s.prop7 === true
                            ? window.s.prop7.split(':')[1]
                            : Bootstrapper.tempStorage.prop7.split(':')[1];
                      } catch (e) {
                        console.log(e.message);
                        cCode = '';
                      }
                      switch (cCode) {
                        case 'uk':
                          return '5585';
                          break;
                        case 'de':
                          return '5586';
                          break;
                        case 'fr':
                          return '5587';
                          break;
                        case 'mx':
                          return '5588';
                          break;
                        case 'br':
                          return '5589';
                          break;
                        case 'cn':
                          return '13553';
                          break;
                        case 'es':
                          return '13555';
                          break;
                        case 'ca':
                          return '13557';
                          break;
                        case 'ru':
                          return '13559';
                          break;
                        case 'hk':
                          return '13561';
                          break;
                        case 'ww':
                          return '13563';
                          break;
                        case 'us':
                          return (function doBlueKaiUSLogicModified () {
                            var usMap = {
                              usHomepage: 4334,
                              usGeneral: 4234,
                              usTestSite: 4659,
                              usGeneralHHOStore: 5502,
                              usGeneralSMB: 5505,
                              usSupportHHO: 5510,
                              usSupportENT: 5511,
                              usCart: 4374,
                              usCartHHO: 5503,
                              usCartSMB: 5506,
                              usConversion: 4375,
                              usConversionHHO: 5504,
                              usConversionSMB: 5507,
                            };
                            var returnValue = usMap.usGeneral;
                            if (!!window.s) {
                              var url = window.location.href,
                                events = s.events || Bootstrapper.tempStorage.events || '',
                                products = s.products || Bootstrapper.tempStorage.products || '',
                                segment = s.prop9 || Bootstrapper.tempStorage.prop9 || '';
                              events = events.toLowerCase();
                              products = products.toLowerCase();
                              segment = segment.toLowerCase();
                              var isCart = false;
                              if (url.indexOf('cart') != -1)
                                if (
                                  /cart\/basket\.asp/i.test(url) ||
                                  /dcart\/cart\.asp/i.test(url) ||
                                  /shopping\/cart_detail.do\?[^=]+=checkout/.test(url) ||
                                  /shopping\/cart_detail.do\?pageLink=true&bvLoadCart=1&action=add&disp_msg=0/.test(
                                    url
                                  )
                                )
                                  isCart = true;
                              var w = window,
                                isHHOStore =
                                  /shopping2\.hp\.com/.test(url) || /shopping\.hp\.com/.test(url),
                                isHHO = segment.indexOf('hho') != -1 || isHHOStore,
                                isSMB =
                                  segment.indexOf('smb') != -1 ||
                                  /h71016\.www7\.hp\.com\/d[^\/]+\//i.test(url) ||
                                  /shopping1\.hp\.com/.test(url),
                                isSMBCart = isSMB && isCart,
                                isHHOCart =
                                  isHHO &&
                                  (isCart || w.location.pathname.indexOf('cart_detail.do') != -1),
                                isOtherCart =
                                  isCart ||
                                  events.indexOf('scview') != -1 ||
                                  events.indexOf('sccheckout') != -1,
                                isConsumerSupport =
                                  segment.indexOf('ces') != -1 ||
                                  url.indexOf('h10025.www1.hp.com') != -1 ||
                                  url.indexOf('h30434.www3.hp.com') != -1 ||
                                  url.indexOf('www8.hp.com/us/en/support-drivers.html') != -1,
                                isCommercialSupport =
                                  url.indexOf('h20565.www2.hp.com') != -1 ||
                                  url.indexOf('h30499.www3.hp.com') != -1 ||
                                  url.indexOf('h20000.www2.hp.com') != -1,
                                isPurchase = events.indexOf('purchase') != -1,
                                isHomepage =
                                  /www\.hp\.com\/$/.test(url) ||
                                  /www\.hp\.com\/\?.+$/.test(url) ||
                                  /welcome\.hp\.com\/cs\/us.+home.html.*$/.test(url) ||
                                  /(welcome|www)\.hp\.com\/country\/cs\/.+home.html.*$/.test(
                                    url
                                  ) ||
                                  /(welcome|www)\.hp\.com\/country\/[^\/]+\/[^\/]+(\/cs)?\/(home|welcome).html.*$/.test(
                                    url
                                  ) ||
                                  /www8\.hp\.com\/us\/.+home.html.*$/.test(url);
                              if (url.indexOf('bluekaitest=') !== -1)
                                returnValue = usMap.usTestSite;
                              else if (isHHO || isSMB) {
                                if (isSMB)
                                  if (isSMBCart) returnValue = usMap.usCartSMB;
                                  else if (isCommercialSupport) returnValue = usMap.usSupportENT;
                                  else if (isPurchase) returnValue = usMap.usConversionSMB;
                                  else returnValue = usMap.usGeneralSMB;
                                if (isHHO)
                                  if (isHHOCart) returnValue = usMap.usCartHHO;
                                  else if (isPurchase) returnValue = usMap.usConversionHHO;
                                  else if (isHHOStore) returnValue = usMap.usGeneralHHOStore;
                                  else if (isConsumerSupport) returnValue = usMap.usSupportHHO;
                                  else returnValue = usMap.usGeneralHHO;
                              } else if (isOtherCart) returnValue = usMap.usCart;
                              else if (isPurchase) returnValue = usMap.usConversion;
                              else if (isHomepage) returnValue = usMap.usHomepage;
                              else if (isConsumerSupport) returnValue = usMap.usSupportHHO;
                              else if (isCommercialSupport) returnValue = usMap.usSupportENT;
                              else returnValue = usMap.usGeneral;
                            }
                            return '' + returnValue;
                          })();
                          break;
                        default:
                          return '4376';
                          break;
                      }
                    } else return '4376';
                  },
                  load: 'page',
                  trigger: function () {
                    var returnVal = null;
                    return Bootstrapper.data.delayUntilTrigger(function () {
                      var el = window.Bootstrapper.tempStorage;
                      if (typeof el !== 'undefined')
                        if (typeof el.prop7 !== 'undefined') return true;
                        else if (typeof window.s.prop7 !== 'undefined') return true;
                      return returnVal;
                    });
                  },
                  dataDefName: 'hpcom-siteID',
                  collection: 'hpcom',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7901' }
              );
            }, 7901);
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
                    var host = window.location.hostname,
                      qs = window.location.search,
                      cookie = document.cookie,
                      domains_arr = [
                        'extweb.hp.com',
                        'b2bsiteitg.hp.com',
                        'itg.b2b.hp.com',
                        'eprime20.houston.hp.com',
                        'eprime21.houston.hp.com',
                        'hpswlabs.adapps.hp.com',
                        '54.243.202.120',
                        'h20352.www2.hp.com',
                        '23.23.85.154',
                        'hp-webplatform.com',
                        'hpwsn.com/staging',
                        'digby.com',
                        'itg-live.www8.hp.com',
                        'toran.hpconnected.com',
                        'stg.www8.hp.com',
                        'webauth-dev2.hpconnecteddev.com',
                        'webauth-stage1.hpconnectedstage.com',
                        'webauth-pie1.hpconnectedpie.com',
                        'webauth-test1.hpconnectedtest.com',
                        'webauth-ref2.hpconnectedref.com',
                        'local.hpconnecteddev.com:8080',
                        'ui-cs-dev.ads.corp.hp.com',
                        'itghpn-app.austin.hp.com',
                      ],
                      qs_arr = ['hpanalyticsitg='],
                      cookie_arr = ['hpanalyticsitg=true'],
                      result = false;
                    for (i = 0; i < domains_arr.length; i++)
                      if (host == domains_arr[i]) result = true;
                    for (i = 0; i < qs_arr.length; i++)
                      if (qs.indexOf(qs_arr[i]) !== -1) result = true;
                    for (i = 0; i < cookie_arr.length; i++)
                      if (cookie.indexOf(cookie_arr[i]) !== -1) result = true;
                    if (host.indexOf('eprime') !== -1) {
                      var domains_arr2 = ['atlanta.hp.com', 'houston.hp.com', 'austin.hp.com'];
                      for (i = 0; i < domains_arr2.length; i++)
                        if (host == domains_arr[i]) result = true;
                    }
                    if (/g\d+t\d+(g|a)\.(houston|austin|atlanta)\.hp\.com/.test(host) == true)
                      result = true;
                    return result;
                  },
                  load: 'page',
                  dataDefName: 'hpcom-isitg',
                  collection: 'hpcom',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7081' }
              );
            }, 7081);
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
                      return window.ci_landinghp || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_landinghp',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7955' }
              );
            }, 7955);
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
                      return window.mboxFactoryDefault.hb.Yb;
                    } catch (e) {
                      return 'error';
                    }
                  },
                  transform: function (v) {
                    return v;
                  },
                  load: 'page',
                  dataDefName: 'mbox_pcid',
                  collection: 'b2b',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7076' }
              );
            }, 7076);
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
                    var href = window.location.href,
                      re = /gclid=([^&]+)/,
                      rval = re.exec(href);
                    return !!rval ? rval[1] : null;
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'hpcom GCLID',
                  collection: 'hpcom',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '8650' }
              );
            }, 8650);
          },
          -1,
          -1
        );
        Bootstrapper.bindDOMLoaded(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function () {
              var lcCurrentURL = location.href.toLowerCase();
              var triggerUrl = '/us/en/ads/supplies/overview.html';
              if (lcCurrentURL.indexOf(triggerUrl) !== -1) {
                var random = (Math.random() + '') * 10000000000000;
                new Image().src =
                  'https://ad.doubleclick.net/ddm/activity/src=2305757;type=april0;cat=hp_pr0;ord=1;num=' +
                  random +
                  '?';
                $('.hero-offer a').bind('click', function () {
                  var random2 = (Math.random() + '') * 10000000000000;
                  new Image().src =
                    'https://ad.doubleclick.net/ddm/activity/src=2305757;type=april0;cat=hp_pr000;ord=1;num=' +
                    random2 +
                    '?';
                });
                var random3;
                $('#retailers ul li a').each(function (index) {
                  $(this).bind('click', function () {
                    random3 = (Math.random() + '') * 10000000000000;
                    new Image().src =
                      'https://ad.doubleclick.net/ddm/activity/src=2305757;type=april0;cat=hp_pr001;ord=1;num=' +
                      random3 +
                      '?';
                  });
                });
              }
            })();
          },
          2646818,
          378656
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
                      return window.CI_CartID || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'CI_CartID',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7964' }
              );
            }, 7964);
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
                    var p = window.location.pathname,
                      f = window.location.hostname + p,
                      r1 = /.+\/.+\/home.html$/,
                      r2 = /country\/.+\/.+\/welcome.html$/;
                    return r1.test(p) || r2.test(p) || f === 'www.hp.com/' ? true : false;
                  },
                  load: 'page',
                  dataDefName: 'hpcom-isHomePage',
                  collection: 'hpcom',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7503' }
              );
            }, 7503);
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
                      return window.CI_ItemPrices || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'CI_ItemPrices',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7945' }
              );
            }, 7945);
          },
          -1,
          -1
        );
        Bootstrapper.bindImmediate(
          function () {
            var ddConditions = {
              not: [null],
              caseInsensitive: ['ignore case'],
              compareTo: ['ap'],
              requiredData: ['17765'],
              comparators: ['is'],
            };
            Bootstrapper.data.resolve(ddConditions.requiredData, function () {
              ddConditions.values = Array.prototype.slice.call(arguments, 0);
              var Bootstrapper = window['Bootstrapper'];
              if (Bootstrapper.data.checkConditions(ddConditions))
                Bootstrapper.bindImmediate(
                  function () {
                    var Bootstrapper = window['Bootstrapper'];
                    var ensightenOptions = Bootstrapper.ensightenOptions;
                    (function (tagList) {
                      function insertTag (src, type, cat, ord, num) {
                        function replaceValueOrRandom (template, name, value) {
                          var random = (Math.random() + '') * 10000000000000,
                            tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
                          return template.replace(name, tmp);
                        }
                        var srcTemplate =
                            '//ad.doubleclick.net/ddm/activity/src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?',
                          url = srcTemplate
                            .replace('###SRC###', src)
                            .replace('###TYPE###', type)
                            .replace('###CAT###', cat);
                        url = replaceValueOrRandom(url, '###ORD###', ord || '');
                        url = replaceValueOrRandom(url, '###NUM###', num || '');
                        new Image().src = url;
                      }
                      for (var i = 0; i < tagList.length; i++) {
                        var tag = tagList[i];
                        if (
                          tag.isValid &&
                          (location.href.indexOf(tag.url) !== -1 ||
                            tag.url.indexOf(location.hostname + location.pathname) !== -1)
                        )
                          insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
                      }
                    })([
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/mobilebizsafer-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'bizsa00',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/mobilebizsafer-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'bizsa001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/HPmobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'intro00',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/HPmobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'intro001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/mobiledevicessecure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'mobde00',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/mobiledevicessecure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'mobde001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/printingsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'agepr00',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/printingsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'agepr001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/HPbalanceddeployment-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'balan00',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/HPbalanceddeployment-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'balan001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/streamlineinfrastructure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'strea00',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/streamlineinfrastructure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'strea001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/Bismarck-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'bisma00',
                        ord: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/Bismarck-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'bisma001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/contactus-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'conta00',
                        ord: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/contactus-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'conta003',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/register-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'conta001',
                        ord: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/register-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'conta005',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/bizgrademobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'where00',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/bizgrademobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'where001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/bizsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'workc00',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/bizsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q400',
                        cat: 'workc001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/mobilebizsafer-thankyou.html\n',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'bizsa001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/mobilebizsafer-thankyou.html\n',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'bizsa00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/HPmobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'intro001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/HPmobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'intro00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/mobiledevicessecure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'mobde001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/mobiledevicessecure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'mobde00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/printingsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'agepr001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/printingsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'agepr00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/HPbalanceddeployment-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'balan001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/HPbalanceddeployment-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'balan00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/streamlineinfrastructure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'strea001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/streamlineinfrastructure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'strea00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/Bismarck-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'bisma001',
                        ord: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/Bismarck-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'bisma00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/contactus-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'conta003',
                        ord: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/contactus-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'conta00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/register-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'conta005',
                        ord: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/register-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'conta001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/bizgrademobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'where001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/my/en/campaigns/RAD/bizgrademobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'where00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/bizsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'workc001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/sg/en/campaigns/RAD/bizsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4001',
                        cat: 'workc00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/mobilebizsafer-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'bizsa001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/mobilebizsafer-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'bizsa00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/HPmobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'intro001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/HPmobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'intro00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/mobiledevicessecure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'mobde001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/mobiledevicessecure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'mobde00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/printingsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'agepr001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/printingsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'agepr00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/HPbalanceddeployment-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'balan001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/HPbalanceddeployment-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'balan00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/streamlineinfrastructure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'strea001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/streamlineinfrastructure-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'strea00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/Bismarck-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'bisma001',
                        ord: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/Bismarck-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'bisma00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/contactus-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'conta003',
                        ord: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/contactus-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'conta00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/register-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'conta005',
                        ord: '<random>',
                      },
                      {
                        url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/register-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'conta001',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/bizgrademobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'where001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/bizgrademobility-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'where00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/bizsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'workc001',
                        ord: '<random>',
                      },
                      {
                        url:
                          'https://ssl.www8.hp.com/in/en/campaigns/RAD/bizsolutions-thankyou.html',
                        isValid: true,
                        src: '2314522',
                        type: 'ap_q4000',
                        cat: 'workc00',
                        ord: '1',
                        num: '<random>',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                      {
                        url: '',
                        isValid: false,
                        src: 'undefined',
                        type: 'undefined',
                        cat: 'undefined',
                      },
                    ]);
                  },
                  1202324,
                  364258
                );
            });
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
                      return window.ci_itemid || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_itemid',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7954' }
              );
            }, 7954);
          },
          -1,
          -1
        );
        Bootstrapper.bindDOMParsed(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var hpscDomains = /^(h20566\.www2\.hp\.com|h20565\.www2\.hp\.com|hpsc.*\.(houston|austin|atlanta)\.(hpe|hp)\.com|hpsc.*\.itcs\.(hpe|hp)\.com)$/gi;
            if (hpscDomains.test(window.location.hostname))
              jQuery('#topSearch').on('submit', function () {
                trackMetrics('newLink', { id: 'header:search', type: 'hpsc:search' });
              });
          },
          931648,
          329076
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
                      var data = hpmmd.metatags.business_unit || '';
                      return data;
                    } catch (e) {
                      console.log('Error: ' + e.message);
                      return '';
                    }
                  },
                  load: 'page',
                  trigger: function () {
                    return Bootstrapper.data.triggerPromise(function () {
                      return window.hpmmd ? window.hpmmd.metatags : null;
                    }, null);
                  },
                  dataDefName: 'hpmmd-metatags-business_unit',
                  collection: 'hpmmd object',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '6504' }
              );
            }, 6504);
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
                      return window.ci_aQtys || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_aQtys',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7962' }
              );
            }, 7962);
          },
          -1,
          -1
        );
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function (tagList) {
              function insertTag (src, type, cat, ord, num) {
                function replaceValueOrRandom (template, name, value) {
                  var random = (Math.random() + '') * 10000000000000,
                    tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
                  return template.replace(name, tmp);
                }
                var srcTemplate =
                    '//ad.doubleclick.net/ddm/activity/src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;num=###NUM###?',
                  url = srcTemplate
                    .replace('###SRC###', src)
                    .replace('###TYPE###', type)
                    .replace('###CAT###', cat);
                url = replaceValueOrRandom(url, '###ORD###', ord || '');
                url = replaceValueOrRandom(url, '###NUM###', num || '');
                new Image().src = url;
              }
              var lcCurrentURL = location.href.toLowerCase();
              for (var i = 0; i < tagList.length; i++) {
                var tag = tagList[i];
                if (
                  tag.isValid &&
                  (lcCurrentURL.indexOf(tag.url) !== -1 ||
                    tag.url.indexOf(location.hostname + location.pathname) !== -1)
                )
                  insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
              }
            })([
              {
                url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/defendnetwork.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4001',
                cat: 'defen0',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/defendnetwork.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4001',
                cat: 'defen00',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/defendnetwork-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4001',
                cat: 'defen000',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/defendnetwork-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4001',
                cat: 'defen001',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/printsecurity.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4001',
                cat: 'print0',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/printsecurity.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4001',
                cat: 'print00',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/printsecurity-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4001',
                cat: 'print000',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/my/en/campaigns/RAD/printsecurity-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4001',
                cat: 'print001',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/defendnetwork.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q400',
                cat: 'defen0',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/defendnetwork.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q400',
                cat: 'defen00',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/defendnetwork-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q400',
                cat: 'defen000',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/defendnetwork-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q400',
                cat: 'defen001',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/printsecurity.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q400',
                cat: 'print0',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/printsecurity.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q400',
                cat: 'print00',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/printsecurity-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q400',
                cat: 'print000',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/sg/en/campaigns/RAD/printsecurity-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q400',
                cat: 'print001',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/defendnetwork.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4000',
                cat: 'defen0',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/defendnetwork.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4000',
                cat: 'defen00',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/defendnetwork-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4000',
                cat: 'defen000',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/defendnetwork-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4000',
                cat: 'defen001',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/printsecurity.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4000',
                cat: 'print0',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/printsecurity.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4000',
                cat: 'print00',
                ord: '1',
                num: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/printsecurity-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4000',
                cat: 'print000',
                ord: '<random>',
              },
              {
                url: 'https://ssl.www8.hp.com/in/en/campaigns/RAD/printsecurity-thankyou.html',
                isValid: true,
                src: '2314522',
                type: 'ap_q4000',
                cat: 'print001',
                ord: '1',
                num: '<random>',
              },
            ]);
          },
          1253752,
          368955
        );
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
              Bootstrapper.data.define(
                {
                  extract: function () {
                    var host = window.location.hostname,
                      qs = window.location.search,
                      cookie = document.cookie,
                      domains_arr = [
                        'qrc.itcs.hp.com',
                        'qrc.glb.itcs.hp.com',
                        'qrc4.itcs.hp.com',
                        'wwclass-ext-prod.itcs.hp.com',
                        'printsuppliespro.glb.itcs.hp.com',
                      ],
                      qs_arr = ['hpanalyticspro='],
                      cookie_arr = ['hpanalyticspro=true'],
                      result = false;
                    for (i = 0; i < domains_arr.length; i++)
                      if (host == domains_arr[i]) result = true;
                    for (i = 0; i < qs_arr.length; i++)
                      if (qs.indexOf(qs_arr[i]) !== -1) result = true;
                    for (i = 0; i < cookie_arr.length; i++)
                      if (cookie.indexOf(cookie_arr[i]) !== -1) result = true;
                    return result;
                  },
                  load: 'page',
                  dataDefName: 'hpcom-ispro',
                  collection: 'hpcom',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7078' }
              );
            }, 7078);
          },
          -1,
          -1
        );
        Bootstrapper.bindDependencyDOMLoaded(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            window.VideoAnalytics = { Brightcove: {}, Youtube: {} };
            (function (log) {
              log.info('**Initializing VideoAnalytics');
              var YouTubeEventTemplate = {
                onPlayerReady: function (event) {
                  log.info('**Received Youtube player ready event.');
                  analyticsModule.setDuration(event.target.getDuration());
                  analyticsModule.setTitle(event.target.getVideoData().title);
                  analyticsModule.setPlayerType('Youtube Player v3');
                  window.backupOnPlayerReady(event);
                },
                onPlayerStateChange: function (event) {
                  if (event.data == YT.PlayerState.PLAYING) {
                    analyticsModule.setDuration(event.target.getDuration());
                    analyticsModule.setTitle(event.target.getVideoData().title);
                    analyticsModule.setPlayerType('Youtube Player v3');
                    analyticsModule.eventCallbackHandler('PLAY', event.target.getCurrentTime());
                    VideoAnalytics.Youtube.stopVideo = function () {
                      log.info('Receiving scripted stop event');
                      event.target.pauseVideo();
                    };
                  }
                  if (event.data == YT.PlayerState.ENDED)
                    analyticsModule.eventCallbackHandler(
                      'COMPLETE',
                      event.target.getCurrentTime()
                    );
                  if (event.data == YT.PlayerState.PAUSED)
                    analyticsModule.eventCallbackHandler('STOP', event.target.getCurrentTime());
                  if (event.data == YT.PlayerState.CUED) log.info('Video is queued and ready');
                  if (event.data == -1) log.info('Unstarted');
                  if (event.data == YT.PlayerState.Buffering) log.info('Buffering State');
                  window.backupOnPlayerStateChange(event);
                },
                initializeYoutubeVideos: function (videoArray) {
                  var videos = arguments[0] || [];
                  var initWait = 100;
                  function parseVideos () {
                    var waitFlag = false;
                    _.each(videos, function (video) {
                      if (video.getPlayerState == undefined) {
                        log.info('PlayerState is undefined waiting for ' + initWait);
                        setTimeout(parseVideos, initWait);
                        initWait *= 2;
                      } else if (!video.analyticsInitialized) {
                        initializeVideo(video);
                        video.analyticsInitialized = true;
                      }
                    });
                    initWait *= 2;
                  }
                  if (!!window.jQuery)
                    if (!YT) {
                      log.info('Youtube api not loaded, loading YT.');
                      jQuery.getScript('https://www.youtube.com/iframe_api', function () {
                        parseVideos();
                      });
                    } else if (videos.length > 0) parseVideos();
                  function initializeVideo (video) {
                    log.info('Ready event did not fire, initializing manually.');
                    video.addEventListener(
                      'onStateChange',
                      VideoAnalytics.Youtube.onPlayerStateChange
                    );
                    analyticsModule.setDuration(video.getDuration());
                    log.info('**Video Ready');
                    analyticsModule.setTitle(video.getVideoData().title);
                    analyticsModule.setPlayerType('Youtube Player v3');
                  }
                  window.backupInitializeYoutubeVideos(videoArray);
                },
              };
              var BrightcoveEventTemplates = {
                onTemplateLoaded: function (id) {
                  log.info('Detected Brightcove onTemplateLoaded Condition');
                  var isLegacyPlayer = !!window.bcPlayer;
                  if (isLegacyPlayer) {
                    log.info('**Received Brightcove Legacy loaded event.');
                    var player, videoPlayer, bcExp;
                    player = bcPlayer.getExperience(id);
                    player.gotId = id;
                    videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
                    videoPlayer.initialized = false;
                    bcExp = brightcove.getExperience(id);
                    videoPlayer.addEventListener(BCMediaEvent.PLAY, function () {
                      if (!videoPlayer.initialized) {
                        analyticsModule.setTitle(videoPlayer.getCurrentVideo().displayName);
                        analyticsModule.setDuration(videoPlayer.getVideoDuration());
                        log.info(videoPlayer.getCurrentVideo().displayName);
                        videoPlayer.initialized = true;
                        VideoAnalytics.Brightcove.stopVideo = function () {
                          log.info('Receiving scripted stop event');
                          videoPlayer.stop();
                        };
                      }
                      analyticsModule.setPlayerType('Brightcove Legacy Player Autotrack v1.0');
                      analyticsModule.eventCallbackHandler('PLAY', videoPlayer.getVideoPosition());
                    });
                    videoPlayer.addEventListener(BCMediaEvent.COMPLETE, function () {
                      analyticsModule.eventCallbackHandler(
                        'COMPLETE',
                        videoPlayer.getVideoPosition()
                      );
                    });
                    videoPlayer.addEventListener(BCMediaEvent.STOP, function () {
                      analyticsModule.eventCallbackHandler('STOP', videoPlayer.getVideoPosition());
                    });
                    videoPlayer.addEventListener(BCMediaEvent.PAUSE, function () {
                      analyticsModule.eventCallbackHandler('STOP', videoPlayer.getVideoPosition());
                    });
                  } else log.info('**Received Brightcove Smartplayer loaded event.');
                  window.backupOnTemplateLoaded(id);
                },
                onTemplateReady: function (event) {
                  log.info('Detected Brightcove onTemplateReady Condition');
                  var isLegacyPlayer = !!window.bcPlayer;
                  if (isLegacyPlayer) log.info('**Received Brightcove Legacy ready event.');
                  else {
                    log.info('**Received Brightcove Smartplayer ready event.');
                    var player = brightcove.api.getExperience(event.target.experience.id),
                      APIModules = brightcove.api.modules.APIModules,
                      videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
                    videoPlayer.initialized = false;
                    videoPlayer.addEventListener(
                      brightcove.api.events.MediaEvent.PLAY,
                      function () {
                        if (!videoPlayer.initialized) {
                          videoPlayer.getCurrentVideo(function (result) {
                            analyticsModule.setTitle(result.displayName);
                          });
                          videoPlayer.getVideoDuration(false, function (result) {
                            analyticsModule.setDuration(result);
                          });
                          analyticsModule.setPlayerType('Brightcove Smart Player Autotrack v1.0');
                          videoPlayer.initialized = true;
                        }
                        analyticsModule.initDurationPromise();
                        analyticsModule.initPositionPromise();
                        videoPlayer.getVideoDuration(false, function (result) {
                          analyticsModule.lastDuration = result;
                          analyticsModule.resolveDurationPromise();
                        });
                        videoPlayer.getVideoPosition(function (result) {
                          analyticsModule.lastPosition = result;
                          analyticsModule.resolvePositionPromise();
                        });
                        analyticsModule.promiseWaitFunction('PLAY');
                        VideoAnalytics.Brightcove.stopVideo = function () {
                          log.info('Receiving scripted stop event');
                          videoPlayer.pause();
                          analyticsModule.promiseWaitFunction('STOP');
                        };
                      }
                    );
                    videoPlayer.addEventListener(
                      brightcove.api.events.MediaEvent.COMPLETE,
                      function () {
                        analyticsModule.promiseWaitFunction('COMPLETE');
                      }
                    );
                    videoPlayer.addEventListener(
                      brightcove.api.events.MediaEvent.STOP,
                      function () {
                        analyticsModule.initPositionPromise();
                        videoPlayer.getVideoPosition(function (result) {
                          analyticsModule.lastPosition = result;
                          analyticsModule.resolvePositionPromise();
                        });
                        analyticsModule.promiseWaitFunction('STOP');
                      }
                    );
                    videoPlayer.addEventListener(
                      brightcove.api.events.MediaEvent.PROGRESS,
                      function () {
                        analyticsModule.initPositionPromise();
                        videoPlayer.getVideoPosition(function (result) {
                          analyticsModule.lastPosition = result;
                          analyticsModule.resolvePositionPromise();
                        });
                      }
                    );
                    videoPlayer.addEventListener(
                      brightcove.api.events.MediaEvent.SEEK_NOTIFY,
                      function () {
                        analyticsModule.initPositionPromise();
                        videoPlayer.getVideoPosition(function (result) {
                          analyticsModule.lastPosition = result;
                          analyticsModule.resolvePositionPromise();
                        });
                      }
                    );
                    videoPlayer.addEventListener(
                      brightcove.api.events.MediaEvent.ERROR,
                      function () {
                        log.info('Caught brightcove error event.');
                      }
                    );
                  }
                  window.backupOnTemplateReady(event);
                },
              };
              (function polyFillTridionEvents () {
                var VideoAnalytics = window.VideoAnalytics || {},
                  Brightcove = VideoAnalytics.Brightcove || {},
                  Youtube = VideoAnalytics.Youtube || {},
                  InitializeYoutubeVideo = Youtube.initializeYoutubeVideos,
                  OnTemplateLoaded = Brightcove.onTemplateLoaded,
                  OnTemplateReady = Brightcove.onTemplateReady,
                  OnPlayerReady = Youtube.onPlayerReady,
                  OnPlayerStateChange = Youtube.onPlayerStateChange,
                  returnValue = false;
                if (!!Brightcove) {
                  window.backupOnTemplateLoaded = OnTemplateLoaded || function () {};
                  Brightcove.onTemplateLoaded = BrightcoveEventTemplates.onTemplateLoaded;
                  window.backupOnTemplateReady = OnTemplateReady || function () {};
                  Brightcove.onTemplateReady = BrightcoveEventTemplates.onTemplateReady;
                  Brightcove.stopVideo = function () {};
                  returnValue = true;
                }
                if (!!Youtube) {
                  window.backupOnPlayerReady = OnPlayerReady || function () {};
                  Youtube.onPlayerReady = YouTubeEventTemplate.onPlayerReady;
                  window.backupOnPlayerStateChange = OnPlayerStateChange || function () {};
                  Youtube.onPlayerStateChange = YouTubeEventTemplate.onPlayerStateChange;
                  window.backupInitializeYoutubeVideos = InitializeYoutubeVideo || function () {};
                  Youtube.initializeYoutubeVideos = YouTubeEventTemplate.initializeYoutubeVideos;
                  Youtube.stopVideo = function () {};
                  returnValue = true;
                }
                return returnValue;
              })();
            })(window.log || window.hpmmd.log);
            var analyticsModule = (function (log) {
              var PERCENT = 0.25,
                duration = 0,
                quarter = 0,
                half = 0,
                segNumber,
                threeQuarters = 0,
                quarterFlag = false,
                halfFlag = false,
                threeQuarterFlag = false,
                pausedFlag = false,
                pausedTime = 0,
                quarterTrack,
                title = '',
                playerName = 'DEFAULT PLAYER',
                lastPositionPromise,
                lastDurationPromise;
              initDurationPromise();
              lastDurationPromise.resolve();
              initPositionPromise();
              lastPositionPromise.resolve();
              function eventCallbackHandler (eventName, position) {
                switch (eventName) {
                  case 'PLAY':
                    if (position == 0) {
                      initializeVideoTracking(position);
                      log.info('Starting Video. Duration: ' + duration);
                      trackNextQuarter(position);
                      segNumber = omnitureTrackingModule.MILESTONES['START'];
                      omnitureTrackingModule.play(
                        title,
                        position,
                        segNumber,
                        omnitureTrackingModule.MILESTONE_NAMES[segNumber]
                      );
                    }
                    if (!!pausedFlag) {
                      log.info('Pause detected, checking for scrub');
                      if (
                        position == pausedTime ||
                        (position - pausedTime < 1 && position - pausedTime > 0)
                      ) {
                        omnitureTrackingModule.play(title, position);
                        log.info(
                          'PAUSED at ' +
                            pausedTime +
                            ' resumed at ' +
                            position +
                            '. Video resumed, no scrub'
                        );
                        setSeekFlags(position);
                        trackNextQuarter(position);
                        pausedFlag = false;
                        pausedTime = 0;
                      } else {
                        log.info(
                          'Scrub detected - Time difference of: ' +
                            (position -
                              pausedTime +
                              '. Scrubbed from ' +
                              pausedTime +
                              '. Scrubbed to ' +
                              position)
                        );
                        setSeekFlags(position);
                        trackNextQuarter(position);
                        pausedFlag = false;
                        pausedTime = 0;
                      }
                    } else log.info('Playing from position: ' + position);
                    break;
                  case 'STOP':
                    log.info('Stopped - position: ' + position);
                    omnitureTrackingModule.stop(title, position);
                    clearTimeout(quarterTrack);
                    pausedFlag = true;
                    pausedTime = position;
                    break;
                  case 'COMPLETE':
                    log.info('Done');
                    pausedFlag = false;
                    omnitureTrackingModule.end(title, duration);
                    break;
                  case 'SEEK':
                    break;
                  case 'PROGRESS':
                    if (position >= quarter && position < half && !quarterFlag) {
                      log.info('--One quarter mark');
                      segNumber = omnitureTrackingModule.MILESTONES['FIRST_QUARTER_SEGMENT'];
                      omnitureTrackingModule.play(
                        title,
                        position,
                        segNumber,
                        omnitureTrackingModule.MILESTONE_NAMES[segNumber]
                      );
                      setSeekFlags(position);
                      clearTimeout(quarterTrack);
                      trackNextQuarter(position);
                    } else if (position >= half && position < threeQuarters && !halfFlag) {
                      log.info('--Half way mark');
                      segNumber = omnitureTrackingModule.MILESTONES['HALF_SEGMENT'];
                      omnitureTrackingModule.play(
                        title,
                        position,
                        segNumber,
                        omnitureTrackingModule.MILESTONE_NAMES[segNumber]
                      );
                      setSeekFlags(position);
                      clearTimeout(quarterTrack);
                      trackNextQuarter(position);
                    } else if (position >= threeQuarters && !threeQuarterFlag) {
                      log.info('--Three quarters mark.');
                      segNumber = omnitureTrackingModule.MILESTONES['THREE_QUARTER_SEGMENT'];
                      omnitureTrackingModule.play(
                        title,
                        position,
                        segNumber,
                        omnitureTrackingModule.MILESTONE_NAMES[segNumber]
                      );
                      clearTimeout(quarterTrack);
                      setSeekFlags(position);
                    }
                    break;
                }
              }
              function initializeVideoTracking (position) {
                try {
                  log.info('**New video.  Initializing video: ' + title);
                  quarterTrack = 0;
                  quarter = duration * PERCENT;
                  half = quarter * 2;
                  threeQuarters = quarter * 3;
                  pausedFlag = false;
                  pausedTime = 0;
                  omnitureTrackingModule.init();
                  omnitureTrackingModule.start(title, duration, playerName);
                  segNumber = 0;
                  initializeSeekFlags();
                } catch (e) {
                  log.info('Error initializing analytics: ' + error);
                }
              }
              function initializeSeekFlags () {
                quarterFlag = false;
                halfFlag = false;
                threeQuarterFlag = false;
              }
              function setSeekFlags (position) {
                if (position >= quarter && !quarterFlag) quarterFlag = true;
                if (position >= half && !halfFlag) halfFlag = true;
                if (position >= threeQuarters && !threeQuarterFlag) threeQuarterFlag = true;
              }
              function promiseWaitFunction (eventName) {
                lastPositionPromise.promise.then(function () {
                  lastDurationPromise.promise.then(function () {
                    eventCallbackHandler(
                      eventName,
                      analyticsModule.lastPosition,
                      analyticsModule.lastDuration
                    );
                  });
                });
              }
              function initDurationPromise () {
                lastDurationPromise = Q.defer();
              }
              function initPositionPromise () {
                lastPositionPromise = Q.defer();
              }
              function resolveDurationPromise () {
                lastDurationPromise.resolve();
              }
              function resolvePositionPromise () {
                lastPositionPromise.resolve();
              }
              function setDuration (videoDuration) {
                duration = videoDuration;
              }
              function setTitle (videoTitle) {
                title = videoTitle;
              }
              function setPlayerType (videoPlayerName) {
                playerName = videoPlayerName;
              }
              function trackNextQuarter (startPosition) {
                var SECOND = 1000,
                  nextQuarter;
                if (!quarterFlag) nextQuarter = quarter;
                else if (!halfFlag && !!quarterFlag) nextQuarter = half;
                else if (!threeQuarterFlag && !!halfFlag) nextQuarter = threeQuarters;
                else if (!!threeQuarterFlag) nextQuarter = duration;
                log.info('Tracking new quarter - from: ' + startPosition + ' to: ' + nextQuarter);
                quarterTrack = setTimeout(function () {
                  analyticsModule.eventCallbackHandler('PROGRESS', nextQuarter, duration);
                }, (nextQuarter - startPosition) * SECOND);
              }
              var omnitureTrackingModule = (function (log) {
                var MILESTONE_NAMES = [
                  'Ignore',
                  'Video Start',
                  '25% Viewed',
                  '50% Viewed',
                  '75% Viewed',
                  'Video Complete',
                ];
                var MILESTONES = {
                  START: 1,
                  FIRST_QUARTER_SEGMENT: 2,
                  HALF_SEGMENT: 3,
                  THREE_QUARTER_SEGMENT: 4,
                  COMPLETE: 5,
                };
                function scrapeMetadata (country, language, websection) {
                  var metatags = !!window.hpmmd ? window.hpmmd.metatags : {},
                    pathnameParserTridion =
                      location.hostname.indexOf('www8.hp.com') !== -1
                        ? /^\/([^\/]+)\/([^\/]+)/i.exec(location.pathname)
                        : [null, null, null];
                  this.metaCountry =
                    country || metatags.target_country || pathnameParserTridion[1] || 'us';
                  this.metaLanguage =
                    language || metatags.language || pathnameParserTridion[2] || 'en';
                  this.metaWebsection = websection || metatags.web_section_id || 'r163';
                }
                function init () {
                  log.info('Starting video init: Omniture');
                  this.s = window.s;
                  s.loadModule('Media');
                  s.Media.trackUsingContextData = true;
                  s.Media.autoTrack = false;
                  s.Media.trackMilestones = '25,50,75';
                  s.Media.segmentByMilestones = true;
                  s.Media.completeByCloseOffset = true;
                  s.Media.completeCloseOffsetThreshold = 0;
                  s.Media.trackVars = 'None';
                  s.Media.trackEvents = 'None';
                  s.Media.contextDataMapping = {
                    'a.media.name': 'eVar70',
                    'a.media.segment': 'eVar71',
                    'a.contentType': 'eVar72',
                    'a.media.segmentView': 'event97',
                    'a.media.complete': 'event98',
                    'a.media.timePlayed': 'event99',
                    'a.media.view': 'event100',
                    'a.media.milestones': 'none',
                  };
                  log.info('Starting video init: scrape data');
                  scrapeMetadata(s.prop7, s.prop8, s.prop12);
                  log.info('Finished scraping video data: ' + 'metaCountry=' + metaCountry);
                }
                function onStart (videoName, videoTotalLength, videoPlayerType) {
                  this.videoTotalLength = videoTotalLength;
                  this.videoPlayerType = videoPlayerType;
                  var playerAbreviation = getPlayerAbbreviation(videoPlayerType);
                  log.info(
                    'omnitureTrackingModule:On Start: playerAbreviation = ' + playerAbreviation
                  );
                  var tmpVideoName =
                    playerAbreviation +
                    ':' +
                    metaWebsection +
                    ':' +
                    metaCountry +
                    ':' +
                    metaLanguage +
                    ':' +
                    videoName;
                  this.fullVideoName = tmpVideoName
                    .toLowerCase()
                    .replace(/cs/g, '')
                    .replace(/:+/g, ':');
                  log.info(
                    'omnitureTrackingModule:On Start: this.videoName = ' + this.fullVideoName
                  );
                  s.Media.open(this.fullVideoName, videoTotalLength, videoPlayerType);
                  s.Media.play(this.fullVideoName, 0);
                }
                function getPlayerAbbreviation (videoPlayerType) {
                  switch (videoPlayerType) {
                    case 'Youtube Player v3':
                      return 'ytp';
                    case 'Brightcove Smart Player Autotrack v1.0':
                      return 'bsp';
                    case 'Brightcove Legacy Player Autotrack v1.0':
                      return 'blp';
                    default:
                      return 'uip';
                  }
                }
                function onPlay (videoName, videoPosition, segmentNumber, segment) {
                  log.info(
                    'omnitureTrackingModule:On Play: this.videoName = ' + this.fullVideoName
                  );
                  log.info('omnitureTrackingModule:On Play: segmentName = ' + segment);
                  s.Media.play(this.fullVideoName, videoPosition);
                }
                function onStop (videoName, videoPosition) {
                  log.info(
                    'omnitureTrackingModule:On Stop: this.videoName = ' + this.fullVideoName
                  );
                  s.Media.stop(this.fullVideoName, videoPosition);
                }
                function onEnd (videoName, videoTotalLength) {
                  log.info(
                    'omnitureTrackingModule:On End: this.videoName = ' + this.fullVideoName
                  );
                  s.Media.stop(this.fullVideoName, videoTotalLength);
                  s.Media.close(this.fullVideoName);
                }
                return {
                  init: init,
                  start: onStart,
                  play: onPlay,
                  stop: onStop,
                  end: onEnd,
                  MILESTONES: MILESTONES,
                  MILESTONE_NAMES: MILESTONE_NAMES,
                };
              })(log);
              return {
                eventCallbackHandler: eventCallbackHandler,
                promiseWaitFunction: promiseWaitFunction,
                initPositionPromise: initPositionPromise,
                initDurationPromise: initDurationPromise,
                resolveDurationPromise: resolveDurationPromise,
                resolvePositionPromise: resolvePositionPromise,
                setDuration: setDuration,
                setTitle: setTitle,
                setPlayerType: setPlayerType,
              };
            })(window.log || window.hpmmd.log);
          },
          1838224,
          [1186846],
          344939,
          [288825]
        );
        Bootstrapper.bindDOMParsed(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            (function (tagList) {
              function insertTag (src, type, cat, ord, num) {
                function replaceValueOrRandom (template, name, value) {
                  var random = (Math.random() + '') * 10000000000000,
                    tmp = value.toLowerCase().indexOf('<random>') !== -1 ? random : value;
                  return template.replace(name, tmp);
                }
                var srcTemplate =
                    'https://2326416.fls.doubleclick.net/activityi;src=###SRC###;type=###TYPE###;cat=###CAT###;ord=###ORD###;?',
                  url = srcTemplate
                    .replace('###SRC###', src)
                    .replace('###TYPE###', type)
                    .replace('###CAT###', cat);
                url = replaceValueOrRandom(url, '###ORD###', ord || '');
                url = replaceValueOrRandom(url, '###NUM###', num || '');
                var iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = url;
                document.body.appendChild(iframe);
              }
              var lcCurrentURL = location.href.toLowerCase();
              for (var i = 0; i < tagList.length; i++) {
                var tag = tagList[i];
                if (
                  tag.isValid &&
                  (lcCurrentURL.indexOf(tag.url) !== -1 ||
                    tag.url.indexOf(location.hostname + location.pathname) !== -1)
                )
                  insertTag(tag.src, tag.type, tag.cat, tag.ord, tag.num);
              }
            })([
              {
                url: 'http://www8.hp.com/be/fr/premium/laptops/index.html',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'be_ps000',
                ord: '<random>',
              },
              {
                url: 'http://www8.hp.com/be/nl/premium/laptops/index.html',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'be_ps0',
                ord: '<random>',
              },
              {
                url: 'http://www8.hp.com/be/fr/premium/laptops/index.html',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'be_ps001',
                ord: '<random>',
              },
              {
                url: 'http://www8.hp.com/be/nl/premium/laptops/index.html',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'be_ps00',
                ord: '<random>',
              },
              {
                url: 'http://www.hp.com/nl/premiumlaptop',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'nl_ps000',
                ord: '<random>',
              },
              {
                url: 'http://www.hp.com/nl/premiumlaptop',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'nl_ps002',
                ord: '<random>',
              },
              {
                url: 'http://www.hp.com/nl/premiumlaptop',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'nl_ps001',
                ord: '<random>',
              },
              {
                url: 'http://www.hp.com/nl/premiumlaptop',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'nl_ps003',
                ord: '<random>',
              },
              {
                url: 'http://www8.hp.com/no/no/premium/laptops/index.html',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'no_ps0',
                ord: '<random>',
              },
              {
                url: 'http://www8.hp.com/no/no/premium/laptops/index.html',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'no_ps00',
                ord: '<random>',
              },
              {
                url: 'http://www.hp.com/se/premiumlaptop',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'se_ps0',
                ord: '<random>',
              },
              {
                url: 'http://www.hp.com/se/premiumlaptop',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'se_ps000',
                ord: '<random>',
              },
              {
                url: 'http://www.hp.com/se/premiumlaptop',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'se_ps002',
                ord: '<random>',
              },
              {
                url: 'http://www.hp.com/se/premiumlaptop',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'se_ps00',
                ord: '<random>',
              },
              {
                url: 'http://www.hp.com/se/premiumlaptop',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'se_ps001',
                ord: '<random>',
              },
              {
                url: 'http://www.hp.com/se/premiumlaptop',
                isValid: true,
                src: '2326416',
                type: 'cpspr0',
                cat: 'se_ps003',
                ord: '<random>',
              },
            ]);
          },
          1284470,
          374682
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
                      return window.canparamNames || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_canparamNames',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7951' }
              );
            }, 7951);
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
                      return Bootstrapper.data.extract('web_section_id', 'meta');
                    } catch (e) {
                      return 'error';
                    }
                  },
                  transform: function (v) {
                    return v;
                  },
                  load: 'page',
                  dataDefName: 'web_section_id',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '12363' }
              );
            }, 12363);
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
                      return Bootstrapper.data.extract('description', 'meta');
                    } catch (e) {
                      return 'error';
                    }
                  },
                  transform: function (v) {
                    return v;
                  },
                  load: 'page',
                  dataDefName: 'description',
                  collection: 'Ensighten-Page-DataLayer',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '9602' }
              );
            }, 9602);
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
                    var CryptoJS = (function (h, s) {
                      var f = {},
                        t = (f.lib = {}),
                        g = function () {},
                        j = (t.Base = {
                          extend: function (a) {
                            g.prototype = this;
                            var c = new g();
                            a && c.mixIn(a);
                            c.hasOwnProperty('init') ||
                              (c.init = function () {
                                c.$super.init.apply(this, arguments);
                              });
                            c.init.prototype = c;
                            c.$super = this;
                            return c;
                          },
                          create: function () {
                            var a = this.extend();
                            a.init.apply(a, arguments);
                            return a;
                          },
                          init: function () {},
                          mixIn: function (a) {
                            for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                            a.hasOwnProperty('toString') && (this.toString = a.toString);
                          },
                          clone: function () {
                            return this.init.prototype.extend(this);
                          },
                        }),
                        q = (t.WordArray = j.extend({
                          init: function (a, c) {
                            a = this.words = a || [];
                            this.sigBytes = c != s ? c : 4 * a.length;
                          },
                          toString: function (a) {
                            return (a || u).stringify(this);
                          },
                          concat: function (a) {
                            var c = this.words,
                              d = a.words,
                              b = this.sigBytes;
                            a = a.sigBytes;
                            this.clamp();
                            if (b % 4)
                              for (var e = 0; e < a; e++)
                                c[(b + e) >>> 2] |=
                                  ((d[e >>> 2] >>> (24 - 8 * (e % 4))) & 255) <<
                                  (24 - 8 * ((b + e) % 4));
                            else if (65535 < d.length)
                              for (e = 0; e < a; e += 4) c[(b + e) >>> 2] = d[e >>> 2];
                            else c.push.apply(c, d);
                            this.sigBytes += a;
                            return this;
                          },
                          clamp: function () {
                            var a = this.words,
                              c = this.sigBytes;
                            a[c >>> 2] &= 4294967295 << (32 - 8 * (c % 4));
                            a.length = h.ceil(c / 4);
                          },
                          clone: function () {
                            var a = j.clone.call(this);
                            a.words = this.words.slice(0);
                            return a;
                          },
                          random: function (a) {
                            for (var c = [], d = 0; d < a; d += 4)
                              c.push((4294967296 * h.random()) | 0);
                            return new q.init(c, a);
                          },
                        })),
                        v = (f.enc = {}),
                        u = (v.Hex = {
                          stringify: function (a) {
                            var c = a.words;
                            a = a.sigBytes;
                            for (var d = [], b = 0; b < a; b++) {
                              var e = (c[b >>> 2] >>> (24 - 8 * (b % 4))) & 255;
                              d.push((e >>> 4).toString(16));
                              d.push((e & 15).toString(16));
                            }
                            return d.join('');
                          },
                          parse: function (a) {
                            for (var c = a.length, d = [], b = 0; b < c; b += 2)
                              d[b >>> 3] |= parseInt(a.substr(b, 2), 16) << (24 - 4 * (b % 8));
                            return new q.init(d, c / 2);
                          },
                        }),
                        k = (v.Latin1 = {
                          stringify: function (a) {
                            var c = a.words;
                            a = a.sigBytes;
                            for (var d = [], b = 0; b < a; b++)
                              d.push(
                                String.fromCharCode((c[b >>> 2] >>> (24 - 8 * (b % 4))) & 255)
                              );
                            return d.join('');
                          },
                          parse: function (a) {
                            for (var c = a.length, d = [], b = 0; b < c; b++)
                              d[b >>> 2] |= (a.charCodeAt(b) & 255) << (24 - 8 * (b % 4));
                            return new q.init(d, c);
                          },
                        }),
                        l = (v.Utf8 = {
                          stringify: function (a) {
                            try {
                              return decodeURIComponent(escape(k.stringify(a)));
                            } catch (c) {
                              throw Error('Malformed UTF-8 data');
                            }
                          },
                          parse: function (a) {
                            return k.parse(unescape(encodeURIComponent(a)));
                          },
                        }),
                        x = (t.BufferedBlockAlgorithm = j.extend({
                          reset: function () {
                            this._data = new q.init();
                            this._nDataBytes = 0;
                          },
                          _append: function (a) {
                            'string' == typeof a && (a = l.parse(a));
                            this._data.concat(a);
                            this._nDataBytes += a.sigBytes;
                          },
                          _process: function (a) {
                            var c = this._data,
                              d = c.words,
                              b = c.sigBytes,
                              e = this.blockSize,
                              f = b / (4 * e),
                              f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
                            a = f * e;
                            b = h.min(4 * a, b);
                            if (a) {
                              for (var m = 0; m < a; m += e) this._doProcessBlock(d, m);
                              m = d.splice(0, a);
                              c.sigBytes -= b;
                            }
                            return new q.init(m, b);
                          },
                          clone: function () {
                            var a = j.clone.call(this);
                            a._data = this._data.clone();
                            return a;
                          },
                          _minBufferSize: 0,
                        }));
                      t.Hasher = x.extend({
                        cfg: j.extend(),
                        init: function (a) {
                          this.cfg = this.cfg.extend(a);
                          this.reset();
                        },
                        reset: function () {
                          x.reset.call(this);
                          this._doReset();
                        },
                        update: function (a) {
                          this._append(a);
                          this._process();
                          return this;
                        },
                        finalize: function (a) {
                          a && this._append(a);
                          return this._doFinalize();
                        },
                        blockSize: 16,
                        _createHelper: function (a) {
                          return function (c, d) {
                            return new a.init(d).finalize(c);
                          };
                        },
                        _createHmacHelper: function (a) {
                          return function (c, d) {
                            return new w.HMAC.init(a, d).finalize(c);
                          };
                        },
                      });
                      var w = (f.algo = {});
                      return f;
                    })(Math);
                    (function (h) {
                      for (
                        var s = CryptoJS,
                          f = s.lib,
                          t = f.WordArray,
                          g = f.Hasher,
                          f = s.algo,
                          j = [],
                          q = [],
                          v = function (a) {
                            return (4294967296 * (a - (a | 0))) | 0;
                          },
                          u = 2,
                          k = 0;
                        64 > k;

                      ) {
                        var l;
                        a: {
                          l = u;
                          for (var x = h.sqrt(l), w = 2; w <= x; w++)
                            if (!(l % w)) {
                              l = !1;
                              break a;
                            }
                          l = !0;
                        }
                        l &&
                          (8 > k && (j[k] = v(h.pow(u, 0.5))), (q[k] = v(h.pow(u, 1 / 3))), k++);
                        u++;
                      }
                      var a = [],
                        f = (f.SHA256 = g.extend({
                          _doReset: function () {
                            this._hash = new t.init(j.slice(0));
                          },
                          _doProcessBlock: function (c, d) {
                            for (
                              var b = this._hash.words,
                                e = b[0],
                                f = b[1],
                                m = b[2],
                                h = b[3],
                                p = b[4],
                                j = b[5],
                                k = b[6],
                                l = b[7],
                                n = 0;
                              64 > n;
                              n++
                            ) {
                              if (16 > n) a[n] = c[d + n] | 0;
                              else {
                                var r = a[n - 15],
                                  g = a[n - 2];
                                a[n] =
                                  (((r << 25) | (r >>> 7)) ^
                                    ((r << 14) | (r >>> 18)) ^
                                    (r >>> 3)) +
                                  a[n - 7] +
                                  (((g << 15) | (g >>> 17)) ^
                                    ((g << 13) | (g >>> 19)) ^
                                    (g >>> 10)) +
                                  a[n - 16];
                              }
                              r =
                                l +
                                (((p << 26) | (p >>> 6)) ^
                                  ((p << 21) | (p >>> 11)) ^
                                  ((p << 7) | (p >>> 25))) +
                                ((p & j) ^ (~p & k)) +
                                q[n] +
                                a[n];
                              g =
                                (((e << 30) | (e >>> 2)) ^
                                  ((e << 19) | (e >>> 13)) ^
                                  ((e << 10) | (e >>> 22))) +
                                ((e & f) ^ (e & m) ^ (f & m));
                              l = k;
                              k = j;
                              j = p;
                              p = (h + r) | 0;
                              h = m;
                              m = f;
                              f = e;
                              e = (r + g) | 0;
                            }
                            b[0] = (b[0] + e) | 0;
                            b[1] = (b[1] + f) | 0;
                            b[2] = (b[2] + m) | 0;
                            b[3] = (b[3] + h) | 0;
                            b[4] = (b[4] + p) | 0;
                            b[5] = (b[5] + j) | 0;
                            b[6] = (b[6] + k) | 0;
                            b[7] = (b[7] + l) | 0;
                          },
                          _doFinalize: function () {
                            var a = this._data,
                              d = a.words,
                              b = 8 * this._nDataBytes,
                              e = 8 * a.sigBytes;
                            d[e >>> 5] |= 128 << (24 - (e % 32));
                            d[(((e + 64) >>> 9) << 4) + 14] = h.floor(b / 4294967296);
                            d[(((e + 64) >>> 9) << 4) + 15] = b;
                            a.sigBytes = 4 * d.length;
                            this._process();
                            return this._hash;
                          },
                          clone: function () {
                            var a = g.clone.call(this);
                            a._hash = this._hash.clone();
                            return a;
                          },
                        }));
                      s.SHA256 = g._createHelper(f);
                      s.HmacSHA256 = g._createHmacHelper(f);
                    })(Math);
                    var elementsToEncrypt = document.cookie,
                      hppPattern = /hpclidnumber=([^|]+)/,
                      hpclidnumber = '';
                    rValue = '';
                    try {
                      if (elementsToEncrypt && hppPattern.test(elementsToEncrypt)) {
                        hpclidnumber = hppPattern.exec(elementsToEncrypt)[1];
                        rValue = 'hpp:' + CryptoJS.SHA256(hpclidnumber.toLowerCase());
                      }
                    } catch (e) {}
                    return rValue;
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'Global - HPP Id Encrypted',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '11806' }
              );
            }, 11806);
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
                      return window.ci_category || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'ci_category',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7949' }
              );
            }, 7949);
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
                      return Bootstrapper.data.extract('hp_design_version', 'meta');
                    } catch (e) {
                      return 'error';
                    }
                  },
                  transform: function (v) {
                    return v;
                  },
                  load: 'page',
                  dataDefName: 'hp_design_version',
                  collection: 'GLOBAL EDL',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '12361' }
              );
            }, 12361);
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
                    return window.location.pathname;
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'Test Pathname',
                  collection: 'hpcom',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7269' }
              );
            }, 7269);
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
                      return window.CI_ItemIDs || '';
                    } catch (e) {
                      console.log('EDL Error: ' + e.message);
                    }
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'CI_ItemIDs',
                  collection: 'ci_ vars',
                  source: 'Manage',
                  priv: 'false',
                },
                { id: '7943' }
              );
            }, 7943);
          },
          -1,
          -1
        );
        Bootstrapper.getServerComponent(
          Bootstrapper.getExtraParams ? Bootstrapper.getExtraParams() : undefined
        );
      }
    })();
  })();
}
