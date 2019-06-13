if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-image-viewer-swipe/aui-image-viewer-swipe.js']) {
   __coverage__['build/aui-image-viewer-swipe/aui-image-viewer-swipe.js'] = {"path":"build/aui-image-viewer-swipe/aui-image-viewer-swipe.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":53}}},"2":{"name":"ImageViewerSwipe","line":10,"loc":{"start":{"line":10,"column":0},"end":{"line":10,"column":28}}},"3":{"name":"(anonymous_3)","line":25,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":37,"column":103}},"2":{"start":{"line":10,"column":0},"end":{"line":10,"column":30}},"3":{"start":{"line":12,"column":0},"end":{"line":15,"column":2}},"4":{"start":{"line":17,"column":0},"end":{"line":32,"column":2}},"5":{"start":{"line":26,"column":12},"end":{"line":29,"column":15}},"6":{"start":{"line":34,"column":0},"end":{"line":34,"column":65}}},"branchMap":{},"code":["(function () { YUI.add('aui-image-viewer-swipe', function (A, NAME) {","","/**"," * This adds the functionality of swiping to go to the previous/ image in the"," * viewer. Will be mixed into ImageViewer automatically when loaded."," *"," * @module aui-image-viewer-swipe"," */","","function ImageViewerSwipe() {}","","ImageViewerSwipe.prototype = {","    WIDGET_INDEX_ATTRIBUTE: 'currentIndex',","    WIDGET_ITEM_SELECTOR: '.image-viewer-base-image-container'","};","","ImageViewerSwipe.ATTRS = {","    /**","     * Turns the swipe interaction on/off.","     *","     * @attribute swipe","     * @type {Object|Boolean}","     */","    swipe: {","        getter: function(value) {","            return A.merge(value, {","                boundingBox: this.get('contentBox').one('.image-viewer-base-image-list'),","                contentBox: this.get('contentBox').one('.image-viewer-base-image-list-inner')","            });","        }","    }","};","","A.Base.mix(A.ImageViewerBase, [A.WidgetSwipe, ImageViewerSwipe]);","","","}, '3.0.3-deprecated.92', {\"requires\": [\"event-resize\", \"aui-image-viewer-base\", \"aui-widget-swipe\"]});","","}());"]};
}
var __cov_jqeCgVB08DY9aDe2uNRELQ = __coverage__['build/aui-image-viewer-swipe/aui-image-viewer-swipe.js'];
__cov_jqeCgVB08DY9aDe2uNRELQ.s['1']++;YUI.add('aui-image-viewer-swipe',function(A,NAME){__cov_jqeCgVB08DY9aDe2uNRELQ.f['1']++;__cov_jqeCgVB08DY9aDe2uNRELQ.s['2']++;function ImageViewerSwipe(){__cov_jqeCgVB08DY9aDe2uNRELQ.f['2']++;}__cov_jqeCgVB08DY9aDe2uNRELQ.s['3']++;ImageViewerSwipe.prototype={WIDGET_INDEX_ATTRIBUTE:'currentIndex',WIDGET_ITEM_SELECTOR:'.image-viewer-base-image-container'};__cov_jqeCgVB08DY9aDe2uNRELQ.s['4']++;ImageViewerSwipe.ATTRS={swipe:{getter:function(value){__cov_jqeCgVB08DY9aDe2uNRELQ.f['3']++;__cov_jqeCgVB08DY9aDe2uNRELQ.s['5']++;return A.merge(value,{boundingBox:this.get('contentBox').one('.image-viewer-base-image-list'),contentBox:this.get('contentBox').one('.image-viewer-base-image-list-inner')});}}};__cov_jqeCgVB08DY9aDe2uNRELQ.s['6']++;A.Base.mix(A.ImageViewerBase,[A.WidgetSwipe,ImageViewerSwipe]);},'3.0.3-deprecated.92',{'requires':['event-resize','aui-image-viewer-base','aui-widget-swipe']});
