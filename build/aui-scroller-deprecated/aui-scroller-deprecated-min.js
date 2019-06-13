YUI.add("aui-scroller-deprecated",function(e,t){var n=e.Lang,r=n.isNumber,i=n.isString,s="boundingBox",o="clientWidth",u="contentBox",a="duration",f="edgeProximity",l="Height",c="Left",h="offset",p="scroll",d="Top",v="Width",m="horizontal",g=h+l,y=h+c,b=h+d,w=h+v,E="orientation",S="px",x=p+l,T="scroller",N="scrollcontent",C="_",k="vertical",L=e.getClassName,A=L(T,m),O=L(T,"item"),M=L(T,k),_=e.Component.create({NAME:T,ATTRS:{duration:{setter:function(e){return e*1e3},validator:r,value:.1},edgeProximity:{value:.1},itemSelector:{value:">*"},orientation:{validator:function(e){return i(e)&&(e===m||e===k)},value:m}},UI_ATTRS:[E],prototype:{nodeSelection:null,initializer:function(){var e=this,t=e.get(s),n=e.get(u);e._boundingBox=t,e._contentBox=n,e._duration=e.get(a),e._edgeProximity=e.get(f),e._orientation=e.get(E),e.boundingBoxXY=e._boundingBox.getXY(),e._boundingBoxEl=t.getDOM(),e._contentBoxEl=n.getDOM(),e._setCoords(e._orientation==m),e._updateNodeSelection()},bindUI:function(){var t=this;t.publish(N,{defaultFn:t._defaultScrollFn});var n=t._contentBox;t.after(["durationChange","edgeProximityChange"],t._setPrivateAttr),n.on("mouseenter",e.rbind(t._updateDimensions,t)),n.on("mousemove",e.rbind(t._onMouseMove,t,t._boundingBox,t._contentBox,t._orientation)),t._boundingBox.on("focus",t._onItemFocus,t),t._createAnimation()},_adjustToEdge:function(e){var t=this,n=t._edgeProximity,r=e;return n&&(e=Math.max(e,n),e=Math.min(e,1-n),e-=n,r=e/(1-n*2)),r},_animate:function(e){var t=this,n=t._fx,r=t._boundingBoxEl,i=t._orientation,s=p+t._coordTL,o=t._coordXY.toLowerCase(),u=r[s]||0,a=e[o];n.from=u,n.to=a,n.start()},_constrain:function(e,t,n){var r=this;return Math.max(Math.min(e,n),t)},_createAnimation:function(){var t=this,n=t._boundingBoxEl,r=n[p+t._coordTL]||0,i=r;t._fx=new e.SimpleAnim({duration:t._duration,from:r,intervalRate:1,to:i,onTween:function(e){n[p+t._coordTL]=e}}),t._throttleAnimate=t._animate},_defaultScrollFn:function(e){var t=this;t._throttleAnimate(e)},_getPositionData:function(e,t){var n=this,r=n.boundingBoxXY,i=e-r[0],s=t-r[1],o=i*n.ratioX,u=s*n.ratioY,a=n._constrain(i/n.boundingBoxWidth,0,1),f=n._constrain(s/n.boundingBoxHeight,0,1);a=n._adjustToEdge(a),f=n._adjustToEdge(f);var l=n.deltaX*a,c=n.deltaY*f;return{x:l,y:c,scaledX:o,scaledY:u,relativeX:i,relativeY:s}},_onItemFocus:function(e){var t=this;t._updateDimensions();var n=e.target.getXY(),r=t._getPositionData.apply(t,n);t.fire(N,r),t._updatePrevXY(r.relativeX,r.relativeY)},_onMouseMove:function(e,t,n,r){var i=this,s=i._getPositionData(e.pageX,e.pageY);i.fire(N,s),i._updatePrevXY(s.relativeX,s.relativeY)},_setCoords:function(e){var t=this,n=d,r="Y";e&&(n=c,r="X"),t._coordTL=n,t._coordXY=r},_setPrivateAttr:function(e){var t=this;t[C+e.attrName]=e.newVal},_updateDimensions:function(e){var t=this,n=t._boundingBox,r=t._contentBox,i=n.get(g),s=n.get(w),u=r.get(o),a=r.get(x),f=u-s,l=a-i;t.boundingBoxXY=n.getXY(),t.ratioX=f/s,t.ratioY=l/i,t.deltaX=f,t.deltaY=l,t.boundingBoxHeight=i,t.boundingBoxWidth=s,t.contentBoxHeight=a,t.contentBoxWidth=u},_updatePrevXY:function(e,t){var n=this;n._prevX=e,n._prevY=t},_uiSetOrientation:function(e){var t=this,n=t._boundingBox,r=e===m;n.toggleClass(A,r),n.toggleClass(M,!r),t._setCoords(r),t._orientation=e},_updateNodeSelection:function(){var e=this,t=e.get("itemSelector");e.nodeSelection=e._contentBox.all(t).addClass(O)},_prevX:0,_prevY:0}});e.Scroller=_},"3.1.0-deprecated.62",{requires:["event-mouseenter","aui-base-deprecated","aui-simple-anim-deprecated"],skinnable:!0});
