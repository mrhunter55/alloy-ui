YUI.add("aui-base-lang",function(e,t){(function(){var t=e.Lang,n=e.Array,r=e.Object,i=t.isArray,s=t.isNumber,o=t.isString,u=t.isUndefined,a=r.owns;e.fn=function(e,t,r){var i,u;if(!s(e)){var a=arguments;a.length>2&&(a=n(a,2,!0)),u=o(e)&&t,i=function(){var n=u?t[e]:e;return n.apply(t||e,a)}}else{var f=e;e=t,t=r,u=o(e)&&t,i=function(){var r=u?t[e]:e,i;return t=t||r,f>0?i=r.apply(t,n(arguments,0,!0).slice(0,f)):i=r.call(t),i}}return i},e.mix(t,{constrain:function(e,t,n){return Math.min(Math.max(e,t),n)},emptyFn:function(){},emptyFnFalse:function(){return!1},emptyFnTrue:function(){return!0},isGuid:function(t){return String(t).indexOf(e.Env._guidp)===0},isInteger:function(e){return typeof e=="number"&&isFinite(e)&&e>-9007199254740992&&e<9007199254740992&&Math.floor(e)===e},isNode:function(t){return e.instanceOf(t,e.Node)},isNodeList:function(t){return e.instanceOf(t,e.NodeList)},toFloat:function(e,t){return parseFloat(e)||t||0},toInt:function(e,t,n){return parseInt(e,t||10)||n||0}}),e.mix(n,{remove:function(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r)},removeItem:function(e,t){var r=n.indexOf(e,t);return r>-1?n.remove(e,r):e}});var f=e.namespace("Lang.String"),l=e.config.doc,c=/-([a-z])/gi,h=/([.*+?^$(){}|[\]\/\\])/g,p=/\r?\n/g,d=/(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/gi,v=/<\/?[^>]+>/gi,m=/([a-zA-Z][a-zA-Z])([A-Z])([a-z])/g,g=/([a-z])([A-Z])/g,y="...",b=[],w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#034;","'":"&#039;","/":"&#047;","`":"&#096;"},E,S={};for(E in w)if(w.hasOwnProperty(E)){var x=w[E];S[x]=E,b.push(E)}var T=new RegExp("["+b.join("")+"]","g"),N=/&([^;]+);/g;e.mix(f,{camelize:e.cached(function(e,t){var n=c;return e=String(e),t&&(n=new RegExp(t+"([a-z])","gi")),e.replace(n,f._camelize)}),capitalize:e.cached(function(e){return e&&(e=String(e),e=e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()),e}),contains:function(e,t){return e.indexOf(t)!==-1},defaultValue:function(e,t){if(u(e)||e==="")u(t)&&(t=""),e=t;return e},endsWith:function(e,t){var n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n},escapeHTML:function(e){return e.replace(T,f._escapeHTML)},escapeRegEx:function(e){return e.replace(h,"\\$1")},nl2br:function(e){return String(e).replace(p,"<br />")},padNumber:function(e,t,n){var r=n?Number(e).toFixed(n):String(e),i=r.indexOf(".");return i===-1&&(i=r.length),f.repeat("0",Math.max(0,t-i))+r},pluralize:function(e,t,n){var r;return e===1?r=t:r=n||t+"s",e+" "+r},prefix:function(e,t){return t=String(t),t.indexOf(e)!==0&&(t=e+t),t},remove:function(e,t,n){var r=new RegExp(f.escapeRegEx(t),n?"g":"");return e.replace(r,"")},removeAll:function(e,t){return f.remove(e,t,!0)},repeat:function(e,t){return(new Array(t+1)).join(e)},round:function(e,t){return e=Number(e),s(t)&&(t=Math.pow(10,t),e=Math.round(e*t)/t),e},startsWith:function(e,t){return e.lastIndexOf(t,0)===0},stripScripts:function(e){return e&&(e=String(e).replace(d,"")),e},stripTags:function(e){return e&&(e=String(e).replace(v,"")),e},substr:function(e,t,n){return String(e).substr(t,n)},uncamelize:e.cached(function(e,t){return t=t||" ",e=String(e),e=e.replace(m,"$1"+t+"$2$3"),e=e.replace(g,"$1"+t+"$2"),e}),toLowerCase:function(e){return String(e).toLowerCase()},toUpperCase:function(e){return String(e).toUpperCase()},trim:t.trim,truncate:function(e,t,n){e=String(e);var r=y.length,i=e.length;if(t>3){if(e&&i>t){n=n||"end";if(n==="end")e=e.substr(0,t-r)+y;else if(n==="middle"){var s=Math.floor((t-r)/2),o=s;t%2===0&&(s=Math.ceil((t-r)/2),o=Math.floor((t-r)/2)),e=e.substr(0,s)+y+e.substr(i-o)}else n==="start"&&(e=y+e.substr(i-t+r))}}else e=y;return e},undef:function(e){return u(e)&&(e=""),e},unescapeEntities:function(e){return f.contains(e,"&")&&(l&&!f.contains(e,"<")?e=f._unescapeEntitiesUsingDom(e):e=f.unescapeHTML(e)),e},unescapeHTML:function(e){return e.replace(N,f._unescapeHTML)},_camelize:function(e,t){return t.toUpperCase()},_escapeHTML:function(e){return w[e]},_unescapeHTML:function(e,t){var n=S[e]||e;if(!n&&t.charAt(0)==="#"){var r=Number("0"+n.substr(1));isNaN(r)||(n=String.fromCharCode(r))}return n},_unescapeEntitiesUsingDom:function(e){var t=l.createElement("a");return t.innerHTML=e,t.normalize&&t.normalize(),e=t.firstChild.nodeValue,t.innerHTML="",e}}),r.map=function(e,t,n){var r=[],i;for(i in e)a(e,i)&&(r[r.length]=t.call(n,e[i],i,e));return r},e.map=function(e){var t=r;return i(e)&&(t=n),t.map.apply(this,arguments)}})()},"3.0.3-deprecated.13");
