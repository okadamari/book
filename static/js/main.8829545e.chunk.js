(this.webpackJsonpbook=this.webpackJsonpbook||[]).push([[0],{79:function(t,e,n){},87:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(10),i=n.n(o),r=(n(79),n(63)),s=n(51),d=n(24),l=n(145),j=n(62),u=n.n(j),p=n(144),b=n(134),h=n(146),g=n(35),m=n(132),O=n(133),x=n(131),f=n(5);function v(){return Object(f.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(f.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var k=Object(m.a)((function(t){return{icon:{marginRight:t.spacing(2)},heroContent:{backgroundColor:t.palette.background.paper,padding:t.spacing(8,0,6)},heroButtons:{marginTop:t.spacing(4)},cardGrid:{paddingTop:t.spacing(8),paddingBottom:t.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:t.palette.background.paper,padding:t.spacing(6)}}}));function C(){var t=k();return Object(f.jsxs)("footer",{className:t.footer,children:[Object(f.jsx)(g.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(f.jsx)(g.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(f.jsx)(v,{})]})}var y=n(135),B=Object(m.a)((function(t){return{icon:{marginRight:t.spacing(2)},heroContent:{backgroundColor:t.palette.background.paper,padding:t.spacing(8,0,6)},heroButtons:{marginTop:t.spacing(4)},cardGrid:{paddingTop:t.spacing(8),paddingBottom:t.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:t.palette.background.paper,padding:t.spacing(6)}}}));function N(t){var e=t.onOpen,n=B();return Object(f.jsx)("div",{className:n.heroContent,children:Object(f.jsxs)(O.a,{maxWidth:"sm",children:[Object(f.jsx)(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"\u8aad\u307f\u305f\u3044\u672c\u30ea\u30b9\u30c8"}),Object(f.jsx)(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"\u8aad\u307f\u305f\u3044\u672c\u3092\u8ffd\u52a0\u3057\u3088\u3046"}),Object(f.jsx)("div",{className:n.heroButtons,children:Object(f.jsx)(b.a,{container:!0,spacing:2,justify:"center",children:Object(f.jsx)(b.a,{item:!0,children:Object(f.jsx)(y.a,{variant:"contained",color:"primary",onClick:e,children:"\u672c\u3092\u8ffd\u52a0"})})})})]})})}var w=n(136),S=n(139),T=n(138),M=n(137),G=Object(m.a)((function(t){return{icon:{marginRight:t.spacing(2)},cardGrid:{paddingTop:t.spacing(8),paddingBottom:t.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}})),D=function(t){var e=t.book,n=e.book,a=e.memo,c=G();return Object(f.jsxs)(w.a,{className:c.card,children:[Object(f.jsx)(M.a,{className:c.cardMedia,image:n.imageLinks.thumbnail,title:"".concat(n.title,"\u306e\u30b5\u30e0\u30cd\u30a4\u30eb")}),Object(f.jsxs)(T.a,{className:c.cardContent,children:[Object(f.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n.title}),Object(f.jsx)(g.a,{children:n.authors}),Object(f.jsx)("input",{type:"text",className:"memo",value:a,onChange:function(e){t.onMemoChange(t.book.id,e.target.value)}})]}),Object(f.jsxs)(S.a,{children:[Object(f.jsx)(y.a,{size:"small",color:"primary",onClick:function(){t.onDelete(t.book.id)},children:"\u524a\u9664"}),Object(f.jsx)(y.a,{size:"small",color:"primary",children:"Edit"})]})]})},R=n(149),E=n(142),W=n(147),A=n(143),F=n(150),I=n(140),J=n(141),L=n(61),z=n.n(L),Y=function(t){var e=t.description,n=e.title,a=e.authors,c=e.imageLinks;return Object(f.jsx)("div",{className:"book-item",children:Object(f.jsxs)(I.a,{children:[Object(f.jsx)(z.a,{onClick:function(){t.onBookAdd(t.description)}}),Object(f.jsx)(J.a,{primary:n,secondary:a}),c?Object(f.jsx)("img",{src:c.thumbnail,alt:""}):null]})})};var q=function(t){var e=Object(a.useState)([]),n=Object(d.a)(e,2),c=n[0],o=n[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),s=r[0],l=r[1],j=Object(a.useState)(""),u=Object(d.a)(j,2),p=u[0],b=u[1],h=Object(a.useState)(!1),g=Object(d.a)(h,2),x=g[0],v=g[1],k=t.maxResults,C=t.open,B=t.onClose,N=Object(m.a)((function(t){return Object(F.a)({root:{"& .MuiTextField-root":{margin:t.spacing(1),width:"25ch"},"& .MuiButtonBase-root":{margin:t.spacing(1),width:"25ch"}}})}));Object(a.useEffect)((function(){if(x){var t=function(t,e,n){var a=[];return t&&a.push("intitle:".concat(t)),e&&a.push("inauthor:".concat(e)),"".concat("https://www.googleapis.com/books/v1/volumes?q="+a.join("+"),"&maxResults=").concat(n)}(s,p,k);fetch(t).then((function(t){return t.json()})).then((function(t){return function(t){return t.items.map((function(t){var e=t.volumeInfo;return{title:e.title,authors:e.authors,imageLinks:e.imageLinks}}))}(t)})).then((function(t){o(t)})).catch((function(t){throw new Error(t)}))}v(!1)}),[p,x,k,s]);var w=c.map((function(e){return Object(f.jsx)(Y,{description:e,onBookAdd:function(e){return function(e){t.onBookAdd(e)}(e)}},e.title)})),S=N();return Object(f.jsx)(R.a,{fullWidth:!0,maxWidth:"sm",onClose:B,"aria-labelledby":"simple-dialog-title",open:C,children:Object(f.jsx)("form",{className:S.root,noValidate:!0,children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(E.a,{id:"simple-dialog-title",children:"Add books"}),Object(f.jsxs)("div",{className:"operation",children:[Object(f.jsx)("div",{children:Object(f.jsx)(W.a,{label:"\u30bf\u30a4\u30c8\u30eb\u3067\u691c\u7d22",variant:"outlined",onChange:function(t){l(t.target.value)}})}),Object(f.jsx)("div",{children:Object(f.jsx)(W.a,{label:"\u8457\u8005\u540d\u3067\u691c\u7d22",variant:"outlined",onChange:function(t){b(t.target.value)}})}),Object(f.jsx)("div",{children:Object(f.jsx)(y.a,{variant:"contained",type:"button",className:"button-like",onClick:function(){s||p?v(!0):alert("\u6761\u4ef6\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")},children:"\u691c\u7d22"})})]}),Object(f.jsx)(A.a,{className:"books",children:w})]})})})},P=(n(87),"react-hooks-tutorial"),V=Object(m.a)((function(t){return{icon:{marginRight:t.spacing(2)},heroContent:{backgroundColor:t.palette.background.paper,padding:t.spacing(8,0,6)},heroButtons:{marginTop:t.spacing(4)},cardGrid:{paddingTop:t.spacing(8),paddingBottom:t.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:t.palette.background.paper,padding:t.spacing(6)}}}));function H(){var t=V(),e=Object(a.useState)([]),n=Object(d.a)(e,2),c=n[0],o=n[1],i=Object(a.useState)(!1),j=Object(d.a)(i,2),m=j[0],x=j[1];Object(a.useEffect)((function(){var t=localStorage.getItem(P);t&&o(JSON.parse(t))}),[]),Object(a.useEffect)((function(){localStorage.setItem(P,JSON.stringify(c))}),[c]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p.a,{}),Object(f.jsx)(l.a,{position:"relative",children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(u.a,{className:t.icon}),Object(f.jsx)(g.a,{variant:"h6",color:"inherit",noWrap:!0,children:"\u8aad\u307f\u305f\u3044\u672c\u30ea\u30b9\u30c8"})]})}),Object(f.jsxs)("main",{children:[Object(f.jsx)(N,{onOpen:function(){x(!0)}}),Object(f.jsx)(q,{onClose:function(){x(!1)},open:m,maxResults:20,onBookAdd:function(t){return function(t){var e={book:t,id:Date.now(),memo:""},n=[].concat(Object(r.a)(c),[e]);o(n)}(t)}}),Object(f.jsx)(O.a,{className:t.cardGrid,maxWidth:"md",children:Object(f.jsx)(b.a,{container:!0,spacing:4,children:c.map((function(t){return Object(f.jsx)(b.a,{item:!0,xs:12,sm:6,md:4,children:Object(f.jsx)(D,{book:t,onMemoChange:function(t,e){!function(t,e){var n=c.map((function(n){return n.id===t?Object(s.a)(Object(s.a)({},n),{},{memo:e}):n}));o(n)}(t,e)},onDelete:function(t){!function(t){var e=c.filter((function(e){return e.id!==t}));o(e)}(t)}})},t.id)}))})})]}),Object(f.jsx)(C,{})]})}var K=function(t){};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root")),K()}},[[88,1,2]]]);
//# sourceMappingURL=main.8829545e.chunk.js.map