YUI.add("aui-widget-position-align-suggestion",function(e,t){function r(){}var n=e.getClassName;r.ATTRS={position:{getter:"_getPosition",validator:"_validatePosition",value:"top"}},e.mix(r.prototype,{POSITION_ALIGN_SUGGESTION:{bottom:[e.WidgetPositionAlign.TC,e.WidgetPositionAlign.BC],left:[e.WidgetPositionAlign.RC,e.WidgetPositionAlign.LC],right:[e.WidgetPositionAlign.LC,e.WidgetPositionAlign.RC],top:[e.WidgetPositionAlign.BC,e.WidgetPositionAlign.TC]},_hasAlignmentPoints:!1,_lastPosition:null,initializer:function(t){var n=this;t&&t.align&&t.align.points&&(n._hasAlignmentPoints=!0,n._setPositionAccordingPoints()),e.on(n._onUISetAlignPAS,n,"_uiSetAlign"),e.after(n._afterRenderUIPAS,n,"renderUI"),n.after("positionChange",n._afterPositionChangePAS)},suggestAlignment:function(e){var t=this,n;n=t.get("align")||{},e&&(n.node=e),t._hasAlignmentPoints||(n.points=t._getAlignPointsSuggestion(t.get("position"))),t.set("align",n)},_afterPositionChangePAS:function(e){var t=this;t._uiSetPosition(e.newVal,e.prevVal)},_afterRenderUIPAS:function(){var e=this;e._uiSetPosition(e.get("position"))},_canWidgetAlignToNode:function(e,t){var n=this,r,i=n._getAlignPointsSuggestion(t),s=n._getAlignedXY(e,i);return r=n.getConstrainedXY(s),r[0]===s[0]&&r[1]===s[1]},_findBestPosition:function(t){var n=this,r=n.get("position"),i=[r,"top","bottom","right","left"],s=e.one(t);return s&&!s.inViewportRegion()?n._findBestPositionOutsideViewport(s):(i=e.Array.dedupe(i),e.Array.some(i,function(e){if(n._canWidgetAlignToNode(s,e))return r=e,!0}),r)},_findBestPositionOutsideViewport:function(e){var t=this,n=t._getRegion(e),r=t._getRegion();if(n.top<r.top)return"bottom";if(n.bottom>r.bottom)return"top";if(n.right>r.right)return"left";if(n.left<r.left)return"right"},_getAlignPointsSuggestion:function(e){return this.POSITION_ALIGN_SUGGESTION[e]},_getPosition:function(t){return e.Lang.isFunction(t)&&(t=t.call(this)),t},_onUISetAlignPAS:function(t){var n=this,r;if(!n.get("constrain"))return;return r=n._findBestPosition(t),n._syncPositionUI(r,n._lastPosition||n.get("position")),n._lastPosition=r,new e.Do.AlterArgs(null,[t,n._getAlignPointsSuggestion(r)])},_setPositionAccordingPoints:function(){var t=this,n=t.get("align").points;e.Object.some(t.POSITION_ALIGN_SUGGESTION,function(e,r){if(n[0]===e[0]&&n[1]===e[1])return t.set("position",r),!0})},_syncPositionUI:function(e,t){var r=this,i=r.get("boundingBox");t&&i.removeClass(n(t)),i.addClass(n(e))},_uiSetPosition:function(e,t){var n=this;n._syncPositionUI(e,t),n.suggestAlignment()},_validatePosition:function(t){return e.Lang.isFunction(t)&&(t=t.call(this)),t==="bottom"||t==="top"||t==="left"||t==="right"}}),e.WidgetPositionAlignSuggestion=r},"3.1.0-deprecated.48",{requires:["widget-position-align","widget-stdmod"]});
