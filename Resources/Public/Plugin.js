(()=>{var N=Object.create;var W=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,J=Object.prototype.hasOwnProperty;var w=(t,e)=>()=>(t&&(e=t(t=0)),e);var h=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var V=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of E(e))!J.call(t,i)&&i!==o&&W(t,i,{get:()=>e[i],enumerable:!(s=v(e,i))||s.enumerable});return t};var m=(t,e,o)=>(o=t!=null?N(S(t)):{},V(e||!t||!t.__esModule?W(o,"default",{value:t,enumerable:!0}):o,t));function a(t){return(...e)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${t}`])return window["@Neos:HostPluginAPI"][`@${t}`](...e);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var u=w(()=>{});var O=h((mt,A)=>{u();A.exports=a("vendor")().React});var Y=h((It,y)=>{u();y.exports=a("NeosProjectPackages")().NeosUiDecorators});var G=h((Wt,B)=>{u();B.exports=a("NeosProjectPackages")().ReactUiComponents});u();var z=a("manifest");var c=m(O()),X=m(Y()),_=m(G());var n={highlight:"Yzq_9W_highlight",W:"Yzq_9W_W",northEast:"Yzq_9W_northEast",south:"Yzq_9W_south",button:"Yzq_9W_button",north:"Yzq_9W_north",southEast:"Yzq_9W_southEast",E:"Yzq_9W_E",northWest:"Yzq_9W_northWest",west:"Yzq_9W_west",east:"Yzq_9W_east",SW:"Yzq_9W_SW",active:"Yzq_9W_active",N:"Yzq_9W_N",NE:"Yzq_9W_NE",NW:"Yzq_9W_NW",C:"Yzq_9W_C",SE:"Yzq_9W_SE",center:"Yzq_9W_center",S:"Yzq_9W_S",editor:"Yzq_9W_editor",southWest:"Yzq_9W_southWest"};function x(t){var e,o,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(o=x(t[e]))&&(s&&(s+=" "),s+=o)}else for(o in t)t[o]&&(s&&(s+=" "),s+=o);return s}function R(){for(var t,e,o=0,s="",i=arguments.length;o<i;o++)(t=arguments[o])&&(e=x(t))&&(s&&(s+=" "),s+=e);return s}var f=R;var M=(0,X.neos)(t=>({i18nRegistry:t.get("i18n"),config:t.get("frontendConfiguration").get("Carbon.RangeEditor")})),H={propertyMapping:!1,north:!0,east:!0,south:!0,west:!0,northEast:!0,northWest:!0,southEast:!0,southWest:!0,center:!0,disabled:!1};function j(t){let e={...H,...t.config,...t.options},{value:o,highlight:s,i18nRegistry:i}=t,{disabled:p}=e,[l,I]=(0,c.useState)(o);(0,c.useEffect)(()=>{I(Z(o))},[o]);function Z(r){if(e.propertyMapping){let g=Object.keys(e.propertyMapping).find(d=>e.propertyMapping[d]===r);if(g)return g}return r}function F(r){return e?.propertyMapping?.[r]||r}function b(r){I(r),r=F(r),r==="center"&&(r=""),t.commit(r)}return c.default.createElement("div",{className:f(n.editor,p&&n.editorDisabled)},Object.entries(e).map(([r,g])=>{if(!g||r==="disabled"||r==="propertyMapping")return null;let d=typeof g=="string"?i.translate(g):null;return r==="center"?c.default.createElement("button",{type:"button",className:f(n.button,n[r],(!l||l=="center")&&(s?n.highlight:n.active)),onClick:()=>b("center"),disabled:p,title:d},c.default.createElement(_.Icon,{icon:"dot-circle"})):c.default.createElement("button",{type:"button",className:f(n.button,n[r],l===r&&(s?n.highlight:n.active)),onClick:()=>b(r),disabled:p,title:d},c.default.createElement(_.Icon,{icon:"chevron-up"}))}))}var q=M(j);z("Carbon.DirectionEditor:Editor",{},t=>{t.get("inspector").get("editors").set("Carbon.DirectionEditor/Editor",{component:q})});})();
//# sourceMappingURL=Plugin.js.map
