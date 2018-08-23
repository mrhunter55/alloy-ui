if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-scheduler-touch/aui-scheduler-touch.js']) {
   __coverage__['build/aui-scheduler-touch/aui-scheduler-touch.js'] = {"path":"build/aui-scheduler-touch/aui-scheduler-touch.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":50}}},"2":{"name":"SchedulerDayViewTouch","line":16,"loc":{"start":{"line":16,"column":0},"end":{"line":16,"column":33}}},"3":{"name":"(anonymous_3)","line":26,"loc":{"start":{"line":26,"column":17},"end":{"line":26,"column":28}}},"4":{"name":"(anonymous_4)","line":39,"loc":{"start":{"line":39,"column":16},"end":{"line":39,"column":27}}},"5":{"name":"(anonymous_5)","line":49,"loc":{"start":{"line":49,"column":18},"end":{"line":49,"column":29}}},"6":{"name":"(anonymous_6)","line":67,"loc":{"start":{"line":67,"column":18},"end":{"line":67,"column":29}}},"7":{"name":"(anonymous_7)","line":83,"loc":{"start":{"line":83,"column":22},"end":{"line":83,"column":33}}},"8":{"name":"(anonymous_8)","line":86,"loc":{"start":{"line":86,"column":68},"end":{"line":86,"column":79}}},"9":{"name":"(anonymous_9)","line":103,"loc":{"start":{"line":103,"column":23},"end":{"line":103,"column":39}}},"10":{"name":"(anonymous_10)","line":126,"loc":{"start":{"line":126,"column":29},"end":{"line":126,"column":45}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":150,"column":92}},"2":{"start":{"line":10,"column":0},"end":{"line":14,"column":101}},"3":{"start":{"line":16,"column":0},"end":{"line":16,"column":35}},"4":{"start":{"line":18,"column":0},"end":{"line":131,"column":2}},"5":{"start":{"line":27,"column":8},"end":{"line":30,"column":10}},"6":{"start":{"line":40,"column":8},"end":{"line":40,"column":71}},"7":{"start":{"line":50,"column":8},"end":{"line":52,"column":10}},"8":{"start":{"line":54,"column":8},"end":{"line":58,"column":9}},"9":{"start":{"line":55,"column":12},"end":{"line":57,"column":14}},"10":{"start":{"line":68,"column":8},"end":{"line":68,"column":46}},"11":{"start":{"line":70,"column":8},"end":{"line":72,"column":9}},"12":{"start":{"line":71,"column":12},"end":{"line":71,"column":72}},"13":{"start":{"line":84,"column":8},"end":{"line":84,"column":28}},"14":{"start":{"line":86,"column":8},"end":{"line":90,"column":11}},"15":{"start":{"line":87,"column":12},"end":{"line":89,"column":13}},"16":{"start":{"line":88,"column":16},"end":{"line":88,"column":75}},"17":{"start":{"line":104,"column":8},"end":{"line":105,"column":26}},"18":{"start":{"line":107,"column":8},"end":{"line":114,"column":9}},"19":{"start":{"line":108,"column":12},"end":{"line":108,"column":47}},"20":{"start":{"line":109,"column":12},"end":{"line":113,"column":13}},"21":{"start":{"line":112,"column":16},"end":{"line":112,"column":37}},"22":{"start":{"line":127,"column":8},"end":{"line":129,"column":9}},"23":{"start":{"line":128,"column":12},"end":{"line":128,"column":38}},"24":{"start":{"line":133,"column":0},"end":{"line":145,"column":2}},"25":{"start":{"line":147,"column":0},"end":{"line":147,"column":56}}},"branchMap":{"1":{"line":54,"type":"if","locations":[{"start":{"line":54,"column":8},"end":{"line":54,"column":8}},{"start":{"line":54,"column":8},"end":{"line":54,"column":8}}]},"2":{"line":70,"type":"if","locations":[{"start":{"line":70,"column":8},"end":{"line":70,"column":8}},{"start":{"line":70,"column":8},"end":{"line":70,"column":8}}]},"3":{"line":87,"type":"if","locations":[{"start":{"line":87,"column":12},"end":{"line":87,"column":12}},{"start":{"line":87,"column":12},"end":{"line":87,"column":12}}]},"4":{"line":87,"type":"binary-expr","locations":[{"start":{"line":87,"column":16},"end":{"line":87,"column":59}},{"start":{"line":87,"column":63},"end":{"line":87,"column":110}}]},"5":{"line":109,"type":"if","locations":[{"start":{"line":109,"column":12},"end":{"line":109,"column":12}},{"start":{"line":109,"column":12},"end":{"line":109,"column":12}}]},"6":{"line":109,"type":"binary-expr","locations":[{"start":{"line":109,"column":16},"end":{"line":109,"column":63}},{"start":{"line":110,"column":16},"end":{"line":110,"column":64}}]},"7":{"line":127,"type":"if","locations":[{"start":{"line":127,"column":8},"end":{"line":127,"column":8}},{"start":{"line":127,"column":8},"end":{"line":127,"column":8}}]},"8":{"line":142,"type":"cond-expr","locations":[{"start":{"line":142,"column":29},"end":{"line":142,"column":32}},{"start":{"line":142,"column":35},"end":{"line":142,"column":37}}]}},"code":["(function () { YUI.add('aui-scheduler-touch', function (A, NAME) {","","/**"," * This module adds some behavior for the scheduler when running on touch devices."," * This will be mixed into the Scheduler automatically when loaded."," *"," * @module aui-scheduler-touch"," */","","var CSS_SCHEDULER_EVENT = A.getClassName('scheduler-event'),","    CSS_SCHEDULER_EVENT_ALL_DAY = A.getClassName('scheduler-event', 'all', 'day'),","    CSS_SCHEDULER_MOBILE = A.getClassName('scheduler', 'mobile'),","    CSS_SCHEDULER_VIEW_DAY_RESIZER = A.getClassName('scheduler-view', 'day', 'resizer'),","    CSS_SCHEDULER_VIEW_DAY_TABLE_COLDAY = A.getClassName('scheduler-view', 'day', 'table', 'colday');","","function SchedulerDayViewTouch() {}","","SchedulerDayViewTouch.prototype = {","    /**","     * Construction logic executed during instantiation.","     * Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        this._schedulerTouchEventHandles = [","            A.after(this._afterBindUI, this, 'bindUI'),","            A.after(this._afterSyncUI, this, 'syncUI')","        ];","    },","","    /**","     * Destructor implementation. Lifecycle.","     *","     * @method destructor","     * @protected","     */","    destructor: function() {","        (new A.EventHandle(this._schedulerTouchEventHandles)).detach();","    },","","    /**","     * Fired after the `bindUI` method runs.","     *","     * @method _afterBindUI","     * @protected","     */","    _afterBindUI: function() {","        this._schedulerTouchEventHandles.push(","            A.on(this._onPrepareEventCreation, this, '_prepareEventCreation')","        );","","        if (A.UA.mobile) {","            this._schedulerTouchEventHandles.push(","                A.after(this._afterPlotEvents, this, 'plotEvents')","            );","        }","    },","","    /**","     * Fired after the `syncUI` method runs.","     *","     * @method _afterSyncUI","     * @protected","     */","    _afterSyncUI: function() {","        var scheduler = this.get('scheduler');","","        if (A.UA.mobile) {","            scheduler.get('boundingBox').addClass(CSS_SCHEDULER_MOBILE);","        }","    },","","    /**","     * Fired after the `plotEvents` method runs. Adds the resizer node to all","     * events, which is necessary on devices that don't have the hover interaction,","     * like mobile devices.","     *","     * @method _afterPlotEvents","     * @protected","     */","    _afterPlotEvents: function() {","        var instance = this;","","        this.get('boundingBox').all('.' + CSS_SCHEDULER_EVENT).each(function() {","            if (!this.hasClass(CSS_SCHEDULER_EVENT_ALL_DAY) && !this.one('.' + CSS_SCHEDULER_VIEW_DAY_RESIZER)) {","                instance.get('resizerNode').cloneNode(true).appendTo(this);","            }","        });","    },","","    /**","     * Finds and returns the column related to the given event. We need to find","     * this manually because the gesturemove event doesn't give us this information","     * directly through currentTarget, like the mousedown event does. It always","     * returns the event's original column instead.","     *","     * @method _findActiveColumn","     * @param {EventFacade} event","     * @protected","     */","    _findActiveColumn: function(event) {","        var allColumns = this.get('boundingBox').all('.' + CSS_SCHEDULER_VIEW_DAY_TABLE_COLDAY),","            currentColumn;","","        for (var i = 0; i < allColumns.size(); i++) {","            currentColumn = allColumns.item(i);","            if (currentColumn.get('region').left <= event.pageX &&","                event.pageX <= currentColumn.get('region').right) {","","                return currentColumn;","            }","        }","    },","","    /**","     * Fired before the `_prepareEventCreation` method runs. Prevents","     * the original method from running if it came from a touchstart","     * DOM event, as we only want this feature for click events on touch.","     *","     * @method _onPrepareEventCreation","     * @param {EventFacade} event","     * @protected","     */","    _onPrepareEventCreation: function(event) {","        if (event._event.type === 'touchstart') {","            return new A.Do.Prevent();","        }","    }","};","","SchedulerDayViewTouch.ATTRS = {","    /**","     * Contains the width of a `SchedulerView` in pixels.","     *","     * @attribute eventWidth","     * @default 95","     * @type {Number}","     */","    eventWidth: {","        value: A.UA.mobile ? 100 : 95,","        validator: A.Lang.isNumber","    }","};","","A.Base.mix(A.SchedulerDayView, [SchedulerDayViewTouch]);","","","}, '3.1.0-deprecated.48', {\"requires\": [\"base-build\", \"aui-scheduler\"], \"skinnable\": true});","","}());"]};
}
var __cov_Zk_GxlWX6xWBZ3iOGUyNkw = __coverage__['build/aui-scheduler-touch/aui-scheduler-touch.js'];
__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['1']++;YUI.add('aui-scheduler-touch',function(A,NAME){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.f['1']++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['2']++;var CSS_SCHEDULER_EVENT=A.getClassName('scheduler-event'),CSS_SCHEDULER_EVENT_ALL_DAY=A.getClassName('scheduler-event','all','day'),CSS_SCHEDULER_MOBILE=A.getClassName('scheduler','mobile'),CSS_SCHEDULER_VIEW_DAY_RESIZER=A.getClassName('scheduler-view','day','resizer'),CSS_SCHEDULER_VIEW_DAY_TABLE_COLDAY=A.getClassName('scheduler-view','day','table','colday');__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['3']++;function SchedulerDayViewTouch(){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.f['2']++;}__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['4']++;SchedulerDayViewTouch.prototype={initializer:function(){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.f['3']++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['5']++;this._schedulerTouchEventHandles=[A.after(this._afterBindUI,this,'bindUI'),A.after(this._afterSyncUI,this,'syncUI')];},destructor:function(){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.f['4']++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['6']++;new A.EventHandle(this._schedulerTouchEventHandles).detach();},_afterBindUI:function(){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.f['5']++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['7']++;this._schedulerTouchEventHandles.push(A.on(this._onPrepareEventCreation,this,'_prepareEventCreation'));__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['8']++;if(A.UA.mobile){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['1'][0]++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['9']++;this._schedulerTouchEventHandles.push(A.after(this._afterPlotEvents,this,'plotEvents'));}else{__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['1'][1]++;}},_afterSyncUI:function(){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.f['6']++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['10']++;var scheduler=this.get('scheduler');__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['11']++;if(A.UA.mobile){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['2'][0]++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['12']++;scheduler.get('boundingBox').addClass(CSS_SCHEDULER_MOBILE);}else{__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['2'][1]++;}},_afterPlotEvents:function(){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.f['7']++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['13']++;var instance=this;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['14']++;this.get('boundingBox').all('.'+CSS_SCHEDULER_EVENT).each(function(){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.f['8']++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['15']++;if((__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['4'][0]++,!this.hasClass(CSS_SCHEDULER_EVENT_ALL_DAY))&&(__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['4'][1]++,!this.one('.'+CSS_SCHEDULER_VIEW_DAY_RESIZER))){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['3'][0]++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['16']++;instance.get('resizerNode').cloneNode(true).appendTo(this);}else{__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['3'][1]++;}});},_findActiveColumn:function(event){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.f['9']++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['17']++;var allColumns=this.get('boundingBox').all('.'+CSS_SCHEDULER_VIEW_DAY_TABLE_COLDAY),currentColumn;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['18']++;for(var i=0;i<allColumns.size();i++){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['19']++;currentColumn=allColumns.item(i);__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['20']++;if((__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['6'][0]++,currentColumn.get('region').left<=event.pageX)&&(__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['6'][1]++,event.pageX<=currentColumn.get('region').right)){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['5'][0]++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['21']++;return currentColumn;}else{__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['5'][1]++;}}},_onPrepareEventCreation:function(event){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.f['10']++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['22']++;if(event._event.type==='touchstart'){__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['7'][0]++;__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['23']++;return new A.Do.Prevent();}else{__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['7'][1]++;}}};__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['24']++;SchedulerDayViewTouch.ATTRS={eventWidth:{value:A.UA.mobile?(__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['8'][0]++,100):(__cov_Zk_GxlWX6xWBZ3iOGUyNkw.b['8'][1]++,95),validator:A.Lang.isNumber}};__cov_Zk_GxlWX6xWBZ3iOGUyNkw.s['25']++;A.Base.mix(A.SchedulerDayView,[SchedulerDayViewTouch]);},'3.1.0-deprecated.48',{'requires':['base-build','aui-scheduler'],'skinnable':true});
