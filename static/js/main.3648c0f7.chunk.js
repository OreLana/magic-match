(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},,function(c,e,t){},function(c,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),r=t(5),i=t.n(r),s=(t(10),t(3)),o=t(2),u=(t(11),t(0)),d=function(c){var e=c.card,t=c.handleChoice,n=c.flipped,a=c.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:n?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:"/img/cover.png",onClick:function(){a||t(e)},alt:"card back"})]})})},l=(t(13),[{src:"img/helmet-1.png",matched:!1},{src:"img/potion-1.png",matched:!1},{src:"img/ring-1.png",matched:!1},{src:"img/scroll-1.png",matched:!1},{src:"img/shield-1.png",matched:!1},{src:"img/sword-1.png",matched:!1}]);var j=function(){var c=Object(n.useState)([]),e=Object(o.a)(c,2),t=e[0],a=e[1],r=Object(n.useState)(0),i=Object(o.a)(r,2),j=i[0],m=i[1],b=Object(n.useState)(null),h=Object(o.a)(b,2),f=h[0],O=h[1],p=Object(n.useState)(null),g=Object(o.a)(p,2),x=g[0],v=g[1],N=Object(n.useState)(!1),k=Object(o.a)(N,2),S=k[0],M=k[1],w=function(){var c=[].concat(l,l).sort((function(){return Math.random()-.5})).map((function(c){return Object(s.a)(Object(s.a)({},c),{},{id:Math.random()})}));O(null),v(null),a(c),m(0)},C=function(c){f?v(c):O(c)};Object(n.useEffect)((function(){f&&x&&(M(!0),f.src===x.src?(a((function(c){return c.map((function(c){return c.src===f.src?Object(s.a)(Object(s.a)({},c),{},{matched:!0}):c}))})),y()):setTimeout((function(){return y()}),1e3))}),[f,x]),console.log(t);var y=function(){O(null),v(null),m((function(c){return c+1})),M(!1)};return Object(n.useEffect)((function(){w()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Magic Match"}),Object(u.jsx)("button",{onClick:w,children:"New Game"}),Object(u.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(u.jsx)(d,{card:c,handleChoice:C,flipped:c===f||c===x||c.matched,disabled:S},c.id)}))}),Object(u.jsxs)("p",{children:["Turns: ",j]})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.3648c0f7.chunk.js.map