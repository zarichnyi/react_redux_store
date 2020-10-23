(this.webpackJsonpreact_redux_store=this.webpackJsonpreact_redux_store||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=a(34),i=a(14),u=a(40),m=a(80),s=[],p=function(e){return{type:"setItems",items:e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setItems":return t.items;case"addItem":var a=[].concat(Object(m.a)(e),[t.item]);return localStorage.setItem("items",JSON.stringify(a)),a;case"removeItem":var n=e.filter((function(e){return e.id!==t.id}));return 0===n.length&&localStorage.setItem("emptyStorage",JSON.stringify(["Products are currently missing"])),localStorage.setItem("items",JSON.stringify(n)),n;case"clearCatalog":return localStorage.setItem("emptyStorage",JSON.stringify(["Products are currently missing"])),localStorage.removeItem("items"),[];default:return e}},g=function(e){return{type:"setUser",user:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"user",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setUser":return localStorage.setItem("user",JSON.stringify(t.user)),t.user;default:return e}},b=Object(u.b)({items:d,users:f}),E=Object(u.c)(b),O=a(12),v=a(22),h=a(151),y=a(4),j=a(79),S=a(173),N=a(77),C=a.n(N),x=a(161),I=a(162),k=a(157),w=a(170),B=a(71),J=a.n(B),z=a(169),A=a(172),D=a(158),F=a(155),M=a(156),T=a(154),U=Object(h.a)((function(){return{formInput:{marginBottom:"20px"},formButton:{marginTop:"20px"},uploadButton:{display:"none"}}})),_=function(e){var t=e.open,a=e.setOpen,c=Object(i.c)((function(e){return e.users})),o=Object(i.b)(),l=U(),u=Object(n.useState)(""),m=Object(v.a)(u,2),s=m[0],p=m[1],d=Object(n.useState)(""),g=Object(v.a)(d,2),f=g[0],b=g[1],E=Object(n.useState)(""),O=Object(v.a)(E,2),h=O[0],y=O[1],j=Object(n.useState)(""),S=Object(v.a)(j,2),N=S[0],C=S[1];return r.a.createElement(A.a,{open:t,"aria-labelledby":"form-dialog-title"},r.a.createElement(T.a,{id:"form-dialog-title"},"Add product"),"admin"===c?r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o({type:"addItem",item:{id:+Date.now(),title:s,image:N,description:f,price:h}}),p(""),b(""),C(""),y(""),a(!1)}},r.a.createElement(F.a,null,r.a.createElement(M.a,null,"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u043d\u0430\u0437\u0432\u0443, \u043e\u043f\u0438\u0441 \u0442\u0430 \u0446\u0456\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0443. \u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043d\u0435\u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0430."),r.a.createElement("div",{className:l.formInput},r.a.createElement(z.a,{autoFocus:!0,value:s,onChange:function(e){var t=e.target;return p(t.value)},margin:"dense",id:"title",label:"Title product",type:"text",fullWidth:!0,required:!0})),r.a.createElement("div",null,r.a.createElement(z.a,{onChange:function(e){var t=e.target;return b(t.value)},value:f,id:"outlined-multiline-static",label:"Description",multiline:!0,rows:6,variant:"outlined",fullWidth:!0,required:!0})),r.a.createElement("div",{className:l.formInput},r.a.createElement(z.a,{onChange:function(e){var t=e.target;return y(t.value)},value:h,margin:"dense",id:"price",label:"Price",type:"number",required:!0})),r.a.createElement("div",{className:l.formButton},r.a.createElement(k.a,{variant:"contained",component:"label"},"Upload File",r.a.createElement("input",{onChange:function(e){return function(e){var t=new FileReader,a=e.target.files[0];t.readAsDataURL(a),t.onloadend=function(){C(t.result)}}(e)},type:"file",className:l.uploadButton})))),r.a.createElement(D.a,null,r.a.createElement(k.a,{onClick:function(){return a(!1)},color:"primary"},"Cancel"),r.a.createElement(k.a,{type:"submit"},"Submit"))):r.a.createElement(F.a,null,r.a.createElement(M.a,null,"Only admin can add product"),r.a.createElement(k.a,{onClick:function(){return a(!1)},color:"secondary",size:"large",variant:"contained"},"OK")))},W=a(159),q=a(160),G=a(75),L=a.n(G),P=a(76),R=a.n(P),K=Object(h.a)((function(e){return{}})),H=Object(y.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(j.a,Object.assign({getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),Q=function(){var e=K(),t=Object(n.useState)(null),a=Object(v.a)(t,2),c=a[0],o=a[1],l=Object(i.b)(),u=function(){o(null)};return r.a.createElement("div",{className:e.logIn},r.a.createElement(k.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){o(e.currentTarget)}},"Log as"),r.a.createElement(H,{id:"customized-menu",anchorEl:c,open:Boolean(c),onClose:u},r.a.createElement(S.a,{onClick:function(){l(g("admin")),u()}},r.a.createElement(W.a,null,r.a.createElement(L.a,{fontSize:"small"})),r.a.createElement(q.a,{primary:"Admin"})),r.a.createElement(S.a,{onClick:function(){l(g("user")),u()}},r.a.createElement(W.a,null,r.a.createElement(R.a,{fontSize:"small"})),r.a.createElement(q.a,{primary:"User"}))))},V=Object(h.a)((function(){return{appbar:{backgroundColor:"#122538",height:"75px",display:"flex",justifyContent:"center"},burgerButton:{marginLeft:"20px"},toolbar:{justifyContent:"space-between"},toolbarItems:{display:"flex"},link:{textDecoration:"none",color:"black"},menuIcon:{padding:"2px 0"},clearCatalogBtn:{margin:"0 40px"}}})),X=Object(y.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return r.a.createElement(j.a,Object.assign({getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),Y=function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],c=t[1],o=Object(i.c)((function(e){return e.users})),u=Object(i.b)(),m=V(),s=Object(n.useState)(null),p=Object(v.a)(s,2),d=p[0],g=p[1],f=function(){g(null)};return r.a.createElement(x.a,{position:"relative",className:m.appbar},r.a.createElement(I.a,{className:m.toolbar},r.a.createElement("div",{className:m.toolbarItems},r.a.createElement(w.a,{component:"img",src:J.a}),r.a.createElement("div",{className:m.burgerButton},r.a.createElement(k.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){g(e.currentTarget)}},r.a.createElement(C.a,{className:m.menuIcon})),r.a.createElement(X,{id:"customized-menu",anchorEl:d,open:Boolean(d),onClose:f},r.a.createElement(S.a,{onClick:function(){f()}},r.a.createElement(l.b,{to:"/",className:m.link},"Main page")),r.a.createElement(S.a,{onClick:function(){f()}},r.a.createElement(l.b,{to:"/catalog",className:m.link},"Catalog")))),r.a.createElement(k.a,{type:"button",variant:"contained",className:m.clearCatalogBtn,onClick:function(){return u({type:"clearCatalog"})},disabled:"admin"!==o},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433"),r.a.createElement(k.a,{type:"button",onClick:function(){return c(!0)},variant:"contained"},"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u043e\u0432\u0430\u0440")),r.a.createElement(Q,null)),r.a.createElement(_,{open:a,setOpen:c}))},Z=a(163),$=a(168),ee=a(38),te=a(164),ae=a(166),ne=a(165),re=a(167),ce=Object(h.a)((function(e){return{card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}})),oe=function(e){var t=e.image,a=e.title,n=e.description,c=e.id,o=Object(i.b)(),l=ce(),u=Object(i.c)((function(e){return e.users}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(te.a,{className:l.card},r.a.createElement(ne.a,{className:l.cardMedia,image:t,title:a}),r.a.createElement(ae.a,{className:l.cardContent},r.a.createElement(ee.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),r.a.createElement(ee.a,null,n)),r.a.createElement(re.a,null,"admin"===u&&r.a.createElement(k.a,{size:"small",color:"primary",onClick:function(){return o(function(e){return{type:"removeItem",id:e}}(c))}},"Delete")))))},le=Object(h.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:"100px"},warningMsg:{margin:"0 auto"}}})),ie=function(){var e=le(),t=Object(i.c)((function(e){return e.items}));return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{className:e.cardGrid,maxWidth:"md"},r.a.createElement(Z.a,{container:!0,spacing:4},t.length&&t.map((function(e){return r.a.createElement(oe,Object.assign({},e,{key:e.id}))}))||JSON.parse(localStorage.getItem("emptyStorage"))&&r.a.createElement(ee.a,{variant:"h4",className:e.warningMsg},JSON.parse(localStorage.getItem("emptyStorage"))))))},ue=a(82),me=Object(h.a)((function(e){return{footer:{backgroundColor:e.palette.grey[300],padding:e.spacing(3),justifyContent:"space-between",width:"100vw",position:"fixed",bottom:"0"},grid:{justifyContent:"center"},paper:{padding:e.spacing(1),textAlign:"center",fontWeight:"bold",whiteSpace:"nowrap",marginBottom:e.spacing(1),fontFamily:"Roboto"}}})),se=function(){var e=Object(i.c)((function(e){return e.items})),t=me(),a=e.map((function(e){return+e.price})).reduce((function(e,t){return e+t}),0),n=e.length>0?Math.round(a/e.length*100)/100:0;return r.a.createElement("footer",{className:t.footer},r.a.createElement(Z.a,{className:t.grid,container:!0,spacing:3},r.a.createElement(Z.a,{item:!0,xs:3},r.a.createElement(ue.a,{className:t.paper},"Number items : ".concat(e.length))),r.a.createElement(Z.a,{item:!0,xs:3},r.a.createElement(ue.a,{className:t.paper},"Sum price of items : ".concat(a))),r.a.createElement(Z.a,{item:!0,xs:3},r.a.createElement(ue.a,{className:t.paper},"Avarage price of items :\n            ".concat(n)))))},pe=a(61),de=a.n(pe),ge=a(78),fe=function(){var e=Object(ge.a)(de.a.mark((function e(){var t,a;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://my-json-server.typicode.com/zarichnyi/","data/items"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=(a(107),function(){var e=Object(i.b)();return Object(n.useEffect)((function(){fe().then((function(t){JSON.parse(localStorage.getItem("items"))?e(p(JSON.parse(localStorage.getItem("items")))):JSON.parse(localStorage.getItem("emptyStorage"))?e(p([])):e(p(t)),JSON.parse(localStorage.getItem("user"))&&e(g(JSON.parse(localStorage.getItem("user"))))}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(Y,null),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/catalog",component:ie})),r.a.createElement(se,null))});o.a.render(r.a.createElement(l.a,null,r.a.createElement(i.a,{store:E},r.a.createElement(be,null))),document.getElementById("root"))},71:function(e,t,a){e.exports=a.p+"static/media/logo_n.9d3a451c.svg"},95:function(e,t,a){e.exports=a(108)}},[[95,1,2]]]);
//# sourceMappingURL=main.c2560907.chunk.js.map