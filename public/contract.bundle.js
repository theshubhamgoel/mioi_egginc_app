(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{327:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return qe}));var n=r(312),a=r(0),o=r.n(a),c=r(18),i=r(105),l=r(10),u=r(36),s=r(313),m=r(98),f=r(59),d=r(434),p=r(96),g=r(32);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=Object(p.a)((function(e){return{unfilled:{gridArea:"progressBar",backgroundColor:e.palette.background.off,position:"relative",textAlign:"center",height:"100%",width:"100%",zIndex:4,transition:"all 200ms ease",overflow:"hidden","& *":{transition:"inherit"}},filled:{position:"absolute",top:0,left:0,zIndex:-1,width:"100%",height:"100%"},text:{lineHeight:"unset"}}}));function v(e){var t=Object(g.a)(),r=h(),n=Object(d.a)("(hover: none)"),c=Math.min(Math.max(0,e.progress),1),i=b(Object(a.useState)(!1),2),l=i[0],u=i[1];Object(a.useEffect)((function(){u(n)}),[n]);var s={height:l?20:null,marginTop:n?10:null};function m(e){var t=0,r=0,n=0;return 4==e.length?(t="0x"+e[1]+e[1],r="0x"+e[2]+e[2],n="0x"+e[3]+e[3]):7==e.length&&(t="0x"+e[1]+e[2],r="0x"+e[3]+e[4],n="0x"+e[5]+e[6]),[t,r,n]}var p,y,v,E,O=[m(t.palette.primary.light),m(t.palette.secondary.light)],j=(p=O[1],y=O[0],E=1-(v=c),[Math.round(p[0]*v+y[0]*E),Math.round(p[1]*v+y[1]*E),Math.round(p[2]*v+y[2]*E)]),x={width:"".concat(100*c,"%"),background:"rgb(".concat(j[0],",").concat(j[1],",").concat(j[2],")")},w=l?o.a.createElement(f.a,{variant:"overline",className:r.text},e.hoverText):null;return o.a.createElement("div",{onMouseEnter:function(e){u(n||!0)},onMouseLeave:function(e){u(n||!1)},className:r.unfilled,style:s},w,o.a.createElement("div",{className:r.filled,style:x}))}var E=r(435),O=Object(p.a)((function(e){return Object(E.a)({ContractCardImage:{backgroundColor:e.palette.background.off,gridArea:"image",width:"100%",maxWidth:150,display:"grid",alignItems:"center",justifyItems:"center",borderBottomLeftRadius:"inherit",zIndex:3,filter:"drop-shadow(2px 0px 2px rgba(0, 0, 0, 0.3))","& img":{maxHeight:"90%",maxWidth:"90%"}}})}));function j(e){var t=O();return o.a.createElement("div",{className:t.ContractCardImage},o.a.createElement("img",{src:e.src}))}var x=r(446);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=Object(p.a)((function(e){return{root:{display:"flex",flex:"1 1 0px","& > *":{margin:2,flexGrow:1}},rewardSet:{marginTop:5,"& .header":{paddingLeft:5,backgroundColor:e.palette.grey[700],color:e.palette.getContrastText(e.palette.grey[700])}},quantityText:S({},e.typography.h6,{marginLeft:5}),reward:{display:"flex",margin:"5px 0px",gridTemplateColumns:"auto 1fr"},rewardIcon:{width:"32px",height:"32px"}}}));function I(e){var t=C(),r=e.goals;return void 0!==r.standard?o.a.createElement("div",{className:t.root},o.a.createElement(T,{goalSet:r.standard,title:"Standard"}),o.a.createElement(T,{goalSet:r.elite,title:"Elite"})):o.a.createElement("div",{className:t.root},o.a.createElement(T,{goalSet:r,title:"Standard & Elite"}))}function T(e){var t=C(),r=e.goalSet,n=e.title,a=r.map((function(e,t){return o.a.createElement(N,{key:t,reward:e})}));return o.a.createElement("div",{className:t.rewardSet},o.a.createElement(f.a,{className:"header",color:"textSecondary",variant:"subtitle2"},n),a)}function N(e){var t=C(),r=e.reward.goal,n=Object(m.h)(e.reward),a=n.path,c=n.quantity;return o.a.createElement(x.a,{title:Object(m.e)(r),placement:"left",arrow:!0},o.a.createElement("div",{className:t.reward},o.a.createElement("img",{className:t.rewardIcon,src:a}),o.a.createElement("span",{className:t.quantityText},c)))}var P=r(370),k=r(371),R=r.n(k),L=r(372),D=r.n(L),M=r(373),B=r.n(M),U=Object(p.a)((function(e){return{root:{flexGrow:1,padding:"10px"}}}));function _(e){var t=U();return o.a.createElement("div",{className:t.root},o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},o.a.createElement(P.a,{icon:R.a,label:m.d(e.contract.duration,!0)}),o.a.createElement(P.a,{icon:D.a,label:e.contract.coopSize?e.contract.coopSize:0}),o.a.createElement(P.a,{icon:B.a,label:e.contract.boostTokenInterval?"".concat(e.contract.boostTokenInterval," min"):"No Boosts"})),o.a.createElement(I,{goals:e.contract.goals}))}var z=Object(p.a)((function(e){return{root:{display:"flex"}}}));function G(e){var t=z();return o.a.createElement("div",{className:t.root},o.a.createElement(j,{src:"/images/egg".concat(e.contract.egg,".png")}),o.a.createElement(_,{contract:e.contract}))}var F=Object(p.a)((function(e){return{root:{gridArea:"title",backgroundColor:e.palette.primary.main,height:"100%"},text:{margin:10,fontSize:20,color:"white"}}}));function W(e){var t=F();return o.a.createElement("div",{className:t.root},o.a.createElement(f.a,{className:t.text,variant:"h2"},e.text))}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Y=Object(p.a)((function(e){return{root:{display:"grid",margin:"12px 15px 12px 15px",gridTemplateRows:"40px 5px 1fr",gridTemplateColumns:"100%",gridTemplateAreas:'\n            "title title"\n            "progressBar progressBar"\n        ',justifyContent:"center",alignItems:"center",transition:"all 200ms ease",cursor:"pointer",userSelect:"none"}}}));function V(e){var t=Y(),r=H(Object(a.useState)(!1),2),n=r[0],c=r[1],i=function(){c(!n)},l=(new Date/1e3-(e.contract.validUntil-1814400))/1814400,u=m.g(e.contract.validUntil,!0),f=u<=0?"Expired!":"Expires in "+u;return o.a.createElement(s.a,{raised:n,onMouseOver:i,onMouseOut:i,className:t.root,id:e.contract.name},o.a.createElement(W,{text:e.contract.title}),o.a.createElement(v,{progress:l,hoverText:f}),o.a.createElement(G,{contract:e.contract}))}var q=r(102),J=r(61),X=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",padding:0},listItem:{maxWidth:550,width:"100%"}}}));var K={showContract:q.f},Q=Object(l.b)((function(e){return{activeContracts:e.contract.activeContracts}}),K)((function(e){var t=X();if(!e.activeContracts.contracts)return o.a.createElement(J.a,null);var r=Object.values(e.activeContracts.contracts).sort((function(e,t){return e.validUntil-t.validUntil}));r.reverse();var a=r.map((function(r,n){var a=Object(m.g)(r.validUntil)<2592e3?n:100+n;return o.a.createElement(u.a,{style:{order:a},className:t.listItem,onClick:e.showContract,to:"".concat(e.match.url,"/view/").concat(r.name),key:n},o.a.createElement(V,{contract:r,index:n}))}));return o.a.createElement(n.a,{maxWidth:"lg",className:t.root},a)})),Z=r(168),ee=r(309),te=r(394);function re(e){var t=function(t){return"function"==typeof e.validatorFunction&&(t=e.validatorFunction(t)),t};return o.a.createElement(te.a,{"aria-label":e["aria-label"],error:e.error,autoFocus:!0,onKeyUp:function(t){"Enter"===t.key&&e.onEnter()},type:e.type,label:e.label,fullWidth:!0,variant:"outlined",value:e.value,onChange:function(r){var n=r.target.value;n=t(n),e.setValue(n)},onPaste:function(r){var n=r.target,a=n.value,o=n.selectionStart,c=n.selectionEnd,i=r.clipboardData.getData("text"),l=a.substring(0,o),u=a.substring(c,a.length);a=(l+i+u).trim(),a=t(a),r.preventDefault(),e.setValue(a),e.pasteSubmit&&e.onEnter()}})}var ne=r(24);function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return oe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return oe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ce=Object(p.a)((function(e){return{root:{display:"grid",margin:"5px",gridTemplate:"1fr / 1fr 100px",gridGap:"10px"},progress:{position:"absolute"}}}));function ie(e){var t=Object(l.c)(),r=ce(),n=Object(l.d)((function(t){return t.contract.coopSearch[e.contractId]})),c=Object(l.d)((function(t){return t.contract.coops[e.contractId]})),i=Object(l.d)((function(t){return t.contract.playerCoops[e.contractId]})),u=!!c&&c.fetching,s=ae(Object(a.useState)(n.searchString),2),f=s[0],d=s[1],p=ae(Object(a.useState)(n.searchFailed),2),g=p[0],b=p[1],y=ae(Object(a.useState)(n.disabled),2),h=y[0],v=y[1];Object(a.useEffect)((function(){n.failedSearches.includes(f)&&b(!0)}),[n]);var E=function(){u||(t(Object(q.b)(f,e.contractId)),ne.a.event({category:"Contract",action:"Co-op Searched",label:e.contractId}))};return Object(a.useEffect)((function(){i&&f===i.coop&&(c=i,t(Object(q.e)(i,e.contractId))),c||n.searchFailed||!n.searchString||E()}),[]),o.a.createElement("div",{style:e.style,className:r.root},o.a.createElement(re,{pasteSubmit:!1,label:"Search a Co-op",type:"search",error:g,onEnter:E,value:f,setValue:function(r){d(r),r?(v(!1),n.failedSearches.includes(r)?b(!0):b(!1)):v(!0),t(Object(q.g)(e.contractId,r))},validatorFunction:m.b,inputProps:{"aria-label":"Search a Co-op"}}),o.a.createElement(Z.a,{onClick:E,variant:"outlined",disabled:u||h},"Search",u&&o.a.createElement(ee.a,{className:r.progress})))}var le=r(382),ue=r(445),se=r(437),me=r(436),fe=r(349),de=r(385),pe=r(87),ge=r(431),be=r(360);function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return he(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return he(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ve=Object(p.a)((function(e){return{input:{textAlign:"right",paddingRight:24}}}));function Ee(e){var t=ve(),r=e.value||0,n=e.directive||function(){},c=e.name,i=Object(l.c)(),u=Object(l.d)((function(e){return n(e)})),s=ye(Object(a.useState)(u||r),2),m=s[0],f=(s[1],function(e,t){i(Object(q.d)(c,t))});return Object(a.useEffect)((function(){f(0,m)}),[]),o.a.createElement(be.a,{value:m,onBlur:f,fullWidth:!0,classes:{input:t.input},"aria-label":c},ge.a)}var Oe=r(356),je=r(444);function xe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return we(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return we(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Se(e){var t,r=Object(l.d)((function(e){return e.contract.contractCalc})),n=xe(Object(Oe.b)(r),2),a=n[0],c=n[1];return t=isNaN(a)?"Never":a>524160?"Forever":a<=0?"Completed":"Roughly "+Object(Oe.h)(a,"s"),c&&("maxPopulation"===c.type?c.text=o.a.createElement(f.a,null,"Your farm's ",o.a.createElement("strong",null,"max hab capacity")," is limiting your completion time! You need a max hab capacity of at least ",o.a.createElement("strong",null,Object(Oe.c)(c.value))," to maintain full pace."):"shippingRate"===c.type&&(c.text=o.a.createElement(f.a,null,"Your farm's ",o.a.createElement("strong",null,"shipping capacity")," is limiting your completion time! You need a shipping capacity of at least ",o.a.createElement("strong",null,Object(Oe.c)(c.value))," to maintain full pace."))),o.a.createElement("div",null,c&&o.a.createElement(je.a,{severity:"warning"},c.text),o.a.createElement(f.a,{align:"center",variant:"h6"},t))}var Ae=Object(p.a)((function(e){return{flex:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"},section:{flexGrow:1,margin:10,padding:10,borderWidth:1,borderStyle:"solid",borderRadius:8,borderColor:e.palette.augmentColor(e.palette.grey).main}}}));var Ce=function(e){var t=Ae(),r=e.contract,n=e.coop,a=Object(l.d)((function(e){if(e.playerData.fetched)return e.playerData.farmsList.find((function(e){return e.contractId===r.name}))})),c=Object(l.d)((function(e){if(e.playerData.fetched)return e.playerData.game})),i=a&&c?Object(Oe.a)(a,c):null;function u(e){return o.a.createElement("div",{className:t.section},o.a.createElement(f.a,{align:"center",variant:"h6"},e.title),o.a.createElement(f.a,{variant:"subtitle2"},e.subtitle),e.children)}var s={target:r.goals.elite[r.goals.elite.length-1].goal,eggsLaid:n?n.eggs:a?a.eggsLaid:0,population:a?a.numChickens:0,maxPopulation:i?i.maxHabCapacity:0,shippingRate:i?i.shippingCapacity:0,layingRate:i?i.layingRate:0,hatchRate:i?i.hatchRate:0};return o.a.createElement("div",{className:t.root},o.a.createElement(f.a,{align:"center",variant:"subtitle1"},"Time remaining assuming solo progress using the variables below:"),o.a.createElement(Se,null),o.a.createElement(fe.a,null),o.a.createElement("div",{className:t.flex},o.a.createElement(u,{title:"Contract Target"},o.a.createElement(Ee,{name:"target",value:s.target})),o.a.createElement(u,{title:"Eggs Laid"},o.a.createElement(Ee,{name:"eggsLaid",value:s.eggsLaid})),o.a.createElement(u,{title:"Farm Population"},o.a.createElement(Ee,{name:"population",value:s.population})),o.a.createElement(u,{title:"Max Hab Capacity"},o.a.createElement(Ee,{name:"maxPopulation",value:s.maxPopulation})),o.a.createElement(u,{title:"Shipping Capacity"},o.a.createElement(Ee,{name:"shippingRate",value:s.shippingRate})),o.a.createElement(u,{title:"Egg Laying Rate"},o.a.createElement(Ee,{name:"layingRate",value:s.layingRate})),o.a.createElement(u,{title:"Int. Hatchery Rate"},o.a.createElement(Ee,{name:"hatchRate",value:s.hatchRate})),o.a.createElement(u,null,o.a.createElement(de.a,{tier:pe.epic.tier,research:pe.epic.research.find((function(e){return"int_hatch_calm"===e.id})),dispatchAction:function(e){return Object(q.d)("hatchCalm",e)}}))))};function Ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Te(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ne(e){var t=Ie(Object(a.useState)(!1),2),r=t[0],n=t[1];return o.a.createElement(ue.a,{style:e.style,onChange:function(e,t){return n(t)},expanded:r},o.a.createElement(me.a,null,o.a.createElement(f.a,null,"Solo Contract Calculator")),o.a.createElement(se.a,null,r&&o.a.createElement(Ce,{contract:e.contract,coop:e.coop})))}var Pe=r(380);var ke=r(314),Re=r(438),Le=r(442),De=r(439),Me=r(440),Be=r(441);function Ue(e){return e.coop&&e.coop.fetched?o.a.createElement(ke.a,{style:{overflowX:"auto",overflowY:"auto"},onTouchStart:function(e){return e.stopPropagation()}},o.a.createElement(Re.a,{size:"small"},o.a.createElement(De.a,null,o.a.createElement(Me.a,null,[{id:0,numeric:!1,disablePadding:!1,label:"Name"},{id:1,numeric:!1,disablePadding:!1,label:"Eggs Laid"},{id:2,numeric:!1,disablePadding:!1,label:"Laying Rate"},{id:3,numeric:!1,disablePadding:!1,label:"Contribution"}].map((function(e){return o.a.createElement(Be.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default"},e.label)})))),o.a.createElement(Le.a,null,e.coop.members.map((function(t){return o.a.createElement(Me.a,{key:t.id},o.a.createElement(Be.a,null,t.name),o.a.createElement(Be.a,{numeric:"true"},Object(m.e)(t.eggs)),o.a.createElement(Be.a,{numeric:"true"},Object(m.e)(t.rate)+"/s"),o.a.createElement(Be.a,{numeric:"true"},Object(m.j)(t.eggs/e.coop.eggs,2)))}))))):null}var _e=r(381),ze=r(358),Ge=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column","&>*":{margin:"10px 0px"}},type:{margin:0}}}));var Fe=function(e){var t=e.contract,r=Ge(),n=Object(c.i)(),a=Object(l.d)((function(t){return t.contract.coops[e.contract.name]}));if(a&&a.fetched){var i=t.goals[a.league]||t.goals;return o.a.createElement("div",{style:e.style,className:r.root},o.a.createElement(c.a,{to:"".concat(n.url,"/").concat(a.coop)}),o.a.createElement(c.b,{path:"".concat(n.path,"/:coopId")},o.a.createElement(f.a,{className:r.type,align:"center",variant:"h4"},a.coop),o.a.createElement(f.a,{className:r.type,align:"center",variant:"h6"},a.league.toUpperCase()),o.a.createElement(Pe.a,{eggsLaid:a.eggs,rewards:i}),o.a.createElement(f.a,{variant:"h5",align:"center"},"Completion Pace ",o.a.createElement(ze.a,{helpText:'The completion pace shows the ratio between your estimated completion time and the remaining time. Aim to keep this under the red "success threshold" line.'})),o.a.createElement(_e.a,{contract:t,rewards:i,coop:a}),o.a.createElement(f.a,{align:"center",variant:"h5"},"Members (",a.members.length,"/",t.coopSize,")"),o.a.createElement(Ue,{coop:a})))}return null},We=Object(p.a)((function(e){return{backButton:{width:"100px"}}}));var He=Object(l.b)((function(e){return{sizeFormat:e.UI.sizeFormat}}))((function(e){var t=Object(c.g)(),r=We();return o.a.createElement(Z.a,{className:r.backButton,variant:"outlined",onClick:t.goBack},"❮ Back")}));function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Ye=Object(p.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateAreas:'\n            "back-button back-button back-button"\n\t\t\t"image image image"\n\t\t\t"title title title"\n            "description description description"\n            "icons icons icons"\n            "search search search"\n\t\t\t"coop coop coop"\n\t\t\t"calc calc calc"\n        ',gridColumnGap:"10px",gridRowGap:"15px",alignItems:"center",margin:25,padding:25,"@media (max-width: 840px)":{margin:"16px 8px",paddingLeft:16,paddingRight:16}}}}));function Ve(e){var t=Ye(),r=Object(l.c)(),n=Object(c.h)().contractId;Object(a.useEffect)((function(){return r(Object(q.f)()),function(){return r(Object(q.c)())}}),[]);var i=Object(c.g)(),u=Object(l.d)((function(e){return e.contract.activeContracts.contracts[n]})),m=Object(l.d)((function(e){return e.contract.coops[n]})),d=Object(l.d)((function(e){return e.contract.activeContracts.fetched})),p=window.location.pathname.split("/"),g=p[p.findIndex((function(e){return e===n}))+1];return g&&!m&&d&&r(Object(q.g)(n,g)),u?o.a.createElement(s.a,{className:t.root},o.a.createElement(He,{style:{gridArea:"back-button"},onClick:function(){i.push(e.match.url),r(Object(q.c)())},to:e.match.url}),o.a.createElement("img",{style:{gridArea:"image",maxWidth:"100%",maxHeight:"100px",margin:"auto"},src:"/images/egg".concat(u.egg,".png")}),o.a.createElement(f.a,{style:{gridArea:"title"},variant:"h4"},u.title),o.a.createElement(f.a,{style:{gridArea:"description"},variant:"subtitle1"},u.description),o.a.createElement(le.a,{contract:u,coop:m}),u.coopAllow&&o.a.createElement(ie,$e({style:{gridArea:"search"}},u.coopSearch,{contractId:n})),o.a.createElement(Fe,{style:{gridArea:"coop"},contract:u}),o.a.createElement(Ne,{style:{gridArea:"calc"},contract:u,coop:m})):null}function qe(e){return o.a.createElement(i.a,{title:"Contracts",shortTitle:"Contracts"},o.a.createElement(c.d,null,o.a.createElement(c.b,{exact:!0,path:"".concat(e.match.path)},o.a.createElement(Q,{match:e.match})),o.a.createElement(c.b,{path:"".concat(e.match.path,"/view/:contractId")},o.a.createElement(n.a,{disableGutters:!0,style:{overflowY:"auto"}},o.a.createElement(Ve,{match:e.match})))))}},354:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"f",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"e",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"i",(function(){return u})),r.d(t,"g",(function(){return s})),r.d(t,"h",(function(){return m})),r.d(t,"a",(function(){return f}));var n=r(98);r(10);function a(e,t){return{type:"SET_FARM",payload:{farm:e,game:t}}}function o(e,t){return{type:"SET_MYSTICAL_EGG",payload:{eggType:e,value:t}}}function c(e){return{type:"SET_EGG",payload:e}}function i(e,t){return{type:"SET_HAB",payload:{hab:e,slot:t}}}function l(e){return{type:"SET_EGGS_SHIPPED",payload:e}}function u(e){return{type:"SET_SILOS",payload:e}}function s(e){return{type:"SET_POPULATION",payload:e}}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"common";return{type:"SET_RESEARCH",payload:{research:e,researchType:t}}}function f(e,t){return{type:"CALCULATE_FARM_STATS",payload:Object(n.a)(e,t)}}},356:function(e,t,r){"use strict";function n(e){var t=new Date("2000-01-01");return Math.floor((e-t)/864e5)}r.d(t,"e",(function(){return n})),r.d(t,"a",(function(){return a.a})),r.d(t,"f",(function(){return a.g})),r.d(t,"h",(function(){return a.k})),r.d(t,"c",(function(){return a.e})),r.d(t,"g",(function(){return a.i})),r.d(t,"d",(function(){return a.f})),r.d(t,"b",(function(){return a.c}));var a=r(98);r(100)},358:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(446),a=r(0),o=r.n(a),c=r(322),i=r.n(c),l=r(10);function u(e){var t=Object(l.d)((function(e){return e.settings.hideTooltips})),r=e.small?"small":"default";return t?null:o.a.createElement(n.a,{title:e.helpText},o.a.createElement(i.a,{fontSize:r,style:{verticalAlign:"text-bottom"},color:"primary"}))}},360:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(433),a=r(0),o=r.n(a),c=r(356);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e){var t=e.children,r=e.value,u=e.onChange,m=e.onBlur,f=e.helpText,d=s(e,["children","value","onChange","onBlur","helpText"]),p=t,g=l(Object(a.useState)(Object(c.c)(r)),2),b=g[0],y=g[1],h=l(Object(a.useState)(r),2),v=h[0],E=h[1],O=l(Object(a.useState)(!1),2),j=O[0],x=O[1];Object(a.useEffect)((function(){x(!1),y(Object(c.c)(r))}),[r]);return o.a.createElement("div",null,o.a.createElement(p,i({},d,{align:"center",value:b,onChange:function(e){var t=e.target.value,r=v,n=b.length>t.length;if(x(!1),Object(c.g)(t))r=Object(c.d)(t),E(r),y(t);else if(/^\d{1,4}(,\d{1,4})*,?$/.test(t))r=t.replace(/\D/g,""),E(r),y(Number(r).toLocaleString());else if(""===t)E(t),y(t);else{if(!n)return void x(!0);x(!0),y(t)}"function"==typeof u&&u(e,r)},onBlur:function(e){m(e,v)}})),o.a.createElement(n.a,{error:j},j?f:" "))}},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),a=r.n(n);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.style,{display:"flex",justifyContent:"space-around",flexDirection:e.column?"column":"row"});return a.a.createElement("div",{style:t,className:e.className},e.children)}},370:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(59),a=r(137),o=r(0),c=r.n(o),i=r(32);function l(e){Object(i.a)();return c.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",flex:"1 1 0px",alignItems:"center",gap:10,justifyContent:"space-between"}},c.a.createElement(a.a,{style:{width:"36px",height:"36px"},fontSize:"large",color:"secondary",component:e.icon}),c.a.createElement(n.a,{variant:"subtitle1"},e.label))}},380:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(314),a=r(446),o=r(0),c=r.n(o),i=r(32),l=(r(363),r(364)),u=r(98);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=Object(i.a)(),r=e.rewards,o=e.eggsLaid||0,f=r[r.length-1].goal,d=Math.min(Math.max(0,o/f*100),100),p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.style,{margin:"10px 20px",borderRadius:10}),g="linear-gradient(to right, ".concat(t.palette.primary.light,", ").concat(t.palette.secondary.light,")"),b=r.map((function(e,t){return c.a.createElement(l.Step,{key:t,transition:"scale"},(function(t){var r=t.accomplished,n=(t.index,{filter:["drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))",r?null:"grayscale(0.7)"].join(" "),transform:r?"scale(1.2)":null,pointerEvents:"none"});return c.a.createElement(a.a,{arrow:!0,title:"".concat(Object(u.j)(o/e.goal,0,!0)," completed"),placement:"top",enterTouchDelay:400},c.a.createElement("div",null,c.a.createElement("img",{width:40,src:Object(u.h)(e).path,style:n})))}))}));return c.a.createElement(a.a,{arrow:!0,title:"".concat(Object(u.e)(o),"/").concat(Object(u.e)(f))},c.a.createElement(n.a,{elevation:4,style:p},c.a.createElement(l.ProgressBar,{height:20,percent:d,unfilledBackground:t.palette.background.off,filledBackground:g,stepPositions:r.map((function(e){return e.goal/f*100}))},b)))}},381:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r(314),a=r(349),o=r(59),c=r(0),i=r.n(c),l=r(98),u=r(364),s=(r(363),r(96)),m=r(32),f=r(358),d=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,border:1,borderStyle:"none",borderColor:e.palette.grey[300],borderRadius:10,margin:"10px 0px",display:"block"},main:{position:"relative",borderRadius:"inherit"},divider:{position:"absolute",width:2,height:"100%",left:"calc(50% - 1px)",zIndex:10,backgroundColor:e.palette.secondary.main,boxShadow:e.shadows[4]},progress:{clear:"both",height:30,"& div":{borderRadius:"unset !important","& div":{borderRadius:"unset !important"}}},estimate:{textAlign:"left",float:"left",maxWidth:"45%",marginLeft:10},expiry:{textAlign:"right",float:"right",maxWidth:"45%",marginRight:10},title:{},value:{},overlay:{position:"absolute",display:"grid",alignItems:"center",height:"100%",width:"100%",borderRadius:"inherit",backgroundColor:e.palette.background.offOverlay,zIndex:99},tip:{clear:"both"}}}));function p(e){var t=d(),r=Object(m.a)();return void 0===e.completed?null:i.a.createElement("div",{className:t.overlay},i.a.createElement(o.a,{variant:"h5",align:"center",style:{color:e.completed?r.palette.success.main:r.palette.error.main}},e.completed?"Contract Completed!":"Contract Failed!"))}function g(e){var t,r,c,s=d(),g=Object(m.a)(),b=e.rewards;if(e.coop)t=e.coop.members.reduce((function(e,t){return e+t.rate}),0),r=b[b.length-1].goal-e.coop.eggs,c=e.coop.timeLeft;else{if(!e.data)return null;t=e.data.layingRate,r=b[b.length-1].goal-e.data.eggsLaid,c=e.data.timeLeft}var y=r/t;y===1/0&&(y=Number.MAX_SAFE_INTEGER);var h,v=y/(y+c)*100,E=g.palette.warning.main;v>65?E=g.palette.error.main:v<=50&&(E=g.palette.success.main),r<=0?(h=!0,v=0):c<=0&&(h=!1,v=0);return i.a.createElement(n.a,{style:e.style,className:s.root},i.a.createElement("div",{className:s.main},i.a.createElement(p,{completed:h}),i.a.createElement(o.a,{variant:"body2",className:"".concat(s.estimate," ").concat(s.title)},"Completion Estimate ",i.a.createElement(f.a,{small:!0,helpText:"Time to complete final goal at current rate"})),i.a.createElement(o.a,{variant:"body2",className:"".concat(s.expiry," ").concat(s.title)},"Contract Time Left ",i.a.createElement(f.a,{small:!0,helpText:"Time remaining on contract"})),i.a.createElement("div",{className:s.divider}),i.a.createElement("div",{className:s.progress},i.a.createElement(u.ProgressBar,{height:"100%",percent:v,unfilledBackground:g.palette.background.off,filledBackground:E})),i.a.createElement(o.a,{variant:"body2",className:"".concat(s.estimate," ").concat(s.value)},y>31536e3?"A very long time":Object(l.d)(y)),i.a.createElement(o.a,{variant:"body2",className:"".concat(s.expiry," ").concat(s.value)},Object(l.d)(c)),i.a.createElement("div",{style:{clear:"both"}})),v>50&&i.a.createElement(a.a,{style:{clear:"both"}}),i.a.createElement(o.a,{align:"center",variant:"body2",className:s.tip},v>50?"Tip: ".concat(Object(l.e)(r/c),"/s required to reach success threshold."):null))}},382:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(373),a=r.n(n),o=r(372),c=r.n(o),i=r(371),l=r.n(i),u=r(0),s=r.n(u),m=r(369),f=r(370),d=r(98);function p(e){var t=e.contract,r=e.coop,n=function(){if(t.coopSize){var e=t.coopSize;if(r&&r.members)return r.members.length+"/"+e}return"0"}();return s.a.createElement(m.a,{style:{gridArea:"icons"}},s.a.createElement(f.a,{icon:l.a,label:d.d(t.duration,!0)}),s.a.createElement(f.a,{icon:c.a,label:n}),s.a.createElement(f.a,{icon:a.a,label:t.boostTokenInterval?"".concat(t.boostTokenInterval," min"):"No Boosts"}))}},385:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r(447),a=r(449),o=r(431),c=r(59),i=r(0),l=r.n(i),u=r(96),s=r(10),m=r(354);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=Object(u.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"56px 1fr",gridTemplateAreas:'\n\t\t\t"image name"\n\t\t\t"input slider"\n\t\t\t"description description"\n        ',alignItems:"center",justifyItems:"center",gridGap:10,padding:"0px 4px","& >img":{width:"100%"}},image:{gridArea:"image"},name:{gridArea:"name",justifySelf:"left"},description:{gridArea:"description",justifySelf:"left"},input:{gridArea:"input",width:"100%",marginBottom:20},inputOverride:{textAlign:"center"},slider:{gridArea:"slider",maxWidth:500,marginRight:6},sliderLabel:{gridArea:"slider",position:"relative",textAlign:"right",width:"100%",maxWidth:500,top:28}}}));function g(e){var t,r,u=p(),d=Object(s.c)(),g=e.research;"epic"===e.tier?(t=Object(s.d)((function(e){return e.farmValue.game.epicResearch[g.id]})),r="epic"):(t=Object(s.d)((function(e){return e.farmValue.farm.commonResearch[g.id]})),r="common");var b=e.dispatchAction||function(e){return Object(m.h)(function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},g.id,e),r)},y=f(Object(i.useState)(t),2),h=y[0],v=y[1];e.dispatchAction&&d(e.dispatchAction(t)),Object(i.useEffect)((function(){return v(t)}),[t]);var E=function(e){d(b(e))};return l.a.createElement("div",{className:u.root},l.a.createElement("img",{className:u.image,src:"/images/r_icon_".concat(g.id,".png")}),l.a.createElement(c.a,{className:u.name,variant:"h6"},g.name),l.a.createElement(c.a,{className:u.description,variant:"subtitle2"},g.description),l.a.createElement(o.a,{type:"number",min:0,max:g.maxLevel,className:u.input,classes:{input:u.inputOverride},value:h,onChange:function(e){v(Number(e.target.value)||0)},onBlur:function(e){var t=Number(e.target.value)||0;t<0?t=0:t>g.maxLevel&&(t=g.maxLevel),v(t),E(t)},"aria-label":g.name}),l.a.createElement(a.a,{className:u.slider,value:Number(h)||0,onChange:function(e,t){return v(t)},onChangeCommitted:function(e,t){E(t)},min:0,max:g.maxLevel,color:"secondary","aria-label":g.name}),l.a.createElement(n.a,{className:u.sliderLabel},g.maxLevel))}}}]);