(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,4],{426:function(t,e,n){var content=n(430);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("a291f4ba",content,!0,{sourceMap:!1})},427:function(t,e,n){"use strict";n.r(e);n(23),n(184);var r=n(90),o={props:{item:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,mdiMagnify:r.d}},methods:{generateSrcset:function(t){return"\n        ".concat(t.small.url," 480w,\n        ").concat(t.medium.url," 800w,\n        ").concat(t.large.url," 1000w\n      ")}}},l=(n(429),n(70)),c=n(81),d=n.n(c),m=n(435),v=n(425),f=n(487),_=n(176),h=n(150),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item.image?n("v-dialog",{attrs:{width:"unset"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-img",{staticClass:"avatar-img",attrs:{srcset:t.generateSrcset(t.item.image.formats),sizes:"(max-width: 1000px) 480px, 800px, 1000px",src:t.item.image.formats.small.url,"lazy-src":t.item.image.formats.thumbnail.url}}),t._v(" "),n("v-icon",t._g({staticClass:"item-magnify"},r),[t._v(t._s(t.mdiMagnify))])]}}],null,!1,406426065),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("img",{staticClass:"dialog-popup-img",attrs:{srcset:t.generateSrcset(t.item.image.formats),sizes:"(max-width: 1000px) 480px, 800px, 1000px",src:t.item.image.formats.small.url}}),t._v(" "),n("v-card-text",{staticClass:"text-center font-weight-bold",domProps:{textContent:t._s(t.item.name)}})],1)],1):t._e()}),[],!1,null,"33497e32",null);e.default=component.exports;d()(component,{VCard:m.a,VCardText:v.b,VDialog:f.a,VIcon:_.a,VImg:h.a})},428:function(t,e,n){var content=n(437);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("56786512",content,!0,{sourceMap:!1})},429:function(t,e,n){"use strict";n(426)},430:function(t,e,n){var r=n(14)(!1);r.push([t.i,".item-magnify[data-v-33497e32]{position:absolute;width:100%;height:100%;opacity:0}.item-magnify[data-v-33497e32]:hover{opacity:1}.dialog-popup-img[data-v-33497e32]{width:100%}.avatar-img[data-v-33497e32]{border-top-right-radius:4px;border-bottom-right-radius:4px}",""]),t.exports=r},431:function(t,e,n){"use strict";n.r(e);n(23),n(184);var r=n(90),o={components:{MenuDialog:n(427).default},props:{categories:{type:Array,default:function(){return[]}}},data:function(){return{mdiChiliMild:r.b}},methods:{generateSrcset:function(t){return"\n        ".concat(t.small.url," 480w,\n        ").concat(t.medium.url," 800w,\n        ").concat(t.large.url," 1000w\n      ")}}},l=(n(436),n(70)),c=n(81),d=n.n(c),m=n(179),v=n(435),f=n(425),_=n(414),h=n(424),x=n(176),w=n(416),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"px-0 px-xl-16"},t._l(t.categories,(function(e){return n("div",{key:e.id,staticClass:"mt-8",attrs:{dense:""}},[n("span",{staticClass:"anchor",attrs:{id:e.slug}}),t._v(" "),n("h1",{staticClass:"text-center"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"mb-2",attrs:{align:"center"},domProps:{innerHTML:t._s(e.html)}}),t._v(" "),n("v-row",{attrs:{dense:""}},t._l(e.menu_items,(function(r){return n("v-col",{key:r.id,attrs:{cols:"12",sm:"12",md:"12",lg:"6"}},[n("v-card",[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("div",[n("v-card-title",{staticClass:"headline text-subtitle-1 font-weight-bold"},[t._v(t._s(r.name)+"\n              ")]),t._v(" "),n("v-card-subtitle",{staticClass:"py-0 other-lang-name",domProps:{textContent:t._s([r.chinese_name,r.vietnamese_name].filter(Boolean).join(" | "))}}),t._v(" "),n("v-card-subtitle",{staticClass:"py-0 item-description",domProps:{textContent:t._s(r.description)}})],1),t._v(" "),n("v-avatar",{staticClass:"align-self-end",attrs:{height:"125","min-width":"150","max-width":t.$vuetify.breakpoint.xs?150:250,width:"auto",tile:""}},[n("menu-dialog",{attrs:{item:r}})],1),t._v(" "),n("div",{staticClass:"item-price font-weight-bold rounded px-1"},[0===r.base_price?n("span",[t._v("M.P.")]):"Luncheon"===e.name?n("span",[t._v("$"+t._s(r.special_price.toFixed(2)))]):n("span",[t._v("\n                $"+t._s(r.base_price.toFixed(2))+"\n                "),r.large_price?n("span",[t._v("\n                  / $"+t._s(r.large_price.toFixed(2))+"\n                ")]):t._e()])]),t._v(" "),n("div",{staticClass:"item-modifiers"},[r.spicy?n("v-icon",{staticClass:"item-spicy rounded",attrs:{color:"red"}},[t._v("\n                "+t._s(t.mdiChiliMild)+"\n              ")]):t._e(),t._v(" "),r.gluten_free?n("span",{staticClass:"item-gluten rounded white--text font-weight-bold"},[t._v("\n                Gluten Free\n              ")]):t._e()],1)],1)])],1)})),1)],1)})),0)}),[],!1,null,"3294b976",null);e.default=component.exports;d()(component,{MenuDialog:n(427).default}),d()(component,{VAvatar:m.a,VCard:v.a,VCardSubtitle:f.a,VCardTitle:f.c,VCol:_.a,VContainer:h.a,VIcon:x.a,VRow:w.a})},436:function(t,e,n){"use strict";n(428)},437:function(t,e,n){var r=n(14)(!1);r.push([t.i,".anchor[data-v-3294b976]{display:block;position:relative;top:-150px;visibility:hidden}.v-card__text[data-v-3294b976],.v-card__title[data-v-3294b976]{word-break:normal}.item-price[data-v-3294b976]{top:16px;background-color:hsla(0,0%,100%,.85)}.item-modifiers[data-v-3294b976],.item-price[data-v-3294b976]{position:absolute;right:16px;pointer-events:none}.item-modifiers[data-v-3294b976]{bottom:16px;z-index:1}.item-modifiers .item-gluten[data-v-3294b976]{background-color:#4caf50;padding:.25em}.item-modifiers .item-spicy[data-v-3294b976]{background-color:#fff}.item-description[data-v-3294b976]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@media only screen and (max-width:959px){.v-card__title[data-v-3294b976]{line-height:1em;padding-bottom:0}.other-lang-name[data-v-3294b976]{display:none}.item-description[data-v-3294b976]{-webkit-line-clamp:3}}",""]),t.exports=r},491:function(t,e,n){"use strict";n.r(e);n(58),n(34);var r={components:{MenuListing:n(431).default},props:{categories:{type:Array,default:function(){return[]}}},computed:{filteredCategories:function(){return this.categories.filter((function(t){return"luncheon"===t.name.toLowerCase()}))}},head:function(){return{title:"Lunch Special",meta:[{hid:"description",name:"description",content:"Lunch special menu for Zien Hong restaurant."}]}}},o=n(70),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("menu-listing",{attrs:{categories:t.filteredCategories}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MenuListing:n(431).default})}}]);