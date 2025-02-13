{
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
  (function () {
    (function () {
      var O = 'SDK_' + '6.23.0.0-7660e6a8-201806111939'.replace(/[^\w]/g, '_'),
        w = 'undefined' != typeof window ? window : 'undefined' != typeof GLOBAL ? GLOBAL : this;
      w.tv = w.tv || {};
      w.tv.freewheel = w.tv.freewheel || {};
      w.tv.freewheel[O] = function (w) {
        const $___old_ba615320e989e474 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_ba615320e989e474)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_fb986baf23da602c.userAgent
            ));
          return function () {
            var a = { version: 'js-6.23.0.0-7660e6a8-201806111939' };
            'undefined' !== typeof window &&
              ((window._fw_admanager = window._fw_admanager || {}),
              (window._fw_admanager.version = a.version));
            a.LOG_LEVEL_QUIET = 0;
            a.LOG_LEVEL_INFO = 1;
            a.LOG_LEVEL_DEBUG = 2;
            a.setLogLevel = function (b) {
              const $___old_d8d0036a39d6dc78 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              );
              try {
                if ($___old_d8d0036a39d6dc78)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_053c907fde22f83d.localStorage
                  ));
                return function () {
                  a.warn = a.log = a.debug = function () {};
                  if ('undefined' !== typeof console) {
                    try {
                      window.localStorage &&
                        window.localStorage.getItem('fwLogLevel') &&
                        -1 < window.localStorage.getItem('fwLogLevel') &&
                        (b = window.localStorage.getItem('fwLogLevel'));
                    } catch (c) {
                      console.warn('>FW Common.setLogLevel' + c.description);
                    }
                    b > a.LOG_LEVEL_QUIET &&
                      ((a.log = function () {
                        console.log(
                          '>FW ' +
                            new Date().toTimeString().substr(3, 6) +
                            Array.prototype.slice.call(arguments).join(' ')
                        );
                      }),
                      (a.warn = function () {
                        console.warn(
                          '>FW ' +
                            new Date().toTimeString().substr(3, 6) +
                            Array.prototype.slice.call(arguments).join(' ')
                        );
                      }),
                      b > a.LOG_LEVEL_INFO &&
                        (a.debug = function () {
                          console.log(
                            '>FW ' +
                              new Date().toTimeString().substr(3, 6) +
                              Array.prototype.slice.call(arguments).join(' ')
                          );
                        }));
                  }
                }.apply(this, arguments);
              } finally {
                if ($___old_d8d0036a39d6dc78)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_d8d0036a39d6dc78
                  ));
              }
            };
            a.setLogLevel(a.LOG_LEVEL_INFO);
            a.log('FreeWheel Integration Runtime', a.version);
            a.proxyUrl = null;
            a.proxyAuthenticationParameter = null;
            a.setProxy = function (b) {
              'string' === typeof b
                ? ('/' !== b.charAt(b.length - 1) && (b += '/'), (a.proxyUrl = b))
                : (a.proxyUrl = null);
            };
            a.setProxyAuthenticationParameter = function (b, c) {
              a.proxyAuthenticationParameter =
                2 <= arguments.length && b ? { key: b, value: c || '' } : null;
            };
            a.checkUserAgent = function (b) {
              a.PLATFORM_IS_WINDOWSPHONE = -1 < b.search('windows phone');
              a.PLATFORM_IS_IPAD = -1 < b.search('ipad');
              a.PLATFORM_IS_IPHONE_IPOD = -1 < b.search('iphone') || -1 < b.search('ipod');
              a.PLATFORM_IS_CHROMECAST = -1 < b.search('crkey');
              var c = function (a) {
                return (a = b.match(a)) && 0 < a.length
                  ? ((a = a[0].match(/\d+/g)), 1 * a[0] + 0.1 * a[1])
                  : 0;
              };
              a.PLATFORM_IE_MOBILE_VERSION = c(/iemobile\/\d+\.\d+/);
              a.PLATFORM_IOS_VERSION = c(/os \d+_\d+/);
              c = -1 < b.indexOf('transformer') ? 3.2 : c(/android \d+\.\d+/);
              a.PLATFORM_ANDROID_VERSION = c;
              a.PLATFORM_IS_SAFARI =
                (0 < a.PLATFORM_IOS_VERSION && -1 < b.search('applewebkit')) ||
                (0 === a.PLATFORM_ANDROID_VERSION &&
                  0 > b.search('chrome') &&
                  -1 < b.search('safari'));
              a.PLATFORM_IS_CHROME = 0 > b.search('edge') && -1 < b.search('chrome');
              a.PLATFORM_IS_FIREFOX = -1 < b.search('firefox');
              a.PLATFORM_IS_MOBILE = 0 < a.PLATFORM_IOS_VERSION || 0 < a.PLATFORM_ANDROID_VERSION;
              a.PLATFORM_BROWSER_VERSION = (function (a) {
                var b = '',
                  c;
                -1 !== (c = a.indexOf('opr/'))
                  ? (b = a.substring(c + 4))
                  : -1 !== (c = a.indexOf('opera'))
                  ? ((b = a.substring(c + 6)),
                    -1 !== (c = a.indexOf('version')) && (b = a.substring(c + 8)))
                  : -1 !== (c = a.indexOf('rv:'))
                  ? (b = a.substring(c + 3))
                  : -1 !== (c = a.indexOf('msie'))
                  ? (b = a.substring(c + 5))
                  : -1 !== (c = a.indexOf('edge'))
                  ? (b = a.substring(c + 5))
                  : -1 !== (c = a.indexOf('chrome'))
                  ? (b = a.substring(c + 7))
                  : -1 !== (c = a.indexOf('safari'))
                  ? ((b = a.substring(c + 7)),
                    -1 !== (c = a.indexOf('version')) && (b = a.substring(c + 8)))
                  : -1 !== (c = a.indexOf('firefox'))
                  ? (b = a.substring(c + 8))
                  : a.lastIndexOf(' ') + 1 < (c = a.lastIndexOf('/')) && (b = a.substring(c + 1));
                var d;
                -1 !== (d = b.indexOf(';')) && (b = b.substring(0, d));
                -1 !== (d = b.indexOf(' ')) && (b = b.substring(0, d));
                return (a = parseInt('' + b, 10)) ? a : 0;
              })(b);
              a.PLATFORM_ID = a.PLATFORM_IS_MOBILE
                ? 0 < a.PLATFORM_ANDROID_VERSION
                  ? 'Android' + a.PLATFORM_ANDROID_VERSION
                  : a.PLATFORM_IS_IPAD
                  ? 'iPad' + a.PLATFORM_IOS_VERSION
                  : a.PLATFORM_IS_IPHONE_IPOD
                  ? 'iPhone' + a.PLATFORM_IOS_VERSION
                  : 'UnknownMobile'
                : 'Desktop';
              a.log(
                'Device:',
                a.PLATFORM_ID,
                'PLATFORM_IS_SAFARI:',
                a.PLATFORM_IS_SAFARI,
                'PLATFORM_IS_CHROME:',
                a.PLATFORM_IS_CHROME
              );
            };
            a.checkUserAgent(navigator.userAgent.toLowerCase());
            a.PLATFORM_EVENT_CLICK = a.PLATFORM_IS_MOBILE ? 'touchend' : 'click';
            a.MOBILE_EVENT_DRAG = 'touchmove';
            a.PLATFORM_SEND_REQUEST_BY_FORM = !1;
            a.PLATFORM_HIDE_AND_SHOW_CONTENT_VIDEO_BY_MOVE_POSITION =
              3.1 <= a.PLATFORM_ANDROID_VERSION;
            a.PLATFORM_HIDE_AND_SHOW_CONTENT_VIDEO_BY_SET_DISPLAY = !0;
            a.PLATFORM_SUPPORT_PLAY_MIDROLL_BY_CURRENT_VIDEO_ELEMENT =
              a.PLATFORM_IS_IPAD || a.PLATFORM_IS_IPHONE_IPOD;
            a.PLATFORM_AUTO_SEEK_AFTER_MIDROLL = a.PLATFORM_IS_IPAD;
            a.PLATFORM_NOT_SUPPORT_OVERLAY_AD =
              a.PLATFORM_IS_IPHONE_IPOD ||
              (0 < a.PLATFORM_ANDROID_VERSION && 3.1 > a.PLATFORM_ANDROID_VERSION) ||
              a.PLATFORM_IS_WINDOWSPHONE;
            a.PLATFORM_FILL_VIDEO_POOL_FOR_MIDROLL = 4.2 <= a.PLATFORM_IOS_VERSION;
            a.PLATFORM_NOT_SUPPORT_MIDROLL_AD =
              (2.2 <= a.PLATFORM_ANDROID_VERSION && 3 >= a.PLATFORM_ANDROID_VERSION) ||
              9 <= a.PLATFORM_IE_MOBILE_VERSION;
            a.PLATFORM_NOT_SUPPORT_VIDEO_AD =
              0 < a.PLATFORM_ANDROID_VERSION && 2.1 >= a.PLATFORM_ANDROID_VERSION;
            a.PLATFORM_DETECT_FULL_SCREEN_FOR_MIDROLL =
              a.PLATFORM_IS_IPAD && 4.2 <= a.PLATFORM_IOS_VERSION;
            a.PLATFORM_NOT_SUPPORT_CLICK_FOR_VIDEO =
              (a.PLATFORM_IS_IPHONE_IPOD && 10 > a.PLATFORM_IOS_VERSION) ||
              a.PLATFORM_IS_WINDOWSPHONE ||
              a.PLATFORM_IS_CHROMECAST;
            a.PLATFORM_NOT_FIRE_CLICK_WHEN_AD_VIDEO_PAUSED =
              3.1 <= a.PLATFORM_ANDROID_VERSION || 10 <= a.PLATFORM_IOS_VERSION;
            a.PLATFORM_WAIT_WHEN_AD_VIDEO_TIMEOUT =
              0 < a.PLATFORM_ANDROID_VERSION && 3 >= a.PLATFORM_ANDROID_VERSION;
            a.PLATFORM_VIDEO_DOESNOT_SUPPORT_TIMEUPDATE = 9 <= a.PLATFORM_IE_MOBILE_VERSION;
            a.PLATFORM_PLAY_DUMMY_VIDEO_FOR_PREROLL =
              0 < a.PLATFORM_IOS_VERSION &&
              4.2 > a.PLATFORM_IOS_VERSION &&
              4 <= a.PLATFORM_IOS_VERSION;
            a.PLATFORM_NOT_WAIT_FOR_ERROR_WHEN_PLAY_DUMMY_VIDEO_FOR_PREROLL = !1;
            a.PLATFORM_SUPPORT_VIDEO_START_DETECT_TIMEOUT =
              0 === a.PLATFORM_IOS_VERSION ||
              (4 <= a.PLATFORM_IOS_VERSION && 4.2 > a.PLATFORM_IOS_VERSION);
            a.PLATFORM_NOT_SUPPORT_OVERLAY_CLICK_WHEN_CONTROLS_IS_TRUE = a.PLATFORM_IS_IPAD;
            a.PLATFORM_BLOCKS_AUTOPLAY =
              a.PLATFORM_IS_MOBILE ||
              a.PLATFORM_IS_SAFARI ||
              (a.PLATFORM_IS_CHROME &&
                (0 < a.PLATFORM_ANDROID_VERSION || 64 <= a.PLATFORM_BROWSER_VERSION));
            a.RENDERER_STATE_INIT = 1;
            a.RENDERER_STATE_STARTING = 2;
            a.RENDERER_STATE_STARTED = 3;
            a.RENDERER_STATE_COMPLETING = 4;
            a.RENDERER_STATE_COMPLETED = 5;
            a.RENDERER_STATE_FAILED = 6;
            a.TRANSLATOR_STATE_INIT = a.RENDERER_STATE_INIT;
            a.TRANSLATOR_STATE_STARTING = a.RENDERER_STATE_STARTING;
            a.TRANSLATOR_STATE_STARTED = a.RENDERER_STATE_STARTED;
            a.TRANSLATOR_STATE_COMPLETING = a.RENDERER_STATE_COMPLETING;
            a.TRANSLATOR_STATE_COMPLETED = a.RENDERER_STATE_COMPLETED;
            a.TRANSLATOR_STATE_FAILED = a.RENDERER_STATE_FAILED;
            a.EVENT_AD = 'adEvent';
            a.EVENT_AD_BUFFERING_START = 'adBufferingStart';
            a.EVENT_AD_BUFFERING_END = 'adBufferingEnd';
            a.EVENT_SLOT_IMPRESSION = 'slotImpression';
            a.EVENT_SLOT_END = 'slotEnd';
            a.EVENT_AD_INITIATED = 'adInitiated';
            a.EVENT_AD_IMPRESSION = 'defaultImpression';
            a.EVENT_AD_IMPRESSION_END = 'adEnd';
            a.EVENT_AD_QUARTILE = 'quartile';
            a.EVENT_AD_FIRST_QUARTILE = 'firstQuartile';
            a.EVENT_AD_MIDPOINT = 'midPoint';
            a.EVENT_AD_THIRD_QUARTILE = 'thirdQuartile';
            a.EVENT_AD_SKIPPED = 'adSkipped';
            a.EVENT_AD_COMPLETE = 'complete';
            a.EVENT_AD_CLICK = 'defaultClick';
            a.EVENT_AD_MUTE = '_mute';
            a.EVENT_AD_UNMUTE = '_un-mute';
            a.EVENT_AD_COLLAPSE = '_collapse';
            a.EVENT_AD_EXPAND = '_expand';
            a.EVENT_AD_PAUSE = '_pause';
            a.EVENT_AD_RESUME = '_resume';
            a.EVENT_AD_REWIND = '_rewind';
            a.EVENT_AD_ACCEPT_INVITATION = '_accept-invitation';
            a.EVENT_AD_CLOSE = '_close';
            a.EVENT_AD_MINIMIZE = '_minimize';
            a.EVENT_ERROR = '_e_unknown';
            a.EVENT_RESELLER_NO_AD = 'resellerNoAd';
            a.EVENT_AD_MEASUREMENT = 'concreteEvent';
            a.EVENT_EXTENSION_LOADED = 'extensionLoaded';
            a.EVENT_AD_VOLUME_CHANGE = 'adVolumeChange';
            a.EVENT_AD_AUTO_PLAY_BLOCKED = 'videoAutoPlayBlocked';
            a.INFO_KEY_CUSTOM_ID = 'customId';
            a.INFO_KEY_MODULE_TYPE = 'moduleType';
            a.MODULE_TYPE_EXTENSION = 'extension';
            a.MODULE_TYPE_RENDERER = 'renderer';
            a.MODULE_TYPE_TRANSLATOR = 'translator';
            a.INFO_KEY_ERROR_CODE = 'errorCode';
            a.INFO_KEY_ERROR_INFO = 'errorInfo';
            a.INFO_KEY_ERROR_MODULE = 'errorModule';
            a.INFO_KEY_VAST_ERROR_CODE = 'vastErrorCode';
            a.ERROR_IO = '_e_io';
            a.ERROR_TIMEOUT = '_e_timeout';
            a.ERROR_NULL_ASSET = '_e_null-asset';
            a.ERROR_ADINSTANCE_UNAVAILABLE = '_e_adinst-unavail';
            a.ERROR_UNKNOWN = '_e_unknown';
            a.ERROR_MISSING_PARAMETER = '_e_missing-param';
            a.ERROR_NO_AD_AVAILABLE = '_e_no-ad';
            a.ERROR_PARSE = '_e_parse';
            a.ERROR_INVALID_VALUE = '_e_invalid-value';
            a.ERROR_INVALID_SLOT = '_e_invalid-slot';
            a.ERROR_NO_RENDERER = '_e_no-renderer';
            a.ERROR_DEVICE_LIMIT = '_e_device-limit';
            a.ERROR_3P_COMPONENT = '_e_3p-comp';
            a.ERROR_UNSUPPORTED_3P_FEATURE = '_e_unsupp-3p-feature';
            a.ERROR_SECURITY = '_e_security';
            a.ERROR_UNMATCHED_SLOT_SIZE = '_e_slot-size-unmatch';
            a.INFO_KEY_URL = 'url';
            a.INFO_KEY_SHOW_BROWSER = 'showBrowser';
            a.INFO_KEY_CUSTOM_EVENT_NAME = 'customEventName';
            a.INFO_KEY_NEED_EMPTY_CT = 'needEmptyCT';
            a.INFO_KEY_CONCRETE_EVENT_ID = 'concreteEventId';
            a.EVENT_TYPE_CLICK_TRACKING = 'CLICKTRACKING';
            a.EVENT_TYPE_IMPRESSION = 'IMPRESSION';
            a.EVENT_TYPE_CLICK = 'CLICK';
            a.EVENT_TYPE_STANDARD = 'STANDARD';
            a.EVENT_TYPE_GENERIC = 'GENERIC';
            a.EVENT_TYPE_ERROR = 'ERROR';
            a.EVENT_VIDEO_VIEW = 'videoView';
            a.SHORT_EVENT_TYPE_IMPRESSION = 'i';
            a.SHORT_EVENT_TYPE_CLICK = 'c';
            a.SHORT_EVENT_TYPE_STANDARD = 's';
            a.SHORT_EVENT_TYPE_ERROR = 'e';
            a.INIT_VALUE_ZERO = '0';
            a.INIT_VALUE_ONE = '1';
            a.INIT_VALUE_TWO = '2';
            a.INFO_KEY_PARAMETERS = 'parameters';
            a.URL_PARAMETER_KEY_ET = 'et';
            a.URL_PARAMETER_KEY_CN = 'cn';
            a.URL_PARAMETER_KEY_INIT = 'init';
            a.URL_PARAMETER_KEY_CT = 'ct';
            a.URL_PARAMETER_KEY_METR = 'metr';
            a.URL_PARAMETER_KEY_CR = 'cr';
            a.URL_PARAMETER_KEY_KEY_VALUE = 'kv';
            a.URL_PARAMETER_KEY_ERROR_INFO = 'additional';
            a.URL_PARAMETER_KEY_ERROR_MODULE = 'renderer';
            a.URL_PARAMETER_KEY_CREATIVE_RENDITION_ID = 'reid';
            a.URL_PARAMETER_KEY_CONCRETE_EVENT_ID = 'creid';
            a.CAPABILITY_SLOT_TEMPLATE = 'sltp';
            a.CAPABILITY_DISPLAY_REFRESH = 'rfnt';
            a.CAPABILITY_MULTIPLE_CREATIVE_RENDITIONS = 'emcr';
            a.CAPABILITY_RECORD_VIDEO_VIEW = 'exvt';
            a.CAPABILITY_CHECK_COMPANION = 'cmpn';
            a.CAPABILITY_CHECK_TARGETING = 'targ';
            a.CAPABILITY_RESET_EXCLUSIVITY = 'rste';
            a.CAPABILITY_FALLBACK_UNKNOWN_ASSET = 'unka';
            a.CAPABILITY_FALLBACK_UNKNOWN_SITE_SECTION = 'unks';
            a.CAPABILITY_FALLBACK_ADS = 'fbad';
            a.CAPABILITY_SLOT_CALLBACK = 'slcb';
            a.CAPABILITY_NULL_CREATIVE = 'nucr';
            a.CAPABILITY_AUTO_EVENT_TRACKING = 'aeti';
            a.CAPABILITY_RENDERER_MANIFEST = 'rema';
            a.CAPABILITY_REQUIRE_VIDEO_CALLBACK = 'vicb';
            a.CAPABILITY_SKIP_AD_SELECTION = 'skas';
            a.SLOT_TYPE_TEMPORAL = 'temporal';
            a.SLOT_TYPE_VIDEOPLAYER_NONTEMPORAL = 'videoPlayerNonTemporal';
            a.SLOT_TYPE_SITESECTION_NONTEMPORAL = 'siteSectionNonTemporal';
            a.TIME_POSITION_CLASS_PREROLL = 'PREROLL';
            a.TIME_POSITION_CLASS_MIDROLL = 'MIDROLL';
            a.TIME_POSITION_CLASS_POSTROLL = 'POSTROLL';
            a.TIME_POSITION_CLASS_OVERLAY = 'OVERLAY';
            a.TIME_POSITION_CLASS_DISPLAY = 'DISPLAY';
            a.TIME_POSITION_CLASS_PAUSE_MIDROLL = 'PAUSE_MIDROLL';
            a.EVENT_REQUEST_INITIATED = 'onRequestInitiated';
            a.EVENT_REQUEST_COMPLETE = 'onRequestComplete';
            a.EVENT_SLOT_STARTED = 'onSlotStarted';
            a.EVENT_SLOT_ENDED = 'onSlotEnded';
            a.EVENT_CONTENT_VIDEO_PAUSED = 'contentVideoPaused';
            a.EVENT_CONTENT_VIDEO_RESUMED = 'contentVideoResumed';
            a.EVENT_CONTENT_VIDEO_PAUSE_REQUEST = 'contentVideoPauseRequest';
            a.EVENT_CONTENT_VIDEO_RESUME_REQUEST = 'contentVideoResumeRequest';
            a.CAPABILITY_STATUS_OFF = 0;
            a.CAPABILITY_STATUS_ON = 1;
            a.PARAMETER_LEVEL_PROFILE = 0;
            a.PARAMETER_LEVEL_GLOBAL = 1;
            a.PARAMETER_LEVEL_OVERRIDE = 5;
            a.PARAMETER_ENABLE_FORM_TRANSPORT = 'sdk.enableFormTransport';
            a.PARAMETER_DESIRED_BITRATE = 'desiredBitrate';
            a.PARAMETER_VIDEO_POOL_SIZE = 'sdk.videoPoolSize';
            a.PARAMETER_PAGE_SLOT_CONTENT_TYPE = 'sdk.pageSlotContentType';
            a.PARAMETER_PLAY_MIDROLL_BY_CURRENT_VIDEO_ELEMENT =
              'PARAMETER_PLAY_MIDROLL_BY_CURRENT_VIDEO_ELEMENT';
            a.PARAMETER_EXTENSION_AD_CONTROL_CLICK_ELEMENT = 'extension.ad.control.clickElement';
            a.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED = 'extension.contentVideo.enabled';
            a.PARAMETER_EXTENSION_CONTENT_VIDEO_RESPOND_PAUSE_RESUME =
              'extension.contentVideo.respondPauseResume';
            a.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SEEK_BACK =
              'extension.contentVideo.autoSeekBack';
            a.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SOURCE_RESTORE =
              'extension.contentVideo.autoSourceRestore';
            a.PARAMETER_EXTENSION_VIDEO_STATE_ENABLED = 'extension.videoState.enabled';
            a.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT = 'renderer.video.startDetectTimeout';
            a.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT =
              'renderer.video.progressDetectTimeout';
            a.PARAMETER_RENDERER_VIDEO_ANDROID_DELAY = 'renderer.video.android.delay';
            a.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE =
              'renderer.video.displayControlsWhenPause';
            a.PARAMETER_RENDERER_VIDEO_CLICK_DETECTION = 'renderer.video.clickDetection';
            a.PARAMETER_RENDERER_VIDEO_PLAY_AFTER_STALLED = 'renderer.video.playAfterStalled';
            a.PARAMETER_EXTENSION_SURVEY_ENABLED = 'extension.survey.enabled';
            a.PARAMETER_RENDERER_DISPLAY_COAD_SCRIPT_NAME = 'renderer.html.coadScriptName';
            a.PARAMETER_RENDERER_HTML_SHOULD_BACKGROUND_TRANSPARENT =
              'renderer.html.isBackgroundTransparent';
            a.PARAMETER_RENDERER_HTML_SHOULD_END_AFTER_DURATION =
              'renderer.html.shouldEndAfterDuration';
            a.PARAMETER_RENDERER_HTML_AD_LOAD_TIMEOUT = 'renderer.html.adLoadTimeout';
            a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE = 'renderer.html.placementType';
            a.PARAMETER_RENDERER_HTML_BOOTSTRAP = 'renderer.html.bootstrap';
            a.PARAMETER_RENDERER_HTML_PRIMARY_ANCHOR = 'renderer.html.primaryAnchor';
            a.PARAMETER_RENDERER_HTML_MARGIN_WIDTH = 'renderer.html.marginWidth';
            a.PARAMETER_RENDERER_HTML_MARGIN_HEIGHT = 'renderer.html.marginHeight';
            a.PARAMETER_VPAID_CREATIVE_TIMEOUT_DELAY = 'renderer.vpaid.creativeTimeoutDelay';
            a.PARAMETER_VAST_TIMEOUT_IN_MILLISECONDS = 'translator.vast.timeoutInMilliseconds';
            a.PARAMETER_VAST_MAX_WRAPPER_COUNT = 'translator.vast.maxWrapperCount';
            a.VAST_DEFAULT_MAX_WRAPPER_COUNT = 5;
            a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE_INLINE = 'inline';
            a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE_INTERSTITIAL = 'interstitial';
            a.PARAMETER_RENDERER_HTML_BASEUNIT_INTERSTITIAL = 'app-interstitial';
            a.ID_TYPE_FW = 1;
            a.ID_TYPE_CUSTOM = 2;
            a.ID_TYPE_GROUP = 3;
            a.VIDEO_STATE_PLAYING = 1;
            a.VIDEO_STATE_PAUSED = 2;
            a.VIDEO_STATE_STOPPED = 3;
            a.VIDEO_STATE_COMPLETED = 4;
            a.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED = 1;
            a.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED = 2;
            a.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE = 3;
            a.VIDEO_ASSET_AUTO_PLAY_TYPE_NON_AUTO_PLAY = 3;
            a.VIDEO_ASSET_DURATION_TYPE_EXACT = 'exact';
            a.VIDEO_ASSET_DURATION_TYPE_VARIABLE = 'variable';
            a.ADUNIT_PREROLL = 'preroll';
            a.ADUNIT_MIDROLL = 'midroll';
            a.ADUNIT_POSTROLL = 'postroll';
            a.ADUNIT_OVERLAY = 'overlay';
            a.ADUNIT_STREAM_PREROLL = 'stream_preroll';
            a.ADUNIT_STREAM_POSTROLL = 'stream_postroll';
            a.SLOT_LOCATION_PLAYER = 'player';
            a.SLOT_LOCATION_EXTERNAL = 'external';
            a.SLOT_OPTION_INITIAL_AD_STAND_ALONE = 0;
            a.SLOT_OPTION_INITIAL_AD_KEEP_ORIGINAL = 1;
            a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_ONLY = 2;
            a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_STAND_ALONE = 3;
            a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_THEN_STAND_ALONE = 4;
            a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_NO_STAND_ALONE = 5;
            a.SLOT_OPTION_INITIAL_AD_NO_STAND_ALONE = 6;
            a.SLOT_OPTION_INITIAL_AD_NO_STAND_ALONE_IF_TEMPORAL = 7;
            a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_NO_STAND_ALONE_IF_TEMPORAL = 8;
            a.REQUEST_MODE_ON_DEMAND = 'on-demand';
            a.REQUEST_MODE_LIVE = 'live';
            a.MINIMUM_VAST_VERSION_SUPPORTED = 2;
            a.MAXIMUM_VAST_VERSION_SUPPORTED = 4;
            a.ERROR_VAST_XML_PARSING = '100';
            a.ERROR_VAST_SCHEMA_VALIDATION = '101';
            a.ERROR_VAST_VERSION_NOT_SUPPORTED = '102';
            a.ERROR_VAST_TRACKING_ERROR = '200';
            a.ERROR_VAST_LINEARITY_NOT_MATCH = '201';
            a.ERROR_VAST_NO_AD = '303';
            a.ERROR_VAST_WRAPPER_LIMIT_REACH = '302';
            a.ERROR_VAST_URI_TIMEOUT = '301';
            a.ERROR_VAST_GENERAL_LINEAR_ERROR = '400';
            a.ERROR_VAST_NON_LINEAR_GENERAL_ERROR = '500';
            a.ERROR_VAST_COMPANION_GENERAL_ERROR = '600';
            a.ERROR_VAST_GENERAL_VPAID_ERROR = '901';
            a.Util = {
              canPlayVideoType: function (b) {
                if (a.PLATFORM_IS_SAFARI && ('video/ogg' === b || 'video/webm' === b)) return !1;
                if (1 < a.PLATFORM_ANDROID_VERSION && 'video/m4v' === b) return !0;
                'video/3gp' === b && (b = 'video/3gpp');
                if (3 <= a.PLATFORM_ANDROID_VERSION && 'video/3gpp' === b) return !0;
                var c = document.createElement('video');
                return c.canPlayType
                  ? !(!c.canPlayType(b) && !c.canPlayType(b.replace('/', '/x-')))
                  : !1;
              },
              str2bool: function (b) {
                if (!b) return !1;
                b = a.Util.trim(b).toLowerCase();
                return 'true' === b || 'yes' === b || 'on' === b || '1' === b;
              },
              trim: function (a) {
                return 'string' !== typeof a ? a.toString() : a.replace(/^\s+|\s+$/g, '');
              },
              isBlank: function (b) {
                return !b || '' === a.Util.trim(b);
              },
              encodeToHex: function (a) {
                for (var b = '', d = 0; d < a.length; d++) {
                  for (var e = a.charCodeAt(d).toString(16).toUpperCase(); 4 > e.length; )
                    e = '0' + e;
                  b += '\\u' + e.toUpperCase();
                }
                return b;
              },
              forEachOnArray: function (a, c, d) {
                var b;
                if (null == a) throw new TypeError(' array is null or not defined');
                a = Object(a);
                var f = a.length >>> 0;
                if ('[object Function]' !== {}.toString.call(c))
                  throw new TypeError(c + ' is not a function');
                d && (b = d);
                for (d = 0; d < f; ) {
                  if (d in a) {
                    var g = a[d];
                    c.call(b, g, d, a);
                  }
                  d++;
                }
              },
              mixin: function (a, c) {
                for (var b in c) 'undefined' !== typeof c[b] && (a[b] = c[b]);
                return a;
              },
              copy: function (b) {
                return a.Util.mixin({}, b);
              },
              bind: function (a, c) {
                var b = c,
                  e = Array.prototype.slice.call(arguments);
                e.shift();
                b = e.shift();
                return function () {
                  return b.apply(a, e.concat(Array.prototype.slice.call(arguments)));
                };
              },
              getObject: function (a, c, d) {
                if (!a) return null;
                a = a.split('.');
                c = c || window;
                for (var b = 0, f; c && (f = a[b]); b++)
                  c = f in c ? c[f] : d ? (c[f] = {}) : void 0;
                return c;
              },
              buildNode: function (b, c, d, e, f) {
                a.debug('Util.buildNode');
                d || (d = document);
                b.innerHTML = c || '';
                b = b.getElementsByTagName('script');
                var g = d.getElementsByTagName('head')[0];
                for (c = 0; c < b.length; ++c)
                  if (a.PLATFORM_IS_FIREFOX || b[c].src) {
                    var h = d.createElement('script');
                    b[c].charset && (h.charset = b[c].charset);
                    b[c].src && (h.src = b[c].src);
                    b[c].innerHTML && (h.innerHTML = b[c].innerHTML);
                    h.onload = h.onreadystatechange = function () {
                      (this.readyState &&
                        'loaded' !== this.readyState &&
                        'complete' !== this.readyState) ||
                        g.removeChild(h);
                    };
                    try {
                      g.appendChild(h);
                    } catch (k) {
                      a.warn('load script err: ' + k);
                    }
                  } else
                    (h = b[c].innerHTML),
                      e && (h = h.replace(/var fw_scope = document;/, 'var fw_scope=' + e + ';')),
                      f &&
                        (h = h.replace(
                          /var fw_scope_window = window;/,
                          'var fw_scope_window=' + f + ';'
                        )),
                      eval(h);
              },
              replacePageSlot: function (b, c, d) {
                var e = b;
                a.debug(
                  'Util.replacePageSlot(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                var f;
                try {
                  var g = document.getElementById(e)
                    ? document
                    : parent.document.getElementById(e)
                    ? parent.document
                    : null;
                  var h = document.getElementById(e)
                    ? 'window'
                    : parent.document.getElementById(e)
                    ? 'parent'
                    : null;
                } catch (l) {
                  h = g = null;
                }
                if (!g)
                  for (var k = 0; k < window.frames.length; k++)
                    try {
                      window.frames[k].document.getElementById(e) &&
                        ((g = window.frames[k].document), (h = 'window.frames[' + k + ']'));
                    } catch (l) {
                      a.warn(l);
                    }
                h && (f = h + '.document');
                a.log('replacing slot ' + e + ' in frame ' + f);
                if (!g) throw 'Slot element not found: ' + e;
                e = d ? g.getElementById(d) : g.getElementById('_fw_container_' + e);
                a.Util.buildNode(e, c, g, f, h);
              },
              transformUrlToProxy: function (b) {
                if (null == a.proxyUrl) return b;
                var c = a.proxyUrl.replace('$', '$$');
                b = b.replace(/https?:\/\//, c);
                a.proxyAuthenticationParameter &&
                  (b = a.Util.setParameterInURL(
                    b,
                    a.proxyAuthenticationParameter.key,
                    a.proxyAuthenticationParameter.value
                  ));
                return b;
              },
              pingURLWithImage: function (b) {
                new Image(1, 1).src = a.Util.transformUrlToProxy(b);
              },
              pingURLWithForm: function (b, c, d) {
                d = d ? '_fw_request' : '_fw_cb';
                null == c && (c = Math.random());
                var e = document.createElement('iframe');
                e.name = d + '_iframe_' + c;
                e.id = d + '_iframe_' + c;
                e.style.position = 'absolute';
                e.style.left = '-10000px';
                e.style.width = '1px';
                e.style.visibility = 'hidden';
                var f = document.createElement('form');
                f.action = a.Util.transformUrlToProxy(b);
                f.id = d + '_form_' + c;
                f.target = e.id;
                f.method = 'post';
                f.style.position = 'absolute';
                f.style.left = '-10000px';
                f.style.width = '1px';
                f.style.visibility = 'hidden';
                document.body &&
                  (document.body.appendChild(e),
                  document.body.appendChild(f),
                  f.submit(),
                  document.body.removeChild(f));
              },
              pingURLWithScript: function (b) {
                var c = document.getElementsByTagName('head')[0],
                  d = document.createElement('script');
                d.src = a.Util.transformUrlToProxy(b);
                d.onload = d.onreadystatechange = function () {
                  (this.readyState &&
                    'loaded' !== this.readyState &&
                    'complete' !== this.readyState) ||
                    c.removeChild(d);
                };
                c.appendChild(d);
              },
              pingURL: function (b) {
                a.debug('send callback: ' + b);
                b &&
                  (a.PLATFORM_SEND_REQUEST_BY_FORM
                    ? a.Util.pingURLWithForm(b, null, !1)
                    : a.Util.pingURLWithImage(b));
              },
              pingURLs: function (b) {
                for (var c = 0; c < b.length; c++) a.Util.pingURL(b[c]);
              },
              setParameterInURL: function (a, c, d) {
                if (!a || !c || null == d) return null;
                var b = !1;
                a = a.split('?');
                d = encodeURIComponent(d);
                if (a[1]) {
                  var f = a[1].split('&');
                  for (var g = 0; g < f.length; ++g) {
                    var h = f[g].split('=');
                    if (h[0] === c) {
                      f[g] = h[0] + '=' + d;
                      b = !0;
                      break;
                    }
                  }
                  h = f.join('&');
                  b || (h = c + '=' + d + '&' + h);
                } else h = c + '=' + d;
                return (h = a[0] + '?' + h);
              },
              getParameterInURL: function (b, c) {
                if (!b || !c) return null;
                b = b.split('?');
                if (b[1]) {
                  b = b[1].split('&');
                  for (var d = 0; d < b.length; ++d) {
                    var e = b[d].split('=');
                    if (e[0] === c && !a.Util.isBlank(e[1])) return decodeURIComponent(e[1]);
                  }
                }
                return null;
              },
              isParameterInURL: function (a, c) {
                if (!a || !c) return !1;
                a = a.split('?');
                if (a[1]) {
                  a = a[1].split('&');
                  for (var b = 0; b < a.length; ++b) if (a[b].split('=')[0] === c) return !0;
                }
                return !1;
              },
              flashVersion: function () {
                var b = '0,0,0,0';
                if (null != navigator.plugins && 0 < navigator.plugins.length) {
                  if (
                    navigator.plugins['Shockwave Flash 2.0'] ||
                    navigator.plugins['Shockwave Flash']
                  )
                    try {
                      var c = navigator.plugins[
                          'Shockwave Flash' +
                            (navigator.plugins['Shockwave Flash 2.0'] ? ' 2.0' : '')
                        ].description.split(' '),
                        d = c[2].split('.'),
                        e = d[0],
                        f = d[1],
                        g = c[3];
                      '' === g && (g = c[4]);
                      'd' === g[0]
                        ? (g = g.substring(1))
                        : 'r' === g[0] &&
                          ((g = g.substring(1)),
                          0 < g.indexOf('d') && (g = g.substring(0, g.indexOf('d'))));
                      b = e + ',' + f + ',' + g + ',0';
                    } catch (l) {
                      a.warn('Flash detection failed on navigator method');
                    }
                } else
                  try {
                    var h = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7');
                    var k = h.GetVariable('$version').split(' ')[1].split(',');
                    3 === k.length
                      ? (b = k.join(',') + ',0')
                      : 4 === k.length && (b = k.join(','));
                  } catch (l) {
                    a.warn('Flash detection failed on ActiveX method');
                  }
                return b;
              },
              xmlToJson: function (b) {
                var c = {};
                if (!b) return null;
                if (1 === b.nodeType) {
                  if (0 < b.attributes.length) {
                    c['@attributes'] = {};
                    for (var d = 0; d < b.attributes.length; d++) {
                      var e = b.attributes.item(d);
                      c['@attributes'][e.nodeName] = e.nodeValue;
                    }
                  }
                } else
                  3 === b.nodeType ? (c = b.nodeValue) : 4 === b.nodeType && (c = b.nodeValue);
                if (b.hasChildNodes()) {
                  for (d = 0; d < b.childNodes.length; d++) {
                    e = b.childNodes.item(d);
                    var f = e.nodeName;
                    if ('undefined' === typeof c[f]) c[f] = a.Util.xmlToJson(e);
                    else {
                      if ('undefined' === typeof c[f].length || 'string' === typeof c[f]) {
                        var g = c[f];
                        c[f] = [];
                        c[f].push(g);
                      }
                      c[f].push(a.Util.xmlToJson(e));
                    }
                  }
                  'undefined' !== typeof c['#cdata-section']
                    ? ((c.value = c['#cdata-section']),
                      c.value.constructor === Array && (c.value = c.value.join('')))
                    : c['#text'] && (c.value = c['#text']);
                }
                return c;
              },
              lazyJavaScriptLoad: function (a, c) {
                var b = document.getElementsByTagName('head')[0] || document.documentElement,
                  e = document.createElement('script');
                e.type = 'text/javascript';
                e.src = a;
                c &&
                  (e.attachEvent && !window.opera
                    ? (e.onreadystatechange = function () {
                        if ('loaded' === e.readyState || 'complete' === e.readyState)
                          b.removeChild(e), (e.onreadystatechange = null), c();
                      })
                    : e.addEventListener(
                        'load',
                        function () {
                          b.removeChild(e);
                          c();
                        },
                        !1
                      ));
                b.insertBefore(e, b.firstChild);
              },
              getViewport: function () {
                var a = 0,
                  c = 0;
                'undefined' !== typeof window.innerWidth
                  ? ((a = window.innerWidth), (c = window.innerHeight))
                  : 'undefined' !== typeof document.documentElement &&
                    'undefined' !== typeof document.documentElement.clientWidth &&
                    0 !== document.documentElement.clientWidth
                  ? ((a = document.documentElement.clientWidth),
                    (c = document.documentElement.clientHeight))
                  : document.getElementsByTagName('body') &&
                    document.getElementsByTagName('body')[0] &&
                    ((a = document.getElementsByTagName('body')[0].clientWidth),
                    (c = document.getElementsByTagName('body')[0].clientHeight));
                return {
                  width: a,
                  height: c,
                  offsetX:
                    window.pageXOffset ||
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft,
                  offsetY:
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop,
                };
              },
              getAbsoluteUrl: function (b, c) {
                b = a.Util.trim(b);
                c = a.Util.trim(c);
                if (-1 !== c.indexOf('://')) return c;
                var d = b.substring(0, b.indexOf('://'));
                if (0 === c.indexOf('//')) return d + ':' + c;
                d = b.indexOf('/', b.indexOf('://') + 5);
                var e = b;
                -1 !== d && (e = b.substring(0, d));
                if (0 === c.indexOf('/')) return e + c;
                d = b.lastIndexOf('#');
                e = b;
                -1 !== d && (e = b.substring(0, d));
                if (0 === c.indexOf('#')) return e + c;
                e = b.indexOf('?');
                d = b;
                -1 !== e && (d = b.substring(0, e));
                if (0 === c.indexOf('?')) return d + c;
                e = -1 === e ? b.lastIndexOf('/') : d.lastIndexOf('/');
                d = -1 !== e ? b.substring(0, e + 1) : d + '/';
                return d + c;
              },
              secondsToHms: function (a) {
                a = isNaN(Number(a)) ? 0 : Number(a);
                var b = Math.floor((a % 3600) / 60),
                  d = Math.round((a % 3600) % 60);
                return (
                  ('0' + Math.floor(a / 3600)).slice(-2) +
                  ':' +
                  ('0' + b).slice(-2) +
                  ':' +
                  ('0' + d).slice(-2)
                );
              },
              getFixedDigitRandomNumber: function (a) {
                a = isNaN(Number(a)) ? 0 : Number(a);
                return Math.floor(9 * Math.random() * Math.pow(10, a - 1) + Math.pow(10, a - 1));
              },
              getDateStringInISOFormat: function (a) {
                return a instanceof Date && !isNaN(a.valueOf()) ? a.toISOString() : null;
              },
            };
            a.MediaState = function () {};
            a.MediaState.prototype = {};
            a.MediaState.prototype.constructor = a.MediaState;
            a.Util.mixin(a.MediaState.prototype, {
              play: function (b) {
                a.debug(this._name + ' play(' + b + ')');
              },
              pause: function (b) {
                a.debug(this._name + ' pause(' + b + ')');
              },
              complete: function (b) {
                a.debug(this._name + ' complete(' + b + ')');
              },
            });
            a.MediaInitState = function () {
              this._name = 'MediaInitState';
            };
            a.MediaInitState.prototype = new a.MediaState();
            a.MediaInitState.prototype.constructor = a.MediaInitState;
            a.Util.mixin(a.MediaInitState.prototype, {
              play: function (b) {
                a.debug(this._name + ' play(' + b + ')');
                b.setMediaState(a.MediaPlayingState.instance);
                if ('function' === typeof b.onStartPlaying) b.onStartPlaying();
              },
            });
            a.MediaInitState.instance = new a.MediaInitState();
            a.MediaPlayingState = function () {
              this._name = 'MediaPlayingState';
            };
            a.MediaPlayingState.prototype = new a.MediaState();
            a.MediaPlayingState.prototype.constructor = a.MediaPlayingState;
            a.Util.mixin(a.MediaPlayingState.prototype, {
              pause: function (b) {
                a.debug(this._name + ' pause(' + b + ')');
                b.setMediaState(a.MediaPausedState.instance);
                if ('function' === typeof b.onPausePlaying) b.onPausePlaying();
              },
              complete: function (b) {
                a.debug(this._name + ' complete(' + b + ')');
                b.setMediaState(a.MediaEndState.instance);
                if ('function' === typeof b.onCompletePlaying) b.onCompletePlaying();
              },
            });
            a.MediaPlayingState.instance = new a.MediaPlayingState();
            a.MediaPausedState = function () {
              this._name = 'MediaPausedState';
            };
            a.MediaPausedState.prototype = new a.MediaState();
            a.MediaPausedState.prototype.constructor = a.MediaPausedState;
            a.Util.mixin(a.MediaPausedState.prototype, {
              play: function (b) {
                a.debug(this._name + ' play(' + b + ')');
                b.setMediaState(a.MediaPlayingState.instance);
                if ('function' === typeof b.onResumePlaying) b.onResumePlaying();
              },
              complete: function (b) {
                a.debug(this._name + ' complete(' + b + ')');
                b.setMediaState(a.MediaEndState.instance);
                if ('function' === typeof b.onCompletePlaying) b.onCompletePlaying();
              },
            });
            a.MediaPausedState.instance = new a.MediaPausedState();
            a.MediaReplayingState = function () {
              this._name = 'MediaReplayingState';
            };
            a.MediaReplayingState.prototype = new a.MediaState();
            a.MediaReplayingState.prototype.constructor = a.MediaReplayingState;
            a.Util.mixin(a.MediaReplayingState.prototype, {
              pause: function (b) {
                a.debug(this._name + ' pause(' + b + ')');
                b.setMediaState(a.MediaReplayPausedState.instance);
                if ('function' === typeof b.onPausePlaying) b.onPausePlaying();
              },
              complete: function (b) {
                a.debug(this._name + ' complete(' + b + ')');
                b.setMediaState(a.MediaEndState.instance);
                if ('function' === typeof b.onCompleteReplaying) b.onCompleteReplaying();
              },
            });
            a.MediaReplayingState.instance = new a.MediaReplayingState();
            a.MediaReplayPausedState = function () {
              this._name = 'MediaReplayPausedState';
            };
            a.MediaReplayPausedState.prototype = new a.MediaState();
            a.MediaReplayPausedState.prototype.constructor = a.MediaReplayPausedState;
            a.Util.mixin(a.MediaReplayPausedState.prototype, {
              play: function (b) {
                a.debug(this._name + ' play(' + b + ')');
                b.setMediaState(a.MediaReplayingState.instance);
                if ('function' === typeof b.onResumePlaying) b.onResumePlaying();
              },
              complete: function (b) {
                a.debug(this._name + ' complete(' + b + ')');
                b.setMediaState(a.MediaEndState.instance);
                if ('function' === typeof b.onCompleteReplaying) b.onCompleteReplaying();
              },
            });
            a.MediaReplayPausedState.instance = new a.MediaReplayPausedState();
            a.MediaEndState = function () {
              this._name = 'MediaEndState';
            };
            a.MediaEndState.prototype = new a.MediaState();
            a.MediaEndState.prototype.constructor = a.MediaEndState;
            a.Util.mixin(a.MediaEndState.prototype, {
              play: function (b) {
                a.debug(this._name + ' play(' + b + ')');
                b.setMediaState(a.MediaReplayingState.instance);
                if ('function' === typeof b.onStartReplaying) b.onStartReplaying();
              },
            });
            a.MediaEndState.instance = new a.MediaEndState();
            a.RendererState = function () {};
            a.RendererState.prototype = {};
            a.RendererState.prototype.constructor = a.RendererState;
            a.Util.mixin(a.RendererState.prototype, {
              start: function (b) {
                a.debug(this._name + ' start() rendererController = ' + b);
              },
              notifyStarted: function (b) {
                a.debug(this._name + ' notifyStarted() rendererController = ' + b);
              },
              stop: function (b) {
                a.debug(this._name + ' stop() rendererController = ' + b);
              },
              complete: function (b) {
                a.debug(this._name + ' complete() rendererController = ' + b);
              },
              notifyCompleted: function (b) {
                a.debug(this._name + ' notifyCompleted() rendererController = ' + b);
              },
              fail: function (b) {
                a.debug(this._name + ' fail() rendererController = ' + b);
                b.setRendererState(a.RendererFailedState.instance);
                b.getAdInstance().complete();
              },
            });
            a.RendererInitState = function () {
              this._name = 'RendererInitState';
            };
            a.RendererInitState.prototype = new a.RendererState();
            a.RendererInitState.prototype.constructor = a.RendererInitState;
            a.RendererInitState.instance = new a.RendererInitState();
            a.Util.mixin(a.RendererInitState.prototype, {
              start: function (b) {
                a.debug(this._name + ' start()');
                b.setRendererState(a.RendererStartingState.instance);
                b.getRenderer().start(b);
              },
              stop: function (b) {
                a.debug(this._name + ' stop()');
                b.setRendererState(a.RendererCompletingState.instance);
                b.getRendererState().notifyCompleted(b);
              },
            });
            a.RendererStartingState = function () {
              this._name = 'RendererStartingState';
            };
            a.RendererStartingState.prototype = new a.RendererState();
            a.RendererStartingState.prototype.constructor = a.RendererStartingState;
            a.RendererStartingState.instance = new a.RendererStartingState();
            a.Util.mixin(a.RendererStartingState.prototype, {
              notifyStarted: function (b) {
                a.debug(this._name + ' notifyStarted()');
                b.setRendererState(a.RendererStartedState.instance);
                b.getAdInstance().play();
              },
              stop: function (b) {
                a.debug(this._name + ' stop()');
                'function' === typeof b.getRenderer().stop &&
                  (b.setRendererState(a.RendererCompletingState.instance), b.getRenderer().stop());
              },
            });
            a.RendererStartedState = function () {
              this._name = 'RendererStartedState';
            };
            a.RendererStartedState.prototype = new a.RendererState();
            a.RendererStartedState.prototype.constructor = a.RendererStartedState;
            a.RendererStartedState.instance = new a.RendererStartedState();
            a.Util.mixin(a.RendererStartedState.prototype, {
              complete: function (b) {
                a.debug(this._name + ' complete()');
                b.setRendererState(a.RendererCompletingState.instance);
              },
              stop: function (b) {
                a.debug(this._name + ' stop()');
                'function' === typeof b.getRenderer().stop &&
                  (b.setRendererState(a.RendererCompletingState.instance),
                  !1 === b.getRenderer().stop() && b.getAdInstance().fakeComplete());
              },
            });
            a.RendererCompletingState = function () {
              this._name = 'RendererCompletingState';
            };
            a.RendererCompletingState.prototype = new a.RendererState();
            a.RendererCompletingState.prototype.constructor = a.RendererCompletingState;
            a.RendererCompletingState.instance = new a.RendererCompletingState();
            a.Util.mixin(a.RendererCompletingState.prototype, {
              notifyCompleted: function (b) {
                a.debug(this._name + ' notifyCompleted()');
                b.setRendererState(a.RendererCompletedState.instance);
                b.getAdInstance().complete();
              },
            });
            a.RendererCompletedState = function () {
              this._name = 'RendererCompletedState';
            };
            a.RendererCompletedState.prototype = new a.RendererState();
            a.RendererCompletedState.prototype.constructor = a.RendererCompletedState;
            a.RendererCompletedState.instance = new a.RendererCompletedState();
            a.RendererFailedState = function () {
              this._name = 'RendererFailedState';
            };
            a.RendererFailedState.prototype = new a.RendererState();
            a.RendererFailedState.prototype.constructor = a.RendererFailedState;
            a.RendererFailedState.instance = new a.RendererFailedState();
            a.HTMLRenderer = function () {};
            a.HTMLRenderer.prototype = {
              start: function (b) {
                this.rendererController = b;
                b.getAdInstance().getSlot().getBase()
                  ? this._setupParameters() &&
                    (this._render(), b.handleStateTransition(a.RENDERER_STATE_STARTED))
                  : this._onRendererFailed(a.ERROR_INVALID_SLOT, 'slot base is empty');
              },
              pause: function () {
                this.log('pause');
                this.shouldEndAfterDuration && this.timer && this.timer.pause();
              },
              resume: function () {
                this.log('resume');
                this.shouldEndAfterDuration && this.timer && this.timer.start();
              },
              stop: function () {
                this.log(
                  'stop isMRAIDAd:' +
                    this.isMRAIDAd +
                    ' tpc:' +
                    this._tpc +
                    ' interstitial:' +
                    this.shouldKeepInterstitial
                );
                return this._stop();
              },
              _stop: function () {
                this.log(
                  '_stop isMRAIDAd:' +
                    this.isMRAIDAd +
                    ' tpc:' +
                    this._tpc +
                    ' interstitial:' +
                    this.shouldKeepInterstitial
                );
                if (
                  this.isMRAIDAd ||
                  this._tpc !== a.TIME_POSITION_CLASS_DISPLAY ||
                  this.shouldKeepInterstitial
                )
                  this._cleanup(),
                    this.rendererController.handleStateTransition(a.RENDERER_STATE_COMPLETED);
                else return !1;
              },
              resize: function () {
                var b = this.rendererController.getAdInstance(),
                  c = b.getSlot().getBase();
                b.getSlot().getTimePositionClass() === a.TIME_POSITION_CLASS_OVERLAY
                  ? !this.isMRAIDAd ||
                    (this.isMRAIDAd && this.mraid.state === this.mraid.STATEDEFAULT)
                    ? ((b = '_fw_ad_container_html_' + b.getSlot().getCustomId() + '_'),
                      (b = document.getElementById(b)),
                      (b.style.width = c.style.width || '100%'),
                      (b.style.height = c.style.height || '100%'),
                      this._layoutOverlayAd(this.defaultAdElement))
                    : this.log('Cannot resize an MRAID ad that is not in the default state')
                  : this.log('Cannot resize a non-overlay ad');
              },
              _cleanup: function () {
                this.log('_cleanup');
                this.timer && (this.timer.stop(), (this.timer = null));
                this.adLoadTimeoutTimer &&
                  (this.adLoadTimeoutTimer.stop(), (this.adLoadTimeoutTimer = null));
                window.removeEventListener
                  ? (document.removeEventListener('touchmove', this.touchMoveDisabler, !1),
                    window.removeEventListener('message', this.messageHandlerFunc, !1),
                    window.removeEventListener('resize', this.viewportChangeFunc, !1),
                    window.removeEventListener('scroll', this.viewportChangeFunc, !1))
                  : window.detachEvent &&
                    (window.detachEvent('onmessage', this.messageHandlerFunc),
                    window.detachEvent('onresize', this.viewportChangeFunc),
                    window.detachEvent('onscroll', this.viewportChangeFunc));
                if (
                  this.isMRAIDAd &&
                  (this.mraid.inExpandedState() &&
                    (this.log('stopping with expanded state, invoke close()'), this._mraidClose()),
                  this.mraid.inDefaultState())
                ) {
                  this.log('stopping with default state, invoke close()');
                  this._mraidClose();
                  return;
                }
                if (this.expandedAdElement) {
                  var a = this.expandedAdElement.parentNode;
                  this.expandedAdElement._fw_closeButton &&
                    a.removeChild(this.expandedAdElement._fw_closeButton);
                  a.removeChild(this.expandedAdElement);
                  this.expandedAdElement === this.defaultAdElement &&
                    (this.defaultAdElementContainer === this.defaultAdElement &&
                      (this.defaultAdElementContainer = null),
                    (this.defaultAdElement = null));
                  this.expandedAdElement = null;
                }
                this.expandedLightbox &&
                  ((a = this.expandedLightbox.parentNode),
                  a.removeChild(this.expandedLightbox),
                  (this.expandedLightbox = null));
                if (this.defaultAdElement) {
                  a = this.defaultAdElement.parentNode;
                  var c = this.defaultAdElement;
                  c.style.display = 'none';
                  a !== this.rendererController.getAdInstance().getSlot().getBase() &&
                    window.setTimeout(function () {
                      for (var b = (a && a.childNodes) || [], e = 0; e < b.length; e++) {
                        var f = b[e];
                        f === c && a.removeChild(f);
                      }
                    }, 200);
                  this.defaultAdElementContainer === this.defaultAdElement &&
                    (this.defaultAdElementContainer = null);
                  this.defaultAdElement = null;
                }
                this.defaultAdElementContainer &&
                  ((a = this.defaultAdElementContainer.parentNode),
                  a.removeChild(this.defaultAdElementContainer),
                  (this.defaultAdElementContainer = null));
                (this.shouldPauseContentWhenStart ||
                  (this.isInterstitialNow && !this.isMRAIDAd)) &&
                  this.rendererController.requestContentStateChange(!1);
              },
              _setupParameters: function () {
                var b = this.rendererController,
                  c = b.getAdInstance(),
                  d = c.getSlot().getTimePositionClass();
                this._tpc = d;
                var e = c.getActiveCreativeRendition();
                c = e.getBaseUnit();
                e = e.getCreativeApi();
                var f;
                if (a.PLATFORM_NOT_SUPPORT_OVERLAY_AD && d === a.TIME_POSITION_CLASS_OVERLAY)
                  return (
                    this._onRendererFailed(
                      a.ERROR_DEVICE_LIMIT,
                      'Overlay not supported on this device.'
                    ),
                    !1
                  );
                if (
                  a.PLATFORM_NOT_SUPPORT_MIDROLL_AD &&
                  (d === a.TIME_POSITION_CLASS_MIDROLL ||
                    d === a.TIME_POSITION_CLASS_PAUSE_MIDROLL)
                )
                  return (
                    this._onRendererFailed(
                      a.ERROR_DEVICE_LIMIT,
                      'Midroll, pause_midroll not supported on this device.'
                    ),
                    !1
                  );
                if (a.PLATFORM_IS_IPHONE_IPOD)
                  switch (d) {
                    case a.TIME_POSITION_CLASS_MIDROLL:
                    case a.TIME_POSITION_CLASS_PAUSE_MIDROLL:
                    case a.TIME_POSITION_CLASS_OVERLAY:
                      return (
                        this._onRendererFailed(
                          a.ERROR_DEVICE_LIMIT,
                          'Midroll, pause_midroll and overlay ads are not supported on iPod, iPhone.'
                        ),
                        !1
                      );
                    case a.TIME_POSITION_CLASS_PREROLL:
                    case a.TIME_POSITION_CLASS_POSTROLL:
                      b.setCapability(a.EVENT_AD_CLICK, a.CAPABILITY_STATUS_OFF);
                  }
                this.adLoadTimeout = 5;
                if ((f = b.getParameter(a.PARAMETER_RENDERER_HTML_AD_LOAD_TIMEOUT)))
                  this.adLoadTimeout = 0 < Number(f) ? Number(f) : this.adLoadTimeout;
                this.shouldKeepInterstitial = !1;
                (f = b.getParameter(a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE))
                  ? (this.shouldKeepInterstitial =
                      f === a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE_INTERSTITIAL)
                  : 'string' === typeof c &&
                    (this.shouldKeepInterstitial =
                      c.toLowerCase() === a.PARAMETER_RENDERER_HTML_BASEUNIT_INTERSTITIAL);
                this.isInterstitialNow = this.shouldKeepInterstitial;
                this.shouldPauseContentWhenStart = !1;
                this.shouldPauseContentWhenExpandOrClick =
                  !this.shouldKeepInterstitial &&
                  (d === a.TIME_POSITION_CLASS_DISPLAY || d === a.TIME_POSITION_CLASS_OVERLAY);
                this.shouldBackgroundTransparent = !1;
                f = b.getParameter(a.PARAMETER_RENDERER_HTML_SHOULD_BACKGROUND_TRANSPARENT);
                'undefined' !== typeof f &&
                  null != f &&
                  (this.shouldBackgroundTransparent = a.Util.str2bool(f));
                this.shouldEndAfterDuration =
                  d !== a.TIME_POSITION_CLASS_DISPLAY || this.shouldKeepInterstitial;
                f = b.getParameter(a.PARAMETER_RENDERER_HTML_SHOULD_END_AFTER_DURATION);
                'undefined' !== typeof f &&
                  null != f &&
                  (this.shouldEndAfterDuration = a.Util.str2bool(f));
                this.coadScriptName = b.getParameter(
                  a.PARAMETER_RENDERER_DISPLAY_COAD_SCRIPT_NAME
                );
                this.coadScriptName || (this.coadScriptName = b.getParameter('coad_script_name'));
                this.primaryAnchor =
                  b.getParameter(a.PARAMETER_RENDERER_HTML_PRIMARY_ANCHOR) || 'bc';
                this.marginWidth = b.getParameter(a.PARAMETER_RENDERER_HTML_MARGIN_WIDTH) || 0;
                this.marginHeight = b.getParameter(a.PARAMETER_RENDERER_HTML_MARGIN_HEIGHT) || 0;
                this.bootstrap = b.getParameter(a.PARAMETER_RENDERER_HTML_BOOTSTRAP);
                c = a.Util.getViewport();
                this.defaultExpandWidth = c.width;
                this.defaultExpandHeight = c.height;
                this.isMRAIDAd = 'MRAID-1.0' === e;
                this.mraid = new (function (b) {
                  this.STATELOADING = 'loading';
                  this.STATEDEFAULT = 'default';
                  this.STATEEXPANDED = 'expanded';
                  this.STATEHIDDEN = 'hidden';
                  this._renderer = b;
                  this._state = this.STATELOADING;
                  this._useCustomClose = !1;
                  this.viewable = this.expandIsModal = !0;
                  this._baseUrlExpanded = this._baseUrlDefault = '';
                  b =
                    Object.defineProperty ||
                    function (a, b, c) {
                      c.get && a.__defineGetter__(b, c.get);
                      c.set && a.__defineSetter__(b, c.set);
                    };
                  b(this, 'baseUrl', {
                    get: function () {
                      return this.inExpandedState()
                        ? this._baseUrlExpanded || this._baseUrlDefault
                        : this._baseUrlDefault;
                    },
                    set: function (a) {
                      this.inExpandedState()
                        ? (this._baseUrlExpanded = a)
                        : ((this._baseUrlDefault = a), (this._baseUrlExpanded = ''));
                    },
                  });
                  b(this, 'useCustomClose', {
                    get: function () {
                      return this._useCustomClose;
                    },
                    set: function (a) {
                      this._useCustomClose === !a &&
                        ((this._useCustomClose = !!a), this.pushData());
                    },
                  });
                  b(this, 'placementType', {
                    get: function () {
                      return this._renderer.shouldKeepInterstitial ? 'interstitial' : 'inline';
                    },
                  });
                  b(this, 'expandWidth', {
                    get: function () {
                      return this._renderer.requestedExpandWidth &&
                        this._renderer.requestedExpandWidth < this._renderer.defaultExpandWidth
                        ? this._renderer.requestedExpandWidth
                        : this._renderer.defaultExpandWidth;
                    },
                  });
                  b(this, 'expandHeight', {
                    get: function () {
                      return this._renderer.requestedExpandHeight &&
                        this._renderer.requestedExpandHeight < this._renderer.defaultExpandHeight
                        ? this._renderer.requestedExpandHeight
                        : this._renderer.defaultExpandHeight;
                    },
                  });
                  b(this, 'state', {
                    get: function () {
                      return this._state;
                    },
                    set: function (b) {
                      this.log('mraid.state change ' + this.state + ' => ' + b);
                      this.state !== b &&
                        (this._renderer.shouldPauseContentWhenExpandOrClick &&
                          (b === this.STATEEXPANDED
                            ? this._renderer.rendererController.requestContentStateChange(!0)
                            : this.inExpandedState() &&
                              this._renderer.rendererController.requestContentStateChange(!1)),
                        b === this.STATEEXPANDED
                          ? (this._renderer.expandedAdElement
                              ? this._renderer.rendererController.processEvent({
                                  name: a.EVENT_AD_ACCEPT_INVITATION,
                                })
                              : ((this._renderer.expandedAdElement = this._renderer.defaultAdElement),
                                this._renderer.rendererController.processEvent({
                                  name: a.EVENT_AD_EXPAND,
                                })),
                            this._renderer.presentInterstitial(),
                            this._renderer.shouldEndAfterDuration && this._renderer.timer.pause())
                          : b === this.STATEDEFAULT &&
                            (this._renderer.shouldKeepInterstitial
                              ? ((this._renderer.expandedAdElement = this._renderer.defaultAdElement),
                                this._renderer.presentInterstitial())
                              : (this.inExpandedState() &&
                                  (this._renderer.expandedAdElement !==
                                  this._renderer.defaultAdElement
                                    ? this._renderer.rendererController.processEvent({
                                        name: a.EVENT_AD_CLOSE,
                                      })
                                    : this._renderer.rendererController.processEvent({
                                        name: a.EVENT_AD_COLLAPSE,
                                      })),
                                (this._renderer.expandedAdElement = null),
                                this._renderer.presentInline()),
                            this._renderer.shouldEndAfterDuration && this._renderer.timer.start()),
                        (this._state = b),
                        this.pushData(),
                        b === this.STATEHIDDEN && this._renderer.stop());
                    },
                  });
                  this.inLoadingState = function () {
                    return this.state === this.STATELOADING;
                  };
                  this.inDefaultState = function () {
                    return this.state === this.STATEDEFAULT;
                  };
                  this.inExpandedState = function () {
                    return this.state === this.STATEEXPANDED;
                  };
                  this.inHiddenState = function () {
                    return this.state === this.STATEHIDDEN;
                  };
                  this.pushData = function () {
                    var a =
                      'mraid._Update("' +
                      this.state +
                      '", ' +
                      this.viewable +
                      ', "' +
                      this.placementType +
                      '", ' +
                      this.expandWidth +
                      ', ' +
                      this.expandHeight +
                      ', ' +
                      this.useCustomClose +
                      ', ' +
                      this.expandIsModal +
                      ')';
                    this.log('mraid.pushData: going to invoke on iframe with ' + a);
                    this._renderer.defaultAdElement
                      ? (this._renderer.defaultAdElement.contentWindow.postMessage(
                          'fwsdk-bounce:' + a,
                          '*'
                        ),
                        this._renderer.expandedAdElement &&
                          this._renderer.expandedAdElement !== this._renderer.defaultAdElement &&
                          this._renderer.expandedAdElement.contentWindow.postMessage(
                            'fwsdk-bounce:' + a,
                            '*'
                          ))
                      : this.warn('_mraidPushData: no iframe suitable to send ' + a);
                  };
                  this.log = function (a) {
                    this._renderer.log(a);
                  };
                  this.warn = function (a) {
                    this._renderer.warn(a);
                  };
                })(this);
                this.onLoadFunc = a.Util.bind(this, function () {
                  this.adLoadTimeoutTimer &&
                    (this.adLoadTimeoutTimer.stop(), (this.adLoadTimeoutTimer = null));
                  this.timer && this.shouldEndAfterDuration && this.timer.start();
                });
                this.touchMoveDisabler = function (a) {
                  a.preventDefault();
                };
                this.log(
                  'setting parameters, adLoadTimeout: ' +
                    this.adLoadTimeout +
                    ', isMRAIDAd: ' +
                    this.isMRAIDAd +
                    ', shouldKeepInterstitial: ' +
                    this.shouldKeepInterstitial +
                    ', shouldEndAfterDuration: ' +
                    this.shouldEndAfterDuration +
                    ', shouldPauseContentWhenStart: ' +
                    this.shouldPauseContentWhenStart +
                    ', shouldPauseContentWhenExpandOrClick: ' +
                    this.shouldPauseContentWhenExpandOrClick +
                    ', shouldBackgroundTransparent: ' +
                    this.shouldBackgroundTransparent +
                    ', defaultExpandWidth: ' +
                    this.defaultExpandWidth +
                    ', defaultExpandHeight: ' +
                    this.defaultExpandHeight +
                    ', coadScriptName: ' +
                    this.coadScriptName +
                    ', primaryAnchor: ' +
                    this.primaryAnchor +
                    ', marginWidth: ' +
                    this.marginWidth +
                    ', marginHeight: ' +
                    this.marginHeight +
                    ', bootstrap: ' +
                    this.bootstrap
                );
                if (!this.shouldKeepInterstitial)
                  !this.isMRAIDAd ||
                    (a.PLATFORM_IS_IPHONE_IPOD && d !== a.TIME_POSITION_CLASS_DISPLAY) ||
                    (b.setCapability(a.EVENT_AD_ACCEPT_INVITATION, a.CAPABILITY_STATUS_ON),
                    b.setCapability(a.EVENT_AD_CLOSE, a.CAPABILITY_STATUS_ON),
                    b.setCapability(a.EVENT_AD_COLLAPSE, a.CAPABILITY_STATUS_ON),
                    b.setCapability(a.EVENT_AD_EXPAND, a.CAPABILITY_STATUS_ON));
                else if (d === a.TIME_POSITION_CLASS_OVERLAY)
                  return (
                    this._onRendererFailed(
                      a.ERROR_INVALID_SLOT,
                      'Interstitial ad is not supported in overlay slot.'
                    ),
                    !1
                  );
                return !0;
              },
              _render: function () {
                this.log('_render');
                var b = this.rendererController.getAdInstance(),
                  c = b.getSlot(),
                  d = c.getTimePositionClass(),
                  e = c.getBase(),
                  f = b.getActiveCreativeRendition(),
                  g = f.getDuration(),
                  h = f.getPrimaryCreativeRenditionAsset();
                b = h.getUrl();
                var k = h.getContent();
                d === a.TIME_POSITION_CLASS_DISPLAY && (e.innerHTML = '');
                this.timer = new a.Timer(g, a.Util.bind(this, this._stop));
                if (this.coadScriptName && 'function' === typeof window[this.coadScriptName])
                  (this.defaultAdElement = window[this.coadScriptName](
                    k,
                    b,
                    f.getHeight(),
                    f.getWidth(),
                    h.getMimeType(),
                    c.getCustomId()
                  )),
                    this.timer && this.shouldEndAfterDuration && this.timer.start();
                else if (
                  ((g = document.createElement('span')),
                  (g.id = '_fw_ad_container_html_' + c.getCustomId() + '_'),
                  (g.style.position = 'relative' === e.style.position ? 'absolute' : 'relative'),
                  (g.style.display = 'inline-block'),
                  (g.style.margin = '0px'),
                  (g.style.padding = '0px'),
                  (g.style.width = e.style.width || '100%'),
                  (g.style.height = e.style.height || '100%'),
                  (g.style.top = g.style.left = '0px'),
                  e.appendChild(g),
                  (this.defaultAdElementContainer = g),
                  b || k)
                ) {
                  if (
                    'text/html_lit_nowrapper' === f.getContentType() ||
                    'text/html_lit_js_wc_nw' === f.getContentType()
                  ) {
                    if (this.isMRAIDAd || this.isInterstitialNow) {
                      this._onRendererFailed(a.ERROR_INVALID_VALUE, '');
                      this._stop();
                      return;
                    }
                    if (!k) {
                      this._onRendererFailed(a.ERROR_NULL_ASSET, 'Empty content');
                      this._stop();
                      return;
                    }
                    this.defaultAdElement = g;
                    this.defaultAdElement.innerHTML = k;
                    c = this.defaultAdElement.getElementsByTagName('script');
                    var l = document.getElementsByTagName('head')[0];
                    for (e = 0; e < c.length; ++e)
                      if (c[e].src) {
                        var p = document.createElement('script');
                        p.src = c[e].src;
                        c[e].charset && (p.charset = c[e].charset);
                        c[e].innerHTML && (p.innerHTML = c[e].innerHTML);
                        p.onload = p.onreadystatechange = function () {
                          (this.readyState &&
                            'loaded' !== this.readyState &&
                            'complete' !== this.readyState) ||
                            l.removeChild(p);
                        };
                        l.appendChild(p);
                      } else (p = c[e].innerHTML), eval(p);
                    this.presentInline();
                    this.onLoadFunc();
                    return;
                  }
                  f = document.createElement('iframe');
                  f.id = '_fw_ad_container_iframe_' + c.getCustomId() + '_' + Math.random();
                  f.attachEvent
                    ? f.attachEvent('onload', this.onLoadFunc)
                    : (f.onload = this.onLoadFunc);
                  this.defaultAdElement = f;
                  this.defaultAdElementContainer.appendChild(f);
                  this._fillAdNode(f, b, k);
                  this.isMRAIDAd &&
                    ((this.adLoadTimeoutTimer = new a.Timer(
                      this.adLoadTimeout,
                      a.Util.bind(this, function () {
                        this._onRendererFailed(a.ERROR_TIMEOUT, 'Loading MRAID Ad timed out');
                        d !== a.TIME_POSITION_CLASS_DISPLAY
                          ? this.isMRAIDAd && !this.mraid.inLoadingState()
                            ? this._mraidClose()
                            : this._stop()
                          : this._stop();
                      })
                    )),
                    this.adLoadTimeoutTimer.start());
                } else {
                  this._onRendererFailed(a.ERROR_NULL_ASSET, 'Empty URL and empty content');
                  this._stop();
                  return;
                }
                this.defaultAdElement ||
                  ((c = e.getElementsByTagName('iframe')) &&
                    0 < c.length &&
                    (this.defaultAdElement = c[c.length - 1]));
                this.defaultAdElement
                  ? ((this.defaultAdElement.frameBorder = '0'),
                    this.shouldBackgroundTransparent &&
                      ((this.defaultAdElement.allowTransparency = 'true'),
                      (this.defaultAdElement.style['background-color'] = 'rgba(255,255,255,0)')),
                    this.isInterstitialNow
                      ? ((this.expandedAdElement = this.defaultAdElement),
                        this.presentInterstitial())
                      : this.presentInline(),
                    (this.messageHandlerFunc = a.Util.bind(this, this._onWindowMessageReceived)),
                    (this.viewportChangeFunc = a.Util.bind(this, function () {
                      this.viewportChangeFuncTimer &&
                        window.clearTimeout(this.viewportChangeFuncTimer);
                      this.viewportChangeFuncTimer = window.setTimeout(
                        a.Util.bind(this, this._onViewportResizeScroll),
                        200
                      );
                    })),
                    window.addEventListener
                      ? (window.addEventListener('message', this.messageHandlerFunc, !1),
                        window.addEventListener('resize', this.viewportChangeFunc, !1),
                        window.addEventListener('scroll', this.viewportChangeFunc, !1))
                      : window.attachEvent &&
                        (window.attachEvent('onmessage', this.messageHandlerFunc),
                        window.attachEvent('onresize', this.viewportChangeFunc),
                        window.attachEvent('onscroll', this.viewportChangeFunc)))
                  : this.isMRAIDAd &&
                    (this._onRendererFailed(
                      a.ERROR_UNKNOWN,
                      'Failed to find iframe in slotBase for MRAID ad'
                    ),
                    this._stop());
              },
              _layoutOverlayAd: function (a) {
                this.log('_layoutOverlayAd');
                var b = this.rendererController.getAdInstance(),
                  d = b.getSlot(),
                  e = d.getVideoDisplaySize().width;
                d = d.getVideoDisplaySize().height;
                var f = b.getActiveCreativeRendition();
                b = f.getWidth() || 240;
                f = f.getHeight() || 50;
                a.style.width = Math.min(b, e) + 'px';
                a.style.height = Math.min(f, d) + 'px';
                a.style.left = a.style.top = a.style.right = a.style.bottom = '';
                switch (this.primaryAnchor) {
                  case 'tl':
                  case 'lt':
                    a.style.top = this.marginHeight + 'px';
                    a.style.left = this.marginWidth + 'px';
                    break;
                  case 'tr':
                  case 'rt':
                    a.style.top = this.marginHeight + 'px';
                    a.style.right = this.marginWidth + 'px';
                    break;
                  case 'bl':
                  case 'lb':
                    a.style.bottom = this.marginHeight + 'px';
                    a.style.left = this.marginWidth + 'px';
                    break;
                  case 'br':
                  case 'rb':
                    a.style.bottom = this.marginHeight + 'px';
                    a.style.right = this.marginWidth + 'px';
                    break;
                  case 'tc':
                  case 'ct':
                    a.style.top = this.marginHeight + 'px';
                    a.style.left = 0.5 * Math.max(0, e - b) + 'px';
                    break;
                  case 'lm':
                  case 'ml':
                    a.style.left = this.marginWidth + 'px';
                    a.style.top = 0.5 * Math.max(0, d - f) + 'px';
                    break;
                  case 'rm':
                  case 'mr':
                    a.style.right = this.marginWidth + 'px';
                    a.style.top = 0.5 * Math.max(0, d - f) + 'px';
                    break;
                  case 'mc':
                  case 'cm':
                  case 'c':
                  case 'm':
                    a.style.left = 0.5 * Math.max(0, e - b) + 'px';
                    a.style.top = 0.5 * Math.max(0, d - f) + 'px';
                    break;
                  default:
                  case 'bc':
                  case 'cb':
                    (a.style.bottom = this.marginHeight + 'px'),
                      (a.style.left = 0.5 * Math.max(0, e - b) + 'px');
                }
              },
              _fillAdNode: function (b, c, d) {
                this.log('_fillAdNode, url:' + c + ', content:' + (d ? '<omited>' : '<empty>'));
                if (c) b.src = c;
                else if (d)
                  (b = b.contentWindow
                    ? b.contentWindow.document
                    : b.contentDocument.document
                    ? b.contentDocument.document
                    : b.contentDocument),
                    b.open(),
                    b.write(d),
                    b.close();
                else
                  return this._onRendererFailed(a.ERROR_NULL_ASSET, 'Empty URL and content'), !1;
                return !0;
              },
              presentInline: function () {
                this.log('presentInline');
                this.isInterstitialNow = !1;
                var b = this.defaultAdElement;
                if (b) {
                  var c = this.rendererController.getAdInstance(),
                    d = c.getSlot(),
                    e = d.getTimePositionClass(),
                    f = d.getWidth(),
                    g = d.getHeight(),
                    h = d.getVideoDisplaySize().width;
                  d = d.getVideoDisplaySize().height;
                  var k = c.getActiveCreativeRendition();
                  c = k.getWidth();
                  k = k.getHeight();
                  b.scrolling = 'no';
                  b.style.overflow = 'hidden';
                  switch (e) {
                    case a.TIME_POSITION_CLASS_DISPLAY:
                      b.style.position = '';
                      b.style.background = this.shouldBackgroundTransparent ? 'transparent' : '';
                      b.style.left = '0px';
                      b.style.top = '0px';
                      b.style.width = (c ? c : f) + 'px';
                      b.style.height = (k ? k : g) + 'px';
                      break;
                    case a.TIME_POSITION_CLASS_OVERLAY:
                      b.style.position = 'absolute';
                      b.style.background = this.shouldBackgroundTransparent
                        ? 'transparent'
                        : 'white';
                      this._layoutOverlayAd(b);
                      break;
                    default:
                      (b.style.position = 'absolute'),
                        (b.style.background = this.shouldBackgroundTransparent
                          ? 'transparent'
                          : 'white'),
                        (b.style.left = '0px'),
                        (b.style.top = '0px'),
                        (b.style.width = h + 'px'),
                        (b.style.height = d + 'px');
                  }
                }
              },
              presentInterstitial: function () {
                this.log(
                  'presentInterstitial, defaultExpandWidth: ' +
                    this.defaultExpandWidth +
                    ', defaultExpandHeight: ' +
                    this.defaultExpandHeight +
                    ', this.mraid.expandWidth: ' +
                    this.mraid.expandWidth +
                    ', this.mraid.expandHeight: ' +
                    this.mraid.expandHeight +
                    ', (Math.max(0, this.defaultExpandWidth - this.mraid.expandWidth) / 2) = ' +
                    Math.max(0, this.defaultExpandWidth - this.mraid.expandWidth) / 2 +
                    ', (Math.max(0, this.defaultExpandHeight - this.mraid.expandHeight) / 2) = ' +
                    Math.max(0, this.defaultExpandHeight - this.mraid.expandHeight) / 2
                );
                if (this.expandedAdElement) {
                  this.isInterstitialNow = !0;
                  document.addEventListener &&
                    (document.removeEventListener('touchmove', this.touchMoveDisabler, !1),
                    document.addEventListener('touchmove', this.touchMoveDisabler, !1));
                  var b = this.expandedAdElement.parentNode;
                  this.expandedLightbox ||
                    ((this.expandedLightbox = document.createElement('div')),
                    (this.expandedLightbox.style.background = 'black'),
                    (this.expandedLightbox.style.opacity = 0.8),
                    (this.expandedLightbox.style.position = 'fixed'),
                    (this.expandedLightbox.style.top = '0px'),
                    (this.expandedLightbox.style.left = '0px'),
                    (this.expandedLightbox.style.zIndex = this.expandedLightbox.style[
                      'z-index'
                    ] = 9999),
                    b.appendChild(this.expandedLightbox));
                  this.expandedLightbox.style.width = this.defaultExpandWidth + 'px';
                  this.expandedLightbox.style.height = this.defaultExpandHeight + 'px';
                  this.expandedAdElement.frameBorder = '0';
                  this.expandedAdElement.scrolling = 'no';
                  this.expandedAdElement.style.position = 'fixed';
                  this.expandedAdElement.style.overflow = 'hidden';
                  this.expandedAdElement.style.top = this.expandedAdElement.top =
                    Math.max(0, this.defaultExpandHeight - this.mraid.expandHeight) / 2 + 'px';
                  this.expandedAdElement.style.left = this.expandedAdElement.left =
                    Math.max(0, this.defaultExpandWidth - this.mraid.expandWidth) / 2 + 'px';
                  this.expandedAdElement.style.width = this.expandedAdElement.width =
                    this.mraid.expandWidth + 'px';
                  this.expandedAdElement.style.height = this.expandedAdElement.height =
                    this.mraid.expandHeight + 'px';
                  this.expandedAdElement.style.zIndex = this.expandedAdElement.style[
                    'z-index'
                  ] = 10000;
                  this.log(
                    'presentInterstitial, expanded ad element size: (top, left, width, height) = (' +
                      this.expandedAdElement.top +
                      ', ' +
                      this.expandedAdElement.left +
                      ', ' +
                      this.expandedAdElement.width +
                      ', ' +
                      this.expandedAdElement.height +
                      ')'
                  );
                  if (this.isMRAIDAd) {
                    var c = this.expandedAdElement._fw_closeButton;
                    c ||
                      ((c = document.createElement('div')),
                      c.addEventListener
                        ? c.addEventListener(
                            'click',
                            a.Util.bind(this, function () {
                              this._mraidClose();
                            })
                          )
                        : c.attachEvent &&
                          c.attachEvent(
                            'onclick',
                            a.Util.bind(this, function () {
                              this._mraidClose();
                            })
                          ),
                      (c.style.position = 'fixed'),
                      (c.style.margin = '0px'),
                      (c.style.padding = '0px'),
                      (c.style.width = '25px'),
                      (c.style.height = '25px'),
                      (c.style.zIndex = c.style['z-index'] = 10001),
                      b.appendChild(c),
                      (this.expandedAdElement._fw_closeButton = c));
                    c.style.top = this.expandedAdElement.style.top;
                    c.style.left =
                      Math.max(0, this.defaultExpandWidth - this.mraid.expandWidth) / 2 +
                      this.mraid.expandWidth -
                      25 +
                      'px';
                    c.innerHTML = this.mraid.useCustomClose
                      ? 0 < a.PLATFORM_ANDROID_VERSION
                        ? '   '
                        : ''
                      : 0 < a.PLATFORM_ANDROID_VERSION && 3 >= a.PLATFORM_ANDROID_VERSION
                      ? '<img style="width:25px; height:25px; border:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4xJREFUeNrMmjFv2kAUxw/IUAZUw4AqJjIxMAQJ9sIHgDYLUqfSBTowJBudAmOnNCNeAitLyVgxxNlBgk+QTKgb6UQHhr7nniNj8PmM3zk86XQZOPt+ee/e+9+dI4zQms1mGTpsb6EVXH42h/YHmqHrukH17kjAiWvQfYT2gfeH2BjaHfYA9hwqCABkobvik9eI/qkIMYB2A0BPSkG4By44hErrQfvhx0MRn/F/Cy3LwjH0yhfZdRSThOhyCI2FZ/iuRrFYjMxmMyMwCEDc8nB6LSsDTBZg7g4GAYj7ANmI0gpeMDEPTxwDhBRMzAXiGrqv7PgMYTSA+eWZtQACvfCTHbedQzYbu4LwOvHolp3q9TorlUpsuVyyfr/P1us16ezi8TirVqtmP5lMzPcIiuepvc5EHT+4doPIZDImhPV3q9UyX0hl+MxOp2O+I5/Ps1qt5pWat4py1CE7Gm4jnf99Sph9z5Lw9gWf845HhLJjtVqx0WhEDuMGgaElYVdbWYuTDbxGYcwiELreskQiwXK5HFssFmyz2ZBA4PoTrA9nFhtCFnu2PCJdL6bTKYlnCCCYfe4WyGc/I4PCEEK8zD3Cw+rxkPjGDIMp2Rl+otRMDGHZaZRvTQ8yv55RBGEKSwQ5C/IEWRiFEGhnMVj1naCbJa9slk6nVUKg/T2h2iyhZywZ4/RCMplUCWFW+hPBsQ0ZjFMhEEOY9SRKLUv3rRnFEHtFI4nhRPelX1xH2FQYOYjf9EsJ8qQSQqVqth8dkYGI6oQK1awExKvYUQlNL5CFSghq1exiCwQxVEOEAGPEYFPyG2QKniS+CWNTRL05w7DSdf2blX7HYe7siD0ztteRm7B3doQww5c9Ow+vspcKRvHXbrfJBCBBmOH13XdnZe95jcKzJmoVK/KMhPV2JAq/UDG8TgJVCEA3GAlvGG5a61JGpmM4UKtYJ4zEs7fmuu8Qu8vU3xEK12EqlXJV0FZIgTe6QhAOcx/kUEKxYUhVZGX8Oft/sX9sNudz2zHXW13wCm6B71m4F6AiwyuECnhj7mtjxQdUKPcrQdStCELoEZtnNO6ZwiuGU8Xr4wE/HwzgJVDY19T49cOlzA9jsk/EC0iQMQ/cM+9C8MIngOjLDjj0o5oGrzVZBWsBa8TA78Cgnznh3QQe6we9j0cpPnTe1IYG4kgIZR5273mvCdIohg6G6TzI5O32T4ABAPsBS28k7apdAAAAAElFTkSuQmCC">'
                      : '<img style="width:25px; height:25px; border:0" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Y2lyY2xlIGZpbGw9IiM2NjY2NjYiIGN4PSIyMDAuMTM5IiBjeT0iMTk5Ljg2IiByPSIxOTcuODYiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBzdHJva2U9IiNGMEYwRjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTExNC44NjUsMzAzLjY0NGMtNi4yMjYsNi4yMjctMTUuMzYzLDcuMTg2LTIwLjQwNywyLjE0NGwtMC41MjItMC41MjJjLTUuMDQzLTUuMDQzLTQuMDgzLTE0LjE4LDIuMTQ0LTIwLjQwN0wyODQuODYsOTYuMDc4YzYuMjI2LTYuMjI3LDE1LjM2Mi03LjE4NiwyMC40MDUtMi4xNDRsMC41MjIsMC41MjFjNS4wNDMsNS4wNDIsNC4wODMsMTQuMTc5LTIuMTQ0LDIwLjQwOEwxMTQuODY1LDMwMy42NDR6Ii8+PHBhdGggZmlsbD0iI0YwRjBGMCIgc3Ryb2tlPSIjRjBGMEYwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0zMDcuODE5LDI4OC42NjZjNS4xNTMsNS4xNTgsNS4wNDgsMTMuNjI0LTAuMjQxLDE4LjkxMWwwLDBjLTUuMjg4LDUuMjg5LTEzLjc1Miw1LjM5My0xOC45MDksMC4yNEw5MS45MDYsMTExLjA1NWMtNS4xNTYtNS4xNTYtNS4wNDgtMTMuNjIzLDAuMjQtMTguOTFsMCwwYzUuMjktNS4yODksMTMuNzU1LTUuMzk2LDE4LjkxMS0wLjI0MUwzMDcuODE5LDI4OC42NjZ6Ii8+PC9zdmc+">';
                  }
                  this.isMRAIDAd || this.rendererController.requestContentStateChange(!0);
                }
              },
              _onWindowMessageReceived: function (b) {
                if (
                  this.defaultAdElement &&
                  (b.source === this.defaultAdElement.contentWindow ||
                    (this.expandedAdElement && b.source === this.expandedAdElement.contentWindow))
                ) {
                  this.log(
                    '_onWindowMessageReceived, event.data:' + b.data + ', event.origin:' + b.origin
                  );
                  var c = b.data.toString().split(':');
                  if (c && 2 <= c.length && 'fwsdk-invoke' === c[0]) {
                    var d = c[1];
                    if ((c = c.slice(2)) && 0 < c.length) {
                      for (var e = 0; e < c.length; e++) c[e] = decodeURIComponent(c[e]);
                      1 === c.length && (c = c[0]);
                    } else c = null;
                    if ('iframe_ready' === d) {
                      if (
                        this.onLoadFunc &&
                        b.source === this.defaultAdElement.contentWindow &&
                        this.defaultAdElement !== this.expandedAdElement
                      )
                        this.onLoadFunc();
                      c && (c = a.Util.trim(c)) && this.isMRAIDAd && (this.mraid.baseUrl = c);
                      this.bootstrap &&
                        b.source.postMessage('fwsdk-bounce:' + this.bootstrap, b.origin);
                      b.source.postMessage(
                        'fwsdk-bounce:mraid._messagingModel = "postMessage"',
                        b.origin
                      );
                      this.isMRAIDAd &&
                        (b.source === this.defaultAdElement.contentWindow &&
                          this.shouldPauseContentWhenStart &&
                          this.rendererController.requestContentStateChange(!0),
                        this.mraid.inLoadingState()
                          ? (this.mraid.state = this.mraid.STATEDEFAULT)
                          : this.expandedAdElement &&
                            b.source === this.expandedAdElement.contentWindow &&
                            this.mraid.pushData());
                    } else
                      this.isMRAIDAd ? this._mraidMethods(d, c) : 'close' === d && this._stop();
                  }
                }
              },
              _mraidMethods: function (b, c) {
                if (b && this.isMRAIDAd)
                  switch ((this.log('_mraidMethods(' + b + ', ' + c + ')'), b)) {
                    case 'open':
                      'string' === typeof c
                        ? this._mraidOpen(c)
                        : 2 <= c.length && this._mraidOpen(c[0], a.Util.str2bool(c[1]));
                      break;
                    case 'close':
                      this._mraidClose();
                      break;
                    case 'expand':
                      this._mraidExpand(c);
                      break;
                    case 'useCustomClose':
                      c && 0 < c.length
                        ? (this.mraid.useCustomClose = a.Util.str2bool(c))
                        : this.warn('Invalid parameter to useCustomClose');
                      break;
                    case 'setExpandProperties':
                      if (!c) break;
                      this.requestedExpandWidth = Number(c[0]);
                      this.requestedExpandHeight = Number(c[1]);
                      if (
                        !this.requestedExpandWidth ||
                        !this.requestedExpandHeight ||
                        (this.requestedExpandWidth === this.defaultExpandWidth &&
                          this.requestedExpandHeight === this.defaultExpandHeight)
                      )
                        this.requestedExpandHeight = this.requestedExpandWidth = 0;
                      this.mraid.useCustomClose = a.Util.str2bool(c[2]);
                      (this.requestedExpandWidth === this.mraid.expandWidth &&
                        this.requestedExpandHeight === this.mraid.expandHeight) ||
                        this.mraid.pushData();
                      break;
                    case 'log':
                      this.log('MRAID log:' + c);
                      break;
                    default:
                      this.warn('Unknown MRAID function call: ' + b + ' with param:' + c);
                  }
              },
              _mraidOpen: function (b, c) {
                this.log(
                  '_mraidOpen(' +
                    b +
                    '), baseUrl:' +
                    this.mraid.baseUrl +
                    ', absolute Url' +
                    (b = a.Util.getAbsoluteUrl(this.mraid.baseUrl, b))
                );
                var d = this.rendererController;
                b && 'string' === typeof b && 0 < b.length
                  ? ((c || 'undefined' === typeof c) && window.open(b),
                    d.processEvent({ name: a.EVENT_AD_CLICK, info: { showBrowser: !1, url: b } }))
                  : this.warn('_mraidOpen: url required for open');
              },
              _mraidClose: function () {
                this.log('_mraidClose, current state: ' + this.mraid.state);
                if (this.mraid.inExpandedState()) {
                  window.removeEventListener &&
                    document.removeEventListener('touchmove', this.touchMoveDisabler, !1);
                  var a = this.expandedAdElement,
                    c = this.expandedAdElement._fw_closeButton;
                  this.expandedAdElement._fw_closeButton = null;
                  var d = this.expandedAdElement.parentNode;
                  this.mraid.state = this.mraid.STATEDEFAULT;
                  this.expandedLightbox &&
                    (d.removeChild(this.expandedLightbox), (this.expandedLightbox = null));
                  a !== this.defaultAdElement &&
                    ((a.style.display = 'hidden'),
                    window.setTimeout(function () {
                      d.removeChild(a);
                    }, 50));
                  d.removeChild(c);
                } else
                  this.mraid.inDefaultState()
                    ? (this.mraid.state = this.mraid.STATEHIDDEN)
                    : this.warn(
                        '_mraidClose: close() is only valid when in expanded/default state'
                      );
              },
              _mraidExpand: function (b) {
                this.log('_mraidExpand, current state: ' + this.mraid.state);
                if (this.mraid.inDefaultState())
                  if (this.shouldKeepInterstitial)
                    this.warn('_mraidExpand: expand() is only valid for inline ad');
                  else {
                    if (b) {
                      var c = document.createElement('iframe'),
                        d = a.Util.getAbsoluteUrl(this.mraid.baseUrl, b);
                      this.shouldBackgroundTransparent &&
                        ((c.allowTransparency = 'true'),
                        (c.style['background-color'] = 'rgba(255,255,255,0)'));
                      (
                        this.defaultAdElementContainer || this.defaultAdElement.parentNode
                      ).appendChild(c);
                      this.expandedAdElement = c;
                      this.log(
                        '_mraidExpand(' +
                          b +
                          '), baseUrl:' +
                          this.mraid.baseUrl +
                          ', absolute Url' +
                          d
                      );
                      this._fillAdNode(c, d, null);
                    }
                    this.mraid.state = this.mraid.STATEEXPANDED;
                    this.isInterstitialNow = !0;
                    this._onViewportResizeScroll();
                  }
                else this.warn('_mraidExpand: expand() is only valid when in default state');
              },
              _onViewportResizeScroll: function () {
                var b = a.Util.getViewport();
                this.defaultExpandWidth = b.width;
                this.defaultExpandHeight = b.height;
                this.isInterstitialNow && this.presentInterstitial();
              },
              log: function (b) {
                var c = this.rendererController.getAdInstance().getSlot();
                a.log('HTMLRenderer[' + c + ']\t' + b);
              },
              warn: function (b) {
                var c = this.rendererController.getAdInstance().getSlot();
                a.warn('HTMLRenderer[' + c + ']\t' + b);
              },
              info: function () {
                return { moduleType: a.MODULE_TYPE_RENDERER };
              },
              getPlayheadTime: function () {
                return this.timer ? this.timer.getPlayheadTime() : -1;
              },
              getDuration: function () {
                return this.timer ? this.timer.getDuration() : -1;
              },
              _onRendererFailed: function (b, c, d) {
                var e = {};
                e[a.INFO_KEY_ERROR_MODULE] = 'HTMLRenderer';
                e[a.INFO_KEY_ERROR_CODE] = b;
                this.rendererController.getAdInstance().getSlot().getTimePositionClass() ===
                a.TIME_POSITION_CLASS_OVERLAY
                  ? d || (d = a.ERROR_VAST_NON_LINEAR_GENERAL_ERROR)
                  : this.rendererController.getAdInstance().getSlot().getTimePositionClass() !==
                      a.TIME_POSITION_CLASS_DISPLAY ||
                    d ||
                    (d = a.ERROR_VAST_COMPANION_GENERAL_ERROR);
                d && (e[a.INFO_KEY_VAST_ERROR_CODE] = d);
                c && (e[a.INFO_KEY_ERROR_INFO] = c);
                this.rendererController.handleStateTransition(a.RENDERER_STATE_FAILED, e);
              },
            };
            a.HTMLRenderer.prototype.constructor = a.HTMLRenderer;
            a.Ad = function () {
              this._id = null;
              this._creatives = [];
              this._noLoad = !1;
              this._soAdUnit = null;
              this._isRequiredToShow = !1;
            };
            a.Ad.prototype = {
              isRequiredToShow: function () {
                return this._isRequiredToShow;
              },
              parse: function (b) {
                if (b) {
                  this._id = b.adId || null;
                  this._noLoad = b.noLoad;
                  this._soAdUnit = b.adUnit;
                  b.hasOwnProperty('required') && (this._isRequiredToShow = b.required);
                  var c = 0;
                  for (b = b.creatives || []; c < b.length; c++) {
                    var d = b[c],
                      e = new a.Creative();
                    e.parse(d);
                    this._creatives.push(e);
                  }
                }
              },
              getSoAdUnit: function () {
                return this._soAdUnit;
              },
              getId: function () {
                return this._id;
              },
              getNoLoad: function () {
                return this._noLoad;
              },
              getCreative: function (a) {
                for (var b = 0; b < this._creatives.length; b++)
                  if (this._creatives[b].getId() === a) return this._creatives[b];
                return null;
              },
              addCreativeRendition: function () {
                var b = new a.Creative();
                this._creatives.push(b);
                return b;
              },
            };
            a.Ad.prototype.constructor = a.Ad;
            a.Creative = function () {
              this._duration = this._baseUnit = this._id = null;
              this._parameters = {};
              this._creativeRenditions = [];
            };
            a.Creative.prototype = {
              getId: function () {
                return this._id;
              },
              getBaseUnit: function () {
                return this._baseUnit;
              },
              getDuration: function () {
                return this._duration;
              },
              getParameter: function (a) {
                return this._parameters[a];
              },
              setParameter: function (a, c) {
                null == c ? delete this._parameters[a] : (this._parameters[a] = c);
              },
              parse: function (b) {
                if (b) {
                  this._id = b.creativeId || null;
                  this._baseUnit = b.baseUnit || null;
                  this._duration = 1 * b.duration;
                  if (b.parameters)
                    if (b.parameters.constructor === Array)
                      for (var c = 0, d = b.parameters || []; c < d.length; c++) {
                        var e = d[c];
                        this._parameters[e.name] = e.value;
                      }
                    else
                      'object' === typeof b.parameters &&
                        (this._parameters = a.Util.copy(b.parameters));
                  c = 0;
                  for (d = b.creativeRenditions || []; c < d.length; c++) {
                    e = d[c];
                    b = new a.CreativeRendition();
                    b.parse(e);
                    b.setDuration(this._duration);
                    b.setBaseUnit(this._baseUnit);
                    for (var f in this._parameters)
                      this._parameters.hasOwnProperty(f) && b.setParameter(f, this._parameters[f]);
                    this._creativeRenditions.push(b);
                  }
                }
              },
              getAllCreativeRenditions: function () {
                return this._creativeRenditions;
              },
              addCreativeRendition: function (a) {
                this._creativeRenditions.push(a);
              },
              getEligibleCreativeRenditionsForAdInstance: function (a) {
                var b = [],
                  d = [],
                  e;
                for (e = 0; e < this._creativeRenditions.length; e++) {
                  var f = this._creativeRenditions[e];
                  f.getId() === a._creativeRenditionId &&
                    f.getReplicaId() === a._replicaId &&
                    b.push(f);
                  '' === f.getReplicaId() && d.push(f);
                }
                return 0 === b.length ? d : b;
              },
              cloneForTranslation: function () {
                var b = new a.Creative();
                b.parse({
                  creativeId: this._id,
                  baseUnit: this._baseUnit,
                  duration: this._duration,
                  parameters: a.Util.copy(this._parameters),
                });
                return b;
              },
            };
            a.Creative.prototype.constructor = a.Creative;
            a.CreativeRendition = function () {
              this._id = null;
              this._creativeApi = 'None';
              this._baseUnit = null;
              this._replicaId = '';
              this._height = this._width = this._preference = this._wrapperUrl = this._wrapperType = this._contentType = null;
              this._parameters = {};
              this._primaryCreativeRenditionAsset = null;
              this._otherCreativeRenditionAssets = [];
              this._universalAdId = this._duration = null;
            };
            a.CreativeRendition.prototype = {
              getId: function () {
                return this._id;
              },
              getCreativeApi: function () {
                return this._creativeApi;
              },
              setCreativeApi: function (a) {
                this._creativeApi = a || 'None';
              },
              getReplicaId: function () {
                return this._replicaId;
              },
              getContentType: function () {
                return this._contentType
                  ? this._contentType
                  : this._primaryCreativeRenditionAsset &&
                    this._primaryCreativeRenditionAsset.getContentType()
                  ? this._primaryCreativeRenditionAsset.getContentType()
                  : null;
              },
              setContentType: function (a) {
                this._contentType = a;
              },
              getWrapperType: function () {
                return this._wrapperType;
              },
              setWrapperType: function (a) {
                this._wrapperType = a;
              },
              getWrapperUrl: function () {
                return this._wrapperUrl;
              },
              setWrapperUrl: function (a) {
                this._wrapperUrl = a;
              },
              getBaseUnit: function () {
                return this._baseUnit;
              },
              setBaseUnit: function (a) {
                this._baseUnit = a;
              },
              getPreference: function () {
                return this._preference;
              },
              setPreference: function (a) {
                this._preference = a;
              },
              getWidth: function () {
                return this._width;
              },
              setWidth: function (a) {
                this._width = a;
              },
              getHeight: function () {
                return this._height;
              },
              setHeight: function (a) {
                this._height = a;
              },
              getDuration: function () {
                return this._duration;
              },
              setDuration: function (a) {
                this._duration = a;
              },
              getParameter: function (a) {
                return this._parameters[a];
              },
              setParameter: function (a, c) {
                null == c ? delete this._parameters[a] : (this._parameters[a] = c);
              },
              getUniversalAdId: function () {
                return this._universalAdId;
              },
              setUniversalAdId: function (a) {
                this._universalAdId = a;
              },
              getPrimaryCreativeRenditionAsset: function () {
                return this._primaryCreativeRenditionAsset;
              },
              getOtherCreativeRenditionAssets: function () {
                return this._otherCreativeRenditionAssets.slice();
              },
              addCreativeRenditionAsset: function (b, c) {
                var d = new a.CreativeRenditionAsset();
                d.setName(b);
                c
                  ? (this._primaryCreativeRenditionAsset = d)
                  : this._otherCreativeRenditionAssets.push(d);
                return d;
              },
              parse: function (b) {
                if (b) {
                  this._id = b.creativeRenditionId || null;
                  this._creativeApi = b.creativeApi || 'None';
                  this._replicaId = b.hasOwnProperty('adReplicaId') ? b.adReplicaId : '';
                  this._contentType = b.contentType || null;
                  this._wrapperType = b.wrapperType || null;
                  this._wrapperUrl = b.wrapperUrl || null;
                  this._preference = 1 * b.preference;
                  this._width = 1 * b.width;
                  this._height = 1 * b.height;
                  for (var c, d = 0, e = b.parameters || []; d < e.length; d++)
                    (c = e[d]), (this._parameters[c.name] = c.value);
                  this._primaryCreativeRenditionAsset = new a.CreativeRenditionAsset();
                  this._primaryCreativeRenditionAsset.parse(b.asset);
                  d = 0;
                  for (e = b.otherAssets || []; d < e.length; d++)
                    (c = e[d]),
                      (b = new a.CreativeRenditionAsset()),
                      b.parse(c),
                      this._otherCreativeRenditionAssets.push(b);
                }
              },
            };
            a.CreativeRendition.prototype.constructor = a.CreativeRendition;
            a.CreativeRenditionAsset = function () {
              this._bytes = this._mimeType = this._contentType = this._content = this._url = this._name = this._id = null;
            };
            a.CreativeRenditionAsset.prototype = {
              getName: function () {
                return this._name;
              },
              setName: function (a) {
                this._name = a;
              },
              getUrl: function () {
                return this._url;
              },
              setUrl: function (a) {
                this._url = a;
              },
              getContent: function () {
                return this._content;
              },
              setContent: function (a) {
                this._content = a;
              },
              getContentType: function () {
                return this._contentType;
              },
              setContentType: function (a) {
                this._contentType = a;
              },
              getMimeType: function () {
                return this._mimeType;
              },
              setMimeType: function (a) {
                this._mimeType = a;
              },
              getBytes: function () {
                return this._bytes;
              },
              setBytes: function (a) {
                this._bytes = a;
              },
              parse: function (a) {
                a &&
                  ((this._id = a.id || null),
                  (this._name = a.name || null),
                  (this._url = a.url || null),
                  (this._content = a.content || null),
                  (this._contentType = a.contentType || null),
                  (this._mimeType = a.mimeType || null),
                  (this._bytes = 1 * a.bytes));
              },
            };
            a.CreativeRenditionAsset.prototype.constructor = a.CreativeRenditionAsset;
            a.AdInstance = function (b) {
              this._context = b;
              this._creativeRenditionId = this._creativeId = this._soAdUnit = this._adId = this._slot = null;
              this._replicaId = '';
              this._primaryCreativeRendition = this._creative = null;
              this._creativeRenditions = [];
              this._noLoad = !1;
              this._companionAdInstances = [];
              this._eventCallbacks = [];
              this._externalEventCallbackUrlsDictionary = {};
              this._rendererController = new a.RendererController(b, this);
              this._timer = new a.Timer();
              this._metr = 0;
              this._state = a.MediaInitState.instance;
              this._isStartSuccessfully = this._translated = this._isImpressionSent = this._isInitiatedSent = !1;
              this._lastDurationFromRenderer = -1;
              this._slotCustomId = this._parentAdInstancesGroup = null;
              this._isSkipped = !1;
              this._wrapperCount = 0;
            };
            a.AdInstance.prototype = {};
            a.AdInstance.prototype.constructor = a.AdInstance;
            a.METR_MASK_QUARTILE = 0;
            a.METR_MASK_MIDPOINT = 1;
            a.METR_MASK_COMPLETE = 2;
            a.METR_MASK_VOLUME = 3;
            a.METR_MASK_SIZE = 4;
            a.METR_MASK_CONTROL = 5;
            a.METR_MASK_REWIND = 6;
            a.METR_MASK_ACCEPT_INVITATION = 7;
            a.METR_MASK_CLOSE = 8;
            a.METR_MASK_MINIMIZE = 9;
            a.METR_MASK_CLICK = 10;
            a.AdInstance._metrDictionary = {};
            a.AdInstance._metrDictionary[a.EVENT_AD_FIRST_QUARTILE] = a.AdInstance._metrDictionary[
              a.EVENT_AD_THIRD_QUARTILE
            ] = a.AdInstance._metrDictionary[a.EVENT_AD_QUARTILE] =
              (1 << a.METR_MASK_QUARTILE) |
              (1 << a.METR_MASK_MIDPOINT) |
              (1 << a.METR_MASK_COMPLETE);
            a.AdInstance._metrDictionary[a.EVENT_AD_MIDPOINT] =
              (1 << a.METR_MASK_MIDPOINT) | (1 << a.METR_MASK_COMPLETE);
            a.AdInstance._metrDictionary[a.EVENT_AD_COMPLETE] = 1 << a.METR_MASK_COMPLETE;
            a.AdInstance._metrDictionary[a.EVENT_AD_MUTE] = 1 << a.METR_MASK_VOLUME;
            a.AdInstance._metrDictionary[a.EVENT_AD_UNMUTE] = 1 << a.METR_MASK_VOLUME;
            a.AdInstance._metrDictionary[a.EVENT_AD_COLLAPSE] = 1 << a.METR_MASK_SIZE;
            a.AdInstance._metrDictionary[a.EVENT_AD_EXPAND] = 1 << a.METR_MASK_SIZE;
            a.AdInstance._metrDictionary[a.EVENT_AD_PAUSE] = 1 << a.METR_MASK_CONTROL;
            a.AdInstance._metrDictionary[a.EVENT_AD_RESUME] = 1 << a.METR_MASK_CONTROL;
            a.AdInstance._metrDictionary[a.EVENT_AD_REWIND] = 1 << a.METR_MASK_REWIND;
            a.AdInstance._metrDictionary[a.EVENT_AD_ACCEPT_INVITATION] =
              1 << a.METR_MASK_ACCEPT_INVITATION;
            a.AdInstance._metrDictionary[a.EVENT_AD_CLOSE] = 1 << a.METR_MASK_CLOSE;
            a.AdInstance._metrDictionary[a.EVENT_AD_MINIMIZE] = 1 << a.METR_MASK_MINIMIZE;
            a.AdInstance._metrDictionary[a.EVENT_AD_CLICK] = 1 << a.METR_MASK_CLICK;
            a.Util.mixin(a.AdInstance.prototype, {
              getAdId: function () {
                return this._adId;
              },
              getUniversalAdId: function () {
                return this.getActiveCreativeRendition()
                  ? this.getActiveCreativeRendition().getUniversalAdId()
                  : null;
              },
              getSoAdUnit: function () {
                return this._soAdUnit;
              },
              getEventCallbackUrls: function (b, c) {
                var d = [],
                  e = c === a.EVENT_TYPE_CLICK,
                  f = c === a.EVENT_TYPE_CLICK_TRACKING;
                b = a.EventCallback.getEventCallback(
                  this._eventCallbacks,
                  b,
                  f ? a.EVENT_TYPE_CLICK : c
                );
                if (!b) return d;
                c = {};
                c[a.INFO_KEY_NEED_EMPTY_CT] = !0;
                e
                  ? b._showBrowser && d.push(b.getUrl(c))
                  : f
                  ? b._showBrowser || d.push(b.getUrl(c))
                  : d.push(b.getUrl(c));
                e || (d = d.concat(b.getTrackingUrls()));
                return d;
              },
              addEventCallbackUrls: function (a, c, d) {
                d &&
                  this._isValidEventNameAndType(a, c) &&
                  (this._externalEventCallbackUrlsDictionary[
                    c + '-' + a
                  ] = this.getExternalEventCallbackUrls(a, c).concat(d));
              },
              setClickThroughUrl: function (b, c) {
                c &&
                  this._isValidEventNameAndType(b, a.EVENT_TYPE_CLICK) &&
                  (b = this.getEventCallback(b, a.EVENT_TYPE_CLICK)) &&
                  (a.Util.isParameterInURL(b._url, a.URL_PARAMETER_KEY_CR) ||
                    (b._url = b._url + '&' + a.URL_PARAMETER_KEY_CR + '='),
                  (b._url = a.Util.setParameterInURL(b._url, a.URL_PARAMETER_KEY_CR, c)),
                  (b._showBrowser = !0));
              },
              addCreativeRendition: function () {
                var b = new a.CreativeRendition();
                b.parse({
                  creativeRenditionId: this._creativeRenditionId,
                  adReplicaId: this._replicaId,
                  preference: 0,
                });
                b.setBaseUnit(this._creative.getBaseUnit());
                b.setDuration(this._creative.getDuration());
                this._creativeRenditions.push(b);
                this.isPlaceholder() && (this._noLoad = !1);
                return b;
              },
              getRendererController: function () {
                return this._rendererController;
              },
              getSlot: function () {
                this._slot ||
                  (this._slot = this._context._adResponse.getSlotByCustomId(this._slotCustomId));
                return this._slot;
              },
              getCompanionSlots: function () {
                for (var a = [], c = 0; c < this._companionAdInstances.length; c++)
                  a.push(this._companionAdInstances[c]._slot);
                return a;
              },
              getActiveCreativeRendition: function () {
                return this._primaryCreativeRendition;
              },
              setActiveCreativeRendition: function (b) {
                b
                  ? (-1 === this._creativeRenditions.indexOf(b) &&
                      this._creativeRenditions.push(b),
                    (this._primaryCreativeRendition = b),
                    (this._creativeRenditionId = b.getId()))
                  : a.warn('AdInstance.setActiveCreativeRendition', 'rendition is null');
              },
              getAllCreativeRenditions: function () {
                var a = this._creativeRenditions.slice();
                a.sort(function (a, b) {
                  return b.getPreference() - a.getPreference();
                });
                var c = a.indexOf(this._primaryCreativeRendition);
                -1 < c && (a.splice(c, 1), a.unshift(this._primaryCreativeRendition));
                return a;
              },
              getRenderableCreativeRenditions: function () {
                var a = this._creativeRenditions
                    .slice()
                    .sort(function (a, b) {
                      return b.getPreference() - a.getPreference();
                    })
                    .filter(function (a) {
                      return this._rendererController.rendererMatch(a);
                    }, this),
                  c = a.indexOf(this._primaryCreativeRendition);
                -1 < c && (a.splice(c, 1), a.unshift(this._primaryCreativeRendition));
                return a;
              },
              getPlayheadTime: function () {
                var b = -1;
                if (
                  this._rendererController.getRenderer() &&
                  'function' === typeof this._rendererController.getRenderer().getPlayheadTime
                )
                  try {
                    b = this._rendererController.getRenderer().getPlayheadTime();
                  } catch (c) {
                    a.warn('AdInstance.getPlayheadTime', c.description);
                  }
                return b;
              },
              getDuration: function () {
                var a = -1;
                this._rendererController.getRenderer() &&
                  'function' === typeof this._rendererController.getRenderer().getDuration &&
                  (this._lastDurationFromRenderer = a = this._rendererController
                    .getRenderer()
                    .getDuration());
                -1 === a &&
                  (a =
                    -1 < this._lastDurationFromRenderer
                      ? this._lastDurationFromRenderer
                      : this.getActiveCreativeRendition().getDuration());
                return a;
              },
              parse: function (b) {
                if (b) {
                  this._adId = b.adId || null;
                  this._creativeId = b.creativeId || null;
                  this._creativeRenditionId = b.creativeRenditionId || null;
                  this._replicaId = b.hasOwnProperty('replicaId') ? b.replicaId : '';
                  this._noLoad = this._context._adResponse.getAd(this._adId).getNoLoad();
                  this._soAdUnit = this._context._adResponse.getAd(this._adId).getSoAdUnit();
                  this._creative = this._context._adResponse.getCreative(
                    this._adId,
                    this._creativeId
                  );
                  this._creativeRenditions = this._creative.getEligibleCreativeRenditionsForAdInstance(
                    this
                  );
                  var c, d;
                  var e = 0;
                  for (c = b.eventCallbacks || []; e < c.length; e++) {
                    var f = c[e];
                    if ((d = a.EventCallback.newEventCallback(this._context, f.name, f.type)))
                      (d._adInstance = this), d.parse(f), this._eventCallbacks.push(d);
                  }
                  e = 0;
                  for (c = b.companionAds || []; e < c.length; ++e)
                    (f = c[e]) &&
                      f.adSlotCustomId &&
                      ((d = new a.AdInstance(this._context)),
                      (d._slotCustomId = f.adSlotCustomId),
                      d.parse(f),
                      this._companionAdInstances.push(d));
                  e = 0;
                  for (c = b.fallbackAds || []; e < c.length; ++e)
                    (f = c[e]),
                      (d = new a.AdInstance(this._context)),
                      this._parentAdInstancesGroup.push(d),
                      (d._slot = this._slot),
                      (d._parentAdInstancesGroup = this._parentAdInstancesGroup),
                      d.parse(f);
                  0 < this._creativeRenditions.length &&
                    (this._primaryCreativeRendition = this._creativeRenditions[0]);
                }
              },
              play: function () {
                a.log('AdInstance.play ' + this._slotCustomId);
                this._timer.tick();
                this.processEvent(a.EVENT_AD_IMPRESSION, a.EVENT_TYPE_IMPRESSION);
                this._isStartSuccessfully ||
                  (a.MODULE_TYPE_RENDERER ===
                    this._rendererController.getRenderer().info()[a.INFO_KEY_MODULE_TYPE] &&
                    this._context.dispatchEvent(a.EVENT_AD_IMPRESSION, {
                      adInstance: this,
                      slotCustomId: this._slotCustomId,
                    }),
                  (this._isStartSuccessfully = !0));
                this._state.play(this);
                if (
                  this._rendererController.getRenderer().info()[a.INFO_KEY_MODULE_TYPE] ===
                  a.MODULE_TYPE_RENDERER
                )
                  for (var b = 0; b < this._companionAdInstances.length; b++)
                    this._companionAdInstances[b].isPlaceholder() ||
                      this._companionAdInstances[b]
                        .getSlot()
                        .playCompanionAds(this._companionAdInstances[b]);
              },
              pause: function () {
                a.log('AdInstance.pause ' + this._slotCustomId);
                this._isStartSuccessfully
                  ? this._rendererController && this._rendererController.pause()
                  : a.log("Ad hasn't started yet. Ignore.");
              },
              resume: function () {
                a.log('AdInstance.resume' + this._slotCustomId);
                this._isStartSuccessfully
                  ? this._rendererController && this._rendererController.resume()
                  : a.log("Ad hasn't started yet. Ignore.");
              },
              skip: function () {
                a.log('AdInstance.skip');
                'VPAID' !== this.getActiveCreativeRendition().getCreativeApi()
                  ? ((this._isSkipped = !0),
                    this.processEvent(a.EVENT_AD_SKIPPED, a.EVENT_TYPE_GENERIC),
                    this.stop())
                  : a.log('VPAID creative, skip has been implemented inside of VPAID');
              },
              stop: function () {
                a.log('AdInstance.stop');
                this._rendererController.stop();
              },
              fakeComplete: function () {
                this._slot.getTimePositionClass() === a.TIME_POSITION_CLASS_DISPLAY &&
                  ((this._isStartSuccessfully = !1), this._slot.playNextAdInstance());
              },
              complete: function () {
                this._isStartSuccessfully &&
                  (this.processEvent(a.EVENT_AD_IMPRESSION_END, a.EVENT_TYPE_IMPRESSION),
                  a.MODULE_TYPE_RENDERER ===
                    this._rendererController.getRenderer().info()[a.INFO_KEY_MODULE_TYPE] &&
                    this._context.dispatchEvent(a.EVENT_AD_IMPRESSION_END, { adInstance: this }));
                this._state.complete(this);
                this._rendererController._restorePlaceholdersForHybrid();
                this._rendererController.setRenderer(null);
                this._isStartSuccessfully = !1;
                this._slot.playNextAdInstance();
              },
              isStarted: function () {
                return this._isStartSuccessfully;
              },
              onStartPlaying: function () {
                a.MODULE_TYPE_RENDERER ===
                this._rendererController.getRenderer().info()[a.INFO_KEY_MODULE_TYPE]
                  ? (this._isImpressionSent = !0)
                  : (this._translated = !0);
              },
              onCompletePlaying: function () {},
              onStartReplaying: function () {},
              onCompleteReplaying: function () {},
              getEventCallback: function (b, c) {
                return a.EventCallback.getEventCallback(this._eventCallbacks, b, c);
              },
              processEvent: function (b, c, d, e) {
                var f = !0;
                c = this.getEventCallback(b, c);
                b === a.EVENT_AD_IMPRESSION &&
                  this._isStartSuccessfully &&
                  ((c = this.getEventCallback(a.EVENT_ERROR, a.EVENT_TYPE_ERROR)),
                  (d = { errorInfo: 'Trying to send defaultImpression multiple times' }),
                  (f = !1));
                c ? e || c.process(d) : (f = !1);
                b === a.EVENT_AD_CLICK &&
                  this._context.dispatchEvent(a.EVENT_AD_CLICK, { adInstance: this });
                if (
                  (b !== a.EVENT_AD_IMPRESSION && b !== a.EVENT_AD_IMPRESSION_END) ||
                  a.MODULE_TYPE_RENDERER ===
                    this._rendererController.getRenderer().info()[a.INFO_KEY_MODULE_TYPE]
                )
                  (e = { subType: b, adInstance: this, slot: this._slot }),
                    b === a.EVENT_ERROR &&
                      ((e[a.INFO_KEY_ERROR_CODE] = d[a.INFO_KEY_ERROR_CODE]),
                      (e[a.INFO_KEY_ERROR_INFO] = d[a.INFO_KEY_ERROR_INFO]),
                      (e[a.INFO_KEY_ERROR_MODULE] = d[a.INFO_KEY_ERROR_MODULE])),
                    b === a.EVENT_AD_MEASUREMENT &&
                      (e[a.INFO_KEY_CONCRETE_EVENT_ID] = d[a.INFO_KEY_CONCRETE_EVENT_ID]),
                    this._context.dispatchEvent(a.EVENT_AD, e);
                return f;
              },
              setVolume: function (b) {
                a.debug('AdInstance.setVolume(' + b + ')');
                this.isStarted() &&
                  'function' === typeof this._rendererController.getRenderer().setVolume &&
                  this._rendererController.getRenderer().setVolume(b);
              },
              setMetr: function (b, c) {
                var d = a.AdInstance._metrDictionary[b],
                  e = c;
                d &&
                  (b === a.EVENT_AD_CLICK && (e = !c),
                  (this._metr =
                    e === a.CAPABILITY_STATUS_ON || !0 === e ? this._metr | d : this._metr & ~d));
              },
              getExternalEventCallbackUrls: function (a, c) {
                return (this._externalEventCallbackUrlsDictionary[c + '-' + a] || []).slice();
              },
              reset: function () {
                this._rendererController.reset();
                for (var b = 0; b < this._companionAdInstances.length; b++) {
                  var c = this._companionAdInstances[b];
                  (c._state !== a.MediaPlayingState.instance &&
                    c._state !== a.MediaReplayingState.instance) ||
                    c.stop();
                  c._rendererController.reset();
                }
              },
              cloneForTranslation: function () {
                var b = new a.AdInstance(this._context);
                b._adId = this._adId;
                b._creativeId = this._creativeId;
                b._creative = this._creative.cloneForTranslation();
                b._creativeRenditionId = this._creativeRenditionId;
                b._isInitiatedSent = this._isInitiatedSent;
                b._noLoad = this._noLoad;
                b._slot = this.getSlot();
                b._soAdUnit = this.getSoAdUnit();
                b._replicaId = this._replicaId;
                b._wrapperCount = this._wrapperCount;
                for (var c = 0; c < this._eventCallbacks.length; c++) {
                  var d = this._eventCallbacks[c].copy();
                  d._adInstance = b;
                  b._eventCallbacks.push(d);
                }
                b._externalEventCallbackUrlsDictionary = a.Util.copy(
                  this._externalEventCallbackUrlsDictionary
                );
                for (c = 0; c < this._companionAdInstances.length; c++)
                  this._companionAdInstances[c].isPlaceholder()
                    ? b._companionAdInstances.push(
                        this._companionAdInstances[c].cloneForTranslation()
                      )
                    : b._companionAdInstances.push(this._companionAdInstances[c]);
                return b;
              },
              isPlaceholder: function () {
                return this._noLoad;
              },
              setMediaState: function (a) {
                this._state = a;
              },
              _isValidEventNameAndType: function (b, c) {
                return a.Util.isBlank(b) || a.Util.isBlank(c)
                  ? !1
                  : c === a.EVENT_TYPE_CLICK ||
                      c === a.EVENT_TYPE_CLICK_TRACKING ||
                      (c === a.EVENT_TYPE_IMPRESSION &&
                        (b === a.EVENT_AD_IMPRESSION ||
                          b === a.EVENT_AD_FIRST_QUARTILE ||
                          b === a.EVENT_AD_MIDPOINT ||
                          b === a.EVENT_AD_THIRD_QUARTILE ||
                          b === a.EVENT_AD_COMPLETE)) ||
                      (c === a.EVENT_TYPE_STANDARD &&
                        (b === a.EVENT_AD_PAUSE ||
                          b === a.EVENT_AD_RESUME ||
                          b === a.EVENT_AD_REWIND ||
                          b === a.EVENT_AD_MUTE ||
                          b === a.EVENT_AD_UNMUTE ||
                          b === a.EVENT_AD_COLLAPSE ||
                          b === a.EVENT_AD_EXPAND ||
                          b === a.EVENT_AD_MINIMIZE ||
                          b === a.EVENT_AD_CLOSE ||
                          b === a.EVENT_AD_ACCEPT_INVITATION)) ||
                      (c === a.EVENT_TYPE_ERROR && b === a.EVENT_ERROR);
              },
              isPlayable: function () {
                var b = !(
                  this._rendererController.getRendererState() === a.RendererFailedState.instance &&
                  !this._isImpressionSent
                );
                if (!b)
                  return (
                    a.debug(
                      'AdInstance.isPlayable returning false isImpressionSent:',
                      this._isImpressionSent
                    ),
                    b
                  );
                (b = b && !this._translated) ||
                  a.debug('AdInstance.isPlayable returning false translated:', this._translated);
                return b;
              },
              toString: function () {
                return '[AdInstance ' + this._adId + ']';
              },
              getCompanionAdInstances: function () {
                for (var a = [], c = 0; c < this._companionAdInstances.length; ++c)
                  this._companionAdInstances[c].isPlaceholder() ||
                    a.push(this._companionAdInstances[c]);
                return a;
              },
              isRequiredToShow: function () {
                return this._context._adResponse.getAd(this._adId).isRequiredToShow();
              },
              incrementWrapperCount: function () {
                this._wrapperCount++;
              },
              getWrapperCount: function () {
                return this._wrapperCount;
              },
            });
            a.AdManager = function () {
              var b = this;
              this._context = this.newContext();
              this._context.addEventListener(a.EVENT_REQUEST_COMPLETE, function (a) {
                b.onRequestComplete(a);
              });
              this._networkId = this._serverURL = '';
              this._onRequestComplete = this._location = null;
            };
            a.AdManager.prototype = {
              getVersion: function () {
                if (a.version) {
                  var b =
                    a.version.match(/^js-(\d)\.(\d)\.(\d).(\d)/) ||
                    a.version.match(/^js-(\d)\.(\d)\.(\d)/) ||
                    a.version.match(/^js-(\d)\.(\d)/);
                  if (null != b && 0 < b.length) {
                    for (var c = 0, d = 0; d < b.length - 1; d++)
                      c += b[b.length - d - 1] << (d << 3);
                    return c;
                  }
                  if (0 === a.version.indexOf('js-master')) return 4294967295;
                }
                return 0;
              },
              setNetwork: function (b) {
                a.debug(
                  'AdManager.setNetwork(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                if (0 < 1 * b) {
                  this._networkId = 1 * b;
                  for (var c in a._instanceQueue)
                    if (a._instanceQueue.hasOwnProperty(c)) {
                      var d = a._instanceQueue[c];
                      d && d._videoAsset._videoPlayPending && d._videoAsset.play();
                    }
                } else a.warn('AdManager.setNetwork', 'valid networkId required');
              },
              setServerURL: function (b) {
                a.debug(
                  'AdManager.setServerURL(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                a.warn(
                  'AdManager.setServerURL method is DEPRECATED, use AdManager.setServer instead.'
                );
                this.setServer(b);
              },
              setServer: function (b) {
                a.debug(
                  'AdManager.setServer(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                if (b && 'string' === typeof b) {
                  this._serverURL = b;
                  for (var c in a._instanceQueue)
                    if (a._instanceQueue.hasOwnProperty(c)) {
                      var d = a._instanceQueue[c];
                      d && d._videoAsset._videoPlayPending && d._videoAsset.play();
                    }
                } else a.warn('AdManager.setServer', 'server url required');
              },
              setLocation: function (b) {
                a.debug(
                  'AdManager.setLocation(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                this._location = b;
              },
              newContext: function () {
                a.debug(
                  'AdManager.newContext(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                return new a.Context(this);
              },
              newContextWithContext: function (b) {
                a.debug(
                  'AdManager.newContextWithContext(' +
                    Array.prototype.slice.call(arguments).join(',') +
                    ')'
                );
                var c = this.cloneContext(b);
                c._temporalSlotBase = b._temporalSlotBase;
                b.getContentVideoElement() &&
                  (c.setContentVideoElement(b.getContentVideoElement()),
                  delete c._temporalSlotBase['_fw_contentVideo_' + b._instanceId]);
                c._videoDisplaySize = b._videoDisplaySize;
                c._overriddenAdRenderers = b._overriddenAdRenderers;
                c._currentContentPlayheadTime = b._currentContentPlayheadTime;
                c.startSubsession(b._adRequest._subsessionToken);
                c.setRequestMode(b._adRequest._requestMode);
                c._adRequest._compatibleDimensions = b._adRequest._compatibleDimensions;
                c._videoAsset._state = b._videoAsset._state;
                c._videoAsset._callbackTimer = b._videoAsset._callbackTimer;
                c._videoAsset._videoPlayPending = b._videoPlayPending;
                c._videoAsset._requestedVideoViewUrl = b._videoAsset._requestedVideoViewUrl;
                c._videoAsset._delay = b._videoAsset._delay;
                c._videoAsset._durationType = b._videoAsset._durationType;
                var d = b._extensionManager.extensions,
                  e;
                for (e in d) d.hasOwnProperty(e) && c.loadExtension(d[e]);
                return (this._context = c);
              },
              setParameter: function (b, c, d) {
                a.debug(
                  'AdManager.setParameter(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                this._context.setParameter(b, c, d);
              },
              getParameter: function (a) {
                return this._context.getParameter(a);
              },
              submitRequest: function (b, c) {
                a.debug('AdManager.submitRequest()');
                b && 'function' === typeof b
                  ? (this._onRequestComplete = b)
                  : a.warn('AdManager.submitRequest(): callback function required');
                this._context.submitRequest(c / 1000);
              },
              onRequestComplete: function (b) {
                a.debug(
                  'AdManager.onRequestComplete(' +
                    Array.prototype.slice.call(arguments).join(',') +
                    ')'
                );
                this._onRequestComplete &&
                  (this._onRequestComplete({ success: b.success, response: b.response }),
                  (this._onRequestComplete = null));
              },
              registerVideoDisplayBase: function (b) {
                a.debug(
                  'AdManager.registerVideoDisplayBase(' +
                    Array.prototype.slice.call(arguments).join(',') +
                    ')'
                );
                this._context.registerVideoDisplayBase(b);
              },
              setVideoAsset: function (b, c) {
                a.debug(
                  'AdManager.setVideoAsset(' +
                    Array.prototype.slice.call(arguments).join(',') +
                    ')'
                );
                this._context.setVideoAsset(b, c);
              },
              setSiteSection: function (b) {
                a.debug(
                  'AdManager.setSiteSection(' +
                    Array.prototype.slice.call(arguments).join(',') +
                    ')'
                );
                this._context.setSiteSection(b);
              },
              addKeyValue: function (b, c) {
                a.debug(
                  'AdManager.addKeyValue(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                this._context.addKeyValue(b, c);
              },
              setVideoDisplayCompatibleSizes: function (b) {
                a.debug(
                  'AdManager.setVideoDisplayCompatibleSizes(' +
                    Array.prototype.slice.call(arguments).join(',') +
                    ')'
                );
                this._context.setVideoDisplayCompatibleSizes(b);
              },
              playSlots: function (b, c) {
                var d = b;
                a.warn(
                  'AdManager.playSlots() has DEPRECATED, use tv.freewheel.SDK.Slot.Play() instead'
                );
                a.debug('AdManager.playSlots(' + b + ')');
                'string' === typeof b && (d = b.toUpperCase());
                this._playSlots(d, c);
              },
              _playSlots: function (b, c) {
                var d = c;
                'function' !== typeof d && (d = function () {});
                if (this._context._adResponse) {
                  var e = [];
                  c = this._context.getTemporalSlots();
                  for (var f = 0; f < c.length; ++f) {
                    var g = c[f];
                    (0.1 > Math.abs(g.getTimePosition() - b) || b === g.getTimePositionClass()) &&
                      e.push(g);
                  }
                  if (0 === e.length) a.warn('AdManager.playSlots', 'no slot matches', b), d();
                  else if (b === a.TIME_POSITION_CLASS_OVERLAY)
                    for (f = 0; f < e.length; f++)
                      (function (b) {
                        if (!b._onContentVideoTimeUpdate) {
                          var c = this._context.getContentVideoElement(),
                            d = (b._onContentVideoTimeUpdate = function (e) {
                              a.log('_onContentVideoTimeUpdate: event.type = ' + e.type);
                              !c.paused &&
                                !0 !== c._fw_videoAdPlaying &&
                                0 <= c.currentTime - b.getTimePosition() &&
                                1 > c.currentTime - b.getTimePosition() &&
                                (c.removeEventListener('timeupdate', d, !1),
                                b._play(function () {
                                  var a = setInterval(function () {
                                    !c.paused &&
                                      2 < Math.abs(c.currentTime - b.getTimePosition()) &&
                                      (c.addEventListener('timeupdate', d, !1), clearInterval(a));
                                  }, 1000);
                                }));
                            });
                          c.addEventListener('timeupdate', d, !1);
                        }
                      })(e[f]);
                  else
                    (function () {
                      var a = e.shift();
                      a ? a._play(d) : d();
                    })();
                } else a.warn('AdManager._playSlots', 'request is not completed'), d();
              },
              dispose: function () {
                a.debug('AdManager.dispose()');
                this._context.dispose();
                this._onRequestComplete = null;
              },
              cloneContext: function (a) {
                var b = this.newContext(),
                  d = a._adRequest._capabilities._capabilities,
                  e;
                for (e in d) d.hasOwnProperty(e) && b.setCapability(e, d[e]);
                b.setProfile(a._adRequest._playerProfile);
                b.setSiteSection(
                  a._ss_id,
                  a._ss_networkId,
                  a._ss_pageViewRandom,
                  a._ss_idType,
                  a._ss_fallbackId
                );
                b.setVideoAsset(
                  a._va_id,
                  a._va_duration,
                  a._va_networkId,
                  a._va_location,
                  a._va_autoPlayType,
                  a._va_viewRandom,
                  a._va_idType,
                  a._va_fallbackId,
                  a._va_durationType
                );
                b.setVisitor(a._adRequest._visitorCustomId, a._adRequest._visitorIpV4Address);
                return b;
              },
            };
            a.AdManager.prototype.constructor = a.AdManager;
            a.AdRequest = function (b) {
              this._context = b;
              this._capabilities = new a.Capabilities();
              this._keyValues = [];
              this._playerProfile = '';
              this._compatibleDimensions = null;
              this._temporalSlots = [];
              this._siteSectionId = this._siteSectionCustomId = '';
              this._siteSectionNetworkId = 0;
              this._siteSectionFallbackId = '';
              this._siteSectionViewRandom = 0;
              this._requestMode = this._visitorIpV4Address = this._visitorCustomId = '';
              this._subsessionToken = this._requestDuration = 0;
              this._candidateAdIds = [];
              this._slotScanner = new a.PageSlotScanner(b);
              this._urlParams = {};
              this._urlKeyValues = [];
              this._customInfo = '';
            };
            a.AdRequest.prototype = {
              setCapability: function (a, c) {
                this._capabilities.setCapability(a, c);
              },
              addKeyValue: function (b, c) {
                'string' !== typeof b || 'string' !== typeof c || 0 === b.length
                  ? a.warn('AdRequest.addKeyValue:', 'key and value required')
                  : ((b = encodeURIComponent(b) + '=' + encodeURIComponent(c)),
                    0 > this._keyValues.indexOf(b) && this._keyValues.push(b));
              },
              setProfile: function (b) {
                'string' !== typeof b
                  ? a.warn('AdRequest.setProfile:', 'player profile required')
                  : (this._playerProfile = b);
              },
              setVideoDisplayCompatibleSizes: function (b) {
                if (b && b.length) {
                  for (var c = [], d = {}, e = 0; e < b.length; ++e)
                    if (
                      (a.debug('dimension is:', b[e].width, 'X', b[e].height),
                      0 < b[e].width && 0 < b[e].height)
                    ) {
                      var f = b[e].width + ',' + b[e].height;
                      null == d[f] && ((d[f] = ''), c.push(f));
                    }
                  0 < c.length && (this._compatibleDimensions = c.join('|'));
                } else
                  a.warn(
                    'AdRequest.setVideoDisplayCompatibleSizes:',
                    'compatible dimensions required'
                  );
              },
              setSiteSection: function (b, c, d, e, f) {
                if (b) {
                  switch (e) {
                    case a.ID_TYPE_FW:
                      this._siteSectionId = b;
                      break;
                    case a.ID_TYPE_GROUP:
                      this._siteSectionId = 'g' + b;
                      break;
                    default:
                      this._siteSectionCustomId = b;
                  }
                  0 < 1 * c && (this._siteSectionNetworkId = 1 * c);
                  0 < 1 * d && (this._siteSectionViewRandom = 1 * d);
                  'number' === typeof f && 0 < f
                    ? (this._siteSectionFallbackId = '' + f)
                    : 'string' === typeof f && (this._siteSectionFallbackId = f.trim());
                } else a.warn('AdRequest.setSiteSection: id required');
              },
              setVisitor: function (b, c) {
                'string' !== typeof b
                  ? a.warn('AdRequest.setVisitor:', 'customId required')
                  : ((this._visitorCustomId = b),
                    'string' === typeof c && '' !== c && (this._visitorIpV4Address = c));
              },
              setRequestMode: function (b) {
                b !== a.REQUEST_MODE_ON_DEMAND && b !== a.REQUEST_MODE_LIVE
                  ? a.warn('AdRequest.setRequestMode:', 'unknown mode: ' + b)
                  : ((this._requestMode = b),
                    this._requestMode === a.REQUEST_MODE_LIVE &&
                      0 === this._subsessionToken &&
                      this.setSubsessionToken(10000 * Math.random() + 1));
              },
              setRequestDuration: function (b) {
                'number' !== typeof b
                  ? a.warn('AdRequest.setRequestDuration:', 'request duration required')
                  : (0 > b &&
                      (a.warn(
                        'AdRequest.setRequestDuration:',
                        'requestDuration is negative, reset it to 0'
                      ),
                      (b = 0)),
                    (this._requestDuration = b));
              },
              addCandidateAd: function (b) {
                'number' !== typeof b
                  ? a.warn('AdRequest.addCandidateAd:', 'candidate ad ID required')
                  : 0 > b
                  ? a.warn('AdRequest.addCandidateAd', 'invalid ad ID, ignore')
                  : this._candidateAdIds.push(b);
              },
              addTemporalSlot: function (b, c, d, e, f, g, h, k) {
                if (a.Util.isBlank(b) || a.Util.isBlank(c) || 0 > d)
                  a.warn('AdRequest.addTemporalSlot:', 'invalid parameters');
                else {
                  for (var l = 0; l < this._temporalSlots.length; l++)
                    if (this._temporalSlots[l].getCustomId() === b) {
                      a.warn('AdRequest.addTemporalSlot:', 'slot is already existed, ignored');
                      return;
                    }
                  l = new a.Slot(this._context);
                  l.setCustomId(b);
                  l.setAdUnit(c);
                  l.setTimePosition(d);
                  l.setSlotProfile(e);
                  l.setCuepointSequence(1 * f);
                  l.setMaxDuration(g);
                  l.setMinDuration(h);
                  l.setAcceptContentType(k);
                  this._temporalSlots.push(l);
                }
              },
              setSubsessionToken: function (a) {
                this._subsessionToken = a;
              },
              scanPageSlots: function () {
                this._slotScanner.scanPageSlots();
              },
              generateTypeBRequestUrl: function () {
                var b = this._context._adManager._serverURL.split('?'),
                  c = b[0],
                  d = [
                    /fwmrm\.net$/,
                    /fwmrm\.net\/$/,
                    /fwmrm\.net\/ad$/,
                    /fwmrm\.net\/ad\/$/,
                    /fwmrm\.net\/ad\/g$/,
                    /fwmrm\.net\/ad\/g\/$/,
                    /fwmrm\.net\/ad\/g\/1$/,
                  ];
                if (0 === c.indexOf('http://') || 0 === c.indexOf('https://'))
                  for (var e = 0; e < d.length; ++e)
                    if (c.match(d[e])) {
                      c = c.slice(0, c.indexOf('fwmrm.net') + 9) + '/ad/g/1';
                      break;
                    }
                this.parseQueryStr(b.slice(1).join('?'));
                b =
                  this.generateGlobalParametersQueryStr() +
                  ';' +
                  this.generateKeyValuesStr() +
                  ';';
                (this._capabilities.getCapability(a.CAPABILITY_SKIP_AD_SELECTION) &&
                  1 === this._capabilities.getCapability(a.CAPABILITY_SKIP_AD_SELECTION)) ||
                  (b += this.generateSlotsTypeBStr());
                a.Util.isBlank(this._customInfo) || (b += ';' + this._customInfo);
                return c + '?' + b;
              },
              generateVideoViewRequestUrlWithDummyContextInstanceId: function (b) {
                this._context.setCapability(
                  a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,
                  a.CAPABILITY_STATUS_ON
                );
                this._context.setCapability(
                  a.CAPABILITY_SKIP_AD_SELECTION,
                  a.CAPABILITY_STATUS_ON
                );
                var c = this.generateTypeBRequestUrl();
                c = a.Util.setParameterInURL(
                  c,
                  'cbfn',
                  "tv.freewheel.SDK._instanceQueue['Context_" +
                    b +
                    "']._videoAsset.requestComplete"
                );
                a.debug('generateVideoViewRequestUrlWithDummyContextInstanceId():' + c);
                this._context.setCapability(
                  a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,
                  a.CAPABILITY_STATUS_UNSET
                );
                this._context.setCapability(
                  a.CAPABILITY_SKIP_AD_SELECTION,
                  a.CAPABILITY_STATUS_UNSET
                );
                return c;
              },
              parseQueryStr: function (b) {
                var c = b;
                a.debug(
                  'AdRequest.parseQueryStr(' +
                    Array.prototype.slice.call(arguments).join(',') +
                    ')'
                );
                this._urlParams = {};
                this._urlKeyValues = [];
                this._customInfo = '';
                if (c) {
                  ';' === c.charAt(c.length - 1) && (c = c.substring(0, c.length - 1));
                  c = c.split(';');
                  var d;
                  if (c[0]) {
                    var e = c[0].split('&');
                    for (d = 0; d < e.length; ++d) {
                      var f = e[d].split('=');
                      2 === f.length && (this._urlParams[f[0]] = f[1]);
                    }
                  }
                  if (c[1])
                    for (e = c[1].split('&'), d = 0; d < e.length; ++d)
                      this._urlKeyValues.push(e[d]);
                  c[2] && (this._customInfo = c.slice(2).join(';'));
                }
              },
              generateGlobalParametersQueryStr: function () {
                a.debug('AdRequest.generateGlobalParametersQueryStr');
                var b = this._context.getParameter('wrapperVersion');
                b = [
                  ['prof', this._playerProfile, 'string'],
                  ['nw', this._context._adManager._networkId, 'number'],
                  ['caid', this._context._videoAsset._customId, 'string'],
                  ['asid', this._context._videoAsset._id, 'string'],
                  ['vdur', this._context._videoAsset._duration, 'number'],
                  ['asnw', this._context._videoAsset._networkId, 'number'],
                  ['asml', this._context._videoAsset._location, 'string'],
                  ['vprn', this._context._videoAsset._viewRandom, 'number'],
                  ['afid', this._context._videoAsset._fallbackId, 'string'],
                  ['vdty', this._context._videoAsset._durationType, 'string'],
                  ['vtpo', this._context._videoAsset._currentTpos, 'number'],
                  ['csid', this._siteSectionCustomId, 'string'],
                  ['ssid', this._siteSectionId, 'string'],
                  ['ssnw', this._siteSectionNetworkId, 'number'],
                  ['pvrn', this._siteSectionViewRandom, 'number'],
                  ['sfid', this._siteSectionFallbackId, 'string'],
                  ['vcid', this._visitorCustomId, 'string'],
                  ['mode', this._requestMode, 'string'],
                  ['vrdu', this._requestDuration, 'number'],
                  ['ssto', this._subsessionToken, 'number'],
                  ['cd', this._compatibleDimensions || this.detectScreenDimension(), 'string'],
                  ['vclr', a.version + (b ? ',' + b : ''), 'string'],
                  ['resp', a.PLATFORM_SEND_REQUEST_BY_FORM ? 'json2' : 'json', 'string'],
                  ['orig', window.location.protocol + '//' + window.location.host, 'string'],
                  [
                    'cbfn',
                    "tv.freewheel.SDK._instanceQueue['Context_" +
                      this._context._instanceId +
                      "'].requestComplete",
                    'string',
                  ],
                  ['vip', this._visitorIpV4Address, 'string'],
                  ['cana', this._candidateAdIds.join(','), 'string'],
                ];
                for (var c = 0; c < b.length; c++) {
                  var d = b[c];
                  switch (d[2]) {
                    case 'string':
                      a.Util.isBlank(d[1]) || (this._urlParams[d[0]] = encodeURIComponent(d[1]));
                      break;
                    case 'number':
                      0 < d[1] && (this._urlParams[d[0]] = d[1]);
                  }
                }
                b = '';
                for (var e in this._urlParams)
                  this._urlParams.hasOwnProperty(e) && (b += e + '=' + this._urlParams[e] + '&');
                b = b.substring(0, b.length - 1);
                0 < this._slotScanner._candidateAds.length &&
                  (null == this._capabilities._capabilities[a.CAPABILITY_CHECK_COMPANION] &&
                    this._capabilities.setCapability(
                      a.CAPABILITY_CHECK_COMPANION,
                      a.CAPABILITY_STATUS_ON
                    ),
                  null == this._capabilities._capabilities[a.CAPABILITY_CHECK_TARGETING] &&
                    this._capabilities.setCapability(
                      a.CAPABILITY_CHECK_TARGETING,
                      a.CAPABILITY_STATUS_OFF
                    ));
                this._context._videoAsset._eventCallback ||
                  this._context._videoAsset._requestedVideoViewUrl ||
                  (!this._context._videoAsset._id && !this._context._videoAsset._customId) ||
                  this._context.setCapability(
                    a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,
                    a.CAPABILITY_STATUS_ON
                  );
                this._capabilities._capabilities[a.CAPABILITY_DISPLAY_REFRESH] &&
                  this._context.setCapability(
                    a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,
                    a.CAPABILITY_STATUS_OFF
                  );
                b = this._capabilities.parseCapabilities(b);
                this._context.setCapability(
                  a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,
                  a.CAPABILITY_STATUS_UNSET
                );
                switch (this._context._videoAsset._autoPlayType) {
                  case a.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED:
                    e = '+play+uapl';
                    break;
                  case a.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE:
                    e = '-play';
                    break;
                  default:
                    e = '+play-uapl';
                }
                return (b = b.replace(/flag=/, 'flag=' + encodeURIComponent(e)));
              },
              generateKeyValuesStr: function () {
                a.debug('AdRequest.generateKeyValuesStr');
                var b = a.Util.flashVersion();
                b = this._keyValues.concat([
                  '_fw_h_x_flash_version=' + encodeURIComponent(b),
                  '_fw_dpr=' +
                    (void 0 === window.devicePixelRatio
                      ? '1'
                      : window.devicePixelRatio.toFixed(2).toString()),
                ]);
                for (var c = 0; c < this._urlKeyValues.length; c++) {
                  var d = this._urlKeyValues[c];
                  0 > b.indexOf(d) && b.push(d);
                }
                (c = this._context._adManager._location) &&
                  b.push(
                    'ltlg=' +
                      encodeURIComponent(
                        Math.round(10000 * c.coords.latitude) / 10000 +
                          ',' +
                          Math.round(10000 * c.coords.longitude) / 10000
                      )
                  );
                return b.join('&');
              },
              generateSlotsTypeBStr: function () {
                a.debug('AdRequest.generateSlotsTypeBStr');
                for (var b = '', c = [], d = 0; d < this._temporalSlots.length; d++) {
                  var e = this._temporalSlots[d];
                  e = [
                    ['slid', e.getCustomId(), 'string'],
                    ['slau', e.getAdUnit(), 'string'],
                    ['ptgt', 'a', 'string'],
                    ['tpos', e.getTimePosition(), 'number'],
                    ['cpsq', e.getCuepointSequence(), 'number'],
                    ['envp', e.getSlotProfile(), 'string'],
                    ['maxd', e.getMaxDuration(), 'number'],
                    ['mind', e.getMinDuration(), 'number'],
                    ['prct', e.getAcceptContentType(), 'string'],
                  ];
                  for (var f = [], g = 0; g < e.length; g++) {
                    var h = e[g];
                    switch (h[2]) {
                      case 'string':
                        a.Util.isBlank(h[1]) || f.push(h[0] + '=' + encodeURIComponent(h[1]));
                        break;
                      case 'number':
                        -1 < ['cpsq', 'maxd', 'mind'].indexOf(h[0])
                          ? 0 < h[1] && f.push(h[0] + '=' + h[1])
                          : 0 <= h[1] && f.push(h[0] + '=' + h[1]);
                    }
                  }
                  c.push(f.join('&'));
                }
                0 < c.length && (b = c.join(';') + ';');
                return (b += this._slotScanner.slotsToTypeBStr());
              },
              detectScreenDimension: function () {
                a.debug('AdRequest.detectScreenDimension:', screen.width + ',' + screen.height);
                return screen.width + ',' + screen.height;
              },
            };
            a.AdResponse = function (a) {
              this._context = a;
            };
            a.AdResponse.prototype = {};
            a.AdResponse.prototype.constructor = a.AdResponse;
            a.Util.mixin(a.AdResponse.prototype, {
              parse: function (b, c) {
                this._data = b;
                this._temporalSlots = [];
                this._videoPlayerNonTemporalSlots = [];
                this._siteSectionNonTemporalSlots = [];
                this._profileParameters = {};
                this._ads = [];
                this._siteSectionCustomId = a.Util.getObject('siteSection.customId', b) || '';
                this._adRenderers = [];
                var d;
                var e = a.Util.getObject('parameters', b) || [];
                for (d = 0; d < e.length; ++d) {
                  var f = e[d];
                  this._profileParameters[f.name] = f.value;
                }
                this._adRenderers =
                  a.Util.getObject('rendererManifest.adRenderers.adRenderer', b) || [];
                for (d = 0; d < this._adRenderers.length; d++)
                  'undefined' !== typeof this._adRenderers[d].adUnit &&
                    ((this._adRenderers[d].baseUnit = this._adRenderers[d].adUnit),
                    delete this._adRenderers[d].adUnit);
                e = a.Util.getObject('ads.ads', b) || [];
                for (d = 0; d < e.length; ++d)
                  (f = new a.Ad(this._context)), f.parse(e[d]), this._ads.push(f);
                e = a.Util.getObject('siteSection.videoPlayer.videoAsset.adSlots', b) || [];
                for (d = 0; d < e.length; ++d)
                  (f = new a.Slot(this._context)),
                    f.setType(a.SLOT_TYPE_TEMPORAL),
                    f.setBase(c),
                    f.parse(e[d]),
                    this._temporalSlots.push(f);
                e = a.Util.getObject('siteSection.videoPlayer.adSlots', b) || [];
                for (d = 0; d < e.length; ++d)
                  (f = new a.Slot(this._context)),
                    f.setType(a.SLOT_TYPE_VIDEOPLAYER_NONTEMPORAL),
                    f.setTimePositionClass(a.TIME_POSITION_CLASS_DISPLAY),
                    f.parse(e[d]),
                    this._initSlotData(f),
                    this._videoPlayerNonTemporalSlots.push(f);
                e = a.Util.getObject('siteSection.adSlots', b) || [];
                for (d = 0; d < e.length; ++d)
                  (f = new a.Slot(this._context)),
                    f.setType(a.SLOT_TYPE_SITESECTION_NONTEMPORAL),
                    f.setTimePositionClass(a.TIME_POSITION_CLASS_DISPLAY),
                    f.parse(e[d]),
                    this._initSlotData(f),
                    this._siteSectionNonTemporalSlots.push(f);
                b = a.Util.getObject('siteSection.videoPlayer.videoAsset', b) || {};
                this._context._videoAsset.parse(b);
              },
              getCreative: function (a, c) {
                return (a = this.getAd(a)) ? a.getCreative(c) : null;
              },
              getAd: function (a) {
                for (var b = 0; b < this._ads.length; b++) {
                  var d = this._ads[b];
                  if (d.getId() === a) return d;
                }
                return null;
              },
              getTemporalSlots: function () {
                return this._temporalSlots;
              },
              getSiteSectionNonTemporalSlots: function () {
                return this._siteSectionNonTemporalSlots;
              },
              getVideoPlayerNonTemporalSlots: function () {
                return this._videoPlayerNonTemporalSlots;
              },
              getSiteSectionCustomId: function () {
                return this._siteSectionCustomId;
              },
              getSlotByCustomId: function (b) {
                for (var c = 0; c < this._temporalSlots.length; ++c)
                  if (this._temporalSlots[c].getCustomId() === b) return this._temporalSlots[c];
                for (c = 0; c < this._videoPlayerNonTemporalSlots.length; ++c)
                  if (this._videoPlayerNonTemporalSlots[c].getCustomId() === b)
                    return this._videoPlayerNonTemporalSlots[c];
                for (c = 0; c < this._siteSectionNonTemporalSlots.length; ++c)
                  if (this._siteSectionNonTemporalSlots[c].getCustomId() === b)
                    return this._siteSectionNonTemporalSlots[c];
                a.warn('getSlotByCustomId(): not found', b);
                return null;
              },
              _initSlotData: function (b) {
                for (
                  var c = !1, d = 0;
                  d < this._context._adRequest._slotScanner._knownSlots.length;
                  d++
                ) {
                  var e = this._context._adRequest._slotScanner._knownSlots[d];
                  if (b.getCustomId() === e.id && e.element) {
                    b.setWidth(e.width);
                    b.setHeight(e.height);
                    b.setBase(e.element);
                    b.setAcceptCompanion(e.acceptCompanion);
                    b.setInitialAdOption(e.initialAdOption);
                    c = !0;
                    break;
                  }
                }
                c || a.warn('Failed to init slot ' + b.getCustomId());
                return c;
              },
            });
            a.Capabilities = function () {
              this._capabilities = {};
              this.init();
            };
            a.Capabilities.prototype = {
              init: function () {
                for (
                  var b = [
                      a.CAPABILITY_SLOT_TEMPLATE,
                      a.CAPABILITY_MULTIPLE_CREATIVE_RENDITIONS,
                      a.CAPABILITY_FALLBACK_UNKNOWN_ASSET,
                      a.CAPABILITY_FALLBACK_UNKNOWN_SITE_SECTION,
                      a.CAPABILITY_FALLBACK_ADS,
                      a.CAPABILITY_SLOT_CALLBACK,
                      a.CAPABILITY_NULL_CREATIVE,
                      a.CAPABILITY_AUTO_EVENT_TRACKING,
                      a.CAPABILITY_RENDERER_MANIFEST,
                    ],
                    c = 0;
                  c < b.length;
                  c++
                )
                  this._capabilities[b[c]] = a.CAPABILITY_STATUS_ON;
              },
              setCapability: function (a, c) {
                this._capabilities[a] = c;
              },
              getCapability: function (a) {
                return this._capabilities[a];
              },
              parseCapabilities: function (b) {
                var c = '',
                  d;
                for (d in this._capabilities)
                  if (this._capabilities.hasOwnProperty(d)) {
                    switch (this._capabilities[d]) {
                      case a.CAPABILITY_STATUS_ON:
                        c += '+' + d;
                        break;
                      case a.CAPABILITY_STATUS_OFF:
                        c += '-' + d;
                    }
                    b = b.replace(new RegExp('(%2B|-|\\+)' + d, 'g'), '');
                  }
                c = encodeURIComponent(c);
                return (b =
                  -1 < b.indexOf('flag=') ? b.replace(/flag=/, 'flag=' + c) : b + ('&flag=' + c));
              },
            };
            a.ContentVideoExtension = function () {
              this.autoSourceRestore = this.respondPauseResume = !0;
              this._originalTime = 0;
              this._contentVideoControls = this._contentVideoSrc = null;
            };
            a.ContentVideoExtension.prototype = {
              _isEnabled: function () {
                var b = this._context.getParameter(a.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED);
                return (
                  (null == b || !0 === a.Util.str2bool(b)) &&
                  null != this._context.getContentVideoElement()
                );
              },
              _getBooleanParameter: function (b, c) {
                b = this._context.getParameter(b);
                null == b && (b = c);
                return a.Util.str2bool(b);
              },
              init: function (b) {
                a.debug('ContentVideoExtension.init(context)');
                this._context = b;
                this._fixContentVideoCurrentTime = a.Util.bind(this, function (b) {
                  a.log('_fixContentVideoCurrentTime: event = ' + b.type);
                  if (
                    !(
                      0 >= this._context.getContentVideoElement().currentTime ||
                      0 >= this._context.getContentVideoElement().seekable.length
                    ) &&
                    (this._context
                      .getContentVideoElement()
                      .removeEventListener('timeupdate', this._fixContentVideoCurrentTime, !1),
                    0 < this._context.getContentVideoElement().currentTime &&
                      1 > this._context.getContentVideoElement().currentTime &&
                      1 < this._originalTime)
                  ) {
                    a.log('ContentVideoExtension: seeking to original time', this._originalTime);
                    try {
                      this._context.getContentVideoElement().currentTime = this._originalTime;
                    } catch (d) {
                      a.warn('ContentVideoExtension: seek error');
                    }
                  }
                });
                this._pause = a.Util.bind(this, function (b) {
                  a.log('_pause: event = ' + b.type);
                  this._isEnabled()
                    ? this._respondPauseResume() &&
                      (a.debug(
                        'ContentVideoExtension: EVENT_CONTENT_VIDEO_PAUSE_REQUEST pausing content video',
                        this._context.getContentVideoElement().src
                      ),
                      (this._originalTime = this._context.getContentVideoElement().currentTime),
                      this._context.getContentVideoElement().pause())
                    : a.debug('ContentVideoExtension: extension is not enabled, do nothing.');
                });
                this._resume = a.Util.bind(this, function (b) {
                  a.log('_resume: event = ' + b.type);
                  this._isEnabled()
                    ? this._respondPauseResume() &&
                      (a.debug(
                        'ContentVideoExtension: EVENT_CONTENT_VIDEO_RESUME_REQUEST resume content video',
                        this._context.getContentVideoElement().src
                      ),
                      !this._context._videoAsset ||
                      (null != this._context._videoAsset._state &&
                        this._context._videoAsset._state !== a.VIDEO_STATE_COMPLETED)
                        ? (a.log('ContentVideoExtension: resume content video'),
                          this._context.getContentVideoElement().play(),
                          a.PLATFORM_AUTO_SEEK_AFTER_MIDROLL &&
                            !0 ===
                              this._getBooleanParameter(
                                a.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SEEK_BACK,
                                !0
                              ) &&
                            this._context
                              .getContentVideoElement()
                              .addEventListener(
                                'timeupdate',
                                this._fixContentVideoCurrentTime,
                                !1
                              ))
                        : a.warn(
                            'ContentVideoExtension: video state is uninitialized or completed, skip resume.'
                          ))
                    : a.debug('ContentVideoExtension: extension is not enabled, do nothing.');
                });
                this._onAttach = a.Util.bind(this, function (b) {
                  if (!this._isEnabled())
                    a.debug('ContentVideoExtension: extension is not enabled, do nothing.');
                  else if (this._autoSourceRestore())
                    switch (b.slot.getTimePositionClass()) {
                      case a.TIME_POSITION_CLASS_PREROLL:
                      case a.TIME_POSITION_CLASS_POSTROLL:
                        a.debug(
                          'ContentVideoExtension: store current content video src',
                          this._context.getContentVideoElement().src
                        ),
                          (this._contentVideoSrc = this._context.getContentVideoElement().src),
                          (this._contentVideoControls = this._context.getContentVideoElement().controls),
                          this._context.getContentVideoElement().paused ||
                            this._context.getContentVideoElement().pause();
                    }
                });
                this._onDetach = a.Util.bind(this, function (b) {
                  if (!this._isEnabled())
                    a.debug('ContentVideoExtension: extension is not enabled, do nothing.');
                  else if (this._autoSourceRestore())
                    switch (((b = b.slot.getTimePositionClass()), b)) {
                      case a.TIME_POSITION_CLASS_PREROLL:
                      case a.TIME_POSITION_CLASS_POSTROLL:
                        a.debug(
                          'ContentVideoExtension: restore content video src to',
                          this._contentVideoSrc
                        ),
                          this._context.getContentVideoElement().src !== this._contentVideoSrc &&
                            (this._context.getContentVideoElement().src = this._contentVideoSrc),
                          (this._context.getContentVideoElement().controls = this._contentVideoControls),
                          b === a.TIME_POSITION_CLASS_PREROLL &&
                            this._context.getContentVideoElement().load();
                    }
                });
                a.debug(
                  'ContentVideoExtension: enabling content video pause resume request handling.'
                );
                this._context.addEventListener(a.EVENT_CONTENT_VIDEO_PAUSE_REQUEST, this._pause);
                this._context.addEventListener(a.EVENT_CONTENT_VIDEO_RESUME_REQUEST, this._resume);
                a.debug('ContentVideoExtension: enabling content video source management.');
                this._context.addEventListener(a.EVENT_SLOT_STARTED, this._onAttach);
                this._context.addEventListener(a.EVENT_SLOT_ENDED, this._onDetach);
              },
              _respondPauseResume: function () {
                return this._getBooleanParameter(
                  a.PARAMETER_EXTENSION_CONTENT_VIDEO_RESPOND_PAUSE_RESUME,
                  !0
                );
              },
              _autoSourceRestore: function () {
                return this._getBooleanParameter(
                  a.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SOURCE_RESTORE,
                  !0
                );
              },
              dispose: function () {
                a.debug('ContentVideoExtension.dispose()');
                this._context &&
                  (this._context.removeEventListener(
                    a.EVENT_CONTENT_VIDEO_PAUSE_REQUEST,
                    this._pause
                  ),
                  this._context.removeEventListener(
                    a.EVENT_CONTENT_VIDEO_RESUME_REQUEST,
                    this._resume
                  ),
                  this._context.removeEventListener(a.EVENT_SLOT_STARTED, this._onAttach),
                  this._context.removeEventListener(a.EVENT_SLOT_ENDED, this._onDetach),
                  (this._context = null));
              },
            };
            a.ContentVideoExtension.prototype.constructor = a.ContentVideoExtension;
            a._instanceCounter = 0;
            a._instanceQueue = {};
            a.Context = function (b) {
              this._adManager = b;
              this._eventDispatcher = new a.EventDispatcher();
              this._adRequest = new a.AdRequest(this);
              this._adResponse = null;
              this._videoAsset = new a.VideoAsset(this);
              this._temporalSlotBase = null;
              this._videoDisplaySize = {};
              this._globalLevelParameterDictionary = {};
              this._overrideLevelParameterDictionary = {};
              this._rendererManifest = {};
              this._overriddenAdRenderers = [];
              this._extensionManager = new a.ExtensionManager(this);
              this._totalSetDisplaySizeCount = this._autoSetDisplaySizeCount = this._requestState = 0;
              this._instanceId = a._instanceCounter;
              a._instanceQueue['Context_' + a._instanceCounter] = this;
              a._instanceCounter++;
              this._contentVideoAttached = !1;
              this._currentContentPlayheadTime = 0;
              this._ss_id = '';
              this._ss_networkId = this._ss_pageViewRandom = 0;
              this._ss_idType = a.ID_TYPE_CUSTOM;
              this._va_location = this._va_networkId = this._va_duration = this._va_id = this._ss_fallbackId =
                '';
              this._va_autoPlayType = a.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED;
              this._va_fallbackId = '';
              this._va_viewRandom = 0;
              this._va_idType = a.ID_TYPE_CUSTOM;
              this._va_durationType = a.VIDEO_ASSET_DURATION_TYPE_EXACT;
              this._isRefreshRequest = !1;
              this._refreshSlots = [];
              this._adVolume = 1;
              this._onVolumeChange = this.__onVolumeChange.bind(this);
            };
            a.Context.prototype = {
              getAdVolume: function () {
                return this._adVolume;
              },
              setAdVolume: function (b) {
                a.debug('Context.setAdVolume', b);
                if (this.getContentVideoElement())
                  if ('number' !== typeof b || 0 > b || 1 < b) a.debug('Invalid volume: ' + b);
                  else if ((a.PLATFORM_IS_IPHONE_IPOD || a.PLATFORM_IS_IPAD) && 0 < b && 1 > b)
                    a.debug("iOS doesn't allow volume values other than 0 and 1, ignore.");
                  else if (b === this._adVolume) a.debug('Volume did not change, ignore.');
                  else {
                    this._adVolume = b;
                    b = this.getTemporalSlots();
                    for (var c = 0; c < b.length; ++c) {
                      var d = b[c];
                      if (
                        d.getType() === a.SLOT_TYPE_TEMPORAL &&
                        d.getState() !== a.MediaInitState.instance &&
                        d.getState() !== a.MediaEndState.instance &&
                        (d = d.getCurrentAdInstance())
                      ) {
                        d.setVolume(this._adVolume);
                        break;
                      }
                    }
                  }
                else a.debug('No video element set, ignore.');
              },
              __onVolumeChange: function (b) {
                a.debug('Context._onVolumeChange(): event = ' + b.type);
                a.debug(
                  'Context._onVolumeChange(): video element is muted: ' +
                    this.getContentVideoElement().muted
                );
                0 !== this._adVolume || this.getContentVideoElement().muted
                  ? this.setAdVolume(
                      this.getContentVideoElement().muted
                        ? 0
                        : this.getContentVideoElement().volume
                    )
                  : this.setAdVolume(this.getContentVideoElement().volume);
              },
              addRenderer: function (a, c, d, e, f, g, h) {
                this._overriddenAdRenderers.push({
                  url: a,
                  baseUnit: c,
                  contentType: d,
                  creativeApi: g,
                  slotType: e,
                  soAdUnit: f,
                  parameter: h,
                });
              },
              setCapability: function (b, c) {
                a.debug('Context.setCapability', b, c);
                this._adRequest.setCapability(b, c);
              },
              addKeyValue: function (b, c) {
                a.debug('Context.addKeyValue', b, c);
                this._adRequest.addKeyValue(b, c);
              },
              setParameter: function (b, c, d) {
                a.debug('Context.setParameter', b, c, d);
                if (d === a.PARAMETER_LEVEL_GLOBAL) d = this._globalLevelParameterDictionary;
                else if (d === a.PARAMETER_LEVEL_OVERRIDE)
                  d = this._overrideLevelParameterDictionary;
                else return;
                null == c ? delete d[b] : (d[b] = c);
              },
              getParameter: function (a) {
                return a
                  ? this._overrideLevelParameterDictionary.hasOwnProperty(a)
                    ? this._overrideLevelParameterDictionary[a]
                    : this._adResponse && this._adResponse._profileParameters.hasOwnProperty(a)
                    ? this._adResponse._profileParameters[a]
                    : this._globalLevelParameterDictionary.hasOwnProperty(a)
                    ? this._globalLevelParameterDictionary[a]
                    : null
                  : null;
              },
              setVideoState: function (b) {
                a.debug('Context.setVideoState', b);
                this._videoAsset.setVideoState(b);
              },
              registerVideoDisplayBase: function (b) {
                a.debug('Context.registerVideoDisplayBase', b);
                if (b && 'string' === typeof b) {
                  if (this._temporalSlotBase && this._temporalSlotBase.id === b) {
                    a.debug(
                      'Context.registerVideoDisplayBase',
                      'register the same display base, will only change size'
                    );
                    var c = this._temporalSlotBase.getElementsByTagName('video');
                  } else {
                    this._temporalSlotBase &&
                      this.getContentVideoElement().removeEventListener(
                        'volumechange',
                        this._onVolumeChange
                      );
                    this._temporalSlotBase = document.getElementById(b);
                    if (!this._temporalSlotBase) {
                      a.warn('Context.registerVideoDisplayBase', 'could not get element', b);
                      return;
                    }
                    c = this._temporalSlotBase.getElementsByTagName('video');
                    if (0 === c.length) {
                      a.warn(
                        'Context.registerVideoDisplayBase',
                        'could not get video element from',
                        b
                      );
                      this._temporalSlotBase = null;
                      return;
                    }
                    this._temporalSlotBase['_fw_contentVideo_' + this._instanceId] = c[0];
                    this.getContentVideoElement().addEventListener(
                      'volumechange',
                      this._onVolumeChange
                    );
                    this._adVolume = c[0].muted ? 0 : c[0].volume;
                  }
                  this._setVideoDisplaySizeByContentVideo(c[0]);
                } else a.warn('Context.registerVideoDisplayBase', 'id required');
              },
              setContentVideoElement: function (b) {
                a.debug('Context.setContentVideoElement()');
                if (b && b.parentNode) {
                  var c = this._temporalSlotBase;
                  this._temporalSlotBase = b.parentNode;
                  this._temporalSlotBase['_fw_contentVideo_' + this._instanceId] === b
                    ? a.debug(
                        'Context.setContentVideoElement',
                        'set the same video in same div, will only change size'
                      )
                    : (c &&
                        c['_fw_contentVideo_' + this._instanceId] &&
                        c['_fw_contentVideo_' + this._instanceId].removeEventListener(
                          'volumechange',
                          this._onVolumeChange
                        ),
                      (this._temporalSlotBase['_fw_contentVideo_' + this._instanceId] = b),
                      this.getContentVideoElement().addEventListener(
                        'volumechange',
                        this._onVolumeChange
                      ),
                      (this._adVolume = this.getContentVideoElement().muted
                        ? 0
                        : this.getContentVideoElement().volume));
                  this._setVideoDisplaySizeByContentVideo(b);
                } else
                  a.warn(
                    'Context.setContentVideoElement',
                    'contentVideo and contentVideo.parentNode is required'
                  );
              },
              getContentVideoElement: function () {
                return this._temporalSlotBase
                  ? this._temporalSlotBase['_fw_contentVideo_' + this._instanceId]
                  : (a.warn('SlotBase is null'), null);
              },
              setVideoDisplaySize: function (b, c, d, e, f) {
                a.debug(
                  'Context.setVideoDisplaySize(' +
                    Array.prototype.slice.call(arguments).join(',') +
                    ')'
                );
                this._totalSetDisplaySizeCount++;
                this._videoDisplaySize = { left: b, top: c, width: d, height: e, position: f };
                for (var g = this.getTemporalSlots(), h = 0; h < g.length; ++h) {
                  var k = g[h];
                  k.setWidth(d);
                  k.setHeight(e);
                  if (
                    k.getState() === a.MediaPlayingState.instance ||
                    k.getState() === a.MediaReplayingState.instance
                  ) {
                    if ((g = k.getCurrentAdInstance()))
                      (g = g.getRendererController().getRenderer()) && g.resize
                        ? g.resize()
                        : a.debug('renderer do not support resize');
                    break;
                  }
                }
              },
              getVideoDisplaySize: function () {
                function a (a) {
                  a = parseInt(a, 10);
                  isNaN(a) && (a = 0);
                  return a;
                }
                this._videoDisplaySize.left = a(this._videoDisplaySize.left);
                this._videoDisplaySize.right = a(this._videoDisplaySize.right);
                this._videoDisplaySize.width = a(this._videoDisplaySize.width);
                this._videoDisplaySize.height = a(this._videoDisplaySize.height);
                return this._videoDisplaySize;
              },
              setVideoDisplayCompatibleSizes: function (b) {
                a.debug('Context.setVideoDisplayCompatibleSizes', b);
                this._adRequest.setVideoDisplayCompatibleSizes(b);
              },
              resize: function (b, c) {
                a.debug('Context.resize(' + Array.prototype.slice.call(arguments).join(',') + ')');
                if (!this._temporalSlotBase) return a.warn('SlotBase is null'), null;
                this.setVideoDisplaySize(
                  this._videoDisplaySize.left,
                  this._videoDisplaySize.right,
                  b,
                  c,
                  this._videoDisplaySize.position
                );
              },
              setProfile: function (b) {
                a.debug('Context.setProfile', b);
                this._adRequest.setProfile(b);
              },
              setVideoAsset: function (b, c, d, e, f, g, h, k, l) {
                a.debug(
                  'Context.setVideoAsset(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                this._videoAsset.setVideoAsset(b, c, d, e, f, g, h, k, l);
                this._va_id = b;
                this._va_duration = c;
                this._va_networkId = d;
                this._va_location = e;
                this._va_autoPlayType = f;
                this._va_viewRandom = g;
                this._va_idType = h;
                this._va_fallbackId = k;
                this._va_durationType = l;
              },
              setVideoAssetCurrentTimePosition: function (b) {
                a.debug('Context.setVideoAssetCurrentTimePosition(' + b + ')');
                this._videoAsset.setVideoAssetCurrentTimePosition(b);
              },
              setSiteSection: function (b, c, d, e, f) {
                a.debug(
                  'Context.setSiteSection(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                this._adRequest.setSiteSection(b, c, d, e, f);
                this._ss_id = b;
                this._ss_networkId = c;
                this._ss_pageViewRandom = d;
                this._ss_idType = e;
                this._ss_fallbackId = f;
              },
              setVisitor: function (b, c) {
                a.debug(
                  'Context.setVisitor(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                this._adRequest.setVisitor(b, c);
              },
              startSubsession: function (b) {
                a.debug('Context.startSubsession(' + b + ')');
                this._adRequest.setSubsessionToken(b);
              },
              setRequestMode: function (b) {
                a.debug('Context.setRequestMode(' + b + ')');
                this._adRequest.setRequestMode(b);
              },
              setRequestDuration: function (b) {
                a.debug('Context.setRequestDuration(' + b + ')');
                this._adRequest.setRequestDuration(b);
              },
              addCandidateAd: function (b) {
                a.debug('Context.addCandidateAd(' + b + ')');
                this._adRequest.addCandidateAd(b);
              },
              addTemporalSlot: function (b, c, d, e, f, g, h, k) {
                a.debug(
                  'Context.addTemporalSlot(' +
                    Array.prototype.slice.call(arguments).join(',') +
                    ')'
                );
                this._adRequest.addTemporalSlot(b, c, d, e, f, g, h, k);
              },
              getTemporalSlots: function () {
                return this._adResponse ? this._adResponse._temporalSlots.slice() : [];
              },
              getSlotByCustomId: function (a) {
                return this._adResponse ? this._adResponse.getSlotByCustomId(a) : null;
              },
              getSlotsByTimePositionClass: function (a) {
                var b = [],
                  d;
                if (this._adResponse) {
                  for (d = 0; d < this._adResponse._temporalSlots.length; d++)
                    this._adResponse._temporalSlots[d].getTimePositionClass() === a &&
                      b.push(this._adResponse._temporalSlots[d]);
                  for (d = 0; d < this._adResponse._siteSectionNonTemporalSlots.length; d++)
                    this._adResponse._siteSectionNonTemporalSlots[d].getTimePositionClass() ===
                      a && b.push(this._adResponse._siteSectionNonTemporalSlots[d]);
                  for (d = 0; d < this._adResponse._videoPlayerNonTemporalSlots.length; d++)
                    this._adResponse._videoPlayerNonTemporalSlots[d].getTimePositionClass() ===
                      a && b.push(this._adResponse._videoPlayerNonTemporalSlots[d]);
                }
                return b;
              },
              submitRequest: function (b) {
                a.debug('Context.submitRequest', k);
                this.dispatchEvent(a.EVENT_REQUEST_INITIATED, {});
                if (this._requestState) a.warn('Context.submitRequest: request already submitted');
                else if (a.Util.isBlank(this._adManager._serverURL))
                  a.warn('Context.submitRequest: serverURL is not set');
                else {
                  this._requestState = 1;
                  this._adRequest.scanPageSlots();
                  if (this._isRefreshRequest) {
                    var c = {};
                    k = [];
                    var d, e;
                    for (d = 0; d < this._refreshSlots.length; d++) {
                      var f = this._refreshSlots[d];
                      if (void 0 !== this._adRequest._slotScanner._slots[f]) {
                        c[f] = this._adRequest._slotScanner._slots[f];
                        var g = c[f].split('&');
                        for (e = 0; e < g.length; e++)
                          -1 !== g[e].search('flag') && (g[e] = 'flag=-cmpn');
                        c[f] = g.join('&');
                      }
                      for (e = 0; e < this._adRequest._slotScanner._knownSlots.length; e++)
                        this._adRequest._slotScanner._knownSlots[e].id === f &&
                          ((g = this._adRequest._slotScanner._knownSlots[e]),
                          (g.acceptCompanion = !1),
                          (g.initialAdOption = a.SLOT_OPTION_INITIAL_AD_STAND_ALONE),
                          k.push(g));
                    }
                    this._adRequest._slotScanner._slots = c;
                    this._adRequest._slotScanner._knownSlots = k;
                  }
                  this.getParameter(a.PARAMETER_ENABLE_FORM_TRANSPORT) &&
                    (a.debug(
                      'Context.submitRequest: enabling Safari transport mechanism globally'
                    ),
                    (a.PLATFORM_SEND_REQUEST_BY_FORM = !0));
                  c = this._adManager._serverURL;
                  '.js' !== c.substring(c.length - 3, c.length) &&
                    (c = this._adRequest.generateTypeBRequestUrl());
                  var h = this,
                    k = b;
                  if ('number' !== typeof k || 0 >= k || !k) k = 5;
                  setTimeout(function () {
                    1 === h._requestState &&
                      (a.warn('Context.submitRequest: request timeout'), h.requestComplete(null));
                  }, 1000 * k);
                  a.log('Context.submitRequest: sending request to', c, 'timeout', k);
                  a.PLATFORM_SEND_REQUEST_BY_FORM
                    ? (a.debug('Context.submitRequest:', 'use json2'),
                      a.Util.pingURLWithForm(c, this._instanceId, !0),
                      (h._onMessagePosted = function (a) {
                        'object' === typeof a.data &&
                          a.data.hasOwnProperty('cbfn') &&
                          -1 < a.data.cbfn.indexOf("['Context_" + h._instanceId + "']") &&
                          h.requestComplete(a.data.response);
                      }),
                      window.addEventListener('message', h._onMessagePosted, !1))
                    : a.Util.pingURLWithScript(c);
                }
              },
              requestComplete: function (b) {
                if (1 !== this._requestState)
                  a.warn('ad request complete after timeout'),
                    this.dispatchEvent(a.EVENT_REQUEST_COMPLETE, { success: !1 });
                else {
                  this._requestState = 2;
                  a.debug('Context.requestComplete');
                  if (a.PLATFORM_SEND_REQUEST_BY_FORM) {
                    window.removeEventListener('message', this._onMessagePosted, !1);
                    var c = document.getElementById('_fw_request_iframe_' + this._instanceId);
                    document.body.removeChild(c);
                  }
                  if (null != b) {
                    a._instanceQueue['Context_' + this._instanceId] = null;
                    this._adResponse = new a.AdResponse(this);
                    this._adResponse.parse(b, this._temporalSlotBase);
                    a.log('Ad request succeeded');
                    c = (this._adResponse._profileParameters.autoloadExtensions || '').split(',');
                    for (var d = 0; d < c.length; d++) {
                      var e = c[d].trim();
                      a.log('Loading extension: ' + e);
                      this.loadExtension(e);
                    }
                    this.dispatchEvent(a.EVENT_REQUEST_COMPLETE, { success: !0, response: b });
                    c = this._adResponse.getSiteSectionNonTemporalSlots();
                    for (b = 0; b < c.length; ++b)
                      a.log('Auto play site section nonTemporal slots'), c[b].play();
                    c = this._adResponse.getVideoPlayerNonTemporalSlots();
                    for (b = 0; b < c.length; ++b)
                      a.log('Auto play video player nonTemporal slots'), c[b].play();
                  } else
                    a.warn('Ad request failed'),
                      this.dispatchEvent(a.EVENT_REQUEST_COMPLETE, { success: !1 });
                }
              },
              addEventListener: function (b, c) {
                a.debug('Context.addEventListener', b);
                this._eventDispatcher.addEventListener(b, c);
              },
              removeEventListener: function (b, c) {
                a.debug('Context.removeEventListener', b);
                this._eventDispatcher.removeEventListener(b, c);
              },
              dispatchEvent: function (b, c) {
                a.log('Context.dispatchEvent', b);
                if (b === a.EVENT_SLOT_STARTED) {
                  var d = c.slot.getTimePositionClass();
                  if (
                    d === a.TIME_POSITION_CLASS_PREROLL ||
                    d === a.TIME_POSITION_CLASS_MIDROLL ||
                    d === a.TIME_POSITION_CLASS_POSTROLL
                  )
                    (this._contentVideoAttached = !0), this._markCurrentContentPlayheadTime();
                } else
                  b === a.EVENT_SLOT_ENDED &&
                    ((d = c.slot.getTimePositionClass()),
                    d === a.TIME_POSITION_CLASS_PREROLL ||
                      d === a.TIME_POSITION_CLASS_MIDROLL ||
                      d === a.TIME_POSITION_CLASS_POSTROLL) &&
                    (this._contentVideoAttached = !1);
                c = c || {};
                c.type = b;
                c.target = this;
                this._eventDispatcher.dispatchEvent(c);
              },
              dispose: function () {
                a.debug('Context.dispose');
                this.setVideoState(a.VIDEO_STATE_STOPPED);
                if (this._adResponse) {
                  if (this._temporalSlotBase) {
                    for (var b = 0, c = this._adResponse._temporalSlots || []; b < c.length; ++b) {
                      var d = c[b];
                      if (d._onContentVideoTimeUpdate) {
                        var e = this._temporalSlotBase['_fw_contentVideo_' + this._instanceId];
                        e && e.removeEventListener('timeupdate', d._onContentVideoTimeUpdate, !1);
                        d._onContentVideoTimeUpdate = null;
                      }
                    }
                    this.getContentVideoElement().removeEventListener(
                      'volumechange',
                      this._onVolumeChange
                    );
                    this._temporalSlotBase['_fw_contentVideo_' + this._instanceId] = null;
                  }
                  this._isRefreshRequest = !1;
                  this._refreshSlots = [];
                  this._extensionManager.dispose();
                  this._extensionManager = null;
                }
              },
              loadExtension: function (a) {
                this._extensionManager.load(a, this);
              },
              _markCurrentContentPlayheadTime: function () {
                var a = this._temporalSlotBase['_fw_contentVideo_' + this._instanceId].currentTime;
                0 < a && (this._currentContentPlayheadTime = a);
              },
              _getContentPlayheadTime: function () {
                var a = -1;
                !this._contentVideoAttached &&
                  this._temporalSlotBase &&
                  this._temporalSlotBase['_fw_contentVideo_' + this._instanceId] &&
                  (a = this._temporalSlotBase['_fw_contentVideo_' + this._instanceId].currentTime);
                return 0 < a ? a : this._currentContentPlayheadTime;
              },
              _requestContentVideoToPauseBySlot: function (a) {
                this._videoAsset.requestPauseBySlot(a);
              },
              _requestContentVideoToResumeBySlot: function (a) {
                this._videoAsset.requestResumeBySlot(a);
              },
              _setVideoDisplaySizeByContentVideo: function (a) {
                if (this._autoSetDisplaySizeCount === this._totalSetDisplaySizeCount) {
                  var b = a.style.left,
                    d = a.style.top,
                    e = a.offsetWidth ? a.offsetWidth : a.style.pixelWidth,
                    f = a.offsetHeight ? a.offsetHeight : a.style.pixelHeight;
                  a = a.style.position;
                  this._autoSetDisplaySizeCount++;
                  this.setVideoDisplaySize(b, d, e, f, a);
                }
              },
              _replacePageSlot: function (b, c) {
                a.debug('fw replace %s', b);
                var d;
                try {
                  var e = document.getElementById(b)
                    ? document
                    : parent.document.getElementById(b)
                    ? parent.document
                    : null;
                  var f = document.getElementById(b)
                    ? 'window'
                    : parent.document.getElementById(b)
                    ? 'parent'
                    : null;
                } catch (l) {
                  f = e = null;
                }
                if (!e)
                  for (var g = 0; g < window.frames.length; g++)
                    try {
                      window.frames[g].document.getElementById(b) &&
                        ((e = window.frames[g].document), (f = 'window.frames[' + g + ']'));
                    } catch (l) {
                      a.debug(l);
                    }
                f && (d = f + '.document');
                a.debug('fw replacing slot %s in frame %s', b, d);
                if (!e) throw 'Slot element not found: ' + b;
                g = e.getElementById('_fw_container_' + b);
                g.innerHTML = c;
                c = g.getElementsByTagName('script');
                var h = e.getElementsByTagName('head')[0];
                for (g = 0; g < c.length; ++g)
                  if (a.PLATFORM_IS_FIREFOX || c[g].src) {
                    var k = e.createElement('script');
                    c[g].charset && (k.charset = c[g].charset);
                    c[g].src && (k.src = c[g].src);
                    c[g].innerHTML && (k.innerHTML = c[g].innerHTML);
                    k.onload = k.onreadystatechange = function () {
                      (this.readyState &&
                        'loaded' !== this.readyState &&
                        'complete' !== this.readyState) ||
                        h.removeChild(k);
                    };
                    a.debug('fw append script for %s', b);
                    h.appendChild(k);
                  } else
                    (k = c[g].innerHTML),
                      (k = k.replace(/var fw_scope = document;/, 'var fw_scope=' + d + ';')),
                      (k = k.replace(
                        /var fw_scope_window = window;/,
                        'var fw_scope_window=' + f + ';'
                      )),
                      a.debug('fw eval in %s for %s, %s', d, b, k),
                      eval(k);
                a.debug('fw finish replace %s', b);
              },
            };
            a.Context.prototype.constructor = a.Context;
            a.DisplayRefreshExtension = function () {
              this.REFRESH_TYPE_NONE = 'refresh_none';
              this.REFRESH_TYPE_AD = 'refresh_ad';
              this.REFRESH_TYPE_TIME = 'refresh_time';
              this.REPLACE_TYPE_NONE = 'replace_none';
              this.REPLACE_TYPE_BLANK = 'replace_blank';
              this.REPLACE_TYPE_AD = 'replace_ad';
              this._subContext = null;
              this._displaySlots = [];
              this._companionSlots = [];
              this._keyValues = [];
              this._globalParameters = [];
              this._overrideParameters = [];
              this._refreshType = this.REFRESH_TYPE_NONE;
              this._replaceType = this.REPLACE_TYPE_NONE;
              this._refreshInterval = 0;
              this._refreshTimer = null;
              this._firstTemporalAd = !0;
              this._REQUEST_TIME_OUT = 5;
            };
            a.DisplayRefreshExtension.prototype = {
              init: function (b) {
                this._context = b;
                a.debug('DisplayRefreshExtension.init(context)');
                this._onRendererEvent = a.Util.bind(this, function (b) {
                  a.debug('DisplayRefreshExtension._onRendererEvent()');
                  b.subType === a.EVENT_AD_IMPRESSION && this._onAdStarted(b);
                });
                this._onSlotEnded = a.Util.bind(this, function (b) {
                  var c = b.slot.getTimePositionClass();
                  b = b.slot;
                  a.debug('DisplayRefreshExtension._onSlotEnded()', b, c);
                  if (
                    null != b &&
                    c !== a.TIME_POSITION_CLASS_DISPLAY &&
                    0 !== b.getAdInstances().length
                  )
                    if (this._refreshType === this.REFRESH_TYPE_AD)
                      this._resetSubContext(), this._refreshSlots(this._displaySlots);
                    else if (this._refreshType === this.REFRESH_TYPE_TIME) {
                      this._resetSubContext();
                      this._refreshSlots(this._displaySlots);
                      var e = this;
                      this._refreshTimer = setInterval(function () {
                        a.debug('DisplayRefreshExtension._onTimeout()');
                        e._resetSubContext();
                        e._refreshSlots(e._displaySlots);
                      }, 1000 * this._refreshInterval);
                    }
                });
                this._onRequestComplete = a.Util.bind(this, function (b) {
                  a.debug('DisplayRefreshExtension._onRequestComplete()');
                  if (b.success) {
                    switch (this._context.getParameter('refreshType')) {
                      case 'ad':
                        this._refreshType = this.REFRESH_TYPE_AD;
                        break;
                      case 'time':
                        this._refreshInterval = this._context.getParameter('refreshInterval');
                        this._refreshType =
                          0 < this._refreshInterval
                            ? this.REFRESH_TYPE_TIME
                            : this.REFRESH_TYPE_NONE;
                        break;
                      default:
                        this._refreshType = this.REFRESH_TYPE_NONE;
                    }
                    switch (this._context.getParameter('replaceMissingCompanion')) {
                      case 'blank':
                        this._replaceType = this.REPLACE_TYPE_BLANK;
                        break;
                      case 'ad':
                        this._replaceType = this.REPLACE_TYPE_AD;
                        break;
                      default:
                        this._replaceType = this.REPLACE_TYPE_NONE;
                    }
                    if (
                      this._refreshType !== this.REFRESH_TYPE_NONE ||
                      this._replaceType !== this.REPLACE_TYPE_NONE
                    ) {
                      if (
                        ((this._displaySlots = this._context.getSlotsByTimePositionClass(
                          a.TIME_POSITION_CLASS_DISPLAY
                        )),
                        (this._companionSlots = this._displaySlots.filter(function (a) {
                          return a.getAcceptCompanion();
                        })),
                        (this._keyValues = this._context._adRequest._keyValues),
                        (this._globalParameters = this._context._globalLevelParameterDictionary),
                        (this._overrideParameters = this._context._overrideLevelParameterDictionary),
                        (this._firstTemporalAd = !0),
                        this._context.addEventListener(a.EVENT_AD, this._onRendererEvent),
                        this._context.addEventListener(a.EVENT_SLOT_ENDED, this._onSlotEnded),
                        this._refreshType === this.REFRESH_TYPE_TIME)
                      ) {
                        var c = this;
                        this._refreshTimer = setInterval(function () {
                          a.debug('DisplayRefreshExtension._onTimeout()');
                          c._resetSubContext();
                          c._refreshSlots(c._displaySlots);
                        }, 1000 * this._refreshInterval);
                      }
                    } else this._refreshTimer && clearInterval(this._refreshTimer);
                  } else a.debug('DisplayRefreshExtension: request complete failed');
                });
                this._context.addEventListener(a.EVENT_REQUEST_COMPLETE, this._onRequestComplete);
              },
              _resetSubContext: function () {
                a.debug('DisplayRefreshExtension._resetSubContext()');
                this._subContext = this._context._adManager.cloneContext(this._context);
                this._subContext._extensionManager._displayRefreshExtension.dispose();
                this._subContext._extensionManager._videoStateExtension.dispose();
                this._subContext.setCapability(
                  a.CAPABILITY_SLOT_TEMPLATE,
                  a.CAPABILITY_STATUS_OFF
                );
                this._subContext.setCapability(
                  a.CAPABILITY_DISPLAY_REFRESH,
                  a.CAPABILITY_STATUS_ON
                );
                this._playRefreshedSlots = a.Util.bind(this, function (b) {
                  a.debug('DisplayRefreshExtension._playRefreshedSlots()');
                  if (b.success) {
                    b = this._subContext.getSlotsByTimePositionClass(
                      a.TIME_POSITION_CLASS_DISPLAY
                    );
                    for (var c = 0; c < b.length; c++) b[c].play();
                  } else a.debug('DisplayRefreshExtension._playRefreshedSlots(): subContext refresh request error:', b);
                });
                this._subContext.addEventListener(
                  a.EVENT_REQUEST_COMPLETE,
                  this._playRefreshedSlots
                );
                for (
                  var b = this._subContext._adRequest._keyValues, c = 0;
                  c < this._keyValues.length;
                  c++
                )
                  0 > b.indexOf(this._keyValues[c]) && b.push(this._keyValues[c]);
                for (var d in this._globalParameters)
                  this._globalParameters.hasOwnProperty(d) &&
                    this._subContext.setParameter(
                      d,
                      this._globalParameters[d],
                      a.PARAMETER_LEVEL_GLOBAL
                    );
                for (d in this._overrideParameters)
                  this._overrideParameters.hasOwnProperty(d) &&
                    this._subContext.setParameter(
                      d,
                      this._overrideParameters[d],
                      a.PARAMETER_LEVEL_OVERRIDE
                    );
              },
              _onAdStarted: function (b) {
                a.debug('DisplayRefreshExtension._onAdStarted()');
                var c = b.adInstance.getSlot();
                a.debug(
                  'DisplayRefreshExtension._onAdStarted(): slot: ',
                  c,
                  ' | timePositionClass:',
                  c.getTimePositionClass()
                );
                if (
                  null != c &&
                  c.getTimePositionClass() !== a.TIME_POSITION_CLASS_DISPLAY &&
                  (this._resetSubContext(),
                  this._refreshTimer && clearInterval(this._refreshTimer),
                  this._replaceType !== this.REPLACE_TYPE_NONE)
                ) {
                  b = b.adInstance;
                  c = c.getAdInstances();
                  for (var d = 0; d < c.length; d++)
                    b.getAdId() === c[d].getAdId() && this._checkMissingCompanionForAd(b);
                }
              },
              _checkMissingCompanionForAd: function (b) {
                a.debug('DisplayRefreshExtension._checkMissingCompanionForAd()', b);
                var c = this._companionSlots.slice();
                b = b.getCompanionAdInstances();
                var d;
                for (d = 0; d < b.length; d++) {
                  var e = c.indexOf(b[d].getSlot());
                  -1 < e && c.splice(e, 1);
                }
                this._firstTemporalAd &&
                  ((this._firstTemporalAd = !1),
                  (c = c.filter(function (b) {
                    if (
                      b.getInitialAdOption() !== a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_ONLY &&
                      b.getInitialAdOption() !==
                        a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_STAND_ALONE &&
                      b.getInitialAdOption() !==
                        a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_THEN_STAND_ALONE &&
                      b.getInitialAdOption() !==
                        a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_NO_STAND_ALONE &&
                      b.getInitialAdOption() !==
                        a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_NO_STAND_ALONE_IF_TEMPORAL
                    )
                      return (
                        a.debug(
                          'DisplayRefreshExtension._checkMissingCompanionForAd(): firstCompanionAsInitial false in slot ',
                          b.getCustomId()
                        ),
                        !0
                      );
                    for (var c = b.getAdInstances(), d = 0; d < c.length; d++)
                      if (!c[d].isPlaceholder())
                        return (
                          a.debug(
                            'DisplayRefreshExtension._checkMissingCompanionForAd(): first companion found in slot ',
                            b.getCustomId()
                          ),
                          !1
                        );
                    a.debug(
                      'DisplayRefreshExtension._checkMissingCompanionForAd(): firstCompanionAsInitial true, no ad in slot ',
                      b.getCustomId()
                    );
                    return !0;
                  })));
                if (this._replaceType === this.REPLACE_TYPE_BLANK)
                  for (d = 0; d < c.length; d++)
                    c[d].stop(), this._subContext._replacePageSlot(c[d].getCustomId(), '');
                else this._replaceType === this.REPLACE_TYPE_AD && this._refreshSlots(c);
              },
              _refreshSlots: function (b) {
                a.debug('DisplayRefreshExtension._refreshSlots()', b);
                if (null != b && 0 !== b.length) {
                  for (var c = 0; c < b.length; c++)
                    b[c].stop(), this._subContext._refreshSlots.push(b[c].getCustomId());
                  this._subContext._isRefreshRequest = !0;
                  this._subContext.submitRequest(this._REQUEST_TIME_OUT);
                }
              },
              dispose: function () {
                a.debug('DisplayRefreshExtension.dispose()');
                this._context &&
                  (this._context.removeEventListener(
                    a.EVENT_REQUEST_COMPLETE,
                    this._onRequestComplete
                  ),
                  this._context.removeEventListener(a.EVENT_SLOT_ENDED, this._onSlotEnded),
                  this._context.removeEventListener(a.EVENT_AD, this._onRendererEvent),
                  (this._context = null));
                this._subContext &&
                  (this._subContext.removeEventListener(
                    a.EVENT_REQUEST_COMPLETE,
                    this._playRefreshedSlots
                  ),
                  (this._subContext = null));
                this._displaySlots = [];
                this._companionSlots = [];
                this._keyValues = [];
                this._globalParameters = [];
                this._overrideParameters = [];
                this._refreshType = this.REFRESH_TYPE_NONE;
                this._replaceType = this.REPLACE_TYPE_NONE;
                this._refreshInterval = 0;
                this._refreshTimer && clearInterval(this._refreshTimer);
                this._refreshTimer = null;
                this._firstTemporalAd = !0;
              },
            };
            a.DisplayRefreshExtension.prototype.constructor = a.DisplayRefreshExtension;
            a.EventCallback = function (a) {
              this._url = this._name = this._type = null;
              this._showBrowser = !1;
              this._trackingUrls = [];
              this._adInstance = this._slot = null;
              this._context = a;
            };
            a.EventCallback.prototype = {};
            a.EventCallback.prototype.constructor = a.EventCallback;
            a.EventCallback.getEventCallback = function (b, c, d) {
              for (var e, f = 0; f < b.length; f++)
                if (((e = b[f]), e._name === c && e._type === d)) return e;
              for (f = 0; f < b.length; f++)
                if (((e = b[f]), e._type === a.EVENT_TYPE_GENERIC)) {
                  if ((c = a.EventCallback.newEventCallback(e._context, c, d)))
                    (c._url = e._url),
                      (c._slot = e._slot),
                      (c._adInstance = e._adInstance),
                      b.push(c);
                  return c;
                }
              return null;
            };
            a.EventCallback.newEventCallback = function (b, c, d) {
              if (d === a.EVENT_TYPE_GENERIC) b = new a.EventCallback(b);
              else if (d === a.EVENT_TYPE_ERROR) b = new a.ErrorEventCallback(b);
              else if (d === a.EVENT_TYPE_CLICK) b = new a.AdClickEventCallback(b);
              else if (d === a.EVENT_TYPE_STANDARD) b = new a.AdStandardEventCallback(b);
              else if (c === a.EVENT_SLOT_IMPRESSION || c === a.EVENT_SLOT_END)
                b = new a.SlotImpressionEventCallback(b);
              else if (c === a.EVENT_AD_IMPRESSION || c === a.EVENT_AD_IMPRESSION_END)
                b = new a.AdImpressionEventCallback(b);
              else if (c === a.EVENT_VIDEO_VIEW) b = new a.VideoViewEventCallback(b);
              else if (c === a.EVENT_RESELLER_NO_AD) b = new a.ResellerNoAdEventCallback(b);
              else if (
                c === a.EVENT_AD_FIRST_QUARTILE ||
                c === a.EVENT_AD_MIDPOINT ||
                c === a.EVENT_AD_THIRD_QUARTILE ||
                c === a.EVENT_AD_COMPLETE
              )
                b = new a.AdQuartileEventCallback(b);
              else return null;
              b._name = c;
              b._type = d;
              return b;
            };
            a.EventCallback.getShortType = function (b) {
              var c = '';
              switch (b) {
                case a.EVENT_TYPE_IMPRESSION:
                  c = a.SHORT_EVENT_TYPE_IMPRESSION;
                  break;
                case a.EVENT_TYPE_CLICK:
                  c = a.SHORT_EVENT_TYPE_CLICK;
                  break;
                case a.EVENT_TYPE_STANDARD:
                  c = a.SHORT_EVENT_TYPE_STANDARD;
                  break;
                case a.EVENT_TYPE_ERROR:
                  c = a.SHORT_EVENT_TYPE_ERROR;
              }
              return c;
            };
            a.Util.mixin(a.EventCallback.prototype, {
              parse: function (a) {
                if (a) {
                  this._usage = a.use;
                  this._type = a.type;
                  this._name = a.name;
                  this._url = a.url;
                  this._showBrowser = a.showBrowser;
                  this._trackingUrls = [];
                  var b = 0;
                  for (a = a.trackingUrls || []; b < a.length; b++)
                    this._trackingUrls.push(a[b].value);
                }
              },
              copy: function () {
                var a = new this.constructor(this._context);
                a._type = this._type;
                a._name = this._name;
                a._url = this._url;
                a._showBrowser = this._showBrowser;
                a._trackingUrls = this._trackingUrls.slice();
                a._slot = this._slot;
                a._adInstance = this._adInstance;
                return a;
              },
              getUrl: function (b) {
                var c = this._replaceMacrosInUrl(this._url, b);
                this._name === a.EVENT_AD_MEASUREMENT
                  ? ((c = a.Util.setParameterInURL(
                      c,
                      a.URL_PARAMETER_KEY_ET,
                      a.SHORT_EVENT_TYPE_IMPRESSION
                    )),
                    (c = a.Util.setParameterInURL(
                      c,
                      a.URL_PARAMETER_KEY_CONCRETE_EVENT_ID,
                      b[a.INFO_KEY_CONCRETE_EVENT_ID]
                    )))
                  : (c = a.Util.setParameterInURL(
                      c,
                      a.URL_PARAMETER_KEY_ET,
                      a.EventCallback.getShortType(this._type)
                    ));
                c = a.Util.setParameterInURL(c, a.URL_PARAMETER_KEY_CN, this._name);
                this._adInstance &&
                  0 < this._adInstance._creativeRenditionId &&
                  (c = a.Util.setParameterInURL(
                    c,
                    a.URL_PARAMETER_KEY_CREATIVE_RENDITION_ID,
                    this._adInstance._creativeRenditionId
                  ));
                return c;
              },
              getTrackingUrls: function (b) {
                var c = this._trackingUrls;
                if (this._adInstance) {
                  var d = this._type;
                  d === a.EVENT_TYPE_CLICK && (d = a.EVENT_TYPE_CLICK_TRACKING);
                  c = c.concat(this._adInstance.getExternalEventCallbackUrls(this._name, d));
                }
                d = [];
                for (var e = 0; e < c.length; e++) {
                  var f = a.Util.trim(this._replaceMacrosInUrl(c[e], b));
                  a.Util.isBlank(f) || d.push(f);
                }
                return d;
              },
              process: function (b) {
                b = b || {};
                this._processTrackingUrls(b);
                a.Util.pingURL(this.getUrl(b));
              },
              _processTrackingUrls: function (b) {
                this._shouldSkipSendingTrackingAndExternalUrls() ||
                  a.Util.pingURLs(this.getTrackingUrls(b));
              },
              _shouldSkipSendingTrackingAndExternalUrls: function () {
                return !1;
              },
              _needEmptyCT: function (b) {
                var c = !1;
                b && !0 === b[a.INFO_KEY_NEED_EMPTY_CT] && (c = !0);
                return c;
              },
              _getAdPlayheadTime: function () {
                var a = -1;
                this._adInstance && (a = this._adInstance.getPlayheadTime());
                return a;
              },
              _getCreativeAssetLocation: function () {
                var a = null;
                this._adInstance &&
                  this._adInstance.getActiveCreativeRendition() &&
                  this._adInstance
                    .getActiveCreativeRendition()
                    .getPrimaryCreativeRenditionAsset() &&
                  (a = this._adInstance
                    .getActiveCreativeRendition()
                    .getPrimaryCreativeRenditionAsset()
                    .getUrl());
                return a;
              },
              _getParameter: function (a) {
                return this._adInstance
                  ? this._adInstance._rendererController.getParameter(a)
                  : this._slot
                  ? this._slot.getParameter(a)
                  : this._context.getParameter(a);
              },
              _replaceVASTMacro: function (b, c, d) {
                a.log('replace VAST Macro: url=', b + ', macro=' + c + ', value=' + d);
                b &&
                  c &&
                  ((d = encodeURIComponent(d ? d : '')),
                  (b = b.replace('[' + c + ']', d)),
                  (b = b.replace('%5B' + c + '%5D', d)));
                return b;
              },
              _replaceMacrosInUrl: function (b, c) {
                if (a.Util.isBlank(b)) return b;
                c &&
                  c[a.INFO_KEY_VAST_ERROR_CODE] &&
                  (b = this._replaceVASTMacro(b, 'ERRORCODE', c[a.INFO_KEY_VAST_ERROR_CODE]));
                this._getCreativeAssetLocation() &&
                  (b = this._replaceVASTMacro(b, 'ASSETURI', this._getCreativeAssetLocation()));
                var d = this._context._getContentPlayheadTime();
                this._adInstance &&
                  ((c = null != d && 0 <= Number(d) ? a.Util.secondsToHms(d) : ''),
                  (b = this._replaceVASTMacro(b, 'CONTENTPLAYHEAD', c)),
                  (b = this._replaceVASTMacro(
                    b,
                    'CACHEBUSTING',
                    a.Util.getFixedDigitRandomNumber(8)
                  )),
                  (b = this._replaceVASTMacro(
                    b,
                    'TIMESTAMP',
                    a.Util.getDateStringInISOFormat(new Date())
                  )));
                b = b.replace(
                  /#(ce?)\{([^\}]+)\}/g,
                  a.Util.bind(this, function (b, c, g) {
                    a.log('matchedSubString' + b);
                    b = 'ce' === c;
                    c = null;
                    switch (g) {
                      case 'ad.playheadTime':
                        g = this._getAdPlayheadTime();
                        c = 0 <= g ? Math.round(g) + '' : '';
                        break;
                      case 'content.playheadTime':
                        c = 0 <= d ? Math.round(d) + '' : '';
                        break;
                      case 'creative.assetLocation':
                        c = this._getCreativeAssetLocation();
                        break;
                      default:
                        0 === g.indexOf('parameter.') && (c = this._getParameter(g.substr(10)));
                    }
                    a.Util.isBlank(c) && (c = '');
                    return b ? encodeURIComponent(c) : c;
                  })
                );
                c = '';
                try {
                  c = a.Util.getParameterInURL(b, a.URL_PARAMETER_KEY_CR);
                } catch (e) {
                  return a.warn(e), b;
                }
                a.Util.isBlank(c) ||
                  (b = a.Util.setParameterInURL(
                    b,
                    a.URL_PARAMETER_KEY_CR,
                    this._replaceMacrosInUrl(c)
                  ));
                return b;
              },
            });
            a.AdClickEventCallback = function (b) {
              a.EventCallback.call(this, b);
            };
            a.AdClickEventCallback.prototype = new a.EventCallback();
            a.AdClickEventCallback.prototype.constructor = a.AdClickEventCallback;
            a.Util.mixin(a.AdClickEventCallback.prototype, {
              getUrl: function (b) {
                var c = a.EventCallback.prototype.getUrl.call(this, b);
                b[a.INFO_KEY_URL] &&
                  (a.Util.isParameterInURL(c, a.URL_PARAMETER_KEY_CR) ||
                    (c = c + '&' + a.URL_PARAMETER_KEY_CR + '='),
                  (c = a.Util.setParameterInURL(c, a.URL_PARAMETER_KEY_CR, b[a.INFO_KEY_URL])));
                return c;
              },
              process: function (b) {
                b = b || {};
                var c = this.getUrl(b),
                  d = !0 === this._showBrowser;
                d = b.hasOwnProperty(a.INFO_KEY_SHOW_BROWSER)
                  ? !0 === b[a.INFO_KEY_SHOW_BROWSER]
                  : d;
                b[a.INFO_KEY_URL] && (d = !0);
                d && !a.Util.isBlank(c)
                  ? (window.open(c), this._processTrackingUrls(b))
                  : a.EventCallback.prototype.process.call(this, b);
              },
            });
            a.AdImpressionEventCallback = function (b) {
              a.EventCallback.call(this, b);
            };
            a.AdImpressionEventCallback.prototype = new a.EventCallback();
            a.AdImpressionEventCallback.prototype.constructor = a.AdImpressionEventCallback;
            a.Util.mixin(a.AdImpressionEventCallback.prototype, {
              _shouldSkipSendingTrackingAndExternalUrls: function () {
                return this._getInitValue() !== a.INIT_VALUE_ONE;
              },
              _getInitValue: function () {
                return this._adInstance.getSlot().isPauseSlot() || !this._processed
                  ? a.INIT_VALUE_ONE
                  : a.INIT_VALUE_TWO;
              },
              getUrl: function (b) {
                var c = a.EventCallback.prototype.getUrl.call(this, b);
                c = a.Util.setParameterInURL(c, a.URL_PARAMETER_KEY_METR, this._adInstance._metr);
                this._name !== a.EVENT_AD_IMPRESSION &&
                  (c = a.Util.setParameterInURL(
                    c,
                    a.URL_PARAMETER_KEY_CT,
                    this._needEmptyCT(b) ? '' : this._adInstance._timer.tick()
                  ));
                return (c = a.Util.setParameterInURL(
                  c,
                  a.URL_PARAMETER_KEY_INIT,
                  this._getInitValue()
                ));
              },
              process: function (b) {
                a.MODULE_TYPE_TRANSLATOR !==
                  this._adInstance.getRendererController().getRenderer().info()[
                    a.INFO_KEY_MODULE_TYPE
                  ] && (a.EventCallback.prototype.process.call(this, b), (this._processed = !0));
              },
            });
            a.AdQuartileEventCallback = function (b) {
              a.EventCallback.call(this, b);
            };
            a.AdQuartileEventCallback.prototype = new a.EventCallback();
            a.AdQuartileEventCallback.prototype.constructor = a.AdQuartileEventCallback;
            a.Util.mixin(a.AdQuartileEventCallback.prototype, {
              getUrl: function (b) {
                var c = a.EventCallback.prototype.getUrl.call(this, b);
                c = a.Util.setParameterInURL(c, a.URL_PARAMETER_KEY_METR, this._adInstance._metr);
                return (c = a.Util.setParameterInURL(
                  c,
                  a.URL_PARAMETER_KEY_CT,
                  this._needEmptyCT(b) ? '' : this._adInstance._timer.tick()
                ));
              },
              process: function (b) {
                this._processed ||
                  (a.EventCallback.prototype.process.call(this, b), (this._processed = !0));
              },
            });
            a.AdStandardEventCallback = function (b) {
              a.EventCallback.call(this, b);
            };
            a.AdStandardEventCallback.prototype = new a.EventCallback();
            a.AdStandardEventCallback.prototype.constructor = a.AdStandardEventCallback;
            a.ErrorEventCallback = function (b) {
              a.EventCallback.call(this, b);
            };
            a.ErrorEventCallback.prototype = new a.EventCallback();
            a.ErrorEventCallback.prototype.constructor = a.ErrorEventCallback;
            a.Util.mixin(a.ErrorEventCallback.prototype, {
              getUrl: function (b) {
                var c = a.EventCallback.prototype.getUrl.call(this, b),
                  d = b[a.INFO_KEY_ERROR_CODE];
                d || (d = a.ERROR_UNKNOWN);
                var e = b[a.INFO_KEY_ERROR_INFO];
                e || (e = '');
                (b = b[a.INFO_KEY_ERROR_MODULE]) || (b = '');
                c = a.Util.setParameterInURL(c, a.URL_PARAMETER_KEY_CN, d);
                return (c = a.Util.setParameterInURL(
                  c,
                  a.URL_PARAMETER_KEY_KEY_VALUE,
                  encodeURIComponent(a.URL_PARAMETER_KEY_ERROR_MODULE) +
                    '=' +
                    encodeURIComponent(b) +
                    '&' +
                    encodeURIComponent(a.URL_PARAMETER_KEY_ERROR_INFO) +
                    '=' +
                    a.PLATFORM_ID +
                    '/' +
                    encodeURIComponent(e)
                ));
              },
            });
            a.ResellerNoAdEventCallback = function (b) {
              a.EventCallback.call(this, b);
            };
            a.ResellerNoAdEventCallback.prototype = new a.EventCallback();
            a.ResellerNoAdEventCallback.prototype.constructor = a.ResellerNoAdEventCallback;
            a.Util.mixin(a.ResellerNoAdEventCallback.prototype, {});
            a.SlotImpressionEventCallback = function (b) {
              a.EventCallback.call(this, b);
            };
            a.SlotImpressionEventCallback.prototype = new a.EventCallback();
            a.SlotImpressionEventCallback.prototype.constructor = a.SlotImpressionEventCallback;
            a.Util.mixin(a.SlotImpressionEventCallback.prototype, {
              _shouldSkipSendingTrackingAndExternalUrls: function () {
                return this._getInitValue() !== a.INIT_VALUE_ONE;
              },
              _getInitValue: function () {
                return this._slot.isPauseSlot() || !this._processed
                  ? a.INIT_VALUE_ONE
                  : a.INIT_VALUE_TWO;
              },
              getUrl: function (b) {
                b = a.EventCallback.prototype.getUrl.call(this, b);
                return (b = a.Util.setParameterInURL(
                  b,
                  a.URL_PARAMETER_KEY_INIT,
                  this._getInitValue()
                ));
              },
              process: function (b) {
                a.EventCallback.prototype.process.call(this, b);
                this._processed = !0;
              },
            });
            a.VideoViewEventCallback = function (b) {
              a.EventCallback.call(this, b);
            };
            a.VideoViewEventCallback.prototype = new a.EventCallback();
            a.VideoViewEventCallback.prototype.constructor = a.VideoViewEventCallback;
            a.Util.mixin(a.VideoViewEventCallback.prototype, {
              _getInitValue: function () {
                return this._processed ? a.INIT_VALUE_ZERO : a.INIT_VALUE_ONE;
              },
              _getCTValue: function () {
                return this._context._videoAsset.getPlayheadTime();
              },
              getUrl: function (b) {
                b = a.EventCallback.prototype.getUrl.call(this, b);
                b = a.Util.setParameterInURL(b, a.URL_PARAMETER_KEY_INIT, this._getInitValue());
                return (b = a.Util.setParameterInURL(
                  b,
                  a.URL_PARAMETER_KEY_CT,
                  this._getCTValue()
                ));
              },
              _shouldSkipSendingTrackingAndExternalUrls: function () {
                return this._processed;
              },
              process: function (b) {
                a.EventCallback.prototype.process.call(this, b);
                this._processed = !0;
              },
            });
            a.EventDispatcher = function () {
              this._listeners = {};
            };
            a.EventDispatcher.prototype = {
              addEventListener: function (a, c) {
                'undefined' === typeof this._listeners[a] && (this._listeners[a] = []);
                this._listeners[a].push(c);
              },
              dispatchEvent: function (b) {
                'string' === typeof b && (b = { type: b });
                b.target || (b.target = this);
                if (b.type && this._listeners[b.type] instanceof Array)
                  for (var c = this._listeners[b.type], d = 0, e = c.length; d < e; d++)
                    try {
                      c[d] && c[d].call(this, b);
                    } catch (f) {
                      a.warn('EventDispatcher.dispatchEvent', b.type, f);
                    }
              },
              removeEventListener: function (a, c) {
                if (this._listeners[a] instanceof Array) {
                  var b = this._listeners[a];
                  if (null == c) this._listeners[a] = [];
                  else {
                    a = 0;
                    for (var e = b.length; a < e; a++)
                      if (b[a] === c) {
                        b.splice(a, 1);
                        break;
                      }
                  }
                }
              },
            };
            a.EventDispatcher.prototype.constructor = a.EventDispatcher;
            a.ExtensionManager = function (b) {
              this._extensions = {};
              this._context = b;
              this._surveyExtension = new a.SurveyExtension();
              this._surveyExtension.init(b);
              this._videoStateExtension = new a.VideoStateExtension();
              this._videoStateExtension.init(b);
              this._displayRefreshExtension = new a.DisplayRefreshExtension();
              this._displayRefreshExtension.init(b);
              this._contentVideoExtension = new a.ContentVideoExtension();
              this._contentVideoExtension.init(b);
            };
            a.ExtensionManager.prototype = {
              _scriptLoaded: function (b) {
                if (null == this._extensions[b])
                  this._loadFail(b, 'Extension supposed to be loaded but not found');
                else {
                  var c = a.Util.getObject(b);
                  'function' !== typeof c
                    ? this._loadFail(b, 'Script loaded but extension class not found')
                    : ((c = new c()),
                      'function' === typeof c.init && 'function' === typeof c.dispose
                        ? (a.log('Extension loaded: ' + b),
                          c.init(this._context),
                          this._context.dispatchEvent(a.EVENT_EXTENSION_LOADED, {
                            success: !0,
                            moduleName: b,
                          }))
                        : this._loadFail(b, 'Extension loaded but is not supported'));
                }
              },
              _getExtensionNameFromUrl: function (a) {
                for (
                  var b = /(?!.*\.{2})(?:[\\/\?=#])([a-z][\w\.]+)(?:\.js(#|\?|$))/gi, d, e;
                  null != (d = b.exec(a));

                )
                  e = d;
                return e ? e[1] : null;
              },
              _loadFail: function (b, c) {
                a.log('Extension failed to load. ' + b + ' : ' + c);
                this._context.dispatchEvent(a.EVENT_EXTENSION_LOADED, {
                  success: !1,
                  errorVal: c,
                  moduleName: b,
                });
              },
              load: function (b) {
                if (b) {
                  var c = this._getExtensionNameFromUrl(b);
                  if (null == c)
                    this._loadFail(c, 'Extension name not exsit in the Url. Url: ' + b);
                  else if (this._extensions[c] === b)
                    a.log('Extension is already loaded'),
                      this._loadFail(c, 'Extension is already loaded');
                  else {
                    var d = 1 * this._context.getParameter('moduleLoadTimeout') || 60000,
                      e = !1,
                      f = this,
                      g = window.setTimeout(function () {
                        e = !0;
                        f._loadFail(c, 'Timeout occured while loading extension. Url: ' + b);
                      }, d);
                    a.Util.lazyJavaScriptLoad(b, function () {
                      a.log('async load extension successful, URL:' + b);
                      window.clearTimeout(g);
                      e
                        ? (a.debug('Extension loaded after timeout, do nothing.'),
                          f._loadFail(c, 'Timeout occured while loading extension. Url: ' + b))
                        : ((f._extensions[c] = b), f._scriptLoaded(c));
                    });
                  }
                } else this._loadFail(c, 'Url cannot be empty');
              },
              dispose: function () {
                this._extensions = null;
                this._surveyExtension.dispose();
                this._surveyExtension = null;
                this._displayRefreshExtension.dispose();
                this._displayRefreshExtension = null;
                this._videoStateExtension.dispose();
                this._videoStateExtension = null;
                this._contentVideoExtension.dispose();
                this._context = this._contentVideoExtension = null;
              },
            };
            a.ExtensionManager.prototype.constructor = a.ExtensionManager;
            a.HTMLAdGenerator = {
              log: function (b) {
                a.log('HTMLAdGenerator\t' + b);
              },
              getExtension: function (a) {
                return a
                  ? (a = a.match(/^[^?]+\/[^?.]*(\.\w+)+/))
                    ? a[a.length - 1].slice(1)
                    : ''
                  : '';
              },
              generateAd: function (b, c, d, e, f, g, h) {
                a.HTMLAdGenerator.log(
                  'generatorAd(' + [].slice.call(arguments, 0).join(',') + ')'
                );
                var k = g,
                  l = !1;
                null == k && ((l = !0), (k = a.HTMLAdGenerator.getExtension(b).toLowerCase()));
                switch (k) {
                  case 'jpeg':
                  case 'jpg':
                  case 'gif':
                  case 'png':
                  case 'image/jpeg':
                  case 'image/jpg':
                  case 'image/gif':
                  case 'image/png':
                  case 'image/bmp':
                    k = a.HTMLAdGenerator.generateImageHTML(b, c);
                    break;
                  case 'swf':
                  case 'application/x-shockwave-flash':
                    k = a.HTMLAdGenerator.generateFlashHTML(b, c, d, e, f);
                    break;
                  case 'script':
                  case 'js':
                  case 'text/javascript':
                  case 'text/js_ref':
                  case 'application/x-javascript':
                    k = a.HTMLAdGenerator.generateScriptHTML(b, d, e, f);
                    break;
                  case 'iframe':
                  case 'html':
                  case 'htm':
                  case 'text/html':
                  case 'text/html_doc_ref':
                  case 'text/html_lit_nowrapper':
                  case 'text/html_doc_lit_mobile':
                    k = a.HTMLAdGenerator.generateIFrameHTML(b, c, d, e, f);
                    break;
                  default:
                    k = l
                      ? a.HTMLAdGenerator.generateIFrameHTML(b, c, d, e, f)
                      : a.HTMLAdGenerator.generateAd(b, c, d, e, f, null, h);
                }
                return 'text/html_doc_lit_mobile' === h
                  ? a.HTMLAdGenerator.htmlLitToHTMLDocLitMobile(k)
                  : k;
              },
              generateImageHTML: function (b, c) {
                a.HTMLAdGenerator.log('generateImageHTML');
                return c
                  ? '<a href="' + c + '" target="_blank"><img src="' + b + '" border="0" /></a>'
                  : '<img src="' + b + '" border="0" />';
              },
              generateFlashHTML: function (b, c, d, e, f) {
                a.HTMLAdGenerator.log('generateFlashHTML');
                var g = b;
                c &&
                  0 < c.length &&
                  ((g += -1 === b.indexOf('?') ? '?' : '&'),
                  (g += 'clickTag=' + encodeURIComponent(c)));
                b =
                  '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"WIDTH="' +
                  e +
                  '" HEIGHT="' +
                  f +
                  '" id="' +
                  d +
                  '_external_ad">' +
                  ('<PARAM NAME=movie VALUE="' + g + '"/>') +
                  '<PARAM NAME=quality VALUE=high/><PARAM NAME=bgcolor VALUE=#FFFFFF/><PARAM NAME="allowScriptAccess" VALUE="always"/><PARAM NAME="loop" VALUE="true"/>';
                b += '<EMBED src="' + g + '" ';
                return (
                  b +
                  ('quality=high bgcolor=#FFFFFF WIDTH="' +
                    e +
                    '" HEIGHT="' +
                    f +
                    '"NAME="' +
                    d +
                    '_external_video" ALIGN="" TYPE="application/x-shockwave-flash"PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT>')
                );
              },
              generateIFrameHTML: function (b, c, d, e, f) {
                a.HTMLAdGenerator.log('generateIFrameHTML');
                return (
                  '<iframe height="' +
                  f +
                  '" width="' +
                  e +
                  '" frameborder="0" scrolling="no" allowtransparency="true" leftmargin="0" rightmargin="0" marginwidth="0" marginheight="0" src="' +
                  b +
                  '"></iframe>'
                );
              },
              docLitToHTMLLit: function (b, c, d, e) {
                a.HTMLAdGenerator.log('docLitToHTMLLit');
                return (
                  '<iframe id="_fw_frame_' +
                  c +
                  '" width="' +
                  d +
                  '" height="' +
                  e +
                  '" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe><script language="javascript" type="text/javascript" id="_fw_container_js_' +
                  c +
                  '">if(!fw_targets) {var fw_targets = [];}var _fw_wr;var fw_scope = document;var fw_content = \'' +
                  a.Util.encodeToHex(b) +
                  '\';var trgtFrm = fw_scope.getElementById("_fw_frame_' +
                  c +
                  '");trgtFrm = (trgtFrm.contentWindow) ? trgtFrm.contentWindow : (trgtFrm.contentDocument.document) ? trgtFrm.contentDocument.document : trgtFrm.contentDocument;fw_targets["' +
                  c +
                  '"] = trgtFrm;if(navigator.userAgent.match(/\\bMSIE\\b/) || navigator.userAgent.match(/\\bOpera\\b/)){trgtFrm.document.open();trgtFrm.document.write(fw_content);setTimeout(function(){fw_close(fw_targets["' +
                  c +
                  '"])}, 7500);} else if (navigator.userAgent.match(/\\bFirefox\\b/)) {if(true && fw_content.length < 2000){var ec = escape(fw_content);var fw_iframe_url = "http://m2.feiwei.tv/g/lib/template/echo.html?s="+ec;fw_scope.getElementById("_fw_frame_' +
                  c +
                  '").src = fw_iframe_url;} else {trgtFrm.document.open();trgtFrm.document.write(fw_content);trgtFrm.document.close();}} else {trgtFrm.document.open();trgtFrm.document.write(fw_content);trgtFrm.document.close();}function fw_close(theFrame){theFrame.document.close();}</script>'
                );
              },
              htmlLitToDocLit: function (b) {
                a.HTMLAdGenerator.log('htmlLitToDocLit');
                return (
                  '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Advertisement</title></head><body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">' +
                  b +
                  '</body></html>'
                );
              },
              wrapUnsafeHTML: function (b, c, d, e) {
                return a.HTMLAdGenerator.htmlLitToHTMLDocLitMobile(
                  a.HTMLAdGenerator.docLitToHTMLLit(a.HTMLAdGenerator.htmlLitToDocLit(b), c, d, e)
                );
              },
              wrapJSCode: function (b, c, d, e) {
                return a.HTMLAdGenerator.wrapUnsafeHTML(
                  '<script language="javascript" type="text/javascript">' + b + '</script>',
                  c,
                  d,
                  e
                );
              },
              generateScriptHTML: function (b, c, d, e) {
                a.HTMLAdGenerator.log('generateScriptHTML');
                return a.HTMLAdGenerator.wrapUnsafeHTML(
                  '<script language="javascript" type="text/javascript" src="' + b + '"></script>',
                  c,
                  d,
                  e
                );
              },
              htmlLitToHTMLDocLitMobile: function (b) {
                a.HTMLAdGenerator.log('htmlLitToHTMLDocLitMobile');
                return (
                  '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><meta name = "viewport" content = "initial-scale = 1.0, target-densitydpi = device-dpi" /><title>Advertisement</title><script type="text/javascript">window._fw_page_url = "";</script></head><body style="margin:0px;background-color:transparent;">' +
                  b +
                  '</body></html>'
                );
              },
            };
            a.NullRenderer = function () {};
            a.NullRenderer.prototype = {
              start: function (b) {
                b.setCapability(a.EVENT_AD_CLICK, a.CAPABILITY_STATUS_OFF);
                b.handleStateTransition(a.RENDERER_STATE_STARTED);
                b.handleStateTransition(a.RENDERER_STATE_COMPLETED);
              },
              info: function () {
                return { moduleType: a.MODULE_TYPE_RENDERER };
              },
              getPlayheadTime: function () {
                return -1;
              },
              getDuration: function () {
                return -1;
              },
            };
            a.NullRenderer.prototype.constructor = a.NullRenderer;
            a.PageSlotScanner = function (a) {
              this.OPTION_INIT = 1;
              this.OPTION_FCAI = 2;
              this.OPTION_NIIC = 4;
              this.OPTION_NOSA = 8;
              this.OPTION_NSIT = 16;
              this._knownSlots = [];
              this._slots = {};
              this._candidateAds = [];
              this._slotOptionFound = !1;
              this._context = a;
            };
            a.PageSlotScanner.prototype = {
              isSlotDuplicate: function (a) {
                for (var b = 0; b < this._knownSlots.length; ++b)
                  if (this._knownSlots[b].id === a) return !0;
                return !1;
              },
              findPageSlotByScope: function (b) {
                var c = b.document;
                if (c) {
                  var d = /(^|\s)_fwph(\s|$)/,
                    e = c.getElementsByTagName('span');
                  b._fw_admanager || (b._fw_admanager = {});
                  b._fw_admanager.pageScanState = !0;
                  for (b = 0; b < e.length; ++b) {
                    var f;
                    var g = e[b];
                    if (
                      d.test(g.className) &&
                      ((g = g.getAttribute('id')),
                      (f = c.getElementById('_fw_input_' + g)) &&
                        !this.isSlotDuplicate(g) &&
                        (f = f.getAttribute('value')))
                    ) {
                      ';' !== f.charAt(f.length - 1) && (f += ';');
                      f = f.split(';');
                      var h = f[f.length - 2],
                        k = !1;
                      -1 !== h.search('lo=i') && (k = !0);
                      var l = !1;
                      -1 !== h.search('prct=') && (l = !0);
                      0 > h.search('flag=') && (h += '&flag=');
                      0 > h.search('ptgt=') && (h = 'ptgt=s&' + h);
                      f = [];
                      var p = h.split('&'),
                        x,
                        Q;
                      h = !0;
                      for (
                        var r = a.SLOT_OPTION_INITIAL_AD_STAND_ALONE, P = 0;
                        P < p.length;
                        ++P
                      ) {
                        var m = p[P].split('=');
                        if (2 === m.length) {
                          m[1] = decodeURIComponent(m[1]);
                          if ('ssct' === m[0])
                            if (l) continue;
                            else (l = !0), (m[0] = 'prct');
                          'flag' === m[0]
                            ? (-1 === m[1].search(/[-\+]cmpn/) && (m[1] += '+cmpn'),
                              '+' !== m[1].charAt(0) &&
                                '-' !== m[1].charAt(0) &&
                                (m[1] = '+' + m[1]),
                              k && -1 === m[1].search('-init') && (m[1] += '-init'),
                              -1 !== m[1].search('-nrpl') &&
                                (m[1] = m[1].replace('-nrpl', '+cmpn')),
                              -1 !== m[1].search('-cmpn') && (h = !1),
                              (r = this._getInitialOption(m[1])),
                              this._slotOptionFound ||
                                (r = k
                                  ? a.SLOT_OPTION_INITIAL_AD_KEEP_ORIGINAL
                                  : a.SLOT_OPTION_INITIAL_AD_STAND_ALONE))
                            : 'w' === m[0]
                            ? (x = Number(m[1]))
                            : 'h' === m[0]
                            ? (Q = Number(m[1]))
                            : 'cana' === m[0] && this._addCandidateAds(m[1]);
                          m = encodeURIComponent(m[0]) + '=' + encodeURIComponent(m[1]);
                          f.push(m);
                        }
                      }
                      l ||
                        ((k =
                          this._context.getParameter(a.PARAMETER_PAGE_SLOT_CONTENT_TYPE) ||
                          'text/html_doc_lit_mobile,text/html_doc_ref'),
                        f.push('prct=' + encodeURIComponent(k)));
                      (k = c.getElementById('_fw_container_' + g))
                        ? ((this._slots[g] = f.join('&') + ';'),
                          this._knownSlots.push({
                            id: g,
                            width: x,
                            height: Q,
                            element: k,
                            acceptCompanion: h,
                            initialAdOption: r,
                          }))
                        : a.warn('Failed to find container for slot ' + g);
                    }
                  }
                }
              },
              scanPageSlots: function () {
                for (var b = 0; b < window.frames.length; ++b)
                  try {
                    a.debug('scanPageSlots in frame', b),
                      this.findPageSlotByScope(window.frames[b]);
                  } catch (c) {
                    a.debug('PageSlotScanner: scanPageSlots exception ' + c);
                  }
                try {
                  window.parent &&
                    window.parent !== window &&
                    (a.debug('scanPageSlots in parent frame'),
                    this.findPageSlotByScope(window.parent));
                } catch (c) {
                  a.debug('PageSlotScanner: scanPageSlots exception ' + c);
                }
                try {
                  a.debug('scanPageSlots in current window'), this.findPageSlotByScope(window);
                } catch (c) {
                  a.debug('PageSlotScanner: scanPageSlots exception ' + c);
                }
              },
              slotsToTypeBStr: function () {
                var a = '',
                  c;
                for (c in this._slots)
                  if (this._slots.hasOwnProperty(c)) {
                    var d = this._slots[c];
                    -1 === d.search('slid=') && (d = 'slid=' + encodeURIComponent(c) + '&' + d);
                    a += d;
                    ';' !== a.charAt(a.length - 1) && (a += ';');
                  }
                a && (a = a.substring(0, a.length - 1));
                return a;
              },
              _addCandidateAds: function (a) {
                a = a.split(',');
                for (var b = 0; b < a.length; b++) {
                  var d = parseInt(a[b], 10);
                  0 < d && this._candidateAds.push(d);
                }
              },
              _parseFlags: function (a) {
                var b = [],
                  d = [],
                  e = '',
                  f = !0;
                a += '+';
                for (var g = 0; g < a.length; ++g) {
                  var h = a.charAt(g);
                  switch (h) {
                    case '+':
                    case '-':
                      '' !== e && ((f ? b : d).push(e), (e = ''));
                      f = '+' === h;
                      break;
                    default:
                      e += h;
                  }
                }
                return [b, d];
              },
              _getInitialOption: function (b) {
                var c = !0,
                  d = !1,
                  e = 0;
                b = this._parseFlags(b);
                for (var f = a.SLOT_OPTION_INITIAL_AD_STAND_ALONE, g = 0; g < b.length; ++g)
                  for (var h = 0; h < b[g].length; ++h)
                    switch (b[g][h].toString().toLowerCase()) {
                      case 'cmpn':
                        c = 0 === g;
                        break;
                      case 'nrpl':
                        c = 0 !== g;
                        break;
                      case 'init':
                        e = 0 === g ? e & ~this.OPTION_INIT : e | this.OPTION_INIT;
                        d = !0;
                        break;
                      case 'fcai':
                        e = 0 === g ? e | this.OPTION_FCAI : e & ~this.OPTION_FCAI;
                        d = !0;
                        break;
                      case 'niic':
                        e = 0 === g ? e | this.OPTION_NIIC : e & ~this.OPTION_NIIC;
                        d = !0;
                        break;
                      case 'nosa':
                        e = 0 === g ? e | this.OPTION_NOSA : e & ~this.OPTION_NOSA;
                        d = !0;
                        break;
                      case 'nsit':
                        (e = 0 === g ? e | this.OPTION_NSIT : e & ~this.OPTION_NSIT), (d = !0);
                    }
                a.debug('PageSlotScanner: _getInitialOption: acceptCompanion = ' + c);
                switch (e) {
                  case 0:
                    d && (f = a.SLOT_OPTION_INITIAL_AD_STAND_ALONE);
                    break;
                  case 1:
                    f = a.SLOT_OPTION_INITIAL_AD_KEEP_ORIGINAL;
                    break;
                  case 3:
                    f = a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_ONLY;
                    break;
                  case 2:
                    f = a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_STAND_ALONE;
                    break;
                  case 6:
                    f = a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_THEN_STAND_ALONE;
                    break;
                  case 8:
                    f = a.SLOT_OPTION_INITIAL_AD_NO_STAND_ALONE;
                    break;
                  case 10:
                    f = a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_NO_STAND_ALONE;
                    break;
                  case 16:
                    f = a.SLOT_OPTION_INITIAL_AD_NO_STAND_ALONE_IF_TEMPORAL;
                    break;
                  case 18:
                    f = a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_NO_STAND_ALONE_IF_TEMPORAL;
                    break;
                  default:
                    f = a.SLOT_OPTION_INITIAL_AD_STAND_ALONE;
                }
                this._slotOptionFound = d;
                return f;
              },
            };
            a.PageSlotScanner.prototype.constructor = a.PageSlotScanner;
            a.RendererController = function (b, c) {
              var d = null,
                e = null,
                f = {},
                g = a.RendererInitState.instance,
                h = {},
                k = [],
                l = 0;
              return {
                getAdInstance: function () {
                  return c;
                },
                getContext: function () {
                  return b;
                },
                getRendererState: function () {
                  return g;
                },
                processEvent: function (b) {
                  var d = b.name;
                  if (
                    d === a.RENDERER_STATE_STARTED ||
                    d === a.RENDERER_STATE_COMPLETING ||
                    d === a.RENDERER_STATE_COMPLETED ||
                    d === a.RENDERER_STATE_FAILED
                  )
                    this.handleStateTransition(d, b.info);
                  else {
                    var e = this._inferEventType(d);
                    if (
                      e &&
                      (e === a.EVENT_TYPE_CLICK &&
                        b.info &&
                        b.info[a.INFO_KEY_CUSTOM_EVENT_NAME] &&
                        (d = b.info[a.INFO_KEY_CUSTOM_EVENT_NAME]),
                      d !== a.EVENT_AD_MEASUREMENT || b.info[a.INFO_KEY_CONCRETE_EVENT_ID])
                    ) {
                      var f =
                        d === a.EVENT_AD_INITIATED ||
                        d === a.EVENT_AD_BUFFERING_START ||
                        d === a.EVENT_AD_BUFFERING_END ||
                        d === a.EVENT_AD_VOLUME_CHANGE ||
                        (b.info && b.info.hasOwnProperty('apiOnly') && b.info.apiOnly);
                      c.processEvent(d, e, b.info, f);
                    }
                  }
                },
                handleStateTransition: function (b, d) {
                  switch (b) {
                    case a.RENDERER_STATE_STARTED:
                      g.notifyStarted(this);
                      break;
                    case a.RENDERER_STATE_COMPLETING:
                      g.complete(this);
                      break;
                    case a.RENDERER_STATE_COMPLETED:
                      g.complete(this);
                      g.notifyCompleted(this);
                      break;
                    case a.RENDERER_STATE_FAILED:
                      c.getSlot()._clearScheduledAdInstance();
                      d || (d = {});
                      a.warn(
                        'FAIL',
                        ', FW ErrorModule:',
                        d[a.INFO_KEY_ERROR_MODULE],
                        ', FW ErrorCode:',
                        d[a.INFO_KEY_ERROR_CODE],
                        ', FW ErrorInfo:',
                        d[a.INFO_KEY_ERROR_INFO],
                        ', VAST ErrorCode:',
                        d[a.INFO_KEY_VAST_ERROR_CODE]
                      );
                      (b = c.processEvent(a.EVENT_ERROR, a.EVENT_TYPE_ERROR, d)) ||
                        a.debug('No EVENT_ERROR callback found');
                      if (d)
                        switch (d[a.INFO_KEY_ERROR_CODE]) {
                          case a.ERROR_NO_AD_AVAILABLE:
                          case a.ERROR_PARSE:
                            (b = c.processEvent(
                              a.EVENT_RESELLER_NO_AD,
                              a.EVENT_TYPE_IMPRESSION
                            )) || a.debug('No EVENT_RESELLER_NO_AD callback found.');
                        }
                      g.fail(this);
                      break;
                    default:
                      a.debug('Unknown event received', b);
                  }
                },
                setCapability: function (a, b) {
                  c.setMetr(a, b);
                },
                getVersion: function () {
                  return b._adManager.getVersion();
                },
                getParameter: function (a) {
                  if (!a) return null;
                  if (b._overrideLevelParameterDictionary.hasOwnProperty(a))
                    return b._overrideLevelParameterDictionary[a];
                  if (
                    c.getActiveCreativeRendition() &&
                    'undefined' !== typeof c.getActiveCreativeRendition().getParameter(a)
                  )
                    return c.getActiveCreativeRendition().getParameter(a);
                  var d = c._creative;
                  return d && 'undefined' !== typeof d.getParameter(a)
                    ? d.getParameter(a)
                    : 'undefined' !== typeof c.getSlot().getParameter(a)
                    ? c.getSlot().getParameter(a)
                    : b._adResponse._profileParameters.hasOwnProperty(a)
                    ? b._adResponse._profileParameters[a]
                    : b._globalLevelParameterDictionary.hasOwnProperty(a)
                    ? b._globalLevelParameterDictionary[a]
                    : f && f.hasOwnProperty(a)
                    ? f[a]
                    : null;
                },
                getCompanionSlots: function () {
                  for (var a = [], b = c._companionAdInstances, d = 0; d < b.length; d++)
                    b[d].isPlaceholder() && a.push(b[d].getSlot());
                  return a;
                },
                createNullDrivingAdInstance: function () {
                  var a = c.getSlot().scheduleAdInstance();
                  a.addCreativeRendition().setContentType('null/null');
                  return a;
                },
                scheduleAdInstances: function (a) {
                  var b,
                    d = [],
                    e = null;
                  a = a || [];
                  if (0 === a.length) return d;
                  for (b = 0; b < a.length; b++)
                    a[b].getCustomId() === c.getSlot().getCustomId() &&
                      (e = c.getSlot().scheduleAdInstance());
                  if (!e)
                    if (this.isTranslator()) e = this.createNullDrivingAdInstance();
                    else if (this.isRenderer()) e = c;
                    else return d;
                  for (var f = 0; f < a.length; f++) {
                    if (a[f].getCustomId() === c.getSlot().getCustomId()) e !== c && d.push(e);
                    else
                      for (var g = 0, p = e._companionAdInstances; g < p.length; g++)
                        if (((b = p[g]), a[f] === b.getSlot())) {
                          if (this.isTranslator()) d.push(b);
                          else if (this.isRenderer() && b.isPlaceholder()) {
                            var l = b.cloneForTranslation();
                            e === c && (h[l] = b);
                            p[g] = l;
                            d.push(l);
                            k.push(l);
                          }
                          break;
                        }
                    d.length <= f && d.push(null);
                  }
                  return d;
                },
                commitAdInstance: function () {
                  if (this.isRenderer() && c.isStarted()) {
                    for (var b = 0; b < k.length; b++) {
                      var d = k[b];
                      d && d.getSlot().playCompanionAds(d);
                    }
                    k = [];
                  } else
                    a.warn(
                      'Skipping RendererController.commitAdInstance when called with driving ad not started or completed.'
                    );
                },
                isRenderer: function () {
                  return d && a.MODULE_TYPE_RENDERER === d.info()[a.INFO_KEY_MODULE_TYPE];
                },
                isTranslator: function () {
                  return d && a.MODULE_TYPE_TRANSLATOR === d.info()[a.INFO_KEY_MODULE_TYPE];
                },
                playable: function () {
                  return g === a.RendererInitState.instance;
                },
                reset: function () {
                  g = a.RendererInitState.instance;
                },
                play: function () {
                  for (
                    var a = c.getRenderableCreativeRenditions() || [], b = null, d = 0;
                    d < a.length;
                    d++
                  ) {
                    var e = a[d];
                    if ((b = this._matchRendererClassName(e))) {
                      c.setActiveCreativeRendition(e);
                      break;
                    }
                  }
                  0 === l && this._actualPlay(b);
                },
                _actualPlay: function (b) {
                  (e = a.Util.getObject(b) || a.Util.getObject(w + '.' + b)) && (d = new e());
                  d
                    ? g.start(this)
                    : this.handleStateTransition(a.RENDERER_STATE_FAILED, {
                        errorCode: a.ERROR_NO_RENDERER,
                        errorInfo: 'Renderer class <' + b + '> not found',
                      });
                },
                dispatchEvent: function (a, c) {
                  b.dispatchEvent(a, c);
                },
                requestContentStateChange: function (a) {
                  a
                    ? b._requestContentVideoToPauseBySlot(c.getSlot())
                    : b._requestContentVideoToResumeBySlot(c.getSlot());
                },
                getRenderer: function () {
                  return d;
                },
                setRenderer: function (a) {
                  d = a;
                },
                setRendererState: function (a) {
                  g = a;
                },
                getContentVideoElement: function () {
                  return b.getContentVideoElement();
                },
                _restorePlaceholdersForHybrid: function () {
                  if (h && this.isRenderer()) {
                    for (var a = [], b = 0; b < c._companionAdInstances.length; b++) {
                      var d = c._companionAdInstances[b],
                        e = h[d];
                      e ? a.push(e) : a.push(d);
                    }
                    c._companionAdInstances = a;
                  }
                  0 < k.length && this.isRenderer() && (k = []);
                },
                rendererMatch: function (b) {
                  return e ? e === a.Util.getObject(this._matchRendererClassName(b)) : !0;
                },
                _matchRendererClassName: function (d) {
                  function e (b, c, d) {
                    a.debug('matching ' + b + ' within ' + c);
                    if (!c) return !0;
                    c = c.split(',');
                    c[c.length - 1] || c.pop();
                    if (d) {
                      b = b.toLowerCase();
                      for (d = 0; d < c.length; d++) if (b === c[d].toLowerCase()) return !0;
                      a.debug('not match');
                      return !1;
                    }
                    (c = 0 <= c.indexOf(b)) || a.debug('not match');
                    return c;
                  }
                  var h = d.getPrimaryCreativeRenditionAsset().getContentType(),
                    g = d.getContentType(),
                    k = d.getWrapperType(),
                    m = d.getCreativeApi(),
                    p = d.getBaseUnit(),
                    F = c.getSoAdUnit(),
                    H = c.getSlot(),
                    I = H.getType();
                  H = H.getTimePositionClass();
                  a.debug('match renderer for creativeRendition:' + d.getId());
                  a.debug('slot type:' + I);
                  if (a.Util.isBlank(g) && a.Util.isBlank(k))
                    return (
                      a.warn(
                        'renderer not match due to both contentType and wrapperType are empty'
                      ),
                      null
                    );
                  var v = b._rendererManifest['*'];
                  v || (v = b._rendererManifest[k]);
                  v || (v = b._rendererManifest[g]);
                  if (!v) {
                    I = b._overriddenAdRenderers.concat(b._adResponse._adRenderers);
                    for (var M = 0; M < I.length; M++) {
                      var q = I[M],
                        A = !q.contentType;
                      A ||
                        (k
                          ? (A = e(k, q.contentType, !0))
                          : (h && (A = e(h, q.contentType, !0)),
                            A || (A = e(g, q.contentType, !0))));
                      if (A)
                        if (((A = !q.creativeApi) || (A = e(m, q.creativeApi)), A))
                          if (q.baseUnit && !e(p, q.baseUnit))
                            a.debug(
                              "can't match renderer " +
                                q.url +
                                ' due to baseUnit not match for creativeRendition:' +
                                d.getId()
                            );
                          else if (q.soAdUnit && !e(F, q.soAdUnit))
                            a.debug(
                              "can't match renderer " +
                                q.url +
                                ' due to soAdUnit not match for creativeRendition:' +
                                d.getId()
                            );
                          else if (q.slotType && !e(H.toUpperCase(), q.slotType.toUpperCase()))
                            a.debug(
                              "can't match renderer " +
                                q.url +
                                ' due to slotType not match for creativeRendition:' +
                                d.getId()
                            );
                          else {
                            if (
                              (a.debug(
                                'renderer ' + q.url + ' matched for creativeRendition:' + d.getId()
                              ),
                              q.url)
                            ) {
                              v = q.url;
                              d = v.indexOf('?');
                              -1 !== d && (v = v.substring(0, d));
                              d = v.lastIndexOf('/');
                              -1 !== d && (v = v.substring(d + 1));
                              d = v.lastIndexOf('.js');
                              -1 !== d && (v = v.substring(0, d));
                              var J = {};
                              if (q.parameter)
                                for (d = [].concat(q.parameter), h = 0; h < d.length; h++)
                                  if (d[h].hasOwnProperty('name')) J[d[h].name] = d[h].value;
                                  else
                                    for (var y in d[h]) d[h].hasOwnProperty(y) && (J[y] = d[h][y]);
                              a.Util.getObject(w + '.' + v) && (v = w + '.' + v);
                              if (a.Util.getObject(v)) (f = J), (l = 0);
                              else {
                                if (0 < l) break;
                                var t = this;
                                y =
                                  1 * this.getContext().getParameter('moduleLoadTimeout') || 60000;
                                l = window.setTimeout(function () {
                                  l = -1;
                                  t.handleStateTransition(a.RENDERER_STATE_FAILED, {
                                    errorCode: a.ERROR_NO_RENDERER,
                                    errorInfo: 'Load renderer timeout, URL:' + q.url,
                                  });
                                }, y);
                                a.Util.lazyJavaScriptLoad(q.url, function () {
                                  a.log('async load renderer successful, URL:' + q.url);
                                  -1 === l
                                    ? a.debug('renderer loaded after timeout. WILL NOT PLAY.')
                                    : (window.clearTimeout(l), (l = 0), (f = J), t._actualPlay(v));
                                });
                              }
                              break;
                            }
                          }
                        else
                          a.debug(
                            "can't match renderer " +
                              q.url +
                              ' due to creative api not match for creativeRendition:' +
                              d.getId()
                          );
                      else
                        a.debug(
                          "can't match renderer " +
                            q.url +
                            ' due to contentType not match for creativeRendition:' +
                            d.getId()
                        );
                    }
                  }
                  return v
                    ? v
                    : a.Util.isBlank(k)
                    ? 'null/null' === g
                      ? w + '.NullRenderer'
                      : null
                    : null;
                },
                _inferEventType: function (b) {
                  return b === a.EVENT_ERROR
                    ? a.EVENT_TYPE_ERROR
                    : b === a.EVENT_AD_CLICK
                    ? a.EVENT_TYPE_CLICK
                    : b === a.EVENT_AD_IMPRESSION ||
                      b === a.EVENT_AD_FIRST_QUARTILE ||
                      b === a.EVENT_AD_MIDPOINT ||
                      b === a.EVENT_AD_THIRD_QUARTILE ||
                      b === a.EVENT_AD_COMPLETE ||
                      b === a.EVENT_RESELLER_NO_AD
                    ? a.EVENT_TYPE_IMPRESSION
                    : b === a.EVENT_AD_PAUSE ||
                      b === a.EVENT_AD_RESUME ||
                      b === a.EVENT_AD_REWIND ||
                      b === a.EVENT_AD_MUTE ||
                      b === a.EVENT_AD_UNMUTE ||
                      b === a.EVENT_AD_COLLAPSE ||
                      b === a.EVENT_AD_EXPAND ||
                      b === a.EVENT_AD_MINIMIZE ||
                      b === a.EVENT_AD_CLOSE ||
                      b === a.EVENT_AD_ACCEPT_INVITATION
                    ? a.EVENT_TYPE_STANDARD
                    : b === a.EVENT_AD_MEASUREMENT ||
                      b === a.EVENT_AD_VOLUME_CHANGE ||
                      b === a.EVENT_AD_BUFFERING_START ||
                      b === a.EVENT_AD_BUFFERING_END ||
                      a.EVENT_AD_INITIATED ||
                      a.EVENT_AD_AUTO_PLAY_BLOCKED
                    ? a.EVENT_TYPE_GENERIC
                    : null;
                },
                pause: function () {
                  a.log('RendererController.pause');
                  d && 'function' === typeof d.pause
                    ? d.pause()
                    : a.log('Renderer.pause() is not implemented.');
                },
                resume: function () {
                  a.log('RendererController.resume');
                  d && 'function' === typeof d.resume
                    ? d.resume()
                    : a.log('Renderer.resume() is not implemented.');
                },
                stop: function () {
                  a.log('RendererController.stop');
                  0 < l && (l = -1);
                  g.stop(this);
                },
              };
            };
            a.RenditionSelector = function (a, c, d, e) {
              this._targetByterate = a;
              this._arWeight = c;
              this._pxWeight = d;
              this._conversionFactor = e;
            };
            a.RenditionSelector.prototype = {
              getBestFitRendition: function (b, c, d) {
                var e = this;
                b.reverse();
                b = b
                  .filter(function (b) {
                    return (
                      b &&
                      b.getPrimaryCreativeRenditionAsset() &&
                      (b.getPrimaryCreativeRenditionAsset().getUrl() ||
                        b.getPrimaryCreativeRenditionAsset().getContent()) &&
                      a.Util.canPlayVideoType(b.getPrimaryCreativeRenditionAsset().getMimeType())
                    );
                  })
                  .sort(function (a, b) {
                    return e.getBitrate(a) - e.getBitrate(b);
                  });
                if (!b.length) return null;
                var f = Number.MAX_VALUE,
                  g = b.filter(function (a) {
                    a = e.getBitrate(a);
                    f = a < f ? a : f;
                    return a <= e._targetByterate;
                  });
                g.length ||
                  (g = b.filter(function (a) {
                    return e.getBitrate(a) <= f;
                  }));
                return g
                  .sort(function (a, b) {
                    return e.compareVisualMetrics(a, b, c, d);
                  })
                  .pop();
              },
              compareVisualMetrics: function (a, c, d, e) {
                var b = this.calculateVisualRatios(a.getWidth(), a.getHeight(), d, e);
                e = this.calculateVisualRatios(c.getWidth(), c.getHeight(), d, e);
                return !b && e
                  ? -1
                  : b && !e
                  ? 1
                  : b &&
                    e &&
                    ((d = this._conversionFactor * this._arWeight * Math.log(e.arRatio)),
                    (e = this._pxWeight * Math.log(e.pixelation)),
                    (b = this.findDistance(
                      this._conversionFactor * this._arWeight * Math.log(b.arRatio),
                      this._pxWeight * Math.log(b.pixelation),
                      0,
                      0
                    )),
                    (d = this.findDistance(d, e, 0, 0)),
                    d !== b)
                  ? d - b
                  : a.getPreference() - c.getPreference();
              },
              calculateVisualRatios: function (a, c, d, e) {
                if (0 < a && 0 < c && 0 < d && 0 < e) {
                  var b = a / c,
                    g = d / e;
                  b > g ? (e = d / b) : (d = e * b);
                  return { arRatio: b / g, pixelation: (a * c) / (d * e) };
                }
                return null;
              },
              findDistance: function (a, c, d, e) {
                return isNaN(a) || isNaN(d) || isNaN(c) || isNaN(e)
                  ? NaN
                  : Math.sqrt(Math.pow(d - a, 2) + Math.pow(e - c, 2));
              },
              getBitrate: function (a) {
                var b = a.getDuration();
                return (a = a.getPrimaryCreativeRenditionAsset().getBytes()) &&
                  b &&
                  !isNaN(a) &&
                  !isNaN(b) &&
                  0 < a &&
                  0 < b
                  ? (8 * a) / 1000 / b
                  : -1;
              },
            };
            a.RenditionSelector.prototype.constructor = a.RenditionSelector;
            a.Slot = function (b) {
              var c = '',
                d = null,
                e = null,
                f = null,
                g = null,
                h = [],
                k = [],
                l = {},
                p = null,
                x = a.MediaInitState.instance,
                Q = 0,
                r = null,
                w,
                m,
                K,
                F,
                H,
                I,
                v = 0,
                M = 0,
                q = [],
                A = !1,
                J = !1,
                y = !0,
                t = [],
                G,
                L,
                z = !1;
              return {
                setAutoPlayBlocked: function (a) {
                  z = a;
                },
                getSlotProfile: function () {
                  return e;
                },
                setSlotProfile: function (a) {
                  e = a;
                },
                setMediaState: function (a) {
                  x = a;
                },
                setParameter: function (a, b) {
                  null == b ? delete l[a] : (l[a] = b);
                },
                getParameter: function (a) {
                  if (a && l.hasOwnProperty(a)) return l[a];
                },
                getAdCount: function () {
                  return h.length;
                },
                setCustomId: function (a) {
                  c = a;
                },
                getCustomId: function () {
                  return c;
                },
                setAdUnit: function (a) {
                  H = a;
                },
                getAdUnit: function () {
                  return H;
                },
                setType: function (a) {
                  d = a;
                },
                getType: function () {
                  return d;
                },
                setTimePosition: function (a) {
                  m = a;
                },
                getTimePosition: function () {
                  return m;
                },
                setTimePositionClass: function (a) {
                  r = a && a.toUpperCase();
                },
                getTimePositionClass: function () {
                  return r;
                },
                setWidth: function (a) {
                  K = a;
                },
                getWidth: function () {
                  return r !== a.TIME_POSITION_CLASS_DISPLAY
                    ? K
                      ? K
                      : b.getVideoDisplaySize().width
                    : K;
                },
                setHeight: function (a) {
                  F = 1 * a;
                },
                getHeight: function () {
                  return r !== a.TIME_POSITION_CLASS_DISPLAY
                    ? F
                      ? F
                      : b.getVideoDisplaySize().height
                    : F;
                },
                setBase: function (a) {
                  w = a;
                },
                getBase: function () {
                  return w;
                },
                setCuepointSequence: function (a) {
                  I = 1 * a ? 1 * a : 0;
                },
                getCuepointSequence: function () {
                  return I;
                },
                getVideoDisplaySize: function () {
                  return b.getVideoDisplaySize();
                },
                setMaxDuration: function (a) {
                  v = 1 * a ? 1 * a : 0;
                },
                getMaxDuration: function () {
                  return v;
                },
                setMinDuration: function (a) {
                  M = 1 * a ? 1 * a : 0;
                },
                getMinDuration: function () {
                  return M;
                },
                setAcceptContentType: function (a) {
                  if (a && a.trim()) {
                    a = a.split(',');
                    for (var b = 0; b < a.length; b++) q.push(a[b].trim());
                  }
                },
                getAcceptContentType: function () {
                  return q.join(',');
                },
                parse: function (d) {
                  if (d) {
                    c = d.customId;
                    m = 1 * d.timePosition;
                    r = (d.timePositionClass && d.timePositionClass.toUpperCase()) || r;
                    H = d.adUnit;
                    for (var e, f = 0, g = d.eventCallbacks || []; f < g.length; f++) {
                      e = g[f];
                      var l = a.EventCallback.newEventCallback(b, e.name, e.type);
                      l && ((l._slot = this), l.parse(e), k.push(l));
                    }
                    f = 0;
                    for (g = d.selectedAds || []; f < g.length; f++)
                      (e = g[f]),
                        (d = []),
                        (l = new a.AdInstance(b)),
                        d.push(l),
                        (l._slot = this),
                        (l._slotCustomId = c),
                        (l._parentAdInstancesGroup = d),
                        l.parse(e),
                        h.push(d);
                  }
                },
                getCurrentAdInstance: function () {
                  return f;
                },
                isPauseSlot: function () {
                  return r === a.TIME_POSITION_CLASS_PAUSE_MIDROLL;
                },
                play: function (c) {
                  if (z)
                    a.log('Resuming previously blocked video ad now.'),
                      (z = !1),
                      b.getContentVideoElement() && b.getContentVideoElement().play();
                  else {
                    for (var d = this.getAdInstances(), e = 0; e < d.length; e++)
                      d[e]._isSkipped = !1;
                    r !== a.TIME_POSITION_CLASS_DISPLAY || y
                      ? (a.log('Slot.play', r),
                        (A = !1),
                        r === a.TIME_POSITION_CLASS_DISPLAY &&
                          1 < h.length &&
                          h.splice(0, h.length - 1),
                        this._play(c))
                      : (a.log('Slot is invisible. Push the play operation to the queue.'),
                        t.push({ operation: this.play, argument: c }));
                  }
                },
                stop: function () {
                  a.log('Slot.stop', r);
                  r === a.TIME_POSITION_CLASS_DISPLAY && (t = []);
                  x === a.MediaInitState.instance || x === a.MediaEndState.instance
                    ? a.log('Slot.stop, not start or already end, ignore')
                    : ((A = !0),
                      f ? f.stop() : a.warn('Slot.stop, no _currentAdInstance, ignore'));
                },
                pause: function () {
                  a.log('Slot.pause');
                  r !== a.TIME_POSITION_CLASS_DISPLAY
                    ? f && f.pause()
                    : a.log('Not a temporal slot. Ignore.');
                },
                resume: function () {
                  a.log('Slot.resume');
                  r !== a.TIME_POSITION_CLASS_DISPLAY
                    ? f && f.resume()
                    : a.log('Not a temporal slot. Ignore.');
                },
                skipCurrentAd: function () {
                  a.log('Slot.skipCurrentAd ', f);
                  f ? f.skip() : a.log('Slot.skipCurrentAd, no _currentAdInstance, ignore');
                },
                setVisible: function (b) {
                  if (r !== a.TIME_POSITION_CLASS_DISPLAY)
                    a.log('Slot.setVisible is only for display ads.');
                  else if ((a.log('Slot.setVisible', b), y !== b && (y = b)))
                    for (; 0 < t.length; )
                      (b = t.pop()), b.operation && b.operation.call(this, b.argument);
                },
                _play: function (a) {
                  p = p || a;
                  x.play(this);
                },
                onStartPlaying: function () {
                  this._onStartPlaying();
                },
                onStartReplaying: function () {
                  this._onStartPlaying();
                },
                onCompletePlaying: function () {
                  this._onCompletePlaying();
                },
                onCompleteReplaying: function () {
                  this._onCompletePlaying();
                },
                playNextAdInstance: function () {
                  a.log('Slot.playNextAdInstance ', r);
                  this._playNextAdInstance() || x.complete(this);
                },
                scheduleAdInstance: function () {
                  return (g = f.cloneForTranslation());
                },
                _clearScheduledAdInstance: function () {
                  g = null;
                },
                _onStartPlaying: function () {
                  r === a.TIME_POSITION_CLASS_MIDROLL &&
                    0 < h.length &&
                    b._requestContentVideoToPauseBySlot(this);
                  var c = a.EventCallback.getEventCallback(
                    k,
                    a.EVENT_SLOT_IMPRESSION,
                    a.EVENT_TYPE_IMPRESSION
                  );
                  c && c.process();
                  this.dispatchSlotEvent(a.EVENT_SLOT_STARTED);
                  this.playNextAdInstance();
                },
                dispatchSlotEvent: function (a) {
                  J || b.dispatchEvent(a, { slot: this });
                },
                _onCompletePlaying: function () {
                  p && p();
                  p = null;
                  t = [];
                  var c = a.EventCallback.getEventCallback(
                    k,
                    a.EVENT_SLOT_END,
                    a.EVENT_TYPE_IMPRESSION
                  );
                  c && c.process();
                  f = null;
                  this.dispatchSlotEvent(a.EVENT_SLOT_ENDED);
                  r === a.TIME_POSITION_CLASS_MIDROLL &&
                    0 < h.length &&
                    b._requestContentVideoToResumeBySlot(this);
                },
                _playNextAdInstance: function () {
                  if (
                    A ||
                    (x !== a.MediaPlayingState.instance && x !== a.MediaReplayingState.instance)
                  )
                    return !1;
                  this._commitScheduledAdInstance();
                  f = this._nextPlayableAdInstance();
                  if (!f) return !1;
                  f.reset();
                  f._isInitiatedSent ||
                    (f.getRendererController().processEvent({ name: a.EVENT_AD_INITIATED }),
                    (f._isInitiatedSent = !0));
                  f.getRendererController().play();
                  return !0;
                },
                _commitScheduledAdInstance: function () {
                  if (g) {
                    var a = f._parentAdInstancesGroup.indexOf(f);
                    0 <= a &&
                      ((g._parentAdInstancesGroup = f._parentAdInstancesGroup),
                      f._parentAdInstancesGroup.splice(a, 1, g),
                      (g = null));
                  }
                },
                _nextPlayableAdInstance: function () {
                  if (f) {
                    var b = f._parentAdInstancesGroup,
                      c = b.indexOf(f);
                    var d = h.indexOf(b);
                    0 <= d &&
                      0 <= c &&
                      (f._isImpressionSent || f._isSkipped || c === b.length - 1) &&
                      d++;
                  } else d = 0;
                  if (0 > d || d >= h.length) return null;
                  var e;
                  if (x === a.MediaPlayingState.instance)
                    for (b = h[d], e = 0; e < b.length; e++) {
                      if (((c = b[e]), c.getRendererController().playable())) return c;
                    }
                  else if (x === a.MediaReplayingState.instance)
                    for (; d < h.length; d++) {
                      b = h[d];
                      for (e = 0; e < b.length; e++)
                        if (((c = b[e]), c._isImpressionSent)) return c;
                      for (e = 0; e < b.length; e++)
                        if (
                          ((c = b[e]),
                          c.getRendererController().getRendererState() !==
                            a.RendererFailedState.instance && !c._translated)
                        )
                          return c;
                    }
                  return null;
                },
                toString: function () {
                  return '[Slot ' + c + ']';
                },
                getAdInstances: function () {
                  for (var a = [], b = 0; b < h.length; ++b)
                    for (var c = h[b], d = 0; d < c.length; ++d) {
                      var e = c[d];
                      if (e.isPlayable()) {
                        a.push(e);
                        break;
                      }
                    }
                  return a;
                },
                getPlayheadTime: function () {
                  for (var a = 0, b = this.getAdInstances(), c = 0; c < b.length; ++c)
                    if (b[c] === f) {
                      b = f.getPlayheadTime();
                      -1 < b && (a += b);
                      break;
                    } else {
                      var d = b[c].getDuration();
                      -1 < d && (a += d);
                    }
                  Q && a > Q && (a = Q);
                  return a;
                },
                getTotalDuration: function () {
                  if (d !== a.SLOT_TYPE_TEMPORAL) return -1;
                  for (var b = 0, c = this.getAdInstances(), e = 0; e < c.length; ++e) {
                    var f = c[e].getDuration();
                    -1 < f && (b += f);
                  }
                  return (Q = b);
                },
                playCompanionAds: function (b) {
                  a.log('Slot.playCompanionAds');
                  var c = [];
                  b._parentAdInstancesGroup = c;
                  c.push(b);
                  h.push(c);
                  J = !0;
                  f && this.stop();
                  this.play();
                },
                getState: function () {
                  return x;
                },
                setAcceptCompanion: function (a) {
                  G = a;
                },
                getAcceptCompanion: function () {
                  return G;
                },
                setInitialAdOption: function (a) {
                  L = a;
                },
                getInitialAdOption: function () {
                  return L;
                },
              };
            };
            a.SurveyExtension = function () {
              this._surveyPingedIds = [];
            };
            a.SurveyExtension.prototype = {
              init: function (b) {
                this._context = b;
                a.log(
                  'SurveyExtension.init(' + Array.prototype.slice.call(arguments).join(',') + ')'
                );
                this._onAdStarted = a.Util.bind(this, function (b) {
                  this._parameters = this._getParameters();
                  if (this._parameters.enabled) {
                    a.log('SurveyExtension.onAdStarted()');
                    var c = b.adInstance;
                    if (-1 < this._surveyPingedIds.indexOf(c.getAdId()))
                      a.log("won't pingback survey since it has been pinged back");
                    else {
                      var e = c._creative.getParameter('_fw_survey_url');
                      if (e)
                        try {
                          a.log('append' + e + ' to head');
                          var f = document.getElementsByTagName('head')[0],
                            g = document.createElement('script');
                          g.setAttribute('type', 'text/javascript');
                          g.setAttribute('src', e);
                          f.appendChild(g);
                          this._surveyPingedIds.push(c.getAdId());
                        } catch (h) {
                          a.warn('Append survey to head', b.type, h);
                        }
                    }
                  }
                });
                this._context.addEventListener(a.EVENT_AD_IMPRESSION, this._onAdStarted);
              },
              dispose: function () {
                a.log('SurveyExtension.dispose()');
                this._context.removeEventListener(a.EVENT_AD_IMPRESSION, this._onAdStarted);
                this._parameters = this._onAdStarted = null;
              },
              _getParameters: function () {
                var b = {};
                b.enabled =
                  'false' !== this._context.getParameter(a.PARAMETER_EXTENSION_SURVEY_ENABLED);
                a.log(b);
                return b;
              },
            };
            a.SurveyExtension.prototype.constructor = a.SurveyExtension;
            a.Timer = function (a, c) {
              this._lastTickDate = new Date();
              this._duration = a || -1;
              this._playheadTime = -1;
              this._callback = c;
              this._state = -1;
            };
            a.Timer.prototype = {};
            a.Timer.prototype.constructor = a.Timer;
            a.Util.mixin(a.Timer.prototype, {
              tick: function () {
                var a = new Date(),
                  c = Math.round((a.getTime() - this._lastTickDate.getTime()) / 1000);
                this._lastTickDate = a;
                return c;
              },
              start: function () {
                if (0 !== this._state) {
                  if (2 === this._state || -1 === this._playheadTime) this._playheadTime = 0;
                  this._state = 0;
                  this._timeStamp = new Date();
                  this._timeouter &&
                    (window.clearTimeout(this._timeouter), (this._timeouter = null));
                  var a = this,
                    c = 1000 * (this._duration - this._playheadTime);
                  0 > c ||
                    (this._timeouter = window.setTimeout(function () {
                      a.stop();
                      a._playheadTime = a._duration;
                      a._callback && a._callback();
                    }, c));
                }
              },
              pause: function () {
                0 === this._state &&
                  ((this._state = 1),
                  this._timeouter &&
                    (window.clearTimeout(this._timeouter), (this._timeouter = null)),
                  (this._playheadTime =
                    (new Date() - this._timeStamp) / 1000 + this._playheadTime));
              },
              stop: function () {
                this._state = 2;
                this._timeouter &&
                  (window.clearTimeout(this._timeouter), (this._timeouter = null));
                this._playheadTime = (new Date() - this._timeStamp) / 1000 + this._playheadTime;
              },
              getPlayheadTime: function () {
                return 0 === this._state
                  ? (new Date() - this._timeStamp) / 1000 + this._playheadTime
                  : this._playheadTime;
              },
              getCTValue: function () {
                return (new Date() - this._timeStamp) / 1000;
              },
              getDuration: function () {
                return this._duration;
              },
            });
            a.VastTranslator = function () {
              this._rendererController = this._request = null;
            };
            a.VastTranslator.prototype = {
              start: function (b) {
                function c (b) {
                  a.log('VastTranslator\t' + b);
                }
                function d (b) {
                  a.warn('VastTranslator\t' + b);
                }
                function e (a, b) {
                  if (a)
                    if (a.length && 'string' !== typeof a)
                      for (var c = 0; c < a.length; c++) b(a[c].value);
                    else a.value && b(a.value);
                }
                function f (a, b) {
                  e(b, function (b) {
                    b && a.push(b);
                  });
                }
                function g (b) {
                  if (!b) return !1;
                  for (var c = 0; c < A.length; c++)
                    if (a.Util.trim(A[c]).toLowerCase() === a.Util.trim(b).toLowerCase())
                      return !0;
                  return !1;
                }
                function h (b) {
                  if (!b) return null;
                  'string' !== typeof b && (b = b.toString());
                  b = a.Util.trim(b);
                  return -1 < b.indexOf('://') ? b : null;
                }
                function k (a) {
                  this.code = this.url = null;
                  this.height = this.width = NaN;
                  this.resourceType = this.creativeType = null;
                  this.bitrate = NaN;
                  this.creativeApi = null;
                  this.ad = a;
                  this.clickThrough = null;
                  this.clickTrackings = [];
                  this.customClicks = [];
                  this.creativeData = null;
                }
                function l () {
                  this.creativeView = [];
                  this.start = [];
                  this.firstQuartile = [];
                  this.midpoint = [];
                  this.thirdQuartile = [];
                  this.complete = [];
                  this.mute = [];
                  this.unmute = [];
                  this.pause = [];
                  this.rewind = [];
                  this.resume = [];
                  this.replay = [];
                  this.fullscreen = [];
                  this.expand = [];
                  this.collapse = [];
                  this.acceptInvitation = [];
                  this.stop = [];
                }
                function p (a) {
                  this._impressions = [];
                  this.clickThrough = null;
                  this.clickTrackings = [];
                  this.customClicks = [];
                  this.creativeData = null;
                  this.sequence = -1;
                  this.universalAdId = null;
                  this.vastRenditions = [];
                  this.duration = NaN;
                  this.adp = a;
                  this.isDrivingAd = !1;
                }
                function x (a) {
                  p.call(this, a);
                }
                function w (a) {
                  p.call(this, a);
                }
                function r (a) {
                  p.call(this, a);
                }
                function P () {}
                function m (a, b, d, e) {
                  if (a && e && 0 < e.length) {
                    c('augmentCallbacks(' + b + ', ' + d + ', ' + e + ')');
                    for (var f = a.getEventCallbackUrls(b, d), n = 0; n < f.length; n++)
                      -1 < e.indexOf(f[n]) &&
                        (c('augmentCallbacks() url = ' + f[n]), e.unshift(f[n]));
                    a.addEventCallbackUrls(b, d, e);
                  } else c('augmentCallbacks(' + b + ', ' + d + ', ' + e + '), empty callbacks');
                }
                function K (b, d) {
                  c('initErrorTrackings()');
                  b && d && m(b, a.EVENT_ERROR, a.EVENT_TYPE_ERROR, d.errorTrackings);
                }
                function F (b, d) {
                  c('initTrackingEvents()');
                  d &&
                    b &&
                    (m(b, a.EVENT_AD_IMPRESSION, a.EVENT_TYPE_IMPRESSION, d.creativeView),
                    m(b, a.EVENT_AD_IMPRESSION, a.EVENT_TYPE_IMPRESSION, d.start),
                    m(b, a.EVENT_AD_FIRST_QUARTILE, a.EVENT_TYPE_IMPRESSION, d.firstQuartile),
                    m(b, a.EVENT_AD_MIDPOINT, a.EVENT_TYPE_IMPRESSION, d.midpoint),
                    m(b, a.EVENT_AD_THIRD_QUARTILE, a.EVENT_TYPE_IMPRESSION, d.thirdQuartile),
                    m(b, a.EVENT_AD_COMPLETE, a.EVENT_TYPE_IMPRESSION, d.complete),
                    m(b, a.EVENT_AD_MUTE, a.EVENT_TYPE_STANDARD, d.mute),
                    m(b, a.EVENT_AD_UNMUTE, a.EVENT_TYPE_STANDARD, d.unmute),
                    m(b, a.EVENT_AD_PAUSE, a.EVENT_TYPE_STANDARD, d.pause),
                    m(b, a.EVENT_AD_RESUME, a.EVENT_TYPE_STANDARD, d.resume),
                    m(b, a.EVENT_AD_REWIND, a.EVENT_TYPE_STANDARD, d.rewind),
                    m(b, a.EVENT_AD_EXPAND, a.EVENT_TYPE_STANDARD, d.fullscreen),
                    m(b, a.EVENT_AD_COLLAPSE, a.EVENT_TYPE_STANDARD, d.collapse),
                    m(b, a.EVENT_AD_EXPAND, a.EVENT_TYPE_STANDARD, d.expand),
                    m(b, a.EVENT_AD_CLOSE, a.EVENT_TYPE_STANDARD, d.stop),
                    m(b, a.EVENT_AD_ACCEPT_INVITATION, a.EVENT_TYPE_STANDARD, d.acceptInvitation));
                }
                function H (b, d, e, f, g) {
                  c('initClickAndImpressionEvents');
                  if (b) {
                    d && b.setClickThroughUrl(a.EVENT_AD_CLICK, d);
                    e && 0 < e.length && m(b, a.EVENT_AD_CLICK, a.EVENT_TYPE_CLICK_TRACKING, e);
                    if (f && 0 < f.length)
                      for (d = 0; d < f.length; d++)
                        f[d].url && m(b, f[d].id, a.EVENT_TYPE_CLICK_TRACKING, [f[d].url]);
                    g && m(b, a.EVENT_AD_IMPRESSION, a.EVENT_TYPE_IMPRESSION, g);
                  }
                }
                function I (a, b) {
                  c('initTemporalAdInstance');
                  a || d('initTemporalAdInstance: Invalid adInstance');
                  if (b.selectedDrivingAd) {
                    b.surveyUrl && a._creative.setParameter('_fw_survey_url', b.surveyUrl);
                    var e = b.selectedDrivingAd,
                      f = b.selectedDrivingRenditions;
                    c('vastRenditions:' + f);
                    for (var n = 4 === L, h = 0; h < f.length; h++) {
                      var k = a.addCreativeRendition();
                      var u = k.addCreativeRenditionAsset('VAST_CRA', !0);
                      var l = f[h];
                      a: {
                        var m = l.creativeType;
                        switch (m) {
                          case 'video/mp4':
                            m = 'video/mp4-h264';
                            break a;
                          case 'video/3gp':
                            m = 'video/3gpp';
                        }
                      }
                      c(
                        'initTemporalAdInstance() set rendition/asset [vastRd.creativeApi,vastAd.duration,vastRd.width,vastRd.height,vastRd.url,assetContentType,vastRd.creativeType] =  ' +
                          [l.creativeApi, e.duration, l.width, l.height, l.url, m, l.creativeType]
                      );
                      k.setCreativeApi(l.creativeApi);
                      isNaN(e.duration) || k.setDuration(e.duration);
                      l.width && !isNaN(l.width) && k.setWidth(l.width);
                      l.height && !isNaN(l.height) && k.setHeight(l.height);
                      e.universalAdId && k.setUniversalAdId(e.universalAdId);
                      l.url && u.setUrl(l.url);
                      l.code && u.setContent(l.code);
                      u.setMimeType(l.creativeType);
                      'static' === l.resourceType && 'text/html' === l.creativeType
                        ? u.setContentType('text/html_doc_ref')
                        : 'application/x-javascript' === l.creativeType ||
                          'application/javascript' === l.creativeType
                        ? u.setContentType('text/js_ref')
                        : 'iframe' === l.resourceType
                        ? u.setContentType('text/html_doc_ref')
                        : 'text/html' === l.creativeType || 'text/html_doc_ref' === l.creativeType
                        ? u.setContentType('text/html_doc_ref')
                        : 'text/html_doc_lit_mobile' === l.creativeType
                        ? u.setContentType('text/html_doc_lit_mobile')
                        : n || g(m)
                        ? (u.setContentType('text/html_doc_lit_mobile'),
                          u.setUrl(null),
                          u.setContent(v(a, G.getCustomId(), e, l, 'text/html_doc_lit_mobile')))
                        : u.setContentType(m);
                      e.creativeData &&
                        0 !== e.creativeData.length &&
                        (c(
                          'initTemporalAdInstance(), set asset parameter creativeData:' +
                            e.creativeData
                        ),
                        k.setParameter('creativeData', e.creativeData));
                      n ||
                        g(m) ||
                        ((l = l.bitrate),
                        !isNaN(l) && 0 < l && u.setBytes((1000 * l * e.duration) / 8));
                      m = T;
                      u = N;
                      l = !1;
                      if (k.getContentType() && m) {
                        var D = k.getContentType().toLowerCase(),
                          p = m.toLowerCase();
                        if (D === p) l = !0;
                        else if (
                          (0 === D.indexOf('video/mp4') && 0 === p.indexOf('video/mp4')) ||
                          ('application/javascript' === p && 'text/js_ref' === D)
                        )
                          k.setContentType(m), (l = !0);
                      }
                      m = !1;
                      k.getCreativeApi() &&
                        u &&
                        ((D = k.getCreativeApi().toLowerCase()),
                        (p = u.toLowerCase()),
                        D === p
                          ? (m = !0)
                          : 0 === D.indexOf('mraid') &&
                            0 === p.indexOf('mraid') &&
                            ((m = !0), k.setCreativeApi(u)));
                      l && m
                        ? k.setPreference(10)
                        : m
                        ? k.setPreference(6)
                        : l
                        ? k.setPreference(5)
                        : k.setPreference(0);
                      c(
                        'adjustMatchedRendition ' +
                          k.getId() +
                          ', contentType ' +
                          k.getContentType() +
                          ', creativeAPI ' +
                          k.getCreativeApi() +
                          ', preference ' +
                          k.getPreference()
                      );
                    }
                    F(a, e.trackingEvents);
                    K(a, b);
                    H(
                      a,
                      n ? f[0].clickThrough : e.clickThrough,
                      e.clickTrackings,
                      e.customClicks,
                      e.impressions
                    );
                  } else
                    (k = a.addCreativeRendition()),
                      k.setContentType('null/null'),
                      (u = k.addCreativeRenditionAsset('VAST_CRA', !0)),
                      u.setContentType('null/null');
                }
                function v (b, d, e, f, g) {
                  c('getCoadHTML, ad id = ' + b.getAdId());
                  return f.url && 0 < f.url.length
                    ? ((e = f.clickThrough) &&
                        0 < e.length &&
                        b.setClickThroughUrl(a.EVENT_AD_CLICK, e),
                      (b = b.getEventCallbackUrls(a.EVENT_AD_CLICK, a.EVENT_TYPE_CLICK)[0]),
                      a.HTMLAdGenerator.generateAd(
                        f.url,
                        b,
                        d,
                        f.width,
                        f.height,
                        f.creativeType,
                        g
                      ))
                    : f.code && 0 < f.code.length
                    ? 'script' === f.resourceType ||
                      'text/javascript' === f.resourceType ||
                      'text/js_ref' === f.resourceType ||
                      'application/x-javascript' === f.resourceType
                      ? a.HTMLAdGenerator.wrapJSCode(f.code, d, f.width, f.height)
                      : a.HTMLAdGenerator.wrapUnsafeHTML(f.code, d, f.width, f.height)
                    : null;
                }
                function M (b, d, e, f) {
                  c('initPageAdInstance ad:' + d.getAdId());
                  var g = e.vastRenditions[0];
                  if (g.url || g.code) {
                    var h = d.addCreativeRendition(),
                      n = h.addCreativeRenditionAsset('VAST_CRA', !0);
                    h.setCreativeApi(g.creativeApi);
                    h.setWidth(g.width);
                    h.setHeight(g.height);
                    ('static' === g.resourceType && 'text/html' === g.creativeType) ||
                    'iframe' === g.resourceType
                      ? (n.setContentType('text/html_doc_ref'), n.setUrl(g.url))
                      : 'HTML' === g.resourceType
                      ? (n.setContentType('text/html_doc_lit_mobile'),
                        n.setContent(
                          a.HTMLAdGenerator.wrapUnsafeHTML(
                            g.code,
                            b.getCustomId(),
                            g.width,
                            g.height
                          )
                        ))
                      : (n.setContentType('text/html_doc_lit_mobile'),
                        n.setContent(v(d, b.getCustomId(), e, g, 'text/html_doc_lit_mobile')));
                    n.setMimeType('text/html');
                  } else c('initPageAdInstance will add a tracking only companion ad');
                  F(d, e.trackingEvents);
                  K(d, f);
                  H(d, g.clickThrough, g.clickTrackings, g.customClicks, e.impressions);
                }
                function q (d) {
                  if (200 === d.status)
                    if (d.responseXML) {
                      var e = new P().parseAdData(d.responseXML);
                      if (e) {
                        c('scheduleVastAds');
                        if (e && 0 !== e.length)
                          if (((d = e[0].selectedPackage), (e = e[0].redirectPackage), !d && !e))
                            if ((c('scheduleVastAds(), no ads from vast response!!!'), J))
                              if (4 !== L)
                                t.onTranslatorFailed(
                                  a.ERROR_NO_AD_AVAILABLE,
                                  'Expecting linear ad but returned non-linear ad',
                                  a.ERROR_VAST_LINEARITY_NOT_MATCH
                                );
                              else
                                t.onTranslatorFailed(
                                  a.ERROR_NO_AD_AVAILABLE,
                                  'Expecting non-linear ad but returned linear ad',
                                  a.ERROR_VAST_LINEARITY_NOT_MATCH
                                );
                            else t.onTranslatorFailed(a.ERROR_NO_AD_AVAILABLE, 'wrapperUrl=' + C);
                          else if (!d && e) {
                            c(
                              'scheduleVastAds(), no ads scheduled, redirect to downstream Secondary Ad Server'
                            );
                            c('scheduleRedirect');
                            d = [];
                            var f = [];
                            d.push(G);
                            f.push({});
                            for (var g = z, h = e.selectedCompanionAds, n = 0; n < g.length; n++) {
                              var k = g[n];
                              h && h[k.getCustomId()] && (d.push(k), f.push(h[k.getCustomId()]));
                            }
                            (g = b.scheduleAdInstances(d)) &&
                              0 < g.length &&
                              ((h = g[0]),
                              (n = h.addCreativeRendition()),
                              n.setWrapperUrl(a.Util.transformUrlToProxy(e.tagUrl)),
                              n.setWrapperType(V),
                              n.setContentType(T),
                              n.setCreativeApi(N),
                              F(h, e.getTrackingEventsOfWrapper()),
                              K(h, e),
                              H(
                                h,
                                e.getClickThroughOfWrapper(),
                                e.getClickTrackingsOfWrapper(),
                                e.getCustomClicksOfWrapper(),
                                e.getImpressionOfWrapper()
                              ));
                            c('scheduleRedirect, schedule companion for redirect ad ' + e);
                            for (n = 1; n < g.length; n++)
                              if ((h = g[n])) (k = f[n]), k instanceof r && M(d[n], h, k, e);
                          } else {
                            if (d) {
                              c(
                                'scheduleVastAds(), ads returned from vast response, going to schedule them'
                              );
                              d.selectedDrivingAd
                                ? (c(
                                    'scheduleVastAds(), ads returned from vast response, going to schedule them with driving ad'
                                  ),
                                  (d.selectedDrivingAd.isDrivingAd = !0))
                                : c(
                                    'scheduleVastAds(), ads returned from vast response, going to schedule them without driving ad'
                                  );
                              c('scheduleAdPackage()');
                              e = [];
                              f = [];
                              e.push(G);
                              d.selectedDrivingAd && f.push(d.selectedDrivingAd);
                              g = z;
                              h = d.selectedCompanionAds;
                              for (n = 0; n < g.length; n++)
                                (k = g[n]),
                                  h &&
                                    h[k.getCustomId()] &&
                                    (e.push(k), f.push(h[k.getCustomId()]));
                              h = b.scheduleAdInstances(e);
                              if (0 < h.length) {
                                c(
                                  'scheduleAdPackage, scheduled ' +
                                    h.length +
                                    ' ads' +
                                    d.selectedDrivingAd
                                    ? ''
                                    : ', 1 of it is nullAd for pure companion ad schedule'
                                );
                                d.selectedDrivingAd ||
                                  c('Driving ad is not selected, will create a dummy null ad.');
                                d.selectedDrivingAd || (e.shift(), I(h.shift(), d));
                                for (n = 0; n < h.length; n++)
                                  if ((k = h[n])) {
                                    var l = f[n];
                                    l instanceof r ? M(e[n], k, l, d) : I(k, d);
                                  }
                                !d.selectedDrivingAd &&
                                  0 < g.length &&
                                  0 < d.companionAds.length &&
                                  0 === f.length &&
                                  (c(
                                    'found empty companion slots and companion ads in package, but none of them matches slot size'
                                  ),
                                  t.onTranslatorFailed(a.ERROR_UNMATCHED_SLOT_SIZE));
                              } else c('scheduleAdPackage, no ad scheduled.');
                            }
                          }
                        else c('no ads for scheduleVastAds');
                        t._request = null;
                        b.handleStateTransition(a.TRANSLATOR_STATE_STARTED);
                        b.handleStateTransition(a.TRANSLATOR_STATE_COMPLETED);
                      }
                    } else
                      t.onTranslatorFailed(
                        a.ERROR_PARSE,
                        'wrapperUrl=' + C,
                        a.ERROR_VAST_XML_PARSING
                      );
                  else if (400 <= d.status) t.onTranslatorFailed(a.ERROR_IO, 'wrapperUrl=' + C);
                }
                this._rendererController = b;
                var A = 'image/gif image/jpeg image/png text/html text/javascript text/html_doc_ref text/html_doc_lit_mobile application/x-javascript application/javascript'.split(
                    ' '
                  ),
                  J = !1,
                  y = b.getAdInstance(),
                  t = this,
                  G = y.getSlot(),
                  L = (function () {
                    if (!G) return 1;
                    switch (G.getTimePositionClass()) {
                      case a.TIME_POSITION_CLASS_PREROLL:
                      case a.TIME_POSITION_CLASS_MIDROLL:
                      case a.TIME_POSITION_CLASS_POSTROLL:
                        return 2;
                      case a.TIME_POSITION_CLASS_OVERLAY:
                        return 4;
                      case a.TIME_POSITION_CLASS_DISPLAY:
                        return G && !G.getBase() ? 8 : 1;
                      default:
                        return 1;
                    }
                  })(),
                  z = b.getCompanionSlots().filter(function (b) {
                    if (!b) return !1;
                    switch (b.getTimePositionClass()) {
                      case a.TIME_POSITION_CLASS_PREROLL:
                      case a.TIME_POSITION_CLASS_MIDROLL:
                      case a.TIME_POSITION_CLASS_PAUSE_MIDROLL:
                      case a.TIME_POSITION_CLASS_POSTROLL:
                        return !1;
                      default:
                        return !0;
                    }
                  });
                c(
                  'Checking CompanionSlots, length = ' +
                    z.length +
                    ', rendererController.getCompanionSlots().length = ' +
                    b.getCompanionSlots().length +
                    ', AdInstance.getCompanionSlots.length = ' +
                    y.getCompanionSlots().length
                );
                var T = y.getActiveCreativeRendition().getContentType(),
                  N = y.getActiveCreativeRendition().getCreativeApi() || 'None';
                this.log('ExpectedDrivingContentType:' + T + ', ExpectedDrivingAPI:' + N);
                var V = y.getActiveCreativeRendition().getWrapperType();
                k.prototype = {
                  init: function (a, b, c, d, e, f, g, h) {
                    this.log('init(' + [].slice.call(arguments, 0).join(',') + ')');
                    this.url = a;
                    this.width = 1 * b;
                    this.height = 1 * c;
                    this.creativeType = d;
                    this.resourceType = e;
                    this.bitrate = f;
                    var n;
                    if ((n = g) && 0 !== n.length)
                      switch (n.toLowerCase()) {
                        case 'flashvar':
                        case 'flashvars':
                          n = 'clickTag';
                          break;
                        case 'vpaid':
                          n = 'VPAID';
                          break;
                        case 'mraid':
                          n = 'MRAID-1.0';
                      }
                    else n = 'None';
                    this.creativeApi = n;
                    this.code = h || null;
                  },
                  log: function (b) {
                    a.log('VastTranslator.VastRendition\t' + b);
                  },
                  toString: function () {
                    var a = [],
                      b;
                    for (b in this)
                      this.hasOwnProperty(b) &&
                        'function' !== typeof this[b] &&
                        'ad' !== b &&
                        a.push(b + ':' + this[b]);
                    return a.join(',');
                  },
                };
                k.prototype.constructor = k;
                p.prototype = {
                  parse: function (b) {
                    this.log('parse()');
                    if (b.Duration)
                      if (b.Duration.value) {
                        var c = /(\d+):(\d+):(\d+)/.exec(b.Duration.value);
                        c
                          ? (this.duration = 3600 * c[1] + 60 * c[2] + 1 * c[3])
                          : this.warn('Failed to parse duration value for creative ' + b);
                      } else this.warn('No duration value set for creative ' + b);
                    b.VideoClicks &&
                      ((b.VideoClicks = [].concat(b.VideoClicks)),
                      a.Util.forEachOnArray(
                        b.VideoClicks,
                        function (a) {
                          a.ClickThrough &&
                            a.ClickThrough.value &&
                            (this.clickThrough = h(a.ClickThrough.value));
                          var b;
                          if (a.ClickTracking) {
                            a.ClickTracking = [].concat(a.ClickTracking);
                            for (var c = 0; c < a.ClickTracking.length; c++)
                              (b = h(a.ClickTracking[c].value)) && this.clickTrackings.push(b);
                          }
                          if (a.CustomClick)
                            for (
                              a.CustomClick = [].concat(a.CustomClick), c = 0;
                              c < a.CustomClick.length;
                              c++
                            ) {
                              var d = null;
                              a.CustomClick[c]['@attributes'] &&
                                (d = a.CustomClick[c]['@attributes'].id);
                              (b = h(a.CustomClick[c].value)) &&
                                this.customClicks.push({ id: d, url: b });
                            }
                        },
                        this
                      ));
                    b.MediaFiles &&
                      b.MediaFiles.MediaFile &&
                      ((b.MediaFiles.MediaFile = [].concat(b.MediaFiles.MediaFile)),
                      a.Util.forEachOnArray(
                        b.MediaFiles.MediaFile,
                        function (a) {
                          var b = h(a.value),
                            c = NaN,
                            d = NaN,
                            e = null,
                            f = 'None',
                            g = NaN;
                          a['@attributes'] &&
                            ((c = a['@attributes'].width || NaN),
                            (d = a['@attributes'].height || NaN),
                            (e = a['@attributes'].type),
                            (f = a['@attributes'].apiFramework || 'None'),
                            (g = a['@attributes'].bitrate || NaN));
                          b && -1 !== b.indexOf(':')
                            ? ((a = new k(this)),
                              a.init(b, c, d, e, '', g, f, null),
                              (a.clickThrough = this.clickThrough),
                              this.vastRenditions.push(a),
                              (isNaN(c) || isNaN(d)) &&
                                this.log('continue with missing [width,height]' + [c, d]))
                            : this.warn(
                                'will ignore this mediaFile because some required field is missing [url,width,height]:' +
                                  [b, c, d]
                              );
                        },
                        this
                      ));
                    b.TrackingEvents &&
                      this.parseTrackingEvents(b.TrackingEvents, this.setTrackingEvents());
                    b.AdParameters &&
                      (this.log('parse() got AdParameters:' + b.AdParameters.value),
                      (this.creativeData = b.AdParameters.value));
                    b.Companion &&
                      ((b.Companion = [].concat(b.Companion)),
                      a.Util.forEachOnArray(
                        b.Companion,
                        function (b) {
                          var c = null,
                            d = null,
                            e = '',
                            f = '',
                            n = null,
                            l = null,
                            S = !1;
                          b.CompanionClickThrough && (f = h(b.CompanionClickThrough.value));
                          b.StaticResource &&
                            ((c = h(b.StaticResource.value)),
                            b.StaticResource['@attributes'] &&
                              (d = b.StaticResource['@attributes'].creativeType),
                            (e = 'static'));
                          b.IFrameResource &&
                            (c = h(b.IFrameResource.value)) &&
                            ((d = 'text/html_doc_ref'), (e = 'iframe'));
                          b.HTMLResource &&
                            ((n = b.HTMLResource['#cdata-section'] || ''), (n = a.Util.trim(n))) &&
                            ((d = 'text/html_doc_lit_mobile'), (e = 'HTML'));
                          b.TrackingEvents && (l = b.TrackingEvents);
                          var u = new r(this.adp);
                          u.sequence = this.sequence;
                          u.clickThrough = f;
                          l && u.parseTrackingEvents(l, u.setTrackingEvents());
                          if (b['@attributes']) {
                            l = b['@attributes'].width || NaN;
                            var m = b['@attributes'].height || NaN;
                            b = b['@attributes'].apiFramework || 'None';
                            if (
                              (((c && -1 !== c.indexOf(':')) || n) &&
                                !isNaN(l) &&
                                !isNaN(m) &&
                                g(d)) ||
                              this.adp.isWrapper
                            ) {
                              var D = new k(u);
                              D.init(c, l, m, d, e, NaN, b, n);
                              D.clickThrough = f;
                              u.vastRenditions.push(D);
                            } else
                              (S = !0),
                                this.warn(
                                  'will ignore this rendition because some required fields is missing or incompatible [creativeType,url,code,width,height]:' +
                                    [d, c, n, l, m]
                                );
                          } else
                            this.adp.isWrapper ||
                              ((S = !0),
                              this.warn(
                                'for InLine ad package, No attributes found for the Companion ads:' +
                                  b
                              ));
                          S
                            ? this.adp.isWrapper && this.adp.companionAds.push(u)
                            : this.adp.companionAds.push(u);
                        },
                        this
                      ));
                    b.NonLinear &&
                      ((b.NonLinear = [].concat(b.NonLinear)),
                      a.Util.forEachOnArray(
                        b.NonLinear,
                        function (b) {
                          var c = null,
                            d = null,
                            e = '',
                            f = '',
                            n = '',
                            l = null,
                            u = !1;
                          b.AdParameters && (n = b.AdParameters.value);
                          b.NonLinearClickThrough && (f = h(b.NonLinearClickThrough.value));
                          b.StaticResource &&
                            ((c = h(b.StaticResource.value)),
                            b.StaticResource['@attributes'] &&
                              (d = b.StaticResource['@attributes'].creativeType),
                            (e = 'static'));
                          b.IFrameResource &&
                            ((c = h(b.IFrameResource.value)),
                            (d = 'text/html_doc_ref'),
                            (e = 'iframe'));
                          b.HTMLResource &&
                            ((l = b.HTMLResource['#cdata-section'] || ''),
                            (l = a.Util.trim(l)),
                            (d = 'text/html_doc_lit_mobile'),
                            (e = 'HTML'));
                          var m = new w(this.adp);
                          m.sequence = this.sequence;
                          m.clickThrough = f;
                          m._trackingEvents = this._trackingEvents;
                          n && (m.creativeData = n);
                          if (b['@attributes']) {
                            n = b['@attributes'].width || NaN;
                            var S = b['@attributes'].height || NaN;
                            b = b['@attributes'].apiFramework || 'None';
                            if ((!c && !l) || isNaN(n) || isNaN(S) || !g(d))
                              (u = !0),
                                this.warn(
                                  'will ignore this rendition because some required fields is missing or incompatible:[creativeType,url,code,width,height]:' +
                                    [d, c, l, n, S]
                                );
                            else {
                              var D = new k(m);
                              D.init(c, n, S, d, e, NaN, b, l);
                              D.clickThrough = f;
                              m.vastRenditions.push(D);
                            }
                          } else
                            this.adp.isWrapper ||
                              ((u = !0),
                              this.warn(
                                'for InLine ad package, No attributes found for the NonLinear ads:' +
                                  b
                              ));
                          this.adp.nonLinearAds.push(m);
                          u
                            ? this.adp.isWrapper && this.adp.nonLinearAds.push(m)
                            : this.adp.nonLinearAds.push(m);
                        },
                        this
                      ));
                  },
                  parseLinears: function (a) {
                    2 !== L
                      ? (this.log('TargetAdType != TARGET_LINEAR, skipping parse'), (J = !0))
                      : this.parse(a);
                  },
                  parseNonLinears: function (a) {
                    4 !== L
                      ? (this.log('TargetAdType != TARGET_NONLINEAR, skipping parse'), (J = !0))
                      : this.parse(a);
                  },
                  parseCompanionAds: function (a) {
                    this.parse(a);
                  },
                  setTrackingEvents: function () {
                    this._trackingEvents || (this._trackingEvents = new l());
                    return this._trackingEvents;
                  },
                  parseTrackingEvents: function (b, c) {
                    this.log('parseTrackingEvents');
                    b.Tracking &&
                      ((b.Tracking = [].concat(b.Tracking)),
                      a.Util.forEachOnArray(
                        b.Tracking,
                        function (a) {
                          var b = a['@attributes'].event;
                          if ((a = h(a.value)))
                            switch (b) {
                              case 'creativeView':
                              case 'start':
                              case 'firstQuartile':
                              case 'midpoint':
                              case 'thirdQuartile':
                              case 'complete':
                              case 'mute':
                              case 'unmute':
                              case 'pause':
                              case 'resume':
                              case 'rewind':
                              case 'replay':
                              case 'fullscreen':
                              case 'expand':
                              case 'collapse':
                              case 'acceptInvitation':
                              case 'stop':
                                c[b].push(a);
                                break;
                              case 'close':
                                c.stop.push(a);
                            }
                        },
                        this
                      ));
                  },
                  toString: function () {
                    return this.constructor.name + ', renditions:' + this.vastRenditions;
                  },
                  log: function (b) {
                    a.log('VastTranslator.' + this.constructor.name + '\t' + b);
                  },
                  warn: function (b) {
                    a.warn('VastTranslator.' + this.constructor.name + '\t' + b);
                  },
                };
                var E =
                  Object.defineProperty ||
                  function (a, b, c) {
                    c.get && a.__defineGetter__(b, c.get);
                    c.set && a.__defineSetter__(b, c.set);
                  };
                E(p.prototype, 'trackingEvents', {
                  get: function () {
                    this.log('get trackingEvents()');
                    return this._trackingEvents
                      ? this._trackingEvents
                      : this.isDrivingAd
                      ? this.adp.trackingEvents
                      : null;
                  },
                });
                E(p.prototype, 'impressions', {
                  set: function (a) {
                    this._impressions = a;
                  },
                  get: function () {
                    return this.isDrivingAd
                      ? this._impressions.concat(this.adp.impressions)
                      : this._impressions;
                  },
                });
                p.prototype.constructor = p;
                x.prototype = new p();
                x.prototype.constructor = x;
                w.prototype = new p();
                w.prototype.constructor = w;
                r.prototype = new p();
                r.prototype.getPrimaryRendition = function () {
                  return this.vastRenditions[0] || null;
                };
                E(r.prototype, 'impressions', {
                  get: function () {
                    return 8 === L
                      ? this._impressions.concat(this.adp.impressions)
                      : this._impressions;
                  },
                });
                r.prototype.constructor = r;
                var R = function () {
                  this.impressions = [];
                  this.errorTrackings = [];
                  this.linearAds = [];
                  this.nonLinearAds = [];
                  this.companionAds = [];
                  this.extensions = [];
                  this.tagUrl = '';
                  this.isWrapper = !1;
                  this.surveyUrl = null;
                  this.selectedDrivingRenditions = [];
                  this.selectedDrivingAd = null;
                  this.selectedCompanionAds = {};
                };
                R.prototype = {
                  parse: function (a) {
                    this.log('parse(' + a + ')');
                    if (a)
                      if (this.isWrapper || (a.Creatives && a.Creatives.Creative)) {
                        a.Creatives = a.Creatives || [];
                        f(this.impressions, a.Impression);
                        f(this.extensions, a.Extensions);
                        f(this.errorTrackings, a.Error);
                        this.isWrapper &&
                          a.VASTAdTagURI &&
                          (this.tagUrl = a.VASTAdTagURI.value || '');
                        a.Survey &&
                          a.Survey.value &&
                          0 < a.Survey.value.length &&
                          (this.surveyUrl = a.Survey.value);
                        a.Creatives.Creative = a.Creatives.Creative
                          ? [].concat(a.Creatives.Creative)
                          : [];
                        for (var b = 0; b < a.Creatives.Creative.length; b++) {
                          var c = a.Creatives.Creative[b],
                            d = -1;
                          c['@attributes'] && ((d = c['@attributes'].sequence || -1), (d *= 1));
                          if (c.Linear) {
                            var e = new x(this);
                            e.sequence = d;
                            e.parseLinears(c.Linear);
                            this.linearAds.push(e);
                          } else
                            c.NonLinearAds
                              ? ((e = new w(this)),
                                (e.sequence = d),
                                e.parseNonLinears(c.NonLinearAds))
                              : c.CompanionAds &&
                                ((e = new r(this)),
                                (e.sequence = d),
                                e.parseCompanionAds(c.CompanionAds));
                          e && c.UniversalAdId
                            ? ((e.universalAdId = {
                                idRegistry: c.UniversalAdId['@attributes'].idRegistry,
                                idValue: c.UniversalAdId['@attributes'].idValue,
                              }),
                              this.log(
                                'Universal Ad ID with idRegistry ' +
                                  e.universalAdId.idRegistry +
                                  ' and idValue ' +
                                  e.universalAdId.idValue
                              ))
                            : this.log('No Universal Ad ID is present in the VAST response.');
                        }
                      } else this.warn('parse(): no creative found!');
                    else this.warn('parse(): empty adpackage');
                  },
                  testAndUpdatePackageForTemporalSlot: function (a) {
                    this.log('testAndUpdatePackageForTemporalSlot(' + a + ')');
                    a = a ? this.linearAds : this.nonLinearAds;
                    if (1 > a.length) return !1;
                    this.log(
                      'testAndUpdatePackageForTemporalSlot(), ads.length = ' + a.length + ''
                    );
                    var b = !1;
                    if (!b)
                      for (var c = 0; c < a.length; c++) {
                        var d = this.findRenditionGroupByContentType(a[c]);
                        if (0 < d.length) {
                          this.log(
                            'testAndUpdatePackageForTemporalSlot() : found driving ad and renditions group: ' +
                              d
                          );
                          this.selectedDrivingRenditions = d;
                          this.selectedDrivingAd = a[c];
                          b = !0;
                          break;
                        }
                      }
                    return b;
                  },
                  testAndUpdatePackageForPageSlots: function (a) {
                    var b = !1,
                      c = this.companionAds,
                      d = z.slice(0);
                    this.log(
                      'testAndUpdatePackageForPageSlots(' +
                        a +
                        '), ads are ' +
                        c.join(',') +
                        ', slots are ' +
                        d.join(',')
                    );
                    if (a) {
                      if (((a = this.matchAdsToSlots(c, d)), 0 < a.length))
                        for (b = !0, c = 0; c < a.length; c++) {
                          d = a[c];
                          var e = d.ad;
                          this.selectedCompanionAds[d.slot.getCustomId()] = e;
                        }
                    } else
                      (a = this.matchAdsToSlots(c, [G])),
                        1 === a.length
                          ? ((b = !0), (this.selectedDrivingAd = a[0].ad))
                          : (this.selectedDrivingAd = null);
                    return b;
                  },
                  renditionFitsInSlot: function (a, b) {
                    return a ? a.width <= b.getWidth() && a.height <= b.getHeight() : !1;
                  },
                  calcDeadSpaceRatio: function (a, b) {
                    a = a.getPrimaryRendition();
                    if (!a) return 0;
                    this.log(
                      'ad w,h  slot w,h' + [a.width, a.height, b.getWidth(), b.getHeight()]
                    );
                    return this.renditionFitsInSlot(a, b)
                      ? 1 - ((a.width * a.height) / b.getWidth()) * b.getHeight()
                      : 1;
                  },
                  matchAdsToSlots: function (a, b) {
                    this.log(
                      'matchAdsToSlots(ads=' + a.join(',') + ', slots=' + b.join(',') + ')'
                    );
                    for (var c = [], d = null, e = null, f = 1, g = 0; g < a.length; g++)
                      for (var h = a[g], k = 0; k < b.length; k++) {
                        var n = b[k],
                          l = this.calcDeadSpaceRatio(h, n);
                        l < f && ((d = h), (e = n), (f = l));
                      }
                    null != d &&
                      (c.push({ ad: d, slot: e }),
                      a.splice(a.indexOf(d), 1),
                      b.splice(b.indexOf(e), 1),
                      (c = c.concat(this.matchAdsToSlots(a, b))));
                    this.log(
                      'matchAdsToSlots: winningAd:' + d + ' winningSlot:' + e + ' ratio:' + f
                    );
                    return c;
                  },
                  getAllRenditions: function (a) {
                    return a.vastRenditions;
                  },
                  findRenditionGroupByContentType: function (b) {
                    this.log('findRenditionGroupByContentType:' + b);
                    var c = [];
                    if (b instanceof x && isNaN(b.duration))
                      return (
                        this.warn(
                          'findRenditionGroupByContentType(), duration of linear ad is NaN, will not used for scheduling'
                        ),
                        c
                      );
                    for (var d = this.getAllRenditions(b), e = 0; e < d.length; e++) {
                      var f = d[e];
                      if (b instanceof x) {
                        if (null == f.creativeType || '' === a.Util.trim(f.creativeType)) {
                          this.warn(
                            'findRenditionGroupByContentType, the contentType ' +
                              f.creativeType +
                              ' not supported for linearAd'
                          );
                          continue;
                        }
                      } else if (!g(f.creativeType)) {
                        this.warn(
                          'findRenditionGroupByContentType, the contentType ' +
                            f.creativeType +
                            ' not supported for non-linearAd'
                        );
                        continue;
                      }
                      c.push(f);
                    }
                    return c;
                  },
                  formalizeString: function (b) {
                    return b ? a.Util.trim(b).toLowerCase() : '';
                  },
                  getAdsByTargetType: function () {
                    this.log('getAdsByTargetType');
                    var a = [];
                    switch (L) {
                      case 8:
                        a = this.companionAds;
                        break;
                      case 2:
                        a = this.linearAds;
                        break;
                      case 4:
                        a = this.nonLinearAds;
                    }
                    for (var b = 0; b < a.length; b++) a[b].isDrivingAd = !0;
                    return a;
                  },
                  getImpressionOfWrapper: function () {
                    this.log('getImpressionOfWrapper');
                    for (var a = this.getAdsByTargetType(), b = null, c = 0; c < a.length; c++) {
                      var d = a[c];
                      if (d && d._impressions && 0 < d._impressions.length) {
                        b = d._impressions;
                        break;
                      }
                    }
                    b || (b = this.impressions);
                    return b;
                  },
                  getTrackingEventsOfWrapper: function () {
                    this.log('getTrackingEventsOfWrapper');
                    for (var a = this.getAdsByTargetType(), b = null, c = 0; c < a.length; c++) {
                      var d = a[c];
                      if (d && d._trackingEvents) {
                        b = d._trackingEvents;
                        break;
                      }
                    }
                    return b;
                  },
                  getClickThroughOfWrapper: function () {
                    this.log('getClickThroughOfWrapper');
                    for (var a = this.getAdsByTargetType(), b = null, c = 0; c < a.length; c++) {
                      var d = a[c];
                      if (d) {
                        d.clickThrough && (b = d.clickThrough);
                        d = d.vastRenditions;
                        for (var e = 0; e < d.length; e++) {
                          var f = d[e];
                          if (f.clickThrough) {
                            b = f.clickThrough;
                            break;
                          }
                        }
                        if (b) break;
                      }
                    }
                    return b;
                  },
                  getClickTrackingsOfWrapper: function () {
                    this.log('getClickTrackingsOfWrapper');
                    for (var a = this.getAdsByTargetType(), b = null, c = 0; c < a.length; c++) {
                      var d = a[c];
                      if (d) {
                        d.clickTrackings && 0 < d.clickTrackings.length && (b = d.clickTrackings);
                        d = d.vastRenditions;
                        for (var e = 0; e < d.length; e++) {
                          var f = d[e];
                          if (f.clickTrackings && 0 < f.clickTrackings.length) {
                            b = f.clickTrackings;
                            break;
                          }
                        }
                        if (b) break;
                      }
                    }
                    return b;
                  },
                  getCustomClicksOfWrapper: function () {
                    this.log('getCustomClicksOfWrapper');
                    for (var a = this.getAdsByTargetType(), b = null, c = 0; c < a.length; c++) {
                      var d = a[c];
                      if (d) {
                        d.customClicks && 0 < d.customClicks.length && (b = d.customClicks);
                        d = d.vastRenditions;
                        for (var e = 0; e < d.length; e++) {
                          var f = d[e];
                          if (f.customClicks && 0 < f.customClicks.length) {
                            b = f.customClicks;
                            break;
                          }
                        }
                        if (b) break;
                      }
                    }
                    return b;
                  },
                  testWrapperForRedirect: function () {
                    this.log('testAndUpdateWrapperForRedirect()');
                    return this.tagUrl && 0 < this.tagUrl.length;
                  },
                  log: function (b) {
                    a.log('VastTranslator.VastAdPackage\t' + b);
                  },
                  warn: function (b) {
                    a.warn('VastTranslator.VastAdPackage\t' + b);
                  },
                };
                R.prototype.constructor = R;
                P.prototype = {
                  getVastVersion: function (a) {
                    this.log('getVastVersion(' + a + ')');
                    return a && 0 !== a.indexOf('.')
                      ? 0 < a.indexOf('.')
                        ? parseInt(a.substring(0, a.indexOf('.')))
                        : parseInt(a)
                      : -1;
                  },
                  parseAdData: function (b) {
                    this.log('parseAdData()');
                    var c = {},
                      d;
                    c.selectedPackage = null;
                    c.redirectPackage = null;
                    var e = a.Util.xmlToJson(b);
                    if (e)
                      if (e.VAST && e.VAST['@attributes'])
                        if (
                          this.getVastVersion(e.VAST['@attributes'].version) <
                            a.MINIMUM_VAST_VERSION_SUPPORTED ||
                          this.getVastVersion(e.VAST['@attributes'].version) >
                            a.MAXIMUM_VAST_VERSION_SUPPORTED
                        )
                          t.onTranslatorFailed(
                            a.ERROR_PARSE,
                            'wrapperUrl=' + C,
                            a.ERROR_VAST_VERSION_NOT_SUPPORTED
                          );
                        else {
                          if (e.VAST.Ad) {
                            e.VAST.Ad = [].concat(e.VAST.Ad);
                            var f = [];
                            b = [];
                            for (d = 0; d < e.VAST.Ad.length; d++) {
                              var g = new R();
                              g.isWrapper = !!e.VAST.Ad[d].Wrapper;
                              g.isWrapper
                                ? (g.parse(e.VAST.Ad[d].Wrapper), b.push(g))
                                : (g.parse(e.VAST.Ad[d].InLine), f.push(g));
                            }
                            e = !1;
                            if (0 === f.length && 0 === b.length)
                              return this.log('parseAdData(): no ads from vast response!!!'), [c];
                            this.log(
                              'parseAdData(): ' +
                                f.length +
                                'inline ads, ' +
                                b.length +
                                ' wrapper ads.'
                            );
                            g = null;
                            for (d = 0; d < f.length; d++)
                              if (this.selectUsableAdsForDrivingSlot(f[d])) {
                                this.log('parseAdData(): package for driving slot is found!!!');
                                g = f[d];
                                break;
                              }
                            d =
                              0 < z.length &&
                              y.getSlot().getTimePositionClass() !== a.TIME_POSITION_CLASS_DISPLAY;
                            if (g)
                              d &&
                                this.selectUsableAdsCompanionSlots(g) &&
                                this.log(
                                  'parseAdData(): companion ads are found for companion slots, with driving slot'
                                ),
                                (c.selectedPackage = g);
                            else if (d) {
                              d = !1;
                              for (var h = 0; h < f.length; h++)
                                (g = f[h]),
                                  this.selectUsableAdsCompanionSlots(g) &&
                                    (this.log(
                                      'parseAdData(): companion ads are found for companion slots,without driving slot'
                                    ),
                                    (c.selectedPackage = g),
                                    (d = !0));
                              d ||
                                (this.log(
                                  'parseAdData(): companion ads are not found for companion slots,without driving slot'
                                ),
                                (e = !0));
                            } else
                              this.log('parseAdData(): no usable ads found in vast response!!!'),
                                (e = !0);
                            if (e && 0 < b.length)
                              for (f = 0; f < b.length; f++)
                                if (this.testWrapperForRedirect(b[f])) {
                                  c.redirectPackage = b[f];
                                  y.incrementWrapperCount();
                                  this.selectUsableAdsCompanionSlots(b[f]) &&
                                    this.log(
                                      'parseAdData(): companion ads are found for wrapper ad'
                                    );
                                  break;
                                }
                            return [c];
                          }
                          e.VAST.Error &&
                            m(y, a.EVENT_ERROR, a.EVENT_TYPE_ERROR, e.VAST.Error.value);
                          t.onTranslatorFailed(
                            a.ERROR_NO_AD_AVAILABLE,
                            'wrapperUrl=' + C,
                            a.ERROR_VAST_NO_AD
                          );
                        }
                      else
                        t.onTranslatorFailed(
                          a.ERROR_PARSE,
                          'wrapperUrl=' + C,
                          a.ERROR_VAST_SCHEMA_VALIDATION
                        );
                    else
                      t.onTranslatorFailed(
                        a.ERROR_PARSE,
                        'wrapperUrl=' + C,
                        a.ERROR_VAST_XML_PARSING
                      );
                  },
                  selectUsableAdsForDrivingSlot: function (a) {
                    this.log('selectUsableAdsForDrivingSlot()');
                    switch (L) {
                      case 2:
                        a = this.testAndUpdatePackageForTemporalSlot(a, !0);
                        break;
                      case 4:
                        a = this.testAndUpdatePackageForTemporalSlot(a, !1);
                        break;
                      case 8:
                        a = this.testAndUpdatePackageForPageSlots(a, !1);
                        break;
                      default:
                        a = !1;
                    }
                    return a;
                  },
                  selectUsableAdsCompanionSlots: function (a) {
                    this.log('selectUsableAdsCompanionSlots(pk)');
                    return this.testAndUpdatePackageForPageSlots(a, !0);
                  },
                  testAndUpdatePackageForTemporalSlot: function (a, b) {
                    this.log('testAndUpdatePackageForTemporalSlot(pk,isLinear), isLinear = ' + b);
                    return a.testAndUpdatePackageForTemporalSlot(b);
                  },
                  testAndUpdatePackageForPageSlots: function (a, b) {
                    this.log(
                      'testAndUpdatePackageForPageSlots(pk,isCompanion) isCompanion = ' + b
                    );
                    return a.testAndUpdatePackageForPageSlots(b);
                  },
                  testWrapperForRedirect: function (a) {
                    this.log('testWrapperForRedirect(pk)');
                    return a.testWrapperForRedirect();
                  },
                  log: function (b) {
                    a.log('VastTranslator.VastParser\t' + b);
                  },
                  warn: function (b) {
                    a.warn('VastTranslator.VastParser\t' + b);
                  },
                };
                var C = y.getActiveCreativeRendition().getWrapperUrl();
                E = y.getActiveCreativeRendition().getWrapperType();
                c(
                  'AdInstance.getActiveCreativeRendition().getWrapperUrl()=' +
                    C +
                    ', getWrapperType()=' +
                    E
                );
                if (0 !== E.indexOf('external/vast-'))
                  t.onTranslatorFailed(
                    a.ERROR_NO_RENDERER,
                    'wrapperType=' + E + ';wrapperUrl=' + C,
                    a.ERROR_VAST_TRACKING_ERROR
                  );
                else if (C && 0 !== C.length) {
                  var D = a.VAST_DEFAULT_MAX_WRAPPER_COUNT;
                  (E = b.getParameter(a.PARAMETER_VAST_MAX_WRAPPER_COUNT)) &&
                    0 < Number(E) &&
                    (D = Number(E));
                  if (y.getWrapperCount() >= D)
                    t.onTranslatorFailed(
                      a.ERROR_IO,
                      'maximum wrapper limit is reached ' + y.getWrapperCount(),
                      a.ERROR_VAST_WRAPPER_LIMIT_REACH
                    );
                  else {
                    D = b.getParameter('translator.vast.asyncLoad');
                    D = !0 === a.Util.str2bool(D);
                    c('will load vast xml, asyncAjax:' + D);
                    var U = b.getParameter('translator.vast.loadWithCookie');
                    U = !0 === a.Util.str2bool(U);
                    var B = null,
                      O = 5000;
                    (E = b.getParameter(a.PARAMETER_VAST_TIMEOUT_IN_MILLISECONDS)) &&
                      0 < Number(E) &&
                      (O = Number(E));
                    try {
                      window.XDomainRequest
                        ? ((B = new XDomainRequest()), (D = !0))
                        : ((B = new XMLHttpRequest()), (B.withCredentials = U)),
                        (t._request = B),
                        D
                          ? (B.open('GET', C),
                            window.XDomainRequest
                              ? (B.onload = function () {
                                  var a = new ActiveXObject('Microsoft.XMLDOM');
                                  a.async = !1;
                                  a.loadXML(B.responseText);
                                  B.responseXML = a;
                                  B.status = 200;
                                  q(B);
                                })
                              : ((B.timeout = O),
                                (B.onreadystatechange = function () {
                                  4 === B.readyState && q(B);
                                })),
                            (B.ontimeout = function () {
                              t.onTranslatorFailed(
                                a.ERROR_TIMEOUT,
                                'wrapperUrl=' + C + ' timed out.',
                                a.ERROR_VAST_URI_TIMEOUT
                              );
                            }),
                            (B.onerror = function () {
                              window.XDomainRequest && (B.status = 0);
                              0 === B.status
                                ? (d('CORS error'),
                                  t.onTranslatorFailed(a.ERROR_SECURITY, 'wrapperUrl=' + C))
                                : (d('exception:' + B.statusText),
                                  t.onTranslatorFailed(
                                    a.ERROR_UNKNOWN,
                                    'wrapperUrl=' + C + ';exception=' + B.statusText
                                  ));
                            }),
                            B.send())
                          : (B.open('GET', C, !1), B.send(), q(B));
                    } catch (n) {
                      E = !1;
                      if (!window.XMLHttpRequestException)
                        n.code === DOMException.NETWORK_ERR && (d('CORS in IE10'), (E = !0));
                      else if (n instanceof XMLHttpRequestException)
                        switch (n.code) {
                          case XMLHttpRequestException.NETWORK_ERR:
                            E = !0;
                        }
                      E
                        ? (d('CORS error:' + n),
                          t.onTranslatorFailed(a.ERROR_SECURITY, 'wrapperUrl=' + C))
                        : (d('exception:' + n),
                          t.onTranslatorFailed(
                            a.ERROR_UNKNOWN,
                            'wrapperUrl=' + C + ';exception=' + n
                          ));
                    }
                  }
                } else
                  t.onTranslatorFailed(
                    a.ERROR_NULL_ASSET,
                    'wrapperUrl=' + C,
                    a.ERROR_VAST_TRACKING_ERROR
                  );
              },
              info: function () {
                return { moduleType: a.MODULE_TYPE_TRANSLATOR };
              },
              log: function (b) {
                a.log('VastTranslator\t' + b);
              },
              warn: function (b) {
                a.warn('VastTranslator\t' + b);
              },
              getPlayheadTime: function () {
                return -1;
              },
              getDuration: function () {
                return -1;
              },
              stop: function () {
                a.debug('VastTranslator stop');
                this._request &&
                  (this._request.abort(), a.log('VastTranslator Stop: request aborted'));
                this._request = null;
                this._rendererController &&
                  this._rendererController.handleStateTransition(a.TRANSLATOR_STATE_COMPLETED);
              },
              onTranslatorFailed: function (b, c, d) {
                this._request && (this._request = null);
                var e = {};
                e[a.INFO_KEY_ERROR_MODULE] = 'VastTranslator';
                e[a.INFO_KEY_ERROR_CODE] = b;
                e[a.INFO_KEY_VAST_ERROR_CODE] = d;
                c && (e[a.INFO_KEY_ERROR_INFO] = c);
                this._rendererController.handleStateTransition(a.TRANSLATOR_STATE_FAILED, e);
              },
            };
            a.VastTranslator.prototype.constructor = a.VastTranslator;
            a.VideoAsset = function (b) {
              this._defaultTimeouts = [5, 10, 15, 30, 60, 120, 180, 300];
              this._context = b;
              this._internalState = a.MediaInitState.instance;
              this._eventCallback = this._state = '';
              this._callbackTimer = null;
              this._requestedVideoViewUrl = this._videoPlayPending = !1;
              this._dummyInstanceId = '';
              this._delay = 0;
              this._location = this._networkId = this._duration = this._customId = this._id = '';
              this._autoPlayType = null;
              this._fallbackId = '';
              this._viewRandom = 0;
              this._durationType = null;
              this._currentTpos = 0;
            };
            a.VideoAsset.prototype = {
              setVideoAsset: function (b, c, d, e, f, g, h, k, l) {
                if (b) {
                  switch (h) {
                    case a.ID_TYPE_FW:
                      h = this._id !== b;
                      this._id = b;
                      break;
                    case a.ID_TYPE_GROUP:
                      h = this._id !== 'g' + b;
                      this._id = 'g' + b;
                      break;
                    default:
                      (h = this._customId !== b), (this._customId = b);
                  }
                  h && (this._eventCallback = '');
                  'number' === typeof c && (this._duration = Math.round(10 * c) / 10);
                  0 < 1 * d && (this._networkId = 1 * d);
                  'string' === typeof e && (this._location = e);
                  'number' === typeof f && (this._autoPlayType = f);
                  0 < 1 * g && (this._viewRandom = 1 * g);
                  'number' === typeof k && 0 < k
                    ? (this._fallbackId = '' + k)
                    : 'string' === typeof k && (this._fallbackId = k.trim());
                  if (
                    l === a.VIDEO_ASSET_DURATION_TYPE_EXACT ||
                    l === a.VIDEO_ASSET_DURATION_TYPE_VARIABLE
                  )
                    this._durationType = l;
                  this._videoPlayPending && this.play();
                } else a.warn('AdRequest.setVideoAsset', 'id is required.');
              },
              setVideoAssetCurrentTimePosition: function (b) {
                !b || 0 > b
                  ? a.warn(
                      'AdRequest.setVideoAssetCurrentTimePosition',
                      'valid timePosition is required'
                    )
                  : (this._currentTpos = b);
              },
              setVideoState: function (b) {
                b === a.VIDEO_STATE_PLAYING
                  ? (this._state === a.VIDEO_STATE_PAUSED &&
                      this._context.dispatchEvent(a.EVENT_CONTENT_VIDEO_RESUMED),
                    this.play())
                  : b === a.VIDEO_STATE_PAUSED || b === a.VIDEO_STATE_STOPPED
                  ? (this.pause(),
                    b === a.VIDEO_STATE_PAUSED &&
                      this._state === a.VIDEO_STATE_PLAYING &&
                      this._context.dispatchEvent(a.EVENT_CONTENT_VIDEO_PAUSED))
                  : b === a.VIDEO_STATE_COMPLETED && this.complete();
                this._state = b;
              },
              callback: function (b) {
                this._eventCallback ? this._eventCallback.process() : (b = !0);
                b ||
                  ((b = this._defaultTimeouts.shift()) || (b = 300),
                  (this._callbackTimer = new a.Timer(b, a.Util.bind(this, this.callback))),
                  this._callbackTimer.start());
              },
              getPlayheadTime: function () {
                var a = this._delay;
                this._delay = 0;
                a += this._callbackTimer ? this._callbackTimer.getCTValue() : 0;
                return Math.floor(a);
              },
              play: function () {
                this._context._adManager._serverURL &&
                this._context._adManager._networkId &&
                (this._id || this._customId)
                  ? this._eventCallback
                    ? ((this._videoPlayPending = !1), this._internalState.play(this))
                    : this._requestedVideoViewUrl ||
                      ((this._requestedVideoViewUrl = !0),
                      this.requestForVideoViewCallback(),
                      this._callbackTimer ||
                        ((this._callbackTimer = new a.Timer()), this._callbackTimer.tick()))
                  : (a.warn(
                      'Server URL or Network ID or Video Asset id/customId is not set, delay video asset state change until these are provided.'
                    ),
                    (this._videoPlayPending = !0),
                    this._callbackTimer ||
                      ((this._callbackTimer = new a.Timer()), this._callbackTimer.tick()));
              },
              pause: function () {
                this._internalState.pause(this);
              },
              complete: function () {
                this._internalState.complete(this);
              },
              onStartPlaying: function () {
                this.callback();
              },
              onStartReplaying: function () {
                this.callback();
              },
              onPausePlaying: function () {
                this.callback(!0);
                this._callbackTimer.pause();
              },
              onResumePlaying: function () {
                this._callbackTimer.start();
              },
              onCompletePlaying: function () {
                this.callback(!0);
                this._callbackTimer.stop();
                this._callbackTimer = null;
                this._eventCallback = '';
                this._requestedVideoViewUrl = !1;
              },
              onCompleteReplaying: function () {
                this.onCompletePlaying();
              },
              setMediaState: function (a) {
                this._internalState = a;
              },
              requestPauseBySlot: function (b) {
                a.debug('requestPauseBySlot');
                this._internalState === a.MediaPlayingState.instance ||
                this._internalState === a.MediaReplayingState.instance
                  ? this._context.dispatchEvent(a.EVENT_CONTENT_VIDEO_PAUSE_REQUEST, { slot: b })
                  : a.debug(
                      'Not sending content pause request because content video state is',
                      JSON.stringify(this._internalState)
                    );
              },
              requestResumeBySlot: function (b) {
                a.debug('requestResumeBySlot');
                this._internalState === a.MediaPausedState.instance ||
                this._internalState === a.MediaReplayPausedState.instance
                  ? this._context.dispatchEvent(a.EVENT_CONTENT_VIDEO_RESUME_REQUEST, { slot: b })
                  : a.debug(
                      'Not sending content resume request because content video state is ',
                      JSON.stringify(this._internalState)
                    );
              },
              requestForVideoViewCallback: function () {
                var b = new a.Context(this._context._adManager);
                b._videoAsset = this;
                this._dummyInstanceId = b._instanceId;
                b = this._context._adRequest.generateVideoViewRequestUrlWithDummyContextInstanceId(
                  b._instanceId
                );
                var c = this;
                a.PLATFORM_SEND_REQUEST_BY_FORM
                  ? (a.debug('Context.submitRequest:', 'use json2'),
                    a.Util.pingURLWithForm(b, this._dummyInstanceId, !0),
                    (c._onMessagePosted = function (a) {
                      'object' === typeof a.data &&
                        a.data.hasOwnProperty('cbfn') &&
                        -1 < a.data.cbfn.indexOf("['Context_" + this._dummyInstanceId + "']") &&
                        c.requestComplete(a.data.response);
                    }),
                    window.addEventListener('message', c._onMessagePosted, !1))
                  : a.Util.pingURLWithScript(b);
              },
              requestComplete: function (b) {
                this._delay = this._callbackTimer.tick();
                this._callbackTimer = null;
                if (a.PLATFORM_SEND_REQUEST_BY_FORM) {
                  window.removeEventListener('message', this._onMessagePosted, !1);
                  var c = document.getElementById('_fw_request_iframe_' + this._dummyInstanceId);
                  document.body.removeChild(c);
                }
                null != b
                  ? ((a._instanceQueue['Context_' + this._dummyInstanceId] = null),
                    this.parse(a.Util.getObject('siteSection.videoPlayer.videoAsset', b) || {}),
                    this.play())
                  : a.warn('Failed to get video view callback url.');
              },
              parse: function (b) {
                if (b) {
                  this._customId = b.customId;
                  this._networkId = parseInt(b.networkId);
                  for (var c = 0, d = b.eventCallbacks || []; c < d.length; c++) {
                    b = d[c];
                    var e = a.EventCallback.newEventCallback(this._context, b.name, b.type);
                    if (e && b.name === a.EVENT_VIDEO_VIEW) {
                      e.parse(b);
                      this._eventCallback = e;
                      a.debug('Parsed video view url: ' + this._eventCallback._url);
                      break;
                    }
                  }
                }
              },
            };
            a.VideoRenderer = function () {
              this._adVideo = null;
              this._duration = this._playheadTime = -1;
              this._dragging = this._stopInvoked = this._isEnded = !1;
              this._volume = 1;
              this._rendererController = null;
              this._isBuffering = !1;
            };
            a.VideoRenderer.prototype = {
              pause: function () {
                this._rendererController &&
                  this._rendererController.processEvent({ name: a.EVENT_AD_PAUSE });
                this._adVideo && !this._adVideo.paused && this._adVideo.pause();
              },
              resume: function () {
                this._rendererController &&
                  this._rendererController.processEvent({ name: a.EVENT_AD_RESUME });
                this._adVideo && this._adVideo.paused && this._adVideo.play();
              },
              start: function (b) {
                this._rendererController = b;
                var c = b.getAdInstance(),
                  d = c.getSlot(),
                  e = this,
                  f = !1,
                  g = !1;
                if (a.PLATFORM_NOT_SUPPORT_VIDEO_AD)
                  this._onRendererFailed(a.ERROR_DEVICE_LIMIT, d.getTimePositionClass());
                else if (
                  a.PLATFORM_NOT_SUPPORT_MIDROLL_AD &&
                  d.getTimePositionClass() === a.TIME_POSITION_CLASS_MIDROLL
                )
                  this._onRendererFailed(a.ERROR_DEVICE_LIMIT, 'midroll');
                else {
                  a.log('VideoRenderer.start', d.getTimePositionClass(), c);
                  var h = b.getContentVideoElement(),
                    k = d.getVideoDisplaySize().width,
                    l = d.getVideoDisplaySize().height,
                    p = c.getRenderableCreativeRenditions(),
                    x = (k = new a.RenditionSelector(
                      b.getParameter(a.PARAMETER_DESIRED_BITRATE) || 1000,
                      b.getParameter('arWeight') || 1,
                      b.getParameter('pxWeight') || 1,
                      0.2
                    ).getBestFitRendition(p, k, l))
                      ? k.getPrimaryCreativeRenditionAsset()
                      : null;
                  if (x && p.length)
                    if (x.getUrl()) {
                      c.setActiveCreativeRendition(k);
                      a.log('VideoRenderer.start selected rendition is:', x.getUrl());
                      b.setCapability(a.EVENT_AD_QUARTILE, a.CAPABILITY_STATUS_ON);
                      b.setCapability(a.EVENT_AD_MUTE, a.CAPABILITY_STATUS_ON);
                      b.setCapability(a.EVENT_AD_PAUSE, a.CAPABILITY_STATUS_ON);
                      var w = !a.PLATFORM_NOT_SUPPORT_CLICK_FOR_VIDEO;
                      w || b.setCapability(a.EVENT_AD_CLICK, a.CAPABILITY_STATUS_OFF);
                      var r = a.PLATFORM_EVENT_CLICK,
                        P = a.MOBILE_EVENT_DRAG;
                      a.debug('VideoRenderer', 'use content video element');
                      h.controls = !1;
                      this._adVideo = h;
                      var m = null,
                        K = null,
                        F = null;
                      this._volume = b.getContext().getAdVolume();
                      this._adVideo.volume = this._volume;
                      this._adVideo.muted = 0 === this._volume;
                      var H = function (b) {
                          a.debug('VideoRenderer.checkTimeUpdate timeout');
                          O(b);
                        },
                        I = function () {
                          K && (clearTimeout(K), (K = null));
                        },
                        v = a.Util.bind(this, function (c) {
                          a.debug('onAdVideoBufferEmpty(): Ad video event ' + c.type);
                          c = b.getParameter(a.PARAMETER_RENDERER_VIDEO_PLAY_AFTER_STALLED);
                          null !== c &&
                            'undefined' !== typeof c &&
                            !1 !== a.Util.str2bool(c) &&
                            (a.debug('play the ad immediately after the stalled event'),
                            h && h._fw_videoAdPlaying && h.play());
                        }),
                        M = function (c) {
                          e._isBuffering ||
                            ((e._isBuffering = !0),
                            b.processEvent({ name: a.EVENT_AD_BUFFERING_START }),
                            a.debug('onAdVideoBufferingStarted(): Ad video event ' + c.type));
                        },
                        q = function (c) {
                          e._isBuffering &&
                            ((e._isBuffering = !1),
                            b.processEvent({ name: a.EVENT_AD_BUFFERING_END }),
                            a.debug('onAdVideoBufferingEnded(): Ad video event ' + c.type));
                        };
                      c = b.getParameter(a.PARAMETER_EXTENSION_AD_CONTROL_CLICK_ELEMENT);
                      var A = null;
                      c && (A = document.getElementById(c));
                      A || (A = h);
                      var J = a.Util.bind(this, function (c) {
                          if (h.paused && a.PLATFORM_NOT_FIRE_CLICK_WHEN_AD_VIDEO_PAUSED) h.play();
                          else {
                            var d = b.getParameter(a.PARAMETER_RENDERER_VIDEO_CLICK_DETECTION);
                            null == d && (d = 'true');
                            !1 !== a.Util.str2bool(d) &&
                              (g
                                ? (a.debug('Ad video event ' + c.type),
                                  this._dragging
                                    ? (this._dragging = !1)
                                    : b.processEvent({ name: a.EVENT_AD_CLICK }))
                                : a.debug('Ad not started, ignore click.'));
                          }
                        }),
                        y = a.Util.bind(this, function (b) {
                          a.debug('Ad video event ' + b.type);
                          this._dragging = !0;
                        }),
                        t,
                        G = function (c) {
                          a.debug(
                            'Ad video event ' +
                              c.type +
                              ' ended: ' +
                              h.ended +
                              ' playing:' +
                              h._fw_videoAdPlaying
                          );
                          if (
                            (h.ended && 0.2 > Math.abs(h.duration - h.currentTime)) ||
                            !h._fw_videoAdPlaying
                          )
                            t = setTimeout(function () {
                              a.warn('Force ad video end bc ad paused with ended = true');
                              c.type = 'ended';
                              N(c);
                            }, 200);
                          else {
                            var d = b.getParameter(
                              a.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE
                            );
                            null == d && (d = 'true');
                            !1 === a.Util.str2bool(d)
                              ? a.debug('Pause controls disabled')
                              : (h.controls = !0);
                            I();
                          }
                        },
                        L = function (b) {
                          a.debug('Ad video event ' + b.type);
                          h.controls = !1;
                        },
                        z = 0,
                        T = function (c) {
                          a.debug('Ad video event ' + c.type);
                          0 >= h.currentTime
                            ? a.debug(
                                'VideoRenderer.onAdVideoTimeUpdate currentTime is less than or 0'
                              )
                            : (I(),
                              h.paused ||
                                ((c =
                                  b.getParameter(
                                    a.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT
                                  ) || 8000),
                                (K = setTimeout(H, c, c + 'ms timeout when playing'))),
                              g ||
                                ((g = !0),
                                (e._playheadTime = h.currentTime),
                                0 > e._playheadTime && (e._playheadTime = 0),
                                m && (clearTimeout(m), (m = null)),
                                (e._quartileTimerId = setInterval(function () {
                                  var c = h.currentTime,
                                    d = h.duration;
                                  0 < c && (e._playheadTime = c);
                                  0 < d && (e._duration = d);
                                  'number' !== typeof c ||
                                    'number' !== typeof d ||
                                    F ||
                                    (c >= 0.25 * d &&
                                      1 > z &&
                                      (b.processEvent({ name: a.EVENT_AD_FIRST_QUARTILE }),
                                      (z = 1)),
                                    c >= 0.5 * d &&
                                      2 > z &&
                                      (b.processEvent({ name: a.EVENT_AD_MIDPOINT }), (z = 2)),
                                    c >= 0.75 * d &&
                                      3 > z &&
                                      (clearInterval(e._quartileTimerId),
                                      (e._quartileTimerId = null),
                                      b.processEvent({ name: a.EVENT_AD_THIRD_QUARTILE }),
                                      (z = 3)));
                                }, 1000)),
                                b.handleStateTransition(a.RENDERER_STATE_STARTED)));
                        };
                      this.dispose = a.Util.bind(this, function () {
                        N();
                      });
                      var N = function (c) {
                        var d = F;
                        c &&
                          c.type &&
                          (a.debug('Ad video event ' + c.type),
                          'error' === c.type &&
                            (a.warn(c.target.src), a.warn(c.target.currentSrc), q(c)));
                        I();
                        m && (clearTimeout(m), (m = null));
                        w && (A.removeEventListener(r, J, !1), A.removeEventListener(P, y, !1));
                        t && (clearTimeout(t), (t = null));
                        E && (document.removeEventListener('visibilitychange', E, !1), (E = null));
                        h.removeEventListener('ended', N, !1);
                        h.removeEventListener('error', N, !0);
                        h.removeEventListener('pause', G, !1);
                        h.removeEventListener('playing', L, !1);
                        h.removeEventListener('timeupdate', T, !1);
                        h.removeEventListener('stalled', v, !1);
                        h.removeEventListener('waiting', M, !1);
                        h.removeEventListener('canplay', q, !1);
                        h.paused || (a.debug('try pausing video before complete'), h.pause());
                        c &&
                          'error' === c.type &&
                          ((d = 'video error'),
                          (c = h.error || c.target.error) &&
                            (d = 'error:' + c + ',code:' + c.code));
                        d || (e._isEnded = !0);
                        a.log('VideoRenderer.complete');
                        f ||
                          ((f = !0),
                          delete h._fw_videoAdPlaying,
                          (e._adVideo = null),
                          e._quartileTimerId &&
                            (clearInterval(e._quartileTimerId), (e._quartileTimerId = null)),
                          d
                            ? e._onRendererFailed(null, d)
                            : (e._stopInvoked ||
                                (h.currentTime >= 0.25 * h.duration &&
                                  1 > z &&
                                  (b.processEvent({ name: a.EVENT_AD_FIRST_QUARTILE }), (z = 1)),
                                h.currentTime >= 0.5 * h.duration &&
                                  2 > z &&
                                  (b.processEvent({ name: a.EVENT_AD_MIDPOINT }), (z = 2)),
                                h.currentTime >= 0.75 * h.duration &&
                                  3 > z &&
                                  (b.processEvent({ name: a.EVENT_AD_THIRD_QUARTILE }), (z = 3)),
                                h.currentTime >= h.duration - 0.5 &&
                                  4 > z &&
                                  (b.processEvent({ name: a.EVENT_AD_COMPLETE }), (z = 4))),
                              (e._stopInvoked = !1),
                              b.handleStateTransition(a.RENDERER_STATE_COMPLETED)));
                        e._rendererController = null;
                      };
                      var O = function (b) {
                          F = b;
                          a.warn(F);
                          a.PLATFORM_WAIT_WHEN_AD_VIDEO_TIMEOUT || N();
                        },
                        E = function (c) {
                          a.log(
                            'onVisibilityChange:' + (document.hidden ? 'invisible' : 'visible')
                          );
                          document.hidden
                            ? h &&
                              !h.paused &&
                              (h.pause(),
                              b && b.processEvent({ name: a.EVENT_AD_PAUSE }),
                              m && (clearTimeout(m), (m = null)))
                            : h &&
                              h.paused &&
                              (h.play(),
                              b && b.processEvent({ name: a.EVENT_AD_RESUME }),
                              g ||
                                (!h._fw_fromVideoPool &&
                                  !a.PLATFORM_SUPPORT_VIDEO_START_DETECT_TIMEOUT) ||
                                ((c =
                                  b.getParameter(
                                    a.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT
                                  ) || 5000),
                                (m = setTimeout(O, c, c + 'ms timeout before playing'))));
                        };
                      h._fw_videoAdPlaying = !0;
                      var R = !1,
                        C = function () {
                          if (!R) {
                            R = !0;
                            w && (A.addEventListener(r, J, !1), A.addEventListener(P, y, !1));
                            h.addEventListener('ended', N, !1);
                            h.addEventListener('error', N, !0);
                            h.addEventListener('pause', G, !1);
                            h.addEventListener('playing', L, !1);
                            h.addEventListener('timeupdate', T, !1);
                            h.addEventListener('stalled', v, !1);
                            h.addEventListener('waiting', M, !1);
                            h.addEventListener('canplay', q, !1);
                            h.src = x.getUrl();
                            a.log('VideoRenderer play video ad ' + h.src);
                            h.load();
                            if (
                              h._fw_fromVideoPool ||
                              a.PLATFORM_SUPPORT_VIDEO_START_DETECT_TIMEOUT
                            ) {
                              var c =
                                b.getParameter(a.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT) ||
                                5000;
                              m = setTimeout(O, c, c + 'ms timeout before playing');
                            }
                            a.PLATFORM_VIDEO_DOESNOT_SUPPORT_TIMEUPDATE &&
                              b.handleStateTransition(a.RENDERER_STATE_STARTED);
                            c = 100;
                            0 < a.PLATFORM_ANDROID_VERSION &&
                              (c =
                                b.getParameter(a.PARAMETER_RENDERER_VIDEO_ANDROID_DELAY) || 100);
                            setTimeout(function () {
                              var c = h.play();
                              c &&
                                a.PLATFORM_BLOCKS_AUTOPLAY &&
                                c.catch(function (c) {
                                  if (
                                    (c && 'AbortError' === c.name) ||
                                    'NotAllowedError' === c.name
                                  )
                                    a.warn(
                                      'Blocked by browser, need player to display a start button. Details: %o',
                                      c
                                    ),
                                      m && (clearTimeout(m), (m = null)),
                                      d.setAutoPlayBlocked(!0),
                                      b.processEvent({
                                        name: a.EVENT_AD_AUTO_PLAY_BLOCKED,
                                        info: { apiOnly: !0 },
                                      });
                                });
                              document.hidden &&
                                h &&
                                (a.log('VideoRenderer pause ad when tab is invisible.'),
                                h &&
                                  !h.paused &&
                                  (h.pause(), b && b.processEvent({ name: a.EVENT_AD_PAUSE })),
                                m && (clearTimeout(m), (m = null)));
                            }, c);
                            document.addEventListener('visibilitychange', E, !1);
                          }
                        };
                      a.VideoRenderer._fw_playedDummyVideo ||
                      d.getTimePositionClass() !== a.TIME_POSITION_CLASS_PREROLL ||
                      !a.PLATFORM_PLAY_DUMMY_VIDEO_FOR_PREROLL ||
                      /\.webm$/.test(x.getUrl())
                        ? C()
                        : ((a.VideoRenderer._fw_playedDummyVideo = !0),
                          a.debug('play dummy video for iOS 3.2-4.1'),
                          (h.src = 'http://127.0.0.1:1/404.mp4'),
                          h.load(),
                          h.play(),
                          (h._fw_videoAdPlaying = !0),
                          h.addEventListener(
                            'error',
                            function () {
                              event.target.removeEventListener('error', h, !0);
                              C();
                            },
                            !0
                          ),
                          setTimeout(
                            C,
                            a.PLATFORM_NOT_WAIT_FOR_ERROR_WHEN_PLAY_DUMMY_VIDEO_FOR_PREROLL
                              ? 500
                              : 5000
                          ));
                    } else this._onRendererFailed(a.ERROR_NULL_ASSET);
                  else this._onRendererFailed(a.ERROR_DEVICE_LIMIT, 'no compatible asset');
                }
              },
              stop: function () {
                a.debug('VideoRenderer stop');
                this._stopInvoked = !0;
                this._adVideo &&
                  ((this._adVideo._fw_videoAdPlaying = !1), this._adVideo.pause(), this.dispose());
                this._rendererController = null;
              },
              info: function () {
                return { moduleType: a.MODULE_TYPE_RENDERER };
              },
              getPlayheadTime: function () {
                if (this._isEnded && 0 < this._duration) return this._duration;
                if (this._adVideo) {
                  var a = this._adVideo.currentTime;
                  if (0 < a) return a;
                }
                return this._playheadTime;
              },
              getDuration: function () {
                return this._duration;
              },
              setVolume: function (b) {
                a.debug('VideoRenderer setVolume(' + b + ')');
                this._adVideo
                  ? ((this._adVideo.volume = b),
                    (this._adVideo.muted = 0 === b),
                    this._volume !== b &&
                      this._rendererController.processEvent({ name: a.EVENT_AD_VOLUME_CHANGE }),
                    0 === this._volume && 0 !== b
                      ? this._rendererController.processEvent({ name: a.EVENT_AD_UNMUTE })
                      : 0 !== this._volume &&
                        0 === b &&
                        this._rendererController.processEvent({ name: a.EVENT_AD_MUTE }),
                    (this._volume = b))
                  : a.debug('VideoRenderer ad video is null, ignore.');
              },
              _onRendererFailed: function (b, c, d) {
                var e = {};
                e[a.INFO_KEY_ERROR_MODULE] = 'VideoRenderer';
                e[a.INFO_KEY_ERROR_CODE] = b;
                d || (d = a.ERROR_VAST_GENERAL_LINEAR_ERROR);
                e[a.INFO_KEY_VAST_ERROR_CODE] = d;
                c && (e[a.INFO_KEY_ERROR_INFO] = c);
                this._rendererController.handleStateTransition(a.RENDERER_STATE_FAILED, e);
              },
            };
            a.VideoRenderer.prototype.constructor = a.VideoRenderer;
            a.VideoStateExtension = function () {};
            a.VideoStateExtension.prototype = {
              _enabled: function () {
                if (null == this._context) return !1;
                var b = this._context.getParameter(a.PARAMETER_EXTENSION_VIDEO_STATE_ENABLED);
                null == b && (b = 'false');
                return !0 === a.Util.str2bool(b);
              },
              init: function (b) {
                this._context = b;
                this._enabled()
                  ? this._context.setVideoState(a.VIDEO_STATE_PLAYING)
                  : a.log('VideoStateExtension is disabled.');
              },
              dispose: function () {
                this._context = null;
              },
            };
            a.VideoStateExtension.prototype.constructor = a.VideoStateExtension;
            a.VPAIDWrapper = function () {
              this._creative = null;
              this._timeoutInMs = 0;
              this._eventHandlers = {};
              this._loadIntervalTimer = this._timeoutTimer = null;
              this._timeoutOperation = '';
              this.timeoutReached = !1;
              this._visibilityChangeListener = null;
            };
            a.VPAIDWrapper.prototype = {
              _isCreativeFunctionInvokable: function (a) {
                return this._creative ? (a = this._creative[a]) && 'function' === typeof a : !1;
              },
              checkVPAIDInterface: function (a) {
                for (var b = { passed: !0, missingInterfaces: '' }, d = a.length - 1; 0 <= d; d--)
                  this._isCreativeFunctionInvokable(a[d]) ||
                    ((b.passed = !1), (b.missingInterfaces += a[d] + ' '));
                return b;
              },
              loadCreativeAsset: function (b) {
                a.log('loadCreativeAsset(' + b + ')');
                var c = document.getElementById('vpaidFrame'),
                  d = document.createElement('iframe');
                d.id = 'vpaidFrame';
                null == c ? document.body.appendChild(d) : document.body.replaceChild(d, c);
                d.width = 0;
                d.height = 0;
                d.style.display = 'none';
                d.contentWindow.document.open();
                d.contentWindow.document.write(
                  '<script type="text/javascript" src="' + b + '"> </script>'
                );
                d.contentWindow.document.close();
                this._timeoutOperation = 'loadCreativeAsset';
                this._waitForTimeout();
                var e = this;
                this._loadIntervalTimer = setInterval(function () {
                  var b = document.getElementById('vpaidFrame').contentWindow.getVPAIDAd;
                  b &&
                    'function' === typeof b &&
                    (clearInterval(e._loadIntervalTimer),
                    (b = b()),
                    'undefined' === typeof b
                      ? a.debug('getVPAIDAd() returns undefined value')
                      : null == b
                      ? a.debug('getVPAIDAd() returns null')
                      : ((e._creative = b), e._eventHandlers.CreativeAssetLoaded()));
                }, 200);
              },
              setCallbacksForCreative: function (a, c) {
                for (var b in a) a.hasOwnProperty(b) && this._creative.subscribe(a[b], b, c);
              },
              removeCallbacksForCreative: function (a) {
                for (var b in a) a.hasOwnProperty(b) && this._creative.unsubscribe(a[b], b);
              },
              handshakeVersion: function (b) {
                a.log('VPAID Creative: handshakeVersion(' + b + ')');
                return this._creative.handshakeVersion(b);
              },
              initAd: function (b, c, d, e, f, g) {
                a.log('VPAID Creative: initAd()');
                this._timeoutOperation = 'initAd';
                this._waitForTimeout();
                this._creative.initAd(b, c, d, e, f, g);
              },
              startAd: function () {
                a.log('VPAID Creative: startAd()');
                this._timeoutOperation = 'startAd';
                this._waitForTimeout();
                this._creative.startAd();
                document.hidden &&
                  (a.log('VPAIDRenderer pause ad when tab is invisible'),
                  this._creative.pauseAd());
              },
              stopAd: function () {
                a.log('VPAID Creative: stopAd()');
                'startAd' === this._timeoutOperation
                  ? (clearTimeout(this._timeoutTimer),
                    (this._timeoutOperation = 'startAd and stopAd'))
                  : (this._timeoutOperation += 'stopAd');
                this._creative && (this._waitForTimeout(), this._creative.stopAd());
              },
              canPauseAd: function () {
                return this._isCreativeFunctionInvokable('pauseAd');
              },
              canResumeAd: function () {
                return this._isCreativeFunctionInvokable('resumeAd');
              },
              canResizeAd: function () {
                return this._isCreativeFunctionInvokable('resizeAd');
              },
              pauseAd: function () {
                this.canPauseAd() &&
                  (a.log('VPAID Creative: pauseAd()'), this._creative.pauseAd());
              },
              resumeAd: function () {
                this.canResumeAd() &&
                  (a.log('VPAID Creative: resumeAd()'), this._creative.resumeAd());
              },
              resizeAd: function (b, c, d) {
                this.canResizeAd()
                  ? (a.log('VPAID Creative: resizeAd()'), this._creative.resizeAd(b, c, d))
                  : a.log('The creative is not able to resize');
              },
              getAdVolume: function () {
                return this._isCreativeFunctionInvokable('getAdVolume')
                  ? this._creative.getAdVolume()
                  : -1;
              },
              setAdVolume: function (a) {
                this._isCreativeFunctionInvokable('setAdVolume') && this._creative.setAdVolume(a);
              },
              getAdExpanded: function () {
                return this._isCreativeFunctionInvokable('getAdExpanded')
                  ? this._creative.getAdExpanded()
                  : !1;
              },
              getAdRemainingTime: function () {
                return this._isCreativeFunctionInvokable('getAdRemainingTime')
                  ? this._creative.getAdRemainingTime()
                  : -1;
              },
              getAdDuration: function () {
                return this._isCreativeFunctionInvokable('getAdDuration')
                  ? this._creative.getAdDuration()
                  : -1;
              },
              getAdLinear: function () {
                return this._creative.getAdLinear();
              },
              getAdCompanions: function () {
                return this._isCreativeFunctionInvokable('getAdCompanions')
                  ? this._creative.getAdCompanions()
                  : '';
              },
              setTimeoutValueInMs: function (a) {
                this._timeoutInMs = a;
              },
              cancelTimeoutEvent: function () {
                var a = 'startAd and stopAd' !== this._timeoutOperation;
                clearTimeout(this._timeoutTimer);
                if (!a) {
                  this._timeoutOperation = 'startAd';
                  var c = this;
                  setTimeout(function () {
                    c._eventHandlers &&
                      c._eventHandlers.timeout &&
                      c._eventHandlers.timeout.call();
                  }, 500);
                }
              },
              addEventListener: function (a, c) {
                this._eventHandlers[a] = c;
              },
              removeEventListener: function (a) {
                this._eventHandlers[a] = null;
              },
              _waitForTimeout: function () {
                a.log('Wait for ' + this._timeoutOperation + ' for ' + this._timeoutInMs + 'ms');
                if (this._eventHandlers.timeout) {
                  var b = this;
                  this._timeoutTimer = setTimeout(function () {
                    b.timeoutReached || (b.timeoutReached = !0);
                    'startAd' === b._timeoutOperation
                      ? b.stopAd()
                      : ('loadCreativeAsset' === b._timeoutOperation &&
                          clearInterval(b._loadIntervalTimer),
                        b._eventHandlers &&
                          b._eventHandlers.timeout &&
                          b._eventHandlers.timeout.call());
                  }, this._timeoutInMs);
                }
              },
              getTimeoutOperation: function () {
                return this._timeoutOperation;
              },
            };
            a.VPAIDWrapper.prototype.constructor = a.VPAIDWrapper;
            a.VPAIDRenderer = function () {
              this.vpaidCreative = this.rendererController = null;
              this.vpaidVolume = this.vpaidDuration = -1;
              this.creativeEventCallbacks = {};
              this.isMuted = !1;
              this.adPlaybackState = '';
              this.creativeTimeoutDelayInMs = 10000;
              this.vpaidDesiredBitrate = 268;
              this.vpaidViewmode = 'normal';
              this.playheadTime = 0;
              this.videoBase = document.createElement('div');
              this.videoParent = null;
              this.SUPPORTED_CREATIVE_VPAID_VERSION_MIN = this.PLAYER_VPAID_VERSION = 2;
            };
            a.VPAIDRenderer.prototype = {};
            a.VPAIDRenderer.prototype.constructor = a.VPAIDRenderer;
            a.VPAIDRenderer.VastCompanion = function (a, c, d, e) {
              this._width = a;
              this._height = c;
              this._apiFramework = d;
              this._xmlNode = e;
            };
            a.VPAIDRenderer.VastCompanion.prototype = {
              getWidth: function () {
                return this._width;
              },
              getHeight: function () {
                return this._height;
              },
              _isValidResource: function (a, c) {
                return (
                  ('StaticResource' === a && c['@attributes'].creativeType) ||
                  ('IFrameResource' === a && c.value) ||
                  ('HTMLResource' === a && c.value)
                );
              },
              hasValidRendtions: function () {
                for (var a in this._xmlNode)
                  if (
                    this._xmlNode.hasOwnProperty(a) &&
                    ('StaticResource' === a || 'IFrameResource' === a || 'HTMLResource' === a)
                  )
                    for (var c = [].concat(this._xmlNode[a]), d = c.length - 1; 0 <= d; d--)
                      if (this._isValidResource(a, c[d])) return !0;
                return !1;
              },
              translateToAdInstance: function (b) {
                this._xmlNode.CompanionClickThrough &&
                  b.setClickThroughUrl(
                    a.EVENT_AD_CLICK,
                    this._xmlNode.CompanionClickThrough.value
                  );
                var c;
                if (this._xmlNode.TrackingEvents) {
                  var d = this._xmlNode.TrackingEvents;
                  if (d.Tracking) {
                    d = [].concat(d.Tracking);
                    var e = [];
                    for (c = d.length - 1; 0 <= c; c--)
                      'creativeView' === d[c]['@attributes'].event && e.push(d[c].value);
                    0 < e.length &&
                      b.addEventCallbackUrls(a.EVENT_AD_IMPRESSION, a.EVENT_TYPE_IMPRESSION, e);
                  }
                }
                for (var f in this._xmlNode)
                  if (
                    this._xmlNode.hasOwnProperty(f) &&
                    ('StaticResource' === f || 'IFrameResource' === f || 'HTMLResource' === f)
                  )
                    for (d = [].concat(this._xmlNode[f]), c = d.length - 1; 0 <= c; c--)
                      if (this._isValidResource(f, d[c])) {
                        e = d[c];
                        var g = b.addCreativeRendition();
                        g.setWidth(this._width);
                        g.setHeight(this._height);
                        g.setCreativeApi('None');
                        var h = g.addCreativeRenditionAsset('VPAIDAsset' + c, !0);
                        h.setContentType('text/html_doc_lit_mobile');
                        h.setMimeType('text/html');
                        var k = b.getEventCallbackUrls(a.EVENT_AD_CLICK, a.EVENT_TYPE_CLICK)[0],
                          l = f;
                        if ('HTMLResource' === l)
                          h.setContent(
                            a.HTMLAdGenerator.wrapUnsafeHTML(
                              e.value,
                              b.getSlot().getCustomId(),
                              this._width,
                              this._height
                            )
                          );
                        else {
                          var p;
                          'IFrameResource' === l
                            ? (p = 'iframe')
                            : 'StaticResource' === l && (p = this._xmlNode.creativeType);
                          h.setContent(
                            a.HTMLAdGenerator.generateAd(
                              e.value,
                              k,
                              b.getSlot().getCustomId(),
                              this._width,
                              this._height,
                              p,
                              h.getContentType()
                            )
                          );
                        }
                        a.debug(
                          'rendtion width: ' +
                            g.getWidth() +
                            ' height:' +
                            g.getHeight() +
                            ' asset content:' +
                            h.getContent()
                        );
                      }
              },
            };
            a.VPAIDRenderer.VastCompanion.prototype.constructor = a.VPAIDRenderer.VastCompanion;
            a.VPAIDRenderer.VastAdSelect = function () {};
            a.VPAIDRenderer.VastAdSelect.prototype = {
              _getDeadSpaceRatio: function (b, c) {
                var d = b.getWidth();
                b = b.getHeight();
                var e = c.getWidth();
                c = c.getHeight();
                var f = 1;
                d <= e && b <= c && (f = 1 - (d * b) / (e * c));
                a.debug(
                  'computing dead space ratio (' +
                    f +
                    ') for slot ' +
                    e +
                    'x' +
                    c +
                    ' and ad ' +
                    d +
                    'x' +
                    b
                );
                return f;
              },
              matchAdsWithSlots: function (b, c) {
                a.log('VPAIDRenderer: Matching ads with slots');
                var d;
                for (d = 0; d < c.length; ++d) c[d].matched = !1;
                var e = [],
                  f = [];
                for (d = 0; d < b.length; d++)
                  for (var g = 0; g < c.length; g++)
                    f.push({
                      ratio: this._getDeadSpaceRatio(b[d], c[g]),
                      adIndex: d,
                      slotIndex: g,
                    });
                f.sort(function (a, b) {
                  return a.ratio - b.ratio;
                });
                for (d = 0; d < f.length && 1 !== f[d].ratio; d++) {
                  g = f[d];
                  var h = b[g.adIndex],
                    k = c[g.slotIndex];
                  h.matched ||
                    k.matched ||
                    (a.log(
                      'Winning ratio:' +
                        g.ratio +
                        ' Winning ad:' +
                        h.getWidth() +
                        'x' +
                        h.getHeight() +
                        ' for slot:' +
                        k.getWidth() +
                        'x' +
                        k.getHeight()
                    ),
                    e.push({ ad: h, slot: k }),
                    (h.matched = !0),
                    (k.matched = !0));
                }
                return e;
              },
            };
            a.VPAIDRenderer.VastAdSelect.prototype.constructor = a.VPAIDRenderer.VastAdSelect;
            a.Util.mixin(a.VPAIDRenderer.prototype, {
              _failWithError: function (b, c, d) {
                var e = {};
                e[a.INFO_KEY_ERROR_MODULE] = 'VPAIDRenderer';
                e[a.INFO_KEY_ERROR_CODE] = b;
                d || (d = a.ERROR_VAST_GENERAL_VPAID_ERROR);
                e[a.INFO_KEY_VAST_ERROR_CODE] = d;
                c && (e[a.INFO_KEY_ERROR_INFO] = c);
                this.rendererController.handleStateTransition(a.RENDERER_STATE_FAILED, e);
                this.dispose();
              },
              onCreativeTimeout: function () {
                a.log('VPAIDRenderer: onCreativeTimeout()');
                var b = this.vpaidCreative.getTimeoutOperation();
                this._failWithError(
                  a.ERROR_TIMEOUT,
                  'loadCreativeAsset' !== b
                    ? 'Creative function ' + b + ' timeout'
                    : 'load creative asset timeout'
                );
              },
              setVolume: function (b) {
                a.log('VPAIDRenderer: setVolume(' + b + ')');
                this.vpaidCreative && this.vpaidCreative.setAdVolume(b);
              },
              onAdVolumeChange: function () {
                a.log('VPAIDRenderer: onAdVolumeChange()');
                var b = this.vpaidCreative.getAdVolume();
                0 > b || 1 < b
                  ? a.log('Invalid ad volume value')
                  : (this.isMuted && 2 < 100 * b
                      ? ((this.isMuted = !1),
                        this.rendererController.processEvent({ name: a.EVENT_AD_UNMUTE }))
                      : !this.isMuted &&
                        2 > 100 * b &&
                        ((this.isMuted = !0),
                        this.rendererController.processEvent({ name: a.EVENT_AD_MUTE })),
                    this.rendererController.processEvent({ name: a.EVENT_AD_VOLUME_CHANGE }));
              },
              onAdExpandedChange: function () {
                a.log('VPAIDRenderer: onAdExpandedChange()');
                this.vpaidCreative.getAdExpanded()
                  ? this.rendererController.processEvent({ name: a.EVENT_AD_EXPAND })
                  : this.rendererController.processEvent({ name: a.EVENT_AD_COLLAPSE });
              },
              onAdDurationChange: function () {
                a.log(
                  'VPAIDRenderer: onAdDurationChange(): duration changed to ' +
                    this.vpaidCreative.getAdDuration()
                );
              },
              onAdClickThru: function (b, c, d) {
                a.log(
                  'VPAIDRenderer: onAdClickThru() with url:' +
                    b +
                    ' id:' +
                    c +
                    ' playerHandles:' +
                    d
                );
                c = { name: a.EVENT_AD_CLICK, info: {} };
                c.info[a.INFO_KEY_SHOW_BROWSER] = !0 === d;
                !0 === d
                  ? b
                    ? (a.log('onAdClickThru(): open window with overrided url'),
                      (c.info[a.INFO_KEY_URL] = b))
                    : a.log(
                        'onAdClickThru(): open window with url booked in MRM UI or VAST clickthru url'
                      )
                  : a.log('onAdClickThru(): send click tracking');
                this.rendererController.processEvent(c);
              },
              onCreativeAssetLoaded: function () {
                a.log('VPAIDRenderer: onCreativeAssetLoaded()');
                this.vpaidCreative.cancelTimeoutEvent();
                var b = this,
                  c = function () {
                    var c = b.vpaidCreative.handshakeVersion(b.PLAYER_VPAID_VERSION.toFixed(1));
                    return c
                      ? parseFloat(c) < b.SUPPORTED_CREATIVE_VPAID_VERSION_MIN
                        ? (b._failWithError(
                            a.ERROR_INVALID_VALUE,
                            'Only support creatives with VPAID version >= ' +
                              b.SUPPORTED_CREATIVE_VPAID_VERSION_MIN.toFixed(1)
                          ),
                          !1)
                        : !0
                      : (b._failWithError(
                          a.ERROR_3P_COMPONENT,
                          'Cannot get VPAID version from the creative'
                        ),
                        !1);
                  };
                if (
                  (function () {
                    var c = b.vpaidCreative.checkVPAIDInterface(
                      'handshakeVersion initAd startAd stopAd subscribe unsubscribe getAdLinear'.split(
                        ' '
                      )
                    );
                    c.passed ||
                      b._failWithError(
                        a.ERROR_3P_COMPONENT,
                        'Missing interfaces in the VPAID creative: ' + c.missingInterfaces
                      );
                    return c.passed;
                  })() &&
                  c()
                ) {
                  (function () {
                    var c = b.rendererController.getParameter(
                      a.PARAMETER_VPAID_CREATIVE_TIMEOUT_DELAY
                    );
                    c && 0 < Number(c) && (b.creativeTimeoutDelayInMs = Number(c));
                    a.log(
                      'initParams(), creative timeout delay in miliseconds:' +
                        b.creativeTimeoutDelayInMs
                    );
                    c = parseFloat(b.rendererController.getParameter(a.PARAMETER_DESIRED_BITRATE));
                    b.vpaidDesiredBitrate = 0 < c ? c : b.vpaidDesiredBitrate;
                    a.log('initParams(), desired bitrate: ' + b.vpaidDesiredBitrate);
                  })();
                  b.creativeEventCallbacks = {
                    AdStarted: b.onAdStarted,
                    AdStopped: b.onAdStopped,
                    AdSkipped: b.onAdSkipped,
                    AdLoaded: b.onAdLoaded,
                    AdLinearChange: b.onAdLinearChange,
                    AdSizeChange: b.onAdSizeChange,
                    AdExpandedChange: b.onAdExpandedChange,
                    AdDurationChange: b.onAdDurationChange,
                    AdVolumeChange: b.onAdVolumeChange,
                    AdImpression: b.onAdImpression,
                    AdClickThru: b.onAdClickThru,
                    AdVideoFirstQuartile: b.onAdVideoFirstQuartile,
                    AdVideoMidpoint: b.onAdVideoMidpoint,
                    AdVideoThirdQuartile: b.onAdVideoThirdQuartile,
                    AdVideoComplete: b.onAdVideoComplete,
                    AdUserAcceptInvitation: b.onAdUserAcceptInvitation,
                    AdUserMinimize: b.onAdUserMinimize,
                    AdUserClose: b.onAdUserClose,
                    AdPaused: b.onAdPaused,
                    AdPlaying: b.onAdResumed,
                    AdError: b.onAdError,
                    AdLog: b.onAdLog,
                  };
                  b.vpaidCreative.setCallbacksForCreative(b.creativeEventCallbacks, b);
                  this.rendererController.setCapability(
                    a.EVENT_AD_QUARTILE,
                    a.CAPABILITY_STATUS_ON
                  );
                  this.rendererController.setCapability(a.EVENT_AD_MUTE, a.CAPABILITY_STATUS_ON);
                  this.rendererController.setCapability(a.EVENT_AD_EXPAND, a.CAPABILITY_STATUS_ON);
                  this.rendererController.setCapability(a.EVENT_AD_PAUSE, a.CAPABILITY_STATUS_ON);
                  this.rendererController.setCapability(a.EVENT_AD_CLOSE, a.CAPABILITY_STATUS_ON);
                  this.rendererController.setCapability(
                    a.EVENT_AD_MINIMIZE,
                    a.CAPABILITY_STATUS_ON
                  );
                  this.rendererController.setCapability(
                    a.EVENT_AD_ACCEPT_INVITATION,
                    a.CAPABILITY_STATUS_ON
                  );
                  (c = this.rendition ? this.rendition.getParameter('creativeData') : null) ||
                    (c = this.rendition
                      ? this.rendition.getParameter('VPAID_creativeData')
                      : null);
                  c && (c = a.Util.trim(c));
                  c = { AdParameters: c };
                  var d = this.rendererController.getAdInstance().getSlot();
                  this.videoBase.style.width = '0px';
                  this.videoBase.style.height = '0px';
                  this.videoBase.style.zIndex = '100000';
                  this.videoBase.style.position = 'absolute';
                  this.videoBase.style.left = this.rendererController.getContentVideoElement().style.left;
                  this.videoBase.style.top = this.rendererController.getContentVideoElement().style.top;
                  this.videoBase.className = 'fw_vpaid_slot';
                  this.videoParent = d.getBase();
                  var e = this.rendererController.getContentVideoElement();
                  if ('nodeType' in e && 0 < e.nodeType)
                    try {
                      this.videoParent.insertBefore(
                        this.videoBase,
                        this.rendererController.getContentVideoElement()
                      );
                    } catch (g) {
                      this.videoParent.insertBefore(this.videoBase, this.videoParent.firstChild);
                    }
                  else this.videoParent.insertBefore(this.videoBase, this.videoParent.firstChild);
                  e = {
                    slot: this.videoBase,
                    videoSlot: this.rendererController.getContentVideoElement(),
                    videoSlotCanAutoPlay: !0,
                  };
                  var f = d.getWidth();
                  d = d.getHeight();
                  (f && d) ||
                    !this.rendition ||
                    ((f = this.rendition.getWidth()), (d = this.rendition.getHeight()));
                  this.vpaidCreative.initAd(
                    f,
                    d,
                    this.vpaidViewmode,
                    this.vpaidDesiredBitrate,
                    c,
                    e
                  );
                }
              },
              onAdLoaded: function () {
                a.log('VPAIDRenderer: onAdLoaded()');
                this.vpaidCreative.cancelTimeoutEvent();
                a.log('Ad duration:' + this.getDuration());
                var b = this,
                  c = function (c, d) {
                    var e = d;
                    a.debug(e.length + ' companion slots to fill.');
                    if (0 !== e.length && 0 !== c.length) {
                      var f = new a.VPAIDRenderer.VastAdSelect().matchAdsWithSlots(c, e);
                      if (0 !== f.length) {
                        c = [];
                        e = [];
                        for (d = f.length - 1; 0 <= d; d--) c.push(f[d].ad), e.push(f[d].slot);
                        e = b.rendererController.scheduleAdInstances(e);
                        for (d = e.length - 1; 0 <= d; d--) c[d].translateToAdInstance(e[d]);
                      }
                    }
                  },
                  d = (function (b) {
                    if (!b) return a.log('The adCompanions property is empty.'), null;
                    a.log('parsing adCompanions: ' + b);
                    if (window.DOMParser) var c = new DOMParser().parseFromString(b, 'text/xml');
                    else (c = new ActiveXObject('Microsoft.XMLDOM')), (c.async = !1), c.loadXML(b);
                    b = a.Util.xmlToJson(c);
                    if (!b || !b.CompanionAds || !b.CompanionAds.Companion)
                      return a.log('No companion ads found in parsed xml'), [];
                    b = [].concat(b.CompanionAds.Companion);
                    c = [];
                    for (var d = b.length - 1; 0 <= d; d--) {
                      var e = b[d];
                      if (e['@attributes']) {
                        var k = e['@attributes'].width,
                          l = e['@attributes'].height;
                        if (!k || !l || 0 > k || 0 > l)
                          a.log('Missing width/height for companion.');
                        else {
                          var p = e['@attributes'].apiFramework || '';
                          a.debug('Companion ' + k + 'x' + l + ' api:' + p);
                          e = new a.VPAIDRenderer.VastCompanion(k, l, p, e);
                          e.hasValidRendtions() && c.push(e);
                        }
                      }
                    }
                    return c;
                  })(b.vpaidCreative.getAdCompanions());
                d && 0 < d.length
                  ? c(d, this.rendererController.getCompanionSlots())
                  : a.log('VPAIDAdRenderer: No companions from VPAID creative.');
                c = this.rendererController.getAdInstance()._context.getAdVolume();
                !this.isMuted && 2 > 100 * c && (this.isMuted = !0);
                this.setVolume(c);
                this.vpaidCreative.startAd();
              },
              onVisibilityChange: function () {
                a.log('onVisibilityChange:' + (document.hidden ? 'invisible' : 'visible'));
                a.log('Current playback state:' + this.adPlaybackState);
                document.hidden && 'playing' === this.adPlaybackState
                  ? (a.log('Pause the VPAID creative'), this.vpaidCreative.pauseAd())
                  : document.hidden ||
                    'paused' !== this.adPlaybackState ||
                    (a.log('Resume the VPAID creative'), this.vpaidCreative.resumeAd());
              },
              onAdStarted: function () {
                a.log('VPAIDRenderer: onAdStarted()');
                this.vpaidCreative.timeoutReached
                  ? a.log(
                      'VPAID ad has already failed due to timeout. The AdStarted event will not be handled.'
                    )
                  : (this.vpaidCreative.cancelTimeoutEvent(),
                    (this._visibilityChangeListener = this.onVisibilityChange.bind(this)),
                    document.addEventListener(
                      'visibilitychange',
                      this._visibilityChangeListener,
                      !1
                    ));
              },
              onAdStopped: function () {
                a.log('VPAIDRenderer: onAdStopped()');
                this.vpaidCreative
                  ? (this.vpaidCreative.cancelTimeoutEvent(),
                    this.timePositionClass === a.TIME_POSITION_CLASS_OVERLAY &&
                      this.vpaidCreative.getAdLinear() &&
                      this.rendererController.requestContentStateChange(!1),
                    this.vpaidCreative &&
                      !this.vpaidCreative.timeoutReached &&
                      (this.adPlaybackState
                        ? (this.rendererController.handleStateTransition(
                            a.RENDERER_STATE_COMPLETED
                          ),
                          this.dispose())
                        : (a.warn(
                            'Expecting AdStarted and AdImpression events but got AdStopped event instead. Fail.'
                          ),
                          this._failWithError(
                            a.ERROR_3P_COMPONENT,
                            'Expecting AdStarted and AdImpression events from the VPAID creative but got AdStopped event instead'
                          ))))
                  : a.log('The VPAID creative has been disposed. Return.');
              },
              onAdImpression: function () {
                a.log('VPAIDRenderer: onAdImpression()');
                if (this.vpaidCreative.timeoutReached)
                  a.log(
                    'VPAID ad has already failed due to timeout. The AdImpression event will not be handled.'
                  );
                else {
                  var b = this.vpaidCreative.getAdVolume();
                  this.isMuted = 0 < b && 2 >= 100 * b;
                  this.adPlaybackState = 'playing';
                  this.rendererController.handleStateTransition(a.RENDERER_STATE_STARTED);
                }
              },
              onAdLinearChange: function () {
                a.log('VPAIDRenderer: onAdLinearChange()');
                var b = this.vpaidCreative.getAdLinear();
                b
                  ? a.log(
                      'onAdLinearChange(): non-linear click to linear -> request content video to pause'
                    )
                  : a.log(
                      'onAdLinearChange(): linear back to non-linear -> request content video to resume'
                    );
                this.rendererController.requestContentStateChange(b);
              },
              onAdSizeChange: function () {
                a.log('VPAIDRenderer: onAdSizeChange()');
              },
              onAdPaused: function () {
                a.log('VPAIDRenderer: onAdPaused()');
                'playing' === this.adPlaybackState &&
                  this.rendererController.processEvent({ name: a.EVENT_AD_PAUSE });
                this.adPlaybackState = 'paused';
              },
              onAdResumed: function () {
                a.log('VPAIDRenderer: onAdResumed()');
                'paused' === this.adPlaybackState &&
                  this.rendererController.processEvent({ name: a.EVENT_AD_RESUME });
                this.adPlaybackState = 'playing';
              },
              onAdSkipped: function () {
                a.log('VPAIDRenderer: onAdSkipped()');
                this.dispose();
                this.rendererController.handleStateTransition(a.RENDERER_STATE_COMPLETED);
              },
              onAdVideoFirstQuartile: function () {
                a.log('VPAIDRenderer: onAdVideoFirstQuartile()');
                this.rendererController.processEvent({ name: a.EVENT_AD_FIRST_QUARTILE });
              },
              onAdVideoMidpoint: function () {
                a.log('VPAIDRenderer: onAdVideoMidpoint()');
                this.rendererController.processEvent({ name: a.EVENT_AD_MIDPOINT });
              },
              onAdVideoThirdQuartile: function () {
                a.log('VPAIDRenderer: onAdVideoThirdQuartile()');
                this.rendererController.processEvent({ name: a.EVENT_AD_THIRD_QUARTILE });
              },
              onAdVideoComplete: function () {
                a.log('VPAIDRenderer: onAdVideoComplete');
                this.rendererController.processEvent({ name: a.EVENT_AD_COMPLETE });
              },
              onAdUserAcceptInvitation: function () {
                a.log('VPAIDRenderer: onAdUserAcceptInvitation()');
                this.rendererController.processEvent({ name: a.EVENT_AD_ACCEPT_INVITATION });
              },
              onAdUserClose: function () {
                a.log('VPAIDRenderer: onAdUserClose()');
                this.rendererController.processEvent({ name: a.EVENT_AD_CLOSE });
              },
              onAdUserMinimize: function () {
                a.log('VPAIDRenderer: onAdUserMinimize()');
                this.rendererController.processEvent({ name: a.EVENT_AD_MINIMIZE });
              },
              onAdLog: function (b) {
                a.log('VPAIDRenderer: onAdLog: ' + b);
              },
              onAdError: function (b) {
                a.log('VPAIDRenderer: onAdError(): ' + b);
                this._failWithError(a.ERROR_3P_COMPONENT, 'AdError event:' + b);
              },
              start: function (b) {
                a.log('VPAIDRenderer start()');
                this.rendererController = b;
                this.timePositionClass = b.getAdInstance().getSlot().getTimePositionClass();
                if (
                  (b = (b = (this.rendition = b.getAdInstance().getActiveCreativeRendition())
                    ? this.rendition.getPrimaryCreativeRenditionAsset()
                    : null)
                    ? b.getUrl()
                    : null)
                ) {
                  this.vpaidCreative = new a.VPAIDWrapper();
                  this.vpaidCreative.setTimeoutValueInMs(this.creativeTimeoutDelayInMs);
                  this.vpaidCreative.addEventListener(
                    'timeout',
                    this.onCreativeTimeout.bind(this)
                  );
                  this.vpaidCreative.addEventListener(
                    'CreativeAssetLoaded',
                    this.onCreativeAssetLoaded.bind(this)
                  );
                  try {
                    this.vpaidCreative.loadCreativeAsset(b);
                  } catch (c) {
                    this._failWithError(a.ERROR_IO, c);
                  }
                } else
                  this._failWithError(a.ERROR_NULL_ASSET, 'Creative asset url cannot be null');
              },
              stop: function () {
                a.log('VPAIDRenderer stop()');
                this.vpaidCreative.stopAd();
              },
              info: function () {
                return { moduleType: a.MODULE_TYPE_RENDERER };
              },
              getPlayheadTime: function () {
                var a = this.vpaidCreative.getAdDuration(),
                  c = this.vpaidCreative.getAdRemainingTime();
                0 <= a && 0 <= c && (this.playheadTime = a - c);
                0 > this.playheadTime && (this.playheadTime = -1);
                return this.playheadTime;
              },
              getDuration: function () {
                var a = this.vpaidCreative.getAdDuration();
                return 0 <= a ? a : -1;
              },
              pause: function () {
                a.log('VPAIDRenderer pause()');
                this.rendererController.processEvent({ name: a.EVENT_AD_PAUSE });
                this.vpaidCreative.canPauseAd()
                  ? 'playing' === this.adPlaybackState &&
                    ((this.adPlaybackState = 'pausing'), this.vpaidCreative.pauseAd())
                  : a.log('The creative is not able to pause');
              },
              resume: function () {
                a.log('VPAIDRenderer resume()');
                this.rendererController.processEvent({ name: a.EVENT_AD_RESUME });
                this.vpaidCreative.canResumeAd()
                  ? 'paused' === this.adPlaybackState &&
                    ((this.adPlaybackState = 'resuming'), this.vpaidCreative.resumeAd())
                  : a.log('The creative is not able to resume');
              },
              dispose: function () {
                a.log('VPAIDRenderer dispose()');
                this.vpaidCreative &&
                  (this.videoParent &&
                    (this.videoParent.removeChild(this.videoBase), (this.videoParent = null)),
                  this._visibilityChangeListener &&
                    (a.log('remove visibilitychange listener'),
                    document.removeEventListener(
                      'visibilitychange',
                      this._visibilityChangeListener,
                      !1
                    )),
                  this.vpaidCreative.removeCallbacksForCreative(this.creativeEventCallbacks),
                  this.vpaidCreative.removeEventListener('timeout'),
                  (this.vpaidCreative = null));
              },
              resize: function () {
                a.log('VPAIDAdRenderer resize()');
                var b = this.rendererController.getAdInstance().getSlot(),
                  c = b.getWidth();
                b = b.getHeight();
                a.log('VPAIDRenderer new size width:' + c + ' height:' + b);
                this.vpaidCreative.resizeAd(c, b, this.vpaidViewmode);
              },
            });
            return a;
          }.apply(this, arguments);
        } finally {
          if ($___old_ba615320e989e474)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_ba615320e989e474
            ));
        }
      };
      w.tv.freewheel.SDK || (w.tv.freewheel.SDK = w.tv.freewheel[O]('tv.freewheel.SDK'));
      return w;
    })();
  })();
}
