(this.webpackJsonpablackmagic=this.webpackJsonpablackmagic||[]).push([[0],{29:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(26),s=c.n(a),i=c(5),r=c(6),l=(c(65),c(0)),o=["btn--primary","btn--outline"],j=["btn--medium","btn--large"],b=function(e){var t=e.children,c=e.type,n=e.onClick,a=e.buttonStyle,s=e.buttonSize,i=o.includes(a)?a:o[0],r=j.includes(s)?s:j[0];return Object(l.jsx)("button",{className:"btn ".concat(i," ").concat(r),onClick:n,type:c,children:t})};c(67);var d=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),o=Object(i.a)(s,2),j=o[0],d=o[1],u=function(){return a(!1)},h=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(n.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:u,children:["Sherry Honar ",Object(l.jsx)("i",{className:"fa-solid fa-stethoscope"})]}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){return a(!c)},children:Object(l.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})})]}),Object(l.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-links",to:"/",onClick:u,children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-links",to:"/Bio",onClick:u,children:"Bio"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-links",to:"/Publications",onClick:u,children:"Publications"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-links",to:"/Services",onClick:u,children:"Services"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{className:"nav-links-mobile",to:"/ContactMe",onClick:u,children:"Contact Me"})})]}),Object(l.jsx)(r.b,{to:"/ContactMe",children:j&&Object(l.jsx)(b,{buttonStyle:"btn--outline",to:"/ContactMe",children:"Contact Me"})})]})})};c(68);var u=function(){return Object(l.jsxs)("div",{className:"footer-container",children:[Object(l.jsxs)("section",{className:"footer-subscription",children:[Object(l.jsx)("p",{className:"footer-subscription-heading",children:"Join the newsletter"}),Object(l.jsx)("p",{className:"footer-subscription-text",children:"Unsubscribe"}),Object(l.jsx)("div",{className:"input-areas",children:Object(l.jsxs)("form",{action:"/Publications",method:"POST",children:[Object(l.jsx)("input",{type:"email",name:"email",placeholder:"your email",className:"footer-input"}),Object(l.jsx)(b,{buttonstyle:"btn--outline",to:"/Publications",children:"Subscribe"})]})})]}),Object(l.jsxs)("div",{className:"footer-links",children:[Object(l.jsxs)("div",{className:"footer-link-wrapper",children:[Object(l.jsxs)("div",{className:"footer-link-items",children:[Object(l.jsx)("h2",{children:"About Us"}),Object(l.jsx)(r.b,{to:"/ContactMe",children:"Bio"}),Object(l.jsx)(r.b,{to:"/ContactMe",children:"Services"}),Object(l.jsx)(r.b,{to:"/ContactMe",children:"Publications"})]}),Object(l.jsxs)("div",{className:"footer-link-items",children:[Object(l.jsx)("h2",{children:"Contact"}),Object(l.jsx)(r.b,{to:"/ContactMe",children:"Contact Me"}),Object(l.jsx)(r.b,{to:"/ContactMe",children:"Testimonials"}),Object(l.jsx)(r.b,{to:"/ContactMe",children:"Services"})]})]}),Object(l.jsx)("div",{className:"footer-link-wrapper",children:Object(l.jsxs)("div",{className:"footer-link-items",children:[Object(l.jsx)("h2",{children:"Social Media"}),Object(l.jsx)(r.b,{to:"/ContactMe",children:"Facebook"}),Object(l.jsx)(r.b,{to:"/ContactMe",children:"LinkedIn"}),Object(l.jsx)(r.b,{to:"/ContactMe",children:"Publications"})]})})]}),Object(l.jsx)("section",{className:"social-media",children:Object(l.jsxs)("div",{className:"social-media-wrap",children:[Object(l.jsx)("div",{className:"footer-logo",children:Object(l.jsxs)(r.b,{className:"social-logo",to:"/",children:["Honar ",Object(l.jsx)("i",{className:"fa-solid fa-stethoscope"})]})}),Object(l.jsx)("small",{className:"website-rights",children:"Honar \xa9 2022"}),Object(l.jsxs)("div",{className:"social-icons",children:[Object(l.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook",children:Object(l.jsx)("i",{className:"fab fa-facebook-f"})}),Object(l.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(l.jsx)("i",{className:"fab fa-linkedin"})}),Object(l.jsx)(r.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter",children:Object(l.jsx)("i",{className:"fab fa-twitter"})})]})]})})]})},h=c(4);c(29);var m=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"cards__item",children:Object(l.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(l.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(l.jsx)("img",{src:e.src,alt:e.label,className:"cards__item__img"})}),Object(l.jsx)("div",{className:"cards__item__info",children:Object(l.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})},O=(c(69),c.p+"static/media/img-9.22116b05.jpg"),x=c.p+"static/media/img-2.bb238fc1.jpg",p=c.p+"static/media/img-3.6d683c0e.jpg",f=c.p+"static/media/img-4.a31875b7.jpg",v=c.p+"static/media/img-5.7fadbe1b.jpg";var N=function(){return Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("h1",{children:"Check out my bio"}),Object(l.jsx)("div",{className:"cards__container",children:Object(l.jsxs)("div",{className:"cards__wrapper",children:[Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(m,{src:O,text:"Have an acute issue, take a look at my specialities",label:"Services",path:"/Services"}),Object(l.jsx)(m,{src:x,text:"Passionate about research and furthering our remedies, checkout my publications",label:"Publications",path:"/Publications"})]}),Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(m,{src:p,text:"Want to know more about me, see my bio",label:"Bio",path:"/Bio"}),Object(l.jsx)(m,{src:f,text:"Learn how my PHD research founded Rhythm-AI.com",label:"RhythmAI",path:"/RhythmAI"}),Object(l.jsx)(m,{src:v,text:"Have a question, get in touch",label:"ContactMe",path:"/ContactMe"})]})]})})]})};c(70);var g=function(){return Object(l.jsxs)("div",{className:"hero-container",children:[Object(l.jsx)("video",{src:"../videos/AdobeStock_471926688_Video_HD_Preview.mov",autoPlay:!0,loop:!0,muted:!0}),Object(l.jsx)("h1",{children:"Doctor Sherry Awaits"}),Object(l.jsx)("p",{children:"Get intouch"}),Object(l.jsxs)("div",{className:"hero-btns",children:[Object(l.jsx)(r.b,{to:"/Bio",children:Object(l.jsxs)(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",to:"/Bio",children:[Object(l.jsx)("i",{class:"fa-solid fa-circle-info"})," Bio "]})}),Object(l.jsx)(r.b,{to:"/ContactMe",children:Object(l.jsxs)(b,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",to:"/ContactMe",children:[Object(l.jsx)("i",{class:"fa-solid fa-user-doctor"})," Contact "]})})]})]})};var k=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{}),Object(l.jsx)(N,{})]})},y=c(22),C=c(30);c(71);var _=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(C.a)(Object(y.a)().mark((function e(t){var n,a;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={article:c},e.next=5,fetch("/api-createpublication",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:a=e.sent,window.location="/Publications",console.log(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"createpublication-container",children:Object(l.jsxs)("section",{className:"createpublication-addpublication",children:[Object(l.jsx)("p",{className:"createpublication-heading",children:"Add Publication"}),Object(l.jsx)("div",{className:"input-areas",children:Object(l.jsxs)("form",{onSubmit:s,method:"POST",children:[Object(l.jsx)("input",{type:"text",placeholder:c,onChange:function(e){return a(e.target.value)},className:"addpublication-input"}),Object(l.jsx)(b,{buttonstyle:"btn--primary",type:"submit",to:"",children:"Add"})]})})]})})},S=c(111),w=c(109),P=c(112),M=c(108),F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},B=function(e){var t=e.publication,c=n.useState(!1),a=Object(i.a)(c,2),s=a[0],r=a[1],o=function(){return r(!1)},j=n.useState(t.article),b=Object(i.a)(j,2),d=b[0],u=b[1],h=function(){var e=Object(C.a)(Object(y.a)().mark((function e(c){var n,a;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,n={article:d},e.next=5,fetch("/api-updatepublication/".concat(t.pub_id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:a=e.sent,console.log(a),window.location="/Publications",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return console.log(d),Object(l.jsxs)("div",{children:[Object(l.jsx)(w.a,{onClick:function(){return r(!0)},"data-target":"#id".concat(t.pub_id),children:"Edit"}),Object(l.jsx)(M.a,{open:s,onClose:function(){u(t.article),o()},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(l.jsxs)(S.a,{sx:F,id:"id".concat(t.pub_id),onClick:function(){return u(t.article)},children:[Object(l.jsx)(P.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Edit Publication"}),Object(l.jsxs)(P.a,{id:"modal-modal-description",sx:{mt:2},children:[Object(l.jsx)("div",{class:"modal-body",children:Object(l.jsx)("input",{type:"text",className:"form-control",value:d,onChange:function(e){return u(e.target.value)}})}),Object(l.jsxs)("div",{class:"modal-footer",children:[Object(l.jsx)("button",{type:"button",onClick:function(e){return h(e)},children:"Save"}),Object(l.jsx)("button",{type:"button",onClick:function(){u(t.article),o()},children:"Close"})]})]})]})})]})};var A=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(C.a)(Object(y.a)().mark((function e(t){var n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api-deletepublications/".concat(t),{method:"DELETE"});case 3:n=e.sent,console.log(n),a(c.filter((function(e){return e.pub_id!==t}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=Object(C.a)(Object(y.a)().mark((function e(){var t,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api-getpublications");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,a(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(l.jsx)("div",{className:"listpublication-container",children:Object(l.jsxs)("section",{className:"listpublication",children:[Object(l.jsx)("p",{className:"listpublication-heading",children:"List Publications"}),Object(l.jsxs)("table",{className:"table mt-5 text-center",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Article"}),Object(l.jsx)("th",{children:"Edit"}),Object(l.jsx)("th",{children:"Delete"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.article}),Object(l.jsx)("td",{children:Object(l.jsx)(B,{publication:e})}),Object(l.jsx)("td",{children:Object(l.jsx)(b,{buttonstyle:"btn--primary",onClick:function(){return s(e.pub_id)},children:"Delete"})})]},e.pub_id)}))})]})]})})};var T=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(_,{}),Object(l.jsx)(A,{})]})})};var E=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{className:"bio",children:"BIO"})})};var I=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{className:"contact-me",children:"Contact Me"})})};var D=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{className:"rhythmai",children:"RhythmAI"})})};var H=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{className:"services",children:"Services"})})};var L=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{exact:!0,path:"/",element:Object(l.jsx)(k,{})}),Object(l.jsx)(h.a,{path:"/Publications",element:Object(l.jsx)(T,{})}),Object(l.jsx)(h.a,{path:"/Bio",element:Object(l.jsx)(E,{})}),Object(l.jsx)(h.a,{path:"/ContactMe",element:Object(l.jsx)(I,{})}),Object(l.jsx)(h.a,{path:"/RhythmAI",element:Object(l.jsx)(D,{})}),Object(l.jsx)(h.a,{path:"/Services",element:Object(l.jsx)(H,{})})]}),Object(l.jsx)(u,{})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,113)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};s.a.render(Object(l.jsx)(L,{}),document.getElementById("root")),J()}},[[76,1,2]]]);
//# sourceMappingURL=main.5af73f4f.chunk.js.map