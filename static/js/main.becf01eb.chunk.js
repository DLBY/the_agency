(this.webpackJsonpthe_agency=this.webpackJsonpthe_agency||[]).push([[0],{132:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(61),r=s.n(c),i=(s(45),s(28)),o=s(8),l=s(2),d=s(62),u=s.n(d),j=(s(69),Object(n.createContext)({isDark:!1,modeHandleChange:function(){}})),b=s(0),m=function(){return Object(b.jsxs)("div",{"data-aos":"fade-up",children:[Object(b.jsx)("h3",{children:"Confiez vos r\xeaves \xe0 des experts du Web"}),Object(b.jsx)("p",{children:"Gr\xe2ce \xe0 notre savoir-faire, notre exp\xe9rience et notre \xe9coute, nous accompagnons nos clients dans la cr\xe9ation de site internet: \xe9tude, UX, conception, design, d\xe9veloppement, SEO. Notre agence web est capable de r\xe9pondre \xe0 tous vos besoins et d'\xe9laborer une v\xe9ritable strat\xe9gie digitale."})]})},h=function(){return Object(b.jsxs)("div",{"data-aos":"fade-up",children:[Object(b.jsx)("h3",{children:"Websitic est une Agence de communication digitale \xe0 paris ayant pour mission de vous accompagner sur vos projets digitaux."}),Object(b.jsx)("p",{children:'De l\u2019\xe9tape d\u2019avant projet web au lancement effectif du site, nous somme l\xe0 pour vous. Tout au long de la dur\xe9e de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des strat\xe9gies digitales efficaces et vous permettre d\u2019atteindre vos objectifs. Laissez votre projet entre des mains dignes de confiance, ayant accompagn\xe9 "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.'})]})},p=[{slug:"platon-study-case",name:"Platon",title:"Le challenge",studyCase:"Platon a d\xe9cid\xe9 de se lancer \xe0 l'\xe9poque malgr\xe9 une crise \xe9conomique difficile. Nous avons \xe9t\xe9 derri\xe8re eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence."},{slug:"solane-study-case",name:"Solane",title:"Solane est le premier vendeur de fraises du Poitou-Charentes",studyCase:"Et c'est gr\xe2ce \xe0 nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du march\xe9 ont fonctionn\xe9."},{slug:"sedal-study-case",name:"Sedal",title:"Sedal, l'entreprise qui a commenc\xe9 tout en bas... Et qui est toujours tout en bas",studyCase:"Malgr\xe9 nos conseils et notre site web cr\xe9\xe9 sur Wix, Sedal semble ne pas vouloir d\xe9coller. Mais comme un grand homme et une grande femme l'ont dit, 'les derniers seront les premiers'."}],g=function(){var e=Object(l.f)().clientSlug,t=Object(n.useState)(void 0),s=Object(i.a)(t,2),a=s[0],c=s[1];if(Object(n.useEffect)((function(){var t=p.find((function(t){return t.slug===e}));c(t)}),[e]),!a)return Object(b.jsx)("div",{children:"Chargement..."});var r=a.name,o=a.title,d=a.studyCase;return Object(b.jsxs)("div",{className:"caseDetail-container",children:[Object(b.jsx)("h2",{children:r}),Object(b.jsx)("h2",{className:"subtitle",children:o}),Object(b.jsx)("p",{children:d})]})},O=s.p+"static/media/platonimg.0ae49089.jpeg",x=s.p+"static/media/sedalimg.b424cfad.jpeg",v=s.p+"static/media/solaneimg.1f4ab5a7.jpeg",f=(s.p,function(){return Object(b.jsxs)("div",{"data-aos":"fade-up",children:[Object(b.jsx)("h3",{children:"Au fil des ann\xe9es, nous avons pu accompagner les meilleurs."}),Object(b.jsx)("p",{children:"D\xe9couvrez pas \xe0 pas comment nous avons \xe9t\xe9 pr\xe9sent pour lancer vos marques pr\xe9f\xe9r\xe9es."}),Object(b.jsx)("div",{className:"studyCases-container",children:p.map((function(e){return Object(b.jsx)(o.b,{to:"/works/".concat(e.slug),children:e.name})}))}),Object(b.jsxs)("div",{className:"img-container",children:[Object(b.jsx)("img",{src:O,alt:"PlatonImg"}),Object(b.jsx)("img",{src:x,alt:"PlatonImg"}),Object(b.jsx)("img",{src:v,alt:"PlatonImg"})]}),Object(b.jsx)(l.c,{children:Object(b.jsx)(l.a,{path:"/works/:clientSlug",children:Object(b.jsx)(g,{})})})]})}),y=s(64),S=s.n(y),N=function(){var e=Object(n.useContext)(j),t=e.isDark,s=e.modeHandleChange;return console.log(t),Object(b.jsx)(S.a,{onChange:function(){return s(t)},checked:t,size:80,speed:1.7,className:"toggle-btn"})},k=function(){return Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)(o.b,{to:"/the_agency",className:"logo",children:"The Agency"}),Object(b.jsxs)("ul",{className:"navigation",children:[Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/the_agency",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/works",children:"Works"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/about",children:"About"})})]}),Object(b.jsx)(N,{})]})},C=function(){return Object(b.jsx)("footer",{children:Object(b.jsxs)("p",{children:["Made with",Object(b.jsx)("span",{className:"heart",children:"\u2665"}),"by David LOBRY"]})})};u.a.init();var w=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("dark"));e&&a(e);var t=matchMedia("(prefers-color-scheme: dark)");t&&a(t.matches)}),[]),Object(b.jsx)(o.a,{children:Object(b.jsx)(j.Provider,{value:{isDark:s,modeHandleChange:function(e){var t=!e;localStorage.setItem("dark",JSON.stringify("dark",JSON.stringify(t))),a(t)}},children:Object(b.jsxs)("div",{className:s?"body-dark":"body-light",children:[Object(b.jsx)(k,{}),Object(b.jsx)("main",{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/the_agency",exact:!0,children:Object(b.jsx)(m,{})}),Object(b.jsx)(l.a,{path:"/works",children:Object(b.jsx)(f,{})}),Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(h,{})})]})}),Object(b.jsx)(C,{})]})})})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))},45:function(e,t,s){}},[[132,1,2]]]);
//# sourceMappingURL=main.becf01eb.chunk.js.map