YUI.add("aui-editable-deprecated",function(e,t){var n=e.Lang,r=n.String,i=n.isFunction,s=e.getClassName,o=e.config.doc,u="hover",a="icon",t="editable",f=s(t,"editing"),l=s(t,u),c=s(a,"ok"),h=s(a,"remove"),p="contentBox",d=e.Component.create({NAME:t,ATTRS:{cancelButton:{valueFn:function(){var t=this;return{icon:h,on:{click:e.bind(t.cancel,t)}}}},contentText:{value:"",setter:function(e){var t=this;return e=n.trim(e),t._toText(e),e}},eventType:{value:"click"},formatInput:{validator:i,value:null},formatOutput:{validator:i,value:null},icons:{value:[]},inputType:{setter:function(t){var n=this;return t!="text"&&t!="textarea"&&(t=e.Attribute.INVALID_VALUE),t},value:"text"},node:{setter:function(t){var n=e.one(t);return n||e.error("AUI.Editable: Invalid Node Given: "+t),n}},renderTo:{value:o.body,setter:function(t){var n=this,r;return t=="node"?r=n.get(t):r=e.one(t),r||e.error("AUI.Editable: Invalid renderTo Given: "+t),r}},saveButton:{valueFn:function(){var t=this;return{icon:c,on:{click:e.bind(t.save,t)}}}},visible:{value:!1}},UI_ATTRS:["node"],prototype:{initializer:function(){var e=this;e._uiSetNode(e.get("node")),e._createEvents()},renderUI:function(){var t=this,n=t.get(p),r=t.get("inputType"),i={},s=t.get("icons");if(s!==!1){var o=t.get("cancelButton"),u=t.get("saveButton");o!==!1&&s.push(o),u!==!1&&s.push(u),i.icons=s}r!="text"&&e.mix(i,{field:{autoSize:!0},fieldWidget:e.Textarea});var a=(new e.Combobox(i)).render(n);t._comboBox=a,t.inputNode=a.get("node")},bindUI:function(){var t=this,n=t.get(p),r=t.get("node"),i=t.inputNode;i.on("keypress",t._onKeypressEditable,t),t.after("contentTextChange",t._syncContentText),n.swallowEvent("click"),e.getDoc().after("click",t._afterFocusedChangeEditable,t),e.on("windowresize",e.bind(t._afterFocusedChangeEditable,t))},syncUI:function(){var e=this,t=e.get("node").get("innerHTML");t=t.replace(/\n|\r/gim,""),t=n.trim(t),t=e._toText(t),e._setInput(t),e.set("contentText",t,{initial:!0})},cancel:function(){var e=this;e.fire("cancel")},save:function(e){var t=this;t.fire("save")},_afterFocusedChangeEditable:function(e){var t=this;t.fire("stopEditing",t.get("visible"))},_createEvents:function(){var e=this;e.publish("startEditing",{bubbles:!0,defaultFn:e._defStartEditingFn,emitFacade:!0,queable:!1}),e.publish("stopEditing",{bubbles:!0,defaultFn:e._defStopEditingFn,emitFacade:!0,queable:!1}),e.publish("save",{bubbles:!0,defaultFn:e._defSaveFn,emitFacade:!0,queable:!1}),e.publish("cancel",{bubbles:!0,defaultFn:e._defCancelFn,emitFacade:!0,queable:!1})},_defCancelFn:function(e){var t=this;t.fire("stopEditing",!1)},_defSaveFn:function(e){var t=this;t.fire("stopEditing",!0)},_defStartEditingFn:function(e){var t=this,n=t.get("boundingBox"),r=t.get("node"),i=t.inputNode,s=r.get("offsetHeight"),o=r.get("offsetWidth");t.show(),r.addClass(f);var u=r.getXY();n.setStyles({height:s+"px",left:u[0]+"px",top:u[1]+"px",width:o+"px"});var a=t._comboBox._field;a.set("width",o),a.fire("adjustSize"),i.focus(),i.select()},_defStopEditingFn:function(e,t){var n=this;n.hide(),n.get("node").removeClass(f),t?n.set("contentText",n.inputNode.get("value")):n._setInput(n.get("contentText"))},_onKeypressEditable:function(e){var t=this;e.isKey("ESC")?(e.preventDefault(),t.cancel()):e.isKey("ENTER")&&t.get("inputType")=="text"&&t.save()},_onMouseEnterEditable:function(e){var t=this;t.get("node").addClass(l)},_onMouseLeaveEditable:function(e){var t=this;t.get("node").removeClass(l)},_setInput:function(e){var t=this,n=t.get("formatInput");n?e=n.call(t,e):e=t._toText(e),t.inputNode.set("value",r.unescapeEntities(e))},_setOutput:function(t){var n=this,r=n.get("formatOutput");r?t=r.call(n,t):t=n._toHTML(t),n.get("node").set("innerHTML",e.Escape.html(t))},_startEditing:function(e){var t=this;t.get("rendered")||t.render(t.get("renderTo")),t.fire("startEditing"),e.halt()},_syncContentText:function(e){var t=this;if(!e.initial){var n=e.newVal;t._setInput(n),t._setOutput(n)}},_toHTML:function(e){var t=this;return String(e).replace(/\n/gim,"<br/>")},_toText:function(e){var t=this;return e=String(e),e=e.replace(/<br\s*\/?>/gim,"\n"),e=e.replace(/(<\/?[^>]+>|\t)/gim,""),e},_uiSetNode:function(e){var t=this;t._mouseEnterHandler&&t._mouseEnterHandler.detach(),t._mouseLeaveHandler&&t._mouseLeaveHandler.detach(),t._interactionHandler&&t._interactionHandler.detach();var n=t.get("eventType");t._mouseEnterHandler=e.on("mouseenter",t._onMouseEnterEditable,t),t._mouseLeaveHandler=e.on("mouseleave",t._onMouseLeaveEditable,t),t._interactionHandler=e.on(n,t._startEditing,t)}}});e.Editable=d},"3.0.3-deprecated.83",{requires:["aui-base-deprecated","aui-form-combobox-deprecated","escape","event-resize"],skinnable:!0});
