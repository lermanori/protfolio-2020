(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(t,e,n){var content=n(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("6684e0ac",content,!0,{sourceMap:!1})},184:function(t,e,n){"use strict";var c=n(1).a.extend({props:["name"]}),l=n(20),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"text-6xl lg:text-7xl font-vermin text-white -mt-16"},[this._v(this._s(this.name))])}),[],!1,null,"91687b78",null);e.a=component.exports},185:function(t,e,n){"use strict";var c=n(182);n.n(c).a},186:function(t,e,n){(e=n(46)(!1)).push([t.i,".a[data-v-14dd8b72]{fill:none;stroke:#fff;stroke-width:5px}",""]),t.exports=e},187:function(t,e,n){"use strict";n(33);var c=n(5),l=n(1),r=l.a.extend({props:["color","text"]}),o=n(20),d=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:["leading-none","w-full","font-vermin","text-"+t.color+"-400","px-4","py-1","border-2","border-"+t.color+"-400"],on:{click:function(e){return t.$emit("click")}}},[t._v("\n    "+t._s(t.text)+"\n")])}),[],!1,null,"01d137e8",null).exports,m=n(34),f=n.n(m),h=l.a.extend({data:function(){return{clicked:!1,contactName:"",contactMail:"",contactPhone:"",contactMessage:""}},components:{myBtn:d},methods:{send_mail:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var body;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:3000/users/dani_krol/contact",body={name:t.contactName,mail:t.contactMail,phone:t.contactPhone,body:t.contactMessage},e.next=4,f.a.post("http://localhost:3000/users/dani_krol/contact",body);case 4:e.sent,t.clicked=!1;case 6:case"end":return e.stop()}}),e)})))()}}}),x=(n(185),Object(o.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["absolute","top-0","right-0",t.clicked?"w-3/5":"","bg-black","z-20"]},[t.clicked?t._e():n("my-btn",{staticClass:"text-xl lg:text-4xl xl:text-5xl",attrs:{color:"green",text:"lets talk"},on:{click:function(e){t.clicked=!0}}}),t._v(" "),t.clicked?n("div",{staticClass:"relative border-2 border-green-400 pb-6"},[n("div",{staticClass:"absolute top-0 ml-2 mt-2 h-6 w-6 cursor-pointer",on:{click:function(e){t.clicked=!1}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 34.477 33.593"}},[n("g",{attrs:{transform:"translate(-3482.761 -1101.703)"}},[n("line",{staticClass:"a",attrs:{x2:"31",y2:"30",transform:"translate(3484.5 1103.5)"}}),t._v(" "),n("line",{staticClass:"a",attrs:{x1:"31",y2:"30",transform:"translate(3484.5 1103.5)"}})])])]),t._v(" "),n("h1",{staticClass:"text-white text-4xl font-agency text-center my-2"},[t._v("hey lets talk")]),t._v(" "),n("div",{staticClass:"relative left-0 flex text-white justify-center"},[n("div",{staticClass:"w-1/2 flex flex-col items-base mx-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactName,expression:"contactName"}],staticClass:"text-lg w-full mx-auto mb-4 mt-3 p-2 font-agency text-black",attrs:{placeholder:"Name"},domProps:{value:t.contactName},on:{input:function(e){e.target.composing||(t.contactName=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactMail,expression:"contactMail"}],staticClass:"text-lg w-full mx-auto mb-4 mt-3 p-2 font-agency text-black",attrs:{placeholder:"Mail"},domProps:{value:t.contactMail},on:{input:function(e){e.target.composing||(t.contactMail=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactPhone,expression:"contactPhone"}],staticClass:"text-lg w-full mx-auto mb-2 mt-3 p-2 font-agency text-black",attrs:{placeholder:"Phone (if you want)"},domProps:{value:t.contactPhone},on:{input:function(e){e.target.composing||(t.contactPhone=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"w-1/2 flex flex-col items-base mx-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactMessage,expression:"contactMessage"}],staticClass:"text-lg w-full h-full mx-auto mb-2 mt-3 p-2 font-agency text-black",attrs:{placeholder:"Message"},domProps:{value:t.contactMessage},on:{input:function(e){e.target.composing||(t.contactMessage=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex justify-end mr-4"},[n("button",{staticClass:"bg-green-400 text-xl text-white px-3 py-1",on:{click:t.send_mail}},[t._v("send")])])]):t._e()],1)}),[],!1,null,"14dd8b72",null));e.a=x.exports},188:function(t,e,n){"use strict";var c=n(1).a.extend({props:["bio"]}),l=n(20),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"text-green-400 text-3xl lg:text-5xl text-center font-agency",style:{textAlign:"center"},domProps:{innerHTML:this._s(this.bio)}})}),[],!1,null,"0465d0b2",null);e.a=component.exports},189:function(t,e,n){"use strict";var c=n(1).a.extend({}),l=n(20),component=Object(l.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-2xl font-vermin text-green-400"},[e("div",[this._v("scroll")]),this._v(" "),e("div",{staticClass:"text-white"},[this._v("|")])])}],!1,null,"a9df601e",null);e.a=component.exports},192:function(t,e,n){"use strict";var c=n(1),l=c.a.extend({props:["item"],methods:{handle_click:function(){this.$emit("clicked",this.item)}}}),r=n(20),o=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/3 border-2 border-black px-4 py-1 h-32 lg:h-64 flex items-center justify-center",on:{click:this.handle_click}},[e("div",{staticClass:"text-xl lg:text-3xl font-vermin text-center"},[this._v(this._s(this.item.title))])])}),[],!1,null,"c1e02468",null).exports,d=c.a.extend({props:["gridItems"],components:{gridItem:o},methods:{handle_click:function(t){this.$emit("clicked",t)}}}),m=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap"},t._l(t.gridItems,(function(e){return n("gridItem",{key:e.id,staticClass:"cursor-pointer",attrs:{item:e},on:{clicked:t.handle_click}})})),1)}),[],!1,null,"3011a841",null);e.a=m.exports},195:function(t,e,n){"use strict";n.r(e);n(33);var c=n(5),l=n(1),r=n(187),title=n(184),o=n(189),d=l.a.extend({props:["name"],data:function(){return{scrolled:!1}},components:{titleApp:title.a,scrollApp:o.a},mounted:function(){var t=this;window.addEventListener("scroll",(function e(){t.scrolled=!0,window.removeEventListener("scroll",e)}))}}),m=n(20),f=Object(m.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"h-screen bg-black"},[e("div",{staticClass:"h-full flex justify-center items-end"},[e("div",{staticClass:"text-center flex flex-col justify-between",staticStyle:{height:"50%"}},[e("titleApp",{attrs:{name:this.name}}),this._v(" "),this.scrolled?this._e():e("scrollApp")],1)])])}),[],!1,null,"4b00bd78",null).exports,h=n(188),x=l.a.extend({props:["bio"],components:{appBio:h.a}}),v=Object(m.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-black text-white py-16 h-half-screen lg:h-screen"},[e("div",{staticClass:"h-full flex items-center justify-center"},[e("appBio",{attrs:{bio:this.bio}})],1)])}),[],!1,null,"075cfd37",null).exports,_=n(192),k=l.a.extend({props:["gridItems"],components:{grid:_.a},methods:{handle_click:function(t){var e="/category/".concat(t.id);this.$router.push(e)}}}),w=Object(m.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-black"},[e("grid",{staticClass:"bg-green-400",attrs:{gridItems:this.gridItems},on:{clicked:this.handle_click}})],1)}),[],!1,null,"0652ba6b",null).exports,C=l.a.extend({props:["name","bio","gridItems"],components:{openSection:f,bioSection:v,gridSkillsSection:w}}),y=Object(m.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("open-section",{attrs:{name:this.name}}),this._v(" "),e("bio-section",{attrs:{bio:this.bio}}),this._v(" "),e("grid-skills-section",{attrs:{gridItems:this.gridItems}})],1)}),[],!1,null,"e47c4ea6",null).exports,j=n(34),$=n.n(j),E=l.a.extend({asyncData:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.a.get("http://localhost:3000/users/dani_krol");case 2:return e=t.sent,n=e.data,t.abrupt("return",{user:n});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{name:"DANIELA KROL",bio:"I'm a freelance artist from Tel Aviv.<br>\n         I do Graphic design, Web design,<br>\n          3D art and AR filters",gridItems:["graphic design","web design","3d art","AR filters","cv","fun stuff"]}},components:{absoluteContactButton:r.a,homepage:y}}),M=Object(m.a)(E,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("absoluteContactButton"),this._v(" "),e("homepage",{attrs:{name:this.name,bio:this.bio,gridItems:this.user.projects}})],1)}),[],!1,null,"146c87e0",null);e.default=M.exports}}]);