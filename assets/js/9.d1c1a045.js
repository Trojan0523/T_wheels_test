(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{377:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},380:function(t,s,a){"use strict";var e=a(8),n=a(5),r=a(208),o=a(23),c=a(7),i=a(35),l=a(383),u=a(55),f=a(2),p=a(36),v=a(79).f,d=a(34).f,C=a(9).f,_=a(382).trim,h=n.Number,m=h.prototype,g="Number"==i(p(m)),w=function(t){var s,a,e,n,r,o,c,i,l=u(t,!1);if("string"==typeof l&&l.length>2)if(43===(s=(l=_(l)).charCodeAt(0))||45===s){if(88===(a=l.charCodeAt(2))||120===a)return NaN}else if(48===s){switch(l.charCodeAt(1)){case 66:case 98:e=2,n=49;break;case 79:case 111:e=8,n=55;break;default:return+l}for(o=(r=l.slice(2)).length,c=0;c<o;c++)if((i=r.charCodeAt(c))<48||i>n)return NaN;return parseInt(r,e)}return+l};if(r("Number",!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var b,N=function(t){var s=arguments.length<1?0:t,a=this;return a instanceof N&&(g?f((function(){m.valueOf.call(a)})):"Number"!=i(a))?l(new h(w(s)),a,N):w(s)},y=e?v(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;y.length>E;E++)c(h,b=y[E])&&!c(N,b)&&C(N,b,d(h,b));N.prototype=m,m.constructor=N,o(n,"Number",N)}},382:function(t,s,a){var e=a(27),n="["+a(377)+"]",r=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(s){var a=String(e(s));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},383:function(t,s,a){var e=a(6),n=a(115);t.exports=function(t,s,a){var r,o;return n&&"function"==typeof(r=s.constructor)&&r!==a&&e(o=r.prototype)&&o!==a.prototype&&n(t,o),t}},384:function(t,s,a){},385:function(t,s,a){},392:function(t,s,a){"use strict";var e=a(384);a.n(e).a},393:function(t,s,a){"use strict";var e=a(385);a.n(e).a},395:function(t,s,a){"use strict";a(113),a(206),a(380),a(114);var e={name:"TRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(s){s.gutter=t.gutter}))}},n=(a(392),a(54)),r=Object(n.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"00fd1632",null);s.a=r.exports},396:function(t,s,a){"use strict";a(211),a(113),a(210),a(380),a(116),a(114);var e=a(42),n=function(t){var s=Object.keys(t),a=!0;return s.forEach((function(t){["span","offset"].includes(t)||(a=!1)})),a},r={name:"TCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:n},narrowPc:{type:Object,validator:n},pc:{type:Object,validator:n},widePc:{type:Object,validator:n}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var a=[];return t.span&&a.push("col-".concat(s).concat(t.span)),t.offset&&a.push("offset-".concat(s).concat(t.offset)),a}},computed:{colClass:function(){var t=this.span,s=this.offset,a=this.ipad,n=this.narrowPc,r=this.pc,o=this.widePc,c=this.createClasses;return[].concat(Object(e.a)(c({span:t,offset:s})),Object(e.a)(c(a,"ipad-")),Object(e.a)(c(n,"narrow-pc-")),Object(e.a)(c(r,"pc-")),Object(e.a)(c(o,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},o=(a(393),a(54)),c=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"49a1518d",null);s.a=c.exports},418:function(t,s,a){},479:function(t,s,a){"use strict";var e=a(418);a.n(e).a},505:function(t,s,a){"use strict";a.r(s);var e=a(395),n=a(396),r={components:{"t-row":e.a,"t-col":n.a}},o=(a(479),a(54)),c=Object(o.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{"padding-top":"16px"}},[a("h2",[t._v("设置空隙")]),t._v(" "),a("t-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[a("t-col",{attrs:{span:"8"}},[a("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),a("t-col",{attrs:{span:"8",offset:"8"}},[a("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),a("t-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[a("t-col",{attrs:{span:"6",offset:"6"}},[a("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),a("t-col",{attrs:{span:"6",offset:"6"}},[a("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),a("t-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[a("t-col",{attrs:{span:"4"}},[a("span",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),a("t-col",{attrs:{span:"4",offset:"4"}},[a("span",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),a("t-col",{attrs:{span:"4",offset:"8"}},[a("span",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),a("t-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[a("t-col",{attrs:{span:"2"}},[a("span",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("t-col",{attrs:{span:"2",offset:"2"}},[a("span",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("t-col",{attrs:{span:"2"}},[a("span",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("t-col",{attrs:{span:"2",offset:"2"}},[a("span",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("t-col",{attrs:{span:"2"}},[a("span",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("t-col",{attrs:{span:"2",offset:"2"}},[a("span",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("t-col",{attrs:{span:"2",offset:"2"}},[a("span",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("t-col",{attrs:{span:"2"}},[a("span",{staticClass:"demoCol"},[t._v("2")])])],1)],1)}),[],!1,null,"4ac2255c",null);s.default=c.exports}}]);