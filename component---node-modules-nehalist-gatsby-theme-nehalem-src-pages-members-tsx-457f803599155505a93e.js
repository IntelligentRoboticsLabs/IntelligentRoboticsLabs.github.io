(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2Pov":function(e,t,a){},DzHm:function(e,t,a){e.exports=a.p+"static/paco-8b216ac29371e44594ff2bfd7523b5c0.jpg"},IP2g:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("7O5W"),r=a("17x9"),l=a.n(r),i=a("q1tI"),o=a.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,n=t.indexOf(":"),r=d(t.slice(0,n)),l=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=l:e[r]=l,e}),{})}var g=!1;try{g=!0}catch(w){}function y(e){return n.parse.icon?n.parse.icon(e):null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function E(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function h(e){var t=e.forwardedRef,a=f(e,["forwardedRef"]),r=a.icon,l=a.mask,i=a.symbol,o=a.className,c=a.title,m=a.titleId,d=y(r),b=E("classes",[].concat(p(function(e){var t,a=e.spin,n=e.pulse,r=e.fixedWidth,l=e.inverse,i=e.border,o=e.listItem,c=e.flip,m=e.size,u=e.rotation,f=e.pull,p=(s(t={"fa-spin":a,"fa-pulse":n,"fa-fw":r,"fa-inverse":l,"fa-border":i,"fa-li":o,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(m),null!=m),s(t,"fa-rotate-".concat(u),null!=u&&0!==u),s(t,"fa-pull-".concat(f),null!=f),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(a)),p(o.split(" ")))),w=E("transform","string"==typeof a.transform?n.parse.transform(a.transform):a.transform),x=E("mask",y(l)),O=Object(n.icon)(d,u({},b,{},w,{},x,{symbol:i,title:c,titleId:m}));if(!O)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var j=O.abstract,z={ref:t};return Object.keys(a).forEach((function(e){h.defaultProps.hasOwnProperty(e)||(z[e]=a[e])})),v(j[0],z)}h.displayName="FontAwesomeIcon",h.propTypes={border:l.a.bool,className:l.a.string,mask:l.a.oneOfType([l.a.object,l.a.array,l.a.string]),fixedWidth:l.a.bool,inverse:l.a.bool,flip:l.a.oneOf(["horizontal","vertical","both"]),icon:l.a.oneOfType([l.a.object,l.a.array,l.a.string]),listItem:l.a.bool,pull:l.a.oneOf(["right","left"]),pulse:l.a.bool,rotation:l.a.oneOf([0,90,180,270]),size:l.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:l.a.bool,symbol:l.a.oneOfType([l.a.bool,l.a.string]),title:l.a.string,transform:l.a.oneOfType([l.a.string,l.a.object]),swapOpacity:l.a.bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var r=(a.children||[]).map((function(a){return e(t,a)})),l=Object.keys(a.attributes||{}).reduce((function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=b(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),i=n.style,o=void 0===i?{}:i,c=f(n,["style"]);return l.attrs.style=u({},l.attrs.style,{},o),t.apply(void 0,[a.tag,u({},l.attrs,{},c)].concat(p(r)))}.bind(null,o.a.createElement)},UWUo:function(e,t,a){e.exports=a.p+"static/manuel-54fe5b743b49276d2c0a7847aa35319b.jpg"},XG6F:function(e,t,a){e.exports=a.p+"static/jonatan-c7b8e2b48c40e4af50e86886b22414f6.jpg"},bMto:function(e,t,a){e.exports=a.p+"static/lorena-1b6f3b99e80b7c5b0c60736abdb21445.jpg"},bp1E:function(e,t,a){e.exports=a.p+"static/fernando-3c8826c504d6d14fa5ea326e570b73d5.jpg"},yMsA:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("IJQQ"),i=a("ywv1"),o=a("vOnD"),c=o.default.article.withConfig({displayName:"style__Main",componentId:"odmph0-0"})(["text-align:center;max-width:80%;position:relative;margin-top:0px;margin-left:auto;margin-right:auto;"]),s=(o.default.h1.withConfig({displayName:"style__Header",componentId:"odmph0-1"})(["text-align:center;max-width:100%;position:relative;font-size:45px;"]),o.default.article.withConfig({displayName:"style__MainDescription",componentId:"odmph0-2"})(["max-width:60%;margin-left:auto;margin-right:auto;margin-bottom:0px;padding:0px;"]),o.default.article.withConfig({displayName:"style__Grid",componentId:"odmph0-3"})(["margin-bottom:10px;margin-top:10%;margin-bottom:5%;padding:0px;max-width:100%;margin-left:auto;margin-right:auto;"])),m=o.default.article.withConfig({displayName:"style__GridImg",componentId:"odmph0-4"})(["width:340px;max-width:340px;height:350px;max-height:350px;display:inline-block;position:relative;margin:10px;margin-bottom:0%;padding:0px;overflow:hidden;"]),u=o.default.article.withConfig({displayName:"style__GridImgImage",componentId:"odmph0-5"})(["border-top-left-radius:80%;border-top-right-radius:80%;border-bottom-right-radius:80%;border-bottom-left-radius:80%;padding:5%;"]),f=o.default.article.withConfig({displayName:"style__Map",componentId:"odmph0-6"})(["background:#fff;margin-bottom:10px;max-width:100%;margin-left:auto;margin-right:auto;"]),p=(a("2Pov"),a("DzHm")),d=a.n(p),b=a("XG6F"),g=a.n(b),y=a("zUb3"),E=a.n(y),h=a("bMto"),v=a.n(h),w=a("bp1E"),x=a.n(w),O=a("UWUo"),j=a.n(O),z=a("IP2g"),I=a("wHSu");function P(e){e.target.style.width="60%"}function M(e){e.target.style.width="50%"}var k=function(){return r.a.createElement(c,null,r.a.createElement("script",{src:"./script.js",type:"text/javascript"}),r.a.createElement(s,null,r.a.createElement(m,null,r.a.createElement(u,null,r.a.createElement("a",{href:"https://gsyc.urjc.es/~fmartin/",target:"_blank"},r.a.createElement("img",{className:"gridimg",onMouseOut:M,onMouseOver:P,width:"50%",src:d.a}))),r.a.createElement("div",{class:"name"},r.a.createElement("p",null,r.a.createElement("strong",null,"Francisco Martín"))),r.a.createElement("div",{class:"definition"},r.a.createElement("p",null,r.a.createElement("strong",null,"Associate Professor"))),r.a.createElement("div",{class:"email"},r.a.createElement("div",{class:"mail-icon"},r.a.createElement(z.a,{icon:I.b,size:"1x"})),r.a.createElement("p",null,"francisco.rico@urjc.es"))),r.a.createElement(m,null,r.a.createElement(u,null,r.a.createElement("a",{href:"https://sites.google.com/view/jmguerrero",target:"_blank"},r.a.createElement("img",{class:"gridimg",onMouseOut:M,onMouseOver:P,src:E.a,width:"50%"}))),r.a.createElement("div",{class:"name"},r.a.createElement("p",null,r.a.createElement("strong",null,"José Miguel Guerrero"))),r.a.createElement("div",{class:"definition"},r.a.createElement("p",null,r.a.createElement("strong",null,"Assistant Professor"))),r.a.createElement("div",{class:"email"},r.a.createElement("div",{class:"mail-icon"},r.a.createElement(z.a,{icon:I.b,size:"1x"})),r.a.createElement("p",null,"josemiguel.guerrero@urjc.es"))),r.a.createElement(m,null,r.a.createElement(u,null,r.a.createElement("a",{href:"https://jginesclavero.github.io",target:"_blank"},r.a.createElement("img",{class:"gridimg",onMouseOut:M,onMouseOver:P,src:g.a,width:"50%"}))),r.a.createElement("div",{class:"name"},r.a.createElement("p",null,r.a.createElement("strong",null,"Jonatan Ginés"))),r.a.createElement("div",{class:"definition"},r.a.createElement("p",null,r.a.createElement("strong",null,"PhD Candidate"))),r.a.createElement("div",{class:"email"},r.a.createElement("div",{class:"mail-icon"},r.a.createElement(z.a,{icon:I.b,size:"1x"})),r.a.createElement("p",null,"jonatan.gines@urjc.es"))),r.a.createElement(m,null,r.a.createElement(u,null,r.a.createElement("img",{class:"gridimg",onMouseOut:M,onMouseOver:P,src:x.a,width:"50%"})),r.a.createElement("div",{class:"name"},r.a.createElement("p",null,r.a.createElement("strong",null,"Fernando González"))),r.a.createElement("div",{class:"definition"},r.a.createElement("p",null,r.a.createElement("strong",null,"Intern"))),r.a.createElement("div",{class:"email"},r.a.createElement("div",{class:"mail-icon"},r.a.createElement(z.a,{icon:I.b,size:"1x"})),r.a.createElement("p",null,"f.gonzalezr.2016@alumnos.urjc.es"))),r.a.createElement(m,null,r.a.createElement(u,null,r.a.createElement("img",{class:"gridimg",onMouseOut:M,onMouseOver:P,src:v.a,width:"50%"})),r.a.createElement("div",{class:"name"},r.a.createElement("p",null,r.a.createElement("strong",null,"Lorena Bajo"))),r.a.createElement("div",{class:"definition"},r.a.createElement("p",null,r.a.createElement("strong",null,"Project Engineer"))),r.a.createElement("div",{class:"email"},r.a.createElement("div",{class:"mail-icon"},r.a.createElement(z.a,{icon:I.b,size:"1x"})),r.a.createElement("p",null,"lorena.bajo@urjc.es"))),r.a.createElement(m,null,r.a.createElement(u,null,r.a.createElement("a",{href:"https://www.fernandezcarmona.net",target:"_blank"},r.a.createElement("img",{class:"gridimg",onMouseOut:M,onMouseOver:P,src:j.a,width:"50%"}))),r.a.createElement("div",{class:"name"},r.a.createElement("p",null,r.a.createElement("strong",null,"Manuel Fernández"))),r.a.createElement("div",{class:"definition"},r.a.createElement("p",null,r.a.createElement("strong",null,"Assistant Professor"))),r.a.createElement("div",{class:"email"},r.a.createElement("div",{class:"mail-icon"},r.a.createElement(z.a,{icon:I.b,size:"1x"})),r.a.createElement("p",null,"manuel.fernandezc@urjc.es")))),r.a.createElement(f,null,r.a.createElement("div",{class:"map-tittle"},r.a.createElement("p",null,"Where to find us")),r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.7073176428366!2d-3.8216746487588584!3d40.28225137162937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418b7f310d2417%3A0x8bb94231c370b55!2sUniversidad%20Rey%20Juan%20Carlos%20Campus%20de%20Fuenlabrada!5e0!3m2!1ses!2ses!4v1599824570268!5m2!1ses!2ses",width:"100%",height:"450",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})))};t.default=function(e){var t=e.location;return r.a.createElement(l.a,{bigHeader:!0},r.a.createElement(i.a,{location:t,title:"Members",type:"Series"}),r.a.createElement(k,null))}},zUb3:function(e,t,a){e.exports=a.p+"static/josemiguel-93b9c36f0ed9a443694baa38ebef61d0.jpg"}}]);
//# sourceMappingURL=component---node-modules-nehalist-gatsby-theme-nehalem-src-pages-members-tsx-457f803599155505a93e.js.map