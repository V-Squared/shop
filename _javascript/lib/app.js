!function(n){function e(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=19)}([function(n,e){!function(n,e,t){e.module("ngJuxtapose",[]).provider("juxtaposeConfig",function(){var n={startingPosition:"50%",showLabels:!0,showCredits:!0,animate:!0,vertical:!1},t=e.extend({},n);return{setStartingPosition:function(n){t.startingPosition=n},setShowLabels:function(n){t.showLabels=n},setShowCredits:function(n){t.showCredits=n},setAnimate:function(n){t.animate=n},setVertical:function(n){t.vertical=n},$get:function(){return{startingPosition:"50%",showLabels:!0,showCredits:!0,animate:!0,vertical:!1}}}}).controller("JuxtaposeController",["$scope","$attrs","$parse","$window","juxtaposeConfig",function(n,t,r,a,i){var o=this;if(!a.juxtapose)return void console.error("Cannot find 'juxtapose'. Make sure you've included the JuxtaposeJS library before this directive");e.forEach(["startingPosition","showLabels","showCredits","animate","vertical"],function(a,o){n[a]=e.isDefined(t[a])?1>o?r(t[a])(n.$parent):n.$parent.$eval(t[a]):i[a]}),t.id,e.forEach(["startingPosition","showLabels","showCredits","animate","vertical"],function(e){t[e]&&n.$parent.$watch(r(t[e]),function(t,r){t!==r&&(n[e]=t,o.updateSlider())})}),n.$watchCollection("[beforeImageUrl, beforeImageLabel, beforeImageCredit, beforeImageAlt, afterImageUrl, afterImageLabel, afterImageCredit, afterImageAlt]",function(n){var e=n[0],t=n[4];e&&t&&o.updateSlider()}),n.$on("$destroy",function(){o.$element=null,o.slider=null}),this.init=function(n){o.$element=n,o.slider=null},this.updateSlider=function(){var r="#"+t.id,a=[{src:n.beforeImageUrl,label:n.beforeImageLabel,credit:n.beforeImageCredit},{src:n.afterImageUrl,label:n.afterImageLabel,credit:n.afterImageCredit}],i={animate:n.animate,showLabels:n.showLabels,showCredits:n.showCredits,mode:n.vertical?"vertical":"horizontal",startingPosition:n.startingPosition,callback:n.callback};if(o.$element.empty(),o.slider=new juxtapose.JXSlider(r,a,i),t.beforeImageAlt||t.afterImageAlt){var s=(o.$element.find("img"),o.$element.children(),o.$element.children().eq(0)),l=s.children().eq(1),u=s.children().eq(2);e.element(l.eq(0)[0]).attr("alt",n.beforeImageAlt),e.element(u.eq(0)[0]).attr("alt",n.afterImageAlt)}},this.getElement=function(){return o.$element},this.getSlider=function(){return o.slider}}]).directive("juxtapose",function(){var n=0;return{restrict:"EA",scope:{beforeImageUrl:"=",beforeImageLabel:"=?",beforeImageCredit:"=?",beforeImageAlt:"=?",afterImageUrl:"=",afterImageLabel:"=?",afterImageCredit:"=?",afterImageAlt:"=?",callback:"&?"},template:'<div class="juxtapose"></div>',replace:!0,controller:"JuxtaposeController",link:function(e,t,r,a){r.$set("id","juxtapose-"+n++),a.init(t)}}})}(window,window.angular)},function(n,e){angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(n,e,t,r){var a=r.has("$animateCss")?r.get("$animateCss"):null;return{link:function(r,i,o){function s(){i.hasClass("collapse")&&i.hasClass("in")||e.resolve(f(r)).then(function(){i.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),a?a(i,{addClass:"in",easing:"ease",to:{height:i[0].scrollHeight+"px"}}).start().finally(l):n.addClass(i,"in",{to:{height:i[0].scrollHeight+"px"}}).then(l)})}function l(){i.removeClass("collapsing").addClass("collapse").css({height:"auto"}),d(r)}function u(){if(!i.hasClass("collapse")&&!i.hasClass("in"))return c();e.resolve(p(r)).then(function(){i.css({height:i[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),a?a(i,{removeClass:"in",to:{height:"0"}}).start().finally(c):n.removeClass(i,"in",{to:{height:"0"}}).then(c)})}function c(){i.css({height:"0"}),i.removeClass("collapsing").addClass("collapse"),m(r)}var f=t(o.expanding),d=t(o.expanded),p=t(o.collapsing),m=t(o.collapsed);r.$eval(o.uibCollapse)||i.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css({height:"auto"}),r.$watch(o.uibCollapse,function(n){n?u():s()})}}}])},function(n,e,t){t(8),n.exports="ngAnimate"},function(n,e,t){t(9),n.exports="ngSanitize"},function(n,e,t){"use strict";function r(n){n.startSymbol("{[{"),n.endSymbol("}]}")}e.appConfig=r,r.$inject=["$interpolateProvider"]},function(n,e,t){"use strict";var r=t(10);e.commonModule=angular.module("app.common",[]).controller("MainCtrl",r.CommonController).name},function(n,e,t){"use strict";var r=t(13);e.componentsModule=angular.module("app.components",[r.v2Accordian]).name},function(n,e){n.exports=angular},function(n,e){/**
 * @license AngularJS v1.6.3
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
!function(n,e){"use strict";function t(n,e,t){if(!n)throw vn("areq","Argument '{0}' is {1}",e||"?",t||"required");return n}function r(n,e){return n||e?n?e?(V(n)&&(n=n.join(" ")),V(e)&&(e=e.join(" ")),n+" "+e):n:e:""}function a(n){var e={};return n&&(n.to||n.from)&&(e.to=n.to,e.from=n.from),e}function i(n,e,t){var r="";return n=V(n)?n:n&&Z(n)&&n.length?n.split(/\s+/):[],Q(n,function(n,a){n&&n.length>0&&(r+=a>0?" ":"",r+=t?e+n:n+e)}),r}function o(n,e){var t=n.indexOf(e);e>=0&&n.splice(t,1)}function s(n){if(n instanceof en)switch(n.length){case 0:return n;case 1:if(n[0].nodeType===F)return n;break;default:return en(l(n))}if(n.nodeType===F)return en(n)}function l(n){if(!n[0])return n;for(var e=0;e<n.length;e++){var t=n[e];if(t.nodeType===F)return t}}function u(n,e,t){Q(e,function(e){n.addClass(e,t)})}function c(n,e,t){Q(e,function(e){n.removeClass(e,t)})}function f(n){return function(e,t){t.addClass&&(u(n,e,t.addClass),t.addClass=null),t.removeClass&&(c(n,e,t.removeClass),t.removeClass=null)}}function d(n){if(n=n||{},!n.$$prepared){var e=n.domOperation||tn;n.domOperation=function(){n.$$domOperationFired=!0,e(),e=tn},n.$$prepared=!0}return n}function p(n,e){m(n,e),v(n,e)}function m(n,e){e.from&&(n.css(e.from),e.from=null)}function v(n,e){e.to&&(n.css(e.to),e.to=null)}function h(n,e,t){var r=e.options||{},a=t.options||{},i=(r.addClass||"")+" "+(a.addClass||""),o=(r.removeClass||"")+" "+(a.removeClass||""),s=g(n.attr("class"),i,o);a.preparationClasses&&(r.preparationClasses=A(a.preparationClasses,r.preparationClasses),delete a.preparationClasses);var l=r.domOperation!==tn?r.domOperation:null;return K(r,a),l&&(r.domOperation=l),s.addClass?r.addClass=s.addClass:r.addClass=null,s.removeClass?r.removeClass=s.removeClass:r.removeClass=null,e.addClass=r.addClass,e.removeClass=r.removeClass,r}function g(n,e,t){function r(n){Z(n)&&(n=n.split(" "));var e={};return Q(n,function(n){n.length&&(e[n]=!0)}),e}var a=1,i=-1,o={};n=r(n),e=r(e),Q(e,function(n,e){o[e]=a}),t=r(t),Q(t,function(n,e){o[e]=o[e]===a?null:i});var s={addClass:"",removeClass:""};return Q(o,function(e,t){var r,o;e===a?(r="addClass",o=!n[t]||n[t+H]):e===i&&(r="removeClass",o=n[t]||n[t+q]),o&&(s[r].length&&(s[r]+=" "),s[r]+=t)}),s}function C(n){return n instanceof en?n[0]:n}function $(n,e,t){var r="";e&&(r=i(e,z,!0)),t.addClass&&(r=A(r,i(t.addClass,q))),t.removeClass&&(r=A(r,i(t.removeClass,H))),r.length&&(t.preparationClasses=r,n.addClass(r))}function y(n,e){e.preparationClasses&&(n.removeClass(e.preparationClasses),e.preparationClasses=null),e.activeClasses&&(n.removeClass(e.activeClasses),e.activeClasses=null)}function b(n,e){var t=e?"-"+e+"s":"";return w(n,[pn,t]),[pn,t]}function D(n,e){var t=e?"paused":"",r=M+un;return w(n,[r,t]),[r,t]}function w(n,e){var t=e[0],r=e[1];n.style[t]=r}function A(n,e){return n?e?n+" "+e:n:e}function k(n){return[dn,n+"s"]}function x(n,e){return[e?fn:pn,n+"s"]}function S(n,e,t){var r=Object.create(null),a=n.getComputedStyle(e)||{};return Q(t,function(n,e){var t=a[n];if(t){var i=t.charAt(0);("-"===i||"+"===i||i>=0)&&(t=O(t)),0===t&&(t=null),r[e]=t}}),r}function O(n){var e=0;return Q(n.split(/\s*,\s*/),function(n){"s"===n.charAt(n.length-1)&&(n=n.substring(0,n.length-1)),n=parseFloat(n)||0,e=e?Math.max(n,e):n}),e}function T(n){return 0===n||null!=n}function j(n,e){var t=L,r=n+"s";return e?t+=rn:r+=" linear all",[t,r]}function I(){var n=Object.create(null);return{flush:function(){n=Object.create(null)},count:function(e){var t=n[e];return t?t.total:0},get:function(e){var t=n[e];return t&&t.value},put:function(e,t){n[e]?n[e].total++:n[e]={total:1,value:t}}}}function E(n,e,t){Q(t,function(t){n[t]=_(n[t])?n[t]:e.style.getPropertyValue(t)})}var L,P,M,N,F=1,q="-add",H="-remove",z="ng-",G="-active",R="-prepare",U="ng-animate",J="$$ngAnimateChildren";void 0===n.ontransitionend&&void 0!==n.onwebkittransitionend?("-webkit-",L="WebkitTransition",P="webkitTransitionEnd transitionend"):(L="transition",P="transitionend"),void 0===n.onanimationend&&void 0!==n.onwebkitanimationend?("-webkit-",M="WebkitAnimation",N="webkitAnimationEnd animationend"):(M="animation",N="animationend");var B,K,Q,V,_,W,X,Y,Z,nn,en,tn,rn="Duration",an="Property",on="Delay",sn="TimingFunction",ln="IterationCount",un="PlayState",cn=9999,fn=M+on,dn=M+rn,pn=L+on,mn=L+rn,vn=e.$$minErr("ng"),hn=["$$rAF",function(n){function e(n){r=r.concat(n),t()}function t(){if(r.length){for(var e=r.shift(),i=0;i<e.length;i++)e[i]();a||n(function(){a||t()})}}var r,a;return r=e.queue=[],e.waitUntilQuiet=function(e){a&&a(),a=n(function(){a=null,e(),t()})},e}],gn=["$interpolate",function(n){return{link:function(e,t,r){function a(n){n="on"===n||"true"===n,t.data(J,n)}var i=r.ngAnimateChildren;Z(i)&&0===i.length?t.data(J,!0):(a(n(i)(e)),r.$observe("ngAnimateChildren",a))}}}],Cn="$$animateCss",$n=1e3,yn=3,bn=1.5,Dn={transitionDuration:mn,transitionDelay:pn,transitionProperty:L+an,animationDuration:dn,animationDelay:fn,animationIterationCount:M+ln},wn={transitionDuration:mn,transitionDelay:pn,animationDuration:dn,animationDelay:fn},An=["$animateProvider",function(n){var e=I(),t=I();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(n,r,s,l,u,c,h,g){function $(n,e){var t="$$ngAnimateParentKey",r=n.parentNode;return(r[t]||(r[t]=++R))+"-"+n.getAttribute("class")+"-"+e}function y(t,r,a,i){var o=e.get(a);return o||(o=S(n,t,i),"infinite"===o.animationIterationCount&&(o.animationIterationCount=1)),e.put(a,o),o}function A(a,o,s,l){var u;if(e.count(s)>0&&!(u=t.get(s))){var c=i(o,"-stagger");r.addClass(a,c),u=S(n,a,l),u.animationDuration=Math.max(u.animationDuration,0),u.transitionDuration=Math.max(u.transitionDuration,0),r.removeClass(a,c),t.put(s,u)}return u||{}}function O(n){U.push(n),h.waitUntilQuiet(function(){e.flush(),t.flush();for(var n=u(),r=0;r<U.length;r++)U[r](n);U.length=0})}function I(n,e,t){var r=y(n,e,t,Dn),a=r.animationDelay,i=r.transitionDelay;return r.maxDelay=a&&i?Math.max(a,i):a||i,r.maxDuration=Math.max(r.animationDuration*r.animationIterationCount,r.transitionDuration),r}var F=f(r),R=0,U=[];return function(n,t){function u(){h()}function f(){h(!0)}function h(e){if(!(W||Y&&X)){W=!0,X=!1,J.$$skipPreparationClasses||r.removeClass(n,An),r.removeClass(n,xn),D(_,!1),b(_,!1),Q(fn,function(n){_.style[n[0]]=""}),F(n,J),p(n,J),Object.keys(K).length&&Q(K,function(n,e){n?_.style.setProperty(e,n):_.style.removeProperty(e)}),J.onDone&&J.onDone(),mn&&mn.length&&n.off(mn.join(" "),R);var t=n.data(Cn);t&&(l.cancel(t[0].timer),n.removeData(Cn)),Z&&Z.complete(!e)}}function y(n){Hn.blockTransition&&b(_,n),Hn.blockKeyframeAnimation&&D(_,!!n)}function S(){return Z=new s({end:u,cancel:f}),O(tn),h(),{$$willAnimate:!1,start:function(){return Z},end:u}}function R(n){n.stopPropagation();var e=n.originalEvent||n,t=e.$manualTimeStamp||Date.now(),r=parseFloat(e.elapsedTime.toFixed(yn));Math.max(t-un,0)>=rn&&r>=on&&(Y=!0,h())}function U(){function e(){if(!W){if(y(!1),Q(fn,function(n){var e=n[0],t=n[1];_.style[e]=t}),F(n,J),r.addClass(n,xn),Hn.recalculateTimingStyles){if(kn=_.getAttribute("class")+" "+An,On=$(_,kn),Fn=I(_,kn,On),qn=Fn.maxDelay,en=Math.max(qn,0),0===(on=Fn.maxDuration))return void h();Hn.hasTransitions=Fn.transitionDuration>0,Hn.hasAnimations=Fn.animationDuration>0}if(Hn.applyAnimationDelay&&(qn="boolean"!=typeof J.delay&&T(J.delay)?parseFloat(J.delay):qn,en=Math.max(qn,0),Fn.animationDelay=qn,zn=x(qn,!0),fn.push(zn),_.style[zn[0]]=zn[1]),rn=en*$n,ln=on*$n,J.easing){var e,a=J.easing;Hn.hasTransitions&&(e=L+sn,fn.push([e,a]),_.style[e]=a),Hn.hasAnimations&&(e=M+sn,fn.push([e,a]),_.style[e]=a)}Fn.transitionDuration&&mn.push(P),Fn.animationDuration&&mn.push(N),un=Date.now();var i=rn+bn*ln,o=un+i,s=n.data(Cn)||[],u=!0;if(s.length){var c=s[0];u=o>c.expectedEndTime,u?l.cancel(c.timer):s.push(h)}if(u){var f=l(t,i,!1);s[0]={timer:f,expectedEndTime:o},s.push(h),n.data(Cn,s)}mn.length&&n.on(mn.join(" "),R),J.to&&(J.cleanupStyles&&E(K,_,Object.keys(J.to)),v(n,J))}}function t(){var e=n.data(Cn);if(e){for(var t=1;t<e.length;t++)e[t]();n.removeData(Cn)}}if(!W){if(!_.parentNode)return void h();var a=function(n){if(Y)X&&n&&(X=!1,h());else if(X=!n,Fn.animationDuration){var e=D(_,X);X?fn.push(e):o(fn,e)}},i=Mn>0&&(Fn.transitionDuration&&0===Tn.transitionDuration||Fn.animationDuration&&0===Tn.animationDuration)&&Math.max(Tn.animationDelay,Tn.transitionDelay);i?l(e,Math.floor(i*Mn*$n),!1):e(),nn.resume=function(){a(!0)},nn.pause=function(){a(!1)}}}var J=t||{};J.$$prepared||(J=d(B(J)));var K={},_=C(n);if(!_||!_.parentNode||!g.enabled())return S();var W,X,Y,Z,nn,en,rn,on,ln,un,fn=[],dn=n.attr("class"),pn=a(J),mn=[];if(0===J.duration||!c.animations&&!c.transitions)return S();var vn=J.event&&V(J.event)?J.event.join(" "):J.event,hn=vn&&J.structural,gn="",Dn="";hn?gn=i(vn,z,!0):vn&&(gn=vn),J.addClass&&(Dn+=i(J.addClass,q)),J.removeClass&&(Dn.length&&(Dn+=" "),Dn+=i(J.removeClass,H)),J.applyClassesEarly&&Dn.length&&F(n,J);var An=[gn,Dn].join(" ").trim(),kn=dn+" "+An,xn=i(An,G),Sn=pn.to&&Object.keys(pn.to).length>0;if(!((J.keyframeStyle||"").length>0||Sn||An))return S();var On,Tn;if(J.stagger>0){var jn=parseFloat(J.stagger);Tn={transitionDelay:jn,animationDelay:jn,transitionDuration:0,animationDuration:0}}else On=$(_,kn),Tn=A(_,An,On,wn);J.$$skipPreparationClasses||r.addClass(n,An);var In;if(J.transitionStyle){var En=[L,J.transitionStyle];w(_,En),fn.push(En)}if(J.duration>=0){In=_.style[L].length>0;var Ln=j(J.duration,In);w(_,Ln),fn.push(Ln)}if(J.keyframeStyle){var Pn=[M,J.keyframeStyle];w(_,Pn),fn.push(Pn)}var Mn=Tn?J.staggerIndex>=0?J.staggerIndex:e.count(On):0,Nn=0===Mn;Nn&&!J.skipBlocking&&b(_,cn);var Fn=I(_,kn,On),qn=Fn.maxDelay;en=Math.max(qn,0),on=Fn.maxDuration;var Hn={};if(Hn.hasTransitions=Fn.transitionDuration>0,Hn.hasAnimations=Fn.animationDuration>0,Hn.hasTransitionAll=Hn.hasTransitions&&"all"===Fn.transitionProperty,Hn.applyTransitionDuration=Sn&&(Hn.hasTransitions&&!Hn.hasTransitionAll||Hn.hasAnimations&&!Hn.hasTransitions),Hn.applyAnimationDuration=J.duration&&Hn.hasAnimations,Hn.applyTransitionDelay=T(J.delay)&&(Hn.applyTransitionDuration||Hn.hasTransitions),Hn.applyAnimationDelay=T(J.delay)&&Hn.hasAnimations,Hn.recalculateTimingStyles=Dn.length>0,(Hn.applyTransitionDuration||Hn.applyAnimationDuration)&&(on=J.duration?parseFloat(J.duration):on,Hn.applyTransitionDuration&&(Hn.hasTransitions=!0,Fn.transitionDuration=on,In=_.style[L+an].length>0,fn.push(j(on,In))),Hn.applyAnimationDuration&&(Hn.hasAnimations=!0,Fn.animationDuration=on,fn.push(k(on)))),0===on&&!Hn.recalculateTimingStyles)return S();if(null!=J.delay){var zn;"boolean"!=typeof J.delay&&(zn=parseFloat(J.delay),en=Math.max(zn,0)),Hn.applyTransitionDelay&&fn.push(x(zn)),Hn.applyAnimationDelay&&fn.push(x(zn,!0))}return null==J.duration&&Fn.transitionDuration>0&&(Hn.recalculateTimingStyles=Hn.recalculateTimingStyles||Nn),rn=en*$n,ln=on*$n,J.skipBlocking||(Hn.blockTransition=Fn.transitionDuration>0,Hn.blockKeyframeAnimation=Fn.animationDuration>0&&Tn.animationDelay>0&&0===Tn.animationDuration),J.from&&(J.cleanupStyles&&E(K,_,Object.keys(J.from)),m(n,J)),Hn.blockTransition||Hn.blockKeyframeAnimation?y(on):J.skipBlocking||b(_,!1),{$$willAnimate:!0,end:u,start:function(){if(!W)return nn={end:u,cancel:f,resume:null,pause:null},Z=new s(nn),O(U),Z}}}}]}],kn=["$$animationProvider",function(n){function e(n){return n.parentNode&&11===n.parentNode.nodeType}n.drivers.push("$$animateCssDriver");var t="ng-animate-shim",r="ng-anchor-out";this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(n,a,i,o,s,l,u){function c(n){return n.replace(/\bng-\S+\b/g,"")}function f(n,e){return Z(n)&&(n=n.split(" ")),Z(e)&&(e=e.split(" ")),n.filter(function(n){return e.indexOf(n)===-1}).join(" ")}function d(e,a,o){function s(n){var e={},t=C(n).getBoundingClientRect();return Q(["width","height","top","left"],function(n){var r=t[n];switch(n){case"top":r+=v.scrollTop;break;case"left":r+=v.scrollLeft}e[n]=Math.floor(r)+"px"}),e}function l(){var e=n(m,{addClass:r,delay:!0,from:s(a)});return e.$$willAnimate?e:null}function u(n){return n.attr("class")||""}function d(){var e=c(u(o)),t=f(e,h),a=f(h,e),i=n(m,{to:s(o),addClass:"ng-anchor-in "+t,removeClass:r+" "+a,delay:!0});return i.$$willAnimate?i:null}function p(){m.remove(),a.removeClass(t),o.removeClass(t)}var m=en(C(a).cloneNode(!0)),h=c(u(m));a.addClass(t),o.addClass(t),m.addClass("ng-anchor"),g.append(m);var $,y=l();if(!y&&!($=d()))return p();var b=y||$;return{start:function(){function n(){t&&t.end()}var e,t=b.start();return t.done(function(){if(t=null,!$&&($=d()))return t=$.start(),t.done(function(){t=null,p(),e.complete()}),t;p(),e.complete()}),e=new i({end:n,cancel:n})}}}function p(n,e,t,r){var a=m(n,tn),o=m(e,tn),s=[];if(Q(r,function(n){var e=n.out,r=n.in,a=d(t,e,r);a&&s.push(a)}),a||o||0!==s.length)return{start:function(){function n(){Q(e,function(n){n.end()})}var e=[];a&&e.push(a.start()),o&&e.push(o.start()),Q(s,function(n){e.push(n.start())});var t=new i({end:n,cancel:n});return i.all(e,function(n){t.complete(n)}),t}}}function m(e){var t=e.element,r=e.options||{};e.structural&&(r.event=e.event,r.structural=!0,r.applyClassesEarly=!0,"leave"===e.event&&(r.onDone=r.domOperation)),r.preparationClasses&&(r.event=A(r.event,r.preparationClasses));var a=n(t,r);return a.$$willAnimate?a:null}if(!s.animations&&!s.transitions)return tn;var v=u[0].body,h=C(o),g=en(e(h)||v.contains(h)?h:v);return function(n){return n.from&&n.to?p(n.from,n.to,n.classes,n.anchors):m(n)}}]}],xn=["$animateProvider",function(n){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(e,t,r){function a(t){t=V(t)?t:t.split(" ");for(var r=[],a={},i=0;i<t.length;i++){var o=t[i],s=n.$$registeredAnimations[o];s&&!a[o]&&(r.push(e.get(s)),a[o]=!0)}return r}var i=f(r);return function(n,e,r,o){function s(){o.domOperation(),i(n,o)}function l(){m=!0,s(),p(n,o)}function u(n,e,r,a,i){var o;switch(r){case"animate":o=[e,a.from,a.to,i];break;case"setClass":o=[e,g,C,i];break;case"addClass":o=[e,g,i];break;case"removeClass":o=[e,C,i];break;default:o=[e,i]}o.push(a);var s=n.apply(n,o);if(s)if(X(s.start)&&(s=s.start()),s instanceof t)s.done(i);else if(X(s))return s;return tn}function c(n,e,r,a,i){var o=[];return Q(a,function(a){var s=a[i];s&&o.push(function(){var a,i,o=!1,l=function(n){o||(o=!0,(i||tn)(n),a.complete(!n))};return a=new t({end:function(){l()},cancel:function(){l(!0)}}),i=u(s,n,e,r,function(n){l(n===!1)}),a})}),o}function f(n,e,r,a,i){var o=c(n,e,r,a,i);if(0===o.length){var s,l;"beforeSetClass"===i?(s=c(n,"removeClass",r,a,"beforeRemoveClass"),l=c(n,"addClass",r,a,"beforeAddClass")):"setClass"===i&&(s=c(n,"removeClass",r,a,"removeClass"),l=c(n,"addClass",r,a,"addClass")),s&&(o=o.concat(s)),l&&(o=o.concat(l))}if(0!==o.length)return function(n){var e=[];return o.length&&Q(o,function(n){e.push(n())}),e.length?t.all(e,n):n(),function(n){Q(e,function(e){n?e.cancel():e.end()})}}}var m=!1;3===arguments.length&&Y(r)&&(o=r,r=null),o=d(o),r||(r=n.attr("class")||"",o.addClass&&(r+=" "+o.addClass),o.removeClass&&(r+=" "+o.removeClass));var v,h,g=o.addClass,C=o.removeClass,$=a(r);if($.length){var y,b;"leave"===e?(b="leave",y="afterLeave"):(b="before"+e.charAt(0).toUpperCase()+e.substr(1),y=e),"enter"!==e&&"move"!==e&&(v=f(n,e,o,$,b)),h=f(n,e,o,$,y)}if(v||h){var D;return{$$willAnimate:!0,end:function(){return D?D.end():(l(),D=new t,D.complete(!0)),D},start:function(){function n(n){l(n),D.complete(n)}function e(e){m||((r||tn)(e),n(e))}if(D)return D;D=new t;var r,a=[];return v&&a.push(function(n){r=v(n)}),a.length?a.push(function(n){s(),n(!0)}):s(),h&&a.push(function(n){r=h(n)}),D.setHost({end:function(){e()},cancel:function(){e(!0)}}),t.chain(a,n),D}}}}}]}],Sn=["$$animationProvider",function(n){n.drivers.push("$$animateJsDriver"),this.$get=["$$animateJs","$$AnimateRunner",function(n,e){function t(e){var t=e.element,r=e.event,a=e.options;return n(t,r,e.classes,a)}return function(n){if(n.from&&n.to){var r=t(n.from),a=t(n.to);if(!r&&!a)return;return{start:function(){function n(){return function(){Q(i,function(n){n.end()})}}function t(n){o.complete(n)}var i=[];r&&i.push(r.start()),a&&i.push(a.start()),e.all(i,t);var o=new e({end:n(),cancel:n()});return o}}}return t(n)}}]}],On="data-ng-animate",Tn="$ngAnimatePin",jn=["$animateProvider",function(e){function r(n){if(!n)return null;var e=n.split(m),t=Object.create(null);return Q(e,function(n){t[n]=!0}),t}function a(n,e){if(n&&e){var t=r(e);return n.split(m).some(function(n){return t[n]})}}function i(n,e,t){return v[n].some(function(n){return n(e,t)})}function o(n,e){var t=(n.addClass||"").length>0,r=(n.removeClass||"").length>0;return e?t&&r:t||r}var u=1,c=2,m=" ",v=this.rules={skip:[],cancel:[],join:[]};v.join.push(function(n,e){return!n.structural&&o(n)}),v.skip.push(function(n,e){return!n.structural&&!o(n)}),v.skip.push(function(n,e){return"leave"===e.event&&n.structural}),v.skip.push(function(n,e){return e.structural&&e.state===c&&!n.structural}),v.cancel.push(function(n,e){return e.structural&&n.structural}),v.cancel.push(function(n,e){return e.state===c&&n.structural}),v.cancel.push(function(n,e){if(e.structural)return!1;var t=n.addClass,r=n.removeClass,i=e.addClass,o=e.removeClass;return!(nn(t)&&nn(r)||nn(i)&&nn(o))&&(a(t,o)||a(r,i))}),this.$get=["$$rAF","$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(r,a,m,v,g,b,D,w,A,k,x){function S(){var n=!1;return function(e){n?e():a.$$postDigest(function(){n=!0,e()})}}function O(n,e){return h(n,e,{})}function T(n,e,t){var r=[],a=R[t];return a&&Q(a,function(a){rn.call(a.node,e)?r.push(a.callback):"leave"===t&&rn.call(a.node,n)&&r.push(a.callback)}),r}function j(n,e,t){var r=l(e);return n.filter(function(n){return!(n.node===r&&(!t||n.callback===t))})}function I(n,e){"close"!==n||e.parentNode||an.off(e)}function E(n,e,t){function l(n,e,t,a){k(function(){var n=T(w,g,e);n.length?r(function(){Q(n,function(n){n(v,t,a)}),I(t,g)}):I(t,g)}),n.progress(e,t,a)}function f(n){y(v,m),tn(v,m),p(v,m),m.domOperation(),A.complete(!n)}var m=B(t),v=s(n),g=C(v),w=g&&g.parentNode;m=d(m);var A=new D,k=S();if(V(m.addClass)&&(m.addClass=m.addClass.join(" ")),m.addClass&&!Z(m.addClass)&&(m.addClass=null),V(m.removeClass)&&(m.removeClass=m.removeClass.join(" ")),m.removeClass&&!Z(m.removeClass)&&(m.removeClass=null),m.from&&!Y(m.from)&&(m.from=null),m.to&&!Y(m.to)&&(m.to=null),!g)return f(),A;if(!X([g.getAttribute("class"),m.addClass,m.removeClass].join(" ")))return f(),A;var j=["enter","move","leave"].indexOf(e)>=0,E=x(),F=!z||E||H.get(g),G=!F&&q.get(g)||{},R=!!G.state;if(F||R&&G.state===u||(F=!M(g,w,e)),F)return E&&l(A,e,"start"),f(),E&&l(A,e,"close"),A;j&&L(g);var U={structural:j,element:v,event:e,addClass:m.addClass,removeClass:m.removeClass,close:f,options:m,runner:A};if(R){if(i("skip",U,G))return G.state===c?(f(),A):(h(v,G,U),G.runner);if(i("cancel",U,G))if(G.state===c)G.runner.end();else{if(!G.structural)return h(v,G,U),G.runner;G.close()}else{if(i("join",U,G)){if(G.state!==c)return $(v,j?e:null,m),e=U.event=G.event,m=h(v,G,U),G.runner;O(v,U)}}}else O(v,U);var J=U.structural;if(J||(J="animate"===U.event&&Object.keys(U.options.to||{}).length>0||o(U)),!J)return f(),P(g),A;var K=(G.counter||0)+1;return U.counter=K,N(g,u,U),a.$$postDigest(function(){v=s(n);var t=q.get(g),r=!t;t=t||{};var a=v.parent()||[],i=a.length>0&&("animate"===t.event||t.structural||o(t));if(r||t.counter!==K||!i)return r&&(tn(v,m),p(v,m)),(r||j&&t.event!==e)&&(m.domOperation(),A.end()),void(i||P(g));e=!t.structural&&o(t,!0)?"setClass":t.event,N(g,c);var u=b(v,e,t.options);A.setHost(u),l(A,e,"start",{}),u.done(function(n){f(!n);var t=q.get(g);t&&t.counter===K&&P(g),l(A,e,"close",{})})}),A}function L(n){Q(n.querySelectorAll("["+On+"]"),function(n){var e=parseInt(n.getAttribute(On),10),t=q.get(n);if(t)switch(e){case c:t.runner.end();case u:q.delete(n)}})}function P(n){n.removeAttribute(On),q.delete(n)}function M(n,e,t){var r,a=v[0].body,i=C(m),o=n===a||"HTML"===n.nodeName,s=n===i,l=!1,u=H.get(n),c=en.data(n,Tn);for(c&&(e=C(c));e&&(s||(s=e===i),e.nodeType===F);){var f=q.get(e)||{};if(!l){var d=H.get(e);if(d===!0&&u!==!1){u=!0;break}d===!1&&(u=!1),l=f.structural}if(nn(r)||r===!0){var p=en.data(e,J);_(p)&&(r=p)}if(l&&r===!1)break;if(o||(o=e===a),o&&s)break;e=s||!(c=en.data(e,Tn))?e.parentNode:C(c)}return(!l||r)&&u!==!0&&s&&o}function N(n,e,t){t=t||{},t.state=e,n.setAttribute(On,e);var r=q.get(n),a=r?K(r,t):t;q.set(n,a)}var q=new g,H=new g,z=null,G=a.$watch(function(){return 0===w.totalPendingRequests},function(n){n&&(G(),a.$$postDigest(function(){a.$$postDigest(function(){null===z&&(z=!0)})}))}),R=Object.create(null),U=e.classNameFilter(),X=U?function(n){return U.test(n)}:function(){return!0},tn=f(A),rn=n.Node.prototype.contains||function(n){return this===n||!!(16&this.compareDocumentPosition(n))},an={on:function(n,e,t){var r=l(e);R[n]=R[n]||[],R[n].push({node:r,callback:t}),en(e).on("$destroy",function(){q.get(r)||an.off(n,e,t)})},off:function(n,e,t){if(1!==arguments.length||Z(arguments[0])){var r=R[n];r&&(R[n]=1===arguments.length?null:j(r,e,t))}else{e=arguments[0];for(var a in R)R[a]=j(R[a],e)}},pin:function(n,e){t(W(n),"element","not an element"),t(W(e),"parentElement","not an element"),n.data(Tn,e)},push:function(n,e,t,r){return t=t||{},t.domOperation=r,E(n,e,t)},enabled:function(n,e){var t=arguments.length;if(0===t)e=!!z;else{if(W(n)){var r=C(n);1===t?e=!H.get(r):H.set(r,!e)}else e=z=!!n}return e}};return an}]}],In=["$animateProvider",function(n){function e(n,e){n.data(s,e)}function t(n){n.removeData(s)}function a(n){return n.data(s)}var i="ng-animate-ref",o=this.drivers=[],s="$$animationRunner";this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler",function(n,s,l,u,c,m){function v(n){function e(n){if(n.processed)return n;n.processed=!0;var t=n.domNode,r=t.parentNode;i.set(t,n);for(var o;r;){if(o=i.get(r)){o.processed||(o=e(o));break}r=r.parentNode}return(o||a).children.push(n),n}function t(n){var e,t=[],r=[];for(e=0;e<n.children.length;e++)r.push(n.children[e]);var a=r.length,i=0,o=[];for(e=0;e<r.length;e++){var s=r[e];a<=0&&(a=i,i=0,t.push(o),o=[]),o.push(s.fn),s.children.forEach(function(n){i++,r.push(n)}),a--}return o.length&&t.push(o),t}var r,a={children:[]},i=new c;for(r=0;r<n.length;r++){var o=n[r];i.set(o.domNode,n[r]={domNode:o.domNode,fn:o.fn,children:[]})}for(r=0;r<n.length;r++)e(n[r]);return t(a)}var h=[],g=f(n);return function(c,f,$){function y(n){var e="["+i+"]",t=n.hasAttribute(i)?[n]:n.querySelectorAll(e),r=[];return Q(t,function(n){var e=n.getAttribute(i);e&&e.length&&r.push(n)}),r}function b(n){var e=[],t={};Q(n,function(n,r){var a=n.element,o=C(a),s=n.event,l=["enter","move"].indexOf(s)>=0,u=n.structural?y(o):[];if(u.length){var c=l?"to":"from";Q(u,function(n){var e=n.getAttribute(i);t[e]=t[e]||{},t[e][c]={animationID:r,element:en(n)}})}else e.push(n)});var r={},a={};return Q(t,function(t,i){var o=t.from,s=t.to;if(!o||!s){var l=o?o.animationID:s.animationID,u=l.toString();return void(r[u]||(r[u]=!0,e.push(n[l])))}var c=n[o.animationID],f=n[s.animationID],d=o.animationID.toString();if(!a[d]){var p=a[d]={structural:!0,beforeStart:function(){c.beforeStart(),f.beforeStart()},close:function(){c.close(),f.close()},classes:D(c.classes,f.classes),from:c,to:f,anchors:[]};p.classes.length?e.push(p):(e.push(c),e.push(f))}a[d].anchors.push({out:o.element,in:s.element})}),e}function D(n,e){n=n.split(" "),e=e.split(" ");for(var t=[],r=0;r<n.length;r++){var a=n[r];if("ng-"!==a.substring(0,3))for(var i=0;i<e.length;i++)if(a===e[i]){t.push(a);break}}return t.join(" ")}function w(n){for(var e=o.length-1;e>=0;e--){var t=o[e],r=l.get(t),a=r(n);if(a)return a}}function A(){c.addClass(U),I&&n.addClass(c,I),E&&(n.removeClass(c,E),E=null)}function k(n,e){function t(n){var t=a(n);t&&t.setHost(e)}n.from&&n.to?(t(n.from.element),t(n.to.element)):t(n.element)}function x(){var n=a(c);!n||"leave"===f&&$.$$domOperationFired||n.end()}function S(e){c.off("$destroy",x),t(c),g(c,$),p(c,$),$.domOperation(),I&&n.removeClass(c,I),c.removeClass(U),T.complete(!e)}$=d($);var O=["enter","move","leave"].indexOf(f)>=0,T=new u({end:function(){S()},cancel:function(){S(!0)}});if(!o.length)return S(),T;e(c,T);var j=r(c.attr("class"),r($.addClass,$.removeClass)),I=$.tempClasses;I&&(j+=" "+I,$.tempClasses=null);var E;return O&&(E="ng-"+f+R,n.addClass(c,E)),h.push({element:c,classes:j,event:f,structural:O,options:$,beforeStart:A,close:S}),c.on("$destroy",x),h.length>1?T:(s.$$postDigest(function(){var n=[];Q(h,function(e){a(e.element)?n.push(e):e.close()}),h.length=0;var e=b(n),t=[];Q(e,function(n){t.push({domNode:C(n.from?n.from.element:n.element),fn:function(){n.beforeStart();var e,t=n.close;if(a(n.anchors?n.from.element||n.to.element:n.element)){var r=w(n);r&&(e=r.start)}if(e){var i=e();i.done(function(n){t(!n)}),k(n,i)}else t()}})}),m(v(t))}),T)}}]}],En=["$animate","$rootScope",function(n,e){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(e,t,r,a,i){var o,s;e.$watchCollection(r.ngAnimateSwap||r.for,function(r){o&&n.leave(o),s&&(s.$destroy(),s=null),(r||0===r)&&(s=e.$new(),i(s,function(e){o=e,n.enter(e,null,t)}))})}}}];e.module("ngAnimate",[],function(){tn=e.noop,B=e.copy,K=e.extend,en=e.element,Q=e.forEach,V=e.isArray,Z=e.isString,Y=e.isObject,nn=e.isUndefined,_=e.isDefined,X=e.isFunction,W=e.isElement}).info({angularVersion:"1.6.3"}).directive("ngAnimateSwap",En).directive("ngAnimateChildren",gn).factory("$$rAFScheduler",hn).provider("$$animateQueue",jn).provider("$$animation",In).provider("$animateCss",An).provider("$$animateCssDriver",kn).provider("$$animateJs",xn).provider("$$animateJsDriver",Sn)}(window,window.angular)},function(n,e){/**
 * @license AngularJS v1.6.3
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
!function(n,e){"use strict";function t(){function t(n,e){var t,r={},a=n.split(",");for(t=0;t<a.length;t++)r[e?l(a[t]):a[t]]=!0;return r}function r(e,t){null===e||void 0===e?e="":"string"!=typeof e&&(e=""+e),y.innerHTML=e;var r=5;do{if(0===r)throw p("uinput","Failed to sanitize html because the input is unstable");r--,n.document.documentMode&&g(y),e=y.innerHTML,y.innerHTML=e}while(e!==y.innerHTML);for(var a=y.firstChild;a;){switch(a.nodeType){case 1:t.start(a.nodeName.toLowerCase(),m(a.attributes));break;case 3:t.chars(a.textContent)}var i;if(!((i=a.firstChild)||(1===a.nodeType&&t.end(a.nodeName.toLowerCase()),i=C("nextSibling",a))))for(;null==i&&(a=C("parentNode",a))!==y;)i=C("nextSibling",a),1===a.nodeType&&t.end(a.nodeName.toLowerCase());a=i}for(;a=y.firstChild;)y.removeChild(a)}function m(n){for(var e={},t=0,r=n.length;t<r;t++){var a=n[t];e[a.name]=a.value}return e}function v(n){return n.replace(/&/g,"&amp;").replace(b,function(n){return"&#"+(1024*(n.charCodeAt(0)-55296)+(n.charCodeAt(1)-56320)+65536)+";"}).replace(D,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h(n,e){var t=!1,r=a(n,n.push);return{start:function(n,a){n=l(n),!t&&j[n]&&(t=n),t||I[n]!==!0||(r("<"),r(n),o(a,function(t,a){var i=l(a),o="img"===n&&"src"===i||"background"===i;M[i]!==!0||E[i]===!0&&!e(t,o)||(r(" "),r(a),r('="'),r(v(t)),r('"'))}),r(">"))},end:function(n){n=l(n),t||I[n]!==!0||w[n]===!0||(r("</"),r(n),r(">")),n==t&&(t=!1)},chars:function(n){t||r(v(n))}}}function g(e){for(;e;){if(e.nodeType===n.Node.ELEMENT_NODE)for(var t=e.attributes,r=0,a=t.length;r<a;r++){var i=t[r],o=i.name.toLowerCase();"xmlns:ns1"!==o&&0!==o.lastIndexOf("ns1:",0)||(e.removeAttributeNode(i),r--,a--)}var s=e.firstChild;s&&g(s),e=C("nextSibling",e)}}function C(n,e){var t=e[n];if(t&&c.call(e,t))throw p("elclob","Failed to sanitize html because the element is clobbered: {0}",e.outerHTML||e.outerText);return t}var $=!1;this.$get=["$$sanitizeUri",function(n){return $&&i(I,T),function(e){var t=[];return f(e,d(t,function(e,t){return!/^unsafe:/.test(n(e,t))})),t.join("")}}],this.enableSvg=function(n){return s(n)?($=n,this):$},a=e.bind,i=e.extend,o=e.forEach,s=e.isDefined,l=e.lowercase,u=e.noop,f=r,d=h,c=n.Node.prototype.contains||function(n){return!!(16&this.compareDocumentPosition(n))};var y,b=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,D=/([^#-~ |!])/g,w=t("area,br,col,hr,img,wbr"),A=t("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),k=t("rp,rt"),x=i({},k,A),S=i({},A,t("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),O=i({},k,t("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),T=t("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),j=t("script,style"),I=i({},w,S,O,x),E=t("background,cite,href,longdesc,src,xlink:href"),L=t("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),P=t("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),M=i({},E,P,L);!function(n){var e;if(!n.document||!n.document.implementation)throw p("noinert","Can't create an inert html document");e=n.document.implementation.createHTMLDocument("inert");var t=e.documentElement||e.getDocumentElement(),r=t.getElementsByTagName("body");if(1===r.length)y=r[0];else{var a=e.createElement("html");y=e.createElement("body"),a.appendChild(y),e.appendChild(a)}}(n)}function r(n){var e=[];return d(e,u).chars(n),e.join("")}var a,i,o,s,l,u,c,f,d,p=e.$$minErr("$sanitize");e.module("ngSanitize",[]).provider("$sanitize",t).info({angularVersion:"1.6.3"}),e.module("ngSanitize").filter("linky",["$sanitize",function(n){var t=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,a=/^mailto:/i,i=e.$$minErr("linky"),o=e.isDefined,s=e.isFunction,l=e.isObject,u=e.isString;return function(e,c,f){function d(n){n&&$.push(r(n))}function p(n,e){var t,r=g(n);$.push("<a ");for(t in r)$.push(t+'="'+r[t]+'" ');!o(c)||"target"in r||$.push('target="',c,'" '),$.push('href="',n.replace(/"/g,"&quot;"),'">'),d(e),$.push("</a>")}if(null==e||""===e)return e;if(!u(e))throw i("notstring","Expected string but received: {0}",e);for(var m,v,h,g=s(f)?f:l(f)?function(){return f}:function(){return{}},C=e,$=[];m=C.match(t);)v=m[0],m[2]||m[4]||(v=(m[3]?"http://":"mailto:")+v),h=m.index,d(C.substr(0,h)),p(v,m[0].replace(a,"")),C=C.substring(h+m[0].length);return d(C),n($.join(""))}}])}(window,window.angular)},function(n,e,t){"use strict";var r=function(){function n(){this.videogular={theme:"css/videogular.css",plugins:{}}}return n}();e.CommonController=r},function(n,e,t){"use strict";var r=function(){function n(n,e,t){this.$scope=n,this.$attrs=e,this.accordianConfig=t,this.groups=[]}return n.prototype.closeOthers=function(n){(angular.isDefined(this.$attrs.closeOther)?this.$scope.$eval(this.$attrs.closeOther):this.accordianConfig.closeOther)&&angular.forEach(this.groups,function(e){e!==n&&(e.isOpen=!1)})},n.prototype.addGroup=function(n){this.groups.push(n)},n.prototype.removeGroup=function(n){var e=this.groups.indexOf(n);e!==-1&&this.groups.splice(e,1)},n.$inject=["$scope","$attrs","v2AccordianConfig"],n}();e.AccordianController=r},function(n,e,t){"use strict";var r=t(11);e.accordianDirective=function(){return{restrict:"EA",scope:!0,controller:r.AccordianController,controllerAs:"$accordian"}}},function(n,e,t){"use strict";var r=t(16),a=t(12);e.v2Accordian=angular.module("v2.accordian",[r.v2AccordianGroup]).constant("v2AccordianConfig",{closeOther:!0}).directive("v2Accordian",a.accordianDirective).name},function(n,e,t){"use strict";var r=function(){function n(n,e){this.$id=n.$id,this.isOpen=this.isOpen||!1,this.openClass=this.openClass||"panel-open",null!=e.isOpened&&(this.isOpen=!0)}return n.prototype.toggleOpen=function(){this.isDisabled||(this.isOpen=!this.isOpen,console.log("TOGGLE OPEN: ",this.isOpen))},n.$inject=["$scope","$attrs"],n}();e.AccordianGroup=r},function(n,e,t){"use strict";var r=t(14);e.accordianDirective=function(){return{restrict:"EA",require:["v2AccordianGroup","^^v2Accordian"],scope:!0,bindToController:{isOpen:"=?",isDisabled:"=?",openClass:"@?"},controller:r.AccordianGroup,controllerAs:"$group",link:function(n,e,t,r){var a=r[0],i=r[1];i.addGroup(a),n.$watch("$group.isOpen",function(n){e.toggleClass(a.openClass,!!n),n&&i.closeOthers(a)})}}}},function(n,e,t){"use strict";var r=t(18),a=t(15);e.v2AccordianGroup=angular.module("v2.accordian.group",[r.v2AccordianHeading]).directive("v2AccordianGroup",a.accordianDirective).name},function(n,e,t){"use strict";e.accordianHeadingDirective=function(){return{restrict:"EA",require:"^^v2AccordianGroup",link:function(n,e,t,r){e.on("click",function(){n.$apply(function(){r.toggleOpen()})}),n.$on("destroy",function(){e.off("click")})}}}},function(n,e,t){"use strict";var r=t(17);e.v2AccordianHeading=angular.module("v2.accordian.heading",[]).directive("v2AccordianHeading",r.accordianHeadingDirective).name},function(n,e,t){"use strict";var r=t(7),a=t(3),i=t(2);t(0),t(1);var o=t(5),s=t(6),l=t(4);r.module("app",[a,i,"ngJuxtapose","ui.bootstrap.collapse",o.commonModule,s.componentsModule]).config(l.appConfig),r.element(document).ready(function(){r.bootstrap(document,["app"],{strictDi:!0})})}]);