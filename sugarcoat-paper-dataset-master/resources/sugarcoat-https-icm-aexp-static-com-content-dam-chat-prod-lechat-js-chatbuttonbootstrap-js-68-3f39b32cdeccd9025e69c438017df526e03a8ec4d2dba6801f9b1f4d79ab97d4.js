var chatcurrentTime,
  chatlastrefreshtime,
  chatlasttimeout,
  isTimerStopped,
  timeoutInterval,
  nuanceFlowFlag,
  lenosToken,
  lenoofferCount,
  lenosecCount,
  lenolocofferCount,
  lenofromReload,
  starttimeLP,
  expansionFlag,
  lpTestPopulation,
  jwtValue,
  firsttimelogin,
  isFirstSlider,
  RCWidgetStepSize,
  sendMessage,
  LNVALUEfromSession,
  cob_sId,
  cob_aId,
  chatAssistJSON,
  bdaasFramebind,
  confirmClicked,
  sTokenRes,
  sToken,
  intiatedFromChatPrioritization,
  globalFirstName,
  xcutType,
  pollforheight,
  devNavigator,
  isIPhone,
  isIOSChrome,
  confirmDispalyFlag,
  savelpButtonDivcNames,
  mycaScrollX,
  mycaScrollY,
  smsForChat,
  smsEventBind,
  lpEndChat,
  loadDragJSForInlineChat,
  wasDragJSLoaded,
  setAACookieForInlineChat,
  setlpchatActiveCookie,
  setmarvinchatActiveCookie,
  setlpchatActiveCookie1,
  setlpchatActiveCookie2,
  deletelpchatActiveCookie,
  deletelpchatActiveCookie1,
  getCookie_AA1,
  refreshAddLine,
  lpChatOnPageLoad,
  lpLoadChat,
  lpChatWizInfo,
  lpRemoveCloseIcon,
  lpShowCloseIcon,
  escapeJSON,
  invokeUILog,
  isPremExp,
  travelele,
  getXCutCollectionItem,
  getapplysToken,
  processChatPrioritization,
  chatPrioritization,
  adjustIframeContainerHeight,
  setHeights,
  onlandscapeorientation,
  handlePinchZoom,
  bindingWindowevents,
  iOSversion,
  checkVersionAndReturnHeight,
  hideChatWindowInLandscapeMode,
  showChatWindowInPortraitMode,
  getDeviceFamilyName,
  l,
  getDevice,
  addblurtoparent,
  removeblurfromparent,
  getCrossCutData,
  getDataFromCrossCut,
  getUniqueChatId,
  setSMSsdes,
  sms_ssid,
  sms_svid,
  smsTimer,
  lpRenderTimer,
  getLPdataForSMS,
  sms_data,
  startSmsChat;
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
  const $___old_5e0a060044a3fe24 = {}.constructor.getOwnPropertyDescriptor(
    Navigator.prototype,
    'userAgent'
  );
  try {
    if ($___old_5e0a060044a3fe24)
      ({}.constructor.defineProperty(
        Navigator.prototype,
        'userAgent',
        $___stub_47c01efa79e9f191.userAgent
      ));
    (function () {
      var $___var_82b7fe3fc00bc223;
      chatcurrentTime = $___var_82b7fe3fc00bc223;
      var $___var_3f2f0b0fd82edcdb = 0;
      chatlastrefreshtime = $___var_3f2f0b0fd82edcdb;
      var $___var_c5babf1f3dd03c2b = false;
      chatlasttimeout = $___var_c5babf1f3dd03c2b;
      var $___var_93bc0d6063a96740 = false;
      isTimerStopped = $___var_93bc0d6063a96740;
      var $___var_0d262fc4568ea2cb = null;
      timeoutInterval = $___var_0d262fc4568ea2cb;
      var $___var_1016476e4ba45b7c = 'BAU';
      nuanceFlowFlag = $___var_1016476e4ba45b7c;
      var $___var_a3769e2f65b2e6ab = '';
      lenosToken = $___var_a3769e2f65b2e6ab;
      var $___var_dc217920cd47d85c = 0;
      lenoofferCount = $___var_dc217920cd47d85c;
      var $___var_24be460fd7d2331e = 0;
      lenosecCount = $___var_24be460fd7d2331e;
      var $___var_c3713e6f9d1d4448 = 0;
      lenolocofferCount = $___var_c3713e6f9d1d4448;
      var $___var_0d2b06cc16486f64 = false;
      lenofromReload = $___var_0d2b06cc16486f64;
      var $___var_c7438ed20a95ad3a;
      starttimeLP = $___var_c7438ed20a95ad3a;
      var $___var_d131291522330d70 = 'standard';
      expansionFlag = $___var_d131291522330d70;
      var $___var_86b06351bdcb6342 = 'Automation';
      lpTestPopulation = $___var_86b06351bdcb6342;
      var $___var_6c865a72e9498506 = '';
      jwtValue = $___var_6c865a72e9498506;
      var $___var_dfc8a805cfe2f9e4 = 'false';
      firsttimelogin = $___var_dfc8a805cfe2f9e4;
      var $___var_c50241f622bcb444 = true;
      isFirstSlider = $___var_c50241f622bcb444;
      var $___var_36c610cb06735c73 = 0;
      RCWidgetStepSize = $___var_36c610cb06735c73;
      var $___var_a125cc5da81fa981 = false;
      sendMessage = $___var_a125cc5da81fa981;
      var $___var_454b23e48cda307f;
      LNVALUEfromSession = $___var_454b23e48cda307f;
      var $___var_1bfd6cfa23f72dc0;
      cob_sId = $___var_1bfd6cfa23f72dc0;
      var $___var_2993b9f8417740df;
      cob_aId = $___var_2993b9f8417740df;
      var $___var_6f876873c85f5933 = window.chatAssistJSON || {};
      chatAssistJSON = $___var_6f876873c85f5933;
      chatAssistJSON.commonAppData = chatAssistJSON.commonAppData || {};
      var $___var_07a374d0624e7d4e = false;
      bdaasFramebind = $___var_07a374d0624e7d4e;
      var $___var_825b87173f6a805d = false;
      confirmClicked = $___var_825b87173f6a805d;
      var $___var_0fc62cde00edca25 = null;
      sTokenRes = $___var_0fc62cde00edca25;
      var $___var_3a2039ef6fd4c7d5 = null;
      sToken = $___var_3a2039ef6fd4c7d5;
      var $___var_4998565b9ca2d044 = false;
      intiatedFromChatPrioritization = $___var_4998565b9ca2d044;
      var $___var_f47723bfb040bfd6 = '';
      globalFirstName = $___var_f47723bfb040bfd6;
      var $___var_b35a0378e1cc9f32 = '';
      xcutType = $___var_b35a0378e1cc9f32;
      var $___var_ff29a3ddd29fe426 = false;
      pollforheight = $___var_ff29a3ddd29fe426;
      var $___var_b7c8fee1c371980d = window.navigator.userAgent.toLowerCase();
      devNavigator = $___var_b7c8fee1c371980d;
      var $___var_5a5108feafab60b6 = navigator.userAgent.match(/(iPhone)/g);
      isIPhone = $___var_5a5108feafab60b6;
      var $___var_98277d2461570ec6 = window.navigator.userAgent.match(/(CriOS)/g);
      isIOSChrome = $___var_98277d2461570ec6;
      var $___var_2729fcfeaf5692e8 = false;
      confirmDispalyFlag = $___var_2729fcfeaf5692e8;
      var $___var_9212dc29a39f5caf = '';
      savelpButtonDivcNames = $___var_9212dc29a39f5caf;
      var $___var_f316c1f08d638340 = 0;
      mycaScrollX = $___var_f316c1f08d638340;
      var $___var_b6e1b45a0d6f3c7f = 0;
      mycaScrollY = $___var_b6e1b45a0d6f3c7f;
      var $___var_0de6a7f5c834a96b = false;
      smsForChat = $___var_0de6a7f5c834a96b;
      var $___var_77bc39ee7215c36d = false;
      smsEventBind = $___var_77bc39ee7215c36d;
      window.lpCWTagUI = window.lpCWTagUI || {};
      window.lpCWTagConst = window.lpCWTagConst || {};
      lpCWTagConst.CHAT_BASE_URL = 'https://icm.aexp-static.com';
      lpCWTagConst.CHAT_LOCATION_URI = '/content/dam/chat/prod/lechat/';
      lpCWTagConst.CHAT_LOCATION_URI2 = '';
      lpCWTagConst.LENOCHAT_LOCATION_URI =
        '/content/dam/chat/prod/lechat/html/customer.html?lpsuid=';
      lpCWTagConst.DEBUG_ENABLE = false;
      lpCWTagConst.LOGGER_NAME_BOOTSTAP = 'LPChatBootstrap';
      lpCWTagConst.WS_ENABLE = true;
      lpCWTagConst.VERSION = '0.9.6-b18';
      lpCWTagConst.lpChatTitleVal = 'American Express Chat';
      lpCWTagConst.lpSmDevChatTitleVal = 'Amex Chat';
      lpCWTagConst.lpChatTitleDock = 'Dock';
      lpCWTagConst.lpChatTitleUndock = 'Un-Dock';
      lpCWTagConst.lpChatTitleMinimize = 'Minimize';
      lpCWTagConst.lpChatTitleMaximize = 'Maximize';
      lpCWTagConst.lpChatTitleClose = 'Close';
      lpCWTagConst.lpNewChatMsgArrive = 'New Chat Message Has Arrived';
      lpCWTagConst.enableSiteTitleFlashing = true;
      lpCWTagConst.enableDockUnDock = true;
      lpCWTagConst.lpTitleFlashingTimer;
      lpCWTagConst.widgetMarginRight = '32';
      lpCWTagConst.P1_EVENT_ID = 1290334214;
      lpCWTagUI.LPChatWidgetLogger =
        lpCWTagUI.LPChatWidgetLogger ||
        function LPChatWidgetLogger () {
          var cwLogger = this;
          function padZeros (num, size) {
            var temp = '000' + num;
            return temp.substr(temp.length - size);
          }
          function print_to_log (pLogName, pData, pData2, pDebugOn) {
            if (pDebugOn) {
              var date = new Date();
              try {
                pData = typeof pData === 'string' ? pData : JSON.stringify(pData);
                pData2 = typeof pData2 === 'string' ? pData2 : JSON.stringify(pData2);
              } catch (exc) {
                pData = exc;
                pData2 = '...';
              }
              date =
                '' +
                padZeros(date.getHours(), 2) +
                ':' +
                padZeros(date.getMinutes(), 2) +
                ':' +
                padZeros(date.getSeconds(), 2) +
                ':' +
                padZeros(date.getMilliseconds(), 3);
              if (!(window.console && console.log)) {
                console = {
                  log: function () {},
                  debug: function () {},
                  info: function () {},
                  warn: function () {},
                  error: function () {},
                };
              }
              console.log(
                date + ' ' + pLogName + ' : ' + pData + (pData2 == '' ? '' : ' : ' + pData2)
              );
            }
          }
          cwLogger.debug = function (dataOrMessage, dataOrMessage2) {
            print_to_log(
              lpCWTagConst.LOGGER_NAME_BOOTSTAP,
              dataOrMessage || '',
              dataOrMessage2 || '',
              lpCWTagConst.DEBUG_ENABLE
            );
          };
          cwLogger.info = function (dataOrMessage, dataOrMessage2) {
            print_to_log(
              lpCWTagConst.LOGGER_NAME_BOOTSTAP,
              dataOrMessage || '',
              dataOrMessage2 || '',
              lpCWTagConst.DEBUG_ENABLE
            );
          };
        };
      lpCWTagUI.LPChatWidgetUI =
        lpCWTagUI.LPChatWidgetUI ||
        function LPChatWidgetUI (window) {
          var myUI = this;
          var webserviceTimer;
          var logger = new lpCWTagUI.LPChatWidgetLogger();
          var chatWinLoaded = false;
          var isChatActive = false;
          var isDock = true;
          var setOffPositionValue = '';
          var setTopOffPositionValue = '';
          var setLeftOffPositionValue = '';
          var lpVisitorSessionId = '';
          var originalSiteTitle = '';
          var chatMaximize = true;
          var lpPCIGenIDEnable = lpCWTagConst.WS_ENABLE;
          var chatWizContainer, chatiFrameContainer, chatiFrame, dragManager, draManagerSession;
          var isPciVisible = false;
          var chatFrameLoaded = false;
          var previousTop = 0,
            previousLeft = 0;
          var suid = '';
          function getElement (id) {
            return document.getElementById(id);
          }
          function removeElement (element) {
            if (element && element.parentNode) element.parentNode.removeChild(element);
          }
          function showElement (idObj) {
            if (typeof idObj != 'undefined') idObj.style.display = 'block';
          }
          function showElementById (id) {
            showElement(getElement(id));
          }
          function hideElement (idObj) {
            if (typeof idObj != 'undefined') idObj.style.display = 'none';
          }
          function hideElementById (id) {
            hideElement(getElement(id));
          }
          function deleteAppendStyleClassById (elementId, classToRemove, classToAdd) {
            return deleteAppendStyleClass(getElement(elementId), classToRemove, classToAdd);
          }
          function deleteAppendStyleClass (element, classToRemove, classToAdd) {
            logger.debug(
              'deleteAppendStyleClass',
              'classToRemove=' + classToRemove + ', classToAdd=' + classToAdd
            );
            var newClassName = '';
            if (typeof element != 'undefined' && element && element.className) {
              var classes = element.className.split(/\s/g);
              if (classes.length > 0) {
                for (var i = 0; i < classes.length; i++) {
                  if (
                    classes[i] != '' &&
                    classes[i] !== classToRemove &&
                    classes[i] !== classToAdd
                  ) {
                    if (newClassName != '') newClassName += ' ';
                    newClassName += classes[i];
                  }
                }
              }
            }
            if (newClassName != '') newClassName += ' ';
            newClassName += classToAdd;
            logger.debug('deleteAppendStyleClass', 'newClassName=' + newClassName);
            return newClassName;
          }
          function getOffset (element) {
            var left = 0,
              top = 0;
            while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
              left += element.offsetLeft - element.scrollLeft;
              top += element.offsetTop - element.scrollTop;
              element = element.offsetParent;
            }
            return { top: top, left: left };
          }
          function bindEvent (element, eventName, callback) {
            if (element.addEventListener) {
              element.addEventListener(eventName, callback, false);
            } else {
              element.attachEvent('on' + eventName, callback);
            }
          }
          function unBindEvent (element, eventName, callback) {
            if (element.addEventListener) {
              element.removeEventListener(eventName, callback, false);
            } else {
              element.detachEvent('on' + eventName, callback);
            }
          }
          function lpChatBuildFrame (pageReload) {
            downLoadchatJQueryJS();
            if (!chatWinLoaded) {
              logger.debug('lpChatBuildFrame', '...');
              var body = document.body;
              try {
                myUI.registerOnMessage();
                chatWizContainer = document.createElement('div');
                chatWizContainer.id = 'lpChatWizContainer';
                if (device.mobile()) {
                  chatWizContainer.className =
                    'lp_US' + ' res_' + C2C.RWD.deviceBucket + ' res_' + C2C.RWD.roundedWidth;
                } else {
                  chatWizContainer.className = 'lp_US';
                }
                chatWizContainer.style.display = 'none';
                if (window.location.hostname === 'global.americanexpress.com') {
                  chatWizContainer.style.zIndex = 100;
                }
                body.appendChild(chatWizContainer);
                chatWizContainer.innerHTML = makeHeader();
                endchatoverlay = document.createElement('div');
                endchatoverlay.id = 'mainpageoverlay';
                chatWizContainer.appendChild(endchatoverlay);
                endchatConflyr = document.createElement('div');
                endchatConflyr.id = 'mainpageprompt';
                chatWizContainer.appendChild(endchatConflyr);
                var endchatlayer =
                  '<div id="confirmMessage">Are you sure you wish to end this chat?</div><div id="confirmButton" tabindex="0">End Chat</div><div id="confirmCancel" tabindex="0">Stay</div>';
                document.getElementById('mainpageprompt').innerHTML = endchatlayer;
                var lecobrowselyr = document.createElement('div');
                lecobrowselyr.id = 'coBrowseWrapper';
                lecobrowselyr.className = 'coBrowseContainer';
                var cobrowsecontent =
                  '<div id="coBrowse-div1" class="coBrowseHeading"><div class="coBrowseLabel" tabindex="0">Lets start a Co-Browse Session</div><div class="coBrowseDescription" tabindex="0">By clicking "I Agree, Start Session", you authorize us to view and give us access to your current web session, subject to our <a href="https://www.americanexpress.com/us/legal-disclosures/co-browse-terms-of-use.html" target="_blank">Terms of Use</a>. End your session by clicking the "X" at the top of the website.</div></div><div id="coBrowse-div2" class="coBrowseBtnContainer"><button type="button" class="coBrowseCancelBtn" id="coBrowseCancel">Cancel</button><button type="button" class="coBrowseAgreeBtn" id="coBrowseAgree">I Agree, Start Session</button></div>';
                chatWizContainer.appendChild(lecobrowselyr);
                document.getElementById('coBrowseWrapper').innerHTML = cobrowsecontent;
                chatiFrameContainer = document.createElement('div');
                chatiFrameContainer.id = 'lpChatiFrameContainer';
                chatiFrameContainer.className = 'lpPosRel';
                chatWizContainer.appendChild(chatiFrameContainer);
                chatiFrame = document.createElement('iframe');
                chatiFrame.id = 'lpChatiFrame';
                chatiFrame.className = 'lpChatiFrame';
                chatiFrame.name = 'lpchatframe';
                chatiFrame.src = getFrameSource();
                chatiFrame.scrolling = 'no';
                chatiFrame.frameBorder = '0';
                chatiFrame.style.border = 'none';
                chatiFrame.style.width = '100%';
                chatiFrame.setAttribute('allowtransparency', 'true');
                chatiFrame.style.backgroundColor = '#fff';
                bindEvent(chatiFrame, 'load', flagChatFrameLoaded);
                chatiFrameContainer.appendChild(chatiFrame);
                chatWinLoaded = true;
                if (device.mobile()) {
                  adjustIframeContainerHeight();
                } else {
                  chatiFrame.style.height = '410px';
                }
                makeLandscapeDivForMin();
                onlandscapeorientation(false, pageReload);
                makeHeaderForMin();
                document.getElementById('lpChatTitleContainerMin').style.display = 'none';
                myUI.bindEvents();
                if (
                  window.location.href.indexOf('travel-offers') != -1 ||
                  window.location.href.indexOf('my-trips') != -1 ||
                  window.location.href.indexOf('travel-experts') != -1 ||
                  window.location.href.indexOf('travelexperts') != -1
                ) {
                  window.location.hash = 'ioa';
                }
                mycaScrollX = Math.round(window.pageXOffset);
                mycaScrollY = Math.round(window.pageYOffset);
                if (pageReload && device.mobile()) {
                  setTimeout(function () {
                    flashingStart();
                  }, 20);
                }
              } catch (excp) {
                logger.debug('lpChatBuildFrame', 'Exception occurred', excp);
              }
            } else {
              logger.debug('lpChatBuildFrame', 'chat window already loaded');
            }
          }
          function downLoadchatJQueryJS () {
            if (typeof $iOA === 'undefined') {
              var oHead = document.getElementsByTagName('head').item(0);
              var oScript = document.createElement('script');
              oScript.type = 'text/javascript';
              oScript.async = true;
              oScript.src =
                'https://icm.aexp-static.com/content/dam/search/ioa/js/iOAjquery1.6.3.min.js';
              oHead.appendChild(oScript);
            }
          }
          function focusOnEndChat (e) {
            e = e || window.event;
            var key = e.keyCode || e.which;
            if (key == 9) {
              document.getElementById('confirmButton').focus();
              e.preventDefault();
            }
            if (key == 13) {
              closeButtonCancelClick();
              document.getElementById('lpChatEndChatBtn').focus();
              e.preventDefault();
            }
          }
          function closeButtonConfirmClickonKey (e) {
            e = e || window.event;
            var key = e.keyCode || e.which;
            if (key == 13) {
              closeButtonConfirmClick();
              document.getElementById('lpChatEndChatBtn').focus();
              e.preventDefault();
            }
          }
          function flagChatFrameLoaded () {
            logger.debug('flagChatFrameLoaded', 'method invoke');
            chatFrameLoaded = true;
          }
          function sendPostMessageToC2C (jsonData) {
            logger.debug('parentFrame sending postmsg to =' + getTargetForC2CFrame(), jsonData);
            if (getC2CFrameObj().postMessage)
              getC2CFrameObj().postMessage(JSON.stringify(jsonData), getTargetForC2CFrame());
            else throw new Error('Your browser does not support the postMessage method!');
          }
          function getC2CFrameObj () {
            var x = document.querySelectorAll(
              "iframe[src^='https://icm.aexp-static.com/content/dam/chat/html/C2CFrame.html']"
            )[0];
            if (typeof x != 'undefined' && x != null) return x.contentWindow || x.contentDocument;
          }
          function getTargetForC2CFrame () {
            var iFrameURL = 'https://icm.aexp-static.com/content/dam/chat/html/C2CFrame.html';
            return iFrameURL.indexOf('https') > -1
              ? 'https://' + iFrameURL.substr(8).split('/')[0]
              : 'http://' + iFrameURL.substr(7).split('/')[0];
          }
          function sendPostMessageToRCWidget (jsonData) {
            logger.debug(
              'parentFrame sending postmsg to =' + getTargetForLenoChatFrame(),
              jsonData
            );
            if (getRCWidgetFrameObj().postMessage)
              getRCWidgetFrameObj().postMessage(
                JSON.stringify(jsonData),
                getTargetForLenoChatFrame()
              );
            else throw new Error('Your browser does not support the postMessage method!');
          }
          function getRCWidgetFrameObj () {
            var x = document.getElementById('lnChatiFrame');
            if (typeof x != 'undefined' && x != null) return x.contentWindow || x.contentDocument;
          }
          function getTargetForChatFrame () {
            var iFrameURL = getFrameSource();
            return iFrameURL.indexOf('https') > -1
              ? 'https://' + iFrameURL.substr(8).split('/')[0]
              : 'http://' + iFrameURL.substr(7).split('/')[0];
          }
          function getTargetForLenoChatFrame () {
            var iFrameURL = getLenoFrameSource();
            return iFrameURL.indexOf('https') > -1
              ? 'https://' + iFrameURL.substr(8).split('/')[0]
              : 'http://' + iFrameURL.substr(7).split('/')[0];
          }
          function getChatBaseDomain () {
            return lpCWTagConst.CHAT_BASE_URL.replace(/,\s*$/, '');
          }
          function lnChatBuildFrame (suid, reloadstr) {
            if (typeof slFlag != 'undefined' && slFlag) {
              var chatWizContainer = document.getElementById('lpChatiFrameContainer');
              lnchatiFrameContainer = document.createElement('div');
              lnchatiFrameContainer.id = 'leno-ChatiFrameContainer';
              chatWizContainer.appendChild(lnchatiFrameContainer);
              lnchatiFrame = document.createElement('iframe');
              lnchatiFrame.id = 'lnChatiFrame';
              lnchatiFrame.className = 'lpChatiFrame';
              lnchatiFrame.src = getLenoFrameSource(suid, reloadstr);
              lnchatiFrame.scrolling = 'no';
              lnchatiFrame.frameBorder = '0';
              lnchatiFrame.style.border = 'none';
              lnchatiFrame.style.width = '254px';
              lnchatiFrame.style.height = '360px';
              lnchatiFrame.setAttribute('allowtransparency', 'true');
              bindEvent(lnchatiFrame, 'load', flagChatFrameLoaded);
              lnchatiFrameContainer.appendChild(lnchatiFrame);
              myUI.bindEvents();
            }
          }
          function lpChkValidUser () {
            try {
              var s = myUI.lpReadCookie('amexsessioncookie');
              var z = myUI.lpReadCookie('blueboxvalues');
              var r = myUI.lpReadCookie('SMSESSION');
              if (s != null && s != '') {
                var v = new Date(),
                  u = v.getTime(),
                  w = '=([^|]+)',
                  y = s.match('uts' + w)[1],
                  x = parseInt((u - y) / (1000 * 60 * 60));
                if (x < 12) {
                  return true;
                } else {
                  return false;
                }
              } else {
                if ((z != null && z != '') || (r != null && r != 'LOGGEDOFF')) {
                  return true;
                } else {
                  return false;
                }
              }
            } catch (e) {
              return false;
            }
          }
          myUI.lpReadCookie = function (u) {
            var w = u + '=';
            var s = document.cookie.split(';');
            for (var v = 0; v < s.length; v++) {
              var r = s[v];
              while (r.charAt(0) == ' ') {
                r = r.substring(1, r.length);
              }
              if (r.indexOf(w) == 0) {
                return r.substring(w.length, r.length);
              }
            }
            return null;
          };
          function getLenoFrameSource (suid, reloadstr) {
            var iphone_version = iOSversion();
            lenoframeURL =
              'https://icm.aexp-static.com/content/dam/chat/prod/lechat/html/rcCustomer.html?dB=' +
              C2C.RWD.deviceBucket +
              '&rW=' +
              C2C.RWD.roundedWidth +
              '&dH=' +
              window.innerHeight +
              '&lpsuid=' +
              suid +
              reloadstr +
              '&intlvr=' +
              glbver +
              '&src=' +
              window.location.protocol +
              '//' +
              window.location.hostname +
              '&iphone_version=' +
              iphone_version;
            return lenoframeURL;
          }
          function getFrameSource () {
            var frameURL = '';
            if (lpChkValidUser()) {
              frameURL =
                'https://icm.aexp-static.com/content/dam/chat/prod/lechat/html/leChatWireFrame.html?userloggedin=true&dB=' +
                C2C.RWD.deviceBucket +
                '&rW=' +
                C2C.RWD.roundedWidth +
                '&dH=' +
                window.innerHeight;
            } else {
              frameURL =
                'https://icm.aexp-static.com/content/dam/chat/prod/lechat/html/leChatWireFrame.html?dB=' +
                C2C.RWD.deviceBucket +
                '&rW=' +
                C2C.RWD.roundedWidth +
                '&dH=' +
                window.innerHeight;
            }
            if (smsForChat) frameURL = frameURL + '&smsForChat=true';
            if (document.cookie.indexOf('smschat_active') > -1) {
              frameURL = frameURL + '&smschatactive=true';
            }
            if (document.cookie.indexOf('lpchat_active') > -1) {
              frameURL = frameURL + '&lpchatactive=true';
            } else {
              frameURL = frameURL + '&lpchatactive=false';
            }
            if (document.cookie.indexOf('marvinchat_active') > -1) {
              frameURL = frameURL + '&marvinchatactive=true';
            } else {
              frameURL = frameURL + '&marvinchatactive=false';
            }
            if (typeof Bootstrapper != 'undefined') {
              frameURL = frameURL + '&lpctrycd=' + Bootstrapper.ensMarket;
            }
            frameURL = frameURL + '&intlvr=' + glbver;
            frameURL =
              frameURL + '&src=' + window.location.protocol + '//' + window.location.hostname;
            var cvalue = getCookie_AA('lpdata');
            var str = '';
            if (cvalue != '') {
              var carr = cvalue.split('||');
              for (i = 0; i < carr.length; i++) {
                var pname = carr[i].split('=')[0];
                var pvalue = carr[i].split('=')[1];
                str = str + '&' + pname + '=' + pvalue;
              }
              var vid = getCookie_AA('vid');
              str = str + '&vid=' + vid;
              var lastupdate = getCookie_AA('lpupdate');
              str = str + '&lpupdate=' + lastupdate;
              var lpcoredata = getCookie_AA('lpcoredata');
              lpcoredata = encodeURIComponent(lpcoredata);
              str = str + '&smdatacore=' + lpcoredata;
            }
            var setatbbv = getCookie_AA('setatbbv');
            str = str + '&setatbbv=' + setatbbv;
            var setatesc = getCookie_AA('setatesc');
            str = str + '&setatesc=' + setatesc;
            var setatcnvsid = getCookie_AA('setatcnvsid');
            str = str + '&setatcnvsid=' + setatcnvsid;
            var levisitorId = getCookie_AA('levisitorId');
            str = str + '&levisitorId=' + levisitorId;
            var lesessionId = getCookie_AA('lesessionId');
            str = str + '&lesessionId=' + lesessionId;
            var leinteractionContextId = getCookie_AA('leinteractionContextId');
            str = str + '&leinteractionContextId=' + leinteractionContextId;
            var lecid = getCookie_AA('lecid');
            str = str + '&lecid=' + lecid;
            var leeid = getCookie_AA('leeid');
            str = str + '&leeid=' + leeid;
            var lelastAgent = getCookie_AA('lelastAgent');
            str = str + '&lelastAgent=' + lelastAgent;
            var lepriority = getCookie_AA('lepriority');
            str = str + '&lepriority=' + lepriority;
            var lprecmon = getCookie_AA('lprecmon');
            str = str + '&lprecmon=' + lprecmon;
            var lpstate = getCookie_AA('lpstate');
            str = str + '&lpstate=' + lpstate;
            var jwtVal = getCookie_AA('jwtVal');
            str = str + '&jwtValue=' + jwtVal;
            frameURL = frameURL + str;
            if (
              window.location.href.indexOf('travel') != -1 ||
              window.location.href.indexOf('iseatz.com') != -1
            ) {
              frameURL = frameURL + '&travelpage=true';
            }
            var qlpscont;
            if (typeof window.lpMTagConfig != 'undefined') {
              if (typeof window.lpMTagConfig.FPC_CONT != 'undefined')
                qlpscont = window.lpMTagConfig.FPC_CONT;
              else qlpscont = getCookie_AA('qScont');
              frameURL = frameURL + '&qlpscont=' + qlpscont;
            } else {
              qlpscont = getCookie_AA('qScont');
              frameURL = frameURL + '&qlpscont=' + qlpscont;
            }
            return frameURL;
          }
          function isSameOrigin (respDomain) {
            logger.debug(
              'isSameOrigin respDomain=' + respDomain,
              'targetDomain: ' + getTargetForChatFrame()
            );
            return getTargetForChatFrame() == respDomain ? true : false;
          }
          function sendPostMessage (jsonData) {
            logger.debug('parentFrame sending postmsg to =' + getTargetForChatFrame(), jsonData);
            if (getLPChatiFrameObj().postMessage)
              getLPChatiFrameObj().postMessage(JSON.stringify(jsonData), getTargetForChatFrame());
            else throw new Error('Your browser does not support the postMessage method!');
          }
          function getLPChatiFrameObj () {
            var x = document.getElementById('lpChatiFrame');
            return x.contentWindow || x.contentDocument;
          }
          function hideLPChat () {
            hideElement(chatWizContainer);
          }
          function showLPChat () {
            showElement(chatWizContainer);
          }
          var sessionIntervalID = null;
          var eventChat = null;
          if (document.createEvent) {
            eventChat = document.createEvent('CustomEvent');
            eventChat.initCustomEvent('extendSession', false, false, {});
          }
          myUI.keepSessionAlive = function () {
            window.dispatchEvent(eventChat);
          };
          function refreshTillTimeout (lastctr) {
            if (timeoutInterval !== null) return;
            var timeCounter = parseInt(lastctr);
            sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'REFCTR', value: timeCounter });
            timeoutInterval = setInterval(function () {
              timeCounter = timeCounter + 1;
              sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'REFCTR', value: timeCounter });
              if (timeCounter < 30 && timeCounter % 2 == 0 && !chatlasttimeout) {
                setCookie('lp_flg', 'true', null, 120);
                var travelele = document.getElementById('rhContainer');
                if (typeof timeoutWidget != 'undefined') {
                  timeoutWidget.refreshSession();
                } else if (typeof chatSessionCallback != 'undefined') {
                  chatSessionCallback(true);
                } else if (window.location.href.indexOf('ssearch.jsp') > -1) {
                  var d = new Date();
                  chatcurrentTime = d.getTime();
                } else if (typeof travelele !== 'undefined' && travelele !== null) {
                  angular
                    .element(document.getElementById('rhContainer'))
                    .scope()
                    .$parent.userSessionTimeout();
                } else {
                  var d = new Date();
                  chatcurrentTimetmp = d.getTime();
                  lpChatWidgetUI.keepSessionAlive();
                  chatlastrefreshtime = chatcurrentTimetmp;
                }
                logger.debug('refreshSession started', 'refresh method triggered');
                isTimerStopped = false;
              }
              if (timeCounter >= 30 || chatlasttimeout) {
                if (!chatlasttimeout) {
                  if (timeCounter >= 30) {
                  }
                }
                clearInterval(timeoutInterval);
                logger.debug('refreshSession stopped');
                chatlasttimeout = false;
                isTimerStopped = true;
                clearInterval(sessionIntervalID);
              }
            }, 60000);
          }
          function closeButtonClicked () {
            logger.debug('closeButtonClicked', 'method is invoked');
            deletelpchatActiveCookie1('lpPopulation');
            try {
              if (typeof omn_rmassistaction != 'undefined')
                omn_rmassistaction('Click', 'LiveChat_InChatSession-Close');
            } catch (e) {}
            if (document.getElementById('mainpageprompt').style.display != 'block') {
              sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'CONTROL', value: 'END_CHAT' });
              confirmClicked = false;
            }
          }
          function closeButtonConfirmClick () {
            if (!confirmClicked) {
              sendPostMessage({
                lpEmbChatWiz: 'LPNVCF',
                CMD: 'CONTROL',
                value: 'CONFIRM_END_CHAT',
              });
            }
            document.getElementById('mainpageoverlay').style.display = 'none';
            document.getElementById('mainpageprompt').style.display = 'none';
            document.getElementById('coBrowseWrapper').style.display = 'none';
            document.getElementById('coBrowseWrapper').className = 'cobClose';
          }
          function closeButtonCancelClick () {
            if (!confirmClicked) {
              document.getElementById('mainpageoverlay').style.display = 'none';
              document.getElementById('mainpageprompt').style.display = 'none';
              confirmDispalyFlag = false;
              sendPostMessage({
                lpEmbChatWiz: 'LPNVCF',
                CMD: 'CONTROL',
                value: 'CANCEL_END_CHAT',
              });
            }
          }
          function coBrowseCancelClick () {
            if (globalFirstName == '') {
              globalFirstName = getCookie_AA('glbCnm');
            }
            lpTag.events.publish('lpCoBrowse', 'cobrowseDeclined', {
              serviceId: cob_sId,
              agentId: cob_aId,
              visitorName: globalFirstName,
            });
            delCookie('glbCnm');
            document.getElementById('coBrowseWrapper').style.display = 'none';
            document.getElementById('coBrowseWrapper').className = 'cobClose';
            sendPostMessage({
              lpEmbChatWiz: 'LPNVCF',
              CMD: 'REMOVELENOSESSION',
              SUBCMD: 'COBROWSEREJECTED',
            });
          }
          function coBrowseAgreeClick () {
            if (globalFirstName == '') {
              globalFirstName = getCookie_AA('glbCnm');
            }
            lpTag.events.publish('lpCoBrowse', 'cobrowseAccepted', {
              serviceId: cob_sId,
              agentId: cob_aId,
              visitorName: globalFirstName,
              ssid: getCookie_AA1('lesessionId'),
              svid: getCookie_AA1('levisitorId'),
            });
            delCookie('glbCnm');
            document.getElementById('coBrowseWrapper').style.display = 'none';
            document.getElementById('coBrowseWrapper').className = 'cobClose';
            sendPostMessage({
              lpEmbChatWiz: 'LPNVCF',
              CMD: 'REMOVELENOSESSION',
              SUBCMD: 'COBROWSEACCEPTED',
            });
          }
          function closeButtonClickedforEnterkey (e) {
            e = e || window.event;
            var key = e.keyCode ? e.keyCode : e.which;
            if (key == 13) {
              logger.debug('closeButtonClicked', 'method is invoked');
              deletelpchatActiveCookie1('lpPopulation');
              try {
                omn_rmassistaction('Click', 'LiveChat_InChatSession-Close');
              } catch (e) {}
              sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'CONTROL', value: 'END_CHAT' });
            }
            if (e.shiftKey && key == '9') {
              document.getElementById('lpChatMinizeBtn').focus();
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
            }
          }
          function closeButtonClickedforShiftTabkey (e) {
            e = e || window.event;
            var key = e.keyCode ? e.keyCode : e.which;
            if (e.shiftKey && key == '9') {
              document.getElementById('lpChatMinizeBtn').focus();
            }
          }
          function closeButtonClickedForMinforEnterkey (e) {
            e = e || window.event;
            var key = e.keyCode || e.which;
            if (key == 13) {
              closeButtonClickedForMin();
            }
            if (e.shiftKey && key == '9') {
              document.getElementById('lpChatMaximizeBtn').focus();
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
            } else if (key == '9') {
              document.getElementById('lpChatEndChatBtnMin').focus();
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
            }
          }
          var chatlogomin;
          var ccount;
          var stopanimate = false;
          function closeButtonClickedForMin () {
            logger.debug('closeButtonClicked for min', 'method is invoked');
            sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'CONTROL', value: 'END_CHAT' });
            var titleDiv = document.getElementById('lpChatTitleContainerMin');
            var titleText = document.getElementsByClassName('lpChatHeaderText')[1];
            titleDiv.style.backgroundColor = '#002665';
            titleText.style.color = 'white';
            if (
              document.getElementById('lpMessageIconPos').className.indexOf('animateIcon') != -1
            ) {
              document.getElementById('lpMessageIconPos').className =
                'lpChatTitleContainerLogo lpLeft lpCustSpriteBackground lpCustChatLogoSmall';
            }
            if (getCookie_AA1('lpPopulation') == 'AUTOMATION')
              titleText.innerHTML = 'American Express Chat';
            else titleText.innerHTML = 'American Express Live Chat';
            stopanimate = true;
            document.getElementById('lpMessageIconPos').style.top = '';
          }
          function onWinResizeEvent () {
            logger.debug('onWinResizeEvent', '...');
            adjustChatWizLocation();
          }
          function adjustChatWizLocation () {
            var wizNewTop, wizNewLeft, top, bottom, left, right;
            var chatWizContainerOffset = getOffset(chatWizContainer);
            var wizCurrentTop = chatWizContainerOffset.top;
            var wizCurrentLeft = chatWizContainerOffset.left;
            var winWidth =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;
            var winHeight =
              window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight;
            var wizWidth = chatWizContainer.offsetWidth;
            var wizHeight = chatWizContainer.offsetHeight;
            logger.debug(
              'adjustChatWizLocation',
              '(win.width, win.height): (' +
                winWidth +
                ', ' +
                winHeight +
                ') (widget.width, widget.height): (' +
                wizWidth +
                ', ' +
                wizHeight +
                ') (EW.top, EW.left): (' +
                wizCurrentTop +
                ', ' +
                wizCurrentLeft +
                ')'
            );
            if (isDock) {
              wizNewTop = winHeight - wizHeight;
              wizNewLeft = winWidth - wizWidth - lpCWTagConst.widgetMarginRight;
              if (wizNewTop >= 0) {
                top = 'auto';
                bottom = '0px';
              } else {
                top = '0px';
                bottom = 'auto';
              }
              if (wizNewLeft >= 0) {
                left = 'auto';
                right = '0px';
              } else {
                left = '0px';
                right = 'auto';
              }
            } else {
              wizNewTop = winHeight - wizHeight - wizCurrentTop;
              wizNewLeft = winWidth - wizWidth - wizCurrentLeft;
              logger.debug(
                'adjustChatWizLocation',
                'new (EW.top, EW.left):(' + wizNewTop + ', ' + wizNewLeft + ')'
              );
              if (wizNewTop < 0) wizNewTop = winHeight - wizHeight;
              else wizNewTop = wizCurrentTop;
              if (wizNewTop < 0) {
                wizNewTop = 0;
              }
              if (wizNewLeft < 0) wizNewLeft = winWidth - wizWidth;
              else wizNewLeft = wizCurrentLeft;
              if (wizNewLeft < 0) wizNewLeft = 0;
              bottom = 'auto';
              right = 'auto';
              left = wizNewLeft + 'px';
              top = wizNewTop + 'px';
            }
            logger.debug(
              'adjustChatWizLocation',
              'FINAL (EW.top, EW.left, EW.bottom, EW.right) : (' +
                top +
                ', ' +
                left +
                ', ' +
                bottom +
                ', ' +
                right +
                ')'
            );
            chatWizContainer.style.bottom = bottom;
            chatWizContainer.style.right = right;
            chatWizContainer.style.left = left;
            chatWizContainer.style.top = top;
          }
          function adjustWindowSizeForPCI () {
            logger.debug('adjustWindowSizeForPCI', '...');
            chatWizContainer.style.width = '700px';
            chatiFrameContainer.style.width = '700px';
            chatiFrame.style.width = '700px';
            logger.debug(
              'adjustWindowSizeForPCI',
              '1top=' + chatWizContainer.style.top + ', ' + chatWizContainer.style.left
            );
            var newLeft = parseInt(chatWizContainer.style.left) - 300;
            if (newLeft < 0) newLeft = 0;
            chatWizContainer.style.left = newLeft + 'px';
          }
          function adjustWindowSizeNonePCI () {
            logger.debug('adjustWindowSizeNonPCI', '...');
            logger.debug(
              'adjustWindowSizeNonPCI',
              'top=' + chatWizContainer.style.top + ', ' + chatWizContainer.style.left
            );
            chatiFrameContainer.style.width = '100%';
            chatiFrame.style.width = '100%';
            var originalLeft = parseInt(chatWizContainer.style.left);
            var chatWizContainerWidth = parseInt(chatWizContainer.style.width);
            logger.debug('adjustWindowSizeNonPCI', 'width=' + chatWizContainer.style.width);
            if (chatWizContainerWidth > 400) {
              originalLeft += 300;
            }
            chatWizContainer.style.width = '100%';
            chatWizContainer.style.left = originalLeft + 'px';
            logger.debug(
              'adjustWindowSizeNonPCI',
              'originalLeft=' +
                originalLeft +
                ', ' +
                'top=' +
                chatWizContainer.style.top +
                ', ' +
                chatWizContainer.style.left
            );
          }
          function showMinimizeHandler (minmax) {
            try {
              logger.debug('showMinimizeHandler', 'method is invoked');
              if (window.location.hostname === 'global.americanexpress.com') {
                chatWizContainer.style.zIndex = 10500;
              }
              try {
                if (
                  document.querySelectorAll('#lpChatWizContainer.res_Small').length > 0 ||
                  device.mobile()
                ) {
                  if (isIPhone && !isIOSChrome) {
                    document.body.style.overflowY = 'auto';
                    document.body.style.position = '';
                  }
                  removeblurfromparent();
                  var viewport = document.querySelector('meta[name=viewport]');
                  if (typeof viewport !== 'undefined' && viewport != null) {
                    viewport.setAttribute(
                      'content',
                      'width=device-width, initial-scale=1.0, user-scalable=yes'
                    );
                  }
                  var sheetToBeRemoved = document.getElementById('qfb');
                  var sheetParent = sheetToBeRemoved.parentNode;
                  sheetParent.removeChild(sheetToBeRemoved);
                  setTimeout(function () {
                    window.scroll(mycaScrollX, mycaScrollY);
                  }, 5);
                }
              } catch (e) {}
              if (
                typeof document.getElementById('coBrowseWrapper') != 'undefined' &&
                document.getElementById('coBrowseWrapper') != null
              ) {
                document.getElementById('coBrowseWrapper').style.display = 'none';
              }
              if (
                !confirmDispalyFlag &&
                document.getElementById('mainpageoverlay').style.display == 'block' &&
                document.getElementById('mainpageprompt').style.display == 'block'
              ) {
                document.getElementById('mainpageoverlay').style.display = 'none';
                document.getElementById('mainpageprompt').style.display = 'none';
                confirmDispalyFlag = true;
              }
              chatWizContainer.style.bottom = '20px';
              chatWizContainer.style.right = '0px';
              chatWizContainer.style.left = 'auto';
              chatWizContainer.style.top = 'auto';
              document.getElementById('lpChatWizContainer').style.boxShadow = 'none';
              document.getElementById('lpChatWizContainer').style.width = '';
              if (isPremExp == true) chatWizContainer.style.right = '300px';
              hideElement(chatiFrameContainer);
              document.getElementById('lpChatTitleContainer').style.display = 'none';
              document.getElementById('lpChatTitleContainerMin').style.display = 'block';
              document.getElementsByClassName('lpChatHeaderTextmin')[0].innerHTML = 'Chat';
              document.getElementById('lpChatTitleContainerMin').style.width = '101px';
              var chatIconMinBtnImg = getElement('lpChatMinizeBtnImg');
              var newClasses = deleteAppendStyleClass(
                chatIconMinBtnImg,
                'lpCustChatIconMinimize',
                'lpCustChatIconMinimize'
              );
              chatIconMinBtnImg.className = newClasses;
              var chatIconMinBtn = getElement('lpChatMinizeBtn');
              chatIconMinBtn.setAttribute('data-msg', lpCWTagConst.lpChatTitleMinimize);
              sendPostMessage({
                lpEmbChatWiz: 'LPNVCF',
                CMD: 'FLASHING',
                value: 'MINIMIZED',
                MSG: '',
              });
              chatMaximize = false;
              if (typeof minmax != 'undefined') {
                document.getElementById('lpChatWizContainer').style.display = 'block';
              }
              try {
                omn_rmassistaction('Click', 'LiveChat_InChatSession-Minimize');
              } catch (e) {}
            } catch (e) {}
          }
          function showMinimizeHandlerforEnterKey (e) {
            e = e || window.event;
            var key = e.keyCode ? e.keyCode : e.which;
            if (key == 13) {
              showMinimizeHandler();
              document.getElementById('lpChatMaximizeBtn').focus();
            }
            if (e.shiftKey && key == '9') {
              document.getElementById('lpChatMinizeBtn').focus();
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
            }
          }
          function showMaximizeHandlerforEnterKey (e) {
            e = e || window.event;
            var key = e.keyCode || e.which;
            if (key == 13) {
              showMaximizeHandler(false);
              document.getElementById('lpChatMinizeBtn').focus();
            }
            if (e.shiftKey && key == '9') {
              document.getElementById('lpChatMaximizeBtn').focus();
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
            }
          }
          function showMaximizeHandler (fromInvite) {
            try {
              logger.debug('showMaximizeHandler', 'method is invoked');
              if (window.location.hostname === 'global.americanexpress.com') {
                chatWizContainer.style.zIndex = 100;
                try {
                  var modelContentFullScreen = document.getElementsByClassName(
                    'modal modal-screen modal-fade'
                  );
                  if (
                    isIPhone &&
                    typeof modelContentFullScreen !== 'undefined' &&
                    null != modelContentFullScreen
                  ) {
                    if (
                      null != modelContentFullScreen[0] &&
                      null != modelContentFullScreen[0].parentElement &&
                      null != modelContentFullScreen[0].parentElement.style &&
                      null != modelContentFullScreen[0].parentElement.style.zIndex
                    ) {
                      chatWizContainer.style.zIndex =
                        parseInt(modelContentFullScreen[0].parentElement.style.zIndex) + 1;
                    } else {
                      chatWizContainer.style.zIndex = 300;
                    }
                  }
                } catch (ex) {}
              }
              if (pollforheight) {
                sendPostMessageToRCWidget({ lpEmbChatWiz: 'LPNVCF', CMD: 'RESENDHGT' });
                pollforheight = false;
              }
              try {
                if (
                  (document.querySelectorAll('#lpChatWizContainer.res_Small').length > 0 ||
                    device.mobile()) &&
                  !fromInvite
                ) {
                  if (document.getElementById('qfb') == null) {
                    var qFBsheet = document.createElement('style');
                    qFBsheet.id = 'qfb';
                    qFBsheet.innerHTML =
                      '.QSIFeedBackLink {display:none !important} .QSIPopOver {z-index:99 !important};';
                    document.body.appendChild(qFBsheet);
                  }
                }
              } catch (e) {}
              if (
                typeof document.getElementById('coBrowseWrapper') != 'undefined' &&
                document.getElementById('coBrowseWrapper') != null &&
                document.getElementById('coBrowseWrapper').className == 'cobOpen'
              ) {
                document.getElementById('coBrowseWrapper').style.display = 'block';
              }
              if (confirmDispalyFlag) {
                document.getElementById('mainpageoverlay').style.display = 'block';
                document.getElementById('mainpageprompt').style.display = 'block';
                confirmDispalyFlag = false;
              }
              if (document.getElementById('showMsgCount')) {
                document.getElementById('showMsgCount').style.display = 'none';
              }
              showElement(chatiFrameContainer);
              document.getElementById('lpChatTitleContainer').style.display = 'block';
              document.getElementById('lpChatTitleContainerMin').style.display = 'none';
              document.getElementById('lpChatWizContainer').style.boxShadow = '0 0 2em #666666';
              if (
                (document.querySelectorAll('#lpChatWizContainer.res_Small').length > 0 ||
                  device.mobile()) &&
                !fromInvite
              ) {
                if (document.getElementById('lpChatTitleContainer').style.display != 'none') {
                  addblurtoparent();
                }
                if (isIPhone && !isIOSChrome) {
                  document.body.style.overflowY = 'hidden';
                  document.body.style.position = 'fixed';
                }
                var viewport = document.querySelector('meta[name=viewport]');
                if (typeof viewport !== 'undefined' && viewport != null) {
                  viewport.setAttribute(
                    'content',
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                  );
                } else {
                  var metaTag = document.createElement('meta');
                  metaTag.name = 'viewport';
                  metaTag.content =
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
                  document.getElementsByTagName('head')[0].appendChild(metaTag);
                }
              }
              adjustChatWizLocation();
              var chatIconMinBtnImg = getElement('lpChatMaximizeBtnImg');
              var newClasses = deleteAppendStyleClass(
                chatIconMinBtnImg,
                'lpCustChatIconMaximize',
                'lpCustChatIconMaximize'
              );
              chatIconMinBtnImg.className = newClasses;
              var chatIconMinBtn = getElement('lpChatMaximizeBtn');
              chatIconMinBtn.setAttribute('data-msg', lpCWTagConst.lpChatTitleMaximize);
              logger.debug('showMaximizeHandler', 'flashingStop....before');
              flashingStop();
              logger.debug('showMaximizeHandler', 'flashingStop....after');
              sendPostMessage({
                lpEmbChatWiz: 'LPNVCF',
                CMD: 'FLASHING',
                value: 'MAXIMIZED',
                MSG: '',
              });
              chatMaximize = true;
              chatWizContainer.style.top = setTopOffPositionValue + 'px';
              chatWizContainer.style.left = setLeftOffPositionValue + 'px';
              try {
                if (typeof omn_rmassistaction != 'undefined' && omn_rmassistaction != null)
                  omn_rmassistaction('Click', 'LiveChat_InChatSession-Maximize');
              } catch (e) {}
              onlandscapeorientation();
              mycaScrollX = Math.round(window.pageXOffset);
              mycaScrollY = Math.round(window.pageYOffset);
            } catch (e) {}
          }
          function minimzeMaximizeButtonClick () {
            logger.debug('minimzeMaximizeButtonClick', 'method is invoked');
            if (chatMaximize) {
              showMinimizeHandler();
            } else {
              showMaximizeHandler();
            }
          }
          function endChat () {
            try {
              logger.debug('endChat', 'method is invoked');
              chatlastrefreshtime = 0;
              document.getElementById('lpChatEndChatBtn').style.outline = 'none';
              document.getElementById('lpChatEndChatBtnMin').style.outline = 'none';
              if (typeof Bootstrapper != 'undefined')
                document.getElementById('lpChatWizContainer').className =
                  'lp_' +
                  Bootstrapper.ensMarket +
                  ' res_' +
                  C2C.RWD.deviceBucket +
                  ' res_' +
                  C2C.RWD.roundedWidth;
              delCookie('lp_flg');
              isChatActive = false;
              showChatWizContainerVisibility(false);
              dockButtonHandler();
              clearInterval(webserviceTimer);
            } catch (e) {}
          }
          function flashMainPageTitle () {
            originalSiteTitle = document.title;
            titleTimer = setInterval(function () {
              logger.debug('flashMainPageTitle', 'originalSiteTitle....' + originalSiteTitle);
              if (document.title == lpCWTagConst.lpNewChatMsgArrive) {
                document.title = originalSiteTitle;
              } else {
                document.title = lpCWTagConst.lpNewChatMsgArrive;
              }
            }, 800);
          }
          function flashingStart () {
            logger.debug('in lpFlashingStart', ' starting...');
            var titleDiv = document.getElementById('lpChatTitleContainerMin');
            var titleText = document.getElementsByClassName('lpChatHeaderText')[1];
            document.getElementById('lpChatTitleContainerMin').className = 'flashButton';
            logger.debug('in lpFlashingStart::', titleDiv.style.backgroundColor);
            logger.debug('in lpFlashingStart::', titleText.style.color);
            logger.debug('in lpFlashingStart::', msgIconPos.style.maringTop);
            logger.debug('in lpFlashingStart', ' stopping...');
          }
          function flashingStop () {
            logger.debug('lpFlashingStop', ' stoppping...');
            var titleDiv = document.getElementById('lpChatTitleContainerMin');
            var titleText = document.getElementsByClassName('lpChatHeaderText')[1];
            var removeFlash = document.getElementById('lpChatTitleContainerMin');
            removeFlash.className = '';
            var msgIconPos = document.getElementById('lpMessageIconPos');
            clearInterval(lpCWTagConst.lpTitleFlashingTimer);
            titleDiv.style.backgroundColor = '#002665';
            titleText.style.color = 'white';
            if (
              document.getElementById('lpMessageIconPos').className.indexOf('animateIcon') != -1
            ) {
              document.getElementById('lpMessageIconPos').className =
                'lpChatTitleContainerLogo lpLeft lpCustSpriteBackground lpCustChatLogoSmall';
            }
            stopanimate = true;
            document.getElementById('lpMessageIconPos').style.top = '';
            lpCWTagConst.lpTitleFlashingTimer = undefined;
            if (lpCWTagConst.enableSiteTitleFlashing) {
              document.title = originalSiteTitle;
              originalSiteTitle = '';
            }
            logger.debug('lpFlashingStop', ' stoppping... ending');
          }
          function chaticonmoveup () {
            if (!stopanimate) {
              ccount++;
              chatlogomin.style.top = parseInt(chatlogomin.offsetTop) - 1 + 'px';
              if (ccount < 27) setTimeout(chaticonmoveup, 15);
              else {
                ccount = 0;
                chaticonmovedown();
              }
            }
          }
          function chaticonmovedown () {
            if (!stopanimate) {
              ccount++;
              chatlogomin.style.top = parseInt(chatlogomin.offsetTop) + 1 + 'px';
              if (ccount < 27) setTimeout(chaticonmovedown, 15);
              else {
                ccount = 0;
                chaticonmovehalfup();
              }
            }
          }
          function chaticonmovehalfup () {
            if (!stopanimate) {
              ccount++;
              chatlogomin.style.top = parseInt(chatlogomin.offsetTop) - 1 + 'px';
              if (ccount < 7) setTimeout(chaticonmovehalfup, 15);
              else {
                ccount = 0;
                chaticonsmovehalfdown();
              }
            }
          }
          function chaticonsmovehalfdown () {
            if (!stopanimate) {
              ccount++;
              chatlogomin.style.top = parseInt(chatlogomin.offsetTop) + 1 + 'px';
              if (ccount < 7) setTimeout(chaticonsmovehalfdown, 15);
              else {
                ccount = 0;
                setTimeout(chaticonmoveup, 500);
              }
            }
          }
          function showChatWizContainerVisibility (bVal, minmax) {
            try {
              logger.debug('showChatWizContainerVisibility', '...');
              if (bVal) {
                if (typeof minmax == 'undefined') {
                  showElement(chatWizContainer);
                  document.getElementsByClassName('lpChatHeaderTextmin')[0].innerHTML = 'Chat';
                  document.getElementById('lpChatTitleContainerMin').style.width = '100px';
                  sendPostMessage({
                    lpEmbChatWiz: 'LPNVCF',
                    CMD: 'CONTROL',
                    value: 'CHAT_LOADED',
                  });
                  try {
                    if (
                      document.querySelectorAll('#lpChatWizContainer.res_Small').length > 0 ||
                      device.mobile()
                    ) {
                      if (document.getElementById('qfb') == null) {
                        var qFBsheet = document.createElement('style');
                        qFBsheet.id = 'qfb';
                        qFBsheet.innerHTML =
                          '.QSIFeedBackLink {display: none !important} .QSIPopOver {z-index:99 !important};';
                        document.body.appendChild(qFBsheet);
                      }
                      if (
                        document.getElementById('lpChatTitleContainer').style.display != 'none'
                      ) {
                        addblurtoparent();
                        if (isIPhone && !isIOSChrome) {
                          document.body.style.overflowY = 'hidden';
                          document.body.style.position = 'fixed';
                        }
                      }
                      var viewport = document.querySelector('meta[name=viewport]');
                      if (typeof viewport !== 'undefined' && viewport != null) {
                        viewport.setAttribute(
                          'content',
                          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                        );
                      } else {
                        var metaTag = document.createElement('meta');
                        metaTag.name = 'viewport';
                        metaTag.content =
                          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
                        document.getElementsByTagName('head')[0].appendChild(metaTag);
                      }
                    }
                  } catch (e) {}
                } else {
                  hideElement(chatWizContainer);
                  document.getElementsByClassName('lpChatHeaderTextmin')[0].innerHTML = 'Chat';
                  document.getElementById('lpChatTitleContainerMin').style.width = '100px';
                  showMinimizeHandler('minimize');
                }
              } else {
                hideElement(chatWizContainer);
                try {
                  if (
                    document.querySelectorAll('#lpChatWizContainer.res_Small').length > 0 ||
                    device.mobile()
                  ) {
                    if (isIPhone && !isIOSChrome) {
                      document.body.style.overflowY = 'auto';
                      document.body.style.position = '';
                    }
                    removeblurfromparent();
                    var viewport = document.querySelector('meta[name=viewport]');
                    if (typeof viewport !== 'undefined' && viewport != null) {
                      viewport.setAttribute(
                        'content',
                        'width=device-width, initial-scale=1.0, user-scalable=yes'
                      );
                    }
                    var sheetToBeRemoved = document.getElementById('qfb');
                    var sheetParent = sheetToBeRemoved.parentNode;
                    sheetParent.removeChild(sheetToBeRemoved);
                  }
                } catch (e) {}
              }
            } catch (e) {}
          }
          function makeHeader () {
            var headerStr = '';
            try {
              headerStr =
                '<div id="lpChatTitleContainer" class="lpRight">' + makeHeaderContent() + '</div>';
            } catch (e) {}
            return headerStr;
          }
          myUI.remakeHeaderOnResize = function () {
            try {
              var lpChatTitleContainerDiv = getElement('lpChatTitleContainer');
              lpChatTitleContainerDiv.innerHTML = makeHeaderContent();
              myUI.rebindHeaderEvents();
            } catch (e) {}
          };
          myUI.rebindHeaderEvents = function () {
            unBindEvent(getElement('lpChatMinizeBtn'), 'click', showMinimizeHandler);
            bindEvent(getElement('lpChatMinizeBtn'), 'click', showMinimizeHandler);
            unBindEvent(getElement('lpChatMinizeBtn'), 'keydown', function () {
              showMinimizeHandlerforEnterKey(event);
            });
            bindEvent(getElement('lpChatMinizeBtn'), 'keydown', function () {
              showMinimizeHandlerforEnterKey(event);
            });
            unBindEvent(getElement('lpChatMinizeBtn'), 'mouseover', function () {
              showMouseOverToolTip('lpChatMinizeBtn');
            });
            bindEvent(getElement('lpChatMinizeBtn'), 'mouseover', function () {
              showMouseOverToolTip('lpChatMinizeBtn');
            });
            unBindEvent(getElement('lpChatMinizeBtn'), 'mouseout', removeMouseOverToolTip);
            bindEvent(getElement('lpChatMinizeBtn'), 'mouseout', removeMouseOverToolTip);
            unBindEvent(getElement('lpChatEndChatBtn'), 'click', closeButtonClicked);
            bindEvent(getElement('lpChatEndChatBtn'), 'click', closeButtonClicked);
            unBindEvent(getElement('lpChatEndChatBtn'), 'keydown', function () {
              closeButtonClickedforEnterkey(event);
            });
            bindEvent(getElement('lpChatEndChatBtn'), 'keydown', function () {
              closeButtonClickedforEnterkey(event);
            });
            unBindEvent(getElement('lpChatEndChatBtn'), 'mouseover', function () {
              showMouseOverToolTip('lpChatEndChatBtn');
            });
            bindEvent(getElement('lpChatEndChatBtn'), 'mouseover', function () {
              showMouseOverToolTip('lpChatEndChatBtn');
            });
            unBindEvent(getElement('lpChatEndChatBtn'), 'mouseout', removeMouseOverToolTip);
            bindEvent(getElement('lpChatEndChatBtn'), 'mouseout', removeMouseOverToolTip);
            unBindEvent(getElement('lpChatTitleDragArea'), 'mousedown', showGrabPointer);
            bindEvent(getElement('lpChatTitleDragArea'), 'mousedown', showGrabPointer);
            unBindEvent(getElement('lpChatTitleDragArea'), 'mouseup', hideGrabPointer);
            bindEvent(getElement('lpChatTitleDragArea'), 'mouseup', hideGrabPointer);
            unBindEvent(getElement('lpChatTitleDragArea'), 'mouseleave', hideGrabPointer);
            bindEvent(getElement('lpChatTitleDragArea'), 'mouseleave', hideGrabPointer);
          };
          function makeHeaderContent () {
            var headerContentStr = '';
            try {
              var isSmDevice =
                C2C.RWD.deviceBucket != null && C2C.RWD.deviceBucket.indexOf('Small') !== -1;
              var chatTitle = isSmDevice
                ? lpCWTagConst.lpSmDevChatTitleVal
                : lpCWTagConst.lpChatTitleVal;
              headerContentStr =
                (isSmDevice
                  ? '<div class="lpLeft lpHeaderActionbuttonsContainer" style="">' +
                    '<div class="lpHeaderActionbuttons lpHoverButton lpPointer" data-msg="Minimize" id="lpChatMinizeBtn" tabindex="0">' +
                    '<span id="lpChatMinizeBtnImg" class="lpPointer lpCustSpriteBackground lpCustChatIconMinimize" ></span></div>' +
                    '</div>'
                  : '') +
                '<div id="lpChatTitleDragArea" class="lpLeft"><div class="lpLeft lpChatLogoContainer"><span class="lpChatTitleContainerLogo lpLeft lpCustSpriteBackground lpCustChatLogoSmall lpChatHeaderIcon" ></span></div>' +
                '<div id="lpChatTitleTxt" class="lpLeft lpChatHeaderText noselect" unselectable="on">' +
                chatTitle +
                '</div></div>' +
                '<div class="lpRight lpHeaderActionbuttonsContainer" style="">' +
                (isSmDevice
                  ? ''
                  : '<div class="lpHeaderActionbuttons lpHoverButton lpPointer" data-msg="Minimize" id="lpChatMinizeBtn" tabindex="0"><span id="lpChatMinizeBtnImg" class="lpPointer lpCustSpriteBackground lpCustChatIconMinimize" ></span></div>') +
                '<div class="lpHeaderActionbuttons lpHoverButton lpPointer" data-msg="End Chat" id="lpChatEndChatBtn" tabindex="0"><span class="lpPointer lpCustSpriteBackground lpCustChatIconClose"></span></div>' +
                '</div><div class="lpClear"></div>' +
                '</div><div class="lpClear">';
            } catch (e) {}
            return headerContentStr;
          }
          function makeHeaderForMin () {
            var lpMinHeader = document.createElement('div');
            lpMinHeader.id = 'lpChatTitleContainerMin';
            lpMinHeader.className = 'lpRight';
            lpMinHeader.style.display = 'block';
            lpMinHeader.innerHTML =
              '<div id="lpChatTitleDragAreaMin" class="lpLeft"><div class="lpLeft"><span id="lpMessageIconPos" class="lpChatTitleContainerLogo lpLeft lpCustSpriteBackground lpCustChatLogoSmall lpChatHeaderIcon"><span id="showMsgCount" style="display:none;"></span></span></div><div id="lpChatTitleTxt" class="lpLeft lpChatHeaderText noselect lpChatHeaderTextmin" unselectable="on">Chat</div><div class="lpRight lpHeaderActionbuttonsContainer" style=""><div class="lpHeaderActionbuttons lpHoverButton lpPointer" data-msg="Maximize" id="lpChatMaximizeBtn" tabindex="0"><span id="lpChatMaximizeBtnImg" class="lpPointer lpCustSpriteBackground lpCustChatIconMaximize"></span></div></div></div><div class="lpHeaderActionbuttons lpHoverButton lpPointer" data-msg="End Chat" id="lpChatEndChatBtnMin" tabindex="0"><span class="lpPointer lpCustSpriteBackground lpCustChatIconClose"></span></div><div class="lpClear"></div>';
            chatWizContainer.appendChild(lpMinHeader);
          }
          function makeLandscapeDivForMin () {
            try {
              if (!document.getElementById('landscapeDiv')) {
                var landscapeDiv = document.createElement('div');
                landscapeDiv.id = 'landscapeDiv';
                landscapeDiv.style.display = 'none';
                landscapeDiv.innerHTML =
                  '<div class="rotate-div"><div class="rotate-img"><img src="https://icm.aexp-static.com/content/dam/chat/prod/lechat/img/Rotate-Device.png" ></div><div class="rotate-text">Please rotate your device</div></div>';
                chatWizContainer.appendChild(landscapeDiv);
              }
            } catch (e) {}
          }
          function makeHoverDiv (msg, pDownArrow) {
            removeMouseOverToolTip();
            var messageDiv = document.createElement('div');
            messageDiv.className = pDownArrow ? 'lpBubbleUp' : 'lpBubbleDown';
            messageDiv.id = 'lpToolTipContent';
            messageDiv.innerHTML = msg;
            return messageDiv;
          }
          function removeMouseOverToolTip () {
            logger.debug('removeMouseOverToolTip', 'delete tooltip');
            removeElement(getElement('lpToolTipContent'));
          }
          myUI.endChatRequest = function () {
            closeButtonClicked();
          };
          myUI.debugEnable = function () {
            lpCWTagConst.DEBUG_ENABLE = true;
            sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'DEBUG', value: 'ENABLE' });
          };
          myUI.debugDisable = function () {
            lpCWTagConst.DEBUG_ENABLE = false;
            sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'DEBUG', value: 'DISABLE' });
          };
          myUI.debug = function (pLogName, pData) {
            logger.debug(pLogName, pData);
          };
          myUI.startSMSFlow = function (data) {
            var bbCookie = getCookie_AA('blueboxpublic');
            var cType = 'US-SMS-en-GCA';
            if (smsChat_pageName === 'nl-help') {
              sendPostMessage({
                lpEmbChatWiz: 'LPNVCF',
                CMD: 'CONTROL',
                value: 'lpStartChatButtonClicked',
                pageurl: location.search.substring(1),
                nuanceFlowFlag: '',
                sendAddlineTrigger: true,
                xcutobj: '',
                bbCookie: bbCookie,
                lpexpansion: 'sms',
                jwtValue: '',
                sidvid: '',
                cType: cType,
                skill: cType,
                firsttimelogin: false,
                visitorId: sms_data.svid,
                sessionId: sms_data.ssid,
                interactionContextId: data.scid,
                cid: sms_data.cid,
                eid: sms_data.eid,
                chatPriority: false,
                isSMSChat: true,
              });
            } else {
              sendPostMessage({
                lpEmbChatWiz: 'LPNVCF',
                CMD: 'CONTROL',
                value: 'lpStartChatButtonClicked',
                pageurl: location.search.substring(1),
                nuanceFlowFlag: '',
                sendAddlineTrigger: true,
                xcutobj: '',
                bbCookie: bbCookie,
                lpexpansion: 'sms',
                jwtValue: '',
                sidvid: '',
                cType: cType,
                skill: cType,
                firsttimelogin: false,
                visitorId: data.svid,
                sessionId: data.ssid,
                interactionContextId: data.scid,
                cid: data.cid,
                eid: data.eid,
                chatPriority: false,
                isSMSChat: false,
                lpexpansion: 'credit',
                smspage: 'payment',
              });
            }
          };
          myUI.updateOrientation = function (deviceBucket, roundedWidth) {
            sendPostMessage({
              lpEmbChatWiz: 'LPNVCF',
              CMD: 'ORIENTATION',
              deviceBucket: C2C.RWD.deviceBucket,
              roundedWidth: C2C.RWD.roundedWidth,
              deviceHeight: window.innerHeight,
            });
            sendPostMessageToRCWidget({
              CMD: 'LENO_ORIENTATION',
              deviceBucket: C2C.RWD.deviceBucket,
              roundedWidth: C2C.RWD.roundedWidth,
              deviceHeight: window.innerHeight,
            });
          };
          myUI.loadChat = function (data) {
            logger.debug('loadChat', 'method invoked');
            lpChatBuildFrame(false);
            var iFrameContentTimerCounter = 0;
            var iFrameContentTimer = setInterval(function () {
              iFrameContentTimerCounter += 500;
              if (iFrameContentTimerCounter >= 30000) {
                clearInterval(iFrameContentTimer);
                logger.info(
                  'loadChat',
                  'iframe content exceeded maximun load time of ' +
                    iFrameContentTimerCounter +
                    ' seconds. Suggest to reload page'
                );
              } else {
                try {
                  logger.debug(
                    'loadChat',
                    'waiting for iFrame content to load..chatFrameLoaded=' + chatFrameLoaded
                  );
                  if (chatFrameLoaded) {
                    if (smsForChat) {
                      clearInterval(iFrameContentTimer);
                      myUI.startSMSFlow(data);
                    } else {
                      logger.debug('loadChat', 'iFrame content fully loaded');
                      if (
                        typeof lpTag != 'undefined' &&
                        typeof lpTag.exp_value != 'undefined' &&
                        lpTag.exp_value != ''
                      )
                        expansionFlag = lpTag.exp_value;
                      var bbCookie = getCookie_AA('blueboxpublic');
                      var xcutobj = getCrossCutData();
                      lenosToken = getDataFromCrossCut(xcutobj, xcutType, 'sToken');
                      var logsToken = lenosToken;
                      var defaultSkill = 'offline';
                      if (typeof window.lpChatSkill != 'undefined') {
                        defaultSkill = window.lpChatSkill;
                      }
                      if (document.getElementById('oceLayer') != null) firsttimelogin = 'true';
                      var cType = '';
                      if (
                        typeof lpTag.sdes.get('ctmrinfo') != 'undefined' &&
                        typeof lpTag.sdes.get('ctmrinfo')[0] != 'undefined' &&
                        typeof lpTag.sdes.get('ctmrinfo')[0].info != 'undefined'
                      ) {
                        cType = lpTag.sdes.get('ctmrinfo')[0].info.ctype;
                      }
                      var sidvid = '';
                      if (
                        typeof lpTag.taglets != 'undefined' &&
                        typeof lpTag.taglets.lp_monitoringSDK != 'undefined'
                      ) {
                        sidvid = lpTag.taglets.lp_monitoringSDK.getVid();
                      }
                      var jwtTimer = setInterval(function () {
                        if (jwtValue !== '') {
                          clearInterval(jwtTimer);
                          try {
                            var corrId =
                              Math.floor((1 + Math.random()) * 65536)
                                .toString(16)
                                .substring(1) +
                              '-' +
                              Math.floor((1 + Math.random()) * 65536)
                                .toString(16)
                                .substring(1);
                            invokeUILog(
                              corrId,
                              'INFO',
                              ' blueboxpublic:' +
                                getCookie_AA('blueboxpublic') +
                                ' chatPriority:' +
                                intiatedFromChatPrioritization +
                                ' sToken:' +
                                lenosToken +
                                ' OverallPriority:' +
                                JSON.parse(xcutobj).creditPriority
                            );
                          } catch (e) {}
                          sendPostMessage({
                            lpEmbChatWiz: 'LPNVCF',
                            CMD: 'CONTROL',
                            value: 'lpStartChatButtonClicked',
                            pageurl: location.search.substring(1),
                            nuanceFlowFlag: lpTestPopulation.toUpperCase(),
                            sendAddlineTrigger: true,
                            xcutobj: xcutobj,
                            bbCookie: bbCookie,
                            lpexpansion: expansionFlag,
                            jwtValue: '',
                            sidvid: sidvid,
                            cType: cType,
                            skill: cType,
                            firsttimelogin: firsttimelogin,
                            visitorId: data.svid,
                            sessionId: data.ssid,
                            interactionContextId: data.scid,
                            cid: data.cid,
                            eid: data.eid,
                            chatPriority: intiatedFromChatPrioritization,
                          });
                          intiatedFromChatPrioritization = false;
                          setlpchatActiveCookie1('levisitorId', data.svid);
                          setlpchatActiveCookie1('lesessionId', data.ssid);
                          setlpchatActiveCookie1('leinteractionContextId', data.scid);
                          setlpchatActiveCookie1('lecid', data.cid);
                          setlpchatActiveCookie1('leeid', data.eid);
                          setlpchatActiveCookie2('lpToken', lenosToken);
                        }
                      }, 500);
                      showMaximizeHandler(true);
                      clearInterval(iFrameContentTimer);
                    }
                  }
                } catch (e) {}
              }
            }, 500);
          };
          myUI.chatOnPageLoad = function () {
            logger.info('chatOnPageLoad', 'starting...');
            lpChatBuildFrame(true);
          };
          myUI.registerOnMessage = function () {
            if (window.addEventListener) {
              window.addEventListener('message', myUI.receiveChatPostMessage, false);
            } else {
              window.attachEvent('onmessage', myUI.receiveChatPostMessage);
            }
          };
          myUI.receiveChatPostMessage = function (e) {
            logger.debug('in receive of bootstrapp file ');
            if (lpCWTagConst.DEBUG_ENABLE && isSameOrigin(e.origin)) {
              logger.debug('receiveChatPostMessageParent', e.data);
            }
            try {
              var msgData = JSON.parse(e.data);
              logger.debug('in bootstrap receiveChatPostMessageParent value::::', msgData.value);
              logger.debug('in bootstrap receiveChatPostMessageParent cmd::::', msgData.CMD);
              if (msgData.isSliderEnabled == 'true') {
                if (!lenofromReload) {
                  if (msgData.type == 'offer') lenoofferCount = lenoofferCount + 1;
                  else if (msgData.type == 'locOffer') lenolocofferCount = lenolocofferCount + 1;
                  else lenosecCount = lenosecCount + 1;
                }
                if (msgData.offerId.indexOf('Q_') != 0) {
                  if (msgData.type == 'offer') {
                    sendPostMessage({
                      lpEmbChatWiz: 'LPNVCF',
                      CMD: 'LENOOFFERCOUNT',
                      value: lenosToken + '_' + lenoofferCount,
                      TYPE: 'OFFER',
                    });
                  } else {
                    sendPostMessage({
                      lpEmbChatWiz: 'LPNVCF',
                      CMD: 'LENOOFFERCOUNT',
                      value: lenosToken + '_' + lenolocofferCount,
                      TYPE: 'LOCOFFER',
                    });
                  }
                } else
                  sendPostMessage({
                    lpEmbChatWiz: 'LPNVCF',
                    CMD: 'LENOSECCOUNT',
                    value: lenosToken + '_' + lenosecCount,
                  });
                var elem = document.createElement('div');
                elem.innerHTML = msgData.offerName;
                tmpElem = elem.innerHTML;
                tmpElem = tmpElem.replace(/[^a-zA-Z0-9 ]/g, '');
                if (!lenofromReload) {
                  if (msgData.paperless == true) {
                    sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'DISP_PPRLSS_DLVRY_MSG' });
                  } else {
                    sendPostMessage({
                      lpEmbChatWiz: 'LPNVCF',
                      CMD: 'DISPLAY_SYSMSG',
                      value: 'Secured form has been received',
                    });
                  }
                  var rcOpenarray = [];
                  var ts1, ts2;
                  if (msgData.type == 'offer') {
                    ts1 = 'RC_offer_sent' + lenoofferCount + '|' + 'true';
                    ts2 = 'RC_offer_name' + lenoofferCount + '|' + tmpElem + '_' + msgData.offerId;
                    rcOpenarray.push(ts1);
                    rcOpenarray.push(ts2);
                  } else if (msgData.type == 'locOffer') {
                    ts1 = 'RC_offer_LineIncrease_sent' + lenolocofferCount + '|' + 'true';
                    ts2 = 'RC_offer_LineIncrease_name' + lenolocofferCount + '|' + tmpElem;
                    rcOpenarray.push(ts1);
                    rcOpenarray.push(ts2);
                  } else {
                    ts1 = 'Secure Widget Sent' + lenosecCount + '|' + 'true';
                    ts2 = 'Secure Question' + lenosecCount + '|' + tmpElem;
                    rcOpenarray.push(ts1);
                    rcOpenarray.push(ts2);
                  }
                  lpTag.sdes = lpTag.sdes || [];
                  lpTag.sdes.push({ type: 'searchInfo', keywords: rcOpenarray });
                }
                setTimeout(function () {
                  window.scroll(0, 0);
                }, 10);
                lenofromReload = false;
              }
              if (msgData.isSliderDisabled == 'true') {
                sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'REMOVELENOSESSION' });
                var rcClosearray = [];
                var ts1, ts2;
                if (msgData.type == 'offer') {
                  ts1 = 'RC_offer_status' + lenoofferCount + '|' + msgData.offerStatus;
                  rcClosearray.push(ts1);
                } else if (msgData.type == 'locOffer') {
                  ts1 =
                    'RC_offer_LineIncrease_status' + lenolocofferCount + '|' + msgData.offerStatus;
                  rcClosearray.push(ts1);
                } else {
                  ts1 = 'Secure Widget Status' + lenosecCount + '|' + msgData.offerStatus;
                  rcClosearray.push(ts1);
                }
                if (msgData.type == 'offer' && typeof msgData.cardcount != 'undefined') {
                  ts2 = 'RC_Offer_CardsAdded' + lenoofferCount + '|' + msgData.cardcount;
                  rcClosearray.push(ts2);
                }
                lpTag.sdes = lpTag.sdes || [];
                lpTag.sdes.push({ type: 'searchInfo', keywords: rcClosearray });
                document.getElementById('lnChatiFrame').style.height = '0px';
                document.getElementById('leno-ChatiFrameContainer').style.display = 'none';
                if (
                  typeof msgData.ccpcancelled != 'undefined' &&
                  msgData.ccpcancelled == 'true' &&
                  typeof msgData.paperless != 'undefined' &&
                  msgData.paperless != true
                ) {
                  sendPostMessage({
                    lpEmbChatWiz: 'LPNVCF',
                    CMD: 'DISPLAYCCPMSG',
                    type: msgData.type,
                  });
                } else if (typeof msgData.paperless != 'undefined' && msgData.paperless == true) {
                  sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'DISP_CANCEL_MSG' });
                } else if (msgData.offerStatus == 'cancelled') {
                  sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'DISP_CANCEL_MSG' });
                }
                isFirstSlider = true;
              }
              if (msgData.isLnChatFrameLoaded == 'true') {
                if (sendMessage) {
                  sendPostMessageToRCWidget({ LNCSFRMBOOTSTRAP: LNVALUEfromSession });
                  sendMessage = false;
                }
              }
              if (msgData.LNCMSTATE == 'true') {
                refreshAddLine();
                var RCWidgetStepNo = JSON.parse(msgData.value).stepNo;
                RCWidgetStepSize = msgData.size;
                document.getElementById('leno-ChatiFrameContainer').style.border = 'none';
                document.getElementById('leno-ChatiFrameContainer').style.width = '100%';
                if (JSON.parse(msgData.value).offerId.indexOf('Q_') == 0 && RCWidgetStepNo == 1) {
                  document.getElementById('leno-ChatiFrameContainer').style.height = '153px';
                  document.getElementById('lnChatiFrame').style.height = '153px';
                  document.getElementById('leno-ChatiFrameContainer').style.display = 'block';
                } else {
                  if (JSON.parse(msgData.value).offerId.indexOf('Q_') != 0) {
                    if (RCWidgetStepSize > 232 && RCWidgetStepNo !== 2) {
                      var lenoChatiFrameContainerHeight = checkVersionAndReturnHeight();
                      document.getElementById('leno-ChatiFrameContainer').style.height =
                        lenoChatiFrameContainerHeight + 'px';
                    } else {
                      document.getElementById('leno-ChatiFrameContainer').style.height =
                        RCWidgetStepSize + 'px';
                    }
                  }
                }
                if (isFirstSlider) {
                  document.getElementById('leno-ChatiFrameContainer').style.position = 'absolute';
                  document.getElementById('leno-ChatiFrameContainer').style.marginLeft = '-11px';
                  document.getElementById('leno-ChatiFrameContainer').style.borderRadius = '0';
                  document.getElementById('leno-ChatiFrameContainer').style.boxShadow = 'none';
                  document.getElementById('lnChatiFrame').style.width = '100%';
                  document.getElementById('lnChatiFrame').style.height = '0px';
                  document.getElementById('leno-ChatiFrameContainer').style.display = 'block';
                  if (JSON.parse(msgData.value).offerId.indexOf('Q_') == 0) {
                    document.getElementById('lnChatiFrame').style.height = '153px';
                  } else {
                    if (RCWidgetStepSize > 232 && RCWidgetStepNo !== 2) {
                      var lnChatiFrameHeight = checkVersionAndReturnHeight();
                      document.getElementById('lnChatiFrame').style.height =
                        lnChatiFrameHeight + 'px';
                    } else {
                      document.getElementById('lnChatiFrame').style.height =
                        RCWidgetStepSize + 'px';
                    }
                  }
                } else {
                  if (JSON.parse(msgData.value).offerId.indexOf('Q_') != 0) {
                    if (RCWidgetStepNo == 1) {
                      document.getElementById('leno-ChatiFrameContainer').style.display = 'block';
                    }
                    if (RCWidgetStepSize > 232 && RCWidgetStepNo !== 2) {
                      var lnChatiFrameHeight = checkVersionAndReturnHeight();
                      document.getElementById('lnChatiFrame').style.height =
                        lnChatiFrameHeight + 'px';
                    } else {
                      document.getElementById('lnChatiFrame').style.height =
                        RCWidgetStepSize + 'px';
                    }
                  }
                }
                sendPostMessage({
                  lpEmbChatWiz: 'LPNVCF',
                  CMD: 'EXTENDSESSION',
                  value: msgData.value,
                  size: RCWidgetStepSize,
                });
                setTimeout(function () {
                  if (
                    isFirstSlider &&
                    (JSON.parse(msgData.value).stepNo == '1' || msgData.reload == 'true')
                  ) {
                    if (JSON.parse(msgData.value).offerId.indexOf('Q_') != 0) {
                      sendPostMessageToRCWidget({
                        lpEmbChatWiz: 'LPNVCF',
                        CMD: 'RESENDHGT',
                        stepNo: RCWidgetStepNo,
                      });
                    }
                    isFirstSlider = false;
                  }
                }, 250);
              }
              if (msgData.RESENDHGT == 'true') {
                var size = msgData.size;
                if (size > 232 && msgData.stepNo !== 2) {
                  size = checkVersionAndReturnHeight();
                }
                document.getElementById('leno-ChatiFrameContainer').style.height = size + 'px';
                document.getElementById('lnChatiFrame').style.height = size + 'px';
                sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'RESENDHGT', size: size });
                if (
                  document.getElementById('lpChatTitleContainer').style.display == 'none' &&
                  msgData.size <= 0
                ) {
                  pollforheight = true;
                }
              }
              if (msgData.RESENDHGT_ADDRESSCHECK == 'true') {
                var size = msgData.size;
                document.getElementById('leno-ChatiFrameContainer').style.height = size + 'px';
                document.getElementById('lnChatiFrame').style.height = size + 'px';
                sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'RESENDHGT', size: size });
              }
              if (msgData.LNSTATUS == 'true') {
                if (msgData.type == 'offer') {
                } else {
                }
                if (msgData.nameoncard != '') {
                }
              }
              if (msgData.openinterstitial == 'true') {
                if (window.location.href.indexOf('accountprofile/us/view.do') != -1) {
                  var xcutData = getCrossCutData();
                  MycaAssist.interstitial.paperless.display(xcutData);
                } else {
                  setCookie('lp_ppl', 'true', null, 10);
                  sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'DISP_THNKU_MSG' });
                  setTimeout(function () {
                    window.location =
                      'https://online.americanexpress.com/myca/accountprofile/us/view.do?request_type=authreg_sdo&linknav=US-Ser-axpAccountManagement-PaperlessSettings&action=stmtopt&Face=en_US&sorted_index=0';
                  }, 2000);
                }
              }
              if (msgData.lpEmbChatWiz == 'LPNVPF') {
                logger.debug('receiveChatPostMessageParent::::', msgData.lpEmbChatWiz);
                if (msgData.CMD == 'GETSTOKENQUERY') {
                  sTokenRes = msgData.value;
                }
                if (msgData.CMD == 'UIDESIGN') {
                  logger.debug(
                    'in bootstrap receiveChatPostMessageParent cmd inside UIDESIGN::::',
                    msgData.CMD
                  );
                  if (msgData.value == 'FROMRESTABLISH') {
                    if (window.location.href.indexOf('ssearch.jsp') > -1) {
                      IOA.globalRule.sendAddlineTrigger = true;
                    }
                    if (typeof timeoutWidget != 'undefined') {
                      IOA.globalRule.sendAddlineTrigger = true;
                    }
                    if (
                      window.location.href.indexOf('travel') > -1 ||
                      window.location.href.indexOf('iseatz.com') > -1
                    ) {
                      IOA.globalRule.sendAddlineTrigger = true;
                    }
                    if (window.location.href.indexOf('e1qglobal2.americanexpress.com') > -1) {
                      window.IOA = {};
                      IOA.globalRule = { sendAddlineTrigger: true };
                    }
                    var xcutforrestablish;
                    var xcutvid;
                    var xcutctype;
                    var bbCookie = getCookie_AA('blueboxpublic');
                    if (typeof lpTag !== 'undefined' && typeof lpTag.taglets !== 'undefined') {
                      xcutvid = lpTag.taglets.lp_monitoringSDK.getVid();
                    }
                    if (
                      typeof lpTag !== 'undefined' &&
                      typeof lpTag.sdes !== 'undefined' &&
                      typeof lpTag.sdes.get('ctmrinfo') !== 'undefined'
                    ) {
                      xcutctype = lpTag.sdes.get('ctmrinfo')[0].info.ctype;
                    }
                    xcutforrestablish = getCrossCutData();
                    if (document.getElementById('oceLayer') != null) firsttimelogin = 'true';
                    if (
                      typeof lpTag != 'undefined' &&
                      typeof lpTag.exp_value != 'undefined' &&
                      lpTag.exp_value != ''
                    )
                      expansionFlag = lpTag.exp_value;
                    sendPostMessage({
                      lpEmbChatWiz: 'LPNVCF',
                      CMD: 'TORESTABLISH',
                      value: window.location.href,
                      sendAddlineTrigger: IOA.globalRule.sendAddlineTrigger,
                      xcutobj: xcutforrestablish,
                      lpexpansion: expansionFlag,
                      sidvid: xcutvid,
                      cType: xcutctype,
                      firsttimelogin: firsttimelogin,
                      bbCookie: bbCookie,
                    });
                  }
                  if (msgData.value == 'FORXCUTRELOAD') {
                    var xcutforrestablish;
                    var xcutvid;
                    var xcutctype;
                    var bbCookie = getCookie_AA('blueboxpublic');
                    if (document.getElementById('oceLayer') != null) firsttimelogin = 'true';
                    try {
                      if (typeof lpTag !== 'undefined' && typeof lpTag.taglets !== 'undefined') {
                        xcutvid = lpTag.taglets.lp_monitoringSDK.getVid();
                      }
                    } catch (e) {
                      xcutvid = '';
                    }
                    try {
                      if (
                        typeof lpTag !== 'undefined' &&
                        typeof lpTag.sdes !== 'undefined' &&
                        typeof lpTag.sdes.get('ctmrinfo') !== 'undefined'
                      ) {
                        xcutctype = lpTag.sdes.get('ctmrinfo')[0].info.ctype;
                      }
                    } catch (e) {
                      xcutctype = '';
                    }
                    xcutforrestablish = getCrossCutData();
                    sendPostMessage({
                      lpEmbChatWiz: 'LPNVCF',
                      CMD: 'TOXCUTRELOAD',
                      xcutobj: xcutforrestablish,
                      sidvid: xcutvid,
                      cType: xcutctype,
                      firsttimelogin: firsttimelogin,
                      bbCookie: bbCookie,
                    });
                  }
                  if (msgData.value == 'HIDECLOSEBTN') {
                    logger.debug(
                      'in bootstrap receiveChatPostMessageParent cmd inside HIDECLSOE::::',
                      msgData.value
                    );
                  }
                  if (msgData.value == 'SHOWCLOSEBTN') {
                    logger.debug(
                      'in bootstrap receiveChatPostMessageParent cmd inside SHOWCLSOE::::',
                      msgData.value
                    );
                  }
                  if (msgData.value == 'TABONCLOSEBTN') {
                    logger.debug(
                      'in bootstrap receiveChatPostMessageParent cmd inside TABONCLOSEBTN::::',
                      msgData.value
                    );
                    document.getElementById('lpChatMinizeBtn').focus();
                  }
                  if (msgData.value == 'ADDLINES') {
                    refreshAddLine();
                    if (msgData.msgCount != undefined && msgData.msgCount != null) {
                      if (!chatMaximize) {
                        document.getElementById('showMsgCount').innerHTML = msgData.msgCount;
                        if (msgData.msgCount > 0) {
                          document.getElementById('showMsgCount').style.display = 'block';
                        } else {
                          document.getElementById('showMsgCount').style.display = 'none';
                        }
                      } else {
                        document.getElementById('showMsgCount').style.display = 'none';
                      }
                    }
                  }
                  if (msgData.value == 'CCPUNAVAILABLE') {
                    lpSendData('session', 'EWError', 'ccpunavailable' + msgData.ckValue);
                    lpSendData('session', 'EWError', msgData.chatObj);
                    lpSendData('session', 'EWError', msgData.context);
                  }
                  if (msgData.value == 'CANTCONNECT') {
                    lpSendData('session', 'EWError', 'cantconnect' + msgData.ckValue);
                    lpSendData('session', 'EWError', msgData.chatObj);
                    lpSendData('session', 'EWError', msgData.context);
                  }
                  if (msgData.value == 'SURVEY') {
                    lpSendData('session', 'EWError', 'Survey' + msgData.ckValue);
                  }
                  if (msgData.value == 'TIMESTAMP') {
                    lpSendData('session', 'EWInfo', 'Timestamp ' + msgData.ckValue);
                  }
                }
                if (msgData.CMD == 'FLASHING') {
                  logger.debug('receiveChatPostMessageParent::::', msgData.CMD);
                  if (msgData.value == 'START') {
                    logger.debug('receiveChatPostMessageParent::::', msgData.value);
                    flashingStart();
                  }
                } else if (msgData.CMD == 'REFRESH') {
                  window.parent.location.href = msgData.value;
                } else if (msgData.CMD == 'CONTROL') {
                  if (msgData.value == 'SETLPPARAMS3') {
                    setlpchatActiveCookie1('lpupdate', msgData.lpupdate);
                  } else if (msgData.value == 'FOCUS_CLOSE_BUTTON') {
                    document.getElementById('lpChatEndChatBtn').focus();
                  } else if (msgData.value == 'SHOW_CONTAINER') {
                    if (window.location.href.indexOf('chat-intlink') > -1) {
                      showChatWizContainerVisibility(true, 'minimize');
                    } else {
                      showChatWizContainerVisibility(true);
                    }
                    undockButtonHandler();
                  } else if (msgData.value === 'MINIMIZE_CONTAINER') {
                    if (msgData.minimizeChatWindow === 'true' && device.mobile()) {
                      showChatWizContainerVisibility(true, 'minimize');
                    }
                  } else if (msgData.value == 'DISP_END_CHAT_LAYER') {
                    if (
                      document.getElementById('lpChatTitleContainerMin').style.display == 'block'
                    ) {
                      document.getElementById('mainpageoverlay').style.display = 'none';
                      document.getElementById('mainpageprompt').style.display = 'none';
                      confirmDispalyFlag = true;
                    } else {
                      document.getElementById('mainpageoverlay').style.display = 'block';
                      document.getElementById('mainpageprompt').style.display = 'block';
                      document.getElementById('confirmButton').focus();
                    }
                  } else if (msgData.value == 'HIDE_END_CHAT_LAYER') {
                    document.getElementById('mainpageoverlay').style.display = 'none';
                    document.getElementById('mainpageprompt').style.display = 'none';
                  } else if (msgData.value == 'CLOSE_ENDCHAT_OVERLAY') {
                    confirmClicked = false;
                    document.getElementById('coBrowseWrapper').style.display = 'none';
                    document.getElementById('coBrowseWrapper').className = 'cobClose';
                  } else if (msgData.value == 'END_CHAT') {
                    chatlastrefreshtime = 0;
                    endChat();
                    if (document.getElementById('leno-ChatiFrameContainer') != null) {
                      document.getElementById('leno-ChatiFrameContainer').remove();
                    }
                  } else if (msgData.value == 'COBROWSE_INVITE') {
                    cob_sId = msgData.serviceId;
                    cob_aId = msgData.agentId;
                    var aName = msgData.cmName;
                    globalFirstName = aName;
                    setlpchatActiveCookie2('glbCnm', globalFirstName);
                    lpTag.events.publish('lpCoBrowse', 'cobrowseOffered', {
                      serviceId: cob_sId,
                      agentId: cob_aId,
                      visitorName: aName,
                      ssid: getCookie_AA('lesessionId'),
                      svid: getCookie_AA('levisitorId'),
                    });
                    document.getElementById('coBrowseWrapper').className = 'cobOpen';
                    document.getElementById('coBrowseWrapper').style.position = 'absolute';
                    document.getElementById('coBrowseWrapper').style.borderRadius = '0';
                    document.getElementById('coBrowseWrapper').style.boxShadow = 'none';
                    document.getElementById('coBrowseWrapper').style.display = 'block';
                    document.getElementById('coBrowseWrapper').style.height = '153px';
                    document.getElementById('coBrowseWrapper').style.width = '100%';
                    document.getElementById('coBrowseWrapper').style.zIndex = '100';
                    if (document.getElementById('lpChatTitleContainer').style.display == 'none') {
                      document.getElementById('coBrowseWrapper').style.display = 'none';
                    }
                    var lnInfo = '{"offerId":"Q_Cobrowse"}';
                    sendPostMessage({
                      lpEmbChatWiz: 'LPNVCF',
                      CMD: 'EXTENDSESSION',
                      value: lnInfo,
                      size: 153,
                    });
                  } else if (msgData.value == 'COBROWSE_CANCEL') {
                    document.getElementById('coBrowseWrapper').style.display = 'none';
                    sendPostMessage({ lpEmbChatWiz: 'LPNVCF', CMD: 'REMOVELENOSESSION' });
                  } else if (msgData.value == 'COBROWSE_ACCEPT') {
                    var sId = msgData.serviceId;
                    var aId = msgData.agentId;
                    var aName = '';
                    var xcutobj = getCrossCutData();
                    try {
                      aName = getDataFromCrossCut(xcutobj, xcutType, 'embossedName');
                    } catch (ex) {}
                    lpTag.events.publish('lpCoBrowse', 'cobrowseAccepted', {
                      serviceId: sId,
                      agentId: aId,
                      visitorName: aName,
                      ssid: getCookie_AA('lesessionId'),
                      svid: getCookie_AA('levisitorId'),
                    });
                  } else if (msgData.value == 'HIDE_CONTAINER') {
                    showChatWizContainerVisibility(false);
                  } else if (msgData.value == 'CHAT_STATE_ACTIVE') {
                    isChatActive = true;
                  } else if (msgData.value == 'CHAT_STATE_INACTIVE') {
                    isChatActive = false;
                    deletelpchatActiveCookie();
                  } else if (msgData.value == 'UPDATE_DRAG_AREA_SHOW_PCI') {
                    adjustWindowSizeForPCI();
                    isPciVisible = true;
                  } else if (msgData.value == 'UPDATE_DRAG_AREA_HIDE_PCI') {
                    adjustWindowSizeNonePCI();
                    isPciVisible = false;
                  } else if (msgData.value == 'SET_PRECHATACTIVECOOKIE') {
                    setlpchatActiveCookie();
                  } else if (msgData.value == 'SET_ACTIVECOOKIE') {
                    setlpchatActiveCookie();
                    if (msgData.MSGTIMER) {
                      isTimerStopped = false;
                      if (timeoutInterval != null) {
                        clearInterval(timeoutInterval);
                        timeoutInterval = null;
                      }
                      refreshTillTimeout(msgData.REFCTR);
                    }
                    var reloadstr;
                    if (msgData.LNVALUE == undefined) {
                      reloadstr = '&reload=false';
                    } else {
                      reloadstr = '&reload=true';
                      lenofromReload = true;
                    }
                    if (window.location.href.indexOf('lpsidvar') != -1) {
                      if (
                        window.lpMTagConfig != undefined &&
                        window.lpMTagConfig.LPSID_VAR != undefined &&
                        window.lpMTagConfig.LPSID_VAR != ''
                      ) {
                        lnChatBuildFrame(window.lpMTagConfig.LPSID_VAR, reloadstr);
                      }
                    } else {
                      if (lenosToken == '') {
                        lenosToken = getCookie_AA('lpToken');
                      }
                      sendMessage = false;
                      if (lenosToken != '') {
                        if (document.getElementById('leno-ChatiFrameContainer') == null) {
                          lnChatBuildFrame(lenosToken, reloadstr);
                          sendMessage = true;
                        }
                        setlpchatActiveCookie2('lpToken', lenosToken);
                      }
                    }
                    lenoofferCount = msgData.LNOFFERCNT;
                    lenosecCount = msgData.LNSECCNT;
                    lenolocofferCount = msgData.LNLOCOFFERCNT;
                    if (lenoofferCount != 0 || lenolocofferCount != 0) {
                      var validCount;
                      if (lenoofferCount != 0) {
                        validCount = lenoofferCount;
                      } else {
                        validCount = lenolocofferCount;
                      }
                      if (lenosToken == validCount.split('_')[0]) {
                        if (lenoofferCount != 0) {
                          lenoofferCount = parseInt(lenoofferCount.split('_')[1]);
                        }
                        if (lenolocofferCount != 0) {
                          lenolocofferCount = parseInt(lenolocofferCount.split('_')[1]);
                        }
                      } else {
                        sendPostMessage({
                          lpEmbChatWiz: 'LPNVCF',
                          CMD: 'REMOVELENOOFFERCOUNT',
                          value: '',
                        });
                        lenoofferCount = 0;
                        lenolocofferCount = 0;
                      }
                    }
                    if (lenosecCount != 0) {
                      if (lenosToken == lenosecCount.split('_')[0]) {
                        lenosecCount = parseInt(lenosecCount.split('_')[1]);
                      } else {
                        sendPostMessage({
                          lpEmbChatWiz: 'LPNVCF',
                          CMD: 'REMOVELENOSECCOUNT',
                          value: '',
                        });
                        lenosecCount = 0;
                      }
                    }
                    suid = msgData.LPSUID;
                    if (msgData.LNVALUE != undefined) {
                      LNVALUEfromSession = msgData.LNVALUE;
                    }
                  } else if (msgData.value == 'SET_MARVINACTIVECOOKIE') {
                    setmarvinchatActiveCookie();
                    if (msgData.MSGTIMER) {
                      refreshTillTimeout(msgData.REFCTR);
                    }
                  } else if (msgData.value == 'SET_RFRSHWAIT') {
                    refreshTillTimeout(msgData.REFCTR);
                  } else if (msgData.value == 'SETLPPARAMS1') {
                    setlpchatActiveCookie1('lpdata', msgData.cValue);
                  } else if (msgData.value == 'SETLPPARAMS2') {
                    setlpchatActiveCookie1('vid', msgData.vID);
                  } else if (msgData.value == 'LPCDATA') {
                    deletelpchatActiveCookie1('lpchat_active');
                    deletelpchatActiveCookie1('smschat_active');
                    deletelpchatActiveCookie1('marvinchat_active');
                    deletelpchatActiveCookie1('lpdata');
                    deletelpchatActiveCookie1('vid');
                    deletelpchatActiveCookie1('lpcoredata');
                    deletelpchatActiveCookie1('setatbbv');
                    deletelpchatActiveCookie1('setatesc');
                    deletelpchatActiveCookie1('setatcnvsid');
                    deletelpchatActiveCookie1('lpToken');
                    deletelpchatActiveCookie1('jwtVal');
                    deletelpchatActiveCookie1('levisitorId');
                    deletelpchatActiveCookie1('lesessionId');
                    deletelpchatActiveCookie1('leinteractionContextId');
                    deletelpchatActiveCookie1('lecid');
                    deletelpchatActiveCookie1('leeid');
                    deletelpchatActiveCookie1('lelastAgent');
                    deletelpchatActiveCookie1('lpstate');
                    deletelpchatActiveCookie1('lepriority');
                    delCookie('glbCnm');
                    if (timeoutInterval != null) {
                      clearInterval(timeoutInterval);
                      timeoutInterval = null;
                    }
                    if (sessionIntervalID != null) {
                      clearInterval(sessionIntervalID);
                      sessionIntervalID = null;
                    }
                    chatlasttimeout = true;
                    if (document.getElementById('leno-ChatiFrameContainer') != null) {
                      sendPostMessageToRCWidget({
                        lpEmbChatWiz: 'LPNVCF',
                        CMD: 'LENO_CLOSEWIDGET',
                      });
                      document.getElementById('lnChatiFrame').style.height = '0px';
                      document.getElementById('leno-ChatiFrameContainer').style.display = 'none';
                      setTimeout(function () {
                        if (document.getElementById('leno-ChatiFrameContainer') != null) {
                          document.getElementById('leno-ChatiFrameContainer').remove();
                        }
                      }, 3000);
                    }
                    isFirstSlider = true;
                  } else if (msgData.value == 'SET_RECMONITOR') {
                    setlpchatActiveCookie1('lprecmon', msgData.ckValue);
                  } else if (msgData.value == 'SET_LESTATE') {
                    setlpchatActiveCookie1('lpstate', msgData.ckValue);
                  } else if (msgData.value == 'SET_LPCOOKIE') {
                    setlpchatActiveCookie1('lpcoredata', msgData.ckValue);
                  } else if (msgData.value == 'SET_ATBBV') {
                    setlpchatActiveCookie1('setatbbv', msgData.cValue);
                  } else if (msgData.value == 'SET_ATCHTESC') {
                    setlpchatActiveCookie1('setatesc', msgData.ckValue);
                  } else if (msgData.value == 'SET_ATCNVSID') {
                    setlpchatActiveCookie1('setatcnvsid', msgData.ckValue);
                  } else if (msgData.value == 'IN_PRECHAT_SCREEN') {
                    lpSendData('session', 'chatWindowOpen', 'true');
                  } else if (msgData.value == 'SET_JWTCOOKIE') {
                    setlpchatActiveCookie1('jwtVal', msgData.ckValue);
                  } else if (msgData.value == 'SET_lastAgent') {
                    setlpchatActiveCookie1('lelastAgent', msgData.ckValue);
                  } else if (msgData.value == 'SET_LEPRIORITY') {
                    setlpchatActiveCookie1('lepriority', msgData.ckValue);
                  } else if (msgData.value == 'LE_END_CHAT') {
                    try {
                      var keywordsarray = [];
                      var sObj = msgData.ans1;
                      for (var i = 0; i < sObj.length; i++) {
                        var ts =
                          'es_myca_q' + (i + 1) + '|' + sObj[i].question + '|' + sObj[i].answer;
                        keywordsarray.push(ts);
                      }
                      lpTag.sdes = lpTag.sdes || [];
                      lpTag.sdes.push({ type: 'searchInfo', keywords: keywordsarray });
                      if (typeof lpTag.sdes.send !== 'undefined') {
                        lpTag.sdes.send();
                        lpTag.sdes.send({
                          type: 'mrktInfo',
                          info: { campaignId: 'Survey SDEs Sent' },
                        });
                      } else {
                        invokeUILog(
                          msgData.convID,
                          'WARN',
                          'blueboxpublic: ' +
                            getCookie_AA('blueboxpublic') +
                            ' - lpTag.sdes.send method is undefined.'
                        );
                      }
                      invokeUILog(
                        msgData.convID,
                        'INFO',
                        'blueboxpublic: ' +
                          getCookie_AA('blueboxpublic') +
                          ' - Survey data posted to LP.'
                      );
                      if (smsForChat) {
                        closeButtonClicked();
                      }
                    } catch (e) {
                      invokeUILog(
                        msgData.convID,
                        'ERROR',
                        'blueboxpublic: ' +
                          getCookie_AA('blueboxpublic') +
                          ' - Error while sending survey data to LP.'
                      );
                      invokeUILog(
                        msgData.convID,
                        'ERROR',
                        'blueboxpublic: ' +
                          getCookie_AA('blueboxpublic') +
                          ' - Error details: ' +
                          e.message
                      );
                    }
                    chatlastrefreshtime = 0;
                    document.getElementById('leno-ChatiFrameContainer').remove();
                  }
                }
              }
            } catch (excp) {
              logger.debug('lpReceiveChatPostMessage. Exception occurred', excp);
            }
            return;
          };
          function showMouseOverToolTip (elementId) {
            try {
              logger.debug('showMouseOverToolTip', 'id =' + elementId);
              removeMouseOverToolTip();
              var buttonObj = getElement(elementId);
              var toolTipTopSpaceRequired = buttonObj.offsetHeight - 12;
              var chatWizContainerOffset = getOffset(chatWizContainer);
              logger.debug(
                'showMouseOverToolTip',
                'container top =' +
                  getOffset(chatWizContainer).top +
                  ' , button height=' +
                  toolTipTopSpaceRequired
              );
              var tooltipDiv;
              if (chatWizContainerOffset.top >= toolTipTopSpaceRequired) {
                tooltipDiv = makeHoverDiv(buttonObj.getAttribute('data-msg'), false);
              } else {
                tooltipDiv = makeHoverDiv(buttonObj.getAttribute('data-msg'), true);
              }
              chatWizContainer.appendChild(tooltipDiv);
              var tooltipDiv = getElement('lpToolTipContent');
              if (elementId == 'lpChatPopOutBtn') {
                tooltipDiv.style.right = '22px';
              } else if (elementId == 'lpChatMinizeBtn') {
                tooltipDiv.style.right = '2px';
              } else if (elementId == 'lpChatEndChatBtn') {
                tooltipDiv.style.right = '-19px';
              } else if (elementId == 'lpChatMaximizeBtn') {
                if (chatWizContainer.className.indexOf('lp_US') > -1) {
                  if (chatWizContainer.className == 'lp_US lpDraggable') {
                    tooltipDiv.style.right = '-20px';
                    if (getCookie_AA1('lpPopulation') == 'AUTOMATION') {
                      tooltipDiv.style.right = '-9px';
                    }
                    tooltipDiv.style.top = '-22px';
                  } else {
                    tooltipDiv.style.right = '2px';
                    if (getCookie_AA1('lpPopulation') == 'AUTOMATION') {
                      tooltipDiv.style.right = '12px';
                    }
                    tooltipDiv.style.top = '-22px';
                  }
                }
                if (chatWizContainer.className.indexOf('lp_ca_en') > -1) {
                  if (chatWizContainer.className == 'lp_ca_en lpDraggable') {
                    tooltipDiv.style.right = '-5px';
                    tooltipDiv.style.top = '-22px';
                  } else {
                    tooltipDiv.style.right = '14px';
                    tooltipDiv.style.top = '-22px';
                  }
                }
              } else if (elementId == 'lpChatEndChatBtnMin') {
                if (chatWizContainer.className.indexOf('lp_US') > -1) {
                  if (chatWizContainer.className == 'lp_US lpDraggable') {
                    tooltipDiv.style.right = '-40px';
                    if (getCookie_AA1('lpPopulation') == 'AUTOMATION') {
                      tooltipDiv.style.right = '-30px';
                    }
                    tooltipDiv.style.top = '-22px';
                  } else {
                    tooltipDiv.style.right = '-19px';
                    if (getCookie_AA1('lpPopulation') == 'AUTOMATION') {
                      tooltipDiv.style.right = '-8px';
                    }
                    tooltipDiv.style.top = '-22px';
                  }
                }
                if (chatWizContainer.className.indexOf('lp_ca_en') > -1) {
                  if (chatWizContainer.className == 'lp_ca_en lpDraggable') {
                    tooltipDiv.style.right = '-26px';
                    tooltipDiv.style.top = '-22px';
                  } else {
                    tooltipDiv.style.right = '-10px';
                    tooltipDiv.style.top = '-22px';
                  }
                }
              }
            } catch (e) {}
          }
          function dockButtonHandler () {
            logger.debug('dockButtonHandler', '');
            chatWizContainer.style.bottom = '0px';
            chatWizContainer.style.right = '0px';
            chatWizContainer.style.left = 'auto';
            chatWizContainer.style.top = 'auto';
            if (typeof dragManager != 'undefined') {
              dragManager.unbind(draManagerSession);
            }
          }
          function undockButtonHandler () {
            logger.debug('undockButtonHandler', '222');
            isDock = false;
            dragManager = lpTag.taglets.lpDragManager();
            var titleDragArea = getElement('lpChatTitleContainer');
            var dmParam = {
              drag: chatWizContainer,
              anchor: titleDragArea,
              horizontal: true,
              vertical: true,
              onDrag: function (data) {
                document.getElementById('lpChatWizContainer').className =
                  'lp_' + Bootstrapper.ensMarket + ' lpDraggable';
                logger.debug('Drag Start', '...');
              },
              onDragEnd: function (data) {
                logger.debug('Drag Complete', data);
                setTopOffPositionValue = data.top;
                setLeftOffPositionValue = data.left;
                if (document.getElementById('leno-ChatiFrameContainer').style.display == 'block') {
                  if (data.left < 270) {
                    setLeftOffPositionValue = 270;
                    document.getElementById('lpChatWizContainer').style.left =
                      setLeftOffPositionValue + 'px';
                  } else setLeftOffPositionValue = data.left;
                }
              },
            };
            draManagerSession = dragManager.bind(dmParam);
          }
          function dockUnDockButtonClick (e) {
            logger.debug('dockUnDockButtonClick', '...');
            undockButtonHandler();
          }
          function showGrabPointer () {
            var lpChatTitleDragAreaID = document.getElementById('lpChatTitleDragArea');
            lpChatTitleDragAreaID.className = 'lpLeft grab';
          }
          function hideGrabPointer () {
            var lpChatTitleDragAreaID = document.getElementById('lpChatTitleDragArea');
            lpChatTitleDragAreaID.className = 'lpLeft';
          }
          myUI.bindEvents = function () {
            logger.debug('bindEvents', '...');
            bindEvent(getElement('lpChatMinizeBtn'), 'click', showMinimizeHandler);
            bindEvent(getElement('lpChatMinizeBtn'), 'keydown', function () {
              showMinimizeHandlerforEnterKey(event);
            });
            bindEvent(getElement('lpChatMaximizeBtn'), 'keydown', function () {
              showMaximizeHandlerforEnterKey(event);
            });
            bindEvent(getElement('lpChatTitleDragAreaMin'), 'click', function () {
              showMaximizeHandler(false);
            });
            bindEvent(getElement('lpChatEndChatBtn'), 'click', closeButtonClicked);
            bindEvent(getElement('lpChatEndChatBtn'), 'keydown', function () {
              closeButtonClickedforEnterkey(event);
            });
            bindEvent(getElement('lpChatEndChatBtnMin'), 'click', closeButtonClickedForMin);
            bindEvent(getElement('lpChatEndChatBtnMin'), 'keydown', function () {
              closeButtonClickedForMinforEnterkey(event);
            });
            bindEvent(getElement('lpChatMinizeBtn'), 'mouseover', function () {
              showMouseOverToolTip('lpChatMinizeBtn');
            });
            bindEvent(getElement('lpChatMaximizeBtn'), 'mouseover', function () {
              showMouseOverToolTip('lpChatMaximizeBtn');
            });
            bindEvent(getElement('lpChatEndChatBtn'), 'mouseover', function () {
              showMouseOverToolTip('lpChatEndChatBtn');
            });
            bindEvent(getElement('lpChatEndChatBtnMin'), 'mouseover', function () {
              showMouseOverToolTip('lpChatEndChatBtnMin');
            });
            bindEvent(getElement('lpChatMinizeBtn'), 'mouseout', removeMouseOverToolTip);
            bindEvent(getElement('lpChatMaximizeBtn'), 'mouseout', removeMouseOverToolTip);
            bindEvent(getElement('lpChatEndChatBtn'), 'mouseout', removeMouseOverToolTip);
            bindEvent(getElement('lpChatEndChatBtnMin'), 'mouseout', removeMouseOverToolTip);
            bindEvent(getElement('lpChatTitleDragArea'), 'mousedown', showGrabPointer);
            bindEvent(getElement('lpChatTitleDragArea'), 'mouseup', hideGrabPointer);
            bindEvent(getElement('lpChatTitleDragArea'), 'mouseleave', hideGrabPointer);
            bindEvent(getElement('confirmButton'), 'click', closeButtonConfirmClick);
            bindEvent(getElement('confirmCancel'), 'click', closeButtonCancelClick);
            bindEvent(getElement('confirmCancel'), 'keydown', focusOnEndChat);
            bindEvent(getElement('confirmButton'), 'keydown', closeButtonConfirmClickonKey);
            bindEvent(getElement('coBrowseCancel'), 'click', coBrowseCancelClick);
            bindEvent(getElement('coBrowseAgree'), 'click', coBrowseAgreeClick);
            bindEvent(window, 'resize', onWinResizeEvent);
            logger.debug('bindEvents', 'complete');
          };
          myUI.isChatWinLoaded = function () {
            return chatWinLoaded;
          };
          myUI.webServicesEnable = function () {
            lpPCIGenIDEnable = true;
          };
          myUI.webServicesDisable = function () {
            lpPCIGenIDEnable = false;
          };
          myUI.embeddedChatVersion = function () {
            return lpCWTagConst.VERSION;
          };
          myUI.isSessionStorageSupported = function () {
            var sessionStorageFound = false;
            try {
              if (typeof sessionStorage != 'undefined' && sessionStorage != null) {
                sessionStorageFound = true;
              }
            } catch (excpt) {}
            logger.debug('sessionStorage ' + (sessionStorageFound ? 'is' : 'is NOT'), 'available');
            return sessionStorageFound;
          };
          myUI.isJSONSupported = function () {
            var jsonFound = false;
            try {
              if (JSON && typeof JSON.parse === 'function') {
                jsonFound = true;
              } else if (typeof JSON === 'object' && typeof JSON.parse === 'function') {
                jsonFound = true;
              }
            } catch (excpt) {}
            logger.debug('JSON ' + (jsonFound ? 'is' : 'is NOT'), 'available');
            return jsonFound;
          };
          myUI.isPostMessageSupported = function () {
            var postMsgFound = false;
            try {
              if (typeof window.postMessage === 'function') {
                postMsgFound = true;
              } else if (typeof window.postMessage != 'undefined') {
                postMsgFound = true;
              }
            } catch (excpt) {}
            logger.debug('PostMessage ' + (postMsgFound ? 'is' : 'is NOT'), 'available');
            return postMsgFound;
          };
          myUI.isBrowserCompatible = function () {
            var incompatibilityRC = '';
            if (!myUI.isJSONSupported()) {
              incompatibilityRC = 'JSONNotSupported_';
            }
            if (!myUI.isPostMessageSupported()) {
              incompatibilityRC = incompatibilityRC + 'PostMessageNotSupported_';
            }
            if (!myUI.isSessionStorageSupported()) {
              incompatibilityRC = incompatibilityRC + 'SessionStorageNotSupported';
            }
            if (incompatibilityRC != '') {
              lpSendData('session', 'EWINFO', incompatibilityRC);
            }
            return myUI.isJSONSupported() &&
              myUI.isPostMessageSupported() &&
              myUI.isSessionStorageSupported()
              ? true
              : false;
          };
        };
      lpChatWidgetUI = new lpCWTagUI.LPChatWidgetUI(window);
      function $___var_0902c06a97a61b27 () {
        delCookie('lp_flg');
        lpChatWidgetUI.endChatRequest();
      }
      lpEndChat = $___var_0902c06a97a61b27;
      ({}.constructor.defineProperty(lpEndChat, 'name', {
        configurable: true,
        enumerable: false,
        value: 'lpEndChat',
        writable: false,
      }));
      function $___var_413eb3a2a5630ab0 () {
        try {
          if (wasDragJSLoaded()) {
            return;
          }
          var url = 'https://icm.aexp-static.com/content/dam/chat/prod/lechat/js/drag.min.js';
          var oHead = document.getElementsByTagName('head').item(0);
          var oScript = document.createElement('script');
          oScript.type = 'text/javascript';
          oScript.async = true;
          oScript.src = url;
          oHead.appendChild(oScript);
        } catch (e) {}
      }
      loadDragJSForInlineChat = $___var_413eb3a2a5630ab0;
      ({}.constructor.defineProperty(loadDragJSForInlineChat, 'name', {
        configurable: true,
        enumerable: false,
        value: 'loadDragJSForInlineChat',
        writable: false,
      }));
      function $___var_8e33ac152d6d23f6 () {
        var x = document.getElementsByTagName('script');
        for (var i = 0; i < x.length; i++) {
          if (x[i].src.indexOf('lechat/js/drag.min.js') > -1) {
            return true;
          }
        }
        return false;
      }
      wasDragJSLoaded = $___var_8e33ac152d6d23f6;
      ({}.constructor.defineProperty(wasDragJSLoaded, 'name', {
        configurable: true,
        enumerable: false,
        value: 'wasDragJSLoaded',
        writable: false,
      }));
      function $___var_624ff69e456c3ad9 () {
        try {
          setCookie('lp_flg', 'true', null, 45);
        } catch (e) {}
      }
      setAACookieForInlineChat = $___var_624ff69e456c3ad9;
      ({}.constructor.defineProperty(setAACookieForInlineChat, 'name', {
        configurable: true,
        enumerable: false,
        value: 'setAACookieForInlineChat',
        writable: false,
      }));
      function $___var_d7b4190555e19caa () {
        try {
          setCookie('lpchat_active', 'true', null, 120);
          if (smsForChat) {
            setCookie('smschat_active', 'true', null, 30);
          }
        } catch (e) {}
      }
      setlpchatActiveCookie = $___var_d7b4190555e19caa;
      ({}.constructor.defineProperty(setlpchatActiveCookie, 'name', {
        configurable: true,
        enumerable: false,
        value: 'setlpchatActiveCookie',
        writable: false,
      }));
      function $___var_ec190dc52a995253 () {
        try {
          setCookie('marvinchat_active', 'true', null, 120);
        } catch (e) {}
      }
      setmarvinchatActiveCookie = $___var_ec190dc52a995253;
      ({}.constructor.defineProperty(setmarvinchatActiveCookie, 'name', {
        configurable: true,
        enumerable: false,
        value: 'setmarvinchatActiveCookie',
        writable: false,
      }));
      function $___var_cf5001407d1b1c85 (cName, cValue) {
        try {
          setCookie(cName, cValue, null, 120);
        } catch (e) {}
      }
      setlpchatActiveCookie1 = $___var_cf5001407d1b1c85;
      ({}.constructor.defineProperty(setlpchatActiveCookie1, 'name', {
        configurable: true,
        enumerable: false,
        value: 'setlpchatActiveCookie1',
        writable: false,
      }));
      function $___var_a291fbfec9c3ec24 (cName, cValue) {
        try {
          setCookie(cName, cValue, null, 120);
        } catch (e) {}
      }
      setlpchatActiveCookie2 = $___var_a291fbfec9c3ec24;
      ({}.constructor.defineProperty(setlpchatActiveCookie2, 'name', {
        configurable: true,
        enumerable: false,
        value: 'setlpchatActiveCookie2',
        writable: false,
      }));
      function $___var_1dc5535dbe7aa69a () {
        try {
          delCookie('lpchat_active');
          delCookie('smschat_active');
        } catch (e) {}
      }
      deletelpchatActiveCookie = $___var_1dc5535dbe7aa69a;
      ({}.constructor.defineProperty(deletelpchatActiveCookie, 'name', {
        configurable: true,
        enumerable: false,
        value: 'deletelpchatActiveCookie',
        writable: false,
      }));
      function $___var_b8e8a2bb09d69711 (cname) {
        try {
          delCookie(cname);
        } catch (e) {}
      }
      deletelpchatActiveCookie1 = $___var_b8e8a2bb09d69711;
      ({}.constructor.defineProperty(deletelpchatActiveCookie1, 'name', {
        configurable: true,
        enumerable: false,
        value: 'deletelpchatActiveCookie1',
        writable: false,
      }));
      function $___var_ec0bad7e7a8a2f19 (cname) {
        var cvalue = '';
        if (typeof lpTestPopulation != 'undefined' && lpTestPopulation != '')
          cvalue = lpTestPopulation.toUpperCase();
        else cvalue = getCookie_AA('lpPopulation');
        return cvalue;
      }
      getCookie_AA1 = $___var_ec0bad7e7a8a2f19;
      ({}.constructor.defineProperty(getCookie_AA1, 'name', {
        configurable: true,
        enumerable: false,
        value: 'getCookie_AA1',
        writable: false,
      }));
      function $___var_fcd60b3e6c9f075e () {
        if (!isTimerStopped) {
          var travelele = document.getElementById('rhContainer');
          if (typeof chatSessionCallback != 'undefined') {
            chatSessionCallback(true);
          } else if (window.location.href.indexOf('ssearch.jsp') > -1) {
            var d = new Date();
            chatcurrentTime = d.getTime();
          } else if (typeof travelele !== 'undefined' && travelele !== null) {
            angular
              .element(document.getElementById('rhContainer'))
              .scope()
              .$parent.userSessionTimeout();
          } else if (typeof timeoutWidget != 'undefined') {
            var d = new Date();
            chatcurrentTimetmp = d.getTime();
            if (chatcurrentTimetmp - chatlastrefreshtime > 120000) {
              timeoutWidget.refreshSession();
              chatlastrefreshtime = chatcurrentTimetmp;
            }
          } else {
            var d = new Date();
            chatcurrentTimetmp = d.getTime();
            if (chatcurrentTimetmp - chatlastrefreshtime > 120000) {
              lpChatWidgetUI.keepSessionAlive();
              chatlastrefreshtime = chatcurrentTimetmp;
            }
          }
        }
      }
      refreshAddLine = $___var_fcd60b3e6c9f075e;
      ({}.constructor.defineProperty(refreshAddLine, 'name', {
        configurable: true,
        enumerable: false,
        value: 'refreshAddLine',
        writable: false,
      }));
      function $___var_2a2edbbf540eb42d () {
        try {
          loadDragJSForInlineChat();
          lpChatWidgetUI.chatOnPageLoad();
        } catch (e) {}
      }
      lpChatOnPageLoad = $___var_2a2edbbf540eb42d;
      ({}.constructor.defineProperty(lpChatOnPageLoad, 'name', {
        configurable: true,
        enumerable: false,
        value: 'lpChatOnPageLoad',
        writable: false,
      }));
      function $___var_4a6596c658e42f1b (data) {
        if (typeof data != 'undefined' && data != null) {
          if (data.eventName == null || typeof data.eventName == 'undefined') {
            loadDragJSForInlineChat();
            setAACookieForInlineChat();
            lpChatWidgetUI.loadChat(data);
            chatlasttimeout = false;
          } else if (
            typeof data.eventName != 'undefined' &&
            data.eventName != null &&
            data.eventName == 'SHOW'
          ) {
            loadDragJSForInlineChat();
            setAACookieForInlineChat();
            lpChatWidgetUI.loadChat(data);
            chatlasttimeout = false;
          }
        }
        confirmClicked = false;
        document.getElementById('mainpageoverlay').style.display = 'none';
        document.getElementById('mainpageprompt').style.display = 'none';
      }
      lpLoadChat = $___var_4a6596c658e42f1b;
      ({}.constructor.defineProperty(lpLoadChat, 'name', {
        configurable: true,
        enumerable: false,
        value: 'lpLoadChat',
        writable: false,
      }));
      function $___var_10776bb2d816864e () {
        new lpCWTagUI.LPChatWidgetLogger().info(
          'Initializing Chat Widget Bootstrap',
          'Version [' + lpCWTagConst.VERSION + ']'
        );
      }
      lpChatWizInfo = $___var_10776bb2d816864e;
      ({}.constructor.defineProperty(lpChatWizInfo, 'name', {
        configurable: true,
        enumerable: false,
        value: 'lpChatWizInfo',
        writable: false,
      }));
      function $___var_79e171cfb1a61199 () {
        document.getElementById('lpChatEndChatBtn').style.display = 'none';
      }
      lpRemoveCloseIcon = $___var_79e171cfb1a61199;
      ({}.constructor.defineProperty(lpRemoveCloseIcon, 'name', {
        configurable: true,
        enumerable: false,
        value: 'lpRemoveCloseIcon',
        writable: false,
      }));
      function $___var_613c9595f2ec96c4 () {
        document.getElementById('lpChatEndChatBtn').style.display = 'inline-block';
      }
      lpShowCloseIcon = $___var_613c9595f2ec96c4;
      ({}.constructor.defineProperty(lpShowCloseIcon, 'name', {
        configurable: true,
        enumerable: false,
        value: 'lpShowCloseIcon',
        writable: false,
      }));
      function $___var_70ebc2ea1451ab12 (inputStr) {
        var outputStr = inputStr;
        try {
          if (typeof outputStr !== 'undefined' && outputStr != null && outputStr !== '') {
            outputStr = outputStr.replace(/-{2,}/g, '-');
            outputStr = outputStr.replace(/[\n\t\r\s]+/g, ' ');
            outputStr = outputStr.replace(/"/g, '\\"');
            outputStr = outputStr.replace(/'/g, "\\'");
          }
        } catch (exception) {
          console.error('Exception while escaping JSON. Exception: ' + exception);
        }
        return outputStr;
      }
      escapeJSON = $___var_70ebc2ea1451ab12;
      ({}.constructor.defineProperty(escapeJSON, 'name', {
        configurable: true,
        enumerable: false,
        value: 'escapeJSON',
        writable: false,
      }));
      function $___var_9b32c13f6d2eaad8 (convId, type, msg) {
        try {
          var logDetails =
            '{"conversation_id" : "' +
            escapeJSON(convId) +
            '","event_type" : "' +
            type +
            '","message" : "' +
            escapeJSON(msg) +
            '"}';
          $iOA.ajax({
            url: 'https://clicktochat.americanexpress.com/chat/uxevent',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            crossDomain: true,
            data: logDetails,
            dataType: 'json',
            timeout: 600000,
            success: function (data) {},
            error: function (res, status, err) {
              console.error('=> UX Event - Error while logging UX event. Status: ' + status);
            },
          });
        } catch (e) {}
      }
      invokeUILog = $___var_9b32c13f6d2eaad8;
      ({}.constructor.defineProperty(invokeUILog, 'name', {
        configurable: true,
        enumerable: false,
        value: 'invokeUILog',
        writable: false,
      }));
      lpChatWizInfo();
      var $___var_50a69bb80f969b94 = false;
      isPremExp = $___var_50a69bb80f969b94;
      var $___var_df199c9cbd7c2dd5 = document.getElementById('rhContainer');
      travelele = $___var_df199c9cbd7c2dd5;
      if (typeof travelele !== 'undefined' && travelele !== null) {
        var angElement = angular.element(travelele);
        if (angElement) {
          var travelPlatTimer = setInterval(function () {
            var angscope = angElement.scope();
            if (typeof angscope != 'undefined') {
              isPremExp = angscope.isPremiumExperience;
              if (isPremExp == true) {
                var travelclassname = document.body.className;
                document.body.className = travelclassname + ' lpTravelplat';
              } else {
                angscope.$watch('isPremiumExperience', function (newValue, oldValue) {
                  isPremExp = angscope.isPremiumExperience;
                  if (isPremExp == true) {
                    var travelclassname = document.body.className;
                    document.body.className = travelclassname + ' lpTravelplat';
                  }
                });
              }
              clearInterval(travelPlatTimer);
            }
          }, 500);
        }
      }
      if (document.cookie.indexOf('lp_ppl') > -1) {
        if (window.location.href.indexOf('accountprofile/us/view.do') != -1) {
          deletelpchatActiveCookie1('lp_ppl');
          var xcutData = getCrossCutData();
          MycaAssist.interstitial.paperless.display(xcutData);
        }
      }
      if (!smsForChat) {
        var dataHolder;
        var jwtTimer1 = setInterval(function () {
          dataHolder = getCrossCutData();
          if (
            typeof dataHolder != 'undefined' &&
            typeof dataHolder == 'string' &&
            dataHolder != ''
          ) {
            jwtValue = 'present';
            clearInterval(jwtTimer1);
          }
        }, 500);
      }
      if (
        window.location.href.indexOf('g3-dev.americanexpress.com') != -1 ||
        window.location.href.indexOf('g4-dev.americanexpress.com') != -1 ||
        window.location.href.indexOf('e2qglobal.americanexpress.com') != -1 ||
        window.location.href.indexOf('slglobal.americanexpress.com') != -1 ||
        window.location.href.indexOf('global.americanexpress.com') != -1
      ) {
        lpChatWidgetUI.registerOnMessage();
      }
      if (window.location.href.indexOf('us/credit-cards/card-application/apply') != -1) {
        if (lpChatWidgetUI.lpReadCookie('amexsessioncookie')) {
          getapplysToken();
        }
        if (window.location.href.indexOf('business') != -1) {
          var currentDocTitle = document.title;
          window.onhashchange = function () {
            if (sToken == null && lpChatWidgetUI.lpReadCookie('amexsessioncookie')) {
              getapplysToken();
            }
            if (window.location.hash == '#/decision') {
              var lpdecisionTimer = setInterval(function () {
                if (typeof document.title != 'undefined' && currentDocTitle != document.title) {
                  lpTag.sdes = lpTag.sdes || [];
                  if (document.title == 'Application IRIPS Conditional') {
                    lpTag.sdes.push({ type: 'error', error: { message: 'PENDING' } });
                    if (sToken != null) {
                      lpTag.sdes.push({ type: 'ctmrinfo', info: { storeZipCode: '1' } });
                    } else {
                      lpTag.sdes.push({ type: 'ctmrinfo', info: { storeZipCode: '2' } });
                    }
                  }
                  clearInterval(lpdecisionTimer);
                }
              }, 250);
            } else {
              currentDocTitle = document.title;
            }
          };
        } else {
          window.onhashchange = function () {
            if (sToken == null && lpChatWidgetUI.lpReadCookie('amexsessioncookie')) {
              getapplysToken();
            }
            if (window.location.hash == '#/decision') {
              var lpdecisionTimer = setInterval(function () {
                if (typeof appdecision != 'undefined') {
                  if (appdecision.indexOf('IRIPS') != -1) {
                    lpTag.sdes = lpTag.sdes || [];
                    lpTag.sdes.push({ type: 'error', error: { message: 'IRIPS' } });
                    if (sToken != null) {
                      lpTag.sdes.push({ type: 'ctmrinfo', info: { storeZipCode: '1' } });
                    } else {
                      lpTag.sdes.push({ type: 'ctmrinfo', info: { storeZipCode: '2' } });
                    }
                  }
                  clearInterval(lpdecisionTimer);
                }
              }, 250);
            }
          };
        }
      }
      function $___var_f656a63bf263069e (collection, accountToken) {
        for (var i = 0; i < collection.length; i++) {
          var item = collection[i];
          if (item && item.account_token && item.account_token === accountToken) {
            return item;
          }
        }
        return null;
      }
      getXCutCollectionItem = $___var_f656a63bf263069e;
      ({}.constructor.defineProperty(getXCutCollectionItem, 'name', {
        configurable: true,
        enumerable: false,
        value: 'getXCutCollectionItem',
        writable: false,
      }));
      function $___var_235bc6bc33591474 () {
        if (typeof $iN != 'undefined') {
          var correlation_id = Math.floor(Math.random() * 10000000000);
          $iN.ajax({
            url: 'https://chatxcuttobdaas.americanexpress.com/getstoken',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json;charset=utf-8',
            data: '{"correlation_id" : "' + correlation_id + '"}',
            cache: false,
            crossDomain: true,
            success: function (res) {
              sToken = res.stoken;
            },
            error: function (xhr, status, error) {},
            xhrFields: { withCredentials: true },
          });
        }
      }
      getapplysToken = $___var_235bc6bc33591474;
      ({}.constructor.defineProperty(getapplysToken, 'name', {
        configurable: true,
        enumerable: false,
        value: 'getapplysToken',
        writable: false,
      }));
      function $___var_d3e23691c7125b6f (data, eventInfo) {
        try {
          if (lpTag && lpTag.taglets && lpTag.taglets.rendererStub) {
            var clicked = false;
            if (
              !chatCookieExists() &&
              typeof data !== 'undefined' &&
              data != null &&
              typeof data.engagementId !== 'undefined' &&
              lpCWTagConst.P1_EVENT_ID === data.engagementId
            ) {
              try {
                var corrId =
                  Math.floor((1 + Math.random()) * 65536)
                    .toString(16)
                    .substring(1) +
                  '-' +
                  Math.floor((1 + Math.random()) * 65536)
                    .toString(16)
                    .substring(1);
                invokeUILog(
                  corrId,
                  'INFO',
                  'processChatPrioritization Callback data.engagementId:' +
                    data.engagementId +
                    ' blueboxpublic:' +
                    getCookie_AA('blueboxpublic')
                );
              } catch (e) {}
              clicked = lpTag.taglets.rendererStub.click(data.engagementId);
              intiatedFromChatPrioritization = true;
            }
          }
        } catch (e) {}
      }
      processChatPrioritization = $___var_d3e23691c7125b6f;
      ({}.constructor.defineProperty(processChatPrioritization, 'name', {
        configurable: true,
        enumerable: false,
        value: 'processChatPrioritization',
        writable: false,
      }));
      function $___var_0845b92ac97509b2 () {
        try {
          var eventId = lpTag.events.bind({
            eventName: 'OFFER_IMPRESSION',
            appName: 'LP_OFFERS',
            func: processChatPrioritization,
          });
        } catch (e) {}
      }
      chatPrioritization = $___var_0845b92ac97509b2;
      ({}.constructor.defineProperty(chatPrioritization, 'name', {
        configurable: true,
        enumerable: false,
        value: 'chatPrioritization',
        writable: false,
      }));
      function $___var_129987d9e016ec64 () {
        try {
          var heightToSet;
          if (document.querySelectorAll('#lpChatWizContainer.res_Small').length > 0) {
            heightToSet = window.innerHeight - 48;
          } else {
            heightToSet = 410;
          }
          setHeights(heightToSet);
        } catch (e) {}
      }
      adjustIframeContainerHeight = $___var_129987d9e016ec64;
      ({}.constructor.defineProperty(adjustIframeContainerHeight, 'name', {
        configurable: true,
        enumerable: false,
        value: 'adjustIframeContainerHeight',
        writable: false,
      }));
      function $___var_5e5bc6eb1f3c9a98 (height) {
        try {
          document.getElementById('lpChatiFrameContainer').style.height = height + 'px';
          document.getElementById('lpChatiFrame').style.height = height + 'px';
        } catch (e) {}
      }
      setHeights = $___var_5e5bc6eb1f3c9a98;
      ({}.constructor.defineProperty(setHeights, 'name', {
        configurable: true,
        enumerable: false,
        value: 'setHeights',
        writable: false,
      }));
      function $___var_ee9940ce00c5ce10 (orientationChange, isPageReload) {
        try {
          if (device.mobile()) {
            switch (window.orientation) {
              case 0:
                showChatWindowInPortraitMode(orientationChange, isPageReload);
                break;
              case 180:
                showChatWindowInPortraitMode(orientationChange, isPageReload);
                break;
              case -90:
                hideChatWindowInLandscapeMode(isPageReload);
                break;
              case 90:
                hideChatWindowInLandscapeMode(isPageReload);
                break;
            }
          }
        } catch (e) {}
      }
      onlandscapeorientation = $___var_ee9940ce00c5ce10;
      ({}.constructor.defineProperty(onlandscapeorientation, 'name', {
        configurable: true,
        enumerable: false,
        value: 'onlandscapeorientation',
        writable: false,
      }));
      function $___var_6e03fd8ae8566cf4 (event) {
        try {
          var startX = 0;
          var endX = 0;
          var startY = 0;
          var endY = 0;
          var touches = event.changedTouches;
          if (touches.length > 1) {
            for (var i = 0; i < touches.length; i++) {
              if (i == 0) {
                startX = touches[i].clientX;
                startY = touches[i].clientY;
              } else {
                endX = touches[i].clientX;
                endY = touches[i].clientY;
              }
            }
            if (startX - endX !== 0 && startY - endY !== 0) {
              event.preventDefault();
              event.stopImmediatePropagation();
            }
          }
        } catch (e) {}
      }
      handlePinchZoom = $___var_6e03fd8ae8566cf4;
      ({}.constructor.defineProperty(handlePinchZoom, 'name', {
        configurable: true,
        enumerable: false,
        value: 'handlePinchZoom',
        writable: false,
      }));
      function $___var_5fc6a23a35e3fa26 () {
        try {
          window.onresize = function (event) {
            C2C.RWD.deviceWidth = document.documentElement.clientWidth;
            C2C.RWD.roundedWidth = C2C.RWD.roundWidth(C2C.RWD.deviceWidth);
            C2C.RWD.setupClient(C2C.RWD.deviceWidth);
          };
          window.onorientationchange = function (event) {
            onlandscapeorientation('true');
          };
        } catch (e) {}
      }
      bindingWindowevents = $___var_5fc6a23a35e3fa26;
      ({}.constructor.defineProperty(bindingWindowevents, 'name', {
        configurable: true,
        enumerable: false,
        value: 'bindingWindowevents',
        writable: false,
      }));
      if (C2C == null || typeof C2C == 'undefined') {
        var C2C = new Object();
      }
      C2C.RWD = {
        rwdView: false,
        deviceBucket: 'large',
        deviceWidth: null,
        roundedWidth: null,
        init: function () {
          try {
            C2C.RWD.rwdView = true;
            C2C.RWD.deviceWidth = document.documentElement.clientWidth;
            C2C.RWD.roundedWidth = C2C.RWD.roundWidth(C2C.RWD.deviceWidth);
            C2C.RWD.setupClient(C2C.RWD.deviceWidth);
          } catch (e) {}
        },
        deviceBucketer: function (width) {
          var db = 'large';
          try {
            if (width < 847) {
              if (width < 661) {
                db = 'small';
              } else {
                db = 'medium';
              }
            } else {
              db = 'large';
            }
          } catch (e) {}
          return db;
        },
        roundWidth: function (width) {
          var remainder = 0;
          width % 100 > 50 ? (remainder = 50) : 0;
          return Math.min(Math.floor(width / 100) * 100) + remainder;
        },
        capitalize: function (str) {
          return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        },
        setupClient: function (width) {
          try {
            C2C.RWD.deviceBucket = C2C.RWD.deviceBucketer(width);
            C2C.RWD.deviceBucket = C2C.RWD.capitalize(C2C.RWD.deviceBucket);
            if (document.getElementById('lpChatWizContainer') != null) {
              var tmpClass = document.getElementById('lpChatWizContainer').className;
              tmpClass = tmpClass.replace(/\bres_.*?\b/g, '');
              tmpClass =
                tmpClass + ' res_' + C2C.RWD.deviceBucket + ' res_' + C2C.RWD.roundedWidth;
              document.getElementById('lpChatWizContainer').className = tmpClass;
            }
            adjustIframeContainerHeight();
            lpChatWidgetUI.remakeHeaderOnResize();
            lpChatWidgetUI.updateOrientation();
          } catch (e) {}
        },
      };
      function $___var_989e0b32e42a9744 () {
        try {
          if (/iP(hone|od|ad)/.test(navigator.platform)) {
            if (
              window.screen.height / window.screen.width == 736 / 414 &&
              window.devicePixelRatio == 3
            ) {
              return 'iphone-6-plus-zoom';
            } else if (
              window.screen.height / window.screen.width == 667 / 375 &&
              window.devicePixelRatio == 3
            ) {
              return 'iphone-6-plus';
            } else if (
              window.screen.height / window.screen.width == 667 / 375 &&
              window.devicePixelRatio == 2
            ) {
              return 'iphone-6';
            } else if (
              window.screen.height / window.screen.width == 1.775 &&
              window.devicePixelRatio == 2
            ) {
              return 'iphone-5';
            }
          }
        } catch (e) {}
      }
      iOSversion = $___var_989e0b32e42a9744;
      ({}.constructor.defineProperty(iOSversion, 'name', {
        configurable: true,
        enumerable: false,
        value: 'iOSversion',
        writable: false,
      }));
      function $___var_4484a903104f1fd0 () {
        try {
          ver = iOSversion();
          if (ver && ver == 'iphone-5') {
            return 246;
          } else {
            return 232;
          }
        } catch (e) {}
      }
      checkVersionAndReturnHeight = $___var_4484a903104f1fd0;
      ({}.constructor.defineProperty(checkVersionAndReturnHeight, 'name', {
        configurable: true,
        enumerable: false,
        value: 'checkVersionAndReturnHeight',
        writable: false,
      }));
      function $___var_564aea53b8509f46 (isPageReload) {
        try {
          var lpChatiFrameContainerEle = document.getElementById('lpChatiFrameContainer');
          if (
            !isPageReload &&
            lpChatiFrameContainerEle &&
            (lpChatiFrameContainerEle.style.display == '' ||
              lpChatiFrameContainerEle.style.display == 'block')
          ) {
            document.getElementById('lpChatTitleContainer').style.display = 'none';
            document.getElementById('lpChatiFrameContainer').style.visibility = 'hidden';
            document.getElementById('landscapeDiv').style.display = 'block';
            document.getElementById('landscapeDiv').focus();
            try {
              if (document.getElementById('qfb') == null) {
                var qFBsheet = document.createElement('style');
                qFBsheet.id = 'qfb';
                qFBsheet.innerHTML =
                  '.QSIFeedBackLink {display:none !important} .QSIPopOver {z-index:99 !important};';
                document.body.appendChild(qFBsheet);
              }
            } catch (e) {}
          }
        } catch (e) {}
      }
      hideChatWindowInLandscapeMode = $___var_564aea53b8509f46;
      ({}.constructor.defineProperty(hideChatWindowInLandscapeMode, 'name', {
        configurable: true,
        enumerable: false,
        value: 'hideChatWindowInLandscapeMode',
        writable: false,
      }));
      function $___var_0a0c490a3539845f (orientationChange, isPageReload) {
        try {
          var lpChatiFrameContainerEle = document.getElementById('lpChatiFrameContainer');
          if (
            lpChatiFrameContainerEle &&
            (lpChatiFrameContainerEle.style.display == '' ||
              lpChatiFrameContainerEle.style.display == 'block')
          ) {
            document.getElementById('landscapeDiv').style.display = 'none';
            document.getElementById('lpChatiFrameContainer').style.visibility = 'visible';
            document.getElementById('lpChatTitleContainer').style.display = 'block';
            if (typeof orientationChange != 'undefined' && orientationChange == 'true') {
              addblurtoparent();
            }
          }
        } catch (e) {}
      }
      showChatWindowInPortraitMode = $___var_0a0c490a3539845f;
      ({}.constructor.defineProperty(showChatWindowInPortraitMode, 'name', {
        configurable: true,
        enumerable: false,
        value: 'showChatWindowInPortraitMode',
        writable: false,
      }));
      function $___var_a88cf6c3aef45b13 () {
        var deviceFamilyName = getDevice();
        try {
          deviceFamilyName = lpTag.device.familyName();
        } catch (e) {}
        return (deviceFamilyName || 'DESKTOP').toUpperCase();
      }
      getDeviceFamilyName = $___var_a88cf6c3aef45b13;
      ({}.constructor.defineProperty(getDeviceFamilyName, 'name', {
        configurable: true,
        enumerable: false,
        value: 'getDeviceFamilyName',
        writable: false,
      }));
      function $___var_39f1fef7def95fb4 (n) {
        return -1 !== devNavigator.indexOf(n);
      }
      l = $___var_39f1fef7def95fb4;
      ({}.constructor.defineProperty(l, 'name', {
        configurable: true,
        enumerable: false,
        value: 'l',
        writable: false,
      }));
      function $___var_b4cb0fae7cf137e1 () {
        try {
          var i = {};
          window.device = i;
          (i.macos = function () {
            return l('mac');
          }),
            (i.ios = function () {
              return i.iphone() || i.ipod() || i.ipad();
            }),
            (i.iphone = function () {
              return !i.windows() && l('iphone');
            }),
            (i.ipod = function () {
              return l('ipod');
            }),
            (i.ipad = function () {
              return l('ipad');
            }),
            (i.android = function () {
              return !i.windows() && l('android');
            }),
            (i.androidPhone = function () {
              return i.android() && l('mobile');
            }),
            (i.androidTablet = function () {
              return i.android() && !l('mobile');
            }),
            (i.blackberry = function () {
              return l('blackberry') || l('bb10') || l('rim');
            }),
            (i.blackberryPhone = function () {
              return i.blackberry() && !l('tablet');
            }),
            (i.blackberryTablet = function () {
              return i.blackberry() && l('tablet');
            }),
            (i.windows = function () {
              return l('windows');
            }),
            (i.windowsPhone = function () {
              return i.windows() && l('phone');
            }),
            (i.windowsTablet = function () {
              return i.windows() && l('touch') && !i.windowsPhone();
            }),
            (i.fxos = function () {
              return (l('(mobile') || l('(tablet')) && l(' rv:');
            }),
            (i.fxosPhone = function () {
              return i.fxos() && l('mobile');
            }),
            (i.fxosTablet = function () {
              return i.fxos() && l('tablet');
            }),
            (i.meego = function () {
              return l('meego');
            }),
            (i.cordova = function () {
              return window.cordova && 'file:' === location.protocol;
            }),
            (i.nodeWebkit = function () {
              return 'object' === t(window.process);
            }),
            (i.mobile = function () {
              return (
                i.androidPhone() ||
                i.iphone() ||
                i.ipod() ||
                i.windowsPhone() ||
                i.blackberryPhone() ||
                i.fxosPhone() ||
                i.meego()
              );
            }),
            (i.tablet = function () {
              return (
                i.ipad() ||
                i.androidTablet() ||
                i.blackberryTablet() ||
                i.windowsTablet() ||
                i.fxosTablet()
              );
            }),
            (i.desktop = function () {
              return !i.tablet() && !i.mobile();
            });
        } catch (e) {}
      }
      getDevice = $___var_b4cb0fae7cf137e1;
      ({}.constructor.defineProperty(getDevice, 'name', {
        configurable: true,
        enumerable: false,
        value: 'getDevice',
        writable: false,
      }));
      getDevice();
      if (device.mobile()) {
        C2C.RWD.init();
        bindingWindowevents();
      }
      function $___var_cfdd83a189e033dc () {
        try {
          if (document.getElementById('lpChatWizContainer').style.display == 'block') {
            if (document.getElementById('lpButtonDiv') != null) {
              savelpButtonDivcNames = document.getElementById('lpButtonDiv').className;
              document.getElementById('lpButtonDiv').className =
                savelpButtonDivcNames + ' decreasezindex';
            }
            var allparentElements = document.querySelectorAll('body>*:not(#lpChatWizContainer)');
            for (i = 0; i < allparentElements.length; i++) {
              allparentElements[i].style.filter = 'blur(2px)';
            }
          }
        } catch (e) {}
      }
      addblurtoparent = $___var_cfdd83a189e033dc;
      ({}.constructor.defineProperty(addblurtoparent, 'name', {
        configurable: true,
        enumerable: false,
        value: 'addblurtoparent',
        writable: false,
      }));
      function $___var_08d8dba6676d516a () {
        try {
          if (document.getElementById('lpButtonDiv') != null && savelpButtonDivcNames !== '') {
            savelpButtonDivcNames = savelpButtonDivcNames.replace(/decreasezindex/g, '');
            document.getElementById('lpButtonDiv').className = savelpButtonDivcNames;
          }
          var allparentElements = document.querySelectorAll('body>*:not(#lpChatWizContainer)');
          for (i = 0; i < allparentElements.length; i++) {
            allparentElements[i].style.filter = '';
          }
        } catch (e) {}
      }
      removeblurfromparent = $___var_08d8dba6676d516a;
      ({}.constructor.defineProperty(removeblurfromparent, 'name', {
        configurable: true,
        enumerable: false,
        value: 'removeblurfromparent',
        writable: false,
      }));
      function $___var_f3a26150f4fcc8d8 () {
        var xcutobj;
        try {
          if (
            typeof chatDataSource != 'undefined' &&
            typeof chatDataSource.memberData != 'undefined' &&
            typeof chatDataSource.memberData == 'string' &&
            chatDataSource.memberData != null &&
            JSON.stringify(chatDataSource.memberData) != '{}' &&
            chatDataSource.memberData != ''
          ) {
            xcutobj = chatDataSource.memberData;
            xcutType = 'CDS';
          } else if (typeof mycaAssistJSON != 'undefined') {
            if (
              typeof mycaAssistJSON.commonAppData != 'undefined' &&
              mycaAssistJSON.commonAppData != null &&
              mycaAssistJSON.commonAppData != ''
            ) {
              xcutobj = mycaAssistJSON.commonAppData;
              xcutType = 'Non-CDS';
            }
          } else if (typeof loyaltyAssistJSON != 'undefined') {
            if (
              typeof loyaltyAssistJSON.commonAppData != 'undefined' &&
              loyaltyAssistJSON.commonAppData != null &&
              loyaltyAssistJSON.commonAppData != ''
            ) {
              xcutobj = loyaltyAssistJSON.commonAppData;
              xcutType = 'Non-CDS';
            }
          }
        } catch (e) {}
        return xcutobj;
      }
      getCrossCutData = $___var_f3a26150f4fcc8d8;
      ({}.constructor.defineProperty(getCrossCutData, 'name', {
        configurable: true,
        enumerable: false,
        value: 'getCrossCutData',
        writable: false,
      }));
      function $___var_4fe9789280b3127f (xcutobj, xcutType, attribute) {
        var attributValue = '';
        try {
          if (typeof xcutobj !== 'undefined' && xcutobj !== null) {
            switch (attribute) {
              case 'sToken':
                attributValue =
                  xcutType === 'CDS'
                    ? JSON.parse(xcutobj).sessionToken
                    : JSON.parse(xcutobj).stoken;
                break;
              case 'embossedName':
                attributValue =
                  xcutType === 'CDS'
                    ? JSON.parse(xcutobj).accounts[0].embossedName
                    : JSON.parse(xcutobj).cardsInfoList[0].embossedName;
                break;
            }
          }
        } catch (e) {}
        return attributValue;
      }
      getDataFromCrossCut = $___var_4fe9789280b3127f;
      ({}.constructor.defineProperty(getDataFromCrossCut, 'name', {
        configurable: true,
        enumerable: false,
        value: 'getDataFromCrossCut',
        writable: false,
      }));
      function $___var_05e1be020757faba (count) {
        var incrementer = count + 1;
        var url = 'https://clicktochat.americanexpress.com/chat/generateChatSessionId';
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
              var data = xmlhttp.responseText;
            } catch (err) {
              console.log(err.message + ' in ' + xmlhttp.responseText);
              return;
            }
            console.log('sms for chat unique id --> ', data);
            setSMSsdes(data);
          } else if (xmlhttp.readyState == 4 && xmlhttp.status !== 200) {
            if (incrementer < 4) {
              getUniqueChatId(incrementer);
            }
          }
        };
        xmlhttp.withCredentials = true;
        xmlhttp.open('POST', url);
        xmlhttp.send();
      }
      getUniqueChatId = $___var_05e1be020757faba;
      ({}.constructor.defineProperty(getUniqueChatId, 'name', {
        configurable: true,
        enumerable: false,
        value: 'getUniqueChatId',
        writable: false,
      }));
      function $___var_a5411c6a324b1c76 (data) {
        if (window.lpTag) {
          if (!window.lpTag.sdes) {
            window.lpTag.sdes = [];
          }
          var personal = {};
          var contacts = [];
          var contactData = {};
          contactData['email'] = data;
          contacts.push(contactData);
          personal['contacts'] = contacts;
          lpTag.sdes.push({ type: 'personal', personal: personal });
          lpTag.sdes.push({ type: 'ctmrinfo', info: { ctype: 'US-SMS-en-GCA' } });
          lpTag.sdes.push({ type: 'error', error: { message: '' } });
          console.log('sms for chat sdes pushed --> ', lpTag.sdes);
          try {
            console.log('sms for chat sdes pushed --> ', lpTag.sdes.inspect());
          } catch (e) {}
        }
        if (smsChat_pageName === 'nl-help' && !chatCookieExists()) {
          getLPdataForSMS();
        }
      }
      setSMSsdes = $___var_a5411c6a324b1c76;
      ({}.constructor.defineProperty(setSMSsdes, 'name', {
        configurable: true,
        enumerable: false,
        value: 'setSMSsdes',
        writable: false,
      }));
      var $___var_ea8c4250eb77f5ac = '';
      sms_ssid = $___var_ea8c4250eb77f5ac;
      var $___var_4df138a24d6df696 = '';
      sms_svid = $___var_4df138a24d6df696;
      var $___var_59acb523ee9fc154 = null;
      smsTimer = $___var_59acb523ee9fc154;
      var $___var_e3aa20f64444551a = null;
      lpRenderTimer = $___var_e3aa20f64444551a;
      function $___var_0aec3178713eb2c2 () {
        smsTimer = setInterval(function () {
          console.log('getLPdataForSMS sms_ssid: ', sms_ssid);
          console.log('getLPdataForSMS sms_svid: ', sms_svid);
          if (
            sms_data.ssid != '' &&
            sms_data.svid != '' &&
            sms_data.eid != '' &&
            sms_data.cid != ''
          ) {
            clearInterval(smsTimer);
          } else {
            if (
              lpTag &&
              lpTag != null &&
              lpTag.taglets &&
              lpTag.taglets != null &&
              lpTag.taglets.lp_monitoringSDK &&
              lpTag.taglets.lp_monitoringSDK != null
            ) {
              var sessId = lpTag.taglets.lp_monitoringSDK.getSid();
              var visitId = lpTag.taglets.lp_monitoringSDK.getVid();
              console.log('lpTag.taglets.lp_monitoringSDK.getSid() : ', sessId);
              console.log('lpTag.taglets.lp_monitoringSDK.getVid() : ', visitId);
              if (sessId && sessId != null) sms_ssid = sessId;
              if (visitId && visitId != null) sms_svid = visitId;
              if (sms_ssid != '' && sms_svid != '' && sms_data.eid != '' && sms_data.cid != '') {
                sms_data.ssid = sms_ssid;
                sms_data.svid = sms_svid;
                console.log('BEFORE invoking button sms_data', sms_data);
                lpRenderTimer = setInterval(function () {
                  console.log('SMS Waiting to rendererStub.click');
                  if (
                    lpTag.taglets.rendererStub &&
                    lpTag.taglets.rendererStub != null &&
                    lpTag.taglets.rendererStub.click &&
                    lpTag.taglets.rendererStub.click != null
                  ) {
                    clearInterval(lpRenderTimer);
                    lpTag.taglets.rendererStub.click(sms_data.eid);
                  }
                }, 500);
              }
            }
          }
        }, 1000);
      }
      getLPdataForSMS = $___var_0aec3178713eb2c2;
      ({}.constructor.defineProperty(getLPdataForSMS, 'name', {
        configurable: true,
        enumerable: false,
        value: 'getLPdataForSMS',
        writable: false,
      }));
      var $___var_9216947447cfb3ce = { cid: '', eid: '', scid: '', ssid: '', svid: '' };
      sms_data = $___var_9216947447cfb3ce;
      function $___var_7d8e594f8bb0befa () {
        console.log('ITM INVOKED SMS CODE');
        if (!smsEventBind) {
          if (lpTag.site) {
            if (typeof smsChat_pageName !== 'undefined') {
              if (smsChat_pageName === 'nl-help' || smsChat_pageName === 'nl-payment') {
                window.smsForChat = true;
              }
            }
            if (typeof window.smsForChat === 'undefined') {
              smsForChat = false;
            }
            console.log('Is smsForChat --> ', smsForChat);
            if (window.smsForChat) {
              smsEventBind = true;
              lpTag.events.bind('LP_OFFERS', 'OFFER_IMPRESSION', function (data, eventInfo) {
                console.log('sms_data data', data);
                sms_data.cid = data.campaignId;
                sms_data.eid = data.engagementId;
                sms_data.scid = data.contextId;
                console.log('sms_data', sms_data);
              });
              getUniqueChatId(0);
            }
          } else {
            console.log('ITM mTag not yet loaded');
            setTimeout(startSmsChat, 1000);
          }
        }
      }
      startSmsChat = $___var_7d8e594f8bb0befa;
      ({}.constructor.defineProperty(startSmsChat, 'name', {
        configurable: true,
        enumerable: false,
        value: 'startSmsChat',
        writable: false,
      }));
      if (typeof smsChat_pageName !== 'undefined') {
        if (smsChat_pageName === 'nl-help' || smsChat_pageName === 'nl-payment') {
          window.smsForChat = true;
          startSmsChat();
        }
      }
    })();
  } finally {
    if ($___old_5e0a060044a3fe24)
      ({}.constructor.defineProperty(Navigator.prototype, 'userAgent', $___old_5e0a060044a3fe24));
  }
}
