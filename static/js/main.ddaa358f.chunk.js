(this.webpackJsonpdoors=this.webpackJsonpdoors||[]).push([[0],{10:function(e,n,r){},12:function(e,n,r){"use strict";r.r(n);var t=r(1),o=r.n(t),s=r(4),c=r.n(s),i=r(2),d=r(5),j=(r(10),r(0));var a=function(e){var n=e.value,r=e.onClick,t=e.open;return Object(j.jsx)("div",{onClick:r,className:t?"door open":"door closed",children:t?n:"?"})};var u=function(){function e(){for(var e=[],n=0;n<15;n++){var r=Math.floor(20*Math.random()+5);e.push({value:r,open:!1})}return{doors:e,turns:10,score:0}}var n=Object(t.useState)(e),r=Object(d.a)(n,2),o=r[0],s=r[1];return Object(j.jsxs)("div",{id:"app",children:[Object(j.jsx)("h1",{children:"Doors"}),Object(j.jsxs)("div",{id:"instructions",children:[Object(j.jsx)("div",{children:"Click on a door to earn the number of points behind it."}),Object(j.jsxs)("div",{children:["Doors with a ",Object(j.jsx)("strong",{children:"?"})," will have their point values revealed when clicked."]}),Object(j.jsx)("hr",{style:{width:"200px"}}),o.turns>0&&Object(j.jsxs)("div",{children:["Clicks Remaining: ",Object(j.jsx)("strong",{children:o.turns})]}),Object(j.jsxs)("div",{children:["Points: ",Object(j.jsx)("strong",{children:o.score})]}),0===o.turns&&Object(j.jsx)("button",{id:"reset",onClick:function(){s(e())},children:"Try Again"})]}),Object(j.jsx)("div",{id:"doors",children:o.doors.map((function(e,n){return Object(j.jsx)(a,{value:e.value,open:e.open,onClick:function(){return e=n,void(o.turns<=0||s(Object(i.a)(Object(i.a)({},o),{},{turns:o.turns-1,score:o.score+=o.doors[e].value,doors:o.doors.map((function(n,r){return r!==e?n:Object(i.a)(Object(i.a)({},o.doors[e]),{},{open:!0})}))})));var e}},n)}))})]})};c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ddaa358f.chunk.js.map