const G=Number.isFinite||function(r){
  return typeof r=="number"&&isFinite(r)
}, WE=Number.isSafeInteger||function(r){
  return typeof r=="number"&&Math.abs(r)<=zE
}, zE=Number.MAX_SAFE_INTEGER||9007199254740991;
let q=function(r){
  return r.NETWORK_ERROR="networkError", r.MEDIA_ERROR="mediaError", r.KEY_SYSTEM_ERROR="keySystemError", r.MUX_ERROR="muxError",
  r.OTHER_ERROR="otherError", r
}
({

}), k=function(r){
  return r.KEY_SYSTEM_NO_KEYS="keySystemNoKeys", r.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess", r.KEY_SYSTEM_NO_SESSION="keySystemNoSession",
  r.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense", r.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",
  r.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed", r.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",
  r.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed", r.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",
  r.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError", r.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR="keySystemDestroyMediaKeysError",
  r.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR="keySystemDestroyCloseSessionError", r.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR="keySystemDestroyRemoveSessionError",
  r.MANIFEST_LOAD_ERROR="manifestLoadError", r.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut", r.MANIFEST_PARSING_ERROR="manifestParsingError",
  r.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError", r.LEVEL_EMPTY_ERROR="levelEmptyError", r.LEVEL_LOAD_ERROR="levelLoadError",
  r.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut", r.LEVEL_PARSING_ERROR="levelParsingError", r.LEVEL_SWITCH_ERROR="levelSwitchError",
  r.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError", r.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut", r.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",
  r.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut", r.FRAG_LOAD_ERROR="fragLoadError", r.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",
  r.FRAG_DECRYPT_ERROR="fragDecryptError", r.FRAG_PARSING_ERROR="fragParsingError", r.FRAG_GAP="fragGap", r.REMUX_ALLOC_ERROR="remuxAllocError",
  r.KEY_LOAD_ERROR="keyLoadError", r.KEY_LOAD_TIMEOUT="keyLoadTimeOut", r.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError", r.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",
  r.BUFFER_APPEND_ERROR="bufferAppendError", r.BUFFER_APPENDING_ERROR="bufferAppendingError", r.BUFFER_STALLED_ERROR="bufferStalledError",
  r.BUFFER_FULL_ERROR="bufferFullError", r.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole", r.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",
  r.ASSET_LIST_LOAD_ERROR="assetListLoadError", r.ASSET_LIST_LOAD_TIMEOUT="assetListLoadTimeout", r.ASSET_LIST_PARSING_ERROR="assetListParsingError",
  r.INTERSTITIAL_ASSET_ITEM_ERROR="interstitialAssetItemError", r.INTERNAL_EXCEPTION="internalException", r.INTERNAL_ABORTED="aborted",
  r.ATTACH_MEDIA_ERROR="attachMediaError", r.UNKNOWN="unknown", r
}
({

}), S=function(r){
  return r.MEDIA_ATTACHING="hlsMediaAttaching", r.MEDIA_ATTACHED="hlsMediaAttached", r.MEDIA_DETACHING="hlsMediaDetaching",
  r.MEDIA_DETACHED="hlsMediaDetached", r.MEDIA_ENDED="hlsMediaEnded", r.STALL_RESOLVED="hlsStallResolved", r.BUFFER_RESET="hlsBufferReset",
  r.BUFFER_CODECS="hlsBufferCodecs", r.BUFFER_CREATED="hlsBufferCreated", r.BUFFER_APPENDING="hlsBufferAppending", r.BUFFER_APPENDED="hlsBufferAppended",
  r.BUFFER_EOS="hlsBufferEos", r.BUFFERED_TO_END="hlsBufferedToEnd", r.BUFFER_FLUSHING="hlsBufferFlushing", r.BUFFER_FLUSHED="hlsBufferFlushed",
  r.MANIFEST_LOADING="hlsManifestLoading", r.MANIFEST_LOADED="hlsManifestLoaded", r.MANIFEST_PARSED="hlsManifestParsed", r.LEVEL_SWITCHING="hlsLevelSwitching",
  r.LEVEL_SWITCHED="hlsLevelSwitched", r.LEVEL_LOADING="hlsLevelLoading", r.LEVEL_LOADED="hlsLevelLoaded", r.LEVEL_UPDATED="hlsLevelUpdated",
  r.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated", r.LEVELS_UPDATED="hlsLevelsUpdated", r.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",
  r.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching", r.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched", r.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",
  r.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded", r.AUDIO_TRACK_UPDATED="hlsAudioTrackUpdated", r.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",
  r.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared", r.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch", r.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",
  r.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded", r.SUBTITLE_TRACK_UPDATED="hlsSubtitleTrackUpdated", r.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",
  r.CUES_PARSED="hlsCuesParsed", r.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound", r.INIT_PTS_FOUND="hlsInitPtsFound",
  r.FRAG_LOADING="hlsFragLoading", r.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted", r.FRAG_LOADED="hlsFragLoaded",
  r.FRAG_DECRYPTED="hlsFragDecrypted", r.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment", r.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",
  r.FRAG_PARSING_METADATA="hlsFragParsingMetadata", r.FRAG_PARSED="hlsFragParsed", r.FRAG_BUFFERED="hlsFragBuffered", r.FRAG_CHANGED="hlsFragChanged",
  r.FPS_DROP="hlsFpsDrop", r.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping", r.MAX_AUTO_LEVEL_UPDATED="hlsMaxAutoLevelUpdated",
  r.ERROR="hlsError", r.DESTROYING="hlsDestroying", r.KEY_LOADING="hlsKeyLoading", r.KEY_LOADED="hlsKeyLoaded", r.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",
  r.BACK_BUFFER_REACHED="hlsBackBufferReached", r.STEERING_MANIFEST_LOADED="hlsSteeringManifestLoaded", r.ASSET_LIST_LOADING="hlsAssetListLoading",
  r.ASSET_LIST_LOADED="hlsAssetListLoaded", r.INTERSTITIALS_UPDATED="hlsInterstitialsUpdated", r.INTERSTITIALS_BUFFERED_TO_BOUNDARY="hlsInterstitialsBufferedToBoundary",
  r.INTERSTITIAL_ASSET_PLAYER_CREATED="hlsInterstitialAssetPlayerCreated", r.INTERSTITIAL_STARTED="hlsInterstitialStarted",
  r.INTERSTITIAL_ASSET_STARTED="hlsInterstitialAssetStarted", r.INTERSTITIAL_ASSET_ENDED="hlsInterstitialAssetEnded", r.INTERSTITIAL_ASSET_ERROR="hlsInterstitialAssetError",
  r.INTERSTITIAL_ENDED="hlsInterstitialEnded", r.INTERSTITIALS_PRIMARY_RESUMED="hlsInterstitialsPrimaryResumed", r.PLAYOUT_LIMIT_REACHED="hlsPlayoutLimitReached",
  r.EVENT_CUE_ENTER="hlsEventCueEnter", r
}
({

});
var ne={
  MANIFEST:"manifest", LEVEL:"level", AUDIO_TRACK:"audioTrack", SUBTITLE_TRACK:"subtitleTrack"
}, W={
  MAIN:"main", AUDIO:"audio", SUBTITLE:"subtitle"
};
class Ss{
  constructor(e, t=0, s=0){
    this.halfLife=void 0, this.alpha_=void 0, this.estimate_=void 0, this.totalWeight_=void 0, this.halfLife=e, this.alpha_=e?Math.exp(Math.log(.5)/e):0,
    this.estimate_=t, this.totalWeight_=s
  }
  sample(e, t){
    const s=Math.pow(this.alpha_, e);
    this.estimate_=t*(1-s)+s*this.estimate_, this.totalWeight_+=e
  }
  getTotalWeight(){
    return this.totalWeight_
  }
  getEstimate(){
    if(this.alpha_){
      const e=1-Math.pow(this.alpha_, this.totalWeight_);
      if(e)return this.estimate_/e
    }
    return this.estimate_
  }

}
class YE{
  constructor(e, t, s, n=100){
    this.defaultEstimate_=void 0, this.minWeight_=void 0, this.minDelayMs_=void 0, this.slow_=void 0, this.fast_=void 0, this.defaultTTFB_=void 0,
    this.ttfb_=void 0, this.defaultEstimate_=s, this.minWeight_=.001, this.minDelayMs_=50, this.slow_=new Ss(e), this.fast_=new Ss(t),
    this.defaultTTFB_=n, this.ttfb_=new Ss(e)
  }
  update(e, t){
    const{
      slow_:s, fast_:n, ttfb_:i
    }
    =this;
    s.halfLife!==e&&(this.slow_=new Ss(e, s.getEstimate(), s.getTotalWeight())), n.halfLife!==t&&(this.fast_=new Ss(t, n.getEstimate(),
    n.getTotalWeight())), i.halfLife!==e&&(this.ttfb_=new Ss(e, i.getEstimate(), i.getTotalWeight()))
  }
  sample(e, t){
    e=Math.max(e, this.minDelayMs_);
    const s=8*t, n=e/1e3, i=s/n;
    this.fast_.sample(n, i), this.slow_.sample(n, i)
  }
  sampleTTFB(e){
    const t=e/1e3, s=Math.sqrt(2)*Math.exp(-Math.pow(t, 2)/2);
    this.ttfb_.sample(s, Math.max(e, 5))
  }
  canEstimate(){
    return this.fast_.getTotalWeight()>=this.minWeight_
  }
  getEstimate(){
    return this.canEstimate()?Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()):this.defaultEstimate_
  }
  getEstimateTTFB(){
    return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_
  }
  get defaultEstimate(){
    return this.defaultEstimate_
  }
  destroy(){

  }

}
function qE(r, e, t){
  return(e=XE(e))in r?Object.defineProperty(r, e, {
    value:t, enumerable:!0, configurable:!0, writable:!0
  }):r[e]=t, r
}
function he(){
  return he=Object.assign?Object.assign.bind():function(r){
    for(var e=1;
    e<arguments.length;
    e++){
      var t=arguments[e];
      for(var s in t)({

      }).hasOwnProperty.call(t, s)&&(r[s]=t[s])
    }
    return r
  }, he.apply(null, arguments)
}
function Uh(r, e){
  var t=Object.keys(r);
  if(Object.getOwnPropertySymbols){
    var s=Object.getOwnPropertySymbols(r);
    e&&(s=s.filter(function(n){
      return Object.getOwnPropertyDescriptor(r, n).enumerable
    })), t.push.apply(t, s)
  }
  return t
}
function ce(r){
  for(var e=1;
  e<arguments.length;
  e++){
    var t=arguments[e]!=null?arguments[e]:{

    };
    e%2?Uh(Object(t), !0).forEach(function(s){
      qE(r, s, t[s])
    }):Object.getOwnPropertyDescriptors?Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)):Uh(Object(t)).forEach(function(s){
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(t, s))
    })
  }
  return r
}
function QE(r, e){
  if(typeof r!="object"||!r)return r;
  var t=r[Symbol.toPrimitive];
  if(t!==void 0){
    var s=t.call(r, e);
    if(typeof s!="object")return s;
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return(e==="string"?String:Number)(r)
}
function XE(r){
  var e=QE(r, "string");
  return typeof e=="symbol"?e:e+""
}
class Ct{
  constructor(e, t){
    this.trace=void 0, this.debug=void 0, this.log=void 0, this.warn=void 0, this.info=void 0, this.error=void 0;
    const s=`[${e}]:`;
    this.trace=br, this.debug=t.debug.bind(null, s), this.log=t.log.bind(null, s), this.warn=t.warn.bind(null, s), this.info=t.info.bind(null,
    s), this.error=t.error.bind(null, s)
  }

}
const br=function(){

}, ZE={
  trace:br, debug:br, log:br, warn:br, info:br, error:br
};
function Rc(){
  return he({

  }, ZE)
}
function JE(r, e){
  const t=self.console[r];
  return t?t.bind(self.console, `${e?"["+e+"] ":""}[${r}] >`):br
}
function $h(r, e, t){
  return e[r]?e[r].bind(e):JE(r, t)
}
const wc=Rc();
function eS(r, e, t){
  const s=Rc();
  if(typeof console=="object"&&r===!0||typeof r=="object"){
    const n=["debug", "log", "info", "warn", "error"];
    n.forEach(i=>{
      s[i]=$h(i, r, t)
    });
    try{
      s.log(`Debug logs enabled for "${e}" in hls.js version 1.6.15`)
    }
    catch{
      return Rc()
    }
    n.forEach(i=>{
      wc[i]=$h(i, r)
    })
  }
  else he(wc, s);
  return s
}
const ue=wc;
function Wr(r=!0){
  return typeof self>"u"?void 0:(r||!self.MediaSource)&&self.ManagedMediaSource||self.MediaSource||self.WebKitMediaSource
}
function tS(r){
  return typeof self<"u"&&r===self.ManagedMediaSource
}
function Ug(r, e){
  const t=Object.keys(r), s=Object.keys(e), n=t.length, i=s.length;
  return!n||!i||n===i&&!t.some(a=>s.indexOf(a)===-1)
}
function yt(r, e=!1){
  if(typeof TextDecoder<"u"){
    const c=new TextDecoder("utf-8").decode(r);
    if(e){
      const u=c.indexOf("\0");
      return u!==-1?c.substring(0, u):c
    }
    return c.replace(/\0/g, "")
  }
  const t=r.length;
  let s, n, i, a="", o=0;
  for(;
  o<t;
  ){
    if(s=r[o++], s===0&&e)return a;
    if(s===0||s===3)continue;
    switch(s>>4){
      case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a+=String.fromCharCode(s);
      break;
      case 12:case 13:n=r[o++], a+=String.fromCharCode((s&31)<<6|n&63);
      break;
      case 14:n=r[o++], i=r[o++], a+=String.fromCharCode((s&15)<<12|(n&63)<<6|(i&63)<<0);
      break
    }

  }
  return a
}
function je(r){
  let e="";
  for(let t=0;
  t<r.length;
  t++){
    let s=r[t].toString(16);
    s.length<2&&(s="0"+s), e+=s
  }
  return e
}
function $g(r){
  return Uint8Array.from(r.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer
}
function rS(r){
  return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r, "default")?r.default:r
}
var al={
  exports:{

  }

}, Bh;
function sS(){
  return Bh||(Bh=1, function(r, e){
    (function(t){
      var s=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,
      n=/^(?=([^\/?#]*))\1([^]*)$/, i=/(?:\/|^)\.(?=\/)/g, a=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o={
        buildAbsoluteURL:function(l, c, u){
          if(u=u||{

          }, l=l.trim(), c=c.trim(), !c){
            if(!u.alwaysNormalize)return l;
            var d=o.parseURL(l);
            if(!d)throw new Error("Error trying to parse base URL.");
            return d.path=o.normalizePath(d.path), o.buildURLFromParts(d)
          }
          var h=o.parseURL(c);
          if(!h)throw new Error("Error trying to parse relative URL.");
          if(h.scheme)return u.alwaysNormalize?(h.path=o.normalizePath(h.path), o.buildURLFromParts(h)):c;
          var f=o.parseURL(l);
          if(!f)throw new Error("Error trying to parse base URL.");
          if(!f.netLoc&&f.path&&f.path[0]!=="/"){
            var g=n.exec(f.path);
            f.netLoc=g[1], f.path=g[2]
          }
          f.netLoc&&!f.path&&(f.path="/");
          var y={
            scheme:f.scheme, netLoc:h.netLoc, path:null, params:h.params, query:h.query, fragment:h.fragment
          };
          if(!h.netLoc&&(y.netLoc=f.netLoc, h.path[0]!=="/"))if(!h.path)y.path=f.path, h.params||(y.params=f.params, h.query||(y.query=f.query));
          else{
            var x=f.path, p=x.substring(0, x.lastIndexOf("/")+1)+h.path;
            y.path=o.normalizePath(p)
          }
          return y.path===null&&(y.path=u.alwaysNormalize?o.normalizePath(h.path):h.path), o.buildURLFromParts(y)
        }, parseURL:function(l){
          var c=s.exec(l);
          return c?{
            scheme:c[1]||"", netLoc:c[2]||"", path:c[3]||"", params:c[4]||"", query:c[5]||"", fragment:c[6]||""
          }:null
        }, normalizePath:function(l){
          for(l=l.split("").reverse().join("").replace(i, "");
          l.length!==(l=l.replace(a, "")).length;
          );
          return l.split("").reverse().join("")
        }, buildURLFromParts:function(l){
          return l.scheme+l.netLoc+l.path+l.params+l.query+l.fragment
        }

      };
      r.exports=o
    })()
  }
  (al)), al.exports
}
var Hu=sS();
class Wu{
  constructor(){
    this.aborted=!1, this.loaded=0, this.retry=0, this.total=0, this.chunkCount=0, this.bwEstimate=0, this.loading={
      start:0, first:0, end:0
    }, this.parsing={
      start:0, end:0
    }, this.buffering={
      start:0, first:0, end:0
    }

  }

}
var fe={
  AUDIO:"audio", VIDEO:"video", AUDIOVIDEO:"audiovideo"
};
class Bg{
  constructor(e){
    this._byteRange=null, this._url=null, this._stats=null, this._streams=null, this.base=void 0, this.relurl=void 0, typeof e=="string"&&(e={
      url:e
    }), this.base=e, iS(this, "stats")
  }
  setByteRange(e, t){
    const s=e.split("@", 2);
    let n;
    s.length===1?n=(t==null?void 0:t.byteRangeEndOffset)||0:n=parseInt(s[1]), this._byteRange=[n, parseInt(s[0])+n]
  }
  get baseurl(){
    return this.base.url
  }
  get byteRange(){
    return this._byteRange===null?[]:this._byteRange
  }
  get byteRangeStartOffset(){
    return this.byteRange[0]
  }
  get byteRangeEndOffset(){
    return this.byteRange[1]
  }
  get elementaryStreams(){
    return this._streams===null&&(this._streams={
      [fe.AUDIO]:null, [fe.VIDEO]:null, [fe.AUDIOVIDEO]:null
    }), this._streams
  }
  set elementaryStreams(e){
    this._streams=e
  }
  get hasStats(){
    return this._stats!==null
  }
  get hasStreams(){
    return this._streams!==null
  }
  get stats(){
    return this._stats===null&&(this._stats=new Wu), this._stats
  }
  set stats(e){
    this._stats=e
  }
  get url(){
    return!this._url&&this.baseurl&&this.relurl&&(this._url=Hu.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize:!0
    })), this._url||""
  }
  set url(e){
    this._url=e
  }
  clearElementaryStreamInfo(){
    const{
      elementaryStreams:e
    }
    =this;
    e[fe.AUDIO]=null, e[fe.VIDEO]=null, e[fe.AUDIOVIDEO]=null
  }

}
function _e(r){
  return r.sn!=="initSegment"
}
class ol extends Bg{
  constructor(e, t){
    super(t), this._decryptdata=null, this._programDateTime=null, this._ref=null, this._bitrate=void 0, this.rawProgramDateTime=null,
    this.tagList=[], this.duration=0, this.sn=0, this.levelkeys=void 0, this.type=void 0, this.loader=null, this.keyLoader=null,
    this.level=-1, this.cc=0, this.startPTS=void 0, this.endPTS=void 0, this.startDTS=void 0, this.endDTS=void 0, this.start=0,
    this.playlistOffset=0, this.deltaPTS=void 0, this.maxStartPTS=void 0, this.minEndPTS=void 0, this.data=void 0, this.bitrateTest=!1,
    this.title=null, this.initSegment=null, this.endList=void 0, this.gap=void 0, this.urlId=0, this.type=e
  }
  get byteLength(){
    if(this.hasStats){
      const e=this.stats.total;
      if(e)return e
    }
    if(this.byteRange.length){
      const e=this.byteRange[0], t=this.byteRange[1];
      if(G(e)&&G(t))return t-e
    }
    return null
  }
  get bitrate(){
    return this.byteLength?this.byteLength*8/this.duration:this._bitrate?this._bitrate:null
  }
  set bitrate(e){
    this._bitrate=e
  }
  get decryptdata(){
    var e;
    const{
      levelkeys:t
    }
    =this;
    if(!t||t.NONE)return null;
    if(t.identity)this._decryptdata||(this._decryptdata=t.identity.getDecryptData(this.sn));
    else if(!((e=this._decryptdata)!=null&&e.keyId)){
      const s=Object.keys(t);
      if(s.length===1){
        const n=this._decryptdata=t[s[0]]||null;
        n&&(this._decryptdata=n.getDecryptData(this.sn, t))
      }

    }
    return this._decryptdata
  }
  get end(){
    return this.start+this.duration
  }
  get endProgramDateTime(){
    if(this.programDateTime===null)return null;
    const e=G(this.duration)?this.duration:0;
    return this.programDateTime+e*1e3
  }
  get encrypted(){
    var e;
    if((e=this._decryptdata)!=null&&e.encrypted)return!0;
    if(this.levelkeys){
      var t;
      const s=Object.keys(this.levelkeys), n=s.length;
      if(n>1||n===1&&(t=this.levelkeys[s[0]])!=null&&t.encrypted)return!0
    }
    return!1
  }
  get programDateTime(){
    return this._programDateTime===null&&this.rawProgramDateTime&&(this.programDateTime=Date.parse(this.rawProgramDateTime)),
    this._programDateTime
  }
  set programDateTime(e){
    if(!G(e)){
      this._programDateTime=this.rawProgramDateTime=null;
      return
    }
    this._programDateTime=e
  }
  get ref(){
    return _e(this)?(this._ref||(this._ref={
      base:this.base, start:this.start, duration:this.duration, sn:this.sn, programDateTime:this.programDateTime
    }), this._ref):null
  }
  addStart(e){
    this.setStart(this.start+e)
  }
  setStart(e){
    this.start=e, this._ref&&(this._ref.start=e)
  }
  setDuration(e){
    this.duration=e, this._ref&&(this._ref.duration=e)
  }
  setKeyFormat(e){
    const t=this.levelkeys;
    if(t){
      var s;
      const n=t[e];
      n&&!((s=this._decryptdata)!=null&&s.keyId)&&(this._decryptdata=n.getDecryptData(this.sn, t))
    }

  }
  abortRequests(){
    var e, t;
    (e=this.loader)==null||e.abort(), (t=this.keyLoader)==null||t.abort()
  }
  setElementaryStreamInfo(e, t, s, n, i, a=!1){
    const{
      elementaryStreams:o
    }
    =this, l=o[e];
    if(!l){
      o[e]={
        startPTS:t, endPTS:s, startDTS:n, endDTS:i, partial:a
      };
      return
    }
    l.startPTS=Math.min(l.startPTS, t), l.endPTS=Math.max(l.endPTS, s), l.startDTS=Math.min(l.startDTS, n), l.endDTS=Math.max(l.endDTS,
    i)
  }

}
class nS extends Bg{
  constructor(e, t, s, n, i){
    super(s), this.fragOffset=0, this.duration=0, this.gap=!1, this.independent=!1, this.relurl=void 0, this.fragment=void 0,
    this.index=void 0, this.duration=e.decimalFloatingPoint("DURATION"), this.gap=e.bool("GAP"), this.independent=e.bool("INDEPENDENT"),
    this.relurl=e.enumeratedString("URI"), this.fragment=t, this.index=n;
    const a=e.enumeratedString("BYTERANGE");
    a&&this.setByteRange(a, i), i&&(this.fragOffset=i.fragOffset+i.duration)
  }
  get start(){
    return this.fragment.start+this.fragOffset
  }
  get end(){
    return this.start+this.duration
  }
  get loaded(){
    const{
      elementaryStreams:e
    }
    =this;
    return!!(e.audio||e.video||e.audiovideo)
  }

}
function jg(r, e){
  const t=Object.getPrototypeOf(r);
  if(t){
    const s=Object.getOwnPropertyDescriptor(t, e);
    return s||jg(t, e)
  }

}
function iS(r, e){
  const t=jg(r, e);
  t&&(t.enumerable=!0, Object.defineProperty(r, e, t))
}
const jh=Math.pow(2, 32)-1, aS=[].push, Gg={
  video:1, audio:2, id3:3, text:4
};
function Ce(r){
  return String.fromCharCode.apply(null, r)
}
function Vg(r, e){
  const t=r[e]<<8|r[e+1];
  return t<0?65536+t:t
}
function Q(r, e){
  const t=Kg(r, e);
  return t<0?4294967296+t:t
}
function Gh(r, e){
  let t=Q(r, e);
  return t*=Math.pow(2, 32), t+=Q(r, e+4), t
}
function Kg(r, e){
  return r[e]<<24|r[e+1]<<16|r[e+2]<<8|r[e+3]
}
function oS(r){
  const e=r.byteLength;
  for(let t=0;
  t<e;
  ){
    const s=Q(r, t);
    if(s>8&&r[t+4]===109&&r[t+5]===111&&r[t+6]===111&&r[t+7]===102)return!0;
    t=s>1?t+s:e
  }
  return!1
}
function re(r, e){
  const t=[];
  if(!e.length)return t;
  const s=r.byteLength;
  for(let n=0;
  n<s;
  ){
    const i=Q(r, n), a=Ce(r.subarray(n+4, n+8)), o=i>1?n+i:s;
    if(a===e[0])if(e.length===1)t.push(r.subarray(n+8, o));
    else{
      const l=re(r.subarray(n+8, o), e.slice(1));
      l.length&&aS.apply(t, l)
    }
    n=o
  }
  return t
}
function lS(r){
  const e=[], t=r[0];
  let s=8;
  const n=Q(r, s);
  s+=4;
  let i=0, a=0;
  t===0?(i=Q(r, s), a=Q(r, s+4), s+=8):(i=Gh(r, s), a=Gh(r, s+8), s+=16), s+=2;
  let o=r.length+a;
  const l=Vg(r, s);
  s+=2;
  for(let c=0;
  c<l;
  c++){
    let u=s;
    const d=Q(r, u);
    u+=4;
    const h=d&2147483647;
    if((d&2147483648)>>>31===1)return ue.warn("SIDX has hierarchical references (not supported)"), null;
    const g=Q(r, u);
    u+=4, e.push({
      referenceSize:h, subsegmentDuration:g, info:{
        duration:g/n, start:o, end:o+h-1
      }

    }), o+=h, u+=4, s=u
  }
  return{
    earliestPresentationTime:i, timescale:n, version:t, referencesCount:l, references:e
  }

}
function Hg(r){
  const e=[], t=re(r, ["moov", "trak"]);
  for(let n=0;
  n<t.length;
  n++){
    const i=t[n], a=re(i, ["tkhd"])[0];
    if(a){
      let o=a[0];
      const l=Q(a, o===0?12:20), c=re(i, ["mdia", "mdhd"])[0];
      if(c){
        o=c[0];
        const u=Q(c, o===0?12:20), d=re(i, ["mdia", "hdlr"])[0];
        if(d){
          const h=Ce(d.subarray(8, 12)), f={
            soun:fe.AUDIO, vide:fe.VIDEO
          }
          [h], g=re(i, ["mdia", "minf", "stbl", "stsd"])[0], y=cS(g);
          f?(e[l]={
            timescale:u, type:f, stsd:y
          }, e[f]=ce({
            timescale:u, id:l
          }, y)):e[l]={
            timescale:u, type:h, stsd:y
          }

        }

      }

    }

  }
  return re(r, ["moov", "mvex", "trex"]).forEach(n=>{
    const i=Q(n, 4), a=e[i];
    a&&(a.default={
      duration:Q(n, 12), flags:Q(n, 20)
    })
  }), e
}
function cS(r){
  const e=r.subarray(8), t=e.subarray(86), s=Ce(e.subarray(4, 8));
  let n=s, i;
  const a=s==="enca"||s==="encv";
  if(a){
    const c=re(e, [s])[0].subarray(s==="enca"?28:78);
    re(c, ["sinf"]).forEach(d=>{
      const h=re(d, ["schm"])[0];
      if(h){
        const f=Ce(h.subarray(4, 8));
        if(f==="cbcs"||f==="cenc"){
          const g=re(d, ["frma"])[0];
          g&&(n=Ce(g))
        }

      }

    })
  }
  const o=n;
  switch(n){
    case"avc1":case"avc2":case"avc3":case"avc4":{
      const l=re(t, ["avcC"])[0];
      l&&l.length>3&&(n+="."+Vi(l[1])+Vi(l[2])+Vi(l[3]), i=Gi(o==="avc1"?"dva1":"dvav", t));
      break
    }
    case"mp4a":{
      const l=re(e, [s])[0], c=re(l.subarray(28), ["esds"])[0];
      if(c&&c.length>7){
        let u=4;
        if(c[u++]!==3)break;
        u=ll(c, u), u+=2;
        const d=c[u++];
        if(d&128&&(u+=2), d&64&&(u+=c[u++]), c[u++]!==4)break;
        u=ll(c, u);
        const h=c[u++];
        if(h===64)n+="."+Vi(h);
        else break;
        if(u+=12, c[u++]!==5)break;
        u=ll(c, u);
        const f=c[u++];
        let g=(f&248)>>3;
        g===31&&(g+=1+((f&7)<<3)+((c[u]&224)>>5)), n+="."+g
      }
      break
    }
    case"hvc1":case"hev1":{
      const l=re(t, ["hvcC"])[0];
      if(l&&l.length>12){
        const c=l[1], u=["", "A", "B", "C"][c>>6], d=c&31, h=Q(l, 2), f=(c&32)>>5?"H":"L", g=l[12], y=l.subarray(6, 12);
        n+="."+u+d, n+="."+uS(h).toString(16).toUpperCase(), n+="."+f+g;
        let x="";
        for(let p=y.length;
        p--;
        ){
          const v=y[p];
          (v||x)&&(x="."+v.toString(16).toUpperCase()+x)
        }
        n+=x
      }
      i=Gi(o=="hev1"?"dvhe":"dvh1", t);
      break
    }
    case"dvh1":case"dvhe":case"dvav":case"dva1":case"dav1":{
      n=Gi(n, t)||n;
      break
    }
    case"vp09":{
      const l=re(t, ["vpcC"])[0];
      if(l&&l.length>6){
        const c=l[4], u=l[5], d=l[6]>>4&15;
        n+="."+Yt(c)+"."+Yt(u)+"."+Yt(d)
      }
      break
    }
    case"av01":{
      const l=re(t, ["av1C"])[0];
      if(l&&l.length>2){
        const c=l[1]>>>5, u=l[1]&31, d=l[2]>>>7?"H":"M", h=(l[2]&64)>>6, f=(l[2]&32)>>5, g=c===2&&h?f?12:10:h?10:8, y=(l[2]&16)>>4,
        x=(l[2]&8)>>3, p=(l[2]&4)>>2, v=l[2]&3;
        n+="."+c+"."+Yt(u)+d+"."+Yt(g)+"."+y+"."+x+p+v+"."+Yt(1)+"."+Yt(1)+"."+Yt(1)+"."+0, i=Gi("dav1", t)
      }
      break
    }

  }
  return{
    codec:n, encrypted:a, supplemental:i
  }

}
function Gi(r, e){
  const t=re(e, ["dvvC"]), s=t.length?t[0]:re(e, ["dvcC"])[0];
  if(s){
    const n=s[2]>>1&127, i=s[2]<<5&32|s[3]>>3&31;
    return r+"."+Yt(n)+"."+Yt(i)
  }

}
function uS(r){
  let e=0;
  for(let t=0;
  t<32;
  t++)e|=(r>>t&1)<<31-t;
  return e>>>0
}
function ll(r, e){
  const t=e+5;
  for(;
  r[e++]&128&&e<t;
  );
  return e
}
function Vi(r){
  return("0"+r.toString(16).toUpperCase()).slice(-2)
}
function Yt(r){
  return(r<10?"0":"")+r
}
function dS(r, e){
  if(!r||!e)return;
  const t=e.keyId;
  t&&e.isCommonEncryption&&Wg(r, (s, n)=>{
    const i=s.subarray(8, 24);
    i.some(a=>a!==0)||(ue.log(`[eme] Patching keyId in 'enc${n?"a":"v"}>sinf>>tenc' box: ${je(i)} -> ${je(t)}`), s.set(t,
    8))
  })
}
function hS(r){
  const e=[];
  return Wg(r, t=>e.push(t.subarray(8, 24))), e
}
function Wg(r, e){
  re(r, ["moov", "trak"]).forEach(s=>{
    const n=re(s, ["mdia", "minf", "stbl", "stsd"])[0];
    if(!n)return;
    const i=n.subarray(8);
    let a=re(i, ["enca"]);
    const o=a.length>0;
    o||(a=re(i, ["encv"])), a.forEach(l=>{
      const c=o?l.subarray(28):l.subarray(78);
      re(c, ["sinf"]).forEach(d=>{
        const h=zg(d);
        h&&e(h, o)
      })
    })
  })
}
function zg(r){
  const e=re(r, ["schm"])[0];
  if(e){
    const t=Ce(e.subarray(4, 8));
    if(t==="cbcs"||t==="cenc"){
      const s=re(r, ["schi", "tenc"])[0];
      if(s)return s
    }

  }

}
function fS(r, e, t){
  const s={

  }, n=re(r, ["moof", "traf"]);
  for(let i=0;
  i<n.length;
  i++){
    const a=n[i], o=re(a, ["tfhd"])[0], l=Q(o, 4), c=e[l];
    if(!c)continue;
    s[l]||(s[l]={
      start:NaN, duration:0, sampleCount:0, timescale:c.timescale, type:c.type
    });
    const u=s[l], d=re(a, ["tfdt"])[0];
    if(d){
      const E=d[0];
      let T=Q(d, 4);
      E===1&&(T===jh?t.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"):(T*=jh+1,
      T+=Q(d, 8))), G(T)&&(!G(u.start)||T<u.start)&&(u.start=T)
    }
    const h=c.default, f=Q(o, 0)|(h==null?void 0:h.flags);
    let g=(h==null?void 0:h.duration)||0;
    f&8&&(f&2?g=Q(o, 12):g=Q(o, 8));
    const y=re(a, ["trun"]);
    let x=u.start||0, p=0, v=g;
    for(let E=0;
    E<y.length;
    E++){
      const T=y[E], I=Q(T, 4), b=u.sampleCount;
      u.sampleCount+=I;
      const L=T[3]&1, A=T[3]&4, w=T[2]&1, R=T[2]&2, D=T[2]&4, $=T[2]&8;
      let V=8, Y=I;
      for(L&&(V+=4), A&&I&&(!(T[V+1]&1)&&u.keyFrameIndex===void 0&&(u.keyFrameIndex=b), V+=4, w?(v=Q(T, V), V+=4):v=g, R&&(V+=4),
      $&&(V+=4), x+=v, p+=v, Y--);
      Y--;
      )w?(v=Q(T, V), V+=4):v=g, R&&(V+=4), D&&(T[V+1]&1||u.keyFrameIndex===void 0&&(u.keyFrameIndex=u.sampleCount-(Y+1), u.keyFrameStart=x),
      V+=4), $&&(V+=4), x+=v, p+=v;
      !p&&g&&(p+=g*I)
    }
    u.duration+=p
  }
  if(!Object.keys(s).some(i=>s[i].duration)){
    let i=1/0, a=0;
    const o=re(r, ["sidx"]);
    for(let l=0;
    l<o.length;
    l++){
      const c=lS(o[l]);
      if(c!=null&&c.references){
        i=Math.min(i, c.earliestPresentationTime/c.timescale);
        const u=c.references.reduce((d, h)=>d+h.info.duration||0, 0);
        a=Math.max(a, u+c.earliestPresentationTime/c.timescale)
      }

    }
    a&&G(a)&&Object.keys(s).forEach(l=>{
      s[l].duration||(s[l].duration=a*s[l].timescale-s[l].start)
    })
  }
  return s
}
function mS(r){
  const e={
    valid:null, remainder:null
  }, t=re(r, ["moof"]);
  if(t.length<2)return e.remainder=r, e;
  const s=t[t.length-1];
  return e.valid=r.slice(0, s.byteOffset-8), e.remainder=r.slice(s.byteOffset-8), e
}
function kt(r, e){
  const t=new Uint8Array(r.length+e.length);
  return t.set(r), t.set(e, r.length), t
}
function Vh(r, e){
  const t=[], s=e.samples, n=e.timescale, i=e.id;
  let a=!1;
  return re(s, ["moof"]).map(l=>{
    const c=l.byteOffset-8;
    re(l, ["traf"]).map(d=>{
      const h=re(d, ["tfdt"]).map(f=>{
        const g=f[0];
        let y=Q(f, 4);
        return g===1&&(y*=Math.pow(2, 32), y+=Q(f, 8)), y/n
      })[0];
      return h!==void 0&&(r=h), re(d, ["tfhd"]).map(f=>{
        const g=Q(f, 4), y=Q(f, 0)&16777215, x=(y&1)!==0, p=(y&2)!==0, v=(y&8)!==0;
        let E=0;
        const T=(y&16)!==0;
        let I=0;
        const b=(y&32)!==0;
        let L=8;
        g===i&&(x&&(L+=8), p&&(L+=4), v&&(E=Q(f, L), L+=4), T&&(I=Q(f, L), L+=4), b&&(L+=4), e.type==="video"&&(a=wo(e.codec)),
        re(d, ["trun"]).map(A=>{
          const w=A[0], R=Q(A, 0)&16777215, D=(R&1)!==0;
          let $=0;
          const V=(R&4)!==0, Y=(R&256)!==0;
          let K=0;
          const B=(R&512)!==0;
          let H=0;
          const P=(R&1024)!==0, O=(R&2048)!==0;
          let j=0;
          const M=Q(A, 4);
          let F=8;
          D&&($=Q(A, F), F+=4), V&&(F+=4);
          let X=$+c;
          for(let se=0;
          se<M;
          se++){
            if(Y?(K=Q(A, F), F+=4):K=E, B?(H=Q(A, F), F+=4):H=I, P&&(F+=4), O&&(w===0?j=Q(A, F):j=Kg(A, F), F+=4), e.type===fe.VIDEO){
              let J=0;
              for(;
              J<H;
              ){
                const ee=Q(s, X);
                if(X+=4, gS(a, s[X])){
                  const we=s.subarray(X, X+ee);
                  zu(we, a?2:1, r+j/n, t)
                }
                X+=ee, J+=ee+4
              }

            }
            r+=K/n
          }

        }))
      })
    })
  }), t
}
function wo(r){
  if(!r)return!1;
  const e=r.substring(0, 4);
  return e==="hvc1"||e==="hev1"||e==="dvh1"||e==="dvhe"
}
function gS(r, e){
  if(r){
    const t=e>>1&63;
    return t===39||t===40
  }
  else return(e&31)===6
}
function zu(r, e, t, s){
  const n=Yg(r);
  let i=0;
  i+=e;
  let a=0, o=0, l=0;
  for(;
  i<n.length;
  ){
    a=0;
    do{
      if(i>=n.length)break;
      l=n[i++], a+=l
    }
    while(l===255);
    o=0;
    do{
      if(i>=n.length)break;
      l=n[i++], o+=l
    }
    while(l===255);
    const c=n.length-i;
    let u=i;
    if(o<c)i+=o;
    else if(o>c){
      ue.error(`Malformed SEI payload. ${o} is too small, only ${c} bytes left to parse.`);
      break
    }
    if(a===4){
      if(n[u++]===181){
        const h=Vg(n, u);
        if(u+=2, h===49){
          const f=Q(n, u);
          if(u+=4, f===1195456820){
            const g=n[u++];
            if(g===3){
              const y=n[u++], x=31&y, p=64&y, v=p?2+x*3:0, E=new Uint8Array(v);
              if(p){
                E[0]=y;
                for(let T=1;
                T<v;
                T++)E[T]=n[u++]
              }
              s.push({
                type:g, payloadType:a, pts:t, bytes:E
              })
            }

          }

        }

      }

    }
    else if(a===5&&o>16){
      const d=[];
      for(let g=0;
      g<16;
      g++){
        const y=n[u++].toString(16);
        d.push(y.length==1?"0"+y:y), (g===3||g===5||g===7||g===9)&&d.push("-")
      }
      const h=o-16, f=new Uint8Array(h);
      for(let g=0;
      g<h;
      g++)f[g]=n[u++];
      s.push({
        payloadType:a, pts:t, uuid:d.join(""), userData:yt(f), userDataBytes:f
      })
    }

  }

}
function Yg(r){
  const e=r.byteLength, t=[];
  let s=1;
  for(;
  s<e-2;
  )r[s]===0&&r[s+1]===0&&r[s+2]===3?(t.push(s+2), s+=2):s++;
  if(t.length===0)return r;
  const n=e-t.length, i=new Uint8Array(n);
  let a=0;
  for(s=0;
  s<n;
  a++, s++)a===t[0]&&(a++, t.shift()), i[s]=r[a];
  return i
}
function pS(r){
  const e=r[0];
  let t="", s="", n=0, i=0, a=0, o=0, l=0, c=0;
  if(e===0){
    for(;
    Ce(r.subarray(c, c+1))!=="\0";
    )t+=Ce(r.subarray(c, c+1)), c+=1;
    for(t+=Ce(r.subarray(c, c+1)), c+=1;
    Ce(r.subarray(c, c+1))!=="\0";
    )s+=Ce(r.subarray(c, c+1)), c+=1;
    s+=Ce(r.subarray(c, c+1)), c+=1, n=Q(r, 12), i=Q(r, 16), o=Q(r, 20), l=Q(r, 24), c=28
  }
  else if(e===1){
    c+=4, n=Q(r, c), c+=4;
    const d=Q(r, c);
    c+=4;
    const h=Q(r, c);
    for(c+=4, a=2**32*d+h, WE(a)||(a=Number.MAX_SAFE_INTEGER, ue.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),
    o=Q(r, c), c+=4, l=Q(r, c), c+=4;
    Ce(r.subarray(c, c+1))!=="\0";
    )t+=Ce(r.subarray(c, c+1)), c+=1;
    for(t+=Ce(r.subarray(c, c+1)), c+=1;
    Ce(r.subarray(c, c+1))!=="\0";
    )s+=Ce(r.subarray(c, c+1)), c+=1;
    s+=Ce(r.subarray(c, c+1)), c+=1
  }
  const u=r.subarray(c, r.byteLength);
  return{
    schemeIdUri:t, value:s, timeScale:n, presentationTime:a, presentationTimeDelta:i, eventDuration:o, id:l, payload:u
  }

}
function yS(r, ...e){
  const t=e.length;
  let s=8, n=t;
  for(;
  n--;
  )s+=e[n].byteLength;
  const i=new Uint8Array(s);
  for(i[0]=s>>24&255, i[1]=s>>16&255, i[2]=s>>8&255, i[3]=s&255, i.set(r, 4), n=0, s=8;
  n<t;
  n++)i.set(e[n], s), s+=e[n].byteLength;
  return i
}
function vS(r, e, t){
  if(r.byteLength!==16)throw new RangeError("Invalid system id");
  let s, n;
  s=0, n=new Uint8Array;
  let i;
  s>0?(i=new Uint8Array(4), e.length>0&&new DataView(i.buffer).setUint32(0, e.length, !1)):i=new Uint8Array;
  const a=new Uint8Array(4);
  return t.byteLength>0&&new DataView(a.buffer).setUint32(0, t.byteLength, !1), yS([112, 115, 115, 104], new Uint8Array([s,
  0, 0, 0]), r, i, n, a, t)
}
function xS(r){
  const e=[];
  if(r instanceof ArrayBuffer){
    const t=r.byteLength;
    let s=0;
    for(;
    s+32<t;
    ){
      const n=new DataView(r, s), i=ES(n);
      e.push(i), s+=i.size
    }

  }
  return e
}
function ES(r){
  const e=r.getUint32(0), t=r.byteOffset, s=r.byteLength;
  if(s<e)return{
    offset:t, size:s
  };
  if(r.getUint32(4)!==1886614376)return{
    offset:t, size:e
  };
  const i=r.getUint32(8)>>>24;
  if(i!==0&&i!==1)return{
    offset:t, size:e
  };
  const a=r.buffer, o=je(new Uint8Array(a, t+12, 16));
  let l=null, c=null, u=0;
  if(i===0)u=28;
  else{
    const h=r.getUint32(28);
    if(!h||s<32+h*16)return{
      offset:t, size:e
    };
    l=[];
    for(let f=0;
    f<h;
    f++)l.push(new Uint8Array(a, t+32+f*16, 16));
    u=32+h*16
  }
  if(!u)return{
    offset:t, size:e
  };
  const d=r.getUint32(u);
  return e-32<d?{
    offset:t, size:e
  }:(c=new Uint8Array(a, t+u+4, d), {
    version:i, systemId:o, kids:l, data:c, offset:t, size:e
  })
}
const qg=()=>/\(Windows.+Firefox\//i.test(navigator.userAgent), an={
  audio:{
    a3ds:1, "ac-3":.95, "ac-4":1, alac:.9, alaw:1, dra1:1, "dts+":1, "dts-":1, dtsc:1, dtse:1, dtsh:1, "ec-3":.9, enca:1,
    fLaC:.9, flac:.9, FLAC:.9, g719:1, g726:1, m4ae:1, mha1:1, mha2:1, mhm1:1, mhm2:1, mlpa:1, mp4a:1, "raw ":1, Opus:1, opus:1,
    samr:1, sawb:1, sawp:1, sevc:1, sqcp:1, ssmv:1, twos:1, ulaw:1
  }, video:{
    avc1:1, avc2:1, avc3:1, avc4:1, avcp:1, av01:.8, dav1:.8, drac:1, dva1:1, dvav:1, dvh1:.7, dvhe:.7, encv:1, hev1:.75,
    hvc1:.75, mjp2:1, mp4v:1, mvc1:1, mvc2:1, mvc3:1, mvc4:1, resv:1, rv60:1, s263:1, svc1:1, svc2:1, "vc-1":1, vp08:1, vp09:.9
  }, text:{
    stpp:1, wvtt:1
  }

};
function Yu(r, e){
  const t=an[e];
  return!!t&&!!t[r.slice(0, 4)]
}
function ai(r, e, t=!0){
  return!r.split(",").some(s=>!qu(s, e, t))
}
function qu(r, e, t=!0){
  var s;
  const n=Wr(t);
  return(s=n==null?void 0:n.isTypeSupported(oi(r, e)))!=null?s:!1
}
function oi(r, e){
  return`${e}/mp4;codecs=${r}`
}
function Kh(r){
  if(r){
    const e=r.substring(0, 4);
    return an.video[e]
  }
  return 2
}
function Xa(r){
  const e=qg();
  return r.split(",").reduce((t, s)=>{
    const i=e&&wo(s)?9:an.video[s];
    return i?(i*2+t)/(t?3:2):(an.audio[s]+t)/(t?2:1)
  }, 0)
}
const cl={

};
function SS(r, e=!0){
  if(cl[r])return cl[r];
  const t={
    flac:["flac", "fLaC", "FLAC"], opus:["opus", "Opus"], "mp4a.40.34":["mp3"]
  }
  [r];
  for(let n=0;
  n<t.length;
  n++){
    var s;
    if(qu(t[n], "audio", e))return cl[r]=t[n], t[n];
    if(t[n]==="mp3"&&(s=Wr(e))!=null&&s.isTypeSupported("audio/mpeg"))return""
  }
  return r
}
const TS=/flac|opus|mp4a\.40\.34/i;
function Za(r, e=!0){
  return r.replace(TS, t=>SS(t.toLowerCase(), e))
}
function IS(r, e){
  const t=[];
  if(r){
    const s=r.split(",");
    for(let n=0;
    n<s.length;
    n++)Yu(s[n], "video")||t.push(s[n])
  }
  return e&&t.push(e), t.join(",")
}
function va(r, e){
  if(r&&(r.length>4||["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(r)!==-1)&&(Hh(r, "audio")||Hh(r, "video")))return r;
  if(e){
    const t=e.split(",");
    if(t.length>1){
      if(r){
        for(let s=t.length;
        s--;
        )if(t[s].substring(0, 4)===r.substring(0, 4))return t[s]
      }
      return t[0]
    }

  }
  return e||r
}
function Hh(r, e){
  return Yu(r, e)&&qu(r, e)
}
function LS(r){
  const e=r.split(",");
  for(let t=0;
  t<e.length;
  t++){
    const s=e[t].split(".");
    s.length>2&&s[0]==="avc1"&&(e[t]=`avc1.${parseInt(s[1]).toString(16)}${("000"+parseInt(s[2]).toString(16)).slice(-4)}`)
  }
  return e.join(",")
}
function AS(r){
  if(r.startsWith("av01.")){
    const e=r.split("."), t=["0", "111", "01", "01", "01", "0"];
    for(let s=e.length;
    s>4&&s<10;
    s++)e[s]=t[s-4];
    return e.join(".")
  }
  return r
}
function Wh(r){
  const e=Wr(r)||{
    isTypeSupported:()=>!1
  };
  return{
    mpeg:e.isTypeSupported("audio/mpeg"), mp3:e.isTypeSupported('audio/mp4; codecs="mp3"'), ac3:e.isTypeSupported('audio/mp4; codecs="ac-3"')
  }

}
function bc(r){
  return r.replace(/^.+codecs=["']?([^"']+).*$/, "$1")
}
const RS={
  supported:!0, powerEfficient:!0, smooth:!0
}, wS={
  supported:!1, smooth:!1, powerEfficient:!1
}, Qg={
  supported:!0, configurations:[], decodingInfoResults:[RS]
};
function Xg(r, e){
  return{
    supported:!1, configurations:e, decodingInfoResults:[wS], error:r
  }

}
function bS(r, e, t, s, n, i){
  const a=r.videoCodec, o=r.audioCodec?r.audioGroups:null, l=i==null?void 0:i.audioCodec, c=i==null?void 0:i.channels, u=c?parseInt(c):l?1/0:2;
  let d=null;
  if(o!=null&&o.length)try{
    o.length===1&&o[0]?d=e.groups[o[0]].channels:d=o.reduce((h, f)=>{
      if(f){
        const g=e.groups[f];
        if(!g)throw new Error(`Audio track group ${f} not found`);
        Object.keys(g.channels).forEach(y=>{
          h[y]=(h[y]||0)+g.channels[y]
        })
      }
      return h
    }, {
      2:0
    })
  }
  catch{
    return!0
  }
  return a!==void 0&&(a.split(",").some(h=>wo(h))||r.width>1920&&r.height>1088||r.height>1920&&r.width>1088||r.frameRate>Math.max(s,
  30)||r.videoRange!=="SDR"&&r.videoRange!==t||r.bitrate>Math.max(n, 8e6))||!!d&&G(u)&&Object.keys(d).some(h=>parseInt(h)>u)
}
function Zg(r, e, t, s={

}){
  const n=r.videoCodec;
  if(!n&&!r.audioCodec||!t)return Promise.resolve(Qg);
  const i=[], a=_S(r), o=a.length, l=kS(r, e, o>0), c=l.length;
  for(let u=o||1*c||1;
  u--;
  ){
    const d={
      type:"media-source"
    };
    if(o&&(d.video=a[u%o]), c){
      d.audio=l[u%c];
      const h=d.audio.bitrate;
      d.video&&h&&(d.video.bitrate-=h)
    }
    i.push(d)
  }
  if(n){
    const u=navigator.userAgent;
    if(n.split(",").some(d=>wo(d))&&qg())return Promise.resolve(Xg(new Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent string: (${u})`),
    i))
  }
  return Promise.all(i.map(u=>{
    const d=DS(u);
    return s[d]||(s[d]=t.decodingInfo(u))
  })).then(u=>({
    supported:!u.some(d=>!d.supported), configurations:i, decodingInfoResults:u
  })).catch(u=>({
    supported:!1, configurations:i, decodingInfoResults:[], error:u
  }))
}
function _S(r){
  var e;
  const t=(e=r.videoCodec)==null?void 0:e.split(","), s=Jg(r), n=r.width||640, i=r.height||480, a=r.frameRate||30, o=r.videoRange.toLowerCase();
  return t?t.map(l=>{
    const c={
      contentType:oi(AS(l), "video"), width:n, height:i, bitrate:s, framerate:a
    };
    return o!=="sdr"&&(c.transferFunction=o), c
  }):[]
}
function kS(r, e, t){
  var s;
  const n=(s=r.audioCodec)==null?void 0:s.split(","), i=Jg(r);
  return n&&r.audioGroups?r.audioGroups.reduce((a, o)=>{
    var l;
    const c=o?(l=e.groups[o])==null?void 0:l.tracks:null;
    return c?c.reduce((u, d)=>{
      if(d.groupId===o){
        const h=parseFloat(d.channels||"");
        n.forEach(f=>{
          const g={
            contentType:oi(f, "audio"), bitrate:t?CS(f, i):i
          };
          h&&(g.channels=""+h), u.push(g)
        })
      }
      return u
    }, a):a
  }, []):[]
}
function CS(r, e){
  if(e<=1)return 1;
  let t=128e3;
  return r==="ec-3"?t=768e3:r==="ac-3"&&(t=64e4), Math.min(e/2, t)
}
function Jg(r){
  return Math.ceil(Math.max(r.bitrate*.9, r.averageBitrate)/1e3)*1e3||1
}
function DS(r){
  let e="";
  const{
    audio:t, video:s
  }
  =r;
  if(s){
    const n=bc(s.contentType);
    e+=`${n}_r${s.height}x${s.width}f${Math.ceil(s.framerate)}${s.transferFunction||"sd"}_${Math.ceil(s.bitrate/1e5)}`
  }
  if(t){
    const n=bc(t.contentType);
    e+=`${s?"_":""}${n}_c${t.channels}`
  }
  return e
}
const _c=["NONE", "TYPE-0", "TYPE-1", null];
function PS(r){
  return _c.indexOf(r)>-1
}
const Ja=["SDR", "PQ", "HLG"];
function NS(r){
  return!!r&&Ja.indexOf(r)>-1
}
var xa={
  No:"", Yes:"YES", v2:"v2"
};
function zh(r){
  const{
    canSkipUntil:e, canSkipDateRanges:t, age:s
  }
  =r, n=s<e/2;
  return e&&n?t?xa.v2:xa.Yes:xa.No
}
class Yh{
  constructor(e, t, s){
    this.msn=void 0, this.part=void 0, this.skip=void 0, this.msn=e, this.part=t, this.skip=s
  }
  addDirectives(e){
    const t=new self.URL(e);
    return this.msn!==void 0&&t.searchParams.set("_HLS_msn", this.msn.toString()), this.part!==void 0&&t.searchParams.set("_HLS_part",
    this.part.toString()), this.skip&&t.searchParams.set("_HLS_skip", this.skip), t.href
  }

}
class li{
  constructor(e){
    if(this._attrs=void 0, this.audioCodec=void 0, this.bitrate=void 0, this.codecSet=void 0, this.url=void 0, this.frameRate=void 0,
    this.height=void 0, this.id=void 0, this.name=void 0, this.supplemental=void 0, this.videoCodec=void 0, this.width=void 0,
    this.details=void 0, this.fragmentError=0, this.loadError=0, this.loaded=void 0, this.realBitrate=0, this.supportedPromise=void 0,
    this.supportedResult=void 0, this._avgBitrate=0, this._audioGroups=void 0, this._subtitleGroups=void 0, this._urlId=0,
    this.url=[e.url], this._attrs=[e.attrs], this.bitrate=e.bitrate, e.details&&(this.details=e.details), this.id=e.id||0,
    this.name=e.name, this.width=e.width||0, this.height=e.height||0, this.frameRate=e.attrs.optionalFloat("FRAME-RATE", 0),
    this._avgBitrate=e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec=e.audioCodec, this.videoCodec=e.videoCodec,
    this.codecSet=[e.videoCodec, e.audioCodec].filter(s=>!!s).map(s=>s.substring(0, 4)).join(","), "supplemental"in e){
      var t;
      this.supplemental=e.supplemental;
      const s=(t=e.supplemental)==null?void 0:t.videoCodec;
      s&&s!==e.videoCodec&&(this.codecSet+=`,${s.substring(0,4)}`)
    }
    this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES)
  }
  get maxBitrate(){
    return Math.max(this.realBitrate, this.bitrate)
  }
  get averageBitrate(){
    return this._avgBitrate||this.realBitrate||this.bitrate
  }
  get attrs(){
    return this._attrs[0]
  }
  get codecs(){
    return this.attrs.CODECS||""
  }
  get pathwayId(){
    return this.attrs["PATHWAY-ID"]||"."
  }
  get videoRange(){
    return this.attrs["VIDEO-RANGE"]||"SDR"
  }
  get score(){
    return this.attrs.optionalFloat("SCORE", 0)
  }
  get uri(){
    return this.url[0]||""
  }
  hasAudioGroup(e){
    return qh(this._audioGroups, e)
  }
  hasSubtitleGroup(e){
    return qh(this._subtitleGroups, e)
  }
  get audioGroups(){
    return this._audioGroups
  }
  get subtitleGroups(){
    return this._subtitleGroups
  }
  addGroupId(e, t){
    if(t){
      if(e==="audio"){
        let s=this._audioGroups;
        s||(s=this._audioGroups=[]), s.indexOf(t)===-1&&s.push(t)
      }
      else if(e==="text"){
        let s=this._subtitleGroups;
        s||(s=this._subtitleGroups=[]), s.indexOf(t)===-1&&s.push(t)
      }

    }

  }
  get urlId(){
    return 0
  }
  set urlId(e){

  }
  get audioGroupIds(){
    return this.audioGroups?[this.audioGroupId]:void 0
  }
  get textGroupIds(){
    return this.subtitleGroups?[this.textGroupId]:void 0
  }
  get audioGroupId(){
    var e;
    return(e=this.audioGroups)==null?void 0:e[0]
  }
  get textGroupId(){
    var e;
    return(e=this.subtitleGroups)==null?void 0:e[0]
  }
  addFallback(){

  }

}
function qh(r, e){
  return!e||!r?!1:r.indexOf(e)!==-1
}
function OS(){
  if(typeof matchMedia=="function"){
    const r=matchMedia("(dynamic-range: high)"), e=matchMedia("bad query");
    if(r.media!==e.media)return r.matches===!0
  }
  return!1
}
function MS(r, e){
  let t=!1, s=[];
  if(r&&(t=r!=="SDR", s=[r]), e){
    s=e.allowedVideoRanges||Ja.slice(0);
    const n=s.join("")!=="SDR"&&!e.videoCodec;
    t=e.preferHDR!==void 0?e.preferHDR:n&&OS(), t||(s=["SDR"])
  }
  return{
    preferHDR:t, allowedVideoRanges:s
  }

}
const FS=r=>{
  const e=new WeakSet;
  return(t, s)=>{
    if(r&&(s=r(t, s)), typeof s=="object"&&s!==null){
      if(e.has(s))return;
      e.add(s)
    }
    return s
  }

}, me=(r, e)=>JSON.stringify(r, FS(e));
function US(r, e, t, s, n){
  const i=Object.keys(r), a=s==null?void 0:s.channels, o=s==null?void 0:s.audioCodec, l=n==null?void 0:n.videoCodec, c=a&&parseInt(a)===2;
  let u=!1, d=!1, h=1/0, f=1/0, g=1/0, y=1/0, x=0, p=[];
  const{
    preferHDR:v, allowedVideoRanges:E
  }
  =MS(e, n);
  for(let A=i.length;
  A--;
  ){
    const w=r[i[A]];
    u||(u=w.channels[2]>0), h=Math.min(h, w.minHeight), f=Math.min(f, w.minFramerate), g=Math.min(g, w.minBitrate), E.filter(D=>w.videoRanges[D]>0).length>0&&(d=!0)
  }
  h=G(h)?h:0, f=G(f)?f:0;
  const T=Math.max(1080, h), I=Math.max(30, f);
  g=G(g)?g:t, t=Math.max(g, t), d||(e=void 0);
  const b=i.length>1;
  return{
    codecSet:i.reduce((A, w)=>{
      const R=r[w];
      if(w===A)return A;
      if(p=d?E.filter(D=>R.videoRanges[D]>0):[], b){
        if(R.minBitrate>t)return Ht(w, `min bitrate of ${R.minBitrate} > current estimate of ${t}`), A;
        if(!R.hasDefaultAudio)return Ht(w, "no renditions with default or auto-select sound found"), A;
        if(o&&w.indexOf(o.substring(0, 4))%5!==0)return Ht(w, `audio codec preference "${o}" not found`), A;
        if(a&&!c){
          if(!R.channels[a])return Ht(w, `no renditions with ${a} channel sound found (channels options: ${Object.keys(R.channels)})`),
          A
        }
        else if((!o||c)&&u&&R.channels[2]===0)return Ht(w, "no renditions with stereo sound found"), A;
        if(R.minHeight>T)return Ht(w, `min resolution of ${R.minHeight} > maximum of ${T}`), A;
        if(R.minFramerate>I)return Ht(w, `min framerate of ${R.minFramerate} > maximum of ${I}`), A;
        if(!p.some(D=>R.videoRanges[D]>0))return Ht(w, `no variants with VIDEO-RANGE of ${me(p)} found`), A;
        if(l&&w.indexOf(l.substring(0, 4))%5!==0)return Ht(w, `video codec preference "${l}" not found`), A;
        if(R.maxScore<x)return Ht(w, `max score of ${R.maxScore} < selected max of ${x}`), A
      }
      return A&&(Xa(w)>=Xa(A)||R.fragmentError>r[A].fragmentError)?A:(y=R.minIndex, x=R.maxScore, w)
    }, void 0), videoRanges:p, preferHDR:v, minFramerate:f, minBitrate:g, minIndex:y
  }

}
function Ht(r, e){
  ue.log(`[abr] start candidates with "${r}" ignored because ${e}`)
}
function ep(r){
  return r.reduce((e, t)=>{
    let s=e.groups[t.groupId];
    s||(s=e.groups[t.groupId]={
      tracks:[], channels:{
        2:0
      }, hasDefault:!1, hasAutoSelect:!1
    }), s.tracks.push(t);
    const n=t.channels||"2";
    return s.channels[n]=(s.channels[n]||0)+1, s.hasDefault=s.hasDefault||t.default, s.hasAutoSelect=s.hasAutoSelect||t.autoselect,
    s.hasDefault&&(e.hasDefaultAudio=!0), s.hasAutoSelect&&(e.hasAutoSelectAudio=!0), e
  }, {
    hasDefaultAudio:!1, hasAutoSelectAudio:!1, groups:{

    }

  })
}
function $S(r, e, t, s){
  return r.slice(t, s+1).reduce((n, i, a)=>{
    if(!i.codecSet)return n;
    const o=i.audioGroups;
    let l=n[i.codecSet];
    l||(n[i.codecSet]=l={
      minBitrate:1/0, minHeight:1/0, minFramerate:1/0, minIndex:a, maxScore:0, videoRanges:{
        SDR:0
      }, channels:{
        2:0
      }, hasDefaultAudio:!o, fragmentError:0
    }), l.minBitrate=Math.min(l.minBitrate, i.bitrate);
    const c=Math.min(i.height, i.width);
    return l.minHeight=Math.min(l.minHeight, c), l.minFramerate=Math.min(l.minFramerate, i.frameRate), l.minIndex=Math.min(l.minIndex,
    a), l.maxScore=Math.max(l.maxScore, i.score), l.fragmentError+=i.fragmentError, l.videoRanges[i.videoRange]=(l.videoRanges[i.videoRange]||0)+1,
    o&&o.forEach(u=>{
      if(!u)return;
      const d=e.groups[u];
      d&&(l.hasDefaultAudio=l.hasDefaultAudio||e.hasDefaultAudio?d.hasDefault:d.hasAutoSelect||!e.hasDefaultAudio&&!e.hasAutoSelectAudio,
      Object.keys(d.channels).forEach(h=>{
        l.channels[h]=(l.channels[h]||0)+d.channels[h]
      }))
    }), n
  }, {

  })
}
function Qh(r){
  if(!r)return r;
  const{
    lang:e, assocLang:t, characteristics:s, channels:n, audioCodec:i
  }
  =r;
  return{
    lang:e, assocLang:t, characteristics:s, channels:n, audioCodec:i
  }

}
function Xt(r, e, t){
  if("attrs"in r){
    const s=e.indexOf(r);
    if(s!==-1)return s
  }
  for(let s=0;
  s<e.length;
  s++){
    const n=e[s];
    if(us(r, n, t))return s
  }
  return-1
}
function us(r, e, t){
  const{
    groupId:s, name:n, lang:i, assocLang:a, default:o
  }
  =r, l=r.forced;
  return(s===void 0||e.groupId===s)&&(n===void 0||e.name===n)&&(i===void 0||BS(i, e.lang))&&(i===void 0||e.assocLang===a)&&(o===void 0||e.default===o)&&(l===void 0||e.forced===l)&&(!("characteristics"in r)
  ||jS(r.characteristics||"", e.characteristics))&&(t===void 0||t(r, e))
}
function BS(r, e="--"){
  return r.length===e.length?r===e:r.startsWith(e)||e.startsWith(r)
}
function jS(r, e=""){
  const t=r.split(","), s=e.split(",");
  return t.length===s.length&&!t.some(n=>s.indexOf(n)===-1)
}
function ns(r, e){
  const{
    audioCodec:t, channels:s
  }
  =r;
  return(t===void 0||(e.audioCodec||"").substring(0, 4)===t.substring(0, 4))&&(s===void 0||s===(e.channels||"2"))
}
function GS(r, e, t, s, n){
  const i=e[s], o=e.reduce((h, f, g)=>{
    const y=f.uri;
    return(h[y]||(h[y]=[])).push(g), h
  }, {

  })[i.uri];
  o.length>1&&(s=Math.max.apply(Math, o));
  const l=i.videoRange, c=i.frameRate, u=i.codecSet.substring(0, 4), d=Xh(e, s, h=>{
    if(h.videoRange!==l||h.frameRate!==c||h.codecSet.substring(0, 4)!==u)return!1;
    const f=h.audioGroups, g=t.filter(y=>!f||f.indexOf(y.groupId)!==-1);
    return Xt(r, g, n)>-1
  });
  return d>-1?d:Xh(e, s, h=>{
    const f=h.audioGroups, g=t.filter(y=>!f||f.indexOf(y.groupId)!==-1);
    return Xt(r, g, n)>-1
  })
}
function Xh(r, e, t){
  for(let s=e;
  s>-1;
  s--)if(t(r[s]))return s;
  for(let s=e+1;
  s<r.length;
  s++)if(t(r[s]))return s;
  return-1
}
function eo(r, e){
  var t;
  return!!r&&r!==((t=e.loadLevelObj)==null?void 0:t.uri)
}
class VS extends Ct{
  constructor(e){
    super("abr", e.logger), this.hls=void 0, this.lastLevelLoadSec=0, this.lastLoadedFragLevel=-1, this.firstSelection=-1,
    this._nextAutoLevel=-1, this.nextAutoLevelKey="", this.audioTracksByGroup=null, this.codecTiers=null, this.timer=-1, this.fragCurrent=null,
    this.partCurrent=null, this.bitrateTestDelay=0, this.rebufferNotice=-1, this.supportedCache={

    }, this.bwEstimator=void 0, this._abandonRulesCheck=t=>{
      var s;
      const{
        fragCurrent:n, partCurrent:i, hls:a
      }
      =this, {
        autoLevelEnabled:o, media:l
      }
      =a;
      if(!n||!l)return;
      const c=performance.now(), u=i?i.stats:n.stats, d=i?i.duration:n.duration, h=c-u.loading.start, f=a.minAutoLevel, g=n.level,
      y=this._nextAutoLevel;
      if(u.aborted||u.loaded&&u.loaded===u.total||g<=f){
        this.clearTimer(), this._nextAutoLevel=-1;
        return
      }
      if(!o)return;
      const x=y>-1&&y!==g, p=!!t||x;
      if(!p&&(l.paused||!l.playbackRate||!l.readyState))return;
      const v=a.mainForwardBufferInfo;
      if(!p&&v===null)return;
      const E=this.bwEstimator.getEstimateTTFB(), T=Math.abs(l.playbackRate);
      if(h<=Math.max(E, 1e3*(d/(T*2))))return;
      const I=v?v.len/T:0, b=u.loading.first?u.loading.first-u.loading.start:-1, L=u.loaded&&b>-1, A=this.getBwEstimate(),
      w=a.levels, R=w[g], D=Math.max(u.loaded, Math.round(d*(n.bitrate||R.averageBitrate)/8));
      let $=L?h-b:h;
      $<1&&L&&($=Math.min(h, u.loaded*8/A));
      const V=L?u.loaded*1e3/$:0, Y=E/1e3, K=V?(D-u.loaded)/V:D*8/A+Y;
      if(K<=I)return;
      const B=V?V*8:A, H=((s=(t==null?void 0:t.details)||this.hls.latestLevelDetails)==null?void 0:s.live)===!0, P=this.hls.config.abrBandWidthUpFactor;
      let O=Number.POSITIVE_INFINITY, j;
      for(j=g-1;
      j>f;
      j--){
        const se=w[j].maxBitrate, J=!w[j].details||H;
        if(O=this.getTimeToLoadFrag(Y, B, d*se, J), O<Math.min(I, d+Y))break
      }
      if(O>=K||O>d*10)return;
      L?this.bwEstimator.sample(h-Math.min(E, b), u.loaded):this.bwEstimator.sampleTTFB(h);
      const M=w[j].maxBitrate;
      this.getBwEstimate()*P>M&&this.resetEstimator(M);
      const F=this.findBestLevel(M, f, j, 0, I, 1, 1);
      F>-1&&(j=F), this.warn(`Fragment ${n.sn}${i?" part "+i.index:""} of level ${g} is loading too slowly;
      Fragment duration: ${n.duration.toFixed(3)}
      Time to underbuffer: ${I.toFixed(3)} s
      Estimated load time for current fragment: ${K.toFixed(3)} s
      Estimated load time for down switch fragment: ${O.toFixed(3)} s
      TTFB estimate: ${b|0} ms
      Current BW estimate: ${G(A)?A|0:"Unknown"} bps
      New BW estimate: ${this.getBwEstimate()|0} bps
      Switching to level ${j} @ ${M|0} bps`), a.nextLoadLevel=a.nextAutoLevel=j, this.clearTimer();
      const X=()=>{
        if(this.clearTimer(), this.fragCurrent===n&&this.hls.loadLevel===j&&j>0){
          const se=this.getStarvationDelay();
          if(this.warn(`Aborting inflight request ${j>0?"and switching down":""}
      Fragment duration: ${n.duration.toFixed(3)} s
      Time to underbuffer: ${se.toFixed(3)} s`), n.abortRequests(), this.fragCurrent=this.partCurrent=null, j>f){
            let J=this.findBestLevel(this.hls.levels[f].bitrate, f, j, 0, se, 1, 1);
            J===-1&&(J=f), this.hls.nextLoadLevel=this.hls.nextAutoLevel=J, this.resetEstimator(this.hls.levels[J].bitrate)
          }

        }

      };
      x||K>O*2?X():this.timer=self.setInterval(X, O*1e3), a.trigger(S.FRAG_LOAD_EMERGENCY_ABORTED, {
        frag:n, part:i, stats:u
      })
    }, this.hls=e, this.bwEstimator=this.initEstimator(), this.registerListeners()
  }
  resetEstimator(e){
    e&&(this.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate=e), this.firstSelection=-1, this.bwEstimator=this.initEstimator()
  }
  initEstimator(){
    const e=this.hls.config;
    return new YE(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate)
  }
  registerListeners(){
    const{
      hls:e
    }
    =this;
    e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.FRAG_LOADING, this.onFragLoading, this), e.on(S.FRAG_LOADED,
    this.onFragLoaded, this), e.on(S.FRAG_BUFFERED, this.onFragBuffered, this), e.on(S.LEVEL_SWITCHING, this.onLevelSwitching,
    this), e.on(S.LEVEL_LOADED, this.onLevelLoaded, this), e.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(S.MAX_AUTO_LEVEL_UPDATED,
    this.onMaxAutoLevelUpdated, this), e.on(S.ERROR, this.onError, this)
  }
  unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e&&(e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.FRAG_LOADING, this.onFragLoading, this), e.off(S.FRAG_LOADED,
    this.onFragLoaded, this), e.off(S.FRAG_BUFFERED, this.onFragBuffered, this), e.off(S.LEVEL_SWITCHING, this.onLevelSwitching,
    this), e.off(S.LEVEL_LOADED, this.onLevelLoaded, this), e.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(S.MAX_AUTO_LEVEL_UPDATED,
    this.onMaxAutoLevelUpdated, this), e.off(S.ERROR, this.onError, this))
  }
  destroy(){
    this.unregisterListeners(), this.clearTimer(), this.hls=this._abandonRulesCheck=this.supportedCache=null, this.fragCurrent=this.partCurrent=null
  }
  onManifestLoading(e, t){
    this.lastLoadedFragLevel=-1, this.firstSelection=-1, this.lastLevelLoadSec=0, this.supportedCache={

    }, this.fragCurrent=this.partCurrent=null, this.onLevelsUpdated(), this.clearTimer()
  }
  onLevelsUpdated(){
    this.lastLoadedFragLevel>-1&&this.fragCurrent&&(this.lastLoadedFragLevel=this.fragCurrent.level), this._nextAutoLevel=-1,
    this.onMaxAutoLevelUpdated(), this.codecTiers=null, this.audioTracksByGroup=null
  }
  onMaxAutoLevelUpdated(){
    this.firstSelection=-1, this.nextAutoLevelKey=""
  }
  onFragLoading(e, t){
    const s=t.frag;
    if(!this.ignoreFragment(s)){
      if(!s.bitrateTest){
        var n;
        this.fragCurrent=s, this.partCurrent=(n=t.part)!=null?n:null
      }
      this.clearTimer(), this.timer=self.setInterval(this._abandonRulesCheck, 100)
    }

  }
  onLevelSwitching(e, t){
    this.clearTimer()
  }
  onError(e, t){
    if(!t.fatal)switch(t.details){
      case k.BUFFER_ADD_CODEC_ERROR:case k.BUFFER_APPEND_ERROR:this.lastLoadedFragLevel=-1, this.firstSelection=-1;
      break;
      case k.FRAG_LOAD_TIMEOUT:{
        const s=t.frag, {
          fragCurrent:n, partCurrent:i
        }
        =this;
        if(s&&n&&s.sn===n.sn&&s.level===n.level){
          const a=performance.now(), o=i?i.stats:s.stats, l=a-o.loading.start, c=o.loading.first?o.loading.first-o.loading.start:-1;
          if(o.loaded&&c>-1){
            const d=this.bwEstimator.getEstimateTTFB();
            this.bwEstimator.sample(l-Math.min(d, c), o.loaded)
          }
          else this.bwEstimator.sampleTTFB(l)
        }
        break
      }

    }

  }
  getTimeToLoadFrag(e, t, s, n){
    const i=e+s/t, a=n?e+this.lastLevelLoadSec:0;
    return i+a
  }
  onLevelLoaded(e, t){
    const s=this.hls.config, {
      loading:n
    }
    =t.stats, i=n.end-n.first;
    G(i)&&(this.lastLevelLoadSec=i/1e3), t.details.live?this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive):this.bwEstimator.update(s.abrEwmaSlowVoD,
    s.abrEwmaFastVoD), this.timer>-1&&this._abandonRulesCheck(t.levelInfo)
  }
  onFragLoaded(e, {
    frag:t, part:s
  }){
    const n=s?s.stats:t.stats;
    if(t.type===W.MAIN&&this.bwEstimator.sampleTTFB(n.loading.first-n.loading.start), !this.ignoreFragment(t)){
      if(this.clearTimer(), t.level===this._nextAutoLevel&&(this._nextAutoLevel=-1), this.firstSelection=-1, this.hls.config.abrMaxWithRealBitrate){
        const i=s?s.duration:t.duration, a=this.hls.levels[t.level], o=(a.loaded?a.loaded.bytes:0)+n.loaded, l=(a.loaded?a.loaded.duration:0)+i;
        a.loaded={
          bytes:o, duration:l
        }, a.realBitrate=Math.round(8*o/l)
      }
      if(t.bitrateTest){
        const i={
          stats:n, frag:t, part:s, id:t.type
        };
        this.onFragBuffered(S.FRAG_BUFFERED, i), t.bitrateTest=!1
      }
      else this.lastLoadedFragLevel=t.level
    }

  }
  onFragBuffered(e, t){
    const{
      frag:s, part:n
    }
    =t, i=n!=null&&n.stats.loaded?n.stats:s.stats;
    if(i.aborted||this.ignoreFragment(s))return;
    const a=i.parsing.end-i.loading.start-Math.min(i.loading.first-i.loading.start, this.bwEstimator.getEstimateTTFB());
    this.bwEstimator.sample(a, i.loaded), i.bwEstimate=this.getBwEstimate(), s.bitrateTest?this.bitrateTestDelay=a/1e3:this.bitrateTestDelay=0
  }
  ignoreFragment(e){
    return e.type!==W.MAIN||e.sn==="initSegment"
  }
  clearTimer(){
    this.timer>-1&&(self.clearInterval(this.timer), this.timer=-1)
  }
  get firstAutoLevel(){
    const{
      maxAutoLevel:e, minAutoLevel:t
    }
    =this.hls, s=this.getBwEstimate(), n=this.hls.config.maxStarvationDelay, i=this.findBestLevel(s, t, e, 0, n, 1, 1);
    if(i>-1)return i;
    const a=this.hls.firstLevel, o=Math.min(Math.max(a, t), e);
    return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${o}`), o
  }
  get forcedAutoLevel(){
    return this.nextAutoLevelKey?-1:this._nextAutoLevel
  }
  get nextAutoLevel(){
    const e=this.forcedAutoLevel, s=this.bwEstimator.canEstimate(), n=this.lastLoadedFragLevel>-1;
    if(e!==-1&&(!s||!n||this.nextAutoLevelKey===this.getAutoLevelKey()))return e;
    const i=s&&n?this.getNextABRAutoLevel():this.firstAutoLevel;
    if(e!==-1){
      const a=this.hls.levels;
      if(a.length>Math.max(e, i)&&a[e].loadError<=a[i].loadError)return e
    }
    return this._nextAutoLevel=i, this.nextAutoLevelKey=this.getAutoLevelKey(), i
  }
  getAutoLevelKey(){
    return`${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`
  }
  getNextABRAutoLevel(){
    const{
      fragCurrent:e, partCurrent:t, hls:s
    }
    =this;
    if(s.levels.length<=1)return s.loadLevel;
    const{
      maxAutoLevel:n, config:i, minAutoLevel:a
    }
    =s, o=t?t.duration:e?e.duration:0, l=this.getBwEstimate(), c=this.getStarvationDelay();
    let u=i.abrBandWidthFactor, d=i.abrBandWidthUpFactor;
    if(c){
      const x=this.findBestLevel(l, a, n, c, 0, u, d);
      if(x>=0)return this.rebufferNotice=-1, x
    }
    let h=o?Math.min(o, i.maxStarvationDelay):i.maxStarvationDelay;
    if(!c){
      const x=this.bitrateTestDelay;
      x&&(h=(o?Math.min(o, i.maxLoadingDelay):i.maxLoadingDelay)-x, this.info(`bitrate test took ${Math.round(1e3*x)}ms, set first fragment max fetchDuration to ${Math.round(1e3*h)} ms`)
      , u=d=1)
    }
    const f=this.findBestLevel(l, a, n, c, h, u, d);
    if(this.rebufferNotice!==f&&(this.rebufferNotice=f, this.info(`${c?"rebuffering expected":"buffer is empty"}, optimal quality level ${f}`)),
    f>-1)return f;
    const g=s.levels[a], y=s.loadLevelObj;
    return y&&(g==null?void 0:g.bitrate)<y.bitrate?a:s.loadLevel
  }
  getStarvationDelay(){
    const e=this.hls, t=e.media;
    if(!t)return 1/0;
    const s=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1, n=e.mainForwardBufferInfo;
    return(n?n.len:0)/s
  }
  getBwEstimate(){
    return this.bwEstimator.canEstimate()?this.bwEstimator.getEstimate():this.hls.config.abrEwmaDefaultEstimate
  }
  findBestLevel(e, t, s, n, i, a, o){
    var l;
    const c=n+i, u=this.lastLoadedFragLevel, d=u===-1?this.hls.firstLevel:u, {
      fragCurrent:h, partCurrent:f
    }
    =this, {
      levels:g, allAudioTracks:y, loadLevel:x, config:p
    }
    =this.hls;
    if(g.length===1)return 0;
    const v=g[d], E=!!((l=this.hls.latestLevelDetails)!=null&&l.live), T=x===-1||u===-1;
    let I, b="SDR", L=(v==null?void 0:v.frameRate)||0;
    const{
      audioPreference:A, videoPreference:w
    }
    =p, R=this.audioTracksByGroup||(this.audioTracksByGroup=ep(y));
    let D=-1;
    if(T){
      if(this.firstSelection!==-1)return this.firstSelection;
      const B=this.codecTiers||(this.codecTiers=$S(g, R, t, s)), H=US(B, b, e, A, w), {
        codecSet:P, videoRanges:O, minFramerate:j, minBitrate:M, minIndex:F, preferHDR:X
      }
      =H;
      D=F, I=P, b=X?O[O.length-1]:O[0], L=j, e=Math.max(e, M), this.log(`picked start tier ${me(H)}`)
    }
    else I=v==null?void 0:v.codecSet, b=v==null?void 0:v.videoRange;
    const $=f?f.duration:h?h.duration:0, V=this.bwEstimator.getEstimateTTFB()/1e3, Y=[];
    for(let B=s;
    B>=t;
    B--){
      var K;
      const H=g[B], P=B>d;
      if(!H)continue;
      if(p.useMediaCapabilities&&!H.supportedResult&&!H.supportedPromise){
        const J=navigator.mediaCapabilities;
        typeof(J==null?void 0:J.decodingInfo)=="function"&&bS(H, R, b, L, e, A)?(H.supportedPromise=Zg(H, R, J, this.supportedCache),
        H.supportedPromise.then(ee=>{
          if(!this.hls)return;
          H.supportedResult=ee;
          const we=this.hls.levels, Ue=we.indexOf(H);
          ee.error?this.warn(`MediaCapabilities decodingInfo error: "${ee.error}" for level ${Ue} ${me(ee)}`):ee.supported?ee.decodingInfoResults.some(St=>St.smooth===!1||St.powerEfficient===!1)
          &&this.log(`MediaCapabilities decodingInfo for level ${Ue} not smooth or powerEfficient: ${me(ee)}`):(this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${Ue} ${me(ee)}`)
          , Ue>-1&&we.length>1&&(this.log(`Removing unsupported level ${Ue}`), this.hls.removeLevel(Ue), this.hls.loadLevel===-1&&(this.hls.nextLoadLevel=0)))
        }).catch(ee=>{
          this.warn(`Error handling MediaCapabilities decodingInfo: ${ee}`)
        })):H.supportedResult=Qg
      }
      if((I&&H.codecSet!==I||b&&H.videoRange!==b||P&&L>H.frameRate||!P&&L>0&&L<H.frameRate||(K=H.supportedResult)!=null&&(K=K.decodingInfoResults)!=null&&K.some(J=>J.smooth===!1))&&(!T||B!==D)
      ){
        Y.push(B);
        continue
      }
      const O=H.details, j=(f?O==null?void 0:O.partTarget:O==null?void 0:O.averagetargetduration)||$;
      let M;
      P?M=o*e:M=a*e;
      const F=$&&n>=$*2&&i===0?H.averageBitrate:H.maxBitrate, X=this.getTimeToLoadFrag(V, M, F*j, O===void 0);
      if(M>=F&&(B===u||H.loadError===0&&H.fragmentError===0)&&(X<=V||!G(X)||E&&!this.bitrateTestDelay||X<c)){
        const J=this.forcedAutoLevel;
        return B!==x&&(J===-1||J!==x)&&(Y.length&&this.trace(`Skipped level(s) ${Y.join(",")} of ${s} max with CODECS and VIDEO-RANGE:"${g[Y[0]].codecs}" ${g[Y[0]].videoRange}; not compatible with "${I}" ${b}`)
        , this.info(`switch candidate:${d}->${B} adjustedbw(${Math.round(M)})-bitrate=${Math.round(M-F)} ttfb:${V.toFixed(1)} avgDuration:${j.toFixed(1)} maxFetchDuration:${c.toFixed(1)} fetchDuration:${X.toFixed(1)} firstSelection:${T} codecSet:${H.codecSet} videoRange:${H.videoRange} hls.loadLevel:${x}`)
        ), T&&(this.firstSelection=B), B
      }

    }
    return-1
  }
  set nextAutoLevel(e){
    const t=this.deriveNextAutoLevel(e);
    this._nextAutoLevel!==t&&(this.nextAutoLevelKey="", this._nextAutoLevel=t)
  }
  deriveNextAutoLevel(e){
    const{
      maxAutoLevel:t, minAutoLevel:s
    }
    =this.hls;
    return Math.min(Math.max(e, s), t)
  }

}
const tp={
  search:function(r, e){
    let t=0, s=r.length-1, n=null, i=null;
    for(;
    t<=s;
    ){
      n=(t+s)/2|0, i=r[n];
      const a=e(i);
      if(a>0)t=n+1;
      else if(a<0)s=n-1;
      else return i
    }
    return null
  }

};
function KS(r, e, t){
  if(e===null||!Array.isArray(r)||!r.length||!G(e))return null;
  const s=r[0].programDateTime;
  if(e<(s||0))return null;
  const n=r[r.length-1].endProgramDateTime;
  if(e>=(n||0))return null;
  for(let i=0;
  i<r.length;
  ++i){
    const a=r[i];
    if(WS(e, t, a))return a
  }
  return null
}
function ps(r, e, t=0, s=0, n=.005){
  let i=null;
  if(r){
    i=e[1+r.sn-e[0].sn]||null;
    const o=r.endDTS-t;
    o>0&&o<15e-7&&(t+=15e-7), i&&r.level!==i.level&&i.end<=r.end&&(i=e[2+r.sn-e[0].sn]||null)
  }
  else t===0&&e[0].start===0&&(i=e[0]);
  if(i&&((!r||r.level===i.level)&&Zh(t, s, i)===0||HS(i, r, Math.min(n, s))))return i;
  const a=tp.search(e, Zh.bind(null, t, s));
  return a&&(a!==r||!i)?a:i
}
function HS(r, e, t){
  if(e&&e.start===0&&e.level<r.level&&(e.endPTS||0)>0){
    const s=e.tagList.reduce((n, i)=>(i[0]==="INF"&&(n+=parseFloat(i[1])), n), t);
    return r.start<=s
  }
  return!1
}
function Zh(r=0, e=0, t){
  if(t.start<=r&&t.start+t.duration>r)return 0;
  const s=Math.min(e, t.duration+(t.deltaPTS?t.deltaPTS:0));
  return t.start+t.duration-s<=r?1:t.start-s>r&&t.start?-1:0
}
function WS(r, e, t){
  const s=Math.min(e, t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;
  return(t.endProgramDateTime||0)-s>r
}
function rp(r, e, t){
  if(r&&r.startCC<=e&&r.endCC>=e){
    let s=r.fragments;
    const{
      fragmentHint:n
    }
    =r;
    n&&(s=s.concat(n));
    let i;
    return tp.search(s, a=>a.cc<e?1:a.cc>e?-1:(i=a, a.end<=t?1:a.start>t?-1:0)), i||null
  }
  return null
}
function to(r){
  switch(r.details){
    case k.FRAG_LOAD_TIMEOUT:case k.KEY_LOAD_TIMEOUT:case k.LEVEL_LOAD_TIMEOUT:case k.MANIFEST_LOAD_TIMEOUT:return!0
  }
  return!1
}
function sp(r){
  return r.details.startsWith("key")
}
function np(r){
  return sp(r)&&!!r.frag&&!r.frag.decryptdata
}
function Jh(r, e){
  const t=to(e);
  return r.default[`${t?"timeout":"error"}Retry`]
}
function Qu(r, e){
  const t=r.backoff==="linear"?1:Math.pow(2, e);
  return Math.min(t*r.retryDelayMs, r.maxRetryDelayMs)
}
function ef(r){
  return ce(ce({

  }, r), {
    errorRetry:null, timeoutRetry:null
  })
}
function ro(r, e, t, s){
  if(!r)return!1;
  const n=s==null?void 0:s.code, i=e<r.maxNumRetry&&(zS(n)||!!t);
  return r.shouldRetry?r.shouldRetry(r, e, t, s, i):i
}
function zS(r){
  return kc(r)||!!r&&(r<400||r>499)
}
function kc(r){
  return r===0&&navigator.onLine===!1
}
var Be={
  DoNothing:0, SendEndCallback:1, SendAlternateToPenaltyBox:2, RemoveAlternatePermanently:3, InsertDiscontinuity:4, RetryRequest:5
}, ut={
  None:0, MoveAllAlternatesMatchingHost:1, MoveAllAlternatesMatchingHDCP:2, MoveAllAlternatesMatchingKey:4, SwitchToSDR:8
};
class YS extends Ct{
  constructor(e){
    super("error-controller", e.logger), this.hls=void 0, this.playlistError=0, this.hls=e, this.registerListeners()
  }
  registerListeners(){
    const e=this.hls;
    e.on(S.ERROR, this.onError, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.LEVEL_UPDATED, this.onLevelUpdated,
    this)
  }
  unregisterListeners(){
    const e=this.hls;
    e&&(e.off(S.ERROR, this.onError, this), e.off(S.ERROR, this.onErrorOut, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading,
    this), e.off(S.LEVEL_UPDATED, this.onLevelUpdated, this))
  }
  destroy(){
    this.unregisterListeners(), this.hls=null
  }
  startLoad(e){

  }
  stopLoad(){
    this.playlistError=0
  }
  getVariantLevelIndex(e){
    return(e==null?void 0:e.type)===W.MAIN?e.level:this.getVariantIndex()
  }
  getVariantIndex(){
    var e;
    const t=this.hls, s=t.currentLevel;
    return(e=t.loadLevelObj)!=null&&e.details||s===-1?t.loadLevel:s
  }
  variantHasKey(e, t){
    if(e){
      var s;
      if((s=e.details)!=null&&s.hasKey(t))return!0;
      const n=e.audioGroups;
      if(n)return this.hls.allAudioTracks.filter(a=>n.indexOf(a.groupId)>=0).some(a=>{
        var o;
        return(o=a.details)==null?void 0:o.hasKey(t)
      })
    }
    return!1
  }
  onManifestLoading(){
    this.playlistError=0
  }
  onLevelUpdated(){
    this.playlistError=0
  }
  onError(e, t){
    var s;
    if(t.fatal)return;
    const n=this.hls, i=t.context;
    switch(t.details){
      case k.FRAG_LOAD_ERROR:case k.FRAG_LOAD_TIMEOUT:case k.KEY_LOAD_ERROR:case k.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);
      return;
      case k.FRAG_PARSING_ERROR:if((s=t.frag)!=null&&s.gap){
        t.errorAction=Ys();
        return
      }
      case k.FRAG_GAP:case k.FRAG_DECRYPT_ERROR:{
        t.errorAction=this.getFragRetryOrSwitchAction(t), t.errorAction.action=Be.SendAlternateToPenaltyBox;
        return
      }
      case k.LEVEL_EMPTY_ERROR:case k.LEVEL_PARSING_ERROR:{
        var a;
        const l=t.parent===W.MAIN?t.level:n.loadLevel;
        t.details===k.LEVEL_EMPTY_ERROR&&((a=t.context)!=null&&(a=a.levelDetails)!=null&&a.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,
        l):(t.levelRetry=!1, t.errorAction=this.getLevelSwitchAction(t, l))
      }
      return;
      case k.LEVEL_LOAD_ERROR:case k.LEVEL_LOAD_TIMEOUT:typeof(i==null?void 0:i.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,
      i.level));
      return;
      case k.AUDIO_TRACK_LOAD_ERROR:case k.AUDIO_TRACK_LOAD_TIMEOUT:case k.SUBTITLE_LOAD_ERROR:case k.SUBTITLE_TRACK_LOAD_TIMEOUT:if(i){
        const l=n.loadLevelObj;
        if(l&&(i.type===ne.AUDIO_TRACK&&l.hasAudioGroup(i.groupId)||i.type===ne.SUBTITLE_TRACK&&l.hasSubtitleGroup(i.groupId))){
          t.errorAction=this.getPlaylistRetryOrSwitchAction(t, n.loadLevel), t.errorAction.action=Be.SendAlternateToPenaltyBox,
          t.errorAction.flags=ut.MoveAllAlternatesMatchingHost;
          return
        }

      }
      return;
      case k.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:t.errorAction={
        action:Be.SendAlternateToPenaltyBox, flags:ut.MoveAllAlternatesMatchingHDCP
      };
      return;
      case k.KEY_SYSTEM_SESSION_UPDATE_FAILED:case k.KEY_SYSTEM_STATUS_INTERNAL_ERROR:case k.KEY_SYSTEM_NO_SESSION:t.errorAction={
        action:Be.SendAlternateToPenaltyBox, flags:ut.MoveAllAlternatesMatchingKey
      };
      return;
      case k.BUFFER_ADD_CODEC_ERROR:case k.REMUX_ALLOC_ERROR:case k.BUFFER_APPEND_ERROR:if(!t.errorAction){
        var o;
        t.errorAction=this.getLevelSwitchAction(t, (o=t.level)!=null?o:n.loadLevel)
      }
      return;
      case k.INTERNAL_EXCEPTION:case k.BUFFER_APPENDING_ERROR:case k.BUFFER_FULL_ERROR:case k.LEVEL_SWITCH_ERROR:case k.BUFFER_STALLED_ERROR:case k.BUFFER_SEEK_OVER_HOLE:case k.BUFFER_NUDGE_ON_STALL:t.errorAction=Ys()
      ;
      return
    }
    t.type===q.KEY_SYSTEM_ERROR&&(t.levelRetry=!1, t.errorAction=Ys())
  }
  getPlaylistRetryOrSwitchAction(e, t){
    const s=this.hls, n=Jh(s.config.playlistLoadPolicy, e), i=this.playlistError++;
    if(ro(n, i, to(e), e.response))return{
      action:Be.RetryRequest, flags:ut.None, retryConfig:n, retryCount:i
    };
    const o=this.getLevelSwitchAction(e, t);
    return n&&(o.retryConfig=n, o.retryCount=i), o
  }
  getFragRetryOrSwitchAction(e){
    const t=this.hls, s=this.getVariantLevelIndex(e.frag), n=t.levels[s], {
      fragLoadPolicy:i, keyLoadPolicy:a
    }
    =t.config, o=Jh(sp(e)?a:i, e), l=t.levels.reduce((u, d)=>u+d.fragmentError, 0);
    if(n&&(e.details!==k.FRAG_GAP&&n.fragmentError++, !np(e)&&ro(o, l, to(e), e.response)))return{
      action:Be.RetryRequest, flags:ut.None, retryConfig:o, retryCount:l
    };
    const c=this.getLevelSwitchAction(e, s);
    return o&&(c.retryConfig=o, c.retryCount=l), c
  }
  getLevelSwitchAction(e, t){
    const s=this.hls;
    t==null&&(t=s.loadLevel);
    const n=this.hls.levels[t];
    if(n){
      var i, a;
      const c=e.details;
      n.loadError++, c===k.BUFFER_APPEND_ERROR&&n.fragmentError++;
      let u=-1;
      const{
        levels:d, loadLevel:h, minAutoLevel:f, maxAutoLevel:g
      }
      =s;
      !s.autoLevelEnabled&&!s.config.preserveManualLevelOnError&&(s.loadLevel=-1);
      const y=(i=e.frag)==null?void 0:i.type, p=(y===W.AUDIO&&c===k.FRAG_PARSING_ERROR||e.sourceBufferName==="audio"&&(c===k.BUFFER_ADD_CODEC_ERROR||c===k.BUFFER_APPEND_ERROR))&&d.some(({
        audioCodec:b
      })=>n.audioCodec!==b), E=e.sourceBufferName==="video"&&(c===k.BUFFER_ADD_CODEC_ERROR||c===k.BUFFER_APPEND_ERROR)&&d.some(({
        codecSet:b, audioCodec:L
      })=>n.codecSet!==b&&n.audioCodec===L), {
        type:T, groupId:I
      }
      =(a=e.context)!=null?a:{

      };
      for(let b=d.length;
      b--;
      ){
        const L=(b+h)%d.length;
        if(L!==h&&L>=f&&L<=g&&d[L].loadError===0){
          var o, l;
          const A=d[L];
          if(c===k.FRAG_GAP&&y===W.MAIN&&e.frag){
            const w=d[L].details;
            if(w){
              const R=ps(e.frag, w.fragments, e.frag.start);
              if(R!=null&&R.gap)continue
            }

          }
          else{
            if(T===ne.AUDIO_TRACK&&A.hasAudioGroup(I)||T===ne.SUBTITLE_TRACK&&A.hasSubtitleGroup(I))continue;
            if(y===W.AUDIO&&(o=n.audioGroups)!=null&&o.some(w=>A.hasAudioGroup(w))||y===W.SUBTITLE&&(l=n.subtitleGroups)!=null&&l.some(w=>A.hasSubtitleGroup(w))||p&&n.audioCodec===A.audioCodec||E&&n.codecSet===A.codecSet||!p&&n.codecSet!==A.codecSet)
            continue
          }
          u=L;
          break
        }

      }
      if(u>-1&&s.loadLevel!==u)return e.levelRetry=!0, this.playlistError=0, {
        action:Be.SendAlternateToPenaltyBox, flags:ut.None, nextAutoLevel:u
      }

    }
    return{
      action:Be.SendAlternateToPenaltyBox, flags:ut.MoveAllAlternatesMatchingHost
    }

  }
  onErrorOut(e, t){
    var s;
    switch((s=t.errorAction)==null?void 0:s.action){
      case Be.DoNothing:break;
      case Be.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved&&t.details!==k.FRAG_GAP?t.fatal=!0:/MediaSource readyState: ended/.test(t.error.message)
      &&(this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`),
      this.hls.recoverMediaError());
      break
    }
    if(t.fatal){
      this.hls.stopLoad();
      return
    }

  }
  sendAlternateToPenaltyBox(e){
    const t=this.hls, s=e.errorAction;
    if(!s)return;
    const{
      flags:n
    }
    =s, i=s.nextAutoLevel;
    switch(n){
      case ut.None:this.switchLevel(e, i);
      break;
      case ut.MoveAllAlternatesMatchingHDCP:{
        const l=this.getVariantLevelIndex(e.frag), c=t.levels[l], u=c==null?void 0:c.attrs["HDCP-LEVEL"];
        if(s.hdcpLevel=u, u==="NONE")this.warn("HDCP policy resticted output with HDCP-LEVEL=NONE");
        else if(u){
          t.maxHdcpLevel=_c[_c.indexOf(u)-1], s.resolved=!0, this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
          break
        }

      }
      case ut.MoveAllAlternatesMatchingKey:{
        const l=e.decryptdata;
        if(l){
          const c=this.hls.levels, u=c.length;
          for(let h=u;
          h--;
          )if(this.variantHasKey(c[h], l)){
            var a, o;
            this.log(`Banned key found in level ${h} (${c[h].bitrate}bps) or audio group "${(a=c[h].audioGroups)==null?void 0:a.join(",")}" (${(o=e.frag)==null?void 0:o.type} fragment) ${je(l.keyId||[])}`)
            , c[h].fragmentError++, c[h].loadError++, this.log(`Removing level ${h} with key error (${e.error})`), this.hls.removeLevel(h)
          }
          const d=e.frag;
          if(this.hls.levels.length<u)s.resolved=!0;
          else if(d&&d.type!==W.MAIN){
            const h=d.decryptdata;
            h&&!l.matches(h)&&(s.resolved=!0)
          }

        }
        break
      }

    }
    s.resolved||this.switchLevel(e, i)
  }
  switchLevel(e, t){
    if(t!==void 0&&e.errorAction&&(this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel=t, e.errorAction.resolved=!0,
    this.hls.nextLoadLevel=this.hls.nextAutoLevel, e.details===k.BUFFER_ADD_CODEC_ERROR&&e.mimeType&&e.sourceBufferName!=="audiovideo")){
      const s=bc(e.mimeType), n=this.hls.levels;
      for(let i=n.length;
      i--;
      )n[i][`${e.sourceBufferName}Codec`]===s&&(this.log(`Removing level ${i} for ${e.details} ("${s}" not supported)`), this.hls.removeLevel(i))
    }

  }

}
function Ys(r){
  const e={
    action:Be.DoNothing, flags:ut.None
  };
  return r&&(e.resolved=!0), e
}
var Pe={
  NOT_LOADED:"NOT_LOADED", APPENDING:"APPENDING", PARTIAL:"PARTIAL", OK:"OK"
};
class qS{
  constructor(e){
    this.activePartLists=Object.create(null), this.endListFragments=Object.create(null), this.fragments=Object.create(null),
    this.timeRanges=Object.create(null), this.bufferPadding=.2, this.hls=void 0, this.hasGaps=!1, this.hls=e, this._registerListeners()
  }
  _registerListeners(){
    const{
      hls:e
    }
    =this;
    e&&(e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.BUFFER_APPENDED, this.onBufferAppended, this), e.on(S.FRAG_BUFFERED,
    this.onFragBuffered, this), e.on(S.FRAG_LOADED, this.onFragLoaded, this))
  }
  _unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e&&(e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.BUFFER_APPENDED, this.onBufferAppended, this), e.off(S.FRAG_BUFFERED,
    this.onFragBuffered, this), e.off(S.FRAG_LOADED, this.onFragLoaded, this))
  }
  destroy(){
    this._unregisterListeners(), this.hls=this.fragments=this.activePartLists=this.endListFragments=this.timeRanges=null
  }
  getAppendedFrag(e, t){
    const s=this.activePartLists[t];
    if(s)for(let n=s.length;
    n--;
    ){
      const i=s[n];
      if(!i)break;
      if(i.start<=e&&e<=i.end&&i.loaded)return i
    }
    return this.getBufferedFrag(e, t)
  }
  getBufferedFrag(e, t){
    return this.getFragAtPos(e, t, !0)
  }
  getFragAtPos(e, t, s){
    const{
      fragments:n
    }
    =this, i=Object.keys(n);
    for(let a=i.length;
    a--;
    ){
      const o=n[i[a]];
      if((o==null?void 0:o.body.type)===t&&(!s||o.buffered)){
        const l=o.body;
        if(l.start<=e&&e<=l.end)return l
      }

    }
    return null
  }
  detectEvictedFragments(e, t, s, n, i){
    this.timeRanges&&(this.timeRanges[e]=t);
    const a=(n==null?void 0:n.fragment.sn)||-1;
    Object.keys(this.fragments).forEach(o=>{
      const l=this.fragments[o];
      if(!l||a>=l.body.sn)return;
      if(!l.buffered&&(!l.loaded||i)){
        l.body.type===s&&this.removeFragment(l.body);
        return
      }
      const c=l.range[e];
      if(c){
        if(c.time.length===0){
          this.removeFragment(l.body);
          return
        }
        c.time.some(u=>{
          const d=!this.isTimeBuffered(u.startPTS, u.endPTS, t);
          return d&&this.removeFragment(l.body), d
        })
      }

    })
  }
  detectPartialFragments(e){
    const t=this.timeRanges;
    if(!t||e.frag.sn==="initSegment")return;
    const s=e.frag, n=Ts(s), i=this.fragments[n];
    if(!i||i.buffered&&s.gap)return;
    const a=!s.relurl;
    Object.keys(t).forEach(o=>{
      const l=s.elementaryStreams[o];
      if(!l)return;
      const c=t[o], u=a||l.partial===!0;
      i.range[o]=this.getBufferedTimes(s, e.part, u, c)
    }), i.loaded=null, Object.keys(i.range).length?(this.bufferedEnd(i, s), Ki(i)||this.removeParts(s.sn-1, s.type)):this.removeFragment(i.body)
  }
  bufferedEnd(e, t){
    e.buffered=!0, (e.body.endList=t.endList||e.body.endList)&&(this.endListFragments[e.body.type]=e)
  }
  removeParts(e, t){
    const s=this.activePartLists[t];
    s&&(this.activePartLists[t]=tf(s, n=>n.fragment.sn>=e))
  }
  fragBuffered(e, t){
    const s=Ts(e);
    let n=this.fragments[s];
    !n&&t&&(n=this.fragments[s]={
      body:e, appendedPTS:null, loaded:null, buffered:!1, range:Object.create(null)
    }, e.gap&&(this.hasGaps=!0)), n&&(n.loaded=null, this.bufferedEnd(n, e))
  }
  getBufferedTimes(e, t, s, n){
    const i={
      time:[], partial:s
    }, a=e.start, o=e.end, l=e.minEndPTS||o, c=e.maxStartPTS||a;
    for(let u=0;
    u<n.length;
    u++){
      const d=n.start(u)-this.bufferPadding, h=n.end(u)+this.bufferPadding;
      if(c>=d&&l<=h){
        i.time.push({
          startPTS:Math.max(a, n.start(u)), endPTS:Math.min(o, n.end(u))
        });
        break
      }
      else if(a<h&&o>d){
        const f=Math.max(a, n.start(u)), g=Math.min(o, n.end(u));
        g>f&&(i.partial=!0, i.time.push({
          startPTS:f, endPTS:g
        }))
      }
      else if(o<=d)break
    }
    return i
  }
  getPartialFragment(e){
    let t=null, s, n, i, a=0;
    const{
      bufferPadding:o, fragments:l
    }
    =this;
    return Object.keys(l).forEach(c=>{
      const u=l[c];
      u&&Ki(u)&&(n=u.body.start-o, i=u.body.end+o, e>=n&&e<=i&&(s=Math.min(e-n, i-e), a<=s&&(t=u.body, a=s)))
    }), t
  }
  isEndListAppended(e){
    const t=this.endListFragments[e];
    return t!==void 0&&(t.buffered||Ki(t))
  }
  getState(e){
    const t=Ts(e), s=this.fragments[t];
    return s?s.buffered?Ki(s)?Pe.PARTIAL:Pe.OK:Pe.APPENDING:Pe.NOT_LOADED
  }
  isTimeBuffered(e, t, s){
    let n, i;
    for(let a=0;
    a<s.length;
    a++){
      if(n=s.start(a)-this.bufferPadding, i=s.end(a)+this.bufferPadding, e>=n&&t<=i)return!0;
      if(t<=n)return!1
    }
    return!1
  }
  onManifestLoading(){
    this.removeAllFragments()
  }
  onFragLoaded(e, t){
    if(t.frag.sn==="initSegment"||t.frag.bitrateTest)return;
    const s=t.frag, n=t.part?null:t, i=Ts(s);
    this.fragments[i]={
      body:s, appendedPTS:null, loaded:n, buffered:!1, range:Object.create(null)
    }

  }
  onBufferAppended(e, t){
    const{
      frag:s, part:n, timeRanges:i, type:a
    }
    =t;
    if(s.sn==="initSegment")return;
    const o=s.type;
    if(n){
      let c=this.activePartLists[o];
      c||(this.activePartLists[o]=c=[]), c.push(n)
    }
    this.timeRanges=i;
    const l=i[a];
    this.detectEvictedFragments(a, l, o, n)
  }
  onFragBuffered(e, t){
    this.detectPartialFragments(t)
  }
  hasFragment(e){
    const t=Ts(e);
    return!!this.fragments[t]
  }
  hasFragments(e){
    const{
      fragments:t
    }
    =this, s=Object.keys(t);
    if(!e)return s.length>0;
    for(let n=s.length;
    n--;
    ){
      const i=t[s[n]];
      if((i==null?void 0:i.body.type)===e)return!0
    }
    return!1
  }
  hasParts(e){
    var t;
    return!!((t=this.activePartLists[e])!=null&&t.length)
  }
  removeFragmentsInRange(e, t, s, n, i){
    n&&!this.hasGaps||Object.keys(this.fragments).forEach(a=>{
      const o=this.fragments[a];
      if(!o)return;
      const l=o.body;
      l.type!==s||n&&!l.gap||l.start<t&&l.end>e&&(o.buffered||i)&&this.removeFragment(l)
    })
  }
  removeFragment(e){
    const t=Ts(e);
    e.clearElementaryStreamInfo();
    const s=this.activePartLists[e.type];
    if(s){
      const n=e.sn;
      this.activePartLists[e.type]=tf(s, i=>i.fragment.sn!==n)
    }
    delete this.fragments[t], e.endList&&delete this.endListFragments[e.type]
  }
  removeAllFragments(){
    var e;
    this.fragments=Object.create(null), this.endListFragments=Object.create(null), this.activePartLists=Object.create(null),
    this.hasGaps=!1;
    const t=(e=this.hls)==null||(e=e.latestLevelDetails)==null?void 0:e.partList;
    t&&t.forEach(s=>s.clearElementaryStreamInfo())
  }

}
function Ki(r){
  var e, t, s;
  return r.buffered&&!!(r.body.gap||(e=r.range.video)!=null&&e.partial||(t=r.range.audio)!=null&&t.partial||(s=r.range.audiovideo)!=null&&s.partial)
}
function Ts(r){
  return`${r.type}_${r.level}_${r.sn}`
}
function tf(r, e){
  return r.filter(t=>{
    const s=e(t);
    return s||t.clearElementaryStreamInfo(), s
  })
}
var zr={
  cbc:0, ctr:1
};
class QS{
  constructor(e, t, s){
    this.subtle=void 0, this.aesIV=void 0, this.aesMode=void 0, this.subtle=e, this.aesIV=t, this.aesMode=s
  }
  decrypt(e, t){
    switch(this.aesMode){
      case zr.cbc:return this.subtle.decrypt({
        name:"AES-CBC", iv:this.aesIV
      }, t, e);
      case zr.ctr:return this.subtle.decrypt({
        name:"AES-CTR", counter:this.aesIV, length:64
      }, t, e);
      default:throw new Error(`[AESCrypto] invalid aes mode ${this.aesMode}`)
    }

  }

}
function XS(r){
  const e=r.byteLength, t=e&&new DataView(r.buffer).getUint8(e-1);
  return t?r.slice(0, e-t):r
}
class ZS{
  constructor(){
    this.rcon=[0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix=[new Uint32Array(256), new Uint32Array(256), new Uint32Array(256),
    new Uint32Array(256)], this.invSubMix=[new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
    this.sBox=new Uint32Array(256), this.invSBox=new Uint32Array(256), this.key=new Uint32Array(0), this.ksRows=0, this.keySize=0,
    this.keySchedule=void 0, this.invKeySchedule=void 0, this.initTable()
  }
  uint8ArrayToUint32Array_(e){
    const t=new DataView(e), s=new Uint32Array(4);
    for(let n=0;
    n<4;
    n++)s[n]=t.getUint32(n*4);
    return s
  }
  initTable(){
    const e=this.sBox, t=this.invSBox, s=this.subMix, n=s[0], i=s[1], a=s[2], o=s[3], l=this.invSubMix, c=l[0], u=l[1], d=l[2],
    h=l[3], f=new Uint32Array(256);
    let g=0, y=0, x=0;
    for(x=0;
    x<256;
    x++)x<128?f[x]=x<<1:f[x]=x<<1^283;
    for(x=0;
    x<256;
    x++){
      let p=y^y<<1^y<<2^y<<3^y<<4;
      p=p>>>8^p&255^99, e[g]=p, t[p]=g;
      const v=f[g], E=f[v], T=f[E];
      let I=f[p]*257^p*16843008;
      n[g]=I<<24|I>>>8, i[g]=I<<16|I>>>16, a[g]=I<<8|I>>>24, o[g]=I, I=T*16843009^E*65537^v*257^g*16843008, c[p]=I<<24|I>>>8,
      u[p]=I<<16|I>>>16, d[p]=I<<8|I>>>24, h[p]=I, g?(g=v^f[f[f[T^v]]], y^=f[f[y]]):g=y=1
    }

  }
  expandKey(e){
    const t=this.uint8ArrayToUint32Array_(e);
    let s=!0, n=0;
    for(;
    n<t.length&&s;
    )s=t[n]===this.key[n], n++;
    if(s)return;
    this.key=t;
    const i=this.keySize=t.length;
    if(i!==4&&i!==6&&i!==8)throw new Error("Invalid aes key size="+i);
    const a=this.ksRows=(i+6+1)*4;
    let o, l;
    const c=this.keySchedule=new Uint32Array(a), u=this.invKeySchedule=new Uint32Array(a), d=this.sBox, h=this.rcon, f=this.invSubMix,
    g=f[0], y=f[1], x=f[2], p=f[3];
    let v, E;
    for(o=0;
    o<a;
    o++){
      if(o<i){
        v=c[o]=t[o];
        continue
      }
      E=v, o%i===0?(E=E<<8|E>>>24, E=d[E>>>24]<<24|d[E>>>16&255]<<16|d[E>>>8&255]<<8|d[E&255], E^=h[o/i|0]<<24):i>6&&o%i===4&&(E=d[E>>>24]<<24|d[E>>>16&255]<<16|d[E>>>8&255]<<8|d[E&255]
      ), c[o]=v=(c[o-i]^E)>>>0
    }
    for(l=0;
    l<a;
    l++)o=a-l, l&3?E=c[o]:E=c[o-4], l<4||o<=4?u[l]=E:u[l]=g[d[E>>>24]]^y[d[E>>>16&255]]^x[d[E>>>8&255]]^p[d[E&255]], u[l]=u[l]>>>0
  }
  networkToHostOrderSwap(e){
    return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24
  }
  decrypt(e, t, s){
    const n=this.keySize+6, i=this.invKeySchedule, a=this.invSBox, o=this.invSubMix, l=o[0], c=o[1], u=o[2], d=o[3], h=this.uint8ArrayToUint32Array_(s);
    let f=h[0], g=h[1], y=h[2], x=h[3];
    const p=new Int32Array(e), v=new Int32Array(p.length);
    let E, T, I, b, L, A, w, R, D, $, V, Y, K, B;
    const H=this.networkToHostOrderSwap;
    for(;
    t<p.length;
    ){
      for(D=H(p[t]), $=H(p[t+1]), V=H(p[t+2]), Y=H(p[t+3]), L=D^i[0], A=Y^i[1], w=V^i[2], R=$^i[3], K=4, B=1;
      B<n;
      B++)E=l[L>>>24]^c[A>>16&255]^u[w>>8&255]^d[R&255]^i[K], T=l[A>>>24]^c[w>>16&255]^u[R>>8&255]^d[L&255]^i[K+1], I=l[w>>>24]^c[R>>16&255]^u[L>>8&255]^d[A&255]^i[K+2],
      b=l[R>>>24]^c[L>>16&255]^u[A>>8&255]^d[w&255]^i[K+3], L=E, A=T, w=I, R=b, K=K+4;
      E=a[L>>>24]<<24^a[A>>16&255]<<16^a[w>>8&255]<<8^a[R&255]^i[K], T=a[A>>>24]<<24^a[w>>16&255]<<16^a[R>>8&255]<<8^a[L&255]^i[K+1],
      I=a[w>>>24]<<24^a[R>>16&255]<<16^a[L>>8&255]<<8^a[A&255]^i[K+2], b=a[R>>>24]<<24^a[L>>16&255]<<16^a[A>>8&255]<<8^a[w&255]^i[K+3],
      v[t]=H(E^f), v[t+1]=H(b^g), v[t+2]=H(I^y), v[t+3]=H(T^x), f=D, g=$, y=V, x=Y, t=t+4
    }
    return v.buffer
  }

}
class JS{
  constructor(e, t, s){
    this.subtle=void 0, this.key=void 0, this.aesMode=void 0, this.subtle=e, this.key=t, this.aesMode=s
  }
  expandKey(){
    const e=eT(this.aesMode);
    return this.subtle.importKey("raw", this.key, {
      name:e
    }, !1, ["encrypt", "decrypt"])
  }

}
function eT(r){
  switch(r){
    case zr.cbc:return"AES-CBC";
    case zr.ctr:return"AES-CTR";
    default:throw new Error(`[FastAESKey] invalid aes mode ${r}`)
  }

}
const tT=16;
class Xu{
  constructor(e, {
    removePKCS7Padding:t=!0
  }
  ={

  }){
    if(this.logEnabled=!0, this.removePKCS7Padding=void 0, this.subtle=null, this.softwareDecrypter=null, this.key=null, this.fastAesKey=null,
    this.remainderData=null, this.currentIV=null, this.currentResult=null, this.useSoftware=void 0, this.enableSoftwareAES=void 0,
    this.enableSoftwareAES=e.enableSoftwareAES, this.removePKCS7Padding=t, t)try{
      const s=self.crypto;
      s&&(this.subtle=s.subtle||s.webkitSubtle)
    }
    catch{

    }
    this.useSoftware=!this.subtle
  }
  destroy(){
    this.subtle=null, this.softwareDecrypter=null, this.key=null, this.fastAesKey=null, this.remainderData=null, this.currentIV=null,
    this.currentResult=null
  }
  isSync(){
    return this.useSoftware
  }
  flush(){
    const{
      currentResult:e, remainderData:t
    }
    =this;
    if(!e||t)return this.reset(), null;
    const s=new Uint8Array(e);
    return this.reset(), this.removePKCS7Padding?XS(s):s
  }
  reset(){
    this.currentResult=null, this.currentIV=null, this.remainderData=null, this.softwareDecrypter&&(this.softwareDecrypter=null)
  }
  decrypt(e, t, s, n){
    return this.useSoftware?new Promise((i, a)=>{
      const o=ArrayBuffer.isView(e)?e:new Uint8Array(e);
      this.softwareDecrypt(o, t, s, n);
      const l=this.flush();
      l?i(l.buffer):a(new Error("[softwareDecrypt] Failed to decrypt data"))
    }):this.webCryptoDecrypt(new Uint8Array(e), t, s, n)
  }
  softwareDecrypt(e, t, s, n){
    const{
      currentIV:i, currentResult:a, remainderData:o
    }
    =this;
    if(n!==zr.cbc||t.byteLength!==16)return ue.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
    this.logOnce("JS AES decrypt"), o&&(e=kt(o, e), this.remainderData=null);
    const l=this.getValidChunk(e);
    if(!l.length)return null;
    i&&(s=i);
    let c=this.softwareDecrypter;
    c||(c=this.softwareDecrypter=new ZS), c.expandKey(t);
    const u=a;
    return this.currentResult=c.decrypt(l.buffer, 0, s), this.currentIV=l.slice(-16).buffer, u||null
  }
  webCryptoDecrypt(e, t, s, n){
    if(this.key!==t||!this.fastAesKey){
      if(!this.subtle)return Promise.resolve(this.onWebCryptoError(e, t, s, n));
      this.key=t, this.fastAesKey=new JS(this.subtle, t, n)
    }
    return this.fastAesKey.expandKey().then(i=>this.subtle?(this.logOnce("WebCrypto AES decrypt"), new QS(this.subtle, new Uint8Array(s),
    n).decrypt(e.buffer, i)):Promise.reject(new Error("web crypto not initialized"))).catch(i=>(ue.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${i.name}: ${i.message}`)
    , this.onWebCryptoError(e, t, s, n)))
  }
  onWebCryptoError(e, t, s, n){
    const i=this.enableSoftwareAES;
    if(i){
      this.useSoftware=!0, this.logEnabled=!0, this.softwareDecrypt(e, t, s, n);
      const a=this.flush();
      if(a)return a.buffer
    }
    throw new Error("WebCrypto"+(i?" and softwareDecrypt":"")+": failed to decrypt data")
  }
  getValidChunk(e){
    let t=e;
    const s=e.length-e.length%tT;
    return s!==e.length&&(t=e.slice(0, s), this.remainderData=e.slice(s)), t
  }
  logOnce(e){
    this.logEnabled&&(ue.log(`[decrypter]: ${e}`), this.logEnabled=!1)
  }

}
const rf=Math.pow(2, 17);
class rT{
  constructor(e){
    this.config=void 0, this.loader=null, this.partLoadTimeout=-1, this.config=e
  }
  destroy(){
    this.loader&&(this.loader.destroy(), this.loader=null)
  }
  abort(){
    this.loader&&this.loader.abort()
  }
  load(e, t){
    const s=e.url;
    if(!s)return Promise.reject(new cr({
      type:q.NETWORK_ERROR, details:k.FRAG_LOAD_ERROR, fatal:!1, frag:e, error:new Error(`Fragment does not have a ${s?"part list":"url"}`),
      networkDetails:null
    }));
    this.abort();
    const n=this.config, i=n.fLoader, a=n.loader;
    return new Promise((o, l)=>{
      if(this.loader&&this.loader.destroy(), e.gap)if(e.tagList.some(g=>g[0]==="GAP")){
        l(nf(e));
        return
      }
      else e.gap=!1;
      const c=this.loader=i?new i(n):new a(n), u=sf(e);
      e.loader=c;
      const d=ef(n.fragLoadPolicy.default), h={
        loadPolicy:d, timeout:d.maxLoadTimeMs, maxRetry:0, retryDelay:0, maxRetryDelay:0, highWaterMark:e.sn==="initSegment"?1/0:rf
      };
      e.stats=c.stats;
      const f={
        onSuccess:(g, y, x, p)=>{
          this.resetLoader(e, c);
          let v=g.data;
          x.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(v.slice(0, 16)), v=v.slice(16)), o({
            frag:e, part:null, payload:v, networkDetails:p
          })
        }, onError:(g, y, x, p)=>{
          this.resetLoader(e, c), l(new cr({
            type:q.NETWORK_ERROR, details:k.FRAG_LOAD_ERROR, fatal:!1, frag:e, response:ce({
              url:s, data:void 0
            }, g), error:new Error(`HTTP Error ${g.code} ${g.text}`), networkDetails:x, stats:p
          }))
        }, onAbort:(g, y, x)=>{
          this.resetLoader(e, c), l(new cr({
            type:q.NETWORK_ERROR, details:k.INTERNAL_ABORTED, fatal:!1, frag:e, error:new Error("Aborted"), networkDetails:x,
            stats:g
          }))
        }, onTimeout:(g, y, x)=>{
          this.resetLoader(e, c), l(new cr({
            type:q.NETWORK_ERROR, details:k.FRAG_LOAD_TIMEOUT, fatal:!1, frag:e, error:new Error(`Timeout after ${h.timeout}ms`),
            networkDetails:x, stats:g
          }))
        }

      };
      t&&(f.onProgress=(g, y, x, p)=>t({
        frag:e, part:null, payload:x, networkDetails:p
      })), c.load(u, h, f)
    })
  }
  loadPart(e, t, s){
    this.abort();
    const n=this.config, i=n.fLoader, a=n.loader;
    return new Promise((o, l)=>{
      if(this.loader&&this.loader.destroy(), e.gap||t.gap){
        l(nf(e, t));
        return
      }
      const c=this.loader=i?new i(n):new a(n), u=sf(e, t);
      e.loader=c;
      const d=ef(n.fragLoadPolicy.default), h={
        loadPolicy:d, timeout:d.maxLoadTimeMs, maxRetry:0, retryDelay:0, maxRetryDelay:0, highWaterMark:rf
      };
      t.stats=c.stats, c.load(u, h, {
        onSuccess:(f, g, y, x)=>{
          this.resetLoader(e, c), this.updateStatsFromPart(e, t);
          const p={
            frag:e, part:t, payload:f.data, networkDetails:x
          };
          s(p), o(p)
        }, onError:(f, g, y, x)=>{
          this.resetLoader(e, c), l(new cr({
            type:q.NETWORK_ERROR, details:k.FRAG_LOAD_ERROR, fatal:!1, frag:e, part:t, response:ce({
              url:u.url, data:void 0
            }, f), error:new Error(`HTTP Error ${f.code} ${f.text}`), networkDetails:y, stats:x
          }))
        }, onAbort:(f, g, y)=>{
          e.stats.aborted=t.stats.aborted, this.resetLoader(e, c), l(new cr({
            type:q.NETWORK_ERROR, details:k.INTERNAL_ABORTED, fatal:!1, frag:e, part:t, error:new Error("Aborted"), networkDetails:y,
            stats:f
          }))
        }, onTimeout:(f, g, y)=>{
          this.resetLoader(e, c), l(new cr({
            type:q.NETWORK_ERROR, details:k.FRAG_LOAD_TIMEOUT, fatal:!1, frag:e, part:t, error:new Error(`Timeout after ${h.timeout}ms`),
            networkDetails:y, stats:f
          }))
        }

      })
    })
  }
  updateStatsFromPart(e, t){
    const s=e.stats, n=t.stats, i=n.total;
    if(s.loaded+=n.loaded, i){
      const l=Math.round(e.duration/t.duration), c=Math.min(Math.round(s.loaded/i), l), d=(l-c)*Math.round(s.loaded/c);
      s.total=s.loaded+d
    }
    else s.total=Math.max(s.loaded, s.total);
    const a=s.loading, o=n.loading;
    a.start?a.first+=o.first-o.start:(a.start=o.start, a.first=o.first), a.end=o.end
  }
  resetLoader(e, t){
    e.loader=null, this.loader===t&&(self.clearTimeout(this.partLoadTimeout), this.loader=null), t.destroy()
  }

}
function sf(r, e=null){
  const t=e||r, s={
    frag:r, part:e, responseType:"arraybuffer", url:t.url, headers:{

    }, rangeStart:0, rangeEnd:0
  }, n=t.byteRangeStartOffset, i=t.byteRangeEndOffset;
  if(G(n)&&G(i)){
    var a;
    let o=n, l=i;
    if(r.sn==="initSegment"&&sT((a=r.decryptdata)==null?void 0:a.method)){
      const c=i-n;
      c%16&&(l=i+(16-c%16)), n!==0&&(s.resetIV=!0, o=n-16)
    }
    s.rangeStart=o, s.rangeEnd=l
  }
  return s
}
function nf(r, e){
  const t=new Error(`GAP ${r.gap?"tag":"attribute"} found`), s={
    type:q.MEDIA_ERROR, details:k.FRAG_GAP, fatal:!1, frag:r, error:t, networkDetails:null
  };
  return e&&(s.part=e), (e||r).stats.aborted=!0, new cr(s)
}
function sT(r){
  return r==="AES-128"||r==="AES-256"
}
class cr extends Error{
  constructor(e){
    super(e.error.message), this.data=void 0, this.data=e
  }

}
class ip extends Ct{
  constructor(e, t){
    super(e, t), this._boundTick=void 0, this._tickTimer=null, this._tickInterval=null, this._tickCallCount=0, this._boundTick=this.tick.bind(this)
  }
  destroy(){
    this.onHandlerDestroying(), this.onHandlerDestroyed()
  }
  onHandlerDestroying(){
    this.clearNextTick(), this.clearInterval()
  }
  onHandlerDestroyed(){

  }
  hasInterval(){
    return!!this._tickInterval
  }
  hasNextTick(){
    return!!this._tickTimer
  }
  setInterval(e){
    return this._tickInterval?!1:(this._tickCallCount=0, this._tickInterval=self.setInterval(this._boundTick, e), !0)
  }
  clearInterval(){
    return this._tickInterval?(self.clearInterval(this._tickInterval), this._tickInterval=null, !0):!1
  }
  clearNextTick(){
    return this._tickTimer?(self.clearTimeout(this._tickTimer), this._tickTimer=null, !0):!1
  }
  tick(){
    this._tickCallCount++, this._tickCallCount===1&&(this.doTick(), this._tickCallCount>1&&this.tickImmediate(), this._tickCallCount=0)
  }
  tickImmediate(){
    this.clearNextTick(), this._tickTimer=self.setTimeout(this._boundTick, 0)
  }
  doTick(){

  }

}
class Zu{
  constructor(e, t, s, n=0, i=-1, a=!1){
    this.level=void 0, this.sn=void 0, this.part=void 0, this.id=void 0, this.size=void 0, this.partial=void 0, this.transmuxing=Hi(),
    this.buffering={
      audio:Hi(), video:Hi(), audiovideo:Hi()
    }, this.level=e, this.sn=t, this.id=s, this.size=n, this.part=i, this.partial=a
  }

}
function Hi(){
  return{
    start:0, executeStart:0, executeEnd:0, end:0
  }

}
const af={
  length:0, start:()=>0, end:()=>0
};
class Z{
  static isBuffered(e, t){
    if(e){
      const s=Z.getBuffered(e);
      for(let n=s.length;
      n--;
      )if(t>=s.start(n)&&t<=s.end(n))return!0
    }
    return!1
  }
  static bufferedRanges(e){
    if(e){
      const t=Z.getBuffered(e);
      return Z.timeRangesToArray(t)
    }
    return[]
  }
  static timeRangesToArray(e){
    const t=[];
    for(let s=0;
    s<e.length;
    s++)t.push({
      start:e.start(s), end:e.end(s)
    });
    return t
  }
  static bufferInfo(e, t, s){
    if(e){
      const n=Z.bufferedRanges(e);
      if(n.length)return Z.bufferedInfo(n, t, s)
    }
    return{
      len:0, start:t, end:t, bufferedIndex:-1
    }

  }
  static bufferedInfo(e, t, s){
    t=Math.max(0, t), e.length>1&&e.sort((u, d)=>u.start-d.start||d.end-u.end);
    let n=-1, i=[];
    if(s)for(let u=0;
    u<e.length;
    u++){
      t>=e[u].start&&t<=e[u].end&&(n=u);
      const d=i.length;
      if(d){
        const h=i[d-1].end;
        e[u].start-h<s?e[u].end>h&&(i[d-1].end=e[u].end):i.push(e[u])
      }
      else i.push(e[u])
    }
    else i=e;
    let a=0, o, l=t, c=t;
    for(let u=0;
    u<i.length;
    u++){
      const d=i[u].start, h=i[u].end;
      if(n===-1&&t>=d&&t<=h&&(n=u), t+s>=d&&t<h)l=d, c=h, a=c-t;
      else if(t+s<d){
        o=d;
        break
      }

    }
    return{
      len:a, start:l||0, end:c||0, nextStart:o, buffered:e, bufferedIndex:n
    }

  }
  static getBuffered(e){
    try{
      return e.buffered||af
    }
    catch(t){
      return ue.log("failed to get media.buffered", t), af
    }

  }

}
const ap=/\{\$([a-zA-Z0-9-_]+)\}/g;
function of(r){
  return ap.test(r)
}
function Cc(r, e){
  if(r.variableList!==null||r.hasVariableRefs){
    const t=r.variableList;
    return e.replace(ap, s=>{
      const n=s.substring(2, s.length-1), i=t==null?void 0:t[n];
      return i===void 0?(r.playlistParsingError||(r.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${n}"`)),
      s):i
    })
  }
  return e
}
function lf(r, e, t){
  let s=r.variableList;
  s||(r.variableList=s={

  });
  let n, i;
  if("QUERYPARAM"in e){
    n=e.QUERYPARAM;
    try{
      const a=new self.URL(t).searchParams;
      if(a.has(n))i=a.get(n);
      else throw new Error(`"${n}" does not match any query parameter in URI: "${t}"`)
    }
    catch(a){
      r.playlistParsingError||(r.playlistParsingError=new Error(`EXT-X-DEFINE QUERYPARAM: ${a.message}`))
    }

  }
  else n=e.NAME, i=e.VALUE;
  n in s?r.playlistParsingError||(r.playlistParsingError=new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${n}"`)):s[n]=i||""
}
function nT(r, e, t){
  const s=e.IMPORT;
  if(t&&s in t){
    let n=r.variableList;
    n||(r.variableList=n={

    }), n[s]=t[s]
  }
  else r.playlistParsingError||(r.playlistParsingError=new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`))
}
const iT=/^(\d+)x(\d+)$/, cf=/(.+?)=(".*?"|.*?)(?:,|$)/g;
class xe{
  constructor(e, t){
    typeof e=="string"&&(e=xe.parseAttrList(e, t)), he(this, e)
  }
  get clientAttrs(){
    return Object.keys(this).filter(e=>e.substring(0, 2)==="X-")
  }
  decimalInteger(e){
    const t=parseInt(this[e], 10);
    return t>Number.MAX_SAFE_INTEGER?1/0:t
  }
  hexadecimalInteger(e){
    if(this[e]){
      let t=(this[e]||"0x").slice(2);
      t=(t.length&1?"0":"")+t;
      const s=new Uint8Array(t.length/2);
      for(let n=0;
      n<t.length/2;
      n++)s[n]=parseInt(t.slice(n*2, n*2+2), 16);
      return s
    }
    return null
  }
  hexadecimalIntegerAsNumber(e){
    const t=parseInt(this[e], 16);
    return t>Number.MAX_SAFE_INTEGER?1/0:t
  }
  decimalFloatingPoint(e){
    return parseFloat(this[e])
  }
  optionalFloat(e, t){
    const s=this[e];
    return s?parseFloat(s):t
  }
  enumeratedString(e){
    return this[e]
  }
  enumeratedStringList(e, t){
    const s=this[e];
    return(s?s.split(/[ ,]+/):[]).reduce((n, i)=>(n[i.toLowerCase()]=!0, n), t)
  }
  bool(e){
    return this[e]==="YES"
  }
  decimalResolution(e){
    const t=iT.exec(this[e]);
    if(t!==null)return{
      width:parseInt(t[1], 10), height:parseInt(t[2], 10)
    }

  }
  static parseAttrList(e, t){
    let s;
    const n={

    }, i='"';
    for(cf.lastIndex=0;
    (s=cf.exec(e))!==null;
    ){
      const a=s[1].trim();
      let o=s[2];
      const l=o.indexOf(i)===0&&o.lastIndexOf(i)===o.length-1;
      let c=!1;
      if(l)o=o.slice(1, -1);
      else switch(a){
        case"IV":case"SCTE35-CMD":case"SCTE35-IN":case"SCTE35-OUT":c=!0
      }
      if(t&&(l||c))o=Cc(t, o);
      else if(!c&&!l)switch(a){
        case"CLOSED-CAPTIONS":if(o==="NONE")break;
        case"ALLOWED-CPC":case"CLASS":case"ASSOC-LANGUAGE":case"AUDIO":case"BYTERANGE":case"CHANNELS":case"CHARACTERISTICS":case"CODECS":case"DATA-ID":case"END-DATE":case"GROUP-ID":case"ID":case"IMPORT":case"INSTREAM-ID":case"KEYFORMAT":case"KEYFORMATVERSIONS":case"LANGUAGE":case"NAME":case"PATHWAY-ID":case"QUERYPARAM":case"RECENTLY-REMOVED-DATERANGES":case"SERVER-URI":case"STABLE-RENDITION-ID":case"STABLE-VARIANT-ID":case"START-DATE":case"SUBTITLES":case"SUPPLEMENTAL-CODECS":case"URI":case"VALUE":case"VIDEO":case"X-ASSET-LIST":case"X-ASSET-URI":ue.warn(`${e}: attribute ${a} is missing quotes`)

      }
      n[a]=o
    }
    return n
  }

}
const aT="com.apple.hls.interstitial";
function oT(r){
  return r!=="ID"&&r!=="CLASS"&&r!=="CUE"&&r!=="START-DATE"&&r!=="DURATION"&&r!=="END-DATE"&&r!=="END-ON-NEXT"
}
function lT(r){
  return r==="SCTE35-OUT"||r==="SCTE35-IN"||r==="SCTE35-CMD"
}
class op{
  constructor(e, t, s=0){
    var n;
    if(this.attr=void 0, this.tagAnchor=void 0, this.tagOrder=void 0, this._startDate=void 0, this._endDate=void 0, this._dateAtEnd=void 0,
    this._cue=void 0, this._badValueForSameId=void 0, this.tagAnchor=(t==null?void 0:t.tagAnchor)||null, this.tagOrder=(n=t==null?void 0:t.tagOrder)!=null?n:s,
    t){
      const i=t.attr;
      for(const a in i)if(Object.prototype.hasOwnProperty.call(e, a)&&e[a]!==i[a]){
        ue.warn(`DATERANGE tag attribute: "${a}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId=a;
        break
      }
      e=he(new xe({

      }), i, e)
    }
    if(this.attr=e, t?(this._startDate=t._startDate, this._cue=t._cue, this._endDate=t._endDate, this._dateAtEnd=t._dateAtEnd):this._startDate=new Date(e["START-DATE"]),
    "END-DATE"in this.attr){
      const i=(t==null?void 0:t.endDate)||new Date(this.attr["END-DATE"]);
      G(i.getTime())&&(this._endDate=i)
    }

  }
  get id(){
    return this.attr.ID
  }
  get class(){
    return this.attr.CLASS
  }
  get cue(){
    const e=this._cue;
    return e===void 0?this._cue=this.attr.enumeratedStringList(this.attr.CUE?"CUE":"X-CUE", {
      pre:!1, post:!1, once:!1
    }):e
  }
  get startTime(){
    const{
      tagAnchor:e
    }
    =this;
    return e===null||e.programDateTime===null?(ue.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`),
    NaN):e.start+(this.startDate.getTime()-e.programDateTime)/1e3
  }
  get startDate(){
    return this._startDate
  }
  get endDate(){
    const e=this._endDate||this._dateAtEnd;
    if(e)return e;
    const t=this.duration;
    return t!==null?this._dateAtEnd=new Date(this._startDate.getTime()+t*1e3):null
  }
  get duration(){
    if("DURATION"in this.attr){
      const e=this.attr.decimalFloatingPoint("DURATION");
      if(G(e))return e
    }
    else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;
    return null
  }
  get plannedDuration(){
    return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null
  }
  get endOnNext(){
    return this.attr.bool("END-ON-NEXT")
  }
  get isInterstitial(){
    return this.class===aT
  }
  get isValid(){
    return!!this.id&&!this._badValueForSameId&&G(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)&&(!this.attr.CUE||!this.cue.pre&&!this.cue.post||this.cue.pre!==this.cue.post)
    &&(!this.isInterstitial||"X-ASSET-URI"in this.attr||"X-ASSET-LIST"in this.attr)
  }

}
const cT=10;
class uT{
  constructor(e){
    this.PTSKnown=!1, this.alignedSliding=!1, this.averagetargetduration=void 0, this.endCC=0, this.endSN=0, this.fragments=void 0,
    this.fragmentHint=void 0, this.partList=null, this.dateRanges=void 0, this.dateRangeTagCount=0, this.live=!0, this.requestScheduled=-1,
    this.ageHeader=0, this.advancedDateTime=void 0, this.updated=!0, this.advanced=!0, this.misses=0, this.startCC=0, this.startSN=0,
    this.startTimeOffset=null, this.targetduration=0, this.totalduration=0, this.type=null, this.url=void 0, this.m3u8="",
    this.version=null, this.canBlockReload=!1, this.canSkipUntil=0, this.canSkipDateRanges=!1, this.skippedSegments=0, this.recentlyRemovedDateranges=void 0,
    this.partHoldBack=0, this.holdBack=0, this.partTarget=0, this.preloadHint=void 0, this.renditionReports=void 0, this.tuneInGoal=0,
    this.deltaUpdateFailed=void 0, this.driftStartTime=0, this.driftEndTime=0, this.driftStart=0, this.driftEnd=0, this.encryptedFragments=void 0,
    this.playlistParsingError=null, this.variableList=null, this.hasVariableRefs=!1, this.appliedTimelineOffset=void 0, this.fragments=[],
    this.encryptedFragments=[], this.dateRanges={

    }, this.url=e
  }
  reloaded(e){
    if(!e){
      this.advanced=!0, this.updated=!0;
      return
    }
    const t=this.lastPartSn-e.lastPartSn, s=this.lastPartIndex-e.lastPartIndex;
    this.updated=this.endSN!==e.endSN||!!s||!!t||!this.live, this.advanced=this.endSN>e.endSN||t>0||t===0&&s>0, this.updated||this.advanced?this.misses=Math.floor(e.misses*.6):this.misses=e.misses+1
  }
  hasKey(e){
    return this.encryptedFragments.some(t=>{
      let s=t.decryptdata;
      return s||(t.setKeyFormat(e.keyFormat), s=t.decryptdata), !!s&&e.matches(s)
    })
  }
  get hasProgramDateTime(){
    return this.fragments.length?G(this.fragments[this.fragments.length-1].programDateTime):!1
  }
  get levelTargetDuration(){
    return this.averagetargetduration||this.targetduration||cT
  }
  get drift(){
    const e=this.driftEndTime-this.driftStartTime;
    return e>0?(this.driftEnd-this.driftStart)*1e3/e:1
  }
  get edge(){
    return this.partEnd||this.fragmentEnd
  }
  get partEnd(){
    var e;
    return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].end:this.fragmentEnd
  }
  get fragmentEnd(){
    return this.fragments.length?this.fragments[this.fragments.length-1].end:0
  }
  get fragmentStart(){
    return this.fragments.length?this.fragments[0].start:0
  }
  get age(){
    return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime, 0)/1e3:0
  }
  get lastPartIndex(){
    var e;
    return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].index:-1
  }
  get maxPartIndex(){
    const e=this.partList;
    if(e){
      const t=this.lastPartIndex;
      if(t!==-1){
        for(let s=e.length;
        s--;
        )if(e[s].index>t)return e[s].index;
        return t
      }

    }
    return 0
  }
  get lastPartSn(){
    var e;
    return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].fragment.sn:this.endSN
  }
  get expired(){
    if(this.live&&this.age&&this.misses<3){
      const e=this.partEnd-this.fragmentStart;
      return this.age>Math.max(e, this.totalduration)+this.levelTargetDuration
    }
    return!1
  }

}
function so(r, e){
  return r.length===e.length?!r.some((t, s)=>t!==e[s]):!1
}
function uf(r, e){
  return!r&&!e?!0:!r||!e?!1:so(r, e)
}
function qs(r){
  return r==="AES-128"||r==="AES-256"||r==="AES-256-CTR"
}
function Ju(r){
  switch(r){
    case"AES-128":case"AES-256":return zr.cbc;
    case"AES-256-CTR":return zr.ctr;
    default:throw new Error(`invalid full segment method ${r}`)
  }

}
function ed(r){
  return Uint8Array.from(atob(r), e=>e.charCodeAt(0))
}
function Dc(r){
  return Uint8Array.from(unescape(encodeURIComponent(r)), e=>e.charCodeAt(0))
}
function dT(r){
  const e=Dc(r).subarray(0, 16), t=new Uint8Array(16);
  return t.set(e, 16-e.length), t
}
function lp(r){
  const e=function(s, n, i){
    const a=s[n];
    s[n]=s[i], s[i]=a
  };
  e(r, 0, 3), e(r, 1, 2), e(r, 4, 5), e(r, 6, 7)
}
function cp(r){
  const e=r.split(":");
  let t=null;
  if(e[0]==="data"&&e.length===2){
    const s=e[1].split(";"), n=s[s.length-1].split(",");
    if(n.length===2){
      const i=n[0]==="base64", a=n[1];
      i?(s.splice(-1, 1), t=ed(a)):t=dT(a)
    }

  }
  return t
}
const no=typeof self<"u"?self:void 0;
var Se={
  CLEARKEY:"org.w3.clearkey", FAIRPLAY:"com.apple.fps", PLAYREADY:"com.microsoft.playready", WIDEVINE:"com.widevine.alpha"
}, Ge={
  CLEARKEY:"org.w3.clearkey", FAIRPLAY:"com.apple.streamingkeydelivery", PLAYREADY:"com.microsoft.playready", WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
};
function Ea(r){
  switch(r){
    case Ge.FAIRPLAY:return Se.FAIRPLAY;
    case Ge.PLAYREADY:return Se.PLAYREADY;
    case Ge.WIDEVINE:return Se.WIDEVINE;
    case Ge.CLEARKEY:return Se.CLEARKEY
  }

}
function ul(r){
  switch(r){
    case Se.FAIRPLAY:return Ge.FAIRPLAY;
    case Se.PLAYREADY:return Ge.PLAYREADY;
    case Se.WIDEVINE:return Ge.WIDEVINE;
    case Se.CLEARKEY:return Ge.CLEARKEY
  }

}
function _n(r){
  const{
    drmSystems:e, widevineLicenseUrl:t
  }
  =r, s=e?[Se.FAIRPLAY, Se.WIDEVINE, Se.PLAYREADY, Se.CLEARKEY].filter(n=>!!e[n]):[];
  return!s[Se.WIDEVINE]&&t&&s.push(Se.WIDEVINE), s
}
const up=function(r){
  return no!=null&&(r=no.navigator)!=null&&r.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null
}
();
function hT(r, e, t, s){
  let n;
  switch(r){
    case Se.FAIRPLAY:n=["cenc", "sinf"];
    break;
    case Se.WIDEVINE:case Se.PLAYREADY:n=["cenc"];
    break;
    case Se.CLEARKEY:n=["cenc", "keyids"];
    break;
    default:throw new Error(`Unknown key-system: ${r}`)
  }
  return fT(n, e, t, s)
}
function fT(r, e, t, s){
  return[{
    initDataTypes:r, persistentState:s.persistentState||"optional", distinctiveIdentifier:s.distinctiveIdentifier||"optional",
    sessionTypes:s.sessionTypes||[s.sessionType||"temporary"], audioCapabilities:e.map(i=>({
      contentType:`audio/mp4; codecs=${i}`, robustness:s.audioRobustness||"", encryptionScheme:s.audioEncryptionScheme||null
    })), videoCapabilities:t.map(i=>({
      contentType:`video/mp4; codecs=${i}`, robustness:s.videoRobustness||"", encryptionScheme:s.videoEncryptionScheme||null
    }))
  }]
}
function mT(r){
  var e;
  return!!r&&(r.sessionType==="persistent-license"||!!((e=r.sessionTypes)!=null&&e.some(t=>t==="persistent-license")))
}
function dp(r){
  const e=new Uint16Array(r.buffer, r.byteOffset, r.byteLength/2), t=String.fromCharCode.apply(null, Array.from(e)), s=t.substring(t.indexOf("<"),
  t.length), a=new DOMParser().parseFromString(s, "text/xml").getElementsByTagName("KID")[0];
  if(a){
    const o=a.childNodes[0]?a.childNodes[0].nodeValue:a.getAttribute("VALUE");
    if(o){
      const l=ed(o).subarray(0, 16);
      return lp(l), l
    }

  }
  return null
}
let Is={

};
class Vr{
  static clearKeyUriToKeyIdMap(){
    Is={

    }

  }
  static setKeyIdForUri(e, t){
    Is[e]=t
  }
  static addKeyIdForUri(e){
    const t=Object.keys(Is).length%Number.MAX_SAFE_INTEGER, s=new Uint8Array(16);
    return new DataView(s.buffer, 12, 4).setUint32(0, t), Is[e]=s, s
  }
  constructor(e, t, s, n=[1], i=null, a){
    this.uri=void 0, this.method=void 0, this.keyFormat=void 0, this.keyFormatVersions=void 0, this.encrypted=void 0, this.isCommonEncryption=void 0,
    this.iv=null, this.key=null, this.keyId=null, this.pssh=null, this.method=e, this.uri=t, this.keyFormat=s, this.keyFormatVersions=n,
    this.iv=i, this.encrypted=e?e!=="NONE":!1, this.isCommonEncryption=this.encrypted&&!qs(e), a!=null&&a.startsWith("0x")&&(this.keyId=new Uint8Array($g(a)))
  }
  matches(e){
    return e.uri===this.uri&&e.method===this.method&&e.encrypted===this.encrypted&&e.keyFormat===this.keyFormat&&so(e.keyFormatVersions,
    this.keyFormatVersions)&&uf(e.iv, this.iv)&&uf(e.keyId, this.keyId)
  }
  isSupported(){
    if(this.method){
      if(qs(this.method)||this.method==="NONE")return!0;
      if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";
      switch(this.keyFormat){
        case Ge.FAIRPLAY:case Ge.WIDEVINE:case Ge.PLAYREADY:case Ge.CLEARKEY:return["SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method)!==-1
      }

    }
    return!1
  }
  getDecryptData(e, t){
    if(!this.encrypted||!this.uri)return null;
    if(qs(this.method)){
      let i=this.iv;
      return i||(typeof e!="number"&&(ue.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`),
      e=0), i=pT(e)), new Vr(this.method, this.uri, "identity", this.keyFormatVersions, i)
    }
    if(this.keyId){
      const i=Is[this.uri];
      if(i&&!so(this.keyId, i)&&Vr.setKeyIdForUri(this.uri, this.keyId), this.pssh)return this
    }
    const s=cp(this.uri);
    if(s)switch(this.keyFormat){
      case Ge.WIDEVINE:if(this.pssh=s, !this.keyId){
        const i=xS(s.buffer);
        if(i.length){
          var n;
          const a=i[0];
          this.keyId=(n=a.kids)!=null&&n.length?a.kids[0]:null
        }

      }
      this.keyId||(this.keyId=df(t));
      break;
      case Ge.PLAYREADY:{
        const i=new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
        this.pssh=vS(i, null, s), this.keyId=dp(s);
        break
      }
      default:{
        let i=s.subarray(0, 16);
        if(i.length!==16){
          const a=new Uint8Array(16);
          a.set(i, 16-i.length), i=a
        }
        this.keyId=i;
        break
      }

    }
    if(!this.keyId||this.keyId.byteLength!==16){
      let i;
      i=gT(t), i||(i=df(t), i||(i=Is[this.uri])), i&&(this.keyId=i, Vr.setKeyIdForUri(this.uri, i))
    }
    return this
  }

}
function gT(r){
  const e=r==null?void 0:r[Ge.WIDEVINE];
  return e?e.keyId:null
}
function df(r){
  const e=r==null?void 0:r[Ge.PLAYREADY];
  if(e){
    const t=cp(e.uri);
    if(t)return dp(t)
  }
  return null
}
function pT(r){
  const e=new Uint8Array(16);
  for(let t=12;
  t<16;
  t++)e[t]=r>>8*(15-t)&255;
  return e
}
const hf=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
ff=/#EXT-X-MEDIA:(.*)/g, yT=/^#EXT(?:INF|-X-TARGETDURATION):/m, dl=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
/(?!#) *(\S[^\r\n]*)/.source, /#.*/.source].join("|"), "g"), vT=new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,
/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,
/(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class Zt{
  static findGroup(e, t){
    for(let s=0;
    s<e.length;
    s++){
      const n=e[s];
      if(n.id===t)return n
    }

  }
  static resolve(e, t){
    return Hu.buildAbsoluteURL(t, e, {
      alwaysNormalize:!0
    })
  }
  static isMediaPlaylist(e){
    return yT.test(e)
  }
  static parseMasterPlaylist(e, t){
    const s=of(e), n={
      contentSteering:null, levels:[], playlistParsingError:null, sessionData:null, sessionKeys:null, startTimeOffset:null,
      variableList:null, hasVariableRefs:s
    }, i=[];
    if(hf.lastIndex=0, !e.startsWith("#EXTM3U"))return n.playlistParsingError=new Error("no EXTM3U delimiter"), n;
    let a;
    for(;
    (a=hf.exec(e))!=null;
    )if(a[1]){
      var o;
      const c=new xe(a[1], n), u=Cc(n, a[2]), d={
        attrs:c, bitrate:c.decimalInteger("BANDWIDTH")||c.decimalInteger("AVERAGE-BANDWIDTH"), name:c.NAME, url:Zt.resolve(u,
        t)
      }, h=c.decimalResolution("RESOLUTION");
      h&&(d.width=h.width, d.height=h.height), pf(c.CODECS, d);
      const f=c["SUPPLEMENTAL-CODECS"];
      f&&(d.supplemental={

      }, pf(f, d.supplemental)), (o=d.unknownCodecs)!=null&&o.length||i.push(d), n.levels.push(d)
    }
    else if(a[3]){
      const c=a[3], u=a[4];
      switch(c){
        case"SESSION-DATA":{
          const d=new xe(u, n), h=d["DATA-ID"];
          h&&(n.sessionData===null&&(n.sessionData={

          }), n.sessionData[h]=d);
          break
        }
        case"SESSION-KEY":{
          const d=mf(u, t, n);
          d.encrypted&&d.isSupported()?(n.sessionKeys===null&&(n.sessionKeys=[]), n.sessionKeys.push(d)):ue.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${u}"`);
          break
        }
        case"DEFINE":{
          {
            const d=new xe(u, n);
            lf(n, d, t)
          }
          break
        }
        case"CONTENT-STEERING":{
          const d=new xe(u, n);
          n.contentSteering={
            uri:Zt.resolve(d["SERVER-URI"], t), pathwayId:d["PATHWAY-ID"]||"."
          };
          break
        }
        case"START":{
          n.startTimeOffset=gf(u);
          break
        }

      }

    }
    const l=i.length>0&&i.length<n.levels.length;
    return n.levels=l?i:n.levels, n.levels.length===0&&(n.playlistParsingError=new Error("no levels found in manifest")),
    n
  }
  static parseMasterPlaylistMedia(e, t, s){
    let n;
    const i={

    }, a=s.levels, o={
      AUDIO:a.map(c=>({
        id:c.attrs.AUDIO, audioCodec:c.audioCodec
      })), SUBTITLES:a.map(c=>({
        id:c.attrs.SUBTITLES, textCodec:c.textCodec
      })), "CLOSED-CAPTIONS":[]
    };
    let l=0;
    for(ff.lastIndex=0;
    (n=ff.exec(e))!==null;
    ){
      const c=new xe(n[1], s), u=c.TYPE;
      if(u){
        const d=o[u], h=i[u]||[];
        i[u]=h;
        const f=c.LANGUAGE, g=c["ASSOC-LANGUAGE"], y=c.CHANNELS, x=c.CHARACTERISTICS, p=c["INSTREAM-ID"], v={
          attrs:c, bitrate:0, id:l++, groupId:c["GROUP-ID"]||"", name:c.NAME||f||"", type:u, default:c.bool("DEFAULT"), autoselect:c.bool("AUTOSELECT"),
          forced:c.bool("FORCED"), lang:f, url:c.URI?Zt.resolve(c.URI, t):""
        };
        if(g&&(v.assocLang=g), y&&(v.channels=y), x&&(v.characteristics=x), p&&(v.instreamId=p), d!=null&&d.length){
          const E=Zt.findGroup(d, v.groupId)||d[0];
          yf(v, E, "audioCodec"), yf(v, E, "textCodec")
        }
        h.push(v)
      }

    }
    return i
  }
  static parseLevelPlaylist(e, t, s, n, i, a){
    var o;
    const l={
      url:t
    }, c=new uT(t), u=c.fragments, d=[];
    let h=null, f=0, g=0, y=0, x=0, p=0, v=null, E=new ol(n, l), T, I, b, L=-1, A=!1, w=null, R;
    if(dl.lastIndex=0, c.m3u8=e, c.hasVariableRefs=of(e), ((o=dl.exec(e))==null?void 0:o[0])!=="#EXTM3U")return c.playlistParsingError=new Error("Missing format identifier #EXTM3U")
    , c;
    for(;
    (T=dl.exec(e))!==null;
    ){
      A&&(A=!1, E=new ol(n, l), E.playlistOffset=y, E.setStart(y), E.sn=f, E.cc=x, p&&(E.bitrate=p), E.level=s, h&&(E.initSegment=h,
      h.rawProgramDateTime&&(E.rawProgramDateTime=h.rawProgramDateTime, h.rawProgramDateTime=null), w&&(E.setByteRange(w),
      w=null)));
      const Y=T[1];
      if(Y){
        E.duration=parseFloat(Y);
        const K=(" "+T[2]).slice(1);
        E.title=K||null, E.tagList.push(K?["INF", Y, K]:["INF", Y])
      }
      else if(T[3]){
        if(G(E.duration)){
          E.playlistOffset=y, E.setStart(y), b&&xf(E, b, c), E.sn=f, E.level=s, E.cc=x, u.push(E);
          const K=(" "+T[3]).slice(1);
          E.relurl=Cc(c, K), Pc(E, v, d), v=E, y+=E.duration, f++, g=0, A=!0
        }

      }
      else{
        if(T=T[0].match(vT), !T){
          ue.warn("No matches on slow regex match for level playlist!");
          continue
        }
        for(I=1;
        I<T.length&&T[I]===void 0;
        I++);
        const K=(" "+T[I]).slice(1), B=(" "+T[I+1]).slice(1), H=T[I+2]?(" "+T[I+2]).slice(1):null;
        switch(K){
          case"BYTERANGE":v?E.setByteRange(B, v):E.setByteRange(B);
          break;
          case"PROGRAM-DATE-TIME":E.rawProgramDateTime=B, E.tagList.push(["PROGRAM-DATE-TIME", B]), L===-1&&(L=u.length);
          break;
          case"PLAYLIST-TYPE":c.type&&ir(c, K, T), c.type=B.toUpperCase();
          break;
          case"MEDIA-SEQUENCE":c.startSN!==0?ir(c, K, T):u.length>0&&Ef(c, K, T), f=c.startSN=parseInt(B);
          break;
          case"SKIP":{
            c.skippedSegments&&ir(c, K, T);
            const P=new xe(B, c), O=P.decimalInteger("SKIPPED-SEGMENTS");
            if(G(O)){
              c.skippedSegments+=O;
              for(let M=O;
              M--;
              )u.push(null);
              f+=O
            }
            const j=P.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            j&&(c.recentlyRemovedDateranges=(c.recentlyRemovedDateranges||[]).concat(j.split("	")));
            break
          }
          case"TARGETDURATION":c.targetduration!==0&&ir(c, K, T), c.targetduration=Math.max(parseInt(B), 1);
          break;
          case"VERSION":c.version!==null&&ir(c, K, T), c.version=parseInt(B);
          break;
          case"INDEPENDENT-SEGMENTS":break;
          case"ENDLIST":c.live||ir(c, K, T), c.live=!1;
          break;
          case"#":(B||H)&&E.tagList.push(H?[B, H]:[B]);
          break;
          case"DISCONTINUITY":x++, E.tagList.push(["DIS"]);
          break;
          case"GAP":E.gap=!0, E.tagList.push([K]);
          break;
          case"BITRATE":E.tagList.push([K, B]), p=parseInt(B)*1e3, G(p)?E.bitrate=p:p=0;
          break;
          case"DATERANGE":{
            const P=new xe(B, c), O=new op(P, c.dateRanges[P.ID], c.dateRangeTagCount);
            c.dateRangeTagCount++, O.isValid||c.skippedSegments?c.dateRanges[O.id]=O:ue.warn(`Ignoring invalid DATERANGE tag: "${B}"`),
            E.tagList.push(["EXT-X-DATERANGE", B]);
            break
          }
          case"DEFINE":{
            {
              const P=new xe(B, c);
              "IMPORT"in P?nT(c, P, a):lf(c, P, t)
            }
            break
          }
          case"DISCONTINUITY-SEQUENCE":c.startCC!==0?ir(c, K, T):u.length>0&&Ef(c, K, T), c.startCC=x=parseInt(B);
          break;
          case"KEY":{
            const P=mf(B, t, c);
            if(P.isSupported()){
              if(P.method==="NONE"){
                b=void 0;
                break
              }
              b||(b={

              });
              const O=b[P.keyFormat];
              O!=null&&O.matches(P)||(O&&(b=he({

              }, b)), b[P.keyFormat]=P)
            }
            else ue.warn(`[Keys] Ignoring unsupported EXT-X-KEY tag: "${B}"`);
            break
          }
          case"START":c.startTimeOffset=gf(B);
          break;
          case"MAP":{
            const P=new xe(B, c);
            if(E.duration){
              const O=new ol(n, l);
              vf(O, P, s, b), h=O, E.initSegment=h, h.rawProgramDateTime&&!E.rawProgramDateTime&&(E.rawProgramDateTime=h.rawProgramDateTime)
            }
            else{
              const O=E.byteRangeEndOffset;
              if(O){
                const j=E.byteRangeStartOffset;
                w=`${O-j}@${j}`
              }
              else w=null;
              vf(E, P, s, b), h=E, A=!0
            }
            h.cc=x;
            break
          }
          case"SERVER-CONTROL":{
            R&&ir(c, K, T), R=new xe(B), c.canBlockReload=R.bool("CAN-BLOCK-RELOAD"), c.canSkipUntil=R.optionalFloat("CAN-SKIP-UNTIL",
            0), c.canSkipDateRanges=c.canSkipUntil>0&&R.bool("CAN-SKIP-DATERANGES"), c.partHoldBack=R.optionalFloat("PART-HOLD-BACK",
            0), c.holdBack=R.optionalFloat("HOLD-BACK", 0);
            break
          }
          case"PART-INF":{
            c.partTarget&&ir(c, K, T);
            const P=new xe(B);
            c.partTarget=P.decimalFloatingPoint("PART-TARGET");
            break
          }
          case"PART":{
            let P=c.partList;
            P||(P=c.partList=[]);
            const O=g>0?P[P.length-1]:void 0, j=g++, M=new xe(B, c), F=new nS(M, E, l, j, O);
            P.push(F), E.duration+=F.duration;
            break
          }
          case"PRELOAD-HINT":{
            const P=new xe(B, c);
            c.preloadHint=P;
            break
          }
          case"RENDITION-REPORT":{
            const P=new xe(B, c);
            c.renditionReports=c.renditionReports||[], c.renditionReports.push(P);
            break
          }
          default:ue.warn(`line parsed but not handled: ${T}`);
          break
        }

      }

    }
    v&&!v.relurl?(u.pop(), y-=v.duration, c.partList&&(c.fragmentHint=v)):c.partList&&(Pc(E, v, d), E.cc=x, c.fragmentHint=E,
    b&&xf(E, b, c)), c.targetduration||(c.playlistParsingError=new Error("Missing Target Duration"));
    const D=u.length, $=u[0], V=u[D-1];
    if(y+=c.skippedSegments*c.targetduration, y>0&&D&&V){
      c.averagetargetduration=y/D;
      const Y=V.sn;
      c.endSN=Y!=="initSegment"?Y:0, c.live||(V.endList=!0), L>0&&(ET(u, L), $&&d.unshift($))
    }
    return c.fragmentHint&&(y+=c.fragmentHint.duration), c.totalduration=y, d.length&&c.dateRangeTagCount&&$&&hp(d, c), c.endCC=x,
    c
  }

}
function hp(r, e){
  let t=r.length;
  if(!t)if(e.hasProgramDateTime){
    const o=e.fragments[e.fragments.length-1];
    r.push(o), t++
  }
  else return;
  const s=r[t-1], n=e.live?1/0:e.totalduration, i=Object.keys(e.dateRanges);
  for(let o=i.length;
  o--;
  ){
    const l=e.dateRanges[i[o]], c=l.startDate.getTime();
    l.tagAnchor=s.ref;
    for(let u=t;
    u--;
    ){
      var a;
      if(((a=r[u])==null?void 0:a.sn)<e.startSN)break;
      const d=xT(e, c, r, u, n);
      if(d!==-1){
        l.tagAnchor=e.fragments[d].ref;
        break
      }

    }

  }

}
function xT(r, e, t, s, n){
  const i=t[s];
  if(i){
    const o=i.programDateTime;
    if(e>=o||s===0){
      var a;
      const l=(((a=t[s+1])==null?void 0:a.start)||n)-i.start;
      if(e<=o+l*1e3){
        const c=t[s].sn-r.startSN;
        if(c<0)return-1;
        const u=r.fragments;
        if(u.length>t.length){
          const h=(t[s+1]||u[u.length-1]).sn-r.startSN;
          for(let f=h;
          f>c;
          f--){
            const g=u[f].programDateTime;
            if(e>=g&&e<g+u[f].duration*1e3)return f
          }

        }
        return c
      }

    }

  }
  return-1
}
function mf(r, e, t){
  var s, n;
  const i=new xe(r, t), a=(s=i.METHOD)!=null?s:"", o=i.URI, l=i.hexadecimalInteger("IV"), c=i.KEYFORMATVERSIONS, u=(n=i.KEYFORMAT)!=null?n:"identity";
  o&&i.IV&&!l&&ue.error(`Invalid IV: ${i.IV}`);
  const d=o?Zt.resolve(o, e):"", h=(c||"1").split("/").map(Number).filter(Number.isFinite);
  return new Vr(a, d, u, h, l, i.KEYID)
}
function gf(r){
  const t=new xe(r).decimalFloatingPoint("TIME-OFFSET");
  return G(t)?t:null
}
function pf(r, e){
  let t=(r||"").split(/[ ,]+/).filter(s=>s);
  ["video", "audio", "text"].forEach(s=>{
    const n=t.filter(i=>Yu(i, s));
    n.length&&(e[`${s}Codec`]=n.map(i=>i.split("/")[0]).join(","), t=t.filter(i=>n.indexOf(i)===-1))
  }), e.unknownCodecs=t
}
function yf(r, e, t){
  const s=e[t];
  s&&(r[t]=s)
}
function ET(r, e){
  let t=r[e];
  for(let s=e;
  s--;
  ){
    const n=r[s];
    if(!n)return;
    n.programDateTime=t.programDateTime-n.duration*1e3, t=n
  }

}
function Pc(r, e, t){
  r.rawProgramDateTime?t.push(r):e!=null&&e.programDateTime&&(r.programDateTime=e.endProgramDateTime)
}
function vf(r, e, t, s){
  r.relurl=e.URI, e.BYTERANGE&&r.setByteRange(e.BYTERANGE), r.level=t, r.sn="initSegment", s&&(r.levelkeys=s), r.initSegment=null
}
function xf(r, e, t){
  r.levelkeys=e;
  const{
    encryptedFragments:s
  }
  =t;
  (!s.length||s[s.length-1].levelkeys!==e)&&Object.keys(e).some(n=>e[n].isCommonEncryption)&&s.push(r)
}
function ir(r, e, t){
  r.playlistParsingError=new Error(`#EXT-X-${e} must not appear more than once (${t[0]})`)
}
function Ef(r, e, t){
  r.playlistParsingError=new Error(`#EXT-X-${e} must appear before the first Media Segment (${t[0]})`)
}
function hl(r, e){
  const t=e.startPTS;
  if(G(t)){
    let s=0, n;
    e.sn>r.sn?(s=t-r.start, n=r):(s=r.start-t, n=e), n.duration!==s&&n.setDuration(s)
  }
  else e.sn>r.sn?r.cc===e.cc&&r.minEndPTS?e.setStart(r.start+(r.minEndPTS-r.start)):e.setStart(r.start+r.duration):e.setStart(Math.max(r.start-e.duration,
  0))
}
function fp(r, e, t, s, n, i, a){
  s-t<=0&&(a.warn("Fragment should have a positive duration", e), s=t+e.duration, i=n+e.duration);
  let l=t, c=s;
  const u=e.startPTS, d=e.endPTS;
  if(G(u)){
    const p=Math.abs(u-t);
    r&&p>r.totalduration?a.warn(`media timestamps and playlist times differ by ${p}s for level ${e.level} ${r.url}`):G(e.deltaPTS)?e.deltaPTS=Math.max(p,
    e.deltaPTS):e.deltaPTS=p, l=Math.max(t, u), t=Math.min(t, u), n=e.startDTS!==void 0?Math.min(n, e.startDTS):n, c=Math.min(s,
    d), s=Math.max(s, d), i=e.endDTS!==void 0?Math.max(i, e.endDTS):i
  }
  const h=t-e.start;
  e.start!==0&&e.setStart(t), e.setDuration(s-e.start), e.startPTS=t, e.maxStartPTS=l, e.startDTS=n, e.endPTS=s, e.minEndPTS=c,
  e.endDTS=i;
  const f=e.sn;
  if(!r||f<r.startSN||f>r.endSN)return 0;
  let g;
  const y=f-r.startSN, x=r.fragments;
  for(x[y]=e, g=y;
  g>0;
  g--)hl(x[g], x[g-1]);
  for(g=y;
  g<x.length-1;
  g++)hl(x[g], x[g+1]);
  return r.fragmentHint&&hl(x[x.length-1], r.fragmentHint), r.PTSKnown=r.alignedSliding=!0, h
}
function ST(r, e, t){
  if(r===e)return;
  let s=null;
  const n=r.fragments;
  for(let u=n.length-1;
  u>=0;
  u--){
    const d=n[u].initSegment;
    if(d){
      s=d;
      break
    }

  }
  r.fragmentHint&&delete r.fragmentHint.endPTS;
  let i;
  LT(r, e, (u, d, h, f)=>{
    if((!e.startCC||e.skippedSegments)&&d.cc!==u.cc){
      const g=u.cc-d.cc;
      for(let y=h;
      y<f.length;
      y++)f[y].cc+=g;
      e.endCC=f[f.length-1].cc
    }
    G(u.startPTS)&&G(u.endPTS)&&(d.setStart(d.startPTS=u.startPTS), d.startDTS=u.startDTS, d.maxStartPTS=u.maxStartPTS, d.endPTS=u.endPTS,
    d.endDTS=u.endDTS, d.minEndPTS=u.minEndPTS, d.setDuration(u.endPTS-u.startPTS), d.duration&&(i=d), e.PTSKnown=e.alignedSliding=!0),
    u.hasStreams&&(d.elementaryStreams=u.elementaryStreams), d.loader=u.loader, u.hasStats&&(d.stats=u.stats), u.initSegment&&(d.initSegment=u.initSegment,
    s=u.initSegment)
  });
  const a=e.fragments, o=e.fragmentHint?a.concat(e.fragmentHint):a;
  if(s&&o.forEach(u=>{
    var d;
    u&&(!u.initSegment||u.initSegment.relurl===((d=s)==null?void 0:d.relurl))&&(u.initSegment=s)
  }), e.skippedSegments){
    if(e.deltaUpdateFailed=a.some(u=>!u), e.deltaUpdateFailed){
      t.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for(let u=e.skippedSegments;
      u--;
      )a.shift();
      e.startSN=a[0].sn
    }
    else{
      e.canSkipDateRanges&&(e.dateRanges=TT(r.dateRanges, e, t));
      const u=r.fragments.filter(d=>d.rawProgramDateTime);
      if(r.hasProgramDateTime&&!e.hasProgramDateTime)for(let d=1;
      d<o.length;
      d++)o[d].programDateTime===null&&Pc(o[d], o[d-1], u);
      hp(u, e)
    }
    e.endCC=a[a.length-1].cc
  }
  if(!e.startCC){
    var l;
    const u=pp(r, e.startSN-1);
    e.startCC=(l=u==null?void 0:u.cc)!=null?l:a[0].cc
  }
  IT(r.partList, e.partList, (u, d)=>{
    d.elementaryStreams=u.elementaryStreams, d.stats=u.stats
  }), i?fp(e, i, i.startPTS, i.endPTS, i.startDTS, i.endDTS, t):mp(r, e), a.length&&(e.totalduration=e.edge-a[0].start), e.driftStartTime=r.driftStartTime,
  e.driftStart=r.driftStart;
  const c=e.advancedDateTime;
  if(e.advanced&&c){
    const u=e.edge;
    e.driftStart||(e.driftStartTime=c, e.driftStart=u), e.driftEndTime=c, e.driftEnd=u
  }
  else e.driftEndTime=r.driftEndTime, e.driftEnd=r.driftEnd, e.advancedDateTime=r.advancedDateTime;
  e.requestScheduled===-1&&(e.requestScheduled=r.requestScheduled)
}
function TT(r, e, t){
  const{
    dateRanges:s, recentlyRemovedDateranges:n
  }
  =e, i=he({

  }, r);
  n&&n.forEach(l=>{
    delete i[l]
  });
  const o=Object.keys(i).length;
  return o?(Object.keys(s).forEach(l=>{
    const c=i[l], u=new op(s[l].attr, c);
    u.isValid?(i[l]=u, c||(u.tagOrder+=o)):t.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${me(s[l].attr)}"`)
  }), i):s
}
function IT(r, e, t){
  if(r&&e){
    let s=0;
    for(let n=0, i=r.length;
    n<=i;
    n++){
      const a=r[n], o=e[n+s];
      a&&o&&a.index===o.index&&a.fragment.sn===o.fragment.sn?t(a, o):s--
    }

  }

}
function LT(r, e, t){
  const s=e.skippedSegments, n=Math.max(r.startSN, e.startSN)-e.startSN, i=(r.fragmentHint?1:0)+(s?e.endSN:Math.min(r.endSN,
  e.endSN))-e.startSN, a=e.startSN-r.startSN, o=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments, l=r.fragmentHint?r.fragments.concat(r.fragmentHint):r.fragments;
  for(let c=n;
  c<=i;
  c++){
    const u=l[a+c];
    let d=o[c];
    if(s&&!d&&u&&(d=e.fragments[c]=u), u&&d){
      t(u, d, c, o);
      const h=u.relurl, f=d.relurl;
      if(h&&AT(h, f)){
        e.playlistParsingError=Sf(`media sequence mismatch ${d.sn}:`, r, e, u, d);
        return
      }
      else if(u.cc!==d.cc){
        e.playlistParsingError=Sf(`discontinuity sequence mismatch (${u.cc}!=${d.cc})`, r, e, u, d);
        return
      }

    }

  }

}
function Sf(r, e, t, s, n){
  return new Error(`${r} ${n.url}
Playlist starting @${e.startSN}
${e.m3u8}

Playlist starting @${t.startSN}
${t.m3u8}`)
}
function mp(r, e, t=!0){
  const s=e.startSN+e.skippedSegments-r.startSN, n=r.fragments, i=s>=0;
  let a=0;
  if(i&&s<n.length)a=n[s].start;
  else if(i&&e.startSN===r.endSN+1)a=r.fragmentEnd;
  else if(i&&t)a=r.fragmentStart+s*e.levelTargetDuration;
  else if(!e.skippedSegments&&e.fragmentStart===0)a=r.fragmentStart;
  else return;
  Nc(e, a)
}
function Nc(r, e){
  if(e){
    const t=r.fragments;
    for(let s=r.skippedSegments;
    s<t.length;
    s++)t[s].addStart(e);
    r.fragmentHint&&r.fragmentHint.addStart(e)
  }

}
function gp(r, e=1/0){
  let t=1e3*r.targetduration;
  if(r.updated){
    const s=r.fragments;
    if(s.length&&t*4>e){
      const i=s[s.length-1].duration*1e3;
      i<t&&(t=i)
    }

  }
  else t/=2;
  return Math.round(t)
}
function pp(r, e, t){
  if(!r)return null;
  let s=r.fragments[e-r.startSN];
  return s||(s=r.fragmentHint, s&&s.sn===e)?s:e<r.startSN&&t&&t.sn===e?t:null
}
function Tf(r, e, t){
  return r?yp(r.partList, e, t):null
}
function yp(r, e, t){
  if(r)for(let s=r.length;
  s--;
  ){
    const n=r[s];
    if(n.index===t&&n.fragment.sn===e)return n
  }
  return null
}
function vp(r){
  r.forEach((e, t)=>{
    var s;
    (s=e.details)==null||s.fragments.forEach(n=>{
      n.level=t, n.initSegment&&(n.initSegment.level=t)
    })
  })
}
function AT(r, e){
  return r!==e&&e?If(r)!==If(e):!1
}
function If(r){
  return r.replace(/\?[^?]*$/, "")
}
function $n(r, e){
  for(let s=0, n=r.length;
  s<n;
  s++){
    var t;
    if(((t=r[s])==null?void 0:t.cc)===e)return r[s]
  }
  return null
}
function RT(r, e){
  return!!(r&&e.startCC<r.endCC&&e.endCC>r.startCC)
}
function Lf(r, e){
  const t=r.start+e;
  r.startPTS=t, r.setStart(t), r.endPTS=t+r.duration
}
function xp(r, e){
  const t=e.fragments;
  for(let s=0, n=t.length;
  s<n;
  s++)Lf(t[s], r);
  e.fragmentHint&&Lf(e.fragmentHint, r), e.alignedSliding=!0
}
function wT(r, e){
  r&&(Ep(e, r), e.alignedSliding||io(e, r), !e.alignedSliding&&!e.skippedSegments&&mp(r, e, !1))
}
function Ep(r, e){
  if(!RT(e, r))return;
  const t=Math.min(e.endCC, r.endCC), s=$n(e.fragments, t), n=$n(r.fragments, t);
  if(!s||!n)return;
  ue.log(`Aligning playlist at start of dicontinuity sequence ${t}`);
  const i=s.start-n.start;
  xp(i, r)
}
function io(r, e){
  if(!r.hasProgramDateTime||!e.hasProgramDateTime)return;
  const t=r.fragments, s=e.fragments;
  if(!t.length||!s.length)return;
  let n, i;
  const a=Math.min(e.endCC, r.endCC);
  e.startCC<a&&r.startCC<a&&(n=$n(s, a), i=$n(t, a)), (!n||!i)&&(n=s[Math.floor(s.length/2)], i=$n(t, n.cc)||t[Math.floor(t.length/2)]);
  const o=n.programDateTime, l=i.programDateTime;
  if(!o||!l)return;
  const c=(l-o)/1e3-(i.start-n.start);
  xp(c, r)
}
function Ze(r, e, t){
  it(r, e, t), r.addEventListener(e, t)
}
function it(r, e, t){
  r.removeEventListener(e, t)
}
const bT={
  toString:function(r){
    let e="";
    const t=r.length;
    for(let s=0;
    s<t;
    s++)e+=`[${r.start(s).toFixed(3)}-${r.end(s).toFixed(3)}]`;
    return e
  }

}, N={
  STOPPED:"STOPPED", IDLE:"IDLE", KEY_LOADING:"KEY_LOADING", FRAG_LOADING:"FRAG_LOADING", FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",
  WAITING_TRACK:"WAITING_TRACK", PARSING:"PARSING", PARSED:"PARSED", ENDED:"ENDED", ERROR:"ERROR", WAITING_INIT_PTS:"WAITING_INIT_PTS",
  WAITING_LEVEL:"WAITING_LEVEL"
};
class td extends ip{
  constructor(e, t, s, n, i){
    super(n, e.logger), this.hls=void 0, this.fragPrevious=null, this.fragCurrent=null, this.fragmentTracker=void 0, this.transmuxer=null,
    this._state=N.STOPPED, this.playlistType=void 0, this.media=null, this.mediaBuffer=null, this.config=void 0, this.bitrateTest=!1,
    this.lastCurrentTime=0, this.nextLoadPosition=0, this.startPosition=0, this.startTimeOffset=null, this.retryDate=0, this.levels=null,
    this.fragmentLoader=void 0, this.keyLoader=void 0, this.levelLastLoaded=null, this.startFragRequested=!1, this.decrypter=void 0,
    this.initPTS=[], this.buffering=!0, this.loadingParts=!1, this.loopSn=void 0, this.onMediaSeeking=()=>{
      const{
        config:a, fragCurrent:o, media:l, mediaBuffer:c, state:u
      }
      =this, d=l?l.currentTime:0, h=Z.bufferInfo(c||l, d, a.maxBufferHole), f=!h.len;
      if(this.log(`Media seeking to ${G(d)?d.toFixed(3):d}, state: ${u}, ${f?"out of":"in"} buffer`), this.state===N.ENDED)this.resetLoadingState();
      else if(o){
        const g=a.maxFragLookUpTolerance, y=o.start-g, x=o.start+o.duration+g;
        if(f||x<h.start||y>h.end){
          const p=d>x;
          (d<y||p)&&(p&&o.loader&&(this.log(`Cancelling fragment load for seek (sn: ${o.sn})`), o.abortRequests(), this.resetLoadingState()),
          this.fragPrevious=null)
        }

      }
      if(l){
        this.fragmentTracker.removeFragmentsInRange(d, 1/0, this.playlistType, !0);
        const g=this.lastCurrentTime;
        if(d>g&&(this.lastCurrentTime=d), !this.loadingParts){
          const y=Math.max(h.end, d), x=this.shouldLoadParts(this.getLevelDetails(), y);
          x&&(this.log(`LL-Part loading ON after seeking to ${d.toFixed(2)} with buffer @${y.toFixed(2)}`), this.loadingParts=x)
        }

      }
      this.hls.hasEnoughToStart||(this.log(`Setting ${f?"startPosition":"nextLoadPosition"} to ${d} for seek without enough to start`),
      this.nextLoadPosition=d, f&&(this.startPosition=d)), f&&this.state===N.IDLE&&this.tickImmediate()
    }, this.onMediaEnded=()=>{
      this.log("setting startPosition to 0 because media ended"), this.startPosition=this.lastCurrentTime=0
    }, this.playlistType=i, this.hls=e, this.fragmentLoader=new rT(e.config), this.keyLoader=s, this.fragmentTracker=t, this.config=e.config,
    this.decrypter=new Xu(e.config)
  }
  registerListeners(){
    const{
      hls:e
    }
    =this;
    e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING,
    this.onManifestLoading, this), e.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(S.ERROR, this.onError, this)
  }
  unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING,
    this.onManifestLoading, this), e.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(S.ERROR, this.onError, this)
  }
  doTick(){
    this.onTickEnd()
  }
  onTickEnd(){

  }
  startLoad(e){

  }
  stopLoad(){
    if(this.state===N.STOPPED)return;
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e=this.fragCurrent;
    e!=null&&e.loader&&(e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent=null,
    this.fragPrevious=null, this.clearInterval(), this.clearNextTick(), this.state=N.STOPPED
  }
  get startPositionValue(){
    const{
      nextLoadPosition:e, startPosition:t
    }
    =this;
    return t===-1&&e?e:t
  }
  get bufferingEnabled(){
    return this.buffering
  }
  pauseBuffering(){
    this.buffering=!1
  }
  resumeBuffering(){
    this.buffering=!0
  }
  get inFlightFrag(){
    return{
      frag:this.fragCurrent, state:this.state
    }

  }
  _streamEnded(e, t){
    if(t.live||!this.media)return!1;
    const s=e.end||0, n=this.config.timelineOffset||0;
    if(s<=n)return!1;
    const i=e.buffered;
    this.config.maxBufferHole&&i&&i.length>1&&(e=Z.bufferedInfo(i, e.start, 0));
    const a=e.nextStart;
    if(a&&a>n&&a<t.edge||this.media.currentTime<e.start)return!1;
    const l=t.partList;
    if(l!=null&&l.length){
      const u=l[l.length-1];
      return Z.isBuffered(this.media, u.start+u.duration/2)
    }
    const c=t.fragments[t.fragments.length-1].type;
    return this.fragmentTracker.isEndListAppended(c)
  }
  getLevelDetails(){
    if(this.levels&&this.levelLastLoaded!==null)return this.levelLastLoaded.details
  }
  get timelineOffset(){
    const e=this.config.timelineOffset;
    if(e){
      var t;
      return((t=this.getLevelDetails())==null?void 0:t.appliedTimelineOffset)||e
    }
    return 0
  }
  onMediaAttached(e, t){
    const s=this.media=this.mediaBuffer=t.media;
    Ze(s, "seeking", this.onMediaSeeking), Ze(s, "ended", this.onMediaEnded);
    const n=this.config;
    this.levels&&n.autoStartLoad&&this.state===N.STOPPED&&this.startLoad(n.startPosition)
  }
  onMediaDetaching(e, t){
    const s=!!t.transferMedia, n=this.media;
    if(n!==null){
      if(n.ended&&(this.log("MSE detaching and video ended, reset startPosition"), this.startPosition=this.lastCurrentTime=0),
      it(n, "seeking", this.onMediaSeeking), it(n, "ended", this.onMediaEnded), this.keyLoader&&!s&&this.keyLoader.detach(),
      this.media=this.mediaBuffer=null, this.loopSn=void 0, s){
        this.resetLoadingState(), this.resetTransmuxer();
        return
      }
      this.loadingParts=!1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
    }

  }
  onManifestLoading(){
    this.initPTS=[], this.levels=this.levelLastLoaded=this.fragCurrent=null, this.lastCurrentTime=this.startPosition=0, this.startFragRequested=!1
  }
  onError(e, t){

  }
  onManifestLoaded(e, t){
    this.startTimeOffset=t.startTimeOffset
  }
  onHandlerDestroying(){
    this.stopLoad(), this.transmuxer&&(this.transmuxer.destroy(), this.transmuxer=null), super.onHandlerDestroying(), this.hls=this.onMediaSeeking=this.onMediaEnded=null
  }
  onHandlerDestroyed(){
    this.state=N.STOPPED, this.fragmentLoader&&this.fragmentLoader.destroy(), this.keyLoader&&this.keyLoader.destroy(), this.decrypter&&this.decrypter.destroy(),
    this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null, super.onHandlerDestroyed()
  }
  loadFragment(e, t, s){
    this.startFragRequested=!0, this._loadFragForPlayback(e, t, s)
  }
  _loadFragForPlayback(e, t, s){
    const n=i=>{
      const a=i.frag;
      if(this.fragContextChanged(a)){
        this.warn(`${a.type} sn: ${a.sn}${i.part?" part: "+i.part.index:""} of ${this.fragInfo(a,!1,i.part)}) was dropped during download.`),
        this.fragmentTracker.removeFragment(a);
        return
      }
      a.stats.chunkCount++, this._handleFragmentLoadProgress(i)
    };
    this._doFragLoad(e, t, s, n).then(i=>{
      if(!i)return;
      const a=this.state, o=i.frag;
      if(this.fragContextChanged(o)){
        (a===N.FRAG_LOADING||!this.fragCurrent&&a===N.PARSING)&&(this.fragmentTracker.removeFragment(o), this.state=N.IDLE);
        return
      }
      "payload"in i&&(this.log(`Loaded ${o.type} sn: ${o.sn} of ${this.playlistLabel()} ${o.level}`), this.hls.trigger(S.FRAG_LOADED,
      i)), this._handleFragmentLoadComplete(i)
    }).catch(i=>{
      this.state===N.STOPPED||this.state===N.ERROR||(this.warn(`Frag error: ${(i==null?void 0:i.message)||i}`), this.resetFragmentLoading(e))
    })
  }
  clearTrackerIfNeeded(e){
    var t;
    const{
      fragmentTracker:s
    }
    =this;
    if(s.getState(e)===Pe.APPENDING){
      const i=e.type, a=this.getFwdBufferInfo(this.mediaBuffer, i), o=Math.max(e.duration, a?a.len:this.config.maxBufferLength),
      l=this.backtrackFragment;
      ((l?e.sn-l.sn:0)===1||this.reduceMaxBufferLength(o, e.duration))&&s.removeFragment(e)
    }
    else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0?s.removeAllFragments():s.hasParts(e.type)&&(s.detectPartialFragments({
      frag:e, part:null, stats:e.stats, id:e.type
    }), s.getState(e)===Pe.PARTIAL&&s.removeFragment(e))
  }
  checkLiveUpdate(e){
    if(e.updated&&!e.live){
      const t=e.fragments[e.fragments.length-1];
      this.fragmentTracker.detectPartialFragments({
        frag:t, part:null, stats:t.stats, id:t.type
      })
    }
    e.fragments[0]||(e.deltaUpdateFailed=!0)
  }
  waitForLive(e){
    const t=e.details;
    return(t==null?void 0:t.live)&&t.type!=="EVENT"&&(this.levelLastLoaded!==e||t.expired)
  }
  flushMainBuffer(e, t, s=null){
    if(!(e-t))return;
    const n={
      startOffset:e, endOffset:t, type:s
    };
    this.hls.trigger(S.BUFFER_FLUSHING, n)
  }
  _loadInitSegment(e, t){
    this._doFragLoad(e, t).then(s=>{
      const n=s==null?void 0:s.frag;
      if(!n||this.fragContextChanged(n)||!this.levels)throw new Error("init load aborted");
      return s
    }).then(s=>{
      const{
        hls:n
      }
      =this, {
        frag:i, payload:a
      }
      =s, o=i.decryptdata;
      if(a&&a.byteLength>0&&o!=null&&o.key&&o.iv&&qs(o.method)){
        const l=self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(a), o.key.buffer, o.iv.buffer, Ju(o.method)).catch(c=>{
          throw n.trigger(S.ERROR, {
            type:q.MEDIA_ERROR, details:k.FRAG_DECRYPT_ERROR, fatal:!1, error:c, reason:c.message, frag:i
          }), c
        }).then(c=>{
          const u=self.performance.now();
          return n.trigger(S.FRAG_DECRYPTED, {
            frag:i, payload:c, stats:{
              tstart:l, tdecrypt:u
            }

          }), s.payload=c, this.completeInitSegmentLoad(s)
        })
      }
      return this.completeInitSegmentLoad(s)
    }).catch(s=>{
      this.state===N.STOPPED||this.state===N.ERROR||(this.warn(s), this.resetFragmentLoading(e))
    })
  }
  completeInitSegmentLoad(e){
    const{
      levels:t
    }
    =this;
    if(!t)throw new Error("init load aborted, missing levels");
    const s=e.frag.stats;
    this.state!==N.STOPPED&&(this.state=N.IDLE), e.frag.data=new Uint8Array(e.payload), s.parsing.start=s.buffering.start=self.performance.now(),
    s.parsing.end=s.buffering.end=self.performance.now(), this.tick()
  }
  unhandledEncryptionError(e, t){
    var s, n;
    const i=e.tracks;
    if(i&&!t.encrypted&&((s=i.audio)!=null&&s.encrypted||(n=i.video)!=null&&n.encrypted)&&(!this.config.emeEnabled||!this.keyLoader.emeController)){
      const a=this.media, o=new Error(`Encrypted track with no key in ${this.fragInfo(t)} (media ${a?"attached mediaKeys: "+a.mediaKeys:"detached"})`);
      return this.warn(o.message), !a||a.mediaKeys?!1:(this.hls.trigger(S.ERROR, {
        type:q.KEY_SYSTEM_ERROR, details:k.KEY_SYSTEM_NO_KEYS, fatal:!1, error:o, frag:t
      }), this.resetTransmuxer(), !0)
    }
    return!1
  }
  fragContextChanged(e){
    const{
      fragCurrent:t
    }
    =this;
    return!e||!t||e.sn!==t.sn||e.level!==t.level
  }
  fragBufferedComplete(e, t){
    const s=this.mediaBuffer?this.mediaBuffer:this.media;
    if(this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.fragInfo(e,!1,t)} > buffer:${s?bT.toString(Z.getBuffered(s)):"(detached)"})`),
    _e(e)){
      var n;
      if(e.type!==W.SUBTITLE){
        const a=e.elementaryStreams;
        if(!Object.keys(a).some(o=>!!a[o])){
          this.state=N.IDLE;
          return
        }

      }
      const i=(n=this.levels)==null?void 0:n[e.level];
      i!=null&&i.fragmentError&&(this.log(`Resetting level fragment error count of ${i.fragmentError} on frag buffered`),
      i.fragmentError=0)
    }
    this.state=N.IDLE
  }
  _handleFragmentLoadComplete(e){
    const{
      transmuxer:t
    }
    =this;
    if(!t)return;
    const{
      frag:s, part:n, partsLoaded:i
    }
    =e, a=!i||i.length===0||i.some(l=>!l), o=new Zu(s.level, s.sn, s.stats.chunkCount+1, 0, n?n.index:-1, !a);
    t.flush(o)
  }
  _handleFragmentLoadProgress(e){

  }
  _doFragLoad(e, t, s=null, n){
    var i;
    this.fragCurrent=e;
    const a=t.details;
    if(!this.levels||!a)throw new Error(`frag load aborted, missing level${a?"":" detail"}s`);
    let o=null;
    if(e.encrypted&&!((i=e.decryptdata)!=null&&i.key)){
      if(this.log(`Loading key for ${e.sn} of [${a.startSN}-${a.endSN}], ${this.playlistLabel()} ${e.level}`), this.state=N.KEY_LOADING,
      this.fragCurrent=e, o=this.keyLoader.load(e).then(h=>{
        if(!this.fragContextChanged(h.frag))return this.hls.trigger(S.KEY_LOADED, h), this.state===N.KEY_LOADING&&(this.state=N.IDLE),
        h
      }), this.hls.trigger(S.KEY_LOADING, {
        frag:e
      }), this.fragCurrent===null)return this.log("context changed in KEY_LOADING"), Promise.resolve(null)
    }
    else e.encrypted||(o=this.keyLoader.loadClear(e, a.encryptedFragments, this.startFragRequested), o&&this.log("[eme] blocking frag load until media-keys acquired"));
    const l=this.fragPrevious;
    if(_e(e)&&(!l||e.sn!==l.sn)){
      const h=this.shouldLoadParts(t.details, e.end);
      h!==this.loadingParts&&(this.log(`LL-Part loading ${h?"ON":"OFF"} loading sn ${l==null?void 0:l.sn}->${e.sn}`), this.loadingParts=h)
    }
    if(s=Math.max(e.start, s||0), this.loadingParts&&_e(e)){
      const h=a.partList;
      if(h&&n){
        s>a.fragmentEnd&&a.fragmentHint&&(e=a.fragmentHint);
        const f=this.getNextPart(h, e, s);
        if(f>-1){
          const g=h[f];
          e=this.fragCurrent=g.fragment, this.log(`Loading ${e.type} sn: ${e.sn} part: ${g.index} (${f}/${h.length-1}) of ${this.fragInfo(e,!1,g)}) cc: ${e.cc} [${a.startSN}-${a.endSN}], target: ${parseFloat(s.toFixed(3))}`)
          , this.nextLoadPosition=g.start+g.duration, this.state=N.FRAG_LOADING;
          let y;
          return o?y=o.then(x=>!x||this.fragContextChanged(x.frag)?null:this.doFragPartsLoad(e, g, t, n)).catch(x=>this.handleFragLoadError(x)):y=this.doFragPartsLoad(e,
          g, t, n).catch(x=>this.handleFragLoadError(x)), this.hls.trigger(S.FRAG_LOADING, {
            frag:e, part:g, targetBufferTime:s
          }), this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):y
        }
        else if(!e.url||this.loadedEndOfParts(h, s))return Promise.resolve(null)
      }

    }
    if(_e(e)&&this.loadingParts){
      var c;
      this.log(`LL-Part loading OFF after next part miss @${s.toFixed(2)} Check buffer at sn: ${e.sn} loaded parts: ${(c=a.partList)==null?void 0:c.filter(h=>h.loaded).map(h=>`[${
        h.start
      }
      -${
        h.end
      }]`)}`), this.loadingParts=!1
    }
    else if(!e.url)return Promise.resolve(null);
    this.log(`Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e,!1)}) cc: ${e.cc} ${"["+a.startSN+"-"+a.endSN+"]"}, target: ${parseFloat(s.toFixed(3))}`),
    G(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration), this.state=N.FRAG_LOADING;
    const u=this.config.progressive&&e.type!==W.SUBTITLE;
    let d;
    return u&&o?d=o.then(h=>!h||this.fragContextChanged(h.frag)?null:this.fragmentLoader.load(e, n)).catch(h=>this.handleFragLoadError(h)):d=Promise.all([this.fragmentLoader.load(e,
    u?n:void 0), o]).then(([h])=>(!u&&n&&n(h), h)).catch(h=>this.handleFragLoadError(h)), this.hls.trigger(S.FRAG_LOADING,
    {
      frag:e, targetBufferTime:s
    }), this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):d
  }
  doFragPartsLoad(e, t, s, n){
    return new Promise((i, a)=>{
      var o;
      const l=[], c=(o=s.details)==null?void 0:o.partList, u=d=>{
        this.fragmentLoader.loadPart(e, d, n).then(h=>{
          l[d.index]=h;
          const f=h.part;
          this.hls.trigger(S.FRAG_LOADED, h);
          const g=Tf(s.details, e.sn, d.index+1)||yp(c, e.sn, d.index+1);
          if(g)u(g);
          else return i({
            frag:e, part:f, partsLoaded:l
          })
        }).catch(a)
      };
      u(t)
    })
  }
  handleFragLoadError(e){
    if("data"in e){
      const t=e.data;
      t.frag&&t.details===k.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag, t.part):t.frag&&t.type===q.KEY_SYSTEM_ERROR?(t.frag.abortRequests(),
      this.resetStartWhenNotLoaded(), this.resetFragmentLoading(t.frag)):this.hls.trigger(S.ERROR, t)
    }
    else this.hls.trigger(S.ERROR, {
      type:q.OTHER_ERROR, details:k.INTERNAL_EXCEPTION, err:e, error:e, fatal:!0
    });
    return null
  }
  _handleTransmuxerFlush(e){
    const t=this.getCurrentContext(e);
    if(!t||this.state!==N.PARSING){
      !this.fragCurrent&&this.state!==N.STOPPED&&this.state!==N.ERROR&&(this.state=N.IDLE);
      return
    }
    const{
      frag:s, part:n, level:i
    }
    =t, a=self.performance.now();
    s.stats.parsing.end=a, n&&(n.stats.parsing.end=a);
    const o=this.getLevelDetails(), c=o&&s.sn>o.endSN||this.shouldLoadParts(o, s.end);
    c!==this.loadingParts&&(this.log(`LL-Part loading ${c?"ON":"OFF"} after parsing segment ending @${s.end.toFixed(2)}`),
    this.loadingParts=c), this.updateLevelTiming(s, n, i, e.partial)
  }
  shouldLoadParts(e, t){
    if(this.config.lowLatencyMode){
      if(!e)return this.loadingParts;
      if(e.partList){
        var s;
        const i=e.partList[0];
        if(i.fragment.type===W.SUBTITLE)return!1;
        const a=i.end+(((s=e.fragmentHint)==null?void 0:s.duration)||0);
        if(t>=a){
          var n;
          if((this.hls.hasEnoughToStart?((n=this.media)==null?void 0:n.currentTime)||this.lastCurrentTime:this.getLoadPosition())>i.start-i.fragment.duration)return!0
        }

      }

    }
    return!1
  }
  getCurrentContext(e){
    const{
      levels:t, fragCurrent:s
    }
    =this, {
      level:n, sn:i, part:a
    }
    =e;
    if(!(t!=null&&t[n]))return this.warn(`Levels object was unset while buffering fragment ${i} of ${this.playlistLabel()} ${n}. The current chunk will not be buffered.`),
    null;
    const o=t[n], l=o.details, c=a>-1?Tf(l, i, a):null, u=c?c.fragment:pp(l, i, s);
    return u?(s&&s!==u&&(u.stats=s.stats), {
      frag:u, part:c, level:o
    }):null
  }
  bufferFragmentData(e, t, s, n, i){
    if(this.state!==N.PARSING)return;
    const{
      data1:a, data2:o
    }
    =e;
    let l=a;
    if(o&&(l=kt(a, o)), !l.length)return;
    const c=this.initPTS[t.cc], u=c?-c.baseTime/c.timescale:void 0, d={
      type:e.type, frag:t, part:s, chunkMeta:n, offset:u, parent:t.type, data:l
    };
    if(this.hls.trigger(S.BUFFER_APPENDING, d), e.dropped&&e.independent&&!s){
      if(i)return;
      this.flushBufferGap(t)
    }

  }
  flushBufferGap(e){
    const t=this.media;
    if(!t)return;
    if(!Z.isBuffered(t, t.currentTime)){
      this.flushMainBuffer(0, e.start);
      return
    }
    const s=t.currentTime, n=Z.bufferInfo(t, s, 0), i=e.duration, a=Math.min(this.config.maxFragLookUpTolerance*2, i*.25),
    o=Math.max(Math.min(e.start-a, n.end-a), s+a);
    e.start-o>a&&this.flushMainBuffer(o, e.start)
  }
  getFwdBufferInfo(e, t){
    var s;
    const n=this.getLoadPosition();
    if(!G(n))return null;
    const a=this.lastCurrentTime>n||(s=this.media)!=null&&s.paused?0:this.config.maxBufferHole;
    return this.getFwdBufferInfoAtPos(e, n, t, a)
  }
  getFwdBufferInfoAtPos(e, t, s, n){
    const i=Z.bufferInfo(e, t, n);
    if(i.len===0&&i.nextStart!==void 0){
      const a=this.fragmentTracker.getBufferedFrag(t, s);
      if(a&&(i.nextStart<=a.end||a.gap)){
        const o=Math.max(Math.min(i.nextStart, a.end)-t, n);
        return Z.bufferInfo(e, t, o)
      }

    }
    return i
  }
  getMaxBufferLength(e){
    const{
      config:t
    }
    =this;
    let s;
    return e?s=Math.max(8*t.maxBufferSize/e, t.maxBufferLength):s=t.maxBufferLength, Math.min(s, t.maxMaxBufferLength)
  }
  reduceMaxBufferLength(e, t){
    const s=this.config, n=Math.max(Math.min(e-t, s.maxBufferLength), t), i=Math.max(e-t*3, s.maxMaxBufferLength/2, n);
    return i>=n?(s.maxMaxBufferLength=i, this.warn(`Reduce max buffer length to ${i}s`), !0):!1
  }
  getAppendedFrag(e, t=W.MAIN){
    const s=this.fragmentTracker?this.fragmentTracker.getAppendedFrag(e, t):null;
    return s&&"fragment"in s?s.fragment:s
  }
  getNextFragment(e, t){
    const s=t.fragments, n=s.length;
    if(!n)return null;
    const{
      config:i
    }
    =this, a=s[0].start, o=i.lowLatencyMode&&!!t.partList;
    let l=null;
    if(t.live){
      const d=i.initialLiveManifestSize;
      if(n<d)return this.warn(`Not enough fragments to start playback (have: ${n}, need: ${d})`), null;
      if(!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1||e<a){
        var c;
        o&&!this.loadingParts&&(this.log("LL-Part loading ON for initial live fragment"), this.loadingParts=!0), l=this.getInitialLiveFragment(t);
        const h=this.hls.startPosition, f=this.hls.liveSyncPosition, g=l?(h!==-1&&h>=a?h:f)||l.start:e;
        this.log(`Setting startPosition to ${g} to match start frag at live edge. mainStart: ${h} liveSyncPosition: ${f} frag.start: ${(c=l)==null?void 0:c.start}`),
        this.startPosition=this.nextLoadPosition=g
      }

    }
    else e<=a&&(l=s[0]);
    if(!l){
      const d=this.loadingParts?t.partEnd:t.fragmentEnd;
      l=this.getFragmentAtPosition(e, d, t)
    }
    let u=this.filterReplacedPrimary(l, t);
    if(!u&&l){
      const d=l.sn-t.startSN;
      u=this.filterReplacedPrimary(s[d+1]||null, t)
    }
    return this.mapToInitFragWhenRequired(u)
  }
  isLoopLoading(e, t){
    const s=this.fragmentTracker.getState(e);
    return(s===Pe.OK||s===Pe.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t
  }
  getNextFragmentLoopLoading(e, t, s, n, i){
    let a=null;
    if(e.gap&&(a=this.getNextFragment(this.nextLoadPosition, t), a&&!a.gap&&s.nextStart)){
      const o=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media, s.nextStart, n, 0);
      if(o!==null&&s.len+o.len>=i){
        const l=a.sn;
        return this.loopSn!==l&&(this.log(`buffer full after gaps in "${n}" playlist starting at sn: ${l}`), this.loopSn=l),
        null
      }

    }
    return this.loopSn=void 0, a
  }
  get primaryPrefetch(){
    if(Af(this.config)){
      var e;
      if((e=this.hls.interstitialsManager)==null||(e=e.playingItem)==null?void 0:e.event)return!0
    }
    return!1
  }
  filterReplacedPrimary(e, t){
    if(!e)return e;
    if(Af(this.config)&&e.type!==W.SUBTITLE){
      const s=this.hls.interstitialsManager, n=s==null?void 0:s.bufferingItem;
      if(n){
        const a=n.event;
        if(a){
          if(a.appendInPlace||Math.abs(e.start-n.start)>1||n.start===0)return null
        }
        else if(e.end<=n.start&&(t==null?void 0:t.live)===!1||e.start>n.end&&n.nextEvent&&(n.nextEvent.appendInPlace||e.start-n.end>1))return null
      }
      const i=s==null?void 0:s.playerQueue;
      if(i)for(let a=i.length;
      a--;
      ){
        const o=i[a].interstitial;
        if(o.appendInPlace&&e.start>=o.startTime&&e.end<=o.resumeTime)return null
      }

    }
    return e
  }
  mapToInitFragWhenRequired(e){
    return e!=null&&e.initSegment&&!e.initSegment.data&&!this.bitrateTest?e.initSegment:e
  }
  getNextPart(e, t, s){
    let n=-1, i=!1, a=!0;
    for(let o=0, l=e.length;
    o<l;
    o++){
      const c=e[o];
      if(a=a&&!c.independent, n>-1&&s<c.start)break;
      const u=c.loaded;
      u?n=-1:(i||(c.independent||a)&&c.fragment===t)&&(c.fragment!==t&&this.warn(`Need buffer at ${s} but next unloaded part starts at ${c.start}`),
      n=o), i=u
    }
    return n
  }
  loadedEndOfParts(e, t){
    let s;
    for(let n=e.length;
    n--;
    ){
      if(s=e[n], !s.loaded)return!1;
      if(t>s.start)return!0
    }
    return!1
  }
  getInitialLiveFragment(e){
    const t=e.fragments, s=this.fragPrevious;
    let n=null;
    if(s){
      if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`),
      n=KS(t, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !n){
        const i=s.sn+1;
        if(i>=e.startSN&&i<=e.endSN){
          const a=t[i-e.startSN];
          s.cc===a.cc&&(n=a, this.log(`Live playlist, switching playlist, load frag with next SN: ${n.sn}`))
        }
        n||(n=rp(e, s.cc, s.end), n&&this.log(`Live playlist, switching playlist, load frag with same CC: ${n.sn}`))
      }

    }
    else{
      const i=this.hls.liveSyncPosition;
      i!==null&&(n=this.getFragmentAtPosition(i, this.bitrateTest?e.fragmentEnd:e.edge, e))
    }
    return n
  }
  getFragmentAtPosition(e, t, s){
    const{
      config:n
    }
    =this;
    let{
      fragPrevious:i
    }
    =this, {
      fragments:a, endSN:o
    }
    =s;
    const{
      fragmentHint:l
    }
    =s, {
      maxFragLookUpTolerance:c
    }
    =n, u=s.partList, d=!!(this.loadingParts&&u!=null&&u.length&&l);
    d&&!this.bitrateTest&&u[u.length-1].fragment.sn===l.sn&&(a=a.concat(l), o=l.sn);
    let h;
    if(e<t){
      var f;
      const y=e<this.lastCurrentTime||e>t-c||(f=this.media)!=null&&f.paused||!this.startFragRequested?0:c;
      h=ps(i, a, e, y)
    }
    else h=a[a.length-1];
    if(h){
      const g=h.sn-s.startSN, y=this.fragmentTracker.getState(h);
      if((y===Pe.OK||y===Pe.PARTIAL&&h.gap)&&(i=h), i&&h.sn===i.sn&&(!d||u[0].fragment.sn>h.sn||!s.live)&&h.level===i.level){
        const p=a[g+1];
        h.sn<o&&this.fragmentTracker.getState(p)!==Pe.OK?h=p:h=null
      }

    }
    return h
  }
  alignPlaylists(e, t, s){
    const n=e.fragments.length;
    if(!n)return this.warn("No fragments in live playlist"), 0;
    const i=e.fragmentStart, a=!t, o=e.alignedSliding&&G(i);
    if(a||!o&&!i){
      wT(s, e);
      const l=e.fragmentStart;
      return this.log(`Live playlist sliding: ${l.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} fragments: ${n}`),
      l
    }
    return i
  }
  waitForCdnTuneIn(e){
    return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack, e.partTarget*3)
  }
  setStartPosition(e, t){
    let s=this.startPosition;
    s<t&&(s=-1);
    const n=this.timelineOffset;
    if(s===-1){
      const i=this.startTimeOffset!==null, a=i?this.startTimeOffset:e.startTimeOffset;
      a!==null&&G(a)?(s=t+a, a<0&&(s+=e.edge), s=Math.min(Math.max(t, s), t+e.totalduration), this.log(`Setting startPosition to ${s} for start time offset ${a} found in ${i?"multivariant":"media"} playlist`)
      , this.startPosition=s):e.live?(s=this.hls.liveSyncPosition||t, this.log(`Setting startPosition to -1 to start at live edge ${s}`),
      this.startPosition=-1):(this.log("setting startPosition to 0 by default"), this.startPosition=s=0), this.lastCurrentTime=s+n
    }
    this.nextLoadPosition=s+n
  }
  getLoadPosition(){
    var e;
    const{
      media:t
    }
    =this;
    let s=0;
    return(e=this.hls)!=null&&e.hasEnoughToStart&&t?s=t.currentTime:this.nextLoadPosition>=0&&(s=this.nextLoadPosition), s
  }
  handleFragLoadAborted(e, t){
    this.transmuxer&&e.type===this.playlistType&&_e(e)&&e.stats.aborted&&(this.log(`Fragment ${e.sn}${t?" part "+t.index:""} of ${this.playlistLabel()} ${e.level} was aborted`),
    this.resetFragmentLoading(e))
  }
  resetFragmentLoading(e){
    (!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==N.FRAG_LOADING_WAITING_RETRY)&&(this.state=N.IDLE)
  }
  onFragmentOrKeyLoadError(e, t){
    var s;
    if(t.chunkMeta&&!t.frag){
      const p=this.getCurrentContext(t.chunkMeta);
      p&&(t.frag=p.frag)
    }
    const n=t.frag;
    if(!n||n.type!==e||!this.levels)return;
    if(this.fragContextChanged(n)){
      var i;
      this.warn(`Frag load error must match current frag to retry ${n.url} > ${(i=this.fragCurrent)==null?void 0:i.url}`);
      return
    }
    const a=t.details===k.FRAG_GAP;
    a&&this.fragmentTracker.fragBuffered(n, !0);
    const o=t.errorAction;
    if(!o){
      this.state=N.ERROR;
      return
    }
    const{
      action:l, flags:c, retryCount:u=0, retryConfig:d
    }
    =o, h=!!d, f=h&&l===Be.RetryRequest, g=h&&!o.resolved&&c===ut.MoveAllAlternatesMatchingHost, y=(s=this.hls.latestLevelDetails)==null?void 0:s.live;
    if(!f&&g&&_e(n)&&!n.endList&&y&&!np(t))this.resetFragmentErrors(e), this.treatAsGap(n), o.resolved=!0;
    else if((f||g)&&u<d.maxNumRetry){
      var x;
      const p=kc((x=t.response)==null?void 0:x.code), v=Qu(d, u);
      if(this.resetStartWhenNotLoaded(), this.retryDate=self.performance.now()+v, this.state=N.FRAG_LOADING_WAITING_RETRY,
      o.resolved=!0, p){
        this.log("Waiting for connection (offline)"), this.retryDate=1/0, t.reason="offline";
        return
      }
      this.warn(`Fragment ${n.sn} of ${e} ${n.level} errored with ${t.details}, retrying loading ${u+1}/${d.maxNumRetry} in ${v}ms`)
    }
    else if(d)if(this.resetFragmentErrors(e), u<d.maxNumRetry)!a&&l!==Be.RemoveAlternatePermanently&&(o.resolved=!0);
    else{
      this.warn(`${t.details} reached or exceeded max retry (${u})`);
      return
    }
    else l===Be.SendAlternateToPenaltyBox?this.state=N.WAITING_LEVEL:this.state=N.ERROR;
    this.tickImmediate()
  }
  checkRetryDate(){
    const e=self.performance.now(), t=this.retryDate, s=t===1/0;
    (!t||e>=t||s&&!kc(0))&&(s&&this.log("Connection restored (online)"), this.resetStartWhenNotLoaded(), this.state=N.IDLE)
  }
  reduceLengthAndFlushBuffer(e){
    if(this.state===N.PARSING||this.state===N.PARSED){
      const t=e.frag, s=e.parent, n=this.getFwdBufferInfo(this.mediaBuffer, s), i=n&&n.len>.5;
      i&&this.reduceMaxBufferLength(n.len, (t==null?void 0:t.duration)||10);
      const a=!i;
      return a&&this.warn(`Buffer full error while media.currentTime (${this.getLoadPosition()}) is not buffered, flush ${s} buffer`),
      t&&(this.fragmentTracker.removeFragment(t), this.nextLoadPosition=t.start), this.resetLoadingState(), a
    }
    return!1
  }
  resetFragmentErrors(e){
    e===W.AUDIO&&(this.fragCurrent=null), this.hls.hasEnoughToStart||(this.startFragRequested=!1), this.state!==N.STOPPED&&(this.state=N.IDLE)
  }
  afterBufferFlushed(e, t, s){
    if(!e)return;
    const n=Z.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, n, s), this.state===N.ENDED&&this.resetLoadingState()
  }
  resetLoadingState(){
    this.log("Reset loading state"), this.fragCurrent=null, this.fragPrevious=null, this.state!==N.STOPPED&&(this.state=N.IDLE)
  }
  resetStartWhenNotLoaded(){
    if(!this.hls.hasEnoughToStart){
      this.startFragRequested=!1;
      const e=this.levelLastLoaded, t=e?e.details:null;
      t!=null&&t.live?(this.log("resetting startPosition for live start"), this.startPosition=-1, this.setStartPosition(t,
      t.fragmentStart), this.resetLoadingState()):this.nextLoadPosition=this.startPosition
    }

  }
  resetWhenMissingContext(e){
    this.log(`Loading context changed while buffering sn ${e.sn} of ${this.playlistLabel()} ${e.level===-1?"<removed>":e.level}. This chunk will not be buffered.`),
    this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(), this.resetLoadingState()
  }
  removeUnbufferedFrags(e=0){
    this.fragmentTracker.removeFragmentsInRange(e, 1/0, this.playlistType, !1, !0)
  }
  updateLevelTiming(e, t, s, n){
    const i=s.details;
    if(!i){
      this.warn("level.details undefined");
      return
    }
    if(!Object.keys(e.elementaryStreams).reduce((l, c)=>{
      const u=e.elementaryStreams[c];
      if(u){
        const d=u.endPTS-u.startPTS;
        if(d<=0)return this.warn(`Could not parse fragment ${e.sn} ${c} duration reliably (${d})`), l||!1;
        const h=n?0:fp(i, e, u.startPTS, u.endPTS, u.startDTS, u.endDTS, this);
        return this.hls.trigger(S.LEVEL_PTS_UPDATED, {
          details:i, level:s, drift:h, type:c, frag:e, start:u.startPTS, end:u.endPTS
        }), !0
      }
      return l
    }, !1)){
      var o;
      const l=((o=this.transmuxer)==null?void 0:o.error)===null;
      if((s.fragmentError===0||l&&(s.fragmentError<2||e.endList))&&this.treatAsGap(e, s), l){
        const c=new Error(`Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`);
        if(this.warn(c.message), this.hls.trigger(S.ERROR, {
          type:q.MEDIA_ERROR, details:k.FRAG_PARSING_ERROR, fatal:!1, error:c, frag:e, reason:`Found no media in msn ${e.sn} of ${this.playlistLabel()} "${s.url}"`
        }), !this.hls)return;
        this.resetTransmuxer()
      }

    }
    this.state=N.PARSED, this.log(`Parsed ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.fragInfo(e,!1,t)})`), this.hls.trigger(S.FRAG_PARSED,
    {
      frag:e, part:t
    })
  }
  playlistLabel(){
    return this.playlistType===W.MAIN?"level":"track"
  }
  fragInfo(e, t=!0, s){
    var n, i;
    return`${this.playlistLabel()} ${e.level} (${s?"part":"frag"}:[${((n=t&&!s?e.startPTS:(s||e).start)!=null?n:NaN).toFixed(3)}-${((i=t&&!s?e.endPTS:(s||e).end)!=null?i:NaN).toFixed(3)}]${s&&e.type==="main"?"INDEPENDENT="+(s.independent?"YES":"NO"):""}`
  }
  treatAsGap(e, t){
    t&&t.fragmentError++, e.gap=!0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0)
  }
  resetTransmuxer(){
    var e;
    (e=this.transmuxer)==null||e.reset()
  }
  recoverWorkerError(e){
    e.event==="demuxerWorker"&&(this.fragmentTracker.removeAllFragments(), this.transmuxer&&(this.transmuxer.destroy(), this.transmuxer=null),
    this.resetStartWhenNotLoaded(), this.resetLoadingState())
  }
  set state(e){
    const t=this._state;
    t!==e&&(this._state=e, this.log(`${t}->${e}`))
  }
  get state(){
    return this._state
  }

}
function Af(r){
  return!!r.interstitialsController&&r.enableInterstitialPlayback!==!1
}
class Sp{
  constructor(){
    this.chunks=[], this.dataLength=0
  }
  push(e){
    this.chunks.push(e), this.dataLength+=e.length
  }
  flush(){
    const{
      chunks:e, dataLength:t
    }
    =this;
    let s;
    if(e.length)e.length===1?s=e[0]:s=_T(e, t);
    else return new Uint8Array(0);
    return this.reset(), s
  }
  reset(){
    this.chunks.length=0, this.dataLength=0
  }

}
function _T(r, e){
  const t=new Uint8Array(e);
  let s=0;
  for(let n=0;
  n<r.length;
  n++){
    const i=r[n];
    t.set(i, s), s+=i.length
  }
  return t
}
var fl={
  exports:{

  }

}, Rf;
function kT(){
  return Rf||(Rf=1, function(r){
    var e=Object.prototype.hasOwnProperty, t="~";
    function s(){

    }
    Object.create&&(s.prototype=Object.create(null), new s().__proto__||(t=!1));
    function n(l, c, u){
      this.fn=l, this.context=c, this.once=u||!1
    }
    function i(l, c, u, d, h){
      if(typeof u!="function")throw new TypeError("The listener must be a function");
      var f=new n(u, d||l, h), g=t?t+c:c;
      return l._events[g]?l._events[g].fn?l._events[g]=[l._events[g], f]:l._events[g].push(f):(l._events[g]=f, l._eventsCount++),
      l
    }
    function a(l, c){
      --l._eventsCount===0?l._events=new s:delete l._events[c]
    }
    function o(){
      this._events=new s, this._eventsCount=0
    }
    o.prototype.eventNames=function(){
      var c=[], u, d;
      if(this._eventsCount===0)return c;
      for(d in u=this._events)e.call(u, d)&&c.push(t?d.slice(1):d);
      return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c
    }, o.prototype.listeners=function(c){
      var u=t?t+c:c, d=this._events[u];
      if(!d)return[];
      if(d.fn)return[d.fn];
      for(var h=0, f=d.length, g=new Array(f);
      h<f;
      h++)g[h]=d[h].fn;
      return g
    }, o.prototype.listenerCount=function(c){
      var u=t?t+c:c, d=this._events[u];
      return d?d.fn?1:d.length:0
    }, o.prototype.emit=function(c, u, d, h, f, g){
      var y=t?t+c:c;
      if(!this._events[y])return!1;
      var x=this._events[y], p=arguments.length, v, E;
      if(x.fn){
        switch(x.once&&this.removeListener(c, x.fn, void 0, !0), p){
          case 1:return x.fn.call(x.context), !0;
          case 2:return x.fn.call(x.context, u), !0;
          case 3:return x.fn.call(x.context, u, d), !0;
          case 4:return x.fn.call(x.context, u, d, h), !0;
          case 5:return x.fn.call(x.context, u, d, h, f), !0;
          case 6:return x.fn.call(x.context, u, d, h, f, g), !0
        }
        for(E=1, v=new Array(p-1);
        E<p;
        E++)v[E-1]=arguments[E];
        x.fn.apply(x.context, v)
      }
      else{
        var T=x.length, I;
        for(E=0;
        E<T;
        E++)switch(x[E].once&&this.removeListener(c, x[E].fn, void 0, !0), p){
          case 1:x[E].fn.call(x[E].context);
          break;
          case 2:x[E].fn.call(x[E].context, u);
          break;
          case 3:x[E].fn.call(x[E].context, u, d);
          break;
          case 4:x[E].fn.call(x[E].context, u, d, h);
          break;
          default:if(!v)for(I=1, v=new Array(p-1);
          I<p;
          I++)v[I-1]=arguments[I];
          x[E].fn.apply(x[E].context, v)
        }

      }
      return!0
    }, o.prototype.on=function(c, u, d){
      return i(this, c, u, d, !1)
    }, o.prototype.once=function(c, u, d){
      return i(this, c, u, d, !0)
    }, o.prototype.removeListener=function(c, u, d, h){
      var f=t?t+c:c;
      if(!this._events[f])return this;
      if(!u)return a(this, f), this;
      var g=this._events[f];
      if(g.fn)g.fn===u&&(!h||g.once)&&(!d||g.context===d)&&a(this, f);
      else{
        for(var y=0, x=[], p=g.length;
        y<p;
        y++)(g[y].fn!==u||h&&!g[y].once||d&&g[y].context!==d)&&x.push(g[y]);
        x.length?this._events[f]=x.length===1?x[0]:x:a(this, f)
      }
      return this
    }, o.prototype.removeAllListeners=function(c){
      var u;
      return c?(u=t?t+c:c, this._events[u]&&a(this, u)):(this._events=new s, this._eventsCount=0), this
    }, o.prototype.off=o.prototype.removeListener, o.prototype.addListener=o.prototype.on, o.prefixed=t, o.EventEmitter=o,
    r.exports=o
  }
  (fl)), fl.exports
}
var CT=kT(), rd=rS(CT);
const ci="1.6.15", on={

};
function DT(){
  return typeof __HLS_WORKER_BUNDLE__=="function"
}
function PT(){
  const r=on[ci];
  if(r)return r.clientCount++, r;
  const e=new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`],
  {
    type:"text/javascript"
  }), t=self.URL.createObjectURL(e), n={
    worker:new self.Worker(t), objectURL:t, clientCount:1
  };
  return on[ci]=n, n
}
function NT(r){
  const e=on[r];
  if(e)return e.clientCount++, e;
  const t=new self.URL(r, self.location.href).href, n={
    worker:new self.Worker(t), scriptURL:t, clientCount:1
  };
  return on[r]=n, n
}
function OT(r){
  const e=on[r||ci];
  if(e&&e.clientCount--===1){
    const{
      worker:s, objectURL:n
    }
    =e;
    delete on[r||ci], n&&self.URL.revokeObjectURL(n), s.terminate()
  }

}
function Tp(r, e){
  return e+10<=r.length&&r[e]===51&&r[e+1]===68&&r[e+2]===73&&r[e+3]<255&&r[e+4]<255&&r[e+6]<128&&r[e+7]<128&&r[e+8]<128&&r[e+9]<128
}
function sd(r, e){
  return e+10<=r.length&&r[e]===73&&r[e+1]===68&&r[e+2]===51&&r[e+3]<255&&r[e+4]<255&&r[e+6]<128&&r[e+7]<128&&r[e+8]<128&&r[e+9]<128
}
function bo(r, e){
  let t=0;
  return t=(r[e]&127)<<21, t|=(r[e+1]&127)<<14, t|=(r[e+2]&127)<<7, t|=r[e+3]&127, t
}
function ui(r, e){
  const t=e;
  let s=0;
  for(;
  sd(r, e);
  ){
    s+=10;
    const n=bo(r, e+6);
    s+=n, Tp(r, e+10)&&(s+=10), e+=s
  }
  if(s>0)return r.subarray(t, t+s)
}
function MT(r, e, t, s){
  const n=[96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], i=e[t+2], a=i>>2&15;
  if(a>12){
    const f=new Error(`invalid ADTS sampling index:${a}`);
    r.emit(S.ERROR, S.ERROR, {
      type:q.MEDIA_ERROR, details:k.FRAG_PARSING_ERROR, fatal:!0, error:f, reason:f.message
    });
    return
  }
  const o=(i>>6&3)+1, l=e[t+3]>>6&3|(i&1)<<2, c="mp4a.40."+o, u=n[a];
  let d=a;
  (o===5||o===29)&&(d-=3);
  const h=[o<<3|(d&14)>>1, (d&1)<<7|l<<3];
  return ue.log(`manifest codec:${s}, parsed codec:${c}, channels:${l}, rate:${u} (ADTS object type:${o} sampling index:${a})`),
  {
    config:h, samplerate:u, channelCount:l, codec:c, parsedCodec:c, manifestCodec:s
  }

}
function Ip(r, e){
  return r[e]===255&&(r[e+1]&246)===240
}
function Lp(r, e){
  return r[e+1]&1?7:9
}
function nd(r, e){
  return(r[e+3]&3)<<11|r[e+4]<<3|(r[e+5]&224)>>>5
}
function FT(r, e){
  return e+5<r.length
}
function ao(r, e){
  return e+1<r.length&&Ip(r, e)
}
function UT(r, e){
  return FT(r, e)&&Ip(r, e)&&nd(r, e)<=r.length-e
}
function $T(r, e){
  if(ao(r, e)){
    const t=Lp(r, e);
    if(e+t>=r.length)return!1;
    const s=nd(r, e);
    if(s<=t)return!1;
    const n=e+s;
    return n===r.length||ao(r, n)
  }
  return!1
}
function Ap(r, e, t, s, n){
  if(!r.samplerate){
    const i=MT(e, t, s, n);
    if(!i)return;
    he(r, i)
  }

}
function Rp(r){
  return 1024*9e4/r
}
function BT(r, e){
  const t=Lp(r, e);
  if(e+t<=r.length){
    const s=nd(r, e)-t;
    if(s>0)return{
      headerLength:t, frameLength:s
    }

  }

}
function wp(r, e, t, s, n){
  const i=Rp(r.samplerate), a=s+n*i, o=BT(e, t);
  let l;
  if(o){
    const{
      frameLength:d, headerLength:h
    }
    =o, f=h+d, g=Math.max(0, t+f-e.length);
    g?(l=new Uint8Array(f-h), l.set(e.subarray(t+h, e.length), 0)):l=e.subarray(t+h, t+f);
    const y={
      unit:l, pts:a
    };
    return g||r.samples.push(y), {
      sample:y, length:f, missing:g
    }

  }
  const c=e.length-t;
  return l=new Uint8Array(c), l.set(e.subarray(t, e.length), 0), {
    sample:{
      unit:l, pts:a
    }, length:c, missing:-1
  }

}
function jT(r, e){
  return sd(r, e)&&bo(r, e+6)+10<=r.length-e
}
function GT(r){
  return r instanceof ArrayBuffer?r:r.byteOffset==0&&r.byteLength==r.buffer.byteLength?r.buffer:new Uint8Array(r).buffer
}
function ml(r, e=0, t=1/0){
  return VT(r, e, t, Uint8Array)
}
function VT(r, e, t, s){
  const n=KT(r);
  let i=1;
  "BYTES_PER_ELEMENT"in s&&(i=s.BYTES_PER_ELEMENT);
  const a=HT(r)?r.byteOffset:0, o=(a+r.byteLength)/i, l=(a+e)/i, c=Math.floor(Math.max(0, Math.min(l, o))), u=Math.floor(Math.min(c+Math.max(t,
  0), o));
  return new s(n, c, u-c)
}
function KT(r){
  return r instanceof ArrayBuffer?r:r.buffer
}
function HT(r){
  return r&&r.buffer instanceof ArrayBuffer&&r.byteLength!==void 0&&r.byteOffset!==void 0
}
function WT(r){
  const e={
    key:r.type, description:"", data:"", mimeType:null, pictureType:null
  }, t=3;
  if(r.size<2)return;
  if(r.data[0]!==t){
    console.log("Ignore frame with unrecognized character encoding");
    return
  }
  const s=r.data.subarray(1).indexOf(0);
  if(s===-1)return;
  const n=yt(ml(r.data, 1, s)), i=r.data[2+s], a=r.data.subarray(3+s).indexOf(0);
  if(a===-1)return;
  const o=yt(ml(r.data, 3+s, a));
  let l;
  return n==="-->"?l=yt(ml(r.data, 4+s+a)):l=GT(r.data.subarray(4+s+a)), e.mimeType=n, e.pictureType=i, e.description=o, e.data=l,
  e
}
function zT(r){
  if(r.size<2)return;
  const e=yt(r.data, !0), t=new Uint8Array(r.data.subarray(e.length+1));
  return{
    key:r.type, info:e, data:t.buffer
  }

}
function YT(r){
  if(r.size<2)return;
  if(r.type==="TXXX"){
    let t=1;
    const s=yt(r.data.subarray(t), !0);
    t+=s.length+1;
    const n=yt(r.data.subarray(t));
    return{
      key:r.type, info:s, data:n
    }

  }
  const e=yt(r.data.subarray(1));
  return{
    key:r.type, info:"", data:e
  }

}
function qT(r){
  if(r.type==="WXXX"){
    if(r.size<2)return;
    let t=1;
    const s=yt(r.data.subarray(t), !0);
    t+=s.length+1;
    const n=yt(r.data.subarray(t));
    return{
      key:r.type, info:s, data:n
    }

  }
  const e=yt(r.data);
  return{
    key:r.type, info:"", data:e
  }

}
function QT(r){
  return r.type==="PRIV"?zT(r):r.type[0]==="W"?qT(r):r.type==="APIC"?WT(r):YT(r)
}
function XT(r){
  const e=String.fromCharCode(r[0], r[1], r[2], r[3]), t=bo(r, 4), s=10;
  return{
    type:e, size:t, data:r.subarray(s, s+t)
  }

}
const Wi=10, ZT=10;
function bp(r){
  let e=0;
  const t=[];
  for(;
  sd(r, e);
  ){
    const s=bo(r, e+6);
    r[e+5]>>6&1&&(e+=Wi), e+=Wi;
    const n=e+s;
    for(;
    e+ZT<n;
    ){
      const i=XT(r.subarray(e)), a=QT(i);
      a&&t.push(a), e+=i.size+Wi
    }
    Tp(r, e)&&(e+=Wi)
  }
  return t
}
function _p(r){
  return r&&r.key==="PRIV"&&r.info==="com.apple.streaming.transportStreamTimestamp"
}
function JT(r){
  if(r.data.byteLength===8){
    const e=new Uint8Array(r.data), t=e[3]&1;
    let s=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];
    return s/=45, t&&(s+=4772185884e-2), Math.round(s)
  }

}
function id(r){
  const e=bp(r);
  for(let t=0;
  t<e.length;
  t++){
    const s=e[t];
    if(_p(s))return JT(s)
  }

}
let ft=function(r){
  return r.audioId3="org.id3", r.dateRange="com.apple.quicktime.HLS", r.emsg="https://aomedia.org/emsg/ID3", r.misbklv="urn:misb:KLV:bin:1910.1",
  r
}
({

});
function qt(r="", e=9e4){
  return{
    type:r, id:-1, pid:-1, inputTimeScale:e, sequenceNumber:-1, samples:[], dropped:0
  }

}
class ad{
  constructor(){
    this._audioTrack=void 0, this._id3Track=void 0, this.frameIndex=0, this.cachedData=null, this.basePTS=null, this.initPTS=null,
    this.lastPTS=null
  }
  resetInitSegment(e, t, s, n){
    this._id3Track={
      type:"id3", id:3, pid:-1, inputTimeScale:9e4, sequenceNumber:0, samples:[], dropped:0
    }

  }
  resetTimeStamp(e){
    this.initPTS=e, this.resetContiguity()
  }
  resetContiguity(){
    this.basePTS=null, this.lastPTS=null, this.frameIndex=0
  }
  canParse(e, t){
    return!1
  }
  appendFrame(e, t, s){

  }
  demux(e, t){
    this.cachedData&&(e=kt(this.cachedData, e), this.cachedData=null);
    let s=ui(e, 0), n=s?s.length:0, i;
    const a=this._audioTrack, o=this._id3Track, l=s?id(s):void 0, c=e.length;
    for((this.basePTS===null||this.frameIndex===0&&G(l))&&(this.basePTS=eI(l, t, this.initPTS), this.lastPTS=this.basePTS),
    this.lastPTS===null&&(this.lastPTS=this.basePTS), s&&s.length>0&&o.samples.push({
      pts:this.lastPTS, dts:this.lastPTS, data:s, type:ft.audioId3, duration:Number.POSITIVE_INFINITY
    });
    n<c;
    ){
      if(this.canParse(e, n)){
        const u=this.appendFrame(a, e, n);
        u?(this.frameIndex++, this.lastPTS=u.sample.pts, n+=u.length, i=n):n=c
      }
      else jT(e, n)?(s=ui(e, n), o.samples.push({
        pts:this.lastPTS, dts:this.lastPTS, data:s, type:ft.audioId3, duration:Number.POSITIVE_INFINITY
      }), n+=s.length, i=n):n++;
      if(n===c&&i!==c){
        const u=e.slice(i);
        this.cachedData?this.cachedData=kt(this.cachedData, u):this.cachedData=u
      }

    }
    return{
      audioTrack:a, videoTrack:qt(), id3Track:o, textTrack:qt()
    }

  }
  demuxSampleAes(e, t, s){
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))
  }
  flush(e){
    const t=this.cachedData;
    return t&&(this.cachedData=null, this.demux(t, 0)), {
      audioTrack:this._audioTrack, videoTrack:qt(), id3Track:this._id3Track, textTrack:qt()
    }

  }
  destroy(){
    this.cachedData=null, this._audioTrack=this._id3Track=void 0
  }

}
const eI=(r, e, t)=>{
  if(G(r))return r*90;
  const s=t?t.baseTime*9e4/t.timescale:0;
  return e*9e4+s
};
let zi=null;
const tI=[32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224,
256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160,
176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], rI=[44100, 48e3, 32e3, 22050, 24e3, 16e3,
11025, 12e3, 8e3], sI=[[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], nI=[0, 1, 1, 4];
function kp(r, e, t, s, n){
  if(t+24>e.length)return;
  const i=Cp(e, t);
  if(i&&t+i.frameLength<=e.length){
    const a=i.samplesPerFrame*9e4/i.sampleRate, o=s+n*a, l={
      unit:e.subarray(t, t+i.frameLength), pts:o, dts:o
    };
    return r.config=[], r.channelCount=i.channelCount, r.samplerate=i.sampleRate, r.samples.push(l), {
      sample:l, length:i.frameLength, missing:0
    }

  }

}
function Cp(r, e){
  const t=r[e+1]>>3&3, s=r[e+1]>>1&3, n=r[e+2]>>4&15, i=r[e+2]>>2&3;
  if(t!==1&&n!==0&&n!==15&&i!==3){
    const a=r[e+2]>>1&1, o=r[e+3]>>6, l=t===3?3-s:s===3?3:4, c=tI[l*14+n-1]*1e3, d=rI[(t===3?0:t===2?1:2)*3+i], h=o===3?1:2,
    f=sI[t][s], g=nI[s], y=f*8*g, x=Math.floor(f*c/d+a)*g;
    if(zi===null){
      const E=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);
      zi=E?parseInt(E[1]):0
    }
    return!!zi&&zi<=87&&s===2&&c>=224e3&&o===0&&(r[e+3]=r[e+3]|128), {
      sampleRate:d, channelCount:h, frameLength:x, samplesPerFrame:y
    }

  }

}
function od(r, e){
  return r[e]===255&&(r[e+1]&224)===224&&(r[e+1]&6)!==0
}
function Dp(r, e){
  return e+1<r.length&&od(r, e)
}
function iI(r, e){
  return od(r, e)&&4<=r.length-e
}
function Pp(r, e){
  if(e+1<r.length&&od(r, e)){
    const s=Cp(r, e);
    let n=4;
    s!=null&&s.frameLength&&(n=s.frameLength);
    const i=e+n;
    return i===r.length||Dp(r, i)
  }
  return!1
}
class aI extends ad{
  constructor(e, t){
    super(), this.observer=void 0, this.config=void 0, this.observer=e, this.config=t
  }
  resetInitSegment(e, t, s, n){
    super.resetInitSegment(e, t, s, n), this._audioTrack={
      container:"audio/adts", type:"audio", id:2, pid:-1, sequenceNumber:0, segmentCodec:"aac", samples:[], manifestCodec:t,
      duration:n, inputTimeScale:9e4, dropped:0
    }

  }
  static probe(e, t){
    if(!e)return!1;
    const s=ui(e, 0);
    let n=(s==null?void 0:s.length)||0;
    if(Pp(e, n))return!1;
    for(let i=e.length;
    n<i;
    n++)if($T(e, n))return t.log("ADTS sync word found !"), !0;
    return!1
  }
  canParse(e, t){
    return UT(e, t)
  }
  appendFrame(e, t, s){
    Ap(e, this.observer, t, s, e.manifestCodec);
    const n=wp(e, t, s, this.basePTS, this.frameIndex);
    if(n&&n.missing===0)return n
  }

}
const Np=(r, e)=>{
  let t=0, s=5;
  e+=s;
  const n=new Uint32Array(1), i=new Uint32Array(1), a=new Uint8Array(1);
  for(;
  s>0;
  ){
    a[0]=r[e];
    const o=Math.min(s, 8), l=8-o;
    i[0]=4278190080>>>24+l<<l, n[0]=(a[0]&i[0])>>l, t=t?t<<o|n[0]:n[0], e+=1, s-=o
  }
  return t
};
class oI extends ad{
  constructor(e){
    super(), this.observer=void 0, this.observer=e
  }
  resetInitSegment(e, t, s, n){
    super.resetInitSegment(e, t, s, n), this._audioTrack={
      container:"audio/ac-3", type:"audio", id:2, pid:-1, sequenceNumber:0, segmentCodec:"ac3", samples:[], manifestCodec:t,
      duration:n, inputTimeScale:9e4, dropped:0
    }

  }
  canParse(e, t){
    return t+64<e.length
  }
  appendFrame(e, t, s){
    const n=Op(e, t, s, this.basePTS, this.frameIndex);
    if(n!==-1)return{
      sample:e.samples[e.samples.length-1], length:n, missing:0
    }

  }
  static probe(e){
    if(!e)return!1;
    const t=ui(e, 0);
    if(!t)return!1;
    const s=t.length;
    return e[s]===11&&e[s+1]===119&&id(t)!==void 0&&Np(e, s)<16
  }

}
function Op(r, e, t, s, n){
  if(t+8>e.length||e[t]!==11||e[t+1]!==119)return-1;
  const i=e[t+4]>>6;
  if(i>=3)return-1;
  const o=[48e3, 44100, 32e3][i], l=e[t+4]&63, u=[64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105,
  144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209,
  288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418,
  576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836,
  1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393,
  1920, 1280, 1394, 1920][l*3+i]*2;
  if(t+u>e.length)return-1;
  const d=e[t+6]>>5;
  let h=0;
  d===2?h+=2:(d&1&&d!==1&&(h+=2), d&4&&(h+=2));
  const f=(e[t+6]<<8|e[t+7])>>12-h&1, y=[2, 1, 2, 3, 3, 4, 4, 5][d]+f, x=e[t+5]>>3, p=e[t+5]&7, v=new Uint8Array([i<<6|x<<1|p>>2,
  (p&3)<<6|d<<3|f<<2|l>>4, l<<4&224]), E=1536/o*9e4, T=s+n*E, I=e.subarray(t, t+u);
  return r.config=v, r.channelCount=y, r.samplerate=o, r.samples.push({
    unit:I, pts:T
  }), u
}
class lI extends ad{
  resetInitSegment(e, t, s, n){
    super.resetInitSegment(e, t, s, n), this._audioTrack={
      container:"audio/mpeg", type:"audio", id:2, pid:-1, sequenceNumber:0, segmentCodec:"mp3", samples:[], manifestCodec:t,
      duration:n, inputTimeScale:9e4, dropped:0
    }

  }
  static probe(e){
    if(!e)return!1;
    const t=ui(e, 0);
    let s=(t==null?void 0:t.length)||0;
    if(t&&e[s]===11&&e[s+1]===119&&id(t)!==void 0&&Np(e, s)<=16)return!1;
    for(let n=e.length;
    s<n;
    s++)if(Pp(e, s))return ue.log("MPEG Audio sync word found !"), !0;
    return!1
  }
  canParse(e, t){
    return iI(e, t)
  }
  appendFrame(e, t, s){
    if(this.basePTS!==null)return kp(e, t, s, this.basePTS, this.frameIndex)
  }

}
const cI=/\/emsg[-/]ID3/i;
class uI{
  constructor(e, t){
    this.remainderData=null, this.timeOffset=0, this.config=void 0, this.videoTrack=void 0, this.audioTrack=void 0, this.id3Track=void 0,
    this.txtTrack=void 0, this.config=t
  }
  resetTimeStamp(){

  }
  resetInitSegment(e, t, s, n){
    const i=this.videoTrack=qt("video", 1), a=this.audioTrack=qt("audio", 1), o=this.txtTrack=qt("text", 1);
    if(this.id3Track=qt("id3", 1), this.timeOffset=0, !(e!=null&&e.byteLength))return;
    const l=Hg(e);
    if(l.video){
      const{
        id:c, timescale:u, codec:d, supplemental:h
      }
      =l.video;
      i.id=c, i.timescale=o.timescale=u, i.codec=d, i.supplemental=h
    }
    if(l.audio){
      const{
        id:c, timescale:u, codec:d
      }
      =l.audio;
      a.id=c, a.timescale=u, a.codec=d
    }
    o.id=Gg.text, i.sampleDuration=0, i.duration=a.duration=n
  }
  resetContiguity(){
    this.remainderData=null
  }
  static probe(e){
    return oS(e)
  }
  demux(e, t){
    this.timeOffset=t;
    let s=e;
    const n=this.videoTrack, i=this.txtTrack;
    if(this.config.progressive){
      this.remainderData&&(s=kt(this.remainderData, e));
      const o=mS(s);
      this.remainderData=o.remainder, n.samples=o.valid||new Uint8Array
    }
    else n.samples=s;
    const a=this.extractID3Track(n, t);
    return i.samples=Vh(t, n), {
      videoTrack:n, audioTrack:this.audioTrack, id3Track:a, textTrack:this.txtTrack
    }

  }
  flush(){
    const e=this.timeOffset, t=this.videoTrack, s=this.txtTrack;
    t.samples=this.remainderData||new Uint8Array, this.remainderData=null;
    const n=this.extractID3Track(t, this.timeOffset);
    return s.samples=Vh(e, t), {
      videoTrack:t, audioTrack:qt(), id3Track:n, textTrack:qt()
    }

  }
  extractID3Track(e, t){
    const s=this.id3Track;
    if(e.samples.length){
      const n=re(e.samples, ["emsg"]);
      n&&n.forEach(i=>{
        const a=pS(i);
        if(cI.test(a.schemeIdUri)){
          const o=wf(a, t);
          let l=a.eventDuration===4294967295?Number.POSITIVE_INFINITY:a.eventDuration/a.timeScale;
          l<=.001&&(l=Number.POSITIVE_INFINITY);
          const c=a.payload;
          s.samples.push({
            data:c, len:c.byteLength, dts:o, pts:o, type:ft.emsg, duration:l
          })
        }
        else if(this.config.enableEmsgKLVMetadata&&a.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")){
          const o=wf(a, t);
          s.samples.push({
            data:a.payload, len:a.payload.byteLength, dts:o, pts:o, type:ft.misbklv, duration:Number.POSITIVE_INFINITY
          })
        }

      })
    }
    return s
  }
  demuxSampleAes(e, t, s){
    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
  }
  destroy(){
    this.config=null, this.remainderData=null, this.videoTrack=this.audioTrack=this.id3Track=this.txtTrack=void 0
  }

}
function wf(r, e){
  return G(r.presentationTime)?r.presentationTime/r.timeScale:e+r.presentationTimeDelta/r.timeScale
}
class dI{
  constructor(e, t, s){
    this.keyData=void 0, this.decrypter=void 0, this.keyData=s, this.decrypter=new Xu(t, {
      removePKCS7Padding:!1
    })
  }
  decryptBuffer(e){
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, zr.cbc)
  }
  decryptAacSample(e, t, s){
    const n=e[t].unit;
    if(n.length<=16)return;
    const i=n.subarray(16, n.length-n.length%16), a=i.buffer.slice(i.byteOffset, i.byteOffset+i.length);
    this.decryptBuffer(a).then(o=>{
      const l=new Uint8Array(o);
      n.set(l, 16), this.decrypter.isSync()||this.decryptAacSamples(e, t+1, s)
    }).catch(s)
  }
  decryptAacSamples(e, t, s){
    for(;
    ;
    t++){
      if(t>=e.length){
        s();
        return
      }
      if(!(e[t].unit.length<32)&&(this.decryptAacSample(e, t, s), !this.decrypter.isSync()))return
    }

  }
  getAvcEncryptedData(e){
    const t=Math.floor((e.length-48)/160)*16+16, s=new Int8Array(t);
    let n=0;
    for(let i=32;
    i<e.length-16;
    i+=160, n+=16)s.set(e.subarray(i, i+16), n);
    return s
  }
  getAvcDecryptedUnit(e, t){
    const s=new Uint8Array(t);
    let n=0;
    for(let i=32;
    i<e.length-16;
    i+=160, n+=16)e.set(s.subarray(n, n+16), i);
    return e
  }
  decryptAvcSample(e, t, s, n, i){
    const a=Yg(i.data), o=this.getAvcEncryptedData(a);
    this.decryptBuffer(o.buffer).then(l=>{
      i.data=this.getAvcDecryptedUnit(a, l), this.decrypter.isSync()||this.decryptAvcSamples(e, t, s+1, n)
    }).catch(n)
  }
  decryptAvcSamples(e, t, s, n){
    if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");
    for(;
    ;
    t++, s=0){
      if(t>=e.length){
        n();
        return
      }
      const i=e[t].units;
      for(;
      !(s>=i.length);
      s++){
        const a=i[s];
        if(!(a.data.length<=48||a.type!==1&&a.type!==5)&&(this.decryptAvcSample(e, t, s, n, a), !this.decrypter.isSync()))return
      }

    }

  }

}
class Mp{
  constructor(){
    this.VideoSample=null
  }
  createVideoSample(e, t, s){
    return{
      key:e, frame:!1, pts:t, dts:s, units:[], length:0
    }

  }
  getLastNalUnit(e){
    var t;
    let s=this.VideoSample, n;
    if((!s||s.units.length===0)&&(s=e[e.length-1]), (t=s)!=null&&t.units){
      const i=s.units;
      n=i[i.length-1]
    }
    return n
  }
  pushAccessUnit(e, t){
    if(e.units.length&&e.frame){
      if(e.pts===void 0){
        const s=t.samples, n=s.length;
        if(n){
          const i=s[n-1];
          e.pts=i.pts, e.dts=i.dts
        }
        else{
          t.dropped++;
          return
        }

      }
      t.samples.push(e)
    }

  }
  parseNALu(e, t, s){
    const n=t.byteLength;
    let i=e.naluState||0;
    const a=i, o=[];
    let l=0, c, u, d, h=-1, f=0;
    for(i===-1&&(h=0, f=this.getNALuType(t, 0), i=0, l=1);
    l<n;
    ){
      if(c=t[l++], !i){
        i=c?0:1;
        continue
      }
      if(i===1){
        i=c?0:2;
        continue
      }
      if(!c)i=3;
      else if(c===1){
        if(u=l-i-1, h>=0){
          const g={
            data:t.subarray(h, u), type:f
          };
          o.push(g)
        }
        else{
          const g=this.getLastNalUnit(e.samples);
          g&&(a&&l<=4-a&&g.state&&(g.data=g.data.subarray(0, g.data.byteLength-a)), u>0&&(g.data=kt(g.data, t.subarray(0,
          u)), g.state=0))
        }
        l<n?(d=this.getNALuType(t, l), h=l, f=d, i=0):i=-1
      }
      else i=0
    }
    if(h>=0&&i>=0){
      const g={
        data:t.subarray(h, n), type:f, state:i
      };
      o.push(g)
    }
    if(o.length===0){
      const g=this.getLastNalUnit(e.samples);
      g&&(g.data=kt(g.data, t))
    }
    return e.naluState=i, o
  }

}
class Bn{
  constructor(e){
    this.data=void 0, this.bytesAvailable=void 0, this.word=void 0, this.bitsAvailable=void 0, this.data=e, this.bytesAvailable=e.byteLength,
    this.word=0, this.bitsAvailable=0
  }
  loadWord(){
    const e=this.data, t=this.bytesAvailable, s=e.byteLength-t, n=new Uint8Array(4), i=Math.min(4, t);
    if(i===0)throw new Error("no bytes available");
    n.set(e.subarray(s, s+i)), this.word=new DataView(n.buffer).getUint32(0), this.bitsAvailable=i*8, this.bytesAvailable-=i
  }
  skipBits(e){
    let t;
    e=Math.min(e, this.bytesAvailable*8+this.bitsAvailable), this.bitsAvailable>e?(this.word<<=e, this.bitsAvailable-=e):(e-=this.bitsAvailable,
    t=e>>3, e-=t<<3, this.bytesAvailable-=t, this.loadWord(), this.word<<=e, this.bitsAvailable-=e)
  }
  readBits(e){
    let t=Math.min(this.bitsAvailable, e);
    const s=this.word>>>32-t;
    if(e>32&&ue.error("Cannot read more than 32 bits at a time"), this.bitsAvailable-=t, this.bitsAvailable>0)this.word<<=t;
    else if(this.bytesAvailable>0)this.loadWord();
    else throw new Error("no bits available");
    return t=e-t, t>0&&this.bitsAvailable?s<<t|this.readBits(t):s
  }
  skipLZ(){
    let e;
    for(e=0;
    e<this.bitsAvailable;
    ++e)if(this.word&2147483648>>>e)return this.word<<=e, this.bitsAvailable-=e, e;
    return this.loadWord(), e+this.skipLZ()
  }
  skipUEG(){
    this.skipBits(1+this.skipLZ())
  }
  skipEG(){
    this.skipBits(1+this.skipLZ())
  }
  readUEG(){
    const e=this.skipLZ();
    return this.readBits(e+1)-1
  }
  readEG(){
    const e=this.readUEG();
    return 1&e?1+e>>>1:-1*(e>>>1)
  }
  readBoolean(){
    return this.readBits(1)===1
  }
  readUByte(){
    return this.readBits(8)
  }
  readUShort(){
    return this.readBits(16)
  }
  readUInt(){
    return this.readBits(32)
  }

}
class hI extends Mp{
  parsePES(e, t, s, n){
    const i=this.parseNALu(e, s.data, n);
    let a=this.VideoSample, o, l=!1;
    s.data=null, a&&i.length&&!e.audFound&&(this.pushAccessUnit(a, e), a=this.VideoSample=this.createVideoSample(!1, s.pts,
    s.dts)), i.forEach(c=>{
      var u, d;
      switch(c.type){
        case 1:{
          let y=!1;
          o=!0;
          const x=c.data;
          if(l&&x.length>4){
            const p=this.readSliceType(x);
            (p===2||p===4||p===7||p===9)&&(y=!0)
          }
          if(y){
            var h;
            (h=a)!=null&&h.frame&&!a.key&&(this.pushAccessUnit(a, e), a=this.VideoSample=null)
          }
          a||(a=this.VideoSample=this.createVideoSample(!0, s.pts, s.dts)), a.frame=!0, a.key=y;
          break
        }
        case 5:o=!0, (u=a)!=null&&u.frame&&!a.key&&(this.pushAccessUnit(a, e), a=this.VideoSample=null), a||(a=this.VideoSample=this.createVideoSample(!0,
        s.pts, s.dts)), a.key=!0, a.frame=!0;
        break;
        case 6:{
          o=!0, zu(c.data, 1, s.pts, t.samples);
          break
        }
        case 7:{
          var f, g;
          o=!0, l=!0;
          const y=c.data, x=this.readSPS(y);
          if(!e.sps||e.width!==x.width||e.height!==x.height||((f=e.pixelRatio)==null?void 0:f[0])!==x.pixelRatio[0]||((g=e.pixelRatio)==null?void 0:g[1])!==x.pixelRatio[1]){
            e.width=x.width, e.height=x.height, e.pixelRatio=x.pixelRatio, e.sps=[y];
            const p=y.subarray(1, 4);
            let v="avc1.";
            for(let E=0;
            E<3;
            E++){
              let T=p[E].toString(16);
              T.length<2&&(T="0"+T), v+=T
            }
            e.codec=v
          }
          break
        }
        case 8:o=!0, e.pps=[c.data];
        break;
        case 9:o=!0, e.audFound=!0, (d=a)!=null&&d.frame&&(this.pushAccessUnit(a, e), a=null), a||(a=this.VideoSample=this.createVideoSample(!1,
        s.pts, s.dts));
        break;
        case 12:o=!0;
        break;
        default:o=!1;
        break
      }
      a&&o&&a.units.push(c)
    }), n&&a&&(this.pushAccessUnit(a, e), this.VideoSample=null)
  }
  getNALuType(e, t){
    return e[t]&31
  }
  readSliceType(e){
    const t=new Bn(e);
    return t.readUByte(), t.readUEG(), t.readUEG()
  }
  skipScalingList(e, t){
    let s=8, n=8, i;
    for(let a=0;
    a<e;
    a++)n!==0&&(i=t.readEG(), n=(s+i+256)%256), s=n===0?s:n
  }
  readSPS(e){
    const t=new Bn(e);
    let s=0, n=0, i=0, a=0, o, l, c;
    const u=t.readUByte.bind(t), d=t.readBits.bind(t), h=t.readUEG.bind(t), f=t.readBoolean.bind(t), g=t.skipBits.bind(t),
    y=t.skipEG.bind(t), x=t.skipUEG.bind(t), p=this.skipScalingList.bind(this);
    u();
    const v=u();
    if(d(5), g(3), u(), x(), v===100||v===110||v===122||v===244||v===44||v===83||v===86||v===118||v===128){
      const A=h();
      if(A===3&&g(1), x(), x(), g(1), f())for(l=A!==3?8:12, c=0;
      c<l;
      c++)f()&&(c<6?p(16, t):p(64, t))
    }
    x();
    const E=h();
    if(E===0)h();
    else if(E===1)for(g(1), y(), y(), o=h(), c=0;
    c<o;
    c++)y();
    x(), g(1);
    const T=h(), I=h(), b=d(1);
    b===0&&g(1), g(1), f()&&(s=h(), n=h(), i=h(), a=h());
    let L=[1, 1];
    if(f()&&f())switch(u()){
      case 1:L=[1, 1];
      break;
      case 2:L=[12, 11];
      break;
      case 3:L=[10, 11];
      break;
      case 4:L=[16, 11];
      break;
      case 5:L=[40, 33];
      break;
      case 6:L=[24, 11];
      break;
      case 7:L=[20, 11];
      break;
      case 8:L=[32, 11];
      break;
      case 9:L=[80, 33];
      break;
      case 10:L=[18, 11];
      break;
      case 11:L=[15, 11];
      break;
      case 12:L=[64, 33];
      break;
      case 13:L=[160, 99];
      break;
      case 14:L=[4, 3];
      break;
      case 15:L=[3, 2];
      break;
      case 16:L=[2, 1];
      break;
      case 255:{
        L=[u()<<8|u(), u()<<8|u()];
        break
      }

    }
    return{
      width:Math.ceil((T+1)*16-s*2-n*2), height:(2-b)*(I+1)*16-(b?2:4)*(i+a), pixelRatio:L
    }

  }

}
class fI extends Mp{
  constructor(...e){
    super(...e), this.initVPS=null
  }
  parsePES(e, t, s, n){
    const i=this.parseNALu(e, s.data, n);
    let a=this.VideoSample, o, l=!1;
    s.data=null, a&&i.length&&!e.audFound&&(this.pushAccessUnit(a, e), a=this.VideoSample=this.createVideoSample(!1, s.pts,
    s.dts)), i.forEach(c=>{
      var u, d;
      switch(c.type){
        case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:a||(a=this.VideoSample=this.createVideoSample(!1,
        s.pts, s.dts)), a.frame=!0, o=!0;
        break;
        case 16:case 17:case 18:case 21:if(o=!0, l){
          var h;
          (h=a)!=null&&h.frame&&!a.key&&(this.pushAccessUnit(a, e), a=this.VideoSample=null)
        }
        a||(a=this.VideoSample=this.createVideoSample(!0, s.pts, s.dts)), a.key=!0, a.frame=!0;
        break;
        case 19:case 20:o=!0, (u=a)!=null&&u.frame&&!a.key&&(this.pushAccessUnit(a, e), a=this.VideoSample=null), a||(a=this.VideoSample=this.createVideoSample(!0,
        s.pts, s.dts)), a.key=!0, a.frame=!0;
        break;
        case 39:o=!0, zu(c.data, 2, s.pts, t.samples);
        break;
        case 32:o=!0, e.vps||(typeof e.params!="object"&&(e.params={

        }), e.params=he(e.params, this.readVPS(c.data)), this.initVPS=c.data), e.vps=[c.data];
        break;
        case 33:if(o=!0, l=!0, e.vps!==void 0&&e.vps[0]!==this.initVPS&&e.sps!==void 0&&!this.matchSPS(e.sps[0], c.data)&&(this.initVPS=e.vps[0],
        e.sps=e.pps=void 0), !e.sps){
          const f=this.readSPS(c.data);
          e.width=f.width, e.height=f.height, e.pixelRatio=f.pixelRatio, e.codec=f.codecString, e.sps=[], typeof e.params!="object"&&(e.params={

          });
          for(const g in f.params)e.params[g]=f.params[g]
        }
        this.pushParameterSet(e.sps, c.data, e.vps), a||(a=this.VideoSample=this.createVideoSample(!0, s.pts, s.dts)), a.key=!0;
        break;
        case 34:if(o=!0, typeof e.params=="object"){
          if(!e.pps){
            e.pps=[];
            const f=this.readPPS(c.data);
            for(const g in f)e.params[g]=f[g]
          }
          this.pushParameterSet(e.pps, c.data, e.vps)
        }
        break;
        case 35:o=!0, e.audFound=!0, (d=a)!=null&&d.frame&&(this.pushAccessUnit(a, e), a=null), a||(a=this.VideoSample=this.createVideoSample(!1,
        s.pts, s.dts));
        break;
        default:o=!1;
        break
      }
      a&&o&&a.units.push(c)
    }), n&&a&&(this.pushAccessUnit(a, e), this.VideoSample=null)
  }
  pushParameterSet(e, t, s){
    (s&&s[0]===this.initVPS||!s&&!e.length)&&e.push(t)
  }
  getNALuType(e, t){
    return(e[t]&126)>>>1
  }
  ebsp2rbsp(e){
    const t=new Uint8Array(e.byteLength);
    let s=0;
    for(let n=0;
    n<e.byteLength;
    n++)n>=2&&e[n]===3&&e[n-1]===0&&e[n-2]===0||(t[s]=e[n], s++);
    return new Uint8Array(t.buffer, 0, s)
  }
  pushAccessUnit(e, t){
    super.pushAccessUnit(e, t), this.initVPS&&(this.initVPS=null)
  }
  readVPS(e){
    const t=new Bn(e);
    t.readUByte(), t.readUByte(), t.readBits(4), t.skipBits(2), t.readBits(6);
    const s=t.readBits(3), n=t.readBoolean();
    return{
      numTemporalLayers:s+1, temporalIdNested:n
    }

  }
  readSPS(e){
    const t=new Bn(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.readBits(4);
    const s=t.readBits(3);
    t.readBoolean();
    const n=t.readBits(2), i=t.readBoolean(), a=t.readBits(5), o=t.readUByte(), l=t.readUByte(), c=t.readUByte(), u=t.readUByte(),
    d=t.readUByte(), h=t.readUByte(), f=t.readUByte(), g=t.readUByte(), y=t.readUByte(), x=t.readUByte(), p=t.readUByte(),
    v=[], E=[];
    for(let oe=0;
    oe<s;
    oe++)v.push(t.readBoolean()), E.push(t.readBoolean());
    if(s>0)for(let oe=s;
    oe<8;
    oe++)t.readBits(2);
    for(let oe=0;
    oe<s;
    oe++)v[oe]&&(t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(),
    t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte()), E[oe]&&t.readUByte();
    t.readUEG();
    const T=t.readUEG();
    T==3&&t.skipBits(1);
    const I=t.readUEG(), b=t.readUEG(), L=t.readBoolean();
    let A=0, w=0, R=0, D=0;
    L&&(A+=t.readUEG(), w+=t.readUEG(), R+=t.readUEG(), D+=t.readUEG());
    const $=t.readUEG(), V=t.readUEG(), Y=t.readUEG(), K=t.readBoolean();
    for(let oe=K?0:s;
    oe<=s;
    oe++)t.skipUEG(), t.skipUEG(), t.skipUEG();
    if(t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.readBoolean()&&t.readBoolean())for(let He=0;
    He<4;
    He++)for(let Tt=0;
    Tt<(He===3?2:6);
    Tt++)if(!t.readBoolean())t.readUEG();
    else{
      const Dt=Math.min(64, 1<<4+(He<<1));
      He>1&&t.readEG();
      for(let xs=0;
      xs<Dt;
      xs++)t.readEG()
    }
    t.readBoolean(), t.readBoolean(), t.readBoolean()&&(t.readUByte(), t.skipUEG(), t.skipUEG(), t.readBoolean());
    const P=t.readUEG();
    let O=0;
    for(let oe=0;
    oe<P;
    oe++){
      let He=!1;
      if(oe!==0&&(He=t.readBoolean()), He){
        oe===P&&t.readUEG(), t.readBoolean(), t.readUEG();
        let Tt=0;
        for(let Zr=0;
        Zr<=O;
        Zr++){
          const Dt=t.readBoolean();
          let xs=!1;
          Dt||(xs=t.readBoolean()), (Dt||xs)&&Tt++
        }
        O=Tt
      }
      else{
        const Tt=t.readUEG(), Zr=t.readUEG();
        O=Tt+Zr;
        for(let Dt=0;
        Dt<Tt;
        Dt++)t.readUEG(), t.readBoolean();
        for(let Dt=0;
        Dt<Zr;
        Dt++)t.readUEG(), t.readBoolean()
      }

    }
    if(t.readBoolean()){
      const oe=t.readUEG();
      for(let He=0;
      He<oe;
      He++){
        for(let Tt=0;
        Tt<Y+4;
        Tt++)t.readBits(1);
        t.readBits(1)
      }

    }
    let M=0, F=1, X=1, se=!0, J=1, ee=0;
    t.readBoolean(), t.readBoolean();
    let we=!1;
    if(t.readBoolean()){
      if(t.readBoolean()){
        const Jr=t.readUByte(), gd=[1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2], Ti=[1, 11, 11, 11, 33, 11,
        11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
        Jr>0&&Jr<16?(F=gd[Jr-1], X=Ti[Jr-1]):Jr===255&&(F=t.readBits(16), X=t.readBits(16))
      }
      if(t.readBoolean()&&t.readBoolean(), t.readBoolean()&&(t.readBits(3), t.readBoolean(), t.readBoolean()&&(t.readUByte(),
      t.readUByte(), t.readUByte())), t.readBoolean()&&(t.readUEG(), t.readUEG()), t.readBoolean(), t.readBoolean(), t.readBoolean(),
      we=t.readBoolean(), we&&(t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG()), t.readBoolean()&&(J=t.readBits(32), ee=t.readBits(32),
      t.readBoolean()&&t.readUEG(), t.readBoolean())){
        const Ti=t.readBoolean(), pd=t.readBoolean();
        let fn=!1;
        (Ti||pd)&&(fn=t.readBoolean(), fn&&(t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)), t.readBits(4),
        t.readBits(4), fn&&t.readBits(4), t.readBits(5), t.readBits(5), t.readBits(5));
        for(let yd=0;
        yd<=s;
        yd++){
          se=t.readBoolean();
          const py=se||t.readBoolean();
          let vd=!1;
          py?t.readEG():vd=t.readBoolean();
          const xd=vd?1:t.readUEG()+1;
          if(Ti)for(let mn=0;
          mn<xd;
          mn++)t.readUEG(), t.readUEG(), fn&&(t.readUEG(), t.readUEG()), t.skipBits(1);
          if(pd)for(let mn=0;
          mn<xd;
          mn++)t.readUEG(), t.readUEG(), fn&&(t.readUEG(), t.readUEG()), t.skipBits(1)
        }

      }
      t.readBoolean()&&(t.readBoolean(), t.readBoolean(), t.readBoolean(), M=t.readUEG())
    }
    let St=I, Vt=b;
    if(L){
      let oe=1, He=1;
      T===1?oe=He=2:T==2&&(oe=2), St=I-oe*w-oe*A, Vt=b-He*D-He*R
    }
    const Xr=n?["A", "B", "C"][n]:"", gy=o<<24|l<<16|c<<8|u;
    let ko=0;
    for(let oe=0;
    oe<32;
    oe++)ko=(ko|(gy>>oe&1)<<31-oe)>>>0;
    let Co=ko.toString(16);
    return a===1&&Co==="2"&&(Co="6"), {
      codecString:`hvc1.${Xr}${a}.${Co}.${i?"H":"L"}${p}.B0`, params:{
        general_tier_flag:i, general_profile_idc:a, general_profile_space:n, general_profile_compatibility_flags:[o, l, c,
        u], general_constraint_indicator_flags:[d, h, f, g, y, x], general_level_idc:p, bit_depth:$+8, bit_depth_luma_minus8:$,
        bit_depth_chroma_minus8:V, min_spatial_segmentation_idc:M, chroma_format_idc:T, frame_rate:{
          fixed:se, fps:ee/J
        }

      }, width:St, height:Vt, pixelRatio:[F, X]
    }

  }
  readPPS(e){
    const t=new Bn(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.skipUEG(), t.skipUEG(), t.skipBits(2), t.skipBits(3), t.skipBits(2), t.skipUEG(), t.skipUEG(),
    t.skipEG(), t.skipBits(2), t.readBoolean()&&t.skipUEG(), t.skipEG(), t.skipEG(), t.skipBits(4);
    const n=t.readBoolean(), i=t.readBoolean();
    let a=1;
    return i&&n?a=0:i?a=3:n&&(a=2), {
      parallelismType:a
    }

  }
  matchSPS(e, t){
    return String.fromCharCode.apply(null, e).substr(3)===String.fromCharCode.apply(null, t).substr(3)
  }

}
const Oe=188;
class _r{
  constructor(e, t, s, n){
    this.logger=void 0, this.observer=void 0, this.config=void 0, this.typeSupported=void 0, this.sampleAes=null, this.pmtParsed=!1,
    this.audioCodec=void 0, this.videoCodec=void 0, this._pmtId=-1, this._videoTrack=void 0, this._audioTrack=void 0, this._id3Track=void 0,
    this._txtTrack=void 0, this.aacOverFlow=null, this.remainderData=null, this.videoParser=void 0, this.observer=e, this.config=t,
    this.typeSupported=s, this.logger=n, this.videoParser=null
  }
  static probe(e, t){
    const s=_r.syncOffset(e);
    return s>0&&t.warn(`MPEG2-TS detected but first sync word found @ offset ${s}`), s!==-1
  }
  static syncOffset(e){
    const t=e.length;
    let s=Math.min(Oe*5, t-Oe)+1, n=0;
    for(;
    n<s;
    ){
      let i=!1, a=-1, o=0;
      for(let l=n;
      l<t;
      l+=Oe)if(e[l]===71&&(t-l===Oe||e[l+Oe]===71)){
        if(o++, a===-1&&(a=l, a!==0&&(s=Math.min(a+Oe*99, e.length-Oe)+1)), i||(i=Oc(e, l)===0), i&&o>1&&(a===0&&o>2||l+Oe>s))return a
      }
      else{
        if(o)return-1;
        break
      }
      n++
    }
    return-1
  }
  static createTrack(e, t){
    return{
      container:e==="video"||e==="audio"?"video/mp2t":void 0, type:e, id:Gg[e], pid:-1, inputTimeScale:9e4, sequenceNumber:0,
      samples:[], dropped:0, duration:e==="audio"?t:void 0
    }

  }
  resetInitSegment(e, t, s, n){
    this.pmtParsed=!1, this._pmtId=-1, this._videoTrack=_r.createTrack("video"), this._videoTrack.duration=n, this._audioTrack=_r.createTrack("audio",
    n), this._id3Track=_r.createTrack("id3"), this._txtTrack=_r.createTrack("text"), this._audioTrack.segmentCodec="aac",
    this.videoParser=null, this.aacOverFlow=null, this.remainderData=null, this.audioCodec=t, this.videoCodec=s
  }
  resetTimeStamp(){

  }
  resetContiguity(){
    const{
      _audioTrack:e, _videoTrack:t, _id3Track:s
    }
    =this;
    e&&(e.pesData=null), t&&(t.pesData=null), s&&(s.pesData=null), this.aacOverFlow=null, this.remainderData=null
  }
  demux(e, t, s=!1, n=!1){
    s||(this.sampleAes=null);
    let i;
    const a=this._videoTrack, o=this._audioTrack, l=this._id3Track, c=this._txtTrack;
    let u=a.pid, d=a.pesData, h=o.pid, f=l.pid, g=o.pesData, y=l.pesData, x=null, p=this.pmtParsed, v=this._pmtId, E=e.length;
    if(this.remainderData&&(e=kt(this.remainderData, e), E=e.length, this.remainderData=null), E<Oe&&!n)return this.remainderData=e,
    {
      audioTrack:o, videoTrack:a, id3Track:l, textTrack:c
    };
    const T=Math.max(0, _r.syncOffset(e));
    E-=(E-T)%Oe, E<e.byteLength&&!n&&(this.remainderData=new Uint8Array(e.buffer, E, e.buffer.byteLength-E));
    let I=0;
    for(let L=T;
    L<E;
    L+=Oe)if(e[L]===71){
      const A=!!(e[L+1]&64), w=Oc(e, L), R=(e[L+3]&48)>>4;
      let D;
      if(R>1){
        if(D=L+5+e[L+4], D===L+Oe)continue
      }
      else D=L+4;
      switch(w){
        case u:A&&(d&&(i=Ls(d, this.logger))&&(this.readyVideoParser(a.segmentCodec), this.videoParser!==null&&this.videoParser.parsePES(a,
        c, i, !1)), d={
          data:[], size:0
        }), d&&(d.data.push(e.subarray(D, L+Oe)), d.size+=L+Oe-D);
        break;
        case h:if(A){
          if(g&&(i=Ls(g, this.logger)))switch(o.segmentCodec){
            case"aac":this.parseAACPES(o, i);
            break;
            case"mp3":this.parseMPEGPES(o, i);
            break;
            case"ac3":this.parseAC3PES(o, i);
            break
          }
          g={
            data:[], size:0
          }

        }
        g&&(g.data.push(e.subarray(D, L+Oe)), g.size+=L+Oe-D);
        break;
        case f:A&&(y&&(i=Ls(y, this.logger))&&this.parseID3PES(l, i), y={
          data:[], size:0
        }), y&&(y.data.push(e.subarray(D, L+Oe)), y.size+=L+Oe-D);
        break;
        case 0:A&&(D+=e[D]+1), v=this._pmtId=mI(e, D);
        break;
        case v:{
          A&&(D+=e[D]+1);
          const $=gI(e, D, this.typeSupported, s, this.observer, this.logger);
          u=$.videoPid, u>0&&(a.pid=u, a.segmentCodec=$.segmentVideoCodec), h=$.audioPid, h>0&&(o.pid=h, o.segmentCodec=$.segmentAudioCodec),
          f=$.id3Pid, f>0&&(l.pid=f), x!==null&&!p&&(this.logger.warn(`MPEG-TS PMT found at ${L} after unknown PID '${x}'. Backtracking to sync byte @${T} to parse all TS packets.`)
          , x=null, L=T-188), p=this.pmtParsed=!0;
          break
        }
        case 17:case 8191:break;
        default:x=w;
        break
      }

    }
    else I++;
    I>0&&Mc(this.observer, new Error(`Found ${I} TS packet/s that do not start with 0x47`), void 0, this.logger), a.pesData=d,
    o.pesData=g, l.pesData=y;
    const b={
      audioTrack:o, videoTrack:a, id3Track:l, textTrack:c
    };
    return n&&this.extractRemainingSamples(b), b
  }
  flush(){
    const{
      remainderData:e
    }
    =this;
    this.remainderData=null;
    let t;
    return e?t=this.demux(e, -1, !1, !0):t={
      videoTrack:this._videoTrack, audioTrack:this._audioTrack, id3Track:this._id3Track, textTrack:this._txtTrack
    }, this.extractRemainingSamples(t), this.sampleAes?this.decrypt(t, this.sampleAes):t
  }
  extractRemainingSamples(e){
    const{
      audioTrack:t, videoTrack:s, id3Track:n, textTrack:i
    }
    =e, a=s.pesData, o=t.pesData, l=n.pesData;
    let c;
    if(a&&(c=Ls(a, this.logger))?(this.readyVideoParser(s.segmentCodec), this.videoParser!==null&&(this.videoParser.parsePES(s,
    i, c, !0), s.pesData=null)):s.pesData=a, o&&(c=Ls(o, this.logger))){
      switch(t.segmentCodec){
        case"aac":this.parseAACPES(t, c);
        break;
        case"mp3":this.parseMPEGPES(t, c);
        break;
        case"ac3":this.parseAC3PES(t, c);
        break
      }
      t.pesData=null
    }
    else o!=null&&o.size&&this.logger.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData=o;
    l&&(c=Ls(l, this.logger))?(this.parseID3PES(n, c), n.pesData=null):n.pesData=l
  }
  demuxSampleAes(e, t, s){
    const n=this.demux(e, s, !0, !this.config.progressive), i=this.sampleAes=new dI(this.observer, this.config, t);
    return this.decrypt(n, i)
  }
  readyVideoParser(e){
    this.videoParser===null&&(e==="avc"?this.videoParser=new hI:e==="hevc"&&(this.videoParser=new fI))
  }
  decrypt(e, t){
    return new Promise(s=>{
      const{
        audioTrack:n, videoTrack:i
      }
      =e;
      n.samples&&n.segmentCodec==="aac"?t.decryptAacSamples(n.samples, 0, ()=>{
        i.samples?t.decryptAvcSamples(i.samples, 0, 0, ()=>{
          s(e)
        }):s(e)
      }):i.samples&&t.decryptAvcSamples(i.samples, 0, 0, ()=>{
        s(e)
      })
    })
  }
  destroy(){
    this.observer&&this.observer.removeAllListeners(), this.config=this.logger=this.observer=null, this.aacOverFlow=this.videoParser=this.remainderData=this.sampleAes=null,
    this._videoTrack=this._audioTrack=this._id3Track=this._txtTrack=void 0
  }
  parseAACPES(e, t){
    let s=0;
    const n=this.aacOverFlow;
    let i=t.data;
    if(n){
      this.aacOverFlow=null;
      const d=n.missing, h=n.sample.unit.byteLength;
      if(d===-1)i=kt(n.sample.unit, i);
      else{
        const f=h-d;
        n.sample.unit.set(i.subarray(0, d), f), e.samples.push(n.sample), s=n.missing
      }

    }
    let a, o;
    for(a=s, o=i.length;
    a<o-1&&!ao(i, a);
    a++);
    if(a!==s){
      let d;
      const h=a<o-1;
      if(h?d=`AAC PES did not start with ADTS header,offset:${a}`:d="No ADTS header found in AAC PES", Mc(this.observer, new Error(d),
      h, this.logger), !h)return
    }
    Ap(e, this.observer, i, a, this.audioCodec);
    let l;
    if(t.pts!==void 0)l=t.pts;
    else if(n){
      const d=Rp(e.samplerate);
      l=n.sample.pts+d
    }
    else{
      this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
      return
    }
    let c=0, u;
    for(;
    a<o;
    )if(u=wp(e, i, a, l, c), a+=u.length, u.missing){
      this.aacOverFlow=u;
      break
    }
    else for(c++;
    a<o-1&&!ao(i, a);
    a++);

  }
  parseMPEGPES(e, t){
    const s=t.data, n=s.length;
    let i=0, a=0;
    const o=t.pts;
    if(o===void 0){
      this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return
    }
    for(;
    a<n;
    )if(Dp(s, a)){
      const l=kp(e, s, a, o, i);
      if(l)a+=l.length, i++;
      else break
    }
    else a++
  }
  parseAC3PES(e, t){
    {
      const s=t.data, n=t.pts;
      if(n===void 0){
        this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
        return
      }
      const i=s.length;
      let a=0, o=0, l;
      for(;
      o<i&&(l=Op(e, s, o, n, a++))>0;
      )o+=l
    }

  }
  parseID3PES(e, t){
    if(t.pts===void 0){
      this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return
    }
    const s=he({

    }, t, {
      type:this._videoTrack?ft.emsg:ft.audioId3, duration:Number.POSITIVE_INFINITY
    });
    e.samples.push(s)
  }

}
function Oc(r, e){
  return((r[e+1]&31)<<8)+r[e+2]
}
function mI(r, e){
  return(r[e+10]&31)<<8|r[e+11]
}
function gI(r, e, t, s, n, i){
  const a={
    audioPid:-1, videoPid:-1, id3Pid:-1, segmentVideoCodec:"avc", segmentAudioCodec:"aac"
  }, o=(r[e+1]&15)<<8|r[e+2], l=e+3+o-4, c=(r[e+10]&15)<<8|r[e+11];
  for(e+=12+c;
  e<l;
  ){
    const u=Oc(r, e), d=(r[e+3]&15)<<8|r[e+4];
    switch(r[e]){
      case 207:if(!s){
        gl("ADTS AAC", i);
        break
      }
      case 15:a.audioPid===-1&&(a.audioPid=u);
      break;
      case 21:a.id3Pid===-1&&(a.id3Pid=u);
      break;
      case 219:if(!s){
        gl("H.264", i);
        break
      }
      case 27:a.videoPid===-1&&(a.videoPid=u);
      break;
      case 3:case 4:!t.mpeg&&!t.mp3?i.log("MPEG audio found, not supported in this browser"):a.audioPid===-1&&(a.audioPid=u,
      a.segmentAudioCodec="mp3");
      break;
      case 193:if(!s){
        gl("AC-3", i);
        break
      }
      case 129:t.ac3?a.audioPid===-1&&(a.audioPid=u, a.segmentAudioCodec="ac3"):i.log("AC-3 audio found, not supported in this browser");
      break;
      case 6:if(a.audioPid===-1&&d>0){
        let h=e+5, f=d;
        for(;
        f>2;
        ){
          switch(r[h]){
            case 106:t.ac3!==!0?i.log("AC-3 audio found, not supported in this browser for now"):(a.audioPid=u, a.segmentAudioCodec="ac3");
            break
          }
          const y=r[h+1]+2;
          h+=y, f-=y
        }

      }
      break;
      case 194:case 135:return Mc(n, new Error("Unsupported EC-3 in M2TS found"), void 0, i), a;
      case 36:a.videoPid===-1&&(a.videoPid=u, a.segmentVideoCodec="hevc", i.log("HEVC in M2TS found"));
      break
    }
    e+=d+5
  }
  return a
}
function Mc(r, e, t, s){
  s.warn(`parsing error: ${e.message}`), r.emit(S.ERROR, S.ERROR, {
    type:q.MEDIA_ERROR, details:k.FRAG_PARSING_ERROR, fatal:!1, levelRetry:t, error:e, reason:e.message
  })
}
function gl(r, e){
  e.log(`${r} with AES-128-CBC encryption found in unencrypted stream`)
}
function Ls(r, e){
  let t=0, s, n, i, a, o;
  const l=r.data;
  if(!r||r.size===0)return null;
  for(;
  l[0].length<19&&l.length>1;
  )l[0]=kt(l[0], l[1]), l.splice(1, 1);
  if(s=l[0], (s[0]<<16)+(s[1]<<8)+s[2]===1){
    if(n=(s[4]<<8)+s[5], n&&n>r.size-6)return null;
    const u=s[7];
    u&192&&(a=(s[9]&14)*536870912+(s[10]&255)*4194304+(s[11]&254)*16384+(s[12]&255)*128+(s[13]&254)/2, u&64?(o=(s[14]&14)*536870912+(s[15]&255)*4194304+(s[16]&254)*16384+(s[17]&255)
    *128+(s[18]&254)/2, a-o>60*9e4&&(e.warn(`${Math.round((a-o)/9e4)}s delta between PTS and DTS, align them`), a=o)):o=a),
    i=s[8];
    let d=i+9;
    if(r.size<=d)return null;
    r.size-=d;
    const h=new Uint8Array(r.size);
    for(let f=0, g=l.length;
    f<g;
    f++){
      s=l[f];
      let y=s.byteLength;
      if(d)if(d>y){
        d-=y;
        continue
      }
      else s=s.subarray(d), y-=d, d=0;
      h.set(s, t), t+=y
    }
    return n&&(n-=i+3), {
      data:h, pts:a, dts:o, len:n
    }

  }
  return null
}
class pI{
  static getSilentFrame(e, t){
    switch(e){
      case"mp4a.40.2":if(t===1)return new Uint8Array([0, 200, 0, 128, 35, 128]);
      if(t===2)return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
      if(t===3)return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
      if(t===4)return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
      if(t===5)return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
      if(t===6)return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178,
      0, 32, 8, 224]);
      break;
      default:if(t===1)return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90,
      90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
      90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
      if(t===2)return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90,
      90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
      90, 90, 90, 90, 90, 90, 90, 90, 94]);
      if(t===3)return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90,
      90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
      90, 90, 90, 90, 90, 90, 90, 90, 94]);
      break
    }

  }

}
const Lr=Math.pow(2, 32)-1;
class _{
  static init(){
    _.types={
      avc1:[], avcC:[], hvc1:[], hvcC:[], btrt:[], dinf:[], dref:[], esds:[], ftyp:[], hdlr:[], mdat:[], mdhd:[], mdia:[],
      mfhd:[], minf:[], moof:[], moov:[], mp4a:[], ".mp3":[], dac3:[], "ac-3":[], mvex:[], mvhd:[], pasp:[], sdtp:[], stbl:[],
      stco:[], stsc:[], stsd:[], stsz:[], stts:[], tfdt:[], tfhd:[], traf:[], trak:[], trun:[], trex:[], tkhd:[], vmhd:[],
      smhd:[]
    };
    let e;
    for(e in _.types)_.types.hasOwnProperty(e)&&(_.types[e]=[e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
    const t=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100,
    101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), s=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
    _.HDLR_TYPES={
      video:t, audio:s
    };
    const n=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), i=new Uint8Array([0, 0,
    0, 0, 0, 0, 0, 0]);
    _.STTS=_.STSC=_.STCO=i, _.STSZ=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), _.VMHD=new Uint8Array([0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0]), _.SMHD=new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), _.STSD=new Uint8Array([0, 0, 0, 0, 0, 0, 0,
    1]);
    const a=new Uint8Array([105, 115, 111, 109]), o=new Uint8Array([97, 118, 99, 49]), l=new Uint8Array([0, 0, 0, 1]);
    _.FTYP=_.box(_.types.ftyp, a, l, a, o), _.DINF=_.box(_.types.dinf, _.box(_.types.dref, n))
  }
  static box(e, ...t){
    let s=8, n=t.length;
    const i=n;
    for(;
    n--;
    )s+=t[n].byteLength;
    const a=new Uint8Array(s);
    for(a[0]=s>>24&255, a[1]=s>>16&255, a[2]=s>>8&255, a[3]=s&255, a.set(e, 4), n=0, s=8;
    n<i;
    n++)a.set(t[n], s), s+=t[n].byteLength;
    return a
  }
  static hdlr(e){
    return _.box(_.types.hdlr, _.HDLR_TYPES[e])
  }
  static mdat(e){
    return _.box(_.types.mdat, e)
  }
  static mdhd(e, t){
    t*=e;
    const s=Math.floor(t/(Lr+1)), n=Math.floor(t%(Lr+1));
    return _.box(_.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e>>24&255, e>>16&255,
    e>>8&255, e&255, s>>24, s>>16&255, s>>8&255, s&255, n>>24, n>>16&255, n>>8&255, n&255, 85, 196, 0, 0]))
  }
  static mdia(e){
    return _.box(_.types.mdia, _.mdhd(e.timescale||0, e.duration||0), _.hdlr(e.type), _.minf(e))
  }
  static mfhd(e){
    return _.box(_.types.mfhd, new Uint8Array([0, 0, 0, 0, e>>24, e>>16&255, e>>8&255, e&255]))
  }
  static minf(e){
    return e.type==="audio"?_.box(_.types.minf, _.box(_.types.smhd, _.SMHD), _.DINF, _.stbl(e)):_.box(_.types.minf, _.box(_.types.vmhd,
    _.VMHD), _.DINF, _.stbl(e))
  }
  static moof(e, t, s){
    return _.box(_.types.moof, _.mfhd(e), _.traf(s, t))
  }
  static moov(e){
    let t=e.length;
    const s=[];
    for(;
    t--;
    )s[t]=_.trak(e[t]);
    return _.box.apply(null, [_.types.moov, _.mvhd(e[0].timescale||0, e[0].duration||0)].concat(s).concat(_.mvex(e)))
  }
  static mvex(e){
    let t=e.length;
    const s=[];
    for(;
    t--;
    )s[t]=_.trex(e[t]);
    return _.box.apply(null, [_.types.mvex, ...s])
  }
  static mvhd(e, t){
    t*=e;
    const s=Math.floor(t/(Lr+1)), n=Math.floor(t%(Lr+1)), i=new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
    0, 0, 0, 3, e>>24&255, e>>16&255, e>>8&255, e&255, s>>24, s>>16&255, s>>8&255, s&255, n>>24, n>>16&255, n>>8&255, n&255,
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255,
    255, 255]);
    return _.box(_.types.mvhd, i)
  }
  static sdtp(e){
    const t=e.samples||[], s=new Uint8Array(4+t.length);
    let n, i;
    for(n=0;
    n<t.length;
    n++)i=t[n].flags, s[n+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy;
    return _.box(_.types.sdtp, s)
  }
  static stbl(e){
    return _.box(_.types.stbl, _.stsd(e), _.box(_.types.stts, _.STTS), _.box(_.types.stsc, _.STSC), _.box(_.types.stsz, _.STSZ),
    _.box(_.types.stco, _.STCO))
  }
  static avc1(e){
    let t=[], s=[], n, i, a;
    for(n=0;
    n<e.sps.length;
    n++)i=e.sps[n], a=i.byteLength, t.push(a>>>8&255), t.push(a&255), t=t.concat(Array.prototype.slice.call(i));
    for(n=0;
    n<e.pps.length;
    n++)i=e.pps[n], a=i.byteLength, s.push(a>>>8&255), s.push(a&255), s=s.concat(Array.prototype.slice.call(i));
    const o=_.box(_.types.avcC, new Uint8Array([1, t[3], t[4], t[5], 255, 224|e.sps.length].concat(t).concat([e.pps.length]).concat(s))),
    l=e.width, c=e.height, u=e.pixelRatio[0], d=e.pixelRatio[1];
    return _.box(_.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l>>8&255,
    l&255, c>>8&255, c&255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111,
    110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, _.box(_.types.btrt, new Uint8Array([0,
    28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), _.box(_.types.pasp, new Uint8Array([u>>24, u>>16&255, u>>8&255, u&255,
    d>>24, d>>16&255, d>>8&255, d&255])))
  }
  static esds(e){
    const t=e.config;
    return new Uint8Array([0, 0, 0, 0, 3, 25, 0, 1, 0, 4, 17, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, ...t, 6, 1, 2])
  }
  static audioStsd(e){
    const t=e.samplerate||0;
    return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount||0, 0, 16, 0, 0, 0, 0, t>>8&255,
    t&255, 0, 0])
  }
  static mp4a(e){
    return _.box(_.types.mp4a, _.audioStsd(e), _.box(_.types.esds, _.esds(e)))
  }
  static mp3(e){
    return _.box(_.types[".mp3"], _.audioStsd(e))
  }
  static ac3(e){
    return _.box(_.types["ac-3"], _.audioStsd(e), _.box(_.types.dac3, e.config))
  }
  static stsd(e){
    const{
      segmentCodec:t
    }
    =e;
    if(e.type==="audio"){
      if(t==="aac")return _.box(_.types.stsd, _.STSD, _.mp4a(e));
      if(t==="ac3"&&e.config)return _.box(_.types.stsd, _.STSD, _.ac3(e));
      if(t==="mp3"&&e.codec==="mp3")return _.box(_.types.stsd, _.STSD, _.mp3(e))
    }
    else if(e.pps&&e.sps){
      if(t==="avc")return _.box(_.types.stsd, _.STSD, _.avc1(e));
      if(t==="hevc"&&e.vps)return _.box(_.types.stsd, _.STSD, _.hvc1(e))
    }
    else throw new Error("video track missing pps or sps");
    throw new Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`)
  }
  static tkhd(e){
    const t=e.id, s=(e.duration||0)*(e.timescale||0), n=e.width||0, i=e.height||0, a=Math.floor(s/(Lr+1)), o=Math.floor(s%(Lr+1));
    return _.box(_.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t>>24&255, t>>16&255,
    t>>8&255, t&255, 0, 0, 0, 0, a>>24, a>>16&255, a>>8&255, a&255, o>>24, o>>16&255, o>>8&255, o&255, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 64, 0, 0, 0, n>>8&255, n&255, 0, 0, i>>8&255, i&255, 0, 0]))
  }
  static traf(e, t){
    const s=_.sdtp(e), n=e.id, i=Math.floor(t/(Lr+1)), a=Math.floor(t%(Lr+1));
    return _.box(_.types.traf, _.box(_.types.tfhd, new Uint8Array([0, 0, 0, 0, n>>24, n>>16&255, n>>8&255, n&255])), _.box(_.types.tfdt,
    new Uint8Array([1, 0, 0, 0, i>>24, i>>16&255, i>>8&255, i&255, a>>24, a>>16&255, a>>8&255, a&255])), _.trun(e, s.length+16+20+8+16+8+8),
    s)
  }
  static trak(e){
    return e.duration=e.duration||4294967295, _.box(_.types.trak, _.tkhd(e), _.mdia(e))
  }
  static trex(e){
    const t=e.id;
    return _.box(_.types.trex, new Uint8Array([0, 0, 0, 0, t>>24, t>>16&255, t>>8&255, t&255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 0, 1]))
  }
  static trun(e, t){
    const s=e.samples||[], n=s.length, i=12+16*n, a=new Uint8Array(i);
    let o, l, c, u, d, h;
    for(t+=8+i, a.set([e.type==="video"?1:0, 0, 15, 1, n>>>24&255, n>>>16&255, n>>>8&255, n&255, t>>>24&255, t>>>16&255, t>>>8&255,
    t&255], 0), o=0;
    o<n;
    o++)l=s[o], c=l.duration, u=l.size, d=l.flags, h=l.cts, a.set([c>>>24&255, c>>>16&255, c>>>8&255, c&255, u>>>24&255, u>>>16&255,
    u>>>8&255, u&255, d.isLeading<<2|d.dependsOn, d.isDependedOn<<6|d.hasRedundancy<<4|d.paddingValue<<1|d.isNonSync, d.degradPrio&61440,
    d.degradPrio&15, h>>>24&255, h>>>16&255, h>>>8&255, h&255], 12+16*o);
    return _.box(_.types.trun, a)
  }
  static initSegment(e){
    _.types||_.init();
    const t=_.moov(e);
    return kt(_.FTYP, t)
  }
  static hvc1(e){
    const t=e.params, s=[e.vps, e.sps, e.pps], n=4, i=new Uint8Array([1, t.general_profile_space<<6|(t.general_tier_flag?32:0)|t.general_profile_idc,
    t.general_profile_compatibility_flags[0], t.general_profile_compatibility_flags[1], t.general_profile_compatibility_flags[2],
    t.general_profile_compatibility_flags[3], t.general_constraint_indicator_flags[0], t.general_constraint_indicator_flags[1],
    t.general_constraint_indicator_flags[2], t.general_constraint_indicator_flags[3], t.general_constraint_indicator_flags[4],
    t.general_constraint_indicator_flags[5], t.general_level_idc, 240|t.min_spatial_segmentation_idc>>8, 255&t.min_spatial_segmentation_idc,
    252|t.parallelismType, 252|t.chroma_format_idc, 248|t.bit_depth_luma_minus8, 248|t.bit_depth_chroma_minus8, 0, parseInt(t.frame_rate.fps),
    n-1|t.temporal_id_nested<<2|t.num_temporal_layers<<3|(t.frame_rate.fixed?64:0), s.length]);
    let a=i.length;
    for(let g=0;
    g<s.length;
    g+=1){
      a+=3;
      for(let y=0;
      y<s[g].length;
      y+=1)a+=2+s[g][y].length
    }
    const o=new Uint8Array(a);
    o.set(i, 0), a=i.length;
    const l=s.length-1;
    for(let g=0;
    g<s.length;
    g+=1){
      o.set(new Uint8Array([32+g|(g===l?128:0), 0, s[g].length]), a), a+=3;
      for(let y=0;
      y<s[g].length;
      y+=1)o.set(new Uint8Array([s[g][y].length>>8, s[g][y].length&255]), a), a+=2, o.set(s[g][y], a), a+=s[g][y].length
    }
    const c=_.box(_.types.hvcC, o), u=e.width, d=e.height, h=e.pixelRatio[0], f=e.pixelRatio[1];
    return _.box(_.types.hvc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, u>>8&255,
    u&255, d>>8&255, d&255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111,
    110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), c, _.box(_.types.btrt, new Uint8Array([0,
    28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), _.box(_.types.pasp, new Uint8Array([h>>24, h>>16&255, h>>8&255, h&255,
    f>>24, f>>16&255, f>>8&255, f&255])))
  }

}
_.types=void 0;
_.HDLR_TYPES=void 0;
_.STTS=void 0;
_.STSC=void 0;
_.STCO=void 0;
_.STSZ=void 0;
_.VMHD=void 0;
_.SMHD=void 0;
_.STSD=void 0;
_.FTYP=void 0;
_.DINF=void 0;
const Fp=9e4;
function ld(r, e, t=1, s=!1){
  const n=r*e*t;
  return s?Math.round(n):n
}
function yI(r, e, t=1, s=!1){
  return ld(r, e, 1/t, s)
}
function Ln(r, e=!1){
  return ld(r, 1e3, 1/Fp, e)
}
function vI(r, e=1){
  return ld(r, Fp, 1/e)
}
function bf(r){
  const{
    baseTime:e, timescale:t, trackId:s
  }
  =r;
  return`${e/t} (${e}/${t}) trackId: ${s}`
}
const xI=10*1e3, EI=1024, SI=1152, TI=1536;
let As=null, pl=null;
function _f(r, e, t, s){
  return{
    duration:e, size:t, cts:s, flags:{
      isLeading:0, isDependedOn:0, hasRedundancy:0, degradPrio:0, dependsOn:r?2:1, isNonSync:r?0:1
    }

  }

}
class Sa extends Ct{
  constructor(e, t, s, n){
    if(super("mp4-remuxer", n), this.observer=void 0, this.config=void 0, this.typeSupported=void 0, this.ISGenerated=!1,
    this._initPTS=null, this._initDTS=null, this.nextVideoTs=null, this.nextAudioTs=null, this.videoSampleDuration=null, this.isAudioContiguous=!1,
    this.isVideoContiguous=!1, this.videoTrackConfig=void 0, this.observer=e, this.config=t, this.typeSupported=s, this.ISGenerated=!1,
    As===null){
      const a=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);
      As=a?parseInt(a[1]):0
    }
    if(pl===null){
      const i=navigator.userAgent.match(/Safari\/(\d+)/i);
      pl=i?parseInt(i[1]):0
    }

  }
  destroy(){
    this.config=this.videoTrackConfig=this._initPTS=this._initDTS=null
  }
  resetTimeStamp(e){
    const t=this._initPTS;
    (!t||!e||e.trackId!==t.trackId||e.baseTime!==t.baseTime||e.timescale!==t.timescale)&&this.log(`Reset initPTS: ${t&&bf(t)} > ${e&&bf(e)}`),
    this._initPTS=this._initDTS=e
  }
  resetNextTimestamp(){
    this.log("reset next timestamp"), this.isVideoContiguous=!1, this.isAudioContiguous=!1
  }
  resetInitSegment(){
    this.log("ISGenerated flag reset"), this.ISGenerated=!1, this.videoTrackConfig=void 0
  }
  getVideoStartPts(e){
    let t=!1;
    const s=e[0].pts, n=e.reduce((i, a)=>{
      let o=a.pts, l=o-i;
      return l<-4294967296&&(t=!0, o=dt(o, s), l=o-i), l>0?i:o
    }, s);
    return t&&this.debug("PTS rollover detected"), n
  }
  remux(e, t, s, n, i, a, o, l){
    let c, u, d, h, f, g, y=i, x=i;
    const p=e.pid>-1, v=t.pid>-1, E=t.samples.length, T=e.samples.length>0, I=o&&E>0||E>1;
    if((!p||T)&&(!v||I)||this.ISGenerated||o){
      if(this.ISGenerated){
        var L, A, w, R;
        const Y=this.videoTrackConfig;
        (Y&&(t.width!==Y.width||t.height!==Y.height||((L=t.pixelRatio)==null?void 0:L[0])!==((A=Y.pixelRatio)==null?void 0:A[0])||((w=t.pixelRatio)==null?void 0:w[1])!==((R=Y.pixelRatio)
        ==null?void 0:R[1]))||!Y&&I||this.nextAudioTs===null&&T)&&this.resetInitSegment()
      }
      this.ISGenerated||(d=this.generateIS(e, t, i, a));
      const D=this.isVideoContiguous;
      let $=-1, V;
      if(I&&($=II(t.samples), !D&&this.config.forceKeyFrameOnDiscontinuity))if(g=!0, $>0){
        this.warn(`Dropped ${$} out of ${E} video samples due to a missing keyframe`);
        const Y=this.getVideoStartPts(t.samples);
        t.samples=t.samples.slice($), t.dropped+=$, x+=(t.samples[0].pts-Y)/t.inputTimeScale, V=x
      }
      else $===-1&&(this.warn(`No keyframe found out of ${E} video samples`), g=!1);
      if(this.ISGenerated){
        if(T&&I){
          const Y=this.getVideoStartPts(t.samples), B=(dt(e.samples[0].pts, Y)-Y)/t.inputTimeScale;
          y+=Math.max(0, B), x+=Math.max(0, -B)
        }
        if(T){
          if(e.samplerate||(this.warn("regenerate InitSegment as audio detected"), d=this.generateIS(e, t, i, a)), u=this.remuxAudio(e,
          y, this.isAudioContiguous, a, v||I||l===W.AUDIO?x:void 0), I){
            const Y=u?u.endPTS-u.startPTS:0;
            t.inputTimeScale||(this.warn("regenerate InitSegment as video detected"), d=this.generateIS(e, t, i, a)), c=this.remuxVideo(t,
            x, D, Y)
          }

        }
        else I&&(c=this.remuxVideo(t, x, D, 0));
        c&&(c.firstKeyFrame=$, c.independent=$!==-1, c.firstKeyFramePTS=V)
      }

    }
    return this.ISGenerated&&this._initPTS&&this._initDTS&&(s.samples.length&&(f=Up(s, i, this._initPTS, this._initDTS)),
    n.samples.length&&(h=$p(n, i, this._initPTS))), {
      audio:u, video:c, initSegment:d, independent:g, text:h, id3:f
    }

  }
  computeInitPts(e, t, s, n){
    const i=Math.round(s*t);
    let a=dt(e, i);
    if(a<i+t)for(this.log(`Adjusting PTS for rollover in timeline near ${(i-a)/t} ${n}`);
    a<i+t;
    )a+=8589934592;
    return a-i
  }
  generateIS(e, t, s, n){
    const i=e.samples, a=t.samples, o=this.typeSupported, l={

    }, c=this._initPTS;
    let u=!c||n, d="audio/mp4", h, f, g, y=-1;
    if(u&&(h=f=1/0), e.config&&i.length){
      switch(e.timescale=e.samplerate, e.segmentCodec){
        case"mp3":o.mpeg?(d="audio/mpeg", e.codec=""):o.mp3&&(e.codec="mp3");
        break;
        case"ac3":e.codec="ac-3";
        break
      }
      l.audio={
        id:"audio", container:d, codec:e.codec, initSegment:e.segmentCodec==="mp3"&&o.mpeg?new Uint8Array(0):_.initSegment([e]),
        metadata:{
          channelCount:e.channelCount
        }

      }, u&&(y=e.id, g=e.inputTimeScale, !c||g!==c.timescale?h=f=this.computeInitPts(i[0].pts, g, s, "audio"):u=!1)
    }
    if(t.sps&&t.pps&&a.length){
      if(t.timescale=t.inputTimeScale, l.video={
        id:"main", container:"video/mp4", codec:t.codec, initSegment:_.initSegment([t]), metadata:{
          width:t.width, height:t.height
        }

      }, u)if(y=t.id, g=t.inputTimeScale, !c||g!==c.timescale){
        const x=this.getVideoStartPts(a), p=dt(a[0].dts, x), v=this.computeInitPts(p, g, s, "video"), E=this.computeInitPts(x,
        g, s, "video");
        f=Math.min(f, v), h=Math.min(h, E)
      }
      else u=!1;
      this.videoTrackConfig={
        width:t.width, height:t.height, pixelRatio:t.pixelRatio
      }

    }
    if(Object.keys(l).length)return this.ISGenerated=!0, u?(c&&this.warn(`Timestamps at playlist time: ${n?"":"~"}${s} ${h/g} != initPTS: ${c.baseTime/c.timescale} (${c.baseTime}/${c.timescale}) trackId: ${c.trackId}`)
    , this.log(`Found initPTS at playlist time: ${s} offset: ${h/g} (${h}/${g}) trackId: ${y}`), this._initPTS={
      baseTime:h, timescale:g, trackId:y
    }, this._initDTS={
      baseTime:f, timescale:g, trackId:y
    }):h=g=void 0, {
      tracks:l, initPTS:h, timescale:g, trackId:y
    }

  }
  remuxVideo(e, t, s, n){
    const i=e.inputTimeScale, a=e.samples, o=[], l=a.length, c=this._initPTS, u=c.baseTime*i/c.timescale;
    let d=this.nextVideoTs, h=8, f=this.videoSampleDuration, g, y, x=Number.POSITIVE_INFINITY, p=Number.NEGATIVE_INFINITY,
    v=!1;
    if(!s||d===null){
      const M=u+t*i, F=a[0].pts-dt(a[0].dts, a[0].pts);
      As&&d!==null&&Math.abs(M-F-(d+u))<15e3?s=!0:d=M-F-u
    }
    const E=d+u;
    for(let M=0;
    M<l;
    M++){
      const F=a[M];
      F.pts=dt(F.pts, E), F.dts=dt(F.dts, E), F.dts<a[M>0?M-1:M].dts&&(v=!0)
    }
    v&&a.sort(function(M, F){
      const X=M.dts-F.dts, se=M.pts-F.pts;
      return X||se
    }), g=a[0].dts, y=a[a.length-1].dts;
    const T=y-g, I=T?Math.round(T/(l-1)):f||e.inputTimeScale/30;
    if(s){
      const M=g-E, F=M>I, X=M<-1;
      if((F||X)&&(F?this.warn(`${(e.segmentCodec||"").toUpperCase()}: ${Ln(M,!0)} ms (${M}dts) hole between fragments detected at ${t.toFixed(3)}`):this.warn(`${(e.segmentCodec||"").toUpperCase()}: ${Ln(-M,!0)} ms (${M}dts) overlapping between fragments detected at ${t.toFixed(3)}`)
      , !X||E>=a[0].pts||As)){
        g=E;
        const se=a[0].pts-M;
        if(F)a[0].dts=g, a[0].pts=se;
        else{
          let J=!0;
          for(let ee=0;
          ee<a.length&&!(a[ee].dts>se&&J);
          ee++){
            const we=a[ee].pts;
            if(a[ee].dts-=M, a[ee].pts-=M, ee<a.length-1){
              const Ue=a[ee+1].pts, St=a[ee].pts, Vt=Ue<=St, Xr=Ue<=we;
              J=Vt==Xr
            }

          }

        }
        this.log(`Video: Initial PTS/DTS adjusted: ${Ln(se,!0)}/${Ln(g,!0)}, delta: ${Ln(M,!0)} ms`)
      }

    }
    g=Math.max(0, g);
    let b=0, L=0, A=g;
    for(let M=0;
    M<l;
    M++){
      const F=a[M], X=F.units, se=X.length;
      let J=0;
      for(let ee=0;
      ee<se;
      ee++)J+=X[ee].data.length;
      L+=J, b+=se, F.length=J, F.dts<A?(F.dts=A, A+=I/4|0||1):A=F.dts, x=Math.min(F.pts, x), p=Math.max(F.pts, p)
    }
    y=a[l-1].dts;
    const w=L+4*b+8;
    let R;
    try{
      R=new Uint8Array(w)
    }
    catch(M){
      this.observer.emit(S.ERROR, S.ERROR, {
        type:q.MUX_ERROR, details:k.REMUX_ALLOC_ERROR, fatal:!1, error:M, bytes:w, reason:`fail allocating video mdat ${w}`
      });
      return
    }
    const D=new DataView(R.buffer);
    D.setUint32(0, w), R.set(_.types.mdat, 4);
    let $=!1, V=Number.POSITIVE_INFINITY, Y=Number.POSITIVE_INFINITY, K=Number.NEGATIVE_INFINITY, B=Number.NEGATIVE_INFINITY;
    for(let M=0;
    M<l;
    M++){
      const F=a[M], X=F.units;
      let se=0;
      for(let we=0, Ue=X.length;
      we<Ue;
      we++){
        const St=X[we], Vt=St.data, Xr=St.data.byteLength;
        D.setUint32(h, Xr), h+=4, R.set(Vt, h), h+=Xr, se+=4+Xr
      }
      let J;
      if(M<l-1)f=a[M+1].dts-F.dts, J=a[M+1].pts-F.pts;
      else{
        const we=this.config, Ue=M>0?F.dts-a[M-1].dts:I;
        if(J=M>0?F.pts-a[M-1].pts:I, we.stretchShortVideoTrack&&this.nextAudioTs!==null){
          const St=Math.floor(we.maxBufferHole*i), Vt=(n?x+n*i:this.nextAudioTs+u)-F.pts;
          Vt>St?(f=Vt-Ue, f<0?f=Ue:$=!0, this.log(`It is approximately ${Vt/90} ms to the next segment; using duration ${f/90} ms for the last video frame.`)):f=Ue
        }
        else f=Ue
      }
      const ee=Math.round(F.pts-F.dts);
      V=Math.min(V, f), K=Math.max(K, f), Y=Math.min(Y, J), B=Math.max(B, J), o.push(_f(F.key, f, se, ee))
    }
    if(o.length){
      if(As){
        if(As<70){
          const M=o[0].flags;
          M.dependsOn=2, M.isNonSync=0
        }

      }
      else if(pl&&B-Y<K-V&&I/K<.025&&o[0].cts===0){
        this.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let M=g;
        for(let F=0, X=o.length;
        F<X;
        F++){
          const se=M+o[F].duration, J=M+o[F].cts;
          if(F<X-1){
            const ee=se+o[F+1].cts;
            o[F].duration=ee-J
          }
          else o[F].duration=F?o[F-1].duration:I;
          o[F].cts=0, M=se
        }

      }

    }
    f=$||!f?I:f;
    const H=y+f;
    this.nextVideoTs=d=H-u, this.videoSampleDuration=f, this.isVideoContiguous=!0;
    const j={
      data1:_.moof(e.sequenceNumber++, g, he(e, {
        samples:o
      })), data2:R, startPTS:(x-u)/i, endPTS:(p+f-u)/i, startDTS:(g-u)/i, endDTS:d/i, type:"video", hasAudio:!1, hasVideo:!0,
      nb:o.length, dropped:e.dropped
    };
    return e.samples=[], e.dropped=0, j
  }
  getSamplesPerFrame(e){
    switch(e.segmentCodec){
      case"mp3":return SI;
      case"ac3":return TI;
      default:return EI
    }

  }
  remuxAudio(e, t, s, n, i){
    const a=e.inputTimeScale, o=e.samplerate?e.samplerate:a, l=a/o, c=this.getSamplesPerFrame(e), u=c*l, d=this._initPTS,
    h=e.segmentCodec==="mp3"&&this.typeSupported.mpeg, f=[], g=i!==void 0;
    let y=e.samples, x=h?0:8, p=this.nextAudioTs||-1;
    const v=d.baseTime*a/d.timescale, E=v+t*a;
    if(this.isAudioContiguous=s=s||y.length&&p>0&&(n&&Math.abs(E-(p+v))<9e3||Math.abs(dt(y[0].pts, E)-(p+v))<20*u), y.forEach(function(B){
      B.pts=dt(B.pts, E)
    }), !s||p<0){
      const B=y.length;
      if(y=y.filter(H=>H.pts>=0), B!==y.length&&this.warn(`Removed ${y.length-B} of ${B} samples (initPTS ${v} / ${a})`),
      !y.length)return;
      i===0?p=0:n&&!g?p=Math.max(0, E-v):p=y[0].pts-v
    }
    if(e.segmentCodec==="aac"){
      const B=this.config.maxAudioFramesDrift;
      for(let H=0, P=p+v;
      H<y.length;
      H++){
        const O=y[H], j=O.pts, M=j-P, F=Math.abs(1e3*M/a);
        if(M<=-B*u&&g)H===0&&(this.warn(`Audio frame @ ${(j/a).toFixed(3)}s overlaps marker by ${Math.round(1e3*M/a)} ms.`),
        this.nextAudioTs=p=j-v, P=j);
        else if(M>=B*u&&F<xI&&g){
          let X=Math.round(M/u);
          for(P=j-X*u;
          P<0&&X&&u;
          )X--, P+=u;
          H===0&&(this.nextAudioTs=p=P-v), this.warn(`Injecting ${X} audio frames @ ${((P-v)/a).toFixed(3)}s due to ${Math.round(1e3*M/a)} ms gap.`);
          for(let se=0;
          se<X;
          se++){
            let J=pI.getSilentFrame(e.parsedCodec||e.manifestCodec||e.codec, e.channelCount);
            J||(this.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), J=O.unit.subarray()),
            y.splice(H, 0, {
              unit:J, pts:P
            }), P+=u, H++
          }

        }
        O.pts=P, P+=u
      }

    }
    let T=null, I=null, b, L=0, A=y.length;
    for(;
    A--;
    )L+=y[A].unit.byteLength;
    for(let B=0, H=y.length;
    B<H;
    B++){
      const P=y[B], O=P.unit;
      let j=P.pts;
      if(I!==null){
        const F=f[B-1];
        F.duration=Math.round((j-I)/l)
      }
      else if(s&&e.segmentCodec==="aac"&&(j=p+v), T=j, L>0){
        L+=x;
        try{
          b=new Uint8Array(L)
        }
        catch(F){
          this.observer.emit(S.ERROR, S.ERROR, {
            type:q.MUX_ERROR, details:k.REMUX_ALLOC_ERROR, fatal:!1, error:F, bytes:L, reason:`fail allocating audio mdat ${L}`
          });
          return
        }
        h||(new DataView(b.buffer).setUint32(0, L), b.set(_.types.mdat, 4))
      }
      else return;
      b.set(O, x);
      const M=O.byteLength;
      x+=M, f.push(_f(!0, c, M, 0)), I=j
    }
    const w=f.length;
    if(!w)return;
    const R=f[f.length-1];
    p=I-v, this.nextAudioTs=p+l*R.duration;
    const D=h?new Uint8Array(0):_.moof(e.sequenceNumber++, T/l, he({

    }, e, {
      samples:f
    }));
    e.samples=[];
    const $=(T-v)/a, V=this.nextAudioTs/a, K={
      data1:D, data2:b, startPTS:$, endPTS:V, startDTS:$, endDTS:V, type:"audio", hasAudio:!0, hasVideo:!1, nb:w
    };
    return this.isAudioContiguous=!0, K
  }

}
function dt(r, e){
  let t;
  if(e===null)return r;
  for(e<r?t=-8589934592:t=8589934592;
  Math.abs(r-e)>4294967296;
  )r+=t;
  return r
}
function II(r){
  for(let e=0;
  e<r.length;
  e++)if(r[e].key)return e;
  return-1
}
function Up(r, e, t, s){
  const n=r.samples.length;
  if(!n)return;
  const i=r.inputTimeScale;
  for(let o=0;
  o<n;
  o++){
    const l=r.samples[o];
    l.pts=dt(l.pts-t.baseTime*i/t.timescale, e*i)/i, l.dts=dt(l.dts-s.baseTime*i/s.timescale, e*i)/i
  }
  const a=r.samples;
  return r.samples=[], {
    samples:a
  }

}
function $p(r, e, t){
  const s=r.samples.length;
  if(!s)return;
  const n=r.inputTimeScale;
  for(let a=0;
  a<s;
  a++){
    const o=r.samples[a];
    o.pts=dt(o.pts-t.baseTime*n/t.timescale, e*n)/n
  }
  r.samples.sort((a, o)=>a.pts-o.pts);
  const i=r.samples;
  return r.samples=[], {
    samples:i
  }

}
class LI extends Ct{
  constructor(e, t, s, n){
    super("passthrough-remuxer", n), this.emitInitSegment=!1, this.audioCodec=void 0, this.videoCodec=void 0, this.initData=void 0,
    this.initPTS=null, this.initTracks=void 0, this.lastEndTime=null, this.isVideoContiguous=!1
  }
  destroy(){

  }
  resetTimeStamp(e){
    this.lastEndTime=null;
    const t=this.initPTS;
    t&&e&&t.baseTime===e.baseTime&&t.timescale===e.timescale||(this.initPTS=e)
  }
  resetNextTimestamp(){
    this.isVideoContiguous=!1, this.lastEndTime=null
  }
  resetInitSegment(e, t, s, n){
    this.audioCodec=t, this.videoCodec=s, this.generateInitSegment(e, n), this.emitInitSegment=!0
  }
  generateInitSegment(e, t){
    let{
      audioCodec:s, videoCodec:n
    }
    =this;
    if(!(e!=null&&e.byteLength)){
      this.initTracks=void 0, this.initData=void 0;
      return
    }
    const{
      audio:i, video:a
    }
    =this.initData=Hg(e);
    if(t)dS(e, t);
    else{
      const l=i||a;
      l!=null&&l.encrypted&&this.warn(`Init segment with encrypted track with has no key ("${l.codec}")!`)
    }
    i&&(s=kf(i, fe.AUDIO, this)), a&&(n=kf(a, fe.VIDEO, this));
    const o={

    };
    i&&a?o.audiovideo={
      container:"video/mp4", codec:s+","+n, supplemental:a.supplemental, encrypted:a.encrypted, initSegment:e, id:"main"
    }:i?o.audio={
      container:"audio/mp4", codec:s, encrypted:i.encrypted, initSegment:e, id:"audio"
    }:a?o.video={
      container:"video/mp4", codec:n, supplemental:a.supplemental, encrypted:a.encrypted, initSegment:e, id:"main"
    }:this.warn("initSegment does not contain moov or trak boxes."), this.initTracks=o
  }
  remux(e, t, s, n, i, a){
    var o, l;
    let{
      initPTS:c, lastEndTime:u
    }
    =this;
    const d={
      audio:void 0, video:void 0, text:n, id3:s, initSegment:void 0
    };
    G(u)||(u=this.lastEndTime=i||0);
    const h=t.samples;
    if(!h.length)return d;
    const f={
      initPTS:void 0, timescale:void 0, trackId:void 0
    };
    let g=this.initData;
    if((o=g)!=null&&o.length||(this.generateInitSegment(h), g=this.initData), !((l=g)!=null&&l.length))return this.warn("Failed to generate initSegment."),
    d;
    this.emitInitSegment&&(f.tracks=this.initTracks, this.emitInitSegment=!1);
    const y=fS(h, g, this), x=g.audio?y[g.audio.id]:null, p=g.video?y[g.video.id]:null, v=Yi(p, 1/0), E=Yi(x, 1/0), T=Yi(p,
    0, !0), I=Yi(x, 0, !0);
    let b=i, L=0;
    const A=x&&(!p||!c&&E<v||c&&c.trackId===g.audio.id), w=A?x:p;
    if(w){
      const P=w.timescale, O=w.start-i*P, j=A?g.audio.id:g.video.id;
      b=w.start/P, L=A?I-E:T-v, (a||!c)&&(AI(c, b, i, L)||P!==c.timescale)&&(c&&this.warn(`Timestamps at playlist time: ${a?"":"~"}${i} ${O/P} != initPTS: ${c.baseTime/c.timescale} (${c.baseTime}/${c.timescale}) trackId: ${c.trackId}`)
      , this.log(`Found initPTS at playlist time: ${i} offset: ${b-i} (${O}/${P}) trackId: ${j}`), c=null, f.initPTS=O, f.timescale=P,
      f.trackId=j)
    }
    else this.warn(`No audio or video samples found for initPTS at playlist time: ${i}`);
    c?(f.initPTS=c.baseTime, f.timescale=c.timescale, f.trackId=c.trackId):((!f.timescale||f.trackId===void 0||f.initPTS===void 0)&&(this.warn("Could not set initPTS"),
    f.initPTS=b, f.timescale=1, f.trackId=-1), this.initPTS=c={
      baseTime:f.initPTS, timescale:f.timescale, trackId:f.trackId
    });
    const R=b-c.baseTime/c.timescale, D=R+L;
    L>0?this.lastEndTime=D:(this.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const $=!!g.audio, V=!!g.video;
    let Y="";
    $&&(Y+="audio"), V&&(Y+="video");
    const K=(g.audio?g.audio.encrypted:!1)||(g.video?g.video.encrypted:!1), B={
      data1:h, startPTS:R, startDTS:R, endPTS:D, endDTS:D, type:Y, hasAudio:$, hasVideo:V, nb:1, dropped:0, encrypted:K
    };
    d.audio=$&&!V?B:void 0, d.video=V?B:void 0;
    const H=p==null?void 0:p.sampleCount;
    if(H){
      const P=p.keyFrameIndex, O=P!==-1;
      B.nb=H, B.dropped=P===0||this.isVideoContiguous?0:O?P:H, B.independent=O, B.firstKeyFrame=P, O&&p.keyFrameStart&&(B.firstKeyFramePTS=(p.keyFrameStart-c.baseTime)/c.timescale),
      this.isVideoContiguous||(d.independent=O), this.isVideoContiguous||(this.isVideoContiguous=O), B.dropped&&this.warn(`fmp4 does not start with IDR: firstIDR ${P}/${H} dropped: ${B.dropped} start: ${B.firstKeyFramePTS||"NA"}`)

    }
    return d.initSegment=f, d.id3=Up(s, i, c, c), n.samples.length&&(d.text=$p(n, i, c)), d
  }

}
function Yi(r, e, t=!1){
  return(r==null?void 0:r.start)!==void 0?(r.start+(t?r.duration:0))/r.timescale:e
}
function AI(r, e, t, s){
  if(r===null)return!0;
  const n=Math.max(s, 1), i=e-r.baseTime/r.timescale;
  return Math.abs(i-t)>n
}
function kf(r, e, t){
  const s=r.codec;
  return s&&s.length>4?s:e===fe.AUDIO?s==="ec-3"||s==="ac-3"||s==="alac"?s:s==="fLaC"||s==="Opus"?Za(s, !1):(t.warn(`Unhandled audio codec "${s}" in mp4 MAP`),
  s||"mp4a"):(t.warn(`Unhandled video codec "${s}" in mp4 MAP`), s||"avc1")
}
let ur;
try{
  ur=self.performance.now.bind(self.performance)
}
catch{
  ur=Date.now
}
const Ta=[{
  demux:uI, remux:LI
}, {
  demux:_r, remux:Sa
}, {
  demux:aI, remux:Sa
}, {
  demux:lI, remux:Sa
}];
Ta.splice(2, 0, {
  demux:oI, remux:Sa
});
class Cf{
  constructor(e, t, s, n, i, a){
    this.asyncResult=!1, this.logger=void 0, this.observer=void 0, this.typeSupported=void 0, this.config=void 0, this.id=void 0,
    this.demuxer=void 0, this.remuxer=void 0, this.decrypter=void 0, this.probe=void 0, this.decryptionPromise=null, this.transmuxConfig=void 0,
    this.currentTransmuxState=void 0, this.observer=e, this.typeSupported=t, this.config=s, this.id=i, this.logger=a
  }
  configure(e){
    this.transmuxConfig=e, this.decrypter&&this.decrypter.reset()
  }
  push(e, t, s, n){
    const i=s.transmuxing;
    i.executeStart=ur();
    let a=new Uint8Array(e);
    const{
      currentTransmuxState:o, transmuxConfig:l
    }
    =this;
    n&&(this.currentTransmuxState=n);
    const{
      contiguous:c, discontinuity:u, trackSwitch:d, accurateTimeOffset:h, timeOffset:f, initSegmentChange:g
    }
    =n||o, {
      audioCodec:y, videoCodec:x, defaultInitPts:p, duration:v, initSegmentData:E
    }
    =l, T=RI(a, t);
    if(T&&qs(T.method)){
      const A=this.getDecrypter(), w=Ju(T.method);
      if(A.isSync()){
        let R=A.softwareDecrypt(a, T.key.buffer, T.iv.buffer, w);
        if(s.part>-1){
          const $=A.flush();
          R=$&&$.buffer
        }
        if(!R)return i.executeEnd=ur(), yl(s);
        a=new Uint8Array(R)
      }
      else return this.asyncResult=!0, this.decryptionPromise=A.webCryptoDecrypt(a, T.key.buffer, T.iv.buffer, w).then(R=>{
        const D=this.push(R, null, s);
        return this.decryptionPromise=null, D
      }), this.decryptionPromise
    }
    const I=this.needsProbing(u, d);
    if(I){
      const A=this.configureTransmuxer(a);
      if(A)return this.logger.warn(`[transmuxer] ${A.message}`), this.observer.emit(S.ERROR, S.ERROR, {
        type:q.MEDIA_ERROR, details:k.FRAG_PARSING_ERROR, fatal:!1, error:A, reason:A.message
      }), i.executeEnd=ur(), yl(s)
    }
    (u||d||g||I)&&this.resetInitSegment(E, y, x, v, t), (u||g||I)&&this.resetInitialTimestamp(p), c||this.resetContiguity();
    const b=this.transmux(a, T, f, h, s);
    this.asyncResult=di(b);
    const L=this.currentTransmuxState;
    return L.contiguous=!0, L.discontinuity=!1, L.trackSwitch=!1, i.executeEnd=ur(), b
  }
  flush(e){
    const t=e.transmuxing;
    t.executeStart=ur();
    const{
      decrypter:s, currentTransmuxState:n, decryptionPromise:i
    }
    =this;
    if(i)return this.asyncResult=!0, i.then(()=>this.flush(e));
    const a=[], {
      timeOffset:o
    }
    =n;
    if(s){
      const d=s.flush();
      d&&a.push(this.push(d.buffer, null, e))
    }
    const{
      demuxer:l, remuxer:c
    }
    =this;
    if(!l||!c){
      t.executeEnd=ur();
      const d=[yl(e)];
      return this.asyncResult?Promise.resolve(d):d
    }
    const u=l.flush(o);
    return di(u)?(this.asyncResult=!0, u.then(d=>(this.flushRemux(a, d, e), a))):(this.flushRemux(a, u, e), this.asyncResult?Promise.resolve(a):a)
  }
  flushRemux(e, t, s){
    const{
      audioTrack:n, videoTrack:i, id3Track:a, textTrack:o
    }
    =t, {
      accurateTimeOffset:l, timeOffset:c
    }
    =this.currentTransmuxState;
    this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${s.sn}${s.part>-1?" part: "+s.part:""} of ${this.id===W.MAIN?"level":"track"} ${s.level}`);
    const u=this.remuxer.remux(n, i, a, o, c, l, !0, this.id);
    e.push({
      remuxResult:u, chunkMeta:s
    }), s.transmuxing.executeEnd=ur()
  }
  resetInitialTimestamp(e){
    const{
      demuxer:t, remuxer:s
    }
    =this;
    !t||!s||(t.resetTimeStamp(e), s.resetTimeStamp(e))
  }
  resetContiguity(){
    const{
      demuxer:e, remuxer:t
    }
    =this;
    !e||!t||(e.resetContiguity(), t.resetNextTimestamp())
  }
  resetInitSegment(e, t, s, n, i){
    const{
      demuxer:a, remuxer:o
    }
    =this;
    !a||!o||(a.resetInitSegment(e, t, s, n), o.resetInitSegment(e, t, s, i))
  }
  destroy(){
    this.demuxer&&(this.demuxer.destroy(), this.demuxer=void 0), this.remuxer&&(this.remuxer.destroy(), this.remuxer=void 0)
  }
  transmux(e, t, s, n, i){
    let a;
    return t&&t.method==="SAMPLE-AES"?a=this.transmuxSampleAes(e, t, s, n, i):a=this.transmuxUnencrypted(e, s, n, i), a
  }
  transmuxUnencrypted(e, t, s, n){
    const{
      audioTrack:i, videoTrack:a, id3Track:o, textTrack:l
    }
    =this.demuxer.demux(e, t, !1, !this.config.progressive);
    return{
      remuxResult:this.remuxer.remux(i, a, o, l, t, s, !1, this.id), chunkMeta:n
    }

  }
  transmuxSampleAes(e, t, s, n, i){
    return this.demuxer.demuxSampleAes(e, t, s).then(a=>({
      remuxResult:this.remuxer.remux(a.audioTrack, a.videoTrack, a.id3Track, a.textTrack, s, n, !1, this.id), chunkMeta:i
    }))
  }
  configureTransmuxer(e){
    const{
      config:t, observer:s, typeSupported:n
    }
    =this;
    let i;
    for(let d=0, h=Ta.length;
    d<h;
    d++){
      var a;
      if((a=Ta[d].demux)!=null&&a.probe(e, this.logger)){
        i=Ta[d];
        break
      }

    }
    if(!i)return new Error("Failed to find demuxer by probing fragment data");
    const o=this.demuxer, l=this.remuxer, c=i.remux, u=i.demux;
    (!l||!(l instanceof c))&&(this.remuxer=new c(s, t, n, this.logger)), (!o||!(o instanceof u))&&(this.demuxer=new u(s, t,
    n, this.logger), this.probe=u.probe)
  }
  needsProbing(e, t){
    return!this.demuxer||!this.remuxer||e||t
  }
  getDecrypter(){
    let e=this.decrypter;
    return e||(e=this.decrypter=new Xu(this.config)), e
  }

}
function RI(r, e){
  let t=null;
  return r.byteLength>0&&(e==null?void 0:e.key)!=null&&e.iv!==null&&e.method!=null&&(t=e), t
}
const yl=r=>({
  remuxResult:{

  }, chunkMeta:r
});
function di(r){
  return"then"in r&&r.then instanceof Function
}
class wI{
  constructor(e, t, s, n, i){
    this.audioCodec=void 0, this.videoCodec=void 0, this.initSegmentData=void 0, this.duration=void 0, this.defaultInitPts=void 0,
    this.audioCodec=e, this.videoCodec=t, this.initSegmentData=s, this.duration=n, this.defaultInitPts=i||null
  }

}
class bI{
  constructor(e, t, s, n, i, a){
    this.discontinuity=void 0, this.contiguous=void 0, this.accurateTimeOffset=void 0, this.trackSwitch=void 0, this.timeOffset=void 0,
    this.initSegmentChange=void 0, this.discontinuity=e, this.contiguous=t, this.accurateTimeOffset=s, this.trackSwitch=n,
    this.timeOffset=i, this.initSegmentChange=a
  }

}
let Df=0;
class Bp{
  constructor(e, t, s, n){
    this.error=null, this.hls=void 0, this.id=void 0, this.instanceNo=Df++, this.observer=void 0, this.frag=null, this.part=null,
    this.useWorker=void 0, this.workerContext=null, this.transmuxer=null, this.onTransmuxComplete=void 0, this.onFlush=void 0,
    this.onWorkerMessage=l=>{
      const c=l.data, u=this.hls;
      if(!(!u||!(c!=null&&c.event)||c.instanceNo!==this.instanceNo))switch(c.event){
        case"init":{
          var d;
          const h=(d=this.workerContext)==null?void 0:d.objectURL;
          h&&self.URL.revokeObjectURL(h);
          break
        }
        case"transmuxComplete":{
          this.handleTransmuxComplete(c.data);
          break
        }
        case"flush":{
          this.onFlush(c.data);
          break
        }
        case"workerLog":{
          u.logger[c.data.logType]&&u.logger[c.data.logType](c.data.message);
          break
        }
        default:{
          c.data=c.data||{

          }, c.data.frag=this.frag, c.data.part=this.part, c.data.id=this.id, u.trigger(c.event, c.data);
          break
        }

      }

    }, this.onWorkerError=l=>{
      if(!this.hls)return;
      const c=new Error(`${l.message}  (${l.filename}:${l.lineno})`);
      this.hls.config.enableWorker=!1, this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`), this.hls.trigger(S.ERROR,
      {
        type:q.OTHER_ERROR, details:k.INTERNAL_EXCEPTION, fatal:!1, event:"demuxerWorker", error:c
      })
    };
    const i=e.config;
    this.hls=e, this.id=t, this.useWorker=!!i.enableWorker, this.onTransmuxComplete=s, this.onFlush=n;
    const a=(l, c)=>{
      c=c||{

      }, c.frag=this.frag||void 0, l===S.ERROR&&(c=c, c.parent=this.id, c.part=this.part, this.error=c.error), this.hls.trigger(l,
      c)
    };
    this.observer=new rd, this.observer.on(S.FRAG_DECRYPTED, a), this.observer.on(S.ERROR, a);
    const o=Wh(i.preferManagedMediaSource);
    if(this.useWorker&&typeof Worker<"u"){
      const l=this.hls.logger;
      if(i.workerPath||DT()){
        try{
          i.workerPath?(l.log(`loading Web Worker ${i.workerPath} for "${t}"`), this.workerContext=NT(i.workerPath)):(l.log(`injecting Web Worker for "${t}"`),
          this.workerContext=PT());
          const{
            worker:u
          }
          =this.workerContext;
          u.addEventListener("message", this.onWorkerMessage), u.addEventListener("error", this.onWorkerError), u.postMessage({
            instanceNo:this.instanceNo, cmd:"init", typeSupported:o, id:t, config:me(i)
          })
        }
        catch(u){
          l.warn(`Error setting up "${t}" Web Worker, fallback to inline`, u), this.terminateWorker(), this.error=null, this.transmuxer=new Cf(this.observer,
          o, i, "", t, e.logger)
        }
        return
      }

    }
    this.transmuxer=new Cf(this.observer, o, i, "", t, e.logger)
  }
  reset(){
    if(this.frag=null, this.part=null, this.workerContext){
      const e=this.instanceNo;
      this.instanceNo=Df++;
      const t=this.hls.config, s=Wh(t.preferManagedMediaSource);
      this.workerContext.worker.postMessage({
        instanceNo:this.instanceNo, cmd:"reset", resetNo:e, typeSupported:s, id:this.id, config:me(t)
      })
    }

  }
  terminateWorker(){
    if(this.workerContext){
      const{
        worker:e
      }
      =this.workerContext;
      this.workerContext=null, e.removeEventListener("message", this.onWorkerMessage), e.removeEventListener("error", this.onWorkerError),
      OT(this.hls.config.workerPath)
    }

  }
  destroy(){
    if(this.workerContext)this.terminateWorker(), this.onWorkerMessage=this.onWorkerError=null;
    else{
      const t=this.transmuxer;
      t&&(t.destroy(), this.transmuxer=null)
    }
    const e=this.observer;
    e&&e.removeAllListeners(), this.frag=null, this.part=null, this.observer=null, this.hls=null
  }
  push(e, t, s, n, i, a, o, l, c, u){
    var d, h;
    c.transmuxing.start=self.performance.now();
    const{
      instanceNo:f, transmuxer:g
    }
    =this, y=a?a.start:i.start, x=i.decryptdata, p=this.frag, v=!(p&&i.cc===p.cc), E=!(p&&c.level===p.level), T=p?c.sn-p.sn:-1,
    I=this.part?c.part-this.part.index:-1, b=T===0&&c.id>1&&c.id===(p==null?void 0:p.stats.chunkCount), L=!E&&(T===1||T===0&&(I===1||b&&I<=0)),
    A=self.performance.now();
    (E||T||i.stats.parsing.start===0)&&(i.stats.parsing.start=A), a&&(I||!L)&&(a.stats.parsing.start=A);
    const w=!(p&&((d=i.initSegment)==null?void 0:d.url)===((h=p.initSegment)==null?void 0:h.url)), R=new bI(v, L, l, E, y,
    w);
    if(!L||v||w){
      this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${i.type} sn: ${c.sn}${c.part>-1?" part: "+c.part:""} ${this.id===W.MAIN?"level":"track"}: ${c.level} id: ${c.id}
        discontinuity: ${v}
        trackSwitch: ${E}
        contiguous: ${L}
        accurateTimeOffset: ${l}
        timeOffset: ${y}
        initSegmentChange: ${w}`);
      const D=new wI(s, n, t, o, u);
      this.configureTransmuxer(D)
    }
    if(this.frag=i, this.part=a, this.workerContext)this.workerContext.worker.postMessage({
      instanceNo:f, cmd:"demux", data:e, decryptdata:x, chunkMeta:c, state:R
    }, e instanceof ArrayBuffer?[e]:[]);
    else if(g){
      const D=g.push(e, x, c, R);
      di(D)?D.then($=>{
        this.handleTransmuxComplete($)
      }).catch($=>{
        this.transmuxerError($, c, "transmuxer-interface push error")
      }):this.handleTransmuxComplete(D)
    }

  }
  flush(e){
    e.transmuxing.start=self.performance.now();
    const{
      instanceNo:t, transmuxer:s
    }
    =this;
    if(this.workerContext)this.workerContext.worker.postMessage({
      instanceNo:t, cmd:"flush", chunkMeta:e
    });
    else if(s){
      const n=s.flush(e);
      di(n)?n.then(i=>{
        this.handleFlushResult(i, e)
      }).catch(i=>{
        this.transmuxerError(i, e, "transmuxer-interface flush error")
      }):this.handleFlushResult(n, e)
    }

  }
  transmuxerError(e, t, s){
    this.hls&&(this.error=e, this.hls.trigger(S.ERROR, {
      type:q.MEDIA_ERROR, details:k.FRAG_PARSING_ERROR, chunkMeta:t, frag:this.frag||void 0, part:this.part||void 0, fatal:!1,
      error:e, err:e, reason:s
    }))
  }
  handleFlushResult(e, t){
    e.forEach(s=>{
      this.handleTransmuxComplete(s)
    }), this.onFlush(t)
  }
  configureTransmuxer(e){
    const{
      instanceNo:t, transmuxer:s
    }
    =this;
    this.workerContext?this.workerContext.worker.postMessage({
      instanceNo:t, cmd:"configure", config:e
    }):s&&s.configure(e)
  }
  handleTransmuxComplete(e){
    e.chunkMeta.transmuxing.end=self.performance.now(), this.onTransmuxComplete(e)
  }

}
const Pf=100;
class _I extends td{
  constructor(e, t, s){
    super(e, t, s, "audio-stream-controller", W.AUDIO), this.mainAnchor=null, this.mainFragLoading=null, this.audioOnly=!1,
    this.bufferedTrack=null, this.switchingTrack=null, this.trackId=-1, this.waitingData=null, this.mainDetails=null, this.flushing=!1,
    this.bufferFlushed=!1, this.cachedTrackLoadedData=null, this.registerListeners()
  }
  onHandlerDestroying(){
    this.unregisterListeners(), super.onHandlerDestroying(), this.resetItem()
  }
  resetItem(){
    this.mainDetails=this.mainAnchor=this.mainFragLoading=this.bufferedTrack=this.switchingTrack=this.waitingData=this.cachedTrackLoadedData=null
  }
  registerListeners(){
    super.registerListeners();
    const{
      hls:e
    }
    =this;
    e.on(S.LEVEL_LOADED, this.onLevelLoaded, this), e.on(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(S.AUDIO_TRACK_SWITCHING,
    this.onAudioTrackSwitching, this), e.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(S.BUFFER_RESET, this.onBufferReset,
    this), e.on(S.BUFFER_CREATED, this.onBufferCreated, this), e.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(S.BUFFER_FLUSHED,
    this.onBufferFlushed, this), e.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(S.FRAG_LOADING, this.onFragLoading,
    this), e.on(S.FRAG_BUFFERED, this.onFragBuffered, this)
  }
  unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e&&(super.unregisterListeners(), e.off(S.LEVEL_LOADED, this.onLevelLoaded, this), e.off(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated,
    this), e.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded,
    this), e.off(S.BUFFER_RESET, this.onBufferReset, this), e.off(S.BUFFER_CREATED, this.onBufferCreated, this), e.off(S.BUFFER_FLUSHING,
    this.onBufferFlushing, this), e.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(S.INIT_PTS_FOUND, this.onInitPtsFound,
    this), e.off(S.FRAG_LOADING, this.onFragLoading, this), e.off(S.FRAG_BUFFERED, this.onFragBuffered, this))
  }
  onInitPtsFound(e, {
    frag:t, id:s, initPTS:n, timescale:i, trackId:a
  }){
    if(s===W.MAIN){
      const o=t.cc, l=this.fragCurrent;
      if(this.initPTS[o]={
        baseTime:n, timescale:i, trackId:a
      }, this.log(`InitPTS for cc: ${o} found from main: ${n/i} (${n}/${i}) trackId: ${a}`), this.mainAnchor=t, this.state===N.WAITING_INIT_PTS){
        const c=this.waitingData;
        (!c&&!this.loadingParts||c&&c.frag.cc!==o)&&this.syncWithAnchor(t, c==null?void 0:c.frag)
      }
      else!this.hls.hasEnoughToStart&&l&&l.cc!==o?(l.abortRequests(), this.syncWithAnchor(t, l)):this.state===N.IDLE&&this.tick()
    }

  }
  getLoadPosition(){
    return!this.startFragRequested&&this.nextLoadPosition>=0?this.nextLoadPosition:super.getLoadPosition()
  }
  syncWithAnchor(e, t){
    var s;
    const n=((s=this.mainFragLoading)==null?void 0:s.frag)||null;
    if(t&&(n==null?void 0:n.cc)===t.cc)return;
    const i=(n||e).cc, a=this.getLevelDetails(), o=this.getLoadPosition(), l=rp(a, i, o);
    l&&(this.log(`Syncing with main frag at ${l.start} cc ${l.cc}`), this.startFragRequested=!1, this.nextLoadPosition=l.start,
    this.resetLoadingState(), this.state===N.IDLE&&this.doTickIdle())
  }
  startLoad(e, t){
    if(!this.levels){
      this.startPosition=e, this.state=N.STOPPED;
      return
    }
    const s=this.lastCurrentTime;
    this.stopLoad(), this.setInterval(Pf), s>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`),
    e=s, this.state=N.IDLE):this.state=N.WAITING_TRACK, this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset,
    this.startPosition=t?-1:e, this.tick()
  }
  doTick(){
    switch(this.state){
      case N.IDLE:this.doTickIdle();
      break;
      case N.WAITING_TRACK:{
        const{
          levels:e, trackId:t
        }
        =this, s=e==null?void 0:e[t], n=s==null?void 0:s.details;
        if(n&&!this.waitForLive(s)){
          if(this.waitForCdnTuneIn(n))break;
          this.state=N.WAITING_INIT_PTS
        }
        break
      }
      case N.FRAG_LOADING_WAITING_RETRY:{
        this.checkRetryDate();
        break
      }
      case N.WAITING_INIT_PTS:{
        const e=this.waitingData;
        if(e){
          const{
            frag:t, part:s, cache:n, complete:i
          }
          =e, a=this.mainAnchor;
          if(this.initPTS[t.cc]!==void 0){
            this.waitingData=null, this.state=N.FRAG_LOADING;
            const o=n.flush().buffer, l={
              frag:t, part:s, payload:o, networkDetails:null
            };
            this._handleFragmentLoadProgress(l), i&&super._handleFragmentLoadComplete(l)
          }
          else a&&a.cc!==e.frag.cc&&this.syncWithAnchor(a, e.frag)
        }
        else this.state=N.IDLE
      }

    }
    this.onTickEnd()
  }
  resetLoadingState(){
    const e=this.waitingData;
    e&&(this.fragmentTracker.removeFragment(e.frag), this.waitingData=null), super.resetLoadingState()
  }
  onTickEnd(){
    const{
      media:e
    }
    =this;
    e!=null&&e.readyState&&(this.lastCurrentTime=e.currentTime)
  }
  doTickIdle(){
    var e;
    const{
      hls:t, levels:s, media:n, trackId:i
    }
    =this, a=t.config;
    if(!this.buffering||!n&&!this.primaryPrefetch&&(this.startFragRequested||!a.startFragPrefetch)||!(s!=null&&s[i]))return;
    const o=s[i], l=o.details;
    if(!l||this.waitForLive(o)||this.waitForCdnTuneIn(l)){
      this.state=N.WAITING_TRACK, this.startFragRequested=!1;
      return
    }
    const c=this.mediaBuffer?this.mediaBuffer:this.media;
    this.bufferFlushed&&c&&(this.bufferFlushed=!1, this.afterBufferFlushed(c, fe.AUDIO, W.AUDIO));
    const u=this.getFwdBufferInfo(c, W.AUDIO);
    if(u===null)return;
    if(!this.switchingTrack&&this._streamEnded(u, l)){
      t.trigger(S.BUFFER_EOS, {
        type:"audio"
      }), this.state=N.ENDED;
      return
    }
    const d=u.len, h=t.maxBufferLength, f=l.fragments, g=f[0].start, y=this.getLoadPosition(), x=this.flushing?y:u.end;
    if(this.switchingTrack&&n){
      const E=y;
      l.PTSKnown&&E<g&&(u.end>g||u.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),
      n.currentTime=g+.05)
    }
    if(d>=h&&!this.switchingTrack&&x<f[f.length-1].start)return;
    let p=this.getNextFragment(x, l);
    if(p&&this.isLoopLoading(p, x)&&(p=this.getNextFragmentLoopLoading(p, l, u, W.MAIN, h)), !p){
      this.bufferFlushed=!0;
      return
    }
    let v=((e=this.mainFragLoading)==null?void 0:e.frag)||null;
    if(!this.audioOnly&&this.startFragRequested&&v&&_e(p)&&!p.endList&&(!l.live||!this.loadingParts&&x<this.hls.liveSyncPosition)&&(this.fragmentTracker.getState(v)===Pe.OK&&(this.mainFragLoading=v=null)
    , v&&_e(v))){
      if(p.start>v.end){
        const T=this.fragmentTracker.getFragAtPos(x, W.MAIN);
        T&&T.end>v.end&&(v=T, this.mainFragLoading={
          frag:T, targetBufferTime:null
        })
      }
      if(p.start>v.end)return
    }
    this.loadFragment(p, o, x)
  }
  onMediaDetaching(e, t){
    this.bufferFlushed=this.flushing=!1, super.onMediaDetaching(e, t)
  }
  onAudioTracksUpdated(e, {
    audioTracks:t
  }){
    this.resetTransmuxer(), this.levels=t.map(s=>new li(s))
  }
  onAudioTrackSwitching(e, t){
    const s=!!t.url;
    this.trackId=t.id;
    const{
      fragCurrent:n
    }
    =this;
    n&&(n.abortRequests(), this.removeUnbufferedFrags(n.start)), this.resetLoadingState(), s?(this.switchingTrack=t, this.flushAudioIfNeeded(t),
    this.state!==N.STOPPED&&(this.setInterval(Pf), this.state=N.IDLE, this.tick())):(this.resetTransmuxer(), this.switchingTrack=null,
    this.bufferedTrack=t, this.clearInterval())
  }
  onManifestLoading(){
    super.onManifestLoading(), this.bufferFlushed=this.flushing=this.audioOnly=!1, this.resetItem(), this.trackId=-1
  }
  onLevelLoaded(e, t){
    this.mainDetails=t.details;
    const s=this.cachedTrackLoadedData;
    s&&(this.cachedTrackLoadedData=null, this.onAudioTrackLoaded(S.AUDIO_TRACK_LOADED, s))
  }
  onAudioTrackLoaded(e, t){
    var s;
    const{
      levels:n
    }
    =this, {
      details:i, id:a, groupId:o, track:l
    }
    =t;
    if(!n){
      this.warn(`Audio tracks reset while loading track ${a} "${l.name}" of "${o}"`);
      return
    }
    const c=this.mainDetails;
    if(!c||i.endCC>c.endCC||c.expired){
      this.cachedTrackLoadedData=t, this.state!==N.STOPPED&&(this.state=N.WAITING_TRACK);
      return
    }
    this.cachedTrackLoadedData=null, this.log(`Audio track ${a} "${l.name}" of "${o}" loaded [${i.startSN},${i.endSN}]${i.lastPartSn?`[part-${
      i.lastPartSn
    }
    -${
      i.lastPartIndex
    }]`:""},duration:${i.totalduration}`);
    const u=n[a];
    let d=0;
    if(i.live||(s=u.details)!=null&&s.live){
      if(this.checkLiveUpdate(i), i.deltaUpdateFailed)return;
      if(u.details){
        var h;
        d=this.alignPlaylists(i, u.details, (h=this.levelLastLoaded)==null?void 0:h.details)
      }
      i.alignedSliding||(Ep(i, c), i.alignedSliding||io(i, c), d=i.fragmentStart)
    }
    u.details=i, this.levelLastLoaded=u, this.startFragRequested||this.setStartPosition(c, d), this.hls.trigger(S.AUDIO_TRACK_UPDATED,
    {
      details:i, id:a, groupId:t.groupId
    }), this.state===N.WAITING_TRACK&&!this.waitForCdnTuneIn(i)&&(this.state=N.IDLE), this.tick()
  }
  _handleFragmentLoadProgress(e){
    var t;
    const s=e.frag, {
      part:n, payload:i
    }
    =e, {
      config:a, trackId:o, levels:l
    }
    =this;
    if(!l){
      this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return
    }
    const c=l[o];
    if(!c){
      this.warn("Audio track is undefined on fragment load progress");
      return
    }
    const u=c.details;
    if(!u){
      this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
      return
    }
    const d=a.defaultAudioCodec||c.audioCodec||"mp4a.40.2";
    let h=this.transmuxer;
    h||(h=this.transmuxer=new Bp(this.hls, W.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
    const f=this.initPTS[s.cc], g=(t=s.initSegment)==null?void 0:t.data;
    if(f!==void 0){
      const x=n?n.index:-1, p=x!==-1, v=new Zu(s.level, s.sn, s.stats.chunkCount, i.byteLength, x, p);
      h.push(i, g, d, "", s, n, u.totalduration, !1, v, f)
    }
    else{
      this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${u.startSN} ,${u.endSN}],track ${o}`);
      const{
        cache:y
      }
      =this.waitingData=this.waitingData||{
        frag:s, part:n, cache:new Sp, complete:!1
      };
      y.push(new Uint8Array(i)), this.state!==N.STOPPED&&(this.state=N.WAITING_INIT_PTS)
    }

  }
  _handleFragmentLoadComplete(e){
    if(this.waitingData){
      this.waitingData.complete=!0;
      return
    }
    super._handleFragmentLoadComplete(e)
  }
  onBufferReset(){
    this.mediaBuffer=null
  }
  onBufferCreated(e, t){
    this.bufferFlushed=this.flushing=!1;
    const s=t.tracks.audio;
    s&&(this.mediaBuffer=s.buffer||null)
  }
  onFragLoading(e, t){
    !this.audioOnly&&t.frag.type===W.MAIN&&_e(t.frag)&&(this.mainFragLoading=t, this.state===N.IDLE&&this.tick())
  }
  onFragBuffered(e, t){
    const{
      frag:s, part:n
    }
    =t;
    if(s.type!==W.AUDIO){
      !this.audioOnly&&s.type===W.MAIN&&!s.elementaryStreams.video&&!s.elementaryStreams.audiovideo&&(this.audioOnly=!0, this.mainFragLoading=null);
      return
    }
    if(this.fragContextChanged(s)){
      this.warn(`Fragment ${s.sn}${n?" p: "+n.index:""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`)
      ;
      return
    }
    if(_e(s)){
      this.fragPrevious=s;
      const i=this.switchingTrack;
      i&&(this.bufferedTrack=i, this.switchingTrack=null, this.hls.trigger(S.AUDIO_TRACK_SWITCHED, ce({

      }, i)))
    }
    this.fragBufferedComplete(s, n), this.media&&this.tick()
  }
  onError(e, t){
    var s;
    if(t.fatal){
      this.state=N.ERROR;
      return
    }
    switch(t.details){
      case k.FRAG_GAP:case k.FRAG_PARSING_ERROR:case k.FRAG_DECRYPT_ERROR:case k.FRAG_LOAD_ERROR:case k.FRAG_LOAD_TIMEOUT:case k.KEY_LOAD_ERROR:case k.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(W.AUDIO,
      t);
      break;
      case k.AUDIO_TRACK_LOAD_ERROR:case k.AUDIO_TRACK_LOAD_TIMEOUT:case k.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===N.WAITING_TRACK&&((s=t.context)==null?void 0:s.type)===ne.AUDIO_TRACK&&(this.state=N.IDLE)
      ;
      break;
      case k.BUFFER_ADD_CODEC_ERROR:case k.BUFFER_APPEND_ERROR:if(t.parent!=="audio")return;
      this.reduceLengthAndFlushBuffer(t)||this.resetLoadingState();
      break;
      case k.BUFFER_FULL_ERROR:if(t.parent!=="audio")return;
      this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
      break;
      case k.INTERNAL_EXCEPTION:this.recoverWorkerError(t);
      break
    }

  }
  onBufferFlushing(e, {
    type:t
  }){
    t!==fe.VIDEO&&(this.flushing=!0)
  }
  onBufferFlushed(e, {
    type:t
  }){
    if(t!==fe.VIDEO){
      this.flushing=!1, this.bufferFlushed=!0, this.state===N.ENDED&&(this.state=N.IDLE);
      const s=this.mediaBuffer||this.media;
      s&&(this.afterBufferFlushed(s, t, W.AUDIO), this.tick())
    }

  }
  _handleTransmuxComplete(e){
    var t;
    const s="audio", {
      hls:n
    }
    =this, {
      remuxResult:i, chunkMeta:a
    }
    =e, o=this.getCurrentContext(a);
    if(!o){
      this.resetWhenMissingContext(a);
      return
    }
    const{
      frag:l, part:c, level:u
    }
    =o, {
      details:d
    }
    =u, {
      audio:h, text:f, id3:g, initSegment:y
    }
    =i;
    if(this.fragContextChanged(l)||!d){
      this.fragmentTracker.removeFragment(l);
      return
    }
    if(this.state=N.PARSING, this.switchingTrack&&h&&this.completeAudioSwitch(this.switchingTrack), y!=null&&y.tracks){
      const x=l.initSegment||l;
      if(this.unhandledEncryptionError(y, l))return;
      this._bufferInitSegment(u, y.tracks, x, a), n.trigger(S.FRAG_PARSING_INIT_SEGMENT, {
        frag:x, id:s, tracks:y.tracks
      })
    }
    if(h){
      const{
        startPTS:x, endPTS:p, startDTS:v, endDTS:E
      }
      =h;
      c&&(c.elementaryStreams[fe.AUDIO]={
        startPTS:x, endPTS:p, startDTS:v, endDTS:E
      }), l.setElementaryStreamInfo(fe.AUDIO, x, p, v, E), this.bufferFragmentData(h, l, c, a)
    }
    if(g!=null&&(t=g.samples)!=null&&t.length){
      const x=he({
        id:s, frag:l, details:d
      }, g);
      n.trigger(S.FRAG_PARSING_METADATA, x)
    }
    if(f){
      const x=he({
        id:s, frag:l, details:d
      }, f);
      n.trigger(S.FRAG_PARSING_USERDATA, x)
    }

  }
  _bufferInitSegment(e, t, s, n){
    if(this.state!==N.PARSING||(t.video&&delete t.video, t.audiovideo&&delete t.audiovideo, !t.audio))return;
    const i=t.audio;
    i.id=W.AUDIO;
    const a=e.audioCodec;
    this.log(`Init audio buffer, container:${i.container}, codecs[level/parsed]=[${a}/${i.codec}]`), a&&a.split(",").length===1&&(i.levelCodec=a),
    this.hls.trigger(S.BUFFER_CODECS, t);
    const o=i.initSegment;
    if(o!=null&&o.byteLength){
      const l={
        type:"audio", frag:s, part:null, chunkMeta:n, parent:s.type, data:o
      };
      this.hls.trigger(S.BUFFER_APPENDING, l)
    }
    this.tickImmediate()
  }
  loadFragment(e, t, s){
    const n=this.fragmentTracker.getState(e);
    if(this.switchingTrack||n===Pe.NOT_LOADED||n===Pe.PARTIAL){
      var i;
      if(!_e(e))this._loadInitSegment(e, t);
      else if((i=t.details)!=null&&i.live&&!this.initPTS[e.cc]){
        this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`),
        this.state=N.WAITING_INIT_PTS;
        const a=this.mainDetails;
        a&&a.fragmentStart!==t.details.fragmentStart&&io(t.details, a)
      }
      else super.loadFragment(e, t, s)
    }
    else this.clearTrackerIfNeeded(e)
  }
  flushAudioIfNeeded(e){
    if(this.media&&this.bufferedTrack){
      const{
        name:t, lang:s, assocLang:n, characteristics:i, audioCodec:a, channels:o
      }
      =this.bufferedTrack;
      us({
        name:t, lang:s, assocLang:n, characteristics:i, audioCodec:a, channels:o
      }, e, ns)||(eo(e.url, this.hls)?(this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY,
      "audio"), this.bufferedTrack=null):this.bufferedTrack=e)
    }

  }
  completeAudioSwitch(e){
    const{
      hls:t
    }
    =this;
    this.flushAudioIfNeeded(e), this.bufferedTrack=e, this.switchingTrack=null, t.trigger(S.AUDIO_TRACK_SWITCHED, ce({

    }, e))
  }

}
class cd extends Ct{
  constructor(e, t){
    super(t, e.logger), this.hls=void 0, this.canLoad=!1, this.timer=-1, this.hls=e
  }
  destroy(){
    this.clearTimer(), this.hls=this.log=this.warn=null
  }
  clearTimer(){
    this.timer!==-1&&(self.clearTimeout(this.timer), this.timer=-1)
  }
  startLoad(){
    this.canLoad=!0, this.loadPlaylist()
  }
  stopLoad(){
    this.canLoad=!1, this.clearTimer()
  }
  switchParams(e, t, s){
    const n=t==null?void 0:t.renditionReports;
    if(n){
      let i=-1;
      for(let a=0;
      a<n.length;
      a++){
        const o=n[a];
        let l;
        try{
          l=new self.URL(o.URI, t.url).href
        }
        catch(c){
          this.warn(`Could not construct new URL for Rendition Report: ${c}`), l=o.URI||""
        }
        if(l===e){
          i=a;
          break
        }
        else l===e.substring(0, l.length)&&(i=a)
      }
      if(i!==-1){
        const a=n[i], o=parseInt(a["LAST-MSN"])||t.lastPartSn;
        let l=parseInt(a["LAST-PART"])||t.lastPartIndex;
        if(this.hls.config.lowLatencyMode){
          const u=Math.min(t.age-t.partTarget, t.targetduration);
          l>=0&&u>t.partTarget&&(l+=1)
        }
        const c=s&&zh(s);
        return new Yh(o, l>=0?l:void 0, c)
      }

    }

  }
  loadPlaylist(e){
    this.clearTimer()
  }
  loadingPlaylist(e, t){
    this.clearTimer()
  }
  shouldLoadPlaylist(e){
    return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)
  }
  getUrlWithDirectives(e, t){
    if(t)try{
      return t.addDirectives(e)
    }
    catch(s){
      this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)
    }
    return e
  }
  playlistLoaded(e, t, s){
    const{
      details:n, stats:i
    }
    =t, a=self.performance.now(), o=i.loading.first?Math.max(0, a-i.loading.first):0;
    n.advancedDateTime=Date.now()-o;
    const l=this.hls.config.timelineOffset;
    if(l!==n.appliedTimelineOffset){
      const u=Math.max(l||0, 0);
      n.appliedTimelineOffset=u, n.fragments.forEach(d=>{
        d.setStart(d.playlistOffset+u)
      })
    }
    if(n.live||s!=null&&s.live){
      const u="levelInfo"in t?t.levelInfo:t.track;
      if(n.reloaded(s), s&&n.fragments.length>0){
        ST(s, n, this);
        const v=n.playlistParsingError;
        if(v){
          this.warn(v);
          const E=this.hls;
          if(!E.config.ignorePlaylistParsingErrors){
            var c;
            const{
              networkDetails:T
            }
            =t;
            E.trigger(S.ERROR, {
              type:q.NETWORK_ERROR, details:k.LEVEL_PARSING_ERROR, fatal:!1, url:n.url, error:v, reason:v.message, level:t.level||void 0,
              parent:(c=n.fragments[0])==null?void 0:c.type, networkDetails:T, stats:i
            });
            return
          }
          n.playlistParsingError=null
        }

      }
      n.requestScheduled===-1&&(n.requestScheduled=i.loading.start);
      const d=this.hls.mainForwardBufferInfo, h=d?d.end-d.len:0, f=(n.edge-h)*1e3, g=gp(n, f);
      if(n.requestScheduled+g<a?n.requestScheduled=a:n.requestScheduled+=g, this.log(`live playlist ${e} ${n.advanced?"REFRESHED "+n.lastPartSn+"-"+n.lastPartIndex:n.updated?"UPDATED":"MISSED"}`)
      , !this.canLoad||!n.live)return;
      let y, x, p;
      if(n.canBlockReload&&n.endSN&&n.advanced){
        const v=this.hls.config.lowLatencyMode, E=n.lastPartSn, T=n.endSN, I=n.lastPartIndex, b=I!==-1, L=E===T;
        b?L?(x=T+1, p=v?0:I):(x=E, p=v?I+1:n.maxPartIndex):x=T+1;
        const A=n.age, w=A+n.ageHeader;
        let R=Math.min(w-n.partTarget, n.targetduration*1.5);
        if(R>0){
          if(w>n.targetduration*3)this.log(`Playlist last advanced ${A.toFixed(2)}s ago. Omitting segment and part directives.`),
          x=void 0, p=void 0;
          else if(s!=null&&s.tuneInGoal&&w-n.partTarget>s.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${R} with playlist age: ${n.age}`),
          R=0;
          else{
            const D=Math.floor(R/n.targetduration);
            if(x+=D, p!==void 0){
              const $=Math.round(R%n.targetduration/n.partTarget);
              p+=$
            }
            this.log(`CDN Tune-in age: ${n.ageHeader}s last advanced ${A.toFixed(2)}s goal: ${R} skip sn ${D} to part ${p}`)
          }
          n.tuneInGoal=R
        }
        if(y=this.getDeliveryDirectives(n, t.deliveryDirectives, x, p), v||!L){
          n.requestScheduled=a, this.loadingPlaylist(u, y);
          return
        }

      }
      else(n.canBlockReload||n.canSkipUntil)&&(y=this.getDeliveryDirectives(n, t.deliveryDirectives, x, p));
      y&&x!==void 0&&n.canBlockReload&&(n.requestScheduled=i.loading.first+Math.max(g-o*2, g/2)), this.scheduleLoading(u,
      y, n)
    }
    else this.clearTimer()
  }
  scheduleLoading(e, t, s){
    const n=s||e.details;
    if(!n){
      this.loadingPlaylist(e, t);
      return
    }
    const i=self.performance.now(), a=n.requestScheduled;
    if(i>=a){
      this.loadingPlaylist(e, t);
      return
    }
    const o=a-i;
    this.log(`reload live playlist ${e.name||e.bitrate+"bps"} in ${Math.round(o)} ms`), this.clearTimer(), this.timer=self.setTimeout(()=>this.loadingPlaylist(e,
    t), o)
  }
  getDeliveryDirectives(e, t, s, n){
    let i=zh(e);
    return t!=null&&t.skip&&e.deltaUpdateFailed&&(s=t.msn, n=t.part, i=xa.No), new Yh(s, n, i)
  }
  checkRetry(e){
    const t=e.details, s=to(e), n=e.errorAction, {
      action:i, retryCount:a=0, retryConfig:o
    }
    =n||{

    }, l=!!n&&!!o&&(i===Be.RetryRequest||!n.resolved&&i===Be.SendAlternateToPenaltyBox);
    if(l){
      var c;
      if(a>=o.maxNumRetry)return!1;
      if(s&&(c=e.context)!=null&&c.deliveryDirectives)this.warn(`Retrying playlist loading ${a+1}/${o.maxNumRetry} after "${t}" without delivery-directives`),
      this.loadPlaylist();
      else{
        const u=Qu(o, a);
        this.clearTimer(), this.timer=self.setTimeout(()=>this.loadPlaylist(), u), this.warn(`Retrying playlist loading ${a+1}/${o.maxNumRetry} after "${t}" in ${u}ms`)
      }
      e.levelRetry=!0, n.resolved=!0
    }
    return l
  }

}
function jp(r, e){
  if(r.length!==e.length)return!1;
  for(let t=0;
  t<r.length;
  t++)if(!hi(r[t].attrs, e[t].attrs))return!1;
  return!0
}
function hi(r, e, t){
  const s=r["STABLE-RENDITION-ID"];
  return s&&!t?s===e["STABLE-RENDITION-ID"]:!(t||["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED",
  "ASSOC-LANGUAGE"]).some(n=>r[n]!==e[n])
}
function Fc(r, e){
  return e.label.toLowerCase()===r.name.toLowerCase()&&(!e.language||e.language.toLowerCase()===(r.lang||"").toLowerCase())
}
class kI extends cd{
  constructor(e){
    super(e, "audio-track-controller"), this.tracks=[], this.groupIds=null, this.tracksInGroup=[], this.trackId=-1, this.currentTrack=null,
    this.selectDefaultTrack=!0, this.registerListeners()
  }
  registerListeners(){
    const{
      hls:e
    }
    =this;
    e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.LEVEL_LOADING,
    this.onLevelLoading, this), e.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded,
    this), e.on(S.ERROR, this.onError, this)
  }
  unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.LEVEL_LOADING,
    this.onLevelLoading, this), e.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded,
    this), e.off(S.ERROR, this.onError, this)
  }
  destroy(){
    this.unregisterListeners(), this.tracks.length=0, this.tracksInGroup.length=0, this.currentTrack=null, super.destroy()
  }
  onManifestLoading(){
    this.tracks=[], this.tracksInGroup=[], this.groupIds=null, this.currentTrack=null, this.trackId=-1, this.selectDefaultTrack=!0
  }
  onManifestParsed(e, t){
    this.tracks=t.audioTracks||[]
  }
  onAudioTrackLoaded(e, t){
    const{
      id:s, groupId:n, details:i
    }
    =t, a=this.tracksInGroup[s];
    if(!a||a.groupId!==n){
      this.warn(`Audio track with id:${s} and group:${n} not found in active group ${a==null?void 0:a.groupId}`);
      return
    }
    const o=a.details;
    a.details=t.details, this.log(`Audio track ${s} "${a.name}" lang:${a.lang} group:${n} loaded [${i.startSN}-${i.endSN}]`),
    s===this.trackId&&this.playlistLoaded(s, t, o)
  }
  onLevelLoading(e, t){
    this.switchLevel(t.level)
  }
  onLevelSwitching(e, t){
    this.switchLevel(t.level)
  }
  switchLevel(e){
    const t=this.hls.levels[e];
    if(!t)return;
    const s=t.audioGroups||null, n=this.groupIds;
    let i=this.currentTrack;
    if(!s||(n==null?void 0:n.length)!==(s==null?void 0:s.length)||s!=null&&s.some(o=>(n==null?void 0:n.indexOf(o))===-1)){
      this.groupIds=s, this.trackId=-1, this.currentTrack=null;
      const o=this.tracks.filter(h=>!s||s.indexOf(h.groupId)!==-1);
      if(o.length)this.selectDefaultTrack&&!o.some(h=>h.default)&&(this.selectDefaultTrack=!1), o.forEach((h, f)=>{
        h.id=f
      });
      else if(!i&&!this.tracksInGroup.length)return;
      this.tracksInGroup=o;
      const l=this.hls.config.audioPreference;
      if(!i&&l){
        const h=Xt(l, o, ns);
        if(h>-1)i=o[h];
        else{
          const f=Xt(l, this.tracks);
          i=this.tracks[f]
        }

      }
      let c=this.findTrackId(i);
      c===-1&&i&&(c=this.findTrackId(null));
      const u={
        audioTracks:o
      };
      this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${s==null?void 0:s.join(",")}`), this.hls.trigger(S.AUDIO_TRACKS_UPDATED,
      u);
      const d=this.trackId;
      if(c!==-1&&d===-1)this.setAudioTrack(c);
      else if(o.length&&d===-1){
        var a;
        const h=new Error(`No audio track selected for current audio group-ID(s): ${(a=this.groupIds)==null?void 0:a.join(",")} track count: ${o.length}`);
        this.warn(h.message), this.hls.trigger(S.ERROR, {
          type:q.MEDIA_ERROR, details:k.AUDIO_TRACK_LOAD_ERROR, fatal:!0, error:h
        })
      }

    }

  }
  onError(e, t){
    t.fatal||!t.context||t.context.type===ne.AUDIO_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)
  }
  get allAudioTracks(){
    return this.tracks
  }
  get audioTracks(){
    return this.tracksInGroup
  }
  get audioTrack(){
    return this.trackId
  }
  set audioTrack(e){
    this.selectDefaultTrack=!1, this.setAudioTrack(e)
  }
  setAudioOption(e){
    const t=this.hls;
    if(t.config.audioPreference=e, e){
      const s=this.allAudioTracks;
      if(this.selectDefaultTrack=!1, s.length){
        const n=this.currentTrack;
        if(n&&us(e, n, ns))return n;
        const i=Xt(e, this.tracksInGroup, ns);
        if(i>-1){
          const a=this.tracksInGroup[i];
          return this.setAudioTrack(i), a
        }
        else if(n){
          let a=t.loadLevel;
          a===-1&&(a=t.firstAutoLevel);
          const o=GS(e, t.levels, s, a, ns);
          if(o===-1)return null;
          t.nextLoadLevel=o
        }
        if(e.channels||e.audioCodec){
          const a=Xt(e, s);
          if(a>-1)return s[a]
        }

      }

    }
    return null
  }
  setAudioTrack(e){
    const t=this.tracksInGroup;
    if(e<0||e>=t.length){
      this.warn(`Invalid audio track id: ${e}`);
      return
    }
    this.selectDefaultTrack=!1;
    const s=this.currentTrack, n=t[e], i=n.details&&!n.details.live;
    if(e===this.trackId&&n===s&&i||(this.log(`Switching to audio-track ${e} "${n.name}" lang:${n.lang} group:${n.groupId} channels:${n.channels}`),
    this.trackId=e, this.currentTrack=n, this.hls.trigger(S.AUDIO_TRACK_SWITCHING, ce({

    }, n)), i))return;
    const a=this.switchParams(n.url, s==null?void 0:s.details, n.details);
    this.loadPlaylist(a)
  }
  findTrackId(e){
    const t=this.tracksInGroup;
    for(let s=0;
    s<t.length;
    s++){
      const n=t[s];
      if(!(this.selectDefaultTrack&&!n.default)&&(!e||us(e, n, ns)))return s
    }
    if(e){
      const{
        name:s, lang:n, assocLang:i, characteristics:a, audioCodec:o, channels:l
      }
      =e;
      for(let c=0;
      c<t.length;
      c++){
        const u=t[c];
        if(us({
          name:s, lang:n, assocLang:i, characteristics:a, audioCodec:o, channels:l
        }, u, ns))return c
      }
      for(let c=0;
      c<t.length;
      c++){
        const u=t[c];
        if(hi(e.attrs, u.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))return c
      }
      for(let c=0;
      c<t.length;
      c++){
        const u=t[c];
        if(hi(e.attrs, u.attrs, ["LANGUAGE"]))return c
      }

    }
    return-1
  }
  loadPlaylist(e){
    super.loadPlaylist();
    const t=this.currentTrack;
    this.shouldLoadPlaylist(t)&&eo(t.url, this.hls)&&this.scheduleLoading(t, e)
  }
  loadingPlaylist(e, t){
    super.loadingPlaylist(e, t);
    const s=e.id, n=e.groupId, i=this.getUrlWithDirectives(e.url, t), a=e.details, o=a==null?void 0:a.age;
    this.log(`Loading audio-track ${s} "${e.name}" lang:${e.lang} group:${n}${(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}${o&&a.live?" age "+o.toFixed(1)+(a.type&&" "+a.type||""):""} ${i}`)
    , this.hls.trigger(S.AUDIO_TRACK_LOADING, {
      url:i, id:s, groupId:n, deliveryDirectives:t||null, track:e
    })
  }

}
class CI{
  constructor(e){
    this.tracks=void 0, this.queues={
      video:[], audio:[], audiovideo:[]
    }, this.tracks=e
  }
  destroy(){
    this.tracks=this.queues=null
  }
  append(e, t, s){
    if(this.queues===null||this.tracks===null)return;
    const n=this.queues[t];
    n.push(e), n.length===1&&!s&&this.executeNext(t)
  }
  appendBlocker(e){
    return new Promise(t=>{
      const s={
        label:"async-blocker", execute:t, onStart:()=>{

        }, onComplete:()=>{

        }, onError:()=>{

        }

      };
      this.append(s, e)
    })
  }
  prependBlocker(e){
    return new Promise(t=>{
      if(this.queues){
        const s={
          label:"async-blocker-prepend", execute:t, onStart:()=>{

          }, onComplete:()=>{

          }, onError:()=>{

          }

        };
        this.queues[e].unshift(s)
      }

    })
  }
  removeBlockers(){
    this.queues!==null&&[this.queues.video, this.queues.audio, this.queues.audiovideo].forEach(e=>{
      var t;
      const s=(t=e[0])==null?void 0:t.label;
      (s==="async-blocker"||s==="async-blocker-prepend")&&(e[0].execute(), e.splice(0, 1))
    })
  }
  unblockAudio(e){
    if(this.queues===null)return;
    this.queues.audio[0]===e&&this.shiftAndExecuteNext("audio")
  }
  executeNext(e){
    if(this.queues===null||this.tracks===null)return;
    const t=this.queues[e];
    if(t.length){
      const n=t[0];
      try{
        n.execute()
      }
      catch(i){
        var s;
        if(n.onError(i), this.queues===null||this.tracks===null)return;
        const a=(s=this.tracks[e])==null?void 0:s.buffer;
        a!=null&&a.updating||this.shiftAndExecuteNext(e)
      }

    }

  }
  shiftAndExecuteNext(e){
    this.queues!==null&&(this.queues[e].shift(), this.executeNext(e))
  }
  current(e){
    var t;
    return((t=this.queues)==null?void 0:t[e][0])||null
  }
  toString(){
    const{
      queues:e, tracks:t
    }
    =this;
    return e===null||t===null?"<destroyed>":`
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`
  }
  list(e){
    var t, s;
    return(t=this.queues)!=null&&t[e]||(s=this.tracks)!=null&&s[e]?`${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}`:""
  }
  listSbInfo(e){
    var t;
    const s=(t=this.tracks)==null?void 0:t[e], n=s==null?void 0:s.buffer;
    return n?`SourceBuffer${n.updating?" updating":""}${s.ended?" ended":""}${s.ending?" ending":""}`:"none"
  }
  listOps(e){
    var t;
    return((t=this.queues)==null?void 0:t[e].map(s=>s.label).join(", "))||""
  }

}
const Nf=/(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/, Gp="HlsJsTrackRemovedError";
class DI extends Error{
  constructor(e){
    super(e), this.name=Gp
  }

}
class PI extends Ct{
  constructor(e, t){
    super("buffer-controller", e.logger), this.hls=void 0, this.fragmentTracker=void 0, this.details=null, this._objectUrl=null,
    this.operationQueue=null, this.bufferCodecEventsTotal=0, this.media=null, this.mediaSource=null, this.lastMpegAudioChunk=null,
    this.blockedAudioAppend=null, this.lastVideoAppendEnd=0, this.appendSource=void 0, this.transferData=void 0, this.overrides=void 0,
    this.appendErrors={
      audio:0, video:0, audiovideo:0
    }, this.tracks={

    }, this.sourceBuffers=[[null, null], [null, null]], this._onEndStreaming=s=>{
      var n;
      this.hls&&((n=this.mediaSource)==null?void 0:n.readyState)==="open"&&this.hls.pauseBuffering()
    }, this._onStartStreaming=s=>{
      this.hls&&this.hls.resumeBuffering()
    }, this._onMediaSourceOpen=s=>{
      const{
        media:n, mediaSource:i
      }
      =this;
      s&&this.log("Media source opened"), !(!n||!i)&&(i.removeEventListener("sourceopen", this._onMediaSourceOpen), n.removeEventListener("emptied",
      this._onMediaEmptied), this.updateDuration(), this.hls.trigger(S.MEDIA_ATTACHED, {
        media:n, mediaSource:i
      }), this.mediaSource!==null&&this.checkPendingTracks())
    }, this._onMediaSourceClose=()=>{
      this.log("Media source closed")
    }, this._onMediaSourceEnded=()=>{
      this.log("Media source ended")
    }, this._onMediaEmptied=()=>{
      const{
        mediaSrc:s, _objectUrl:n
      }
      =this;
      s!==n&&this.error(`Media element src was set while attaching MediaSource (${n} > ${s})`)
    }, this.hls=e, this.fragmentTracker=t, this.appendSource=tS(Wr(e.config.preferManagedMediaSource)), this.initTracks(),
    this.registerListeners()
  }
  hasSourceTypes(){
    return Object.keys(this.tracks).length>0
  }
  destroy(){
    this.unregisterListeners(), this.details=null, this.lastMpegAudioChunk=this.blockedAudioAppend=null, this.transferData=this.overrides=void 0,
    this.operationQueue&&(this.operationQueue.destroy(), this.operationQueue=null), this.hls=this.fragmentTracker=null, this._onMediaSourceOpen=this._onMediaSourceClose=null,
    this._onMediaSourceEnded=null, this._onStartStreaming=this._onEndStreaming=null
  }
  registerListeners(){
    const{
      hls:e
    }
    =this;
    e.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING,
    this.onManifestLoading, this), e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.BUFFER_RESET, this.onBufferReset,
    this), e.on(S.BUFFER_APPENDING, this.onBufferAppending, this), e.on(S.BUFFER_CODECS, this.onBufferCodecs, this), e.on(S.BUFFER_EOS,
    this.onBufferEos, this), e.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(S.LEVEL_UPDATED, this.onLevelUpdated,
    this), e.on(S.FRAG_PARSED, this.onFragParsed, this), e.on(S.FRAG_CHANGED, this.onFragChanged, this), e.on(S.ERROR, this.onError,
    this)
  }
  unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING,
    this.onManifestLoading, this), e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.BUFFER_RESET, this.onBufferReset,
    this), e.off(S.BUFFER_APPENDING, this.onBufferAppending, this), e.off(S.BUFFER_CODECS, this.onBufferCodecs, this), e.off(S.BUFFER_EOS,
    this.onBufferEos, this), e.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(S.LEVEL_UPDATED, this.onLevelUpdated,
    this), e.off(S.FRAG_PARSED, this.onFragParsed, this), e.off(S.FRAG_CHANGED, this.onFragChanged, this), e.off(S.ERROR,
    this.onError, this)
  }
  transferMedia(){
    const{
      media:e, mediaSource:t
    }
    =this;
    if(!e)return null;
    const s={

    };
    if(this.operationQueue){
      const i=this.isUpdating();
      i||this.operationQueue.removeBlockers();
      const a=this.isQueued();
      (i||a)&&this.warn(`Transfering MediaSource with${a?" operations in queue":""}${i?" updating SourceBuffer(s)":""} ${this.operationQueue}`),
      this.operationQueue.destroy()
    }
    const n=this.transferData;
    return!this.sourceBufferCount&&n&&n.mediaSource===t?he(s, n.tracks):this.sourceBuffers.forEach(i=>{
      const[a]=i;
      a&&(s[a]=he({

      }, this.tracks[a]), this.removeBuffer(a)), i[0]=i[1]=null
    }), {
      media:e, mediaSource:t, tracks:s
    }

  }
  initTracks(){
    const e={

    };
    this.sourceBuffers=[[null, null], [null, null]], this.tracks=e, this.resetQueue(), this.resetAppendErrors(), this.lastMpegAudioChunk=this.blockedAudioAppend=null,
    this.lastVideoAppendEnd=0
  }
  onManifestLoading(){
    this.bufferCodecEventsTotal=0, this.details=null
  }
  onManifestParsed(e, t){
    var s;
    let n=2;
    (t.audio&&!t.video||!t.altAudio)&&(n=1), this.bufferCodecEventsTotal=n, this.log(`${n} bufferCodec event(s) expected.`),
    (s=this.transferData)!=null&&s.mediaSource&&this.sourceBufferCount&&n&&this.bufferCreated()
  }
  onMediaAttaching(e, t){
    const s=this.media=t.media;
    this.transferData=this.overrides=void 0;
    const n=Wr(this.appendSource);
    if(n){
      const i=!!t.mediaSource;
      (i||t.overrides)&&(this.transferData=t, this.overrides=t.overrides);
      const a=this.mediaSource=t.mediaSource||new n;
      if(this.assignMediaSource(a), i)this._objectUrl=s.src, this.attachTransferred();
      else{
        const o=this._objectUrl=self.URL.createObjectURL(a);
        if(this.appendSource)try{
          s.removeAttribute("src");
          const l=self.ManagedMediaSource;
          s.disableRemotePlayback=s.disableRemotePlayback||l&&a instanceof l, Of(s), NI(s, o), s.load()
        }
        catch{
          s.src=o
        }
        else s.src=o
      }
      s.addEventListener("emptied", this._onMediaEmptied)
    }

  }
  assignMediaSource(e){
    var t, s;
    this.log(`${((t=this.transferData)==null?void 0:t.mediaSource)===e?"transferred":"created"} media source: ${(s=e.constructor)==null?void 0:s.name}`),
    e.addEventListener("sourceopen", this._onMediaSourceOpen), e.addEventListener("sourceended", this._onMediaSourceEnded),
    e.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource&&(e.addEventListener("startstreaming",
    this._onStartStreaming), e.addEventListener("endstreaming", this._onEndStreaming))
  }
  attachTransferred(){
    const e=this.media, t=this.transferData;
    if(!t||!e)return;
    const s=this.tracks, n=t.tracks, i=n?Object.keys(n):null, a=i?i.length:0, o=()=>{
      Promise.resolve().then(()=>{
        this.media&&this.mediaSourceOpenOrEnded&&this._onMediaSourceOpen()
      })
    };
    if(n&&i&&a){
      if(!this.tracksReady){
        this.hls.config.startFragPrefetch=!0, this.log("attachTransferred: waiting for SourceBuffer track info");
        return
      }
      if(this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${me(s,(l,c)=>l==="initSegment"?void 0:c)};
transfer tracks: ${me(n,(l,c)=>l==="initSegment"?void 0:c)}}`), !Ug(n, s)){
        t.mediaSource=null, t.tracks=void 0;
        const l=e.currentTime, c=this.details, u=Math.max(l, (c==null?void 0:c.fragments[0].start)||0);
        if(u-l>1){
          this.log(`attachTransferred: waiting for playback to reach new tracks start time ${l} -> ${u}`);
          return
        }
        this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(n)}"->"${Object.keys(s)}") start time: ${u} currentTime: ${l}`),
        this.onMediaDetaching(S.MEDIA_DETACHING, {

        }), this.onMediaAttaching(S.MEDIA_ATTACHING, t), e.currentTime=u;
        return
      }
      this.transferData=void 0, i.forEach(l=>{
        const c=l, u=n[c];
        if(u){
          const d=u.buffer;
          if(d){
            const h=this.fragmentTracker, f=u.id;
            if(h.hasFragments(f)||h.hasParts(f)){
              const x=Z.getBuffered(d);
              h.detectEvictedFragments(c, x, f, null, !0)
            }
            const g=vl(c), y=[c, d];
            this.sourceBuffers[g]=y, d.updating&&this.operationQueue&&this.operationQueue.prependBlocker(c), this.trackSourceBuffer(c,
            u)
          }

        }

      }), o(), this.bufferCreated()
    }
    else this.log("attachTransferred: MediaSource w/o SourceBuffers"), o()
  }
  get mediaSourceOpenOrEnded(){
    var e;
    const t=(e=this.mediaSource)==null?void 0:e.readyState;
    return t==="open"||t==="ended"
  }
  onMediaDetaching(e, t){
    const s=!!t.transferMedia;
    this.transferData=this.overrides=void 0;
    const{
      media:n, mediaSource:i, _objectUrl:a
    }
    =this;
    if(i){
      if(this.log(`media source ${s?"transferring":"detaching"}`), s)this.sourceBuffers.forEach(([o])=>{
        o&&this.removeBuffer(o)
      }), this.resetQueue();
      else{
        if(this.mediaSourceOpenOrEnded){
          const o=i.readyState==="open";
          try{
            const l=i.sourceBuffers;
            for(let c=l.length;
            c--;
            )o&&l[c].abort(), i.removeSourceBuffer(l[c]);
            o&&i.endOfStream()
          }
          catch(l){
            this.warn(`onMediaDetaching: ${l.message} while calling endOfStream`)
          }

        }
        this.sourceBufferCount&&this.onBufferReset()
      }
      i.removeEventListener("sourceopen", this._onMediaSourceOpen), i.removeEventListener("sourceended", this._onMediaSourceEnded),
      i.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource&&(i.removeEventListener("startstreaming",
      this._onStartStreaming), i.removeEventListener("endstreaming", this._onEndStreaming)), this.mediaSource=null, this._objectUrl=null
    }
    n&&(n.removeEventListener("emptied", this._onMediaEmptied), s||(a&&self.URL.revokeObjectURL(a), this.mediaSrc===a?(n.removeAttribute("src"),
    this.appendSource&&Of(n), n.load()):this.warn("media|source.src was changed by a third party - skip cleanup")), this.media=null),
    this.hls.trigger(S.MEDIA_DETACHED, t)
  }
  onBufferReset(){
    this.sourceBuffers.forEach(([e])=>{
      e&&this.resetBuffer(e)
    }), this.initTracks()
  }
  resetBuffer(e){
    var t;
    const s=(t=this.tracks[e])==null?void 0:t.buffer;
    if(this.removeBuffer(e), s)try{
      var n;
      (n=this.mediaSource)!=null&&n.sourceBuffers.length&&this.mediaSource.removeSourceBuffer(s)
    }
    catch(i){
      this.warn(`onBufferReset ${e}`, i)
    }
    delete this.tracks[e]
  }
  removeBuffer(e){
    this.removeBufferListeners(e), this.sourceBuffers[vl(e)]=[null, null];
    const t=this.tracks[e];
    t&&(t.buffer=void 0)
  }
  resetQueue(){
    this.operationQueue&&this.operationQueue.destroy(), this.operationQueue=new CI(this.tracks)
  }
  onBufferCodecs(e, t){
    var s;
    const n=this.tracks, i=Object.keys(t);
    this.log(`BUFFER_CODECS: "${i}" (current SB count ${this.sourceBufferCount})`);
    const a="audiovideo"in t&&(n.audio||n.video)||n.audiovideo&&("audio"in t||"video"in t), o=!a&&this.sourceBufferCount&&this.media&&i.some(l=>!n[l]);
    if(a||o){
      this.warn(`Unsupported transition between "${Object.keys(n)}" and "${i}" SourceBuffers`);
      return
    }
    i.forEach(l=>{
      var c, u;
      const d=t[l], {
        id:h, codec:f, levelCodec:g, container:y, metadata:x, supplemental:p
      }
      =d;
      let v=n[l];
      const E=(c=this.transferData)==null||(c=c.tracks)==null?void 0:c[l], T=E!=null&&E.buffer?E:v, I=(T==null?void 0:T.pendingCodec)||(T==null?void 0:T.codec),
      b=T==null?void 0:T.levelCodec;
      v||(v=n[l]={
        buffer:void 0, listeners:[], codec:f, supplemental:p, container:y, levelCodec:g, metadata:x, id:h
      });
      const L=va(I, b), A=L==null?void 0:L.replace(Nf, "$1");
      let w=va(f, g);
      const R=(u=w)==null?void 0:u.replace(Nf, "$1");
      w&&L&&A!==R&&(l.slice(0, 5)==="audio"&&(w=Za(w, this.appendSource)), this.log(`switching codec ${I} to ${w}`), w!==(v.pendingCodec||v.codec)&&(v.pendingCodec=w),
      v.container=y, this.appendChangeType(l, y, w))
    }), (this.tracksReady||this.sourceBufferCount)&&(t.tracks=this.sourceBufferTracks), !this.sourceBufferCount&&(this.bufferCodecEventsTotal>1&&!this.tracks.video&&!t.video&&((s=t.audio)
    ==null?void 0:s.id)==="main"&&(this.log("Main audio-only"), this.bufferCodecEventsTotal=1), this.mediaSourceOpenOrEnded&&this.checkPendingTracks())
  }
  get sourceBufferTracks(){
    return Object.keys(this.tracks).reduce((e, t)=>{
      const s=this.tracks[t];
      return e[t]={
        id:s.id, container:s.container, codec:s.codec, levelCodec:s.levelCodec
      }, e
    }, {

    })
  }
  appendChangeType(e, t, s){
    const n=`${t};codecs=${s}`, i={
      label:`change-type=${n}`, execute:()=>{
        const a=this.tracks[e];
        if(a){
          const o=a.buffer;
          o!=null&&o.changeType&&(this.log(`changing ${e} sourceBuffer type to ${n}`), o.changeType(n), a.codec=s, a.container=t)
        }
        this.shiftAndExecuteNext(e)
      }, onStart:()=>{

      }, onComplete:()=>{

      }, onError:a=>{
        this.warn(`Failed to change ${e} SourceBuffer type`, a)
      }

    };
    this.append(i, e, this.isPending(this.tracks[e]))
  }
  blockAudio(e){
    var t;
    const s=e.start, n=s+e.duration*.05;
    if(((t=this.fragmentTracker.getAppendedFrag(s, W.MAIN))==null?void 0:t.gap)===!0)return;
    const a={
      label:"block-audio", execute:()=>{
        var o;
        const l=this.tracks.video;
        (this.lastVideoAppendEnd>n||l!=null&&l.buffer&&Z.isBuffered(l.buffer, n)||((o=this.fragmentTracker.getAppendedFrag(n,
        W.MAIN))==null?void 0:o.gap)===!0)&&(this.blockedAudioAppend=null, this.shiftAndExecuteNext("audio"))
      }, onStart:()=>{

      }, onComplete:()=>{

      }, onError:o=>{
        this.warn("Error executing block-audio operation", o)
      }

    };
    this.blockedAudioAppend={
      op:a, frag:e
    }, this.append(a, "audio", !0)
  }
  unblockAudio(){
    const{
      blockedAudioAppend:e, operationQueue:t
    }
    =this;
    e&&t&&(this.blockedAudioAppend=null, t.unblockAudio(e.op))
  }
  onBufferAppending(e, t){
    const{
      tracks:s
    }
    =this, {
      data:n, type:i, parent:a, frag:o, part:l, chunkMeta:c, offset:u
    }
    =t, d=c.buffering[i], {
      sn:h, cc:f
    }
    =o, g=self.performance.now();
    d.start=g;
    const y=o.stats.buffering, x=l?l.stats.buffering:null;
    y.start===0&&(y.start=g), x&&x.start===0&&(x.start=g);
    const p=s.audio;
    let v=!1;
    i==="audio"&&(p==null?void 0:p.container)==="audio/mpeg"&&(v=!this.lastMpegAudioChunk||c.id===1||this.lastMpegAudioChunk.sn!==c.sn,
    this.lastMpegAudioChunk=c);
    const E=s.video, T=E==null?void 0:E.buffer;
    if(T&&h!=="initSegment"){
      const L=l||o, A=this.blockedAudioAppend;
      if(i==="audio"&&a!=="main"&&!this.blockedAudioAppend&&!(E.ending||E.ended)){
        const R=L.start+L.duration*.05, D=T.buffered, $=this.currentOp("video");
        !D.length&&!$?this.blockAudio(L):!$&&!Z.isBuffered(T, R)&&this.lastVideoAppendEnd<R&&this.blockAudio(L)
      }
      else if(i==="video"){
        const w=L.end;
        if(A){
          const R=A.frag.start;
          (w>R||w<this.lastVideoAppendEnd||Z.isBuffered(T, R))&&this.unblockAudio()
        }
        this.lastVideoAppendEnd=w
      }

    }
    const I=(l||o).start, b={
      label:`append-${i}`, execute:()=>{
        var L;
        d.executeStart=self.performance.now();
        const A=(L=this.tracks[i])==null?void 0:L.buffer;
        A&&(v?this.updateTimestampOffset(A, I, .1, i, h, f):u!==void 0&&G(u)&&this.updateTimestampOffset(A, u, 1e-6, i, h,
        f)), this.appendExecutor(n, i)
      }, onStart:()=>{

      }, onComplete:()=>{
        const L=self.performance.now();
        d.executeEnd=d.end=L, y.first===0&&(y.first=L), x&&x.first===0&&(x.first=L);
        const A={

        };
        this.sourceBuffers.forEach(([w, R])=>{
          w&&(A[w]=Z.getBuffered(R))
        }), this.appendErrors[i]=0, i==="audio"||i==="video"?this.appendErrors.audiovideo=0:(this.appendErrors.audio=0, this.appendErrors.video=0),
        this.hls.trigger(S.BUFFER_APPENDED, {
          type:i, frag:o, part:l, chunkMeta:c, parent:o.type, timeRanges:A
        })
      }, onError:L=>{
        var A;
        const w={
          type:q.MEDIA_ERROR, parent:o.type, details:k.BUFFER_APPEND_ERROR, sourceBufferName:i, frag:o, part:l, chunkMeta:c,
          error:L, err:L, fatal:!1
        }, R=(A=this.media)==null?void 0:A.error;
        if(L.code===DOMException.QUOTA_EXCEEDED_ERR||L.name=="QuotaExceededError"||"quota"in L)w.details=k.BUFFER_FULL_ERROR;
        else if(L.code===DOMException.INVALID_STATE_ERR&&this.mediaSourceOpenOrEnded&&!R)w.errorAction=Ys(!0);
        else if(L.name===Gp&&this.sourceBufferCount===0)w.errorAction=Ys(!0);
        else{
          const D=++this.appendErrors[i];
          this.warn(`Failed ${D}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${i}" sourceBuffer (${R||"no media error"})`),
          (D>=this.hls.config.appendErrorMaxRetry||R)&&(w.fatal=!0)
        }
        this.hls.trigger(S.ERROR, w)
      }

    };
    this.log(`queuing "${i}" append sn: ${h}${l?" p: "+l.index:""} of ${o.type===W.MAIN?"level":"track"} ${o.level} cc: ${f}`),
    this.append(b, i, this.isPending(this.tracks[i]))
  }
  getFlushOp(e, t, s){
    return this.log(`queuing "${e}" remove ${t}-${s}`), {
      label:"remove", execute:()=>{
        this.removeExecutor(e, t, s)
      }, onStart:()=>{

      }, onComplete:()=>{
        this.hls.trigger(S.BUFFER_FLUSHED, {
          type:e
        })
      }, onError:n=>{
        this.warn(`Failed to remove ${t}-${s} from "${e}" SourceBuffer`, n)
      }

    }

  }
  onBufferFlushing(e, t){
    const{
      type:s, startOffset:n, endOffset:i
    }
    =t;
    s?this.append(this.getFlushOp(s, n, i), s):this.sourceBuffers.forEach(([a])=>{
      a&&this.append(this.getFlushOp(a, n, i), a)
    })
  }
  onFragParsed(e, t){
    const{
      frag:s, part:n
    }
    =t, i=[], a=n?n.elementaryStreams:s.elementaryStreams;
    a[fe.AUDIOVIDEO]?i.push("audiovideo"):(a[fe.AUDIO]&&i.push("audio"), a[fe.VIDEO]&&i.push("video"));
    const o=()=>{
      const l=self.performance.now();
      s.stats.buffering.end=l, n&&(n.stats.buffering.end=l);
      const c=n?n.stats:s.stats;
      this.hls.trigger(S.FRAG_BUFFERED, {
        frag:s, part:n, stats:c, id:s.type
      })
    };
    i.length===0&&this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`),
    this.blockBuffers(o, i).catch(l=>{
      this.warn(`Fragment buffered callback ${l}`), this.stepOperationQueue(this.sourceBufferTypes)
    })
  }
  onFragChanged(e, t){
    this.trimBuffers()
  }
  get bufferedToEnd(){
    return this.sourceBufferCount>0&&!this.sourceBuffers.some(([e])=>{
      if(e){
        const t=this.tracks[e];
        if(t)return!t.ended||t.ending
      }
      return!1
    })
  }
  onBufferEos(e, t){
    var s;
    this.sourceBuffers.forEach(([a])=>{
      if(a){
        const o=this.tracks[a];
        (!t.type||t.type===a)&&(o.ending=!0, o.ended||(o.ended=!0, this.log(`${a} buffer reached EOS`)))
      }

    });
    const n=((s=this.overrides)==null?void 0:s.endOfStream)!==!1;
    this.sourceBufferCount>0&&!this.sourceBuffers.some(([a])=>{
      var o;
      return a&&!((o=this.tracks[a])!=null&&o.ended)
    })?n?(this.log("Queueing EOS"), this.blockUntilOpen(()=>{
      this.tracksEnded();
      const{
        mediaSource:a
      }
      =this;
      if(!a||a.readyState!=="open"){
        a&&this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${a.readyState}`);
        return
      }
      this.log("Calling mediaSource.endOfStream()"), a.endOfStream(), this.hls.trigger(S.BUFFERED_TO_END, void 0)
    })):(this.tracksEnded(), this.hls.trigger(S.BUFFERED_TO_END, void 0)):t.type==="video"&&this.unblockAudio()
  }
  tracksEnded(){
    this.sourceBuffers.forEach(([e])=>{
      if(e!==null){
        const t=this.tracks[e];
        t&&(t.ending=!1)
      }

    })
  }
  onLevelUpdated(e, {
    details:t
  }){
    t.fragments.length&&(this.details=t, this.updateDuration())
  }
  updateDuration(){
    this.blockUntilOpen(()=>{
      const e=this.getDurationAndRange();
      e&&this.updateMediaSource(e)
    })
  }
  onError(e, t){
    if(t.details===k.BUFFER_APPEND_ERROR&&t.frag){
      var s;
      const n=(s=t.errorAction)==null?void 0:s.nextAutoLevel;
      G(n)&&n!==t.frag.level&&this.resetAppendErrors()
    }

  }
  resetAppendErrors(){
    this.appendErrors={
      audio:0, video:0, audiovideo:0
    }

  }
  trimBuffers(){
    const{
      hls:e, details:t, media:s
    }
    =this;
    if(!s||t===null||!this.sourceBufferCount)return;
    const n=e.config, i=s.currentTime, a=t.levelTargetDuration, o=t.live&&n.liveBackBufferLength!==null?n.liveBackBufferLength:n.backBufferLength;
    if(G(o)&&o>=0){
      const c=Math.max(o, a), u=Math.floor(i/a)*a-c;
      this.flushBackBuffer(i, a, u)
    }
    const l=n.frontBufferFlushThreshold;
    if(G(l)&&l>0){
      const c=Math.max(n.maxBufferLength, l), u=Math.max(c, a), d=Math.floor(i/a)*a+u;
      this.flushFrontBuffer(i, a, d)
    }

  }
  flushBackBuffer(e, t, s){
    this.sourceBuffers.forEach(([n, i])=>{
      if(i){
        const o=Z.getBuffered(i);
        if(o.length>0&&s>o.start(0)){
          var a;
          this.hls.trigger(S.BACK_BUFFER_REACHED, {
            bufferEnd:s
          });
          const l=this.tracks[n];
          if((a=this.details)!=null&&a.live)this.hls.trigger(S.LIVE_BACK_BUFFER_REACHED, {
            bufferEnd:s
          });
          else if(l!=null&&l.ended){
            this.log(`Cannot flush ${n} back buffer while SourceBuffer is in ended state`);
            return
          }
          this.hls.trigger(S.BUFFER_FLUSHING, {
            startOffset:0, endOffset:s, type:n
          })
        }

      }

    })
  }
  flushFrontBuffer(e, t, s){
    this.sourceBuffers.forEach(([n, i])=>{
      if(i){
        const a=Z.getBuffered(i), o=a.length;
        if(o<2)return;
        const l=a.start(o-1), c=a.end(o-1);
        if(s>l||e>=l&&e<=c)return;
        this.hls.trigger(S.BUFFER_FLUSHING, {
          startOffset:l, endOffset:1/0, type:n
        })
      }

    })
  }
  getDurationAndRange(){
    var e;
    const{
      details:t, mediaSource:s
    }
    =this;
    if(!t||!this.media||(s==null?void 0:s.readyState)!=="open")return null;
    const n=t.edge;
    if(t.live&&this.hls.config.liveDurationInfinity){
      if(t.fragments.length&&s.setLiveSeekableRange){
        const c=Math.max(0, t.fragmentStart), u=Math.max(c, n);
        return{
          duration:1/0, start:c, end:u
        }

      }
      return{
        duration:1/0
      }

    }
    const i=(e=this.overrides)==null?void 0:e.duration;
    if(i)return G(i)?{
      duration:i
    }:null;
    const a=this.media.duration, o=G(s.duration)?s.duration:0;
    return n>o&&n>a||!G(a)?{
      duration:n
    }:null
  }
  updateMediaSource({
    duration:e, start:t, end:s
  }){
    const n=this.mediaSource;
    !this.media||!n||n.readyState!=="open"||(n.duration!==e&&(G(e)&&this.log(`Updating MediaSource duration to ${e.toFixed(3)}`),
    n.duration=e), t!==void 0&&s!==void 0&&(this.log(`MediaSource duration is set to ${n.duration}. Setting seekable range to ${t}-${s}.`),
    n.setLiveSeekableRange(t, s)))
  }
  get tracksReady(){
    const e=this.pendingTrackCount;
    return e>0&&(e>=this.bufferCodecEventsTotal||this.isPending(this.tracks.audiovideo))
  }
  checkPendingTracks(){
    const{
      bufferCodecEventsTotal:e, pendingTrackCount:t, tracks:s
    }
    =this;
    if(this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${me(s)}`), this.tracksReady){
      var n;
      const i=(n=this.transferData)==null?void 0:n.tracks;
      i&&Object.keys(i).length?this.attachTransferred():this.createSourceBuffers()
    }

  }
  bufferCreated(){
    if(this.sourceBufferCount){
      const e={

      };
      this.sourceBuffers.forEach(([t, s])=>{
        if(t){
          const n=this.tracks[t];
          e[t]={
            buffer:s, container:n.container, codec:n.codec, supplemental:n.supplemental, levelCodec:n.levelCodec, id:n.id,
            metadata:n.metadata
          }

        }

      }), this.hls.trigger(S.BUFFER_CREATED, {
        tracks:e
      }), this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`), this.sourceBuffers.forEach(([t])=>{
        this.executeNext(t)
      })
    }
    else{
      const e=new Error("could not create source buffer for media codec(s)");
      this.hls.trigger(S.ERROR, {
        type:q.MEDIA_ERROR, details:k.BUFFER_INCOMPATIBLE_CODECS_ERROR, fatal:!0, error:e, reason:e.message
      })
    }

  }
  createSourceBuffers(){
    const{
      tracks:e, sourceBuffers:t, mediaSource:s
    }
    =this;
    if(!s)throw new Error("createSourceBuffers called when mediaSource was null");
    for(const i in e){
      const a=i, o=e[a];
      if(this.isPending(o)){
        const l=this.getTrackCodec(o, a), c=`${o.container};codecs=${l}`;
        o.codec=l, this.log(`creating sourceBuffer(${c})${this.currentOp(a)?" Queued":""} ${me(o)}`);
        try{
          const u=s.addSourceBuffer(c), d=vl(a), h=[a, u];
          t[d]=h, o.buffer=u
        }
        catch(u){
          var n;
          this.error(`error while trying to add sourceBuffer: ${u.message}`), this.shiftAndExecuteNext(a), (n=this.operationQueue)==null||n.removeBlockers(),
          delete this.tracks[a], this.hls.trigger(S.ERROR, {
            type:q.MEDIA_ERROR, details:k.BUFFER_ADD_CODEC_ERROR, fatal:!1, error:u, sourceBufferName:a, mimeType:c, parent:o.id
          });
          return
        }
        this.trackSourceBuffer(a, o)
      }

    }
    this.bufferCreated()
  }
  getTrackCodec(e, t){
    const s=e.supplemental;
    let n=e.codec;
    s&&(t==="video"||t==="audiovideo")&&ai(s, "video")&&(n=IS(n, s));
    const i=va(n, e.levelCodec);
    return i?t.slice(0, 5)==="audio"?Za(i, this.appendSource):i:""
  }
  trackSourceBuffer(e, t){
    const s=t.buffer;
    if(!s)return;
    const n=this.getTrackCodec(t, e);
    this.tracks[e]={
      buffer:s, codec:n, container:t.container, levelCodec:t.levelCodec, supplemental:t.supplemental, metadata:t.metadata,
      id:t.id, listeners:[]
    }, this.removeBufferListeners(e), this.addBufferListener(e, "updatestart", this.onSBUpdateStart), this.addBufferListener(e,
    "updateend", this.onSBUpdateEnd), this.addBufferListener(e, "error", this.onSBUpdateError), this.appendSource&&this.addBufferListener(e,
    "bufferedchange", (i, a)=>{
      const o=a.removedRanges;
      o!=null&&o.length&&this.hls.trigger(S.BUFFER_FLUSHED, {
        type:i
      })
    })
  }
  get mediaSrc(){
    var e, t;
    const s=((e=this.media)==null||(t=e.querySelector)==null?void 0:t.call(e, "source"))||this.media;
    return s==null?void 0:s.src
  }
  onSBUpdateStart(e){
    const t=this.currentOp(e);
    t&&t.onStart()
  }
  onSBUpdateEnd(e){
    var t;
    if(((t=this.mediaSource)==null?void 0:t.readyState)==="closed"){
      this.resetBuffer(e);
      return
    }
    const s=this.currentOp(e);
    s&&(s.onComplete(), this.shiftAndExecuteNext(e))
  }
  onSBUpdateError(e, t){
    var s;
    const n=new Error(`${e} SourceBuffer error. MediaSource readyState: ${(s=this.mediaSource)==null?void 0:s.readyState}`);
    this.error(`${n}`, t), this.hls.trigger(S.ERROR, {
      type:q.MEDIA_ERROR, details:k.BUFFER_APPENDING_ERROR, sourceBufferName:e, error:n, fatal:!1
    });
    const i=this.currentOp(e);
    i&&i.onError(n)
  }
  updateTimestampOffset(e, t, s, n, i, a){
    const o=t-e.timestampOffset;
    Math.abs(o)>=s&&(this.log(`Updating ${n} SourceBuffer timestampOffset to ${t} (sn: ${i} cc: ${a})`), e.timestampOffset=t)
  }
  removeExecutor(e, t, s){
    const{
      media:n, mediaSource:i
    }
    =this, a=this.tracks[e], o=a==null?void 0:a.buffer;
    if(!n||!i||!o){
      this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), this.shiftAndExecuteNext(e);
      return
    }
    const l=G(n.duration)?n.duration:1/0, c=G(i.duration)?i.duration:1/0, u=Math.max(0, t), d=Math.min(s, l, c);
    d>u&&(!a.ending||a.ended)?(a.ended=!1, this.log(`Removing [${u},${d}] from the ${e} SourceBuffer`), o.remove(u, d)):this.shiftAndExecuteNext(e)
  }
  appendExecutor(e, t){
    const s=this.tracks[t], n=s==null?void 0:s.buffer;
    if(!n)throw new DI(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
    s.ending=!1, s.ended=!1, n.appendBuffer(e)
  }
  blockUntilOpen(e){
    if(this.isUpdating()||this.isQueued())this.blockBuffers(e).catch(t=>{
      this.warn(`SourceBuffer blocked callback ${t}`), this.stepOperationQueue(this.sourceBufferTypes)
    });
    else try{
      e()
    }
    catch(t){
      this.warn(`Callback run without blocking ${this.operationQueue} ${t}`)
    }

  }
  isUpdating(){
    return this.sourceBuffers.some(([e, t])=>e&&t.updating)
  }
  isQueued(){
    return this.sourceBuffers.some(([e])=>e&&!!this.currentOp(e))
  }
  isPending(e){
    return!!e&&!e.buffer
  }
  blockBuffers(e, t=this.sourceBufferTypes){
    if(!t.length)return this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
    const{
      operationQueue:s
    }
    =this, n=t.map(a=>this.appendBlocker(a));
    return t.length>1&&!!this.blockedAudioAppend&&this.unblockAudio(), Promise.all(n).then(a=>{
      s===this.operationQueue&&(e(), this.stepOperationQueue(this.sourceBufferTypes))
    })
  }
  stepOperationQueue(e){
    e.forEach(t=>{
      var s;
      const n=(s=this.tracks[t])==null?void 0:s.buffer;
      !n||n.updating||this.shiftAndExecuteNext(t)
    })
  }
  append(e, t, s){
    this.operationQueue&&this.operationQueue.append(e, t, s)
  }
  appendBlocker(e){
    if(this.operationQueue)return this.operationQueue.appendBlocker(e)
  }
  currentOp(e){
    return this.operationQueue?this.operationQueue.current(e):null
  }
  executeNext(e){
    e&&this.operationQueue&&this.operationQueue.executeNext(e)
  }
  shiftAndExecuteNext(e){
    this.operationQueue&&this.operationQueue.shiftAndExecuteNext(e)
  }
  get pendingTrackCount(){
    return Object.keys(this.tracks).reduce((e, t)=>e+(this.isPending(this.tracks[t])?1:0), 0)
  }
  get sourceBufferCount(){
    return this.sourceBuffers.reduce((e, [t])=>e+(t?1:0), 0)
  }
  get sourceBufferTypes(){
    return this.sourceBuffers.map(([e])=>e).filter(e=>!!e)
  }
  addBufferListener(e, t, s){
    const n=this.tracks[e];
    if(!n)return;
    const i=n.buffer;
    if(!i)return;
    const a=s.bind(this, e);
    n.listeners.push({
      event:t, listener:a
    }), i.addEventListener(t, a)
  }
  removeBufferListeners(e){
    const t=this.tracks[e];
    if(!t)return;
    const s=t.buffer;
    s&&(t.listeners.forEach(n=>{
      s.removeEventListener(n.event, n.listener)
    }), t.listeners.length=0)
  }

}
function Of(r){
  const e=r.querySelectorAll("source");
  [].slice.call(e).forEach(t=>{
    r.removeChild(t)
  })
}
function NI(r, e){
  const t=self.document.createElement("source");
  t.type="video/mp4", t.src=e, r.appendChild(t)
}
function vl(r){
  return r==="audio"?1:0
}
class ud{
  constructor(e){
    this.hls=void 0, this.autoLevelCapping=void 0, this.firstLevel=void 0, this.media=void 0, this.restrictedLevels=void 0,
    this.timer=void 0, this.clientRect=void 0, this.streamController=void 0, this.hls=e, this.autoLevelCapping=Number.POSITIVE_INFINITY,
    this.firstLevel=-1, this.media=null, this.restrictedLevels=[], this.timer=void 0, this.clientRect=null, this.registerListeners()
  }
  setStreamController(e){
    this.streamController=e
  }
  destroy(){
    this.hls&&this.unregisterListener(), this.timer&&this.stopCapping(), this.media=null, this.clientRect=null, this.hls=this.streamController=null
  }
  registerListeners(){
    const{
      hls:e
    }
    =this;
    e.on(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this),
    e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(S.BUFFER_CODECS,
    this.onBufferCodecs, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this)
  }
  unregisterListener(){
    const{
      hls:e
    }
    =this;
    e.off(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this),
    e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(S.BUFFER_CODECS,
    this.onBufferCodecs, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this)
  }
  onFpsDropLevelCapping(e, t){
    const s=this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(s)&&this.restrictedLevels.push({
      bitrate:s.bitrate, height:s.height, width:s.width
    })
  }
  onMediaAttaching(e, t){
    this.media=t.media instanceof HTMLVideoElement?t.media:null, this.clientRect=null, this.timer&&this.hls.levels.length&&this.detectPlayerSize()
  }
  onManifestParsed(e, t){
    const s=this.hls;
    this.restrictedLevels=[], this.firstLevel=t.firstLevel, s.config.capLevelToPlayerSize&&t.video&&this.startCapping()
  }
  onLevelsUpdated(e, t){
    this.timer&&G(this.autoLevelCapping)&&this.detectPlayerSize()
  }
  onBufferCodecs(e, t){
    this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()
  }
  onMediaDetaching(){
    this.stopCapping(), this.media=null
  }
  detectPlayerSize(){
    if(this.media){
      if(this.mediaHeight<=0||this.mediaWidth<=0){
        this.clientRect=null;
        return
      }
      const e=this.hls.levels;
      if(e.length){
        const t=this.hls, s=this.getMaxLevel(e.length-1);
        s!==this.autoLevelCapping&&t.logger.log(`Setting autoLevelCapping to ${s}: ${e[s].height}p@${e[s].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`),
        t.autoLevelCapping=s, t.autoLevelEnabled&&t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),
        this.autoLevelCapping=t.autoLevelCapping
      }

    }

  }
  getMaxLevel(e){
    const t=this.hls.levels;
    if(!t.length)return-1;
    const s=t.filter((n, i)=>this.isLevelAllowed(n)&&i<=e);
    return this.clientRect=null, ud.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight)
  }
  startCapping(){
    this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer=self.setInterval(this.detectPlayerSize.bind(this),
    1e3), this.detectPlayerSize())
  }
  stopCapping(){
    this.restrictedLevels=[], this.firstLevel=-1, this.autoLevelCapping=Number.POSITIVE_INFINITY, this.timer&&(self.clearInterval(this.timer),
    this.timer=void 0)
  }
  getDimensions(){
    if(this.clientRect)return this.clientRect;
    const e=this.media, t={
      width:0, height:0
    };
    if(e){
      const s=e.getBoundingClientRect();
      t.width=s.width, t.height=s.height, !t.width&&!t.height&&(t.width=s.right-s.left||e.width||0, t.height=s.bottom-s.top||e.height||0)
    }
    return this.clientRect=t, t
  }
  get mediaWidth(){
    return this.getDimensions().width*this.contentScaleFactor
  }
  get mediaHeight(){
    return this.getDimensions().height*this.contentScaleFactor
  }
  get contentScaleFactor(){
    let e=1;
    if(!this.hls.config.ignoreDevicePixelRatio)try{
      e=self.devicePixelRatio
    }
    catch{

    }
    return Math.min(e, this.hls.config.maxDevicePixelRatio)
  }
  isLevelAllowed(e){
    return!this.restrictedLevels.some(s=>e.bitrate===s.bitrate&&e.width===s.width&&e.height===s.height)
  }
  static getMaxLevelByMediaSize(e, t, s){
    if(!(e!=null&&e.length))return-1;
    const n=(o, l)=>l?o.width!==l.width||o.height!==l.height:!0;
    let i=e.length-1;
    const a=Math.max(t, s);
    for(let o=0;
    o<e.length;
    o+=1){
      const l=e[o];
      if((l.width>=a||l.height>=a)&&n(l, e[o+1])){
        i=o;
        break
      }

    }
    return i
  }

}
const OI={
  MANIFEST:"m", AUDIO:"a", VIDEO:"v", MUXED:"av", INIT:"i", CAPTION:"c", TIMED_TEXT:"tt", KEY:"k", OTHER:"o"
}, rt=OI, MI={
  HLS:"h"
}, FI=MI;
class tr{
  constructor(e, t){
    Array.isArray(e)&&(e=e.map(s=>s instanceof tr?s:new tr(s))), this.value=e, this.params=t
  }

}
const UI="Dict";
function $I(r){
  return Array.isArray(r)?JSON.stringify(r):r instanceof Map?"Map{}":r instanceof Set?"Set{}":typeof r=="object"?JSON.stringify(r):String(r)
}
function BI(r, e, t, s){
  return new Error(`failed to ${r} "${$I(e)}" as ${t}`, {
    cause:s
  })
}
function rr(r, e, t){
  return BI("serialize", r, e, t)
}
class Vp{
  constructor(e){
    this.description=e
  }

}
const Mf="Bare Item", jI="Boolean";
function GI(r){
  if(typeof r!="boolean")throw rr(r, jI);
  return r?"?1":"?0"
}
function VI(r){
  return btoa(String.fromCharCode(...r))
}
const KI="Byte Sequence";
function HI(r){
  if(ArrayBuffer.isView(r)===!1)throw rr(r, KI);
  return`:${VI(r)}:`
}
const WI="Integer";
function zI(r){
  return r<-999999999999999||999999999999999<r
}
function Kp(r){
  if(zI(r))throw rr(r, WI);
  return r.toString()
}
function YI(r){
  return`@${Kp(r.getTime()/1e3)}`
}
function Hp(r, e){
  if(r<0)return-Hp(-r, e);
  const t=Math.pow(10, e);
  if(Math.abs(r*t%1-.5)<Number.EPSILON){
    const n=Math.floor(r*t);
    return(n%2===0?n:n+1)/t
  }
  else return Math.round(r*t)/t
}
const qI="Decimal";
function QI(r){
  const e=Hp(r, 3);
  if(Math.floor(Math.abs(e)).toString().length>12)throw rr(r, qI);
  const t=e.toString();
  return t.includes(".")?t:`${t}.0`
}
const XI="String", ZI=/[\x00-\x1f\x7f]+/;
function JI(r){
  if(ZI.test(r))throw rr(r, XI);
  return`"${r.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`
}
function eL(r){
  return r.description||r.toString().slice(7, -1)
}
const tL="Token";
function Ff(r){
  const e=eL(r);
  if(/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e)===!1)throw rr(e, tL);
  return e
}
function Uc(r){
  switch(typeof r){
    case"number":if(!G(r))throw rr(r, Mf);
    return Number.isInteger(r)?Kp(r):QI(r);
    case"string":return JI(r);
    case"symbol":return Ff(r);
    case"boolean":return GI(r);
    case"object":if(r instanceof Date)return YI(r);
    if(r instanceof Uint8Array)return HI(r);
    if(r instanceof Vp)return Ff(r);
    default:throw rr(r, Mf)
  }

}
const rL="Key";
function $c(r){
  if(/^[a-z*][a-z0-9\-_.*]*$/.test(r)===!1)throw rr(r, rL);
  return r
}
function dd(r){
  return r==null?"":Object.entries(r).map(([e, t])=>t===!0?`;${$c(e)}`:`;${$c(e)}=${Uc(t)}`).join("")
}
function Wp(r){
  return r instanceof tr?`${Uc(r.value)}${dd(r.params)}`:Uc(r)
}
function sL(r){
  return`(${r.value.map(Wp).join(" ")})${dd(r.params)}`
}
function nL(r, e={
  whitespace:!0
}){
  if(typeof r!="object"||r==null)throw rr(r, UI);
  const t=r instanceof Map?r.entries():Object.entries(r), s=e!=null&&e.whitespace?" ":"";
  return Array.from(t).map(([n, i])=>{
    i instanceof tr||(i=new tr(i));
    let a=$c(n);
    return i.value===!0?a+=dd(i.params):(a+="=", Array.isArray(i.value)?a+=sL(i):a+=Wp(i)), a
  }).join(`,${s}`)
}
function zp(r, e){
  return nL(r, e)
}
const Wt="CMCD-Object", Ae="CMCD-Request", es="CMCD-Session", Ar="CMCD-Status", iL={
  br:Wt, ab:Wt, d:Wt, ot:Wt, tb:Wt, tpb:Wt, lb:Wt, tab:Wt, lab:Wt, url:Wt, pb:Ae, bl:Ae, tbl:Ae, dl:Ae, ltc:Ae, mtp:Ae, nor:Ae,
  nrr:Ae, rc:Ae, sn:Ae, sta:Ae, su:Ae, ttfb:Ae, ttfbb:Ae, ttlb:Ae, cmsdd:Ae, cmsds:Ae, smrt:Ae, df:Ae, cs:Ae, ts:Ae, cid:es,
  pr:es, sf:es, sid:es, st:es, v:es, msd:es, bs:Ar, bsd:Ar, cdn:Ar, rtp:Ar, bg:Ar, pt:Ar, ec:Ar, e:Ar
}, aL={
  REQUEST:Ae
};
function oL(r){
  return Object.keys(r).reduce((e, t)=>{
    var s;
    return(s=r[t])===null||s===void 0||s.forEach(n=>e[n]=t), e
  }, {

  })
}
function lL(r, e){
  const t={

  };
  if(!r)return t;
  const s=Object.keys(r), n=e?oL(e):{

  };
  return s.reduce((i, a)=>{
    var o;
    const l=iL[a]||n[a]||aL.REQUEST, c=(o=i[l])!==null&&o!==void 0?o:i[l]={

    };
    return c[a]=r[a], i
  }, t)
}
function cL(r){
  return["ot", "sf", "st", "e", "sta"].includes(r)
}
function uL(r){
  return typeof r=="number"?G(r):r!=null&&r!==""&&r!==!1
}
const Yp="event";
function dL(r, e){
  const t=new URL(r), s=new URL(e);
  if(t.origin!==s.origin)return r;
  const n=t.pathname.split("/").slice(1), i=s.pathname.split("/").slice(1, -1);
  for(;
  n[0]===i[0];
  )n.shift(), i.shift();
  for(;
  i.length;
  )i.shift(), n.unshift("..");
  return n.join("/")+t.search+t.hash
}
const Ia=r=>Math.round(r), Bc=(r, e)=>Array.isArray(r)?r.map(t=>Bc(t, e)):r instanceof tr&&typeof r.value=="string"?new tr(Bc(r.value,
e), r.params):(e.baseUrl&&(r=dL(r, e.baseUrl)), e.version===1?encodeURIComponent(r):r), qi=r=>Ia(r/100)*100, hL=(r, e)=>{
  let t=r;
  return e.version>=2&&(r instanceof tr&&typeof r.value=="string"?t=new tr([r]):typeof r=="string"&&(t=[r])), Bc(t, e)
}, fL={
  br:Ia, d:Ia, bl:qi, dl:qi, mtp:qi, nor:hL, rtp:qi, tb:Ia
}, qp="request", Qp="response", hd=["ab", "bg", "bl", "br", "bs", "bsd", "cdn", "cid", "cs", "df", "ec", "lab", "lb", "ltc",
"msd", "mtp", "pb", "pr", "pt", "sf", "sid", "sn", "st", "sta", "tab", "tb", "tbl", "tpb", "ts", "v"], mL=["e"], gL=/^[a-zA-Z0-9-.]+-[a-zA-Z0-9-.]+$/;
function _o(r){
  return gL.test(r)
}
function pL(r){
  return hd.includes(r)||mL.includes(r)||_o(r)
}
const Xp=["d", "dl", "nor", "ot", "rtp", "su"];
function yL(r){
  return hd.includes(r)||Xp.includes(r)||_o(r)
}
const vL=["cmsdd", "cmsds", "rc", "smrt", "ttfb", "ttfbb", "ttlb", "url"];
function xL(r){
  return hd.includes(r)||Xp.includes(r)||vL.includes(r)||_o(r)
}
const EL=["bl", "br", "bs", "cid", "d", "dl", "mtp", "nor", "nrr", "ot", "pr", "rtp", "sf", "sid", "st", "su", "tb", "v"];
function SL(r){
  return EL.includes(r)||_o(r)
}
const TL={
  [Qp]:xL, [Yp]:pL, [qp]:yL
};
function Zp(r, e={

}){
  const t={

  };
  if(r==null||typeof r!="object")return t;
  const s=e.version||r.v||1, n=e.reportingMode||qp, i=s===1?SL:TL[n];
  let a=Object.keys(r).filter(i);
  const o=e.filter;
  typeof o=="function"&&(a=a.filter(o));
  const l=n===Qp||n===Yp;
  l&&!a.includes("ts")&&a.push("ts"), s>1&&!a.includes("v")&&a.push("v");
  const c=he({

  }, fL, e.formatters), u={
    version:s, reportingMode:n, baseUrl:e.baseUrl
  };
  return a.sort().forEach(d=>{
    let h=r[d];
    const f=c[d];
    if(typeof f=="function"&&(h=f(h, u)), d==="v"){
      if(s===1)return;
      h=s
    }
    d=="pr"&&h===1||(l&&d==="ts"&&!G(h)&&(h=Date.now()), uL(h)&&(cL(d)&&typeof h=="string"&&(h=new Vp(h)), t[d]=h))
  }), t
}
function IL(r, e={

}){
  const t={

  };
  if(!r)return t;
  const s=Zp(r, e), n=lL(s, e==null?void 0:e.customHeaderMap);
  return Object.entries(n).reduce((i, [a, o])=>{
    const l=zp(o, {
      whitespace:!1
    });
    return l&&(i[a]=l), i
  }, t)
}
function LL(r, e, t){
  return he(r, IL(e, t))
}
const AL="CMCD";
function RL(r, e={

}){
  return r?zp(Zp(r, e), {
    whitespace:!1
  }):""
}
function wL(r, e={

}){
  if(!r)return"";
  const t=RL(r, e);
  return encodeURIComponent(t)
}
function bL(r, e={

}){
  if(!r)return"";
  const t=wL(r, e);
  return`${AL}=${t}`
}
const Uf=/CMCD=[^&#]+/;
function _L(r, e, t){
  const s=bL(e, t);
  if(!s)return r;
  if(Uf.test(r))return r.replace(Uf, s);
  const n=r.includes("?")?"&":"?";
  return`${r}${n}${s}`
}
class kL{
  constructor(e){
    this.hls=void 0, this.config=void 0, this.media=void 0, this.sid=void 0, this.cid=void 0, this.useHeaders=!1, this.includeKeys=void 0,
    this.initialized=!1, this.starved=!1, this.buffering=!0, this.audioBuffer=void 0, this.videoBuffer=void 0, this.onWaiting=()=>{
      this.initialized&&(this.starved=!0), this.buffering=!0
    }, this.onPlaying=()=>{
      this.initialized||(this.initialized=!0), this.buffering=!1
    }, this.applyPlaylistData=n=>{
      try{
        this.apply(n, {
          ot:rt.MANIFEST, su:!this.initialized
        })
      }
      catch(i){
        this.hls.logger.warn("Could not generate manifest CMCD data.", i)
      }

    }, this.applyFragmentData=n=>{
      try{
        const{
          frag:i, part:a
        }
        =n, o=this.hls.levels[i.level], l=this.getObjectType(i), c={
          d:(a||i).duration*1e3, ot:l
        };
        (l===rt.VIDEO||l===rt.AUDIO||l==rt.MUXED)&&(c.br=o.bitrate/1e3, c.tb=this.getTopBandwidth(l)/1e3, c.bl=this.getBufferLength(l));
        const u=a?this.getNextPart(a):this.getNextFrag(i);
        u!=null&&u.url&&u.url!==i.url&&(c.nor=u.url), this.apply(n, c)
      }
      catch(i){
        this.hls.logger.warn("Could not generate segment CMCD data.", i)
      }

    }, this.hls=e;
    const t=this.config=e.config, {
      cmcd:s
    }
    =t;
    s!=null&&(t.pLoader=this.createPlaylistLoader(), t.fLoader=this.createFragmentLoader(), this.sid=s.sessionId||e.sessionId,
    this.cid=s.contentId, this.useHeaders=s.useHeaders===!0, this.includeKeys=s.includeKeys, this.registerListeners())
  }
  registerListeners(){
    const e=this.hls;
    e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHED, this.onMediaDetached, this), e.on(S.BUFFER_CREATED,
    this.onBufferCreated, this)
  }
  unregisterListeners(){
    const e=this.hls;
    e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHED, this.onMediaDetached, this), e.off(S.BUFFER_CREATED,
    this.onBufferCreated, this)
  }
  destroy(){
    this.unregisterListeners(), this.onMediaDetached(), this.hls=this.config=this.audioBuffer=this.videoBuffer=null, this.onWaiting=this.onPlaying=this.media=null
  }
  onMediaAttached(e, t){
    this.media=t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
  }
  onMediaDetached(){
    this.media&&(this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying),
    this.media=null)
  }
  onBufferCreated(e, t){
    var s, n;
    this.audioBuffer=(s=t.tracks.audio)==null?void 0:s.buffer, this.videoBuffer=(n=t.tracks.video)==null?void 0:n.buffer
  }
  createData(){
    var e;
    return{
      v:1, sf:FI.HLS, sid:this.sid, cid:this.cid, pr:(e=this.media)==null?void 0:e.playbackRate, mtp:this.hls.bandwidthEstimate/1e3
    }

  }
  apply(e, t={

  }){
    he(t, this.createData());
    const s=t.ot===rt.INIT||t.ot===rt.VIDEO||t.ot===rt.MUXED;
    this.starved&&s&&(t.bs=!0, t.su=!0, this.starved=!1), t.su==null&&(t.su=this.buffering);
    const{
      includeKeys:n
    }
    =this;
    n&&(t=Object.keys(t).reduce((a, o)=>(n.includes(o)&&(a[o]=t[o]), a), {

    }));
    const i={
      baseUrl:e.url
    };
    this.useHeaders?(e.headers||(e.headers={

    }), LL(e.headers, t, i)):e.url=_L(e.url, t, i)
  }
  getNextFrag(e){
    var t;
    const s=(t=this.hls.levels[e.level])==null?void 0:t.details;
    if(s){
      const n=e.sn-s.startSN;
      return s.fragments[n+1]
    }

  }
  getNextPart(e){
    var t;
    const{
      index:s, fragment:n
    }
    =e, i=(t=this.hls.levels[n.level])==null||(t=t.details)==null?void 0:t.partList;
    if(i){
      const{
        sn:a
      }
      =n;
      for(let o=i.length-1;
      o>=0;
      o--){
        const l=i[o];
        if(l.index===s&&l.fragment.sn===a)return i[o+1]
      }

    }

  }
  getObjectType(e){
    const{
      type:t
    }
    =e;
    if(t==="subtitle")return rt.TIMED_TEXT;
    if(e.sn==="initSegment")return rt.INIT;
    if(t==="audio")return rt.AUDIO;
    if(t==="main")return this.hls.audioTracks.length?rt.VIDEO:rt.MUXED
  }
  getTopBandwidth(e){
    let t=0, s;
    const n=this.hls;
    if(e===rt.AUDIO)s=n.audioTracks;
    else{
      const i=n.maxAutoLevel, a=i>-1?i+1:n.levels.length;
      s=n.levels.slice(0, a)
    }
    return s.forEach(i=>{
      i.bitrate>t&&(t=i.bitrate)
    }), t>0?t:NaN
  }
  getBufferLength(e){
    const t=this.media, s=e===rt.AUDIO?this.audioBuffer:this.videoBuffer;
    return!s||!t?NaN:Z.bufferInfo(s, t.currentTime, this.config.maxBufferHole).len*1e3
  }
  createPlaylistLoader(){
    const{
      pLoader:e
    }
    =this.config, t=this.applyPlaylistData, s=e||this.config.loader;
    return class{
      constructor(i){
        this.loader=void 0, this.loader=new s(i)
      }
      get stats(){
        return this.loader.stats
      }
      get context(){
        return this.loader.context
      }
      destroy(){
        this.loader.destroy()
      }
      abort(){
        this.loader.abort()
      }
      load(i, a, o){
        t(i), this.loader.load(i, a, o)
      }

    }

  }
  createFragmentLoader(){
    const{
      fLoader:e
    }
    =this.config, t=this.applyFragmentData, s=e||this.config.loader;
    return class{
      constructor(i){
        this.loader=void 0, this.loader=new s(i)
      }
      get stats(){
        return this.loader.stats
      }
      get context(){
        return this.loader.context
      }
      destroy(){
        this.loader.destroy()
      }
      abort(){
        this.loader.abort()
      }
      load(i, a, o){
        t(i), this.loader.load(i, a, o)
      }

    }

  }

}
const CL=3e5;
class DL extends Ct{
  constructor(e){
    super("content-steering", e.logger), this.hls=void 0, this.loader=null, this.uri=null, this.pathwayId=".", this._pathwayPriority=null,
    this.timeToLoad=300, this.reloadTimer=-1, this.updated=0, this.started=!1, this.enabled=!0, this.levels=null, this.audioTracks=null,
    this.subtitleTracks=null, this.penalizedPathways={

    }, this.hls=e, this.registerListeners()
  }
  registerListeners(){
    const e=this.hls;
    e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(S.MANIFEST_PARSED,
    this.onManifestParsed, this), e.on(S.ERROR, this.onError, this)
  }
  unregisterListeners(){
    const e=this.hls;
    e&&(e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(S.MANIFEST_PARSED,
    this.onManifestParsed, this), e.off(S.ERROR, this.onError, this))
  }
  pathways(){
    return(this.levels||[]).reduce((e, t)=>(e.indexOf(t.pathwayId)===-1&&e.push(t.pathwayId), e), [])
  }
  get pathwayPriority(){
    return this._pathwayPriority
  }
  set pathwayPriority(e){
    this.updatePathwayPriority(e)
  }
  startLoad(){
    if(this.started=!0, this.clearTimeout(), this.enabled&&this.uri){
      if(this.updated){
        const e=this.timeToLoad*1e3-(performance.now()-this.updated);
        if(e>0){
          this.scheduleRefresh(this.uri, e);
          return
        }

      }
      this.loadSteeringManifest(this.uri)
    }

  }
  stopLoad(){
    this.started=!1, this.loader&&(this.loader.destroy(), this.loader=null), this.clearTimeout()
  }
  clearTimeout(){
    this.reloadTimer!==-1&&(self.clearTimeout(this.reloadTimer), this.reloadTimer=-1)
  }
  destroy(){
    this.unregisterListeners(), this.stopLoad(), this.hls=null, this.levels=this.audioTracks=this.subtitleTracks=null
  }
  removeLevel(e){
    const t=this.levels;
    t&&(this.levels=t.filter(s=>s!==e))
  }
  onManifestLoading(){
    this.stopLoad(), this.enabled=!0, this.timeToLoad=300, this.updated=0, this.uri=null, this.pathwayId=".", this.levels=this.audioTracks=this.subtitleTracks=null
  }
  onManifestLoaded(e, t){
    const{
      contentSteering:s
    }
    =t;
    s!==null&&(this.pathwayId=s.pathwayId, this.uri=s.uri, this.started&&this.startLoad())
  }
  onManifestParsed(e, t){
    this.audioTracks=t.audioTracks, this.subtitleTracks=t.subtitleTracks
  }
  onError(e, t){
    const{
      errorAction:s
    }
    =t;
    if((s==null?void 0:s.action)===Be.SendAlternateToPenaltyBox&&s.flags===ut.MoveAllAlternatesMatchingHost){
      const n=this.levels;
      let i=this._pathwayPriority, a=this.pathwayId;
      if(t.context){
        const{
          groupId:o, pathwayId:l, type:c
        }
        =t.context;
        o&&n?a=this.getPathwayForGroupId(o, c, a):l&&(a=l)
      }
      a in this.penalizedPathways||(this.penalizedPathways[a]=performance.now()), !i&&n&&(i=this.pathways()), i&&i.length>1&&(this.updatePathwayPriority(i),
      s.resolved=this.pathwayId!==a), t.details===k.BUFFER_APPEND_ERROR&&!t.fatal?s.resolved=!0:s.resolved||this.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${a} levels: ${n&&n.length} priorities: ${me(i)} penalized: ${me(this.penalizedPathways)}`)

    }

  }
  filterParsedLevels(e){
    this.levels=e;
    let t=this.getLevelsForPathway(this.pathwayId);
    if(t.length===0){
      const s=e[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), t=this.getLevelsForPathway(s),
      this.pathwayId=s
    }
    return t.length!==e.length&&this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t
  }
  getLevelsForPathway(e){
    return this.levels===null?[]:this.levels.filter(t=>e===t.pathwayId)
  }
  updatePathwayPriority(e){
    this._pathwayPriority=e;
    let t;
    const s=this.penalizedPathways, n=performance.now();
    Object.keys(s).forEach(i=>{
      n-s[i]>CL&&delete s[i]
    });
    for(let i=0;
    i<e.length;
    i++){
      const a=e[i];
      if(a in s)continue;
      if(a===this.pathwayId)return;
      const o=this.hls.nextLoadLevel, l=this.hls.levels[o];
      if(t=this.getLevelsForPathway(a), t.length>0){
        this.log(`Setting Pathway to "${a}"`), this.pathwayId=a, vp(t), this.hls.trigger(S.LEVELS_UPDATED, {
          levels:t
        });
        const c=this.hls.levels[o];
        l&&c&&this.levels&&(c.attrs["STABLE-VARIANT-ID"]!==l.attrs["STABLE-VARIANT-ID"]&&c.bitrate!==l.bitrate&&this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${c.bitrate}`)
        , this.hls.nextLoadLevel=o);
        break
      }

    }

  }
  getPathwayForGroupId(e, t, s){
    const n=this.getLevelsForPathway(s).concat(this.levels||[]);
    for(let i=0;
    i<n.length;
    i++)if(t===ne.AUDIO_TRACK&&n[i].hasAudioGroup(e)||t===ne.SUBTITLE_TRACK&&n[i].hasSubtitleGroup(e))return n[i].pathwayId;
    return s
  }
  clonePathways(e){
    const t=this.levels;
    if(!t)return;
    const s={

    }, n={

    };
    e.forEach(i=>{
      const{
        ID:a, "BASE-ID":o, "URI-REPLACEMENT":l
      }
      =i;
      if(t.some(u=>u.pathwayId===a))return;
      const c=this.getLevelsForPathway(o).map(u=>{
        const d=new xe(u.attrs);
        d["PATHWAY-ID"]=a;
        const h=d.AUDIO&&`${d.AUDIO}_clone_${a}`, f=d.SUBTITLES&&`${d.SUBTITLES}_clone_${a}`;
        h&&(s[d.AUDIO]=h, d.AUDIO=h), f&&(n[d.SUBTITLES]=f, d.SUBTITLES=f);
        const g=Jp(u.uri, d["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l), y=new li({
          attrs:d, audioCodec:u.audioCodec, bitrate:u.bitrate, height:u.height, name:u.name, url:g, videoCodec:u.videoCodec,
          width:u.width
        });
        if(u.audioGroups)for(let x=1;
        x<u.audioGroups.length;
        x++)y.addGroupId("audio", `${u.audioGroups[x]}_clone_${a}`);
        if(u.subtitleGroups)for(let x=1;
        x<u.subtitleGroups.length;
        x++)y.addGroupId("text", `${u.subtitleGroups[x]}_clone_${a}`);
        return y
      });
      t.push(...c), $f(this.audioTracks, s, l, a), $f(this.subtitleTracks, n, l, a)
    })
  }
  loadSteeringManifest(e){
    const t=this.hls.config, s=t.loader;
    this.loader&&this.loader.destroy(), this.loader=new s(t);
    let n;
    try{
      n=new self.URL(e)
    }
    catch{
      this.enabled=!1, this.log(`Failed to parse Steering Manifest URI: ${e}`);
      return
    }
    if(n.protocol!=="data:"){
      const u=(this.hls.bandwidthEstimate||t.abrEwmaDefaultEstimate)|0;
      n.searchParams.set("_HLS_pathway", this.pathwayId), n.searchParams.set("_HLS_throughput", ""+u)
    }
    const i={
      responseType:"json", url:n.href
    }, a=t.steeringManifestLoadPolicy.default, o=a.errorRetry||a.timeoutRetry||{

    }, l={
      loadPolicy:a, timeout:a.maxLoadTimeMs, maxRetry:o.maxNumRetry||0, retryDelay:o.retryDelayMs||0, maxRetryDelay:o.maxRetryDelayMs||0
    }, c={
      onSuccess:(u, d, h, f)=>{
        this.log(`Loaded steering manifest: "${n}"`);
        const g=u.data;
        if((g==null?void 0:g.VERSION)!==1){
          this.log(`Steering VERSION ${g.VERSION} not supported!`);
          return
        }
        this.updated=performance.now(), this.timeToLoad=g.TTL;
        const{
          "RELOAD-URI":y, "PATHWAY-CLONES":x, "PATHWAY-PRIORITY":p
        }
        =g;
        if(y)try{
          this.uri=new self.URL(y, n).href
        }
        catch{
          this.enabled=!1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${y}`);
          return
        }
        this.scheduleRefresh(this.uri||h.url), x&&this.clonePathways(x);
        const v={
          steeringManifest:g, url:n.toString()
        };
        this.hls.trigger(S.STEERING_MANIFEST_LOADED, v), p&&this.updatePathwayPriority(p)
      }, onError:(u, d, h, f)=>{
        if(this.log(`Error loading steering manifest: ${u.code} ${u.text} (${d.url})`), this.stopLoad(), u.code===410){
          this.enabled=!1, this.log(`Steering manifest ${d.url} no longer available`);
          return
        }
        let g=this.timeToLoad*1e3;
        if(u.code===429){
          const y=this.loader;
          if(typeof(y==null?void 0:y.getResponseHeader)=="function"){
            const x=y.getResponseHeader("Retry-After");
            x&&(g=parseFloat(x)*1e3)
          }
          this.log(`Steering manifest ${d.url} rate limited`);
          return
        }
        this.scheduleRefresh(this.uri||d.url, g)
      }, onTimeout:(u, d, h)=>{
        this.log(`Timeout loading steering manifest (${d.url})`), this.scheduleRefresh(this.uri||d.url)
      }

    };
    this.log(`Requesting steering manifest: ${n}`), this.loader.load(i, l, c)
  }
  scheduleRefresh(e, t=this.timeToLoad*1e3){
    this.clearTimeout(), this.reloadTimer=self.setTimeout(()=>{
      var s;
      const n=(s=this.hls)==null?void 0:s.media;
      if(n&&!n.ended){
        this.loadSteeringManifest(e);
        return
      }
      this.scheduleRefresh(e, this.timeToLoad*1e3)
    }, t)
  }

}
function $f(r, e, t, s){
  r&&Object.keys(e).forEach(n=>{
    const i=r.filter(a=>a.groupId===n).map(a=>{
      const o=he({

      }, a);
      return o.details=void 0, o.attrs=new xe(o.attrs), o.url=o.attrs.URI=Jp(a.url, a.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS",
      t), o.groupId=o.attrs["GROUP-ID"]=e[n], o.attrs["PATHWAY-ID"]=s, o
    });
    r.push(...i)
  })
}
function Jp(r, e, t, s){
  const{
    HOST:n, PARAMS:i, [t]:a
  }
  =s;
  let o;
  e&&(o=a==null?void 0:a[e], o&&(r=o));
  const l=new self.URL(r);
  return n&&!o&&(l.host=n), i&&Object.keys(i).sort().forEach(c=>{
    c&&l.searchParams.set(c, i[c])
  }), l.href
}
class Qs extends Ct{
  constructor(e){
    super("eme", e.logger), this.hls=void 0, this.config=void 0, this.media=null, this.mediaResolved=void 0, this.keyFormatPromise=null,
    this.keySystemAccessPromises={

    }, this._requestLicenseFailureCount=0, this.mediaKeySessions=[], this.keyIdToKeySessionPromise={

    }, this.mediaKeys=null, this.setMediaKeysQueue=Qs.CDMCleanupPromise?[Qs.CDMCleanupPromise]:[], this.bannedKeyIds={

    }, this.onMediaEncrypted=t=>{
      const{
        initDataType:s, initData:n
      }
      =t, i=`"${t.type}" event: init data type: "${s}"`;
      if(this.debug(i), n!==null){
        if(!this.keyFormatPromise){
          let a=Object.keys(this.keySystemAccessPromises);
          a.length||(a=_n(this.config));
          const o=a.map(ul).filter(l=>!!l);
          this.keyFormatPromise=this.getKeyFormatPromise(o)
        }
        this.keyFormatPromise.then(a=>{
          const o=Ea(a);
          if(s!=="sinf"||o!==Se.FAIRPLAY){
            this.log(`Ignoring "${t.type}" event with init data type: "${s}" for selected key-system ${o}`);
            return
          }
          let l;
          try{
            const f=Ce(new Uint8Array(n)), g=ed(JSON.parse(f).sinf), y=zg(g);
            if(!y)throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");
            l=new Uint8Array(y.subarray(8, 24))
          }
          catch(f){
            this.warn(`${i} Failed to parse sinf: ${f}`);
            return
          }
          const c=je(l), {
            keyIdToKeySessionPromise:u, mediaKeySessions:d
          }
          =this;
          let h=u[c];
          for(let f=0;
          f<d.length;
          f++){
            const g=d[f], y=g.decryptdata;
            if(!y.keyId)continue;
            const x=je(y.keyId);
            if(so(l, y.keyId)||y.uri.replace(/-/g, "").indexOf(c)!==-1){
              if(h=u[x], !h)continue;
              if(y.pssh)break;
              delete u[x], y.pssh=new Uint8Array(n), y.keyId=l, h=u[c]=h.then(()=>this.generateRequestWithPreferredKeySession(g,
              s, n, "encrypted-event-key-match")), h.catch(p=>this.handleError(p));
              break
            }

          }
          h||this.handleError(new Error(`Key ID ${c} not encountered in playlist. Key-system sessions ${d.length}.`))
        }).catch(a=>this.handleError(a))
      }

    }, this.onWaitingForKey=t=>{
      this.log(`"${t.type}" event`)
    }, this.hls=e, this.config=e.config, this.registerListeners()
  }
  destroy(){
    this.onDestroying(), this.onMediaDetached();
    const e=this.config;
    e.requestMediaKeySystemAccessFunc=null, e.licenseXhrSetup=e.licenseResponseCallback=void 0, e.drmSystems=e.drmSystemOptions={

    }, this.hls=this.config=this.keyIdToKeySessionPromise=null, this.onMediaEncrypted=this.onWaitingForKey=null
  }
  registerListeners(){
    this.hls.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(S.MEDIA_DETACHED, this.onMediaDetached, this),
    this.hls.on(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(S.MANIFEST_LOADED, this.onManifestLoaded, this),
    this.hls.on(S.DESTROYING, this.onDestroying, this)
  }
  unregisterListeners(){
    this.hls.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(S.MEDIA_DETACHED, this.onMediaDetached, this),
    this.hls.off(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(S.MANIFEST_LOADED, this.onManifestLoaded,
    this), this.hls.off(S.DESTROYING, this.onDestroying, this)
  }
  getLicenseServerUrl(e){
    const{
      drmSystems:t, widevineLicenseUrl:s
    }
    =this.config, n=t==null?void 0:t[e];
    if(n)return n.licenseUrl;
    if(e===Se.WIDEVINE&&s)return s
  }
  getLicenseServerUrlOrThrow(e){
    const t=this.getLicenseServerUrl(e);
    if(t===void 0)throw new Error(`no license server URL configured for key-system "${e}"`);
    return t
  }
  getServerCertificateUrl(e){
    const{
      drmSystems:t
    }
    =this.config, s=t==null?void 0:t[e];
    if(s)return s.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${e}"]`)
  }
  attemptKeySystemAccess(e){
    const t=this.hls.levels, s=(a, o, l)=>!!a&&l.indexOf(a)===o, n=t.map(a=>a.audioCodec).filter(s), i=t.map(a=>a.videoCodec).filter(s);
    return n.length+i.length===0&&i.push("avc1.42e01e"), new Promise((a, o)=>{
      const l=c=>{
        const u=c.shift();
        this.getMediaKeysPromise(u, n, i).then(d=>a({
          keySystem:u, mediaKeys:d
        })).catch(d=>{
          c.length?l(c):d instanceof ct?o(d):o(new ct({
            type:q.KEY_SYSTEM_ERROR, details:k.KEY_SYSTEM_NO_ACCESS, error:d, fatal:!0
          }, d.message))
        })
      };
      l(e)
    })
  }
  requestMediaKeySystemAccess(e, t){
    const{
      requestMediaKeySystemAccessFunc:s
    }
    =this.config;
    if(typeof s!="function"){
      let n=`Configured requestMediaKeySystemAccess is not a function ${s}`;
      return up===null&&self.location.protocol==="http:"&&(n=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),
      Promise.reject(new Error(n))
    }
    return s(e, t)
  }
  getMediaKeysPromise(e, t, s){
    var n;
    const i=hT(e, t, s, this.config.drmSystemOptions||{

    });
    let a=this.keySystemAccessPromises[e], o=(n=a)==null?void 0:n.keySystemAccess;
    if(!o){
      this.log(`Requesting encrypted media "${e}" key-system access with config: ${me(i)}`), o=this.requestMediaKeySystemAccess(e,
      i);
      const l=a=this.keySystemAccessPromises[e]={
        keySystemAccess:o
      };
      return o.catch(c=>{
        this.log(`Failed to obtain access to key-system "${e}": ${c}`)
      }), o.then(c=>{
        this.log(`Access for key-system "${c.keySystem}" obtained`);
        const u=this.fetchServerCertificate(e);
        this.log(`Create media-keys for "${e}"`);
        const d=l.mediaKeys=c.createMediaKeys().then(h=>(this.log(`Media-keys created for "${e}"`), l.hasMediaKeys=!0, u.then(f=>f?this.setMediaKeysServerCertificate(h,
        e, f):h)));
        return d.catch(h=>{
          this.error(`Failed to create media-keys for "${e}"}: ${h}`)
        }), d
      })
    }
    return o.then(()=>a.mediaKeys)
  }
  createMediaKeySessionContext({
    decryptdata:e, keySystem:t, mediaKeys:s
  }){
    this.log(`Creating key-system session "${t}" keyId: ${je(e.keyId||[])} keyUri: ${e.uri}`);
    const n=s.createSession(), i={
      decryptdata:e, keySystem:t, mediaKeys:s, mediaKeysSession:n, keyStatus:"status-pending"
    };
    return this.mediaKeySessions.push(i), i
  }
  renewKeySession(e){
    const t=e.decryptdata;
    if(t.pssh){
      const s=this.createMediaKeySessionContext(e), n=Qi(t), i="cenc";
      this.keyIdToKeySessionPromise[n]=this.generateRequestWithPreferredKeySession(s, i, t.pssh.buffer, "expired")
    }
    else this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e)
  }
  updateKeySession(e, t){
    const s=e.mediaKeysSession;
    return this.log(`Updating key-session "${s.sessionId}" for keyId ${je(e.decryptdata.keyId||[])}
      } (data length: ${t.byteLength})`), s.update(t)
  }
  getSelectedKeySystemFormats(){
    return Object.keys(this.keySystemAccessPromises).map(e=>({
      keySystem:e, hasMediaKeys:this.keySystemAccessPromises[e].hasMediaKeys
    })).filter(({
      hasMediaKeys:e
    })=>!!e).map(({
      keySystem:e
    })=>ul(e)).filter(e=>!!e)
  }
  getKeySystemAccess(e){
    return this.getKeySystemSelectionPromise(e).then(({
      keySystem:t, mediaKeys:s
    })=>this.attemptSetMediaKeys(t, s))
  }
  selectKeySystem(e){
    return new Promise((t, s)=>{
      this.getKeySystemSelectionPromise(e).then(({
        keySystem:n
      })=>{
        const i=ul(n);
        i?t(i):s(new Error(`Unable to find format for key-system "${n}"`))
      }).catch(s)
    })
  }
  selectKeySystemFormat(e){
    const t=Object.keys(e.levelkeys||{

    });
    return this.keyFormatPromise||(this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`),
    this.keyFormatPromise=this.getKeyFormatPromise(t)), this.keyFormatPromise
  }
  getKeyFormatPromise(e){
    const t=_n(this.config), s=e.map(Ea).filter(n=>!!n&&t.indexOf(n)!==-1);
    return this.selectKeySystem(s)
  }
  getKeyStatus(e){
    const{
      mediaKeySessions:t
    }
    =this;
    for(let s=0;
    s<t.length;
    s++){
      const n=PL(e, t[s]);
      if(n)return n
    }

  }
  loadKey(e){
    const t=e.keyInfo.decryptdata, s=Qi(t), n=this.bannedKeyIds[s];
    if(n||this.getKeyStatus(t)==="internal-error"){
      const o=Bf(n||"internal-error", t);
      return this.handleError(o, e.frag), Promise.reject(o)
    }
    const i=`(keyId: ${s} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${i}`);
    const a=this.keyIdToKeySessionPromise[s];
    if(!a){
      const o=this.getKeySystemForKeyPromise(t).then(({
        keySystem:l, mediaKeys:c
      })=>(this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`),
      this.attemptSetMediaKeys(l, c).then(()=>(this.throwIfDestroyed(), this.createMediaKeySessionContext({
        keySystem:l, mediaKeys:c, decryptdata:t
      }))))).then(l=>{
        const c="cenc", u=t.pssh?t.pssh.buffer:null;
        return this.generateRequestWithPreferredKeySession(l, c, u, "playlist-key")
      });
      return o.catch(l=>this.handleError(l, e.frag)), this.keyIdToKeySessionPromise[s]=o, o
    }
    return a.catch(o=>{
      if(o instanceof ct){
        const l=ce({

        }, o.data);
        this.getKeyStatus(t)==="internal-error"&&(l.decryptdata=t);
        const c=new ct(l, o.message);
        this.handleError(c, e.frag)
      }

    }), a
  }
  throwIfDestroyed(e="Invalid state"){
    if(!this.hls)throw new Error("invalid state")
  }
  handleError(e, t){
    if(this.hls)if(e instanceof ct){
      t&&(e.data.frag=t);
      const s=e.data.decryptdata;
      this.error(`${e.message}${s?` (${
        je(s.keyId||[])
      })`:""}`), this.hls.trigger(S.ERROR, e.data)
    }
    else this.error(e.message), this.hls.trigger(S.ERROR, {
      type:q.KEY_SYSTEM_ERROR, details:k.KEY_SYSTEM_NO_KEYS, error:e, fatal:!0
    })
  }
  getKeySystemForKeyPromise(e){
    const t=Qi(e), s=this.keyIdToKeySessionPromise[t];
    if(!s){
      const n=Ea(e.keyFormat), i=n?[n]:_n(this.config);
      return this.attemptKeySystemAccess(i)
    }
    return s
  }
  getKeySystemSelectionPromise(e){
    if(e.length||(e=_n(this.config)), e.length===0)throw new ct({
      type:q.KEY_SYSTEM_ERROR, details:k.KEY_SYSTEM_NO_CONFIGURED_LICENSE, fatal:!0
    }, `Missing key-system license configuration options ${me({drmSystems:this.config.drmSystems})}`);
    return this.attemptKeySystemAccess(e)
  }
  attemptSetMediaKeys(e, t){
    if(this.mediaResolved=void 0, this.mediaKeys===t)return Promise.resolve();
    const s=this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${e}"`);
    const n=Promise.all(s).then(()=>this.media?this.media.setMediaKeys(t):new Promise((i, a)=>{
      this.mediaResolved=()=>{
        if(this.mediaResolved=void 0, !this.media)return a(new Error("Attempted to set mediaKeys without media element attached"));
        this.mediaKeys=t, this.media.setMediaKeys(t).then(i).catch(a)
      }

    }));
    return this.mediaKeys=t, this.setMediaKeysQueue.push(n), n.then(()=>{
      this.log(`Media-keys set for "${e}"`), s.push(n), this.setMediaKeysQueue=this.setMediaKeysQueue.filter(i=>s.indexOf(i)===-1)
    })
  }
  generateRequestWithPreferredKeySession(e, t, s, n){
    var i;
    const a=(i=this.config.drmSystems)==null||(i=i[e.keySystem])==null?void 0:i.generateRequest;
    if(a)try{
      const g=a.call(this.hls, t, s, e);
      if(!g)throw new Error("Invalid response from configured generateRequest filter");
      t=g.initDataType, s=g.initData?g.initData:null, e.decryptdata.pssh=s?new Uint8Array(s):null
    }
    catch(g){
      if(this.warn(g.message), this.hls&&this.hls.config.debug)throw g
    }
    if(s===null)return this.log(`Skipping key-session request for "${n}" (no initData)`), Promise.resolve(e);
    const o=Qi(e.decryptdata), l=e.decryptdata.uri;
    this.log(`Generating key-session request for "${n}" keyId: ${o} URI: ${l} (init data type: ${t} length: ${s.byteLength})`);
    const c=new rd, u=e._onmessage=g=>{
      const y=e.mediaKeysSession;
      if(!y){
        c.emit("error", new Error("invalid state"));
        return
      }
      const{
        messageType:x, message:p
      }
      =g;
      this.log(`"${x}" message event for session "${y.sessionId}" message size: ${p.byteLength}`), x==="license-request"||x==="license-renewal"?this.renewLicense(e,
      p).catch(v=>{
        c.eventNames().length?c.emit("error", v):this.handleError(v)
      }):x==="license-release"?e.keySystem===Se.FAIRPLAY&&this.updateKeySession(e, Dc("acknowledged")).then(()=>this.removeSession(e)).catch(v=>this.handleError(v)):this.warn(`unhandled media key message type "${x}"`)

    }, d=(g, y)=>{
      y.keyStatus=g;
      let x;
      g.startsWith("usable")?c.emit("resolved"):g==="internal-error"||g==="output-restricted"||g==="output-downscaled"?x=Bf(g,
      y.decryptdata):g==="expired"?x=new Error(`key expired (keyId: ${o})`):g==="released"?x=new Error("key released"):g==="status-pending"||this.warn(`unhandled key status change "${g}" (keyId: ${o})`)
      , x&&(c.eventNames().length?c.emit("error", x):this.handleError(x))
    }, h=e._onkeystatuseschange=g=>{
      if(!e.mediaKeysSession){
        c.emit("error", new Error("invalid state"));
        return
      }
      const x=this.getKeyStatuses(e);
      if(!Object.keys(x).some(T=>x[T]!=="status-pending"))return;
      if(x[o]==="expired"){
        this.log(`Expired key ${me(x)} in key-session "${e.mediaKeysSession.sessionId}"`), this.renewKeySession(e);
        return
      }
      let v=x[o];
      if(v)d(v, e);
      else{
        var E;
        e.keyStatusTimeouts||(e.keyStatusTimeouts={

        }), (E=e.keyStatusTimeouts)[o]||(E[o]=self.setTimeout(()=>{
          if(!e.mediaKeysSession||!this.mediaKeys)return;
          const I=this.getKeyStatus(e.decryptdata);
          if(I&&I!=="status-pending")return this.log(`No status for keyId ${o} in key-session "${e.mediaKeysSession.sessionId}". Using session key-status ${I} from other session.`),
          d(I, e);
          this.log(`key status for ${o} in key-session "${e.mediaKeysSession.sessionId}" timed out after 1000ms`), v="internal-error",
          d(v, e)
        }, 1e3)), this.log(`No status for keyId ${o} (${me(x)}).`)
      }

    };
    Ze(e.mediaKeysSession, "message", u), Ze(e.mediaKeysSession, "keystatuseschange", h);
    const f=new Promise((g, y)=>{
      c.on("error", y), c.on("resolved", g)
    });
    return e.mediaKeysSession.generateRequest(t, s).then(()=>{
      this.log(`Request generated for key-session "${e.mediaKeysSession.sessionId}" keyId: ${o} URI: ${l}`)
    }).catch(g=>{
      throw new ct({
        type:q.KEY_SYSTEM_ERROR, details:k.KEY_SYSTEM_NO_SESSION, error:g, decryptdata:e.decryptdata, fatal:!1
      }, `Error generating key-session request: ${g}`)
    }).then(()=>f).catch(g=>(c.removeAllListeners(), this.removeSession(e).then(()=>{
      throw g
    }))).then(()=>(c.removeAllListeners(), e))
  }
  getKeyStatuses(e){
    const t={

    };
    return e.mediaKeysSession.keyStatuses.forEach((s, n)=>{
      if(typeof n=="string"&&typeof s=="object"){
        const o=n;
        n=s, s=o
      }
      const i="buffer"in n?new Uint8Array(n.buffer, n.byteOffset, n.byteLength):new Uint8Array(n);
      if(e.keySystem===Se.PLAYREADY&&i.length===16){
        const o=je(i);
        t[o]=s, lp(i)
      }
      const a=je(i);
      s==="internal-error"&&(this.bannedKeyIds[a]=s), this.log(`key status change "${s}" for keyStatuses keyId: ${a} key-session "${e.mediaKeysSession.sessionId}"`),
      t[a]=s
    }), t
  }
  fetchServerCertificate(e){
    const t=this.config, s=t.loader, n=new s(t), i=this.getServerCertificateUrl(e);
    return i?(this.log(`Fetching server certificate for "${e}"`), new Promise((a, o)=>{
      const l={
        responseType:"arraybuffer", url:i
      }, c=t.certLoadPolicy.default, u={
        loadPolicy:c, timeout:c.maxLoadTimeMs, maxRetry:0, retryDelay:0, maxRetryDelay:0
      }, d={
        onSuccess:(h, f, g, y)=>{
          a(h.data)
        }, onError:(h, f, g, y)=>{
          o(new ct({
            type:q.KEY_SYSTEM_ERROR, details:k.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal:!0, networkDetails:g, response:ce({
              url:l.url, data:void 0
            }, h)
          }, `"${e}" certificate request failed (${i}). Status: ${h.code} (${h.text})`))
        }, onTimeout:(h, f, g)=>{
          o(new ct({
            type:q.KEY_SYSTEM_ERROR, details:k.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED, fatal:!0, networkDetails:g, response:{
              url:l.url, data:void 0
            }

          }, `"${e}" certificate request timed out (${i})`))
        }, onAbort:(h, f, g)=>{
          o(new Error("aborted"))
        }

      };
      n.load(l, u, d)
    })):Promise.resolve()
  }
  setMediaKeysServerCertificate(e, t, s){
    return new Promise((n, i)=>{
      e.setServerCertificate(s).then(a=>{
        this.log(`setServerCertificate ${a?"success":"not supported by CDM"} (${s.byteLength}) on "${t}"`), n(e)
      }).catch(a=>{
        i(new ct({
          type:q.KEY_SYSTEM_ERROR, details:k.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED, error:a, fatal:!0
        }, a.message))
      })
    })
  }
  renewLicense(e, t){
    return this.requestLicense(e, new Uint8Array(t)).then(s=>this.updateKeySession(e, new Uint8Array(s)).catch(n=>{
      throw new ct({
        type:q.KEY_SYSTEM_ERROR, details:k.KEY_SYSTEM_SESSION_UPDATE_FAILED, decryptdata:e.decryptdata, error:n, fatal:!1
      }, n.message)
    }))
  }
  unpackPlayReadyKeyMessage(e, t){
    const s=String.fromCharCode.apply(null, new Uint16Array(t.buffer));
    if(!s.includes("PlayReadyKeyMessage"))return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
    const n=new DOMParser().parseFromString(s, "application/xml"), i=n.querySelectorAll("HttpHeader");
    if(i.length>0){
      let u;
      for(let d=0, h=i.length;
      d<h;
      d++){
        var a, o;
        u=i[d];
        const f=(a=u.querySelector("name"))==null?void 0:a.textContent, g=(o=u.querySelector("value"))==null?void 0:o.textContent;
        f&&g&&e.setRequestHeader(f, g)
      }

    }
    const l=n.querySelector("Challenge"), c=l==null?void 0:l.textContent;
    if(!c)throw new Error("Cannot find <Challenge> in key message");
    return Dc(atob(c))
  }
  setupLicenseXHR(e, t, s, n){
    const i=this.config.licenseXhrSetup;
    return i?Promise.resolve().then(()=>{
      if(!s.decryptdata)throw new Error("Key removed");
      return i.call(this.hls, e, t, s, n)
    }).catch(a=>{
      if(!s.decryptdata)throw a;
      return e.open("POST", t, !0), i.call(this.hls, e, t, s, n)
    }).then(a=>(e.readyState||e.open("POST", t, !0), {
      xhr:e, licenseChallenge:a||n
    })):(e.open("POST", t, !0), Promise.resolve({
      xhr:e, licenseChallenge:n
    }))
  }
  requestLicense(e, t){
    const s=this.config.keyLoadPolicy.default;
    return new Promise((n, i)=>{
      const a=this.getLicenseServerUrlOrThrow(e.keySystem);
      this.log(`Sending license request to URL: ${a}`);
      const o=new XMLHttpRequest;
      o.responseType="arraybuffer", o.onreadystatechange=()=>{
        if(!this.hls||!e.mediaKeysSession)return i(new Error("invalid state"));
        if(o.readyState===4)if(o.status===200){
          this._requestLicenseFailureCount=0;
          let l=o.response;
          this.log(`License received ${l instanceof ArrayBuffer?l.byteLength:l}`);
          const c=this.config.licenseResponseCallback;
          if(c)try{
            l=c.call(this.hls, o, a, e)
          }
          catch(u){
            this.error(u)
          }
          n(l)
        }
        else{
          const l=s.errorRetry, c=l?l.maxNumRetry:0;
          if(this._requestLicenseFailureCount++, this._requestLicenseFailureCount>c||o.status>=400&&o.status<500)i(new ct({
            type:q.KEY_SYSTEM_ERROR, details:k.KEY_SYSTEM_LICENSE_REQUEST_FAILED, decryptdata:e.decryptdata, fatal:!0, networkDetails:o,
            response:{
              url:a, data:void 0, code:o.status, text:o.statusText
            }

          }, `License Request XHR failed (${a}). Status: ${o.status} (${o.statusText})`));
          else{
            const u=c-this._requestLicenseFailureCount+1;
            this.warn(`Retrying license request, ${u} attempts left`), this.requestLicense(e, t).then(n, i)
          }

        }

      }, e.licenseXhr&&e.licenseXhr.readyState!==XMLHttpRequest.DONE&&e.licenseXhr.abort(), e.licenseXhr=o, this.setupLicenseXHR(o,
      a, e, t).then(({
        xhr:l, licenseChallenge:c
      })=>{
        e.keySystem==Se.PLAYREADY&&(c=this.unpackPlayReadyKeyMessage(l, c)), l.send(c)
      }).catch(i)
    })
  }
  onDestroying(){
    this.unregisterListeners(), this._clear()
  }
  onMediaAttached(e, t){
    if(!this.config.emeEnabled)return;
    const s=t.media;
    this.media=s, Ze(s, "encrypted", this.onMediaEncrypted), Ze(s, "waitingforkey", this.onWaitingForKey);
    const n=this.mediaResolved;
    n?n():this.mediaKeys=s.mediaKeys
  }
  onMediaDetached(){
    const e=this.media;
    e&&(it(e, "encrypted", this.onMediaEncrypted), it(e, "waitingforkey", this.onWaitingForKey), this.media=null, this.mediaKeys=null)
  }
  _clear(){
    var e;
    this._requestLicenseFailureCount=0, this.keyIdToKeySessionPromise={

    }, this.bannedKeyIds={

    };
    const t=this.mediaResolved;
    if(t&&t(), !this.mediaKeys&&!this.mediaKeySessions.length)return;
    const s=this.media, n=this.mediaKeySessions.slice();
    this.mediaKeySessions=[], this.mediaKeys=null, Vr.clearKeyUriToKeyIdMap();
    const i=n.length;
    Qs.CDMCleanupPromise=Promise.all(n.map(a=>this.removeSession(a)).concat((s==null||(e=s.setMediaKeys(null))==null?void 0:e.catch(a=>{
      this.log(`Could not clear media keys: ${a}`), this.hls&&this.hls.trigger(S.ERROR, {
        type:q.OTHER_ERROR, details:k.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR, fatal:!1, error:new Error(`Could not clear media keys: ${a}`)
      })
    }))||Promise.resolve())).catch(a=>{
      this.log(`Could not close sessions and clear media keys: ${a}`), this.hls&&this.hls.trigger(S.ERROR, {
        type:q.OTHER_ERROR, details:k.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR, fatal:!1, error:new Error(`Could not close sessions and clear media keys: ${a}`)
      })
    }).then(()=>{
      i&&this.log("finished closing key sessions and clearing media keys")
    })
  }
  onManifestLoading(){
    this._clear()
  }
  onManifestLoaded(e, {
    sessionKeys:t
  }){
    if(!(!t||!this.config.emeEnabled)&&!this.keyFormatPromise){
      const s=t.reduce((n, i)=>(n.indexOf(i.keyFormat)===-1&&n.push(i.keyFormat), n), []);
      this.log(`Selecting key-system from session-keys ${s.join(", ")}`), this.keyFormatPromise=this.getKeyFormatPromise(s)
    }

  }
  removeSession(e){
    const{
      mediaKeysSession:t, licenseXhr:s, decryptdata:n
    }
    =e;
    if(t){
      this.log(`Remove licenses and keys and close session "${t.sessionId}" keyId: ${je((n==null?void 0:n.keyId)||[])}`),
      e._onmessage&&(t.removeEventListener("message", e._onmessage), e._onmessage=void 0), e._onkeystatuseschange&&(t.removeEventListener("keystatuseschange",
      e._onkeystatuseschange), e._onkeystatuseschange=void 0), s&&s.readyState!==XMLHttpRequest.DONE&&s.abort(), e.mediaKeysSession=e.decryptdata=e.licenseXhr=void 0;
      const i=this.mediaKeySessions.indexOf(e);
      i>-1&&this.mediaKeySessions.splice(i, 1);
      const{
        keyStatusTimeouts:a
      }
      =e;
      a&&Object.keys(a).forEach(c=>self.clearTimeout(a[c]));
      const{
        drmSystemOptions:o
      }
      =this.config;
      return(mT(o)?new Promise((c, u)=>{
        self.setTimeout(()=>u(new Error("MediaKeySession.remove() timeout")), 8e3), t.remove().then(c).catch(u)
      }):Promise.resolve()).catch(c=>{
        this.log(`Could not remove session: ${c}`), this.hls&&this.hls.trigger(S.ERROR, {
          type:q.OTHER_ERROR, details:k.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR, fatal:!1, error:new Error(`Could not remove session: ${c}`)
        })
      }).then(()=>t.close()).catch(c=>{
        this.log(`Could not close session: ${c}`), this.hls&&this.hls.trigger(S.ERROR, {
          type:q.OTHER_ERROR, details:k.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR, fatal:!1, error:new Error(`Could not close session: ${c}`)
        })
      })
    }
    return Promise.resolve()
  }

}
Qs.CDMCleanupPromise=void 0;
function Qi(r){
  if(!r)throw new Error("Could not read keyId of undefined decryptdata");
  if(r.keyId===null)throw new Error("keyId is null");
  return je(r.keyId)
}
function PL(r, e){
  if(r.keyId&&e.mediaKeysSession.keyStatuses.has(r.keyId))return e.mediaKeysSession.keyStatuses.get(r.keyId);
  if(r.matches(e.decryptdata))return e.keyStatus
}
class ct extends Error{
  constructor(e, t){
    super(t), this.data=void 0, e.error||(e.error=new Error(t)), this.data=e, e.err=e.error
  }

}
function Bf(r, e){
  const t=r==="output-restricted", s=t?k.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:k.KEY_SYSTEM_STATUS_INTERNAL_ERROR;
  return new ct({
    type:q.KEY_SYSTEM_ERROR, details:s, fatal:!1, decryptdata:e
  }, t?"HDCP level output restricted":`key status changed to "${r}"`)
}
class NL{
  constructor(e){
    this.hls=void 0, this.isVideoPlaybackQualityAvailable=!1, this.timer=void 0, this.media=null, this.lastTime=void 0, this.lastDroppedFrames=0,
    this.lastDecodedFrames=0, this.streamController=void 0, this.hls=e, this.registerListeners()
  }
  setStreamController(e){
    this.streamController=e
  }
  registerListeners(){
    this.hls.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.on(S.MEDIA_DETACHING, this.onMediaDetaching, this)
  }
  unregisterListeners(){
    this.hls.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.off(S.MEDIA_DETACHING, this.onMediaDetaching, this)
  }
  destroy(){
    this.timer&&clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable=!1, this.media=null
  }
  onMediaAttaching(e, t){
    const s=this.hls.config;
    if(s.capLevelOnFPSDrop){
      const n=t.media instanceof self.HTMLVideoElement?t.media:null;
      this.media=n, n&&typeof n.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0), self.clearInterval(this.timer),
      this.timer=self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod)
    }

  }
  onMediaDetaching(){
    this.media=null
  }
  checkFPS(e, t, s){
    const n=performance.now();
    if(t){
      if(this.lastTime){
        const i=n-this.lastTime, a=s-this.lastDroppedFrames, o=t-this.lastDecodedFrames, l=1e3*a/i, c=this.hls;
        if(c.trigger(S.FPS_DROP, {
          currentDropped:a, currentDecoded:o, totalDroppedFrames:s
        }), l>0&&a>c.config.fpsDroppedMonitoringThreshold*o){
          let u=c.currentLevel;
          c.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+u), u>0&&(c.autoLevelCapping===-1||c.autoLevelCapping>=u)&&(u=u-1,
          c.trigger(S.FPS_DROP_LEVEL_CAPPING, {
            level:u, droppedLevel:c.currentLevel
          }), c.autoLevelCapping=u, this.streamController.nextLevelSwitch())
        }

      }
      this.lastTime=n, this.lastDroppedFrames=s, this.lastDecodedFrames=t
    }

  }
  checkFPSInterval(){
    const e=this.media;
    if(e)if(this.isVideoPlaybackQualityAvailable){
      const t=e.getVideoPlaybackQuality();
      this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
    }
    else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
  }

}
function ey(r, e){
  let t;
  try{
    t=new Event("addtrack")
  }
  catch{
    t=document.createEvent("Event"), t.initEvent("addtrack", !1, !1)
  }
  t.track=r, e.dispatchEvent(t)
}
function ty(r, e){
  const t=r.mode;
  if(t==="disabled"&&(r.mode="hidden"), r.cues&&!r.cues.getCueById(e.id))try{
    if(r.addCue(e), !r.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${e}`)
  }
  catch(s){
    ue.debug(`[texttrack-utils]: ${s}`);
    try{
      const n=new self.TextTrackCue(e.startTime, e.endTime, e.text);
      n.id=e.id, r.addCue(n)
    }
    catch(n){
      ue.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${n}`)
    }

  }
  t==="disabled"&&(r.mode=t)
}
function $s(r, e){
  const t=r.mode;
  if(t==="disabled"&&(r.mode="hidden"), r.cues)for(let s=r.cues.length;
  s--;
  )e&&r.cues[s].removeEventListener("enter", e), r.removeCue(r.cues[s]);
  t==="disabled"&&(r.mode=t)
}
function jc(r, e, t, s){
  const n=r.mode;
  if(n==="disabled"&&(r.mode="hidden"), r.cues&&r.cues.length>0){
    const i=ML(r.cues, e, t);
    for(let a=0;
    a<i.length;
    a++)(!s||s(i[a]))&&r.removeCue(i[a])
  }
  n==="disabled"&&(r.mode=n)
}
function OL(r, e){
  if(e<=r[0].startTime)return 0;
  const t=r.length-1;
  if(e>r[t].endTime)return-1;
  let s=0, n=t, i;
  for(;
  s<=n;
  )if(i=Math.floor((n+s)/2), e<r[i].startTime)n=i-1;
  else if(e>r[i].startTime&&s<t)s=i+1;
  else return i;
  return r[s].startTime-e<e-r[n].startTime?s:n
}
function ML(r, e, t){
  const s=[], n=OL(r, e);
  if(n>-1)for(let i=n, a=r.length;
  i<a;
  i++){
    const o=r[i];
    if(o.startTime>=e&&o.endTime<=t)s.push(o);
    else if(o.startTime>t)return s
  }
  return s
}
function La(r){
  const e=[];
  for(let t=0;
  t<r.length;
  t++){
    const s=r[t];
    (s.kind==="subtitles"||s.kind==="captions")&&s.label&&e.push(r[t])
  }
  return e
}
class FL extends cd{
  constructor(e){
    super(e, "subtitle-track-controller"), this.media=null, this.tracks=[], this.groupIds=null, this.tracksInGroup=[], this.trackId=-1,
    this.currentTrack=null, this.selectDefaultTrack=!0, this.queuedDefaultTrack=-1, this.useTextTrackPolling=!1, this.subtitlePollingInterval=-1,
    this._subtitleDisplay=!0, this.asyncPollTrackChange=()=>this.pollTrackChange(0), this.onTextTracksChanged=()=>{
      if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval), !this.media||!this.hls.config.renderTextTracksNatively)return;
      let t=null;
      const s=La(this.media.textTracks);
      for(let i=0;
      i<s.length;
      i++)if(s[i].mode==="hidden")t=s[i];
      else if(s[i].mode==="showing"){
        t=s[i];
        break
      }
      const n=this.findTrackForTextTrack(t);
      this.subtitleTrack!==n&&this.setSubtitleTrack(n)
    }, this.registerListeners()
  }
  destroy(){
    this.unregisterListeners(), this.tracks.length=0, this.tracksInGroup.length=0, this.currentTrack=null, this.onTextTracksChanged=this.asyncPollTrackChange=null,
    super.destroy()
  }
  get subtitleDisplay(){
    return this._subtitleDisplay
  }
  set subtitleDisplay(e){
    this._subtitleDisplay=e, this.trackId>-1&&this.toggleTrackModes()
  }
  registerListeners(){
    const{
      hls:e
    }
    =this;
    e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING,
    this.onManifestLoading, this), e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.LEVEL_LOADING, this.onLevelLoading,
    this), e.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded,
    this), e.on(S.ERROR, this.onError, this)
  }
  unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING,
    this.onManifestLoading, this), e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.LEVEL_LOADING, this.onLevelLoading,
    this), e.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded,
    this), e.off(S.ERROR, this.onError, this)
  }
  onMediaAttached(e, t){
    this.media=t.media, this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack, this.queuedDefaultTrack=-1),
    this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks), this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",
    this.asyncPollTrackChange))
  }
  pollTrackChange(e){
    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval=self.setInterval(this.onTextTracksChanged,
    e)
  }
  onMediaDetaching(e, t){
    const s=this.media;
    if(!s)return;
    const n=!!t.transferMedia;
    if(self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling||s.textTracks.removeEventListener("change",
    this.asyncPollTrackChange), this.trackId>-1&&(this.queuedDefaultTrack=this.trackId), this.subtitleTrack=-1, this.media=null,
    n)return;
    La(s.textTracks).forEach(a=>{
      $s(a)
    })
  }
  onManifestLoading(){
    this.tracks=[], this.groupIds=null, this.tracksInGroup=[], this.trackId=-1, this.currentTrack=null, this.selectDefaultTrack=!0
  }
  onManifestParsed(e, t){
    this.tracks=t.subtitleTracks
  }
  onSubtitleTrackLoaded(e, t){
    const{
      id:s, groupId:n, details:i
    }
    =t, a=this.tracksInGroup[s];
    if(!a||a.groupId!==n){
      this.warn(`Subtitle track with id:${s} and group:${n} not found in active group ${a==null?void 0:a.groupId}`);
      return
    }
    const o=a.details;
    a.details=t.details, this.log(`Subtitle track ${s} "${a.name}" lang:${a.lang} group:${n} loaded [${i.startSN}-${i.endSN}]`),
    s===this.trackId&&this.playlistLoaded(s, t, o)
  }
  onLevelLoading(e, t){
    this.switchLevel(t.level)
  }
  onLevelSwitching(e, t){
    this.switchLevel(t.level)
  }
  switchLevel(e){
    const t=this.hls.levels[e];
    if(!t)return;
    const s=t.subtitleGroups||null, n=this.groupIds;
    let i=this.currentTrack;
    if(!s||(n==null?void 0:n.length)!==(s==null?void 0:s.length)||s!=null&&s.some(a=>(n==null?void 0:n.indexOf(a))===-1)){
      this.groupIds=s, this.trackId=-1, this.currentTrack=null;
      const a=this.tracks.filter(u=>!s||s.indexOf(u.groupId)!==-1);
      if(a.length)this.selectDefaultTrack&&!a.some(u=>u.default)&&(this.selectDefaultTrack=!1), a.forEach((u, d)=>{
        u.id=d
      });
      else if(!i&&!this.tracksInGroup.length)return;
      this.tracksInGroup=a;
      const o=this.hls.config.subtitlePreference;
      if(!i&&o){
        this.selectDefaultTrack=!1;
        const u=Xt(o, a);
        if(u>-1)i=a[u];
        else{
          const d=Xt(o, this.tracks);
          i=this.tracks[d]
        }

      }
      let l=this.findTrackId(i);
      l===-1&&i&&(l=this.findTrackId(null));
      const c={
        subtitleTracks:a
      };
      this.log(`Updating subtitle tracks, ${a.length} track(s) found in "${s==null?void 0:s.join(",")}" group-id`), this.hls.trigger(S.SUBTITLE_TRACKS_UPDATED,
      c), l!==-1&&this.trackId===-1&&this.setSubtitleTrack(l)
    }

  }
  findTrackId(e){
    const t=this.tracksInGroup, s=this.selectDefaultTrack;
    for(let n=0;
    n<t.length;
    n++){
      const i=t[n];
      if(!(s&&!i.default||!s&&!e)&&(!e||us(i, e)))return n
    }
    if(e){
      for(let n=0;
      n<t.length;
      n++){
        const i=t[n];
        if(hi(e.attrs, i.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))return n
      }
      for(let n=0;
      n<t.length;
      n++){
        const i=t[n];
        if(hi(e.attrs, i.attrs, ["LANGUAGE"]))return n
      }

    }
    return-1
  }
  findTrackForTextTrack(e){
    if(e){
      const t=this.tracksInGroup;
      for(let s=0;
      s<t.length;
      s++){
        const n=t[s];
        if(Fc(n, e))return s
      }

    }
    return-1
  }
  onError(e, t){
    t.fatal||!t.context||t.context.type===ne.SUBTITLE_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)
  }
  get allSubtitleTracks(){
    return this.tracks
  }
  get subtitleTracks(){
    return this.tracksInGroup
  }
  get subtitleTrack(){
    return this.trackId
  }
  set subtitleTrack(e){
    this.selectDefaultTrack=!1, this.setSubtitleTrack(e)
  }
  setSubtitleOption(e){
    if(this.hls.config.subtitlePreference=e, e){
      if(e.id===-1)return this.setSubtitleTrack(-1), null;
      const t=this.allSubtitleTracks;
      if(this.selectDefaultTrack=!1, t.length){
        const s=this.currentTrack;
        if(s&&us(e, s))return s;
        const n=Xt(e, this.tracksInGroup);
        if(n>-1){
          const i=this.tracksInGroup[n];
          return this.setSubtitleTrack(n), i
        }
        else{
          if(s)return null;
          {
            const i=Xt(e, t);
            if(i>-1)return t[i]
          }

        }

      }

    }
    return null
  }
  loadPlaylist(e){
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentTrack)&&this.scheduleLoading(this.currentTrack, e)
  }
  loadingPlaylist(e, t){
    super.loadingPlaylist(e, t);
    const s=e.id, n=e.groupId, i=this.getUrlWithDirectives(e.url, t), a=e.details, o=a==null?void 0:a.age;
    this.log(`Loading subtitle ${s} "${e.name}" lang:${e.lang} group:${n}${(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}${o&&a.live?" age "+o.toFixed(1)+(a.type&&" "+a.type||""):""} ${i}`)
    , this.hls.trigger(S.SUBTITLE_TRACK_LOADING, {
      url:i, id:s, groupId:n, deliveryDirectives:t||null, track:e
    })
  }
  toggleTrackModes(){
    const{
      media:e
    }
    =this;
    if(!e)return;
    const t=La(e.textTracks), s=this.currentTrack;
    let n;
    if(s&&(n=t.filter(i=>Fc(s, i))[0], n||this.warn(`Unable to find subtitle TextTrack with name "${s.name}" and language "${s.lang}"`)),
    [].slice.call(t).forEach(i=>{
      i.mode!=="disabled"&&i!==n&&(i.mode="disabled")
    }), n){
      const i=this.subtitleDisplay?"showing":"hidden";
      n.mode!==i&&(n.mode=i)
    }

  }
  setSubtitleTrack(e){
    const t=this.tracksInGroup;
    if(!this.media){
      this.queuedDefaultTrack=e;
      return
    }
    if(e<-1||e>=t.length||!G(e)){
      this.warn(`Invalid subtitle track id: ${e}`);
      return
    }
    this.selectDefaultTrack=!1;
    const s=this.currentTrack, n=t[e]||null;
    if(this.trackId=e, this.currentTrack=n, this.toggleTrackModes(), !n){
      this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, {
        id:e
      });
      return
    }
    const i=!!n.details&&!n.details.live;
    if(e===this.trackId&&n===s&&i)return;
    this.log(`Switching to subtitle-track ${e}`+(n?` "${n.name}" lang:${n.lang} group:${n.groupId}`:""));
    const{
      id:a, groupId:o="", name:l, type:c, url:u
    }
    =n;
    this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, {
      id:a, groupId:o, name:l, type:c, url:u
    });
    const d=this.switchParams(n.url, s==null?void 0:s.details, n.details);
    this.loadPlaylist(d)
  }

}
function UL(){
  try{
    return crypto.randomUUID()
  }
  catch{
    try{
      const e=URL.createObjectURL(new Blob), t=e.toString();
      return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/")+1)
    }
    catch{
      let t=new Date().getTime();
      return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, n=>{
        const i=(t+Math.random()*16)%16|0;
        return t=Math.floor(t/16), (n=="x"?i:i&3|8).toString(16)
      })
    }

  }

}
function jn(r){
  let e=5381, t=r.length;
  for(;
  t;
  )e=e*33^r.charCodeAt(--t);
  return(e>>>0).toString()
}
const Xs=.025;
let oo=function(r){
  return r[r.Point=0]="Point", r[r.Range=1]="Range", r
}
({

});
function $L(r, e, t){
  return`${r.identifier}-${t+1}-${jn(e)}`
}
class BL{
  constructor(e, t){
    this.base=void 0, this._duration=null, this._timelineStart=null, this.appendInPlaceDisabled=void 0, this.appendInPlaceStarted=void 0,
    this.dateRange=void 0, this.hasPlayed=!1, this.cumulativeDuration=0, this.resumeOffset=NaN, this.playoutLimit=NaN, this.restrictions={
      skip:!1, jump:!1
    }, this.snapOptions={
      out:!1, in:!1
    }, this.assetList=[], this.assetListLoader=void 0, this.assetListResponse=null, this.resumeAnchor=void 0, this.error=void 0,
    this.resetOnResume=void 0, this.base=t, this.dateRange=e, this.setDateRange(e)
  }
  setDateRange(e){
    this.dateRange=e, this.resumeOffset=e.attr.optionalFloat("X-RESUME-OFFSET", this.resumeOffset), this.playoutLimit=e.attr.optionalFloat("X-PLAYOUT-LIMIT",
    this.playoutLimit), this.restrictions=e.attr.enumeratedStringList("X-RESTRICT", this.restrictions), this.snapOptions=e.attr.enumeratedStringList("X-SNAP",
    this.snapOptions)
  }
  reset(){
    var e;
    this.appendInPlaceStarted=!1, (e=this.assetListLoader)==null||e.destroy(), this.assetListLoader=void 0, this.supplementsPrimary||(this.assetListResponse=null,
    this.assetList=[], this._duration=null)
  }
  isAssetPastPlayoutLimit(e){
    var t;
    if(e>0&&e>=this.assetList.length)return!0;
    const s=this.playoutLimit;
    return e<=0||isNaN(s)?!1:s===0?!0:(((t=this.assetList[e])==null?void 0:t.startOffset)||0)>s
  }
  findAssetIndex(e){
    return this.assetList.indexOf(e)
  }
  get identifier(){
    return this.dateRange.id
  }
  get startDate(){
    return this.dateRange.startDate
  }
  get startTime(){
    const e=this.dateRange.startTime;
    if(this.snapOptions.out){
      const t=this.dateRange.tagAnchor;
      if(t)return xl(e, t)
    }
    return e
  }
  get startOffset(){
    return this.cue.pre?0:this.startTime
  }
  get startIsAligned(){
    if(this.startTime===0||this.snapOptions.out)return!0;
    const e=this.dateRange.tagAnchor;
    if(e){
      const t=this.dateRange.startTime, s=xl(t, e);
      return t-s<.1
    }
    return!1
  }
  get resumptionOffset(){
    const e=this.resumeOffset, t=G(e)?e:this.duration;
    return this.cumulativeDuration+t
  }
  get resumeTime(){
    const e=this.startOffset+this.resumptionOffset;
    if(this.snapOptions.in){
      const t=this.resumeAnchor;
      if(t)return xl(e, t)
    }
    return e
  }
  get appendInPlace(){
    return this.appendInPlaceStarted?!0:this.appendInPlaceDisabled?!1:!!(!this.cue.once&&!this.cue.pre&&this.startIsAligned&&(isNaN(this.playoutLimit)&&isNaN(this.resumeOffset)||this.resumeOffset&&this.duration&&Math.abs(this.resumeOffset-this.duration)
    <Xs))
  }
  set appendInPlace(e){
    if(this.appendInPlaceStarted){
      this.resetOnResume=!e;
      return
    }
    this.appendInPlaceDisabled=!e
  }
  get timelineStart(){
    return this._timelineStart!==null?this._timelineStart:this.startTime
  }
  set timelineStart(e){
    this._timelineStart=e
  }
  get duration(){
    const e=this.playoutLimit;
    let t;
    return this._duration!==null?t=this._duration:this.dateRange.duration?t=this.dateRange.duration:t=this.dateRange.plannedDuration||0,
    !isNaN(e)&&e<t&&(t=e), t
  }
  set duration(e){
    this._duration=e
  }
  get cue(){
    return this.dateRange.cue
  }
  get timelineOccupancy(){
    return this.dateRange.attr["X-TIMELINE-OCCUPIES"]==="RANGE"?oo.Range:oo.Point
  }
  get supplementsPrimary(){
    return this.dateRange.attr["X-TIMELINE-STYLE"]==="PRIMARY"
  }
  get contentMayVary(){
    return this.dateRange.attr["X-CONTENT-MAY-VARY"]!=="NO"
  }
  get assetUrl(){
    return this.dateRange.attr["X-ASSET-URI"]
  }
  get assetListUrl(){
    return this.dateRange.attr["X-ASSET-LIST"]
  }
  get baseUrl(){
    return this.base.url
  }
  get assetListLoaded(){
    return this.assetList.length>0||this.assetListResponse!==null
  }
  toString(){
    return jL(this)
  }

}
function xl(r, e){
  return r-e.start<e.duration/2&&!(Math.abs(r-(e.start+e.duration))<Xs)?e.start:e.start+e.duration
}
function ry(r, e, t){
  const s=new self.URL(r, t);
  return s.protocol!=="data:"&&s.searchParams.set("_HLS_primary_id", e), s
}
function El(r, e){
  for(;
  (t=r.assetList[++e])!=null&&t.error;
  )var t;
  return e
}
function jL(r){
  return`["${r.identifier}" ${r.cue.pre?"<pre>":r.cue.post?"<post>":""}${r.timelineStart.toFixed(2)}-${r.resumeTime.toFixed(2)}]`
}
function Rs(r){
  const e=r.timelineStart, t=r.duration||0;
  return`["${r.identifier}" ${e.toFixed(2)}-${(e+t).toFixed(2)}]`
}
class GL{
  constructor(e, t, s, n){
    this.hls=void 0, this.interstitial=void 0, this.assetItem=void 0, this.tracks=null, this.hasDetails=!1, this.mediaAttached=null,
    this._currentTime=void 0, this._bufferedEosTime=void 0, this.checkPlayout=()=>{
      this.reachedPlayout(this.currentTime)&&this.hls&&this.hls.trigger(S.PLAYOUT_LIMIT_REACHED, {

      })
    };
    const i=this.hls=new e(t);
    this.interstitial=s, this.assetItem=n;
    const a=()=>{
      this.hasDetails=!0
    };
    i.once(S.LEVEL_LOADED, a), i.once(S.AUDIO_TRACK_LOADED, a), i.once(S.SUBTITLE_TRACK_LOADED, a), i.on(S.MEDIA_ATTACHING,
    (o, {
      media:l
    })=>{
      this.removeMediaListeners(), this.mediaAttached=l, this.interstitial.playoutLimit&&(l.addEventListener("timeupdate",
      this.checkPlayout), this.appendInPlace&&i.on(S.BUFFER_APPENDED, ()=>{
        const u=this.bufferedEnd;
        this.reachedPlayout(u)&&(this._bufferedEosTime=u, i.trigger(S.BUFFERED_TO_END, void 0))
      }))
    })
  }
  get appendInPlace(){
    return this.interstitial.appendInPlace
  }
  loadSource(){
    const e=this.hls;
    if(e)if(e.url)e.levels.length&&!e.started&&e.startLoad(-1, !0);
    else{
      let t=this.assetItem.uri;
      try{
        t=ry(t, e.config.primarySessionId||"").href
      }
      catch{

      }
      e.loadSource(t)
    }

  }
  bufferedInPlaceToEnd(e){
    var t;
    if(!this.appendInPlace)return!1;
    if((t=this.hls)!=null&&t.bufferedToEnd)return!0;
    if(!e)return!1;
    const s=Math.min(this._bufferedEosTime||1/0, this.duration), n=this.timelineOffset, i=Z.bufferInfo(e, n, 0);
    return this.getAssetTime(i.end)>=s-.02
  }
  reachedPlayout(e){
    const s=this.interstitial.playoutLimit;
    return this.startOffset+e>=s
  }
  get destroyed(){
    var e;
    return!((e=this.hls)!=null&&e.userConfig)
  }
  get assetId(){
    return this.assetItem.identifier
  }
  get interstitialId(){
    return this.assetItem.parentIdentifier
  }
  get media(){
    var e;
    return((e=this.hls)==null?void 0:e.media)||null
  }
  get bufferedEnd(){
    const e=this.media||this.mediaAttached;
    if(!e)return this._bufferedEosTime?this._bufferedEosTime:this.currentTime;
    const t=Z.bufferInfo(e, e.currentTime, .001);
    return this.getAssetTime(t.end)
  }
  get currentTime(){
    const e=this.media||this.mediaAttached;
    return e?this.getAssetTime(e.currentTime):this._currentTime||0
  }
  get duration(){
    const e=this.assetItem.duration;
    if(!e)return 0;
    const t=this.interstitial.playoutLimit;
    if(t){
      const s=t-this.startOffset;
      if(s>0&&s<e)return s
    }
    return e
  }
  get remaining(){
    const e=this.duration;
    return e?Math.max(0, e-this.currentTime):0
  }
  get startOffset(){
    return this.assetItem.startOffset
  }
  get timelineOffset(){
    var e;
    return((e=this.hls)==null?void 0:e.config.timelineOffset)||0
  }
  set timelineOffset(e){
    const t=this.timelineOffset;
    if(e!==t){
      const s=e-t;
      if(Math.abs(s)>1/9e4&&this.hls){
        if(this.hasDetails)throw new Error("Cannot set timelineOffset after playlists are loaded");
        this.hls.config.timelineOffset=e
      }

    }

  }
  getAssetTime(e){
    const t=this.timelineOffset, s=this.duration;
    return Math.min(Math.max(0, e-t), s)
  }
  removeMediaListeners(){
    const e=this.mediaAttached;
    e&&(this._currentTime=e.currentTime, this.bufferSnapShot(), e.removeEventListener("timeupdate", this.checkPlayout))
  }
  bufferSnapShot(){
    if(this.mediaAttached){
      var e;
      (e=this.hls)!=null&&e.bufferedToEnd&&(this._bufferedEosTime=this.bufferedEnd)
    }

  }
  destroy(){
    this.removeMediaListeners(), this.hls&&this.hls.destroy(), this.hls=null, this.tracks=this.mediaAttached=this.checkPlayout=null
  }
  attachMedia(e){
    var t;
    this.loadSource(), (t=this.hls)==null||t.attachMedia(e)
  }
  detachMedia(){
    var e;
    this.removeMediaListeners(), this.mediaAttached=null, (e=this.hls)==null||e.detachMedia()
  }
  resumeBuffering(){
    var e;
    (e=this.hls)==null||e.resumeBuffering()
  }
  pauseBuffering(){
    var e;
    (e=this.hls)==null||e.pauseBuffering()
  }
  transferMedia(){
    var e;
    return this.bufferSnapShot(), ((e=this.hls)==null?void 0:e.transferMedia())||null
  }
  resetDetails(){
    const e=this.hls;
    if(e&&this.hasDetails){
      e.stopLoad();
      const t=s=>delete s.details;
      e.levels.forEach(t), e.allAudioTracks.forEach(t), e.allSubtitleTracks.forEach(t), this.hasDetails=!1
    }

  }
  on(e, t, s){
    var n;
    (n=this.hls)==null||n.on(e, t)
  }
  once(e, t, s){
    var n;
    (n=this.hls)==null||n.once(e, t)
  }
  off(e, t, s){
    var n;
    (n=this.hls)==null||n.off(e, t)
  }
  toString(){
    var e;
    return`HlsAssetPlayer: ${Rs(this.assetItem)} ${(e=this.hls)==null?void 0:e.sessionId} ${this.appendInPlace?"append-in-place":""}`
  }

}
const jf=.033;
class VL extends Ct{
  constructor(e, t){
    super("interstitials-sched", t), this.onScheduleUpdate=void 0, this.eventMap={

    }, this.events=null, this.items=null, this.durations={
      primary:0, playout:0, integrated:0
    }, this.onScheduleUpdate=e
  }
  destroy(){
    this.reset(), this.onScheduleUpdate=null
  }
  reset(){
    this.eventMap={

    }, this.setDurations(0, 0, 0), this.events&&this.events.forEach(e=>e.reset()), this.events=this.items=null
  }
  resetErrorsInRange(e, t){
    return this.events?this.events.reduce((s, n)=>e<=n.startOffset&&t>n.startOffset?(delete n.error, s+1):s, 0):0
  }
  get duration(){
    const e=this.items;
    return e?e[e.length-1].end:0
  }
  get length(){
    return this.items?this.items.length:0
  }
  getEvent(e){
    return e&&this.eventMap[e]||null
  }
  hasEvent(e){
    return e in this.eventMap
  }
  findItemIndex(e, t){
    if(e.event)return this.findEventIndex(e.event.identifier);
    let s=-1;
    e.nextEvent?s=this.findEventIndex(e.nextEvent.identifier)-1:e.previousEvent&&(s=this.findEventIndex(e.previousEvent.identifier)+1);
    const n=this.items;
    if(n)for(n[s]||(t===void 0&&(t=e.start), s=this.findItemIndexAtTime(t));
    s>=0&&(i=n[s])!=null&&i.event;
    ){
      var i;
      s--
    }
    return s
  }
  findItemIndexAtTime(e, t){
    const s=this.items;
    if(s)for(let n=0;
    n<s.length;
    n++){
      let i=s[n];
      if(t&&t!=="primary"&&(i=i[t]), e===i.start||e>i.start&&e<i.end)return n
    }
    return-1
  }
  findJumpRestrictedIndex(e, t){
    const s=this.items;
    if(s)for(let n=e;
    n<=t&&s[n];
    n++){
      const i=s[n].event;
      if(i!=null&&i.restrictions.jump&&!i.appendInPlace)return n
    }
    return-1
  }
  findEventIndex(e){
    const t=this.items;
    if(t)for(let n=t.length;
    n--;
    ){
      var s;
      if(((s=t[n].event)==null?void 0:s.identifier)===e)return n
    }
    return-1
  }
  findAssetIndex(e, t){
    const s=e.assetList, n=s.length;
    if(n>1)for(let i=0;
    i<n;
    i++){
      const a=s[i];
      if(!a.error){
        const o=a.timelineStart;
        if(t===o||t>o&&(t<o+(a.duration||0)||i===n-1))return i
      }

    }
    return 0
  }
  get assetIdAtEnd(){
    var e;
    const t=(e=this.items)==null||(e=e[this.length-1])==null?void 0:e.event;
    if(t){
      const s=t.assetList, n=s[s.length-1];
      if(n)return n.identifier
    }
    return null
  }
  parseInterstitialDateRanges(e, t){
    const s=e.main.details, {
      dateRanges:n
    }
    =s, i=this.events, a=this.parseDateRanges(n, {
      url:s.url
    }, t), o=Object.keys(n), l=i?i.filter(c=>!o.includes(c.identifier)):[];
    a.length&&a.sort((c, u)=>{
      const d=c.cue.pre, h=c.cue.post, f=u.cue.pre, g=u.cue.post;
      if(d&&!f)return-1;
      if(f&&!d||h&&!g)return 1;
      if(g&&!h)return-1;
      if(!d&&!f&&!h&&!g){
        const y=c.startTime, x=u.startTime;
        if(y!==x)return y-x
      }
      return c.dateRange.tagOrder-u.dateRange.tagOrder
    }), this.events=a, l.forEach(c=>{
      this.removeEvent(c)
    }), this.updateSchedule(e, l)
  }
  updateSchedule(e, t=[], s=!1){
    const n=this.events||[];
    if(n.length||t.length||this.length<2){
      const i=this.items, a=this.parseSchedule(n, e);
      (s||t.length||(i==null?void 0:i.length)!==a.length||a.some((l, c)=>Math.abs(l.playout.start-i[c].playout.start)>.005||Math.abs(l.playout.end-i[c].playout.end)>.005))&&(this.items=a,
      this.onScheduleUpdate(t, i))
    }

  }
  parseDateRanges(e, t, s){
    const n=[], i=Object.keys(e);
    for(let a=0;
    a<i.length;
    a++){
      const o=i[a], l=e[o];
      if(l.isInterstitial){
        let c=this.eventMap[o];
        c?c.setDateRange(l):(c=new BL(l, t), this.eventMap[o]=c, s===!1&&(c.appendInPlace=s)), n.push(c)
      }

    }
    return n
  }
  parseSchedule(e, t){
    const s=[], n=t.main.details, i=n.live?1/0:n.edge;
    let a=0;
    if(e=e.filter(l=>!l.error&&!(l.cue.once&&l.hasPlayed)), e.length){
      this.resolveOffsets(e, t);
      let l=0, c=0;
      if(e.forEach((u, d)=>{
        const h=u.cue.pre, f=u.cue.post, g=e[d-1]||null, y=u.appendInPlace, x=f?i:u.startOffset, p=u.duration, v=u.timelineOccupancy===oo.Range?p:0,
        E=u.resumptionOffset, T=(g==null?void 0:g.startTime)===x, I=x+u.cumulativeDuration;
        let b=y?I+p:x+E;
        if(h||!f&&x<=0){
          const A=c;
          c+=v, u.timelineStart=I;
          const w=a;
          a+=p, s.push({
            event:u, start:I, end:b, playout:{
              start:w, end:a
            }, integrated:{
              start:A, end:c
            }

          })
        }
        else if(x<=i){
          if(!T){
            const R=x-l;
            if(R>jf){
              const D=l, $=c;
              c+=R;
              const V=a;
              a+=R;
              const Y={
                previousEvent:e[d-1]||null, nextEvent:u, start:D, end:D+R, playout:{
                  start:V, end:a
                }, integrated:{
                  start:$, end:c
                }

              };
              s.push(Y)
            }
            else R>0&&g&&(g.cumulativeDuration+=R, s[s.length-1].end=x)
          }
          f&&(b=I), u.timelineStart=I;
          const A=c;
          c+=v;
          const w=a;
          a+=p, s.push({
            event:u, start:I, end:b, playout:{
              start:w, end:a
            }, integrated:{
              start:A, end:c
            }

          })
        }
        else return;
        const L=u.resumeTime;
        f||L>i?l=i:l=L
      }), l<i){
        var o;
        const u=l, d=c, h=i-l;
        c+=h;
        const f=a;
        a+=h, s.push({
          previousEvent:((o=s[s.length-1])==null?void 0:o.event)||null, nextEvent:null, start:l, end:u+h, playout:{
            start:f, end:a
          }, integrated:{
            start:d, end:c
          }

        })
      }
      this.setDurations(i, a, c)
    }
    else s.push({
      previousEvent:null, nextEvent:null, start:0, end:i, playout:{
        start:0, end:i
      }, integrated:{
        start:0, end:i
      }

    }), this.setDurations(i, i, i);
    return s
  }
  setDurations(e, t, s){
    this.durations={
      primary:e, playout:t, integrated:s
    }

  }
  resolveOffsets(e, t){
    const s=t.main.details, n=s.live?1/0:s.edge;
    let i=0, a=-1;
    e.forEach((o, l)=>{
      const c=o.cue.pre, u=o.cue.post, d=c?0:u?n:o.startTime;
      this.updateAssetDurations(o), a===d?o.cumulativeDuration=i:(i=0, a=d), !u&&o.snapOptions.in&&(o.resumeAnchor=ps(null,
      s.fragments, o.startOffset+o.resumptionOffset, 0, 0)||void 0), o.appendInPlace&&!o.appendInPlaceStarted&&(this.primaryCanResumeInPlaceAt(o,
      t)||(o.appendInPlace=!1)), !o.appendInPlace&&l+1<e.length&&e[l+1].startTime-e[l].resumeTime<jf&&(e[l+1].appendInPlace=!1,
      e[l+1].appendInPlace&&this.warn(`Could not change append strategy for abutting event ${o}`));
      const f=G(o.resumeOffset)?o.resumeOffset:o.duration;
      i+=f
    })
  }
  primaryCanResumeInPlaceAt(e, t){
    const s=e.resumeTime, n=e.startTime+e.resumptionOffset;
    return Math.abs(s-n)>Xs?(this.log(`"${e.identifier}" resumption ${s} not aligned with estimated timeline end ${n}`), !1):!Object.keys(t).some(a=>{
      const o=t[a].details, l=o.edge;
      if(s>=l)return this.log(`"${e.identifier}" resumption ${s} past ${a} playlist end ${l}`), !1;
      const c=ps(null, o.fragments, s);
      if(!c)return this.log(`"${e.identifier}" resumption ${s} does not align with any fragments in ${a} playlist (${o.fragStart}-${o.fragmentEnd})`),
      !0;
      const u=a==="audio"?.175:0;
      return Math.abs(c.start-s)<Xs+u||Math.abs(c.end-s)<Xs+u?!1:(this.log(`"${e.identifier}" resumption ${s} not aligned with ${a} fragment bounds (${c.start}-${c.end} sn: ${c.sn} cc: ${c.cc})`)
      , !0)
    })
  }
  updateAssetDurations(e){
    if(!e.assetListLoaded)return;
    const t=e.timelineStart;
    let s=0, n=!1, i=!1;
    for(let a=0;
    a<e.assetList.length;
    a++){
      const o=e.assetList[a], l=t+s;
      o.startOffset=s, o.timelineStart=l, n||(n=o.duration===null), i||(i=!!o.error);
      const c=o.error?0:o.duration||0;
      s+=c
    }
    n&&!i?e.duration=Math.max(s, e.duration):e.duration=s
  }
  removeEvent(e){
    e.reset(), delete this.eventMap[e.identifier]
  }

}
function Nt(r){
  return`[${r.event?'"'+r.event.identifier+'"':"primary"}: ${r.start.toFixed(2)}-${r.end.toFixed(2)}]`
}
class KL{
  constructor(e){
    this.hls=void 0, this.hls=e
  }
  destroy(){
    this.hls=null
  }
  loadAssetList(e, t){
    const s=e.assetListUrl;
    let n;
    try{
      n=ry(s, this.hls.sessionId, e.baseUrl)
    }
    catch(h){
      const f=this.assignAssetListError(e, k.ASSET_LIST_LOAD_ERROR, h, s);
      this.hls.trigger(S.ERROR, f);
      return
    }
    t&&n.protocol!=="data:"&&n.searchParams.set("_HLS_start_offset", ""+t);
    const i=this.hls.config, a=i.loader, o=new a(i), l={
      responseType:"json", url:n.href
    }, c=i.interstitialAssetListLoadPolicy.default, u={
      loadPolicy:c, timeout:c.maxLoadTimeMs, maxRetry:0, retryDelay:0, maxRetryDelay:0
    }, d={
      onSuccess:(h, f, g, y)=>{
        const x=h.data, p=x==null?void 0:x.ASSETS;
        if(!Array.isArray(p)){
          const v=this.assignAssetListError(e, k.ASSET_LIST_PARSING_ERROR, new Error("Invalid interstitial asset list"), g.url,
          f, y);
          this.hls.trigger(S.ERROR, v);
          return
        }
        e.assetListResponse=x, this.hls.trigger(S.ASSET_LIST_LOADED, {
          event:e, assetListResponse:x, networkDetails:y
        })
      }, onError:(h, f, g, y)=>{
        const x=this.assignAssetListError(e, k.ASSET_LIST_LOAD_ERROR, new Error(`Error loading X-ASSET-LIST: HTTP status ${h.code} ${h.text} (${f.url})`),
        f.url, y, g);
        this.hls.trigger(S.ERROR, x)
      }, onTimeout:(h, f, g)=>{
        const y=this.assignAssetListError(e, k.ASSET_LIST_LOAD_TIMEOUT, new Error(`Timeout loading X-ASSET-LIST (${f.url})`),
        f.url, h, g);
        this.hls.trigger(S.ERROR, y)
      }

    };
    return o.load(l, u, d), this.hls.trigger(S.ASSET_LIST_LOADING, {
      event:e
    }), o
  }
  assignAssetListError(e, t, s, n, i, a){
    return e.error=s, {
      type:q.NETWORK_ERROR, details:t, fatal:!1, interstitial:e, url:n, error:s, networkDetails:a, stats:i
    }

  }

}
function Gf(r){
  var e;
  r==null||(e=r.play())==null||e.catch(()=>{

  })
}
function Xi(r, e){
  return`[${r}] Advancing timeline position to ${e}`
}
class HL extends Ct{
  constructor(e, t){
    super("interstitials", e.logger), this.HlsPlayerClass=void 0, this.hls=void 0, this.assetListLoader=void 0, this.mediaSelection=null,
    this.altSelection=null, this.media=null, this.detachedData=null, this.requiredTracks=null, this.manager=null, this.playerQueue=[],
    this.bufferedPos=-1, this.timelinePos=-1, this.schedule=void 0, this.playingItem=null, this.bufferingItem=null, this.waitingItem=null,
    this.endedItem=null, this.playingAsset=null, this.endedAsset=null, this.bufferingAsset=null, this.shouldPlay=!1, this.onPlay=()=>{
      this.shouldPlay=!0
    }, this.onPause=()=>{
      this.shouldPlay=!1
    }, this.onSeeking=()=>{
      const s=this.currentTime;
      if(s===void 0||this.playbackDisabled||!this.schedule)return;
      const n=s-this.timelinePos;
      if(Math.abs(n)<1/7056e5)return;
      const a=n<=-.01;
      this.timelinePos=s, this.bufferedPos=s;
      const o=this.playingItem;
      if(!o){
        this.checkBuffer();
        return
      }
      if(a&&this.schedule.resetErrorsInRange(s, s-n)&&this.updateSchedule(!0), this.checkBuffer(), a&&s<o.start||s>=o.end){
        var l;
        const f=this.findItemIndex(o);
        let g=this.schedule.findItemIndexAtTime(s);
        if(g===-1&&(g=f+(a?-1:1), this.log(`seeked ${a?"back ":""}to position not covered by schedule ${s} (resolving from ${f} to ${g})`)),
        !this.isInterstitial(o)&&(l=this.media)!=null&&l.paused&&(this.shouldPlay=!1), !a&&g>f){
          const y=this.schedule.findJumpRestrictedIndex(f+1, g);
          if(y>f){
            this.setSchedulePosition(y);
            return
          }

        }
        this.setSchedulePosition(g);
        return
      }
      const c=this.playingAsset;
      if(!c){
        if(this.playingLastItem&&this.isInterstitial(o)){
          const f=o.event.assetList[0];
          f&&(this.endedItem=this.playingItem, this.playingItem=null, this.setScheduleToAssetAtTime(s, f))
        }
        return
      }
      const u=c.timelineStart, d=c.duration||0;
      if(a&&s<u||s>=u+d){
        var h;
        (h=o.event)!=null&&h.appendInPlace&&(this.clearAssetPlayers(o.event, o), this.flushFrontBuffer(s)), this.setScheduleToAssetAtTime(s,
        c)
      }

    }, this.onTimeupdate=()=>{
      const s=this.currentTime;
      if(s===void 0||this.playbackDisabled)return;
      if(s>this.timelinePos)this.timelinePos=s, s>this.bufferedPos&&this.checkBuffer();
      else return;
      const n=this.playingItem;
      if(!n||this.playingLastItem)return;
      if(s>=n.end){
        this.timelinePos=n.end;
        const o=this.findItemIndex(n);
        this.setSchedulePosition(o+1)
      }
      const i=this.playingAsset;
      if(!i)return;
      const a=i.timelineStart+(i.duration||0);
      s>=a&&this.setScheduleToAssetAtTime(s, i)
    }, this.onScheduleUpdate=(s, n)=>{
      const i=this.schedule;
      if(!i)return;
      const a=this.playingItem, o=i.events||[], l=i.items||[], c=i.durations, u=s.map(y=>y.identifier), d=!!(o.length||u.length);
      (d||n)&&this.log(`INTERSTITIALS_UPDATED (${o.length}): ${o}
Schedule: ${l.map(y=>Nt(y))} pos: ${this.timelinePos}`), u.length&&this.log(`Removed events ${u}`);
      let h=null, f=null;
      a&&(h=this.updateItem(a, this.timelinePos), this.itemsMatch(a, h)?this.playingItem=h:this.waitingItem=this.endedItem=null),
      this.waitingItem=this.updateItem(this.waitingItem), this.endedItem=this.updateItem(this.endedItem);
      const g=this.bufferingItem;
      if(g&&(f=this.updateItem(g, this.bufferedPos), this.itemsMatch(g, f)?this.bufferingItem=f:g.event&&(this.bufferingItem=this.playingItem,
      this.clearInterstitial(g.event, null))), s.forEach(y=>{
        y.assetList.forEach(x=>{
          this.clearAssetPlayer(x.identifier, null)
        })
      }), this.playerQueue.forEach(y=>{
        if(y.interstitial.appendInPlace){
          const x=y.assetItem.timelineStart, p=y.timelineOffset-x;
          if(p)try{
            y.timelineOffset=x
          }
          catch(v){
            Math.abs(p)>Xs&&this.warn(`${v} ("${y.assetId}" ${y.timelineOffset}->${x})`)
          }

        }

      }), d||n){
        if(this.hls.trigger(S.INTERSTITIALS_UPDATED, {
          events:o.slice(0), schedule:l.slice(0), durations:c, removedIds:u
        }), this.isInterstitial(a)&&u.includes(a.event.identifier)){
          this.warn(`Interstitial "${a.event.identifier}" removed while playing`), this.primaryFallback(a.event);
          return
        }
        a&&this.trimInPlace(h, a), g&&f!==h&&this.trimInPlace(f, g), this.checkBuffer()
      }

    }, this.hls=e, this.HlsPlayerClass=t, this.assetListLoader=new KL(e), this.schedule=new VL(this.onScheduleUpdate, e.logger),
    this.registerListeners()
  }
  registerListeners(){
    const e=this.hls;
    e&&(e.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING,
    this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.LEVEL_UPDATED, this.onLevelUpdated,
    this), e.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(S.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated,
    this), e.on(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(S.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated,
    this), e.on(S.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.on(S.ASSET_LIST_LOADED, this.onAssetListLoaded, this),
    e.on(S.BUFFER_APPENDED, this.onBufferAppended, this), e.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(S.BUFFERED_TO_END,
    this.onBufferedToEnd, this), e.on(S.MEDIA_ENDED, this.onMediaEnded, this), e.on(S.ERROR, this.onError, this), e.on(S.DESTROYING,
    this.onDestroying, this))
  }
  unregisterListeners(){
    const e=this.hls;
    e&&(e.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING,
    this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.LEVEL_UPDATED, this.onLevelUpdated,
    this), e.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(S.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated,
    this), e.off(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(S.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated,
    this), e.off(S.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.off(S.ASSET_LIST_LOADED, this.onAssetListLoaded,
    this), e.off(S.BUFFER_CODECS, this.onBufferCodecs, this), e.off(S.BUFFER_APPENDED, this.onBufferAppended, this), e.off(S.BUFFER_FLUSHED,
    this.onBufferFlushed, this), e.off(S.BUFFERED_TO_END, this.onBufferedToEnd, this), e.off(S.MEDIA_ENDED, this.onMediaEnded,
    this), e.off(S.ERROR, this.onError, this), e.off(S.DESTROYING, this.onDestroying, this))
  }
  startLoad(){
    this.resumeBuffering()
  }
  stopLoad(){
    this.pauseBuffering()
  }
  resumeBuffering(){
    var e;
    (e=this.getBufferingPlayer())==null||e.resumeBuffering()
  }
  pauseBuffering(){
    var e;
    (e=this.getBufferingPlayer())==null||e.pauseBuffering()
  }
  destroy(){
    this.unregisterListeners(), this.stopLoad(), this.assetListLoader&&this.assetListLoader.destroy(), this.emptyPlayerQueue(),
    this.clearScheduleState(), this.schedule&&this.schedule.destroy(), this.media=this.detachedData=this.mediaSelection=this.requiredTracks=this.altSelection=this.schedule=this.manager=null,
    this.hls=this.HlsPlayerClass=this.log=null, this.assetListLoader=null, this.onPlay=this.onPause=this.onSeeking=this.onTimeupdate=null,
    this.onScheduleUpdate=null
  }
  onDestroying(){
    const e=this.primaryMedia||this.media;
    e&&this.removeMediaListeners(e)
  }
  removeMediaListeners(e){
    it(e, "play", this.onPlay), it(e, "pause", this.onPause), it(e, "seeking", this.onSeeking), it(e, "timeupdate", this.onTimeupdate)
  }
  onMediaAttaching(e, t){
    const s=this.media=t.media;
    Ze(s, "seeking", this.onSeeking), Ze(s, "timeupdate", this.onTimeupdate), Ze(s, "play", this.onPlay), Ze(s, "pause", this.onPause)
  }
  onMediaAttached(e, t){
    const s=this.effectivePlayingItem, n=this.detachedData;
    if(this.detachedData=null, s===null)this.checkStart();
    else if(!n){
      this.clearScheduleState();
      const i=this.findItemIndex(s);
      this.setSchedulePosition(i)
    }

  }
  clearScheduleState(){
    this.log("clear schedule state"), this.playingItem=this.bufferingItem=this.waitingItem=this.endedItem=this.playingAsset=this.endedAsset=this.bufferingAsset=null
  }
  onMediaDetaching(e, t){
    const s=!!t.transferMedia, n=this.media;
    if(this.media=null, !s&&(n&&this.removeMediaListeners(n), this.detachedData)){
      const i=this.getBufferingPlayer();
      i&&(this.log(`Removing schedule state for detachedData and ${i}`), this.playingAsset=this.endedAsset=this.bufferingAsset=this.bufferingItem=this.waitingItem=this.detachedData=null,
      i.detachMedia()), this.shouldPlay=!1
    }

  }
  get interstitialsManager(){
    if(!this.hls)return null;
    if(this.manager)return this.manager;
    const e=this, t=()=>e.bufferingItem||e.waitingItem, s=d=>d&&e.getAssetPlayer(d.identifier), n=(d, h, f, g, y)=>{
      if(d){
        let x=d[h].start;
        const p=d.event;
        if(p){
          if(h==="playout"||p.timelineOccupancy!==oo.Point){
            const v=s(f);
            (v==null?void 0:v.interstitial)===p&&(x+=v.assetItem.startOffset+v[y])
          }

        }
        else{
          const v=g==="bufferedPos"?a():e[g];
          x+=v-d.start
        }
        return x
      }
      return 0
    }, i=(d, h)=>{
      var f;
      if(d!==0&&h!=="primary"&&(f=e.schedule)!=null&&f.length){
        var g;
        const y=e.schedule.findItemIndexAtTime(d), x=(g=e.schedule.items)==null?void 0:g[y];
        if(x){
          const p=x[h].start-x.start;
          return d+p
        }

      }
      return d
    }, a=()=>{
      const d=e.bufferedPos;
      return d===Number.MAX_VALUE?o("primary"):Math.max(d, 0)
    }, o=d=>{
      var h, f;
      return(h=e.primaryDetails)!=null&&h.live?e.primaryDetails.edge:((f=e.schedule)==null?void 0:f.durations[d])||0
    }, l=(d, h)=>{
      var f, g;
      const y=e.effectivePlayingItem;
      if(y!=null&&(f=y.event)!=null&&f.restrictions.skip||!e.schedule)return;
      e.log(`seek to ${d} "${h}"`);
      const x=e.effectivePlayingItem, p=e.schedule.findItemIndexAtTime(d, h), v=(g=e.schedule.items)==null?void 0:g[p], E=e.getBufferingPlayer(),
      T=E==null?void 0:E.interstitial, I=T==null?void 0:T.appendInPlace, b=x&&e.itemsMatch(x, v);
      if(x&&(I||b)){
        const L=s(e.playingAsset), A=(L==null?void 0:L.media)||e.primaryMedia;
        if(A){
          const w=h==="primary"?A.currentTime:n(x, h, e.playingAsset, "timelinePos", "currentTime"), R=d-w, D=(I?w:A.currentTime)+R;
          if(D>=0&&(!L||I||D<=L.duration)){
            A.currentTime=D;
            return
          }

        }

      }
      if(v){
        let L=d;
        if(h!=="primary"){
          const w=v[h].start, R=d-w;
          L=v.start+R
        }
        const A=!e.isInterstitial(v);
        if((!e.isInterstitial(x)||x.event.appendInPlace)&&(A||v.event.appendInPlace)){
          const w=e.media||(I?E==null?void 0:E.media:null);
          w&&(w.currentTime=L)
        }
        else if(x){
          const w=e.findItemIndex(x);
          if(p>w){
            const D=e.schedule.findJumpRestrictedIndex(w+1, p);
            if(D>w){
              e.setSchedulePosition(D);
              return
            }

          }
          let R=0;
          if(A)e.timelinePos=L, e.checkBuffer();
          else{
            const D=v.event.assetList, $=d-(v[h]||v).start;
            for(let V=D.length;
            V--;
            ){
              const Y=D[V];
              if(Y.duration&&$>=Y.startOffset&&$<Y.startOffset+Y.duration){
                R=V;
                break
              }

            }

          }
          e.setSchedulePosition(p, R)
        }

      }

    }, c=()=>{
      const d=e.effectivePlayingItem;
      if(e.isInterstitial(d))return d;
      const h=t();
      return e.isInterstitial(h)?h:null
    }, u={
      get bufferedEnd(){
        const d=t(), h=e.bufferingItem;
        if(h&&h===d){
          var f;
          return n(h, "playout", e.bufferingAsset, "bufferedPos", "bufferedEnd")-h.playout.start||((f=e.bufferingAsset)==null?void 0:f.startOffset)||0
        }
        return 0
      }, get currentTime(){
        const d=c(), h=e.effectivePlayingItem;
        return h&&h===d?n(h, "playout", e.effectivePlayingAsset, "timelinePos", "currentTime")-h.playout.start:0
      }, set currentTime(d){
        const h=c(), f=e.effectivePlayingItem;
        f&&f===h&&l(d+f.playout.start, "playout")
      }, get duration(){
        const d=c();
        return d?d.playout.end-d.playout.start:0
      }, get assetPlayers(){
        var d;
        const h=(d=c())==null?void 0:d.event.assetList;
        return h?h.map(f=>e.getAssetPlayer(f.identifier)):[]
      }, get playingIndex(){
        var d;
        const h=(d=c())==null?void 0:d.event;
        return h&&e.effectivePlayingAsset?h.findAssetIndex(e.effectivePlayingAsset):-1
      }, get scheduleItem(){
        return c()
      }

    };
    return this.manager={
      get events(){
        var d;
        return((d=e.schedule)==null||(d=d.events)==null?void 0:d.slice(0))||[]
      }, get schedule(){
        var d;
        return((d=e.schedule)==null||(d=d.items)==null?void 0:d.slice(0))||[]
      }, get interstitialPlayer(){
        return c()?u:null
      }, get playerQueue(){
        return e.playerQueue.slice(0)
      }, get bufferingAsset(){
        return e.bufferingAsset
      }, get bufferingItem(){
        return t()
      }, get bufferingIndex(){
        const d=t();
        return e.findItemIndex(d)
      }, get playingAsset(){
        return e.effectivePlayingAsset
      }, get playingItem(){
        return e.effectivePlayingItem
      }, get playingIndex(){
        const d=e.effectivePlayingItem;
        return e.findItemIndex(d)
      }, primary:{
        get bufferedEnd(){
          return a()
        }, get currentTime(){
          const d=e.timelinePos;
          return d>0?d:0
        }, set currentTime(d){
          l(d, "primary")
        }, get duration(){
          return o("primary")
        }, get seekableStart(){
          var d;
          return((d=e.primaryDetails)==null?void 0:d.fragmentStart)||0
        }

      }, integrated:{
        get bufferedEnd(){
          return n(t(), "integrated", e.bufferingAsset, "bufferedPos", "bufferedEnd")
        }, get currentTime(){
          return n(e.effectivePlayingItem, "integrated", e.effectivePlayingAsset, "timelinePos", "currentTime")
        }, set currentTime(d){
          l(d, "integrated")
        }, get duration(){
          return o("integrated")
        }, get seekableStart(){
          var d;
          return i(((d=e.primaryDetails)==null?void 0:d.fragmentStart)||0, "integrated")
        }

      }, skip:()=>{
        const d=e.effectivePlayingItem, h=d==null?void 0:d.event;
        if(h&&!h.restrictions.skip){
          const f=e.findItemIndex(d);
          if(h.appendInPlace){
            const g=d.playout.start+d.event.duration;
            l(g+.001, "playout")
          }
          else e.advanceAfterAssetEnded(h, f, 1/0)
        }

      }

    }

  }
  get effectivePlayingItem(){
    return this.waitingItem||this.playingItem||this.endedItem
  }
  get effectivePlayingAsset(){
    return this.playingAsset||this.endedAsset
  }
  get playingLastItem(){
    var e;
    const t=this.playingItem, s=(e=this.schedule)==null?void 0:e.items;
    return!this.playbackStarted||!t||!s?!1:this.findItemIndex(t)===s.length-1
  }
  get playbackStarted(){
    return this.effectivePlayingItem!==null
  }
  get currentTime(){
    var e, t;
    if(this.mediaSelection===null)return;
    const s=this.waitingItem||this.playingItem;
    if(this.isInterstitial(s)&&!s.event.appendInPlace)return;
    let n=this.media;
    !n&&(e=this.bufferingItem)!=null&&(e=e.event)!=null&&e.appendInPlace&&(n=this.primaryMedia);
    const i=(t=n)==null?void 0:t.currentTime;
    if(!(i===void 0||!G(i)))return i
  }
  get primaryMedia(){
    var e;
    return this.media||((e=this.detachedData)==null?void 0:e.media)||null
  }
  isInterstitial(e){
    return!!(e!=null&&e.event)
  }
  retreiveMediaSource(e, t){
    const s=this.getAssetPlayer(e);
    s&&this.transferMediaFromPlayer(s, t)
  }
  transferMediaFromPlayer(e, t){
    const s=e.interstitial.appendInPlace, n=e.media;
    if(s&&n===this.primaryMedia){
      if(this.bufferingAsset=null, (!t||this.isInterstitial(t)&&!t.event.appendInPlace)&&t&&n){
        this.detachedData={
          media:n
        };
        return
      }
      const i=e.transferMedia();
      this.log(`transfer MediaSource from ${e} ${me(i)}`), this.detachedData=i
    }
    else t&&n&&(this.shouldPlay||(this.shouldPlay=!n.paused))
  }
  transferMediaTo(e, t){
    var s, n;
    if(e.media===t)return;
    let i=null;
    const a=this.hls, o=e!==a, l=o&&e.interstitial.appendInPlace, c=(s=this.detachedData)==null?void 0:s.mediaSource;
    let u;
    if(a.media)l&&(i=a.transferMedia(), this.detachedData=i), u="Primary";
    else if(c){
      const g=this.getBufferingPlayer();
      g?(i=g.transferMedia(), u=`${g}`):u="detached MediaSource"
    }
    else u="detached media";
    if(!i){
      if(c)i=this.detachedData, this.log(`using detachedData: MediaSource ${me(i)}`);
      else if(!this.detachedData||a.media===t){
        const g=this.playerQueue;
        g.length>1&&g.forEach(y=>{
          if(o&&y.interstitial.appendInPlace!==l){
            const x=y.interstitial;
            this.clearInterstitial(y.interstitial, null), x.appendInPlace=!1, x.appendInPlace&&this.warn(`Could not change append strategy for queued assets ${x}`)
          }

        }), this.hls.detachMedia(), this.detachedData={
          media:t
        }

      }

    }
    const d=i&&"mediaSource"in i&&((n=i.mediaSource)==null?void 0:n.readyState)!=="closed", h=d&&i?i:t;
    this.log(`${d?"transfering MediaSource":"attaching media"} to ${o?e:"Primary"} from ${u} (media.currentTime: ${t.currentTime})`);
    const f=this.schedule;
    if(h===i&&f){
      const g=o&&e.assetId===f.assetIdAtEnd;
      h.overrides={
        duration:f.duration, endOfStream:!o||g, cueRemoval:!o
      }

    }
    e.attachMedia(h)
  }
  onInterstitialCueEnter(){
    this.onTimeupdate()
  }
  checkStart(){
    const e=this.schedule, t=e==null?void 0:e.events;
    if(!t||this.playbackDisabled||!this.media)return;
    this.bufferedPos===-1&&(this.bufferedPos=0);
    const s=this.timelinePos, n=this.effectivePlayingItem;
    if(s===-1){
      const i=this.hls.startPosition;
      if(this.log(Xi("checkStart", i)), this.timelinePos=i, t.length&&t[0].cue.pre){
        const a=e.findEventIndex(t[0].identifier);
        this.setSchedulePosition(a)
      }
      else if(i>=0||!this.primaryLive){
        const a=this.timelinePos=i>0?i:0, o=e.findItemIndexAtTime(a);
        this.setSchedulePosition(o)
      }

    }
    else if(n&&!this.playingItem){
      const i=e.findItemIndex(n);
      this.setSchedulePosition(i)
    }

  }
  advanceAssetBuffering(e, t){
    const s=e.event, n=s.findAssetIndex(t), i=El(s, n);
    if(!s.isAssetPastPlayoutLimit(i))this.bufferedToEvent(e, i);
    else if(this.schedule){
      var a;
      const o=(a=this.schedule.items)==null?void 0:a[this.findItemIndex(e)+1];
      o&&this.bufferedToItem(o)
    }

  }
  advanceAfterAssetEnded(e, t, s){
    const n=El(e, s);
    if(e.isAssetPastPlayoutLimit(n)){
      if(this.schedule){
        const i=this.schedule.items;
        if(i){
          const a=t+1, o=i.length;
          if(a>=o){
            this.setSchedulePosition(-1);
            return
          }
          const l=e.resumeTime;
          this.timelinePos<l&&(this.log(Xi("advanceAfterAssetEnded", l)), this.timelinePos=l, e.appendInPlace&&this.advanceInPlace(l),
          this.checkBuffer(this.bufferedPos<l)), this.setSchedulePosition(a)
        }

      }

    }
    else{
      if(e.appendInPlace){
        const i=e.assetList[n];
        i&&this.advanceInPlace(i.timelineStart)
      }
      this.setSchedulePosition(t, n)
    }

  }
  setScheduleToAssetAtTime(e, t){
    const s=this.schedule;
    if(!s)return;
    const n=t.parentIdentifier, i=s.getEvent(n);
    if(i){
      const a=s.findEventIndex(n), o=s.findAssetIndex(i, e);
      this.advanceAfterAssetEnded(i, a, o-1)
    }

  }
  setSchedulePosition(e, t){
    var s;
    const n=(s=this.schedule)==null?void 0:s.items;
    if(!n||this.playbackDisabled)return;
    const i=e>=0?n[e]:null;
    this.log(`setSchedulePosition ${e}, ${t} (${i&&Nt(i)}) pos: ${this.timelinePos}`);
    const a=this.waitingItem||this.playingItem, o=this.playingLastItem;
    if(this.isInterstitial(a)){
      const u=a.event, d=this.playingAsset, h=d==null?void 0:d.identifier, f=h?this.getAssetPlayer(h):null;
      if(f&&h&&(!this.eventItemsMatch(a, i)||t!==void 0&&h!==u.assetList[t].identifier)){
        var l;
        const g=u.findAssetIndex(d);
        if(this.log(`INTERSTITIAL_ASSET_ENDED ${g+1}/${u.assetList.length} ${Rs(d)}`), this.endedAsset=d, this.playingAsset=null,
        this.hls.trigger(S.INTERSTITIAL_ASSET_ENDED, {
          asset:d, assetListIndex:g, event:u, schedule:n.slice(0), scheduleIndex:e, player:f
        }), a!==this.playingItem){
          this.itemsMatch(a, this.playingItem)&&!this.playingAsset&&this.advanceAfterAssetEnded(u, this.findItemIndex(this.playingItem),
          g);
          return
        }
        this.retreiveMediaSource(h, i), f.media&&!((l=this.detachedData)!=null&&l.mediaSource)&&f.detachMedia()
      }
      if(!this.eventItemsMatch(a, i)&&(this.endedItem=a, this.playingItem=null, this.log(`INTERSTITIAL_ENDED ${u} ${Nt(a)}`),
      u.hasPlayed=!0, this.hls.trigger(S.INTERSTITIAL_ENDED, {
        event:u, schedule:n.slice(0), scheduleIndex:e
      }), u.cue.once)){
        var c;
        this.updateSchedule();
        const g=(c=this.schedule)==null?void 0:c.items;
        if(i&&g){
          const y=this.findItemIndex(i);
          this.advanceSchedule(y, g, t, a, o)
        }
        return
      }

    }
    this.advanceSchedule(e, n, t, a, o)
  }
  advanceSchedule(e, t, s, n, i){
    const a=this.schedule;
    if(!a)return;
    const o=t[e]||null, l=this.primaryMedia, c=this.playerQueue;
    if(c.length&&c.forEach(u=>{
      const d=u.interstitial, h=a.findEventIndex(d.identifier);
      (h<e||h>e+1)&&this.clearInterstitial(d, o)
    }), this.isInterstitial(o)){
      this.timelinePos=Math.min(Math.max(this.timelinePos, o.start), o.end);
      const u=o.event;
      if(s===void 0){
        s=a.findAssetIndex(u, this.timelinePos);
        const g=El(u, s-1);
        if(u.isAssetPastPlayoutLimit(g)||u.appendInPlace&&this.timelinePos===o.end){
          this.advanceAfterAssetEnded(u, e, s);
          return
        }
        s=g
      }
      const d=this.waitingItem;
      this.assetsBuffered(o, l)||this.setBufferingItem(o);
      let h=this.preloadAssets(u, s);
      if(this.eventItemsMatch(o, d||n)||(this.waitingItem=o, this.log(`INTERSTITIAL_STARTED ${Nt(o)} ${u.appendInPlace?"append in place":""}`),
      this.hls.trigger(S.INTERSTITIAL_STARTED, {
        event:u, schedule:t.slice(0), scheduleIndex:e
      })), !u.assetListLoaded){
        this.log(`Waiting for ASSET-LIST to complete loading ${u}`);
        return
      }
      if(u.assetListLoader&&(u.assetListLoader.destroy(), u.assetListLoader=void 0), !l){
        this.log(`Waiting for attachMedia to start Interstitial ${u}`);
        return
      }
      this.waitingItem=this.endedItem=null, this.playingItem=o;
      const f=u.assetList[s];
      if(!f){
        this.advanceAfterAssetEnded(u, e, s||0);
        return
      }
      if(h||(h=this.getAssetPlayer(f.identifier)), h===null||h.destroyed){
        const g=u.assetList.length;
        this.warn(`asset ${s+1}/${g} player destroyed ${u}`), h=this.createAssetPlayer(u, f, s), h.loadSource()
      }
      if(!this.eventItemsMatch(o, this.bufferingItem)&&u.appendInPlace&&this.isAssetBuffered(f))return;
      this.startAssetPlayer(h, s, t, e, l), this.shouldPlay&&Gf(h.media)
    }
    else o?(this.resumePrimary(o, e, n), this.shouldPlay&&Gf(this.hls.media)):i&&this.isInterstitial(n)&&(this.endedItem=null,
    this.playingItem=n, n.event.appendInPlace||this.attachPrimary(a.durations.primary, null))
  }
  get playbackDisabled(){
    return this.hls.config.enableInterstitialPlayback===!1
  }
  get primaryDetails(){
    var e;
    return(e=this.mediaSelection)==null?void 0:e.main.details
  }
  get primaryLive(){
    var e;
    return!!((e=this.primaryDetails)!=null&&e.live)
  }
  resumePrimary(e, t, s){
    var n, i;
    if(this.playingItem=e, this.playingAsset=this.endedAsset=null, this.waitingItem=this.endedItem=null, this.bufferedToItem(e),
    this.log(`resuming ${Nt(e)}`), !((n=this.detachedData)!=null&&n.mediaSource)){
      let o=this.timelinePos;
      (o<e.start||o>=e.end)&&(o=this.getPrimaryResumption(e, t), this.log(Xi("resumePrimary", o)), this.timelinePos=o), this.attachPrimary(o,
      e)
    }
    if(!s)return;
    const a=(i=this.schedule)==null?void 0:i.items;
    a&&(this.log(`INTERSTITIALS_PRIMARY_RESUMED ${Nt(e)}`), this.hls.trigger(S.INTERSTITIALS_PRIMARY_RESUMED, {
      schedule:a.slice(0), scheduleIndex:t
    }), this.checkBuffer())
  }
  getPrimaryResumption(e, t){
    const s=e.start;
    if(this.primaryLive){
      const n=this.primaryDetails;
      if(t===0)return this.hls.startPosition;
      if(n&&(s<n.fragmentStart||s>n.edge))return this.hls.liveSyncPosition||-1
    }
    return s
  }
  isAssetBuffered(e){
    const t=this.getAssetPlayer(e.identifier);
    return t!=null&&t.hls?t.hls.bufferedToEnd:Z.bufferInfo(this.primaryMedia, this.timelinePos, 0).end+1>=e.timelineStart+(e.duration||0)
  }
  attachPrimary(e, t, s){
    t?this.setBufferingItem(t):this.bufferingItem=this.playingItem, this.bufferingAsset=null;
    const n=this.primaryMedia;
    if(!n)return;
    const i=this.hls;
    i.media?this.checkBuffer():(this.transferMediaTo(i, n), s&&this.startLoadingPrimaryAt(e, s)), s||(this.log(Xi("attachPrimary",
    e)), this.timelinePos=e, this.startLoadingPrimaryAt(e, s))
  }
  startLoadingPrimaryAt(e, t){
    var s;
    const n=this.hls;
    !n.loadingEnabled||!n.media||Math.abs((((s=n.mainForwardBufferInfo)==null?void 0:s.start)||n.media.currentTime)-e)>.5?n.startLoad(e,
    t):n.bufferingEnabled||n.resumeBuffering()
  }
  onManifestLoading(){
    var e;
    this.stopLoad(), (e=this.schedule)==null||e.reset(), this.emptyPlayerQueue(), this.clearScheduleState(), this.shouldPlay=!1,
    this.bufferedPos=this.timelinePos=-1, this.mediaSelection=this.altSelection=this.manager=this.requiredTracks=null, this.hls.off(S.BUFFER_CODECS,
    this.onBufferCodecs, this), this.hls.on(S.BUFFER_CODECS, this.onBufferCodecs, this)
  }
  onLevelUpdated(e, t){
    if(t.level===-1||!this.schedule)return;
    const s=this.hls.levels[t.level];
    if(!s.details)return;
    const n=ce(ce({

    }, this.mediaSelection||this.altSelection), {

    }, {
      main:s
    });
    this.mediaSelection=n, this.schedule.parseInterstitialDateRanges(n, this.hls.config.interstitialAppendInPlace), !this.effectivePlayingItem&&this.schedule.items&&this.checkStart()

  }
  onAudioTrackUpdated(e, t){
    const s=this.hls.audioTracks[t.id], n=this.mediaSelection;
    if(!n){
      this.altSelection=ce(ce({

      }, this.altSelection), {

      }, {
        audio:s
      });
      return
    }
    const i=ce(ce({

    }, n), {

    }, {
      audio:s
    });
    this.mediaSelection=i
  }
  onSubtitleTrackUpdated(e, t){
    const s=this.hls.subtitleTracks[t.id], n=this.mediaSelection;
    if(!n){
      this.altSelection=ce(ce({

      }, this.altSelection), {

      }, {
        subtitles:s
      });
      return
    }
    const i=ce(ce({

    }, n), {

    }, {
      subtitles:s
    });
    this.mediaSelection=i
  }
  onAudioTrackSwitching(e, t){
    const s=Qh(t);
    this.playerQueue.forEach(({
      hls:n
    })=>n&&(n.setAudioOption(t)||n.setAudioOption(s)))
  }
  onSubtitleTrackSwitch(e, t){
    const s=Qh(t);
    this.playerQueue.forEach(({
      hls:n
    })=>n&&(n.setSubtitleOption(t)||t.id!==-1&&n.setSubtitleOption(s)))
  }
  onBufferCodecs(e, t){
    const s=t.tracks;
    s&&(this.requiredTracks=s)
  }
  onBufferAppended(e, t){
    this.checkBuffer()
  }
  onBufferFlushed(e, t){
    const s=this.playingItem;
    if(s&&!this.itemsMatch(s, this.bufferingItem)&&!this.isInterstitial(s)){
      const n=this.timelinePos;
      this.bufferedPos=n, this.checkBuffer()
    }

  }
  onBufferedToEnd(e){
    if(!this.schedule)return;
    const t=this.schedule.events;
    if(this.bufferedPos<Number.MAX_VALUE&&t){
      for(let n=0;
      n<t.length;
      n++){
        const i=t[n];
        if(i.cue.post){
          var s;
          const a=this.schedule.findEventIndex(i.identifier), o=(s=this.schedule.items)==null?void 0:s[a];
          this.isInterstitial(o)&&this.eventItemsMatch(o, this.bufferingItem)&&this.bufferedToItem(o, 0);
          break
        }

      }
      this.bufferedPos=Number.MAX_VALUE
    }

  }
  onMediaEnded(e){
    const t=this.playingItem;
    if(!this.playingLastItem&&t){
      const s=this.findItemIndex(t);
      this.setSchedulePosition(s+1)
    }
    else this.shouldPlay=!1
  }
  updateItem(e, t){
    var s;
    const n=(s=this.schedule)==null?void 0:s.items;
    if(e&&n){
      const i=this.findItemIndex(e, t);
      return n[i]||null
    }
    return null
  }
  trimInPlace(e, t){
    if(this.isInterstitial(e)&&e.event.appendInPlace&&t.end-e.end>.25){
      e.event.assetList.forEach((i, a)=>{
        e.event.isAssetPastPlayoutLimit(a)&&this.clearAssetPlayer(i.identifier, null)
      });
      const s=e.end+.25, n=Z.bufferInfo(this.primaryMedia, s, 0);
      (n.end>s||(n.nextStart||0)>s)&&(this.log(`trim buffered interstitial ${Nt(e)} (was ${Nt(t)})`), this.attachPrimary(s,
      null, !0), this.flushFrontBuffer(s))
    }

  }
  itemsMatch(e, t){
    return!!t&&(e===t||e.event&&t.event&&this.eventItemsMatch(e, t)||!e.event&&!t.event&&this.findItemIndex(e)===this.findItemIndex(t))
  }
  eventItemsMatch(e, t){
    var s;
    return!!t&&(e===t||e.event.identifier===((s=t.event)==null?void 0:s.identifier))
  }
  findItemIndex(e, t){
    return e&&this.schedule?this.schedule.findItemIndex(e, t):-1
  }
  updateSchedule(e=!1){
    var t;
    const s=this.mediaSelection;
    s&&((t=this.schedule)==null||t.updateSchedule(s, [], e))
  }
  checkBuffer(e){
    var t;
    const s=(t=this.schedule)==null?void 0:t.items;
    if(!s)return;
    const n=Z.bufferInfo(this.primaryMedia, this.timelinePos, 0);
    e&&(this.bufferedPos=this.timelinePos), e||(e=n.len<1), this.updateBufferedPos(n.end, s, e)
  }
  updateBufferedPos(e, t, s){
    const n=this.schedule, i=this.bufferingItem;
    if(this.bufferedPos>e||!n)return;
    if(t.length===1&&this.itemsMatch(t[0], i)){
      this.bufferedPos=e;
      return
    }
    const a=this.playingItem, o=this.findItemIndex(a);
    let l=n.findItemIndexAtTime(e);
    if(this.bufferedPos<e){
      var c;
      const u=this.findItemIndex(i), d=Math.min(u+1, t.length-1), h=t[d];
      if((l===-1&&i&&e>=i.end||(c=h.event)!=null&&c.appendInPlace&&e+.01>=h.start)&&(l=d), this.isInterstitial(i)){
        const f=i.event;
        if(d-o>1&&f.appendInPlace===!1||f.assetList.length===0&&f.assetListLoader)return
      }
      if(this.bufferedPos=e, l>u&&l>o)this.bufferedToItem(h);
      else{
        const f=this.primaryDetails;
        this.primaryLive&&f&&e>f.edge-f.targetduration&&h.start<f.edge+this.hls.config.interstitialLiveLookAhead&&this.isInterstitial(h)&&this.preloadAssets(h.event,
        0)
      }

    }
    else s&&a&&!this.itemsMatch(a, i)&&(l===o?this.bufferedToItem(a):l===o+1&&this.bufferedToItem(t[l]))
  }
  assetsBuffered(e, t){
    return e.event.assetList.length===0?!1:!e.event.assetList.some(n=>{
      const i=this.getAssetPlayer(n.identifier);
      return!(i!=null&&i.bufferedInPlaceToEnd(t))
    })
  }
  setBufferingItem(e){
    const t=this.bufferingItem, s=this.schedule;
    if(!this.itemsMatch(e, t)&&s){
      const{
        items:n, events:i
      }
      =s;
      if(!n||!i)return t;
      const a=this.isInterstitial(e), o=this.getBufferingPlayer();
      this.bufferingItem=e, this.bufferedPos=Math.max(e.start, Math.min(e.end, this.timelinePos));
      const l=o?o.remaining:t?t.end-this.timelinePos:0;
      if(this.log(`INTERSTITIALS_BUFFERED_TO_BOUNDARY ${Nt(e)}`+(t?` (${l.toFixed(2)} remaining)`:"")), !this.playbackDisabled)if(a){
        const c=s.findAssetIndex(e.event, this.bufferedPos);
        e.event.assetList.forEach((u, d)=>{
          const h=this.getAssetPlayer(u.identifier);
          h&&(d===c&&h.loadSource(), h.resumeBuffering())
        })
      }
      else this.hls.resumeBuffering(), this.playerQueue.forEach(c=>c.pauseBuffering());
      this.hls.trigger(S.INTERSTITIALS_BUFFERED_TO_BOUNDARY, {
        events:i.slice(0), schedule:n.slice(0), bufferingIndex:this.findItemIndex(e), playingIndex:this.findItemIndex(this.playingItem)
      })
    }
    else this.bufferingItem!==e&&(this.bufferingItem=e);
    return t
  }
  bufferedToItem(e, t=0){
    const s=this.setBufferingItem(e);
    if(!this.playbackDisabled){
      if(this.isInterstitial(e))this.bufferedToEvent(e, t);
      else if(s!==null){
        this.bufferingAsset=null;
        const n=this.detachedData;
        n?n.mediaSource?this.attachPrimary(e.start, e, !0):this.preloadPrimary(e):this.preloadPrimary(e)
      }

    }

  }
  preloadPrimary(e){
    const t=this.findItemIndex(e), s=this.getPrimaryResumption(e, t);
    this.startLoadingPrimaryAt(s)
  }
  bufferedToEvent(e, t){
    const s=e.event, n=s.assetList.length===0&&!s.assetListLoader, i=s.cue.once;
    if(n||!i){
      const a=this.preloadAssets(s, t);
      if(a!=null&&a.interstitial.appendInPlace){
        const o=this.primaryMedia;
        o&&this.bufferAssetPlayer(a, o)
      }

    }

  }
  preloadAssets(e, t){
    const s=e.assetUrl, n=e.assetList.length, i=n===0&&!e.assetListLoader, a=e.cue.once;
    if(i){
      const l=e.timelineStart;
      if(e.appendInPlace){
        var o;
        const h=this.playingItem;
        !this.isInterstitial(h)&&(h==null||(o=h.nextEvent)==null?void 0:o.identifier)===e.identifier&&this.flushFrontBuffer(l+.25)
      }
      let c, u=0;
      if(!this.playingItem&&this.primaryLive&&(u=this.hls.startPosition, u===-1&&(u=this.hls.liveSyncPosition||0)), u&&!(e.cue.pre||e.cue.post)){
        const h=u-l;
        h>0&&(c=Math.round(h*1e3)/1e3)
      }
      if(this.log(`Load interstitial asset ${t+1}/${s?1:n} ${e}${c?` live-start: ${
        u
      }
       start-offset: ${
        c
      }
      `:""}`), s)return this.createAsset(e, 0, 0, l, e.duration, s);
      const d=this.assetListLoader.loadAssetList(e, c);
      d&&(e.assetListLoader=d)
    }
    else if(!a&&n){
      for(let c=t;
      c<n;
      c++){
        const u=e.assetList[c], d=this.getAssetPlayerQueueIndex(u.identifier);
        (d===-1||this.playerQueue[d].destroyed)&&!u.error&&this.createAssetPlayer(e, u, c)
      }
      const l=e.assetList[t];
      if(l){
        const c=this.getAssetPlayer(l.identifier);
        return c&&c.loadSource(), c
      }

    }
    return null
  }
  flushFrontBuffer(e){
    const t=this.requiredTracks;
    if(!t)return;
    this.log(`Removing front buffer starting at ${e}`), Object.keys(t).forEach(n=>{
      this.hls.trigger(S.BUFFER_FLUSHING, {
        startOffset:e, endOffset:1/0, type:n
      })
    })
  }
  getAssetPlayerQueueIndex(e){
    const t=this.playerQueue;
    for(let s=0;
    s<t.length;
    s++)if(e===t[s].assetId)return s;
    return-1
  }
  getAssetPlayer(e){
    const t=this.getAssetPlayerQueueIndex(e);
    return this.playerQueue[t]||null
  }
  getBufferingPlayer(){
    const{
      playerQueue:e, primaryMedia:t
    }
    =this;
    if(t){
      for(let s=0;
      s<e.length;
      s++)if(e[s].media===t)return e[s]
    }
    return null
  }
  createAsset(e, t, s, n, i, a){
    const o={
      parentIdentifier:e.identifier, identifier:$L(e, a, t), duration:i, startOffset:s, timelineStart:n, uri:a
    };
    return this.createAssetPlayer(e, o, t)
  }
  createAssetPlayer(e, t, s){
    const n=this.hls, i=n.userConfig;
    let a=i.videoPreference;
    const o=n.loadLevelObj||n.levels[n.currentLevel];
    (a||o)&&(a=he({

    }, a), o.videoCodec&&(a.videoCodec=o.videoCodec), o.videoRange&&(a.allowedVideoRanges=[o.videoRange]));
    const l=n.audioTracks[n.audioTrack], c=n.subtitleTracks[n.subtitleTrack];
    let u=0;
    if(this.primaryLive||e.appendInPlace){
      const T=this.timelinePos-t.timelineStart;
      if(T>1){
        const I=t.duration;
        I&&T<I&&(u=T)
      }

    }
    const d=t.identifier, h=ce(ce({

    }, i), {

    }, {
      maxMaxBufferLength:Math.min(180, n.config.maxMaxBufferLength), autoStartLoad:!0, startFragPrefetch:!0, primarySessionId:n.sessionId,
      assetPlayerId:d, abrEwmaDefaultEstimate:n.bandwidthEstimate, interstitialsController:void 0, startPosition:u, liveDurationInfinity:!1,
      testBandwidth:!1, videoPreference:a, audioPreference:l||i.audioPreference, subtitlePreference:c||i.subtitlePreference
    });
    e.appendInPlace&&(e.appendInPlaceStarted=!0, t.timelineStart&&(h.timelineOffset=t.timelineStart));
    const f=h.cmcd;
    f!=null&&f.sessionId&&f.contentId&&(h.cmcd=he({

    }, f, {
      contentId:jn(t.uri)
    })), this.getAssetPlayer(d)&&this.warn(`Duplicate date range identifier ${e} and asset ${d}`);
    const g=new GL(this.HlsPlayerClass, h, e, t);
    this.playerQueue.push(g), e.assetList[s]=t;
    let y=!0;
    const x=T=>{
      if(T.live){
        var I;
        const A=new Error(`Interstitials MUST be VOD assets ${e}`), w={
          fatal:!0, type:q.OTHER_ERROR, details:k.INTERSTITIAL_ASSET_ITEM_ERROR, error:A
        }, R=((I=this.schedule)==null?void 0:I.findEventIndex(e.identifier))||-1;
        this.handleAssetItemError(w, e, R, s, A.message);
        return
      }
      const b=T.edge-T.fragmentStart, L=t.duration;
      (y||L===null||b>L)&&(y=!1, this.log(`Interstitial asset "${d}" duration change ${L} > ${b}`), t.duration=b, this.updateSchedule())
    };
    g.on(S.LEVEL_UPDATED, (T, {
      details:I
    })=>x(I)), g.on(S.LEVEL_PTS_UPDATED, (T, {
      details:I
    })=>x(I)), g.on(S.EVENT_CUE_ENTER, ()=>this.onInterstitialCueEnter());
    const p=(T, I)=>{
      const b=this.getAssetPlayer(d);
      if(b&&I.tracks){
        b.off(S.BUFFER_CODECS, p), b.tracks=I.tracks;
        const L=this.primaryMedia;
        this.bufferingAsset===b.assetItem&&L&&!b.media&&this.bufferAssetPlayer(b, L)
      }

    };
    g.on(S.BUFFER_CODECS, p);
    const v=()=>{
      var T;
      const I=this.getAssetPlayer(d);
      if(this.log(`buffered to end of asset ${I}`), !I||!this.schedule)return;
      const b=this.schedule.findEventIndex(e.identifier), L=(T=this.schedule.items)==null?void 0:T[b];
      this.isInterstitial(L)&&this.advanceAssetBuffering(L, t)
    };
    g.on(S.BUFFERED_TO_END, v);
    const E=T=>()=>{
      if(!this.getAssetPlayer(d)||!this.schedule)return;
      this.shouldPlay=!0;
      const b=this.schedule.findEventIndex(e.identifier);
      this.advanceAfterAssetEnded(e, b, T)
    };
    return g.once(S.MEDIA_ENDED, E(s)), g.once(S.PLAYOUT_LIMIT_REACHED, E(1/0)), g.on(S.ERROR, (T, I)=>{
      if(!this.schedule)return;
      const b=this.getAssetPlayer(d);
      if(I.details===k.BUFFER_STALLED_ERROR){
        if(b!=null&&b.appendInPlace){
          this.handleInPlaceStall(e);
          return
        }
        this.onTimeupdate(), this.checkBuffer(!0);
        return
      }
      this.handleAssetItemError(I, e, this.schedule.findEventIndex(e.identifier), s, `Asset player error ${I.error} ${e}`)
    }), g.on(S.DESTROYING, ()=>{
      if(!this.getAssetPlayer(d)||!this.schedule)return;
      const I=new Error(`Asset player destroyed unexpectedly ${d}`), b={
        fatal:!0, type:q.OTHER_ERROR, details:k.INTERSTITIAL_ASSET_ITEM_ERROR, error:I
      };
      this.handleAssetItemError(b, e, this.schedule.findEventIndex(e.identifier), s, I.message)
    }), this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${Rs(t)}`), this.hls.trigger(S.INTERSTITIAL_ASSET_PLAYER_CREATED, {
      asset:t, assetListIndex:s, event:e, player:g
    }), g
  }
  clearInterstitial(e, t){
    this.clearAssetPlayers(e, t), e.reset()
  }
  clearAssetPlayers(e, t){
    e.assetList.forEach(s=>{
      this.clearAssetPlayer(s.identifier, t)
    })
  }
  resetAssetPlayer(e){
    const t=this.getAssetPlayerQueueIndex(e);
    if(t!==-1){
      this.log(`reset asset player "${e}" after error`);
      const s=this.playerQueue[t];
      this.transferMediaFromPlayer(s, null), s.resetDetails()
    }

  }
  clearAssetPlayer(e, t){
    const s=this.getAssetPlayerQueueIndex(e);
    if(s!==-1){
      const n=this.playerQueue[s];
      this.log(`clear ${n} toSegment: ${t&&Nt(t)}`), this.transferMediaFromPlayer(n, t), this.playerQueue.splice(s, 1), n.destroy()
    }

  }
  emptyPlayerQueue(){
    let e;
    for(;
    e=this.playerQueue.pop();
    )e.destroy();
    this.playerQueue=[]
  }
  startAssetPlayer(e, t, s, n, i){
    const{
      interstitial:a, assetItem:o, assetId:l
    }
    =e, c=a.assetList.length, u=this.playingAsset;
    this.endedAsset=null, this.playingAsset=o, (!u||u.identifier!==l)&&(u&&(this.clearAssetPlayer(u.identifier, s[n]), delete u.error),
    this.log(`INTERSTITIAL_ASSET_STARTED ${t+1}/${c} ${Rs(o)}`), this.hls.trigger(S.INTERSTITIAL_ASSET_STARTED, {
      asset:o, assetListIndex:t, event:a, schedule:s.slice(0), scheduleIndex:n, player:e
    })), this.bufferAssetPlayer(e, i)
  }
  bufferAssetPlayer(e, t){
    var s, n;
    if(!this.schedule)return;
    const{
      interstitial:i, assetItem:a
    }
    =e, o=this.schedule.findEventIndex(i.identifier), l=(s=this.schedule.items)==null?void 0:s[o];
    if(!l)return;
    e.loadSource(), this.setBufferingItem(l), this.bufferingAsset=a;
    const c=this.getBufferingPlayer();
    if(c===e)return;
    const u=i.appendInPlace;
    if(u&&(c==null?void 0:c.interstitial.appendInPlace)===!1)return;
    const d=(c==null?void 0:c.tracks)||((n=this.detachedData)==null?void 0:n.tracks)||this.requiredTracks;
    if(u&&a!==this.playingAsset){
      if(!e.tracks){
        this.log(`Waiting for track info before buffering ${e}`);
        return
      }
      if(d&&!Ug(d, e.tracks)){
        const h=new Error(`Asset ${Rs(a)} SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(d)}')`),
        f={
          fatal:!0, type:q.OTHER_ERROR, details:k.INTERSTITIAL_ASSET_ITEM_ERROR, error:h
        }, g=i.findAssetIndex(a);
        this.handleAssetItemError(f, i, o, g, h.message);
        return
      }

    }
    this.transferMediaTo(e, t)
  }
  handleInPlaceStall(e){
    const t=this.schedule, s=this.primaryMedia;
    if(!t||!s)return;
    const n=s.currentTime, i=t.findAssetIndex(e, n), a=e.assetList[i];
    if(a){
      const o=this.getAssetPlayer(a.identifier);
      if(o){
        const l=o.currentTime||n-a.timelineStart, c=o.duration-l;
        if(this.warn(`Stalled at ${l} of ${l+c} in ${o} ${e} (media.currentTime: ${n})`), l&&(c/s.playbackRate<.5||o.bufferedInPlaceToEnd(s))&&o.hls){
          const u=t.findEventIndex(e.identifier);
          this.advanceAfterAssetEnded(e, u, i)
        }

      }

    }

  }
  advanceInPlace(e){
    const t=this.primaryMedia;
    t&&t.currentTime<e&&(t.currentTime=e)
  }
  handleAssetItemError(e, t, s, n, i){
    if(e.details===k.BUFFER_STALLED_ERROR)return;
    const a=t.assetList[n]||null;
    if(this.warn(`INTERSTITIAL_ASSET_ERROR ${a&&Rs(a)} ${e.error}`), !this.schedule)return;
    const o=(a==null?void 0:a.identifier)||"", l=this.getAssetPlayerQueueIndex(o), c=this.playerQueue[l]||null, u=this.schedule.items,
    d=he({

    }, e, {
      fatal:!1, errorAction:Ys(!0), asset:a, assetListIndex:n, event:t, schedule:u, scheduleIndex:s, player:c
    });
    if(this.hls.trigger(S.INTERSTITIAL_ASSET_ERROR, d), !e.fatal)return;
    const h=this.playingAsset, f=this.bufferingAsset, g=new Error(i);
    if(a&&(this.clearAssetPlayer(o, null), a.error=g), !t.assetList.some(y=>!y.error))t.error=g;
    else for(let y=n;
    y<t.assetList.length;
    y++)this.resetAssetPlayer(t.assetList[y].identifier);
    this.updateSchedule(!0), t.error?this.primaryFallback(t):h&&h.identifier===o?this.advanceAfterAssetEnded(t, s, n):f&&f.identifier===o&&this.isInterstitial(this.bufferingItem)&&this.advanceAssetBuffering(this.bufferingItem,
    f)
  }
  primaryFallback(e){
    const t=e.timelineStart, s=this.effectivePlayingItem;
    let n=this.timelinePos;
    if(s){
      this.log(`Fallback to primary from event "${e.identifier}" start: ${t} pos: ${n} playing: ${Nt(s)} error: ${e.error}`),
      n===-1&&(n=this.hls.startPosition);
      const a=this.updateItem(s, n);
      this.itemsMatch(s, a)&&this.clearInterstitial(e, null), e.appendInPlace&&(this.attachPrimary(t, null), this.flushFrontBuffer(t))
    }
    else if(n===-1){
      this.checkStart();
      return
    }
    if(!this.schedule)return;
    const i=this.schedule.findItemIndexAtTime(n);
    this.setSchedulePosition(i)
  }
  onAssetListLoaded(e, t){
    var s, n;
    const i=t.event, a=i.identifier, o=t.assetListResponse.ASSETS;
    if(!((s=this.schedule)!=null&&s.hasEvent(a)))return;
    const l=i.timelineStart, c=i.duration;
    let u=0;
    o.forEach((y, x)=>{
      const p=parseFloat(y.DURATION);
      this.createAsset(i, x, u, l+u, p, y.URI), u+=p
    }), i.duration=u, this.log(`Loaded asset-list with duration: ${u} (was: ${c}) ${i}`);
    const d=this.waitingItem, h=(d==null?void 0:d.event.identifier)===a;
    this.updateSchedule();
    const f=(n=this.bufferingItem)==null?void 0:n.event;
    if(h){
      var g;
      const y=this.schedule.findEventIndex(a), x=(g=this.schedule.items)==null?void 0:g[y];
      if(x){
        if(!this.playingItem&&this.timelinePos>x.end&&this.schedule.findItemIndexAtTime(this.timelinePos)!==y){
          i.error=new Error(`Interstitial ${o.length?"no longer within playback range":"asset-list is empty"} ${this.timelinePos} ${i}`),
          this.log(i.error.message), this.updateSchedule(!0), this.primaryFallback(i);
          return
        }
        this.setBufferingItem(x)
      }
      this.setSchedulePosition(y)
    }
    else if((f==null?void 0:f.identifier)===a){
      const y=i.assetList[0];
      if(y){
        const x=this.getAssetPlayer(y.identifier);
        if(f.appendInPlace){
          const p=this.primaryMedia;
          x&&p&&this.bufferAssetPlayer(x, p)
        }
        else x&&x.loadSource()
      }

    }

  }
  onError(e, t){
    if(this.schedule)switch(t.details){
      case k.ASSET_LIST_PARSING_ERROR:case k.ASSET_LIST_LOAD_ERROR:case k.ASSET_LIST_LOAD_TIMEOUT:{
        const s=t.interstitial;
        s&&(this.updateSchedule(!0), this.primaryFallback(s));
        break
      }
      case k.BUFFER_STALLED_ERROR:{
        const s=this.endedItem||this.waitingItem||this.playingItem;
        if(this.isInterstitial(s)&&s.event.appendInPlace){
          this.handleInPlaceStall(s.event);
          return
        }
        this.log(`Primary player stall @${this.timelinePos} bufferedPos: ${this.bufferedPos}`), this.onTimeupdate(), this.checkBuffer(!0);
        break
      }

    }

  }

}
const Vf=500;
class WL extends td{
  constructor(e, t, s){
    super(e, t, s, "subtitle-stream-controller", W.SUBTITLE), this.currentTrackId=-1, this.tracksBuffered=[], this.mainDetails=null,
    this.registerListeners()
  }
  onHandlerDestroying(){
    this.unregisterListeners(), super.onHandlerDestroying(), this.mainDetails=null
  }
  registerListeners(){
    super.registerListeners();
    const{
      hls:e
    }
    =this;
    e.on(S.LEVEL_LOADED, this.onLevelLoaded, this), e.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(S.SUBTITLE_TRACK_SWITCH,
    this.onSubtitleTrackSwitch, this), e.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(S.SUBTITLE_FRAG_PROCESSED,
    this.onSubtitleFragProcessed, this), e.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this)
  }
  unregisterListeners(){
    super.unregisterListeners();
    const{
      hls:e
    }
    =this;
    e.off(S.LEVEL_LOADED, this.onLevelLoaded, this), e.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
    e.off(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded,
    this), e.off(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(S.BUFFER_FLUSHING, this.onBufferFlushing,
    this)
  }
  startLoad(e, t){
    this.stopLoad(), this.state=N.IDLE, this.setInterval(Vf), this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset,
    this.startPosition=t?-1:e, this.tick()
  }
  onManifestLoading(){
    super.onManifestLoading(), this.mainDetails=null
  }
  onMediaDetaching(e, t){
    this.tracksBuffered=[], super.onMediaDetaching(e, t)
  }
  onLevelLoaded(e, t){
    this.mainDetails=t.details
  }
  onSubtitleFragProcessed(e, t){
    const{
      frag:s, success:n
    }
    =t;
    if(this.fragContextChanged(s)||(_e(s)&&(this.fragPrevious=s), this.state=N.IDLE), !n)return;
    const i=this.tracksBuffered[this.currentTrackId];
    if(!i)return;
    let a;
    const o=s.start;
    for(let c=0;
    c<i.length;
    c++)if(o>=i[c].start&&o<=i[c].end){
      a=i[c];
      break
    }
    const l=s.start+s.duration;
    a?a.end=l:(a={
      start:o, end:l
    }, i.push(a)), this.fragmentTracker.fragBuffered(s), this.fragBufferedComplete(s, null), this.media&&this.tick()
  }
  onBufferFlushing(e, t){
    const{
      startOffset:s, endOffset:n
    }
    =t;
    if(s===0&&n!==Number.POSITIVE_INFINITY){
      const i=n-1;
      if(i<=0)return;
      t.endOffsetSubtitles=Math.max(0, i), this.tracksBuffered.forEach(a=>{
        for(let o=0;
        o<a.length;
        ){
          if(a[o].end<=i){
            a.shift();
            continue
          }
          else if(a[o].start<i)a[o].start=i;
          else break;
          o++
        }

      }), this.fragmentTracker.removeFragmentsInRange(s, i, W.SUBTITLE)
    }

  }
  onError(e, t){
    const s=t.frag;
    (s==null?void 0:s.type)===W.SUBTITLE&&(t.details===k.FRAG_GAP&&this.fragmentTracker.fragBuffered(s, !0), this.fragCurrent&&this.fragCurrent.abortRequests(),
    this.state!==N.STOPPED&&(this.state=N.IDLE))
  }
  onSubtitleTracksUpdated(e, {
    subtitleTracks:t
  }){
    if(this.levels&&jp(this.levels, t)){
      this.levels=t.map(s=>new li(s));
      return
    }
    this.tracksBuffered=[], this.levels=t.map(s=>{
      const n=new li(s);
      return this.tracksBuffered[n.id]=[], n
    }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, W.SUBTITLE), this.fragPrevious=null, this.mediaBuffer=null
  }
  onSubtitleTrackSwitch(e, t){
    var s;
    if(this.currentTrackId=t.id, !((s=this.levels)!=null&&s.length)||this.currentTrackId===-1){
      this.clearInterval();
      return
    }
    const n=this.levels[this.currentTrackId];
    n!=null&&n.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null, n&&this.state!==N.STOPPED&&this.setInterval(Vf)
  }
  onSubtitleTrackLoaded(e, t){
    var s;
    const{
      currentTrackId:n, levels:i
    }
    =this, {
      details:a, id:o
    }
    =t;
    if(!i){
      this.warn(`Subtitle tracks were reset while loading level ${o}`);
      return
    }
    const l=i[o];
    if(o>=i.length||!l)return;
    this.log(`Subtitle track ${o} loaded [${a.startSN},${a.endSN}]${a.lastPartSn?`[part-${
      a.lastPartSn
    }
    -${
      a.lastPartIndex
    }]`:""},duration:${a.totalduration}`), this.mediaBuffer=this.mediaBufferTimeRanges;
    let c=0;
    if(a.live||(s=l.details)!=null&&s.live){
      if(a.deltaUpdateFailed)return;
      const d=this.mainDetails;
      if(!d){
        this.startFragRequested=!1;
        return
      }
      const h=d.fragments[0];
      if(!l.details)a.hasProgramDateTime&&d.hasProgramDateTime?(io(a, d), c=a.fragmentStart):h&&(c=h.start, Nc(a, c));
      else{
        var u;
        c=this.alignPlaylists(a, l.details, (u=this.levelLastLoaded)==null?void 0:u.details), c===0&&h&&(c=h.start, Nc(a,
        c))
      }
      d&&!this.startFragRequested&&this.setStartPosition(d, c)
    }
    l.details=a, this.levelLastLoaded=l, o===n&&(this.hls.trigger(S.SUBTITLE_TRACK_UPDATED, {
      details:a, id:o, groupId:t.groupId
    }), this.tick(), a.live&&!this.fragCurrent&&this.media&&this.state===N.IDLE&&(ps(null, a.fragments, this.media.currentTime,
    0)||(this.warn("Subtitle playlist not aligned with playback"), l.details=void 0)))
  }
  _handleFragmentLoadComplete(e){
    const{
      frag:t, payload:s
    }
    =e, n=t.decryptdata, i=this.hls;
    if(!this.fragContextChanged(t)&&s&&s.byteLength>0&&n!=null&&n.key&&n.iv&&qs(n.method)){
      const a=performance.now();
      this.decrypter.decrypt(new Uint8Array(s), n.key.buffer, n.iv.buffer, Ju(n.method)).catch(o=>{
        throw i.trigger(S.ERROR, {
          type:q.MEDIA_ERROR, details:k.FRAG_DECRYPT_ERROR, fatal:!1, error:o, reason:o.message, frag:t
        }), o
      }).then(o=>{
        const l=performance.now();
        i.trigger(S.FRAG_DECRYPTED, {
          frag:t, payload:o, stats:{
            tstart:a, tdecrypt:l
          }

        })
      }).catch(o=>{
        this.warn(`${o.name}: ${o.message}`), this.state=N.IDLE
      })
    }

  }
  doTick(){
    if(!this.media){
      this.state=N.IDLE;
      return
    }
    if(this.state===N.IDLE){
      const{
        currentTrackId:e, levels:t
      }
      =this, s=t==null?void 0:t[e];
      if(!s||!t.length||!s.details||this.waitForLive(s))return;
      const{
        config:n
      }
      =this, i=this.getLoadPosition(), a=Z.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[], i, n.maxBufferHole),
      {
        end:o, len:l
      }
      =a, c=s.details, u=this.hls.maxBufferLength+c.levelTargetDuration;
      if(l>u)return;
      const d=c.fragments, h=d.length, f=c.edge;
      let g=null;
      const y=this.fragPrevious;
      if(o<f){
        const v=n.maxFragLookUpTolerance, E=o>f-v?0:v;
        g=ps(y, d, Math.max(d[0].start, o), E), !g&&y&&y.start<d[0].start&&(g=d[0])
      }
      else g=d[h-1];
      if(g=this.filterReplacedPrimary(g, s.details), !g)return;
      const x=g.sn-c.startSN, p=d[x-1];
      if(p&&p.cc===g.cc&&this.fragmentTracker.getState(p)===Pe.NOT_LOADED&&(g=p), this.fragmentTracker.getState(g)===Pe.NOT_LOADED){
        const v=this.mapToInitFragWhenRequired(g);
        v&&this.loadFragment(v, s, o)
      }

    }

  }
  loadFragment(e, t, s){
    _e(e)?super.loadFragment(e, t, s):this._loadInitSegment(e, t)
  }
  get mediaBufferTimeRanges(){
    return new zL(this.tracksBuffered[this.currentTrackId]||[])
  }

}
class zL{
  constructor(e){
    this.buffered=void 0;
    const t=(s, n, i)=>{
      if(n=n>>>0, n>i-1)throw new DOMException(`Failed to execute '${s}' on 'TimeRanges': The index provided (${n}) is greater than the maximum bound (${i})`);
      return e[n][s]
    };
    this.buffered={
      get length(){
        return e.length
      }, end(s){
        return t("end", s, e.length)
      }, start(s){
        return t("start", s, e.length)
      }

    }

  }

}
const YL={
  42:225, 92:233, 94:237, 95:243, 96:250, 123:231, 124:247, 125:209, 126:241, 127:9608, 128:174, 129:176, 130:189, 131:191,
  132:8482, 133:162, 134:163, 135:9834, 136:224, 137:32, 138:232, 139:226, 140:234, 141:238, 142:244, 143:251, 144:193, 145:201,
  146:211, 147:218, 148:220, 149:252, 150:8216, 151:161, 152:42, 153:8217, 154:9473, 155:169, 156:8480, 157:8226, 158:8220,
  159:8221, 160:192, 161:194, 162:199, 163:200, 164:202, 165:203, 166:235, 167:206, 168:207, 169:239, 170:212, 171:217, 172:249,
  173:219, 174:171, 175:187, 176:195, 177:227, 178:205, 179:204, 180:236, 181:210, 182:242, 183:213, 184:245, 185:123, 186:125,
  187:92, 188:94, 189:95, 190:124, 191:8764, 192:196, 193:228, 194:214, 195:246, 196:223, 197:165, 198:164, 199:9475, 200:197,
  201:229, 202:216, 203:248, 204:9487, 205:9491, 206:9495, 207:9499
}, sy=r=>String.fromCharCode(YL[r]||r), Ot=15, ar=100, qL={
  17:1, 18:3, 21:5, 22:7, 23:9, 16:11, 19:12, 20:14
}, QL={
  17:2, 18:4, 21:6, 22:8, 23:10, 19:13, 20:15
}, XL={
  25:1, 26:3, 29:5, 30:7, 31:9, 24:11, 27:12, 28:14
}, ZL={
  25:2, 26:4, 29:6, 30:8, 31:10, 27:13, 28:15
}, JL=["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class eA{
  constructor(){
    this.time=null, this.verboseLevel=0
  }
  log(e, t){
    if(this.verboseLevel>=e){
      const s=typeof t=="function"?t():t;
      ue.log(`${this.time} [${e}] ${s}`)
    }

  }

}
const ts=function(e){
  const t=[];
  for(let s=0;
  s<e.length;
  s++)t.push(e[s].toString(16));
  return t
};
class ny{
  constructor(){
    this.foreground="white", this.underline=!1, this.italics=!1, this.background="black", this.flash=!1
  }
  reset(){
    this.foreground="white", this.underline=!1, this.italics=!1, this.background="black", this.flash=!1
  }
  setStyles(e){
    const t=["foreground", "underline", "italics", "background", "flash"];
    for(let s=0;
    s<t.length;
    s++){
      const n=t[s];
      e.hasOwnProperty(n)&&(this[n]=e[n])
    }

  }
  isDefault(){
    return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash
  }
  equals(e){
    return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash
  }
  copy(e){
    this.foreground=e.foreground, this.underline=e.underline, this.italics=e.italics, this.background=e.background, this.flash=e.flash
  }
  toString(){
    return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash
  }

}
class tA{
  constructor(){
    this.uchar=" ", this.penState=new ny
  }
  reset(){
    this.uchar=" ", this.penState.reset()
  }
  setChar(e, t){
    this.uchar=e, this.penState.copy(t)
  }
  setPenState(e){
    this.penState.copy(e)
  }
  equals(e){
    return this.uchar===e.uchar&&this.penState.equals(e.penState)
  }
  copy(e){
    this.uchar=e.uchar, this.penState.copy(e.penState)
  }
  isEmpty(){
    return this.uchar===" "&&this.penState.isDefault()
  }

}
class rA{
  constructor(e){
    this.chars=[], this.pos=0, this.currPenState=new ny, this.cueStartTime=null, this.logger=void 0;
    for(let t=0;
    t<ar;
    t++)this.chars.push(new tA);
    this.logger=e
  }
  equals(e){
    for(let t=0;
    t<ar;
    t++)if(!this.chars[t].equals(e.chars[t]))return!1;
    return!0
  }
  copy(e){
    for(let t=0;
    t<ar;
    t++)this.chars[t].copy(e.chars[t])
  }
  isEmpty(){
    let e=!0;
    for(let t=0;
    t<ar;
    t++)if(!this.chars[t].isEmpty()){
      e=!1;
      break
    }
    return e
  }
  setCursor(e){
    this.pos!==e&&(this.pos=e), this.pos<0?(this.logger.log(3, "Negative cursor position "+this.pos), this.pos=0):this.pos>ar&&(this.logger.log(3,
    "Too large cursor position "+this.pos), this.pos=ar)
  }
  moveCursor(e){
    const t=this.pos+e;
    if(e>1)for(let s=this.pos+1;
    s<t+1;
    s++)this.chars[s].setPenState(this.currPenState);
    this.setCursor(t)
  }
  backSpace(){
    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
  }
  insertChar(e){
    e>=144&&this.backSpace();
    const t=sy(e);
    if(this.pos>=ar){
      this.logger.log(0, ()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");
      return
    }
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1)
  }
  clearFromPos(e){
    let t;
    for(t=e;
    t<ar;
    t++)this.chars[t].reset()
  }
  clear(){
    this.clearFromPos(0), this.pos=0, this.currPenState.reset()
  }
  clearToEndOfRow(){
    this.clearFromPos(this.pos)
  }
  getTextString(){
    const e=[];
    let t=!0;
    for(let s=0;
    s<ar;
    s++){
      const n=this.chars[s].uchar;
      n!==" "&&(t=!1), e.push(n)
    }
    return t?"":e.join("")
  }
  setPenStyles(e){
    this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
  }

}
class Sl{
  constructor(e){
    this.rows=[], this.currRow=Ot-1, this.nrRollUpRows=null, this.lastOutputScreen=null, this.logger=void 0;
    for(let t=0;
    t<Ot;
    t++)this.rows.push(new rA(e));
    this.logger=e
  }
  reset(){
    for(let e=0;
    e<Ot;
    e++)this.rows[e].clear();
    this.currRow=Ot-1
  }
  equals(e){
    let t=!0;
    for(let s=0;
    s<Ot;
    s++)if(!this.rows[s].equals(e.rows[s])){
      t=!1;
      break
    }
    return t
  }
  copy(e){
    for(let t=0;
    t<Ot;
    t++)this.rows[t].copy(e.rows[t])
  }
  isEmpty(){
    let e=!0;
    for(let t=0;
    t<Ot;
    t++)if(!this.rows[t].isEmpty()){
      e=!1;
      break
    }
    return e
  }
  backSpace(){
    this.rows[this.currRow].backSpace()
  }
  clearToEndOfRow(){
    this.rows[this.currRow].clearToEndOfRow()
  }
  insertChar(e){
    this.rows[this.currRow].insertChar(e)
  }
  setPen(e){
    this.rows[this.currRow].setPenStyles(e)
  }
  moveCursor(e){
    this.rows[this.currRow].moveCursor(e)
  }
  setCursor(e){
    this.logger.log(2, "setCursor: "+e), this.rows[this.currRow].setCursor(e)
  }
  setPAC(e){
    this.logger.log(2, ()=>"pacData = "+me(e));
    let t=e.row-1;
    if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1), this.nrRollUpRows&&this.currRow!==t){
      for(let o=0;
      o<Ot;
      o++)this.rows[o].clear();
      const i=this.currRow+1-this.nrRollUpRows, a=this.lastOutputScreen;
      if(a){
        const o=a.rows[i].cueStartTime, l=this.logger.time;
        if(o!==null&&l!==null&&o<l)for(let c=0;
        c<this.nrRollUpRows;
        c++)this.rows[t-this.nrRollUpRows+c+1].copy(a.rows[i+c])
      }

    }
    this.currRow=t;
    const s=this.rows[this.currRow];
    if(e.indent!==null){
      const i=e.indent, a=Math.max(i-1, 0);
      s.setCursor(e.indent), e.color=s.chars[a].penState.foreground
    }
    const n={
      foreground:e.color, underline:e.underline, italics:e.italics, background:"black", flash:!1
    };
    this.setPen(n)
  }
  setBkgData(e){
    this.logger.log(2, ()=>"bkgData = "+me(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
  }
  setRollUpRows(e){
    this.nrRollUpRows=e
  }
  rollUp(){
    if(this.nrRollUpRows===null){
      this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      return
    }
    this.logger.log(1, ()=>this.getDisplayText());
    const e=this.currRow+1-this.nrRollUpRows, t=this.rows.splice(e, 1)[0];
    t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up")
  }
  getDisplayText(e){
    e=e||!1;
    const t=[];
    let s="", n=-1;
    for(let i=0;
    i<Ot;
    i++){
      const a=this.rows[i].getTextString();
      a&&(n=i+1, e?t.push("Row "+n+": '"+a+"'"):t.push(a.trim()))
    }
    return t.length>0&&(e?s="["+t.join(" | ")+"]":s=t.join(`
`)), s
  }
  getTextAndFormat(){
    return this.rows
  }

}
class Kf{
  constructor(e, t, s){
    this.chNr=void 0, this.outputFilter=void 0, this.mode=void 0, this.verbose=void 0, this.displayedMemory=void 0, this.nonDisplayedMemory=void 0,
    this.lastOutputScreen=void 0, this.currRollUpRow=void 0, this.writeScreen=void 0, this.cueStartTime=void 0, this.logger=void 0,
    this.chNr=e, this.outputFilter=t, this.mode=null, this.verbose=0, this.displayedMemory=new Sl(s), this.nonDisplayedMemory=new Sl(s),
    this.lastOutputScreen=new Sl(s), this.currRollUpRow=this.displayedMemory.rows[Ot-1], this.writeScreen=this.displayedMemory,
    this.mode=null, this.cueStartTime=null, this.logger=s
  }
  reset(){
    this.mode=null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(),
    this.currRollUpRow=this.displayedMemory.rows[Ot-1], this.writeScreen=this.displayedMemory, this.mode=null, this.cueStartTime=null
  }
  getHandler(){
    return this.outputFilter
  }
  setHandler(e){
    this.outputFilter=e
  }
  setPAC(e){
    this.writeScreen.setPAC(e)
  }
  setBkgData(e){
    this.writeScreen.setBkgData(e)
  }
  setMode(e){
    e!==this.mode&&(this.mode=e, this.logger.log(2, ()=>"MODE="+e), this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,
    this.writeScreen.reset()), this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null, this.nonDisplayedMemory.nrRollUpRows=null),
    this.mode=e)
  }
  insertChars(e){
    for(let s=0;
    s<e.length;
    s++)this.writeScreen.insertChar(e[s]);
    const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";
    this.logger.log(2, ()=>t+": "+this.writeScreen.getDisplayText(!0)), (this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,
    ()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
  }
  ccRCL(){
    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
  }
  ccBS(){
    this.logger.log(2, "BS - BackSpace"), this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(), this.writeScreen===this.displayedMemory&&this.outputDataUpdate())
  }
  ccAOF(){

  }
  ccAON(){

  }
  ccDER(){
    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
  }
  ccRU(e){
    this.logger.log(2, "RU("+e+") - Roll Up"), this.writeScreen=this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
  }
  ccFON(){
    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
      flash:!0
    })
  }
  ccRDC(){
    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
  }
  ccTR(){
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT")
  }
  ccRTD(){
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT")
  }
  ccEDM(){
    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
  }
  ccCR(){
    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
  }
  ccENM(){
    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
  }
  ccEOC(){
    if(this.logger.log(2, "EOC - End Of Caption"), this.mode==="MODE_POP-ON"){
      const e=this.displayedMemory;
      this.displayedMemory=this.nonDisplayedMemory, this.nonDisplayedMemory=e, this.writeScreen=this.nonDisplayedMemory, this.logger.log(1,
      ()=>"DISP: "+this.displayedMemory.getDisplayText())
    }
    this.outputDataUpdate(!0)
  }
  ccTO(e){
    this.logger.log(2, "TO("+e+") - Tab Offset"), this.writeScreen.moveCursor(e)
  }
  ccMIDROW(e){
    const t={
      flash:!1
    };
    if(t.underline=e%2===1, t.italics=e>=46, t.italics)t.foreground="white";
    else{
      const s=Math.floor(e/2)-16, n=["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
      t.foreground=n[s]
    }
    this.logger.log(2, "MIDROW: "+me(t)), this.writeScreen.setPen(t)
  }
  outputDataUpdate(e=!1){
    const t=this.logger.time;
    t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,
    t, this.lastOutputScreen), e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(), this.cueStartTime=this.displayedMemory.isEmpty()?null:t),
    this.lastOutputScreen.copy(this.displayedMemory))
  }
  cueSplitAtTime(e){
    this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,
    e, this.displayedMemory), this.cueStartTime=e))
  }

}
class Hf{
  constructor(e, t, s){
    this.channels=void 0, this.currentChannel=0, this.cmdHistory=nA(), this.logger=void 0;
    const n=this.logger=new eA;
    this.channels=[null, new Kf(e, t, n), new Kf(e+1, s, n)]
  }
  getHandler(e){
    return this.channels[e].getHandler()
  }
  setHandler(e, t){
    this.channels[e].setHandler(t)
  }
  addData(e, t){
    this.logger.time=e;
    for(let s=0;
    s<t.length;
    s+=2){
      const n=t[s]&127, i=t[s+1]&127;
      let a=!1, o=null;
      if(n===0&&i===0)continue;
      this.logger.log(3, ()=>"["+ts([t[s], t[s+1]])+"] -> ("+ts([n, i])+")");
      const l=this.cmdHistory;
      if(n>=16&&n<=31){
        if(sA(n, i, l)){
          Zi(null, null, l), this.logger.log(3, ()=>"Repeated command ("+ts([n, i])+") is dropped");
          continue
        }
        Zi(n, i, this.cmdHistory), a=this.parseCmd(n, i), a||(a=this.parseMidrow(n, i)), a||(a=this.parsePAC(n, i)), a||(a=this.parseBackgroundAttributes(n,
        i))
      }
      else Zi(null, null, l);
      if(!a&&(o=this.parseChars(n, i), o)){
        const u=this.currentChannel;
        u&&u>0?this.channels[u].insertChars(o):this.logger.log(2, "No channel found yet. TEXT-MODE?")
      }
      !a&&!o&&this.logger.log(2, ()=>"Couldn't parse cleaned data "+ts([n, i])+" orig: "+ts([t[s], t[s+1]]))
    }

  }
  parseCmd(e, t){
    const s=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47, n=(e===23||e===31)&&t>=33&&t<=35;
    if(!(s||n))return!1;
    const i=e===20||e===21||e===23?1:2, a=this.channels[i];
    return e===20||e===21||e===28||e===29?t===32?a.ccRCL():t===33?a.ccBS():t===34?a.ccAOF():t===35?a.ccAON():t===36?a.ccDER():t===37?a.ccRU(2):t===38?a.ccRU(3):t===39?a.ccRU(4):t===40?a.ccFON()
    :t===41?a.ccRDC():t===42?a.ccTR():t===43?a.ccRTD():t===44?a.ccEDM():t===45?a.ccCR():t===46?a.ccENM():t===47&&a.ccEOC():a.ccTO(t-32),
    this.currentChannel=i, !0
  }
  parseMidrow(e, t){
    let s=0;
    if((e===17||e===25)&&t>=32&&t<=47){
      if(e===17?s=1:s=2, s!==this.currentChannel)return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
      const n=this.channels[s];
      return n?(n.ccMIDROW(t), this.logger.log(3, ()=>"MIDROW ("+ts([e, t])+")"), !0):!1
    }
    return!1
  }
  parsePAC(e, t){
    let s;
    const n=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127, i=(e===16||e===24)&&t>=64&&t<=95;
    if(!(n||i))return!1;
    const a=e<=23?1:2;
    t>=64&&t<=95?s=a===1?qL[e]:XL[e]:s=a===1?QL[e]:ZL[e];
    const o=this.channels[a];
    return o?(o.setPAC(this.interpretPAC(s, t)), this.currentChannel=a, !0):!1
  }
  interpretPAC(e, t){
    let s;
    const n={
      color:null, italics:!1, indent:null, underline:!1, row:e
    };
    return t>95?s=t-96:s=t-64, n.underline=(s&1)===1, s<=13?n.color=["white", "green", "blue", "cyan", "red", "yellow", "magenta",
    "white"][Math.floor(s/2)]:s<=15?(n.italics=!0, n.color="white"):n.indent=Math.floor((s-16)/2)*4, n
  }
  parseChars(e, t){
    let s, n=null, i=null;
    if(e>=25?(s=2, i=e-8):(s=1, i=e), i>=17&&i<=19){
      let a;
      i===17?a=t+80:i===18?a=t+112:a=t+144, this.logger.log(2, ()=>"Special char '"+sy(a)+"' in channel "+s), n=[a]
    }
    else e>=32&&e<=127&&(n=t===0?[e]:[e, t]);
    return n&&this.logger.log(3, ()=>"Char codes =  "+ts(n).join(",")), n
  }
  parseBackgroundAttributes(e, t){
    const s=(e===16||e===24)&&t>=32&&t<=47, n=(e===23||e===31)&&t>=45&&t<=47;
    if(!(s||n))return!1;
    let i;
    const a={

    };
    e===16||e===24?(i=Math.floor((t-32)/2), a.background=JL[i], t%2===1&&(a.background=a.background+"_semi")):t===45?a.background="transparent":(a.foreground="black",
    t===47&&(a.underline=!0));
    const o=e<=23?1:2;
    return this.channels[o].setBkgData(a), !0
  }
  reset(){
    for(let e=0;
    e<Object.keys(this.channels).length;
    e++){
      const t=this.channels[e];
      t&&t.reset()
    }
    Zi(null, null, this.cmdHistory)
  }
  cueSplitAtTime(e){
    for(let t=0;
    t<this.channels.length;
    t++){
      const s=this.channels[t];
      s&&s.cueSplitAtTime(e)
    }

  }

}
function Zi(r, e, t){
  t.a=r, t.b=e
}
function sA(r, e, t){
  return t.a===r&&t.b===e
}
function nA(){
  return{
    a:null, b:null
  }

}
var fd=function(){
  if(no!=null&&no.VTTCue)return self.VTTCue;
  const r=["", "lr", "rl"], e=["start", "middle", "end", "left", "right"];
  function t(o, l){
    if(typeof l!="string"||!Array.isArray(o))return!1;
    const c=l.toLowerCase();
    return~o.indexOf(c)?c:!1
  }
  function s(o){
    return t(r, o)
  }
  function n(o){
    return t(e, o)
  }
  function i(o, ...l){
    let c=1;
    for(;
    c<arguments.length;
    c++){
      const u=arguments[c];
      for(const d in u)o[d]=u[d]
    }
    return o
  }
  function a(o, l, c){
    const u=this, d={
      enumerable:!0
    };
    u.hasBeenReset=!1;
    let h="", f=!1, g=o, y=l, x=c, p=null, v="", E=!0, T="auto", I="start", b=50, L="middle", A=50, w="middle";
    Object.defineProperty(u, "id", i({

    }, d, {
      get:function(){
        return h
      }, set:function(R){
        h=""+R
      }

    })), Object.defineProperty(u, "pauseOnExit", i({

    }, d, {
      get:function(){
        return f
      }, set:function(R){
        f=!!R
      }

    })), Object.defineProperty(u, "startTime", i({

    }, d, {
      get:function(){
        return g
      }, set:function(R){
        if(typeof R!="number")throw new TypeError("Start time must be set to a number.");
        g=R, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "endTime", i({

    }, d, {
      get:function(){
        return y
      }, set:function(R){
        if(typeof R!="number")throw new TypeError("End time must be set to a number.");
        y=R, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "text", i({

    }, d, {
      get:function(){
        return x
      }, set:function(R){
        x=""+R, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "region", i({

    }, d, {
      get:function(){
        return p
      }, set:function(R){
        p=R, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "vertical", i({

    }, d, {
      get:function(){
        return v
      }, set:function(R){
        const D=s(R);
        if(D===!1)throw new SyntaxError("An invalid or illegal string was specified.");
        v=D, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "snapToLines", i({

    }, d, {
      get:function(){
        return E
      }, set:function(R){
        E=!!R, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "line", i({

    }, d, {
      get:function(){
        return T
      }, set:function(R){
        if(typeof R!="number"&&R!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");
        T=R, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "lineAlign", i({

    }, d, {
      get:function(){
        return I
      }, set:function(R){
        const D=n(R);
        if(!D)throw new SyntaxError("An invalid or illegal string was specified.");
        I=D, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "position", i({

    }, d, {
      get:function(){
        return b
      }, set:function(R){
        if(R<0||R>100)throw new Error("Position must be between 0 and 100.");
        b=R, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "positionAlign", i({

    }, d, {
      get:function(){
        return L
      }, set:function(R){
        const D=n(R);
        if(!D)throw new SyntaxError("An invalid or illegal string was specified.");
        L=D, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "size", i({

    }, d, {
      get:function(){
        return A
      }, set:function(R){
        if(R<0||R>100)throw new Error("Size must be between 0 and 100.");
        A=R, this.hasBeenReset=!0
      }

    })), Object.defineProperty(u, "align", i({

    }, d, {
      get:function(){
        return w
      }, set:function(R){
        const D=n(R);
        if(!D)throw new SyntaxError("An invalid or illegal string was specified.");
        w=D, this.hasBeenReset=!0
      }

    })), u.displayState=void 0
  }
  return a.prototype.getCueAsHTML=function(){
    return self.WebVTT.convertCueToDOMTree(self, this.text)
  }, a
}
();
class iA{
  decode(e, t){
    if(!e)return"";
    if(typeof e!="string")throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e))
  }

}
function iy(r){
  function e(s, n, i, a){
    return(s|0)*3600+(n|0)*60+(i|0)+parseFloat(a||0)
  }
  const t=r.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return t?parseFloat(t[2])>59?e(t[2], t[3], 0, t[4]):e(t[1], t[2], t[3], t[4]):null
}
class aA{
  constructor(){
    this.values=Object.create(null)
  }
  set(e, t){
    !this.get(e)&&t!==""&&(this.values[e]=t)
  }
  get(e, t, s){
    return s?this.has(e)?this.values[e]:t[s]:this.has(e)?this.values[e]:t
  }
  has(e){
    return e in this.values
  }
  alt(e, t, s){
    for(let n=0;
    n<s.length;
    ++n)if(t===s[n]){
      this.set(e, t);
      break
    }

  }
  integer(e, t){
    /^-?\d+$/.test(t)&&this.set(e, parseInt(t, 10))
  }
  percent(e, t){
    if(/^([\d]{1,3})(\.[\d]*)?%$/.test(t)){
      const s=parseFloat(t);
      if(s>=0&&s<=100)return this.set(e, s), !0
    }
    return!1
  }

}
function ay(r, e, t, s){
  const n=s?r.split(s):[r];
  for(const i in n){
    if(typeof n[i]!="string")continue;
    const a=n[i].split(t);
    if(a.length!==2)continue;
    const o=a[0], l=a[1];
    e(o, l)
  }

}
const Gc=new fd(0, 0, ""), Ji=Gc.align==="middle"?"middle":"center";
function oA(r, e, t){
  const s=r;
  function n(){
    const o=iy(r);
    if(o===null)throw new Error("Malformed timestamp: "+s);
    return r=r.replace(/^[^\sa-zA-Z-]+/, ""), o
  }
  function i(o, l){
    const c=new aA;
    ay(o, function(h, f){
      let g;
      switch(h){
        case"region":for(let y=t.length-1;
        y>=0;
        y--)if(t[y].id===f){
          c.set(h, t[y].region);
          break
        }
        break;
        case"vertical":c.alt(h, f, ["rl", "lr"]);
        break;
        case"line":g=f.split(","), c.integer(h, g[0]), c.percent(h, g[0])&&c.set("snapToLines", !1), c.alt(h, g[0], ["auto"]),
        g.length===2&&c.alt("lineAlign", g[1], ["start", Ji, "end"]);
        break;
        case"position":g=f.split(","), c.percent(h, g[0]), g.length===2&&c.alt("positionAlign", g[1], ["start", Ji, "end",
        "line-left", "line-right", "auto"]);
        break;
        case"size":c.percent(h, f);
        break;
        case"align":c.alt(h, f, ["start", Ji, "end", "left", "right"]);
        break
      }

    }, /:/, /\s/), l.region=c.get("region", null), l.vertical=c.get("vertical", "");
    let u=c.get("line", "auto");
    u==="auto"&&Gc.line===-1&&(u=-1), l.line=u, l.lineAlign=c.get("lineAlign", "start"), l.snapToLines=c.get("snapToLines",
    !0), l.size=c.get("size", 100), l.align=c.get("align", Ji);
    let d=c.get("position", "auto");
    d==="auto"&&Gc.position===50&&(d=l.align==="start"||l.align==="left"?0:l.align==="end"||l.align==="right"?100:50), l.position=d
  }
  function a(){
    r=r.replace(/^\s+/, "")
  }
  if(a(), e.startTime=n(), a(), r.slice(0, 3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+s);
  r=r.slice(3), a(), e.endTime=n(), a(), i(r, e)
}
function oy(r){
  return r.replace(/<br(?: \/)?>/gi, `
`)
}
class lA{
  constructor(){
    this.state="INITIAL", this.buffer="", this.decoder=new iA, this.regionList=[], this.cue=null, this.oncue=void 0, this.onparsingerror=void 0,
    this.onflush=void 0
  }
  parse(e){
    const t=this;
    e&&(t.buffer+=t.decoder.decode(e, {
      stream:!0
    }));
    function s(){
      let i=t.buffer, a=0;
      for(i=oy(i);
      a<i.length&&i[a]!=="\r"&&i[a]!==`
`;
      )++a;
      const o=i.slice(0, a);
      return i[a]==="\r"&&++a, i[a]===`
`&&++a, t.buffer=i.slice(a), o
    }
    function n(i){
      ay(i, function(a, o){

      }, /:/)
    }
    try{
      let i="";
      if(t.state==="INITIAL"){
        if(!/\r\n|\n/.test(t.buffer))return this;
        i=s();
        const o=i.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if(!(o!=null&&o[0]))throw new Error("Malformed WebVTT signature.");
        t.state="HEADER"
      }
      let a=!1;
      for(;
      t.buffer;
      ){
        if(!/\r\n|\n/.test(t.buffer))return this;
        switch(a?a=!1:i=s(), t.state){
          case"HEADER":/:/.test(i)?n(i):i||(t.state="ID");
          continue;
          case"NOTE":i||(t.state="ID");
          continue;
          case"ID":if(/^NOTE($|[ \t])/.test(i)){
            t.state="NOTE";
            break
          }
          if(!i)continue;
          if(t.cue=new fd(0, 0, ""), t.state="CUE", i.indexOf("-->")===-1){
            t.cue.id=i;
            continue
          }
          case"CUE":if(!t.cue){
            t.state="BADCUE";
            continue
          }
          try{
            oA(i, t.cue, t.regionList)
          }
          catch{
            t.cue=null, t.state="BADCUE";
            continue
          }
          t.state="CUETEXT";
          continue;
          case"CUETEXT":{
            const o=i.indexOf("-->")!==-1;
            if(!i||o&&(a=!0)){
              t.oncue&&t.cue&&t.oncue(t.cue), t.cue=null, t.state="ID";
              continue
            }
            if(t.cue===null)continue;
            t.cue.text&&(t.cue.text+=`
`), t.cue.text+=i
          }
          continue;
          case"BADCUE":i||(t.state="ID")
        }

      }

    }
    catch{
      t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue), t.cue=null, t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"
    }
    return this
  }
  flush(){
    const e=this;
    try{
      if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`, e.parse()), e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")
    }
    catch(t){
      e.onparsingerror&&e.onparsingerror(t)
    }
    return e.onflush&&e.onflush(), this
  }

}
const cA=/\r\n|\n\r|\n|\r/g, Tl=function(e, t, s=0){
  return e.slice(s, s+t.length)===t
}, uA=function(e){
  let t=parseInt(e.slice(-3));
  const s=parseInt(e.slice(-6, -4)), n=parseInt(e.slice(-9, -7)), i=e.length>9?parseInt(e.substring(0, e.indexOf(":"))):0;
  if(!G(t)||!G(s)||!G(n)||!G(i))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
  return t+=1e3*s, t+=60*1e3*n, t+=60*60*1e3*i, t
};
function md(r, e, t){
  return jn(r.toString())+jn(e.toString())+jn(t)
}
const dA=function(e, t, s){
  let n=e[t], i=e[n.prevCC];
  if(!i||!i.new&&n.new){
    e.ccOffset=e.presentationOffset=n.start, n.new=!1;
    return
  }
  for(;
  (a=i)!=null&&a.new;
  ){
    var a;
    e.ccOffset+=n.start-i.start, n.new=!1, n=i, i=e[n.prevCC]
  }
  e.presentationOffset=s
};
function hA(r, e, t, s, n, i, a){
  const o=new lA, l=yt(new Uint8Array(r)).trim().replace(cA, `
`).split(`
`), c=[], u=e?vI(e.baseTime, e.timescale):0;
  let d="00:00.000", h=0, f=0, g, y=!0;
  o.oncue=function(x){
    const p=t[s];
    let v=t.ccOffset;
    const E=(h-u)/9e4;
    if(p!=null&&p.new&&(f!==void 0?v=t.ccOffset=p.start:dA(t, s, E)), E){
      if(!e){
        g=new Error("Missing initPTS for VTT MPEGTS");
        return
      }
      v=E-t.presentationOffset
    }
    const T=x.endTime-x.startTime, I=dt((x.startTime+v-f)*9e4, n*9e4)/9e4;
    x.startTime=Math.max(I, 0), x.endTime=Math.max(I+T, 0);
    const b=x.text.trim();
    x.text=decodeURIComponent(encodeURIComponent(b)), x.id||(x.id=md(x.startTime, x.endTime, b)), x.endTime>0&&c.push(x)
  }, o.onparsingerror=function(x){
    g=x
  }, o.onflush=function(){
    if(g){
      a(g);
      return
    }
    i(c)
  }, l.forEach(x=>{
    if(y)if(Tl(x, "X-TIMESTAMP-MAP=")){
      y=!1, x.slice(16).split(",").forEach(p=>{
        Tl(p, "LOCAL:")?d=p.slice(6):Tl(p, "MPEGTS:")&&(h=parseInt(p.slice(7)))
      });
      try{
        f=uA(d)/1e3
      }
      catch(p){
        g=p
      }
      return
    }
    else x===""&&(y=!1);
    o.parse(x+`
`)
  }), o.flush()
}
const Il="stpp.ttml.im1t", ly=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, cy=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, fA={
  left:"start", center:"center", right:"end", start:"start", end:"end"
};
function Wf(r, e, t, s){
  const n=re(new Uint8Array(r), ["mdat"]);
  if(n.length===0){
    s(new Error("Could not parse IMSC1 mdat"));
    return
  }
  const i=n.map(o=>yt(o)), a=yI(e.baseTime, 1, e.timescale);
  try{
    i.forEach(o=>t(mA(o, a)))
  }
  catch(o){
    s(o)
  }

}
function mA(r, e){
  const n=new DOMParser().parseFromString(r, "text/xml").getElementsByTagName("tt")[0];
  if(!n)throw new Error("Invalid ttml");
  const i={
    frameRate:30, subFrameRate:1, frameRateMultiplier:0, tickRate:0
  }, a=Object.keys(i).reduce((d, h)=>(d[h]=n.getAttribute(`ttp:${h}`)||i[h], d), {

  }), o=n.getAttribute("xml:space")!=="preserve", l=zf(Ll(n, "styling", "style")), c=zf(Ll(n, "layout", "region")), u=Ll(n,
  "body", "[begin]");
  return[].map.call(u, d=>{
    const h=uy(d, o);
    if(!h||!d.hasAttribute("begin"))return null;
    const f=Rl(d.getAttribute("begin"), a), g=Rl(d.getAttribute("dur"), a);
    let y=Rl(d.getAttribute("end"), a);
    if(f===null)throw Yf(d);
    if(y===null){
      if(g===null)throw Yf(d);
      y=f+g
    }
    const x=new fd(f-e, y-e, h);
    x.id=md(x.startTime, x.endTime, x.text);
    const p=c[d.getAttribute("region")], v=l[d.getAttribute("style")], E=gA(p, v, l), {
      textAlign:T
    }
    =E;
    if(T){
      const I=fA[T];
      I&&(x.lineAlign=I), x.align=T
    }
    return he(x, E), x
  }).filter(d=>d!==null)
}
function Ll(r, e, t){
  const s=r.getElementsByTagName(e)[0];
  return s?[].slice.call(s.querySelectorAll(t)):[]
}
function zf(r){
  return r.reduce((e, t)=>{
    const s=t.getAttribute("xml:id");
    return s&&(e[s]=t), e
  }, {

  })
}
function uy(r, e){
  return[].slice.call(r.childNodes).reduce((t, s, n)=>{
    var i;
    return s.nodeName==="br"&&n?t+`
`:(i=s.childNodes)!=null&&i.length?uy(s, e):e?t+s.textContent.trim().replace(/\s+/g, " "):t+s.textContent
  }, "")
}
function gA(r, e, t){
  const s="http://www.w3.org/ns/ttml#styling";
  let n=null;
  const i=["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"], a=r!=null&&r.hasAttribute("style")?r.getAttribute("style"):null;
  return a&&t.hasOwnProperty(a)&&(n=t[a]), i.reduce((o, l)=>{
    const c=Al(e, s, l)||Al(r, s, l)||Al(n, s, l);
    return c&&(o[l]=c), o
  }, {

  })
}
function Al(r, e, t){
  return r&&r.hasAttributeNS(e, t)?r.getAttributeNS(e, t):null
}
function Yf(r){
  return new Error(`Could not parse ttml timestamp ${r}`)
}
function Rl(r, e){
  if(!r)return null;
  let t=iy(r);
  return t===null&&(ly.test(r)?t=pA(r, e):cy.test(r)&&(t=yA(r, e))), t
}
function pA(r, e){
  const t=ly.exec(r), s=(t[4]|0)+(t[5]|0)/e.subFrameRate;
  return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+s/e.frameRate
}
function yA(r, e){
  const t=cy.exec(r), s=Number(t[1]);
  switch(t[2]){
    case"h":return s*3600;
    case"m":return s*60;
    case"ms":return s*1e3;
    case"f":return s/e.frameRate;
    case"t":return s/e.tickRate
  }
  return s
}
class ea{
  constructor(e, t){
    this.timelineController=void 0, this.cueRanges=[], this.trackName=void 0, this.startTime=null, this.endTime=null, this.screen=null,
    this.timelineController=e, this.trackName=t
  }
  dispatchCue(){
    this.startTime!==null&&(this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges),
    this.startTime=null)
  }
  newCue(e, t, s){
    (this.startTime===null||this.startTime>e)&&(this.startTime=e), this.endTime=t, this.screen=s, this.timelineController.createCaptionsTrack(this.trackName)
  }
  reset(){
    this.cueRanges=[], this.startTime=null
  }

}
class vA{
  constructor(e){
    this.hls=void 0, this.media=null, this.config=void 0, this.enabled=!0, this.Cues=void 0, this.textTracks=[], this.tracks=[],
    this.initPTS=[], this.unparsedVttFrags=[], this.captionsTracks={

    }, this.nonNativeCaptionsTracks={

    }, this.cea608Parser1=void 0, this.cea608Parser2=void 0, this.lastCc=-1, this.lastSn=-1, this.lastPartIndex=-1, this.prevCC=-1,
    this.vttCCs=Qf(), this.captionsProperties=void 0, this.hls=e, this.config=e.config, this.Cues=e.config.cueHandler, this.captionsProperties={
      textTrack1:{
        label:this.config.captionsTextTrack1Label, languageCode:this.config.captionsTextTrack1LanguageCode
      }, textTrack2:{
        label:this.config.captionsTextTrack2Label, languageCode:this.config.captionsTextTrack2LanguageCode
      }, textTrack3:{
        label:this.config.captionsTextTrack3Label, languageCode:this.config.captionsTextTrack3LanguageCode
      }, textTrack4:{
        label:this.config.captionsTextTrack4Label, languageCode:this.config.captionsTextTrack4LanguageCode
      }

    }, e.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING,
    this.onManifestLoading, this), e.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated,
    this), e.on(S.FRAG_LOADING, this.onFragLoading, this), e.on(S.FRAG_LOADED, this.onFragLoaded, this), e.on(S.FRAG_PARSING_USERDATA,
    this.onFragParsingUserdata, this), e.on(S.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(S.INIT_PTS_FOUND, this.onInitPtsFound,
    this), e.on(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(S.BUFFER_FLUSHING, this.onBufferFlushing,
    this)
  }
  destroy(){
    const{
      hls:e
    }
    =this;
    e.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING,
    this.onManifestLoading, this), e.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(S.SUBTITLE_TRACKS_UPDATED,
    this.onSubtitleTracksUpdated, this), e.off(S.FRAG_LOADING, this.onFragLoading, this), e.off(S.FRAG_LOADED, this.onFragLoaded,
    this), e.off(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(S.FRAG_DECRYPTED, this.onFragDecrypted,
    this), e.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared,
    this), e.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls=this.config=this.media=null, this.cea608Parser1=this.cea608Parser2=void 0
  }
  initCea608Parsers(){
    const e=new ea(this, "textTrack1"), t=new ea(this, "textTrack2"), s=new ea(this, "textTrack3"), n=new ea(this, "textTrack4");
    this.cea608Parser1=new Hf(1, e, t), this.cea608Parser2=new Hf(3, s, n)
  }
  addCues(e, t, s, n, i){
    let a=!1;
    for(let o=i.length;
    o--;
    ){
      const l=i[o], c=xA(l[0], l[1], t, s);
      if(c>=0&&(l[0]=Math.min(l[0], t), l[1]=Math.max(l[1], s), a=!0, c/(s-t)>.5))return
    }
    if(a||i.push([t, s]), this.config.renderTextTracksNatively){
      const o=this.captionsTracks[e];
      this.Cues.newCue(o, t, s, n)
    }
    else{
      const o=this.Cues.newCue(null, t, s, n);
      this.hls.trigger(S.CUES_PARSED, {
        type:"captions", cues:o, track:e
      })
    }

  }
  onInitPtsFound(e, {
    frag:t, id:s, initPTS:n, timescale:i, trackId:a
  }){
    const{
      unparsedVttFrags:o
    }
    =this;
    s===W.MAIN&&(this.initPTS[t.cc]={
      baseTime:n, timescale:i, trackId:a
    }), o.length&&(this.unparsedVttFrags=[], o.forEach(l=>{
      this.initPTS[l.frag.cc]?this.onFragLoaded(S.FRAG_LOADED, l):this.hls.trigger(S.SUBTITLE_FRAG_PROCESSED, {
        success:!1, frag:l.frag, error:new Error("Subtitle discontinuity domain does not match main")
      })
    }))
  }
  getExistingTrack(e, t){
    const{
      media:s
    }
    =this;
    if(s)for(let n=0;
    n<s.textTracks.length;
    n++){
      const i=s.textTracks[n];
      if(qf(i, {
        name:e, lang:t, characteristics:"transcribes-spoken-dialog,describes-music-and-sound"
      }))return i
    }
    return null
  }
  createCaptionsTrack(e){
    this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)
  }
  createNativeTrack(e){
    if(this.captionsTracks[e])return;
    const{
      captionsProperties:t, captionsTracks:s, media:n
    }
    =this, {
      label:i, languageCode:a
    }
    =t[e], o=this.getExistingTrack(i, a);
    if(o)s[e]=o, $s(s[e]), ey(s[e], n);
    else{
      const l=this.createTextTrack("captions", i, a);
      l&&(l[e]=!0, s[e]=l)
    }

  }
  createNonNativeTrack(e){
    if(this.nonNativeCaptionsTracks[e])return;
    const t=this.captionsProperties[e];
    if(!t)return;
    const s=t.label, n={
      _id:e, label:s, kind:"captions", default:t.media?!!t.media.default:!1, closedCaptions:t.media
    };
    this.nonNativeCaptionsTracks[e]=n, this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, {
      tracks:[n]
    })
  }
  createTextTrack(e, t, s){
    const n=this.media;
    if(n)return n.addTextTrack(e, t, s)
  }
  onMediaAttaching(e, t){
    this.media=t.media, t.mediaSource||this._cleanTracks()
  }
  onMediaDetaching(e, t){
    const s=!!t.transferMedia;
    if(this.media=null, s)return;
    const{
      captionsTracks:n
    }
    =this;
    Object.keys(n).forEach(i=>{
      $s(n[i]), delete n[i]
    }), this.nonNativeCaptionsTracks={

    }

  }
  onManifestLoading(){
    this.lastCc=-1, this.lastSn=-1, this.lastPartIndex=-1, this.prevCC=-1, this.vttCCs=Qf(), this._cleanTracks(), this.tracks=[],
    this.captionsTracks={

    }, this.nonNativeCaptionsTracks={

    }, this.textTracks=[], this.unparsedVttFrags=[], this.initPTS=[], this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),
    this.cea608Parser2.reset())
  }
  _cleanTracks(){
    const{
      media:e
    }
    =this;
    if(!e)return;
    const t=e.textTracks;
    if(t)for(let s=0;
    s<t.length;
    s++)$s(t[s])
  }
  onSubtitleTracksUpdated(e, t){
    const s=t.subtitleTracks||[], n=s.some(i=>i.textCodec===Il);
    if(this.config.enableWebVTT||n&&this.config.enableIMSC1){
      if(jp(this.tracks, s)){
        this.tracks=s;
        return
      }
      if(this.textTracks=[], this.tracks=s, this.config.renderTextTracksNatively){
        const a=this.media, o=a?La(a.textTracks):null;
        if(this.tracks.forEach((l, c)=>{
          let u;
          if(o){
            let d=null;
            for(let h=0;
            h<o.length;
            h++)if(o[h]&&qf(o[h], l)){
              d=o[h], o[h]=null;
              break
            }
            d&&(u=d)
          }
          if(u)$s(u);
          else{
            const d=dy(l);
            u=this.createTextTrack(d, l.name, l.lang), u&&(u.mode="disabled")
          }
          u&&this.textTracks.push(u)
        }), o!=null&&o.length){
          const l=o.filter(c=>c!==null).map(c=>c.label);
          l.length&&this.hls.logger.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`)

        }

      }
      else if(this.tracks.length){
        const a=this.tracks.map(o=>({
          label:o.name, kind:o.type.toLowerCase(), default:o.default, subtitleTrack:o
        }));
        this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, {
          tracks:a
        })
      }

    }

  }
  onManifestLoaded(e, t){
    this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(s=>{
      const n=/(?:CC|SERVICE)([1-4])/.exec(s.instreamId);
      if(!n)return;
      const i=`textTrack${n[1]}`, a=this.captionsProperties[i];
      a&&(a.label=s.name, s.lang&&(a.languageCode=s.lang), a.media=s)
    })
  }
  closedCaptionsForLevel(e){
    const t=this.hls.levels[e.level];
    return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]
  }
  onFragLoading(e, t){
    if(this.enabled&&t.frag.type===W.MAIN){
      var s, n;
      const{
        cea608Parser1:i, cea608Parser2:a, lastSn:o
      }
      =this, {
        cc:l, sn:c
      }
      =t.frag, u=(s=(n=t.part)==null?void 0:n.index)!=null?s:-1;
      i&&a&&(c!==o+1||c===o&&u!==this.lastPartIndex+1||l!==this.lastCc)&&(i.reset(), a.reset()), this.lastCc=l, this.lastSn=c,
      this.lastPartIndex=u
    }

  }
  onFragLoaded(e, t){
    const{
      frag:s, payload:n
    }
    =t;
    if(s.type===W.SUBTITLE)if(n.byteLength){
      const i=s.decryptdata, a="stats"in t;
      if(i==null||!i.encrypted||a){
        const o=this.tracks[s.level], l=this.vttCCs;
        l[s.cc]||(l[s.cc]={
          start:s.start, prevCC:this.prevCC, new:!0
        }, this.prevCC=s.cc), o&&o.textCodec===Il?this._parseIMSC1(s, n):this._parseVTTs(t)
      }

    }
    else this.hls.trigger(S.SUBTITLE_FRAG_PROCESSED, {
      success:!1, frag:s, error:new Error("Empty subtitle payload")
    })
  }
  _parseIMSC1(e, t){
    const s=this.hls;
    Wf(t, this.initPTS[e.cc], n=>{
      this._appendCues(n, e.level), s.trigger(S.SUBTITLE_FRAG_PROCESSED, {
        success:!0, frag:e
      })
    }, n=>{
      s.logger.log(`Failed to parse IMSC1: ${n}`), s.trigger(S.SUBTITLE_FRAG_PROCESSED, {
        success:!1, frag:e, error:n
      })
    })
  }
  _parseVTTs(e){
    var t;
    const{
      frag:s, payload:n
    }
    =e, {
      initPTS:i, unparsedVttFrags:a
    }
    =this, o=i.length-1;
    if(!i[s.cc]&&o===-1){
      a.push(e);
      return
    }
    const l=this.hls, c=(t=s.initSegment)!=null&&t.data?kt(s.initSegment.data, new Uint8Array(n)).buffer:n;
    hA(c, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, u=>{
      this._appendCues(u, s.level), l.trigger(S.SUBTITLE_FRAG_PROCESSED, {
        success:!0, frag:s
      })
    }, u=>{
      const d=u.message==="Missing initPTS for VTT MPEGTS";
      d?a.push(e):this._fallbackToIMSC1(s, n), l.logger.log(`Failed to parse VTT cue: ${u}`), !(d&&o>s.cc)&&l.trigger(S.SUBTITLE_FRAG_PROCESSED,
      {
        success:!1, frag:s, error:u
      })
    })
  }
  _fallbackToIMSC1(e, t){
    const s=this.tracks[e.level];
    s.textCodec||Wf(t, this.initPTS[e.cc], ()=>{
      s.textCodec=Il, this._parseIMSC1(e, t)
    }, ()=>{
      s.textCodec="wvtt"
    })
  }
  _appendCues(e, t){
    const s=this.hls;
    if(this.config.renderTextTracksNatively){
      const n=this.textTracks[t];
      if(!n||n.mode==="disabled")return;
      e.forEach(i=>ty(n, i))
    }
    else{
      const n=this.tracks[t];
      if(!n)return;
      const i=n.default?"default":"subtitles"+t;
      s.trigger(S.CUES_PARSED, {
        type:"subtitles", cues:e, track:i
      })
    }

  }
  onFragDecrypted(e, t){
    const{
      frag:s
    }
    =t;
    s.type===W.SUBTITLE&&this.onFragLoaded(S.FRAG_LOADED, t)
  }
  onSubtitleTracksCleared(){
    this.tracks=[], this.captionsTracks={

    }

  }
  onFragParsingUserdata(e, t){
    if(!this.enabled||!this.config.enableCEA708Captions)return;
    const{
      frag:s, samples:n
    }
    =t;
    if(!(s.type===W.MAIN&&this.closedCaptionsForLevel(s)==="NONE"))for(let i=0;
    i<n.length;
    i++){
      const a=n[i].bytes;
      if(a){
        this.cea608Parser1||this.initCea608Parsers();
        const o=this.extractCea608Data(a);
        this.cea608Parser1.addData(n[i].pts, o[0]), this.cea608Parser2.addData(n[i].pts, o[1])
      }

    }

  }
  onBufferFlushing(e, {
    startOffset:t, endOffset:s, endOffsetSubtitles:n, type:i
  }){
    const{
      media:a
    }
    =this;
    if(!(!a||a.currentTime<s)){
      if(!i||i==="video"){
        const{
          captionsTracks:o
        }
        =this;
        Object.keys(o).forEach(l=>jc(o[l], t, s))
      }
      if(this.config.renderTextTracksNatively&&t===0&&n!==void 0){
        const{
          textTracks:o
        }
        =this;
        Object.keys(o).forEach(l=>jc(o[l], t, n))
      }

    }

  }
  extractCea608Data(e){
    const t=[[], []], s=e[0]&31;
    let n=2;
    for(let i=0;
    i<s;
    i++){
      const a=e[n++], o=127&e[n++], l=127&e[n++];
      if(o===0&&l===0)continue;
      if((4&a)!==0){
        const u=3&a;
        (u===0||u===1)&&(t[u].push(o), t[u].push(l))
      }

    }
    return t
  }

}
function dy(r){
  return r.characteristics&&/transcribes-spoken-dialog/gi.test(r.characteristics)&&/describes-music-and-sound/gi.test(r.characteristics)?"captions":"subtitles"
}
function qf(r, e){
  return!!r&&r.kind===dy(e)&&Fc(e, r)
}
function xA(r, e, t, s){
  return Math.min(e, s)-Math.max(r, t)
}
function Qf(){
  return{
    ccOffset:0, presentationOffset:0, 0:{
      start:0, prevCC:-1, new:!0
    }

  }

}
const EA=/\s/, SA={
  newCue(r, e, t, s){
    const n=[];
    let i, a, o, l, c;
    const u=self.VTTCue||self.TextTrackCue;
    for(let h=0;
    h<s.rows.length;
    h++)if(i=s.rows[h], o=!0, l=0, c="", !i.isEmpty()){
      var d;
      for(let y=0;
      y<i.chars.length;
      y++)EA.test(i.chars[y].uchar)&&o?l++:(c+=i.chars[y].uchar, o=!1);
      i.cueStartTime=e, e===t&&(t+=1e-4), l>=16?l--:l++;
      const f=oy(c.trim()), g=md(e, t, f);
      r!=null&&(d=r.cues)!=null&&d.getCueById(g)||(a=new u(e, t, f), a.id=g, a.line=h+1, a.align="left", a.position=10+Math.min(80,
      Math.floor(l*8/32)*10), n.push(a))
    }
    return r&&n.length&&(n.sort((h, f)=>h.line==="auto"||f.line==="auto"?0:h.line>8&&f.line>8?f.line-h.line:h.line-f.line),
    n.forEach(h=>ty(r, h))), n
  }

};
function TA(){
  if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{
    return new self.ReadableStream({

    }), !0
  }
  catch{

  }
  return!1
}
const IA=/(\d+)-(\d+)\/(\d+)/;
class Xf{
  constructor(e){
    this.fetchSetup=void 0, this.requestTimeout=void 0, this.request=null, this.response=null, this.controller=void 0, this.context=null,
    this.config=null, this.callbacks=null, this.stats=void 0, this.loader=null, this.fetchSetup=e.fetchSetup||wA, this.controller=new self.AbortController,
    this.stats=new Wu
  }
  destroy(){
    this.loader=this.callbacks=this.context=this.config=this.request=null, this.abortInternal(), this.response=null, this.fetchSetup=this.controller=this.stats=null
  }
  abortInternal(){
    this.controller&&!this.stats.loading.end&&(this.stats.aborted=!0, this.controller.abort())
  }
  abort(){
    var e;
    this.abortInternal(), (e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats, this.context, this.response)
  }
  load(e, t, s){
    const n=this.stats;
    if(n.loading.start)throw new Error("Loader can only be used once.");
    n.loading.start=self.performance.now();
    const i=LA(e, this.controller.signal), a=e.responseType==="arraybuffer", o=a?"byteLength":"length", {
      maxTimeToFirstByteMs:l, maxLoadTimeMs:c
    }
    =t.loadPolicy;
    this.context=e, this.config=t, this.callbacks=s, this.request=this.fetchSetup(e, i), self.clearTimeout(this.requestTimeout),
    t.timeout=l&&G(l)?l:c, this.requestTimeout=self.setTimeout(()=>{
      this.callbacks&&(this.abortInternal(), this.callbacks.onTimeout(n, e, this.response))
    }, t.timeout), (di(this.request)?this.request.then(self.fetch):self.fetch(this.request)).then(d=>{
      var h;
      this.response=this.loader=d;
      const f=Math.max(self.performance.now(), n.loading.start);
      if(self.clearTimeout(this.requestTimeout), t.timeout=c, this.requestTimeout=self.setTimeout(()=>{
        this.callbacks&&(this.abortInternal(), this.callbacks.onTimeout(n, e, this.response))
      }, c-(f-n.loading.start)), !d.ok){
        const{
          status:y, statusText:x
        }
        =d;
        throw new bA(x||"fetch, bad network response", y, d)
      }
      n.loading.first=f, n.total=RA(d.headers)||n.total;
      const g=(h=this.callbacks)==null?void 0:h.onProgress;
      return g&&G(t.highWaterMark)?this.loadProgressively(d, n, e, t.highWaterMark, g):a?d.arrayBuffer():e.responseType==="json"?d.json():d.text()
    }).then(d=>{
      var h, f;
      const g=this.response;
      if(!g)throw new Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), n.loading.end=Math.max(self.performance.now(), n.loading.first);
      const y=d[o];
      y&&(n.loaded=n.total=y);
      const x={
        url:g.url, data:d, code:g.status
      }, p=(h=this.callbacks)==null?void 0:h.onProgress;
      p&&!G(t.highWaterMark)&&p(n, e, d, g), (f=this.callbacks)==null||f.onSuccess(x, n, e, g)
    }).catch(d=>{
      var h;
      if(self.clearTimeout(this.requestTimeout), n.aborted)return;
      const f=d&&d.code||0, g=d?d.message:null;
      (h=this.callbacks)==null||h.onError({
        code:f, text:g
      }, e, d?d.details:null, n)
    })
  }
  getCacheAge(){
    let e=null;
    if(this.response){
      const t=this.response.headers.get("age");
      e=t?parseFloat(t):null
    }
    return e
  }
  getResponseHeader(e){
    return this.response?this.response.headers.get(e):null
  }
  loadProgressively(e, t, s, n=0, i){
    const a=new Sp, o=e.body.getReader(), l=()=>o.read().then(c=>{
      if(c.done)return a.dataLength&&i(t, s, a.flush().buffer, e), Promise.resolve(new ArrayBuffer(0));
      const u=c.value, d=u.length;
      return t.loaded+=d, d<n||a.dataLength?(a.push(u), a.dataLength>=n&&i(t, s, a.flush().buffer, e)):i(t, s, u.buffer, e),
      l()
    }).catch(()=>Promise.reject());
    return l()
  }

}
function LA(r, e){
  const t={
    method:"GET", mode:"cors", credentials:"same-origin", signal:e, headers:new self.Headers(he({

    }, r.headers))
  };
  return r.rangeEnd&&t.headers.set("Range", "bytes="+r.rangeStart+"-"+String(r.rangeEnd-1)), t
}
function AA(r){
  const e=IA.exec(r);
  if(e)return parseInt(e[2])-parseInt(e[1])+1
}
function RA(r){
  const e=r.get("Content-Range");
  if(e){
    const s=AA(e);
    if(G(s))return s
  }
  const t=r.get("Content-Length");
  if(t)return parseInt(t)
}
function wA(r, e){
  return new self.Request(r.url, e)
}
class bA extends Error{
  constructor(e, t, s){
    super(e), this.code=void 0, this.details=void 0, this.code=t, this.details=s
  }

}
const _A=/^age:\s*[\d.]+\s*$/im;
class hy{
  constructor(e){
    this.xhrSetup=void 0, this.requestTimeout=void 0, this.retryTimeout=void 0, this.retryDelay=void 0, this.config=null,
    this.callbacks=null, this.context=null, this.loader=null, this.stats=void 0, this.xhrSetup=e&&e.xhrSetup||null, this.stats=new Wu,
    this.retryDelay=0
  }
  destroy(){
    this.callbacks=null, this.abortInternal(), this.loader=null, this.config=null, this.context=null, this.xhrSetup=null
  }
  abortInternal(){
    const e=this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e&&(e.onreadystatechange=null, e.onprogress=null,
    e.readyState!==4&&(this.stats.aborted=!0, e.abort()))
  }
  abort(){
    var e;
    this.abortInternal(), (e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats, this.context, this.loader)
  }
  load(e, t, s){
    if(this.stats.loading.start)throw new Error("Loader can only be used once.");
    this.stats.loading.start=self.performance.now(), this.context=e, this.config=t, this.callbacks=s, this.loadInternal()
  }
  loadInternal(){
    const{
      config:e, context:t
    }
    =this;
    if(!e||!t)return;
    const s=this.loader=new self.XMLHttpRequest, n=this.stats;
    n.loading.first=0, n.loaded=0, n.aborted=!1;
    const i=this.xhrSetup;
    i?Promise.resolve().then(()=>{
      if(!(this.loader!==s||this.stats.aborted))return i(s, t.url)
    }).catch(a=>{
      if(!(this.loader!==s||this.stats.aborted))return s.open("GET", t.url, !0), i(s, t.url)
    }).then(()=>{
      this.loader!==s||this.stats.aborted||this.openAndSendXhr(s, t, e)
    }).catch(a=>{
      var o;
      (o=this.callbacks)==null||o.onError({
        code:s.status, text:a.message
      }, t, s, n)
    }):this.openAndSendXhr(s, t, e)
  }
  openAndSendXhr(e, t, s){
    e.readyState||e.open("GET", t.url, !0);
    const n=t.headers, {
      maxTimeToFirstByteMs:i, maxLoadTimeMs:a
    }
    =s.loadPolicy;
    if(n)for(const o in n)e.setRequestHeader(o, n[o]);
    t.rangeEnd&&e.setRequestHeader("Range", "bytes="+t.rangeStart+"-"+(t.rangeEnd-1)), e.onreadystatechange=this.readystatechange.bind(this),
    e.onprogress=this.loadprogress.bind(this), e.responseType=t.responseType, self.clearTimeout(this.requestTimeout), s.timeout=i&&G(i)?i:a,
    this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this), s.timeout), e.send()
  }
  readystatechange(){
    const{
      context:e, loader:t, stats:s
    }
    =this;
    if(!e||!t)return;
    const n=t.readyState, i=this.config;
    if(!s.aborted&&n>=2&&(s.loading.first===0&&(s.loading.first=Math.max(self.performance.now(), s.loading.start), i.timeout!==i.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout)
    , i.timeout=i.loadPolicy.maxLoadTimeMs, this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this), i.loadPolicy.maxLoadTimeMs-(s.loading.first-s.loading.start)))),
    n===4)){
      self.clearTimeout(this.requestTimeout), t.onreadystatechange=null, t.onprogress=null;
      const c=t.status, u=t.responseType==="text"?t.responseText:null;
      if(c>=200&&c<300){
        const g=u??t.response;
        if(g!=null){
          var a, o;
          s.loading.end=Math.max(self.performance.now(), s.loading.first);
          const y=t.responseType==="arraybuffer"?g.byteLength:g.length;
          s.loaded=s.total=y, s.bwEstimate=s.total*8e3/(s.loading.end-s.loading.first);
          const x=(a=this.callbacks)==null?void 0:a.onProgress;
          x&&x(s, e, g, t);
          const p={
            url:t.responseURL, data:g, code:c
          };
          (o=this.callbacks)==null||o.onSuccess(p, s, e, t);
          return
        }

      }
      const d=i.loadPolicy.errorRetry, h=s.retry, f={
        url:e.url, data:void 0, code:c
      };
      if(ro(d, h, !1, f))this.retry(d);
      else{
        var l;
        ue.error(`${c} while loading ${e.url}`), (l=this.callbacks)==null||l.onError({
          code:c, text:t.statusText
        }, e, t, s)
      }

    }

  }
  loadtimeout(){
    if(!this.config)return;
    const e=this.config.loadPolicy.timeoutRetry, t=this.stats.retry;
    if(ro(e, t, !0))this.retry(e);
    else{
      var s;
      ue.warn(`timeout while loading ${(s=this.context)==null?void 0:s.url}`);
      const n=this.callbacks;
      n&&(this.abortInternal(), n.onTimeout(this.stats, this.context, this.loader))
    }

  }
  retry(e){
    const{
      context:t, stats:s
    }
    =this;
    this.retryDelay=Qu(e, s.retry), s.retry++, ue.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t==null?void 0:t.url}, retrying ${s.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`)
    , this.abortInternal(), this.loader=null, self.clearTimeout(this.retryTimeout), this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),
    this.retryDelay)
  }
  loadprogress(e){
    const t=this.stats;
    t.loaded=e.loaded, e.lengthComputable&&(t.total=e.total)
  }
  getCacheAge(){
    let e=null;
    if(this.loader&&_A.test(this.loader.getAllResponseHeaders())){
      const t=this.loader.getResponseHeader("age");
      e=t?parseFloat(t):null
    }
    return e
  }
  getResponseHeader(e){
    return this.loader&&new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(e):null
  }

}
const kA={
  maxTimeToFirstByteMs:8e3, maxLoadTimeMs:2e4, timeoutRetry:null, errorRetry:null
}, CA=ce(ce({
  autoStartLoad:!0, startPosition:-1, defaultAudioCodec:void 0, debug:!1, capLevelOnFPSDrop:!1, capLevelToPlayerSize:!1, ignoreDevicePixelRatio:!1,
  maxDevicePixelRatio:Number.POSITIVE_INFINITY, preferManagedMediaSource:!0, initialLiveManifestSize:1, maxBufferLength:30,
  backBufferLength:1/0, frontBufferFlushThreshold:1/0, startOnSegmentBoundary:!1, maxBufferSize:60*1e3*1e3, maxFragLookUpTolerance:.25,
  maxBufferHole:.1, detectStallWithCurrentTimeMs:1250, highBufferWatchdogPeriod:2, nudgeOffset:.1, nudgeMaxRetry:3, nudgeOnVideoHole:!0,
  liveSyncMode:"edge", liveSyncDurationCount:3, liveSyncOnStallIncrease:1, liveMaxLatencyDurationCount:1/0, liveSyncDuration:void 0,
  liveMaxLatencyDuration:void 0, maxLiveSyncPlaybackRate:1, liveDurationInfinity:!1, liveBackBufferLength:null, maxMaxBufferLength:600,
  enableWorker:!0, workerPath:null, enableSoftwareAES:!0, startLevel:void 0, startFragPrefetch:!1, fpsDroppedMonitoringPeriod:5e3,
  fpsDroppedMonitoringThreshold:.2, appendErrorMaxRetry:3, ignorePlaylistParsingErrors:!1, loader:hy, fLoader:void 0, pLoader:void 0,
  xhrSetup:void 0, licenseXhrSetup:void 0, licenseResponseCallback:void 0, abrController:VS, bufferController:PI, capLevelController:ud,
  errorController:YS, fpsController:NL, stretchShortVideoTrack:!1, maxAudioFramesDrift:1, forceKeyFrameOnDiscontinuity:!0,
  abrEwmaFastLive:3, abrEwmaSlowLive:9, abrEwmaFastVoD:3, abrEwmaSlowVoD:9, abrEwmaDefaultEstimate:5e5, abrEwmaDefaultEstimateMax:5e6,
  abrBandWidthFactor:.95, abrBandWidthUpFactor:.7, abrMaxWithRealBitrate:!1, maxStarvationDelay:4, maxLoadingDelay:4, minAutoBitrate:0,
  emeEnabled:!1, widevineLicenseUrl:void 0, drmSystems:{

  }, drmSystemOptions:{

  }, requestMediaKeySystemAccessFunc:up, requireKeySystemAccessOnStart:!1, testBandwidth:!0, progressive:!1, lowLatencyMode:!0,
  cmcd:void 0, enableDateRangeMetadataCues:!0, enableEmsgMetadataCues:!0, enableEmsgKLVMetadata:!1, enableID3MetadataCues:!0,
  enableInterstitialPlayback:!0, interstitialAppendInPlace:!0, interstitialLiveLookAhead:10, useMediaCapabilities:!0, preserveManualLevelOnError:!1,
  certLoadPolicy:{
    default:kA
  }, keyLoadPolicy:{
    default:{
      maxTimeToFirstByteMs:8e3, maxLoadTimeMs:2e4, timeoutRetry:{
        maxNumRetry:1, retryDelayMs:1e3, maxRetryDelayMs:2e4, backoff:"linear"
      }, errorRetry:{
        maxNumRetry:8, retryDelayMs:1e3, maxRetryDelayMs:2e4, backoff:"linear"
      }

    }

  }, manifestLoadPolicy:{
    default:{
      maxTimeToFirstByteMs:1/0, maxLoadTimeMs:2e4, timeoutRetry:{
        maxNumRetry:2, retryDelayMs:0, maxRetryDelayMs:0
      }, errorRetry:{
        maxNumRetry:1, retryDelayMs:1e3, maxRetryDelayMs:8e3
      }

    }

  }, playlistLoadPolicy:{
    default:{
      maxTimeToFirstByteMs:1e4, maxLoadTimeMs:2e4, timeoutRetry:{
        maxNumRetry:2, retryDelayMs:0, maxRetryDelayMs:0
      }, errorRetry:{
        maxNumRetry:2, retryDelayMs:1e3, maxRetryDelayMs:8e3
      }

    }

  }, fragLoadPolicy:{
    default:{
      maxTimeToFirstByteMs:1e4, maxLoadTimeMs:12e4, timeoutRetry:{
        maxNumRetry:4, retryDelayMs:0, maxRetryDelayMs:0
      }, errorRetry:{
        maxNumRetry:6, retryDelayMs:1e3, maxRetryDelayMs:8e3
      }

    }

  }, steeringManifestLoadPolicy:{
    default:{
      maxTimeToFirstByteMs:1e4, maxLoadTimeMs:2e4, timeoutRetry:{
        maxNumRetry:2, retryDelayMs:0, maxRetryDelayMs:0
      }, errorRetry:{
        maxNumRetry:1, retryDelayMs:1e3, maxRetryDelayMs:8e3
      }

    }

  }, interstitialAssetListLoadPolicy:{
    default:{
      maxTimeToFirstByteMs:1e4, maxLoadTimeMs:3e4, timeoutRetry:{
        maxNumRetry:0, retryDelayMs:0, maxRetryDelayMs:0
      }, errorRetry:{
        maxNumRetry:0, retryDelayMs:1e3, maxRetryDelayMs:8e3
      }

    }

  }, manifestLoadingTimeOut:1e4, manifestLoadingMaxRetry:1, manifestLoadingRetryDelay:1e3, manifestLoadingMaxRetryTimeout:64e3,
  levelLoadingTimeOut:1e4, levelLoadingMaxRetry:4, levelLoadingRetryDelay:1e3, levelLoadingMaxRetryTimeout:64e3, fragLoadingTimeOut:2e4,
  fragLoadingMaxRetry:6, fragLoadingRetryDelay:1e3, fragLoadingMaxRetryTimeout:64e3
}, DA()), {

}, {
  subtitleStreamController:WL, subtitleTrackController:FL, timelineController:vA, audioStreamController:_I, audioTrackController:kI,
  emeController:Qs, cmcdController:kL, contentSteeringController:DL, interstitialsController:HL
});
function DA(){
  return{
    cueHandler:SA, enableWebVTT:!0, enableIMSC1:!0, enableCEA708Captions:!0, captionsTextTrack1Label:"English", captionsTextTrack1LanguageCode:"en",
    captionsTextTrack2Label:"Spanish", captionsTextTrack2LanguageCode:"es", captionsTextTrack3Label:"Unknown CC", captionsTextTrack3LanguageCode:"",
    captionsTextTrack4Label:"Unknown CC", captionsTextTrack4LanguageCode:"", renderTextTracksNatively:!0
  }

}
function PA(r, e, t){
  if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration")
  ;
  if(e.liveMaxLatencyDurationCount!==void 0&&(e.liveSyncDurationCount===void 0||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"')
  ;
  if(e.liveMaxLatencyDuration!==void 0&&(e.liveSyncDuration===void 0||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"')
  ;
  const s=Vc(r), n=["manifest", "level", "frag"], i=["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return n.forEach(a=>{
    const o=`${a==="level"?"playlist":a}LoadPolicy`, l=e[o]===void 0, c=[];
    i.forEach(u=>{
      const d=`${a}Loading${u}`, h=e[d];
      if(h!==void 0&&l){
        c.push(d);
        const f=s[o].default;
        switch(e[o]={
          default:f
        }, u){
          case"TimeOut":f.maxLoadTimeMs=h, f.maxTimeToFirstByteMs=h;
          break;
          case"MaxRetry":f.errorRetry.maxNumRetry=h, f.timeoutRetry.maxNumRetry=h;
          break;
          case"RetryDelay":f.errorRetry.retryDelayMs=h, f.timeoutRetry.retryDelayMs=h;
          break;
          case"MaxRetryTimeout":f.errorRetry.maxRetryDelayMs=h, f.timeoutRetry.maxRetryDelayMs=h;
          break
        }

      }

    }), c.length&&t.warn(`hls.js config: "${c.join('", "')}" setting(s) are deprecated, use "${o}": ${me(e[o])}`)
  }), ce(ce({

  }, s), e)
}
function Vc(r){
  return r&&typeof r=="object"?Array.isArray(r)?r.map(Vc):Object.keys(r).reduce((e, t)=>(e[t]=Vc(r[t]), e), {

  }):r
}
function NA(r, e){
  const t=r.loader;
  t!==Xf&&t!==hy?(e.log("[config]: Custom loader detected, cannot enable progressive streaming"), r.progressive=!1):TA()&&(r.loader=Xf,
  r.progressive=!0, r.enableSoftwareAES=!0, e.log("[config]: Progressive streaming enabled, using FetchLoader"))
}
const Aa=2, OA=.1, MA=.05, FA=100;
class UA extends ip{
  constructor(e, t){
    super("gap-controller", e.logger), this.hls=void 0, this.fragmentTracker=void 0, this.media=null, this.mediaSource=void 0,
    this.nudgeRetry=0, this.stallReported=!1, this.stalled=null, this.moved=!1, this.seeking=!1, this.buffered={

    }, this.lastCurrentTime=0, this.ended=0, this.waiting=0, this.onMediaPlaying=()=>{
      this.ended=0, this.waiting=0
    }, this.onMediaWaiting=()=>{
      var s;
      (s=this.media)!=null&&s.seeking||(this.waiting=self.performance.now(), this.tick())
    }, this.onMediaEnded=()=>{
      if(this.hls){
        var s;
        this.ended=((s=this.media)==null?void 0:s.currentTime)||1, this.hls.trigger(S.MEDIA_ENDED, {
          stalled:!1
        })
      }

    }, this.hls=e, this.fragmentTracker=t, this.registerListeners()
  }
  registerListeners(){
    const{
      hls:e
    }
    =this;
    e&&(e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.BUFFER_APPENDED,
    this.onBufferAppended, this))
  }
  unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e&&(e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.BUFFER_APPENDED,
    this.onBufferAppended, this))
  }
  destroy(){
    super.destroy(), this.unregisterListeners(), this.media=this.hls=this.fragmentTracker=null, this.mediaSource=void 0
  }
  onMediaAttached(e, t){
    this.setInterval(FA), this.mediaSource=t.mediaSource;
    const s=this.media=t.media;
    Ze(s, "playing", this.onMediaPlaying), Ze(s, "waiting", this.onMediaWaiting), Ze(s, "ended", this.onMediaEnded)
  }
  onMediaDetaching(e, t){
    this.clearInterval();
    const{
      media:s
    }
    =this;
    s&&(it(s, "playing", this.onMediaPlaying), it(s, "waiting", this.onMediaWaiting), it(s, "ended", this.onMediaEnded), this.media=null),
    this.mediaSource=void 0
  }
  onBufferAppended(e, t){
    this.buffered=t.timeRanges
  }
  get hasBuffered(){
    return Object.keys(this.buffered).length>0
  }
  tick(){
    var e;
    if(!((e=this.media)!=null&&e.readyState)||!this.hasBuffered)return;
    const t=this.media.currentTime;
    this.poll(t, this.lastCurrentTime), this.lastCurrentTime=t
  }
  poll(e, t){
    var s, n;
    const i=(s=this.hls)==null?void 0:s.config;
    if(!i)return;
    const a=this.media;
    if(!a)return;
    const{
      seeking:o
    }
    =a, l=this.seeking&&!o, c=!this.seeking&&o, u=a.paused&&!o||a.ended||a.playbackRate===0;
    if(this.seeking=o, e!==t){
      t&&(this.ended=0), this.moved=!0, o||(this.nudgeRetry=0, i.nudgeOnVideoHole&&!u&&e>t&&this.nudgeOnVideoHole(e, t)),
      this.waiting===0&&this.stallResolved(e);
      return
    }
    if(c||l){
      l&&this.stallResolved(e);
      return
    }
    if(u){
      this.nudgeRetry=0, this.stallResolved(e), !this.ended&&a.ended&&this.hls&&(this.ended=e||1, this.hls.trigger(S.MEDIA_ENDED,
      {
        stalled:!1
      }));
      return
    }
    if(!Z.getBuffered(a).length){
      this.nudgeRetry=0;
      return
    }
    const d=Z.bufferInfo(a, e, 0), h=d.nextStart||0, f=this.fragmentTracker;
    if(o&&f&&this.hls){
      const b=Zf(this.hls.inFlightFragments, e), L=d.len>Aa, A=!h||b||h-e>Aa&&!f.getPartialFragment(e);
      if(L||A)return;
      this.moved=!1
    }
    const g=(n=this.hls)==null?void 0:n.latestLevelDetails;
    if(!this.moved&&this.stalled!==null&&f){
      if(!(d.len>0)&&!h)return;
      const L=Math.max(h, d.start||0)-e, w=!!(g!=null&&g.live)?g.targetduration*2:Aa, R=ta(e, f);
      if(L>0&&(L<=w||R)){
        a.paused||this._trySkipBufferHole(R);
        return
      }

    }
    const y=i.detectStallWithCurrentTimeMs, x=self.performance.now(), p=this.waiting;
    let v=this.stalled;
    if(v===null)if(p>0&&x-p<y)v=this.stalled=p;
    else{
      this.stalled=x;
      return
    }
    const E=x-v;
    if(!o&&(E>=y||p)&&this.hls){
      var T;
      if(((T=this.mediaSource)==null?void 0:T.readyState)==="ended"&&!(g!=null&&g.live)&&Math.abs(e-((g==null?void 0:g.edge)||0))<1){
        if(this.ended)return;
        this.ended=e||1, this.hls.trigger(S.MEDIA_ENDED, {
          stalled:!0
        });
        return
      }
      if(this._reportStall(d), !this.media||!this.hls)return
    }
    const I=Z.bufferInfo(a, e, i.maxBufferHole);
    this._tryFixBufferStall(I, E, e)
  }
  stallResolved(e){
    const t=this.stalled;
    if(t&&this.hls&&(this.stalled=null, this.stallReported)){
      const s=self.performance.now()-t;
      this.log(`playback not stuck anymore @${e}, after ${Math.round(s)}ms`), this.stallReported=!1, this.waiting=0, this.hls.trigger(S.STALL_RESOLVED,
      {

      })
    }

  }
  nudgeOnVideoHole(e, t){
    var s;
    const n=this.buffered.video;
    if(this.hls&&this.media&&this.fragmentTracker&&(s=this.buffered.audio)!=null&&s.length&&n&&n.length>1&&e>n.end(0)){
      const i=Z.bufferedInfo(Z.timeRangesToArray(this.buffered.audio), e, 0);
      if(i.len>1&&t>=i.start){
        const a=Z.timeRangesToArray(n), o=Z.bufferedInfo(a, t, 0).bufferedIndex;
        if(o>-1&&o<a.length-1){
          const l=Z.bufferedInfo(a, e, 0).bufferedIndex, c=a[o].end, u=a[o+1].start;
          if((l===-1||l>o)&&u-c<1&&e-c<2){
            const d=new Error(`nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${c} -> ${u} buffered index: ${l}`);
            this.warn(d.message), this.media.currentTime+=1e-6;
            let h=ta(e, this.fragmentTracker);
            h&&"fragment"in h?h=h.fragment:h||(h=void 0);
            const f=Z.bufferInfo(this.media, e, 0);
            this.hls.trigger(S.ERROR, {
              type:q.MEDIA_ERROR, details:k.BUFFER_SEEK_OVER_HOLE, fatal:!1, error:d, reason:d.message, frag:h, buffer:f.len,
              bufferInfo:f
            })
          }

        }

      }

    }

  }
  _tryFixBufferStall(e, t, s){
    var n, i;
    const{
      fragmentTracker:a, media:o
    }
    =this, l=(n=this.hls)==null?void 0:n.config;
    if(!o||!a||!l)return;
    const c=(i=this.hls)==null?void 0:i.latestLevelDetails, u=ta(s, a);
    if((u||c!=null&&c.live&&s<c.fragmentStart)&&(this._trySkipBufferHole(u)||!this.media))return;
    const d=e.buffered, h=this.adjacentTraversal(e, s);
    (d&&d.length>1&&e.len>l.maxBufferHole||e.nextStart&&(e.nextStart-s<l.maxBufferHole||h))&&(t>l.highBufferWatchdogPeriod*1e3||this.waiting)&&(this.warn("Trying to nudge playhead over buffer-hole")
    , this._tryNudgeBuffer(e))
  }
  adjacentTraversal(e, t){
    const s=this.fragmentTracker, n=e.nextStart;
    if(s&&n){
      const i=s.getFragAtPos(t, W.MAIN), a=s.getFragAtPos(n, W.MAIN);
      if(i&&a)return a.sn-i.sn<2
    }
    return!1
  }
  _reportStall(e){
    const{
      hls:t, media:s, stallReported:n, stalled:i
    }
    =this;
    if(!n&&i!==null&&s&&t){
      this.stallReported=!0;
      const a=new Error(`Playback stalling at @${s.currentTime} due to low buffer (${me(e)})`);
      this.warn(a.message), t.trigger(S.ERROR, {
        type:q.MEDIA_ERROR, details:k.BUFFER_STALLED_ERROR, fatal:!1, error:a, buffer:e.len, bufferInfo:e, stalled:{
          start:i
        }

      })
    }

  }
  _trySkipBufferHole(e){
    var t;
    const{
      fragmentTracker:s, media:n
    }
    =this, i=(t=this.hls)==null?void 0:t.config;
    if(!n||!s||!i)return 0;
    const a=n.currentTime, o=Z.bufferInfo(n, a, 0), l=a<o.start?o.start:o.nextStart;
    if(l&&this.hls){
      const u=o.len<=i.maxBufferHole, d=o.len>0&&o.len<1&&n.readyState<3, h=l-a;
      if(h>0&&(u||d)){
        if(h>i.maxBufferHole){
          let g=!1;
          if(a===0){
            const y=s.getAppendedFrag(0, W.MAIN);
            y&&l<y.end&&(g=!0)
          }
          if(!g&&e){
            var c;
            if(!((c=this.hls.loadLevelObj)!=null&&c.details)||Zf(this.hls.inFlightFragments, l))return 0;
            let x=!1, p=e.end;
            for(;
            p<l;
            ){
              const v=ta(p, s);
              if(v)p+=v.duration;
              else{
                x=!0;
                break
              }

            }
            if(x)return 0
          }

        }
        const f=Math.max(l+MA, a+OA);
        if(this.warn(`skipping hole, adjusting currentTime from ${a} to ${f}`), this.moved=!0, n.currentTime=f, !(e!=null&&e.gap)){
          const g=new Error(`fragment loaded with buffer holes, seeking from ${a} to ${f}`), y={
            type:q.MEDIA_ERROR, details:k.BUFFER_SEEK_OVER_HOLE, fatal:!1, error:g, reason:g.message, buffer:o.len, bufferInfo:o
          };
          e&&("fragment"in e?y.part=e:y.frag=e), this.hls.trigger(S.ERROR, y)
        }
        return f
      }

    }
    return 0
  }
  _tryNudgeBuffer(e){
    const{
      hls:t, media:s, nudgeRetry:n
    }
    =this, i=t==null?void 0:t.config;
    if(!s||!i)return 0;
    const a=s.currentTime;
    if(this.nudgeRetry++, n<i.nudgeMaxRetry){
      const o=a+(n+1)*i.nudgeOffset, l=new Error(`Nudging 'currentTime' from ${a} to ${o}`);
      this.warn(l.message), s.currentTime=o, t.trigger(S.ERROR, {
        type:q.MEDIA_ERROR, details:k.BUFFER_NUDGE_ON_STALL, error:l, fatal:!1, buffer:e.len, bufferInfo:e
      })
    }
    else{
      const o=new Error(`Playhead still not moving while enough data buffered @${a} after ${i.nudgeMaxRetry} nudges`);
      this.error(o.message), t.trigger(S.ERROR, {
        type:q.MEDIA_ERROR, details:k.BUFFER_STALLED_ERROR, error:o, fatal:!0, buffer:e.len, bufferInfo:e
      })
    }

  }

}
function Zf(r, e){
  const t=Jf(r.main);
  if(t&&t.start<=e)return t;
  const s=Jf(r.audio);
  return s&&s.start<=e?s:null
}
function Jf(r){
  if(!r)return null;
  switch(r.state){
    case N.IDLE:case N.STOPPED:case N.ENDED:case N.ERROR:return null
  }
  return r.frag
}
function ta(r, e){
  return e.getAppendedFrag(r, W.MAIN)||e.getPartialFragment(r)
}
const $A=.25;
function Kc(){
  if(!(typeof self>"u"))return self.VTTCue||self.TextTrackCue
}
function wl(r, e, t, s, n){
  let i=new r(e, t, "");
  try{
    i.value=s, n&&(i.type=n)
  }
  catch{
    i=new r(e, t, me(n?ce({
      type:n
    }, s):s))
  }
  return i
}
const ra=(()=>{
  const r=Kc();
  try{
    r&&new r(0, Number.POSITIVE_INFINITY, "")
  }
  catch{
    return Number.MAX_VALUE
  }
  return Number.POSITIVE_INFINITY
})();
class BA{
  constructor(e){
    this.hls=void 0, this.id3Track=null, this.media=null, this.dateRangeCuesAppended={

    }, this.removeCues=!0, this.assetCue=void 0, this.onEventCueEnter=()=>{
      this.hls&&this.hls.trigger(S.EVENT_CUE_ENTER, {

      })
    }, this.hls=e, this._registerListeners()
  }
  destroy(){
    this._unregisterListeners(), this.id3Track=null, this.media=null, this.dateRangeCuesAppended={

    }, this.hls=this.onEventCueEnter=null
  }
  _registerListeners(){
    const{
      hls:e
    }
    =this;
    e&&(e.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING,
    this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata,
    this), e.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(S.LEVEL_PTS_UPDATED,
    this.onLevelPtsUpdated, this))
  }
  _unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e&&(e.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING,
    this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.FRAG_PARSING_METADATA,
    this.onFragParsingMetadata, this), e.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(S.LEVEL_UPDATED, this.onLevelUpdated,
    this), e.off(S.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this))
  }
  onMediaAttaching(e, t){
    var s;
    this.media=t.media, ((s=t.overrides)==null?void 0:s.cueRemoval)===!1&&(this.removeCues=!1)
  }
  onMediaAttached(){
    var e;
    const t=(e=this.hls)==null?void 0:e.latestLevelDetails;
    t&&this.updateDateRangeCues(t)
  }
  onMediaDetaching(e, t){
    this.media=null, !t.transferMedia&&(this.id3Track&&(this.removeCues&&$s(this.id3Track, this.onEventCueEnter), this.id3Track=null),
    this.dateRangeCuesAppended={

    })
  }
  onManifestLoading(){
    this.dateRangeCuesAppended={

    }

  }
  createTrack(e){
    const t=this.getID3Track(e.textTracks);
    return t.mode="hidden", t
  }
  getID3Track(e){
    if(this.media){
      for(let t=0;
      t<e.length;
      t++){
        const s=e[t];
        if(s.kind==="metadata"&&s.label==="id3")return ey(s, this.media), s
      }
      return this.media.addTextTrack("metadata", "id3")
    }

  }
  onFragParsingMetadata(e, t){
    if(!this.media||!this.hls)return;
    const{
      enableEmsgMetadataCues:s, enableID3MetadataCues:n
    }
    =this.hls.config;
    if(!s&&!n)return;
    const{
      samples:i
    }
    =t;
    this.id3Track||(this.id3Track=this.createTrack(this.media));
    const a=Kc();
    if(a)for(let o=0;
    o<i.length;
    o++){
      const l=i[o].type;
      if(l===ft.emsg&&!s||!n)continue;
      const c=bp(i[o].data), u=i[o].pts;
      let d=u+i[o].duration;
      d>ra&&(d=ra), d-u<=0&&(d=u+$A);
      for(let f=0;
      f<c.length;
      f++){
        const g=c[f];
        if(!_p(g)){
          this.updateId3CueEnds(u, l);
          const y=wl(a, u, d, g, l);
          y&&this.id3Track.addCue(y)
        }

      }

    }

  }
  updateId3CueEnds(e, t){
    var s;
    const n=(s=this.id3Track)==null?void 0:s.cues;
    if(n)for(let i=n.length;
    i--;
    ){
      const a=n[i];
      a.type===t&&a.startTime<e&&a.endTime===ra&&(a.endTime=e)
    }

  }
  onBufferFlushing(e, {
    startOffset:t, endOffset:s, type:n
  }){
    const{
      id3Track:i, hls:a
    }
    =this;
    if(!a)return;
    const{
      config:{
        enableEmsgMetadataCues:o, enableID3MetadataCues:l
      }

    }
    =a;
    if(i&&(o||l)){
      let c;
      n==="audio"?c=u=>u.type===ft.audioId3&&l:n==="video"?c=u=>u.type===ft.emsg&&o:c=u=>u.type===ft.audioId3&&l||u.type===ft.emsg&&o,
      jc(i, t, s, c)
    }

  }
  onLevelUpdated(e, {
    details:t
  }){
    this.updateDateRangeCues(t, !0)
  }
  onLevelPtsUpdated(e, t){
    Math.abs(t.drift)>.01&&this.updateDateRangeCues(t.details)
  }
  updateDateRangeCues(e, t){
    if(!this.hls||!this.media)return;
    const{
      assetPlayerId:s, timelineOffset:n, enableDateRangeMetadataCues:i, interstitialsController:a
    }
    =this.hls.config;
    if(!i)return;
    const o=Kc();
    if(s&&n&&!a){
      const{
        fragmentStart:y, fragmentEnd:x
      }
      =e;
      let p=this.assetCue;
      p?(p.startTime=y, p.endTime=x):o&&(p=this.assetCue=wl(o, y, x, {
        assetPlayerId:this.hls.config.assetPlayerId
      }, "hlsjs.interstitial.asset"), p&&(p.id=s, this.id3Track||(this.id3Track=this.createTrack(this.media)), this.id3Track.addCue(p),
      p.addEventListener("enter", this.onEventCueEnter)))
    }
    if(!e.hasProgramDateTime)return;
    const{
      id3Track:l
    }
    =this, {
      dateRanges:c
    }
    =e, u=Object.keys(c);
    let d=this.dateRangeCuesAppended;
    if(l&&t){
      var h;
      if((h=l.cues)!=null&&h.length){
        const y=Object.keys(d).filter(x=>!u.includes(x));
        for(let x=y.length;
        x--;
        ){
          var f;
          const p=y[x], v=(f=d[p])==null?void 0:f.cues;
          delete d[p], v&&Object.keys(v).forEach(E=>{
            const T=v[E];
            if(T){
              T.removeEventListener("enter", this.onEventCueEnter);
              try{
                l.removeCue(T)
              }
              catch{

              }

            }

          })
        }

      }
      else d=this.dateRangeCuesAppended={

      }

    }
    const g=e.fragments[e.fragments.length-1];
    if(!(u.length===0||!G(g==null?void 0:g.programDateTime))){
      this.id3Track||(this.id3Track=this.createTrack(this.media));
      for(let y=0;
      y<u.length;
      y++){
        const x=u[y], p=c[x], v=p.startTime, E=d[x], T=(E==null?void 0:E.cues)||{

        };
        let I=(E==null?void 0:E.durationKnown)||!1, b=ra;
        const{
          duration:L, endDate:A
        }
        =p;
        if(A&&L!==null)b=v+L, I=!0;
        else if(p.endOnNext&&!I){
          const R=u.reduce((D, $)=>{
            if($!==p.id){
              const V=c[$];
              if(V.class===p.class&&V.startDate>p.startDate&&(!D||p.startDate<D.startDate))return V
            }
            return D
          }, null);
          R&&(b=R.startTime, I=!0)
        }
        const w=Object.keys(p.attr);
        for(let R=0;
        R<w.length;
        R++){
          const D=w[R];
          if(!oT(D))continue;
          const $=T[D];
          if($)I&&!(E!=null&&E.durationKnown)?$.endTime=b:Math.abs($.startTime-v)>.01&&($.startTime=v, $.endTime=b);
          else if(o){
            let V=p.attr[D];
            lT(D)&&(V=$g(V));
            const K=wl(o, v, b, {
              key:D, data:V
            }, ft.dateRange);
            K&&(K.id=x, this.id3Track.addCue(K), T[D]=K, a&&(D==="X-ASSET-LIST"||D==="X-ASSET-URL")&&K.addEventListener("enter",
            this.onEventCueEnter))
          }

        }
        d[x]={
          cues:T, dateRange:p, durationKnown:I
        }

      }

    }

  }

}
class jA{
  constructor(e){
    this.hls=void 0, this.config=void 0, this.media=null, this.currentTime=0, this.stallCount=0, this._latency=null, this._targetLatencyUpdated=!1,
    this.onTimeupdate=()=>{
      const{
        media:t
      }
      =this, s=this.levelDetails;
      if(!t||!s)return;
      this.currentTime=t.currentTime;
      const n=this.computeLatency();
      if(n===null)return;
      this._latency=n;
      const{
        lowLatencyMode:i, maxLiveSyncPlaybackRate:a
      }
      =this.config;
      if(!i||a===1||!s.live)return;
      const o=this.targetLatency;
      if(o===null)return;
      const l=n-o, c=Math.min(this.maxLatency, o+s.targetduration);
      if(l<c&&l>.05&&this.forwardBufferLength>1){
        const d=Math.min(2, Math.max(1, a)), h=Math.round(2/(1+Math.exp(-.75*l-this.edgeStalled))*20)/20, f=Math.min(d, Math.max(1,
        h));
        this.changeMediaPlaybackRate(t, f)
      }
      else t.playbackRate!==1&&t.playbackRate!==0&&this.changeMediaPlaybackRate(t, 1)
    }, this.hls=e, this.config=e.config, this.registerListeners()
  }
  get levelDetails(){
    var e;
    return((e=this.hls)==null?void 0:e.latestLevelDetails)||null
  }
  get latency(){
    return this._latency||0
  }
  get maxLatency(){
    const{
      config:e
    }
    =this;
    if(e.liveMaxLatencyDuration!==void 0)return e.liveMaxLatencyDuration;
    const t=this.levelDetails;
    return t?e.liveMaxLatencyDurationCount*t.targetduration:0
  }
  get targetLatency(){
    const e=this.levelDetails;
    if(e===null||this.hls===null)return null;
    const{
      holdBack:t, partHoldBack:s, targetduration:n
    }
    =e, {
      liveSyncDuration:i, liveSyncDurationCount:a, lowLatencyMode:o
    }
    =this.config, l=this.hls.userConfig;
    let c=o&&s||t;
    (this._targetLatencyUpdated||l.liveSyncDuration||l.liveSyncDurationCount||c===0)&&(c=i!==void 0?i:a*n);
    const u=n;
    return c+Math.min(this.stallCount*this.config.liveSyncOnStallIncrease, u)
  }
  set targetLatency(e){
    this.stallCount=0, this.config.liveSyncDuration=e, this._targetLatencyUpdated=!0
  }
  get liveSyncPosition(){
    const e=this.estimateLiveEdge(), t=this.targetLatency;
    if(e===null||t===null)return null;
    const s=this.levelDetails;
    if(s===null)return null;
    const n=s.edge, i=e-t-this.edgeStalled, a=n-s.totalduration, o=n-(this.config.lowLatencyMode&&s.partTarget||s.targetduration);
    return Math.min(Math.max(a, i), o)
  }
  get drift(){
    const e=this.levelDetails;
    return e===null?1:e.drift
  }
  get edgeStalled(){
    const e=this.levelDetails;
    if(e===null)return 0;
    const t=(this.config.lowLatencyMode&&e.partTarget||e.targetduration)*3;
    return Math.max(e.age-t, 0)
  }
  get forwardBufferLength(){
    const{
      media:e
    }
    =this, t=this.levelDetails;
    if(!e||!t)return 0;
    const s=e.buffered.length;
    return(s?e.buffered.end(s-1):t.edge)-this.currentTime
  }
  destroy(){
    this.unregisterListeners(), this.onMediaDetaching(), this.hls=null
  }
  registerListeners(){
    const{
      hls:e
    }
    =this;
    e&&(e.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(S.MANIFEST_LOADING,
    this.onManifestLoading, this), e.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(S.ERROR, this.onError, this))
  }
  unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e&&(e.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(S.MANIFEST_LOADING,
    this.onManifestLoading, this), e.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(S.ERROR, this.onError, this))
  }
  onMediaAttached(e, t){
    this.media=t.media, this.media.addEventListener("timeupdate", this.onTimeupdate)
  }
  onMediaDetaching(){
    this.media&&(this.media.removeEventListener("timeupdate", this.onTimeupdate), this.media=null)
  }
  onManifestLoading(){
    this._latency=null, this.stallCount=0
  }
  onLevelUpdated(e, {
    details:t
  }){
    t.advanced&&this.onTimeupdate(), !t.live&&this.media&&this.media.removeEventListener("timeupdate", this.onTimeupdate)
  }
  onError(e, t){
    var s;
    t.details===k.BUFFER_STALLED_ERROR&&(this.stallCount++, this.hls&&(s=this.levelDetails)!=null&&s.live&&this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency")
    )
  }
  changeMediaPlaybackRate(e, t){
    var s, n;
    e.playbackRate!==t&&((s=this.hls)==null||s.logger.debug(`[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${(n=this.targetLatency)==null?void 0:n.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e.playbackRate} to ${t}`)
    , e.playbackRate=t)
  }
  estimateLiveEdge(){
    const e=this.levelDetails;
    return e===null?null:e.edge+e.age
  }
  computeLatency(){
    const e=this.estimateLiveEdge();
    return e===null?null:e-this.currentTime
  }

}
class GA extends cd{
  constructor(e, t){
    super(e, "level-controller"), this._levels=[], this._firstLevel=-1, this._maxAutoLevel=-1, this._startLevel=void 0, this.currentLevel=null,
    this.currentLevelIndex=-1, this.manualLevelIndex=-1, this.steering=void 0, this.onParsedComplete=void 0, this.steering=t,
    this._registerListeners()
  }
  _registerListeners(){
    const{
      hls:e
    }
    =this;
    e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(S.LEVEL_LOADED,
    this.onLevelLoaded, this), e.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(S.FRAG_BUFFERED, this.onFragBuffered,
    this), e.on(S.ERROR, this.onError, this)
  }
  _unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(S.LEVEL_LOADED,
    this.onLevelLoaded, this), e.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(S.FRAG_BUFFERED, this.onFragBuffered,
    this), e.off(S.ERROR, this.onError, this)
  }
  destroy(){
    this._unregisterListeners(), this.steering=null, this.resetLevels(), super.destroy()
  }
  stopLoad(){
    this._levels.forEach(t=>{
      t.loadError=0, t.fragmentError=0
    }), super.stopLoad()
  }
  resetLevels(){
    this._startLevel=void 0, this.manualLevelIndex=-1, this.currentLevelIndex=-1, this.currentLevel=null, this._levels=[],
    this._maxAutoLevel=-1
  }
  onManifestLoading(e, t){
    this.resetLevels()
  }
  onManifestLoaded(e, t){
    const s=this.hls.config.preferManagedMediaSource, n=[], i={

    }, a={

    };
    let o=!1, l=!1, c=!1;
    t.levels.forEach(u=>{
      const d=u.attrs;
      let{
        audioCodec:h, videoCodec:f
      }
      =u;
      h&&(u.audioCodec=h=Za(h, s)||void 0), f&&(f=u.videoCodec=LS(f));
      const{
        width:g, height:y, unknownCodecs:x
      }
      =u, p=(x==null?void 0:x.length)||0;
      if(o||(o=!!(g&&y)), l||(l=!!f), c||(c=!!h), p||h&&!this.isAudioSupported(h)||f&&!this.isVideoSupported(f)){
        this.log(`Some or all CODECS not supported "${d.CODECS}"`);
        return
      }
      const{
        CODECS:v, "FRAME-RATE":E, "HDCP-LEVEL":T, "PATHWAY-ID":I, RESOLUTION:b, "VIDEO-RANGE":L
      }
      =d, w=`${`${
        I||"."
      }
      -`}${u.bitrate}-${b}-${E}-${v}-${L}-${T}`;
      if(i[w])if(i[w].uri!==u.url&&!u.attrs["PATHWAY-ID"]){
        const R=a[w]+=1;
        u.attrs["PATHWAY-ID"]=new Array(R+1).join(".");
        const D=this.createLevel(u);
        i[w]=D, n.push(D)
      }
      else i[w].addGroupId("audio", d.AUDIO), i[w].addGroupId("text", d.SUBTITLES);
      else{
        const R=this.createLevel(u);
        i[w]=R, a[w]=1, n.push(R)
      }

    }), this.filterAndSortMediaOptions(n, t, o, l, c)
  }
  createLevel(e){
    const t=new li(e), s=e.supplemental;
    if(s!=null&&s.videoCodec&&!this.isVideoSupported(s.videoCodec)){
      const n=new Error(`SUPPLEMENTAL-CODECS not supported "${s.videoCodec}"`);
      this.log(n.message), t.supportedResult=Xg(n, [])
    }
    return t
  }
  isAudioSupported(e){
    return ai(e, "audio", this.hls.config.preferManagedMediaSource)
  }
  isVideoSupported(e){
    return ai(e, "video", this.hls.config.preferManagedMediaSource)
  }
  filterAndSortMediaOptions(e, t, s, n, i){
    var a;
    let o=[], l=[], c=e;
    const u=((a=t.stats)==null?void 0:a.parsing)||{

    };
    if((s||n)&&i&&(c=c.filter(({
      videoCodec:v, videoRange:E, width:T, height:I
    })=>(!!v||!!(T&&I))&&NS(E))), c.length===0){
      Promise.resolve().then(()=>{
        if(this.hls){
          let v="no level with compatible codecs found in manifest", E=v;
          t.levels.length&&(E=`one or more CODECS in variant not supported: ${me(t.levels.map(I=>I.attrs.CODECS).filter((I,b,L)=>L.indexOf(I)===b))}`,
          this.warn(E), v+=` (${E})`);
          const T=new Error(v);
          this.hls.trigger(S.ERROR, {
            type:q.MEDIA_ERROR, details:k.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal:!0, url:t.url, error:T, reason:E
          })
        }

      }), u.end=performance.now();
      return
    }
    t.audioTracks&&(o=t.audioTracks.filter(v=>!v.audioCodec||this.isAudioSupported(v.audioCodec)), e0(o)), t.subtitles&&(l=t.subtitles,
    e0(l));
    const d=c.slice(0);
    c.sort((v, E)=>{
      if(v.attrs["HDCP-LEVEL"]!==E.attrs["HDCP-LEVEL"])return(v.attrs["HDCP-LEVEL"]||"")>(E.attrs["HDCP-LEVEL"]||"")?1:-1;
      if(s&&v.height!==E.height)return v.height-E.height;
      if(v.frameRate!==E.frameRate)return v.frameRate-E.frameRate;
      if(v.videoRange!==E.videoRange)return Ja.indexOf(v.videoRange)-Ja.indexOf(E.videoRange);
      if(v.videoCodec!==E.videoCodec){
        const T=Kh(v.videoCodec), I=Kh(E.videoCodec);
        if(T!==I)return I-T
      }
      if(v.uri===E.uri&&v.codecSet!==E.codecSet){
        const T=Xa(v.codecSet), I=Xa(E.codecSet);
        if(T!==I)return I-T
      }
      return v.averageBitrate!==E.averageBitrate?v.averageBitrate-E.averageBitrate:0
    });
    let h=d[0];
    if(this.steering&&(c=this.steering.filterParsedLevels(c), c.length!==d.length)){
      for(let v=0;
      v<d.length;
      v++)if(d[v].pathwayId===c[0].pathwayId){
        h=d[v];
        break
      }

    }
    this._levels=c;
    for(let v=0;
    v<c.length;
    v++)if(c[v]===h){
      var f;
      this._firstLevel=v;
      const E=h.bitrate, T=this.hls.bandwidthEstimate;
      if(this.log(`manifest loaded, ${c.length} level(s) found, first bitrate: ${E}`), ((f=this.hls.userConfig)==null?void 0:f.abrEwmaDefaultEstimate)===void 0){
        const I=Math.min(E, this.hls.config.abrEwmaDefaultEstimateMax);
        I>T&&T===this.hls.abrEwmaDefaultEstimate&&(this.hls.bandwidthEstimate=I)
      }
      break
    }
    const g=i&&!n, y=this.hls.config, x=!!(y.audioStreamController&&y.audioTrackController), p={
      levels:c, audioTracks:o, subtitleTracks:l, sessionData:t.sessionData, sessionKeys:t.sessionKeys, firstLevel:this._firstLevel,
      stats:t.stats, audio:i, video:n, altAudio:x&&!g&&o.some(v=>!!v.url)
    };
    u.end=performance.now(), this.hls.trigger(S.MANIFEST_PARSED, p)
  }
  get levels(){
    return this._levels.length===0?null:this._levels
  }
  get loadLevelObj(){
    return this.currentLevel
  }
  get level(){
    return this.currentLevelIndex
  }
  set level(e){
    const t=this._levels;
    if(t.length===0)return;
    if(e<0||e>=t.length){
      const u=new Error("invalid level idx"), d=e<0;
      if(this.hls.trigger(S.ERROR, {
        type:q.OTHER_ERROR, details:k.LEVEL_SWITCH_ERROR, level:e, fatal:d, error:u, reason:u.message
      }), d)return;
      e=Math.min(e, t.length-1)
    }
    const s=this.currentLevelIndex, n=this.currentLevel, i=n?n.attrs["PATHWAY-ID"]:void 0, a=t[e], o=a.attrs["PATHWAY-ID"];
    if(this.currentLevelIndex=e, this.currentLevel=a, s===e&&n&&i===o)return;
    this.log(`Switching to level ${e} (${a.height?a.height+"p ":""}${a.videoRange?a.videoRange+" ":""}${a.codecSet?a.codecSet+" ":""}@${a.bitrate})${o?" with Pathway "+o:""} from level ${s}${i?" with Pathway "+i:""}`)
    ;
    const l={
      level:e, attrs:a.attrs, details:a.details, bitrate:a.bitrate, averageBitrate:a.averageBitrate, maxBitrate:a.maxBitrate,
      realBitrate:a.realBitrate, width:a.width, height:a.height, codecSet:a.codecSet, audioCodec:a.audioCodec, videoCodec:a.videoCodec,
      audioGroups:a.audioGroups, subtitleGroups:a.subtitleGroups, loaded:a.loaded, loadError:a.loadError, fragmentError:a.fragmentError,
      name:a.name, id:a.id, uri:a.uri, url:a.url, urlId:0, audioGroupIds:a.audioGroupIds, textGroupIds:a.textGroupIds
    };
    this.hls.trigger(S.LEVEL_SWITCHING, l);
    const c=a.details;
    if(!c||c.live){
      const u=this.switchParams(a.uri, n==null?void 0:n.details, c);
      this.loadPlaylist(u)
    }

  }
  get manualLevel(){
    return this.manualLevelIndex
  }
  set manualLevel(e){
    this.manualLevelIndex=e, this._startLevel===void 0&&(this._startLevel=e), e!==-1&&(this.level=e)
  }
  get firstLevel(){
    return this._firstLevel
  }
  set firstLevel(e){
    this._firstLevel=e
  }
  get startLevel(){
    if(this._startLevel===void 0){
      const e=this.hls.config.startLevel;
      return e!==void 0?e:this.hls.firstAutoLevel
    }
    return this._startLevel
  }
  set startLevel(e){
    this._startLevel=e
  }
  get pathways(){
    return this.steering?this.steering.pathways():[]
  }
  get pathwayPriority(){
    return this.steering?this.steering.pathwayPriority:null
  }
  set pathwayPriority(e){
    if(this.steering){
      const t=this.steering.pathways(), s=e.filter(n=>t.indexOf(n)!==-1);
      if(e.length<1){
        this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);
        return
      }
      this.steering.pathwayPriority=s
    }

  }
  onError(e, t){
    t.fatal||!t.context||t.context.type===ne.LEVEL&&t.context.level===this.level&&this.checkRetry(t)
  }
  onFragBuffered(e, {
    frag:t
  }){
    if(t!==void 0&&t.type===W.MAIN){
      const s=t.elementaryStreams;
      if(!Object.keys(s).some(i=>!!s[i]))return;
      const n=this._levels[t.level];
      n!=null&&n.loadError&&(this.log(`Resetting level error count of ${n.loadError} on frag buffered`), n.loadError=0)
    }

  }
  onLevelLoaded(e, t){
    var s;
    const{
      level:n, details:i
    }
    =t, a=t.levelInfo;
    if(!a){
      var o;
      this.warn(`Invalid level index ${n}`), (o=t.deliveryDirectives)!=null&&o.skip&&(i.deltaUpdateFailed=!0);
      return
    }
    if(a===this.currentLevel||t.withoutMultiVariant){
      a.fragmentError===0&&(a.loadError=0);
      let l=a.details;
      l===t.details&&l.advanced&&(l=void 0), this.playlistLoaded(n, t, l)
    }
    else(s=t.deliveryDirectives)!=null&&s.skip&&(i.deltaUpdateFailed=!0)
  }
  loadPlaylist(e){
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel)&&this.scheduleLoading(this.currentLevel, e)
  }
  loadingPlaylist(e, t){
    super.loadingPlaylist(e, t);
    const s=this.getUrlWithDirectives(e.uri, t), n=this.currentLevelIndex, i=e.attrs["PATHWAY-ID"], a=e.details, o=a==null?void 0:a.age;
    this.log(`Loading level index ${n}${(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}${i?" Pathway "+i:""}${o&&a.live?" age "+o.toFixed(1)+(a.type&&" "+a.type||""):""} ${s}`)
    , this.hls.trigger(S.LEVEL_LOADING, {
      url:s, level:n, levelInfo:e, pathwayId:e.attrs["PATHWAY-ID"], id:0, deliveryDirectives:t||null
    })
  }
  get nextLoadLevel(){
    return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel
  }
  set nextLoadLevel(e){
    this.level=e, this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=e)
  }
  removeLevel(e){
    var t;
    if(this._levels.length===1)return;
    const s=this._levels.filter((i, a)=>a!==e?!0:(this.steering&&this.steering.removeLevel(i), i===this.currentLevel&&(this.currentLevel=null,
    this.currentLevelIndex=-1, i.details&&i.details.fragments.forEach(o=>o.level=-1)), !1));
    vp(s), this._levels=s, this.currentLevelIndex>-1&&(t=this.currentLevel)!=null&&t.details&&(this.currentLevelIndex=this.currentLevel.details.fragments[0].level),
    this.manualLevelIndex>-1&&(this.manualLevelIndex=this.currentLevelIndex);
    const n=s.length-1;
    this._firstLevel=Math.min(this._firstLevel, n), this._startLevel&&(this._startLevel=Math.min(this._startLevel, n)), this.hls.trigger(S.LEVELS_UPDATED,
    {
      levels:s
    })
  }
  onLevelsUpdated(e, {
    levels:t
  }){
    this._levels=t
  }
  checkMaxAutoUpdated(){
    const{
      autoLevelCapping:e, maxAutoLevel:t, maxHdcpLevel:s
    }
    =this.hls;
    this._maxAutoLevel!==t&&(this._maxAutoLevel=t, this.hls.trigger(S.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping:e, levels:this.levels, maxAutoLevel:t, minAutoLevel:this.hls.minAutoLevel, maxHdcpLevel:s
    }))
  }

}
function e0(r){
  const e={

  };
  r.forEach(t=>{
    const s=t.groupId||"";
    t.id=e[s]=e[s]||0, e[s]++
  })
}
function fy(){
  return self.SourceBuffer||self.WebKitSourceBuffer
}
function my(){
  if(!Wr())return!1;
  const e=fy();
  return!e||e.prototype&&typeof e.prototype.appendBuffer=="function"&&typeof e.prototype.remove=="function"
}
function VA(){
  if(!my())return!1;
  const r=Wr();
  return typeof(r==null?void 0:r.isTypeSupported)=="function"&&(["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some(e=>r.isTypeSupported(oi(e,
  "video")))||["mp4a.40.2", "fLaC"].some(e=>r.isTypeSupported(oi(e, "audio"))))
}
function KA(){
  var r;
  const e=fy();
  return typeof(e==null||(r=e.prototype)==null?void 0:r.changeType)=="function"
}
const HA=100;
class WA extends td{
  constructor(e, t, s){
    super(e, t, s, "stream-controller", W.MAIN), this.audioCodecSwap=!1, this.level=-1, this._forceStartLoad=!1, this._hasEnoughToStart=!1,
    this.altAudio=0, this.audioOnly=!1, this.fragPlaying=null, this.fragLastKbps=0, this.couldBacktrack=!1, this.backtrackFragment=null,
    this.audioCodecSwitch=!1, this.videoBuffer=null, this.onMediaPlaying=()=>{
      this.tick()
    }, this.onMediaSeeked=()=>{
      const n=this.media, i=n?n.currentTime:null;
      if(i===null||!G(i)||(this.log(`Media seeked to ${i.toFixed(3)}`), !this.getBufferedFrag(i)))return;
      const a=this.getFwdBufferInfoAtPos(n, i, W.MAIN, 0);
      if(a===null||a.len===0){
        this.warn(`Main forward buffer length at ${i} on "seeked" event ${a?a.len:"empty"})`);
        return
      }
      this.tick()
    }, this.registerListeners()
  }
  registerListeners(){
    super.registerListeners();
    const{
      hls:e
    }
    =this;
    e.on(S.MANIFEST_PARSED, this.onManifestParsed, this), e.on(S.LEVEL_LOADING, this.onLevelLoading, this), e.on(S.LEVEL_LOADED,
    this.onLevelLoaded, this), e.on(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(S.AUDIO_TRACK_SWITCHING,
    this.onAudioTrackSwitching, this), e.on(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(S.BUFFER_CREATED,
    this.onBufferCreated, this), e.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(S.LEVELS_UPDATED, this.onLevelsUpdated,
    this), e.on(S.FRAG_BUFFERED, this.onFragBuffered, this)
  }
  unregisterListeners(){
    super.unregisterListeners();
    const{
      hls:e
    }
    =this;
    e.off(S.MANIFEST_PARSED, this.onManifestParsed, this), e.off(S.LEVEL_LOADED, this.onLevelLoaded, this), e.off(S.FRAG_LOAD_EMERGENCY_ABORTED,
    this.onFragLoadEmergencyAborted, this), e.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(S.AUDIO_TRACK_SWITCHED,
    this.onAudioTrackSwitched, this), e.off(S.BUFFER_CREATED, this.onBufferCreated, this), e.off(S.BUFFER_FLUSHED, this.onBufferFlushed,
    this), e.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(S.FRAG_BUFFERED, this.onFragBuffered, this)
  }
  onHandlerDestroying(){
    this.onMediaPlaying=this.onMediaSeeked=null, this.unregisterListeners(), super.onHandlerDestroying()
  }
  startLoad(e, t){
    if(this.levels){
      const{
        lastCurrentTime:s, hls:n
      }
      =this;
      if(this.stopLoad(), this.setInterval(HA), this.level=-1, !this.startFragRequested){
        let i=n.startLevel;
        i===-1&&(n.config.testBandwidth&&this.levels.length>1?(i=0, this.bitrateTest=!0):i=n.firstAutoLevel), n.nextLoadLevel=i,
        this.level=n.loadLevel, this._hasEnoughToStart=!!t
      }
      s>0&&e===-1&&!t&&(this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e=s), this.state=N.IDLE,
      this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset, this.startPosition=t?-1:e, this.tick()
    }
    else this._forceStartLoad=!0, this.state=N.STOPPED
  }
  stopLoad(){
    this._forceStartLoad=!1, super.stopLoad()
  }
  doTick(){
    switch(this.state){
      case N.WAITING_LEVEL:{
        const{
          levels:e, level:t
        }
        =this, s=e==null?void 0:e[t], n=s==null?void 0:s.details;
        if(n&&(!n.live||this.levelLastLoaded===s&&!this.waitForLive(s))){
          if(this.waitForCdnTuneIn(n))break;
          this.state=N.IDLE;
          break
        }
        else if(this.hls.nextLoadLevel!==this.level){
          this.state=N.IDLE;
          break
        }
        break
      }
      case N.FRAG_LOADING_WAITING_RETRY:this.checkRetryDate();
      break
    }
    this.state===N.IDLE&&this.doTickIdle(), this.onTickEnd()
  }
  onTickEnd(){
    var e;
    super.onTickEnd(), (e=this.media)!=null&&e.readyState&&this.media.seeking===!1&&(this.lastCurrentTime=this.media.currentTime),
    this.checkFragmentChanged()
  }
  doTickIdle(){
    const{
      hls:e, levelLastLoaded:t, levels:s, media:n
    }
    =this;
    if(t===null||!n&&!this.primaryPrefetch&&(this.startFragRequested||!e.config.startFragPrefetch)||this.altAudio&&this.audioOnly)return;
    const i=this.buffering?e.nextLoadLevel:e.loadLevel;
    if(!(s!=null&&s[i]))return;
    const a=s[i], o=this.getMainFwdBufferInfo();
    if(o===null)return;
    const l=this.getLevelDetails();
    if(l&&this._streamEnded(o, l)){
      const y={

      };
      this.altAudio===2&&(y.type="video"), this.hls.trigger(S.BUFFER_EOS, y), this.state=N.ENDED;
      return
    }
    if(!this.buffering)return;
    e.loadLevel!==i&&e.manualLevel===-1&&this.log(`Adapting to level ${i} from level ${this.level}`), this.level=e.nextLoadLevel=i;
    const c=a.details;
    if(!c||this.state===N.WAITING_LEVEL||this.waitForLive(a)){
      this.level=i, this.state=N.WAITING_LEVEL, this.startFragRequested=!1;
      return
    }
    const u=o.len, d=this.getMaxBufferLength(a.maxBitrate);
    if(u>=d)return;
    this.backtrackFragment&&this.backtrackFragment.start>o.end&&(this.backtrackFragment=null);
    const h=this.backtrackFragment?this.backtrackFragment.start:o.end;
    let f=this.getNextFragment(h, c);
    if(this.couldBacktrack&&!this.fragPrevious&&f&&_e(f)&&this.fragmentTracker.getState(f)!==Pe.OK){
      var g;
      const x=((g=this.backtrackFragment)!=null?g:f).sn-c.startSN, p=c.fragments[x-1];
      p&&f.cc===p.cc&&(f=p, this.fragmentTracker.removeFragment(p))
    }
    else this.backtrackFragment&&o.len&&(this.backtrackFragment=null);
    if(f&&this.isLoopLoading(f, h)){
      if(!f.gap){
        const x=this.audioOnly&&!this.altAudio?fe.AUDIO:fe.VIDEO, p=(x===fe.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;
        p&&this.afterBufferFlushed(p, x, W.MAIN)
      }
      f=this.getNextFragmentLoopLoading(f, c, o, W.MAIN, d)
    }
    f&&(f.initSegment&&!f.initSegment.data&&!this.bitrateTest&&(f=f.initSegment), this.loadFragment(f, a, h))
  }
  loadFragment(e, t, s){
    const n=this.fragmentTracker.getState(e);
    n===Pe.NOT_LOADED||n===Pe.PARTIAL?_e(e)?this.bitrateTest?(this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`),
    this._loadBitrateTestFrag(e, t)):super.loadFragment(e, t, s):this._loadInitSegment(e, t):this.clearTrackerIfNeeded(e)
  }
  getBufferedFrag(e){
    return this.fragmentTracker.getBufferedFrag(e, W.MAIN)
  }
  followingBufferedFrag(e){
    return e?this.getBufferedFrag(e.end+.5):null
  }
  immediateLevelSwitch(){
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
  }
  nextLevelSwitch(){
    const{
      levels:e, media:t
    }
    =this;
    if(t!=null&&t.readyState){
      let s;
      const n=this.getAppendedFrag(t.currentTime);
      n&&n.start>1&&this.flushMainBuffer(0, n.start-1);
      const i=this.getLevelDetails();
      if(i!=null&&i.live){
        const o=this.getMainFwdBufferInfo();
        if(!o||o.len<i.targetduration*2)return
      }
      if(!t.paused&&e){
        const o=this.hls.nextLoadLevel, l=e[o], c=this.fragLastKbps;
        c&&this.fragCurrent?s=this.fragCurrent.duration*l.maxBitrate/(1e3*c)+1:s=0
      }
      else s=0;
      const a=this.getBufferedFrag(t.currentTime+s);
      if(a){
        const o=this.followingBufferedFrag(a);
        if(o){
          this.abortCurrentFrag();
          const l=o.maxStartPTS?o.maxStartPTS:o.start, c=o.duration, u=Math.max(a.end, l+Math.min(Math.max(c-this.config.maxFragLookUpTolerance,
          c*(this.couldBacktrack?.5:.125)), c*(this.couldBacktrack?.75:.25)));
          this.flushMainBuffer(u, Number.POSITIVE_INFINITY)
        }

      }

    }

  }
  abortCurrentFrag(){
    const e=this.fragCurrent;
    switch(this.fragCurrent=null, this.backtrackFragment=null, e&&(e.abortRequests(), this.fragmentTracker.removeFragment(e)),
    this.state){
      case N.KEY_LOADING:case N.FRAG_LOADING:case N.FRAG_LOADING_WAITING_RETRY:case N.PARSING:case N.PARSED:this.state=N.IDLE;
      break
    }
    this.nextLoadPosition=this.getLoadPosition()
  }
  flushMainBuffer(e, t){
    super.flushMainBuffer(e, t, this.altAudio===2?"video":null)
  }
  onMediaAttached(e, t){
    super.onMediaAttached(e, t);
    const s=t.media;
    Ze(s, "playing", this.onMediaPlaying), Ze(s, "seeked", this.onMediaSeeked)
  }
  onMediaDetaching(e, t){
    const{
      media:s
    }
    =this;
    s&&(it(s, "playing", this.onMediaPlaying), it(s, "seeked", this.onMediaSeeked)), this.videoBuffer=null, this.fragPlaying=null,
    super.onMediaDetaching(e, t), !t.transferMedia&&(this._hasEnoughToStart=!1)
  }
  onManifestLoading(){
    super.onManifestLoading(), this.log("Trigger BUFFER_RESET"), this.hls.trigger(S.BUFFER_RESET, void 0), this.couldBacktrack=!1,
    this.fragLastKbps=0, this.fragPlaying=this.backtrackFragment=null, this.altAudio=0, this.audioOnly=!1
  }
  onManifestParsed(e, t){
    let s=!1, n=!1;
    for(let i=0;
    i<t.levels.length;
    i++){
      const a=t.levels[i].audioCodec;
      a&&(s=s||a.indexOf("mp4a.40.2")!==-1, n=n||a.indexOf("mp4a.40.5")!==-1)
    }
    this.audioCodecSwitch=s&&n&&!KA(), this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
    this.levels=t.levels, this.startFragRequested=!1
  }
  onLevelLoading(e, t){
    const{
      levels:s
    }
    =this;
    if(!s||this.state!==N.IDLE)return;
    const n=t.levelInfo;
    (!n.details||n.details.live&&(this.levelLastLoaded!==n||n.details.expired)||this.waitForCdnTuneIn(n.details))&&(this.state=N.WAITING_LEVEL)
  }
  onLevelLoaded(e, t){
    var s;
    const{
      levels:n, startFragRequested:i
    }
    =this, a=t.level, o=t.details, l=o.totalduration;
    if(!n){
      this.warn(`Levels were reset while loading level ${a}`);
      return
    }
    this.log(`Level ${a} loaded [${o.startSN},${o.endSN}]${o.lastPartSn?`[part-${
      o.lastPartSn
    }
    -${
      o.lastPartIndex
    }]`:""}, cc [${o.startCC}, ${o.endCC}] duration:${l}`);
    const c=t.levelInfo, u=this.fragCurrent;
    u&&(this.state===N.FRAG_LOADING||this.state===N.FRAG_LOADING_WAITING_RETRY)&&u.level!==t.level&&u.loader&&this.abortCurrentFrag();
    let d=0;
    if(o.live||(s=c.details)!=null&&s.live){
      var h;
      if(this.checkLiveUpdate(o), o.deltaUpdateFailed)return;
      d=this.alignPlaylists(o, c.details, (h=this.levelLastLoaded)==null?void 0:h.details)
    }
    if(c.details=o, this.levelLastLoaded=c, i||this.setStartPosition(o, d), this.hls.trigger(S.LEVEL_UPDATED, {
      details:o, level:a
    }), this.state===N.WAITING_LEVEL){
      if(this.waitForCdnTuneIn(o))return;
      this.state=N.IDLE
    }
    i&&o.live&&this.synchronizeToLiveEdge(o), this.tick()
  }
  synchronizeToLiveEdge(e){
    const{
      config:t, media:s
    }
    =this;
    if(!s)return;
    const n=this.hls.liveSyncPosition, i=this.getLoadPosition(), a=e.fragmentStart, o=e.edge, l=i>=a-t.maxFragLookUpTolerance&&i<=o;
    if(n!==null&&s.duration>n&&(i<n||!l)){
      const u=t.liveMaxLatencyDuration!==void 0?t.liveMaxLatencyDuration:t.liveMaxLatencyDurationCount*e.targetduration;
      if((!l&&s.readyState<4||i<o-u)&&(this._hasEnoughToStart||(this.nextLoadPosition=n), s.readyState))if(this.warn(`Playback: ${i.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${n.toFixed(3)}`)
      , this.config.liveSyncMode==="buffered"){
        var c;
        const d=Z.bufferInfo(s, n, 0);
        if(!((c=d.buffered)!=null&&c.length)){
          s.currentTime=n;
          return
        }
        if(d.start<=i){
          s.currentTime=n;
          return
        }
        const{
          nextStart:f
        }
        =Z.bufferedInfo(d.buffered, i, 0);
        f&&(s.currentTime=f)
      }
      else s.currentTime=n
    }

  }
  _handleFragmentLoadProgress(e){
    var t;
    const s=e.frag, {
      part:n, payload:i
    }
    =e, {
      levels:a
    }
    =this;
    if(!a){
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return
    }
    const o=a[s.level];
    if(!o){
      this.warn(`Level ${s.level} not found on progress`);
      return
    }
    const l=o.details;
    if(!l){
      this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
      return
    }
    const c=o.videoCodec, u=l.PTSKnown||!l.live, d=(t=s.initSegment)==null?void 0:t.data, h=this._getAudioCodec(o), f=this.transmuxer=this.transmuxer||new Bp(this.hls,
    W.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), g=n?n.index:-1, y=g!==-1, x=new Zu(s.level,
    s.sn, s.stats.chunkCount, i.byteLength, g, y), p=this.initPTS[s.cc];
    f.push(i, d, h, c, s, n, l.totalduration, u, x, p)
  }
  onAudioTrackSwitching(e, t){
    const s=this.hls, n=this.altAudio!==0;
    if(eo(t.url, s))this.altAudio=1;
    else{
      if(this.mediaBuffer!==this.media){
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer=this.media;
        const a=this.fragCurrent;
        a&&(this.log("Switching to main audio track, cancel main fragment load"), a.abortRequests(), this.fragmentTracker.removeFragment(a)),
        this.resetTransmuxer(), this.resetLoadingState()
      }
      else this.audioOnly&&this.resetTransmuxer();
      if(n){
        this.altAudio=0, this.fragmentTracker.removeAllFragments(), s.once(S.BUFFER_FLUSHED, ()=>{
          this.hls&&this.hls.trigger(S.AUDIO_TRACK_SWITCHED, t)
        }), s.trigger(S.BUFFER_FLUSHING, {
          startOffset:0, endOffset:Number.POSITIVE_INFINITY, type:null
        });
        return
      }
      s.trigger(S.AUDIO_TRACK_SWITCHED, t)
    }

  }
  onAudioTrackSwitched(e, t){
    const s=eo(t.url, this.hls);
    if(s){
      const n=this.videoBuffer;
      n&&this.mediaBuffer!==n&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),
      this.mediaBuffer=n)
    }
    this.altAudio=s?2:0, this.tick()
  }
  onBufferCreated(e, t){
    const s=t.tracks;
    let n, i, a=!1;
    for(const o in s){
      const l=s[o];
      if(l.id==="main"){
        if(i=o, n=l, o==="video"){
          const c=s[o];
          c&&(this.videoBuffer=c.buffer)
        }

      }
      else a=!0
    }
    a&&n?(this.log(`Alternate track found, use ${i}.buffered to schedule main fragment loading`), this.mediaBuffer=n.buffer):this.mediaBuffer=this.media
  }
  onFragBuffered(e, t){
    const{
      frag:s, part:n
    }
    =t, i=s.type===W.MAIN;
    if(i){
      if(this.fragContextChanged(s)){
        this.warn(`Fragment ${s.sn}${n?" p: "+n.index:""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`),
        this.state===N.PARSED&&(this.state=N.IDLE);
        return
      }
      const o=n?n.stats:s.stats;
      this.fragLastKbps=Math.round(8*o.total/(o.buffering.end-o.loading.first)), _e(s)&&(this.fragPrevious=s), this.fragBufferedComplete(s,
      n)
    }
    const a=this.media;
    a&&(!this._hasEnoughToStart&&Z.getBuffered(a).length&&(this._hasEnoughToStart=!0, this.seekToStartPos()), i&&this.tick())
  }
  get hasEnoughToStart(){
    return this._hasEnoughToStart
  }
  onError(e, t){
    var s;
    if(t.fatal){
      this.state=N.ERROR;
      return
    }
    switch(t.details){
      case k.FRAG_GAP:case k.FRAG_PARSING_ERROR:case k.FRAG_DECRYPT_ERROR:case k.FRAG_LOAD_ERROR:case k.FRAG_LOAD_TIMEOUT:case k.KEY_LOAD_ERROR:case k.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(W.MAIN,
      t);
      break;
      case k.LEVEL_LOAD_ERROR:case k.LEVEL_LOAD_TIMEOUT:case k.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===N.WAITING_LEVEL&&((s=t.context)==null?void 0:s.type)===ne.LEVEL&&(this.state=N.IDLE)
      ;
      break;
      case k.BUFFER_ADD_CODEC_ERROR:case k.BUFFER_APPEND_ERROR:if(t.parent!=="main")return;
      this.reduceLengthAndFlushBuffer(t)&&this.resetLoadingState();
      break;
      case k.BUFFER_FULL_ERROR:if(t.parent!=="main")return;
      this.reduceLengthAndFlushBuffer(t)&&(!this.config.interstitialsController&&this.config.assetPlayerId?this._hasEnoughToStart=!0:this.flushMainBuffer(0,
      Number.POSITIVE_INFINITY));
      break;
      case k.INTERNAL_EXCEPTION:this.recoverWorkerError(t);
      break
    }

  }
  onFragLoadEmergencyAborted(){
    this.state=N.IDLE, this._hasEnoughToStart||(this.startFragRequested=!1, this.nextLoadPosition=this.lastCurrentTime), this.tickImmediate()
  }
  onBufferFlushed(e, {
    type:t
  }){
    if(t!==fe.AUDIO||!this.altAudio){
      const s=(t===fe.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;
      s&&(this.afterBufferFlushed(s, t, W.MAIN), this.tick())
    }

  }
  onLevelsUpdated(e, t){
    this.level>-1&&this.fragCurrent&&(this.level=this.fragCurrent.level, this.level===-1&&this.resetWhenMissingContext(this.fragCurrent)),
    this.levels=t.levels
  }
  swapAudioCodec(){
    this.audioCodecSwap=!this.audioCodecSwap
  }
  seekToStartPos(){
    const{
      media:e
    }
    =this;
    if(!e)return;
    const t=e.currentTime;
    let s=this.startPosition;
    if(s>=0&&t<s){
      if(e.seeking){
        this.log(`could not seek to ${s}, already seeking at ${t}`);
        return
      }
      const n=this.timelineOffset;
      n&&s&&(s+=n);
      const i=this.getLevelDetails(), a=Z.getBuffered(e), o=a.length?a.start(0):0, l=o-s, c=Math.max(this.config.maxBufferHole,
      this.config.maxFragLookUpTolerance);
      (this.config.startOnSegmentBoundary||l>0&&(l<c||this.loadingParts&&l<2*((i==null?void 0:i.partTarget)||0)))&&(this.log(`adjusting start position by ${l} to match buffer start`)
      , s+=l, this.startPosition=s), t<s&&(this.log(`seek to target start position ${s} from current time ${t} buffer start ${o}`),
      e.currentTime=s)
    }

  }
  _getAudioCodec(e){
    let t=this.config.defaultAudioCodec||e.audioCodec;
    return this.audioCodecSwap&&t&&(this.log("Swapping audio codec"), t.indexOf("mp4a.40.5")!==-1?t="mp4a.40.2":t="mp4a.40.5"),
    t
  }
  _loadBitrateTestFrag(e, t){
    e.bitrateTest=!0, this._doFragLoad(e, t).then(s=>{
      const{
        hls:n
      }
      =this, i=s==null?void 0:s.frag;
      if(!i||this.fragContextChanged(i))return;
      t.fragmentError=0, this.state=N.IDLE, this.startFragRequested=!1, this.bitrateTest=!1;
      const a=i.stats;
      a.parsing.start=a.parsing.end=a.buffering.start=a.buffering.end=self.performance.now(), n.trigger(S.FRAG_LOADED, s),
      i.bitrateTest=!1
    }).catch(s=>{
      this.state===N.STOPPED||this.state===N.ERROR||(this.warn(s), this.resetFragmentLoading(e))
    })
  }
  _handleTransmuxComplete(e){
    const t=this.playlistType, {
      hls:s
    }
    =this, {
      remuxResult:n, chunkMeta:i
    }
    =e, a=this.getCurrentContext(i);
    if(!a){
      this.resetWhenMissingContext(i);
      return
    }
    const{
      frag:o, part:l, level:c
    }
    =a, {
      video:u, text:d, id3:h, initSegment:f
    }
    =n, {
      details:g
    }
    =c, y=this.altAudio?void 0:n.audio;
    if(this.fragContextChanged(o)){
      this.fragmentTracker.removeFragment(o);
      return
    }
    if(this.state=N.PARSING, f){
      const x=f.tracks;
      if(x){
        const T=o.initSegment||o;
        if(this.unhandledEncryptionError(f, o))return;
        this._bufferInitSegment(c, x, T, i), s.trigger(S.FRAG_PARSING_INIT_SEGMENT, {
          frag:T, id:t, tracks:x
        })
      }
      const p=f.initPTS, v=f.timescale, E=this.initPTS[o.cc];
      if(G(p)&&(!E||E.baseTime!==p||E.timescale!==v)){
        const T=f.trackId;
        this.initPTS[o.cc]={
          baseTime:p, timescale:v, trackId:T
        }, s.trigger(S.INIT_PTS_FOUND, {
          frag:o, id:t, initPTS:p, timescale:v, trackId:T
        })
      }

    }
    if(u&&g){
      y&&u.type==="audiovideo"&&this.logMuxedErr(o);
      const x=g.fragments[o.sn-1-g.startSN], p=o.sn===g.startSN, v=!x||o.cc>x.cc;
      if(n.independent!==!1){
        const{
          startPTS:E, endPTS:T, startDTS:I, endDTS:b
        }
        =u;
        if(l)l.elementaryStreams[u.type]={
          startPTS:E, endPTS:T, startDTS:I, endDTS:b
        };
        else if(u.firstKeyFrame&&u.independent&&i.id===1&&!v&&(this.couldBacktrack=!0), u.dropped&&u.independent){
          const L=this.getMainFwdBufferInfo(), A=(L?L.end:this.getLoadPosition())+this.config.maxBufferHole, w=u.firstKeyFramePTS?u.firstKeyFramePTS:E;
          if(!p&&A<w-this.config.maxBufferHole&&!v){
            this.backtrack(o);
            return
          }
          else v&&(o.gap=!0);
          o.setElementaryStreamInfo(u.type, o.start, T, o.start, b, !0)
        }
        else p&&E-(g.appliedTimelineOffset||0)>Aa&&(o.gap=!0);
        o.setElementaryStreamInfo(u.type, E, T, I, b), this.backtrackFragment&&(this.backtrackFragment=o), this.bufferFragmentData(u,
        o, l, i, p||v)
      }
      else if(p||v)o.gap=!0;
      else{
        this.backtrack(o);
        return
      }

    }
    if(y){
      const{
        startPTS:x, endPTS:p, startDTS:v, endDTS:E
      }
      =y;
      l&&(l.elementaryStreams[fe.AUDIO]={
        startPTS:x, endPTS:p, startDTS:v, endDTS:E
      }), o.setElementaryStreamInfo(fe.AUDIO, x, p, v, E), this.bufferFragmentData(y, o, l, i)
    }
    if(g&&h!=null&&h.samples.length){
      const x={
        id:t, frag:o, details:g, samples:h.samples
      };
      s.trigger(S.FRAG_PARSING_METADATA, x)
    }
    if(g&&d){
      const x={
        id:t, frag:o, details:g, samples:d.samples
      };
      s.trigger(S.FRAG_PARSING_USERDATA, x)
    }

  }
  logMuxedErr(e){
    this.warn(`${_e(e)?"Media":"Init"} segment with muxed audiovideo where only video expected: ${e.url}`)
  }
  _bufferInitSegment(e, t, s, n){
    if(this.state!==N.PARSING)return;
    this.audioOnly=!!t.audio&&!t.video, this.altAudio&&!this.audioOnly&&(delete t.audio, t.audiovideo&&this.logMuxedErr(s));
    const{
      audio:i, video:a, audiovideo:o
    }
    =t;
    if(i){
      const c=e.audioCodec;
      let u=va(i.codec, c);
      u==="mp4a"&&(u="mp4a.40.5");
      const d=navigator.userAgent.toLowerCase();
      if(this.audioCodecSwitch){
        u&&(u.indexOf("mp4a.40.5")!==-1?u="mp4a.40.2":u="mp4a.40.5");
        const h=i.metadata;
        h&&"channelCount"in h&&(h.channelCount||1)!==1&&d.indexOf("firefox")===-1&&(u="mp4a.40.5")
      }
      u&&u.indexOf("mp4a.40.5")!==-1&&d.indexOf("android")!==-1&&i.container!=="audio/mpeg"&&(u="mp4a.40.2", this.log(`Android: force audio codec to ${u}`)),
      c&&c!==u&&this.log(`Swapping manifest audio codec "${c}" for "${u}"`), i.levelCodec=u, i.id=W.MAIN, this.log(`Init audio buffer, container:${i.container}, codecs[selected/level/parsed]=[${u||""}/${c||""}/${i.codec}]`)
      , delete t.audiovideo
    }
    if(a){
      a.levelCodec=e.videoCodec, a.id=W.MAIN;
      const c=a.codec;
      if((c==null?void 0:c.length)===4)switch(c){
        case"hvc1":case"hev1":a.codec="hvc1.1.6.L120.90";
        break;
        case"av01":a.codec="av01.0.04M.08";
        break;
        case"avc1":a.codec="avc1.42e01e";
        break
      }
      this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec||""}/${c}]${a.codec!==c?" parsed-corrected="+a.codec:""}${a.supplemental?" supplemental="+a.supplemental:""}`)
      , delete t.audiovideo
    }
    o&&(this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`), delete t.video,
    delete t.audio);
    const l=Object.keys(t);
    if(l.length){
      if(this.hls.trigger(S.BUFFER_CODECS, t), !this.hls)return;
      l.forEach(c=>{
        const d=t[c].initSegment;
        d!=null&&d.byteLength&&this.hls.trigger(S.BUFFER_APPENDING, {
          type:c, data:d, frag:s, part:null, chunkMeta:n, parent:s.type
        })
      })
    }
    this.tickImmediate()
  }
  getMainFwdBufferInfo(){
    const e=this.mediaBuffer&&this.altAudio===2?this.mediaBuffer:this.media;
    return this.getFwdBufferInfo(e, W.MAIN)
  }
  get maxBufferLength(){
    const{
      levels:e, level:t
    }
    =this, s=e==null?void 0:e[t];
    return s?this.getMaxBufferLength(s.maxBitrate):this.config.maxBufferLength
  }
  backtrack(e){
    this.couldBacktrack=!0, this.backtrackFragment=e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e),
    this.fragPrevious=null, this.nextLoadPosition=e.start, this.state=N.IDLE
  }
  checkFragmentChanged(){
    const e=this.media;
    let t=null;
    if(e&&e.readyState>1&&e.seeking===!1){
      const s=e.currentTime;
      if(Z.isBuffered(e, s)?t=this.getAppendedFrag(s):Z.isBuffered(e, s+.1)&&(t=this.getAppendedFrag(s+.1)), t){
        this.backtrackFragment=null;
        const n=this.fragPlaying, i=t.level;
        (!n||t.sn!==n.sn||n.level!==i)&&(this.fragPlaying=t, this.hls.trigger(S.FRAG_CHANGED, {
          frag:t
        }), (!n||n.level!==i)&&this.hls.trigger(S.LEVEL_SWITCHED, {
          level:i
        }))
      }

    }

  }
  get nextLevel(){
    const e=this.nextBufferedFrag;
    return e?e.level:-1
  }
  get currentFrag(){
    var e;
    if(this.fragPlaying)return this.fragPlaying;
    const t=((e=this.media)==null?void 0:e.currentTime)||this.lastCurrentTime;
    return G(t)?this.getAppendedFrag(t):null
  }
  get currentProgramDateTime(){
    var e;
    const t=((e=this.media)==null?void 0:e.currentTime)||this.lastCurrentTime;
    if(G(t)){
      const s=this.getLevelDetails(), n=this.currentFrag||(s?ps(null, s.fragments, t):null);
      if(n){
        const i=n.programDateTime;
        if(i!==null){
          const a=i+(t-n.start)*1e3;
          return new Date(a)
        }

      }

    }
    return null
  }
  get currentLevel(){
    const e=this.currentFrag;
    return e?e.level:-1
  }
  get nextBufferedFrag(){
    const e=this.currentFrag;
    return e?this.followingBufferedFrag(e):null
  }
  get forceStartLoad(){
    return this._forceStartLoad
  }

}
class zA extends Ct{
  constructor(e, t){
    super("key-loader", t), this.config=void 0, this.keyIdToKeyInfo={

    }, this.emeController=null, this.config=e
  }
  abort(e){
    for(const s in this.keyIdToKeyInfo){
      const n=this.keyIdToKeyInfo[s].loader;
      if(n){
        var t;
        if(e&&e!==((t=n.context)==null?void 0:t.frag.type))return;
        n.abort()
      }

    }

  }
  detach(){
    for(const e in this.keyIdToKeyInfo){
      const t=this.keyIdToKeyInfo[e];
      (t.mediaKeySessionContext||t.decryptdata.isCommonEncryption)&&delete this.keyIdToKeyInfo[e]
    }

  }
  destroy(){
    this.detach();
    for(const e in this.keyIdToKeyInfo){
      const t=this.keyIdToKeyInfo[e].loader;
      t&&t.destroy()
    }
    this.keyIdToKeyInfo={

    }

  }
  createKeyLoadError(e, t=k.KEY_LOAD_ERROR, s, n, i){
    return new cr({
      type:q.NETWORK_ERROR, details:t, fatal:!1, frag:e, response:i, error:s, networkDetails:n
    })
  }
  loadClear(e, t, s){
    if(this.emeController&&this.config.emeEnabled&&!this.emeController.getSelectedKeySystemFormats().length){
      if(t.length)for(let n=0, i=t.length;
      n<i;
      n++){
        const a=t[n];
        if(e.cc<=a.cc&&(!_e(e)||!_e(a)||e.sn<a.sn)||!s&&n==i-1)return this.emeController.selectKeySystemFormat(a).then(o=>{
          if(!this.emeController)return;
          a.setKeyFormat(o);
          const l=Ea(o);
          if(l)return this.emeController.getKeySystemAccess([l])
        })
      }
      if(this.config.requireKeySystemAccessOnStart){
        const n=_n(this.config);
        if(n.length)return this.emeController.getKeySystemAccess(n)
      }

    }
    return null
  }
  load(e){
    return!e.decryptdata&&e.encrypted&&this.emeController&&this.config.emeEnabled?this.emeController.selectKeySystemFormat(e).then(t=>this.loadInternal(e,
    t)):this.loadInternal(e)
  }
  loadInternal(e, t){
    var s, n;
    t&&e.setKeyFormat(t);
    const i=e.decryptdata;
    if(!i){
      const c=new Error(t?`Expected frag.decryptdata to be defined after setting format ${t}`:`Missing decryption data on fragment in onKeyLoading (emeEnabled with controller: ${this.emeController&&this.config.emeEnabled})`)
      ;
      return Promise.reject(this.createKeyLoadError(e, k.KEY_LOAD_ERROR, c))
    }
    const a=i.uri;
    if(!a)return Promise.reject(this.createKeyLoadError(e, k.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${a}"`)));
    const o=bl(i);
    let l=this.keyIdToKeyInfo[o];
    if((s=l)!=null&&s.decryptdata.key)return i.key=l.decryptdata.key, Promise.resolve({
      frag:e, keyInfo:l
    });
    if(this.emeController&&(n=l)!=null&&n.keyLoadPromise)switch(this.emeController.getKeyStatus(l.decryptdata)){
      case"usable":case"usable-in-future":return l.keyLoadPromise.then(u=>{
        const{
          keyInfo:d
        }
        =u;
        return i.key=d.decryptdata.key, {
          frag:e, keyInfo:d
        }

      })
    }
    switch(this.log(`${this.keyIdToKeyInfo[o]?"Rel":"L"}oading${i.keyId?" keyId: "+je(i.keyId):""} URI: ${i.uri} from ${e.type} ${e.level}`),
    l=this.keyIdToKeyInfo[o]={
      decryptdata:i, keyLoadPromise:null, loader:null, mediaKeySessionContext:null
    }, i.method){
      case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return i.keyFormat==="identity"?this.loadKeyHTTP(l, e):this.loadKeyEME(l,
      e);
      case"AES-128":case"AES-256":case"AES-256-CTR":return this.loadKeyHTTP(l, e);
      default:return Promise.reject(this.createKeyLoadError(e, k.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${i.method}"`)))
    }

  }
  loadKeyEME(e, t){
    const s={
      frag:t, keyInfo:e
    };
    if(this.emeController&&this.config.emeEnabled){
      var n;
      if(!e.decryptdata.keyId&&(n=t.initSegment)!=null&&n.data){
        const a=hS(t.initSegment.data);
        if(a.length){
          let o=a[0];
          o.some(l=>l!==0)?(this.log(`Using keyId found in init segment ${je(o)}`), Vr.setKeyIdForUri(e.decryptdata.uri, o)):(o=Vr.addKeyIdForUri(e.decryptdata.uri),
          this.log(`Generating keyId to patch media ${je(o)}`)), e.decryptdata.keyId=o
        }

      }
      if(!e.decryptdata.keyId&&!_e(t))return Promise.resolve(s);
      const i=this.emeController.loadKey(s);
      return(e.keyLoadPromise=i.then(a=>(e.mediaKeySessionContext=a, s))).catch(a=>{
        throw e.keyLoadPromise=null, "data"in a&&(a.data.frag=t), a
      })
    }
    return Promise.resolve(s)
  }
  loadKeyHTTP(e, t){
    const s=this.config, n=s.loader, i=new n(s);
    return t.keyLoader=e.loader=i, e.keyLoadPromise=new Promise((a, o)=>{
      const l={
        keyInfo:e, frag:t, responseType:"arraybuffer", url:e.decryptdata.uri
      }, c=s.keyLoadPolicy.default, u={
        loadPolicy:c, timeout:c.maxLoadTimeMs, maxRetry:0, retryDelay:0, maxRetryDelay:0
      }, d={
        onSuccess:(h, f, g, y)=>{
          const{
            frag:x, keyInfo:p
          }
          =g, v=bl(p.decryptdata);
          if(!x.decryptdata||p!==this.keyIdToKeyInfo[v])return o(this.createKeyLoadError(x, k.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"),
          y));
          p.decryptdata.key=x.decryptdata.key=new Uint8Array(h.data), x.keyLoader=null, p.loader=null, a({
            frag:x, keyInfo:p
          })
        }, onError:(h, f, g, y)=>{
          this.resetLoader(f), o(this.createKeyLoadError(t, k.KEY_LOAD_ERROR, new Error(`HTTP Error ${h.code} loading key ${h.text}`),
          g, ce({
            url:l.url, data:void 0
          }, h)))
        }, onTimeout:(h, f, g)=>{
          this.resetLoader(f), o(this.createKeyLoadError(t, k.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), g))
        }, onAbort:(h, f, g)=>{
          this.resetLoader(f), o(this.createKeyLoadError(t, k.INTERNAL_ABORTED, new Error("key loading aborted"), g))
        }

      };
      i.load(l, u, d)
    })
  }
  resetLoader(e){
    const{
      frag:t, keyInfo:s, url:n
    }
    =e, i=s.loader;
    t.keyLoader===i&&(t.keyLoader=null, s.loader=null);
    const a=bl(s.decryptdata)||n;
    delete this.keyIdToKeyInfo[a], i&&i.destroy()
  }

}
function bl(r){
  if(r.keyFormat!==Ge.FAIRPLAY){
    const e=r.keyId;
    if(e)return je(e)
  }
  return r.uri
}
function t0(r){
  const{
    type:e
  }
  =r;
  switch(e){
    case ne.AUDIO_TRACK:return W.AUDIO;
    case ne.SUBTITLE_TRACK:return W.SUBTITLE;
    default:return W.MAIN
  }

}
function _l(r, e){
  let t=r.url;
  return(t===void 0||t.indexOf("data:")===0)&&(t=e.url), t
}
class YA{
  constructor(e){
    this.hls=void 0, this.loaders=Object.create(null), this.variableList=null, this.onManifestLoaded=this.checkAutostartLoad,
    this.hls=e, this.registerListeners()
  }
  startLoad(e){

  }
  stopLoad(){
    this.destroyInternalLoaders()
  }
  registerListeners(){
    const{
      hls:e
    }
    =this;
    e.on(S.MANIFEST_LOADING, this.onManifestLoading, this), e.on(S.LEVEL_LOADING, this.onLevelLoading, this), e.on(S.AUDIO_TRACK_LOADING,
    this.onAudioTrackLoading, this), e.on(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.on(S.LEVELS_UPDATED,
    this.onLevelsUpdated, this)
  }
  unregisterListeners(){
    const{
      hls:e
    }
    =this;
    e.off(S.MANIFEST_LOADING, this.onManifestLoading, this), e.off(S.LEVEL_LOADING, this.onLevelLoading, this), e.off(S.AUDIO_TRACK_LOADING,
    this.onAudioTrackLoading, this), e.off(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.off(S.LEVELS_UPDATED,
    this.onLevelsUpdated, this)
  }
  createInternalLoader(e){
    const t=this.hls.config, s=t.pLoader, n=t.loader, i=s||n, a=new i(t);
    return this.loaders[e.type]=a, a
  }
  getInternalLoader(e){
    return this.loaders[e.type]
  }
  resetInternalLoader(e){
    this.loaders[e]&&delete this.loaders[e]
  }
  destroyInternalLoaders(){
    for(const e in this.loaders){
      const t=this.loaders[e];
      t&&t.destroy(), this.resetInternalLoader(e)
    }

  }
  destroy(){
    this.variableList=null, this.unregisterListeners(), this.destroyInternalLoaders()
  }
  onManifestLoading(e, t){
    const{
      url:s
    }
    =t;
    this.variableList=null, this.load({
      id:null, level:0, responseType:"text", type:ne.MANIFEST, url:s, deliveryDirectives:null, levelOrTrack:null
    })
  }
  onLevelLoading(e, t){
    const{
      id:s, level:n, pathwayId:i, url:a, deliveryDirectives:o, levelInfo:l
    }
    =t;
    this.load({
      id:s, level:n, pathwayId:i, responseType:"text", type:ne.LEVEL, url:a, deliveryDirectives:o, levelOrTrack:l
    })
  }
  onAudioTrackLoading(e, t){
    const{
      id:s, groupId:n, url:i, deliveryDirectives:a, track:o
    }
    =t;
    this.load({
      id:s, groupId:n, level:null, responseType:"text", type:ne.AUDIO_TRACK, url:i, deliveryDirectives:a, levelOrTrack:o
    })
  }
  onSubtitleTrackLoading(e, t){
    const{
      id:s, groupId:n, url:i, deliveryDirectives:a, track:o
    }
    =t;
    this.load({
      id:s, groupId:n, level:null, responseType:"text", type:ne.SUBTITLE_TRACK, url:i, deliveryDirectives:a, levelOrTrack:o
    })
  }
  onLevelsUpdated(e, t){
    const s=this.loaders[ne.LEVEL];
    if(s){
      const n=s.context;
      n&&!t.levels.some(i=>i===n.levelOrTrack)&&(s.abort(), delete this.loaders[ne.LEVEL])
    }

  }
  load(e){
    var t;
    const s=this.hls.config;
    let n=this.getInternalLoader(e);
    if(n){
      const c=this.hls.logger, u=n.context;
      if(u&&u.levelOrTrack===e.levelOrTrack&&(u.url===e.url||u.deliveryDirectives&&!e.deliveryDirectives)){
        u.url===e.url?c.log(`[playlist-loader]: ignore ${e.url} ongoing request`):c.log(`[playlist-loader]: ignore ${e.url} in favor of ${u.url}`);
        return
      }
      c.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), n.abort()
    }
    let i;
    if(e.type===ne.MANIFEST?i=s.manifestLoadPolicy.default:i=he({

    }, s.playlistLoadPolicy.default, {
      timeoutRetry:null, errorRetry:null
    }), n=this.createInternalLoader(e), G((t=e.deliveryDirectives)==null?void 0:t.part)){
      let c;
      if(e.type===ne.LEVEL&&e.level!==null?c=this.hls.levels[e.level].details:e.type===ne.AUDIO_TRACK&&e.id!==null?c=this.hls.audioTracks[e.id].details:e.type===ne.SUBTITLE_TRACK&&e.id!==null&&(c=this.hls.subtitleTracks[e.id]
      .details), c){
        const u=c.partTarget, d=c.targetduration;
        if(u&&d){
          const h=Math.max(u*3, d*.8)*1e3;
          i=he({

          }, i, {
            maxTimeToFirstByteMs:Math.min(h, i.maxTimeToFirstByteMs), maxLoadTimeMs:Math.min(h, i.maxTimeToFirstByteMs)
          })
        }

      }

    }
    const a=i.errorRetry||i.timeoutRetry||{

    }, o={
      loadPolicy:i, timeout:i.maxLoadTimeMs, maxRetry:a.maxNumRetry||0, retryDelay:a.retryDelayMs||0, maxRetryDelay:a.maxRetryDelayMs||0
    }, l={
      onSuccess:(c, u, d, h)=>{
        const f=this.getInternalLoader(d);
        this.resetInternalLoader(d.type);
        const g=c.data;
        u.parsing.start=performance.now(), Zt.isMediaPlaylist(g)||d.type!==ne.MANIFEST?this.handleTrackOrLevelPlaylist(c,
        u, d, h||null, f):this.handleMasterPlaylist(c, u, d, h)
      }, onError:(c, u, d, h)=>{
        this.handleNetworkError(u, d, !1, c, h)
      }, onTimeout:(c, u, d)=>{
        this.handleNetworkError(u, d, !0, void 0, c)
      }

    };
    n.load(e, o, l)
  }
  checkAutostartLoad(){
    if(!this.hls)return;
    const{
      config:{
        autoStartLoad:e, startPosition:t
      }, forceStartLoad:s
    }
    =this.hls;
    (e||s)&&(this.hls.logger.log(`${e?"auto":"force"} startLoad with configured startPosition ${t}`), this.hls.startLoad(t))
  }
  handleMasterPlaylist(e, t, s, n){
    const i=this.hls, a=e.data, o=_l(e, s), l=Zt.parseMasterPlaylist(a, o);
    if(l.playlistParsingError){
      t.parsing.end=performance.now(), this.handleManifestParsingError(e, s, l.playlistParsingError, n, t);
      return
    }
    const{
      contentSteering:c, levels:u, sessionData:d, sessionKeys:h, startTimeOffset:f, variableList:g
    }
    =l;
    this.variableList=g, u.forEach(v=>{
      const{
        unknownCodecs:E
      }
      =v;
      if(E){
        const{
          preferManagedMediaSource:T
        }
        =this.hls.config;
        let{
          audioCodec:I, videoCodec:b
        }
        =v;
        for(let L=E.length;
        L--;
        ){
          const A=E[L];
          ai(A, "audio", T)?(v.audioCodec=I=I?`${I},${A}`:A, an.audio[I.substring(0, 4)]=2, E.splice(L, 1)):ai(A, "video",
          T)&&(v.videoCodec=b=b?`${b},${A}`:A, an.video[b.substring(0, 4)]=2, E.splice(L, 1))
        }

      }

    });
    const{
      AUDIO:y=[], SUBTITLES:x, "CLOSED-CAPTIONS":p
    }
    =Zt.parseMasterPlaylistMedia(a, o, l);
    y.length&&!y.some(E=>!E.url)&&u[0].audioCodec&&!u[0].attrs.AUDIO&&(this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one")
    , y.unshift({
      type:"main", name:"main", groupId:"main", default:!1, autoselect:!1, forced:!1, id:-1, attrs:new xe({

      }), bitrate:0, url:""
    })), i.trigger(S.MANIFEST_LOADED, {
      levels:u, audioTracks:y, subtitles:x, captions:p, contentSteering:c, url:o, stats:t, networkDetails:n, sessionData:d,
      sessionKeys:h, startTimeOffset:f, variableList:g
    })
  }
  handleTrackOrLevelPlaylist(e, t, s, n, i){
    const a=this.hls, {
      id:o, level:l, type:c
    }
    =s, u=_l(e, s), d=G(l)?l:G(o)?o:0, h=t0(s), f=Zt.parseLevelPlaylist(e.data, u, d, h, 0, this.variableList);
    if(c===ne.MANIFEST){
      const g={
        attrs:new xe({

        }), bitrate:0, details:f, name:"", url:u
      };
      f.requestScheduled=t.loading.start+gp(f, 0), a.trigger(S.MANIFEST_LOADED, {
        levels:[g], audioTracks:[], url:u, stats:t, networkDetails:n, sessionData:null, sessionKeys:null, contentSteering:null,
        startTimeOffset:null, variableList:null
      })
    }
    t.parsing.end=performance.now(), s.levelDetails=f, this.handlePlaylistLoaded(f, e, t, s, n, i)
  }
  handleManifestParsingError(e, t, s, n, i){
    this.hls.trigger(S.ERROR, {
      type:q.NETWORK_ERROR, details:k.MANIFEST_PARSING_ERROR, fatal:t.type===ne.MANIFEST, url:e.url, err:s, error:s, reason:s.message,
      response:e, context:t, networkDetails:n, stats:i
    })
  }
  handleNetworkError(e, t, s=!1, n, i){
    let a=`A network ${s?"timeout":"error"+(n?" (status "+n.code+")":"")} occurred while loading ${e.type}`;
    e.type===ne.LEVEL?a+=`: ${e.level} id: ${e.id}`:(e.type===ne.AUDIO_TRACK||e.type===ne.SUBTITLE_TRACK)&&(a+=` id: ${e.id} group-id: "${e.groupId}"`);
    const o=new Error(a);
    this.hls.logger.warn(`[playlist-loader]: ${a}`);
    let l=k.UNKNOWN, c=!1;
    const u=this.getInternalLoader(e);
    switch(e.type){
      case ne.MANIFEST:l=s?k.MANIFEST_LOAD_TIMEOUT:k.MANIFEST_LOAD_ERROR, c=!0;
      break;
      case ne.LEVEL:l=s?k.LEVEL_LOAD_TIMEOUT:k.LEVEL_LOAD_ERROR, c=!1;
      break;
      case ne.AUDIO_TRACK:l=s?k.AUDIO_TRACK_LOAD_TIMEOUT:k.AUDIO_TRACK_LOAD_ERROR, c=!1;
      break;
      case ne.SUBTITLE_TRACK:l=s?k.SUBTITLE_TRACK_LOAD_TIMEOUT:k.SUBTITLE_LOAD_ERROR, c=!1;
      break
    }
    u&&this.resetInternalLoader(e.type);
    const d={
      type:q.NETWORK_ERROR, details:l, fatal:c, url:e.url, loader:u, context:e, error:o, networkDetails:t, stats:i
    };
    if(n){
      const h=(t==null?void 0:t.url)||e.url;
      d.response=ce({
        url:h, data:void 0
      }, n)
    }
    this.hls.trigger(S.ERROR, d)
  }
  handlePlaylistLoaded(e, t, s, n, i, a){
    const o=this.hls, {
      type:l, level:c, levelOrTrack:u, id:d, groupId:h, deliveryDirectives:f
    }
    =n, g=_l(t, n), y=t0(n);
    let x=typeof n.level=="number"&&y===W.MAIN?c:void 0;
    const p=e.playlistParsingError;
    if(p){
      if(this.hls.logger.warn(`${p} ${e.url}`), !o.config.ignorePlaylistParsingErrors){
        o.trigger(S.ERROR, {
          type:q.NETWORK_ERROR, details:k.LEVEL_PARSING_ERROR, fatal:!1, url:g, error:p, reason:p.message, response:t, context:n,
          level:x, parent:y, networkDetails:i, stats:s
        });
        return
      }
      e.playlistParsingError=null
    }
    if(!e.fragments.length){
      const v=e.playlistParsingError=new Error("No Segments found in Playlist");
      o.trigger(S.ERROR, {
        type:q.NETWORK_ERROR, details:k.LEVEL_EMPTY_ERROR, fatal:!1, url:g, error:v, reason:v.message, response:t, context:n,
        level:x, parent:y, networkDetails:i, stats:s
      });
      return
    }
    switch(e.live&&a&&(a.getCacheAge&&(e.ageHeader=a.getCacheAge()||0), (!a.getCacheAge||isNaN(e.ageHeader))&&(e.ageHeader=0)),
    l){
      case ne.MANIFEST:case ne.LEVEL:if(x){
        if(!u)x=0;
        else if(u!==o.levels[x]){
          const v=o.levels.indexOf(u);
          v>-1&&(x=v)
        }

      }
      o.trigger(S.LEVEL_LOADED, {
        details:e, levelInfo:u||o.levels[0], level:x||0, id:d||0, stats:s, networkDetails:i, deliveryDirectives:f, withoutMultiVariant:l===ne.MANIFEST
      });
      break;
      case ne.AUDIO_TRACK:o.trigger(S.AUDIO_TRACK_LOADED, {
        details:e, track:u, id:d||0, groupId:h||"", stats:s, networkDetails:i, deliveryDirectives:f
      });
      break;
      case ne.SUBTITLE_TRACK:o.trigger(S.SUBTITLE_TRACK_LOADED, {
        details:e, track:u, id:d||0, groupId:h||"", stats:s, networkDetails:i, deliveryDirectives:f
      });
      break
    }

  }

}
class mt{
  static get version(){
    return ci
  }
  static isMSESupported(){
    return my()
  }
  static isSupported(){
    return VA()
  }
  static getMediaSource(){
    return Wr()
  }
  static get Events(){
    return S
  }
  static get MetadataSchema(){
    return ft
  }
  static get ErrorTypes(){
    return q
  }
  static get ErrorDetails(){
    return k
  }
  static get DefaultConfig(){
    return mt.defaultConfig?mt.defaultConfig:CA
  }
  static set DefaultConfig(e){
    mt.defaultConfig=e
  }
  constructor(e={

  }){
    this.config=void 0, this.userConfig=void 0, this.logger=void 0, this.coreComponents=void 0, this.networkControllers=void 0,
    this._emitter=new rd, this._autoLevelCapping=-1, this._maxHdcpLevel=null, this.abrController=void 0, this.bufferController=void 0,
    this.capLevelController=void 0, this.latencyController=void 0, this.levelController=void 0, this.streamController=void 0,
    this.audioStreamController=void 0, this.subtititleStreamController=void 0, this.audioTrackController=void 0, this.subtitleTrackController=void 0,
    this.interstitialsController=void 0, this.gapController=void 0, this.emeController=void 0, this.cmcdController=void 0,
    this._media=null, this._url=null, this._sessionId=void 0, this.triggeringException=void 0, this.started=!1;
    const t=this.logger=eS(e.debug||!1, "Hls instance", e.assetPlayerId), s=this.config=PA(mt.DefaultConfig, e, t);
    this.userConfig=e, s.progressive&&NA(s, t);
    const{
      abrController:n, bufferController:i, capLevelController:a, errorController:o, fpsController:l
    }
    =s, c=new o(this), u=this.abrController=new n(this), d=new qS(this), h=s.interstitialsController, f=h?this.interstitialsController=new h(this,
    mt):null, g=this.bufferController=new i(this, d), y=this.capLevelController=new a(this), x=new l(this), p=new YA(this),
    v=s.contentSteeringController, E=v?new v(this):null, T=this.levelController=new GA(this, E), I=new BA(this), b=new zA(this.config,
    this.logger), L=this.streamController=new WA(this, d, b), A=this.gapController=new UA(this, d);
    y.setStreamController(L), x.setStreamController(L);
    const w=[p, T, L];
    f&&w.splice(1, 0, f), E&&w.splice(1, 0, E), this.networkControllers=w;
    const R=[u, g, A, y, x, I, d];
    this.audioTrackController=this.createController(s.audioTrackController, w);
    const D=s.audioStreamController;
    D&&w.push(this.audioStreamController=new D(this, d, b)), this.subtitleTrackController=this.createController(s.subtitleTrackController,
    w);
    const $=s.subtitleStreamController;
    $&&w.push(this.subtititleStreamController=new $(this, d, b)), this.createController(s.timelineController, R), b.emeController=this.emeController=this.createController(s.emeController,
    R), this.cmcdController=this.createController(s.cmcdController, R), this.latencyController=this.createController(jA, R),
    this.coreComponents=R, w.push(c);
    const V=c.onErrorOut;
    typeof V=="function"&&this.on(S.ERROR, V, c), this.on(S.MANIFEST_LOADED, p.onManifestLoaded, p)
  }
  createController(e, t){
    if(e){
      const s=new e(this);
      return t&&t.push(s), s
    }
    return null
  }
  on(e, t, s=this){
    this._emitter.on(e, t, s)
  }
  once(e, t, s=this){
    this._emitter.once(e, t, s)
  }
  removeAllListeners(e){
    this._emitter.removeAllListeners(e)
  }
  off(e, t, s=this, n){
    this._emitter.off(e, t, s, n)
  }
  listeners(e){
    return this._emitter.listeners(e)
  }
  emit(e, t, s){
    return this._emitter.emit(e, t, s)
  }
  trigger(e, t){
    if(this.config.debug)return this.emit(e, e, t);
    try{
      return this.emit(e, e, t)
    }
    catch(s){
      if(this.logger.error("An internal error happened while handling event "+e+'. Error message: "'+s.message+'". Here is a stacktrace:',
      s), !this.triggeringException){
        this.triggeringException=!0;
        const n=e===S.ERROR;
        this.trigger(S.ERROR, {
          type:q.OTHER_ERROR, details:k.INTERNAL_EXCEPTION, fatal:n, event:e, error:s
        }), this.triggeringException=!1
      }

    }
    return!1
  }
  listenerCount(e){
    return this._emitter.listenerCount(e)
  }
  destroy(){
    this.logger.log("destroy"), this.trigger(S.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping=-1,
    this._url=null, this.networkControllers.forEach(t=>t.destroy()), this.networkControllers.length=0, this.coreComponents.forEach(t=>t.destroy()),
    this.coreComponents.length=0;
    const e=this.config;
    e.xhrSetup=e.fetchSetup=void 0, this.userConfig=null
  }
  attachMedia(e){
    if(!e||"media"in e&&!e.media){
      const i=new Error(`attachMedia failed: invalid argument (${e})`);
      this.trigger(S.ERROR, {
        type:q.OTHER_ERROR, details:k.ATTACH_MEDIA_ERROR, fatal:!0, error:i
      });
      return
    }
    this.logger.log("attachMedia"), this._media&&(this.logger.warn("media must be detached before attaching"), this.detachMedia());
    const t="media"in e, s=t?e.media:e, n=t?e:{
      media:s
    };
    this._media=s, this.trigger(S.MEDIA_ATTACHING, n)
  }
  detachMedia(){
    this.logger.log("detachMedia"), this.trigger(S.MEDIA_DETACHING, {

    }), this._media=null
  }
  transferMedia(){
    this._media=null;
    const e=this.bufferController.transferMedia();
    return this.trigger(S.MEDIA_DETACHING, {
      transferMedia:e
    }), e
  }
  loadSource(e){
    this.stopLoad();
    const t=this.media, s=this._url, n=this._url=Hu.buildAbsoluteURL(self.location.href, e, {
      alwaysNormalize:!0
    });
    this._autoLevelCapping=-1, this._maxHdcpLevel=null, this.logger.log(`loadSource:${n}`), t&&s&&(s!==n||this.bufferController.hasSourceTypes())&&(this.detachMedia(),
    this.attachMedia(t)), this.trigger(S.MANIFEST_LOADING, {
      url:e
    })
  }
  get url(){
    return this._url
  }
  get hasEnoughToStart(){
    return this.streamController.hasEnoughToStart
  }
  get startPosition(){
    return this.streamController.startPositionValue
  }
  startLoad(e=-1, t){
    this.logger.log(`startLoad(${e+(t?", <skip seek to start>":"")})`), this.started=!0, this.resumeBuffering();
    for(let s=0;
    s<this.networkControllers.length&&(this.networkControllers[s].startLoad(e, t), !(!this.started||!this.networkControllers));
    s++);

  }
  stopLoad(){
    this.logger.log("stopLoad"), this.started=!1;
    for(let e=0;
    e<this.networkControllers.length&&(this.networkControllers[e].stopLoad(), !(this.started||!this.networkControllers));
    e++);

  }
  get loadingEnabled(){
    return this.started
  }
  get bufferingEnabled(){
    return this.streamController.bufferingEnabled
  }
  resumeBuffering(){
    this.bufferingEnabled||(this.logger.log("resume buffering"), this.networkControllers.forEach(e=>{
      e.resumeBuffering&&e.resumeBuffering()
    }))
  }
  pauseBuffering(){
    this.bufferingEnabled&&(this.logger.log("pause buffering"), this.networkControllers.forEach(e=>{
      e.pauseBuffering&&e.pauseBuffering()
    }))
  }
  get inFlightFragments(){
    const e={
      [W.MAIN]:this.streamController.inFlightFrag
    };
    return this.audioStreamController&&(e[W.AUDIO]=this.audioStreamController.inFlightFrag), this.subtititleStreamController&&(e[W.SUBTITLE]=this.subtititleStreamController.inFlightFrag)
    , e
  }
  swapAudioCodec(){
    this.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
  }
  recoverMediaError(){
    this.logger.log("recoverMediaError");
    const e=this._media, t=e==null?void 0:e.currentTime;
    this.detachMedia(), e&&(this.attachMedia(e), t&&this.startLoad(t))
  }
  removeLevel(e){
    this.levelController.removeLevel(e)
  }
  get sessionId(){
    let e=this._sessionId;
    return e||(e=this._sessionId=UL()), e
  }
  get levels(){
    const e=this.levelController.levels;
    return e||[]
  }
  get latestLevelDetails(){
    return this.streamController.getLevelDetails()||null
  }
  get loadLevelObj(){
    return this.levelController.loadLevelObj
  }
  get currentLevel(){
    return this.streamController.currentLevel
  }
  set currentLevel(e){
    this.logger.log(`set currentLevel:${e}`), this.levelController.manualLevel=e, this.streamController.immediateLevelSwitch()
  }
  get nextLevel(){
    return this.streamController.nextLevel
  }
  set nextLevel(e){
    this.logger.log(`set nextLevel:${e}`), this.levelController.manualLevel=e, this.streamController.nextLevelSwitch()
  }
  get loadLevel(){
    return this.levelController.level
  }
  set loadLevel(e){
    this.logger.log(`set loadLevel:${e}`), this.levelController.manualLevel=e
  }
  get nextLoadLevel(){
    return this.levelController.nextLoadLevel
  }
  set nextLoadLevel(e){
    this.levelController.nextLoadLevel=e
  }
  get firstLevel(){
    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
  }
  set firstLevel(e){
    this.logger.log(`set firstLevel:${e}`), this.levelController.firstLevel=e
  }
  get startLevel(){
    const e=this.levelController.startLevel;
    return e===-1&&this.abrController.forcedAutoLevel>-1?this.abrController.forcedAutoLevel:e
  }
  set startLevel(e){
    this.logger.log(`set startLevel:${e}`), e!==-1&&(e=Math.max(e, this.minAutoLevel)), this.levelController.startLevel=e
  }
  get capLevelToPlayerSize(){
    return this.config.capLevelToPlayerSize
  }
  set capLevelToPlayerSize(e){
    const t=!!e;
    t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),
    this.autoLevelCapping=-1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize=t)
  }
  get autoLevelCapping(){
    return this._autoLevelCapping
  }
  get bandwidthEstimate(){
    const{
      bwEstimator:e
    }
    =this.abrController;
    return e?e.getEstimate():NaN
  }
  set bandwidthEstimate(e){
    this.abrController.resetEstimator(e)
  }
  get abrEwmaDefaultEstimate(){
    const{
      bwEstimator:e
    }
    =this.abrController;
    return e?e.defaultEstimate:NaN
  }
  get ttfbEstimate(){
    const{
      bwEstimator:e
    }
    =this.abrController;
    return e?e.getEstimateTTFB():NaN
  }
  set autoLevelCapping(e){
    this._autoLevelCapping!==e&&(this.logger.log(`set autoLevelCapping:${e}`), this._autoLevelCapping=e, this.levelController.checkMaxAutoUpdated())
  }
  get maxHdcpLevel(){
    return this._maxHdcpLevel
  }
  set maxHdcpLevel(e){
    PS(e)&&this._maxHdcpLevel!==e&&(this._maxHdcpLevel=e, this.levelController.checkMaxAutoUpdated())
  }
  get autoLevelEnabled(){
    return this.levelController.manualLevel===-1
  }
  get manualLevel(){
    return this.levelController.manualLevel
  }
  get minAutoLevel(){
    const{
      levels:e, config:{
        minAutoBitrate:t
      }

    }
    =this;
    if(!e)return 0;
    const s=e.length;
    for(let n=0;
    n<s;
    n++)if(e[n].maxBitrate>=t)return n;
    return 0
  }
  get maxAutoLevel(){
    const{
      levels:e, autoLevelCapping:t, maxHdcpLevel:s
    }
    =this;
    let n;
    if(t===-1&&e!=null&&e.length?n=e.length-1:n=t, s)for(let i=n;
    i--;
    ){
      const a=e[i].attrs["HDCP-LEVEL"];
      if(a&&a<=s)return i
    }
    return n
  }
  get firstAutoLevel(){
    return this.abrController.firstAutoLevel
  }
  get nextAutoLevel(){
    return this.abrController.nextAutoLevel
  }
  set nextAutoLevel(e){
    this.abrController.nextAutoLevel=e
  }
  get playingDate(){
    return this.streamController.currentProgramDateTime
  }
  get mainForwardBufferInfo(){
    return this.streamController.getMainFwdBufferInfo()
  }
  get maxBufferLength(){
    return this.streamController.maxBufferLength
  }
  setAudioOption(e){
    var t;
    return((t=this.audioTrackController)==null?void 0:t.setAudioOption(e))||null
  }
  setSubtitleOption(e){
    var t;
    return((t=this.subtitleTrackController)==null?void 0:t.setSubtitleOption(e))||null
  }
  get allAudioTracks(){
    const e=this.audioTrackController;
    return e?e.allAudioTracks:[]
  }
  get audioTracks(){
    const e=this.audioTrackController;
    return e?e.audioTracks:[]
  }
  get audioTrack(){
    const e=this.audioTrackController;
    return e?e.audioTrack:-1
  }
  set audioTrack(e){
    const t=this.audioTrackController;
    t&&(t.audioTrack=e)
  }
  get allSubtitleTracks(){
    const e=this.subtitleTrackController;
    return e?e.allSubtitleTracks:[]
  }
  get subtitleTracks(){
    const e=this.subtitleTrackController;
    return e?e.subtitleTracks:[]
  }
  get subtitleTrack(){
    const e=this.subtitleTrackController;
    return e?e.subtitleTrack:-1
  }
  get media(){
    return this._media
  }
  set subtitleTrack(e){
    const t=this.subtitleTrackController;
    t&&(t.subtitleTrack=e)
  }
  get subtitleDisplay(){
    const e=this.subtitleTrackController;
    return e?e.subtitleDisplay:!1
  }
  set subtitleDisplay(e){
    const t=this.subtitleTrackController;
    t&&(t.subtitleDisplay=e)
  }
  get lowLatencyMode(){
    return this.config.lowLatencyMode
  }
  set lowLatencyMode(e){
    this.config.lowLatencyMode=e
  }
  get liveSyncPosition(){
    return this.latencyController.liveSyncPosition
  }
  get latency(){
    return this.latencyController.latency
  }
  get maxLatency(){
    return this.latencyController.maxLatency
  }
  get targetLatency(){
    return this.latencyController.targetLatency
  }
  set targetLatency(e){
    this.latencyController.targetLatency=e
  }
  get drift(){
    return this.latencyController.drift
  }
  get forceStartLoad(){
    return this.streamController.forceStartLoad
  }
  get pathways(){
    return this.levelController.pathways
  }
  get pathwayPriority(){
    return this.levelController.pathwayPriority
  }
  set pathwayPriority(e){
    this.levelController.pathwayPriority=e
  }
  get bufferedToEnd(){
    var e;
    return!!((e=this.bufferController)!=null&&e.bufferedToEnd)
  }
  get interstitialsManager(){
    var e;
    return((e=this.interstitialsController)==null?void 0:e.interstitialsManager)||null
  }
  getMediaDecodingInfo(e, t=this.allAudioTracks){
    const s=ep(t);
    return Zg(e, s, navigator.mediaCapabilities)
  }

}
mt.defaultConfig=void 0;

if (typeof window !== "undefined") {
   window.Hls = mt;

}

if (typeof globalThis !== "undefined") {
   globalThis.Hls = mt;

}
