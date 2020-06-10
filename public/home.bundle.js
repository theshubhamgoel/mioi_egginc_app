(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{328:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(0),a=n.n(r),o=n(351),i=n(12),c=n(76),l=n(164),s=n(101),u=n(380),d=n(382),m=n(45),f=n(355),p=n(383),g=n(59),b=n(99),y=Object(l.a)((function(e){return{card:{display:"grid",gridTemplateColumns:"70px 1fr 1fr",gridTemplateAreas:'\n            "image subtitle subtitle"\n            "icons icons icons"\n            "rewards rewards rewards"\n            "estimate estimate estimate"\n        ',gridGap:10,alignItems:"center",wordBreak:"break-word"},image:{gridArea:"image",width:80}}}));function h(e){var t,n=y(),r=e.contract,o=e.metaContract,l=o.coopIdentifier,s=Object(i.d)((function(e){return e.contract.playerCoops[r.name]})),h=Object(i.d)((function(e){return e.playerData.farmsList.find((function(e){return e.contractId===r.name}))})),v=Object(i.d)((function(e){return e.playerData.game})),E=Object(b.a)(h,v),O=0===o.league?"elite":"standard",w=r.goals[O];s&&(t=s.fetching);var j="/contract/view";r&&(j+="/"+r.name),l&&(j+="/"+l);var C=[a.a.createElement(g.a,{style:{gridArea:"rewards / estimate / rewards / estimate"},key:"loading"})],x=[a.a.createElement(c.a,{key:"coop",style:{gridArea:"subtitle"},align:"center",variant:"h4"},s&&s.coop||"No Co-op"),a.a.createElement(u.a,{key:"rewards",style:{gridArea:"rewards"},eggsLaid:s&&s.eggs||h.eggsLaid,rewards:w}),a.a.createElement(d.a,{key:"estimate",style:{gridArea:"estimate"},rewards:w,data:s&&{eggsLaid:s.eggs,layingRate:s.totalRate,timeLeft:s.timeLeft}||{eggsLaid:h.eggsLaid,layingRate:E.layingRate,timeLeft:o.timeAccepted+o.contract.lengthSeconds-new Date/1e3}})];return a.a.createElement(f.a,{hoverable:!0,collapsable:!0,title:"".concat(r.title),className:n.root},a.a.createElement(m.b,{className:n.card,to:j},a.a.createElement("img",{key:"image",className:n.image,src:"/images/egg".concat(r.egg,".png")}),a.a.createElement(p.a,{style:{gridArea:"icons"},contract:r,coop:s}),t?C:x))}var v=n(30),E=n(384);var O=n(357),w=n(370);Object(l.a)((function(e){return{root:{"&>img":{height:100}}}}));function j(e){var t=e.imageSrc,n=e.label,r=e.height;return a.a.createElement("div",null,a.a.createElement("img",{height:r,src:t}),a.a.createElement(c.a,{align:"center"},n))}var C=Object(l.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid",borderColor:e.palette.success.main,borderRadius:8},collected:{},img:{position:"relative"},gift:{width:80},check:{position:"absolute",left:5,top:5,width:36}}}));function x(e){var t=C(),n=e.collected,r=Object(v.a)(),o=new Date;o.setUTCDate((new Date).getUTCDate()+1),o.setUTCHours(0),o.setUTCMinutes(0),o.setUTCSeconds(0),o.setUTCMilliseconds(0);var i=n?function(){return a.a.createElement(c.a,null,"Next Gift: ",Object(O.f)(o/1e3,!0))}:function(){return a.a.createElement(c.a,null,"Collect your daily gift!")},l=n?{borderColor:r.palette.grey[400]}:null;return a.a.createElement("div",{className:t.root,style:l},a.a.createElement("div",{className:t.img},a.a.createElement("img",{className:t.gift,src:"images/icon_gift.png"}),n&&a.a.createElement("img",{className:t.check,src:"images/check_filled.png"})),a.a.createElement(i,null))}var S=Object(l.a)((function(e){return{meEggs:{paddingTop:8,paddingBottom:8}}}));var k=function(e){var t=Object(i.d)((function(e){return e.playerData})),n=S(),r=t.fetched,o=t.fetching,l=t.userId,s=r?t.game.lastDailyGiftCollectedDay>=Object(O.e)(new Date):void 0,u=function(){return a.a.createElement("div",null,a.a.createElement(c.a,{variant:"h5"},"Welcome to mioi.io's Egg, Inc. companion app"),a.a.createElement("br",null),a.a.createElement(c.a,{variant:"body1"},"The dashboard shows you all of the information you need at a glance. To get you the tailored information you're after, enter your PlayerID below."),a.a.createElement("br",null),a.a.createElement(c.a,{variant:"body2"},"The PlayerID will be saved on the device you're viewing this on."),a.a.createElement(E.a,null))},d=function(){return a.a.createElement("div",null,a.a.createElement(x,{collected:s}),a.a.createElement(w.a,{className:n.meEggs},a.a.createElement(j,{imageSrc:"/images/SOUL_EGGS.png",label:Object(O.c)(t.game.soulEggsD),height:80}),a.a.createElement(j,{imageSrc:"/images/PROPHECY_EGGS.png",label:Object(O.c)(t.game.eggsOfProphecy),height:80})),a.a.createElement(c.a,{variant:"caption"},"Latest game data: ",new Date(1e3*t.approxTime).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short",hour12:!0})))},m=t.userName?"Hello, ".concat(t.userName):"Welcome";return a.a.createElement(f.a,{collapsable:!0,title:m},!r&&a.a.createElement(u,null),o&&r&&a.a.createElement(g.a,null),!o&&l&&a.a.createElement(d,null))};function P(e){return a.a.createElement(m.b,{to:e.link,style:{height:"fit-content"}},a.a.createElement(f.a,{hoverable:!0,title:"Link"},a.a.createElement(c.a,{variant:"h3",align:"center"},e.title),a.a.createElement("br",null),a.a.createElement(c.a,{variant:"body1"},e.body),e.imgSrc&&a.a.createElement("img",{src:e.imgSrc})))}var N=n(385);function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};A(this,e),this.content=t.content||[],this.orderedContent=null,this.columnClass=t.columnClass||null,this.rootClass=t.rootClass||null}var t,n,r;return t=e,(n=[{key:"addItem",value:function(e){e instanceof Array?this.content=this.content.concat(e):this.content.push(e)}},{key:"orderContent",value:function(){this.orderedContent=this.content.slice(0),this.orderedContent.sort((function(e,t){return e.props.priority-t.props.priority}))}},{key:"render",value:function(e){var t=this;this.orderContent();for(var n=[],r=function(r){n.push(a.a.createElement("div",{key:"column".concat(r+1),className:t.columnClass},t.orderedContent.filter((function(t,n){return n%e===r}))))},o=0;o<e;o++)r(o);return a.a.createElement("div",{className:this.rootClass,style:{display:"grid",gridTemplateColumns:"1fr ".repeat(e)}},n)}}])&&I(t.prototype,n),r&&I(t,r),e}();function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||B(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R=Object(l.a)((function(e){return{root:{gridGap:20,padding:"10px 0px"},column:{display:"flex",flexDirection:"column","& >*":{margin:"10px 0px"}}}}));var M=function(e){var t=R(),n=Object(i.c)(),c=Object(i.d)((function(e){return e.playerData})),l=Object(i.d)((function(e){return e.contract.activeContracts})),u=Object(i.d)((function(e){return e.contract.playerCoops})),d=(Object(i.d)((function(e){return e.settings.playerId})),Object(i.d)((function(e){return e.app.news}))),m=Object(v.a)(),f=D(Object(r.useState)(null),2),p=f[0],g=f[1],b=c.fetched?c.contracts.contractsList:null;function y(){var e,t=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=B(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}(b);try{for(t.s();!(e=t.n()).done;){var r=e.value,a=r.contract.identifier,o=r.coopIdentifier;o&&n(s.b(o,a,!0))}}catch(e){t.e(e)}finally{t.f()}}Object(r.useEffect)((function(){c.fetched&&0===Object.keys(u).length&&u.constructor===Object&&y()}),[c.userId]);var E=new T({rootClass:t.root,columnClass:t.column});return d.fetched&&d.posts&&E.addItem(a.a.createElement(N.a,{post:d.posts[0],priority:2,key:"post"})),E.addItem(a.a.createElement(P,{key:"contractLink",priority:3,link:"/contract",title:"Contracts",body:"Click to see all of the current contracts!"})),l.fetched&&c.fetched&&b.forEach((function(e,t){var n=l.contracts[e.contract.identifier];void 0!==n&&E.addItem(a.a.createElement(h,{key:t,priority:1,metaContract:e,contract:n}))})),E.addItem(a.a.createElement(k,{key:"playerCard",priority:0})),Object(r.useEffect)((function(){window.innerWidth>m.breakpoints.values.lg?g(3):window.innerWidth>m.breakpoints.values.md?g(2):g(1)}),[window.innerWidth]),a.a.createElement(o.a,null,E.render(p))},z=n(360);function _(e){return a.a.createElement(z.a,{shortTitle:"Dashboard"},a.a.createElement(M,null))}},355:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(413),a=n(312),o=n(76),i=n(0),c=n.n(i),l=n(164),s=n(367),u=n.n(s),d=n(24);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=Object(l.a)((function(e){return{card:{},header:{backgroundColor:e.palette.primary.main,height:32,display:"grid",gridTemplateColumns:"32px 1fr 32px",gridTemplateAreas:'\n\t\t\t"left center right"\n\t\t'},title:{gridArea:"center",userSelect:"none"},collapseButton:{gridArea:"right",padding:"unset",transition:"all 200ms ease"},iconCollapsed:{transform:"rotate(180deg)"},cardBody:{padding:10,transition:"all 500ms ease"},bodyHidden:{height:0,paddingTop:"0px !important",paddingBottom:"0px !important"}}}));function g(e){var t=p(),n=e.hoverable||!1,l=e.collapsable||!1,s=m(Object(i.useState)(!1),2),f=s[0],g=s[1],b=m(Object(i.useState)(!1),2),y=b[0],h=b[1],v=n?function(){g(!f)}:null,E=l?function(){h(!y),d.a.event({category:"Interaction",action:y?"Card Expanded":"Card Collapsed",label:e.title})}:null;return c.a.createElement(r.a,{style:e.style,raised:n&&f,onMouseOver:v,onMouseOut:v,className:"".concat(t.card)},c.a.createElement("div",{className:t.header,onClick:E,style:{cursor:l?"pointer":null}},c.a.createElement(o.a,{className:t.title,variant:"h5",align:"center",style:{color:"white"}},e.title),l&&c.a.createElement(a.a,{className:"".concat(t.collapseButton," ").concat(y?t.iconCollapsed:""),style:{color:"white"}},c.a.createElement(u.a,null))),c.a.createElement("div",{className:"".concat(y?t.bodyHidden:""," ").concat(e.className," ").concat(t.cardBody)},e.children))}},357:function(e,t,n){"use strict";function r(e){var t=new Date("2000-01-01");return Math.floor((e-t)/864e5)}n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return a.a})),n.d(t,"f",(function(){return a.g})),n.d(t,"h",(function(){return a.k})),n.d(t,"c",(function(){return a.e})),n.d(t,"g",(function(){return a.i})),n.d(t,"d",(function(){return a.f})),n.d(t,"b",(function(){return a.c}));var a=n(97);n(99)},365:function(e,t,n){var r=n(381);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(170)(r,a);r.locals&&(e.exports=r.locals)},367:function(e,t,n){"use strict";var r=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(39)).default)(a.default.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=o},370:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.style,{display:"flex",justifyContent:"space-around",flexDirection:e.column?"column":"row"});return a.a.createElement("div",{style:t,className:e.className},e.children)}},371:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(76),a=n(134),o=n(0),i=n.n(o),c=n(30);function l(e){Object(c.a)();return i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",flex:"1 1 0px",alignItems:"center",gap:10,justifyContent:"space-between"}},i.a.createElement(a.a,{style:{width:"36px",height:"36px"},fontSize:"large",color:"secondary",component:e.icon}),i.a.createElement(r.a,{variant:"subtitle1"},e.label))}},372:function(e,t,n){"use strict";var r=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(39)).default)(a.default.createElement("path",{d:"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}),"Timer");t.default=o},373:function(e,t,n){"use strict";var r=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(39)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"}),a.default.createElement("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"}),a.default.createElement("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"})),"PeopleAlt");t.default=o},374:function(e,t,n){"use strict";var r=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(39)).default)(a.default.createElement("path",{d:"M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z"}),"OfflineBolt");t.default=o},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(346),a=n(446),o=n(0),i=n.n(o),c=n(30),l=(n(365),n(366)),s=n(97);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=Object(c.a)(),n=e.rewards,o=e.eggsLaid||0,m=n[n.length-1].goal,f=Math.min(Math.max(0,o/m*100),100),p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.style,{margin:"10px 20px",borderRadius:10}),g="linear-gradient(to right, ".concat(t.palette.primary.light,", ").concat(t.palette.secondary.light,")"),b=n.map((function(e,t){return i.a.createElement(l.Step,{key:t,transition:"scale"},(function(t){var n=t.accomplished,r=(t.index,{filter:["drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))",n?null:"grayscale(0.7)"].join(" "),transform:n?"scale(1.2)":null,pointerEvents:"none"});return i.a.createElement(a.a,{title:"".concat(Object(s.j)(o/e.goal,0,!0)," completed"),placement:"top",enterTouchDelay:400},i.a.createElement("div",null,i.a.createElement("img",{width:40,src:Object(s.h)(e).path,style:r})))}))}));return i.a.createElement(r.a,{elevation:4,style:p},i.a.createElement(l.ProgressBar,{height:20,percent:f,unfilledBackground:t.palette.background.off,filledBackground:g,stepPositions:n.map((function(e){return e.goal/m*100}))},b))}},381:function(e,t,n){(e.exports=n(169)(!1)).push([e.i,".RSPBprogressBar {\n  height: 10px;\n  line-height: 1;\n  border-radius: 10px;\n  position: relative;\n  background-color: rgba(211, 211, 211, 0.6);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 0; }\n  .RSPBprogressBar .RSPBstep {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 0;\n    position: absolute;\n    transform: translateX(-50%);\n    transition-property: all;\n    transition-timing-function: ease; }\n  .RSPBprogressBar .RSPBprogressBarText {\n    color: white;\n    font-size: 10px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n  .RSPBprogressBar .RSPBprogression {\n    position: absolute;\n    transition: width 0.3s ease;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 10px;\n    background: rgba(0, 116, 217, 0.8);\n    z-index: -1; }\n",""])},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(346),a=n(349),o=n(76),i=n(0),c=n.n(i),l=n(97),s=n(366),u=(n(365),n(164)),d=n(30),m=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,border:1,borderStyle:"none",borderColor:e.palette.grey[300],borderRadius:10,margin:"10px 0px",display:"block"},main:{position:"relative"},divider:{position:"absolute",width:2,height:"100%",left:"calc(50% - 1px)",zIndex:10,backgroundColor:e.palette.secondary.main,boxShadow:e.shadows[4]},progress:{clear:"both",height:30,"& div":{borderRadius:"unset !important","& div":{borderRadius:"unset !important"}}},estimate:{textAlign:"left",float:"left",maxWidth:"45%",marginLeft:10},expiry:{textAlign:"right",float:"right",maxWidth:"45%",marginRight:10},title:{},value:{},overlay:{position:"absolute",display:"grid",alignItems:"center",height:"100%",width:"100%",borderRadius:"inherit",backgroundColor:e.palette.background.offOverlay,zIndex:99},tip:{clear:"both"}}}));function f(e){var t=m(),n=Object(d.a)();return void 0===e.completed?null:c.a.createElement("div",{className:t.overlay},c.a.createElement(o.a,{variant:"h5",align:"center",style:{color:e.completed?n.palette.success.main:n.palette.error.main}},e.completed?"Contract Completed!":"Contract Failed!"))}function p(e){var t,n,i,u=m(),p=Object(d.a)(),g=e.rewards;if(e.coop)t=e.coop.members.reduce((function(e,t){return e+t.rate}),0),n=g[g.length-1].goal-e.coop.eggs,i=e.coop.timeLeft;else{if(!e.data)return null;t=e.data.layingRate,n=g[g.length-1].goal-e.data.eggsLaid,i=e.data.timeLeft}var b=n/t;b===1/0&&(b=Number.MAX_SAFE_INTEGER);var y,h=b/(b+i)*100,v=p.palette.warning.main;h>65?v=p.palette.error.main:h<=50&&(v=p.palette.success.main),n<=0?(y=!0,h=0):i<=0&&(y=!1,h=0);return c.a.createElement(r.a,{style:e.style,className:u.root},c.a.createElement("div",{className:u.main},c.a.createElement(f,{completed:y}),c.a.createElement(o.a,{variant:"body2",className:"".concat(u.estimate," ").concat(u.title)},"Completion Estimate"),c.a.createElement(o.a,{variant:"body2",className:"".concat(u.expiry," ").concat(u.title)},"Contract Time Left"),c.a.createElement("div",{className:u.divider}),c.a.createElement("div",{className:u.progress},c.a.createElement(s.ProgressBar,{height:"100%",percent:h,unfilledBackground:p.palette.background.off,filledBackground:v})),c.a.createElement(o.a,{variant:"body2",className:"".concat(u.estimate," ").concat(u.value)},b>31536e3?"A very long time":Object(l.d)(b)),c.a.createElement(o.a,{variant:"body2",className:"".concat(u.expiry," ").concat(u.value)},Object(l.d)(i)),c.a.createElement("div",{style:{clear:"both"}})),h>50&&c.a.createElement(a.a,{style:{clear:"both"}}),c.a.createElement(o.a,{align:"center",variant:"body2",className:u.tip},h>50?"Tip: ".concat(Object(l.e)(n/i),"/s required to reach success threshold."):null))}},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(374),a=n.n(r),o=n(373),i=n.n(o),c=n(372),l=n.n(c),s=n(0),u=n.n(s),d=n(370),m=n(371),f=n(97);function p(e){var t=e.contract,n=e.coop,r=function(){if(t.coopSize){var e=t.coopSize;if(n&&n.members)return n.members.length+"/"+e}return"0"}();return u.a.createElement(d.a,{style:{gridArea:"icons"}},u.a.createElement(m.a,{icon:l.a,label:f.d(t.duration,!0)}),u.a.createElement(m.a,{icon:i.a,label:r}),u.a.createElement(m.a,{icon:a.a,label:t.boostTokenInterval?"".concat(t.boostTokenInterval," min"):"No Boosts"}))}},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(76),a=n(0),o=n.n(a),i=n(355),c=n(164),l=(n(108),n(12),n(113)),s=n.n(l),u=Object(c.a)((function(e){return{markdown:{whiteSpace:"pre-line","& a":{color:e.palette.info.main,"&:hover":{color:e.palette.info.light}}}}}));function d(e){var t=e.post,n=u();return o.a.createElement(i.a,{collapsable:!0,title:"News"},o.a.createElement(r.a,{variant:"overline",align:"right"},new Date(1e3*t.timePosted).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short",hour12:!1})),o.a.createElement(r.a,{variant:"h5"},t.title),o.a.createElement(r.a,{variant:"subtitle2"},"by ",t.author),o.a.createElement(s.a,{className:n.markdown,source:t.body}))}}}]);