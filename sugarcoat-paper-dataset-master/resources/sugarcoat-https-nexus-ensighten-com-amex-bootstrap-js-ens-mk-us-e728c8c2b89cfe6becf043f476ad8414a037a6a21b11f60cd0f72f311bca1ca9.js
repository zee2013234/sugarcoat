{
  const $___stub_47c01efa79e9f191 = {};
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
  })($___stub_47c01efa79e9f191);
  const $___stub_b317e19f866a2da7 = {};
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
  })($___stub_b317e19f866a2da7);
  (function () {
    (function ensightenInit () {
      var ensightenOptions = {
        client: 'amex',
        clientId: 218,
        publishPath: 'prod',
        isPublic: 1,
        serverComponentLocation: 'nexus.ensighten.com/amex/prod/serverComponent.php',
        staticJavascriptPath: 'nexus.ensighten.com/amex/prod/code/',
        ns: 'Bootstrapper',
        nexus: 'nexus.ensighten.com',
        scUseCacheBuster: 'false',
        enableTagAuditBeacon: 'true',
        enablePagePerfBeacon: 'true',
        registryNs: 'ensBootstraps',
        generatedOn: 'Fri Nov 27 12:52:32 GMT 2020',
        beaconSamplingSeedValue: 11,
      };
      if (!window[ensightenOptions.ns]) {
        window[ensightenOptions.registryNs] || (window[ensightenOptions.registryNs] = {});
        window[ensightenOptions.registryNs][ensightenOptions.ns] = window[
          ensightenOptions.ns
        ] = (function (f) {
          const $___old_ec8c8d911784a2ec = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_ec8c8d911784a2ec)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_47c01efa79e9f191.userAgent
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
            if ($___old_ec8c8d911784a2ec)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_ec8c8d911784a2ec
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
              const $___old_dcbaa99e41f27d59 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              );
              try {
                if ($___old_dcbaa99e41f27d59)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_b317e19f866a2da7.localStorage
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
                if ($___old_dcbaa99e41f27d59)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_dcbaa99e41f27d59
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
        Bootstrapper.dataDefinitionIds = [46613];
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.registerDataDefinition(function () {
              Bootstrapper.data.define(
                {
                  extract: function () {
                    return window.ensightenPCN;
                  },
                  transform: function (val) {
                    return val ? val : '';
                  },
                  load: 'page',
                  trigger: Bootstrapper.data.bottomOfBodyTrigger,
                  dataDefName: 'Conversion UniqueID - PCN',
                  collection: 'Attribution',
                  source: 'Attribution',
                  priv: 'false',
                },
                { id: '46613' }
              );
            }, 46613);
          },
          -1,
          -1
        );
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.insertScript = function (a, e, d, l) {
              var h = document.getElementsByTagName('script'),
                g;
              l = void 0 !== l ? l : !0;
              if (void 0 !== e ? e : 1)
                for (g = 0; g < h.length; g++)
                  if (h[g].src === a && h[g].readyState && /loaded|complete/.test(h[g].readyState))
                    return;
              if (d) {
                d = 1 == d && 'object' == typeof b.scDataObj ? b.scDataObj : d;
                c.rand = Math.random() * ('1E' + (10 * Math.random()).toFixed(0));
                e = window.location.href;
                if ('object' === typeof d)
                  for (g in d) {
                    g = ~e.indexOf('#') ? e.slice(e.indexOf('#'), e.length) : '';
                    e = e.slice(0, g.length ? e.length - g.length : e.length);
                    e += ~e.indexOf('?') ? '&' : '?';
                    for (k in d) e += k + '=' + d[k] + '&';
                    e = e.slice(0, -1) + g;
                    break;
                  }
                a += '?';
                l && (a += 'r=' + c.rand + '&');
                a +=
                  'ClientID=' +
                  encodeURIComponent(c.options.clientId) +
                  '&PageID=' +
                  encodeURIComponent(e);
              }
              (function (a, b, e) {
                var d = b.head || b.getElementsByTagName('head');
                var bd = b.body || b.getElementsByTagName('body');
                setTimeout(function () {
                  if ('item' in d) {
                    if (!d[0]) {
                      setTimeout(arguments.callee, 25);
                      return;
                    }
                    d = d[0];
                  }
                  var a = b.createElement('script');
                  a.src = e;
                  a.onload = a.onerror = function () {
                    this.addEventListener && (this.readyState = 'loaded');
                  };
                  if (bd === null || bd === '') d.insertBefore(a, d.firstChild);
                  else if (typeof bd !== 'undefined') b.body.appendChild(a);
                  else d.insertBefore(a, d.firstChild);
                }, 0);
              })(window, document, a);
            };
            Bootstrapper.loadScriptCallback = function (a, b, d) {
              var c = document.getElementsByTagName('script'),
                h;
              d = c[0];
              for (h = 0; h < c.length; h++)
                if (c[h].src === a && c[h].readyState && /loaded|complete/.test(c[h].readyState))
                  try {
                    b();
                  } catch (g) {
                    window[ensightenOptions.ns].reportException(g);
                  } finally {
                    return;
                  }
              c = document.createElement('script');
              c.type = 'text/javascript';
              c.async = !0;
              c.src = a;
              c.onerror = function () {
                this.addEventListener && (this.readyState = 'loaded');
              };
              c.onload = c.onreadystatechange = function () {
                if (
                  !this.readyState ||
                  'complete' === this.readyState ||
                  'loaded' === this.readyState
                ) {
                  this.onload = this.onreadystatechange = null;
                  this.addEventListener && (this.readyState = 'loaded');
                  try {
                    b.call(this);
                  } catch (a) {
                    window[ensightenOptions.ns].reportException(a);
                  }
                }
              };
              if (document.body === null || document.body === '') d.parentNode.insertBefore(c, d);
              else if (typeof document.body !== 'undefined') document.body.appendChild(c);
              else d.parentNode.insertBefore(c, d);
            };
            Bootstrapper.getServerComponent = function () {
              initGCT = function () {
                try {
                  icats_obj.validateDomain();
                } catch (e) {}
              };
              var scripts = document.getElementsByTagName('script'),
                curScript,
                itm_bootstrapChecker = false,
                kvArray = [];
              var headScript = '';
              for (var i = 0; i < scripts.length; ++i) {
                curScript = scripts[i];
                if (curScript.src.match('amexhead/Bootstrap.js')) headScript = curScript.src;
                if (curScript.src.match('amex/Bootstrap.js')) {
                  itm_bootstrapChecker = true;
                  qsArray = curScript.src.split('?');
                  if (qsArray.length > 1) {
                    kvArray = qsArray[1].split('=');
                    if (kvArray[0] == 'ens_mk' && kvArray[1] == 'us') {
                      Bootstrapper.ensMarket = 'US';
                      Bootstrapper.ensEnv = '3';
                      break;
                    } else if (kvArray[0] == 'ens_mk' && window.icats_obj == undefined) {
                      Bootstrapper.loadScriptCallback(
                        'https://www.aexp-static.com/cdaas/api/axpi/gct/1.0.0/gct_intl.js?gct=Intl',
                        initGCT
                      );
                      Bootstrapper.ensMarket = kvArray[1];
                      Bootstrapper.iNavGCT = false;
                      Bootstrapper.ensEnv = '3';
                      break;
                    }
                  } else if (window.icats_obj == undefined) {
                    Bootstrapper.loadScriptCallback(
                      'https://www.aexp-static.com/cdaas/api/axpi/gct/1.0.0/gct_intl.js?gct=Intl',
                      initGCT
                    );
                    Bootstrapper.iNavGCT = false;
                    break;
                  }
                } else if (curScript.src.match('adobetrackingintl')) {
                  Bootstrapper.ensEnv = '3';
                  qsArray = curScript.src.split('?');
                  if (qsArray.length > 1) {
                    kvArray = qsArray[1].split('=');
                    Bootstrapper.ensMarket = kvArray[1];
                  }
                  if (window.icats_obj == undefined) {
                    Bootstrapper.loadScriptCallback(
                      'https://www.aexp-static.com/cdaas/api/axpi/gct/1.0.0/gct_intl.js?gct=Intl',
                      initGCT
                    );
                    Bootstrapper.iNavGCT = false;
                    break;
                  }
                } else if (curScript.src.match('adobetracking')) {
                  Bootstrapper.ensMarket = 'US';
                  Bootstrapper.ensEnv = '3';
                  break;
                }
              }
              if (itm_bootstrapChecker == false && headScript.match('amexhead/Bootstrap.js')) {
                Bootstrapper.ensMarket = 'US';
                Bootstrapper.ensEnv = '3';
              }
              var u = window.location.href,
                data = Bootstrapper.getExtraParams ? Bootstrapper.getExtraParams() : undefined;
              for (i in data) {
                var c = ~u.indexOf('#') ? u.slice(u.indexOf('#'), u.length) : '',
                  u = u.slice(0, c.length ? u.length - c.length : u.length),
                  u = u + (~u.indexOf('?') ? '&' : '?');
                for (k in data) u += k + '=' + data[k] + '&';
                u = u.slice(0, -1) + c;
                break;
              }
              o = Bootstrapper.ensightenOptions;
              Bootstrapper.insertScript(
                '//' +
                  o.nexus +
                  '/' +
                  o.client +
                  '/serverComponent.php?clientID=' +
                  o.clientId +
                  '&PageID=' +
                  encodeURIComponent(u)
              );
            };
            Bootstrapper.getExtraParams = function () {
              var curEnv = '3';
              var ret = {};
              if (typeof Bootstrapper.ensMarket != 'undefined') {
                if (Bootstrapper.ensMarket.indexOf('-') > -1)
                  Bootstrapper.ensMarket = Bootstrapper.ensMarket
                    .toLocaleLowerCase()
                    .split('-')
                    .reverse()
                    .join()
                    .replace(',', '_');
                ret.ensMarket = Bootstrapper.ensMarket;
              }
              if (typeof excludeOmniture == 'undefined' || !excludeOmniture)
                if (typeof scodeId == 'undefined') {
                  if (typeof $itag != 'undefined' && $itag.scodeId)
                    Bootstrapper.scodeId = $itag.scodeId;
                  else Bootstrapper.scodeId = '0';
                  ret.ens_env = curEnv;
                } else {
                  if (typeof $itag != 'undefined' && $itag.scodeId)
                    Bootstrapper.scodeId = $itag.scodeId;
                  else Bootstrapper.scodeId = scodeId;
                  ret.ens_env = curEnv;
                }
              else if (typeof excludeOmniture != 'undefined' && excludeOmniture)
                ret.ens_env = curEnv;
              if (window.omn_PageId) ret.e_pageId = window.omn_PageId;
              if (window.omn_ReqId) ret.e_reqId = window.omn_ReqId;
              if (window.omn_envName) ret.e_envName = window.omn_envName;
              if (typeof $itag != 'undefined') {
                if ($itag.PageId) ret.e_pageId = $itag.PageId;
                if ($itag.ReqId) ret.e_reqId = $itag.ReqId;
              }
              Bootstrapper.deviceSize = 'None';
              Bootstrapper.deviceWidth = 'None';
              if (typeof document.documentElement.clientWidth == 'undefined') {
                ret.deviceType = 'NONE';
                return ret;
              } else {
                var itm_devwidth = document.documentElement.clientWidth;
                var rem = 0;
                itm_devwidth % 100 > 50 ? (rem = 50) : 0;
                itm_devwidth = Math.min(Math.floor(itm_devwidth / 100) * 100) + rem;
                var deviceType = 'large';
                if (itm_devwidth < 831)
                  if (itm_devwidth < 661) {
                    ret.deviceType = 'small';
                    Bootstrapper.deviceSize = 'res_Small';
                  } else {
                    ret.deviceType = 'medium';
                    Bootstrapper.deviceSize = 'res_Medium';
                  }
                else {
                  ret.deviceType = 'large';
                  Bootstrapper.deviceSize = 'res_Large';
                }
                Bootstrapper.deviceWidth = 'res_' + itm_devwidth;
                Bootstrapper.deviceType = deviceType;
                return ret;
              }
            };
            try {
              if (
                document.cookie.split(';').some(function (item) {
                  return item.trim().indexOf('axplocale') < 0;
                })
              ) {
                var euc_locale = '';
                var altEuc_locale = null;
                try {
                  if (
                    ('undefined' != typeof euLocale && null !== euLocale && '' !== euLocale
                      ? (euc_locale = euLocale)
                      : 'undefined' != typeof NAV && NAV.EUCheck && NAV.EUCheck.locale
                      ? (euc_locale = NAV.EUCheck.locale)
                      : document.documentElement && document.documentElement.lang
                      ? (altEuc_locale = document.documentElement.lang)
                      : 'undefined' != typeof digitalData &&
                        digitalData.view &&
                        digitalData.view.locale &&
                        (altEuc_locale = digitalData.view.locale),
                    ('EI_en' != euc_locale && 'EU_en' != euc_locale && 'EU_sp' != euc_locale) ||
                      (euc_locale = 'ICC_en'),
                    ('NO_no' != euc_locale && 'NO_nb' != euc_locale) || (euc_locale = 'NO_no'),
                    altEuc_locale || euc_locale.indexOf('-') > -1)
                  ) {
                    ('en-XA' != (altEuc_locale = altEuc_locale || euc_locale) &&
                      'en-XB' != altEuc_locale) ||
                      (altEuc_locale = 'en-ICC'),
                      ('no-NO' != altEuc_locale && 'nb-NO' != altEuc_locale) ||
                        (altEuc_locale = 'no-NO');
                    var splitLocale = altEuc_locale.split('-');
                    euc_locale = splitLocale[1] + '_' + splitLocale[0];
                  }
                } catch (e) {
                  console.log(e);
                }
                var localeToUse =
                  Bootstrapper && Bootstrapper.ensMarket ? Bootstrapper.ensMarket : euc_locale;
                if (/^[A-z]{2,3}[\-_][A-z]{2,3}$/.test(localeToUse)) {
                  var axplocale =
                    localeToUse.indexOf('_') > -1
                      ? localeToUse.split('_').reverse()
                      : localeToUse.split('-');
                  document.cookie =
                    'axplocale=' +
                    axplocale[0].toLowerCase() +
                    '-' +
                    axplocale[1].toUpperCase() +
                    '; domain=.americanexpress.com; path=/; secure';
                }
              }
            } catch (e) {
              console.log('something failed during cookie creation');
            }
            Bootstrapper.hostName = function (a, b) {
              var hostName = window.location.hostname;
              var validhostname = false;
              if (hostName.indexOf(a) === b) validhostname = true;
              return validhostname;
            };
            Bootstrapper.randNum = Math.random() * 1000000000;
            Bootstrapper.urlString = function (a) {
              var urlString = window.location.href;
              var validstring = false;
              if (urlString.indexOf(a) > -1) validstring = true;
              return validstring;
            };
            Bootstrapper.icm_domain = '//icm.aexp-static.com';
            Bootstrapper.gem_domain = '//www.americanexpress.com';
            Bootstrapper.myca_domain = '//online.americanexpress.com';
            Bootstrapper.hp_domain = '//www.aexp-static.com';
            Bootstrapper.qsValue = (function (a) {
              if (a === '') return {};
              var b = {};
              for (var i = 0; i < a.length; ++i) {
                var p = a[i].split('=', 2);
                if (p.length == 1) b[p[0]] = '';
                else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
              }
              return b;
            })(window.location.search.substr(1).split('&'));
            Bootstrapper.readCookie = function (a) {
              var nameEQ = a + '=';
              var ca = document.cookie.split(';');
              for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
              }
              return null;
            };
            Bootstrapper.samplingSet = function (a) {
              var uzSamples = 100,
                uzSamplingPer = a;
              uzSamplingPer = (uzSamples * uzSamplingPer) / 100;
              var uz_randNum = Math.floor(Math.random() * uzSamples);
              var samplingqualify =
                uz_randNum < uzSamplingPer ||
                (Bootstrapper.readCookie('voc_sp') !== null &&
                  Bootstrapper.readCookie('voc_sp') === '100');
              return samplingqualify;
            };
            Bootstrapper.checkCookie = function (a) {
              if (document.cookie.length > 0) {
                var c = document.cookie.indexOf(a + '=');
                if (c != -1) return true;
                else return false;
              }
            };
            Bootstrapper.undefinedCheck = function (a) {
              var args = Array.from(arguments);
              var validvar = false;
              if (args.length == 2) {
                if (
                  typeof window[arguments[0]] != 'undefined' &&
                  typeof window[args[0]][args[1]] != 'undefined' &&
                  window[args[0]][args[1]] !== null &&
                  window[args[0]][args[1]] !== ''
                )
                  validvar = true;
              } else if (typeof window[arguments[0]] != 'undefined') {
                var var1 = new Function('a', 'return a');
                if (var1(args[0]) !== null && var1(args[0]) !== '') validvar = true;
              }
              return validvar;
            };
            Bootstrapper.createCookie = function (a, c, d, e) {
              var expires = '';
              if (d) {
                var date = new Date();
                date.setTime(date.getTime() + d * 24 * 60 * 60 * 1000);
                expires = '; expires=' + date.toGMTString();
              }
              document.cookie = a + '=' + c + expires + ';domain=' + e + ';path=/';
            };
            Bootstrapper.UZSurvey = function (a, c, d) {
              window._uzactions = window._uzactions || [];
              _uzactions.push(['_setID', a]);
              _uzactions.push(['_setSID', c]);
              if (arguments.length > 2) {
                var j = 1;
                for (var i = 2; i <= arguments.length - 1; i++) {
                  _uzactions.push(['_setCustomVar', ['custom_var' + j, arguments[i]]]);
                  j++;
                }
              }
              _uzactions.push(['_start']);
              (function () {
                var uz = document.createElement('script');
                uz.type = 'text/javascript';
                uz.async = true;
                uz.charset = 'utf-8';
                uz.src =
                  ('https:' == document.location.protocol ? 'https://' : 'http://') +
                  'cdn5.userzoom.com/trueintent/js/uz_til_us.js?cuid=C098B27E5B32E2119DA70022196C4538';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(uz, s);
              })();
            };
          },
          3402215,
          120079
        );
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.insertIframeForTags = function () {
              try {
                if (document.querySelectorAll('#ens_tag_frame').length === 0) {
                  var newFrame = document.createElement('iframe');
                  newFrame.width = newFrame.height = '0px';
                  newFrame.style.display = 'none';
                  newFrame.id = 'ens_tag_frame';
                  var rand = parseInt(100000 * 10000 * Math.random() * Math.random());
                  Bootstrapper['appendFrame' + rand] = setInterval(
                    (function (a, b) {
                      return function () {
                        document.getElementsByTagName('body') &&
                          0 < document.getElementsByTagName('body').length &&
                          (clearInterval(Bootstrapper['appendFrame' + b]),
                          document.getElementsByTagName('body')[0].appendChild(a));
                        setTimeout(function () {
                          Bootstrapper.insertMetaIframe('referrer', 'no-referrer');
                        }, 500);
                      };
                    })(newFrame, rand),
                    250
                  );
                }
              } catch (e) {
                Bootstrapper.reportException(e);
              }
            };
            Bootstrapper.insertScriptIframe = function (func) {
              try {
                var ts = Date.now();
                var oldBrowser = window.frames['ens_tag_frame'].contentWindow ? false : true;
                var frame = window.frames['ens_tag_frame'];
                var newScript = func;
                newScript = String(func);
                newScript = newScript.replace(/\s+/g, ' ').trim();
                newScript = newScript.replace(/tagFunc/, 'tagFunc_' + ts);
                newScript = newScript += 'tagFunc_' + ts + '();';
                var scriptWrapper = oldBrowser
                  ? frame.document.createElement('script')
                  : frame.contentWindow.document.createElement('script');
                scriptWrapper.innerText = newScript;
                scriptWrapper.type = 'text/javascript';
                oldBrowser
                  ? frame.document.getElementsByTagName('body')[0].appendChild(scriptWrapper)
                  : frame.contentWindow.document
                      .getElementsByTagName('body')[0]
                      .appendChild(scriptWrapper);
              } catch (e) {
                Bootstrapper.reportException(e);
              }
            };
            Bootstrapper.insertMetaIframe = function (meta_name, meta_content) {
              try {
                var oldBrowser = window.frames['ens_tag_frame'].contentWindow ? false : true;
                var frame = window.frames['ens_tag_frame'];
                var metaWrapper = oldBrowser
                  ? frame.document.createElement('meta')
                  : frame.contentWindow.document.createElement('meta');
                metaWrapper.name = meta_name;
                metaWrapper.content = meta_content;
                oldBrowser
                  ? frame.document.getElementsByTagName('head')[0].appendChild(metaWrapper)
                  : frame.contentWindow.document
                      .getElementsByTagName('head')[0]
                      .appendChild(metaWrapper);
                metaWrapper = oldBrowser
                  ? frame.document.createElement('meta')
                  : frame.contentWindow.document.createElement('meta');
                metaWrapper.setAttribute('http-equiv', 'Content-Type');
                metaWrapper.setAttribute('content', 'text/html; charset=UTF-8');
                oldBrowser
                  ? frame.document.getElementsByTagName('head')[0].appendChild(metaWrapper)
                  : frame.contentWindow.document
                      .getElementsByTagName('head')[0]
                      .appendChild(metaWrapper);
              } catch (e) {
                Bootstrapper.reportException(e);
              }
            };
          },
          2847680,
          587900
        );
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            Bootstrapper.getElementsByClassName = function (d, c, f) {
              x =
                arguments.length > 1
                  ? arguments.length == 2
                    ? typeof arguments[1] == 'object' && arguments[1] != null
                      ? c
                      : document
                    : c
                  : document;
              y =
                arguments.length > 1
                  ? arguments.length == 2
                    ? typeof arguments[1] == 'boolean'
                      ? c
                      : false
                    : f
                  : false;
              var e = [];
              x = typeof x == 'object' ? x : document;
              for (var b = x.getElementsByTagName('*'), a = 0, g = b.length; a < g; a++)
                ((!y && b[a].className == d) ||
                  (y && b[a].className.indexOf !== undefined && ~b[a].className.indexOf(d))) &&
                  e.push(b[a]);
              return e;
            };
            Bootstrapper.adwordsConversion = (function () {
              var _private = {
                _stored: [],
                _running: false,
                _init: function () {
                  if (_private._stored.length && !_private._running) {
                    _private._running = true;
                    var t = _private._stored.shift();
                    window.google_conversion_id = t.id;
                    window.google_conversion_language = t.language;
                    window.google_conversion_format = t.format;
                    window.google_conversion_color = t.color;
                    window.google_conversion_label = t.label;
                    window.google_conversion_value = t.value;
                    Bootstrapper.loadScriptCallback(
                      '//www.googleadservices.com/pagead/conversion.js?' +
                        Math.random().toString(),
                      function () {
                        Bootstrapper.adwordsConversion(false);
                      }
                    );
                  }
                },
              };
              Bootstrapper.bindDOMParsed(
                (function (t) {
                  return function () {
                    setInterval(function () {
                      t();
                    }, 250);
                  };
                })(_private._init)
              );
              return function (a, b, c, d, e, f) {
                if (arguments.length == 1) _private._running = arguments[0] ? true : false;
                else
                  _private._stored.push({
                    id: a,
                    language: b,
                    format: c,
                    color: d,
                    label: e,
                    value: f,
                  });
              };
            })();
          },
          2041365,
          120039
        );
        Bootstrapper.bindImmediate(
          function () {
            var Bootstrapper = window['Bootstrapper'];
            var ensightenOptions = Bootstrapper.ensightenOptions;
            var bindDomParsed = Bootstrapper.bindDOMParsed;
            Bootstrapper.bindDOMParsed = function () {
              Function.prototype.apply.call(bindDomParsed, this, arguments);
              if (
                document.readyState === 'complete' ||
                document.readyState === 'loaded' ||
                document.readyState === 'interactive'
              )
                window[ensightenOptions.ns].callOnDOMParsed();
            };
          },
          146382,
          133958
        );
        Bootstrapper.getServerComponent(
          Bootstrapper.getExtraParams ? Bootstrapper.getExtraParams() : undefined
        );
      }
    })();
  })();
}
