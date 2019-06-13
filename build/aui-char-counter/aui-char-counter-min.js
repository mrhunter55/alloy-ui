YUI.add("aui-char-counter",function(e,t){var n=e.Lang,r=n.isNumber,i=n.isString;e.Node.DOM_EVENTS.compositionend=1,e.Node.DOM_EVENTS.compositionstart=1;var s=e.Component.create({NAME:"char-counter",ATTRS:{atomic:{value:!0},counter:{setter:e.one},describedby:{value:""},input:{setter:e.one},live:{validator:i,value:"polite"},maxLength:{lazyAdd:!1,setter:function(e){return this._setMaxLength(e)},validator:r,value:Infinity},useARIA:{value:!0,validator:n.isBoolean,writeOnce:"initOnly"}},EXTENDS:e.Base,prototype:{_eventHandles:null,_inputComposition:!1,initializer:function(){var e=this;e.bindUI(),e.checkLength()},bindUI:function(){var t=this,n=t.get("input");t.publish("maxLength"),t.after("maxLengthChange",t.checkLength),n&&(t._eventHandles=[n.on("compositionend",e.bind(t._onInputCompositionEnd,t)),n.on("compositionstart",e.bind(t._onInputCompositionStart,t)),n.on("input",e.bind(t._onInputChange,t))])},syncUI:function(){var e=this,t=e.get("counter"),n=e.get("useARIA");if(t){var r=e.get("input").val(),i=e.get("maxLength")-e._getNormalizedLength(r);t.html(i)}n&&this._syncAriaControlsUI()},destroy:function(){var t=this;(new e.EventHandle(t._eventHandles)).detach()},checkLength:function(){var e=this,t=e.get("input"),n=!1;if(t){var r=e.get("maxLength"),i=t.val(),s=e._getNormalizedLength(i);n=!0;if(s>r){var o=t.get("scrollTop"),u=t.get("scrollLeft"),a=r-(s-i.length);i=i.substring(0,a),t.val(i),t.set("scrollTop",o),t.set("scrollLeft",u),n=i}e.syncUI(),s>=r&&e.fire("maxLength")}return n},_getNormalizedLength:function(e){var t=e.match(/(\r\n|\n|\r)/g),n=0;return t!==null&&(n=t.length),e.length+n},_onInputChange:function(){var e=this;e._inputComposition||e.checkLength()},_onInputCompositionEnd:function(){var e=this;e._inputComposition=!1,e.checkLength()},_onInputCompositionStart:function(){var e=this;e._inputComposition=!0},_setMaxLength:function(e){var t=this,n=t.get("input");return n&&e<Infinity&&n.set("maxLength",e),e},_syncAriaControlsUI:function(){var t=this;t.plug(e.Plugin.Aria,{attributes:{describedby:"describedby"},attributeNode:t.get("input")});var n=t.get("describedby");n=e.one("#"+n);if(n){var r=t.get("atomic"),i=t.get("live");this.aria.setAttributes([{name:"atomic",node:n,value:r},{name:"live",node:n,value:i}])}}}});e.CharCounter=s},"3.0.3-deprecated.92",{requires:["aui-aria","aui-node","aui-event-input","aui-component"]});
