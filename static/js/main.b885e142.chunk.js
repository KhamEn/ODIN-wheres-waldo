(this["webpackJsonpodin-wheres-waldo"]=this["webpackJsonpodin-wheres-waldo"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),a=n(14),i=n.n(a),o=(n(23),n(9)),s=(n(24),n(2));var u=function(e){var t=e.positionTop,n=e.positionLeft,r=e.handleCharacterSelection,c={top:"".concat(t,"px"),left:"".concat(n,"px")};function a(e){r(e.target.textContent)}return Object(s.jsxs)("ul",{style:c,id:"menu",children:[Object(s.jsx)("li",{onClick:a,children:"Liara"}),Object(s.jsx)("li",{onClick:a,children:"Talia"}),Object(s.jsx)("li",{onClick:a,children:"Garrus"})]})};var l=function(e){var t=e.positionX,n=e.positionY,r=e.characterName,c={position:"absolute",left:"".concat(t,"px"),top:"".concat(n,"px"),backgroundColor:"red"};return Object(s.jsxs)("div",{style:c,children:["That's not ",r]})},d=n(15),p=n(18),j=n(17),f=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return n}(n(16).Enumify);f.INACTIVE=new f,f.ACTIVE=new f,f.FINISHED=new f,f._=f.closeEnum();var b=f;var h=function(e){var t=e.status,n=e.startGame,c=e.stopGame,a=Object(r.useState)(),i=Object(o.a)(a,2),u=i[0],l=i[1],d=Object(r.useRef)(null);function p(){n(),d.current=new EventSource("https://odin-photo-tagger.herokuapp.com/timer"),d.current.onmessage=function(e){l(e.data)}}function j(){c(),d.current.close()}return Object(s.jsx)("div",{children:t===b.INACTIVE?Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:p,children:"Start"}),Object(s.jsx)("p",{children:"00:00:00"})]}):t===b.ACTIVE?Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:j,children:"Stop"}),Object(s.jsx)("p",{children:u})]}):t===b.FINISHED?Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:p,children:"Replay"}),Object(s.jsxs)("div",{children:["You finished the game in ","TODO:"]})]}):void 0})},O=n.p+"static/media/me-characters.ebedfbb0.png",g=n(10);n(37);function x(){if(!g.a.apps.length){g.a.initializeApp({apiKey:"AIzaSyDo5vRqSe9ScSIg_zGjpGmSeiifdqdZ_-g",authDomain:"learning-firestore-8aed7.firebaseapp.com",projectId:"learning-firestore-8aed7",storageBucket:"learning-firestore-8aed7.appspot.com",messagingSenderId:"395722441817",appId:"1:395722441817:web:f8bc744bbd5cb942e39d48"})}g.a.firestore().collection("characters").get().then((function(e){e.docs.forEach((function(e){var t=e.data();"liara"===t.name.toLowerCase()?m.ellipse(t.x,t.y,t.radiusX,t.radiusY,t.rotation,t.startAngle,t.endAngle):"garrus"===t.name.toLowerCase()?v.ellipse(t.x,t.y,t.radiusX,t.radiusY,t.rotation,t.startAngle,t.endAngle):"talia"===t.name.toLowerCase()&&C.ellipse(t.x,t.y,t.radiusX,t.radiusY,t.rotation,t.startAngle,t.endAngle)}))}))}var m=new Path2D,C=new Path2D,v=new Path2D;function w(e){if("liara"===e.toLowerCase())return m;if("garrus"===e.toLowerCase())return v;if("talia"===e.toLowerCase())return C;throw new Error}n(35);var I=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)({x:0,y:0}),n=Object(r.useRef)(null),c=Object(r.useRef)(new Set),a=Object(r.useRef)(null),i=Object(r.useState)(b.INACTIVE),d=Object(o.a)(i,2),p=d[0],j=d[1],f=Object(r.useState)(!1),g=Object(o.a)(f,2),m=g[0],C=g[1],v=Object(r.useState)(!1),I=Object(o.a)(v,2),y=I[0],S=I[1];function E(e){var n=e.toLowerCase();c.current.has(n)||("liara"===n&&A(w("liara"))?(c.current.add("liara"),T()):"garrus"===n&&A(w("garrus"))?(c.current.add("garrus"),T()):"talia"===n&&A(w("talia"))?(c.current.add("talia"),T()):function(e){a.current=Object(s.jsx)(l,{positionX:t.current.x,positionY:t.current.y,characterName:e}),S(!0),setTimeout((function(){S(!1)}),2e3)}(e),3===c.current.size&&j(b.FINISHED))}function A(n){return e.current.getContext("2d").isPointInPath(n,t.current.x,t.current.y)}function T(){var e=document.getElementById("App"),n=document.createElement("div");n.style.position="absolute",n.style.left="".concat(t.current.x,"px"),n.style.top="".concat(t.current.y,"px"),n.textContent="\u2705",e.appendChild(n)}return Object(r.useEffect)((function(){var t=e.current.getContext("2d"),n=new Image;n.onload=function(){e.current.width=n.naturalWidth,e.current.height=n.naturalHeight,t.drawImage(n,0,0)},n.src=O,x()}),[]),Object(s.jsxs)("div",{id:"App",className:"App",onClick:function(r){if(function(t){var n=e.current.getBoundingClientRect();return t.clientX<=n.right&&t.clientX>=n.left&&t.clientY>=n.top&&t.clientY<=n.bottom}(r)){C(!m);var c=e.current.getBoundingClientRect();t.current.x=r.clientX-c.left,t.current.y=r.clientY-c.top,n.current=Object(s.jsx)(u,{positionLeft:t.current.x,positionTop:t.current.y,handleCharacterSelection:E})}else m&&C(!1)},children:[Object(s.jsx)(h,{status:p,startGame:function(){j(b.ACTIVE)},stopGame:function(){j(b.INACTIVE)}}),m&&n.current,y&&a.current,Object(s.jsx)("canvas",{ref:e})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b885e142.chunk.js.map