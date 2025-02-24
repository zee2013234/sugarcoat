var intervalPujas,
  callbackToPlayer,
  recargaPujas,
  cadena_titulo,
  LANG_MSG,
  MPEP_idioma,
  MPEP_responsive,
  parseaMetas,
  userAgentMatches,
  isOpera,
  isSafari,
  isGecko,
  isIE,
  isMobile,
  userAgent,
  ua,
  IEv,
  isIphone,
  isIpad,
  iDevice,
  dispositivoMovil,
  dimensionesPEP,
  ev_reescalado,
  versionMovil,
  datosMPEP,
  mediateca,
  videosMediateca,
  code_ima3_HTML5_cargado,
  volumen_global,
  arreglaUrl,
  PAGE_TITLE,
  supportsOrientationChange,
  orientationEvent,
  connectionPEP,
  FlashDetect,
  versionFlash,
  revisionFlash,
  subVersionFlash,
  EPET_FlashHTML,
  EPET_Grafico_Flash,
  EPET_Marcado_Multimedia,
  marcadoReproductorMultimedia,
  videoFlash,
  reproduciendo,
  MultimediaActual,
  MultimediaPEP,
  id_pidiendoDatos,
  contadorMultimedia,
  soporteVideo,
  canPlayMP4,
  canPlayHLS,
  EPETaddEvent,
  EPETremoveEvent,
  EPET_setScrollPosition,
  EPET_calculaTopPosition,
  VideoReproduciendo,
  MultimediaReproduciendo,
  MultimediaReinicio,
  MultimediaSeeking,
  MultimediaSeeked,
  reseteaVideo,
  MultimediaPEP_originales,
  SiguientesVideosPEP,
  siguientesVideos,
  barajaArray,
  videosSiguientes_callback,
  reajustaDimensiones,
  cargaSiguienteVideo,
  resetSiguientesVideos,
  EPET_PlayerRetransmisionDirecto,
  retransmisionBloqueada,
  CACHE_VDPEP,
  pideDatosVideo,
  EPET_VideoPlayer_callback,
  EPET_VideoPlayer,
  PlayerMultimedia,
  css_multimedia_cargado,
  EPET_Video,
  playerHTML5,
  MainController,
  AdsController,
  VDPEP_Player_Cartelera,
  EPET_VideoPlayerGeobloqueado,
  EPET_VideoPlayerBloqueado,
  EPET_MultimediaPlayer,
  EPET_VideoPlayerBrightcoveExterno,
  tiempoBonito,
  mouseWheelEvent,
  factorVolumen,
  wheel,
  EPETUtils_calcPosition,
  EPETUtils_calcAbsPosition,
  EPETUtils_calcAbsPositionV2,
  EPETUtils_posicionarScrollEnPagina,
  EPETUtils_windowOpen,
  EPETUtils_IFrameRequest,
  EPETUtils_makeHttpRequest,
  EPETUtils_makeHttpRequestGet,
  EPETUtils_createHttpRequestObj,
  marcadoAmpliaFoto,
  EPETtrackNewInfoFromAJAX,
  EPETtrackWidgetNewInfoFromAJAX,
  EPETCreaIframe,
  EPETaddClass,
  EPETremoveClass,
  EPETUtils_userSelectOff,
  EPETUtils_userSelectOn,
  EPETUtils_fullEncodeURIComponent,
  EPETnewsNotify,
  EPETgetVScrollPosition,
  EPETBrowserDims,
  EPETalternacampos,
  teclaPulsada,
  teclaTelonEvent,
  htmlCapaCentral,
  htmlCapaFlotante,
  fotoTamanioReal,
  bloqueaClick,
  crearTelonMultimedia,
  cerrarTelonMultimedia,
  ampliaFoto,
  ampliaFotoCallback,
  f_pinta_datos,
  f_muestra_ficha_colaborador,
  f_comprobar_submit,
  f_iniciar_sesion,
  EPETUtils_filtraAlfanumerico,
  EPETUtils_filtraJavascript,
  EPETUtils_filtraFormulario,
  JSON,
  loadCSS,
  Base64,
  loadEmbedObjectInDiv,
  loadEmbedObjectInDivResponsive,
  reproductorMultimedia,
  procesarAudiosFeed,
  reproductorMultimediaPlaylist,
  aniade_track_caja,
  tagsStrToJson;
{
  const $___stub_dc70937786909300 = {};
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
  })($___stub_dc70937786909300);
  const $___stub_13e1f1b8e6056aa8 = {};
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
  })($___stub_13e1f1b8e6056aa8);
  const $___old_cc6f04561db762e7 = {}.constructor.getOwnPropertyDescriptor(
    Navigator.prototype,
    'userAgent'
  );
  try {
    if ($___old_cc6f04561db762e7)
      ({}.constructor.defineProperty(
        Navigator.prototype,
        'userAgent',
        $___stub_dc70937786909300.userAgent
      ));
    (function () {
      callbackToPlayer = $___var_0a1b54a6fc9defd6;
      ({}.constructor.defineProperty(callbackToPlayer, 'name', {
        configurable: true,
        enumerable: false,
        value: 'callbackToPlayer',
        writable: false,
      }));
      recargaPujas = $___var_18cf94704f34d4b4;
      ({}.constructor.defineProperty(recargaPujas, 'name', {
        configurable: true,
        enumerable: false,
        value: 'recargaPujas',
        writable: false,
      }));
      parseaMetas = $___var_527d3f6804b81aaf;
      ({}.constructor.defineProperty(parseaMetas, 'name', {
        configurable: true,
        enumerable: false,
        value: 'parseaMetas',
        writable: false,
      }));
      arreglaUrl = $___var_5628410a63d9a4b1;
      ({}.constructor.defineProperty(arreglaUrl, 'name', {
        configurable: true,
        enumerable: false,
        value: 'arreglaUrl',
        writable: false,
      }));
      EPET_FlashHTML = $___var_d23d5e7639d740bb;
      ({}.constructor.defineProperty(EPET_FlashHTML, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_FlashHTML',
        writable: false,
      }));
      EPET_Grafico_Flash = $___var_cc2d3aed6d28c31f;
      ({}.constructor.defineProperty(EPET_Grafico_Flash, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_Grafico_Flash',
        writable: false,
      }));
      marcadoReproductorMultimedia = $___var_606da16e219c2362;
      ({}.constructor.defineProperty(marcadoReproductorMultimedia, 'name', {
        configurable: true,
        enumerable: false,
        value: 'marcadoReproductorMultimedia',
        writable: false,
      }));
      soporteVideo = $___var_e60f21c45f6f57a6;
      ({}.constructor.defineProperty(soporteVideo, 'name', {
        configurable: true,
        enumerable: false,
        value: 'soporteVideo',
        writable: false,
      }));
      EPETaddEvent = $___var_a63add725de2a0ec;
      ({}.constructor.defineProperty(EPETaddEvent, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETaddEvent',
        writable: false,
      }));
      EPETremoveEvent = $___var_a520aedff27ca635;
      ({}.constructor.defineProperty(EPETremoveEvent, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETremoveEvent',
        writable: false,
      }));
      EPET_setScrollPosition = $___var_d7c359f3cf7be2d2;
      ({}.constructor.defineProperty(EPET_setScrollPosition, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_setScrollPosition',
        writable: false,
      }));
      EPET_calculaTopPosition = $___var_a5d69827363a79f1;
      ({}.constructor.defineProperty(EPET_calculaTopPosition, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_calculaTopPosition',
        writable: false,
      }));
      VideoReproduciendo = $___var_4d580933afa154c8;
      ({}.constructor.defineProperty(VideoReproduciendo, 'name', {
        configurable: true,
        enumerable: false,
        value: 'VideoReproduciendo',
        writable: false,
      }));
      MultimediaReproduciendo = $___var_0bd3ac909199d1db;
      ({}.constructor.defineProperty(MultimediaReproduciendo, 'name', {
        configurable: true,
        enumerable: false,
        value: 'MultimediaReproduciendo',
        writable: false,
      }));
      MultimediaReinicio = $___var_b93026726bac2b2a;
      ({}.constructor.defineProperty(MultimediaReinicio, 'name', {
        configurable: true,
        enumerable: false,
        value: 'MultimediaReinicio',
        writable: false,
      }));
      MultimediaSeeking = $___var_e2baea19a8ed3cff;
      ({}.constructor.defineProperty(MultimediaSeeking, 'name', {
        configurable: true,
        enumerable: false,
        value: 'MultimediaSeeking',
        writable: false,
      }));
      MultimediaSeeked = $___var_062e678e661a36b6;
      ({}.constructor.defineProperty(MultimediaSeeked, 'name', {
        configurable: true,
        enumerable: false,
        value: 'MultimediaSeeked',
        writable: false,
      }));
      reseteaVideo = $___var_573a0a3fd26f4bd7;
      ({}.constructor.defineProperty(reseteaVideo, 'name', {
        configurable: true,
        enumerable: false,
        value: 'reseteaVideo',
        writable: false,
      }));
      siguientesVideos = $___var_2d864ca98032e174;
      ({}.constructor.defineProperty(siguientesVideos, 'name', {
        configurable: true,
        enumerable: false,
        value: 'siguientesVideos',
        writable: false,
      }));
      barajaArray = $___var_551391a2a7e905d7;
      ({}.constructor.defineProperty(barajaArray, 'name', {
        configurable: true,
        enumerable: false,
        value: 'barajaArray',
        writable: false,
      }));
      videosSiguientes_callback = $___var_453d28cc2738a117;
      ({}.constructor.defineProperty(videosSiguientes_callback, 'name', {
        configurable: true,
        enumerable: false,
        value: 'videosSiguientes_callback',
        writable: false,
      }));
      reajustaDimensiones = $___var_057ee9d033642776;
      ({}.constructor.defineProperty(reajustaDimensiones, 'name', {
        configurable: true,
        enumerable: false,
        value: 'reajustaDimensiones',
        writable: false,
      }));
      cargaSiguienteVideo = $___var_d0434c43857b5848;
      ({}.constructor.defineProperty(cargaSiguienteVideo, 'name', {
        configurable: true,
        enumerable: false,
        value: 'cargaSiguienteVideo',
        writable: false,
      }));
      resetSiguientesVideos = $___var_f9f25a97dce2ec8b;
      ({}.constructor.defineProperty(resetSiguientesVideos, 'name', {
        configurable: true,
        enumerable: false,
        value: 'resetSiguientesVideos',
        writable: false,
      }));
      EPET_PlayerRetransmisionDirecto = $___var_647332c0002b0f76;
      ({}.constructor.defineProperty(EPET_PlayerRetransmisionDirecto, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_PlayerRetransmisionDirecto',
        writable: false,
      }));
      retransmisionBloqueada = $___var_7d90a63e27c42f2a;
      ({}.constructor.defineProperty(retransmisionBloqueada, 'name', {
        configurable: true,
        enumerable: false,
        value: 'retransmisionBloqueada',
        writable: false,
      }));
      pideDatosVideo = $___var_0e2a4aa208f5bf64;
      ({}.constructor.defineProperty(pideDatosVideo, 'name', {
        configurable: true,
        enumerable: false,
        value: 'pideDatosVideo',
        writable: false,
      }));
      EPET_VideoPlayer_callback = $___var_58aa31c0798ccc12;
      ({}.constructor.defineProperty(EPET_VideoPlayer_callback, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_VideoPlayer_callback',
        writable: false,
      }));
      EPET_VideoPlayer = $___var_9bee5d5bd28a7031;
      ({}.constructor.defineProperty(EPET_VideoPlayer, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_VideoPlayer',
        writable: false,
      }));
      PlayerMultimedia = $___var_5e8515bb113272c8;
      ({}.constructor.defineProperty(PlayerMultimedia, 'name', {
        configurable: true,
        enumerable: false,
        value: 'PlayerMultimedia',
        writable: false,
      }));
      VDPEP_Player_Cartelera = $___var_4d32e08f41cbb723;
      ({}.constructor.defineProperty(VDPEP_Player_Cartelera, 'name', {
        configurable: true,
        enumerable: false,
        value: 'VDPEP_Player_Cartelera',
        writable: false,
      }));
      EPET_VideoPlayerGeobloqueado = $___var_8246b080722d0760;
      ({}.constructor.defineProperty(EPET_VideoPlayerGeobloqueado, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_VideoPlayerGeobloqueado',
        writable: false,
      }));
      EPET_VideoPlayerBloqueado = $___var_217ff12ce5ca1b49;
      ({}.constructor.defineProperty(EPET_VideoPlayerBloqueado, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_VideoPlayerBloqueado',
        writable: false,
      }));
      EPET_MultimediaPlayer = $___var_07fb1006ce1d2bb9;
      ({}.constructor.defineProperty(EPET_MultimediaPlayer, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_MultimediaPlayer',
        writable: false,
      }));
      EPET_VideoPlayerBrightcoveExterno = $___var_936ee90a8d13b03c;
      ({}.constructor.defineProperty(EPET_VideoPlayerBrightcoveExterno, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPET_VideoPlayerBrightcoveExterno',
        writable: false,
      }));
      tiempoBonito = $___var_5ba52ffe9270dd73;
      ({}.constructor.defineProperty(tiempoBonito, 'name', {
        configurable: true,
        enumerable: false,
        value: 'tiempoBonito',
        writable: false,
      }));
      wheel = $___var_30fd6dc240e531a0;
      ({}.constructor.defineProperty(wheel, 'name', {
        configurable: true,
        enumerable: false,
        value: 'wheel',
        writable: false,
      }));
      EPETUtils_calcPosition = $___var_f4350df84532baf6;
      ({}.constructor.defineProperty(EPETUtils_calcPosition, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_calcPosition',
        writable: false,
      }));
      EPETUtils_calcAbsPosition = $___var_f03edf766f22c5b9;
      ({}.constructor.defineProperty(EPETUtils_calcAbsPosition, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_calcAbsPosition',
        writable: false,
      }));
      EPETUtils_calcAbsPositionV2 = $___var_806b65287798b138;
      ({}.constructor.defineProperty(EPETUtils_calcAbsPositionV2, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_calcAbsPositionV2',
        writable: false,
      }));
      EPETUtils_posicionarScrollEnPagina = $___var_a664eb2f2b542b84;
      ({}.constructor.defineProperty(EPETUtils_posicionarScrollEnPagina, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_posicionarScrollEnPagina',
        writable: false,
      }));
      EPETUtils_windowOpen = $___var_024801d8323b0ecb;
      ({}.constructor.defineProperty(EPETUtils_windowOpen, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_windowOpen',
        writable: false,
      }));
      EPETUtils_IFrameRequest = $___var_29ad66333c0ac899;
      ({}.constructor.defineProperty(EPETUtils_IFrameRequest, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_IFrameRequest',
        writable: false,
      }));
      EPETUtils_makeHttpRequest = $___var_4677c503433fe70d;
      ({}.constructor.defineProperty(EPETUtils_makeHttpRequest, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_makeHttpRequest',
        writable: false,
      }));
      EPETUtils_makeHttpRequestGet = $___var_629fb4d0e56b4224;
      ({}.constructor.defineProperty(EPETUtils_makeHttpRequestGet, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_makeHttpRequestGet',
        writable: false,
      }));
      EPETUtils_createHttpRequestObj = $___var_2220bcd2a747c10a;
      ({}.constructor.defineProperty(EPETUtils_createHttpRequestObj, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_createHttpRequestObj',
        writable: false,
      }));
      marcadoAmpliaFoto = $___var_321e7f8710ab41cc;
      ({}.constructor.defineProperty(marcadoAmpliaFoto, 'name', {
        configurable: true,
        enumerable: false,
        value: 'marcadoAmpliaFoto',
        writable: false,
      }));
      EPETtrackNewInfoFromAJAX = $___var_297ddac61b7548a2;
      ({}.constructor.defineProperty(EPETtrackNewInfoFromAJAX, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETtrackNewInfoFromAJAX',
        writable: false,
      }));
      EPETtrackWidgetNewInfoFromAJAX = $___var_432ffd7c66a95532;
      ({}.constructor.defineProperty(EPETtrackWidgetNewInfoFromAJAX, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETtrackWidgetNewInfoFromAJAX',
        writable: false,
      }));
      EPETCreaIframe = $___var_82bb534be75fcbd2;
      ({}.constructor.defineProperty(EPETCreaIframe, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETCreaIframe',
        writable: false,
      }));
      EPETaddClass = $___var_19d1ab0a1998b79f;
      ({}.constructor.defineProperty(EPETaddClass, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETaddClass',
        writable: false,
      }));
      EPETremoveClass = $___var_bdb4b6644ea8fd3c;
      ({}.constructor.defineProperty(EPETremoveClass, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETremoveClass',
        writable: false,
      }));
      EPETUtils_userSelectOff = $___var_fdb29c60461da37d;
      ({}.constructor.defineProperty(EPETUtils_userSelectOff, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_userSelectOff',
        writable: false,
      }));
      EPETUtils_userSelectOn = $___var_5def19cec3f38585;
      ({}.constructor.defineProperty(EPETUtils_userSelectOn, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_userSelectOn',
        writable: false,
      }));
      EPETUtils_fullEncodeURIComponent = $___var_9aeba34f382b0bed;
      ({}.constructor.defineProperty(EPETUtils_fullEncodeURIComponent, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_fullEncodeURIComponent',
        writable: false,
      }));
      EPETnewsNotify = $___var_33e720f416e6d2e5;
      ({}.constructor.defineProperty(EPETnewsNotify, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETnewsNotify',
        writable: false,
      }));
      EPETgetVScrollPosition = $___var_fe5174ebc6a25e00;
      ({}.constructor.defineProperty(EPETgetVScrollPosition, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETgetVScrollPosition',
        writable: false,
      }));
      EPETBrowserDims = $___var_13db98cf359b8dbf;
      ({}.constructor.defineProperty(EPETBrowserDims, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETBrowserDims',
        writable: false,
      }));
      EPETalternacampos = $___var_6c6bc01e4ca97ffa;
      ({}.constructor.defineProperty(EPETalternacampos, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETalternacampos',
        writable: false,
      }));
      teclaPulsada = $___var_0738e9b753fb8e9c;
      ({}.constructor.defineProperty(teclaPulsada, 'name', {
        configurable: true,
        enumerable: false,
        value: 'teclaPulsada',
        writable: false,
      }));
      teclaTelonEvent = $___var_2ee57475df3039dd;
      ({}.constructor.defineProperty(teclaTelonEvent, 'name', {
        configurable: true,
        enumerable: false,
        value: 'teclaTelonEvent',
        writable: false,
      }));
      bloqueaClick = $___var_6e57c7876e1c0d5e;
      ({}.constructor.defineProperty(bloqueaClick, 'name', {
        configurable: true,
        enumerable: false,
        value: 'bloqueaClick',
        writable: false,
      }));
      crearTelonMultimedia = $___var_ed140d4fb81b5ec0;
      ({}.constructor.defineProperty(crearTelonMultimedia, 'name', {
        configurable: true,
        enumerable: false,
        value: 'crearTelonMultimedia',
        writable: false,
      }));
      cerrarTelonMultimedia = $___var_e89bf6152f73008a;
      ({}.constructor.defineProperty(cerrarTelonMultimedia, 'name', {
        configurable: true,
        enumerable: false,
        value: 'cerrarTelonMultimedia',
        writable: false,
      }));
      ampliaFoto = $___var_a21af75a5ab61eba;
      ({}.constructor.defineProperty(ampliaFoto, 'name', {
        configurable: true,
        enumerable: false,
        value: 'ampliaFoto',
        writable: false,
      }));
      ampliaFotoCallback = $___var_dccb956af2af97fb;
      ({}.constructor.defineProperty(ampliaFotoCallback, 'name', {
        configurable: true,
        enumerable: false,
        value: 'ampliaFotoCallback',
        writable: false,
      }));
      f_pinta_datos = $___var_0e86f142d4365304;
      ({}.constructor.defineProperty(f_pinta_datos, 'name', {
        configurable: true,
        enumerable: false,
        value: 'f_pinta_datos',
        writable: false,
      }));
      f_muestra_ficha_colaborador = $___var_f5031262ba9c215f;
      ({}.constructor.defineProperty(f_muestra_ficha_colaborador, 'name', {
        configurable: true,
        enumerable: false,
        value: 'f_muestra_ficha_colaborador',
        writable: false,
      }));
      f_comprobar_submit = $___var_b7d2b1a49f0c0c8c;
      ({}.constructor.defineProperty(f_comprobar_submit, 'name', {
        configurable: true,
        enumerable: false,
        value: 'f_comprobar_submit',
        writable: false,
      }));
      f_iniciar_sesion = $___var_afb6f5c6205f40fc;
      ({}.constructor.defineProperty(f_iniciar_sesion, 'name', {
        configurable: true,
        enumerable: false,
        value: 'f_iniciar_sesion',
        writable: false,
      }));
      EPETUtils_filtraAlfanumerico = $___var_90f1669289e77406;
      ({}.constructor.defineProperty(EPETUtils_filtraAlfanumerico, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_filtraAlfanumerico',
        writable: false,
      }));
      EPETUtils_filtraJavascript = $___var_6efe1703fe56c81c;
      ({}.constructor.defineProperty(EPETUtils_filtraJavascript, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_filtraJavascript',
        writable: false,
      }));
      EPETUtils_filtraFormulario = $___var_b46508143b0af677;
      ({}.constructor.defineProperty(EPETUtils_filtraFormulario, 'name', {
        configurable: true,
        enumerable: false,
        value: 'EPETUtils_filtraFormulario',
        writable: false,
      }));
      loadCSS = $___var_b82cf74bf79e47b1;
      ({}.constructor.defineProperty(loadCSS, 'name', {
        configurable: true,
        enumerable: false,
        value: 'loadCSS',
        writable: false,
      }));
      loadEmbedObjectInDiv = $___var_06a86f8b4ab8bdab;
      ({}.constructor.defineProperty(loadEmbedObjectInDiv, 'name', {
        configurable: true,
        enumerable: false,
        value: 'loadEmbedObjectInDiv',
        writable: false,
      }));
      loadEmbedObjectInDivResponsive = $___var_7cfc327021a712b8;
      ({}.constructor.defineProperty(loadEmbedObjectInDivResponsive, 'name', {
        configurable: true,
        enumerable: false,
        value: 'loadEmbedObjectInDivResponsive',
        writable: false,
      }));
      reproductorMultimedia = $___var_1601a4b3252cd93b;
      ({}.constructor.defineProperty(reproductorMultimedia, 'name', {
        configurable: true,
        enumerable: false,
        value: 'reproductorMultimedia',
        writable: false,
      }));
      procesarAudiosFeed = $___var_37eca6c8fe1ee706;
      ({}.constructor.defineProperty(procesarAudiosFeed, 'name', {
        configurable: true,
        enumerable: false,
        value: 'procesarAudiosFeed',
        writable: false,
      }));
      reproductorMultimediaPlaylist = $___var_27080c82f407311b;
      ({}.constructor.defineProperty(reproductorMultimediaPlaylist, 'name', {
        configurable: true,
        enumerable: false,
        value: 'reproductorMultimediaPlaylist',
        writable: false,
      }));
      aniade_track_caja = $___var_3f46d59053a681a4;
      ({}.constructor.defineProperty(aniade_track_caja, 'name', {
        configurable: true,
        enumerable: false,
        value: 'aniade_track_caja',
        writable: false,
      }));
      tagsStrToJson = $___var_c8208475752180a6;
      ({}.constructor.defineProperty(tagsStrToJson, 'name', {
        configurable: true,
        enumerable: false,
        value: 'tagsStrToJson',
        writable: false,
      }));
      var $___var_ae3bbe8d79436d7f = !1;
      intervalPujas = $___var_ae3bbe8d79436d7f;
      function $___var_0a1b54a6fc9defd6 (e, a) {
        dispositivoMovil &&
        'undefined' != typeof MultimediaPEP[a] &&
        'undefined' != typeof MultimediaPEP[a].multimedia &&
        'undefined' != typeof MultimediaPEP[a].multimedia.setCustParams
          ? MultimediaPEP[a].multimedia.setCustParams(e)
          : MultimediaPEP[a].multimedia.preDibujaPlayer('', e);
      }
      function $___var_18cf94704f34d4b4 () {
        for (var e in MultimediaPEP) PBS.axm.d.prebidVideoRequest(e);
      }
      var $___var_97535f6b13751591 = document.getElementsByTagName('title')[0]
        ? document.getElementsByTagName('title')[0].innerHTML.replace(/'|"|\|/g, '')
        : '';
      cadena_titulo = $___var_97535f6b13751591;
      cadena_titulo = cadena_titulo.toLowerCase();
      var $___var_fe5428f9dfe3e09c = {
          es: {
            trans_no_disponible: 'No disponible para este dispositivo',
            trans_no_comenzado: 'La retransmisión aún no ha comenzado',
            trans_reanudara: 'La retransmisión se reanudará en breve',
            trans_finalizada: 'La retransmisión ha finalizado',
            trans_no_activa: 'Retransmisión no activa',
            publicidad: 'Publicidad',
            actualizar_plugin: 'Necesitas actualizar tu plugin de Flash',
            no_mp4: 'El navegador no admite vídeo HTML5/MP4',
            no_mp3: 'El navegador no admite audio HTML5/MP3',
            geobloqueado: 'Vídeo no disponible en su zona geográfica',
            bloqueado: 'Contenido compartido bloqueado',
            aun_no_disponible: 'El vídeo no está disponible todavía',
            no_disponible: 'El vídeo ya no está disponible',
            audio_geobloqueado: 'Audio no disponible en su zona geográfica',
            audio_aun_no_disponible: 'Audio no disponible todavía',
            audio_no_disponible: 'Audio ya no disponible',
            audio_no_encontrado: 'Audio no encontrado',
            necesita_plugin: 'Necesita instalar el plugin de flash para ver este contenido',
            no_encontrado: 'Vídeo no encontrado',
            cerrar: 'Cerrar',
            tamanio_real: 'Tamaño real',
            ver_perfil_eskup: 'Ver perfil en Eskup',
            teclear_usuario: 'Tienes que teclear usuario y contraseña',
            error_correo:
              "El campo 'usuario' no parece un correo electrónico. Por favor, revísalo.",
            foto: 'Foto',
            tamanio_ventana: 'Tamaño ventana',
            ver_perfil_completo: 'Ver perfil completo',
            avatar: 'Avatar',
            ver_video: 'Ver vídeo',
            vervideo_svg: '//ep00.epimg.net/reproductores/vervideo.svg',
            directo: 'EMISIÓN EN DIRECTO',
            siguiente_noticia: 'Siguiente noticia',
            anterior_noticia: 'Noticia anterior',
            primera_noticia: 'No hay noticia anterior',
            ultima_noticia: 'No hay más noticias',
          },
          'pt-br': {
            trans_no_disponible: 'Indisponível para este dispositivo',
            trans_no_comenzado: 'La retransmisión aún no ha comenzado',
            trans_reanudara: 'La retransmisión se reanudará en breve',
            trans_finalizada: 'La retransmisión ha finalizado',
            trans_no_activa: 'Retransmisión no activa',
            publicidad: 'Publicidade',
            actualizar_plugin: 'Você precisa atualizar seu plugin Flash',
            no_mp4: 'O navegador não suporta vídeo HTML5/MP4',
            no_mp3: 'O navegador não suporta HTML5/MP3',
            geobloqueado: 'Vídeo não disponível para sua região',
            bloqueado: 'Contenido compartido bloqueado',
            aun_no_disponible: 'O vídeo ainda não está disponível',
            no_disponible: 'O vídeo não está mais disponível',
            audio_geobloqueado: 'Audio no disponible en su zona geográfica',
            audio_aun_no_disponible: 'Audio no disponible todavía',
            audio_no_disponible: 'Audio ya no disponible',
            audio_no_encontrado: 'Audio no encontrado',
            necesita_plugin: 'Você precisa instalar o plugin flash para ver este conteúdo',
            no_encontrado: 'Vídeo não encontrado',
            cerrar: 'Fechar',
            tamanio_real: 'Tamanho real',
            ver_perfil_eskup: 'Ver perfil em Eskup',
            teclear_usuario: 'Digite usuário e senha',
            error_correo: "O campo 'usuário' não parece ser um e-mail. Por favor, verifique",
            foto: 'Foto',
            tamanio_ventana: 'Tamanho Janela',
            ver_perfil_completo: 'Ver perfil completo',
            avatar: 'Avatar',
            ver_video: 'Ver vídeo',
            vervideo_svg: '//ep00.epimg.net/reproductores/vervideo_pt-br.svg',
            directo: 'AO VIVO',
            siguiente_noticia: 'Próxima notícia',
            anterior_noticia: 'Notícias anteriores',
            primera_noticia: 'Nenhuma notícia anterior',
            ultima_noticia: 'Sem mais notícias',
          },
          ca: {
            trans_no_disponible: 'Transmissió no disponible per a aquest dispositiu',
            trans_no_comenzado: 'La retransmissió encara no ha començat',
            trans_reanudara: 'La retransmissió es reprendrà aviat',
            trans_finalizada: 'La retransmissió ha finalitzat',
            trans_no_activa: 'Retransmisión no activa',
            publicidad: 'Publicitat',
            actualizar_plugin: 'Necessites actualitzar el teu plugin de Flash',
            no_mp4: 'El navegador no admet vídeo HTML5/MP4',
            no_mp3: 'El navegador no admet HTML5/MP3',
            geobloqueado: 'Vídeo no disponible en la seva zona geogràfica',
            bloqueado: 'Contingut compartit bloquejat',
            aun_no_disponible: 'El vídeo encara no està disponible',
            no_disponible: 'El vídeo ja no està disponible',
            audio_geobloqueado: 'Áudio no disponible en la seva zona geogràfica',
            audio_aun_no_disponible: 'Àudio no disponible encara',
            audio_no_disponible: 'Àudio ja no disponible',
            audio_no_encontrado: 'Áudio no trobat',
            necesita_plugin:
              'Necessita instal\xB7lar el plugin de Flash per veure aquest contingut',
            no_encontrado: 'Vídeo no trobat',
            cerrar: 'Tancar',
            tamanio_real: 'Mida real',
            ver_perfil_eskup: 'Veure perfil en Eskup',
            teclear_usuario: 'Has de teclejar usuari i contrasenya',
            error_correo: "El camp 'usuari' no sembla un correu electrònic. Sisplau, revisa'l",
            foto: 'Foto',
            tamanio_ventana: 'Mida finestra',
            ver_perfil_completo: 'Veure perfil complet',
            avatar: 'Avatar',
            ver_video: 'Veure Vídeo',
            vervideo_svg: '//ep00.epimg.net/reproductores/vervideo_ca.svg',
            directo: 'EMISSIÓ EN DIRECTE',
            siguiente_noticia: 'Propera notícia',
            anterior_noticia: 'Notícia anterior',
            primera_noticia: 'No hi ha notícia anterior',
            ultima_noticia: 'No hi ha més notícies',
          },
          en: {
            trans_no_disponible: 'No disponible para este dispositivo',
            trans_no_comenzado: 'La retransmisión aún no ha comenzado',
            trans_reanudara: 'La retransmisión se reanudará en breve',
            trans_finalizada: 'La retransmisión ha finalizado',
            trans_no_activa: 'Retransmisión no activa',
            publicidad: 'Publicidad',
            actualizar_plugin: 'Necesitas actualizar tu plugin de Flash',
            no_mp4: 'El navegador no admite vídeo HTML5/MP4',
            no_mp3: 'El navegador no admite audio HTML5/MP3',
            geobloqueado: 'Vídeo no disponible en su zona geográfica',
            bloqueado: 'Contenido compartido bloqueado',
            aun_no_disponible: 'El vídeo no está disponible todavía',
            no_disponible: 'El vídeo ya no está disponible',
            audio_geobloqueado: 'Audio no disponible en su zona geográfica',
            audio_aun_no_disponible: 'Audio no disponible todavía',
            audio_no_disponible: 'Audio ya no disponible',
            audio_no_encontrado: 'Audio no encontrado',
            necesita_plugin: 'Necesita instalar el plugin de flash para ver este contenido',
            no_encontrado: 'Vídeo no encontrado',
            cerrar: 'Cerrar',
            tamanio_real: 'Tamaño real',
            ver_perfil_eskup: 'Ver perfil en Eskup',
            teclear_usuario: 'Tienes que teclear usuario y contraseña',
            error_correo:
              "El campo 'usuario' no parece un correo electrónico. Por favor, revísalo.",
            foto: 'Foto',
            tamanio_ventana: 'Tamaño ventana',
            ver_perfil_completo: 'Ver perfil completo',
            avatar: 'Avatar',
            ver_video: 'Ver vídeo',
            vervideo_svg: '//ep00.epimg.net/reproductores/vervideo.svg',
            directo: 'EMISIÓN EN DIRECTO',
            siguiente_noticia: 'Siguiente noticia',
            anterior_noticia: 'Noticia anterior',
            primera_noticia: 'No hay noticia anterior',
            ultima_noticia: 'No hay más noticias',
          },
        },
        $___var_9603b85aff55e541 = 'es',
        $___var_a38c21390ccf20e0 = 'undefined' != typeof MPEP_responsive && MPEP_responsive;
      LANG_MSG = $___var_fe5428f9dfe3e09c;
      MPEP_idioma = $___var_9603b85aff55e541;
      MPEP_responsive = $___var_a38c21390ccf20e0;
      function $___var_527d3f6804b81aaf () {
        var e,
          a = document.getElementsByTagName('meta'),
          o = '';
        for (e = 0; e < a.length; e++)
          'lang' == a[e].getAttribute('name') && (o = a[e].getAttribute('content').toLowerCase()),
            'viewport' == a[e].getAttribute('name') && (MPEP_responsive = !0);
        LANG_MSG.hasOwnProperty(o) && (MPEP_idioma = o);
      }
      if ((parseaMetas(), 'undefined' == typeof LANG)) var LANG = MPEP_idioma;
      else LANG_MSG.hasOwnProperty(LANG) || (LANG = 'es');
      var $___var_607344090ad70794,
        $___var_15b05d751e179816 = null,
        $___var_d7fae5c25e945d08 = null,
        $___var_dbe1aac27be66a8a = null,
        $___var_324c4e4cb0ded776 = null,
        $___var_25014daaca7305e1 = null,
        $___var_5488d729b8ce6094 = navigator.userAgent.toLowerCase(),
        $___var_0661803bee453930 = navigator.userAgent;
      userAgentMatches = $___var_607344090ad70794;
      isOpera = $___var_15b05d751e179816;
      isSafari = $___var_d7fae5c25e945d08;
      isGecko = $___var_dbe1aac27be66a8a;
      isIE = $___var_324c4e4cb0ded776;
      isMobile = $___var_25014daaca7305e1;
      userAgent = $___var_5488d729b8ce6094;
      ua = $___var_0661803bee453930;
      /KHTML/.test(ua) && (isSafari = 1),
        (userAgentMatches = ua.match(/AppleWebKit\/([^\s]*)/)),
        userAgentMatches && userAgentMatches[1] && (isSafari = parseFloat(userAgentMatches[1])),
        isSafari ||
          ((userAgentMatches = ua.match(/Opera[\s\/]([^\s]*)/)),
          userAgentMatches && userAgentMatches[1]
            ? (isOpera = parseFloat(userAgentMatches[1]))
            : ((userAgentMatches = ua.match(/MSIE\s([^;]*)/)),
              userAgentMatches && userAgentMatches[1]
                ? (isIE = parseFloat(userAgentMatches[1]))
                : ((userAgentMatches = ua.match(/Gecko\/([^\s]*)/)),
                  userAgentMatches && (isGecko = 1)))),
        'undefined' == typeof getInternetExplorerVersion &&
          (getInternetExplorerVersion = function () {
            const $___old_2cbe0c375cc5aeec = {}.constructor.getOwnPropertyDescriptor(
              Navigator.prototype,
              'userAgent'
            );
            try {
              if ($___old_2cbe0c375cc5aeec)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___stub_dc70937786909300.userAgent
                ));
              return function () {
                var e = 0;
                if ('Microsoft Internet Explorer' == navigator.appName) {
                  var a = navigator.userAgent,
                    o = /MSIE ([0-9]{1,}[.0-9]{0,})/;
                  null != o.exec(a) && (e = parseFloat(RegExp.$1));
                } else if ('Netscape' == navigator.appName) {
                  var a = navigator.userAgent,
                    o = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/;
                  null != o.exec(a) && (e = parseFloat(RegExp.$1));
                }
                return e;
              }.apply(this, arguments);
            } finally {
              if ($___old_2cbe0c375cc5aeec)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___old_2cbe0c375cc5aeec
                ));
            }
          });
      var $___var_44bfa0efc2720e85 = getInternetExplorerVersion(),
        $___var_2ad1b1318a9c3fe5 = !1,
        $___var_4d1f54a70d5dc2ad = !1;
      IEv = $___var_44bfa0efc2720e85;
      isIphone = $___var_2ad1b1318a9c3fe5;
      isIpad = $___var_4d1f54a70d5dc2ad;
      -1 < userAgent.indexOf('iphone')
        ? (isIphone = !0)
        : -1 < userAgent.indexOf('ipad') && (isIpad = !0);
      var $___var_df3c42b79abe0215 = isIphone || isIpad,
        $___var_22dee7e6852ca64f =
          iDevice || -1 < userAgent.indexOf('android') || -1 < userAgent.indexOf('mobile'),
        $___var_9b612cf29b8e3ec2 = EPETBrowserDims();
      iDevice = $___var_df3c42b79abe0215;
      dispositivoMovil = $___var_22dee7e6852ca64f;
      dimensionesPEP = $___var_9b612cf29b8e3ec2;
      if ('undefined' == typeof anchoReferenciaMobile) var anchoReferenciaMobile = 600;
      var $___var_2fcae0f5c7f9dcc8;
      ev_reescalado = $___var_2fcae0f5c7f9dcc8;
      if (
        (EPETaddEvent(window, void 0, function () {
          clearTimeout(ev_reescalado),
            (ev_reescalado = setTimeout(function () {
              dimensionesPEP = EPETBrowserDims();
            }, 300));
        }),
        'undefined' == typeof UN)
      )
        var UN = 'ep';
      var $___var_5a7268868ecae46b = 0 == document.location.pathname.indexOf('/m/');
      versionMovil = $___var_5a7268868ecae46b;
      if ('undefined' == typeof url_cache) var url_cache = '//ep02.epimg.net';
      if ('undefined' == typeof videoDataLayerMPEP)
        var videoDataLayerMPEP = {
          ep: {
            url_cache: '//ep02.epimg.net',
            id_player_mediateca_PEP: '141',
            id_cuenta_mediateca_PEP: 'elpais',
            server_name: '//elpais.com',
          },
          retina: {
            url_cache: '//rt02.epimg.net',
            id_player_mediateca_PEP: '248',
            id_cuenta_mediateca_PEP: 'retina',
            server_name: '//retina.elpais.com',
          },
          dias5: {
            url_cache: '//d502.epimg.net',
            id_player_mediateca_PEP: '221',
            id_cuenta_mediateca_PEP: 'cincodias',
            server_name: '//cincodias.elpais.com',
          },
          verne: {
            url_cache: '//ep02.epimg.net',
            id_player_mediateca_PEP: '238',
            id_cuenta_mediateca_PEP: 'verne',
            server_name: '//verne.elpais.com',
          },
          'ep-elpais-eps': {
            url_cache: '//ep02.epimg.net',
            id_player_mediateca_PEP: '154',
            id_cuenta_mediateca_PEP: 'elpais',
            server_name: '//elpais.com',
          },
          'ep-elcomidista': {
            url_cache: '//ep02.epimg.net',
            id_player_mediateca_PEP: '232',
            id_cuenta_mediateca_PEP: 'elcomidista',
            server_name: '//elcomidista.elpais.com',
          },
          'ep-epv-canal_el_comidista': {
            url_cache: '//ep02.epimg.net',
            id_player_mediateca_PEP: '232',
            id_cuenta_mediateca_PEP: 'elcomidista',
            server_name: '//epv.elpais.com',
          },
        };
      var $___var_abf5832f4451678e = { urlCacheMPEP: url_cache };
      datosMPEP = $___var_abf5832f4451678e;
      if ('undefined' == typeof css_multimedia)
        var css_multimedia = '//ep00.epimg.net/estilos/multimedia/multimedia.css';
      if ('undefined' == typeof url_reproductor_epet)
        var url_reproductor_epet = '/reproductores/playerPEP.swf';
      if ('undefined' == typeof url_reproductor_epet_live)
        var url_reproductor_epet_live = '/reproductores/playerPEP_live.swf';
      if ('undefined' == typeof simplemediaplayer_mediateca_PEP)
        var simplemediaplayer_mediateca_PEP =
          '//playertop.elpais.com/psdmedia/media/simple/js/SimpleMediaPlayer.min.js';
      if (
        ('undefined' != typeof tplib &&
          !0 == tplib &&
          (simplemediaplayer_mediateca_PEP =
            '//playertop.elpais.com/psdmedia/media/simple/js/lib/SimpleMediaPlayer.lib.js'),
        'undefined' == typeof id_player_mediateca_PEP)
      )
        var id_player_mediateca_PEP = '141';
      if ('undefined' == typeof id_cuenta_mediateca_PEP) var id_cuenta_mediateca_PEP = 'elpais';
      if ('undefined' == typeof id_player_mediateca_PEP_audio)
        var id_player_mediateca_PEP_audio = '311';
      if ('undefined' == typeof id_cuenta_mediateca_PEP_audio)
        var id_cuenta_mediateca_PEP_audio = 'elpais';
      if ('undefined' == typeof tipo_player_mediateca_PEP)
        var tipo_player_mediateca_PEP = 'mediateca';
      var $___var_6b9a7ee5014e5c9b = null,
        $___var_dd4ed49b2ddeef9a = [];
      mediateca = $___var_6b9a7ee5014e5c9b;
      videosMediateca = $___var_dd4ed49b2ddeef9a;
      if ('undefined' != typeof mediateca_activo_PEP && mediateca_activo_PEP) {
        var PSDss = document.createElement('script');
        (PSDss.type = 'text/javascript'),
          (PSDss.onload = function () {
            mediateca = mediateca || !0;
            for (var e = 0; e < videosMediateca.length; e++)
              (videosMediateca[e].datosTOP.managerOpt = videosMediateca[e].params),
                new psd.media.TopEmbed(videosMediateca[e].datosTOP);
          }),
          (PSDss.src = simplemediaplayer_mediateca_PEP),
          document.getElementsByTagName('head')[0].appendChild(PSDss);
      }
      if ('undefined' == typeof UrlPublicidad)
        var UrlPublicidad =
          '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_web%2Fplayer_video%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]';
      if ('undefined' == typeof UrlPublicidadOveron)
        var UrlPublicidadOveron =
          '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Foveron_player%2Felpais_web%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]';
      if ('undefined' == typeof UrlPublicidadCnbc)
        var UrlPublicidadCnbc =
          '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_cnbc_player_web%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]';
      if ('undefined' == typeof postroll_HTML5) var postroll_HTML5 = !0;
      if ('undefined' == typeof publicidad_HTML5) var publicidad_HTML5 = !0;
      if ('undefined' == typeof modoSiguientesVideos) var modoSiguientesVideos = 0;
      if ('undefined' == typeof modoSiguientesVideosTimeout) var modoSiguientesVideosTimeout = 5;
      if ('undefined' == typeof controlesNativosAudio) var controlesNativosAudio = !1;
      if ('undefined' == typeof controlesNativosVideo) var controlesNativosVideo = !1;
      if ('undefined' == typeof orden_busqueda_url_externa)
        var orden_busqueda_url_externa = ['muzu', 'youtube'];
      var $___var_4651075987f76840 = 'nocargado',
        $___var_b4afacc224ce53d3 = 1;
      code_ima3_HTML5_cargado = $___var_4651075987f76840;
      volumen_global = $___var_b4afacc224ce53d3;
      if ('undefined' == typeof EPET_forzarHTML5) var EPET_forzarHTML5 = !0;
      if ('undefined' == typeof prebidVideoPEP) var prebidVideoPEP = !1;
      if ('undefined' == typeof vpaidHTML5PEP) var vpaidHTML5PEP = !1;
      if ('undefined' == typeof adunitsMPEP)
        var adunitsMPEP = {
          'ep-elpais-icon':
            '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_icon_web%2Fplayer_video%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]',
          'ep-elpais-tentaciones':
            '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_tentaciones_web%2Fplayer_video%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]',
          'ep-elpais-buenavida':
            '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_buenavida_web%2Fplayer_video%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]',
          'ep-elpais-ciencia':
            '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_materia_web%2Fplayer_video%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]',
          'ep-elpais-eps':
            '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_eps_web%2Fplayer_video%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]',
          'ep-economia':
            '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_finanzas_economia_web%2Fplayer_video%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]',
          retina:
            '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_finanzas_retina_web%2Fplayer_video%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]',
          dias5:
            '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_finanzas_cincodias_web%2Fplayer_video%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]',
          verne:
            '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F7811748%2Felpais_verne_web%2Fplayer_video%2Fflash&ciu_szs=&impl=s&gdfp_req=1&env=vp&output=vast&correlator={random}&unviewed_position_start=1&description_url=[description_url]',
        };
      function $___var_5628410a63d9a4b1 (e) {
        var a;
        if (!e.match(/youtu/i)) {
          if (e.match(/muzu/i)) e = e.replace('/a/', '/i/');
          else if (e.match(/vimeo/i)) {
            if (e.match(/player/i)) return e;
            var o = /\/\d*$/,
              t = o.exec(e);
            if (t[0]) return '//player.vimeo.com/video' + t[0];
          }
          return e;
        }
        var d = /youtube.*\/embed\//i;
        if (!d.test(e)) {
          var o = /([^\/]*\/\/[^\/]*youtube[^\/]*)\/.*v=([^&]+)/i;
          if (((a = o.exec(e)), a)) return a[1] + '/embed/' + a[2];
          var r = /\/\/youtu\.be\/([^\?\/]+)/;
          if (((a = r.exec(e)), a)) return '//www.youtube.com/embed/' + a[1];
        }
        return e;
      }
      if ('undefined' == typeof eligeUrlenlace) {
        function eligeUrlenlace (arrayUrls) {
          var n = arrayUrls.length;
          if (0 == n) return '';
          if (1 == n) return arreglaUrl(arrayUrls[0]);
          var re, regexp, cadena_urls, result;
          for (
            cadena_urls = '||' + arrayUrls.join('||') + '||', i = 0;
            i < orden_busqueda_url_externa.length;
            i++
          )
            if (
              ((re =
                '/\\|\\|([^\\/]*\\/\\/[^\\/]*' +
                orden_busqueda_url_externa[i] +
                '[^\\/]*\\/?[^\\|\\|]*)\\|\\|/'),
              (regexp = new RegExp(eval(re))),
              (result = regexp.exec(cadena_urls)),
              result)
            )
              return arreglaUrl(result[1]);
          return arreglaUrl(arrayUrls[0]);
        }
      }
      var $___var_8dc9ed6295a9cc01 = document.getElementsByTagName('title')[0]
          ? document.getElementsByTagName('title')[0].innerHTML.replace(/'|"|\|/g, '')
          : 'sin título',
        $___var_36fad1972488abda = 'onorientationchange' in window,
        $___var_9c67d8c7dca5bf63 = supportsOrientationChange ? 'orientationchange' : 'resize',
        $___var_d0cf3d73ed797dfc =
          navigator.connection || navigator.mozConnection || navigator.webkitConnection,
        $___var_0494afab5d60060a = new (function () {
          var e = this;
          (e.release = '1.0.2'),
            (e.installed = !1),
            (e.major = -1),
            (e.minor = -1),
            (e.revision = -1),
            (e.revisionStr = ''),
            (e.activeXVersion = '');
          var a = [
              {
                name: 'ShockwaveFlash.ShockwaveFlash.7',
                version: function (e) {
                  return o(e);
                },
              },
              {
                name: 'ShockwaveFlash.ShockwaveFlash.6',
                version: function (e) {
                  var a = '6,0,21';
                  try {
                    (e.AllowScriptAccess = 'always'), (a = o(e));
                  } catch (e) {}
                  return a;
                },
              },
              {
                name: 'ShockwaveFlash.ShockwaveFlash',
                version: function (e) {
                  return o(e);
                },
              },
            ],
            o = function (e) {
              var a = -1;
              try {
                a = e.GetVariable('$version');
              } catch (e) {}
              return a;
            },
            t = function (e) {
              var a = -1;
              try {
                a = new ActiveXObject(e);
              } catch (e) {}
              return a;
            },
            d = function (e) {
              var a = e.split(',');
              return {
                major: parseInt(a[0].split(' ')[1], 10),
                minor: parseInt(a[1], 10),
                revision: parseInt(a[2], 10),
                revisionStr: a[2],
              };
            },
            r = function (a) {
              return parseInt(a.replace(/[a-zA-Z]/g, ''), 10) || e.revision;
            };
          (e.majorAtLeast = function (a) {
            return e.major >= a;
          }),
            (e.FlashDetect = (function () {
              if (navigator.plugins && 0 < navigator.plugins.length) {
                var o = navigator.mimeTypes;
                if (
                  o &&
                  o['application/x-shockwave-flash'] &&
                  o['application/x-shockwave-flash'].enabledPlugin &&
                  o['application/x-shockwave-flash'].enabledPlugin.description
                ) {
                  var n = o['application/x-shockwave-flash'].enabledPlugin.description,
                    l = n.split(' '),
                    s = l[2].split('.');
                  (e.major = parseInt(s[0], 10)),
                    (e.minor = parseInt(s[1], 10)),
                    (e.revisionStr = l[3]),
                    (e.revision = r(e.revisionStr)),
                    (e.installed = !0);
                }
              } else if (-1 == navigator.appVersion.indexOf('Mac') && window.execScript)
                for (var c, u = -1, m = 0; m < a.length && -1 == u; m++)
                  if (
                    ((c = t(a[m].name)),
                    'object' == typeof c && ((e.installed = !0), (u = a[m].version(c)), -1 != u))
                  ) {
                    var y = d(u);
                    (e.major = y.major),
                      (e.minor = y.minor),
                      (e.revision = y.revision),
                      (e.revisionStr = y.revisionStr),
                      (e.activeXVersion = u);
                  }
            })());
        })(),
        $___var_1082b30ff446bea5 = FlashDetect.major,
        $___var_6b3b55de493524bc = FlashDetect.revisionStr,
        $___var_60fd91300f116cd0 = revisionFlash.replace(/[^\d]+/g, '');
      PAGE_TITLE = $___var_8dc9ed6295a9cc01;
      supportsOrientationChange = $___var_36fad1972488abda;
      orientationEvent = $___var_9c67d8c7dca5bf63;
      connectionPEP = $___var_d0cf3d73ed797dfc;
      FlashDetect = $___var_0494afab5d60060a;
      versionFlash = $___var_1082b30ff446bea5;
      revisionFlash = $___var_6b3b55de493524bc;
      subVersionFlash = $___var_60fd91300f116cd0;
      function $___var_d23d5e7639d740bb (minVersion, source, width, height, op, id) {
        var self = this,
          baseElement = document.createElement('div'),
          options = arguments[4] || {},
          winIE =
            -1 != navigator.appVersion.toLowerCase().indexOf('win') &&
            'Microsoft Internet Explorer' == navigator.appName,
          idCount = EPET_FlashHTML.idCount++,
          namespaceAdded = !1,
          namespaceName = 'flashtml',
          namespaceURN = 'http://www.featureblend.com/2007/flashtml/';
        if ('undefined' == typeof id) var id = 'objetoFlash' + (Math.random() + '').substr(2, 9);
        var idObjeto = id;
        (self.domTemplate = ''),
          (self.innerHTML = ''),
          (self.xhtml = ''),
          (self.inDocumentElement = '');
        var getCabVersion = function (e) {
            return e + ',0,0,0';
          },
          getNameValueAttrFromOptions = function (e) {
            return 'undefined' == typeof options[e]
              ? ''
              : getNameValueAttributes(e, options[e].toString());
          },
          getNameValueAttributes = function (e, a) {
            return { '@name': e, '@value': a };
          },
          createElementFromRule = function (e, a) {
            var o = safeCreateElement(e.replace('#', ''));
            return a.appendChild(o);
          },
          getID = function () {
            if (idObjeto != null && '' != idObjeto) return idObjeto;
            var e = /.*\/([\w-]+)\.swf\??/i;
            return e.test(source) ? RegExp.$1 : 'ObjetoSWF';
          },
          setAttributeFromRule = function (e, a, o) {
            o.setAttribute(e.replace('@', ''), a);
          },
          safeCreateElement = function (e) {
            return ('object' == e || 'param' == e) && document.namespaces
              ? (namespaceAdded ||
                  (document.namespaces.add(namespaceName, namespaceURN), (namespaceAdded = !0)),
                document.createElement(namespaceName + ':' + e))
              : document.createElement(e);
          },
          htmlTidy = function (str) {
            return (
              (str = str.replace(/<\?xml([^>]*)>/, '')),
              (str = str.replace(eval('/' + namespaceName + ':/g'), '')),
              (str = str.replace(/><\/param>/g, '>')),
              (str = str.replace(/(<param )(.*?)(>)/g, '<param $2 />')),
              str
            );
          },
          parseRules = function (e, a) {
            for (var o in e)
              if ('#' == o.charAt(0)) {
                var t;
                if ('object' == typeof e[o] && e[o].length)
                  for (var d = 0; d < e[o].length; d++)
                    '' !== e[o][d]() &&
                      ((t = createElementFromRule(o, a)), parseRules(e[o][d](), t));
                else
                  'function' == typeof e[o] &&
                    '' !== e[o]() &&
                    ((t = createElementFromRule(o, a)), parseRules(e[o](), t));
              } else
                '@' == o.charAt(0) &&
                  ('function' == typeof e[o] && '' !== e[o]()
                    ? setAttributeFromRule(o, e[o](), a)
                    : 'string' == typeof e[o] && setAttributeFromRule(o, e[o], a));
          },
          structuralRules = {
            '#object': function () {
              return {
                '@type': function () {
                  return winIE ? '' : 'application/x-shockwave-flash';
                },
                '@codebase': function () {
                  return winIE
                    ? 'http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab#version=' +
                        getCabVersion(minVersion)
                    : '';
                },
                '@classid': function () {
                  return winIE ? 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' : '';
                },
                '@data': function () {
                  return winIE ? '' : source;
                },
                '@width': function () {
                  return width.toString();
                },
                '@height': function () {
                  return height.toString();
                },
                '@id': function () {
                  return getID();
                },
                '@tabindex': function () {
                  return options.tabindex || '';
                },
                '#param': [
                  function () {
                    return winIE ? getNameValueAttributes('movie', source) : '';
                  },
                  function () {
                    return getNameValueAttrFromOptions('allowscriptaccess');
                  },
                  function () {
                    return getNameValueAttrFromOptions('allowfullscreen');
                  },
                  function () {
                    return getNameValueAttrFromOptions('swliveconnect');
                  },
                  function () {
                    return getNameValueAttrFromOptions('play');
                  },
                  function () {
                    return getNameValueAttrFromOptions('loop');
                  },
                  function () {
                    return getNameValueAttrFromOptions('menu');
                  },
                  function () {
                    return getNameValueAttrFromOptions('quality');
                  },
                  function () {
                    return getNameValueAttrFromOptions('scale');
                  },
                  function () {
                    return getNameValueAttrFromOptions('align');
                  },
                  function () {
                    return getNameValueAttrFromOptions('salign');
                  },
                  function () {
                    return getNameValueAttrFromOptions('wmode');
                  },
                  function () {
                    return getNameValueAttrFromOptions('bgcolor');
                  },
                  function () {
                    return getNameValueAttrFromOptions('base');
                  },
                  function () {
                    var e = '';
                    if (options.flashvars) {
                      var a =
                        'object' == typeof options.flashvars
                          ? EPET_FlashHTML.getQueryStrFromObj(options.flashvars)
                          : options.flashvars;
                      e = getNameValueAttributes('flashvars', a);
                    }
                    return e;
                  },
                ],
              };
            },
          };
        (self.append = function (e) {
          return addToElement(e, !1);
        }),
          (self.replace = function (e) {
            return addToElement(e, !0);
          });
        var addToElement = function (e, a) {
          var o = !1,
            t = 'object' == typeof e ? e : document.getElementById(e);
          if (!self.inDocumentElement) {
            if (winIE)
              a ? (t.innerHTML = self.xhtml) : (t.innerHTML += self.xhtml),
                (self.inDocumentElement = document.getElementById(getID())),
                window.attachEvent('onunload', self.garbageCollection);
            else {
              if (a) for (; t.firstChild; ) t.removeChild(t.firstChild);
              self.inDocumentElement = t.appendChild(baseElement.childNodes[0]);
            }
            o = self.inDocumentElement;
          }
          return o;
        };
        (self.garbageCollection = function () {
          winIE && self.inDocumentElement && (self.inDocumentElement = null);
        }),
          (self.EPET_FlashHTML = (function () {
            parseRules(structuralRules, baseElement),
              (self.domTemplate = baseElement.childNodes[0]),
              (self.innerHTML = baseElement.innerHTML),
              (self.xhtml = htmlTidy(self.innerHTML));
          })()),
          (self.writeHTML = function () {
            document.write(self.xhtml);
          });
      }
      (EPET_FlashHTML.getQueryStrFromObj = function (e) {
        var a = '';
        for (var o in e) e.hasOwnProperty(o) && (a += encodeURI(o) + '=' + encodeURI(e[o]) + '&');
        return a.substring(0, a.length - 1);
      }),
        (EPET_FlashHTML.idCount = 0),
        (EPET_FlashHTML.idPattern = 'EPET_FlashHTML_'),
        (EPET_FlashHTML.release = '1.0.1');
      function $___var_cc2d3aed6d28c31f (e, a, o, t, d, r, n, l, s, c, u) {
        var m;
        if (
          ('undefined' == typeof c
            ? ((m = 'div_GraficoFlash_' + (Math.random() + '').substr(2, 9)),
              document.write('<div id="' + m + '"></div>'))
            : (m = c),
          versionFlash >= a)
        ) {
          var y = { menu: 'false', wmode: 'window' };
          for (var _ in t) y[_] = t[_];
          var f = '';
          for (var _ in o) f += encodeURIComponent(_) + '=' + encodeURIComponent(o[_]) + '&';
          0 < f.length && (e = e + '?' + f.substr(0, f.length - 1));
          var v = new EPET_FlashHTML(a, e, d, r, y, u);
          v.replace(m);
        } else
          '' != n &&
            (document.getElementById(m).innerHTML =
              '<a href="' +
              l +
              '" target="_blank" ><img src="' +
              n +
              '" width="' +
              d +
              '" height="' +
              r +
              '" border="0"  alt="' +
              s +
              '" /></a>\n');
      }
      var $___var_0805021dfd983902 = function (e) {
        var a = Math.floor;
        (this._datosMarcado = e),
          (this.eventos = {}),
          (this.marcaEvento = function (e, o) {
            if ('undefined' != typeof DTM) {
              var t = '',
                d = e;
              switch (e) {
                case 'adStart':
                  (t = DTM.events.ADPLAY), (d = e + ' _' + this._datosMarcado.adCue);
                  break;
                case 'adComplete':
                  (t = DTM.events.ADEND), (d = e + ' _' + this._datosMarcado.adCue);
                  break;
                case 'adSkip':
                  (t = DTM.events.ADSKIP), (d = e + ' _' + this._datosMarcado.adCue);
                  break;
                case 'adError':
                  (t = DTM.events.ADERROR), (d = e + ' _' + this._datosMarcado.adCue);
                  break;
                case 'mediaBegin':
                  t = DTM.events.VIDEOPLAY;
                  break;
                case 'mediaComplete':
                  t = DTM.events.VIDEOEND;
                  break;
                case 'halfmediaComplete':
                  t = DTM.events.VIDEO50;
                  break;
                case 'adPaused':
                  (t = DTM.events.ADPAUSED), this.eventos[d] && delete this.eventos[d];
                  break;
                case 'mediaPaused':
                  (t = DTM.events.VIDEOPAUSED), this.eventos[d] && delete this.eventos[d];
                  break;
                case 'adResumed':
                  (t = DTM.events.ADRESUMED), this.eventos[d] && delete this.eventos[d];
                  break;
                case 'mediaResumed':
                  (t = DTM.events.VIDEORESUMED), this.eventos[d] && delete this.eventos[d];
                  break;
                case 'videoready':
                  'undefined' != typeof DTM.events.VIDEOREADY &&
                    DTM.trackEvent(DTM.events.VIDEOREADY, { player: o });
                  break;
                default:
              }
              this.eventos[d] ||
                ((this.eventos[d] = 1),
                '' != t &&
                  DTM.trackEvent(t, {
                    videoID: this._datosMarcado.referencia,
                    videoName:
                      this._datosMarcado.titulo.replace(/'|"|\|/g, '') +
                      ' - ' +
                      this._datosMarcado.referencia,
                    adTitle:
                      'undefined' != typeof this._datosMarcado.adTitle &&
                      '' != this._datosMarcado.adTitle
                        ? this._datosMarcado.adTitle
                        : '',
                    uniqueVideoID:
                      'undefined' != typeof this._datosMarcado.uid && '' != this._datosMarcado.uid
                        ? this._datosMarcado.uid
                        : '',
                    videoSource: this._datosMarcado.fuente ? this._datosMarcado.fuente : 'propio',
                    videoCreateSection:
                      'undefined' != typeof this._datosMarcado.seccion_creacion &&
                      '' != this._datosMarcado.seccion_creacion
                        ? this._datosMarcado.seccion_creacion
                        : '',
                    videoOrder:
                      'undefined' == typeof this._datosMarcado.posSiguientesVideos
                        ? ''
                        : this._datosMarcado.posSiguientesVideos,
                    videoRepMode:
                      'undefined' != typeof this._datosMarcado.modoReproduccion &&
                      '' != this._datosMarcado.modoReproduccion
                        ? this._datosMarcado.modoReproduccion
                        : '',
                    playerType: this._datosMarcado.playerName
                      ? this._datosMarcado.playerName.replace(/'|"|\|/g, '')
                      : '',
                    mediaFormat: this._datosMarcado.media,
                    videoDuration: a(this._datosMarcado.duracion),
                    videoRepType: this._datosMarcado.tipoReproduccion,
                    adEnable:
                      this._datosMarcado.publicidad +
                      ('' == this._datosMarcado.ad ? '' : ' ' + this._datosMarcado.ad),
                    adMode: this._datosMarcado.adCue,
                    tags: this._datosMarcado.noticiaTags,
                    eventTags: this._datosMarcado.eventTags,
                    authors: this._datosMarcado.autores,
                    currentTime: this._datosMarcado.currentTime
                      ? this._datosMarcado.currentTime
                      : 0,
                  }));
            }
          });
      };
      EPET_Marcado_Multimedia = $___var_0805021dfd983902;
      function $___var_606da16e219c2362 (e) {
        var a = MultimediaPEP[e.id].multimedia;
        (e.uid = a.uid()),
          (e.seccion_creacion = a.seccion_creacion()),
          (e.fuente = a.fuente()),
          (e.tags = a.tags()),
          (e.autores = a.autores()),
          a.marcado(e);
      }
      var $___var_0e63ac50a3521585 =
        11 < versionFlash || (11 == versionFlash && 1 <= FlashDetect.minor);
      videoFlash = $___var_0e63ac50a3521585;
      dispositivoMovil &&
        (-1 < userAgent.indexOf('firefox') || -1 < userAgent.indexOf('android 2')) &&
        (publicidad_HTML5 = !1);
      var $___var_c89e917a8710fdee = !1,
        $___var_172e7810943d9bde = '',
        $___var_418b4e8057c9bf29 = {},
        $___var_7968f8a5c76eb5b3 = '',
        $___var_a03ad00334314c1c = 0;
      reproduciendo = $___var_c89e917a8710fdee;
      MultimediaActual = $___var_172e7810943d9bde;
      MultimediaPEP = $___var_418b4e8057c9bf29;
      id_pidiendoDatos = $___var_7968f8a5c76eb5b3;
      contadorMultimedia = $___var_a03ad00334314c1c;
      function $___var_e60f21c45f6f57a6 () {
        var e = document.createElement('video');
        return (
          'undefined' != typeof e.canPlayType &&
          (!!e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, '') ||
            !!e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/no/, ''))
        );
      }
      var $___var_6cffdeb8a939f1a7 = soporteVideo(),
        $___var_1b614cffd6ee9471 =
          window.MediaSource &&
          window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
      canPlayMP4 = $___var_6cffdeb8a939f1a7;
      canPlayHLS = $___var_1b614cffd6ee9471;
      function $___var_a63add725de2a0ec (e, a, o) {
        document.addEventListener ? e.addEventListener(a, o, !1) : e.attachEvent('on' + a, o);
      }
      function $___var_a520aedff27ca635 (e, a, o) {
        document.removeEventListener
          ? e.removeEventListener(a, o)
          : document.detachEvent && e.detachEvent('on' + a, o);
      }
      function $___var_d7c359f3cf7be2d2 (e) {
        document.documentElement.scrollTop
          ? (document.documentElement.scrollTop = e)
          : window.scrollTo(0, e);
      }
      function $___var_a5d69827363a79f1 (e) {
        var a = 0;
        if (e.offsetParent)
          do a += e.offsetTop;
          while ((e = e.offsetParent));
        return a;
      }
      function $___var_4d580933afa154c8 (e, a) {
        MultimediaReproduciendo(e, a);
      }
      function $___var_0bd3ac909199d1db (e, a) {
        if ('' != MultimediaActual && e != MultimediaActual) {
          MultimediaPEP[MultimediaActual].multimedia.pause();
          var o,
            t = MultimediaPEP[MultimediaActual].id;
          0 == MultimediaPEP[MultimediaActual].modoSiguientesVideos
            ? ((o = MultimediaPEP[MultimediaActual].datos),
              (o.autoplay = !1),
              delete MultimediaPEP[MultimediaActual],
              setTimeout(function () {
                (document.getElementById(t).innerHTML = ''), EPET_VideoPlayer(o, t);
              }, 500))
            : MultimediaPEP[MultimediaActual].id != MultimediaPEP[e].id &&
              (resetSiguientesVideos(),
              clearTimeout(SiguientesVideosPEP.cuenta_atras),
              (o = JSON.parse(
                JSON.stringify(MultimediaPEP_originales[MultimediaPEP[MultimediaActual].id])
              )),
              (document.getElementById(MultimediaPEP[MultimediaActual].id).style.paddingTop =
                '0px'),
              (document.getElementById(MultimediaPEP[MultimediaActual].id).style.marginLeft =
                '0px'),
              delete MultimediaPEP[MultimediaActual],
              (o.autoplay = !1),
              setTimeout(function () {
                document.getElementById(t).innerHTML = '';
                new EPET_Video(o, t);
              }, 500)),
            a &&
              setTimeout(function () {
                MultimediaPEP[e].multimedia.play();
              }, 300);
        }
        MultimediaActual = e;
      }
      function $___var_b93026726bac2b2a (e) {
        MultimediaPEP[e].multimedia.resetMarcado(e);
      }
      function $___var_e2baea19a8ed3cff (e) {
        MultimediaPEP[e].multimedia.seeking();
      }
      function $___var_062e678e661a36b6 (e) {
        MultimediaPEP[e].multimedia.seeked();
      }
      function $___var_573a0a3fd26f4bd7 (e, a, o) {
        MultimediaPEP[o].multimedia.stop();
      }
      var $___var_bb49662dd79ad55e = {},
        $___var_9aa88cf51d629974 = {};
      MultimediaPEP_originales = $___var_bb49662dd79ad55e;
      SiguientesVideosPEP = $___var_9aa88cf51d629974;
      (SiguientesVideosPEP.dataSources = {}),
        (SiguientesVideosPEP.source_active = ''),
        (SiguientesVideosPEP.ref_active = ''),
        (SiguientesVideosPEP.id_ref_active = ''),
        (SiguientesVideosPEP.videoWallData = null),
        (SiguientesVideosPEP.videoWall_primera_vez = !1),
        (SiguientesVideosPEP._id = ''),
        (SiguientesVideosPEP._datos = ''),
        (SiguientesVideosPEP.cuenta_atras = null),
        (SiguientesVideosPEP.cuenta_atras_error = null),
        (SiguientesVideosPEP.segundos = modoSiguientesVideosTimeout),
        (SiguientesVideosPEP.keyword_primero = 'user_initiated'),
        (SiguientesVideosPEP.keyword_siguientes = 'auto_initiated'),
        (SiguientesVideosPEP.fuente_unica = 'videos_destacados'),
        (SiguientesVideosPEP.id_fuente_unica = '200000'),
        (SiguientesVideosPEP.paraBorrar = []),
        (SiguientesVideosPEP.template =
          '<div class="MPEP-principal MPEP-estirar #classmin#"><div class="MPEP-prox-video MPEP-estirar"><div class="MPEP-inner MPEP-estirar"><div class="MPEP-prox-btn-ctrl MPEP-estirar"><a class="MPEP-prox-btn-ant" href="javascript:void(0)" onclick="javascript:volver_a_ver()"><span>Volver a ver</span></a><a class="MPEP-prox-btn-sig" href="javascript:void(0)" onclick="javascript:cargaVideo(false,\'organico\')"><span>Siguiente</span></a></div><span class="MPEP-prox-cont">Siguiente vídeo en <strong id="siguientes_contador">5</strong> segundos</span><div class="MPEP-prox-video-media"><a href="javascript:void(0)" onclick="javascript:cargaVideo(false,\'organico\')"><img class="MPEP-prox-video-img" src="#foto#" alt="" /></a></div><div class="MPEP-prox-video-txt"><div class="MPEP-prox-tit"><a href="javascript:void(0)" onclick="javascript:cargaVideo(false,\'organico\')">#titulo#</a></div></div></div></div></div></div>'),
        (SiguientesVideosPEP.video = ''),
        (SiguientesVideosPEP.primeraVez = !1);
      function $___var_2d864ca98032e174 (e, a) {
        var o = MultimediaPEP[a].id;
        if (
          ((SiguientesVideosPEP.source_active = e),
          (SiguientesVideosPEP.ref_active = a),
          (SiguientesVideosPEP.id_ref_active = o),
          (SiguientesVideosPEP.primeraVez = !1),
          'undefined' != typeof SiguientesVideosPEP.dataSources[e])
        )
          videosSiguientes_callback(SiguientesVideosPEP.dataSources[e].datos);
        else {
          var t = document.getElementsByTagName('head')[0],
            d = document.createElement('script');
          (d.type = 'text/javascript'),
            (d.src = '//ep00.epimg.net/rss/tags/continuo/c_' + e + '.js2'),
            t.appendChild(d),
            (SiguientesVideosPEP.primeraVez = !0);
        }
      }
      function $___var_551391a2a7e905d7 (e) {
        for (var a = [], o = JSON.parse(JSON.stringify(e)); 0 < o.length; )
          a.push(o.splice(Math.floor(Math.random() * o.length), 1)[0]);
        return a;
      }
      function $___var_453d28cc2738a117 (e) {
        SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active] ||
          ((SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active] = {}),
          (SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active].datos = e)),
          null == SiguientesVideosPEP.videoWallData &&
            ((SiguientesVideosPEP.videoWallData = SiguientesVideosPEP.primeraVez
              ? JSON.parse(
                  JSON.stringify(
                    SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active].datos
                  )
                )
              : barajaArray(
                  SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active].datos
                )),
            SiguientesVideosPEP.videoWallData.unshift(
              JSON.parse(
                JSON.stringify(MultimediaPEP_originales[SiguientesVideosPEP.id_ref_active])
              )
            )),
          SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active][
            SiguientesVideosPEP.id_ref_active
          ]
            ? (SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active][
                SiguientesVideosPEP.id_ref_active
              ].idx += 1)
            : ((SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active][
                SiguientesVideosPEP.id_ref_active
              ] = {}),
              (SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active][
                SiguientesVideosPEP.id_ref_active
              ].idx = 1),
              (SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active][
                SiguientesVideosPEP.id_ref_active
              ].ancho = MultimediaPEP[SiguientesVideosPEP.ref_active].datos.anchoPlayer),
              (SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active][
                SiguientesVideosPEP.id_ref_active
              ].alto = MultimediaPEP[SiguientesVideosPEP.ref_active].datos.altoPlayer),
              (SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active][
                SiguientesVideosPEP.id_ref_active
              ].source = SiguientesVideosPEP.source_active)),
          cargaSiguienteVideo(
            SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active],
            SiguientesVideosPEP.ref_active
          );
      }
      function $___var_057ee9d033642776 (e, a, o, t) {
        var d = Math.round,
          r = Math.floor,
          n = [0, 0, 0, 0],
          l = (e * t) / o;
        return (
          l > a
            ? ((n[1] = a), (n[0] = r((a * o) / t)), (n[2] = d((e - n[0]) / 2)))
            : ((n[0] = e), (n[1] = r(l)), (n[3] = d((a - n[1]) / 2))),
          n
        );
      }
      function $___var_d0434c43857b5848 (e, a) {
        var o = a.replace(/\-\d+$/, '');
        SiguientesVideosPEP._id = MultimediaPEP[a].id;
        var t;
        if (
          ((cargaVideo = function (e, o) {
            clearTimeout(SiguientesVideosPEP.cuenta_atras),
              (MultimediaActual = a),
              (SiguientesVideosPEP._datos.autoplay = !(dispositivoMovil || e)),
              (document.getElementById(SiguientesVideosPEP._id).innerHTML = ''),
              (SiguientesVideosPEP._datos.modoReproduccion =
                'undefined' == typeof o ? 'secuencial' : o),
              (SiguientesVideosPEP.video = new EPET_Video(
                SiguientesVideosPEP._datos,
                SiguientesVideosPEP._id,
                !0
              ));
          }),
          !SiguientesVideosPEP.videoWall_primera_vez)
        ) {
          SiguientesVideosPEP.videoWall_primera_vez = !0;
          for (var d, r = SiguientesVideosPEP.paraBorrar.length - 1; 0 <= r; r--)
            (d = SiguientesVideosPEP.paraBorrar.splice(l, 1)), delete MultimediaPEP[d[0]];
          for (var l = SiguientesVideosPEP.videoWallData.length - 1; 0 <= l; l--) {
            if (
              ((t = reajustaDimensiones(
                e[SiguientesVideosPEP._id].ancho,
                e[SiguientesVideosPEP._id].alto,
                SiguientesVideosPEP.videoWallData[l].anchoPlayer,
                SiguientesVideosPEP.videoWallData[l].altoPlayer
              )),
              (0 < l && SiguientesVideosPEP.videoWallData[l].idRefBrightcove + UN == o) ||
                20 < t[2] ||
                20 < t[3])
            ) {
              SiguientesVideosPEP.videoWallData.splice(l, 1);
              continue;
            }
            (SiguientesVideosPEP.videoWallData[l].anchoPlayer = t[0]),
              (SiguientesVideosPEP.videoWallData[l].altoPlayer = t[1]),
              (SiguientesVideosPEP.videoWallData[l].anchoFotograma = t[0]),
              (SiguientesVideosPEP.videoWallData[l].altoFotograma = t[1]),
              (SiguientesVideosPEP.videoWallData[l].playerEPETParams.mediaWidth = t[0]),
              (SiguientesVideosPEP.videoWallData[l].playerEPETParams.mediaHeight = t[1]),
              (SiguientesVideosPEP.videoWallData[l].ancho_caja = e[SiguientesVideosPEP._id].ancho),
              (SiguientesVideosPEP.videoWallData[l].alto_caja = e[SiguientesVideosPEP._id].alto),
              (SiguientesVideosPEP.videoWallData[l].left = t[2]),
              (SiguientesVideosPEP.videoWallData[l].top = t[3]),
              (SiguientesVideosPEP.videoWallData[l].agrsNombreNormalizado =
                SiguientesVideosPEP.fuente_unica),
              (SiguientesVideosPEP.videoWallData[l].agrsIds = SiguientesVideosPEP.id_fuente_unica),
              (SiguientesVideosPEP.videoWallData[l].autoplay = !dispositivoMovil),
              (SiguientesVideosPEP.videoWallData[l].idx_siguientes_videos = l);
          }
        }
        var s = e[SiguientesVideosPEP._id].idx;
        if (s >= SiguientesVideosPEP.videoWallData.length)
          return (
            clearTimeout(SiguientesVideosPEP.cuenta_atras),
            (SiguientesVideosPEP._datos = SiguientesVideosPEP.videoWallData[0]),
            cargaVideo(!0),
            void resetSiguientesVideos()
          );
        var c = SiguientesVideosPEP.segundos;
        (cuentaAtras = function () {
          if (0 < c) {
            if (!document.getElementById('siguientes_contador')) return;
            (document.getElementById('siguientes_contador').innerHTML = c),
              c--,
              (SiguientesVideosPEP.cuenta_atras = setTimeout('cuentaAtras()', 1000));
          } else cargaVideo();
        }),
          (volver_a_ver = function () {
            clearTimeout(SiguientesVideosPEP.cuenta_atras),
              (e[SiguientesVideosPEP._id].idx -= 1),
              (SiguientesVideosPEP._datos = JSON.parse(
                JSON.stringify(SiguientesVideosPEP.videoWallData[e[SiguientesVideosPEP._id].idx])
              )),
              cargaVideo(!1, 'organico'),
              'html5' == SiguientesVideosPEP.video.tipo() &&
                SiguientesVideosPEP._datos.autoplay &&
                SiguientesVideosPEP.video.play();
          }),
          (SiguientesVideosPEP._datos = JSON.parse(
            JSON.stringify(SiguientesVideosPEP.videoWallData[e[SiguientesVideosPEP._id].idx])
          ));
        var u = SiguientesVideosPEP.template.replace(
          '#titulo#',
          SiguientesVideosPEP._datos.tituloVideo.replace('"', '')
        );
        (u = u.replace('#foto#', SiguientesVideosPEP._datos.playerEPETParams.URLMediaStill)),
          (u =
            420 > SiguientesVideosPEP._datos.ancho_caja
              ? u.replace('#classmin#', 'MPEP-420')
              : u.replace('#classmin#', '')),
          (document.getElementById(SiguientesVideosPEP._id).style.paddingTop = '0px'),
          (document.getElementById(SiguientesVideosPEP._id).style.marginLeft = '0px'),
          (document.getElementById(SiguientesVideosPEP._id).innerHTML = u),
          (document.getElementById(SiguientesVideosPEP._id).style.marginLeft = 'auto'),
          (document.getElementById(SiguientesVideosPEP._id).style.marginRight = 'auto'),
          cuentaAtras();
      }
      function $___var_f9f25a97dce2ec8b () {
        (SiguientesVideosPEP.videoWallData = null),
          (SiguientesVideosPEP.videoWall_primera_vez = !1),
          'undefined' !=
            typeof SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active] &&
            'undefined' !=
              typeof SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active][
                SiguientesVideosPEP.id_ref_active
              ] &&
            delete SiguientesVideosPEP.dataSources[SiguientesVideosPEP.source_active][
              SiguientesVideosPEP.id_ref_active
            ];
      }
      function $___var_647332c0002b0f76 (a, o, t) {
        (url_reproductor_epet = url_reproductor_epet_live),
          'undefined' != typeof retransmisiones &&
            'undefined' != typeof retransmisiones[a.refRetransmisionBC] &&
            (a.refRetransmisionBC = retransmisiones[a.refRetransmisionBC]);
        var d;
        'undefined' == typeof o
          ? ((d = 'VideoPlayer_Directo_' + (Math.random() + '').substr(2, 9)),
            document.write('<div id="' + d + '"></div>'))
          : (d = o),
          ('undefined' == typeof t || '' == t || 0 == t) && (t = '0'),
          '0' == t
            ? typeof ('undefined' != a.transmision_m3u8) &&
              '' != a.transmision_m3u8 &&
              EPETUtils_makeHttpRequestGet(function (o) {
                if (200 != o.status) retransmisionBloqueada(a, d, '4');
                else if (
                  ((datosVideo = {}),
                  (datosVideo.playerEPETParams = {
                    mediaWidth: a.ancho,
                    mediaHeight: a.alto,
                    URLMediaFile: '',
                    URLMediaStill: a.caratula,
                    URLFirstFrame: '',
                    compactMode: 'false',
                  }),
                  (datosVideo.anchoPlayer = a.ancho),
                  (datosVideo.altoPlayer = a.alto),
                  (datosVideo.id_referencia = a.refRetransmisionBC),
                  (datosVideo.caratula = a.caratula),
                  (datosVideo.publiActiva = a.publicidad),
                  (datosVideo.keywordsVideo = a.keywords),
                  'undefined' != typeof a.mute && (datosVideo.mute = a.mute),
                  (-1 < a.refRetransmisionBC.indexOf('akamai_001') ||
                    -1 < a.refRetransmisionBC.indexOf('akamaihls_001') ||
                    -1 < a.refRetransmisionBC.indexOf('akamai_002') ||
                    -1 < a.refRetransmisionBC.indexOf('akamaihls_003') ||
                    -1 < a.refRetransmisionBC.indexOf('level3_001') ||
                    -1 < a.refRetransmisionBC.indexOf('level3hls_001')) &&
                    ('' == datosVideo.keywordsVideo
                      ? (datosVideo.keywordsVideo = 'overon_stream')
                      : (datosVideo.keywordsVideo += ',overon_stream')),
                  (datosVideo.urlNoticia = document.location.href),
                  (datosVideo.tituloVideo = PAGE_TITLE),
                  (datosVideo.tipoReproduccion = 'streaming'),
                  (datosVideo.m3u8 = a.transmision_m3u8),
                  (modoSiguientesVideos = 0),
                  'undefined' != typeof a.autoplay && (datosVideo.autoplay = a.autoplay),
                  -1 < document.location.href.indexOf('autoplay=1') &&
                    !reproduciendo &&
                    ((reproduciendo = !0), (datosVideo.autoplay = !0)),
                  MPEP_responsive)
                )
                  setTimeout(function () {
                    new EPET_Video(datosVideo, d);
                  }, 300);
                else new EPET_Video(datosVideo, d);
              }, a.transmision_m3u8)
            : retransmisionBloqueada(a, d, t);
      }
      function $___var_7d90a63e27c42f2a (e, a, o) {
        var t = '';
        switch (o + '') {
          case '1':
            t = LANG_MSG[LANG].trans_no_comenzado;
            break;
          case '2':
            t = LANG_MSG[LANG].trans_reanudara;
            break;
          case '3':
            t = LANG_MSG[LANG].trans_finalizada;
            break;
          case '4':
            t = LANG_MSG[LANG].trans_no_activa;
            break;
          default:
            t = '';
        }
        var d = e.ancho,
          r = e.alto;
        css_multimedia_cargado ||
          ((css_multimedia_cargado = !0), loadCSS(css_multimedia, null, !1)),
          (versionMovil || MPEP_responsive) && ((d = '100%'), (r = 'auto')),
          (document.getElementById(a).onclick = null),
          (document.getElementById(a).innerHTML =
            '<div class="video_previa video_no_disponible"><div class="fondo_mensaje_video" ><span>' +
            t +
            '</span></div><img src="' +
            e.caratula +
            '" width="' +
            d +
            '" height="' +
            r +
            '"/></div>');
      }
      var $___var_46facdbc9022d2be = {};
      CACHE_VDPEP = $___var_46facdbc9022d2be;
      function $___var_0e2a4aa208f5bf64 (e) {
        id_pidiendoDatos = e;
        var a = e.replace(/\-\d+$/, '');
        if ('undefined' != typeof CACHE_VDPEP[a])
          return void EPET_VideoPlayer_callback(CACHE_VDPEP[a]);
        var o = document.getElementsByTagName('head')[0];
        MultimediaPEP[e] || (MultimediaPEP[e] = {}),
          MultimediaPEP[e].script && o.removeChild(MultimediaPEP[e].script),
          (MultimediaPEP[e].script = document.createElement('script')),
          (MultimediaPEP[e].script.type = 'text/javascript'),
          (MultimediaPEP[e].script.src = '//elpais.com/vdpep/1/?pepid=' + a),
          o.appendChild(MultimediaPEP[e].script);
      }
      function $___var_58aa31c0798ccc12 (e) {
        var a = id_pidiendoDatos.replace(/\-\d+$/, '');
        'undefined' == typeof CACHE_VDPEP[a] && (CACHE_VDPEP[a] = e),
          MultimediaPEP[id_pidiendoDatos].multimedia.cargaDatos(e);
      }
      function $___var_9bee5d5bd28a7031 (e, a) {
        var o;
        if (
          ('undefined' == typeof a
            ? ((o = 'VideoPlayer_' + (Math.random() + '').substr(2, 9)),
              document.write('<div id="' + o + '"></div>'))
            : (o = a),
          ('undefined' == typeof e.idRefBrightcove || '' == e.idRefBrightcove) &&
            'undefined' != typeof e.playerEPETParams.URLMediaFile)
        ) {
          var t = /\/([\w\d_]+)\.mp4$/,
            d = t.exec(e.playerEPETParams.URLMediaFile);
          d && (e.idRefBrightcove = d[1]);
        }
        new EPET_Video(e, o);
      }
      function $___var_5e8515bb113272c8 (e, a) {
        var o;
        switch (
          ('undefined' == typeof a
            ? ((o = 'multimediaPlayer_' + (Math.random() + '').substr(2, 9)),
              document.write('<div id="' + o + '"></div>'))
            : (o = a),
          e.tipo)
        ) {
          case 'video':
            e.id_referencia && (e.idRefBrightcove = e.id_referencia),
              e.id && (e.id_video = e.id),
              e.player && (e.playerVideo = e.player),
              e.titulo && (e.tituloVideo = e.titulo),
              e.keywords && (e.keywordsVideo = e.keywords),
              e.playerEPETParams ||
                (e.playerEPETParams = {
                  mediaWidth: e.anchoPlayer,
                  mediaHeight: e.altoPlayer,
                  URLMediaFile: '',
                  URLMediaStill: e.poster,
                  URLFirstFrame: '',
                  compactMode: 'false',
                });
            new EPET_Video(e, o);
            break;
          case 'audio':
            e.id && (e.id_audio = e.id),
              e.player && (e.playerAudio = e.player),
              e.titulo && (e.tituloAudio = e.titulo),
              e.keywords && (e.keywordsAudio = e.keywords);
            var t = new EPET_Audio(e, o);
            break;
          case 'externo':
            var d = e.src;
            if (e.src && 'mp3' == e.src.substr(e.src.length - 3, 3)) {
              (e.id_audio = (Math.random() + '').substr(2, 9)),
                e.player && (e.playerAudio = e.player),
                e.titulo && (e.tituloAudio = e.titulo),
                e.keywords && (e.keywordsAudio = e.keywords);
              var t = new EPET_Audio(e, o);
            } else {
              var d = eligeUrlenlace(e.urls);
              if ('' != d) {
                var r = document.createElement('iframe');
                r.setAttribute('width', e.anchoPlayer),
                  r.setAttribute('height', e.altoPlayer),
                  r.setAttribute('scrolling', 'no'),
                  (r.frameBorder = 0),
                  -1 < document.location.href.indexOf('autoplay=1') &&
                    !reproduciendo &&
                    ((reproduciendo = !0), (e.autoplay = !0)),
                  e.autoplay &&
                    (d.match(/muzu/i)
                      ? ((d = d.replace(/&(amp;)?autostart=n/, '')), (d += '&autostart=y'))
                      : d.match(/youtube/i) && (d += '?autoplay=1')),
                  d.match(/youtube/i) &&
                    (-1 < d.indexOf('?')
                      ? (d += '&wmode=transparent')
                      : (d += '?wmode=transparent')),
                  (r.src = d),
                  document.getElementById(o).appendChild(r);
              }
            }
            break;
          default:
        }
      }
      var $___var_2ce0ad3b3880da84 = !1,
        $___var_aee210822a49c66a = function (e, a, o) {
          var u = Math.floor;
          function t (e) {
            var a;
            if (
              ((a = isNaN(e)
                ? 'undefined' != typeof _.parentNode && 0 < _.parentNode.offsetWidth
                  ? _.parentNode.offsetWidth
                  : 'undefined' != typeof _.parentNode.parentNode &&
                    0 < _.parentNode.parentNode.offsetWidth
                  ? _.parentNode.parentNode.offsetWidth
                  : 'undefined' != typeof _.parentNode.parentNode.parentNode &&
                    0 < _.parentNode.parentNode.parentNode.offsetWidth
                  ? _.parentNode.parentNode.parentNode.offsetWidth
                  : 640
                : e),
              (m.altoPlayer = u((a * m.altoPlayer) / m.anchoPlayer)),
              (m.anchoPlayer = a),
              x &&
                ((x.style.width = m.anchoPlayer + 'px'),
                (x.style.height = m.altoPlayer + 'px'),
                document.getElementById(H) &&
                  ((document.getElementById(H).style.width = m.anchoPlayer + 'px'),
                  (document.getElementById(H).style.height = m.altoPlayer + 'px'))),
              b && b.adsController && b.adsController.resize(m.anchoPlayer, m.altoPlayer),
              null == m.nodoVideo)
            )
              m.idObjeto &&
                document.getElementById(m.idObjeto) &&
                ((document.getElementById(m.idObjeto).width = m.anchoPlayer),
                (document.getElementById(m.idObjeto).height = m.altoPlayer));
            else if (b.playerHTML5.controles) {
              (b.playerHTML5.controles.style.left = '0px'),
                (b.playerHTML5.controles.style.marginLeft = '0px'),
                (b.playerHTML5.controles.style.paddingLeft = '0px'),
                (b.playerHTML5.controles.style.paddingRight = '0px');
              var o = 640 < m.anchoPlayer || b.playerHTML5.inFullscreen ? 640 : m.anchoPlayer;
              if (
                (b.playerHTML5.controles.barra &&
                  ((b.playerHTML5.controles.barra.style.width =
                    o - b.playerHTML5.ancho_controles + 'px'),
                  (b.playerHTML5.controles.barra.sliderseek.style.width =
                    b.playerHTML5.controles.barra.style.width),
                  (b.playerHTML5.controles.style.width = o + 'px')),
                640 < m.anchoPlayer || b.playerHTML5.inFullscreen)
              ) {
                var t =
                  u(
                    (b.playerHTML5.inFullscreen ? b.playerHTML5.fullscreenWidth : m.anchoPlayer) /
                      2
                  ) - 320;
                (b.playerHTML5.controles.style.left = t + 'px'),
                  (b.playerHTML5.controles.style.marginLeft = -1 * t + 'px');
                var d = b.playerHTML5.controles;
                setTimeout(function () {
                  d.style.paddingLeft = t + 'px';
                }, 20),
                  (b.playerHTML5.controles.style.paddingRight = t + 'px');
              }
            }
            (_.style.width = m.anchoPlayer + 'px'),
              (_.style.height = m.altoPlayer + 'px'),
              0 < m.modoSiguientesVideos &&
                ((MultimediaPEP[v].datos.anchoPlayer = m.anchoPlayer),
                (MultimediaPEP[v].datos.altoPlayer = m.altoPlayer));
          }
          function d () {
            clearTimeout(L), (x.style.visibility = 'hidden'), (x.innerHTML = '');
          }
          function r () {
            'undefined' != typeof PBS &&
            'undefined' != typeof PBS.axm &&
            'undefined' != typeof PBS.axm.d &&
            'function' == typeof PBS.axm.d.prebidVideoRequest
              ? PBS.axm.d.prebidVideoRequest(v)
              : n();
          }
          function n () {
            m.seekTimeout || (m.seekTimeout = 7),
              m.publiActiva
                ? (m.publicidad_pre_roll = !0)
                : ((m.publicidad_pre_roll = !1), (m.publicidad_post_roll = !1)),
              (M._datosMarcado.publicidad = m.publiActiva ? 'con publicidad' : 'sin publicidad');
            var e = '';
            null != m.tagsNombreNormalizado && '' != m.tagsNombreNormalizado
              ? (e =
                  m.tagsNombreNormalizado +
                  ('undefined' == typeof DFP_agrupados ? '' : ',' + DFP_agrupados))
              : 'undefined' != typeof listado_norm_tags &&
                '' != listado_norm_tags &&
                (e = listado_norm_tags),
              null != m.keywordsVideo &&
                '' != m.keywordsVideo &&
                ('' == e ? (e = m.keywordsVideo) : (e += ',' + m.keywordsVideo)),
              null != m.agrsNombreNormalizado &&
                '' != m.agrsNombreNormalizado &&
                ((M._datosMarcado.agrs_video = m.agrsNombreNormalizado),
                '' == e ? (e = m.agrsNombreNormalizado) : (e += ',' + m.agrsNombreNormalizado)),
              (e =
                '&hl=' +
                ('pt-br' == LANG ? 'pt' : LANG) +
                '&cust_params=pbskey%3D' +
                escape(e) +
                '%26pos%3D{cuePointType}' +
                ('undefined' != typeof PBS &&
                'undefined' != typeof PBS.slm &&
                'undefined' != typeof PBS.slm.cf.key.ksg
                  ? '%26ksg%3D' + PBS.slm.cf.key.ksg.join(',')
                  : '')),
              -1 < m.keywordsVideo.indexOf('agencia_overonaelpais') ||
              -1 < m.keywordsVideo.indexOf('agencia_reuters_live') ||
              -1 < m.keywordsVideo.indexOf('overon_stream')
                ? (m.urlAdServer = UrlPublicidadOveron)
                : -1 < m.keywordsVideo.indexOf('agencia_cnbc')
                ? (m.urlAdServer = UrlPublicidadCnbc)
                : ((m.urlAdServer = UrlPublicidad),
                  m.un_creacion &&
                    m.portal_creacion &&
                    m.seccion_creacion &&
                    !0 &&
                    ('elpais' == m.portal_creacion ||
                    'ccaa' == m.portal_creacion ||
                    'epv' == m.portal_creacion
                      ? 'undefined' !=
                          typeof adunitsMPEP[
                            m.un_creacion + '-' + m.portal_creacion + '-' + m.seccion_creacion
                          ] &&
                        (m.urlAdServer =
                          adunitsMPEP[
                            m.un_creacion + '-' + m.portal_creacion + '-' + m.seccion_creacion
                          ])
                      : 'undefined' == typeof adunitsMPEP[m.un_creacion + '-' + m.portal_creacion]
                      ? 'undefined' != typeof adunitsMPEP[m.un_creacion] &&
                        (m.urlAdServer = adunitsMPEP[m.un_creacion])
                      : (m.urlAdServer = adunitsMPEP[m.un_creacion + '-' + m.portal_creacion]))),
              (m.urlAdServer += e),
              (m.urlAdServer = isIphone
                ? m.urlAdServer.replace('sz=640x480', 'sz=640x480|480x360')
                : m.urlAdServer.replace('sz=640x480', 'sz=640x480|480x361')),
              (m.urlAdServer = m.urlAdServer.replace(
                '[description_url]',
                m.vasturl && '' != m.vasturl
                  ? m.vasturl
                  : document.location.origin + document.location.pathname
              )),
              m.cust_params &&
                (m.urlAdServer = m.urlAdServer.replace(
                  '&cust_params=',
                  '&cust_params=' + m.cust_params + '%26'
                )),
              (versionMovil ||
                (MPEP_responsive && dimensionesPEP.ancho < anchoReferenciaMobile)) &&
                (m.urlAdServer = m.urlAdServer.replace('_web%2F', '_mob%2F')),
              (M._datosMarcado.duracion = 0),
              (M._datosMarcado.adCue = ''),
              (M._datosMarcado.ad = ''),
              (M._datosMarcado.adTitle = ''),
              (M._datosMarcado.tags = ''),
              (M._datosMarcado.noticiaTags = m.noticiaTags),
              (M._datosMarcado.eventTags = m.eventTags),
              (M._datosMarcado.autores = ''),
              (M._datosMarcado.modoReproduccion = m.modoReproduccion),
              (m._HTML5vsFLASH = ''),
              h
                ? ((m._HTML5vsFLASH = 'flash'), pideDatosVideo(v))
                : canPlayMP4 || canPlayHLS
                ? ((m._HTML5vsFLASH = 'html5'), s())
                : videoFlash
                ? ((m._HTML5vsFLASH = 'flash'), pideDatosVideo(v))
                : c();
          }
          function l () {
            m.adServerURL = m.urlAdServer + '%26fpd%3Dvpaid';
            var e = {
              menu: 'false',
              wmode: 'opaque',
              allowscriptaccess: 'always',
              bgcolor: '#000000',
              allowfullscreen: 'true',
            };
            for (var a in m.playerEPETOpcionesSWF) e[a] = m.playerEPETOpcionesSWF[a];
            (m.autoplay = !0),
              (m.idioma = LANG),
              (m.un = UN),
              (m.enlazados = 0 < m.modoSiguientesVideos);
            var o = JSON.parse(JSON.stringify(m));
            delete o.playerEPETOpcionesSWF;
            for (
              var t = [
                  'src',
                  'adServerURL',
                  'spriteImg',
                  'caratula',
                  'rtmpStream',
                  'hlsod',
                  'm3u8',
                  'poster',
                ],
                a = 0;
              a < t.length;
              a++
            )
              'undefined' != typeof o[t[a]] &&
                '//' == o[t[a]].substr(0, 2) &&
                (o[t[a]] = document.location.protocol + o[t[a]]);
            'undefined' != typeof o.playerEPETParams.URLMediaFile &&
              '//' == o.playerEPETParams.URLMediaFile.substr(0, 2) &&
              (o.playerEPETParams.URLMediaFile =
                document.location.protocol + o.playerEPETParams.URLMediaFile),
              'undefined' != typeof o.playerEPETParams.URLMediaStill &&
                '//' == o.playerEPETParams.URLMediaStill.substr(0, 2) &&
                (o.playerEPETParams.URLMediaStill =
                  document.location.protocol + o.playerEPETParams.URLMediaStill),
              'undefined' != typeof o.playerEPETParams.URLFirstFrame &&
                '//' == o.playerEPETParams.URLFirstFrame.substr(0, 2) &&
                (o.playerEPETParams.URLFirstFrame =
                  document.location.protocol + o.playerEPETParams.URLFirstFrame),
              'undefined' != typeof o.playerEPETParams.URLMediaFile &&
                -1 < o.playerEPETParams.URLMediaFile.indexOf('.m3u8') &&
                'http:' == document.location.protocol &&
                (o.playerEPETParams.URLMediaFile = o.playerEPETParams.URLMediaFile.replace(
                  /^https:/,
                  'http:'
                )),
              (e.flashvars = 'datosVideo=' + escape(JSON.stringify(o)));
            var r,
              n = m.hlsod && '' != m.hlsod ? url_reproductor_epet_live : url_reproductor_epet;
            if (
              ((r = new EPET_FlashHTML(11, n, m.anchoPlayer, m.altoPlayer, e, C)),
              (m.idObjeto = C),
              r.append(y),
              m.hlsod && '' != m.hlsod)
            ) {
              (m.loading = document.createElement('div')),
                (m.loading.className = 'playerMPEPV_cloading');
              var l = document.createElement('div');
              (l.className = 'playerMPEPV_loading'),
                m.loading.appendChild(l),
                _.appendChild(m.loading);
            }
            d();
          }
          function s () {
            return null == m.tipoReproduccion ||
              'streaming' != m.tipoReproduccion ||
              (null != m.m3u8 && '' != m.m3u8 && (dispositivoMovil || canPlayHLS))
              ? void (m.publiActiva && publicidad_HTML5 && 'cargado' == code_ima3_HTML5_cargado
                  ? ((m.publicidad_pre_roll = !0),
                    (m.publicidad_post_roll = m.publicidad_post_roll && postroll_HTML5))
                  : ((m.publiActiva = !1),
                    (m.publicidad_pre_roll = !1),
                    (m.publicidad_post_roll = !1)),
                (M._datosMarcado.playerName =
                  'streaming' == M._datosMarcado.tipoReproduccion
                    ? 'HTML5 VÍDEO V2 - Transmisiones'
                    : 'HTML5 VÍDEO V2'),
                (m.marcado = M),
                (m.adServerURL = m.urlAdServer.replace('%2Fflash', '%2Fhtml5')),
                isIphone &&
                  (m.adServerURL = m.adServerURL.replace('pbskey%3D', 'pbskey%3Dno_skip%2C')),
                (m.nodoVideo = document.createElement('video')),
                (m.nodoVideo.className = 'playerMPEPV_video'),
                dispositivoMovil && m.nodoVideo.play(),
                (b = new MainController(new playerHTML5(_, m, v))),
                pideDatosVideo(v),
                d())
              : void c(1);
          }
          function c (e) {
            clearTimeout(L),
              (S.parentNode.parentNode.className += ' video_previa video_no_disponible');
            var a = document.createElement('span');
            a.className = 'fondo_mensaje_video';
            var o = document.createElement('span');
            a.appendChild(o),
              S.parentNode.appendChild(a),
              (o.innerHTML = e
                ? LANG_MSG[LANG].trans_no_disponible
                : 0 < versionFlash
                ? LANG_MSG[LANG].actualizar_plugin
                : LANG_MSG[LANG].no_mp4);
          }
          (this.objvideo = function () {
            return m.nodoVideo;
          }),
            (this.cargaDatos = function (e) {
              if ('undefined' != typeof e) {
                if (
                  ((!e.mp4 || 0 != e.mp4.indexOf('http')) &&
                    m.playerEPETParams.URLMediaFile &&
                    '' != m.playerEPETParams.URLMediaFile &&
                    ((e.status = 100),
                    (e.mp4 = m.playerEPETParams.URLMediaFile),
                    (e.ftgrm1 = m.playerEPETParams.URLMediaStill)),
                  100 != e.status)
                )
                  return (
                    EPET_VideoPlayerBloqueado(
                      e.id_video,
                      m.anchoPlayer,
                      m.altoPlayer,
                      m.playerEPETParams.URLMediaStill,
                      e.status,
                      y
                    ),
                    void (
                      0 < m.modoSiguientesVideos &&
                      null != SiguientesVideosPEP.videoWallData &&
                      (SiguientesVideosPEP.cuenta_atras_error = setTimeout(function () {
                        {
                          var e = m.agrsNombreNormalizado.split(',')[0];
                          return void siguientesVideos(e, m.id_video);
                        }
                      }, 3000))
                    )
                  );
                e.mp4.replace(/^.*\//, '');
                (m.playerEPETParams.URLMediaFile =
                  0 == e.mp4.indexOf('/') && '//' != e.mp4.substr(0, 2)
                    ? m.url_cache + e.mp4
                    : e.mp4),
                  (m.playerEPETParams.URLFirstFrame =
                    0 == e.ftgrm1.indexOf('/') && '//' != e.ftgrm1.substr(0, 2)
                      ? m.url_cache + e.ftgrm1
                      : e.ftgrm1),
                  (m.src = m.playerEPETParams.URLMediaFile),
                  (m.poster = m.playerEPETParams.URLFirstFrame),
                  (m.uid = e.uid),
                  (m.seccion_creacion = m.keywordsVideo
                    ? m.keywordsVideo.replace(/,?agencia_.*/, '')
                    : e.seccion_creacion),
                  (m.fuente = e.fuente),
                  (m.duracion = 'undefined' == typeof e.duracion ? 0 : e.duracion),
                  e.sprite &&
                    !m.spriteImg &&
                    ((m.spriteImg =
                      0 == e.sprite.indexOf('/') && '//' != e.sprite.substr(0, 2)
                        ? m.url_cache + e.sprite
                        : e.sprite),
                    (m.nSprites = e.n_sprites ? e.n_sprites : 0)),
                  0 == m.playerEPETParams.URLMediaFile.indexOf('rtmp') &&
                    (m.rtmpStream = e.rtmpStream),
                  (m.urlNoticia = e.url_noticia ? e.url_noticia : document.location.pathname),
                  (m.tituloVideo = e.titulo ? e.titulo : PAGE_TITLE),
                  (m.tagsNombreNormalizado = e.tags_names
                    ? e.tags_names
                    : 'undefined' == typeof listado_norm_tags
                    ? ''
                    : listado_norm_tags),
                  null != m.agrsIds &&
                    '' != m.agrsIds &&
                    ('' != m.tagsIds && (m.tagsIds += ','), (m.tagsIds += m.agrsIds)),
                  (m.autoresIds = 'undefined' == typeof e.author_ids ? '' : e.author_ids),
                  (m.eventTags =
                    'undefined' != typeof e.tags_ids && 'undefined' != typeof e.tags_names
                      ? tagsStrToJson(e.tags_ids, e.tags_names)
                      : 'undefined' == typeof m.tagsIds &&
                        'undefined' == typeof m.tagsNombreNormalizado
                      ? tagsStrToJson(e.tags_ids, e.tags_names)
                      : []),
                  (m.noticiaTags =
                    'undefined' != typeof listado_id_tags &&
                    'undefined' != typeof listado_norm_tags
                      ? tagsStrToJson(listado_id_tags, listado_norm_tags)
                      : []),
                  e.hlsod
                    ? (m.hlsod =
                        0 == e.hlsod.indexOf('/') && '//' != e.hlsod.substr(0, 2)
                          ? m.url_cache + e.hlsod
                          : e.hlsod)
                    : (e.hlsod = ''),
                  'flash' == m._HTML5vsFLASH ? l() : b.cargaDatos(m);
              }
            }),
            (this.play = function () {
              'flash' == m._HTML5vsFLASH
                ? document.getElementById(C) &&
                  'undefined' != typeof document.getElementById(C).playjs &&
                  document.getElementById(C).playjs()
                : m.nodoVideo.play(),
                MultimediaReproduciendo(m.id_video, !1);
            }),
            (this.pause = function () {
              'flash' == m._HTML5vsFLASH
                ? document.getElementById(C) &&
                  'undefined' != typeof document.getElementById(C).pausejs &&
                  document.getElementById(C).pausejs()
                : (isIpad &&
                    b.adPlaying &&
                    (b.restart(),
                    (b.playerHTML5.adContainer.innerHTML = ''),
                    (b.playerHTML5.controles.style.display = 'none'),
                    (b.playerHTML5.adContainer.style.display = 'none')),
                  b && b.pause());
            }),
            (this.stop = function () {
              'html5' == m._HTML5vsFLASH && b.restart();
            }),
            (this.marcado = function (e) {
              null != e.duracion && (M._datosMarcado.duracion = e.duracion),
                null != e.playerName && (M._datosMarcado.playerName = e.playerName),
                null != e.ad && (M._datosMarcado.ad = e.ad),
                null != e.adCue && (M._datosMarcado.adCue = e.adCue),
                null != e.adTitle && (M._datosMarcado.adTitle = e.adTitle),
                null != e.uid && (M._datosMarcado.uid = e.uid),
                null != e.seccion_creacion &&
                  (M._datosMarcado.seccion_creacion = e.seccion_creacion),
                null != e.fuente && (M._datosMarcado.fuente = e.fuente),
                null != e.tags && (M._datosMarcado.tags = e.tags),
                null != e.autores && (M._datosMarcado.autores = e.autores),
                null != m.eventTags && (M._datosMarcado.eventTags = m.eventTags),
                null != m.noticiaTags && (M._datosMarcado.noticiaTags = m.noticiaTags),
                (M._datosMarcado.currentTime = null == e.currentTime ? -1 : e.currentTime),
                (M._datosMarcado.adCurrentTime = null == e.adCurrentTime ? -1 : e.adCurrentTime),
                ('adStart' == e.evento ||
                  'adComplete' == e.evento ||
                  'adSkip' == e.evento ||
                  'adError' == e.evento ||
                  'mediaBegin' == e.evento ||
                  'mediaComplete' == e.evento ||
                  'halfmediaComplete' == e.evento ||
                  'adRequest' == e.evento ||
                  'adPaused' == e.evento ||
                  'adResumed' == e.evento ||
                  'mediaPaused' == e.evento ||
                  'mediaResumed' == e.evento) &&
                  M.marcaEvento(e.evento);
            }),
            (this.seek = function (e) {
              if ('flash' == m._HTML5vsFLASH)
                document.getElementById(C) && document.getElementById(C).seekjs(e);
              else if ('html5' == m._HTML5vsFLASH) {
                if (b.adPlaying) return;
                b.seekjs(e);
              }
              MultimediaReproduciendo(m.id_video, !1);
            }),
            (this.resetMarcado = function (e) {
              if (((M.eventos = {}), 0 < m.modoSiguientesVideos)) {
                var a = m.agrsNombreNormalizado.split(',')[0];
                return void siguientesVideos(a, e);
              }
            }),
            (this.seeking = function () {
              m.loading && (m.loading.className = 'playerMPEPV_cloading visible');
            }),
            (this.seeked = function () {
              m.loading && (m.loading.className = 'playerMPEPV_cloading');
            }),
            (this.tipo = function () {
              return m._HTML5vsFLASH;
            }),
            (this.uid = function () {
              return m.uid;
            }),
            (this.seccion_creacion = function () {
              return m.seccion_creacion;
            }),
            (this.fuente = function () {
              return m.fuente;
            }),
            (this.tags = function () {
              return m.tagsIds;
            }),
            (this.autores = function () {
              return m.autoresIds;
            }),
            (this.setCustParams = function (e) {
              m.cust_params = e;
            }),
            (this.preDibujaPlayer = function (e, a) {
              (m.cust_params = a), n();
            }),
            e.idRefBrightcove && (e.id_referencia = e.idRefBrightcove),
            e.playerVideo && (e.player = e.playerVideo),
            e.tituloVideo && (e.titulo = e.tituloVideo),
            e.keywordsVideo && (e.keywords = e.keywordsVideo),
            e.url_cache || (e.url_cache = url_cache);
          var m = e,
            y = a,
            _ = document.getElementById(y);
          _.className = 'video_MPEP';
          var f = null != m.tituloVideo && '' != m.tituloVideo ? m.tituloVideo : PAGE_TITLE;
          var v;
          if (
            (m.id_video ? (v = m.id_video) : (m.un && (UN = m.un), (v = m.id_referencia + UN)),
            (v += '-' + ++contadorMultimedia),
            'string' == typeof m.publiActiva &&
              ('true' == m.publiActiva ? (m.publiActiva = !0) : (m.publiActiva = !1)),
            'undefined' == typeof m.modoReproduccion && (m.modoReproduccion = ''),
            dispositivoMovil && 'boolean' == typeof m.autoplay && (m.autoplay = !1),
            versionMovil || MPEP_responsive)
          ) {
            var g =
              'undefined' != typeof _.parentNode && 0 < _.parentNode.offsetWidth
                ? _.parentNode.offsetWidth
                : 'undefined' != typeof _.parentNode.parentNode &&
                  0 < _.parentNode.parentNode.offsetWidth
                ? _.parentNode.parentNode.offsetWidth
                : 640;
            (w = u((g * m.altoPlayer) / m.anchoPlayer)),
              (A = g),
              (m.anchoPlayer = A),
              (m.altoPlayer = w),
              (_.style.overflow = 'hidden'),
              EPETaddEvent(window, orientationEvent, function () {
                clearTimeout(T),
                  (T = setTimeout(function () {
                    t();
                  }, 300));
              });
          }
          (_.style.width = m.anchoPlayer + 'px'),
            (_.style.height = m.altoPlayer + 'px'),
            (_.style.backgroundColor = '#000000'),
            'undefined' == typeof autopromo || dispositivoMovil || (e.autopromo = autopromo),
            0 != modoSiguientesVideos &&
              ((e.agrsNombreNormalizado = SiguientesVideosPEP.fuente_unica),
              (e.agrsIds = SiguientesVideosPEP.id_fuente_unica)),
            (m.modoSiguientesVideos =
              0 == modoSiguientesVideos ||
              'undefined' == typeof m.agrsNombreNormalizado ||
              '' == m.agrsNombreNormalizado
                ? 0
                : 'undefined' != typeof m.modoPlayer && '0' != m.modoPlayer
                ? m.modoPlayer
                : modoSiguientesVideos),
            300 > m.anchoPlayer && (m.modoSiguientesVideos = 0),
            'undefined' == typeof MultimediaPEP_originales[y]
              ? (MultimediaPEP_originales[y] = JSON.parse(JSON.stringify(e)))
              : 0 < m.modoSiguientesVideos && o && SiguientesVideosPEP.paraBorrar.push(v),
            (MultimediaPEP[v] = {}),
            (MultimediaPEP[v].multimedia = this),
            (MultimediaPEP[v].modoSiguientesVideos = m.modoSiguientesVideos),
            (MultimediaPEP[v].datos = JSON.parse(JSON.stringify(MultimediaPEP_originales[y]))),
            (MultimediaPEP[v].id = a),
            (m.id_video = v);
          var h = videoFlash && !versionMovil;
          ((null != m.forzarHTML5 && m.forzarHTML5) || !0) && (h = !1);
          var M = new EPET_Marcado_Multimedia({
            referencia: m.id_video,
            titulo: f,
            keywords: null == m.keywordsVideo ? '' : m.keywordsVideo,
            media: 'video',
          });
          if (e.tipoReproduccion && 'streaming' == e.tipoReproduccion)
            (M._datosMarcado.tipoReproduccion = 'streaming'), (m.publicidad_post_roll = !1);
          else if (
            ((e.tipoReproduccion = 'vod'),
            (M._datosMarcado.tipoReproduccion = 'vod'),
            0 == m.modoSiguientesVideos)
          )
            m.publicidad_post_roll =
              'undefined' == typeof m.publicidad_post_roll || m.publicidad_post_roll;
          else {
            (m.publicidad_post_roll = !1),
              'undefined' == typeof m.idx_siguientes_videos && (m.idx_siguientes_videos = 0);
            var E =
              0 == m.idx_siguientes_videos
                ? SiguientesVideosPEP.keyword_primero
                : SiguientesVideosPEP.keyword_siguientes;
            'undefined' == typeof m.keywordsVideo || '' == m.keywordsVideo
              ? (m.keywordsVideo = E)
              : (m.keywordsVideo += ',' + E),
              (M._datosMarcado.posSiguientesVideos = m.idx_siguientes_videos);
          }
          var T,
            b,
            L,
            P = 'posicionador_' + v,
            V = 'divimg_' + v,
            H = 'caratula_' + v,
            C = 'obj_' + v,
            A = m.anchoPlayer,
            w = m.altoPlayer;
          (m.urlAdServer = ''),
            dispositivoMovil ||
              !(-1 < document.location.href.indexOf('autoplay=1')) ||
              reproduciendo ||
              !1 == e.autoplay ||
              ((m.modoReproduccion = 'autoplay'), (reproduciendo = !0), (m.autoplay = !0));
          var x = document.createElement('div');
          (x.id = V),
            (x.style.zIndex = 1),
            (x.className = 'img_MPEP'),
            (x.style.width = m.anchoPlayer + 'px'),
            (x.style.height = m.altoPlayer + 'px'),
            (x.tituloVideo = LANG_MSG[LANG].ver_video),
            'undefined' != typeof m.tituloVideo &&
              '' != m.tituloVideo &&
              (x.tituloVideo = m.tituloVideo);
          var N,
            k =
              '<a class="posicionador" id="' +
              P +
              '" title="' +
              x.tituloVideo +
              '" href="javascript:void(0)">';
          (N =
            'function' == typeof window.lzld
              ? '<img border="0" width="' +
                m.anchoPlayer +
                '" height="' +
                m.altoPlayer +
                '" id="' +
                H +
                '" onload="lzld(this)" src="/t.gif" data-src="' +
                m.playerEPETParams.URLMediaStill +
                '" style="height:' +
                m.altoPlayer +
                'px;margin-left:auto;margin-right:auto" />'
              : '<img border="0" width="' +
                m.anchoPlayer +
                '" height="' +
                m.altoPlayer +
                '" id="' +
                H +
                '" src="' +
                m.playerEPETParams.URLMediaStill +
                '" style="height:' +
                m.altoPlayer +
                'px;margin-left:auto;margin-right:auto" />'),
            (k += '<span class="boton_video"></span>' + N + '</a>'),
            m.autoplay && 0 < m.modoSiguientesVideos && (x.style.display = 'none'),
            (x.innerHTML = k),
            _.appendChild(x);
          var S = document.getElementById(P);
          if (m.autoplay && !dispositivoMovil) {
            if (
              ('' == m.modoReproduccion && (m.modoReproduccion = 'autoplay'),
              !isIE && 'nocargado' == code_ima3_HTML5_cargado)
            ) {
              code_ima3_HTML5_cargado = 'cargado';
              var I = document.createElement('script');
              (I.type = 'text/javascript'),
                (I.src = '//s0.2mdn.net/instream/html5/ima3.js'),
                document.getElementsByTagName('head')[0].appendChild(I);
            }
            (L = setTimeout(function () {
              x.style.display = 'none';
            }, 4000)),
              css_multimedia_cargado
                ? m.publiActiva && prebidVideoPEP
                  ? r()
                  : n()
                : ((css_multimedia_cargado = !0),
                  loadCSS(
                    css_multimedia,
                    function () {
                      setTimeout(m.publiActiva && prebidVideoPEP ? r : n, 1500);
                    },
                    !0
                  ),
                  EPETaddEvent(document, mouseWheelEvent, wheel)),
              (S.className += ' video_cargando');
          } else {
            if (
              (css_multimedia_cargado ||
                ((css_multimedia_cargado = !0),
                loadCSS(css_multimedia, null, !0),
                EPETaddEvent(document, mouseWheelEvent, wheel)),
              !isIE && 'nocargado' == code_ima3_HTML5_cargado)
            ) {
              code_ima3_HTML5_cargado = 'cargando';
              var I = document.createElement('script');
              (I.type = 'text/javascript'),
                (I.src = '//s0.2mdn.net/instream/html5/ima3.js'),
                document.all
                  ? (I.onreadystatechange = function () {
                      ('complete' == I.readyState || 'loaded' == I.readyState) &&
                        (code_ima3_HTML5_cargado = 'cargado');
                    })
                  : (I.onload = function () {
                      code_ima3_HTML5_cargado = 'cargado';
                    }),
                document.getElementsByTagName('head')[0].appendChild(I);
            }
            m.publiActiva &&
              prebidVideoPEP &&
              dispositivoMovil &&
              'undefined' != typeof PBS &&
              'undefined' != typeof PBS.axm &&
              'undefined' != typeof PBS.axm.d &&
              'function' == typeof PBS.axm.d.prebidVideoRequest &&
              (PBS.axm.d.prebidVideoRequest(v),
              !intervalPujas && ((intervalPujas = !0), setInterval(recargaPujas, 240000))),
              (_.onclick = function () {
                (m.modoReproduccion = 'organico'),
                  (_.onclick = null),
                  (S.className += ' video_cargando'),
                  isIE && (x.style.display = 'none'),
                  (L = setTimeout(function () {
                    x.style.display = 'none';
                  }, 4000)),
                  m.publiActiva && prebidVideoPEP && !dispositivoMovil ? r() : n(),
                  MultimediaReproduciendo(m.id_video, !1);
              });
          }
          this.resize = t;
        },
        $___var_580be1b863c02d21 = function (e, a, o) {
          (this.padre = o),
            (this.contenedorVideo = 'object' == typeof e ? e : document.getElementById(e)),
            (this.datosVideo = a),
            (this.width = this.datosVideo.anchoPlayer),
            (this.height = this.datosVideo.altoPlayer),
            (this.contenedorVideo.style.width = this.width + 'px'),
            (this.contenedorVideo.style.height = this.height + 'px'),
            (this.contenedorVideo.className = 'playerMPEPV_c_video playerMPEPV_unselectable'),
            (this.adContainer = null),
            (this.controles = null),
            (this.adTagUrl = this.datosVideo.adServerURL),
            (this.primeraVez = !0),
            (this.autoplay = this.datosVideo.autoplay),
            (this.controlesNativosVideo = controlesNativosVideo
              ? controlesNativosVideo
              : !!dispositivoMovil),
            (this.adSaltar = null),
            (this.playing = !1),
            (this.inFullscreen = !1),
            (this.fullscreenWidth = 0),
            (this.fullscreenHeight = 0),
            (this.marcado = this.datosVideo.marcado),
            (this.nodoVideo = this.datosVideo.nodoVideo),
            (this.nodoVideo.style.position = 'absolute'),
            (this.nodoVideo.style.zIndex = 0),
            (this.nodoVideo.style.top = '0px'),
            (this.nodoVideo.style.left = '0px'),
            this.nodoVideo.setAttribute('id', 'pepvideo_' + this.datosVideo.id_video),
            (this.datosVideo.isMuted =
              'undefined' != typeof this.datosVideo.mute && this.datosVideo.mute),
            0 == this.datosVideo.modoSiguientesVideos &&
              this.nodoVideo.setAttribute(
                'poster',
                this.datosVideo.playerEPETParams.URLMediaStill
              ),
            (this.nodoVideo.style.display = 'none'),
            this.contenedorVideo.appendChild(this.nodoVideo),
            (this.volumenActual = this.nodoVideo.volume),
            (this.ancho_controles = 0),
            ('undefined' == typeof google || 'undefined' == typeof google.ima) &&
              (this.datosVideo.publiActiva = !1),
            this.datosVideo.publiActiva
              ? ((this.adContainer = document.createElement('div')),
                (this.adContainer.style.position = 'absolute'),
                (this.adContainer.style.cursor = 'pointer'),
                (this.adContainer.style.left = '0px'),
                (this.adContainer.style.top = '0px'),
                (this.adContainer.style.width = this.width + 'px'),
                (this.adContainer.style.height = this.height + 'px'),
                (this.adContainer.style.zIndex = 2),
                this.contenedorVideo.appendChild(this.adContainer),
                !isIphone &&
                  (this.creaControles(),
                  (this.adSaltar = document.createElement('div')),
                  (this.adSaltar.className = 'playerMPEPV_adsaltar'),
                  (this.adSaltar.innerHTML = dispositivoMovil
                    ? '<img src="' +
                      LANG_MSG[LANG].vervideo_svg +
                      '" width="146" height="40" border="0" style="width:146px;height:40px" />'
                    : '<img src="' +
                      LANG_MSG[LANG].vervideo_svg +
                      '" width="84" height="23" border="0" style="width:84px;height:23px" />'),
                  this.contenedorVideo.appendChild(this.adSaltar)))
              : ((this.nodoVideo.style.display = 'block'),
                this.controlesNativosVideo
                  ? this.nodoVideo.setAttribute('controls', 'controls')
                  : this.creaControles()),
            this.marcado.marcaEvento('videoready', this.nodoVideo);
        };
      css_multimedia_cargado = $___var_2ce0ad3b3880da84;
      EPET_Video = $___var_aee210822a49c66a;
      playerHTML5 = $___var_580be1b863c02d21;
      (playerHTML5.prototype.preloadContent = function (e) {
        dispositivoMovil
          ? (this.nodoVideo.addEventListener('loadedmetadata', e, !1), this.nodoVideo.load())
          : e();
      }),
        (playerHTML5.prototype.play = function () {
          this.nodoVideo.play(),
            (this.playing = !0),
            !this.controlesNativosVideo &&
              this.controles &&
              (this.controles.playpause.className =
                'playerMPEPV_boton_play_pause playerMPEPV_boton_pause'),
            MultimediaReproduciendo(this.datosVideo.id_video, !1);
        }),
        (playerHTML5.prototype.pause = function () {
          this.nodoVideo.pause(),
            (this.playing = !1),
            !this.controlesNativosVideo &&
              this.controles &&
              (this.controles.playpause.className =
                'playerMPEPV_boton_play_pause playerMPEPV_boton_play');
        }),
        (playerHTML5.prototype.setVolume = function (e) {
          1 < e || 0 > e || ((this.nodoVideo.volume = e), this.actualizaVolumen());
        }),
        (playerHTML5.prototype.actualizaVolumen = function () {
          var e = this.nodoVideo.volume || 0;
          (this.controles.volumen.nivel.style.height =
            0 == e ? '0px' : this.controles.volumen.maximo * e + 'px'),
            (volumen_global = e);
        }),
        (playerHTML5.prototype.resize = function (e, a, o, t, d) {
          (this.videoPlayerContainer.style.position = e),
            (this.videoPlayerContainer.style.top = a + 'px'),
            (this.videoPlayerContainer.style.left = o + 'px'),
            (this.videoPlayerContainer.style.width = t + 'px'),
            (this.videoPlayerContainer.style.height = d + 'px');
        }),
        (playerHTML5.prototype.getVideoPlayer = function () {
          return this.nodoVideo;
        }),
        (playerHTML5.prototype.creaControles = function () {
          (this.controles = document.createElement('div')),
            (this.controles.className = 'playerMPEPV_controles'),
            (this.controles.style.zIndex = '10');
          var e = 640,
            a = 0;
          640 < this.width
            ? ((a = this.width / 2 - 320),
              (this.controles.style.width = '640px'),
              (this.controles.style.left = a + 'px'),
              (this.controles.style.marginLeft = -1 * a + 'px'),
              (this.controles.style.paddingLeft = a + 'px'),
              (this.controles.style.paddingRight = a + 'px'))
            : ((this.controles.style.width = this.width + 'px'), (e = this.width)),
            (this.controles.style.visibility = 'hidden');
          var o = document.createElement('span');
          o.className = 'playerMPEPV_boton_play_pause playerMPEPV_boton_play';
          var t = document.createElement('em');
          t.appendChild(document.createTextNode('PLAY')),
            o.appendChild(t),
            this.controles.appendChild(o),
            (this.controles.playpause = o);
          var d = document.createElement('span');
          (d.className = 'playerMPEPV_posicion'),
            (t = document.createElement('em')),
            t.appendChild(document.createTextNode('00:00')),
            d.appendChild(t),
            (d.texto = t),
            this.controles.appendChild(d),
            (this.controles.tiempo = d);
          var r = document.createElement('span');
          (r.className = 'playerMPEPV_barra'),
            (t = document.createElement('em')),
            r.appendChild(t),
            (r.progreso = t);
          var n = document.createElement('div');
          (n.className = 'playerMPEPV_sliderseek'),
            r.appendChild(n),
            (r.sliderseek = n),
            this.controles.appendChild(r),
            (this.controles.barra = r);
          var l = document.createElement('span');
          (l.className = 'playerMPEPV_duracion'),
            (t = document.createElement('em')),
            t.appendChild(document.createTextNode('00:00')),
            l.appendChild(t),
            (l.texto = t),
            this.controles.appendChild(l),
            (this.controles.textoDuracion = l);
          var s = document.createElement('span');
          (s.className = 'playerMPEPV_pantalla_completa'),
            (s.innerHTML = 'PC'),
            this.controles.appendChild(s),
            (this.controles.fullscreen = s);
          var c = document.createElement('span');
          t = document.createElement('em');
          var u = document.createElement('span');
          (u.className = 'playerMPEPV_altavoz'),
            t.appendChild(u),
            c.appendChild(t),
            this.controles.appendChild(c),
            (c.altavoz = t),
            (c.style.position = 'relative');
          var m = document.createElement('div');
          m.className = 'playerMPEPV_slider';
          var y = document.createElement('div');
          (y.className = 'playerMPEPV_selector_nivel'), (y.id = 'vdpep_audio'), m.appendChild(y);
          var _ = document.createElement('div');
          if (
            ((_.className = 'playerMPEPV_nivel_slider'),
            m.appendChild(_),
            c.appendChild(m),
            (c.slider = m),
            (c.selectorNivel = y),
            (c.nivel = _),
            this.contenedorVideo.appendChild(this.controles),
            (this.controles.volumen = c),
            (m.style.bottom = c.offsetHeight + 'px'),
            (this.ancho_controles += o.offsetWidth),
            (this.ancho_controles += d.offsetWidth),
            (this.ancho_controles += l.offsetWidth),
            (this.ancho_controles += s.offsetWidth),
            (this.ancho_controles += c.offsetWidth),
            (r.style.width = this.controles.offsetWidth - 2 * a - this.ancho_controles + 'px'),
            (r.sliderseek.style.width = r.style.width),
            (this.controles.volumen.maximo = m.offsetHeight - 6),
            (this.controles.style.display = 'block'),
            !dispositivoMovil)
          ) {
            var f = this.datosVideo;
            (c.onmouseover = function () {
              f.isMuted || (m.style.visibility = 'visible');
            }),
              (c.onmouseout = function () {
                m.style.visibility = 'hidden';
              }),
              this.actualizaVolumen(),
              (this.pausado = document.createElement('div')),
              (this.pausado.className = 'playerMPEPV_pausado');
            var v = document.createElement('span');
            (v.className = 'playerMPEPV_pausado_play'),
              this.pausado.appendChild(v),
              this.contenedorVideo.appendChild(this.pausado);
          }
        }),
        (playerHTML5.prototype.fullscreenChange = function () {
          screenfull.isFullscreen ||
            (document.removeEventListener(screenfull.raw.fullscreenchange, screenfull.func, !0),
            (this.fullscreenWidth = MultimediaPEP[this.padre].datos.playerEPETParams.mediaWidth),
            (this.inFullscreen = !1),
            !versionMovil && MultimediaPEP[this.padre].multimedia.resize(this.fullscreenWidth));
        }),
        (playerHTML5.prototype.fullscreen = function () {
          if (dispositivoMovil && this.datosVideo.webkitSupportFullscreen)
            this.nodoVideo.webkitEnterFullscreen(),
              this.nodoVideo.addEventListener(
                'webkitendfullscreen',
                this.bind(this, this.fullscreenChange),
                !1
              );
          else if (screenfull.enabled) {
            screenfull.isFullscreen
              ? (screenfull.exit(),
                (this.inFullscreen = !1),
                (this.fullscreenWidth =
                  MultimediaPEP[this.padre].datos.playerEPETParams.mediaWidth),
                (this.fullscreenHeight =
                  MultimediaPEP[this.padre].datos.playerEPETParams.mediaHeight))
              : (screenfull.request(this.contenedorVideo),
                (this.inFullscreen = !0),
                (this.fullscreenWidth = 9 < IEv ? window.innerWidth : window.screen.width),
                (this.fullscreenHeight = 9 < IEv ? window.innerHeight : window.screen.height),
                (screenfull.func = this.fullscreenChange.bind(this)),
                document.addEventListener(screenfull.raw.fullscreenchange, screenfull.func, !0));
            var e = this.padre,
              a = this.fullscreenWidth;
            versionMovil ||
              setTimeout(function () {
                MultimediaPEP[e].multimedia.resize(a);
              }, 30);
          }
        });
      var $___var_a6858808b20cfeeb = function (e) {
        (this.playerHTML5 = e),
          (this.duracion = -1),
          (this.firstTime = !1),
          (this.adsActive = !1),
          (this.adsDone = !1),
          (this.fullscreen = !1),
          (this.adPlaying = !1),
          (this.adsController = null),
          (this.puntoMedio = !1),
          (this.finVideo = !1),
          (this.hlsObj = null),
          (this.playerHTML5.datosVideo.loading = null),
          (this.playerHTML5.datosVideo.webkitSupportFullscreen = !1),
          (this.video = this.playerHTML5.nodoVideo),
          this.playerHTML5.controles &&
            ((this.barra = this.playerHTML5.controles.barra),
            (this.playButton = this.playerHTML5.controles.playpause),
            (this.boton = -1),
            null != this.playerHTML5.adSaltar &&
              ((this.adSkip = this.playerHTML5.adSaltar),
              this.adSkip.addEventListener('click', this.bind(this, this.onAdSkip), !1)),
            this.playButton.addEventListener('click', this.bind(this, this.onClick), !1),
            (this.fullscreenButton = this.playerHTML5.controles.fullscreen),
            this.fullscreenButton.addEventListener(
              'click',
              this.bind(this, this.onFullscreenClick),
              !1
            ),
            this.barra.sliderseek.addEventListener('click', this.bind(this, this.seek), !1),
            (this.volumen = this.playerHTML5.controles.volumen),
            (this.tiempo = this.playerHTML5.controles.tiempo),
            (this.textoDuracion = this.playerHTML5.controles.textoDuracion),
            this.volumen.altavoz.addEventListener(
              'click',
              this.bind(this, this.onAltavozClick),
              !1
            ),
            this.volumen.selectorNivel.addEventListener(
              'click',
              this.bind(this, this.onSliderClick),
              !1
            ),
            this.volumen.selectorNivel.addEventListener(
              'mousemove',
              this.bind(this, this.onSliderMouseMove),
              !1
            ),
            this.volumen.selectorNivel.addEventListener(
              'mousedown',
              this.bind(this, this.onSliderMouseDown),
              !1
            ),
            this.volumen.selectorNivel.addEventListener(
              'mouseup',
              this.bind(this, this.onSliderMouseUp),
              !1
            ),
            this.volumen.selectorNivel.addEventListener(
              mouseWheelEvent,
              this.bind(this, this.onMousewheel),
              !1
            ),
            this.playerHTML5.datosVideo.isMuted && !dispositivoMovil && this.onAltavozClick()),
          this.video.addEventListener('timeupdate', this.bind(this, this.onTimeupdate), !1),
          this.video.addEventListener('play', this.bind(this, this.onPlayPausevideo), !1),
          this.video.addEventListener('pause', this.bind(this, this.onPlayPausevideo), !1),
          this.video.addEventListener(mouseWheelEvent, this.bind(this, this.onMousewheel), !1),
          null != this.playerHTML5.adContainer &&
            (this.adsController = new AdsController(this, this.playerHTML5)),
          this.playerHTML5.pausado &&
            (this.video.addEventListener('click', this.bind(this, this.onPause), !1),
            this.playerHTML5.pausado.addEventListener(
              'mouseover',
              this.bind(this, this.onPauseMouseOver),
              !1
            ),
            this.playerHTML5.pausado.addEventListener(
              'click',
              this.bind(this, this.onPauseClick),
              !1
            )),
          this.onClick();
      };
      MainController = $___var_a6858808b20cfeeb;
      (MainController.prototype.cargaDatos = function (e) {
        var a = Math.floor;
        for (var o in e) this.playerHTML5.datosVideo[o] = e[o];
        if (
          (this.playerHTML5.datosVideo.m3u8 &&
            (dispositivoMovil || canPlayHLS) &&
            (this.playerHTML5.datosVideo.hlsod = this.playerHTML5.datosVideo.m3u8),
          !(this.playerHTML5.datosVideo.hlsod && '' != this.playerHTML5.datosVideo.hlsod))
        )
          this.video.setAttribute('src', this.playerHTML5.datosVideo.src);
        else if (canPlayHLS && Hls) {
          (this.hlsObj = new Hls({ debug: !1 })),
            this.hlsObj.on(Hls.Events.MEDIA_ATTACHED, this.bind(this, this.onHlsAttached));
          var t = this.hlsObj;
          this.hlsObj.on(Hls.Events.ERROR, function (e, a) {
            if (a.fatal) {
              try {
                t.swapAudioCodec();
              } catch (a) {
                console.info('Error 2');
              }
              console.log('Error 1'), t.recoverMediaError();
            }
          }),
            this.hlsObj.attachMedia(this.video),
            this.video.addEventListener('seeking', this.bind(this, this.onSeeking), !1),
            this.video.addEventListener('seeked', this.bind(this, this.onSeeked), !1),
            (this.playerHTML5.datosVideo.loading = document.createElement('div')),
            (this.playerHTML5.datosVideo.loading.className = 'playerMPEPV_cloading');
          var d = document.createElement('div');
          (d.className = 'playerMPEPV_loading'),
            this.playerHTML5.datosVideo.loading.appendChild(d),
            this.playerHTML5.contenedorVideo.appendChild(this.playerHTML5.datosVideo.loading);
        } else
          dispositivoMovil
            ? this.video.setAttribute('src', this.playerHTML5.datosVideo.hlsod)
            : this.video.setAttribute('src', this.playerHTML5.datosVideo.src);
        if (
          (this.playerHTML5.datosVideo.titulo &&
            this.video.setAttribute('title', this.playerHTML5.datosVideo.titulo.replace(/"/g, '')),
          -1 < userAgent.indexOf('android') &&
            'undefined' != typeof connectionPEP &&
            'cellular' == connectionPEP.type &&
            this.video.load(),
          this.playerHTML5.datosVideo.spriteImg &&
            0 < this.playerHTML5.datosVideo.nSprites &&
            !dispositivoMovil)
        ) {
          var r = document.createElement('div');
          (r.className = 'playerMPEPV_thumbnails'),
            (r.id = 'thumbnails'),
            (em = document.createElement('div')),
            (em.className = 'playerMPEPV_time'),
            em.appendChild(document.createTextNode('00:00')),
            r.appendChild(em),
            (r.time = em),
            this.barra.appendChild(r),
            (r.style.backgroundImage = 'url(' + this.playerHTML5.datosVideo.spriteImg + ')'),
            (this.playerHTML5.controles.thumbnails = r),
            (r.onmouseover = function (a) {
              (r.style.visibility = 'hidden'), a.stopPropagation();
            }),
            (this.playerHTML5.controles.barra.onmouseover = function () {
              r.style.visibility = 'visible';
            }),
            (this.barra.sliderseek.ns = this.playerHTML5.datosVideo.nSprites),
            (this.barra.sliderseek.onmouseout = function () {
              r.style.visibility = 'hidden';
            }),
            (this.barra.sliderseek.onmousemove = function (o) {
              var e = o.layerX / o.target.offsetWidth,
                t = a(e * this.ns),
                d = 0,
                n = 0;
              t < this.ns &&
                ((d = a(t / 10)),
                (n = t % 10),
                (r.style.backgroundPosition = 100 * (-1 * n) + 'px ' + 56 * (-1 * d) + 'px'),
                (r.style.left = e * o.target.offsetWidth - 30 + 'px'));
            });
        }
        dispositivoMovil ||
          (this.playerHTML5.controles.thumbnails &&
            ((this.time = this.playerHTML5.controles.thumbnails.time),
            this.playerHTML5.controles.barra.sliderseek.addEventListener(
              'mousemove',
              this.bind(this, this.seekmove),
              !1
            )),
          this.volumen.addEventListener('mouseout', this.bind(this, this.volumenMouseOut), !1));
      }),
        (MainController.prototype.bind = function (e, a) {
          return function () {
            a.apply(e, arguments);
          };
        }),
        (MainController.prototype.onHlsAttached = function () {
          this.hlsObj.loadSource(this.playerHTML5.datosVideo.hlsod);
        }),
        (MainController.prototype.onSeeking = function () {
          this.playerHTML5.datosVideo.loading &&
            (this.playerHTML5.datosVideo.loading.className = 'playerMPEPV_cloading visible');
        }),
        (MainController.prototype.onSeeked = function () {
          this.playerHTML5.datosVideo.loading &&
            (this.playerHTML5.datosVideo.loading.className = 'playerMPEPV_cloading');
        }),
        (MainController.prototype.onPause = function () {
          this.playerHTML5.playing &&
            ((this.playerHTML5.pausado.style.display = 'block'), this.pause());
        }),
        (MainController.prototype.onPauseMouseOver = function () {
          this.playerHTML5.controles.style.display = 'none';
        }),
        (MainController.prototype.onPauseClick = function () {
          this.resumeAfterAd(),
            (this.adsDone = !0),
            (this.playerHTML5.pausado.style.display = 'none'),
            (this.playerHTML5.controles.style.display = 'block');
        }),
        (MainController.prototype.onPlayPausevideo = function (a) {
          var e = Math.abs;
          ('pause' == a.type && 0.5 > e(a.target.duration - a.target.currentTime)) ||
            ((this.playerHTML5.marcado._datosMarcado.currentTime = a.target.currentTime),
            'play' == a.type
              ? 0.2 < a.target.currentTime && this.playerHTML5.marcado.marcaEvento('mediaResumed')
              : this.playerHTML5.marcado.marcaEvento('mediaPaused'));
        }),
        (MainController.prototype.onTimeupdate = function (a) {
          var e = Math.abs;
          if (
            isNaN(a.target.duration) ||
            0 > a.target.duration ||
            0.1 > this.video.currentTime ||
            ('streaming' == this.playerHTML5.datosVideo.tipoReproduccion &&
              !this.playerHTML5.playing)
          )
            return a.preventDefault(), !1;
          if (
            (this.firstTime ||
              (this.playerHTML5.controlesNativosVideo &&
                this.playerHTML5.nodoVideo.setAttribute('controls', 'controls'),
              (this.firstTime = !0),
              (this.puntoMedio = !1),
              (this.playerHTML5.nodoVideo.style.display = 'block'),
              this.playerHTML5.controles &&
                ((this.playerHTML5.controles.style.visibility = 'visible'),
                'streaming' == this.playerHTML5.datosVideo.tipoReproduccion &&
                  ((this.playerHTML5.controles.tiempo.style.width =
                    this.playerHTML5.controles.tiempo.offsetWidth +
                    this.playerHTML5.controles.barra.offsetWidth +
                    'px'),
                  (this.playerHTML5.controles.tiempo.style.textAlign = 'left'),
                  (this.playerHTML5.controles.tiempo.texto.innerHTML = LANG_MSG[
                    LANG
                  ].directo.toUpperCase()),
                  (this.playerHTML5.controles.barra.style.display = 'none'),
                  (this.playerHTML5.controles.textoDuracion.style.visibility = 'hidden'))),
              null != this.playerHTML5.adContainer &&
                (this.playerHTML5.adContainer.style.display = 'none'),
              (this.duracion =
                'streaming' == this.playerHTML5.datosVideo.tipoReproduccion
                  ? -1
                  : a.target.duration),
              !this.playerHTML5.controlesNativosVideo && this.actualizaTiempo(-1),
              (this.playerHTML5.marcado._datosMarcado.ad = ''),
              (this.playerHTML5.marcado._datosMarcado.adCue = ''),
              (this.playerHTML5.marcado._datosMarcado.duracion = this.duracion),
              ('undefined' == typeof this.playerHTML5.marcado._datosMarcado.adTitle ||
                -1 == this.playerHTML5.marcado._datosMarcado.adTitle.indexOf(':-:')) &&
                (this.playerHTML5.marcado._datosMarcado.adTitle = ''),
              (this.playerHTML5.marcado._datosMarcado.uid = this.playerHTML5.datosVideo.uid),
              (this.playerHTML5.marcado._datosMarcado.seccion_creacion = this.playerHTML5.datosVideo.seccion_creacion),
              (this.playerHTML5.marcado._datosMarcado.fuente = this.playerHTML5.datosVideo.fuente),
              (this.playerHTML5.marcado._datosMarcado.tags = this.playerHTML5.datosVideo.tagsIds),
              (this.playerHTML5.marcado._datosMarcado.noticiaTags = this.playerHTML5.datosVideo.noticiaTags),
              (this.playerHTML5.marcado._datosMarcado.eventTags = this.playerHTML5.datosVideo.eventTags),
              (this.playerHTML5.marcado._datosMarcado.autores = this.playerHTML5.datosVideo.autoresIds),
              (this.playerHTML5.marcado._datosMarcado.currentTime = 0),
              this.playerHTML5.marcado.marcaEvento('mediaBegin'),
              MultimediaReproduciendo(this.playerHTML5.datosVideo.id_video, !1)),
            'streaming' != this.playerHTML5.datosVideo.tipoReproduccion) &&
            (!this.playerHTML5.controlesNativosVideo &&
              this.playerHTML5.controles &&
              ((this.tiempo.texto.innerHTML = tiempoBonito(this.video.currentTime)),
              (this.barra.progreso.style.width =
                (100 * this.video.currentTime) / this.duracion + '%')),
            !this.puntoMedio &&
              0.3 > e(this.duracion / 2 - this.video.currentTime) &&
              ((this.puntoMedio = !0),
              (this.playerHTML5.marcado._datosMarcado.ad = ''),
              (this.playerHTML5.marcado._datosMarcado.adCue = ''),
              (this.playerHTML5.marcado._datosMarcado.duracion = this.duracion),
              (this.playerHTML5.marcado._datosMarcado.adTitle = ''),
              (this.playerHTML5.marcado._datosMarcado.uid = this.playerHTML5.datosVideo.uid),
              (this.playerHTML5.marcado._datosMarcado.seccion_creacion = this.playerHTML5.datosVideo.seccion_creacion),
              (this.playerHTML5.marcado._datosMarcado.fuente = this.playerHTML5.datosVideo.fuente),
              (this.playerHTML5.marcado._datosMarcado.tags = this.playerHTML5.datosVideo.tagsIds),
              (this.playerHTML5.marcado._datosMarcado.noticiaTags = this.playerHTML5.datosVideo.noticiaTags),
              (this.playerHTML5.marcado._datosMarcado.eventTags = this.playerHTML5.datosVideo.eventTags),
              (this.playerHTML5.marcado._datosMarcado.autores = this.playerHTML5.datosVideo.autoresIds),
              (this.playerHTML5.marcado._datosMarcado.currentTime = this.video.currentTime),
              this.playerHTML5.marcado.marcaEvento('halfmediaComplete')),
            !this.finVideo && 0.3 > e(this.duracion - this.video.currentTime))
          ) {
            this.finVideo = !0;
            var o = this;
            setTimeout(function () {
              o.onContentEnded();
            }, 300);
          }
        }),
        (MainController.prototype.onContentEnded = function () {
          return (
            (this.playerHTML5.marcado._datosMarcado.ad = ''),
            (this.playerHTML5.marcado._datosMarcado.adCue = ''),
            (this.playerHTML5.marcado._datosMarcado.duracion = this.duracion),
            (this.playerHTML5.marcado._datosMarcado.uid = this.playerHTML5.datosVideo.uid),
            (this.playerHTML5.marcado._datosMarcado.adTitle = ''),
            (this.playerHTML5.marcado._datosMarcado.seccion_creacion = this.playerHTML5.datosVideo.seccion_creacion),
            (this.playerHTML5.marcado._datosMarcado.fuente = this.playerHTML5.datosVideo.fuente),
            (this.playerHTML5.marcado._datosMarcado.tags = this.playerHTML5.datosVideo.tagsIds),
            (this.playerHTML5.marcado._datosMarcado.noticiaTags = this.playerHTML5.datosVideo.noticiaTags),
            (this.playerHTML5.marcado._datosMarcado.eventTags = this.playerHTML5.datosVideo.eventTags),
            (this.playerHTML5.marcado._datosMarcado.autores = this.playerHTML5.datosVideo.autoresIds),
            (this.playerHTML5.marcado._datosMarcado.currentTime = this.duracion),
            this.playerHTML5.marcado.marcaEvento('mediaComplete'),
            'undefined' != typeof this.playerHTML5.datosVideo.autopromo &&
            '' != this.playerHTML5.datosVideo.autopromo
              ? (this.playerHTML5.nodoVideo.setAttribute(
                  'src',
                  this.playerHTML5.datosVideo.autopromo
                ),
                (this.playerHTML5.controles.style.height = '0px'),
                this.playerHTML5.nodoVideo.addEventListener(
                  'ended',
                  this.bind(this, this.onAutopromoEnd),
                  !1
                ),
                (this.playerHTML5.datosVideo.autopromo = ''),
                void this.playerHTML5.nodoVideo.play())
              : void (this.playerHTML5.datosVideo.publicidad_post_roll
                  ? ((this.adsDone = !1), this.adsController && this.adsController.contentEnded())
                  : this.restart())
          );
        }),
        (MainController.prototype.onAutopromoEnd = function () {
          this.playerHTML5.nodoVideo.removeEventListener('ended', this.onAutopromoEnd),
            this.restart(),
            (this.playerHTML5.controles.style.height = '30px');
        }),
        (MainController.prototype.restart = function () {
          if (
            (this.playerHTML5.controlesNativosVideo &&
              this.playerHTML5.nodoVideo.setAttribute('controls', 'controls'),
            this.playerHTML5.controles &&
              this.playerHTML5.controles.thumbnails &&
              (this.playerHTML5.controles.thumbnails.style.visibility = 'hidden'),
            this.adPlaying
              ? (this.ocultaSaltar(),
                (this.playerHTML5.marcado._datosMarcado.adCurrentTime = this.adsController.currentTime),
                this.adsController.adSkip(),
                (this.playerHTML5.nodoVideo.style.display = 'block'))
              : ((this.playerHTML5.nodoVideo.currentTime = 0.01),
                this.playerHTML5.nodoVideo.pause(),
                (this.playerHTML5.playing = !1),
                (this.playerHTML5.marcado._datosMarcado.currentTime = 0)),
            this.updateChrome(),
            (this.adsDone = !1),
            (this.firstTime = !1),
            (this.finVideo = !1),
            (this.playerHTML5.marcado.eventos = {}),
            this.adsController &&
              ((this.adsController.contentCompleteCalled = !1),
              (this.adsController.adPosition = 'pre-roll')),
            0 < this.playerHTML5.datosVideo.modoSiguientesVideos)
          ) {
            var e = this.playerHTML5.datosVideo.agrsNombreNormalizado.split(',')[0];
            return void siguientesVideos(e, this.playerHTML5.datosVideo.id_video);
          }
          this.playerHTML5.pausado && (this.playerHTML5.pausado.style.display = 'block'),
            (this.playerHTML5.playing = !1);
        }),
        (MainController.prototype.actualizaTiempo = function (e, a) {
          isIphone ||
            (a
              ? 0 == e
                ? (this.textoDuracion.texto.innerHTML = '')
                : (this.textoDuracion.texto.innerHTML = e.toFixed(0) + ' s')
              : !this.playerHTML5.controlesNativosVideo &&
                (-1 == e
                  ? (this.textoDuracion.texto.innerHTML = tiempoBonito(this.duracion))
                  : (this.textoDuracion.texto.innerHTML = tiempoBonito(e))));
        }),
        (MainController.prototype.onAltavozClick = function () {
          (this.playerHTML5.controles.volumen.altavoz.className = this.playerHTML5.controles.volumen.altavoz.className.replace(
            / playerMPEPV_silencio/g,
            ''
          )),
            0 == this.playerHTML5.nodoVideo.volume
              ? (this.adsActive && this.adsController.setVolume(this.playerHTML5.volumenActual),
                this.playerHTML5.setVolume(this.playerHTML5.volumenActual),
                (this.playerHTML5.datosVideo.isMuted = !1),
                this.playerHTML5.controles.volumen.onmouseover())
              : ((this.playerHTML5.volumenActual = this.playerHTML5.nodoVideo.volume),
                (this.playerHTML5.controles.volumen.altavoz.className += ' playerMPEPV_silencio'),
                this.adsActive && this.adsController.setVolume(0),
                this.playerHTML5.setVolume(0),
                (this.playerHTML5.datosVideo.isMuted = !0),
                this.playerHTML5.controles.volumen.onmouseout());
        }),
        (MainController.prototype.volumenMouseOut = function () {
          this.boton = -1;
        }),
        (MainController.prototype.setVolume = function (e) {
          0 > e ||
            1 < e ||
            (this.adsActive && this.adsController.setVolume(e), this.playerHTML5.setVolume(e));
        }),
        (MainController.prototype.seekjs = function (e) {
          (this.video.currentTime = e),
            this.playerHTML5.playing ||
              (this.playerHTML5.play(),
              (this.adsActive = !1),
              (this.adsDone = !0),
              this.updateChrome());
        }),
        (MainController.prototype.seek = function (a) {
          var e = (this.duracion * a.layerX) / a.target.offsetWidth;
          (this.video.currentTime = e),
            this.playerHTML5.playing ||
              (this.playerHTML5.play(),
              (this.adsActive = !1),
              (this.adsDone = !0),
              this.updateChrome());
        }),
        (MainController.prototype.seekmove = function (a) {
          var e = (this.video.duration * a.layerX) / a.target.offsetWidth;
          (this.time.innerHTML = tiempoBonito(e)),
            (this.time.style.left = 50 - this.time.offsetWidth / 2 + 'px');
        }),
        (MainController.prototype.onSliderClick = function (e) {
          var a = 1 - (e.offsetY ? e.offsetY : e.layerY) / e.target.offsetHeight;
          this.setVolume(a);
        }),
        (MainController.prototype.onSliderMouseMove = function (e) {
          if (1 == this.boton) {
            var a = 1 - (e.offsetY ? e.offsetY : e.layerY) / e.target.offsetHeight;
            this.setVolume(a);
          }
        }),
        (MainController.prototype.onSliderMouseDown = function (e) {
          this.boton = e.buttons ? e.buttons : e.which;
        }),
        (MainController.prototype.onSliderMouseUp = function () {
          this.boton = -1;
        }),
        (MainController.prototype.onMousewheel = function (a) {
          var o = window.event || a,
            e = o.detail ? a.detail : a.wheelDelta;
          (e *= factorVolumen),
            0 < e
              ? this.setVolume(this.playerHTML5.nodoVideo.volume + 0.02)
              : this.setVolume(this.playerHTML5.nodoVideo.volume - 0.02);
        }),
        (MainController.prototype.onClick = function () {
          return null == this.playerHTML5.adContainer || this.adsDone
            ? void (this.adsActive
                ? (this.adPlaying ? this.adsController.pause() : this.adsController.resume(),
                  (this.adPlaying = !this.adPlaying))
                : this.playerHTML5.playing
                ? this.playerHTML5.pause()
                : this.playerHTML5.play(),
              this.updateChrome())
            : (this.adsController.initialUserAction(),
              this.playerHTML5.preloadContent(this.bind(this, this.loadAds)),
              void (this.adsDone = !0));
        }),
        (MainController.prototype.onFullscreenClick = function () {
          this.playerHTML5.fullscreen();
        }),
        (MainController.prototype.updateChrome = function () {
          if (this.playerHTML5.controles) {
            var e = this.adsActive ? this.adPlaying : this.playerHTML5.playing;
            this.playButton.className = e
              ? 'playerMPEPV_boton_play_pause playerMPEPV_boton_pause'
              : 'playerMPEPV_boton_play_pause playerMPEPV_boton_play';
          }
        }),
        (MainController.prototype.resumeAfterAd = function () {
          (this.adPlaying = !1),
            (this.adsActive = !1),
            this.playerHTML5.play(),
            this.updateChrome();
        }),
        (MainController.prototype.pause = function () {
          this.adPlaying && this.adsController.pause(),
            this.playerHTML5.playing && this.playerHTML5.pause(),
            (this.adPlaying = !1),
            this.updateChrome();
        }),
        (MainController.prototype.pauseForAd = function () {
          (this.adsActive = !0),
            (this.adPlaying = !1),
            this.playerHTML5.pause(),
            this.updateChrome();
        }),
        (MainController.prototype.startAd = function () {
          (this.adsActive = !0), (this.adPlaying = !0), this.updateChrome();
        }),
        (MainController.prototype.adClicked = function () {
          (this.adsActive = !0),
            this.adsController.pause(),
            (this.adPlaying = !1),
            this.updateChrome();
        }),
        (MainController.prototype.loadAds = function () {
          this.adsController.requestAds(this.playerHTML5.adTagUrl);
        }),
        (MainController.prototype.onAdSkip = function () {
          (this.playerHTML5.marcado._datosMarcado.ad = this.adsController.adInfo),
            (this.playerHTML5.marcado._datosMarcado.adCue = this.adsController.adPosition),
            (this.playerHTML5.marcado._datosMarcado.duracion = this.adsController.duracionAd),
            (this.playerHTML5.marcado._datosMarcado.adTitle = this.adsController.adTitle),
            (this.playerHTML5.marcado._datosMarcado.uid = this.playerHTML5.datosVideo.uid),
            (this.playerHTML5.marcado._datosMarcado.seccion_creacion = this.playerHTML5.datosVideo.seccion_creacion),
            (this.playerHTML5.marcado._datosMarcado.fuente = this.playerHTML5.datosVideo.fuente),
            (this.playerHTML5.marcado._datosMarcado.tags = this.playerHTML5.datosVideo.tagsIds),
            (this.playerHTML5.marcado._datosMarcado.noticiaTags = this.playerHTML5.datosVideo.noticiaTags),
            (this.playerHTML5.marcado._datosMarcado.eventTags = this.playerHTML5.datosVideo.eventTags),
            (this.playerHTML5.marcado._datosMarcado.autores = this.playerHTML5.datosVideo.autoresIds),
            (this.playerHTML5.marcado._datosMarcado.adCurrentTime = this.adsController.currentTime),
            this.playerHTML5.marcado.marcaEvento('adSkip'),
            this.ocultaSaltar(),
            this.adsController.adSkip();
        }),
        (MainController.prototype.muestraSaltar = function () {
          this.adSkip && (this.adSkip.style.display = 'block');
        }),
        (MainController.prototype.ocultaSaltar = function () {
          this.adSkip && (this.adSkip.style.display = 'none');
        });
      var $___var_0f48772a815bb8c4 = function (e, a) {
        if (
          ((this.controller = e),
          (this.player = a),
          (this.contentCompleteCalled = !1),
          (this.duracionAd = 0),
          (this.adPosition = 'pre-roll'),
          (this.adInfo = 'dfp'),
          (this.skippable = !1),
          (this.adComplete = !1),
          (this.currentTime = -1),
          vpaidHTML5PEP &&
            google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
          (this.adDisplayContainer = new google.ima.AdDisplayContainer(this.player.adContainer)),
          (this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer)),
          this.adsLoader)
        ) {
          var o = this.adsLoader.getSettings();
          o.setNumRedirects(5);
        }
        (this.adsManager = null),
          this.adsLoader.addEventListener(
            google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
            this.onAdsManagerLoaded,
            !1,
            this
          ),
          this.adsLoader.addEventListener(
            google.ima.AdErrorEvent.Type.AD_ERROR,
            this.onAdError,
            !1,
            this
          );
      };
      AdsController = $___var_0f48772a815bb8c4;
      (AdsController.prototype.bind = function (e, a) {
        return function () {
          a.apply(e, arguments);
        };
      }),
        (AdsController.prototype.initialUserAction = function () {
          this.adDisplayContainer.initialize();
        }),
        (AdsController.prototype.requestAds = function (e) {
          (e = e.replace('{random}', (Math.random() + '').substr(2, 9))),
            (e =
              'pre-roll' == this.adPosition
                ? e.replace('{cuePointType}', 'pre')
                : e.replace('{cuePointType}', 'post')),
            this.adsLoader && this.adsLoader.contentComplete();
          var a = new google.ima.AdsRequest();
          (a.adTagUrl = e),
            (a.linearAdSlotWidth = this.player.width),
            (a.linearAdSlotHeight = this.player.height),
            (a.nonLinearAdSlotWidth = this.player.width),
            (a.nonLinearAdSlotHeight = this.player.height);
          var o = e.replace(/^.*iu=/, '');
          (o = unescape(o.replace(/\&.*$/, ''))),
            (this.player.marcado._datosMarcado.duracion = 0),
            (this.player.marcado._datosMarcado.ad = ''),
            (this.player.marcado._datosMarcado.adCue = this.adPosition + '-' + o),
            (this.player.marcado._datosMarcado.adTitle = ''),
            (this.player.marcado._datosMarcado.uid = this.player.datosVideo.uid),
            (this.player.marcado._datosMarcado.seccion_creacion = this.player.datosVideo.seccion_creacion),
            (this.player.marcado._datosMarcado.fuente = this.player.datosVideo.fuente),
            (this.player.marcado._datosMarcado.tags = this.player.datosVideo.tagsIds),
            (this.player.marcado._datosMarcado.noticiaTags = this.player.datosVideo.noticiaTags),
            (this.player.marcado._datosMarcado.eventTags = this.player.datosVideo.eventTags),
            (this.player.marcado._datosMarcado.autores = this.player.datosVideo.autoresIds),
            this.player.marcado.marcaEvento('adRequest'),
            this.adsLoader.requestAds(a),
            'pre-roll' == this.adPosition &&
              (this.timeoutLoadedStarted = setTimeout(this.resumeOnError.bind(this), 4000));
        }),
        (AdsController.prototype.onAdsManagerLoaded = function (e) {
          this.controller.actualizaTiempo(0, !0),
            (this.adsManager = e.getAdsManager(this.player.nodoVideo)),
            this.processAdsManager(this.adsManager),
            this.player.datosVideo.isMuted && this.adsManager.setVolume(0);
        }),
        (AdsController.prototype.processAdsManager = function (e) {
          e.addEventListener(
            google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
            this.onContentPauseRequested,
            !1,
            this
          ),
            e.addEventListener(
              google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
              this.onContentResumeRequested,
              !1,
              this
            ),
            e.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this);
          var a = [
            google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
            google.ima.AdEvent.Type.CLICK,
            google.ima.AdEvent.Type.COMPLETE,
            google.ima.AdEvent.Type.LOADED,
            google.ima.AdEvent.Type.PAUSED,
            google.ima.AdEvent.Type.RESUMED,
            google.ima.AdEvent.Type.STARTED,
          ];
          for (var o in a) e.addEventListener(a[o], this.onAdEvent, !1, this);
          var t, d;
          this.controller.fullscreen
            ? ((t = this.controller.fullscreenWidth), (d = this.controller.fullscreenHeight))
            : ((t = this.player.width), (d = this.player.height)),
            e.init(t, d, google.ima.ViewMode.NORMAL),
            e.start();
        }),
        (AdsController.prototype.pause = function () {
          this.adsManager && this.adsManager.pause(), clearInterval(this.intervalTimmer);
        }),
        (AdsController.prototype.resume = function () {
          this.adsManager && this.adsManager.resume();
        }),
        (AdsController.prototype.setVolume = function (e) {
          this.adsManager && (this.adsManager.setVolume(e), this.player.actualizaVolumen());
        }),
        (AdsController.prototype.onContentPauseRequested = function () {
          this.controller.pauseForAd();
        }),
        (AdsController.prototype.onContentResumeRequested = function () {
          'post-roll' == this.adPosition ||
            (clearInterval(this.intervalTimmer),
            !this.contentCompleteCalled && this.controller.resumeAfterAd());
        }),
        (AdsController.prototype.onAdEvent = function (e) {
          switch (e.type) {
            case google.ima.AdEvent.Type.CLICK:
              clearInterval(this.intervalTimmer), this.controller.adClicked();
              break;
            case google.ima.AdEvent.Type.STARTED:
              clearTimeout(this.timeoutLoadedStarted);
              var a = e.getAd();
              a.isLinear() &&
                null != this.player.adContainer &&
                ((this.player.adContainer.style.display = 'block'),
                this.player.controles &&
                  ((this.player.controles.barra.style.visibility = 'hidden'),
                  (this.player.controles.tiempo.style.width =
                    this.player.controles.tiempo.offsetWidth + 'px'),
                  (this.player.controles.fullscreen.style.visibility = 'hidden'),
                  (this.player.controles.tiempo.texto.innerHTML = LANG_MSG[
                    LANG
                  ].publicidad.toUpperCase()),
                  isIpad && (this.player.controles.volumen.style.visibility = 'hidden')),
                (dispositivoMovil || this.player.controlesNativosVideo) &&
                  ((this.player.contenedorVideo.className = this.player.contenedorVideo.className.replace(
                    / playerMPEPV_touch_\w*/g,
                    ''
                  )),
                  (this.player.contenedorVideo.className += ' playerMPEPV_touch_publicidad'),
                  this.player.nodoVideo.removeAttribute('controls')),
                this.controller.startAd(),
                MultimediaReproduciendo(this.player.datosVideo.id_video, !1),
                (this.duracionAd = -2),
                (this.adComplete = !1),
                (this.intervalTimmer = setInterval(this.onProgress.bind(this), 300)));
              break;
            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
              (this.player.nodoVideo.style.display = 'block'),
                this.player.controles &&
                  ((this.player.controles.style.visibility = 'visible'),
                  (this.player.controles.barra.style.visibility = 'visible'),
                  (this.player.controles.fullscreen.style.visibility = 'visible'),
                  (this.player.controles.tiempo.texto.innerHTML = '00:00')),
                (this.player.adContainer.style.display = 'none'),
                (this.controller.adPlaying = !1),
                (this.controller.adsActive = !1),
                this.controller.actualizaTiempo(-1),
                this.controller.ocultaSaltar(),
                this.adComplete &&
                  ((this.adComplete = !1),
                  (this.player.marcado._datosMarcado.duracion = this.duracionAd),
                  (this.player.marcado._datosMarcado.ad = this.adInfo),
                  (this.player.marcado._datosMarcado.adCue = this.adPosition),
                  (this.player.marcado._datosMarcado.adTitle = this.adTitle),
                  (this.player.marcado._datosMarcado.uid = this.player.datosVideo.uid),
                  (this.player.marcado._datosMarcado.seccion_creacion = this.player.datosVideo.seccion_creacion),
                  (this.player.marcado._datosMarcado.fuente = this.player.datosVideo.fuente),
                  (this.player.marcado._datosMarcado.tags = this.player.datosVideo.tagsIds),
                  (this.player.marcado._datosMarcado.noticiaTags = this.player.datosVideo.noticiaTags),
                  (this.player.marcado._datosMarcado.eventTags = this.player.datosVideo.eventTags),
                  (this.player.marcado._datosMarcado.autores = this.player.datosVideo.autoresIds),
                  (this.player.marcado._datosMarcado.adCurrentTime = this.duracionAd),
                  this.player.marcado.marcaEvento('adComplete')),
                'post-roll' == this.adPosition &&
                  ((this.adPosition = 'pre-roll'), this.controller.restart()),
                clearInterval(this.intervalTimmer),
                (dispositivoMovil || this.player.controlesNativosVideo) &&
                  ((this.player.contenedorVideo.className = this.player.contenedorVideo.className.replace(
                    / playerMPEPV_touch[\w_]*/g,
                    ''
                  )),
                  (this.player.contenedorVideo.className += ' playerMPEPV_touch'),
                  this.player.nodoVideo.setAttribute('controls', 'controls'));
              break;
            case google.ima.AdEvent.Type.PAUSED:
              clearInterval(this.intervalTimmer),
                (this.player.marcado._datosMarcado.adCurrentTime = this.currentTime),
                this.player.marcado.marcaEvento('adPaused');
              break;
            case google.ima.AdEvent.Type.RESUMED:
              (this.intervalTimmer = setInterval(this.onProgress.bind(this), 300)),
                MultimediaReproduciendo(this.player.datosVideo.id_video, !1),
                (this.player.marcado._datosMarcado.adCurrentTime = this.currentTime),
                this.player.marcado.marcaEvento('adResumed');
              break;
            case google.ima.AdEvent.Type.LOADED:
              clearTimeout(this.timeoutLoadedStarted);
              var a = e.getAd();
              if (
                ('undefined' != typeof a.isSkippable() && a.isSkippable() && (this.skippable = !0),
                (this.adTitle = a.getAdId() + ' - ' + a.getTitle()),
                !a.isLinear())
              )
                return void this.controller.resumeAfterAd();
              (this.adInfo = 0 == a.getWrapperAdIds().length ? 'dfp' : 'tercero'),
                this.player.controles &&
                  this.player.controles.thumbnails &&
                  (this.player.controles.thumbnails.style.visibility = 'hidden');
          }
        }),
        (AdsController.prototype.resumeOnError = function () {
          this.adsManager ? this.adsManager.stop() : this.onContentResumeRequested();
        }),
        (AdsController.prototype.onProgress = function () {
          return 0 >= this.adsManager.getRemainingTime()
            ? void 0
            : !this.controller.adPlaying || 1 >= this.duracionAd || 99 < this.duracionAd
            ? ((this.duracionAd = this.adsManager.getRemainingTime()),
              this.player.controles && (this.player.controles.style.visibility = 'visible'),
              (this.player.marcado._datosMarcado.duracion = this.duracionAd),
              (this.player.marcado._datosMarcado.ad = this.adInfo),
              (this.player.marcado._datosMarcado.adCue = this.adPosition),
              (this.player.marcado._datosMarcado.adTitle = this.adTitle),
              (this.player.marcado._datosMarcado.uid = this.player.datosVideo.uid),
              (this.player.marcado._datosMarcado.seccion_creacion = this.player.datosVideo.seccion_creacion),
              (this.player.marcado._datosMarcado.fuente = this.player.datosVideo.fuente),
              (this.player.marcado._datosMarcado.tags = this.player.datosVideo.tagsIds),
              (this.player.marcado._datosMarcado.noticiaTags = this.player.datosVideo.noticiaTags),
              (this.player.marcado._datosMarcado.eventTags = this.player.datosVideo.eventTags),
              (this.player.marcado._datosMarcado.autores = this.player.datosVideo.autoresIds),
              (this.player.marcado._datosMarcado.adCurrentTime = 0),
              void this.player.marcado.marcaEvento('adStart'))
            : void ((this.currentTime = this.duracionAd - this.adsManager.getRemainingTime()),
              'pre-roll' == this.adPosition &&
                (!isIphone &&
                  !this.skippable &&
                  2 < this.adsManager.getRemainingTime() &&
                  this.adsManager.getRemainingTime() < this.duracionAd - 7 &&
                  this.controller.muestraSaltar(),
                isIphone &&
                  this.adsManager.getRemainingTime() < this.duracionAd - 21 &&
                  (clearInterval(this.intervalTimmer), this.adsManager.stop())),
              !isIphone &&
                1 < this.adsManager.getRemainingTime() &&
                this.controller.actualizaTiempo(this.adsManager.getRemainingTime(), !0),
              0.5 > this.adsManager.getRemainingTime() && (this.adComplete = !0));
        }),
        (AdsController.prototype.onAdError = function (e) {
          var a = e.getError();
          (this.player.marcado._datosMarcado.adCue = this.adPosition),
            (this.player.marcado._datosMarcado.ad = this.adInfo),
            (this.player.marcado._datosMarcado.uid = this.player.datosVideo.uid),
            (this.player.marcado._datosMarcado.seccion_creacion = this.player.datosVideo.seccion_creacion),
            (this.player.marcado._datosMarcado.fuente = this.player.datosVideo.fuente),
            (this.player.marcado._datosMarcado.adCurrentTime = -1),
            (this.player.marcado._datosMarcado.adTitle =
              (this.adTitle ? this.adTitle : 'error ad_load') +
              ':-:' +
              a.getErrorCode() +
              (a.getErrorCode() == a.getVastErrorCode() ? '' : '-' + a.getVastErrorCode())),
            this.player.marcado.marcaEvento('adError'),
            (this.player.nodoVideo.style.display = 'block'),
            this.player.controles && (this.player.controles.style.visibility = 'visible'),
            (this.player.adContainer.style.display = 'none'),
            (dispositivoMovil || this.player.controlesNativosVideo) &&
              ((this.player.contenedorVideo.className = this.player.contenedorVideo.className.replace(
                / playerMPEPV_touch[\w_]+/g,
                ''
              )),
              (this.player.contenedorVideo.className += ' playerMPEPV_touch'),
              this.player.nodoVideo.setAttribute('controls', 'controls')),
            'post-roll' == this.adPosition
              ? ((this.adPosition = 'pre-roll'), this.controller.restart())
              : (clearTimeout(this.timeoutLoadedStarted), this.controller.resumeAfterAd()),
            this.adsManager && this.adsManager.destroy(),
            (this.controller.adPlaying = !1),
            (this.controller.adsActive = !1);
        }),
        (AdsController.prototype.resize = function (e, a) {
          this.adsManager && this.adsManager.resize(e, a, google.ima.ViewMode.FULLSCREEN);
        }),
        (AdsController.prototype.contentEnded = function () {
          dispositivoMovil
            ? this.controller.restart()
            : ((this.adPosition = 'post-roll'),
              (this.contentCompleteCalled = !0),
              (this.controller.adsActive = !1),
              (this.duracionAd = -2),
              this.controller.onClick());
        }),
        (AdsController.prototype.adSkip = function () {
          clearInterval(this.intervalTimmer),
            this.adsManager.stop(),
            (this.controller.adsActive = !1),
            (this.controller.adPlaying = !1);
        });
      function $___var_4d32e08f41cbb723 (e, a, o, t, d, r, n) {
        (id_div_ReproductorVideo = t),
          (datosVideo = {}),
          (datosVideo.playerEPETParams = {
            mediaWidth: a,
            mediaHeight: o,
            URLMediaFile: '',
            URLMediaStill: n,
            URLFirstFrame: n,
            compactMode: 'false',
          }),
          (datosVideo.anchoPlayer = a),
          (datosVideo.altoPlayer = o),
          (datosVideo.idRefBrightcove = e.replace(/_0$/, '')),
          (datosVideo.publiActiva = d),
          (datosVideo.keywordsVideo = r),
          (datosVideo.urlNoticia = ''),
          (datosVideo.tituloVideo = '');
        new EPET_Video(datosVideo, id_div_ReproductorVideo);
      }
      function $___var_8246b080722d0760 (e, a, o, t, d) {
        EPET_VideoPlayerBloqueado(e, a, o, t, '0', d);
      }
      function $___var_217ff12ce5ca1b49 (e, a, o, t, d, r, n) {
        if (!css_multimedia_cargado) {
          css_multimedia_cargado = !0;
          var l = document.createElement('link');
          (l.type = 'text/css'),
            (l.rel = 'stylesheet'),
            (l.href = css_multimedia),
            document.getElementsByTagName('head')[0].appendChild(l);
        }
        var s,
          c,
          u = 'img_' + e;
        switch (d + '') {
          case '0':
            c = n ? LANG_MSG[LANG].audio_geobloqueado : LANG_MSG[LANG].geobloqueado;
            break;
          case '1':
            c = n ? LANG_MSG[LANG].audio_aun_no_disponible : LANG_MSG[LANG].aun_no_disponible;
            break;
          case '2':
            c = n ? LANG_MSG[LANG].audio_no_disponible : LANG_MSG[LANG].no_disponible;
            break;
          case '3':
            c = LANG_MSG[LANG].actualizar_plugin;
            break;
          case '4':
            c = LANG_MSG[LANG].bloqueado;
            break;
          case '-1':
          case '-2':
            c = n ? LANG_MSG[LANG].audio_no_encontrado : LANG_MSG[LANG].no_encontrado;
            break;
          default:
            c = ' Error Cod. ' + (d + '');
        }
        'undefined' == typeof r
          ? ((s = 'VideoPlayer_' + (Math.random() + '').substr(2, 9)),
            document.write('<div id="' + s + '"></div>'))
          : (s = r),
          'undefined' != typeof SiguientesVideosPEP._id &&
            '' != SiguientesVideosPEP._id &&
            document.getElementById(SiguientesVideosPEP._id) &&
            ((document.getElementById(SiguientesVideosPEP._id).style.paddingTop = '0px'),
            (document.getElementById(SiguientesVideosPEP._id).style.marginLeft = '0px')),
          (document.getElementById(s).innerHTML =
            versionMovil || MPEP_responsive
              ? '<div class="video_previa video_no_disponible" id="' +
                u +
                '"><div class="fondo_mensaje_video" ><span>' +
                c +
                '</span></div><img src="' +
                t +
                '" style="height:auto;width:100%"/></div>'
              : '<div class="video_previa video_no_disponible" id="' +
                u +
                '"><div class="fondo_mensaje_video" ><span>' +
                c +
                '</span></div><img src="' +
                t +
                '" width="' +
                a +
                '" height="' +
                o +
                '" style="height:' +
                o +
                'px;width:' +
                a +
                'px"/></div>');
      }
      function $___var_07fb1006ce1d2bb9 (e, a, o, t, d, r, n, l) {
        var s;
        'undefined' == typeof r
          ? ((s = 'VideoPlayer_' + (Math.random() + '').substr(2, 9)),
            document.write('<div id="' + s + '"></div>'))
          : (s = r);
        var c = {
            playerEPETParams: {
              mediaWidth: t,
              mediaHeight: d,
              URLMediaFile: a.URLMediaFile,
              URLMediaStill: a.URLMediaStill,
              URLFirstFrame: '',
              compactMode: 'false',
            },
            anchoPlayer: t,
            altoPlayer: d,
            idRefBrightcove: n,
            publiActiva: !1,
            keywordsVideo: '',
            urlNoticia: '',
            tituloVideo: '',
            autoplay: !!('undefined' != typeof l && l) && l,
          },
          u = new EPET_Video(c, s);
      }
      function $___var_936ee90a8d13b03c (e, a, o, t) {
        var d = 'div_' + o;
        document.write('<div id="' + d + '"></div>');
        var r = {
            playerKey: t,
            isVid: 'true',
            isUI: 'true',
            dynamicStreaming: 'true',
            width: e,
            height: a,
            bgcolor: '#000000',
            autoStart: 'false',
            videoSmoothing: 'true',
            forceHTML: 'true',
          },
          n =
            '<html>\n<head><style type="text/css"> body { margin: 0px;}</style>\n<script language="JavaScript" type="text/javascript" src="//admin.brightcove.com/js/BrightcoveExperiences.js"></script>\n<head>\n<body>\n<object id="Video_' +
            o +
            '" class="BrightcoveExperience">\n';
        for (var l in r) n += '<param name="' + l + '" value="' + r[l] + '" />\n';
        (n += '<param name="@videoPlayer" value="' + o + '" />\n'),
          (n += '</object>\n</body>\n</html>\n'),
          EPETCreaIframe('Iframe_' + o, r.width, r.height, 'no', 0, d, n);
      }
      function $___var_5ba52ffe9270dd73 (e) {
        if (-1 == e) return '--:--';
        if (0 == e) return '00:00';
        e = parseInt(e);
        var a = parseInt(e / 3600),
          o = parseInt((e - 3600 * a) / 60),
          t = e - 3600 * a - 60 * o;
        return (
          10 > o && (o = '0' + o),
          10 > t && (t = '0' + t),
          3599 < e ? a + ':' + o + ':' + t : o + ':' + t
        );
      }
      var $___var_e8d42d6f46817c90, $___var_2f694678014b8cd0;
      mouseWheelEvent = $___var_e8d42d6f46817c90;
      factorVolumen = $___var_2f694678014b8cd0;
      /Firefox/i.test(navigator.userAgent)
        ? ((mouseWheelEvent = 'DOMMouseScroll'), (factorVolumen = -1))
        : ((mouseWheelEvent = 'mousewheel'), (factorVolumen = 1));
      function $___var_30fd6dc240e531a0 (e) {
        'undefined' != typeof e.target &&
          'undefined' != typeof e.target.id &&
          'vdpep_audio' == e.target.id &&
          (e.preventDefault(), e.stopPropagation());
      }
      function $___var_f4350df84532baf6 (e, a) {
        for (var o = 0; e; ) (o += e[a]), (e = e.offsetParent);
        return o;
      }
      function $___var_f03edf766f22c5b9 (e) {
        var a = Math.max;
        if (document.documentElement.getBoundingClientRect && e.getBoundingClientRect) {
          var o,
            t = e.getBoundingClientRect();
          return (
            (o = e.ownerDocument ? e.ownerDocument : document),
            [
              t.left + a(o.documentElement.scrollLeft, o.body.scrollLeft),
              t.top + a(o.documentElement.scrollTop, o.body.scrollTop),
            ]
          );
        }
        var d = [e.offsetLeft, e.offsetTop],
          r = e.offsetParent,
          n = isSafari && 'absolute' == e.style.position && e.offsetParent == e.ownerDocument.body;
        if (r != e)
          for (; r; )
            (d[0] += r.offsetLeft),
              (d[1] += r.offsetTop),
              !n && isSafari && 'absolute' == r.style.position && (n = !0),
              (r = r.offsetParent);
        if (
          (n &&
            ((d[0] -= e.ownerDocument.body.offsetLeft), (d[1] -= e.ownerDocument.body.offsetTop)),
          e.parentNode)
        ) {
          r = e.parentNode;
          for (var l = /^body|html$/i; r.tagName && !l.test(r.tagName); )
            r.style.display.search(/^inline|table-row.*$/i) &&
              ((d[0] -= r.scrollLeft), (d[1] -= r.scrollTop)),
              (r = r.parentNode);
        }
        return d;
      }
      function $___var_806b65287798b138 (e) {
        var a = Math.max,
          o = Math.round;
        if (document.documentElement.getBoundingClientRect) {
          var d,
            r,
            n,
            s,
            c,
            u,
            m,
            y,
            _,
            f = !1;
          if ('none' != e.style.display && e.getBoundingClientRect) {
            try {
              n = e.getBoundingClientRect();
            } catch (a) {
              return [0, 0];
            }
            (s = e.ownerDocument),
              (d = a(s.documentElement.scrollLeft, s.body.scrollLeft)),
              (r = a(s.documentElement.scrollTop, s.body.scrollTop)),
              (f = [o(n.left), o(n.top)]),
              isIE &&
                8 > isIE &&
                ((c = 2),
                (u = 2),
                (m = s.compatMode),
                window.getComputedStyle
                  ? ((y = s.documentElement.defaultView.getComputedStyle(s.documentElement, null)
                      .borderLeftWidth),
                    (_ = s.documentElement.defaultView.getComputedStyle(s.documentElement, null)
                      .borderTopWidth))
                  : s.documentElement.currentStyle &&
                    ((y = s.documentElement.clientLeft), (_ = s.documentElement.clientTop)),
                6 == isIE && 'BackCompat' != m && 'CSS1Compat' != m && ((c = 0), (u = 0)),
                ('BackCompat' == m || 'CSS1Compat' == m) &&
                  ('medium' != y && (c = parseInt(y, 10)), 'medium' != _ && (u = parseInt(_, 10))),
                (f[0] -= c),
                (f[1] -= u)),
              (r || d) && ((f[0] += d), (f[1] += r)),
              (f[0] = o(f[0])),
              (f[1] = o(f[1]));
          } else f = [0, 0];
          return f;
        }
        var s,
          v,
          g,
          r,
          d,
          h,
          f = !1,
          M = e;
        if ('none' != e.style.display) {
          for (
            f = [e.offsetLeft, e.offsetTop],
              s = e.ownerDocument,
              v = a(s.documentElement.scrollLeft, s.body.scrollLeft),
              g = a(s.documentElement.scrollTop, s.body.scrollTop),
              h = !!(isGecko || 519 < isSafari);
            (M = M.offsetParent);

          )
            if (((f[0] += M.offsetLeft), (f[1] += M.offsetTop), h)) {
              var E = 0,
                T = 0;
              window.getComputedStyle
                ? ((E =
                    parseInt(
                      M.ownerDocument.defaultView.getComputedStyle(M, null).borderTopWidth,
                      10
                    ) || 0),
                  (T =
                    parseInt(
                      M.ownerDocument.defaultView.getComputedStyle(M, null).borderLeftWidth,
                      10
                    ) || 0))
                : M.currentStyle &&
                  ((E = parseInt(M.clientTop, 10) || 0), (T = parseInt(M.clientLeft, 10) || 0)),
                isGecko && /^t(?:able|d|h)$/i.test(M.tagName) && ((E = 0), (T = 0)),
                (f[0] += T),
                (f[1] += E);
            }
          if ('fixed' != e.style.position) {
            for (M = e; (M = M.parentNode) && M.tagName; )
              (r = M.scrollTop), (d = M.scrollLeft), (r || d) && ((f[0] -= d), (f[1] -= r));
            (f[0] += v), (f[1] += g);
          } else
            isOpera
              ? ((f[0] -= v), (f[1] -= g))
              : (isSafari || isGecko) && ((f[0] += v), (f[1] += g));
          (f[0] = o(f[0])), (f[1] = o(f[1]));
        } else (f[0] = 0), (f[1] = 0);
        return f;
      }
      function $___var_a664eb2f2b542b84 (e) {
        'undefined' != typeof document.documentElement.scrollTop &&
          (document.documentElement.scrollTop = parseInt(e)),
          'undefined' == typeof document.body.scrollTop ||
            isOpera ||
            (document.body.scrollTop = parseInt(e));
      }
      function $___var_024801d8323b0ecb (e, a, o) {
        var t = a;
        '' == t && (t = Math.random());
        window.open(e, a, o);
      }
      function $___var_29ad66333c0ac899 () {
        var e = 0;
        (this.readyState = 0), (this.status = 0), (this.responseText = ''), e++, (this.req_id = e);
      }
      EPETUtils_IFrameRequest.prototype = {
        open: function (e, a) {
          (this.protocol = e), (this.url = a);
        },
        onreadystatechange: function () {},
        send: function (e) {
          var a = this;
          'POST' == this.protocol.toUpperCase() && (this.url = this.url + '&' + e);
          var o = document.createElement('iframe');
          o.setAttribute('id', 'req' + this.req_id),
            o.setAttribute('name', 'req' + this.req_id),
            (o.style.width = '0'),
            (o.style.height = '0'),
            (o.style.border = '0'),
            document.body.appendChild(o);
          try {
            o.src = this.url;
          } catch (a) {
            return !1;
          }
          (this.readyState = 1),
            this.onreadystatechange(),
            setTimeout(function () {
              a.IFht(4);
            }, 4);
        },
        overrideMimeType: function () {},
        getResponseHeader: function () {
          return '';
        },
        setRequestHeader: function () {},
        IFht: function (e) {
          var a = this,
            o = document.getElementById('req' + a.req_id);
          'complete' == o.readyState
            ? ((a.responseText = document.frames['req' + a.req_id].document.body.innerHTML.replace(
                /[\n\r]+/gi,
                ''
              )),
              o.parentNode.removeChild(o),
              (a.status = 200),
              (a.readyState = 4),
              a.onreadystatechange())
            : ((e *= 1.5),
              setTimeout(function () {
                a.IFht(e);
              }, e));
        },
      };
      function $___var_4677c503433fe70d (e, a, o, t) {
        'undefined' == typeof t && (t = 'application/x-www-form-urlencoded');
        var d = EPETUtils_createHttpRequestObj(t);
        d &&
          ((d.onreadystatechange = function () {
            4 != d.readyState || e(d);
          }),
          d.open('POST', a, !0),
          d.setRequestHeader('Content-type', t),
          d.send(o));
      }
      function $___var_629fb4d0e56b4224 (e, a, o) {
        'undefined' == typeof o && (o = 'application/x-www-form-urlencoded');
        var t = EPETUtils_createHttpRequestObj(o);
        t &&
          ((t.onreadystatechange = function () {
            4 != t.readyState || e(t);
          }),
          t.open('GET', a, !0),
          t.setRequestHeader('Content-type', o),
          t.send(null));
      }
      function $___var_2220bcd2a747c10a (e) {
        const $___old_00cb3266e51373e5 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'XMLHttpRequest'
          ),
          $___old_c042d32f459cd8ae = {}.constructor.getOwnPropertyDescriptor(
            window,
            'XMLHttpRequest'
          );
        try {
          if ($___old_00cb3266e51373e5)
            ({}.constructor.defineProperty(
              window,
              'XMLHttpRequest',
              $___stub_13e1f1b8e6056aa8.XMLHttpRequest
            ));
          if ($___old_c042d32f459cd8ae)
            ({}.constructor.defineProperty(
              window,
              'XMLHttpRequest',
              $___stub_13e1f1b8e6056aa8.XMLHttpRequest
            ));
          return function () {
            var a;
            if (window.XMLHttpRequest)
              (a = new XMLHttpRequest()), a.overrideMimeType && e && a.overrideMimeType(e);
            else if (window.ActiveXObject)
              try {
                a = new ActiveXObject('Msxml2.XMLHTTP');
              } catch (o) {
                try {
                  a = new ActiveXObject('Microsoft.XMLHTTP');
                } catch (o) {
                  try {
                    a = new EPETUtils_IFrameRequest();
                  } catch (o) {
                    a = !1;
                  }
                }
              }
            return a;
          }.apply(this, arguments);
        } finally {
          if ($___old_00cb3266e51373e5)
            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_00cb3266e51373e5));
          if ($___old_c042d32f459cd8ae)
            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_c042d32f459cd8ae));
        }
      }
      function $___var_321e7f8710ab41cc (e, a) {
        'undefined' != typeof DTM &&
          'undefined' != typeof DTM.trackEvent &&
          DTM.trackEvent(DTM.events.PHOTOZOOM, { photoURL: a });
      }
      function $___var_297ddac61b7548a2 () {
        var e = parseInt(10000000 * Math.random()),
          a = new Image(1, 1);
        (a.src = '/pxlctl.gif?' + e),
          'function' == typeof launchAjaxOMN &&
            'undefined' != typeof omnEvars &&
            'undefined' != typeof omnInfo &&
            'undefined' != typeof omnEvents &&
            launchAjaxOMN(omnEvars, omnInfo, omnEvents);
      }
      function $___var_432ffd7c66a95532 () {
        var e = parseInt(10000000 * Math.random()),
          a = new Image(1, 1);
        a.src = '/pxlctl.gif?' + e;
      }
      function $___var_82bb534be75fcbd2 (e, a, o, t, d, r, n) {
        var l = document.createElement('iframe');
        l.setAttribute('id', e),
          l.setAttribute('width', a),
          l.setAttribute('height', o),
          l.setAttribute('scrolling', t),
          (l.frameBorder = d),
          (document.getElementById(r).innerHTML = ''),
          document.getElementById(r).appendChild(l),
          (iFrDoc =
            document.getElementById(e).contentWindow.document ||
            document.getElementById(e).contentDocument.document),
          iFrDoc.write(n),
          iFrDoc.close();
      }
      function $___var_19d1ab0a1998b79f (e, a) {
        var o;
        if ('string' == typeof e) {
          if (document.getElementById(e)) o = document.getElementById(e);
          else return !0;
        } else if ('object' == typeof e) o = e;
        else return !0;
        var t = o.className;
        (t += ' ' + a), (o.className = t);
      }
      function $___var_bdb4b6644ea8fd3c (e, a) {
        var o;
        if ('string' == typeof e) {
          if (document.getElementById(e)) o = document.getElementById(e);
          else return !0;
        } else if ('object' == typeof e) o = e;
        else return !0;
        var t = o.className,
          d = new RegExp('\\s*' + a + '(\\s|$)', 'g');
        (t = t.replace(d, ' ')), (o.className = t);
      }
      function $___var_fdb29c60461da37d () {
        isGecko && (document.body.style.MozUserSelect = 'none'),
          isSafari && (document.body.style.KhtmlUserSelect = 'none'),
          isIE && (document.body.unselectable = 'on'),
          (document.body.style.userSelect = 'none');
      }
      function $___var_5def19cec3f38585 () {
        isGecko && (document.body.style.MozUserSelect = 'text'),
          isSafari && (document.body.style.KhtmlUserSelect = 'text'),
          isIE && (document.body.unselectable = 'off'),
          (document.body.style.userSelect = 'text');
      }
      function $___var_9aeba34f382b0bed (e) {
        return (e = encodeURIComponent(e)), e.replace(/'/g, '%27');
      }
      function $___var_33e720f416e6d2e5 () {
        EPETUtils_makeHttpRequestGet(
          function () {
            return !0;
          },
          '/notificarelacionadas',
          ''
        );
      }
      function $___var_fe5174ebc6a25e00 () {
        return 'undefined' != typeof document.documentElement.scrollTop &&
          document.documentElement.scrollTop
          ? document.documentElement.scrollTop
          : 'undefined' == typeof window.pageYOffset
          ? 0
          : window.pageYOffset;
      }
      function $___var_13db98cf359b8dbf () {
        var e = 0,
          a = 0;
        return (
          'undefined' == typeof window.innerWidth
            ? 'undefined' != typeof document.documentElement &&
              'undefined' != typeof document.documentElement.clientWidth &&
              0 != document.documentElement.clientWidth
              ? ((e = document.documentElement.clientWidth),
                (a = document.documentElement.clientHeight))
              : ((e = document.getElementsByTagName('body')[0].clientWidth),
                (a = document.getElementsByTagName('body')[0].clientHeight))
            : ((e = window.innerWidth), (a = window.innerHeight)),
          dispositivoMovil &&
            'undefined' != typeof document.documentElement &&
            'undefined' != typeof document.documentElement.clientWidth &&
            0 != document.documentElement.clientWidth &&
            ((e = document.documentElement.clientWidth),
            (a = document.documentElement.clientHeight)),
          { ancho: e, alto: a }
        );
      }
      function $___var_6c6bc01e4ca97ffa (e, a, o, t) {
        document.getElementById(e) && (document.getElementById(e).style.display = a),
          document.getElementById(o) && (document.getElementById(o).style.display = t);
      }
      function $___var_0738e9b753fb8e9c (e) {
        var a;
        window.event ? (a = window.event.keyCode) : e && (a = e.which),
          27 == a && cerrarTelonMultimedia();
      }
      function $___var_2ee57475df3039dd (a) {
        27 == a.keyCode && cerrarTelonMultimedia();
      }
      var $___var_db601ab88bd8c9bf =
          '<img id="imagen_contenedor" src="/t.gif" width="" height="" alt="' +
          LANG_MSG[LANG].foto +
          '"/><p id="pie_contenedor" class="figcaption estirar"></p>',
        $___var_2ffa694347cdd6c9 =
          '<div id="flotante_foto" class="flotante_foto">\n        <div class="contenedor_foto estirar">\n            <a title="' +
          LANG_MSG[LANG].cerrar +
          '" href="javascript:void(0);" id="id_cerrar_arriba" class="cerrar" onClick="javascript:cerrarTelonMultimedia()">' +
          LANG_MSG[LANG].cerrar +
          '</a>\n\t\t\t <a id="ampliar" style="display:none" class="boton ampliar" href="javascript:void(0);">' +
          LANG_MSG[LANG].tamanio_real +
          '</a>\n            <div id="contenedor_central_telon" class="foto figure">' +
          htmlCapaCentral +
          '</div>        </div>\n</div>\n',
        $___var_240d071c9929dd56 = !1;
      htmlCapaCentral = $___var_db601ab88bd8c9bf;
      htmlCapaFlotante = $___var_2ffa694347cdd6c9;
      fotoTamanioReal = $___var_240d071c9929dd56;
      function $___var_6e57c7876e1c0d5e (a) {
        if (!a) var a = window.event;
        (a.cancelBubble = !0), a.stopPropagation && a.stopPropagation();
      }
      function $___var_ed140d4fb81b5ec0 () {
        document.getElementById('id_telon') &&
          document
            .getElementById('id_telon')
            .parentNode.removeChild(document.getElementById('id_telon')),
          document.getElementById('id_contenedorCapaFlotante') &&
            document
              .getElementById('id_contenedorCapaFlotante')
              .parentNode.removeChild(document.getElementById('id_contenedorCapaFlotante'));
        var e = document.createElement('div');
        (e.id = 'id_telon'),
          (e.style.display = 'none'),
          (e.className = 'telon'),
          (e.onclick = function () {
            cerrarTelonMultimedia();
          }),
          document.body.appendChild(e);
        var a = document.createElement('div');
        (a.id = 'id_contenedorCapaFlotante'),
          (a.style.top = '0px'),
          (a.style.left = '0px'),
          (a.style.display = 'none'),
          (a.className = 'contenedor_capa_flotante'),
          (a.onclick = function () {
            cerrarTelonMultimedia();
          }),
          (a.innerHTML = htmlCapaFlotante),
          document.body.appendChild(a);
      }
      function $___var_e89bf6152f73008a () {
        if ('none' != document.getElementById('id_telon').style.display) {
          EPETalternacampos('id_telon', 'none', 'id_contenedorCapaFlotante', 'none');
          var e = document.getElementById('contenedor_central_telon');
          e && (e.innerHTML = htmlCapaCentral),
            window.addEventListener
              ? window.removeEventListener('keydown', teclaTelonEvent, !0)
              : (document.onkeydown = null);
        }
      }
      function $___var_a21af75a5ab61eba (e, a, o, t, d) {
        var r = document.getElementById('contenedor_central_telon');
        r || crearTelonMultimedia(),
          setTimeout(function () {
            if (0 < o && 0 < t)
              setTimeout(function () {
                ampliaFotoCallback(e, a, o, t, d);
              }, 100);
            else {
              var r = document.createElement('div');
              (r.style.width = '0px'),
                (r.style.height = '0px'),
                (r.style.overflow = 'hidden'),
                document.body.appendChild(r);
              var n = document.createElement('img');
              (n.onload = function () {
                ampliaFotoCallback(
                  e,
                  a,
                  this.naturalWidth == null ? this.offsetWidth : this.naturalWidth,
                  this.naturalHeight == null ? this.offsetHeight : this.naturalHeight,
                  d
                ),
                  r.parentNode.removeChild(r);
              }),
                n.setAttribute('src', a + '?' + Math.random()),
                r.appendChild(n);
            }
          }, 100);
      }
      function $___var_dccb956af2af97fb (e, a, o, t, d) {
        var r = Math.round,
          n = document.getElementById('id_telon'),
          l = document.getElementById('id_contenedorCapaFlotante');
        (document.getElementById('ampliar').className = 'boton ampliar'),
          (document.getElementById('ampliar').innerHTML = LANG_MSG[LANG].tamanio_real),
          (fotoTamanioReal = !1);
        var s = 0;
        if (null != n && null != l) {
          if (
            ((d = d.replace(/&amp;/gm, '&')),
            (d = d.replace(/&lt;/gm, '<')),
            (d = d.replace(/&gt;/gm, '>')),
            (document.getElementById('pie_contenedor').onclick = bloqueaClick),
            (document.getElementById('pie_contenedor').innerHTML = d),
            EPETalternacampos('id_telon', 'block', 'id_contenedorCapaFlotante', 'block'),
            dispositivoMovil)
          ) {
            var c = document.body.scrollHeight;
            (n.style.position = 'absolute'),
              (n.style.height = c + 'px'),
              (n.style.width = dimensionesPEP.ancho + 'px'),
              (l.style.position = 'absolute');
          } else (l.style.position = 'fixed'), (n.style.position = 'fixed');
          s = document.getElementById('pie_contenedor').offsetHeight;
          var u = EPETgetVScrollPosition(),
            m = parseInt(t) + parseInt(s) + 60;
          if (m <= dimensionesPEP.alto)
            (document.getElementById('ampliar').style.display = 'none'),
              (l.style.top = dispositivoMovil
                ? r(u + (dimensionesPEP.alto - m) / 2) + 'px'
                : r(dimensionesPEP.alto / 2 - m / 2) + 'px'),
              (l.style.left = '0px'),
              (document.getElementById('imagen_contenedor').style.height = t + 'px'),
              (document.getElementById('imagen_contenedor').style.width = o + 'px'),
              (document.getElementById('flotante_foto').style.width = parseInt(o) + 20 + 'px');
          else {
            (l.style.top = dispositivoMovil ? u + 'px' : '0px'), (s = 55);
            var y = dimensionesPEP.alto - parseInt(s) - 60,
              _ = r((y * o) / t);
            (document.getElementById('imagen_contenedor').style.height = y + 'px'),
              (document.getElementById('imagen_contenedor').style.width = _ + 'px'),
              (document.getElementById('flotante_foto').style.width = _ + 20 + 'px'),
              (document.getElementById('ampliar').style.display = 'block'),
              (document.getElementById('ampliar').onclick = function (a) {
                bloqueaClick(a),
                  fotoTamanioReal
                    ? ((document.getElementById('ampliar').className = 'boton ampliar'),
                      (document.getElementById('ampliar').innerHTML = LANG_MSG[LANG].tamanio_real),
                      dispositivoMovil
                        ? ((l.style.position = 'absolute'), (l.style.top = u + 'px'))
                        : ((l.style.position = 'fixed'), (l.style.top = '0px')),
                      (document.getElementById('imagen_contenedor').style.height =
                        dimensionesPEP.alto - parseInt(s) - 60 + 'px'),
                      (document.getElementById('imagen_contenedor').style.width = _ + 'px'),
                      (document.getElementById('flotante_foto').style.width = _ + 20 + 'px'))
                    : ((document.getElementById('ampliar').className = 'boton reducir'),
                      (document.getElementById('ampliar').innerHTML =
                        LANG_MSG[LANG].tamanio_ventana),
                      (l.style.position = 'absolute'),
                      (l.style.top = u + 'px'),
                      (document.getElementById('flotante_foto').style.width =
                        parseInt(o) + 20 + 'px'),
                      (document.getElementById('imagen_contenedor').style.width = o + 'px'),
                      (document.getElementById('imagen_contenedor').style.height = t + 'px')),
                  (fotoTamanioReal = !fotoTamanioReal);
              });
          }
          (document.getElementById('imagen_contenedor').onclick = bloqueaClick),
            (document.getElementById('imagen_contenedor').src = a),
            window.addEventListener
              ? window.addEventListener('keydown', teclaTelonEvent, !0)
              : (document.onkeydown = teclaPulsada),
            marcadoAmpliaFoto(
              document.getElementsByTagName('title')[0]
                ? document.getElementsByTagName('title')[0].innerHTML
                : '',
              a
            );
        }
      }
      function $___var_0e86f142d4365304 (e, a, o, t) {
        var d = e,
          r = '',
          n = '';
        if (a.perfilesUsuarios && a.perfilesUsuarios[e]) {
          a = a.perfilesUsuarios[e];
          var l = a.nombre,
            s = a.apellidos,
            r = a.descripcion,
            n = a.pathfoto;
          '' == s ? '' != l && (d = l) : (d = s + ', ' + l);
        }
        var c = '';
        (c += '<div class="encabezado estirar">'),
          (c =
            c +
            '<a onclick="javascript:document.getElementById(\'' +
            o +
            "').style.display='none';\" title=\"" +
            LANG_MSG[LANG].cerrar +
            '" class="autor" href="javascript:void(0);">' +
            d +
            '</a>'),
          (c =
            c +
            '<a title="' +
            LANG_MSG[LANG].ver_perfil_completo +
            '" href="//eskup.elpais.com/' +
            e +
            '" target="_blank">' +
            LANG_MSG[LANG].ver_perfil_eskup +
            ' &raquo;</a>'),
          (c =
            c +
            '<a onclick="javascript:document.getElementById(\'' +
            o +
            "').style.display='none';\" title=\"" +
            LANG_MSG[LANG].cerrar +
            '" class="cerrar" href="javascript:void(0);"></a>'),
          (c += '</div><!-- === .encabezado === -->'),
          (c += '<div class="contenido estirar">'),
          '' != n &&
            (c =
              c +
              '<div class="foto"><img width="100" height="100" src="' +
              n +
              '" alt="' +
              LANG_MSG[LANG].avatar +
              '"></div><!-- === .foto === -->'),
          (c = c + '<p>' + r + '</p>'),
          (c += '</div><!-- === .contenido === -->');
        var u = t.offsetLeft,
          m = t.offsetTop;
        0 > m && (m = 0);
        var y = document.getElementById(o);
        (y.innerHTML = c),
          (y.style.display = 'block'),
          (y.style.top = m + 'px'),
          (y.style.left = u + 'px');
      }
      function $___var_f5031262ba9c215f (nick, idDiv, boton) {
        var urlEskup = '/Profileeskup',
          date_actual = new Date(),
          ts_actual = date_actual.getTime(),
          cadena_params = 'action=info_usuarios&user=' + nick;
        (cadena_params += '&ts=' + parseInt(ts_actual)),
          EPETUtils_makeHttpRequestGet(function (httpRequest) {
            if (200 != httpRequest.status) {
              var hashDatos = {};
              f_pinta_datos(nick, hashDatos, idDiv, boton);
            } else {
              var hashDatos = [],
                data = httpRequest.responseText;
              eval('_hashDatos = ' + data), f_pinta_datos(nick, _hashDatos, idDiv, boton);
            }
          }, '/Profileeskup?' + cadena_params);
      }
      function $___var_b7d2b1a49f0c0c8c (e, a, o, t) {
        window.event
          ? ((tecla = e.keyCode), (src = e.srcElement))
          : e.which && ((tecla = e.which), (src = e.target)),
          13 == tecla && f_iniciar_sesion(a, o, t);
      }
      function $___var_afb6f5c6205f40fc (e, a, o) {
        var t = document.getElementById(a),
          d = document.getElementById(o);
        if ('' == t.value || '' == d.value) return alert(LANG_MSG[LANG].teclear_usuario), !1;
        var r = t.value;
        if (r.match(/(\w*)@(\w+)/)) {
          var n = document.getElementById(e);
          n.submit();
        } else return alert(LANG_MSG[LANG].error_correo), !1;
      }
      function $___var_90f1669289e77406 (e) {
        var a = e.replace(/[^a-z0-9_ñÑáÁéÉíÍóÓúÚüÜ]/g, '');
        return a;
      }
      function $___var_6efe1703fe56c81c (e) {
        var a = e.replace(/[';"]/g, '');
        return a;
      }
      function $___var_b46508143b0af677 (e) {
        var a = e.replace(/[<>"=]/g, '');
        return a;
      }
      var $___var_9a9c33e818578908 = JSON || {};
      JSON = $___var_9a9c33e818578908;
      if (
        ((JSON.stringify =
          JSON.stringify ||
          function (e) {
            var a = typeof e;
            if ('object' != a || null === e) return 'string' == a && (e = '"' + e + '"'), e + '';
            var o,
              d,
              r = [],
              l = e && e.constructor == Array;
            for (o in e)
              (d = e[o]),
                (a = typeof d),
                'string' == a
                  ? (d = '"' + d + '"')
                  : 'object' == a && null !== d && (d = JSON.stringify(d)),
                r.push((l ? '' : '"' + o + '":') + (d + ''));
            return (l ? '[' : '{') + '' + (l ? ']' : '}');
          }),
        (JSON.parse =
          JSON.parse ||
          function (str) {
            return '' === str && (str = '""'), eval('var p=' + str + ';'), p;
          }),
        'function' != typeof launchAjaxOMN)
      )
        try {
          'undefined' != typeof parent &&
            'function' == typeof parent.launchAjaxOMN &&
            (launchAjaxOMN = parent.launchAjaxOMN);
        } catch (e) {}
      function $___var_b82cf74bf79e47b1 (e, a, o) {
        if (o && 'undefined' == typeof Hls) {
          var t = document.createElement('script');
          (t.type = 'text/javascript'),
            (t.src = '//ep02.epimg.net/js/hls/hls.js'),
            document.getElementsByTagName('head')[0].appendChild(t);
        }
        var d = document.getElementsByTagName('head')[0],
          r = document.createElement('link');
        if (((r.type = 'text/css'), (r.rel = 'stylesheet'), (r.href = e), r.addEventListener))
          r.addEventListener('load', a, !1);
        else if (r.onload) r.onload = a;
        else if (isIE)
          r.onreadystatechange = function () {
            var e = r.readyState;
            ('loaded' === e || 'complete' === e) && (a(), (r.onreadystatechange = null));
          };
        else
          var n = document.styleSheets.length,
            l = setInterval(function () {
              document.styleSheets.length > n && (a(), clearInterval(l));
            }, 30);
        d.appendChild(r);
      }
      var $___var_3eacf9d4cbe5578e = {
        _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        encode: function (d) {
          var l,
            c,
            m,
            y,
            _,
            v,
            g,
            h = '',
            M = 0;
          for (d = Base64._utf8_encode(d); M < d.length; )
            (l = d.charCodeAt(M++)),
              (c = d.charCodeAt(M++)),
              (m = d.charCodeAt(M++)),
              (y = l >> 2),
              (_ = ((3 & l) << 4) | (c >> 4)),
              (v = ((15 & c) << 2) | (m >> 6)),
              (g = 63 & m),
              isNaN(c) ? (v = g = 64) : isNaN(m) && (g = 64),
              (h =
                h +
                this._keyStr.charAt(y) +
                this._keyStr.charAt(_) +
                this._keyStr.charAt(v) +
                this._keyStr.charAt(g));
          return h;
        },
        decode: function (d) {
          var c,
            m,
            y,
            _,
            v,
            g,
            h,
            l = String.fromCharCode,
            M = '',
            E = 0;
          for (d = d.replace(/[^A-Za-z0-9\+\/\=]/g, ''); E < d.length; )
            (_ = this._keyStr.indexOf(d.charAt(E++))),
              (v = this._keyStr.indexOf(d.charAt(E++))),
              (g = this._keyStr.indexOf(d.charAt(E++))),
              (h = this._keyStr.indexOf(d.charAt(E++))),
              (c = (_ << 2) | (v >> 4)),
              (m = ((15 & v) << 4) | (g >> 2)),
              (y = ((3 & g) << 6) | h),
              (M += l(c)),
              64 != g && (M += l(m)),
              64 != h && (M += l(y));
          return (M = Base64._utf8_decode(M)), M;
        },
        _utf8_encode: function (a) {
          var o = String.fromCharCode;
          a = a.replace(/\r\n/g, '\n');
          for (var d, l = '', s = 0; s < a.length; s++)
            (d = a.charCodeAt(s)),
              128 > d
                ? (l += o(d))
                : 127 < d && 2048 > d
                ? ((l += o(192 | (d >> 6))), (l += o(128 | (63 & d))))
                : ((l += o(224 | (d >> 12))),
                  (l += o(128 | (63 & (d >> 6)))),
                  (l += o(128 | (63 & d))));
          return l;
        },
        _utf8_decode: function (a) {
          for (var e = String.fromCharCode, o = '', d = 0, l = (c1 = c2 = 0); d < a.length; )
            (l = a.charCodeAt(d)),
              128 > l
                ? ((o += e(l)), d++)
                : 191 < l && 224 > l
                ? ((c2 = a.charCodeAt(d + 1)), (o += e(((31 & l) << 6) | (63 & c2))), (d += 2))
                : ((c2 = a.charCodeAt(d + 1)),
                  (c3 = a.charCodeAt(d + 2)),
                  (o += e(((15 & l) << 12) | ((63 & c2) << 6) | (63 & c3))),
                  (d += 3));
          return o;
        },
      };
      Base64 = $___var_3eacf9d4cbe5578e;
      function $___var_06a86f8b4ab8bdab (e, a) {
        var o = document.getElementById(e);
        o && (o.innerHTML = a);
      }
      function $___var_7cfc327021a712b8 (e, a, o) {
        var t = Math.floor,
          d = document.getElementById(e);
        if (d) {
          if (o) {
            var r,
              n,
              l,
              s,
              c,
              u = /width=["']?(\d+)["']?/i,
              m = /height=["']?(\d+)["']?/i,
              y = u.exec(a);
            y &&
              ((r = y[1]),
              (c = m.exec(a)),
              (n = c ? c[1] : t((9 * r) / 16)),
              (s = t((d.offsetWidth * n) / r)),
              (l = d.offsetWidth),
              (a = a.replace(/width=(['"]?)\d+(['"]?)/gi, 'width=$1' + l + '$2')),
              (a = a.replace(/height=(['"]?)\d+(['"]?)/gi, 'height=$1' + s + '$2')),
              (a = a.replace(/w=\d+/gi, 'w=' + l)),
              (a = a.replace(/h=\d+/gi, 'h=' + s)));
          }
          d.innerHTML = a;
        }
      }
      function $___var_1601a4b3252cd93b (e, a) {
        var o;
        switch (
          ('undefined' == typeof a
            ? ((o = 'multimediaPlayer_' + (Math.random() + '').substr(2, 9)),
              document.write('<div id="' + o + '"></div>'))
            : (o = a),
          'undefined' == typeof e.urls && (e.urls = []),
          (e.url_cache = url_cache),
          (e.id_cuenta_mediateca_PEP = id_cuenta_mediateca_PEP),
          (e.id_player_mediateca_PEP = id_player_mediateca_PEP),
          e.un_creacion &&
            e.portal_creacion &&
            e.seccion_creacion &&
            !0 &&
            (e.un_creacion != UN &&
              'undefined' != typeof videoDataLayerMPEP[e.un_creacion] &&
              ((e.url_cache = videoDataLayerMPEP[e.un_creacion].url_cache),
              e.urlNoticia &&
                0 != e.urlNoticia.indexOf('http') &&
                '//' != e.urlNoticia.substr(0, 2) &&
                (e.urlNoticia = videoDataLayerMPEP[e.un_creacion].server_name + e.urlNoticia),
              (e.id_cuenta_mediateca_PEP =
                videoDataLayerMPEP[e.un_creacion].id_cuenta_mediateca_PEP),
              (e.id_player_mediateca_PEP =
                videoDataLayerMPEP[e.un_creacion].id_player_mediateca_PEP)),
            'elpais' == e.portal_creacion ||
            'ccaa' == e.portal_creacion ||
            'epv' == e.portal_creacion
              ? 'undefined' !=
                  typeof videoDataLayerMPEP[
                    e.un_creacion + '-' + e.portal_creacion + '-' + e.seccion_creacion
                  ] &&
                ((e.url_cache =
                  videoDataLayerMPEP[
                    e.un_creacion + '-' + e.portal_creacion + '-' + e.seccion_creacion
                  ].url_cache),
                e.urlNoticia &&
                  0 != e.urlNoticia.indexOf('http') &&
                  '//' != e.urlNoticia.substr(0, 2) &&
                  (e.urlNoticia =
                    videoDataLayerMPEP[
                      e.un_creacion + '-' + e.portal_creacion + '-' + e.seccion_creacion
                    ].server_name + e.urlNoticia),
                (e.id_cuenta_mediateca_PEP =
                  videoDataLayerMPEP[
                    e.un_creacion + '-' + e.portal_creacion + '-' + e.seccion_creacion
                  ].id_cuenta_mediateca_PEP),
                (e.id_player_mediateca_PEP =
                  videoDataLayerMPEP[
                    e.un_creacion + '-' + e.portal_creacion + '-' + e.seccion_creacion
                  ].id_player_mediateca_PEP))
              : 'undefined' !=
                  typeof videoDataLayerMPEP[e.un_creacion + '-' + e.portal_creacion] &&
                ((e.url_cache =
                  videoDataLayerMPEP[e.un_creacion + '-' + e.portal_creacion].url_cache),
                e.urlNoticia &&
                  0 != e.urlNoticia.indexOf('http') &&
                  '//' != e.urlNoticia.substr(0, 2) &&
                  (e.urlNoticia =
                    videoDataLayerMPEP[e.un_creacion + '-' + e.portal_creacion].server_name +
                    e.urlNoticia),
                (e.id_cuenta_mediateca_PEP =
                  videoDataLayerMPEP[
                    e.un_creacion + '-' + e.portal_creacion
                  ].id_cuenta_mediateca_PEP),
                (e.id_player_mediateca_PEP =
                  videoDataLayerMPEP[
                    e.un_creacion + '-' + e.portal_creacion
                  ].id_player_mediateca_PEP))),
          e.tipo)
        ) {
          case 'video':
            0 == e.caratula.indexOf('/') &&
              '//' != e.caratula.substr(0, 2) &&
              (e.caratula = e.url_cache + e.caratula),
              (e.poster = e.caratula),
              e.id_referencia && (e.idRefBrightcove = e.id_referencia),
              e.keywords && (e.keywordsVideo = e.keywords),
              'undefined' == typeof e.id_referencia &&
                e.id_multimedia &&
                -1 == e.id_multimedia.indexOf('_') &&
                (e.id_video = e.id_multimedia),
              'undefined' == typeof e.playerEPETParams
                ? (e.playerEPETParams = { URLMediaStill: e.poster })
                : (e.playerEPETParams.URLMediaStill = e.poster),
              -1 < document.location.href.indexOf('autoplay=1') &&
                !reproduciendo &&
                ((reproduciendo = !0), (e.autoplay = !0)),
              setTimeout(function () {
                new EPET_Video(e, o);
              }, 300);
            break;
          case 'externo':
          case 'iframe':
            if (
              ('undefined' != typeof e.urls && 'undefined' != typeof e.urls[0]) ||
              'undefined' != typeof e.codigo
            ) {
              var t;
              if (((t = 'iframe' == e.tipo ? e.codigo : e.urls[0]), 'm3u8' == t.substr(-4, 4)))
                return void (document.getElementById(o).className = 'MPEP_video_vacio');
              document.getElementById(o).className = 'MPEP_video_externo';
              var d = /src=["']?([^"']+)["']?/i,
                r = d.exec(t);
              if (0 == t.indexOf('http') || r) {
                var n,
                  l = 9 / 16;
                if (r) {
                  var s = /width=["']?([\d\%]+)["']?/i,
                    c = /height=["']?([\d\%]+)["']?/i,
                    u = s.exec(t),
                    m = c.exec(t);
                  u && m && u[1].match(/^\d+$/) && m[1].match(/^\d+$/) && (l = m[1] / u[1]),
                    (n = r[1]);
                } else n = arreglaUrl(t);
                var y = document.createElement('iframe');
                (y.width = '100%'),
                  (y.height = '100%'),
                  y.setAttribute('frameBorder', '0'),
                  y.setAttribute('scrolling', 'no'),
                  y.setAttribute('webkitallowfullscreen', ''),
                  y.setAttribute('mozallowfullscreen', ''),
                  y.setAttribute('allowfullscreen', ''),
                  (y.style.position = 'absolute'),
                  -1 < document.location.href.indexOf('autoplay=1') &&
                    !reproduciendo &&
                    ((reproduciendo = !0), (e.autoplay = !0)),
                  e.autoplay &&
                    (n.match(/muzu/i)
                      ? ((n = n.replace(/&(amp;)?autostart=n/, '')), (n += '&autostart=y'))
                      : n.match(/youtu/i) && (n += '?autoplay=1')),
                  n.match(/youtu/i) &&
                    (-1 < n.indexOf('?')
                      ? (n += '&wmode=transparent')
                      : (n += '?wmode=transparent')),
                  (document.getElementById(o).style.position = 'relative'),
                  (document.getElementById(o).style.width = '100%'),
                  (document.getElementById(o).style.height = '100%'),
                  (document.getElementById(o).style.paddingBottom = 100 * l + '%'),
                  document.getElementById(o).appendChild(y),
                  (y.src = n);
              } else document.getElementById(o).parentNode.innerHTML = t;
            }
            break;
          case tipo_player_mediateca_PEP:
          case 'mediateca_audio':
            'undefined' != typeof e.class && (document.getElementById(o).className = e.class);
            var _ = 'video';
            'mediateca_audio' == e.tipo &&
              ((_ = 'audio'),
              (e.id_cuenta_mediateca_PEP = id_cuenta_mediateca_PEP_audio),
              (e.id_player_mediateca_PEP = id_player_mediateca_PEP_audio)),
              0 == e.caratula.indexOf('/') &&
                '//' != e.caratula.substr(0, 2) &&
                (e.caratula = e.url_cache + e.caratula),
              -1 < document.location.href.indexOf('autoplay=1') && !reproduciendo
                ? ((reproduciendo = !0), (e.autoplay = !0))
                : 'undefined' == typeof e.autoplay && (e.autoplay = !1);
            var f = /http.?:\/\/([^\/]*)\/([^\/]*)\/(\d+)\/(\d+)\/(\d+)\/([^\/]*)\/.*\.html/i;
            'undefined' == typeof e.urlNoticia || f.exec(document.location.href)
              ? (e.urlNoticia = '')
              : (e.urlNoticia += '?autoplay=1'),
              'undefined' == typeof e.caratula && (e.caratula = ''),
              'undefined' == typeof e.publiActiva && (e.publiActiva = !1),
              'undefined' == typeof e.keywordsVideo && (e.keywordsVideo = '');
            var v = [];
            'undefined' != typeof listado_id_tags &&
              'undefined' != typeof listado_norm_tags &&
              (v = tagsStrToJson(listado_id_tags, listado_norm_tags));
            var g = {
              id_container: o,
              id_cuenta: e.id_cuenta_mediateca_PEP,
              id_player: e.id_player_mediateca_PEP,
              id_media: e.id_multimedia,
              media_type: _,
              keywords: e.keywordsVideo,
              topPlayer: {
                media: {
                  autoplay: e.autoplay,
                  ancho: e.anchoPlayer,
                  alto: e.altoPlayer,
                  tags_noticia_array: v,
                },
                ad: {
                  enabled: e.publiActiva,
                  tags_noticia:
                    'undefined' == typeof listado_norm_tags
                      ? 'undefined' == typeof listadoKW
                        ? ''
                        : listadoKW
                      : listado_norm_tags,
                },
              },
              dev: !1,
            };
            if (
              (e.flotante &&
                (e.autoplay
                  ? (g.plugins = [{ type: 'FloatingPlayerWidget' }])
                  : (g.plugins = [
                      { type: 'FloatingPlayerWidget', conf: { force_on_viewport: !0 } },
                    ])),
              e.muted && (g.topPlayer.media.premuted = !0),
              e.playList)
            )
              if ('undefined' != typeof e.idsPlayList) {
                var h = e.idsPlayList,
                  M = 'contenedor_playlist_' + o;
                document.getElementById(M)
                  ? (document.getElementById(M).className = 'mm_AudioPlayer_lista')
                  : (document.write('<div id="' + M + '"></div>'),
                    (document.getElementById(M).className = 'mm_AudioPlayer_lista'));
                var E = {
                  URL_list:
                    'https://fapi-top.prisasd.com/api/v2/search/' +
                    e.id_cuenta_mediateca_PEP +
                    '/' +
                    _ +
                    '/idrefs?idrefs=' +
                    h,
                  id_cuenta: e.id_cuenta_mediateca_PEP,
                  id_container_playlist: M,
                  skin: 'lista',
                  skinPlaylist: 'lista',
                  playListSkin: 'eppodcast',
                  autoNext: !0,
                };
                g.playList = E;
              } else if ('undefined' != typeof e.id_playlist) {
                var T = e.id_playlist,
                  M = 'contenedor_playlist_' + o;
                document.getElementById(M)
                  ? (document.getElementById(M).className = 'mm_AudioPlayer_lista')
                  : (document.write('<div id="' + M + '"></div>'),
                    (document.getElementById(M).className = 'mm_AudioPlayer_lista'));
                var b =
                    'https://fapi-top.prisasd.com/api/v2/search/' +
                    e.id_cuenta_mediateca_PEP +
                    '/' +
                    _ +
                    '/tags?tags=m(' +
                    T +
                    ')&orderBy=publication_date_start|desc&size=10',
                  E = {
                    URL_list: b,
                    id_cuenta: e.id_cuenta_mediateca_PEP,
                    id_container_playlist: M,
                    skin: 'lista',
                    skinPlaylist: 'lista',
                    playListSkin: 'eppodcast',
                    autoNext: !0,
                  };
                g.playList = E;
              }
            e.un_creacion &&
              e.portal_creacion &&
              e.seccion_creacion &&
              ((g.topPlayer.media.un_creacion = e.un_creacion),
              (g.topPlayer.media.portal_creacion = e.portal_creacion),
              (g.topPlayer.media.seccion_creacion = e.seccion_creacion));
            var L = !1;
            e.comprobar_existencia_video && (L = e.comprobar_existencia_video);
            var P = {};
            'undefined' != typeof e.un_creacion &&
              ('dias5' == e.un_creacion || 'retina' == e.un_creacion) &&
              'undefined' != typeof e.duracionVideo &&
              '0' != e.duracionVideo &&
              (P = {
                tiempo: {
                  HTMLelement: 'span',
                  ClassName: 'articulo-minutos',
                  value: '<span>' + tiempoBonito(parseInt(e.duracionVideo / 1000)) + '</span>',
                },
              }),
              mediateca ||
                (mediateca =
                  ('undefined' != typeof psd &&
                    'undefined' != typeof psd.media &&
                    'undefined' != typeof psd.media.TopEmbed) ||
                  null);
            var V = [e.caratula, e.urlNoticia, P, L];
            mediateca
              ? ((g.managerOpt = V), new psd.media.TopEmbed(g))
              : videosMediateca.push({ datosTOP: g, params: V });
            break;
          default:
        }
      }
      function $___var_37eca6c8fe1ee706 (httpRequest, _url_feed, datosMultimedia) {
        if (200 != httpRequest.status) ids = '';
        else {
          var hashDatos = [],
            data = httpRequest.responseText;
          eval('_hashDatos = ' + data);
          var _datosMultimedia = eval(datosMultimedia);
          for (ids = '', i = 0; i < _hashDatos.items.length; i++) {
            var dataAudios = _hashDatos.items[i],
              id_principal = '';
            if (
              (dataAudios.audios &&
                ((id_principal = dataAudios.audios.news.audio1.idBC),
                '' != ids && (ids += ','),
                (ids += id_principal)),
              dataAudios.summaries)
            )
              for (j = 0; j < dataAudios.summaries.length; j++) {
                var dataSumario = dataAudios.summaries[j];
                dataSumario.idBC &&
                  ((id_sumario = dataSumario.idBC),
                  '' != ids && (ids += ','),
                  (ids += id_sumario));
              }
          }
          var id1 = _datosMultimedia.id_multimedia;
          '' != ids && (_datosMultimedia.idsPlayList = ids);
        }
        var id_div_ReproductorMultimedia = 'multimediaPlayer_' + _datosMultimedia.id_multimedia;
        reproductorMultimedia(_datosMultimedia, id_div_ReproductorMultimedia);
      }
      function $___var_27080c82f407311b (e, a, o) {
        var t = { elpais: { actualidad: '/elpais/rss/elpais-f03.js' } },
          d = e.id_multimedia,
          r = '';
        if (
          ('undefined' == typeof e.idsPlayList
            ? 'undefined' == typeof e.id_playlist
              ? 'undefined' == typeof e.url_feed_playlist
                ? 'undefined' != typeof t[a] &&
                  'undefined' != typeof t[a][o] &&
                  (r = 'https://elpais.com' + t[a][o])
                : (r = e.url_feed_playlist)
              : ((r = ''), (_id_playlist = e.id_playlist))
            : (r = ''),
          '' != r)
        ) {
          var n = 'multimediaPlayer_' + e.id_multimedia;
          document.write('<div id="' + n + '"></div>');
          document.write('<div id="' + ('contenedor_playlist_' + n) + '"></div>'),
            EPETUtils_makeHttpRequestGet(function (a) {
              procesarAudiosFeed(a, r, e);
            }, r);
        } else reproductorMultimedia(e);
      }
      function $___var_3f46d59053a681a4 (e, a) {
        if (document.getElementById(e)) {
          var o = document.getElementById(e);
          if (o.getElementsByTagName('a')) {
            var t = o.getElementsByTagName('a');
            for (var d in t) {
              var r = t[d];
              if ('object' == typeof r && r.getAttribute('href')) {
                var n = r.getAttribute('href');
                if ('java' != n.substring(0, 4)) {
                  var l = '';
                  (l = -1 < n.indexOf('?') ? n + '&' + a : n + '?' + a), r.setAttribute('href', l);
                }
              }
            }
          }
        }
      }
      (widgetInstagram = function () {
        var e,
          a,
          o,
          t,
          d,
          r = null;
        (ul_css = function () {
          var a = { width: e };
          return a;
        }),
          (li_css = function () {
            var e = { width: 'calc(100%/' + r.col + ')' };
            return e;
          }),
          (img_css = function () {
            return {};
          }),
          (p_css = function () {
            return {};
          }),
          (createDOM = function (e) {
            var a = document.createElement('div');
            a.classList.add('widget', 'widget_instagram');
            var o,
              r = document.createElement('div');
            if (e.hasOwnProperty('error_type')) {
              var n = document.createTextNode(e.error_message);
              (o = document.createElement('p')), o.appendChild(n);
            } else {
              r.classList.add('widget__interior');
              var l = document.createElement('h3'),
                s = document.createElement('span');
              s.classList.add('sin_enlace');
              var c = document.createTextNode('En Instagram');
              s.appendChild(c), l.appendChild(s);
              var u = document.createElement('ul'),
                m = ul_css();
              for (var y in m) u.style[y] = m[y];
              for (var _ in e)
                if (e.hasOwnProperty(_)) {
                  var f = document.createElement('img');
                  (f.title =
                    null !== e[_].caption && e[_].caption.hasOwnProperty('text')
                      ? e[_].caption.text
                      : ''),
                    (f.alt =
                      null !== e[_].caption && e[_].caption.hasOwnProperty('text')
                        ? e[_].caption.text
                        : ''),
                    (f.src = e[_].images.thumbnail.url),
                    (f.style.maxWidth = e[_].images.thumbnail.width + 'px');
                  var v = img_css();
                  for (var y in v) f.style[y] = v[y];
                  var g = document.createElement('a');
                  (g.target = '_blank'), (g.href = e[_].link), g.appendChild(f);
                  var h = document.createElement('li'),
                    M = li_css();
                  for (var y in M) h.style[y] = M[y];
                  h.appendChild(g), u.appendChild(h);
                }
              var E = document.createTextNode('Síguenos');
              (o = document.createElement('a')),
                (o.target = '_blank'),
                (o.href = '//instagram.com/' + e[0].user.username),
                o.classList.add('widget-seguir'),
                (o.rel = 'nofollow'),
                o.appendChild(E),
                d && r.appendChild(l),
                r.appendChild(u),
                a.appendChild(r);
            }
            return t && r.appendChild(o), a;
          }),
          (jsonpv2 = function (e) {
            var a, o;
            (o = new XMLHttpRequest()),
              o.open(
                'GET',
                '/widgets/instagram/instagram-' +
                  r.token +
                  '.js?callback=jsonp_callback_' +
                  Math.round(100000 * Math.random()),
                !0
              ),
              o.send(),
              (o.onreadystatechange = function () {
                if (4 == o.readyState && 200 == o.status) {
                  var t = JSON.parse(o.response);
                  a = createDOM(t.data);
                } else
                  404 == o.status &&
                    ((a = document.createElement('html')), (a.innerHTML = o.response));
                e(a);
              });
          }),
          (this.config = function (n) {
            (r = n),
              (e = r.hasOwnProperty('width') ? r.width : '100%'),
              (a = r.hasOwnProperty('col') ? r.col : 1),
              (o = r.hasOwnProperty('fill') ? r.fill : 1),
              (t =
                !('undefined' != typeof r.showSiguenos && '' !== r.showSiguenos) ||
                r.showSiguenos),
              (d =
                !('undefined' != typeof r.showEnInstagram && '' !== r.showEnInstagram) ||
                r.showEnInstagram);
          }),
          (this.run = function () {
            jsonpv2(function (e) {
              r.hasOwnProperty('element') && null !== document.getElementById(r.element)
                ? document.getElementById(r.element).appendChild(e)
                : r.hasOwnProperty('element') &&
                  0 < document.getElementsByClassName(r.element).length
                ? document.getElementsByClassName(r.element)[0].appendChild(e)
                : document.getElementById('div_instagram_default').appendChild(e);
            });
          });
      }),
        (widgetFacebook = function () {
          var e,
            o,
            t = null;
          (createDOMWidgetFacebook = function () {
            var d = document.createElement('div');
            d.classList.add('fb-page'),
              (d.dataset.href =
                'undefined' == typeof t.user ? 'None' : 'https://www.facebook.com/' + t.user),
              (d.dataset.width = 'undefined' == typeof t.width ? '340' : t.width),
              (d.dataset.height = 'undefined' == typeof t.height ? '500' : t.height),
              (d.dataset.tabs = 'undefined' == typeof t.tabs ? '' : t.tabs),
              (d.dataset.hideCover = 'undefined' == typeof t.hideCover ? 'false' : t.hideCover),
              (d.dataset.showFacepile =
                'undefined' == typeof t.showFacepile ? 'true' : t.showFacepile),
              (d.dataset.hideCta = 'undefined' == typeof t.hideCta ? 'true' : t.hideCta),
              (d.dataset.smallHeader =
                'undefined' == typeof t.smallHeader ? 'false' : t.smallHeader),
              (d.dataset.adaptContainerWidth =
                'undefined' == typeof t.adaptContainerWidth ? 'true' : t.adaptContainerWidth),
              (d.dataset.stream = 'undefined' == typeof t.stream ? 'false' : t.stream),
              (d.dataset.header = 'undefined' == typeof t.header ? 'false' : t.header),
              (e =
                'undefined' == typeof t.showEnFacebook ||
                '' === t.showEnFacebook ||
                t.showEnFacebook),
              (o =
                'undefined' == typeof t.showSiguenos || '' === t.showSiguenos || t.showSiguenos);
            var r = document.createElement('div');
            r.classList.add('fb-xfbml-parse-ignore');
            var n = document.createElement('blockquote');
            n.cite = 'http://www.facebook.com/' + t.user;
            var l = document.createElement('a');
            return (
              (l.href = 'http://www.facebook.com/' + t.user),
              n.appendChild(l),
              r.appendChild(n),
              d.appendChild(r),
              d
            );
          }),
            (createDOM = function () {
              var a,
                d = document.getElementsByTagName('script')[0];
              document.getElementById('facebook-jssdk') ||
                ((a = document.createElement('script')),
                (a.id = 'facebook-jssdk'),
                (a.async = !0),
                (a.src = '//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.5'),
                d.parentNode.insertBefore(a, d));
              var r = document.getElementsByClassName('widget_facebook')[0];
              if (!r) {
                var n = document.createElement('div');
                n.classList.add('widget', 'widget_facebook');
              }
              var l = document.createElement('div');
              l.classList.add('widget__interior');
              var s = document.createElement('h3'),
                c = document.createElement('span');
              c.classList.add('sin_enlace');
              var u = document.createTextNode('En Facebook');
              c.appendChild(u), s.appendChild(c);
              var m = document.createElement('div');
              m.id = 'fb-root';
              var y = createDOMWidgetFacebook(),
                _ = document.createTextNode('Síguenos');
              return (
                (p = document.createElement('a')),
                (p.target = '_blank'),
                (p.href = '//www.facebook.com/' + t.user),
                p.classList.add('widget-seguir'),
                (p.rel = 'nofollow'),
                p.appendChild(_),
                e && l.appendChild(s),
                l.appendChild(m),
                l.appendChild(y),
                o && l.appendChild(p),
                r ? l : (n.appendChild(l), n)
              );
            }),
            (this.config = function (e) {
              t = e;
            }),
            (this.run = function () {
              var e = createDOM();
              t.hasOwnProperty('element') && null !== document.getElementById(t.element)
                ? document.getElementById(t.element).appendChild(e)
                : t.hasOwnProperty('element') &&
                  0 < document.getElementsByClassName(t.element).length
                ? document.getElementsByClassName(t.element)[0].appendChild(e)
                : document.getElementById('div_facebook_default').appendChild(e);
            });
        }),
        (function () {
          'use strict';
          var e = 'undefined' != typeof Element && 'ALLOW_KEYBOARD_INPUT' in Element,
            a = (function () {
              for (
                var e,
                  a,
                  o = [
                    [
                      'requestFullscreen',
                      'exitFullscreen',
                      'fullscreenElement',
                      'fullscreenEnabled',
                      'fullscreenchange',
                      'fullscreenerror',
                    ],
                    [
                      'webkitRequestFullscreen',
                      'webkitExitFullscreen',
                      'webkitFullscreenElement',
                      'webkitFullscreenEnabled',
                      'webkitfullscreenchange',
                      'webkitfullscreenerror',
                    ],
                    [
                      'webkitRequestFullScreen',
                      'webkitCancelFullScreen',
                      'webkitCurrentFullScreenElement',
                      'webkitCancelFullScreen',
                      'webkitfullscreenchange',
                      'webkitfullscreenerror',
                    ],
                    [
                      'mozRequestFullScreen',
                      'mozCancelFullScreen',
                      'mozFullScreenElement',
                      'mozFullScreenEnabled',
                      'mozfullscreenchange',
                      'mozfullscreenerror',
                    ],
                    [
                      'msRequestFullscreen',
                      'msExitFullscreen',
                      'msFullscreenElement',
                      'msFullscreenEnabled',
                      'MSFullscreenChange',
                      'MSFullscreenError',
                    ],
                  ],
                  t = 0,
                  d = o.length,
                  r = {};
                t < d;
                t++
              )
                if (((e = o[t]), e && e[1] in document)) {
                  for (t = 0, a = e.length; t < a; t++) r[o[0][t]] = e[t];
                  return r;
                }
              return !1;
            })(),
            o = {
              request: function (o) {
                var t = a.requestFullscreen;
                (o = o || document.documentElement),
                  /5\.1[\.\d]* Safari/.test(navigator.userAgent)
                    ? o[t]()
                    : o[t](e && Element.ALLOW_KEYBOARD_INPUT);
              },
              exit: function () {
                document[a.exitFullscreen]();
              },
              toggle: function (e) {
                this.isFullscreen ? this.exit() : this.request(e);
              },
              raw: a,
              func: null,
            };
          return a
            ? void (Object.defineProperties(o, {
                isFullscreen: {
                  get: function () {
                    return !!document[a.fullscreenElement];
                  },
                },
                element: {
                  enumerable: !0,
                  get: function () {
                    return document[a.fullscreenElement];
                  },
                },
                enabled: {
                  enumerable: !0,
                  get: function () {
                    return !!document[a.fullscreenEnabled];
                  },
                },
              }),
              (window.screenfull = o))
            : void (window.screenfull = !1);
        })();
      function $___var_c8208475752180a6 (e, a) {
        var o = e.split(','),
          t = a.split(','),
          d = [];
        if (o.length == t.length)
          for (var r = 0; r < o.length; r++) d.push({ id: o[r], name: t[r] });
        return d;
      }
    })();
  } finally {
    if ($___old_cc6f04561db762e7)
      ({}.constructor.defineProperty(Navigator.prototype, 'userAgent', $___old_cc6f04561db762e7));
  }
}
