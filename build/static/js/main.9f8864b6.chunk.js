(this.webpackJsonpbook=this.webpackJsonpbook||[]).push([[0],{83:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(10),i=n.n(o),r=(n(83),n(64)),s=n(53),l=n(16),d=n(145),j=n(135),u=n(63),b=n.n(u),p=n(144),h=n(134),m=n(146),g=n(35),O=n(132),x=n(133),f=n(131),v=n(3);function k(){return Object(v.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(v.jsx)(f.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var C=Object(O.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function y(){var e=C();return Object(v.jsxs)("footer",{className:e.footer,children:[Object(v.jsx)(g.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(v.jsx)(g.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(v.jsx)(k,{})]})}var S=Object(O.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function N(){var e=S();return Object(v.jsx)("div",{className:e.heroContent,children:Object(v.jsxs)(x.a,{maxWidth:"sm",children:[Object(v.jsx)(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Album layout"}),Object(v.jsx)(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely."}),Object(v.jsx)("div",{className:e.heroButtons,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,justify:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(j.a,{variant:"contained",color:"primary",children:"Main call to action"})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(j.a,{variant:"outlined",color:"primary",children:"Secondary action"})})]})})]})})}var B=n(136),w=n(139),M=n(138),T=n(137),G=Object(O.a)((function(e){return{icon:{marginRight:e.spacing(2)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}})),A=function(e){var t=e.book,n=t.book,a=t.memo,c=G();return Object(v.jsxs)(B.a,{className:c.card,children:[Object(v.jsx)(T.a,{className:c.cardMedia,image:n.imageLinks.thumbnail,title:"".concat(n.title,"\u306e\u30b5\u30e0\u30cd\u30a4\u30eb")}),Object(v.jsxs)(M.a,{className:c.cardContent,children:[Object(v.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n.title}),Object(v.jsx)(g.a,{children:n.authors}),Object(v.jsx)("input",{type:"text",className:"memo",value:a,onChange:function(t){e.onMemoChange(e.book.id,t.target.value)}})]}),Object(v.jsxs)(w.a,{children:[Object(v.jsx)(j.a,{size:"small",color:"primary",onClick:function(){e.onDelete(e.book.id)},children:"\u524a\u9664"}),Object(v.jsx)(j.a,{size:"small",color:"primary",children:"Edit"})]})]})},D=n(149),R=n(142),E=n(147),W=n(143),F=n(150),I=n(140),J=n(141),L=n(46),V=n.n(L),z=function(e){var t=e.description,n=t.title,a=t.authors,c=t.imageLinks;return Object(v.jsx)("div",{className:"book-item",children:Object(v.jsxs)(I.a,{children:[Object(v.jsx)(V.a,{onClick:function(){e.onBookAdd(e.description)}}),Object(v.jsx)(J.a,{primary:n,secondary:a}),c?Object(v.jsx)("img",{src:c.thumbnail,alt:""}):null]})})};var Y=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),s=r[0],d=r[1],u=Object(a.useState)(""),b=Object(l.a)(u,2),p=b[0],h=b[1],m=Object(a.useState)(!1),g=Object(l.a)(m,2),f=g[0],k=g[1],C=e.maxResults,y=e.open,S=e.onClose,N=Object(O.a)((function(e){return Object(F.a)({root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"},"& .MuiButtonBase-root":{margin:e.spacing(1),width:"25ch"}}})}));Object(a.useEffect)((function(){if(f){var e=function(e,t,n){var a=[];return e&&a.push("intitle:".concat(e)),t&&a.push("inauthor:".concat(t)),"".concat("https://www.googleapis.com/books/v1/volumes?q="+a.join("+"),"&maxResults=").concat(n)}(s,p,C);fetch(e).then((function(e){return e.json()})).then((function(e){return function(e){return e.items.map((function(e){var t=e.volumeInfo;return{title:t.title,authors:t.authors,imageLinks:t.imageLinks}}))}(e)})).then((function(e){o(e)})).catch((function(e){throw new Error(e)}))}k(!1)}),[p,f,C,s]);var B=c.map((function(t){return Object(v.jsx)(z,{description:t,onBookAdd:function(t){return function(t){e.onBookAdd(t)}(t)}},t.title)})),w=N();return Object(v.jsx)(D.a,{fullWidth:!0,maxWidth:"sm",onClose:S,"aria-labelledby":"simple-dialog-title",open:y,children:Object(v.jsx)("form",{className:w.root,noValidate:!0,children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(R.a,{id:"simple-dialog-title",children:"Add books"}),Object(v.jsxs)("div",{className:"operation",children:[Object(v.jsx)("div",{children:Object(v.jsx)(E.a,{label:"\u30bf\u30a4\u30c8\u30eb\u3067\u691c\u7d22",variant:"outlined",onChange:function(e){d(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)(E.a,{label:"\u8457\u8005\u540d\u3067\u691c\u7d22",variant:"outlined",onChange:function(e){h(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)(j.a,{variant:"contained",type:"button",className:"button-like",onClick:function(){s||p?k(!0):alert("\u6761\u4ef6\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")},children:"\u691c\u7d22"})})]}),Object(v.jsx)(W.a,{className:"books",children:B})]})})})},q=function(e){var t=e.onClose,n=e.emails,a=e.selectedValue,c=e.open;return Object(v.jsxs)(D.a,{onClose:function(){t(a)},"aria-labelledby":"simple-dialog-title",open:c,children:[Object(v.jsx)(R.a,{id:"simple-dialog-title",children:"Add books"}),Object(v.jsx)(W.a,{children:n.map((function(e){return Object(v.jsxs)(I.a,{button:!0,onClick:function(){t(e)},children:[Object(v.jsx)(V.a,{}),Object(v.jsx)(J.a,{primary:e})]},e)}))})]})},P=(n(91),"react-hooks-tutorial"),H=Object(O.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),K=[1,2,3,4,5,6,7,8,9];function Q(){var e=H(),t=Object(a.useState)([]),n=Object(l.a)(t,2),o=n[0],i=n[1],u=Object(a.useState)(!1),O=Object(l.a)(u,2),f=O[0],k=O[1];Object(a.useEffect)((function(){var e=localStorage.getItem(P);e&&i(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem(P,JSON.stringify(o))}),[o]);var C=o.map((function(e){return Object(v.jsx)(A,{book:e,onMemoChange:function(e,t){!function(e,t){var n=o.map((function(n){return n.id===e?Object(s.a)(Object(s.a)({},n),{},{memo:t}):n}));i(n)}(e,t)},onDelete:function(e){!function(e){var t=o.filter((function(t){return t.id!==e}));i(t)}(e)}},e.id)})),S=["username@gmail.com","user02@gmail.com"],B=c.a.useState(!1),w=Object(l.a)(B,2),M=w[0],T=w[1],G=c.a.useState(S[1]),D=Object(l.a)(G,2),R=D[0],E=D[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(p.a,{}),Object(v.jsx)(d.a,{position:"relative",children:Object(v.jsxs)(m.a,{children:[Object(v.jsx)(b.a,{className:e.icon}),Object(v.jsx)(g.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Album layout"})]})}),Object(v.jsxs)("main",{children:[Object(v.jsx)(N,{}),Object(v.jsxs)("section",{className:"nav",children:[Object(v.jsx)("h1",{children:"\u8aad\u307f\u305f\u3044\u672c\u30ea\u30b9\u30c8"}),Object(v.jsx)("button",{type:"button",className:"button-like",onClick:function(){k(!0)},children:"\u672c\u3092\u8ffd\u52a0"})]}),Object(v.jsx)("section",{className:"books",children:C}),Object(v.jsx)(Y,{onClose:function(){k(!1)},open:f,maxResults:20,onBookAdd:function(e){return function(e){var t={book:e,id:Date.now(),memo:""},n=[].concat(Object(r.a)(o),[t]);i(n)}(e)}}),Object(v.jsx)(x.a,{className:e.cardGrid,maxWidth:"md",children:Object(v.jsx)(h.a,{container:!0,spacing:4,children:K.map((function(e){return Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,md:4},e)}))})}),Object(v.jsxs)(g.a,{variant:"subtitle1",children:["Selected:",R]}),Object(v.jsx)("br",{}),Object(v.jsx)(j.a,{variant:"outlined",color:"primary",onClick:function(){T(!0)},children:"Open simple dialog"}),Object(v.jsx)(q,{emails:S,selectedValue:R,open:M,onClose:function(e){T(!1),E(e)}})]}),Object(v.jsx)(y,{})]})}var U=function(e){};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root")),U()}},[[92,1,2]]]);
//# sourceMappingURL=main.9f8864b6.chunk.js.map