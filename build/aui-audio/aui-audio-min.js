YUI.add("aui-audio",function(e,t){var n=e.Lang,r=e.UA,i=e.config.doc,s=e.Object.owns,o=e.getClassName,u=o("audio","node"),a=e.config.base+"aui-audio/assets/player.swf",f=/\.([^\.]+)$/,l=e.Component.create({NAME:"audio",ATTRS:{flashVars:{value:{},validator:n.isObject},fixedAttributes:{value:{},validator:n.isObject},oggUrl:{value:"",validator:n.isString},render:{value:!0,validator:n.isBoolean},role:{value:"application",validator:n.isString},swfWidth:{value:"100%",validator:n.isString},swfHeight:{value:"30",validator:n.isString},swfUrl:{value:a,validator:n.isString},type:{value:"mp3",validator:n.isString},url:{value:"",validator:n.isString},useARIA:{value:!0,validator:n.isBoolean,writeOnce:"initOnly"}},BIND_UI_ATTRS:["url","oggUrl","swfUrl","fixedAttributes","flashVars"],SYNC_UI_ATTRS:["url","oggUrl"],prototype:{renderUI:function(){var t=this;t._renderAudioTask=e.debounce(t._renderAudio,1,t),t._renderSwfTask=e.debounce(t._renderSwf,1,t),t._renderAudio(!t.get("oggUrl"))},bindUI:function(){var e=this;e.publish({audioReady:{fireOnce:!0},pause:{},play:{}}),e._audio.on({pause:e._onPause,play:e._onPlay})},syncUI:function(){var t=this;t.get("useARIA")&&t.plug(e.Plugin.Aria,{roleName:t.get("role")})},load:function(){var e=this;e._audio.hasMethod("load")&&e._audio.invoke("load")},pause:function(){var e=this;e._audio.hasMethod("pause")&&e._audio.invoke("pause")},play:function(){var e=this;e._audio.hasMethod("play")&&e._audio.invoke("play")},_onPause:function(e){this.fire("play",{cropType:e.type})},_onPlay:function(e){this.fire("pause",{cropType:e.type})},_createSource:function(t){var n=new e.Node(i.createElement("source"));return n.attr("type",t),n},_renderSwf:function(){var t=this,i=t.get("swfUrl");if(i){var o=t.get("flashVars");t._setMedia(o);var u=e.QueryString.stringify(o);t._swfId?t._audio.removeChild(e.one("#"+t._swfId)):t._swfId=e.guid();var a='type="application/x-shockwave-flash" data="'+i+'"',f="";r.ie&&(a='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"',f='<param name="movie" value="'+i+'"/>');var c=t.get("fixedAttributes"),h=[];for(var p in c)s(c,p)&&h.push('<param name="',p,'" value="',c[p],'" />');var d="";u&&(d='<param name="flashVars" value="'+u+'" />');var v=t.get("swfHeight"),m=t.get("swfWidth"),g=n.sub(l.TPL_FLASH,{applicationType:a,id:t._swfId,fixedAttributes:h.join(""),flashVars:d,height:v,movie:f,width:m});t._audio.append(g)}},_renderAudio:function(t){var i=this,s=l.TPL_AUDIO;r.gecko&&t&&(s=l.TPL_AUDIO_FALLBACK);var o=n.sub(s,[e.guid()]),u=e.Node.create(o);return i.get("contentBox").append(u),i._audio=u,u},_setMedia:function(e){var t=this;if(!s(e,"mp3")&&!s(e,"mp4")&&!s(e,"flv")){var n=t.get("url"),r=t.get("type");if(!r){var i=f.exec(n);i&&(r=i[1])}e[r]=n}},_uiSetFixedAttributes:function(){var e=this;e._renderSwfTask()},_uiSetFlashVars:function(){var e=this;e._renderSwfTask()},_uiSetOggUrl:function(e){var t=this;if(r.gecko||r.opera){var n=t._audio,i=t._usingAudio();if(!e&&i||e&&!i)n.remove(!0),n=t._renderAudio(!e);if(!e)t._renderSwfTask();else{var s=t._sourceOgg;s||(s=t._createSource("audio/ogg"),n.append(s),t._sourceOgg=s),s.attr("src",e)}}},_uiSetSwfUrl:function(){var e=this;e._renderSwfTask()},_uiSetUrl:function(e){var t=this,n=t.get("oggUrl"),i=t._audio,s=t._sourceMp3;if(r.gecko&&!t._usingAudio())s&&(s.remove(!0),t._sourceMp3=null);else if(i||!n)s||(s=t._createSource("audio/mp3"),i.append(s),t._sourceMp3=s),s.attr("src",e);t._renderSwfTask()},_usingAudio:function(){var e=this;return e._audio.get("nodeName").toLowerCase()==="audio"}}});l.TPL_AUDIO='<audio id="{0}" controls class="'+u+'"></audio>',l.TPL_AUDIO_FALLBACK='<div class="'+u+'"></div>',l.TPL_FLASH='<object id="{id}" {applicationType} height="{height}" width="{width}">{movie}{fixedAttributes}{flashVars}</object>',e.Audio=l},"3.0.3-deprecated.13",{requires:["aui-aria","aui-node","aui-component","querystring-stringify-simple"],skinnable:!0});
