YUI.add("aui-carousel",function(e,t){var n=e.Lang,r=e.getClassName,i=r("image","viewer","base","control"),s=r("image","viewer","base","control","left"),o=r("image","viewer","base","control","right"),u=r("image","viewer","base","image"),a=r("carousel","item","active","transition"),f=r("carousel","item","transition"),l=r("carousel","menu"),c=r("carousel","menu","active"),h=r("carousel","menu","index"),p=r("carousel","menu","item"),d=r("carousel","menu","next"),v=r("carousel","menu","play"),m=r("carousel","menu","pause"),g=r("carousel","menu","prev"),y=[p,h].join(" "),b=[p,h,c].join(" "),w=r("carousel","outside","menu"),E="inside",S="outside",x="."+h;e.Carousel=e.Base.create("carousel",e.ImageViewerBase,[e.ImageViewerSlideshow],{TPL_ITEM:'<li><a class="'+p+" "+i+' {cssClasses}">{index}</a></li>',TPL_MENU:'<div class="'+l+'"><menu>'+'<li><a class="'+p+" "+v+" "+i+'"></a></li>'+'<li><a class="'+p+" "+g+" "+s+" "+i+'"></a></li>'+"{items}"+'<li><a class="'+p+" "+d+" "+o+" "+i+'"></a></li>'+"</menu></div>",bindUI:function(){e.Carousel.superclass.bindUI.apply(this,arguments),this.after({nodeMenuChange:this._afterNodeMenuChange,nodeMenuItemSelectorChange:this._afterNodeMenuItemSelectorChange,nodeMenuPositionChange:this._afterNodeMenuPositionChange,pauseOnHoverChange:this._afterPauseOnHoverChange}),this._bindPauseOnHover()},syncUI:function(){this._syncNodeMenuPositionUI()},destructor:function(){this._menuClickDelegateHandler&&this._menuClickDelegateHandler.detach()},item:function(e){this.set("currentIndex",e)},_afterNodeMenuChange:function(){this._bindPauseOnHover(),this._syncControlsUI(),this._syncNodeMenuPositionUI()},_afterNodeMenuItemSelectorChange:function(){this._bindControls()},_afterNodeMenuPositionChange:function(){this._syncNodeMenuPositionUI()},_afterPauseOnHoverChange:function(){this._bindPauseOnHover()},_afterResponsive:function(e){this.get("boundingBox").all(".image-viewer-base-image-list, .image-viewer-base-image").setStyles({height:e.height,width:e.width})},_bindControls:function(){this._menuClickDelegateHandler&&this._menuClickDelegateHandler.detach(),this._menuClickDelegateHandler=this.get("boundingBox").delegate("click",this._onClickControl,this.get("nodeMenuItemSelector"),this)},_bindPauseOnHover:function(){var t=this.get("boundingBox"),n=this.get("nodeMenu"),r=this.get("pauseOnHover");r?this.hoverEventHandles=[t.on("mouseenter",e.bind(this._onCarouselEnter,this)),t.on("mouseleave",e.bind(this._onCarouselLeave,this)),n.on("mouseenter",e.bind(this._onMenuEnter,this)),n.on("mouseleave",e.bind(this._onMenuLeave,this))]:((new e.EventHandle(this.hoverEventHandles)).detach(),this.hoverEventHandles=null)},_createMenuNode:function(){var t=this.get("currentIndex"),r=[],i,s=this.get("sources").length,o;for(i=0;i<s;i++)r.push(n.sub(this.TPL_ITEM,{cssClasses:t===i?b:y,index:i}));return o=e.Node.create(n.sub(this.TPL_MENU,{items:r.join(" ")})),o},_defAnimateFn:function(){if(!this.get("playing"))return;e.Carousel.superclass._defAnimateFn.apply(this,arguments);var t,n;e.Lang.isNumber(this._previousIndex)&&(n=this._getImageContainerAtIndex(this._previousIndex),t=this._getCurrentImageContainer(this._previousIndex),n.addClass(f),t.addClass(a),this._animation.onceAfter("end",function(){n.removeClass(f),t.removeClass(a)}))},_isMouseInsideMenu:function(e){var t=this.get("nodeMenu").get("region");return t.left>e.clientX||e.clientX>t.right||t.top>e.clientY||e.clientY>t.bottom},_onCarouselEnter:function(e){this._isMouseInsideMenu(e)&&this._pauseOnEnter()},_onCarouselLeave:function(){this._playOnLeave()},_onClickControl:function(t){e.Carousel.superclass._onClickControl.apply(this,arguments),t.preventDefault(),t.currentTarget.hasClass(h)&&this.set("currentIndex",this._menuNodes.indexOf(t.currentTarget))},_onMenuEnter:function(e){e.relatedTarget&&e.relatedTarget.hasClass(u)&&this._playOnLeave()},_onMenuLeave:function(e){e.relatedTarget&&e.relatedTarget.hasClass(u)&&this._pauseOnEnter()},_pauseOnEnter:function(){this.get("playing")&&(this.pause(),this._pausedOnEnter=!0)},_playOnLeave:function(){this._pausedOnEnter&&(this.play(),this._pausedOnEnter=!1)},_renderControls:function(){this.get("boundingBox").append(this.get("nodeMenu"))},_renderPlayer:function(){this._player=this.get("nodeMenu").one("."+v)},_setNodeMenu:function(t){var n=e.one(t)||this._createMenuNode();return this._menuNodes=n.all(x),n},_syncControlsUI:function(){var t=this.get("currentIndex"),n=this._menuNodes.item(t);n&&n.addClass(c),e.Lang.isNumber(this._previousIndex)&&(n=this._menuNodes.item(this._previousIndex),n&&n.removeClass(c))},_syncNodeMenuPositionUI:function(){var e=this.get("nodeMenuPosition");this.get("boundingBox").toggleClass(w,e===S),e===S?this.set("gutter",[0,this.get("nodeMenu").get("offsetHeight")]):this.set("gutter",[0,0])},_syncPlaying:function(){if(!this._player)return;this.get("playing")?this._player.replaceClass(v,m):this._player.replaceClass(m,v)},_validateNodeMenuPosition:function(e){return e===E||e===S}},{ATTRS:{circular:{value:!0,validator:e.Lang.isBoolean},controlNext:{setter:function(e){return e?e:this.get("nodeMenu").one("."+d)},value:null,validator:e.Lang.isNode},controlPrevious:{setter:function(e){return e?e:this.get("nodeMenu").one("."+g)},value:null,validator:e.Lang.isNode},nodeMenu:{value:null,setter:"_setNodeMenu"},nodeMenuItemSelector:{value:"."+p,validator:e.Lang.isString},nodeMenuPosition:{value:E,validator:"_validateNodeMenuPosition"},pauseOnHover:{value:!1,validator:n.isBoolean}},CSS_PREFIX:e.getClassName("carousel")})},"3.0.3-deprecated.13",{requires:["anim","node-event-delegate","aui-image-viewer-base","aui-image-viewer-slideshow"],skinnable:!0});
