YUI.add("aui-autosize-deprecated",function(e,t){var n=e.Lang,r=e.config.doc,i="autosize",s=e.getClassName,o="adjustSize",u="height",a="host",f="innerHTML",l="maxHeight",c="minHeight",h="width",p=[s(i,u,"monitor"),s("field","text","input"),s("helper","hidden","accessible")].join(" "),d="&nbsp;\n&nbsp;",v='<pre class="'+p+'">'+d+"</pre>",m={src:"ui"};Autosize=e.Component.create({NAME:i,NS:i,ATTRS:{maxHeight:{value:1e3,setter:"_setAutoDimension"},minHeight:{value:45,setter:"_setAutoDimension"}},EXTENDS:e.Plugin.Base,prototype:{initializer:function(){var e=this;e._renderUI(),e._bindUI(),e._syncUI()},_bindUI:function(){var e=this;e.onHostEvent("valuechange",e._onValueChange,e),e.after(["maxHeightChange","minHeightChange"],function(t){t.src!==m.src&&e._syncHeight(t)}),e.after(o,e._uiAutoSize)},_onValueChange:function(e){var t=this;t.fire(o)},_renderUI:function(){var t=this,n=e.Node.create(v),r=t.get(a);e.getBody().append(n),t._defaultMinHeight=n.height(),t._heightMonitor=n;var i=r.getComputedStyle("fontFamily"),s=r.getComputedStyle("fontSize"),o=r.getComputedStyle("fontStyle"),u=r.getComputedStyle("fontWeight"),f=r.getComputedStyle("lineHeight"),l=r.getComputedStyle("letterSpacing"),c=r.getComputedStyle("textTransform");n.setStyles({fontFamily:i,fontSize:s,fontStyle:o,fontWeight:u,lineHeight:f,letterSpacing:l,textTransform:c}),"outerHTML"in n.getDOM()?t._updateContent=t._updateOuterContent:t._updateContent=t._updateInnerContent},_setAutoDimension:function(e,t){var n=this;n["_"+t]=e},_syncUI:function(){var e=this;e._syncHeight()},_syncHeight:function(e){var t=this,r=t.get(a),i=t._heightMonitor,s=i.height(),o=i.height(t.get(l)).height(),f=i.height(t.get(c)).height();i.height("");var h=Math.max(t._defaultMinHeight,f),p=o;h>p&&(e&&e.attrName=="maxHeight"?h=p:p=h),t._setAutoDimension(h,u),t.set(c,h,m),t.set(l,p,m),r.height(n.constrain(s,h,p))},_uiAutoSize:function(){var e=this,t=e.get(a),i=e._heightMonitor,s=e._minHeight,o=e._maxHeight,l=t.val();i.set(f,""),i.appendChild(r.createTextNode(l)),i.setStyle(h,t.getComputedStyle(h)),l=i.get(f)+d,e._updateContent(l);var c=n.constrain(i.height(),s,o);c!=e._lastHeight&&(e._lastHeight=c,e._uiSetDim(u,c))},_uiSetDim:function(e,t){var n=this,r=n.get(a);r.setStyle(e,t)},_updateInnerContent:function(e){var t=this;return t._heightMonitor.set(f,e)},_updateOuterContent:function(e){var t=this;return e=e.replace(/\n/g,"<br />"),t._updateInnerContent(e)}}}),e.Plugin.Autosize=Autosize},"3.0.3-deprecated.13",{requires:["event-valuechange","plugin","aui-base-deprecated"],skinnable:!0});
